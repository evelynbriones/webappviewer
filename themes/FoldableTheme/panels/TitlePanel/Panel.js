//>>built
define("dojo/_base/declare dojo/_base/lang dojo/_base/html dojo/_base/array dojo/on dojo/dnd/move dijit/_TemplatedMixin jimu/BaseWidgetPanel".split(" "),function(h,f,b,n,g,k,l,m){return h([m,l],{baseClass:"jimu-widget-panel jimu-title-panel",_originalBox:null,widgetIcon:null,templateString:'\x3cdiv \x3e\x3cdiv class\x3d"title" data-dojo-attach-point\x3d"titleNode" data-dojo-attach-event\x3d"onclick:_onTitleClicked"\x3e\x3cdiv class\x3d"title-label jimu-vcenter-text" data-dojo-attach-point\x3d"titleLabelNode"\x3e${label}\x3c/div\x3e\x3cdiv class\x3d"close-btn jimu-vcenter" data-dojo-attach-point\x3d"closeNode" data-dojo-attach-event\x3d"onclick:_onCloseBtnClicked"\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"jimu-container" data-dojo-attach-point\x3d"containerNode"\x3e\x3c/div\x3e\x3c/div\x3e',
_onTitleClicked:function(){this._getPositionInfo().isFull&&("block"===b.getStyle(this.containerNode,"display")?(b.setStyle(this.containerNode,"display","none"),b.setStyle(this.domNode,{position:"absolute",top:"auto",bottom:0,left:0,right:0,height:"auto"})):(b.setStyle(this.containerNode,"display","block"),b.setStyle(this.domNode,{position:"absolute",left:0,top:0,width:"100%",height:"100%"})))},_onCloseBtnClicked:function(){b.setStyle(this.domNode,"display","none");this.panelManager.closePanel(this)},
startup:function(){this.inherited(arguments);this._originalBox=b.getMarginBox(this.domNode);this.own(g(this.map,"click",f.hitch(this,function(){})))},onOpen:function(){b.style(this.domNode,"display","none");this.resize();b.setStyle(this.domNode,"display","block");this.inherited(arguments)},resize:function(){this.closeNode.style.marginTop="0px";var a=this._getPositionInfo();a.isFull?this._fullPosition():this._normalPosition(a.position);this.inherited(arguments)},destroy:function(){this.widgetIcon=
null;this.inherited(arguments)},_getPositionInfo:function(){var a={isFull:!1,position:{left:0,top:0}},e=b.getMarginBox(jimuConfig.layoutId),c=b.getMarginBox(this.widgetIcon),d=c.l,f=e.w-d-c.w;if(d>=f)if(d>=this._originalBox.w)a.position.left=d;else return a.isFull=!0,a;else if(f>=this._originalBox.w)a.position.left=d;else return a.isFull=!0,a;d=c.t;e=e.h-d-c.h;d>=e?d>=this._originalBox.h+3?a.position.top=c.t-this._originalBox.h-3:a.isFull=!0:e>=this._originalBox.h+3?a.position.top=c.t+c.h+3:a.isFull=
!0;return a},_fullPosition:function(){b.place(this.domNode,jimuConfig.layoutId);"block"!==b.getStyle(this.containerNode,"display")&&b.setStyle(this.containerNode,"display","block");b.setStyle(this.domNode,{left:0,width:"100%",top:0,bottom:0,height:"100%"});this.moveable&&(this.moveable.destroy(),this.moveable=null)},_normalPosition:function(a){b.place(this.domNode,jimuConfig.mapId);b.setStyle(this.containerNode,"display","block");b.setStyle(this.domNode,{left:a.left+"px",top:a.top+"px",width:this._originalBox.w+
"px",height:this._originalBox.h+"px"});this._moveableNode(200,100)},_moveableNode:function(a,e){this.moveable&&(this.moveable.destroy(),this.moveable=null);var c=b.getMarginBox(jimuConfig.layoutId);c.l=c.l-a+e;c.w+=2*(a-e);this.moveable=new k.boxConstrainedMoveable(this.domNode,{box:c,handle:this.titleNode,within:!0});this.own(g(this.moveable,"Moving",f.hitch(this,this.onMoving)));this.own(g(this.moveable,"MoveStop",f.hitch(this,this.onMoveStop)))},onMoving:function(a){b.setStyle(a.node,"opacity",
0.9)},onMoveStop:function(a){b.setStyle(a.node,"opacity",1)}})});