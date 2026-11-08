const grid = document.querySelector('#game-grid');
const message = document.querySelector('#load-message');
const count = document.querySelector('#game-count');
const i18n = window.PlaygroundI18n;
let games = null;
let loadFailed = false;

function element(tag, className, text) {
  const node = document.createElement(tag);
  node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

function gameCard(game, index) {
  game = { ...game, ...(i18n.language === 'en' ? game.translations?.en : {}) };
  const card = element('a', 'game-card');
  card.href = i18n.withLanguage(game.href);
  card.setAttribute('aria-labelledby', `game-${game.id}`);
  const media = element('div', 'card-media');
  const image = document.createElement('img');
  image.src = game.cover;
  image.alt = game.coverAlt;
  image.width = 1100;
  image.height = 680;
  image.decoding = 'async';
  media.append(image, element('span', 'card-number', `GAME ${String(index + 1).padStart(2, '0')}`));
  const content = element('div', 'card-content');
  const title = element('h3', '', game.title);
  title.id = `game-${game.id}`;
  content.append(element('p', 'card-subtitle', game.subtitle), title,
    element('p', 'card-description', game.description));
  const bottom = element('div', 'card-bottom');
  const tags = element('div', 'card-tags');
  for (const tag of game.tags) tags.append(element('span', '', tag));
  const cta = element('span', 'card-cta', i18n.t('start'));
  const arrow = element('span', 'card-arrow', '↗');
  arrow.setAttribute('aria-hidden', 'true');
  cta.append(arrow);
  bottom.append(tags, cta);
  content.append(bottom);
  card.append(media, content);
  return card;
}

function render() {
  if (games) {
    grid.replaceChildren(...games.map(gameCard));
    count.textContent = i18n.t('home.count', { count: String(games.length).padStart(2, '0') });
    message.hidden = games.length > 0;
    if (!games.length) message.textContent = i18n.t('home.empty');
  } else if (loadFailed) {
    count.textContent = i18n.t('home.failedCount');
    message.replaceChildren(document.createTextNode(i18n.t('home.failed')),
      Object.assign(document.createElement('a'), { href: i18n.withLanguage('./'), textContent: i18n.t('home.retry') }));
  } else {
    count.textContent = i18n.t('home.loadingCount');
    message.textContent = i18n.t('home.loading');
  }
}
window.addEventListener('playground:languagechange', render);
render();
try {
  const response = await fetch(new URL('games.json', import.meta.url));
  if (!response.ok) throw new Error(`Game list: HTTP ${response.status}`);
  games = await response.json();
} catch (error) {
  loadFailed = true;
  console.error(error);
} finally {
  render();
  grid.setAttribute('aria-busy', 'false');
}
