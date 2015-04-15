System.register(["rtts_assert/rtts_assert", "angular2/angular2", "angular2/src/facade/lang", "angular2_material/src/core/constants"], function($__export) {
  "use strict";
  var assert,
      Component,
      View,
      Attribute,
      PropertySetter,
      isPresent,
      KeyCodes,
      MdCheckbox;
  return {
    setters: [function($__m) {
      assert = $__m.assert;
    }, function($__m) {
      Component = $__m.Component;
      View = $__m.View;
      Attribute = $__m.Attribute;
      PropertySetter = $__m.PropertySetter;
    }, function($__m) {
      isPresent = $__m.isPresent;
    }, function($__m) {
      KeyCodes = $__m.KeyCodes;
    }],
    execute: function() {
      MdCheckbox = $__export("MdCheckbox", (function() {
        var MdCheckbox = function MdCheckbox(tabindex, tabindexSetter, roleSetter, ariaCheckedSetter, ariaDisabledSetter) {
          assert.argumentTypes(tabindex, assert.type.string, tabindexSetter, Function, roleSetter, Function, ariaCheckedSetter, Function, ariaDisabledSetter, Function);
          this.ariaCheckedSetter = ariaCheckedSetter;
          this.ariaDisabledSetter = ariaDisabledSetter;
          roleSetter('checkbox');
          this.checked = false;
          tabindexSetter(isPresent(tabindex) ? tabindex : '0');
        };
        return ($traceurRuntime.createClass)(MdCheckbox, {
          get checked() {
            return this.checked_;
          },
          set checked(value) {
            this.checked_ = value;
            this.ariaCheckedSetter(value);
          },
          get disabled() {
            return this.disabled_;
          },
          set disabled(value) {
            this.disabled_ = isPresent(value) && value !== false;
            this.ariaDisabledSetter(this.disabled_);
          },
          onKeydown: function(event) {
            assert.argumentTypes(event, KeyboardEvent);
            if (event.keyCode == KeyCodes.SPACE) {
              event.preventDefault();
              this.toggle(event);
            }
          },
          toggle: function(event) {
            if (this.disabled) {
              event.stopPropagation();
              return ;
            }
            this.checked = !this.checked;
            this.ariaCheckedSetter(this.checked);
          }
        }, {});
      }()));
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
    }
  };
});
//# sourceMappingURL=checkbox.es6.map

//# sourceMappingURL=./checkbox.js.map