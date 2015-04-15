"use strict";
Object.defineProperties(module.exports, {
  Injector: {get: function() {
      return Injector;
    }},
  __esModule: {value: true}
});
var $__angular2_47_src_47_facade_47_collection__,
    $__binding__,
    $__exceptions__,
    $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_facade_47_async__,
    $__key__;
var $__0 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    Map = $__0.Map,
    List = $__0.List,
    MapWrapper = $__0.MapWrapper,
    ListWrapper = $__0.ListWrapper;
var $__1 = ($__binding__ = require("./binding"), $__binding__ && $__binding__.__esModule && $__binding__ || {default: $__binding__}),
    ResolvedBinding = $__1.ResolvedBinding,
    Binding = $__1.Binding,
    BindingBuilder = $__1.BindingBuilder,
    bind = $__1.bind;
var $__2 = ($__exceptions__ = require("./exceptions"), $__exceptions__ && $__exceptions__.__esModule && $__exceptions__ || {default: $__exceptions__}),
    ProviderError = $__2.ProviderError,
    NoProviderError = $__2.NoProviderError,
    AsyncBindingError = $__2.AsyncBindingError,
    CyclicDependencyError = $__2.CyclicDependencyError,
    InstantiationError = $__2.InstantiationError,
    InvalidBindingError = $__2.InvalidBindingError;
var $__3 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    FunctionWrapper = $__3.FunctionWrapper,
    Type = $__3.Type,
    isPresent = $__3.isPresent,
    isBlank = $__3.isBlank;
var $__4 = ($__angular2_47_src_47_facade_47_async__ = require("angular2/src/facade/async"), $__angular2_47_src_47_facade_47_async__ && $__angular2_47_src_47_facade_47_async__.__esModule && $__angular2_47_src_47_facade_47_async__ || {default: $__angular2_47_src_47_facade_47_async__}),
    Promise = $__4.Promise,
    PromiseWrapper = $__4.PromiseWrapper;
var Key = ($__key__ = require("./key"), $__key__ && $__key__.__esModule && $__key__ || {default: $__key__}).Key;
var _constructing = new Object();
var _notFound = new Object();
var _Waiting = function _Waiting(promise) {
  this.promise = promise;
};
($traceurRuntime.createClass)(_Waiting, {}, {});
Object.defineProperty(_Waiting, "parameters", {get: function() {
    return [[Promise]];
  }});
function _isWaiting(obj) {
  return obj instanceof _Waiting;
}
var Injector = function Injector(bindings, parent, defaultBindings) {
  this._bindings = bindings;
  this._instances = this._createInstances();
  this._parent = parent;
  this._defaultBindings = defaultBindings;
  this._asyncStrategy = new _AsyncInjectorStrategy(this);
  this._syncStrategy = new _SyncInjectorStrategy(this);
};
var $Injector = Injector;
($traceurRuntime.createClass)(Injector, {
  get: function(token) {
    return this._getByKey(Key.get(token), false, false, false);
  },
  getOptional: function(token) {
    return this._getByKey(Key.get(token), false, false, true);
  },
  asyncGet: function(token) {
    return this._getByKey(Key.get(token), true, false, false);
  },
  resolveAndCreateChild: function(bindings) {
    return new $Injector($Injector.resolve(bindings), this, false);
  },
  createChildFromResolved: function(bindings) {
    return new $Injector(bindings, this, false);
  },
  _createInstances: function() {
    return ListWrapper.createFixedSize(Key.numberOfKeys + 1);
  },
  _getByKey: function(key, returnPromise, returnLazy, optional) {
    var $__6 = this;
    if (returnLazy) {
      return (function() {
        return $__6._getByKey(key, returnPromise, false, optional);
      });
    }
    var strategy = returnPromise ? this._asyncStrategy : this._syncStrategy;
    var instance = strategy.readFromCache(key);
    if (instance !== _notFound)
      return instance;
    instance = strategy.instantiate(key);
    if (instance !== _notFound)
      return instance;
    if (isPresent(this._parent)) {
      return this._parent._getByKey(key, returnPromise, returnLazy, optional);
    }
    if (optional) {
      return null;
    } else {
      throw new NoProviderError(key);
    }
  },
  _resolveDependencies: function(key, binding, forceAsync) {
    var $__6 = this;
    try {
      var getDependency = (function(d) {
        return $__6._getByKey(d.key, forceAsync || d.asPromise, d.lazy, d.optional);
      });
      return ListWrapper.map(binding.dependencies, getDependency);
    } catch (e) {
      this._clear(key);
      if (e instanceof ProviderError)
        e.addKey(key);
      throw e;
    }
  },
  _getInstance: function(key) {
    if (this._instances.length <= key.id)
      return null;
    return ListWrapper.get(this._instances, key.id);
  },
  _setInstance: function(key, obj) {
    ListWrapper.set(this._instances, key.id, obj);
  },
  _getBinding: function(key) {
    var binding = this._bindings.length <= key.id ? null : ListWrapper.get(this._bindings, key.id);
    if (isBlank(binding) && this._defaultBindings) {
      return bind(key.token).toClass(key.token).resolve();
    } else {
      return binding;
    }
  },
  _markAsConstructing: function(key) {
    this._setInstance(key, _constructing);
  },
  _clear: function(key) {
    this._setInstance(key, null);
  }
}, {
  resolve: function(bindings) {
    var resolvedBindings = _resolveBindings(bindings);
    var flatten = _flattenBindings(resolvedBindings, MapWrapper.create());
    return _createListOfBindings(flatten);
  },
  resolveAndCreate: function(bindings) {
    var $__9;
    var $__8 = arguments[1] !== (void 0) ? arguments[1] : {},
        defaultBindings = ($__9 = $__8.defaultBindings) === void 0 ? false : $__9;
    return new $Injector($Injector.resolve(bindings), null, defaultBindings);
  },
  fromResolvedBindings: function(bindings) {
    var $__9;
    var $__8 = arguments[1] !== (void 0) ? arguments[1] : {},
        defaultBindings = ($__9 = $__8.defaultBindings) === void 0 ? false : $__9;
    return new $Injector(bindings, null, defaultBindings);
  }
});
Object.defineProperty(Injector, "parameters", {get: function() {
    return [[$traceurRuntime.genericType(List, ResolvedBinding)], [Injector], [$traceurRuntime.type.boolean]];
  }});
