System.register(["rtts_assert/rtts_assert", "angular2/di", "angular2/src/facade/async", "angular2/src/facade/collection", "angular2/src/facade/lang", "../api", "./view/view", "./view/proto_view", "./view/view_factory", "./compiler/compiler", "./shadow_dom/shadow_dom_strategy", "./view/proto_view_builder"], function($__export) {
  "use strict";
  var assert,
      Injectable,
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
    assert.argumentTypes(vc, api.ViewContainerRef);
    return _resolveView(vc.view).viewContainers[vc.elementIndex];
  }
  function _resolveView(viewRef) {
    assert.argumentTypes(viewRef, DirectDomViewRef);
    return isPresent(viewRef) ? viewRef.delegate : null;
  }
  function _resolveProtoView(protoViewRef) {
    assert.argumentTypes(protoViewRef, DirectDomProtoViewRef);
    return isPresent(protoViewRef) ? protoViewRef.delegate : null;
  }
  function _wrapView(view) {
    assert.argumentTypes(view, RenderView);
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
      assert = $__m.assert;
    }, function($__m) {
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
          assert.argumentTypes(delegate, RenderProtoView);
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
          assert.argumentTypes(delegate, RenderView);
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
          assert.argumentTypes(compiler, Compiler, viewFactory, ViewFactory, shadowDomStrategy, ShadowDomStrategy);
          $traceurRuntime.superConstructor(DirectDomRenderer).call(this);
          this._compiler = compiler;
          this._viewFactory = viewFactory;
          this._shadowDomStrategy = shadowDomStrategy;
        };
        return ($traceurRuntime.createClass)(DirectDomRenderer, {
          compile: function(template) {
            assert.argumentTypes(template, api.ViewDefinition);
            return assert.returnType((this._compiler.compile(template)), assert.genericType(Promise, api.ProtoViewDto));
          },
          mergeChildComponentProtoViews: function(protoViewRef, protoViewRefs) {
            assert.argumentTypes(protoViewRef, api.ProtoViewRef, protoViewRefs, assert.genericType(List, api.ProtoViewRef));
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
            return assert.returnType((PromiseWrapper.resolve(rootProtoViewBuilder.build())), assert.genericType(Promise, api.ProtoViewDto));
          },
          createView: function(protoViewRef) {
            assert.argumentTypes(protoViewRef, api.ProtoViewRef);
            return assert.returnType((_collectComponentChildViewRefs(this._viewFactory.getView(_resolveProtoView(protoViewRef)))), assert.genericType(List, api.ViewRef));
          },
          destroyView: function(viewRef) {
            assert.argumentTypes(viewRef, api.ViewRef);
            this._viewFactory.returnView(_resolveView(viewRef));
          },
          insertViewIntoContainer: function(vcRef, viewRef) {
            var atIndex = arguments[2] !== (void 0) ? arguments[2] : -1;
            assert.argumentTypes(vcRef, api.ViewContainerRef, viewRef, api.ViewRef, atIndex, assert.type.any);
            _resolveViewContainer(vcRef).insert(_resolveView(viewRef), atIndex);
          },
          detachViewFromContainer: function(vcRef, atIndex) {
            assert.argumentTypes(vcRef, api.ViewContainerRef, atIndex, assert.type.number);
            _resolveViewContainer(vcRef).detach(atIndex);
          },
          setElementProperty: function(viewRef, elementIndex, propertyName, propertyValue) {
            assert.argumentTypes(viewRef, api.ViewRef, elementIndex, assert.type.number, propertyName, assert.type.string, propertyValue, assert.type.any);
            _resolveView(viewRef).setElementProperty(elementIndex, propertyName, propertyValue);
          },
          setDynamicComponentView: function(viewRef, elementIndex, nestedViewRef) {
            assert.argumentTypes(viewRef, api.ViewRef, elementIndex, assert.type.number, nestedViewRef, api.ViewRef);
            _resolveView(viewRef).setComponentView(this._shadowDomStrategy, elementIndex, _resolveView(nestedViewRef));
          },
          setText: function(viewRef, textNodeIndex, text) {
            assert.argumentTypes(viewRef, api.ViewRef, textNodeIndex, assert.type.number, text, assert.type.string);
            _resolveView(viewRef).setText(textNodeIndex, text);
          },
          setEventDispatcher: function(viewRef, dispatcher) {
            assert.argumentTypes(viewRef, api.ViewRef, dispatcher, assert.type.any);
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