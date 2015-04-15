System.register(["rtts_assert/rtts_assert", "angular2/angular2", "angular2_material/src/components/button/button", "angular2/src/services/url_resolver", "../demo_common", "angular2/di"], function($__export) {
  "use strict";
  var assert,
      bootstrap,
      Component,
      View,
      MapWrapper,
      ListWrapper,
      For,
      MdButton,
      MdAnchor,
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
      assert = $__m.assert;
    }, function($__m) {
      bootstrap = $__m.bootstrap;
      Component = $__m.Component;
      View = $__m.View;
      MapWrapper = $__m.MapWrapper;
      ListWrapper = $__m.ListWrapper;
      For = $__m.For;
    }, function($__m) {
      MdButton = $__m.MdButton;
      MdAnchor = $__m.MdAnchor;
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
          this.previousClick = 'Nothing';
          this.action = "ACTIVATE";
          this.clickCount = 0;
          this.items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
        };
        return ($traceurRuntime.createClass)(DemoApp, {
          click: function(msg) {
            assert.argumentTypes(msg, assert.type.string);
            this.previousClick = msg;
          },
          submit: function(msg, event) {
            assert.argumentTypes(msg, assert.type.string, event, assert.type.any);
            event.preventDefault();
            this.previousClick = msg;
          },
          increment: function() {
            this.clickCount++;
          }
        }, {});
      }());
      Object.defineProperty(DemoApp, "annotations", {get: function() {
          return [new Component({selector: 'demo-app'}), new View({
            templateUrl: './demo_app.html',
            directives: [MdButton, MdAnchor, For]
          })];
        }});
      Object.defineProperty(DemoApp.prototype.click, "parameters", {get: function() {
          return [[assert.type.string]];
        }});
      Object.defineProperty(DemoApp.prototype.submit, "parameters", {get: function() {
          return [[assert.type.string], []];
        }});
    }
  };
});
//# sourceMappingURL=index.es6.map

//# sourceMappingURL=./index.js.map