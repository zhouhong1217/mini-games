// 独立 VM 验证本地接口；故障构建仅使用临时 manifest，不改原包和发布副本。
import assert from 'node:assert/strict';
import vm from 'node:vm';
import {readFile,writeFile,mkdir,mkdtemp,symlink,rm,readdir} from 'node:fs/promises';
import {spawnSync} from 'node:child_process';
import {createHash} from 'node:crypto';
import {tmpdir} from 'node:os';
import {resolve,join} from 'node:path';
import {fileURLToPath} from 'node:url';

const project=fileURLToPath(new URL('../',import.meta.url));
const support=resolve(project,'tools/ancient-tycoon');
const published=resolve(project,'site/games/ancient-tycoon/game');
const source=resolve(process.argv[2]||fileURLToPath(new URL('../../4399_245857_2026-11-09/',import.meta.url)));
const adapter=await readFile(resolve(support,'platform-adapter.js'),'utf8');
const compiled=new vm.Script(adapter,{filename:'ancient-tycoon/platform-adapter.js'});
const prefix='ancient-tycoon-4399-v1:';
const passed=[];
const tick=()=>new Promise(resolve=>setImmediate(resolve));
const deferred=()=>{let resolve,reject;const promise=new Promise((yes,no)=>{resolve=yes;reject=no});return {promise,resolve,reject}};
const sha=bytes=>createHash('sha256').update(bytes).digest('hex');

function fixture(){
  const sentinels=new Map([
    ['mini-games-language','en'],
    ['storage','other-game-save'],
    ['other-game-level','9'],
    ['apple-snake-4399-v1:level','4'],
  ]);
  const stored=new Map(sentinels),outbound=[];
  const blocked=kind=>{outbound.push(kind);throw new Error('Unexpected external dependency: '+kind)};
  const sandbox={
    console,
    localStorage:{getItem:key=>stored.get(String(key))??null,setItem:(key,value)=>stored.set(String(key),String(value))},
    fetch(){return blocked('fetch')},
    XMLHttpRequest:class{constructor(){blocked('XMLHttpRequest')}},
    WebSocket:class{constructor(){blocked('WebSocket')}},
    Image:class{constructor(){blocked('Image')}},
    navigator:{sendBeacon(){return blocked('sendBeacon')}},
    document:{createElement(){return blocked('document.createElement')}},
  };
  sandbox.window=sandbox;
  const context=vm.createContext(sandbox);
  compiled.runInContext(context,{timeout:1000});
  assert.ok(sandbox.AncientTycoonPlatform);
  return {api:sandbox.AncientTycoonPlatform,stored,sentinels,outbound,context};
}

async function test(name,run){await run();passed.push(name)}

await test('published adapter matches the maintained local implementation',async()=>{
  assert.equal(await readFile(resolve(published,'platform-adapter.js'),'utf8'),adapter);
});

await test('default reward succeeds exactly once with zero callback arguments',async()=>{
  const f=fixture(),calls=[];
  await f.api.rewarded('default',function(){calls.push(['success',arguments.length])},function(){calls.push(['fail',arguments.length])});
  await tick();
  assert.deepEqual(calls,[['success',0]]);
  assert.deepEqual(f.outbound,[]);
});

for(const [name,rewarded] of [
  ['false',()=>false],
  ['rejected promise',()=>Promise.reject(new Error('Provider rejection'))],
  ['synchronous exception',()=>{throw new Error('Provider exception')}],
]){
  await test('provider '+name+' fails exactly once with zero callback arguments',async()=>{
    const f=fixture(),calls=[];let attempts=0;
    f.api.setAdProvider({rewarded(loc){assert.equal(loc,'failure');attempts++;return rewarded()}});
    await f.api.rewarded('failure',function(){calls.push(['success',arguments.length])},function(){calls.push(['fail',arguments.length])});
    await tick();
    assert.equal(attempts,1);assert.deepEqual(calls,[['fail',0]]);assert.deepEqual(f.outbound,[]);
  });
}

await test('concurrent reward requests retain their callbacks and run serially',async()=>{
  const f=fixture(),first=deferred(),second=deferred(),events=[];
  f.api.setAdProvider({rewarded(loc){events.push('provider:'+loc);return loc==='first'?first.promise:second.promise}});
  const a=f.api.rewarded('first',function(){events.push('success:first:'+arguments.length)},()=>events.push('unexpected:first'));
  const b=f.api.rewarded('second',()=>events.push('unexpected:second'),function(){events.push('fail:second:'+arguments.length)});
  await tick();assert.deepEqual(events,['provider:first']);
  first.resolve(true);await a;await tick();
  assert.deepEqual(events,['provider:first','success:first:0','provider:second']);
  second.resolve(false);await b;await tick();
  assert.deepEqual(events,['provider:first','success:first:0','provider:second','fail:second:0']);
});

