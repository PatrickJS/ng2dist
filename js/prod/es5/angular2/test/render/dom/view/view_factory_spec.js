System.register(["angular2/test_lib", "angular2/src/render/dom/view/view_factory", "angular2/src/render/dom/view/proto_view", "angular2/src/render/dom/view/view"], function($__export) {
  "use strict";
  var describe,
      ddescribe,
      it,
      iit,
      xit,
      xdescribe,
      expect,
      beforeEach,
      el,
      ViewFactory,
      RenderProtoView,
      RenderView;
  function main() {
    function createViewFactory($__0) {
      var capacity = $__0.capacity;
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
  $__export("main", main);
  return {
    setters: [function($__m) {
      describe = $__m.describe;
      ddescribe = $__m.ddescribe;
      it = $__m.it;
      iit = $__m.iit;
      xit = $__m.xit;
      xdescribe = $__m.xdescribe;
      expect = $__m.expect;
      beforeEach = $__m.beforeEach;
      el = $__m.el;
    }, function($__m) {
      ViewFactory = $__m.ViewFactory;
    }, function($__m) {
      RenderProtoView = $__m.RenderProtoView;
    }, function($__m) {
      RenderView = $__m.RenderView;
    }],
    execute: function() {
    }
  };
});
//# sourceMappingURL=view_factory_spec.es6.map

//# sourceMappingURL=./view_factory_spec.js.map