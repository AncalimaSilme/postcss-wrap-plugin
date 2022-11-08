"use strict";var r;!function(r){r.replace="replace",r.remove="remove"}(r||(r={}));var t=/\b(html|body)\b/g,e=function(){function e(r){var t=this;this.postcssPlugin="postcss-wrap-plugin",this.Rule=function(r){t._checkIncludeCssRule(r)&&(r.selector=t._wrapCssRuleSelector(r.selector))},function(r){var t=r.wrapSelector,e=r.handleRootTags;if("string"!=typeof t&&!Array.isArray(t))throw new Error("postcss-wrap-plugin: wrapSelector option should be of type a string or an array.");if(!t.length)throw new Error("postcss-wrap-plugin: empty wrapSelector option.");if(e&&"string"!=typeof e)throw new Error("postcss-wrap-plugin: handleRootTags option incorrect type.")}(r);var e=r.wrapSelector,o=r.handleRootTags;this.wrapSelectors=Array.isArray(e)?e:[e],this.handleRootTags=o||null}return e.prototype._checkIncludeCssRule=function(r){return!this._checkIsCssRuleKeyframes(r)},e.prototype._checkIsCssRuleKeyframes=function(r){var t,e=r.parent;return!(!e||(t=e,"atrule"!==t.type))&&e.name.includes("keyframes")},e.prototype._isRootTag=function(r){return t.lastIndex=0,t.test(r)},e.prototype._addWrapToRootSelector=function(e){var o=this;return this.wrapSelectors.map((function(n){if(o.handleRootTags===r.remove)return n+e.replace(t,"");if(o.handleRootTags===r.replace)return n+"."+e;throw new Error("postcss-wrap-plugin: incorrect value for handleRootTags options")})).join(", ")},e.prototype._addWrapToSelector=function(r){return this.wrapSelectors.map((function(t){return t+" "+r})).join(", ")},e.prototype._wrapCSSSelector=function(r){return""===r?null:this._isRootTag(r)&&this.handleRootTags?this._addWrapToRootSelector(r):this._addWrapToSelector(r)},e.prototype._wrapCssRuleSelector=function(r){var t=this;return r.split(",").map((function(r){return t._wrapCSSSelector(r.trim())})).filter((function(r){return r})).join(", ")},e}(),o=function(r){return new e(r)};o.postcss=!0,module.exports=o;
//# sourceMappingURL=index.js.map
