"use strict";
Object.defineProperties(module.exports, {
  SampleDescription: {get: function() {
      return SampleDescription;
    }},
  __esModule: {value: true}
});
var $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_di__,
    $__validator__,
    $__metric__,
    $__common_95_options__;
var $__0 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    StringMapWrapper = $__0.StringMapWrapper,
    ListWrapper = $__0.ListWrapper,
    StringMap = $__0.StringMap;
var $__1 = ($__angular2_47_di__ = require("angular2/di"), $__angular2_47_di__ && $__angular2_47_di__.__esModule && $__angular2_47_di__ || {default: $__angular2_47_di__}),
    bind = $__1.bind,
    OpaqueToken = $__1.OpaqueToken;
var Validator = ($__validator__ = require("./validator"), $__validator__ && $__validator__.__esModule && $__validator__ || {default: $__validator__}).Validator;
var Metric = ($__metric__ = require("./metric"), $__metric__ && $__metric__.__esModule && $__metric__ || {default: $__metric__}).Metric;
var Options = ($__common_95_options__ = require("./common_options"), $__common_95_options__ && $__common_95_options__.__esModule && $__common_95_options__ || {default: $__common_95_options__}).Options;
var SampleDescription = function SampleDescription(id, descriptions, metrics) {
  var $__5 = this;
  this.id = id;
  this.metrics = metrics;
  this.description = {};
  ListWrapper.forEach(descriptions, (function(description) {
    StringMapWrapper.forEach(description, (function(value, prop) {
      return $__5.description[prop] = value;
    }));
  }));
};
($traceurRuntime.createClass)(SampleDescription, {toJson: function() {
    return {
      'id': this.id,
      'description': this.description,
      'metrics': this.metrics
    };
  }}, {get BINDINGS() {
    return _BINDINGS;
  }});
Object.defineProperty(SampleDescription, "parameters", {get: function() {
    return [[], [$traceurRuntime.genericType(List, StringMap)], [StringMap]];
  }});
var _BINDINGS = [bind(SampleDescription).toFactory((function(metric, id, forceGc, userAgent, validator, defaultDesc, userDesc) {
  return new SampleDescription(id, [{
    'forceGc': forceGc,
    'userAgent': userAgent
  }, validator.describe(), defaultDesc, userDesc], metric.describe());
}), [Metric, Options.SAMPLE_ID, Options.FORCE_GC, Options.USER_AGENT, Validator, Options.DEFAULT_DESCRIPTION, Options.SAMPLE_DESCRIPTION])];
//# sourceMappingURL=sample_description.js.map

//# sourceMappingURL=./sample_description.map