"use strict";
Object.defineProperties(module.exports, {
  EventBinding: {get: function() {
      return EventBinding;
    }},
  ElementBinder: {get: function() {
      return ElementBinder;
    }},
  DirectiveBinder: {get: function() {
      return DirectiveBinder;
    }},
  ProtoViewDto: {get: function() {
      return ProtoViewDto;
    }},
  DirectiveMetadata: {get: function() {
      return DirectiveMetadata;
    }},
  ProtoViewRef: {get: function() {
      return ProtoViewRef;
    }},
  ViewRef: {get: function() {
      return ViewRef;
    }},
  ViewContainerRef: {get: function() {
      return ViewContainerRef;
    }},
  ViewDefinition: {get: function() {
      return ViewDefinition;
    }},
  Renderer: {get: function() {
      return Renderer;
    }},
  EventDispatcher: {get: function() {
      return EventDispatcher;
    }},
  __esModule: {value: true}
});
var $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_facade_47_async__,
    $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_change_95_detection__;
var isPresent = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}).isPresent;
var Promise = ($__angular2_47_src_47_facade_47_async__ = require("angular2/src/facade/async"), $__angular2_47_src_47_facade_47_async__ && $__angular2_47_src_47_facade_47_async__.__esModule && $__angular2_47_src_47_facade_47_async__ || {default: $__angular2_47_src_47_facade_47_async__}).Promise;
var $__2 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    List = $__2.List,
    Map = $__2.Map;
var ASTWithSource = ($__angular2_47_change_95_detection__ = require("angular2/change_detection"), $__angular2_47_change_95_detection__ && $__angular2_47_change_95_detection__.__esModule && $__angular2_47_change_95_detection__ || {default: $__angular2_47_change_95_detection__}).ASTWithSource;
var EventBinding = function EventBinding(fullName, source) {
  this.fullName = fullName;
  this.source = source;
};
($traceurRuntime.createClass)(EventBinding, {}, {});
Object.defineProperty(EventBinding, "parameters", {get: function() {
    return [[$traceurRuntime.type.string], [ASTWithSource]];
  }});
var ElementBinder = function ElementBinder($__5) {
  var $__6 = $__5,
      index = $__6.index,
      parentIndex = $__6.parentIndex,
      distanceToParent = $__6.distanceToParent,
      directives = $__6.directives,
      nestedProtoView = $__6.nestedProtoView,
      propertyBindings = $__6.propertyBindings,
      variableBindings = $__6.variableBindings,
      eventBindings = $__6.eventBindings,
      textBindings = $__6.textBindings,
      readAttributes = $__6.readAttributes;
  this.index = index;
  this.parentIndex = parentIndex;
  this.distanceToParent = distanceToParent;
  this.directives = directives;
  this.nestedProtoView = nestedProtoView;
  this.propertyBindings = propertyBindings;
  this.variableBindings = variableBindings;
  this.eventBindings = eventBindings;
  this.textBindings = textBindings;
  this.readAttributes = readAttributes;
};
($traceurRuntime.createClass)(ElementBinder, {}, {});
var DirectiveBinder = function DirectiveBinder($__5) {
  var $__6 = $__5,
      directiveIndex = $__6.directiveIndex,
      propertyBindings = $__6.propertyBindings,
      eventBindings = $__6.eventBindings;
  this.directiveIndex = directiveIndex;
  this.propertyBindings = propertyBindings;
  this.eventBindings = eventBindings;
};
($traceurRuntime.createClass)(DirectiveBinder, {}, {});
var ProtoViewDto = function ProtoViewDto() {
  var $__5 = arguments[0] !== (void 0) ? arguments[0] : {},
      render = $__5.render,
      elementBinders = $__5.elementBinders,
      variableBindings = $__5.variableBindings;
  this.render = render;
  this.elementBinders = elementBinders;
  this.variableBindings = variableBindings;
};
($traceurRuntime.createClass)(ProtoViewDto, {}, {});
var DirectiveMetadata = function DirectiveMetadata($__5) {
  var $__6 = $__5,
      id = $__6.id,
      selector = $__6.selector,
      compileChildren = $__6.compileChildren,
      hostListeners = $__6.hostListeners,
      properties = $__6.properties,
      setters = $__6.setters,
      readAttributes = $__6.readAttributes,
      type = $__6.type;
  this.id = id;
  this.selector = selector;
  this.compileChildren = isPresent(compileChildren) ? compileChildren : true;
  this.hostListeners = hostListeners;
  this.properties = properties;
  this.setters = setters;
  this.readAttributes = readAttributes;
  this.type = type;
};
($traceurRuntime.createClass)(DirectiveMetadata, {}, {
  get DECORATOR_TYPE() {
    return 0;
  },
  get COMPONENT_TYPE() {
    return 1;
  },
  get VIEWPORT_TYPE() {
    return 2;
  }
});
var ProtoViewRef = function ProtoViewRef() {
  ;
};
($traceurRuntime.createClass)(ProtoViewRef, {}, {});
var ViewRef = function ViewRef() {
  ;
};
($traceurRuntime.createClass)(ViewRef, {}, {});
var ViewContainerRef = function ViewContainerRef(view, elementIndex) {
  this.view = view;
  this.elementIndex = elementIndex;
};
($traceurRuntime.createClass)(ViewContainerRef, {}, {});
Object.defineProperty(ViewContainerRef, "parameters", {get: function() {
    return [[ViewRef], [$traceurRuntime.type.number]];
  }});
