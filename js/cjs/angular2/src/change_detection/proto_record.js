"use strict";
Object.defineProperties(module.exports, {
  RECORD_TYPE_SELF: {get: function() {
      return RECORD_TYPE_SELF;
    }},
  RECORD_TYPE_CONST: {get: function() {
      return RECORD_TYPE_CONST;
    }},
  RECORD_TYPE_PRIMITIVE_OP: {get: function() {
      return RECORD_TYPE_PRIMITIVE_OP;
    }},
  RECORD_TYPE_PROPERTY: {get: function() {
      return RECORD_TYPE_PROPERTY;
    }},
  RECORD_TYPE_LOCAL: {get: function() {
      return RECORD_TYPE_LOCAL;
    }},
  RECORD_TYPE_INVOKE_METHOD: {get: function() {
      return RECORD_TYPE_INVOKE_METHOD;
    }},
  RECORD_TYPE_INVOKE_CLOSURE: {get: function() {
      return RECORD_TYPE_INVOKE_CLOSURE;
    }},
  RECORD_TYPE_KEYED_ACCESS: {get: function() {
      return RECORD_TYPE_KEYED_ACCESS;
    }},
  RECORD_TYPE_PIPE: {get: function() {
      return RECORD_TYPE_PIPE;
    }},
  RECORD_TYPE_BINDING_PIPE: {get: function() {
      return RECORD_TYPE_BINDING_PIPE;
    }},
  RECORD_TYPE_INTERPOLATE: {get: function() {
      return RECORD_TYPE_INTERPOLATE;
    }},
  ProtoRecord: {get: function() {
      return ProtoRecord;
    }},
  __esModule: {value: true}
});
var $__angular2_47_src_47_facade_47_collection__,
    $__binding_95_record__;
var List = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}).List;
var BindingRecord = ($__binding_95_record__ = require("./binding_record"), $__binding_95_record__ && $__binding_95_record__.__esModule && $__binding_95_record__ || {default: $__binding_95_record__}).BindingRecord;
var RECORD_TYPE_SELF = 0;
var RECORD_TYPE_CONST = 1;
var RECORD_TYPE_PRIMITIVE_OP = 2;
var RECORD_TYPE_PROPERTY = 3;
var RECORD_TYPE_LOCAL = 4;
var RECORD_TYPE_INVOKE_METHOD = 5;
var RECORD_TYPE_INVOKE_CLOSURE = 6;
var RECORD_TYPE_KEYED_ACCESS = 7;
var RECORD_TYPE_PIPE = 8;
var RECORD_TYPE_BINDING_PIPE = 9;
var RECORD_TYPE_INTERPOLATE = 10;
var ProtoRecord = function ProtoRecord(mode, name, funcOrValue, args, fixedArgs, contextIndex, selfIndex, bindingRecord, expressionAsString, lastInBinding, lastInDirective) {
  this.mode = mode;
  this.name = name;
  this.funcOrValue = funcOrValue;
  this.args = args;
  this.fixedArgs = fixedArgs;
  this.contextIndex = contextIndex;
  this.selfIndex = selfIndex;
  this.bindingRecord = bindingRecord;
  this.lastInBinding = lastInBinding;
  this.lastInDirective = lastInDirective;
  this.expressionAsString = expressionAsString;
};
($traceurRuntime.createClass)(ProtoRecord, {isPureFunction: function() {
    return this.mode === RECORD_TYPE_INTERPOLATE || this.mode === RECORD_TYPE_PRIMITIVE_OP;
  }}, {});
Object.defineProperty(ProtoRecord, "parameters", {get: function() {
    return [[$traceurRuntime.type.number], [$traceurRuntime.type.string], [], [List], [List], [$traceurRuntime.type.number], [$traceurRuntime.type.number], [BindingRecord], [$traceurRuntime.type.string], [$traceurRuntime.type.boolean], [$traceurRuntime.type.boolean]];
  }});
//# sourceMappingURL=proto_record.js.map

//# sourceMappingURL=./proto_record.map