import {assert} from "rtts_assert/rtts_assert";
import {isPresent,
  isBlank,
  BaseException} from 'angular2/src/facade/lang';
import {ListWrapper,
  MapWrapper,
  List} from 'angular2/src/facade/collection';
import {DOM} from 'angular2/src/dom/dom_adapter';
import * as viewModule from './view';
import * as ldModule from '../shadow_dom/light_dom';
import * as vfModule from './view_factory';
export class ViewContainer {
  constructor(viewFactory, templateElement) {
    assert.argumentTypes(viewFactory, vfModule.ViewFactory, templateElement, assert.type.any);
    this._viewFactory = viewFactory;
    this.templateElement = templateElement;
    this._views = [];
    this._hostLightDom = null;
    this._hydrated = false;
  }
  hydrate(destLightDom, hostLightDom) {
    assert.argumentTypes(destLightDom, ldModule.LightDom, hostLightDom, ldModule.LightDom);
    this._hydrated = true;
    this._hostLightDom = hostLightDom;
    this._lightDom = destLightDom;
  }
  dehydrate() {
    if (isBlank(this._lightDom)) {
      for (var i = this._views.length - 1; i >= 0; i--) {
        var view = this._views[i];
        ViewContainer.removeViewNodes(view);
        this._viewFactory.returnView(view);
      }
      this._views = [];
    } else {
      for (var i = 0; i < this._views.length; i++) {
        var view = this._views[i];
        this._viewFactory.returnView(view);
      }
      this._views = [];
      this._lightDom.redistribute();
    }
    this._hostLightDom = null;
    this._lightDom = null;
    this._hydrated = false;
  }
  get(index) {
    assert.argumentTypes(index, assert.type.number);
    return assert.returnType((this._views[index]), viewModule.RenderView);
  }
  size() {
    return this._views.length;
  }
  _siblingToInsertAfter(index) {
    assert.argumentTypes(index, assert.type.number);
    if (index == 0)
      return this.templateElement;
    return ListWrapper.last(this._views[index - 1].rootNodes);
  }
  _checkHydrated() {
    if (!this._hydrated)
      throw new BaseException('Cannot change dehydrated ViewContainer');
  }
  insert(view, atIndex = -1) {
    if (!view.hydrated()) {
      view.hydrate(this._hostLightDom);
    }
    if (atIndex == -1)
      atIndex = this._views.length;
    ListWrapper.insert(this._views, atIndex, view);
    if (isBlank(this._lightDom)) {
      ViewContainer.moveViewNodesAfterSibling(this._siblingToInsertAfter(atIndex), view);
    } else {
      this._lightDom.redistribute();
    }
    if (isPresent(this._hostLightDom)) {
      this._hostLightDom.redistribute();
    }
    return assert.returnType((view), viewModule.RenderView);
  }
  detach(atIndex) {
    assert.argumentTypes(atIndex, assert.type.number);
    this._checkHydrated();
    var detachedView = this.get(atIndex);
    ListWrapper.removeAt(this._views, atIndex);
    if (isBlank(this._lightDom)) {
      ViewContainer.removeViewNodes(detachedView);
    } else {
      this._lightDom.redistribute();
    }
    if (isPresent(this._hostLightDom)) {
      this._hostLightDom.redistribute();
    }
    return detachedView;
  }
  contentTagContainers() {
    return this._views;
  }
  nodes() {
    var r = [];
    for (var i = 0; i < this._views.length; ++i) {
      r = ListWrapper.concat(r, this._views[i].rootNodes);
    }
    return assert.returnType((r), List);
  }
  static moveViewNodesAfterSibling(sibling, view) {
    for (var i = view.rootNodes.length - 1; i >= 0; --i) {
      DOM.insertAfter(sibling, view.rootNodes[i]);
    }
  }
  static removeViewNodes(view) {
    var len = view.rootNodes.length;
    if (len == 0)
      return ;
    var parent = view.rootNodes[0].parentNode;
    for (var i = len - 1; i >= 0; --i) {
      DOM.removeChild(parent, view.rootNodes[i]);
    }
  }
}
Object.defineProperty(ViewContainer, "parameters", {get: function() {
    return [[vfModule.ViewFactory], []];
  }});
Object.defineProperty(ViewContainer.prototype.hydrate, "parameters", {get: function() {
    return [[ldModule.LightDom], [ldModule.LightDom]];
  }});
Object.defineProperty(ViewContainer.prototype.get, "parameters", {get: function() {
    return [[assert.type.number]];
  }});
Object.defineProperty(ViewContainer.prototype._siblingToInsertAfter, "parameters", {get: function() {
    return [[assert.type.number]];
  }});
Object.defineProperty(ViewContainer.prototype.detach, "parameters", {get: function() {
    return [[assert.type.number]];
  }});
//# sourceMappingURL=view_container.js.map

//# sourceMappingURL=./view_container.map