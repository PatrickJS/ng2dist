import {assert} from "rtts_assert/rtts_assert";
import {Promise} from 'angular2/src/facade/async';
export class XHR {
  get(url) {
    assert.argumentTypes(url, assert.type.string);
    return assert.returnType((null), assert.genericType(Promise, assert.type.string));
  }
}
Object.defineProperty(XHR.prototype.get, "parameters", {get: function() {
    return [[assert.type.string]];
  }});
//# sourceMappingURL=xhr.js.map

//# sourceMappingURL=./xhr.map