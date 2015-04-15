import {assert} from "rtts_assert/rtts_assert";
import {isPresent} from 'angular2/src/facade/lang';
import {Observable,
  ObservableController,
  ObservableWrapper} from 'angular2/src/facade/async';
import {StringMap,
  StringMapWrapper,
  ListWrapper,
  List} from 'angular2/src/facade/collection';
import {Validators} from './validators';
export const VALID = "VALID";
export const INVALID = "INVALID";
export class AbstractControl {
  constructor(validator) {
    assert.argumentTypes(validator, Function);
    this.validator = validator;
    this._pristine = true;
  }
  get value() {
    return assert.returnType((this._value), assert.type.any);
  }
  get status() {
    return assert.returnType((this._status), assert.type.string);
  }
  get valid() {
    return assert.returnType((this._status === VALID), assert.type.boolean);
  }
  get errors() {
    return assert.returnType((this._errors), StringMap);
  }
  get pristine() {
    return assert.returnType((this._pristine), assert.type.boolean);
  }
  get dirty() {
    return assert.returnType((!this.pristine), assert.type.boolean);
  }
  setParent(parent) {
    this._parent = parent;
  }
  _updateParent() {
    if (isPresent(this._parent)) {
      this._parent._updateValue();
    }
  }
}
Object.defineProperty(AbstractControl, "parameters", {get: function() {
    return [[Function]];
  }});
export class Control extends AbstractControl {
  constructor(value, validator = Validators.nullValidator) {
    assert.argumentTypes(value, assert.type.any, validator, Function);
    super(validator);
    this._setValueErrorsStatus(value);
    this._valueChangesController = ObservableWrapper.createController();
    this.valueChanges = ObservableWrapper.createObservable(this._valueChangesController);
  }
  updateValue(value) {
    assert.argumentTypes(value, assert.type.any);
    this._setValueErrorsStatus(value);
    this._pristine = false;
    ObservableWrapper.callNext(this._valueChangesController, this._value);
    this._updateParent();
  }
  _setValueErrorsStatus(value) {
    this._value = value;
    this._errors = this.validator(this);
    this._status = isPresent(this._errors) ? INVALID : VALID;
  }
}
Object.defineProperty(Control, "parameters", {get: function() {
    return [[assert.type.any], [Function]];
  }});
Object.defineProperty(Control.prototype.updateValue, "parameters", {get: function() {
    return [[assert.type.any]];
  }});
export class ControlGroup extends AbstractControl {
  constructor(controls, optionals = null, validator = Validators.group) {
    assert.argumentTypes(controls, StringMap, optionals, StringMap, validator, Function);
    super(validator);
    this.controls = controls;
    this._optionals = isPresent(optionals) ? optionals : {};
    this._valueChangesController = ObservableWrapper.createController();
    this.valueChanges = ObservableWrapper.createObservable(this._valueChangesController);
    this._setParentForControls();
    this._setValueErrorsStatus();
  }
  include(controlName) {
    assert.argumentTypes(controlName, assert.type.string);
    StringMapWrapper.set(this._optionals, controlName, true);
    this._updateValue();
  }
  exclude(controlName) {
    assert.argumentTypes(controlName, assert.type.string);
    StringMapWrapper.set(this._optionals, controlName, false);
    this._updateValue();
  }
  contains(controlName) {
    assert.argumentTypes(controlName, assert.type.string);
    var c = StringMapWrapper.contains(this.controls, controlName);
    return assert.returnType((c && this._included(controlName)), assert.type.boolean);
  }
  _setParentForControls() {
    StringMapWrapper.forEach(this.controls, (control, name) => {
      control.setParent(this);
    });
  }
  _updateValue() {
    this._setValueErrorsStatus();
    this._pristine = false;
    ObservableWrapper.callNext(this._valueChangesController, this._value);
    this._updateParent();
  }
  _setValueErrorsStatus() {
    this._value = this._reduceValue();
    this._errors = this.validator(this);
    this._status = isPresent(this._errors) ? INVALID : VALID;
  }
  _reduceValue() {
    return this._reduceChildren({}, (acc, control, name) => {
      acc[name] = control.value;
      return acc;
    });
  }
  _reduceChildren(initValue, fn) {
    assert.argumentTypes(initValue, assert.type.any, fn, Function);
    var res = initValue;
    StringMapWrapper.forEach(this.controls, (control, name) => {
      if (this._included(name)) {
        res = fn(res, control, name);
      }
    });
    return res;
  }
  _included(controlName) {
    assert.argumentTypes(controlName, assert.type.string);
    var isOptional = StringMapWrapper.contains(this._optionals, controlName);
    return assert.returnType((!isOptional || StringMapWrapper.get(this._optionals, controlName)), assert.type.boolean);
  }
}
Object.defineProperty(ControlGroup, "parameters", {get: function() {
    return [[StringMap], [StringMap], [Function]];
  }});
