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
  "zh-CN": {
    "title": "大家来拼豆 · 小游戏乐园",
    "name": "大家来拼豆",
    "description": "选中相连的同色拼豆，借助暂存区中转，再放回同色底板，完成整幅图案。",
    "pointer": "休闲拼豆 · 鼠标 / 触屏",
    "aria": "大家来拼豆游戏",
    "prepared": "准备开始",
    "loading": "正在加载游戏",
    "ready": "可以开始啦",
    "failed": "加载未完成",
    "restart": "重新加载",
    "fullscreen": "全屏",
    "fullscreenError": "浏览器暂不支持全屏",
    "kicker": "一颗拼豆，一点色彩",
    "coverTitle": "把小小色彩，拼成快乐。",
    "coverCopy": "按画面提示选取相连的同色拼豆，暂存后放回同色底板。",
    "loadingCopy": "正在准备拼豆和图案，请稍等片刻…",
    "loadNote": "首次加载需要一点时间，请稍等片刻。",
    "progress": "游戏加载进度",
    "error": "游戏暂时没能加载成功，请检查连接后重试。",
    "retry": "重新尝试",
    "focusNote": "点击相连的同色拼豆，移入暂存区，再放回对应颜色的底板。",
    "originalLanguage": "游戏内保留原版中文",
    "mobileNote": "纵屏游戏，可使用鼠标或触屏操作；需要更大画面时可切换全屏。",
    "controlsAria": "操作说明",
    "clickKey": "点击",
    "clickHelp": "选取相连的同色拼豆",
    "dragKey": "暂存",
    "dragHelp": "中转后放回同色底板",
    "reloadHelp": "重新加载游戏",
    "languageNotice": "语言选择只改变本页面的说明，不会重新开始正在进行的游戏。",
    "original": "原始页面 ↗"
  },
  "en": {
    "title": "Bead Craft · Little Playground",
    "name": "Bead Craft",
    "description": "Select connected beads of the same color, move them through the holding area, and place them on the matching base to complete each picture.",
    "pointer": "Casual bead puzzles · Mouse / touch",
    "aria": "Bead Craft game",
    "prepared": "Ready to start",
    "loading": "Loading game",
    "ready": "Ready to play",
    "failed": "Loading incomplete",
    "restart": "Reload",
    "fullscreen": "Fullscreen",
    "fullscreenError": "Fullscreen is unavailable",
    "kicker": "A LITTLE BEAD, A LITTLE COLOR",
    "coverTitle": "Small colors. A little joy.",
    "coverCopy": "Follow the prompts to select connected beads, hold them, and place them on the matching base.",
    "loadingCopy": "Preparing the beads and patterns…",
    "loadNote": "The first load may take a moment. Please wait.",
    "progress": "Game loading progress",
    "error": "The game could not load. Check your connection and try again.",
    "retry": "Try again",
    "focusNote": "Select connected beads of the same color, move them to the holding area, then place them on the matching base.",
    "originalLanguage": "Original Chinese game",
    "mobileNote": "A portrait game for mouse or touch. Switch to fullscreen for a larger view.",
    "controlsAria": "How to play",
    "clickKey": "Tap",
    "clickHelp": "Select connected matching beads",
    "dragKey": "Hold",
    "dragHelp": "Move beads to the matching base",
    "reloadHelp": "Reload the game",
    "languageNotice": "Changing language only updates this page and keeps your game running.",
    "original": "Original page ↗"
  }
};
let state = 'prepared';
let statusKey = 'prepared';
let loadTimer;
const t = key => (dictionary[i18n.language] || dictionary['zh-CN'])[key];

function translate() {
  document.title = t('title');
  for (const node of document.querySelectorAll('[data-bead-i18n]')) node.textContent = t(node.dataset.beadI18n);
  for (const [attribute, dataKey] of [['aria-label', 'beadAria'], ['title', 'beadTitle']]) {
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
  if (event.origin !== location.origin || event.source !== frame.contentWindow) return;
  if (event.data?.type === 'bead-craft-error') { fail(); return; }
  if (state !== 'loading') return;
  if (event.data?.type === 'bead-craft-progress') {
    const value = event.data.value;
    if (typeof value !== 'number' || !Number.isFinite(value)) return;
    progress.value = Math.max(progress.value, Math.min(1, Math.max(0, value)));
    progressText.textContent = `${Math.round(progress.value * 100)}%`;
  } else if (event.data?.type === 'bead-craft-ready') {
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
