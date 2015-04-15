"use strict";
Object.defineProperties(module.exports, {
  Locals: {get: function() {
      return Locals;
    }},
  __esModule: {value: true}
});
var $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_facade_47_collection__;
var $__0 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    isPresent = $__0.isPresent,
    BaseException = $__0.BaseException;
var $__1 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    ListWrapper = $__1.ListWrapper,
    MapWrapper = $__1.MapWrapper;
var Locals = function Locals(parent, current) {
  this.parent = parent;
  this.current = current;
};
var $Locals = Locals;
($traceurRuntime.createClass)(Locals, {
  contains: function(name) {
    if (MapWrapper.contains(this.current, name)) {
      return true;
    }
    if (isPresent(this.parent)) {
      return this.parent.contains(name);
    }
    return false;
  },
  get: function(name) {
    if (MapWrapper.contains(this.current, name)) {
      return MapWrapper.get(this.current, name);
    }
    if (isPresent(this.parent)) {
      return this.parent.get(name);
    }
    throw new BaseException(("Cannot find '" + name + "'"));
  },
  set: function(name, value) {
    if (MapWrapper.contains(this.current, name)) {
      MapWrapper.set(this.current, name, value);
    } else {
      throw new BaseException('Setting of new keys post-construction is not supported.');
    }
  },
  clearValues: function() {
    MapWrapper.clearValues(this.current);
  }
}, {});
Object.defineProperty(Locals, "parameters", {get: function() {
    return [[Locals], [Map]];
  }});
Object.defineProperty(Locals.prototype.contains, "parameters", {get: function() {
    return [[$traceurRuntime.type.string]];
  }});
Object.defineProperty(Locals.prototype.get, "parameters", {get: function() {
    return [[$traceurRuntime.type.string]];
  }});
Object.defineProperty(Locals.prototype.set, "parameters", {get: function() {
    return [[$traceurRuntime.type.string], []];
  }});
//# sourceMappingURL=locals.js.map

//# sourceMappingURL=./locals.map