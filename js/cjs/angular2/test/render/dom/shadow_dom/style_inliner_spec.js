'use strict'; var parse5Adapter = require('angular2/src/dom/parse5_adapter'); parse5Adapter.Parse5DomAdapter.makeCurrent();
Object.defineProperties(module.exports, {
  main: {get: function() {
      return main;
    }},
  __esModule: {value: true}
});
var $__angular2_47_test_95_lib__,
    $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_style_95_inliner__,
    $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_facade_47_async__,
    $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_src_47_services_47_xhr__,
    $__angular2_47_di__;
var $__0 = ($__angular2_47_test_95_lib__ = require("angular2/test_lib"), $__angular2_47_test_95_lib__ && $__angular2_47_test_95_lib__.__esModule && $__angular2_47_test_95_lib__ || {default: $__angular2_47_test_95_lib__}),
    AsyncTestCompleter = $__0.AsyncTestCompleter,
    beforeEach = $__0.beforeEach,
    beforeEachBindings = $__0.beforeEachBindings,
    ddescribe = $__0.ddescribe,
    describe = $__0.describe,
    el = $__0.el,
    expect = $__0.expect,
    iit = $__0.iit,
    inject = $__0.inject,
    it = $__0.it,
    xit = $__0.xit;
var StyleInliner = ($__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_style_95_inliner__ = require("angular2/src/render/dom/shadow_dom/style_inliner"), $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_style_95_inliner__ && $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_style_95_inliner__.__esModule && $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_style_95_inliner__ || {default: $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_style_95_inliner__}).StyleInliner;
var isBlank = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}).isBlank;
var $__3 = ($__angular2_47_src_47_facade_47_async__ = require("angular2/src/facade/async"), $__angular2_47_src_47_facade_47_async__ && $__angular2_47_src_47_facade_47_async__.__esModule && $__angular2_47_src_47_facade_47_async__ || {default: $__angular2_47_src_47_facade_47_async__}),
    Promise = $__3.Promise,
    PromiseWrapper = $__3.PromiseWrapper;
var $__4 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    Map = $__4.Map,
    MapWrapper = $__4.MapWrapper;
