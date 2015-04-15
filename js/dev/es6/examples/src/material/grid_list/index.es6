import {bootstrap,
  Component,
  View} from 'angular2/angular2';
import {MdGridList,
  MdGridTile} from 'angular2_material/src/components/grid_list/grid_list';
import {MdTheme} from 'angular2_material/src/core/theme';
import {UrlResolver} from 'angular2/src/services/url_resolver';
import {commonDemoSetup,
  DemoUrlResolver} from '../demo_common';
import {bind} from 'angular2/di';
class DemoApp {
  constructor() {
    this.tile3RowSpan = 3;
    this.tile3ColSpan = 3;
  }
}
Object.defineProperty(DemoApp, "annotations", {get: function() {
    return [new Component({selector: 'demo-app'}), new View({
      templateUrl: './demo_app.html',
      directives: [MdGridList, MdGridTile]
    })];
  }});
export function main() {
  commonDemoSetup();
  bootstrap(DemoApp, [bind(UrlResolver).toValue(new DemoUrlResolver())]);
}
//# sourceMappingURL=index.js.map

//# sourceMappingURL=./index.map