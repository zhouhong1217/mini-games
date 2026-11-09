// 广告供应商的唯一接入位置。默认只完成原游戏奖励流程。
(function(){
 'use strict';
 var prefix='level-relaxation-4399-v1:',memory=new Map(),provider=null,queue=Promise.resolve();
 function readStorage(key,fallback){var value;try{value=localStorage.getItem(prefix+key);}catch(e){value=memory.get(key);}return value==null||value===''?fallback:value;}
 function writeStorage(key,value){memory.set(key,String(value));try{localStorage.setItem(prefix+key,String(value));}catch(e){}}
 function clearStorage(){memory.clear();try{Object.keys(localStorage).filter(function(key){return key.indexOf(prefix)===0;}).forEach(function(key){localStorage.removeItem(key);});}catch(e){}}
 function play(kind,context,callback,placement){
  function run(){return new Promise(function(resolve){
   var finished=false;context.m_bRewardedVideoShowing=true;context.PauseAllSound();
   function finish(success){if(finished)return;finished=true;context.m_bRewardedVideoShowing=false;context.ResumeAllSound();context.ClearMouseHook();try{if(success!==false&&typeof callback==='function')callback(context);}finally{resolve();}}
   if(provider&&typeof provider[kind]==='function'){
    try{Promise.resolve(provider[kind]({placement:placement||kind})).then(function(result){finish(result!==false);},function(){finish(false);});}catch(e){finish(false);}
   }else setTimeout(function(){finish(true);},100);
  });}
  var current=queue.then(run,run);queue=current.catch(function(){});return current;
 }
 window.LevelRelaxationPlatform={
  readStorage:readStorage,writeStorage:writeStorage,clearStorage:clearStorage,
  setProvider:function(value){provider=value||null;},
  isRewardedReady:function(){return !provider||typeof provider.isRewardedReady!=='function'||provider.isRewardedReady();},
  rewarded:function(context,callback,placement){return play('rewarded',context,callback,placement);},
  interstitial:function(context,callback){return play('interstitial',context,callback);},
  banner:function(show,flag){if(provider&&typeof provider.banner==='function')return provider.banner(show,flag);},
  moreGames:function(){return false;}
 };
}());
