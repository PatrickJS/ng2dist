'use strict'; var parse5Adapter = require('angular2/src/dom/parse5_adapter'); parse5Adapter.Parse5DomAdapter.makeCurrent();
Object.defineProperties(module.exports, {
  main: {get: function() {
      return main;
    }},
  __esModule: {value: true}
});
var $__angular2_47_test_95_lib__,
    $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_src_47_render_47_dom_47_view_47_proto_95_view__,
    $__angular2_47_src_47_render_47_dom_47_view_47_view__,
    $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_shadow_95_dom_95_strategy__,
    $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_light_95_dom__;
var $__0 = ($__angular2_47_test_95_lib__ = require("angular2/test_lib"), $__angular2_47_test_95_lib__ && $__angular2_47_test_95_lib__.__esModule && $__angular2_47_test_95_lib__ || {default: $__angular2_47_test_95_lib__}),
    describe = $__0.describe,
    ddescribe = $__0.ddescribe,
    it = $__0.it,
    iit = $__0.iit,
    xit = $__0.xit,
    xdescribe = $__0.xdescribe,
    expect = $__0.expect,
    beforeEach = $__0.beforeEach,
    el = $__0.el;
var ListWrapper = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}).ListWrapper;
var RenderProtoView = ($__angular2_47_src_47_render_47_dom_47_view_47_proto_95_view__ = require("angular2/src/render/dom/view/proto_view"), $__angular2_47_src_47_render_47_dom_47_view_47_proto_95_view__ && $__angular2_47_src_47_render_47_dom_47_view_47_proto_95_view__.__esModule && $__angular2_47_src_47_render_47_dom_47_view_47_proto_95_view__ || {default: $__angular2_47_src_47_render_47_dom_47_view_47_proto_95_view__}).RenderProtoView;
var RenderView = ($__angular2_47_src_47_render_47_dom_47_view_47_view__ = require("angular2/src/render/dom/view/view"), $__angular2_47_src_47_render_47_dom_47_view_47_view__ && $__angular2_47_src_47_render_47_dom_47_view_47_view__.__esModule && $__angular2_47_src_47_render_47_dom_47_view_47_view__ || {default: $__angular2_47_src_47_render_47_dom_47_view_47_view__}).RenderView;
var ShadowDomStrategy = ($__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_shadow_95_dom_95_strategy__ = require("angular2/src/render/dom/shadow_dom/shadow_dom_strategy"), $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_shadow_95_dom_95_strategy__ && $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_shadow_95_dom_95_strategy__.__esModule && $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_shadow_95_dom_95_strategy__ || {default: $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_shadow_95_dom_95_strategy__}).ShadowDomStrategy;
var LightDom = ($__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_light_95_dom__ = require("angular2/src/render/dom/shadow_dom/light_dom"), $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_light_95_dom__ && $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_light_95_dom__.__esModule && $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_light_95_dom__ || {default: $__angular2_47_src_47_render_47_dom_47_shadow_95_dom_47_light_95_dom__}).LightDom;
function main() {
  function createView() {
    var proto = new RenderProtoView({
      element: el('<div></div>'),
      isRootView: false,
      elementBinders: []
    });
    var rootNodes = [el('<div></div>')];
    var boundTextNodes = [];
    var boundElements = [el('<div></div>')];
    var viewContainers = [];
    var contentTags = [];
    var eventManager = null;
    return new RenderView(proto, rootNodes, boundTextNodes, boundElements, viewContainers, contentTags, eventManager);
  }
  function createShadowDomStrategy(log) {
    return new FakeShadowDomStrategy(log);
  }
  describe('RenderView', (function() {
    var log,
        strategy;
    beforeEach((function() {
      log = [];
      strategy = createShadowDomStrategy(log);
    }));
    describe('setComponentView', (function() {
      it('should redistribute when a component is added to a hydrated view', (function() {
        var hostView = createView();
        var childView = createView();
        hostView.hydrate(null);
        hostView.setComponentView(strategy, 0, childView);
        expect(log[0]).toEqual(['redistribute']);
      }));
      it('should not redistribute when a component is added to a dehydrated view', (function() {
        var hostView = createView();
        var childView = createView();
        hostView.setComponentView(strategy, 0, childView);
        expect(log).toEqual([]);
      }));
    }));
  }));
}
var FakeShadowDomStrategy = function FakeShadowDomStrategy(log) {
  $traceurRuntime.superConstructor($FakeShadowDomStrategy).call(this);
  this.log = log;
};
var $FakeShadowDomStrategy = FakeShadowDomStrategy;
($traceurRuntime.createClass)(FakeShadowDomStrategy, {constructLightDom: function(lightDomView, shadowDomView, element) {
    return new FakeLightDom(this.log, lightDomView, shadowDomView, element);
  }}, {}, ShadowDomStrategy);
Object.defineProperty(FakeShadowDomStrategy.prototype.constructLightDom, "parameters", {get: function() {
    return [[RenderView], [RenderView], []];
  }});
var FakeLightDom = function FakeLightDom(log, lightDomView, shadowDomView, element) {
  $traceurRuntime.superConstructor($FakeLightDom).call(this, lightDomView, shadowDomView, element);
  this.log = log;
};
var $FakeLightDom = FakeLightDom;
($traceurRuntime.createClass)(FakeLightDom, {redistribute: function() {
    ListWrapper.push(this.log, ['redistribute']);
  }}, {}, LightDom);
Object.defineProperty(FakeLightDom, "parameters", {get: function() {
    return [[], [RenderView], [RenderView], []];
  }});
//# sourceMappingURL=view_spec.js.map

//# sourceMappingURL=./view_spec.map
 main();