import {bootstrap,
  Component,
  View} from 'angular2/angular2';
import {MdRadioButton,
  MdRadioGroup} from 'angular2_material/src/components/radio/radio_button';
import {MdRadioDispatcher} from 'angular2_material/src/components/radio/radio_dispatcher';
import {UrlResolver} from 'angular2/src/services/url_resolver';
import {commonDemoSetup,
  DemoUrlResolver} from '../demo_common';
import {bind} from 'angular2/di';
class DemoApp {
  constructor() {
    this.thirdValue = 'dr-who';
    this.groupValueChangeCount = 0;
    this.individualValueChanges = 0;
    this.pokemon = '';
    this.someTabindex = 888;
  }
  chooseCharmander() {
    this.pokemon = 'fire';
  }
  onGroupChange() {
    this.groupValueChangeCount++;
  }
  onIndividualClick() {
    this.individualValueChanges++;
  }
}
Object.defineProperty(DemoApp, "annotations", {get: function() {
    return [new Component({
      selector: 'demo-app',
      injectables: [MdRadioDispatcher]
    }), new View({
      templateUrl: './demo_app.html',
      directives: [MdRadioGroup, MdRadioButton]
    })];
  }});
export function main() {
  commonDemoSetup();
  bootstrap(DemoApp, [bind(UrlResolver).toValue(new DemoUrlResolver())]);
}
//# sourceMappingURL=index.js.map

//# sourceMappingURL=./index.map