(() => {
  'use strict';
  const canvas = document.getElementById('unity-canvas');
  const status = document.getElementById('load-state');
  let failed = false;
  let engineReady = false;
  let gameReady = false;
  const notify = (type, detail = {}) => {
    if (parent !== window) parent.postMessage({ source: 'rope-tangle-local', type, ...detail }, location.origin);
  };
  const fail = error => {
    if (failed) return;
    failed = true;
    status.hidden = false;
    status.textContent = '游戏加载失败，请重试。 / Game could not start. Please retry.';
    notify('error', { message: String(error?.message || error) });
  };
  const ready = () => {
    if (failed || !engineReady || !gameReady) return;
    requestAnimationFrame(() => requestAnimationFrame(() => {
      status.hidden = true;
      notify('ready');
    }));
  };
  const resize = () => {
    const width = Math.min(innerWidth, innerHeight * 1080 / 1920);
    canvas.style.width = width + 'px';
    canvas.style.height = width * 1920 / 1080 + 'px';
  };
  addEventListener('resize', resize);
  resize();
  canvas.addEventListener('pointerdown', () => { window.focus(); canvas.focus({ preventScroll: true }); });
  addEventListener('error', event => fail(event.error || event.message));
  addEventListener('unhandledrejection', event => fail(event.reason));
  async function boot() {
    if (typeof createUnityInstance !== 'function') throw new Error('Game loader is unavailable');
    const instance = await createUnityInstance(canvas, {
      dataUrl: 'Build/Rope Tangle Puzzle.data',
      frameworkUrl: 'Build/Rope Tangle Puzzle.framework.js',
      codeUrl: 'Build/Rope Tangle Puzzle.wasm',
      streamingAssetsUrl: 'StreamingAssets',
      companyName: 'Gamesmunch.com', productName: 'Rope Tangle Puzzle', productVersion: '0.1',
      onLocalGameReady() { gameReady = true; ready(); },
      showBanner(message, type) { if (type === 'error') fail(message); },
      printErr(message) { console.error(message); },
    }, progress => {
      status.textContent = Math.round(progress * 100) + '%';
      notify('progress', { progress });
    });
    if (failed) return;
    window.unityInstance = instance;
    RopeTanglePlatform.configure({ sendMessage: (...args) => instance.SendMessage(...args) });
    engineReady = true;
    ready();
  }
  boot().catch(fail);
})();
