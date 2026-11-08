// 在隔离浏览器中用真实输入完成原版前两关；不修改 Unity 内存或关卡存档。
import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { readFile, writeFile, mkdir, stat } from 'node:fs/promises';
import path from 'node:path';
import { createHash } from 'node:crypto';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const site = path.join(root, 'site');
const output = path.join(root, '.verification', process.env.PAGES_URL ? 'snake-live' : 'snake-local');
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
      if (message.type() === 'error' && !page.expectedLoadFailure) report.console_errors.push(message.text());
    });
    page.on('response', response => {
      if (response.status() >= 400 && !page.expectedLoadFailure) report.failed_responses.push({ url: response.url(), status: response.status() });
    });
  });
  return context;
}
const ready = page => page.waitForFunction(() => document.querySelector('#cover').hidden && !document.querySelector('#restart').disabled, null, { timeout: 60000 });
const gameFrame = page => page.frames().find(f => /\/apple-snake\/game\//.test(f.url()));
const saved = page => page.evaluate(() => localStorage.getItem('apple-snake-4399-v1:level'));
const shot = (page, name) => page.screenshot({ path: path.join(output, name + '.png'), fullPage: true });
async function clickGame(page, x, y, touch = false) {
  const box = await gameFrame(page).locator('canvas').boundingBox();
  const px = box.x + x * box.width / 1180, py = box.y + y * box.height / 600;
  if (touch) await page.touchscreen.tap(px, py);
  else await page.mouse.click(px, py, { delay: 80 });
  await page.waitForTimeout(400);
}
async function move(page, keys) {
  await gameFrame(page).locator('canvas').focus();
  for (const key of keys) {
    await page.keyboard.press(key, { delay: 90 });
    await page.waitForTimeout(260);
  }
}
async function waitSave(page, value) {
  await page.waitForFunction(value => localStorage.getItem('apple-snake-4399-v1:level') === value, value, { timeout: 10000 });
  await page.waitForTimeout(1300);
}
let page;
try {
  const provenance = JSON.parse(await readFile(path.join(root, 'provenance/apple-snake.json')));
  for (const file of provenance.files) {
    const bytes = await readFile(path.join(site, 'games/apple-snake/game', file.destination));
    assert.equal(createHash('sha256').update(bytes).digest('hex'), file.local_sha256);
  }
  const context = await newContext();
  page = await context.newPage();
  await page.goto(home + '?lang=en');
  const card = page.getByRole('link', { name: 'Snake to Eat', exact: true });
  await card.click();
  await page.waitForFunction(() => document.querySelector('h1')?.textContent === 'Snake to Eat');
  assert.equal(await page.locator('h1').textContent(), 'Snake to Eat');
  assert.equal(page.frames().length, 2);
  assert.equal(await page.locator('#game').getAttribute('src'), null);
  await page.evaluate(() => localStorage.setItem('snake-verification-unrelated', 'keep'));
  await shot(page, 'start-en');
  await page.locator('#start').click();
  await ready(page);
  const frame = gameFrame(page);
  assert.ok(frame);
  await page.locator('[data-language-select]').selectOption('zh-CN');
  assert.equal(await page.locator('h1').textContent(), '吃苹果的蛇');
  assert.equal(gameFrame(page), frame);
  await shot(page, 'menu-zh');
  report.checks.shell = { project_subpath: true, deferred_load: true, original_game_ready_signal: true, bilingual: true, language_keeps_game: true };
  console.log('Shell, language and original game-ready signal passed.');
  await clickGame(page, 590, 470);
  await page.waitForTimeout(1000);
  await move(page, Array(9).fill('d'));
  await waitSave(page, '0');
  await shot(page, 'level-1-completed');
  await clickGame(page, 590, 434);
  await page.waitForTimeout(2300);
  await move(page, ['d', 'd', 'd', 'w', 'w']);
  await shot(page, 'level-2-apple-eaten');
  // 用原版重开按钮恢复苹果，再用实际输入完成同一关。
  await clickGame(page, 42, 42);
  await page.waitForTimeout(1000);
  await shot(page, 'level-2-restarted');
  await move(page, ['d', 'd', 'd', 'w', 'w', 'w', 'd', 'd', 'd', 'd', 'd', 'd', 'd']);
  await waitSave(page, '1');
  await shot(page, 'level-2-completed');
  report.checks.gameplay = { first_two_levels: 'completed with real WASD input', apple_growth: 'screenshots before/after original restart', next_level: true, in_game_restart: true, saved_level: await saved(page) };
  console.log('First two levels and original restart passed.');
  await page.reload();
  await page.locator('#start').click();
  await ready(page);
  await clickGame(page, 590, 470);
  await page.waitForTimeout(1400);
  assert.equal(await saved(page), '1');
  await shot(page, 'reload-level-3');
  await clickGame(page, 42, 118);
  await page.waitForTimeout(900);
  await shot(page, 'hint-local');
  assert.equal(await page.evaluate(() => localStorage.getItem('snake-verification-unrelated')), 'keep');
  report.checks.persistence = { completed_level: '1', resumes_level_3: 'screenshot', storage_namespace: 'apple-snake-4399-v1:', unrelated_storage: 'preserved', hint: 'local callback' };
  await page.locator('#fullscreen').click();
  await page.waitForFunction(() => !!document.fullscreenElement);
  await page.locator('#fullscreen').evaluate(() => document.exitFullscreen());
  report.checks.fullscreen = true;
  for (const lang of ['zh-CN', 'en']) {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto(new URL('games/apple-snake/?lang=' + lang, home).href);
    assert.equal(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), true);
    await shot(page, 'mobile-' + lang);
  }
  report.checks.mobile_shell = { width: 390, chinese: true, english: true, overflow: false };
  // 浏览器触屏模拟：使用原版画面方向按钮完成第一关。
  const touchContext = await newContext({ viewport: { width: 844, height: 390 }, isMobile: true, hasTouch: true,
    userAgent: 'Mozilla/5.0 (Linux; Android 14) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Mobile Safari/537.36' });
  const touch = await touchContext.newPage();
  await touch.goto(new URL('games/apple-snake/', home).href);
  await touch.locator('#start').tap();
  await ready(touch);
  await touch.locator('#fullscreen').tap();
  await touch.waitForFunction(() => !!document.fullscreenElement);
  await clickGame(touch, 590, 470, true);
  await touch.waitForTimeout(1000);
  for (let i = 0; i < 9; i++) await clickGame(touch, 1037, 360, true);
  await waitSave(touch, '0');
  await shot(touch, 'touch-level-1-completed');
  report.checks.touch = { browser_emulation: true, real_touch_events: true, first_level_completed: true, physical_device: 'Unknown' };
  console.log('Touch first-level completion passed.');
  const retryContext = await newContext();
  const retry = await retryContext.newPage();
  retry.expectedLoadFailure = true;
  const interrupted = '**/Build/SnaketoEat.wasm.unityweb';
  await retryContext.route(interrupted, route => route.abort('failed'));
  await retry.goto(new URL('games/apple-snake/', home).href);
  await retry.locator('#start').click();
  await retry.waitForFunction(() => document.querySelector('#status').textContent === '加载未完成', null, { timeout: 30000 });
  await shot(retry, 'network-error');
  await retryContext.unroute(interrupted);
  retry.expectedLoadFailure = false;
  await retry.locator('#start').click();
  await ready(retry);
  await shot(retry, 'retry-recovered');
  report.checks.retry = { wasm_request_aborted: true, error_visible: true, retry_recovers: true };
  assert.deepEqual(report.page_errors, []);
  assert.deepEqual(report.console_errors, []);
  assert.deepEqual(report.external_requests, []);
  assert.deepEqual(report.failed_responses, []);
  report.result = 'passed';
  console.log(JSON.stringify(report, null, 2));
} catch (error) {
  report.result = 'failed'; report.failure = error.stack;
  if (page) await shot(page, 'failure').catch(() => {});
  throw error;
} finally {
  await writeFile(path.join(output, 'report.json'), JSON.stringify(report, null, 2) + '\n');
  await Promise.all(contexts.map(context => context.close()));
  await browser.close();
  if (!process.env.PAGES_URL) await new Promise(resolve => server.close(resolve));
}
