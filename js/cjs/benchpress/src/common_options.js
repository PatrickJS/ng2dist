"use strict";
Object.defineProperties(module.exports, {
  Options: {get: function() {
      return Options;
    }},
  __esModule: {value: true}
});
var $__angular2_47_di__,
    $__angular2_47_src_47_facade_47_lang__;
var $__0 = ($__angular2_47_di__ = require("angular2/di"), $__angular2_47_di__ && $__angular2_47_di__.__esModule && $__angular2_47_di__ || {default: $__angular2_47_di__}),
    bind = $__0.bind,
    OpaqueToken = $__0.OpaqueToken;
var DateWrapper = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}).DateWrapper;
var Options = function Options() {
  ;
};
($traceurRuntime.createClass)(Options, {}, {
  get DEFAULT_BINDINGS() {
    return _DEFAULT_BINDINGS;
  },
  get SAMPLE_ID() {
    return _SAMPLE_ID;
  },
  get DEFAULT_DESCRIPTION() {
    return _DEFAULT_DESCRIPTION;
  },
  get SAMPLE_DESCRIPTION() {
    return _SAMPLE_DESCRIPTION;
  },
  get FORCE_GC() {
    return _FORCE_GC;
  },
  get PREPARE() {
    return _PREPARE;
  },
  get EXECUTE() {
    return _EXECUTE;
  },
  get CAPABILITIES() {
    return _CAPABILITIES;
  },
  get USER_AGENT() {
    return _USER_AGENT;
  },
  get NOW() {
    return _NOW;
  },
  get WRITE_FILE() {
    return _WRITE_FILE;
  },
  get MICRO_METRICS() {
    return _MICRO_METRICS;
  }
});
var _SAMPLE_ID = new OpaqueToken('Options.sampleId');
var _DEFAULT_DESCRIPTION = new OpaqueToken('Options.defaultDescription');
var _SAMPLE_DESCRIPTION = new OpaqueToken('Options.sampleDescription');
var _FORCE_GC = new OpaqueToken('Options.forceGc');
var _PREPARE = new OpaqueToken('Options.prepare');
var _EXECUTE = new OpaqueToken('Options.execute');
var _CAPABILITIES = new OpaqueToken('Options.capabilities');
var _USER_AGENT = new OpaqueToken('Options.userAgent');
var _MICRO_METRICS = new OpaqueToken('Options.microMetrics');
var _NOW = new OpaqueToken('Options.now');
var _WRITE_FILE = new OpaqueToken('Options.writeFile');
var _DEFAULT_BINDINGS = [bind(_DEFAULT_DESCRIPTION).toValue({}), bind(_SAMPLE_DESCRIPTION).toValue({}), bind(_FORCE_GC).toValue(false), bind(_PREPARE).toValue(false), bind(_MICRO_METRICS).toValue({}), bind(_NOW).toValue((function() {
  return DateWrapper.now();
}))];
//# sourceMappingURL=common_options.js.map

//# sourceMappingURL=./common_options.map