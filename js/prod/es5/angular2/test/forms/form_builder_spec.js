System.register(["angular2/test_lib", "angular2/forms"], function($__export) {
  "use strict";
  var ddescribe,
      describe,
      it,
      iit,
      xit,
      expect,
      beforeEach,
      afterEach,
      el,
      Control,
      FormBuilder,
      Validators;
  function main() {
    describe("Form Builder", (function() {
      var b;
      beforeEach((function() {
        b = new FormBuilder();
      }));
      it("should create controls from a value", (function() {
        var g = b.group({"login": "some value"});
        expect(g.controls["login"].value).toEqual("some value");
      }));
      it("should create controls from an array", (function() {
        var g = b.group({
          "login": ["some value"],
          "password": ["some value", Validators.required]
        });
        expect(g.controls["login"].value).toEqual("some value");
        expect(g.controls["password"].value).toEqual("some value");
        expect(g.controls["password"].validator).toEqual(Validators.required);
      }));
      it("should use controls", (function() {
        var g = b.group({"login": b.control("some value", Validators.required)});
        expect(g.controls["login"].value).toEqual("some value");
        expect(g.controls["login"].validator).toBe(Validators.required);
      }));
      it("should create groups with optional controls", (function() {
        var g = b.group({"login": "some value"}, {"optionals": {"login": false}});
        expect(g.contains("login")).toEqual(false);
      }));
      it("should create groups with a custom validator", (function() {
        var g = b.group({"login": "some value"}, {"validator": Validators.nullValidator});
        expect(g.validator).toBe(Validators.nullValidator);
      }));
      it("should use default validators when no validators are provided", (function() {
        var g = b.group({"login": "some value"});
        expect(g.controls["login"].validator).toBe(Validators.nullValidator);
        expect(g.validator).toBe(Validators.group);
      }));
      it("should create control arrays", (function() {
        var c = b.control("three");
        var a = b.array(["one", ["two", Validators.required], c, b.array(['four'])]);
        expect(a.value).toEqual(['one', 'two', 'three', ['four']]);
      }));
    }));
  }
  $__export("main", main);
  return {
    setters: [function($__m) {
      ddescribe = $__m.ddescribe;
      describe = $__m.describe;
      it = $__m.it;
      iit = $__m.iit;
      xit = $__m.xit;
      expect = $__m.expect;
      beforeEach = $__m.beforeEach;
      afterEach = $__m.afterEach;
      el = $__m.el;
    }, function($__m) {
      Control = $__m.Control;
      FormBuilder = $__m.FormBuilder;
      Validators = $__m.Validators;
    }],
    execute: function() {
    }
  };
});
//# sourceMappingURL=form_builder_spec.es6.map

//# sourceMappingURL=./form_builder_spec.js.map