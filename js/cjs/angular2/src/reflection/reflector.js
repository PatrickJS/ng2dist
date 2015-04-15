"use strict";
Object.defineProperties(module.exports, {
  SetterFn: {get: function() {
      return $__types__.SetterFn;
    }},
  GetterFn: {get: function() {
      return $__types__.GetterFn;
    }},
  MethodFn: {get: function() {
      return $__types__.MethodFn;
    }},
  Reflector: {get: function() {
      return Reflector;
    }},
  __esModule: {value: true}
});
var $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_facade_47_collection__,
    $__types__,
    $__types__;
var $__0 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    Type = $__0.Type,
    isPresent = $__0.isPresent,
    stringify = $__0.stringify,
    BaseException = $__0.BaseException;
var $__1 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    List = $__1.List,
    ListWrapper = $__1.ListWrapper,
    Map = $__1.Map,
    MapWrapper = $__1.MapWrapper,
    StringMapWrapper = $__1.StringMapWrapper;
var $__2 = ($__types__ = require("./types"), $__types__ && $__types__.__esModule && $__types__ || {default: $__types__}),
    SetterFn = $__2.SetterFn,
    GetterFn = $__2.GetterFn,
    MethodFn = $__2.MethodFn;
var $__types__ = ($__types__ = require("./types"), $__types__ && $__types__.__esModule && $__types__ || {default: $__types__});
var Reflector = function Reflector(reflectionCapabilities) {
  this._typeInfo = MapWrapper.create();
  this._getters = MapWrapper.create();
  this._setters = MapWrapper.create();
  this._methods = MapWrapper.create();
  this.reflectionCapabilities = reflectionCapabilities;
};
($traceurRuntime.createClass)(Reflector, {
  registerType: function(type, typeInfo) {
    MapWrapper.set(this._typeInfo, type, typeInfo);
  },
  registerGetters: function(getters) {
    _mergeMaps(this._getters, getters);
  },
  registerSetters: function(setters) {
    _mergeMaps(this._setters, setters);
  },
  registerMethods: function(methods) {
    _mergeMaps(this._methods, methods);
  },
  factory: function(type) {
    if (MapWrapper.contains(this._typeInfo, type)) {
      return MapWrapper.get(this._typeInfo, type)["factory"];
    } else {
      return this.reflectionCapabilities.factory(type);
    }
  },
  parameters: function(typeOfFunc) {
    if (MapWrapper.contains(this._typeInfo, typeOfFunc)) {
      return MapWrapper.get(this._typeInfo, typeOfFunc)["parameters"];
    } else {
      return this.reflectionCapabilities.parameters(typeOfFunc);
    }
  },
  annotations: function(typeOfFunc) {
    if (MapWrapper.contains(this._typeInfo, typeOfFunc)) {
      return MapWrapper.get(this._typeInfo, typeOfFunc)["annotations"];
    } else {
      return this.reflectionCapabilities.annotations(typeOfFunc);
    }
  },
  getter: function(name) {
    if (MapWrapper.contains(this._getters, name)) {
      return MapWrapper.get(this._getters, name);
    } else {
      return this.reflectionCapabilities.getter(name);
    }
  },
  setter: function(name) {
    if (MapWrapper.contains(this._setters, name)) {
      return MapWrapper.get(this._setters, name);
    } else {
      return this.reflectionCapabilities.setter(name);
    }
  },
  method: function(name) {
    if (MapWrapper.contains(this._methods, name)) {
      return MapWrapper.get(this._methods, name);
    } else {
      return this.reflectionCapabilities.method(name);
    }
  }
}, {});
Object.defineProperty(Reflector.prototype.factory, "parameters", {get: function() {
    return [[Type]];
  }});
Object.defineProperty(Reflector.prototype.getter, "parameters", {get: function() {
    return [[$traceurRuntime.type.string]];
  }});
Object.defineProperty(Reflector.prototype.setter, "parameters", {get: function() {
    return [[$traceurRuntime.type.string]];
  }});
Object.defineProperty(Reflector.prototype.method, "parameters", {get: function() {
    return [[$traceurRuntime.type.string]];
  }});
function _mergeMaps(target, config) {
  StringMapWrapper.forEach(config, (function(v, k) {
    return MapWrapper.set(target, k, v);
  }));
}
Object.defineProperty(_mergeMaps, "parameters", {get: function() {
    return [[Map], []];
  }});
//# sourceMappingURL=reflector.js.map

//# sourceMappingURL=./reflector.map