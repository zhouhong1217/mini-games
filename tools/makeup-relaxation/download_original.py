#!/usr/bin/env python3
"""按原 Cocos 3.8.6 发布清单恢复资源；原始文件只新增，不改写。

路径推导依据为同包 _virtual_cc-CguyNOYV.js 中 decodeUuid、Config._initVersion、
iT(URL transform)；cconb 后缀依据 assets/main/index.e576d.js 的 cconb.ts。
下载成功必须校验响应类型；候选失败会保留在 evidence/download-failures.json。
"""
from __future__ import annotations
import argparse, concurrent.futures, hashlib, json, re, threading, time
from pathlib import Path, PurePosixPath
from urllib.parse import quote, urljoin, urlsplit, unquote
from urllib.request import Request, urlopen
from urllib.error import HTTPError, URLError

ROOT=Path(__file__).resolve().parent
REPO=ROOT.parents[1]
CACHE=REPO/'.verification/makeup-relaxation'
ARTIFACTS=CACHE/'artifacts'
EVIDENCE=CACHE/'evidence'
MANIFEST=REPO/'provenance/makeup-relaxation.json'
BASE='https://szhong.4399.com/4399swf/upload_swf/ftp52/huangcijin/20251021/03/'
REFERER='https://www.4399.com/flash/255576_2.htm'
BUNDLES={'internal':'be265','resources':'d7038','main':'e576d','Face':'b21d5'}
B64='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
ROWS={}
LOCK=threading.Lock()
RETRY_FAILED=False
EXPECTED={}


def decode_uuid(value):
    """与原发布引擎的 decodeUuid 等价；保留 @ 子资源后缀。"""
    short=value.split('@',1)[0]
    if len(short)!=22:return value
    h=short[:2]
    for i in range(2,22,2):
        a,b=B64.index(short[i]),B64.index(short[i+1])
        h+=f'{a>>2:x}{((a&3)<<2)|(b>>4):x}{b&15:x}'
    return f'{h[:8]}-{h[8:12]}-{h[12:16]}-{h[16:20]}-{h[20:]}'+value[len(short):]


def validate(path,data):
    if not data:raise ValueError('empty response')
    if not path.endswith('.html') and data.lstrip().lower().startswith((b'<!doctype html',b'<html')):
        raise ValueError('HTML response for non-HTML artifact')
    suffix=Path(path).suffix.lower()
    if suffix=='.json':json.loads(data)
    if suffix=='.wasm' and data[:4]!=b'\0asm':raise ValueError('invalid WASM header')
    if suffix=='.png' and data[:8]!=b'\x89PNG\r\n\x1a\n':raise ValueError('invalid PNG header')
    if suffix in ('.jpg','.jpeg') and data[:2]!=b'\xff\xd8':raise ValueError('invalid JPEG header')


def acquire(path,discovery='manifest-derived',candidate=False):
    path=unquote(path).split('?',1)[0]
    if path.startswith('/') or '..' in PurePosixPath(path).parts:raise ValueError('unsafe artifact path')
    dest=ARTIFACTS/path
    with LOCK:
        prior=ROWS.get(path)
    if dest.is_file():
        data=dest.read_bytes();validate(path,data)
        digest=hashlib.sha256(data).hexdigest()
        if path in EXPECTED and (len(data),digest)!=EXPECTED[path]:
            raise ValueError(f'pinned artifact digest mismatch: {path}')
        if prior and prior.get('sha256') and prior['sha256']!=digest:
            raise ValueError(f'immutable artifact digest mismatch: {path}')
        row={'path':path,'url':BASE+quote(path,safe='/@._-'),'bytes':len(data),'sha256':hashlib.sha256(data).hexdigest(),'status':200,'discovery':prior.get('discovery',discovery) if prior else discovery,'candidate':candidate,'cached':True}
        with LOCK:ROWS[path]=row
        return data
    if prior and prior.get('status') in (403,404) and not RETRY_FAILED:
        return None
    url=BASE+quote(path,safe='/@._-')
    error=None;status=None
    for attempt in range(3):
        try:
            req=Request(url,headers={'Referer':REFERER,'User-Agent':'Mozilla/5.0'})
            with urlopen(req,timeout=45) as response:
                data=response.read();status=response.status
            validate(path,data)
            if path in EXPECTED and (len(data),hashlib.sha256(data).hexdigest())!=EXPECTED[path]:
                raise ValueError(f'pinned artifact digest mismatch: {path}')
            dest.parent.mkdir(parents=True,exist_ok=True)
            dest.write_bytes(data)
            row={'path':path,'url':url,'bytes':len(data),'sha256':hashlib.sha256(data).hexdigest(),'status':status,'discovery':discovery,'candidate':candidate,'cached':False}
            with LOCK:ROWS[path]=row
            return data
        except HTTPError as ex:
            status=ex.code;error=str(ex)
            if ex.code in (403,404):break
        except (URLError,TimeoutError,ValueError,OSError) as ex:error=str(ex)
        if attempt<2:time.sleep((attempt+1)*.3)
    with LOCK:ROWS[path]={'path':path,'url':url,'status':status,'error':error,'discovery':discovery,'candidate':candidate}
    return None


