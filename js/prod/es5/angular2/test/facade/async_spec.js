System.register(["angular2/test_lib", "angular2/src/facade/async"], function($__export) {
  "use strict";
  var describe,
      it,
      expect,
      beforeEach,
      ddescribe,
      iit,
      xit,
      el,
      SpyObject,
      AsyncTestCompleter,
      inject,
      IS_DARTIUM,
      ObservableWrapper,
      Observable,
      ObservableController,
      PromiseWrapper;
  function main() {
    describe('Observable', (function() {
      var obs;
      var controller;
      beforeEach((function() {
        controller = ObservableWrapper.createController();
        obs = ObservableWrapper.createObservable(controller);
      }));
      it("should call the next callback", inject([AsyncTestCompleter], (function(async) {
        ObservableWrapper.subscribe(obs, (function(value) {
          expect(value).toEqual(99);
          async.done();
        }));
        ObservableWrapper.callNext(controller, 99);
      })));
      it("should call the throw callback", inject([AsyncTestCompleter], (function(async) {
        ObservableWrapper.subscribe(obs, (function(_) {}), (function(error) {
          expect(error).toEqual("Boom");
          async.done();
        }));
        ObservableWrapper.callThrow(controller, "Boom");
      })));
      it("should call the return callback", inject([AsyncTestCompleter], (function(async) {
        ObservableWrapper.subscribe(obs, (function(_) {}), (function(_) {}), (function() {
          async.done();
        }));
        ObservableWrapper.callReturn(controller);
      })));
      it("should subscribe to the wrapper asynchronously", (function() {
        var called = false;
        ObservableWrapper.subscribe(obs, (function(value) {
          called = true;
        }));
        ObservableWrapper.callNext(controller, 99);
        expect(called).toBe(false);
      }));
      if (!IS_DARTIUM) {
        describe("Generator", (function() {
          var generator;
          beforeEach((function() {
            generator = new SpyObject();
            generator.spy("next");
            generator.spy("throw");
            generator.spy("return");
          }));
          it("should call next on the given generator", inject([AsyncTestCompleter], (function(async) {
            generator.spy("next").andCallFake((function(value) {
              expect(value).toEqual(99);
              async.done();
            }));
            ObservableWrapper.subscribe(obs, generator);
            ObservableWrapper.callNext(controller, 99);
          })));
          it("should call throw on the given generator", inject([AsyncTestCompleter], (function(async) {
            generator.spy("throw").andCallFake((function(error) {
              expect(error).toEqual("Boom");
              async.done();
            }));
            ObservableWrapper.subscribe(obs, generator);
            ObservableWrapper.callThrow(controller, "Boom");
          })));
          it("should call return on the given generator", inject([AsyncTestCompleter], (function(async) {
            generator.spy("return").andCallFake((function() {
              async.done();
            }));
            ObservableWrapper.subscribe(obs, generator);
            ObservableWrapper.callReturn(controller);
          })));
        }));
      }
    }));
  }
  $__export("main", main);
  return {
    setters: [function($__m) {
      describe = $__m.describe;
      it = $__m.it;
      expect = $__m.expect;
      beforeEach = $__m.beforeEach;
      ddescribe = $__m.ddescribe;
      iit = $__m.iit;
      xit = $__m.xit;
      el = $__m.el;
      SpyObject = $__m.SpyObject;
      AsyncTestCompleter = $__m.AsyncTestCompleter;
      inject = $__m.inject;
      IS_DARTIUM = $__m.IS_DARTIUM;
    }, function($__m) {
      ObservableWrapper = $__m.ObservableWrapper;
      Observable = $__m.Observable;
      ObservableController = $__m.ObservableController;
      PromiseWrapper = $__m.PromiseWrapper;
    }],
    execute: function() {
    }
  };
});
//# sourceMappingURL=async_spec.es6.map

//# sourceMappingURL=./async_spec.js.map