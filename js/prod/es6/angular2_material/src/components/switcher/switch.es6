import {Component,
  View,
  Attribute,
  PropertySetter} from 'angular2/angular2';
import {isPresent} from 'angular2/src/facade/lang';
import {KeyCodes} from 'angular2_material/src/core/constants';
export class MdSwitch {
  constructor(tabindex, tabindexSetter, roleSetter, ariaCheckedSetter, ariaDisabledSetter) {
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
Object.defineProperty(MdSwitch, "annotations", {get: function() {
    return [new Component({
      selector: 'md-switch',
      properties: {
        'checked': 'checked',
        'disabled': 'disabled'
      },
      hostListeners: {'keydown': 'onKeydown($event)'}
    }), new View({
      templateUrl: 'angular2_material/src/components/switcher/switch.html',
      directives: []
    })];
  }});
Object.defineProperty(MdSwitch, "parameters", {get: function() {
    return [[assert.type.string, new Attribute('tabindex')], [Function, new PropertySetter('tabindex')], [Function, new PropertySetter('attr.role')], [Function, new PropertySetter('attr.aria-checked')], [Function, new PropertySetter('attr.aria-disabled')]];
  }});
Object.defineProperty(MdSwitch.prototype.onKeydown, "parameters", {get: function() {
    return [[KeyboardEvent]];
  }});
//# sourceMappingURL=switch.js.map

//# sourceMappingURL=./switch.map