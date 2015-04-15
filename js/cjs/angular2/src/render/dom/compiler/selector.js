"use strict";
Object.defineProperties(module.exports, {
  CssSelector: {get: function() {
      return CssSelector;
    }},
  SelectorMatcher: {get: function() {
      return SelectorMatcher;
    }},
  __esModule: {value: true}
});
var $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_src_47_facade_47_lang__;
var $__0 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    List = $__0.List,
    Map = $__0.Map,
    ListWrapper = $__0.ListWrapper,
    MapWrapper = $__0.MapWrapper;
var $__1 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    isPresent = $__1.isPresent,
    isBlank = $__1.isBlank,
    RegExpWrapper = $__1.RegExpWrapper,
    RegExpMatcherWrapper = $__1.RegExpMatcherWrapper,
    StringWrapper = $__1.StringWrapper,
    BaseException = $__1.BaseException;
var _EMPTY_ATTR_VALUE = '';
var _SELECTOR_REGEXP = RegExpWrapper.create('(\\:not\\()|' + '([-\\w]+)|' + '(?:\\.([-\\w]+))|' + '(?:\\[([-\\w*]+)(?:=([^\\]]*))?\\])|' + '(?:\\))|' + '(\\s*,\\s*)');
var CssSelector = function CssSelector() {
  this.element = null;
  this.classNames = ListWrapper.create();
  this.attrs = ListWrapper.create();
  this.notSelector = null;
};
var $CssSelector = CssSelector;
($traceurRuntime.createClass)(CssSelector, {
  setElement: function() {
    var element = arguments[0] !== (void 0) ? arguments[0] : null;
    if (isPresent(element)) {
      element = element.toLowerCase();
    }
    this.element = element;
  },
  addAttribute: function(name) {
    var value = arguments[1] !== (void 0) ? arguments[1] : _EMPTY_ATTR_VALUE;
    ListWrapper.push(this.attrs, name.toLowerCase());
    if (isPresent(value)) {
      value = value.toLowerCase();
    } else {
      value = _EMPTY_ATTR_VALUE;
    }
    ListWrapper.push(this.attrs, value);
  },
  addClassName: function(name) {
    ListWrapper.push(this.classNames, name.toLowerCase());
  },
  toString: function() {
    var res = '';
    if (isPresent(this.element)) {
      res += this.element;
    }
    if (isPresent(this.classNames)) {
      for (var i = 0; i < this.classNames.length; i++) {
        res += '.' + this.classNames[i];
      }
    }
    if (isPresent(this.attrs)) {
      for (var i = 0; i < this.attrs.length; ) {
        var attrName = this.attrs[i++];
        var attrValue = this.attrs[i++];
        res += '[' + attrName;
        if (attrValue.length > 0) {
          res += '=' + attrValue;
        }
        res += ']';
      }
    }
    if (isPresent(this.notSelector)) {
      res += ":not(" + this.notSelector.toString() + ")";
    }
    return res;
  }
}, {parse: function(selector) {
    var results = ListWrapper.create();
    var _addResult = (function(res, cssSel) {
      if (isPresent(cssSel.notSelector) && isBlank(cssSel.element) && ListWrapper.isEmpty(cssSel.classNames) && ListWrapper.isEmpty(cssSel.attrs)) {
        cssSel.element = "*";
      }
      ListWrapper.push(res, cssSel);
    });
    var cssSelector = new $CssSelector();
    var matcher = RegExpWrapper.matcher(_SELECTOR_REGEXP, selector);
    var match;
    var current = cssSelector;
    while (isPresent(match = RegExpMatcherWrapper.next(matcher))) {
      if (isPresent(match[1])) {
        if (isPresent(cssSelector.notSelector)) {
          throw new BaseException('Nesting :not is not allowed in a selector');
        }
        current.notSelector = new $CssSelector();
        current = current.notSelector;
      }
      if (isPresent(match[2])) {
        current.setElement(match[2]);
      }
      if (isPresent(match[3])) {
        current.addClassName(match[3]);
      }
      if (isPresent(match[4])) {
        current.addAttribute(match[4], match[5]);
      }
      if (isPresent(match[6])) {
        _addResult(results, cssSelector);
        cssSelector = current = new $CssSelector();
      }
    }
    _addResult(results, cssSelector);
    return results;
  }});
Object.defineProperty(CssSelector.parse, "parameters", {get: function() {
    return [[$traceurRuntime.type.string]];
  }});
Object.defineProperty(CssSelector.prototype.setElement, "parameters", {get: function() {
    return [[$traceurRuntime.type.string]];
  }});
Object.defineProperty(CssSelector.prototype.addAttribute, "parameters", {get: function() {
    return [[$traceurRuntime.type.string], [$traceurRuntime.type.string]];
  }});
