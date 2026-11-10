(() => {
  'use strict';
  let player, ready = false, failure = false, cc;
  const message = (type, data = {}) => {
    if (parent !== window) parent.postMessage({type: 'bead-craft-' + type, ...data}, location.origin);
  };
  const save = () => { if (player) player.inst.save(); };
  window.addEventListener('pagehide', save);
  window.addEventListener('beforeunload', save);
  document.addEventListener('visibilitychange', () => { if (document.hidden) save(); });
  window.addEventListener('error', e => { if (e.message) window.BeadCraftRuntime.fail(e.message); });
  window.addEventListener('unhandledrejection', e => window.BeadCraftRuntime.fail(String(e.reason)));
  window.BeadCraftRuntime = {
    fail(error) {
      if (failure) return;
      failure = true;
      message('error', {message: String(error)});
    },
    attach(engine) {
      cc = engine;
      message('progress', {value: .1});
      const start = Date.now();
      const poll = setInterval(() => {
        const scene = cc.director.getScene();
        if (scene?.name !== 'Hall') {
          if (Date.now() - start > 90000) { clearInterval(poll); this.fail('游戏加载超时'); }
          return;
        }
        if (!player) System.import('chunks:///_virtual/PlayerData.ts').then(m => { player = m.PlayerData; });
        const game = scene.getComponentInChildren('UIGame');
        const home = scene.getComponentInChildren('UIHome');
        if (home?.node.activeInHierarchy || game?.myLevel?.gridBacks?.some(row => row?.some(cell => cell?.node.activeInHierarchy))) {
          ready = true;
          clearInterval(poll);
          message('progress', {value: 1});
          message('ready');
        }
      }, 100);
    },
    snapshot() {
      const scene = cc?.director.getScene(), ui = scene?.getComponentInChildren('UIGame'), level = ui?.myLevel;
      return {ready, scene: scene?.name, player: player?.inst.serialize(), level: level?.level,
        guide: level?.guideStep, win: level?.win, progress: level?.mPrgresslevel?.string,
        time: ui?.restTime, holding: level?.holdingGridItems?.length};
    }
  };
})();
