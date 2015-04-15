"use strict";
Object.defineProperties(module.exports, {
  ProtoViewBuilder: {get: function() {
      return ProtoViewBuilder;
    }},
  ElementBinderBuilder: {get: function() {
      return ElementBinderBuilder;
    }},
  DirectiveBuilder: {get: function() {
      return DirectiveBuilder;
    }},
  EventBuilder: {get: function() {
      return EventBuilder;
    }},
  __esModule: {value: true}
});
var $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_src_47_dom_47_dom_95_adapter__,
    $__angular2_47_change_95_detection__,
    $__angular2_47_src_47_reflection_47_types__,
    $__proto_95_view__,
    $__element_95_binder__,
    $__property_95_setter_95_factory__,
    $___46__46__47__46__46__47_api__,
    $___46__46__47_direct_95_dom_95_renderer__,
    $___46__46__47_util__;
var $__0 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    isPresent = $__0.isPresent,
    isBlank = $__0.isBlank,
    BaseException = $__0.BaseException;
var $__1 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    ListWrapper = $__1.ListWrapper,
    MapWrapper = $__1.MapWrapper,
    Set = $__1.Set,
    SetWrapper = $__1.SetWrapper,
    List = $__1.List;
var DOM = ($__angular2_47_src_47_dom_47_dom_95_adapter__ = require("angular2/src/dom/dom_adapter"), $__angular2_47_src_47_dom_47_dom_95_adapter__ && $__angular2_47_src_47_dom_47_dom_95_adapter__.__esModule && $__angular2_47_src_47_dom_47_dom_95_adapter__ || {default: $__angular2_47_src_47_dom_47_dom_95_adapter__}).DOM;
var $__3 = ($__angular2_47_change_95_detection__ = require("angular2/change_detection"), $__angular2_47_change_95_detection__ && $__angular2_47_change_95_detection__.__esModule && $__angular2_47_change_95_detection__ || {default: $__angular2_47_change_95_detection__}),
    ASTWithSource = $__3.ASTWithSource,
    AST = $__3.AST,
    AstTransformer = $__3.AstTransformer,
    AccessMember = $__3.AccessMember,
    LiteralArray = $__3.LiteralArray,
    ImplicitReceiver = $__3.ImplicitReceiver;
var SetterFn = ($__angular2_47_src_47_reflection_47_types__ = require("angular2/src/reflection/types"), $__angular2_47_src_47_reflection_47_types__ && $__angular2_47_src_47_reflection_47_types__.__esModule && $__angular2_47_src_47_reflection_47_types__ || {default: $__angular2_47_src_47_reflection_47_types__}).SetterFn;
var RenderProtoView = ($__proto_95_view__ = require("./proto_view"), $__proto_95_view__ && $__proto_95_view__.__esModule && $__proto_95_view__ || {default: $__proto_95_view__}).RenderProtoView;
var $__6 = ($__element_95_binder__ = require("./element_binder"), $__element_95_binder__ && $__element_95_binder__.__esModule && $__element_95_binder__ || {default: $__element_95_binder__}),
    ElementBinder = $__6.ElementBinder,
    Event = $__6.Event;
var setterFactory = ($__property_95_setter_95_factory__ = require("./property_setter_factory"), $__property_95_setter_95_factory__ && $__property_95_setter_95_factory__.__esModule && $__property_95_setter_95_factory__ || {default: $__property_95_setter_95_factory__}).setterFactory;
var api = ($___46__46__47__46__46__47_api__ = require("../../api"), $___46__46__47__46__46__47_api__ && $___46__46__47__46__46__47_api__.__esModule && $___46__46__47__46__46__47_api__ || {default: $___46__46__47__46__46__47_api__});
var directDomRenderer = ($___46__46__47_direct_95_dom_95_renderer__ = require("../direct_dom_renderer"), $___46__46__47_direct_95_dom_95_renderer__ && $___46__46__47_direct_95_dom_95_renderer__.__esModule && $___46__46__47_direct_95_dom_95_renderer__ || {default: $___46__46__47_direct_95_dom_95_renderer__});
var $__8 = ($___46__46__47_util__ = require("../util"), $___46__46__47_util__ && $___46__46__47_util__.__esModule && $___46__46__47_util__ || {default: $___46__46__47_util__}),
    NG_BINDING_CLASS = $__8.NG_BINDING_CLASS,
    EVENT_TARGET_SEPARATOR = $__8.EVENT_TARGET_SEPARATOR;
