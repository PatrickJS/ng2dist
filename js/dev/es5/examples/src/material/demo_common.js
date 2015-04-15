System.register(["rtts_assert/rtts_assert", "angular2/src/facade/lang", "angular2/src/services/url_resolver", "angular2/src/dom/dom_adapter", "angular2/di", "angular2/src/reflection/reflection_capabilities", "angular2/src/reflection/reflection", "angular2/src/dom/browser_adapter"], function($__export) {
  "use strict";
  var assert,
      IMPLEMENTS,
      print,
      UrlResolver,
      isPresent,
      isBlank,
      RegExpWrapper,
      StringWrapper,
      BaseException,
      DOM,
      Injectable,
      ReflectionCapabilities,
      reflector,
      BrowserDomAdapter,
      DemoUrlResolver,
      _schemeRe;
  function commonDemoSetup() {
    BrowserDomAdapter.makeCurrent();
    reflector.reflectionCapabilities = new ReflectionCapabilities();
  }
  function _isInPubServe() {
    try {
      int.parse('123');
      print('>> Running in Dart');
      return assert.returnType((true), assert.type.boolean);
    } catch (_) {
      print('>> Running in JS');
      return assert.returnType((false), assert.type.boolean);
    }
  }
  $__export("commonDemoSetup", commonDemoSetup);
  return {
    setters: [function($__m) {
      assert = $__m.assert;
    }, function($__m) {
      IMPLEMENTS = $__m.IMPLEMENTS;
      print = $__m.print;
      isPresent = $__m.isPresent;
      isBlank = $__m.isBlank;
      RegExpWrapper = $__m.RegExpWrapper;
      StringWrapper = $__m.StringWrapper;
      BaseException = $__m.BaseException;
    }, function($__m) {
      UrlResolver = $__m.UrlResolver;
    }, function($__m) {
      DOM = $__m.DOM;
    }, function($__m) {
      Injectable = $__m.Injectable;
    }, function($__m) {
      ReflectionCapabilities = $__m.ReflectionCapabilities;
    }, function($__m) {
      reflector = $__m.reflector;
    }, function($__m) {
      BrowserDomAdapter = $__m.BrowserDomAdapter;
    }],
    execute: function() {
      DemoUrlResolver = $__export("DemoUrlResolver", (function() {
        var DemoUrlResolver = function DemoUrlResolver() {
          if (isBlank(UrlResolver.a)) {
            UrlResolver.a = DOM.createElement('a');
          }
          this.isInPubServe = _isInPubServe();
        };
        return ($traceurRuntime.createClass)(DemoUrlResolver, {resolve: function(baseUrl, url) {
            assert.argumentTypes(baseUrl, assert.type.string, url, assert.type.string);
            if (isBlank(baseUrl)) {
              DOM.resolveAndSetHref(UrlResolver.a, url, null);
              return assert.returnType((DOM.getHref(UrlResolver.a)), assert.type.string);
            }
            if (isBlank(url) || url == '')
              return assert.returnType((baseUrl), assert.type.string);
            if (url[0] == '/') {
              throw new BaseException(("Could not resolve the url " + url + " from " + baseUrl));
            }
            var m = RegExpWrapper.firstMatch(_schemeRe, url);
            if (isPresent(m[1])) {
              return assert.returnType((url), assert.type.string);
            }
            if (StringWrapper.startsWith(url, './')) {
              return assert.returnType(((baseUrl + "/" + url)), assert.type.string);
            }
            if (this.isInPubServe) {
              return assert.returnType((("/packages/" + url)), assert.type.string);
            } else {
              return assert.returnType((("/" + url)), assert.type.string);
            }
          }}, {});
      }()));
      Object.defineProperty(DemoUrlResolver, "annotations", {get: function() {
          return [new Injectable(), new IMPLEMENTS(UrlResolver)];
        }});
      Object.defineProperty(DemoUrlResolver.prototype.resolve, "parameters", {get: function() {
          return [[assert.type.string], [assert.type.string]];
        }});
      _schemeRe = RegExpWrapper.create('^([^:/?#]+:)?');
    }
  };
});
//# sourceMappingURL=demo_common.es6.map

//# sourceMappingURL=./demo_common.js.map