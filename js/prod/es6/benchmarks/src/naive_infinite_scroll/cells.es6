import {int} from 'angular2/src/facade/lang';
import {reflector} from 'angular2/src/reflection/reflection';
import {getIntParameter,
  bindAction} from 'angular2/src/test_lib/benchmark_util';
import {bootstrap,
  Component,
  Viewport,
  View,
  ViewContainer,
  Compiler} from 'angular2/angular2';
import {PromiseWrapper} from 'angular2/src/facade/async';
import {ListWrapper,
  MapWrapper} from 'angular2/src/facade/collection';
import {Company,
  Opportunity,
  Offering,
  Account,
  CustomDate,
  STATUS_LIST} from './common';
import {For} from 'angular2/directives';
export class HasStyle {
  constructor() {
    this.style = MapWrapper.create();
  }
  set width(w) {
    MapWrapper.set(this.style, 'width', w);
  }
}
export class CompanyNameComponent extends HasStyle {}
Object.defineProperty(CompanyNameComponent, "annotations", {get: function() {
    return [new Component({
      selector: 'company-name',
      properties: {
        'width': 'cell-width',
        'company': 'company'
      }
    }), new View({
      directives: [],
      template: `<div [style]="style">{{company.name}}</div>`
    })];
  }});
export class OpportunityNameComponent extends HasStyle {}
Object.defineProperty(OpportunityNameComponent, "annotations", {get: function() {
    return [new Component({
      selector: 'opportunity-name',
      properties: {
        'width': 'cell-width',
        'opportunity': 'opportunity'
      }
    }), new View({
      directives: [],
      template: `<div [style]="style">{{opportunity.name}}</div>`
    })];
  }});
export class OfferingNameComponent extends HasStyle {}
Object.defineProperty(OfferingNameComponent, "annotations", {get: function() {
    return [new Component({
      selector: 'offering-name',
      properties: {
        'width': 'cell-width',
        'offering': 'offering'
      }
    }), new View({
      directives: [],
      template: `<div [style]="style">{{offering.name}}</div>`
    })];
  }});
export class Stage {}
export class StageButtonsComponent extends HasStyle {
  get offering() {
    return this._offering;
  }
  set offering(offering) {
    this._offering = offering;
    this._computeStageButtons();
  }
  setStage(stage) {
    this._offering.status = stage.name;
    this._computeStageButtons();
  }
  _computeStageButtons() {
    var disabled = true;
    this.stages = ListWrapper.clone(STATUS_LIST.map((status) => {
      var isCurrent = this._offering.status == status;
      var stage = new Stage();
      stage.name = status;
      stage.isDisabled = disabled;
      var stageStyle = MapWrapper.create();
      MapWrapper.set(stageStyle, 'background-color', disabled ? '#DDD' : isCurrent ? '#DDF' : '#FDD');
      stage.style = stageStyle;
      if (isCurrent) {
        disabled = false;
      }
      return stage;
    }));
  }
}
Object.defineProperty(StageButtonsComponent, "annotations", {get: function() {
    return [new Component({
      selector: 'stage-buttons',
      properties: {
        'width': 'cell-width',
        'offering': 'offering'
      }
    }), new View({
      directives: [For],
      template: `
      <div [style]="style">
          <button template="for #stage of stages"
                  [disabled]="stage.isDisabled"
                  [style]="stage.style"
                  on-click="setStage(stage)">
            {{stage.name}}
          </button>
      </div>`
    })];
  }});
Object.defineProperty(Object.getOwnPropertyDescriptor(StageButtonsComponent.prototype, "offering").set, "parameters", {get: function() {
    return [[Offering]];
  }});
Object.defineProperty(StageButtonsComponent.prototype.setStage, "parameters", {get: function() {
    return [[Stage]];
  }});
export class AccountCellComponent extends HasStyle {}
Object.defineProperty(AccountCellComponent, "annotations", {get: function() {
    return [new Component({
      selector: 'account-cell',
      properties: {
        'width': 'cell-width',
        'account': 'account'
      }
    }), new View({
      directives: [],
      template: `
      <div [style]="style">
        <a href="/account/{{account.accountId}}">
          {{account.accountId}}
        </a>
      </div>`
    })];
  }});
export class FormattedCellComponent extends HasStyle {
  set value(value) {
    if (value instanceof CustomDate) {
      this.formattedValue = `${value.month}/${value.day}/${value.year}`;
    } else {
      this.formattedValue = value.toString();
    }
  }
}
Object.defineProperty(FormattedCellComponent, "annotations", {get: function() {
    return [new Component({
      selector: 'formatted-cell',
      properties: {
        'width': 'cell-width',
        'value': 'value'
      }
    }), new View({
      directives: [],
      template: `<div [style]="style">{{formattedValue}}</div>`
    })];
  }});
//# sourceMappingURL=cells.js.map

//# sourceMappingURL=./cells.map