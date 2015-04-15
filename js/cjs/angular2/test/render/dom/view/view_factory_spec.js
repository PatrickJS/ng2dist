'use strict'; var parse5Adapter = require('angular2/src/dom/parse5_adapter'); parse5Adapter.Parse5DomAdapter.makeCurrent();
Object.defineProperties(module.exports, {
  main: {get: function() {
      return main;
    }},
  __esModule: {value: true}
});
var $__angular2_47_test_95_lib__,
    $__angular2_47_src_47_render_47_dom_47_view_47_view_95_factory__,
    $__angular2_47_src_47_render_47_dom_47_view_47_proto_95_view__,
    $__angular2_47_src_47_render_47_dom_47_view_47_view__;
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
var ViewFactory = ($__angular2_47_src_47_render_47_dom_47_view_47_view_95_factory__ = require("angular2/src/render/dom/view/view_factory"), $__angular2_47_src_47_render_47_dom_47_view_47_view_95_factory__ && $__angular2_47_src_47_render_47_dom_47_view_47_view_95_factory__.__esModule && $__angular2_47_src_47_render_47_dom_47_view_47_view_95_factory__ || {default: $__angular2_47_src_47_render_47_dom_47_view_47_view_95_factory__}).ViewFactory;
var RenderProtoView = ($__angular2_47_src_47_render_47_dom_47_view_47_proto_95_view__ = require("angular2/src/render/dom/view/proto_view"), $__angular2_47_src_47_render_47_dom_47_view_47_proto_95_view__ && $__angular2_47_src_47_render_47_dom_47_view_47_proto_95_view__.__esModule && $__angular2_47_src_47_render_47_dom_47_view_47_proto_95_view__ || {default: $__angular2_47_src_47_render_47_dom_47_view_47_proto_95_view__}).RenderProtoView;
var RenderView = ($__angular2_47_src_47_render_47_dom_47_view_47_view__ = require("angular2/src/render/dom/view/view"), $__angular2_47_src_47_render_47_dom_47_view_47_view__ && $__angular2_47_src_47_render_47_dom_47_view_47_view__.__esModule && $__angular2_47_src_47_render_47_dom_47_view_47_view__ || {default: $__angular2_47_src_47_render_47_dom_47_view_47_view__}).RenderView;
function main() {
  function createViewFactory($__4) {
    var capacity = $__4.capacity;
    return new ViewFactory(capacity, null, null);
  }
  function createPv() {
    return new RenderProtoView({
      element: el('<div></div>'),
      isRootView: false,
      elementBinders: []
    });
  }
  describe('RenderViewFactory', (function() {
    it('should create views', (function() {
      var pv = createPv();
      var vf = createViewFactory({capacity: 1});
      expect(vf.getView(pv) instanceof RenderView).toBe(true);
    }));
    describe('caching', (function() {
      it('should support multiple RenderProtoViews', (function() {
        var pv1 = createPv();
        var pv2 = createPv();
        var vf = createViewFactory({capacity: 2});
        var view1 = vf.getView(pv1);
        var view2 = vf.getView(pv2);
        vf.returnView(view1);
        vf.returnView(view2);
        expect(vf.getView(pv1)).toBe(view1);
        expect(vf.getView(pv2)).toBe(view2);
      }));
      it('should reuse the newest view that has been returned', (function() {
        var pv = createPv();
        var vf = createViewFactory({capacity: 2});
        var view1 = vf.getView(pv);
        var view2 = vf.getView(pv);
        vf.returnView(view1);
        vf.returnView(view2);
        expect(vf.getView(pv)).toBe(view2);
      }));
      it('should not add views when the capacity has been reached', (function() {
        var pv = createPv();
        var vf = createViewFactory({capacity: 2});
        var view1 = vf.getView(pv);
        var view2 = vf.getView(pv);
        var view3 = vf.getView(pv);
        vf.returnView(view1);
        vf.returnView(view2);
        vf.returnView(view3);
        expect(vf.getView(pv)).toBe(view2);
        expect(vf.getView(pv)).toBe(view1);
      }));
    }));
  }));
}
//# sourceMappingURL=view_factory_spec.js.map

//# sourceMappingURL=./view_factory_spec.map
 main();