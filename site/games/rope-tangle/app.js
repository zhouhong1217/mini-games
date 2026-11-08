"use strict";
const frame = document.getElementById('game');
const start = document.getElementById('start');
const restart = document.getElementById('restart');
const cover = document.getElementById('cover');
const status = document.getElementById('status');
const progress = document.getElementById('progress');
const progressText = document.getElementById('progress-text');
const progressPanel = document.getElementById('loading-progress');
const i18n = window.PlaygroundI18n;
const dictionary = {
  'zh-CN': {
    title: '缠绕的绳子 · 小游戏乐园', name: '缠绕的绳子',
    description: '理清交错的绳索，慢慢解开眼前的结。跟随画面提示，试试你的观察与规划。',
    pointer: '鼠标 / 触屏操作', aria: '缠绕的绳子游戏',
    prepared: '准备开始', loading: '正在加载游戏', ready: '可以开始啦', failed: '加载未完成',
    restart: '重新加载', fullscreen: '全屏', fullscreenError: '浏览器暂不支持全屏',
    kicker: '理清线索，解开绳结', coverTitle: '一点耐心，一点巧思。',
    coverCopy: '从一根绳索开始，找到解结的顺序。', loadingCopy: '正在准备绳索和关卡，请稍等片刻…',
    loadNote: '首次加载需要一点时间，请稍等片刻。', progress: '游戏加载进度',
    error: '游戏暂时没能加载成功，请检查连接后重试。', retry: '重新尝试',
    focusNote: '按画面提示点击、拖动，解开缠绕的绳索。', originalLanguage: '游戏内保留原版语言',
    mobileNote: '竖屏游戏。小屏幕可使用全屏，让画面更清楚。', controlsAria: '操作说明',
    click: '点击', select: '选择游戏中的按钮', drag: '拖动', move: '按提示移动绳索',
    reloadHelp: '重新加载游戏', languageNotice: '语言选择只改变本页面的说明，不会重新开始正在进行的游戏。',
    original: '原始页面 ↗'
  },
  en: {
    title: 'Rope Tangle Puzzle · Little Playground', name: 'Rope Tangle Puzzle',
    description: 'Follow each strand and work your way through the knots. Take your time and find a clever order.',
    pointer: 'Mouse / touch controls', aria: 'Rope Tangle Puzzle game',
    prepared: 'Ready to start', loading: 'Loading game', ready: 'Ready to play', failed: 'Loading incomplete',
    restart: 'Reload', fullscreen: 'Fullscreen', fullscreenError: 'Fullscreen is unavailable',
    kicker: 'FOLLOW A STRAND, FIND A WAY', coverTitle: 'A little patience. A clever move.',
    coverCopy: 'Start with one rope and work out the next move.', loadingCopy: 'Preparing the ropes and levels…',
    loadNote: 'The first load may take a moment. Please wait.', progress: 'Game loading progress',
    error: 'The game could not load. Check your connection and try again.', retry: 'Try again',
    focusNote: 'Follow the on-screen prompts to click, drag, and untangle the ropes.', originalLanguage: 'Original in-game language',
    mobileNote: 'A portrait game. On small screens, try fullscreen for a clearer view.', controlsAria: 'How to play',
    click: 'Click', select: 'Choose on-screen buttons', drag: 'Drag', move: 'Move ropes as prompted',
    reloadHelp: 'Reload the game', languageNotice: 'Changing language only updates this page and keeps your game running.',
    original: 'Original page ↗'
  }
};
let state = 'prepared';
let statusKey = 'prepared';
let loadTimer;
const t = key => (dictionary[i18n.language] || dictionary['zh-CN'])[key];

function translate() {
  document.title = t('title');
  for (const node of document.querySelectorAll('[data-rope-i18n]')) node.textContent = t(node.dataset.ropeI18n);
  for (const [attribute, dataKey] of [['aria-label', 'ropeAria'], ['title', 'ropeTitle']]) {
    for (const node of document.querySelectorAll(`[data-${dataKey.replace(/[A-Z]/g, value => '-' + value.toLowerCase())}]`)) {
      node.setAttribute(attribute, t(node.dataset[dataKey]));
    }
  }
  status.textContent = t(statusKey);
  start.querySelector('.start-label').textContent = state === 'error' ? t('retry') : i18n.t('start');
  document.getElementById('cover-copy').textContent = t(state === 'error' ? 'error' : state === 'loading' ? 'loadingCopy' : 'coverCopy');
}

function fail() {
  if (state !== 'loading' && state !== 'ready') return;
  clearTimeout(loadTimer);
  state = 'error';
  statusKey = 'failed';
  cover.hidden = false;
  progressPanel.hidden = true;
  start.hidden = false;
  start.disabled = false;
  restart.disabled = false;
  translate();
}

function loadGame() {
  if (state === 'loading') return;
  clearTimeout(loadTimer);
  state = 'loading';
  statusKey = 'loading';
  cover.hidden = false;
  progressPanel.hidden = false;
  progress.value = 0;
  progressText.textContent = '0%';
  start.hidden = true;
  start.disabled = true;
  restart.disabled = true;
  translate();
  frame.src = 'game/';
  loadTimer = setTimeout(fail, 180000);
}

start.addEventListener('click', loadGame);
restart.addEventListener('click', loadGame);
window.addEventListener('playground:languagechange', translate);
window.addEventListener('message', event => {
  if (event.origin !== location.origin || event.source !== frame.contentWindow || event.data?.source !== 'rope-tangle-local') return;
  if (event.data.type === 'error') {
    fail();
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
    statusKey = 'ready';
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
    statusKey = 'fullscreenError';
    translate();
  }
});
translate();
start.disabled = false;
