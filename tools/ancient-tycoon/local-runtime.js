(() => {
  'use strict';
  const send=(kind,data={})=>parent.postMessage({type:'ancient-tycoon:'+kind,...data},location.origin);
  let game=null,ready=false,lastProgress=0;
  // 浏览器禁止自动播放时，等待首个真实输入后重试音乐。
  const nativePlay=HTMLMediaElement.prototype.play;
  const waitingAudio=new Set();
  HTMLMediaElement.prototype.play=function(...args){
    const result=nativePlay.apply(this,args);
    return result?.catch(error=>{if(error.name==='NotAllowedError'){waitingAudio.add(this);return}throw error});
  };
  const unlockAudio=()=>{for(const audio of waitingAudio){waitingAudio.delete(audio);audio.play()?.catch(()=>{})}};
  addEventListener('pointerdown',unlockAudio,{once:true});
  addEventListener('touchstart',unlockAudio,{once:true});
  const progress=value=>{if(value>lastProgress){lastProgress=value;send('progress',{progress:value})}};
  const failure=()=>send('error');
  addEventListener('error',event=>{if(event.target instanceof HTMLScriptElement||(!ready&&event.error))failure()},true);
  addEventListener('unhandledrejection',()=>{if(!ready)failure()});
  window.AncientTycoonRuntime=Object.freeze({
    bind(value){game=value},
    snapshot(){
      if(!game)return null;
      const s=game.StorageManager.instance;
      return {coin:s.Coin,level:s.Level,guide:game.GuideManager.instance.GuideIndex,production:s.productionProgress,sale:s.saleProgress,scene:game.GameMgr.sceneTag};
    }
  });
  const poll=setInterval(()=>{
    if(!game||!window.Laya?.stage)return;
    const label=Laya.stage._children?.find(x=>x.constructor.name==='Label');
    if(label?.text)progress(Math.min(.85,label.text.split('/').length/6*.85));
    const root=Laya.stage.getChildByName('root');
    const ui=root?._children?.some(x=>x.name==='ui_game/mainGame'&&x.visible);
    if(ui&&game.GameMgr.currentSceneCtrl){
      ready=true;clearInterval(poll);progress(1);send('ready');
      // 保持原存档结构，失去焦点和离开页面时立即落盘。
      const save=()=>{try{game.StorageManager.instance.syncData()}catch{}};
      addEventListener('pagehide',save);document.addEventListener('visibilitychange',()=>{if(document.hidden)save()});
    }
  },250);
})();
