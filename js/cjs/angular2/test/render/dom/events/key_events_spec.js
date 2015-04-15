'use strict'; var parse5Adapter = require('angular2/src/dom/parse5_adapter'); parse5Adapter.Parse5DomAdapter.makeCurrent();
Object.defineProperties(module.exports, {
  main: {get: function() {
      return main;
    }},
  __esModule: {value: true}
});
var $__angular2_47_test_95_lib__,
    $__angular2_47_src_47_render_47_dom_47_events_47_key_95_events__;
var $__0 = ($__angular2_47_test_95_lib__ = require("angular2/test_lib"), $__angular2_47_test_95_lib__ && $__angular2_47_test_95_lib__.__esModule && $__angular2_47_test_95_lib__ || {default: $__angular2_47_test_95_lib__}),
    describe = $__0.describe,
    ddescribe = $__0.ddescribe,
    it = $__0.it,
    iit = $__0.iit,
    xit = $__0.xit,
    xdescribe = $__0.xdescribe,
    expect = $__0.expect,
    beforeEach = $__0.beforeEach,
    el = $__0.el;
var KeyEventsPlugin = ($__angular2_47_src_47_render_47_dom_47_events_47_key_95_events__ = require("angular2/src/render/dom/events/key_events"), $__angular2_47_src_47_render_47_dom_47_events_47_key_95_events__ && $__angular2_47_src_47_render_47_dom_47_events_47_key_95_events__.__esModule && $__angular2_47_src_47_render_47_dom_47_events_47_key_95_events__ || {default: $__angular2_47_src_47_render_47_dom_47_events_47_key_95_events__}).KeyEventsPlugin;
function main() {
  describe('KeyEvents', (function() {
    it('should ignore unrecognized events', (function() {
      expect(KeyEventsPlugin.parseEventName('keydown')).toEqual(null);
      expect(KeyEventsPlugin.parseEventName('keyup')).toEqual(null);
      expect(KeyEventsPlugin.parseEventName('keydown.unknownmodifier.enter')).toEqual(null);
      expect(KeyEventsPlugin.parseEventName('keyup.unknownmodifier.enter')).toEqual(null);
      expect(KeyEventsPlugin.parseEventName('unknownevent.control.shift.enter')).toEqual(null);
      expect(KeyEventsPlugin.parseEventName('unknownevent.enter')).toEqual(null);
    }));
    it('should correctly parse event names', (function() {
      expect(KeyEventsPlugin.parseEventName('keydown.enter')).toEqual({
        'domEventName': 'keydown',
        'fullKey': 'enter'
      });
      expect(KeyEventsPlugin.parseEventName('keyup.enter')).toEqual({
        'domEventName': 'keyup',
        'fullKey': 'enter'
      });
      expect(KeyEventsPlugin.parseEventName('keydown.control.shift.enter')).toEqual({
        'domEventName': 'keydown',
        'fullKey': 'control.shift.enter'
      });
      expect(KeyEventsPlugin.parseEventName('keyup.control.shift.enter')).toEqual({
        'domEventName': 'keyup',
        'fullKey': 'control.shift.enter'
      });
      expect(KeyEventsPlugin.parseEventName('keydown.shift.control.enter')).toEqual({
        'domEventName': 'keydown',
        'fullKey': 'control.shift.enter'
      });
      expect(KeyEventsPlugin.parseEventName('keyup.shift.control.enter')).toEqual({
        'domEventName': 'keyup',
        'fullKey': 'control.shift.enter'
      });
      expect(KeyEventsPlugin.parseEventName('keydown.shift.control')).toEqual({
        'domEventName': 'keydown',
        'fullKey': 'shift.control'
      });
      expect(KeyEventsPlugin.parseEventName('keyup.shift.control')).toEqual({
        'domEventName': 'keyup',
        'fullKey': 'shift.control'
      });
      expect(KeyEventsPlugin.parseEventName('keydown.control.shift')).toEqual({
        'domEventName': 'keydown',
        'fullKey': 'control.shift'
      });
      expect(KeyEventsPlugin.parseEventName('keyup.control.shift')).toEqual({
        'domEventName': 'keyup',
        'fullKey': 'control.shift'
      });
    }));
  }));
}
//# sourceMappingURL=key_events_spec.js.map

//# sourceMappingURL=./key_events_spec.map
 main();