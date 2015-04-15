'use strict'; var parse5Adapter = require('angular2/src/dom/parse5_adapter'); parse5Adapter.Parse5DomAdapter.makeCurrent();
Object.defineProperties(module.exports, {
  main: {get: function() {
      return main;
    }},
  __esModule: {value: true}
});
var $__angular2_47_test_95_lib__,
    $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_facade_47_async__,
    $__benchpress_47_common__;
var $__0 = ($__angular2_47_test_95_lib__ = require("angular2/test_lib"), $__angular2_47_test_95_lib__ && $__angular2_47_test_95_lib__.__esModule && $__angular2_47_test_95_lib__ || {default: $__angular2_47_test_95_lib__}),
    afterEach = $__0.afterEach,
    AsyncTestCompleter = $__0.AsyncTestCompleter,
    beforeEach = $__0.beforeEach,
    ddescribe = $__0.ddescribe,
    describe = $__0.describe,
    expect = $__0.expect,
    iit = $__0.iit,
    inject = $__0.inject,
    it = $__0.it,
    xit = $__0.xit;
var $__1 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    StringMap = $__1.StringMap,
    ListWrapper = $__1.ListWrapper;
var $__2 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    isPresent = $__2.isPresent,
    StringWrapper = $__2.StringWrapper;
var PromiseWrapper = ($__angular2_47_src_47_facade_47_async__ = require("angular2/src/facade/async"), $__angular2_47_src_47_facade_47_async__ && $__angular2_47_src_47_facade_47_async__.__esModule && $__angular2_47_src_47_facade_47_async__ || {default: $__angular2_47_src_47_facade_47_async__}).PromiseWrapper;
var $__4 = ($__benchpress_47_common__ = require("benchpress/common"), $__benchpress_47_common__ && $__benchpress_47_common__.__esModule && $__benchpress_47_common__ || {default: $__benchpress_47_common__}),
    WebDriverExtension = $__4.WebDriverExtension,
    bind = $__4.bind,
    Injector = $__4.Injector,
    Options = $__4.Options;
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
var MockExtension = function MockExtension(id) {
  $traceurRuntime.superConstructor($MockExtension).call(this);
  this.id = id;
};
var $MockExtension = MockExtension;
($traceurRuntime.createClass)(MockExtension, {supports: function(capabilities) {
    return StringWrapper.equals(capabilities['browser'], this.id);
  }}, {}, WebDriverExtension);
Object.defineProperty(MockExtension.prototype.supports, "parameters", {get: function() {
    return [[StringMap]];
  }});
//# sourceMappingURL=web_driver_extension_spec.js.map

//# sourceMappingURL=./web_driver_extension_spec.map
 main();