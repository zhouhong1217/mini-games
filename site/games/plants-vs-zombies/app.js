const frame = document.querySelector('#game');
const cover = document.querySelector('#cover');
const start = document.querySelector('#start');
const restart = document.querySelector('#restart');
const status = document.querySelector('#status');
const i18n = window.PlaygroundI18n;
const words = {
  'zh-CN': { name:'植物大战僵尸',description:'收集阳光，种下植物，守住你的小院。让豌豆射手和向日葵一起迎战僵尸。',restart:'重新加载',fullscreen:'全屏游玩',kicker:'今天，也要守护小院。',coverTitle:'种下阳光，守住快乐。',start:'开始游戏 ↗',loadNote:'首次加载约 29 MB，请稍等片刻。',save:'关卡进度保存在当前浏览器中。',click:'点击',plant:'选择植物卡片，再点击草地种植。',sun:'点击收集阳光，用来种下更多植物。',menu:'暂停、重开本关或返回游戏菜单。',note:'游戏内保留原版英文。小屏幕建议横屏或全屏游玩；切换页面语言不会重启游戏。',original:'原始页面 ↗',prepared:'准备开始',loading:'正在准备植物和小院…',ready:'可以开始啦',error:'加载未完成，请检查连接后重试。',retry:'重新尝试 ↗',copy:'从一株豌豆射手开始，建立你的植物防线。',fullscreenError:'浏览器暂不支持全屏' },
  en: { name:'Plants vs. Zombies',description:'Gather sunshine, grow your plants, and protect your garden. Team up with peashooters and sunflowers to stop the zombies.',restart:'Reload',fullscreen:'Fullscreen',kicker:'A LITTLE SUNSHINE. A BRAVE GARDEN.',coverTitle:'Grow your garden. Hold your ground.',start:'Start game ↗',loadNote:'The first load is about 29 MB. Please give it a moment.',save:'Level progress is saved in this browser.',click:'Click',plant:'Choose a seed packet, then click the lawn to plant.',sun:'Collect sunshine to grow more plants.',menu:'Pause, restart the level, or return to the game menu.',note:'Original English game. On small screens, try landscape or fullscreen. Changing this page’s language keeps your game running.',original:'Original page ↗',prepared:'Ready to start',loading:'Preparing the plants and garden…',ready:'Ready to play',error:'Loading failed. Check your connection and try again.',retry:'Try again ↗',copy:'Start with a peashooter and build your plant defense.',fullscreenError:'Fullscreen is unavailable' }
};
let state = 'prepared', timer, generation = 0;
const t = key => (words[i18n.language] || words['zh-CN'])[key];
function translate() {
  document.title = t('name') + ' · ' + i18n.t('playground');
  for (const node of document.querySelectorAll('[data-pvz]')) node.textContent = t(node.dataset.pvz);
  status.textContent = t(state);
  start.textContent = t(state === 'error' ? 'retry' : 'start');
  document.querySelector('#cover-copy').textContent = t(state === 'error' ? 'error' : state === 'loading' ? 'loading' : 'copy');
}
function fail() {
  clearTimeout(timer); state = 'error'; cover.hidden = false; start.hidden = false; start.disabled = false; restart.disabled = false; translate();
}
function load() {
  if (state === 'loading') return;
  state = 'loading'; generation++; cover.hidden = false; start.hidden = true; restart.disabled = true; translate();
  frame.src = 'game/?run=' + generation;
  clearTimeout(timer); timer = setTimeout(fail, 90000);
}
window.addEventListener('message', event => {
  if (event.origin !== location.origin || event.source !== frame.contentWindow || event.data?.game !== 'plants-vs-zombies' || event.data.run !== String(generation)) return;
  if (event.data.type === 'error') return fail();
  if (event.data.type === 'ready' && state === 'loading') {
    clearTimeout(timer); state = 'ready'; cover.hidden = true; restart.disabled = false; translate(); frame.focus();
  }
});
start.addEventListener('click', load); restart.addEventListener('click', load);
document.querySelector('#fullscreen').addEventListener('click', async () => {
  try { if (document.fullscreenElement) await document.exitFullscreen(); else await document.querySelector('#stage').requestFullscreen(); }
  catch { status.textContent = t('fullscreenError'); }
});
window.addEventListener('playground:languagechange', translate); translate();
