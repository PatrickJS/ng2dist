"use strict";
var $__angular2_47_di__,
    $__common__,
    $__common__,
    $__src_47_webdriver_47_selenium_95_webdriver_95_adapter__;
var bind = ($__angular2_47_di__ = require("angular2/di"), $__angular2_47_di__ && $__angular2_47_di__.__esModule && $__angular2_47_di__ || {default: $__angular2_47_di__}).bind;
var Options = ($__common__ = require("./common"), $__common__ && $__common__.__esModule && $__common__ || {default: $__common__}).Options;
var $__common__ = ($__common__ = require("./common"), $__common__ && $__common__.__esModule && $__common__ || {default: $__common__});
var $__src_47_webdriver_47_selenium_95_webdriver_95_adapter__ = ($__src_47_webdriver_47_selenium_95_webdriver_95_adapter__ = require("./src/webdriver/selenium_webdriver_adapter"), $__src_47_webdriver_47_selenium_95_webdriver_95_adapter__ && $__src_47_webdriver_47_selenium_95_webdriver_95_adapter__.__esModule && $__src_47_webdriver_47_selenium_95_webdriver_95_adapter__ || {default: $__src_47_webdriver_47_selenium_95_webdriver_95_adapter__});
var fs = require('fs');
Options.DEFAULT_BINDINGS.push(bind(Options.WRITE_FILE).toValue(writeFile));
function writeFile(filename, content) {
  return new Promise(function(resolve, reject) {
    fs.writeFile(filename, content, (function(error) {
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    }));
  });
}
module.exports = $traceurRuntime.exportStar({
  get SeleniumWebDriverAdapter() {
    return $__src_47_webdriver_47_selenium_95_webdriver_95_adapter__.SeleniumWebDriverAdapter;
  },
  __esModule: true
}, $__common__);
//# sourceMappingURL=benchpress.es6.map

//# sourceMappingURL=./benchpress.map