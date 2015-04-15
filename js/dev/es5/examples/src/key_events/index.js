System.register(["angular2/angular2", "angular2/src/render/dom/events/key_events", "angular2/src/reflection/reflection", "angular2/src/reflection/reflection_capabilities"], function($__export) {
  "use strict";
  var bootstrap,
      Component,
      View,
      KeyEventsPlugin,
      reflector,
      ReflectionCapabilities,
      KeyEventsApp;
  function main() {
    reflector.reflectionCapabilities = new ReflectionCapabilities();
    bootstrap(KeyEventsApp);
  }
  $__export("main", main);
  return {
    setters: [function($__m) {
      bootstrap = $__m.bootstrap;
      Component = $__m.Component;
      View = $__m.View;
    }, function($__m) {
      KeyEventsPlugin = $__m.KeyEventsPlugin;
    }, function($__m) {
      reflector = $__m.reflector;
    }, function($__m) {
      ReflectionCapabilities = $__m.ReflectionCapabilities;
    }],
    execute: function() {
      KeyEventsApp = (function() {
        var KeyEventsApp = function KeyEventsApp() {
          this.lastKey = '(none)';
          this.shiftEnter = false;
        };
        return ($traceurRuntime.createClass)(KeyEventsApp, {
          onKeyDown: function(event) {
            this.lastKey = KeyEventsPlugin.getEventFullKey(event);
            event.preventDefault();
          },
          onShiftEnter: function(event) {
            this.shiftEnter = true;
            event.preventDefault();
          },
          resetShiftEnter: function() {
            this.shiftEnter = false;
          }
        }, {});
      }());
      Object.defineProperty(KeyEventsApp, "annotations", {get: function() {
          return [new Component({selector: 'key-events-app'}), new View({template: "Click in the following area and press a key to display its name:<br>\n  <div (keydown)=\"onKeyDown($event)\" class=\"sample-area\" tabindex=\"0\">{{lastKey}}</div><br>\n  Click in the following area and press shift.enter:<br>\n  <div\n    (keydown.shift.enter)=\"onShiftEnter($event)\"\n    (click)=\"resetShiftEnter()\"\n    class=\"sample-area\"\n    tabindex=\"0\"\n  >{{shiftEnter ? 'You pressed shift.enter!' : ''}}</div>"})];
        }});
    }
  };
});
//# sourceMappingURL=index.es6.map

//# sourceMappingURL=./index.js.map