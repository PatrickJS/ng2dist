'use strict'; var parse5Adapter = require('angular2/src/dom/parse5_adapter'); parse5Adapter.Parse5DomAdapter.makeCurrent();
Object.defineProperties(module.exports, {
  main: {get: function() {
      return main;
    }},
  __esModule: {value: true}
});
var $__angular2_47_test_95_lib__,
    $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_dom_47_dom_95_adapter__,
    $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_src_47_facade_47_async__,
    $__angular2_47_src_47_services_47_xhr__,
    $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_emulated_95_scoped_95_shadow_95_dom_95_strategy__,
    $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_util__,
    $__angular2_47_src_47_services_47_url_95_resolver__,
    $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_style_95_url_95_resolver__,
    $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_style_95_inliner__,
    $__angular2_47_src_47_render_47_dom_47_view_47_view__;
var $__0 = ($__angular2_47_test_95_lib__ = require("angular2/test_lib"), $__angular2_47_test_95_lib__ && $__angular2_47_test_95_lib__.__esModule && $__angular2_47_test_95_lib__ || {default: $__angular2_47_test_95_lib__}),
    AsyncTestCompleter = $__0.AsyncTestCompleter,
    beforeEach = $__0.beforeEach,
    ddescribe = $__0.ddescribe,
    describe = $__0.describe,
    el = $__0.el,
    expect = $__0.expect,
    iit = $__0.iit,
    inject = $__0.inject,
    it = $__0.it,
    xit = $__0.xit,
    SpyObject = $__0.SpyObject;
var $__1 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    isPresent = $__1.isPresent,
    isBlank = $__1.isBlank;
var DOM = ($__angular2_47_src_47_dom_47_dom_95_adapter__ = require("angular2/src/dom/dom_adapter"), $__angular2_47_src_47_dom_47_dom_95_adapter__ && $__angular2_47_src_47_dom_47_dom_95_adapter__.__esModule && $__angular2_47_src_47_dom_47_dom_95_adapter__ || {default: $__angular2_47_src_47_dom_47_dom_95_adapter__}).DOM;
var $__3 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    Map = $__3.Map,
    MapWrapper = $__3.MapWrapper;
var $__4 = ($__angular2_47_src_47_facade_47_async__ = require("angular2/src/facade/async"), $__angular2_47_src_47_facade_47_async__ && $__angular2_47_src_47_facade_47_async__.__esModule && $__angular2_47_src_47_facade_47_async__ || {default: $__angular2_47_src_47_facade_47_async__}),
    PromiseWrapper = $__4.PromiseWrapper,
    Promise = $__4.Promise;
