import {ListWrapper,
  MapWrapper,
  List} from 'angular2/src/facade/collection';
import {BaseException} from 'angular2/src/facade/lang';
import {Injector} from 'angular2/di';
import * as eiModule from 'angular2/src/core/compiler/element_injector';
import {isPresent,
  isBlank} from 'angular2/src/facade/lang';
import * as renderApi from 'angular2/src/render/api';
import * as viewModule from './view';
import * as vfModule from './view_factory';
export class ViewContainer {
  constructor(viewFactory, parentView, defaultProtoView, elementInjector) {
    this.viewFactory = viewFactory;
    this.render = null;
    this.parentView = parentView;
    this.defaultProtoView = defaultProtoView;
    this.elementInjector = elementInjector;
    this._views = [];
    this.appInjector = null;
    this.hostElementInjector = null;
  }
  internalHydrateRecurse(render, appInjector, hostElementInjector) {
    this.render = render;
    this.appInjector = appInjector;
    this.hostElementInjector = hostElementInjector;
  }
  internalDehydrateRecurse() {
    this.appInjector = null;
    this.hostElementInjector = null;
    this.render = null;
    for (var i = this._views.length - 1; i >= 0; i--) {
      var view = this._views[i];
      view.changeDetector.remove();
      this._unlinkElementInjectors(view);
      view.internalDehydrateRecurse();
      this.viewFactory.returnView(view);
    }
    this._views = [];
  }
  clear() {
    for (var i = this._views.length - 1; i >= 0; i--) {
      this.remove(i);
    }
  }
  get(index) {
    return this._views[index];
  }
  get length() {
    return this._views.length;
  }
  _siblingInjectorToLinkAfter(index) {
    if (index == 0)
      return null;
    return ListWrapper.last(this._views[index - 1].rootElementInjectors);
  }
  hydrated() {
    return isPresent(this.appInjector);
  }
  create(atIndex = -1) {
    if (!this.hydrated())
      throw new BaseException('Cannot create views on a dehydrated ViewContainer');
    var newView = this.viewFactory.getView(this.defaultProtoView);
    this._insertWithoutRender(newView, atIndex);
    newView.hydrate(this.appInjector, this.hostElementInjector, this.parentView.context, this.parentView.locals);
    this.defaultProtoView.renderer.insertViewIntoContainer(this.render, newView.render, atIndex);
    return newView;
  }
  insert(view, atIndex = -1) {
    this._insertWithoutRender(view, atIndex);
    this.defaultProtoView.renderer.insertViewIntoContainer(this.render, view.render, atIndex);
    return view;
  }
  _insertWithoutRender(view, atIndex = -1) {
    if (atIndex == -1)
      atIndex = this._views.length;
    ListWrapper.insert(this._views, atIndex, view);
    this.parentView.changeDetector.addChild(view.changeDetector);
    this._linkElementInjectors(this._siblingInjectorToLinkAfter(atIndex), view);
    return view;
  }
  remove(atIndex = -1) {
    if (atIndex == -1)
      atIndex = this._views.length - 1;
    var view = this.detach(atIndex);
    view.dehydrate();
    this.viewFactory.returnView(view);
  }
  detach(atIndex = -1) {
    if (atIndex == -1)
      atIndex = this._views.length - 1;
    var detachedView = this.get(atIndex);
    ListWrapper.removeAt(this._views, atIndex);
    this.defaultProtoView.renderer.detachViewFromContainer(this.render, atIndex);
    detachedView.changeDetector.remove();
    this._unlinkElementInjectors(detachedView);
    return detachedView;
  }
  contentTagContainers() {
    return this._views;
  }
  _linkElementInjectors(sibling, view) {
    for (var i = view.rootElementInjectors.length - 1; i >= 0; i--) {
      view.rootElementInjectors[i].linkAfter(this.elementInjector, sibling);
    }
  }
  _unlinkElementInjectors(view) {
    for (var i = 0; i < view.rootElementInjectors.length; ++i) {
      view.rootElementInjectors[i].unlink();
    }
  }
}
Object.defineProperty(ViewContainer, "parameters", {get: function() {
    return [[vfModule.ViewFactory], [viewModule.AppView], [viewModule.AppProtoView], [eiModule.ElementInjector]];
  }});
Object.defineProperty(ViewContainer.prototype.internalHydrateRecurse, "parameters", {get: function() {
    return [[renderApi.ViewContainerRef], [Injector], [eiModule.ElementInjector]];
  }});
Object.defineProperty(ViewContainer.prototype.get, "parameters", {get: function() {
    return [[assert.type.number]];
  }});
Object.defineProperty(ViewContainer.prototype._siblingInjectorToLinkAfter, "parameters", {get: function() {
    return [[assert.type.number]];
  }});
//# sourceMappingURL=view_container.js.map

//# sourceMappingURL=./view_container.map