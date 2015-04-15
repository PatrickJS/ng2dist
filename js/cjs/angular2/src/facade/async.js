/// <reference path="../../typings/es6-promise/es6-promise.d.ts" />
/// <reference path="../../typings/rx/rx.all.d.ts" />
// HACK: workaround for Traceur behavior.
// It expects all transpiled modules to contain this marker.
// TODO: remove this when we no longer use traceur
exports.__esModule = true;
var lang_1 = require('angular2/src/facade/lang');
var Rx = require('rx');
var PromiseWrapper = (function () {
    function PromiseWrapper() {
    }
    PromiseWrapper.resolve = function (obj) {
        return Promise.resolve(obj);
    };
    PromiseWrapper.reject = function (obj) {
        return Promise.reject(obj);
    };
    // Note: We can't rename this method into `catch`, as this is not a valid
    // method name in Dart.
    PromiseWrapper.catchError = function (promise, onError) {
        return promise.catch(onError);
    };
    PromiseWrapper.all = function (promises) {
        if (promises.length == 0)
            return Promise.resolve([]);
        return Promise.all(promises);
    };
    PromiseWrapper.then = function (promise, success, rejection) {
        return promise.then(success, rejection);
    };
    PromiseWrapper.completer = function () {
        var resolve;
        var reject;
        var p = new Promise(function (res, rej) {
            resolve = res;
            reject = rej;
        });
        return {
            promise: p,
            resolve: resolve,
            reject: reject
        };
    };
    PromiseWrapper.setTimeout = function (fn, millis) {
        lang_1.global.setTimeout(fn, millis);
    };
    PromiseWrapper.isPromise = function (maybePromise) {
        return maybePromise instanceof Promise;
    };
    return PromiseWrapper;
})();
exports.PromiseWrapper = PromiseWrapper;
var ObservableWrapper = (function () {
    function ObservableWrapper() {
    }
    ObservableWrapper.createController = function () {
        return new Rx.Subject();
    };
    ObservableWrapper.createObservable = function (subject) {
        return subject;
    };
    ObservableWrapper.subscribe = function (observable, generatorOrOnNext, onThrow, onReturn) {
        if (onThrow === void 0) { onThrow = null; }
        if (onReturn === void 0) { onReturn = null; }
        if (lang_1.isPresent(generatorOrOnNext.next)) {
            return observable.observeOn(Rx.Scheduler.timeout).subscribe(function (value) {
                return generatorOrOnNext.next(value);
            }, function (error) {
                return generatorOrOnNext.throw(error);
            }, function () {
                return generatorOrOnNext.return();
            });
        }
        else {
            return observable.observeOn(Rx.Scheduler.timeout).subscribe(generatorOrOnNext, onThrow, onReturn);
        }
    };
    ObservableWrapper.callNext = function (subject, value) {
        subject.onNext(value);
    };
    ObservableWrapper.callThrow = function (subject, error) {
        subject.onError(error);
    };
    ObservableWrapper.callReturn = function (subject) {
        subject.onCompleted();
    };
    return ObservableWrapper;
})();
exports.ObservableWrapper = ObservableWrapper;
//# sourceMappingURL=async.js.map