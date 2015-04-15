"use strict";
Object.defineProperties(module.exports, {
  Log: {get: function() {
      return Log;
    }},
  viewRootNodes: {get: function() {
      return viewRootNodes;
    }},
  queryView: {get: function() {
      return queryView;
    }},
  dispatchEvent: {get: function() {
      return dispatchEvent;
    }},
  el: {get: function() {
      return el;
    }},
  __esModule: {value: true}
});
var $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_src_47_dom_47_dom_95_adapter__,
    $__angular2_47_src_47_facade_47_lang__;
var $__0 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    List = $__0.List,
    ListWrapper = $__0.ListWrapper;
var DOM = ($__angular2_47_src_47_dom_47_dom_95_adapter__ = require("angular2/src/dom/dom_adapter"), $__angular2_47_src_47_dom_47_dom_95_adapter__ && $__angular2_47_src_47_dom_47_dom_95_adapter__.__esModule && $__angular2_47_src_47_dom_47_dom_95_adapter__ || {default: $__angular2_47_src_47_dom_47_dom_95_adapter__}).DOM;
var isPresent = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}).isPresent;
var Log = function Log() {
  this._result = [];
};
($traceurRuntime.createClass)(Log, {
  add: function(value) {
    ListWrapper.push(this._result, value);
  },
  fn: function(value) {
    var $__3 = this;
    return (function() {
      ListWrapper.push($__3._result, value);
    });
  },
  result: function() {
    return ListWrapper.join(this._result, "; ");
  }
}, {});
function viewRootNodes(view) {
  return view.render.delegate.rootNodes;
}
function queryView(view, selector) {
  var rootNodes = viewRootNodes(view);
  for (var i = 0; i < rootNodes.length; ++i) {
    var res = DOM.querySelector(rootNodes[i], selector);
    if (isPresent(res)) {
      return res;
    }
  }
  return null;
}
function dispatchEvent(element, eventType) {
  DOM.dispatchEvent(element, DOM.createEvent(eventType));
}
function el(html) {
  return DOM.firstChild(DOM.content(DOM.createTemplate(html)));
}
//# sourceMappingURL=utils.js.map

//# sourceMappingURL=./utils.map