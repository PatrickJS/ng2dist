"use strict";
Object.defineProperties(module.exports, {
  CompilerCache: {get: function() {
      return CompilerCache;
    }},
  Compiler: {get: function() {
      return Compiler;
    }},
  __esModule: {value: true}
});
var $__angular2_47_di__,
    $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_facade_47_async__,
    $__angular2_47_src_47_facade_47_collection__,
    $__directive_95_metadata_95_reader__,
    $___46__46__47_annotations_47_annotations__,
    $__view__,
    $__element_95_injector__,
    $__template_95_resolver__,
    $___46__46__47_annotations_47_view__,
    $__component_95_url_95_mapper__,
    $__proto_95_view_95_factory__,
    $__angular2_47_src_47_services_47_url_95_resolver__,
    $__angular2_47_src_47_render_47_api__;
var Injectable = ($__angular2_47_di__ = require("angular2/di"), $__angular2_47_di__ && $__angular2_47_di__.__esModule && $__angular2_47_di__ || {default: $__angular2_47_di__}).Injectable;
var $__1 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    Type = $__1.Type,
    isBlank = $__1.isBlank,
    isPresent = $__1.isPresent,
    BaseException = $__1.BaseException,
    normalizeBlank = $__1.normalizeBlank,
    stringify = $__1.stringify;
var $__2 = ($__angular2_47_src_47_facade_47_async__ = require("angular2/src/facade/async"), $__angular2_47_src_47_facade_47_async__ && $__angular2_47_src_47_facade_47_async__.__esModule && $__angular2_47_src_47_facade_47_async__ || {default: $__angular2_47_src_47_facade_47_async__}),
    Promise = $__2.Promise,
    PromiseWrapper = $__2.PromiseWrapper;
var $__3 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    List = $__3.List,
    ListWrapper = $__3.ListWrapper,
    Map = $__3.Map,
    MapWrapper = $__3.MapWrapper;
var DirectiveMetadataReader = ($__directive_95_metadata_95_reader__ = require("./directive_metadata_reader"), $__directive_95_metadata_95_reader__ && $__directive_95_metadata_95_reader__.__esModule && $__directive_95_metadata_95_reader__ || {default: $__directive_95_metadata_95_reader__}).DirectiveMetadataReader;
var $__5 = ($___46__46__47_annotations_47_annotations__ = require("../annotations/annotations"), $___46__46__47_annotations_47_annotations__ && $___46__46__47_annotations_47_annotations__.__esModule && $___46__46__47_annotations_47_annotations__ || {default: $___46__46__47_annotations_47_annotations__}),
    Component = $__5.Component,
    Viewport = $__5.Viewport,
    DynamicComponent = $__5.DynamicComponent,
    Decorator = $__5.Decorator;
var AppProtoView = ($__view__ = require("./view"), $__view__ && $__view__.__esModule && $__view__ || {default: $__view__}).AppProtoView;
var DirectiveBinding = ($__element_95_injector__ = require("./element_injector"), $__element_95_injector__ && $__element_95_injector__.__esModule && $__element_95_injector__ || {default: $__element_95_injector__}).DirectiveBinding;
var TemplateResolver = ($__template_95_resolver__ = require("./template_resolver"), $__template_95_resolver__ && $__template_95_resolver__.__esModule && $__template_95_resolver__ || {default: $__template_95_resolver__}).TemplateResolver;
var View = ($___46__46__47_annotations_47_view__ = require("../annotations/view"), $___46__46__47_annotations_47_view__ && $___46__46__47_annotations_47_view__.__esModule && $___46__46__47_annotations_47_view__ || {default: $___46__46__47_annotations_47_view__}).View;
var ComponentUrlMapper = ($__component_95_url_95_mapper__ = require("./component_url_mapper"), $__component_95_url_95_mapper__ && $__component_95_url_95_mapper__.__esModule && $__component_95_url_95_mapper__ || {default: $__component_95_url_95_mapper__}).ComponentUrlMapper;
var ProtoViewFactory = ($__proto_95_view_95_factory__ = require("./proto_view_factory"), $__proto_95_view_95_factory__ && $__proto_95_view_95_factory__.__esModule && $__proto_95_view_95_factory__ || {default: $__proto_95_view_95_factory__}).ProtoViewFactory;
var UrlResolver = ($__angular2_47_src_47_services_47_url_95_resolver__ = require("angular2/src/services/url_resolver"), $__angular2_47_src_47_services_47_url_95_resolver__ && $__angular2_47_src_47_services_47_url_95_resolver__.__esModule && $__angular2_47_src_47_services_47_url_95_resolver__ || {default: $__angular2_47_src_47_services_47_url_95_resolver__}).UrlResolver;
var renderApi = ($__angular2_47_src_47_render_47_api__ = require("angular2/src/render/api"), $__angular2_47_src_47_render_47_api__ && $__angular2_47_src_47_render_47_api__.__esModule && $__angular2_47_src_47_render_47_api__ || {default: $__angular2_47_src_47_render_47_api__});
var CompilerCache = function CompilerCache() {
  this._cache = MapWrapper.create();
};
($traceurRuntime.createClass)(CompilerCache, {
  set: function(component, protoView) {
    MapWrapper.set(this._cache, component, protoView);
  },
  get: function(component) {
    var result = MapWrapper.get(this._cache, component);
    return normalizeBlank(result);
  },
  clear: function() {
    MapWrapper.clear(this._cache);
  }
}, {});
Object.defineProperty(CompilerCache, "annotations", {get: function() {
    return [new Injectable()];
  }});