var ProtoViewBuilder = function ProtoViewBuilder(rootElement) {
  this.rootElement = rootElement;
  this.elements = [];
  this.isRootView = false;
  this.variableBindings = MapWrapper.create();
};
($traceurRuntime.createClass)(ProtoViewBuilder, {
  bindElement: function(element) {
    var description = arguments[1] !== (void 0) ? arguments[1] : null;
    var builder = new ElementBinderBuilder(this.elements.length, element, description);
    ListWrapper.push(this.elements, builder);
    DOM.addClass(element, NG_BINDING_CLASS);
    return builder;
  },
  bindVariable: function(name, value) {
    MapWrapper.set(this.variableBindings, value, name);
  },
  setIsRootView: function(value) {
    this.isRootView = value;
  },
  build: function() {
    var renderElementBinders = [];
    var apiElementBinders = [];
    ListWrapper.forEach(this.elements, (function(ebb) {
      var propertySetters = MapWrapper.create();
      var apiDirectiveBinders = ListWrapper.map(ebb.directives, (function(db) {
        ebb.eventBuilder.merge(db.eventBuilder);
        return new api.DirectiveBinder({
          directiveIndex: db.directiveIndex,
          propertyBindings: db.propertyBindings,
          eventBindings: db.eventBindings
        });
      }));
      MapWrapper.forEach(ebb.propertySetters, (function(setter, propertyName) {
        MapWrapper.set(propertySetters, propertyName, setter);
      }));
      var nestedProtoView = isPresent(ebb.nestedProtoView) ? ebb.nestedProtoView.build() : null;
      var parentIndex = isPresent(ebb.parent) ? ebb.parent.index : -1;
      ListWrapper.push(apiElementBinders, new api.ElementBinder({
        index: ebb.index,
        parentIndex: parentIndex,
        distanceToParent: ebb.distanceToParent,
        directives: apiDirectiveBinders,
        nestedProtoView: nestedProtoView,
        propertyBindings: ebb.propertyBindings,
        variableBindings: ebb.variableBindings,
        eventBindings: ebb.eventBindings,
        textBindings: ebb.textBindings,
        readAttributes: ebb.readAttributes
      }));
      ListWrapper.push(renderElementBinders, new ElementBinder({
        textNodeIndices: ebb.textBindingIndices,
        contentTagSelector: ebb.contentTagSelector,
        parentIndex: parentIndex,
        distanceToParent: ebb.distanceToParent,
        nestedProtoView: isPresent(nestedProtoView) ? nestedProtoView.render.delegate : null,
        componentId: ebb.componentId,
        eventLocals: new LiteralArray(ebb.eventBuilder.buildEventLocals()),
        localEvents: ebb.eventBuilder.buildLocalEvents(),
        globalEvents: ebb.eventBuilder.buildGlobalEvents(),
        propertySetters: propertySetters
      }));
    }));
    return new api.ProtoViewDto({
      render: new directDomRenderer.DirectDomProtoViewRef(new RenderProtoView({
        element: this.rootElement,
        elementBinders: renderElementBinders,
        isRootView: this.isRootView
      })),
      elementBinders: apiElementBinders,
      variableBindings: this.variableBindings
    });
  }
}, {});
var ElementBinderBuilder = function ElementBinderBuilder(index, element, description) {
  this.element = element;
  this.index = index;
  this.parent = null;
  this.distanceToParent = 0;
  this.directives = [];
  this.nestedProtoView = null;
  this.propertyBindings = MapWrapper.create();
  this.variableBindings = MapWrapper.create();
  this.eventBindings = ListWrapper.create();
  this.eventBuilder = new EventBuilder();
  this.textBindings = [];
  this.textBindingIndices = [];
  this.contentTagSelector = null;
  this.propertySetters = MapWrapper.create();
  this.componentId = null;
  this.readAttributes = MapWrapper.create();
};
var $ElementBinderBuilder = ElementBinderBuilder;
($traceurRuntime.createClass)(ElementBinderBuilder, {
  setParent: function(parent, distanceToParent) {
    this.parent = parent;
    if (isPresent(parent)) {
      this.distanceToParent = distanceToParent;
    }
    return this;
  },
  readAttribute: function(attrName) {
    if (isBlank(MapWrapper.get(this.readAttributes, attrName))) {
      MapWrapper.set(this.readAttributes, attrName, DOM.getAttribute(this.element, attrName));
    }
  },
  bindDirective: function(directiveIndex) {
    var directive = new DirectiveBuilder(directiveIndex);
    ListWrapper.push(this.directives, directive);
    return directive;
  },
  bindNestedProtoView: function(rootElement) {
    if (isPresent(this.nestedProtoView)) {
      throw new BaseException('Only one nested view per element is allowed');
    }
    this.nestedProtoView = new ProtoViewBuilder(rootElement);
    return this.nestedProtoView;
  },
  bindProperty: function(name, expression) {
    MapWrapper.set(this.propertyBindings, name, expression);
    this.bindPropertySetter(name);
  },
  bindPropertySetter: function(name) {
    MapWrapper.set(this.propertySetters, name, setterFactory(name));
  },
  bindVariable: function(name, value) {
    if (isPresent(this.nestedProtoView)) {
      this.nestedProtoView.bindVariable(name, value);
    } else {
      MapWrapper.set(this.variableBindings, value, name);
    }
  },
  bindEvent: function(name, expression) {
    var target = arguments[2] !== (void 0) ? arguments[2] : null;
    ListWrapper.push(this.eventBindings, this.eventBuilder.add(name, expression, target));
  },
  bindText: function(index, expression) {
    ListWrapper.push(this.textBindingIndices, index);
    ListWrapper.push(this.textBindings, expression);
  },
  setContentTagSelector: function(value) {
    this.contentTagSelector = value;
  },
  setComponentId: function(componentId) {
    this.componentId = componentId;
  }
}, {});
Object.defineProperty(ElementBinderBuilder.prototype.setParent, "parameters", {get: function() {
    return [[ElementBinderBuilder], []];
  }});
