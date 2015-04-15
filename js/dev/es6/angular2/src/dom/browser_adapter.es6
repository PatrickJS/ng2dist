import {assert} from "rtts_assert/rtts_assert";
import {List,
  MapWrapper,
  ListWrapper} from 'angular2/src/facade/collection';
import {isBlank,
  isPresent} from 'angular2/src/facade/lang';
import {setRootDomAdapter} from './dom_adapter';
import {GenericBrowserDomAdapter} from './generic_browser_adapter';
var _attrToPropMap = {
  'innerHtml': 'innerHTML',
  'readonly': 'readOnly',
  'tabindex': 'tabIndex'
};
const DOM_KEY_LOCATION_NUMPAD = 3;
var _keyMap = {
  '\b': 'Backspace',
  '\t': 'Tab',
  '\x7F': 'Delete',
  '\x1B': 'Escape',
  'Del': 'Delete',
  'Esc': 'Escape',
  'Left': 'ArrowLeft',
  'Right': 'ArrowRight',
  'Up': 'ArrowUp',
  'Down': 'ArrowDown',
  'Menu': 'ContextMenu',
  'Scroll': 'ScrollLock',
  'Win': 'OS'
};
var _chromeNumKeyPadMap = {
  'A': '1',
  'B': '2',
  'C': '3',
  'D': '4',
  'E': '5',
  'F': '6',
  'G': '7',
  'H': '8',
  'I': '9',
  'J': '*',
  'K': '+',
  'M': '-',
  'N': '.',
  'O': '/',
  '\x60': '0',
  '\x90': 'NumLock'
};
export class BrowserDomAdapter extends GenericBrowserDomAdapter {
  static makeCurrent() {
    setRootDomAdapter(new BrowserDomAdapter());
  }
  get attrToPropMap() {
    return _attrToPropMap;
  }
  query(selector) {
    assert.argumentTypes(selector, assert.type.string);
    return document.querySelector(selector);
  }
  querySelector(el, selector) {
    assert.argumentTypes(el, assert.type.any, selector, assert.type.string);
    return assert.returnType((el.querySelector(selector)), Node);
  }
  querySelectorAll(el, selector) {
    assert.argumentTypes(el, assert.type.any, selector, assert.type.string);
    return assert.returnType((el.querySelectorAll(selector)), NodeList);
  }
  on(el, evt, listener) {
    el.addEventListener(evt, listener, false);
  }
  onAndCancel(el, evt, listener) {
    el.addEventListener(evt, listener, false);
    return assert.returnType((() => {
      el.removeEventListener(evt, listener, false);
    }), Function);
  }
  dispatchEvent(el, evt) {
    el.dispatchEvent(evt);
  }
  createMouseEvent(eventType) {
    var evt = new MouseEvent(eventType);
    evt.initEvent(eventType, true, true);
    return evt;
  }
  createEvent(eventType) {
    return new Event(eventType, true);
  }
  getInnerHTML(el) {
    return el.innerHTML;
  }
  getOuterHTML(el) {
    return el.outerHTML;
  }
  nodeName(node) {
    assert.argumentTypes(node, Node);
    return assert.returnType((node.nodeName), assert.type.string);
  }
  nodeValue(node) {
    assert.argumentTypes(node, Node);
    return assert.returnType((node.nodeValue), assert.type.string);
  }
  type(node) {
    assert.argumentTypes(node, assert.type.string);
    return node.type;
  }
  content(node) {
    assert.argumentTypes(node, HTMLElement);
    if (this.hasProperty(node, "content")) {
      return assert.returnType((node.content), Node);
    } else {
      return assert.returnType((node), Node);
    }
  }
  firstChild(el) {
    return assert.returnType((el.firstChild), Node);
  }
  nextSibling(el) {
    return assert.returnType((el.nextSibling), Node);
  }
  parentElement(el) {
    return el.parentElement;
  }
  childNodes(el) {
    return assert.returnType((el.childNodes), NodeList);
  }
  childNodesAsList(el) {
    var childNodes = el.childNodes;
    var res = ListWrapper.createFixedSize(childNodes.length);
    for (var i = 0; i < childNodes.length; i++) {
      res[i] = childNodes[i];
    }
    return assert.returnType((res), List);
  }
  clearNodes(el) {
    for (var i = 0; i < el.childNodes.length; i++) {
      this.remove(el.childNodes[i]);
    }
  }
  appendChild(el, node) {
    el.appendChild(node);
  }
  removeChild(el, node) {
    el.removeChild(node);
  }
  replaceChild(el, newChild, oldChild) {
    assert.argumentTypes(el, Node, newChild, assert.type.any, oldChild, assert.type.any);
    el.replaceChild(newChild, oldChild);
  }
  remove(el) {
    var parent = el.parentNode;
    parent.removeChild(el);
    return el;
  }
  insertBefore(el, node) {
    el.parentNode.insertBefore(node, el);
  }
  insertAllBefore(el, nodes) {
    ListWrapper.forEach(nodes, (n) => {
      el.parentNode.insertBefore(n, el);
    });
  }
  insertAfter(el, node) {
    el.parentNode.insertBefore(node, el.nextSibling);
  }
  setInnerHTML(el, value) {
    el.innerHTML = value;
  }
  getText(el) {
    return el.textContent;
  }
  setText(el, value) {
    assert.argumentTypes(el, assert.type.any, value, assert.type.string);
    el.textContent = value;
  }
  getValue(el) {
    return el.value;
  }
  setValue(el, value) {
    assert.argumentTypes(el, assert.type.any, value, assert.type.string);
    el.value = value;
  }
  getChecked(el) {
    return el.checked;
  }
  setChecked(el, value) {
    assert.argumentTypes(el, assert.type.any, value, assert.type.boolean);
    el.checked = value;
  }
  createTemplate(html) {
    var t = document.createElement('template');
    t.innerHTML = html;
    return t;
  }
  createElement(tagName, doc = document) {
    return doc.createElement(tagName);
  }
  createTextNode(text, doc = document) {
    assert.argumentTypes(text, assert.type.string, doc, assert.type.any);
    return doc.createTextNode(text);
  }
  createScriptTag(attrName, attrValue, doc = document) {
    assert.argumentTypes(attrName, assert.type.string, attrValue, assert.type.string, doc, assert.type.any);
    var el = doc.createElement('SCRIPT');
    el.setAttribute(attrName, attrValue);
    return el;
  }
  createStyleElement(css, doc = document) {
    assert.argumentTypes(css, assert.type.string, doc, assert.type.any);
    var style = doc.createElement('STYLE');
    style.innerText = css;
    return assert.returnType((style), HTMLStyleElement);
  }
  createShadowRoot(el) {
    assert.argumentTypes(el, HTMLElement);
    return assert.returnType((el.createShadowRoot()), ShadowRoot);
  }
  getShadowRoot(el) {
    assert.argumentTypes(el, HTMLElement);
    return assert.returnType((el.shadowRoot), ShadowRoot);
  }
  getHost(el) {
    assert.argumentTypes(el, HTMLElement);
    return assert.returnType((el.host), HTMLElement);
  }
  clone(node) {
    assert.argumentTypes(node, Node);
    return node.cloneNode(true);
  }
  hasProperty(element, name) {
    assert.argumentTypes(element, assert.type.any, name, assert.type.string);
    return name in element;
  }
  getElementsByClassName(element, name) {
    assert.argumentTypes(element, assert.type.any, name, assert.type.string);
    return element.getElementsByClassName(name);
  }
  getElementsByTagName(element, name) {
    assert.argumentTypes(element, assert.type.any, name, assert.type.string);
    return element.getElementsByTagName(name);
  }
  classList(element) {
    return assert.returnType((Array.prototype.slice.call(element.classList, 0)), List);
  }
  addClass(element, classname) {
    assert.argumentTypes(element, assert.type.any, classname, assert.type.string);
    element.classList.add(classname);
  }
  removeClass(element, classname) {
    assert.argumentTypes(element, assert.type.any, classname, assert.type.string);
    element.classList.remove(classname);
  }
  hasClass(element, classname) {
    assert.argumentTypes(element, assert.type.any, classname, assert.type.string);
    return element.classList.contains(classname);
  }
  setStyle(element, stylename, stylevalue) {
    assert.argumentTypes(element, assert.type.any, stylename, assert.type.string, stylevalue, assert.type.string);
    element.style[stylename] = stylevalue;
  }
  removeStyle(element, stylename) {
    assert.argumentTypes(element, assert.type.any, stylename, assert.type.string);
    element.style[stylename] = null;
  }
  getStyle(element, stylename) {
    assert.argumentTypes(element, assert.type.any, stylename, assert.type.string);
    return element.style[stylename];
  }
  tagName(element) {
    return assert.returnType((element.tagName), assert.type.string);
  }
  attributeMap(element) {
    var res = MapWrapper.create();
    var elAttrs = element.attributes;
    for (var i = 0; i < elAttrs.length; i++) {
      var attrib = elAttrs[i];
      MapWrapper.set(res, attrib.name, attrib.value);
    }
    return res;
  }
  getAttribute(element, attribute) {
    assert.argumentTypes(element, assert.type.any, attribute, assert.type.string);
    return element.getAttribute(attribute);
  }
  setAttribute(element, name, value) {
    assert.argumentTypes(element, assert.type.any, name, assert.type.string, value, assert.type.string);
    element.setAttribute(name, value);
  }
  removeAttribute(element, attribute) {
    assert.argumentTypes(element, assert.type.any, attribute, assert.type.string);
    return element.removeAttribute(attribute);
  }
  templateAwareRoot(el) {
    return this.isTemplateElement(el) ? this.content(el) : el;
  }
  createHtmlDocument() {
    return document.implementation.createHTMLDocument('fakeTitle');
  }
  defaultDoc() {
    return document;
  }
  getBoundingClientRect(el) {
    return el.getBoundingClientRect();
  }
  getTitle() {
    return document.title;
  }
  setTitle(newTitle) {
    assert.argumentTypes(newTitle, assert.type.string);
    document.title = newTitle;
  }
  elementMatches(n, selector) {
    assert.argumentTypes(n, assert.type.any, selector, assert.type.string);
    return assert.returnType((n instanceof HTMLElement && n.matches(selector)), assert.type.boolean);
  }
  isTemplateElement(el) {
    assert.argumentTypes(el, assert.type.any);
    return assert.returnType((el instanceof HTMLElement && el.nodeName == "TEMPLATE"), assert.type.boolean);
  }
  isTextNode(node) {
    assert.argumentTypes(node, Node);
    return assert.returnType((node.nodeType === Node.TEXT_NODE), assert.type.boolean);
  }
  isCommentNode(node) {
    assert.argumentTypes(node, Node);
    return assert.returnType((node.nodeType === Node.COMMENT_NODE), assert.type.boolean);
  }
  isElementNode(node) {
    assert.argumentTypes(node, Node);
    return assert.returnType((node.nodeType === Node.ELEMENT_NODE), assert.type.boolean);
  }
  hasShadowRoot(node) {
    return assert.returnType((node instanceof HTMLElement && isPresent(node.shadowRoot)), assert.type.boolean);
  }
  isShadowRoot(node) {
    return assert.returnType((node instanceof ShadowRoot), assert.type.boolean);
  }
  importIntoDoc(node) {
    assert.argumentTypes(node, Node);
    var result = document.importNode(node, true);
    if (this.isTemplateElement(result) && !this.content(result).childNodes.length && this.content(node).childNodes.length) {
      var childNodes = this.content(node).childNodes;
      for (var i = 0; i < childNodes.length; ++i) {
        this.content(result).appendChild(this.importIntoDoc(childNodes[i]));
      }
    }
    return result;
  }
  isPageRule(rule) {
    return assert.returnType((rule.type === CSSRule.PAGE_RULE), assert.type.boolean);
  }
  isStyleRule(rule) {
    return assert.returnType((rule.type === CSSRule.STYLE_RULE), assert.type.boolean);
  }
  isMediaRule(rule) {
    return assert.returnType((rule.type === CSSRule.MEDIA_RULE), assert.type.boolean);
  }
  isKeyframesRule(rule) {
    return assert.returnType((rule.type === CSSRule.KEYFRAMES_RULE), assert.type.boolean);
  }
  getHref(el) {
    assert.argumentTypes(el, Element);
    return assert.returnType((el.href), assert.type.string);
  }
  getEventKey(event) {
    var key = event.key;
    if (isBlank(key)) {
      key = event.keyIdentifier;
      if (isBlank(key)) {
        return assert.returnType(('Unidentified'), assert.type.string);
      }
      if (key.startsWith('U+')) {
        key = String.fromCharCode(parseInt(key.substring(2), 16));
        if (event.location === DOM_KEY_LOCATION_NUMPAD && _chromeNumKeyPadMap.hasOwnProperty(key)) {
          key = _chromeNumKeyPadMap[key];
        }
      }
    }
    if (_keyMap.hasOwnProperty(key)) {
      key = _keyMap[key];
    }
    return assert.returnType((key), assert.type.string);
  }
  getGlobalEventTarget(target) {
    assert.argumentTypes(target, assert.type.string);
    if (target == "window") {
      return window;
    } else if (target == "document") {
      return document;
    } else if (target == "body") {
      return document.body;
    }
  }
}
Object.defineProperty(BrowserDomAdapter.prototype.query, "parameters", {get: function() {
    return [[assert.type.string]];
  }});
