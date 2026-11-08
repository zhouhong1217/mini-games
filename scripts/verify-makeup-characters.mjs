// 逐人物真实点击、滚动和拖动；Cocos 探针只读取节点、素材及当前状态。
import assert from 'node:assert/strict';
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const gameURL = process.env.GAME_URL || 'http://127.0.0.1:8767/games/makeup-relaxation/game/';
const origin = new URL(gameURL).origin;
const output = process.env.MAKEUP_OUTPUT ? path.resolve(root, process.env.MAKEUP_OUTPUT)
  : path.join(root, '.verification', process.env.CHARACTER_IDS ? 'makeup-characters-selected' : 'makeup-characters');
const ids = process.env.CHARACTER_IDS ? process.env.CHARACTER_IDS.split(',')
  : Array.from({ length: 15 }, (_, i) => String(i + 1).padStart(2, '0'));
assert.ok(ids.length && new Set(ids).size === ids.length && ids.every(id => /^(0[1-9]|1[0-5])$/.test(id)));
if (!process.env.PLAYWRIGHT_MODULE) throw new Error('Set PLAYWRIGHT_MODULE to playwright-core/index.mjs');
const { chromium } = await import(pathToFileURL(process.env.PLAYWRIGHT_MODULE));
await mkdir(output, { recursive: true });
const browser = await chromium.launch({ headless: true,
  executablePath: process.env.CHROME_PATH || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome' });
const report = { result: 'running', game_url: gameURL, started_at: new Date().toISOString(),
  scope: 'Each selected character: menu, selection, chat, loaded care screen, one real tool interaction and unlocked-character persistence after real reload; no full completion claim',
  expected_characters: ids, characters: [], requests: 0, page_errors: [], console_errors: [],
  failed_responses: [], failed_requests: [], external_requests: [], websocket_requests: [] };

function readGame() {
  const api = window.__makeupLocal;
  if (!api) return null;
  const cc = api.engine;
  const list = api.nodes();
  const canvas = document.querySelector('canvas');
  if (!canvas) return null;
  const box = canvas.getBoundingClientRect();
  const pathOf = node => node.parent ? pathOf(node.parent) + '/' + node.name : node.name;
  const cameras = list.flatMap(node => node.getComponents(cc.Camera)).filter(camera => camera.enabledInHierarchy);
  const cameraFor = node => cameras.find(camera => (camera.visibility & node.layer) !== 0);
  const screen = (node, point) => {
    const camera = cameraFor(node);
    if (!camera) return null;
    const p = camera.worldToScreen(point);
    return { x: box.left + p.x / canvas.width * box.width, y: box.top + (1 - p.y / canvas.height) * box.height };
  };
  const rectOf = node => {
    const ui = node.getComponent(cc.UITransform);
    if (!ui || !cameraFor(node)) return null;
    const points = [[0, 0], [1, 0], [0, 1], [1, 1]].map(([x, y]) => screen(node,
      ui.convertToWorldSpaceAR(new cc.Vec3((x - ui.anchorX) * ui.width, (y - ui.anchorY) * ui.height, 0))));
    const x = Math.min(...points.map(p => p.x)), y = Math.min(...points.map(p => p.y));
    return { x, y, width: Math.max(...points.map(p => p.x)) - x, height: Math.max(...points.map(p => p.y)) - y };
  };
  const opacityOf = node => {
    let opacity = 255;
    for (let current = node; current; current = current.parent) opacity *= (current.getComponent(cc.UIOpacity)?.opacity ?? 255) / 255;
    return opacity;
  };
  const details = node => {
    const rect = rectOf(node);
    const sprite = node.getComponent(cc.Sprite)?.spriteFrame;
    const skeleton = node.getComponent(cc.sp.Skeleton);
    const button = node.getComponent(cc.Button);
    const custom = node.components.filter(c => ['faceTimeTrigger', 'faceDragTrigger', 'faceGestureTrigger', 'faceDrawMask'].includes(cc.js.getClassName(c)))
      .map(c => ({ type: cc.js.getClassName(c), step_type: c.stepType, timer: c._triggerTimeTmp,
        timer_target: c.triggerTime, moved: c._drawMoveVaild, triggered: c._drawOverTmp,
        gesture_triggered: c._emitFlag, gesture_points: c.trackPoints?.length,
        drawn_segments: c._drawSegments?.size, draw_complete: c._drawOverFlag }));
    return { path: pathOf(node), name: node.name, rect,
      point: rect ? { x: rect.x + rect.width / 2, y: rect.y + rect.height / 2 } : screen(node, node.worldPosition),
      origin: screen(node, node.worldPosition), position: { x: node.position.x, y: node.position.y },
      opacity: opacityOf(node), label: node.getComponent(cc.Label)?.string,
      buttons: button?.clickEvents.map(event => ({ handler: event.handler, data: event.customEventData })),
      sprite: sprite ? { name: sprite.name, uuid: sprite.uuid, valid: sprite.isValid,
        texture_width: sprite.texture?.width, texture_height: sprite.texture?.height } : null,
      skeleton: skeleton ? { name: skeleton.skeletonData?.name, uuid: skeleton.skeletonData?.uuid,
        valid: skeleton.skeletonData?.isValid, animation: skeleton.animation } : null,
      custom };
  };
  const active = list.filter(node => node.activeInHierarchy);
  const care = active.flatMap(node => node.components).find(c => cc.js.getClassName(c) === 'uiFaceHuaZhuang');
  const selection = active.flatMap(node => node.components).find(c => cc.js.getClassName(c) === 'uiFaceXuanRen');
  const faceEnum = window.System.get('chunks:///_virtual/FaceEnum.ts')?.default;
  const manager = window.System.get('chunks:///_virtual/FaceGameMgr.ts')?.default?.instance;
  return { state: api.state, canvas: { width: canvas.width, height: canvas.height },
    selected_avatar: selection?._selectItem?.name,
    avatar_id: manager?.avatarID, face_name: faceEnum?.pieceMap?.get('tou'), step: faceEnum?._subStep,
    reset_touch: faceEnum?.resetTouchFlag,
    tool: care?._daojuNode ? details(care._daojuNode) : null,
    tool_tip: care?._daojuNode?.getChildByName('pen') ? details(care._daojuNode.getChildByName('pen')) : null,
    touch_enabled: care?.touchNode?.activeInHierarchy,
    nodes: active.map(details) };
}

async function until(page, predicate, description, timeout = 45000) {
  const started = Date.now();
  while (Date.now() - started < timeout) {
    const state = await page.evaluate(readGame);
    if (state && predicate(state)) return state;
    await page.waitForTimeout(200);
  }
  throw new Error('Timed out waiting for ' + description);
}

async function clickButton(page, handler, evidence) {
  const state = await until(page, state => state.nodes.some(node => node.buttons?.some(b => b.handler === handler) && node.opacity > 240), handler);
  const node = state.nodes.find(node => node.buttons?.some(b => b.handler === handler) && node.opacity > 240);
  evidence.push({ action: 'mouse.click', handler, path: node.path, point: node.point });
  await page.mouse.click(node.point.x, node.point.y, { delay: 90 });
  await page.waitForTimeout(600);
}

async function chooseCharacter(page, id, evidence) {
  for (let attempts = 0; attempts < 10; attempts++) {
    const state = await until(page, state => state.nodes.some(n => n.path.endsWith('/uiXuanRen/kuang/ScrollView/view/content/' + id)), 'character list');
    const node = state.nodes.find(n => n.path.endsWith('/uiXuanRen/kuang/ScrollView/view/content/' + id));
    const view = state.nodes.find(n => n.path.endsWith('/uiXuanRen/kuang/ScrollView/view')).rect;
    if (node.point.y > view.y + 45 && node.point.y < view.y + view.height - 45) {
      evidence.push({ action: 'mouse.click', character: id, path: node.path, point: node.point });
      await page.mouse.click(node.point.x, node.point.y, { delay: 90 });
      await until(page, state => state.selected_avatar === id, 'selected character ' + id);
      await page.waitForTimeout(400);
      return;
    }
    const up = node.point.y >= view.y + view.height - 45;
    const distance = Math.min(140, Math.max(55, Math.abs(node.point.y - (view.y + view.height / 2))));
    const from = { x: view.x + view.width / 2, y: up ? view.y + view.height - 65 : view.y + 65 };
    const to = { x: from.x, y: from.y + (up ? -distance : distance) };
    evidence.push({ action: 'mouse.drag', purpose: 'scroll character list', from, to });
    await page.mouse.move(from.x, from.y); await page.mouse.down();
    for (let step = 1; step <= 20; step++) {
      await page.mouse.move(from.x, from.y + (to.y - from.y) * step / 20);
      await page.waitForTimeout(20);
    }
    // 释放前停顿并小幅移动，避免列表惯性直接跨过中间一行。
    await page.waitForTimeout(200);
    await page.mouse.move(to.x, to.y + (up ? -1 : 1));
    await page.mouse.up();
    await page.waitForTimeout(850);
  }
  throw new Error('Character ' + id + ' could not be scrolled into view');
}

function loadedSprite(state, suffix) {
  return state.nodes.find(node => node.path.endsWith(suffix) && node.sprite?.valid
    && node.sprite.texture_width > 0 && node.sprite.texture_height > 0);
}

function readStorage() {
  const storage = window.MakeupLocal.storage;
  const raw = Object.fromEntries(Array.from({ length: storage.length }, (_, index) => {
    const key = storage.key(index);
    return [key, storage.getItem(key)];
  }));
  return { raw, face: raw.__FaceGame__ ? JSON.parse(raw.__FaceGame__) : null };
}

try {
  for (const id of ids) {
    // 每位人物使用空存储上下文，确认无需依赖其他人物的解锁存档。
    const context = await browser.newContext({ viewport: { width: 720, height: 1280 }, locale: 'zh-CN', serviceWorkers: 'block' });
    const entry = { id, result: 'running', requests: 0, steps: [], screenshots: [], responses: [] };
    report.characters.push(entry);
    await context.route('**/*', route => {
      const url = route.request().url();
      if (/^https?:/.test(url) && new URL(url).origin !== origin) {
        report.external_requests.push({ character: id, url });
        return route.abort();
      }
      return route.continue();
    });
    await context.routeWebSocket(/.*/, socket => {
      const url = socket.url();
      const endpoint = new URL(url);
      endpoint.protocol = endpoint.protocol === 'wss:' ? 'https:' : 'http:';
      report.websocket_requests.push({ character: id, url });
      if (endpoint.origin !== origin) {
        report.external_requests.push({ character: id, url, type: 'websocket' });
        return socket.close();
      }
      socket.connectToServer();
    });
    const page = await context.newPage();
    page.on('request', request => { entry.requests++; report.requests++; });
    page.on('requestfailed', request => report.failed_requests.push({ character: id, url: request.url(), error: request.failure()?.errorText }));
    page.on('response', response => {
      const record = { url: response.url(), status: response.status() };
      entry.responses.push(record);
      if (response.status() >= 400) report.failed_responses.push({ character: id, ...record });
    });
    page.on('pageerror', error => report.page_errors.push({ character: id, message: error.stack }));
    page.on('console', message => {
      if (message.type() === 'error') report.console_errors.push({ character: id, message: message.text() });
    });
    const shot = async name => {
      const filename = `character-${id}-${name}.png`;
      await page.screenshot({ path: path.join(output, filename) });
      entry.screenshots.push(filename);
    };
    try {
      await page.goto(gameURL, { waitUntil: 'load' });
      await until(page, state => state.state.ready, 'initial menu', 90000);
      await clickButton(page, 'click_kaishi', entry.steps);
      await chooseCharacter(page, id, entry.steps);
      entry.storage_initial = await page.evaluate(readStorage);
      assert.deepEqual(entry.storage_initial.face.unlock, ['01'], 'Fresh context starts with only character 01 unlocked');
      await shot('selection');
      await clickButton(page, 'click_queding', entry.steps);
      const chat = await until(page, state => state.nodes.some(node => node.path.endsWith('/uiLiaoTian/top/wz')), 'chat');
      entry.chat_name = chat.nodes.find(node => node.path.endsWith('/uiLiaoTian/top/wz')).label;
      assert.equal(chat.avatar_id, Number(id));
      await shot('chat');
      await clickButton(page, 'click_xiayiwei', entry.steps);
      const before = await until(page, state => state.avatar_id === Number(id) && state.tool?.opacity > 240
        && state.touch_enabled
        && loadedSprite(state, '/mote/shenti') && loadedSprite(state, '/mote/tou'), 'care, character textures and tool', 90000);
      entry.face_name = before.face_name;
      entry.initial_step = before.step;
      entry.tool_name = before.tool.name;
      entry.key_assets = before.nodes.filter(node => /\/mote\/(?:shenti|tou|yanjing|toufa_zang_q)$/.test(node.path)
        || node.path.includes('/mote/yanbu/') || node.path.includes('/djGroup/' + before.tool.name + '/'));
      assert.ok(entry.face_name, 'Expected selected character face texture identity');
      assert.ok(before.nodes.some(node => node.path.startsWith(before.tool.path + '/') && node.skeleton?.valid), 'Expected loaded tool skeleton');
      await shot('care');

      // 从可见画布中拖动工具，不调用任何 Cocos 事件、回调、跳关或存档写入接口。
      const start = before.tool_tip?.origin || before.tool.point;
      const from = { x: Math.max(100, Math.min(620, start.x)), y: Math.max(250, Math.min(1050, start.y)) };
      const trigger = before.nodes.find(node => node.custom.some(component => component.step_type === before.step && component.type === 'faceDragTrigger'))
        || before.nodes.find(node => node.custom.some(component => component.step_type === before.step));
      assert.ok(trigger?.origin, 'Expected a visible trigger for the current care tool');
      const target = { x: Math.max(30, Math.min(690, from.x + trigger.origin.x - start.x)),
        y: Math.max(160, Math.min(1200, from.y + trigger.origin.y - start.y)) };
      entry.steps.push({ action: 'mouse.drag', purpose: 'interact with visible care tool', tool: before.tool.path, from, to: target });
      await page.mouse.move(from.x, from.y); await page.mouse.down();
      await page.mouse.move(target.x, target.y, { steps: 30 });
      await page.waitForTimeout(600);
      const during = await page.evaluate(readGame);
      await shot('tool-interaction');
      await page.mouse.up();
      await page.waitForTimeout(250);
      const after = await page.evaluate(readGame);
      const moved = during.tool?.path === before.tool.path && Math.hypot(during.tool.position.x - before.tool.position.x,
        during.tool.position.y - before.tool.position.y) > 15;
      const triggered = during.nodes.some(node => node.custom.some(component => component.step_type === before.step
        && (component.timer > 0 || component.triggered || component.gesture_triggered || component.gesture_points > 0 || component.drawn_segments > 0)));
      assert.equal(after.avatar_id, Number(id));
      assert.ok(triggered || (after.step && after.step !== before.step), 'Expected the pointer drag to trigger the current care operation');
      entry.interaction = { tool_moved: moved, matching_trigger_responded: triggered,
        step_before: before.step, step_after: after.step, position_before: before.tool.position, position_during: during.tool?.position };
      // 只读实际 Storage；等待自然动画及自动存档，不调用保存或解锁接口。
      await page.waitForTimeout(1200);
      await page.waitForLoadState('networkidle');
      entry.storage_before_reload = await page.evaluate(readStorage);
      assert.ok(entry.storage_before_reload.face.unlock.includes(id), 'Selected character is actually stored as unlocked');
      assert.ok(Array.isArray(entry.storage_before_reload.face.photo), 'Stored photo list remains an array');
      entry.steps.push({ action: 'page.reload', purpose: 'verify selected character unlock and photo storage persistence' });
      await page.reload({ waitUntil: 'load' });
      const menuAfterReload = await until(page, state => state.state.ready, 'menu after real reload', 90000);
      entry.storage_after_reload = await page.evaluate(readStorage);
      assert.ok(entry.storage_after_reload.face.unlock.includes(id), 'Selected character remains unlocked after reload');
      assert.deepEqual(entry.storage_after_reload.face, entry.storage_before_reload.face, 'Photo and unlock structure is unchanged after reload');
      assert.equal(entry.storage_after_reload.raw.__FaceGame__, entry.storage_before_reload.raw.__FaceGame__, 'Persisted face-game record is unchanged after reload');
      entry.unlock_persistence = { selected_id: id, newly_unlocked: !entry.storage_initial.face.unlock.includes(id),
        preserved: true, initial_unlock: entry.storage_initial.face.unlock,
        restored_unlock: entry.storage_after_reload.face.unlock, photos_preserved: true };
      await shot('menu-after-reload');
      await writeFile(path.join(output, `character-${id}-steps.json`), JSON.stringify({ id, steps: entry.steps,
        before, during, after, menu_after_reload: menuAfterReload,
        storage_initial: entry.storage_initial, storage_before_reload: entry.storage_before_reload,
        storage_after_reload: entry.storage_after_reload }, null, 2) + '\n');
      entry.result = 'passed';
      console.log(`Character ${id} (${entry.chat_name}) passed: ${entry.tool_name}, ${entry.requests} requests.`);
    } catch (error) {
      entry.result = 'failed'; entry.failure = error.stack;
      await shot('failure').catch(() => {});
      const state = await page.evaluate(readGame).catch(() => null);
      await writeFile(path.join(output, `character-${id}-failure.json`), JSON.stringify({ entry, state }, null, 2) + '\n');
      console.error(`Character ${id} failed: ${error.message}`);
    } finally {
      await context.close();
      await writeFile(path.join(output, 'report.json'), JSON.stringify(report, null, 2) + '\n');
    }
  }
  assert.ok(report.characters.every(character => character.result === 'passed'), 'Some characters failed');
  assert.deepEqual(report.page_errors, []);
  assert.deepEqual(report.console_errors, []);
  assert.deepEqual(report.failed_responses, []);
  assert.deepEqual(report.failed_requests, []);
  assert.deepEqual(report.external_requests, []);
  report.result = 'passed';
} catch (error) {
  report.result = 'failed'; report.failure = error.stack; process.exitCode = 1;
} finally {
  report.finished_at = new Date().toISOString();
  report.passed_characters = report.characters.filter(character => character.result === 'passed').map(character => character.id);
  await writeFile(path.join(output, 'report.json'), JSON.stringify(report, null, 2) + '\n');
  await browser.close();
  console.log(JSON.stringify({ result: report.result, game_url: gameURL, passed_characters: report.passed_characters,
    requests: report.requests, page_errors: report.page_errors.length, console_errors: report.console_errors.length,
    failed_responses: report.failed_responses.length, failed_requests: report.failed_requests.length,
    external_requests: report.external_requests.length, output, failure: report.failure }, null, 2));
}
