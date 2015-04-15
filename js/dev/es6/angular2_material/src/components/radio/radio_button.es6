import {assert} from "rtts_assert/rtts_assert";
import {Component,
  View,
  Parent,
  Ancestor,
  Attribute,
  PropertySetter,
  EventEmitter} from 'angular2/angular2';
import {Optional} from 'angular2/src/di/annotations';
import {MdRadioDispatcher} from 'angular2_material/src/components/radio/radio_dispatcher';
import {MdTheme} from 'angular2_material/src/core/theme';
import {onChange} from 'angular2/src/core/annotations/annotations';
import {isPresent,
  StringWrapper} from 'angular2/src/facade/lang';
import {Math} from 'angular2/src/facade/math';
import {ListWrapper} from 'angular2/src/facade/collection';
var _uniqueIdCounter = assert.type(0, assert.type.number);
export class MdRadioButton {
  constructor(radioGroup, id, tabindex, idSetter, tabindexSetter, roleSetter, ariaCheckedSetter, ariaDisabledSetter, radioDispatcher) {
    assert.argumentTypes(radioGroup, MdRadioGroup, id, assert.type.string, tabindex, assert.type.string, idSetter, Function, tabindexSetter, Function, roleSetter, Function, ariaCheckedSetter, Function, ariaDisabledSetter, Function, radioDispatcher, MdRadioDispatcher);
    this.radioGroup = radioGroup;
    this.radioDispatcher = radioDispatcher;
    this.ariaCheckedSetter = ariaCheckedSetter;
    this.ariaDisabledSetter = ariaDisabledSetter;
    this.value = null;
    roleSetter('radio');
    this.checked = false;
    this.id = isPresent(id) ? id : `md-radio-${_uniqueIdCounter++}`;
    idSetter(this.id);
    radioDispatcher.listen((name) => {
      if (name == this.name) {
        this.checked = false;
      }
    });
    if (isPresent(radioGroup)) {
      this.name = radioGroup.getName();
      this.radioGroup.register(this);
    }
    if (!isPresent(radioGroup)) {
      tabindexSetter(isPresent(tabindex) ? tabindex : '0');
    }
  }
  onChange(_) {
    if (isPresent(this.radioGroup)) {
      this.name = this.radioGroup.getName();
    }
  }
  isDisabled() {
    return assert.returnType((this.disabled || (isPresent(this.disabled) && StringWrapper.equals(this.disabled, '')) || (isPresent(this.radioGroup) && this.radioGroup.disabled)), assert.type.boolean);
  }
  get checked() {
    return this.checked_;
  }
  set checked(value) {
    this.checked_ = value;
    this.ariaCheckedSetter(value);
  }
  get disabled() {
    return this.disabled_;
  }
  set disabled(value) {
    this.disabled_ = isPresent(value) && value !== false;
    this.ariaDisabledSetter(this.disabled_);
  }
  select(event) {
    assert.argumentTypes(event, Event);
    if (this.isDisabled()) {
      event.stopPropagation();
      return ;
    }
    this.radioDispatcher.notify(this.name);
    this.checked = true;
    if (this.radioGroup) {
      this.radioGroup.updateValue(this.value, this.id);
    }
  }
  onKeydown(event) {
    assert.argumentTypes(event, KeyboardEvent);
    if (event.keyCode == KeyCodes.SPACE) {
      event.preventDefault();
      this.select(event);
    }
  }
}
Object.defineProperty(MdRadioButton, "annotations", {get: function() {
    return [new Component({
      selector: 'md-radio-button',
      lifecycle: [onChange],
      properties: {
        'id': 'id',
        'name': 'name',
        'value': 'value',
        'checked': 'checked',
        'disabled': 'disabled'
      },
      hostListeners: {'keydown': 'onKeydown($event)'}
    }), new View({
      templateUrl: 'angular2_material/src/components/radio/radio_button.html',
      directives: []
    })];
  }});
Object.defineProperty(MdRadioButton, "parameters", {get: function() {
    return [[MdRadioGroup, new Optional(), new Parent()], [assert.type.string, new Attribute('id')], [assert.type.string, new Attribute('tabindex')], [Function, new PropertySetter('id')], [Function, new PropertySetter('tabindex')], [Function, new PropertySetter('attr.role')], [Function, new PropertySetter('attr.aria-checked')], [Function, new PropertySetter('attr.aria-disabled')], [MdRadioDispatcher]];
  }});
Object.defineProperty(MdRadioButton.prototype.select, "parameters", {get: function() {
    return [[Event]];
  }});
Object.defineProperty(MdRadioButton.prototype.onKeydown, "parameters", {get: function() {
    return [[KeyboardEvent]];
  }});
