"use strict";
Object.defineProperties(module.exports, {
  VALID: {get: function() {
      return VALID;
    }},
  INVALID: {get: function() {
      return INVALID;
    }},
  AbstractControl: {get: function() {
      return AbstractControl;
    }},
  Control: {get: function() {
      return Control;
    }},
  ControlGroup: {get: function() {
      return ControlGroup;
    }},
  ControlArray: {get: function() {
      return ControlArray;
    }},
  __esModule: {value: true}
});
var $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_facade_47_async__,
    $__angular2_47_src_47_facade_47_collection__,
    $__validators__;
var isPresent = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}).isPresent;
var $__1 = ($__angular2_47_src_47_facade_47_async__ = require("angular2/src/facade/async"), $__angular2_47_src_47_facade_47_async__ && $__angular2_47_src_47_facade_47_async__.__esModule && $__angular2_47_src_47_facade_47_async__ || {default: $__angular2_47_src_47_facade_47_async__}),
    Observable = $__1.Observable,
    ObservableController = $__1.ObservableController,
    ObservableWrapper = $__1.ObservableWrapper;
var $__2 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    StringMap = $__2.StringMap,
    StringMapWrapper = $__2.StringMapWrapper,
    ListWrapper = $__2.ListWrapper,
    List = $__2.List;
var Validators = ($__validators__ = require("./validators"), $__validators__ && $__validators__.__esModule && $__validators__ || {default: $__validators__}).Validators;
var VALID = "VALID";
var INVALID = "INVALID";
var AbstractControl = function AbstractControl(validator) {
  this.validator = validator;
  this._pristine = true;
};
($traceurRuntime.createClass)(AbstractControl, {
  get value() {
    return this._value;
  },
  get status() {
    return this._status;
  },
  get valid() {
    return this._status === VALID;
  },
  get errors() {
    return this._errors;
  },
  get pristine() {
    return this._pristine;
  },
  get dirty() {
    return !this.pristine;
  },
  setParent: function(parent) {
    this._parent = parent;
  },
  _updateParent: function() {
    if (isPresent(this._parent)) {
      this._parent._updateValue();
    }
  }
}, {});
Object.defineProperty(AbstractControl, "parameters", {get: function() {
    return [[Function]];
  }});
var Control = function Control(value) {
  var validator = arguments[1] !== (void 0) ? arguments[1] : Validators.nullValidator;
  $traceurRuntime.superConstructor($Control).call(this, validator);
  this._setValueErrorsStatus(value);
  this._valueChangesController = ObservableWrapper.createController();
  this.valueChanges = ObservableWrapper.createObservable(this._valueChangesController);
};
var $Control = Control;
($traceurRuntime.createClass)(Control, {
  updateValue: function(value) {
    this._setValueErrorsStatus(value);
    this._pristine = false;
    ObservableWrapper.callNext(this._valueChangesController, this._value);
    this._updateParent();
  },
  _setValueErrorsStatus: function(value) {
    this._value = value;
    this._errors = this.validator(this);
    this._status = isPresent(this._errors) ? INVALID : VALID;
  }
}, {}, AbstractControl);
Object.defineProperty(Control, "parameters", {get: function() {
    return [[$traceurRuntime.type.any], [Function]];
  }});
Object.defineProperty(Control.prototype.updateValue, "parameters", {get: function() {
    return [[$traceurRuntime.type.any]];
  }});
