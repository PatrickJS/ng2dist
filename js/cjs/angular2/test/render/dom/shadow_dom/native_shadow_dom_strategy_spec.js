'use strict'; var parse5Adapter = require('angular2/src/dom/parse5_adapter'); parse5Adapter.Parse5DomAdapter.makeCurrent();
Object.defineProperties(module.exports, {
  main: {get: function() {
      return main;
    }},
  __esModule: {value: true}
});
var $__angular2_47_test_95_lib__,
    $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_native_95_shadow_95_dom_95_strategy__,
    $__angular2_47_src_47_services_47_url_95_resolver__,
    $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_style_95_url_95_resolver__,
    $__angular2_47_src_47_render_47_dom_47_view_47_view__,
    $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_dom_47_dom_95_adapter__;
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
var NativeShadowDomStrategy = ($__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_native_95_shadow_95_dom_95_strategy__ = require("angular2/src/render/dom/shadow_dom/native_shadow_dom_strategy"), $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_native_95_shadow_95_dom_95_strategy__ && $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_native_95_shadow_95_dom_95_strategy__.__esModule && $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_native_95_shadow_95_dom_95_strategy__ || {default: $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_native_95_shadow_95_dom_95_strategy__}).NativeShadowDomStrategy;
var UrlResolver = ($__angular2_47_src_47_services_47_url_95_resolver__ = require("angular2/src/services/url_resolver"), $__angular2_47_src_47_services_47_url_95_resolver__ && $__angular2_47_src_47_services_47_url_95_resolver__.__esModule && $__angular2_47_src_47_services_47_url_95_resolver__ || {default: $__angular2_47_src_47_services_47_url_95_resolver__}).UrlResolver;
var StyleUrlResolver = ($__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_style_95_url_95_resolver__ = require("angular2/src/render/dom/shadow_dom/style_url_resolver"), $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_style_95_url_95_resolver__ && $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_style_95_url_95_resolver__.__esModule && $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_style_95_url_95_resolver__ || {default: $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_style_95_url_95_resolver__}).StyleUrlResolver;
var RenderView = ($__angular2_47_src_47_render_47_dom_47_view_47_view__ = require("angular2/src/render/dom/view/view"), $__angular2_47_src_47_render_47_dom_47_view_47_view__ && $__angular2_47_src_47_render_47_dom_47_view_47_view__.__esModule && $__angular2_47_src_47_render_47_dom_47_view_47_view__ || {default: $__angular2_47_src_47_render_47_dom_47_view_47_view__}).RenderView;
var $__5 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    isPresent = $__5.isPresent,
    isBlank = $__5.isBlank;
var DOM = ($__angular2_47_src_47_dom_47_dom_95_adapter__ = require("angular2/src/dom/dom_adapter"), $__angular2_47_src_47_dom_47_dom_95_adapter__ && $__angular2_47_src_47_dom_47_dom_95_adapter__.__esModule && $__angular2_47_src_47_dom_47_dom_95_adapter__ || {default: $__angular2_47_src_47_dom_47_dom_95_adapter__}).DOM;
function main() {
  var strategy;
  describe('NativeShadowDomStrategy', (function() {
    beforeEach((function() {
      var urlResolver = new UrlResolver();
      var styleUrlResolver = new StyleUrlResolver(urlResolver);
      strategy = new NativeShadowDomStrategy(styleUrlResolver);
    }));
    it('should attach the view nodes to the shadow root', (function() {
      var host = el('<div><span>original content</span></div>');
      var nodes = el('<div>view</div>');
      var view = new RenderView(null, [nodes], [], [], [], [], null);
      strategy.attachTemplate(host, view);
      var shadowRoot = DOM.getShadowRoot(host);
      expect(isPresent(shadowRoot)).toBeTruthy();
      expect(shadowRoot).toHaveText('view');
    }));
    it('should rewrite style urls', (function() {
      var styleElement = el('<style>.foo {background-image: url("img.jpg");}</style>');
      strategy.processStyleElement('someComponent', 'http://base', styleElement);
      expect(styleElement).toHaveText(".foo {" + "background-image: url('http://base/img.jpg');" + "}");
    }));
    it('should not inline import rules', (function() {
      var styleElement = el('<style>@import "other.css";</style>');
      strategy.processStyleElement('someComponent', 'http://base', styleElement);
      expect(styleElement).toHaveText("@import 'http://base/other.css';");
    }));
  }));
}
//# sourceMappingURL=native_shadow_dom_strategy_spec.js.map

//# sourceMappingURL=./native_shadow_dom_strategy_spec.map
 main();