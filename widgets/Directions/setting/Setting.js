//>>built
require({cache:{"widgets/Directions/setting/_build-generate_module":function(){define(["dojo/text!./Setting.html","dojo/text!./css/style.css","dojo/i18n!./nls/strings"],function(){})},"url:widgets/Directions/setting/Setting.html":'\x3cdiv style\x3d"width:100%;height:auto;"\x3e\r\n\t\x3ctable style\x3d"width:100%;" cellspacing\x3d"0"\x3e\r\n\t\t\x3ctbody\x3e\t\t\t\r\n\t\t\t\x3ctr\x3e\r\n\t\t\t\t\x3ctd nowrap style\x3d"width:100px;"\x3e\r\n\t\t\t\t\t\x3cspan nowrap style\x3d"white-space:nowrap;"\x3e${nls.routeUrl}\x3c/span\x3e\r\n\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\x3ctd style\x3d"padding-left:10px;"\x3e\r\n\t\t\t\t\t\x3cinput data-dojo-attach-point\x3d"routeUrl" data-dojo-type\x3d"jimu/dijit/URLInput" type\x3d"text" style\x3d"width:100%;" /\x3e\r\n\t\t\t\t\x3c/td\x3e\r\n\t\t\t\x3c/tr\x3e\r\n\t\t\t\x3ctr\x3e\r\n\t\t\t\t\x3ctd nowrap style\x3d"width:100px;"\x3e\r\n\t\t\t\t\t\x3cspan nowrap style\x3d"white-space:nowrap;"\x3e${nls.locatorUrl}\x3c/span\x3e\r\n\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\x3ctd style\x3d"padding-left:10px;"\x3e\r\n\t\t\t\t\t\x3cinput data-dojo-attach-point\x3d"locatorUrl" data-dojo-type\x3d"jimu/dijit/URLInput" type\x3d"text" style\x3d"width:100%;" /\x3e\r\n\t\t\t\t\x3c/td\x3e\r\n\t\t\t\x3c/tr\x3e\r\n\t\t\x3c/tbody\x3e\r\n\t\x3c/table\x3e\r\n\t\x3cspan style\x3d"margin:10px 0 5px 0;display:inline-block;font-weight:bold;"\x3e${nls.geocoderOptions}\x3c/span\x3e\r\n\t\x3ctable style\x3d"width:100%;" cellspacing\x3d"0"\x3e\r\n\t\t\x3ctbody\x3e\r\n\t\t\t\x3ctr\x3e\r\n\t\t\t\t\x3ctd style\x3d"width:50%;"\x3e\r\n\t\t\t\t\t\x3cspan\x3e${nls.autoComplete}\x3c/span\x3e\r\n\t\t\t\t\t\x3cinput data-dojo-attach-point\x3d"autoComplete" type\x3d"checkbox" /\x3e\r\n\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\x3ctd style\x3d"width:50%;"\x3e\r\n\t\t\t\t\t\x3ctable style\x3d"width:100%;" cellspacing\x3d"0"\x3e\r\n\t\t\t\t\t\t\x3ctbody\x3e\r\n\t\t\t\t\t\t\t\x3ctr\x3e\r\n\t\t\t\t\t\t\t\t\x3ctd style\x3d"width:150px;"\x3e\r\n\t\t\t\t\t\t\t\t\t\x3cspan style\x3d"margin-left:20px;"\x3e${nls.searchDelay}\x3c/span\x3e\r\n\t\t\t\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\t\t\t\x3ctd style\x3d"width:auto;"\x3e\r\n\t\t\t\t\t\t\t\t\t\x3cinput data-dojo-attach-point\x3d"searchDelay" data-dojo-type\x3d"dijit/form/NumberSpinner" data-dojo-props\x3d\'required:true,value:350,smallDelta:1,largeDelta:10,constraints:{min:10},intermediateChanges:true\' type\x3d"text" style\x3d"width:100%;" /\x3e\r\n\t\t\t\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\t\t\x3c/tr\x3e\r\n\t\t\t\t\t\t\x3c/tbody\x3e\r\n\t\t\t\t\t\x3c/table\x3e\r\n\t\t\t\t\x3c/td\x3e\r\n\t\t\t\x3c/tr\x3e\r\n\t\t\t\x3ctr\x3e\r\n\t\t\t\t\x3ctd style\x3d"width:50%;"\x3e\r\n\t\t\t\t\t\x3ctable style\x3d"width:100%;" cellspacing\x3d"0"\x3e\r\n\t\t\t\t\t\t\x3ctbody\x3e\r\n\t\t\t\t\t\t\t\x3ctr\x3e\r\n\t\t\t\t\t\t\t\t\x3ctd style\x3d"width:130px;"\x3e\r\n\t\t\t\t\t\t\t\t\t\x3cspan\x3e${nls.maxLocations}\x3c/span\x3e\r\n\t\t\t\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\t\t\t\x3ctd style\x3d"width:auto;"\x3e\r\n\t\t\t\t\t\t\t\t\t\x3cinput data-dojo-attach-point\x3d"maxLocations" data-dojo-type\x3d"dijit/form/NumberSpinner" data-dojo-props\x3d\'required:true,value:6,smallDelta:1,largeDelta:1,constraints:{min:1},intermediateChanges:true\' type\x3d"text" style\x3d"width:100%;" /\x3e\r\n\t\t\t\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\t\t\x3c/tr\x3e\r\n\t\t\t\t\t\t\x3c/tbody\x3e\r\n\t\t\t\t\t\x3c/table\x3e\r\n\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\x3ctd style\x3d"width:50%;"\x3e\r\n\t\t\t\t\t\x3ctable style\x3d"width:100%;" cellspacing\x3d"0"\x3e\r\n\t\t\t\t\t\t\x3ctbody\x3e\r\n\t\t\t\t\t\t\t\x3ctr\x3e\r\n\t\t\t\t\t\t\t\t\x3ctd style\x3d"width:150px;"\x3e\r\n\t\t\t\t\t\t\t\t\t\x3cspan style\x3d"margin-left:20px;"\x3e${nls.minCharacters}\x3c/span\x3e\r\n\t\t\t\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\t\t\t\x3ctd style\x3d"width:auto;"\x3e\r\n\t\t\t\t\t\t\t\t\t\x3cinput data-dojo-attach-point\x3d"minCharacters" data-dojo-type\x3d"dijit/form/NumberSpinner" data-dojo-props\x3d\'required:true,value:3,smallDelta:1,largeDelta:1,constraints:{min:3},intermediateChanges:true\' type\x3d"text" style\x3d"width:100%;" /\x3e\r\n\t\t\t\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\t\t\x3c/tr\x3e\r\n\t\t\t\t\t\t\x3c/tbody\x3e\r\n\t\t\t\t\t\x3c/table\x3e\r\n\t\t\t\t\x3c/td\x3e\r\n\t\t\t\x3c/tr\x3e\r\n\t\t\t\x3ctr\x3e\r\n\t\t\t\t\x3ctd colspan\x3d"2"\x3e\r\n\t\t\t\t\t\x3ctable style\x3d"width:100%;" cellspacing\x3d"0"\x3e\r\n\t\t\t\t\t\t\x3ctbody\x3e\r\n\t\t\t\t\t\t\t\x3ctr\x3e\r\n\t\t\t\t\t\t\t\t\x3ctd style\x3d"width:130px;"\x3e\r\n\t\t\t\t\t\t\t\t\t\x3cspan\x3e${nls.placeholder}\x3c/span\x3e\r\n\t\t\t\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\t\t\t\x3ctd style\x3d"width:auto;"\x3e\r\n\t\t\t\t\t\t\t\t\t\x3cinput data-dojo-attach-point\x3d"placeholder" data-dojo-type\x3d"dijit/form/ValidationTextBox" type\x3d"text" style\x3d"width:100%;" /\x3e\r\n\t\t\t\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\t\t\x3c/tr\x3e\r\n\t\t\t\t\t\t\x3c/tbody\x3e\r\n\t\t\t\t\t\x3c/table\x3e\r\n\t\t\t\t\x3c/td\x3e\r\n\t\t\t\x3c/tr\x3e\r\n\t\t\x3c/tbody\x3e\r\n\t\x3c/table\x3e\r\n\t\x3cspan style\x3d"margin:10px 0 5px 0px;display:inline-block;font-weight:bold;"\x3e${nls.routeOptions}\x3c/span\x3e\r\n\t\x3ctable style\x3d"width:100%;" cellspacing\x3d"0"\x3e\r\n\t\t\x3ctbody\x3e\r\n\t\t\t\x3ctr\x3e\r\n\t\t\t\t\x3ctd style\x3d"width:50%;"\x3e\r\n\t\t\t\t\t\x3ctable style\x3d"width:100%;" cellspacing\x3d"0"\x3e\r\n\t\t\t\t\t\t\x3ctbody\x3e\r\n\t\t\t\t\t\t\t\x3ctr\x3e\r\n\t\t\t\t\t\t\t\t\x3ctd nowrap style\x3d"width:187px;"\x3e\r\n\t\t\t\t\t\t\t\t\t\x3cspan nowrap style\x3d"white-space:nowrap;"\x3e${nls.directionsLanguage}\x3c/span\x3e\r\n\t\t\t\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\t\t\t\x3ctd style\x3d"width:auto;"\x3e\r\n\t\t\t\t\t\t\t\t\t\x3cinput data-dojo-attach-point\x3d"directionsLanguage" data-dojo-type\x3d"dijit/form/ValidationTextBox" data-dojo-props\x3d\'required:true\' style\x3d"width:100%;" /\x3e\r\n\t\t\t\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\t\t\x3c/tr\x3e\r\n\t\t\t\t\t\t\x3c/tbody\x3e\r\n\t\t\t\t\t\x3c/table\x3e\r\n\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\x3ctd style\x3d"width:50%;"\x3e\r\n\t\t\t\t\t\x3ctable  style\x3d"width:100%;" cellspacing\x3d"0"\x3e\r\n\t\t\t\t\t\t\x3ctbody\x3e\r\n\t\t\t\t\t\t\t\x3ctr\x3e\r\n\t\t\t\t\t\t\t\t\x3ctd nowrap style\x3d"width:207px;"\x3e\r\n\t\t\t\t\t\t\t\t\t\x3cspan nowrap style\x3d"white-space:nowrap;margin-left:20px;"\x3e${nls.directionsLengthUnits}\x3c/span\x3e\r\n\t\t\t\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\t\t\t\x3ctd style\x3d"width:auto;"\x3e\r\n\t\t\t\t\t\t\t\t\t\x3cselect data-dojo-attach-point\x3d"directionsLengthUnits" data-dojo-type\x3d"dijit/form/Select" style\x3d"width:100%;height:30px;"\x3e\r\n\t\t\t\t\t\t\t\t\t\t\x3coption value\x3d"esriFeet"\x3e${nls.feet}\x3c/option\x3e\r\n\t\t\t\t\t\t\t\t\t\t\x3coption value\x3d"esriKilometers" selected\x3e${nls.kilometers}\x3c/option\x3e\r\n\t\t\t\t\t\t\t\t\t\t\x3coption value\x3d"esriMeters"\x3e${nls.meters}\x3c/option\x3e\r\n\t\t\t\t\t\t\t\t\t\t\x3coption value\x3d"esriMiles"\x3e${nls.miles}\x3c/option\x3e\r\n\t\t\t\t\t\t\t\t\t\t\x3coption value\x3d"esriNauticalMiles"\x3e${nls.nauticalMiles}\x3c/option\x3e\r\n\t\t\t\t\t\t\t\t\t\t\x3coption value\x3d"esriYards"\x3e${nls.yards}\x3c/option\x3e\r\n\t\t\t\t\t\t\t\t\t\x3c/select\x3e\r\n\t\t\t\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\t\t\x3c/tr\x3e\r\n\t\t\t\t\t\t\x3c/tbody\x3e\r\n\t\t\t\t\t\x3c/table\x3e\r\n\t\t\t\t\x3c/td\x3e\r\n\t\t\t\x3c/tr\x3e\r\n\t\t\t\x3ctr\x3e\r\n\t\t\t\t\x3ctd style\x3d"width:50%;"\x3e\r\n\t\t\t\t\t\x3ctable style\x3d"width:100%;" cellspacing\x3d"0"\x3e\r\n\t\t\t\t\t\t\x3ctbody\x3e\r\n\t\t\t\t\t\t\t\x3ctr\x3e\r\n\t\t\t\t\t\t\t\t\x3ctd nowrap style\x3d"width:187px;"\x3e\r\n\t\t\t\t\t\t\t\t\t\x3cspan nowrap style\x3d"white-space:nowrap;"\x3e${nls.directionsOutputType}\x3c/span\x3e\r\n\t\t\t\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\t\t\t\x3ctd style\x3d"width:auto;"\x3e\r\n\t\t\t\t\t\t\t\t\t\x3cselect data-dojo-attach-point\x3d"directionsOutputType" data-dojo-type\x3d"dijit/form/Select" style\x3d"width:100%;height:30px;"\x3e\r\n\t\t\t\t\t\t\t\t\t\t\x3coption value\x3d"complete"\x3ecomplete\x3c/option\x3e\r\n\t\t\t\t\t\t\t\t\t\t\x3coption value\x3d"complete-no-events"\x3ecomplete-no-events\x3c/option\x3e\r\n\t\t\t\t\t\t\t\t\t\t\x3coption value\x3d"instructions-only"\x3einstructions-only\x3c/option\x3e\r\n\t\t\t\t\t\t\t\t\t\t\x3coption value\x3d"standard" selected\x3estandard\x3c/option\x3e\r\n\t\t\t\t\t\t\t\t\t\t\x3coption value\x3d"summary-only"\x3esummary-only\x3c/option\x3e\r\n\t\t\t\t\t\t\t\t\t\x3c/select\x3e\r\n\t\t\t\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\t\t\x3c/tr\x3e\r\n\t\t\t\t\t\t\x3c/tbody\x3e\r\n\t\t\t\t\t\x3c/table\x3e\r\n\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\x3ctd style\x3d"width:50%;"\x3e\r\n\t\t\t\t\t\x3ctable style\x3d"width:100%;" cellspacing\x3d"0"\x3e\r\n\t\t\t\t\t\t\x3ctbody\x3e\r\n\t\t\t\t\t\t\t\x3ctr\x3e\r\n\t\t\t\t\t\t\t\t\x3ctd nowrap style\x3d"width:207px;"\x3e\r\n\t\t\t\t\t\t\t\t\t\x3cspan nowrap style\x3d"white-space:nowrap;margin-left:20px;"\x3e${nls.impedanceAttribute}\x3c/span\x3e\r\n\t\t\t\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\t\t\t\x3ctd style\x3d"width:auto;"\x3e\r\n\t\t\t\t\t\t\t\t\t\x3cinput data-dojo-attach-point\x3d"impedanceAttribute" data-dojo-type\x3d"dijit/form/ValidationTextBox"  style\x3d"width:100%;" /\x3e\r\n\t\t\t\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\t\t\x3c/tr\x3e\r\n\t\t\t\t\t\t\x3c/tbody\x3e\r\n\t\t\t\t\t\x3c/table\x3e\r\n\t\t\t\t\x3c/td\x3e\r\n\t\t\t\x3c/tr\x3e\r\n\t\t\x3c/tbody\x3e\r\n\t\x3c/table\x3e\r\n\x3c/div\x3e',
"url:widgets/Directions/setting/css/style.css":".jimu-widget-directions-setting \x3e table \x3e tbody \x3e tr \x3e td{padding:5px 0;}","*now":function(d){d(['dojo/i18n!*preload*widgets/Directions/setting/nls/Setting*["ar","cs","da","de","en","es","et","fi","fr","he","it","ja","ko","lt","lv","nb","nl","pl","pt-br","pt-pt","ro","ru","sv","th","tr","zh-cn","ROOT"]'])}}});
define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/html dojo/_base/query dojo/_base/config dojo/on dojo/Deferred dijit/_WidgetsInTemplateMixin jimu/BaseWidgetSetting jimu/dijit/URLInput jimu/dijit/Message jimu/portalUtils dijit/form/NumberSpinner dijit/form/ValidationTextBox dijit/form/Select".split(" "),function(d,c,m,n,p,f,q,e,g,h,r,k,l,s,t,u){return d([h,g],{baseClass:"jimu-widget-directions-setting",_routeTaskUrl:"http://route.arcgis.com/arcgis/rest/services/World/Route/NAServer/Route_World",
_locatorUrl:"http://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer",postCreate:function(){this.inherited(arguments);this.portal=l.getPortal(this.appConfig.portalUrl)},startup:function(){this.inherited(arguments);this.setConfig(this.config)},setConfig:function(a){if(this.config=a)a=this.config.geocoderOptions,"object"===typeof a&&(this.autoComplete.checked=!0===a.autoComplete,this.maxLocations.set("value",a.maxLocations),this.minCharacters.set("value",a.minCharacters),this.searchDelay.set("value",
a.searchDelay),(a=a.geocoders)&&0<a.length&&this.placeholder.set("value",a[0].placeholder||"")),a=this.config.routeOptions,"object"===typeof a&&(this.directionsLanguage.set("value",a.directionsLanguage||f.locale||"en_us"),this.directionsLengthUnits.set("value",a.directionsLengthUnits),this.directionsOutputType.set("value",a.directionsOutputType),this.impedanceAttribute.set("value",a.impedanceAttribute)),this._getRouteTaskUrl().then(c.hitch(this,function(a){this.routeUrl.set("value",a)})),this._getLocatorUrl().then(c.hitch(this,
function(a){this.locatorUrl.set("value",a)}))},_getRouteTaskUrl:function(){var a=new e;this.config.routeTaskUrl?a.resolve(this.config.routeTaskUrl):this.portal.loadSelfInfo().then(c.hitch(this,function(b){b&&b.helperServices&&b.helperServices.route?a.resolve(b.helperServices.route.url):a.resolve(this._routeTaskUrl)}),c.hitch(this,function(b){console.error(b);a.resolve(this._routeTaskUrl)}));return a},_getLocatorUrl:function(){var a=new e,b=this.config.geocoderOptions&&this.config.geocoderOptions.geocoders&&
this.config.geocoderOptions.geocoders[0];(b=b&&b.url)?a.resolve(b):this.portal.loadSelfInfo().then(c.hitch(this,function(b){b&&b.helperServices&&b.helperServices.geocode&&0<b.helperServices.geocode.length?a.resolve(b.helperServices.geocode[0].url):a.resolve(this._locatorUrl)}),c.hitch(this,function(b){console.error(b);a.resolve(this._locatorUrl)}));return a},getConfig:function(){return!this.routeUrl.validate()?(this._showValidationErrorTip(this.routeUrl),this._showParametersTip(),!1):!this.locatorUrl.validate()?
(this._showValidationErrorTip(this.locatorUrl),this._showParametersTip(),!1):!this.searchDelay.validate()?(this._showValidationErrorTip(this.searchDelay),this._showParametersTip(),!1):!this.maxLocations.validate()?(this._showValidationErrorTip(this.maxLocations),this._showParametersTip(),!1):!this.minCharacters.validate()?(this._showValidationErrorTip(this.minCharacters),this._showParametersTip(),!1):!this.directionsLanguage.validate()?(this._showValidationErrorTip(this.directionsLanguage),this._showParametersTip(),
!1):this.config={routeTaskUrl:this.routeUrl.get("value"),routeOptions:{directionsLanguage:this.directionsLanguage.get("value"),directionsLengthUnits:this.directionsLengthUnits.get("value"),directionsOutputType:this.directionsOutputType.get("value"),impedanceAttribute:this.impedanceAttribute.get("value")},geocoderOptions:{autoComplete:this.autoComplete.checked,maxLocations:this.maxLocations.get("value"),minCharacters:this.minCharacters.get("value"),searchDelay:this.searchDelay.get("value"),arcgisGeocoder:!1,
geocoders:[{url:this.locatorUrl.get("value"),placeholder:this.placeholder.get("value")}]}}},_showValidationErrorTip:function(a){!a.validate()&&a.domNode&&a.focusNode&&(a.focusNode.focus(),setTimeout(c.hitch(this,function(){a.focusNode.blur()}),100))},_showParametersTip:function(){new k({message:this.nls.parametersTip})}})});