Object.defineProperty(CssSelector.prototype.addClassName, "parameters", {get: function() {
    return [[$traceurRuntime.type.string]];
  }});
var SelectorMatcher = function SelectorMatcher() {
  this._elementMap = MapWrapper.create();
  this._elementPartialMap = MapWrapper.create();
  this._classMap = MapWrapper.create();
  this._classPartialMap = MapWrapper.create();
  this._attrValueMap = MapWrapper.create();
  this._attrValuePartialMap = MapWrapper.create();
  this._listContexts = ListWrapper.create();
};
var $SelectorMatcher = SelectorMatcher;
($traceurRuntime.createClass)(SelectorMatcher, {
  addSelectables: function(cssSelectors, callbackCtxt) {
    var listContext = null;
    if (cssSelectors.length > 1) {
      listContext = new SelectorListContext(cssSelectors);
      ListWrapper.push(this._listContexts, listContext);
    }
    for (var i = 0; i < cssSelectors.length; i++) {
      this.addSelectable(cssSelectors[i], callbackCtxt, listContext);
    }
  },
  addSelectable: function(cssSelector, callbackCtxt, listContext) {
    var matcher = this;
    var element = cssSelector.element;
    var classNames = cssSelector.classNames;
    var attrs = cssSelector.attrs;
    var selectable = new SelectorContext(cssSelector, callbackCtxt, listContext);
    if (isPresent(element)) {
      var isTerminal = attrs.length === 0 && classNames.length === 0;
      if (isTerminal) {
        this._addTerminal(matcher._elementMap, element, selectable);
      } else {
        matcher = this._addPartial(matcher._elementPartialMap, element);
      }
    }
    if (isPresent(classNames)) {
      for (var index = 0; index < classNames.length; index++) {
        var isTerminal = attrs.length === 0 && index === classNames.length - 1;
        var className = classNames[index];
        if (isTerminal) {
          this._addTerminal(matcher._classMap, className, selectable);
        } else {
          matcher = this._addPartial(matcher._classPartialMap, className);
        }
      }
    }
    if (isPresent(attrs)) {
      for (var index = 0; index < attrs.length; ) {
        var isTerminal = index === attrs.length - 2;
        var attrName = attrs[index++];
        var attrValue = attrs[index++];
        var map = isTerminal ? matcher._attrValueMap : matcher._attrValuePartialMap;
        var valuesMap = MapWrapper.get(map, attrName);
        if (isBlank(valuesMap)) {
          valuesMap = MapWrapper.create();
          MapWrapper.set(map, attrName, valuesMap);
        }
        if (isTerminal) {
          this._addTerminal(valuesMap, attrValue, selectable);
        } else {
          matcher = this._addPartial(valuesMap, attrValue);
        }
      }
    }
  },
  _addTerminal: function(map, name, selectable) {
    var terminalList = MapWrapper.get(map, name);
    if (isBlank(terminalList)) {
      terminalList = ListWrapper.create();
      MapWrapper.set(map, name, terminalList);
    }
    ListWrapper.push(terminalList, selectable);
  },
  _addPartial: function(map, name) {
    var matcher = MapWrapper.get(map, name);
    if (isBlank(matcher)) {
      matcher = new $SelectorMatcher();
      MapWrapper.set(map, name, matcher);
    }
    return matcher;
  },
  match: function(cssSelector, matchedCallback) {
    var result = false;
    var element = cssSelector.element;
    var classNames = cssSelector.classNames;
    var attrs = cssSelector.attrs;
    for (var i = 0; i < this._listContexts.length; i++) {
      this._listContexts[i].alreadyMatched = false;
    }
    result = this._matchTerminal(this._elementMap, element, cssSelector, matchedCallback) || result;
    result = this._matchPartial(this._elementPartialMap, element, cssSelector, matchedCallback) || result;
    if (isPresent(classNames)) {
      for (var index = 0; index < classNames.length; index++) {
        var className = classNames[index];
        result = this._matchTerminal(this._classMap, className, cssSelector, matchedCallback) || result;
        result = this._matchPartial(this._classPartialMap, className, cssSelector, matchedCallback) || result;
      }
    }
    if (isPresent(attrs)) {
      for (var index = 0; index < attrs.length; ) {
        var attrName = attrs[index++];
        var attrValue = attrs[index++];
        var valuesMap = MapWrapper.get(this._attrValueMap, attrName);
        if (!StringWrapper.equals(attrValue, _EMPTY_ATTR_VALUE)) {
          result = this._matchTerminal(valuesMap, _EMPTY_ATTR_VALUE, cssSelector, matchedCallback) || result;
        }
        result = this._matchTerminal(valuesMap, attrValue, cssSelector, matchedCallback) || result;
        valuesMap = MapWrapper.get(this._attrValuePartialMap, attrName);
        result = this._matchPartial(valuesMap, attrValue, cssSelector, matchedCallback) || result;
      }
    }
    return result;
  },
  _matchTerminal: function() {
    var map = arguments[0] !== (void 0) ? arguments[0] : null;
    var name = arguments[1];
    var cssSelector = arguments[2];
    var matchedCallback = arguments[3];
    if (isBlank(map) || isBlank(name)) {
      return false;
    }
    var selectables = MapWrapper.get(map, name);
    var starSelectables = MapWrapper.get(map, "*");
    if (isPresent(starSelectables)) {
      selectables = ListWrapper.concat(selectables, starSelectables);
    }
    if (isBlank(selectables)) {
      return false;
    }
    var selectable;
    var result = false;
    for (var index = 0; index < selectables.length; index++) {
      selectable = selectables[index];
      result = selectable.finalize(cssSelector, matchedCallback) || result;
    }
    return result;
  },
  _matchPartial: function() {
    var map = arguments[0] !== (void 0) ? arguments[0] : null;
    var name = arguments[1];
    var cssSelector = arguments[2];
    var matchedCallback = arguments[3];
    if (isBlank(map) || isBlank(name)) {
      return false;
    }
    var nestedSelector = MapWrapper.get(map, name);
    if (isBlank(nestedSelector)) {
      return false;
    }
    return nestedSelector.match(cssSelector, matchedCallback);
  }
}, {});
Object.defineProperty(SelectorMatcher.prototype.addSelectables, "parameters", {get: function() {
    return [[$traceurRuntime.genericType(List, CssSelector)], []];
  }});
