import {assert} from "rtts_assert/rtts_assert";
import {Type,
  isBlank,
  isPresent,
  CONST} from 'angular2/src/facade/lang';
import {List,
  MapWrapper,
  ListWrapper} from 'angular2/src/facade/collection';
import {reflector} from 'angular2/src/reflection/reflection';
import {Key} from './key';
import {Inject,
  InjectLazy,
  InjectPromise,
  Optional,
  DependencyAnnotation} from './annotations';
import {NoAnnotationError} from './exceptions';
export class Dependency {
  constructor(key, asPromise, lazy, optional, properties) {
    assert.argumentTypes(key, Key, asPromise, assert.type.boolean, lazy, assert.type.boolean, optional, assert.type.boolean, properties, List);
    this.key = key;
    this.asPromise = asPromise;
    this.lazy = lazy;
    this.optional = optional;
    this.properties = properties;
  }
  static fromKey(key) {
    assert.argumentTypes(key, Key);
    return new Dependency(key, false, false, false, []);
  }
}
Object.defineProperty(Dependency, "parameters", {get: function() {
    return [[Key], [assert.type.boolean], [assert.type.boolean], [assert.type.boolean], [List]];
  }});
Object.defineProperty(Dependency.fromKey, "parameters", {get: function() {
    return [[Key]];
  }});
var _EMPTY_LIST = [];
export class Binding {
  constructor(token, {toClass,
    toValue,
    toAlias,
    toFactory,
    toAsyncFactory,
    deps}) {
    this.token = token;
    this.toClass = toClass;
    this.toValue = toValue;
    this.toAlias = toAlias;
    this.toFactory = toFactory;
    this.toAsyncFactory = toAsyncFactory;
    this.dependencies = deps;
  }
  resolve() {
    var factoryFn;
    var resolvedDeps;
    var isAsync = false;
    if (isPresent(this.toClass)) {
      factoryFn = reflector.factory(this.toClass);
      resolvedDeps = _dependenciesFor(this.toClass);
    } else if (isPresent(this.toAlias)) {
      factoryFn = (aliasInstance) => aliasInstance;
      resolvedDeps = [Dependency.fromKey(Key.get(this.toAlias))];
    } else if (isPresent(this.toFactory)) {
      factoryFn = this.toFactory;
      resolvedDeps = _constructDependencies(this.toFactory, this.dependencies);
    } else if (isPresent(this.toAsyncFactory)) {
      factoryFn = this.toAsyncFactory;
      resolvedDeps = _constructDependencies(this.toAsyncFactory, this.dependencies);
      isAsync = true;
    } else {
      factoryFn = () => this.toValue;
      resolvedDeps = _EMPTY_LIST;
    }
    return assert.returnType((new ResolvedBinding(Key.get(this.token), factoryFn, resolvedDeps, isAsync)), ResolvedBinding);
  }
}
Object.defineProperty(Binding, "annotations", {get: function() {
    return [new CONST()];
  }});
export class ResolvedBinding {
  constructor(key, factory, dependencies, providedAsPromise) {
    assert.argumentTypes(key, Key, factory, Function, dependencies, assert.genericType(List, Dependency), providedAsPromise, assert.type.boolean);
    this.key = key;
    this.factory = factory;
    this.dependencies = dependencies;
    this.providedAsPromise = providedAsPromise;
  }
}
Object.defineProperty(ResolvedBinding, "parameters", {get: function() {
    return [[Key], [Function], [assert.genericType(List, Dependency)], [assert.type.boolean]];
  }});
export function bind(token) {
  return assert.returnType((new BindingBuilder(token)), BindingBuilder);
}
export class BindingBuilder {
  constructor(token) {
    this.token = token;
  }
  toClass(type) {
    assert.argumentTypes(type, Type);
    return assert.returnType((new Binding(this.token, {toClass: type})), Binding);
  }
  toValue(value) {
    return assert.returnType((new Binding(this.token, {toValue: value})), Binding);
  }
  toAlias(aliasToken) {
    return assert.returnType((new Binding(this.token, {toAlias: aliasToken})), Binding);
  }
  toFactory(factoryFunction, dependencies = null) {
    assert.argumentTypes(factoryFunction, Function, dependencies, List);
    return assert.returnType((new Binding(this.token, {
      toFactory: factoryFunction,
      deps: dependencies
    })), Binding);
  }
  toAsyncFactory(factoryFunction, dependencies = null) {
    assert.argumentTypes(factoryFunction, Function, dependencies, List);
    return assert.returnType((new Binding(this.token, {
      toAsyncFactory: factoryFunction,
      deps: dependencies
    })), Binding);
  }
}
Object.defineProperty(BindingBuilder.prototype.toClass, "parameters", {get: function() {
    return [[Type]];
  }});
Object.defineProperty(BindingBuilder.prototype.toFactory, "parameters", {get: function() {
    return [[Function], [List]];
  }});
Object.defineProperty(BindingBuilder.prototype.toAsyncFactory, "parameters", {get: function() {
    return [[Function], [List]];
  }});
function _constructDependencies(factoryFunction, dependencies) {
  return isBlank(dependencies) ? _dependenciesFor(factoryFunction) : ListWrapper.map(dependencies, (t) => Dependency.fromKey(Key.get(t)));
}
Object.defineProperty(_constructDependencies, "parameters", {get: function() {
    return [[Function], [List]];
  }});
function _dependenciesFor(typeOrFunc) {
  var params = reflector.parameters(typeOrFunc);
  if (isBlank(params))
    return assert.returnType(([]), List);
  if (ListWrapper.any(params, (p) => isBlank(p)))
    throw new NoAnnotationError(typeOrFunc);
  return assert.returnType((ListWrapper.map(params, (p) => _extractToken(typeOrFunc, p))), List);
}
function _extractToken(typeOrFunc, annotations) {
  var depProps = [];
  var token = null;
  var optional = false;
  var lazy = false;
  var asPromise = false;
  for (var i = 0; i < annotations.length; ++i) {
    var paramAnnotation = annotations[i];
    if (paramAnnotation instanceof Type) {
      token = paramAnnotation;
    } else if (paramAnnotation instanceof Inject) {
      token = paramAnnotation.token;
    } else if (paramAnnotation instanceof InjectPromise) {
      token = paramAnnotation.token;
      asPromise = true;
    } else if (paramAnnotation instanceof InjectLazy) {
      token = paramAnnotation.token;
      lazy = true;
    } else if (paramAnnotation instanceof Optional) {
      optional = true;
    } else if (paramAnnotation instanceof DependencyAnnotation) {
      if (isPresent(paramAnnotation.token)) {
        token = paramAnnotation.token;
      }
      ListWrapper.push(depProps, paramAnnotation);
    }
  }
  if (isPresent(token)) {
    return _createDependency(token, asPromise, lazy, optional, depProps);
  } else {
    throw new NoAnnotationError(typeOrFunc);
  }
}
function _createDependency(token, asPromise, lazy, optional, depProps) {
  return assert.returnType((new Dependency(Key.get(token), asPromise, lazy, optional, depProps)), Dependency);
}
//# sourceMappingURL=binding.js.map

//# sourceMappingURL=./binding.map