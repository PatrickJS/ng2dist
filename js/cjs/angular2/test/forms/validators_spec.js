'use strict'; var parse5Adapter = require('angular2/src/dom/parse5_adapter'); parse5Adapter.Parse5DomAdapter.makeCurrent();
Object.defineProperties(module.exports, {
  main: {get: function() {
      return main;
    }},
  __esModule: {value: true}
});
var $__angular2_47_test_95_lib__,
    $__angular2_47_forms__;
var $__0 = ($__angular2_47_test_95_lib__ = require("angular2/test_lib"), $__angular2_47_test_95_lib__ && $__angular2_47_test_95_lib__.__esModule && $__angular2_47_test_95_lib__ || {default: $__angular2_47_test_95_lib__}),
    ddescribe = $__0.ddescribe,
    describe = $__0.describe,
    it = $__0.it,
    iit = $__0.iit,
    xit = $__0.xit,
    expect = $__0.expect,
    beforeEach = $__0.beforeEach,
    afterEach = $__0.afterEach,
    el = $__0.el;
var $__1 = ($__angular2_47_forms__ = require("angular2/forms"), $__angular2_47_forms__ && $__angular2_47_forms__.__esModule && $__angular2_47_forms__ || {default: $__angular2_47_forms__}),
    ControlGroup = $__1.ControlGroup,
    Control = $__1.Control,
    Validators = $__1.Validators;
function main() {
  function validator(key, error) {
    return function(c) {
      var r = {};
      r[key] = error;
      return r;
    };
  }
  Object.defineProperty(validator, "parameters", {get: function() {
      return [[$traceurRuntime.type.string], [$traceurRuntime.type.any]];
    }});
  describe("Validators", (function() {
    describe("required", (function() {
      it("should error on an empty string", (function() {
        expect(Validators.required(new Control(""))).toEqual({"required": true});
      }));
      it("should error on null", (function() {
        expect(Validators.required(new Control(null))).toEqual({"required": true});
      }));
      it("should not error on a non-empty string", (function() {
        expect(Validators.required(new Control("not empty"))).toEqual(null);
      }));
    }));
    describe("compose", (function() {
      it("should collect errors from all the validators", (function() {
        var c = Validators.compose([validator("a", true), validator("b", true)]);
        expect(c(new Control(""))).toEqual({
          "a": true,
          "b": true
        });
      }));
      it("should run validators left to right", (function() {
        var c = Validators.compose([validator("a", 1), validator("a", 2)]);
        expect(c(new Control(""))).toEqual({"a": 2});
      }));
      it("should return null when no errors", (function() {
        var c = Validators.compose([Validators.nullValidator, Validators.nullValidator]);
        expect(c(new Control(""))).toEqual(null);
      }));
    }));
    describe("controlGroupValidator", (function() {
      it("should collect errors from the child controls", (function() {
        var one = new Control("one", validator("a", true));
        var two = new Control("one", validator("b", true));
        var g = new ControlGroup({
          "one": one,
          "two": two
        });
        expect(Validators.group(g)).toEqual({
          "a": [one],
          "b": [two]
        });
      }));
      it("should not include controls that have no errors", (function() {
        var one = new Control("one", validator("a", true));
        var two = new Control("two");
        var g = new ControlGroup({
          "one": one,
          "two": two
        });
        expect(Validators.group(g)).toEqual({"a": [one]});
      }));
      it("should return null when no errors", (function() {
        var g = new ControlGroup({"one": new Control("one")});
        expect(Validators.group(g)).toEqual(null);
      }));
    }));
  }));
}
//# sourceMappingURL=validators_spec.js.map

//# sourceMappingURL=./validators_spec.map
 main();