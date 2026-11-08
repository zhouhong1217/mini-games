'use strict';
const frame = document.getElementById('game');
const start = document.getElementById('start');
const cover = document.getElementById('cover');
const status = document.getElementById('status');
const home = document.getElementById('home');
let loaded = false;
start.addEventListener('click', () => {
  if (loaded) return;
  loaded = true;
  start.disabled = true;
  start.textContent = '正在打开…';
  status.textContent = '正在加载游戏';
  frame.src = 'game/';
});
frame.addEventListener('load', () => {if (loaded) frame.focus();});
window.addEventListener('message', event => {
  if (event.origin !== location.origin || event.source !== frame.contentWindow || event.data?.source !== 'ctr-local') return;
  const {type} = event.data;
  if (type === 'ready') {
    cover.hidden = true;
    home.disabled = false;
    status.textContent = '可以开始啦';
    frame.focus();
  }
  if (type === 'gameStart') status.textContent = '糖果冒险进行中';
  if (type === 'gameComplete') status.textContent = '太棒了，关卡完成！';
  if (type === 'gamePause') status.textContent = '休息一下';
  if (type === 'gameResume') status.textContent = '糖果冒险进行中';
  if (type === 'storage-unavailable') document.getElementById('save-status').textContent = '浏览器未允许保存进度';
});
home.addEventListener('click', () => {
  home.disabled = true;
  status.textContent = '正在返回主菜单';
  frame.src = 'game/';
  frame.focus();
});
document.getElementById('fullscreen').addEventListener('click', async () => {
  try {
    if (document.fullscreenElement) await document.exitFullscreen();
    else await document.getElementById('stage').requestFullscreen();
    if (loaded) frame.focus();
  } catch {status.textContent = '浏览器暂不支持全屏';}
});
