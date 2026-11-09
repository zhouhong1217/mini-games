// 根据保留原包的精确 SHA-256 重写平台边界；不执行游戏代码。
import { createHash } from 'node:crypto';

export const originalBundleSHA256 = 'ddd254e35019f323feb1a7e37e0df0964542b5937a34032bdb96fc0c0af5890c';
export const removedModules = ['AD_WX', 'PlatformBytedance'];
export const storageNamespace = 'yarn-unravel-4399-v1:';

function replaceOne(text, before, after, label) {
  if (text.split(before).length !== 2) throw new Error('Expected one source match: ' + label);
  return text.replace(before, after);
}

export function patchBundle(text) {
  const digest = createHash('sha256').update(text).digest('hex');
  if (digest !== originalBundleSHA256) throw new Error('Original bundle identity mismatch');
  const matches = [...text.matchAll(/(?:"([^"\n]+)"|([\w$]+)):\[function\(/g)];
  if (matches.length !== 2152 || matches[0][2] !== 'AD_WX') throw new Error('Unexpected module inventory');
  const end = text.indexOf('},{},[', matches.at(-1).index);
  if (end < 0) throw new Error('Missing bootstrap table');
  const modules = new Map(matches.map((match, index) => [match[1] || match[2], text.slice(match.index, index + 1 < matches.length ? matches[index + 1].index - 1 : end)]));
  if (modules.size !== matches.length) throw new Error('Duplicate module names');
  function makeModule(name, body, deps = {}) {
    const original = modules.get(name);
    const id = original?.match(/cc\._RF\.push\(t,"([^"]+)"/)?.[1];
    if (!id) throw new Error('Module identity missing: ' + name);
    return `${JSON.stringify(name)}:[function(e,t,o){"use strict";cc._RF.push(t,${JSON.stringify(id)},${JSON.stringify(name)});Object.defineProperty(o,"__esModule",{value:true});${body};cc._RF.pop()},${JSON.stringify(deps)}]`;
  }

  // 原广告 SDK 与字节平台登录/远端账户实现从模块和执行入口中删除。
  for (const name of removedModules) if (!modules.delete(name)) throw new Error('Missing vendor module: ' + name);
  modules.set('TYSDKMgr', makeModule('TYSDKMgr', `
    function LocalSDK(){}
    LocalSDK.init=function(){};
    LocalSDK.showVideo=function(success,failure,placement){return YarnPlatform.showRewarded(success,failure,placement)};
    LocalSDK.report=function(){};
    LocalSDK.vibrateShort=function(){};
    LocalSDK.vibrateLong=function(){};
    LocalSDK.showRankPanel=function(){return YarnPlatform.showRankPanel()};
    LocalSDK.submitRank=function(rankId,score){if(rankId&&score>0)return YarnPlatform.submitRank(rankId,score)};
    LocalSDK.shareApp=LocalSDK.shareFriend=function(){return YarnPlatform.share()};
    Object.defineProperty(LocalSDK,'nickName',{get:function(){return ''}});
    Object.defineProperty(LocalSDK,'avatarUrl',{get:function(){return ''}});
    LocalSDK.isPlayVideo=false;LocalSDK.vibrateMuted=2;
    LocalSDK.rankIdPass=1368;LocalSDK.rankIdWin=1369;LocalSDK.rankIdDaily=1370;
    o.TYSDKMgr=LocalSDK
  `));
  modules.set('GameServer', makeModule('GameServer', `
    function LocalGameServer(){}
    LocalGameServer.gameName=[];LocalGameServer.isOpenDragon=true;LocalGameServer.mAdRate={};
    LocalGameServer.httpRoot='';LocalGameServer.mGameId='';LocalGameServer.serVersion='1.0.0';
    LocalGameServer.createOpenId=function(){return Date.now()+''+Math.ceil(10000*Math.random())};
    LocalGameServer.init=function(gameId,version,useHttps,openId){this.mGameId=gameId;this.serVersion=version;this.openId=openId||YarnPlatform.storage.getItem('__GAME_USER_OPENID')||this.createOpenId();YarnPlatform.storage.setItem('__GAME_USER_OPENID',this.openId)};
    LocalGameServer.httpGet=LocalGameServer.httpDefaultGet=function(path,data,success){if(success)success(null)};
    LocalGameServer.autoErrHttpGet=function(path,data,success){if(success)success(null)};
    LocalGameServer.login=function(success){if(success)success()};
    LocalGameServer.isPinBi=function(success){if(success)success(null)};
    LocalGameServer.getWxOpenId=function(code,success){if(success)success(null)};
    LocalGameServer.ovRate=function(id,type,success){if(success)success(null)};
    LocalGameServer.ovShowAdRate=LocalGameServer.ovCanClickAdRate=LocalGameServer.ovClickAd=function(id,success){if(success)success(null)};
    LocalGameServer.getPingbiLevel=function(success,fallback){if(fallback)fallback()};
    LocalGameServer.getAdRate=function(key){return this.mAdRate[key]};
    o.GameServer=LocalGameServer
  `));
  modules.set('HttpSystem', makeModule('HttpSystem', `
    function LocalHttpSystem(){this.gameVersion='1.0.0'}
    LocalHttpSystem.prototype.Get=LocalHttpSystem.prototype.Post=function(path,data,callback){if(callback)callback(false)};
    o._HttpSystem=LocalHttpSystem;o.HttpSystem=new LocalHttpSystem
  `));
  modules.set('PlatformSystem', makeModule('PlatformSystem', `
    var n=e('StorageData');
    function LocalPlatformSystem(){this.curPlatform=null}
    var p=LocalPlatformSystem.prototype;
    p.init=p.follow=p.checkGetOpenId=p.checkGetUserId=p.getPlayerData=p.savePlayerData=p.collect=p.addToDeskTop=p.getUser=function(){};
    p.canFollow=p.isSupportFileData=p.isSupportServerData=p.isSupportCollect=p.isSupportDesk=p.canShowSideGift=p.islaunchFromSide=p.checkScene=p.navigateToScene=function(){return false};
    p.getUserInfo=function(callback){callback(!!(n.StorageData.playerData&&n.StorageData.playerData.userInfo))};
    p.isDaren=function(){return true};
    o._PlatformSystem=LocalPlatformSystem;o.PlatformSystem=new LocalPlatformSystem
  `, { StorageData: 'StorageData' }));
  modules.set('ResUtil', makeModule('ResUtil', `
    o.headImgExtList=[];
    o.ResUtil={
      loadRemote:function(){return Promise.resolve(null)},
      loadBundle:function(name){return new Promise(function(resolve){cc.assetManager.loadBundle(name,function(error,bundle){resolve(error?null:bundle)})})},
      loadAsset:function(options){var bundle=options.bundle||(options.bundleName?cc.assetManager.getBundle(options.bundleName):cc.resources);var asset=bundle.get(options.path,options.type);if(asset!=null)return Promise.resolve(asset);return new Promise(function(resolve){bundle.load(options.path,options.type,function(error,asset){resolve(error?null:asset)})})},
      registerHeadImgLoader:function(){}
    }
  `));
  let loading = modules.get('LoadingUI');
  loading = replaceOne(loading,
    'try{window.__adWxIntAdDone||(window.__adWxIntAdDone=!0,"undefined"!=typeof window&&window.h5api&&window.AD_WX&&window.AD_WX.intAd())}catch(t){}',
    'YarnPlatform.initialize();', 'LoadingUI platform initialization');
  modules.set('LoadingUI', loading);
  let main = modules.get('MainUI');
  main = replaceOne(main, '"undefined"!=typeof window&&window.h5api&&window.AD_WX&&window.AD_WX.shareinte()', 'YarnPlatform.share()', 'MainUI share');
  modules.set('MainUI', main);
  let storage = modules.get('StorageData');
  storage = replaceOne(storage, '"undefined"!=typeof window&&window.h5api&&window.AD_WX&&window.AD_WX.showInterstitialAd()', 'YarnPlatform.showInterstitial()', 'StorageData interstitial');
  modules.set('StorageData', storage);
  let matchRank = modules.get('Match106RankUI');
  matchRank = replaceOne(matchRank, ',u=e("PlatformBytedance")', '', 'Match106RankUI platform import');
  matchRank = replaceOne(matchRank, 'l.PlatformSystem.curPlatform==u.PlatformBytedance&&u.PlatformBytedance.getUser(this.myRank),', '', 'Match106RankUI remote profile');
  matchRank = replaceOne(matchRank, 'PlatformBytedance:"PlatformBytedance",', '', 'Match106RankUI dependency');
  modules.set('Match106RankUI', matchRank);

  // 原头像来源于远端账户；静态版本使用游戏自带 rankDefaultIcon。
  const avatar = 't&&""!=t?cc.assetManager.loadRemote(t,function(t,n){t?e.url=o:e.texture=new cc.SpriteFrame(n)}):e.url=o';
  for (const name of ['RankLeagueSprayingUI', 'RankLeagueYarnUI', 'RankScrewUI', 'RankSprayingUI', 'RankYarnUI', 'ScrewOnCarRankUI']) {
    modules.set(name, replaceOne(modules.get(name), avatar, 'e.url=o', name + ' local avatar'));
  }
  // 原有键名与数据结构保留，唯一存储边界集中在适配层加 namespace。
  let localStorageCount = 0;
  for (const [name, source] of modules) {
    localStorageCount += source.split('cc.sys.localStorage.').length - 1;
    modules.set(name, source.replaceAll('cc.sys.localStorage.', 'YarnPlatform.storage.'));
  }
  if (localStorageCount !== 10) throw new Error('Unexpected localStorage call inventory: ' + localStorageCount);
  let suffix = text.slice(end);
  for (const name of removedModules) suffix = replaceOne(suffix, JSON.stringify(name) + ',', '', 'bootstrap ' + name);
  const result = text.slice(0, matches[0].index) + [...modules.values()].join(',') + suffix;
  const residue = result.match(/\bAD_WX\b|\bh5api\b|\bPlatformBytedance\b|__adWxIntAdDone|cc\.assetManager\.loadRemote|cc\.sys\.localStorage|\btt\.(?:login|getSystemInfoSync|getLaunchOptionsSync|getAppInfoSync|onShow|navigateToScene|showFavoriteGuide|checkShortcut|addShortcut|getUserInfo)\b/);
  if (residue) throw new Error('Original platform or remote implementation remains: ' + result.slice(Math.max(0,residue.index-100),residue.index+150));
  return result;
}

// 资源扩展转换是本地静态加载能力，与原 SDK 无关。
export function patchAssetTransform(text) {
  const sha = createHash('sha256').update(text).digest('hex');
  if (sha !== '57e81e0561586d3b14ae56b23eb75899c19cb3ee4a37eafc0ad681fcdb7c8b90') throw new Error('Original asset transform identity mismatch');
  return `// 独立静态资源扩展映射；不依赖原平台。\n(function(){if(!window.cc||!cc.assetManager||!cc.assetManager.transformPipeline)throw new Error('Asset pipeline is not ready');cc.assetManager.transformPipeline.append(function(task){var files=task.output=task.input;for(var i=0;i<files.length;i++){var file=files[i];if(file.url)file.url=file.url.replace(/\\.cconb$/,'._cconb.dbbin').replace(/\\.bin$/,'.dbbin')}return null})})();\n`;
}
