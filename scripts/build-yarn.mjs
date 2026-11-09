// 从保留原包生成静态版本；重建时重复删除原平台实现。
import { readFile, writeFile, mkdir, copyFile, rm } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { patchBundle, patchAssetTransform, removedModules, storageNamespace } from '../tools/yarn-unravel/patch-platform.mjs';
const source = resolve(process.argv[2] || ''), root = fileURLToPath(new URL('../', import.meta.url));
if (!process.argv[2]) throw Error('Usage: node scripts/build-yarn.mjs /path/to/4399_266510_2026-11-09');
const manifestBytes = await readFile(resolve(source, 'evidence/acquisition-manifest.json'));
const manifest = JSON.parse(manifestBytes), output = resolve(root, 'site/games/yarn-unravel/game');
const sha = value => createHash('sha256').update(value).digest('hex');
const files = [];
const canonical = new Map(), aliases = {};
for (const row of manifest.files) {
  if (!/^assets\/[^/]+\/native\//.test(row.path)) continue;
  const key = row.sha256 + ':' + row.path.split('.').at(-1);
  if (canonical.has(key)) aliases[row.path] = canonical.get(key);
  else canonical.set(key, row.path);
}
for (const row of manifest.files) {
  const p = row.path;
  if (!/^(assets\/|src\/|main\.js$|cocos2d-js-min\.js$|physics-min\.js$|style-mobile\.css$|splash\.png$)/.test(p)) continue;
  if (p.split('/').includes('..')) throw Error('Unsafe source path');
  const b = await readFile(resolve(source, 'original', p));
  if (b.length !== row.bytes || sha(b) !== row.sha256) throw Error('Source identity mismatch: ' + p);
  if (aliases[p]) { await rm(resolve(output, p), { force: true }); continue; }
  let result = b, path = p;
  if (p === 'assets/main/index.js') result = Buffer.from(patchBundle(b.toString()));
  if (p === 'src/assets/_plugs/script/to4399.js') {
    result = Buffer.from(patchAssetTransform(b.toString()).replace('return null})', `for(var j=0;j<files.length;j++){var f=files[j];if(!f.url)continue;var u=new URL(f.url,location.href),base=new URL('./',location.href).pathname,key=decodeURI(u.pathname.slice(base.length));if(u.origin===location.origin&&u.pathname.startsWith(base)&&window.YarnAssetAliases[key])f.url=window.YarnAssetAliases[key]+u.search}return null})`));
    path = 'src/local-asset-transform.js';
  }
  if (p === 'src/settings.js') result = Buffer.from(b.toString().replace('assets/_plugs/script/to4399.js', 'local-asset-transform.js'));
  if (p === 'main.js') result = Buffer.from(b.toString().replace('var percent = 100 * finish / total;', 'var percent = 100 * finish / total;\n            window.YarnRuntime.progress(finish / total * .45);'));
  await mkdir(dirname(resolve(output, path)), { recursive: true });
  if (result === b) await copyFile(resolve(source, 'original', p), resolve(output, path));
  else await writeFile(resolve(output, path), result);
  files.push({ path, original_sha256: row.sha256, local_sha256: sha(result), bytes: result.length });
}
await writeFile(resolve(output, 'asset-aliases.js'), 'window.YarnAssetAliases=' + JSON.stringify(aliases) + ';\n');
const custom = await Promise.all(['index.html','platform-adapter.js','local-runtime.js','local-ui.css','boot-local.js','asset-aliases.js'].map(async path => {
  const bytes = await readFile(resolve(output, path));
  return { path, local_sha256: sha(bytes), bytes: bytes.length };
}));
await mkdir(resolve(root, 'provenance'), { recursive: true });
await writeFile(resolve(root, 'provenance/yarn-unravel.json'), JSON.stringify({
  source_page: 'https://www.4399.com/flash/266510.htm', source_entry: manifest.base + 'gameIndex.html',
  engine: 'Cocos Creator 2.4.11', manifest_sha256: sha(manifestBytes), removed_modules: removedModules,
  storage_namespace: storageNamespace,
  identical_native_alias_count: Object.keys(aliases).length,
  identical_native_bytes_saved: manifest.files.filter(row => aliases[row.path]).reduce((n, row) => n + row.bytes, 0),
  changes: ['Delete original wrapper, SDK loader, AD_WX, PlatformBytedance and their bootstrap entries.', 'Use independent local advertising, rank storage and save interfaces.', 'Replace remote profile, remote service and HTTP boundaries with local behavior.', 'Keep static asset extension mapping in independent local script.', 'Wait for actual MainUI before exposing playable iframe.'],
  unknowns: ['Original Cocos Creator authoring project and TypeScript are Unknown.', 'Complete behavior of every level and optional mode is Unknown.', 'Absence of unused branding or inactive declarations inside binary assets is Unknown.'],
  files, custom_files: custom
}, null, 2) + '\n');
console.log(JSON.stringify({ game: 'yarn-unravel', files: files.length, bytes: files.reduce((n, f) => n + f.bytes, 0), aliases: Object.keys(aliases).length }));
