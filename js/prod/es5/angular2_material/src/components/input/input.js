System.register(["angular2/angular2", "angular2/src/core/annotations/di"], function($__export) {
  "use strict";
  var Decorator,
      PropertySetter,
      MdInput,
      MdInputContainer;
  return {
    setters: [function($__m) {
      Decorator = $__m.Decorator;
    }, function($__m) {
      PropertySetter = $__m.PropertySetter;
    }],
    execute: function() {
      MdInput = $__export("MdInput", (function() {
        var MdInput = function MdInput() {};
        return ($traceurRuntime.createClass)(MdInput, {}, {});
      }()));
      Object.defineProperty(MdInput, "annotations", {get: function() {
          return [new Decorator({selector: 'md-input-container input'})];
        }});
      MdInputContainer = $__export("MdInputContainer", (function() {
        var MdInputContainer = function MdInputContainer() {
          ;
        };
        return ($traceurRuntime.createClass)(MdInputContainer, {}, {});
      }()));
      Object.defineProperty(MdInputContainer, "annotations", {get: function() {
          return [new Decorator({selector: 'md-input-container'})];
        }});
    }
  };
});
//# sourceMappingURL=input.es6.map

//# sourceMappingURL=./input.js.map