var ControlGroup = function ControlGroup(controls) {
  var optionals = arguments[1] !== (void 0) ? arguments[1] : null;
  var validator = arguments[2] !== (void 0) ? arguments[2] : Validators.group;
  $traceurRuntime.superConstructor($ControlGroup).call(this, validator);
  this.controls = controls;
  this._optionals = isPresent(optionals) ? optionals : {};
  this._valueChangesController = ObservableWrapper.createController();
  this.valueChanges = ObservableWrapper.createObservable(this._valueChangesController);
  this._setParentForControls();
  this._setValueErrorsStatus();
};
var $ControlGroup = ControlGroup;
($traceurRuntime.createClass)(ControlGroup, {
  include: function(controlName) {
    StringMapWrapper.set(this._optionals, controlName, true);
    this._updateValue();
  },
  exclude: function(controlName) {
    StringMapWrapper.set(this._optionals, controlName, false);
    this._updateValue();
  },
  contains: function(controlName) {
    var c = StringMapWrapper.contains(this.controls, controlName);
    return c && this._included(controlName);
  },
  _setParentForControls: function() {
    var $__4 = this;
    StringMapWrapper.forEach(this.controls, (function(control, name) {
      control.setParent($__4);
    }));
  },
  _updateValue: function() {
    this._setValueErrorsStatus();
    this._pristine = false;
    ObservableWrapper.callNext(this._valueChangesController, this._value);
    this._updateParent();
  },
  _setValueErrorsStatus: function() {
    this._value = this._reduceValue();
    this._errors = this.validator(this);
    this._status = isPresent(this._errors) ? INVALID : VALID;
  },
  _reduceValue: function() {
    return this._reduceChildren({}, (function(acc, control, name) {
      acc[name] = control.value;
      return acc;
    }));
  },
  _reduceChildren: function(initValue, fn) {
    var $__4 = this;
    var res = initValue;
    StringMapWrapper.forEach(this.controls, (function(control, name) {
      if ($__4._included(name)) {
        res = fn(res, control, name);
      }
    }));
    return res;
  },
  _included: function(controlName) {
    var isOptional = StringMapWrapper.contains(this._optionals, controlName);
    return !isOptional || StringMapWrapper.get(this._optionals, controlName);
  }
}, {}, AbstractControl);
Object.defineProperty(ControlGroup, "parameters", {get: function() {
    return [[StringMap], [StringMap], [Function]];
  }});
Object.defineProperty(ControlGroup.prototype.include, "parameters", {get: function() {
    return [[$traceurRuntime.type.string]];
  }});
Object.defineProperty(ControlGroup.prototype.exclude, "parameters", {get: function() {
    return [[$traceurRuntime.type.string]];
  }});
Object.defineProperty(ControlGroup.prototype.contains, "parameters", {get: function() {
    return [[$traceurRuntime.type.string]];
  }});
Object.defineProperty(ControlGroup.prototype._reduceChildren, "parameters", {get: function() {
    return [[$traceurRuntime.type.any], [Function]];
  }});
Object.defineProperty(ControlGroup.prototype._included, "parameters", {get: function() {
    return [[$traceurRuntime.type.string]];
  }});
var ControlArray = function ControlArray(controls) {
  var validator = arguments[1] !== (void 0) ? arguments[1] : Validators.array;
  $traceurRuntime.superConstructor($ControlArray).call(this, validator);
  this.controls = controls;
  this._valueChangesController = ObservableWrapper.createController();
  this.valueChanges = ObservableWrapper.createObservable(this._valueChangesController);
  this._setParentForControls();
  this._setValueErrorsStatus();
};
var $ControlArray = ControlArray;
($traceurRuntime.createClass)(ControlArray, {
  at: function(index) {
    return this.controls[index];
  },
  push: function(control) {
    ListWrapper.push(this.controls, control);
    control.setParent(this);
    this._updateValue();
  },
  insert: function(index, control) {
    ListWrapper.insert(this.controls, index, control);
    control.setParent(this);
    this._updateValue();
  },
  removeAt: function(index) {
    ListWrapper.removeAt(this.controls, index);
    this._updateValue();
  },
  get length() {
    return this.controls.length;
  },
  _updateValue: function() {
    this._setValueErrorsStatus();
    this._pristine = false;
    ObservableWrapper.callNext(this._valueChangesController, this._value);
    this._updateParent();
  },
  _setParentForControls: function() {
    var $__4 = this;
    ListWrapper.forEach(this.controls, (function(control) {
      control.setParent($__4);
    }));
  },
  _setValueErrorsStatus: function() {
    this._value = ListWrapper.map(this.controls, (function(c) {
      return c.value;
    }));
    this._errors = this.validator(this);
    this._status = isPresent(this._errors) ? INVALID : VALID;
  }
}, {}, AbstractControl);
Object.defineProperty(ControlArray, "parameters", {get: function() {
    return [[$traceurRuntime.genericType(List, AbstractControl)], [Function]];
  }});
Object.defineProperty(ControlArray.prototype.at, "parameters", {get: function() {
    return [[$traceurRuntime.type.number]];
  }});
Object.defineProperty(ControlArray.prototype.push, "parameters", {get: function() {
    return [[AbstractControl]];
  }});
Object.defineProperty(ControlArray.prototype.insert, "parameters", {get: function() {
    return [[$traceurRuntime.type.number], [AbstractControl]];
  }});
Object.defineProperty(ControlArray.prototype.removeAt, "parameters", {get: function() {
    return [[$traceurRuntime.type.number]];
  }});
//# sourceMappingURL=model.js.map

//# sourceMappingURL=./model.map