System.register(["angular2/di", "angular2/src/dom/dom_adapter", "angular2/src/facade/collection", "angular2/src/facade/lang", "angular2/src/core/testability/get_testability"], function($__export) {
  "use strict";
  var Injectable,
      DOM,
      Map,
      MapWrapper,
      List,
      ListWrapper,
      StringWrapper,
      isBlank,
      BaseException,
      getTestabilityModule,
      Testability,
      TestabilityRegistry;
  return {
    setters: [function($__m) {
      Injectable = $__m.Injectable;
    }, function($__m) {
      DOM = $__m.DOM;
    }, function($__m) {
      Map = $__m.Map;
      MapWrapper = $__m.MapWrapper;
      List = $__m.List;
      ListWrapper = $__m.ListWrapper;
    }, function($__m) {
      StringWrapper = $__m.StringWrapper;
      isBlank = $__m.isBlank;
      BaseException = $__m.BaseException;
    }, function($__m) {
      getTestabilityModule = $__m;
    }],
    execute: function() {
      Testability = $__export("Testability", (function() {
        var Testability = function Testability() {
          this._pendingCount = 0;
          this._callbacks = ListWrapper.create();
        };
        return ($traceurRuntime.createClass)(Testability, {
          increaseCount: function() {
            var delta = arguments[0] !== (void 0) ? arguments[0] : 1;
            this._pendingCount += delta;
            if (this._pendingCount < 0) {
              throw new BaseException('pending async requests below zero');
            } else if (this._pendingCount == 0) {
              this._runCallbacks();
            }
            return this._pendingCount;
          },
          _runCallbacks: function() {
            while (this._callbacks.length !== 0) {
              ListWrapper.removeLast(this._callbacks)();
            }
          },
          whenStable: function(callback) {
            ListWrapper.push(this._callbacks, callback);
            if (this._pendingCount === 0) {
              this._runCallbacks();
            }
          },
          getPendingCount: function() {
            return this._pendingCount;
          },
          findBindings: function(using, binding, exactMatch) {
            return [];
          }
        }, {});
      }()));
      Object.defineProperty(Testability, "annotations", {get: function() {
          return [new Injectable()];
        }});
      Object.defineProperty(Testability.prototype.increaseCount, "parameters", {get: function() {
          return [[assert.type.number]];
        }});
      Object.defineProperty(Testability.prototype.whenStable, "parameters", {get: function() {
          return [[Function]];
        }});
      Object.defineProperty(Testability.prototype.findBindings, "parameters", {get: function() {
          return [[], [assert.type.string], [assert.type.boolean]];
        }});
      TestabilityRegistry = $__export("TestabilityRegistry", (function() {
        var TestabilityRegistry = function TestabilityRegistry() {
          this._applications = MapWrapper.create();
          getTestabilityModule.GetTestability.addToWindow(this);
        };
        return ($traceurRuntime.createClass)(TestabilityRegistry, {
          registerApplication: function(token, testability) {
            MapWrapper.set(this._applications, token, testability);
          },
          findTestabilityInTree: function(elem) {
            if (elem == null) {
              return null;
            }
            if (MapWrapper.contains(this._applications, elem)) {
              return MapWrapper.get(this._applications, elem);
            }
            if (DOM.isShadowRoot(elem)) {
              return this.findTestabilityInTree(DOM.getHost(elem));
            }
            return this.findTestabilityInTree(DOM.parentElement(elem));
          }
        }, {});
      }()));
      Object.defineProperty(TestabilityRegistry, "annotations", {get: function() {
          return [new Injectable()];
        }});
      Object.defineProperty(TestabilityRegistry.prototype.registerApplication, "parameters", {get: function() {
          return [[], [Testability]];
        }});
    }
  };
});
//# sourceMappingURL=testability.es6.map

//# sourceMappingURL=./testability.js.map