Object.defineProperty(SelectorMatcher.prototype.addSelectable, "parameters", {get: function() {
    return [[], [], [SelectorListContext]];
  }});
Object.defineProperty(SelectorMatcher.prototype._addTerminal, "parameters", {get: function() {
    return [[$traceurRuntime.genericType(Map, $traceurRuntime.type.string, $traceurRuntime.type.string)], [$traceurRuntime.type.string], []];
  }});
Object.defineProperty(SelectorMatcher.prototype._addPartial, "parameters", {get: function() {
    return [[$traceurRuntime.genericType(Map, $traceurRuntime.type.string, $traceurRuntime.type.string)], [$traceurRuntime.type.string]];
  }});
Object.defineProperty(SelectorMatcher.prototype.match, "parameters", {get: function() {
    return [[CssSelector], [Function]];
  }});
Object.defineProperty(SelectorMatcher.prototype._matchTerminal, "parameters", {get: function() {
    return [[$traceurRuntime.genericType(Map, $traceurRuntime.type.string, $traceurRuntime.type.string)], [], [], []];
  }});
Object.defineProperty(SelectorMatcher.prototype._matchPartial, "parameters", {get: function() {
    return [[$traceurRuntime.genericType(Map, $traceurRuntime.type.string, $traceurRuntime.type.string)], [], [], []];
  }});
var SelectorListContext = function SelectorListContext(selectors) {
  this.selectors = selectors;
  this.alreadyMatched = false;
};
($traceurRuntime.createClass)(SelectorListContext, {}, {});
Object.defineProperty(SelectorListContext, "parameters", {get: function() {
    return [[$traceurRuntime.genericType(List, CssSelector)]];
  }});
var SelectorContext = function SelectorContext(selector, cbContext, listContext) {
  this.selector = selector;
  this.notSelector = selector.notSelector;
  this.cbContext = cbContext;
  this.listContext = listContext;
};
($traceurRuntime.createClass)(SelectorContext, {finalize: function(cssSelector, callback) {
    var result = true;
    if (isPresent(this.notSelector) && (isBlank(this.listContext) || !this.listContext.alreadyMatched)) {
      var notMatcher = new SelectorMatcher();
      notMatcher.addSelectable(this.notSelector, null, null);
      result = !notMatcher.match(cssSelector, null);
    }
    if (result && isPresent(callback) && (isBlank(this.listContext) || !this.listContext.alreadyMatched)) {
      if (isPresent(this.listContext)) {
        this.listContext.alreadyMatched = true;
      }
      callback(this.selector, this.cbContext);
    }
    return result;
  }}, {});
Object.defineProperty(SelectorContext, "parameters", {get: function() {
    return [[CssSelector], [], [SelectorListContext]];
  }});
Object.defineProperty(SelectorContext.prototype.finalize, "parameters", {get: function() {
    return [[CssSelector], []];
  }});
//# sourceMappingURL=selector.js.map

//# sourceMappingURL=./selector.map