"use strict";
Object.defineProperties(module.exports, {
  ComponentUrlMapper: {get: function() {
      return ComponentUrlMapper;
    }},
  RuntimeComponentUrlMapper: {get: function() {
      return RuntimeComponentUrlMapper;
    }},
  __esModule: {value: true}
});
var $__angular2_47_di__,
    $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_facade_47_collection__;
var Injectable = ($__angular2_47_di__ = require("angular2/di"), $__angular2_47_di__ && $__angular2_47_di__.__esModule && $__angular2_47_di__ || {default: $__angular2_47_di__}).Injectable;
var $__1 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    Type = $__1.Type,
    isPresent = $__1.isPresent;
var $__2 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    Map = $__2.Map,
    MapWrapper = $__2.MapWrapper;
var ComponentUrlMapper = function ComponentUrlMapper() {
  ;
};
($traceurRuntime.createClass)(ComponentUrlMapper, {getUrl: function(component) {
    return './';
  }}, {});
Object.defineProperty(ComponentUrlMapper, "annotations", {get: function() {
    return [new Injectable()];
  }});
Object.defineProperty(ComponentUrlMapper.prototype.getUrl, "parameters", {get: function() {
    return [[Type]];
  }});
var RuntimeComponentUrlMapper = function RuntimeComponentUrlMapper() {
  $traceurRuntime.superConstructor($RuntimeComponentUrlMapper).call(this);
  this._componentUrls = MapWrapper.create();
};
var $RuntimeComponentUrlMapper = RuntimeComponentUrlMapper;
($traceurRuntime.createClass)(RuntimeComponentUrlMapper, {
  setComponentUrl: function(component, url) {
    MapWrapper.set(this._componentUrls, component, url);
  },
  getUrl: function(component) {
    var url = MapWrapper.get(this._componentUrls, component);
    if (isPresent(url))
      return url;
    return $traceurRuntime.superGet(this, $RuntimeComponentUrlMapper.prototype, "getUrl").call(this, component);
  }
}, {}, ComponentUrlMapper);
Object.defineProperty(RuntimeComponentUrlMapper.prototype.setComponentUrl, "parameters", {get: function() {
    return [[Type], [$traceurRuntime.type.string]];
  }});
Object.defineProperty(RuntimeComponentUrlMapper.prototype.getUrl, "parameters", {get: function() {
    return [[Type]];
  }});
//# sourceMappingURL=component_url_mapper.js.map

//# sourceMappingURL=./component_url_mapper.map