Object.defineProperty(CompilerCache.prototype.set, "parameters", {get: function() {
    return [[Type], [AppProtoView]];
  }});
Object.defineProperty(CompilerCache.prototype.get, "parameters", {get: function() {
    return [[Type]];
  }});
var Compiler = function Compiler(reader, cache, templateResolver, componentUrlMapper, urlResolver, renderer, protoViewFactory) {
  this._reader = reader;
  this._compilerCache = cache;
  this._compiling = MapWrapper.create();
  this._templateResolver = templateResolver;
  this._componentUrlMapper = componentUrlMapper;
  this._urlResolver = urlResolver;
  this._appUrl = urlResolver.resolve(null, './');
  this._renderer = renderer;
  this._protoViewFactory = protoViewFactory;
};
($traceurRuntime.createClass)(Compiler, {
  _bindDirective: function(directiveTypeOrBinding) {
    if (directiveTypeOrBinding instanceof DirectiveBinding) {
      return directiveTypeOrBinding;
    }
    var meta = this._reader.read(directiveTypeOrBinding);
    return DirectiveBinding.createFromType(meta.type, meta.annotation);
  },
  compileRoot: function(elementOrSelector, componentTypeOrBinding) {
    var $__13 = this;
    return this._renderer.createRootProtoView(elementOrSelector, 'root').then((function(rootRenderPv) {
      return $__13._compileNestedProtoViews(null, rootRenderPv, [$__13._bindDirective(componentTypeOrBinding)], true);
    }));
  },
  compile: function(component) {
    var protoView = this._compile(this._bindDirective(component));
    return PromiseWrapper.isPromise(protoView) ? protoView : PromiseWrapper.resolve(protoView);
  },
  _compile: function(componentBinding) {
    var $__13 = this;
    var component = componentBinding.key.token;
    var protoView = this._compilerCache.get(component);
    if (isPresent(protoView)) {
      return protoView;
    }
    var pvPromise = MapWrapper.get(this._compiling, component);
    if (isPresent(pvPromise)) {
      return pvPromise;
    }
    var template = this._templateResolver.resolve(component);
    var directives = ListWrapper.map(this._flattenDirectives(template), (function(directive) {
      return $__13._bindDirective(directive);
    }));
    var renderTemplate = this._buildRenderTemplate(component, template, directives);
    pvPromise = this._renderer.compile(renderTemplate).then((function(renderPv) {
      return $__13._compileNestedProtoViews(componentBinding, renderPv, directives, true);
    }));
    MapWrapper.set(this._compiling, component, pvPromise);
    return pvPromise;
  },
  _compileNestedProtoViews: function(componentBinding, renderPv, directives, isComponentRootView) {
    var $__13 = this;
    var nestedPVPromises = [];
    var protoView = this._protoViewFactory.createProtoView(componentBinding, renderPv, directives);
    if (isComponentRootView && isPresent(componentBinding)) {
      var component = componentBinding.key.token;
      this._compilerCache.set(component, protoView);
      MapWrapper.delete(this._compiling, component);
    }
    var binderIndex = 0;
    ListWrapper.forEach(protoView.elementBinders, (function(elementBinder) {
      var nestedComponent = elementBinder.componentDirective;
      var nestedRenderProtoView = renderPv.elementBinders[binderIndex].nestedProtoView;
      var elementBinderDone = (function(nestedPv) {
        elementBinder.nestedProtoView = nestedPv;
        nestedPv.parentProtoView = isPresent(nestedComponent) ? null : protoView;
      });
      var nestedCall = null;
      if (isPresent(nestedComponent)) {
        if (!(nestedComponent.annotation instanceof DynamicComponent)) {
          nestedCall = $__13._compile(nestedComponent);
        }
      } else if (isPresent(nestedRenderProtoView)) {
        nestedCall = $__13._compileNestedProtoViews(componentBinding, nestedRenderProtoView, directives, false);
      }
      if (PromiseWrapper.isPromise(nestedCall)) {
        ListWrapper.push(nestedPVPromises, nestedCall.then(elementBinderDone));
      } else if (isPresent(nestedCall)) {
        elementBinderDone(nestedCall);
      }
      binderIndex++;
    }));
    var protoViewDone = (function(_) {
      var childComponentRenderPvRefs = [];
      ListWrapper.forEach(protoView.elementBinders, (function(eb) {
        if (isPresent(eb.componentDirective)) {
          var componentPv = eb.nestedProtoView;
          ListWrapper.push(childComponentRenderPvRefs, isPresent(componentPv) ? componentPv.render : null);
        }
      }));
      $__13._renderer.mergeChildComponentProtoViews(protoView.render, childComponentRenderPvRefs);
      return protoView;
    });
    if (nestedPVPromises.length > 0) {
      return PromiseWrapper.all(nestedPVPromises).then(protoViewDone);
    } else {
      return protoViewDone(null);
    }
  },
  _buildRenderTemplate: function(component, view, directives) {
    var componentUrl = this._urlResolver.resolve(this._appUrl, this._componentUrlMapper.getUrl(component));
    var templateAbsUrl = null;
    if (isPresent(view.templateUrl)) {
      templateAbsUrl = this._urlResolver.resolve(componentUrl, view.templateUrl);
    } else {
      templateAbsUrl = componentUrl;
    }
    return new renderApi.ViewDefinition({
      componentId: stringify(component),
      absUrl: templateAbsUrl,
      template: view.template,
      directives: ListWrapper.map(directives, this._buildRenderDirective)
    });
  },
  _buildRenderDirective: function(directiveBinding) {
    var ann = directiveBinding.annotation;
    var renderType;
    var compileChildren = true;
    if ((ann instanceof Component) || (ann instanceof DynamicComponent)) {
      renderType = renderApi.DirectiveMetadata.COMPONENT_TYPE;
    } else if (ann instanceof Viewport) {
      renderType = renderApi.DirectiveMetadata.VIEWPORT_TYPE;
    } else if (ann instanceof Decorator) {
      renderType = renderApi.DirectiveMetadata.DECORATOR_TYPE;
      compileChildren = ann.compileChildren;
    }
    var setters = [];
    var readAttributes = [];
    ListWrapper.forEach(directiveBinding.dependencies, (function(dep) {
      if (isPresent(dep.propSetterName)) {
        ListWrapper.push(setters, dep.propSetterName);
      }
      if (isPresent(dep.attributeName)) {
        ListWrapper.push(readAttributes, dep.attributeName);
      }
    }));
    return new renderApi.DirectiveMetadata({
      id: stringify(directiveBinding.key.token),
      type: renderType,
      selector: ann.selector,
      compileChildren: compileChildren,
      hostListeners: isPresent(ann.hostListeners) ? MapWrapper.createFromStringMap(ann.hostListeners) : null,
      properties: isPresent(ann.properties) ? MapWrapper.createFromStringMap(ann.properties) : null,
      setters: setters,
      readAttributes: readAttributes
    });
  },
  _flattenDirectives: function(template) {
    if (isBlank(template.directives))
      return [];
    var directives = [];
    this._flattenList(template.directives, directives);
    return directives;
  },
  _flattenList: function(tree, out) {
    for (var i = 0; i < tree.length; i++) {
      var item = tree[i];
      if (ListWrapper.isList(item)) {
        this._flattenList(item, out);
      } else {
        ListWrapper.push(out, item);
      }
    }
  }
}, {});
Object.defineProperty(Compiler, "annotations", {get: function() {
    return [new Injectable()];
  }});
Object.defineProperty(Compiler, "parameters", {get: function() {
    return [[DirectiveMetadataReader], [CompilerCache], [TemplateResolver], [ComponentUrlMapper], [UrlResolver], [renderApi.Renderer], [ProtoViewFactory]];
  }});
Object.defineProperty(Compiler.prototype.compileRoot, "parameters", {get: function() {
    return [[], [$traceurRuntime.type.any]];
  }});
Object.defineProperty(Compiler.prototype.compile, "parameters", {get: function() {
    return [[Type]];
  }});
Object.defineProperty(Compiler.prototype._compile, "parameters", {get: function() {
    return [[DirectiveBinding]];
  }});
Object.defineProperty(Compiler.prototype._flattenDirectives, "parameters", {get: function() {
    return [[View]];
  }});
Object.defineProperty(Compiler.prototype._flattenList, "parameters", {get: function() {
    return [[$traceurRuntime.genericType(List, $traceurRuntime.type.any)], [$traceurRuntime.genericType(List, Type)]];
  }});
//# sourceMappingURL=compiler.js.map

//# sourceMappingURL=./compiler.map