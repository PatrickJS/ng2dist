System.register(["angular2/angular2", "angular2/src/facade/lang"], function($__export) {
  "use strict";
  var Component,
      View,
      isPresent,
      MdProgressCircular;
  return {
    setters: [function($__m) {
      Component = $__m.Component;
      View = $__m.View;
    }, function($__m) {
      isPresent = $__m.isPresent;
    }],
    execute: function() {
      MdProgressCircular = $__export("MdProgressCircular", (function() {
        var MdProgressCircular = function MdProgressCircular() {};
        return ($traceurRuntime.createClass)(MdProgressCircular, {}, {});
      }()));
      Object.defineProperty(MdProgressCircular, "annotations", {get: function() {
          return [new Component({selector: 'md-progress-circular'}), new View({templateUrl: 'angular2_material/src/components/progress-circular/progress_circular.html'})];
        }});
    }
  };
});
//# sourceMappingURL=progress_circular.es6.map

//# sourceMappingURL=./progress_circular.js.map