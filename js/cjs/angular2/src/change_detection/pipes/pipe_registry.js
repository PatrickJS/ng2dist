"use strict";
Object.defineProperties(module.exports, {
  PipeRegistry: {get: function() {
      return PipeRegistry;
    }},
  __esModule: {value: true}
});
var $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_src_47_facade_47_lang__,
    $__pipe__,
    $___46__46__47_binding_95_propagation_95_config__;
var $__0 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    List = $__0.List,
    ListWrapper = $__0.ListWrapper;
var $__1 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    isBlank = $__1.isBlank,
    isPresent = $__1.isPresent,
    BaseException = $__1.BaseException,
    CONST = $__1.CONST;
var Pipe = ($__pipe__ = require("./pipe"), $__pipe__ && $__pipe__.__esModule && $__pipe__ || {default: $__pipe__}).Pipe;
var BindingPropagationConfig = ($___46__46__47_binding_95_propagation_95_config__ = require("../binding_propagation_config"), $___46__46__47_binding_95_propagation_95_config__ && $___46__46__47_binding_95_propagation_95_config__.__esModule && $___46__46__47_binding_95_propagation_95_config__ || {default: $___46__46__47_binding_95_propagation_95_config__}).BindingPropagationConfig;
var PipeRegistry = function PipeRegistry(config) {
  this.config = config;
};
($traceurRuntime.createClass)(PipeRegistry, {get: function(type, obj, bpc) {
    var listOfConfigs = this.config[type];
    if (isBlank(listOfConfigs)) {
      throw new BaseException(("Cannot find a pipe for type '" + type + "' object '" + obj + "'"));
    }
    var matchingConfig = ListWrapper.find(listOfConfigs, (function(pipeConfig) {
      return pipeConfig.supports(obj);
    }));
    if (isBlank(matchingConfig)) {
      throw new BaseException(("Cannot find a pipe for type '" + type + "' object '" + obj + "'"));
    }
    return matchingConfig.create(bpc);
  }}, {});
Object.defineProperty(PipeRegistry.prototype.get, "parameters", {get: function() {
    return [[$traceurRuntime.type.string], [], [BindingPropagationConfig]];
  }});
//# sourceMappingURL=pipe_registry.js.map

//# sourceMappingURL=./pipe_registry.map