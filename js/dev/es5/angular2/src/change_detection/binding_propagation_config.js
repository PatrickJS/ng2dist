System.register(["rtts_assert/rtts_assert", "./interfaces", "./constants"], function($__export) {
  "use strict";
  var assert,
      ChangeDetector,
      CHECK_ONCE,
      DETACHED,
      CHECK_ALWAYS,
      BindingPropagationConfig;
  return {
    setters: [function($__m) {
      assert = $__m.assert;
    }, function($__m) {
      ChangeDetector = $__m.ChangeDetector;
    }, function($__m) {
      CHECK_ONCE = $__m.CHECK_ONCE;
      DETACHED = $__m.DETACHED;
      CHECK_ALWAYS = $__m.CHECK_ALWAYS;
    }],
    execute: function() {
      BindingPropagationConfig = $__export("BindingPropagationConfig", (function() {
        var BindingPropagationConfig = function BindingPropagationConfig(cd) {
          assert.argumentTypes(cd, ChangeDetector);
          this._cd = cd;
        };
        return ($traceurRuntime.createClass)(BindingPropagationConfig, {
          shouldBePropagated: function() {
            this._cd.mode = CHECK_ONCE;
          },
          shouldBePropagatedFromRoot: function() {
            this._cd.markPathToRootAsCheckOnce();
          },
          shouldNotPropagate: function() {
            this._cd.mode = DETACHED;
          },
          shouldAlwaysPropagate: function() {
            this._cd.mode = CHECK_ALWAYS;
          }
        }, {});
      }()));
      Object.defineProperty(BindingPropagationConfig, "parameters", {get: function() {
          return [[ChangeDetector]];
        }});
    }
  };
});
//# sourceMappingURL=binding_propagation_config.es6.map

//# sourceMappingURL=./binding_propagation_config.js.map