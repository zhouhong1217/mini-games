'use strict';
const frame = document.getElementById('game');
const start = document.getElementById('start');
const restart = document.getElementById('restart');
const cover = document.getElementById('cover');
const status = document.getElementById('status');
const progress = document.getElementById('progress');
const progressText = document.getElementById('progress-text');
const progressPanel = document.getElementById('loading-progress');
const errorDetail = document.getElementById('error-detail');
const i18n = window.PlaygroundI18n;
let state = 'prepared';
let statusKey = 'parking.prepared';
let loadTimer;

function translate() {
  status.textContent = i18n.t(statusKey);
  start.querySelector('.start-label').textContent = i18n.t(state === 'error' ? 'parking.retry' : 'start');
  document.getElementById('cover-copy').textContent = i18n.t(state === 'error' ? 'parking.error' : state === 'loading' ? 'parking.loadingCopy' : 'parking.coverCopy');
}

function fail(message) {
  if (state !== 'loading' && state !== 'ready') return;
  clearTimeout(loadTimer);
  state = 'error';
  statusKey = 'parking.failed';
  cover.hidden = false;
  progressPanel.hidden = true;
  errorDetail.textContent = typeof message === 'string' ? message.slice(0, 500) : '';
  errorDetail.hidden = !errorDetail.textContent;
  start.hidden = false;
  start.disabled = false;
  restart.disabled = false;
  translate();
}

function loadGame() {
  if (state === 'loading') return;
  clearTimeout(loadTimer);
  state = 'loading';
  statusKey = 'parking.loading';
  cover.hidden = false;
  progressPanel.hidden = false;
  progress.value = 0;
  progressText.textContent = '0%';
  errorDetail.hidden = true;
  errorDetail.textContent = '';
  start.hidden = true;
  start.disabled = true;
  restart.disabled = true;
  translate();
  frame.src = 'game/';
  loadTimer = setTimeout(() => fail(i18n.t('parking.timeout')), 180000);
}

start.addEventListener('click', loadGame);
restart.addEventListener('click', loadGame);
window.addEventListener('playground:languagechange', translate);
window.addEventListener('message', event => {
  if (event.origin !== location.origin || event.source !== frame.contentWindow || event.data?.source !== 'parking-local') return;
  if (event.data.type === 'error') {
    fail(event.data.message);
    return;
  }
  if (state !== 'loading') return;
  if (event.data.type === 'progress') {
    const value = event.data.progress;
    if (typeof value !== 'number' || !Number.isFinite(value)) return;
    progress.value = Math.max(progress.value, Math.min(1, Math.max(0, value)));
    progressText.textContent = `${Math.round(progress.value * 100)}%`;
  } else if (event.data.type === 'ready') {
    clearTimeout(loadTimer);
    state = 'ready';
    statusKey = 'parking.ready';
    progress.value = 1;
    progressText.textContent = '100%';
    cover.hidden = true;
    restart.disabled = false;
    translate();
    frame.focus({ preventScroll: true });
  }
});
document.getElementById('fullscreen').addEventListener('click', async () => {
  try {
    if (document.fullscreenElement) await document.exitFullscreen();
    else await document.getElementById('stage').requestFullscreen();
    if (state === 'ready') frame.focus({ preventScroll: true });
  } catch {
    statusKey = 'parking.fullscreenError';
    translate();
  }
});
translate();
start.disabled = false;