var ViewDefinition = function ViewDefinition($__5) {
  var $__6 = $__5,
      componentId = $__6.componentId,
      absUrl = $__6.absUrl,
      template = $__6.template,
      directives = $__6.directives;
  this.componentId = componentId;
  this.absUrl = absUrl;
  this.template = template;
  this.directives = directives;
};
($traceurRuntime.createClass)(ViewDefinition, {}, {});
var Renderer = function Renderer() {
  ;
};
($traceurRuntime.createClass)(Renderer, {
  compile: function(template) {
    return null;
  },
  mergeChildComponentProtoViews: function(protoViewRef, componentProtoViewRefs) {
    return null;
  },
  createRootProtoView: function(selectorOrElement, componentId) {
    return null;
  },
  createView: function(protoView) {
    return null;
  },
  destroyView: function(view) {},
  insertViewIntoContainer: function(vcRef, view, atIndex) {},
  detachViewFromContainer: function(vcRef, atIndex) {},
  setElementProperty: function(view, elementIndex, propertyName, propertyValue) {},
  setDynamicComponentView: function(view, elementIndex, nestedViewRef) {},
  setText: function(view, textNodeIndex, text) {},
  setEventDispatcher: function(viewRef, dispatcher) {},
  flush: function() {}
}, {});
Object.defineProperty(Renderer.prototype.compile, "parameters", {get: function() {
    return [[ViewDefinition]];
  }});
Object.defineProperty(Renderer.prototype.mergeChildComponentProtoViews, "parameters", {get: function() {
    return [[ProtoViewRef], [$traceurRuntime.genericType(List, ProtoViewRef)]];
  }});
Object.defineProperty(Renderer.prototype.createView, "parameters", {get: function() {
    return [[ProtoViewRef]];
  }});
Object.defineProperty(Renderer.prototype.destroyView, "parameters", {get: function() {
    return [[ViewRef]];
  }});
Object.defineProperty(Renderer.prototype.insertViewIntoContainer, "parameters", {get: function() {
    return [[ViewContainerRef], [ViewRef], []];
  }});
Object.defineProperty(Renderer.prototype.detachViewFromContainer, "parameters", {get: function() {
    return [[ViewContainerRef], [$traceurRuntime.type.number]];
  }});
Object.defineProperty(Renderer.prototype.setElementProperty, "parameters", {get: function() {
    return [[ViewRef], [$traceurRuntime.type.number], [$traceurRuntime.type.string], [$traceurRuntime.type.any]];
  }});
Object.defineProperty(Renderer.prototype.setDynamicComponentView, "parameters", {get: function() {
    return [[ViewRef], [$traceurRuntime.type.number], [ViewRef]];
  }});
Object.defineProperty(Renderer.prototype.setText, "parameters", {get: function() {
    return [[ViewRef], [$traceurRuntime.type.number], [$traceurRuntime.type.string]];
  }});
Object.defineProperty(Renderer.prototype.setEventDispatcher, "parameters", {get: function() {
    return [[ViewRef], [$traceurRuntime.type.any]];
  }});
var EventDispatcher = function EventDispatcher() {
  ;
};
($traceurRuntime.createClass)(EventDispatcher, {dispatchEvent: function(elementIndex, eventName, locals) {}}, {});
Object.defineProperty(EventDispatcher.prototype.dispatchEvent, "parameters", {get: function() {
    return [[$traceurRuntime.type.number], [$traceurRuntime.type.string], [$traceurRuntime.genericType(Map, $traceurRuntime.type.string, $traceurRuntime.type.any)]];
  }});
//# sourceMappingURL=api.js.map

//# sourceMappingURL=./api.map