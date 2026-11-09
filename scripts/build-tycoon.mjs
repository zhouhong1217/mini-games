// 校验原包后恢复静态游戏；不分发原广告 SDK、平台壳或服务器实现。
import {readFile,writeFile,mkdir,rm,mkdtemp,rename} from 'node:fs/promises';
import {resolve,dirname,sep} from 'node:path';
import {fileURLToPath} from 'node:url';
import {createHash} from 'node:crypto';
const source=resolve(process.argv[2]||'../4399_245857_2026-11-09');
const original=resolve(source,'original');
const output=fileURLToPath(new URL('../site/games/ancient-tycoon/game/',import.meta.url));
const support=fileURLToPath(new URL('../tools/ancient-tycoon/',import.meta.url));
const sha=b=>createHash('sha256').update(b).digest('hex');
const specification=JSON.parse(await readFile(resolve(support,'bundle-patches.json'),'utf8'));
const raw=await readFile(resolve(original,'js/bundle.js'));
if(sha(raw)!==specification.source_sha256)throw new Error('Original bundle SHA256 mismatch');
let bundle=raw.toString();
let previousEnd=0;
for(const p of specification.patches){
 if(!Number.isInteger(p.start)||!Number.isInteger(p.end)||p.start<previousEnd||p.end<p.start||p.end>bundle.length||typeof p.replacement!=='string')throw new Error('Invalid patch range');
 previousEnd=p.end;
}
for(const p of [...specification.patches].reverse())bundle=bundle.slice(0,p.start)+p.replacement+bundle.slice(p.end);
// 原云服务地址现在仅作为本地业务操作 ID；不保留远程 URL。
bundle=bundle.replace(/(["'])\/api\//g,'$1local:');
if(/LWGSDK|BASICAPI|h5api|\b(?:wx|tt|qq|qg)\s*[.]/.test(bundle))throw new Error('Vendor platform reference remains');
const files=[],pending=[];
const manifestBytes=await readFile(resolve(source,'tools/acquisition-manifest.json'));
const manifest=JSON.parse(manifestBytes);
// 动态界面清单来自原调用链审计，缺少任何一项都在替换旧版前停止构建。
const requiredPrefabs=JSON.parse(await readFile(resolve(support,'required-prefabs.json'),'utf8'));
const acquired=new Set(manifest.files.map(x=>x.path));
for(const item of requiredPrefabs){
 const name=typeof item==='string'?item:item.name;
 if(typeof name!=='string'||!/^[A-Za-z0-9_]+$/.test(name))throw new Error('Invalid required prefab name');
 if(!acquired.has('prefab/'+name+'.json'))throw new Error('Required UI prefab missing: '+name);
}
for(const record of manifest.files){
 const rel=record.path;
 if(typeof rel!=='string'||rel.startsWith('/')||rel.split('/').some(p=>p==='..'||p==='.')||rel.includes('\\'))throw new Error('Unsafe source path');
 const path=resolve(original,rel);
 if(['index.html','gameIndex.html','base.xml','index.js','js/LWGSDK.js'].includes(rel))continue;
 const originalBytes=await readFile(path);
 if(originalBytes.length!==record.bytes||sha(originalBytes)!==record.sha256)throw new Error('Acquisition manifest mismatch: '+rel);
 const bytes=rel==='js/bundle.js'?Buffer.from(bundle):originalBytes;
 pending.push({path:rel,bytes});
 files.push({path:rel,bytes:bytes.length,source_sha256:sha(originalBytes),local_sha256:sha(bytes)});
}
const supportFiles=[];
for(const name of ['index.html','platform-adapter.js','local-runtime.js']){
 const bytes=await readFile(resolve(support,name));pending.push({path:name,bytes});supportFiles.push({path:name,bytes:bytes.length,sha256:sha(bytes)});
}
// 所有输入核验成功后写入临时目录，保留旧版直到新副本完整生成。
await mkdir(dirname(output),{recursive:true});
const staging=await mkdtemp(resolve(dirname(output),'.tycoon-build-'));
const backup=staging+'-previous';
let moved=false;
try{
 for(const file of pending){const target=resolve(staging,file.path);if(!target.startsWith(staging+sep))throw new Error('Output escapes staging');await mkdir(dirname(target),{recursive:true});await writeFile(target,file.bytes)}
 try{await rename(output,backup);moved=true}catch(error){if(error.code!=='ENOENT')throw error}
 try{await rename(staging,output)}catch(error){if(moved)await rename(backup,output);throw error}
 await rm(backup,{recursive:true,force:true});
}finally{await rm(staging,{recursive:true,force:true})}
await mkdir(fileURLToPath(new URL('../provenance/',import.meta.url)),{recursive:true});
await writeFile(fileURLToPath(new URL('../provenance/ancient-tycoon.json',import.meta.url)),JSON.stringify({source_page:'https://www.4399.com/flash/245857.htm',source_entry:'https://sda.4399.com/4399swf/upload_swf/ftp49/huangcijin/20241223/08/gameIndex.html',bundle_source_sha256:specification.source_sha256,acquisition_manifest_sha256:sha(manifestBytes),acquired_files:manifest.files.length,support_files:supportFiles,removed:['index.html platform shell','base.xml','h5api interface','js/LWGSDK.js','cloud archive implementation','original advertising and statistics implementations','remote leaderboard implementation'],patches:specification.patches.map(({start,end,reason})=>({start,end,reason})),files},null,2)+'\n');
console.log(JSON.stringify({files:files.length,bytes:files.reduce((s,f)=>s+f.bytes,0),bundle:sha(Buffer.from(bundle))}));
