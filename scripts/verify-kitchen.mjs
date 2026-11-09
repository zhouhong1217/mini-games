// 真实点击和键盘验证双人厨房；状态读取不改写游戏进度。
import assert from 'node:assert/strict';
import {spawn} from 'node:child_process';
import {mkdir,writeFile} from 'node:fs/promises';
import {fileURLToPath,pathToFileURL} from 'node:url';
const root=fileURLToPath(new URL('../',import.meta.url));
const output=fileURLToPath(new URL('../.verification/kitchen-'+(process.env.PAGES_URL?'live/':'local/'),import.meta.url));
await mkdir(output,{recursive:true});
if(!process.env.PLAYWRIGHT_MODULE)throw Error('Set PLAYWRIGHT_MODULE to playwright-core/index.mjs');
const {chromium}=await import(pathToFileURL(process.env.PLAYWRIGHT_MODULE));
let server;
let home=process.env.PAGES_URL;
if(!home){
 server=spawn(process.execPath,['scripts/serve-local.mjs','--port','0','--mount','/mini-games/'],{cwd:root,stdio:['ignore','pipe','pipe']});
 home=await new Promise((resolve,reject)=>{server.stdout.on('data',d=>{const m=String(d).match(/Local preview: (http:\/\/[^\s]+)/);if(m)resolve(m[1])});server.once('error',reject);server.once('exit',c=>reject(Error('Preview exited '+c)));});
}
const origin=new URL(home).origin;
const browser=await chromium.launch({executablePath:process.env.CHROME_PATH||'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',headless:true});
const report={result:'running',home,checks:{},page_errors:[],console_errors:[],external_requests:[],failed_responses:[],inputs:[]};
const context=await browser.newContext({viewport:{width:1440,height:1100},locale:'zh-CN'});
await context.route('**/*',route=>{const u=route.request().url();if(/^https?:/.test(u)&&new URL(u).origin!==origin){report.external_requests.push(u);return route.abort()}return route.continue()});
const page=await context.newPage();
page.on('pageerror',e=>report.page_errors.push(e.message));
page.on('console',m=>{if(m.type()==='error')report.console_errors.push(m.text())});
page.on('response',r=>{if(r.status()>=400)report.failed_responses.push({url:r.url(),status:r.status()})});
let game;
async function shot(name){await page.screenshot({path:output+name+'.png',fullPage:true})}
async function clickNode(path){
 const p=await game.evaluate(path=>{const n=cc.find(path);if(!n||!n.activeInHierarchy)throw Error('Inactive node: '+path);const p=n.convertToWorldSpaceAR(cc.v2(0,0)),r=document.querySelector('canvas').getBoundingClientRect();return{x:r.x+p.x/cc.winSize.width*r.width,y:r.y+(1-p.y/cc.winSize.height)*r.height};},path);
 const box=await page.locator('#game').boundingBox();
 await page.mouse.move(box.x+p.x,box.y+p.y);await page.mouse.click(box.x+p.x,box.y+p.y);
 report.inputs.push({click:path});await page.waitForTimeout(200);
}
async function clickEvent(parent,event){const path=await game.evaluate(({parent,event})=>{
 function walk(n,p){if(!n.activeInHierarchy)return;const b=n.getComponent(cc.Button);if(b?.clickEvents.some(e=>e.customEventData===event))return p;for(const c of n.children){const a=walk(c,p+'/'+c.name);if(a)return a}}
 return walk(cc.find(parent),parent);
 },{parent,event});assert.ok(path,'Button '+event);await clickNode(path)}
