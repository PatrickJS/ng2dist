System.register(["angular2/src/facade/collection", "angular2/change_detection", "./element_injector", "./element_binder", "angular2/src/reflection/types", "angular2/src/facade/lang", "angular2/di", "./view_container", "angular2/src/render/api"], function($__export) {
  "use strict";
  var ListWrapper,
      MapWrapper,
      Map,
      StringMapWrapper,
      List,
      AST,
      Locals,
      ChangeDispatcher,
      ProtoChangeDetector,
      ChangeDetector,
      ChangeRecord,
      BindingRecord,
      DirectiveRecord,
      BindingPropagationConfig,
      ProtoElementInjector,
      ElementInjector,
      PreBuiltObjects,
      DirectiveBinding,
      ElementBinder,
      SetterFn,
      IMPLEMENTS,
      int,
      isPresent,
      isBlank,
      BaseException,
      Injector,
      ViewContainer,
      renderApi,
      AppView,
      AppProtoView;
  return {
    setters: [function($__m) {
      ListWrapper = $__m.ListWrapper;
      MapWrapper = $__m.MapWrapper;
      Map = $__m.Map;
      StringMapWrapper = $__m.StringMapWrapper;
      List = $__m.List;
    }, function($__m) {
      AST = $__m.AST;
      Locals = $__m.Locals;
      ChangeDispatcher = $__m.ChangeDispatcher;
      ProtoChangeDetector = $__m.ProtoChangeDetector;
      ChangeDetector = $__m.ChangeDetector;
      ChangeRecord = $__m.ChangeRecord;
      BindingRecord = $__m.BindingRecord;
      DirectiveRecord = $__m.DirectiveRecord;
      BindingPropagationConfig = $__m.BindingPropagationConfig;
    }, function($__m) {
      ProtoElementInjector = $__m.ProtoElementInjector;
      ElementInjector = $__m.ElementInjector;
      PreBuiltObjects = $__m.PreBuiltObjects;
      DirectiveBinding = $__m.DirectiveBinding;
    }, function($__m) {
      ElementBinder = $__m.ElementBinder;
    }, function($__m) {
      SetterFn = $__m.SetterFn;
    }, function($__m) {
      IMPLEMENTS = $__m.IMPLEMENTS;
      int = $__m.int;
      isPresent = $__m.isPresent;
      isBlank = $__m.isBlank;
      BaseException = $__m.BaseException;
    }, function($__m) {
      Injector = $__m.Injector;
    }, function($__m) {
      ViewContainer = $__m.ViewContainer;
    }, function($__m) {
      renderApi = $__m;
    }],
    execute: function() {
      AppView = $__export("AppView", (function() {
        var AppView = function AppView(proto, protoLocals) {
          this.render = null;
          this.proto = proto;
          this.changeDetector = null;
          this.elementInjectors = null;
          this.rootElementInjectors = null;
          this.componentChildViews = null;
          this.viewContainers = null;
          this.preBuiltObjects = null;
          this.context = null;
          this.locals = new Locals(null, MapWrapper.clone(protoLocals));
        };
        return ($traceurRuntime.createClass)(AppView, {
          init: function(changeDetector, elementInjectors, rootElementInjectors, viewContainers, preBuiltObjects, componentChildViews) {
            this.changeDetector = changeDetector;
            this.elementInjectors = elementInjectors;
            this.rootElementInjectors = rootElementInjectors;
            this.viewContainers = viewContainers;
            this.preBuiltObjects = preBuiltObjects;
            this.componentChildViews = componentChildViews;
          },
          setLocal: function(contextName, value) {
            if (!this.hydrated())
              throw new BaseException('Cannot set locals on dehydrated view.');
            if (!MapWrapper.contains(this.proto.variableBindings, contextName)) {
              return ;
            }
            var templateName = MapWrapper.get(this.proto.variableBindings, contextName);
            this.locals.set(templateName, value);
          },
          hydrated: function() {
            return isPresent(this.context);
          },
          _setContextAndLocals: function(newContext, locals) {
            this.context = newContext;
            this.locals.parent = locals;
          },
          _hydrateChangeDetector: function() {
            this.changeDetector.hydrate(this.context, this.locals, this);
          },
          _dehydrateContext: function() {
            if (isPresent(this.locals)) {
              this.locals.clearValues();
            }
            this.context = null;
            this.changeDetector.dehydrate();
          },
          hydrate: function(appInjector, hostElementInjector, context, locals) {
            var renderComponentViewRefs = this.proto.renderer.createView(this.proto.render);
            this.internalHydrateRecurse(renderComponentViewRefs, 0, appInjector, hostElementInjector, context, locals);
          },
          dehydrate: function() {
            var render = this.render;
            this.internalDehydrateRecurse();
            this.proto.renderer.destroyView(render);
          },
          internalHydrateRecurse: function(renderComponentViewRefs, renderComponentIndex, appInjector, hostElementInjector, context, locals) {
            if (this.hydrated())
              throw new BaseException('The view is already hydrated.');
            this.render = renderComponentViewRefs[renderComponentIndex++];
            this._setContextAndLocals(context, locals);
            for (var i = 0; i < this.viewContainers.length; i++) {
              var vc = this.viewContainers[i];
              if (isPresent(vc)) {
                vc.internalHydrateRecurse(new renderApi.ViewContainerRef(this.render, i), appInjector, hostElementInjector);
              }
            }
            var binders = this.proto.elementBinders;
            var componentChildViewIndex = 0;
            for (var i = 0; i < binders.length; ++i) {
              var componentDirective = binders[i].componentDirective;
              var shadowDomAppInjector = null;
              if (isPresent(componentDirective)) {
                var injectables = componentDirective.resolvedInjectables;
                if (isPresent(injectables))
                  shadowDomAppInjector = appInjector.createChildFromResolved(injectables);
                else {
                  shadowDomAppInjector = appInjector;
                }
              } else {
                shadowDomAppInjector = null;
              }
              var elementInjector = this.elementInjectors[i];
              if (isPresent(elementInjector)) {
                elementInjector.instantiateDirectives(appInjector, hostElementInjector, shadowDomAppInjector, this.preBuiltObjects[i]);
                var exportImplicitName = elementInjector.getExportImplicitName();
                if (elementInjector.isExportingComponent()) {
                  this.locals.set(exportImplicitName, elementInjector.getComponent());
                } else if (elementInjector.isExportingElement()) {
                  this.locals.set(exportImplicitName, elementInjector.getNgElement());
                }
              }
              if (isPresent(binders[i].nestedProtoView) && isPresent(componentDirective)) {
                renderComponentIndex = this.componentChildViews[componentChildViewIndex].internalHydrateRecurse(renderComponentViewRefs, renderComponentIndex, shadowDomAppInjector, elementInjector, elementInjector.getComponent(), null);
                componentChildViewIndex++;
              }
            }
            this._hydrateChangeDetector();
            this.proto.renderer.setEventDispatcher(this.render, this);
            return renderComponentIndex;
          },
          internalDehydrateRecurse: function() {
            for (var i = 0; i < this.componentChildViews.length; i++) {
              this.componentChildViews[i].internalDehydrateRecurse();
            }
            for (var i = 0; i < this.elementInjectors.length; i++) {
              if (isPresent(this.elementInjectors[i])) {
                this.elementInjectors[i].clearDirectives();
              }
            }
            if (isPresent(this.viewContainers)) {
              for (var i = 0; i < this.viewContainers.length; i++) {
                var vc = this.viewContainers[i];
                if (isPresent(vc)) {
                  vc.internalDehydrateRecurse();
                }
              }
            }
            this.render = null;
            this._dehydrateContext();
          },
          triggerEventHandlers: function(eventName, eventObj, binderIndex) {
            var locals = MapWrapper.create();
            MapWrapper.set(locals, '$event', eventObj);
            this.dispatchEvent(binderIndex, eventName, locals);
          },
          notifyOnBinding: function(b, currentValue) {
            if (b.isElement()) {
              this.proto.renderer.setElementProperty(this.render, b.elementIndex, b.propertyName, currentValue);
            } else {
              this.proto.renderer.setText(this.render, b.elementIndex, currentValue);
            }
          },
          directive: function(directive) {
            var elementInjector = this.elementInjectors[directive.elementIndex];
            return elementInjector.getDirectiveAtIndex(directive.directiveIndex);
          },
          addComponentChildView: function(view) {
            ListWrapper.push(this.componentChildViews, view);
            this.changeDetector.addShadowDomChild(view.changeDetector);
          },
          dispatchEvent: function(elementIndex, eventName, locals) {
            var $__0 = this;
            if (this.hydrated()) {
              var elBinder = this.proto.elementBinders[elementIndex];
              if (isBlank(elBinder.hostListeners))
                return ;
              var eventMap = elBinder.hostListeners[eventName];
              if (isBlank(eventMap))
                return ;
              MapWrapper.forEach(eventMap, (function(expr, directiveIndex) {
                var context;
                if (directiveIndex === -1) {
                  context = $__0.context;
                } else {
                  context = $__0.elementInjectors[elementIndex].getDirectiveAtIndex(directiveIndex);
                }
                expr.eval(context, new Locals($__0.locals, locals));
              }));
            }
          }
        }, {});
      }()));
      Object.defineProperty(AppView, "annotations", {get: function() {
          return [new IMPLEMENTS(ChangeDispatcher)];
        }});
      Object.defineProperty(AppView, "parameters", {get: function() {
          return [[AppProtoView], [Map]];
        }});
      Object.defineProperty(AppView.prototype.init, "parameters", {get: function() {
          return [[ChangeDetector], [List], [List], [List], [List], [List]];
        }});
      Object.defineProperty(AppView.prototype.setLocal, "parameters", {get: function() {
          return [[assert.type.string], []];
        }});
      Object.defineProperty(AppView.prototype.hydrate, "parameters", {get: function() {
          return [[Injector], [ElementInjector], [Object], [Locals]];
        }});
      Object.defineProperty(AppView.prototype.internalHydrateRecurse, "parameters", {get: function() {
          return [[assert.genericType(List, renderApi.ViewRef)], [assert.type.number], [Injector], [ElementInjector], [Object], [Locals]];
        }});
      Object.defineProperty(AppView.prototype.triggerEventHandlers, "parameters", {get: function() {
          return [[assert.type.string], [], [int]];
        }});
      Object.defineProperty(AppView.prototype.notifyOnBinding, "parameters", {get: function() {
          return [[BindingRecord], [assert.type.any]];
        }});
      Object.defineProperty(AppView.prototype.directive, "parameters", {get: function() {
          return [[DirectiveRecord]];
        }});
      Object.defineProperty(AppView.prototype.addComponentChildView, "parameters", {get: function() {
          return [[AppView]];
        }});
      Object.defineProperty(AppView.prototype.dispatchEvent, "parameters", {get: function() {
          return [[assert.type.number], [assert.type.string], [assert.genericType(Map, assert.type.string, assert.type.any)]];
        }});
      AppProtoView = $__export("AppProtoView", (function() {
        var AppProtoView = function AppProtoView(renderer, render, protoChangeDetector) {
          this.renderer = renderer;
          this.render = render;
          this.elementBinders = [];
          this.variableBindings = MapWrapper.create();
          this.protoLocals = MapWrapper.create();
          this.protoChangeDetector = protoChangeDetector;
          this.parentProtoView = null;
          this.textNodesWithBindingCount = 0;
          this.bindings = [];
          this._directiveRecordsMap = MapWrapper.create();
          this._variableBindings = null;
          this._directiveRecords = null;
        };
        return ($traceurRuntime.createClass)(AppProtoView, {
          getVariableBindings: function() {
            var $__0 = this;
            if (isPresent(this._variableBindings)) {
              return this._variableBindings;
            }
            this._variableBindings = isPresent(this.parentProtoView) ? ListWrapper.clone(this.parentProtoView.getVariableBindings()) : [];
            MapWrapper.forEach(this.protoLocals, (function(v, local) {
              ListWrapper.push($__0._variableBindings, local);
            }));
            return this._variableBindings;
          },
          getdirectiveRecords: function() {
            if (isPresent(this._directiveRecords)) {
              return this._directiveRecords;
            }
            this._directiveRecords = [];
            for (var injectorIndex = 0; injectorIndex < this.elementBinders.length; ++injectorIndex) {
              var pei = this.elementBinders[injectorIndex].protoElementInjector;
              if (isPresent(pei)) {
                for (var directiveIndex = 0; directiveIndex < pei.numberOfDirectives; ++directiveIndex) {
                  ListWrapper.push(this._directiveRecords, this._getDirectiveRecord(injectorIndex, directiveIndex));
                }
              }
            }
            return this._directiveRecords;
          },
          bindVariable: function(contextName, templateName) {
            MapWrapper.set(this.variableBindings, contextName, templateName);
            MapWrapper.set(this.protoLocals, templateName, null);
          },
          bindElement: function(parent, distanceToParent, protoElementInjector) {
            var componentDirective = arguments[3] !== (void 0) ? arguments[3] : null;
            var viewportDirective = arguments[4] !== (void 0) ? arguments[4] : null;
            var elBinder = new ElementBinder(this.elementBinders.length, parent, distanceToParent, protoElementInjector, componentDirective, viewportDirective);
            ListWrapper.push(this.elementBinders, elBinder);
            return elBinder;
          },
          bindTextNode: function(expression) {
            var textNodeIndex = this.textNodesWithBindingCount++;
            var b = BindingRecord.createForTextNode(expression, textNodeIndex);
            ListWrapper.push(this.bindings, b);
          },
          bindElementProperty: function(expression, setterName) {
            var elementIndex = this.elementBinders.length - 1;
            var b = BindingRecord.createForElement(expression, elementIndex, setterName);
            ListWrapper.push(this.bindings, b);
          },
          bindEvent: function(eventBindings) {
            var directiveIndex = arguments[1] !== (void 0) ? arguments[1] : -1;
            var elBinder = this.elementBinders[this.elementBinders.length - 1];
            var events = elBinder.hostListeners;
            if (isBlank(events)) {
              events = StringMapWrapper.create();
              elBinder.hostListeners = events;
            }
            for (var i = 0; i < eventBindings.length; i++) {
              var eventBinding = eventBindings[i];
              var eventName = eventBinding.fullName;
              var event = StringMapWrapper.get(events, eventName);
              if (isBlank(event)) {
                event = MapWrapper.create();
                StringMapWrapper.set(events, eventName, event);
              }
              MapWrapper.set(event, directiveIndex, eventBinding.source);
            }
          },
          bindDirectiveProperty: function(directiveIndex, expression, setterName, setter) {
            var elementIndex = this.elementBinders.length - 1;
            var directiveRecord = this._getDirectiveRecord(elementIndex, directiveIndex);
            var b = BindingRecord.createForDirective(expression, setterName, setter, directiveRecord);
            ListWrapper.push(this.bindings, b);
          },
          _getDirectiveRecord: function(elementInjectorIndex, directiveIndex) {
            var id = elementInjectorIndex * 100 + directiveIndex;
            var protoElementInjector = this.elementBinders[elementInjectorIndex].protoElementInjector;
            if (!MapWrapper.contains(this._directiveRecordsMap, id)) {
              var binding = protoElementInjector.getDirectiveBindingAtIndex(directiveIndex);
              MapWrapper.set(this._directiveRecordsMap, id, new DirectiveRecord(elementInjectorIndex, directiveIndex, binding.callOnAllChangesDone, binding.callOnChange));
            }
            return MapWrapper.get(this._directiveRecordsMap, id);
          }
        }, {});
      }()));
      Object.defineProperty(AppProtoView, "parameters", {get: function() {
          return [[renderApi.Renderer], [renderApi.ProtoViewRef], [ProtoChangeDetector]];
        }});
      Object.defineProperty(AppProtoView.prototype.bindVariable, "parameters", {get: function() {
          return [[assert.type.string], [assert.type.string]];
        }});
      Object.defineProperty(AppProtoView.prototype.bindElement, "parameters", {get: function() {
          return [[ElementBinder], [int], [ProtoElementInjector], [DirectiveBinding], [DirectiveBinding]];
        }});
      Object.defineProperty(AppProtoView.prototype.bindTextNode, "parameters", {get: function() {
          return [[AST]];
        }});
      Object.defineProperty(AppProtoView.prototype.bindElementProperty, "parameters", {get: function() {
          return [[AST], [assert.type.string]];
        }});
      Object.defineProperty(AppProtoView.prototype.bindEvent, "parameters", {get: function() {
          return [[assert.genericType(List, renderApi.EventBinding)], [int]];
        }});
      Object.defineProperty(AppProtoView.prototype.bindDirectiveProperty, "parameters", {get: function() {
          return [[assert.type.number], [AST], [assert.type.string], [SetterFn]];
        }});
      Object.defineProperty(AppProtoView.prototype._getDirectiveRecord, "parameters", {get: function() {
          return [[assert.type.number], [assert.type.number]];
        }});
    }
  };
});
//# sourceMappingURL=view.es6.map

//# sourceMappingURL=./view.js.map