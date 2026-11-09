// 真实鼠标输入完成首关；只读取截图和 SOL，不注入游戏逻辑或改写进度。
import assert from 'node:assert/strict';
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { createRequire } from 'node:module';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const shellOnly = process.argv.includes('--shell-only');
const playwright = process.env.PLAYWRIGHT_MODULE;
if (!playwright) throw new Error('Set PLAYWRIGHT_MODULE to playwright-core/index.mjs');
const { chromium } = await import(pathToFileURL(playwright));
const require = createRequire(import.meta.url);
const { PNG } = require(path.join(path.dirname(playwright), 'lib/utilsBundle.js'));
const home = process.env.PAGES_URL || 'http://127.0.0.1:8793/mini-games/';
const origin = new URL(home).origin, game = home + 'games/plants-vs-zombies/';
const output = path.join(root, '.verification', process.env.PAGES_URL ? 'pvz-live' : 'pvz-local');
await mkdir(output, { recursive:true });
const browser = await chromium.launch({ headless:true, executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome' });
process.once('SIGTERM', async () => { await browser.close(); process.exit(143); });
const report = { result:'running', home, mode:shellOnly?'shell-only':'full', checks:{}, external_requests:[], page_errors:[], console_errors:[], failed_responses:[], suns_collected:0, planted_attempts:0 };
let expectedFailure = false;
const context = await browser.newContext({ locale:'zh-CN',viewport:{width:1080,height:1000} });
await context.route('**/*', route => {
  const url = route.request().url();
  if (/^https?:/.test(url) && new URL(url).origin !== origin) { report.external_requests.push(url); return route.abort(); }
  if (expectedFailure && url.endsWith('/pvz.local.swf')) return route.fulfill({status:503,body:'Test download failure'});
  return route.continue();
});
context.on('page', page => {
  page.on('pageerror', error => report.page_errors.push(error.message));
  page.on('console', message => { if (message.type() === 'error' && !expectedFailure) report.console_errors.push(message.text()); });
  page.on('response', response => { if (response.status() >= 400 && !expectedFailure) report.failed_responses.push(response.url()); });
});
const page = await context.newPage();
const shot = name => page.screenshot({path:path.join(output,name + '.png'),fullPage:true});
const click = (x,y) => page.mouse.click(x,y,{delay:140});
async function savedLevel() {
  const values = await page.evaluate(() => Object.entries(localStorage).filter(([key])=>key.endsWith('/plants-vs-zombies-4399-v1')));
  for (const [key,value] of values) {
    const bytes = Buffer.from(value,'base64'), marker = Buffer.from([11,108,101,118,101,108,4]);
    const index = bytes.indexOf(marker);
    if (index >= 0) return { key, level:bytes[index + marker.length], value };
  }
  return null;
}
// 从屏幕中寻找阳光的黄色连通区域，所有收集均使用真实点击。
async function collectSuns() {
  const png = PNG.sync.read(await page.screenshot());
  const cells = new Set();
  for(let y=85;y<320;y+=3) for(let x=20;x<530;x+=3) {
    const i=(y*png.width+x)*4,r=png.data[i],g=png.data[i+1],b=png.data[i+2];
    if(r>210 && g>185 && b<140 && r>g*.94) cells.add(x+','+y);
  }
  const hits=[];
  while(cells.size) {
    const first=cells.values().next().value,queue=[first],points=[];cells.delete(first);
    while(queue.length) {
      const [x,y]=queue.pop().split(',').map(Number);points.push([x,y]);
      for(const dx of [-3,0,3]) for(const dy of [-3,0,3]) { const key=(x+dx)+','+(y+dy);if(cells.delete(key))queue.push(key); }
    }
    const xs=points.map(p=>p[0]),ys=points.map(p=>p[1]);
    if(points.length>=12 && Math.max(...xs)-Math.min(...xs)>12 && Math.max(...xs)-Math.min(...xs)<60 && Math.max(...ys)-Math.min(...ys)>12 && Math.max(...ys)-Math.min(...ys)<60) hits.push([xs.reduce((a,b)=>a+b)/xs.length,ys.reduce((a,b)=>a+b)/ys.length]);
  }
  for(const [x,y] of hits) { await click(x,y);report.suns_collected++; }
}
try {
  const manifest = JSON.parse(await readFile(path.join(root,'provenance/plants-vs-zombies.json')));
  for(const asset of manifest.copy_assets) assert.equal(createHash('sha256').update(await readFile(path.join(root,'site',asset.destination))).digest('hex'),asset.sha256);
  await page.goto(home + '?lang=en');
  await page.getByRole('link',{name:'Plants vs. Zombies',exact:true}).click();
  await page.waitForFunction(()=>document.querySelector('h1')?.textContent==='Plants vs. Zombies');
  assert.equal(await page.locator('h1').textContent(),'Plants vs. Zombies');
  assert.equal(await page.locator('#game').getAttribute('src'),null);
  await shot('shell-en');
  await page.locator('#start').click();
  await page.waitForFunction(()=>document.querySelector('#cover').hidden,null,{timeout:60000});
  const initialSource=await page.locator('#game').getAttribute('src');
  await page.locator('[data-language-select]').selectOption('zh-CN');
  assert.equal(await page.locator('h1').textContent(),'植物大战僵尸');
  assert.equal(await page.locator('#game').getAttribute('src'),initialSource);
  await page.locator('#fullscreen').click();assert.equal(await page.evaluate(()=>document.fullscreenElement?.id),'stage');
  await page.evaluate(()=>document.exitFullscreen());
  await shot('shell-zh'); report.checks.shell={language:true,language_keeps_game:true,fullscreen:true,lazy_start:true};
  if (!shellOnly) {
  await page.goto(game+'game/');await page.setViewportSize({width:540,height:405});
  await page.waitForTimeout(10000);await click(270,382);await page.waitForTimeout(1500);await click(270,382);await page.waitForTimeout(1800);await shot('main-menu');
  await click(380,85);await page.waitForTimeout(16000);await click(95,36);await click(60,235);await shot('first-plant');
  const deadline=Date.now()+240000;let iteration=0;
  while(Date.now()<deadline && (await savedLevel())?.level !== 2) {
    await collectSuns();
    if(iteration%4===0) {
      for(const x of [115,170,225,280]) { await click(95,36);await click(x,235); report.planted_attempts++; }
      await page.mouse.click(500,350,{button:'right',delay:100});
      for(let x=230;x<=510;x+=25) { await click(x,235); await click(x,260); }
    }
    await click(270,352);
    if(iteration%12===0) { await shot('battle-'+iteration);console.log('Battle',iteration,'suns',report.suns_collected,'save',(await savedLevel())?.level); }
    iteration++;await page.waitForTimeout(2000);
  }
  const completed=await savedLevel();assert.equal(completed?.level,2,'First level did not complete');
  assert.ok(report.suns_collected>0);await shot('level-two');
  await page.reload();await page.waitForTimeout(9000);assert.equal((await savedLevel()).level,2);
  await click(270,382);await page.waitForTimeout(1200);await click(270,382);await page.waitForTimeout(1500);await shot('resume-menu');
  await click(380,85);await page.waitForTimeout(15000);await shot('resumed-level-two');
  report.checks.gameplay={first_level_complete:true,level:2,refresh_keeps_level:true,source:'real mouse; no state injection'};
  }
  await page.goto(game);await page.setViewportSize({width:390,height:844});await shot('mobile-shell');
  assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),true);
  report.checks.mobile_layout=true;
  expectedFailure=true;await page.locator('#start').click();
  await page.waitForFunction(()=>!document.querySelector('#start').hidden && document.querySelector('#status').textContent.includes('加载未完成'),null,{timeout:30000});
  expectedFailure=false;await page.locator('#start').click();await page.waitForFunction(()=>document.querySelector('#cover').hidden,null,{timeout:60000});
  report.checks.download_failure_retry=true;
  assert.deepEqual(report.external_requests,[]);assert.deepEqual(report.page_errors,[]);assert.deepEqual(report.failed_responses,[]);assert.deepEqual(report.console_errors,[]);
  report.result='passed';console.log(JSON.stringify(report,null,2));
} catch(error) { report.result='failed';report.error=error.stack;await shot('failure').catch(()=>{});console.error(error);process.exitCode=1; }
finally { await writeFile(path.join(output,shellOnly?'report-shell.json':'report.json'),JSON.stringify(report,null,2));await browser.close(); }
