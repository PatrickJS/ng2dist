"use strict";
Object.defineProperties(module.exports, {
  DefaultValueAccessor: {get: function() {
      return DefaultValueAccessor;
    }},
  CheckboxControlValueAccessor: {get: function() {
      return CheckboxControlValueAccessor;
    }},
  ControlDirective: {get: function() {
      return ControlDirective;
    }},
  ControlGroupDirective: {get: function() {
      return ControlGroupDirective;
    }},
  FormDirectives: {get: function() {
      return FormDirectives;
    }},
  __esModule: {value: true}
});
var $__angular2_47_angular2__,
    $__angular2_47_di__,
    $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_facade_47_collection__,
    $__model__,
    $__validators__;
var $__0 = ($__angular2_47_angular2__ = require("angular2/angular2"), $__angular2_47_angular2__ && $__angular2_47_angular2__.__esModule && $__angular2_47_angular2__ || {default: $__angular2_47_angular2__}),
    View = $__0.View,
    Component = $__0.Component,
    Decorator = $__0.Decorator,
    Ancestor = $__0.Ancestor,
    onChange = $__0.onChange,
    PropertySetter = $__0.PropertySetter;
var Optional = ($__angular2_47_di__ = require("angular2/di"), $__angular2_47_di__ && $__angular2_47_di__.__esModule && $__angular2_47_di__ || {default: $__angular2_47_di__}).Optional;
var $__2 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    isBlank = $__2.isBlank,
    isPresent = $__2.isPresent,
    isString = $__2.isString,
    CONST = $__2.CONST;
var $__3 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    StringMapWrapper = $__3.StringMapWrapper,
    ListWrapper = $__3.ListWrapper;
var $__4 = ($__model__ = require("./model"), $__model__ && $__model__.__esModule && $__model__ || {default: $__model__}),
    ControlGroup = $__4.ControlGroup,
    Control = $__4.Control;
var Validators = ($__validators__ = require("./validators"), $__validators__ && $__validators__.__esModule && $__validators__ || {default: $__validators__}).Validators;
var DefaultValueAccessor = function DefaultValueAccessor(setValueProperty) {
  this._setValueProperty = setValueProperty;
  this.onChange = (function(_) {});
};
($traceurRuntime.createClass)(DefaultValueAccessor, {writeValue: function(value) {
    this._setValueProperty(value);
  }}, {});
Object.defineProperty(DefaultValueAccessor, "annotations", {get: function() {
    return [new Decorator({
      selector: '[control]',
      hostListeners: {
        'change': 'onChange($event.target.value)',
        'input': 'onChange($event.target.value)'
      }
    })];
  }});
Object.defineProperty(DefaultValueAccessor, "parameters", {get: function() {
    return [[Function, new PropertySetter('value')]];
  }});
var CheckboxControlValueAccessor = function CheckboxControlValueAccessor(cd, setCheckedProperty) {
  this._setCheckedProperty = setCheckedProperty;
  this.onChange = (function(_) {});
  cd.valueAccessor = this;
};
($traceurRuntime.createClass)(CheckboxControlValueAccessor, {writeValue: function(value) {
    this._setCheckedProperty(value);
  }}, {});
Object.defineProperty(CheckboxControlValueAccessor, "annotations", {get: function() {
    return [new Decorator({
      selector: 'input[type=checkbox][control]',
      hostListeners: {'change': 'onChange($event.target.checked)'}
    })];
  }});
Object.defineProperty(CheckboxControlValueAccessor, "parameters", {get: function() {
    return [[ControlDirective], [Function, new PropertySetter('checked')]];
  }});
var ControlDirective = function ControlDirective(groupDirective, valueAccessor) {
  this._groupDirective = groupDirective;
  this.controlOrName = null;
  this.valueAccessor = valueAccessor;
  this.validator = Validators.nullValidator;
};
($traceurRuntime.createClass)(ControlDirective, {
  onChange: function(_) {
    this._initialize();
  },
  _initialize: function() {
    if (isPresent(this._groupDirective)) {
      this._groupDirective.addDirective(this);
    }
    var c = this._control();
    c.validator = Validators.compose([c.validator, this.validator]);
    this._updateDomValue();
    this._setUpUpdateControlValue();
  },
  _updateDomValue: function() {
    this.valueAccessor.writeValue(this._control().value);
  },
  _setUpUpdateControlValue: function() {
    var $__6 = this;
    this.valueAccessor.onChange = (function(newValue) {
      return $__6._control().updateValue(newValue);
    });
  },
  _control: function() {
    if (isString(this.controlOrName)) {
      return this._groupDirective.findControl(this.controlOrName);
    } else {
      return this.controlOrName;
    }
  }
}, {});
Object.defineProperty(ControlDirective, "annotations", {get: function() {
    return [new Decorator({
      lifecycle: [onChange],
      selector: '[control]',
      properties: {'controlOrName': 'control'}
    })];
  }});
Object.defineProperty(ControlDirective, "parameters", {get: function() {
    return [[ControlGroupDirective, new Optional(), new Ancestor()], [DefaultValueAccessor]];
  }});
var ControlGroupDirective = function ControlGroupDirective(groupDirective) {
  this._groupDirective = groupDirective;
  this._directives = ListWrapper.create();
};
var $ControlGroupDirective = ControlGroupDirective;
($traceurRuntime.createClass)(ControlGroupDirective, {
  set controlGroup(controlGroup) {
    if (isString(controlGroup)) {
      this._controlGroupName = controlGroup;
    } else {
      this._controlGroup = controlGroup;
    }
    this._updateDomValue();
  },
  _updateDomValue: function() {
    ListWrapper.forEach(this._directives, (function(cd) {
      return cd._updateDomValue();
    }));
  },
  addDirective: function(c) {
    ListWrapper.push(this._directives, c);
  },
  findControl: function(name) {
    return this._getControlGroup().controls[name];
  },
  _getControlGroup: function() {
    if (isPresent(this._controlGroupName)) {
      return this._groupDirective.findControl(this._controlGroupName);
    } else {
      return this._controlGroup;
    }
  }
}, {});
Object.defineProperty(ControlGroupDirective, "annotations", {get: function() {
    return [new Decorator({
      selector: '[control-group]',
      properties: {'controlGroup': 'control-group'}
    })];
  }});
Object.defineProperty(ControlGroupDirective, "parameters", {get: function() {
    return [[ControlGroupDirective, new Optional(), new Ancestor()]];
  }});
Object.defineProperty(ControlGroupDirective.prototype.addDirective, "parameters", {get: function() {
    return [[ControlDirective]];
  }});
Object.defineProperty(ControlGroupDirective.prototype.findControl, "parameters", {get: function() {
    return [[$traceurRuntime.type.string]];
  }});
var FormDirectives = [ControlGroupDirective, ControlDirective, CheckboxControlValueAccessor, DefaultValueAccessor];
//# sourceMappingURL=directives.js.map

//# sourceMappingURL=./directives.map