import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { readFile, mkdir, stat, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const project = fileURLToPath(new URL('../', import.meta.url));
const site = path.join(project, 'site');
const output = path.join(project, '.verification');
const playwrightModule = process.env.PLAYWRIGHT_MODULE;
if (!playwrightModule) throw new Error('Set PLAYWRIGHT_MODULE to playwright-core/index.mjs');
const { chromium } = await import(pathToFileURL(playwrightModule));
const types = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8', '.json': 'application/json', '.jpg': 'image/jpeg',
  '.png': 'image/png', '.svg': 'image/svg+xml', '.avif': 'image/avif',
  '.mp3': 'audio/mpeg', '.aac': 'audio/aac', '.ogg': 'audio/ogg', '.mp4': 'video/mp4' };
const server = createServer(async (req, res) => {
  try {
    const requested = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
    const relative = requested.startsWith('/mini-games/') ? requested.slice('/mini-games/'.length) : requested.slice(1);
    let file = path.resolve(site, relative);
    if (file !== site && !file.startsWith(site + path.sep)) throw new Error('Invalid path');
    if ((await stat(file)).isDirectory()) {
      if (!requested.endsWith('/')) { res.writeHead(301, { Location: requested + '/' }); return res.end(); }
      file = path.join(file, 'index.html');
    }
    const bytes = await readFile(file);
    res.writeHead(200, { 'Content-Type': types[path.extname(file)] || 'application/octet-stream', 'Content-Length': bytes.length });
    res.end(bytes);
  } catch {
    res.writeHead(404);
    res.end('Not found');
  }
});
await mkdir(output, { recursive: true });
await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
const origin = `http://127.0.0.1:${server.address().port}`;
const home = `${origin}/mini-games/`;
const browser = await chromium.launch({ headless: true,
  executablePath: process.env.CHROME_PATH || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome' });
const context = await browser.newContext({ viewport: { width: 1280, height: 1000 } });
const report = { result: 'running', mount: '/mini-games/', checks: {}, page_errors: [], failed_responses: [], external_requests: [] };
await context.route('**/*', route => {
  const url = route.request().url();
  if (/^https?:/.test(url) && new URL(url).origin !== origin) {
    report.external_requests.push(url);
    return route.abort();
  }
  return route.continue();
});
const page = await context.newPage();
page.on('pageerror', error => report.page_errors.push(error.stack));
page.on('response', response => {
  if (response.status() >= 400) report.failed_responses.push({ url: response.url(), status: response.status() });
});
const shot = name => page.screenshot({ path: path.join(output, name + '.png'), fullPage: true });
const active = key => page.waitForFunction(key => window.__localGame?.scene.isActive(key), key, { timeout: 20000 });
const waterClick = async (x, y) => {
  const box = await page.locator('canvas').boundingBox();
  await page.mouse.click(box.x + x * box.width / 750, box.y + y * box.height / 500, { delay: 70 });
};
const storage = key => page.evaluate(key => localStorage.getItem(key), key);
try {
  await page.goto(home);
  await page.waitForFunction(() => document.querySelectorAll('.game-card').length === 2);
  assert.equal(await page.locator('#game-count').textContent(), '02 款小游戏');
  await page.waitForFunction(() => [...document.querySelectorAll('.card-media img')].every(img => img.complete && img.naturalWidth > 0));
  const games = JSON.parse(await readFile(path.join(site, 'games.json'), 'utf8'));
  for (const game of games) {
    assert.ok(game.href.endsWith('/'));
    assert.ok(!game.href.startsWith('/'));
    await stat(path.join(site, game.href, 'index.html'));
    await stat(path.join(site, game.cover));
  }
  await shot('homepage-desktop');
  report.checks.homepage = { cards: 2, covers: 'loaded', mount: '/mini-games/' };
  console.log('Homepage and project subpath passed.');

  await page.getByRole('link', { name: '小鳄鱼爱洗澡', exact: true }).click();
  await active('first');
  await page.goBack();
  await page.waitForSelector('.game-card');
  await page.goForward();
  await active('first');
  await page.reload();
  await active('first');
  await waterClick(375, 420);
  await active('tale');
  await waterClick(375, 250);
  await waterClick(375, 450);
  await active('level1');
  await page.waitForFunction(() => window.__localGame.scene.getScene('level1').control);
  const waterBox = await page.locator('canvas').boundingBox();
  await page.mouse.move(waterBox.x + 371 * waterBox.width / 750, waterBox.y + 60 * waterBox.height / 500);
  await page.mouse.down();
  await page.mouse.move(waterBox.x + 371 * waterBox.width / 750, waterBox.y + 302 * waterBox.height / 500, { steps: 42 });
  await page.mouse.up();
  await active('result');
  const waterResult = await page.evaluate(() => {
    const game = window.__localGame;
    return { ducks: game.scene.getScene('result').duck,
      received: game.scene.getScene('level1').curDripSum,
      needed: game.scene.getScene('level1').needDripCount };
  });
  assert.equal(waterResult.ducks, 3);
  assert.ok(waterResult.received >= waterResult.needed);
  const waterSave = await storage('xeyaxz-4399-v1.0');
  assert.ok(waterSave);
  await shot('water-first-level-complete');
  await page.locator('#fullscreen').click();
  assert.ok(await page.evaluate(() => document.fullscreenElement));
  await page.evaluate(() => document.exitFullscreen());
  await page.reload();
  await active('first');
  await waterClick(375, 420);
  await active('levels');
  assert.equal(await storage('xeyaxz-4399-v1.0'), waterSave);
  await page.getByRole('link', { name: '← 返回小游戏乐园', exact: true }).click();
  assert.equal(page.url(), home);
  report.checks.water = { ...waterResult, reload_persistence: true, fullscreen: true, back_forward: true, return_home: true };
  console.log('Water first level, save, navigation and fullscreen passed.');

  await page.getByRole('link', { name: '割绳子', exact: true }).click();
  await page.locator('#start').click();
  await page.waitForFunction(() => document.querySelector('#cover').hidden);
  assert.ok((await page.locator('#game').getAttribute('src')).startsWith('game/'));
  await page.locator('#fullscreen').click();
  assert.equal(await page.evaluate(() => document.fullscreenElement?.id), 'stage');
  await page.evaluate(() => document.exitFullscreen());
  await page.locator('#home').click();
  await page.waitForFunction(() => !document.querySelector('#home').disabled);
  await shot('cut-the-rope-shell');
  await page.getByRole('link', { name: '← 返回小游戏乐园', exact: true }).click();
  assert.equal(page.url(), home);

  // 使用原游戏已验证的 1100 × 680 画布坐标执行真实剪绳操作。
  await page.setViewportSize({ width: 1100, height: 680 });
  await page.goto(home + 'games/cut-the-rope/game/');
  await page.waitForSelector('canvas');
  await page.waitForTimeout(2500);
  await page.mouse.click(550, 460, { delay: 120 });
  await page.waitForTimeout(3600);
  await page.mouse.move(400, 180);
  await page.mouse.down();
  await page.waitForTimeout(100);
  await page.mouse.move(700, 180, { steps: 25 });
  await page.mouse.up();
  await page.waitForFunction(() => {
    const save = JSON.parse(localStorage.getItem('CTR') || '{}');
    return save.levelStars?.[0]?.[0] === 3 && save.levelCleared?.[0]?.[1] === true;
  }, null, { timeout: 20000 });
  await shot('cut-the-rope-first-level-complete');
  await page.reload();
  const cutSave = JSON.parse(await storage('CTR'));
  assert.equal(cutSave.levelStars[0][0], 3);
  assert.equal(cutSave.levelCleared[0][1], true);
  assert.equal(await storage('xeyaxz-4399-v1.0'), waterSave);
  report.checks.cut_the_rope = { stars: 3, next_level_unlocked: true, reload_persistence: true, fullscreen: true, menu: true, return_home: true };
  report.checks.shared_origin_storage = { water_key: 'xeyaxz-4399-v1.0', cut_key: 'CTR', unchanged_water_save: true };
  console.log('Cut the Rope first level, save, shell and storage isolation passed.');

  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(home);
  await page.waitForSelector('.game-card');
  await page.waitForFunction(() => [...document.images].every(img => img.complete));
  assert.equal(await page.evaluate(() => document.documentElement.scrollWidth), 390);
  await shot('homepage-mobile');
  await page.getByRole('link', { name: '小鳄鱼爱洗澡', exact: true }).click();
  await active('first');
  assert.equal(await page.evaluate(() => document.documentElement.scrollWidth), 390);
  await page.getByRole('link', { name: '← 返回小游戏乐园', exact: true }).click();
  await page.getByRole('link', { name: '割绳子', exact: true }).click();
  await page.locator('#start').click();
  await page.waitForFunction(() => document.querySelector('#cover').hidden);
  assert.equal(await page.evaluate(() => document.documentElement.scrollWidth), 390);
  report.checks.mobile_layout = { width: 390, homepage: true, water: true, cut_the_rope: true, physical_touch_device: 'not tested' };
  await page.goto(origin + '/');
  await page.waitForSelector('.game-card');
  report.checks.root_mount = true;
  assert.deepEqual(report.page_errors, []);
  assert.deepEqual(report.failed_responses, []);
  assert.deepEqual(report.external_requests, []);
  report.result = 'passed';
  console.log('Mobile layouts, root mount and network checks passed.');
} catch (error) {
  report.result = 'failed';
  report.failure = error.stack;
  await shot('failure').catch(() => {});
  console.error(error);
  process.exitCode = 1;
} finally {
  await writeFile(path.join(output, 'report.json'), JSON.stringify(report, null, 2));
  await browser.close();
  await new Promise(resolve => server.close(resolve));
  console.log(JSON.stringify(report, null, 2));
}
