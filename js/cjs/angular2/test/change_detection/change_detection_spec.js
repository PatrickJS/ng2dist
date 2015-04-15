'use strict'; var parse5Adapter = require('angular2/src/dom/parse5_adapter'); parse5Adapter.Parse5DomAdapter.makeCurrent();
Object.defineProperties(module.exports, {
  main: {get: function() {
      return main;
    }},
  __esModule: {value: true}
});
var $__angular2_47_test_95_lib__,
    $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_src_47_change_95_detection_47_parser_47_parser__,
    $__angular2_47_src_47_change_95_detection_47_parser_47_lexer__,
    $__angular2_47_src_47_change_95_detection_47_parser_47_locals__,
    $__angular2_47_change_95_detection__,
    $__angular2_47_src_47_change_95_detection_47_proto_95_change_95_detector__;
var $__0 = ($__angular2_47_test_95_lib__ = require("angular2/test_lib"), $__angular2_47_test_95_lib__ && $__angular2_47_test_95_lib__.__esModule && $__angular2_47_test_95_lib__ || {default: $__angular2_47_test_95_lib__}),
    ddescribe = $__0.ddescribe,
    describe = $__0.describe,
    it = $__0.it,
    iit = $__0.iit,
    xit = $__0.xit,
    expect = $__0.expect,
    beforeEach = $__0.beforeEach,
    afterEach = $__0.afterEach,
    IS_DARTIUM = $__0.IS_DARTIUM;
var $__1 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    isPresent = $__1.isPresent,
    isBlank = $__1.isBlank,
    isJsObject = $__1.isJsObject,
    BaseException = $__1.BaseException,
    FunctionWrapper = $__1.FunctionWrapper;
var $__2 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    List = $__2.List,
    ListWrapper = $__2.ListWrapper,
    MapWrapper = $__2.MapWrapper,
    StringMapWrapper = $__2.StringMapWrapper;
var Parser = ($__angular2_47_src_47_change_95_detection_47_parser_47_parser__ = require("angular2/src/change_detection/parser/parser"), $__angular2_47_src_47_change_95_detection_47_parser_47_parser__ && $__angular2_47_src_47_change_95_detection_47_parser_47_parser__.__esModule && $__angular2_47_src_47_change_95_detection_47_parser_47_parser__ || {default: $__angular2_47_src_47_change_95_detection_47_parser_47_parser__}).Parser;
var Lexer = ($__angular2_47_src_47_change_95_detection_47_parser_47_lexer__ = require("angular2/src/change_detection/parser/lexer"), $__angular2_47_src_47_change_95_detection_47_parser_47_lexer__ && $__angular2_47_src_47_change_95_detection_47_parser_47_lexer__.__esModule && $__angular2_47_src_47_change_95_detection_47_parser_47_lexer__ || {default: $__angular2_47_src_47_change_95_detection_47_parser_47_lexer__}).Lexer;
var Locals = ($__angular2_47_src_47_change_95_detection_47_parser_47_locals__ = require("angular2/src/change_detection/parser/locals"), $__angular2_47_src_47_change_95_detection_47_parser_47_locals__ && $__angular2_47_src_47_change_95_detection_47_parser_47_locals__.__esModule && $__angular2_47_src_47_change_95_detection_47_parser_47_locals__ || {default: $__angular2_47_src_47_change_95_detection_47_parser_47_locals__}).Locals;
var $__6 = ($__angular2_47_change_95_detection__ = require("angular2/change_detection"), $__angular2_47_change_95_detection__ && $__angular2_47_change_95_detection__.__esModule && $__angular2_47_change_95_detection__ || {default: $__angular2_47_change_95_detection__}),
    ChangeDispatcher = $__6.ChangeDispatcher,
    DynamicChangeDetector = $__6.DynamicChangeDetector,
    ChangeDetectionError = $__6.ChangeDetectionError,
    BindingRecord = $__6.BindingRecord,
    DirectiveRecord = $__6.DirectiveRecord,
    PipeRegistry = $__6.PipeRegistry,
    Pipe = $__6.Pipe,
    NO_CHANGE = $__6.NO_CHANGE,
    CHECK_ALWAYS = $__6.CHECK_ALWAYS,
    CHECK_ONCE = $__6.CHECK_ONCE,
    CHECKED = $__6.CHECKED,
    DETACHED = $__6.DETACHED,
    ON_PUSH = $__6.ON_PUSH,
    DEFAULT = $__6.DEFAULT;
