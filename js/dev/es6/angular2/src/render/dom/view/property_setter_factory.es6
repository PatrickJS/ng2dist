import {assert} from "rtts_assert/rtts_assert";
import {StringWrapper,
  RegExpWrapper,
  BaseException,
  isPresent,
  isBlank,
  isString,
  stringify} from 'angular2/src/facade/lang';
import {ListWrapper,
  StringMapWrapper} from 'angular2/src/facade/collection';
import {DOM} from 'angular2/src/dom/dom_adapter';
import {camelCaseToDashCase,
  dashCaseToCamelCase} from '../util';
import {reflector} from 'angular2/src/reflection/reflection';
const STYLE_SEPARATOR = '.';
var propertySettersCache = StringMapWrapper.create();
var innerHTMLSetterCache;
export function setterFactory(property) {
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
      innerHTMLSetterCache = (el, value) => DOM.setInnerHTML(el, value);
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
  return assert.returnType((setterFn), Function);
}
Object.defineProperty(setterFactory, "parameters", {get: function() {
    return [[assert.type.string]];
  }});
const ATTRIBUTE_PREFIX = 'attr.';
var attributeSettersCache = StringMapWrapper.create();
function _isValidAttributeValue(attrName, value) {
  assert.argumentTypes(attrName, assert.type.string, value, assert.type.any);
  if (attrName == "role") {
    return assert.returnType((isString(value)), assert.type.boolean);
  } else {
    return assert.returnType((isPresent(value)), assert.type.boolean);
  }
}
Object.defineProperty(_isValidAttributeValue, "parameters", {get: function() {
    return [[assert.type.string], [assert.type.any]];
  }});
function attributeSetterFactory(attrName) {
  assert.argumentTypes(attrName, assert.type.string);
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
  return assert.returnType((setterFn), Function);
}
Object.defineProperty(attributeSetterFactory, "parameters", {get: function() {
    return [[assert.type.string]];
  }});
const CLASS_PREFIX = 'class.';
var classSettersCache = StringMapWrapper.create();
function classSetterFactory(className) {
  assert.argumentTypes(className, assert.type.string);
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
  return assert.returnType((setterFn), Function);
}
Object.defineProperty(classSetterFactory, "parameters", {get: function() {
    return [[assert.type.string]];
  }});
const STYLE_PREFIX = 'style.';
var styleSettersCache = StringMapWrapper.create();
function styleSetterFactory(styleName, styleSuffix) {
  assert.argumentTypes(styleName, assert.type.string, styleSuffix, assert.type.string);
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
  return assert.returnType((setterFn), Function);
}
Object.defineProperty(styleSetterFactory, "parameters", {get: function() {
    return [[assert.type.string], [assert.type.string]];
  }});
function resolvePropertyName(attrName) {
  assert.argumentTypes(attrName, assert.type.string);
  var mappedPropName = StringMapWrapper.get(DOM.attrToPropMap, attrName);
  return assert.returnType((isPresent(mappedPropName) ? mappedPropName : attrName), assert.type.string);
}
Object.defineProperty(resolvePropertyName, "parameters", {get: function() {
    return [[assert.type.string]];
  }});
//# sourceMappingURL=property_setter_factory.js.map

//# sourceMappingURL=./property_setter_factory.map