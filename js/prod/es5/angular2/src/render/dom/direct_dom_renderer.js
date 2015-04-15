System.register(["angular2/di", "angular2/src/facade/async", "angular2/src/facade/collection", "angular2/src/facade/lang", "../api", "./view/view", "./view/proto_view", "./view/view_factory", "./compiler/compiler", "./shadow_dom/shadow_dom_strategy", "./view/proto_view_builder"], function($__export) {
  "use strict";
  var Injectable,
      Promise,
      PromiseWrapper,
      List,
      ListWrapper,
      isBlank,
      isPresent,
      api,
      RenderView,
      RenderProtoView,
      ViewFactory,
      Compiler,
      ShadowDomStrategy,
      ProtoViewBuilder,
      DirectDomProtoViewRef,
      DirectDomViewRef,
      DirectDomRenderer;
  function _resolveViewContainer(vc) {
    return _resolveView(vc.view).viewContainers[vc.elementIndex];
  }
  function _resolveView(viewRef) {
    return isPresent(viewRef) ? viewRef.delegate : null;
  }
  function _resolveProtoView(protoViewRef) {
    return isPresent(protoViewRef) ? protoViewRef.delegate : null;
  }
  function _wrapView(view) {
    return new DirectDomViewRef(view);
  }
  function _collectComponentChildViewRefs(view) {
    var target = arguments[1] !== (void 0) ? arguments[1] : null;
    if (isBlank(target)) {
      target = [];
    }
    ListWrapper.push(target, _wrapView(view));
    ListWrapper.forEach(view.componentChildViews, (function(view) {
      if (isPresent(view)) {
        _collectComponentChildViewRefs(view, target);
      }
    }));
    return target;
  }
  return {
    setters: [function($__m) {
      Injectable = $__m.Injectable;
    }, function($__m) {
      Promise = $__m.Promise;
      PromiseWrapper = $__m.PromiseWrapper;
    }, function($__m) {
      List = $__m.List;
      ListWrapper = $__m.ListWrapper;
    }, function($__m) {
      isBlank = $__m.isBlank;
      isPresent = $__m.isPresent;
    }, function($__m) {
      api = $__m;
    }, function($__m) {
      RenderView = $__m.RenderView;
    }, function($__m) {
      RenderProtoView = $__m.RenderProtoView;
    }, function($__m) {
      ViewFactory = $__m.ViewFactory;
    }, function($__m) {
      Compiler = $__m.Compiler;
    }, function($__m) {
      ShadowDomStrategy = $__m.ShadowDomStrategy;
    }, function($__m) {
      ProtoViewBuilder = $__m.ProtoViewBuilder;
    }],
    execute: function() {
      Object.defineProperty(_resolveViewContainer, "parameters", {get: function() {
          return [[api.ViewContainerRef]];
        }});
      Object.defineProperty(_resolveView, "parameters", {get: function() {
          return [[DirectDomViewRef]];
        }});
      Object.defineProperty(_resolveProtoView, "parameters", {get: function() {
          return [[DirectDomProtoViewRef]];
        }});
      Object.defineProperty(_wrapView, "parameters", {get: function() {
          return [[RenderView]];
        }});
      DirectDomProtoViewRef = $__export("DirectDomProtoViewRef", (function($__super) {
        var DirectDomProtoViewRef = function DirectDomProtoViewRef(delegate) {
          $traceurRuntime.superConstructor(DirectDomProtoViewRef).call(this);
          this.delegate = delegate;
        };
        return ($traceurRuntime.createClass)(DirectDomProtoViewRef, {}, {}, $__super);
      }(api.ProtoViewRef)));
      Object.defineProperty(DirectDomProtoViewRef, "parameters", {get: function() {
          return [[RenderProtoView]];
        }});
      DirectDomViewRef = $__export("DirectDomViewRef", (function($__super) {
        var DirectDomViewRef = function DirectDomViewRef(delegate) {
          $traceurRuntime.superConstructor(DirectDomViewRef).call(this);
          this.delegate = delegate;
        };
        return ($traceurRuntime.createClass)(DirectDomViewRef, {}, {}, $__super);
      }(api.ViewRef)));
      Object.defineProperty(DirectDomViewRef, "parameters", {get: function() {
          return [[RenderView]];
        }});
      DirectDomRenderer = $__export("DirectDomRenderer", (function($__super) {
        var DirectDomRenderer = function DirectDomRenderer(compiler, viewFactory, shadowDomStrategy) {
          $traceurRuntime.superConstructor(DirectDomRenderer).call(this);
          this._compiler = compiler;
          this._viewFactory = viewFactory;
          this._shadowDomStrategy = shadowDomStrategy;
        };
        return ($traceurRuntime.createClass)(DirectDomRenderer, {
          compile: function(template) {
            return this._compiler.compile(template);
          },
          mergeChildComponentProtoViews: function(protoViewRef, protoViewRefs) {
            _resolveProtoView(protoViewRef).mergeChildComponentProtoViews(ListWrapper.map(protoViewRefs, _resolveProtoView));
          },
          createRootProtoView: function(selectorOrElement, componentId) {
            var element = selectorOrElement;
            var rootProtoViewBuilder = new ProtoViewBuilder(element);
            rootProtoViewBuilder.setIsRootView(true);
            var elBinder = rootProtoViewBuilder.bindElement(element, 'root element');
            elBinder.setComponentId(componentId);
            elBinder.bindDirective(0);
            this._shadowDomStrategy.processElement(null, componentId, element);
            return PromiseWrapper.resolve(rootProtoViewBuilder.build());
          },
          createView: function(protoViewRef) {
            return _collectComponentChildViewRefs(this._viewFactory.getView(_resolveProtoView(protoViewRef)));
          },
          destroyView: function(viewRef) {
            this._viewFactory.returnView(_resolveView(viewRef));
          },
          insertViewIntoContainer: function(vcRef, viewRef) {
            var atIndex = arguments[2] !== (void 0) ? arguments[2] : -1;
            _resolveViewContainer(vcRef).insert(_resolveView(viewRef), atIndex);
          },
          detachViewFromContainer: function(vcRef, atIndex) {
            _resolveViewContainer(vcRef).detach(atIndex);
          },
          setElementProperty: function(viewRef, elementIndex, propertyName, propertyValue) {
            _resolveView(viewRef).setElementProperty(elementIndex, propertyName, propertyValue);
          },
          setDynamicComponentView: function(viewRef, elementIndex, nestedViewRef) {
            _resolveView(viewRef).setComponentView(this._shadowDomStrategy, elementIndex, _resolveView(nestedViewRef));
          },
          setText: function(viewRef, textNodeIndex, text) {
            _resolveView(viewRef).setText(textNodeIndex, text);
          },
          setEventDispatcher: function(viewRef, dispatcher) {
            _resolveView(viewRef).setEventDispatcher(dispatcher);
          }
        }, {}, $__super);
      }(api.Renderer)));
      Object.defineProperty(DirectDomRenderer, "annotations", {get: function() {
          return [new Injectable()];
        }});
      Object.defineProperty(DirectDomRenderer, "parameters", {get: function() {
          return [[Compiler], [ViewFactory], [ShadowDomStrategy]];
        }});
      Object.defineProperty(DirectDomRenderer.prototype.compile, "parameters", {get: function() {
          return [[api.ViewDefinition]];
        }});
      Object.defineProperty(DirectDomRenderer.prototype.mergeChildComponentProtoViews, "parameters", {get: function() {
          return [[api.ProtoViewRef], [assert.genericType(List, api.ProtoViewRef)]];
        }});
      Object.defineProperty(DirectDomRenderer.prototype.createView, "parameters", {get: function() {
          return [[api.ProtoViewRef]];
        }});
      Object.defineProperty(DirectDomRenderer.prototype.destroyView, "parameters", {get: function() {
          return [[api.ViewRef]];
        }});
      Object.defineProperty(DirectDomRenderer.prototype.insertViewIntoContainer, "parameters", {get: function() {
          return [[api.ViewContainerRef], [api.ViewRef], []];
        }});
      Object.defineProperty(DirectDomRenderer.prototype.detachViewFromContainer, "parameters", {get: function() {
          return [[api.ViewContainerRef], [assert.type.number]];
        }});
      Object.defineProperty(DirectDomRenderer.prototype.setElementProperty, "parameters", {get: function() {
          return [[api.ViewRef], [assert.type.number], [assert.type.string], [assert.type.any]];
        }});
      Object.defineProperty(DirectDomRenderer.prototype.setDynamicComponentView, "parameters", {get: function() {
          return [[api.ViewRef], [assert.type.number], [api.ViewRef]];
        }});
      Object.defineProperty(DirectDomRenderer.prototype.setText, "parameters", {get: function() {
          return [[api.ViewRef], [assert.type.number], [assert.type.string]];
        }});
      Object.defineProperty(DirectDomRenderer.prototype.setEventDispatcher, "parameters", {get: function() {
          return [[api.ViewRef], [assert.type.any]];
        }});
    }
  };
});
//# sourceMappingURL=direct_dom_renderer.es6.map

//# sourceMappingURL=./direct_dom_renderer.js.map