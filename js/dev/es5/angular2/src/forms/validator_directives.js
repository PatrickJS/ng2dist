System.register(["rtts_assert/rtts_assert", "angular2/angular2", "angular2/forms"], function($__export) {
  "use strict";
  var assert,
      Decorator,
      ControlDirective,
      Validators,
      RequiredValidatorDirective;
  return {
    setters: [function($__m) {
      assert = $__m.assert;
    }, function($__m) {
      Decorator = $__m.Decorator;
    }, function($__m) {
      ControlDirective = $__m.ControlDirective;
      Validators = $__m.Validators;
    }],
    execute: function() {
      RequiredValidatorDirective = $__export("RequiredValidatorDirective", (function() {
        var RequiredValidatorDirective = function RequiredValidatorDirective(c) {
          assert.argumentTypes(c, ControlDirective);
          c.validator = Validators.compose([c.validator, Validators.required]);
        };
        return ($traceurRuntime.createClass)(RequiredValidatorDirective, {}, {});
      }()));
      Object.defineProperty(RequiredValidatorDirective, "annotations", {get: function() {
          return [new Decorator({selector: '[required]'})];
        }});
      Object.defineProperty(RequiredValidatorDirective, "parameters", {get: function() {
          return [[ControlDirective]];
        }});
    }
  };
});
//# sourceMappingURL=validator_directives.es6.map

//# sourceMappingURL=./validator_directives.js.map