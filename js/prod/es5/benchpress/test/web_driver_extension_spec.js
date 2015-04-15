System.register(["angular2/test_lib", "angular2/src/facade/collection", "angular2/src/facade/lang", "angular2/src/facade/async", "benchpress/common"], function($__export) {
  "use strict";
  var afterEach,
      AsyncTestCompleter,
      beforeEach,
      ddescribe,
      describe,
      expect,
      iit,
      inject,
      it,
      xit,
      StringMap,
      ListWrapper,
      isPresent,
      StringWrapper,
      PromiseWrapper,
      WebDriverExtension,
      bind,
      Injector,
      Options,
      MockExtension;
  function main() {
    function createExtension(ids, caps) {
      return Injector.resolveAndCreate([ListWrapper.map(ids, (function(id) {
        return bind(id).toValue(new MockExtension(id));
      })), bind(Options.CAPABILITIES).toValue(caps), WebDriverExtension.bindTo(ids)]).asyncGet(WebDriverExtension);
    }
    describe('WebDriverExtension.bindTo', (function() {
      it('should bind the extension that matches the capabilities', inject([AsyncTestCompleter], (function(async) {
        createExtension(['m1', 'm2', 'm3'], {'browser': 'm2'}).then((function(m) {
          expect(m.id).toEqual('m2');
          async.done();
        }));
      })));
      it('should throw if there is no match', inject([AsyncTestCompleter], (function(async) {
        PromiseWrapper.catchError(createExtension(['m1'], {'browser': 'm2'}), (function(err) {
          expect(isPresent(err)).toBe(true);
          async.done();
        }));
      })));
    }));
  }
  $__export("main", main);
  return {
    setters: [function($__m) {
      afterEach = $__m.afterEach;
      AsyncTestCompleter = $__m.AsyncTestCompleter;
      beforeEach = $__m.beforeEach;
      ddescribe = $__m.ddescribe;
      describe = $__m.describe;
      expect = $__m.expect;
      iit = $__m.iit;
      inject = $__m.inject;
      it = $__m.it;
      xit = $__m.xit;
    }, function($__m) {
      StringMap = $__m.StringMap;
      ListWrapper = $__m.ListWrapper;
    }, function($__m) {
      isPresent = $__m.isPresent;
      StringWrapper = $__m.StringWrapper;
    }, function($__m) {
      PromiseWrapper = $__m.PromiseWrapper;
    }, function($__m) {
      WebDriverExtension = $__m.WebDriverExtension;
      bind = $__m.bind;
      Injector = $__m.Injector;
      Options = $__m.Options;
    }],
    execute: function() {
      MockExtension = (function($__super) {
        var MockExtension = function MockExtension(id) {
          $traceurRuntime.superConstructor(MockExtension).call(this);
          this.id = id;
        };
        return ($traceurRuntime.createClass)(MockExtension, {supports: function(capabilities) {
            return StringWrapper.equals(capabilities['browser'], this.id);
          }}, {}, $__super);
      }(WebDriverExtension));
      Object.defineProperty(MockExtension.prototype.supports, "parameters", {get: function() {
          return [[StringMap]];
        }});
    }
  };
});
//# sourceMappingURL=web_driver_extension_spec.es6.map

//# sourceMappingURL=./web_driver_extension_spec.js.map