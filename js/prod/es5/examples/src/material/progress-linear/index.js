System.register(["angular2/angular2", "angular2_material/src/components/progress-linear/progress_linear", "angular2/src/services/url_resolver", "../demo_common", "angular2/di"], function($__export) {
  "use strict";
  var bootstrap,
      Component,
      View,
      MdProgressLinear,
      UrlResolver,
      commonDemoSetup,
      DemoUrlResolver,
      bind,
      DemoApp;
  function main() {
    commonDemoSetup();
    bootstrap(DemoApp, [bind(UrlResolver).toValue(new DemoUrlResolver())]);
  }
  $__export("main", main);
  return {
    setters: [function($__m) {
      bootstrap = $__m.bootstrap;
      Component = $__m.Component;
      View = $__m.View;
    }, function($__m) {
      MdProgressLinear = $__m.MdProgressLinear;
    }, function($__m) {
      UrlResolver = $__m.UrlResolver;
    }, function($__m) {
      commonDemoSetup = $__m.commonDemoSetup;
      DemoUrlResolver = $__m.DemoUrlResolver;
    }, function($__m) {
      bind = $__m.bind;
    }],
    execute: function() {
      DemoApp = (function() {
        var DemoApp = function DemoApp() {
          this.progress = 40;
        };
        return ($traceurRuntime.createClass)(DemoApp, {step: function(s) {
            this.progress += s;
          }}, {});
      }());
      Object.defineProperty(DemoApp, "annotations", {get: function() {
          return [new Component({selector: 'demo-app'}), new View({
            templateUrl: './demo_app.html',
            directives: [MdProgressLinear]
          })];
        }});
      Object.defineProperty(DemoApp.prototype.step, "parameters", {get: function() {
          return [[assert.type.number]];
        }});
    }
  };
});
//# sourceMappingURL=index.es6.map

//# sourceMappingURL=./index.js.map