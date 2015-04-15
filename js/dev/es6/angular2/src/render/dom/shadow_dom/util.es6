import {assert} from "rtts_assert/rtts_assert";
import {isBlank,
  isPresent,
  int} from 'angular2/src/facade/lang';
import {MapWrapper,
  Map} from 'angular2/src/facade/collection';
import {DOM} from 'angular2/src/dom/dom_adapter';
import {ShadowCss} from './shadow_css';
export function moveViewNodesIntoParent(parent, view) {
  for (var i = 0; i < view.rootNodes.length; ++i) {
    DOM.appendChild(parent, view.rootNodes[i]);
  }
}
var _componentUIDs = assert.type(MapWrapper.create(), assert.genericType(Map, assert.type.string, int));
var _nextComponentUID = assert.type(0, int);
var _sharedStyleTexts = assert.type(MapWrapper.create(), assert.genericType(Map, assert.type.string, assert.type.boolean));
var _lastInsertedStyleEl;
export function getComponentId(componentStringId) {
  assert.argumentTypes(componentStringId, assert.type.string);
  var id = MapWrapper.get(_componentUIDs, componentStringId);
  if (isBlank(id)) {
    id = _nextComponentUID++;
    MapWrapper.set(_componentUIDs, componentStringId, id);
  }
  return id;
}
Object.defineProperty(getComponentId, "parameters", {get: function() {
    return [[assert.type.string]];
  }});
export function insertSharedStyleText(cssText, styleHost, styleEl) {
  if (!MapWrapper.contains(_sharedStyleTexts, cssText)) {
    MapWrapper.set(_sharedStyleTexts, cssText, true);
    insertStyleElement(styleHost, styleEl);
  }
}
export function insertStyleElement(host, styleEl) {
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
export function getHostAttribute(id) {
  assert.argumentTypes(id, int);
  return `_nghost-${id}`;
}
Object.defineProperty(getHostAttribute, "parameters", {get: function() {
    return [[int]];
  }});
export function getContentAttribute(id) {
  assert.argumentTypes(id, int);
  return `_ngcontent-${id}`;
}
Object.defineProperty(getContentAttribute, "parameters", {get: function() {
    return [[int]];
  }});
export function shimCssForComponent(cssText, componentId) {
  assert.argumentTypes(cssText, assert.type.string, componentId, assert.type.string);
  var id = getComponentId(componentId);
  var shadowCss = new ShadowCss();
  return assert.returnType((shadowCss.shimCssText(cssText, getContentAttribute(id), getHostAttribute(id))), assert.type.string);
}
Object.defineProperty(shimCssForComponent, "parameters", {get: function() {
    return [[assert.type.string], [assert.type.string]];
  }});
export function resetShadowDomCache() {
  MapWrapper.clear(_componentUIDs);
  _nextComponentUID = 0;
  MapWrapper.clear(_sharedStyleTexts);
  _lastInsertedStyleEl = null;
}
//# sourceMappingURL=util.js.map

//# sourceMappingURL=./util.map