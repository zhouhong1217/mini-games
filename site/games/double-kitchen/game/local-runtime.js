// 本地启动和就绪通知；仅在原版 Menu 场景真正启动后移除外壳加载层。
(() => {
  'use strict';
  const notify = data => {
    if (parent !== window) parent.postMessage({ game: 'double-kitchen', ...data }, location.origin);
  };
  let ready = false;
  let failed = false;
  const fail = message => {
    if (failed) return;
    failed = true;
    const text = String(message || '游戏加载失败，请重新加载。');
    notify({ type: 'error', message: text });
    const output = document.createElement('p');
    output.textContent = text;
    output.setAttribute('role', 'alert');
    Object.assign(output.style, { position: 'absolute', inset: '40% 10% auto', padding: '20px', color: '#fff', background: '#4b2924', textAlign: 'center', zIndex: 100 });
    document.body.append(output);
  };
  window.DoubleKitchenRuntime = Object.freeze({
    progress(value) { if (!ready && !failed) notify({ type: 'progress', progress: Math.min(.98, Math.max(0, Number(value) || 0)) }); },
    fail,
  });
  window.addEventListener('error', event => {
    if (event.target instanceof HTMLScriptElement) fail('游戏脚本加载失败。');
    else if (event.message) fail(event.message);
  }, true);
  window.addEventListener('unhandledrejection', event => fail(event.reason?.message || event.reason));
  const canvas = document.getElementById('GameCanvas');
  canvas.addEventListener('pointerdown', () => canvas.focus());
  canvas.addEventListener('keydown', event => {
    if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', ' '].includes(event.key)) event.preventDefault();
  });
  cc.director.on(cc.Director.EVENT_AFTER_SCENE_LAUNCH, () => {
    if (cc.director.getScene()?.name !== 'Menu' || ready || failed) return;
    ready = true;
    canvas.focus();
    notify({ type: 'progress', progress: 1 });
    notify({ type: 'ready' });
  });
  window.boot();
})();
