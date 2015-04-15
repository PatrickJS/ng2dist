System.register(["angular2/angular2", "angular2/directives", "angular2/src/core/life_cycle/life_cycle", "angular2/di", "rx/dist/rx.all"], function($__export) {
  "use strict";
  var bootstrap,
      Component,
      Decorator,
      View,
      NgElement,
      For,
      LifeCycle,
      bind,
      Observable,
      BehaviorSubject,
      HelloCmp,
      TimersCmp,
      TimerCmp;
  function main() {
    bootstrap(HelloCmp);
  }
  $__export("main", main);
  return {
    setters: [function($__m) {
      bootstrap = $__m.bootstrap;
      Component = $__m.Component;
      Decorator = $__m.Decorator;
      View = $__m.View;
      NgElement = $__m.NgElement;
    }, function($__m) {
      For = $__m.For;
    }, function($__m) {
      LifeCycle = $__m.LifeCycle;
    }, function($__m) {
      bind = $__m.bind;
    }, function($__m) {
      Observable = $__m.Observable;
      BehaviorSubject = $__m.BehaviorSubject;
    }],
    execute: function() {
      HelloCmp = (function() {
        var HelloCmp = function HelloCmp(lc) {
          var x = [Observable.timer(100, 1000).timeInterval().map((function(v) {
            return v.value;
          })), Observable.timer(100, 2000).timeInterval().map((function(v) {
            return v.value;
          })), Observable.timer(100, 3000).timeInterval().map((function(v) {
            return v.value;
          }))];
          this.timers = new BehaviorSubject(x);
          Observable.timer(100, 1000).timeInterval().map((function(v) {
            return v.value;
          })).subscribe((function(x) {
            lc.tick();
          }));
        };
        return ($traceurRuntime.createClass)(HelloCmp, {}, {});
      }());
      Object.defineProperty(HelloCmp, "annotations", {get: function() {
          return [new Component({selector: 'hello-app'}), new View({
            template: "<timers-cmp [timers]=\"timers\">",
            directives: [TimersCmp]
          })];
        }});
      Object.defineProperty(HelloCmp, "parameters", {get: function() {
          return [[LifeCycle]];
        }});
      TimersCmp = (function() {
        var TimersCmp = function TimersCmp() {
          ;
        };
        return ($traceurRuntime.createClass)(TimersCmp, {}, {});
      }());
      Object.defineProperty(TimersCmp, "annotations", {get: function() {
          return [new Component({
            selector: 'timers-cmp',
            properties: {timers: 'timers'}
          }), new View({
            template: "\n    <timer-cmp *for=\"var t of timers|async\" [timer]=\"t\"></timer-cmp>\n  ",
            directives: [TimerCmp, For]
          })];
        }});
      TimerCmp = (function() {
        var TimerCmp = function TimerCmp() {
          ;
        };
        return ($traceurRuntime.createClass)(TimerCmp, {}, {});
      }());
      Object.defineProperty(TimerCmp, "annotations", {get: function() {
          return [new Component({
            selector: 'timer-cmp',
            properties: {timer: 'timer | async'}
          }), new View({
            template: "<div>Time {{timer}}</div>",
            directives: []
          })];
        }});
    }
  };
});
//# sourceMappingURL=index.es6.map

//# sourceMappingURL=./index.js.map