Object.defineProperty(BrowserDomAdapter.prototype.querySelector, "parameters", {get: function() {
    return [[], [assert.type.string]];
  }});
Object.defineProperty(BrowserDomAdapter.prototype.querySelectorAll, "parameters", {get: function() {
    return [[], [assert.type.string]];
  }});
Object.defineProperty(BrowserDomAdapter.prototype.nodeName, "parameters", {get: function() {
    return [[Node]];
  }});
Object.defineProperty(BrowserDomAdapter.prototype.nodeValue, "parameters", {get: function() {
    return [[Node]];
  }});
Object.defineProperty(BrowserDomAdapter.prototype.type, "parameters", {get: function() {
    return [[assert.type.string]];
  }});
Object.defineProperty(BrowserDomAdapter.prototype.content, "parameters", {get: function() {
    return [[HTMLElement]];
  }});
Object.defineProperty(BrowserDomAdapter.prototype.replaceChild, "parameters", {get: function() {
    return [[Node], [], []];
  }});
Object.defineProperty(BrowserDomAdapter.prototype.setText, "parameters", {get: function() {
    return [[], [assert.type.string]];
  }});
Object.defineProperty(BrowserDomAdapter.prototype.setValue, "parameters", {get: function() {
    return [[], [assert.type.string]];
  }});
