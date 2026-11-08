/* 原游戏的平台接口在本地的同步存档和生命周期适配。 */
(() => {
  'use strict';
  const features = new Set(['audio', 'copyright', 'credits', 'pause', 'progress',
    'score', 'tutorial', 'version', 'visibilitychange', 'home']);
  const handlers = new Map();
  const completed = () => Promise.resolve();
  let muted = false;
  const memory = new Map();
  const initialLanguage = window.PlaygroundI18n.language;
  const selectedLanguage = () => {
    try {
      if (parent !== window && parent.location.origin === location.origin && parent.PlaygroundI18n) {
        return parent.PlaygroundI18n.language;
      }
    } catch { /* A cross-origin embed uses its own language. */ }
    return window.PlaygroundI18n.language;
  };
  const language = () => selectedLanguage() === 'zh-CN' ? 'zh' : 'en';
  const toggleLanguage = () => {
    const next = language() === 'zh' ? 'en' : 'zh-CN';
    try {
      if (parent !== window && parent.location.origin === location.origin && parent.PlaygroundI18n) {
        parent.PlaygroundI18n.setLanguage(next);
        return;
      }
    } catch { /* Use the standalone selector below. */ }
    window.PlaygroundI18n.setLanguage(next);
  };
  const reloadLanguage = () => {
    const next = selectedLanguage();
    if ((next === 'zh-CN' || next === 'en') && next !== initialLanguage) {
      const url = new URL(location.href);
      url.searchParams.set('lang', next);
      location.replace(url.href);
    }
  };
  // The shell owns the language selector. Restart the canvas when its locale changes.
  // Reuse the CTR save key so switching languages preserves completed levels.
  try {
    if (parent !== window && parent.location.origin === location.origin && parent.PlaygroundI18n) {
      parent.addEventListener('playground:languagechange', reloadLanguage);
      window.addEventListener('pagehide', () => parent.removeEventListener('playground:languagechange', reloadLanguage), {once: true});
      reloadLanguage();
    }
  } catch { /* A standalone or cross-origin embed uses its own URL language. */ }
  window.addEventListener('playground:languagechange', reloadLanguage);
  document.documentElement.lang = language() === 'zh' ? 'zh-CN' : 'en';
  document.title = language() === 'zh' ? '割绳子' : 'Cut the Rope';
  const report = (type, detail) => {
    window.parent.postMessage({source: 'ctr-local', type, detail}, location.origin);
  };
  window.GameInterface = {
    hasFeature: name => features.has(name),
    isMuted: () => muted,
    isPaused: () => false,
    getCurrentLanguage: language,
    toggleLanguage,
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
