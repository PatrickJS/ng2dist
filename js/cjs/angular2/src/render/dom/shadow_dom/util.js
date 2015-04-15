"use strict";
Object.defineProperties(module.exports, {
  moveViewNodesIntoParent: {get: function() {
      return moveViewNodesIntoParent;
    }},
  getComponentId: {get: function() {
      return getComponentId;
    }},
  insertSharedStyleText: {get: function() {
      return insertSharedStyleText;
    }},
  insertStyleElement: {get: function() {
      return insertStyleElement;
    }},
  getHostAttribute: {get: function() {
      return getHostAttribute;
    }},
  getContentAttribute: {get: function() {
      return getContentAttribute;
    }},
  shimCssForComponent: {get: function() {
      return shimCssForComponent;
    }},
  resetShadowDomCache: {get: function() {
      return resetShadowDomCache;
    }},
  __esModule: {value: true}
});
var $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_src_47_dom_47_dom_95_adapter__,
    $__shadow_95_css__;
var $__0 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    isBlank = $__0.isBlank,
    isPresent = $__0.isPresent,
    int = $__0.int;
var $__1 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    MapWrapper = $__1.MapWrapper,
    Map = $__1.Map;
var DOM = ($__angular2_47_src_47_dom_47_dom_95_adapter__ = require("angular2/src/dom/dom_adapter"), $__angular2_47_src_47_dom_47_dom_95_adapter__ && $__angular2_47_src_47_dom_47_dom_95_adapter__.__esModule && $__angular2_47_src_47_dom_47_dom_95_adapter__ || {default: $__angular2_47_src_47_dom_47_dom_95_adapter__}).DOM;
var ShadowCss = ($__shadow_95_css__ = require("./shadow_css"), $__shadow_95_css__ && $__shadow_95_css__.__esModule && $__shadow_95_css__ || {default: $__shadow_95_css__}).ShadowCss;
function moveViewNodesIntoParent(parent, view) {
  for (var i = 0; i < view.rootNodes.length; ++i) {
    DOM.appendChild(parent, view.rootNodes[i]);
  }
}
var _componentUIDs = MapWrapper.create();
var _nextComponentUID = 0;
var _sharedStyleTexts = MapWrapper.create();
var _lastInsertedStyleEl;
function getComponentId(componentStringId) {
  var id = MapWrapper.get(_componentUIDs, componentStringId);
  if (isBlank(id)) {
    id = _nextComponentUID++;
    MapWrapper.set(_componentUIDs, componentStringId, id);
  }
  return id;
}
Object.defineProperty(getComponentId, "parameters", {get: function() {
    return [[$traceurRuntime.type.string]];
  }});
function insertSharedStyleText(cssText, styleHost, styleEl) {
  if (!MapWrapper.contains(_sharedStyleTexts, cssText)) {
    MapWrapper.set(_sharedStyleTexts, cssText, true);
    insertStyleElement(styleHost, styleEl);
  }
}
function insertStyleElement(host, styleEl) {
  if (isBlank(_lastInsertedStyleEl)) {
    var firstChild = DOM.firstChild(host);
    if (isPresent(firstChild)) {
      DOM.insertBefore(firstChild, styleEl);
    } else {
      DOM.appendChild(host, styleEl);
    }
  } else {
    DOM.insertAfter(_lastInsertedStyleEl, styleEl);
  }
  _lastInsertedStyleEl = styleEl;
}
function getHostAttribute(id) {
  return ("_nghost-" + id);
}
Object.defineProperty(getHostAttribute, "parameters", {get: function() {
    return [[int]];
  }});
function getContentAttribute(id) {
  return ("_ngcontent-" + id);
}
Object.defineProperty(getContentAttribute, "parameters", {get: function() {
    return [[int]];
  }});
function shimCssForComponent(cssText, componentId) {
  var id = getComponentId(componentId);
  var shadowCss = new ShadowCss();
  return shadowCss.shimCssText(cssText, getContentAttribute(id), getHostAttribute(id));
}
Object.defineProperty(shimCssForComponent, "parameters", {get: function() {
    return [[$traceurRuntime.type.string], [$traceurRuntime.type.string]];
  }});
function resetShadowDomCache() {
  MapWrapper.clear(_componentUIDs);
  _nextComponentUID = 0;
  MapWrapper.clear(_sharedStyleTexts);
  _lastInsertedStyleEl = null;
}
//# sourceMappingURL=util.js.map

//# sourceMappingURL=./util.map