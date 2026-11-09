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
    "title": "穿回古代当首富 · 小游戏乐园",
    "name": "穿回古代当首富",
    "description": "拖动摇杆移动人物，靠近物品自动拾取。建造、补货、收钱，从第一笔铜钱和韭菜小摊开始经营。",
    "pointer": "模拟经营 · 鼠标 / 触屏",
    "aria": "穿回古代当首富游戏",
    "prepared": "准备开始",
    "loading": "正在加载游戏",
    "ready": "可以开始啦",
    "failed": "加载未完成",
    "restart": "重新加载",
    "fullscreen": "全屏",
    "fullscreenError": "浏览器暂不支持全屏",
    "kicker": "从第一笔铜钱开始",
    "coverTitle": "回到古代，开张做生意。",
    "coverCopy": "拖动摇杆移动人物，按指引拾取物品，攒下开摊的第一笔铜钱。",
    "loadingCopy": "正在准备街市和摊位，请稍等片刻…",
    "loadNote": "首次加载需要一点时间，请稍等片刻。",
    "progress": "游戏加载进度",
    "error": "游戏暂时没能加载成功，请检查连接后重试。",
    "retry": "重新尝试",
    "focusNote": "拖动摇杆移动；靠近物品自动拾取，站到标记处建造、补货或收钱。",
    "originalLanguage": "游戏内保留原版中文",
    "mobileNote": "纵屏游戏，可使用鼠标或触屏操作；需要更大画面时可切换全屏。",
    "controlsAria": "操作说明",
    "clickKey": "点击",
    "clickHelp": "升级或领取奖励",
    "dragKey": "拖动",
    "dragHelp": "摇杆控制人物移动",
    "reloadHelp": "重新加载游戏",
    "languageNotice": "语言选择只改变本页面的说明，不会重新开始正在进行的游戏。",
    "original": "原始页面 ↗"
  },
  "en": {
    "title": "Ancient Tycoon · Little Playground",
    "name": "Ancient Tycoon",
    "description": "Drag the joystick to move and walk up to items to pick them up. Build, restock, and collect coins, starting with a small leek stall.",
    "pointer": "Business simulation · Mouse / touch",
    "aria": "Ancient Tycoon game",
    "prepared": "Ready to start",
    "loading": "Loading game",
    "ready": "Ready to play",
    "failed": "Loading incomplete",
    "restart": "Reload",
    "fullscreen": "Fullscreen",
    "fullscreenError": "Fullscreen is unavailable",
    "kicker": "START WITH YOUR FIRST COINS",
    "coverTitle": "A fresh start in an ancient town.",
    "coverCopy": "Drag the joystick to move, follow the prompts to pick up items, and earn your first coins for a market stall.",
    "loadingCopy": "Preparing the town and market stalls…",
    "loadNote": "The first load may take a moment. Please wait.",
    "progress": "Game loading progress",
    "error": "The game could not load. Check your connection and try again.",
    "retry": "Try again",
    "focusNote": "Drag the joystick to move. Pick up nearby items, then stand on marked spots to build, restock, or collect coins.",
    "originalLanguage": "Original Chinese game",
    "mobileNote": "A portrait game for mouse or touch. Switch to fullscreen for a larger view.",
    "controlsAria": "How to play",
    "clickKey": "Tap",
    "clickHelp": "Upgrade or claim rewards",
    "dragKey": "Drag",
    "dragHelp": "Move with the joystick",
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
  for (const node of document.querySelectorAll('[data-tycoon-i18n]')) node.textContent = t(node.dataset.tycoonI18n);
  for (const [attribute, dataKey] of [['aria-label', 'tycoonAria'], ['title', 'tycoonTitle']]) {
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
  if (event.data?.type === 'ancient-tycoon:error') { fail(); return; }
  if (state !== 'loading') return;
  if (event.data?.type === 'ancient-tycoon:progress') {
    const value = event.data.progress;
    if (typeof value !== 'number' || !Number.isFinite(value)) return;
    progress.value = Math.max(progress.value, Math.min(1, Math.max(0, value)));
    progressText.textContent = `${Math.round(progress.value * 100)}%`;
  } else if (event.data?.type === 'ancient-tycoon:ready') {
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
