import {assert} from "rtts_assert/rtts_assert";
import {Component,
  View,
  Attribute,
  PropertySetter} from 'angular2/angular2';
import {isPresent} from 'angular2/src/facade/lang';
import {KeyCodes} from 'angular2_material/src/core/constants';
export class MdCheckbox {
  constructor(tabindex, tabindexSetter, roleSetter, ariaCheckedSetter, ariaDisabledSetter) {
    assert.argumentTypes(tabindex, assert.type.string, tabindexSetter, Function, roleSetter, Function, ariaCheckedSetter, Function, ariaDisabledSetter, Function);
    this.ariaCheckedSetter = ariaCheckedSetter;
    this.ariaDisabledSetter = ariaDisabledSetter;
    roleSetter('checkbox');
    this.checked = false;
    tabindexSetter(isPresent(tabindex) ? tabindex : '0');
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
  onKeydown(event) {
    assert.argumentTypes(event, KeyboardEvent);
    if (event.keyCode == KeyCodes.SPACE) {
      event.preventDefault();
      this.toggle(event);
    }
  }
  toggle(event) {
    if (this.disabled) {
      event.stopPropagation();
      return ;
    }
    this.checked = !this.checked;
    this.ariaCheckedSetter(this.checked);
  }
}
Object.defineProperty(MdCheckbox, "annotations", {get: function() {
    return [new Component({
      selector: 'md-checkbox',
      properties: {
        'checked': 'checked',
        'disabled': 'disabled'
      },
      hostListeners: {'keydown': 'onKeydown($event)'}
    }), new View({
      templateUrl: 'angular2_material/src/components/checkbox/checkbox.html',
      directives: []
    })];
  }});
Object.defineProperty(MdCheckbox, "parameters", {get: function() {
    return [[assert.type.string, new Attribute('tabindex')], [Function, new PropertySetter('tabindex')], [Function, new PropertySetter('attr.role')], [Function, new PropertySetter('attr.aria-checked')], [Function, new PropertySetter('attr.aria-disabled')]];
  }});
Object.defineProperty(MdCheckbox.prototype.onKeydown, "parameters", {get: function() {
    return [[KeyboardEvent]];
  }});
//# sourceMappingURL=checkbox.js.map

//# sourceMappingURL=./checkbox.map