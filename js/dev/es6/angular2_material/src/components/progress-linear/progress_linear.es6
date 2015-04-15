import {assert} from "rtts_assert/rtts_assert";
import {Component,
  View,
  Attribute,
  PropertySetter,
  onChange} from 'angular2/angular2';
import {isPresent,
  isBlank} from 'angular2/src/facade/lang';
import {Math} from 'angular2/src/facade/math';
export class MdProgressLinear {
  constructor(mode, roleSetter, ariaValueMinSetter, ariaValueMaxSetter, ariaValueNowSetter) {
    assert.argumentTypes(mode, assert.type.string, roleSetter, Function, ariaValueMinSetter, Function, ariaValueMaxSetter, Function, ariaValueNowSetter, Function);
    this.ariaValueNowSetter = ariaValueNowSetter;
    this.primaryBarTransform = '';
    this.secondaryBarTransform = '';
    roleSetter('progressbar');
    ariaValueMinSetter('0');
    ariaValueMaxSetter('100');
    this.mode = isPresent(mode) ? mode : Mode.DETERMINATE;
  }
  get value() {
    return this.value_;
  }
  set value(v) {
    if (isPresent(v)) {
      this.value_ = MdProgressLinear.clamp(v);
      this.ariaValueNowSetter(this.value_);
    }
  }
  onChange(_) {
    if (this.mode == Mode['QUERY'] || this.mode == Mode['INDETERMINATE'] || isBlank(this.value)) {
      return ;
    }
    this.primaryBarTransform = this.transformForValue(this.value);
    if (this.mode == Mode['BUFFER']) {
      this.secondaryBarTransform = this.transformForValue(this.bufferValue);
    }
  }
  transformForValue(value) {
    var scale = value / 100;
    var translateX = (value - 100) / 2;
    return `translateX(${translateX}%) scale(${scale}, 1)`;
  }
  static clamp(v) {
    return Math.max(0, Math.min(100, v));
  }
}
Object.defineProperty(MdProgressLinear, "annotations", {get: function() {
    return [new Component({
      selector: 'md-progress-linear',
      lifecycle: [onChange],
      properties: {
        'value': 'value',
        'bufferValue': 'buffer-value'
      }
    }), new View({
      templateUrl: 'angular2_material/src/components/progress-linear/progress_linear.html',
      directives: []
    })];
  }});
Object.defineProperty(MdProgressLinear, "parameters", {get: function() {
    return [[assert.type.string, new Attribute('md-mode')], [Function, new PropertySetter('attr.role')], [Function, new PropertySetter('attr.aria-valuemin')], [Function, new PropertySetter('attr.aria-valuemax')], [Function, new PropertySetter('attr.aria-valuenow')]];
  }});
var Mode = {
  'DETERMINATE': 'determinate',
  'INDETERMINATE': 'indeterminate',
  'BUFFER': 'buffer',
  'QUERY': 'query'
};
//# sourceMappingURL=progress_linear.js.map

//# sourceMappingURL=./progress_linear.map