import {assert} from "rtts_assert/rtts_assert";
import {bootstrap,
  Component,
  View} from 'angular2/angular2';
import {MdProgressLinear} from 'angular2_material/src/components/progress-linear/progress_linear';
import {UrlResolver} from 'angular2/src/services/url_resolver';
import {commonDemoSetup,
  DemoUrlResolver} from '../demo_common';
import {bind} from 'angular2/di';
class DemoApp {
  constructor() {
    this.progress = 40;
  }
  step(s) {
    assert.argumentTypes(s, assert.type.number);
    this.progress += s;
  }
}
Object.defineProperty(DemoApp, "annotations", {get: function() {
    return [new Component({selector: 'demo-app'}), new View({
      templateUrl: './demo_app.html',
      directives: [MdProgressLinear]
    })];
  }});
Object.defineProperty(DemoApp.prototype.step, "parameters", {get: function() {
    return [[assert.type.number]];
  }});
export function main() {
  commonDemoSetup();
  bootstrap(DemoApp, [bind(UrlResolver).toValue(new DemoUrlResolver())]);
}
//# sourceMappingURL=index.js.map

//# sourceMappingURL=./index.map