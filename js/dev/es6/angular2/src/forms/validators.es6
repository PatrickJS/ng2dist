import {assert} from "rtts_assert/rtts_assert";
import {isBlank,
  isPresent} from 'angular2/src/facade/lang';
import {List,
  ListWrapper,
  StringMapWrapper} from 'angular2/src/facade/collection';
import * as modelModule from './model';
export class Validators {
  static required(c) {
    assert.argumentTypes(c, modelModule.Control);
    return isBlank(c.value) || c.value == "" ? {"required": true} : null;
  }
  static nullValidator(c) {
    assert.argumentTypes(c, assert.type.any);
    return null;
  }
  static compose(validators) {
    assert.argumentTypes(validators, assert.genericType(List, Function));
    return assert.returnType((function(c) {
      assert.argumentTypes(c, modelModule.Control);
      var res = ListWrapper.reduce(validators, (res, validator) => {
        var errors = validator(c);
        return isPresent(errors) ? StringMapWrapper.merge(res, errors) : res;
      }, {});
      return StringMapWrapper.isEmpty(res) ? null : res;
    }), Function);
  }
  static group(c) {
    assert.argumentTypes(c, modelModule.ControlGroup);
    var res = {};
    StringMapWrapper.forEach(c.controls, (control, name) => {
      if (c.contains(name) && isPresent(control.errors)) {
        Validators._mergeErrors(control, res);
      }
    });
    return StringMapWrapper.isEmpty(res) ? null : res;
  }
  static array(c) {
    assert.argumentTypes(c, modelModule.ControlArray);
    var res = {};
    ListWrapper.forEach(c.controls, (control) => {
      if (isPresent(control.errors)) {
        Validators._mergeErrors(control, res);
      }
    });
    return StringMapWrapper.isEmpty(res) ? null : res;
  }
  static _mergeErrors(control, res) {
    StringMapWrapper.forEach(control.errors, (value, error) => {
      if (!StringMapWrapper.contains(res, error)) {
        res[error] = [];
      }
      ListWrapper.push(res[error], control);
    });
  }
}
Object.defineProperty(Validators.required, "parameters", {get: function() {
    return [[modelModule.Control]];
  }});
Object.defineProperty(Validators.nullValidator, "parameters", {get: function() {
    return [[assert.type.any]];
  }});
Object.defineProperty(Validators.compose, "parameters", {get: function() {
    return [[assert.genericType(List, Function)]];
  }});
Object.defineProperty(Validators.group, "parameters", {get: function() {
    return [[modelModule.ControlGroup]];
  }});
Object.defineProperty(Validators.array, "parameters", {get: function() {
    return [[modelModule.ControlArray]];
  }});
//# sourceMappingURL=validators.js.map

//# sourceMappingURL=./validators.map