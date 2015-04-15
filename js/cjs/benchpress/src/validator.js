"use strict";
Object.defineProperties(module.exports, {
  Validator: {get: function() {
      return Validator;
    }},
  __esModule: {value: true}
});
var $__angular2_47_di__,
    $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_src_47_facade_47_lang__,
    $__measure_95_values__;
var bind = ($__angular2_47_di__ = require("angular2/di"), $__angular2_47_di__ && $__angular2_47_di__.__esModule && $__angular2_47_di__ || {default: $__angular2_47_di__}).bind;
var $__1 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    List = $__1.List,
    StringMap = $__1.StringMap;
var $__2 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    ABSTRACT = $__2.ABSTRACT,
    BaseException = $__2.BaseException;
var MeasureValues = ($__measure_95_values__ = require("./measure_values"), $__measure_95_values__ && $__measure_95_values__.__esModule && $__measure_95_values__ || {default: $__measure_95_values__}).MeasureValues;
var Validator = function Validator() {
  ;
};
var $Validator = Validator;
($traceurRuntime.createClass)(Validator, {
  validate: function(completeSample) {
    throw new BaseException('NYI');
  },
  describe: function() {
    throw new BaseException('NYI');
  }
}, {bindTo: function(delegateToken) {
    return [bind($Validator).toFactory((function(delegate) {
      return delegate;
    }), [delegateToken])];
  }});
Object.defineProperty(Validator, "annotations", {get: function() {
    return [new ABSTRACT()];
  }});
Object.defineProperty(Validator.prototype.validate, "parameters", {get: function() {
    return [[$traceurRuntime.genericType(List, MeasureValues)]];
  }});
//# sourceMappingURL=validator.js.map

//# sourceMappingURL=./validator.map