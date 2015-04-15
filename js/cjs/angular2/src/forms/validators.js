"use strict";
Object.defineProperties(module.exports, {
  Validators: {get: function() {
      return Validators;
    }},
  __esModule: {value: true}
});
var $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_facade_47_collection__,
    $__model__;
var $__0 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    isBlank = $__0.isBlank,
    isPresent = $__0.isPresent;
var $__1 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    List = $__1.List,
    ListWrapper = $__1.ListWrapper,
    StringMapWrapper = $__1.StringMapWrapper;
var modelModule = ($__model__ = require("./model"), $__model__ && $__model__.__esModule && $__model__ || {default: $__model__});
var Validators = function Validators() {
  ;
};
var $Validators = Validators;
($traceurRuntime.createClass)(Validators, {}, {
  required: function(c) {
    return isBlank(c.value) || c.value == "" ? {"required": true} : null;
  },
  nullValidator: function(c) {
    return null;
  },
  compose: function(validators) {
    return function(c) {
      var res = ListWrapper.reduce(validators, (function(res, validator) {
        var errors = validator(c);
        return isPresent(errors) ? StringMapWrapper.merge(res, errors) : res;
      }), {});
      return StringMapWrapper.isEmpty(res) ? null : res;
    };
  },
  group: function(c) {
    var res = {};
    StringMapWrapper.forEach(c.controls, (function(control, name) {
      if (c.contains(name) && isPresent(control.errors)) {
        $Validators._mergeErrors(control, res);
      }
    }));
    return StringMapWrapper.isEmpty(res) ? null : res;
  },
  array: function(c) {
    var res = {};
    ListWrapper.forEach(c.controls, (function(control) {
      if (isPresent(control.errors)) {
        $Validators._mergeErrors(control, res);
      }
    }));
    return StringMapWrapper.isEmpty(res) ? null : res;
  },
  _mergeErrors: function(control, res) {
    StringMapWrapper.forEach(control.errors, (function(value, error) {
      if (!StringMapWrapper.contains(res, error)) {
        res[error] = [];
      }
      ListWrapper.push(res[error], control);
    }));
  }
});
Object.defineProperty(Validators.required, "parameters", {get: function() {
    return [[modelModule.Control]];
  }});
Object.defineProperty(Validators.nullValidator, "parameters", {get: function() {
    return [[$traceurRuntime.type.any]];
  }});
Object.defineProperty(Validators.compose, "parameters", {get: function() {
    return [[$traceurRuntime.genericType(List, Function)]];
  }});
Object.defineProperty(Validators.group, "parameters", {get: function() {
    return [[modelModule.ControlGroup]];
  }});
Object.defineProperty(Validators.array, "parameters", {get: function() {
    return [[modelModule.ControlArray]];
  }});
//# sourceMappingURL=validators.js.map

//# sourceMappingURL=./validators.map