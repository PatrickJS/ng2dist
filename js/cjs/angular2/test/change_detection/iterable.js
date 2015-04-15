"use strict";
var $__1;
Object.defineProperties(module.exports, {
  TestIterable: {get: function() {
      return TestIterable;
    }},
  __esModule: {value: true}
});
var TestIterable = function TestIterable() {
  this.list = [];
};
($traceurRuntime.createClass)(TestIterable, ($__1 = {}, Object.defineProperty($__1, Symbol.iterator, {
  value: function() {
    return this.list[Symbol.iterator]();
  },
  configurable: true,
  enumerable: true,
  writable: true
}), $__1), {});
//# sourceMappingURL=iterable.es6.map

//# sourceMappingURL=./iterable.map