export class MdRadioGroup {
  constructor(tabindex, disabled, tabindexSetter, roleSetter, ariaDisabledSetter, ariaActiveDescendantSetter, changeEmitter, radioDispatcher) {
    assert.argumentTypes(tabindex, assert.type.string, disabled, assert.type.string, tabindexSetter, Function, roleSetter, Function, ariaDisabledSetter, Function, ariaActiveDescendantSetter, Function, changeEmitter, Function, radioDispatcher, MdRadioDispatcher);
    this.name_ = `md-radio-group-${_uniqueIdCounter++}`;
    this.radios_ = [];
    this.changeEmitter = changeEmitter;
    this.ariaActiveDescendantSetter = ariaActiveDescendantSetter;
    this.ariaDisabledSetter = ariaDisabledSetter;
    this.radioDispatcher = radioDispatcher;
    this.selectedRadioId = '';
    this.disabled_ = false;
    roleSetter('radiogroup');
    this.disabled = isPresent(disabled);
    tabindexSetter(isPresent(tabindex) ? tabindex : '0');
  }
  getName() {
    return assert.returnType((this.name_), assert.type.string);
  }
  get disabled() {
    return this.disabled_;
  }
  set disabled(value) {
    this.disabled_ = isPresent(value) && value !== false;
    this.ariaDisabledSetter(this.disabled_);
  }
  onChange(_) {
    this.disabled = isPresent(this.disabled) && this.disabled !== false;
    if (isPresent(this.value) && this.value != '') {
      this.radioDispatcher.notify(this.name_);
      ListWrapper.forEach(this.radios_, (radio) => {
        if (radio.value == this.value) {
          radio.checked = true;
          this.selectedRadioId = radio.id;
          this.ariaActiveDescendantSetter(radio.id);
        }
      });
    }
  }
  updateValue(value, id) {
    assert.argumentTypes(value, assert.type.any, id, assert.type.string);
    this.value = value;
    this.selectedRadioId = id;
    this.ariaActiveDescendantSetter(id);
    this.changeEmitter();
  }
  register(radio) {
    assert.argumentTypes(radio, MdRadioButton);
    ListWrapper.push(this.radios_, radio);
  }
  onKeydown(event) {
    assert.argumentTypes(event, KeyboardEvent);
    if (this.disabled) {
      return ;
    }
    switch (event.keyCode) {
      case 38:
        this.stepSelectedRadio(-1);
        event.preventDefault();
        break;
      case 40:
        this.stepSelectedRadio(1);
        event.preventDefault();
        break;
    }
  }
  getSelectedRadioIndex() {
    for (var i = 0; i < this.radios_.length; i++) {
      if (this.radios_[i].id == this.selectedRadioId) {
        return assert.returnType((i), assert.type.number);
      }
    }
    return assert.returnType((-1), assert.type.number);
  }
  stepSelectedRadio(step) {
    var index = this.getSelectedRadioIndex() + step;
    if (index < 0 || index >= this.radios_.length) {
      return ;
    }
    var radio = this.radios_[index];
    if (radio.disabled) {
      this.stepSelectedRadio(step + (step < 0 ? -1 : 1));
      return ;
    }
    this.radioDispatcher.notify(this.name_);
    radio.checked = true;
    this.value = radio.value;
    this.selectedRadioId = radio.id;
    this.ariaActiveDescendantSetter(radio.id);
  }
}
Object.defineProperty(MdRadioGroup, "annotations", {get: function() {
    return [new Component({
      selector: 'md-radio-group',
      lifecycle: [onChange],
      properties: {
        'disabled': 'disabled',
        'value': 'value'
      },
      hostListeners: {'keydown': 'onKeydown($event)'}
    }), new View({templateUrl: 'angular2_material/src/components/radio/radio_group.html'})];
  }});
Object.defineProperty(MdRadioGroup, "parameters", {get: function() {
    return [[assert.type.string, new Attribute('tabindex')], [assert.type.string, new Attribute('disabled')], [Function, new PropertySetter('tabindex')], [Function, new PropertySetter('attr.role')], [Function, new PropertySetter('attr.aria-disabled')], [Function, new PropertySetter('attr.aria-activedescendant')], [Function, new EventEmitter('change')], [MdRadioDispatcher]];
  }});
Object.defineProperty(MdRadioGroup.prototype.updateValue, "parameters", {get: function() {
    return [[assert.type.any], [assert.type.string]];
  }});
Object.defineProperty(MdRadioGroup.prototype.register, "parameters", {get: function() {
    return [[MdRadioButton]];
  }});
Object.defineProperty(MdRadioGroup.prototype.onKeydown, "parameters", {get: function() {
    return [[KeyboardEvent]];
  }});
//# sourceMappingURL=radio_button.js.map

//# sourceMappingURL=./radio_button.map