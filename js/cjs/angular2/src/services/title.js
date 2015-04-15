"use strict";
Object.defineProperties(module.exports, {
  Title: {get: function() {
      return Title;
    }},
  __esModule: {value: true}
});
var $__angular2_47_src_47_dom_47_dom_95_adapter__;
var DOM = ($__angular2_47_src_47_dom_47_dom_95_adapter__ = require("angular2/src/dom/dom_adapter"), $__angular2_47_src_47_dom_47_dom_95_adapter__ && $__angular2_47_src_47_dom_47_dom_95_adapter__.__esModule && $__angular2_47_src_47_dom_47_dom_95_adapter__ || {default: $__angular2_47_src_47_dom_47_dom_95_adapter__}).DOM;
var Title = function Title() {
  ;
};
($traceurRuntime.createClass)(Title, {
  getTitle: function() {
    return DOM.getTitle();
  },
  setTitle: function(newTitle) {
    DOM.setTitle(newTitle);
  }
}, {});
Object.defineProperty(Title.prototype.setTitle, "parameters", {get: function() {
    return [[$traceurRuntime.type.string]];
  }});
//# sourceMappingURL=title.js.map

//# sourceMappingURL=./title.map