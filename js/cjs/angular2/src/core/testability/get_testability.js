"use strict";
Object.defineProperties(module.exports, {
  GetTestability: {get: function() {
      return GetTestability;
    }},
  __esModule: {value: true}
});
var $__angular2_47_src_47_core_47_testability_47_testability__;
var $__0 = ($__angular2_47_src_47_core_47_testability_47_testability__ = require("angular2/src/core/testability/testability"), $__angular2_47_src_47_core_47_testability_47_testability__ && $__angular2_47_src_47_core_47_testability_47_testability__.__esModule && $__angular2_47_src_47_core_47_testability_47_testability__ || {default: $__angular2_47_src_47_core_47_testability_47_testability__}),
    TestabilityRegistry = $__0.TestabilityRegistry,
    Testability = $__0.Testability;
var PublicTestability = function PublicTestability(testability) {
  this._testability = testability;
};
($traceurRuntime.createClass)(PublicTestability, {
  whenStable: function(callback) {
    this._testability.whenStable(callback);
  },
  findBindings: function(using, binding, exactMatch) {
    return this._testability.findBindings(using, binding, exactMatch);
  }
}, {});
Object.defineProperty(PublicTestability, "parameters", {get: function() {
    return [[Testability]];
  }});
Object.defineProperty(PublicTestability.prototype.whenStable, "parameters", {get: function() {
    return [[Function]];
  }});
Object.defineProperty(PublicTestability.prototype.findBindings, "parameters", {get: function() {
    return [[], [$traceurRuntime.type.string], [$traceurRuntime.type.boolean]];
  }});
var GetTestability = function GetTestability() {
  ;
};
($traceurRuntime.createClass)(GetTestability, {}, {addToWindow: function(registry) {
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
Object.defineProperty(GetTestability.addToWindow, "parameters", {get: function() {
    return [[TestabilityRegistry]];
  }});
//# sourceMappingURL=get_testability.es6.map

//# sourceMappingURL=./get_testability.map