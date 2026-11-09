// 从已校验原包生成独立静态副本；构建期删除平台 SDK 与服务器实现。
import {readFile,writeFile,mkdir} from 'node:fs/promises';
import {resolve,dirname} from 'node:path';
import {fileURLToPath} from 'node:url';
import {createHash} from 'node:crypto';
import {parse} from '../tools/1in8b/node_modules/acorn/dist/acorn.mjs';
if(!process.argv[2])throw new Error('Usage: node scripts/build-relaxation.mjs /path/to/4399_251997_2026-11-09');
const source=resolve(process.argv[2]), original=resolve(source,'original');
const output=fileURLToPath(new URL('../site/games/level-relaxation/game/',import.meta.url));
const sha256=bytes=>createHash('sha256').update(bytes).digest('hex');
const manifestBytes=await readFile(resolve(source,'tools/acquisition-manifest.json'));
const manifest=JSON.parse(manifestBytes);
const pin='a3e7b4d54add8964055ded38ee2542bd045028ef554219c98ea67eafa6e7fa3a';
// 原站确证404的三处陈旧图片引用：保留命中区几何、文字提示与弹窗交互。
const unavailableImages=[
 {path:'data/title.png',context:'MessageBoxPanel._dscData Title decorative backdrop',before:'"className": "Title", "classType": "dImage", "height": 144, "resourceFileName": "data/title.png"',after:'"className": "Title", "classType": "dImage", "height": 144, "resourceFileName": ""'},
 {path:'level/202.png',context:'Level2._dscData invisible Check target; keep dimensions and hit coordinates',before:'"className": "Check", "classType": "dImage", "height": 783, "resourceFileName": "level/202.png", "visible": 0, "width": 646',after:'"className": "Check", "classType": "dImage", "height": 783, "resourceFileName": "", "visible": 0, "width": 646'},
 {path:'level/38.png',context:'Level42.GetHintImageName optional missing illustration; keep text hint',before:'Level42.prototype.GetHintImageName = function () {\n        return "level/38.png";\n    };',after:'Level42.prototype.GetHintImageName = function () {\n        return "";\n    };'}
];
for(const item of unavailableImages)if(!manifest.unavailable?.some(r=>r.path===item.path&&r.status===404))throw new Error('Missing upstream404 evidence: '+item.path);
const replacementMethods={
 RequestHttp:'function(url,callback){if(callback)callback(null,0);return false;}',
 _LoadSubPackage:`function(name,callback){var self=this,arr=new dByteArray();arr.LoadFromFile(name+'.dat',function(){var pack=new dFilePacker();if(!pack.LoadFromBin(arr))throw new Error('Invalid local resource pack: '+name);if(!self.m_vecSubPackageData)self.m_vecSubPackageData=[];self.m_vecSubPackageData.push(pack);callback(100);LevelRelaxationRuntime.progress(self.GetLoadSubPackageProgress()/100*.9);},null,function(){LevelRelaxationRuntime.error('Resource pack failed: '+name);});}`,
 MakeFileUrl:`function(url){var resolved=new URL(url,location.href);if(resolved.origin!==location.origin)throw new Error('Only local resources are supported');return resolved.href;}`,
 GetSubFileList:'function(name){return [name];}',
 OpenWebPage:'function(){return false;}',
 ShowHtmlDialog:'function(){this.ShowToast("本地存档仅保存在此浏览器中");}',
 OpenMiniProgram:'function(){return false;}',
 GetSafeAreaTop:'function(){return 0;}',GetSafeAreaBottom:'function(){return 0;}',
 GetAppList:'function(){return "";}',GetPackageVersionCode:'function(){return 1;}',GetPackageAppId:'function(){return "level-relaxation";}',GetPackageName:'function(){return "level-relaxation";}',GetPackageSha1:'function(){return "";}',GetLocalLanguage:'function(){return this.m_defaultLanguage;}',
 ReadStorage:'function(key,callback,fallback){callback(LevelRelaxationPlatform.readStorage(key,fallback));}',
 WriteStorage:'function(key,value){LevelRelaxationPlatform.writeStorage(key,value);}',
 ShowAdRewardedVideo:'function(callback,placement){return LevelRelaxationPlatform.rewarded(this,callback,placement);}',
 isAdRewardedShowing:'function(){return this.m_bRewardedVideoShowing;}',isAdRewardedReady:'function(){return LevelRelaxationPlatform.isRewardedReady();}',isAdInterstitialVideoReady:'function(){return true;}',
 ShowAdInterstitialImage:'function(callback){return LevelRelaxationPlatform.interstitial(this,callback);}',
 ShowAdInterstitialVideo:'function(callback){return LevelRelaxationPlatform.interstitial(this,callback);}',
 ShowAdBanner:'function(show,flag){return LevelRelaxationPlatform.banner(show,flag);}',
 ShowAdBox:'function(callback){if(callback)callback(this);}',
 hasMoreGame:'function(){return false;}',GetMoreGameList:'function(){return null;}',
 ShowAdMoreGameIcon:'function(icon,y,flag,callback){if(callback)callback(this);}',HideAdMoreGameIcon:'function(){}',
 StartShareRecord:'function(){}',StopShareRecord:'function(callback){if(callback)callback();}',ShareRecord:'function(){}',
 isPrivacyAgree:'function(){return true;}',ExitApp:'function(){}',DeleteAccount:'function(){LevelRelaxationPlatform.clearStorage();}',
 GetSdkName:'function(){return "web";}',GetChannelName:'function(){return "local";}',
};
const myAd=`var MyAd = (function(){
function MyAd(){}
MyAd.InitMyAd=function(){};
MyAd.SetShowLog=function(){};
MyAd.isNeedShowPrivacyDialog=MyAd.isNeedShowPrivacyLink=MyAd.isNeedShowPrivacyAppName=MyAd.isNeedShowZhuZuo=MyAd.isNeedShowZhuZuoLogin=MyAd.isNeedShowShiLing=MyAd.isNeedShowContact=MyAd.isNeedShowDeleteAccount=function(){return false;};
MyAd.GetZhuZuoName=function(){return '董夜明';};
MyAd.GetBannerStepTime=function(){return 0;};
MyAd.SendPassStage=function(){};
MyAd.ShowAdRewardedVideoTrace=function(name,callback){return dInterface.ptr.ShowAdRewardedVideo(function(){if(callback)callback();},name);};
MyAd.ShowAdInterstitialImageTrace=function(){return dInterface.ptr.ShowAdInterstitialImage();};
MyAd.ShowAdInterstitialVideoTrace=function(){return dInterface.ptr.ShowAdInterstitialVideo();};
MyAd.isShowAdBanner=function(){return MyAd.m_bShowBanner;};
MyAd.isAdInterstitialVideoReady=function(){return dInterface.ptr.isAdInterstitialVideoReady();};
MyAd.isAdRewardedReady=function(){return dInterface.ptr.isAdRewardedReady();};
MyAd.ShowAdBanner=function(show,flag){if(MyAd.m_bShowBanner!==show){MyAd.m_bShowBanner=show;dInterface.ptr.ShowAdBanner(show,flag);}};
MyAd.isAdRewardedShowing=function(){return dInterface.ptr.isAdRewardedShowing();};
MyAd.GetMoreGameText=function(separator){return '更多游戏'.split('').join(separator||'');};
MyAd.hasMoreGame=function(){return false;};
MyAd.ShowAdMoreGame=function(){return LevelRelaxationPlatform.moreGames();};
MyAd.ShowAdMoreGameIcon=function(icon,y,flag,callback){return dInterface.ptr.ShowAdMoreGameIcon(icon,y,flag,callback);};
MyAd.HideAdMoreGameIcon=function(){return dInterface.ptr.HideAdMoreGameIcon();};
MyAd.PrivacyText=MyAd.YongHuText=function(){return '游戏进度仅保存在此浏览器本地。';};
MyAd.m_bShowBanner=false;
MyAd.UnlockAllStage=false;
MyAd.yinSiUrl=MyAd.yongHuUrl='';
return MyAd;
}());`;
const unknown=Symbol('unknown');
function specialize(text){
 const ast=parse(text,{ecmaVersion:'latest',sourceType:'script'});
 const code=n=>text.slice(n.start,n.end);
 const identity=n=>{
  if(!n)return '';
  if(n.type==='Identifier')return n.name;
  if(n.type==='ThisExpression')return 'this';
  if(n.type==='MemberExpression'&&!n.computed)return identity(n.object)+'.'+n.property.name;
  return '';
 };
 const value=n=>{
  if(!n)return unknown;
  if(n.type==='Literal')return n.value;
  const id=identity(n);
  if(id==='dInterface.sdkName')return 'web';
  if(id==='MyAd.s_httpUrl')return '';
  if(['window.androidJSApis','window.wx','window.webkit','window.sdkName','window.channelName'].includes(id))return undefined;
  if(n.type==='CallExpression'&&n.arguments.length===0){
   const callee=identity(n.callee);
   if(['dThread.GetSdkName','this.GetSdkName','dInterface.ptr.GetSdkName'].includes(callee))return 'web';
   if(['dThread.GetChannelName','this.GetChannelName','dInterface.ptr.GetChannelName'].includes(callee))return 'local';
  }
  if(n.type==='LogicalExpression'){
   const l=value(n.left);
   if(n.operator==='&&'){if(l!==unknown&&!l)return l;const r=value(n.right);if(r!==unknown&&!r)return r;if(l!==unknown&&r!==unknown)return r;}
   if(n.operator==='||'){if(l!==unknown&&l)return l;const r=value(n.right);if(r!==unknown&&r)return r;if(l!==unknown&&r!==unknown)return r;}
  }
  if(n.type==='UnaryExpression'&&n.operator==='!'){const v=value(n.argument);return v===unknown?unknown:!v;}
  if(n.type==='BinaryExpression'){
   const l=value(n.left),r=value(n.right);if(l===unknown||r===unknown)return unknown;
   if(n.operator==='==')return l==r;if(n.operator==='!=')return l!=r;if(n.operator==='===')return l===r;if(n.operator==='!==')return l!==r;
  }
  return unknown;
 };
 let branches=0;const methods=[];
 function render(n){
  if(n.type==='VariableDeclaration'&&n.declarations.length===1){
   const name=n.declarations[0].id.name;
   if(name==='MyAd')return myAd;
   if(name==='MoreGamePanel')return 'var MoreGamePanel={ShowAdMoreGame:function(){return LevelRelaxationPlatform.moreGames();}};';
  }
  if(n.type==='ExpressionStatement'&&n.expression.type==='AssignmentExpression'){
   const left=identity(n.expression.left);
   if(left==='MessageBoxPanel.prototype._dscData'){
    const original=code(n),count=original.split('"classType": "dBitmapFont"').length-1;
    if(count!==3)throw new Error('Unexpected MessageBoxPanel text node count: '+count);
    return original.replaceAll('"classType": "dBitmapFont"','"classType": "dLabel"');
   }
   if(left.startsWith('dInterface.prototype.')){
    const method=left.slice('dInterface.prototype.'.length);
    if(replacementMethods[method]){methods.push(method);return left+'='+replacementMethods[method]+';';}
   }
   if(['this.api','this.m_bannerAd','this.m_boxPortalAd','this.m_rewardedAd','this.m_rewardedCompleteCallback'].includes(left))return ';';
   if(left==='dInterface.sdkName')return 'dInterface.sdkName="web";';
  }
  if(n.type==='IfStatement'){
   const v=value(n.test);
   if(v!==unknown){branches++;return v?render(n.consequent):n.alternate?render(n.alternate):';';}
  }
  if(n.type==='ConditionalExpression'){
   const v=value(n.test);if(v!==unknown){branches++;return '('+render(v?n.consequent:n.alternate)+')';}
  }
  const children=[];
  for(const [key,item] of Object.entries(n)){
   if(['start','end','loc','range'].includes(key))continue;
   if(Array.isArray(item)){for(const child of item)if(child&&typeof child.type==='string')children.push(child);}
   else if(item&&typeof item.type==='string')children.push(item);
  }
  children.sort((a,b)=>a.start-b.start||b.end-a.end);
  let result='',at=n.start;
  for(const child of children){if(child.start<at)continue;result+=text.slice(at,child.start)+render(child);at=child.end;}
  return result+text.slice(at,n.end);
 }
 let result=render(ast).replace(/\r\n/g,'\n').replace(/[ \t]+$/gm,'').replace(/^\/\/# sourceMappingURL=.*$/gm,'');
 for(const item of unavailableImages){
  const occurrences=result.split(item.before).length-1;
  if(occurrences!==1)throw new Error('Unexpected unavailable-image context/count: '+item.path+' '+occurrences);
  result=result.replace(item.before,item.after);
 }
 // 游戏只能使用本地资源；不能由发布包重新注入平台实现。
 const forbidden=/androidJSApis|window\.wx\b|window\.webkit\b|h5api|adid_|createRewardedVideoAd|createInterstitialAd|navigateToMiniProgram|@uploadsave|@playingtime|@crash|s_httpUrl|api\.request|api\.getSystemInfoSync|api\.loadSubpackage|api\.getStorage|https?:\/\//;
 if(forbidden.test(result))throw new Error('Platform/server implementation remains near '+result.slice(Math.max(0,result.search(forbidden)-120),result.search(forbidden)+180));
 for(const name of Object.keys(replacementMethods))if(!methods.includes(name))throw new Error('Expected platform boundary missing: '+name);
 parse(result,{ecmaVersion:'latest',sourceType:'script'});
 return {result,branches,methods};
}
const files=[],packs=[];let changes;
function inspectPack(bytes,path){
 if(bytes.toString('ascii',0,4)!=='DGFP'||bytes.readUInt32BE(4)!==1)throw new Error('Unrecognized DGFP pack: '+path);
 const header=bytes.readUInt32BE(8),count=bytes.readUInt32BE(12),suffixes={};let at=16,textMembers=0;
 const names=new Set();
 for(let i=0;i<count;i++){
  let length=bytes.readUInt16BE(at);at+=2;if(length&0x8000){length=(bytes.readUInt16BE(at)<<15)|(length&0x7fff);at+=2;}
  const name=bytes.toString('utf8',at,at+length);at+=length;
  const size=bytes.readUInt32BE(at),offset=bytes.readUInt32BE(at+4);at+=24;
  if(at>header||header+offset+size>bytes.length||names.has(name))throw new Error('Invalid DGFP member: '+name);
  names.add(name);const suffix=name.slice(name.lastIndexOf('.'));
  if(!['.png','.jpg','.mp3','.atlas','.json'].includes(suffix))throw new Error('Unexpected resource type: '+name);
  suffixes[suffix]=(suffixes[suffix]||0)+1;
  if(suffix==='.json'||suffix==='.atlas'){
   textMembers++;const text=bytes.toString('utf8',header+offset,header+offset+size);
   if(/https?:\/\/|wss?:\/\/|h5api|adUnitId|adid_|createRewardedVideoAd/.test(text))throw new Error('Remote/SDK reference in resource text: '+name);
   if(suffix==='.json')JSON.parse(text);
  }
 }
 if(at!==header)throw new Error('DGFP header mismatch: '+path);
 return {path,members:count,suffix_counts:suffixes,text_members_checked:textMembers,text_remote_or_sdk_matches:0};
}
for(const record of manifest.files){
 const path=record.path.replace(/^original\//,'');
 if(!/^(?:MainGame\.js|(?:data|level|level2|level3)\.dat|loading\/[\w.-]+)$/.test(path))continue;
 const bytes=await readFile(resolve(original,path));
 if(sha256(bytes)!==record.sha256||bytes.length!==record.bytes)throw new Error('Source manifest mismatch: '+path);
 let out=bytes;
 if(path.endsWith('.dat'))packs.push(inspectPack(bytes,path));
 if(path==='MainGame.js'){
  if(sha256(bytes)!==pin)throw new Error('Unrecognized original MainGame.js');
  const transformed=specialize(bytes.toString());changes={branches:transformed.branches,methods:transformed.methods};out=Buffer.from(transformed.result);
 }
 await mkdir(dirname(resolve(output,path)),{recursive:true});await writeFile(resolve(output,path),out);
 files.push({path,original_sha256:record.sha256,local_sha256:sha256(out),bytes:out.length});
}
if(!changes)throw new Error('MainGame.js absent from manifest');
const custom=[];
for(const path of ['index.html','platform-adapter.js','local-runtime.js']){
 const bytes=await readFile(resolve(output,path));custom.push({path,local_sha256:sha256(bytes),bytes:bytes.length});
}
await writeFile(fileURLToPath(new URL('../provenance/level-relaxation.json',import.meta.url)),JSON.stringify({
 source_page:'https://www.4399.com/flash/251997.htm',source_entry:manifest.entry,engine:'Custom dThread/dInterface WebGL engine',
 acquisition_manifest_sha256:sha256(manifestBytes),source_identity:{'MainGame.js':pin},
 changes:['Remove original platform HTML, base.xml, h5api loader and platform-index.js from publication.','Remove original MyAd and MoreGamePanel implementations; retain game-facing ad entrypoints through independent adapter.','Specialize engine platform branches for browser web/local at build time and replace platform/server boundaries.','Load original same-origin .dat packs, namespace local storage and report actual LoginPage readiness.', 'Remove three exact-context references to upstream404 optional images; preserve hit geometry, text hints and popup controls. Render the three MessageBoxPanel text nodes with the original dLabel system-font renderer because the shipped bitmap font lacks glyphs in 金币不足 and 确定.'],
 specialization:changes,message_box_text:{context:'MessageBoxPanel._dscData',from:'dBitmapFont',to:'dLabel',expected_occurrences:3,reason:'Shipped bitmap font lacks Chinese glyphs for popup content and OK label'},unavailable_images:unavailableImages.map(({path,context})=>({path,context,upstream_status:404,replacement:'empty image reference; retain control geometry/text',expected_occurrences:1})),resource_pack_inventory:packs,ad_callbacks:'Default reward: PauseAllSound; after 100ms, clear showing state, ResumeAllSound, ClearMouseHook; dInterface callback(interface) once and MyAd callback() once. Optional provider receives placement lifecycle only in platform-adapter.js.',
 unknowns:['The original images data/title.png, level/202.png and level/38.png are Unknown: exact upstream URLs returned404. Their optional image references are omitted; text and geometry remain.', 'Complete equivalence of all levels and late progression is Unknown until runtime coverage is expanded.','The four binary resource packs remain byte-identical; unused artwork or opaque embedded dependency absence is Unknown.'],files,custom_files:custom
},null,2)+'\n');
console.log(JSON.stringify({game:'level-relaxation',files:files.length,specialized_branches:changes.branches,replaced_methods:changes.methods.length}));
