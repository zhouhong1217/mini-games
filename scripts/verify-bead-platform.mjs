// 独立验证广告回调与音频顺序；按原包配置推导资源路径，不执行游戏逻辑。
import assert from 'node:assert/strict';
import vm from 'node:vm';
import {readFile,readdir,stat,mkdir,writeFile} from 'node:fs/promises';
import {resolve,extname,relative,sep} from 'node:path';
import {fileURLToPath} from 'node:url';

const project=fileURLToPath(new URL('../',import.meta.url));
const support=resolve(project,'tools/bead-craft');
const published=resolve(project,'site/games/bead-craft/game');
const source=resolve(process.argv[2]||fileURLToPath(new URL('../../4399_264779_2026-11-10/',import.meta.url)));
const output=resolve(project,'.verification/bead-platform');
const adapter=await readFile(resolve(support,'platform-adapter.js'),'utf8');
const adManager=await readFile(resolve(support,'ad-manager.js'),'utf8');
const checks=[],report={result:'running',checks,resource_audit:{},limitations:[
  '广告验证使用独立 VM 中的真实适配器和 AdMgr，未连接真实广告供应商。',
  '资源完整性覆盖已取得 bundle config 推导的 import、pack、extensionMap、redirect 路径、原生清单及序列化字体；不证明每关均可通关。',
  '不从二进制资源扫描结论推断不存在内部远程依赖；真实浏览器断网与玩法由 verify-bead.mjs 另行验证。'
]};

function fixture(){
  const events=[],outbound=[];
  const blocked=kind=>{outbound.push(kind);throw Error('Unexpected external dependency: '+kind)};
  const context={console,navigator:{vibrate(value){events.push('vibrate:'+value)},sendBeacon(){blocked('beacon')}},
    fetch(){blocked('fetch')},XMLHttpRequest:class{constructor(){blocked('xhr')}},WebSocket:class{constructor(){blocked('websocket')}},
    document:{createElement(){blocked('createElement')}},Image:class{constructor(){blocked('image')}}};
  context.window=context;vm.createContext(context);
  new vm.Script(adapter,{filename:'bead-craft/platform-adapter.js'}).runInContext(context,{timeout:1000});
  let registration;
  context.System={register(name,deps,declare){assert.equal(name,'chunks:///_virtual/AdMgr.ts');assert.deepEqual(Array.from(deps),['cc','./AudioMgr.ts','./PlayerData.ts']);registration=declare}};
  new vm.Script(adManager,{filename:'bead-craft/ad-manager.js'}).runInContext(context,{timeout:1000});
  assert.ok(registration,'AdMgr registration missing');
  const exported={};
  const module=registration((name,value)=>{exported[name]=value});
  module.setters[0]({cclegacy:{_RF:{push(){},pop(){}}}});
  module.setters[1]({AudioManager:{inst:{pauseBGM(){events.push('pause')},resumeBGM(){events.push('resume')}}}});
  module.setters[2]({PlayerData:{inst:{vibrateOn:true}}});module.execute();
  return {api:context.BeadCraftPlatform,ad:exported.AdMgr.inst,exported,events,outbound};
}
async function test(name,run){await run();checks.push(name)}
const received=(calls,label)=>function(){calls.push([label,arguments.length])};
const ABC='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
function decode(value){
  const parts=value.split('@');let id=parts[0];
  if(id.length===22){let h=id.slice(0,2);for(let i=2;i<22;i+=2){const a=ABC.indexOf(id[i]),b=ABC.indexOf(id[i+1]);assert.ok(a>=0&&b>=0,'Invalid compressed UUID');h+=(a>>2).toString(16)+(((a&3)<<2)|(b>>4)).toString(16)+(b&15).toString(16)}id=h.slice(0,8)+'-'+h.slice(8,12)+'-'+h.slice(12,16)+'-'+h.slice(16,20)+'-'+h.slice(20)}
  return [id,...parts.slice(1)].join('@');
}
async function inventory(root){
  const files=[];async function visit(dir){for(const entry of await readdir(dir,{withFileTypes:true})){const path=resolve(dir,entry.name);if(entry.isDirectory())await visit(path);else if(entry.isFile())files.push(relative(root,path).split(sep).join('/'));else throw Error('Unexpected non-file resource: '+path)}}
  await visit(root);return files.sort();
}

