'use strict'; var parse5Adapter = require('angular2/src/dom/parse5_adapter'); parse5Adapter.Parse5DomAdapter.makeCurrent();
Object.defineProperties(module.exports, {
  main: {get: function() {
      return main;
    }},
  __esModule: {value: true}
});
var $__angular2_47_test_95_lib__,
    $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_src_47_facade_47_lang__;
var $__0 = ($__angular2_47_test_95_lib__ = require("angular2/test_lib"), $__angular2_47_test_95_lib__ && $__angular2_47_test_95_lib__.__esModule && $__angular2_47_test_95_lib__ || {default: $__angular2_47_test_95_lib__}),
    describe = $__0.describe,
    it = $__0.it,
    iit = $__0.iit,
    ddescribe = $__0.ddescribe,
    expect = $__0.expect,
    tick = $__0.tick,
    async = $__0.async,
    SpyObject = $__0.SpyObject,
    beforeEach = $__0.beforeEach,
    proxy = $__0.proxy;
var MapWrapper = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}).MapWrapper;
var IMPLEMENTS = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}).IMPLEMENTS;
var TestObj = function TestObj(prop) {
  this.prop = prop;
};
($traceurRuntime.createClass)(TestObj, {}, {});
var SpyTestObj = function SpyTestObj() {
  $traceurRuntime.superConstructor($SpyTestObj).apply(this, arguments);
  ;
};
var $SpyTestObj = SpyTestObj;
($traceurRuntime.createClass)(SpyTestObj, {noSuchMethod: function(m) {
    return $traceurRuntime.superGet(this, $SpyTestObj.prototype, "noSuchMethod").call(this, m);
  }}, {}, SpyObject);
Object.defineProperty(SpyTestObj, "annotations", {get: function() {
    return [new proxy, new IMPLEMENTS(TestObj)];
  }});
function main() {
  describe('test_lib', (function() {
    describe('equality', (function() {
      it('should structurally compare objects', (function() {
        var expected = new TestObj(new TestObj({'one': [1, 2]}));
        var actual = new TestObj(new TestObj({'one': [1, 2]}));
        var falseActual = new TestObj(new TestObj({'one': [1, 3]}));
        expect(actual).toEqual(expected);
        expect(falseActual).not.toEqual(expected);
      }));
    }));
    describe('toEqual for Maps', (function() {
      it('should detect equality for same reference', (function() {
        var m1 = MapWrapper.createFromStringMap({'a': 1});
        expect(m1).toEqual(m1);
      }));
      it('should detect equality for same content', (function() {
        expect(MapWrapper.createFromStringMap({'a': 1})).toEqual(MapWrapper.createFromStringMap({'a': 1}));
      }));
      it('should detect missing entries', (function() {
        expect(MapWrapper.createFromStringMap({'a': 1})).not.toEqual(MapWrapper.createFromStringMap({}));
      }));
      it('should detect different values', (function() {
        expect(MapWrapper.createFromStringMap({'a': 1})).not.toEqual(MapWrapper.createFromStringMap({'a': 2}));
      }));
      it('should detect additional entries', (function() {
        expect(MapWrapper.createFromStringMap({'a': 1})).not.toEqual(MapWrapper.createFromStringMap({
          'a': 1,
          'b': 1
        }));
      }));
    }));
    describe("spy objects", (function() {
      var spyObj;
      beforeEach((function() {
        spyObj = new SpyTestObj();
      }));
      it("should pass the runtime check", (function() {
        var t = spyObj;
        expect(t).toBeDefined();
      }));
      it("should return a new spy func with no calls", (function() {
        expect(spyObj.spy("someFunc")).not.toHaveBeenCalled();
      }));
      it("should record function calls", (function() {
        spyObj.spy("someFunc").andCallFake((function(a, b) {
          return a + b;
        }));
        expect(spyObj.someFunc(1, 2)).toEqual(3);
        expect(spyObj.spy("someFunc")).toHaveBeenCalledWith(1, 2);
      }));
    }));
  }));
}
//# sourceMappingURL=test_lib_spec.js.map

//# sourceMappingURL=./test_lib_spec.map
 main();