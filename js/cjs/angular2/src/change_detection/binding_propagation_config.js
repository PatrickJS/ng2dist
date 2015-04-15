"use strict";
Object.defineProperties(module.exports, {
  BindingPropagationConfig: {get: function() {
      return BindingPropagationConfig;
    }},
  __esModule: {value: true}
});
var $__interfaces__,
    $__constants__;
var ChangeDetector = ($__interfaces__ = require("./interfaces"), $__interfaces__ && $__interfaces__.__esModule && $__interfaces__ || {default: $__interfaces__}).ChangeDetector;
var $__1 = ($__constants__ = require("./constants"), $__constants__ && $__constants__.__esModule && $__constants__ || {default: $__constants__}),
    CHECK_ONCE = $__1.CHECK_ONCE,
    DETACHED = $__1.DETACHED,
    CHECK_ALWAYS = $__1.CHECK_ALWAYS;
var BindingPropagationConfig = function BindingPropagationConfig(cd) {
  this._cd = cd;
};
($traceurRuntime.createClass)(BindingPropagationConfig, {
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
Object.defineProperty(BindingPropagationConfig, "parameters", {get: function() {
    return [[ChangeDetector]];
  }});
//# sourceMappingURL=binding_propagation_config.js.map

//# sourceMappingURL=./binding_propagation_config.map