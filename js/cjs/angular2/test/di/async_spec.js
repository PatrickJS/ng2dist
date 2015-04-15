'use strict'; var parse5Adapter = require('angular2/src/dom/parse5_adapter'); parse5Adapter.Parse5DomAdapter.makeCurrent();
Object.defineProperties(module.exports, {
  main: {get: function() {
      return main;
    }},
  __esModule: {value: true}
});
var $__angular2_47_test_95_lib__,
    $__angular2_47_di__,
    $__angular2_47_src_47_facade_47_async__;
var $__0 = ($__angular2_47_test_95_lib__ = require("angular2/test_lib"), $__angular2_47_test_95_lib__ && $__angular2_47_test_95_lib__.__esModule && $__angular2_47_test_95_lib__ || {default: $__angular2_47_test_95_lib__}),
    AsyncTestCompleter = $__0.AsyncTestCompleter,
    beforeEach = $__0.beforeEach,
    ddescribe = $__0.ddescribe,
    describe = $__0.describe,
    expect = $__0.expect,
    iit = $__0.iit,
    inject = $__0.inject,
    it = $__0.it,
    xit = $__0.xit;
var $__1 = ($__angular2_47_di__ = require("angular2/di"), $__angular2_47_di__ && $__angular2_47_di__.__esModule && $__angular2_47_di__ || {default: $__angular2_47_di__}),
    Injector = $__1.Injector,
    Inject = $__1.Inject,
    InjectPromise = $__1.InjectPromise,
    bind = $__1.bind,
    Key = $__1.Key;
var $__2 = ($__angular2_47_src_47_facade_47_async__ = require("angular2/src/facade/async"), $__angular2_47_src_47_facade_47_async__ && $__angular2_47_src_47_facade_47_async__.__esModule && $__angular2_47_src_47_facade_47_async__ || {default: $__angular2_47_src_47_facade_47_async__}),
    Promise = $__2.Promise,
    PromiseWrapper = $__2.PromiseWrapper;
var UserList = function UserList() {
  ;
};
($traceurRuntime.createClass)(UserList, {}, {});
function fetchUsers() {
  return PromiseWrapper.resolve(new UserList());
}
var SynchronousUserList = function SynchronousUserList() {
  ;
};
($traceurRuntime.createClass)(SynchronousUserList, {}, {});
var UserController = function UserController(list) {
  this.list = list;
};
($traceurRuntime.createClass)(UserController, {}, {});
Object.defineProperty(UserController, "parameters", {get: function() {
    return [[UserList]];
  }});
var AsyncUserController = function AsyncUserController(userList) {
  this.userList = userList;
};
($traceurRuntime.createClass)(AsyncUserController, {}, {});
Object.defineProperty(AsyncUserController, "parameters", {get: function() {
    return [[new InjectPromise(UserList)]];
  }});
function main() {
  describe("async injection", function() {
    describe("asyncGet", function() {
      it('should return a promise', function() {
        var injector = Injector.resolveAndCreate([bind(UserList).toAsyncFactory(fetchUsers)]);
        var p = injector.asyncGet(UserList);
        expect(p).toBePromise();
      });
      it('should return a promise when the binding is sync', function() {
        var injector = Injector.resolveAndCreate([SynchronousUserList]);
        var p = injector.asyncGet(SynchronousUserList);
        expect(p).toBePromise();
      });
      it("should return a promise when the binding is sync (from cache)", function() {
        var injector = Injector.resolveAndCreate([UserList]);
        expect(injector.get(UserList)).toBeAnInstanceOf(UserList);
        expect(injector.asyncGet(UserList)).toBePromise();
      });
      it('should return the injector', inject([AsyncTestCompleter], (function(async) {
        var injector = Injector.resolveAndCreate([]);
        var p = injector.asyncGet(Injector);
        p.then(function(injector) {
          expect(injector).toBe(injector);
          async.done();
        });
      })));
      it('should return a promise when instantiating a sync binding ' + 'with an async dependency', inject([AsyncTestCompleter], (function(async) {
        var injector = Injector.resolveAndCreate([bind(UserList).toAsyncFactory(fetchUsers), UserController]);
        injector.asyncGet(UserController).then(function(userController) {
          expect(userController).toBeAnInstanceOf(UserController);
          expect(userController.list).toBeAnInstanceOf(UserList);
          async.done();
        });
      })));
      it("should create only one instance (async + async)", inject([AsyncTestCompleter], (function(async) {
        var injector = Injector.resolveAndCreate([bind(UserList).toAsyncFactory(fetchUsers)]);
        var ul1 = injector.asyncGet(UserList);
        var ul2 = injector.asyncGet(UserList);
        PromiseWrapper.all([ul1, ul2]).then(function(uls) {
          expect(uls[0]).toBe(uls[1]);
          async.done();
        });
      })));
      it("should create only one instance (sync + async)", inject([AsyncTestCompleter], (function(async) {
        var injector = Injector.resolveAndCreate([UserList]);
        var promise = injector.asyncGet(UserList);
        var ul = injector.get(UserList);
        expect(promise).toBePromise();
        expect(ul).toBeAnInstanceOf(UserList);
        promise.then(function(ful) {
          expect(ful).toBe(ul);
          async.done();
        });
      })));
      it('should show the full path when error happens in a constructor', inject([AsyncTestCompleter], (function(async) {
        var injector = Injector.resolveAndCreate([UserController, bind(UserList).toAsyncFactory(function() {
          throw "Broken UserList";
        })]);
        var promise = injector.asyncGet(UserController);
        PromiseWrapper.then(promise, null, function(e) {
          expect(e.message).toContain("Error during instantiation of UserList! (UserController -> UserList)");
          async.done();
        });
      })));
    });
    describe("get", function() {
      it('should throw when instantiating an async binding', function() {
        var injector = Injector.resolveAndCreate([bind(UserList).toAsyncFactory(fetchUsers)]);
        expect((function() {
          return injector.get(UserList);
        })).toThrowError('Cannot instantiate UserList synchronously. It is provided as a promise!');
      });
      it('should throw when instantiating a sync binding with an async dependency', function() {
        var injector = Injector.resolveAndCreate([bind(UserList).toAsyncFactory(fetchUsers), UserController]);
        expect((function() {
          return injector.get(UserController);
        })).toThrowError('Cannot instantiate UserList synchronously. It is provided as a promise! (UserController -> UserList)');
      });
      it('should not throw when instantiating a sync binding with a resolved async dependency', inject([AsyncTestCompleter], (function(async) {
        var injector = Injector.resolveAndCreate([bind(UserList).toAsyncFactory(fetchUsers), UserController]);
        injector.asyncGet(UserList).then((function(_) {
          expect((function() {
            injector.get(UserController);
          })).not.toThrow();
          async.done();
        }));
      })));
      it('should resolve synchronously when an async dependency requested as a promise', function() {
        var injector = Injector.resolveAndCreate([bind(UserList).toAsyncFactory(fetchUsers), AsyncUserController]);
        var controller = injector.get(AsyncUserController);
        expect(controller).toBeAnInstanceOf(AsyncUserController);
        expect(controller.userList).toBePromise();
      });
      it('should wrap sync dependencies into promises if required', function() {
        var injector = Injector.resolveAndCreate([bind(UserList).toFactory((function() {
          return new UserList();
        })), AsyncUserController]);
        var controller = injector.get(AsyncUserController);
        expect(controller).toBeAnInstanceOf(AsyncUserController);
        expect(controller.userList).toBePromise();
      });
    });
  });
}
//# sourceMappingURL=async_spec.js.map

//# sourceMappingURL=./async_spec.map
 main();