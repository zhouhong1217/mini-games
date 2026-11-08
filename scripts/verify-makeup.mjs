// 通过真实鼠标完成原版流程；只读 Cocos 节点用于定位，不修改进度或调用玩法函数。
import assert from 'node:assert/strict';
import { mkdir, writeFile } from 'node:fs/promises';
import { fileURLToPath, pathToFileURL } from 'node:url';
import path from 'node:path';

const root = fileURLToPath(new URL('../', import.meta.url));
const output = path.join(root, '.verification', process.env.MAKEUP_OUTPUT || 'makeup-local');
await mkdir(output, { recursive: true });
const gameURL = process.env.GAME_URL || 'http://127.0.0.1:8767/games/makeup-relaxation/game/';
const origin = new URL(gameURL).origin;
if (!process.env.PLAYWRIGHT_MODULE) throw Error('Set PLAYWRIGHT_MODULE to playwright-core/index.mjs');
const { chromium } = await import(pathToFileURL(process.env.PLAYWRIGHT_MODULE));
const browser = await chromium.launch({ headless: true,
  executablePath: process.env.CHROME_PATH || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  args: ['--remote-debugging-port=9333'] });
const context = await browser.newContext({ viewport: { width: 450, height: 800 }, locale: 'zh-CN', serviceWorkers: 'block' });
const report = { result: 'running', gameURL, started: new Date().toISOString(), checks: {}, steps: [],
  page_errors: [], console_errors: [], failed_responses: [], failed_requests: [], external_requests: [], requests: 0 };