for(const successPath of [true,false]){
  await test((successPath?'success':'failure')+' callback exceptions do not replay callbacks or stall the next reward',async()=>{
    const f=fixture(),calls=[];const expected=new Error('Callback exception');
    f.api.setAdProvider({rewarded(){return successPath}});
    const callback=function(){calls.push(['throw',arguments.length]);throw expected};
    const other=()=>calls.push(['unexpected']);
    await assert.rejects(f.api.rewarded('throws',successPath?callback:other,successPath?other:callback),error=>error===expected);
    f.api.setAdProvider(null);
    await f.api.rewarded('next',function(){calls.push(['next',arguments.length])},other);
    await tick();assert.deepEqual(calls,[['throw',0],['next',0]]);
  });
}

await test('local saves and scores use the game prefix without changing other-game sentinels',async()=>{
  const f=fixture();
  f.api.write('storage',{coin:17,level:2});
  assert.deepEqual(JSON.parse(JSON.stringify(f.api.read('storage',null))),{coin:17,level:2});
  assert.equal(f.stored.get(prefix+'storage'),'{"coin":17,"level":2}');
  f.api.addScore('contribution',7);f.api.addScore('contribution',4);
  assert.equal(f.api.score('contribution'),11);
  assert.equal(f.stored.get(prefix+'rank:contribution'),'11');
  assert.equal(f.api.read('missing','fallback'),'fallback');
  f.stored.set(prefix+'malformed','{');assert.equal(f.api.read('malformed','fallback'),'fallback');
  for(const [key,value] of f.sentinels)assert.equal(f.stored.get(key),value,'Other-game sentinel changed: '+key);
  for(const key of f.stored.keys())assert.ok(f.sentinels.has(key)||key.startsWith(prefix),'Unnamespaced storage write: '+key);
  await f.api.localRequest('local:contacts');assert.deepEqual(f.outbound,[]);
});

await test('late-game local opponent callback supplies the requested number of labeled NPCs',async()=>{
  const f=fixture();
  const specification=JSON.parse(await readFile(resolve(support,'bundle-patches.json'),'utf8'));
  const patch=specification.patches.find(p=>p.replacement.startsWith('class SDKManager {'));
  assert.ok(patch,'Independent SDK boundary patch missing');
  new vm.Script('globalThis.LocalSDK = '+patch.replacement).runInContext(f.context,{timeout:1000});
  const sdk=vm.runInContext('new LocalSDK()',f.context);let attempts=0,npcs;
  sdk.getLuckyUsers(5,function(value){attempts++;assert.equal(arguments.length,1);npcs=value});
  assert.equal(attempts,1);assert.equal(npcs.length,5);
  assert.equal(new Set(Array.from(npcs,item=>item.nickname)).size,5);
  const atlases=JSON.parse(await readFile(resolve(published,'fileconfig.json'),'utf8'));
  const images=new Set(Object.values(atlases).flatMap(([base,names])=>names.map(name=>base+name)));
  for(const npc of npcs){assert.match(npc.nickname,/^本地对手 \d+$/);assert.ok(images.has(npc.avatar),'NPC avatar absent from atlas inventory: '+npc.avatar)}
});

for(const mode of ['corrupt manifest','missing required prefab'])await test(mode+' fails before changing the existing published game',async()=>{
  const tracked=['js/bundle.js','index.html','platform-adapter.js','local-runtime.js'];
  const before=new Map(await Promise.all(tracked.map(async name=>[name,sha(await readFile(resolve(published,name)))])));
  const beforeChildren=(await readdir(published)).sort();
  const scratch=await mkdtemp(join(tmpdir(),'tycoon-manifest-failure-'));
  try{
    await symlink(resolve(source,'original'),resolve(scratch,'original'),'dir');
    await mkdir(resolve(scratch,'tools'));
    const manifest=JSON.parse(await readFile(resolve(source,'tools/acquisition-manifest.json'),'utf8'));
    let expected;
    if(mode==='missing required prefab'){
      assert.ok(manifest.files.some(x=>x.path==='prefab/productionDialog.json'));
      manifest.files=manifest.files.filter(x=>x.path!=='prefab/productionDialog.json');
      expected='Required UI prefab missing: productionDialog';
    }else{
      const excluded=new Set(['index.html','gameIndex.html','base.xml','index.js','js/LWGSDK.js','js/bundle.js']);
      const broken=manifest.files.findLast(record=>!excluded.has(record.path));
      assert.ok(broken,'Need at least one copied asset to test manifest validation');
      broken.sha256=broken.sha256==='0'.repeat(64)?'1'.repeat(64):'0'.repeat(64);
      expected='Acquisition manifest mismatch: '+broken.path;
    }
    await writeFile(resolve(scratch,'tools/acquisition-manifest.json'),JSON.stringify(manifest));
    const result=spawnSync(process.execPath,[resolve(project,'scripts/build-tycoon.mjs'),scratch],{cwd:project,encoding:'utf8',timeout:30000,maxBuffer:1024*1024});
    assert.ifError(result.error);assert.equal(result.status,1,'Corrupt manifest must prevent a successful build');
    assert.ok(result.stderr.includes(expected),result.stderr);
    for(const [name,digest] of before)assert.equal(sha(await readFile(resolve(published,name))),digest,'Failed build changed '+name);
    assert.deepEqual((await readdir(published)).sort(),beforeChildren,'Failed build changed publication entries');
  }finally{await rm(scratch,{recursive:true,force:true})}
});

console.log(JSON.stringify({passed:true,checks:passed.length,results:passed},null,2));
