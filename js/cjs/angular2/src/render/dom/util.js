"use strict";
Object.defineProperties(module.exports, {
  NG_BINDING_CLASS_SELECTOR: {get: function() {
      return NG_BINDING_CLASS_SELECTOR;
    }},
  NG_BINDING_CLASS: {get: function() {
      return NG_BINDING_CLASS;
    }},
  EVENT_TARGET_SEPARATOR: {get: function() {
      return EVENT_TARGET_SEPARATOR;
    }},
  camelCaseToDashCase: {get: function() {
      return camelCaseToDashCase;
    }},
  dashCaseToCamelCase: {get: function() {
      return dashCaseToCamelCase;
    }},
  __esModule: {value: true}
});
var $__angular2_47_src_47_facade_47_lang__;
var $__0 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    StringWrapper = $__0.StringWrapper,
    RegExpWrapper = $__0.RegExpWrapper,
    isPresent = $__0.isPresent;
var NG_BINDING_CLASS_SELECTOR = '.ng-binding';
var NG_BINDING_CLASS = 'ng-binding';
var EVENT_TARGET_SEPARATOR = ':';
var CAMEL_CASE_REGEXP = RegExpWrapper.create('([A-Z])');
var DASH_CASE_REGEXP = RegExpWrapper.create('-([a-z])');
function camelCaseToDashCase(input) {
  return StringWrapper.replaceAllMapped(input, CAMEL_CASE_REGEXP, (function(m) {
    return '-' + m[1].toLowerCase();
  }));
}
Object.defineProperty(camelCaseToDashCase, "parameters", {get: function() {
    return [[$traceurRuntime.type.string]];
  }});
function dashCaseToCamelCase(input) {
  return StringWrapper.replaceAllMapped(input, DASH_CASE_REGEXP, (function(m) {
    return m[1].toUpperCase();
  }));
}
Object.defineProperty(dashCaseToCamelCase, "parameters", {get: function() {
    return [[$traceurRuntime.type.string]];
  }});
//# sourceMappingURL=util.js.map

//# sourceMappingURL=./util.map