System.register(["angular2/angular2", "angular2/src/core/annotations/di", "angular2/src/core/annotations/annotations", "angular2/src/facade/lang"], function($__export) {
  "use strict";
  var Component,
      View,
      PropertySetter,
      EventEmitter,
      onChange,
      isPresent,
      StringWrapper,
      MdButton,
      MdAnchor;
  return {
    setters: [function($__m) {
      Component = $__m.Component;
      View = $__m.View;
    }, function($__m) {
      PropertySetter = $__m.PropertySetter;
      EventEmitter = $__m.EventEmitter;
    }, function($__m) {
      onChange = $__m.onChange;
    }, function($__m) {
      isPresent = $__m.isPresent;
      StringWrapper = $__m.StringWrapper;
    }],
    execute: function() {
      MdButton = $__export("MdButton", (function() {
        var MdButton = function MdButton() {
          ;
        };
        return ($traceurRuntime.createClass)(MdButton, {}, {});
      }()));
      Object.defineProperty(MdButton, "annotations", {get: function() {
          return [new Component({selector: '[md-button]:not([href])'}), new View({templateUrl: 'angular2_material/src/components/button/button.html'})];
        }});
      MdAnchor = $__export("MdAnchor", (function() {
        var MdAnchor = function MdAnchor(tabIndexSetter) {
          this.tabIndexSetter = tabIndexSetter;
        };
        return ($traceurRuntime.createClass)(MdAnchor, {
          onClick: function(event) {
            if (isPresent(this.disabled) && this.disabled !== false) {
              event.preventDefault();
            }
          },
          onChange: function(_) {
            this.tabIndexSetter(this.disabled ? -1 : 0);
          }
        }, {});
      }()));
      Object.defineProperty(MdAnchor, "annotations", {get: function() {
          return [new Component({
            selector: '[md-button][href]',
            properties: {'disabled': 'disabled'},
            hostListeners: {'click': 'onClick($event)'},
            lifecycle: [onChange]
          }), new View({templateUrl: 'angular2_material/src/components/button/button.html'})];
        }});
      Object.defineProperty(MdAnchor, "parameters", {get: function() {
          return [[Function, new PropertySetter('tabIndex')]];
        }});
    }
  };
});
//# sourceMappingURL=button.es6.map

//# sourceMappingURL=./button.js.map