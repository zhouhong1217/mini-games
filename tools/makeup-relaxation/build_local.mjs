import { readFile, writeFile, mkdir, cp, readdir, stat } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { createRequire } from 'node:module';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { parseArgs } from 'node:util';

const root = path.dirname(fileURLToPath(import.meta.url));
const repo = path.resolve(root, '../..');
const cache = path.join(repo, '.verification/makeup-relaxation');
const { values } = parseArgs({options:{artifacts:{type:'string'},output:{type:'string'},evidence:{type:'string'},manifest:{type:'string'},help:{type:'boolean'}}});
if (values.help) {
  console.log('Usage: node tools/makeup-relaxation/build_local.mjs [--artifacts PATH] [--output PATH] [--evidence PATH] [--manifest PATH]\nDefaults: artifacts=.verification/makeup-relaxation/artifacts, output=site/games/makeup-relaxation/game, evidence=.verification/makeup-relaxation/evidence (relative to repository).');
  process.exit(0);
}
const original = path.resolve(values.artifacts ?? path.join(cache, 'artifacts'));
const site = path.resolve(values.output ?? path.join(repo, 'site/games/makeup-relaxation/game'));
const evidence = path.resolve(values.evidence ?? path.join(cache, 'evidence'));
const manifestFile = path.resolve(values.manifest ?? path.join(repo, 'provenance/makeup-relaxation.json'));
const inside = (parent, child) => { const relative = path.relative(parent,child); return relative==='' || (!relative.startsWith('..'+path.sep) && relative!=='..' && !path.isAbsolute(relative)); };
if (inside(original,site) || inside(site,original) || inside(original,evidence)) throw new Error('Artifacts, output and evidence must not overlap the immutable artifact directory');
const sha256 = s => createHash('sha256').update(s).digest('hex');
const pinned = JSON.parse(await readFile(manifestFile,'utf8'));
if (pinned.original_files_columns?.join(',') !== 'path,bytes,sha256') throw new Error('Unknown pinned manifest schema');
for (const [name,bytes,hash] of pinned.original_files) {
  const file=path.resolve(original,name);
  if (!inside(original,file) || file===original) throw new Error('Unsafe artifact path: '+name);
  const data=await readFile(file);
  if (data.length!==bytes || sha256(data)!==hash) throw new Error('Original artifact mismatch: '+name);
}
let parserPath = process.env.BABEL_PARSER_MODULE;
if (!parserPath) {
  try { parserPath=createRequire(import.meta.url).resolve('@babel/parser'); } catch {}
}
if (!parserPath) throw new Error('Run npm ci --prefix tools/makeup-relaxation --ignore-scripts, or set BABEL_PARSER_MODULE to @babel/parser/lib/index.js');
const { parse } = await import(pathToFileURL(parserPath));
const patches = [];
const ast = s => parse(s, { sourceType: 'script' });
function walk(node, visit) {
  if (!node || typeof node !== 'object') return;
  visit(node);
  for (const [key, value] of Object.entries(node)) {
    if (key === 'loc' || key === 'tokens' || key === 'comments') continue;
    if (Array.isArray(value)) value.forEach(v => walk(v, visit));
    else if (value && typeof value === 'object') walk(value, visit);
  }
}
function edits(s, replacements) {
  const selected = [];
  for (const edit of replacements.sort((a,b) => a.start-b.start || b.end-a.end)) {
    if (!selected.some(e => e.start <= edit.start && e.end >= edit.end)) selected.push(edit);
  }
  for (const e of selected.sort((a,b) => b.start-a.start)) s = s.slice(0,e.start)+e.text+s.slice(e.end);
  return s;
}
function registrations(s) {
  const modules = new Map();
  walk(ast(s), n => {
    if (n.type === 'CallExpression' && n.callee.type === 'MemberExpression' && n.callee.object.name === 'System' && n.callee.property.name === 'register' && n.arguments[0]?.type === 'StringLiteral') {
      modules.set(n.arguments[0].value, s.slice(n.start,n.end)+';');
    }
  });
  return modules;
}
function dependencies(s) { return ast(s).program.body[0].expression.arguments[1].elements.map(n=>n.value); }
function dropDependencies(s, names) {
  const call = ast(s).program.body[0].expression;
  const deps = call.arguments[1];
  const keep = deps.elements.map((n,i)=>({n,i})).filter(({n})=>!names.includes(n.value));
  if (keep.length === deps.elements.length) return s;
  const returned = call.arguments[2].body.body.find(n=>n.type==='ReturnStatement').argument;
  const setters = returned.properties.find(n=>n.key.name==='setters').value;
  return edits(s,[{start:deps.start,end:deps.end,text:JSON.stringify(keep.map(({n})=>n.value))},
    {start:setters.start,end:setters.end,text:'['+keep.map(({i})=>s.slice(setters.elements[i].start,setters.elements[i].end)).join(',')+']'}]);
}
function replaceMethod(s, name, replacement) {
  const found=[];
  walk(ast(s), n=> {
    if(n.type==='AssignmentExpression' && n.left.type==='MemberExpression' && n.left.property.name===name && n.right.type==='FunctionExpression') found.push({start:n.right.start,end:n.right.end,text:replacement});
  });
  if(found.length!==1) throw new Error(`Expected one ${name}, found ${found.length}`);
  patches.push({method:name,replacements:found.length});
  return edits(s,found);
}
function removeMethod(s, name) {
  const found=[];
  walk(ast(s), n=> {
    if(n.type==='AssignmentExpression' && n.left.type==='MemberExpression' && n.left.property.name===name && n.right.type==='FunctionExpression') found.push({start:n.start,end:n.end,text:'void 0'});
  });
  if(found.length!==1) throw new Error(`Expected one removable ${name}, found ${found.length}`);
  patches.push({operation:'remove-unused-ad-related-method',method:name,replacements:found.length});
  return edits(s,found);
}
function persistSoundFlags(s) {
  const call=ast(s).program.body[0].expression;
  const index=call.arguments[1].elements.findIndex(n=>n.value==='./GmSaveMgr.ts');
  const returned=call.arguments[2].body.body.find(n=>n.type==='ReturnStatement').argument;
  const setters=returned.properties.find(n=>n.key.name==='setters').value;
  const setter=setters.elements[index];
  let binding=false;
  walk(setter,n=>{if(n.type==='AssignmentExpression' && n.left.name==='p' && n.right.type==='MemberExpression' && n.right.property.name==='default')binding=true;});
  if(index<0 || !binding)throw new Error('GmUtils SaveMgr binding mismatch');
  const found=[];
  walk(ast(s),n=>{if(n.type==='AssignmentExpression' && n.left.type==='MemberExpression' && n.left.property.name==='setFlag' && n.right.type==='FunctionExpression')found.push({start:n.right.body.end-1,end:n.right.body.end-1,text:';p.getInstance().saveMainData();'});});
  if(found.length!==1)throw new Error('GmUtils.setFlag mismatch');
  patches.push({operation:'persist-sound-flags',module:'GmUtils.ts',method:'setFlag',save_manager_binding:'p',reason:'Original setFlag only persisted _Utils_Flag_ although sound fields are stored in _mainData_.'});
  return edits(s,found);
}
function stripCalls(s) {
  const found=[];
  walk(ast(s),n=>{
    if(n.type!=='CallExpression'||n.callee.type!=='MemberExpression')return;
    const callee=s.slice(n.callee.start,n.callee.end), method=n.callee.property.name;
    if (/^window\.(AD|ovad)\./.test(callee) || ['reportEvent','reportEventFirst','showInterstitial'].includes(method)) found.push({start:n.start,end:n.end,text:'void 0'});
    else if(method==='showVideo') {
      const callback=n.arguments[0];
      if(!callback || !['FunctionExpression','ArrowFunctionExpression'].includes(callback.type)) throw new Error('Unknown reward callback');
      found.push({start:n.start,end:n.end,text:`(${s.slice(callback.start,callback.end)})(true)`});
    }
    // 平台按钮与广告组件不进入本地游戏。
    else if(/^\w+\.Ad\(\)\.showPlayBtn$/.test(callee)||/\.show(?:Privacy|UserPrivacy|GameAge|MoreGame|AddDesktop)WithParent$/.test(callee)||/\.show(?:Privacy|UserPrivacy|MoreGame|AddDesktop)BtnWithParent$/.test(callee)) found.push({start:n.start,end:n.end,text:'void 0'});
  });
  patches.push({operation:'remove-platform-and-ad-calls',replacements:found.length});
  s=edits(s,found);
  const markers=[];
  walk(ast(s),n=>{
    if(n.type==='AssignmentExpression' && n.left.type==='MemberExpression' && n.left.property.name==='active' && /(?:video|视频)/.test(s.slice(n.left.start,n.left.end))) markers.push({start:n.right.start,end:n.right.end,text:'false'});
  });
  return edits(s,markers);
}

