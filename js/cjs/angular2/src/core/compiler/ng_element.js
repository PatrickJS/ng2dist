"use strict";
Object.defineProperties(module.exports, {
  NgElement: {get: function() {
      return NgElement;
    }},
  __esModule: {value: true}
});
var $__angular2_47_src_47_dom_47_dom_95_adapter__,
    $__angular2_47_src_47_facade_47_lang__,
    $___46__46__47_compiler_47_view__,
    $__angular2_47_src_47_render_47_dom_47_direct_95_dom_95_renderer__;
var DOM = ($__angular2_47_src_47_dom_47_dom_95_adapter__ = require("angular2/src/dom/dom_adapter"), $__angular2_47_src_47_dom_47_dom_95_adapter__ && $__angular2_47_src_47_dom_47_dom_95_adapter__.__esModule && $__angular2_47_src_47_dom_47_dom_95_adapter__ || {default: $__angular2_47_src_47_dom_47_dom_95_adapter__}).DOM;
var normalizeBlank = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}).normalizeBlank;
var viewModule = ($___46__46__47_compiler_47_view__ = require("../compiler/view"), $___46__46__47_compiler_47_view__ && $___46__46__47_compiler_47_view__.__esModule && $___46__46__47_compiler_47_view__ || {default: $___46__46__47_compiler_47_view__});
var DirectDomViewRef = ($__angular2_47_src_47_render_47_dom_47_direct_95_dom_95_renderer__ = require("angular2/src/render/dom/direct_dom_renderer"), $__angular2_47_src_47_render_47_dom_47_direct_95_dom_95_renderer__ && $__angular2_47_src_47_render_47_dom_47_direct_95_dom_95_renderer__.__esModule && $__angular2_47_src_47_render_47_dom_47_direct_95_dom_95_renderer__ || {default: $__angular2_47_src_47_render_47_dom_47_direct_95_dom_95_renderer__}).DirectDomViewRef;
var NgElement = function NgElement(view, boundElementIndex) {
  this._view = view;
  this._boundElementIndex = boundElementIndex;
};
($traceurRuntime.createClass)(NgElement, {
  get domElement() {
    var domViewRef = this._view.render;
    return domViewRef.delegate.boundElements[this._boundElementIndex];
  },
  getAttribute: function(name) {
    return normalizeBlank(DOM.getAttribute(this.domElement, name));
  }
}, {});
Object.defineProperty(NgElement.prototype.getAttribute, "parameters", {get: function() {
    return [[$traceurRuntime.type.string]];
  }});
//# sourceMappingURL=ng_element.js.map

//# sourceMappingURL=./ng_element.map