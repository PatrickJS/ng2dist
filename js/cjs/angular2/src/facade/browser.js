/**
 * JS version of browser APIs. This library can only run in the browser.
 */
// HACK: workaround for Traceur behavior.
// It expects all transpiled modules to contain this marker.
// TODO: remove this when we no longer use traceur
exports.__esModule = true;
var win = window;
exports.window = win;
exports.document = window.document;
exports.location = window.location;
exports.gc = window.gc ? function () {
    return window.gc();
} : function () {
    return null;
};
//# sourceMappingURL=browser.js.map