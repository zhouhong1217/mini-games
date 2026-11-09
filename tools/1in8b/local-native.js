/* Browser-only archive. No server, payment provider, purchase token or network API. */
(() => {
  'use strict';
  const base = new URL('./', document.currentScript.src).href;
  const locale = () => document.documentElement.lang.toLowerCase() === 'zh-hans' ? 'zh-hans' : document.documentElement.lang.toLowerCase() === 'zh-hant' ? 'zh' : document.documentElement.lang.toLowerCase();
  const text = key => One8bLocal.text(key, locale());
  const localLang = () => typeof LANG === 'string' ? LANG : locale();
  const id = () => Array.from(crypto.getRandomValues(new Uint8Array(9)), b => 'abcdefghijklmnopqrstuvwxyz23456789'[b % 34]).join('');
  const all = async () => (await One8bLocal.list('memorial')).sort((a,b)=>b.at-a.at);
  const card = r => ({ ...r, name:r.d.name, iso:r.d.iso, born:r.d.by, age:r.d.age, sex:r.d.sex, li:r.d.li||[], gr:r.d.gr, epi:r.d.road||r.d.epi?.[0]||'', cm:r.d.frames?.[r.cv]?.m||r.d.frames?.find(f=>f.m)?.m });
  const clean = value => JSON.parse(JSON.stringify(value));
  async function callImpl(route, body={}) {
    const [name, query=''] = String(route).replace(/^local:/,'').split('?');
    const q=new URLSearchParams(query); const records=()=>all();
    if(window.One8bImportPending&&(body.d||['memstyle','home/room','memreact','memremove','home/set'].includes(name)))return{ok:false,why:'off'};
    if(name==='memorial' && body.d) {
      const prior=(await records()).find(r=>r.lifeKey===String(body.lk)&&r.lang===localLang());
      const key=prior?.id||id(); const r={id:key,at:prior?.at||Date.now(),updatedAt:Date.now(),lang:localLang(),locale:locale(),lifeKey:String(body.lk),d:clean(body.d),cv:body.cv??-1,st:clean(body.st||{}),rm:clean(body.rm||roomDefault(body.d.li||[])),candles:prior?.candles||0,words:prior?.words||[],act:Date.now()};
      await One8bLocal.put('memorial',key,r); return {ok:true,id:key,at:r.at};
    }
    if(name==='memorial') {
      let r;
      if(q.has('random')) r=(await records()).filter(x=>x.id!==q.get('not')&&(!q.get('lang')||x.lang===q.get('lang')))[0];
      else r=await One8bLocal.get('memorial',q.get('id'));
      return r?{ok:true,...r,hk:'local',hn:(await One8bLocal.get('home','local'))?.nm||''}:{ok:false,why:'gone'};
    }
    if(name==='memorials'||name==='memown') {
      if(body.id) {const r=await One8bLocal.get('memorial',body.id);return r?{ok:true,...r}:{ok:false,why:'gone'};}
      let list=await records();
      if(q.get('lang'))list=list.filter(r=>r.lang===q.get('lang'));
      if(q.get('iso'))list=list.filter(r=>r.d.iso===q.get('iso'));
      if(q.get('gk'))list=list.filter(r=>r.d.gr?.k===q.get('gk'));
      if(q.get('before'))list=list.filter(r=>r.at<+q.get('before'));
      return {ok:true,list:(name==='memorials'?list.slice(0,20):list).map(card)};
    }
    if(name==='memstyle'||name==='home/room'||name==='memreact') {
      const r=await One8bLocal.get('memorial',body.id);if(!r)return{ok:false,why:'gone'};
      if(name==='memstyle') {if(body.st)r.st=clean(body.st);if(body.cv!=null)r.cv=body.cv;if(body.frames)r.d.frames=clean(body.frames);if('bx'in body)r.d.bx=body.bx;}
      if(name==='home/room')r.rm=clean(body.rm);
      if(name==='memreact') {if(body.kind==='lit'||body.kind==='candle'||body.kind==='rem')r.candles++;if(body.kind==='word'&&body.w!=null)r.words=[[body.w,Date.now()]];}
      r.act=r.updatedAt=Date.now();await One8bLocal.put('memorial',r.id,r);return{ok:true,...r};
    }
    if(name==='memremove') {await One8bLocal.remove('memorial',body.id);return{ok:true};}
    if(name==='home/me'||name==='home/set'||name==='home') {
      let home=await One8bLocal.get('home','local')||{id:'local',nm:'',pub:false,lst:false,hk:'local'};
      if(name==='home/set'){if('nm'in body)home.nm=String(body.nm).slice(0,80);home.pub=false;home.lst=false;await One8bLocal.put('home','local',home);}
      return{ok:true,...home,list:(await records()).filter(r=>r.lang===localLang()).map(card)};
    }
    if(name==='memnews')return{ok:true,list:[]};
    return{ok:false,why:'off'};
  }
  function call(route,body){const task=(window.One8bArchiveWrites||Promise.resolve()).then(()=>callImpl(route,body));window.One8bArchiveWrites=task.catch(()=>{});return task}
  async function response(route, options={}) {
    if(!String(route).startsWith('local:')) {
      const u=new URL(route,location.href);if(u.origin!==location.origin)throw new Error('External resource disabled');
      return fetch(u,options);
    }
    const body=typeof options.body==='string'?JSON.parse(options.body||'{}'):{};
    const data=await call(route,body);return{ok:true,status:200,json:async()=>data};
  }
  function url(kind,key) {const u=new URL(locale()+'/',base);if(key)u.hash=kind+'='+encodeURIComponent(key);return u.href;}
  function backup() {document.querySelector('#one8b-export-backup')?.click();}
  window.One8bBeforeBackup=async()=>{try{if(typeof save==='function')save();await Promise.all([window.One8bPastWrites,window.One8bArchiveWrites])}catch(error){console.error(error)}};
  function markLocal(){const intro=document.querySelector('#memoBox > .cm-sub');if(intro)intro.textContent=text('localOnly');const list=document.querySelector('#memoItems')?.parentElement?.querySelector('.cm-sub');if(list)list.textContent=text('localOnly');const bar=document.querySelector('#memo .memo-bar > span');if(bar)bar.textContent=text('localOnly');document.querySelectorAll('#memoCopy,#memoRep').forEach(el=>el.remove())}
  window.One8bNative={markLocal,base,locale,text,asset:path=>new URL(String(path).replace(/^\//,''),base).href,call,response,url,backup};
  const startToolbar=()=>{
    One8bLocal.storage.setItem('language',locale());
    const p=new URLSearchParams(location.search);let portal=p.get('lang');if(!['en','zh-CN'].includes(portal))portal=One8bLocal.storage.getItem('portal-language')||'zh-CN';
    One8bLocal.storage.setItem('portal-language',portal);
    One8bLocal.mountToolbar({locale:locale(),baseUrl:base,portalLanguage:portal});markLocal();
    document.addEventListener('click',e=>{const a=e.target.closest('a[data-lang]');if(a){One8bLocal.storage.setItem('language',a.dataset.lang);const u=new URL(a.href);u.searchParams.set('lang',portal);a.href=u.href;}});
  };
  addEventListener('hashchange',()=>{const params=new URLSearchParams(location.hash.slice(1));const key=params.get('memorial');if(key&&typeof openMemorial==='function')openMemorial(key)});
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',startToolbar,{once:true});else startToolbar();
  addEventListener('one8b:beforeimport',event=>{window.One8bImportPending=true;event.detail?.waitUntil(Promise.all([window.One8bPastWrites,window.One8bArchiveWrites]));document.querySelectorAll('#app,#sheet,#memo,#film,#photos,#album,#book').forEach(el=>el.inert=true);try{if(S)S.paused=true;}catch{}});
  addEventListener('one8b:afterimport',event=>{if(event.detail?.ok===false){window.One8bImportPending=false;document.querySelectorAll('#app,#sheet,#memo,#film,#photos,#album,#book').forEach(el=>el.inert=false)};try{if(S)S.paused=true;}catch{}});
})();
