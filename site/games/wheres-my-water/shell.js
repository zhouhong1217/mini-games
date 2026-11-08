const status = document.querySelector('#load-status');
document.querySelector('#fullscreen').addEventListener('click', async () => {
  const player = document.querySelector('.player');
  try {
    if (document.fullscreenElement) await document.exitFullscreen();
    else await player.requestFullscreen();
  } catch {
    status.hidden = false;
    status.textContent = '此浏览器暂不支持全屏，请调整窗口大小游玩。';
  }
});
const loaded = setInterval(() => {
  const game = window.__localGame;
  if (game?.scene?.getScenes(true).some(scene => scene.sys.isActive() && !scene.sys.isTransitioning() && scene.load?.isReady())) {
    status.hidden = true;
    clearInterval(loaded);
  }
}, 250);
window.addEventListener('error', event => {
  if (event.message) {
    status.hidden = false;
    status.textContent = '游戏加载遇到问题，请刷新页面重试。';
    console.error('Local game:', event.message);
  }
});
