// Exercise real UI and observe state; never fabricate a life or write game progress.
import assert from 'node:assert/strict';
import { access, mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const project = fileURLToPath(new URL('../', import.meta.url));
const home = new URL(process.env.PAGES_URL || 'http://127.0.0.1:8766/mini-games/');
home.search = home.hash = '';
if (!home.pathname.endsWith('/')) home.pathname += '/';
const game = new URL('games/1in8b/', home);
const local = ['localhost', '127.0.0.1', '[::1]'].includes(home.hostname);
const output = path.join(project, '.verification', local ? '1in8b-basic-local' : '1in8b-basic-live');
const locales = ['en', 'ko', 'ja', 'zh', 'zh-hans', 'vi', 'fr', 'th', 'es', 'de', 'pt', 'ru', 'tr', 'id', 'it', 'ar', 'fa', 'uk', 'pl'];
const htmlLanguage = locale => locale === 'zh' ? 'zh-Hant' : locale === 'zh-hans' ? 'zh-Hans' : locale;
const { chromium } = await import(pathToFileURL(process.env.PLAYWRIGHT_MODULE || '/Users/a/.npm/_npx/af752b90495482d7/node_modules/playwright-core/index.mjs'));
await mkdir(output, { recursive: true });
if (local) {
  const deadline = Date.now() + Number(process.env.READY_TIMEOUT_MS || 180000);
  const marker = path.join(project, '.verification/1in8b-ready');
  let waiting = false;
  for (;;) {
    try { await access(marker); break; } catch {}
    if (!waiting) { console.log('Waiting for .verification/1in8b-ready before opening the build.'); waiting = true; }
    if (Date.now() > deadline) throw new Error('Build readiness marker not found: ' + marker);
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
}

const report = { result: 'running', home: home.href, game: game.href, release: '0.9.66',
  checks: {}, page_errors: [], console_errors: [], failed_responses: [], static_404: [],
  external_requests: [], forbidden_requests: [], request_failures: [], workers: [], requests: {} };
const browser = await chromium.launch({ headless: true,
  executablePath: process.env.CHROME_PATH || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome' });
let stage = 'setup';
const contexts = [];
async function context(locale = 'zh-CN', width = 1440) {
  const ctx = await browser.newContext({ locale, viewport: { width, height: 1000 }, reducedMotion: 'reduce' });
  contexts.push(ctx);
  await ctx.route('**/*', route => {
    const value = route.request().url();
    const url = new URL(value);
    if (url.protocol === 'local:' || /(?:^|\/)api(?:\/|$)/.test(url.pathname)) {
      report.forbidden_requests.push({ stage, url: value });
      return route.abort();
    }
    if (/^https?:$/.test(url.protocol) && url.origin !== home.origin) {
      report.external_requests.push({ stage, url: value });
      return route.abort();
    }
    return route.continue();
  });
  ctx.on('request', request => {
    const url = new URL(request.url());
    report.requests[url.pathname] = (report.requests[url.pathname] || 0) + 1;
    if (url.protocol === 'local:' && !report.forbidden_requests.some(item => item.url === url.href)) {
      report.forbidden_requests.push({ stage, url: url.href });
    }
  });
  ctx.on('page', page => {
    page.on('pageerror', error => report.page_errors.push({ stage, url: page.url(), error: error.stack || error.message }));
    page.on('console', message => { if (message.type() === 'error') report.console_errors.push({ stage, url: page.url(), text: message.text() }); });
    page.on('requestfailed', request => report.request_failures.push({ stage, url: request.url(), error: request.failure()?.errorText }));
    page.on('response', response => {
      if (response.status() >= 400) report.failed_responses.push({ stage, url: response.url(), status: response.status() });
      if (response.status() === 404) report.static_404.push({ stage, url: response.url() });
    });
    page.on('worker', worker => report.workers.push({ stage, url: worker.url() }));
  });
  return ctx;
}
const screenshot = (page, name, fullPage = false) => page.screenshot({ path: path.join(output, name + '.png'), fullPage });
async function check(name, run) {
  stage = name;
  try {
    report.checks[name] = { result: 'passed', ...await run() };
    console.log('PASS ' + name);
  } catch (error) {
    report.checks[name] = { result: 'failed', error: error.stack || String(error) };
    console.error('FAIL ' + name + ': ' + error.message);
  }
  await writeFile(path.join(output, 'report.json'), JSON.stringify(report, null, 2));
}
async function ready(page, locale, query = '') {
  const response = await page.goto(new URL(locale + '/' + query, game).href, { waitUntil: 'networkidle' });
  assert.equal(response.status(), 200);
  await page.locator('#startBtn').waitFor({ state: 'visible' });
  await page.waitForFunction(() => typeof CONFIG !== 'undefined' && typeof One8bLocal !== 'undefined');
  await page.evaluate(() => document.fonts.ready);
  assert.equal(await page.evaluate(() => document.documentElement.lang), htmlLanguage(locale));
  assert.match(await page.evaluate(() => CONFIG.version), /^0\.9\.66 local$/);
  assert.equal(await page.locator('#startBtn').isEnabled(), true);
  assert.ok((await page.locator('#startBtn').textContent()).trim());
}
const state = page => page.evaluate(() => ({ phase: S?.phase, age: S?.age, name: S?.name?.full,
  born: S?.born, by: S?.by, era: S?.era || 'now', bornT: S?.bornT, speed: S?.speed, paused: S?.paused, view: UI.view }));

try {
  const languageContext = await context('en');
  const languagePage = await languageContext.newPage();
  for (let index = 0; index < locales.length; index++) {
    const locale = locales[index];
    await check('language_' + locale, async () => {
      await ready(languagePage, locale, '?lang=en');
      const links = await languagePage.locator('#lswList a[data-lang]').evaluateAll(nodes => nodes.map(node => ({ locale: node.dataset.lang, href: node.href })));
      assert.deepEqual(links.map(link => link.locale).sort(), [...locales].sort());
      for (const link of links) assert.equal(new URL(link.href).pathname, new URL(link.locale + '/', game).pathname);
      const notes = await languagePage.evaluate(async url => {
        const response = await fetch(url);
        const value = await response.json();
        return { status: response.status, count: Array.isArray(value) ? value.length : null, version: value[0]?.v };
      }, new URL(locale + '/notes.json', game).href);
      assert.equal(notes.status, 200); assert.ok(notes.count > 0); assert.match(notes.version, /^0\.9\.66/);
      await languagePage.locator('#clBtn').click();
      await languagePage.locator('#clList > li').first().waitFor({ state: 'visible', timeout: 15000 });
      assert.ok((await languagePage.locator('#clList').textContent()).includes('0.9.66'));
      await languagePage.keyboard.press('Escape');
      await screenshot(languagePage, 'language-' + locale);
      const next = locales[(index + 1) % locales.length];
      if (await languagePage.locator('#lswBtn').isVisible()) await languagePage.locator('#lswBtn').click();
      await Promise.all([
        languagePage.waitForURL(url => url.pathname === new URL(next + '/', game).pathname),
        languagePage.locator(`#lswList a[data-lang="${next}"]`).click(),
      ]);
      await languagePage.waitForLoadState('networkidle');
      assert.equal(await languagePage.evaluate(() => document.documentElement.lang), htmlLanguage(next));
      assert.equal(new URL(languagePage.url()).searchParams.get('lang'), 'en');
      return { html_lang: htmlLanguage(locale), notes, switched_to: next, language_links: links.length };
    });
  }
  await languageContext.close();

  for (const locale of ['en', 'zh-hans', 'ar', 'fa']) {
    await check('mobile_' + locale, async () => {
      const ctx = await context('en', 390); const page = await ctx.newPage();
      try {
        await ready(page, locale, '?lang=en');
        const layout = await page.evaluate(() => ({ width: innerWidth, scroll: document.documentElement.scrollWidth,
          direction: getComputedStyle(document.documentElement).direction,
          root_dir: document.documentElement.getAttribute('dir'),
          overflow: [...document.querySelectorAll('body *')].filter(node => {
            const rect = node.getBoundingClientRect();
            return rect.width > 0 && (rect.right > innerWidth + 2 || rect.left < -2) && getComputedStyle(node).position !== 'fixed';
          }).slice(0, 12).map(node => ({ tag: node.tagName, id: node.id, class: String(node.className).slice(0, 100) })) }));
        await screenshot(page, 'mobile-' + locale, true);
        assert.ok(layout.scroll <= layout.width + 2, 'Horizontal page overflow: ' + JSON.stringify(layout));
        assert.equal(layout.direction, ['ar', 'fa'].includes(locale) ? 'rtl' : 'ltr');
        if (['ar', 'fa'].includes(locale)) assert.equal(layout.root_dir, 'rtl');
        await page.locator('#lswBtn').click();
        await page.locator('#lswList a[data-lang="ja"]').waitFor({ state: 'visible' });
        await screenshot(page, 'mobile-language-menu-' + locale);
        return layout;
      } finally { await ctx.close(); }
    });
  }

  await check('portal_round_trip', async () => {
    const ctx = await context('en'); const page = await ctx.newPage();
    try {
      await page.goto(home.href + '?lang=en', { waitUntil: 'networkidle' });
      const card = page.locator('.game-card').filter({ has: page.locator('#game-1in8b') });
      await card.waitFor({ state: 'visible' });
      assert.equal(await card.locator('h3').textContent(), '1 in 8 Billion');
      await card.locator('img').evaluate(image => image.decode());
      await card.click();
      await page.waitForURL(url => url.pathname === new URL('en/', game).pathname);
      await page.locator('#startBtn').waitFor({ state: 'visible' });
      assert.equal(new URL(page.url()).searchParams.get('lang'), 'en');
      if (await page.locator('#lswBtn').isVisible()) await page.locator('#lswBtn').click();
      await page.locator('#lswList a[data-lang="ar"]').click();
      await page.waitForLoadState('networkidle');
      assert.equal(await page.evaluate(() => document.documentElement.dir), 'rtl');
      const back = page.locator('#one8b-local-toolbar a');
      assert.equal(new URL(await back.getAttribute('href')).searchParams.get('lang'), 'en');
      await back.click();
      await page.waitForURL(url => url.pathname === home.pathname);
      assert.equal(new URL(page.url()).searchParams.get('lang'), 'en');
      assert.equal(await page.locator('[data-language-select]').inputValue(), 'en');
      await screenshot(page, 'portal-return-en');
      return { portal_language: 'en', game_language: 'ar', returned_language: 'en' };
    } finally { await ctx.close(); }
  });

  await check('era_selection', async () => {
    const ctx = await context(); const page = await ctx.newPage();
    try {
      await ready(page, 'zh-hans');
      await page.locator('[data-era="past"]').click();
      await page.locator('#eraYr').waitFor({ state: 'visible' });
      await page.waitForFunction(() => eraLoaded(), null, { timeout: 30000 });
      await page.locator('#eraYr').selectOption('1970');
      await page.locator('#startBtn').click();
      await page.locator('#beginBtn').waitFor({ state: 'visible', timeout: 60000 });
      const past = await state(page); assert.equal(past.era, 'past'); assert.equal(past.by, 1970);
      await screenshot(page, 'birth-past-1970');
      await ready(page, 'zh-hans');
      await page.locator('[data-era="future"]').click();
      await page.locator('#startBtn').click();
      await page.locator('#beginBtn').waitFor({ state: 'visible', timeout: 60000 });
      const future = await state(page); assert.equal(future.era, 'future'); assert.ok(future.by >= new Date().getFullYear());
      await screenshot(page, 'birth-future');
      return { past, future, era_script_requested: Object.keys(report.requests).some(name => name.endsWith('/era.js')) };
    } finally { await ctx.close(); }
  });

  await check('real_birth_16x_save_restore', async () => {
    const ctx = await context(); const page = await ctx.newPage(); const attempts = [];
    try {
      let birth;
      for (let attempt = 1; attempt <= 4; attempt++) {
        await ready(page, 'zh-hans');
        await page.locator('#startBtn').click();
        await page.locator('#beginBtn').waitFor({ state: 'visible', timeout: 60000 });
        birth = await state(page); assert.equal(birth.phase, 'birth'); assert.equal(birth.age, 0);
        await screenshot(page, 'real-birth-' + attempt);
        await page.locator('#beginBtn').click();
        await page.locator('[data-speed="16"]:visible').first().click();
        assert.equal((await state(page)).speed, 16);
        if (await page.locator('#autoBtn').getAttribute('aria-pressed') !== 'true') await page.locator('#autoBtn').click();
        await page.waitForFunction(() => S && (S.age >= 1 || S.phase === 'dead'), null, { timeout: 35000 });
        const advanced = await state(page); attempts.push(advanced);
        if (advanced.phase === 'life') break;
      }
      assert.equal((await state(page)).phase, 'life', 'All natural birth attempts ended before the persistence check');
      if (!(await state(page)).paused) await page.locator('#pauseBtn').click();
      const before = await state(page);
      const saved = await page.evaluate(() => {
        const value = lsGet(SAVE_KEY, null);
        const key = One8bLocal.namespace + lk(SAVE_KEY);
        return { key, native_present: window.localStorage.getItem(key) !== null,
          age: value?.S?.age, name: value?.S?.name?.full, bornT: value?.S?.bornT };
      });
      assert.ok(saved.native_present); assert.equal(saved.age, before.age); assert.equal(saved.name, birth.name);
      assert.ok(saved.key.startsWith('mini-games:1in8b:v1:'));
      await screenshot(page, 'real-life-16x-paused');
      await page.reload({ waitUntil: 'networkidle' });
      await page.locator('#resumeBtn').waitFor({ state: 'visible' });
      await page.locator('#resumeBtn').click();
      const after = await state(page);
      assert.equal(after.name, birth.name); assert.equal(after.born, birth.born); assert.equal(after.bornT, birth.bornT);
      assert.equal(after.age, before.age); assert.equal(after.speed, 16); assert.equal(after.phase, 'life');
      await screenshot(page, 'real-life-restored');
      return { birth, attempts, before_refresh: before, persisted: saved, after_refresh: after,
        method: 'Real birth, begin, speed, auto and pause buttons; read-only state assertions; native refresh and Continue.' };
    } finally { await ctx.close(); }
  });

  await check('education_workers', async () => {
    const ctx = await context(); const page = await ctx.newPage();
    try {
      await ready(page, 'zh-hans', '?edu=1');
      await page.locator('#labOpen').click();
      await page.locator('#labSameGo').click();
      await page.waitForFunction(() => LAB.same?.done || LAB.same?.fail, null, { timeout: 60000 });
      const same = await page.evaluate(() => ({ done: LAB.same.done, fail: LAB.same.fail, countries: LAB.same.iso,
        results: LAB.same.r.map(life => ({ name: life.name, age: life.age, err: life.err || null })) }));
      assert.equal(same.done, true); assert.equal(same.fail, false); assert.equal(same.results.length, 5);
      assert.ok(same.results.every(life => !life.err && typeof life.name === 'string' && Number.isFinite(life.age)));
      assert.equal(await page.locator('#labCards .labcard:not(.wait)').count(), 5);
      await screenshot(page, 'education-five-lives', true);
      await page.locator('[data-labtab="era"]').click();
      await page.locator('#labEraGo').click();
      await page.waitForFunction(() => LAB.era?.done || LAB.era?.fail, null, { timeout: 60000 });
      const era = await page.evaluate(() => ({ done: LAB.era.done, fail: !!LAB.era.fail, country: LAB.era.iso,
        results: LAB.era.r.map(life => ({ name: life.name, age: life.age, err: life.err || null })) }));
      assert.equal(era.done, true); assert.equal(era.fail, false); assert.equal(era.results.length, 5);
      assert.ok(era.results.every(life => !life.err && Number.isFinite(life.age)));
      await screenshot(page, 'education-era-comparison', true);
      assert.ok(report.workers.some(worker => worker.url.startsWith(game.href) && /labw\.zh-hans\./.test(worker.url)));
      return { same_day: same, era_comparison: era, real_worker_requests: report.workers.filter(worker => worker.stage === stage) };
    } finally { await ctx.close(); }
  });

  await check('network_and_runtime', async () => {
    for (const key of ['page_errors', 'console_errors', 'failed_responses', 'static_404', 'external_requests', 'forbidden_requests']) {
      assert.deepEqual(report[key], [], key + ' must be empty');
    }
    const unexpected = report.request_failures.filter(item => item.error !== 'net::ERR_ABORTED');
    assert.deepEqual(unexpected, [], 'Unexpected request failures');
    return { external_http_blocked: true, local_scheme_network: 0, original_api_network: 0,
      navigation_aborts: report.request_failures.length, page_errors: 0, static_404: 0 };
  });
  report.result = Object.values(report.checks).every(value => value.result === 'passed') ? 'passed' : 'failed';
  if (report.result !== 'passed') process.exitCode = 1;
} catch (error) {
  report.result = 'failed'; report.failure = error.stack || String(error); process.exitCode = 1;
  console.error(error);
} finally {
  await writeFile(path.join(output, 'report.json'), JSON.stringify(report, null, 2));
  console.log(JSON.stringify({ result: report.result, checks: Object.fromEntries(Object.entries(report.checks).map(([name, value]) => [name, value.result])), report: path.join(output, 'report.json') }));
  await Promise.race([browser.close(), new Promise(resolve => setTimeout(resolve, 5000))]);
  process.exit(process.exitCode || 0);
}
