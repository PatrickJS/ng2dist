System.register(["angular2/src/facade/lang", "angular2/src/facade/collection", "angular2/src/dom/dom_adapter", "./shadow_css"], function($__export) {
  "use strict";
  var isBlank,
      isPresent,
      int,
      MapWrapper,
      Map,
      DOM,
      ShadowCss,
      _componentUIDs,
      _nextComponentUID,
      _sharedStyleTexts,
      _lastInsertedStyleEl;
  function moveViewNodesIntoParent(parent, view) {
    for (var i = 0; i < view.rootNodes.length; ++i) {
      DOM.appendChild(parent, view.rootNodes[i]);
    }
  }
  function getComponentId(componentStringId) {
    var id = MapWrapper.get(_componentUIDs, componentStringId);
    if (isBlank(id)) {
      id = _nextComponentUID++;
      MapWrapper.set(_componentUIDs, componentStringId, id);
    }
    return id;
  }
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
  function getContentAttribute(id) {
    return ("_ngcontent-" + id);
  }
  function shimCssForComponent(cssText, componentId) {
    var id = getComponentId(componentId);
    var shadowCss = new ShadowCss();
    return shadowCss.shimCssText(cssText, getContentAttribute(id), getHostAttribute(id));
  }
  function resetShadowDomCache() {
    MapWrapper.clear(_componentUIDs);
    _nextComponentUID = 0;
    MapWrapper.clear(_sharedStyleTexts);
    _lastInsertedStyleEl = null;
  }
  $__export("moveViewNodesIntoParent", moveViewNodesIntoParent);
  $__export("getComponentId", getComponentId);
  $__export("insertSharedStyleText", insertSharedStyleText);
  $__export("insertStyleElement", insertStyleElement);
  $__export("getHostAttribute", getHostAttribute);
  $__export("getContentAttribute", getContentAttribute);
  $__export("shimCssForComponent", shimCssForComponent);
  $__export("resetShadowDomCache", resetShadowDomCache);
  return {
    setters: [function($__m) {
      isBlank = $__m.isBlank;
      isPresent = $__m.isPresent;
      int = $__m.int;
    }, function($__m) {
      MapWrapper = $__m.MapWrapper;
      Map = $__m.Map;
    }, function($__m) {
      DOM = $__m.DOM;
    }, function($__m) {
      ShadowCss = $__m.ShadowCss;
    }],
    execute: function() {
      _componentUIDs = MapWrapper.create();
      _nextComponentUID = 0;
      _sharedStyleTexts = MapWrapper.create();
      Object.defineProperty(getComponentId, "parameters", {get: function() {
          return [[assert.type.string]];
        }});
      Object.defineProperty(getHostAttribute, "parameters", {get: function() {
          return [[int]];
        }});
      Object.defineProperty(getContentAttribute, "parameters", {get: function() {
          return [[int]];
        }});
      Object.defineProperty(shimCssForComponent, "parameters", {get: function() {
          return [[assert.type.string], [assert.type.string]];
        }});
    }
  };
});
//# sourceMappingURL=util.es6.map

//# sourceMappingURL=./util.js.map