Object.defineProperty(BrowserDomAdapter.prototype.setChecked, "parameters", {get: function() {
    return [[], [assert.type.boolean]];
  }});
Object.defineProperty(BrowserDomAdapter.prototype.createTextNode, "parameters", {get: function() {
    return [[assert.type.string], []];
  }});
Object.defineProperty(BrowserDomAdapter.prototype.createScriptTag, "parameters", {get: function() {
    return [[assert.type.string], [assert.type.string], []];
  }});
Object.defineProperty(BrowserDomAdapter.prototype.createStyleElement, "parameters", {get: function() {
    return [[assert.type.string], []];
  }});
Object.defineProperty(BrowserDomAdapter.prototype.createShadowRoot, "parameters", {get: function() {
    return [[HTMLElement]];
  }});
Object.defineProperty(BrowserDomAdapter.prototype.getShadowRoot, "parameters", {get: function() {
    return [[HTMLElement]];
  }});
Object.defineProperty(BrowserDomAdapter.prototype.getHost, "parameters", {get: function() {
    return [[HTMLElement]];
  }});
Object.defineProperty(BrowserDomAdapter.prototype.clone, "parameters", {get: function() {
    return [[Node]];
  }});
Object.defineProperty(BrowserDomAdapter.prototype.hasProperty, "parameters", {get: function() {
    return [[], [assert.type.string]];
  }});
