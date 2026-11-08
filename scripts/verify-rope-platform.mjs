// 在独立 VM 中验收本地平台接口；不加载 Unity、不联网、不修改游戏存档。
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import vm from 'node:vm';

const adapterPath = new URL('../site/games/rope-tangle/game/platform-adapter.js', import.meta.url);
const source = await readFile(adapterPath, 'utf8');
const compiled = new vm.Script(source, { filename: adapterPath.pathname });
const objectName = 'LaggedAPIUnity';
const namespace = 'rope-tangle-4399-v1:';
const callback = method => [objectName, method];
const passed = [];
const tick = () => new Promise(resolve => setImmediate(resolve));
const deferred = () => {
  let resolve, reject;
  const promise = new Promise((yes, no) => { resolve = yes; reject = no; });
  return { promise, resolve, reject };
};

function fixture() {
  const stored = new Map([
    ['mini-games-language', 'en'],
    ['other-game-level', '9'],
    ['apple-snake-4399-v1:level', '4'],
  ]);
  const calls = [];
  const outbound = [];
  const blocked = kind => {
    outbound.push(kind);
    throw new Error('Unexpected external dependency: ' + kind);
  };
  const localStorage = {
    getItem(key) { return stored.get(String(key)) ?? null; },
    setItem(key, value) { stored.set(String(key), String(value)); },
    removeItem(key) { stored.delete(String(key)); },
    clear() { stored.clear(); },
    key(index) { return Array.from(stored.keys())[index] ?? null; },
    get length() { return stored.size; },
  };
  const sandbox = {
    console, localStorage,
    fetch() { return blocked('fetch'); },
    XMLHttpRequest: class { constructor() { blocked('XMLHttpRequest'); } },
    WebSocket: class { constructor() { blocked('WebSocket'); } },
    Image: class { constructor() { blocked('Image'); } },
    navigator: { sendBeacon() { return blocked('sendBeacon'); } },
    document: { createElement() { return blocked('document.createElement'); } },
  };
  sandbox.window = sandbox;
  compiled.runInContext(vm.createContext(sandbox), { timeout: 1000 });
  const api = sandbox.RopeTanglePlatform;
  assert.ok(api, 'RopeTanglePlatform must be exposed on window');
  for (const name of ['configure', 'initialize', 'checkRewardAd', 'showRewardAd', 'showAd', 'setAdProvider', 'saveScore', 'saveAchievement']) {
    assert.equal(typeof api[name], 'function', 'Missing platform method: ' + name);
  }
  const configure = () => api.configure({ sendMessage: (...args) => calls.push(args) });
  return { api, calls, stored, outbound, configure };
}

async function test(name, run) {
  await run();
  passed.push(name);
}

await test('default callbacks preserve Unity target, arguments, order, and count', async () => {
  const f = fixture();
  f.configure();
  await f.api.initialize();
  await f.api.initialize();
  assert.deepEqual(f.calls, [], 'Initialization must not emit an ad callback');
  await f.api.checkRewardAd();
  await f.api.showRewardAd();
  await f.api.showAd();
  await tick();
  assert.deepEqual(f.calls, [
    callback('RewardAdReadyCallback'),
    callback('RewardAdSuccessCallback'),
    callback('ResumeGameCallback'),
  ]);
  assert.deepEqual(f.outbound, [], 'Default platform must not load an SDK or contact a service');
});

await test('callbacks queue before configure and flush once in original order', async () => {
  const f = fixture();
  await f.api.initialize();
  await f.api.checkRewardAd();
  await f.api.showRewardAd();
  await f.api.showAd();
  await tick();
  assert.deepEqual(f.calls, []);
  f.configure();
  await tick();
  const expected = [callback('RewardAdReadyCallback'), callback('RewardAdSuccessCallback'), callback('ResumeGameCallback')];
  assert.deepEqual(f.calls, expected);
  f.configure();
  await tick();
  assert.deepEqual(f.calls, expected, 'Reconfiguration must not replay flushed callbacks');
  assert.deepEqual(f.outbound, []);
});

await test('successful rewarded provider completes once after its promise settles', async () => {
  const f = fixture(); f.configure();
  const gate = deferred(); let count = 0;
  f.api.setAdProvider({ rewarded() { count++; return gate.promise; } });
  await f.api.checkRewardAd();
  const pending = f.api.showRewardAd();
  await tick();
  assert.equal(count, 1);
  assert.deepEqual(f.calls, [callback('RewardAdReadyCallback')]);
  gate.resolve(true);
  await pending; await tick();
  assert.deepEqual(f.calls, [callback('RewardAdReadyCallback'), callback('RewardAdSuccessCallback')]);
});

for (const [label, rewarded] of [
  ['false', () => Promise.resolve(false)],
  ['reject', () => Promise.reject(new Error('Reward provider rejected'))],
  ['throw', () => { throw new Error('Reward provider threw'); }],
]) {
  await test('rewarded provider ' + label + ' emits one failure callback', async () => {
    const f = fixture(); f.configure();
    f.api.setAdProvider({ rewarded });
    await f.api.checkRewardAd();
    await f.api.showRewardAd(); await tick();
    assert.deepEqual(f.calls, [callback('RewardAdReadyCallback'), callback('RewardAdFailCallback')]);
  });
}

