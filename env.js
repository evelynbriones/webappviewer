///////////////////////////////////////////////////////////////////////////
// Copyright ? 2014 Esri. All Rights Reserved.
//
// Licensed under the Apache License Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
///////////////////////////////////////////////////////////////////////////

//****************************************************************
//The main function of the env.js is to initialize apiUrl and path
//****************************************************************

/* jshint unused: false */
/*global testLoad */
var
  //apiUrl: String
  //    the URL of the ArcGIS API for JavaScript, you can change it to point to your own API.
  apiUrl = null,

  //weinreUrl: String
  //    weinre is a tool which can help debug the app on mobile devices.
  //    Please see: http://people.apache.org/~pmuellr/weinre/docs/latest/Home.html
  weinreUrl = '//launch.chn.esri.com:8081/target/target-script-min.js',

  //debug: Boolean
  //    If it's debug mode, the app will load weinre file
  debug = false,

  path = null,

  isXT = false,

  allCookies;

// console.time('before map');

(function(global){
  //init API URL
  var queryObject = getQueryObject();

  ////////Replace the following whole line when download the app, incluing the comment

  apiUrl = '//js.arcgis.com/3.11';

  //////////////////////////////////////////////////////////////
  allCookies = getAllCookies();
  if(!apiUrl){
    isXT = checkIsXT();
    window.isRunInPortal = !isXT;
    
    if(queryObject.apiurl){
      apiUrl = queryObject.apiurl;
    }else if(isXT){
      apiUrl = '//js.arcgis.com/3.11';
    }else{
      var portalUrl = getPortalUrlFromLocation();
      if(portalUrl.indexOf('arcgis.com') > -1){
        apiUrl = '//js.arcgis.com/3.11';
      }else{
        apiUrl = portalUrl + 'jsapi/jsapi/';
      }
    }
  }
  
  if (apiUrl.substr(apiUrl.length - 1, apiUrl.length) !== '/') {
    apiUrl = apiUrl + '/';
  }

  path = getPath();

  function getAllCookies(){
    var strAllCookie = document.cookie;
    var cookies = {};
    if (strAllCookie) {
      var strCookies = strAllCookie.split(';');
      for(var i = 0; i < strCookies.length; i++){
        var splits = strCookies[i].split('=');
        if(splits && splits.length > 1){
          cookies[splits[0].replace(/^\s+|\s+$/gm,'')] = splits[1];
        }
      }
    }
    return cookies;
  }

  function checkIsXT(){
    return allCookies.appbuilder_xt === 'true';
  }

  function getPortalUrlFromLocation(){
    var portalUrl = getPortalServerFromLocation() +  getDeployContextFromLocation();
    return portalUrl;
  }

  function getPortalServerFromLocation(){
    var server = window.location.protocol + '//' + window.location.host;
    return server;
  }

  function getDeployContextFromLocation (){
    var keyIndex = window.location.href.indexOf("/home");
    if(keyIndex < 0){
      keyIndex = window.location.href.indexOf("/apps");
    }
    var context = window.location.href.substring(window.location.href.indexOf(window.location.host) + window.location.host.length + 1, keyIndex);
    if (context !== "/") {
      context = "/" + context + "/";
    }
    return context;
  }

  function getPath() {
    var fullPath, path;

    fullPath = window.location.pathname;
    if (fullPath === '/' || fullPath.substr(fullPath.length - 1) === '/') {
      path = fullPath;
    } else if (/\.html$/.test(fullPath.split('/').pop())) {
      var sections = fullPath.split('/');
      sections.pop();
      path = sections.join('/') + '/';
    } else {
      return false;
    }
    return path;
  }

  function getQueryObject(){
    var query = window.location.search;
    if (query.indexOf('?') > -1) {
      query = query.substr(1);
    }
    var pairs = query.split('&');
    var queryObject = {};
    for(var i = 0; i < pairs.length; i++){
      var splits = decodeURIComponent(pairs[i]).split('=');
      queryObject[splits[0]] = splits[1];
    }
    return queryObject;
  }
  function loadPolyfills(prePath, cb) {
    prePath = prePath || "";
    var ap = Array.prototype,
      fp = Function.prototype,
      sp = String.prototype,
      loaded = 0,
      completeCb = function() {
        loaded++;
        if (loaded === tests.length) {
          cb();
        }
      },
      tests = [{
        test: window.console,
        failure: prePath + "libs/polyfills/console.js",
        callback: completeCb
      }, {
        test: window.File && window.FileReader && window.FileList && window.Blob,
        failure: [
          prePath + "libs/polyfills/fileAPI/FileAPIConfig.js",
          prePath + "libs/polyfills/fileAPI/FileAPI.js"
        ],
        callback: function(url, result, key) {
          // if (key === "fileAPIConfig" && !result && window.FileAPI){
          //   window.FileAPI.staticPath = prePath + window.FileAPI.staticPath;
          //   window.FileAPI.flashUrl = prePath + window.FileAPI.flashUrl;
          //   window.FileAPI.flashImageUrl = prePath + window.FileAPI.flashImageUrl;
          // }
          if(window.FileAPI){
            window.FileAPI.staticPath = prePath + window.FileAPI.staticPath;
            window.FileAPI.flashUrl = prePath + window.FileAPI.flashUrl;
            window.FileAPI.flashImageUrl = prePath + window.FileAPI.flashImageUrl;
          }
          completeCb();
        }
      }, {
        test: ap.indexOf && ap.lastIndexOf && ap.forEach && ap.every && ap.some && ap.filter && ap.map && ap.reduce && ap.reduceRight,
        failure: prePath + "libs/polyfills/array.generics.js",
        callback: completeCb
      }, {
        test: fp.bind,
        failure: prePath + "libs/polyfills/bind.js",
        callback: completeCb
      }, {
        test: Date.now,
        failure: prePath + "libs/polyfills/now.js",
        callback: completeCb
      }, {
        test: sp.trim,
        failure: prePath + "libs/polyfills/trim.js",
        callback: completeCb
      }];

    for(var i = 0; i < tests.length; i++){
      testLoad(tests[i]);
    }
  }

  global.loadPolyfills = loadPolyfills;
  global.queryObject = queryObject;
})(window);
