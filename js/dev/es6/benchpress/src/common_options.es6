import {bind,
  OpaqueToken} from 'angular2/di';
import {DateWrapper} from 'angular2/src/facade/lang';
export class Options {
  static get DEFAULT_BINDINGS() {
    return _DEFAULT_BINDINGS;
  }
  static get SAMPLE_ID() {
    return _SAMPLE_ID;
  }
  static get DEFAULT_DESCRIPTION() {
    return _DEFAULT_DESCRIPTION;
  }
  static get SAMPLE_DESCRIPTION() {
    return _SAMPLE_DESCRIPTION;
  }
  static get FORCE_GC() {
    return _FORCE_GC;
  }
  static get PREPARE() {
    return _PREPARE;
  }
  static get EXECUTE() {
    return _EXECUTE;
  }
  static get CAPABILITIES() {
    return _CAPABILITIES;
  }
  static get USER_AGENT() {
    return _USER_AGENT;
  }
  static get NOW() {
    return _NOW;
  }
  static get WRITE_FILE() {
    return _WRITE_FILE;
  }
  static get MICRO_METRICS() {
    return _MICRO_METRICS;
  }
}
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
var _DEFAULT_BINDINGS = [bind(_DEFAULT_DESCRIPTION).toValue({}), bind(_SAMPLE_DESCRIPTION).toValue({}), bind(_FORCE_GC).toValue(false), bind(_PREPARE).toValue(false), bind(_MICRO_METRICS).toValue({}), bind(_NOW).toValue(() => DateWrapper.now())];
//# sourceMappingURL=common_options.js.map

//# sourceMappingURL=./common_options.map