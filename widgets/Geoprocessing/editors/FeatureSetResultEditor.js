//>>built
require({cache:{"url:widgets/Geoprocessing/editors/FeatureSetResultEditor.html":'\x3cdiv\x3e\r\n\t\x3cdiv data-dojo-attach-point\x3d"rendererTab"\x3e\x3c/div\x3e\r\n\t\x3cdiv data-dojo-attach-point\x3d"popupConfigTab"\x3e\r\n    \x3cdiv style\x3d"margin: 10px"\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"enablePopupNode"\x3e\x3c/div\x3e \x3clabel\x3eEnable popup\x3c/label\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/html dojo/text!./FeatureSetResultEditor.html dijit/_TemplatedMixin ../BaseEditor ./FeatureSetRendererEditor jimu/dijit/PopupConfig jimu/dijit/TabContainer jimu/dijit/CheckBox".split(" "),function(c,e,d,p,f,g,h,k,l,m,n){return c([h,g],{baseClass:"jimu-gp-editor-base jimu-gp-editor-fsrse",templateString:f,featureSetRendererEditor:null,popupConfig:null,tab:null,args:null,constructor:function(a){this.args=e.mixin({},a)},postCreate:function(){this.inherited(arguments);
this.tab=new m({tabs:[{title:this.nls.renderer,content:this.rendererTab},{title:this.nls.popup,content:this.popupConfigTab}],isNested:!0});this.tab.placeAt(this.domNode);this.tab.startup();this.featureSetRendererEditor=new k(this.args);this.featureSetRendererEditor.placeAt(this.rendererTab);this.featureSetRendererEditor.startup();var a={};if(this.args&&this.args.param){this.args.param.defaultValue&&(a.fields=this.args.param.defaultValue.fields);var b=this.args.param.popup;if(b){var c=d.map(b.fields,
function(a){return a.name});a.fields=d.map(a.fields,function(a){var b=0<=d.indexOf(c,a.name);a.visible=b;return a});a.title=b.title}}this.popupConfig=new l(a);this.popupConfig.placeAt(this.popupConfigTab);this.popupConfig.startup();this.enablePopup=new n({checked:!this.args.param.popup||this.args.param.popup&&this.args.param.popup.enablePopup},this.enablePopupNode);this.enablePopup.startup()},destroy:function(){this.featureSetRendererEditor&&(this.featureSetRendererEditor.destroy(),this.featureSetRendererEditor=
null);this.popupConfig&&(this.popupConfig.destroy(),this.popupConfig=null);this.inherited(arguments)},getValue:function(){var a={renderer:null,popup:this.popupConfig.getConfig()};a.popup.enablePopup=this.enablePopup.checked?!0:!1;var b=this.featureSetRendererEditor.getValue();b&&(a.renderer=b.renderer);return a}})});