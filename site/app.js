const grid = document.querySelector('#game-grid');
const message = document.querySelector('#load-message');
const count = document.querySelector('#game-count');

function element(tag, className, text) {
  const node = document.createElement(tag);
  node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

function gameCard(game, index) {
  const card = element('a', 'game-card');
  card.href = game.href;
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
  const cta = element('span', 'card-cta', '开始游戏');
  const arrow = element('span', 'card-arrow', '↗');
  arrow.setAttribute('aria-hidden', 'true');
  cta.append(arrow);
  bottom.append(tags, cta);
  content.append(bottom);
  card.append(media, content);
  return card;
}

try {
  const response = await fetch(new URL('games.json', import.meta.url));
  if (!response.ok) throw new Error(`Game list: HTTP ${response.status}`);
  const games = await response.json();
  grid.replaceChildren(...games.map(gameCard));
  count.textContent = `${String(games.length).padStart(2, '0')} 款小游戏`;
  message.hidden = games.length > 0;
  if (!games.length) message.textContent = '新的小游戏正在路上，过会儿再来看看。';
} catch (error) {
  count.textContent = '稍后再试';
  message.replaceChildren(document.createTextNode('游戏列表暂时没有加载成功。'),
    Object.assign(document.createElement('a'), { href: './', textContent: '刷新页面重试' }));
  console.error(error);
} finally {
  grid.setAttribute('aria-busy', 'false');
}
