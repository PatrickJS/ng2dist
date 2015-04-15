"use strict";
Object.defineProperties(module.exports, {
  Metric: {get: function() {
      return Metric;
    }},
  __esModule: {value: true}
});
var $__angular2_47_di__,
    $__angular2_47_src_47_facade_47_async__,
    $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_facade_47_collection__;
var bind = ($__angular2_47_di__ = require("angular2/di"), $__angular2_47_di__ && $__angular2_47_di__.__esModule && $__angular2_47_di__ || {default: $__angular2_47_di__}).bind;
var $__1 = ($__angular2_47_src_47_facade_47_async__ = require("angular2/src/facade/async"), $__angular2_47_src_47_facade_47_async__ && $__angular2_47_src_47_facade_47_async__.__esModule && $__angular2_47_src_47_facade_47_async__ || {default: $__angular2_47_src_47_facade_47_async__}),
    Promise = $__1.Promise,
    PromiseWrapper = $__1.PromiseWrapper;
var $__2 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    ABSTRACT = $__2.ABSTRACT,
    BaseException = $__2.BaseException;
var StringMap = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}).StringMap;
var Metric = function Metric() {
  ;
};
var $Metric = Metric;
($traceurRuntime.createClass)(Metric, {
  beginMeasure: function() {
    throw new BaseException('NYI');
  },
  endMeasure: function(restart) {
    throw new BaseException('NYI');
  },
  describe: function() {
    throw new BaseException('NYI');
  }
}, {bindTo: function(delegateToken) {
    return [bind($Metric).toFactory((function(delegate) {
      return delegate;
    }), [delegateToken])];
  }});
Object.defineProperty(Metric, "annotations", {get: function() {
    return [new ABSTRACT()];
  }});
Object.defineProperty(Metric.prototype.endMeasure, "parameters", {get: function() {
    return [[$traceurRuntime.type.boolean]];
  }});
//# sourceMappingURL=metric.js.map

//# sourceMappingURL=./metric.map