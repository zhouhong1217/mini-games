import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';

const modulePath = process.env.PLAYWRIGHT_MODULE;
if (!modulePath) throw new Error('Set PLAYWRIGHT_MODULE to playwright-core/index.mjs');
const { chromium } = await import(pathToFileURL(modulePath));
const script = await readFile(new URL('./local-store.js', import.meta.url));
const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': req.url === '/local-store.js' ? 'text/javascript' : 'text/html; charset=utf-8' });
  res.end(req.url === '/local-store.js' ? script : '<!doctype html><meta name="viewport" content="width=device-width,initial-scale=1"><script src="/local-store.js"></script>');
});
await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
const browser = await chromium.launch({ headless: true, executablePath: process.env.CHROME_PATH || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome' });
const context = await browser.newContext({ viewport: { width: 390, height: 844 } });
const page = await context.newPage();
const errors = [];
page.on('pageerror', error => errors.push(String(error)));
const result = {};
try {
  await page.goto(`http://127.0.0.1:${server.address().port}/mini-games/games/1in8b/zh-hans/`);
  await page.waitForFunction(() => !!window.One8bLocal);
  result.storage = await page.evaluate(async () => {
    const L = One8bLocal;
    await L.ready;
    localStorage.setItem('CTR', 'unrelated');
    L.storage.setItem('test', '1');
    if (L.storage.length !== 1 || L.storage.key(0) !== 'test' || L.storage.getItem('test') !== '1' || localStorage.getItem(L.namespace + 'test') !== '1') throw Error('storage adapter');
    L.storage.clear();
    if (L.storage.length !== 0 || localStorage.getItem('CTR') !== 'unrelated') throw Error('storage isolation');
    let rejected = false;
    try { L.registerDatabase('another-game'); } catch { rejected = true; }
    if (!rejected) throw Error('database isolation');
    await L.put('memorials', 'one', { id: 'one', title: '人生', at: 1 });
    await L.put('memorials', 'two', { id: 'two', title: 'Life', at: 2 });
    if ((await L.get('memorials', 'one')).title !== '人生' || (await L.list('memorials')).length !== 2) throw Error('archive CRUD');
    await L.remove('memorials', 'two');
    if (await L.get('memorials', 'two') !== null) throw Error('archive remove');
    L.storage.setItem('one8b.zh.save.v3', JSON.stringify({ S: { name: { full: '测试人物' }, age: 42 } }));
    const db = await new Promise((resolve, reject) => {
      const req = indexedDB.open(L.namespace + 'past', 1);
      req.onupgradeneeded = () => req.result.createObjectStore('past');
      req.onerror = () => reject(req.error);
      req.onsuccess = () => resolve(req.result);
    });
    const tx = db.transaction('past', 'readwrite');
    const done = new Promise((resolve, reject) => { tx.oncomplete = resolve; tx.onabort = () => reject(tx.error); });
    tx.objectStore('past').put({ S: { age: 91, name: { full: 'Archived life' } } }, 'zh|123');
    await done; db.close();
    await L.put('memorials', 'binary', { id: 'binary', pic: new Blob(['test-pic'], { type: 'image/png' }), date: new Date('2026-11-09T00:00:00Z'), bytes: new Uint16Array([17, 280]), map: new Map([['name', '人物']]), set: new Set(['life']) });
    window.exported = await (await L.exportBackup()).text();
    const backup = JSON.parse(window.exported);
    if (backup.databases.length !== 2 || !backup.databases.some(row => row.name === L.namespace + 'past' && row.stores[0].name === 'past')) throw Error('past database backup');
    return { isolated: true, archiveCRUD: true, databases: backup.databases.length };
  });
  result.invalid = await page.evaluate(async () => {
    const L = One8bLocal;
    const before = await (await L.exportBackup()).text();
    let rejected = 0;
    for (const bad of ['{broken', '{}', JSON.stringify({ ...JSON.parse(before), namespace: 'other:' }), JSON.stringify({ ...JSON.parse(before), databases: [{ name: 'CTR', version: 1, stores: [] }] }), JSON.stringify({ ...JSON.parse(before), databases: [{ name: L.namespace + 'past', version: 1, stores: [] }] }), JSON.stringify({ ...JSON.parse(before), databases: [{ name: L.namespace + 'archive', version: 1, stores: [{ name: 'records', keyPath: 'wrong', autoIncrement: false, indexes: [], entries: [] }] }] })]) {
      try { await L.importBackup(bad); } catch { rejected++; }
    }
    if (rejected !== 6 || (await L.list('memorials')).length !== 2 || L.storage.length !== 1 || localStorage.getItem('CTR') !== 'unrelated') throw Error('invalid import changed data');
    return { rejected, originalDataKept: true };
  });
  result.merge = await page.evaluate(async () => {
    const L = One8bLocal;
    await L.put('memorials', 'one', { id: 'one', title: 'Newer local title' });
    L.storage.setItem('one8b.zh.save.v3', 'newer-progress');
    const stats = await L.importBackup(window.exported);
    if (stats.imported !== 0 || stats.skipped !== 4 || (await L.get('memorials', 'one')).title !== 'Newer local title' || L.storage.getItem('one8b.zh.save.v3') !== 'newer-progress') throw Error('merge overwrote existing data');
    return stats;
  });
  result.restore = await page.evaluate(async () => {
    const L = One8bLocal;
    L.storage.clear();
    await L.remove('memorials', 'one'); await L.remove('memorials', 'binary');
    const db = await new Promise(resolve => { const req = indexedDB.open(L.namespace + 'past'); req.onsuccess = () => resolve(req.result); });
    const tx = db.transaction('past', 'readwrite');
    const done = new Promise((resolve, reject) => { tx.oncomplete = resolve; tx.onabort = () => reject(tx.error); });
    tx.objectStore('past').clear(); await done; db.close();
    const stats = await L.importBackup(window.exported), binary = await L.get('memorials', 'binary');
    if (stats.imported !== 4 || stats.skipped !== 0 || (await L.get('memorials', 'one')).title !== '人生' || await binary.pic.text() !== 'test-pic' || binary.pic.type !== 'image/png' || binary.date.toISOString() !== '2026-11-09T00:00:00.000Z' || !(binary.bytes instanceof Uint16Array) || binary.bytes[1] !== 280 || binary.map.get('name') !== '人物' || !binary.set.has('life') || localStorage.getItem('CTR') !== 'unrelated') throw Error('backup restore');
    return { ...stats, binaryAndStructuredValues: true, unrelatedDataKept: true };
  });
  result.rollback = await page.evaluate(async () => {
    const L = One8bLocal, source = JSON.parse(window.exported);
    source.storage = { 'first-new': 'inserted-first', 'quota-fail': 'must-fail' };
    source.databases = [{ ...source.databases.find(row => row.name.endsWith(':archive')), stores: [{ ...source.databases.find(row => row.name.endsWith(':archive')).stores[0], entries: [{ key: ['string', 'memorials:rollback-new'], value: ['object', [['key', ['string', 'memorials:rollback-new']], ['kind', ['string', 'memorials']], ['updatedAt', ['number', Date.now()]], ['value', ['object', [['id', ['string', 'rollback-new']]]]]]] }] }] }];
    const originalSet = Storage.prototype.setItem;
    Storage.prototype.setItem = function(key, value) { if (key === L.namespace + 'quota-fail') throw new DOMException('Simulated full disk', 'QuotaExceededError'); return originalSet.call(this, key, value); };
    let rejected = false;
    try { await L.importBackup(JSON.stringify(source)); } catch { rejected = true; } finally { Storage.prototype.setItem = originalSet; }
    if (!rejected || L.storage.getItem('first-new') !== null || L.storage.getItem('quota-fail') !== null || await L.get('memorials', 'rollback-new') !== null || (await L.get('memorials', 'one')).title !== '人生') throw Error('quota failure did not rollback');
    return { quotaFailureRejected: true, newWritesRolledBack: true, existingDataKept: true };
  });
  result.indexedDBRollback = await page.evaluate(async () => {
    const L = One8bLocal, source = JSON.parse(window.exported);
    source.storage = {};
    source.databases = [{ ...source.databases.find(row => row.name.endsWith(':archive')), stores: [{ ...source.databases.find(row => row.name.endsWith(':archive')).stores[0], entries: [{ key: ['string', 'memorials:transaction-new'], value: ['object', [['key', ['string', 'memorials:transaction-new']], ['kind', ['string', 'memorials']], ['updatedAt', ['number', Date.now()]], ['value', ['object', [['id', ['string', 'transaction-new']]]]]]] }] }] }, { name: L.namespace + 'transaction-test', version: 1, stores: [{ name: 'test', keyPath: null, autoIncrement: false, indexes: [{ name: 'unique', keyPath: 'unique', unique: true, multiEntry: false }], entries: [{ key: ['string', 'a'], value: ['object', [['unique', ['string', 'same']]]] }, { key: ['string', 'b'], value: ['object', [['unique', ['string', 'same']]]] }] }] }];
    let rejected = false;
    try { await L.importBackup(JSON.stringify(source)); } catch { rejected = true; }
    if (!rejected || await L.get('memorials', 'transaction-new') !== null || (await L.list('memorials')).length !== 2) throw Error('IndexedDB failure did not rollback');
    return { failedTransactionRejected: true, previousDatabaseWritesRolledBack: true };
  });
  result.backupHook = await page.evaluate(async () => {
    const L = One8bLocal;
    let release;
    const pending = new Promise(resolve => { release = resolve; });
    let entered = false;
    window.One8bBeforeBackup = async () => {
      entered = true;
      await pending;
      L.storage.setItem('hook-progress', 'latest-progress');
      await L.put('memorials', 'hook-record', { id: 'hook-record', title: 'Pending save flushed' });
    };
    const first = L.exportBackup();
    for (let i = 0; !entered && i < 20; i++) await new Promise(resolve => setTimeout(resolve, 0));
    if (!entered || !L.isExporting) throw Error('backup hook not awaited');
    let concurrentRejected = false;
    try { await L.importBackup(window.exported); } catch { concurrentRejected = true; }
    if (!concurrentRejected) throw Error('import ran during export');
    release();
    const exported = JSON.parse(await (await first).text());
    delete window.One8bBeforeBackup;
    if (exported.storage['hook-progress'] !== 'latest-progress' || !exported.databases.find(db => db.name.endsWith(':archive')).stores[0].entries.some(row => row.key[1] === 'memorials:hook-record') || L.isExporting) throw Error('queued save omitted from backup');
    await L.remove('memorials', 'hook-record'); L.storage.removeItem('hook-progress');
    return { awaitedHook: true, latestProgressIncluded: true, pendingArchiveWriteIncluded: true, concurrentImportRejected: true };
  });
  result.concurrentImports = await page.evaluate(async () => {
    const results = await Promise.allSettled([One8bLocal.importBackup(new Blob([window.exported])), One8bLocal.importBackup(new Blob([window.exported]))]);
    if (results.filter(result => result.status === 'fulfilled').length !== 1 || results.filter(result => result.status === 'rejected').length !== 1 || One8bLocal.isImporting) throw Error('Concurrent imports were not serialized');
    return { oneAccepted: true, secondRejected: true, lockReleased: true, reloadRequiredAfterRestore: One8bLocal.needsReload };
  });
  result.importQueue = await page.evaluate(async () => {
    let release, entered = false, completed = false;
    const queued = new Promise(resolve => { release = resolve; });
    const listener = event => { entered = true; event.detail.waitUntil(queued); };
    addEventListener('one8b:beforeimport', listener);
    const task = One8bLocal.importBackup(window.exported).then(result => { completed = true; return result; });
    for (let i = 0; !entered && i < 20; i++) await new Promise(resolve => setTimeout(resolve, 0));
    if (!entered || completed || !One8bLocal.isImporting) throw Error('import did not wait for queued game writes');
    release(); await task; removeEventListener('one8b:beforeimport', listener);
    return { queuedGameWritesAwaited: true, lockReleased: !One8bLocal.isImporting };
  });
  result.rejectedQueue = await page.evaluate(async () => {
    let after = null, rejected = false;
    const beforeListener = event => event.detail.waitUntil(Promise.reject(new Error('Queued disk write failed')));
    const afterListener = event => { after = event.detail; };
    addEventListener('one8b:beforeimport', beforeListener, { once: true });
    addEventListener('one8b:afterimport', afterListener, { once: true });
    try { await One8bLocal.importBackup(window.exported); } catch { rejected = true; }
    if (!rejected || !after || after.ok !== false || One8bLocal.isImporting || (await One8bLocal.get('memorials', 'one')).title !== '人生') throw Error('Rejected pre-import queue left the page locked or modified data');
    return { importRejected: true, failedAfterImportEvent: true, lockReleased: true, existingDataKept: true };
  });
  result.locales = [];
  for (const locale of ['en', 'ko', 'ja', 'zh', 'zh-hans', 'vi', 'fr', 'th', 'es', 'de', 'pt', 'ru', 'tr', 'id', 'it', 'ar', 'fa', 'uk', 'pl']) {
    const check = await page.evaluate(locale => {
      document.getElementById('one8b-local-toolbar')?.remove();
      document.documentElement.dir = ['ar', 'fa'].includes(locale) ? 'rtl' : 'ltr';
      const bar = One8bLocal.mountToolbar({ locale, baseUrl: new URL('../', location.href).href, portalLanguage: 'en' });
      return { locale, home: bar.querySelector('a').href, export: bar.querySelector('#one8b-export-backup').textContent, local: One8bLocal.text('localOnly', locale), overflow: bar.scrollWidth > bar.clientWidth + 1 };
    }, locale);
    assert.equal(new URL(check.home).pathname, '/mini-games/');
    assert.equal(new URL(check.home).search, '?lang=en');
    assert.ok(check.export && check.local);
    assert.equal(check.overflow, false, locale + ' toolbar overflows');
    result.locales.push(locale);
  }
  assert.deepEqual(errors, []);
  console.log(JSON.stringify({ result: 'passed', checks: result, pageErrors: errors }, null, 2));
} finally {
  await browser.close();
  await new Promise(resolve => server.close(resolve));
}