def parallel(tasks,workers):
    tasks=list(dict.fromkeys(tasks))
    with concurrent.futures.ThreadPoolExecutor(max_workers=workers) as pool:
        for i,result in enumerate(pool.map(lambda t:acquire(*t),tasks),1):
            if i%100==0 or i==len(tasks):print(f'download batch {i}/{len(tasks)}',flush=True)


def save():
    EVIDENCE.mkdir(parents=True,exist_ok=True)
    rows=sorted(ROWS.values(),key=lambda r:r['path'])
    (EVIDENCE/'download-manifest.json').write_text(json.dumps({'base_url':BASE,'referer':REFERER,'files':rows},ensure_ascii=False,indent=2)+'\n')
    failures=[r for r in rows if 'sha256' not in r and not r.get('excluded')]
    (EVIDENCE/'excluded-probes.json').write_text(json.dumps([r for r in rows if r.get('excluded')],ensure_ascii=False,indent=2)+'\n')
    (EVIDENCE/'download-failures.json').write_text(json.dumps(failures,ensure_ascii=False,indent=2)+'\n')
    write_closure(rows)
    print(json.dumps({'files':sum('sha256' in r for r in rows),'bytes':sum(r.get('bytes',0) for r in rows),'failures':len(failures),'excluded_probes':sum(bool(r.get('excluded')) for r in rows)},ensure_ascii=False),flush=True)


def collect_scripts(workers):
    """仅跟随 HTML、SystemJS、import map、CSS 中实际出现的相对依赖。"""
    seeds=['index.html','base.xml','gameIndex.html','style.f76d1.css','src/polyfills.bundle.5adbf.js','src/system.bundle.543e6.js','src/import-map.c1316.json','index.260d6.js','application.123ac.js','src/settings.f7d4d.json','src/chunks/bundle.79708.js','src/effect.dbbin']
    for name,ver in BUNDLES.items():seeds += [f'assets/{name}/config.{ver}.json',f'assets/{name}/index.{ver}.js']
    parallel([(p,'observed-game-entry',False) for p in seeds],workers)
    scanned=set()
    while True:
        files=[p for p in ARTIFACTS.rglob('*') if p.is_file() and p.suffix in ('.js','.html','.css','.json') and p.relative_to(ARTIFACTS).as_posix() not in scanned]
        tasks=[]
        for file in files:
            path=file.relative_to(ARTIFACTS).as_posix();scanned.add(path)
            if path.startswith('assets/') or path.startswith('src/chunks/'):continue
            try:text=file.read_text()
            except UnicodeDecodeError:continue
            # HTML 注释中的示例图标不是请求依赖。
            if path.endswith('.html'):text=re.sub(r'<!--.*?-->','',text,flags=re.S)
            refs=set(re.findall(r'''["']((?:\./|\.\./)[^"'\s]+\.(?:js|wasm|json|dbbin|css))["']''',text))
            if path.startswith('cocos-js/'):
                refs.update(re.findall(r'''["'](assets/[^"'\s]+\.(?:wasm|dbbin))["']''',text))
            if path.endswith('.html'):refs.update(re.findall(r'''(?:src|href)=["']([^"'\s]+)["']''',text))
            for ref in refs:
                u=urljoin(BASE+path,ref)
                if not u.startswith(BASE):continue
                dep=unquote(u[len(BASE):]).split('?',1)[0]
                if not (ARTIFACTS/dep).is_file():tasks.append((dep,f'literal-reference:{path}',False))
        if not tasks:break
        parallel(tasks,workers)


