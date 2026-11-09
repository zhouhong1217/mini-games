// Replay a recorded native life, then use real archive controls. No synthetic lives.
import assert from 'node:assert/strict';
import { readFile, writeFile, mkdir, access } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { fileURLToPath, pathToFileURL } from 'node:url';
import path from 'node:path';

const root = fileURLToPath(new URL('../', import.meta.url));
const home = new URL(process.env.PAGES_URL || 'http://127.0.0.1:8766/mini-games/');
if (!home.pathname.endsWith('/')) home.pathname += '/';
home.search = home.hash = '';
const game = new URL('games/1in8b/', home);
const local = ['localhost', '127.0.0.1', '[::1]'].includes(home.hostname);
const out = path.join(root, '.verification', local ? '1in8b-archive-local' : '1in8b-archive-live');
if (local) await access(path.join(root, '.verification/1in8b-ready'));
await mkdir(out, { recursive: true });
const fixturePath = path.join(root, '.verification/1in8b-original/life.json');
const storagePath = path.join(root, '.verification/1in8b-original/localStorage.json');
const [fixtureBytes, storageBytes] = await Promise.all([readFile(fixturePath), readFile(storagePath)]);
const life = JSON.parse(fixtureBytes), storage = JSON.parse(storageBytes);
assert.equal(life.phase, 'dead'); assert.ok(life.endD.frames.length > 0 && life.lifeAt);
const report = { result: 'running', home: home.href, checks: {},
  fixture: { path: fixturePath, sha256: createHash('sha256').update(fixtureBytes).digest('hex'),
    storage_path: storagePath, storage_sha256: createHash('sha256').update(storageBytes).digest('hex'),
    name: life.name.full, age: life.age, lifeAt: life.lifeAt, source: 'Unmodified-release native simulation, verified by verify-original.mjs.' },
  room_observations: [], page_errors: [], console_errors: [], failed_responses: [], external_requests: [], forbidden_requests: [], request_failures: [] };
