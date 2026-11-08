// 校验原包，生成静态网页副本；WASM 和关卡数据保持原始压缩字节。
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { brotliDecompressSync } from 'node:zlib';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

if (!process.argv[2]) throw new Error('Usage: node scripts/build-snake.mjs /path/to/original');
const original = resolve(process.argv[2]);
const game = fileURLToPath(new URL('../site/games/apple-snake/game/', import.meta.url));
const expected = {
  'index.html': '406895bdea97ee033072834a14066133926e9fd6f19e371b22426726c78186c8',
  'playgama-bridge.js': '84acaf7f8cab584d55a31b04c8ffd6de73030a2022f7107c2cee3a5056fe6c40',
  'Build/SnaketoEat.loader.js': 'e0fe1cb9740d9abfe706c3c8979df1df6dfa41992157cbb2cf07f3a094ce3acd',
  'Build/SnaketoEat.data.unityweb': 'cc8453d3a12d51fa7616f2d6779b7e23ae249f56fa0b527f44f7142db7f49a11',
  'Build/SnaketoEat.framework.js.unityweb': '8f62969f7abac49edfd088a7c7cd5e65c931c7a2d5cadb91aa35743d7490168d',
  'Build/SnaketoEat.wasm.unityweb': '6e5af1bfb0c06ca04919b9afee498d977c3737b170616cf68ab6f0a98c26d33f',
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
async function emit(destination, bytes, source) {
  if (typeof bytes === 'string') bytes = bytes.replace(/\r\n/g, '\n').replace(/[ \t]+$/gm, '').trimEnd() + '\n';
  await writeFile(resolve(game, destination), bytes);
  files.push({ source, destination, original_sha256: expected[source], local_sha256: hash(bytes), bytes: Buffer.byteLength(bytes) });
}
let loader = inputs.get('Build/SnaketoEat.loader.js').toString();
loader = replace(loader, "a.src = '4399.js'", 'a.src = s');
loader = replace(loader, 'parent.showUnitywebNoSupport()', 'c(String(e), "error")');
loader = replace(loader, 'e[0](w),', 'Promise.resolve(e[0](w)).catch(function(error) { x(String(error)); }),');
await emit('Build/SnaketoEat.loader.js', loader, 'Build/SnaketoEat.loader.js');
let framework = brotliDecompressSync(inputs.get('Build/SnaketoEat.framework.js.unityweb')).toString();
framework = replace(framework, '(eventTypeId,touchEvent,userData))e.preventDefault()', '(eventTypeId,touchEvent,userData)&&e.cancelable)e.preventDefault()');
await emit('Build/SnaketoEat.framework.js', framework, 'Build/SnaketoEat.framework.js.unityweb');
for (const name of ['Build/SnaketoEat.data.unityweb', 'Build/SnaketoEat.wasm.unityweb']) await emit(name, inputs.get(name), name);
let sdk = inputs.get('playgama-bridge.js').toString();
sdk = replace(sdk, 'this._localStorage.getItem(t)', 'this._localStorage.getItem("apple-snake-4399-v1:" + t)');
sdk = replace(sdk, 'this._localStorage.setItem(t,', 'this._localStorage.setItem("apple-snake-4399-v1:" + t,');
sdk = replace(sdk, 'this._localStorage.removeItem(t)', 'this._localStorage.removeItem("apple-snake-4399-v1:" + t)');
await emit('playgama-bridge.js', sdk, 'playgama-bridge.js');
const html = inputs.get('index.html').toString();
const scripts = [...html.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/g)];
const binding = scripts.map(m => m[1]).find(s => s.includes('// platform'));
if (!binding) throw new Error('Original Unity bridge bindings were not found');
const header = `// 从原版 index.html 提取的 Unity/Playgama 接口；初始化由 runtime.js 负责。\n'use strict';\nconst STORAGE_DATA_SEPARATOR = '{bridge_data_separator}';\nconst STORAGE_KEYS_SEPARATOR = '{bridge_keys_separator}';\nconst STORAGE_VALUES_SEPARATOR = '{bridge_values_separator}';\nwindow.unityInstance = null;\nfunction sendMessageToUnity(name, value) {\n  if (window.unityInstance) window.unityInstance.SendMessage('PlaygamaBridge', name, value);\n}\n`;
await emit('bridge-bindings.js', header + binding.slice(binding.indexOf('// platform')), 'index.html');
await writeFile(resolve(game, 'playgama-bridge-config.json'), JSON.stringify({
  forciblySetPlatformId: 'mock', sendAnalyticsEvents: false,
  advertisement: { interstitial: { preloadOnStart: false }, rewarded: { preloadOnStart: false }, useBuiltInErrorPopup: false },
}));
await writeFile(fileURLToPath(new URL('../provenance/apple-snake.json', import.meta.url)), JSON.stringify({
  source_page: 'https://www.4399.com/flash/257457.htm',
  source_base: 'https://sda.4399.com/4399swf/upload_swf/ftp53/zmj/20260108/13/',
  binary_changes: 'None. Compressed WASM and data bytes are copied exactly.',
  framework_changes: 'Brotli decompress and guard the original touch-event preventDefault call with event.cancelable. The native callback still executes.',
  loader_changes: 'Load the selected framework through the original blob; route startup errors to the local retry UI.',
  sdk_changes: 'Prefix only the original SDK localStorage operations with apple-snake-4399-v1:. Force mock platform and disable analytics/ad preloads in local config.',
  binding_changes: 'Extract original window bindings; runtime.js replaces ad callbacks, unsupported external links and server time with local handling.',
  text_normalization: 'Generated JavaScript uses LF line endings and omits trailing line whitespace.',
  files,
}, null, 2) + '\n');
console.log('Built Apple Snake: original binary bytes verified; SDK storage isolated.');
