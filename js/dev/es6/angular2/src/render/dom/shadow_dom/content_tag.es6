import {assert} from "rtts_assert/rtts_assert";
import * as ldModule from './light_dom';
import {DOM} from 'angular2/src/dom/dom_adapter';
import {isPresent} from 'angular2/src/facade/lang';
import {List,
  ListWrapper} from 'angular2/src/facade/collection';
class ContentStrategy {
  insert(nodes) {
    assert.argumentTypes(nodes, List);
  }
}
Object.defineProperty(ContentStrategy.prototype.insert, "parameters", {get: function() {
    return [[List]];
  }});
class RenderedContent extends ContentStrategy {
  constructor(contentEl) {
    super();
    this.beginScript = contentEl;
    this.endScript = DOM.nextSibling(this.beginScript);
    this.nodes = [];
  }
  insert(nodes) {
    assert.argumentTypes(nodes, List);
    this.nodes = nodes;
    DOM.insertAllBefore(this.endScript, nodes);
    this._removeNodesUntil(ListWrapper.isEmpty(nodes) ? this.endScript : nodes[0]);
  }
  _removeNodesUntil(node) {
    var p = DOM.parentElement(this.beginScript);
    for (var next = DOM.nextSibling(this.beginScript); next !== node; next = DOM.nextSibling(this.beginScript)) {
      DOM.removeChild(p, next);
    }
  }
}
Object.defineProperty(RenderedContent.prototype.insert, "parameters", {get: function() {
    return [[List]];
  }});
class IntermediateContent extends ContentStrategy {
  constructor(destinationLightDom) {
    assert.argumentTypes(destinationLightDom, ldModule.LightDom);
    super();
    this.nodes = [];
    this.destinationLightDom = destinationLightDom;
  }
  insert(nodes) {
    assert.argumentTypes(nodes, List);
    this.nodes = nodes;
    this.destinationLightDom.redistribute();
  }
}
Object.defineProperty(IntermediateContent, "parameters", {get: function() {
    return [[ldModule.LightDom]];
  }});
Object.defineProperty(IntermediateContent.prototype.insert, "parameters", {get: function() {
    return [[List]];
  }});
export class Content {
  constructor(contentStartEl, selector) {
    assert.argumentTypes(contentStartEl, assert.type.any, selector, assert.type.string);
    this.select = selector;
    this.contentStartElement = contentStartEl;
    this._strategy = null;
  }
  hydrate(destinationLightDom) {
    assert.argumentTypes(destinationLightDom, ldModule.LightDom);
    this._strategy = isPresent(destinationLightDom) ? new IntermediateContent(destinationLightDom) : new RenderedContent(this.contentStartElement);
  }
  dehydrate() {
    this._strategy = null;
  }
  nodes() {
    return assert.returnType((this._strategy.nodes), List);
  }
  insert(nodes) {
    assert.argumentTypes(nodes, List);
    this._strategy.insert(nodes);
  }
}
Object.defineProperty(Content, "parameters", {get: function() {
    return [[], [assert.type.string]];
  }});
Object.defineProperty(Content.prototype.hydrate, "parameters", {get: function() {
    return [[ldModule.LightDom]];
  }});
Object.defineProperty(Content.prototype.insert, "parameters", {get: function() {
    return [[List]];
  }});
//# sourceMappingURL=content_tag.js.map

//# sourceMappingURL=./content_tag.map