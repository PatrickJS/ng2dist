System.register(["angular2/src/facade/collection", "angular2/di", "../validator", "../measure_values"], function($__export) {
  "use strict";
  var List,
      ListWrapper,
      StringMap,
      bind,
      OpaqueToken,
      Validator,
      MeasureValues,
      SizeValidator,
      _SAMPLE_SIZE,
      _BINDINGS;
  return {
    setters: [function($__m) {
      List = $__m.List;
      ListWrapper = $__m.ListWrapper;
      StringMap = $__m.StringMap;
    }, function($__m) {
      bind = $__m.bind;
      OpaqueToken = $__m.OpaqueToken;
    }, function($__m) {
      Validator = $__m.Validator;
    }, function($__m) {
      MeasureValues = $__m.MeasureValues;
    }],
    execute: function() {
      SizeValidator = $__export("SizeValidator", (function($__super) {
        var SizeValidator = function SizeValidator(size) {
          $traceurRuntime.superConstructor(SizeValidator).call(this);
          this._sampleSize = size;
        };
        return ($traceurRuntime.createClass)(SizeValidator, {
          describe: function() {
            return {'sampleSize': this._sampleSize};
          },
          validate: function(completeSample) {
            if (completeSample.length >= this._sampleSize) {
              return ListWrapper.slice(completeSample, completeSample.length - this._sampleSize, completeSample.length);
            } else {
              return null;
            }
          }
        }, {
          get BINDINGS() {
            return _BINDINGS;
          },
          get SAMPLE_SIZE() {
            return _SAMPLE_SIZE;
          }
        }, $__super);
      }(Validator)));
      Object.defineProperty(SizeValidator.prototype.validate, "parameters", {get: function() {
          return [[assert.genericType(List, MeasureValues)]];
        }});
      _SAMPLE_SIZE = new OpaqueToken('SizeValidator.sampleSize');
      _BINDINGS = [bind(SizeValidator).toFactory((function(size) {
        return new SizeValidator(size);
      }), [_SAMPLE_SIZE]), bind(_SAMPLE_SIZE).toValue(10)];
    }
  };
});
//# sourceMappingURL=size_validator.es6.map

//# sourceMappingURL=./size_validator.js.map