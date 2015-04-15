'use strict'; var parse5Adapter = require('angular2/src/dom/parse5_adapter'); parse5Adapter.Parse5DomAdapter.makeCurrent();
Object.defineProperties(module.exports, {
  main: {get: function() {
      return main;
    }},
  __esModule: {value: true}
});
var $__angular2_47_test_95_lib__,
    $__angular2_47_src_47_mock_47_xhr_95_mock__,
    $__angular2_47_src_47_facade_47_async__,
    $__angular2_47_src_47_facade_47_lang__;
var $__0 = ($__angular2_47_test_95_lib__ = require("angular2/test_lib"), $__angular2_47_test_95_lib__ && $__angular2_47_test_95_lib__.__esModule && $__angular2_47_test_95_lib__ || {default: $__angular2_47_test_95_lib__}),
    AsyncTestCompleter = $__0.AsyncTestCompleter,
    beforeEach = $__0.beforeEach,
    ddescribe = $__0.ddescribe,
    describe = $__0.describe,
    el = $__0.el,
    expect = $__0.expect,
    iit = $__0.iit,
    inject = $__0.inject,
    IS_DARTIUM = $__0.IS_DARTIUM,
    it = $__0.it;
var MockXHR = ($__angular2_47_src_47_mock_47_xhr_95_mock__ = require("angular2/src/mock/xhr_mock"), $__angular2_47_src_47_mock_47_xhr_95_mock__ && $__angular2_47_src_47_mock_47_xhr_95_mock__.__esModule && $__angular2_47_src_47_mock_47_xhr_95_mock__ || {default: $__angular2_47_src_47_mock_47_xhr_95_mock__}).MockXHR;
var $__2 = ($__angular2_47_src_47_facade_47_async__ = require("angular2/src/facade/async"), $__angular2_47_src_47_facade_47_async__ && $__angular2_47_src_47_facade_47_async__.__esModule && $__angular2_47_src_47_facade_47_async__ || {default: $__angular2_47_src_47_facade_47_async__}),
    PromiseWrapper = $__2.PromiseWrapper,
    Promise = $__2.Promise;
var isPresent = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}).isPresent;
function main() {
  describe('MockXHR', (function() {
    var xhr;
    beforeEach((function() {
      xhr = new MockXHR();
    }));
    function expectResponse(request, url, response) {
      var done = arguments[3] !== (void 0) ? arguments[3] : null;
      function onResponse(text) {
        if (response === null) {
          throw ("Unexpected response " + url + " -> " + text);
        } else {
          expect(text).toEqual(response);
          if (isPresent(done))
            done();
        }
      }
      Object.defineProperty(onResponse, "parameters", {get: function() {
          return [[$traceurRuntime.type.string]];
        }});
      function onError(error) {
        if (response !== null) {
          throw ("Unexpected error " + url);
        } else {
          expect(error).toEqual(("Failed to load " + url));
          if (isPresent(done))
            done();
        }
      }
      Object.defineProperty(onError, "parameters", {get: function() {
          return [[$traceurRuntime.type.string]];
        }});
      PromiseWrapper.then(request, onResponse, onError);
    }
    Object.defineProperty(expectResponse, "parameters", {get: function() {
        return [[Promise], [$traceurRuntime.type.string], [$traceurRuntime.type.string], []];
      }});
    it('should return a response from the definitions', inject([AsyncTestCompleter], (function(async) {
      var url = '/foo';
      var response = 'bar';
      xhr.when(url, response);
      expectResponse(xhr.get(url), url, response, (function() {
        return async.done();
      }));
      xhr.flush();
    })));
    it('should return an error from the definitions', inject([AsyncTestCompleter], (function(async) {
      var url = '/foo';
      var response = null;
      xhr.when(url, response);
      expectResponse(xhr.get(url), url, response, (function() {
        return async.done();
      }));
      xhr.flush();
    })));
    it('should return a response from the expectations', inject([AsyncTestCompleter], (function(async) {
      var url = '/foo';
      var response = 'bar';
      xhr.expect(url, response);
      expectResponse(xhr.get(url), url, response, (function() {
        return async.done();
      }));
      xhr.flush();
    })));
    it('should return an error from the expectations', inject([AsyncTestCompleter], (function(async) {
      var url = '/foo';
      var response = null;
      xhr.expect(url, response);
      expectResponse(xhr.get(url), url, response, (function() {
        return async.done();
      }));
      xhr.flush();
    })));
    it('should not reuse expectations', (function() {
      var url = '/foo';
      var response = 'bar';
      xhr.expect(url, response);
      xhr.get(url);
      xhr.get(url);
      expect((function() {
        xhr.flush();
      })).toThrowError('Unexpected request /foo');
    }));
    it('should return expectations before definitions', inject([AsyncTestCompleter], (function(async) {
      var url = '/foo';
      xhr.when(url, 'when');
      xhr.expect(url, 'expect');
      expectResponse(xhr.get(url), url, 'expect');
      expectResponse(xhr.get(url), url, 'when', (function() {
        return async.done();
      }));
      xhr.flush();
    })));
    it('should throw when there is no definitions or expectations', (function() {
      xhr.get('/foo');
      expect((function() {
        xhr.flush();
      })).toThrowError('Unexpected request /foo');
    }));
    it('should throw when flush is called without any pending requests', (function() {
      expect((function() {
        xhr.flush();
      })).toThrowError('No pending requests to flush');
    }));
    it('should throw on unstatisfied expectations', (function() {
      xhr.expect('/foo', 'bar');
      xhr.when('/bar', 'foo');
      xhr.get('/bar');
      expect((function() {
        xhr.flush();
      })).toThrowError('Unsatisfied requests: /foo');
    }));
  }));
}
//# sourceMappingURL=xhr_mock_spec.js.map

//# sourceMappingURL=./xhr_mock_spec.map
 main();