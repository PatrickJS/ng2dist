System.register(["rtts_assert/rtts_assert", "angular2/src/facade/collection", "angular2/src/facade/lang", "angular2/di", "angular2/src/core/compiler/element_injector", "angular2/src/render/api", "./view", "./view_factory"], function($__export) {
  "use strict";
  var assert,
      ListWrapper,
      MapWrapper,
      List,
      BaseException,
      Injector,
      eiModule,
      isPresent,
      isBlank,
      renderApi,
      viewModule,
      vfModule,
      ViewContainer;
  return {
    setters: [function($__m) {
      assert = $__m.assert;
    }, function($__m) {
      ListWrapper = $__m.ListWrapper;
      MapWrapper = $__m.MapWrapper;
      List = $__m.List;
    }, function($__m) {
      BaseException = $__m.BaseException;
      isPresent = $__m.isPresent;
      isBlank = $__m.isBlank;
    }, function($__m) {
      Injector = $__m.Injector;
    }, function($__m) {
      eiModule = $__m;
    }, function($__m) {
      renderApi = $__m;
    }, function($__m) {
      viewModule = $__m;
    }, function($__m) {
      vfModule = $__m;
    }],
    execute: function() {
      ViewContainer = $__export("ViewContainer", (function() {
        var ViewContainer = function ViewContainer(viewFactory, parentView, defaultProtoView, elementInjector) {
          assert.argumentTypes(viewFactory, vfModule.ViewFactory, parentView, viewModule.AppView, defaultProtoView, viewModule.AppProtoView, elementInjector, eiModule.ElementInjector);
          this.viewFactory = viewFactory;
          this.render = null;
          this.parentView = parentView;
          this.defaultProtoView = defaultProtoView;
          this.elementInjector = elementInjector;
          this._views = [];
          this.appInjector = null;
          this.hostElementInjector = null;
        };
        return ($traceurRuntime.createClass)(ViewContainer, {
          internalHydrateRecurse: function(render, appInjector, hostElementInjector) {
            assert.argumentTypes(render, renderApi.ViewContainerRef, appInjector, Injector, hostElementInjector, eiModule.ElementInjector);
            this.render = render;
            this.appInjector = appInjector;
            this.hostElementInjector = hostElementInjector;
          },
          internalDehydrateRecurse: function() {
            this.appInjector = null;
            this.hostElementInjector = null;
            this.render = null;
            for (var i = this._views.length - 1; i >= 0; i--) {
              var view = this._views[i];
              view.changeDetector.remove();
              this._unlinkElementInjectors(view);
              view.internalDehydrateRecurse();
              this.viewFactory.returnView(view);
            }
            this._views = [];
          },
          clear: function() {
            for (var i = this._views.length - 1; i >= 0; i--) {
              this.remove(i);
            }
          },
          get: function(index) {
            assert.argumentTypes(index, assert.type.number);
            return assert.returnType((this._views[index]), viewModule.AppView);
          },
          get length() {
            return this._views.length;
          },
          _siblingInjectorToLinkAfter: function(index) {
            assert.argumentTypes(index, assert.type.number);
            if (index == 0)
              return null;
            return ListWrapper.last(this._views[index - 1].rootElementInjectors);
          },
          hydrated: function() {
            return isPresent(this.appInjector);
          },
          create: function() {
            var atIndex = arguments[0] !== (void 0) ? arguments[0] : -1;
            if (!this.hydrated())
              throw new BaseException('Cannot create views on a dehydrated ViewContainer');
            var newView = this.viewFactory.getView(this.defaultProtoView);
            this._insertWithoutRender(newView, atIndex);
            newView.hydrate(this.appInjector, this.hostElementInjector, this.parentView.context, this.parentView.locals);
            this.defaultProtoView.renderer.insertViewIntoContainer(this.render, newView.render, atIndex);
            return assert.returnType((newView), viewModule.AppView);
          },
          insert: function(view) {
            var atIndex = arguments[1] !== (void 0) ? arguments[1] : -1;
            this._insertWithoutRender(view, atIndex);
            this.defaultProtoView.renderer.insertViewIntoContainer(this.render, view.render, atIndex);
            return assert.returnType((view), viewModule.AppView);
          },
          _insertWithoutRender: function(view) {
            var atIndex = arguments[1] !== (void 0) ? arguments[1] : -1;
            if (atIndex == -1)
              atIndex = this._views.length;
            ListWrapper.insert(this._views, atIndex, view);
            this.parentView.changeDetector.addChild(view.changeDetector);
            this._linkElementInjectors(this._siblingInjectorToLinkAfter(atIndex), view);
            return assert.returnType((view), viewModule.AppView);
          },
          remove: function() {
            var atIndex = arguments[0] !== (void 0) ? arguments[0] : -1;
            if (atIndex == -1)
              atIndex = this._views.length - 1;
            var view = this.detach(atIndex);
            view.dehydrate();
            this.viewFactory.returnView(view);
          },
          detach: function() {
            var atIndex = arguments[0] !== (void 0) ? arguments[0] : -1;
            if (atIndex == -1)
              atIndex = this._views.length - 1;
            var detachedView = this.get(atIndex);
            ListWrapper.removeAt(this._views, atIndex);
            this.defaultProtoView.renderer.detachViewFromContainer(this.render, atIndex);
            detachedView.changeDetector.remove();
            this._unlinkElementInjectors(detachedView);
            return assert.returnType((detachedView), viewModule.AppView);
          },
          contentTagContainers: function() {
            return this._views;
          },
          _linkElementInjectors: function(sibling, view) {
            for (var i = view.rootElementInjectors.length - 1; i >= 0; i--) {
              view.rootElementInjectors[i].linkAfter(this.elementInjector, sibling);
            }
          },
          _unlinkElementInjectors: function(view) {
            for (var i = 0; i < view.rootElementInjectors.length; ++i) {
              view.rootElementInjectors[i].unlink();
            }
          }
        }, {});
      }()));
      Object.defineProperty(ViewContainer, "parameters", {get: function() {
          return [[vfModule.ViewFactory], [viewModule.AppView], [viewModule.AppProtoView], [eiModule.ElementInjector]];
        }});
      Object.defineProperty(ViewContainer.prototype.internalHydrateRecurse, "parameters", {get: function() {
          return [[renderApi.ViewContainerRef], [Injector], [eiModule.ElementInjector]];
        }});
      Object.defineProperty(ViewContainer.prototype.get, "parameters", {get: function() {
          return [[assert.type.number]];
        }});
      Object.defineProperty(ViewContainer.prototype._siblingInjectorToLinkAfter, "parameters", {get: function() {
          return [[assert.type.number]];
        }});
    }
  };
});
//# sourceMappingURL=view_container.es6.map

//# sourceMappingURL=./view_container.js.map