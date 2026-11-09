// 独立本地平台；可在此集中接入新的广告供应商。
(function () {
  'use strict';
  var namespace = 'yarn-unravel-4399-v1:', provider = null, initialized = false, queue = Promise.resolve(), count = 0;
  var scores = {}, memory = new Map();
  var storage = {
    getItem: function (key) { try { return localStorage.getItem(namespace + key); } catch (_) { return memory.has(key) ? memory.get(key) : null; } },
    setItem: function (key, value) { memory.set(key, String(value)); try { localStorage.setItem(namespace + key, String(value)); } catch (_) {} },
    removeItem: function (key) { memory.delete(key); try { localStorage.removeItem(namespace + key); } catch (_) {} }
  };
  function initialize() { if (initialized) return; initialized = true; try { scores = JSON.parse(storage.getItem('local-rank') || '{}'); } catch (_) { scores = {}; } }
  function resume() { if (window.cc) cc.director.resume(); }
  function showRankPanel() {
    initialize();
    var previous = document.getElementById('local-rank');
    if (previous) return previous.showModal();
    var dialog = document.createElement('dialog'); dialog.id = 'local-rank';
    var title = document.createElement('h2'); title.textContent = '本地成绩'; dialog.appendChild(title);
    [[1368, '闯关记录'], [1369, '连胜记录'], [1370, '每日挑战']].forEach(function (row) {
      var item = document.createElement('p'), value = document.createElement('strong'); item.textContent = row[1]; value.textContent = String(Number(scores[row[0]]) || 0); item.appendChild(value); dialog.appendChild(item);
    });
    var note = document.createElement('small'); note.textContent = '成绩保存在当前浏览器。'; dialog.appendChild(note);
    var close = document.createElement('button'); close.textContent = '返回游戏'; close.addEventListener('click', function () { dialog.close(); }); dialog.appendChild(close);
    dialog.addEventListener('close', function () { dialog.remove(); }); document.body.appendChild(dialog); dialog.showModal();
  }
  function showRewarded(success, failure, placement) {
    var task = function () {
      if (window.cc) cc.director.pause();
      return new Promise(function (resolve) { setTimeout(resolve, 100); }).then(function () {
        return provider && typeof provider.rewarded === 'function' ? provider.rewarded({ placement: placement }) : true;
      }).then(function (completed) {
        resume();
        if (completed !== false) { if (typeof success === 'function') success(); }
        else if (typeof failure === 'function') failure();
      }, function () { resume(); if (typeof failure === 'function') failure(); });
    };
    var result = queue.then(task);
    queue = result.catch(function () { resume(); });
    return result;
  }
  window.YarnPlatform = {
    storage: storage,
    initialize: initialize,
    setProvider: function (value) { provider = value || null; },
    showRewarded: showRewarded,
    showInterstitial: function () { var show = count++ % 3 === 0; if (show && provider && typeof provider.interstitial === 'function') return provider.interstitial(); },
    share: function () {},
    showRankPanel: showRankPanel,
    submitRank: function (rankId, score) { initialize(); scores[rankId] = Math.max(Number(scores[rankId]) || 0, Number(score) || 0); storage.setItem('local-rank', JSON.stringify(scores)); }
  };
})();
