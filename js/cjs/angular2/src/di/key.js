"use strict";
Object.defineProperties(module.exports, {
  Key: {get: function() {
      return Key;
    }},
  KeyRegistry: {get: function() {
      return KeyRegistry;
    }},
  __esModule: {value: true}
});
var $__exceptions__,
    $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_src_47_facade_47_lang__;
var KeyMetadataError = ($__exceptions__ = require("./exceptions"), $__exceptions__ && $__exceptions__.__esModule && $__exceptions__ || {default: $__exceptions__}).KeyMetadataError;
var $__1 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    MapWrapper = $__1.MapWrapper,
    Map = $__1.Map;
var $__2 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    int = $__2.int,
    isPresent = $__2.isPresent;
var Key = function Key(token, id) {
  this.token = token;
  this.id = id;
  this.metadata = null;
};
var $Key = Key;
($traceurRuntime.createClass)(Key, {}, {
  setMetadata: function(key, metadata) {
    if (isPresent(key.metadata) && key.metadata !== metadata) {
      throw new KeyMetadataError();
    }
    key.metadata = metadata;
    return key;
  },
  get: function(token) {
    return _globalKeyRegistry.get(token);
  },
  get numberOfKeys() {
    return _globalKeyRegistry.numberOfKeys;
  }
});
Object.defineProperty(Key, "parameters", {get: function() {
    return [[], [int]];
  }});
Object.defineProperty(Key.setMetadata, "parameters", {get: function() {
    return [[Key], []];
  }});
var KeyRegistry = function KeyRegistry() {
  this._allKeys = MapWrapper.create();
};
($traceurRuntime.createClass)(KeyRegistry, {
  get: function(token) {
    if (token instanceof Key)
      return token;
    if (MapWrapper.contains(this._allKeys, token)) {
      return MapWrapper.get(this._allKeys, token);
    }
    var newKey = new Key(token, Key.numberOfKeys);
    MapWrapper.set(this._allKeys, token, newKey);
    return newKey;
  },
  get numberOfKeys() {
    return MapWrapper.size(this._allKeys);
  }
}, {});
var _globalKeyRegistry = new KeyRegistry();
//# sourceMappingURL=key.js.map

//# sourceMappingURL=./key.map