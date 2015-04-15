'use strict'; var parse5Adapter = require('angular2/src/dom/parse5_adapter'); parse5Adapter.Parse5DomAdapter.makeCurrent();
Object.defineProperties(module.exports, {
  main: {get: function() {
      return main;
    }},
  __esModule: {value: true}
});
var $__angular2_47_test_95_lib__,
    $__angular2_47_src_47_core_47_testability_47_testability__;
var $__0 = ($__angular2_47_test_95_lib__ = require("angular2/test_lib"), $__angular2_47_test_95_lib__ && $__angular2_47_test_95_lib__.__esModule && $__angular2_47_test_95_lib__ || {default: $__angular2_47_test_95_lib__}),
    describe = $__0.describe,
    ddescribe = $__0.ddescribe,
    it = $__0.it,
    iit = $__0.iit,
    xit = $__0.xit,
    xdescribe = $__0.xdescribe,
    expect = $__0.expect,
    beforeEach = $__0.beforeEach;
var Testability = ($__angular2_47_src_47_core_47_testability_47_testability__ = require("angular2/src/core/testability/testability"), $__angular2_47_src_47_core_47_testability_47_testability__ && $__angular2_47_src_47_core_47_testability_47_testability__.__esModule && $__angular2_47_src_47_core_47_testability_47_testability__ || {default: $__angular2_47_src_47_core_47_testability_47_testability__}).Testability;
function main() {
  describe('Testability', (function() {
    var testability,
        executed;
    beforeEach((function() {
      testability = new Testability();
      executed = false;
    }));
    it('should start with a pending count of 0', (function() {
      expect(testability.getPendingCount()).toEqual(0);
    }));
    it('should fire whenstable callbacks if pending count is 0', (function() {
      testability.whenStable((function() {
        return executed = true;
      }));
      expect(executed).toBe(true);
    }));
    it('should not call whenstable callbacks when there are pending counts', (function() {
      testability.increaseCount(2);
      testability.whenStable((function() {
        return executed = true;
      }));
      expect(executed).toBe(false);
      testability.increaseCount(-1);
      expect(executed).toBe(false);
    }));
    it('should fire whenstable callbacks when pending drops to 0', (function() {
      testability.increaseCount(2);
      testability.whenStable((function() {
        return executed = true;
      }));
      expect(executed).toBe(false);
      testability.increaseCount(-2);
      expect(executed).toBe(true);
    }));
  }));
}
//# sourceMappingURL=testability_spec.js.map

//# sourceMappingURL=./testability_spec.map
 main();