import {bootstrap,
  Component,
  View,
  MapWrapper,
  ListWrapper,
  For} from 'angular2/angular2';
import {MdButton,
  MdAnchor} from 'angular2_material/src/components/button/button';
import {UrlResolver} from 'angular2/src/services/url_resolver';
import {commonDemoSetup,
  DemoUrlResolver} from '../demo_common';
import {bind} from 'angular2/di';
class DemoApp {
  constructor() {
    this.previousClick = 'Nothing';
    this.action = "ACTIVATE";
    this.clickCount = 0;
    this.items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  }
  click(msg) {
    this.previousClick = msg;
  }
  submit(msg, event) {
    event.preventDefault();
    this.previousClick = msg;
  }
  increment() {
    this.clickCount++;
  }
}
Object.defineProperty(DemoApp, "annotations", {get: function() {
    return [new Component({selector: 'demo-app'}), new View({
      templateUrl: './demo_app.html',
      directives: [MdButton, MdAnchor, For]
    })];
  }});
Object.defineProperty(DemoApp.prototype.click, "parameters", {get: function() {
    return [[assert.type.string]];
  }});
Object.defineProperty(DemoApp.prototype.submit, "parameters", {get: function() {
    return [[assert.type.string], []];
  }});
export function main() {
  commonDemoSetup();
  bootstrap(DemoApp, [bind(UrlResolver).toValue(new DemoUrlResolver())]);
}
//# sourceMappingURL=index.js.map

//# sourceMappingURL=./index.map