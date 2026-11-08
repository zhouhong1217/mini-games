/* 原游戏的平台接口在本地的同步存档和生命周期适配。 */
(() => {
  'use strict';
  const features = new Set(['audio', 'copyright', 'credits', 'pause', 'progress',
    'score', 'tutorial', 'version', 'visibilitychange', 'home']);
  const handlers = new Map();
  const completed = () => Promise.resolve();
  let muted = false;
  const memory = new Map();
  const report = (type, detail) => {
    window.parent.postMessage({source: 'ctr-local', type, detail}, location.origin);
  };
  window.GameInterface = {
    hasFeature: name => features.has(name),
    isMuted: () => muted,
    isPaused: () => false,
    getCurrentLanguage: () => 'en',
    getOffsets: () => ({left: 0, right: 0, top: 0, bottom: 0}),
    isRewardedAdAvailable: () => false,
    showRewardedAd: () => Promise.resolve({isRewardGranted: false}),
    showInterstitialAd: completed,
    gameReady: () => report('ready'),
    sendPreloadProgress: progress => report('progress', progress),
    sendScore: (score, options) => report('score', {score, options}),
    gameMuted: value => {muted = Boolean(value);},
    storage: {
      getItem(key) {
        try {return localStorage.getItem(key);} catch {return memory.get(key) ?? null;}
      },
      setItem(key, value) {
        memory.set(key, String(value));
        try {localStorage.setItem(key, value);} catch {report('storage-unavailable');}
      },
      removeItem(key) {
        memory.delete(key);
        try {localStorage.removeItem(key);} catch {report('storage-unavailable');}
      }
    }
  };
  for (const name of ['gameStart', 'gameComplete', 'gameOver', 'gamePause', 'gameResume', 'gameQuit']) {
    GameInterface[name] = detail => {report(name, detail); return Promise.resolve();};
  }
  for (const name of ['onPauseStateChange', 'onMuteStateChange', 'onGoToHome',
    'onGoToNextLevel', 'onGoToLevel', 'onRestartGame', 'onQuitGame', 'onGameOver']) {
    GameInterface[name] = callback => handlers.set(name, callback);
  }
  GameInterface.onOffsetChange = callback => {handlers.set('onOffsetChange', callback); callback();};
  window.addEventListener('resize', () => handlers.get('onOffsetChange')?.());
  window.addEventListener('message', event => {
    if (event.origin !== location.origin || event.source !== parent || event.data?.source !== 'ctr-shell') return;
    const {action, value} = event.data;
    if (action === 'mute') {muted = Boolean(value); handlers.get('onMuteStateChange')?.(muted);}
    if (action === 'home') handlers.get('onGoToHome')?.();
  });
})();
