'use strict'; var parse5Adapter = require('angular2/src/dom/parse5_adapter'); parse5Adapter.Parse5DomAdapter.makeCurrent();
Object.defineProperties(module.exports, {
  main: {get: function() {
      return main;
    }},
  __esModule: {value: true}
});
var $__angular2_47_test_95_lib__,
    $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_facade_47_async__,
    $__benchpress_47_common__,
    $__benchpress_47_src_47_reporter_47_json_95_file_95_reporter__;
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
var $__1 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    DateWrapper = $__1.DateWrapper,
    Json = $__1.Json,
    RegExpWrapper = $__1.RegExpWrapper,
    isPresent = $__1.isPresent;
var PromiseWrapper = ($__angular2_47_src_47_facade_47_async__ = require("angular2/src/facade/async"), $__angular2_47_src_47_facade_47_async__ && $__angular2_47_src_47_facade_47_async__.__esModule && $__angular2_47_src_47_facade_47_async__ || {default: $__angular2_47_src_47_facade_47_async__}).PromiseWrapper;
var $__3 = ($__benchpress_47_common__ = require("benchpress/common"), $__benchpress_47_common__ && $__benchpress_47_common__.__esModule && $__benchpress_47_common__ || {default: $__benchpress_47_common__}),
    bind = $__3.bind,
    Injector = $__3.Injector,
    SampleDescription = $__3.SampleDescription,
    MeasureValues = $__3.MeasureValues,
    Options = $__3.Options;
var JsonFileReporter = ($__benchpress_47_src_47_reporter_47_json_95_file_95_reporter__ = require("benchpress/src/reporter/json_file_reporter"), $__benchpress_47_src_47_reporter_47_json_95_file_95_reporter__ && $__benchpress_47_src_47_reporter_47_json_95_file_95_reporter__.__esModule && $__benchpress_47_src_47_reporter_47_json_95_file_95_reporter__ || {default: $__benchpress_47_src_47_reporter_47_json_95_file_95_reporter__}).JsonFileReporter;
function main() {
  describe('file reporter', (function() {
    var loggedFile;
    function createReporter($__5) {
      var $__6 = $__5,
          sampleId = $__6.sampleId,
          descriptions = $__6.descriptions,
          metrics = $__6.metrics,
          path = $__6.path;
      var bindings = [JsonFileReporter.BINDINGS, bind(SampleDescription).toValue(new SampleDescription(sampleId, descriptions, metrics)), bind(JsonFileReporter.PATH).toValue(path), bind(Options.NOW).toValue((function() {
        return DateWrapper.fromMillis(1234);
      })), bind(Options.WRITE_FILE).toValue((function(filename, content) {
        loggedFile = {
          'filename': filename,
          'content': content
        };
        return PromiseWrapper.resolve(null);
      }))];
      return Injector.resolveAndCreate(bindings).get(JsonFileReporter);
    }
    it('should write all data into a file', inject([AsyncTestCompleter], (function(async) {
      createReporter({
        sampleId: 'someId',
        descriptions: [{'a': 2}],
        path: 'somePath',
        metrics: {'script': 'script time'}
      }).reportSample([mv(0, 0, {
        'a': 3,
        'b': 6
      })], [mv(0, 0, {
        'a': 3,
        'b': 6
      }), mv(1, 1, {
        'a': 5,
        'b': 9
      })]);
      var regExp = RegExpWrapper.create('somePath/someId_\\d+\\.json');
      expect(isPresent(RegExpWrapper.firstMatch(regExp, loggedFile['filename']))).toBe(true);
      var parsedContent = Json.parse(loggedFile['content']);
      expect(parsedContent).toEqual({
        "description": {
          "id": "someId",
          "description": {"a": 2},
          "metrics": {"script": "script time"}
        },
        "completeSample": [{
          "timeStamp": "1970-01-01T00:00:00.000Z",
          "runIndex": 0,
          "values": {
            "a": 3,
            "b": 6
          }
        }],
        "validSample": [{
          "timeStamp": "1970-01-01T00:00:00.000Z",
          "runIndex": 0,
          "values": {
            "a": 3,
            "b": 6
          }
        }, {
          "timeStamp": "1970-01-01T00:00:00.001Z",
          "runIndex": 1,
          "values": {
            "a": 5,
            "b": 9
          }
        }]
      });
      async.done();
    })));
  }));
}
function mv(runIndex, time, values) {
  return new MeasureValues(runIndex, DateWrapper.fromMillis(time), values);
}
//# sourceMappingURL=json_file_reporter_spec.js.map

//# sourceMappingURL=./json_file_reporter_spec.map
 main();