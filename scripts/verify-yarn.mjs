// 严格子路径与外网阻断；只通过真实鼠标/触屏推动玩法。
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import { mkdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
const require = createRequire(process.env.PLAYWRIGHT_MODULE || '/Users/a/.npm/_npx/af752b90495482d7/node_modules/playwright-core/package.json');
const { chromium } = require('./index.js');
const home = process.env.PAGES_URL || 'http://127.0.0.1:8797/mini-games/';
const origin = new URL(home).origin, out = fileURLToPath(new URL('../.verification/yarn-' + (process.env.PAGES_URL ? 'live/' : 'local/'), import.meta.url));
await mkdir(out, { recursive: true });
const browser = await chromium.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless: true, args: ['--enable-unsafe-swiftshader'] });
const report = { result: 'running', home, checks: {}, inputs: [], errors: [], failed_responses: [], external_requests: [] };
let page, game;
async function context(options) {
  const c = await browser.newContext(options);
  await c.route('**/*', r => { const url = r.request().url(); if (/^https?:/.test(url) && new URL(url).origin !== origin) { report.external_requests.push(url); return r.abort(); } return r.continue(); });
  c.on('page', p => { p.on('pageerror', e => report.errors.push(e.message)); p.on('response', r => { if (r.status() >= 400) report.failed_responses.push({ url: r.url(), status: r.status() }); }); });
  return c;
}
async function ready(p) { await p.waitForFunction(() => document.querySelector('#cover').hidden, null, { timeout: 90000 }); const f = p.frames().find(f => f.url().includes('/yarn-unravel/game/')); await f.waitForFunction(() => __require('MainUI').MainUI.Inst != null); return f; }
async function shot(name, p = page) { await p.screenshot({ path: out + name + '.png', fullPage: true, timeout: 10000 }); }
async function ui(module, key, p = page, g = game, touch = false) {
  const v = await g.evaluate(({ module, key }) => { const obj = __require(module)[module].Inst, b = key ? obj[key] : obj; if (!b || b.visible === false) return null; const p = b.localToGlobal(b.width / 2, b.height / 2); return { x: p.x / fgui.GRoot.inst.width, y: p.y / fgui.GRoot.inst.height }; }, { module, key });
  if (!v) return false;
  await p.locator('#game').scrollIntoViewIfNeeded(); const b = await p.locator('#game').boundingBox(), x = b.x + v.x * b.width, y = b.y + v.y * b.height;
  if (touch) await p.touchscreen.tap(x, y); else await p.mouse.click(x, y, { delay: 50 });
  report.inputs.push({ ui: module + '.' + key, x, y, touch }); return true;
}
async function state(g = game) { return g.evaluate(() => { const d = __require('StorageData').StorageData, gd = __require('GamingData').GamingData, r = __require('YarnPaintingGameRootLogic').default.Inst, l = r?.levelLogic; return { show: d.getGameTypeShowLevel(232), level: gd.curGameLevel, won: !!__require('YarnWinUI').YarnWinUI.Inst, fitment: !!__require('YarnGetFitmentUI').YarnGetFitmentUI.Inst, finished: !!l?.isGameOver, yarns: l?.layers?.reduce((n, L) => n + L.planes.reduce((m, p) => m + p.screws.length, 0), 0) }; }); }
async function solve(target) {
  let stale = 0;
  for (let i = 0; i < 350; i++) {
    const s = await state();
    if (s.won && s.show > target) { console.log('CLEARED', target, JSON.stringify(s)); return s; }
    if (s.fitment) { const b = await page.locator('#game').boundingBox(); await page.mouse.click(b.x + b.width / 2, b.y + b.height * .8, { delay: 50 }); report.inputs.push({ fitment_continue: true }); await page.waitForTimeout(400); continue; }
    const v = await game.evaluate(() => {
      const l = __require('YarnPaintingGameRootLogic').default.Inst?.levelLogic;
      if (!l || l.isGameOver || l.isPlayEnterAnim || l.isPVAnim()) return null;
      const yarns = l.getCanOutYarns().filter(y => !y.isFrozenYarn && !y.isUknownYarn), y = yarns.find(y => !!l.getHoldBox(y));
      if (!y) return null;
      const p = y.sprite.node.convertToWorldSpaceAR(cc.v2(0, 0)), size = cc.view.getVisibleSize();
      return { x: p.x / size.width, y: 1 - p.y / size.height, color: y.color };
    });
    if (v) { const b = await page.locator('#game').boundingBox(); await page.mouse.click(b.x + v.x * b.width, b.y + v.y * b.height, { delay: 45 }); report.inputs.push({ yarn: target, ...v }); stale = 0; }
    else stale++;
    if (stale === 50) { console.log('WAITING', JSON.stringify(s)); await shot('waiting-' + target); }
    await page.waitForTimeout(250);
  }
  throw Error('Unable to clear level ' + target + ': ' + JSON.stringify(await state()));
}
try {
  const c = await context({ viewport: { width: 1280, height: 1100 }, locale: 'zh-CN' }); page = await c.newPage();
  await page.goto(new URL('games/yarn-unravel/', home).href); assert.equal(await page.locator('#game').getAttribute('src'), null); report.checks.lazy_load = true;
  await page.locator('#start').click(); game = await ready(page); console.log('MENU'); await shot('menu');
  const contract = await game.evaluate(async () => {
    const records = [], p = YarnPlatform, start = performance.now();
    await Promise.all([p.showRewarded(function () { records.push({ id: 'one', args: arguments.length, paused: cc.director.isPaused(), elapsed: performance.now() - start }); }), p.showRewarded(function () { records.push({ id: 'two', args: arguments.length, paused: cc.director.isPaused(), elapsed: performance.now() - start }); })]);
    const interstitial = []; p.setProvider({ interstitial: () => interstitial.push(true), rewarded: () => false });
    for (let i = 0; i < 7; i++) p.showInterstitial();
    await p.showRewarded(() => records.push({ id: 'denied-success' }), () => records.push({ id: 'denied' }));
    p.setProvider(null); return { records, interstitial: interstitial.length, paused: cc.director.isPaused() };
  });
  assert.deepEqual(contract.records.map(r => r.id), ['one', 'two', 'denied']); assert.ok(contract.records.slice(0, 2).every(r => r.args === 0 && !r.paused)); assert.equal(contract.interstitial, 3); assert.equal(contract.paused, false); report.checks.ad_contract = contract;
  await ui('MainUI', 'btnStart'); await game.waitForFunction(() => { const l = __require('YarnPaintingGameRootLogic').default.Inst?.levelLogic; return l?.layers?.length && !l.isPlayEnterAnim; }); await page.waitForTimeout(800); await shot('first-level');
  await page.waitForTimeout(1500);
  const locked = await game.evaluate(() => { const l = __require('YarnPaintingGameRootLogic').default.Inst.levelLogic, b = l.boxes.find(b => b.isLock), p = b.node.convertToWorldSpaceAR(cc.v2(0,0)), s = cc.view.getVisibleSize(); return { x: p.x / s.width, y: 1-p.y / s.height, before: l.boxes.filter(b => !b.isLock).length }; });
  const collectorBox = await page.locator('#game').boundingBox(); await page.mouse.click(collectorBox.x + locked.x * collectorBox.width, collectorBox.y + locked.y * collectorBox.height, { delay: 60 });
  await game.waitForFunction(before => __require('YarnPaintingGameRootLogic').default.Inst.levelLogic.boxes.filter(b => !b.isLock).length > before, locked.before); report.checks.reward_button_real_click = true;
  report.checks.level_1_real_mouse = await solve(1); await shot('level-1-clear');
  await game.waitForFunction(() => { const u = __require('YarnWinUI').YarnWinUI.Inst; return [u?.btnNext, u?.btnContinue].some(b => b?.visible && b.scaleX > .9); });
  const next = await game.evaluate(() => { const u = __require('YarnWinUI').YarnWinUI.Inst; return u.btnContinue.visible ? 'btnContinue' : 'btnNext'; });
  await ui('YarnWinUI', next); await page.waitForTimeout(2000); report.checks.level_2_real_mouse = await solve(2); await shot('level-2-clear');
  const saved = await state(); await page.locator('#restart').click(); game = await ready(page); assert.equal((await state()).show, saved.show); report.checks.refresh_save = saved.show;
  const keys = await game.evaluate(() => Object.keys(localStorage)); assert.ok(keys.some(k => k.startsWith('yarn-unravel-4399-v1:MXDDP_1364'))); assert.ok(!keys.includes('__GAME_USER_OPENID')); report.checks.namespaced_save = true;
  await ui('MainUI', 'btnYarnRank'); await game.locator('#local-rank').waitFor({ state: 'visible' }); await game.getByRole('button', { name: '返回游戏' }).click(); report.checks.local_score_panel = true;
  const id = await game.evaluate(() => __require('MainUI').MainUI.Inst.node.uuid); await page.locator('[data-language-select]').selectOption('en'); assert.equal(await game.evaluate(() => __require('MainUI').MainUI.Inst.node.uuid), id); report.checks.language_keeps_game = true;
  await page.locator('#fullscreen').click(); assert.ok(await page.evaluate(() => document.fullscreenElement)); await page.evaluate(() => document.exitFullscreen()); report.checks.fullscreen = true;
  const mobile = await context({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true, locale: 'zh-CN' }), mp = await mobile.newPage();
  await mp.goto(new URL('games/yarn-unravel/', home).href); await mp.locator('#start').tap(); const mg = await ready(mp); await ui('MainUI', 'btnStart', mp, mg, true); await mp.waitForTimeout(3000); await mg.waitForFunction(() => { const l = __require('YarnPaintingGameRootLogic').default.Inst?.levelLogic; return l?.layers?.length && !l.isPlayEnterAnim; });
  const before = await state(mg), point = await mg.evaluate(() => { const l = __require('YarnPaintingGameRootLogic').default.Inst.levelLogic, y = l.getCanOutYarns().find(y => l.getHoldBox(y)), p = y.sprite.node.convertToWorldSpaceAR(cc.v2(0, 0)), s = cc.view.getVisibleSize(); return { x: p.x / s.width, y: 1 - p.y / s.height }; });
  const mb = await mp.locator('#game').boundingBox(); await mp.touchscreen.tap(mb.x + point.x * mb.width, mb.y + point.y * mb.height); await mg.waitForFunction(count => { const l = __require('YarnPaintingGameRootLogic').default.Inst.levelLogic; return l.layers.reduce((n, L) => n + L.planes.reduce((m, p) => m + p.screws.length, 0), 0) < count; }, before.yarns, { timeout: 10000 }); assert.ok(await mp.evaluate(() => document.documentElement.scrollWidth <= innerWidth)); report.checks.mobile_real_touch = true; await shot('mobile-touch', mp); await mobile.close();
  assert.deepEqual(report.external_requests, []); assert.deepEqual(report.failed_responses, []); assert.deepEqual(report.errors, []); report.result = 'pass';
} catch (error) { report.result = 'fail'; report.error = error.stack; if (page) await shot('failure').catch(() => {}); process.exitCode = 1; }
finally { await writeFile(out + 'report.json', JSON.stringify(report, null, 2) + '\n'); console.log(JSON.stringify({ ...report, inputs: report.inputs.length }, null, 2)); await browser.close(); }
