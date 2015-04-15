"use strict";
Object.defineProperties(module.exports, {
  CompileStep: {get: function() {
      return CompileStep;
    }},
  __esModule: {value: true}
});
var $__compile_95_element__,
    $__compile_95_control__;
var CompileElement = ($__compile_95_element__ = require("./compile_element"), $__compile_95_element__ && $__compile_95_element__.__esModule && $__compile_95_element__ || {default: $__compile_95_element__}).CompileElement;
var compileControlModule = ($__compile_95_control__ = require("./compile_control"), $__compile_95_control__ && $__compile_95_control__.__esModule && $__compile_95_control__ || {default: $__compile_95_control__});
var CompileStep = function CompileStep() {
  ;
};
($traceurRuntime.createClass)(CompileStep, {process: function(parent, current, control) {}}, {});
Object.defineProperty(CompileStep.prototype.process, "parameters", {get: function() {
    return [[CompileElement], [CompileElement], [compileControlModule.CompileControl]];
  }});
//# sourceMappingURL=compile_step.js.map

//# sourceMappingURL=./compile_step.map