// 独立浏览器配置验证语言选择、真实游戏和已完成关卡的跨语言存档。
import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { readFile, writeFile, mkdir, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const site = path.join(root, 'site');
const remote = process.env.PAGES_URL;
const out = path.join(root, '.verification', remote ? 'i18n-live' : 'i18n-local');
await mkdir(out, { recursive: true });
const { chromium } = await import(pathToFileURL(process.env.PLAYWRIGHT_MODULE));
const mime = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.json': 'application/json',
  '.css': 'text/css', '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg',
  '.avif': 'image/avif', '.mp3': 'audio/mpeg', '.aac': 'audio/aac', '.mp4': 'video/mp4' };
const server = createServer(async (req, res) => {
  try {
    const pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
    if (!pathname.startsWith('/mini-games/')) throw new Error('Outside mount');
    let file = path.resolve(site, pathname.slice('/mini-games/'.length));
    if (!file.startsWith(site + path.sep) && file !== site) throw new Error('Outside site');
    if ((await stat(file)).isDirectory()) file = path.join(file, 'index.html');
    const data = await readFile(file);
    res.writeHead(200, { 'Content-Type': mime[path.extname(file)] || 'application/octet-stream' });
    res.end(data);
  } catch { res.writeHead(404); res.end('Not found'); }
});
if (!remote) await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
const home = remote || `http://127.0.0.1:${server.address().port}/mini-games/`;
const origin = new URL(home).origin;
const browser = await chromium.launch({ headless: true,
  executablePath: process.env.CHROME_PATH || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome' });
const report = { result: 'running', home, checks: {}, errors: [], failed_responses: [], external_requests: [] };
const observedContexts = [];
async function context(locale) {
  const ctx = await browser.newContext({ locale, viewport: { width: 1100, height: 850 } });
  observedContexts.push(ctx);
  await ctx.addInitScript(() => {
    window.__ctrReady = false;
    window.addEventListener('message', event => {
      if (event.source === window && event.origin === location.origin &&
          event.data?.source === 'ctr-local' && event.data.type === 'ready') window.__ctrReady = true;
    });
  });
  await ctx.route('**/*', route => {
    const url = route.request().url();
    if (/^https?:/.test(url) && new URL(url).origin !== origin) {
      report.external_requests.push(url); return route.abort();
    }
    return route.continue();
  });
  ctx.on('page', page => {
    page.on('pageerror', e => report.errors.push(e.stack));
    page.on('response', response => {
      if (response.status() >= 400) report.failed_responses.push({ url: response.url(), status: response.status() });
    });
  });
  return ctx;
}
const language = page => page.evaluate(() => document.documentElement.lang);
const choose = (page, lang) => page.locator('[data-language-select]').selectOption(lang);
const gameReady = page => page.waitForFunction(() => document.querySelector('#cover').hidden && !document.querySelector('#home').disabled);
const texts = page => page.evaluate(() => {
  const items = [];
  const visit = node => {
    if (node.visible === false) return;
    if (node.type === 'Text') items.push(node.text);
    for (const child of node.list || []) visit(child);
  };
  for (const scene of window.__localGame.scene.getScenes(true)) {
    for (const node of scene.children.list) visit(node);
  }
  return items;
});
const storage = (page, key) => page.evaluate(key => localStorage.getItem(key), key);
const active = (page, scene) => page.waitForFunction(scene => window.__localGame?.scene.isActive(scene), scene);
const waterClick = async (page, x, y) => {
  const b = await page.locator('canvas').boundingBox();
  await page.mouse.click(b.x + x * b.width / 750, b.y + y * b.height / 500, { delay: 70 });
};
let page;
try {
  const ctx = await context('en-US');
  page = await ctx.newPage();
  await page.goto(home);
  await page.waitForSelector('.game-card');
  assert.equal(await language(page), 'en');
  assert.match(await page.locator('h1').textContent(), /little/);
  assert.match(await page.title(), /Little Playground/);
  assert.match(await page.locator('.card-media img').first().getAttribute('alt'), /Water/);
  await choose(page, 'zh-CN');
  assert.equal(await storage(page, 'mini-games-language'), 'zh-CN');
  await page.goto(home);
  assert.equal(await language(page), 'zh-CN');
  await page.goto(home + '?lang=en');
  assert.equal(await language(page), 'en');
  await page.goto(home + '?lang=unsupported');
  assert.equal(await language(page), 'en');
  report.checks.preference = { browser: true, saved: true, url_priority: true, invalid_query: true };

  await page.goto(home + '?lang=en');
  await page.getByRole('link', { name: 'Where’s My Water?', exact: true }).click();
  assert.equal(new URL(page.url()).searchParams.get('lang'), 'en');
  await active(page, 'first');
  assert.ok((await texts(page)).includes('Play'));
  assert.ok((await texts(page)).every(text => !/[\u3400-\u9fff]/.test(text)));
  await waterClick(page, 375, 420);
  await active(page, 'tale');
  await waterClick(page, 375, 250); await waterClick(page, 375, 450);
  await active(page, 'level1');
  await page.waitForFunction(() => window.__localGame.scene.getScene('level1').control);
  const b = await page.locator('canvas').boundingBox();
  await page.mouse.move(b.x + 371 * b.width / 750, b.y + 60 * b.height / 500);
  await page.mouse.down();
  await page.mouse.move(b.x + 371 * b.width / 750, b.y + 302 * b.height / 500, { steps: 42 });
  await page.mouse.up();
  await active(page, 'result');
  assert.equal(await page.evaluate(() => window.__localGame.scene.getScene('result').duck), 3);
  const waterSave = await storage(page, 'xeyaxz-4399-v1.0');
  await page.screenshot({ path: path.join(out, 'water-en-result.png'), fullPage: true });
  await choose(page, 'zh-CN');
  await page.waitForFunction(() => window.WaterLocale?.language === 'zh-CN');
  await active(page, 'first');
  assert.ok((await texts(page)).includes('开始游戏'));
  assert.equal(await storage(page, 'xeyaxz-4399-v1.0'), waterSave);
  await waterClick(page, 375, 420);
  await active(page, 'levels');
  await choose(page, 'en');
  await page.waitForFunction(() => window.WaterLocale?.language === 'en');
  await active(page, 'first');
  assert.equal(await storage(page, 'xeyaxz-4399-v1.0'), waterSave);
  await page.getByRole('link', { name: '← Back to playground', exact: true }).click();
  await page.waitForSelector('.game-card');
  assert.equal(new URL(page.url()).searchParams.get('lang'), 'en');
  report.checks.water = { english_game_text: true, three_ducks: true, switch_both_directions: true, completed_progress_preserved: true };
  console.log('Water translations, real completion and cross-language saves passed.');

  await page.getByRole('link', { name: 'Cut the Rope', exact: true }).click();
  await page.locator('#start').click(); await gameReady(page);
  let frame = page.frames().find(frame => /\/cut-the-rope\/game\//.test(frame.url()));
  assert.equal(await frame.evaluate(() => GameInterface.getCurrentLanguage()), 'en');
  await choose(page, 'zh-CN');
  await page.waitForFunction(() => document.querySelector('#game').contentWindow.GameInterface?.getCurrentLanguage() === 'zh');
  await gameReady(page);
  frame = page.frames().find(frame => /\/cut-the-rope\/game\//.test(frame.url()));
  assert.equal(await frame.evaluate(() => document.documentElement.lang), 'zh-CN');
  await page.screenshot({ path: path.join(out, 'cut-zh-shell.png'), fullPage: true });

  // 英文原关卡真实剪绳，再切回中文；保留原存档中的星数与解锁数据。
  await page.setViewportSize({ width: 1100, height: 680 });
  await page.goto(home + 'games/cut-the-rope/game/?lang=en');
  await page.waitForSelector('canvas');
  await page.waitForFunction(() => window.__ctrReady);
  await page.waitForTimeout(2500);
  await page.mouse.click(550, 460, { delay: 120 });
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(3600);
  await page.mouse.move(400, 180); await page.mouse.down();
  await page.waitForTimeout(100);
  await page.mouse.move(700, 180, { steps: 25 }); await page.mouse.up();
  await page.waitForFunction(() => JSON.parse(localStorage.getItem('CTR') || '{}').levelStars?.[0]?.[0] === 3,
    null, { timeout: 20000 });
  const before = JSON.parse(await storage(page, 'CTR'));
  await page.goto(home + 'games/cut-the-rope/?lang=zh-CN');
  await page.locator('#start').click(); await gameReady(page);
  frame = page.frames().find(frame => /\/cut-the-rope\/game\//.test(frame.url()));
  assert.equal(await frame.evaluate(() => GameInterface.getCurrentLanguage()), 'zh');
  const after = JSON.parse(await storage(page, 'CTR'));
  for (const key of ['levelStars', 'levelCleared', 'pictures']) assert.deepEqual(after[key], before[key], key);
  await choose(page, 'en');
  await page.waitForFunction(() => document.querySelector('#game').contentWindow.GameInterface?.getCurrentLanguage() === 'en');
  await gameReady(page);
  assert.deepEqual(JSON.parse(await storage(page, 'CTR')).levelStars, before.levelStars);
  for (const lang of ['zh-CN', 'en']) {
    frame = page.frames().find(frame => /\/cut-the-rope\/game\//.test(frame.url()));
    await frame.evaluate(() => GameInterface.toggleLanguage());
    await page.waitForFunction(lang => document.documentElement.lang === lang, lang);
    await gameReady(page);
    assert.equal(await page.locator('[data-language-select]').inputValue(), lang);
    assert.deepEqual(JSON.parse(await storage(page, 'CTR')).levelStars, before.levelStars);
  }
  assert.equal(await storage(page, 'xeyaxz-4399-v1.0'), waterSave);
  report.checks.cut = { language_interface: true, chinese_fonts_rendered: 'see screenshot', three_stars: true, switch_both_directions: true, settings_language_sync: true, completed_progress_preserved: true };
  console.log('Cut the Rope languages, real completion and cross-language saves passed.');

  for (const lang of ['zh-CN', 'en']) {
    for (const width of [320, 390, 1280]) {
      await page.setViewportSize({ width, height: 844 });
      await page.goto(home + '?lang=' + lang);
      await page.waitForSelector('.game-card');
      assert.equal(await language(page), lang);
      assert.equal(await page.evaluate(() => document.documentElement.scrollWidth), width);
      if (width === 390) await page.screenshot({ path: path.join(out, `home-${lang}-mobile.png`), fullPage: true });
    }
  }
  const fallback = await context('fr-FR');
  const fallbackPage = await fallback.newPage();
  await fallbackPage.goto(home); await fallbackPage.waitForSelector('.game-card');
  assert.equal(await language(fallbackPage), 'zh-CN');
  const blocked = await context('en-US');
  await blocked.addInitScript(() => Object.defineProperty(window, 'localStorage', { get() { throw new DOMException('Blocked', 'SecurityError'); } }));
  const blockedPage = await blocked.newPage();
  await blockedPage.goto(home); await blockedPage.waitForSelector('.game-card');
  await choose(blockedPage, 'zh-CN');
  assert.equal(await language(blockedPage), 'zh-CN');
  assert.equal(new URL(await blockedPage.locator('.game-card').first().getAttribute('href')).searchParams.get('lang'), 'zh-CN');
  report.checks.layout_and_fallbacks = { chinese_and_english: true, widths: [320, 390, 1280], unsupported_browser: true, blocked_preference_storage: true };
  assert.deepEqual(report.errors, []);
  assert.deepEqual(report.failed_responses, []);
  assert.deepEqual(report.external_requests, []);
  report.result = 'passed';
} catch (error) {
  report.result = 'failed'; report.failure = error.stack; process.exitCode = 1;
  console.error(error);
  if (page) await page.screenshot({ path: path.join(out, 'failure.png'), fullPage: true }).catch(() => {});
} finally {
  await writeFile(path.join(out, 'report.json'), JSON.stringify(report, null, 2));
  for (const ctx of observedContexts) await ctx.close();
  await browser.close();
  if (server.listening) await new Promise(resolve => {
    server.close(resolve);
    server.closeAllConnections();
  });
  console.log(JSON.stringify(report, null, 2));
}
