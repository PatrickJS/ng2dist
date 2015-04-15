System.register(["angular2/di", "angular2/src/facade/lang"], function($__export) {
  "use strict";
  var bind,
      OpaqueToken,
      DateWrapper,
      Options,
      _SAMPLE_ID,
      _DEFAULT_DESCRIPTION,
      _SAMPLE_DESCRIPTION,
      _FORCE_GC,
      _PREPARE,
      _EXECUTE,
      _CAPABILITIES,
      _USER_AGENT,
      _MICRO_METRICS,
      _NOW,
      _WRITE_FILE,
      _DEFAULT_BINDINGS;
  return {
    setters: [function($__m) {
      bind = $__m.bind;
      OpaqueToken = $__m.OpaqueToken;
    }, function($__m) {
      DateWrapper = $__m.DateWrapper;
    }],
    execute: function() {
      Options = $__export("Options", (function() {
        var Options = function Options() {
          ;
        };
        return ($traceurRuntime.createClass)(Options, {}, {
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
      }()));
      _SAMPLE_ID = new OpaqueToken('Options.sampleId');
      _DEFAULT_DESCRIPTION = new OpaqueToken('Options.defaultDescription');
      _SAMPLE_DESCRIPTION = new OpaqueToken('Options.sampleDescription');
      _FORCE_GC = new OpaqueToken('Options.forceGc');
      _PREPARE = new OpaqueToken('Options.prepare');
      _EXECUTE = new OpaqueToken('Options.execute');
      _CAPABILITIES = new OpaqueToken('Options.capabilities');
      _USER_AGENT = new OpaqueToken('Options.userAgent');
      _MICRO_METRICS = new OpaqueToken('Options.microMetrics');
      _NOW = new OpaqueToken('Options.now');
      _WRITE_FILE = new OpaqueToken('Options.writeFile');
      _DEFAULT_BINDINGS = [bind(_DEFAULT_DESCRIPTION).toValue({}), bind(_SAMPLE_DESCRIPTION).toValue({}), bind(_FORCE_GC).toValue(false), bind(_PREPARE).toValue(false), bind(_MICRO_METRICS).toValue({}), bind(_NOW).toValue((function() {
        return DateWrapper.now();
      }))];
    }
  };
});
//# sourceMappingURL=common_options.es6.map

//# sourceMappingURL=./common_options.js.map