await mkdir(site,{recursive:true});
await cp(original,site,{recursive:true});
const mainFile='assets/main/index.e576d.js',faceFile='assets/Face/index.b21d5.js';
const sourceMain=await readFile(path.join(original,mainFile),'utf8');
const sourceFace=await readFile(path.join(original,faceFile),'utf8');
const main=registrations(sourceMain), face=registrations(sourceFace);
const prefix='chunks:///_virtual/';
const roots=['GameConfig.ts','DownloadBundle.ts','NodeIntersection.ts','autoAngle.ts','autoAnimation.ts','autoCamera.ts','autoDrag.ts','autoFix.ts','autoLayout.ts','autoScrollView.ts','drawMask.ts','findPath.ts','skeletonHide.ts','tools.ts','GmBundleMgr.ts','GmEnum.ts','GmEventsManager.ts','GmJsonMgr.ts','GmNewsMgr.ts','GmSaveMgr.ts','GmSoundMgr.ts','GmUiMgr.ts','GmUtils.ts','BaseUI.ts','DotNews.ts','UIControl.ts','autoLabel.ts','cconb.ts','GxFirstScene.ts'];
const removedDependencies=['./GmAdMgr.ts','./GxGame.ts'];
for(const [id,code] of [...main,...face]) {
  if(id===prefix+'main')continue;
  let next=code;
  if(id===prefix+'DownloadBundle.ts') next=next.replace('_.getInstance(),','');
  if(id===prefix+'GxFirstScene.ts') {
    next=replaceMethod(next,'onLoad','function(){this.canJumpToNext=true;this.jkTitle.node.active=false;this.jkContent.node.active=false;this.scheduleOnce(this.jumpScene.bind(this),0)}');
    next=replaceMethod(next,'enterGame','function(){this.jumpScene()}');
    next=dropDependencies(next,dependencies(next).filter(d=>d!=='cc'&&d!=='./rollupPluginModLoBabelHelpers.js'));
  }
  if(id===prefix+'uiFaceXuanRen.ts') next=replaceMethod(next,'_goHuaZhuang_CB','function(){if(this._selectItem){I.getInstance().unlockAvatar(this._selectItem.name);I.getInstance().DIY_Mode=false;I.getInstance().avatarID=parseInt(this._selectItem.name);g.getInstance().uiShow("Face/prefab/uiLiaoTian",true)}}');
  if(id===prefix+'GmUtils.ts') {
    // 化妆玩法仅调用 getFlag/setFlag 操作声音；addFlag 无调用且是 MedalMgr 唯一使用方。
    next=removeMethod(next,'addFlag');
    next=dropDependencies(next,['./GmMedalMgr.ts']);
    next=persistSoundFlags(next);
  }
  if(id===prefix+'GmSoundMgr.ts') next=removeMethod(next,'muteByVideAD');
  if(id===prefix+'autoDrag.ts') {
    next=replaceMethod(next,'init','function(t,o,i){this._call_move=o;this._call_end=i;this._call_touch=t}');
    next=replaceMethod(next,'setVideo','function(){if(this.videoNode)this.videoNode.active=false}');
    next=replaceMethod(next,'onTouchStart','function(){this.node.getPosition(this.lastPos);this._touch=true;if(this._call_touch)this._call_touch(this.node)}');
    next=replaceMethod(next,'onTouchEnd','function(){if(this._touch){if(this._call_end)this._call_end(this.node);this.node.setPosition(this.lastPos);this._touch=false}}');
    next=replaceMethod(next,'onTouchMove','function(t){if(this._touch){var o=this.node.getPosition(),i=t.getUIDelta().x,e=t.getUIDelta().y;this.node.setPosition(o.x+i,o.y+e,o.z);if(this._call_move)this._call_move(this.node,i,e)}}');
    if(next.split('o._video_func=null,').length!==2)throw new Error('autoDrag callback field mismatch');
    next=next.replace('o._video_func=null,','').replace('displayName:"视频标"','displayName:"标记节点"');
  }
  if(face.has(id)||roots.some(n=>id===prefix+n))next=stripCalls(next);
  next=dropDependencies(next,removedDependencies);
  (main.has(id)?main:face).set(id,next);
}

