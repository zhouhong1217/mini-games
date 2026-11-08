// Rebuild the Chinese bitmap font from the original glyphs and a local CJK font.
// PLAYWRIGHT_MODULE=/path/to/playwright-core/index.mjs CJK_FONT_FILE=/path/to/font.ttf node scripts/build-ctr-locale.mjs
// The source font is used only for rasterization; it is not copied into the site.
// Published CJK glyphs use Noto Sans SC from Google Fonts (SIL OFL 1.1).
// Source: https://github.com/google/fonts/tree/main/ofl/notosanssc
import {readFile, writeFile} from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath, pathToFileURL} from 'node:url';
import {deflateSync} from 'node:zlib';

// A compact indexed PNG retains smooth alpha edges without shipping a multi-MB RGBA atlas.
const crcTable = Array.from({length: 256}, (_, n) => {
  let value = n;
  for (let bit = 0; bit < 8; bit++) value = (value & 1) ? 0xedb88320 ^ (value >>> 1) : value >>> 1;
  return value >>> 0;
});
function chunk(type, data) {
  const body = Buffer.concat([Buffer.from(type), data]), header = Buffer.alloc(4), footer = Buffer.alloc(4);
  header.writeUInt32BE(data.length);
  let crc = 0xffffffff;
  for (const byte of body) crc = crcTable[(crc ^ byte) & 255] ^ (crc >>> 8);
  footer.writeUInt32BE((crc ^ 0xffffffff) >>> 0);
  return Buffer.concat([header, body, footer]);
}
function indexedPng(atlas) {
  const header = Buffer.alloc(13); header.writeUInt32BE(atlas.width, 0); header.writeUInt32BE(atlas.height, 4);
  header[8] = 8; header[9] = 3;
  const palette = Buffer.alloc(768), alpha = Buffer.alloc(256);
  for (let i = 0; i < 256; i++) {
    const color = i < 128 ? [255, 255, 255] : i < 192 ? [37, 34, 20] : [0, 0, 0];
    for (let c = 0; c < 3; c++) palette[i * 3 + c] = color[c];
    alpha[i] = i < 128 ? Math.round(i * 255 / 127) : Math.round((i % 64) * 255 / 63);
  }
  const indices = Buffer.from(atlas.indices, 'base64'), rows = Buffer.alloc((atlas.width + 1) * atlas.height);
  for (let y = 0; y < atlas.height; y++) indices.copy(rows, y * (atlas.width + 1) + 1, y * atlas.width, (y + 1) * atlas.width);
  return Buffer.concat([Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]), chunk('IHDR', header),
    chunk('PLTE', palette), chunk('tRNS', alpha), chunk('IDAT', deflateSync(rows, {level: 9})), chunk('IEND', Buffer.alloc(0))]);
}

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const langDir = path.join(root, 'site/games/cut-the-rope/game/res/lang');
const source = await readFile(path.join(langDir, 'font-en.dat'));
const strings = JSON.parse(await readFile(path.join(langDir, '../strings.json'), 'utf8'));
const glyphs = [...new Set([...Array.from({length: 95}, (_, i) => String.fromCharCode(i + 32)),
  ...Object.values(strings).flatMap(value => [...value.zh])])]
  .filter(char => char !== '\n' && char !== '\r').sort((a, b) => a.codePointAt(0) - b.codePointAt(0));

if (source.at(-1) !== 69 || source.at(-3) !== 0) throw new Error('Unexpected font container');
const fonts = [];
let cursor = 1;
for (let i = 0; i < source[0]; i++) {
  const type = source[cursor++], ref = source[cursor++];
  const nameLength = source.readUInt16LE(cursor); cursor += 2 + nameLength;
  if (type !== 0) throw new Error(`Unexpected font reference ${ref}`);
  const length = source.readUInt16LE(cursor); cursor += 2;
  const data = source.subarray(cursor, cursor + length); cursor += length;
  if (data.toString('ascii', 0, 4) !== 'BMF\x03') throw new Error('Unexpected BMF version');
  const blocks = [];
  let offset = 4;
  while (offset < data.length) {
    const blockType = data[offset], size = data.readUInt32LE(offset + 1); offset += 5;
    blocks.push({type: blockType, data: Buffer.from(data.subarray(offset, offset + size))}); offset += size;
  }
  fonts.push({blocks, size: blocks[0].data.readInt16LE(0), base: blocks[1].data.readUInt16LE(2),
    ids: Array.from({length: blocks[3].data.length / 20}, (_, n) => blocks[3].data.readUInt32LE(n * 20))});
}
if (fonts.length !== 11) throw new Error('The game expects eleven bitmap font records');

