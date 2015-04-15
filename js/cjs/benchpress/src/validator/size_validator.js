"use strict";
Object.defineProperties(module.exports, {
  SizeValidator: {get: function() {
      return SizeValidator;
    }},
  __esModule: {value: true}
});
var $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_di__,
    $___46__46__47_validator__,
    $___46__46__47_measure_95_values__;
var $__0 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    List = $__0.List,
    ListWrapper = $__0.ListWrapper,
    StringMap = $__0.StringMap;
var $__1 = ($__angular2_47_di__ = require("angular2/di"), $__angular2_47_di__ && $__angular2_47_di__.__esModule && $__angular2_47_di__ || {default: $__angular2_47_di__}),
    bind = $__1.bind,
    OpaqueToken = $__1.OpaqueToken;
var Validator = ($___46__46__47_validator__ = require("../validator"), $___46__46__47_validator__ && $___46__46__47_validator__.__esModule && $___46__46__47_validator__ || {default: $___46__46__47_validator__}).Validator;
var MeasureValues = ($___46__46__47_measure_95_values__ = require("../measure_values"), $___46__46__47_measure_95_values__ && $___46__46__47_measure_95_values__.__esModule && $___46__46__47_measure_95_values__ || {default: $___46__46__47_measure_95_values__}).MeasureValues;
var SizeValidator = function SizeValidator(size) {
  $traceurRuntime.superConstructor($SizeValidator).call(this);
  this._sampleSize = size;
};
var $SizeValidator = SizeValidator;
($traceurRuntime.createClass)(SizeValidator, {
  describe: function() {
    return {'sampleSize': this._sampleSize};
  },
  validate: function(completeSample) {
    if (completeSample.length >= this._sampleSize) {
      return ListWrapper.slice(completeSample, completeSample.length - this._sampleSize, completeSample.length);
    } else {
      return null;
    }
  }
}, {
  get BINDINGS() {
    return _BINDINGS;
  },
  get SAMPLE_SIZE() {
    return _SAMPLE_SIZE;
  }
}, Validator);
Object.defineProperty(SizeValidator.prototype.validate, "parameters", {get: function() {
    return [[$traceurRuntime.genericType(List, MeasureValues)]];
  }});
var _SAMPLE_SIZE = new OpaqueToken('SizeValidator.sampleSize');
var _BINDINGS = [bind(SizeValidator).toFactory((function(size) {
  return new SizeValidator(size);
}), [_SAMPLE_SIZE]), bind(_SAMPLE_SIZE).toValue(10)];
//# sourceMappingURL=size_validator.js.map

//# sourceMappingURL=./size_validator.map