Object.defineProperty(BrowserDomAdapter.prototype.getElementsByClassName, "parameters", {get: function() {
    return [[], [assert.type.string]];
  }});
Object.defineProperty(BrowserDomAdapter.prototype.getElementsByTagName, "parameters", {get: function() {
    return [[], [assert.type.string]];
  }});
Object.defineProperty(BrowserDomAdapter.prototype.addClass, "parameters", {get: function() {
    return [[], [assert.type.string]];
  }});
Object.defineProperty(BrowserDomAdapter.prototype.removeClass, "parameters", {get: function() {
    return [[], [assert.type.string]];
  }});
Object.defineProperty(BrowserDomAdapter.prototype.hasClass, "parameters", {get: function() {
    return [[], [assert.type.string]];
  }});
Object.defineProperty(BrowserDomAdapter.prototype.setStyle, "parameters", {get: function() {
    return [[], [assert.type.string], [assert.type.string]];
  }});
Object.defineProperty(BrowserDomAdapter.prototype.removeStyle, "parameters", {get: function() {
    return [[], [assert.type.string]];
  }});
Object.defineProperty(BrowserDomAdapter.prototype.getStyle, "parameters", {get: function() {
    return [[], [assert.type.string]];
  }});
Object.defineProperty(BrowserDomAdapter.prototype.getAttribute, "parameters", {get: function() {
    return [[], [assert.type.string]];
  }});
