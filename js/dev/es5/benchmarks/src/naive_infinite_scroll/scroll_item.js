System.register(["angular2/src/facade/lang", "angular2/src/reflection/reflection", "angular2/angular2", "angular2/src/facade/async", "angular2/src/facade/collection", "angular2/src/dom/dom_adapter", "angular2/src/facade/math", "./cells", "./common", "./random_data"], function($__export) {
  "use strict";
  var int,
      reflector,
      Component,
      Viewport,
      View,
      ViewContainer,
      Compiler,
      PromiseWrapper,
      ListWrapper,
      MapWrapper,
      DOM,
      Math,
      CompanyNameComponent,
      OpportunityNameComponent,
      OfferingNameComponent,
      StageButtonsComponent,
      AccountCellComponent,
      FormattedCellComponent,
      Offering,
      ITEM_HEIGHT,
      COMPANY_NAME_WIDTH,
      OPPORTUNITY_NAME_WIDTH,
      OFFERING_NAME_WIDTH,
      ACCOUNT_CELL_WIDTH,
      BASE_POINTS_WIDTH,
      KICKER_POINTS_WIDTH,
      STAGE_BUTTONS_WIDTH,
      BUNDLES_WIDTH,
      DUE_DATE_WIDTH,
      END_DATE_WIDTH,
      AAT_STATUS_WIDTH,
      generateOfferings,
      ScrollItemComponent;
  return {
    setters: [function($__m) {
      int = $__m.int;
    }, function($__m) {
      reflector = $__m.reflector;
    }, function($__m) {
      Component = $__m.Component;
      Viewport = $__m.Viewport;
      View = $__m.View;
      ViewContainer = $__m.ViewContainer;
      Compiler = $__m.Compiler;
    }, function($__m) {
      PromiseWrapper = $__m.PromiseWrapper;
    }, function($__m) {
      ListWrapper = $__m.ListWrapper;
      MapWrapper = $__m.MapWrapper;
    }, function($__m) {
      DOM = $__m.DOM;
    }, function($__m) {
      Math = $__m.Math;
    }, function($__m) {
      CompanyNameComponent = $__m.CompanyNameComponent;
      OpportunityNameComponent = $__m.OpportunityNameComponent;
      OfferingNameComponent = $__m.OfferingNameComponent;
      StageButtonsComponent = $__m.StageButtonsComponent;
      AccountCellComponent = $__m.AccountCellComponent;
      FormattedCellComponent = $__m.FormattedCellComponent;
    }, function($__m) {
      Offering = $__m.Offering;
      ITEM_HEIGHT = $__m.ITEM_HEIGHT;
      COMPANY_NAME_WIDTH = $__m.COMPANY_NAME_WIDTH;
      OPPORTUNITY_NAME_WIDTH = $__m.OPPORTUNITY_NAME_WIDTH;
      OFFERING_NAME_WIDTH = $__m.OFFERING_NAME_WIDTH;
      ACCOUNT_CELL_WIDTH = $__m.ACCOUNT_CELL_WIDTH;
      BASE_POINTS_WIDTH = $__m.BASE_POINTS_WIDTH;
      KICKER_POINTS_WIDTH = $__m.KICKER_POINTS_WIDTH;
      STAGE_BUTTONS_WIDTH = $__m.STAGE_BUTTONS_WIDTH;
      BUNDLES_WIDTH = $__m.BUNDLES_WIDTH;
      DUE_DATE_WIDTH = $__m.DUE_DATE_WIDTH;
      END_DATE_WIDTH = $__m.END_DATE_WIDTH;
      AAT_STATUS_WIDTH = $__m.AAT_STATUS_WIDTH;
    }, function($__m) {
      generateOfferings = $__m.generateOfferings;
    }],
    execute: function() {
      ScrollItemComponent = $__export("ScrollItemComponent", (function() {
        var ScrollItemComponent = function ScrollItemComponent() {
          this.itemStyle = MapWrapper.createFromPairs([['height', (ITEM_HEIGHT + "px")], ['line-height', (ITEM_HEIGHT + "px")], ['font-size', '18px'], ['display', 'flex'], ['justify-content', 'space-between']]);
        };
        return ($traceurRuntime.createClass)(ScrollItemComponent, {
          get companyNameWidth() {
            return (COMPANY_NAME_WIDTH + "px");
          },
          get opportunityNameWidth() {
            return (OPPORTUNITY_NAME_WIDTH + "px");
          },
          get offeringNameWidth() {
            return (OFFERING_NAME_WIDTH + "px");
          },
          get accountCellWidth() {
            return (ACCOUNT_CELL_WIDTH + "px");
          },
          get basePointsWidth() {
            return (BASE_POINTS_WIDTH + "px");
          },
          get kickerPointsWidth() {
            return (KICKER_POINTS_WIDTH + "px");
          },
          get stageButtonsWidth() {
            return (STAGE_BUTTONS_WIDTH + "px");
          },
          get bundlesWidth() {
            return (BUNDLES_WIDTH + "px");
          },
          get dueDateWidth() {
            return (DUE_DATE_WIDTH + "px");
          },
          get endDateWidth() {
            return (END_DATE_WIDTH + "px");
          },
          get aatStatusWidth() {
            return (AAT_STATUS_WIDTH + "px");
          }
        }, {});
      }()));
      Object.defineProperty(ScrollItemComponent, "annotations", {get: function() {
          return [new Component({
            selector: 'scroll-item',
            properties: {'offering': 'offering'}
          }), new View({
            directives: [CompanyNameComponent, OpportunityNameComponent, OfferingNameComponent, StageButtonsComponent, AccountCellComponent, FormattedCellComponent],
            template: "\n    <div class=\"row\" [style]=\"itemStyle\">\n        <company-name [company]=\"offering.company\"\n                      [cell-width]=\"companyNameWidth\">\n        </company-name>\n        <opportunity-name [opportunity]=\"offering.opportunity\"\n                          [cell-width]=\"opportunityNameWidth\">\n        </opportunity-name>\n        <offering-name [offering]=\"offering\"\n                       [cell-width]=\"offeringNameWidth\">\n        </offering-name>\n        <account-cell [account]=\"offering.account\"\n                      [cell-width]=\"accountCellWidth\">\n        </account-cell>\n        <formatted-cell [value]=\"offering.basePoints\"\n                        [cell-width]=\"basePointsWidth\">\n        </formatted-cell>\n        <formatted-cell [value]=\"offering.kickerPoints\"\n                        [cell-width]=\"kickerPointsWidth\">\n        </formatted-cell>\n        <stage-buttons [offering]=\"offering\"\n                       [cell-width]=\"stageButtonsWidth\">\n        </stage-buttons>\n        <formatted-cell [value]=\"offering.bundles\"\n                        [cell-width]=\"bundlesWidth\">\n        </formatted-cell>\n        <formatted-cell [value]=\"offering.dueDate\"\n                        [cell-width]=\"dueDateWidth\">\n        </formatted-cell>\n        <formatted-cell [value]=\"offering.endDate\"\n                        [cell-width]=\"endDateWidth\">\n        </formatted-cell>\n        <formatted-cell [value]=\"offering.aatStatus\"\n                        [cell-width]=\"aatStatusWidth\">\n        </formatted-cell>\n    </div>"
          })];
        }});
    }
  };
});
//# sourceMappingURL=scroll_item.es6.map

//# sourceMappingURL=./scroll_item.js.map