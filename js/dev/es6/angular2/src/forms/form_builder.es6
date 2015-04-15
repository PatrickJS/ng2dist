import {assert} from "rtts_assert/rtts_assert";
import {StringMapWrapper,
  ListWrapper,
  List} from 'angular2/src/facade/collection';
import {isPresent} from 'angular2/src/facade/lang';
import * as modelModule from './model';
export class FormBuilder {
  group(controlsConfig, extra = null) {
    var controls = this._reduceControls(controlsConfig);
    var optionals = isPresent(extra) ? StringMapWrapper.get(extra, "optionals") : null;
    var validator = isPresent(extra) ? StringMapWrapper.get(extra, "validator") : null;
    if (isPresent(validator)) {
      return assert.returnType((new modelModule.ControlGroup(controls, optionals, validator)), modelModule.ControlGroup);
    } else {
      return assert.returnType((new modelModule.ControlGroup(controls, optionals)), modelModule.ControlGroup);
    }
  }
  control(value, validator = null) {
    assert.argumentTypes(value, assert.type.any, validator, Function);
    if (isPresent(validator)) {
      return assert.returnType((new modelModule.Control(value, validator)), modelModule.Control);
    } else {
      return assert.returnType((new modelModule.Control(value)), modelModule.Control);
    }
  }
  array(controlsConfig, validator = null) {
    var controls = ListWrapper.map(controlsConfig, (c) => this._createControl(c));
    if (isPresent(validator)) {
      return assert.returnType((new modelModule.ControlArray(controls, validator)), modelModule.ControlArray);
    } else {
      return assert.returnType((new modelModule.ControlArray(controls)), modelModule.ControlArray);
    }
  }
  _reduceControls(controlsConfig) {
    var controls = {};
    StringMapWrapper.forEach(controlsConfig, (controlConfig, controlName) => {
      controls[controlName] = this._createControl(controlConfig);
    });
    return controls;
  }
  _createControl(controlConfig) {
    if (controlConfig instanceof modelModule.Control || controlConfig instanceof modelModule.ControlGroup || controlConfig instanceof modelModule.ControlArray) {
      return controlConfig;
    } else if (ListWrapper.isList(controlConfig)) {
      var value = ListWrapper.get(controlConfig, 0);
      var validator = controlConfig.length > 1 ? controlConfig[1] : null;
      return this.control(value, validator);
    } else {
      return this.control(controlConfig);
    }
  }
}
Object.defineProperty(FormBuilder.prototype.control, "parameters", {get: function() {
    return [[], [Function]];
  }});
Object.defineProperty(FormBuilder.prototype.array, "parameters", {get: function() {
    return [[List], [Function]];
  }});
//# sourceMappingURL=form_builder.js.map

//# sourceMappingURL=./form_builder.map