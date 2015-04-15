import {describe,
  ddescribe,
  it,
  iit,
  xit,
  xdescribe,
  expect,
  beforeEach,
  el} from 'angular2/test_lib';
import {ListWrapper} from 'angular2/src/facade/collection';
import {RenderProtoView} from 'angular2/src/render/dom/view/proto_view';
import {RenderView} from 'angular2/src/render/dom/view/view';
import {ShadowDomStrategy} from 'angular2/src/render/dom/shadow_dom/shadow_dom_strategy';
import {LightDom} from 'angular2/src/render/dom/shadow_dom/light_dom';
export function main() {
  function createView() {
    var proto = new RenderProtoView({
      element: el('<div></div>'),
      isRootView: false,
      elementBinders: []
    });
    var rootNodes = [el('<div></div>')];
    var boundTextNodes = [];
    var boundElements = [el('<div></div>')];
    var viewContainers = [];
    var contentTags = [];
    var eventManager = null;
    return new RenderView(proto, rootNodes, boundTextNodes, boundElements, viewContainers, contentTags, eventManager);
  }
  function createShadowDomStrategy(log) {
    return new FakeShadowDomStrategy(log);
  }
  describe('RenderView', () => {
    var log,
        strategy;
    beforeEach(() => {
      log = [];
      strategy = createShadowDomStrategy(log);
    });
    describe('setComponentView', () => {
      it('should redistribute when a component is added to a hydrated view', () => {
        var hostView = createView();
        var childView = createView();
        hostView.hydrate(null);
        hostView.setComponentView(strategy, 0, childView);
        expect(log[0]).toEqual(['redistribute']);
      });
      it('should not redistribute when a component is added to a dehydrated view', () => {
        var hostView = createView();
        var childView = createView();
        hostView.setComponentView(strategy, 0, childView);
        expect(log).toEqual([]);
      });
    });
  });
}
class FakeShadowDomStrategy extends ShadowDomStrategy {
  constructor(log) {
    super();
    this.log = log;
  }
  constructLightDom(lightDomView, shadowDomView, element) {
    return new FakeLightDom(this.log, lightDomView, shadowDomView, element);
  }
}
Object.defineProperty(FakeShadowDomStrategy.prototype.constructLightDom, "parameters", {get: function() {
    return [[RenderView], [RenderView], []];
  }});
class FakeLightDom extends LightDom {
  constructor(log, lightDomView, shadowDomView, element) {
    super(lightDomView, shadowDomView, element);
    this.log = log;
  }
  redistribute() {
    ListWrapper.push(this.log, ['redistribute']);
  }
}
Object.defineProperty(FakeLightDom, "parameters", {get: function() {
    return [[], [RenderView], [RenderView], []];
  }});
//# sourceMappingURL=view_spec.js.map

//# sourceMappingURL=./view_spec.map