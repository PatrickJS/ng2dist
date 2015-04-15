"use strict";
Object.defineProperties(module.exports, {
  getIntParameter: {get: function() {
      return getIntParameter;
    }},
  getStringParameter: {get: function() {
      return getStringParameter;
    }},
  bindAction: {get: function() {
      return bindAction;
    }},
  microBenchmark: {get: function() {
      return microBenchmark;
    }},
  __esModule: {value: true}
});
var $__angular2_47_src_47_dom_47_browser_95_adapter__,
    $__angular2_47_src_47_facade_47_browser__,
    $__angular2_47_src_47_facade_47_lang__;
var BrowserDomAdapter = ($__angular2_47_src_47_dom_47_browser_95_adapter__ = require("angular2/src/dom/browser_adapter"), $__angular2_47_src_47_dom_47_browser_95_adapter__ && $__angular2_47_src_47_dom_47_browser_95_adapter__.__esModule && $__angular2_47_src_47_dom_47_browser_95_adapter__ || {default: $__angular2_47_src_47_dom_47_browser_95_adapter__}).BrowserDomAdapter;
var $__1 = ($__angular2_47_src_47_facade_47_browser__ = require("angular2/src/facade/browser"), $__angular2_47_src_47_facade_47_browser__ && $__angular2_47_src_47_facade_47_browser__.__esModule && $__angular2_47_src_47_facade_47_browser__ || {default: $__angular2_47_src_47_facade_47_browser__}),
    document = $__1.document,
    window = $__1.window;
var $__2 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    NumberWrapper = $__2.NumberWrapper,
    BaseException = $__2.BaseException,
    isBlank = $__2.isBlank;
var DOM = new BrowserDomAdapter();
function getIntParameter(name) {
  return NumberWrapper.parseInt(getStringParameter(name), 10);
}
Object.defineProperty(getIntParameter, "parameters", {get: function() {
    return [[$traceurRuntime.type.string]];
  }});
function getStringParameter(name) {
  var els = DOM.querySelectorAll(document, ("input[name=\"" + name + "\"]"));
  var value;
  var el;
  for (var i = 0; i < els.length; i++) {
    el = els[i];
    var type = DOM.type(el);
    if ((type != 'radio' && type != 'checkbox') || DOM.getChecked(el)) {
      value = DOM.getValue(el);
      break;
    }
  }
  if (isBlank(value)) {
    throw new BaseException(("Could not find and input field with name " + name));
  }
  return value;
}
Object.defineProperty(getStringParameter, "parameters", {get: function() {
    return [[$traceurRuntime.type.string]];
  }});
function bindAction(selector, callback) {
  var el = DOM.querySelector(document, selector);
  DOM.on(el, 'click', function(_) {
    callback();
  });
}
Object.defineProperty(bindAction, "parameters", {get: function() {
    return [[$traceurRuntime.type.string], [Function]];
  }});
function microBenchmark(name, iterationCount, callback) {
  var durationName = (name + "/" + iterationCount);
  window.console.time(durationName);
  callback();
  window.console.timeEnd(durationName);
}
//# sourceMappingURL=benchmark_util.js.map

//# sourceMappingURL=./benchmark_util.map