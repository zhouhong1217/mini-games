'use strict';
const frame = document.getElementById('game');
const start = document.getElementById('start');
const cover = document.getElementById('cover');
const status = document.getElementById('status');
const home = document.getElementById('home');
const i18n = window.PlaygroundI18n;
let loaded = false;
let statusKey = 'cut.prepared';
let startKey = 'start';
let saveKey = 'cut.save';
const translate = () => {
  status.textContent = i18n.t(statusKey);
  start.querySelector('.start-label').textContent = i18n.t(startKey);
  document.getElementById('save-status').textContent = i18n.t(saveKey);
};
const gameURL = () => 'game/?lang=' + encodeURIComponent(i18n.language);
translate();
window.addEventListener('playground:languagechange', () => {
  if (loaded) {
    statusKey = 'cut.loading';
    home.disabled = true;
  }
  translate();
});
start.addEventListener('click', () => {
  if (loaded) return;
  loaded = true;
  start.disabled = true;
  startKey = 'cut.opening';
  statusKey = 'cut.loading';
  translate();
  frame.src = gameURL();
});
frame.addEventListener('load', () => { if (loaded) frame.focus(); });
window.addEventListener('message', event => {
  if (event.origin !== location.origin || event.source !== frame.contentWindow || event.data?.source !== 'ctr-local') return;
  const { type } = event.data;
  if (type === 'ready') {
    cover.hidden = true;
    home.disabled = false;
    statusKey = 'cut.ready';
    frame.focus();
  }
  if (type === 'gameStart' || type === 'gameResume') statusKey = 'cut.playing';
  if (type === 'gameComplete') statusKey = 'cut.complete';
  if (type === 'gamePause') statusKey = 'cut.paused';
  if (type === 'storage-unavailable') saveKey = 'cut.saveUnavailable';
  translate();
});
home.addEventListener('click', () => {
  home.disabled = true;
  statusKey = 'cut.returning';
  translate();
  frame.src = gameURL();
  frame.focus();
});
document.getElementById('fullscreen').addEventListener('click', async () => {
  try {
    if (document.fullscreenElement) await document.exitFullscreen();
    else await document.getElementById('stage').requestFullscreen();
    if (loaded) frame.focus();
  } catch {
    statusKey = 'cut.fullscreenError';
    translate();
  }
});
