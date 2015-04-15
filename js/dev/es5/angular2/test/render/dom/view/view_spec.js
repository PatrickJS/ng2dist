System.register(["rtts_assert/rtts_assert", "angular2/test_lib", "angular2/src/facade/collection", "angular2/src/render/dom/view/proto_view", "angular2/src/render/dom/view/view", "angular2/src/render/dom/shadow_dom/shadow_dom_strategy", "angular2/src/render/dom/shadow_dom/light_dom"], function($__export) {
  "use strict";
  var assert,
      describe,
      ddescribe,
      it,
      iit,
      xit,
      xdescribe,
      expect,
      beforeEach,
      el,
      ListWrapper,
      RenderProtoView,
      RenderView,
      ShadowDomStrategy,
      LightDom,
      FakeShadowDomStrategy,
      FakeLightDom;
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
  $__export("main", main);
  return {
    setters: [function($__m) {
      assert = $__m.assert;
    }, function($__m) {
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
      ListWrapper = $__m.ListWrapper;
    }, function($__m) {
      RenderProtoView = $__m.RenderProtoView;
    }, function($__m) {
      RenderView = $__m.RenderView;
    }, function($__m) {
      ShadowDomStrategy = $__m.ShadowDomStrategy;
    }, function($__m) {
      LightDom = $__m.LightDom;
    }],
    execute: function() {
      FakeShadowDomStrategy = (function($__super) {
        var FakeShadowDomStrategy = function FakeShadowDomStrategy(log) {
          $traceurRuntime.superConstructor(FakeShadowDomStrategy).call(this);
          this.log = log;
        };
        return ($traceurRuntime.createClass)(FakeShadowDomStrategy, {constructLightDom: function(lightDomView, shadowDomView, element) {
            assert.argumentTypes(lightDomView, RenderView, shadowDomView, RenderView, element, assert.type.any);
            return assert.returnType((new FakeLightDom(this.log, lightDomView, shadowDomView, element)), LightDom);
          }}, {}, $__super);
      }(ShadowDomStrategy));
      Object.defineProperty(FakeShadowDomStrategy.prototype.constructLightDom, "parameters", {get: function() {
          return [[RenderView], [RenderView], []];
        }});
      FakeLightDom = (function($__super) {
        var FakeLightDom = function FakeLightDom(log, lightDomView, shadowDomView, element) {
          assert.argumentTypes(log, assert.type.any, lightDomView, RenderView, shadowDomView, RenderView, element, assert.type.any);
          $traceurRuntime.superConstructor(FakeLightDom).call(this, lightDomView, shadowDomView, element);
          this.log = log;
        };
        return ($traceurRuntime.createClass)(FakeLightDom, {redistribute: function() {
            ListWrapper.push(this.log, ['redistribute']);
          }}, {}, $__super);
      }(LightDom));
      Object.defineProperty(FakeLightDom, "parameters", {get: function() {
          return [[], [RenderView], [RenderView], []];
        }});
    }
  };
});
//# sourceMappingURL=view_spec.es6.map

//# sourceMappingURL=./view_spec.js.map