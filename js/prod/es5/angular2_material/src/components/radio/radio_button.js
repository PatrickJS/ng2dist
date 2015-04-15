System.register(["angular2/angular2", "angular2/src/di/annotations", "angular2_material/src/components/radio/radio_dispatcher", "angular2_material/src/core/theme", "angular2/src/core/annotations/annotations", "angular2/src/facade/lang", "angular2/src/facade/math", "angular2/src/facade/collection"], function($__export) {
  "use strict";
  var Component,
      View,
      Parent,
      Ancestor,
      Attribute,
      PropertySetter,
      EventEmitter,
      Optional,
      MdRadioDispatcher,
      MdTheme,
      onChange,
      isPresent,
      StringWrapper,
      Math,
      ListWrapper,
      _uniqueIdCounter,
      MdRadioButton,
      MdRadioGroup;
  return {
    setters: [function($__m) {
      Component = $__m.Component;
      View = $__m.View;
      Parent = $__m.Parent;
      Ancestor = $__m.Ancestor;
      Attribute = $__m.Attribute;
      PropertySetter = $__m.PropertySetter;
      EventEmitter = $__m.EventEmitter;
    }, function($__m) {
      Optional = $__m.Optional;
    }, function($__m) {
      MdRadioDispatcher = $__m.MdRadioDispatcher;
    }, function($__m) {
      MdTheme = $__m.MdTheme;
    }, function($__m) {
      onChange = $__m.onChange;
    }, function($__m) {
      isPresent = $__m.isPresent;
      StringWrapper = $__m.StringWrapper;
    }, function($__m) {
      Math = $__m.Math;
    }, function($__m) {
      ListWrapper = $__m.ListWrapper;
    }],
    execute: function() {
      _uniqueIdCounter = 0;
      MdRadioButton = $__export("MdRadioButton", (function() {
        var MdRadioButton = function MdRadioButton(radioGroup, id, tabindex, idSetter, tabindexSetter, roleSetter, ariaCheckedSetter, ariaDisabledSetter, radioDispatcher) {
          var $__0 = this;
          this.radioGroup = radioGroup;
          this.radioDispatcher = radioDispatcher;
          this.ariaCheckedSetter = ariaCheckedSetter;
          this.ariaDisabledSetter = ariaDisabledSetter;
          this.value = null;
          roleSetter('radio');
          this.checked = false;
          this.id = isPresent(id) ? id : ("md-radio-" + _uniqueIdCounter++);
          idSetter(this.id);
          radioDispatcher.listen((function(name) {
            if (name == $__0.name) {
              $__0.checked = false;
            }
          }));
          if (isPresent(radioGroup)) {
            this.name = radioGroup.getName();
            this.radioGroup.register(this);
          }
          if (!isPresent(radioGroup)) {
            tabindexSetter(isPresent(tabindex) ? tabindex : '0');
          }
        };
        return ($traceurRuntime.createClass)(MdRadioButton, {
          onChange: function(_) {
            if (isPresent(this.radioGroup)) {
              this.name = this.radioGroup.getName();
            }
          },
          isDisabled: function() {
            return this.disabled || (isPresent(this.disabled) && StringWrapper.equals(this.disabled, '')) || (isPresent(this.radioGroup) && this.radioGroup.disabled);
          },
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
          select: function(event) {
            if (this.isDisabled()) {
              event.stopPropagation();
              return ;
            }
            this.radioDispatcher.notify(this.name);
            this.checked = true;
            if (this.radioGroup) {
              this.radioGroup.updateValue(this.value, this.id);
            }
          },
          onKeydown: function(event) {
            if (event.keyCode == KeyCodes.SPACE) {
              event.preventDefault();
              this.select(event);
            }
          }
        }, {});
      }()));
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
      MdRadioGroup = $__export("MdRadioGroup", (function() {
        var MdRadioGroup = function MdRadioGroup(tabindex, disabled, tabindexSetter, roleSetter, ariaDisabledSetter, ariaActiveDescendantSetter, changeEmitter, radioDispatcher) {
          this.name_ = ("md-radio-group-" + _uniqueIdCounter++);
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
        };
        return ($traceurRuntime.createClass)(MdRadioGroup, {
          getName: function() {
            return this.name_;
          },
          get disabled() {
            return this.disabled_;
          },
          set disabled(value) {
            this.disabled_ = isPresent(value) && value !== false;
            this.ariaDisabledSetter(this.disabled_);
          },
          onChange: function(_) {
            var $__0 = this;
            this.disabled = isPresent(this.disabled) && this.disabled !== false;
            if (isPresent(this.value) && this.value != '') {
              this.radioDispatcher.notify(this.name_);
              ListWrapper.forEach(this.radios_, (function(radio) {
                if (radio.value == $__0.value) {
                  radio.checked = true;
                  $__0.selectedRadioId = radio.id;
                  $__0.ariaActiveDescendantSetter(radio.id);
                }
              }));
            }
          },
          updateValue: function(value, id) {
            this.value = value;
            this.selectedRadioId = id;
            this.ariaActiveDescendantSetter(id);
            this.changeEmitter();
          },
          register: function(radio) {
            ListWrapper.push(this.radios_, radio);
          },
          onKeydown: function(event) {
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
          },
          getSelectedRadioIndex: function() {
            for (var i = 0; i < this.radios_.length; i++) {
              if (this.radios_[i].id == this.selectedRadioId) {
                return i;
              }
            }
            return -1;
          },
          stepSelectedRadio: function(step) {
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
        }, {});
      }()));
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
    }
  };
});
//# sourceMappingURL=radio_button.es6.map

//# sourceMappingURL=./radio_button.js.map