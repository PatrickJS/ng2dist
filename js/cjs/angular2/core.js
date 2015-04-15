"use strict";
var $__src_47_core_47_annotations_47_visibility__,
    $__src_47_core_47_compiler_47_interfaces__,
    $__src_47_core_47_annotations_47_view__,
    $__src_47_core_47_application__,
    $__src_47_core_47_application_95_tokens__,
    $__src_47_core_47_annotations_47_di__,
    $__src_47_core_47_compiler_47_compiler__,
    $__angular2_47_src_47_render_47_dom_47_compiler_47_template_95_loader__,
    $__src_47_core_47_compiler_47_dynamic_95_component_95_loader__,
    $__src_47_core_47_compiler_47_element_95_injector__,
    $__src_47_core_47_compiler_47_view__,
    $__src_47_core_47_compiler_47_view_95_container__,
    $__src_47_core_47_compiler_47_ng_95_element__;
var $__src_47_core_47_annotations_47_visibility__ = ($__src_47_core_47_annotations_47_visibility__ = require("./src/core/annotations/visibility"), $__src_47_core_47_annotations_47_visibility__ && $__src_47_core_47_annotations_47_visibility__.__esModule && $__src_47_core_47_annotations_47_visibility__ || {default: $__src_47_core_47_annotations_47_visibility__});
var $__src_47_core_47_compiler_47_interfaces__ = ($__src_47_core_47_compiler_47_interfaces__ = require("./src/core/compiler/interfaces"), $__src_47_core_47_compiler_47_interfaces__ && $__src_47_core_47_compiler_47_interfaces__.__esModule && $__src_47_core_47_compiler_47_interfaces__ || {default: $__src_47_core_47_compiler_47_interfaces__});
var $__src_47_core_47_annotations_47_view__ = ($__src_47_core_47_annotations_47_view__ = require("./src/core/annotations/view"), $__src_47_core_47_annotations_47_view__ && $__src_47_core_47_annotations_47_view__.__esModule && $__src_47_core_47_annotations_47_view__ || {default: $__src_47_core_47_annotations_47_view__});
var $__src_47_core_47_application__ = ($__src_47_core_47_application__ = require("./src/core/application"), $__src_47_core_47_application__ && $__src_47_core_47_application__.__esModule && $__src_47_core_47_application__ || {default: $__src_47_core_47_application__});
var $__src_47_core_47_application_95_tokens__ = ($__src_47_core_47_application_95_tokens__ = require("./src/core/application_tokens"), $__src_47_core_47_application_95_tokens__ && $__src_47_core_47_application_95_tokens__.__esModule && $__src_47_core_47_application_95_tokens__ || {default: $__src_47_core_47_application_95_tokens__});
var $__src_47_core_47_annotations_47_di__ = ($__src_47_core_47_annotations_47_di__ = require("./src/core/annotations/di"), $__src_47_core_47_annotations_47_di__ && $__src_47_core_47_annotations_47_di__.__esModule && $__src_47_core_47_annotations_47_di__ || {default: $__src_47_core_47_annotations_47_di__});
var $__src_47_core_47_compiler_47_compiler__ = ($__src_47_core_47_compiler_47_compiler__ = require("./src/core/compiler/compiler"), $__src_47_core_47_compiler_47_compiler__ && $__src_47_core_47_compiler_47_compiler__.__esModule && $__src_47_core_47_compiler_47_compiler__ || {default: $__src_47_core_47_compiler_47_compiler__});
var $__angular2_47_src_47_render_47_dom_47_compiler_47_template_95_loader__ = ($__angular2_47_src_47_render_47_dom_47_compiler_47_template_95_loader__ = require("angular2/src/render/dom/compiler/template_loader"), $__angular2_47_src_47_render_47_dom_47_compiler_47_template_95_loader__ && $__angular2_47_src_47_render_47_dom_47_compiler_47_template_95_loader__.__esModule && $__angular2_47_src_47_render_47_dom_47_compiler_47_template_95_loader__ || {default: $__angular2_47_src_47_render_47_dom_47_compiler_47_template_95_loader__});
var $__src_47_core_47_compiler_47_dynamic_95_component_95_loader__ = ($__src_47_core_47_compiler_47_dynamic_95_component_95_loader__ = require("./src/core/compiler/dynamic_component_loader"), $__src_47_core_47_compiler_47_dynamic_95_component_95_loader__ && $__src_47_core_47_compiler_47_dynamic_95_component_95_loader__.__esModule && $__src_47_core_47_compiler_47_dynamic_95_component_95_loader__ || {default: $__src_47_core_47_compiler_47_dynamic_95_component_95_loader__});
var $__src_47_core_47_compiler_47_element_95_injector__ = ($__src_47_core_47_compiler_47_element_95_injector__ = require("./src/core/compiler/element_injector"), $__src_47_core_47_compiler_47_element_95_injector__ && $__src_47_core_47_compiler_47_element_95_injector__.__esModule && $__src_47_core_47_compiler_47_element_95_injector__ || {default: $__src_47_core_47_compiler_47_element_95_injector__});
var $__src_47_core_47_compiler_47_view__ = ($__src_47_core_47_compiler_47_view__ = require("./src/core/compiler/view"), $__src_47_core_47_compiler_47_view__ && $__src_47_core_47_compiler_47_view__.__esModule && $__src_47_core_47_compiler_47_view__ || {default: $__src_47_core_47_compiler_47_view__});
var $__src_47_core_47_compiler_47_view_95_container__ = ($__src_47_core_47_compiler_47_view_95_container__ = require("./src/core/compiler/view_container"), $__src_47_core_47_compiler_47_view_95_container__ && $__src_47_core_47_compiler_47_view_95_container__.__esModule && $__src_47_core_47_compiler_47_view_95_container__ || {default: $__src_47_core_47_compiler_47_view_95_container__});
var $__src_47_core_47_compiler_47_ng_95_element__ = ($__src_47_core_47_compiler_47_ng_95_element__ = require("./src/core/compiler/ng_element"), $__src_47_core_47_compiler_47_ng_95_element__ && $__src_47_core_47_compiler_47_ng_95_element__.__esModule && $__src_47_core_47_compiler_47_ng_95_element__ || {default: $__src_47_core_47_compiler_47_ng_95_element__});
module.exports = $traceurRuntime.exportStar({
  get ElementRef() {
    return $__src_47_core_47_compiler_47_element_95_injector__.ElementRef;
  },
  get ComponetRef() {
    return $__src_47_core_47_compiler_47_element_95_injector__.ComponetRef;
  },
  __esModule: true
}, $__src_47_core_47_annotations_47_visibility__, $__src_47_core_47_compiler_47_interfaces__, $__src_47_core_47_annotations_47_view__, $__src_47_core_47_application__, $__src_47_core_47_application_95_tokens__, $__src_47_core_47_annotations_47_di__, $__src_47_core_47_compiler_47_compiler__, $__angular2_47_src_47_render_47_dom_47_compiler_47_template_95_loader__, $__src_47_core_47_compiler_47_dynamic_95_component_95_loader__, $__src_47_core_47_compiler_47_view__, $__src_47_core_47_compiler_47_view_95_container__, $__src_47_core_47_compiler_47_ng_95_element__);
//# sourceMappingURL=core.js.map

//# sourceMappingURL=./core.map