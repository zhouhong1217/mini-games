// 独立平台适配层；未来广告供应商只在这里接入。
(() => {
  'use strict';
  let provider = null;
  let queue = Promise.resolve();
  const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
  const callProvider = (name, ...args) => {
    try { return provider?.[name]?.(...args); }
    catch (error) { console.warn('Local platform provider failed:', name, error); }
  };
  window.DoubleKitchenPlatform = Object.freeze({
    setAdProvider(value) { provider = value || null; },
    initialize() { return callProvider('initialize'); },
    showRewarded(callback, context) {
      // 每次调用捕获自己的回调；排队避免原版全局 callerN/callN 覆盖奖励。
      const selected = provider;
      const run = async () => {
        const audio = window.cc?.audioEngine;
        // Cocos 2.4.2 公开的 audioEngine 表保留当前 Audio 的原始 AudioClip。
        const clip = audio?._id2audio?.[audio?._music?.id]?.src;
        const loop = audio?._music?.loop ?? true;
        audio?.stopMusic();
        let earned = false;
        try {
          earned = selected?.rewarded ? (await selected.rewarded()) === true : true;
          if (earned) {
            await delay(100);
            window.AD.reward(callback, context);
          }
          return earned;
        } catch (error) {
          console.warn('Rewarded provider failed:', error);
          return false;
        } finally {
          // 保持原版开始→奖励→音乐恢复顺序，并保留正在播放的音乐资源。
          if (clip) audio?.playMusic(clip, loop);
        }
      };
      const result = queue.then(run, run);
      queue = result.catch(() => {});
      return result;
    },
    showInterstitial() { return callProvider('interstitial'); },
    hideInterstitial() { return callProvider('hideInterstitial'); },
    showBanner() { return callProvider('showBanner'); },
    hideBanner() { return callProvider('hideBanner'); },
    moreGames() {
      const destination = new URL('../../../', location.href);
      try {
        const language = new URL(parent.location.href).searchParams.get('lang');
        if (language) destination.searchParams.set('lang', language);
      } catch { /* 独立打开时使用默认语言。 */ }
      if (parent !== window) parent.location.href = destination.href;
      else location.href = destination.href;
    },
  });
})();
