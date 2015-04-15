"use strict";
Object.defineProperties(module.exports, {
  SeleniumWebDriverAdapter: {get: function() {
      return SeleniumWebDriverAdapter;
    }},
  __esModule: {value: true}
});
var $__angular2_47_src_47_facade_47_async__,
    $__angular2_47_di__,
    $___46__46__47_web_95_driver_95_adapter__,
    $__selenium_45_webdriver__;
var $__0 = ($__angular2_47_src_47_facade_47_async__ = require("angular2/src/facade/async"), $__angular2_47_src_47_facade_47_async__ && $__angular2_47_src_47_facade_47_async__.__esModule && $__angular2_47_src_47_facade_47_async__ || {default: $__angular2_47_src_47_facade_47_async__}),
    Promise = $__0.Promise,
    PromiseWrapper = $__0.PromiseWrapper;
var bind = ($__angular2_47_di__ = require("angular2/di"), $__angular2_47_di__ && $__angular2_47_di__.__esModule && $__angular2_47_di__ || {default: $__angular2_47_di__}).bind;
var WebDriverAdapter = ($___46__46__47_web_95_driver_95_adapter__ = require("../web_driver_adapter"), $___46__46__47_web_95_driver_95_adapter__ && $___46__46__47_web_95_driver_95_adapter__.__esModule && $___46__46__47_web_95_driver_95_adapter__ || {default: $___46__46__47_web_95_driver_95_adapter__}).WebDriverAdapter;
var webdriver = ($__selenium_45_webdriver__ = require("selenium-webdriver"), $__selenium_45_webdriver__ && $__selenium_45_webdriver__.__esModule && $__selenium_45_webdriver__ || {default: $__selenium_45_webdriver__}).default;
var SeleniumWebDriverAdapter = function SeleniumWebDriverAdapter(driver) {
  $traceurRuntime.superConstructor($SeleniumWebDriverAdapter).call(this);
  this._driver = driver;
};
var $SeleniumWebDriverAdapter = SeleniumWebDriverAdapter;
($traceurRuntime.createClass)(SeleniumWebDriverAdapter, {
  _convertPromise: function(thenable) {
    var completer = PromiseWrapper.completer();
    thenable.then((function(data) {
      return completer.resolve(convertToLocalProcess(data));
    }), completer.reject);
    return completer.promise;
  },
  waitFor: function(callback) {
    return this._convertPromise(this._driver.controlFlow().execute(callback));
  },
  executeScript: function(script) {
    return this._convertPromise(this._driver.executeScript(script));
  },
  capabilities: function() {
    return this._convertPromise(this._driver.getCapabilities().then((function(capsObject) {
      return capsObject.toJSON();
    })));
  },
  logs: function(type) {
    return this._convertPromise(this._driver.schedule(new webdriver.Command(webdriver.CommandName.GET_LOG).setParameter('type', type), 'WebDriver.manage().logs().get(' + type + ')'));
  }
}, {get PROTRACTOR_BINDINGS() {
    return _PROTRACTOR_BINDINGS;
  }}, WebDriverAdapter);
Object.defineProperty(SeleniumWebDriverAdapter.prototype.executeScript, "parameters", {get: function() {
    return [[$traceurRuntime.type.string]];
  }});
Object.defineProperty(SeleniumWebDriverAdapter.prototype.logs, "parameters", {get: function() {
    return [[$traceurRuntime.type.string]];
  }});
function convertToLocalProcess(data) {
  var serialized = JSON.stringify(data);
  if ('' + serialized === 'undefined') {
    return undefined;
  }
  return JSON.parse(serialized);
}
var _PROTRACTOR_BINDINGS = [bind(WebDriverAdapter).toFactory((function() {
  return new SeleniumWebDriverAdapter(global.browser);
}), [])];
//# sourceMappingURL=selenium_webdriver_adapter.es6.map

//# sourceMappingURL=./selenium_webdriver_adapter.map