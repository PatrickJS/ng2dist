'use strict'; var parse5Adapter = require('angular2/src/dom/parse5_adapter'); parse5Adapter.Parse5DomAdapter.makeCurrent();
Object.defineProperties(module.exports, {
  main: {get: function() {
      return main;
    }},
  __esModule: {value: true}
});
var $__angular2_47_test_95_lib__,
    $__angular2_47_src_47_core_47_compiler_47_view_95_factory__,
    $__angular2_47_src_47_core_47_compiler_47_view__,
    $__angular2_47_change_95_detection__;
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
var ViewFactory = ($__angular2_47_src_47_core_47_compiler_47_view_95_factory__ = require("angular2/src/core/compiler/view_factory"), $__angular2_47_src_47_core_47_compiler_47_view_95_factory__ && $__angular2_47_src_47_core_47_compiler_47_view_95_factory__.__esModule && $__angular2_47_src_47_core_47_compiler_47_view_95_factory__ || {default: $__angular2_47_src_47_core_47_compiler_47_view_95_factory__}).ViewFactory;
var $__2 = ($__angular2_47_src_47_core_47_compiler_47_view__ = require("angular2/src/core/compiler/view"), $__angular2_47_src_47_core_47_compiler_47_view__ && $__angular2_47_src_47_core_47_compiler_47_view__.__esModule && $__angular2_47_src_47_core_47_compiler_47_view__ || {default: $__angular2_47_src_47_core_47_compiler_47_view__}),
    AppProtoView = $__2.AppProtoView,
    AppView = $__2.AppView;
var dynamicChangeDetection = ($__angular2_47_change_95_detection__ = require("angular2/change_detection"), $__angular2_47_change_95_detection__ && $__angular2_47_change_95_detection__.__esModule && $__angular2_47_change_95_detection__ || {default: $__angular2_47_change_95_detection__}).dynamicChangeDetection;
function main() {
  function createViewFactory($__4) {
    var capacity = $__4.capacity;
    return new ViewFactory(capacity);
  }
  function createPv() {
    return new AppProtoView(null, null, dynamicChangeDetection.createProtoChangeDetector('dummy', null));
  }
  describe('RenderViewFactory', (function() {
    it('should create views', (function() {
      var pv = createPv();
      var vf = createViewFactory({capacity: 1});
      expect(vf.getView(pv) instanceof AppView).toBe(true);
    }));
    describe('caching', (function() {
      it('should support multiple AppProtoViews', (function() {
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