// 核验原包、重建独立平台适配层；原站 loader、SDK 实现及远程配置不进入 site/。
import { readFile, writeFile, copyFile, mkdir, mkdtemp, rm } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { spawnSync } from 'node:child_process';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const recovery = path.resolve(process.argv[2] || path.join(root, '../4399_18012_2026-11-09'));
const tool = path.join(root, 'tools/plants-vs-zombies');
const game = path.join(root, 'site/games/plants-vs-zombies/game');
const manifest = JSON.parse(await readFile(path.join(root, 'provenance/plants-vs-zombies.json')));
const sha = bytes => createHash('sha256').update(bytes).digest('hex');
const jar = process.env.JPEXS_JAR || path.join(recovery, 'tools/jpexs/ffdec.jar');
if (sha(await readFile(jar)) !== manifest.jpexs_jar_sha256) throw new Error('JPEXS SHA-256 mismatch');
const original = path.join(recovery, 'original/pvz_9_15.swf');
if (sha(await readFile(original)) !== manifest.original_swf.sha256) throw new Error('Original SWF SHA-256 mismatch');
for (const asset of manifest.copy_assets) {
  const bytes = await readFile(path.join(recovery, asset.source));
  if (bytes.length !== asset.bytes || sha(bytes) !== asset.sha256) throw new Error('Source mismatch: ' + asset.source);
}
const temp = await mkdtemp(path.join(tmpdir(), 'pvz-build-'));
function run(command, args) {
  const result = spawnSync(command, args, { encoding:'utf8', maxBuffer:16 * 1024 * 1024 });
  if (result.error || result.status !== 0) throw new Error(result.error?.message || result.stderr || result.stdout);
}
try {
  const patched = path.join(temp, 'patched.swf'), clean = path.join(temp, 'clean.swf'), local = path.join(temp, 'pvz.local.swf');
  run('java', ['-jar', jar, '-cli', '-onerror', 'abort', '-importScript', original, patched, path.join(tool, 'patches/scripts')]);
  run('java', ['-jar', jar, '-cli', '-abcclean', patched, clean]);
  run('python3', [path.join(tool, 'rename-swf-adapter.py'), clean, local]);
  const bytes = await readFile(local);
  if (sha(bytes) !== manifest.local_swf_sha256) throw new Error('Rebuilt SWF SHA-256 mismatch');
  await mkdir(game, { recursive:true });
  await writeFile(path.join(game, 'pvz.local.swf'), bytes);
  for (const asset of manifest.copy_assets) {
    const destination = path.join(root, 'site', asset.destination);
    await mkdir(path.dirname(destination), { recursive:true });
    await copyFile(path.join(recovery, asset.source), destination);
  }
  await copyFile(path.join(tool, 'data.xml'), path.join(game, 'data.xml'));
  console.log('Plants vs. Zombies rebuilt; original/runtime hashes and cleaned SWF match provenance.');
} finally { await rm(temp, { recursive:true, force:true }); }
