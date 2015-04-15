System.register(["angular2/angular2", "angular2_material/src/components/radio/radio_button", "angular2_material/src/components/radio/radio_dispatcher", "angular2/src/services/url_resolver", "../demo_common", "angular2/di"], function($__export) {
  "use strict";
  var bootstrap,
      Component,
      View,
      MdRadioButton,
      MdRadioGroup,
      MdRadioDispatcher,
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
      MdRadioButton = $__m.MdRadioButton;
      MdRadioGroup = $__m.MdRadioGroup;
    }, function($__m) {
      MdRadioDispatcher = $__m.MdRadioDispatcher;
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
          this.thirdValue = 'dr-who';
          this.groupValueChangeCount = 0;
          this.individualValueChanges = 0;
          this.pokemon = '';
          this.someTabindex = 888;
        };
        return ($traceurRuntime.createClass)(DemoApp, {
          chooseCharmander: function() {
            this.pokemon = 'fire';
          },
          onGroupChange: function() {
            this.groupValueChangeCount++;
          },
          onIndividualClick: function() {
            this.individualValueChanges++;
          }
        }, {});
      }());
      Object.defineProperty(DemoApp, "annotations", {get: function() {
          return [new Component({
            selector: 'demo-app',
            injectables: [MdRadioDispatcher]
          }), new View({
            templateUrl: './demo_app.html',
            directives: [MdRadioGroup, MdRadioButton]
          })];
        }});
    }
  };
});
//# sourceMappingURL=index.es6.map

//# sourceMappingURL=./index.js.map