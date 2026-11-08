// 校验并生成独立 WebGL 副本；保留 WASM 和关卡数据原始字节。
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';

if (!process.argv[2]) throw new Error('Usage: node scripts/build-rope.mjs /path/to/original');
const original = resolve(process.argv[2]);
const game = fileURLToPath(new URL('../site/games/rope-tangle/game/', import.meta.url));
const expected = {
  'Build/Rope Tangle Puzzle.loader.js': '12ce8697b24e37ce695dfb740783b6104c4ea2ba5016e21bc2bb9e9101810c92',
  'Build/Rope Tangle Puzzle.framework.js': 'ec0160a4b543f4083aa3cb58867859fb2f2dcce0ca90124cf2109e32a707e266',
  'Build/Rope Tangle Puzzle.data': '659877f2a0d43940365e34f21dc723771336aaef5ec398eb174bc66b13a70089',
  'Build/Rope Tangle Puzzle.wasm': '5c41f772a181026144bc01e041e04e6ef47ba448b1a88877a45303d26b64aa97',
};
const hash = bytes => createHash('sha256').update(bytes).digest('hex');
const inputs = new Map(await Promise.all(Object.entries(expected).map(async ([name, sha]) => {
  const bytes = await readFile(resolve(original, name));
  if (hash(bytes) !== sha) throw new Error('Original SHA-256 mismatch: ' + name);
  return [name, bytes];
})));
const replace = (text, before, after) => {
  if (text.split(before).length !== 2) throw new Error('Unexpected source: ' + before);
  return text.replace(before, after);
};
await mkdir(resolve(game, 'Build'), { recursive: true });
const files = [];
for (const [source, bytes] of inputs) {
  let result = bytes;
  if (source.endsWith('.loader.js')) {
    let text = bytes.toString().replace(/\r\n/g, '\n');
    text = replace(text, 'parent.showUnitywebNoSupport();', 's(String(e), "error");');
    text = replace(text, 'e(c);', 'Promise.resolve(e(c)).catch(function(error) { s(String(error), "error"); });');
    result = Buffer.from(text);
  }
  if (source.endsWith('.framework.js')) {
    let text = bytes.toString();
    text = replace(text, 'IDBFS.getDB(mount.mountpoint,', 'IDBFS.getDB("rope-tangle-4399-v1:" + mount.mountpoint,');
    text = replace(text, '})(eventTypeId, touchEvent, userData)\n        )', '})(eventTypeId, touchEvent, userData) && e.cancelable\n        )');
    // 删除原 SDK 实现；仅保留 WASM 导入函数名，委托给独立本地适配层。
    const begin = text.indexOf('    function _SDK_CallHighScore(score, board_id) {');
    const end = text.indexOf('    function ___cxa_allocate_exception', begin);
    if (begin < 0 || end < 0) throw new Error('Original SDK block missing');
    const bindings = `    function _SDK_CallHighScore(score, board_id) { RopeTanglePlatform.saveScore(score, UTF8ToString(board_id)); }
    function _SDK_CheckRewardAd() { RopeTanglePlatform.checkRewardAd(); }
    function _SDK_Init(devID, pubID) {
      RopeTanglePlatform.initialize();
      if (Module["onLocalGameReady"]) Module["onLocalGameReady"]();
    }
    function _SDK_PlayRewardAd() { RopeTanglePlatform.showRewardAd(); }
    function _SDK_SaveAchievement(award) { RopeTanglePlatform.saveAchievement(UTF8ToString(award)); }
    function _SDK_ShowAd() { RopeTanglePlatform.showAd(); }
`;
    text = text.slice(0, begin) + bindings + text.slice(end);
    if (/LaggedAPI|lagged-jssdk|rewardAdFunction/.test(text)) throw new Error('Original SDK implementation remains');
    result = Buffer.from(text);
  }
  await writeFile(resolve(game, source), result);
  files.push({ source, destination: source, original_sha256: expected[source], local_sha256: hash(result), bytes: result.length });
}
await mkdir(fileURLToPath(new URL('../provenance/', import.meta.url)), { recursive: true });
await writeFile(fileURLToPath(new URL('../provenance/rope-tangle.json', import.meta.url)), JSON.stringify({
  source_page: 'https://www.4399.com/flash/242335.htm',
  source_base: 'https://sda.4399.com/4399swf/upload_swf/ftp47/gamehwq/20240709/09/',
  binary_changes: 'None. WASM and data bytes copied exactly.',
  loader_changes: 'LF line endings; replace original parent error callback and catch framework initialization rejection.',
  framework_changes: 'Namespace IndexedDB as rope-tangle-4399-v1:/idbfs; guard touch preventDefault with cancelable; remove original SDK block and retain only WASM ABI wrappers into platform-adapter.js with local game-ready notification.',
  platform_adapter: 'Independent local implementation. Default ads complete directly; optional providers are injected only here. Original callback object name LaggedAPIUnity remains an ABI string. Scores and achievements stay in namespaced localStorage.',
  binary_dependency_boundary: 'WASM is unmodified. Complete removal of binary-internal SDK or server references is Unknown; network is restricted to same origin and tested with external requests blocked.',
  storage: 'Original Unity PlayerPrefs; namespaced IndexedDB, original in-game keys and values retained.',
  game_language: 'Original English. Bilingual portal shell.',
  files,
}, null, 2) + '\n');
console.log('Built Rope Tangle Puzzle: WASM/data hashes match originals.');
