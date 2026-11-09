// Exercise the unmodified local release and retain a genuinely simulated life.
import assert from 'node:assert/strict';
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const project = fileURLToPath(new URL('../../', import.meta.url));
const output = path.join(project, '.verification/1in8b-original');
const url = process.env.ORIGINAL_URL || 'http://127.0.0.1:18789/zh-hans/';
const playwright = process.env.PLAYWRIGHT_MODULE || '/Users/a/.npm/_npx/af752b90495482d7/node_modules/playwright-core/index.mjs';
const { chromium } = await import(pathToFileURL(playwright));
await mkdir(output, { recursive: true });
const report = { url, release: '0.9.66', result: 'running', steps: [], javascript_errors: [], console_errors: [], static_404: [], blocked_external: [], unavailable_api: [], simulation_batches: [] };
const browser = await chromium.launch({ headless: true, executablePath: process.env.CHROME_PATH || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome' });
const context = await browser.newContext({ locale: 'zh-CN', viewport: { width: 1440, height: 1050 }, reducedMotion: 'reduce' });
const origin = new URL(url).origin;
await context.route('**/*', route => {
  const target = new URL(route.request().url());
  if (!/^https?:$/.test(target.protocol)) return route.continue();
  if (target.origin !== origin) {
    report.blocked_external.push(target.href);
    return route.abort();
  }
  if (target.pathname.startsWith('/api/')) {
    report.unavailable_api.push({ method: route.request().method(), path: target.pathname });
    return route.fulfill({ status: 503, contentType: 'application/json', body: '{"ok":false,"why":"net"}' });
  }
  return route.continue();
});
const page = await context.newPage();
page.on('pageerror', error => report.javascript_errors.push(error.stack || error.message));
page.on('console', message => { if (message.type() === 'error') report.console_errors.push(message.text()); });
page.on('response', response => {
  if (response.status() === 404 && !new URL(response.url()).pathname.startsWith('/api/')) report.static_404.push(response.url());
});
const screenshot = name => page.screenshot({ path: path.join(output, name + '.png'), fullPage: true });
const state = () => page.evaluate(() => ({ phase: S?.phase, age: S?.age, name: S?.name?.full, born: S?.born, speed: S?.speed, view: UI.view, pending: S?.pending?.id }));
const storage = () => page.evaluate(() => Object.fromEntries(Array.from({ length: localStorage.length }, (_, index) => { const key = localStorage.key(index); return [key, localStorage.getItem(key)]; })));
try {
  await page.goto(url, { waitUntil: 'networkidle' });
  assert.match(await page.evaluate(() => CONFIG.version), /^0\.9\.66 /);
  await screenshot('00-home');
  await page.locator('#startBtn').click();
  await page.locator('#beginBtn').waitFor({ state: 'visible', timeout: 60000 });
  const birth = await state();
  assert.equal(birth.phase, 'birth');
  report.steps.push({ step: 'birth_certificate', ...birth });
  await screenshot('01-birth-certificate');
  await page.locator('#beginBtn').click();
  await page.locator('[data-speed="16"]:visible').first().click();
  assert.equal((await state()).speed, 16);
  await page.locator('#autoBtn').click();
  await page.waitForFunction(() => S && (S.age >= 1 || S.phase === 'dead'), { timeout: 30000 });
  await page.evaluate(() => save());
  const beforeRefresh = await state();
  report.steps.push({ step: 'real_time_16x_and_save', ...beforeRefresh });
  await screenshot('02-16x-before-refresh');
  await writeFile(path.join(output, 'storage-before-refresh.json'), JSON.stringify(await storage(), null, 2));
  await page.reload({ waitUntil: 'networkidle' });
  await page.locator('#resumeBtn').waitFor({ state: 'visible' });
  await page.locator('#resumeBtn').click();
  const restored = await state();
  assert.equal(restored.name, birth.name);
  assert.equal(restored.born, birth.born);
  assert.ok(restored.age >= beforeRefresh.age);
  report.steps.push({ step: 'refresh_and_continue', ...restored });
  await screenshot('03-restored-life');

  // These are the game's own option setters and simulation functions. We do
  // not modify age, mortality, events, health, ending state or generated data.
  await page.evaluate(() => { setAuto(true); setAutoHide(true); setReflect(false); setSpeed(16); });
  let attempts = 0;
  let complete;
  while (attempts < 4) {
    attempts++;
    let budget = 12000;
    while (budget > 0) {
      const batch = await page.evaluate(() => {
        let ticks = 0, choices = 0;
        const ages = [];
        for (let iteration = 0; iteration < 60 && S?.phase === 'life'; iteration++) {
          auSync(); ageSync();
          if (S.pending) {
            const pending = S.pending;
            const selected = autoChoice(pending);
            const available = pending.view.choices.filter(choice => !choice.disabled);
            const key = available.some(choice => choice.k === selected) ? selected : available[0]?.k;
            if (key == null) throw new Error('Decision has no available native option: ' + pending.id);
            pickChoice(key, true);
            choices++;
          } else {
            const age = S.age;
            tick(S.yearSec / S.speed);
            ticks++;
            if (S.age !== age) ages.push(S.age);
          }
        }
        return { phase: S.phase, age: S.age, pending: S.pending?.id, paused: S.paused, ticks, choices, ages, view: UI.view };
      });
      report.simulation_batches.push(batch);
      budget -= batch.ticks + batch.choices;
      console.log(JSON.stringify({ attempt: attempts, ...batch }));
      if (batch.phase === 'dead') break;
      if (batch.ticks + batch.choices === 0 || batch.paused) throw new Error('Native simulation stalled: ' + JSON.stringify(batch));
      await page.waitForTimeout(30);
    }
    complete = await state();
    assert.equal(complete.phase, 'dead', 'The native simulation must produce the ending');
    if (complete.age >= 18) break;
    report.steps.push({ step: 'naturally_completed_short_life', ...complete });
    await page.evaluate(() => startNewLife());
    await page.locator('#beginBtn').waitFor({ state: 'visible', timeout: 60000 });
    await page.locator('#beginBtn').click();
    await page.evaluate(() => { setAuto(true); setAutoHide(true); setReflect(false); setSpeed(16); });
  }
  assert.ok(complete.age >= 18, 'Need an adult life for meaningful original media fixtures');
  await page.evaluate(() => showDeath());
  await page.waitForFunction(() => S && S.deathAt && S.endD && S.endD.frames?.length > 0);
  await page.waitForTimeout(300);
  const fixture = await page.evaluate(() => JSON.parse(JSON.stringify(S)));
  const allStorage = await storage();
  await writeFile(path.join(output, 'life.json'), JSON.stringify(fixture, null, 2));
  await writeFile(path.join(output, 'localStorage.json'), JSON.stringify(allStorage, null, 2));
  await screenshot('04-complete-life');
  report.completed_life = { name: fixture.name.full, age: fixture.age, born: fixture.born, current: fixture.cur, death: fixture.deathAt, years: fixture.years.length, frames: fixture.endD.frames.length, decisions: fixture.stats.decisions, auto_decisions: fixture.stats.auto, fixture: path.join(output, 'life.json') };
  report.steps.push({ step: 'naturally_completed_full_life', ...complete });
  assert.equal(report.javascript_errors.length, 0, 'Unexpected original JavaScript errors');
  assert.equal(report.static_404.length, 0, 'Original static dependency is missing');
  report.result = 'passed';
  console.log(JSON.stringify({ result: report.result, completed_life: report.completed_life, errors: report.javascript_errors, static_404: report.static_404 }));
} catch (error) {
  report.result = 'failed';
  report.failure = error.stack || String(error);
  console.error(error);
  await screenshot('failure').catch(() => {});
  await writeFile(path.join(output, 'failure-state.json'), JSON.stringify(await state().catch(() => null), null, 2));
  process.exitCode = 1;
} finally {
  await writeFile(path.join(output, 'report.json'), JSON.stringify(report, null, 2));
  await browser.close();
}
