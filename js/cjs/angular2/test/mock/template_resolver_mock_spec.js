'use strict'; var parse5Adapter = require('angular2/src/dom/parse5_adapter'); parse5Adapter.Parse5DomAdapter.makeCurrent();
Object.defineProperties(module.exports, {
  main: {get: function() {
      return main;
    }},
  __esModule: {value: true}
});
var $__angular2_47_test_95_lib__,
    $__angular2_47_src_47_mock_47_template_95_resolver_95_mock__,
    $__angular2_47_src_47_core_47_annotations_47_annotations__,
    $__angular2_47_src_47_core_47_annotations_47_view__,
    $__angular2_47_src_47_facade_47_lang__;
var $__0 = ($__angular2_47_test_95_lib__ = require("angular2/test_lib"), $__angular2_47_test_95_lib__ && $__angular2_47_test_95_lib__.__esModule && $__angular2_47_test_95_lib__ || {default: $__angular2_47_test_95_lib__}),
    beforeEach = $__0.beforeEach,
    ddescribe = $__0.ddescribe,
    describe = $__0.describe,
    el = $__0.el,
    expect = $__0.expect,
    iit = $__0.iit,
    it = $__0.it;
var MockTemplateResolver = ($__angular2_47_src_47_mock_47_template_95_resolver_95_mock__ = require("angular2/src/mock/template_resolver_mock"), $__angular2_47_src_47_mock_47_template_95_resolver_95_mock__ && $__angular2_47_src_47_mock_47_template_95_resolver_95_mock__.__esModule && $__angular2_47_src_47_mock_47_template_95_resolver_95_mock__ || {default: $__angular2_47_src_47_mock_47_template_95_resolver_95_mock__}).MockTemplateResolver;
var Component = ($__angular2_47_src_47_core_47_annotations_47_annotations__ = require("angular2/src/core/annotations/annotations"), $__angular2_47_src_47_core_47_annotations_47_annotations__ && $__angular2_47_src_47_core_47_annotations_47_annotations__.__esModule && $__angular2_47_src_47_core_47_annotations_47_annotations__ || {default: $__angular2_47_src_47_core_47_annotations_47_annotations__}).Component;
var View = ($__angular2_47_src_47_core_47_annotations_47_view__ = require("angular2/src/core/annotations/view"), $__angular2_47_src_47_core_47_annotations_47_view__ && $__angular2_47_src_47_core_47_annotations_47_view__.__esModule && $__angular2_47_src_47_core_47_annotations_47_view__ || {default: $__angular2_47_src_47_core_47_annotations_47_view__}).View;
var isBlank = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}).isBlank;
function main() {
  describe('MockTemplateResolver', (function() {
    var resolver;
    beforeEach((function() {
      resolver = new MockTemplateResolver();
    }));
    describe('View overriding', (function() {
      it('should fallback to the default TemplateResolver when templates are not overridden', (function() {
        var template = resolver.resolve(SomeComponent);
        expect(template.template).toEqual('template');
        expect(template.directives).toEqual([SomeDirective]);
      }));
      it('should allow overriding the @View', (function() {
        resolver.setView(SomeComponent, new View({template: 'overridden template'}));
        var template = resolver.resolve(SomeComponent);
        expect(template.template).toEqual('overridden template');
        expect(isBlank(template.directives)).toBe(true);
      }));
      it('should not allow overriding a template after it has been resolved', (function() {
        resolver.resolve(SomeComponent);
        expect((function() {
          resolver.setView(SomeComponent, new View({template: 'overridden template'}));
        })).toThrowError('The component SomeComponent has already been compiled, its configuration can not be changed');
      }));
    }));
    describe('inline template definition overriding', (function() {
      it('should allow overriding the default template', (function() {
        resolver.setInlineTemplate(SomeComponent, 'overridden template');
        var template = resolver.resolve(SomeComponent);
        expect(template.template).toEqual('overridden template');
        expect(template.directives).toEqual([SomeDirective]);
      }));
      it('should allow overriding an overriden @View', (function() {
        resolver.setView(SomeComponent, new View({template: 'overridden template'}));
        resolver.setInlineTemplate(SomeComponent, 'overridden template x 2');
        var template = resolver.resolve(SomeComponent);
        expect(template.template).toEqual('overridden template x 2');
      }));
      it('should not allow overriding a template after it has been resolved', (function() {
        resolver.resolve(SomeComponent);
        expect((function() {
          resolver.setInlineTemplate(SomeComponent, 'overridden template');
        })).toThrowError('The component SomeComponent has already been compiled, its configuration can not be changed');
      }));
    }));
    describe('Directive overriding', (function() {
      it('should allow overriding a directive from the default template', (function() {
        resolver.overrideTemplateDirective(SomeComponent, SomeDirective, SomeOtherDirective);
        var template = resolver.resolve(SomeComponent);
        expect(template.directives.length).toEqual(1);
        expect(template.directives[0]).toBe(SomeOtherDirective);
      }));
      it('should allow overriding a directive from an overriden @View', (function() {
        resolver.setView(SomeComponent, new View({directives: [SomeOtherDirective]}));
        resolver.overrideTemplateDirective(SomeComponent, SomeOtherDirective, SomeComponent);
        var template = resolver.resolve(SomeComponent);
        expect(template.directives.length).toEqual(1);
        expect(template.directives[0]).toBe(SomeComponent);
      }));
      it('should throw when the overridden directive is not present', (function() {
        resolver.overrideTemplateDirective(SomeComponent, SomeOtherDirective, SomeDirective);
        expect((function() {
          resolver.resolve(SomeComponent);
        })).toThrowError('Overriden directive SomeOtherDirective not found in the template of SomeComponent');
      }));
      it('should not allow overriding a directive after its template has been resolved', (function() {
        resolver.resolve(SomeComponent);
        expect((function() {
          resolver.overrideTemplateDirective(SomeComponent, SomeDirective, SomeOtherDirective);
        })).toThrowError('The component SomeComponent has already been compiled, its configuration can not be changed');
      }));
    }));
  }));
}
var SomeComponent = function SomeComponent() {
  ;
};
($traceurRuntime.createClass)(SomeComponent, {}, {});
Object.defineProperty(SomeComponent, "annotations", {get: function() {
    return [new Component({selector: 'cmp'}), new View({
      template: 'template',
      directives: [SomeDirective]
    })];
  }});
var SomeDirective = function SomeDirective() {
  ;
};
($traceurRuntime.createClass)(SomeDirective, {}, {});
var SomeOtherDirective = function SomeOtherDirective() {
  ;
};
($traceurRuntime.createClass)(SomeOtherDirective, {}, {});
//# sourceMappingURL=template_resolver_mock_spec.js.map

//# sourceMappingURL=./template_resolver_mock_spec.map
 main();