const modulePath = process.env.PLAYWRIGHT_MODULE;
const fontPath = process.env.CJK_FONT_FILE;
if (!modulePath || !fontPath) throw new Error('Set PLAYWRIGHT_MODULE and CJK_FONT_FILE; see the command at the top of this file');
const {chromium} = await import(pathToFileURL(path.resolve(modulePath)).href);
const fontData = (await readFile(fontPath)).toString('base64');
const originalImage = (await readFile(path.join(langDir, 'font-en.avif'))).toString('base64');
const browser = await chromium.launch({headless: true, executablePath: process.env.CHROME_PATH || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'});
try {
  const page = await browser.newPage();
  const atlas = await page.evaluate(async ({fonts, glyphs, fontData, originalImage}) => {
    const face = new FontFace('CTR Chinese', `url(data:font/ttf;base64,${fontData})`, {weight: '100 900'});
    document.fonts.add(await face.load());
    const image = new Image(); image.src = `data:image/avif;base64,${originalImage}`; await image.decode();
    const width = 2304, padding = 3;
    const variants = new Map();
    for (let i = 0; i < fonts.length; i++) {
      const font = fonts[i], key = `${font.size}-${i === 3 ? 'dark' : 'white'}`;
      if (!variants.has(key)) variants.set(key, {size: font.size, dark: i === 3, chars: new Map()});
      const variant = variants.get(key);
      for (const char of glyphs) if (!font.ids.includes(char.codePointAt(0))) variant.chars.set(char, null);
      font.variant = key;
    }
    const scratch = document.createElement('canvas').getContext('2d');
    let x = 0, y = image.height + 4, rowHeight = 0;
    for (const variant of variants.values()) {
      scratch.font = `500 ${variant.size * 0.76}px "CTR Chinese"`;
      for (const char of variant.chars.keys()) {
        const metrics = scratch.measureText(char), shadow = variant.dark ? 0 : Math.round(variant.size * 0.045);
        const left = Math.ceil(metrics.actualBoundingBoxLeft), ascent = Math.ceil(metrics.actualBoundingBoxAscent);
        const glyphWidth = Math.max(1, left + Math.ceil(metrics.actualBoundingBoxRight)) + padding * 2;
        const glyphHeight = Math.max(1, ascent + Math.ceil(metrics.actualBoundingBoxDescent)) + padding * 2 + shadow;
        if (x + glyphWidth > width) {x = 0; y += rowHeight + 2; rowHeight = 0;}
        variant.chars.set(char, {id: char.codePointAt(0), x, y, width: glyphWidth, height: glyphHeight,
          xoffset: -left - padding, ascent, left, shadow, advance: Math.round(metrics.width)});
        x += glyphWidth + 2; rowHeight = Math.max(rowHeight, glyphHeight);
      }
    }
    const canvas = document.createElement('canvas'); canvas.width = width; canvas.height = y + rowHeight + 2;
    const context = canvas.getContext('2d'); context.drawImage(image, 0, 0);
    for (const variant of variants.values()) {
      context.font = `500 ${variant.size * 0.76}px "CTR Chinese"`;
      context.textBaseline = 'alphabetic'; context.fillStyle = variant.dark ? '#252214' : '#ffffff';
      context.strokeStyle = context.fillStyle; context.lineWidth = variant.size * 0.012;
      context.lineJoin = 'round'; context.shadowColor = variant.dark ? 'transparent' : 'rgba(0,0,0,.55)';
      for (const [char, glyph] of variant.chars) {
        context.shadowOffsetY = glyph.shadow;
        const px = glyph.x + padding + glyph.left, py = glyph.y + padding + glyph.ascent;
        context.strokeText(char, px, py); context.fillText(char, px, py);
      }
    }
    const rgba = context.getImageData(0, 0, canvas.width, canvas.height).data;
    const indices = new Uint8Array(canvas.width * canvas.height);
    for (let i = 0; i < indices.length; i++) {
      const p = i * 4, alpha = rgba[p + 3];
      const light = rgba[p] + rgba[p + 1] + rgba[p + 2] > 450;
      const dark = rgba[p] + rgba[p + 1] + rgba[p + 2] < 45;
      indices[i] = light ? Math.round(alpha * 127 / 255) : (dark ? 192 : 128) + Math.round(alpha * 63 / 255);
    }
    let binary = '';
    for (let i = 0; i < indices.length; i += 8192) binary += String.fromCharCode(...indices.subarray(i, i + 8192));
    return {width: canvas.width, height: canvas.height, indices: btoa(binary),
      fonts: fonts.map(font => [...variants.get(font.variant).chars.values()]
        .filter(glyph => !font.ids.includes(glyph.id))
        .map(glyph => ({...glyph, yoffset: font.base - glyph.ascent - padding}))) };
  }, {fonts: fonts.map(({size, base, ids}) => ({size, base, ids})), glyphs, fontData, originalImage});

  const records = [Buffer.from([fonts.length])];
  for (let i = 0; i < fonts.length; i++) {
    const blocks = fonts[i].blocks;
    blocks[1].data.writeUInt16LE(atlas.width, 4); blocks[1].data.writeUInt16LE(atlas.height, 6);
    const additions = atlas.fonts[i].map(glyph => {
      const data = Buffer.alloc(20);
      data.writeUInt32LE(glyph.id, 0); data.writeUInt16LE(glyph.x, 4); data.writeUInt16LE(glyph.y, 6);
      data.writeUInt16LE(glyph.width, 8); data.writeUInt16LE(glyph.height, 10);
      data.writeInt16LE(glyph.xoffset, 12); data.writeInt16LE(glyph.yoffset, 14); data.writeInt16LE(glyph.advance, 16);
      data[18] = 1; data[19] = 1; return data;
    });
    blocks[3].data = Buffer.concat([blocks[3].data, ...additions]);
    const font = Buffer.concat([Buffer.from('BMF\x03', 'binary'), ...blocks.map((block, n) => {
      const header = Buffer.alloc(5); header[0] = n + 1; header.writeUInt32LE(block.data.length, 1);
      return Buffer.concat([header, block.data]);
    })]);
    if (font.length > 65535) throw new Error('Font record exceeds the original container limit');
    const header = Buffer.alloc(6); header.writeUInt16LE(font.length, 4); records.push(header, font);
  }
  const payload = Buffer.concat(records), footer = Buffer.alloc(6);
  footer.writeUIntLE(payload.length, 0, 3); footer[4] = 1; footer[5] = 69;
  const fontBytes = Buffer.concat([payload, footer]), imageBytes = indexedPng(atlas);
  await writeFile(path.join(langDir, 'font-zh.dat'), fontBytes);
  await writeFile(path.join(langDir, 'font-zh.png'), imageBytes);
  const enginePath = path.join(langDir, '../../ctr.local.js'), engine = await readFile(enginePath, 'utf8');
  const entry = /m\.bytes\.push\("lang\/font-zh\.png:\d+", "lang\/font-zh\.dat:\d+"\);/;
  if (!entry.test(engine)) throw new Error('The Chinese font size entry is missing from ctr.local.js');
  await writeFile(enginePath, engine.replace(entry, `m.bytes.push("lang/font-zh.png:${imageBytes.length}", "lang/font-zh.dat:${fontBytes.length}");`));
  console.log(`Built ${glyphs.length} characters across eleven font records; atlas ${atlas.width} × ${atlas.height}.`);
} finally {
  await browser.close();
}