await test('overlapping rewarded calls share one provider attempt and callback, then allow another attempt', async () => {
  const f = fixture(); f.configure();
  let gate = deferred(); let count = 0;
  f.api.setAdProvider({ rewarded() { count++; return gate.promise; } });
  const first = f.api.showRewardAd(), second = f.api.showRewardAd();
  await tick();
  assert.equal(count, 1);
  assert.deepEqual(f.calls, []);
  gate.resolve(true);
  await Promise.all([first, second]); await tick();
  assert.deepEqual(f.calls, [callback('RewardAdSuccessCallback')]);
  gate = deferred();
  const next = f.api.showRewardAd(); await tick();
  assert.equal(count, 2);
  gate.resolve(false); await next; await tick();
  assert.deepEqual(f.calls, [callback('RewardAdSuccessCallback'), callback('RewardAdFailCallback')]);
});

for (const [label, interstitial] of [
  ['true', () => Promise.resolve(true)],
  ['false', () => Promise.resolve(false)],
  ['reject', () => Promise.reject(new Error('Interstitial provider rejected'))],
  ['throw', () => { throw new Error('Interstitial provider threw'); }],
]) {
  await test('interstitial provider ' + label + ' resumes once without an extra pause callback', async () => {
    const f = fixture(); f.configure();
    f.api.setAdProvider({ interstitial });
    await f.api.showAd(); await tick();
    assert.deepEqual(f.calls, [callback('ResumeGameCallback')]);
  });
}

await test('overlapping interstitial calls share one attempt and resume, then allow another attempt', async () => {
  const f = fixture(); f.configure();
  let gate = deferred(); let count = 0;
  f.api.setAdProvider({ interstitial() { count++; return gate.promise; } });
  const first = f.api.showAd(), second = f.api.showAd();
  await tick();
  assert.equal(count, 1); assert.deepEqual(f.calls, []);
  gate.reject(new Error('First interstitial failed'));
  await Promise.all([first, second]); await tick();
  assert.deepEqual(f.calls, [callback('ResumeGameCallback')]);
  gate = deferred();
  const next = f.api.showAd(); await tick(); assert.equal(count, 2);
  gate.resolve(true); await next; await tick();
  assert.deepEqual(f.calls, [callback('ResumeGameCallback'), callback('ResumeGameCallback')]);
});

await test('rewarded and interstitial pending states are independent', async () => {
  const f = fixture(); f.configure();
  const reward = deferred(), ad = deferred(); let rewardCount = 0, adCount = 0;
  f.api.setAdProvider({
    rewarded() { rewardCount++; return reward.promise; },
    interstitial() { adCount++; return ad.promise; },
  });
  const rewarded = f.api.showRewardAd(), interstitial = f.api.showAd();
  await tick();
  assert.equal(rewardCount, 1); assert.equal(adCount, 1); assert.deepEqual(f.calls, []);
  ad.resolve(true); await interstitial; await tick();
  assert.deepEqual(f.calls, [callback('ResumeGameCallback')]);
  reward.resolve(true); await rewarded; await tick();
  assert.deepEqual(f.calls, [callback('ResumeGameCallback'), callback('RewardAdSuccessCallback')]);
});

await test('clearing the provider restores local default callbacks', async () => {
  const f = fixture(); f.configure(); let count = 0;
  f.api.setAdProvider({ rewarded() { count++; return Promise.resolve(false); } });
  await f.api.showRewardAd(); await tick();
  f.api.setAdProvider(null);
  await f.api.showRewardAd(); await f.api.showAd(); await tick();
  assert.equal(count, 1);
  assert.deepEqual(f.calls, [callback('RewardAdFailCallback'), callback('RewardAdSuccessCallback'), callback('ResumeGameCallback')]);
  assert.deepEqual(f.outbound, []);
});

await test('scores and achievements stay in their own local storage namespace', async () => {
  const f = fixture(); f.configure();
  const before = new Map(f.stored);
  await f.api.initialize();
  await f.api.saveScore(314, 'rope-platform-test-board');
  await f.api.saveAchievement('rope-platform-test-achievement');
  await tick();
  for (const [key, value] of before) assert.equal(f.stored.get(key), value, 'Unrelated storage was changed: ' + key);
  const newKeys = Array.from(f.stored.keys()).filter(key => !before.has(key)).sort();
  assert.deepEqual(newKeys, [namespace + 'achievements', namespace + 'scores']);
  const scores = JSON.stringify(JSON.parse(f.stored.get(namespace + 'scores')));
  const achievements = JSON.stringify(JSON.parse(f.stored.get(namespace + 'achievements')));
  assert.ok(scores.includes('rope-platform-test-board'), 'Board identifier was not saved');
  assert.ok(scores.includes('314'), 'Score was not saved');
  assert.ok(achievements.includes('rope-platform-test-achievement'), 'Achievement was not saved');
  assert.deepEqual(f.calls, [], 'Local score and achievement writes must not emit ad callbacks');
  assert.deepEqual(f.outbound, []);
});

console.log(JSON.stringify({ result: 'passed', tests: passed.length, checks: passed }, null, 2));
