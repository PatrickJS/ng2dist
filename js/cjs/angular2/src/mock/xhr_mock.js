"use strict";
Object.defineProperties(module.exports, {
  MockXHR: {get: function() {
      return MockXHR;
    }},
  __esModule: {value: true}
});
var $__angular2_47_src_47_services_47_xhr__,
    $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_facade_47_async__;
var XHR = ($__angular2_47_src_47_services_47_xhr__ = require("angular2/src/services/xhr"), $__angular2_47_src_47_services_47_xhr__ && $__angular2_47_src_47_services_47_xhr__.__esModule && $__angular2_47_src_47_services_47_xhr__ || {default: $__angular2_47_src_47_services_47_xhr__}).XHR;
var $__1 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    List = $__1.List,
    ListWrapper = $__1.ListWrapper,
    Map = $__1.Map,
    MapWrapper = $__1.MapWrapper;
var $__2 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    isBlank = $__2.isBlank,
    isPresent = $__2.isPresent,
    normalizeBlank = $__2.normalizeBlank,
    BaseException = $__2.BaseException;
var $__3 = ($__angular2_47_src_47_facade_47_async__ = require("angular2/src/facade/async"), $__angular2_47_src_47_facade_47_async__ && $__angular2_47_src_47_facade_47_async__.__esModule && $__angular2_47_src_47_facade_47_async__ || {default: $__angular2_47_src_47_facade_47_async__}),
    PromiseWrapper = $__3.PromiseWrapper,
    Promise = $__3.Promise;
var MockXHR = function MockXHR() {
  $traceurRuntime.superConstructor($MockXHR).call(this);
  this._expectations = [];
  this._definitions = MapWrapper.create();
  this._requests = [];
};
var $MockXHR = MockXHR;
($traceurRuntime.createClass)(MockXHR, {
  get: function(url) {
    var request = new _PendingRequest(url);
    ListWrapper.push(this._requests, request);
    return request.getPromise();
  },
  expect: function(url, response) {
    var expectation = new _Expectation(url, response);
    ListWrapper.push(this._expectations, expectation);
  },
  when: function(url, response) {
    MapWrapper.set(this._definitions, url, response);
  },
  flush: function() {
    if (this._requests.length === 0) {
      throw new BaseException('No pending requests to flush');
    }
    do {
      var request = ListWrapper.removeAt(this._requests, 0);
      this._processRequest(request);
    } while (this._requests.length > 0);
    this.verifyNoOustandingExpectations();
  },
  verifyNoOustandingExpectations: function() {
    if (this._expectations.length === 0)
      return ;
    var urls = [];
    for (var i = 0; i < this._expectations.length; i++) {
      var expectation = this._expectations[i];
      ListWrapper.push(urls, expectation.url);
    }
    throw new BaseException(("Unsatisfied requests: " + ListWrapper.join(urls, ', ')));
  },
  _processRequest: function(request) {
    var url = request.url;
    if (this._expectations.length > 0) {
      var expectation = this._expectations[0];
      if (expectation.url == url) {
        ListWrapper.remove(this._expectations, expectation);
        request.complete(expectation.response);
        return ;
      }
    }
    if (MapWrapper.contains(this._definitions, url)) {
      var response = MapWrapper.get(this._definitions, url);
      request.complete(normalizeBlank(response));
      return ;
    }
    throw new BaseException(("Unexpected request " + url));
  }
}, {}, XHR);
Object.defineProperty(MockXHR.prototype.get, "parameters", {get: function() {
    return [[$traceurRuntime.type.string]];
  }});
Object.defineProperty(MockXHR.prototype.expect, "parameters", {get: function() {
    return [[$traceurRuntime.type.string], [$traceurRuntime.type.string]];
  }});
Object.defineProperty(MockXHR.prototype.when, "parameters", {get: function() {
    return [[$traceurRuntime.type.string], [$traceurRuntime.type.string]];
  }});
Object.defineProperty(MockXHR.prototype._processRequest, "parameters", {get: function() {
    return [[_PendingRequest]];
  }});
var _PendingRequest = function _PendingRequest(url) {
  this.url = url;
  this.completer = PromiseWrapper.completer();
};
($traceurRuntime.createClass)(_PendingRequest, {
  complete: function(response) {
    if (isBlank(response)) {
      this.completer.reject(("Failed to load " + this.url));
    } else {
      this.completer.resolve(response);
    }
  },
  getPromise: function() {
    return this.completer.promise;
  }
}, {});
Object.defineProperty(_PendingRequest.prototype.complete, "parameters", {get: function() {
    return [[$traceurRuntime.type.string]];
  }});
var _Expectation = function _Expectation(url, response) {
  this.url = url;
  this.response = response;
};
($traceurRuntime.createClass)(_Expectation, {}, {});
Object.defineProperty(_Expectation, "parameters", {get: function() {
    return [[$traceurRuntime.type.string], [$traceurRuntime.type.string]];
  }});
//# sourceMappingURL=xhr_mock.js.map

//# sourceMappingURL=./xhr_mock.map