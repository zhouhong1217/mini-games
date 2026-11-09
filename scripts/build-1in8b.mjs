// Hash-bound static adaptation; the public site needs no npm dependencies or backend.
import {readFile,writeFile,mkdir,copyFile} from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import{createHash}from'node:crypto';
import{parse}from'../tools/1in8b/node_modules/acorn/dist/acorn.mjs';
import{fullAncestor}from'../tools/1in8b/node_modules/acorn-walk/dist/walk.mjs';
const project=fileURLToPath(new URL('../',import.meta.url));
if(!process.argv[2])throw new Error('Usage: node scripts/build-1in8b.mjs /path/to/1in8b-snapshot');
const source=path.resolve(process.argv[2]);const original=path.join(source,'original');
const manifest=JSON.parse(await readFile(path.join(source,'acquisition.json'),'utf8'));
if(manifest.version!=='0.9.66'||manifest.languages.length!==19)throw new Error('Expected complete 0.9.66 snapshot');
const dest=path.join(project,'site/games/1in8b');await mkdir(dest,{recursive:true});
const hash=data=>createHash('sha256').update(data).digest('hex');
const custom=await readFile(path.join(project,'tools/1in8b/local-functions.js'),'utf8');
const replacements=new Map();for(const n of parse(custom,{ecmaVersion:'latest'}).body)if(n.type==='FunctionDeclaration'){if(replacements.has(n.id.name))throw new Error('Duplicate override '+n.id.name);replacements.set(n.id.name,custom.slice(n.start,n.end));}
const vars={
  LANG_KEY:JSON.stringify('one8b.language.v1'),LP:'One8bNative.asset(PAGE_LANG)',
  CONFIG:'{version:"0.9.66 local",siteUrl:One8bNative.base.replace(/\\/$/,""),keep:{on:true,noSale:[]},packs:{on:true,sets:false,soon:[]},gift:{on:false},home:{on:true},umamiId:""}',
  keepTok:'()=>true',keepFull:'()=>true',keepOn:'()=>!(typeof EDU_ON<"u"&&EDU_ON)',keepNoSale:'()=>false',keepPitch:'()=>false',keepCanStyle:'()=>!!(S&&S.endD)',
  keepBuyA:'()=>""',keepPrice:'()=>""',keepTerms:'()=>""',keepPromise:'()=>""',keepCnPay:'()=>""',keepRefundA:'()=>""',keepHelpA:'()=>""',
  keepNoSaleHTML:'()=>""',keepInboxHTML:'()=>""',gftEntryHTML:'()=>""',gftEntry:'()=>false',gftOn:'()=>false',gftLiveOn:'()=>false',
  packHas:'key=>PACKS.includes(key)',packSale:'()=>false',packSaleOn:'()=>false',packSaleOf:'()=>false',packListed:'key=>PACKS.includes(key)',packSellable:'()=>false',packPrice:'()=>""',
  vlinkOn:'()=>false',vlbOn:'()=>false',lbAvail:'()=>false',lbOffer:'()=>false',cmOff:'()=>true',pdbOn:'()=>pdbCan()',STATS_ON:'false',
  KEEP_CS:'""',KEEP_TAKE:'""',KEEP_LINK:'false',PACK_BACK:'null',GFT_BACK:'null',GFT_PATH:'""',GFT_NEW:'""',MOVE_CODE:'""',
  MEMO_PATH:'new URLSearchParams(location.hash.slice(1)).get("memorial")||""',HOME_PATH:'new URLSearchParams(location.hash.slice(1)).get("home")||""',VLINK_PATH:'""',FRIEND_PATH:'""',
  memUrl:'id=>One8bNative.url("memorial",id)',keepUrl:'()=>""',keepNoSaleLine:'()=>One8bNative.text("localOnly")',vlinkRowHTML:'()=>""',vlbBtn:'()=>""',hmLstHTML:'()=>""',
};
const audit=[];
function patchJS(text,name){
 const worker=/^labw\./.test(name),dataFile=name==='era.js';if(dataFile)return text;
 const ast=parse(text,{ecmaVersion:'latest',sourceType:'script'}),edits=[],covered=[],changed=new Set();
 const add=(start,end,value)=>{if(covered.some(([a,b])=>start>=a&&end<=b))return;edits.push({start,end,value});};
 fullAncestor(ast,(n,state,parents)=>{
  if(worker)return;
  if(n.type==='FunctionDeclaration'&&replacements.has(n.id?.name)){covered.push([n.start,n.end]);changed.add(n.id.name);}
  if(n.type==='VariableDeclarator'&&n.id.type==='Identifier'&&vars[n.id.name]!=null&&n.init){covered.push([n.init.start,n.init.end]);changed.add(n.id.name);}
 });
 fullAncestor(ast,(n,state,parents)=>{
  if(!worker&&n.type==='FunctionDeclaration'&&replacements.has(n.id?.name)){edits.push({start:n.start,end:n.end,value:replacements.get(n.id.name)});return;}
  if(!worker&&n.type==='VariableDeclarator'&&n.id.type==='Identifier'&&vars[n.id.name]!=null&&n.init){edits.push({start:n.init.start,end:n.init.end,value:vars[n.id.name]});return;}
  if(covered.some(([a,b])=>n.start>=a&&n.end<=b))return;
  if(!worker&&n.type==='FunctionDeclaration'&&['memoList','openMemorial'].includes(n.id?.name))add(n.end-1,n.end-1,';One8bNative.markLocal();');
  if(!worker&&n.type==='Identifier'&&n.name==='localStorage')add(n.start,n.end,'One8bLocal.storage');
  if(!worker&&n.type==='CallExpression'&&n.callee.type==='Identifier'&&n.callee.name==='fetch')add(n.callee.start,n.callee.end,'One8bNative.response');
  if(n.type==='Literal'&&typeof n.value==='string'){
   if(n.value==='one8b-past')add(n.start,n.end,JSON.stringify('mini-games:1in8b:v1:past'));
   else if(n.value.startsWith('/api/'))add(n.start,n.end,JSON.stringify('local:'+n.value.slice(5)));
   else if(/^\/(?:a\/|fonts\/|era\.js|keepx\.|labw\.|favicon\.|icon-|apple-touch)/.test(n.value))add(n.start,n.end,worker?'new URL('+JSON.stringify('.'+n.value)+',self.location.href).href':'One8bNative.asset('+JSON.stringify(n.value)+')');
   else if(n.value.startsWith('/m/'))add(n.start,n.end,JSON.stringify(n.value.replace('/m/','/#memorial=')));
   else if(n.value.startsWith('/h/'))add(n.start,n.end,JSON.stringify(n.value.replace('/h/','/#home=')));
  }
  if(n.type==='TemplateElement'){
   const raw=text.slice(n.start,n.end);const after=raw.replace(/\/api\//g,'local:').replace(/\/m\//g,'/#memorial=').replace(/\/h\//g,'/#home=');if(raw!==after)add(n.start,n.end,after);
  }
 });
 edits.sort((a,b)=>b.start-a.start);let last=text.length;
 for(const e of edits){if(e.end>last)throw new Error('Overlapping AST patches '+name);text=text.slice(0,e.start)+e.value+text.slice(e.end);last=e.start;}
 text=text.replace(/\bkeepTok\b/g,'localArchiveOn');
 if(!worker){text=text.replace(/indexedDB\.open\("mini-games:1in8b:v1:past",1\)/g,'indexedDB.open("mini-games:1in8b:v1:past",1)');}
 parse(text,{ecmaVersion:'latest'});
 if(/\/api\/|(?:buy|checkout)\\?\.stripe\\?\.com/.test(text))throw new Error('Remote service remained: '+name);
 audit.push({path:name,replaced_symbols:[...changed].sort(),patches:edits.length});return text;
}
const files=[];
for(const entry of manifest.files){
 const input=await readFile(path.join(original,entry.path));if(hash(input)!==entry.sha256)throw new Error('Original SHA mismatch '+entry.path);
 let out=input;
 if(entry.path.endsWith('.js'))out=Buffer.from(patchJS(input.toString(),entry.path));
 else if(entry.path.endsWith('.css'))out=Buffer.from(input.toString().replace(/url\((['"]?)\/(fonts\/[^)'"\s]+)\1\)/g,(_,q,p)=>'url('+q+(entry.path.startsWith('fonts/')?'./'+p.slice(6):'../'+p)+q+')'));
 else if(entry.path.endsWith('index.html')){
  const prefix='../'.repeat(entry.path.split('/').length-1);
  let html=input.toString().replace(/<script\b[^>]*src="https:\/\/static\.cloudflareinsights\.com[^>]*>[\s\S]*?<\/script>/g,'');
  html=html.replace(/<p class="legal\b[^"]*">[\s\S]*?<\/p>/g,match=>match.includes('class="legal biz"')?'':'<p class="legal"><a href="https://1in8b.life/" target="_blank" rel="noopener">1 in 8 Billion · Jin’s Earth</a></p>');
  if(entry.path.endsWith('/c/index.html'))html=html.replace(/<a\b[^>]*href="\/[a-z-]+\/c\/[a-z]{3}\/?"[^>]*>([\s\S]*?)<\/a>/g,'$1');
  html=html.replace(/<a\b([^>]*?)href="\/((?:[a-z-]+\/)(?:story|about|privacy|impressum|api|edu)\/?[^"]*)"([^>]*)>/g,(_,a,p,b)=>`<a${a}href="https://1in8b.life/${p}"${b}>`);
  html=html.replace(/\b(href|src)="\/(?!\/)([^"]*)"/g,(_,attr,p)=>`${attr}="${prefix}${p}"`);
  html=html.replace(/<link\b[^>]+rel="(?:canonical|alternate)"[^>]*>\s*/g,'');
  const bridge=`<script src="${prefix}local-store.js"></script><script src="${prefix}local-native.js"></script>`;
  if(html.includes(`<script src="${prefix}a/`))html=html.replace(`<script src="${prefix}a/`,bridge+`<script src="${prefix}a/`);else html=html.replace('</body>',bridge+'</body>');
  html=html.replace(/<button\b[^>]*data-fb="1"[^>]*>[\s\S]*?<\/button>/g,'');
  html=html.replace(/<button\b[^>]*id="(?:keepOpen|fbOpen|fbOpen2)"[^>]*>[\s\S]*?<\/button>/g,'');
  html=html.replace(/<a\b[^>]*href="\.\.\/(?:zh\/)?(?:about|privacy|terms)\/?"[^>]*>[\s\S]*?<\/a>/g,'');
  html=html.replace('</head>','<style>.kp-refund,.kp-buy,.gx-entry,.hm-pub{display:none!important} .memo,.sheet{scroll-margin-top:4rem}</style></head>');
  out=Buffer.from(html);
 }else if(entry.path.endsWith('.webmanifest')){
  const m=JSON.parse(input);m.id='./';m.start_url='./';m.scope='./';for(const icon of m.icons||[])icon.src='../'+icon.src.replace(/^\//,'');out=Buffer.from(JSON.stringify(m,null,2)+'\n');
 }
 const output=path.join(dest,entry.path);await mkdir(path.dirname(output),{recursive:true});await writeFile(output,out);
 files.push({path:entry.path,original_sha256:entry.sha256,local_sha256:hash(out),bytes:out.length});
}
for(const name of ['local-store.js','local-native.js'])await copyFile(path.join(project,'tools/1in8b',name),path.join(dest,name));
const locales=manifest.languages;
await writeFile(path.join(dest,'index.html'),`<!doctype html><html lang="zh-Hans"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>80亿分之1 · 1 in 8 Billion</title><script src="local-store.js"></script><script>const choices=${JSON.stringify(locales)};let lang=One8bLocal.storage.getItem('language');if(!choices.includes(lang)){const hint=new URLSearchParams(location.search).get('lang')||navigator.language;lang=/^zh-(TW|HK|Hant)/i.test(hint)?'zh':/^zh/i.test(hint)?'zh-hans':choices.includes(hint.split('-')[0])?hint.split('-')[0]:'zh-hans'}location.replace(lang+'/'+location.search+location.hash)</script><p><a href="zh-hans/">简体中文</a> · <a href="en/">English</a></p></html>`);
const local_files=[];for(const name of ['index.html','local-store.js','local-native.js']){const bytes=await readFile(path.join(dest,name));local_files.push({path:name,sha256:hash(bytes),bytes:bytes.length})}
await mkdir(path.join(project,'provenance'),{recursive:true});
await writeFile(path.join(project,'provenance/1in8b.json'),JSON.stringify({version:'0.9.66',source:'https://1in8b.life',original_directory:original,languages:locales,storage_namespace:'mini-games:1in8b:v1:',mode:'Static browser-local archive; no payments or original network APIs',local_files,files,patches:audit},null,2)+'\n');
console.log('Built 1in8b:',files.length,'source files,',locales.length,'languages.');
