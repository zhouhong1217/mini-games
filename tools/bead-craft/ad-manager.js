System.register('chunks:///_virtual/AdMgr.ts', ['cc', './AudioMgr.ts', './PlayerData.ts'], function (exports) {
  let cc, AudioManager, PlayerData;
  return {
    setters: [m => { cc = m.cclegacy; }, m => { AudioManager = m.AudioManager; }, m => { PlayerData = m.PlayerData; }],
    execute() {
      cc._RF.push({}, 'cb1daylvMhFKr7ne+mbYqpp', 'AdMgr', undefined);
      // 保留原枚举值及游戏调用接口，新增 Local 避免启用原 Other 分支的调试模式。
      exports('PlatformType', {WX: 0, Android: 1, Other: 2, H4399: 3, Local: 4});
      class AdMgr {
        constructor() { this.platform = 4; }
        init() {}
        playRewardVideo(success, failure) {
          AudioManager.inst.pauseBGM();
          const finish = callback => () => {
            try { if (callback) callback(); } finally { AudioManager.inst.resumeBGM(); }
          };
          window.BeadCraftPlatform.reward(finish(success), finish(failure));
        }
        showInterstitial() { window.BeadCraftPlatform.interstitial(); }
        track() {}
        iaTrack() {}
        shareAppMessage() {}
        loadRecommend() { return Promise.resolve(); }
        showRecommend() {}
        guideDone() {}
        vibrate() { if (PlayerData.inst.vibrateOn) navigator.vibrate?.(15); }
      }
      AdMgr.inst = new AdMgr();
      exports('AdMgr', AdMgr);
      cc._RF.pop();
    }
  };
});
