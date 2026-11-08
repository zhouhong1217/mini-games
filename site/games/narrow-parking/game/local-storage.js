// 只隔离本游戏的 SDK 数据；不改变浏览器全局 Storage 或其他游戏的数据。
(() => {
  'use strict';
  const prefix = 'narrow-parking:';
  window.ParkingStorage = {
    getItem(key) { return localStorage.getItem(prefix + key); },
    setItem(key, value) { localStorage.setItem(prefix + key, value); },
    removeItem(key) { localStorage.removeItem(prefix + key); },
    clear() {
      for (const key of Object.keys(localStorage)) {
        if (key.startsWith(prefix)) localStorage.removeItem(key);
      }
    },
    syncUnityGameData() {}, // localStorage 同步写入；Unity IDBFS 另由原引擎持久化。
  };
})();
