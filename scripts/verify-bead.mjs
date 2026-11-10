// 读取原版状态定位可见元素，仅通过真实鼠标或触屏推进玩法。
import assert from 'node:assert/strict';
import {mkdir,writeFile} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import {chromium} from '/Users/a/.npm/_npx/af752b90495482d7/node_modules/playwright-core/index.mjs';
const home=process.env.PAGES_URL||'http://127.0.0.1:8805/mini-games/';
const entry=new URL('games/bead-craft/',home).href,origin=new URL(home).origin;
const out=fileURLToPath(new URL('../.verification/bead-'+(process.env.PAGES_URL?'live/':'local/'),import.meta.url));
await mkdir(out,{recursive:true});
const browser=await chromium.launch({executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',headless:true,args:['--enable-unsafe-swiftshader']});
const report={result:'running',home,checks:{},inputs:[],errors:[],failed_responses:[],external_requests:[]};
let page,game;
async function context(options={}){
 const c=await browser.newContext({viewport:{width:540,height:960},locale:'zh-CN',...options});
 await c.route('**/*',r=>{const u=r.request().url();if(/^https?:/.test(u)&&new URL(u).origin!==origin){report.external_requests.push(u);return r.abort()}return r.continue()});
 c.on('page',p=>{p.on('pageerror',e=>report.errors.push(e.message));p.on('response',r=>{if(r.status()>=400)report.failed_responses.push({url:r.url(),status:r.status()})})});return c;
}
async function ready(g=game){
 await g.waitForFunction(()=>window.BeadCraftRuntime?.snapshot().ready,null,{timeout:90000});
 await g.evaluate(async()=>{window._beadCC=await System.import('cc')});
 await g.waitForFunction(()=>window._beadCC.director.getScene()?.getComponentInChildren('UIGame')?.myLevel?.gridBacks?.some(r=>r?.some(g=>g?.node.activeInHierarchy)),null,{timeout:45000});
 await g.waitForTimeout(1000);
}
async function snap(g=game){return g.evaluate(()=>BeadCraftRuntime.snapshot())}
async function shot(name,p=page){await p.screenshot({path:out+name+'.png',fullPage:true})}
async function input(selector,p=page,g=game,touch=false){
 const pos=await g.evaluate(selector=>{
  const c=window._beadCC,s=c.director.getScene(),v=s.getComponentInChildren('UIGame')?.myLevel;
  let n;
  if(selector==='tutorial'){
   if(v.guideStep===1||v.guideStep===4)n=v.gridBacks[4][3].node;
   else if(v.guideStep===2||v.guideStep===5)n=v.tempManager.items[0].node;
   else n=v.gridBacks[1][3].node;
  }else if(selector==='add-temp'||selector.startsWith('button:')){const handler=selector==='add-temp'?'addTemp':selector.slice(7);n=s.getComponentsInChildren(c.Component).find(b=>b.node.activeInHierarchy&&b.clickEvents?.some(e=>e.handler===handler))?.node;}
  else{const [cls,key]=selector.split('.');n=s.getComponentInChildren(cls)?.[key];n=n?.node||n;}
  if(!n?.activeInHierarchy)throw Error('Input target not visible: '+selector);
  const a=n.worldPosition;return{x:a.x/750,y:(1334-a.y)/1334,guide:v?.guideStep};
 },selector);
 let b={x:0,y:0,width:540,height:960};
 if(g!==p.mainFrame()){await p.locator('#game').scrollIntoViewIfNeeded();b=await p.locator('#game').boundingBox()}
 else b={x:0,y:0,...p.viewportSize()};
 const x=b.x+pos.x*b.width,y=b.y+pos.y*b.height;
 if(touch)await p.touchscreen.tap(x,y);else await p.mouse.click(x,y,{delay:40});
 report.inputs.push({selector,touch,guide:pos.guide});await p.waitForTimeout(1150);
}
async function win(p=page,g=game){await g.waitForFunction(()=>!!window._beadCC.director.getScene()?.getComponentInChildren('UIWin')?.node.activeInHierarchy,null,{timeout:18000});await p.waitForTimeout(700)}
try{
 const c=await context();page=await c.newPage();await page.goto(entry);assert.equal(await page.locator('#game').getAttribute('src'),null);report.checks.lazy_load=true;
 await page.locator('#start').click();await page.waitForFunction(()=>document.querySelector('#cover').hidden,null,{timeout:90000});game=page.frames().find(f=>f.url().startsWith(entry+'game/'));await ready();await shot('tutorial');
 assert.equal((await snap()).guide,1);
 for(let i=1;i<=6;i++){assert.equal((await snap()).guide,i);await input('tutorial')}
 await win();assert.equal((await snap()).player.level,2);report.checks.mouse_level_1_win=await snap();await shot('level-1-win');
 await input('UIWin.nextBtn');await ready();assert.equal((await snap()).level,2);assert.equal((await snap()).guide,7);report.checks.next_level=true;
 const saved=(await snap()).player;await page.reload();await page.locator('#start').click();await page.waitForFunction(()=>document.querySelector('#cover').hidden,null,{timeout:90000});game=page.frames().find(f=>f.url().startsWith(entry+'game/'));await ready();
 assert.equal((await snap()).player.level,2);assert.equal((await snap()).player.gold,saved.gold);assert.equal((await snap()).level,2);report.checks.refresh_save=await snap();await shot('level-2-restored');
 const keys=await game.evaluate(()=>Object.keys(localStorage));assert.ok(keys.some(k=>k.startsWith('bead-craft-4399-v1:')));assert.ok(!keys.some(k=>k.startsWith('MYGAME_')));report.checks.save_namespace=keys;
 const before=await game.evaluate(()=>window._beadCC.director.getScene().getComponentInChildren('UIGame').myLevel.tempManager.items.length);
 await input('add-temp');
 const after=await game.evaluate(()=>window._beadCC.director.getScene().getComponentInChildren('UIGame').myLevel.tempManager.items.length);
 assert.ok(after>before);assert.equal((await snap()).guide,8);report.checks.level_2_add_slots={before,after};
 const timeBefore=(await snap()).time;await input('button:addTime');
 await game.waitForFunction(()=>!!window._beadCC.director.getScene()?.getComponentInChildren('UIProp')?.node.activeInHierarchy);
 await shot('reward-dialog');await input('button:adBtnClick');
 assert.ok((await snap()).time>timeBefore+200);report.checks.reward_time_button={before:timeBefore,after:(await snap()).time};
 const scene=(await snap()).scene;await page.locator('[data-language-select]').selectOption('en');assert.match(await page.title(),/Bead Craft/);assert.equal((await snap()).scene,scene);report.checks.language_keeps_game=true;
 await page.locator('#fullscreen').click();assert.ok(await page.evaluate(()=>document.fullscreenElement));await page.evaluate(()=>document.exitFullscreen());report.checks.fullscreen=true;
 const mobile=await context({viewport:{width:390,height:844},isMobile:true,hasTouch:true,deviceScaleFactor:2});const mp=await mobile.newPage();await mp.goto(entry);await mp.locator('#start').tap();await mp.waitForFunction(()=>document.querySelector('#cover').hidden,null,{timeout:90000});const mg=mp.frames().find(f=>f.url().startsWith(entry+'game/'));await ready(mg);
 for(let i=1;i<=6;i++){assert.equal((await snap(mg)).guide,i);await input('tutorial',mp,mg,true)}
 await win(mp,mg);assert.equal((await snap(mg)).player.level,2);assert.ok(await mp.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));report.checks.touch_level_1_win=true;await shot('mobile-win',mp);await mobile.close();
 const retryContext=await context();const rp=await retryContext.newPage();let reject=true;await rp.route('**/bead-craft/game/assets/main/index.js',r=>reject?r.abort():r.continue());await rp.goto(entry);await rp.locator('#start').click();await rp.waitForFunction(()=>document.querySelector('#status').textContent==='加载未完成',null,{timeout:90000});reject=false;await rp.locator('#start').click();await rp.waitForFunction(()=>document.querySelector('#cover').hidden,null,{timeout:90000});report.checks.failed_script_retry=true;await retryContext.close();
 await page.goto(home);await page.locator('a[href*="games/bead-craft/"]').first().waitFor();report.checks.portal_card=true;
 assert.deepEqual(report.external_requests,[]);assert.deepEqual(report.failed_responses,[]);assert.deepEqual(report.errors,[]);report.result='pass';
}catch(error){report.result='fail';report.error=error.stack;process.exitCode=1;if(page)await shot('failure').catch(()=>{})}
finally{await writeFile(out+'report.json',JSON.stringify(report,null,2)+'\n');console.log(JSON.stringify({...report,inputs:report.inputs.length},null,2));await browser.close()}
