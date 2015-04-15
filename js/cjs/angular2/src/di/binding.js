"use strict";
Object.defineProperties(module.exports, {
  Dependency: {get: function() {
      return Dependency;
    }},
  Binding: {get: function() {
      return Binding;
    }},
  ResolvedBinding: {get: function() {
      return ResolvedBinding;
    }},
  bind: {get: function() {
      return bind;
    }},
  BindingBuilder: {get: function() {
      return BindingBuilder;
    }},
  __esModule: {value: true}
});
var $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_src_47_reflection_47_reflection__,
    $__key__,
    $__annotations__,
    $__exceptions__;
var $__0 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    Type = $__0.Type,
    isBlank = $__0.isBlank,
    isPresent = $__0.isPresent,
    CONST = $__0.CONST;
var $__1 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    List = $__1.List,
    MapWrapper = $__1.MapWrapper,
    ListWrapper = $__1.ListWrapper;
var reflector = ($__angular2_47_src_47_reflection_47_reflection__ = require("angular2/src/reflection/reflection"), $__angular2_47_src_47_reflection_47_reflection__ && $__angular2_47_src_47_reflection_47_reflection__.__esModule && $__angular2_47_src_47_reflection_47_reflection__ || {default: $__angular2_47_src_47_reflection_47_reflection__}).reflector;
var Key = ($__key__ = require("./key"), $__key__ && $__key__.__esModule && $__key__ || {default: $__key__}).Key;
var $__4 = ($__annotations__ = require("./annotations"), $__annotations__ && $__annotations__.__esModule && $__annotations__ || {default: $__annotations__}),
    Inject = $__4.Inject,
    InjectLazy = $__4.InjectLazy,
    InjectPromise = $__4.InjectPromise,
    Optional = $__4.Optional,
    DependencyAnnotation = $__4.DependencyAnnotation;
var NoAnnotationError = ($__exceptions__ = require("./exceptions"), $__exceptions__ && $__exceptions__.__esModule && $__exceptions__ || {default: $__exceptions__}).NoAnnotationError;
var Dependency = function Dependency(key, asPromise, lazy, optional, properties) {
  this.key = key;
  this.asPromise = asPromise;
  this.lazy = lazy;
  this.optional = optional;
  this.properties = properties;
};
var $Dependency = Dependency;
($traceurRuntime.createClass)(Dependency, {}, {fromKey: function(key) {
    return new $Dependency(key, false, false, false, []);
  }});
Object.defineProperty(Dependency, "parameters", {get: function() {
    return [[Key], [$traceurRuntime.type.boolean], [$traceurRuntime.type.boolean], [$traceurRuntime.type.boolean], [List]];
  }});
Object.defineProperty(Dependency.fromKey, "parameters", {get: function() {
    return [[Key]];
  }});
var _EMPTY_LIST = [];
var Binding = function Binding(token, $__8) {
  var $__9 = $__8,
      toClass = $__9.toClass,
      toValue = $__9.toValue,
      toAlias = $__9.toAlias,
      toFactory = $__9.toFactory,
      toAsyncFactory = $__9.toAsyncFactory,
      deps = $__9.deps;
  this.token = token;
  this.toClass = toClass;
  this.toValue = toValue;
  this.toAlias = toAlias;
  this.toFactory = toFactory;
  this.toAsyncFactory = toAsyncFactory;
  this.dependencies = deps;
};
($traceurRuntime.createClass)(Binding, {resolve: function() {
    var $__6 = this;
    var factoryFn;
    var resolvedDeps;
    var isAsync = false;
    if (isPresent(this.toClass)) {
      factoryFn = reflector.factory(this.toClass);
      resolvedDeps = _dependenciesFor(this.toClass);
    } else if (isPresent(this.toAlias)) {
      factoryFn = (function(aliasInstance) {
        return aliasInstance;
      });
      resolvedDeps = [Dependency.fromKey(Key.get(this.toAlias))];
    } else if (isPresent(this.toFactory)) {
      factoryFn = this.toFactory;
      resolvedDeps = _constructDependencies(this.toFactory, this.dependencies);
    } else if (isPresent(this.toAsyncFactory)) {
      factoryFn = this.toAsyncFactory;
      resolvedDeps = _constructDependencies(this.toAsyncFactory, this.dependencies);
      isAsync = true;
    } else {
      factoryFn = (function() {
        return $__6.toValue;
      });
      resolvedDeps = _EMPTY_LIST;
    }
    return new ResolvedBinding(Key.get(this.token), factoryFn, resolvedDeps, isAsync);
  }}, {});
Object.defineProperty(Binding, "annotations", {get: function() {
    return [new CONST()];
  }});
var ResolvedBinding = function ResolvedBinding(key, factory, dependencies, providedAsPromise) {
  this.key = key;
  this.factory = factory;
  this.dependencies = dependencies;
  this.providedAsPromise = providedAsPromise;
};
($traceurRuntime.createClass)(ResolvedBinding, {}, {});
Object.defineProperty(ResolvedBinding, "parameters", {get: function() {
    return [[Key], [Function], [$traceurRuntime.genericType(List, Dependency)], [$traceurRuntime.type.boolean]];
  }});
function bind(token) {
  return new BindingBuilder(token);
}
var BindingBuilder = function BindingBuilder(token) {
  this.token = token;
};
($traceurRuntime.createClass)(BindingBuilder, {
  toClass: function(type) {
    return new Binding(this.token, {toClass: type});
  },
  toValue: function(value) {
    return new Binding(this.token, {toValue: value});
  },
  toAlias: function(aliasToken) {
    return new Binding(this.token, {toAlias: aliasToken});
  },
  toFactory: function(factoryFunction) {
    var dependencies = arguments[1] !== (void 0) ? arguments[1] : null;
    return new Binding(this.token, {
      toFactory: factoryFunction,
      deps: dependencies
    });
  },
  toAsyncFactory: function(factoryFunction) {
    var dependencies = arguments[1] !== (void 0) ? arguments[1] : null;
    return new Binding(this.token, {
      toAsyncFactory: factoryFunction,
      deps: dependencies
    });
  }
}, {});
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
  return isBlank(dependencies) ? _dependenciesFor(factoryFunction) : ListWrapper.map(dependencies, (function(t) {
    return Dependency.fromKey(Key.get(t));
  }));
}
Object.defineProperty(_constructDependencies, "parameters", {get: function() {
    return [[Function], [List]];
  }});
function _dependenciesFor(typeOrFunc) {
  var params = reflector.parameters(typeOrFunc);
  if (isBlank(params))
    return [];
  if (ListWrapper.any(params, (function(p) {
    return isBlank(p);
  })))
    throw new NoAnnotationError(typeOrFunc);
  return ListWrapper.map(params, (function(p) {
    return _extractToken(typeOrFunc, p);
  }));
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
  return new Dependency(Key.get(token), asPromise, lazy, optional, depProps);
}
//# sourceMappingURL=binding.js.map

//# sourceMappingURL=./binding.map