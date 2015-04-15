"use strict";
Object.defineProperties(module.exports, {
  Content: {get: function() {
      return Content;
    }},
  __esModule: {value: true}
});
var $__light_95_dom__,
    $__angular2_47_src_47_dom_47_dom_95_adapter__,
    $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_facade_47_collection__;
var ldModule = ($__light_95_dom__ = require("./light_dom"), $__light_95_dom__ && $__light_95_dom__.__esModule && $__light_95_dom__ || {default: $__light_95_dom__});
var DOM = ($__angular2_47_src_47_dom_47_dom_95_adapter__ = require("angular2/src/dom/dom_adapter"), $__angular2_47_src_47_dom_47_dom_95_adapter__ && $__angular2_47_src_47_dom_47_dom_95_adapter__.__esModule && $__angular2_47_src_47_dom_47_dom_95_adapter__ || {default: $__angular2_47_src_47_dom_47_dom_95_adapter__}).DOM;
var isPresent = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}).isPresent;
var $__2 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    List = $__2.List,
    ListWrapper = $__2.ListWrapper;
var ContentStrategy = function ContentStrategy() {
  ;
};
($traceurRuntime.createClass)(ContentStrategy, {insert: function(nodes) {}}, {});
Object.defineProperty(ContentStrategy.prototype.insert, "parameters", {get: function() {
    return [[List]];
  }});
var RenderedContent = function RenderedContent(contentEl) {
  $traceurRuntime.superConstructor($RenderedContent).call(this);
  this.beginScript = contentEl;
  this.endScript = DOM.nextSibling(this.beginScript);
  this.nodes = [];
};
var $RenderedContent = RenderedContent;
($traceurRuntime.createClass)(RenderedContent, {
  insert: function(nodes) {
    this.nodes = nodes;
    DOM.insertAllBefore(this.endScript, nodes);
    this._removeNodesUntil(ListWrapper.isEmpty(nodes) ? this.endScript : nodes[0]);
  },
  _removeNodesUntil: function(node) {
    var p = DOM.parentElement(this.beginScript);
    for (var next = DOM.nextSibling(this.beginScript); next !== node; next = DOM.nextSibling(this.beginScript)) {
      DOM.removeChild(p, next);
    }
  }
}, {}, ContentStrategy);
Object.defineProperty(RenderedContent.prototype.insert, "parameters", {get: function() {
    return [[List]];
  }});
var IntermediateContent = function IntermediateContent(destinationLightDom) {
  $traceurRuntime.superConstructor($IntermediateContent).call(this);
  this.nodes = [];
  this.destinationLightDom = destinationLightDom;
};
var $IntermediateContent = IntermediateContent;
($traceurRuntime.createClass)(IntermediateContent, {insert: function(nodes) {
    this.nodes = nodes;
    this.destinationLightDom.redistribute();
  }}, {}, ContentStrategy);
Object.defineProperty(IntermediateContent, "parameters", {get: function() {
    return [[ldModule.LightDom]];
  }});
Object.defineProperty(IntermediateContent.prototype.insert, "parameters", {get: function() {
    return [[List]];
  }});
var Content = function Content(contentStartEl, selector) {
  this.select = selector;
  this.contentStartElement = contentStartEl;
  this._strategy = null;
};
($traceurRuntime.createClass)(Content, {
  hydrate: function(destinationLightDom) {
    this._strategy = isPresent(destinationLightDom) ? new IntermediateContent(destinationLightDom) : new RenderedContent(this.contentStartElement);
  },
  dehydrate: function() {
    this._strategy = null;
  },
  nodes: function() {
    return this._strategy.nodes;
  },
  insert: function(nodes) {
    this._strategy.insert(nodes);
  }
}, {});
Object.defineProperty(Content, "parameters", {get: function() {
    return [[], [$traceurRuntime.type.string]];
  }});
Object.defineProperty(Content.prototype.hydrate, "parameters", {get: function() {
    return [[ldModule.LightDom]];
  }});
Object.defineProperty(Content.prototype.insert, "parameters", {get: function() {
    return [[List]];
  }});
//# sourceMappingURL=content_tag.js.map

//# sourceMappingURL=./content_tag.map