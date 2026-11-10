/* 独立广告适配层。可通过 setProvider 接入新供应商，原游戏 SDK 不参与运行。 */
(() => {
  'use strict';
  let provider = null;
  window.BeadCraftPlatform = {
    setProvider(value) { provider = value || null; },
    reward(success, failure) {
      let settled = false;
      const once = callback => () => {
        if (settled) return;
        settled = true;
        if (typeof callback === 'function') callback();
      };
      const complete = once(success), fail = once(failure);
      if (!provider?.reward) { complete(); return; }
      try { provider.reward(complete, fail); } catch (error) {
        if (settled) throw error;
        fail();
      }
    },
    interstitial() { return provider?.interstitial?.(); }
  };
})();
