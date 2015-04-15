"use strict";
Object.defineProperties(module.exports, {
  setterFactory: {get: function() {
      return setterFactory;
    }},
  __esModule: {value: true}
});
var $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_src_47_dom_47_dom_95_adapter__,
    $___46__46__47_util__,
    $__angular2_47_src_47_reflection_47_reflection__;
var $__0 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    StringWrapper = $__0.StringWrapper,
    RegExpWrapper = $__0.RegExpWrapper,
    BaseException = $__0.BaseException,
    isPresent = $__0.isPresent,
    isBlank = $__0.isBlank,
    isString = $__0.isString,
    stringify = $__0.stringify;
var $__1 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    ListWrapper = $__1.ListWrapper,
    StringMapWrapper = $__1.StringMapWrapper;
var DOM = ($__angular2_47_src_47_dom_47_dom_95_adapter__ = require("angular2/src/dom/dom_adapter"), $__angular2_47_src_47_dom_47_dom_95_adapter__ && $__angular2_47_src_47_dom_47_dom_95_adapter__.__esModule && $__angular2_47_src_47_dom_47_dom_95_adapter__ || {default: $__angular2_47_src_47_dom_47_dom_95_adapter__}).DOM;
var $__3 = ($___46__46__47_util__ = require("../util"), $___46__46__47_util__ && $___46__46__47_util__.__esModule && $___46__46__47_util__ || {default: $___46__46__47_util__}),
    camelCaseToDashCase = $__3.camelCaseToDashCase,
    dashCaseToCamelCase = $__3.dashCaseToCamelCase;
var reflector = ($__angular2_47_src_47_reflection_47_reflection__ = require("angular2/src/reflection/reflection"), $__angular2_47_src_47_reflection_47_reflection__ && $__angular2_47_src_47_reflection_47_reflection__.__esModule && $__angular2_47_src_47_reflection_47_reflection__ || {default: $__angular2_47_src_47_reflection_47_reflection__}).reflector;
var STYLE_SEPARATOR = '.';
var propertySettersCache = StringMapWrapper.create();
var innerHTMLSetterCache;
function setterFactory(property) {
  var setterFn,
      styleParts,
      styleSuffix;
  if (StringWrapper.startsWith(property, ATTRIBUTE_PREFIX)) {
    setterFn = attributeSetterFactory(StringWrapper.substring(property, ATTRIBUTE_PREFIX.length));
  } else if (StringWrapper.startsWith(property, CLASS_PREFIX)) {
    setterFn = classSetterFactory(StringWrapper.substring(property, CLASS_PREFIX.length));
  } else if (StringWrapper.startsWith(property, STYLE_PREFIX)) {
    styleParts = property.split(STYLE_SEPARATOR);
    styleSuffix = styleParts.length > 2 ? ListWrapper.get(styleParts, 2) : '';
    setterFn = styleSetterFactory(ListWrapper.get(styleParts, 1), styleSuffix);
  } else if (StringWrapper.equals(property, 'innerHtml')) {
    if (isBlank(innerHTMLSetterCache)) {
      innerHTMLSetterCache = (function(el, value) {
        return DOM.setInnerHTML(el, value);
      });
    }
    setterFn = innerHTMLSetterCache;
  } else {
    property = resolvePropertyName(property);
    setterFn = StringMapWrapper.get(propertySettersCache, property);
    if (isBlank(setterFn)) {
      var propertySetterFn = reflector.setter(property);
      setterFn = function(receiver, value) {
        if (DOM.hasProperty(receiver, property)) {
          return propertySetterFn(receiver, value);
        }
      };
      StringMapWrapper.set(propertySettersCache, property, setterFn);
    }
  }
  return setterFn;
}
Object.defineProperty(setterFactory, "parameters", {get: function() {
    return [[$traceurRuntime.type.string]];
  }});
var ATTRIBUTE_PREFIX = 'attr.';
var attributeSettersCache = StringMapWrapper.create();
function _isValidAttributeValue(attrName, value) {
  if (attrName == "role") {
    return isString(value);
  } else {
    return isPresent(value);
  }
}
Object.defineProperty(_isValidAttributeValue, "parameters", {get: function() {
    return [[$traceurRuntime.type.string], [$traceurRuntime.type.any]];
  }});
function attributeSetterFactory(attrName) {
  var setterFn = StringMapWrapper.get(attributeSettersCache, attrName);
  var dashCasedAttributeName;
  if (isBlank(setterFn)) {
    dashCasedAttributeName = camelCaseToDashCase(attrName);
    setterFn = function(element, value) {
      if (_isValidAttributeValue(dashCasedAttributeName, value)) {
        DOM.setAttribute(element, dashCasedAttributeName, stringify(value));
      } else {
        if (isPresent(value)) {
          throw new BaseException("Invalid " + dashCasedAttributeName + " attribute, only string values are allowed, got '" + stringify(value) + "'");
        }
        DOM.removeAttribute(element, dashCasedAttributeName);
      }
    };
    StringMapWrapper.set(attributeSettersCache, attrName, setterFn);
  }
  return setterFn;
}
Object.defineProperty(attributeSetterFactory, "parameters", {get: function() {
    return [[$traceurRuntime.type.string]];
  }});
var CLASS_PREFIX = 'class.';
var classSettersCache = StringMapWrapper.create();
function classSetterFactory(className) {
  var setterFn = StringMapWrapper.get(classSettersCache, className);
  var dashCasedClassName;
  if (isBlank(setterFn)) {
    dashCasedClassName = camelCaseToDashCase(className);
    setterFn = function(element, value) {
      if (value) {
        DOM.addClass(element, dashCasedClassName);
      } else {
        DOM.removeClass(element, dashCasedClassName);
      }
    };
    StringMapWrapper.set(classSettersCache, className, setterFn);
  }
  return setterFn;
}
Object.defineProperty(classSetterFactory, "parameters", {get: function() {
    return [[$traceurRuntime.type.string]];
  }});
var STYLE_PREFIX = 'style.';
var styleSettersCache = StringMapWrapper.create();
function styleSetterFactory(styleName, styleSuffix) {
  var cacheKey = styleName + styleSuffix;
  var setterFn = StringMapWrapper.get(styleSettersCache, cacheKey);
  var dashCasedStyleName;
  if (isBlank(setterFn)) {
    dashCasedStyleName = camelCaseToDashCase(styleName);
    setterFn = function(element, value) {
      var valAsStr;
      if (isPresent(value)) {
        valAsStr = stringify(value);
        DOM.setStyle(element, dashCasedStyleName, valAsStr + styleSuffix);
      } else {
        DOM.removeStyle(element, dashCasedStyleName);
      }
    };
    StringMapWrapper.set(styleSettersCache, cacheKey, setterFn);
  }
  return setterFn;
}
Object.defineProperty(styleSetterFactory, "parameters", {get: function() {
    return [[$traceurRuntime.type.string], [$traceurRuntime.type.string]];
  }});
function resolvePropertyName(attrName) {
  var mappedPropName = StringMapWrapper.get(DOM.attrToPropMap, attrName);
  return isPresent(mappedPropName) ? mappedPropName : attrName;
}
Object.defineProperty(resolvePropertyName, "parameters", {get: function() {
    return [[$traceurRuntime.type.string]];
  }});
//# sourceMappingURL=property_setter_factory.js.map

//# sourceMappingURL=./property_setter_factory.map