Object.defineProperty(Injector.resolve, "parameters", {get: function() {
    return [[List]];
  }});
Object.defineProperty(Injector.resolveAndCreate, "parameters", {get: function() {
    return [[List], []];
  }});
Object.defineProperty(Injector.fromResolvedBindings, "parameters", {get: function() {
    return [[$traceurRuntime.genericType(List, ResolvedBinding)], []];
  }});
Object.defineProperty(Injector.prototype.resolveAndCreateChild, "parameters", {get: function() {
    return [[List]];
  }});
Object.defineProperty(Injector.prototype.createChildFromResolved, "parameters", {get: function() {
    return [[$traceurRuntime.genericType(List, ResolvedBinding)]];
  }});
Object.defineProperty(Injector.prototype._getByKey, "parameters", {get: function() {
    return [[Key], [$traceurRuntime.type.boolean], [$traceurRuntime.type.boolean], [$traceurRuntime.type.boolean]];
  }});
Object.defineProperty(Injector.prototype._resolveDependencies, "parameters", {get: function() {
    return [[Key], [ResolvedBinding], [$traceurRuntime.type.boolean]];
  }});
Object.defineProperty(Injector.prototype._getInstance, "parameters", {get: function() {
    return [[Key]];
  }});
Object.defineProperty(Injector.prototype._setInstance, "parameters", {get: function() {
    return [[Key], []];
  }});
Object.defineProperty(Injector.prototype._getBinding, "parameters", {get: function() {
    return [[Key]];
  }});
Object.defineProperty(Injector.prototype._markAsConstructing, "parameters", {get: function() {
    return [[Key]];
  }});
Object.defineProperty(Injector.prototype._clear, "parameters", {get: function() {
    return [[Key]];
  }});
var _SyncInjectorStrategy = function _SyncInjectorStrategy(injector) {
  this.injector = injector;
};
($traceurRuntime.createClass)(_SyncInjectorStrategy, {
  readFromCache: function(key) {
    if (key.token === Injector) {
      return this.injector;
    }
    var instance = this.injector._getInstance(key);
    if (instance === _constructing) {
      throw new CyclicDependencyError(key);
    } else if (isPresent(instance) && !_isWaiting(instance)) {
      return instance;
    } else {
      return _notFound;
    }
  },
  instantiate: function(key) {
    var binding = this.injector._getBinding(key);
    if (isBlank(binding))
      return _notFound;
    if (binding.providedAsPromise)
      throw new AsyncBindingError(key);
    this.injector._markAsConstructing(key);
    var deps = this.injector._resolveDependencies(key, binding, false);
    return this._createInstance(key, binding, deps);
  },
  _createInstance: function(key, binding, deps) {
    try {
      var instance = FunctionWrapper.apply(binding.factory, deps);
      this.injector._setInstance(key, instance);
      return instance;
    } catch (e) {
      this.injector._clear(key);
      throw new InstantiationError(e, key);
    }
  }
}, {});
Object.defineProperty(_SyncInjectorStrategy, "parameters", {get: function() {
    return [[Injector]];
  }});
Object.defineProperty(_SyncInjectorStrategy.prototype.readFromCache, "parameters", {get: function() {
    return [[Key]];
  }});
