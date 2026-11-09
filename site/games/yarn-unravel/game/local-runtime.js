(function () {
  'use strict';
  function send(type, extra) { if (window.parent !== window) window.parent.postMessage(Object.assign({ type: 'yarn-unravel:' + type }, extra), location.origin); }
  var done = false, start = Date.now();
  window.YarnRuntime = { progress: function (value) { send('progress', { progress: value }); } };
  window.addEventListener('error', function (event) { if (event.error || event.target && event.target.tagName === 'SCRIPT') send('error'); }, true);
  window.addEventListener('unhandledrejection', function () { send('error'); });
  var timer = setInterval(function () {
    if (done) return clearInterval(timer);
    try {
      if (window.__require && __require('MainUI').MainUI.Inst) {
        done = true; clearInterval(timer); send('ready');
      } else { send('progress', { progress: Math.min(.94, .45 + (Date.now() - start) / 120000) }); }
    } catch (_) {}
  }, 200);
})();
