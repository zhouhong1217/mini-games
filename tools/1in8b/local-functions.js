/* Function replacements inserted by the pinned AST build into each native language bundle. */
async function keepPost(route,body){try{return await One8bNative.call(route,body)}catch(error){reportCaught(error);return{ok:false,why:'net'}}}
async function apiList(route){return One8bNative.call(route)}
function keepGet(){let data={};try{data=JSON.parse(One8bLocal.storage.getItem(KEEP_KEY)||'{}')||{}}catch{}return Object.assign({},data,{pk:PACKS.slice(),pka:{}})}
function keepPut(data){const clean=Object.assign({},keepGet(),data,{at:Date.now()});delete clean.tok;delete clean.usedTok;delete clean.left;KP.mem=clean;try{One8bLocal.storage.setItem(KEEP_KEY,JSON.stringify(clean))}catch(error){console.error(error)}}
async function keepSure(){return true}
function keepUse(){}
async function keepRefresh(){return false}
function track(){}
function beacon(){}
function reportErr(){}
function loadStats(){}
function initUmami(){}
function lbInit(){}
function lbSave(){}
function lbBox(){return ''}
function lbOffer(){return false}
function lbAvail(){return false}
function cmOff(){return true}
function openCommunity(){}
function postLife(){}
function fbRelayAsk(){return Promise.resolve(false)}
function openFeedback(){}
function keepBuyShow(){}
function keepUnlock(){}
function keepSession(){}
function keepRefundSheet(){}
function packBuy(){}
function packBack(){}
function packRefund(){}
function gftPay(){}
function gftBack(){}
function gftClaim(){}
function gftSheet(){}
function gftOpen(){}
function gftBookAsk(){}
function keepCarry(){One8bNative.backup()}
function keepTake(){}
function moveSheet(){One8bNative.backup()}
function moveMake(){One8bNative.backup()}
function moveTake(){}
function memoNewsCheck(){}
function ltPoll(){}
function vlinkMake(){}
function vlinkOpen(){}
function vlbLoad(){}
function vlbReport(){}
function vlbSet(){}
function keepSheet(){return kdOpen()}
function keepHTML(){if(!S||!S.deathAt||!S.endD)return '';return `<div class="panel keep on" id="keepPanel"><h3>${L`이 삶을 간직하기`}</h3><p class="kp-note">${esc(One8bNative.text('localOnly'))}</p>${keepMemFeat(false)}${keepSnsHTML()}${keepVlgHTML('pass')}${keepGiftHTML(false)}<p class="kp-msg" id="keepMsg" role="status"></p><div class="kp-tiles lite three">${keepTile('keepFilm','film',L`주마등 필름`,L`1분 30초에서 2분 사이의 세로 다큐 영상`,L`필름 만들기`)}${keepTile('keepAlbum','album',L`인생 앨범`,L`시절마다 사진을 붙인 앨범, PDF로 저장하고 인쇄해요`,L`앨범 만들기`)}${keepTile('keepBook','book',L`인생 기록집`,L`해마다의 모든 기록을 파일 하나와 표로`,L`기록집 열기`)}</div>${keepMadeHTML(false)}</div>`}
function keepMemFeat(){const exists=!!S.memId;return `<div class="kp-memf" style="${keepMemDress()}"><button type="button" class="kp-mfv" id="kpMfPic" aria-label="${esc(L`추모관`)}">${keepVis('memo')}</button><div class="kp-mfb"><p class="kp-big">${L`추모관`}</p><p>${esc(One8bNative.text('localOnly'))}</p><div class="kp-mfa">${exists?`<a class="ghost" href="${One8bNative.url('memorial',S.memId)}" data-memo="${esc(S.memId)}">${L`추모관 보기`}</a>`:''}<button class="cta" id="keepMem">${exists?L`꾸미기`:L`추모관에 모시기`}</button></div></div></div>`}
async function keepMemorial(plain){if(!S?.endD||KP.busy)return;KP.busy=true;try{const life=S;const view=memView(life,!!plain);const result=await keepPost('local:memorial',{d:view.D,lk:String(life.lifeAt),cv:view.cv,st:view.st,rm:life.memRm});if(!result.ok)throw new Error('Local memorial save failed');life.memId=result.id;life.memPlain=!!plain;keepSaveLife(life);memoMineSet(result.id,life.name.full,true);memoSeen(result.id,result.at);if(document.querySelector('#kmRoot'))closeSheet();keepMount();toast(One8bNative.text('saved'))}catch(error){reportCaught(error);keepMsg(One8bNative.text('failed'),true)}finally{KP.busy=false}}
function memSheet(){if(!S?.endD)return;const exists=!!S.memId;openSheet(L`${esc(callName(S.name))}의 추모관`,`<div class="km" id="kmRoot"><p>${esc(One8bNative.text('localOnly'))}</p><div class="km-rows">${keepStyleHTML()}</div><div class="km-acts">${exists?`<a class="ghost" href="${One8bNative.url('memorial',S.memId)}" data-memo="${esc(S.memId)}">${L`추모관 보기`}</a><button class="ghost" id="keepRemove">${L`추모관 내리기`}</button>`:`<button class="ghost" id="kmPv">${L`미리 보기`}</button><button class="cta" id="kmUp">${L`추모관에 모시기`}</button>`}</div><p class="kp-msg" id="kmMsg" role="status"></p></div>`);UI.sheetBack=null;requestAnimationFrame(keepRoomPaint)}
async function keepRemove(){if(window.One8bImportPending)return;const life=S;if(!life?.memId)return;await One8bLocal.remove('memorial',life.memId);memoMineSet(life.memId,'',false);life.memId=null;life.memCv=null;life.memPlain=false;keepSaveLife(life);closeSheet();keepMount();toast(One8bNative.text('saved'))}
async function memoMineSheet(){openSheet(L`내 추모관`,`<p>${esc(One8bNative.text('localOnly'))}</p><div id="memoMineItems" class="memo-cards"></div>`);const result=await keepPost('local:memown',{});const list=(result.list||[]).filter(r=>r.lang===LANG);memoMineMerge(list);const box=$('#memoMineItems');if(box){if(list.length)memoCards(box,list);else box.textContent=One8bNative.text('empty')}}
async function homeSheet(){await lateLoad();openSheet(L`전생의 집`,`<div class="hm"><p>${esc(One8bNative.text('localOnly'))}</p><div id="hmBody"></div></div>`);const [home,owned]=await Promise.all([keepPost('local:home/me',{}),keepPost('local:memown',{})]);const list=(owned.list||[]).filter(r=>r.lang===LANG);memoMineMerge(list);HM.me=home;const body=$('#hmBody');if(!body)return;body.innerHTML=`${list.length?vlgHTML('pass'):''}<div class="hm-rooms" id="hmRooms"></div>${!list.length?`<p>${esc(One8bNative.text('empty'))}</p>`:''}<div class="hm-set"><label class="hm-nm"><span>${L`집 이름`}</span><input id="hmName" maxlength="80" value="${esc(home.nm||'')}"></label><button class="ghost" id="hmSave">${L`저장하기`}</button><p class="kp-msg" id="hmMsg"></p></div>`;homeRooms($('#hmRooms'),list,true);if(list.length)vlgMount($('#vlgBox'),list,'pass')}
async function homeSave(){const name=($('#hmName')?.value||'').trim().slice(0,80);const result=await keepPost('local:home/set',{nm:name});if(result.ok){HM.me=result;toast(One8bNative.text('saved'))}else toast(One8bNative.text('failed'))}
function memShareSheet(){One8bNative.backup()}
async function kdOpen(){await lateLoad();const tile=(key,title)=>`<button class="kp-tile kd-t" data-kd="${key}"><b>${title}</b><span class="kp-go">${L`열기`}</span></button>`;openSheet(L`간직하기`,`<div class="kd" id="kdRoot"><p>${esc(One8bNative.text('localOnly'))}</p><div class="kp-tiles kd-tiles">${tile('memo',L`추모관`)}${tile('home',L`전생의 집`)}${tile('film',L`주마등 필름`)}${tile('sns',L`SNS에 올리기 좋게`)}${tile('album',L`인생 앨범`)}${tile('book',L`인생 기록집`)}${tile('gift',L`못다 한 소원`)}${tile('pack',L`꾸미기 묶음`)}${tile('vlg',L`전생의 마을`)}${tile('shelf',L`내 전생들`)}${tile('wish',L`내가 바라는 삶`)}</div></div>`);UI.sheetBack=null}
async function packSheet(){await lateLoad();openSheet(L`꾸미기 묶음`,`<div class="pk"><p>${esc(One8bNative.text('localOnly'))}</p>${PACKS.map(key=>`<div class="pk-card"><div class="pk-body"><b>${esc(packName(key))}</b><p>${esc(packWhat(key))}</p><span>${L`가지고 있어요`}</span></div></div>`).join('')}</div>`)}
function save(){if(window.One8bImportPending||!S||!['life','birth'].includes(S.phase)||S.isComp||saveStale())return;try{const raw=JSON.stringify({S,at:Date.now()});One8bLocal.storage.setItem(lk(SAVE_KEY),raw);UI.svRaw=raw}catch(error){if(!UI.saveWarned){UI.saveWarned=true;toast(One8bNative.text('failed'),9000)}console.error(error)}}
function shareUrl(){return One8bNative.url('','')}
function memoClose(returnToGame){$('#memo')?.remove();document.documentElement.classList.remove('memo-open');if(typeof roomMusic==='function')roomMusic('');if(location.hash.startsWith('#memorial=')||location.hash.startsWith('#home='))history.replaceState(null,'',LP+'/');if(returnToGame&&S&&S.phase!=='life'&&!['intro','dead'].includes(UI.view)){show('intro');renderIntro()}}
function lsSet(key,value){if(window.One8bImportPending)return false;if(key===PAST_KEY&&Array.isArray(value))pdbPut(value);try{One8bLocal.storage.setItem(lk(key),JSON.stringify(value));return true}catch(error){console.error(error);return false}}
function lsDel(key){if(window.One8bImportPending)return;try{One8bLocal.storage.removeItem(lk(key))}catch{}}
function pdbPut(rows,lang=LANG){if(window.One8bImportPending||!pdbCan()||!Array.isArray(rows))return Promise.resolve();const copied=rows.filter(r=>r&&r.at>0&&r.S).map(r=>structuredClone({at:r.at,S:r.S}));if(!copied.length)return Promise.resolve();const write=async()=>{try{await pdbTx('readwrite',store=>{for(const row of copied)store.put(row,pdbKey(row.at,lang))});if(lang===LANG)for(const row of copied)PDB.ats.add(row.at)}catch(error){console.error(error);if(!PDB.full){PDB.full=true;toast(One8bNative.text('failed'),9000)}}};window.One8bPastWrites=(window.One8bPastWrites||Promise.resolve()).then(write);return window.One8bPastWrites}
function rateNote(){const target=document.querySelector('.warnline');if(!target||$('#rateNote'))return;const younger=AGE12_SITE||EDU_ON;const parts=[younger?L`12세 이상`:L`15세 이상`,younger?L`내용: 폭력, 연애와 결혼`:L`내용: 폭력, 범죄, 술·담배, 연애와 결혼`,L`사용 시간에 주의하고 너무 빠져들지 마세요.`,L`시뮬레이션 속 일을 따라 하지 마세요.`];target.insertAdjacentHTML('afterend',`<div class="ratenote" id="rateNote"><p>${parts.map(part=>`<span>${esc(part)}</span>`).join('')}</p></div>`)}
