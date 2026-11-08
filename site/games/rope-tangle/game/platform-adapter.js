// 独立本地平台适配层；广告供应商仅通过 setAdProvider 接入。
(() => {
  'use strict';
  const prefix = 'rope-tangle-4399-v1:';
  let sender;
  let provider = null;
  let rewarded = null;
  let interstitial = null;
  const queued = [];
  const emit = method => {
    const message = ['LaggedAPIUnity', method]; // 原版 WASM 回调对象名。
    if (sender) sender(...message);
    else queued.push(message);
  };
  const read = (key, fallback) => {
    try { return JSON.parse(localStorage.getItem(prefix + key)) || fallback; }
    catch { return fallback; }
  };
  const write = (key, value) => {
    try { localStorage.setItem(prefix + key, JSON.stringify(value)); }
    catch { /* 存储不可用时仍可继续游戏。 */ }
  };
  window.RopeTanglePlatform = Object.freeze({
    configure({ sendMessage }) {
      if (typeof sendMessage !== 'function') throw new TypeError('sendMessage must be a function');
      sender = sendMessage;
      for (const message of queued.splice(0)) sender(...message);
    },
    initialize() {},
    setAdProvider(value) { provider = value || null; },
    checkRewardAd() { emit('RewardAdReadyCallback'); },
    showRewardAd() {
      if (rewarded) return rewarded;
      const selected = provider;
      rewarded = Promise.resolve().then(() => selected?.rewarded ? selected.rewarded() : true)
        .then(earned => emit(earned === true ? 'RewardAdSuccessCallback' : 'RewardAdFailCallback'),
          () => emit('RewardAdFailCallback'))
        .finally(() => { rewarded = null; });
      return rewarded;
    },
    showAd() {
      if (interstitial) return interstitial;
      const selected = provider;
      interstitial = Promise.resolve().then(() => selected?.interstitial?.()).catch(() => {})
        .then(() => emit('ResumeGameCallback'))
        .finally(() => { interstitial = null; });
      return interstitial;
    },
    saveScore(score, boardId) {
      if (!Number.isFinite(score)) return;
      const scores = read('scores', {});
      const key = String(boardId);
      Object.defineProperty(scores, key, { value: Math.max(Number(scores[key]) || 0, score), enumerable: true, configurable: true });
      write('scores', scores);
    },
    saveAchievement(award) {
      const achievements = read('achievements', []);
      const key = String(award);
      if (!achievements.includes(key)) { achievements.push(key); write('achievements', achievements); }
    },
  });
})();
