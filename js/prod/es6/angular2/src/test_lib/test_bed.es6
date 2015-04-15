import {Injector,
  bind} from 'angular2/di';
import {Type,
  isPresent,
  BaseException} from 'angular2/src/facade/lang';
import {Promise} from 'angular2/src/facade/async';
import {isBlank} from 'angular2/src/facade/lang';
import {List} from 'angular2/src/facade/collection';
import {View} from 'angular2/src/core/annotations/view';
import {TemplateResolver} from 'angular2/src/core/compiler/template_resolver';
import {Compiler} from 'angular2/src/core/compiler/compiler';
import {AppView} from 'angular2/src/core/compiler/view';
import {ViewFactory} from 'angular2/src/core/compiler/view_factory';
import {DirectiveBinding} from 'angular2/src/core/compiler/element_injector';
import {DirectiveMetadataReader} from 'angular2/src/core/compiler/directive_metadata_reader';
import {queryView,
  viewRootNodes,
  el} from './utils';
import {instantiateType,
  getTypeOf} from './lang_utils';
export class TestBed {
  constructor(injector) {
    this._injector = injector;
  }
  overrideView(component, template) {
    this._injector.get(TemplateResolver).setView(component, template);
  }
  setInlineTemplate(component, html) {
    this._injector.get(TemplateResolver).setInlineTemplate(component, html);
  }
  overrideDirective(component, from, to) {
    this._injector.get(TemplateResolver).overrideTemplateDirective(component, from, to);
  }
  createView(component, {context = null,
    html = null} = {}) {
    if (isBlank(component) && isBlank(context)) {
      throw new BaseException('You must specified at least a component or a context');
    }
    if (isBlank(component)) {
      component = getTypeOf(context);
    } else if (isBlank(context)) {
      context = instantiateType(component);
    }
    if (isPresent(html)) {
      this.setInlineTemplate(component, html);
    }
    var rootEl = el('<div></div>');
    var metadataReader = this._injector.get(DirectiveMetadataReader);
    var componentBinding = DirectiveBinding.createFromBinding(bind(component).toValue(context), metadataReader.read(component).annotation);
    return this._injector.get(Compiler).compileRoot(rootEl, componentBinding).then((pv) => {
      var viewFactory = this._injector.get(ViewFactory);
      var view = viewFactory.getView(pv);
      view.hydrate(this._injector, null, context, null);
      return new ViewProxy(view.componentChildViews[0]);
    });
  }
}
Object.defineProperty(TestBed, "parameters", {get: function() {
    return [[Injector]];
  }});
Object.defineProperty(TestBed.prototype.overrideView, "parameters", {get: function() {
    return [[Type], [View]];
  }});
Object.defineProperty(TestBed.prototype.setInlineTemplate, "parameters", {get: function() {
    return [[Type], [assert.type.string]];
  }});
Object.defineProperty(TestBed.prototype.overrideDirective, "parameters", {get: function() {
    return [[Type], [Type], [Type]];
  }});
Object.defineProperty(TestBed.prototype.createView, "parameters", {get: function() {
    return [[Type], []];
  }});
export class ViewProxy {
  constructor(view) {
    this._view = view;
  }
  get context() {
    return this._view.context;
  }
  get rootNodes() {
    return viewRootNodes(this._view);
  }
  detectChanges() {
    this._view.changeDetector.detectChanges();
  }
  querySelector(selector) {
    return queryView(this._view, selector);
  }
  get rawView() {
    return this._view;
  }
}
Object.defineProperty(ViewProxy, "parameters", {get: function() {
    return [[AppView]];
  }});
//# sourceMappingURL=test_bed.js.map

//# sourceMappingURL=./test_bed.map