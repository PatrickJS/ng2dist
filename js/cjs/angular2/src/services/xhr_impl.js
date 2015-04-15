"use strict";
Object.defineProperties(module.exports, {
  XHRImpl: {get: function() {
      return XHRImpl;
    }},
  __esModule: {value: true}
});
var $__angular2_47_di__,
    $__angular2_47_src_47_facade_47_async__,
    $__xhr__;
var Injectable = ($__angular2_47_di__ = require("angular2/di"), $__angular2_47_di__ && $__angular2_47_di__.__esModule && $__angular2_47_di__ || {default: $__angular2_47_di__}).Injectable;
var $__1 = ($__angular2_47_src_47_facade_47_async__ = require("angular2/src/facade/async"), $__angular2_47_src_47_facade_47_async__ && $__angular2_47_src_47_facade_47_async__.__esModule && $__angular2_47_src_47_facade_47_async__ || {default: $__angular2_47_src_47_facade_47_async__}),
    Promise = $__1.Promise,
    PromiseWrapper = $__1.PromiseWrapper;
var XHR = ($__xhr__ = require("./xhr"), $__xhr__ && $__xhr__.__esModule && $__xhr__ || {default: $__xhr__}).XHR;
var XHRImpl = function XHRImpl() {
  $traceurRuntime.superConstructor($XHRImpl).apply(this, arguments);
  ;
};
var $XHRImpl = XHRImpl;
($traceurRuntime.createClass)(XHRImpl, {get: function(url) {
    var completer = PromiseWrapper.completer();
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'text';
    xhr.onload = function() {
      var status = xhr.status;
      if (200 <= status && status <= 300) {
        completer.resolve(xhr.responseText);
      } else {
        completer.reject(("Failed to load " + url));
      }
    };
    xhr.onerror = function() {
      completer.reject(("Failed to load " + url));
    };
    xhr.send();
    return completer.promise;
  }}, {}, XHR);
Object.defineProperty(XHRImpl, "annotations", {get: function() {
    return [new Injectable()];
  }});
Object.defineProperty(XHRImpl.prototype.get, "parameters", {get: function() {
    return [[$traceurRuntime.type.string]];
  }});
//# sourceMappingURL=xhr_impl.es6.map

//# sourceMappingURL=./xhr_impl.map