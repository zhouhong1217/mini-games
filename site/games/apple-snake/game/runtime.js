(() => {
  'use strict';
  const canvas = document.getElementById('unity-canvas');
  const status = document.getElementById('load-state');
  let failed = false;
  let engineReady = false;
  let gameReady = false;
  const notify = (type, detail = {}) => {
    if (parent !== window) parent.postMessage({ source: 'apple-snake-local', type, ...detail }, location.origin);
  };
  const fail = error => {
    if (failed) return;
    failed = true;
    console.error('Snake to Eat:', error);
    status.hidden = false;
    status.textContent = '游戏加载失败，请重试。 / Game could not start. Please retry.';
    notify('error', { message: String(error?.message || error) });
  };
  const ready = () => {
    if (failed || !engineReady || !gameReady) return;
    status.hidden = true;
    notify('ready');
  };
  const originalPlatformMessage = window.sendMessageToPlatform;
  window.sendMessageToPlatform = message => {
    const result = originalPlatformMessage(message);
    if (message === 'game_ready') { gameReady = true; ready(); }
    return result;
  };
  const resize = () => {
    const width = Math.min(innerWidth, innerHeight * 1180 / 600);
    canvas.style.width = width + 'px';
    canvas.style.height = width * 600 / 1180 + 'px';
  };
  addEventListener('resize', resize);
  resize();
  addEventListener('pointerdown', () => { window.focus(); canvas.focus({ preventScroll: true }); });
  addEventListener('keydown', event => {
    if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Space'].includes(event.code)) event.preventDefault();
  });
  // 通过原版桥接回调完成本地继续；不改写 WASM 或关卡进度。
  window.showInterstitial = () => setTimeout(() => sendMessageToUnity('OnInterstitialStateChanged', 'closed'), 0);
  window.showRewarded = () => setTimeout(() => {
    sendMessageToUnity('OnRewardedStateChanged', 'rewarded');
    sendMessageToUnity('OnRewardedStateChanged', 'closed');
  }, 0);
  window.showBanner = () => {};
  window.getIsExternalLinksAllowed = () => 'false';
  window.getServerTime = () => sendMessageToUnity('OnGetServerTimeCompleted', Date.now().toString());
  async function boot() {
    if (typeof createUnityInstance !== 'function' || !window.bridge) throw new Error('Game loader is unavailable');
    bridge.engine = 'unity';
    await bridge.initialize();
    bridge.game.on('visibility_state_changed', state => sendMessageToUnity('OnVisibilityStateChanged', state));
    bridge.platform.on('audio_state_changed', enabled => sendMessageToUnity('OnAudioStateChanged', enabled.toString()));
    bridge.platform.on('pause_state_changed', paused => sendMessageToUnity('OnPauseStateChanged', paused.toString()));
    const instance = await createUnityInstance(canvas, {
      dataUrl: 'Build/SnaketoEat.data.unityweb',
      frameworkUrl: 'Build/SnaketoEat.framework.js',
      codeUrl: 'Build/SnaketoEat.wasm.unityweb',
      streamingAssetsUrl: 'StreamingAssets',
      companyName: 'Argon', productName: 'Snake to Eat', productVersion: '1.0',
      autoSyncPersistentDataPath: true,
      showBanner(message, type) { if (type === 'error') fail(message); },
    }, progress => {
      status.textContent = Math.round(progress * 100) + '%';
      notify('progress', { progress });
    });
    if (failed) return;
    window.unityInstance = instance;
    engineReady = true;
    ready();
  }
  boot().catch(fail);
})();
