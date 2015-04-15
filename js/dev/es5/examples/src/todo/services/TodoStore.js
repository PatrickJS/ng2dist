System.register(["rtts_assert/rtts_assert", "angular2/src/facade/collection"], function($__export) {
  "use strict";
  var assert,
      ListWrapper,
      KeyModel,
      Todo,
      TodoFactory,
      Store;
  return {
    setters: [function($__m) {
      assert = $__m.assert;
    }, function($__m) {
      ListWrapper = $__m.ListWrapper;
    }],
    execute: function() {
      KeyModel = $__export("KeyModel", (function() {
        var KeyModel = function KeyModel(key) {
          assert.argumentTypes(key, assert.type.number);
          this._key = key;
        };
        return ($traceurRuntime.createClass)(KeyModel, {}, {});
      }()));
      Object.defineProperty(KeyModel, "parameters", {get: function() {
          return [[assert.type.number]];
        }});
      Todo = $__export("Todo", (function($__super) {
        var Todo = function Todo(key, theTitle, isCompleted) {
          assert.argumentTypes(key, assert.type.number, theTitle, assert.type.string, isCompleted, assert.type.boolean);
          $traceurRuntime.superConstructor(Todo).call(this, key);
          this.title = theTitle;
          this.completed = isCompleted;
        };
        return ($traceurRuntime.createClass)(Todo, {}, {}, $__super);
      }(KeyModel)));
      Object.defineProperty(Todo, "parameters", {get: function() {
          return [[assert.type.number], [assert.type.string], [assert.type.boolean]];
        }});
      TodoFactory = $__export("TodoFactory", (function() {
        var TodoFactory = function TodoFactory() {
          this._uid = 0;
        };
        return ($traceurRuntime.createClass)(TodoFactory, {
          nextUid: function() {
            this._uid = this._uid + 1;
            return this._uid;
          },
          create: function(title, isCompleted) {
            assert.argumentTypes(title, assert.type.string, isCompleted, assert.type.boolean);
            return new Todo(this.nextUid(), title, isCompleted);
          }
        }, {});
      }()));
      Object.defineProperty(TodoFactory.prototype.create, "parameters", {get: function() {
          return [[assert.type.string], [assert.type.boolean]];
        }});
      Store = $__export("Store", (function() {
        var Store = function Store() {
          this.list = [];
        };
        return ($traceurRuntime.createClass)(Store, {
          add: function(record) {
            assert.argumentTypes(record, KeyModel);
            this.list.push(record);
          },
          remove: function(record) {
            assert.argumentTypes(record, KeyModel);
            this.spliceOut(record);
          },
          removeBy: function(callback) {
            assert.argumentTypes(callback, Function);
            var records = ListWrapper.filter(this.list, callback);
            ListWrapper.removeAll(this.list, records);
          },
          spliceOut: function(record) {
            assert.argumentTypes(record, KeyModel);
            var i = this.indexFor(record);
            if (i > -1) {
              return this.list.splice(i, 1)[0];
            }
            return null;
          },
          indexFor: function(record) {
            assert.argumentTypes(record, KeyModel);
            return this.list.indexOf(record);
          }
        }, {});
      }()));
      Object.defineProperty(Store.prototype.add, "parameters", {get: function() {
          return [[KeyModel]];
        }});
      Object.defineProperty(Store.prototype.remove, "parameters", {get: function() {
          return [[KeyModel]];
        }});
      Object.defineProperty(Store.prototype.removeBy, "parameters", {get: function() {
          return [[Function]];
        }});
      Object.defineProperty(Store.prototype.spliceOut, "parameters", {get: function() {
          return [[KeyModel]];
        }});
      Object.defineProperty(Store.prototype.indexFor, "parameters", {get: function() {
          return [[KeyModel]];
        }});
    }
  };
});
//# sourceMappingURL=TodoStore.es6.map

//# sourceMappingURL=./TodoStore.js.map