Object.defineProperty(BrowserDomAdapter.prototype.setAttribute, "parameters", {get: function() {
    return [[], [assert.type.string], [assert.type.string]];
  }});
Object.defineProperty(BrowserDomAdapter.prototype.removeAttribute, "parameters", {get: function() {
    return [[], [assert.type.string]];
  }});
Object.defineProperty(BrowserDomAdapter.prototype.setTitle, "parameters", {get: function() {
    return [[assert.type.string]];
  }});
Object.defineProperty(BrowserDomAdapter.prototype.elementMatches, "parameters", {get: function() {
    return [[], [assert.type.string]];
  }});
Object.defineProperty(BrowserDomAdapter.prototype.isTemplateElement, "parameters", {get: function() {
    return [[assert.type.any]];
  }});
Object.defineProperty(BrowserDomAdapter.prototype.isTextNode, "parameters", {get: function() {
    return [[Node]];
  }});
Object.defineProperty(BrowserDomAdapter.prototype.isCommentNode, "parameters", {get: function() {
    return [[Node]];
  }});
Object.defineProperty(BrowserDomAdapter.prototype.isElementNode, "parameters", {get: function() {
    return [[Node]];
  }});
Object.defineProperty(BrowserDomAdapter.prototype.importIntoDoc, "parameters", {get: function() {
    return [[Node]];
  }});
Object.defineProperty(BrowserDomAdapter.prototype.getHref, "parameters", {get: function() {
    return [[Element]];
  }});
Object.defineProperty(BrowserDomAdapter.prototype.getGlobalEventTarget, "parameters", {get: function() {
    return [[assert.type.string]];
  }});
//# sourceMappingURL=browser_adapter.es6.map

//# sourceMappingURL=./browser_adapter.map