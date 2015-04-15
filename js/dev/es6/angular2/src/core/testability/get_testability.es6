import {assert} from "rtts_assert/rtts_assert";
import {TestabilityRegistry,
  Testability} from 'angular2/src/core/testability/testability';
class PublicTestability {
  constructor(testability) {
    assert.argumentTypes(testability, Testability);
    this._testability = testability;
  }
  whenStable(callback) {
    assert.argumentTypes(callback, Function);
    this._testability.whenStable(callback);
  }
  findBindings(using, binding, exactMatch) {
    assert.argumentTypes(using, assert.type.any, binding, assert.type.string, exactMatch, assert.type.boolean);
    return this._testability.findBindings(using, binding, exactMatch);
  }
}
Object.defineProperty(PublicTestability, "parameters", {get: function() {
    return [[Testability]];
  }});
Object.defineProperty(PublicTestability.prototype.whenStable, "parameters", {get: function() {
    return [[Function]];
  }});
Object.defineProperty(PublicTestability.prototype.findBindings, "parameters", {get: function() {
    return [[], [assert.type.string], [assert.type.boolean]];
  }});
export class GetTestability {
  static addToWindow(registry) {
    assert.argumentTypes(registry, TestabilityRegistry);
    if (!window.angular2) {
      window.angular2 = {};
    }
    window.angular2.getTestability = function(elem) {
      var testability = registry.findTestabilityInTree(elem);
      if (testability == null) {
        throw new Error('Could not find testability for element.');
      }
      return assert.returnType((new PublicTestability(testability)), PublicTestability);
    };
    window.angular2.resumeBootstrap = function() {};
  }
}
Object.defineProperty(GetTestability.addToWindow, "parameters", {get: function() {
    return [[TestabilityRegistry]];
  }});
//# sourceMappingURL=get_testability.es6.map

//# sourceMappingURL=./get_testability.map