Object.defineProperty(ElementBinderBuilder.prototype.readAttribute, "parameters", {get: function() {
    return [[$traceurRuntime.type.string]];
  }});
Object.defineProperty(ElementBinderBuilder.prototype.bindDirective, "parameters", {get: function() {
    return [[$traceurRuntime.type.number]];
  }});
Object.defineProperty(ElementBinderBuilder.prototype.setContentTagSelector, "parameters", {get: function() {
    return [[$traceurRuntime.type.string]];
  }});
Object.defineProperty(ElementBinderBuilder.prototype.setComponentId, "parameters", {get: function() {
    return [[$traceurRuntime.type.string]];
  }});
var DirectiveBuilder = function DirectiveBuilder(directiveIndex) {
  this.directiveIndex = directiveIndex;
  this.propertyBindings = MapWrapper.create();
  this.eventBindings = ListWrapper.create();
  this.eventBuilder = new EventBuilder();
};
($traceurRuntime.createClass)(DirectiveBuilder, {
  bindProperty: function(name, expression) {
    MapWrapper.set(this.propertyBindings, name, expression);
  },
  bindEvent: function(name, expression) {
    var target = arguments[2] !== (void 0) ? arguments[2] : null;
    ListWrapper.push(this.eventBindings, this.eventBuilder.add(name, expression, target));
  }
}, {});
var EventBuilder = function EventBuilder() {
  $traceurRuntime.superConstructor($EventBuilder).call(this);
  this.locals = [];
  this.localEvents = [];
  this.globalEvents = [];
  this._implicitReceiver = new ImplicitReceiver();
};
var $EventBuilder = EventBuilder;
($traceurRuntime.createClass)(EventBuilder, {
  add: function(name, source, target) {
    var adjustedAst = source.ast;
    var fullName = isPresent(target) ? target + EVENT_TARGET_SEPARATOR + name : name;
    var result = new api.EventBinding(fullName, new ASTWithSource(adjustedAst, source.source, ''));
    var event = new Event(name, target, fullName);
    if (isBlank(target)) {
      ListWrapper.push(this.localEvents, event);
    } else {
      ListWrapper.push(this.globalEvents, event);
    }
    return result;
  },
  visitAccessMember: function(ast) {
    var isEventAccess = false;
    var current = ast;
    while (!isEventAccess && (current instanceof AccessMember)) {
      if (current.name == '$event') {
        isEventAccess = true;
      }
      current = current.receiver;
    }
    if (isEventAccess) {
      ListWrapper.push(this.locals, ast);
      var index = this.locals.length - 1;
      return new AccessMember(this._implicitReceiver, ("" + index), (function(arr) {
        return arr[index];
      }), null);
    } else {
      return ast;
    }
  },
  buildEventLocals: function() {
    return this.locals;
  },
  buildLocalEvents: function() {
    return this.localEvents;
  },
  buildGlobalEvents: function() {
    return this.globalEvents;
  },
  merge: function(eventBuilder) {
    this._merge(this.localEvents, eventBuilder.localEvents);
    this._merge(this.globalEvents, eventBuilder.globalEvents);
    ListWrapper.concat(this.locals, eventBuilder.locals);
  },
  _merge: function(host, tobeAdded) {
    var names = ListWrapper.create();
    for (var i = 0; i < host.length; i++) {
      ListWrapper.push(names, host[i].fullName);
    }
    for (var j = 0; j < tobeAdded.length; j++) {
      if (!ListWrapper.contains(names, tobeAdded[j].fullName)) {
        ListWrapper.push(host, tobeAdded[j]);
      }
    }
  }
}, {}, AstTransformer);
Object.defineProperty(EventBuilder.prototype.add, "parameters", {get: function() {
    return [[$traceurRuntime.type.string], [ASTWithSource], [$traceurRuntime.type.string]];
  }});
Object.defineProperty(EventBuilder.prototype.visitAccessMember, "parameters", {get: function() {
    return [[AccessMember]];
  }});
Object.defineProperty(EventBuilder.prototype.merge, "parameters", {get: function() {
    return [[EventBuilder]];
  }});
Object.defineProperty(EventBuilder.prototype._merge, "parameters", {get: function() {
    return [[$traceurRuntime.genericType(List, Event)], [$traceurRuntime.genericType(List, Event)]];
  }});
//# sourceMappingURL=proto_view_builder.js.map

//# sourceMappingURL=./proto_view_builder.map