// 仅注册玩法组件及其依赖，发布包中的跨平台广告/统计 SDK 整体不输出。
const included=new Set();
function include(id){
  if(included.has(id))return;
  if(!main.has(id))throw new Error('Missing module '+id);
  included.add(id);
  for(const dep of dependencies(main.get(id)))if(dep.startsWith('./') && main.has(prefix+dep.slice(2)))include(prefix+dep.slice(2));
}
roots.forEach(n=>include(prefix+n));
for(const id of included)if(/Adapter|GxEngine|Analytics|GxSDK|AdMgr|\/AD\.ts|ovad/.test(id))throw new Error('Unexpected SDK dependency '+id);
const rootModule=`System.register(${JSON.stringify(prefix+'main')},${JSON.stringify(roots.map(n=>'./'+n))},function(){return {setters:${JSON.stringify(roots.map(()=>null))},execute:function(){}}});`;
const alias=name=>`System.register('virtual:///prerequisite-imports/${name}',['${prefix+name}'],function(){return {setters:[null],execute:function(){}}});`;
const localMain=[...included].map(id=>main.get(id)).join('\n')+'\n'+rootModule+'\n'+alias('main');
const localFace=[...face.values()].filter(s=>!s.startsWith('System.register("virtual:')).join('\n')+'\n'+alias('Face');
for(const term of ['GmMedalMgr','muteByVideAD','reportMedal','_video_func','addFlag','观看视频','免广券','视频广告'])if(localMain.includes(term)||localFace.includes(term))throw new Error('Remaining executable ad-related code: '+term);
patches.push({operation:'retain-passive-shared-storage-fields',fields:['GameConfig.mainData.freeAdCount','GameConfig.NotAdFlag','Flag_Key.免广告券'],reason:'Original shared data/enum compatibility only; no ad callback, counter update, gate or network request remains.'});
await writeFile(path.join(site,mainFile),localMain);
await writeFile(path.join(site,faceFile),localFace);
const html=(await readFile(path.join(original,'gameIndex.html'),'utf8')).replace(/<script src="https:\/\/h\.api\.4399\.com[^>]*><\/script>/,'<script src="local-runtime.js"></script>').replace('<title>Cocos Creator | 化妆游戏</title>','<title>化妆解压模拟</title>');
await writeFile(path.join(site,'index.html'),html);
await writeFile(path.join(site,'gameIndex.html'),html);
const application=(await readFile(path.join(original,'application.123ac.js'),'utf8')).replace('cc = engine;','cc = engine;\n            window.MakeupLocal.attachEngine(cc);');
if(!application.includes('MakeupLocal.attachEngine'))throw new Error('Engine hook mismatch');
await writeFile(path.join(site,'application.123ac.js'),application);
await cp(path.join(root,'local-runtime.js'),path.join(site,'local-runtime.js'));
// 源站此图集只有 PNG，移除不存在的压缩纹理格式声明。
const atlasFile=path.join(site,'assets/resources/import/15/159c62c67.961a2.json');
const atlas=await readFile(atlasFile,'utf8');
if(!atlas.includes('7@96_6@72_0_5@85'))throw new Error('Atlas format mismatch');
const localAtlas=atlas.replace('7@96_6@72_0_5@85','0');
await writeFile(atlasFile,localAtlas);
patches.push({operation:'use-available-png-atlas',file:path.relative(site,atlasFile).split(path.sep).join('/'),original_sha256:sha256(atlas),local_sha256:sha256(localAtlas)});
// 预制体保留索引结构，已移除的免广组件转为无行为的基础组件。
const menuPack=path.join(site,'assets/Face/import/0b/0b1ca8f66.6ae0e.json');
const menu=await readFile(menuPack,'utf8');
if(!menu.includes('35306SR25xO9pOH6ivIPrxM'))throw new Error('Menu component mismatch');
const localMenu=menu.replace('35306SR25xO9pOH6ivIPrxM','cc.Component');
await writeFile(menuPack,localMenu);
patches.push({operation:'replace-ad-component-with-inert-base-component',file:path.relative(site,menuPack).split(path.sep).join('/'),original_sha256:sha256(menu),local_sha256:sha256(localMenu)});
await mkdir(evidence,{recursive:true});
await writeFile(path.join(evidence,'local-patches.json'),JSON.stringify({main:{original:sha256(sourceMain),local:sha256(localMain),originalModules:main.size,retainedModules:included.size,removedModules:[...main.keys()].filter(id=>!included.has(id)&&id!==prefix+'main')},face:{original:sha256(sourceFace),local:sha256(localFace)},patches},null,2)+'\n');
async function outputFiles(directory,relative='') {
  const result=[];
  for (const name of (await readdir(directory)).sort()) {
    const file=path.join(directory,name), key=path.posix.join(relative,name);
    if ((await stat(file)).isDirectory()) result.push(...await outputFiles(file,key));
    else { const data=await readFile(file); result.push([key,data.length,sha256(data)]); }
  }
  return result;
}
const outputs=await outputFiles(site);
await writeFile(path.join(evidence,'build-manifest.json'),JSON.stringify({columns:['path','bytes','sha256'],original_verified_files:pinned.original_files.length,files:outputs},null,2)+'\n');
console.log(JSON.stringify({site,evidence,verifiedOriginals:pinned.original_files.length,outputFiles:outputs.length,mainBytes:Buffer.byteLength(localMain),removedModules:main.size-included.size-1,faceBytes:Buffer.byteLength(localFace)}));
