System.register(["angular2/src/core/testability/testability"], function($__export) {
  "use strict";
  var TestabilityRegistry,
      Testability,
      PublicTestability,
      GetTestability;
  return {
    setters: [function($__m) {
      TestabilityRegistry = $__m.TestabilityRegistry;
      Testability = $__m.Testability;
    }],
    execute: function() {
      PublicTestability = (function() {
        var PublicTestability = function PublicTestability(testability) {
          this._testability = testability;
        };
        return ($traceurRuntime.createClass)(PublicTestability, {
          whenStable: function(callback) {
            this._testability.whenStable(callback);
          },
          findBindings: function(using, binding, exactMatch) {
            return this._testability.findBindings(using, binding, exactMatch);
          }
        }, {});
      }());
      Object.defineProperty(PublicTestability, "parameters", {get: function() {
          return [[Testability]];
        }});
      Object.defineProperty(PublicTestability.prototype.whenStable, "parameters", {get: function() {
          return [[Function]];
        }});
      Object.defineProperty(PublicTestability.prototype.findBindings, "parameters", {get: function() {
          return [[], [assert.type.string], [assert.type.boolean]];
        }});
      GetTestability = $__export("GetTestability", (function() {
        var GetTestability = function GetTestability() {
          ;
        };
        return ($traceurRuntime.createClass)(GetTestability, {}, {addToWindow: function(registry) {
            if (!window.angular2) {
              window.angular2 = {};
            }
            window.angular2.getTestability = function(elem) {
              var testability = registry.findTestabilityInTree(elem);
              if (testability == null) {
                throw new Error('Could not find testability for element.');
              }
              return new PublicTestability(testability);
            };
            window.angular2.resumeBootstrap = function() {};
          }});
      }()));
      Object.defineProperty(GetTestability.addToWindow, "parameters", {get: function() {
          return [[TestabilityRegistry]];
        }});
    }
  };
});
//# sourceMappingURL=get_testability.es6.map

//# sourceMappingURL=./get_testability.js.map