'use strict'; var parse5Adapter = require('angular2/src/dom/parse5_adapter'); parse5Adapter.Parse5DomAdapter.makeCurrent();
Object.defineProperties(module.exports, {
  main: {get: function() {
      return main;
    }},
  __esModule: {value: true}
});
var $__angular2_47_test_95_lib__,
    $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_style_95_url_95_resolver__,
    $__angular2_47_src_47_services_47_url_95_resolver__;
var $__0 = ($__angular2_47_test_95_lib__ = require("angular2/test_lib"), $__angular2_47_test_95_lib__ && $__angular2_47_test_95_lib__.__esModule && $__angular2_47_test_95_lib__ || {default: $__angular2_47_test_95_lib__}),
    describe = $__0.describe,
    it = $__0.it,
    expect = $__0.expect,
    beforeEach = $__0.beforeEach,
    ddescribe = $__0.ddescribe,
    iit = $__0.iit,
    xit = $__0.xit,
    el = $__0.el;
var StyleUrlResolver = ($__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_style_95_url_95_resolver__ = require("angular2/src/render/dom/shadow_dom/style_url_resolver"), $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_style_95_url_95_resolver__ && $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_style_95_url_95_resolver__.__esModule && $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_style_95_url_95_resolver__ || {default: $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_style_95_url_95_resolver__}).StyleUrlResolver;
var UrlResolver = ($__angular2_47_src_47_services_47_url_95_resolver__ = require("angular2/src/services/url_resolver"), $__angular2_47_src_47_services_47_url_95_resolver__ && $__angular2_47_src_47_services_47_url_95_resolver__.__esModule && $__angular2_47_src_47_services_47_url_95_resolver__ || {default: $__angular2_47_src_47_services_47_url_95_resolver__}).UrlResolver;
function main() {
  describe('StyleUrlResolver', (function() {
    it('should resolve "url()" urls', (function() {
      var styleUrlResolver = new StyleUrlResolver(new FakeUrlResolver());
      var css = "\n      .foo {\n        background-image: url(\"double.jpg\");\n        background-image: url('simple.jpg');\n        background-image: url(noquote.jpg);\n      }";
      var expectedCss = "\n      .foo {\n        background-image: url('base/double.jpg');\n        background-image: url('base/simple.jpg');\n        background-image: url('base/noquote.jpg');\n      }";
      var resolvedCss = styleUrlResolver.resolveUrls(css, 'base');
      expect(resolvedCss).toEqual(expectedCss);
    }));
    it('should resolve "@import" urls', (function() {
      var styleUrlResolver = new StyleUrlResolver(new FakeUrlResolver());
      var css = "\n      @import '1.css';\n      @import \"2.css\";\n      ";
      var expectedCss = "\n      @import 'base/1.css';\n      @import 'base/2.css';\n      ";
      var resolvedCss = styleUrlResolver.resolveUrls(css, 'base');
      expect(resolvedCss).toEqual(expectedCss);
    }));
    it('should resolve "@import url()" urls', (function() {
      var styleUrlResolver = new StyleUrlResolver(new FakeUrlResolver());
      var css = "\n      @import url('3.css');\n      @import url(\"4.css\");\n      @import url(5.css);\n      ";
      var expectedCss = "\n      @import url('base/3.css');\n      @import url('base/4.css');\n      @import url('base/5.css');\n      ";
      var resolvedCss = styleUrlResolver.resolveUrls(css, 'base');
      expect(resolvedCss).toEqual(expectedCss);
    }));
    it('should support media query in "@import"', (function() {
      var styleUrlResolver = new StyleUrlResolver(new FakeUrlResolver());
      var css = "\n      @import 'print.css' print;\n      @import url(print.css) print;\n      ";
      var expectedCss = "\n      @import 'base/print.css' print;\n      @import url('base/print.css') print;\n      ";
      var resolvedCss = styleUrlResolver.resolveUrls(css, 'base');
      expect(resolvedCss).toEqual(expectedCss);
    }));
  }));
}
var FakeUrlResolver = function FakeUrlResolver() {
  $traceurRuntime.superConstructor($FakeUrlResolver).apply(this, arguments);
  ;
};
var $FakeUrlResolver = FakeUrlResolver;
($traceurRuntime.createClass)(FakeUrlResolver, {resolve: function(baseUrl, url) {
    return baseUrl + '/' + url;
  }}, {}, UrlResolver);
Object.defineProperty(FakeUrlResolver.prototype.resolve, "parameters", {get: function() {
    return [[$traceurRuntime.type.string], [$traceurRuntime.type.string]];
  }});
//# sourceMappingURL=style_url_resolver_spec.js.map

//# sourceMappingURL=./style_url_resolver_spec.map
 main();