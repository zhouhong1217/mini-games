// 广告供应商仅通过独立接口接入；默认保留原成功回调的零参数语义。
(() => {
  'use strict';
  const prefix='ancient-tycoon-4399-v1:';
  let provider=null;
  let queue=Promise.resolve();
  const read=(key,fallback)=>{try{const value=localStorage.getItem(prefix+key);return value===null?fallback:JSON.parse(value)}catch{return fallback}};
  const write=(key,value)=>{try{localStorage.setItem(prefix+key,JSON.stringify(value))}catch{}};
  const score=topic=>Number(read('rank:'+topic,0))||0;
  window.AncientTycoonPlatform=Object.freeze({
    read,write,score,
    setAdProvider(value){provider=value||null},
    rewarded(loc,success,fail){
      const selected=provider;
      const task=queue.then(async()=>{
        let earned;
        try{earned=selected?.rewarded?await selected.rewarded(loc):true}catch{earned=false}
        if(earned===true){if(typeof success==='function')success()}
        else if(typeof fail==='function')fail();
      });
      queue=task.catch(()=>{});return task;
    },
    interstitial(loc,callback){
      return Promise.resolve().then(()=>provider?.interstitial?.(loc)).catch(()=>{}).then(()=>{if(typeof callback==='function')callback()});
    },
    addScore(topic,amount){if(Number.isFinite(amount))write('rank:'+topic,Math.max(0,score(topic)+amount))},
    localRequest(operation){
      // 社交页面保留空的本地列表，不虚构远程玩家或同步状态。
      return Promise.resolve({contacts:[],applications:[],profiles:[],items:[],friend_count:0});
    }
  });
})();
