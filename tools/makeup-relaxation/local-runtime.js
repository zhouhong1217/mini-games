/* 本地存档隔离、加载通知和只读验证入口。 */
(() => {
  'use strict';
  const prefix = 'makeup-relaxation-4399-v1:';
  let nativeStorage;
  const memory = new Map();
  try { nativeStorage=window.localStorage; } catch {}
  const keys=()=>nativeStorage?Array.from({length:nativeStorage.length},(_,i)=>nativeStorage.key(i)).filter(k=>k?.startsWith(prefix)).map(k=>k.slice(prefix.length)):[...memory.keys()];
  const storage={getItem(k){try{return nativeStorage?nativeStorage.getItem(prefix+k):(memory.get(String(k))??null);}catch{return memory.get(String(k))??null;}},setItem(k,v){memory.set(String(k),String(v));try{nativeStorage?.setItem(prefix+k,String(v));}catch{}},removeItem(k){memory.delete(String(k));try{nativeStorage?.removeItem(prefix+k);}catch{}},clear(){keys().forEach(k=>this.removeItem(k));},key(i){return keys()[i]??null;},get length(){return keys().length;}};
  try { Object.defineProperty(window,'localStorage',{value:storage,configurable:true}); } catch {}
  const notify=(type,detail={})=>{if(parent!==window)parent.postMessage({source:'makeup-local',type,...detail},location.origin);};
  const state={ready:false,scene:null,error:null};
  let engine;
  const nodes=()=>{
    const result=[];
    function collect(n){if(!n)return;result.push(n);for(const c of n.children??[])collect(c);}
    collect(engine?.director.getScene());return result;
  };
  function removeMarkers(){
    for(const n of nodes())if(/^(video|shipin|视频|gxNode)$/i.test(n.name))n.active=false;
  }
  window.MakeupLocal={storage,attachEngine(cc){
    engine=cc;
    cc.game.onPostBaseInitDelegate.add(()=>{cc.sys.localStorage=storage;});
    cc.director.on(cc.Director.EVENT_BEFORE_DRAW,removeMarkers);
    window.__makeupLocal={get engine(){return engine;},get state(){return {...state};},nodes};
    notify('progress',{progress:.15});
    let last='';
    const timer=setInterval(()=>{
      const scene=cc.director.getScene();state.scene=scene?.name??null;
      if(scene?.name!==last){last=scene?.name;notify('progress',{progress:last==='FaceScene'?.9:last==='FaceFirst'?.6:.3});}
      if(nodes().some(n=>n.activeInHierarchy&&n.name==='uiKaiShi')){state.ready=true;notify('ready');clearInterval(timer);}
    },200);
    window.addEventListener('pagehide',()=>clearInterval(timer),{once:true});
  }};
  window.addEventListener('error',e=>{state.error=String(e.message);notify('error');});
  window.addEventListener('unhandledrejection',e=>{state.error=String(e.reason);notify('error');});
  notify('progress',{progress:.02});
})();
