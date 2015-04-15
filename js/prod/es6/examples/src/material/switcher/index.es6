import {bootstrap,
  Component,
  View} from 'angular2/angular2';
import {MdSwitch} from 'angular2_material/src/components/switcher/switch';
import {UrlResolver} from 'angular2/src/services/url_resolver';
import {commonDemoSetup,
  DemoUrlResolver} from '../demo_common';
import {bind} from 'angular2/di';
class DemoApp {
  constructor() {
    this.toggleCount = 0;
  }
  increment() {
    this.toggleCount++;
  }
}
Object.defineProperty(DemoApp, "annotations", {get: function() {
    return [new Component({selector: 'demo-app'}), new View({
      templateUrl: './demo_app.html',
      directives: [MdSwitch]
    })];
  }});
export function main() {
  commonDemoSetup();
  bootstrap(DemoApp, [bind(UrlResolver).toValue(new DemoUrlResolver())]);
}
//# sourceMappingURL=index.js.map

//# sourceMappingURL=./index.map