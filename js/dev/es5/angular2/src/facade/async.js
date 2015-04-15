System.register(["rtts_assert/rtts_assert", "angular2/src/facade/lang", "angular2/src/facade/collection", "rx/dist/rx.all"], function($__export) {
  "use strict";
  var assert,
      int,
      global,
      isPresent,
      List,
      Rx,
      Promise,
      PromiseWrapper,
      Observable,
      ObservableController,
      ObservableWrapper;
  return {
    setters: [function($__m) {
      assert = $__m.assert;
    }, function($__m) {
      int = $__m.int;
      global = $__m.global;
      isPresent = $__m.isPresent;
    }, function($__m) {
      List = $__m.List;
    }, function($__m) {
      Rx = $__m.default;
    }],
    execute: function() {
      Promise = $__export("Promise", global.Promise);
      PromiseWrapper = $__export("PromiseWrapper", (function() {
        var PromiseWrapper = function PromiseWrapper() {
          ;
        };
        return ($traceurRuntime.createClass)(PromiseWrapper, {}, {
          resolve: function(obj) {
            return assert.returnType((Promise.resolve(obj)), Promise);
          },
          reject: function(obj) {
            return assert.returnType((Promise.reject(obj)), Promise);
          },
          catchError: function(promise, onError) {
            assert.argumentTypes(promise, Promise, onError, Function);
            return assert.returnType((promise.catch(onError)), Promise);
          },
          all: function(promises) {
            assert.argumentTypes(promises, List);
            if (promises.length == 0)
              return assert.returnType((Promise.resolve([])), Promise);
            return assert.returnType((Promise.all(promises)), Promise);
          },
          then: function(promise, success, rejection) {
            assert.argumentTypes(promise, Promise, success, Function, rejection, Function);
            return assert.returnType((promise.then(success, rejection)), Promise);
          },
          completer: function() {
            var resolve;
            var reject;
            var p = new Promise(function(res, rej) {
              resolve = res;
              reject = rej;
            });
            return {
              promise: p,
              resolve: resolve,
              reject: reject
            };
          },
          setTimeout: function(fn, millis) {
            assert.argumentTypes(fn, Function, millis, int);
            global.setTimeout(fn, millis);
          },
          isPromise: function(maybePromise) {
            return assert.returnType((maybePromise instanceof Promise), assert.type.boolean);
          }
        });
      }()));
      Object.defineProperty(PromiseWrapper.catchError, "parameters", {get: function() {
          return [[Promise], [Function]];
        }});
      Object.defineProperty(PromiseWrapper.all, "parameters", {get: function() {
          return [[List]];
        }});
      Object.defineProperty(PromiseWrapper.then, "parameters", {get: function() {
          return [[Promise], [Function], [Function]];
        }});
      Object.defineProperty(PromiseWrapper.setTimeout, "parameters", {get: function() {
          return [[Function], [int]];
        }});
      Observable = $__export("Observable", Rx.Observable);
      ObservableController = $__export("ObservableController", Rx.Subject);
      ObservableWrapper = $__export("ObservableWrapper", (function() {
        var ObservableWrapper = function ObservableWrapper() {
          ;
        };
        return ($traceurRuntime.createClass)(ObservableWrapper, {}, {
          createController: function() {
            return assert.returnType((new Rx.Subject()), Rx.Subject);
          },
          createObservable: function(subject) {
            assert.argumentTypes(subject, Rx.Subject);
            return assert.returnType((subject), Observable);
          },
          subscribe: function(observable, generatorOrOnNext) {
            var onThrow = arguments[2] !== (void 0) ? arguments[2] : null;
            var onReturn = arguments[3] !== (void 0) ? arguments[3] : null;
            if (isPresent(generatorOrOnNext.next)) {
              return observable.observeOn(Rx.Scheduler.timeout).subscribe((function(value) {
                return generatorOrOnNext.next(value);
              }), (function(error) {
                return generatorOrOnNext.throw(error);
              }), (function() {
                return generatorOrOnNext.return();
              }));
            } else {
              return observable.observeOn(Rx.Scheduler.timeout).subscribe(generatorOrOnNext, onThrow, onReturn);
            }
          },
          callNext: function(subject, value) {
            assert.argumentTypes(subject, Rx.Subject, value, assert.type.any);
            subject.onNext(value);
          },
          callThrow: function(subject, error) {
            assert.argumentTypes(subject, Rx.Subject, error, assert.type.any);
            subject.onError(error);
          },
          callReturn: function(subject) {
            assert.argumentTypes(subject, Rx.Subject);
            subject.onCompleted();
          }
        });
      }()));
      Object.defineProperty(ObservableWrapper.createObservable, "parameters", {get: function() {
          return [[Rx.Subject]];
        }});
      Object.defineProperty(ObservableWrapper.subscribe, "parameters", {get: function() {
          return [[Observable], [], [], []];
        }});
      Object.defineProperty(ObservableWrapper.callNext, "parameters", {get: function() {
          return [[Rx.Subject], [assert.type.any]];
        }});
      Object.defineProperty(ObservableWrapper.callThrow, "parameters", {get: function() {
          return [[Rx.Subject], [assert.type.any]];
        }});
      Object.defineProperty(ObservableWrapper.callReturn, "parameters", {get: function() {
          return [[Rx.Subject]];
        }});
    }
  };
});
//# sourceMappingURL=async.es6.map

//# sourceMappingURL=./async.js.map