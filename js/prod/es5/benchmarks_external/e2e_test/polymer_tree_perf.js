System.register([], function($__export) {
  "use strict";
  var perfUtil;
  return {
    setters: [],
    execute: function() {
      perfUtil = require('angular2/src/test_lib/perf_util');
      describe('polymer tree benchmark', function() {
        var URL = 'benchmarks_external/src/tree/polymer/index.html';
        afterEach(perfUtil.verifyNoBrowserErrors);
        it('should log the stats', function(done) {
          perfUtil.runClickBenchmark({
            url: URL,
            buttons: ['#destroyDom', '#createDom'],
            id: 'polymer.tree',
            params: [{
              name: 'depth',
              value: 9,
              scale: 'log2'
            }]
          }).then(done, done.fail);
        });
      });
    }
  };
});
//# sourceMappingURL=polymer_tree_perf.es6.map

//# sourceMappingURL=./polymer_tree_perf.js.map