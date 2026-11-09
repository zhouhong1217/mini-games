'use strict';
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
    title: '双人厨房 · 小游戏乐园', name: '双人厨房',
    description: '一起走进厨房，选择双人合作或双人对决。按画面提示制作餐点，招待等候的客人。',
    pointer: '同屏双人 · 键盘操作', aria: '双人厨房游戏',
    prepared: '准备开始', loading: '正在加载游戏', ready: '可以开始啦', failed: '加载未完成',
    restart: '重新加载', fullscreen: '全屏', fullscreenError: '浏览器暂不支持全屏',
    kicker: '厨房开张，一起上菜', coverTitle: '两位主厨，准备开工。',
    coverCopy: '选择合作或对决，和朋友一起挑战忙碌的厨房。', loadingCopy: '正在准备厨房和餐点，请稍等片刻…',
    loadNote: '首次加载需要一点时间，请稍等片刻。', progress: '游戏加载进度',
    error: '游戏暂时没能加载成功，请检查连接后重试。', retry: '重新尝试',
    focusNote: '选择模式和角色后开始；点击游戏画面，让键盘操作生效。', originalLanguage: '游戏内保留原版中文',
    mobileNote: '横屏双人游戏，建议使用电脑键盘；小屏幕可尝试横屏或全屏。', controlsAria: '操作说明',
    playerOne: '玩家 1 移动', playerTwo: '玩家 2 移动', reloadHelp: '重新加载游戏',
    languageNotice: '语言选择只改变本页面的说明，不会重新开始正在进行的游戏。', original: '原始页面 ↗'
  },
  en: {
    title: 'Double Kitchen · Little Playground', name: 'Double Kitchen',
    description: 'Team up or compete with a friend. Follow the on-screen prompts to prepare food and serve waiting customers.',
    pointer: 'Local multiplayer · Keyboard', aria: 'Double Kitchen game',
    prepared: 'Ready to start', loading: 'Loading game', ready: 'Ready to play', failed: 'Loading incomplete',
    restart: 'Reload', fullscreen: 'Fullscreen', fullscreenError: 'Fullscreen is unavailable',
    kicker: 'OPEN THE KITCHEN, SERVE TOGETHER', coverTitle: 'Two chefs. Time to cook.',
    coverCopy: 'Choose co-op or versus and take on a busy kitchen with a friend.', loadingCopy: 'Preparing the kitchen and food…',
    loadNote: 'The first load may take a moment. Please wait.', progress: 'Game loading progress',
    error: 'The game could not load. Check your connection and try again.', retry: 'Try again',
    focusNote: 'Choose a mode and characters, then click inside the game to use the keyboard.', originalLanguage: 'Original Chinese game',
    mobileNote: 'A landscape game for two players. A computer keyboard is recommended; try landscape or fullscreen on a small screen.', controlsAria: 'How to play',
    playerOne: 'Move player 1', playerTwo: 'Move player 2', reloadHelp: 'Reload the game',
    languageNotice: 'Changing language only updates this page and keeps your game running.', original: 'Original page ↗'
  }
};
let state = 'prepared';
let statusKey = 'prepared';
let loadTimer;
const t = key => (dictionary[i18n.language] || dictionary['zh-CN'])[key];

function translate() {
  document.title = t('title');
  for (const node of document.querySelectorAll('[data-kitchen-i18n]')) node.textContent = t(node.dataset.kitchenI18n);
  for (const [attribute, dataKey] of [['aria-label', 'kitchenAria'], ['title', 'kitchenTitle']]) {
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
  frame.src = 'game/index.html';
  loadTimer = setTimeout(fail, 180000);
}

start.addEventListener('click', loadGame);
restart.addEventListener('click', loadGame);
window.addEventListener('playground:languagechange', translate);
window.addEventListener('message', event => {
  if (event.origin !== location.origin || event.source !== frame.contentWindow || event.data?.game !== 'double-kitchen') return;
  if (event.data.type === 'error') { fail(); return; }
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
