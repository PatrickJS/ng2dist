"use strict";
Object.defineProperties(module.exports, {
  CSSClass: {get: function() {
      return CSSClass;
    }},
  __esModule: {value: true}
});
var $__angular2_47_src_47_core_47_annotations_47_annotations__,
    $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_dom_47_dom_95_adapter__,
    $__angular2_47_src_47_core_47_compiler_47_ng_95_element__;
var Decorator = ($__angular2_47_src_47_core_47_annotations_47_annotations__ = require("angular2/src/core/annotations/annotations"), $__angular2_47_src_47_core_47_annotations_47_annotations__ && $__angular2_47_src_47_core_47_annotations_47_annotations__.__esModule && $__angular2_47_src_47_core_47_annotations_47_annotations__ || {default: $__angular2_47_src_47_core_47_annotations_47_annotations__}).Decorator;
var isPresent = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}).isPresent;
var DOM = ($__angular2_47_src_47_dom_47_dom_95_adapter__ = require("angular2/src/dom/dom_adapter"), $__angular2_47_src_47_dom_47_dom_95_adapter__ && $__angular2_47_src_47_dom_47_dom_95_adapter__.__esModule && $__angular2_47_src_47_dom_47_dom_95_adapter__ || {default: $__angular2_47_src_47_dom_47_dom_95_adapter__}).DOM;
var NgElement = ($__angular2_47_src_47_core_47_compiler_47_ng_95_element__ = require("angular2/src/core/compiler/ng_element"), $__angular2_47_src_47_core_47_compiler_47_ng_95_element__ && $__angular2_47_src_47_core_47_compiler_47_ng_95_element__.__esModule && $__angular2_47_src_47_core_47_compiler_47_ng_95_element__ || {default: $__angular2_47_src_47_core_47_compiler_47_ng_95_element__}).NgElement;
var CSSClass = function CSSClass(ngEl) {
  this._domEl = ngEl.domElement;
};
($traceurRuntime.createClass)(CSSClass, {
  _toggleClass: function(className, enabled) {
    if (enabled) {
      DOM.addClass(this._domEl, className);
    } else {
      DOM.removeClass(this._domEl, className);
    }
  },
  set iterableChanges(changes) {
    var $__4 = this;
    if (isPresent(changes)) {
      changes.forEachAddedItem((function(record) {
        $__4._toggleClass(record.key, record.currentValue);
      }));
      changes.forEachChangedItem((function(record) {
        $__4._toggleClass(record.key, record.currentValue);
      }));
      changes.forEachRemovedItem((function(record) {
        if (record.previousValue) {
          DOM.removeClass($__4._domEl, record.key);
        }
      }));
    }
  }
}, {});
Object.defineProperty(CSSClass, "annotations", {get: function() {
    return [new Decorator({
      selector: '[class]',
      properties: {'iterableChanges': 'class | keyValDiff'}
    })];
  }});
Object.defineProperty(CSSClass, "parameters", {get: function() {
    return [[NgElement]];
  }});
//# sourceMappingURL=class.js.map

//# sourceMappingURL=./class.map