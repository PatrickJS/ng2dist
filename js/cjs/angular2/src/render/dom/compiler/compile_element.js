"use strict";
Object.defineProperties(module.exports, {
  CompileElement: {get: function() {
      return CompileElement;
    }},
  __esModule: {value: true}
});
var $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_src_47_dom_47_dom_95_adapter__,
    $__angular2_47_src_47_facade_47_lang__,
    $___46__46__47_view_47_proto_95_view_95_builder__;
var $__0 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    List = $__0.List,
    Map = $__0.Map,
    ListWrapper = $__0.ListWrapper,
    MapWrapper = $__0.MapWrapper;
var DOM = ($__angular2_47_src_47_dom_47_dom_95_adapter__ = require("angular2/src/dom/dom_adapter"), $__angular2_47_src_47_dom_47_dom_95_adapter__ && $__angular2_47_src_47_dom_47_dom_95_adapter__.__esModule && $__angular2_47_src_47_dom_47_dom_95_adapter__ || {default: $__angular2_47_src_47_dom_47_dom_95_adapter__}).DOM;
var $__2 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    int = $__2.int,
    isBlank = $__2.isBlank,
    isPresent = $__2.isPresent,
    Type = $__2.Type,
    StringJoiner = $__2.StringJoiner,
    assertionsEnabled = $__2.assertionsEnabled;
var $__3 = ($___46__46__47_view_47_proto_95_view_95_builder__ = require("../view/proto_view_builder"), $___46__46__47_view_47_proto_95_view_95_builder__ && $___46__46__47_view_47_proto_95_view_95_builder__.__esModule && $___46__46__47_view_47_proto_95_view_95_builder__ || {default: $___46__46__47_view_47_proto_95_view_95_builder__}),
    ProtoViewBuilder = $__3.ProtoViewBuilder,
    ElementBinderBuilder = $__3.ElementBinderBuilder;
var CompileElement = function CompileElement(element) {
  var compilationUnit = arguments[1] !== (void 0) ? arguments[1] : '';
  this.element = element;
  this._attrs = null;
  this._classList = null;
  this.isViewRoot = false;
  this.inheritedProtoView = null;
  this.inheritedElementBinder = null;
  this.distanceToInheritedBinder = 0;
  this.compileChildren = true;
  var tplDesc = assertionsEnabled() ? getElementDescription(element) : null;
  if (compilationUnit !== '') {
    this.elementDescription = compilationUnit;
    if (isPresent(tplDesc))
      this.elementDescription += ": " + tplDesc;
  } else {
    this.elementDescription = tplDesc;
  }
};
($traceurRuntime.createClass)(CompileElement, {
  isBound: function() {
    return isPresent(this.inheritedElementBinder) && this.distanceToInheritedBinder === 0;
  },
  bindElement: function() {
    if (!this.isBound()) {
      var parentBinder = this.inheritedElementBinder;
      this.inheritedElementBinder = this.inheritedProtoView.bindElement(this.element, this.elementDescription);
      if (isPresent(parentBinder)) {
        this.inheritedElementBinder.setParent(parentBinder, this.distanceToInheritedBinder);
      }
      this.distanceToInheritedBinder = 0;
    }
    return this.inheritedElementBinder;
  },
  refreshAttrs: function() {
    this._attrs = null;
  },
  attrs: function() {
    if (isBlank(this._attrs)) {
      this._attrs = DOM.attributeMap(this.element);
    }
    return this._attrs;
  },
  refreshClassList: function() {
    this._classList = null;
  },
  classList: function() {
    if (isBlank(this._classList)) {
      this._classList = ListWrapper.create();
      var elClassList = DOM.classList(this.element);
      for (var i = 0; i < elClassList.length; i++) {
        ListWrapper.push(this._classList, elClassList[i]);
      }
    }
    return this._classList;
  }
}, {});
function getElementDescription(domElement) {
  var buf = new StringJoiner();
  var atts = DOM.attributeMap(domElement);
  buf.add("<");
  buf.add(DOM.tagName(domElement).toLowerCase());
  addDescriptionAttribute(buf, "id", MapWrapper.get(atts, "id"));
  addDescriptionAttribute(buf, "class", MapWrapper.get(atts, "class"));
  MapWrapper.forEach(atts, (function(attValue, attName) {
    if (attName !== "id" && attName !== "class") {
      addDescriptionAttribute(buf, attName, attValue);
    }
  }));
  buf.add(">");
  return buf.toString();
}
function addDescriptionAttribute(buffer, attName, attValue) {
  if (isPresent(attValue)) {
    if (attValue.length === 0) {
      buffer.add(' ' + attName);
    } else {
      buffer.add(' ' + attName + '="' + attValue + '"');
    }
  }
}
Object.defineProperty(addDescriptionAttribute, "parameters", {get: function() {
    return [[StringJoiner], [$traceurRuntime.type.string], []];
  }});
//# sourceMappingURL=compile_element.js.map

//# sourceMappingURL=./compile_element.map