"use strict";
Object.defineProperties(module.exports, {
  View: {get: function() {
      return View;
    }},
  __esModule: {value: true}
});
var $__angular2_47_src_47_facade_47_lang__;
var $__0 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    ABSTRACT = $__0.ABSTRACT,
    CONST = $__0.CONST,
    Type = $__0.Type;
var View = function View($__2) {
  var $__3 = $__2,
      templateUrl = $__3.templateUrl,
      template = $__3.template,
      directives = $__3.directives,
      formatters = $__3.formatters,
      source = $__3.source,
      locale = $__3.locale,
      device = $__3.device;
  this.templateUrl = templateUrl;
  this.template = template;
  this.directives = directives;
  this.formatters = formatters;
  this.source = source;
  this.locale = locale;
  this.device = device;
};
($traceurRuntime.createClass)(View, {}, {});
Object.defineProperty(View, "annotations", {get: function() {
    return [new CONST()];
  }});
//# sourceMappingURL=view.js.map

//# sourceMappingURL=./view.map