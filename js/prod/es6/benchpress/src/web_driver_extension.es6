import {bind,
  Injector,
  OpaqueToken} from 'angular2/di';
import {BaseException,
  ABSTRACT,
  isBlank,
  isPresent} from 'angular2/src/facade/lang';
import {Promise,
  PromiseWrapper} from 'angular2/src/facade/async';
import {List,
  ListWrapper,
  StringMap} from 'angular2/src/facade/collection';
import {Options} from './common_options';
export class WebDriverExtension {
  static bindTo(childTokens) {
    return [bind(_CHILDREN).toAsyncFactory((injector) => PromiseWrapper.all(ListWrapper.map(childTokens, (token) => injector.asyncGet(token))), [Injector]), bind(WebDriverExtension).toFactory((children, capabilities) => {
      var delegate;
      ListWrapper.forEach(children, (extension) => {
        if (extension.supports(capabilities)) {
          delegate = extension;
        }
      });
      if (isBlank(delegate)) {
        throw new BaseException('Could not find a delegate for given capabilities!');
      }
      return delegate;
    }, [_CHILDREN, Options.CAPABILITIES])];
  }
  gc() {
    throw new BaseException('NYI');
  }
  timeBegin(name) {
    throw new BaseException('NYI');
  }
  timeEnd(name, restart) {
    throw new BaseException('NYI');
  }
  readPerfLog() {
    throw new BaseException('NYI');
  }
  perfLogFeatures() {
    throw new BaseException('NYI');
  }
  supports(capabilities) {
    return true;
  }
}
Object.defineProperty(WebDriverExtension, "annotations", {get: function() {
    return [new ABSTRACT()];
  }});
Object.defineProperty(WebDriverExtension.prototype.timeEnd, "parameters", {get: function() {
    return [[], [assert.type.boolean]];
  }});
Object.defineProperty(WebDriverExtension.prototype.supports, "parameters", {get: function() {
    return [[StringMap]];
  }});
export class PerfLogFeatures {
  constructor({render,
    gc} = {}) {
    this.render = isPresent(render) && render;
    this.gc = isPresent(gc) && gc;
  }
}
var _CHILDREN = new OpaqueToken('WebDriverExtension.children');
//# sourceMappingURL=web_driver_extension.js.map

//# sourceMappingURL=./web_driver_extension.map