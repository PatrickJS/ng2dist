"use strict";
Object.defineProperties(module.exports, {
  CompileControl: {get: function() {
      return CompileControl;
    }},
  __esModule: {value: true}
});
var $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_facade_47_collection__,
    $__compile_95_element__,
    $__compile_95_step__;
var isBlank = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}).isBlank;
var $__1 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    List = $__1.List,
    ListWrapper = $__1.ListWrapper;
var CompileElement = ($__compile_95_element__ = require("./compile_element"), $__compile_95_element__ && $__compile_95_element__.__esModule && $__compile_95_element__ || {default: $__compile_95_element__}).CompileElement;
var CompileStep = ($__compile_95_step__ = require("./compile_step"), $__compile_95_step__ && $__compile_95_step__.__esModule && $__compile_95_step__ || {default: $__compile_95_step__}).CompileStep;
var CompileControl = function CompileControl(steps) {
  this._steps = steps;
  this._currentStepIndex = 0;
  this._parent = null;
  this._results = null;
  this._additionalChildren = null;
};
($traceurRuntime.createClass)(CompileControl, {
  internalProcess: function(results, startStepIndex, parent, current) {
    this._results = results;
    var previousStepIndex = this._currentStepIndex;
    var previousParent = this._parent;
    this._ignoreCurrentElement = false;
    for (var i = startStepIndex; i < this._steps.length && !this._ignoreCurrentElement; i++) {
      var step = this._steps[i];
      this._parent = parent;
      this._currentStepIndex = i;
      step.process(parent, current, this);
      parent = this._parent;
    }
    if (!this._ignoreCurrentElement) {
      ListWrapper.push(results, current);
    }
    this._currentStepIndex = previousStepIndex;
    this._parent = previousParent;
    var localAdditionalChildren = this._additionalChildren;
    this._additionalChildren = null;
    return localAdditionalChildren;
  },
  addParent: function(newElement) {
    this.internalProcess(this._results, this._currentStepIndex + 1, this._parent, newElement);
    this._parent = newElement;
  },
  addChild: function(element) {
    if (isBlank(this._additionalChildren)) {
      this._additionalChildren = ListWrapper.create();
    }
    ListWrapper.push(this._additionalChildren, element);
  },
  ignoreCurrentElement: function() {
    this._ignoreCurrentElement = true;
  }
}, {});
Object.defineProperty(CompileControl.prototype.internalProcess, "parameters", {get: function() {
    return [[], [], [CompileElement], [CompileElement]];
  }});
Object.defineProperty(CompileControl.prototype.addParent, "parameters", {get: function() {
    return [[CompileElement]];
  }});
Object.defineProperty(CompileControl.prototype.addChild, "parameters", {get: function() {
    return [[CompileElement]];
  }});
//# sourceMappingURL=compile_control.js.map

//# sourceMappingURL=./compile_control.map