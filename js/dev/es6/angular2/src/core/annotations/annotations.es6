import {assert} from "rtts_assert/rtts_assert";
import {ABSTRACT,
  CONST,
  normalizeBlank,
  isPresent} from 'angular2/src/facade/lang';
import {ListWrapper,
  List} from 'angular2/src/facade/collection';
import {Injectable} from 'angular2/di';
export class Directive extends Injectable {
  constructor({selector,
    properties,
    hostListeners,
    lifecycle} = {}) {
    super();
    this.selector = selector;
    this.properties = properties;
    this.hostListeners = hostListeners;
    this.lifecycle = lifecycle;
  }
  hasLifecycleHook(hook) {
    assert.argumentTypes(hook, assert.type.string);
    return assert.returnType((isPresent(this.lifecycle) ? ListWrapper.contains(this.lifecycle, hook) : false), assert.type.boolean);
  }
}
Object.defineProperty(Directive, "annotations", {get: function() {
    return [new ABSTRACT(), new CONST()];
  }});
Object.defineProperty(Directive.prototype.hasLifecycleHook, "parameters", {get: function() {
    return [[assert.type.string]];
  }});
export class Component extends Directive {
  constructor({selector,
    properties,
    hostListeners,
    injectables,
    lifecycle,
    changeDetection} = {}) {
    super({
      selector: selector,
      properties: properties,
      hostListeners: hostListeners,
      lifecycle: lifecycle
    });
    this.changeDetection = changeDetection;
    this.injectables = injectables;
  }
}
Object.defineProperty(Component, "annotations", {get: function() {
    return [new CONST()];
  }});
export class DynamicComponent extends Directive {
  constructor({selector,
    properties,
    hostListeners,
    injectables,
    lifecycle} = {}) {
    super({
      selector: selector,
      properties: properties,
      hostListeners: hostListeners,
      lifecycle: lifecycle
    });
    this.injectables = injectables;
  }
}
Object.defineProperty(DynamicComponent, "annotations", {get: function() {
    return [new CONST()];
  }});
export class Decorator extends Directive {
  constructor({selector,
    properties,
    hostListeners,
    lifecycle,
    compileChildren = true} = {}) {
    super({
      selector: selector,
      properties: properties,
      hostListeners: hostListeners,
      lifecycle: lifecycle
    });
    this.compileChildren = compileChildren;
  }
}
Object.defineProperty(Decorator, "annotations", {get: function() {
    return [new CONST()];
  }});
export class Viewport extends Directive {
  constructor({selector,
    properties,
    hostListeners,
    lifecycle} = {}) {
    super({
      selector: selector,
      properties: properties,
      hostListeners: hostListeners,
      lifecycle: lifecycle
    });
  }
}
Object.defineProperty(Viewport, "annotations", {get: function() {
    return [new CONST()];
  }});
export const onDestroy = "onDestroy";
export const onChange = "onChange";
export const onAllChangesDone = "onAllChangesDone";
//# sourceMappingURL=annotations.js.map

//# sourceMappingURL=./annotations.map