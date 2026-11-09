// 严格子路径、外网阻断；仅读取运行状态，通过鼠标与触屏输入推进玩法。
import assert from 'node:assert/strict';
import {createRequire} from 'node:module';
import {mkdir,writeFile} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
const require=createRequire(process.env.PLAYWRIGHT_MODULE||'/Users/a/.npm/_npx/af752b90495482d7/node_modules/playwright-core/package.json');
const {chromium}=require('./index.js');
const home=process.env.PAGES_URL||'http://127.0.0.1:8801/mini-games/';
const origin=new URL(home).origin,entry=new URL('games/ancient-tycoon/',home).href;
const out=fileURLToPath(new URL('../.verification/tycoon-'+(process.env.PAGES_URL?'live/':'local/'),import.meta.url));
await mkdir(out,{recursive:true});
const browser=await chromium.launch({executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',headless:true,args:['--enable-unsafe-swiftshader']});
const report={result:'running',home,checks:{},inputs:[],errors:[],failed_responses:[],external_requests:[]};
let page,game;
async function context(options={}){
 const c=await browser.newContext({viewport:{width:540,height:960},locale:'zh-CN',...options});
 await c.route('**/*',r=>{const u=r.request().url();if(/^https?:/.test(u)&&new URL(u).origin!==origin){report.external_requests.push(u);return r.abort()}return r.continue()});
 c.on('page',p=>{p.on('pageerror',e=>report.errors.push(e.message));p.on('response',r=>{if(r.status()>=400)report.failed_responses.push({url:r.url(),status:r.status()})})});return c;
}
async function state(g=game){return g.evaluate(()=>AncientTycoonRuntime.snapshot())}
async function ready(g=game){await g.waitForFunction(()=>window.AncientTycoonRuntime?.snapshot()&&Laya.stage.getChildByName('root')?._children.some(x=>x.name==='ui_game/mainGame'),null,{timeout:90000});await g.waitForTimeout(900)}
async function shot(name,p=page){await p.screenshot({path:out+name+'.png',fullPage:true})}
async function click(x,y,p=page,touch=false){if(touch)await p.touchscreen.tap(x,y);else await p.mouse.click(x,y,{delay:40});await p.waitForTimeout(550)}
async function ui(name,key,p=page,g=game,touch=false){
 await g.waitForFunction(({name,key})=>{const n=Laya.stage.getChildByName('root')?._children.find(x=>x.name===name)?.[key];return n?.visible&&n.width>0&&n.height>0},{name,key},{timeout:15000});
 // 线上资源到达后弹窗仍会播放入场动画，等布局稳定再计算真实点击坐标。
 await p.waitForTimeout(900);
 const v=await g.evaluate(({name,key})=>{const n=Laya.stage.getChildByName('root')?._children.find(x=>x.name===name)?.[key];if(!n||!n.visible)return null;const a=n.localToGlobal(new Laya.Point(n.width/2,n.height/2));return{x:a.x/750,y:a.y/1334}},{name,key});
 assert.ok(v,'Visible UI missing: '+name+'.'+key);
 let b=g===p.mainFrame()?{x:0,y:0,width:540,height:960}:await p.locator('#game').boundingBox();
 if(g!==p.mainFrame()){await p.locator('#game').scrollIntoViewIfNeeded();b=await p.locator('#game').boundingBox()}
 await click(b.x+v.x*b.width,b.y+v.y*b.height,p,touch);report.inputs.push({ui:name+'.'+key,touch});
}
async function hero(){return game.evaluate(()=>{const p=Laya.stage._children[0].getChildByName('playerRoot').transform.position;return{x:p.x,z:p.z}})}
async function drag(dx,dz,ms){await page.mouse.move(270,770);await page.mouse.down();await page.mouse.move(270+dx,770+dz,{steps:6});await page.waitForTimeout(ms);await page.mouse.up()}
async function walk(x,z,limit=40){for(let i=0;i<limit;i++){const p=await hero(),dx=x-p.x,dz=z-p.z,d=Math.hypot(dx,dz);if(d<.7){report.inputs.push({walk:{x,z}});return p}await drag(dx/d*80,dz/d*80,Math.min(400,Math.max(70,d/10*1000)))}throw Error('Walk target unreachable: '+JSON.stringify({x,z,position:await hero(),state:await state()}))}
async function guide(target){await game.waitForFunction(n=>AncientTycoonRuntime.snapshot().guide===n,target,{timeout:12000})}
try{
 const c=await context();page=await c.newPage();game=page.mainFrame();
 await page.goto(entry+'game/');await ready();await shot('tutorial');
 for(let i=0;i<5&&(await state()).guide<2;i++)await click(380,860);
 await guide(2);await drag(0,-80,400);await guide(3);
 for(const p of [[2,50.67],[-2.5,48.67],[0,45.67]])await walk(...p);
 await guide(4);await walk(.2,39.7);await page.waitForTimeout(1200);
 for(let i=0;i<12&&(await state()).guide<11;i++){
  const s=await state();if(s.guide===6)await click(270,603);else await click(380,860);
 }
 await guide(11);await shot('hole');
 for(const p of [[5.2,39],[5.2,35.9],[0,30.9],[-4.8,35.8],[-3.8,38.9]])await walk(...p);
 // 金币散落位置包含随机偏移，读取可见金币坐标后用摇杆靠近拾取。
 for(let i=0;i<12&&(await state()).guide===11;i++){
  const coins=await game.evaluate(()=>Laya.stage._children[0]._components[0].coinRoot._children.map(n=>({x:n.transform.position.x,z:n.transform.position.z})));
  if(!coins.length)break;
  for(const p of coins)await walk(p.x,p.z);
 }
 await guide(12);assert.ok((await state()).coin>=50);report.checks.tutorial_coins=await state();
 await walk(10,24);await walk(11,-5.3);await page.waitForTimeout(2200);
 assert.equal((await state()).sale.leek_1,5);report.checks.stall_built=true;
 await walk(5.21,6.55);await page.waitForTimeout(2200);
 assert.equal((await state()).production.leek_1,5);report.checks.field_built=true;
 await walk(8.71,6.55);await walk(11.71,6.55);await walk(14.71,6.55);
 const carried=await game.evaluate(()=>Laya.stage._children[0]._components[0].playerCtrl.productControllerArr.length);assert.ok(carried>0);report.checks.harvest=carried;await shot('harvest');
 await walk(11,-5.8);await page.waitForTimeout(5500);const before=(await state()).coin;await shot('sale');
 await walk(11.24,-1.2);await page.waitForTimeout(1300);assert.ok((await state()).coin>before);report.checks.customer_income={before,after:(await state()).coin};await shot('income');
 for(let i=0;i<3&&(await state()).guide>0;i++)await click(380,860);
 const saved=await state();await page.reload();await ready();const restored=await state();
 assert.equal(restored.coin,saved.coin);assert.deepEqual(restored.production,saved.production);assert.deepEqual(restored.sale,saved.sale);report.checks.refresh_save=restored;
 // 回归用户遇到的生产需求面板：真实移动、支付25铜钱建造奶牛养殖区。
 const milk=await game.evaluate(()=>{const c=Laya.stage._children[0]._components[0].propProductions[4][0],p=c.buildPos.transform.position;return{x:p.x,z:p.z}});
 await walk(milk.x,milk.z);await game.waitForFunction(()=>AncientTycoonRuntime.snapshot().production.milk_1===25,null,{timeout:15000});
 await game.waitForFunction(()=>{const c=Laya.stage._children[0]._components[0].propProductions[4][0];return c.dialogui&&!c.dialogui.destroyed&&c.dialoguiCtrl},null,{timeout:15000});
 report.checks.milk_production_panel=await state();await shot('milk-production-panel');
 await page.reload();await ready();assert.equal((await state()).production.milk_1,25);report.checks.milk_refresh_save=true;
 await ui('ui_game/mainGame','btnVideoAdd');
 const lockBefore=await game.evaluate(()=>Laya.stage._children[0]._components[0].LockTime);
 await ui('ui_dialog/addCustomerDialog','btnVideo');
 const lockAfter=await game.evaluate(()=>Laya.stage._children[0]._components[0].LockTime);
 assert.ok(lockBefore<=0&&lockAfter>0,JSON.stringify({lockBefore,lockAfter}));report.checks.reward_button={lockBefore,lockAfter};
 await ui('ui_game/mainGame','btnUpgrade');
 await game.waitForFunction(()=>!!Laya.stage.getChildByName('root').getChildByName('ui_dialog/levelUpDialog'),null,{timeout:15000});
 await shot('upgrade');report.checks.upgrade_dialog=true;
 const keys=await game.evaluate(()=>Object.keys(localStorage));assert.ok(keys.some(k=>k.startsWith('ancient-tycoon-4399-v1:')));report.checks.save_namespace=keys;
 await page.goto(entry);assert.equal(await page.locator('#game').getAttribute('src'),null);report.checks.lazy_load=true;
 await page.locator('#start').click();await page.waitForFunction(()=>document.querySelector('#cover').hidden,null,{timeout:90000});game=page.frames().find(f=>f.url().includes('/ancient-tycoon/game/'));await ready();await shot('wrapper');
 const id=await game.evaluate(()=>Laya.stage._children[0].id);await page.locator('[data-language-select]').selectOption('en');assert.equal(await game.evaluate(()=>Laya.stage._children[0].id),id);assert.match(await page.title(),/Ancient Tycoon/);report.checks.language_keeps_game=true;
 await page.locator('#fullscreen').click();assert.ok(await page.evaluate(()=>document.fullscreenElement));await page.evaluate(()=>document.exitFullscreen());report.checks.fullscreen=true;
 const mobile=await context({viewport:{width:390,height:844},isMobile:true,hasTouch:true,deviceScaleFactor:2});const mp=await mobile.newPage();await mp.goto(entry);await mp.locator('#start').tap();await mp.waitForFunction(()=>document.querySelector('#cover').hidden,null,{timeout:90000});const mg=mp.frames().find(f=>f.url().includes('/ancient-tycoon/game/'));await ready(mg);
 await ui('ui_dialog/guideDialog','btnNext',mp,mg,true);await ui('ui_dialog/guideDialog','btnNext',mp,mg,true);
 await mp.locator('#game').scrollIntoViewIfNeeded();const b=await mp.locator('#game').boundingBox(),x=b.x+b.width*.5,y=b.y+b.height*.8;
 const pos=await mg.evaluate(()=>Laya.stage._children[0].getChildByName('playerRoot').transform.position.z),cdp=await mobile.newCDPSession(mp);
 await cdp.send('Input.dispatchTouchEvent',{type:'touchStart',touchPoints:[{x,y}]});await cdp.send('Input.dispatchTouchEvent',{type:'touchMove',touchPoints:[{x,y:y-b.height*.08}]});await mp.waitForTimeout(650);await cdp.send('Input.dispatchTouchEvent',{type:'touchEnd',touchPoints:[]});
 const after=await mg.evaluate(()=>Laya.stage._children[0].getChildByName('playerRoot').transform.position.z);assert.ok(after<pos-.2);assert.ok(await mp.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));report.checks.mobile_touch={before:pos,after};await shot('mobile-touch',mp);await mobile.close();
 const retryContext=await context();const rp=await retryContext.newPage();let reject=true;await rp.route('**/ancient-tycoon/game/js/bundle.js',r=>reject?r.abort():r.continue());await rp.goto(entry);await rp.locator('#start').click();await rp.waitForFunction(()=>document.querySelector('#status').textContent==='加载未完成');reject=false;await rp.locator('#start').click();await rp.waitForFunction(()=>document.querySelector('#cover').hidden,null,{timeout:90000});report.checks.failed_script_retry=true;await retryContext.close();
 assert.deepEqual(report.external_requests,[]);assert.deepEqual(report.failed_responses,[]);assert.deepEqual(report.errors,[]);report.result='pass';
}catch(error){report.result='fail';report.error=error.stack;process.exitCode=1;if(page)await shot('failure').catch(()=>{})}
finally{await writeFile(out+'report.json',JSON.stringify(report,null,2)+'\n');console.log(JSON.stringify({...report,inputs:report.inputs.length},null,2));await browser.close()}
