'use strict'; var parse5Adapter = require('angular2/src/dom/parse5_adapter'); parse5Adapter.Parse5DomAdapter.makeCurrent();
Object.defineProperties(module.exports, {
  main: {get: function() {
      return main;
    }},
  __esModule: {value: true}
});
var $__angular2_47_test_95_lib__,
    $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_src_47_dom_47_dom_95_adapter__,
    $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_content_95_tag__,
    $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_light_95_dom__,
    $__angular2_47_src_47_render_47_dom_47_view_47_view__,
    $__angular2_47_src_47_render_47_dom_47_view_47_view_95_container__;
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
var $__1 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    IMPLEMENTS = $__1.IMPLEMENTS,
    isBlank = $__1.isBlank,
    isPresent = $__1.isPresent;
var $__2 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    ListWrapper = $__2.ListWrapper,
    MapWrapper = $__2.MapWrapper;
var DOM = ($__angular2_47_src_47_dom_47_dom_95_adapter__ = require("angular2/src/dom/dom_adapter"), $__angular2_47_src_47_dom_47_dom_95_adapter__ && $__angular2_47_src_47_dom_47_dom_95_adapter__.__esModule && $__angular2_47_src_47_dom_47_dom_95_adapter__ || {default: $__angular2_47_src_47_dom_47_dom_95_adapter__}).DOM;
var Content = ($__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_content_95_tag__ = require("angular2/src/render/dom/shadow_dom/content_tag"), $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_content_95_tag__ && $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_content_95_tag__.__esModule && $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_content_95_tag__ || {default: $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_content_95_tag__}).Content;
var LightDom = ($__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_light_95_dom__ = require("angular2/src/render/dom/shadow_dom/light_dom"), $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_light_95_dom__ && $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_light_95_dom__.__esModule && $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_light_95_dom__ || {default: $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_light_95_dom__}).LightDom;
var RenderView = ($__angular2_47_src_47_render_47_dom_47_view_47_view__ = require("angular2/src/render/dom/view/view"), $__angular2_47_src_47_render_47_dom_47_view_47_view__ && $__angular2_47_src_47_render_47_dom_47_view_47_view__.__esModule && $__angular2_47_src_47_render_47_dom_47_view_47_view__ || {default: $__angular2_47_src_47_render_47_dom_47_view_47_view__}).RenderView;
var ViewContainer = ($__angular2_47_src_47_render_47_dom_47_view_47_view_95_container__ = require("angular2/src/render/dom/view/view_container"), $__angular2_47_src_47_render_47_dom_47_view_47_view_95_container__ && $__angular2_47_src_47_render_47_dom_47_view_47_view_95_container__.__esModule && $__angular2_47_src_47_render_47_dom_47_view_47_view_95_container__ || {default: $__angular2_47_src_47_render_47_dom_47_view_47_view_95_container__}).ViewContainer;
var FakeView = function FakeView() {
  var containers = arguments[0] !== (void 0) ? arguments[0] : null;
  var $__8 = this;
  this.contentTags = [];
  this.viewContainers = [];
  if (isPresent(containers)) {
    ListWrapper.forEach(containers, (function(c) {
      if (c instanceof FakeContentTag) {
        ListWrapper.push($__8.contentTags, c);
      } else {
        ListWrapper.push($__8.contentTags, null);
      }
      if (c instanceof FakeViewContainer) {
        ListWrapper.push($__8.viewContainers, c);
      } else {
        ListWrapper.push($__8.viewContainers, null);
      }
    }));
  }
};
var $FakeView = FakeView;
($traceurRuntime.createClass)(FakeView, {noSuchMethod: function(i) {
    $traceurRuntime.superGet(this, $FakeView.prototype, "noSuchMethod").call(this, i);
  }}, {});
Object.defineProperty(FakeView, "annotations", {get: function() {
    return [new proxy, new IMPLEMENTS(RenderView)];
  }});
var FakeViewContainer = function FakeViewContainer(templateEl) {
  var nodes = arguments[1] !== (void 0) ? arguments[1] : null;
  var views = arguments[2] !== (void 0) ? arguments[2] : null;
  this.templateElement = templateEl;
  this._nodes = nodes;
  this._contentTagContainers = views;
};
var $FakeViewContainer = FakeViewContainer;
($traceurRuntime.createClass)(FakeViewContainer, {
  nodes: function() {
    return this._nodes;
  },
  contentTagContainers: function() {
    return this._contentTagContainers;
  },
  noSuchMethod: function(i) {
    $traceurRuntime.superGet(this, $FakeViewContainer.prototype, "noSuchMethod").call(this, i);
  }
}, {});
Object.defineProperty(FakeViewContainer, "annotations", {get: function() {
    return [new proxy, new IMPLEMENTS(ViewContainer)];
  }});
