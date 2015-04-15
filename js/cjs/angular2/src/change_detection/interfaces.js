"use strict";
Object.defineProperties(module.exports, {
  ProtoChangeDetector: {get: function() {
      return ProtoChangeDetector;
    }},
  ChangeDetection: {get: function() {
      return ChangeDetection;
    }},
  ChangeDispatcher: {get: function() {
      return ChangeDispatcher;
    }},
  ChangeDetector: {get: function() {
      return ChangeDetector;
    }},
  __esModule: {value: true}
});
var $__angular2_47_src_47_facade_47_collection__,
    $__parser_47_locals__,
    $__constants__,
    $__binding_95_record__;
var List = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}).List;
var Locals = ($__parser_47_locals__ = require("./parser/locals"), $__parser_47_locals__ && $__parser_47_locals__.__esModule && $__parser_47_locals__ || {default: $__parser_47_locals__}).Locals;
var DEFAULT = ($__constants__ = require("./constants"), $__constants__ && $__constants__.__esModule && $__constants__ || {default: $__constants__}).DEFAULT;
var BindingRecord = ($__binding_95_record__ = require("./binding_record"), $__binding_95_record__ && $__binding_95_record__.__esModule && $__binding_95_record__ || {default: $__binding_95_record__}).BindingRecord;
var ProtoChangeDetector = function ProtoChangeDetector() {
  ;
};
($traceurRuntime.createClass)(ProtoChangeDetector, {instantiate: function(dispatcher, bindingRecords, variableBindings, directiveRecords) {
    return null;
  }}, {});
Object.defineProperty(ProtoChangeDetector.prototype.instantiate, "parameters", {get: function() {
    return [[$traceurRuntime.type.any], [List], [List], [List]];
  }});
var ChangeDetection = function ChangeDetection() {
  ;
};
($traceurRuntime.createClass)(ChangeDetection, {createProtoChangeDetector: function(name) {
    var changeControlStrategy = arguments[1] !== (void 0) ? arguments[1] : DEFAULT;
    return null;
  }}, {});
Object.defineProperty(ChangeDetection.prototype.createProtoChangeDetector, "parameters", {get: function() {
    return [[$traceurRuntime.type.string], [$traceurRuntime.type.string]];
  }});
var ChangeDispatcher = function ChangeDispatcher() {
  ;
};
($traceurRuntime.createClass)(ChangeDispatcher, {notifyOnBinding: function(bindingRecord, value) {}}, {});
Object.defineProperty(ChangeDispatcher.prototype.notifyOnBinding, "parameters", {get: function() {
    return [[BindingRecord], [$traceurRuntime.type.any]];
  }});
var ChangeDetector = function ChangeDetector() {
  ;
};
var $ChangeDetector = ChangeDetector;
($traceurRuntime.createClass)(ChangeDetector, {
  addChild: function(cd) {},
  addShadowDomChild: function(cd) {},
  removeChild: function(cd) {},
  remove: function() {},
  hydrate: function(context, locals, directives) {},
  dehydrate: function() {},
  markPathToRootAsCheckOnce: function() {},
  detectChanges: function() {},
  checkNoChanges: function() {}
}, {});
Object.defineProperty(ChangeDetector.prototype.addChild, "parameters", {get: function() {
    return [[ChangeDetector]];
  }});
Object.defineProperty(ChangeDetector.prototype.addShadowDomChild, "parameters", {get: function() {
    return [[ChangeDetector]];
  }});
Object.defineProperty(ChangeDetector.prototype.removeChild, "parameters", {get: function() {
    return [[ChangeDetector]];
  }});
Object.defineProperty(ChangeDetector.prototype.hydrate, "parameters", {get: function() {
    return [[$traceurRuntime.type.any], [Locals], [$traceurRuntime.type.any]];
  }});
//# sourceMappingURL=interfaces.js.map

//# sourceMappingURL=./interfaces.map