// 真实鼠标/触屏完成原版前两关；存档只读，不修改 WASM 或游戏状态。
import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { readFile, writeFile, mkdir, stat } from 'node:fs/promises';
import path from 'node:path';
import { createHash } from 'node:crypto';
import { fileURLToPath, pathToFileURL } from 'node:url';
const root = fileURLToPath(new URL('../', import.meta.url));
const site = path.join(root, 'site');
const output = path.join(root, '.verification', process.env.PAGES_URL ? 'rope-live' : 'rope-local');
await mkdir(output, { recursive: true });
if (!process.env.PLAYWRIGHT_MODULE) throw new Error('Set PLAYWRIGHT_MODULE to playwright-core/index.mjs');
const { chromium } = await import(pathToFileURL(process.env.PLAYWRIGHT_MODULE));
const mime = { '.html': 'text/html; charset=utf-8', '.js': 'application/javascript',
  '.css': 'text/css', '.json': 'application/json', '.svg': 'image/svg+xml', '.jpg': 'image/jpeg',
  '.png': 'image/png', '.wasm': 'application/wasm' };
const server = createServer(async (req, res) => {
  try {
    const pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
    const relative = pathname.startsWith('/mini-games/') ? pathname.slice(12) : pathname.slice(1);
    let file = path.resolve(site, relative);
    if (file !== site && !file.startsWith(site + path.sep)) throw new Error('Outside site');
    if ((await stat(file)).isDirectory()) file = path.join(file, 'index.html');
    const bytes = await readFile(file);
    res.writeHead(200, { 'Content-Type': mime[path.extname(file)] || 'application/octet-stream', 'Content-Length': bytes.length });
    res.end(req.method === 'HEAD' ? undefined : bytes);
  } catch { res.writeHead(404); res.end('Not found'); }
});
if (!process.env.PAGES_URL) await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
const home = process.env.PAGES_URL || `http://127.0.0.1:${server.address().port}/mini-games/`;
const origin = new URL(home).origin;
const browser = await chromium.launch({ headless: true,
  executablePath: process.env.CHROME_PATH || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome' });
const report = { result: 'running', home, checks: {}, page_errors: [], console_errors: [],
  external_requests: [], failed_responses: [], input_actions: [], known_engine_warnings: [] };
const contexts = [];
const logs = [];
async function newContext(options = {}) {
  const context = await browser.newContext({ viewport: { width: 1280, height: 1000 }, locale: 'zh-CN', ...options });
  contexts.push(context);
  await context.route('**/*', route => {
    const url = route.request().url();
    if (/^https?:/.test(url) && new URL(url).origin !== origin) {
      report.external_requests.push(url); return route.abort();
    }
    return route.continue();
  });
  context.on('page', page => {
    page.on('pageerror', error => report.page_errors.push(error.stack));
    page.on('console', message => {
      logs.push(message.text());
      if (message.text() === 'warning: 2 FS.syncfs operations in flight at once, probably just doing extra work') {
        report.known_engine_warnings.push(message.text());
        return;
      }
      if (message.type() === 'error' && !page.expectedLoadFailure) report.console_errors.push(message.text());
    });
    page.on('response', response => {
      if (response.status() >= 400 && !page.expectedLoadFailure) report.failed_responses.push({ url: response.url(), status: response.status() });
    });
  });
  return context;
}
const frameOf = page => page.frames().find(f => /\/rope-tangle\/game\//.test(f.url()));
const ready = async page => {
  await page.waitForFunction(() => document.querySelector('#cover').hidden && !document.querySelector('#restart').disabled, null, { timeout: 60000 });
  // Unity 自带启动画面结束后，才进行画布交互。
  await page.waitForTimeout(6500);
};
const shot = (page, name) => page.screenshot({ path: path.join(output, name + '.png'), fullPage: true });
async function point(page, x, y) {
  const box = await frameOf(page).locator('canvas').boundingBox();
  return { x: box.x + x * box.width / 450, y: box.y + y * box.height / 800 };
}
async function clickGame(page, x, y) {
  const p = await point(page, x, y);
  await page.mouse.click(p.x, p.y, { delay: 90 });
  await page.waitForTimeout(1800);
}
async function drag(page, from, to, touch = false) {
  const a = await point(page, ...from), b = await point(page, ...to);
  report.input_actions.push({ kind: touch ? 'touch-drag' : 'mouse-drag', from, to });
  if (touch) {
    const cdp = await page.context().newCDPSession(page);
    await cdp.send('Input.dispatchTouchEvent', { type: 'touchStart', touchPoints: [{ ...a, id: 0 }] });
    for (let i = 1; i <= 25; i++) {
      await cdp.send('Input.dispatchTouchEvent', { type: 'touchMove', touchPoints: [{ x: a.x + (b.x-a.x)*i/25, y: a.y + (b.y-a.y)*i/25, id: 0 }] });
      await page.waitForTimeout(18);
    }
    await cdp.send('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [] });
    await cdp.detach();
  } else {
    await page.mouse.move(a.x, a.y); await page.mouse.down();
    await page.mouse.move(b.x, b.y, { steps: 25 });
    await page.waitForTimeout(250); await page.mouse.up();
  }
  await page.waitForTimeout(3500);
}
async function prefs(page) {
  return frameOf(page).evaluate(async () => await new Promise((resolve, reject) => {
    const request = indexedDB.open('rope-tangle-4399-v1:/idbfs');
    request.onerror = () => reject(request.error);
    request.onsuccess = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains('FILE_DATA')) { db.close(); resolve({}); return; }
      const tx = db.transaction('FILE_DATA', 'readonly'), store = tx.objectStore('FILE_DATA');
      const keys = store.getAllKeys(), values = store.getAll();
      tx.onerror = () => reject(tx.error);
      tx.oncomplete = () => {
        const result = {};
        keys.result.forEach((key, index) => {
          if (!String(key).endsWith('/PlayerPrefs')) return;
          const data = values.result[index].contents;
          if (!data || new TextDecoder().decode(data.slice(0,8)) !== 'UnityPrf') return;
          for (const name of ['level', 'levelnumber', 'lastLevelPlayed']) {
            const encoded = new TextEncoder().encode(name);
            for (let i=1; i+encoded.length+5<=data.length; i++) {
              if (data[i-1] === encoded.length && encoded.every((value,j)=>data[i+j]===value) && data[i+encoded.length]===254) {
                result[name] = new DataView(data.buffer,data.byteOffset).getInt32(i+encoded.length+1,true);
                break;
              }
            }
          }
        });
        db.close(); resolve(result);
      };
    };
  }));
}
async function expectLevel(page, level) {
  for (let i=0;i<15;i++) {
    const saved = await prefs(page);
    if (saved.level === level && saved.levelnumber === level) return saved;
    await page.waitForTimeout(500);
  }
  const saved = await prefs(page);
  assert.equal(saved.level,level);
  assert.equal(saved.levelnumber,level);
  return saved;
}
let page;
try {
  const provenance = JSON.parse(await readFile(path.join(root,'provenance/rope-tangle.json')));
  for (const f of provenance.files) {
    const bytes = await readFile(path.join(site,'games/rope-tangle/game',f.destination));
    assert.equal(createHash('sha256').update(bytes).digest('hex'), f.local_sha256);
    if (/\.(data|wasm)$/.test(f.destination)) assert.equal(f.local_sha256,f.original_sha256);
  }
  const context = await newContext();
  page = await context.newPage();
  await page.goto(home+'?lang=en');
  await page.getByRole('link',{name:'Rope Tangle Puzzle',exact:true}).click();
  await page.waitForFunction(()=>document.querySelector('h1')?.textContent==='Rope Tangle Puzzle');
  assert.equal(await page.locator('h1').textContent(),'Rope Tangle Puzzle');
  assert.equal(await page.locator('#game').getAttribute('src'),null);
  await page.evaluate(()=>localStorage.setItem('rope-unrelated-test','keep'));
  await shot(page,'start-en');
  await page.locator('#start').click();
  await ready(page);
  const firstFrame = frameOf(page);
  await page.locator('[data-language-select]').selectOption('zh-CN');
  assert.equal(frameOf(page),firstFrame);
  assert.equal(await page.locator('h1').textContent(),'缠绕的绳子');
  await shot(page,'level-1');
  report.checks.shell = { project_subpath:true, deferred_load:true, bilingual:true, language_keeps_game:true };
  await drag(page,[253,297],[109,297]);
  await shot(page,'level-1-completed');
  await clickGame(page,225,615);
  await expectLevel(page,2);
  await shot(page,'level-2');
  await drag(page,[109,371],[253,443]);
  await shot(page,'level-2-completed');
  await clickGame(page,225,615);
  const saved = await expectLevel(page,3);
  await shot(page,'level-3');
  report.checks.gameplay = { first_two_levels:'completed with real mouse input', next_level:3, persisted_prefs:saved };
  console.log('Real mouse completion of levels 1 and 2 passed.');
  await clickGame(page,39,52);
  assert.equal((await prefs(page)).level,3);
  await shot(page,'level-3-restarted');
  await page.reload(); await page.locator('#start').click(); await ready(page);
  assert.equal((await prefs(page)).level,3);
  assert.equal(await page.evaluate(()=>localStorage.getItem('rope-unrelated-test')),'keep');
  await shot(page,'reload-level-3');
  report.checks.persistence = { reload_resumes_level_3:true, in_game_restart:true, unrelated_storage_preserved:true, namespace:'rope-tangle-4399-v1:/idbfs' };
  await page.locator('#fullscreen').click();
  await page.waitForFunction(()=>!!document.fullscreenElement);
  await page.evaluate(()=>document.exitFullscreen());
  report.checks.fullscreen = true;
  for (const lang of ['zh-CN','en']) {
    await page.setViewportSize({width:390,height:844});
    await page.goto(new URL('games/rope-tangle/?lang='+lang,home).href);
    assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),true);
    await shot(page,'mobile-'+lang);
  }
  report.checks.mobile_shell = {width:390,chinese:true,english:true,overflow:false};
  const touchContext = await newContext({ viewport:{width:450,height:900},isMobile:true,hasTouch:true,
    userAgent:'Mozilla/5.0 (Linux; Android 14) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Mobile Safari/537.36' });
  const touch = await touchContext.newPage();
  await touch.goto(new URL('games/rope-tangle/',home).href);
  await touch.locator('#start').tap(); await ready(touch);
  await touch.locator('#fullscreen').tap(); await touch.waitForFunction(()=>!!document.fullscreenElement);
  await drag(touch,[253,297],[109,297],true);
  await shot(touch,'touch-level-1-completed');
  const next = await point(touch,225,615);
  await touch.touchscreen.tap(next.x,next.y); await touch.waitForTimeout(2000);
  await expectLevel(touch,2);
  report.checks.touch = {emulation:true,real_touch_events:true,first_level_completed:true,physical_device:'Unknown'};
  console.log('Touch first-level completion passed.');
  const retryContext = await newContext();
  const retry = await retryContext.newPage(); retry.expectedLoadFailure=true;
  const interrupted = '**/Build/Rope%20Tangle%20Puzzle.wasm';
  await retryContext.route(interrupted,route=>route.abort('failed'));
  await retry.goto(new URL('games/rope-tangle/',home).href);
  await retry.locator('#start').click();
  await retry.waitForFunction(()=>document.querySelector('#status').textContent==='加载未完成',null,{timeout:30000});
  await shot(retry,'network-error');
  await retryContext.unroute(interrupted); retry.expectedLoadFailure=false;
  await retry.locator('#start').click(); await ready(retry);
  await shot(retry,'retry-recovered');
  report.checks.retry = {wasm_aborted:true,error_visible:true,recovered:true};
  assert.deepEqual(report.page_errors,[]);
  assert.deepEqual(report.console_errors,[]);
  assert.deepEqual(report.external_requests,[]);
  assert.deepEqual(report.failed_responses,[]);
  report.result='passed'; console.log(JSON.stringify(report,null,2));
} catch(error) {
  report.result='failed';report.failure=error.stack;
  if(page) await shot(page,'failure').catch(()=>{});
  throw error;
} finally {
  await writeFile(path.join(output,'report.json'),JSON.stringify(report,null,2)+'\n');
  await Promise.all(contexts.map(context=>context.close()));
  await browser.close();
  if(!process.env.PAGES_URL) await new Promise(resolve=>server.close(resolve));
}
