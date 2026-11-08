// 从保留的原版构建生成本地副本；校验哈希后只修改已核实的存储接口。
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

if (!process.argv[2]) throw new Error('Usage: node scripts/build-parking.mjs /path/to/original');
const original = resolve(process.argv[2]);
const game = fileURLToPath(new URL('../site/games/narrow-parking/game/', import.meta.url));
const files = [
  ['Build/game.loader.js', 'Build/game.loader.js', 'cc0268c6b29648c05030e7d1919e36a20478561067f70e55690e77fcc93ca671'],
  ['Build/game.framework.js', 'Build/game.framework.js', 'b5f7f97816f40085d2cb18198bfa9bd7fea71aad1977d8d54297e1077e79cfff'],
  ['Build/game.data.br', 'Build/game.data', '0a0d82f2997fea9054017c118851f77f373e72cdbeca14acaf617887478fc136'],
  ['Build/game.wasm.br', 'Build/game.wasm', '00482cabcf02f625b8d0e26fa5cca8feb86b2d8de9b1c36ceca0ad7187e59d98'],
];
const hash = data => createHash('sha256').update(data).digest('hex');
const inputs = await Promise.all(files.map(async ([source, destination, expected]) => {
  const bytes = await readFile(resolve(original, source));
  if (hash(bytes) !== expected) throw new Error('Original SHA-256 mismatch: ' + source);
  return { source, destination, bytes, original_sha256: expected };
}));
await mkdir(resolve(game, 'Build'), { recursive: true });
const manifest = [];
for (const input of inputs) {
  let bytes = input.bytes;
  if (input.source.endsWith('game.loader.js')) {
    let text = bytes.toString('utf8');
    const before = 'parent.showUnitywebNoSupport();';
    if (text.split(before).length !== 2) throw new Error('Unexpected platform error handler');
    text = text.replace(before, 'c(String(e), "error");\n    if (m.startupErrorHandler) m.startupErrorHandler(e);');
    const boot = '((m.webAssemblyTimeStart = performance.now()), e(m), (m.codeDownloadTimeEnd = performance.now() - o));';
    if (text.split(boot).length !== 2) throw new Error('Unexpected framework initialization');
    text = text.replace(boot, '((m.webAssemblyTimeStart = performance.now()), Promise.resolve(e(m)).catch(function (error) { P(String(error)); }), (m.codeDownloadTimeEnd = performance.now() - o));');
    bytes = Buffer.from(text);
  }
  if (input.source.endsWith('game.framework.js')) {
    let text = bytes.toString('utf8');
    for (const [before, after] of [
      ['window.localStorage.clear()', 'window.ParkingStorage.clear()'],
      ['window.localStorage.getItem(window.unityStringify(key))', 'window.ParkingStorage.getItem(window.unityStringify(key))'],
      ['window.localStorage.removeItem(window.unityStringify(key))', 'window.ParkingStorage.removeItem(window.unityStringify(key))'],
      ['window.localStorage.setItem(window.unityStringify(key), window.unityStringify(value))', 'window.ParkingStorage.setItem(window.unityStringify(key), window.unityStringify(value))'],
      ['window.localStorage.syncUnityGameData()', 'window.ParkingStorage.syncUnityGameData()'],
    ]) {
      const expected = before.includes('.getItem(') ? 2 : 1;
      if (text.split(before).length - 1 !== expected) throw new Error('Unexpected storage call count: ' + before);
      text = text.replaceAll(before, after);
    }
    const pitch = 'if (source.mediaElement.playbackRate !== v) source.mediaElement.playbackRate = v;';
    if (text.split(pitch).length !== 2) throw new Error('Unexpected HTML audio pitch setter');
    text = text.replace(pitch, 'var rate = Math.min(16, Math.max(0.0625, v));\n            if (source.mediaElement.playbackRate !== rate) source.mediaElement.playbackRate = rate;');
    bytes = Buffer.from(text);
  }
  await writeFile(resolve(game, input.destination), bytes);
  manifest.push({ source: input.source, destination: input.destination, bytes: bytes.length,
    original_sha256: input.original_sha256, local_sha256: hash(bytes) });
}
await mkdir(fileURLToPath(new URL('../provenance/', import.meta.url)), { recursive: true });
await writeFile(fileURLToPath(new URL('../provenance/narrow-parking.json', import.meta.url)), JSON.stringify({
  source_page: 'https://www.4399.com/flash/265813.htm',
  source_base: 'https://sda.4399.com/4399swf/upload_swf/ftp55/zmj/20260912/02/',
  engine_observed: 'Unity 6000.0.59f2',
  binary_changes: 'None. Both .br source files contain uncompressed bytes; only their names change.',
  loader_changes: 'Replace original parent.showUnitywebNoSupport with local showBanner/startup rejection; handle framework startup promise rejection so network failures reach retry UI.',
  framework_changes: 'Scope SDK localStorage operations to narrow-parking:; local writes need no remote sync. Clamp HTMLMediaElement playbackRate to Chromium supported range 0.0625–16 to prevent idle engine audio exceptions.',
  files: manifest,
}, null, 2) + '\n');
console.log('Built Narrow Parking: original binaries verified; storage isolated.');