const { chromium } = await import(pathToFileURL(process.env.PLAYWRIGHT_MODULE || '/Users/a/.npm/_npx/af752b90495482d7/node_modules/playwright-core/index.mjs'));
const browser = await chromium.launch({ headless: true,
  executablePath: process.env.CHROME_PATH || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome' });
const contexts = []; let stage = 'setup'; let page;
async function newContext(locale = 'zh-CN') {
  const ctx = await browser.newContext({ locale, viewport: { width: 1360, height: 1000 }, reducedMotion: 'reduce' });
  contexts.push(ctx);
  await ctx.route('**/*', route => {
    const url = new URL(route.request().url());
    if (url.protocol === 'local:' || /(?:^|\/)api(?:\/|$)/.test(url.pathname)) {
      report.forbidden_requests.push({ stage, url: url.href }); return route.abort();
    }
    if (/^https?:$/.test(url.protocol) && url.origin !== home.origin) {
      report.external_requests.push({ stage, url: url.href }); return route.abort();
    }
    return route.continue();
  });
  ctx.on('page', p => {
    p.on('pageerror', error => report.page_errors.push({ stage, url: p.url(), error: error.stack || error.message }));
    p.on('console', message => { if (message.type() === 'error') report.console_errors.push({ stage, text: message.text() }); });
    p.on('response', response => { if (response.status() >= 400) report.failed_responses.push({ stage, url: response.url(), status: response.status() }); });
    p.on('requestfailed', request => report.request_failures.push({ stage, url: request.url(), error: request.failure()?.errorText }));
  });
  return ctx;
}
const shot = (name, target = page) => target.screenshot({ path: path.join(out, name + '.png'), fullPage: true });
async function step(name, action) {
  stage = name;
  try { report.checks[name] = { result: 'passed', ...await action() }; console.log('PASS ' + name); }
  catch (error) { report.checks[name] = { result: 'failed', error: error.stack || String(error) }; throw error; }
  finally { await writeFile(path.join(out, 'report.json'), JSON.stringify(report, null, 2)); }
}
async function closeSheet(target = page) {
  if (await target.locator('#sheet').isVisible()) await target.locator('#sheetClose').click();
}
async function dashboard(target = page) {
  if (await target.locator('#kdRoot').isVisible()) return;
  await closeSheet(target);
  if (await target.locator('#kdRoot').isVisible()) return;
  if (await target.locator('#memoClose').isVisible()) await target.locator('#memoClose').click();
  if (!(await target.locator('#kdBtn').isVisible()) && await target.locator('#homeBtnTop').isVisible()) await target.locator('#homeBtnTop').click();
  await target.locator('#kdBtn').click();
  await target.locator('#kdRoot').waitFor({ state: 'visible' });
}
async function noPayment(target, container) {
  const controls = await target.locator(container).locator('a,button,input').evaluateAll(nodes => nodes.map(node => ({
    text: (node.textContent || node.value || '').trim(), id: node.id, href: node.getAttribute('href'),
  })));
  const forbidden = /\b(?:buy|purchase|checkout|refund|activate|activation)\b|购买|退款|激活|الشراء|استرداد|تفعيل/iu;
  assert.ok(!controls.some(control => forbidden.test(control.text)), 'Unexpected payment control: ' + JSON.stringify(controls));
  assert.ok(!controls.some(control => /stripe|checkout|paypal|refund|activate/i.test(control.href || '')));
  assert.equal(await target.locator(container).locator('#keepBuy,#kuGo,#keepUnlock,#keepRefund,[data-kd="pass"],[data-kd="have"]').count(), 0);
  return controls;
}

try {
  for (const locale of ['en', 'ar']) {
    await step('dashboard_' + locale, async () => {
      const ctx = await newContext(locale); const p = await ctx.newPage();
      try {
        await p.goto(new URL(locale + '/', game).href, { waitUntil: 'networkidle' });
        await dashboard(p);
        const controls = await noPayment(p, '#kdRoot');
        assert.equal(await p.locator('#kdRoot [data-kd]').count(), 11);
        if (locale === 'ar') assert.equal(await p.evaluate(() => document.documentElement.dir), 'rtl');
        await shot('dashboard-' + locale, p);
        await p.locator('[data-kd="pack"]').click();
        await p.locator('.pk-card').first().waitFor();
        const packs = await p.evaluate(() => PACKS.map(key => ({ key, available: packHas(key) })));
        assert.equal(await p.locator('.pk-card').count(), packs.length);
        assert.ok(packs.every(pack => pack.available));
        await noPayment(p, '#sheet'); await shot('packs-' + locale, p);
        return { controls, packs };
      } finally { await ctx.close(); }
    });
  }

  const context = await newContext(); page = await context.newPage();
  const url = new URL('zh-hans/', game).href;
  await step('recorded_life_replay', async () => {
    await page.goto(url, { waitUntil: 'networkidle' });
    await page.evaluate(async ({ life, storage }) => {
      await lateLoad();
      for (const [key, value] of Object.entries(storage)) One8bLocal.storage.setItem(key, value);
      restore(life);
      await window.One8bPastWrites;
    }, { life, storage });
    await page.locator('#keepPanel').waitFor({ state: 'visible' });
    assert.deepEqual(await page.evaluate(() => ({ name: S.name.full, age: S.age, phase: S.phase, born: S.born, lifeAt: S.lifeAt })),
      { name: life.name.full, age: life.age, phase: life.phase, born: life.born, lifeAt: life.lifeAt });
    await shot('01-replayed-life');
    return { replayed_original_record: true, fabricated_life: false };
  });

  let memorial;
  async function observeRoom(label) {
    const observation = await page.evaluate(async ({ id, label }) => {
      await window.One8bArchiveWrites;
      const record = await One8bLocal.get('memorial', id);
      return JSON.parse(JSON.stringify({ label, id, stored_rm: record?.rm,
        editor_rm: typeof HM !== 'undefined' ? HM.ed?.rm : null,
        life_mem_id: typeof S !== 'undefined' ? S?.memId : null,
        life_rm: typeof S !== 'undefined' ? S?.memRm : null }));
    }, { id: memorial, label });
    report.room_observations.push(observation);
    return observation;
  }
  await step('memorial_create_and_list', async () => {
    await page.locator('#keepMem').click();
    await page.locator('#kmUp').click();
    await page.waitForFunction(() => !!S.memId);
    memorial = await page.evaluate(() => S.memId);
    const record = await page.evaluate(id => One8bLocal.get('memorial', id), memorial);
    assert.equal(record.d.name, life.name.full); assert.equal(record.d.age, life.age);
    await page.goto(url, { waitUntil: 'networkidle' });
    await dashboard(); await page.locator('[data-kd="memo"]').click();
    await page.locator(`#memoMineItems [data-memo="${memorial}"]`).first().waitFor({ state: 'visible' });
    await shot('02-local-memorial-list');
    await page.locator(`#memoMineItems [data-memo="${memorial}"]`).first().click();
    await page.locator('#memo .hp-id').waitFor({ state: 'visible' });
    await shot('03-local-memorial');
    return { id: memorial, name: record.d.name, age: record.d.age, listed: true };
  });

  await step('room_pack_edit_persistence', async () => {
    await observeRoom('before_edit');
    await page.locator('#memoEdit').click();
    await page.locator('#cuRoot').waitFor({ state: 'visible' });
    await page.locator('#cuTab-rm').click();
    await page.locator('#cuRoot [data-tab="wp"]').click();
    const wallpaper = page.locator('#cuRoot [data-it="wp_yelights"]');
    assert.equal(await wallpaper.isEnabled(), true);
    await wallpaper.click();
    await observeRoom('selection_before_save');
    await page.locator('#cuGo').click();
    await page.locator('#cuRoot').waitFor({ state: 'hidden' });
    await page.evaluate(() => window.One8bArchiveWrites);
    await page.waitForFunction(async id => (await One8bLocal.get('memorial', id))?.rm?.wp === 'wp_yelights', memorial);
    const stored = await page.evaluate(id => One8bLocal.get('memorial', id), memorial);
    assert.equal(stored.rm.wp, 'wp_yelights');
    await observeRoom('save_completed');
    assert.equal(await page.evaluate(() => HOME_ITEMS.wp_yelights[3]), 'ye');
    await page.goto(url + '#memorial=' + memorial, { waitUntil: 'networkidle' });
    await page.locator('#memoEdit').click(); await page.locator('#cuTab-rm').click();
    await page.locator('#cuRoot [data-tab="wp"]').click();
    assert.equal(await page.locator('#cuRoot [data-it="wp_yelights"]').getAttribute('aria-pressed'), 'true');
    assert.equal((await page.evaluate(id => One8bLocal.get('memorial', id), memorial)).rm.wp, stored.rm.wp);
    await observeRoom('after_refresh');
    await shot('04-pack-room-after-refresh');
    await closeSheet();
    return { wallpaper: stored.rm.wp, decoration_pack: 'ye', persisted_after_refresh: true };
  });

  const homeName = 'James 的前世之家 · 本地';
  await step('home_name_persistence', async () => {
    await dashboard(); await page.locator('[data-kd="home"]').click();
    await page.locator('#hmName').fill(homeName); await page.locator('#hmSave').click();
    await page.waitForFunction(async name => (await One8bLocal.get('home', 'local'))?.nm === name, homeName);
    assert.ok(await page.locator(`#hmRooms [data-memo="${memorial}"]`).count());
    await page.reload({ waitUntil: 'networkidle' });
    await dashboard(); await page.locator('[data-kd="home"]').click();
    assert.equal(await page.locator('#hmName').inputValue(), homeName);
    await shot('05-home-name-after-refresh');
    return { name: homeName, persisted_after_refresh: true };
  });

  const villageName = 'James 的小村';
  let village;
  await step('village_edit_persistence', async () => {
    await dashboard(); await page.locator('[data-kd="vlg"]').click();
    await page.locator('#vlgSet').click();
    for (const key of ['ss', 'hs', 'wd', 'ye']) assert.equal(await page.locator(`[data-vlgtool="${key}"]`).count(), 1);
    await page.locator('[data-vlgdeco="flower"]').click();
    const cell = await page.evaluate(() => {
      for (let row = 1; row < VLG.R - 1; row++) for (let col = 1; col < VLG.C - 1; col++) {
        if (vlgDecoFit(VL, col, row, null, vlgDecoW('flower'))) {
          return { col, row, x: col * 16 + 8, y: row * 16 + 8, width: VL.cv.width, height: VL.cv.height };
        }
      }
      return null;
    });
    assert.ok(cell, 'Read-only map inspection must find an available flower position');
    const canvas = page.locator('#vlgBox .vlg-cv'); await canvas.scrollIntoViewIfNeeded();
    const box = await canvas.boundingBox();
    await page.mouse.click(box.x + cell.x * box.width / cell.width, box.y + cell.y * box.height / cell.height);
    await page.waitForFunction(({ col, row }) => VL.lay.d.some(item => item[0] === 'flower' && item[1] === col && item[2] === row), cell);
    await page.locator('[data-vlgtool="set"]').click();
    await page.locator('#vlgNmIn').fill(villageName); await page.locator('#vlgNmOk').click();
    await page.locator('#vlgEdDone').click();
    village = await page.evaluate(() => ({ mode: VL.mode, key: vlgLayK(VL.mode), layout: JSON.parse(JSON.stringify(VL.lay)), stored: lsGet(VLG_LAY_KEY, {}) }));
    assert.equal(village.layout.n, villageName);
    assert.deepEqual(village.stored[village.key].d, village.layout.d);
    await page.reload({ waitUntil: 'networkidle' });
    await dashboard(); await page.locator('[data-kd="vlg"]').click();
    assert.deepEqual(await page.evaluate(() => ({ n: VL.lay.n, d: VL.lay.d })), { n: villageName, d: village.layout.d });
    await shot('06-village-after-refresh');
    return { name: villageName, mode: village.mode, decoration: village.layout.d, persisted_after_refresh: true,
      method: 'Read-only map hit testing locates free grass; a real canvas click places the flower.' };
  });

  await step('shelf_and_wish_entries', async () => {
    await dashboard(); await page.locator('[data-kd="shelf"]').click();
    await page.locator('#shfW').waitFor({ state: 'visible' });
    const shelfCount = await page.locator('#shfW [data-shelf]').count(); assert.ok(shelfCount >= 1);
    assert.ok((await page.locator('#shfW').textContent()).includes(life.name.full));
    await shot('07-shelf');
    await dashboard(); await page.locator('[data-kd="wish"]').click();
    await page.locator('#wshW').waitFor({ state: 'visible' });
    await page.waitForFunction(() => !WS.busy);
    const wish = await page.evaluate(() => ({ records: WS.recs.length, required: WISH_NEED, text: document.querySelector('#wshW').textContent }));
    assert.ok(wish.text.trim());
    if (wish.records < wish.required) assert.equal(await page.locator('#wshGo').count(), 0);
    await shot('08-wish-entry');
    return { shelf_count: shelfCount, wish_records: wish.records, wish_required: wish.required,
      wish_entry_opened: true, full_wish_flow: wish.records < wish.required ? 'Not exercised: original feature requires at least three complete adult lives; no extra lives were fabricated.' : 'Not exercised in this entry check.' };
  });

  await step('memorial_delete_and_clear_list', async () => {
    await dashboard(); await page.locator('[data-kd="shelf"]').click();
    await page.locator(`#shfW [data-shelf="${life.lifeAt}"]`).click();
    await page.locator(`#shfCard [data-shpast="${life.lifeAt}"]`).click();
    await page.locator('#keepPanel').waitFor({ state: 'visible' });
    assert.equal(await page.evaluate(() => S.memId), memorial);
    await page.locator('#keepMem').click();
    await page.locator('#keepRemove').click();
    await page.waitForFunction(async id => !(await One8bLocal.get('memorial', id)), memorial);
    await page.goto(url, { waitUntil: 'networkidle' });
    await dashboard(); await page.locator('[data-kd="memo"]').click();
    await page.locator('#memoMineItems').waitFor({ state: 'visible' });
    await page.waitForFunction(() => document.querySelector('#memoMineItems').textContent.trim().length > 0);
    assert.equal(await page.locator('#memoMineItems [data-memo]').count(), 0);
    const remaining = await page.evaluate(() => One8bLocal.list('memorial')); assert.deepEqual(remaining, []);
    assert.equal(await page.evaluate(() => One8bLocal.get('home', 'local').then(home => home.nm)), homeName);
    await shot('09-empty-local-memorial-list');
    return { deleted_id: memorial, remaining_memorials: 0, house_name_retained: true };
  });

  for (const key of ['page_errors', 'console_errors', 'failed_responses', 'external_requests', 'forbidden_requests']) assert.deepEqual(report[key], [], key + ' must be empty');
  assert.deepEqual(report.request_failures, [], 'All archive resources must load');
  report.result = 'passed';
} catch (error) {
  report.result = 'failed'; report.failure = error.stack || String(error); process.exitCode = 1;
  console.error(error); if (page) await shot('failure').catch(() => {});
} finally {
  await writeFile(path.join(out, 'report.json'), JSON.stringify(report, null, 2));
  console.log(JSON.stringify({ result: report.result, checks: Object.keys(report.checks), failure: report.failure, report: path.join(out, 'report.json') }));
  await Promise.race([browser.close(), new Promise(resolve => setTimeout(resolve, 5000))]);
  process.exit(process.exitCode || 0);
}
