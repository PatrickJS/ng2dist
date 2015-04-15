import {assert} from "rtts_assert/rtts_assert";
import {isPresent} from 'angular2/src/facade/lang';
import {DOM} from 'angular2/src/dom/dom_adapter';
import {List,
  Map,
  ListWrapper,
  MapWrapper} from 'angular2/src/facade/collection';
import {ElementBinder} from './element_binder';
import {NG_BINDING_CLASS} from '../util';
export class RenderProtoView {
  constructor({elementBinders,
    element,
    isRootView}) {
    this.element = element;
    this.elementBinders = elementBinders;
    this.isTemplateElement = DOM.isTemplateElement(this.element);
    this.isRootView = isRootView;
    this.rootBindingOffset = (isPresent(this.element) && DOM.hasClass(this.element, NG_BINDING_CLASS)) ? 1 : 0;
  }
  mergeChildComponentProtoViews(componentProtoViews) {
    assert.argumentTypes(componentProtoViews, assert.genericType(List, RenderProtoView));
    var componentProtoViewIndex = 0;
    for (var i = 0; i < this.elementBinders.length; i++) {
      var eb = this.elementBinders[i];
      if (isPresent(eb.componentId)) {
        eb.nestedProtoView = componentProtoViews[componentProtoViewIndex];
        componentProtoViewIndex++;
      }
    }
  }
}
Object.defineProperty(RenderProtoView.prototype.mergeChildComponentProtoViews, "parameters", {get: function() {
    return [[assert.genericType(List, RenderProtoView)]];
  }});
//# sourceMappingURL=proto_view.js.map

//# sourceMappingURL=./proto_view.map