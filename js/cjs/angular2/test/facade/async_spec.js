'use strict'; var parse5Adapter = require('angular2/src/dom/parse5_adapter'); parse5Adapter.Parse5DomAdapter.makeCurrent();
Object.defineProperties(module.exports, {
  main: {get: function() {
      return main;
    }},
  __esModule: {value: true}
});
var $__angular2_47_test_95_lib__,
    $__angular2_47_src_47_facade_47_async__;
var $__0 = ($__angular2_47_test_95_lib__ = require("angular2/test_lib"), $__angular2_47_test_95_lib__ && $__angular2_47_test_95_lib__.__esModule && $__angular2_47_test_95_lib__ || {default: $__angular2_47_test_95_lib__}),
    describe = $__0.describe,
    it = $__0.it,
    expect = $__0.expect,
    beforeEach = $__0.beforeEach,
    ddescribe = $__0.ddescribe,
    iit = $__0.iit,
    xit = $__0.xit,
    el = $__0.el,
    SpyObject = $__0.SpyObject,
    AsyncTestCompleter = $__0.AsyncTestCompleter,
    inject = $__0.inject,
    IS_DARTIUM = $__0.IS_DARTIUM;
var $__1 = ($__angular2_47_src_47_facade_47_async__ = require("angular2/src/facade/async"), $__angular2_47_src_47_facade_47_async__ && $__angular2_47_src_47_facade_47_async__.__esModule && $__angular2_47_src_47_facade_47_async__ || {default: $__angular2_47_src_47_facade_47_async__}),
    ObservableWrapper = $__1.ObservableWrapper,
    Observable = $__1.Observable,
    ObservableController = $__1.ObservableController,
    PromiseWrapper = $__1.PromiseWrapper;
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
//# sourceMappingURL=async_spec.js.map

//# sourceMappingURL=./async_spec.map
 main();