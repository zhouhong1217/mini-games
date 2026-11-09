// 用真实 Laya 加载器和 UIMng 工厂验证全部已审计的动态界面资源。
import assert from 'node:assert/strict';
import {createRequire} from 'node:module';
import {mkdir,readFile,writeFile} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
const require=createRequire(process.env.PLAYWRIGHT_MODULE||'/Users/a/.npm/_npx/af752b90495482d7/node_modules/playwright-core/package.json');
const {chromium}=require('./index.js');
const home=process.env.PAGES_URL||'http://127.0.0.1:8801/mini-games/';
const entry=new URL('games/ancient-tycoon/game/',home).href,origin=new URL(home).origin;
const out=fileURLToPath(new URL('../.verification/tycoon-prefabs-'+(process.env.PAGES_URL?'live/':'local/'),import.meta.url));await mkdir(out,{recursive:true});
const inventory=JSON.parse(await readFile(new URL('../tools/ancient-tycoon/required-prefabs.json',import.meta.url),'utf8'));
const names=inventory.map(x=>typeof x==='string'?x:x.name);
const report={result:'running',entry,prefabs:[],page_errors:[],failed_responses:[],external_requests:[]};
const browser=await chromium.launch({executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',headless:true,args:['--enable-unsafe-swiftshader']});
let page;
try{
 const context=await browser.newContext({viewport:{width:540,height:960},locale:'zh-CN'});
 await context.route('**/*',r=>{const u=r.request().url();if(/^https?:/.test(u)&&new URL(u).origin!==origin){report.external_requests.push(u);return r.abort()}return r.continue()});
 // 仅测试浏览器注入只读观察点，不改业务数据或发布代码。
 await context.addInitScript(()=>Object.defineProperty(window,'AncientTycoonRuntime',{configurable:true,set(runtime){
  Object.defineProperty(window,'AncientTycoonRuntime',{value:Object.freeze({snapshot:runtime.snapshot,bind(value){window.__tycoonBindings=value;runtime.bind(value)}}),configurable:true});
 }}));
 page=await context.newPage();page.on('pageerror',e=>report.page_errors.push(e.stack));page.on('response',r=>{if(r.status()>=400)report.failed_responses.push({url:r.url(),status:r.status()})});
 await page.goto(entry);await page.waitForFunction(()=>AncientTycoonRuntime?.snapshot()&&window.__tycoonBindings?.GameMgr.currentSceneCtrl,null,{timeout:90000});
 for(const name of names){
  const value=await page.evaluate(async name=>{const node=await Promise.race([__tycoonBindings.UIMng.instance.createUIPrefab(name),new Promise((_,reject)=>setTimeout(()=>reject(Error('Prefab load timed out: '+name)),10000))]);return{name,created:!!node,width:node.width,height:node.height}},name);
  assert.ok(value.created);report.prefabs.push(value);
 }
 await page.screenshot({path:out+'ready.png',fullPage:true});
 assert.deepEqual(report.page_errors,[]);assert.deepEqual(report.failed_responses,[]);assert.deepEqual(report.external_requests,[]);report.result='pass';
}catch(error){report.result='fail';report.error=error.stack;process.exitCode=1;if(page)await page.screenshot({path:out+'failure.png'}).catch(()=>{})}
finally{await writeFile(out+'report.json',JSON.stringify(report,null,2)+'\n');console.log(JSON.stringify(report,null,2));await browser.close()}