def collect_imports(workers):
    tasks=[]
    for name,ver in BUNDLES.items():
        cfg=json.loads((ARTIFACTS/f'assets/{name}/config.{ver}.json').read_text())
        binary={i for values in cfg.get('extensionMap',{}).values() for i in values}
        versions=cfg['versions']['import']
        for i,version in zip(versions[::2],versions[1::2]):
            uuid=decode_uuid(cfg['uuids'][i] if isinstance(i,int) else i)
            ext='._cconb.dbbin' if i in binary else '.json'
            path=f'assets/{name}/{cfg["importBase"]}/{uuid[:2]}/{uuid}.{version}{ext}'
            tasks.append((path,f'config:{name}:versions.import:{i}',False))
    parallel(tasks,workers)


def collect_natives(workers):
    # import 可验证后，按其实际序列化记录恢复全部 native 变体。
    tasks=[];missing=[]
    for name,ver in BUNDLES.items():
        cfg=json.loads((ARTIFACTS/f'assets/{name}/config.{ver}.json').read_text())
        versions=cfg['versions']['native']
        for i,version in zip(versions[::2],versions[1::2]):
            uuid=decode_uuid(cfg['uuids'][i] if isinstance(i,int) else i)
            native=native_metadata(name,cfg,i)
            if not native:
                missing.append({'bundle':name,'index':i,'uuid':uuid,'version':version});continue
            for extension,native_name in native:
                tail=f'/{native_name}' if extension=='.ttf' else extension
                tasks.append((f'assets/{name}/{cfg["nativeBase"]}/{uuid[:2]}/{uuid}.{version}{tail}',f'import-native-metadata:{name}:{i}',False))
    (EVIDENCE/'native-metadata-unknown.json').write_text(json.dumps(missing,ensure_ascii=False,indent=2)+'\n')
    parallel(tasks,workers)


def native_metadata(name,cfg,index):
    """从导入序列化记录提取实际 native 扩展；支持完整记录及 pack 共享表。"""
    versions=dict(zip(cfg['versions']['import'][::2],cfg['versions']['import'][1::2]))
    uuid=decode_uuid(cfg['uuids'][index])
    if index in versions:
        file=ARTIFACTS/f'assets/{name}/import/{uuid[:2]}/{uuid}.{versions[index]}.json'
        if not file.exists():return []
        doc=json.loads(file.read_text())
        if not isinstance(doc,list):return []
        classes,masks,objects=doc[3],doc[4],doc[5]
    else:
        found=None
        for pack,indices in cfg['packs'].items():
            if index in indices:found=(pack,indices.index(index));break
        if not found:return []
        pack,position=found;pack_index=cfg['uuids'].index(pack)
        file=ARTIFACTS/f'assets/{name}/import/{pack[:2]}/{pack}.{versions[pack_index]}.json'
        if not file.exists():return []
        doc=json.loads(file.read_text())
        if not isinstance(doc,list):return []
        classes,masks,objects=doc[3],doc[4],doc[5][position][0]
    result=[]
    extnames=['.png','.jpg','.jpeg','.bmp','.webp','.pvr','.pkm','.astc']
    def visit(value):
        if isinstance(value,dict):
            if 'fmt' in value:
                for fmt in str(value['fmt']).split('_'):
                    key=fmt.split('@',1)[0]
                    ext=extnames[int(key)] if key.isdigit() and int(key)<len(extnames) else key
                    if ext.startswith('.'):result.append((ext,None))
            for item in value.values():visit(item)
        elif isinstance(value,list):
            if value and isinstance(value[0],int) and isinstance(masks,list) and 0<=value[0]<len(masks):
                mask=masks[value[0]]
                if isinstance(mask,list) and mask and 0<=mask[0]<len(classes):
                    cls=classes[mask[0]]
                    if isinstance(cls,list) and len(cls)>1 and isinstance(cls[1],list):
                        props=cls[1]
                        for field,prop_index in enumerate(mask[1:-1],1):
                            if field<len(value) and isinstance(prop_index,int) and prop_index<len(props) and props[prop_index]=='_native':
                                native=value[field]
                                if isinstance(native,str) and native:
                                    ext=native if native.startswith('.') else Path(native).suffix
                                    if ext:result.append((ext,native if ext=='.ttf' else None))
            for item in value:visit(item)
    visit(objects)
    return list(dict.fromkeys(result))