var FakeContentTag = function FakeContentTag(contentEl) {
  var select = arguments[1] !== (void 0) ? arguments[1] : '';
  var nodes = arguments[2] !== (void 0) ? arguments[2] : null;
  this.contentStartElement = contentEl;
  this.select = select;
  this._nodes = nodes;
};
var $FakeContentTag = FakeContentTag;
($traceurRuntime.createClass)(FakeContentTag, {
  insert: function(nodes) {
    this._nodes = ListWrapper.clone(nodes);
  },
  nodes: function() {
    return this._nodes;
  },
  noSuchMethod: function(i) {
    $traceurRuntime.superGet(this, $FakeContentTag.prototype, "noSuchMethod").call(this, i);
  }
}, {});
Object.defineProperty(FakeContentTag, "annotations", {get: function() {
    return [new proxy, new IMPLEMENTS(Content)];
  }});
function main() {
  describe('LightDom', function() {
    var lightDomView;
    beforeEach((function() {
      lightDomView = new FakeView();
    }));
    describe("contentTags", (function() {
      it("should collect content tags from element injectors", (function() {
        var tag = new FakeContentTag(el('<script></script>'));
        var shadowDomView = new FakeView([tag]);
        var lightDom = new LightDom(lightDomView, shadowDomView, el("<div></div>"));
        expect(lightDom.contentTags()).toEqual([tag]);
      }));
      it("should collect content tags from ViewContainers", (function() {
        var tag = new FakeContentTag(el('<script></script>'));
        var vc = new FakeViewContainer(null, null, [new FakeView([tag])]);
        var shadowDomView = new FakeView([vc]);
        var lightDom = new LightDom(lightDomView, shadowDomView, el("<div></div>"));
        expect(lightDom.contentTags()).toEqual([tag]);
      }));
    }));
    describe("expandedDomNodes", (function() {
      it("should contain root nodes", (function() {
        var lightDomEl = el("<div><a></a></div>");
        var lightDom = new LightDom(lightDomView, new FakeView(), lightDomEl);
        expect(toHtml(lightDom.expandedDomNodes())).toEqual(["<a></a>"]);
      }));
      it("should include view container nodes", (function() {
        var lightDomEl = el("<div><template></template></div>");
        var lightDom = new LightDom(new FakeView([new FakeViewContainer(DOM.firstChild(lightDomEl), [el('<a></a>')])]), null, lightDomEl);
        expect(toHtml(lightDom.expandedDomNodes())).toEqual(["<a></a>"]);
      }));
      it("should include content nodes", (function() {
        var lightDomEl = el("<div><content></content></div>");
        var lightDom = new LightDom(new FakeView([new FakeContentTag(DOM.firstChild(lightDomEl), '', [el('<a></a>')])]), null, lightDomEl);
        expect(toHtml(lightDom.expandedDomNodes())).toEqual(["<a></a>"]);
      }));
      it("should work when the element injector array contains nulls", (function() {
        var lightDomEl = el("<div><a></a></div>");
        var lightDomView = new FakeView();
        var lightDom = new LightDom(lightDomView, new FakeView(), lightDomEl);
        expect(toHtml(lightDom.expandedDomNodes())).toEqual(["<a></a>"]);
      }));
    }));
    describe("redistribute", (function() {
      it("should redistribute nodes between content tags with select property set", (function() {
        var contentA = new FakeContentTag(null, "a");
        var contentB = new FakeContentTag(null, "b");
        var lightDomEl = el("<div><a>1</a><b>2</b><a>3</a></div>");
        var lightDom = new LightDom(lightDomView, new FakeView([contentA, contentB]), lightDomEl);
        lightDom.redistribute();
        expect(toHtml(contentA.nodes())).toEqual(["<a>1</a>", "<a>3</a>"]);
        expect(toHtml(contentB.nodes())).toEqual(["<b>2</b>"]);
      }));
      it("should support wildcard content tags", (function() {
        var wildcard = new FakeContentTag(null, '');
        var contentB = new FakeContentTag(null, "b");
        var lightDomEl = el("<div><a>1</a><b>2</b><a>3</a></div>");
        var lightDom = new LightDom(lightDomView, new FakeView([wildcard, contentB]), lightDomEl);
        lightDom.redistribute();
        expect(toHtml(wildcard.nodes())).toEqual(["<a>1</a>", "<b>2</b>", "<a>3</a>"]);
        expect(toHtml(contentB.nodes())).toEqual([]);
      }));
    }));
  });
}
function toHtml(nodes) {
  if (isBlank(nodes))
    return [];
  return ListWrapper.map(nodes, DOM.getOuterHTML);
}
//# sourceMappingURL=light_dom_spec.js.map

//# sourceMappingURL=./light_dom_spec.map
 main();