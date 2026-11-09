// 检查屏幕像素密度、窗口变化和全屏时，画布完整显示且点击坐标一致。
import assert from 'node:assert/strict';
import {spawn} from 'node:child_process';
import {mkdir,writeFile} from 'node:fs/promises';
import {fileURLToPath,pathToFileURL} from 'node:url';
const root=fileURLToPath(new URL('../',import.meta.url));
const out=root+'.verification/relaxation-display-'+(process.env.PAGES_URL?'live/':'local/');
await mkdir(out,{recursive:true});
if(!process.env.PLAYWRIGHT_MODULE)throw Error('Set PLAYWRIGHT_MODULE');
const {chromium}=await import(pathToFileURL(process.env.PLAYWRIGHT_MODULE));
let server,home=process.env.PAGES_URL;
if(!home){
 server=spawn(process.execPath,['scripts/serve-local.mjs','--port','0','--mount','/mini-games/'],{cwd:root,stdio:['ignore','pipe','pipe']});
 home=await new Promise((resolve,reject)=>{server.stdout.on('data',d=>{const m=String(d).match(/Local preview: (http:\/\/[^\s]+)/);if(m)resolve(m[1])});server.once('error',reject);server.once('exit',c=>reject(Error('Preview exited '+c)));});
}
const origin=new URL(home).origin;
const browser=await chromium.launch({executablePath:process.env.CHROME_PATH||'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',headless:true,args:['--enable-unsafe-swiftshader']});
const report={result:'running',home,scenarios:[],errors:[],failed_responses:[],external_requests:[]};
let currentPage;
async function dimensions(frame){return frame.evaluate(()=>{
 const c=document.querySelector('canvas'),r=c.getBoundingClientRect();
 return {dpr:devicePixelRatio,viewport:{width:innerWidth,height:innerHeight},css:{width:r.width,height:r.height,x:r.x,y:r.y},buffer:{width:c.width,height:c.height},engineRatio:dInterface.ptr.m_pixelRatio};
})}
async function check(frame,records,label){
 await frame.waitForFunction(()=>{const c=document.querySelector('canvas');return c&&Math.abs(c.width-innerWidth*devicePixelRatio)<2&&Math.abs(c.height-innerHeight*devicePixelRatio)<2},null,{timeout:10000});
 const d=await dimensions(frame);records.push({label,...d});
 assert.ok(Math.abs(d.css.width-d.viewport.width)<=1,`${label}: CSS width ${d.css.width} != viewport ${d.viewport.width}`);
 assert.ok(Math.abs(d.css.height-d.viewport.height)<=1,`${label}: CSS height ${d.css.height} != viewport ${d.viewport.height}`);
 assert.equal(d.css.x,0);assert.equal(d.css.y,0);assert.equal(d.engineRatio,d.dpr);
}
async function clickNode(p,f,kind,key,touch=false){
 await f.waitForFunction(()=>!PageManager.Instance().m_pChangeCover.visible);
 await p.locator('#game').scrollIntoViewIfNeeded();
 const v=await f.evaluate(({kind,key})=>{const p=PageManager.Instance().GetCurrentPage(),n=kind==='level'?p.m_pGameWorld.GetLevel()[key]:p[key],v=n.GetPos_World(dThread.GetRootSprite(),false);return{x:v.x/dThread.GetWindowWidth(),y:v.y/dThread.GetWindowHeight()}},{kind,key});
 const b=await p.locator('#game').boundingBox(),x=b.x+v.x*b.width,y=b.y+v.y*b.height;
 const viewport=p.viewportSize();assert.ok(x>=0&&x<viewport.width&&y>=0&&y<viewport.height,'Control must be inside the visible viewport');
 if(touch)await p.touchscreen.tap(x,y);else await p.mouse.click(x,y,{delay:60});
}
try{
 const scenarios=process.env.DISPLAY_DPR?[{name:'reproduction',dpr:Number(process.env.DISPLAY_DPR),viewport:{width:1280,height:1100}}]:[
  {name:'desktop-1x',dpr:1,viewport:{width:1280,height:1100}},
  {name:'desktop-2x',dpr:2,viewport:{width:1280,height:1100}},
  {name:'mobile-3x',dpr:3,viewport:{width:390,height:844},touch:true},
 ];
 for(const s of scenarios){
  const record={name:s.name,measurements:[]};report.scenarios.push(record);
  const context=await browser.newContext({viewport:s.viewport,deviceScaleFactor:s.dpr,isMobile:!!s.touch,hasTouch:!!s.touch,locale:'en-US'});
  await context.route('**/*',r=>{const u=r.request().url();if(/^https?:/.test(u)&&new URL(u).origin!==origin){report.external_requests.push(u);return r.abort()}return r.continue()});
  const p=await context.newPage();currentPage=p;
  p.on('pageerror',e=>report.errors.push(e.message));p.on('response',r=>{if(r.status()>=400)report.failed_responses.push({url:r.url(),status:r.status()})});
  await p.goto(new URL('games/level-relaxation/?lang=en',home).href);await p.locator('#start').click();
  await p.waitForFunction(()=>document.querySelector('#cover').hidden,null,{timeout:90000});
  const f=p.frames().find(f=>/level-relaxation\/game\//.test(f.url()));await f.waitForFunction(()=>PageManager.Instance()?.GetCurrentPage() instanceof LoginPage&&!PageManager.Instance().m_pChangeCover.visible);
  const identity=await f.evaluate(()=>PageManager.Instance().objectId);
  assert.ok(Number.isInteger(identity));let cdp,activeDpr=s.dpr;
  await check(f,record.measurements,'initial');await p.screenshot({path:out+s.name+'-menu.png',fullPage:true});
  if(!s.touch){
   await p.setViewportSize({width:900,height:700});await check(f,record.measurements,'resize');
   await p.locator('#fullscreen').click();await p.waitForFunction(()=>!!document.fullscreenElement);await check(f,record.measurements,'fullscreen');
   await p.evaluate(()=>document.exitFullscreen());await check(f,record.measurements,'exit-fullscreen');
   // 维持窗口尺寸，只更改DPR，模拟浏览器缩放或移到另一块显示器。
   cdp=await context.newCDPSession(p);const nextDpr=s.dpr===1?2:1.5;
   await cdp.send('Emulation.setDeviceMetricsOverride',{width:900,height:700,deviceScaleFactor:nextDpr,mobile:false});
   await f.waitForFunction(dpr=>devicePixelRatio===dpr,nextDpr);await check(f,record.measurements,'density-change');
   assert.deepEqual(record.measurements.at(-1).viewport,record.measurements.at(-2).viewport);activeDpr=nextDpr;
  }
  assert.equal(await f.evaluate(()=>PageManager.Instance().objectId),identity);record.kept_game_instance=true;
  await clickNode(p,f,'page','StartButton',s.touch);await f.waitForFunction(()=>PageManager.Instance().GetCurrentPage() instanceof GamePage);
  await clickNode(p,f,'level','OpenButton',s.touch);await f.waitForFunction(()=>SaveData.Instance().passStage===1,null,{timeout:20000});
  record.real_input_cleared_level=true;await check(f,record.measurements,'playing');await p.screenshot({path:out+s.name+'-clear.png',fullPage:true});
  assert.equal(record.measurements.at(-1).dpr,activeDpr);await cdp?.detach();
  await context.close();
 }
 assert.deepEqual(report.errors,[]);assert.deepEqual(report.failed_responses,[]);assert.deepEqual(report.external_requests,[]);report.result='pass';
}catch(e){report.result='fail';report.error=e.stack;await currentPage?.screenshot({path:out+'failure.png',fullPage:true}).catch(()=>{});process.exitCode=1;}
finally{await writeFile(out+'report.json',JSON.stringify(report,null,2)+'\n');console.log(JSON.stringify(report,null,2));server?.kill('SIGTERM');await browser.close();}
