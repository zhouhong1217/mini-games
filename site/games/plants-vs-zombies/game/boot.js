const run = new URL(location.href).searchParams.get('run');
const report = type => parent.postMessage({ game:'plants-vs-zombies', run, type }, location.origin);
(async () => {
  try {
    const response = await fetch('pvz.local.swf', { method:'HEAD', signal:AbortSignal.timeout(60000) });
    if (!response.ok) throw new Error('SWF request failed: ' + response.status);
    const player = window.RufflePlayer.newest().createPlayer();
    document.querySelector('#player').append(player);
    // Ruffle 的 load Promise 只确认实例已创建；loadeddata 才确认主 SWF 已载入。
    const loaded = new Promise(resolve => player.addEventListener('loadeddata', resolve, { once:true }));
    await player.ruffle().load({ url:'pvz.local.swf',base:new URL('./',location.href).href,
      autoplay:'on',unmuteOverlay:'hidden',allowScriptAccess:false,openUrlMode:'deny',allowNetworking:'internal',
      contextMenu:'off',splashScreen:false,logLevel:'error',backgroundColor:'#202c24' });
    await loaded;
    report('ready');
  } catch (error) {
    console.error('Game load failed:', error); document.querySelector('#error').hidden = false; report('error');
  }
})();
