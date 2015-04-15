System.register(["angular2/angular2"], function($__export) {
  "use strict";
  var Decorator,
      MdTheme;
  return {
    setters: [function($__m) {
      Decorator = $__m.Decorator;
    }],
    execute: function() {
      MdTheme = $__export("MdTheme", (function() {
        var MdTheme = function MdTheme() {
          this.color = 'sky-blue';
        };
        return ($traceurRuntime.createClass)(MdTheme, {}, {});
      }()));
      Object.defineProperty(MdTheme, "annotations", {get: function() {
          return [new Decorator({selector: '[md-theme]'})];
        }});
    }
  };
});
//# sourceMappingURL=theme.es6.map

//# sourceMappingURL=./theme.js.map