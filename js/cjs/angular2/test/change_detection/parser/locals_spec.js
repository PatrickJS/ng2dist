'use strict'; var parse5Adapter = require('angular2/src/dom/parse5_adapter'); parse5Adapter.Parse5DomAdapter.makeCurrent();
Object.defineProperties(module.exports, {
  main: {get: function() {
      return main;
    }},
  __esModule: {value: true}
});
var $__angular2_47_test_95_lib__,
    $__angular2_47_src_47_change_95_detection_47_parser_47_locals__,
    $__angular2_47_src_47_facade_47_collection__;
var $__0 = ($__angular2_47_test_95_lib__ = require("angular2/test_lib"), $__angular2_47_test_95_lib__ && $__angular2_47_test_95_lib__.__esModule && $__angular2_47_test_95_lib__ || {default: $__angular2_47_test_95_lib__}),
    ddescribe = $__0.ddescribe,
    describe = $__0.describe,
    it = $__0.it,
    xit = $__0.xit,
    iit = $__0.iit,
    expect = $__0.expect,
    beforeEach = $__0.beforeEach;
var Locals = ($__angular2_47_src_47_change_95_detection_47_parser_47_locals__ = require("angular2/src/change_detection/parser/locals"), $__angular2_47_src_47_change_95_detection_47_parser_47_locals__ && $__angular2_47_src_47_change_95_detection_47_parser_47_locals__.__esModule && $__angular2_47_src_47_change_95_detection_47_parser_47_locals__ || {default: $__angular2_47_src_47_change_95_detection_47_parser_47_locals__}).Locals;
var MapWrapper = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}).MapWrapper;
function main() {
  describe('Locals', (function() {
    var locals;
    beforeEach((function() {
      locals = new Locals(null, MapWrapper.createFromPairs([['key', 'value'], ['nullKey', null]]));
    }));
    it('should support getting values', (function() {
      expect(locals.get('key')).toBe('value');
      expect((function() {
        return locals.get('notPresent');
      })).toThrowError(new RegExp("Cannot find"));
    }));
    it('should support checking if key is present', (function() {
      expect(locals.contains('key')).toBe(true);
      expect(locals.contains('nullKey')).toBe(true);
      expect(locals.contains('notPresent')).toBe(false);
    }));
    it('should support setting keys', (function() {
      locals.set('key', 'bar');
      expect(locals.get('key')).toBe('bar');
    }));
    it('should not support setting keys that are not present already', (function() {
      expect((function() {
        return locals.set('notPresent', 'bar');
      })).toThrowError();
    }));
    it('should clearValues', (function() {
      locals.clearValues();
      expect(locals.get('key')).toBe(null);
    }));
  }));
}
//# sourceMappingURL=locals_spec.js.map

//# sourceMappingURL=./locals_spec.map
 main();