/* 站点语言与游戏进度使用独立的存储键。 */
(() => {
  'use strict';
  const storageKey = 'mini-games-language';
  const dictionary = {
    'zh-CN': {
      languageLabel: '语言', navigation: '站点导航', playground: '小游戏乐园', back: '← 返回小游戏乐园',
      languageNotice: '更改语言会返回游戏主菜单，已完成关卡会保留。',
      fullscreen: '全屏游玩', copyright: '原游戏及素材版权归各自权利人所有', start: '开始游戏',
      'home.title': '小游戏乐园 · 玩一会儿，刚刚好',
      'home.description': '给自己一点游玩的时间。小鳄鱼爱洗澡、割绳子、窄道停车、化妆解压，挑一款小游戏，开始今天的小冒险。',
      'home.skip': '跳到游戏列表', 'home.aria': '小游戏乐园首页', 'home.pick': '挑个游戏',
      'home.eyebrow': '给自己一点游玩的时间', 'home.headline1': '玩一会儿，', 'home.headline2': '刚刚好。',
      'home.intro1': '挖一条水渠，剪一根绳子，停好一辆车。', 'home.intro2': '把忙碌放一边，开始今天的小冒险。',
      'home.gamesTitle': '今天，玩点什么？', 'home.loadingCount': '游戏加载中', 'home.loading': '正在准备小游戏…',
      'home.count': '{count} 款小游戏', 'home.empty': '新的小游戏正在路上，过会儿再来看看。',
      'home.failedCount': '稍后再试', 'home.failed': '游戏列表暂时没有加载成功。', 'home.retry': '刷新页面重试',
      'home.noteTitle': '轻松开玩，随时回来。',
      'home.note': '点击卡片即可进入游戏。支持存档的游戏将进度保存在当前浏览器中，换设备或清除网站数据后不会同步。',
      'home.footer': '小游戏乐园 · 玩一会儿，刚刚好',
      "parking.title": "窄道停车 · 小游戏乐园",
      "parking.name": "窄道停车",
      "parking.description": "慢一点，稳一点。穿过狭窄路段，把车停进刚刚好的位置。",
      "parking.desktop": "桌面键盘游玩",
      "parking.aria": "窄道停车游戏",
      "parking.prepared": "准备开始",
      "parking.loading": "正在加载游戏",
      "parking.ready": "可以开始啦",
      "parking.failed": "加载未完成",
      "parking.restart": "重新加载",
      "parking.fullscreen": "全屏",
      "parking.fullscreenError": "浏览器暂不支持全屏",
      "parking.kicker": "给自己留一点转弯的空间",
      "parking.coverTitle": "这一把，稳稳停好。",
      "parking.coverCopy": "发动引擎，试试你的驾驶与停车技巧。",
      "parking.loadingCopy": "正在准备车辆和道路，请稍等片刻…",
      "parking.loadNote": "首次加载约 50 MB，请稍等片刻。",
      "parking.progress": "游戏加载进度",
      "parking.error": "游戏暂时没能加载成功，请重试。",
      "parking.retry": "重新尝试",
      "parking.timeout": "加载时间较长，请检查连接后重试。",
      "parking.focusNote": "游戏开始后，点击画面即可使用键盘操作。",
      "parking.originalLanguage": "游戏内保留原版语言",
      "parking.mobileNote": "本游戏需要实体键盘，请在电脑上游玩。",
      "parking.controlsAria": "操作说明",
      "parking.drive": "驾驶与转向",
      "parking.brake": "刹车",
      "parking.camera": "切换视角",
      "parking.gear": "换挡",
      "parking.languageNotice": "语言选择只改变本页面的说明，不会重新开始正在进行的游戏。",
      "parking.original": "原始页面 ↗",
      'water.title': '小鳄鱼爱洗澡 · 小游戏乐园', 'water.name': '小鳄鱼爱洗澡',
      'water.tagline': '一条水渠，一点快乐。', 'water.eyebrow': '小顽皮的洗澡时间',
      'water.aria': '小鳄鱼爱洗澡游戏', 'water.loading': '正在装满水池…', 'water.how': '怎么玩',
      'water.instructions': '按住鼠标拖动，挖开泥土，把清水引进浴缸。别忘了收集小鸭子！',
      'water.save': '进度会保存在这个浏览器中。',
      'water.fullscreenError': '此浏览器暂不支持全屏，请调整窗口大小游玩。',
      'water.error': '游戏加载遇到问题，请刷新页面重试。',
      'cut.title': '割绳子 · 糖果时间', 'cut.name': '割绳子', 'cut.brand': '糖果时间', 'cut.brandAria': '糖果时间首页',
      'cut.description': '剪断绳索，收集星星。把糖果送进 Om Nom 的嘴里。',
      'cut.chapters': '主题章节', 'cut.levels': '趣味关卡', 'cut.aria': '割绳子游戏',
      'cut.prepared': '准备开始', 'cut.opening': '正在打开…', 'cut.loading': '正在加载游戏', 'cut.ready': '可以开始啦',
      'cut.playing': '糖果冒险进行中', 'cut.complete': '太棒了，关卡完成！', 'cut.paused': '休息一下',
      'cut.returning': '正在返回主菜单', 'cut.fullscreenError': '浏览器暂不支持全屏',
      'cut.menu': '主菜单', 'cut.menuTitle': '返回游戏主菜单', 'cut.fullscreen': '全屏',
      'cut.kicker': '一颗糖果，一场小冒险', 'cut.coverTitle': 'Om Nom 在等你！',
      'cut.coverCopy': '动动手指，开启今天的糖果时间。', 'cut.startNote': '鼠标拖动 / 触屏滑动 · 进度自动保存',
      'cut.instructions': '按住鼠标划过绳索即可剪断', 'cut.save': '◉ 存档保存在当前浏览器',
      'cut.saveUnavailable': '浏览器未允许保存进度', 'cut.tipsAria': '玩法指南',
      'cut.tip1Title': '看准时机，轻轻一剪', 'cut.tip1': '划过绳索，让糖果借助重力和摆动前进。',
      'cut.tip2Title': '沿途的星星也别错过', 'cut.tip2': '规划糖果路线，挑战每一关的三星成绩。',
      'cut.tip3Title': '喂饱这个绿色小家伙', 'cut.tip3': '避开尖刺，利用气泡、气囊和更多机关。',
      'cut.controls': '音效、音乐、重玩和暂停按钮位于游戏画面右上角。',
      'cut.footer': '给生活加一颗糖。', 'cut.original': '原始页面 ↗', 'cut.copyright': '原游戏 © ZeptoLab'
    },
    en: {
      languageLabel: 'Language', navigation: 'Site navigation', playground: 'Little Playground', back: '← Back to playground',
      languageNotice: 'Changing language returns to the game menu. Completed levels are saved.',
      fullscreen: 'Fullscreen', copyright: 'Original games and assets belong to their respective rights holders.', start: 'Play now',
      'home.title': 'Little Playground · A little break, a little joy',
      'home.description': "Take a little break with puzzles, parking, and a relaxing makeover. Pick a game and start a small adventure.",
      'home.skip': 'Skip to games', 'home.aria': 'Little Playground home', 'home.pick': 'Pick a game',
      'home.eyebrow': 'MAKE A LITTLE TIME TO PLAY', 'home.headline1': 'A little break,', 'home.headline2': 'a little joy.',
      'home.intro1': 'Dig a waterway. Cut a rope. Park a car.', 'home.intro2': 'Set your busy day aside for a small adventure.',
      'home.gamesTitle': 'What shall we play?', 'home.loadingCount': 'Loading games', 'home.loading': 'Getting the games ready…',
      'home.count': '{count} games', 'home.empty': 'More games are on the way. Check back soon.',
      'home.failedCount': 'Try again soon', 'home.failed': 'The game list could not be loaded. ', 'home.retry': 'Reload and try again',
      'home.noteTitle': 'Easy to start. Always here to return to.',
      'home.note': 'Choose a card to play. Games with saves keep progress in this browser; it does not sync across devices or after clearing site data.',
      'home.footer': 'Little Playground · A little break, a little joy',
      "parking.title": "Narrow Parking · Little Playground",
      "parking.name": "Narrow Parking",
      "parking.description": "Slow down, find your line, and ease into the perfect parking spot.",
      "parking.desktop": "Play with a keyboard",
      "parking.aria": "Narrow Parking game",
      "parking.prepared": "Ready to start",
      "parking.loading": "Loading game",
      "parking.ready": "Ready to play",
      "parking.failed": "Could not load",
      "parking.restart": "Reload game",
      "parking.fullscreen": "Fullscreen",
      "parking.fullscreenError": "Fullscreen is unavailable in this browser",
      "parking.kicker": "LEAVE A LITTLE ROOM TO TURN",
      "parking.coverTitle": "Find your spot. Take your time.",
      "parking.coverCopy": "Start the engine and put your parking skills to the test.",
      "parking.loadingCopy": "Getting the cars and roads ready. One moment…",
      "parking.loadNote": "The first load is about 50 MB. Please give it a moment.",
      "parking.progress": "Game loading progress",
      "parking.error": "The game could not load. Please try again.",
      "parking.retry": "Try again",
      "parking.timeout": "Loading is taking a while. Check your connection and try again.",
      "parking.focusNote": "Once the game starts, click the screen to use your keyboard.",
      "parking.originalLanguage": "Original in-game language",
      "parking.mobileNote": "This game needs a physical keyboard. Please play on a computer.",
      "parking.controlsAria": "Keyboard controls",
      "parking.drive": "Drive and steer",
      "parking.brake": "Brake",
      "parking.camera": "Change camera",
      "parking.gear": "Change gear",
      "parking.languageNotice": "Language changes only affect this page. Your current game keeps running.",
      "parking.original": "Original page ↗",
      'water.title': "Where’s My Water? · Little Playground", 'water.name': "Where’s My Water?",
      'water.tagline': 'A little water, a little joy.', 'water.eyebrow': 'TIME FOR SWAMPY’S BATH',
      'water.aria': "Where’s My Water? game", 'water.loading': 'Filling the pool…', 'water.how': 'How to play',
      'water.instructions': 'Click and drag to dig through the dirt and guide clean water into the bathtub. Collect the ducks along the way!',
      'water.save': 'Your progress is saved in this browser.',
      'water.fullscreenError': 'Fullscreen is unavailable in this browser. Resize the window to play.',
      'water.error': 'The game could not load. Please refresh and try again.',
      'cut.title': 'Cut the Rope · Candy Time', 'cut.name': 'Cut the Rope', 'cut.brand': 'Candy Time', 'cut.brandAria': 'Candy Time home',
      'cut.description': 'Cut the ropes, collect the stars, and deliver the candy to Om Nom.',
      'cut.chapters': 'chapters', 'cut.levels': 'levels', 'cut.aria': 'Cut the Rope game',
      'cut.prepared': 'Ready to start', 'cut.opening': 'Opening…', 'cut.loading': 'Loading game', 'cut.ready': 'Ready to play',
      'cut.playing': 'Candy adventure in progress', 'cut.complete': 'Great job! Level complete!', 'cut.paused': 'Taking a break',
      'cut.returning': 'Returning to the menu', 'cut.fullscreenError': 'Fullscreen is unavailable in this browser',
      'cut.menu': 'Menu', 'cut.menuTitle': 'Return to the game menu', 'cut.fullscreen': 'Fullscreen',
      'cut.kicker': 'A LITTLE CANDY, A LITTLE ADVENTURE', 'cut.coverTitle': 'Om Nom is waiting!',
      'cut.coverCopy': 'Make the first cut and start a sweet adventure.', 'cut.startNote': 'Drag with a mouse / swipe to play · Progress saved automatically',
      'cut.instructions': 'Click and drag across a rope to cut it', 'cut.save': '◉ Progress saved in this browser',
      'cut.saveUnavailable': 'This browser could not save your progress', 'cut.tipsAria': 'How to play',
      'cut.tip1Title': 'Wait for the moment. Make the cut.', 'cut.tip1': 'Cut through a rope and let gravity and momentum do the rest.',
      'cut.tip2Title': 'Catch the stars along the way', 'cut.tip2': 'Plan the candy’s route and aim for three stars on every level.',
      'cut.tip3Title': 'Feed the little green monster', 'cut.tip3': 'Avoid spikes and make use of bubbles, air cushions, and more.',
      'cut.controls': 'Sound, music, restart, and pause controls are in the top-right corner of the game.',
      'cut.footer': 'Add a little sweetness to your day.', 'cut.original': 'Original page ↗', 'cut.copyright': 'Original game © ZeptoLab'
    }
  };
  const normalize = value => {
    if (typeof value !== 'string') return null;
    if (/^zh(?:-|$)/i.test(value)) return 'zh-CN';
    if (/^en(?:-|$)/i.test(value)) return 'en';
    return null;
  };
  let saved;
  try { saved = normalize(localStorage.getItem(storageKey)); } catch {}
  const requested = normalize(new URL(location.href).searchParams.get('lang'));
  const preferred = (navigator.languages || [navigator.language]).map(normalize).find(Boolean);
  let language = requested || saved || preferred || 'zh-CN';
  if (requested) { try { localStorage.setItem(storageKey, language); } catch {} }
  document.documentElement.lang = language;

  function t(key, params = {}) {
    const value = dictionary[language][key] ?? dictionary['zh-CN'][key] ?? key;
    return value.replace(/\{(\w+)\}/g, (match, name) => params[name] ?? match);
  }
  function withLanguage(href) {
    const url = new URL(href, location.href);
    url.searchParams.set('lang', language);
    return url.href;
  }
  function apply() {
    document.documentElement.lang = language;
    const titleKey = document.body?.dataset.pageTitle;
    if (titleKey) document.title = t(titleKey);
    for (const node of document.querySelectorAll('[data-i18n]')) node.textContent = t(node.dataset.i18n);
    for (const attribute of ['aria-label', 'title', 'content']) {
      for (const node of document.querySelectorAll(`[data-i18n-${attribute}]`)) {
        node.setAttribute(attribute, t(node.getAttribute(`data-i18n-${attribute}`)));
      }
    }
    for (const link of document.querySelectorAll('[data-language-link]')) {
      if (!link.dataset.languageHref) link.dataset.languageHref = link.getAttribute('href');
      link.href = withLanguage(link.dataset.languageHref);
    }
    for (const select of document.querySelectorAll('[data-language-select]')) select.value = language;
  }
  function setLanguage(value) {
    const next = normalize(value);
    if (!next || next === language) return;
    language = next;
    try { localStorage.setItem(storageKey, language); } catch {}
    const url = new URL(location.href);
    url.searchParams.set('lang', language);
    history.replaceState(history.state, '', url);
    apply();
    window.dispatchEvent(new CustomEvent('playground:languagechange', { detail: { language } }));
  }
  window.PlaygroundI18n = { get language() { return language; }, t, setLanguage, withLanguage };
  const ready = () => {
    apply();
    for (const select of document.querySelectorAll('[data-language-select]')) {
      select.addEventListener('change', () => setLanguage(select.value));
    }
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', ready, { once: true });
  else ready();
})();