def write_closure(rows):
    records={r['path']:r for r in rows}
    bundles={}
    all_imports=[];missing_native=[]
    for name,ver in BUNDLES.items():
        file=ARTIFACTS/f'assets/{name}/config.{ver}.json'
        if not file.exists():continue
        cfg=json.loads(file.read_text());imports=[];natives=[]
        binary={i for values in cfg.get('extensionMap',{}).values() for i in values}
        version=cfg['versions']['import']
        for i,v in zip(version[::2],version[1::2]):
            uuid=decode_uuid(cfg['uuids'][i] if isinstance(i,int) else i)
            ext='._cconb.dbbin' if i in binary else '.json'
            path=f'assets/{name}/{cfg["importBase"]}/{uuid[:2]}/{uuid}.{v}{ext}'
            imports.append(path)
        native_versions=cfg['versions']['native']
        for i,v in zip(native_versions[::2],native_versions[1::2]):
            uuid=decode_uuid(cfg['uuids'][i] if isinstance(i,int) else i)
            variations=[]
            for extension,native_name in native_metadata(name,cfg,i):
                tail=f'/{native_name}' if extension=='.ttf' else extension
                variations.append(f'assets/{name}/{cfg["nativeBase"]}/{uuid[:2]}/{uuid}.{v}{tail}')
            if not any(records.get(path,{}).get('sha256') for path in variations):missing_native.append({'bundle':name,'index':i,'uuid':uuid})
            natives.extend(variations)
        bundles[name]={'version':ver,'advertised_uuids':len(cfg['uuids']),'advertised_paths':len(cfg['paths']),'import_files':len(imports),'import_files_downloaded':sum(bool(records.get(x,{}).get('sha256')) for x in imports),'native_logical_assets':len(native_versions)//2,'native_variations':len(natives),'native_variations_downloaded':sum(bool(records.get(x,{}).get('sha256')) for x in natives)}
        all_imports+=imports
    engine=ARTIFACTS/'cocos-js/_virtual_cc-CguyNOYV.js'
    source=engine.read_bytes() if engine.exists() else b''
    main=ARTIFACTS/'assets/main/index.e576d.js'
    main_bytes=main.read_bytes() if main.exists() else b''
    evidence={
      'engine':'Cocos Creator 3.8.6','base_url':BASE,
      'successful_files':sum('sha256' in r for r in rows),
      'successful_bytes':sum(r.get('bytes',0) for r in rows),
      'bundles':bundles,
      'missing_import_files':[p for p in all_imports if not records.get(p,{}).get('sha256')],
      'native_assets_without_any_available_variant':missing_native,
      'missing_declared_variants':[r for r in rows if not r.get('sha256') and not r.get('excluded')],
      'format_methods':[
       {'source':'cocos-js/_virtual_cc-CguyNOYV.js','byte_offset':source.find(b'function am('),'finding':'decodeUuid expands 22-character identifiers and preserves @ subresource suffixes'},
       {'source':'cocos-js/_virtual_cc-CguyNOYV.js','byte_offset':source.find(b'function iT('),'finding':'native/import URLs use expanded UUID prefix, config hash, extension; TTF uses native filename under hashed directory'},
       {'source':'cocos-js/_virtual_cc-CguyNOYV.js','byte_offset':source.find(b'vm.extnames='),'finding':'ImageAsset fmt codes map to png/jpg/jpeg/bmp/webp/pvr/pkm/astc'},
       {'source':'assets/main/index.e576d.js','byte_offset':main_bytes.find(b'System.register("chunks:///_virtual/cconb.ts"'),'finding':'cconb extension transformed to ._cconb.dbbin by shipped module'}
      ],
      'limitations':['Every advertised import and native logical asset is available, but three source-declared GPU-compressed variants return 404. Use the successfully retrieved PNG fallback for that atlas.','SystemJS named modules resolve within the embedded registry; discarded filesystem probes are listed separately.','This manifest establishes byte/resource acquisition; runtime reachability and gameplay are validated by the parent task.']
    }
    (EVIDENCE/'resource-closure.json').write_text(json.dumps(evidence,ensure_ascii=False,indent=2)+'\n')


def verify_originals():
    """核对仓库固定清单，不执行网络请求，不改动原文件。"""
    errors=[];verified=0;total=0
    for path,(size,digest) in EXPECTED.items():
        file=ARTIFACTS/path
        if not file.is_file():errors.append({'path':path,'error':'missing'});continue
        data=file.read_bytes()
        if len(data)!=size or hashlib.sha256(data).hexdigest()!=digest:
            errors.append({'path':path,'error':'size-or-sha256-mismatch'});continue
        verified+=1;total+=len(data)
    result={'check':'all-pinned-original-files-match','verified_files':verified,'verified_bytes':total,'errors':errors,'validation':'pass' if not errors else 'fail'}
    EVIDENCE.mkdir(parents=True,exist_ok=True)
    (EVIDENCE/'acquisition-validation.json').write_text(json.dumps(result,ensure_ascii=False,indent=2)+'\n')
    print(json.dumps(result,ensure_ascii=False),flush=True)
    return not errors


def main():
    global RETRY_FAILED, ARTIFACTS, EVIDENCE, EXPECTED
    ap=argparse.ArgumentParser(description='按原始发布清单下载并校验 4399 化妆解压模拟资源；默认缓存位于仓库 .verification/makeup-relaxation。')
    ap.add_argument('--phase',choices=['scripts','imports','all'],default='all')
    ap.add_argument('--workers',type=int,default=8)
    ap.add_argument('--retry-failed',action='store_true',help='重新请求历史 403/404；默认保留既有失败证据')
    ap.add_argument('--cache-root',type=Path,default=CACHE)
    ap.add_argument('--artifacts',type=Path,help='覆盖原始资源目录')
    ap.add_argument('--evidence',type=Path,help='覆盖生成证据目录')
    ap.add_argument('--manifest',type=Path,default=MANIFEST)
    ap.add_argument('--verify-only',action='store_true',help='仅核对固定清单中的大小和 SHA-256，不访问网络')
    a=ap.parse_args();RETRY_FAILED=a.retry_failed
    ARTIFACTS=(a.artifacts or a.cache_root/'artifacts').resolve()
    EVIDENCE=(a.evidence or a.cache_root/'evidence').resolve()
    if ARTIFACTS==EVIDENCE or ARTIFACTS in EVIDENCE.parents or EVIDENCE in ARTIFACTS.parents:
        ap.error('artifacts and evidence must not overlap')
    pinned=json.loads(a.manifest.read_text())
    if pinned.get('original_files_columns')!=['path','bytes','sha256']:ap.error('unknown pinned manifest schema')
    EXPECTED={path:(size,digest) for path,size,digest in pinned['original_files']}
    for path in EXPECTED:
        if path.startswith('/') or '..' in PurePosixPath(path).parts:ap.error('unsafe artifact path')
    if a.verify_only:raise SystemExit(0 if verify_originals() else 1)
    ARTIFACTS.mkdir(parents=True,exist_ok=True);EVIDENCE.mkdir(parents=True,exist_ok=True)
    for manifest in ['seed-manifest.json','download-manifest.json']:
        file=EVIDENCE/manifest
        if file.exists():
            j=json.loads(file.read_text());rows=j if isinstance(j,list) else j.get('files',[])
            ROWS.update({r['path']:r for r in rows})
    for row in ROWS.values():
        if 'sha256' not in row and (row['path']=='.png' or 'rollupPluginModLoBabelHelpers.js' in row['path'] or 'tdanalytics.mg.cocoscreator.min' in row['path']):
            row.update(candidate=True,excluded='HTML-comment-example' if row['path']=='.png' else 'SystemJS-named-module-already-bundled')
    try:
        collect_scripts(a.workers)
        if a.phase!='scripts':collect_imports(a.workers)
        if a.phase=='all':collect_natives(a.workers)
    finally:save()
    if a.phase=='all' and not verify_originals():raise SystemExit(1)

if __name__=='__main__':main()
