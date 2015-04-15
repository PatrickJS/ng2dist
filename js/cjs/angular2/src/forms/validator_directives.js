"use strict";
Object.defineProperties(module.exports, {
  RequiredValidatorDirective: {get: function() {
      return RequiredValidatorDirective;
    }},
  __esModule: {value: true}
});
var $__angular2_47_angular2__,
    $__angular2_47_forms__;
var Decorator = ($__angular2_47_angular2__ = require("angular2/angular2"), $__angular2_47_angular2__ && $__angular2_47_angular2__.__esModule && $__angular2_47_angular2__ || {default: $__angular2_47_angular2__}).Decorator;
var $__1 = ($__angular2_47_forms__ = require("angular2/forms"), $__angular2_47_forms__ && $__angular2_47_forms__.__esModule && $__angular2_47_forms__ || {default: $__angular2_47_forms__}),
    ControlDirective = $__1.ControlDirective,
    Validators = $__1.Validators;
var RequiredValidatorDirective = function RequiredValidatorDirective(c) {
  c.validator = Validators.compose([c.validator, Validators.required]);
};
($traceurRuntime.createClass)(RequiredValidatorDirective, {}, {});
Object.defineProperty(RequiredValidatorDirective, "annotations", {get: function() {
    return [new Decorator({selector: '[required]'})];
  }});
Object.defineProperty(RequiredValidatorDirective, "parameters", {get: function() {
    return [[ControlDirective]];
  }});
//# sourceMappingURL=validator_directives.js.map

//# sourceMappingURL=./validator_directives.map