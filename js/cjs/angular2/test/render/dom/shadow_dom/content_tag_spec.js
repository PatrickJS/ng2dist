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
    $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_content_95_tag__,
    $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_light_95_dom__;
var $__0 = ($__angular2_47_test_95_lib__ = require("angular2/test_lib"), $__angular2_47_test_95_lib__ && $__angular2_47_test_95_lib__.__esModule && $__angular2_47_test_95_lib__ || {default: $__angular2_47_test_95_lib__}),
    describe = $__0.describe,
    beforeEach = $__0.beforeEach,
    it = $__0.it,
    expect = $__0.expect,
    ddescribe = $__0.ddescribe,
    iit = $__0.iit,
    SpyObject = $__0.SpyObject,
    el = $__0.el,
    proxy = $__0.proxy;
var IMPLEMENTS = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}).IMPLEMENTS;
var DOM = ($__angular2_47_src_47_dom_47_dom_95_adapter__ = require("angular2/src/dom/dom_adapter"), $__angular2_47_src_47_dom_47_dom_95_adapter__ && $__angular2_47_src_47_dom_47_dom_95_adapter__.__esModule && $__angular2_47_src_47_dom_47_dom_95_adapter__ || {default: $__angular2_47_src_47_dom_47_dom_95_adapter__}).DOM;
var Content = ($__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_content_95_tag__ = require("angular2/src/render/dom/shadow_dom/content_tag"), $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_content_95_tag__ && $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_content_95_tag__.__esModule && $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_content_95_tag__ || {default: $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_content_95_tag__}).Content;
var LightDom = ($__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_light_95_dom__ = require("angular2/src/render/dom/shadow_dom/light_dom"), $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_light_95_dom__ && $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_light_95_dom__.__esModule && $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_light_95_dom__ || {default: $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_light_95_dom__}).LightDom;
var DummyLightDom = function DummyLightDom() {
  $traceurRuntime.superConstructor($DummyLightDom).apply(this, arguments);
  ;
};
var $DummyLightDom = DummyLightDom;
($traceurRuntime.createClass)(DummyLightDom, {noSuchMethod: function(m) {
    $traceurRuntime.superGet(this, $DummyLightDom.prototype, "noSuchMethod").call(this, m);
  }}, {}, SpyObject);
Object.defineProperty(DummyLightDom, "annotations", {get: function() {
    return [new proxy, new IMPLEMENTS(LightDom)];
  }});
var _scriptStart = "<script start=\"\"></script>";
var _scriptEnd = "<script end=\"\"></script>";
function main() {
  describe('Content', function() {
    var parent;
    var content;
    beforeEach((function() {
      parent = el(("<div>" + _scriptStart + _scriptEnd));
      content = DOM.firstChild(parent);
    }));
    it("should insert the nodes", (function() {
      var c = new Content(content, '');
      c.hydrate(null);
      c.insert([el("<a></a>"), el("<b></b>")]);
      expect(DOM.getInnerHTML(parent)).toEqual((_scriptStart + "<a></a><b></b>" + _scriptEnd));
    }));
    it("should remove the nodes from the previous insertion", (function() {
      var c = new Content(content, '');
      c.hydrate(null);
      c.insert([el("<a></a>")]);
      c.insert([el("<b></b>")]);
      expect(DOM.getInnerHTML(parent)).toEqual((_scriptStart + "<b></b>" + _scriptEnd));
    }));
    it("should insert empty list", (function() {
      var c = new Content(content, '');
      c.hydrate(null);
      c.insert([el("<a></a>")]);
      c.insert([]);
      expect(DOM.getInnerHTML(parent)).toEqual(("" + _scriptStart + _scriptEnd));
    }));
  });
}
//# sourceMappingURL=content_tag_spec.js.map

//# sourceMappingURL=./content_tag_spec.map
 main();