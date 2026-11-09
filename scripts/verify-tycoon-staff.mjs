// 对实际发布类延迟模型响应，复现员工先接货、模型后到达的竞态。
import assert from 'node:assert/strict';
import vm from 'node:vm';
import {readFile} from 'node:fs/promises';
const built=await readFile(new URL('../site/games/ancient-tycoon/game/js/bundle.js',import.meta.url),'utf8');
const original=process.argv[2]?await readFile(process.argv[2],'utf8'):null;
function fixture(source){
 const start=source.indexOf('    class StaffController extends '),end=source.indexOf('\n    class ',start+10);
 assert.ok(start>0&&end>start);
 let deliver;const delayed=new Promise(resolve=>{deliver=resolve});
 class Sprite3D{
  constructor(name){this.name=name;this.children=[];this.transform={};this.destroyed=false}
  get numChildren(){return this.children.length}
  addChild(node){if(node.parent)node.parent.children.splice(node.parent.children.indexOf(node),1);node.parent=this;this.children.push(node);return node}
  addComponent(){return {}}
  destroy(){this.destroyed=true;for(const n of this.children)n.destroy()}
 }
 class CharacterMovingController{get root(){return this.owner}}
 const events=[];
 const sandbox={CharacterMovingController,CharacterAnimationController:class{},
  ResourceManager:{instance:{loadPrefabs(name){events.push(name);return delayed}}},
  Laya:{Sprite3D,Vector3:class{constructor(x,y,z){Object.assign(this,{x,y,z})}},Tween:{clearAll(){},to(target,props){Object.assign(target,props)}}},
  productName:['','leek'],productType:{yushan2:10,laundry:11},
  productionRotation_player_x:{leek:0},productionRotation_player_y:{leek:0},productionRotation_player_z:{leek:0},
  __awaiter(self,args,p,generator){return new Promise((resolve,reject)=>{const iterator=generator.apply(self,args||[]);const step=(method,value)=>{let n;try{n=iterator[method](value)}catch(e){reject(e);return}if(n.done)resolve(n.value);else Promise.resolve(n.value).then(v=>step('next',v),e=>step('throw',e))};step('next')})}
 };
 vm.createContext(sandbox);vm.runInContext(source.slice(start,end)+'\nglobalThis.Staff=StaffController;',sandbox);
 const staff=new sandbox.Staff();staff.owner=new Sprite3D('employee');staff._config={workermodelid:1};staff.refreshAni=()=>{};
 return {staff,Sprite3D,deliver,events};
}
if(original){
 const f=fixture(original),pending=f.staff.loadCharacterModel();
 assert.throws(()=>f.staff.addProduct({root:new f.Sprite3D('leek'),Type:1,changeRotation(){}}),/transform/);
 f.deliver(new f.Sprite3D('model'));await pending;
 console.log('Original class reproduces undefined upMover.transform while model is pending');
}
{
 const f=fixture(built),pending=f.staff.loadCharacterModel(),product={root:new f.Sprite3D('leek'),Type:1,changeRotation(){}};
 assert.deepEqual(f.events,['staff_gril_1']);assert.ok(f.staff.upMover,'Carrier must exist while model request is pending');
 f.staff.addProduct(product);assert.equal(f.staff.productControllerArr.length,1);assert.equal(product.root.parent,f.staff.upMover);
 const carrier=f.staff.upMover,model=new f.Sprite3D('model');f.deliver(model);await pending;
 assert.equal(f.staff.upMover,carrier);assert.equal(carrier.parent,model);assert.equal(product.root.parent,carrier);assert.equal(carrier.numChildren,1);
}
{
 const f=fixture(built),pending=f.staff.loadCharacterModel(),model=new f.Sprite3D('late-model');f.staff.root.destroy();f.deliver(model);await pending;assert.equal(model.destroyed,true);
}
console.log(JSON.stringify({passed:true,checks:['pending model accepts product','model attachment preserves carried product','destroyed employee discards late model']}));
