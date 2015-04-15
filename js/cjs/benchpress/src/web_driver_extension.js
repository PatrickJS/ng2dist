"use strict";
Object.defineProperties(module.exports, {
  WebDriverExtension: {get: function() {
      return WebDriverExtension;
    }},
  PerfLogFeatures: {get: function() {
      return PerfLogFeatures;
    }},
  __esModule: {value: true}
});
var $__angular2_47_di__,
    $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_facade_47_async__,
    $__angular2_47_src_47_facade_47_collection__,
    $__common_95_options__;
var $__0 = ($__angular2_47_di__ = require("angular2/di"), $__angular2_47_di__ && $__angular2_47_di__.__esModule && $__angular2_47_di__ || {default: $__angular2_47_di__}),
    bind = $__0.bind,
    Injector = $__0.Injector,
    OpaqueToken = $__0.OpaqueToken;
var $__1 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    BaseException = $__1.BaseException,
    ABSTRACT = $__1.ABSTRACT,
    isBlank = $__1.isBlank,
    isPresent = $__1.isPresent;
var $__2 = ($__angular2_47_src_47_facade_47_async__ = require("angular2/src/facade/async"), $__angular2_47_src_47_facade_47_async__ && $__angular2_47_src_47_facade_47_async__.__esModule && $__angular2_47_src_47_facade_47_async__ || {default: $__angular2_47_src_47_facade_47_async__}),
    Promise = $__2.Promise,
    PromiseWrapper = $__2.PromiseWrapper;
var $__3 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    List = $__3.List,
    ListWrapper = $__3.ListWrapper,
    StringMap = $__3.StringMap;
var Options = ($__common_95_options__ = require("./common_options"), $__common_95_options__ && $__common_95_options__.__esModule && $__common_95_options__ || {default: $__common_95_options__}).Options;
var WebDriverExtension = function WebDriverExtension() {
  ;
};
var $WebDriverExtension = WebDriverExtension;
($traceurRuntime.createClass)(WebDriverExtension, {
  gc: function() {
    throw new BaseException('NYI');
  },
  timeBegin: function(name) {
    throw new BaseException('NYI');
  },
  timeEnd: function(name, restart) {
    throw new BaseException('NYI');
  },
  readPerfLog: function() {
    throw new BaseException('NYI');
  },
  perfLogFeatures: function() {
    throw new BaseException('NYI');
  },
  supports: function(capabilities) {
    return true;
  }
}, {bindTo: function(childTokens) {
    return [bind(_CHILDREN).toAsyncFactory((function(injector) {
      return PromiseWrapper.all(ListWrapper.map(childTokens, (function(token) {
        return injector.asyncGet(token);
      })));
    }), [Injector]), bind($WebDriverExtension).toFactory((function(children, capabilities) {
      var delegate;
      ListWrapper.forEach(children, (function(extension) {
        if (extension.supports(capabilities)) {
          delegate = extension;
        }
      }));
      if (isBlank(delegate)) {
        throw new BaseException('Could not find a delegate for given capabilities!');
      }
      return delegate;
    }), [_CHILDREN, Options.CAPABILITIES])];
  }});
Object.defineProperty(WebDriverExtension, "annotations", {get: function() {
    return [new ABSTRACT()];
  }});
Object.defineProperty(WebDriverExtension.prototype.timeEnd, "parameters", {get: function() {
    return [[], [$traceurRuntime.type.boolean]];
  }});
Object.defineProperty(WebDriverExtension.prototype.supports, "parameters", {get: function() {
    return [[StringMap]];
  }});
var PerfLogFeatures = function PerfLogFeatures() {
  var $__6 = arguments[0] !== (void 0) ? arguments[0] : {},
      render = $__6.render,
      gc = $__6.gc;
  this.render = isPresent(render) && render;
  this.gc = isPresent(gc) && gc;
};
($traceurRuntime.createClass)(PerfLogFeatures, {}, {});
var _CHILDREN = new OpaqueToken('WebDriverExtension.children');
//# sourceMappingURL=web_driver_extension.js.map

//# sourceMappingURL=./web_driver_extension.map