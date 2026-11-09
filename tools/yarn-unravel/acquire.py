"""从已确认 Cocos config 与压缩导入记录采集原包；不覆盖已留存文件。"""
import concurrent.futures, hashlib, json, pathlib, re, sys, threading, time, urllib.request, urllib.error, urllib.parse
ROOT=pathlib.Path(sys.argv[2]).resolve() if len(sys.argv)>2 else pathlib.Path(__file__).resolve().parents[1]
ORIG=ROOT/'original'
BASE='https://sda.4399.com/4399swf/upload_swf/ftp56/huangcijin/20261008/07/'
B64='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
lock=threading.Lock(); errors=[]; absent=[]; records={}; url_exceptions={}
if (ROOT/'tools/url-exceptions.json').exists():url_exceptions=json.loads((ROOT/'tools/url-exceptions.json').read_text())
def uuid(s):
 if len(s)!=22:return s
 h=s[:2]
 for k in range(2,22,2):
  a,b=map(B64.index,s[k:k+2]);h+=f'{a>>2:x}{((a&3)<<2)|(b>>4):x}{b&15:x}'
 return '-'.join([h[:8],h[8:12],h[12:16],h[16:20],h[20:]])
def fetch(p):
 f=ORIG/p
 if f.exists():return f.read_bytes()
 for attempt in range(3):
  try:
   url=url_exceptions.get(p,BASE+urllib.parse.quote(p))
   req=urllib.request.Request(url,headers={'Referer':'https://www.4399.com/flash/266510_3.htm','User-Agent':'Mozilla/5.0'})
   try:
    with urllib.request.urlopen(req,timeout=45) as r:b=r.read()
   except urllib.error.HTTPError as e:
    if e.code!=404 or p.isascii():raise
    # 原站存在一个GBK文件名；仅对明确的Unicode资源404尝试原始GBK路径。
    url=BASE+urllib.parse.quote(p,encoding='gbk')
    req=urllib.request.Request(url,headers={'Referer':'https://www.4399.com/flash/266510_3.htm','User-Agent':'Mozilla/5.0'})
    with urllib.request.urlopen(req,timeout=45) as r:b=r.read()
    with lock:url_exceptions[p]=url
   if b.lstrip().startswith((b'<!DOCTYPE html',b'<html')):raise ValueError('HTML resource response')
   f.parent.mkdir(parents=True,exist_ok=True);f.write_bytes(b)
   return b
  except urllib.error.HTTPError as e:
   if e.code==404:
    with lock:absent.append(p)
    return None
   if attempt==2:
    with lock:errors.append({'path':p,'error':str(e)})
  except Exception as e:
   if attempt==2:
    with lock:errors.append({'path':p,'error':str(e)})
 return None
def batch(paths):
 paths=sorted(set(paths));out={}
 with concurrent.futures.ThreadPoolExecutor(max_workers=16) as pool:
  tasks={pool.submit(fetch,p):p for p in paths}
  for n,t in enumerate(concurrent.futures.as_completed(tasks),1):
   b=t.result()
   if b is not None:out[tasks[t]]=b
   if n%1000==0:print(f'{n}/{len(paths)} files',flush=True)
 return out
