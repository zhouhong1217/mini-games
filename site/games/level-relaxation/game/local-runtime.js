(function(){
 'use strict';
 var ready=false,failed=false,progress=0;
 function send(type,data){parent.postMessage(Object.assign({type:'level-relaxation:'+type},data||{}),location.origin);}
 window.LevelRelaxationRuntime={
  progress:function(value){value=Math.max(progress,Math.min(.98,Number(value)||0));progress=value;send('progress',{progress:value});},
  error:function(message){if(!failed){failed=true;send('error',{message:String(message||'加载失败')});}}
 };
 window.addEventListener('error',function(event){LevelRelaxationRuntime.error(event.message);});
 window.addEventListener('unhandledrejection',function(event){LevelRelaxationRuntime.error(String(event.reason));});
 function saveNow(){if(typeof SaveData!=='undefined'&&typeof GDefine!=='undefined'&&SaveData.s_pInstance){LevelRelaxationPlatform.writeStorage(GDefine.MyAppName+'_savedata',JSON.stringify(SaveData.s_pInstance));}}
 window.addEventListener('pagehide',saveNow);
 document.addEventListener('visibilitychange',function(){if(document.hidden)saveNow();});
 var check=setInterval(function(){
  if(ready||failed)return clearInterval(check);
  if(typeof PageManager==='undefined'||!PageManager.Instance())return;
  var page=PageManager.Instance().GetCurrentPage();
  if(page&&typeof LoginPage!=='undefined'&&page instanceof LoginPage){
   requestAnimationFrame(function(){requestAnimationFrame(function(){if(ready)return;ready=true;send('progress',{progress:1});send('ready');});});
  }
 },100);
}());
