'use strict'; var parse5Adapter = require('angular2/src/dom/parse5_adapter'); parse5Adapter.Parse5DomAdapter.makeCurrent();
Object.defineProperties(module.exports, {
  main: {get: function() {
      return main;
    }},
  __esModule: {value: true}
});
var $__angular2_47_test_95_lib__,
    $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_shadow_95_css__,
    $__angular2_47_src_47_facade_47_lang__;
var $__0 = ($__angular2_47_test_95_lib__ = require("angular2/test_lib"), $__angular2_47_test_95_lib__ && $__angular2_47_test_95_lib__.__esModule && $__angular2_47_test_95_lib__ || {default: $__angular2_47_test_95_lib__}),
    describe = $__0.describe,
    beforeEach = $__0.beforeEach,
    it = $__0.it,
    expect = $__0.expect,
    ddescribe = $__0.ddescribe,
    iit = $__0.iit,
    SpyObject = $__0.SpyObject,
    el = $__0.el;
var ShadowCss = ($__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_shadow_95_css__ = require("angular2/src/render/dom/shadow_dom/shadow_css"), $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_shadow_95_css__ && $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_shadow_95_css__.__esModule && $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_shadow_95_css__ || {default: $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_shadow_95_css__}).ShadowCss;
var $__2 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    RegExpWrapper = $__2.RegExpWrapper,
    StringWrapper = $__2.StringWrapper;
function main() {
  describe('ShadowCss', function() {
    function s(css, contentAttr) {
      var hostAttr = arguments[2] !== (void 0) ? arguments[2] : '';
      var shadowCss = new ShadowCss();
      var shim = shadowCss.shimCssText(css, contentAttr, hostAttr);
      var nlRegexp = RegExpWrapper.create('\\n');
      return StringWrapper.replaceAll(shim, nlRegexp, '');
    }
    Object.defineProperty(s, "parameters", {get: function() {
        return [[$traceurRuntime.type.string], [$traceurRuntime.type.string], [$traceurRuntime.type.string]];
      }});
    it('should handle empty string', (function() {
      expect(s('', 'a')).toEqual('');
    }));
    it('should add an attribute to every rule', (function() {
      var css = 'one {color: red;}two {color: red;}';
      var expected = 'one[a] {color: red;}two[a] {color: red;}';
      expect(s(css, 'a')).toEqual(expected);
    }));
    it('should hanlde invalid css', (function() {
      var css = 'one {color: red;}garbage';
      var expected = 'one[a] {color: red;}';
      expect(s(css, 'a')).toEqual(expected);
    }));
    it('should add an attribute to every selector', (function() {
      var css = 'one, two {color: red;}';
      var expected = 'one[a], two[a] {color: red;}';
      expect(s(css, 'a')).toEqual(expected);
    }));
    it('should handle media rules', (function() {
      var css = '@media screen and (max-width: 800px) {div {font-size: 50px;}}';
      var expected = '@media screen and (max-width: 800px) {div[a] {font-size: 50px;}}';
      expect(s(css, 'a')).toEqual(expected);
    }));
    it('should handle media rules with simple rules', (function() {
      var css = '@media screen and (max-width: 800px) {div {font-size: 50px;}} div {}';
      var expected = '@media screen and (max-width: 800px) {div[a] {font-size: 50px;}}div[a] {}';
      expect(s(css, 'a')).toEqual(expected);
    }));
    it('should handle complicated selectors', (function() {
      expect(s('one::before {}', 'a')).toEqual('one[a]::before {}');
      expect(s('one two {}', 'a')).toEqual('one[a] two[a] {}');
      expect(s('one>two {}', 'a')).toEqual('one[a] > two[a] {}');
      expect(s('one+two {}', 'a')).toEqual('one[a] + two[a] {}');
      expect(s('one~two {}', 'a')).toEqual('one[a] ~ two[a] {}');
      expect(s('.one.two > three {}', 'a')).toEqual('.one.two[a] > three[a] {}');
      expect(s('one[attr="value"] {}', 'a')).toEqual('one[attr="value"][a] {}');
      expect(s('one[attr=value] {}', 'a')).toEqual('one[attr="value"][a] {}');
      expect(s('one[attr^="value"] {}', 'a')).toEqual('one[attr^="value"][a] {}');
      expect(s('one[attr$="value"] {}', 'a')).toEqual('one[attr$="value"][a] {}');
      expect(s('one[attr*="value"] {}', 'a')).toEqual('one[attr*="value"][a] {}');
      expect(s('one[attr|="value"] {}', 'a')).toEqual('one[attr|="value"][a] {}');
      expect(s('one[attr] {}', 'a')).toEqual('one[attr][a] {}');
      expect(s('[is="one"] {}', 'a')).toEqual('[is="one"][a] {}');
    }));
    it('should handle :host', (function() {
      expect(s(':host {}', 'a', 'a-host')).toEqual('[a-host] {}');
      expect(s(':host(.x,.y) {}', 'a', 'a-host')).toEqual('[a-host].x, [a-host].y {}');
      expect(s(':host(.x,.y) > .z {}', 'a', 'a-host')).toEqual('[a-host].x > .z, [a-host].y > .z {}');
    }));
    it('should handle :host-context', (function() {
      expect(s(':host-context(.x) {}', 'a', 'a-host')).toEqual('[a-host].x, .x [a-host] {}');
      expect(s(':host-context(.x) > .y {}', 'a', 'a-host')).toEqual('[a-host].x > .y, .x [a-host] > .y {}');
    }));
    it('should support polyfill-next-selector', (function() {
      var css = s("polyfill-next-selector {content: 'x > y'} z {}", 'a');
      expect(css).toEqual('x[a] > y[a] {}');
      css = s('polyfill-next-selector {content: "x > y"} z {}', 'a');
      expect(css).toEqual('x[a] > y[a] {}');
    }));
    it('should support polyfill-unscoped-rule', (function() {
      var css = s("polyfill-unscoped-rule {content: '#menu > .bar';background: blue;}", 'a');
      expect(StringWrapper.contains(css, '#menu > .bar {;background: blue;}')).toBeTruthy();
      css = s('polyfill-unscoped-rule {content: "#menu > .bar";background: blue;}', 'a');
      expect(StringWrapper.contains(css, '#menu > .bar {;background: blue;}')).toBeTruthy();
    }));
    it('should support polyfill-rule', (function() {
      var css = s("polyfill-rule {content: ':host.foo .bar';background: blue;}", 'a', 'a-host');
      expect(css).toEqual('[a-host].foo .bar {background: blue;}');
      css = s('polyfill-rule {content: ":host.foo .bar";background: blue;}', 'a', 'a-host');
      expect(css).toEqual('[a-host].foo .bar {background: blue;}');
    }));
    it('should handle ::shadow', (function() {
      var css = s('x::shadow > y {}', 'a');
      expect(css).toEqual('x[a] > y[a] {}');
    }));
    it('should handle /deep/', (function() {
      var css = s('x /deep/ y {}', 'a');
      expect(css).toEqual('x[a] y[a] {}');
    }));
    it('should handle >>>', (function() {
      var css = s('x >>> y {}', 'a');
      expect(css).toEqual('x[a] y[a] {}');
    }));
  });
}
//# sourceMappingURL=shadow_css_spec.js.map

//# sourceMappingURL=./shadow_css_spec.map
 main();