var $__7 = ($__angular2_47_src_47_change_95_detection_47_proto_95_change_95_detector__ = require("angular2/src/change_detection/proto_change_detector"), $__angular2_47_src_47_change_95_detection_47_proto_95_change_95_detector__ && $__angular2_47_src_47_change_95_detection_47_proto_95_change_95_detector__.__esModule && $__angular2_47_src_47_change_95_detection_47_proto_95_change_95_detector__ || {default: $__angular2_47_src_47_change_95_detection_47_proto_95_change_95_detector__}),
    JitProtoChangeDetector = $__7.JitProtoChangeDetector,
    DynamicProtoChangeDetector = $__7.DynamicProtoChangeDetector;
function main() {
  describe("change detection", (function() {
    StringMapWrapper.forEach({
      "dynamic": (function() {
        var registry = arguments[0] !== (void 0) ? arguments[0] : null;
        var strategy = arguments[1] !== (void 0) ? arguments[1] : null;
        return new DynamicProtoChangeDetector(registry, strategy);
      }),
      "JIT": (function() {
        var registry = arguments[0] !== (void 0) ? arguments[0] : null;
        var strategy = arguments[1] !== (void 0) ? arguments[1] : null;
        return new JitProtoChangeDetector(registry, strategy);
      })
    }, (function(createProtoChangeDetector, name) {
      if (name == "JIT" && IS_DARTIUM)
        return ;
      function ast(exp) {
        var location = arguments[1] !== (void 0) ? arguments[1] : 'location';
        var parser = new Parser(new Lexer());
        return parser.parseBinding(exp, location);
      }
      Object.defineProperty(ast, "parameters", {get: function() {
          return [[$traceurRuntime.type.string], [$traceurRuntime.type.string]];
        }});
      function dirs(directives) {
        return new FakeDirectives(directives);
      }
      Object.defineProperty(dirs, "parameters", {get: function() {
          return [[List]];
        }});
      function convertLocalsToVariableBindings(locals) {
        var variableBindings = [];
        var loc = locals;
        while (isPresent(loc)) {
          MapWrapper.forEach(loc.current, (function(v, k) {
            return ListWrapper.push(variableBindings, k);
          }));
          loc = loc.parent;
        }
        return variableBindings;
      }
      function createChangeDetector(propName, exp) {
        var context = arguments[2] !== (void 0) ? arguments[2] : null;
        var locals = arguments[3] !== (void 0) ? arguments[3] : null;
        var registry = arguments[4] !== (void 0) ? arguments[4] : null;
        var pcd = createProtoChangeDetector(registry);
        var dispatcher = new TestDispatcher();
        var variableBindings = convertLocalsToVariableBindings(locals);
        var records = [BindingRecord.createForElement(ast(exp), 0, propName)];
        var cd = pcd.instantiate(dispatcher, records, variableBindings, []);
        cd.hydrate(context, locals, null);
        return {
          "changeDetector": cd,
          "dispatcher": dispatcher
        };
      }
      Object.defineProperty(createChangeDetector, "parameters", {get: function() {
          return [[$traceurRuntime.type.string], [$traceurRuntime.type.string], [], [], []];
        }});
      function executeWatch(memo, exp) {
        var context = arguments[2] !== (void 0) ? arguments[2] : null;
        var locals = arguments[3] !== (void 0) ? arguments[3] : null;
        var res = createChangeDetector(memo, exp, context, locals);
        res["changeDetector"].detectChanges();
        return res["dispatcher"].log;
      }
      Object.defineProperty(executeWatch, "parameters", {get: function() {
          return [[$traceurRuntime.type.string], [$traceurRuntime.type.string], [], []];
        }});
      function instantiate(protoChangeDetector, dispatcher, bindings) {
        var directiveRecords = arguments[3] !== (void 0) ? arguments[3] : null;
        if (isBlank(directiveRecords))
          directiveRecords = [];
        return protoChangeDetector.instantiate(dispatcher, bindings, null, directiveRecords);
      }
      describe((name + " change detection"), (function() {
        var dispatcher;
        beforeEach((function() {
          dispatcher = new TestDispatcher();
        }));
        it('should do simple watching', (function() {
          var person = new Person("misko");
          var c = createChangeDetector('name', 'name', person);
          var cd = c["changeDetector"];
          var dispatcher = c["dispatcher"];
          cd.detectChanges();
          expect(dispatcher.log).toEqual(['name=misko']);
          dispatcher.clear();
          cd.detectChanges();
          expect(dispatcher.log).toEqual([]);
          dispatcher.clear();
          person.name = "Misko";
          cd.detectChanges();
          expect(dispatcher.log).toEqual(['name=Misko']);
        }));
        it('should report all changes on the first run including uninitialized values', (function() {
          expect(executeWatch('value', 'value', new Uninitialized())).toEqual(['value=null']);
        }));
        it('should report all changes on the first run including null values', (function() {
          var td = new TestData(null);
          expect(executeWatch('a', 'a', td)).toEqual(['a=null']);
        }));
        it("should support literals", (function() {
          expect(executeWatch('const', '10')).toEqual(['const=10']);
          expect(executeWatch('const', '"str"')).toEqual(['const=str']);
          expect(executeWatch('const', '"a\n\nb"')).toEqual(['const=a\n\nb']);
        }));
        it('simple chained property access', (function() {
          var address = new Address('Grenoble');
          var person = new Person('Victor', address);
          expect(executeWatch('address.city', 'address.city', person)).toEqual(['address.city=Grenoble']);
        }));
        it("should support method calls", (function() {
          var person = new Person('Victor');
          expect(executeWatch('m', 'sayHi("Jim")', person)).toEqual(['m=Hi, Jim']);
        }));
        it("should support function calls", (function() {
          var td = new TestData((function() {
            return (function(a) {
              return a;
            });
          }));
          expect(executeWatch('value', 'a()(99)', td)).toEqual(['value=99']);
        }));
        it("should support chained method calls", (function() {
          var person = new Person('Victor');
          var td = new TestData(person);
          expect(executeWatch('m', 'a.sayHi("Jim")', td)).toEqual(['m=Hi, Jim']);
        }));
        it("should support literal array", (function() {
          var c = createChangeDetector('array', '[1,2]');
          c["changeDetector"].detectChanges();
          expect(c["dispatcher"].loggedValues).toEqual([[1, 2]]);
          c = createChangeDetector('array', '[1,a]', new TestData(2));
          c["changeDetector"].detectChanges();
          expect(c["dispatcher"].loggedValues).toEqual([[1, 2]]);
        }));
        it("should support literal maps", (function() {
          var c = createChangeDetector('map', '{z:1}');
          c["changeDetector"].detectChanges();
          expect(c["dispatcher"].loggedValues[0]['z']).toEqual(1);
          c = createChangeDetector('map', '{z:a}', new TestData(1));
          c["changeDetector"].detectChanges();
          expect(c["dispatcher"].loggedValues[0]['z']).toEqual(1);
        }));
        it("should support binary operations", (function() {
          expect(executeWatch('exp', '10 + 2')).toEqual(['exp=12']);
          expect(executeWatch('exp', '10 - 2')).toEqual(['exp=8']);
          expect(executeWatch('exp', '10 * 2')).toEqual(['exp=20']);
          expect(executeWatch('exp', '10 / 2')).toEqual([("exp=" + 5.0)]);
          expect(executeWatch('exp', '11 % 2')).toEqual(['exp=1']);
          expect(executeWatch('exp', '1 == 1')).toEqual(['exp=true']);
          expect(executeWatch('exp', '1 != 1')).toEqual(['exp=false']);
          expect(executeWatch('exp', '1 < 2')).toEqual(['exp=true']);
          expect(executeWatch('exp', '2 < 1')).toEqual(['exp=false']);
          expect(executeWatch('exp', '2 > 1')).toEqual(['exp=true']);
          expect(executeWatch('exp', '2 < 1')).toEqual(['exp=false']);
          expect(executeWatch('exp', '1 <= 2')).toEqual(['exp=true']);
          expect(executeWatch('exp', '2 <= 2')).toEqual(['exp=true']);
          expect(executeWatch('exp', '2 <= 1')).toEqual(['exp=false']);
          expect(executeWatch('exp', '2 >= 1')).toEqual(['exp=true']);
          expect(executeWatch('exp', '2 >= 2')).toEqual(['exp=true']);
          expect(executeWatch('exp', '1 >= 2')).toEqual(['exp=false']);
          expect(executeWatch('exp', 'true && true')).toEqual(['exp=true']);
          expect(executeWatch('exp', 'true && false')).toEqual(['exp=false']);
          expect(executeWatch('exp', 'true || false')).toEqual(['exp=true']);
          expect(executeWatch('exp', 'false || false')).toEqual(['exp=false']);
        }));
        it("should support negate", (function() {
          expect(executeWatch('exp', '!true')).toEqual(['exp=false']);
          expect(executeWatch('exp', '!!true')).toEqual(['exp=true']);
        }));
        it("should support conditionals", (function() {
          expect(executeWatch('m', '1 < 2 ? 1 : 2')).toEqual(['m=1']);
          expect(executeWatch('m', '1 > 2 ? 1 : 2')).toEqual(['m=2']);
        }));
        describe("keyed access", (function() {
          it("should support accessing a list item", (function() {
            expect(executeWatch('array[0]', '["foo", "bar"][0]')).toEqual(['array[0]=foo']);
          }));
          it("should support accessing a map item", (function() {
            expect(executeWatch('map[foo]', '{"foo": "bar"}["foo"]')).toEqual(['map[foo]=bar']);
          }));
        }));
        it("should support interpolation", (function() {
          var parser = new Parser(new Lexer());
          var pcd = createProtoChangeDetector();
          var ast = parser.parseInterpolation("B{{a}}A", "location");
          var cd = instantiate(pcd, dispatcher, [BindingRecord.createForElement(ast, 0, "memo")]);
          cd.hydrate(new TestData("value"), null, null);
          cd.detectChanges();
          expect(dispatcher.log).toEqual(["memo=BvalueA"]);
        }));
        describe("change notification", (function() {
          describe("simple checks", (function() {
            it("should pass a change record to the dispatcher", (function() {
              var person = new Person('bob');
              var c = createChangeDetector('name', 'name', person);
              var cd = c["changeDetector"];
              var dispatcher = c["dispatcher"];
              cd.detectChanges();
              expect(dispatcher.loggedValues).toEqual(['bob']);
            }));
          }));
          describe("pipes", (function() {
            it("should pass a change record to the dispatcher", (function() {
              var registry = new FakePipeRegistry('pipe', (function() {
                return new CountingPipe();
              }));
              var person = new Person('bob');
              var c = createChangeDetector('name', 'name | pipe', person, null, registry);
              var cd = c["changeDetector"];
              var dispatcher = c["dispatcher"];
              cd.detectChanges();
              expect(dispatcher.loggedValues).toEqual(['bob state:0']);
            }));
          }));
          describe("updating directives", (function() {
            var dirRecord1 = new DirectiveRecord(0, 0, true, true);
            var dirRecord2 = new DirectiveRecord(0, 1, true, true);
            var dirRecordNoCallbacks = new DirectiveRecord(0, 0, false, false);
            function updateA(exp, dirRecord) {
              return BindingRecord.createForDirective(ast(exp), "a", (function(o, v) {
                return o.a = v;
              }), dirRecord);
            }
            Object.defineProperty(updateA, "parameters", {get: function() {
                return [[$traceurRuntime.type.string], []];
              }});
            function updateB(exp, dirRecord) {
              return BindingRecord.createForDirective(ast(exp), "b", (function(o, v) {
                return o.b = v;
              }), dirRecord);
            }
            Object.defineProperty(updateB, "parameters", {get: function() {
                return [[$traceurRuntime.type.string], []];
              }});
            var directive1;
            var directive2;
            beforeEach((function() {
              directive1 = new TestDirective();
              directive2 = new TestDirective();
            }));
            it("should happen directly, without invoking the dispatcher", (function() {
              var pcd = createProtoChangeDetector();
              var cd = instantiate(pcd, dispatcher, [updateA("42", dirRecord1)], [dirRecord1]);
              cd.hydrate(null, null, dirs([directive1]));
              cd.detectChanges();
              expect(dispatcher.loggedValues).toEqual([]);
              expect(directive1.a).toEqual(42);
            }));
            describe("onChange", (function() {
              it("should notify the directive when a group of records changes", (function() {
                var pcd = createProtoChangeDetector();
                var cd = instantiate(pcd, dispatcher, [updateA("1", dirRecord1), updateB("2", dirRecord1), updateA("3", dirRecord2)], [dirRecord1, dirRecord2]);
                cd.hydrate(null, null, dirs([directive1, directive2]));
                cd.detectChanges();
                expect(directive1.changes).toEqual({
                  'a': 1,
                  'b': 2
                });
                expect(directive2.changes).toEqual({'a': 3});
              }));
              it("should not call onChange when callOnChange is false", (function() {
                var pcd = createProtoChangeDetector();
                var cd = instantiate(pcd, dispatcher, [updateA("1", dirRecordNoCallbacks)], [dirRecordNoCallbacks]);
                cd.hydrate(null, null, dirs([directive1]));
                cd.detectChanges();
                expect(directive1.changes).toEqual(null);
              }));
            }));
            describe("onAllChangesDone", (function() {
              it("should be called after processing all the children", (function() {
                var pcd = createProtoChangeDetector();
                var cd = instantiate(pcd, dispatcher, [], [dirRecord1, dirRecord2]);
                cd.hydrate(null, null, dirs([directive1, directive2]));
                cd.detectChanges();
                expect(directive1.onChangesDoneCalled).toBe(true);
                expect(directive2.onChangesDoneCalled).toBe(true);
              }));
              it("should not be called when onAllChangesDone is false", (function() {
                var pcd = createProtoChangeDetector();
                var cd = instantiate(pcd, dispatcher, [updateA("1", dirRecordNoCallbacks)], [dirRecordNoCallbacks]);
                cd.hydrate(null, null, dirs([directive1]));
                cd.detectChanges();
                expect(directive1.onChangesDoneCalled).toEqual(false);
              }));
              it("should be called in reverse order so the child is always notified before the parent", (function() {
                var pcd = createProtoChangeDetector();
                var cd = instantiate(pcd, dispatcher, [], [dirRecord1, dirRecord2]);
                var onChangesDoneCalls = [];
                var td1;
                td1 = new TestDirective((function() {
                  return ListWrapper.push(onChangesDoneCalls, td1);
                }));
                var td2;
                td2 = new TestDirective((function() {
                  return ListWrapper.push(onChangesDoneCalls, td2);
                }));
                cd.hydrate(null, null, dirs([td1, td2]));
                cd.detectChanges();
                expect(onChangesDoneCalls).toEqual([td2, td1]);
              }));
              it("should be called before processing shadow dom children", (function() {
                var pcd = createProtoChangeDetector();
                var shadowDomChildPCD = createProtoChangeDetector();
                var parent = pcd.instantiate(dispatcher, [], null, [dirRecord1]);
                var child = shadowDomChildPCD.instantiate(dispatcher, [updateA("1", dirRecord1)], null, [dirRecord1]);
                parent.addShadowDomChild(child);
                var directiveInShadowDom = new TestDirective();
                var parentDirective = new TestDirective((function() {
                  expect(directiveInShadowDom.a).toBe(null);
                }));
                parent.hydrate(null, null, dirs([parentDirective]));
                child.hydrate(null, null, dirs([directiveInShadowDom]));
                parent.detectChanges();
              }));
            }));
          }));
        }));
        describe("enforce no new changes", (function() {
          it("should throw when a record gets changed after it has been checked", (function() {
            var pcd = createProtoChangeDetector();
            var dispatcher = new TestDispatcher();
            var cd = instantiate(pcd, dispatcher, [BindingRecord.createForElement(ast("a"), 0, "a")]);
            cd.hydrate(new TestData('value'), null, null);
            expect((function() {
              cd.checkNoChanges();
            })).toThrowError(new RegExp("Expression 'a in location' has changed after it was checked"));
          }));
        }));
        describe("error handling", (function() {
          xit("should wrap exceptions into ChangeDetectionError", (function() {
            var pcd = createProtoChangeDetector();
            var cd = pcd.instantiate(new TestDispatcher(), [BindingRecord.createForElement(ast("invalidProp"), 0, "a")], null, []);
            cd.hydrate(null, null);
            try {
              cd.detectChanges();
              throw new BaseException("fail");
            } catch (e) {
              expect(e).toBeAnInstanceOf(ChangeDetectionError);
              expect(e.location).toEqual("invalidProp in someComponent");
            }
          }));
        }));
        describe("Locals", (function() {
          it('should read a value from locals', (function() {
            var locals = new Locals(null, MapWrapper.createFromPairs([["key", "value"]]));
            expect(executeWatch('key', 'key', null, locals)).toEqual(['key=value']);
          }));
          it('should invoke a function from local', (function() {
            var locals = new Locals(null, MapWrapper.createFromPairs([["key", (function() {
              return "value";
            })]]));
            expect(executeWatch('key', 'key()', null, locals)).toEqual(['key=value']);
          }));
          it('should handle nested locals', (function() {
            var nested = new Locals(null, MapWrapper.createFromPairs([["key", "value"]]));
            var locals = new Locals(nested, MapWrapper.create());
            expect(executeWatch('key', 'key', null, locals)).toEqual(['key=value']);
          }));
          it("should fall back to a regular field read when the locals map" + "does not have the requested field", (function() {
            var locals = new Locals(null, MapWrapper.createFromPairs([["key", "value"]]));
            expect(executeWatch('name', 'name', new Person("Jim"), locals)).toEqual(['name=Jim']);
          }));
        }));
        describe("handle children", (function() {
          var parent,
              child;
          beforeEach((function() {
            var protoParent = createProtoChangeDetector();
            parent = instantiate(protoParent, null, []);
            var protoChild = createProtoChangeDetector();
            child = instantiate(protoChild, null, []);
          }));
          it("should add light dom children", (function() {
            parent.addChild(child);
            expect(parent.lightDomChildren.length).toEqual(1);
            expect(parent.lightDomChildren[0]).toBe(child);
          }));
          it("should add shadow dom children", (function() {
            parent.addShadowDomChild(child);
            expect(parent.shadowDomChildren.length).toEqual(1);
            expect(parent.shadowDomChildren[0]).toBe(child);
          }));
          it("should remove light dom children", (function() {
            parent.addChild(child);
            parent.removeChild(child);
            expect(parent.lightDomChildren).toEqual([]);
          }));
        }));
      }));
      describe("mode", (function() {
        it("should set the mode to CHECK_ALWAYS when the default change detection is used", (function() {
          var proto = createProtoChangeDetector(null, DEFAULT);
          var cd = proto.instantiate(null, [], [], []);
          expect(cd.mode).toEqual(null);
          cd.hydrate(null, null, null);
          expect(cd.mode).toEqual(CHECK_ALWAYS);
        }));
        it("should set the mode to CHECK_ONCE when the push change detection is used", (function() {
          var proto = createProtoChangeDetector(null, ON_PUSH);
          var cd = proto.instantiate(null, [], [], []);
          cd.hydrate(null, null, null);
          expect(cd.mode).toEqual(CHECK_ONCE);
        }));
        it("should not check a detached change detector", (function() {
          var c = createChangeDetector('name', 'a', new TestData("value"));
          var cd = c["changeDetector"];
          var dispatcher = c["dispatcher"];
          cd.mode = DETACHED;
          cd.detectChanges();
          expect(dispatcher.log).toEqual([]);
        }));
        it("should not check a checked change detector", (function() {
          var c = createChangeDetector('name', 'a', new TestData("value"));
          var cd = c["changeDetector"];
          var dispatcher = c["dispatcher"];
          cd.mode = CHECKED;
          cd.detectChanges();
          expect(dispatcher.log).toEqual([]);
        }));
        it("should change CHECK_ONCE to CHECKED", (function() {
          var cd = instantiate(createProtoChangeDetector(), null, []);
          cd.mode = CHECK_ONCE;
          cd.detectChanges();
          expect(cd.mode).toEqual(CHECKED);
        }));
        it("should not change the CHECK_ALWAYS", (function() {
          var cd = instantiate(createProtoChangeDetector(), null, []);
          cd.mode = CHECK_ALWAYS;
          cd.detectChanges();
          expect(cd.mode).toEqual(CHECK_ALWAYS);
        }));
      }));
      describe("markPathToRootAsCheckOnce", (function() {
        function changeDetector(mode, parent) {
          var cd = instantiate(createProtoChangeDetector(), null, []);
          cd.mode = mode;
          if (isPresent(parent))
            parent.addChild(cd);
          return cd;
        }
        it("should mark all checked detectors as CHECK_ONCE " + "until reaching a detached one", (function() {
          var root = changeDetector(CHECK_ALWAYS, null);
          var disabled = changeDetector(DETACHED, root);
          var parent = changeDetector(CHECKED, disabled);
          var checkAlwaysChild = changeDetector(CHECK_ALWAYS, parent);
          var checkOnceChild = changeDetector(CHECK_ONCE, checkAlwaysChild);
          var checkedChild = changeDetector(CHECKED, checkOnceChild);
          checkedChild.markPathToRootAsCheckOnce();
          expect(root.mode).toEqual(CHECK_ALWAYS);
          expect(disabled.mode).toEqual(DETACHED);
          expect(parent.mode).toEqual(CHECK_ONCE);
          expect(checkAlwaysChild.mode).toEqual(CHECK_ALWAYS);
          expect(checkOnceChild.mode).toEqual(CHECK_ONCE);
          expect(checkedChild.mode).toEqual(CHECK_ONCE);
        }));
      }));
      describe("hydration", (function() {
        it("should be able to rehydrate a change detector", (function() {
          var c = createChangeDetector("memo", "name");
          var cd = c["changeDetector"];
          cd.hydrate("some context", null, null);
          expect(cd.hydrated()).toBe(true);
          cd.dehydrate();
          expect(cd.hydrated()).toBe(false);
          cd.hydrate("other context", null, null);
          expect(cd.hydrated()).toBe(true);
        }));
        it("should destroy all active pipes during dehyration", (function() {
          var pipe = new OncePipe();
          var registry = new FakePipeRegistry('pipe', (function() {
            return pipe;
          }));
          var c = createChangeDetector("memo", "name | pipe", new Person('bob'), null, registry);
          var cd = c["changeDetector"];
          cd.detectChanges();
          cd.dehydrate();
          expect(pipe.destroyCalled).toBe(true);
        }));
      }));
      describe("pipes", (function() {
        it("should support pipes", (function() {
          var registry = new FakePipeRegistry('pipe', (function() {
            return new CountingPipe();
          }));
          var ctx = new Person("Megatron");
          var c = createChangeDetector("memo", "name | pipe", ctx, null, registry);
          var cd = c["changeDetector"];
          var dispatcher = c["dispatcher"];
          cd.detectChanges();
          expect(dispatcher.log).toEqual(['memo=Megatron state:0']);
          dispatcher.clear();
          cd.detectChanges();
          expect(dispatcher.log).toEqual(['memo=Megatron state:1']);
        }));
        it("should lookup pipes in the registry when the context is not supported", (function() {
          var registry = new FakePipeRegistry('pipe', (function() {
            return new OncePipe();
          }));
          var ctx = new Person("Megatron");
          var c = createChangeDetector("memo", "name | pipe", ctx, null, registry);
          var cd = c["changeDetector"];
          cd.detectChanges();
          expect(registry.numberOfLookups).toEqual(1);
          ctx.name = "Optimus Prime";
          cd.detectChanges();
          expect(registry.numberOfLookups).toEqual(2);
        }));
        it("should invoke onDestroy on a pipe before switching to another one", (function() {
          var pipe = new OncePipe();
          var registry = new FakePipeRegistry('pipe', (function() {
            return pipe;
          }));
          var ctx = new Person("Megatron");
          var c = createChangeDetector("memo", "name | pipe", ctx, null, registry);
          var cd = c["changeDetector"];
          cd.detectChanges();
          ctx.name = "Optimus Prime";
          cd.detectChanges();
          expect(pipe.destroyCalled).toEqual(true);
        }));
        it("should inject the binding propagation configuration " + "of the encompassing component into a pipe", (function() {
          var registry = new FakePipeRegistry('pipe', (function() {
            return new IdentityPipe();
          }));
          var c = createChangeDetector("memo", "name | pipe", new Person('bob'), null, registry);
          var cd = c["changeDetector"];
          cd.detectChanges();
          expect(registry.bpc).toBe(cd.bindingPropagationConfig);
        }));
      }));
      it("should do nothing when returns NO_CHANGE", (function() {
        var registry = new FakePipeRegistry('pipe', (function() {
          return new IdentityPipe();
        }));
        var ctx = new Person("Megatron");
        var c = createChangeDetector("memo", "name | pipe", ctx, null, registry);
        var cd = c["changeDetector"];
        var dispatcher = c["dispatcher"];
        cd.detectChanges();
        cd.detectChanges();
        expect(dispatcher.log).toEqual(['memo=Megatron']);
        ctx.name = "Optimus Prime";
        dispatcher.clear();
        cd.detectChanges();
        expect(dispatcher.log).toEqual(['memo=Optimus Prime']);
      }));
    }));
  }));
}
var CountingPipe = function CountingPipe() {
  $traceurRuntime.superConstructor($CountingPipe).call(this);
  this.state = 0;
};
var $CountingPipe = CountingPipe;
($traceurRuntime.createClass)(CountingPipe, {
  supports: function(newValue) {
    return true;
  },
  transform: function(value) {
    return (value + " state:" + this.state++);
  }
}, {}, Pipe);
var OncePipe = function OncePipe() {
  $traceurRuntime.superConstructor($OncePipe).call(this);
  this.called = false;
  this.destroyCalled = false;
};
var $OncePipe = OncePipe;
($traceurRuntime.createClass)(OncePipe, {
  supports: function(newValue) {
    return !this.called;
  },
  onDestroy: function() {
    this.destroyCalled = true;
  },
  transform: function(value) {
    this.called = true;
    return value;
  }
}, {}, Pipe);
var IdentityPipe = function IdentityPipe() {
  $traceurRuntime.superConstructor($IdentityPipe).apply(this, arguments);
  ;
};
var $IdentityPipe = IdentityPipe;
($traceurRuntime.createClass)(IdentityPipe, {
  supports: function(newValue) {
    return true;
  },
  transform: function(value) {
    if (this.state === value) {
      return NO_CHANGE;
    } else {
      this.state = value;
      return value;
    }
  }
}, {}, Pipe);
var FakePipeRegistry = function FakePipeRegistry(pipeType, factory) {
  $traceurRuntime.superConstructor($FakePipeRegistry).call(this, {});
  this.pipeType = pipeType;
  this.factory = factory;
  this.numberOfLookups = 0;
};
var $FakePipeRegistry = FakePipeRegistry;
($traceurRuntime.createClass)(FakePipeRegistry, {get: function(type, obj, bpc) {
    if (type != this.pipeType)
      return null;
    this.numberOfLookups++;
    this.bpc = bpc;
    return this.factory();
  }}, {}, PipeRegistry);
