System.register(["rtts_assert/rtts_assert", "angular2/di", "angular2/src/facade/lang", "angular2/src/facade/async", "angular2/src/facade/collection", "./common_options"], function($__export) {
  "use strict";
  var assert,
      bind,
      Injector,
      OpaqueToken,
      BaseException,
      ABSTRACT,
      isBlank,
      isPresent,
      Promise,
      PromiseWrapper,
      List,
      ListWrapper,
      StringMap,
      Options,
      WebDriverExtension,
      PerfLogFeatures,
      _CHILDREN;
  return {
    setters: [function($__m) {
      assert = $__m.assert;
    }, function($__m) {
      bind = $__m.bind;
      Injector = $__m.Injector;
      OpaqueToken = $__m.OpaqueToken;
    }, function($__m) {
      BaseException = $__m.BaseException;
      ABSTRACT = $__m.ABSTRACT;
      isBlank = $__m.isBlank;
      isPresent = $__m.isPresent;
    }, function($__m) {
      Promise = $__m.Promise;
      PromiseWrapper = $__m.PromiseWrapper;
    }, function($__m) {
      List = $__m.List;
      ListWrapper = $__m.ListWrapper;
      StringMap = $__m.StringMap;
    }, function($__m) {
      Options = $__m.Options;
    }],
    execute: function() {
      WebDriverExtension = $__export("WebDriverExtension", (function() {
        var WebDriverExtension = function WebDriverExtension() {
          ;
        };
        return ($traceurRuntime.createClass)(WebDriverExtension, {
          gc: function() {
            throw new BaseException('NYI');
          },
          timeBegin: function(name) {
            throw new BaseException('NYI');
          },
          timeEnd: function(name, restart) {
            assert.argumentTypes(name, assert.type.any, restart, assert.type.boolean);
            throw new BaseException('NYI');
          },
          readPerfLog: function() {
            throw new BaseException('NYI');
          },
          perfLogFeatures: function() {
            throw new BaseException('NYI');
          },
          supports: function(capabilities) {
            assert.argumentTypes(capabilities, StringMap);
            return assert.returnType((true), assert.type.boolean);
          }
        }, {bindTo: function(childTokens) {
            return [bind(_CHILDREN).toAsyncFactory((function(injector) {
              return PromiseWrapper.all(ListWrapper.map(childTokens, (function(token) {
                return injector.asyncGet(token);
              })));
            }), [Injector]), bind(WebDriverExtension).toFactory((function(children, capabilities) {
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
      }()));
      Object.defineProperty(WebDriverExtension, "annotations", {get: function() {
          return [new ABSTRACT()];
        }});
      Object.defineProperty(WebDriverExtension.prototype.timeEnd, "parameters", {get: function() {
          return [[], [assert.type.boolean]];
        }});
      Object.defineProperty(WebDriverExtension.prototype.supports, "parameters", {get: function() {
          return [[StringMap]];
        }});
      PerfLogFeatures = $__export("PerfLogFeatures", (function() {
        var PerfLogFeatures = function PerfLogFeatures() {
          var $__1 = arguments[0] !== (void 0) ? arguments[0] : {},
              render = $__1.render,
              gc = $__1.gc;
          this.render = isPresent(render) && render;
          this.gc = isPresent(gc) && gc;
        };
        return ($traceurRuntime.createClass)(PerfLogFeatures, {}, {});
      }()));
      _CHILDREN = new OpaqueToken('WebDriverExtension.children');
    }
  };
});
//# sourceMappingURL=web_driver_extension.es6.map

//# sourceMappingURL=./web_driver_extension.js.map