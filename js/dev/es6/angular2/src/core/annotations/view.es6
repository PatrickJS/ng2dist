import {ABSTRACT,
  CONST,
  Type} from 'angular2/src/facade/lang';
export class View {
  constructor({templateUrl,
    template,
    directives,
    formatters,
    source,
    locale,
    device}) {
    this.templateUrl = templateUrl;
    this.template = template;
    this.directives = directives;
    this.formatters = formatters;
    this.source = source;
    this.locale = locale;
    this.device = device;
  }
}
Object.defineProperty(View, "annotations", {get: function() {
    return [new CONST()];
  }});
//# sourceMappingURL=view.js.map

//# sourceMappingURL=./view.map