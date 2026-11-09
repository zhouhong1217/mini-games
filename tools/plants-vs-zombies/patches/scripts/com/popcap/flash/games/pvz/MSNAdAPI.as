package com.popcap.flash.games.pvz
{
   import com.popcap.flash.framework.AppBase;

   // 独立本地适配层；构建后将兼容类名改为 LocalPlatformAPI。
   // 保留原游戏的调用签名；默认回调同步执行一次且不传参数。
   public class MSNAdAPI
   {
      public var handleMenu:Function = null;
      public function MSNAdAPI(app:AppBase) { super(); }
      public function init():void { }
      public function get enabled():Boolean { return false; }
      public function SessionReady(callback:Function):void { callback(); }
      public function GameReady(mode:Number, level:Number, callback:Function):void { callback(); }
      public function GameBreak(levelCompleted:Number, callback:Function):void { callback(); }
      public function CustomEvent(data:XML, callback:Function):void { callback(); }
      public function setLoadPercent(loadPercent:Number):void { }
      public function setScore(score:Number):void { }
      public function ScoreSubmit():void { }
      public function GameEnd():void { }
      public function GameError(str:String):void { }
      public function pauseBroadcast():void { }
      public function resumeBroadcast():void { }
      public function update():void { }
   }
}
