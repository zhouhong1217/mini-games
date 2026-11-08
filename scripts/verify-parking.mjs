// 在隔离浏览器中用真实输入完成原版首关；不修改 Unity 内存或关卡存档。
import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { readFile, writeFile, mkdir, stat } from 'node:fs/promises';
import path from 'node:path';
import { createHash } from 'node:crypto';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const site = path.join(root, 'site');
const output = path.join(root, '.verification', process.env.PAGES_URL ? 'parking-live' : 'parking-local');
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
  external_requests: [], failed_responses: [], input_actions: [] };
const contexts = [];
const logs = [];
async function newContext() {
  const context = await browser.newContext({ viewport: { width: 1280, height: 1000 }, locale: 'zh-CN' });
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
      if (message.type() === 'error' && !page.expectedLoadFailure) report.console_errors.push(message.text());
    });
    page.on('response', response => {
      if (response.status() >= 400 && !page.expectedLoadFailure) report.failed_responses.push({ url: response.url(), status: response.status() });
    });
  });
  return context;
}
const ready = page => page.waitForFunction(() => document.querySelector('#cover').hidden && !document.querySelector('#restart').disabled, null, { timeout: 90000 });
const gameFrame = page => page.frames().find(f => /\/narrow-parking\/game\//.test(f.url()));
const shot = (page, name) => page.screenshot({ path: path.join(output, name + '.png'), fullPage: true });
async function until(check, label, timeout = 30000) {
  const start = Date.now();
  while (Date.now() - start < timeout) {
    const value = await check();
    if (value) return value;
    await new Promise(resolve => setTimeout(resolve, 250));
  }
  throw new Error('Timed out: ' + label);
}
// UnityPrf 中已观察到的整型值：单字节键长、UTF-8 键、0xfe、LE int32。
// 只读取 FILE_DATA；整个测试不写入或预置游戏进度。
async function prefs(frame) {
  return frame.evaluate(async () => await new Promise((resolve, reject) => {
    const request = indexedDB.open('/idbfs');
    request.onerror = () => reject(request.error);
    request.onsuccess = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains('FILE_DATA')) { db.close(); resolve({}); return; }
      const transaction = db.transaction('FILE_DATA', 'readonly');
      const store = transaction.objectStore('FILE_DATA');
      const keys = store.getAllKeys(), values = store.getAll();
      transaction.onerror = () => { db.close(); reject(transaction.error); };
      transaction.oncomplete = () => {
        const result = {};
        keys.result.forEach((key, index) => {
          if (!String(key).endsWith('/PlayerPrefs')) return;
          const data = values.result[index].contents;
          if (!data || new TextDecoder().decode(data.slice(0, 8)) !== 'UnityPrf') return;
          for (const name of ['Stars00', 'CurLevel', 'IsTutorialComplete', 'Theme0FLevel']) {
            const encoded = new TextEncoder().encode(name);
            for (let i = 1; i + encoded.length + 5 <= data.length; i++) {
              if (data[i - 1] === encoded.length && encoded.every((value, j) => data[i + j] === value) && data[i + encoded.length] === 254) {
                result[name] = new DataView(data.buffer, data.byteOffset).getInt32(i + encoded.length + 1, true);
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
let page;
try {
  const provenance = JSON.parse(await readFile(path.join(root, 'provenance/narrow-parking.json')));
  for (const file of provenance.files) {
    const bytes = await readFile(path.join(site, 'games/narrow-parking/game', file.destination));
    assert.equal(createHash('sha256').update(bytes).digest('hex'), file.local_sha256);
    if (/\.wasm$|\.data$/.test(file.destination)) assert.equal(file.local_sha256, file.original_sha256);
  }
  report.checks.original_binaries = 'SHA-256 unchanged';
  const context = await newContext();
  page = await context.newPage();
  await page.goto(home);
  await page.waitForSelector('.game-card');
  await page.evaluate(() => {
    localStorage.setItem('CTR', '{"parking-isolation-check":true}');
    localStorage.setItem('xeyaxz-4399-v1.0', 'parking-isolation-check');
  });
  await page.getByRole('link', { name: '窄道停车', exact: true }).click();
  await page.locator('#start').click();
  await ready(page);
  let frame = gameFrame(page);
  await frame.waitForFunction(() => !!window.parkingGame);
  await until(() => logs.some(line => line.includes('ChangeGear return')), 'first tutorial scene');
  await shot(page, 'tutorial-controls');
  // 四页原版教程；全部点击 OK，不使用跳过教程入口。
  const click = async (x, y) => {
    const box = await page.locator('#game').boundingBox();
    const canvas = await frame.locator('canvas').boundingBox();
    assert.ok(box && canvas);
    await page.mouse.click(canvas.x + x * canvas.width / 960, canvas.y + y * canvas.height / 540);
  };
  for (let i = 0; i < 4; i++) { await click(480, 455); await page.waitForTimeout(180); }
  // 连续真实加速，进入首关直线停车位；停车判定由原版游戏执行。
  report.input_actions.push('four tutorial OK clicks', 'W 9 seconds', 'Space 0.7 seconds');
  await page.keyboard.down('w'); await page.waitForTimeout(9000); await page.keyboard.up('w');
  await page.keyboard.down('Space'); await page.waitForTimeout(700); await page.keyboard.up('Space');
  const completed = await until(async () => { const data = await prefs(frame); return data.Stars00 === 3 && data.IsTutorialComplete === 1 && data.Theme0FLevel >= 1 ? data : null; }, 'real first-level completion', 30000);
  await page.waitForTimeout(1600);
  await click(480, 480); // 原版 REWARD -> LEVEL COMPLETE。
  await page.waitForTimeout(450);
  await shot(page, 'first-level-complete');
  await click(630, 480); // 原版 NEXT，进入第二关。
  await until(async () => (await prefs(frame)).CurLevel === 1, 'next level');
  await page.waitForTimeout(5500);
  await shot(page, 'second-level');
  report.checks.gameplay = { ...completed, next_level: 2, source: 'real keyboard input and read-only persisted PlayerPrefs' };

  // 验证 Q 切换档位、C 切换视角；局部截图避开计时 HUD。
  const canvasBox = await frame.locator('canvas').boundingBox();
  const gear = () => page.screenshot({ clip: { x: canvasBox.x + 805 / 960 * canvasBox.width, y: canvasBox.y + 175 / 540 * canvasBox.height, width: 50 / 960 * canvasBox.width, height: 125 / 540 * canvasBox.height } });
  const forward = await gear(); await page.keyboard.press('q'); await page.waitForTimeout(200); const reverse = await gear();
  assert.notDeepEqual(forward, reverse);
  await shot(page, 'reverse-gear'); await page.keyboard.press('q');
  await page.keyboard.press('c'); await page.waitForTimeout(300); await shot(page, 'camera-change');
  await page.keyboard.press('p'); await page.waitForTimeout(250); await shot(page, 'pause-menu');
  await page.keyboard.press('p');
  report.checks.controls = { acceleration: true, braking: true, gear: true, camera: 'see screenshot', pause: 'see screenshot' };

  const frameBeforeLanguage = frame;
  await page.locator('[data-language-select]').selectOption('en');
  assert.equal(await page.title(), 'Narrow Parking · Little Playground');
  assert.equal(gameFrame(page), frameBeforeLanguage);
  await page.locator('#fullscreen').click();
  assert.equal(await page.evaluate(() => document.fullscreenElement?.id), 'stage');
  await page.evaluate(() => document.exitFullscreen());
  await page.locator('[data-language-select]').selectOption('zh-CN');
  await shot(page, 'shell-playing');

  await frame.evaluate(() => { ParkingStorage.setItem('verification', '1'); ParkingStorage.clear(); });
  assert.deepEqual(await page.evaluate(() => [localStorage.getItem('CTR'), localStorage.getItem('xeyaxz-4399-v1.0')]), ['{"parking-isolation-check":true}', 'parking-isolation-check']);
  report.checks.storage_isolation = true;
  await page.reload(); await page.locator('#start').click(); await ready(page); frame = gameFrame(page);
  const restored = await until(async () => { const data = await prefs(frame); return data.Stars00 === 3 && data.CurLevel === 1 ? data : null; }, 'reload persistence');
  report.checks.reload_persistence = restored;
  await page.locator('.portal-back').click(); await page.waitForSelector('.game-card');
  assert.equal(new URL(page.url()).pathname, new URL(home).pathname);
  report.checks.shell = { languages: true, language_switch_preserves_game: true, fullscreen: true, return_home: true };
  await context.close();

  // 独立上下文实际阻断 WASM 下载，验证失败后可重试，不伪造 ready/error 消息。
  const retryContext = await newContext();
  const retryPage = await retryContext.newPage();
  retryPage.expectedLoadFailure = true;
  let blockWasm = true, blocked = 0;
  await retryContext.route('**/Build/game.wasm', route => {
    if (blockWasm) { blocked++; return route.abort('failed'); }
    return route.continue();
  });
  await retryPage.goto(home + 'games/narrow-parking/'); await retryPage.locator('#start').click();
  await retryPage.waitForFunction(() => !document.querySelector('#start').hidden && !document.querySelector('#start').disabled && document.querySelector('#error-detail').textContent.length > 0, null, { timeout: 45000 });
  assert.ok(blocked > 0); await shot(retryPage, 'load-failure');
  blockWasm = false; retryPage.expectedLoadFailure = false;
  await retryPage.locator('#start').click(); await ready(retryPage);
  await shot(retryPage, 'retry-success');
  report.checks.load_retry = { wasm_requests_blocked: blocked, recovered: true };
  for (const lang of ['zh-CN', 'en']) {
    for (const width of [320, 390, 1280]) {
      await retryPage.setViewportSize({ width, height: 844 });
      await retryPage.goto(home + 'games/narrow-parking/?lang=' + lang);
      assert.equal(await retryPage.evaluate(() => document.documentElement.scrollWidth), width);
    }
  }
  report.checks.layout = { languages: ['zh-CN', 'en'], widths: [320, 390, 1280], physical_mobile: 'not tested; requires keyboard' };
  assert.deepEqual(report.page_errors, []); assert.deepEqual(report.console_errors, []);
  assert.deepEqual(report.external_requests, []); assert.deepEqual(report.failed_responses, []);
  report.result = 'passed';
} catch (error) {
  report.result = 'failed'; report.failure = error.stack; process.exitCode = 1;
  if (page && !page.isClosed()) await shot(page, 'failure').catch(() => {});
} finally {
  await writeFile(path.join(output, 'report.json'), JSON.stringify(report, null, 2) + '\n');
  for (const context of contexts) await context.close().catch(() => {});
  await browser.close();
  if (server.listening) await new Promise(resolve => server.close(resolve));
  console.log(JSON.stringify(report, null, 2));
}