var XHR = ($__angular2_47_src_47_services_47_xhr__ = require("angular2/src/services/xhr"), $__angular2_47_src_47_services_47_xhr__ && $__angular2_47_src_47_services_47_xhr__.__esModule && $__angular2_47_src_47_services_47_xhr__ || {default: $__angular2_47_src_47_services_47_xhr__}).XHR;
var EmulatedScopedShadowDomStrategy = ($__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_emulated_95_scoped_95_shadow_95_dom_95_strategy__ = require("angular2/src/render/dom/shadow_dom/emulated_scoped_shadow_dom_strategy"), $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_emulated_95_scoped_95_shadow_95_dom_95_strategy__ && $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_emulated_95_scoped_95_shadow_95_dom_95_strategy__.__esModule && $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_emulated_95_scoped_95_shadow_95_dom_95_strategy__ || {default: $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_emulated_95_scoped_95_shadow_95_dom_95_strategy__}).EmulatedScopedShadowDomStrategy;
var resetShadowDomCache = ($__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_util__ = require("angular2/src/render/dom/shadow_dom/util"), $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_util__ && $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_util__.__esModule && $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_util__ || {default: $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_util__}).resetShadowDomCache;
var UrlResolver = ($__angular2_47_src_47_services_47_url_95_resolver__ = require("angular2/src/services/url_resolver"), $__angular2_47_src_47_services_47_url_95_resolver__ && $__angular2_47_src_47_services_47_url_95_resolver__.__esModule && $__angular2_47_src_47_services_47_url_95_resolver__ || {default: $__angular2_47_src_47_services_47_url_95_resolver__}).UrlResolver;
var StyleUrlResolver = ($__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_style_95_url_95_resolver__ = require("angular2/src/render/dom/shadow_dom/style_url_resolver"), $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_style_95_url_95_resolver__ && $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_style_95_url_95_resolver__.__esModule && $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_style_95_url_95_resolver__ || {default: $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_style_95_url_95_resolver__}).StyleUrlResolver;
var StyleInliner = ($__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_style_95_inliner__ = require("angular2/src/render/dom/shadow_dom/style_inliner"), $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_style_95_inliner__ && $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_style_95_inliner__.__esModule && $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_style_95_inliner__ || {default: $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_style_95_inliner__}).StyleInliner;
var RenderView = ($__angular2_47_src_47_render_47_dom_47_view_47_view__ = require("angular2/src/render/dom/view/view"), $__angular2_47_src_47_render_47_dom_47_view_47_view__ && $__angular2_47_src_47_render_47_dom_47_view_47_view__.__esModule && $__angular2_47_src_47_render_47_dom_47_view_47_view__ || {default: $__angular2_47_src_47_render_47_dom_47_view_47_view__}).RenderView;
function main() {
  describe('EmulatedScoped', (function() {
    var xhr,
        styleHost,
        strategy;
    beforeEach((function() {
      var urlResolver = new UrlResolver();
      var styleUrlResolver = new StyleUrlResolver(urlResolver);
      xhr = new FakeXHR();
      var styleInliner = new StyleInliner(xhr, styleUrlResolver, urlResolver);
      styleHost = el('<div></div>');
      strategy = new EmulatedScopedShadowDomStrategy(styleInliner, styleUrlResolver, styleHost);
      resetShadowDomCache();
    }));
    it('should attach the view nodes as child of the host element', (function() {
      var host = el('<div><span>original content</span></div>');
      var nodes = el('<div>view</div>');
      var view = new RenderView(null, [nodes], [], [], [], [], null);
      strategy.attachTemplate(host, view);
      var firstChild = DOM.firstChild(host);
      expect(DOM.tagName(firstChild).toLowerCase()).toEqual('div');
      expect(firstChild).toHaveText('view');
      expect(host).toHaveText('view');
    }));
    it('should rewrite style urls', (function() {
      var styleElement = el('<style>.foo {background-image: url("img.jpg");}</style>');
      strategy.processStyleElement('someComponent', 'http://base', styleElement);
      expect(styleElement).toHaveText(".foo[_ngcontent-0] {\n" + "background-image: url(http://base/img.jpg);\n" + "}");
    }));
    it('should scope styles', (function() {
      var styleElement = el('<style>.foo {} :host {}</style>');
      strategy.processStyleElement('someComponent', 'http://base', styleElement);
      expect(styleElement).toHaveText(".foo[_ngcontent-0] {\n\n}\n\n[_nghost-0] {\n\n}");
    }));
    it('should inline @import rules', inject([AsyncTestCompleter], (function(async) {
      xhr.reply('http://base/one.css', '.one {}');
      var styleElement = el('<style>@import "one.css";</style>');
      var stylePromise = strategy.processStyleElement('someComponent', 'http://base', styleElement);
      expect(stylePromise).toBePromise();
      expect(styleElement).toHaveText('');
      stylePromise.then((function(_) {
        expect(styleElement).toHaveText('.one[_ngcontent-0] {\n\n}');
        async.done();
      }));
    })));
    it('should return the same style given the same component', (function() {
      var styleElement = el('<style>.foo {} :host {}</style>');
      strategy.processStyleElement('someComponent', 'http://base', styleElement);
      var styleElement2 = el('<style>.foo {} :host {}</style>');
      strategy.processStyleElement('someComponent', 'http://base', styleElement2);
      expect(DOM.getText(styleElement)).toEqual(DOM.getText(styleElement2));
    }));
    it('should return different styles given different components', (function() {
      var styleElement = el('<style>.foo {} :host {}</style>');
      strategy.processStyleElement('someComponent1', 'http://base', styleElement);
      var styleElement2 = el('<style>.foo {} :host {}</style>');
      strategy.processStyleElement('someComponent2', 'http://base', styleElement2);
      expect(DOM.getText(styleElement)).not.toEqual(DOM.getText(styleElement2));
    }));
    it('should move the style element to the style host', (function() {
      var compileElement = el('<div><style>.one {}</style></div>');
      var styleElement = DOM.firstChild(compileElement);
      strategy.processStyleElement('someComponent', 'http://base', styleElement);
      expect(compileElement).toHaveText('');
      expect(styleHost).toHaveText('.one[_ngcontent-0] {\n\n}');
    }));
    it('should add an attribute to component elements', (function() {
      var element = el('<div></div>');
      strategy.processElement(null, 'elComponent', element);
      expect(DOM.getAttribute(element, '_nghost-0')).toEqual('');
    }));
    it('should add an attribute to the content elements', (function() {
      var element = el('<div></div>');
      strategy.processElement('hostComponent', null, element);
      expect(DOM.getAttribute(element, '_ngcontent-0')).toEqual('');
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
//# sourceMappingURL=emulated_scoped_shadow_dom_strategy_spec.js.map

//# sourceMappingURL=./emulated_scoped_shadow_dom_strategy_spec.map
 main();