def metadata():
 batch(['gameIndex.html','main.js','src/settings.js','cocos2d-js-min.js','physics-min.js','style-mobile.css','splash.png','assets/main/index.js','src/assets/_plugs/script/libs/clipper.4a73c.js','src/assets/_plugs/script/libs/fairygui.e141e.js','src/assets/_plugs/script/libs/polybool.min.749bc.js','src/assets/_plugs/script/to4399.js'])
 source=(ORIG/'assets/main/index.js').read_text()
 names=set(re.findall(r'"(bundle[A-Za-z0-9_]+)"',source))|{'fgui','resources','main','internal'}
 names|={p.parent.name for p in ORIG.glob('assets/*/config.json')}
 configs={}
 for p,b in batch([f'assets/{n}/config.json' for n in names]).items():configs[p.split('/')[1]]=json.loads(b)
 batch([f'assets/{n}/index.js' for n in configs])
 specs=[]
 for name,c in configs.items():
  us=[uuid(s) for s in c['uuids']];resolve=lambda x:us[x] if isinstance(x,int) else x
  packs={k:[resolve(v) for v in vs] for k,vs in c.get('packs',{}).items()}
  packed={u for vs in packs.values() for u in vs};redirect={resolve(v) for v in c.get('redirect',[])[::2]}
  versions=c.get('versions',{}).get('import',[]);vs={resolve(versions[k]):versions[k+1] for k in range(0,len(versions),2)}
  for u in set(packs)|(set(us)-packed-redirect):
   p=f'assets/{name}/{c.get("importBase","import")}/{u[:2]}/{u}'+('.'+vs[u] if u in vs else '')+'.json'
   specs.append({'path':p,'bundle':name,'uuid':u,'pack':packs.get(u)})
 batch([s['path'] for s in specs])
 (ROOT/'tools/import-specs.json').write_text(json.dumps(specs))
 (ROOT/'tools/config-inventory.json').write_text(json.dumps({'bundles':{n:{'uuids':len(c['uuids']),'packs':len(c.get('packs',{}))} for n,c in configs.items()},'absent':absent,'errors':errors},indent=2))
 print(json.dumps({'bundles':len(configs),'imports':len(specs),'absent':len(absent),'errors':errors}),flush=True)
def natives():
 specs=json.loads((ROOT/'tools/native-specs.json').read_text());batch([s['path'] for s in specs])
 (ROOT/'tools/native-download-result.json').write_text(json.dumps({'absent':absent,'errors':errors},indent=2))
 (ROOT/'tools/url-exceptions.json').write_text(json.dumps(url_exceptions,indent=2))
 print(json.dumps({'native_specs':len(specs),'absent':len(absent),'errors':errors}),flush=True)
def native_specs():
 ns=json.loads((ROOT/'tools/native-records.json').read_text())
 extra=ROOT/'tools/extra-native-records.json'
 if extra.exists():ns+=json.loads(extra.read_text())
 configs={p.parent.name:json.loads(p.read_text()) for p in ORIG.glob('assets/*/config.json')}
 out=[]
 for n in ns:
  b,u,ext=n['bundle'],n['uuid'],n['native'];c=configs[b];v=c.get('versions',{}).get('native',[])
  vs={uuid(c['uuids'][v[k]]) if isinstance(v[k],int) else v[k]:v[k+1] for k in range(0,len(v),2)};suffix='.'+vs[u] if u in vs else ''
  nb=c.get('nativeBase','native')
  if ext.startswith('/'):p=ext[1:]
  elif ext.endswith('.ttf') and not ext.startswith('.'):p=f'assets/{b}/{nb}/{u[:2]}/{u}{suffix}/{ext}'
  else:p=f'assets/{b}/{nb}/{u[:2]}/{u}{suffix}{ext}'
  if p.endswith('.bin'):p=p[:-4]+'.dbbin'
  if p.endswith('.cconb'):p=p[:-6]+'._cconb.dbbin'
  out.append({'path':p,'bundle':b,'uuid':u,'native':ext})
 (ROOT/'tools/native-specs.json').write_text(json.dumps(out))
 print({'native_specs':len(out)})
def manifest():
 files=[]
 for f in sorted(ORIG.rglob('*')):
  if not f.is_file():continue
  p=str(f.relative_to(ORIG));b=f.read_bytes();files.append({'path':p,'bytes':len(b),'sha256':hashlib.sha256(b).hexdigest(),'url':url_exceptions.get(p,BASE+urllib.parse.quote(p)) if p not in ['detail.gb18030.html','direct-access-error.html'] else None})
 (ROOT/'evidence/acquisition-manifest.json').write_text(json.dumps({'base':BASE,'files':files,'bytes':sum(x['bytes'] for x in files)},indent=2))
 print({'files':len(files),'bytes':sum(x['bytes'] for x in files)})
if __name__=='__main__':{'metadata':metadata,'native-specs':native_specs,'natives':natives,'manifest':manifest}[sys.argv[1]]()
