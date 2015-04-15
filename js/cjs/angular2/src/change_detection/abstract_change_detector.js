"use strict";
Object.defineProperties(module.exports, {
  AbstractChangeDetector: {get: function() {
      return AbstractChangeDetector;
    }},
  __esModule: {value: true}
});
var $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_facade_47_collection__,
    $__binding_95_propagation_95_config__,
    $__interfaces__,
    $__constants__;
var isPresent = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}).isPresent;
var $__1 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    List = $__1.List,
    ListWrapper = $__1.ListWrapper;
var BindingPropagationConfig = ($__binding_95_propagation_95_config__ = require("./binding_propagation_config"), $__binding_95_propagation_95_config__ && $__binding_95_propagation_95_config__.__esModule && $__binding_95_propagation_95_config__ || {default: $__binding_95_propagation_95_config__}).BindingPropagationConfig;
var ChangeDetector = ($__interfaces__ = require("./interfaces"), $__interfaces__ && $__interfaces__.__esModule && $__interfaces__ || {default: $__interfaces__}).ChangeDetector;
var $__4 = ($__constants__ = require("./constants"), $__constants__ && $__constants__.__esModule && $__constants__ || {default: $__constants__}),
    CHECK_ALWAYS = $__4.CHECK_ALWAYS,
    CHECK_ONCE = $__4.CHECK_ONCE,
    CHECKED = $__4.CHECKED,
    DETACHED = $__4.DETACHED,
    ON_PUSH = $__4.ON_PUSH;
var AbstractChangeDetector = function AbstractChangeDetector() {
  $traceurRuntime.superConstructor($AbstractChangeDetector).call(this);
  this.lightDomChildren = [];
  this.shadowDomChildren = [];
  this.bindingPropagationConfig = new BindingPropagationConfig(this);
  this.mode = null;
};
var $AbstractChangeDetector = AbstractChangeDetector;
($traceurRuntime.createClass)(AbstractChangeDetector, {
  addChild: function(cd) {
    ListWrapper.push(this.lightDomChildren, cd);
    cd.parent = this;
  },
  removeChild: function(cd) {
    ListWrapper.remove(this.lightDomChildren, cd);
  },
  addShadowDomChild: function(cd) {
    ListWrapper.push(this.shadowDomChildren, cd);
    cd.parent = this;
  },
  remove: function() {
    this.parent.removeChild(this);
  },
  detectChanges: function() {
    this._detectChanges(false);
  },
  checkNoChanges: function() {
    this._detectChanges(true);
  },
  _detectChanges: function(throwOnChange) {
    if (this.mode === DETACHED || this.mode === CHECKED)
      return ;
    this.detectChangesInRecords(throwOnChange);
    this._detectChangesInLightDomChildren(throwOnChange);
    this.callOnAllChangesDone();
    this._detectChangesInShadowDomChildren(throwOnChange);
    if (this.mode === CHECK_ONCE)
      this.mode = CHECKED;
  },
  detectChangesInRecords: function(throwOnChange) {},
  callOnAllChangesDone: function() {},
  _detectChangesInLightDomChildren: function(throwOnChange) {
    var c = this.lightDomChildren;
    for (var i = 0; i < c.length; ++i) {
      c[i]._detectChanges(throwOnChange);
    }
  },
  _detectChangesInShadowDomChildren: function(throwOnChange) {
    var c = this.shadowDomChildren;
    for (var i = 0; i < c.length; ++i) {
      c[i]._detectChanges(throwOnChange);
    }
  },
  markPathToRootAsCheckOnce: function() {
    var c = this;
    while (isPresent(c) && c.mode != DETACHED) {
      if (c.mode === CHECKED)
        c.mode = CHECK_ONCE;
      c = c.parent;
    }
  }
}, {}, ChangeDetector);
Object.defineProperty(AbstractChangeDetector.prototype.addChild, "parameters", {get: function() {
    return [[ChangeDetector]];
  }});
Object.defineProperty(AbstractChangeDetector.prototype.removeChild, "parameters", {get: function() {
    return [[ChangeDetector]];
  }});
Object.defineProperty(AbstractChangeDetector.prototype.addShadowDomChild, "parameters", {get: function() {
    return [[ChangeDetector]];
  }});
Object.defineProperty(AbstractChangeDetector.prototype._detectChanges, "parameters", {get: function() {
    return [[$traceurRuntime.type.boolean]];
  }});
Object.defineProperty(AbstractChangeDetector.prototype.detectChangesInRecords, "parameters", {get: function() {
    return [[$traceurRuntime.type.boolean]];
  }});
Object.defineProperty(AbstractChangeDetector.prototype._detectChangesInLightDomChildren, "parameters", {get: function() {
    return [[$traceurRuntime.type.boolean]];
  }});
Object.defineProperty(AbstractChangeDetector.prototype._detectChangesInShadowDomChildren, "parameters", {get: function() {
    return [[$traceurRuntime.type.boolean]];
  }});
//# sourceMappingURL=abstract_change_detector.js.map

//# sourceMappingURL=./abstract_change_detector.map