Object.defineProperty(FakePipeRegistry.prototype.get, "parameters", {get: function() {
    return [[$traceurRuntime.type.string], [], []];
  }});
var TestDirective = function TestDirective() {
  var onChangesDoneSpy = arguments[0] !== (void 0) ? arguments[0] : null;
  this.onChangesDoneCalled = false;
  this.onChangesDoneSpy = onChangesDoneSpy;
  this.a = null;
  this.b = null;
  this.changes = null;
};
($traceurRuntime.createClass)(TestDirective, {
  onChange: function(changes) {
    var r = {};
    StringMapWrapper.forEach(changes, (function(c, key) {
      return r[key] = c.currentValue;
    }));
    this.changes = r;
  },
  onAllChangesDone: function() {
    this.onChangesDoneCalled = true;
    if (isPresent(this.onChangesDoneSpy)) {
      this.onChangesDoneSpy();
    }
  }
}, {});
var Person = function Person(name) {
  var address = arguments[1] !== (void 0) ? arguments[1] : null;
  this.name = name;
  this.address = address;
};
($traceurRuntime.createClass)(Person, {
  sayHi: function(m) {
    return ("Hi, " + m);
  },
  toString: function() {
    var address = this.address == null ? '' : ' address=' + this.address.toString();
    return 'name=' + this.name + address;
  }
}, {});
Object.defineProperty(Person, "parameters", {get: function() {
    return [[$traceurRuntime.type.string], [Address]];
  }});
