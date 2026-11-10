// 核验采集清单，恢复原玩法，删除原广告和平台实现；仅 site/ 进入发布。
import {readFile,writeFile,mkdir,readdir,rm,rename,mkdtemp} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {resolve,dirname,sep} from 'node:path';
import {fileURLToPath} from 'node:url';
const source=resolve(process.argv[2]||'../4399_264779_2026-11-10');
const original=resolve(source,'original'),support=fileURLToPath(new URL('../tools/bead-craft/',import.meta.url));
const output=fileURLToPath(new URL('../site/games/bead-craft/game/',import.meta.url));
const sha=b=>createHash('sha256').update(b).digest('hex');
const manifest=JSON.parse(await readFile(resolve(source,'tools/acquisition-manifest.json'),'utf8'));
const bundleRaw=await readFile(resolve(original,'assets/main/index.js'));
if(sha(bundleRaw)!=='36c957c3fc9c330c61d3cf2d0e89da2068d7d378eaf1da1b6a2014cd451754fe')throw Error('Original game bundle identity changed');
const removed=['AndroidPlatform.ts','H4399Platform.ts','WxPlatform.ts','IASDK.ts'];
let bundle=bundleRaw.toString();
const starts=[...bundle.matchAll(/System\.register\("chunks:\/\/\/_virtual\/([^"\n]+)"/g)];
const tailStart=bundle.indexOf('\n(function(r)',starts.at(-1).index);
if(tailStart<0)throw Error('Bundle bootstrap boundary missing');
const chunks=[];
for(let i=0;i<starts.length;i++){
 const match=starts[i],name=match[1];
 let text=bundle.slice(match.index,i+1<starts.length?starts[i+1].index:tailStart);
 if(removed.includes(name))continue;
 if(name==='AdMgr.ts')text=await readFile(resolve(support,'ad-manager.js'),'utf8');
 if(name==='main'){
  const dependencies=JSON.parse(text.match(/^System\.register\("[^"]+",(\[[^\]]+\])/)[1]).filter(x=>!removed.includes(x.slice(2)));
  text='System.register("chunks:///_virtual/main",'+JSON.stringify(dependencies)+',function(){return{setters:'+JSON.stringify(dependencies.map(()=>null))+',execute:function(){}}});';
 }
 if(name==='GameStorage.ts'){
  if(!text.includes('r.PREFIX="MYGAME_"'))throw Error('Storage prefix boundary missing');
  text=text.replace('r.PREFIX="MYGAME_"','r.PREFIX="bead-craft-4399-v1:"');
 }
 chunks.push(text.trim());
}
bundle=chunks.join('\n\n')+bundle.slice(tailStart);
if(/h5api|jsbBridgeWrapper|NativeBridge|IASDK|\.\/WxPlatform\.ts|\.\/AndroidPlatform\.ts|\.\/H4399Platform\.ts/.test(bundle))throw Error('Original platform reference remains');
const pending=[],files=[];
for(const record of manifest.files){
 const path=record.path;
 if(typeof path!=='string'||path.startsWith('/')||path.split('/').some(x=>x==='..'||x==='.')||path.includes('\\'))throw Error('Unsafe path');
 if(['index.html','gameIndex.html','base.xml'].includes(path))continue;
 let bytes=await readFile(resolve(original,path));
 if(bytes.length!==record.bytes||sha(bytes)!==record.sha256)throw Error('Original manifest mismatch: '+path);
 const source_sha256=sha(bytes);
 if(path==='assets/main/index.js')bytes=Buffer.from(bundle);
 if(path==='application.js'){
  const text=bytes.toString();if(!text.includes('cc = engine;'))throw Error('Engine attach boundary missing');
  bytes=Buffer.from(text.replace('cc = engine;','cc = engine; window.BeadCraftRuntime.attach(engine);'));
 }
 if(path==='index.js'){
  const text=bytes.toString();if(!text.includes('console.error(err);'))throw Error('Startup error boundary missing');
  bytes=Buffer.from(text.replace('console.error(err);','console.error(err); window.BeadCraftRuntime.fail(err);'));
 }
 if(path==='src/settings.json'){
  const settings=JSON.parse(bytes);settings.assets.projectBundles=settings.assets.projectBundles.filter(x=>x!=='newLevel');
  if(!settings.assets.projectBundles.includes('levelBase64'))settings.assets.projectBundles.push('levelBase64');
  bytes=Buffer.from(JSON.stringify(settings));
 }
 pending.push({path,bytes});files.push({path,bytes:bytes.length,source_sha256,local_sha256:sha(bytes)});
}
let html=await readFile(resolve(original,'gameIndex.html'),'utf8');
html=html.replace(/<script src="https:\/\/h\.api\.4399\.com\/[^\"]+"><\/script>/,'<script src="platform-adapter.js"></script><script src="local-runtime.js"></script>');
html=html.replace('<title>Cocos Creator | NewProject</title>','<title>大家来拼豆</title>');
if(/h5api-interface|https?:\/\/[^\s<]+\.js/.test(html))throw Error('Remote script remains');
pending.push({path:'index.html',bytes:Buffer.from(html)});
for(const name of ['platform-adapter.js','local-runtime.js'])pending.push({path:name,bytes:await readFile(resolve(support,name))});
await mkdir(dirname(output),{recursive:true});
const staging=await mkdtemp(resolve(dirname(output),'.bead-build-')),backup=staging+'-previous';let moved=false;
try{
 for(const file of pending){const p=resolve(staging,file.path);if(!p.startsWith(staging+sep))throw Error('Unsafe output');await mkdir(dirname(p),{recursive:true});await writeFile(p,file.bytes)}
 try{await rename(output,backup);moved=true}catch(e){if(e.code!=='ENOENT')throw e}
 try{await rename(staging,output)}catch(e){if(moved)await rename(backup,output);throw e}
 await rm(backup,{recursive:true,force:true});
}finally{await rm(staging,{recursive:true,force:true})}
await writeFile(fileURLToPath(new URL('../provenance/bead-craft.json',import.meta.url)),JSON.stringify({source_page:'https://www.4399.com/flash/264779.htm',source_entry:manifest.base_url+'gameIndex.html',engine:'Cocos Creator 3.8.6',removed_modules:removed,storage_prefix:'bead-craft-4399-v1:',patches:['Replace AdMgr with independent local advertising adapter; preserve callbacks and audio order','Namespace GameStorage','Add startup/error/readiness and page lifecycle save bridge','Replace obsolete projectBundles newLevel entry (original URL 404) with actually used levelBase64'],files,support:pending.filter(x=>!files.some(f=>f.path===x.path)).map(x=>({path:x.path,bytes:x.bytes.length,sha256:sha(x.bytes)}))},null,2)+'\n');
console.log(JSON.stringify({files:pending.length,bytes:pending.reduce((s,f)=>s+f.bytes.length,0),bundle_sha256:sha(Buffer.from(bundle))}));
