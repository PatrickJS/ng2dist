System.register(["angular2/src/facade/lang", "angular2/src/facade/async", "../view/view", "./light_dom"], function($__export) {
  "use strict";
  var isBlank,
      isPresent,
      Promise,
      viewModule,
      LightDom,
      ShadowDomStrategy;
  return {
    setters: [function($__m) {
      isBlank = $__m.isBlank;
      isPresent = $__m.isPresent;
    }, function($__m) {
      Promise = $__m.Promise;
    }, function($__m) {
      viewModule = $__m;
    }, function($__m) {
      LightDom = $__m.LightDom;
    }],
    execute: function() {
      ShadowDomStrategy = $__export("ShadowDomStrategy", (function() {
        var ShadowDomStrategy = function ShadowDomStrategy() {
          ;
        };
        return ($traceurRuntime.createClass)(ShadowDomStrategy, {
          hasNativeContentElement: function() {
            return true;
          },
          attachTemplate: function(el, view) {},
          constructLightDom: function(lightDomView, shadowDomView, el) {
            return null;
          },
          processStyleElement: function(hostComponentId, templateUrl, styleElement) {
            return null;
          },
          processElement: function(hostComponentId, elementComponentId, element) {}
        }, {});
      }()));
      Object.defineProperty(ShadowDomStrategy.prototype.attachTemplate, "parameters", {get: function() {
          return [[], [viewModule.RenderView]];
        }});
      Object.defineProperty(ShadowDomStrategy.prototype.constructLightDom, "parameters", {get: function() {
          return [[viewModule.RenderView], [viewModule.RenderView], []];
        }});
      Object.defineProperty(ShadowDomStrategy.prototype.processStyleElement, "parameters", {get: function() {
          return [[assert.type.string], [assert.type.string], []];
        }});
      Object.defineProperty(ShadowDomStrategy.prototype.processElement, "parameters", {get: function() {
          return [[assert.type.string], [assert.type.string], []];
        }});
    }
  };
});
//# sourceMappingURL=shadow_dom_strategy.es6.map

//# sourceMappingURL=./shadow_dom_strategy.js.map