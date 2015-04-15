import {bind} from 'angular2/di';
import {Options} from './common';
export * from './common';
export {SeleniumWebDriverAdapter} from './src/webdriver/selenium_webdriver_adapter';
var fs = require('fs');
Options.DEFAULT_BINDINGS.push(bind(Options.WRITE_FILE).toValue(writeFile));
function writeFile(filename, content) {
  return new Promise(function(resolve, reject) {
    fs.writeFile(filename, content, (error) => {
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    });
  });
}
//# sourceMappingURL=benchpress.es6.map

//# sourceMappingURL=./benchpress.map