System.register(["angular2/angular2", "angular2_material/src/components/checkbox/checkbox", "angular2/src/services/url_resolver", "../demo_common", "angular2/di"], function($__export) {
  "use strict";
  var bootstrap,
      Component,
      View,
      MdCheckbox,
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
      MdCheckbox = $__m.MdCheckbox;
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
          this.toggleCount = 0;
        };
        return ($traceurRuntime.createClass)(DemoApp, {increment: function() {
            this.toggleCount++;
          }}, {});
      }());
      Object.defineProperty(DemoApp, "annotations", {get: function() {
          return [new Component({selector: 'demo-app'}), new View({
            templateUrl: './demo_app.html',
            directives: [MdCheckbox]
          })];
        }});
    }
  };
});
//# sourceMappingURL=index.es6.map

//# sourceMappingURL=./index.js.map