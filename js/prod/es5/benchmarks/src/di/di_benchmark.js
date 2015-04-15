System.register(["angular2/di", "angular2/src/reflection/reflection", "angular2/src/reflection/reflection_capabilities", "angular2/src/test_lib/benchmark_util", "angular2/src/dom/browser_adapter"], function($__export) {
  "use strict";
  var Injectable,
      Injector,
      Key,
      bind,
      reflector,
      ReflectionCapabilities,
      getIntParameter,
      bindAction,
      microBenchmark,
      BrowserDomAdapter,
      count,
      A,
      B,
      C,
      D,
      E,
      F;
  function setupReflector() {
    reflector.reflectionCapabilities = new ReflectionCapabilities();
  }
  function main() {
    BrowserDomAdapter.makeCurrent();
    var iterations = getIntParameter('iterations');
    setupReflector();
    var bindings = [A, B, C, D, E];
    var injector = Injector.resolveAndCreate(bindings);
    var D_KEY = Key.get(D);
    var E_KEY = Key.get(E);
    var childInjector = injector.resolveAndCreateChild([]).resolveAndCreateChild([]).resolveAndCreateChild([]).resolveAndCreateChild([]).resolveAndCreateChild([]);
    var variousBindings = [A, bind(B).toClass(C), [D, [E]], bind(F).toValue(6)];
    var variousBindingsResolved = Injector.resolve(variousBindings);
    function getByToken() {
      for (var i = 0; i < iterations; ++i) {
        injector.get(D);
        injector.get(E);
      }
    }
    function getByKey() {
      for (var i = 0; i < iterations; ++i) {
        injector.get(D_KEY);
        injector.get(E_KEY);
      }
    }
    function getChild() {
      for (var i = 0; i < iterations; ++i) {
        childInjector.get(D);
        childInjector.get(E);
      }
    }
    function instantiate() {
      for (var i = 0; i < iterations; ++i) {
        var child = injector.resolveAndCreateChild([E]);
        child.get(E);
      }
    }
    function createVariety() {
      for (var i = 0; i < iterations; ++i) {
        Injector.resolveAndCreate(variousBindings);
      }
    }
    function createVarietyResolved() {
      for (var i = 0; i < iterations; ++i) {
        Injector.fromResolvedBindings(variousBindingsResolved);
      }
    }
    bindAction('#getByToken', (function() {
      return microBenchmark('injectAvg', iterations, getByToken);
    }));
    bindAction('#getByKey', (function() {
      return microBenchmark('injectAvg', iterations, getByKey);
    }));
    bindAction('#getChild', (function() {
      return microBenchmark('injectAvg', iterations, getChild);
    }));
    bindAction('#instantiate', (function() {
      return microBenchmark('injectAvg', iterations, instantiate);
    }));
    bindAction('#createVariety', (function() {
      return microBenchmark('injectAvg', iterations, createVariety);
    }));
    bindAction('#createVarietyResolved', (function() {
      return microBenchmark('injectAvg', iterations, createVarietyResolved);
    }));
  }
  $__export("main", main);
  return {
    setters: [function($__m) {
      Injectable = $__m.Injectable;
      Injector = $__m.Injector;
      Key = $__m.Key;
      bind = $__m.bind;
    }, function($__m) {
      reflector = $__m.reflector;
    }, function($__m) {
      ReflectionCapabilities = $__m.ReflectionCapabilities;
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
        var B = function B(a) {
          count++;
        };
        return ($traceurRuntime.createClass)(B, {}, {});
      }());
      Object.defineProperty(B, "annotations", {get: function() {
          return [new Injectable()];
        }});
      Object.defineProperty(B, "parameters", {get: function() {
          return [[A]];
        }});
      C = (function() {
        var C = function C(b) {
          count++;
        };
        return ($traceurRuntime.createClass)(C, {}, {});
      }());
      Object.defineProperty(C, "annotations", {get: function() {
          return [new Injectable()];
        }});
      Object.defineProperty(C, "parameters", {get: function() {
          return [[B]];
        }});
      D = (function() {
        var D = function D(c, b) {
          count++;
        };
        return ($traceurRuntime.createClass)(D, {}, {});
      }());
      Object.defineProperty(D, "annotations", {get: function() {
          return [new Injectable()];
        }});
      Object.defineProperty(D, "parameters", {get: function() {
          return [[C], [B]];
        }});
      E = (function() {
        var E = function E(d, c) {
          count++;
        };
        return ($traceurRuntime.createClass)(E, {}, {});
      }());
      Object.defineProperty(E, "annotations", {get: function() {
          return [new Injectable()];
        }});
      Object.defineProperty(E, "parameters", {get: function() {
          return [[D], [C]];
        }});
      F = (function() {
        var F = function F(e, d) {
          count++;
        };
        return ($traceurRuntime.createClass)(F, {}, {});
      }());
      Object.defineProperty(F, "annotations", {get: function() {
          return [new Injectable()];
        }});
      Object.defineProperty(F, "parameters", {get: function() {
          return [[E], [D]];
        }});
    }
  };
});
//# sourceMappingURL=di_benchmark.es6.map

//# sourceMappingURL=./di_benchmark.js.map