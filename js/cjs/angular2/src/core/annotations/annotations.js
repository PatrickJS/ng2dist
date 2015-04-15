"use strict";
Object.defineProperties(module.exports, {
  Directive: {get: function() {
      return Directive;
    }},
  Component: {get: function() {
      return Component;
    }},
  DynamicComponent: {get: function() {
      return DynamicComponent;
    }},
  Decorator: {get: function() {
      return Decorator;
    }},
  Viewport: {get: function() {
      return Viewport;
    }},
  onDestroy: {get: function() {
      return onDestroy;
    }},
  onChange: {get: function() {
      return onChange;
    }},
  onAllChangesDone: {get: function() {
      return onAllChangesDone;
    }},
  __esModule: {value: true}
});
var $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_di__;
var $__0 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    ABSTRACT = $__0.ABSTRACT,
    CONST = $__0.CONST,
    normalizeBlank = $__0.normalizeBlank,
    isPresent = $__0.isPresent;
var $__1 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    ListWrapper = $__1.ListWrapper,
    List = $__1.List;
var Injectable = ($__angular2_47_di__ = require("angular2/di"), $__angular2_47_di__ && $__angular2_47_di__.__esModule && $__angular2_47_di__ || {default: $__angular2_47_di__}).Injectable;
var Directive = function Directive() {
  var $__4 = arguments[0] !== (void 0) ? arguments[0] : {},
      selector = $__4.selector,
      properties = $__4.properties,
      hostListeners = $__4.hostListeners,
      lifecycle = $__4.lifecycle;
  $traceurRuntime.superConstructor($Directive).call(this);
  this.selector = selector;
  this.properties = properties;
  this.hostListeners = hostListeners;
  this.lifecycle = lifecycle;
};
var $Directive = Directive;
($traceurRuntime.createClass)(Directive, {hasLifecycleHook: function(hook) {
    return isPresent(this.lifecycle) ? ListWrapper.contains(this.lifecycle, hook) : false;
  }}, {}, Injectable);
Object.defineProperty(Directive, "annotations", {get: function() {
    return [new ABSTRACT(), new CONST()];
  }});
Object.defineProperty(Directive.prototype.hasLifecycleHook, "parameters", {get: function() {
    return [[$traceurRuntime.type.string]];
  }});
var Component = function Component() {
  var $__4 = arguments[0] !== (void 0) ? arguments[0] : {},
      selector = $__4.selector,
      properties = $__4.properties,
      hostListeners = $__4.hostListeners,
      injectables = $__4.injectables,
      lifecycle = $__4.lifecycle,
      changeDetection = $__4.changeDetection;
  $traceurRuntime.superConstructor($Component).call(this, {
    selector: selector,
    properties: properties,
    hostListeners: hostListeners,
    lifecycle: lifecycle
  });
  this.changeDetection = changeDetection;
  this.injectables = injectables;
};
var $Component = Component;
($traceurRuntime.createClass)(Component, {}, {}, Directive);
Object.defineProperty(Component, "annotations", {get: function() {
    return [new CONST()];
  }});
var DynamicComponent = function DynamicComponent() {
  var $__4 = arguments[0] !== (void 0) ? arguments[0] : {},
      selector = $__4.selector,
      properties = $__4.properties,
      hostListeners = $__4.hostListeners,
      injectables = $__4.injectables,
      lifecycle = $__4.lifecycle;
  $traceurRuntime.superConstructor($DynamicComponent).call(this, {
    selector: selector,
    properties: properties,
    hostListeners: hostListeners,
    lifecycle: lifecycle
  });
  this.injectables = injectables;
};
var $DynamicComponent = DynamicComponent;
($traceurRuntime.createClass)(DynamicComponent, {}, {}, Directive);
Object.defineProperty(DynamicComponent, "annotations", {get: function() {
    return [new CONST()];
  }});
var Decorator = function Decorator() {
  var $__5;
  var $__4 = arguments[0] !== (void 0) ? arguments[0] : {},
      selector = $__4.selector,
      properties = $__4.properties,
      hostListeners = $__4.hostListeners,
      lifecycle = $__4.lifecycle,
      compileChildren = ($__5 = $__4.compileChildren) === void 0 ? true : $__5;
  $traceurRuntime.superConstructor($Decorator).call(this, {
    selector: selector,
    properties: properties,
    hostListeners: hostListeners,
    lifecycle: lifecycle
  });
  this.compileChildren = compileChildren;
};
var $Decorator = Decorator;
($traceurRuntime.createClass)(Decorator, {}, {}, Directive);
Object.defineProperty(Decorator, "annotations", {get: function() {
    return [new CONST()];
  }});
var Viewport = function Viewport() {
  var $__4 = arguments[0] !== (void 0) ? arguments[0] : {},
      selector = $__4.selector,
      properties = $__4.properties,
      hostListeners = $__4.hostListeners,
      lifecycle = $__4.lifecycle;
  $traceurRuntime.superConstructor($Viewport).call(this, {
    selector: selector,
    properties: properties,
    hostListeners: hostListeners,
    lifecycle: lifecycle
  });
};
var $Viewport = Viewport;
($traceurRuntime.createClass)(Viewport, {}, {}, Directive);
Object.defineProperty(Viewport, "annotations", {get: function() {
    return [new CONST()];
  }});
var onDestroy = "onDestroy";
var onChange = "onChange";
var onAllChangesDone = "onAllChangesDone";
//# sourceMappingURL=annotations.js.map

//# sourceMappingURL=./annotations.map