var XHR = ($__angular2_47_src_47_services_47_xhr__ = require("angular2/src/services/xhr"), $__angular2_47_src_47_services_47_xhr__ && $__angular2_47_src_47_services_47_xhr__.__esModule && $__angular2_47_src_47_services_47_xhr__ || {default: $__angular2_47_src_47_services_47_xhr__}).XHR;
var bind = ($__angular2_47_di__ = require("angular2/di"), $__angular2_47_di__ && $__angular2_47_di__.__esModule && $__angular2_47_di__ || {default: $__angular2_47_di__}).bind;
function main() {
  describe('StyleInliner', (function() {
    beforeEachBindings((function() {
      return [bind(XHR).toClass(FakeXHR)];
    }));
    describe('loading', (function() {
      it('should return a string when there is no import statement', inject([StyleInliner], (function(inliner) {
        var css = '.main {}';
        var loadedCss = inliner.inlineImports(css, 'http://base');
        expect(loadedCss).not.toBePromise();
        expect(loadedCss).toEqual(css);
      })));
      it('should inline @import rules', inject([XHR, StyleInliner, AsyncTestCompleter], (function(xhr, inliner, async) {
        xhr.reply('http://base/one.css', '.one {}');
        var css = '@import url("one.css");.main {}';
        var loadedCss = inliner.inlineImports(css, 'http://base');
        expect(loadedCss).toBePromise();
        PromiseWrapper.then(loadedCss, function(css) {
          expect(css).toEqual('.one {}\n.main {}');
          async.done();
        }, function(e) {
          throw 'fail;';
        });
      })));
      it('should support url([unquoted url]) in @import rules', inject([XHR, StyleInliner, AsyncTestCompleter], (function(xhr, inliner, async) {
        xhr.reply('http://base/one.css', '.one {}');
        var css = '@import url(one.css);.main {}';
        var loadedCss = inliner.inlineImports(css, 'http://base');
        expect(loadedCss).toBePromise();
        PromiseWrapper.then(loadedCss, function(css) {
          expect(css).toEqual('.one {}\n.main {}');
          async.done();
        }, function(e) {
          throw 'fail;';
        });
      })));
      it('should handle @import error gracefuly', inject([StyleInliner, AsyncTestCompleter], (function(inliner, async) {
        var css = '@import "one.css";.main {}';
        var loadedCss = inliner.inlineImports(css, 'http://base');
        expect(loadedCss).toBePromise();
        PromiseWrapper.then(loadedCss, function(css) {
          expect(css).toEqual('/* failed to import http://base/one.css */\n.main {}');
          async.done();
        }, function(e) {
          throw 'fail;';
        });
      })));
      it('should inline multiple @import rules', inject([XHR, StyleInliner, AsyncTestCompleter], (function(xhr, inliner, async) {
        xhr.reply('http://base/one.css', '.one {}');
        xhr.reply('http://base/two.css', '.two {}');
        var css = '@import "one.css";@import "two.css";.main {}';
        var loadedCss = inliner.inlineImports(css, 'http://base');
        expect(loadedCss).toBePromise();
        PromiseWrapper.then(loadedCss, function(css) {
          expect(css).toEqual('.one {}\n.two {}\n.main {}');
          async.done();
        }, function(e) {
          throw 'fail;';
        });
      })));
      it('should inline nested @import rules', inject([XHR, StyleInliner, AsyncTestCompleter], (function(xhr, inliner, async) {
        xhr.reply('http://base/one.css', '@import "two.css";.one {}');
        xhr.reply('http://base/two.css', '.two {}');
        var css = '@import "one.css";.main {}';
        var loadedCss = inliner.inlineImports(css, 'http://base/');
        expect(loadedCss).toBePromise();
        PromiseWrapper.then(loadedCss, function(css) {
          expect(css).toEqual('.two {}\n.one {}\n.main {}');
          async.done();
        }, function(e) {
          throw 'fail;';
        });
      })));
      it('should handle circular dependencies gracefuly', inject([XHR, StyleInliner, AsyncTestCompleter], (function(xhr, inliner, async) {
        xhr.reply('http://base/one.css', '@import "two.css";.one {}');
        xhr.reply('http://base/two.css', '@import "one.css";.two {}');
        var css = '@import "one.css";.main {}';
        var loadedCss = inliner.inlineImports(css, 'http://base/');
        expect(loadedCss).toBePromise();
        PromiseWrapper.then(loadedCss, function(css) {
          expect(css).toEqual('.two {}\n.one {}\n.main {}');
          async.done();
        }, function(e) {
          throw 'fail;';
        });
      })));
      it('should handle invalid @import fracefuly', inject([StyleInliner, AsyncTestCompleter], (function(inliner, async) {
        var css = '@import one.css;.main {}';
        var loadedCss = inliner.inlineImports(css, 'http://base/');
        expect(loadedCss).toBePromise();
        PromiseWrapper.then(loadedCss, function(css) {
          expect(css).toEqual('/* Invalid import rule: "@import one.css;" */.main {}');
          async.done();
        }, function(e) {
          throw 'fail;';
        });
      })));
    }));
    describe('media query', (function() {
      it('should wrap inlined content in media query', inject([XHR, StyleInliner, AsyncTestCompleter], (function(xhr, inliner, async) {
        xhr.reply('http://base/one.css', '.one {}');
        var css = '@import "one.css" (min-width: 700px) and (orientation: landscape);';
        var loadedCss = inliner.inlineImports(css, 'http://base/');
        expect(loadedCss).toBePromise();
        PromiseWrapper.then(loadedCss, function(css) {
          expect(css).toEqual('@media (min-width: 700px) and (orientation: landscape) {\n.one {}\n}\n');
          async.done();
        }, function(e) {
          throw 'fail;';
        });
      })));
    }));
    describe('url rewritting', (function() {
      it('should rewrite url in inlined content', inject([XHR, StyleInliner, AsyncTestCompleter], (function(xhr, inliner, async) {
        xhr.reply('http://base/one.css', '@import "./nested/two.css";.one {background-image: url("one.jpg");}');
        xhr.reply('http://base/nested/two.css', '.two {background-image: url("../img/two.jpg");}');
        var css = '@import "one.css";';
        var loadedCss = inliner.inlineImports(css, 'http://base/');
        expect(loadedCss).toBePromise();
        PromiseWrapper.then(loadedCss, function(css) {
          expect(css).toEqual(".two {background-image: url('http://base/img/two.jpg');}\n" + ".one {background-image: url('http://base/one.jpg');}\n");
          async.done();
        }, function(e) {
          throw 'fail;';
        });
      })));
    }));
  }));
}
var FakeXHR = function FakeXHR() {
  $traceurRuntime.superConstructor($FakeXHR).call(this);
  this._responses = MapWrapper.create();
};
var $FakeXHR = FakeXHR;
($traceurRuntime.createClass)(FakeXHR, {
  get: function(url) {
    var response = MapWrapper.get(this._responses, url);
    if (isBlank(response)) {
      return PromiseWrapper.reject('xhr error');
    }
    return PromiseWrapper.resolve(response);
  },
  reply: function(url, response) {
    MapWrapper.set(this._responses, url, response);
  }
}, {}, XHR);
Object.defineProperty(FakeXHR.prototype.get, "parameters", {get: function() {
    return [[$traceurRuntime.type.string]];
  }});
Object.defineProperty(FakeXHR.prototype.reply, "parameters", {get: function() {
    return [[$traceurRuntime.type.string], [$traceurRuntime.type.string]];
  }});
//# sourceMappingURL=style_inliner_spec.js.map

//# sourceMappingURL=./style_inliner_spec.map
 main();