Object.defineProperty(ControlGroup.prototype.include, "parameters", {get: function() {
    return [[assert.type.string]];
  }});
Object.defineProperty(ControlGroup.prototype.exclude, "parameters", {get: function() {
    return [[assert.type.string]];
  }});
Object.defineProperty(ControlGroup.prototype.contains, "parameters", {get: function() {
    return [[assert.type.string]];
  }});
Object.defineProperty(ControlGroup.prototype._reduceChildren, "parameters", {get: function() {
    return [[assert.type.any], [Function]];
  }});
Object.defineProperty(ControlGroup.prototype._included, "parameters", {get: function() {
    return [[assert.type.string]];
  }});
export class ControlArray extends AbstractControl {
  constructor(controls, validator = Validators.array) {
    assert.argumentTypes(controls, assert.genericType(List, AbstractControl), validator, Function);
    super(validator);
    this.controls = controls;
    this._valueChangesController = ObservableWrapper.createController();
    this.valueChanges = ObservableWrapper.createObservable(this._valueChangesController);
    this._setParentForControls();
    this._setValueErrorsStatus();
  }
  at(index) {
    assert.argumentTypes(index, assert.type.number);
    return assert.returnType((this.controls[index]), AbstractControl);
  }
  push(control) {
    assert.argumentTypes(control, AbstractControl);
    ListWrapper.push(this.controls, control);
    control.setParent(this);
    this._updateValue();
  }
  insert(index, control) {
    assert.argumentTypes(index, assert.type.number, control, AbstractControl);
    ListWrapper.insert(this.controls, index, control);
    control.setParent(this);
    this._updateValue();
  }
  removeAt(index) {
    assert.argumentTypes(index, assert.type.number);
    ListWrapper.removeAt(this.controls, index);
    this._updateValue();
  }
  get length() {
    return assert.returnType((this.controls.length), assert.type.number);
  }
  _updateValue() {
    this._setValueErrorsStatus();
    this._pristine = false;
    ObservableWrapper.callNext(this._valueChangesController, this._value);
    this._updateParent();
  }
  _setParentForControls() {
    ListWrapper.forEach(this.controls, (control) => {
      control.setParent(this);
    });
  }
  _setValueErrorsStatus() {
    this._value = ListWrapper.map(this.controls, (c) => c.value);
    this._errors = this.validator(this);
    this._status = isPresent(this._errors) ? INVALID : VALID;
  }
}
Object.defineProperty(ControlArray, "parameters", {get: function() {
    return [[assert.genericType(List, AbstractControl)], [Function]];
  }});
Object.defineProperty(ControlArray.prototype.at, "parameters", {get: function() {
    return [[assert.type.number]];
  }});
Object.defineProperty(ControlArray.prototype.push, "parameters", {get: function() {
    return [[AbstractControl]];
  }});
Object.defineProperty(ControlArray.prototype.insert, "parameters", {get: function() {
    return [[assert.type.number], [AbstractControl]];
  }});
Object.defineProperty(ControlArray.prototype.removeAt, "parameters", {get: function() {
    return [[assert.type.number]];
  }});
//# sourceMappingURL=model.js.map

//# sourceMappingURL=./model.map