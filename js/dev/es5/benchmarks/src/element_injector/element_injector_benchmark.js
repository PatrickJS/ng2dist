System.register(["rtts_assert/rtts_assert", "angular2/src/reflection/reflection", "angular2/src/reflection/reflection_capabilities", "angular2/di", "angular2/src/core/compiler/element_injector", "angular2/src/test_lib/benchmark_util", "angular2/src/dom/browser_adapter"], function($__export) {
  "use strict";
  var assert,
      reflector,
      ReflectionCapabilities,
      Injectable,
      Injector,
      ProtoElementInjector,
      getIntParameter,
      bindAction,
      microBenchmark,
      BrowserDomAdapter,
      count,
      A,
      B,
      C;
  function main() {
    BrowserDomAdapter.makeCurrent();
    var iterations = getIntParameter('iterations');
    reflector.reflectionCapabilities = new ReflectionCapabilities();
    var appInjector = Injector.resolveAndCreate([]);
    var bindings = [A, B, C];
    var proto = new ProtoElementInjector(null, 0, bindings);
    var elementInjector = proto.instantiate(null);
    function instantiate() {
      for (var i = 0; i < iterations; ++i) {
        var ei = proto.instantiate(null);
        ei.instantiateDirectives(appInjector, null, null, null);
      }
    }
    function instantiateDirectives() {
      for (var i = 0; i < iterations; ++i) {
        elementInjector.clearDirectives();
        elementInjector.instantiateDirectives(appInjector, null, null, null);
      }
    }
    bindAction('#instantiate', (function() {
      return microBenchmark('instantiateAvg', iterations, instantiate);
    }));
    bindAction('#instantiateDirectives', (function() {
      return microBenchmark('instantiateAvg', iterations, instantiateDirectives);
    }));
  }
  $__export("main", main);
  return {
    setters: [function($__m) {
      assert = $__m.assert;
    }, function($__m) {
      reflector = $__m.reflector;
    }, function($__m) {
      ReflectionCapabilities = $__m.ReflectionCapabilities;
    }, function($__m) {
      Injectable = $__m.Injectable;
      Injector = $__m.Injector;
    }, function($__m) {
      ProtoElementInjector = $__m.ProtoElementInjector;
    }, function($__m) {
      getIntParameter = $__m.getIntParameter;
      bindAction = $__m.bindAction;
      microBenchmark = $__m.microBenchmark;
    }, function($__m) {
      BrowserDomAdapter = $__m.BrowserDomAdapter;
    }],
    execute: function() {
      count = 0;
      A = (function() {
        var A = function A() {
          count++;
        };
        return ($traceurRuntime.createClass)(A, {}, {});
      }());
      Object.defineProperty(A, "annotations", {get: function() {
          return [new Injectable()];
        }});
      B = (function() {
        var B = function B() {
          count++;
        };
        return ($traceurRuntime.createClass)(B, {}, {});
      }());
      Object.defineProperty(B, "annotations", {get: function() {
          return [new Injectable()];
        }});
      C = (function() {
        var C = function C(a, b) {
          assert.argumentTypes(a, A, b, B);
          count++;
        };
        return ($traceurRuntime.createClass)(C, {}, {});
      }());
      Object.defineProperty(C, "annotations", {get: function() {
          return [new Injectable()];
        }});
      Object.defineProperty(C, "parameters", {get: function() {
          return [[A], [B]];
        }});
    }
  };
});
//# sourceMappingURL=element_injector_benchmark.es6.map

//# sourceMappingURL=./element_injector_benchmark.js.map