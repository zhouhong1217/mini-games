'use strict';
const frame = document.getElementById('game');
const start = document.getElementById('start');
const restart = document.getElementById('restart');
const cover = document.getElementById('cover');
const status = document.getElementById('status');
const copy = document.getElementById('cover-copy');
const progress = document.getElementById('progress');
const progressPanel = document.getElementById('loading-progress');
let state = 'prepared';
let loadTimer;

// 游戏保持中文；返回首页时保留从首页带来的语言选择。
const normalize = value => typeof value === 'string' && /^en(?:-|$)/i.test(value) ? 'en'
  : typeof value === 'string' && /^zh(?:-|$)/i.test(value) ? 'zh-CN' : null;
let savedLanguage;
try { savedLanguage = normalize(localStorage.getItem('mini-games-language')); } catch {}
const returnLanguage = normalize(new URL(location.href).searchParams.get('lang')) || savedLanguage || 'zh-CN';
const home = new URL('../../', location.href);
home.searchParams.set('lang', returnLanguage);
for (const link of document.querySelectorAll('[data-home-link]')) link.href = home.href;

function fail() {
  if (state !== 'loading' && state !== 'ready') return;
  clearTimeout(loadTimer);
  state = 'error';
  status.textContent = '加载未完成';
  copy.textContent = '游戏暂时没能加载成功，请重新尝试。';
  cover.hidden = false;
  progressPanel.hidden = true;
  start.textContent = '重新尝试 ↗';
  start.hidden = false;
  start.disabled = false;
  restart.disabled = false;
}

function loadGame() {
  if (state === 'loading') return;
  clearTimeout(loadTimer);
  state = 'loading';
  status.textContent = '正在加载游戏';
  copy.textContent = '正在准备护理工具和妆容，请稍等片刻…';
  cover.hidden = false;
  progressPanel.hidden = false;
  progress.value = 0;
  document.getElementById('progress-text').textContent = '0%';
  start.hidden = true;
  start.disabled = true;
  restart.disabled = true;
  frame.src = 'game/';
  loadTimer = setTimeout(fail, 180000);
}

start.addEventListener('click', loadGame);
restart.addEventListener('click', loadGame);
window.addEventListener('message', event => {
  if (event.origin !== location.origin || event.source !== frame.contentWindow || event.data?.source !== 'makeup-local') return;
  if (event.data.type === 'error') { fail(); return; }
  if (state !== 'loading') return;
  if (event.data.type === 'progress') {
    const value = event.data.progress;
    if (typeof value !== 'number' || !Number.isFinite(value)) return;
    progress.value = Math.max(progress.value, Math.min(1, Math.max(0, value)));
    document.getElementById('progress-text').textContent = `${Math.round(progress.value * 100)}%`;
  } else if (event.data.type === 'ready') {
    clearTimeout(loadTimer);
    state = 'ready';
    status.textContent = '可以开始啦';
    cover.hidden = true;
    restart.disabled = false;
    frame.focus({ preventScroll: true });
  }
});
document.getElementById('fullscreen').addEventListener('click', async () => {
  try {
    if (document.fullscreenElement) await document.exitFullscreen();
    else await document.getElementById('stage').requestFullscreen();
    if (state === 'ready') frame.focus({ preventScroll: true });
  } catch { status.textContent = '此浏览器暂不支持全屏，请调整窗口大小游玩。'; }
});
start.disabled = false;
