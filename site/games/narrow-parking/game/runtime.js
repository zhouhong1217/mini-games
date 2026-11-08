(() => {
  'use strict';
  const canvas = document.getElementById('unity-canvas');
  const status = document.getElementById('load-state');
  let failed = false;
  const notify = (type, detail = {}) => {
    if (parent !== window) parent.postMessage({ source: 'parking-local', type, ...detail }, location.origin);
  };
  const fail = error => {
    if (failed) return;
    failed = true;
    console.error('Narrow Parking:', error);
    status.hidden = false;
    status.textContent = '游戏加载失败，请重试。 / Game could not start. Please retry.';
    notify('error', { message: String(error?.message || error) });
  };
  const resize = () => {
    const width = Math.min(innerWidth, innerHeight * 960 / 540);
    canvas.style.width = width + 'px';
    canvas.style.height = width * 540 / 960 + 'px';
  };
  addEventListener('resize', resize);
  resize();
  if (typeof createUnityInstance !== 'function') return fail(new Error('Unity loader is unavailable'));
  createUnityInstance(canvas, {
    dataUrl: 'Build/game.data',
    frameworkUrl: 'Build/game.framework.js',
    codeUrl: 'Build/game.wasm',
    streamingAssetsUrl: 'StreamingAssets',
    companyName: 'game', productName: 'game', productVersion: '1.0',
    autoSyncPersistentDataPath: true,
    showBanner(message, type) { if (type === 'error') fail(message); },
  }, progress => {
    status.textContent = Math.round(progress * 100) + '%';
    notify('progress', { progress });
  }).then(instance => {
    if (failed) return;
    window.parkingGame = instance;
    status.hidden = true;
    notify('ready');
  }).catch(fail);
  // 防止驾驶时方向键和空格滚动父页面。
  addEventListener('keydown', event => {
    if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Space'].includes(event.code)) event.preventDefault();
  });
})();
