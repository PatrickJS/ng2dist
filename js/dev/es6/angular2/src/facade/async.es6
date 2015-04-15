import {assert} from "rtts_assert/rtts_assert";
import {int,
  global,
  isPresent} from 'angular2/src/facade/lang';
import {List} from 'angular2/src/facade/collection';
import Rx from 'rx/dist/rx.all';
export var Promise = global.Promise;
export class PromiseWrapper {
  static resolve(obj) {
    return assert.returnType((Promise.resolve(obj)), Promise);
  }
  static reject(obj) {
    return assert.returnType((Promise.reject(obj)), Promise);
  }
  static catchError(promise, onError) {
    assert.argumentTypes(promise, Promise, onError, Function);
    return assert.returnType((promise.catch(onError)), Promise);
  }
  static all(promises) {
    assert.argumentTypes(promises, List);
    if (promises.length == 0)
      return assert.returnType((Promise.resolve([])), Promise);
    return assert.returnType((Promise.all(promises)), Promise);
  }
  static then(promise, success, rejection) {
    assert.argumentTypes(promise, Promise, success, Function, rejection, Function);
    return assert.returnType((promise.then(success, rejection)), Promise);
  }
  static completer() {
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
  }
  static setTimeout(fn, millis) {
    assert.argumentTypes(fn, Function, millis, int);
    global.setTimeout(fn, millis);
  }
  static isPromise(maybePromise) {
    return assert.returnType((maybePromise instanceof Promise), assert.type.boolean);
  }
}
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
export var Observable = Rx.Observable;
export var ObservableController = Rx.Subject;
export class ObservableWrapper {
  static createController() {
    return assert.returnType((new Rx.Subject()), Rx.Subject);
  }
  static createObservable(subject) {
    assert.argumentTypes(subject, Rx.Subject);
    return assert.returnType((subject), Observable);
  }
  static subscribe(observable, generatorOrOnNext, onThrow = null, onReturn = null) {
    if (isPresent(generatorOrOnNext.next)) {
      return observable.observeOn(Rx.Scheduler.timeout).subscribe((value) => generatorOrOnNext.next(value), (error) => generatorOrOnNext.throw(error), () => generatorOrOnNext.return());
    } else {
      return observable.observeOn(Rx.Scheduler.timeout).subscribe(generatorOrOnNext, onThrow, onReturn);
    }
  }
  static callNext(subject, value) {
    assert.argumentTypes(subject, Rx.Subject, value, assert.type.any);
    subject.onNext(value);
  }
  static callThrow(subject, error) {
    assert.argumentTypes(subject, Rx.Subject, error, assert.type.any);
    subject.onError(error);
  }
  static callReturn(subject) {
    assert.argumentTypes(subject, Rx.Subject);
    subject.onCompleted();
  }
}
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
//# sourceMappingURL=async.es6.map

//# sourceMappingURL=./async.map