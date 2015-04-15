"use strict";
Object.defineProperties(module.exports, {
  FormBuilder: {get: function() {
      return FormBuilder;
    }},
  __esModule: {value: true}
});
var $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_src_47_facade_47_lang__,
    $__model__;
var $__0 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    StringMapWrapper = $__0.StringMapWrapper,
    ListWrapper = $__0.ListWrapper,
    List = $__0.List;
var isPresent = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}).isPresent;
var modelModule = ($__model__ = require("./model"), $__model__ && $__model__.__esModule && $__model__ || {default: $__model__});
var FormBuilder = function FormBuilder() {
  ;
};
($traceurRuntime.createClass)(FormBuilder, {
  group: function(controlsConfig) {
    var extra = arguments[1] !== (void 0) ? arguments[1] : null;
    var controls = this._reduceControls(controlsConfig);
    var optionals = isPresent(extra) ? StringMapWrapper.get(extra, "optionals") : null;
    var validator = isPresent(extra) ? StringMapWrapper.get(extra, "validator") : null;
    if (isPresent(validator)) {
      return new modelModule.ControlGroup(controls, optionals, validator);
    } else {
      return new modelModule.ControlGroup(controls, optionals);
    }
  },
  control: function(value) {
    var validator = arguments[1] !== (void 0) ? arguments[1] : null;
    if (isPresent(validator)) {
      return new modelModule.Control(value, validator);
    } else {
      return new modelModule.Control(value);
    }
  },
  array: function(controlsConfig) {
    var validator = arguments[1] !== (void 0) ? arguments[1] : null;
    var $__2 = this;
    var controls = ListWrapper.map(controlsConfig, (function(c) {
      return $__2._createControl(c);
    }));
    if (isPresent(validator)) {
      return new modelModule.ControlArray(controls, validator);
    } else {
      return new modelModule.ControlArray(controls);
    }
  },
  _reduceControls: function(controlsConfig) {
    var $__2 = this;
    var controls = {};
    StringMapWrapper.forEach(controlsConfig, (function(controlConfig, controlName) {
      controls[controlName] = $__2._createControl(controlConfig);
    }));
    return controls;
  },
  _createControl: function(controlConfig) {
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
}, {});
Object.defineProperty(FormBuilder.prototype.control, "parameters", {get: function() {
    return [[], [Function]];
  }});
Object.defineProperty(FormBuilder.prototype.array, "parameters", {get: function() {
    return [[List], [Function]];
  }});
//# sourceMappingURL=form_builder.js.map

//# sourceMappingURL=./form_builder.map