try{
  await test('published adapter equals maintained independent implementation',async()=>{
    assert.equal(await readFile(resolve(published,'platform-adapter.js'),'utf8'),adapter);
    assert.ok((await readFile(resolve(published,'assets/main/index.js'),'utf8')).includes(adManager.trim()),'Maintained AdMgr is absent from published bundle');
  });
  await test('default reward calls success once synchronously with zero arguments',()=>{
    const f=fixture(),calls=[];f.api.reward(received(calls,'success'),received(calls,'failure'));
    assert.deepEqual(calls,[['success',0]]);assert.deepEqual(f.outbound,[]);
  });
  for(const order of [['success','success','failure'],['failure','failure','success']]){
    await test('provider '+order.join('/')+' settles only the first callback',()=>{
      const f=fixture(),calls=[];let attempts=0;
      f.api.setProvider({reward(success,failure){attempts++;for(const value of order)(value==='success'?success:failure)()}});
      f.api.reward(received(calls,'success'),received(calls,'failure'));
      assert.equal(attempts,1);assert.deepEqual(calls,[[order[0],0]]);assert.deepEqual(f.outbound,[]);
    });
  }
  await test('late repeated callbacks remain mutually exclusive per reward request',()=>{
    const f=fixture(),calls=[],callbacks=[];
    f.api.setProvider({reward(success,failure){callbacks.push({success,failure})}});
    f.api.reward(received(calls,'first'),received(calls,'unexpected-first'));
    f.api.reward(received(calls,'unexpected-second'),received(calls,'second'));
    assert.deepEqual(calls,[]);callbacks[1].failure();callbacks[0].success();callbacks[0].failure();callbacks[1].success();
    assert.deepEqual(calls,[['second',0],['first',0]]);assert.deepEqual(f.outbound,[]);
  });
  await test('consumer callback reentry cannot replay success or switch to failure',()=>{
    const f=fixture(),calls=[];let complete,fail;
    f.api.setProvider({reward(success,failure){complete=success;fail=failure;complete()}});
    f.api.reward(function(){calls.push(['success',arguments.length]);complete();fail()},received(calls,'failure'));
    assert.deepEqual(calls,[['success',0]]);assert.deepEqual(f.outbound,[]);
  });
  await test('provider exception before settlement fails once; null provider restores local completion',()=>{
    const f=fixture(),calls=[];f.api.setProvider({reward(){throw Error('provider failure')}});
    f.api.reward(received(calls,'unexpected'),received(calls,'failure'));f.api.setProvider(null);
    f.api.reward(received(calls,'local'),received(calls,'unexpected'));assert.deepEqual(calls,[['failure',0],['local',0]]);
  });
  for(const outcome of ['success','failure'])await test('AdMgr '+outcome+' order is pause → callback → resume, exactly once',()=>{
    const f=fixture();f.api.setProvider({reward(success,failure){const selected=outcome==='success'?success:failure;selected();selected();(outcome==='success'?failure:success)()}});
    f.ad.playRewardVideo(()=>f.events.push('success'),()=>f.events.push('failure'));
    assert.deepEqual(f.events,['pause',outcome,'resume']);assert.deepEqual(f.outbound,[]);
  });
  await test('default AdMgr preserves pause → success → resume with no failure callback',()=>{
    const f=fixture();f.ad.playRewardVideo(()=>f.events.push('success'),()=>f.events.push('failure'));
    assert.deepEqual(f.events,['pause','success','resume']);assert.equal(f.ad.platform,4);assert.equal(f.exported.PlatformType.Local,4);
  });
  for(const outcome of ['success','failure'])await test('throwing '+outcome+' callback still resumes audio once without replay',()=>{
    const f=fixture(),expected=Error('consumer callback');f.api.setProvider({reward(success,failure){(outcome==='success'?success:failure)()}});
    const throwing=()=>{f.events.push(outcome);throw expected},other=()=>f.events.push('unexpected');
    assert.throws(()=>f.ad.playRewardVideo(outcome==='success'?throwing:other,outcome==='failure'?throwing:other),error=>error===expected);
    assert.deepEqual(f.events,['pause',outcome,'resume']);
  });
  await test('interstitial and vibration use only the independent provider or local browser interface',()=>{
    const f=fixture();f.ad.showInterstitial();assert.deepEqual(f.events,[]);
    f.api.setProvider({interstitial(){f.events.push('interstitial')}});f.ad.showInterstitial();f.ad.vibrate();
    assert.deepEqual(f.events,['interstitial','vibrate:15']);assert.deepEqual(f.outbound,[]);
  });

  const files=await inventory(published),existing=new Set(files),required=new Set(),configs=new Map();
  const nativeList=JSON.parse(await readFile(resolve(source,'tools/native-paths.json'),'utf8'));
  report.resource_audit.published_files=files.length;
  await test('published text has no original advertising SDK or platform module references',async()=>{
    const banned=/\bh5api\b|h5api-interface|\bIASDK\b|\b(?:AndroidPlatform|H4399Platform|WxPlatform)\.ts/;
    const matches=[];
    for(const path of files)if(['.js','.html','.json','.css'].includes(extname(path))){const text=await readFile(resolve(published,path),'utf8');if(banned.test(text))matches.push(path)}
    assert.deepEqual(matches,[]);
    // Cocos 引擎保留通用 jsbBridgeWrapper 类型导出；只禁止游戏层使用原平台桥接实现。
    assert.doesNotMatch(await readFile(resolve(published,'assets/main/index.js'),'utf8'),/jsbBridgeWrapper|NativeBridge/);
  });
  await test('bundle configs define internally resolvable import, pack, extensionMap and redirect paths',async()=>{
    for(const path of files.filter(path=>/^assets\/[^/]+\/config\.json$/.test(path))){
      const config=JSON.parse(await readFile(resolve(published,path),'utf8'));assert.ok(!configs.has(config.name),'Duplicate bundle name');
      const base=path.slice(0,path.lastIndexOf('/')),extension=new Map(),packFor=new Map(),redirect=new Map();
      assert.equal(config.versions.import.length,0,'Versioned import path audit needs updating');assert.equal(config.versions.native.length,0,'Versioned native path audit needs updating');
      for(const [ext,indices] of Object.entries(config.extensionMap))for(const index of indices)extension.set(index,ext);
      for(const [pack,indices] of Object.entries(config.packs)){
        required.add(base+'/'+config.importBase+'/'+pack.slice(0,2)+'/'+pack+'.json');
        // 原包允许共享资源出现在多个 pack；检查所有 pack，按首个映射追踪 redirect。
        for(const index of indices)if(!packFor.has(index))packFor.set(index,pack);
      }
      for(let i=0;i<config.redirect.length;i+=2)redirect.set(config.redirect[i],config.deps[Number(config.redirect[i+1])]);
      configs.set(config.name,{config,base,extension,packFor,redirect});required.add(path);
      if(config.hasPreloadScript)required.add(base+'/index.js');
    }
    function assetPath(bundle,index,chain=[]){
      const data=configs.get(bundle);assert.ok(data,'Redirect bundle missing: '+bundle);const {config,base,extension,packFor,redirect}=data;
      assert.ok(Number.isInteger(index)&&index>=0&&index<config.uuids.length,'Invalid UUID index');
      const key=bundle+':'+index;assert.ok(!chain.includes(key),'Redirect cycle: '+[...chain,key].join(' → '));
      if(redirect.has(index)){
        const target=redirect.get(index),other=configs.get(target);assert.ok(other,'Redirect dependency absent: '+target);
        const decoded=decode(config.uuids[index]),match=other.config.uuids.findIndex(value=>decode(value)===decoded);assert.ok(match>=0,'Redirect target UUID missing: '+key);
        return assetPath(target,match,[...chain,key]);
      }
      if(packFor.has(index)){const pack=packFor.get(index);return base+'/'+config.importBase+'/'+pack.slice(0,2)+'/'+pack+'.json'}
      const uuid=config.uuids[index];if(Object.hasOwn(config.packs,uuid))return base+'/'+config.importBase+'/'+uuid.slice(0,2)+'/'+uuid+'.json';
      const full=decode(uuid);return base+'/'+config.importBase+'/'+full.slice(0,2)+'/'+full+(extension.get(index)||'.json');
    }
    const bundles=[];
    for(const [name,data] of configs){const paths=new Set();for(let i=0;i<data.config.uuids.length;i++)paths.add(assetPath(name,i));for(const path of paths)required.add(path);
      bundles.push({name,uuids:data.config.uuids.length,packs:Object.keys(data.config.packs).length,extension_map_entries:data.extension.size,redirects:data.redirect.size,import_paths:paths.size});}
    report.resource_audit.bundles=bundles;report.resource_audit.required_config_and_import_paths=required.size;
    const missing=[...required].filter(path=>!existing.has(path));report.resource_audit.missing_import_paths=missing;assert.deepEqual(missing,[]);
  });
  await test('every manifest native path exists as a nonempty published resource',async()=>{
    const missing=[];for(const path of new Set(nativeList)){if(!existing.has(path)||(await stat(resolve(published,path))).size===0)missing.push(path)}
    report.resource_audit.native_manifest_paths=new Set(nativeList).size;report.resource_audit.missing_native_paths=missing;assert.deepEqual(missing,[]);
  });
  await test('serialized packed font records resolve to a native file in their own bundle',async()=>{
    const fonts=[];
    for(const {config,base} of configs.values())for(const [pack,indices] of Object.entries(config.packs)){
      const path=base+'/'+config.importBase+'/'+pack.slice(0,2)+'/'+pack+'.json';const text=await readFile(resolve(published,path),'utf8');if(!text.includes('cc.TTFFont'))continue;
      const data=JSON.parse(text);assert.equal(data[0],1);assert.equal(data[5].length,indices.length,'Packed asset order mismatch');
      function visit(value,recordIndex){if(!Array.isArray(value))return;
        if(Number.isInteger(value[0])&&Array.isArray(data[4][value[0]])){
          const mask=data[4][value[0]],type=data[3][mask[0]];
          if(type?.[0]==='cc.TTFFont'&&typeof value[2]==='string'&&/\.(?:ttf|otf|woff2?)$/i.test(value[2])){
            const id=decode(config.uuids[indices[recordIndex]]),native=base+'/'+config.nativeBase+'/'+id.slice(0,2)+'/'+id+'/'+value[2];
            fonts.push({bundle:config.name,pack,uuid:id,file:value[2],path:native});
          }
        }
        for(const child of value)visit(child,recordIndex);
      }
      data[5].forEach((record,index)=>visit(record,index));
    }
    assert.ok(fonts.length>0,'No serialized fonts audited');report.resource_audit.fonts=fonts;
    const missing=fonts.filter(font=>!existing.has(font.path)).map(font=>font.path);report.resource_audit.missing_font_paths=missing;assert.deepEqual(missing,[]);
    for(const {path} of fonts)assert.ok((await stat(resolve(published,path))).size>0);
  });
  await test('published projectBundles metadata resolves to available bundle configs',async()=>{
    const settings=JSON.parse(await readFile(resolve(published,'src/settings.json'),'utf8'));
    const missing=settings.assets.projectBundles.filter(name=>!configs.has(name));report.resource_audit.project_bundles=settings.assets.projectBundles;
    report.resource_audit.missing_project_bundles=missing;assert.deepEqual(missing,[]);
  });
  report.result='pass';
}catch(error){report.result='fail';report.error=error.stack;process.exitCode=1}
finally{await mkdir(output,{recursive:true});await writeFile(resolve(output,'report.json'),JSON.stringify(report,null,2)+'\n');console.log(JSON.stringify(report,null,2))}
