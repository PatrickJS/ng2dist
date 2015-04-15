'use strict'; var parse5Adapter = require('angular2/src/dom/parse5_adapter'); parse5Adapter.Parse5DomAdapter.makeCurrent();
Object.defineProperties(module.exports, {
  main: {get: function() {
      return main;
    }},
  __esModule: {value: true}
});
var $__angular2_47_test_95_lib__,
    $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_src_47_core_47_compiler_47_query_95_list__;
var $__0 = ($__angular2_47_test_95_lib__ = require("angular2/test_lib"), $__angular2_47_test_95_lib__ && $__angular2_47_test_95_lib__.__esModule && $__angular2_47_test_95_lib__ || {default: $__angular2_47_test_95_lib__}),
    describe = $__0.describe,
    it = $__0.it,
    expect = $__0.expect,
    beforeEach = $__0.beforeEach,
    ddescribe = $__0.ddescribe,
    iit = $__0.iit,
    xit = $__0.xit,
    el = $__0.el;
var $__1 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    List = $__1.List,
    MapWrapper = $__1.MapWrapper,
    ListWrapper = $__1.ListWrapper,
    iterateListLike = $__1.iterateListLike;
var QueryList = ($__angular2_47_src_47_core_47_compiler_47_query_95_list__ = require("angular2/src/core/compiler/query_list"), $__angular2_47_src_47_core_47_compiler_47_query_95_list__ && $__angular2_47_src_47_core_47_compiler_47_query_95_list__.__esModule && $__angular2_47_src_47_core_47_compiler_47_query_95_list__ || {default: $__angular2_47_src_47_core_47_compiler_47_query_95_list__}).QueryList;
function main() {
  describe('QueryList', (function() {
    var queryList,
        log;
    beforeEach((function() {
      queryList = new QueryList();
      log = '';
    }));
    function logAppend(item) {
      log += (log.length == 0 ? '' : ', ') + item;
    }
    it('should support adding objects and iterating over them', (function() {
      queryList.add('one');
      queryList.add('two');
      iterateListLike(queryList, logAppend);
      expect(log).toEqual('one, two');
    }));
    it('should support resetting and iterating over the new objects', (function() {
      queryList.add('one');
      queryList.add('two');
      queryList.reset(['one again']);
      queryList.add('two again');
      iterateListLike(queryList, logAppend);
      expect(log).toEqual('one again, two again');
    }));
    describe('simple observable interface', (function() {
      it('should fire callbacks on change', (function() {
        var fires = 0;
        queryList.onChange((function() {
          fires += 1;
        }));
        queryList.fireCallbacks();
        expect(fires).toEqual(0);
        queryList.add('one');
        queryList.fireCallbacks();
        expect(fires).toEqual(1);
        queryList.fireCallbacks();
        expect(fires).toEqual(1);
      }));
      it('should support removing callbacks', (function() {
        var fires = 0;
        var callback = (function() {
          return fires += 1;
        });
        queryList.onChange(callback);
        queryList.add('one');
        queryList.fireCallbacks();
        expect(fires).toEqual(1);
        queryList.removeCallback(callback);
        queryList.add('two');
        queryList.fireCallbacks();
        expect(fires).toEqual(1);
      }));
    }));
  }));
}
//# sourceMappingURL=query_list_spec.js.map

//# sourceMappingURL=./query_list_spec.map
 main();