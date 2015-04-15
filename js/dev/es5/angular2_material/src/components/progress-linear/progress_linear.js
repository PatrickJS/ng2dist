System.register(["rtts_assert/rtts_assert", "angular2/angular2", "angular2/src/facade/lang", "angular2/src/facade/math"], function($__export) {
  "use strict";
  var assert,
      Component,
      View,
      Attribute,
      PropertySetter,
      onChange,
      isPresent,
      isBlank,
      Math,
      MdProgressLinear,
      Mode;
  return {
    setters: [function($__m) {
      assert = $__m.assert;
    }, function($__m) {
      Component = $__m.Component;
      View = $__m.View;
      Attribute = $__m.Attribute;
      PropertySetter = $__m.PropertySetter;
      onChange = $__m.onChange;
    }, function($__m) {
      isPresent = $__m.isPresent;
      isBlank = $__m.isBlank;
    }, function($__m) {
      Math = $__m.Math;
    }],
    execute: function() {
      MdProgressLinear = $__export("MdProgressLinear", (function() {
        var MdProgressLinear = function MdProgressLinear(mode, roleSetter, ariaValueMinSetter, ariaValueMaxSetter, ariaValueNowSetter) {
          assert.argumentTypes(mode, assert.type.string, roleSetter, Function, ariaValueMinSetter, Function, ariaValueMaxSetter, Function, ariaValueNowSetter, Function);
          this.ariaValueNowSetter = ariaValueNowSetter;
          this.primaryBarTransform = '';
          this.secondaryBarTransform = '';
          roleSetter('progressbar');
          ariaValueMinSetter('0');
          ariaValueMaxSetter('100');
          this.mode = isPresent(mode) ? mode : Mode.DETERMINATE;
        };
        return ($traceurRuntime.createClass)(MdProgressLinear, {
          get value() {
            return this.value_;
          },
          set value(v) {
            if (isPresent(v)) {
              this.value_ = MdProgressLinear.clamp(v);
              this.ariaValueNowSetter(this.value_);
            }
          },
          onChange: function(_) {
            if (this.mode == Mode['QUERY'] || this.mode == Mode['INDETERMINATE'] || isBlank(this.value)) {
              return ;
            }
            this.primaryBarTransform = this.transformForValue(this.value);
            if (this.mode == Mode['BUFFER']) {
              this.secondaryBarTransform = this.transformForValue(this.bufferValue);
            }
          },
          transformForValue: function(value) {
            var scale = value / 100;
            var translateX = (value - 100) / 2;
            return ("translateX(" + translateX + "%) scale(" + scale + ", 1)");
          }
        }, {clamp: function(v) {
            return Math.max(0, Math.min(100, v));
          }});
      }()));
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
      Mode = {
        'DETERMINATE': 'determinate',
        'INDETERMINATE': 'indeterminate',
        'BUFFER': 'buffer',
        'QUERY': 'query'
      };
    }
  };
});
//# sourceMappingURL=progress_linear.es6.map

//# sourceMappingURL=./progress_linear.js.map