System.register(["angular2/di", "./compiler", "./directive_metadata_reader", "angular2/src/facade/lang", "angular2/src/facade/collection", "angular2/src/facade/async", "angular2/src/core/annotations/annotations", "angular2/src/core/compiler/view_factory", "angular2/src/render/api", "./element_injector", "./view"], function($__export) {
  "use strict";
  var Key,
      Injector,
      Injectable,
      ResolvedBinding,
      Compiler,
      DirectiveMetadataReader,
      Type,
      BaseException,
      stringify,
      isPresent,
      List,
      Promise,
      Component,
      ViewFactory,
      Renderer,
      ElementRef,
      AppView,
      ComponentRef,
      DynamicComponentLoader;
  return {
    setters: [function($__m) {
      Key = $__m.Key;
      Injector = $__m.Injector;
      Injectable = $__m.Injectable;
      ResolvedBinding = $__m.ResolvedBinding;
    }, function($__m) {
      Compiler = $__m.Compiler;
    }, function($__m) {
      DirectiveMetadataReader = $__m.DirectiveMetadataReader;
    }, function($__m) {
      Type = $__m.Type;
      BaseException = $__m.BaseException;
      stringify = $__m.stringify;
      isPresent = $__m.isPresent;
    }, function($__m) {
      List = $__m.List;
    }, function($__m) {
      Promise = $__m.Promise;
    }, function($__m) {
      Component = $__m.Component;
    }, function($__m) {
      ViewFactory = $__m.ViewFactory;
    }, function($__m) {
      Renderer = $__m.Renderer;
    }, function($__m) {
      ElementRef = $__m.ElementRef;
    }, function($__m) {
      AppView = $__m.AppView;
    }],
    execute: function() {
      ComponentRef = $__export("ComponentRef", (function() {
        var ComponentRef = function ComponentRef(location, instance, componentView) {
          this.location = location;
          this.instance = instance;
          this.componentView = componentView;
        };
        return ($traceurRuntime.createClass)(ComponentRef, {
          get injector() {
            return this.location.injector;
          },
          get hostView() {
            return this.location.hostView;
          }
        }, {});
      }()));
      Object.defineProperty(ComponentRef, "parameters", {get: function() {
          return [[ElementRef], [assert.type.any], [AppView]];
        }});
      DynamicComponentLoader = $__export("DynamicComponentLoader", (function() {
        var DynamicComponentLoader = function DynamicComponentLoader(compiler, directiveMetadataReader, renderer, viewFactory) {
          this._compiler = compiler;
          this._directiveMetadataReader = directiveMetadataReader;
          this._renderer = renderer;
          this._viewFactory = viewFactory;
        };
        return ($traceurRuntime.createClass)(DynamicComponentLoader, {
          loadIntoExistingLocation: function(type, location) {
            var injector = arguments[2] !== (void 0) ? arguments[2] : null;
            var $__0 = this;
            this._assertTypeIsComponent(type);
            var directiveMetadata = this._directiveMetadataReader.read(type);
            var inj = this._componentAppInjector(location, injector, directiveMetadata.resolvedInjectables);
            var hostEi = location.elementInjector;
            var hostView = location.hostView;
            return this._compiler.compile(type).then((function(componentProtoView) {
              var component = hostEi.dynamicallyCreateComponent(type, directiveMetadata.annotation, inj);
              var componentView = $__0._instantiateAndHydrateView(componentProtoView, injector, hostEi, component);
              hostView.addComponentChildView(componentView);
              $__0._renderer.setDynamicComponentView(hostView.render, location.boundElementIndex, componentView.render);
              return new ComponentRef(location, component, componentView);
            }));
          },
          loadIntoNewLocation: function(elementOrSelector, type, location) {
            var injector = arguments[3] !== (void 0) ? arguments[3] : null;
            var $__0 = this;
            this._assertTypeIsComponent(type);
            var inj = this._componentAppInjector(location, injector, null);
            return this._compiler.compileRoot(elementOrSelector, type).then((function(pv) {
              var hostView = $__0._instantiateAndHydrateView(pv, inj, null, new Object());
              var newLocation = new ElementRef(hostView.elementInjectors[0]);
              var component = hostView.elementInjectors[0].getComponent();
              return new ComponentRef(newLocation, component, hostView.componentChildViews[0]);
            }));
          },
          _componentAppInjector: function(location, injector, resolvedBindings) {
            var inj = isPresent(injector) ? injector : location.injector;
            return isPresent(resolvedBindings) ? inj.createChildFromResolved(resolvedBindings) : inj;
          },
          _instantiateAndHydrateView: function(protoView, injector, hostElementInjector, context) {
            var componentView = this._viewFactory.getView(protoView);
            componentView.hydrate(injector, hostElementInjector, context, null);
            return componentView;
          },
          _assertTypeIsComponent: function(type) {
            var annotation = this._directiveMetadataReader.read(type).annotation;
            if (!(annotation instanceof Component)) {
              throw new BaseException(("Could not load '" + stringify(type) + "' because it is not a component."));
            }
          }
        }, {});
      }()));
      Object.defineProperty(DynamicComponentLoader, "annotations", {get: function() {
          return [new Injectable()];
        }});
      Object.defineProperty(DynamicComponentLoader, "parameters", {get: function() {
          return [[Compiler], [DirectiveMetadataReader], [Renderer], [ViewFactory]];
        }});
      Object.defineProperty(DynamicComponentLoader.prototype.loadIntoExistingLocation, "parameters", {get: function() {
          return [[Type], [ElementRef], [Injector]];
        }});
      Object.defineProperty(DynamicComponentLoader.prototype.loadIntoNewLocation, "parameters", {get: function() {
          return [[assert.type.any], [Type], [ElementRef], [Injector]];
        }});
      Object.defineProperty(DynamicComponentLoader.prototype._componentAppInjector, "parameters", {get: function() {
          return [[], [Injector], [assert.genericType(List, ResolvedBinding)]];
        }});
      Object.defineProperty(DynamicComponentLoader.prototype._assertTypeIsComponent, "parameters", {get: function() {
          return [[Type]];
        }});
    }
  };
});
//# sourceMappingURL=dynamic_component_loader.es6.map

//# sourceMappingURL=./dynamic_component_loader.js.map