var Address = function Address(city) {
  this.city = city;
};
($traceurRuntime.createClass)(Address, {toString: function() {
    return this.city;
  }}, {});
Object.defineProperty(Address, "parameters", {get: function() {
    return [[$traceurRuntime.type.string]];
  }});
var Uninitialized = function Uninitialized() {
  ;
};
($traceurRuntime.createClass)(Uninitialized, {}, {});
var TestData = function TestData(a) {
  this.a = a;
};
($traceurRuntime.createClass)(TestData, {}, {});
var FakeDirectives = function FakeDirectives(directives) {
  this.directives = directives;
};
($traceurRuntime.createClass)(FakeDirectives, {directive: function(directiveRecord) {
    return this.directives[directiveRecord.directiveIndex];
  }}, {});
Object.defineProperty(FakeDirectives, "parameters", {get: function() {
    return [[List]];
  }});
Object.defineProperty(FakeDirectives.prototype.directive, "parameters", {get: function() {
    return [[DirectiveRecord]];
  }});
var TestDispatcher = function TestDispatcher() {
  $traceurRuntime.superConstructor($TestDispatcher).call(this);
  this.clear();
};
var $TestDispatcher = TestDispatcher;
($traceurRuntime.createClass)(TestDispatcher, {
  clear: function() {
    this.log = ListWrapper.create();
    this.loggedValues = ListWrapper.create();
  },
  notifyOnBinding: function(binding, value) {
    ListWrapper.push(this.log, (binding.propertyName + "=" + this._asString(value)));
    ListWrapper.push(this.loggedValues, value);
  },
  _asString: function(value) {
    return (isBlank(value) ? 'null' : value.toString());
  }
}, {}, ChangeDispatcher);
//# sourceMappingURL=change_detection_spec.js.map

//# sourceMappingURL=./change_detection_spec.map
 main();