module.exports=function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);var o=function(){return(0,this._self._c)("button",{staticClass:"x-button"},[this._t("default")],2)};o._withStripped=!0;function r(t,e,n,o,r,i,u,a){var s,l="function"==typeof t?t.options:t;if(e&&(l.render=e,l.staticRenderFns=n,l._compiled=!0),o&&(l.functional=!0),i&&(l._scopeId="data-v-"+i),u?(s=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(u)},l._ssrRegister=s):r&&(s=a?function(){r.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:r),s)if(l.functional){l._injectStyles=s;var c=l.render;l.render=function(t,e){return s.call(e),c(t,e)}}else{var f=l.beforeCreate;l.beforeCreate=f?[].concat(f,s):[s]}return{exports:t,options:l}}var i=r({name:"XButton"},o,[],!1,null,null,null);i.options.__file="packages/button/src/button.vue";var u=i.exports;u.install=function(t){t.component(u.name,u)};var a=u,s=function(){return(0,this._self._c)("input",{attrs:{type:"text"}})};s._withStripped=!0;var l=r({name:"XInput"},s,[],!1,null,"343dd774",null);l.options.__file="packages/input/src/input.vue";var c=l.exports;c.intall=function(t){t.component(c.name,c)};var f=c;const p=[a,f];e.default={install:function(t){console.log("你好世界"),p.forEach(e=>{t.component(e.name,e)})},Button:a,Input:f}}]);