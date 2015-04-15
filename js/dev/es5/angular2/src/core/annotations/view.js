System.register(["angular2/src/facade/lang"], function($__export) {
  "use strict";
  var ABSTRACT,
      CONST,
      Type,
      View;
  return {
    setters: [function($__m) {
      ABSTRACT = $__m.ABSTRACT;
      CONST = $__m.CONST;
      Type = $__m.Type;
    }],
    execute: function() {
      View = $__export("View", (function() {
        var View = function View($__1) {
          var $__2 = $__1,
              templateUrl = $__2.templateUrl,
              template = $__2.template,
              directives = $__2.directives,
              formatters = $__2.formatters,
              source = $__2.source,
              locale = $__2.locale,
              device = $__2.device;
          this.templateUrl = templateUrl;
          this.template = template;
          this.directives = directives;
          this.formatters = formatters;
          this.source = source;
          this.locale = locale;
          this.device = device;
        };
        return ($traceurRuntime.createClass)(View, {}, {});
      }()));
      Object.defineProperty(View, "annotations", {get: function() {
          return [new CONST()];
        }});
    }
  };
});
//# sourceMappingURL=view.es6.map

//# sourceMappingURL=./view.js.map