Object.defineProperty(_SyncInjectorStrategy.prototype.instantiate, "parameters", {get: function() {
    return [[Key]];
  }});
Object.defineProperty(_SyncInjectorStrategy.prototype._createInstance, "parameters", {get: function() {
    return [[Key], [ResolvedBinding], [List]];
  }});
var _AsyncInjectorStrategy = function _AsyncInjectorStrategy(injector) {
  this.injector = injector;
};
($traceurRuntime.createClass)(_AsyncInjectorStrategy, {
  readFromCache: function(key) {
    if (key.token === Injector) {
      return PromiseWrapper.resolve(this.injector);
    }
    var instance = this.injector._getInstance(key);
    if (instance === _constructing) {
      throw new CyclicDependencyError(key);
    } else if (_isWaiting(instance)) {
      return instance.promise;
    } else if (isPresent(instance)) {
      return PromiseWrapper.resolve(instance);
    } else {
      return _notFound;
    }
  },
  instantiate: function(key) {
    var $__6 = this;
    var binding = this.injector._getBinding(key);
    if (isBlank(binding))
      return _notFound;
    this.injector._markAsConstructing(key);
    var deps = this.injector._resolveDependencies(key, binding, true);
    var depsPromise = PromiseWrapper.all(deps);
    var promise = PromiseWrapper.then(depsPromise, null, (function(e) {
      return $__6._errorHandler(key, e);
    })).then((function(deps) {
      return $__6._findOrCreate(key, binding, deps);
    })).then((function(instance) {
      return $__6._cacheInstance(key, instance);
    }));
    this.injector._setInstance(key, new _Waiting(promise));
    return promise;
  },
  _errorHandler: function(key, e) {
    if (e instanceof ProviderError)
      e.addKey(key);
    return PromiseWrapper.reject(e);
  },
  _findOrCreate: function(key, binding, deps) {
    try {
      var instance = this.injector._getInstance(key);
      if (!_isWaiting(instance))
        return instance;
      return FunctionWrapper.apply(binding.factory, deps);
    } catch (e) {
      this.injector._clear(key);
      throw new InstantiationError(e, key);
    }
  },
  _cacheInstance: function(key, instance) {
    this.injector._setInstance(key, instance);
    return instance;
  }
}, {});
Object.defineProperty(_AsyncInjectorStrategy, "parameters", {get: function() {
    return [[Injector]];
  }});
Object.defineProperty(_AsyncInjectorStrategy.prototype.readFromCache, "parameters", {get: function() {
    return [[Key]];
  }});
Object.defineProperty(_AsyncInjectorStrategy.prototype.instantiate, "parameters", {get: function() {
    return [[Key]];
  }});
Object.defineProperty(_AsyncInjectorStrategy.prototype._errorHandler, "parameters", {get: function() {
    return [[Key], []];
  }});
Object.defineProperty(_AsyncInjectorStrategy.prototype._findOrCreate, "parameters", {get: function() {
    return [[Key], [ResolvedBinding], [List]];
  }});
function _resolveBindings(bindings) {
  var resolvedList = ListWrapper.createFixedSize(bindings.length);
  for (var i = 0; i < bindings.length; i++) {
    var unresolved = bindings[i];
    var resolved = void 0;
    if (unresolved instanceof ResolvedBinding) {
      resolved = unresolved;
    } else if (unresolved instanceof Type) {
      resolved = bind(unresolved).toClass(unresolved).resolve();
    } else if (unresolved instanceof Binding) {
      resolved = unresolved.resolve();
    } else if (unresolved instanceof List) {
      resolved = _resolveBindings(unresolved);
    } else if (unresolved instanceof BindingBuilder) {
      throw new InvalidBindingError(unresolved.token);
    } else {
      throw new InvalidBindingError(unresolved);
    }
    resolvedList[i] = resolved;
  }
  return resolvedList;
}
Object.defineProperty(_resolveBindings, "parameters", {get: function() {
    return [[List]];
  }});
function _createListOfBindings(flattenedBindings) {
  var bindings = ListWrapper.createFixedSize(Key.numberOfKeys + 1);
  MapWrapper.forEach(flattenedBindings, (function(v, keyId) {
    return bindings[keyId] = v;
  }));
  return bindings;
}
function _flattenBindings(bindings, res) {
  ListWrapper.forEach(bindings, function(b) {
    if (b instanceof ResolvedBinding) {
      MapWrapper.set(res, b.key.id, b);
    } else if (b instanceof List) {
      _flattenBindings(b, res);
    }
  });
  return res;
}
Object.defineProperty(_flattenBindings, "parameters", {get: function() {
    return [[List], [Map]];
  }});
//# sourceMappingURL=injector.js.map

//# sourceMappingURL=./injector.map