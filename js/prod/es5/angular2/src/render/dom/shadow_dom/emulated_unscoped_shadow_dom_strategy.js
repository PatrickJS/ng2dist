System.register(["angular2/src/facade/async", "angular2/src/dom/dom_adapter", "../view/view", "./light_dom", "./shadow_dom_strategy", "./style_url_resolver", "./util"], function($__export) {
  "use strict";
  var Promise,
      DOM,
      viewModule,
      LightDom,
      ShadowDomStrategy,
      StyleUrlResolver,
      moveViewNodesIntoParent,
      insertSharedStyleText,
      EmulatedUnscopedShadowDomStrategy;
  return {
    setters: [function($__m) {
      Promise = $__m.Promise;
    }, function($__m) {
      DOM = $__m.DOM;
    }, function($__m) {
      viewModule = $__m;
    }, function($__m) {
      LightDom = $__m.LightDom;
    }, function($__m) {
      ShadowDomStrategy = $__m.ShadowDomStrategy;
    }, function($__m) {
      StyleUrlResolver = $__m.StyleUrlResolver;
    }, function($__m) {
      moveViewNodesIntoParent = $__m.moveViewNodesIntoParent;
      insertSharedStyleText = $__m.insertSharedStyleText;
    }],
    execute: function() {
      EmulatedUnscopedShadowDomStrategy = $__export("EmulatedUnscopedShadowDomStrategy", (function($__super) {
        var EmulatedUnscopedShadowDomStrategy = function EmulatedUnscopedShadowDomStrategy(styleUrlResolver, styleHost) {
          $traceurRuntime.superConstructor(EmulatedUnscopedShadowDomStrategy).call(this);
          this.styleUrlResolver = styleUrlResolver;
          this.styleHost = styleHost;
        };
        return ($traceurRuntime.createClass)(EmulatedUnscopedShadowDomStrategy, {
          hasNativeContentElement: function() {
            return false;
          },
          attachTemplate: function(el, view) {
            DOM.clearNodes(el);
            moveViewNodesIntoParent(el, view);
          },
          constructLightDom: function(lightDomView, shadowDomView, el) {
            return new LightDom(lightDomView, shadowDomView, el);
          },
          processStyleElement: function(hostComponentId, templateUrl, styleEl) {
            var cssText = DOM.getText(styleEl);
            cssText = this.styleUrlResolver.resolveUrls(cssText, templateUrl);
            DOM.setText(styleEl, cssText);
            DOM.remove(styleEl);
            insertSharedStyleText(cssText, this.styleHost, styleEl);
            return null;
          }
        }, {}, $__super);
      }(ShadowDomStrategy)));
      Object.defineProperty(EmulatedUnscopedShadowDomStrategy, "parameters", {get: function() {
          return [[StyleUrlResolver], []];
        }});
      Object.defineProperty(EmulatedUnscopedShadowDomStrategy.prototype.attachTemplate, "parameters", {get: function() {
          return [[], [viewModule.RenderView]];
        }});
      Object.defineProperty(EmulatedUnscopedShadowDomStrategy.prototype.constructLightDom, "parameters", {get: function() {
          return [[viewModule.RenderView], [viewModule.RenderView], []];
        }});
      Object.defineProperty(EmulatedUnscopedShadowDomStrategy.prototype.processStyleElement, "parameters", {get: function() {
          return [[assert.type.string], [assert.type.string], []];
        }});
    }
  };
});
//# sourceMappingURL=emulated_unscoped_shadow_dom_strategy.es6.map

//# sourceMappingURL=./emulated_unscoped_shadow_dom_strategy.js.map