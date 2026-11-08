const status = document.querySelector('#load-status');
const i18n = window.PlaygroundI18n;
let statusKey = 'water.loading';
const translateStatus = () => { status.textContent = i18n.t(statusKey); };
translateStatus();
window.addEventListener('playground:languagechange', translateStatus);
document.querySelector('#fullscreen').addEventListener('click', async () => {
  const player = document.querySelector('.player');
  try {
    if (document.fullscreenElement) await document.exitFullscreen();
    else await player.requestFullscreen();
  } catch {
    status.hidden = false;
    statusKey = 'water.fullscreenError';
    translateStatus();
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
    statusKey = 'water.error';
    translateStatus();
    console.error('Local game:', event.message);
  }
});