async function ready(){await page.waitForFunction(()=>document.querySelector('#cover').hidden,null,{timeout:90000});game=page.frames().find(f=>/double-kitchen\/game\//.test(f.url()));assert.ok(game);await game.waitForFunction(()=>window.cc?.director.getScene()?.name==='Menu');}
async function choose(mode){await clickNode('Canvas/'+(mode==='co-op'?'heZuoBtn':'duiJueBtn'));
 for(const player of [1,2]){
  const parent='Canvas/skinShopView/bg/Player'+player;
  const locked=await game.evaluate(player=>{const v=cc.find('Canvas/skinShopView').getComponent('skinShopView');return !globalData.data.unLockSkin[v['showSkinIndex'+player]];},player);
  if(locked){await clickEvent(parent,'购买');await page.waitForTimeout(250);}
  await clickEvent(parent,'选择');
 }
 await game.waitForFunction(scene=>cc.director.getScene()?.name===scene,mode==='co-op'?'Game':'fightGame');
 await page.waitForTimeout(500);
}
async function playerState(player){return game.evaluate(p=>{const g=AD.Game;const n=g['Player'+p];const c=n.getComponent(cc.director.getScene().name==='Game'?'Player':'Player_fight');return{x:n.x,y:n.y,food:c.thingType,have:c.haveThing,state:c.State,other:c.otherNode?.name};},player)}
async function move(player,x,y){const keys=player===1?['a','d','s','w']:['ArrowLeft','ArrowRight','ArrowDown','ArrowUp'];
 for(const axis of ['x','y']){let stuck=0;for(let tries=0;tries<40;tries++){
  const p=await playerState(player),diff=(axis==='x'?x:y)-p[axis];if(Math.abs(diff)<8)break;
  const key=axis==='x'?(diff<0?keys[0]:keys[1]):(diff<0?keys[2]:keys[3]);
  await page.keyboard.down(key);await page.waitForTimeout(Math.min(120,Math.max(18,Math.abs(diff)*3)));await page.keyboard.up(key);
  const next=await playerState(player);if(Math.abs(next[axis]-p[axis])<.5){if(++stuck>=3)break}else stuck=0;
 }}report.inputs.push({move:{player,x,y},actual:await playerState(player)});
}
try{
 await page.goto(new URL('games/double-kitchen/',home).href);
 assert.equal(await page.locator('#game').getAttribute('src'),null);report.checks.lazy_load=true;
 await page.locator('#start').click();await ready();await shot('menu');report.checks.menu=true;
 const scene=await game.evaluate(()=>cc.director.getScene().uuid);
 await page.locator('[data-language-select]').selectOption('en');
 assert.equal(await game.evaluate(()=>cc.director.getScene().uuid),scene);report.checks.language_keeps_game=true;
 await page.locator('[data-language-select]').selectOption('zh-CN');
 report.checks.ad_callback_contract=await game.evaluate(async()=>{
  const records=[],start=performance.now(),one={id:'one'},two={id:'two'};
  function callback(){records.push({id:this.id,args:arguments.length,elapsed:performance.now()-start})}
  const a=AD.showAD(callback,one),b=AD.showAD(callback,two);
  await Promise.all([a,b]);
  const musicAfterDefault=cc.audioEngine.isMusicPlaying();
  DoubleKitchenPlatform.setAdProvider({rewarded:async()=>false});await AD.showAD(callback,{id:'refused'});
  const musicAfterRefusal=cc.audioEngine.isMusicPlaying();
  DoubleKitchenPlatform.setAdProvider({rewarded:async()=>{throw Error('Expected verification rejection')}});await AD.showAD(callback,{id:'rejected'});
  const musicAfterRejection=cc.audioEngine.isMusicPlaying();
  DoubleKitchenPlatform.setAdProvider({rewarded:async()=>true});await AD.showAD(callback,{id:'provider'});
  DoubleKitchenPlatform.setAdProvider(null);
  return{records,musicAfterDefault,musicAfterRefusal,musicAfterRejection};
 });
 assert.deepEqual(report.checks.ad_callback_contract.records.map(r=>[r.id,r.args]),[['one',0],['two',0],['provider',0]]);
 assert.ok(report.checks.ad_callback_contract.records[0].elapsed>=90);
 for(const key of ['musicAfterDefault','musicAfterRefusal','musicAfterRejection'])assert.equal(report.checks.ad_callback_contract[key],true);
 const initial=await game.evaluate(()=>globalData.data.diamond);
 await clickNode('Canvas/diamond/awardBtn');await clickNode('Canvas/awardView/bg/getBtn');
 await game.waitForFunction(n=>globalData.data.diamond===n,initial+200);
 report.checks.reward_button_adds_200_once=true;
 const savedDiamond=await game.evaluate(()=>globalData.data.diamond);
 await page.locator('#restart').click();await ready();
 assert.equal(await game.evaluate(()=>globalData.data.diamond),savedDiamond);report.checks.save_reload=true;
 await choose('co-op');
 for(let i=0;i<2;i++){await game.waitForFunction(()=>cc.find('Canvas/newGuidelinesView/shopManagerView/bg/btn1')?.activeInHierarchy);await clickNode('Canvas/newGuidelinesView/shopManagerView/bg/btn1')}
 const before=[await playerState(1),await playerState(2)];
 await page.keyboard.down('d');await page.keyboard.down('ArrowLeft');await page.waitForTimeout(300);await page.keyboard.up('d');await page.keyboard.up('ArrowLeft');
 const after=[await playerState(1),await playerState(2)];
 assert.ok(after[0].x>before[0].x+20&&after[1].x<before[1].x-20);report.checks.two_player_keyboard={before,after};
 await move(1,-540,-60);await game.waitForFunction(()=>AD.Game.Player1.getComponent('Player').haveThing);
 assert.equal((await playerState(1)).food,'汉堡');
 await move(2,450,130);await game.waitForFunction(()=>AD.Game.Player2.getComponent('Player').haveThing);
 assert.equal((await playerState(2)).food,'可乐');await shot('food');report.checks.cooking_both_foods=true;
 await move(1,-150,150);await page.waitForTimeout(600);await move(2,-20,150);
 await game.waitForFunction(()=>AD.Game.serveGuest_temp===0&&globalData.data.coin>100&&AD.Game.wantEatParent.children.length===0);
 const order=await game.evaluate(()=>({coin:globalData.data.coin,served:AD.Game.serveGuest_temp,remaining:AD.Game.wantEatParent.children.length}));
 assert.equal(order.remaining,0);report.checks.order_completed=order;await shot('order-complete');
 await clickNode('Canvas/pauseBtn');await page.waitForTimeout(200);
 assert.equal(await game.evaluate(()=>cc.director.isPaused()),true);
 await clickEvent('Canvas/pauseView','继续游戏');assert.equal(await game.evaluate(()=>cc.director.isPaused()),false);report.checks.pause_resume=true;
 await clickNode('Canvas/pauseBtn');await clickEvent('Canvas/pauseView','重新开始');
 await game.waitForFunction(()=>!cc.director.isPaused()&&cc.director.getScene().name==='Game'&&AD.Game.serveGuest_temp===1);
 const restarted=await playerState(1);assert.equal(restarted.x,-300);report.checks.in_game_restart=true;
 await clickNode('Canvas/pauseBtn');await clickEvent('Canvas/pauseView','主菜单');await game.waitForFunction(()=>cc.director.getScene().name==='Menu');
 await choose('versus');await game.waitForFunction(()=>AD.Game.keyBoardMove);await shot('versus');report.checks.versus_loaded=true;
 const versusBefore=[await playerState(1),await playerState(2)];
 await page.keyboard.down('d');await page.keyboard.down('ArrowLeft');await page.waitForTimeout(250);await page.keyboard.up('d');await page.keyboard.up('ArrowLeft');
 const versusAfter=[await playerState(1),await playerState(2)];
 assert.ok(versusAfter[0].x>versusBefore[0].x+10&&versusAfter[1].x<versusBefore[1].x-10);report.checks.versus_keyboard={before:versusBefore,after:versusAfter};
 await game.waitForFunction(()=>cc.find('Canvas/jieSuanView')?.activeInHierarchy,null,{timeout:150000});
 await page.waitForTimeout(700);
 report.checks.versus_round_completed=await game.evaluate(()=>({score:AD.Game.score,settlement:cc.find('Canvas/jieSuanView').activeInHierarchy}));await shot('versus-settlement');
 assert.deepEqual(report.external_requests,[]);assert.deepEqual(report.failed_responses,[]);assert.deepEqual(report.page_errors,[]);assert.deepEqual(report.console_errors,[]);
 report.result='pass';
}catch(e){report.result='fail';report.error=e.stack;await shot('failure').catch(()=>{});process.exitCode=1;}
finally{await writeFile(output+'report.json',JSON.stringify(report,null,2)+'\n');console.log(JSON.stringify(report,null,2));await browser.close();server?.kill('SIGTERM');}