await context.route('**/*', route => {
  const url = route.request().url();
  if (/^https?:/.test(url) && new URL(url).origin !== origin) {
    report.external_requests.push(url); return route.abort();
  }
  report.requests++; return route.continue();
});
await context.routeWebSocket('**/*', socket => {
  if (new URL(socket.url()).host !== new URL(origin).host) {
    report.external_requests.push(socket.url()); socket.close();
  } else socket.connectToServer();
});
// 独立的其他游戏哨兵，用于证明本游戏写入和 clear 的边界。
await context.addInitScript(() => {
  window.__testNativeStorage = window.localStorage;
  if (!localStorage.getItem('other-game:verification')) localStorage.setItem('other-game:verification', 'keep');
});
const page = await context.newPage();
page.on('pageerror', e => report.page_errors.push(e.stack));
page.on('console', m => { if (m.type() === 'error') report.console_errors.push(m.text()); });
page.on('response', r => { if (r.status() >= 400) report.failed_responses.push({ url: r.url(), status: r.status() }); });
page.on('requestfailed', r => report.failed_requests.push({ url: r.url(), failure: r.failure() }));
const save = () => writeFile(path.join(output, 'report.json'), JSON.stringify(report, null, 2));
const shot = name => page.screenshot({ path: path.join(output, name + '.png') });
const delay = ms => page.waitForTimeout(ms);
async function until(check, label, timeout = 30000) {
  const start = Date.now();
  while (Date.now() - start < timeout) { const r = await check(); if (r) return r; await delay(200); }
  throw Error('Timed out: ' + label);
}
async function inspect() {
  return page.evaluate(async () => {
    const x = window.__makeupLocal, cc = x.engine, en = await System.import('chunks:///_virtual/FaceEnum.ts');
    const ui = x.nodes().find(n => n.name === 'uiHuaZhuang' && n.activeInHierarchy)?.getComponent('uiFaceHuaZhuang');
    const step = en.default.getSubStep(), pos = n => n ? { x: n.worldPosition.x, y: n.worldPosition.y } : null;
    return { step, pending_steps: en.default._operateArray?.length ?? 0, tool: ui?._daojuNode?.name, pen: pos(ui?._daojuNode?.getChildByName('pen')),
      triggers: x.nodes().filter(n => n.activeInHierarchy).flatMap(n => n.components.filter(c => c.stepType === step)
        .map(c => ({ name: n.name, type: cc.js.getClassName(c), pos: pos(n), gesture: c.gestureType,
          area: c.gestureArea, time: c.triggerTime, radius: c.triggerRadius, done: c._drawOverTmp }))),
      size: cc.view.getVisibleSize(), you: pos(ui?.node.getChildByName('you')),
      youActive: ui?.node.getChildByName('you')?.activeInHierarchy,
      uis: x.nodes().filter(n => n.activeInHierarchy && /^ui[A-Z]/.test(n.name)).map(n => n.name) };
  });
}
async function css(pos) {
  const { width, height } = await page.evaluate(() => __makeupLocal.engine.view.getVisibleSize());
  const box = await page.locator('#GameCanvas').boundingBox();
  return { x: box.x + pos.x * box.width / width, y: box.y + (height - pos.y) * box.height / height };
}
async function clickHandler(handler, parent, item) {
  const locate = () => page.evaluate(({ handler, parent, item }) => {
    const x = __makeupLocal, cc = x.engine;
    const visible = n => { let opacity = 255; for (let p = n; p; p = p.parent) opacity *= (p.getComponent(cc.UIOpacity)?.opacity ?? 255) / 255; return opacity > 240; };
    const n = x.nodes().find(n => n.activeInHierarchy && (!parent || n.parent?.name === parent) &&
      (!item || n.name === item) && n.worldPosition.y > 0 && n.worldPosition.x > 0 && n.worldPosition.x < 720 &&
      visible(n) && n.getComponent(cc.Button)?.interactable && n.getComponent(cc.Button)?.clickEvents.some(e => e.handler === handler));
    return n ? { name: n.name, x: n.worldPosition.x, y: n.worldPosition.y, sx: n.worldScale.x, sy: n.worldScale.y } : null;
  }, { handler, parent, item });
  let previous;
  const p = await until(async () => {
    const current = await locate(), last = previous; previous = current;
    return current && last && Math.hypot(current.x - last.x, current.y - last.y) < .5 &&
      Math.abs(current.sx - last.sx) < .001 && Math.abs(current.sy - last.sy) < .001 ? current : null;
  }, 'stable visible button ' + handler);
  const q = await css(p); await page.mouse.click(q.x, q.y); await delay(700);
  report.steps.push({ input: 'click', handler, node: p.name, point: q }); return p;
}
async function drag(target, duration = 0) {
  const s = await inspect();
  const pen = await css(s.pen), aim = await css(target), start = { x: 225, y: 400 };
  const end = { x: start.x + aim.x - pen.x, y: start.y + aim.y - pen.y };
  await page.mouse.move(start.x, start.y); await page.mouse.down();
  await page.mouse.move(end.x, end.y, { steps: 15 });
  for (let i = 0; i < Math.ceil(duration / 100); i++) {
    await page.mouse.move(end.x + (i % 2 ? 2 : -2), end.y + (i % 3 ? 1 : -1)); await delay(100);
    if ((await inspect()).step !== s.step) break;
  }
  await page.mouse.up(); await delay(550);
}
async function mask(s, t) {
  const points = await page.evaluate(name => {
    const x = __makeupLocal, cc = x.engine, c = x.nodes().find(n => n.name === name && n.activeInHierarchy).getComponent('faceDrawMask');
    return [...c._segmentMap].map(([, r]) => {
      const p = c._uiTransform.convertToWorldSpaceAR(cc.v3(r.x + r.width / 2, r.y + r.height / 2, 0));
      return { x: p.x, y: p.y };
    });
  }, t.name);
  for (const p of points) { await drag(p); if ((await inspect()).step !== s.step) break; }
}
async function gesture(s, t) {
  const p = await css(t.pos);
  if (s.pen) { await drag(t.pos, t.gesture >= 11 ? 11000 : 700); return; }
  await page.mouse.move(p.x, p.y); await page.mouse.down();
  if (t.gesture === 0) { await page.mouse.up(); await delay(1000); return; }
  const dirs = { 1: [-35, 0], 2: [35, 0], 3: [0, -35], 4: [0, 35] };
  if (dirs[t.gesture]) {
    const d = dirs[t.gesture]; await page.mouse.move(p.x + d[0], p.y + d[1], { steps: 15 });
  } else {
    for (let i = 0; i < 150; i++) {
      await page.mouse.move(p.x + (i % 2 ? 5 : -5), p.y + (i % 3 ? 3 : -3)); await delay(100);
      if ((await inspect()).step !== s.step) break;
    }
  }
  await page.mouse.up(); await delay(700);
}
async function advance() {
  const s = await inspect(), t = s.triggers.find(t => !t.done);
  if (s.step === 'tanzhuangshilan') await clickHandler('click_wupin');
  else if (/^tanpingfenlan/.test(s.step)) await clickHandler('click_pingfenNext');
  else if (s.youActive) { const p = await css(s.you); await page.mouse.click(p.x, p.y); await delay(900); }
  else if (t?.type === 'faceDrawMask') await mask(s, t);
  else if (t?.type === 'faceGestureTrigger') await gesture(s, t);
  else if (t && s.pen) await drag(t.pos, t.type === 'faceTimeTrigger' ? t.time * 1000 + 500 : 700);
  else await delay(1300);
  const a = await inspect();
  const row = { before: s.step, after: a.step, tool: s.tool, target: t?.name };
  report.steps.push(row); console.log(JSON.stringify(row)); await save(); return a;
}
async function storage() {
  return page.evaluate(() => Object.fromEntries(Array.from({ length: __testNativeStorage.length }, (_, i) => {
    const k = __testNativeStorage.key(i); return [k, __testNativeStorage.getItem(k)];
  })));
}
try {
  await page.goto(gameURL);
  await page.waitForFunction(() => window.__makeupLocal?.state.ready, null, { timeout: 90000 });
  await shot('01-menu');
  const initial = await storage();
  report.checks.initial_storage = initial;
  await clickHandler('click_kaishi');
  await clickHandler('click_item', 'content', '01');
  await clickHandler('click_queding');
  // 对话原包有定时输入，等待真实开始按钮可操作。
  await delay(6500);
  await clickHandler('click_xiayiwei');
  await until(async () => (await inspect()).uis.includes('uiHuaZhuang'), 'care UI');
  await shot('02-care');
  // 护理中打开暂停窗，点继续，再切换声音，验证未跳出流程。
  await clickHandler('click_zhuye');
  await shot('03-pause');
  await clickHandler('click_quxiao');
  await clickHandler('click_shengyin');
  report.checks.sound_after_toggle = await storage();
  assert.equal(JSON.parse(report.checks.sound_after_toggle['makeup-relaxation-4399-v1:_mainData_']).soundMusic, false);
  assert.equal(JSON.parse(report.checks.sound_after_toggle['makeup-relaxation-4399-v1:_mainData_']).soundEffect, false);
  assert.deepEqual(JSON.parse(report.checks.sound_after_toggle['makeup-relaxation-4399-v1:__FaceGame__']).unlock, ['01']);
  report.checks.pause_resume = (await inspect()).uis.includes('uiHuaZhuang');
  let repeats = 0, previous = '';
  for (let i = 0; i < 300; i++) {
    const s = await inspect();
    if (s.uis.includes('uiJieSuan')) break;
    repeats = s.step === previous ? repeats + 1 : 0; previous = s.step;
    if (repeats > 12) throw Error('No progress at ' + JSON.stringify(s));
    await advance();
    if (i % 10 === 0) await shot('current-step');
  }
  assert((await inspect()).uis.includes('uiJieSuan'), 'full person must reach settlement');
  report.checks.complete_person = true;
  await shot('04-complete-person');
  report.checks.after_person_storage = await storage();
  await clickHandler('click_chahao');
  await clickHandler('click_xiangce');
  await shot('05-album');
  await clickHandler('click_item');
  await shot('06-photo');
  report.checks.album_photo = (await inspect()).uis.includes('uiZhaoPian');
  await clickHandler('click_close', null, 'X');
  await clickHandler('click_close', null, 'fanhui');
  await clickHandler('click_DIY');
  await until(async () => (await inspect()).uis.includes('uiHuaZhuang'), 'DIY UI');
  await delay(2100); // 原包DIY面板入场动画。
  await clickHandler('click_DIY_wupin');
  // 默认眉毛仍需真实涂抹，完成再拍照。
  for (let i = 0; i < 12; i++) {
    const s = await inspect(); if (!s.pending_steps && !s.pen && !s.triggers.length) break; await advance();
  }
  await clickHandler('click_paizhao');
  await shot('07-diy-settlement');
  report.checks.diy = (await inspect()).uis.includes('uiJieSuan');
  report.checks.before_reload = await storage();
  await page.reload();
  await page.waitForFunction(() => window.__makeupLocal?.state.ready, null, { timeout: 90000 });
  report.checks.after_reload = await storage();
  for (const key of ['_mainData_', '__FaceGame__']) assert.equal(
    report.checks.after_reload['makeup-relaxation-4399-v1:' + key],
    report.checks.before_reload['makeup-relaxation-4399-v1:' + key], 'stored settings/photos persist: ' + key);
  await clickHandler('click_xiangce');
  await shot('08-album-after-reload');
  const photos = await page.evaluate(() => __makeupLocal.nodes().find(n => n.name === 'uiXiangCe' && n.activeInHierarchy)
    .getChildByPath('kuang/ScrollView/view/content').children.filter(n => n.active).map(n => n.name));
  assert(photos.length >= 2, 'normal and DIY photos persist in album'); report.checks.persisted_photos = photos;
  const native = await storage();
  assert.equal(native['other-game:verification'], 'keep');
  assert(Object.keys(native).every(k => k === 'other-game:verification' || k.startsWith('makeup-relaxation-4399-v1:')), 'storage prefix');
  // 此清理是专门的Storage API隔离测试，位于玩法验收结束后。
  await page.evaluate(() => localStorage.clear());
  const cleared = await storage(); assert.deepEqual(cleared, { 'other-game:verification': 'keep' });
  report.checks.storage_isolation = true;
  for (const key of ['page_errors', 'console_errors', 'failed_responses', 'failed_requests', 'external_requests']) assert.deepEqual(report[key], [], key);
  report.result = 'passed';
} catch (e) {
  report.result = 'failed'; report.error = e.stack; await shot('failure').catch(() => {}); console.error(e.stack); process.exitCode = 1;
} finally { report.finished = new Date().toISOString(); await save(); await browser.close(); }
