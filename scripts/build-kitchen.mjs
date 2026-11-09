// 校验原始资源清单后生成静态副本，删除原平台和广告实现。
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { resolve, dirname, relative, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';

if (!process.argv[2]) throw new Error('Usage: node scripts/build-kitchen.mjs /path/to/4399_226526_2026-11-09');
const source = resolve(process.argv[2]);
const original = resolve(source, 'original/game');
const output = fileURLToPath(new URL('../site/games/double-kitchen/game/', import.meta.url));
const sha256 = bytes => createHash('sha256').update(bytes).digest('hex');
const manifest = JSON.parse(await readFile(resolve(source, 'tools/acquisition-manifest.json'), 'utf8'));
const expected = {
  'gameIndex.html': '893786d391f400a664d2ce5bfba784cb1faab60f2c9496f42f8947b947199d71',
  'main.742df.js': '3dd407ee638b9367b3115859e07231093b9ad78701c2e4849311c3345006449e',
  'assets/main/index.a04f1.js': 'f7fbe9cf9c5179614cc839be571517ee5a29f65b661f1a4b9748ec4e9eccf1bc',
  'src/settings.9097c.js': 'ace5d8cb8e96c6a0c6b075d7ca777ca3aaf17a469e620a81e911472b4e3762a8',
  'cocos2d-js-min.dead5.js': '0c6b4dc590c063d8424fee4742d522b435df065c14c3cc4e57071f52abac8c40',
};
const replaceOne = (text, before, after) => {
  if (text.split(before).length !== 2) throw new Error('Unexpected input: ' + before);
  return text.replace(before, after);
};
const removedModules = ['AD_4399', 'AD_Apk', 'AD_OPPO', 'AD_QQ', 'AD_TT', 'AD_VIVO'];
function component(id, name, body) {
  return `${name}:[function(e,t,i){"use strict";cc._RF.push(t,${JSON.stringify(id)},${JSON.stringify(name)}),cc.Class({extends:cc.Component,${body}}),cc._RF.pop()},{}]`;
}
function rewriteBundle(text) {
  const matches = [...text.matchAll(/([\w$]+):\[function\(e,t,i\)\{/g)];
  if (matches.length !== 48 || matches[0][1] !== 'AD_4399') throw new Error('Unexpected Browserify module table');
  const end = text.indexOf('},{},[', matches.at(-1).index);
  if (end < 0) throw new Error('Browserify entrypoint table missing');
  const modules = new Map(matches.map((match, index) => [match[1], text.slice(match.index, index + 1 < matches.length ? matches[index + 1].index - 1 : end)]));
  for (const name of removedModules) {
    if (!modules.delete(name)) throw new Error('Expected vendor module missing: ' + name);
  }
  let ad = modules.get('AD');
  const stateStart = ad.indexOf('window.AD={') + 'window.AD={'.length;
  const stateEnd = ad.indexOf('couldZDJ:');
  let state = ad.slice(stateStart, stateEnd);
  state = replaceOne(state, 'chanelNameNow:"4399",chanelNameTarget:"4399"', 'chanelNameNow:"local",chanelNameTarget:"local"');
  modules.set('AD', `AD:[function(e,t,i){"use strict";cc._RF.push(t,"f703a95IjJFG7nxupR4aEeU","AD"),window.AD={${state}
    couldZDJ:function(){return false},couldZJDChaPing:function(){return false},
    intAD:function(){DoubleKitchenPlatform.initialize()},
    showAD:function(callback,context){this.callN=context;this.callerN=callback;return DoubleKitchenPlatform.showRewarded(callback,context)},
    reward:function(callback,context){if(arguments.length===0){callback=this.callerN;context=this.callN}AD.sound.playSfx("升级");if(typeof callback==="function")callback.call(context)},
    showVideo:function(callback,context){return DoubleKitchenPlatform.showRewarded(arguments.length?callback:this.callerN,arguments.length?context:this.callN)},
    chaPing:function(){return DoubleKitchenPlatform.showInterstitial()},hideChaPing:function(){return DoubleKitchenPlatform.hideInterstitial()},
    showBanner:function(){return DoubleKitchenPlatform.showBanner()},hideBanner:function(){return DoubleKitchenPlatform.hideBanner()},
    overNum:0,GameOver:function(){AD.gameJieSuan=true;AD.overNum++},share:function(){},luPingBegin:function(){},lupingOver:function(){},luPingShare:function(){},
    isBigScreen:function(){return AD.height/AD.width>1.8},stopAudioAll:function(){cc.audioEngine.pauseMusic()},playAudioAll:function(){cc.audioEngine.resumeMusic()},vibrateLong:function(){},vibrateShort:function(){}
  },cc._RF.pop()},{}]`);
  modules.set('chaPing', component('d70a39EEx1O3IhvrziottdW', 'chaPing', 'properties:{title:cc.Label,desc:cc.Label,iconY:cc.Node,logo:cc.Sprite},onLoad:function(){this.node.scale=0},btn_down:function(){this.node.scale=0},btn_close:function(){this.node.scale=0}'));
  modules.set('initOppo', component('1813bVs115L8LrXks7a7lOg', 'initOppo', 'properties:{},onLoad:function(){}'));
  modules.set('onlinSwitch', component('3a631E/LR5Hfah/c+AOdY6a', 'onlinSwitch', 'properties:{},onLoad:function(){AD.onlineSwitch=this;cc.game.addPersistRootNode(this.node);AD.intAD()},start:function(){AD.onlineTime=300;AD.canGetAward=false;this.onlineFun=function(){if(!AD.canGetAward){AD.onlineTime--;if(AD.onlineTime<=0){AD.onlineTime=0;AD.canGetAward=true}}};this.schedule(this.onlineFun,1)},addFightCoin:function(){},update:function(){}'));
  modules.set('channel', component('c06d8On8B5G0qu9/W+mO5QL', 'channel', 'properties:{},start:function(){["QQ","moreGameOppo","btn_yinsixieyi","shiLingBg"].forEach(function(name){var n=this.node.getChildByName(name);if(n)n.active=false},this)},onBtnCallBack:function(){DoubleKitchenPlatform.moreGames()}'));
  let menu = modules.get('Menu');
  menu = replaceOne(menu, 'AD_Apk.moreGameOppo()', 'DoubleKitchenPlatform.moreGames()');
  modules.set('Menu', menu);
  let privacy = modules.get('yinSi1');
  privacy = replaceOne(privacy, '"false"==cc.sys.localStorage.getItem(AD.yinSiChannel)&&("vivoApk"!=AD.chanelNameTarget&&"miApk"!=AD.chanelNameTarget||AD_Apk.checkPermission()),', '');
  privacy = replaceOne(privacy, '"VIVO"==AD.chanelNameTarget?qg.exitApplication():"QQ"==AD.chanelNameTarget?qq.exitMiniProgram():cc.game.end()', 'cc.game.end()');
  modules.set('yinSi1', privacy);
  let privacyScene = modules.get('yinSiScene');
  privacyScene = replaceOne(privacyScene, '"miApk"==AD.chanelNameTarget&&AD_Apk.checkPermission(),', '');
  privacyScene = replaceOne(privacyScene, '"yinSisrcfzf"+AD.chanelNameTarget', '"double-kitchen-4399-v1:privacy"');
  modules.set('yinSiScene', privacyScene);
  let data = modules.get('globalData');
  data = replaceOne(data, 'firstGameStr:"firstGame_shuangRenChuFang_",dataStr:"data_shuangRenChuFang_"', 'firstGameStr:"double-kitchen-4399-v1:first:",dataStr:"double-kitchen-4399-v1:data:"');
  modules.set('globalData', data);
  let suffix = text.slice(end);
  for (const name of removedModules) suffix = replaceOne(suffix, JSON.stringify(name) + ',', '');
  const result = text.slice(0, matches[0].index) + [...modules.values()].join(',') + suffix;
  if (/AD_(?:4399|Apk|OPPO|QQ|TT|VIVO|WX|UC|BD|KS|HuaWei)|h5api|\b(?:qg|qq|tt|kwaigame)\.|loadRemote|createRewardedVideoAd|adUnitId|appId/.test(result)) throw new Error('Original SDK reference remains');
  return result;
}
const files = [];
for (const record of manifest.files) {
  const path = record.path.replace(/^original\/game\//, '');
  if (path === record.path || path.startsWith('_external/') || ['base.xml', 'gameIndex.html'].includes(path)) continue;
  if (path.includes('..') || !/^(?:assets\/|src\/|main\.|cocos2d-js-min\.|style-mobile\.|splash\.)/.test(path)) throw new Error('Unexpected publication path: ' + path);
  const sourcePath = resolve(original, path);
  if (relative(original, sourcePath).startsWith('..' + sep)) throw new Error('Input escapes original directory');
  const bytes = await readFile(sourcePath);
  if (sha256(bytes) !== record.sha256 || bytes.length !== record.bytes) throw new Error('Manifest mismatch: ' + path);
  if (expected[path] && sha256(bytes) !== expected[path]) throw new Error('Pinned original mismatch: ' + path);
  let result = bytes;
  if (path === 'assets/main/index.a04f1.js') result = Buffer.from(rewriteBundle(bytes.toString()));
  if (path === 'main.742df.js') result = Buffer.from(replaceOne(bytes.toString(), 'var percent = 100 * finish / total;', 'var percent = 100 * finish / total;\n            if(window.DoubleKitchenRuntime) window.DoubleKitchenRuntime.progress(finish / total * .9);'));
  if (path === 'main.742df.js' || path === 'style-mobile.6e9cd.css') result = Buffer.from(result.toString().replace(/\r\n/g, '\n').replace(/[ \t]+$/gm, ''));
  await mkdir(dirname(resolve(output, path)), { recursive: true });
  await writeFile(resolve(output, path), result);
  files.push({ path, original_sha256: record.sha256, local_sha256: sha256(result), bytes: result.length });
}
for (const name of Object.keys(expected)) {
  const bytes = await readFile(resolve(original, name));
  if (sha256(bytes) !== expected[name]) throw new Error('Pinned original mismatch: ' + name);
}
const settings = await readFile(resolve(output, 'src/settings.9097c.js'), 'utf8');
if (!settings.includes('remoteBundles:[]') || /server\s*:/.test(settings)) throw new Error('Unexpected remote bundle configuration');
const custom = await Promise.all(['index.html', 'platform-adapter.js', 'local-runtime.js'].map(async path => {
  const bytes = await readFile(resolve(output, path));
  return { path, local_sha256: sha256(bytes), bytes: bytes.length };
}));
await mkdir(fileURLToPath(new URL('../provenance/', import.meta.url)), { recursive: true });
await writeFile(fileURLToPath(new URL('../provenance/double-kitchen.json', import.meta.url)), JSON.stringify({
  source_page: 'https://www.4399.com/flash/226526.htm',
  source_entry: manifest.entry,
  engine: 'Cocos Creator 2.4.2',
  acquisition_manifest_sha256: sha256(await readFile(resolve(source, 'tools/acquisition-manifest.json'))),
  source_identity: expected,
  removed_modules: removedModules,
  changes: ['Remove platform HTML, base.xml, h5api loader and vendor SDK files from publication.', 'Remove six vendor modules and their bootstrap entries; replace AD dispatch with independent local adapter.', 'Replace serialized native-ad components while preserving component UUIDs and serialized properties.', 'Remove vendor calls from menu, privacy, channel and online-reward components.', 'Namespace localStorage as double-kitchen-4399-v1; preserve game data schema.', 'Send readiness after Menu scene launch; serve only same-origin static resources.', 'Normalize boot/CSS line endings and trailing whitespace.'],
  ad_callbacks: 'Rewarded default: stopMusic; wait 100ms; AD.reward(callback, context) once with zero callback arguments; restore music. Each request captures its own callback and is queued. Optional provider lives only in platform-adapter.js.',
  preserved: 'Game logic, scene graphs, native image/audio assets and engine bytes are preserved except listed module and boot changes.',
  unknowns: ['Full equivalence of all gameplay paths and late progression is Unknown until runtime coverage is expanded.', 'Shared texture atlases may retain visual branding or unused advertisement artwork; arbitrary binary-internal dependency absence is Unknown.'],
  files,
  custom_files: custom,
}, null, 2) + '\n');
console.log(`Built double-kitchen: ${files.length} verified source files plus ${custom.length} local support files.`);
