(self["webpackChunklawtalized"]=self["webpackChunklawtalized"]||[]).push([[998],{1001:function(t,e,n){"use strict";function a(t,e,n,a,r,i,o,s){var l,c="function"===typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),a&&(c.functional=!0),i&&(c._scopeId="data-v-"+i),o?(l=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},c._ssrRegister=l):r&&(l=s?function(){r.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:r),l)if(c.functional){c._injectStyles=l;var u=c.render;c.render=function(t,e){return l.call(e),u(t,e)}}else{var h=c.beforeCreate;c.beforeCreate=h?[].concat(h,l):[l]}return{exports:t,options:c}}n.d(e,{Z:function(){return a}})},9662:function(t,e,n){var a=n(614),r=n(6330),i=TypeError;t.exports=function(t){if(a(t))return t;throw i(r(t)+" is not a function")}},6077:function(t,e,n){var a=n(614),r=String,i=TypeError;t.exports=function(t){if("object"==typeof t||a(t))return t;throw i("Can't set "+r(t)+" as a prototype")}},1223:function(t,e,n){var a=n(5112),r=n(30),i=n(3070).f,o=a("unscopables"),s=Array.prototype;void 0==s[o]&&i(s,o,{configurable:!0,value:r(null)}),t.exports=function(t){s[o][t]=!0}},5787:function(t,e,n){var a=n(7976),r=TypeError;t.exports=function(t,e){if(a(e,t))return t;throw r("Incorrect invocation")}},9670:function(t,e,n){var a=n(111),r=String,i=TypeError;t.exports=function(t){if(a(t))return t;throw i(r(t)+" is not an object")}},4019:function(t){t.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},260:function(t,e,n){"use strict";var a,r,i,o=n(4019),s=n(9781),l=n(7854),c=n(614),u=n(111),h=n(2597),d=n(648),f=n(6330),p=n(8880),v=n(8052),m=n(3070).f,g=n(7976),b=n(9518),y=n(7674),z=n(5112),w=n(9711),M=l.Int8Array,V=M&&M.prototype,A=l.Uint8ClampedArray,H=A&&A.prototype,C=M&&b(M),O=V&&b(V),I=Object.prototype,S=l.TypeError,B=z("toStringTag"),T=w("TYPED_ARRAY_TAG"),L=w("TYPED_ARRAY_CONSTRUCTOR"),k=o&&!!y&&"Opera"!==d(l.opera),E=!1,P={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},F={BigInt64Array:8,BigUint64Array:8},_=function(t){if(!u(t))return!1;var e=d(t);return"DataView"===e||h(P,e)||h(F,e)},D=function(t){if(!u(t))return!1;var e=d(t);return h(P,e)||h(F,e)},x=function(t){if(D(t))return t;throw S("Target is not a typed array")},j=function(t){if(c(t)&&(!y||g(C,t)))return t;throw S(f(t)+" is not a typed array constructor")},N=function(t,e,n,a){if(s){if(n)for(var r in P){var i=l[r];if(i&&h(i.prototype,t))try{delete i.prototype[t]}catch(o){try{i.prototype[t]=e}catch(c){}}}O[t]&&!n||v(O,t,n?e:k&&V[t]||e,a)}},R=function(t,e,n){var a,r;if(s){if(y){if(n)for(a in P)if(r=l[a],r&&h(r,t))try{delete r[t]}catch(i){}if(C[t]&&!n)return;try{return v(C,t,n?e:k&&C[t]||e)}catch(i){}}for(a in P)r=l[a],!r||r[t]&&!n||v(r,t,e)}};for(a in P)r=l[a],i=r&&r.prototype,i?p(i,L,r):k=!1;for(a in F)r=l[a],i=r&&r.prototype,i&&p(i,L,r);if((!k||!c(C)||C===Function.prototype)&&(C=function(){throw S("Incorrect invocation")},k))for(a in P)l[a]&&y(l[a],C);if((!k||!O||O===I)&&(O=C.prototype,k))for(a in P)l[a]&&y(l[a].prototype,O);if(k&&b(H)!==O&&y(H,O),s&&!h(O,B))for(a in E=!0,m(O,B,{get:function(){return u(this)?this[T]:void 0}}),P)l[a]&&p(l[a],T,a);t.exports={NATIVE_ARRAY_BUFFER_VIEWS:k,TYPED_ARRAY_CONSTRUCTOR:L,TYPED_ARRAY_TAG:E&&T,aTypedArray:x,aTypedArrayConstructor:j,exportTypedArrayMethod:N,exportTypedArrayStaticMethod:R,isView:_,isTypedArray:D,TypedArray:C,TypedArrayPrototype:O}},1318:function(t,e,n){var a=n(5656),r=n(1400),i=n(6244),o=function(t){return function(e,n,o){var s,l=a(e),c=i(l),u=r(o,c);if(t&&n!=n){while(c>u)if(s=l[u++],s!=s)return!0}else for(;c>u;u++)if((t||u in l)&&l[u]===n)return t||u||0;return!t&&-1}};t.exports={includes:o(!0),indexOf:o(!1)}},206:function(t,e,n){var a=n(1702);t.exports=a([].slice)},4326:function(t,e,n){var a=n(1702),r=a({}.toString),i=a("".slice);t.exports=function(t){return i(r(t),8,-1)}},648:function(t,e,n){var a=n(1694),r=n(614),i=n(4326),o=n(5112),s=o("toStringTag"),l=Object,c="Arguments"==i(function(){return arguments}()),u=function(t,e){try{return t[e]}catch(n){}};t.exports=a?i:function(t){var e,n,a;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=u(e=l(t),s))?n:c?i(e):"Object"==(a=i(e))&&r(e.callee)?"Arguments":a}},7741:function(t,e,n){var a=n(1702),r=Error,i=a("".replace),o=function(t){return String(r(t).stack)}("zxcasd"),s=/\n\s*at [^:]*:[^\n]*/,l=s.test(o);t.exports=function(t,e){if(l&&"string"==typeof t&&!r.prepareStackTrace)while(e--)t=i(t,s,"");return t}},9920:function(t,e,n){var a=n(2597),r=n(3887),i=n(1236),o=n(3070);t.exports=function(t,e,n){for(var s=r(e),l=o.f,c=i.f,u=0;u<s.length;u++){var h=s[u];a(t,h)||n&&a(n,h)||l(t,h,c(e,h))}}},8544:function(t,e,n){var a=n(7293);t.exports=!a((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},8880:function(t,e,n){var a=n(9781),r=n(3070),i=n(9114);t.exports=a?function(t,e,n){return r.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},9114:function(t){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},8052:function(t,e,n){var a=n(614),r=n(8880),i=n(6339),o=n(3072);t.exports=function(t,e,n,s){s||(s={});var l=s.enumerable,c=void 0!==s.name?s.name:e;return a(n)&&i(n,c,s),s.global?l?t[e]=n:o(e,n):(s.unsafe?t[e]&&(l=!0):delete t[e],l?t[e]=n:r(t,e,n)),t}},3072:function(t,e,n){var a=n(7854),r=Object.defineProperty;t.exports=function(t,e){try{r(a,t,{value:e,configurable:!0,writable:!0})}catch(n){a[t]=e}return e}},9781:function(t,e,n){var a=n(7293);t.exports=!a((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:function(t,e,n){var a=n(7854),r=n(111),i=a.document,o=r(i)&&r(i.createElement);t.exports=function(t){return o?i.createElement(t):{}}},3678:function(t){t.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},6833:function(t,e,n){var a=n(8113);t.exports=/(?:ipad|iphone|ipod).*applewebkit/i.test(a)},5268:function(t,e,n){var a=n(4326),r=n(7854);t.exports="process"==a(r.process)},8113:function(t,e,n){var a=n(5005);t.exports=a("navigator","userAgent")||""},7392:function(t,e,n){var a,r,i=n(7854),o=n(8113),s=i.process,l=i.Deno,c=s&&s.versions||l&&l.version,u=c&&c.v8;u&&(a=u.split("."),r=a[0]>0&&a[0]<4?1:+(a[0]+a[1])),!r&&o&&(a=o.match(/Edge\/(\d+)/),(!a||a[1]>=74)&&(a=o.match(/Chrome\/(\d+)/),a&&(r=+a[1]))),t.exports=r},748:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2914:function(t,e,n){var a=n(7293),r=n(9114);t.exports=!a((function(){var t=Error("a");return!("stack"in t)||(Object.defineProperty(t,"stack",r(1,7)),7!==t.stack)}))},2109:function(t,e,n){var a=n(7854),r=n(1236).f,i=n(8880),o=n(8052),s=n(3072),l=n(9920),c=n(4705);t.exports=function(t,e){var n,u,h,d,f,p,v=t.target,m=t.global,g=t.stat;if(u=m?a:g?a[v]||s(v,{}):(a[v]||{}).prototype,u)for(h in e){if(f=e[h],t.dontCallGetSet?(p=r(u,h),d=p&&p.value):d=u[h],n=c(m?h:v+(g?".":"#")+h,t.forced),!n&&void 0!==d){if(typeof f==typeof d)continue;l(f,d)}(t.sham||d&&d.sham)&&i(f,"sham",!0),o(u,h,f,t)}}},7293:function(t){t.exports=function(t){try{return!!t()}catch(e){return!0}}},2104:function(t,e,n){var a=n(4374),r=Function.prototype,i=r.apply,o=r.call;t.exports="object"==typeof Reflect&&Reflect.apply||(a?o.bind(i):function(){return o.apply(i,arguments)})},9974:function(t,e,n){var a=n(1702),r=n(9662),i=n(4374),o=a(a.bind);t.exports=function(t,e){return r(t),void 0===e?t:i?o(t,e):function(){return t.apply(e,arguments)}}},4374:function(t,e,n){var a=n(7293);t.exports=!a((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},6916:function(t,e,n){var a=n(4374),r=Function.prototype.call;t.exports=a?r.bind(r):function(){return r.apply(r,arguments)}},6530:function(t,e,n){var a=n(9781),r=n(2597),i=Function.prototype,o=a&&Object.getOwnPropertyDescriptor,s=r(i,"name"),l=s&&"something"===function(){}.name,c=s&&(!a||a&&o(i,"name").configurable);t.exports={EXISTS:s,PROPER:l,CONFIGURABLE:c}},1702:function(t,e,n){var a=n(4374),r=Function.prototype,i=r.bind,o=r.call,s=a&&i.bind(o,o);t.exports=a?function(t){return t&&s(t)}:function(t){return t&&function(){return o.apply(t,arguments)}}},5005:function(t,e,n){var a=n(7854),r=n(614),i=function(t){return r(t)?t:void 0};t.exports=function(t,e){return arguments.length<2?i(a[t]):a[t]&&a[t][e]}},8173:function(t,e,n){var a=n(9662);t.exports=function(t,e){var n=t[e];return null==n?void 0:a(n)}},7854:function(t,e,n){var a=function(t){return t&&t.Math==Math&&t};t.exports=a("object"==typeof globalThis&&globalThis)||a("object"==typeof window&&window)||a("object"==typeof self&&self)||a("object"==typeof n.g&&n.g)||function(){return this}()||Function("return this")()},2597:function(t,e,n){var a=n(1702),r=n(7908),i=a({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,e){return i(r(t),e)}},3501:function(t){t.exports={}},490:function(t,e,n){var a=n(5005);t.exports=a("document","documentElement")},4664:function(t,e,n){var a=n(9781),r=n(7293),i=n(317);t.exports=!a&&!r((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},8361:function(t,e,n){var a=n(1702),r=n(7293),i=n(4326),o=Object,s=a("".split);t.exports=r((function(){return!o("z").propertyIsEnumerable(0)}))?function(t){return"String"==i(t)?s(t,""):o(t)}:o},9587:function(t,e,n){var a=n(614),r=n(111),i=n(7674);t.exports=function(t,e,n){var o,s;return i&&a(o=e.constructor)&&o!==n&&r(s=o.prototype)&&s!==n.prototype&&i(t,s),t}},2788:function(t,e,n){var a=n(1702),r=n(614),i=n(5465),o=a(Function.toString);r(i.inspectSource)||(i.inspectSource=function(t){return o(t)}),t.exports=i.inspectSource},8340:function(t,e,n){var a=n(111),r=n(8880);t.exports=function(t,e){a(e)&&"cause"in e&&r(t,"cause",e.cause)}},9909:function(t,e,n){var a,r,i,o=n(8536),s=n(7854),l=n(1702),c=n(111),u=n(8880),h=n(2597),d=n(5465),f=n(6200),p=n(3501),v="Object already initialized",m=s.TypeError,g=s.WeakMap,b=function(t){return i(t)?r(t):a(t,{})},y=function(t){return function(e){var n;if(!c(e)||(n=r(e)).type!==t)throw m("Incompatible receiver, "+t+" required");return n}};if(o||d.state){var z=d.state||(d.state=new g),w=l(z.get),M=l(z.has),V=l(z.set);a=function(t,e){if(M(z,t))throw new m(v);return e.facade=t,V(z,t,e),e},r=function(t){return w(z,t)||{}},i=function(t){return M(z,t)}}else{var A=f("state");p[A]=!0,a=function(t,e){if(h(t,A))throw new m(v);return e.facade=t,u(t,A,e),e},r=function(t){return h(t,A)?t[A]:{}},i=function(t){return h(t,A)}}t.exports={set:a,get:r,has:i,enforce:b,getterFor:y}},614:function(t){t.exports=function(t){return"function"==typeof t}},4705:function(t,e,n){var a=n(7293),r=n(614),i=/#|\.prototype\./,o=function(t,e){var n=l[s(t)];return n==u||n!=c&&(r(e)?a(e):!!e)},s=o.normalize=function(t){return String(t).replace(i,".").toLowerCase()},l=o.data={},c=o.NATIVE="N",u=o.POLYFILL="P";t.exports=o},111:function(t,e,n){var a=n(614);t.exports=function(t){return"object"==typeof t?null!==t:a(t)}},1913:function(t){t.exports=!1},2190:function(t,e,n){var a=n(5005),r=n(614),i=n(7976),o=n(3307),s=Object;t.exports=o?function(t){return"symbol"==typeof t}:function(t){var e=a("Symbol");return r(e)&&i(e.prototype,s(t))}},6244:function(t,e,n){var a=n(7466);t.exports=function(t){return a(t.length)}},6339:function(t,e,n){var a=n(7293),r=n(614),i=n(2597),o=n(9781),s=n(6530).CONFIGURABLE,l=n(2788),c=n(9909),u=c.enforce,h=c.get,d=Object.defineProperty,f=o&&!a((function(){return 8!==d((function(){}),"length",{value:8}).length})),p=String(String).split("String"),v=t.exports=function(t,e,n){"Symbol("===String(e).slice(0,7)&&(e="["+String(e).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(e="get "+e),n&&n.setter&&(e="set "+e),(!i(t,"name")||s&&t.name!==e)&&d(t,"name",{value:e,configurable:!0}),f&&n&&i(n,"arity")&&t.length!==n.arity&&d(t,"length",{value:n.arity});try{n&&i(n,"constructor")&&n.constructor?o&&d(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(r){}var a=u(t);return i(a,"source")||(a.source=p.join("string"==typeof e?e:"")),t};Function.prototype.toString=v((function(){return r(this)&&h(this).source||l(this)}),"toString")},4758:function(t){var e=Math.ceil,n=Math.floor;t.exports=Math.trunc||function(t){var a=+t;return(a>0?n:e)(a)}},133:function(t,e,n){var a=n(7392),r=n(7293);t.exports=!!Object.getOwnPropertySymbols&&!r((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&a&&a<41}))},8536:function(t,e,n){var a=n(7854),r=n(614),i=n(2788),o=a.WeakMap;t.exports=r(o)&&/native code/.test(i(o))},6277:function(t,e,n){var a=n(1340);t.exports=function(t,e){return void 0===t?arguments.length<2?"":e:a(t)}},30:function(t,e,n){var a,r=n(9670),i=n(6048),o=n(748),s=n(3501),l=n(490),c=n(317),u=n(6200),h=">",d="<",f="prototype",p="script",v=u("IE_PROTO"),m=function(){},g=function(t){return d+p+h+t+d+"/"+p+h},b=function(t){t.write(g("")),t.close();var e=t.parentWindow.Object;return t=null,e},y=function(){var t,e=c("iframe"),n="java"+p+":";return e.style.display="none",l.appendChild(e),e.src=String(n),t=e.contentWindow.document,t.open(),t.write(g("document.F=Object")),t.close(),t.F},z=function(){try{a=new ActiveXObject("htmlfile")}catch(e){}z="undefined"!=typeof document?document.domain&&a?b(a):y():b(a);var t=o.length;while(t--)delete z[f][o[t]];return z()};s[v]=!0,t.exports=Object.create||function(t,e){var n;return null!==t?(m[f]=r(t),n=new m,m[f]=null,n[v]=t):n=z(),void 0===e?n:i.f(n,e)}},6048:function(t,e,n){var a=n(9781),r=n(3353),i=n(3070),o=n(9670),s=n(5656),l=n(1956);e.f=a&&!r?Object.defineProperties:function(t,e){o(t);var n,a=s(e),r=l(e),c=r.length,u=0;while(c>u)i.f(t,n=r[u++],a[n]);return t}},3070:function(t,e,n){var a=n(9781),r=n(4664),i=n(3353),o=n(9670),s=n(4948),l=TypeError,c=Object.defineProperty,u=Object.getOwnPropertyDescriptor,h="enumerable",d="configurable",f="writable";e.f=a?i?function(t,e,n){if(o(t),e=s(e),o(n),"function"===typeof t&&"prototype"===e&&"value"in n&&f in n&&!n[f]){var a=u(t,e);a&&a[f]&&(t[e]=n.value,n={configurable:d in n?n[d]:a[d],enumerable:h in n?n[h]:a[h],writable:!1})}return c(t,e,n)}:c:function(t,e,n){if(o(t),e=s(e),o(n),r)try{return c(t,e,n)}catch(a){}if("get"in n||"set"in n)throw l("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},1236:function(t,e,n){var a=n(9781),r=n(6916),i=n(5296),o=n(9114),s=n(5656),l=n(4948),c=n(2597),u=n(4664),h=Object.getOwnPropertyDescriptor;e.f=a?h:function(t,e){if(t=s(t),e=l(e),u)try{return h(t,e)}catch(n){}if(c(t,e))return o(!r(i.f,t,e),t[e])}},8006:function(t,e,n){var a=n(6324),r=n(748),i=r.concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return a(t,i)}},5181:function(t,e){e.f=Object.getOwnPropertySymbols},9518:function(t,e,n){var a=n(2597),r=n(614),i=n(7908),o=n(6200),s=n(8544),l=o("IE_PROTO"),c=Object,u=c.prototype;t.exports=s?c.getPrototypeOf:function(t){var e=i(t);if(a(e,l))return e[l];var n=e.constructor;return r(n)&&e instanceof n?n.prototype:e instanceof c?u:null}},7976:function(t,e,n){var a=n(1702);t.exports=a({}.isPrototypeOf)},6324:function(t,e,n){var a=n(1702),r=n(2597),i=n(5656),o=n(1318).indexOf,s=n(3501),l=a([].push);t.exports=function(t,e){var n,a=i(t),c=0,u=[];for(n in a)!r(s,n)&&r(a,n)&&l(u,n);while(e.length>c)r(a,n=e[c++])&&(~o(u,n)||l(u,n));return u}},1956:function(t,e,n){var a=n(6324),r=n(748);t.exports=Object.keys||function(t){return a(t,r)}},5296:function(t,e){"use strict";var n={}.propertyIsEnumerable,a=Object.getOwnPropertyDescriptor,r=a&&!n.call({1:2},1);e.f=r?function(t){var e=a(this,t);return!!e&&e.enumerable}:n},7674:function(t,e,n){var a=n(1702),r=n(9670),i=n(6077);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{t=a(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set),t(n,[]),e=n instanceof Array}catch(o){}return function(n,a){return r(n),i(a),e?t(n,a):n.__proto__=a,n}}():void 0)},2140:function(t,e,n){var a=n(6916),r=n(614),i=n(111),o=TypeError;t.exports=function(t,e){var n,s;if("string"===e&&r(n=t.toString)&&!i(s=a(n,t)))return s;if(r(n=t.valueOf)&&!i(s=a(n,t)))return s;if("string"!==e&&r(n=t.toString)&&!i(s=a(n,t)))return s;throw o("Can't convert object to primitive value")}},3887:function(t,e,n){var a=n(5005),r=n(1702),i=n(8006),o=n(5181),s=n(9670),l=r([].concat);t.exports=a("Reflect","ownKeys")||function(t){var e=i.f(s(t)),n=o.f;return n?l(e,n(t)):e}},2626:function(t,e,n){var a=n(3070).f;t.exports=function(t,e,n){n in t||a(t,n,{configurable:!0,get:function(){return e[n]},set:function(t){e[n]=t}})}},4488:function(t){var e=TypeError;t.exports=function(t){if(void 0==t)throw e("Can't call method on "+t);return t}},6200:function(t,e,n){var a=n(2309),r=n(9711),i=a("keys");t.exports=function(t){return i[t]||(i[t]=r(t))}},5465:function(t,e,n){var a=n(7854),r=n(3072),i="__core-js_shared__",o=a[i]||r(i,{});t.exports=o},2309:function(t,e,n){var a=n(1913),r=n(5465);(t.exports=function(t,e){return r[t]||(r[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.22.8",mode:a?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.22.8/LICENSE",source:"https://github.com/zloirock/core-js"})},261:function(t,e,n){var a,r,i,o,s=n(7854),l=n(2104),c=n(9974),u=n(614),h=n(2597),d=n(7293),f=n(490),p=n(206),v=n(317),m=n(8053),g=n(6833),b=n(5268),y=s.setImmediate,z=s.clearImmediate,w=s.process,M=s.Dispatch,V=s.Function,A=s.MessageChannel,H=s.String,C=0,O={},I="onreadystatechange";try{a=s.location}catch(k){}var S=function(t){if(h(O,t)){var e=O[t];delete O[t],e()}},B=function(t){return function(){S(t)}},T=function(t){S(t.data)},L=function(t){s.postMessage(H(t),a.protocol+"//"+a.host)};y&&z||(y=function(t){m(arguments.length,1);var e=u(t)?t:V(t),n=p(arguments,1);return O[++C]=function(){l(e,void 0,n)},r(C),C},z=function(t){delete O[t]},b?r=function(t){w.nextTick(B(t))}:M&&M.now?r=function(t){M.now(B(t))}:A&&!g?(i=new A,o=i.port2,i.port1.onmessage=T,r=c(o.postMessage,o)):s.addEventListener&&u(s.postMessage)&&!s.importScripts&&a&&"file:"!==a.protocol&&!d(L)?(r=L,s.addEventListener("message",T,!1)):r=I in v("script")?function(t){f.appendChild(v("script"))[I]=function(){f.removeChild(this),S(t)}}:function(t){setTimeout(B(t),0)}),t.exports={set:y,clear:z}},1400:function(t,e,n){var a=n(9303),r=Math.max,i=Math.min;t.exports=function(t,e){var n=a(t);return n<0?r(n+e,0):i(n,e)}},5656:function(t,e,n){var a=n(8361),r=n(4488);t.exports=function(t){return a(r(t))}},9303:function(t,e,n){var a=n(4758);t.exports=function(t){var e=+t;return e!==e||0===e?0:a(e)}},7466:function(t,e,n){var a=n(9303),r=Math.min;t.exports=function(t){return t>0?r(a(t),9007199254740991):0}},7908:function(t,e,n){var a=n(4488),r=Object;t.exports=function(t){return r(a(t))}},4590:function(t,e,n){var a=n(3002),r=RangeError;t.exports=function(t,e){var n=a(t);if(n%e)throw r("Wrong offset");return n}},3002:function(t,e,n){var a=n(9303),r=RangeError;t.exports=function(t){var e=a(t);if(e<0)throw r("The argument can't be less than 0");return e}},7593:function(t,e,n){var a=n(6916),r=n(111),i=n(2190),o=n(8173),s=n(2140),l=n(5112),c=TypeError,u=l("toPrimitive");t.exports=function(t,e){if(!r(t)||i(t))return t;var n,l=o(t,u);if(l){if(void 0===e&&(e="default"),n=a(l,t,e),!r(n)||i(n))return n;throw c("Can't convert object to primitive value")}return void 0===e&&(e="number"),s(t,e)}},4948:function(t,e,n){var a=n(7593),r=n(2190);t.exports=function(t){var e=a(t,"string");return r(e)?e:e+""}},1694:function(t,e,n){var a=n(5112),r=a("toStringTag"),i={};i[r]="z",t.exports="[object z]"===String(i)},1340:function(t,e,n){var a=n(648),r=String;t.exports=function(t){if("Symbol"===a(t))throw TypeError("Cannot convert a Symbol value to a string");return r(t)}},6330:function(t){var e=String;t.exports=function(t){try{return e(t)}catch(n){return"Object"}}},9711:function(t,e,n){var a=n(1702),r=0,i=Math.random(),o=a(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+o(++r+i,36)}},3307:function(t,e,n){var a=n(133);t.exports=a&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:function(t,e,n){var a=n(9781),r=n(7293);t.exports=a&&r((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},8053:function(t){var e=TypeError;t.exports=function(t,n){if(t<n)throw e("Not enough arguments");return t}},5112:function(t,e,n){var a=n(7854),r=n(2309),i=n(2597),o=n(9711),s=n(133),l=n(3307),c=r("wks"),u=a.Symbol,h=u&&u["for"],d=l?u:u&&u.withoutSetter||o;t.exports=function(t){if(!i(c,t)||!s&&"string"!=typeof c[t]){var e="Symbol."+t;s&&i(u,t)?c[t]=u[t]:c[t]=l&&h?h(e):d(e)}return c[t]}},9191:function(t,e,n){"use strict";var a=n(5005),r=n(2597),i=n(8880),o=n(7976),s=n(7674),l=n(9920),c=n(2626),u=n(9587),h=n(6277),d=n(8340),f=n(7741),p=n(2914),v=n(9781),m=n(1913);t.exports=function(t,e,n,g){var b="stackTraceLimit",y=g?2:1,z=t.split("."),w=z[z.length-1],M=a.apply(null,z);if(M){var V=M.prototype;if(!m&&r(V,"cause")&&delete V.cause,!n)return M;var A=a("Error"),H=e((function(t,e){var n=h(g?e:t,void 0),a=g?new M(t):new M;return void 0!==n&&i(a,"message",n),p&&i(a,"stack",f(a.stack,2)),this&&o(V,this)&&u(a,this,H),arguments.length>y&&d(a,arguments[y]),a}));if(H.prototype=V,"Error"!==w?s?s(H,A):l(H,A,{name:!0}):v&&b in M&&(c(H,M,b),c(H,M,"prepareStackTrace")),l(H,M),!m)try{V.name!==w&&i(V,"name",w),V.constructor=H}catch(C){}return H}}},2262:function(t,e,n){"use strict";var a=n(2109),r=n(7908),i=n(6244),o=n(9303),s=n(1223);a({target:"Array",proto:!0},{at:function(t){var e=r(this),n=i(e),a=o(t),s=a>=0?a:n+a;return s<0||s>=n?void 0:e[s]}}),s("at")},6699:function(t,e,n){"use strict";var a=n(2109),r=n(1318).includes,i=n(7293),o=n(1223),s=i((function(){return!Array(1).includes()}));a({target:"Array",proto:!0,forced:s},{includes:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),o("includes")},1703:function(t,e,n){var a=n(2109),r=n(7854),i=n(2104),o=n(9191),s="WebAssembly",l=r[s],c=7!==Error("e",{cause:7}).cause,u=function(t,e){var n={};n[t]=o(t,e,c),a({global:!0,constructor:!0,arity:1,forced:c},n)},h=function(t,e){if(l&&l[t]){var n={};n[t]=o(s+"."+t,e,c),a({target:s,stat:!0,constructor:!0,arity:1,forced:c},n)}};u("Error",(function(t){return function(e){return i(t,this,arguments)}})),u("EvalError",(function(t){return function(e){return i(t,this,arguments)}})),u("RangeError",(function(t){return function(e){return i(t,this,arguments)}})),u("ReferenceError",(function(t){return function(e){return i(t,this,arguments)}})),u("SyntaxError",(function(t){return function(e){return i(t,this,arguments)}})),u("TypeError",(function(t){return function(e){return i(t,this,arguments)}})),u("URIError",(function(t){return function(e){return i(t,this,arguments)}})),h("CompileError",(function(t){return function(e){return i(t,this,arguments)}})),h("LinkError",(function(t){return function(e){return i(t,this,arguments)}})),h("RuntimeError",(function(t){return function(e){return i(t,this,arguments)}}))},4506:function(t,e,n){"use strict";var a=n(2109),r=n(1702),i=n(4488),o=n(9303),s=n(1340),l=n(7293),c=r("".charAt),u=l((function(){return"\ud842"!=="𠮷".at(-2)}));a({target:"String",proto:!0,forced:u},{at:function(t){var e=s(i(this)),n=e.length,a=o(t),r=a>=0?a:n+a;return r<0||r>=n?void 0:c(e,r)}})},8675:function(t,e,n){"use strict";var a=n(260),r=n(6244),i=n(9303),o=a.aTypedArray,s=a.exportTypedArrayMethod;s("at",(function(t){var e=o(this),n=r(e),a=i(t),s=a>=0?a:n+a;return s<0||s>=n?void 0:e[s]}))},3462:function(t,e,n){"use strict";var a=n(7854),r=n(6916),i=n(260),o=n(6244),s=n(4590),l=n(7908),c=n(7293),u=a.RangeError,h=a.Int8Array,d=h&&h.prototype,f=d&&d.set,p=i.aTypedArray,v=i.exportTypedArrayMethod,m=!c((function(){var t=new Uint8ClampedArray(2);return r(f,t,{length:1,0:3},1),3!==t[1]})),g=m&&i.NATIVE_ARRAY_BUFFER_VIEWS&&c((function(){var t=new h(2);return t.set(1),t.set("2",1),0!==t[0]||2!==t[1]}));v("set",(function(t){p(this);var e=s(arguments.length>1?arguments[1]:void 0,1),n=l(t);if(m)return r(f,this,n,e);var a=this.length,i=o(n),c=0;if(i+e>a)throw u("Wrong length");while(c<i)this[e+c]=n[c++]}),!m||g)},1091:function(t,e,n){var a=n(2109),r=n(7854),i=n(261).clear;a({global:!0,bind:!0,enumerable:!0,forced:r.clearImmediate!==i},{clearImmediate:i})},2801:function(t,e,n){"use strict";var a=n(2109),r=n(5005),i=n(9114),o=n(3070).f,s=n(2597),l=n(5787),c=n(9587),u=n(6277),h=n(3678),d=n(7741),f=n(1913),p="DOMException",v=r("Error"),m=r(p),g=function(){l(this,b);var t=arguments.length,e=u(t<1?void 0:arguments[0]),n=u(t<2?void 0:arguments[1],"Error"),a=new m(e,n),r=v(e);return r.name=p,o(a,"stack",i(1,d(r.stack,1))),c(a,this,g),a},b=g.prototype=m.prototype,y="stack"in v(p),z="stack"in new m(1,2),w=y&&!z;a({global:!0,constructor:!0,forced:f||w},{DOMException:w?g:m});var M=r(p),V=M.prototype;if(V.constructor!==M)for(var A in f||o(V,"constructor",i(1,M)),h)if(s(h,A)){var H=h[A],C=H.s;s(M,C)||o(M,C,i(6,H.c))}},4633:function(t,e,n){n(1091),n(2986)},2986:function(t,e,n){var a=n(2109),r=n(7854),i=n(261).set;a({global:!0,bind:!0,enumerable:!0,forced:r.setImmediate!==i},{setImmediate:i})},44:function(){},3536:function(t,e,n){"use strict";n.d(e,{BH:function(){return c},L:function(){return s},LL:function(){return w},Mn:function(){return m},ZR:function(){return z},b$:function(){return f},d:function(){return p},eu:function(){return b},hl:function(){return g},m9:function(){return E},ne:function(){return B},pd:function(){return S},ru:function(){return d},tV:function(){return l},uI:function(){return h},vZ:function(){return H},w1:function(){return v},xO:function(){return O},xb:function(){return A},z$:function(){return u},zd:function(){return I}});n(1703),n(2801),n(6699);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const a=function(t){const e=[];let n=0;for(let a=0;a<t.length;a++){let r=t.charCodeAt(a);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=63&r|128):55296===(64512&r)&&a+1<t.length&&56320===(64512&t.charCodeAt(a+1))?(r=65536+((1023&r)<<10)+(1023&t.charCodeAt(++a)),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=63&r|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=63&r|128)}return e},r=function(t){const e=[];let n=0,a=0;while(n<t.length){const r=t[n++];if(r<128)e[a++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[a++]=String.fromCharCode((31&r)<<6|63&i)}else if(r>239&&r<365){const i=t[n++],o=t[n++],s=t[n++],l=((7&r)<<18|(63&i)<<12|(63&o)<<6|63&s)-65536;e[a++]=String.fromCharCode(55296+(l>>10)),e[a++]=String.fromCharCode(56320+(1023&l))}else{const i=t[n++],o=t[n++];e[a++]=String.fromCharCode((15&r)<<12|(63&i)<<6|63&o)}}return e.join("")},i={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,a=[];for(let r=0;r<t.length;r+=3){const e=t[r],i=r+1<t.length,o=i?t[r+1]:0,s=r+2<t.length,l=s?t[r+2]:0,c=e>>2,u=(3&e)<<4|o>>4;let h=(15&o)<<2|l>>6,d=63&l;s||(d=64,i||(h=64)),a.push(n[c],n[u],n[h],n[d])}return a.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(a(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):r(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,a=[];for(let r=0;r<t.length;){const e=n[t.charAt(r++)],i=r<t.length,o=i?n[t.charAt(r)]:0;++r;const s=r<t.length,l=s?n[t.charAt(r)]:64;++r;const c=r<t.length,u=c?n[t.charAt(r)]:64;if(++r,null==e||null==o||null==l||null==u)throw Error();const h=e<<2|o>>4;if(a.push(h),64!==l){const t=o<<4&240|l>>2;if(a.push(t),64!==u){const t=l<<6&192|u;a.push(t)}}}return a},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},o=function(t){const e=a(t);return i.encodeByteArray(e,!0)},s=function(t){return o(t).replace(/\./g,"")},l=function(t){try{return i.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class c{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"===typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function u(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function h(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(u())}function d(){const t="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof t&&void 0!==t.id}function f(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function p(){return u().indexOf("Electron/")>=0}function v(){const t=u();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function m(){return u().indexOf("MSAppHost/")>=0}function g(){return"object"===typeof indexedDB}function b(){return new Promise(((t,e)=>{try{let n=!0;const a="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(a);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(a),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var t;e((null===(t=r.error)||void 0===t?void 0:t.message)||"")}}catch(n){e(n)}}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const y="FirebaseError";class z extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=y,Object.setPrototypeOf(this,z.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,w.prototype.create)}}class w{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},a=`${this.service}/${t}`,r=this.errors[t],i=r?M(r,n):"Error",o=`${this.serviceName}: ${i} (${a}).`,s=new z(a,o,n);return s}}function M(t,e){return t.replace(V,((t,n)=>{const a=e[n];return null!=a?String(a):`<${n}?>`}))}const V=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function H(t,e){if(t===e)return!0;const n=Object.keys(t),a=Object.keys(e);for(const r of n){if(!a.includes(r))return!1;const n=t[r],i=e[r];if(C(n)&&C(i)){if(!H(n,i))return!1}else if(n!==i)return!1}for(const r of a)if(!n.includes(r))return!1;return!0}function C(t){return null!==t&&"object"===typeof t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(t){const e=[];for(const[n,a]of Object.entries(t))Array.isArray(a)?a.forEach((t=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(t))})):e.push(encodeURIComponent(n)+"="+encodeURIComponent(a));return e.length?"&"+e.join("&"):""}function I(t){const e={},n=t.replace(/^\?/,"").split("&");return n.forEach((t=>{if(t){const[n,a]=t.split("=");e[decodeURIComponent(n)]=decodeURIComponent(a)}})),e}function S(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B(t,e){const n=new T(t,e);return n.subscribe.bind(n)}class T{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then((()=>{t(this)})).catch((t=>{this.error(t)}))}next(t){this.forEachObserver((e=>{e.next(t)}))}error(t){this.forEachObserver((e=>{e.error(t)})),this.close(t)}complete(){this.forEachObserver((t=>{t.complete()})),this.close()}subscribe(t,e,n){let a;if(void 0===t&&void 0===e&&void 0===n)throw new Error("Missing Observer.");a=L(t,["next","error","complete"])?t:{next:t,error:e,complete:n},void 0===a.next&&(a.next=k),void 0===a.error&&(a.error=k),void 0===a.complete&&(a.complete=k);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?a.error(this.finalError):a.complete()}catch(t){}})),this.observers.push(a),r}unsubscribeOne(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[t])try{e(this.observers[t])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))}close(t){this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function L(t,e){if("object"!==typeof t||null===t)return!1;for(const n of e)if(n in t&&"function"===typeof t[n])return!0;return!1}function k(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,a.KN)(r,i,"app")},7911:function(t,e,n){"use strict";n.d(e,{Xb:function(){return le},v0:function(){return ca},Aj:function(){return ue},e5:function(){return ce}});n(1703),n(6699);var a=n(3536),r=n(1333);function i(t,e){var n={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(t);r<a.length;r++)e.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(t,a[r])&&(n[a[r]]=t[a[r]])}return n}Object.create;Object.create;var o=n(7366),s=n(7805);function l(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const c=l,u=new a.LL("auth","Firebase",l()),h=new o.Yd("@firebase/auth");function d(t,...e){h.logLevel<=o["in"].ERROR&&h.error(`Auth (${r.Jn}): ${t}`,...e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f(t,...e){throw m(t,...e)}function p(t,...e){return m(t,...e)}function v(t,e,n){const r=Object.assign(Object.assign({},c()),{[e]:n}),i=new a.LL("auth","Firebase",r);return i.create(e,{appName:t.name})}function m(t,...e){if("string"!==typeof t){const n=e[0],a=[...e.slice(1)];return a[0]&&(a[0].appName=t.name),t._errorFactory.create(n,...a)}return u.create(t,...e)}function g(t,e,...n){if(!t)throw m(e,...n)}function b(t){const e="INTERNAL ASSERTION FAILED: "+t;throw d(e),new Error(e)}function y(t,e){t||b(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z=new Map;function w(t){y(t instanceof Function,"Expected a class definition");let e=z.get(t);return e?(y(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,z.set(t,e),e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(t,e){const n=(0,r.qX)(t,"auth");if(n.isInitialized()){const t=n.getImmediate(),r=n.getOptions();if((0,a.vZ)(r,null!==e&&void 0!==e?e:{}))return t;f(t,"already-initialized")}const i=n.initialize({options:e});return i}function V(t,e){const n=(null===e||void 0===e?void 0:e.persistence)||[],a=(Array.isArray(n)?n:[n]).map(w);(null===e||void 0===e?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(a,null===e||void 0===e?void 0:e.popupRedirectResolver)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(){var t;return"undefined"!==typeof self&&(null===(t=self.location)||void 0===t?void 0:t.href)||""}function H(){return"http:"===C()||"https:"===C()}function C(){var t;return"undefined"!==typeof self&&(null===(t=self.location)||void 0===t?void 0:t.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(H()||(0,a.ru)()||"connection"in navigator))||navigator.onLine}function I(){if("undefined"===typeof navigator)return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(t,e){this.shortDelay=t,this.longDelay=e,y(e>t,"Short delay should be less than long delay!"),this.isMobile=(0,a.uI)()||(0,a.b$)()}get(){return O()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B(t,e){y(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{static initialize(t,e,n){this.fetchImpl=t,e&&(this.headersImpl=e),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void b("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void b("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void b("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"internal-error",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error"},k=new S(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function P(t,e,n,r,i={}){return F(t,i,(async()=>{let i={},o={};r&&("GET"===e?o=r:i={body:JSON.stringify(r)});const s=(0,a.xO)(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),T.fetch()(D(t,t.config.apiHost,n,s),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},i))}))}async function F(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},L),e);try{const e=new x(t),a=await Promise.race([n(),e.promise]);e.clearNetworkTimeout();const i=await a.json();if("needConfirmation"in i)throw j(t,"account-exists-with-different-credential",i);if(a.ok&&!("errorMessage"in i))return i;{const e=a.ok?i.errorMessage:i.error.message,[n,o]=e.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw j(t,"credential-already-in-use",i);if("EMAIL_EXISTS"===n)throw j(t,"email-already-in-use",i);if("USER_DISABLED"===n)throw j(t,"user-disabled",i);const s=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw v(t,s,o);f(t,s)}}catch(i){if(i instanceof a.ZR)throw i;f(t,"network-request-failed")}}async function _(t,e,n,a,r={}){const i=await P(t,e,n,a,r);return"mfaPendingCredential"in i&&f(t,"multi-factor-auth-required",{_serverResponse:i}),i}function D(t,e,n,a){const r=`${e}${n}?${a}`;return t.config.emulator?B(t.config,r):`${t.config.apiScheme}://${r}`}class x{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise(((t,e)=>{this.timer=setTimeout((()=>e(p(this.auth,"network-request-failed"))),k.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function j(t,e,n){const a={appName:t.name};n.email&&(a.email=n.email),n.phoneNumber&&(a.phoneNumber=n.phoneNumber);const r=p(t,e,a);return r.customData._tokenResponse=n,r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function N(t,e){return P(t,"POST","/v1/accounts:delete",e)}async function R(t,e){return P(t,"POST","/v1/accounts:lookup",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function U(t,e=!1){const n=(0,a.m9)(t),r=await n.getIdToken(e),i=q(r);g(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o="object"===typeof i.firebase?i.firebase:void 0,s=null===o||void 0===o?void 0:o["sign_in_provider"];return{claims:i,token:r,authTime:$(G(i.auth_time)),issuedAtTime:$(G(i.iat)),expirationTime:$(G(i.exp)),signInProvider:s||null,signInSecondFactor:(null===o||void 0===o?void 0:o["sign_in_second_factor"])||null}}function G(t){return 1e3*Number(t)}function q(t){const[e,n,r]=t.split(".");if(void 0===e||void 0===n||void 0===r)return d("JWT malformed, contained fewer than 3 sections"),null;try{const t=(0,a.tV)(n);return t?JSON.parse(t):(d("Failed to decode base64 JWT payload"),null)}catch(i){return d("Caught error parsing JWT payload as JSON",i),null}}function W(t){const e=q(t);return g(e,"internal-error"),g("undefined"!==typeof e.exp,"internal-error"),g("undefined"!==typeof e.iat,"internal-error"),Number(e.exp)-Number(e.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function K(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof a.ZR&&X(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function X({code:t}){return"auth/user-disabled"===t||"auth/user-token-expired"===t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const t=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),t}{this.errorBackoff=3e4;const t=null!==(e=this.user.stsTokenManager.expirationTime)&&void 0!==e?e:0,n=t-Date.now()-3e5;return Math.max(0,n)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout((async()=>{await this.iteration()}),e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===t.code&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=$(this.lastLoginAt),this.creationTime=$(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Q(t){var e;const n=t.auth,a=await t.getIdToken(),r=await K(t,R(n,{idToken:a}));g(null===r||void 0===r?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=(null===(e=i.providerUserInfo)||void 0===e?void 0:e.length)?et(i.providerUserInfo):[],s=tt(t.providerData,o),l=t.isAnonymous,c=!(t.email&&i.passwordHash)&&!(null===s||void 0===s?void 0:s.length),u=!!l&&c,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Y(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function Z(t){const e=(0,a.m9)(t);await Q(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function tt(t,e){const n=t.filter((t=>!e.some((e=>e.providerId===t.providerId))));return[...n,...e]}function et(t){return t.map((t=>{var{providerId:e}=t,n=i(t,["providerId"]);return{providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nt(t,e){const n=await F(t,{},(async()=>{const n=(0,a.xO)({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=D(t,r,"/v1/token",`key=${i}`),s=await t._getAdditionalHeaders();return s["Content-Type"]="application/x-www-form-urlencoded",T.fetch()(o,{method:"POST",headers:s,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){g(t.idToken,"internal-error"),g("undefined"!==typeof t.idToken,"internal-error"),g("undefined"!==typeof t.refreshToken,"internal-error");const e="expiresIn"in t&&"undefined"!==typeof t.expiresIn?Number(t.expiresIn):W(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}async getToken(t,e=!1){return g(!this.accessToken||this.refreshToken,t,"user-token-expired"),e||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:n,refreshToken:a,expiresIn:r}=await nt(t,e);this.updateTokensAndExpiration(n,a,Number(r))}updateTokensAndExpiration(t,e,n){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(t,e){const{refreshToken:n,accessToken:a,expirationTime:r}=e,i=new at;return n&&(g("string"===typeof n,"internal-error",{appName:t}),i.refreshToken=n),a&&(g("string"===typeof a,"internal-error",{appName:t}),i.accessToken=a),r&&(g("number"===typeof r,"internal-error",{appName:t}),i.expirationTime=r),i}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new at,this.toJSON())}_performRefresh(){return b("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt(t,e){g("string"===typeof t||"undefined"===typeof t,"internal-error",{appName:e})}class it{constructor(t){var{uid:e,auth:n,stsTokenManager:a}=t,r=i(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new J(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=a,this.accessToken=a.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Y(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(t){const e=await K(this,this.stsTokenManager.getToken(this.auth,t));return g(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return U(this,t)}reload(){return Z(this)}_assign(t){this!==t&&(g(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map((t=>Object.assign({},t))),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){return new it(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(t){g(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let n=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),n=!0),e&&await Q(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await K(this,N(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((t=>Object.assign({},t))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var n,a,r,i,o,s,l,c;const u=null!==(n=e.displayName)&&void 0!==n?n:void 0,h=null!==(a=e.email)&&void 0!==a?a:void 0,d=null!==(r=e.phoneNumber)&&void 0!==r?r:void 0,f=null!==(i=e.photoURL)&&void 0!==i?i:void 0,p=null!==(o=e.tenantId)&&void 0!==o?o:void 0,v=null!==(s=e._redirectEventId)&&void 0!==s?s:void 0,m=null!==(l=e.createdAt)&&void 0!==l?l:void 0,b=null!==(c=e.lastLoginAt)&&void 0!==c?c:void 0,{uid:y,emailVerified:z,isAnonymous:w,providerData:M,stsTokenManager:V}=e;g(y&&V,t,"internal-error");const A=at.fromJSON(this.name,V);g("string"===typeof y,t,"internal-error"),rt(u,t.name),rt(h,t.name),g("boolean"===typeof z,t,"internal-error"),g("boolean"===typeof w,t,"internal-error"),rt(d,t.name),rt(f,t.name),rt(p,t.name),rt(v,t.name),rt(m,t.name),rt(b,t.name);const H=new it({uid:y,auth:t,email:h,emailVerified:z,displayName:u,isAnonymous:w,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:A,createdAt:m,lastLoginAt:b});return M&&Array.isArray(M)&&(H.providerData=M.map((t=>Object.assign({},t)))),v&&(H._redirectEventId=v),H}static async _fromIdTokenResponse(t,e,n=!1){const a=new at;a.updateFromServerResponse(e);const r=new it({uid:e.localId,auth:t,stsTokenManager:a,isAnonymous:n});return await Q(r),r}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return void 0===e?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}ot.type="NONE";const st=ot;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lt(t,e,n){return`firebase:${t}:${e}:${n}`}class ct{constructor(t,e,n){this.persistence=t,this.auth=e,this.userKey=n;const{config:a,name:r}=this.auth;this.fullUserKey=lt(this.userKey,a.apiKey,r),this.fullPersistenceKey=lt("persistence",a.apiKey,r),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?it._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=t,e?this.setCurrentUser(e):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,n="authUser"){if(!e.length)return new ct(w(st),t,n);const a=(await Promise.all(e.map((async t=>{if(await t._isAvailable())return t})))).filter((t=>t));let r=a[0]||w(st);const i=lt(n,t.config.apiKey,t.name);let o=null;for(const c of e)try{const e=await c._get(i);if(e){const n=it._fromJSON(t,e);c!==r&&(o=n),r=c;break}}catch(l){}const s=a.filter((t=>t._shouldAllowMigration));return r._shouldAllowMigration&&s.length?(r=s[0],o&&await r._set(i,o.toJSON()),await Promise.all(e.map((async t=>{if(t!==r)try{await t._remove(i)}catch(l){}}))),new ct(r,t,n)):new ct(r,t,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ut(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(pt(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ht(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(mt(e))return"Blackberry";if(gt(e))return"Webos";if(dt(e))return"Safari";if((e.includes("chrome/")||ft(e))&&!e.includes("edge/"))return"Chrome";if(vt(e))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=t.match(e);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function ht(t=(0,a.z$)()){return/firefox\//i.test(t)}function dt(t=(0,a.z$)()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ft(t=(0,a.z$)()){return/crios\//i.test(t)}function pt(t=(0,a.z$)()){return/iemobile/i.test(t)}function vt(t=(0,a.z$)()){return/android/i.test(t)}function mt(t=(0,a.z$)()){return/blackberry/i.test(t)}function gt(t=(0,a.z$)()){return/webos/i.test(t)}function bt(t=(0,a.z$)()){return/iphone|ipad|ipod/i.test(t)}function yt(t=(0,a.z$)()){var e;return bt(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}function zt(){return(0,a.w1)()&&10===document.documentMode}function wt(t=(0,a.z$)()){return bt(t)||vt(t)||gt(t)||mt(t)||/windows phone/i.test(t)||pt(t)}function Mt(){try{return!(!window||window===window.top)}catch(t){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vt(t,e=[]){let n;switch(t){case"Browser":n=ut((0,a.z$)());break;case"Worker":n=`${ut((0,a.z$)())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${r.Jn}/${i}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,e){const n=e=>new Promise(((n,a)=>{try{const a=t(e);n(a)}catch(r){a(r)}}));n.onAbort=e,this.queue.push(n);const a=this.queue.length-1;return()=>{this.queue[a]=()=>Promise.resolve()}}async runMiddleware(t){var e;if(this.auth.currentUser===t)return;const n=[];try{for(const e of this.queue)await e(t),e.onAbort&&n.push(e.onAbort)}catch(a){n.reverse();for(const t of n)try{t()}catch(r){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===(e=a)||void 0===e?void 0:e.message})}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(t,e,n){this.app=t,this.heartbeatServiceProvider=e,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ot(this),this.idTokenSubscription=new Ot(this),this.beforeStateQueue=new At(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=u,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=w(e)),this._initializationPromise=this.queue((async()=>{var n,a;if(!this._deleted&&(this.persistenceManager=await ct.create(this,t),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(r){}await this.initializeCurrentUser(e),this.lastNotifiedUid=(null===(a=this.currentUser)||void 0===a?void 0:a.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();return this.currentUser||t?this.currentUser&&t&&this.currentUser.uid===t.uid?(this._currentUser._assign(t),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(t,!0):void 0}async initializeCurrentUser(t){var e;const n=await this.assertedPersistence.getCurrentUser();let a=n,r=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(e=this.redirectUser)||void 0===e?void 0:e._redirectEventId,i=null===a||void 0===a?void 0:a._redirectEventId,o=await this.tryRedirectSignIn(t);n&&n!==i||!(null===o||void 0===o?void 0:o.user)||(a=o.user,r=!0)}if(!a)return this.directlySetCurrentUser(null);if(!a._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(a)}catch(i){a=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(i)))}return a?this.reloadAndSetCurrentUserOrClear(a):this.directlySetCurrentUser(null)}return g(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===a._redirectEventId?this.directlySetCurrentUser(a):this.reloadAndSetCurrentUserOrClear(a)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch(n){await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await Q(t)}catch(e){if("auth/network-request-failed"!==e.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=I()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const e=t?(0,a.m9)(t):null;return e&&g(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&g(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue((async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue((async()=>{await this.assertedPersistence.setPersistence(w(t))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new a.LL("auth","Firebase",t())}onAuthStateChanged(t,e,n){return this.registerStateListener(this.authStateSubscription,t,e,n)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,n){return this.registerStateListener(this.idTokenSubscription,t,e,n)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(t=this._currentUser)||void 0===t?void 0:t.toJSON()}}async _setRedirectUser(t,e){const n=await this.getOrInitRedirectPersistenceManager(e);return null===t?n.removeCurrentUser():n.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&w(t)||this._popupRedirectResolver;g(e,this,"argument-error"),this.redirectPersistenceManager=await ct.create(this,[w(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(e=this._currentUser)||void 0===e?void 0:e._redirectEventId)===t?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(t)))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(e=null===(t=this.currentUser)||void 0===t?void 0:t.uid)&&void 0!==e?e:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,n,a){if(this._deleted)return()=>{};const r="function"===typeof e?e:e.next.bind(e),i=this._isInitialized?Promise.resolve():this._initializationPromise;return g(i,this,"internal-error"),i.then((()=>r(this.currentUser))),"function"===typeof e?t.addObserver(e,n,a):t.addObserver(e)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&(this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh()),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return g(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){t&&!this.frameworks.includes(t)&&(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Vt(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const e={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(t=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===t?void 0:t.getHeartbeatsHeader());return n&&(e["X-Firebase-Client"]=n),e}}function Ct(t){return(0,a.m9)(t)}class Ot{constructor(t){this.auth=t,this.observer=null,this.addObserver=(0,a.ne)((t=>this.observer=t))}get next(){return g(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class It{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return b("not implemented")}_getIdTokenResponse(t){return b("not implemented")}_linkToIdToken(t,e){return b("not implemented")}_getReauthenticationResolver(t){return b("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function St(t,e){return P(t,"POST","/v1/accounts:update",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Bt(t,e){return _(t,"POST","/v1/accounts:signInWithPassword",E(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Tt(t,e){return _(t,"POST","/v1/accounts:signInWithEmailLink",E(t,e))}async function Lt(t,e){return _(t,"POST","/v1/accounts:signInWithEmailLink",E(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt extends It{constructor(t,e,n,a=null){super("password",n),this._email=t,this._password=e,this._tenantId=a}static _fromEmailAndPassword(t,e){return new kt(t,e,"password")}static _fromEmailAndCode(t,e,n=null){return new kt(t,e,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e="string"===typeof t?JSON.parse(t):t;if((null===e||void 0===e?void 0:e.email)&&(null===e||void 0===e?void 0:e.password)){if("password"===e.signInMethod)return this._fromEmailAndPassword(e.email,e.password);if("emailLink"===e.signInMethod)return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":return Bt(t,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Tt(t,{email:this._email,oobCode:this._password});default:f(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":return St(t,{idToken:e,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Lt(t,{idToken:e,email:this._email,oobCode:this._password});default:f(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Et(t,e){return _(t,"POST","/v1/accounts:signInWithIdp",E(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pt="http://localhost";class Ft extends It{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new Ft(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):f("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e="string"===typeof t?JSON.parse(t):t,{providerId:n,signInMethod:a}=e,r=i(e,["providerId","signInMethod"]);if(!n||!a)return null;const o=new Ft(n,a);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(t){const e=this.buildRequest();return Et(t,e)}_linkToIdToken(t,e){const n=this.buildRequest();return n.idToken=e,Et(t,n)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,Et(t,e)}buildRequest(){const t={requestUri:Pt,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e["id_token"]=this.idToken),this.accessToken&&(e["access_token"]=this.accessToken),this.secret&&(e["oauth_token_secret"]=this.secret),e["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(e["nonce"]=this.nonce),t.postBody=(0,a.xO)(e)}return t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _t(t,e){return P(t,"POST","/v1/accounts:sendVerificationCode",E(t,e))}async function Dt(t,e){return _(t,"POST","/v1/accounts:signInWithPhoneNumber",E(t,e))}async function xt(t,e){const n=await _(t,"POST","/v1/accounts:signInWithPhoneNumber",E(t,e));if(n.temporaryProof)throw j(t,"account-exists-with-different-credential",n);return n}const jt={["USER_NOT_FOUND"]:"user-not-found"};async function Nt(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return _(t,"POST","/v1/accounts:signInWithPhoneNumber",E(t,n),jt)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt extends It{constructor(t){super("phone","phone"),this.params=t}static _fromVerification(t,e){return new Rt({verificationId:t,verificationCode:e})}static _fromTokenResponse(t,e){return new Rt({phoneNumber:t,temporaryProof:e})}_getIdTokenResponse(t){return Dt(t,this._makeVerificationRequest())}_linkToIdToken(t,e){return xt(t,Object.assign({idToken:e},this._makeVerificationRequest()))}_getReauthenticationResolver(t){return Nt(t,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:t,phoneNumber:e,verificationId:n,verificationCode:a}=this.params;return t&&e?{temporaryProof:t,phoneNumber:e}:{sessionInfo:n,code:a}}toJSON(){const t={providerId:this.providerId};return this.params.phoneNumber&&(t.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(t.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(t.verificationCode=this.params.verificationCode),this.params.verificationId&&(t.verificationId=this.params.verificationId),t}static fromJSON(t){"string"===typeof t&&(t=JSON.parse(t));const{verificationId:e,verificationCode:n,phoneNumber:a,temporaryProof:r}=t;return n||e||a||r?new Rt({verificationId:e,verificationCode:n,phoneNumber:a,temporaryProof:r}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $t(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Ut(t){const e=(0,a.zd)((0,a.pd)(t))["link"],n=e?(0,a.zd)((0,a.pd)(e))["deep_link_id"]:null,r=(0,a.zd)((0,a.pd)(t))["deep_link_id"],i=r?(0,a.zd)((0,a.pd)(r))["link"]:null;return i||r||n||e||t}class Gt{constructor(t){var e,n,r,i,o,s;const l=(0,a.zd)((0,a.pd)(t)),c=null!==(e=l["apiKey"])&&void 0!==e?e:null,u=null!==(n=l["oobCode"])&&void 0!==n?n:null,h=$t(null!==(r=l["mode"])&&void 0!==r?r:null);g(c&&u&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=u,this.continueUrl=null!==(i=l["continueUrl"])&&void 0!==i?i:null,this.languageCode=null!==(o=l["languageCode"])&&void 0!==o?o:null,this.tenantId=null!==(s=l["tenantId"])&&void 0!==s?s:null}static parseLink(t){const e=Ut(t);try{return new Gt(e)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qt{constructor(){this.providerId=qt.PROVIDER_ID}static credential(t,e){return kt._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const n=Gt.parseLink(e);return g(n,"argument-error"),kt._fromEmailAndCode(t,n.code,n.tenantId)}}qt.PROVIDER_ID="password",qt.EMAIL_PASSWORD_SIGN_IN_METHOD="password",qt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Wt{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt extends Wt{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xt extends Kt{constructor(){super("facebook.com")}static credential(t){return Ft._fromParams({providerId:Xt.PROVIDER_ID,signInMethod:Xt.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Xt.credentialFromTaggedObject(t)}static credentialFromError(t){return Xt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return Xt.credential(t.oauthAccessToken)}catch(e){return null}}}Xt.FACEBOOK_SIGN_IN_METHOD="facebook.com",Xt.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Jt extends Kt{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return Ft._fromParams({providerId:Jt.PROVIDER_ID,signInMethod:Jt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return Jt.credentialFromTaggedObject(t)}static credentialFromError(t){return Jt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:n}=t;if(!e&&!n)return null;try{return Jt.credential(e,n)}catch(a){return null}}}Jt.GOOGLE_SIGN_IN_METHOD="google.com",Jt.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Yt extends Kt{constructor(){super("github.com")}static credential(t){return Ft._fromParams({providerId:Yt.PROVIDER_ID,signInMethod:Yt.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Yt.credentialFromTaggedObject(t)}static credentialFromError(t){return Yt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return Yt.credential(t.oauthAccessToken)}catch(e){return null}}}Yt.GITHUB_SIGN_IN_METHOD="github.com",Yt.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qt extends Kt{constructor(){super("twitter.com")}static credential(t,e){return Ft._fromParams({providerId:Qt.PROVIDER_ID,signInMethod:Qt.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return Qt.credentialFromTaggedObject(t)}static credentialFromError(t){return Qt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:n}=t;if(!e||!n)return null;try{return Qt.credential(e,n)}catch(a){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Zt(t,e){return _(t,"POST","/v1/accounts:signUp",E(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Qt.TWITTER_SIGN_IN_METHOD="twitter.com",Qt.PROVIDER_ID="twitter.com";class te{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,n,a=!1){const r=await it._fromIdTokenResponse(t,n,a),i=ee(n),o=new te({user:r,providerId:i,_tokenResponse:n,operationType:e});return o}static async _forOperation(t,e,n){await t._updateTokensIfNecessary(n,!0);const a=ee(n);return new te({user:t,providerId:a,_tokenResponse:n,operationType:e})}}function ee(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ne extends a.ZR{constructor(t,e,n,a){var r;super(e.code,e.message),this.operationType=n,this.user=a,Object.setPrototypeOf(this,ne.prototype),this.customData={appName:t.name,tenantId:null!==(r=t.tenantId)&&void 0!==r?r:void 0,_serverResponse:e.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(t,e,n,a){return new ne(t,e,n,a)}}function ae(t,e,n,a){const r="reauthenticate"===e?n._getReauthenticationResolver(t):n._getIdTokenResponse(t);return r.catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw ne._fromErrorAndOperation(t,n,e,a);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function re(t,e,n=!1){const a=await K(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return te._forOperation(t,"link",a)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function ie(t,e,n=!1){const{auth:a}=t,r="reauthenticate";try{const i=await K(t,ae(a,r,e,t),n);g(i.idToken,a,"internal-error");const o=q(i.idToken);g(o,a,"internal-error");const{sub:s}=o;return g(t.uid===s,a,"user-mismatch"),te._forOperation(t,r,i)}catch(i){throw"auth/user-not-found"===(null===i||void 0===i?void 0:i.code)&&f(a,"user-mismatch"),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oe(t,e,n=!1){const a="signIn",r=await ae(t,a,e),i=await te._fromIdTokenResponse(t,a,r);return n||await t._updateCurrentUser(i.user),i}async function se(t,e){return oe(Ct(t),e)}async function le(t,e,n){const a=Ct(t),r=await Zt(a,{returnSecureToken:!0,email:e,password:n}),i=await te._fromIdTokenResponse(a,"signIn",r);return await a._updateCurrentUser(i.user),i}function ce(t,e,n){return se((0,a.m9)(t),qt.credential(e,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ue(t,e,n,r){return(0,a.m9)(t).onAuthStateChanged(e,n,r)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function he(t,e){return P(t,"POST","/v2/accounts/mfaEnrollment:start",E(t,e))}function de(t,e){return P(t,"POST","/v2/accounts/mfaEnrollment:finalize",E(t,e))}new WeakMap;const fe="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(fe,"1"),this.storage.removeItem(fe),Promise.resolve(!0)):Promise.resolve(!1)}catch(t){return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ve(){const t=(0,a.z$)();return dt(t)||bt(t)}const me=1e3,ge=10;class be extends pe{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=ve()&&Mt(),this.fallbackToPolling=wt(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const n=this.storage.getItem(e),a=this.localCache[e];n!==a&&t(e,a,n)}}onStorageEvent(t,e=!1){if(!t.key)return void this.forAllChangedKeys(((t,e,n)=>{this.notifyListeners(t,n)}));const n=t.key;if(e?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const a=this.storage.getItem(n);if(t.newValue!==a)null!==t.newValue?this.storage.setItem(n,t.newValue):this.storage.removeItem(n);else if(this.localCache[n]===t.newValue&&!e)return}const a=()=>{const t=this.storage.getItem(n);(e||this.localCache[n]!==t)&&this.notifyListeners(n,t)},r=this.storage.getItem(n);zt()&&r!==t.newValue&&t.newValue!==t.oldValue?setTimeout(a,ge):a()}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const a of Array.from(n))a(e?JSON.parse(e):e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((t,e,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:n}),!0)}))}),me)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}be.type="LOCAL";const ye=be;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze extends pe{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(t,e){}_removeListener(t,e){}}ze.type="SESSION";const we=ze;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Me(t){return Promise.all(t.map((async t=>{try{const e=await t;return{fulfilled:!0,value:e}}catch(e){return{fulfilled:!1,reason:e}}})))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find((e=>e.isListeningto(t)));if(e)return e;const n=new Ve(t);return this.receivers.push(n),n}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:n,eventType:a,data:r}=e.data,i=this.handlersMap[a];if(!(null===i||void 0===i?void 0:i.size))return;e.ports[0].postMessage({status:"ack",eventId:n,eventType:a});const o=Array.from(i).map((async t=>t(e.origin,r))),s=await Me(o);e.ports[0].postMessage({status:"done",eventId:n,eventType:a,response:s})}_subscribe(t,e){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),e&&0!==this.handlersMap[t].size||delete this.handlersMap[t],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ae(t="",e=10){let n="";for(let a=0;a<e;a++)n+=Math.floor(10*Math.random());return t+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ve.receivers=[];class He{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,n=50){const a="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!a)throw new Error("connection_unavailable");let r,i;return new Promise(((o,s)=>{const l=Ae("",20);a.port1.start();const c=setTimeout((()=>{s(new Error("unsupported_event"))}),n);i={messageChannel:a,onMessage(t){const e=t;if(e.data.eventId===l)switch(e.data.status){case"ack":clearTimeout(c),r=setTimeout((()=>{s(new Error("timeout"))}),3e3);break;case"done":clearTimeout(r),o(e.data.response);break;default:clearTimeout(c),clearTimeout(r),s(new Error("invalid_response"));break}}},this.handlers.add(i),a.port1.addEventListener("message",i.onMessage),this.target.postMessage({eventType:t,eventId:l,data:e},[a.port2])})).finally((()=>{i&&this.removeMessageHandler(i)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ce(){return window}function Oe(t){Ce().location.href=t}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ie(){return"undefined"!==typeof Ce()["WorkerGlobalScope"]&&"function"===typeof Ce()["importScripts"]}async function Se(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const t=await navigator.serviceWorker.ready;return t.active}catch(t){return null}}function Be(){var t;return(null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null}function Te(){return Ie()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Le="firebaseLocalStorageDb",ke=1,Ee="firebaseLocalStorage",Pe="fbase_key";class Fe{constructor(t){this.request=t}toPromise(){return new Promise(((t,e)=>{this.request.addEventListener("success",(()=>{t(this.request.result)})),this.request.addEventListener("error",(()=>{e(this.request.error)}))}))}}function _e(t,e){return t.transaction([Ee],e?"readwrite":"readonly").objectStore(Ee)}function De(){const t=indexedDB.deleteDatabase(Le);return new Fe(t).toPromise()}function xe(){const t=indexedDB.open(Le,ke);return new Promise(((e,n)=>{t.addEventListener("error",(()=>{n(t.error)})),t.addEventListener("upgradeneeded",(()=>{const e=t.result;try{e.createObjectStore(Ee,{keyPath:Pe})}catch(a){n(a)}})),t.addEventListener("success",(async()=>{const n=t.result;n.objectStoreNames.contains(Ee)?e(n):(n.close(),await De(),e(await xe()))}))}))}async function je(t,e,n){const a=_e(t,!0).put({[Pe]:e,value:n});return new Fe(a).toPromise()}async function Ne(t,e){const n=_e(t,!1).get(e),a=await new Fe(n).toPromise();return void 0===a?null:a.value}function Re(t,e){const n=_e(t,!0).delete(e);return new Fe(n).toPromise()}const $e=800,Ue=3;class Ge{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await xe()),this.db}async _withRetries(t){let e=0;while(1)try{const e=await this._openDb();return await t(e)}catch(n){if(e++>Ue)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ie()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ve._getInstance(Te()),this.receiver._subscribe("keyChanged",(async(t,e)=>{const n=await this._poll();return{keyProcessed:n.includes(e.key)}})),this.receiver._subscribe("ping",(async(t,e)=>["keyChanged"]))}async initializeSender(){var t,e;if(this.activeServiceWorker=await Se(),!this.activeServiceWorker)return;this.sender=new He(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(t=n[0])||void 0===t?void 0:t.fulfilled)&&(null===(e=n[0])||void 0===e?void 0:e.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(this.sender&&this.activeServiceWorker&&Be()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await xe();return await je(t,fe,"1"),await Re(t,fe),!0}catch(t){}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite((async()=>(await this._withRetries((n=>je(n,t,e))),this.localCache[t]=e,this.notifyServiceWorker(t))))}async _get(t){const e=await this._withRetries((e=>Ne(e,t)));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite((async()=>(await this._withRetries((e=>Re(e,t))),delete this.localCache[t],this.notifyServiceWorker(t))))}async _poll(){const t=await this._withRetries((t=>{const e=_e(t,!1).getAll();return new Fe(e).toPromise()}));if(!t)return[];if(0!==this.pendingWrites)return[];const e=[],n=new Set;for(const{fbase_key:a,value:r}of t)n.add(a),JSON.stringify(this.localCache[a])!==JSON.stringify(r)&&(this.notifyListeners(a,r),e.push(a));for(const a of Object.keys(this.localCache))this.localCache[a]&&!n.has(a)&&(this.notifyListeners(a,null),e.push(a));return e}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const a of Array.from(n))a(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),$e)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Ge.type="LOCAL";const qe=Ge;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function We(t,e){return P(t,"POST","/v2/accounts/mfaSignIn:start",E(t,e))}function Ke(t,e){return P(t,"POST","/v2/accounts/mfaSignIn:finalize",E(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Xe(){var t,e;return null!==(e=null===(t=document.getElementsByTagName("head"))||void 0===t?void 0:t[0])&&void 0!==e?e:document}function Je(t){return new Promise(((e,n)=>{const a=document.createElement("script");a.setAttribute("src",t),a.onload=e,a.onerror=t=>{const e=p("internal-error");e.customData=t,n(e)},a.type="text/javascript",a.charset="UTF-8",Xe().appendChild(a)}))}function Ye(t){return`__${t}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Ye("rcb"),new S(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Qe="recaptcha";async function Ze(t,e,n){var a;const r=await n.verify();try{let i;if(g("string"===typeof r,t,"argument-error"),g(n.type===Qe,t,"argument-error"),i="string"===typeof e?{phoneNumber:e}:e,"session"in i){const e=i.session;if("phoneNumber"in i){g("enroll"===e.type,t,"internal-error");const n=await he(t,{idToken:e.credential,phoneEnrollmentInfo:{phoneNumber:i.phoneNumber,recaptchaToken:r}});return n.phoneSessionInfo.sessionInfo}{g("signin"===e.type,t,"internal-error");const n=(null===(a=i.multiFactorHint)||void 0===a?void 0:a.uid)||i.multiFactorUid;g(n,t,"missing-multi-factor-info");const o=await We(t,{mfaPendingCredential:e.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:r}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:e}=await _t(t,{phoneNumber:i.phoneNumber,recaptchaToken:r});return e}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class tn{constructor(t){this.providerId=tn.PROVIDER_ID,this.auth=Ct(t)}verifyPhoneNumber(t,e){return Ze(this.auth,t,(0,a.m9)(e))}static credential(t,e){return Rt._fromVerification(t,e)}static credentialFromResult(t){const e=t;return tn.credentialFromTaggedObject(e)}static credentialFromError(t){return tn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{phoneNumber:e,temporaryProof:n}=t;return e&&n?Rt._fromTokenResponse(e,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function en(t,e){return e?w(e):(g(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */tn.PROVIDER_ID="phone",tn.PHONE_SIGN_IN_METHOD="phone";class nn extends It{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Et(t,this._buildIdpRequest())}_linkToIdToken(t,e){return Et(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return Et(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function an(t){return oe(t.auth,new nn(t),t.bypassAuthState)}function rn(t){const{auth:e,user:n}=t;return g(n,e,"internal-error"),ie(n,new nn(t),t.bypassAuthState)}async function on(t){const{auth:e,user:n}=t;return g(n,e,"internal-error"),re(n,new nn(t),t.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(t,e,n,a,r=!1){this.auth=t,this.resolver=n,this.user=a,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise((async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(t){const{urlResponse:e,sessionId:n,postBody:a,tenantId:r,error:i,type:o}=t;if(i)return void this.reject(i);const s={auth:this.auth,requestUri:e,sessionId:n,tenantId:r||void 0,postBody:a||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(s))}catch(l){this.reject(l)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return an;case"linkViaPopup":case"linkViaRedirect":return on;case"reauthViaPopup":case"reauthViaRedirect":return rn;default:f(this.auth,"internal-error")}}resolve(t){y(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){y(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ln=new S(2e3,1e4);class cn extends sn{constructor(t,e,n,a,r){super(t,e,a,r),this.provider=n,this.authWindow=null,this.pollId=null,cn.currentPopupAction&&cn.currentPopupAction.cancel(),cn.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return g(t,this.auth,"internal-error"),t}async onExecution(){y(1===this.filter.length,"Popup operations only handle one event");const t=Ae();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch((t=>{this.reject(t)})),this.resolver._isIframeWebStorageSupported(this.auth,(t=>{t||this.reject(p(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var t;return(null===(t=this.authWindow)||void 0===t?void 0:t.associatedEvent)||null}cancel(){this.reject(p(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,cn.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,n;(null===(n=null===(e=this.authWindow)||void 0===e?void 0:e.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(p(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(t,ln.get())};t()}}cn.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const un="pendingRedirect",hn=new Map;class dn extends sn{constructor(t,e,n=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,n),this.eventId=null}async execute(){let t=hn.get(this.auth._key());if(!t){try{const e=await fn(this.resolver,this.auth),n=e?await super.execute():null;t=()=>Promise.resolve(n)}catch(e){t=()=>Promise.reject(e)}hn.set(this.auth._key(),t)}return this.bypassAuthState||hn.set(this.auth._key(),(()=>Promise.resolve(null))),t()}async onAuthEvent(t){if("signInViaRedirect"===t.type)return super.onAuthEvent(t);if("unknown"!==t.type){if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function fn(t,e){const n=mn(e),a=vn(t);if(!await a._isAvailable())return!1;const r="true"===await a._get(n);return await a._remove(n),r}function pn(t,e){hn.set(t._key(),e)}function vn(t){return w(t._redirectPersistence)}function mn(t){return lt(un,t.config.apiKey,t.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gn(t,e,n=!1){const a=Ct(t),r=en(a,e),i=new dn(a,r,n),o=await i.execute();return o&&!n&&(delete o.user._redirectEventId,await a._persistUserIfCurrent(o.user),await a._setRedirectUser(null,e)),o}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const bn=6e5;class yn{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(t,n)&&(e=!0,this.sendToConsumer(t,n),this.saveEventToCache(t))})),this.hasHandledPotentialRedirect||!Mn(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var n;if(t.error&&!wn(t)){const a=(null===(n=t.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";e.onError(p(this.auth,a))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const n=null===e.eventId||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&n}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=bn&&this.cachedEventUids.clear(),this.cachedEventUids.has(zn(t))}saveEventToCache(t){this.cachedEventUids.add(zn(t)),this.lastProcessedEventTime=Date.now()}}function zn(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter((t=>t)).join("-")}function wn({type:t,error:e}){return"unknown"===t&&"auth/no-auth-event"===(null===e||void 0===e?void 0:e.code)}function Mn(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return wn(t);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vn(t,e={}){return P(t,"GET","/v1/projects",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const An=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Hn=/^https?/;async function Cn(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Vn(t);for(const a of e)try{if(On(a))return}catch(n){}f(t,"unauthorized-domain")}function On(t){const e=A(),{protocol:n,hostname:a}=new URL(e);if(t.startsWith("chrome-extension://")){const r=new URL(t);return""===r.hostname&&""===a?"chrome-extension:"===n&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):"chrome-extension:"===n&&r.hostname===a}if(!Hn.test(n))return!1;if(An.test(t))return a===t;const r=t.replace(/\./g,"\\."),i=new RegExp("^(.+\\."+r+"|"+r+")$","i");return i.test(a)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const In=new S(3e4,6e4);function Sn(){const t=Ce().___jsl;if(null===t||void 0===t?void 0:t.H)for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}function Bn(t){return new Promise(((e,n)=>{var a,r,i;function o(){Sn(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Sn(),n(p(t,"network-request-failed"))},timeout:In.get()})}if(null===(r=null===(a=Ce().gapi)||void 0===a?void 0:a.iframes)||void 0===r?void 0:r.Iframe)e(gapi.iframes.getContext());else{if(!(null===(i=Ce().gapi)||void 0===i?void 0:i.load)){const e=Ye("iframefcb");return Ce()[e]=()=>{gapi.load?o():n(p(t,"network-request-failed"))},Je(`https://apis.google.com/js/api.js?onload=${e}`).catch((t=>n(t)))}o()}})).catch((t=>{throw Tn=null,t}))}let Tn=null;function Ln(t){return Tn=Tn||Bn(t),Tn}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kn=new S(5e3,15e3),En="__/auth/iframe",Pn="emulator/auth/iframe",Fn={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},_n=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Dn(t){const e=t.config;g(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?B(e,Pn):`https://${t.config.authDomain}/${En}`,i={apiKey:e.apiKey,appName:t.name,v:r.Jn},o=_n.get(t.config.apiHost);o&&(i.eid=o);const s=t._getFrameworks();return s.length&&(i.fw=s.join(",")),`${n}?${(0,a.xO)(i).slice(1)}`}async function xn(t){const e=await Ln(t),n=Ce().gapi;return g(n,t,"internal-error"),e.open({where:document.body,url:Dn(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Fn,dontclear:!0},(e=>new Promise((async(n,a)=>{await e.restyle({setHideOnLeave:!1});const r=p(t,"network-request-failed"),i=Ce().setTimeout((()=>{a(r)}),kn.get());function o(){Ce().clearTimeout(i),n(e)}e.ping(o).then(o,(()=>{a(r)}))}))))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jn={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Nn=500,Rn=600,$n="_blank",Un="http://localhost";class Gn{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(t){}}}function qn(t,e,n,r=Nn,i=Rn){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},jn),{width:r.toString(),height:i.toString(),top:o,left:s}),u=(0,a.z$)().toLowerCase();n&&(l=ft(u)?$n:n),ht(u)&&(e=e||Un,c.scrollbars="yes");const h=Object.entries(c).reduce(((t,[e,n])=>`${t}${e}=${n},`),"");if(yt(u)&&"_self"!==l)return Wn(e||"",l),new Gn(null);const d=window.open(e||"",l,h);g(d,t,"popup-blocked");try{d.focus()}catch(f){}return new Gn(d)}function Wn(t,e){const n=document.createElement("a");n.href=t,n.target=e;const a=document.createEvent("MouseEvent");a.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(a)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kn="__/auth/handler",Xn="emulator/auth/handler";function Jn(t,e,n,i,o,s){g(t.config.authDomain,t,"auth-domain-config-required"),g(t.config.apiKey,t,"invalid-api-key");const l={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:r.Jn,eventId:o};if(e instanceof Wt){e.setDefaultLanguage(t.languageCode),l.providerId=e.providerId||"",(0,a.xb)(e.getCustomParameters())||(l.customParameters=JSON.stringify(e.getCustomParameters()));for(const[t,e]of Object.entries(s||{}))l[t]=e}if(e instanceof Kt){const t=e.getScopes().filter((t=>""!==t));t.length>0&&(l.scopes=t.join(","))}t.tenantId&&(l.tid=t.tenantId);const c=l;for(const a of Object.keys(c))void 0===c[a]&&delete c[a];return`${Yn(t)}?${(0,a.xO)(c).slice(1)}`}function Yn({config:t}){return t.emulator?B(t,Xn):`https://${t.authDomain}/${Kn}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qn="webStorageSupport";class Zn{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=we,this._completeRedirectFn=gn,this._overrideRedirectResult=pn}async _openPopup(t,e,n,a){var r;y(null===(r=this.eventManagers[t._key()])||void 0===r?void 0:r.manager,"_initialize() not called before _openPopup()");const i=Jn(t,e,n,A(),a);return qn(t,i,Ae())}async _openRedirect(t,e,n,a){return await this._originValidation(t),Oe(Jn(t,e,n,A(),a)),new Promise((()=>{}))}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:t,promise:n}=this.eventManagers[e];return t?Promise.resolve(t):(y(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(t);return this.eventManagers[e]={promise:n},n.catch((()=>{delete this.eventManagers[e]})),n}async initAndGetManager(t){const e=await xn(t),n=new yn(t);return e.register("authEvent",(e=>{g(null===e||void 0===e?void 0:e.authEvent,t,"invalid-auth-event");const a=n.onEvent(e.authEvent);return{status:a?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:n},this.iframes[t._key()]=e,n}_isIframeWebStorageSupported(t,e){const n=this.iframes[t._key()];n.send(Qn,{type:Qn},(n=>{var a;const r=null===(a=null===n||void 0===n?void 0:n[0])||void 0===a?void 0:a[Qn];void 0!==r&&e(!!r),f(t,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=Cn(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return wt()||dt()||bt()}}const ta=Zn;class ea{constructor(t){this.factorId=t}_process(t,e,n){switch(e.type){case"enroll":return this._finalizeEnroll(t,e.credential,n);case"signin":return this._finalizeSignIn(t,e.credential);default:return b("unexpected MultiFactorSessionType")}}}class na extends ea{constructor(t){super("phone"),this.credential=t}static _fromCredential(t){return new na(t)}_finalizeEnroll(t,e,n){return de(t,{idToken:e,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(t,e){return Ke(t,{mfaPendingCredential:e,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class aa{constructor(){}static assertion(t){return na._fromCredential(t)}}aa.FACTOR_ID="phone";var ra="@firebase/auth",ia="0.20.3";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class oa{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),(null===(t=this.auth.currentUser)||void 0===t?void 0:t.uid)||null}async getToken(t){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const e=await this.auth.currentUser.getIdToken(t);return{accessToken:e}}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged((e=>{var n;t((null===(n=e)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){g(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sa(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function la(t){(0,r.Xd)(new s.wA("auth",((e,{options:n})=>{const a=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=a.options;return((e,a)=>{g(i&&!i.includes(":"),"invalid-api-key",{appName:e.name}),g(!(null===o||void 0===o?void 0:o.includes(":")),"argument-error",{appName:e.name});const r={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Vt(t)},s=new Ht(e,a,r);return V(s,n),s})(a,r)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((t,e,n)=>{const a=t.getProvider("auth-internal");a.initialize()}))),(0,r.Xd)(new s.wA("auth-internal",(t=>{const e=Ct(t.getProvider("auth").getImmediate());return(t=>new oa(t))(e)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,r.KN)(ra,ia,sa(t)),(0,r.KN)(ra,ia,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ca(t=(0,r.Mq)()){const e=(0,r.qX)(t,"auth");return e.isInitialized()?e.getImmediate():M(t,{popupRedirectResolver:ta,persistence:[qe,ye,we]})}la("Browser")},6926:function(t,e,n){"use strict";n.d(e,{ET:function(){return hh},hJ:function(){return Vu},JU:function(){return Au},ad:function(){return Iu},cf:function(){return dh},IO:function(){return oh},pl:function(){return uh}});n(1703),n(8675),n(3462),n(2801),n(2262),n(4506),n(6699);var a,r=n(1333),i=n(7805),o=n(7366),s=n(3536),l="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:"undefined"!==typeof self?self:{},c={},u=u||{},h=l||self;function d(){}function f(t){var e=typeof t;return e="object"!=e?e:t?Array.isArray(t)?"array":e:"null","array"==e||"object"==e&&"number"==typeof t.length}function p(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function v(t){return Object.prototype.hasOwnProperty.call(t,m)&&t[m]||(t[m]=++g)}var m="closure_uid_"+(1e9*Math.random()>>>0),g=0;function b(t,e,n){return t.call.apply(t.bind,arguments)}function y(t,e,n){if(!t)throw Error();if(2<arguments.length){var a=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,a),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function z(t,e,n){return z=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?b:y,z.apply(null,arguments)}function w(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function M(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(t,n,a){for(var r=Array(arguments.length-2),i=2;i<arguments.length;i++)r[i-2]=arguments[i];return e.prototype[n].apply(t,r)}}function V(){this.s=this.s,this.o=this.o}var A=0,H={};V.prototype.s=!1,V.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0!=A)){var t=v(this);delete H[t]}},V.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const C=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"===typeof t)return"string"!==typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},O=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const a=t.length,r="string"===typeof t?t.split(""):t;for(let i=0;i<a;i++)i in r&&e.call(n,r[i],i,t)};function I(t){t:{var e=qn;const n=t.length,a="string"===typeof t?t.split(""):t;for(let r=0;r<n;r++)if(r in a&&e.call(void 0,a[r],r,t)){e=r;break t}e=-1}return 0>e?null:"string"===typeof t?t.charAt(e):t[e]}function S(t){return Array.prototype.concat.apply([],arguments)}function B(t){const e=t.length;if(0<e){const n=Array(e);for(let a=0;a<e;a++)n[a]=t[a];return n}return[]}function T(t){return/^[\s\xa0]*$/.test(t)}var L,k=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function E(t,e){return-1!=t.indexOf(e)}function P(t,e){return t<e?-1:t>e?1:0}t:{var F=h.navigator;if(F){var _=F.userAgent;if(_){L=_;break t}}L=""}function D(t,e,n){for(const a in t)e.call(n,t[a],a,t)}function x(t){const e={};for(const n in t)e[n]=t[n];return e}var j="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function N(t,e){let n,a;for(let r=1;r<arguments.length;r++){for(n in a=arguments[r],a)t[n]=a[n];for(let e=0;e<j.length;e++)n=j[e],Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}}function R(t){return R[" "](t),t}function $(t){var e=nt;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}R[" "]=d;var U,G=E(L,"Opera"),q=E(L,"Trident")||E(L,"MSIE"),W=E(L,"Edge"),K=W||q,X=E(L,"Gecko")&&!(E(L.toLowerCase(),"webkit")&&!E(L,"Edge"))&&!(E(L,"Trident")||E(L,"MSIE"))&&!E(L,"Edge"),J=E(L.toLowerCase(),"webkit")&&!E(L,"Edge");function Y(){var t=h.document;return t?t.documentMode:void 0}t:{var Q="",Z=function(){var t=L;return X?/rv:([^\);]+)(\)|;)/.exec(t):W?/Edge\/([\d\.]+)/.exec(t):q?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t):J?/WebKit\/(\S+)/.exec(t):G?/(?:Version)[ \/]?(\S+)/.exec(t):void 0}();if(Z&&(Q=Z?Z[1]:""),q){var tt=Y();if(null!=tt&&tt>parseFloat(Q)){U=String(tt);break t}}U=Q}var et,nt={};function at(){return $((function(){let t=0;const e=k(String(U)).split("."),n=k("9").split("."),a=Math.max(e.length,n.length);for(let o=0;0==t&&o<a;o++){var r=e[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],0==r[0].length&&0==i[0].length)break;t=P(0==r[1].length?0:parseInt(r[1],10),0==i[1].length?0:parseInt(i[1],10))||P(0==r[2].length,0==i[2].length)||P(r[2],i[2]),r=r[3],i=i[3]}while(0==t)}return 0<=t}))}if(h.document&&q){var rt=Y();et=rt||(parseInt(U,10)||void 0)}else et=void 0;var it=et,ot=function(){if(!h.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{h.addEventListener("test",d,e),h.removeEventListener("test",d,e)}catch(n){}return t}();function st(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}function lt(t,e){if(st.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,a=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(X){t:{try{R(e.nodeName);var r=!0;break t}catch(i){}r=!1}r||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,a?(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"===typeof t.pointerType?t.pointerType:ct[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&lt.Z.h.call(this)}}st.prototype.h=function(){this.defaultPrevented=!0},M(lt,st);var ct={2:"touch",3:"pen",4:"mouse"};lt.prototype.h=function(){lt.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ut="closure_listenable_"+(1e6*Math.random()|0),ht=0;function dt(t,e,n,a,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!a,this.ia=r,this.key=++ht,this.ca=this.fa=!1}function ft(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function pt(t){this.src=t,this.g={},this.h=0}function vt(t,e){var n=e.type;if(n in t.g){var a,r=t.g[n],i=C(r,e);(a=0<=i)&&Array.prototype.splice.call(r,i,1),a&&(ft(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function mt(t,e,n,a){for(var r=0;r<t.length;++r){var i=t[r];if(!i.ca&&i.listener==e&&i.capture==!!n&&i.ia==a)return r}return-1}pt.prototype.add=function(t,e,n,a,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=mt(t,e,a,r);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new dt(e,this.src,i,!!a,r),e.fa=n,t.push(e)),e};var gt="closure_lm_"+(1e6*Math.random()|0),bt={};function yt(t,e,n,a,r){if(a&&a.once)return Mt(t,e,n,a,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)yt(t,e[i],n,a,r);return null}return n=St(n),t&&t[ut]?t.N(e,n,p(a)?!!a.capture:!!a,r):zt(t,e,n,!1,a,r)}function zt(t,e,n,a,r,i){if(!e)throw Error("Invalid event type");var o=p(r)?!!r.capture:!!r,s=Ot(t);if(s||(t[gt]=s=new pt(t)),n=s.add(e,n,a,o,i),n.proxy)return n;if(a=wt(),n.proxy=a,a.src=t,a.listener=n,t.addEventListener)ot||(r=o),void 0===r&&(r=!1),t.addEventListener(e.toString(),a,r);else if(t.attachEvent)t.attachEvent(Ht(e.toString()),a);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(a)}return n}function wt(){function t(n){return e.call(t.src,t.listener,n)}var e=Ct;return t}function Mt(t,e,n,a,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Mt(t,e[i],n,a,r);return null}return n=St(n),t&&t[ut]?t.O(e,n,p(a)?!!a.capture:!!a,r):zt(t,e,n,!0,a,r)}function Vt(t,e,n,a,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)Vt(t,e[i],n,a,r);else a=p(a)?!!a.capture:!!a,n=St(n),t&&t[ut]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=mt(i,n,a,r),-1<n&&(ft(i[n]),Array.prototype.splice.call(i,n,1),0==i.length&&(delete t.g[e],t.h--)))):t&&(t=Ot(t))&&(e=t.g[e.toString()],t=-1,e&&(t=mt(e,n,a,r)),(n=-1<t?e[t]:null)&&At(n))}function At(t){if("number"!==typeof t&&t&&!t.ca){var e=t.src;if(e&&e[ut])vt(e.i,t);else{var n=t.type,a=t.proxy;e.removeEventListener?e.removeEventListener(n,a,t.capture):e.detachEvent?e.detachEvent(Ht(n),a):e.addListener&&e.removeListener&&e.removeListener(a),(n=Ot(e))?(vt(n,t),0==n.h&&(n.src=null,e[gt]=null)):ft(t)}}}function Ht(t){return t in bt?bt[t]:bt[t]="on"+t}function Ct(t,e){if(t.ca)t=!0;else{e=new lt(e,this);var n=t.listener,a=t.ia||t.src;t.fa&&At(t),t=n.call(a,e)}return t}function Ot(t){return t=t[gt],t instanceof pt?t:null}var It="__closure_events_fn_"+(1e9*Math.random()>>>0);function St(t){return"function"===typeof t?t:(t[It]||(t[It]=function(e){return t.handleEvent(e)}),t[It])}function Bt(){V.call(this),this.i=new pt(this),this.P=this,this.I=null}function Tt(t,e){var n,a=t.I;if(a)for(n=[];a;a=a.I)n.push(a);if(t=t.P,a=e.type||e,"string"===typeof e)e=new st(e,t);else if(e instanceof st)e.target=e.target||t;else{var r=e;e=new st(a,t),N(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=Lt(o,a,!0,e)&&r}if(o=e.g=t,r=Lt(o,a,!0,e)&&r,r=Lt(o,a,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=Lt(o,a,!1,e)&&r}function Lt(t,e,n,a){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ca&&o.capture==n){var s=o.listener,l=o.ia||o.src;o.fa&&vt(t.i,o),r=!1!==s.call(l,a)&&r}}return r&&!a.defaultPrevented}M(Bt,V),Bt.prototype[ut]=!0,Bt.prototype.removeEventListener=function(t,e,n,a){Vt(this,t,e,n,a)},Bt.prototype.M=function(){if(Bt.Z.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],a=0;a<n.length;a++)ft(n[a]);delete e.g[t],e.h--}}this.I=null},Bt.prototype.N=function(t,e,n,a){return this.i.add(String(t),e,!1,n,a)},Bt.prototype.O=function(t,e,n,a){return this.i.add(String(t),e,!0,n,a)};var kt=h.JSON.stringify;function Et(){var t=$t;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Pt{constructor(){this.h=this.g=null}add(t,e){const n=_t.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}}var Ft,_t=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}((()=>new Dt),(t=>t.reset()));class Dt{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function xt(t){h.setTimeout((()=>{throw t}),0)}function jt(t,e){Ft||Nt(),Rt||(Ft(),Rt=!0),$t.add(t,e)}function Nt(){var t=h.Promise.resolve(void 0);Ft=function(){t.then(Ut)}}var Rt=!1,$t=new Pt;function Ut(){for(var t;t=Et();){try{t.h.call(t.g)}catch(n){xt(n)}var e=_t;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Rt=!1}function Gt(t,e){Bt.call(this),this.h=t||1,this.g=e||h,this.j=z(this.kb,this),this.l=Date.now()}function qt(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}function Wt(t,e,n){if("function"===typeof t)n&&(t=z(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=z(t.handleEvent,t)}return 2147483647<Number(e)?-1:h.setTimeout(t,e||0)}function Kt(t){t.g=Wt((()=>{t.g=null,t.i&&(t.i=!1,Kt(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}M(Gt,Bt),a=Gt.prototype,a.da=!1,a.S=null,a.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Tt(this,"tick"),this.da&&(qt(this),this.start()))}},a.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},a.M=function(){Gt.Z.M.call(this),qt(this),delete this.g};class Xt extends V{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Kt(this)}M(){super.M(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Jt(t){V.call(this),this.h=t,this.g={}}M(Jt,V);var Yt=[];function Qt(t,e,n,a){Array.isArray(n)||(n&&(Yt[0]=n.toString()),n=Yt);for(var r=0;r<n.length;r++){var i=yt(e,n[r],a||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function Zt(t){D(t.g,(function(t,e){this.g.hasOwnProperty(e)&&At(t)}),t),t.g={}}function te(){this.g=!0}function ee(t,e,n,a,r,i){t.info((function(){if(t.g)if(i)for(var o="",s=i.split("&"),l=0;l<s.length;l++){var c=s[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&"type"==h[1]?o+(u+"=")+c+"&":o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+a+") [attempt "+r+"]: "+e+"\n"+n+"\n"+o}))}function ne(t,e,n,a,r,i,o){t.info((function(){return"XMLHTTP RESP ("+a+") [ attempt "+r+"]: "+e+"\n"+n+"\n"+i+" "+o}))}function ae(t,e,n,a){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+ie(t,n)+(a?" "+a:"")}))}function re(t,e){t.info((function(){return"TIMEOUT: "+e}))}function ie(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var a=n[t];if(!(2>a.length)){var r=a[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if("noop"!=i&&"stop"!=i&&"close"!=i)for(var o=1;o<r.length;o++)r[o]=""}}}return kt(n)}catch(s){return e}}Jt.prototype.M=function(){Jt.Z.M.call(this),Zt(this)},Jt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},te.prototype.Aa=function(){this.g=!1},te.prototype.info=function(){};var oe={},se=null;function le(){return se=se||new Bt}function ce(t){st.call(this,oe.Ma,t)}function ue(t){const e=le();Tt(e,new ce(e,t))}function he(t,e){st.call(this,oe.STAT_EVENT,t),this.stat=e}function de(t){const e=le();Tt(e,new he(e,t))}function fe(t,e){st.call(this,oe.Na,t),this.size=e}function pe(t,e){if("function"!==typeof t)throw Error("Fn must not be null and must be a function");return h.setTimeout((function(){t()}),e)}oe.Ma="serverreachability",M(ce,st),oe.STAT_EVENT="statevent",M(he,st),oe.Na="timingevent",M(fe,st);var ve={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},me={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function ge(){}function be(t){return t.h||(t.h=t.i())}function ye(){}ge.prototype.h=null;var ze,we={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Me(){st.call(this,"d")}function Ve(){st.call(this,"c")}function Ae(){}function He(t,e,n,a){this.l=t,this.j=e,this.m=n,this.X=a||1,this.V=new Jt(this),this.P=Oe,t=K?125:void 0,this.W=new Gt(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Ce}function Ce(){this.i=null,this.g="",this.h=!1}M(Me,st),M(Ve,st),M(Ae,ge),Ae.prototype.g=function(){return new XMLHttpRequest},Ae.prototype.i=function(){return{}},ze=new Ae;var Oe=45e3,Ie={},Se={};function Be(t,e,n){t.K=1,t.v=en(Xe(e)),t.s=n,t.U=!0,Te(t,null)}function Te(t,e){t.F=Date.now(),Pe(t),t.A=Xe(t.v);var n=t.A,a=t.X;Array.isArray(a)||(a=[String(a)]),gn(n.h,"t",a),t.C=0,n=t.l.H,t.h=new Ce,t.g=Va(t.l,n?e:null,!t.s),0<t.O&&(t.L=new Xt(z(t.Ia,t,t.g),t.O)),Qt(t.V,t.g,"readystatechange",t.gb),e=t.H?x(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),ue(1),ee(t.j,t.u,t.A,t.m,t.X,t.s)}function Le(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Ba)}function ke(t,e,n){let a,r=!0;for(;!t.I&&t.C<n.length;){if(a=Ee(t,n),a==Se){4==e&&(t.o=4,de(14),r=!1),ae(t.j,t.m,null,"[Incomplete Response]");break}if(a==Ie){t.o=4,de(15),ae(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}ae(t.j,t.m,a,null),je(t,a)}Le(t)&&a!=Se&&a!=Ie&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,de(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),va(e),e.L=!0,de(11))):(ae(t.j,t.m,n,"[Invalid Chunked Response]"),xe(t),De(t))}function Ee(t,e){var n=t.C,a=e.indexOf("\n",n);return-1==a?Se:(n=Number(e.substring(n,a)),isNaN(n)?Ie:(a+=1,a+n>e.length?Se:(e=e.substr(a,n),t.C=a+n,e)))}function Pe(t){t.Y=Date.now()+t.P,Fe(t,t.P)}function Fe(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=pe(z(t.eb,t),e)}function _e(t){t.B&&(h.clearTimeout(t.B),t.B=null)}function De(t){0==t.l.G||t.I||ba(t.l,t)}function xe(t){_e(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,qt(t.W),Zt(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function je(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||Hn(n.i,t)))if(n.I=t.N,!t.J&&Hn(n.i,t)&&3==n.G){try{var a=n.Ca.g.parse(e)}catch(c){a=null}if(Array.isArray(a)&&3==a.length){var r=a;if(0==r[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;ga(n),ia(n)}pa(n),de(18)}}else n.ta=r[1],0<n.ta-n.U&&37500>r[2]&&n.N&&0==n.A&&!n.v&&(n.v=pe(z(n.ab,n),6e3));if(1>=An(n.i)&&n.ka){try{n.ka()}catch(c){}n.ka=void 0}}else za(n,11)}else if((t.J||n.g==t)&&ga(n),!T(e))for(r=n.Ca.g.parse(e),e=0;e<r.length;e++){let c=r[e];if(n.U=c[0],c=c[1],2==n.G)if("c"==c[0]){n.J=c[1],n.la=c[2];const e=c[3];null!=e&&(n.ma=e,n.h.info("VER="+n.ma));const r=c[4];null!=r&&(n.za=r,n.h.info("SVER="+n.za));const u=c[5];null!=u&&"number"===typeof u&&0<u&&(a=1.5*u,n.K=a,n.h.info("backChannelRequestTimeoutMs_="+a)),a=n;const h=t.g;if(h){const t=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var i=a.i;!i.g&&(E(t,"spdy")||E(t,"quic")||E(t,"h2"))&&(i.j=i.l,i.g=new Set,i.h&&(Cn(i,i.h),i.h=null))}if(a.D){const t=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(a.sa=t,tn(a.F,a.D,t))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),a=n;var o=t;if(a.oa=Ma(a,a.H?a.la:null,a.W),o.J){On(a.i,o);var s=o,l=a.K;l&&s.setTimeout(l),s.B&&(_e(s),Pe(s)),a.g=o}else fa(a);0<n.l.length&&la(n)}else"stop"!=c[0]&&"close"!=c[0]||za(n,7);else 3==n.G&&("stop"==c[0]||"close"==c[0]?"stop"==c[0]?za(n,7):ra(n):"noop"!=c[0]&&n.j&&n.j.wa(c),n.A=0)}ue(4)}catch(c){}}function Ne(t){if(t.R&&"function"==typeof t.R)return t.R();if("string"===typeof t)return t.split("");if(f(t)){for(var e=[],n=t.length,a=0;a<n;a++)e.push(t[a]);return e}for(a in e=[],n=0,t)e[n++]=t[a];return e}function Re(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(f(t)||"string"===typeof t)O(t,e,void 0);else{if(t.T&&"function"==typeof t.T)var n=t.T();else if(t.R&&"function"==typeof t.R)n=void 0;else if(f(t)||"string"===typeof t){n=[];for(var a=t.length,r=0;r<a;r++)n.push(r)}else for(r in n=[],a=0,t)n[a++]=r;a=Ne(t),r=a.length;for(var i=0;i<r;i++)e.call(void 0,a[i],n&&n[i],t)}}function $e(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var a=0;a<n;a+=2)this.set(arguments[a],arguments[a+1])}else if(t)if(t instanceof $e)for(n=t.T(),a=0;a<n.length;a++)this.set(n[a],t.get(n[a]));else for(a in t)this.set(a,t[a])}function Ue(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var a=t.g[e];Ge(t.h,a)&&(t.g[n++]=a),e++}t.g.length=n}if(t.i!=t.g.length){var r={};for(n=e=0;e<t.g.length;)a=t.g[e],Ge(r,a)||(t.g[n++]=a,r[a]=1),e++;t.g.length=n}}function Ge(t,e){return Object.prototype.hasOwnProperty.call(t,e)}a=He.prototype,a.setTimeout=function(t){this.P=t},a.gb=function(t){t=t.target;const e=this.L;e&&3==Qn(t)?e.l():this.Ia(t)},a.Ia=function(t){try{if(t==this.g)t:{const u=Qn(this.g);var e=this.g.Da();const d=this.g.ba();if(!(3>u)&&(3!=u||K||this.g&&(this.h.h||this.g.ga()||Zn(this.g)))){this.I||4!=u||7==e||ue(8==e||0>=d?3:2),_e(this);var n=this.g.ba();this.N=n;e:if(Le(this)){var a=Zn(this.g);t="";var r=a.length,i=4==Qn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){xe(this),De(this);var o="";break e}this.h.i=new h.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(a[e],{stream:i&&e==r-1});a.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=200==n,ne(this.j,this.u,this.A,this.m,this.X,u,n),this.i){if(this.$&&!this.J){e:{if(this.g){var s,l=this.g;if((s=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!T(s)){var c=s;break e}}c=null}if(!(n=c)){this.i=!1,this.o=3,de(12),xe(this),De(this);break t}ae(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,je(this,n)}this.U?(ke(this,u,o),K&&this.i&&3==u&&(Qt(this.V,this.W,"tick",this.fb),this.W.start())):(ae(this.j,this.m,o,null),je(this,o)),4==u&&xe(this),this.i&&!this.I&&(4==u?ba(this.l,this):(this.i=!1,Pe(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,de(12)):(this.o=0,de(13)),xe(this),De(this)}}}catch(u){}},a.fb=function(){if(this.g){var t=Qn(this.g),e=this.g.ga();this.C<e.length&&(_e(this),ke(this,t,e),this.i&&4!=t&&Pe(this))}},a.cancel=function(){this.I=!0,xe(this)},a.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(re(this.j,this.A),2!=this.K&&(ue(3),de(17)),xe(this),this.o=2,De(this)):Fe(this,this.Y-t)},a=$e.prototype,a.R=function(){Ue(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t},a.T=function(){return Ue(this),this.g.concat()},a.get=function(t,e){return Ge(this.h,t)?this.h[t]:e},a.set=function(t,e){Ge(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e},a.forEach=function(t,e){for(var n=this.T(),a=0;a<n.length;a++){var r=n[a],i=this.get(r);t.call(e,i,r,this)}};var qe=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function We(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var a=t[n].indexOf("="),r=null;if(0<=a){var i=t[n].substring(0,a);r=t[n].substring(a+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function Ke(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof Ke){this.g=void 0!==e?e:t.g,Je(this,t.j),this.s=t.s,Ye(this,t.i),Qe(this,t.m),this.l=t.l,e=t.h;var n=new fn;n.i=e.i,e.g&&(n.g=new $e(e.g),n.h=e.h),Ze(this,n),this.o=t.o}else t&&(n=String(t).match(qe))?(this.g=!!e,Je(this,n[1]||"",!0),this.s=rn(n[2]||""),Ye(this,n[3]||"",!0),Qe(this,n[4]),this.l=rn(n[5]||"",!0),Ze(this,n[6]||"",!0),this.o=rn(n[7]||"")):(this.g=!!e,this.h=new fn(null,this.g))}function Xe(t){return new Ke(t)}function Je(t,e,n){t.j=n?rn(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ye(t,e,n){t.i=n?rn(e,!0):e}function Qe(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Ze(t,e,n){e instanceof fn?(t.h=e,yn(t.h,t.g)):(n||(e=on(e,hn)),t.h=new fn(e,t.g))}function tn(t,e,n){t.h.set(e,n)}function en(t){return tn(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function nn(t){return t instanceof Ke?Xe(t):new Ke(t,void 0)}function an(t,e,n,a){var r=new Ke(null,void 0);return t&&Je(r,t),e&&Ye(r,e),n&&Qe(r,n),a&&(r.l=a),r}function rn(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function on(t,e,n){return"string"===typeof t?(t=encodeURI(t).replace(e,sn),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function sn(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(15&t).toString(16)}Ke.prototype.toString=function(){var t=[],e=this.j;e&&t.push(on(e,ln,!0),":");var n=this.i;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(on(e,ln,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&t.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&t.push("/"),t.push(on(n,"/"==n.charAt(0)?un:cn,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",on(n,dn)),t.join("")};var ln=/[#\/\?@]/g,cn=/[#\?:]/g,un=/[#\?]/g,hn=/[#\?@]/g,dn=/#/g;function fn(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function pn(t){t.g||(t.g=new $e,t.h=0,t.i&&We(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function vn(t,e){pn(t),e=bn(t,e),Ge(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,Ge(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&Ue(t)))}function mn(t,e){return pn(t),e=bn(t,e),Ge(t.g.h,e)}function gn(t,e,n){vn(t,e),0<n.length&&(t.i=null,t.g.set(bn(t,e),B(n)),t.h+=n.length)}function bn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function yn(t,e){e&&!t.j&&(pn(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(vn(this,e),gn(this,n,t))}),t)),t.j=e}a=fn.prototype,a.add=function(t,e){pn(this),this.i=null,t=bn(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},a.forEach=function(t,e){pn(this),this.g.forEach((function(n,a){O(n,(function(n){t.call(e,n,a,this)}),this)}),this)},a.T=function(){pn(this);for(var t=this.g.R(),e=this.g.T(),n=[],a=0;a<e.length;a++)for(var r=t[a],i=0;i<r.length;i++)n.push(e[a]);return n},a.R=function(t){pn(this);var e=[];if("string"===typeof t)mn(this,t)&&(e=S(e,this.g.get(bn(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=S(e,t[n])}return e},a.set=function(t,e){return pn(this),this.i=null,t=bn(this,t),mn(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},a.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e},a.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var a=e[n],r=encodeURIComponent(String(a));a=this.R(a);for(var i=0;i<a.length;i++){var o=r;""!==a[i]&&(o+="="+encodeURIComponent(String(a[i]))),t.push(o)}}return this.i=t.join("&")};var zn=class{constructor(t,e){this.h=t,this.g=e}};function wn(t){this.l=t||Mn,h.PerformanceNavigationTiming?(t=h.performance.getEntriesByType("navigation"),t=0<t.length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol)):t=!!(h.g&&h.g.Ea&&h.g.Ea()&&h.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Mn=10;function Vn(t){return!!t.h||!!t.g&&t.g.size>=t.j}function An(t){return t.h?1:t.g?t.g.size:0}function Hn(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function Cn(t,e){t.g?t.g.add(e):t.h=e}function On(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function In(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return B(t.i)}function Sn(){}function Bn(){this.g=new Sn}function Tn(t,e,n){const a=n||"";try{Re(t,(function(t,n){let r=t;p(t)&&(r=kt(t)),e.push(a+n+"="+encodeURIComponent(r))}))}catch(r){throw e.push(a+"type="+encodeURIComponent("_badmap")),r}}function Ln(t,e){const n=new te;if(h.Image){const a=new Image;a.onload=w(kn,n,a,"TestLoadImage: loaded",!0,e),a.onerror=w(kn,n,a,"TestLoadImage: error",!1,e),a.onabort=w(kn,n,a,"TestLoadImage: abort",!1,e),a.ontimeout=w(kn,n,a,"TestLoadImage: timeout",!1,e),h.setTimeout((function(){a.ontimeout&&a.ontimeout()}),1e4),a.src=t}else e(!1)}function kn(t,e,n,a,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(a)}catch(i){}}function En(t){this.l=t.$b||null,this.j=t.ib||!1}function Pn(t,e){Bt.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Fn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}wn.prototype.cancel=function(){if(this.i=In(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},Sn.prototype.stringify=function(t){return h.JSON.stringify(t,void 0)},Sn.prototype.parse=function(t){return h.JSON.parse(t,void 0)},M(En,ge),En.prototype.g=function(){return new Pn(this.l,this.j)},En.prototype.i=function(t){return function(){return t}}({}),M(Pn,Bt);var Fn=0;function _n(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}function Dn(t){t.readyState=4,t.l=null,t.j=null,t.A=null,xn(t)}function xn(t){t.onreadystatechange&&t.onreadystatechange.call(t)}a=Pn.prototype,a.open=function(t,e){if(this.readyState!=Fn)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,xn(this)},a.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||h).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))},a.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Dn(this)),this.readyState=Fn},a.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,xn(this)),this.g&&(this.readyState=3,xn(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if("undefined"!==typeof h.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;_n(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))},a.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Dn(this):xn(this),3==this.readyState&&_n(this)}},a.Ua=function(t){this.g&&(this.response=this.responseText=t,Dn(this))},a.Ta=function(t){this.g&&(this.response=t,Dn(this))},a.ha=function(){this.g&&Dn(this)},a.setRequestHeader=function(t,e){this.v.append(t,e)},a.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},a.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(Pn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var jn=h.JSON.parse;function Nn(t){Bt.call(this),this.headers=new $e,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Rn,this.K=this.L=!1}M(Nn,Bt);var Rn="",$n=/^https?$/i,Un=["POST","PUT"];function Gn(t){return q&&at()&&"number"===typeof t.timeout&&void 0!==t.ontimeout}function qn(t){return"content-type"==t.toLowerCase()}function Wn(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Kn(t),Jn(t)}function Kn(t){t.D||(t.D=!0,Tt(t,"complete"),Tt(t,"error"))}function Xn(t){if(t.h&&"undefined"!=typeof u&&(!t.C[1]||4!=Qn(t)||2!=t.ba()))if(t.v&&4==Qn(t))Wt(t.Fa,0,t);else if(Tt(t,"readystatechange"),4==Qn(t)){t.h=!1;try{const l=t.ba();t:switch(l){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var a;if(a=0===l){var r=String(t.H).match(qe)[1]||null;if(!r&&h.self&&h.self.location){var i=h.self.location.protocol;r=i.substr(0,i.length-1)}a=!$n.test(r?r.toLowerCase():"")}n=a}if(n)Tt(t,"complete"),Tt(t,"success");else{t.m=6;try{var o=2<Qn(t)?t.g.statusText:""}catch(s){o=""}t.j=o+" ["+t.ba()+"]",Kn(t)}}finally{Jn(t)}}}function Jn(t,e){if(t.g){Yn(t);const a=t.g,r=t.C[0]?d:null;t.g=null,t.C=null,e||Tt(t,"ready");try{a.onreadystatechange=r}catch(n){}}}function Yn(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(h.clearTimeout(t.A),t.A=null)}function Qn(t){return t.g?t.g.readyState:0}function Zn(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Rn:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(e){return null}}function ta(t){let e="";return D(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function ea(t,e,n){t:{for(a in n){var a=!1;break t}a=!0}a||(n=ta(n),"string"===typeof t?null!=n&&encodeURIComponent(String(n)):tn(t,e,n))}function na(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function aa(t){this.za=0,this.l=[],this.h=new te,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=na("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=na("baseRetryDelayMs",5e3,t),this.$a=na("retryDelaySeedMs",1e4,t),this.Ya=na("forwardChannelMaxRetries",2,t),this.ra=na("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new wn(t&&t.concurrentRequestLimit),this.Ca=new Bn,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||!1!==t.Xb}function ra(t){if(oa(t),3==t.G){var e=t.V++,n=Xe(t.F);tn(n,"SID",t.J),tn(n,"RID",e),tn(n,"TYPE","terminate"),ha(t,n),e=new He(t,t.h,e,void 0),e.K=2,e.v=en(Xe(n)),n=!1,h.navigator&&h.navigator.sendBeacon&&(n=h.navigator.sendBeacon(e.v.toString(),"")),!n&&h.Image&&((new Image).src=e.v,n=!0),n||(e.g=Va(e.l,null),e.g.ea(e.v)),e.F=Date.now(),Pe(e)}wa(t)}function ia(t){t.g&&(va(t),t.g.cancel(),t.g=null)}function oa(t){ia(t),t.u&&(h.clearTimeout(t.u),t.u=null),ga(t),t.i.cancel(),t.m&&("number"===typeof t.m&&h.clearTimeout(t.m),t.m=null)}function sa(t,e){t.l.push(new zn(t.Za++,e)),3==t.G&&la(t)}function la(t){Vn(t.i)||t.m||(t.m=!0,jt(t.Ha,t),t.C=0)}function ca(t,e){return!(An(t.i)>=t.i.j-(t.m?1:0))&&(t.m?(t.l=e.D.concat(t.l),!0):!(1==t.G||2==t.G||t.C>=(t.Xa?0:t.Ya))&&(t.m=pe(z(t.Ha,t,e),ya(t,t.C)),t.C++,!0))}function ua(t,e){var n;n=e?e.m:t.V++;const a=Xe(t.F);tn(a,"SID",t.J),tn(a,"RID",n),tn(a,"AID",t.U),ha(t,a),t.o&&t.s&&ea(a,t.o,t.s),n=new He(t,t.h,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=da(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),Cn(t.i,n),Be(n,a,e)}function ha(t,e){t.j&&Re({},(function(t,n){tn(e,n,t)}))}function da(t,e,n){n=Math.min(t.l.length,n);var a=t.j?z(t.j.Oa,t.j,t):null;t:{var r=t.l;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=r[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let i=!0;for(let o=0;o<n;o++){let n=r[o].h;const s=r[o].g;if(n-=e,0>n)e=Math.max(0,r[o].h-100),i=!1;else try{Tn(s,t,"req"+n+"_")}catch(Ya){a&&a(s)}}if(i){a=t.join("&");break t}}}return t=t.l.splice(0,n),e.D=t,a}function fa(t){t.g||t.u||(t.Y=1,jt(t.Ga,t),t.A=0)}function pa(t){return!(t.g||t.u||3<=t.A)&&(t.Y++,t.u=pe(z(t.Ga,t),ya(t,t.A)),t.A++,!0)}function va(t){null!=t.B&&(h.clearTimeout(t.B),t.B=null)}function ma(t){t.g=new He(t,t.h,"rpc",t.Y),null===t.o&&(t.g.H=t.s),t.g.O=0;var e=Xe(t.oa);tn(e,"RID","rpc"),tn(e,"SID",t.J),tn(e,"CI",t.N?"0":"1"),tn(e,"AID",t.U),ha(t,e),tn(e,"TYPE","xmlhttp"),t.o&&t.s&&ea(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=en(Xe(e)),n.s=null,n.U=!0,Te(n,t)}function ga(t){null!=t.v&&(h.clearTimeout(t.v),t.v=null)}function ba(t,e){var n=null;if(t.g==e){ga(t),va(t),t.g=null;var a=2}else{if(!Hn(t.i,e))return;n=e.D,On(t.i,e),a=1}if(t.I=e.N,0!=t.G)if(e.i)if(1==a){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;a=le(),Tt(a,new fe(a,n,e,r)),la(t)}else fa(t);else if(r=e.o,3==r||0==r&&0<t.I||!(1==a&&ca(t,e)||2==a&&pa(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),r){case 1:za(t,5);break;case 4:za(t,10);break;case 3:za(t,6);break;default:za(t,2)}}function ya(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function za(t,e){if(t.h.info("Error code "+e),2==e){var n=null;t.j&&(n=null);var a=z(t.jb,t);n||(n=new Ke("//www.google.com/images/cleardot.gif"),h.location&&"http"==h.location.protocol||Je(n,"https"),en(n)),Ln(n.toString(),a)}else de(2);t.G=0,t.j&&t.j.va(e),wa(t),oa(t)}function wa(t){t.G=0,t.I=-1,t.j&&(0==In(t.i).length&&0==t.l.length||(t.i.i.length=0,B(t.l),t.l.length=0),t.j.ua())}function Ma(t,e,n){let a=nn(n);if(""!=a.i)e&&Ye(a,e+"."+a.i),Qe(a,a.m);else{const t=h.location;a=an(t.protocol,e?e+"."+t.hostname:t.hostname,+t.port,n)}return t.aa&&D(t.aa,(function(t,e){tn(a,e,t)})),e=t.D,n=t.sa,e&&n&&tn(a,e,n),tn(a,"VER",t.ma),ha(t,a),a}function Va(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new Nn(new En({ib:!0})):new Nn(t.qa),e.L=t.H,e}function Aa(){}function Ha(){if(q&&!(10<=Number(it)))throw Error("Environmental error: no available transport.")}function Ca(t,e){Bt.call(this),this.g=new aa(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!T(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!T(e)&&(this.g.D=e,t=this.h,null!==t&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Sa(this)}function Oa(t){Me.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function Ia(){Ve.call(this),this.status=1}function Sa(t){this.g=t}a=Nn.prototype,a.ea=function(t,e,n,a){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():ze.g(),this.C=this.u?be(this.u):be(ze),this.g.onreadystatechange=z(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){return void Wn(this,i)}t=n||"";const r=new $e(this.headers);a&&Re(a,(function(t,e){r.set(e,t)})),a=I(r.T()),n=h.FormData&&t instanceof h.FormData,!(0<=C(Un,e))||a||n||r.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),r.forEach((function(t,e){this.g.setRequestHeader(e,t)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Yn(this),0<this.B&&((this.K=Gn(this.g))?(this.g.timeout=this.B,this.g.ontimeout=z(this.pa,this)):this.A=Wt(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Wn(this,i)}},a.pa=function(){"undefined"!=typeof u&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Tt(this,"timeout"),this.abort(8))},a.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Tt(this,"complete"),Tt(this,"abort"),Jn(this))},a.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Jn(this,!0)),Nn.Z.M.call(this)},a.Fa=function(){this.s||(this.F||this.v||this.l?Xn(this):this.cb())},a.cb=function(){Xn(this)},a.ba=function(){try{return 2<Qn(this)?this.g.status:-1}catch(t){return-1}},a.ga=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},a.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),jn(e)}},a.Da=function(){return this.m},a.La=function(){return"string"===typeof this.j?this.j:String(this.j)},a=aa.prototype,a.ma=8,a.G=1,a.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch(e){}},a.Ha=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const r=new He(this,this.h,t,void 0);let i=this.s;if(this.P&&(i?(i=x(i),N(i,this.P)):i=this.P),null===this.o&&(r.H=i),this.ja)t:{for(var e=0,n=0;n<this.l.length;n++){var a=this.l[n];if(a="__data__"in a.g&&(a=a.g.__data__,"string"===typeof a)?a.length:void 0,void 0===a)break;if(e+=a,4096<e){e=n;break t}if(4096===e||n===this.l.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=da(this,r,e),n=Xe(this.F),tn(n,"RID",t),tn(n,"CVER",22),this.D&&tn(n,"X-HTTP-Session-Id",this.D),ha(this,n),this.o&&i&&ea(n,this.o,i),Cn(this.i,r),this.Ra&&tn(n,"TYPE","init"),this.ja?(tn(n,"$req",e),tn(n,"SID","null"),r.$=!0,Be(r,n,null)):Be(r,n,e),this.G=2}}else 3==this.G&&(t?ua(this,t):0==this.l.length||Vn(this.i)||ua(this))},a.Ga=function(){if(this.u=null,ma(this),this.$&&!(this.L||null==this.g||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=pe(z(this.bb,this),t)}},a.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,de(10),ia(this),ma(this))},a.ab=function(){null!=this.v&&(this.v=null,ia(this),pa(this),de(19))},a.jb=function(t){t?(this.h.info("Successfully pinged google.com"),de(2)):(this.h.info("Failed to ping google.com"),de(1))},a=Aa.prototype,a.xa=function(){},a.wa=function(){},a.va=function(){},a.ua=function(){},a.Oa=function(){},Ha.prototype.g=function(t,e){return new Ca(t,e)},M(Ca,Bt),Ca.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),jt(z(t.hb,t,e))),de(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=Ma(t,null,t.W),la(t)},Ca.prototype.close=function(){ra(this.g)},Ca.prototype.u=function(t){if("string"===typeof t){var e={};e.__data__=t,sa(this.g,e)}else this.v?(e={},e.__data__=kt(t),sa(this.g,e)):sa(this.g,t)},Ca.prototype.M=function(){this.g.j=null,delete this.j,ra(this.g),delete this.g,Ca.Z.M.call(this)},M(Oa,Me),M(Ia,Ve),M(Sa,Aa),Sa.prototype.xa=function(){Tt(this.g,"a")},Sa.prototype.wa=function(t){Tt(this.g,new Oa(t))},Sa.prototype.va=function(t){Tt(this.g,new Ia(t))},Sa.prototype.ua=function(){Tt(this.g,"b")},Ha.prototype.createWebChannel=Ha.prototype.g,Ca.prototype.send=Ca.prototype.u,Ca.prototype.open=Ca.prototype.m,Ca.prototype.close=Ca.prototype.close,ve.NO_ERROR=0,ve.TIMEOUT=8,ve.HTTP_ERROR=6,me.COMPLETE="complete",ye.EventType=we,we.OPEN="a",we.CLOSE="b",we.ERROR="c",we.MESSAGE="d",Bt.prototype.listen=Bt.prototype.N,Nn.prototype.listenOnce=Nn.prototype.O,Nn.prototype.getLastError=Nn.prototype.La,Nn.prototype.getLastErrorCode=Nn.prototype.Da,Nn.prototype.getStatus=Nn.prototype.ba,Nn.prototype.getResponseJson=Nn.prototype.Qa,Nn.prototype.getResponseText=Nn.prototype.ga,Nn.prototype.send=Nn.prototype.ea;var Ba=c.createWebChannelTransport=function(){return new Ha},Ta=c.getStatEventTarget=function(){return le()},La=c.ErrorCode=ve,ka=c.EventType=me,Ea=c.Event=oe,Pa=c.Stat={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},Fa=c.FetchXmlHttpFactory=En,_a=c.WebChannel=ye,Da=c.XhrIo=Nn;const xa="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ja{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}ja.UNAUTHENTICATED=new ja(null),ja.GOOGLE_CREDENTIALS=new ja("google-credentials-uid"),ja.FIRST_PARTY=new ja("first-party-uid"),ja.MOCK_USER=new ja("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Na="9.8.3";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ra=new o.Yd("@firebase/firestore");function $a(){return Ra.logLevel}function Ua(t,...e){if(Ra.logLevel<=o["in"].DEBUG){const n=e.map(Wa);Ra.debug(`Firestore (${Na}): ${t}`,...n)}}function Ga(t,...e){if(Ra.logLevel<=o["in"].ERROR){const n=e.map(Wa);Ra.error(`Firestore (${Na}): ${t}`,...n)}}function qa(t,...e){if(Ra.logLevel<=o["in"].WARN){const n=e.map(Wa);Ra.warn(`Firestore (${Na}): ${t}`,...n)}}function Wa(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ka(t="Unexpected state"){const e=`FIRESTORE (${Na}) INTERNAL ASSERTION FAILED: `+t;throw Ga(e),new Error(e)}function Xa(t,e){t||Ka()}function Ja(t,e){return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ya={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Qa extends s.ZR{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class er{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(ja.UNAUTHENTICATED)))}shutdown(){}}class nr{constructor(t){this.t=t,this.currentUser=ja.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const a=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let r=new Za;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Za,t.enqueueRetryable((()=>a(this.currentUser)))};const i=()=>{const e=r;t.enqueueRetryable((async()=>{await e.promise,await a(this.currentUser)}))},o=t=>{Ua("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),i()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(Ua("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Za)}}),0),i()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(Ua("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(Xa("string"==typeof e.accessToken),new tr(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Xa(null===t||"string"==typeof t),new ja(t)}}class ar{constructor(t,e,n){this.type="FirstParty",this.user=ja.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",e);const a=t.auth.getAuthHeaderValueForFirstParty([]);a&&this.headers.set("Authorization",a),n&&this.headers.set("X-Goog-Iam-Authorization-Token",n)}}class rr{constructor(t,e,n){this.h=t,this.l=e,this.m=n}getToken(){return Promise.resolve(new ar(this.h,this.l,this.m))}start(t,e){t.enqueueRetryable((()=>e(ja.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class ir{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class or{constructor(t){this.g=t,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(t,e){const n=t=>{null!=t.error&&Ua("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.p;return this.p=t.token,Ua("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const a=t=>{Ua("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.g.onInit((t=>a(t))),setTimeout((()=>{if(!this.appCheck){const t=this.g.getImmediate({optional:!0});t?a(t):Ua("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(Xa("string"==typeof t.token),this.p=t.token,new ir(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function sr(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let a=0;a<t;a++)n[a]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{static I(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const a=sr(40);for(let r=0;r<a.length;++r)n.length<20&&a[r]<e&&(n+=t.charAt(a[r]%t.length))}return n}}function cr(t,e){return t<e?-1:t>e?1:0}function ur(t,e,n){return t.length===e.length&&t.every(((t,a)=>n(t,e[a])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class hr{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new Qa(Ya.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new Qa(Ya.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new Qa(Ya.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new Qa(Ya.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return hr.fromMillis(Date.now())}static fromDate(t){return hr.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new hr(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?cr(this.nanoseconds,t.nanoseconds):cr(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(t){this.timestamp=t}static fromTimestamp(t){return new dr(t)}static min(){return new dr(new hr(0,0))}static max(){return new dr(new hr(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(t,e,n){void 0===e?e=0:e>t.length&&Ka(),void 0===n?n=t.length-e:n>t.length-e&&Ka(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===fr.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof fr?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let a=0;a<n;a++){const n=t.get(a),r=e.get(a);if(n<r)return-1;if(n>r)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class pr extends fr{construct(t,e,n){return new pr(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new Qa(Ya.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new pr(e)}static emptyPath(){return new pr([])}}const vr=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class mr extends fr{construct(t,e,n){return new mr(t,e,n)}static isValidIdentifier(t){return vr.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),mr.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new mr(["__name__"])}static fromServerFormat(t){const e=[];let n="",a=0;const r=()=>{if(0===n.length)throw new Qa(Ya.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let i=!1;for(;a<t.length;){const e=t[a];if("\\"===e){if(a+1===t.length)throw new Qa(Ya.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[a+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new Qa(Ya.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,a+=2}else"`"===e?(i=!i,a++):"."!==e||i?(n+=e,a++):(r(),a++)}if(r(),i)throw new Qa(Ya.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new mr(e)}static emptyPath(){return new mr([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(t){this.path=t}static fromPath(t){return new gr(pr.fromString(t))}static fromName(t){return new gr(pr.fromString(t).popFirst(5))}static empty(){return new gr(pr.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===pr.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return pr.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new gr(new pr(t.slice()))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br{constructor(t,e,n,a){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=a}}br.UNKNOWN_ID=-1;function yr(t,e){const n=t.toTimestamp().seconds,a=t.toTimestamp().nanoseconds+1,r=dr.fromTimestamp(1e9===a?new hr(n+1,0):new hr(n,a));return new wr(r,gr.empty(),e)}function zr(t){return new wr(t.readTime,t.key,-1)}class wr{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new wr(dr.min(),gr.empty(),-1)}static max(){return new wr(dr.max(),gr.empty(),-1)}}function Mr(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=gr.comparator(t.documentKey,e.documentKey),0!==n?n:cr(t.largestBatchId,e.largestBatchId))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vr="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Ar{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hr(t){if(t.code!==Ya.FAILED_PRECONDITION||t.message!==Vr)throw t;Ua("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&Ka(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new Cr(((n,a)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,a)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,a)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof Cr?e:Cr.resolve(e)}catch(t){return Cr.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):Cr.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):Cr.reject(e)}static resolve(t){return new Cr(((e,n)=>{e(t)}))}static reject(t){return new Cr(((e,n)=>{n(t)}))}static waitFor(t){return new Cr(((e,n)=>{let a=0,r=0,i=!1;t.forEach((t=>{++a,t.next((()=>{++r,i&&r===a&&e()}),(t=>n(t)))})),i=!0,r===a&&e()}))}static or(t){let e=Cr.resolve(!1);for(const n of t)e=e.next((t=>t?Cr.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,a)=>{n.push(e.call(this,t,a))})),this.waitFor(n)}static mapArray(t,e){return new Cr(((n,a)=>{const r=t.length,i=new Array(r);let o=0;for(let s=0;s<r;s++){const l=s;e(t[l]).next((t=>{i[l]=t,++o,o===r&&n(i)}),(t=>a(t)))}}))}static doWhile(t,e){return new Cr(((n,a)=>{const r=()=>{!0===t()?e().next((()=>{r()}),a):n()};r()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Or(t){return"IndexedDbTransactionError"===t.name}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ir{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.it(t),this.rt=t=>e.writeSequenceNumber(t))}it(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.rt&&this.rt(t),t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sr(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Br(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Tr(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ir.ot=-1;class Lr{constructor(t,e){this.comparator=t,this.root=e||Er.EMPTY}insert(t,e){return new Lr(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Er.BLACK,null,null))}remove(t){return new Lr(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Er.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const a=this.comparator(t,n.key);if(0===a)return e+n.left.size;a<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new kr(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new kr(this.root,t,this.comparator,!1)}getReverseIterator(){return new kr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new kr(this.root,t,this.comparator,!0)}}class kr{constructor(t,e,n,a){this.isReverse=a,this.nodeStack=[];let r=1;for(;!t.isEmpty();)if(r=e?n(t.key,e):1,e&&a&&(r*=-1),r<0)t=this.isReverse?t.left:t.right;else{if(0===r){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Er{constructor(t,e,n,a,r){this.key=t,this.value=e,this.color=null!=n?n:Er.RED,this.left=null!=a?a:Er.EMPTY,this.right=null!=r?r:Er.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,a,r){return new Er(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=a?a:this.left,null!=r?r:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let a=this;const r=n(t,a.key);return a=r<0?a.copy(null,null,null,a.left.insert(t,e,n),null):0===r?a.copy(null,e,null,null,null):a.copy(null,null,null,null,a.right.insert(t,e,n)),a.fixUp()}removeMin(){if(this.left.isEmpty())return Er.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,a=this;if(e(t,a.key)<0)a.left.isEmpty()||a.left.isRed()||a.left.left.isRed()||(a=a.moveRedLeft()),a=a.copy(null,null,null,a.left.remove(t,e),null);else{if(a.left.isRed()&&(a=a.rotateRight()),a.right.isEmpty()||a.right.isRed()||a.right.left.isRed()||(a=a.moveRedRight()),0===e(t,a.key)){if(a.right.isEmpty())return Er.EMPTY;n=a.right.min(),a=a.copy(n.key,n.value,null,null,a.right.removeMin())}a=a.copy(null,null,null,null,a.right.remove(t,e))}return a.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Er.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Er.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Ka();if(this.right.isRed())throw Ka();const t=this.left.check();if(t!==this.right.check())throw Ka();return t+(this.isRed()?0:1)}}Er.EMPTY=null,Er.RED=!0,Er.BLACK=!1,Er.EMPTY=new class{constructor(){this.size=0}get key(){throw Ka()}get value(){throw Ka()}get color(){throw Ka()}get left(){throw Ka()}get right(){throw Ka()}copy(t,e,n,a,r){return this}insert(t,e,n){return new Er(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Pr{constructor(t){this.comparator=t,this.data=new Lr(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const a=n.getNext();if(this.comparator(a.key,t[1])>=0)return;e(a.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Fr(this.data.getIterator())}getIteratorFrom(t){return new Fr(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof Pr))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,a=n.getNext().key;if(0!==this.comparator(t,a))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new Pr(this.comparator);return e.data=t,e}}class Fr{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _r{constructor(t){this.fields=t,t.sort(mr.comparator)}static empty(){return new _r([])}unionWith(t){let e=new Pr(mr.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new _r(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return ur(this.fields,t.fields,((t,e)=>t.isEqual(e)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Dr{constructor(t){this.binaryString=t}static fromBase64String(t){const e=atob(t);return new Dr(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new Dr(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return cr(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Dr.EMPTY_BYTE_STRING=new Dr("");const xr=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function jr(t){if(Xa(!!t),"string"==typeof t){let e=0;const n=xr.exec(t);if(Xa(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const a=new Date(t);return{seconds:Math.floor(a.getTime()/1e3),nanos:e}}return{seconds:Nr(t.seconds),nanos:Nr(t.nanos)}}function Nr(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function Rr(t){return"string"==typeof t?Dr.fromBase64String(t):Dr.fromUint8Array(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $r(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Ur(t){const e=t.mapValue.fields.__previous_value__;return $r(e)?Ur(e):e}function Gr(t){const e=jr(t.mapValue.fields.__local_write_time__.timestampValue);return new hr(e.seconds,e.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(t,e,n,a,r,i,o,s){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=a,this.ssl=r,this.forceLongPolling=i,this.autoDetectLongPolling=o,this.useFetchStreams=s}}class Wr{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new Wr("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof Wr&&t.projectId===this.projectId&&t.database===this.database}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kr(t){return null==t}function Xr(t){return 0===t&&1/t==-1/0}function Jr(t){return"number"==typeof t&&Number.isInteger(t)&&!Xr(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Qr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?$r(t)?4:hi(t)?9007199254740991:10:Ka()}function Zr(t,e){if(t===e)return!0;const n=Qr(t);if(n!==Qr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Gr(t).isEqual(Gr(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=jr(t.timestampValue),a=jr(e.timestampValue);return n.seconds===a.seconds&&n.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return Rr(t.bytesValue).isEqual(Rr(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return Nr(t.geoPointValue.latitude)===Nr(e.geoPointValue.latitude)&&Nr(t.geoPointValue.longitude)===Nr(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return Nr(t.integerValue)===Nr(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=Nr(t.doubleValue),a=Nr(e.doubleValue);return n===a?Xr(n)===Xr(a):isNaN(n)&&isNaN(a)}return!1}(t,e);case 9:return ur(t.arrayValue.values||[],e.arrayValue.values||[],Zr);case 10:return function(t,e){const n=t.mapValue.fields||{},a=e.mapValue.fields||{};if(Sr(n)!==Sr(a))return!1;for(const r in n)if(n.hasOwnProperty(r)&&(void 0===a[r]||!Zr(n[r],a[r])))return!1;return!0}(t,e);default:return Ka()}}function ti(t,e){return void 0!==(t.values||[]).find((t=>Zr(t,e)))}function ei(t,e){if(t===e)return 0;const n=Qr(t),a=Qr(e);if(n!==a)return cr(n,a);switch(n){case 0:case 9007199254740991:return 0;case 1:return cr(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=Nr(t.integerValue||t.doubleValue),a=Nr(e.integerValue||e.doubleValue);return n<a?-1:n>a?1:n===a?0:isNaN(n)?isNaN(a)?0:-1:1}(t,e);case 3:return ni(t.timestampValue,e.timestampValue);case 4:return ni(Gr(t),Gr(e));case 5:return cr(t.stringValue,e.stringValue);case 6:return function(t,e){const n=Rr(t),a=Rr(e);return n.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),a=e.split("/");for(let r=0;r<n.length&&r<a.length;r++){const t=cr(n[r],a[r]);if(0!==t)return t}return cr(n.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=cr(Nr(t.latitude),Nr(e.latitude));return 0!==n?n:cr(Nr(t.longitude),Nr(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],a=e.values||[];for(let r=0;r<n.length&&r<a.length;++r){const t=ei(n[r],a[r]);if(t)return t}return cr(n.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){if(t===Yr.mapValue&&e===Yr.mapValue)return 0;if(t===Yr.mapValue)return 1;if(e===Yr.mapValue)return-1;const n=t.fields||{},a=Object.keys(n),r=e.fields||{},i=Object.keys(r);a.sort(),i.sort();for(let o=0;o<a.length&&o<i.length;++o){const t=cr(a[o],i[o]);if(0!==t)return t;const e=ei(n[a[o]],r[i[o]]);if(0!==e)return e}return cr(a.length,i.length)}(t.mapValue,e.mapValue);default:throw Ka()}}function ni(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return cr(t,e);const n=jr(t),a=jr(e),r=cr(n.seconds,a.seconds);return 0!==r?r:cr(n.nanos,a.nanos)}function ai(t){return ri(t)}function ri(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=jr(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Rr(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,gr.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const a of t.values||[])n?n=!1:e+=",",e+=ri(a);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",a=!0;for(const r of e)a?a=!1:n+=",",n+=`${r}:${ri(t.fields[r])}`;return n+"}"}(t.mapValue):Ka();var e,n}function ii(t){return!!t&&"integerValue"in t}function oi(t){return!!t&&"arrayValue"in t}function si(t){return!!t&&"nullValue"in t}function li(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ci(t){return!!t&&"mapValue"in t}function ui(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Br(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=ui(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ui(t.arrayValue.values[n]);return e}return Object.assign({},t)}function hi(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class di{constructor(t){this.value=t}static empty(){return new di({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!ci(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=ui(e)}setAll(t){let e=mr.emptyPath(),n={},a=[];t.forEach(((t,r)=>{if(!e.isImmediateParentOf(r)){const t=this.getFieldsMap(e);this.applyChanges(t,n,a),n={},a=[],e=r.popLast()}t?n[r.lastSegment()]=ui(t):a.push(r.lastSegment())}));const r=this.getFieldsMap(e);this.applyChanges(r,n,a)}delete(t){const e=this.field(t.popLast());ci(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Zr(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let a=e.mapValue.fields[t.get(n)];ci(a)&&a.mapValue.fields||(a={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=a),e=a}return e.mapValue.fields}applyChanges(t,e,n){Br(e,((e,n)=>t[e]=n));for(const a of n)delete t[a]}clone(){return new di(ui(this.value))}}function fi(t){const e=[];return Br(t.fields,((t,n)=>{const a=new mr([t]);if(ci(n)){const t=fi(n.mapValue).fields;if(0===t.length)e.push(a);else for(const n of t)e.push(a.child(n))}else e.push(a)})),new _r(e)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class pi{constructor(t,e,n,a,r,i){this.key=t,this.documentType=e,this.version=n,this.readTime=a,this.data=r,this.documentState=i}static newInvalidDocument(t){return new pi(t,0,dr.min(),dr.min(),di.empty(),0)}static newFoundDocument(t,e,n){return new pi(t,1,e,dr.min(),n,0)}static newNoDocument(t,e){return new pi(t,2,e,dr.min(),di.empty(),0)}static newUnknownDocument(t,e){return new pi(t,3,e,dr.min(),di.empty(),2)}convertToFoundDocument(t,e){return this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=di.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=di.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=dr.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof pi&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new pi(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(t,e=null,n=[],a=[],r=null,i=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=a,this.limit=r,this.startAt=i,this.endAt=o,this.ut=null}}function mi(t,e=null,n=[],a=[],r=null,i=null,o=null){return new vi(t,e,n,a,r,i,o)}function gi(t){const e=Ja(t);if(null===e.ut){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>{return(e=t).field.canonicalString()+e.op.toString()+ai(e.value);var e})).join(","),t+="|ob:",t+=e.orderBy.map((t=>function(t){return t.field.canonicalString()+t.dir}(t))).join(","),Kr(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>ai(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>ai(t))).join(",")),e.ut=t}return e.ut}function bi(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>{return`${(e=t).field.canonicalString()} ${e.op} ${ai(e.value)}`;var e})).join(", ")}]`),Kr(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t))).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>ai(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>ai(t))).join(",")),`Target(${e})`}function yi(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let r=0;r<t.orderBy.length;r++)if(!Li(t.orderBy[r],e.orderBy[r]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let r=0;r<t.filters.length;r++)if(n=t.filters[r],a=e.filters[r],n.op!==a.op||!n.field.isEqual(a.field)||!Zr(n.value,a.value))return!1;var n,a;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Ei(t.startAt,e.startAt)&&Ei(t.endAt,e.endAt)}function zi(t){return gr.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}class wi extends class{}{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.ct(t,e,n):new Mi(t,e,n):"array-contains"===e?new Ci(t,n):"in"===e?new Oi(t,n):"not-in"===e?new Ii(t,n):"array-contains-any"===e?new Si(t,n):new wi(t,e,n)}static ct(t,e,n){return"in"===e?new Vi(t,n):new Ai(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.at(ei(e,this.value)):null!==e&&Qr(this.value)===Qr(e)&&this.at(ei(e,this.value))}at(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return Ka()}}ht(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class Mi extends wi{constructor(t,e,n){super(t,e,n),this.key=gr.fromName(n.referenceValue)}matches(t){const e=gr.comparator(t.key,this.key);return this.at(e)}}class Vi extends wi{constructor(t,e){super(t,"in",e),this.keys=Hi("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class Ai extends wi{constructor(t,e){super(t,"not-in",e),this.keys=Hi("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function Hi(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>gr.fromName(t.referenceValue)))}class Ci extends wi{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return oi(e)&&ti(e.arrayValue,this.value)}}class Oi extends wi{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&ti(this.value.arrayValue,e)}}class Ii extends wi{constructor(t,e){super(t,"not-in",e)}matches(t){if(ti(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!ti(this.value.arrayValue,e)}}class Si extends wi{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!oi(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>ti(this.value.arrayValue,t)))}}class Bi{constructor(t,e){this.position=t,this.inclusive=e}}class Ti{constructor(t,e="asc"){this.field=t,this.dir=e}}function Li(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function ki(t,e,n){let a=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(a=i.field.isKeyField()?gr.comparator(gr.fromName(o.referenceValue),n.key):ei(o,n.data.field(i.field)),"desc"===i.dir&&(a*=-1),0!==a)break}return a}function Ei(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Zr(t.position[n],e.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(t,e=null,n=[],a=[],r=null,i="F",o=null,s=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=a,this.limit=r,this.limitType=i,this.startAt=o,this.endAt=s,this.lt=null,this.ft=null,this.startAt,this.endAt}}function Fi(t,e,n,a,r,i,o,s){return new Pi(t,e,n,a,r,i,o,s)}function _i(t){return new Pi(t)}function Di(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function xi(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function ji(t){for(const e of t.filters)if(e.ht())return e.field;return null}function Ni(t){return null!==t.collectionGroup}function Ri(t){const e=Ja(t);if(null===e.lt){e.lt=[];const t=ji(e),n=xi(e);if(null!==t&&null===n)t.isKeyField()||e.lt.push(new Ti(t)),e.lt.push(new Ti(mr.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.lt.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.lt.push(new Ti(mr.keyField(),t))}}}return e.lt}function $i(t){const e=Ja(t);if(!e.ft)if("F"===e.limitType)e.ft=mi(e.path,e.collectionGroup,Ri(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const r of Ri(e)){const e="desc"===r.dir?"asc":"desc";t.push(new Ti(r.field,e))}const n=e.endAt?new Bi(e.endAt.position,e.endAt.inclusive):null,a=e.startAt?new Bi(e.startAt.position,e.startAt.inclusive):null;e.ft=mi(e.path,e.collectionGroup,t,e.filters,e.limit,n,a)}return e.ft}function Ui(t,e,n){return new Pi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Gi(t,e){return yi($i(t),$i(e))&&t.limitType===e.limitType}function qi(t){return`${gi($i(t))}|lt:${t.limitType}`}function Wi(t){return`Query(target=${bi($i(t))}; limitType=${t.limitType})`}function Ki(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):gr.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of t.explicitOrderBy)if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!function(t,e,n){const a=ki(t,e,n);return t.inclusive?a<=0:a<0}(t.startAt,Ri(t),e))&&!(t.endAt&&!function(t,e,n){const a=ki(t,e,n);return t.inclusive?a>=0:a>0}(t.endAt,Ri(t),e))}(t,e)}function Xi(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Ji(t){return(e,n)=>{let a=!1;for(const r of Ri(t)){const t=Yi(r,e,n);if(0!==t)return t;a=a||r.field.isKeyField()}return 0}}function Yi(t,e,n){const a=t.field.isKeyField()?gr.comparator(e.key,n.key):function(t,e,n){const a=e.data.field(t),r=n.data.field(t);return null!==a&&null!==r?ei(a,r):Ka()}(t.field,e,n);switch(t.dir){case"asc":return a;case"desc":return-1*a;default:return Ka()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qi(t,e){if(t.dt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Xr(e)?"-0":e}}function Zi(t){return{integerValue:""+t}}function to(t,e){return Jr(e)?Zi(e):Qi(t,e)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo{constructor(){this._=void 0}}function no(t,e,n){return t instanceof io?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof oo?so(t,e):t instanceof lo?co(t,e):function(t,e){const n=ro(t,e),a=ho(n)+ho(t._t);return ii(n)&&ii(t._t)?Zi(a):Qi(t.wt,a)}(t,e)}function ao(t,e,n){return t instanceof oo?so(t,e):t instanceof lo?co(t,e):n}function ro(t,e){return t instanceof uo?ii(n=e)||function(t){return!!t&&"doubleValue"in t}(n)?e:{integerValue:0}:null;var n}class io extends eo{}class oo extends eo{constructor(t){super(),this.elements=t}}function so(t,e){const n=fo(e);for(const a of t.elements)n.some((t=>Zr(t,a)))||n.push(a);return{arrayValue:{values:n}}}class lo extends eo{constructor(t){super(),this.elements=t}}function co(t,e){let n=fo(e);for(const a of t.elements)n=n.filter((t=>!Zr(t,a)));return{arrayValue:{values:n}}}class uo extends eo{constructor(t,e){super(),this.wt=t,this._t=e}}function ho(t){return Nr(t.integerValue||t.doubleValue)}function fo(t){return oi(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function po(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof oo&&e instanceof oo||t instanceof lo&&e instanceof lo?ur(t.elements,e.elements,Zr):t instanceof uo&&e instanceof uo?Zr(t._t,e._t):t instanceof io&&e instanceof io}(t.transform,e.transform)}class vo{constructor(t,e){this.version=t,this.transformResults=e}}class mo{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new mo}static exists(t){return new mo(void 0,t)}static updateTime(t){return new mo(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function go(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class bo{}function yo(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new So(t.key,mo.none()):new Ao(t.key,t.data,mo.none());{const n=t.data,a=di.empty();let r=new Pr(mr.comparator);for(let t of e.fields)if(!r.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?a.delete(t):a.set(t,e),r=r.add(t)}return new Ho(t.key,a,new _r(r.toArray()),mo.none())}}function zo(t,e,n){t instanceof Ao?function(t,e,n){const a=t.value.clone(),r=Oo(t.fieldTransforms,e,n.transformResults);a.setAll(r),e.convertToFoundDocument(n.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Ho?function(t,e,n){if(!go(t.precondition,e))return void e.convertToUnknownDocument(n.version);const a=Oo(t.fieldTransforms,e,n.transformResults),r=e.data;r.setAll(Co(t)),r.setAll(a),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function wo(t,e,n,a){return t instanceof Ao?function(t,e,n,a){if(!go(t.precondition,e))return n;const r=t.value.clone(),i=Io(t.fieldTransforms,a,e);return r.setAll(i),e.convertToFoundDocument(e.version,r).setHasLocalMutations(),null}(t,e,n,a):t instanceof Ho?function(t,e,n,a){if(!go(t.precondition,e))return n;const r=Io(t.fieldTransforms,a,e),i=e.data;return i.setAll(Co(t)),i.setAll(r),e.convertToFoundDocument(e.version,i).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map((t=>t.field)))}(t,e,n,a):function(t,e,n){return go(t.precondition,e)?(e.convertToNoDocument(e.version).setHasLocalMutations(),null):n}(t,e,n)}function Mo(t,e){let n=null;for(const a of t.fieldTransforms){const t=e.data.field(a.field),r=ro(a.transform,t||null);null!=r&&(null===n&&(n=di.empty()),n.set(a.field,r))}return n||null}function Vo(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&ur(t,e,((t,e)=>po(t,e)))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ao extends bo{constructor(t,e,n,a=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=a,this.type=0}getFieldMask(){return null}}class Ho extends bo{constructor(t,e,n,a,r=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=a,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function Co(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const a=t.data.field(n);e.set(n,a)}})),e}function Oo(t,e,n){const a=new Map;Xa(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,s=e.data.field(i.field);a.set(i.field,ao(o,s,n[r]))}return a}function Io(t,e,n){const a=new Map;for(const r of t){const t=r.transform,i=n.data.field(r.field);a.set(r.field,no(t,i,e))}return a}class So extends bo{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Bo extends bo{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To{constructor(t){this.count=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Lo,ko;function Eo(t){switch(t){default:return Ka();case Ya.CANCELLED:case Ya.UNKNOWN:case Ya.DEADLINE_EXCEEDED:case Ya.RESOURCE_EXHAUSTED:case Ya.INTERNAL:case Ya.UNAVAILABLE:case Ya.UNAUTHENTICATED:return!1;case Ya.INVALID_ARGUMENT:case Ya.NOT_FOUND:case Ya.ALREADY_EXISTS:case Ya.PERMISSION_DENIED:case Ya.FAILED_PRECONDITION:case Ya.ABORTED:case Ya.OUT_OF_RANGE:case Ya.UNIMPLEMENTED:case Ya.DATA_LOSS:return!0}}function Po(t){if(void 0===t)return Ga("GRPC error has no .code"),Ya.UNKNOWN;switch(t){case Lo.OK:return Ya.OK;case Lo.CANCELLED:return Ya.CANCELLED;case Lo.UNKNOWN:return Ya.UNKNOWN;case Lo.DEADLINE_EXCEEDED:return Ya.DEADLINE_EXCEEDED;case Lo.RESOURCE_EXHAUSTED:return Ya.RESOURCE_EXHAUSTED;case Lo.INTERNAL:return Ya.INTERNAL;case Lo.UNAVAILABLE:return Ya.UNAVAILABLE;case Lo.UNAUTHENTICATED:return Ya.UNAUTHENTICATED;case Lo.INVALID_ARGUMENT:return Ya.INVALID_ARGUMENT;case Lo.NOT_FOUND:return Ya.NOT_FOUND;case Lo.ALREADY_EXISTS:return Ya.ALREADY_EXISTS;case Lo.PERMISSION_DENIED:return Ya.PERMISSION_DENIED;case Lo.FAILED_PRECONDITION:return Ya.FAILED_PRECONDITION;case Lo.ABORTED:return Ya.ABORTED;case Lo.OUT_OF_RANGE:return Ya.OUT_OF_RANGE;case Lo.UNIMPLEMENTED:return Ya.UNIMPLEMENTED;case Lo.DATA_LOSS:return Ya.DATA_LOSS;default:return Ka()}}(ko=Lo||(Lo={}))[ko.OK=0]="OK",ko[ko.CANCELLED=1]="CANCELLED",ko[ko.UNKNOWN=2]="UNKNOWN",ko[ko.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ko[ko.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ko[ko.NOT_FOUND=5]="NOT_FOUND",ko[ko.ALREADY_EXISTS=6]="ALREADY_EXISTS",ko[ko.PERMISSION_DENIED=7]="PERMISSION_DENIED",ko[ko.UNAUTHENTICATED=16]="UNAUTHENTICATED",ko[ko.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ko[ko.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ko[ko.ABORTED=10]="ABORTED",ko[ko.OUT_OF_RANGE=11]="OUT_OF_RANGE",ko[ko.UNIMPLEMENTED=12]="UNIMPLEMENTED",ko[ko.INTERNAL=13]="INTERNAL",ko[ko.UNAVAILABLE=14]="UNAVAILABLE",ko[ko.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Fo{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[a,r]of n)if(this.equalsFn(a,t))return r}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),a=this.inner[n];if(void 0===a)return this.inner[n]=[[t,e]],void this.innerSize++;for(let r=0;r<a.length;r++)if(this.equalsFn(a[r][0],t))return void(a[r]=[t,e]);a.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let a=0;a<n.length;a++)if(this.equalsFn(n[a][0],t))return 1===n.length?delete this.inner[e]:n.splice(a,1),this.innerSize--,!0;return!1}forEach(t){Br(this.inner,((e,n)=>{for(const[a,r]of n)t(a,r)}))}isEmpty(){return Tr(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _o=new Lr(gr.comparator);function Do(){return _o}const xo=new Lr(gr.comparator);function jo(...t){let e=xo;for(const n of t)e=e.insert(n.key,n);return e}function No(t){let e=xo;return t.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function Ro(){return Uo()}function $o(){return Uo()}function Uo(){return new Fo((t=>t.toString()),((t,e)=>t.isEqual(e)))}const Go=new Lr(gr.comparator),qo=new Pr(gr.comparator);function Wo(...t){let e=qo;for(const n of t)e=e.add(n);return e}const Ko=new Pr(cr);function Xo(){return Ko}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{constructor(t,e,n,a,r){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=a,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(t,e){const n=new Map;return n.set(t,Yo.createSynthesizedTargetChangeForCurrentChange(t,e)),new Jo(dr.min(),n,Xo(),Do(),Wo())}}class Yo{constructor(t,e,n,a,r){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=a,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(t,e){return new Yo(Dr.EMPTY_BYTE_STRING,e,Wo(),Wo(),Wo())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(t,e,n,a){this.gt=t,this.removedTargetIds=e,this.key=n,this.yt=a}}class Zo{constructor(t,e){this.targetId=t,this.It=e}}class ts{constructor(t,e,n=Dr.EMPTY_BYTE_STRING,a=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=a}}class es{constructor(){this.Tt=0,this.Et=rs(),this.At=Dr.EMPTY_BYTE_STRING,this.Rt=!1,this.bt=!0}get current(){return this.Rt}get resumeToken(){return this.At}get Pt(){return 0!==this.Tt}get vt(){return this.bt}Vt(t){t.approximateByteSize()>0&&(this.bt=!0,this.At=t)}St(){let t=Wo(),e=Wo(),n=Wo();return this.Et.forEach(((a,r)=>{switch(r){case 0:t=t.add(a);break;case 2:e=e.add(a);break;case 1:n=n.add(a);break;default:Ka()}})),new Yo(this.At,this.Rt,t,e,n)}Dt(){this.bt=!1,this.Et=rs()}Ct(t,e){this.bt=!0,this.Et=this.Et.insert(t,e)}xt(t){this.bt=!0,this.Et=this.Et.remove(t)}Nt(){this.Tt+=1}kt(){this.Tt-=1}Ot(){this.bt=!0,this.Rt=!0}}class ns{constructor(t){this.Mt=t,this.Ft=new Map,this.$t=Do(),this.Bt=as(),this.Lt=new Pr(cr)}Ut(t){for(const e of t.gt)t.yt&&t.yt.isFoundDocument()?this.qt(e,t.yt):this.Kt(e,t.key,t.yt);for(const e of t.removedTargetIds)this.Kt(e,t.key,t.yt)}Gt(t){this.forEachTarget(t,(e=>{const n=this.Qt(e);switch(t.state){case 0:this.jt(e)&&n.Vt(t.resumeToken);break;case 1:n.kt(),n.Pt||n.Dt(),n.Vt(t.resumeToken);break;case 2:n.kt(),n.Pt||this.removeTarget(e);break;case 3:this.jt(e)&&(n.Ot(),n.Vt(t.resumeToken));break;case 4:this.jt(e)&&(this.Wt(e),n.Vt(t.resumeToken));break;default:Ka()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Ft.forEach(((t,n)=>{this.jt(n)&&e(n)}))}zt(t){const e=t.targetId,n=t.It.count,a=this.Ht(e);if(a){const t=a.target;if(zi(t))if(0===n){const n=new gr(t.path);this.Kt(e,n,pi.newNoDocument(n,dr.min()))}else Xa(1===n);else this.Jt(e)!==n&&(this.Wt(e),this.Lt=this.Lt.add(e))}}Yt(t){const e=new Map;this.Ft.forEach(((n,a)=>{const r=this.Ht(a);if(r){if(n.current&&zi(r.target)){const e=new gr(r.target.path);null!==this.$t.get(e)||this.Xt(a,e)||this.Kt(a,e,pi.newNoDocument(e,t))}n.vt&&(e.set(a,n.St()),n.Dt())}}));let n=Wo();this.Bt.forEach(((t,e)=>{let a=!0;e.forEachWhile((t=>{const e=this.Ht(t);return!e||2===e.purpose||(a=!1,!1)})),a&&(n=n.add(t))})),this.$t.forEach(((e,n)=>n.setReadTime(t)));const a=new Jo(t,e,this.Lt,this.$t,n);return this.$t=Do(),this.Bt=as(),this.Lt=new Pr(cr),a}qt(t,e){if(!this.jt(t))return;const n=this.Xt(t,e.key)?2:0;this.Qt(t).Ct(e.key,n),this.$t=this.$t.insert(e.key,e),this.Bt=this.Bt.insert(e.key,this.Zt(e.key).add(t))}Kt(t,e,n){if(!this.jt(t))return;const a=this.Qt(t);this.Xt(t,e)?a.Ct(e,1):a.xt(e),this.Bt=this.Bt.insert(e,this.Zt(e).delete(t)),n&&(this.$t=this.$t.insert(e,n))}removeTarget(t){this.Ft.delete(t)}Jt(t){const e=this.Qt(t).St();return this.Mt.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Nt(t){this.Qt(t).Nt()}Qt(t){let e=this.Ft.get(t);return e||(e=new es,this.Ft.set(t,e)),e}Zt(t){let e=this.Bt.get(t);return e||(e=new Pr(cr),this.Bt=this.Bt.insert(t,e)),e}jt(t){const e=null!==this.Ht(t);return e||Ua("WatchChangeAggregator","Detected inactive target",t),e}Ht(t){const e=this.Ft.get(t);return e&&e.Pt?null:this.Mt.te(t)}Wt(t){this.Ft.set(t,new es),this.Mt.getRemoteKeysForTarget(t).forEach((e=>{this.Kt(t,e,null)}))}Xt(t,e){return this.Mt.getRemoteKeysForTarget(t).has(e)}}function as(){return new Lr(gr.comparator)}function rs(){return new Lr(gr.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const is=(()=>{const t={asc:"ASCENDING",desc:"DESCENDING"};return t})(),os=(()=>{const t={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return t})();class ss{constructor(t,e){this.databaseId=t,this.dt=e}}function ls(t,e){return t.dt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function cs(t,e){return t.dt?e.toBase64():e.toUint8Array()}function us(t,e){return ls(t,e.toTimestamp())}function hs(t){return Xa(!!t),dr.fromTimestamp(function(t){const e=jr(t);return new hr(e.seconds,e.nanos)}(t))}function ds(t,e){return function(t){return new pr(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function fs(t){const e=pr.fromString(t);return Xa(Fs(e)),e}function ps(t,e){return ds(t.databaseId,e.path)}function vs(t,e){const n=fs(e);if(n.get(1)!==t.databaseId.projectId)throw new Qa(Ya.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Qa(Ya.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new gr(ys(n))}function ms(t,e){return ds(t.databaseId,e)}function gs(t){const e=fs(t);return 4===e.length?pr.emptyPath():ys(e)}function bs(t){return new pr(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function ys(t){return Xa(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function zs(t,e,n){return{name:ps(t,e),fields:n.value.mapValue.fields}}function ws(t,e){let n;if("targetChange"in e){e.targetChange;const a=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:Ka()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(t,e){return t.dt?(Xa(void 0===e||"string"==typeof e),Dr.fromBase64String(e||"")):(Xa(void 0===e||e instanceof Uint8Array),Dr.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,s=o&&function(t){const e=void 0===t.code?Ya.UNKNOWN:Po(t.code);return new Qa(e,t.message||"")}(o);n=new ts(a,r,i,s||null)}else if("documentChange"in e){e.documentChange;const a=e.documentChange;a.document,a.document.name,a.document.updateTime;const r=vs(t,a.document.name),i=hs(a.document.updateTime),o=new di({mapValue:{fields:a.document.fields}}),s=pi.newFoundDocument(r,i,o),l=a.targetIds||[],c=a.removedTargetIds||[];n=new Qo(l,c,s.key,s)}else if("documentDelete"in e){e.documentDelete;const a=e.documentDelete;a.document;const r=vs(t,a.document),i=a.readTime?hs(a.readTime):dr.min(),o=pi.newNoDocument(r,i),s=a.removedTargetIds||[];n=new Qo([],s,o.key,o)}else if("documentRemove"in e){e.documentRemove;const a=e.documentRemove;a.document;const r=vs(t,a.document),i=a.removedTargetIds||[];n=new Qo([],i,r,null)}else{if(!("filter"in e))return Ka();{e.filter;const t=e.filter;t.targetId;const a=t.count||0,r=new To(a),i=t.targetId;n=new Zo(i,r)}}return n}function Ms(t,e){let n;if(e instanceof Ao)n={update:zs(t,e.key,e.value)};else if(e instanceof So)n={delete:ps(t,e.key)};else if(e instanceof Ho)n={update:zs(t,e.key,e.data),updateMask:Ps(e.fieldMask)};else{if(!(e instanceof Bo))return Ka();n={verify:ps(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof io)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof oo)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof lo)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof uo)return{fieldPath:e.field.canonicalString(),increment:n._t};throw Ka()}(0,t)))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:us(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:Ka()}(t,e.precondition)),n}function Vs(t,e){return t&&t.length>0?(Xa(void 0!==e),t.map((t=>function(t,e){let n=t.updateTime?hs(t.updateTime):hs(e);return n.isEqual(dr.min())&&(n=hs(e)),new vo(n,t.transformResults||[])}(t,e)))):[]}function As(t,e){return{documents:[ms(t,e.path)]}}function Hs(t,e){const n={structuredQuery:{}},a=e.path;null!==e.collectionGroup?(n.parent=ms(t,a),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=ms(t,a.popLast()),n.structuredQuery.from=[{collectionId:a.lastSegment()}]);const r=function(t){if(0===t.length)return;const e=t.map((t=>function(t){if("=="===t.op){if(li(t.value))return{unaryFilter:{field:Ts(t.field),op:"IS_NAN"}};if(si(t.value))return{unaryFilter:{field:Ts(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(li(t.value))return{unaryFilter:{field:Ts(t.field),op:"IS_NOT_NAN"}};if(si(t.value))return{unaryFilter:{field:Ts(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ts(t.field),op:Bs(t.op),value:t.value}}}(t)));return 1===e.length?e[0]:{compositeFilter:{op:"AND",filters:e}}}(e.filters);r&&(n.structuredQuery.where=r);const i=function(t){if(0!==t.length)return t.map((t=>function(t){return{field:Ts(t.field),direction:Ss(t.dir)}}(t)))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(t,e){return t.dt||Kr(e)?e:{value:e}}(t,e.limit);var s;return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(s=e.startAt).inclusive,values:s.position}),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),n}function Cs(t){let e=gs(t.parent);const n=t.structuredQuery,a=n.from?n.from.length:0;let r=null;if(a>0){Xa(1===a);const t=n.from[0];t.allDescendants?r=t.collectionId:e=e.child(t.collectionId)}let i=[];n.where&&(i=Is(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((t=>function(t){return new Ti(Ls(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t))));let s=null;n.limit&&(s=function(t){let e;return e="object"==typeof t?t.value:t,Kr(e)?null:e}(n.limit));let l=null;n.startAt&&(l=function(t){const e=!!t.before,n=t.values||[];return new Bi(n,e)}(n.startAt));let c=null;return n.endAt&&(c=function(t){const e=!t.before,n=t.values||[];return new Bi(n,e)}(n.endAt)),Fi(e,r,o,i,s,"F",l,c)}function Os(t,e){const n=function(t,e){switch(e){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Ka()}}(0,e.purpose);return null==n?null:{"goog-listen-tags":n}}function Is(t){return t?void 0!==t.unaryFilter?[Es(t)]:void 0!==t.fieldFilter?[ks(t)]:void 0!==t.compositeFilter?t.compositeFilter.filters.map((t=>Is(t))).reduce(((t,e)=>t.concat(e))):Ka():[]}function Ss(t){return is[t]}function Bs(t){return os[t]}function Ts(t){return{fieldPath:t.canonicalString()}}function Ls(t){return mr.fromServerFormat(t.fieldPath)}function ks(t){return wi.create(Ls(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Ka()}}(t.fieldFilter.op),t.fieldFilter.value)}function Es(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Ls(t.unaryFilter.field);return wi.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Ls(t.unaryFilter.field);return wi.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const a=Ls(t.unaryFilter.field);return wi.create(a,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=Ls(t.unaryFilter.field);return wi.create(r,"!=",{nullValue:"NULL_VALUE"});default:return Ka()}}function Ps(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Fs(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _s=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],Ds=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],xs=Ds;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class js{constructor(t,e,n,a){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=a}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let a=0;a<this.mutations.length;a++){const e=this.mutations[a];e.key.isEqual(t.key)&&zo(e,t,n[a])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=wo(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=wo(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=$o();return this.mutations.forEach((a=>{const r=t.get(a.key),i=r.overlayedDocument;let o=this.applyToLocalView(i,r.mutatedFields);o=e.has(a.key)?null:o;const s=yo(i,o);null!==s&&n.set(a.key,s),i.isValidDocument()||i.convertToNoDocument(dr.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),Wo())}isEqual(t){return this.batchId===t.batchId&&ur(this.mutations,t.mutations,((t,e)=>Vo(t,e)))&&ur(this.baseMutations,t.baseMutations,((t,e)=>Vo(t,e)))}}class Ns{constructor(t,e,n,a){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=a}static from(t,e,n){Xa(t.mutations.length===n.length);let a=Go;const r=t.mutations;for(let i=0;i<r.length;i++)a=a.insert(r[i].key,n[i].version);return new Ns(t,e,n,a)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{constructor(t,e,n,a,r=dr.min(),i=dr.min(),o=Dr.EMPTY_BYTE_STRING){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=a,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=i,this.resumeToken=o}withSequenceNumber(t){return new $s(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,e){return new $s(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new $s(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(t){this.ne=t}}function Gs(t){const e=Cs({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?Ui(e,e.limit,"L"):e}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs{constructor(){}re(t,e){this.oe(t,e),e.ue()}oe(t,e){if("nullValue"in t)this.ce(e,5);else if("booleanValue"in t)this.ce(e,10),e.ae(t.booleanValue?1:0);else if("integerValue"in t)this.ce(e,15),e.ae(Nr(t.integerValue));else if("doubleValue"in t){const n=Nr(t.doubleValue);isNaN(n)?this.ce(e,13):(this.ce(e,15),Xr(n)?e.ae(0):e.ae(n))}else if("timestampValue"in t){const n=t.timestampValue;this.ce(e,20),"string"==typeof n?e.he(n):(e.he(`${n.seconds||""}`),e.ae(n.nanos||0))}else if("stringValue"in t)this.le(t.stringValue,e),this.fe(e);else if("bytesValue"in t)this.ce(e,30),e.de(Rr(t.bytesValue)),this.fe(e);else if("referenceValue"in t)this._e(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.ce(e,45),e.ae(n.latitude||0),e.ae(n.longitude||0)}else"mapValue"in t?hi(t)?this.ce(e,Number.MAX_SAFE_INTEGER):(this.we(t.mapValue,e),this.fe(e)):"arrayValue"in t?(this.me(t.arrayValue,e),this.fe(e)):Ka()}le(t,e){this.ce(e,25),this.ge(t,e)}ge(t,e){e.he(t)}we(t,e){const n=t.fields||{};this.ce(e,55);for(const a of Object.keys(n))this.le(a,e),this.oe(n[a],e)}me(t,e){const n=t.values||[];this.ce(e,50);for(const a of n)this.oe(a,e)}_e(t,e){this.ce(e,37),gr.fromName(t).path.forEach((t=>{this.ce(e,60),this.ge(t,e)}))}ce(t,e){t.ae(e)}fe(t){t.ae(2)}}qs.ye=new qs;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ws{constructor(){this.ze=new Ks}addToCollectionParentIndex(t,e){return this.ze.add(e),Cr.resolve()}getCollectionParents(t,e){return Cr.resolve(this.ze.getEntries(e))}addFieldIndex(t,e){return Cr.resolve()}deleteFieldIndex(t,e){return Cr.resolve()}getDocumentsMatchingTarget(t,e){return Cr.resolve(null)}getIndexType(t,e){return Cr.resolve(0)}getFieldIndexes(t,e){return Cr.resolve([])}getNextCollectionGroupToUpdate(t){return Cr.resolve(null)}getMinOffset(t,e){return Cr.resolve(wr.min())}getMinOffsetFromCollectionGroup(t,e){return Cr.resolve(wr.min())}updateCollectionGroup(t,e,n){return Cr.resolve()}updateIndexEntries(t,e){return Cr.resolve()}}class Ks{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),a=this.index[e]||new Pr(pr.comparator),r=!a.has(n);return this.index[e]=a.add(n),r}has(t){const e=t.lastSegment(),n=t.popLast(),a=this.index[e];return a&&a.has(n)}getEntries(t){return(this.index[t]||new Pr(pr.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Uint8Array(0);class Xs{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new Xs(t,Xs.DEFAULT_COLLECTION_PERCENTILE,Xs.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Xs.DEFAULT_COLLECTION_PERCENTILE=10,Xs.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Xs.DEFAULT=new Xs(41943040,Xs.DEFAULT_COLLECTION_PERCENTILE,Xs.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Xs.DISABLED=new Xs(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Js{constructor(t){this.En=t}next(){return this.En+=2,this.En}static An(){return new Js(0)}static Rn(){return new Js(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ys{constructor(){this.changes=new Fo((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,pi.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?Cr.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qs{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(t,e,n,a){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=a}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((a=>(n=a,this.getBaseDocument(t,e,n)))).next((t=>(null!==n&&wo(n.mutation,t,_r.empty(),hr.now()),t)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.getLocalViewOfDocuments(t,e,Wo()).next((()=>e))))}getLocalViewOfDocuments(t,e,n=Wo()){const a=Ro();return this.populateOverlays(t,a,e).next((()=>this.computeViews(t,e,a,n).next((t=>{let e=jo();return t.forEach(((t,n)=>{e=e.insert(t,n.overlayedDocument)})),e}))))}getOverlayedDocuments(t,e){const n=Ro();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,Wo())))}populateOverlays(t,e,n){const a=[];return n.forEach((t=>{e.has(t)||a.push(t)})),this.documentOverlayCache.getOverlays(t,a).next((t=>{t.forEach(((t,n)=>{e.set(t,n)}))}))}computeViews(t,e,n,a){let r=Do();const i=Uo(),o=Uo();return e.forEach(((t,e)=>{const o=n.get(e.key);a.has(e.key)&&(void 0===o||o.mutation instanceof Ho)?r=r.insert(e.key,e):void 0!==o&&(i.set(e.key,o.mutation.getFieldMask()),wo(o.mutation,e,o.mutation.getFieldMask(),hr.now()))})),this.recalculateAndSaveOverlays(t,r).next((t=>(t.forEach(((t,e)=>i.set(t,e))),e.forEach(((t,e)=>{var n;return o.set(t,new Qs(e,null!==(n=i.get(t))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(t,e){const n=Uo();let a=new Lr(((t,e)=>t-e)),r=Wo();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>{for(const r of t)r.keys().forEach((t=>{const i=e.get(t);if(null===i)return;let o=n.get(t)||_r.empty();o=r.applyToLocalView(i,o),n.set(t,o);const s=(a.get(r.batchId)||Wo()).add(t);a=a.insert(r.batchId,s)}))})).next((()=>{const i=[],o=a.getReverseIterator();for(;o.hasNext();){const a=o.getNext(),s=a.key,l=a.value,c=$o();l.forEach((t=>{if(!r.has(t)){const a=yo(e.get(t),n.get(t));null!==a&&c.set(t,a),r=r.add(t)}})),i.push(this.documentOverlayCache.saveOverlays(t,s,c))}return Cr.waitFor(i)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.recalculateAndSaveOverlays(t,e)))}getDocumentsMatchingQuery(t,e,n){return function(t){return gr.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Ni(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n):this.getDocumentsMatchingCollectionQuery(t,e,n)}getNextDocuments(t,e,n,a){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,a).next((r=>{const i=a-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,a-r.size):Cr.resolve(Ro());let o=-1,s=r;return i.next((e=>Cr.forEach(e,((e,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),r.get(e)?Cr.resolve():this.getBaseDocument(t,e,n).next((t=>{s=s.insert(e,t)}))))).next((()=>this.populateOverlays(t,e,r))).next((()=>this.computeViews(t,s,e,Wo()))).next((t=>({batchId:o,changes:No(t)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new gr(e)).next((t=>{let e=jo();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}getDocumentsMatchingCollectionGroupQuery(t,e,n){const a=e.collectionGroup;let r=jo();return this.indexManager.getCollectionParents(t,a).next((i=>Cr.forEach(i,(i=>{const o=function(t,e){return new Pi(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,i.child(a));return this.getDocumentsMatchingCollectionQuery(t,o,n).next((t=>{t.forEach(((t,e)=>{r=r.insert(t,e)}))}))})).next((()=>r))))}getDocumentsMatchingCollectionQuery(t,e,n){let a;return this.remoteDocumentCache.getAllFromCollection(t,e.path,n).next((r=>(a=r,this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId)))).next((t=>{t.forEach(((t,e)=>{const n=e.getKey();null===a.get(n)&&(a=a.insert(n,pi.newInvalidDocument(n)))}));let n=jo();return a.forEach(((a,r)=>{const i=t.get(a);void 0!==i&&wo(i.mutation,r,_r.empty(),hr.now()),Ki(e,r)&&(n=n.insert(a,r))})),n}))}getBaseDocument(t,e,n){return null===n||1===n.mutation.type?this.remoteDocumentCache.getEntry(t,e):Cr.resolve(pi.newInvalidDocument(e))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{constructor(t){this.wt=t,this.Jn=new Map,this.Yn=new Map}getBundleMetadata(t,e){return Cr.resolve(this.Jn.get(e))}saveBundleMetadata(t,e){var n;return this.Jn.set(e.id,{id:(n=e).id,version:n.version,createTime:hs(n.createTime)}),Cr.resolve()}getNamedQuery(t,e){return Cr.resolve(this.Yn.get(e))}saveNamedQuery(t,e){return this.Yn.set(e.name,function(t){return{name:t.name,query:Gs(t.bundledQuery),readTime:hs(t.readTime)}}(e)),Cr.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{constructor(){this.overlays=new Lr(gr.comparator),this.Xn=new Map}getOverlay(t,e){return Cr.resolve(this.overlays.get(e))}getOverlays(t,e){const n=Ro();return Cr.forEach(e,(e=>this.getOverlay(t,e).next((t=>{null!==t&&n.set(e,t)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((n,a)=>{this.ie(t,e,a)})),Cr.resolve()}removeOverlaysForBatchId(t,e,n){const a=this.Xn.get(n);return void 0!==a&&(a.forEach((t=>this.overlays=this.overlays.remove(t))),this.Xn.delete(n)),Cr.resolve()}getOverlaysForCollection(t,e,n){const a=Ro(),r=e.length+1,i=new gr(e.child("")),o=this.overlays.getIteratorFrom(i);for(;o.hasNext();){const t=o.getNext().value,i=t.getKey();if(!e.isPrefixOf(i.path))break;i.path.length===r&&t.largestBatchId>n&&a.set(t.getKey(),t)}return Cr.resolve(a)}getOverlaysForCollectionGroup(t,e,n,a){let r=new Lr(((t,e)=>t-e));const i=this.overlays.getIterator();for(;i.hasNext();){const t=i.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=r.get(t.largestBatchId);null===e&&(e=Ro(),r=r.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=Ro(),s=r.getIterator();for(;s.hasNext();)if(s.getNext().value.forEach(((t,e)=>o.set(t,e))),o.size()>=a)break;return Cr.resolve(o)}ie(t,e,n){const a=this.overlays.get(n.key);if(null!==a){const t=this.Xn.get(a.largestBatchId).delete(n.key);this.Xn.set(a.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new Rs(e,n));let r=this.Xn.get(e);void 0===r&&(r=Wo(),this.Xn.set(e,r)),this.Xn.set(e,r.add(n.key))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{constructor(){this.Zn=new Pr(al.ts),this.es=new Pr(al.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(t,e){const n=new al(t,e);this.Zn=this.Zn.add(n),this.es=this.es.add(n)}ss(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.rs(new al(t,e))}os(t,e){t.forEach((t=>this.removeReference(t,e)))}us(t){const e=new gr(new pr([])),n=new al(e,t),a=new al(e,t+1),r=[];return this.es.forEachInRange([n,a],(t=>{this.rs(t),r.push(t.key)})),r}cs(){this.Zn.forEach((t=>this.rs(t)))}rs(t){this.Zn=this.Zn.delete(t),this.es=this.es.delete(t)}hs(t){const e=new gr(new pr([])),n=new al(e,t),a=new al(e,t+1);let r=Wo();return this.es.forEachInRange([n,a],(t=>{r=r.add(t.key)})),r}containsKey(t){const e=new al(t,0),n=this.Zn.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class al{constructor(t,e){this.key=t,this.ls=e}static ts(t,e){return gr.comparator(t.key,e.key)||cr(t.ls,e.ls)}static ns(t,e){return cr(t.ls,e.ls)||gr.comparator(t.key,e.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.fs=1,this.ds=new Pr(al.ts)}checkEmpty(t){return Cr.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,a){const r=this.fs;this.fs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const i=new js(r,e,n,a);this.mutationQueue.push(i);for(const o of a)this.ds=this.ds.add(new al(o.key,r)),this.indexManager.addToCollectionParentIndex(t,o.key.path.popLast());return Cr.resolve(i)}lookupMutationBatch(t,e){return Cr.resolve(this._s(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,a=this.ws(n),r=a<0?0:a;return Cr.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return Cr.resolve(0===this.mutationQueue.length?-1:this.fs-1)}getAllMutationBatches(t){return Cr.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new al(e,0),a=new al(e,Number.POSITIVE_INFINITY),r=[];return this.ds.forEachInRange([n,a],(t=>{const e=this._s(t.ls);r.push(e)})),Cr.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Pr(cr);return e.forEach((t=>{const e=new al(t,0),a=new al(t,Number.POSITIVE_INFINITY);this.ds.forEachInRange([e,a],(t=>{n=n.add(t.ls)}))})),Cr.resolve(this.gs(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,a=n.length+1;let r=n;gr.isDocumentKey(r)||(r=r.child(""));const i=new al(new gr(r),0);let o=new Pr(cr);return this.ds.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===a&&(o=o.add(t.ls)),!0)}),i),Cr.resolve(this.gs(o))}gs(t){const e=[];return t.forEach((t=>{const n=this._s(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){Xa(0===this.ys(e.batchId,"removed")),this.mutationQueue.shift();let n=this.ds;return Cr.forEach(e.mutations,(a=>{const r=new al(a.key,e.batchId);return n=n.delete(r),this.referenceDelegate.markPotentiallyOrphaned(t,a.key)})).next((()=>{this.ds=n}))}In(t){}containsKey(t,e){const n=new al(e,0),a=this.ds.firstAfterOrEqual(n);return Cr.resolve(e.isEqual(a&&a.key))}performConsistencyCheck(t){return this.mutationQueue.length,Cr.resolve()}ys(t,e){return this.ws(t)}ws(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}_s(t){const e=this.ws(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{constructor(t){this.ps=t,this.docs=new Lr(gr.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,a=this.docs.get(n),r=a?a.size:0,i=this.ps(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:i}),this.size+=i-r,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return Cr.resolve(n?n.document.mutableCopy():pi.newInvalidDocument(e))}getEntries(t,e){let n=Do();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():pi.newInvalidDocument(t))})),Cr.resolve(n)}getAllFromCollection(t,e,n){let a=Do();const r=new gr(e.child("")),i=this.docs.getIteratorFrom(r);for(;i.hasNext();){const{key:t,value:{document:r}}=i.getNext();if(!e.isPrefixOf(t.path))break;t.path.length>e.length+1||Mr(zr(r),n)<=0||(a=a.insert(r.key,r.mutableCopy()))}return Cr.resolve(a)}getAllFromCollectionGroup(t,e,n,a){Ka()}Is(t,e){return Cr.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new ol(this)}getSize(t){return Cr.resolve(this.size)}}class ol extends Ys{constructor(t){super(),this.zn=t}applyChanges(t){const e=[];return this.changes.forEach(((n,a)=>{a.isValidDocument()?e.push(this.zn.addEntry(t,a)):this.zn.removeEntry(n)})),Cr.waitFor(e)}getFromCache(t,e){return this.zn.getEntry(t,e)}getAllFromCache(t,e){return this.zn.getEntries(t,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl{constructor(t){this.persistence=t,this.Ts=new Fo((t=>gi(t)),yi),this.lastRemoteSnapshotVersion=dr.min(),this.highestTargetId=0,this.Es=0,this.As=new nl,this.targetCount=0,this.Rs=Js.An()}forEachTarget(t,e){return this.Ts.forEach(((t,n)=>e(n))),Cr.resolve()}getLastRemoteSnapshotVersion(t){return Cr.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return Cr.resolve(this.Es)}allocateTargetId(t){return this.highestTargetId=this.Rs.next(),Cr.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Es&&(this.Es=e),Cr.resolve()}vn(t){this.Ts.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Rs=new Js(e),this.highestTargetId=e),t.sequenceNumber>this.Es&&(this.Es=t.sequenceNumber)}addTargetData(t,e){return this.vn(e),this.targetCount+=1,Cr.resolve()}updateTargetData(t,e){return this.vn(e),Cr.resolve()}removeTargetData(t,e){return this.Ts.delete(e.target),this.As.us(e.targetId),this.targetCount-=1,Cr.resolve()}removeTargets(t,e,n){let a=0;const r=[];return this.Ts.forEach(((i,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Ts.delete(i),r.push(this.removeMatchingKeysForTargetId(t,o.targetId)),a++)})),Cr.waitFor(r).next((()=>a))}getTargetCount(t){return Cr.resolve(this.targetCount)}getTargetData(t,e){const n=this.Ts.get(e)||null;return Cr.resolve(n)}addMatchingKeys(t,e,n){return this.As.ss(e,n),Cr.resolve()}removeMatchingKeys(t,e,n){this.As.os(e,n);const a=this.persistence.referenceDelegate,r=[];return a&&e.forEach((e=>{r.push(a.markPotentiallyOrphaned(t,e))})),Cr.waitFor(r)}removeMatchingKeysForTargetId(t,e){return this.As.us(e),Cr.resolve()}getMatchingKeysForTargetId(t,e){const n=this.As.hs(e);return Cr.resolve(n)}containsKey(t,e){return Cr.resolve(this.As.containsKey(e))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{constructor(t,e){this.bs={},this.overlays={},this.Ps=new Ir(0),this.vs=!1,this.vs=!0,this.referenceDelegate=t(this),this.Vs=new sl(this),this.indexManager=new Ws,this.remoteDocumentCache=function(t){return new il(t)}((t=>this.referenceDelegate.Ss(t))),this.wt=new Us(e),this.Ds=new tl(this.wt)}start(){return Promise.resolve()}shutdown(){return this.vs=!1,Promise.resolve()}get started(){return this.vs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new el,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.bs[t.toKey()];return n||(n=new rl(e,this.referenceDelegate),this.bs[t.toKey()]=n),n}getTargetCache(){return this.Vs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ds}runTransaction(t,e,n){Ua("MemoryPersistence","Starting transaction:",t);const a=new cl(this.Ps.next());return this.referenceDelegate.Cs(),n(a).next((t=>this.referenceDelegate.xs(a).next((()=>t)))).toPromise().then((t=>(a.raiseOnCommittedEvent(),t)))}Ns(t,e){return Cr.or(Object.values(this.bs).map((n=>()=>n.containsKey(t,e))))}}class cl extends Ar{constructor(t){super(),this.currentSequenceNumber=t}}class ul{constructor(t){this.persistence=t,this.ks=new nl,this.Os=null}static Ms(t){return new ul(t)}get Fs(){if(this.Os)return this.Os;throw Ka()}addReference(t,e,n){return this.ks.addReference(n,e),this.Fs.delete(n.toString()),Cr.resolve()}removeReference(t,e,n){return this.ks.removeReference(n,e),this.Fs.add(n.toString()),Cr.resolve()}markPotentiallyOrphaned(t,e){return this.Fs.add(e.toString()),Cr.resolve()}removeTarget(t,e){this.ks.us(e.targetId).forEach((t=>this.Fs.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.Fs.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}Cs(){this.Os=new Set}xs(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Cr.forEach(this.Fs,(n=>{const a=gr.fromPath(n);return this.$s(t,a).next((t=>{t||e.removeEntry(a,dr.min())}))})).next((()=>(this.Os=null,e.apply(t))))}updateLimboDocument(t,e){return this.$s(t,e).next((t=>{t?this.Fs.delete(e.toString()):this.Fs.add(e.toString())}))}Ss(t){return 0}$s(t,e){return Cr.or([()=>Cr.resolve(this.ks.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ns(t,e)])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class hl{constructor(t,e,n,a){this.targetId=t,this.fromCache=e,this.Pi=n,this.vi=a}static Vi(t,e){let n=Wo(),a=Wo();for(const r of e.docChanges)switch(r.type){case 0:n=n.add(r.doc.key);break;case 1:a=a.add(r.doc.key)}return new hl(t,e.fromCache,n,a)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl{constructor(){this.Si=!1}initialize(t,e){this.Di=t,this.indexManager=e,this.Si=!0}getDocumentsMatchingQuery(t,e,n,a){return this.Ci(t,e).next((r=>r||this.xi(t,e,a,n))).next((n=>n||this.Ni(t,e)))}Ci(t,e){return Cr.resolve(null)}xi(t,e,n,a){return Di(e)||a.isEqual(dr.min())?this.Ni(t,e):this.Di.getDocuments(t,n).next((r=>{const i=this.ki(e,r);return this.Oi(e,i,n,a)?this.Ni(t,e):($a()<=o["in"].DEBUG&&Ua("QueryEngine","Re-using previous result from %s to execute query: %s",a.toString(),Wi(e)),this.Mi(t,i,e,yr(a,-1)))}))}ki(t,e){let n=new Pr(Ji(t));return e.forEach(((e,a)=>{Ki(t,a)&&(n=n.add(a))})),n}Oi(t,e,n,a){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const r="F"===t.limitType?e.last():e.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(a)>0)}Ni(t,e){return $a()<=o["in"].DEBUG&&Ua("QueryEngine","Using full collection scan to execute query:",Wi(e)),this.Di.getDocumentsMatchingQuery(t,e,wr.min())}Mi(t,e,n,a){return this.Di.getDocumentsMatchingQuery(t,n,a).next((t=>(e.forEach((e=>{t=t.insert(e.key,e)})),t)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl{constructor(t,e,n,a){this.persistence=t,this.Fi=e,this.wt=a,this.$i=new Lr(cr),this.Bi=new Fo((t=>gi(t)),yi),this.Li=new Map,this.Ui=t.getRemoteDocumentCache(),this.Vs=t.getTargetCache(),this.Ds=t.getBundleCache(),this.qi(n)}qi(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Zs(this.Ui,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ui.setIndexManager(this.indexManager),this.Fi.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.$i)))}}function pl(t,e,n,a){return new fl(t,e,n,a)}async function vl(t,e){const n=Ja(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let a;return n.mutationQueue.getAllMutationBatches(t).next((r=>(a=r,n.qi(e),n.mutationQueue.getAllMutationBatches(t)))).next((e=>{const r=[],i=[];let o=Wo();for(const t of a){r.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){i.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.localDocuments.getDocuments(t,o).next((t=>({Ki:t,removedBatchIds:r,addedBatchIds:i})))}))}))}function ml(t,e){const n=Ja(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(t=>{const a=e.batch.keys(),r=n.Ui.newChangeBuffer({trackRemovals:!0});return function(t,e,n,a){const r=n.batch,i=r.keys();let o=Cr.resolve();return i.forEach((t=>{o=o.next((()=>a.getEntry(e,t))).next((e=>{const i=n.docVersions.get(t);Xa(null!==i),e.version.compareTo(i)<0&&(r.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),a.addEntry(e)))}))})),o.next((()=>t.mutationQueue.removeMutationBatch(e,r)))}(n,t,e,r).next((()=>r.apply(t))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,a,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,function(t){let e=Wo();for(let n=0;n<t.mutationResults.length;++n)t.mutationResults[n].transformResults.length>0&&(e=e.add(t.batch.mutations[n].key));return e}(e)))).next((()=>n.localDocuments.getDocuments(t,a)))}))}function gl(t){const e=Ja(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Vs.getLastRemoteSnapshotVersion(t)))}function bl(t,e){const n=Ja(t),a=e.snapshotVersion;let r=n.$i;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const i=n.Ui.newChangeBuffer({trackRemovals:!0});r=n.$i;const o=[];e.targetChanges.forEach(((i,s)=>{const l=r.get(s);if(!l)return;o.push(n.Vs.removeMatchingKeys(t,i.removedDocuments,s).next((()=>n.Vs.addMatchingKeys(t,i.addedDocuments,s))));let c=l.withSequenceNumber(t.currentSequenceNumber);e.targetMismatches.has(s)?c=c.withResumeToken(Dr.EMPTY_BYTE_STRING,dr.min()).withLastLimboFreeSnapshotVersion(dr.min()):i.resumeToken.approximateByteSize()>0&&(c=c.withResumeToken(i.resumeToken,a)),r=r.insert(s,c),function(t,e,n){return 0===t.resumeToken.approximateByteSize()||(e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(l,c,i)&&o.push(n.Vs.updateTargetData(t,c))}));let s=Do(),l=Wo();if(e.documentUpdates.forEach((a=>{e.resolvedLimboDocuments.has(a)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,a))})),o.push(yl(t,i,e.documentUpdates).next((t=>{s=t.Gi,l=t.Qi}))),!a.isEqual(dr.min())){const e=n.Vs.getLastRemoteSnapshotVersion(t).next((e=>n.Vs.setTargetsMetadata(t,t.currentSequenceNumber,a)));o.push(e)}return Cr.waitFor(o).next((()=>i.apply(t))).next((()=>n.localDocuments.getLocalViewOfDocuments(t,s,l))).next((()=>s))})).then((t=>(n.$i=r,t)))}function yl(t,e,n){let a=Wo(),r=Wo();return n.forEach((t=>a=a.add(t))),e.getEntries(t,a).next((t=>{let a=Do();return n.forEach(((n,i)=>{const o=t.get(n);i.isFoundDocument()!==o.isFoundDocument()&&(r=r.add(n)),i.isNoDocument()&&i.version.isEqual(dr.min())?(e.removeEntry(n,i.readTime),a=a.insert(n,i)):!o.isValidDocument()||i.version.compareTo(o.version)>0||0===i.version.compareTo(o.version)&&o.hasPendingWrites?(e.addEntry(i),a=a.insert(n,i)):Ua("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",i.version)})),{Gi:a,Qi:r}}))}function zl(t,e){const n=Ja(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(t=>(void 0===e&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(t,e))))}function wl(t,e){const n=Ja(t);return n.persistence.runTransaction("Allocate target","readwrite",(t=>{let a;return n.Vs.getTargetData(t,e).next((r=>r?(a=r,Cr.resolve(a)):n.Vs.allocateTargetId(t).next((r=>(a=new $s(e,r,0,t.currentSequenceNumber),n.Vs.addTargetData(t,a).next((()=>a)))))))})).then((t=>{const a=n.$i.get(t.targetId);return(null===a||t.snapshotVersion.compareTo(a.snapshotVersion)>0)&&(n.$i=n.$i.insert(t.targetId,t),n.Bi.set(e,t.targetId)),t}))}async function Ml(t,e,n){const a=Ja(t),r=a.$i.get(e),i=n?"readwrite":"readwrite-primary";try{n||await a.persistence.runTransaction("Release target",i,(t=>a.persistence.referenceDelegate.removeTarget(t,r)))}catch(t){if(!Or(t))throw t;Ua("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}a.$i=a.$i.remove(e),a.Bi.delete(r.target)}function Vl(t,e,n){const a=Ja(t);let r=dr.min(),i=Wo();return a.persistence.runTransaction("Execute query","readonly",(t=>function(t,e,n){const a=Ja(t),r=a.Bi.get(n);return void 0!==r?Cr.resolve(a.$i.get(r)):a.Vs.getTargetData(e,n)}(a,t,$i(e)).next((e=>{if(e)return r=e.lastLimboFreeSnapshotVersion,a.Vs.getMatchingKeysForTargetId(t,e.targetId).next((t=>{i=t}))})).next((()=>a.Fi.getDocumentsMatchingQuery(t,e,n?r:dr.min(),n?i:Wo()))).next((t=>(Al(a,Xi(e),t),{documents:t,ji:i})))))}function Al(t,e,n){let a=dr.min();n.forEach(((t,e)=>{e.readTime.compareTo(a)>0&&(a=e.readTime)})),t.Li.set(e,a)}class Hl{constructor(){this.activeTargetIds=Xo()}Xi(t){this.activeTargetIds=this.activeTargetIds.add(t)}Zi(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Yi(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Cl{constructor(){this.Fr=new Hl,this.$r={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.Fr.Xi(t),this.$r[t]||"not-current"}updateQueryState(t,e,n){this.$r[t]=e}removeLocalQueryTarget(t){this.Fr.Zi(t)}isLocalQueryTarget(t){return this.Fr.activeTargetIds.has(t)}clearQueryState(t){delete this.$r[t]}getAllActiveQueryTargets(){return this.Fr.activeTargetIds}isActiveQueryTarget(t){return this.Fr.activeTargetIds.has(t)}start(){return this.Fr=new Hl,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol{Br(t){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Il{constructor(){this.Lr=()=>this.Ur(),this.qr=()=>this.Kr(),this.Gr=[],this.Qr()}Br(t){this.Gr.push(t)}shutdown(){window.removeEventListener("online",this.Lr),window.removeEventListener("offline",this.qr)}Qr(){window.addEventListener("online",this.Lr),window.addEventListener("offline",this.qr)}Ur(){Ua("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Gr)t(0)}Kr(){Ua("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Gr)t(1)}static V(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sl={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl{constructor(t){this.jr=t.jr,this.Wr=t.Wr}zr(t){this.Hr=t}Jr(t){this.Yr=t}onMessage(t){this.Xr=t}close(){this.Wr()}send(t){this.jr(t)}Zr(){this.Hr()}eo(t){this.Yr(t)}no(t){this.Xr(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.so=e+"://"+t.host,this.io="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}ro(t,e,n,a,r){const i=this.oo(t,e);Ua("RestConnection","Sending: ",i,n);const o={};return this.uo(o,a,r),this.co(t,i,o,n).then((t=>(Ua("RestConnection","Received: ",t),t)),(e=>{throw qa("RestConnection",`${t} failed with error: `,e,"url: ",i,"request:",n),e}))}ao(t,e,n,a,r){return this.ro(t,e,n,a,r)}uo(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+Na,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}oo(t,e){const n=Sl[t];return`${this.so}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}co(t,e,n,a){return new Promise(((r,i)=>{const o=new Da;o.listenOnce(ka.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case La.NO_ERROR:const e=o.getResponseJson();Ua("Connection","XHR received:",JSON.stringify(e)),r(e);break;case La.TIMEOUT:Ua("Connection",'RPC "'+t+'" timed out'),i(new Qa(Ya.DEADLINE_EXCEEDED,"Request time out"));break;case La.HTTP_ERROR:const n=o.getStatus();if(Ua("Connection",'RPC "'+t+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const t=o.getResponseJson().error;if(t&&t.status&&t.message){const e=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(Ya).indexOf(e)>=0?e:Ya.UNKNOWN}(t.status);i(new Qa(e,t.message))}else i(new Qa(Ya.UNKNOWN,"Server responded with status "+o.getStatus()))}else i(new Qa(Ya.UNAVAILABLE,"Connection failed."));break;default:Ka()}}finally{Ua("Connection",'RPC "'+t+'" completed.')}}));const s=JSON.stringify(a);o.send(e,"POST",s,n,15)}))}ho(t,e,n){const a=[this.so,"/","google.firestore.v1.Firestore","/",t,"/channel"],r=Ba(),i=Ta(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new Fa({})),this.uo(o.initMessageHeaders,e,n),(0,s.uI)()||(0,s.b$)()||(0,s.d)()||(0,s.w1)()||(0,s.Mn)()||(0,s.ru)()||(o.httpHeadersOverwriteParam="$httpHeaders");const l=a.join("");Ua("Connection","Creating WebChannel: "+l,o);const c=r.createWebChannel(l,o);let u=!1,h=!1;const d=new Bl({jr:t=>{h?Ua("Connection","Not sending because WebChannel is closed:",t):(u||(Ua("Connection","Opening WebChannel transport."),c.open(),u=!0),Ua("Connection","WebChannel sending:",t),c.send(t))},Wr:()=>c.close()}),f=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return f(c,_a.EventType.OPEN,(()=>{h||Ua("Connection","WebChannel transport opened.")})),f(c,_a.EventType.CLOSE,(()=>{h||(h=!0,Ua("Connection","WebChannel transport closed"),d.eo())})),f(c,_a.EventType.ERROR,(t=>{h||(h=!0,qa("Connection","WebChannel transport errored:",t),d.eo(new Qa(Ya.UNAVAILABLE,"The operation could not be completed")))})),f(c,_a.EventType.MESSAGE,(t=>{var e;if(!h){const n=t.data[0];Xa(!!n);const a=n,r=a.error||(null===(e=a[0])||void 0===e?void 0:e.error);if(r){Ua("Connection","WebChannel received error:",r);const t=r.status;let e=function(t){const e=Lo[t];if(void 0!==e)return Po(e)}(t),n=r.message;void 0===e&&(e=Ya.INTERNAL,n="Unknown error status: "+t+" with message "+r.message),h=!0,d.eo(new Qa(e,n)),c.close()}else Ua("Connection","WebChannel received:",n),d.no(n)}})),f(i,Ea.STAT_EVENT,(t=>{t.stat===Pa.PROXY?Ua("Connection","Detected buffering proxy"):t.stat===Pa.NOPROXY&&Ua("Connection","Detected no buffering proxy")})),setTimeout((()=>{d.Zr()}),0),d}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ll(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kl(t){return new ss(t,!0)}class El{constructor(t,e,n=1e3,a=1.5,r=6e4){this.js=t,this.timerId=e,this.lo=n,this.fo=a,this._o=r,this.wo=0,this.mo=null,this.yo=Date.now(),this.reset()}reset(){this.wo=0}po(){this.wo=this._o}Io(t){this.cancel();const e=Math.floor(this.wo+this.To()),n=Math.max(0,Date.now()-this.yo),a=Math.max(0,e-n);a>0&&Ua("ExponentialBackoff",`Backing off for ${a} ms (base delay: ${this.wo} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.mo=this.js.enqueueAfterDelay(this.timerId,a,(()=>(this.yo=Date.now(),t()))),this.wo*=this.fo,this.wo<this.lo&&(this.wo=this.lo),this.wo>this._o&&(this.wo=this._o)}Eo(){null!==this.mo&&(this.mo.skipDelay(),this.mo=null)}cancel(){null!==this.mo&&(this.mo.cancel(),this.mo=null)}To(){return(Math.random()-.5)*this.wo}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pl{constructor(t,e,n,a,r,i,o,s){this.js=t,this.Ao=n,this.Ro=a,this.bo=r,this.authCredentialsProvider=i,this.appCheckCredentialsProvider=o,this.listener=s,this.state=0,this.Po=0,this.vo=null,this.Vo=null,this.stream=null,this.So=new El(t,e)}Do(){return 1===this.state||5===this.state||this.Co()}Co(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.xo()}async stop(){this.Do()&&await this.close(0)}No(){this.state=0,this.So.reset()}ko(){this.Co()&&null===this.vo&&(this.vo=this.js.enqueueAfterDelay(this.Ao,6e4,(()=>this.Oo())))}Mo(t){this.Fo(),this.stream.send(t)}async Oo(){if(this.Co())return this.close(0)}Fo(){this.vo&&(this.vo.cancel(),this.vo=null)}$o(){this.Vo&&(this.Vo.cancel(),this.Vo=null)}async close(t,e){this.Fo(),this.$o(),this.So.cancel(),this.Po++,4!==t?this.So.reset():e&&e.code===Ya.RESOURCE_EXHAUSTED?(Ga(e.toString()),Ga("Using maximum backoff delay to prevent overloading the backend."),this.So.po()):e&&e.code===Ya.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Bo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Jr(e)}Bo(){}auth(){this.state=1;const t=this.Lo(this.Po),e=this.Po;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.Po===e&&this.Uo(t,n)}),(e=>{t((()=>{const t=new Qa(Ya.UNKNOWN,"Fetching auth token failed: "+e.message);return this.qo(t)}))}))}Uo(t,e){const n=this.Lo(this.Po);this.stream=this.Ko(t,e),this.stream.zr((()=>{n((()=>(this.state=2,this.Vo=this.js.enqueueAfterDelay(this.Ro,1e4,(()=>(this.Co()&&(this.state=3),Promise.resolve()))),this.listener.zr())))})),this.stream.Jr((t=>{n((()=>this.qo(t)))})),this.stream.onMessage((t=>{n((()=>this.onMessage(t)))}))}xo(){this.state=5,this.So.Io((async()=>{this.state=0,this.start()}))}qo(t){return Ua("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Lo(t){return e=>{this.js.enqueueAndForget((()=>this.Po===t?e():(Ua("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Fl extends Pl{constructor(t,e,n,a,r,i){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,a,i),this.wt=r}Ko(t,e){return this.bo.ho("Listen",t,e)}onMessage(t){this.So.reset();const e=ws(this.wt,t),n=function(t){if(!("targetChange"in t))return dr.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?dr.min():e.readTime?hs(e.readTime):dr.min()}(t);return this.listener.Go(e,n)}Qo(t){const e={};e.database=bs(this.wt),e.addTarget=function(t,e){let n;const a=e.target;return n=zi(a)?{documents:As(t,a)}:{query:Hs(t,a)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0?n.resumeToken=cs(t,e.resumeToken):e.snapshotVersion.compareTo(dr.min())>0&&(n.readTime=ls(t,e.snapshotVersion.toTimestamp())),n}(this.wt,t);const n=Os(this.wt,t);n&&(e.labels=n),this.Mo(e)}jo(t){const e={};e.database=bs(this.wt),e.removeTarget=t,this.Mo(e)}}class _l extends Pl{constructor(t,e,n,a,r,i){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,a,i),this.wt=r,this.Wo=!1}get zo(){return this.Wo}start(){this.Wo=!1,this.lastStreamToken=void 0,super.start()}Bo(){this.Wo&&this.Ho([])}Ko(t,e){return this.bo.ho("Write",t,e)}onMessage(t){if(Xa(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Wo){this.So.reset();const e=Vs(t.writeResults,t.commitTime),n=hs(t.commitTime);return this.listener.Jo(n,e)}return Xa(!t.writeResults||0===t.writeResults.length),this.Wo=!0,this.listener.Yo()}Xo(){const t={};t.database=bs(this.wt),this.Mo(t)}Ho(t){const e={streamToken:this.lastStreamToken,writes:t.map((t=>Ms(this.wt,t)))};this.Mo(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl extends class{}{constructor(t,e,n,a){super(),this.authCredentials=t,this.appCheckCredentials=e,this.bo=n,this.wt=a,this.Zo=!1}tu(){if(this.Zo)throw new Qa(Ya.FAILED_PRECONDITION,"The client has already been terminated.")}ro(t,e,n){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,r])=>this.bo.ro(t,e,n,a,r))).catch((t=>{throw"FirebaseError"===t.name?(t.code===Ya.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new Qa(Ya.UNKNOWN,t.toString())}))}ao(t,e,n){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,r])=>this.bo.ao(t,e,n,a,r))).catch((t=>{throw"FirebaseError"===t.name?(t.code===Ya.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new Qa(Ya.UNKNOWN,t.toString())}))}terminate(){this.Zo=!0}}class xl{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.eu=0,this.nu=null,this.su=!0}iu(){0===this.eu&&(this.ru("Unknown"),this.nu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.nu=null,this.ou("Backend didn't respond within 10 seconds."),this.ru("Offline"),Promise.resolve()))))}uu(t){"Online"===this.state?this.ru("Unknown"):(this.eu++,this.eu>=1&&(this.cu(),this.ou(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ru("Offline")))}set(t){this.cu(),this.eu=0,"Online"===t&&(this.su=!1),this.ru(t)}ru(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}ou(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.su?(Ga(e),this.su=!1):Ua("OnlineStateTracker",e)}cu(){null!==this.nu&&(this.nu.cancel(),this.nu=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl{constructor(t,e,n,a,r){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.au=[],this.hu=new Map,this.lu=new Set,this.fu=[],this.du=r,this.du.Br((t=>{n.enqueueAndForget((async()=>{Xl(this)&&(Ua("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=Ja(t);e.lu.add(4),await Rl(e),e._u.set("Unknown"),e.lu.delete(4),await Nl(e)}(this))}))})),this._u=new xl(n,a)}}async function Nl(t){if(Xl(t))for(const e of t.fu)await e(!0)}async function Rl(t){for(const e of t.fu)await e(!1)}function $l(t,e){const n=Ja(t);n.hu.has(e.targetId)||(n.hu.set(e.targetId,e),Kl(n)?Wl(n):fc(n).Co()&&Gl(n,e))}function Ul(t,e){const n=Ja(t),a=fc(n);n.hu.delete(e),a.Co()&&ql(n,e),0===n.hu.size&&(a.Co()?a.ko():Xl(n)&&n._u.set("Unknown"))}function Gl(t,e){t.wu.Nt(e.targetId),fc(t).Qo(e)}function ql(t,e){t.wu.Nt(e),fc(t).jo(e)}function Wl(t){t.wu=new ns({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),te:e=>t.hu.get(e)||null}),fc(t).start(),t._u.iu()}function Kl(t){return Xl(t)&&!fc(t).Do()&&t.hu.size>0}function Xl(t){return 0===Ja(t).lu.size}function Jl(t){t.wu=void 0}async function Yl(t){t.hu.forEach(((e,n)=>{Gl(t,e)}))}async function Ql(t,e){Jl(t),Kl(t)?(t._u.uu(e),Wl(t)):t._u.set("Unknown")}async function Zl(t,e,n){if(t._u.set("Online"),e instanceof ts&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const a of e.targetIds)t.hu.has(a)&&(await t.remoteSyncer.rejectListen(a,n),t.hu.delete(a),t.wu.removeTarget(a))}(t,e)}catch(n){Ua("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await tc(t,n)}else if(e instanceof Qo?t.wu.Ut(e):e instanceof Zo?t.wu.zt(e):t.wu.Gt(e),!n.isEqual(dr.min()))try{const e=await gl(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.wu.Yt(e);return n.targetChanges.forEach(((n,a)=>{if(n.resumeToken.approximateByteSize()>0){const r=t.hu.get(a);r&&t.hu.set(a,r.withResumeToken(n.resumeToken,e))}})),n.targetMismatches.forEach((e=>{const n=t.hu.get(e);if(!n)return;t.hu.set(e,n.withResumeToken(Dr.EMPTY_BYTE_STRING,n.snapshotVersion)),ql(t,e);const a=new $s(n.target,e,1,n.sequenceNumber);Gl(t,a)})),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){Ua("RemoteStore","Failed to raise snapshot:",e),await tc(t,e)}}async function tc(t,e,n){if(!Or(e))throw e;t.lu.add(1),await Rl(t),t._u.set("Offline"),n||(n=()=>gl(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{Ua("RemoteStore","Retrying IndexedDB access"),await n(),t.lu.delete(1),await Nl(t)}))}function ec(t,e){return e().catch((n=>tc(t,n,e)))}async function nc(t){const e=Ja(t),n=pc(e);let a=e.au.length>0?e.au[e.au.length-1].batchId:-1;for(;ac(e);)try{const t=await zl(e.localStore,a);if(null===t){0===e.au.length&&n.ko();break}a=t.batchId,rc(e,t)}catch(t){await tc(e,t)}ic(e)&&oc(e)}function ac(t){return Xl(t)&&t.au.length<10}function rc(t,e){t.au.push(e);const n=pc(t);n.Co()&&n.zo&&n.Ho(e.mutations)}function ic(t){return Xl(t)&&!pc(t).Do()&&t.au.length>0}function oc(t){pc(t).start()}async function sc(t){pc(t).Xo()}async function lc(t){const e=pc(t);for(const n of t.au)e.Ho(n.mutations)}async function cc(t,e,n){const a=t.au.shift(),r=Ns.from(a,e,n);await ec(t,(()=>t.remoteSyncer.applySuccessfulWrite(r))),await nc(t)}async function uc(t,e){e&&pc(t).zo&&await async function(t,e){if(n=e.code,Eo(n)&&n!==Ya.ABORTED){const n=t.au.shift();pc(t).No(),await ec(t,(()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e))),await nc(t)}var n}(t,e),ic(t)&&oc(t)}async function hc(t,e){const n=Ja(t);n.asyncQueue.verifyOperationInProgress(),Ua("RemoteStore","RemoteStore received new credentials");const a=Xl(n);n.lu.add(3),await Rl(n),a&&n._u.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.lu.delete(3),await Nl(n)}async function dc(t,e){const n=Ja(t);e?(n.lu.delete(2),await Nl(n)):e||(n.lu.add(2),await Rl(n),n._u.set("Unknown"))}function fc(t){return t.mu||(t.mu=function(t,e,n){const a=Ja(t);return a.tu(),new Fl(e,a.bo,a.authCredentials,a.appCheckCredentials,a.wt,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(t.datastore,t.asyncQueue,{zr:Yl.bind(null,t),Jr:Ql.bind(null,t),Go:Zl.bind(null,t)}),t.fu.push((async e=>{e?(t.mu.No(),Kl(t)?Wl(t):t._u.set("Unknown")):(await t.mu.stop(),Jl(t))}))),t.mu}function pc(t){return t.gu||(t.gu=function(t,e,n){const a=Ja(t);return a.tu(),new _l(e,a.bo,a.authCredentials,a.appCheckCredentials,a.wt,n)}(t.datastore,t.asyncQueue,{zr:sc.bind(null,t),Jr:uc.bind(null,t),Yo:lc.bind(null,t),Jo:cc.bind(null,t)}),t.fu.push((async e=>{e?(t.gu.No(),await nc(t)):(await t.gu.stop(),t.au.length>0&&(Ua("RemoteStore",`Stopping write stream with ${t.au.length} pending writes`),t.au=[]))}))),t.gu
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class vc{constructor(t,e,n,a,r){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=a,this.removalCallback=r,this.deferred=new Za,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}static createAndSchedule(t,e,n,a,r){const i=Date.now()+n,o=new vc(t,e,i,a,r);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Qa(Ya.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function mc(t,e){if(Ga("AsyncQueue",`${e}: ${t}`),Or(t))return new Qa(Ya.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gc{constructor(t){this.comparator=t?(e,n)=>t(e,n)||gr.comparator(e.key,n.key):(t,e)=>gr.comparator(t.key,e.key),this.keyedMap=jo(),this.sortedSet=new Lr(this.comparator)}static emptySet(t){return new gc(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof gc))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,a=n.getNext().key;if(!t.isEqual(a))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new gc;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bc{constructor(){this.yu=new Lr(gr.comparator)}track(t){const e=t.doc.key,n=this.yu.get(e);n?0!==t.type&&3===n.type?this.yu=this.yu.insert(e,t):3===t.type&&1!==n.type?this.yu=this.yu.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.yu=this.yu.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.yu=this.yu.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.yu=this.yu.remove(e):1===t.type&&2===n.type?this.yu=this.yu.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.yu=this.yu.insert(e,{type:2,doc:t.doc}):Ka():this.yu=this.yu.insert(e,t)}pu(){const t=[];return this.yu.inorderTraversal(((e,n)=>{t.push(n)})),t}}class yc{constructor(t,e,n,a,r,i,o,s){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=a,this.mutatedKeys=r,this.fromCache=i,this.syncStateChanged=o,this.excludesMetadataChanges=s}static fromInitialDocuments(t,e,n,a){const r=[];return e.forEach((t=>{r.push({type:0,doc:t})})),new yc(t,e,gc.emptySet(e),r,n,a,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Gi(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let a=0;a<e.length;a++)if(e[a].type!==n[a].type||!e[a].doc.isEqual(n[a].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zc{constructor(){this.Iu=void 0,this.listeners=[]}}class wc{constructor(){this.queries=new Fo((t=>qi(t)),Gi),this.onlineState="Unknown",this.Tu=new Set}}async function Mc(t,e){const n=Ja(t),a=e.query;let r=!1,i=n.queries.get(a);if(i||(r=!0,i=new zc),r)try{i.Iu=await n.onListen(a)}catch(t){const n=mc(t,`Initialization of query '${Wi(e.query)}' failed`);return void e.onError(n)}n.queries.set(a,i),i.listeners.push(e),e.Eu(n.onlineState),i.Iu&&e.Au(i.Iu)&&Cc(n)}async function Vc(t,e){const n=Ja(t),a=e.query;let r=!1;const i=n.queries.get(a);if(i){const t=i.listeners.indexOf(e);t>=0&&(i.listeners.splice(t,1),r=0===i.listeners.length)}if(r)return n.queries.delete(a),n.onUnlisten(a)}function Ac(t,e){const n=Ja(t);let a=!1;for(const r of e){const t=r.query,e=n.queries.get(t);if(e){for(const t of e.listeners)t.Au(r)&&(a=!0);e.Iu=r}}a&&Cc(n)}function Hc(t,e,n){const a=Ja(t),r=a.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);a.queries.delete(e)}function Cc(t){t.Tu.forEach((t=>{t.next()}))}class Oc{constructor(t,e,n){this.query=t,this.Ru=e,this.bu=!1,this.Pu=null,this.onlineState="Unknown",this.options=n||{}}Au(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new yc(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0)}let e=!1;return this.bu?this.vu(t)&&(this.Ru.next(t),e=!0):this.Vu(t,this.onlineState)&&(this.Su(t),e=!0),this.Pu=t,e}onError(t){this.Ru.error(t)}Eu(t){this.onlineState=t;let e=!1;return this.Pu&&!this.bu&&this.Vu(this.Pu,t)&&(this.Su(this.Pu),e=!0),e}Vu(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return(!this.options.Du||!n)&&(!t.docs.isEmpty()||"Offline"===e)}vu(t){if(t.docChanges.length>0)return!0;const e=this.Pu&&this.Pu.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}Su(t){t=yc.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache),this.bu=!0,this.Ru.next(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ic{constructor(t){this.key=t}}class Sc{constructor(t){this.key=t}}class Bc{constructor(t,e){this.query=t,this.Fu=e,this.$u=null,this.current=!1,this.Bu=Wo(),this.mutatedKeys=Wo(),this.Lu=Ji(t),this.Uu=new gc(this.Lu)}get qu(){return this.Fu}Ku(t,e){const n=e?e.Gu:new bc,a=e?e.Uu:this.Uu;let r=e?e.mutatedKeys:this.mutatedKeys,i=a,o=!1;const s="F"===this.query.limitType&&a.size===this.query.limit?a.last():null,l="L"===this.query.limitType&&a.size===this.query.limit?a.first():null;if(t.inorderTraversal(((t,e)=>{const c=a.get(t),u=Ki(this.query,e)?e:null,h=!!c&&this.mutatedKeys.has(c.key),d=!!u&&(u.hasLocalMutations||this.mutatedKeys.has(u.key)&&u.hasCommittedMutations);let f=!1;c&&u?c.data.isEqual(u.data)?h!==d&&(n.track({type:3,doc:u}),f=!0):this.Qu(c,u)||(n.track({type:2,doc:u}),f=!0,(s&&this.Lu(u,s)>0||l&&this.Lu(u,l)<0)&&(o=!0)):!c&&u?(n.track({type:0,doc:u}),f=!0):c&&!u&&(n.track({type:1,doc:c}),f=!0,(s||l)&&(o=!0)),f&&(u?(i=i.add(u),r=d?r.add(t):r.delete(t)):(i=i.delete(t),r=r.delete(t)))})),null!==this.query.limit)for(;i.size>this.query.limit;){const t="F"===this.query.limitType?i.last():i.first();i=i.delete(t.key),r=r.delete(t.key),n.track({type:1,doc:t})}return{Uu:i,Gu:n,Oi:o,mutatedKeys:r}}Qu(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const a=this.Uu;this.Uu=t.Uu,this.mutatedKeys=t.mutatedKeys;const r=t.Gu.pu();r.sort(((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ka()}};return n(t)-n(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t.type,e.type)||this.Lu(t.doc,e.doc))),this.ju(n);const i=e?this.Wu():[],o=0===this.Bu.size&&this.current?1:0,s=o!==this.$u;return this.$u=o,0!==r.length||s?{snapshot:new yc(this.query,t.Uu,a,r,t.mutatedKeys,0===o,s,!1),zu:i}:{zu:i}}Eu(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({Uu:this.Uu,Gu:new bc,mutatedKeys:this.mutatedKeys,Oi:!1},!1)):{zu:[]}}Hu(t){return!this.Fu.has(t)&&!!this.Uu.has(t)&&!this.Uu.get(t).hasLocalMutations}ju(t){t&&(t.addedDocuments.forEach((t=>this.Fu=this.Fu.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this.Fu=this.Fu.delete(t))),this.current=t.current)}Wu(){if(!this.current)return[];const t=this.Bu;this.Bu=Wo(),this.Uu.forEach((t=>{this.Hu(t.key)&&(this.Bu=this.Bu.add(t.key))}));const e=[];return t.forEach((t=>{this.Bu.has(t)||e.push(new Sc(t))})),this.Bu.forEach((n=>{t.has(n)||e.push(new Ic(n))})),e}Ju(t){this.Fu=t.ji,this.Bu=Wo();const e=this.Ku(t.documents);return this.applyChanges(e,!0)}Yu(){return yc.fromInitialDocuments(this.query,this.Uu,this.mutatedKeys,0===this.$u)}}class Tc{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class Lc{constructor(t){this.key=t,this.Xu=!1}}class kc{constructor(t,e,n,a,r,i){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=a,this.currentUser=r,this.maxConcurrentLimboResolutions=i,this.Zu={},this.tc=new Fo((t=>qi(t)),Gi),this.ec=new Map,this.nc=new Set,this.sc=new Lr(gr.comparator),this.ic=new Map,this.rc=new nl,this.oc={},this.uc=new Map,this.cc=Js.Rn(),this.onlineState="Unknown",this.ac=void 0}get isPrimaryClient(){return!0===this.ac}}async function Ec(t,e){const n=Zc(t);let a,r;const i=n.tc.get(e);if(i)a=i.targetId,n.sharedClientState.addLocalQueryTarget(a),r=i.view.Yu();else{const t=await wl(n.localStore,$i(e));n.isPrimaryClient&&$l(n.remoteStore,t);const i=n.sharedClientState.addLocalQueryTarget(t.targetId);a=t.targetId,r=await Pc(n,e,a,"current"===i)}return r}async function Pc(t,e,n,a){t.hc=(e,n,a)=>async function(t,e,n,a){let r=e.view.Ku(n);r.Oi&&(r=await Vl(t.localStore,e.query,!1).then((({documents:t})=>e.view.Ku(t,r))));const i=a&&a.targetChanges.get(e.targetId),o=e.view.applyChanges(r,t.isPrimaryClient,i);return Wc(t,e.targetId,o.zu),o.snapshot}(t,e,n,a);const r=await Vl(t.localStore,e,!0),i=new Bc(e,r.ji),o=i.Ku(r.documents),s=Yo.createSynthesizedTargetChangeForCurrentChange(n,a&&"Offline"!==t.onlineState),l=i.applyChanges(o,t.isPrimaryClient,s);Wc(t,n,l.zu);const c=new Tc(e,n,i);return t.tc.set(e,c),t.ec.has(n)?t.ec.get(n).push(e):t.ec.set(n,[e]),l.snapshot}async function Fc(t,e){const n=Ja(t),a=n.tc.get(e),r=n.ec.get(a.targetId);if(r.length>1)return n.ec.set(a.targetId,r.filter((t=>!Gi(t,e)))),void n.tc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(a.targetId),n.sharedClientState.isActiveQueryTarget(a.targetId)||await Ml(n.localStore,a.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(a.targetId),Ul(n.remoteStore,a.targetId),Gc(n,a.targetId)})).catch(Hr)):(Gc(n,a.targetId),await Ml(n.localStore,a.targetId,!0))}async function _c(t,e,n){const a=tu(t);try{const t=await function(t,e){const n=Ja(t),a=hr.now(),r=e.reduce(((t,e)=>t.add(e.key)),Wo());let i,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(t=>{let s=Do(),l=Wo();return n.Ui.getEntries(t,r).next((t=>{s=t,s.forEach(((t,e)=>{e.isValidDocument()||(l=l.add(t))}))})).next((()=>n.localDocuments.getOverlayedDocuments(t,s))).next((r=>{i=r;const o=[];for(const t of e){const e=Mo(t,i.get(t.key).overlayedDocument);null!=e&&o.push(new Ho(t.key,e,fi(e.value.mapValue),mo.exists(!0)))}return n.mutationQueue.addMutationBatch(t,a,o,e)})).next((e=>{o=e;const a=e.applyToLocalDocumentSet(i,l);return n.documentOverlayCache.saveOverlays(t,e.batchId,a)}))})).then((()=>({batchId:o.batchId,changes:No(i)})))}(a.localStore,e);a.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let a=t.oc[t.currentUser.toKey()];a||(a=new Lr(cr)),a=a.insert(e,n),t.oc[t.currentUser.toKey()]=a}(a,t.batchId,n),await Jc(a,t.changes),await nc(a.remoteStore)}catch(t){const e=mc(t,"Failed to persist write");n.reject(e)}}async function Dc(t,e){const n=Ja(t);try{const t=await bl(n.localStore,e);e.targetChanges.forEach(((t,e)=>{const a=n.ic.get(e);a&&(Xa(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?a.Xu=!0:t.modifiedDocuments.size>0?Xa(a.Xu):t.removedDocuments.size>0&&(Xa(a.Xu),a.Xu=!1))})),await Jc(n,t,e)}catch(t){await Hr(t)}}function xc(t,e,n){const a=Ja(t);if(a.isPrimaryClient&&0===n||!a.isPrimaryClient&&1===n){const t=[];a.tc.forEach(((n,a)=>{const r=a.view.Eu(e);r.snapshot&&t.push(r.snapshot)})),function(t,e){const n=Ja(t);n.onlineState=e;let a=!1;n.queries.forEach(((t,n)=>{for(const r of n.listeners)r.Eu(e)&&(a=!0)})),a&&Cc(n)}(a.eventManager,e),t.length&&a.Zu.Go(t),a.onlineState=e,a.isPrimaryClient&&a.sharedClientState.setOnlineState(e)}}async function jc(t,e,n){const a=Ja(t);a.sharedClientState.updateQueryState(e,"rejected",n);const r=a.ic.get(e),i=r&&r.key;if(i){let t=new Lr(gr.comparator);t=t.insert(i,pi.newNoDocument(i,dr.min()));const n=Wo().add(i),r=new Jo(dr.min(),new Map,new Pr(cr),t,n);await Dc(a,r),a.sc=a.sc.remove(i),a.ic.delete(e),Xc(a)}else await Ml(a.localStore,e,!1).then((()=>Gc(a,e,n))).catch(Hr)}async function Nc(t,e){const n=Ja(t),a=e.batch.batchId;try{const t=await ml(n.localStore,e);Uc(n,a,null),$c(n,a),n.sharedClientState.updateMutationState(a,"acknowledged"),await Jc(n,t)}catch(t){await Hr(t)}}async function Rc(t,e,n){const a=Ja(t);try{const t=await function(t,e){const n=Ja(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",(t=>{let a;return n.mutationQueue.lookupMutationBatch(t,e).next((e=>(Xa(null!==e),a=e.keys(),n.mutationQueue.removeMutationBatch(t,e)))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,a,e))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,a))).next((()=>n.localDocuments.getDocuments(t,a)))}))}(a.localStore,e);Uc(a,e,n),$c(a,e),a.sharedClientState.updateMutationState(e,"rejected",n),await Jc(a,t)}catch(n){await Hr(n)}}function $c(t,e){(t.uc.get(e)||[]).forEach((t=>{t.resolve()})),t.uc.delete(e)}function Uc(t,e,n){const a=Ja(t);let r=a.oc[a.currentUser.toKey()];if(r){const t=r.get(e);t&&(n?t.reject(n):t.resolve(),r=r.remove(e)),a.oc[a.currentUser.toKey()]=r}}function Gc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const a of t.ec.get(e))t.tc.delete(a),n&&t.Zu.lc(a,n);t.ec.delete(e),t.isPrimaryClient&&t.rc.us(e).forEach((e=>{t.rc.containsKey(e)||qc(t,e)}))}function qc(t,e){t.nc.delete(e.path.canonicalString());const n=t.sc.get(e);null!==n&&(Ul(t.remoteStore,n),t.sc=t.sc.remove(e),t.ic.delete(n),Xc(t))}function Wc(t,e,n){for(const a of n)a instanceof Ic?(t.rc.addReference(a.key,e),Kc(t,a)):a instanceof Sc?(Ua("SyncEngine","Document no longer in limbo: "+a.key),t.rc.removeReference(a.key,e),t.rc.containsKey(a.key)||qc(t,a.key)):Ka()}function Kc(t,e){const n=e.key,a=n.path.canonicalString();t.sc.get(n)||t.nc.has(a)||(Ua("SyncEngine","New document in limbo: "+n),t.nc.add(a),Xc(t))}function Xc(t){for(;t.nc.size>0&&t.sc.size<t.maxConcurrentLimboResolutions;){const e=t.nc.values().next().value;t.nc.delete(e);const n=new gr(pr.fromString(e)),a=t.cc.next();t.ic.set(a,new Lc(n)),t.sc=t.sc.insert(n,a),$l(t.remoteStore,new $s($i(_i(n.path)),a,2,Ir.ot))}}async function Jc(t,e,n){const a=Ja(t),r=[],i=[],o=[];a.tc.isEmpty()||(a.tc.forEach(((t,s)=>{o.push(a.hc(s,e,n).then((t=>{if(t){a.isPrimaryClient&&a.sharedClientState.updateQueryState(s.targetId,t.fromCache?"not-current":"current"),r.push(t);const e=hl.Vi(s.targetId,t);i.push(e)}})))})),await Promise.all(o),a.Zu.Go(r),await async function(t,e){const n=Ja(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>Cr.forEach(e,(e=>Cr.forEach(e.Pi,(a=>n.persistence.referenceDelegate.addReference(t,e.targetId,a))).next((()=>Cr.forEach(e.vi,(a=>n.persistence.referenceDelegate.removeReference(t,e.targetId,a)))))))))}catch(t){if(!Or(t))throw t;Ua("LocalStore","Failed to update sequence numbers: "+t)}for(const a of e){const t=a.targetId;if(!a.fromCache){const e=n.$i.get(t),a=e.snapshotVersion,r=e.withLastLimboFreeSnapshotVersion(a);n.$i=n.$i.insert(t,r)}}}(a.localStore,i))}async function Yc(t,e){const n=Ja(t);if(!n.currentUser.isEqual(e)){Ua("SyncEngine","User change. New user:",e.toKey());const t=await vl(n.localStore,e);n.currentUser=e,function(t,e){t.uc.forEach((t=>{t.forEach((t=>{t.reject(new Qa(Ya.CANCELLED,e))}))})),t.uc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await Jc(n,t.Ki)}}function Qc(t,e){const n=Ja(t),a=n.ic.get(e);if(a&&a.Xu)return Wo().add(a.key);{let t=Wo();const a=n.ec.get(e);if(!a)return t;for(const e of a){const a=n.tc.get(e);t=t.unionWith(a.view.qu)}return t}}function Zc(t){const e=Ja(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Dc.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Qc.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=jc.bind(null,e),e.Zu.Go=Ac.bind(null,e.eventManager),e.Zu.lc=Hc.bind(null,e.eventManager),e}function tu(t){const e=Ja(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Nc.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Rc.bind(null,e),e}class eu{constructor(){this.synchronizeTabs=!1}async initialize(t){this.wt=kl(t.databaseInfo.databaseId),this.sharedClientState=this.dc(t),this.persistence=this._c(t),await this.persistence.start(),this.localStore=this.wc(t),this.gcScheduler=this.mc(t,this.localStore),this.indexBackfillerScheduler=this.gc(t,this.localStore)}mc(t,e){return null}gc(t,e){return null}wc(t){return pl(this.persistence,new dl,t.initialUser,this.wt)}_c(t){return new ll(ul.Ms,this.wt)}dc(t){return new Cl}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class nu{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>xc(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=Yc.bind(null,this.syncEngine),await dc(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new wc}createDatastore(t){const e=kl(t.databaseInfo.databaseId),n=(a=t.databaseInfo,new Tl(a));var a;return function(t,e,n,a){return new Dl(t,e,n,a)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,a=t.asyncQueue,r=t=>xc(this.syncEngine,t,0),i=Il.V()?new Il:new Ol,new jl(e,n,a,r,i);var e,n,a,r,i}createSyncEngine(t,e){return function(t,e,n,a,r,i,o){const s=new kc(t,e,n,a,r,i);return o&&(s.ac=!0),s}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=Ja(t);Ua("RemoteStore","RemoteStore shutting down."),e.lu.add(5),await Rl(e),e.du.shutdown(),e._u.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class au{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Ic(this.observer.next,t)}error(t){this.observer.error?this.Ic(this.observer.error,t):console.error("Uncaught Error in snapshot listener:",t)}Tc(){this.muted=!0}Ic(t,e){this.muted||setTimeout((()=>{this.muted||t(e)}),0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ru{constructor(t,e,n,a){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=a,this.user=ja.UNAUTHENTICATED,this.clientId=lr.I(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{Ua("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(Ua("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Qa(Ya.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Za;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=mc(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function iu(t,e){t.asyncQueue.verifyOperationInProgress(),Ua("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let a=n.initialUser;t.setCredentialChangeListener((async t=>{a.isEqual(t)||(await vl(e.localStore,t),a=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t.offlineComponents=e}async function ou(t,e){t.asyncQueue.verifyOperationInProgress();const n=await su(t);Ua("FirestoreClient","Initializing OnlineComponentProvider");const a=await t.getConfiguration();await e.initialize(n,a),t.setCredentialChangeListener((t=>hc(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>hc(e.remoteStore,n))),t.onlineComponents=e}async function su(t){return t.offlineComponents||(Ua("FirestoreClient","Using default OfflineComponentProvider"),await iu(t,new eu)),t.offlineComponents}async function lu(t){return t.onlineComponents||(Ua("FirestoreClient","Using default OnlineComponentProvider"),await ou(t,new nu)),t.onlineComponents}function cu(t){return lu(t).then((t=>t.syncEngine))}async function uu(t){const e=await lu(t),n=e.eventManager;return n.onListen=Ec.bind(null,e.syncEngine),n.onUnlisten=Fc.bind(null,e.syncEngine),n}const hu=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function du(t,e,n){if(!n)throw new Qa(Ya.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function fu(t,e,n,a){if(!0===e&&!0===a)throw new Qa(Ya.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function pu(t){if(!gr.isDocumentKey(t))throw new Qa(Ya.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function vu(t){if(gr.isDocumentKey(t))throw new Qa(Ya.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function mu(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":Ka()}function gu(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Qa(Ya.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=mu(t);throw new Qa(Ya.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class bu{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new Qa(Ya.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new Qa(Ya.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,fu("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yu{constructor(t,e,n){this._authCredentials=e,this._appCheckCredentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new bu({}),this._settingsFrozen=!1,t instanceof Wr?this._databaseId=t:(this._app=t,this._databaseId=function(t){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new Qa(Ya.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Wr(t.options.projectId)}(t))}get app(){if(!this._app)throw new Qa(Ya.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new Qa(Ya.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new bu(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new er;switch(t.type){case"gapi":const e=t.client;return Xa(!("object"!=typeof e||null===e||!e.auth||!e.auth.getAuthHeaderValueForFirstParty)),new rr(e,t.sessionIndex||"0",t.iamToken||null);case"provider":return t.client;default:throw new Qa(Ya.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=hu.get(t);e&&(Ua("ComponentProvider","Removing Datastore"),hu.delete(t),e.terminate())}(this),Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class zu{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Mu(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new zu(this.firestore,t,this._key)}}class wu{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new wu(this.firestore,t,this._query)}}class Mu extends wu{constructor(t,e,n){super(t,e,_i(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new zu(this.firestore,null,new gr(t))}withConverter(t){return new Mu(this.firestore,t,this._path)}}function Vu(t,e,...n){if(t=(0,s.m9)(t),du("collection","path",e),t instanceof yu){const a=pr.fromString(e,...n);return vu(a),new Mu(t,null,a)}{if(!(t instanceof zu||t instanceof Mu))throw new Qa(Ya.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const a=t._path.child(pr.fromString(e,...n));return vu(a),new Mu(t.firestore,null,a)}}function Au(t,e,...n){if(t=(0,s.m9)(t),1===arguments.length&&(e=lr.I()),du("doc","path",e),t instanceof yu){const a=pr.fromString(e,...n);return pu(a),new zu(t,null,new gr(a))}{if(!(t instanceof zu||t instanceof Mu))throw new Qa(Ya.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const a=t._path.child(pr.fromString(e,...n));return pu(a),new zu(t.firestore,t instanceof Mu?t.converter:null,new gr(a))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Hu{constructor(){this.Oc=Promise.resolve(),this.Mc=[],this.Fc=!1,this.$c=[],this.Bc=null,this.Lc=!1,this.Uc=!1,this.qc=[],this.So=new El(this,"async_queue_retry"),this.Kc=()=>{const t=Ll();t&&Ua("AsyncQueue","Visibility state changed to "+t.visibilityState),this.So.Eo()};const t=Ll();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Kc)}get isShuttingDown(){return this.Fc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Gc(),this.Qc(t)}enterRestrictedMode(t){if(!this.Fc){this.Fc=!0,this.Uc=t||!1;const e=Ll();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Kc)}}enqueue(t){if(this.Gc(),this.Fc)return new Promise((()=>{}));const e=new Za;return this.Qc((()=>this.Fc&&this.Uc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Mc.push(t),this.jc())))}async jc(){if(0!==this.Mc.length){try{await this.Mc[0](),this.Mc.shift(),this.So.reset()}catch(M){if(!Or(M))throw M;Ua("AsyncQueue","Operation failed with retryable error: "+M)}this.Mc.length>0&&this.So.Io((()=>this.jc()))}}Qc(t){const e=this.Oc.then((()=>(this.Lc=!0,t().catch((t=>{this.Bc=t,this.Lc=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t);throw Ga("INTERNAL UNHANDLED ERROR: ",e),t})).then((t=>(this.Lc=!1,t))))));return this.Oc=e,e}enqueueAfterDelay(t,e,n){this.Gc(),this.qc.indexOf(t)>-1&&(e=0);const a=vc.createAndSchedule(this,t,e,n,(t=>this.Wc(t)));return this.$c.push(a),a}Gc(){this.Bc&&Ka()}verifyOperationInProgress(){}async zc(){let t;do{t=this.Oc,await t}while(t!==this.Oc)}Hc(t){for(const e of this.$c)if(e.timerId===t)return!0;return!1}Jc(t){return this.zc().then((()=>{this.$c.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.$c)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.zc()}))}Yc(t){this.qc.push(t)}Wc(t){const e=this.$c.indexOf(t);this.$c.splice(e,1)}}function Cu(t){return function(t,e){if("object"!=typeof t||null===t)return!1;const n=t;for(const a of e)if(a in n&&"function"==typeof n[a])return!0;return!1}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t,["next","error","complete"])}class Ou extends yu{constructor(t,e,n){super(t,e,n),this.type="firestore",this._queue=new Hu,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||Bu(this),this._firestoreClient.terminate()}}function Iu(t=(0,r.Mq)()){return(0,r.qX)(t,"firestore").getImmediate()}function Su(t){return t._firestoreClient||Bu(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Bu(t){var e;const n=t._freezeSettings(),a=function(t,e,n,a){return new qr(t,e,n,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new ru(t._authCredentials,t._appCheckCredentials,t._queue,a)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Tu{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new Qa(Ya.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new mr(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Lu{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Lu(Dr.fromBase64String(t))}catch(t){throw new Qa(Ya.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new Lu(Dr.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku{constructor(t){this._methodName=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eu{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new Qa(Ya.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new Qa(Ya.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return cr(this._lat,t._lat)||cr(this._long,t._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pu=/^__.*__$/;class Fu{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new Ho(t,this.data,this.fieldMask,e,this.fieldTransforms):new Ao(t,this.data,e,this.fieldTransforms)}}function _u(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ka()}}class Du{constructor(t,e,n,a,r,i){this.settings=t,this.databaseId=e,this.wt=n,this.ignoreUndefinedProperties=a,void 0===r&&this.Xc(),this.fieldTransforms=r||[],this.fieldMask=i||[]}get path(){return this.settings.path}get Zc(){return this.settings.Zc}ta(t){return new Du(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.wt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ea(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),a=this.ta({path:n,na:!1});return a.sa(t),a}ia(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),a=this.ta({path:n,na:!1});return a.Xc(),a}ra(t){return this.ta({path:void 0,na:!0})}oa(t){return Xu(t,this.settings.methodName,this.settings.ua||!1,this.path,this.settings.ca)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}Xc(){if(this.path)for(let t=0;t<this.path.length;t++)this.sa(this.path.get(t))}sa(t){if(0===t.length)throw this.oa("Document fields must not be empty");if(_u(this.Zc)&&Pu.test(t))throw this.oa('Document fields cannot begin and end with "__"')}}class xu{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.wt=n||kl(t)}aa(t,e,n,a=!1){return new Du({Zc:t,methodName:e,ca:n,path:mr.emptyPath(),na:!1,ua:a},this.databaseId,this.wt,this.ignoreUndefinedProperties)}}function ju(t){const e=t._freezeSettings(),n=kl(t._databaseId);return new xu(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Nu(t,e,n,a,r,i={}){const o=t.aa(i.merge||i.mergeFields?2:0,e,n,r);Gu("Data must be an object, but it was:",o,a);const s=$u(a,o);let l,c;if(i.merge)l=new _r(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const t=[];for(const a of i.mergeFields){const r=qu(e,a,n);if(!o.contains(r))throw new Qa(Ya.INVALID_ARGUMENT,`Field '${r}' is specified in your field mask but missing from your input data.`);Ju(t,r)||t.push(r)}l=new _r(t),c=o.fieldTransforms.filter((t=>l.covers(t.field)))}else l=null,c=o.fieldTransforms;return new Fu(new di(s),l,c)}function Ru(t,e){if(Uu(t=(0,s.m9)(t)))return Gu("Unsupported field value:",e,t),$u(t,e);if(t instanceof ku)return function(t,e){if(!_u(e.Zc))throw e.oa(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.oa(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.na&&4!==e.Zc)throw e.oa("Nested arrays are not supported");return function(t,e){const n=[];let a=0;for(const r of t){let t=Ru(r,e.ra(a));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),a++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=(0,s.m9)(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return to(e.wt,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=hr.fromDate(t);return{timestampValue:ls(e.wt,n)}}if(t instanceof hr){const n=new hr(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:ls(e.wt,n)}}if(t instanceof Eu)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof Lu)return{bytesValue:cs(e.wt,t._byteString)};if(t instanceof zu){const n=e.databaseId,a=t.firestore._databaseId;if(!a.isEqual(n))throw e.oa(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:ds(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.oa(`Unsupported field value: ${mu(t)}`)}(t,e)}function $u(t,e){const n={};return Tr(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Br(t,((t,a)=>{const r=Ru(a,e.ea(t));null!=r&&(n[t]=r)})),{mapValue:{fields:n}}}function Uu(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof hr||t instanceof Eu||t instanceof Lu||t instanceof zu||t instanceof ku)}function Gu(t,e,n){if(!Uu(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const a=mu(n);throw"an object"===a?e.oa(t+" a custom object"):e.oa(t+" "+a)}}function qu(t,e,n){if((e=(0,s.m9)(e))instanceof Tu)return e._internalPath;if("string"==typeof e)return Ku(t,e);throw Xu("Field path arguments must be of type string or ",t,!1,void 0,n)}const Wu=new RegExp("[~\\*/\\[\\]]");function Ku(t,e,n){if(e.search(Wu)>=0)throw Xu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Tu(...e.split("."))._internalPath}catch(a){throw Xu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Xu(t,e,n,a,r){const i=a&&!a.isEmpty(),o=void 0!==r;let s=`Function ${e}() called with invalid data`;n&&(s+=" (via `toFirestore()`)"),s+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${a}`),o&&(l+=` in document ${r}`),l+=")"),new Qa(Ya.INVALID_ARGUMENT,s+t+l)}function Ju(t,e){return t.some((t=>t.isEqual(e)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yu{constructor(t,e,n,a,r){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=a,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new zu(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new Qu(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Zu("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class Qu extends Yu{data(){return super.data()}}function Zu(t,e){return"string"==typeof e?Ku(t,e):e instanceof Tu?e._internalPath:e._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class eh extends Yu{constructor(t,e,n,a,r,i){super(t,e,n,a,i),this._firestore=t,this._firestoreImpl=t,this.metadata=r}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new nh(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(Zu("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class nh extends eh{data(t={}){return super.data(t)}}class ah{constructor(t,e,n,a){this._firestore=t,this._userDataWriter=e,this._snapshot=a,this.metadata=new th(a.hasPendingWrites,a.fromCache),this.query=n}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach((n=>{t.call(e,new nh(this._firestore,this._userDataWriter,n.key,n,new th(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new Qa(Ya.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map((n=>({type:"added",doc:new nh(t._firestore,t._userDataWriter,n.doc.key,n.doc,new th(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter),oldIndex:-1,newIndex:e++})))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter((t=>e||3!==t.type)).map((e=>{const a=new nh(t._firestore,t._userDataWriter,e.doc.key,e.doc,new th(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let r=-1,i=-1;return 0!==e.type&&(r=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),i=n.indexOf(e.doc.key)),{type:rh(e.type),doc:a,oldIndex:r,newIndex:i}}))}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function rh(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ka()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ih(t){if("L"===t.limitType&&0===t.explicitOrderBy.length)throw new Qa(Ya.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}function oh(t,...e){for(const n of e)t=n._apply(t);return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class sh{convertValue(t,e="none"){switch(Qr(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Nr(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Rr(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw Ka()}}convertObject(t,e){const n={};return Br(t.fields,((t,a)=>{n[t]=this.convertValue(a,e)})),n}convertGeoPoint(t){return new Eu(Nr(t.latitude),Nr(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=Ur(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(Gr(t));default:return null}}convertTimestamp(t){const e=jr(t);return new hr(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=pr.fromString(t);Xa(Fs(n));const a=new Wr(n.get(1),n.get(3)),r=new gr(n.popFirst(5));return a.isEqual(e)||Ga(`Document ${r} contains a document reference within a different database (${a.projectId}/${a.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),r}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lh(t,e,n){let a;return a=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,a}class ch extends sh{constructor(t){super(),this.firestore=t}convertBytes(t){return new Lu(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new zu(this.firestore,null,e)}}function uh(t,e,n){t=gu(t,zu);const a=gu(t.firestore,Ou),r=lh(t.converter,e,n);return fh(a,[Nu(ju(a),"setDoc",t._key,r,null!==t.converter,n).toMutation(t._key,mo.none())])}function hh(t,e){const n=gu(t.firestore,Ou),a=Au(t),r=lh(t.converter,e);return fh(n,[Nu(ju(t.firestore),"addDoc",a._key,r,null!==t.converter,{}).toMutation(a._key,mo.exists(!1))]).then((()=>a))}function dh(t,...e){var n,a,r;t=(0,s.m9)(t);let i={includeMetadataChanges:!1},o=0;"object"!=typeof e[o]||Cu(e[o])||(i=e[o],o++);const l={includeMetadataChanges:i.includeMetadataChanges};if(Cu(e[o])){const t=e[o];e[o]=null===(n=t.next)||void 0===n?void 0:n.bind(t),e[o+1]=null===(a=t.error)||void 0===a?void 0:a.bind(t),e[o+2]=null===(r=t.complete)||void 0===r?void 0:r.bind(t)}let c,u,h;if(t instanceof zu)u=gu(t.firestore,Ou),h=_i(t._key.path),c={next:n=>{e[o]&&e[o](ph(u,t,n))},error:e[o+1],complete:e[o+2]};else{const n=gu(t,wu);u=gu(n.firestore,Ou),h=n._query;const a=new ch(u);c={next:t=>{e[o]&&e[o](new ah(u,a,n,t))},error:e[o+1],complete:e[o+2]},ih(t._query)}return function(t,e,n,a){const r=new au(a),i=new Oc(e,r,n);return t.asyncQueue.enqueueAndForget((async()=>Mc(await uu(t),i))),()=>{r.Tc(),t.asyncQueue.enqueueAndForget((async()=>Vc(await uu(t),i)))}}(Su(u),h,l,c)}function fh(t,e){return function(t,e){const n=new Za;return t.asyncQueue.enqueueAndForget((async()=>_c(await cu(t),e,n))),n.promise}(Su(t),e)}function ph(t,e,n){const a=n.docs.get(e._key),r=new ch(t);return new eh(t,r,e._key,a,new th(n.hasPendingWrites,n.fromCache),e.converter)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(t,e=!0){!function(t){Na=t}(r.Jn),(0,r.Xd)(new i.wA("firestore",((t,{options:n})=>{const a=t.getProvider("app").getImmediate(),r=new Ou(a,new nr(t.getProvider("auth-internal")),new or(t.getProvider("app-check-internal")));return n=Object.assign({useFetchStreams:e},n),r._setSettings(n),r}),"PUBLIC")),(0,r.KN)(xa,"3.4.10",t),(0,r.KN)(xa,"3.4.10","esm2017")}()},1496:function(t,e,n){"use strict";function a(t){return t&&"object"===typeof t&&"default"in t?t["default"]:t}
/*! 
 * portal-vue © Thorsten Lünborg, 2019 
 * 
 * Version: 2.1.7
 * 
 * LICENCE: MIT 
 * 
 * https://github.com/linusborg/portal-vue
 * 
*/
n(1703);var r=a(n(8935));function i(t){return i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function o(t){return s(t)||l(t)||c()}function s(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}function l(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function c(){throw new TypeError("Invalid attempt to spread non-iterable instance")}var u="undefined"!==typeof window;function h(t){return Array.isArray(t)||"object"===i(t)?Object.freeze(t):t}function d(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return t.reduce((function(t,n){var a=n.passengers[0],r="function"===typeof a?a(e):n.passengers;return t.concat(r)}),[])}function f(t,e){return t.map((function(t,e){return[e,t]})).sort((function(t,n){return e(t[1],n[1])||t[0]-n[0]})).map((function(t){return t[1]}))}function p(t,e){return e.reduce((function(e,n){return t.hasOwnProperty(n)&&(e[n]=t[n]),e}),{})}var v={},m={},g={},b=r.extend({data:function(){return{transports:v,targets:m,sources:g,trackInstances:u}},methods:{open:function(t){if(u){var e=t.to,n=t.from,a=t.passengers,i=t.order,o=void 0===i?1/0:i;if(e&&n&&a){var s={to:e,from:n,passengers:h(a),order:o},l=Object.keys(this.transports);-1===l.indexOf(e)&&r.set(this.transports,e,[]);var c=this.$_getTransportIndex(s),d=this.transports[e].slice(0);-1===c?d.push(s):d[c]=s,this.transports[e]=f(d,(function(t,e){return t.order-e.order}))}}},close:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=t.to,a=t.from;if(n&&(a||!1!==e)&&this.transports[n])if(e)this.transports[n]=[];else{var r=this.$_getTransportIndex(t);if(r>=0){var i=this.transports[n].slice(0);i.splice(r,1),this.transports[n]=i}}},registerTarget:function(t,e,n){u&&(this.trackInstances&&!n&&this.targets[t]&&console.warn("[portal-vue]: Target ".concat(t," already exists")),this.$set(this.targets,t,Object.freeze([e])))},unregisterTarget:function(t){this.$delete(this.targets,t)},registerSource:function(t,e,n){u&&(this.trackInstances&&!n&&this.sources[t]&&console.warn("[portal-vue]: source ".concat(t," already exists")),this.$set(this.sources,t,Object.freeze([e])))},unregisterSource:function(t){this.$delete(this.sources,t)},hasTarget:function(t){return!(!this.targets[t]||!this.targets[t][0])},hasSource:function(t){return!(!this.sources[t]||!this.sources[t][0])},hasContentFor:function(t){return!!this.transports[t]&&!!this.transports[t].length},$_getTransportIndex:function(t){var e=t.to,n=t.from;for(var a in this.transports[e])if(this.transports[e][a].from===n)return+a;return-1}}}),y=new b(v),z=1,w=r.extend({name:"portal",props:{disabled:{type:Boolean},name:{type:String,default:function(){return String(z++)}},order:{type:Number,default:0},slim:{type:Boolean},slotProps:{type:Object,default:function(){return{}}},tag:{type:String,default:"DIV"},to:{type:String,default:function(){return String(Math.round(1e7*Math.random()))}}},created:function(){var t=this;this.$nextTick((function(){y.registerSource(t.name,t)}))},mounted:function(){this.disabled||this.sendUpdate()},updated:function(){this.disabled?this.clear():this.sendUpdate()},beforeDestroy:function(){y.unregisterSource(this.name),this.clear()},watch:{to:function(t,e){e&&e!==t&&this.clear(e),this.sendUpdate()}},methods:{clear:function(t){var e={from:this.name,to:t||this.to};y.close(e)},normalizeSlots:function(){return this.$scopedSlots.default?[this.$scopedSlots.default]:this.$slots.default},normalizeOwnChildren:function(t){return"function"===typeof t?t(this.slotProps):t},sendUpdate:function(){var t=this.normalizeSlots();if(t){var e={from:this.name,to:this.to,passengers:o(t),order:this.order};y.open(e)}else this.clear()}},render:function(t){var e=this.$slots.default||this.$scopedSlots.default||[],n=this.tag;return e&&this.disabled?e.length<=1&&this.slim?this.normalizeOwnChildren(e)[0]:t(n,[this.normalizeOwnChildren(e)]):this.slim?t():t(n,{class:{"v-portal":!0},style:{display:"none"},key:"v-portal-placeholder"})}}),M=r.extend({name:"portalTarget",props:{multiple:{type:Boolean,default:!1},name:{type:String,required:!0},slim:{type:Boolean,default:!1},slotProps:{type:Object,default:function(){return{}}},tag:{type:String,default:"div"},transition:{type:[String,Object,Function]}},data:function(){return{transports:y.transports,firstRender:!0}},created:function(){var t=this;this.$nextTick((function(){y.registerTarget(t.name,t)}))},watch:{ownTransports:function(){this.$emit("change",this.children().length>0)},name:function(t,e){y.unregisterTarget(e),y.registerTarget(t,this)}},mounted:function(){var t=this;this.transition&&this.$nextTick((function(){t.firstRender=!1}))},beforeDestroy:function(){y.unregisterTarget(this.name)},computed:{ownTransports:function(){var t=this.transports[this.name]||[];return this.multiple?t:0===t.length?[]:[t[t.length-1]]},passengers:function(){return d(this.ownTransports,this.slotProps)}},methods:{children:function(){return 0!==this.passengers.length?this.passengers:this.$scopedSlots.default?this.$scopedSlots.default(this.slotProps):this.$slots.default||[]},noWrapper:function(){var t=this.slim&&!this.transition;return t&&this.children().length>1&&console.warn("[portal-vue]: PortalTarget with `slim` option received more than one child element."),t}},render:function(t){var e=this.noWrapper(),n=this.children(),a=this.transition||this.tag;return e?n[0]:this.slim&&!a?t():t(a,{props:{tag:this.transition&&this.tag?this.tag:void 0},class:{"vue-portal-target":!0}},n)}}),V=0,A=["disabled","name","order","slim","slotProps","tag","to"],H=["multiple","transition"],C=r.extend({name:"MountingPortal",inheritAttrs:!1,props:{append:{type:[Boolean,String]},bail:{type:Boolean},mountTo:{type:String,required:!0},disabled:{type:Boolean},name:{type:String,default:function(){return"mounted_"+String(V++)}},order:{type:Number,default:0},slim:{type:Boolean},slotProps:{type:Object,default:function(){return{}}},tag:{type:String,default:"DIV"},to:{type:String,default:function(){return String(Math.round(1e7*Math.random()))}},multiple:{type:Boolean,default:!1},targetSlim:{type:Boolean},targetSlotProps:{type:Object,default:function(){return{}}},targetTag:{type:String,default:"div"},transition:{type:[String,Object,Function]}},created:function(){if("undefined"!==typeof document){var t=document.querySelector(this.mountTo);if(t){var e=this.$props;if(y.targets[e.name])e.bail?console.warn("[portal-vue]: Target ".concat(e.name," is already mounted.\n        Aborting because 'bail: true' is set")):this.portalTarget=y.targets[e.name];else{var n=e.append;if(n){var a="string"===typeof n?n:"DIV",r=document.createElement(a);t.appendChild(r),t=r}var i=p(this.$props,H);i.slim=this.targetSlim,i.tag=this.targetTag,i.slotProps=this.targetSlotProps,i.name=this.to,this.portalTarget=new M({el:t,parent:this.$parent||this,propsData:i})}}else console.error("[portal-vue]: Mount Point '".concat(this.mountTo,"' not found in document"))}},beforeDestroy:function(){var t=this.portalTarget;if(this.append){var e=t.$el;e.parentNode.removeChild(e)}t.$destroy()},render:function(t){if(!this.portalTarget)return console.warn("[portal-vue] Target wasn't mounted"),t();if(!this.$scopedSlots.manual){var e=p(this.$props,A);return t(w,{props:e,attrs:this.$attrs,on:this.$listeners,scopedSlots:this.$scopedSlots},this.$slots.default)}var n=this.$scopedSlots.manual({to:this.to});return Array.isArray(n)&&(n=n[0]),n||t()}});function O(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t.component(e.portalName||"Portal",w),t.component(e.portalTargetName||"PortalTarget",M),t.component(e.MountingPortalName||"MountingPortal",C)}var I={install:O};e.h_=w,e.YC=M,e.Df=y},6790:function(t,e,n){"use strict";n.d(e,{b:function(){return s}});var a=function(){return(a=Object.assign||function(t){for(var e,n=1,a=arguments.length;n<a;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)},r={kebab:/-(\w)/g,styleProp:/:(.*)/,styleList:/;(?![^(]*\))/g};function i(t,e){return e?e.toUpperCase():""}function o(t){for(var e,n={},a=0,o=t.split(r.styleList);a<o.length;a++){var s=o[a].split(r.styleProp),l=s[0],c=s[1];(l=l.trim())&&("string"==typeof c&&(c=c.trim()),n[(e=l,e.replace(r.kebab,i))]=c)}return n}function s(){for(var t,e,n={},r=arguments.length;r--;)for(var i=0,s=Object.keys(arguments[r]);i<s.length;i++)switch(t=s[i]){case"class":case"style":case"directives":if(Array.isArray(n[t])||(n[t]=[]),"style"===t){var l=void 0;l=Array.isArray(arguments[r].style)?arguments[r].style:[arguments[r].style];for(var c=0;c<l.length;c++){var u=l[c];"string"==typeof u&&(l[c]=o(u))}arguments[r].style=l}n[t]=n[t].concat(arguments[r][t]);break;case"staticClass":if(!arguments[r][t])break;void 0===n[t]&&(n[t]=""),n[t]&&(n[t]+=" "),n[t]+=arguments[r][t].trim();break;case"on":case"nativeOn":n[t]||(n[t]={});for(var h=0,d=Object.keys(arguments[r][t]||{});h<d.length;h++)e=d[h],n[t][e]?n[t][e]=[].concat(n[t][e],arguments[r][t][e]):n[t][e]=arguments[r][t][e];break;case"attrs":case"props":case"domProps":case"scopedSlots":case"staticStyle":case"hook":case"transition":n[t]||(n[t]={}),n[t]=a({},arguments[r][t],n[t]);break;case"slot":case"key":case"ref":case"tag":case"show":case"keepAlive":default:n[t]||(n[t]=arguments[r][t])}return n}},2809:function(t,e,n){"use strict";n(1703);function a(t,e){for(var n in e)t[n]=e[n];return t}var r=/[!'()*]/g,i=function(t){return"%"+t.charCodeAt(0).toString(16)},o=/%2C/g,s=function(t){return encodeURIComponent(t).replace(r,i).replace(o,",")};function l(t){try{return decodeURIComponent(t)}catch(e){0}return t}function c(t,e,n){void 0===e&&(e={});var a,r=n||h;try{a=r(t||"")}catch(s){a={}}for(var i in e){var o=e[i];a[i]=Array.isArray(o)?o.map(u):u(o)}return a}var u=function(t){return null==t||"object"===typeof t?t:String(t)};function h(t){var e={};return t=t.trim().replace(/^(\?|#|&)/,""),t?(t.split("&").forEach((function(t){var n=t.replace(/\+/g," ").split("="),a=l(n.shift()),r=n.length>0?l(n.join("=")):null;void 0===e[a]?e[a]=r:Array.isArray(e[a])?e[a].push(r):e[a]=[e[a],r]})),e):e}function d(t){var e=t?Object.keys(t).map((function(e){var n=t[e];if(void 0===n)return"";if(null===n)return s(e);if(Array.isArray(n)){var a=[];return n.forEach((function(t){void 0!==t&&(null===t?a.push(s(e)):a.push(s(e)+"="+s(t)))})),a.join("&")}return s(e)+"="+s(n)})).filter((function(t){return t.length>0})).join("&"):null;return e?"?"+e:""}var f=/\/?$/;function p(t,e,n,a){var r=a&&a.options.stringifyQuery,i=e.query||{};try{i=v(i)}catch(s){}var o={name:e.name||t&&t.name,meta:t&&t.meta||{},path:e.path||"/",hash:e.hash||"",query:i,params:e.params||{},fullPath:b(e,r),matched:t?g(t):[]};return n&&(o.redirectedFrom=b(n,r)),Object.freeze(o)}function v(t){if(Array.isArray(t))return t.map(v);if(t&&"object"===typeof t){var e={};for(var n in t)e[n]=v(t[n]);return e}return t}var m=p(null,{path:"/"});function g(t){var e=[];while(t)e.unshift(t),t=t.parent;return e}function b(t,e){var n=t.path,a=t.query;void 0===a&&(a={});var r=t.hash;void 0===r&&(r="");var i=e||d;return(n||"/")+i(a)+r}function y(t,e,n){return e===m?t===e:!!e&&(t.path&&e.path?t.path.replace(f,"")===e.path.replace(f,"")&&(n||t.hash===e.hash&&z(t.query,e.query)):!(!t.name||!e.name)&&(t.name===e.name&&(n||t.hash===e.hash&&z(t.query,e.query)&&z(t.params,e.params))))}function z(t,e){if(void 0===t&&(t={}),void 0===e&&(e={}),!t||!e)return t===e;var n=Object.keys(t).sort(),a=Object.keys(e).sort();return n.length===a.length&&n.every((function(n,r){var i=t[n],o=a[r];if(o!==n)return!1;var s=e[n];return null==i||null==s?i===s:"object"===typeof i&&"object"===typeof s?z(i,s):String(i)===String(s)}))}function w(t,e){return 0===t.path.replace(f,"/").indexOf(e.path.replace(f,"/"))&&(!e.hash||t.hash===e.hash)&&M(t.query,e.query)}function M(t,e){for(var n in e)if(!(n in t))return!1;return!0}function V(t){for(var e=0;e<t.matched.length;e++){var n=t.matched[e];for(var a in n.instances){var r=n.instances[a],i=n.enteredCbs[a];if(r&&i){delete n.enteredCbs[a];for(var o=0;o<i.length;o++)r._isBeingDestroyed||i[o](r)}}}}var A={name:"RouterView",functional:!0,props:{name:{type:String,default:"default"}},render:function(t,e){var n=e.props,r=e.children,i=e.parent,o=e.data;o.routerView=!0;var s=i.$createElement,l=n.name,c=i.$route,u=i._routerViewCache||(i._routerViewCache={}),h=0,d=!1;while(i&&i._routerRoot!==i){var f=i.$vnode?i.$vnode.data:{};f.routerView&&h++,f.keepAlive&&i._directInactive&&i._inactive&&(d=!0),i=i.$parent}if(o.routerViewDepth=h,d){var p=u[l],v=p&&p.component;return v?(p.configProps&&H(v,o,p.route,p.configProps),s(v,o,r)):s()}var m=c.matched[h],g=m&&m.components[l];if(!m||!g)return u[l]=null,s();u[l]={component:g},o.registerRouteInstance=function(t,e){var n=m.instances[l];(e&&n!==t||!e&&n===t)&&(m.instances[l]=e)},(o.hook||(o.hook={})).prepatch=function(t,e){m.instances[l]=e.componentInstance},o.hook.init=function(t){t.data.keepAlive&&t.componentInstance&&t.componentInstance!==m.instances[l]&&(m.instances[l]=t.componentInstance),V(c)};var b=m.props&&m.props[l];return b&&(a(u[l],{route:c,configProps:b}),H(g,o,c,b)),s(g,o,r)}};function H(t,e,n,r){var i=e.props=C(n,r);if(i){i=e.props=a({},i);var o=e.attrs=e.attrs||{};for(var s in i)t.props&&s in t.props||(o[s]=i[s],delete i[s])}}function C(t,e){switch(typeof e){case"undefined":return;case"object":return e;case"function":return e(t);case"boolean":return e?t.params:void 0;default:0}}function O(t,e,n){var a=t.charAt(0);if("/"===a)return t;if("?"===a||"#"===a)return e+t;var r=e.split("/");n&&r[r.length-1]||r.pop();for(var i=t.replace(/^\//,"").split("/"),o=0;o<i.length;o++){var s=i[o];".."===s?r.pop():"."!==s&&r.push(s)}return""!==r[0]&&r.unshift(""),r.join("/")}function I(t){var e="",n="",a=t.indexOf("#");a>=0&&(e=t.slice(a),t=t.slice(0,a));var r=t.indexOf("?");return r>=0&&(n=t.slice(r+1),t=t.slice(0,r)),{path:t,query:n,hash:e}}function S(t){return t.replace(/\/(?:\s*\/)+/g,"/")}var B=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)},T=J,L=_,k=D,E=N,P=X,F=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function _(t,e){var n,a=[],r=0,i=0,o="",s=e&&e.delimiter||"/";while(null!=(n=F.exec(t))){var l=n[0],c=n[1],u=n.index;if(o+=t.slice(i,u),i=u+l.length,c)o+=c[1];else{var h=t[i],d=n[2],f=n[3],p=n[4],v=n[5],m=n[6],g=n[7];o&&(a.push(o),o="");var b=null!=d&&null!=h&&h!==d,y="+"===m||"*"===m,z="?"===m||"*"===m,w=n[2]||s,M=p||v;a.push({name:f||r++,prefix:d||"",delimiter:w,optional:z,repeat:y,partial:b,asterisk:!!g,pattern:M?$(M):g?".*":"[^"+R(w)+"]+?"})}}return i<t.length&&(o+=t.substr(i)),o&&a.push(o),a}function D(t,e){return N(_(t,e),e)}function x(t){return encodeURI(t).replace(/[\/?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}))}function j(t){return encodeURI(t).replace(/[?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}))}function N(t,e){for(var n=new Array(t.length),a=0;a<t.length;a++)"object"===typeof t[a]&&(n[a]=new RegExp("^(?:"+t[a].pattern+")$",G(e)));return function(e,a){for(var r="",i=e||{},o=a||{},s=o.pretty?x:encodeURIComponent,l=0;l<t.length;l++){var c=t[l];if("string"!==typeof c){var u,h=i[c.name];if(null==h){if(c.optional){c.partial&&(r+=c.prefix);continue}throw new TypeError('Expected "'+c.name+'" to be defined')}if(B(h)){if(!c.repeat)throw new TypeError('Expected "'+c.name+'" to not repeat, but received `'+JSON.stringify(h)+"`");if(0===h.length){if(c.optional)continue;throw new TypeError('Expected "'+c.name+'" to not be empty')}for(var d=0;d<h.length;d++){if(u=s(h[d]),!n[l].test(u))throw new TypeError('Expected all "'+c.name+'" to match "'+c.pattern+'", but received `'+JSON.stringify(u)+"`");r+=(0===d?c.prefix:c.delimiter)+u}}else{if(u=c.asterisk?j(h):s(h),!n[l].test(u))throw new TypeError('Expected "'+c.name+'" to match "'+c.pattern+'", but received "'+u+'"');r+=c.prefix+u}}else r+=c}return r}}function R(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function $(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function U(t,e){return t.keys=e,t}function G(t){return t&&t.sensitive?"":"i"}function q(t,e){var n=t.source.match(/\((?!\?)/g);if(n)for(var a=0;a<n.length;a++)e.push({name:a,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return U(t,e)}function W(t,e,n){for(var a=[],r=0;r<t.length;r++)a.push(J(t[r],e,n).source);var i=new RegExp("(?:"+a.join("|")+")",G(n));return U(i,e)}function K(t,e,n){return X(_(t,n),e,n)}function X(t,e,n){B(e)||(n=e||n,e=[]),n=n||{};for(var a=n.strict,r=!1!==n.end,i="",o=0;o<t.length;o++){var s=t[o];if("string"===typeof s)i+=R(s);else{var l=R(s.prefix),c="(?:"+s.pattern+")";e.push(s),s.repeat&&(c+="(?:"+l+c+")*"),c=s.optional?s.partial?l+"("+c+")?":"(?:"+l+"("+c+"))?":l+"("+c+")",i+=c}}var u=R(n.delimiter||"/"),h=i.slice(-u.length)===u;return a||(i=(h?i.slice(0,-u.length):i)+"(?:"+u+"(?=$))?"),i+=r?"$":a&&h?"":"(?="+u+"|$)",U(new RegExp("^"+i,G(n)),e)}function J(t,e,n){return B(e)||(n=e||n,e=[]),n=n||{},t instanceof RegExp?q(t,e):B(t)?W(t,e,n):K(t,e,n)}T.parse=L,T.compile=k,T.tokensToFunction=E,T.tokensToRegExp=P;var Y=Object.create(null);function Q(t,e,n){e=e||{};try{var a=Y[t]||(Y[t]=T.compile(t));return"string"===typeof e.pathMatch&&(e[0]=e.pathMatch),a(e,{pretty:!0})}catch(r){return""}finally{delete e[0]}}function Z(t,e,n,r){var i="string"===typeof t?{path:t}:t;if(i._normalized)return i;if(i.name){i=a({},t);var o=i.params;return o&&"object"===typeof o&&(i.params=a({},o)),i}if(!i.path&&i.params&&e){i=a({},i),i._normalized=!0;var s=a(a({},e.params),i.params);if(e.name)i.name=e.name,i.params=s;else if(e.matched.length){var l=e.matched[e.matched.length-1].path;i.path=Q(l,s,"path "+e.path)}else 0;return i}var u=I(i.path||""),h=e&&e.path||"/",d=u.path?O(u.path,h,n||i.append):h,f=c(u.query,i.query,r&&r.options.parseQuery),p=i.hash||u.hash;return p&&"#"!==p.charAt(0)&&(p="#"+p),{_normalized:!0,path:d,query:f,hash:p}}var tt,et=[String,Object],nt=[String,Array],at=function(){},rt={name:"RouterLink",props:{to:{type:et,required:!0},tag:{type:String,default:"a"},custom:Boolean,exact:Boolean,exactPath:Boolean,append:Boolean,replace:Boolean,activeClass:String,exactActiveClass:String,ariaCurrentValue:{type:String,default:"page"},event:{type:nt,default:"click"}},render:function(t){var e=this,n=this.$router,r=this.$route,i=n.resolve(this.to,r,this.append),o=i.location,s=i.route,l=i.href,c={},u=n.options.linkActiveClass,h=n.options.linkExactActiveClass,d=null==u?"router-link-active":u,f=null==h?"router-link-exact-active":h,v=null==this.activeClass?d:this.activeClass,m=null==this.exactActiveClass?f:this.exactActiveClass,g=s.redirectedFrom?p(null,Z(s.redirectedFrom),null,n):s;c[m]=y(r,g,this.exactPath),c[v]=this.exact||this.exactPath?c[m]:w(r,g);var b=c[m]?this.ariaCurrentValue:null,z=function(t){it(t)&&(e.replace?n.replace(o,at):n.push(o,at))},M={click:it};Array.isArray(this.event)?this.event.forEach((function(t){M[t]=z})):M[this.event]=z;var V={class:c},A=!this.$scopedSlots.$hasNormal&&this.$scopedSlots.default&&this.$scopedSlots.default({href:l,route:s,navigate:z,isActive:c[v],isExactActive:c[m]});if(A){if(1===A.length)return A[0];if(A.length>1||!A.length)return 0===A.length?t():t("span",{},A)}if("a"===this.tag)V.on=M,V.attrs={href:l,"aria-current":b};else{var H=ot(this.$slots.default);if(H){H.isStatic=!1;var C=H.data=a({},H.data);for(var O in C.on=C.on||{},C.on){var I=C.on[O];O in M&&(C.on[O]=Array.isArray(I)?I:[I])}for(var S in M)S in C.on?C.on[S].push(M[S]):C.on[S]=z;var B=H.data.attrs=a({},H.data.attrs);B.href=l,B["aria-current"]=b}else V.on=M}return t(this.tag,V,this.$slots.default)}};function it(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&(void 0===t.button||0===t.button)){if(t.currentTarget&&t.currentTarget.getAttribute){var e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function ot(t){if(t)for(var e,n=0;n<t.length;n++){if(e=t[n],"a"===e.tag)return e;if(e.children&&(e=ot(e.children)))return e}}function st(t){if(!st.installed||tt!==t){st.installed=!0,tt=t;var e=function(t){return void 0!==t},n=function(t,n){var a=t.$options._parentVnode;e(a)&&e(a=a.data)&&e(a=a.registerRouteInstance)&&a(t,n)};t.mixin({beforeCreate:function(){e(this.$options.router)?(this._routerRoot=this,this._router=this.$options.router,this._router.init(this),t.util.defineReactive(this,"_route",this._router.history.current)):this._routerRoot=this.$parent&&this.$parent._routerRoot||this,n(this,this)},destroyed:function(){n(this)}}),Object.defineProperty(t.prototype,"$router",{get:function(){return this._routerRoot._router}}),Object.defineProperty(t.prototype,"$route",{get:function(){return this._routerRoot._route}}),t.component("RouterView",A),t.component("RouterLink",rt);var a=t.config.optionMergeStrategies;a.beforeRouteEnter=a.beforeRouteLeave=a.beforeRouteUpdate=a.created}}var lt="undefined"!==typeof window;function ct(t,e,n,a,r){var i=e||[],o=n||Object.create(null),s=a||Object.create(null);t.forEach((function(t){ut(i,o,s,t,r)}));for(var l=0,c=i.length;l<c;l++)"*"===i[l]&&(i.push(i.splice(l,1)[0]),c--,l--);return{pathList:i,pathMap:o,nameMap:s}}function ut(t,e,n,a,r,i){var o=a.path,s=a.name;var l=a.pathToRegexpOptions||{},c=dt(o,r,l.strict);"boolean"===typeof a.caseSensitive&&(l.sensitive=a.caseSensitive);var u={path:c,regex:ht(c,l),components:a.components||{default:a.component},alias:a.alias?"string"===typeof a.alias?[a.alias]:a.alias:[],instances:{},enteredCbs:{},name:s,parent:r,matchAs:i,redirect:a.redirect,beforeEnter:a.beforeEnter,meta:a.meta||{},props:null==a.props?{}:a.components?a.props:{default:a.props}};if(a.children&&a.children.forEach((function(a){var r=i?S(i+"/"+a.path):void 0;ut(t,e,n,a,u,r)})),e[u.path]||(t.push(u.path),e[u.path]=u),void 0!==a.alias)for(var h=Array.isArray(a.alias)?a.alias:[a.alias],d=0;d<h.length;++d){var f=h[d];0;var p={path:f,children:a.children};ut(t,e,n,p,r,u.path||"/")}s&&(n[s]||(n[s]=u))}function ht(t,e){var n=T(t,[],e);return n}function dt(t,e,n){return n||(t=t.replace(/\/$/,"")),"/"===t[0]||null==e?t:S(e.path+"/"+t)}function ft(t,e){var n=ct(t),a=n.pathList,r=n.pathMap,i=n.nameMap;function o(t){ct(t,a,r,i)}function s(t,e){var n="object"!==typeof t?i[t]:void 0;ct([e||t],a,r,i,n),n&&n.alias.length&&ct(n.alias.map((function(t){return{path:t,children:[e]}})),a,r,i,n)}function l(){return a.map((function(t){return r[t]}))}function c(t,n,o){var s=Z(t,n,!1,e),l=s.name;if(l){var c=i[l];if(!c)return d(null,s);var u=c.regex.keys.filter((function(t){return!t.optional})).map((function(t){return t.name}));if("object"!==typeof s.params&&(s.params={}),n&&"object"===typeof n.params)for(var h in n.params)!(h in s.params)&&u.indexOf(h)>-1&&(s.params[h]=n.params[h]);return s.path=Q(c.path,s.params,'named route "'+l+'"'),d(c,s,o)}if(s.path){s.params={};for(var f=0;f<a.length;f++){var p=a[f],v=r[p];if(pt(v.regex,s.path,s.params))return d(v,s,o)}}return d(null,s)}function u(t,n){var a=t.redirect,r="function"===typeof a?a(p(t,n,null,e)):a;if("string"===typeof r&&(r={path:r}),!r||"object"!==typeof r)return d(null,n);var o=r,s=o.name,l=o.path,u=n.query,h=n.hash,f=n.params;if(u=o.hasOwnProperty("query")?o.query:u,h=o.hasOwnProperty("hash")?o.hash:h,f=o.hasOwnProperty("params")?o.params:f,s){i[s];return c({_normalized:!0,name:s,query:u,hash:h,params:f},void 0,n)}if(l){var v=vt(l,t),m=Q(v,f,'redirect route with path "'+v+'"');return c({_normalized:!0,path:m,query:u,hash:h},void 0,n)}return d(null,n)}function h(t,e,n){var a=Q(n,e.params,'aliased route with path "'+n+'"'),r=c({_normalized:!0,path:a});if(r){var i=r.matched,o=i[i.length-1];return e.params=r.params,d(o,e)}return d(null,e)}function d(t,n,a){return t&&t.redirect?u(t,a||n):t&&t.matchAs?h(t,n,t.matchAs):p(t,n,a,e)}return{match:c,addRoute:s,getRoutes:l,addRoutes:o}}function pt(t,e,n){var a=e.match(t);if(!a)return!1;if(!n)return!0;for(var r=1,i=a.length;r<i;++r){var o=t.keys[r-1];o&&(n[o.name||"pathMatch"]="string"===typeof a[r]?l(a[r]):a[r])}return!0}function vt(t,e){return O(t,e.parent?e.parent.path:"/",!0)}var mt=lt&&window.performance&&window.performance.now?window.performance:Date;function gt(){return mt.now().toFixed(3)}var bt=gt();function yt(){return bt}function zt(t){return bt=t}var wt=Object.create(null);function Mt(){"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual");var t=window.location.protocol+"//"+window.location.host,e=window.location.href.replace(t,""),n=a({},window.history.state);return n.key=yt(),window.history.replaceState(n,"",e),window.addEventListener("popstate",Ht),function(){window.removeEventListener("popstate",Ht)}}function Vt(t,e,n,a){if(t.app){var r=t.options.scrollBehavior;r&&t.app.$nextTick((function(){var i=Ct(),o=r.call(t,e,n,a?i:null);o&&("function"===typeof o.then?o.then((function(t){kt(t,i)})).catch((function(t){0})):kt(o,i))}))}}function At(){var t=yt();t&&(wt[t]={x:window.pageXOffset,y:window.pageYOffset})}function Ht(t){At(),t.state&&t.state.key&&zt(t.state.key)}function Ct(){var t=yt();if(t)return wt[t]}function Ot(t,e){var n=document.documentElement,a=n.getBoundingClientRect(),r=t.getBoundingClientRect();return{x:r.left-a.left-e.x,y:r.top-a.top-e.y}}function It(t){return Tt(t.x)||Tt(t.y)}function St(t){return{x:Tt(t.x)?t.x:window.pageXOffset,y:Tt(t.y)?t.y:window.pageYOffset}}function Bt(t){return{x:Tt(t.x)?t.x:0,y:Tt(t.y)?t.y:0}}function Tt(t){return"number"===typeof t}var Lt=/^#\d/;function kt(t,e){var n="object"===typeof t;if(n&&"string"===typeof t.selector){var a=Lt.test(t.selector)?document.getElementById(t.selector.slice(1)):document.querySelector(t.selector);if(a){var r=t.offset&&"object"===typeof t.offset?t.offset:{};r=Bt(r),e=Ot(a,r)}else It(t)&&(e=St(t))}else n&&It(t)&&(e=St(t));e&&("scrollBehavior"in document.documentElement.style?window.scrollTo({left:e.x,top:e.y,behavior:t.behavior}):window.scrollTo(e.x,e.y))}var Et=lt&&function(){var t=window.navigator.userAgent;return(-1===t.indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone"))&&(window.history&&"function"===typeof window.history.pushState)}();function Pt(t,e){At();var n=window.history;try{if(e){var r=a({},n.state);r.key=yt(),n.replaceState(r,"",t)}else n.pushState({key:zt(gt())},"",t)}catch(i){window.location[e?"replace":"assign"](t)}}function Ft(t){Pt(t,!0)}function _t(t,e,n){var a=function(r){r>=t.length?n():t[r]?e(t[r],(function(){a(r+1)})):a(r+1)};a(0)}var Dt={redirected:2,aborted:4,cancelled:8,duplicated:16};function xt(t,e){return $t(t,e,Dt.redirected,'Redirected when going from "'+t.fullPath+'" to "'+Gt(e)+'" via a navigation guard.')}function jt(t,e){var n=$t(t,e,Dt.duplicated,'Avoided redundant navigation to current location: "'+t.fullPath+'".');return n.name="NavigationDuplicated",n}function Nt(t,e){return $t(t,e,Dt.cancelled,'Navigation cancelled from "'+t.fullPath+'" to "'+e.fullPath+'" with a new navigation.')}function Rt(t,e){return $t(t,e,Dt.aborted,'Navigation aborted from "'+t.fullPath+'" to "'+e.fullPath+'" via a navigation guard.')}function $t(t,e,n,a){var r=new Error(a);return r._isRouter=!0,r.from=t,r.to=e,r.type=n,r}var Ut=["params","query","hash"];function Gt(t){if("string"===typeof t)return t;if("path"in t)return t.path;var e={};return Ut.forEach((function(n){n in t&&(e[n]=t[n])})),JSON.stringify(e,null,2)}function qt(t){return Object.prototype.toString.call(t).indexOf("Error")>-1}function Wt(t,e){return qt(t)&&t._isRouter&&(null==e||t.type===e)}function Kt(t){return function(e,n,a){var r=!1,i=0,o=null;Xt(t,(function(t,e,n,s){if("function"===typeof t&&void 0===t.cid){r=!0,i++;var l,c=Zt((function(e){Qt(e)&&(e=e.default),t.resolved="function"===typeof e?e:tt.extend(e),n.components[s]=e,i--,i<=0&&a()})),u=Zt((function(t){var e="Failed to resolve async component "+s+": "+t;o||(o=qt(t)?t:new Error(e),a(o))}));try{l=t(c,u)}catch(d){u(d)}if(l)if("function"===typeof l.then)l.then(c,u);else{var h=l.component;h&&"function"===typeof h.then&&h.then(c,u)}}})),r||a()}}function Xt(t,e){return Jt(t.map((function(t){return Object.keys(t.components).map((function(n){return e(t.components[n],t.instances[n],t,n)}))})))}function Jt(t){return Array.prototype.concat.apply([],t)}var Yt="function"===typeof Symbol&&"symbol"===typeof Symbol.toStringTag;function Qt(t){return t.__esModule||Yt&&"Module"===t[Symbol.toStringTag]}function Zt(t){var e=!1;return function(){var n=[],a=arguments.length;while(a--)n[a]=arguments[a];if(!e)return e=!0,t.apply(this,n)}}var te=function(t,e){this.router=t,this.base=ee(e),this.current=m,this.pending=null,this.ready=!1,this.readyCbs=[],this.readyErrorCbs=[],this.errorCbs=[],this.listeners=[]};function ee(t){if(!t)if(lt){var e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^https?:\/\/[^\/]+/,"")}else t="/";return"/"!==t.charAt(0)&&(t="/"+t),t.replace(/\/$/,"")}function ne(t,e){var n,a=Math.max(t.length,e.length);for(n=0;n<a;n++)if(t[n]!==e[n])break;return{updated:e.slice(0,n),activated:e.slice(n),deactivated:t.slice(n)}}function ae(t,e,n,a){var r=Xt(t,(function(t,a,r,i){var o=re(t,e);if(o)return Array.isArray(o)?o.map((function(t){return n(t,a,r,i)})):n(o,a,r,i)}));return Jt(a?r.reverse():r)}function re(t,e){return"function"!==typeof t&&(t=tt.extend(t)),t.options[e]}function ie(t){return ae(t,"beforeRouteLeave",se,!0)}function oe(t){return ae(t,"beforeRouteUpdate",se)}function se(t,e){if(e)return function(){return t.apply(e,arguments)}}function le(t){return ae(t,"beforeRouteEnter",(function(t,e,n,a){return ce(t,n,a)}))}function ce(t,e,n){return function(a,r,i){return t(a,r,(function(t){"function"===typeof t&&(e.enteredCbs[n]||(e.enteredCbs[n]=[]),e.enteredCbs[n].push(t)),i(t)}))}}te.prototype.listen=function(t){this.cb=t},te.prototype.onReady=function(t,e){this.ready?t():(this.readyCbs.push(t),e&&this.readyErrorCbs.push(e))},te.prototype.onError=function(t){this.errorCbs.push(t)},te.prototype.transitionTo=function(t,e,n){var a,r=this;try{a=this.router.match(t,this.current)}catch(o){throw this.errorCbs.forEach((function(t){t(o)})),o}var i=this.current;this.confirmTransition(a,(function(){r.updateRoute(a),e&&e(a),r.ensureURL(),r.router.afterHooks.forEach((function(t){t&&t(a,i)})),r.ready||(r.ready=!0,r.readyCbs.forEach((function(t){t(a)})))}),(function(t){n&&n(t),t&&!r.ready&&(Wt(t,Dt.redirected)&&i===m||(r.ready=!0,r.readyErrorCbs.forEach((function(e){e(t)}))))}))},te.prototype.confirmTransition=function(t,e,n){var a=this,r=this.current;this.pending=t;var i=function(t){!Wt(t)&&qt(t)&&(a.errorCbs.length?a.errorCbs.forEach((function(e){e(t)})):console.error(t)),n&&n(t)},o=t.matched.length-1,s=r.matched.length-1;if(y(t,r)&&o===s&&t.matched[o]===r.matched[s])return this.ensureURL(),t.hash&&Vt(this.router,r,t,!1),i(jt(r,t));var l=ne(this.current.matched,t.matched),c=l.updated,u=l.deactivated,h=l.activated,d=[].concat(ie(u),this.router.beforeHooks,oe(c),h.map((function(t){return t.beforeEnter})),Kt(h)),f=function(e,n){if(a.pending!==t)return i(Nt(r,t));try{e(t,r,(function(e){!1===e?(a.ensureURL(!0),i(Rt(r,t))):qt(e)?(a.ensureURL(!0),i(e)):"string"===typeof e||"object"===typeof e&&("string"===typeof e.path||"string"===typeof e.name)?(i(xt(r,t)),"object"===typeof e&&e.replace?a.replace(e):a.push(e)):n(e)}))}catch(o){i(o)}};_t(d,f,(function(){var n=le(h),o=n.concat(a.router.resolveHooks);_t(o,f,(function(){if(a.pending!==t)return i(Nt(r,t));a.pending=null,e(t),a.router.app&&a.router.app.$nextTick((function(){V(t)}))}))}))},te.prototype.updateRoute=function(t){this.current=t,this.cb&&this.cb(t)},te.prototype.setupListeners=function(){},te.prototype.teardown=function(){this.listeners.forEach((function(t){t()})),this.listeners=[],this.current=m,this.pending=null};var ue=function(t){function e(e,n){t.call(this,e,n),this._startLocation=he(this.base)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setupListeners=function(){var t=this;if(!(this.listeners.length>0)){var e=this.router,n=e.options.scrollBehavior,a=Et&&n;a&&this.listeners.push(Mt());var r=function(){var n=t.current,r=he(t.base);t.current===m&&r===t._startLocation||t.transitionTo(r,(function(t){a&&Vt(e,t,n,!0)}))};window.addEventListener("popstate",r),this.listeners.push((function(){window.removeEventListener("popstate",r)}))}},e.prototype.go=function(t){window.history.go(t)},e.prototype.push=function(t,e,n){var a=this,r=this,i=r.current;this.transitionTo(t,(function(t){Pt(S(a.base+t.fullPath)),Vt(a.router,t,i,!1),e&&e(t)}),n)},e.prototype.replace=function(t,e,n){var a=this,r=this,i=r.current;this.transitionTo(t,(function(t){Ft(S(a.base+t.fullPath)),Vt(a.router,t,i,!1),e&&e(t)}),n)},e.prototype.ensureURL=function(t){if(he(this.base)!==this.current.fullPath){var e=S(this.base+this.current.fullPath);t?Pt(e):Ft(e)}},e.prototype.getCurrentLocation=function(){return he(this.base)},e}(te);function he(t){var e=window.location.pathname,n=e.toLowerCase(),a=t.toLowerCase();return!t||n!==a&&0!==n.indexOf(S(a+"/"))||(e=e.slice(t.length)),(e||"/")+window.location.search+window.location.hash}var de=function(t){function e(e,n,a){t.call(this,e,n),a&&fe(this.base)||pe()}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setupListeners=function(){var t=this;if(!(this.listeners.length>0)){var e=this.router,n=e.options.scrollBehavior,a=Et&&n;a&&this.listeners.push(Mt());var r=function(){var e=t.current;pe()&&t.transitionTo(ve(),(function(n){a&&Vt(t.router,n,e,!0),Et||be(n.fullPath)}))},i=Et?"popstate":"hashchange";window.addEventListener(i,r),this.listeners.push((function(){window.removeEventListener(i,r)}))}},e.prototype.push=function(t,e,n){var a=this,r=this,i=r.current;this.transitionTo(t,(function(t){ge(t.fullPath),Vt(a.router,t,i,!1),e&&e(t)}),n)},e.prototype.replace=function(t,e,n){var a=this,r=this,i=r.current;this.transitionTo(t,(function(t){be(t.fullPath),Vt(a.router,t,i,!1),e&&e(t)}),n)},e.prototype.go=function(t){window.history.go(t)},e.prototype.ensureURL=function(t){var e=this.current.fullPath;ve()!==e&&(t?ge(e):be(e))},e.prototype.getCurrentLocation=function(){return ve()},e}(te);function fe(t){var e=he(t);if(!/^\/#/.test(e))return window.location.replace(S(t+"/#"+e)),!0}function pe(){var t=ve();return"/"===t.charAt(0)||(be("/"+t),!1)}function ve(){var t=window.location.href,e=t.indexOf("#");return e<0?"":(t=t.slice(e+1),t)}function me(t){var e=window.location.href,n=e.indexOf("#"),a=n>=0?e.slice(0,n):e;return a+"#"+t}function ge(t){Et?Pt(me(t)):window.location.hash=t}function be(t){Et?Ft(me(t)):window.location.replace(me(t))}var ye=function(t){function e(e,n){t.call(this,e,n),this.stack=[],this.index=-1}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.push=function(t,e,n){var a=this;this.transitionTo(t,(function(t){a.stack=a.stack.slice(0,a.index+1).concat(t),a.index++,e&&e(t)}),n)},e.prototype.replace=function(t,e,n){var a=this;this.transitionTo(t,(function(t){a.stack=a.stack.slice(0,a.index).concat(t),e&&e(t)}),n)},e.prototype.go=function(t){var e=this,n=this.index+t;if(!(n<0||n>=this.stack.length)){var a=this.stack[n];this.confirmTransition(a,(function(){var t=e.current;e.index=n,e.updateRoute(a),e.router.afterHooks.forEach((function(e){e&&e(a,t)}))}),(function(t){Wt(t,Dt.duplicated)&&(e.index=n)}))}},e.prototype.getCurrentLocation=function(){var t=this.stack[this.stack.length-1];return t?t.fullPath:"/"},e.prototype.ensureURL=function(){},e}(te),ze=function(t){void 0===t&&(t={}),this.app=null,this.apps=[],this.options=t,this.beforeHooks=[],this.resolveHooks=[],this.afterHooks=[],this.matcher=ft(t.routes||[],this);var e=t.mode||"hash";switch(this.fallback="history"===e&&!Et&&!1!==t.fallback,this.fallback&&(e="hash"),lt||(e="abstract"),this.mode=e,e){case"history":this.history=new ue(this,t.base);break;case"hash":this.history=new de(this,t.base,this.fallback);break;case"abstract":this.history=new ye(this,t.base);break;default:0}},we={currentRoute:{configurable:!0}};function Me(t,e){return t.push(e),function(){var n=t.indexOf(e);n>-1&&t.splice(n,1)}}function Ve(t,e,n){var a="hash"===n?"#"+e:e;return t?S(t+"/"+a):a}ze.prototype.match=function(t,e,n){return this.matcher.match(t,e,n)},we.currentRoute.get=function(){return this.history&&this.history.current},ze.prototype.init=function(t){var e=this;if(this.apps.push(t),t.$once("hook:destroyed",(function(){var n=e.apps.indexOf(t);n>-1&&e.apps.splice(n,1),e.app===t&&(e.app=e.apps[0]||null),e.app||e.history.teardown()})),!this.app){this.app=t;var n=this.history;if(n instanceof ue||n instanceof de){var a=function(t){var a=n.current,r=e.options.scrollBehavior,i=Et&&r;i&&"fullPath"in t&&Vt(e,t,a,!1)},r=function(t){n.setupListeners(),a(t)};n.transitionTo(n.getCurrentLocation(),r,r)}n.listen((function(t){e.apps.forEach((function(e){e._route=t}))}))}},ze.prototype.beforeEach=function(t){return Me(this.beforeHooks,t)},ze.prototype.beforeResolve=function(t){return Me(this.resolveHooks,t)},ze.prototype.afterEach=function(t){return Me(this.afterHooks,t)},ze.prototype.onReady=function(t,e){this.history.onReady(t,e)},ze.prototype.onError=function(t){this.history.onError(t)},ze.prototype.push=function(t,e,n){var a=this;if(!e&&!n&&"undefined"!==typeof Promise)return new Promise((function(e,n){a.history.push(t,e,n)}));this.history.push(t,e,n)},ze.prototype.replace=function(t,e,n){var a=this;if(!e&&!n&&"undefined"!==typeof Promise)return new Promise((function(e,n){a.history.replace(t,e,n)}));this.history.replace(t,e,n)},ze.prototype.go=function(t){this.history.go(t)},ze.prototype.back=function(){this.go(-1)},ze.prototype.forward=function(){this.go(1)},ze.prototype.getMatchedComponents=function(t){var e=t?t.matched?t:this.resolve(t).route:this.currentRoute;return e?[].concat.apply([],e.matched.map((function(t){return Object.keys(t.components).map((function(e){return t.components[e]}))}))):[]},ze.prototype.resolve=function(t,e,n){e=e||this.history.current;var a=Z(t,e,n,this),r=this.match(a,e),i=r.redirectedFrom||r.fullPath,o=this.history.base,s=Ve(o,i,this.mode);return{location:a,route:r,href:s,normalizedTo:a,resolved:r}},ze.prototype.getRoutes=function(){return this.matcher.getRoutes()},ze.prototype.addRoute=function(t,e){this.matcher.addRoute(t,e),this.history.current!==m&&this.history.transitionTo(this.history.getCurrentLocation())},ze.prototype.addRoutes=function(t){this.matcher.addRoutes(t),this.history.current!==m&&this.history.transitionTo(this.history.getCurrentLocation())},Object.defineProperties(ze.prototype,we),ze.install=st,ze.version="3.5.4",ze.isNavigationFailure=Wt,ze.NavigationFailureType=Dt,ze.START_LOCATION=m,lt&&window.Vue&&window.Vue.use(ze),e["Z"]=ze},8935:function(t,e,n){"use strict";n.r(e);n(4633);var a=Object.freeze({});function r(t){return void 0===t||null===t}function i(t){return void 0!==t&&null!==t}function o(t){return!0===t}function s(t){return!1===t}function l(t){return"string"===typeof t||"number"===typeof t||"symbol"===typeof t||"boolean"===typeof t}function c(t){return null!==t&&"object"===typeof t}var u=Object.prototype.toString;function h(t){return"[object Object]"===u.call(t)}function d(t){return"[object RegExp]"===u.call(t)}function f(t){var e=parseFloat(String(t));return e>=0&&Math.floor(e)===e&&isFinite(t)}function p(t){return i(t)&&"function"===typeof t.then&&"function"===typeof t.catch}function v(t){return null==t?"":Array.isArray(t)||h(t)&&t.toString===u?JSON.stringify(t,null,2):String(t)}function m(t){var e=parseFloat(t);return isNaN(e)?t:e}function g(t,e){for(var n=Object.create(null),a=t.split(","),r=0;r<a.length;r++)n[a[r]]=!0;return e?function(t){return n[t.toLowerCase()]}:function(t){return n[t]}}g("slot,component",!0);var b=g("key,ref,slot,slot-scope,is");function y(t,e){if(t.length){var n=t.indexOf(e);if(n>-1)return t.splice(n,1)}}var z=Object.prototype.hasOwnProperty;function w(t,e){return z.call(t,e)}function M(t){var e=Object.create(null);return function(n){var a=e[n];return a||(e[n]=t(n))}}var V=/-(\w)/g,A=M((function(t){return t.replace(V,(function(t,e){return e?e.toUpperCase():""}))})),H=M((function(t){return t.charAt(0).toUpperCase()+t.slice(1)})),C=/\B([A-Z])/g,O=M((function(t){return t.replace(C,"-$1").toLowerCase()}));function I(t,e){function n(n){var a=arguments.length;return a?a>1?t.apply(e,arguments):t.call(e,n):t.call(e)}return n._length=t.length,n}function S(t,e){return t.bind(e)}var B=Function.prototype.bind?S:I;function T(t,e){e=e||0;var n=t.length-e,a=new Array(n);while(n--)a[n]=t[n+e];return a}function L(t,e){for(var n in e)t[n]=e[n];return t}function k(t){for(var e={},n=0;n<t.length;n++)t[n]&&L(e,t[n]);return e}function E(t,e,n){}var P=function(t,e,n){return!1},F=function(t){return t};function _(t,e){if(t===e)return!0;var n=c(t),a=c(e);if(!n||!a)return!n&&!a&&String(t)===String(e);try{var r=Array.isArray(t),i=Array.isArray(e);if(r&&i)return t.length===e.length&&t.every((function(t,n){return _(t,e[n])}));if(t instanceof Date&&e instanceof Date)return t.getTime()===e.getTime();if(r||i)return!1;var o=Object.keys(t),s=Object.keys(e);return o.length===s.length&&o.every((function(n){return _(t[n],e[n])}))}catch(l){return!1}}function D(t,e){for(var n=0;n<t.length;n++)if(_(t[n],e))return n;return-1}function x(t){var e=!1;return function(){e||(e=!0,t.apply(this,arguments))}}var j="data-server-rendered",N=["component","directive","filter"],R=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],$={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:P,isReservedAttr:P,isUnknownElement:P,getTagNamespace:E,parsePlatformTagName:F,mustUseProp:P,async:!0,_lifecycleHooks:R},U=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function G(t){var e=(t+"").charCodeAt(0);return 36===e||95===e}function q(t,e,n,a){Object.defineProperty(t,e,{value:n,enumerable:!!a,writable:!0,configurable:!0})}var W=new RegExp("[^"+U.source+".$_\\d]");function K(t){if(!W.test(t)){var e=t.split(".");return function(t){for(var n=0;n<e.length;n++){if(!t)return;t=t[e[n]]}return t}}}var X,J="__proto__"in{},Y="undefined"!==typeof window,Q="undefined"!==typeof WXEnvironment&&!!WXEnvironment.platform,Z=Q&&WXEnvironment.platform.toLowerCase(),tt=Y&&window.navigator.userAgent.toLowerCase(),et=tt&&/msie|trident/.test(tt),nt=tt&&tt.indexOf("msie 9.0")>0,at=tt&&tt.indexOf("edge/")>0,rt=(tt&&tt.indexOf("android"),tt&&/iphone|ipad|ipod|ios/.test(tt)||"ios"===Z),it=(tt&&/chrome\/\d+/.test(tt),tt&&/phantomjs/.test(tt),tt&&tt.match(/firefox\/(\d+)/)),ot={}.watch,st=!1;if(Y)try{var lt={};Object.defineProperty(lt,"passive",{get:function(){st=!0}}),window.addEventListener("test-passive",null,lt)}catch(Ho){}var ct=function(){return void 0===X&&(X=!Y&&!Q&&"undefined"!==typeof n.g&&(n.g["process"]&&"server"===n.g["process"].env.VUE_ENV)),X},ut=Y&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function ht(t){return"function"===typeof t&&/native code/.test(t.toString())}var dt,ft="undefined"!==typeof Symbol&&ht(Symbol)&&"undefined"!==typeof Reflect&&ht(Reflect.ownKeys);dt="undefined"!==typeof Set&&ht(Set)?Set:function(){function t(){this.set=Object.create(null)}return t.prototype.has=function(t){return!0===this.set[t]},t.prototype.add=function(t){this.set[t]=!0},t.prototype.clear=function(){this.set=Object.create(null)},t}();var pt=E,vt=0,mt=function(){this.id=vt++,this.subs=[]};mt.prototype.addSub=function(t){this.subs.push(t)},mt.prototype.removeSub=function(t){y(this.subs,t)},mt.prototype.depend=function(){mt.target&&mt.target.addDep(this)},mt.prototype.notify=function(){var t=this.subs.slice();for(var e=0,n=t.length;e<n;e++)t[e].update()},mt.target=null;var gt=[];function bt(t){gt.push(t),mt.target=t}function yt(){gt.pop(),mt.target=gt[gt.length-1]}var zt=function(t,e,n,a,r,i,o,s){this.tag=t,this.data=e,this.children=n,this.text=a,this.elm=r,this.ns=void 0,this.context=i,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=e&&e.key,this.componentOptions=o,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=s,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},wt={child:{configurable:!0}};wt.child.get=function(){return this.componentInstance},Object.defineProperties(zt.prototype,wt);var Mt=function(t){void 0===t&&(t="");var e=new zt;return e.text=t,e.isComment=!0,e};function Vt(t){return new zt(void 0,void 0,void 0,String(t))}function At(t){var e=new zt(t.tag,t.data,t.children&&t.children.slice(),t.text,t.elm,t.context,t.componentOptions,t.asyncFactory);return e.ns=t.ns,e.isStatic=t.isStatic,e.key=t.key,e.isComment=t.isComment,e.fnContext=t.fnContext,e.fnOptions=t.fnOptions,e.fnScopeId=t.fnScopeId,e.asyncMeta=t.asyncMeta,e.isCloned=!0,e}var Ht=Array.prototype,Ct=Object.create(Ht),Ot=["push","pop","shift","unshift","splice","sort","reverse"];Ot.forEach((function(t){var e=Ht[t];q(Ct,t,(function(){var n=[],a=arguments.length;while(a--)n[a]=arguments[a];var r,i=e.apply(this,n),o=this.__ob__;switch(t){case"push":case"unshift":r=n;break;case"splice":r=n.slice(2);break}return r&&o.observeArray(r),o.dep.notify(),i}))}));var It=Object.getOwnPropertyNames(Ct),St=!0;function Bt(t){St=t}var Tt=function(t){this.value=t,this.dep=new mt,this.vmCount=0,q(t,"__ob__",this),Array.isArray(t)?(J?Lt(t,Ct):kt(t,Ct,It),this.observeArray(t)):this.walk(t)};function Lt(t,e){t.__proto__=e}function kt(t,e,n){for(var a=0,r=n.length;a<r;a++){var i=n[a];q(t,i,e[i])}}function Et(t,e){var n;if(c(t)&&!(t instanceof zt))return w(t,"__ob__")&&t.__ob__ instanceof Tt?n=t.__ob__:St&&!ct()&&(Array.isArray(t)||h(t))&&Object.isExtensible(t)&&!t._isVue&&(n=new Tt(t)),e&&n&&n.vmCount++,n}function Pt(t,e,n,a,r){var i=new mt,o=Object.getOwnPropertyDescriptor(t,e);if(!o||!1!==o.configurable){var s=o&&o.get,l=o&&o.set;s&&!l||2!==arguments.length||(n=t[e]);var c=!r&&Et(n);Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){var e=s?s.call(t):n;return mt.target&&(i.depend(),c&&(c.dep.depend(),Array.isArray(e)&&Dt(e))),e},set:function(e){var a=s?s.call(t):n;e===a||e!==e&&a!==a||s&&!l||(l?l.call(t,e):n=e,c=!r&&Et(e),i.notify())}})}}function Ft(t,e,n){if(Array.isArray(t)&&f(e))return t.length=Math.max(t.length,e),t.splice(e,1,n),n;if(e in t&&!(e in Object.prototype))return t[e]=n,n;var a=t.__ob__;return t._isVue||a&&a.vmCount?n:a?(Pt(a.value,e,n),a.dep.notify(),n):(t[e]=n,n)}function _t(t,e){if(Array.isArray(t)&&f(e))t.splice(e,1);else{var n=t.__ob__;t._isVue||n&&n.vmCount||w(t,e)&&(delete t[e],n&&n.dep.notify())}}function Dt(t){for(var e=void 0,n=0,a=t.length;n<a;n++)e=t[n],e&&e.__ob__&&e.__ob__.dep.depend(),Array.isArray(e)&&Dt(e)}Tt.prototype.walk=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)Pt(t,e[n])},Tt.prototype.observeArray=function(t){for(var e=0,n=t.length;e<n;e++)Et(t[e])};var xt=$.optionMergeStrategies;function jt(t,e){if(!e)return t;for(var n,a,r,i=ft?Reflect.ownKeys(e):Object.keys(e),o=0;o<i.length;o++)n=i[o],"__ob__"!==n&&(a=t[n],r=e[n],w(t,n)?a!==r&&h(a)&&h(r)&&jt(a,r):Ft(t,n,r));return t}function Nt(t,e,n){return n?function(){var a="function"===typeof e?e.call(n,n):e,r="function"===typeof t?t.call(n,n):t;return a?jt(a,r):r}:e?t?function(){return jt("function"===typeof e?e.call(this,this):e,"function"===typeof t?t.call(this,this):t)}:e:t}function Rt(t,e){var n=e?t?t.concat(e):Array.isArray(e)?e:[e]:t;return n?$t(n):n}function $t(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}function Ut(t,e,n,a){var r=Object.create(t||null);return e?L(r,e):r}xt.data=function(t,e,n){return n?Nt(t,e,n):e&&"function"!==typeof e?t:Nt(t,e)},R.forEach((function(t){xt[t]=Rt})),N.forEach((function(t){xt[t+"s"]=Ut})),xt.watch=function(t,e,n,a){if(t===ot&&(t=void 0),e===ot&&(e=void 0),!e)return Object.create(t||null);if(!t)return e;var r={};for(var i in L(r,t),e){var o=r[i],s=e[i];o&&!Array.isArray(o)&&(o=[o]),r[i]=o?o.concat(s):Array.isArray(s)?s:[s]}return r},xt.props=xt.methods=xt.inject=xt.computed=function(t,e,n,a){if(!t)return e;var r=Object.create(null);return L(r,t),e&&L(r,e),r},xt.provide=Nt;var Gt=function(t,e){return void 0===e?t:e};function qt(t,e){var n=t.props;if(n){var a,r,i,o={};if(Array.isArray(n)){a=n.length;while(a--)r=n[a],"string"===typeof r&&(i=A(r),o[i]={type:null})}else if(h(n))for(var s in n)r=n[s],i=A(s),o[i]=h(r)?r:{type:r};else 0;t.props=o}}function Wt(t,e){var n=t.inject;if(n){var a=t.inject={};if(Array.isArray(n))for(var r=0;r<n.length;r++)a[n[r]]={from:n[r]};else if(h(n))for(var i in n){var o=n[i];a[i]=h(o)?L({from:i},o):{from:o}}else 0}}function Kt(t){var e=t.directives;if(e)for(var n in e){var a=e[n];"function"===typeof a&&(e[n]={bind:a,update:a})}}function Xt(t,e,n){if("function"===typeof e&&(e=e.options),qt(e,n),Wt(e,n),Kt(e),!e._base&&(e.extends&&(t=Xt(t,e.extends,n)),e.mixins))for(var a=0,r=e.mixins.length;a<r;a++)t=Xt(t,e.mixins[a],n);var i,o={};for(i in t)s(i);for(i in e)w(t,i)||s(i);function s(a){var r=xt[a]||Gt;o[a]=r(t[a],e[a],n,a)}return o}function Jt(t,e,n,a){if("string"===typeof n){var r=t[e];if(w(r,n))return r[n];var i=A(n);if(w(r,i))return r[i];var o=H(i);if(w(r,o))return r[o];var s=r[n]||r[i]||r[o];return s}}function Yt(t,e,n,a){var r=e[t],i=!w(n,t),o=n[t],s=ne(Boolean,r.type);if(s>-1)if(i&&!w(r,"default"))o=!1;else if(""===o||o===O(t)){var l=ne(String,r.type);(l<0||s<l)&&(o=!0)}if(void 0===o){o=Qt(a,r,t);var c=St;Bt(!0),Et(o),Bt(c)}return o}function Qt(t,e,n){if(w(e,"default")){var a=e.default;return t&&t.$options.propsData&&void 0===t.$options.propsData[n]&&void 0!==t._props[n]?t._props[n]:"function"===typeof a&&"Function"!==te(e.type)?a.call(t):a}}var Zt=/^\s*function (\w+)/;function te(t){var e=t&&t.toString().match(Zt);return e?e[1]:""}function ee(t,e){return te(t)===te(e)}function ne(t,e){if(!Array.isArray(e))return ee(e,t)?0:-1;for(var n=0,a=e.length;n<a;n++)if(ee(e[n],t))return n;return-1}function ae(t,e,n){bt();try{if(e){var a=e;while(a=a.$parent){var r=a.$options.errorCaptured;if(r)for(var i=0;i<r.length;i++)try{var o=!1===r[i].call(a,t,e,n);if(o)return}catch(Ho){ie(Ho,a,"errorCaptured hook")}}}ie(t,e,n)}finally{yt()}}function re(t,e,n,a,r){var i;try{i=n?t.apply(e,n):t.call(e),i&&!i._isVue&&p(i)&&!i._handled&&(i.catch((function(t){return ae(t,a,r+" (Promise/async)")})),i._handled=!0)}catch(Ho){ae(Ho,a,r)}return i}function ie(t,e,n){if($.errorHandler)try{return $.errorHandler.call(null,t,e,n)}catch(Ho){Ho!==t&&oe(Ho,null,"config.errorHandler")}oe(t,e,n)}function oe(t,e,n){if(!Y&&!Q||"undefined"===typeof console)throw t;console.error(t)}var se,le=!1,ce=[],ue=!1;function he(){ue=!1;var t=ce.slice(0);ce.length=0;for(var e=0;e<t.length;e++)t[e]()}if("undefined"!==typeof Promise&&ht(Promise)){var de=Promise.resolve();se=function(){de.then(he),rt&&setTimeout(E)},le=!0}else if(et||"undefined"===typeof MutationObserver||!ht(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())se="undefined"!==typeof setImmediate&&ht(setImmediate)?function(){setImmediate(he)}:function(){setTimeout(he,0)};else{var fe=1,pe=new MutationObserver(he),ve=document.createTextNode(String(fe));pe.observe(ve,{characterData:!0}),se=function(){fe=(fe+1)%2,ve.data=String(fe)},le=!0}function me(t,e){var n;if(ce.push((function(){if(t)try{t.call(e)}catch(Ho){ae(Ho,e,"nextTick")}else n&&n(e)})),ue||(ue=!0,se()),!t&&"undefined"!==typeof Promise)return new Promise((function(t){n=t}))}var ge=new dt;function be(t){ye(t,ge),ge.clear()}function ye(t,e){var n,a,r=Array.isArray(t);if(!(!r&&!c(t)||Object.isFrozen(t)||t instanceof zt)){if(t.__ob__){var i=t.__ob__.dep.id;if(e.has(i))return;e.add(i)}if(r){n=t.length;while(n--)ye(t[n],e)}else{a=Object.keys(t),n=a.length;while(n--)ye(t[a[n]],e)}}}var ze=M((function(t){var e="&"===t.charAt(0);t=e?t.slice(1):t;var n="~"===t.charAt(0);t=n?t.slice(1):t;var a="!"===t.charAt(0);return t=a?t.slice(1):t,{name:t,once:n,capture:a,passive:e}}));function we(t,e){function n(){var t=arguments,a=n.fns;if(!Array.isArray(a))return re(a,null,arguments,e,"v-on handler");for(var r=a.slice(),i=0;i<r.length;i++)re(r[i],null,t,e,"v-on handler")}return n.fns=t,n}function Me(t,e,n,a,i,s){var l,c,u,h;for(l in t)c=t[l],u=e[l],h=ze(l),r(c)||(r(u)?(r(c.fns)&&(c=t[l]=we(c,s)),o(h.once)&&(c=t[l]=i(h.name,c,h.capture)),n(h.name,c,h.capture,h.passive,h.params)):c!==u&&(u.fns=c,t[l]=u));for(l in e)r(t[l])&&(h=ze(l),a(h.name,e[l],h.capture))}function Ve(t,e,n){var a;t instanceof zt&&(t=t.data.hook||(t.data.hook={}));var s=t[e];function l(){n.apply(this,arguments),y(a.fns,l)}r(s)?a=we([l]):i(s.fns)&&o(s.merged)?(a=s,a.fns.push(l)):a=we([s,l]),a.merged=!0,t[e]=a}function Ae(t,e,n){var a=e.options.props;if(!r(a)){var o={},s=t.attrs,l=t.props;if(i(s)||i(l))for(var c in a){var u=O(c);He(o,l,c,u,!0)||He(o,s,c,u,!1)}return o}}function He(t,e,n,a,r){if(i(e)){if(w(e,n))return t[n]=e[n],r||delete e[n],!0;if(w(e,a))return t[n]=e[a],r||delete e[a],!0}return!1}function Ce(t){for(var e=0;e<t.length;e++)if(Array.isArray(t[e]))return Array.prototype.concat.apply([],t);return t}function Oe(t){return l(t)?[Vt(t)]:Array.isArray(t)?Se(t):void 0}function Ie(t){return i(t)&&i(t.text)&&s(t.isComment)}function Se(t,e){var n,a,s,c,u=[];for(n=0;n<t.length;n++)a=t[n],r(a)||"boolean"===typeof a||(s=u.length-1,c=u[s],Array.isArray(a)?a.length>0&&(a=Se(a,(e||"")+"_"+n),Ie(a[0])&&Ie(c)&&(u[s]=Vt(c.text+a[0].text),a.shift()),u.push.apply(u,a)):l(a)?Ie(c)?u[s]=Vt(c.text+a):""!==a&&u.push(Vt(a)):Ie(a)&&Ie(c)?u[s]=Vt(c.text+a.text):(o(t._isVList)&&i(a.tag)&&r(a.key)&&i(e)&&(a.key="__vlist"+e+"_"+n+"__"),u.push(a)));return u}function Be(t){var e=t.$options.provide;e&&(t._provided="function"===typeof e?e.call(t):e)}function Te(t){var e=Le(t.$options.inject,t);e&&(Bt(!1),Object.keys(e).forEach((function(n){Pt(t,n,e[n])})),Bt(!0))}function Le(t,e){if(t){for(var n=Object.create(null),a=ft?Reflect.ownKeys(t):Object.keys(t),r=0;r<a.length;r++){var i=a[r];if("__ob__"!==i){var o=t[i].from,s=e;while(s){if(s._provided&&w(s._provided,o)){n[i]=s._provided[o];break}s=s.$parent}if(!s)if("default"in t[i]){var l=t[i].default;n[i]="function"===typeof l?l.call(e):l}else 0}}return n}}function ke(t,e){if(!t||!t.length)return{};for(var n={},a=0,r=t.length;a<r;a++){var i=t[a],o=i.data;if(o&&o.attrs&&o.attrs.slot&&delete o.attrs.slot,i.context!==e&&i.fnContext!==e||!o||null==o.slot)(n.default||(n.default=[])).push(i);else{var s=o.slot,l=n[s]||(n[s]=[]);"template"===i.tag?l.push.apply(l,i.children||[]):l.push(i)}}for(var c in n)n[c].every(Ee)&&delete n[c];return n}function Ee(t){return t.isComment&&!t.asyncFactory||" "===t.text}function Pe(t){return t.isComment&&t.asyncFactory}function Fe(t,e,n){var r,i=Object.keys(e).length>0,o=t?!!t.$stable:!i,s=t&&t.$key;if(t){if(t._normalized)return t._normalized;if(o&&n&&n!==a&&s===n.$key&&!i&&!n.$hasNormal)return n;for(var l in r={},t)t[l]&&"$"!==l[0]&&(r[l]=_e(e,l,t[l]))}else r={};for(var c in e)c in r||(r[c]=De(e,c));return t&&Object.isExtensible(t)&&(t._normalized=r),q(r,"$stable",o),q(r,"$key",s),q(r,"$hasNormal",i),r}function _e(t,e,n){var a=function(){var t=arguments.length?n.apply(null,arguments):n({});t=t&&"object"===typeof t&&!Array.isArray(t)?[t]:Oe(t);var e=t&&t[0];return t&&(!e||1===t.length&&e.isComment&&!Pe(e))?void 0:t};return n.proxy&&Object.defineProperty(t,e,{get:a,enumerable:!0,configurable:!0}),a}function De(t,e){return function(){return t[e]}}function xe(t,e){var n,a,r,o,s;if(Array.isArray(t)||"string"===typeof t)for(n=new Array(t.length),a=0,r=t.length;a<r;a++)n[a]=e(t[a],a);else if("number"===typeof t)for(n=new Array(t),a=0;a<t;a++)n[a]=e(a+1,a);else if(c(t))if(ft&&t[Symbol.iterator]){n=[];var l=t[Symbol.iterator](),u=l.next();while(!u.done)n.push(e(u.value,n.length)),u=l.next()}else for(o=Object.keys(t),n=new Array(o.length),a=0,r=o.length;a<r;a++)s=o[a],n[a]=e(t[s],s,a);return i(n)||(n=[]),n._isVList=!0,n}function je(t,e,n,a){var r,i=this.$scopedSlots[t];i?(n=n||{},a&&(n=L(L({},a),n)),r=i(n)||("function"===typeof e?e():e)):r=this.$slots[t]||("function"===typeof e?e():e);var o=n&&n.slot;return o?this.$createElement("template",{slot:o},r):r}function Ne(t){return Jt(this.$options,"filters",t,!0)||F}function Re(t,e){return Array.isArray(t)?-1===t.indexOf(e):t!==e}function $e(t,e,n,a,r){var i=$.keyCodes[e]||n;return r&&a&&!$.keyCodes[e]?Re(r,a):i?Re(i,t):a?O(a)!==e:void 0===t}function Ue(t,e,n,a,r){if(n)if(c(n)){var i;Array.isArray(n)&&(n=k(n));var o=function(o){if("class"===o||"style"===o||b(o))i=t;else{var s=t.attrs&&t.attrs.type;i=a||$.mustUseProp(e,s,o)?t.domProps||(t.domProps={}):t.attrs||(t.attrs={})}var l=A(o),c=O(o);if(!(l in i)&&!(c in i)&&(i[o]=n[o],r)){var u=t.on||(t.on={});u["update:"+o]=function(t){n[o]=t}}};for(var s in n)o(s)}else;return t}function Ge(t,e){var n=this._staticTrees||(this._staticTrees=[]),a=n[t];return a&&!e||(a=n[t]=this.$options.staticRenderFns[t].call(this._renderProxy,null,this),We(a,"__static__"+t,!1)),a}function qe(t,e,n){return We(t,"__once__"+e+(n?"_"+n:""),!0),t}function We(t,e,n){if(Array.isArray(t))for(var a=0;a<t.length;a++)t[a]&&"string"!==typeof t[a]&&Ke(t[a],e+"_"+a,n);else Ke(t,e,n)}function Ke(t,e,n){t.isStatic=!0,t.key=e,t.isOnce=n}function Xe(t,e){if(e)if(h(e)){var n=t.on=t.on?L({},t.on):{};for(var a in e){var r=n[a],i=e[a];n[a]=r?[].concat(r,i):i}}else;return t}function Je(t,e,n,a){e=e||{$stable:!n};for(var r=0;r<t.length;r++){var i=t[r];Array.isArray(i)?Je(i,e,n):i&&(i.proxy&&(i.fn.proxy=!0),e[i.key]=i.fn)}return a&&(e.$key=a),e}function Ye(t,e){for(var n=0;n<e.length;n+=2){var a=e[n];"string"===typeof a&&a&&(t[e[n]]=e[n+1])}return t}function Qe(t,e){return"string"===typeof t?e+t:t}function Ze(t){t._o=qe,t._n=m,t._s=v,t._l=xe,t._t=je,t._q=_,t._i=D,t._m=Ge,t._f=Ne,t._k=$e,t._b=Ue,t._v=Vt,t._e=Mt,t._u=Je,t._g=Xe,t._d=Ye,t._p=Qe}function tn(t,e,n,r,i){var s,l=this,c=i.options;w(r,"_uid")?(s=Object.create(r),s._original=r):(s=r,r=r._original);var u=o(c._compiled),h=!u;this.data=t,this.props=e,this.children=n,this.parent=r,this.listeners=t.on||a,this.injections=Le(c.inject,r),this.slots=function(){return l.$slots||Fe(t.scopedSlots,l.$slots=ke(n,r)),l.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return Fe(t.scopedSlots,this.slots())}}),u&&(this.$options=c,this.$slots=this.slots(),this.$scopedSlots=Fe(t.scopedSlots,this.$slots)),c._scopeId?this._c=function(t,e,n,a){var i=pn(s,t,e,n,a,h);return i&&!Array.isArray(i)&&(i.fnScopeId=c._scopeId,i.fnContext=r),i}:this._c=function(t,e,n,a){return pn(s,t,e,n,a,h)}}function en(t,e,n,r,o){var s=t.options,l={},c=s.props;if(i(c))for(var u in c)l[u]=Yt(u,c,e||a);else i(n.attrs)&&an(l,n.attrs),i(n.props)&&an(l,n.props);var h=new tn(n,l,o,r,t),d=s.render.call(null,h._c,h);if(d instanceof zt)return nn(d,n,h.parent,s,h);if(Array.isArray(d)){for(var f=Oe(d)||[],p=new Array(f.length),v=0;v<f.length;v++)p[v]=nn(f[v],n,h.parent,s,h);return p}}function nn(t,e,n,a,r){var i=At(t);return i.fnContext=n,i.fnOptions=a,e.slot&&((i.data||(i.data={})).slot=e.slot),i}function an(t,e){for(var n in e)t[A(n)]=e[n]}Ze(tn.prototype);var rn={init:function(t,e){if(t.componentInstance&&!t.componentInstance._isDestroyed&&t.data.keepAlive){var n=t;rn.prepatch(n,n)}else{var a=t.componentInstance=ln(t,Ln);a.$mount(e?t.elm:void 0,e)}},prepatch:function(t,e){var n=e.componentOptions,a=e.componentInstance=t.componentInstance;_n(a,n.propsData,n.listeners,e,n.children)},insert:function(t){var e=t.context,n=t.componentInstance;n._isMounted||(n._isMounted=!0,Nn(n,"mounted")),t.data.keepAlive&&(e._isMounted?ta(n):xn(n,!0))},destroy:function(t){var e=t.componentInstance;e._isDestroyed||(t.data.keepAlive?jn(e,!0):e.$destroy())}},on=Object.keys(rn);function sn(t,e,n,a,s){if(!r(t)){var l=n.$options._base;if(c(t)&&(t=l.extend(t)),"function"===typeof t){var u;if(r(t.cid)&&(u=t,t=An(u,l),void 0===t))return Vn(u,e,n,a,s);e=e||{},Va(t),i(e.model)&&hn(t.options,e);var h=Ae(e,t,s);if(o(t.options.functional))return en(t,h,e,n,a);var d=e.on;if(e.on=e.nativeOn,o(t.options.abstract)){var f=e.slot;e={},f&&(e.slot=f)}cn(e);var p=t.options.name||s,v=new zt("vue-component-"+t.cid+(p?"-"+p:""),e,void 0,void 0,void 0,n,{Ctor:t,propsData:h,listeners:d,tag:s,children:a},u);return v}}}function ln(t,e){var n={_isComponent:!0,_parentVnode:t,parent:e},a=t.data.inlineTemplate;return i(a)&&(n.render=a.render,n.staticRenderFns=a.staticRenderFns),new t.componentOptions.Ctor(n)}function cn(t){for(var e=t.hook||(t.hook={}),n=0;n<on.length;n++){var a=on[n],r=e[a],i=rn[a];r===i||r&&r._merged||(e[a]=r?un(i,r):i)}}function un(t,e){var n=function(n,a){t(n,a),e(n,a)};return n._merged=!0,n}function hn(t,e){var n=t.model&&t.model.prop||"value",a=t.model&&t.model.event||"input";(e.attrs||(e.attrs={}))[n]=e.model.value;var r=e.on||(e.on={}),o=r[a],s=e.model.callback;i(o)?(Array.isArray(o)?-1===o.indexOf(s):o!==s)&&(r[a]=[s].concat(o)):r[a]=s}var dn=1,fn=2;function pn(t,e,n,a,r,i){return(Array.isArray(n)||l(n))&&(r=a,a=n,n=void 0),o(i)&&(r=fn),vn(t,e,n,a,r)}function vn(t,e,n,a,r){if(i(n)&&i(n.__ob__))return Mt();if(i(n)&&i(n.is)&&(e=n.is),!e)return Mt();var o,s,l;(Array.isArray(a)&&"function"===typeof a[0]&&(n=n||{},n.scopedSlots={default:a[0]},a.length=0),r===fn?a=Oe(a):r===dn&&(a=Ce(a)),"string"===typeof e)?(s=t.$vnode&&t.$vnode.ns||$.getTagNamespace(e),o=$.isReservedTag(e)?new zt($.parsePlatformTagName(e),n,a,void 0,void 0,t):n&&n.pre||!i(l=Jt(t.$options,"components",e))?new zt(e,n,a,void 0,void 0,t):sn(l,n,t,a,e)):o=sn(e,n,t,a);return Array.isArray(o)?o:i(o)?(i(s)&&mn(o,s),i(n)&&gn(n),o):Mt()}function mn(t,e,n){if(t.ns=e,"foreignObject"===t.tag&&(e=void 0,n=!0),i(t.children))for(var a=0,s=t.children.length;a<s;a++){var l=t.children[a];i(l.tag)&&(r(l.ns)||o(n)&&"svg"!==l.tag)&&mn(l,e,n)}}function gn(t){c(t.style)&&be(t.style),c(t.class)&&be(t.class)}function bn(t){t._vnode=null,t._staticTrees=null;var e=t.$options,n=t.$vnode=e._parentVnode,r=n&&n.context;t.$slots=ke(e._renderChildren,r),t.$scopedSlots=a,t._c=function(e,n,a,r){return pn(t,e,n,a,r,!1)},t.$createElement=function(e,n,a,r){return pn(t,e,n,a,r,!0)};var i=n&&n.data;Pt(t,"$attrs",i&&i.attrs||a,null,!0),Pt(t,"$listeners",e._parentListeners||a,null,!0)}var yn,zn=null;function wn(t){Ze(t.prototype),t.prototype.$nextTick=function(t){return me(t,this)},t.prototype._render=function(){var t,e=this,n=e.$options,a=n.render,r=n._parentVnode;r&&(e.$scopedSlots=Fe(r.data.scopedSlots,e.$slots,e.$scopedSlots)),e.$vnode=r;try{zn=e,t=a.call(e._renderProxy,e.$createElement)}catch(Ho){ae(Ho,e,"render"),t=e._vnode}finally{zn=null}return Array.isArray(t)&&1===t.length&&(t=t[0]),t instanceof zt||(t=Mt()),t.parent=r,t}}function Mn(t,e){return(t.__esModule||ft&&"Module"===t[Symbol.toStringTag])&&(t=t.default),c(t)?e.extend(t):t}function Vn(t,e,n,a,r){var i=Mt();return i.asyncFactory=t,i.asyncMeta={data:e,context:n,children:a,tag:r},i}function An(t,e){if(o(t.error)&&i(t.errorComp))return t.errorComp;if(i(t.resolved))return t.resolved;var n=zn;if(n&&i(t.owners)&&-1===t.owners.indexOf(n)&&t.owners.push(n),o(t.loading)&&i(t.loadingComp))return t.loadingComp;if(n&&!i(t.owners)){var a=t.owners=[n],s=!0,l=null,u=null;n.$on("hook:destroyed",(function(){return y(a,n)}));var h=function(t){for(var e=0,n=a.length;e<n;e++)a[e].$forceUpdate();t&&(a.length=0,null!==l&&(clearTimeout(l),l=null),null!==u&&(clearTimeout(u),u=null))},d=x((function(n){t.resolved=Mn(n,e),s?a.length=0:h(!0)})),f=x((function(e){i(t.errorComp)&&(t.error=!0,h(!0))})),v=t(d,f);return c(v)&&(p(v)?r(t.resolved)&&v.then(d,f):p(v.component)&&(v.component.then(d,f),i(v.error)&&(t.errorComp=Mn(v.error,e)),i(v.loading)&&(t.loadingComp=Mn(v.loading,e),0===v.delay?t.loading=!0:l=setTimeout((function(){l=null,r(t.resolved)&&r(t.error)&&(t.loading=!0,h(!1))}),v.delay||200)),i(v.timeout)&&(u=setTimeout((function(){u=null,r(t.resolved)&&f(null)}),v.timeout)))),s=!1,t.loading?t.loadingComp:t.resolved}}function Hn(t){if(Array.isArray(t))for(var e=0;e<t.length;e++){var n=t[e];if(i(n)&&(i(n.componentOptions)||Pe(n)))return n}}function Cn(t){t._events=Object.create(null),t._hasHookEvent=!1;var e=t.$options._parentListeners;e&&Bn(t,e)}function On(t,e){yn.$on(t,e)}function In(t,e){yn.$off(t,e)}function Sn(t,e){var n=yn;return function a(){var r=e.apply(null,arguments);null!==r&&n.$off(t,a)}}function Bn(t,e,n){yn=t,Me(e,n||{},On,In,Sn,t),yn=void 0}function Tn(t){var e=/^hook:/;t.prototype.$on=function(t,n){var a=this;if(Array.isArray(t))for(var r=0,i=t.length;r<i;r++)a.$on(t[r],n);else(a._events[t]||(a._events[t]=[])).push(n),e.test(t)&&(a._hasHookEvent=!0);return a},t.prototype.$once=function(t,e){var n=this;function a(){n.$off(t,a),e.apply(n,arguments)}return a.fn=e,n.$on(t,a),n},t.prototype.$off=function(t,e){var n=this;if(!arguments.length)return n._events=Object.create(null),n;if(Array.isArray(t)){for(var a=0,r=t.length;a<r;a++)n.$off(t[a],e);return n}var i,o=n._events[t];if(!o)return n;if(!e)return n._events[t]=null,n;var s=o.length;while(s--)if(i=o[s],i===e||i.fn===e){o.splice(s,1);break}return n},t.prototype.$emit=function(t){var e=this,n=e._events[t];if(n){n=n.length>1?T(n):n;for(var a=T(arguments,1),r='event handler for "'+t+'"',i=0,o=n.length;i<o;i++)re(n[i],e,a,e,r)}return e}}var Ln=null;function kn(t){var e=Ln;return Ln=t,function(){Ln=e}}function En(t){var e=t.$options,n=e.parent;if(n&&!e.abstract){while(n.$options.abstract&&n.$parent)n=n.$parent;n.$children.push(t)}t.$parent=n,t.$root=n?n.$root:t,t.$children=[],t.$refs={},t._watcher=null,t._inactive=null,t._directInactive=!1,t._isMounted=!1,t._isDestroyed=!1,t._isBeingDestroyed=!1}function Pn(t){t.prototype._update=function(t,e){var n=this,a=n.$el,r=n._vnode,i=kn(n);n._vnode=t,n.$el=r?n.__patch__(r,t):n.__patch__(n.$el,t,e,!1),i(),a&&(a.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},t.prototype.$forceUpdate=function(){var t=this;t._watcher&&t._watcher.update()},t.prototype.$destroy=function(){var t=this;if(!t._isBeingDestroyed){Nn(t,"beforeDestroy"),t._isBeingDestroyed=!0;var e=t.$parent;!e||e._isBeingDestroyed||t.$options.abstract||y(e.$children,t),t._watcher&&t._watcher.teardown();var n=t._watchers.length;while(n--)t._watchers[n].teardown();t._data.__ob__&&t._data.__ob__.vmCount--,t._isDestroyed=!0,t.__patch__(t._vnode,null),Nn(t,"destroyed"),t.$off(),t.$el&&(t.$el.__vue__=null),t.$vnode&&(t.$vnode.parent=null)}}}function Fn(t,e,n){var a;return t.$el=e,t.$options.render||(t.$options.render=Mt),Nn(t,"beforeMount"),a=function(){t._update(t._render(),n)},new ra(t,a,E,{before:function(){t._isMounted&&!t._isDestroyed&&Nn(t,"beforeUpdate")}},!0),n=!1,null==t.$vnode&&(t._isMounted=!0,Nn(t,"mounted")),t}function _n(t,e,n,r,i){var o=r.data.scopedSlots,s=t.$scopedSlots,l=!!(o&&!o.$stable||s!==a&&!s.$stable||o&&t.$scopedSlots.$key!==o.$key||!o&&t.$scopedSlots.$key),c=!!(i||t.$options._renderChildren||l);if(t.$options._parentVnode=r,t.$vnode=r,t._vnode&&(t._vnode.parent=r),t.$options._renderChildren=i,t.$attrs=r.data.attrs||a,t.$listeners=n||a,e&&t.$options.props){Bt(!1);for(var u=t._props,h=t.$options._propKeys||[],d=0;d<h.length;d++){var f=h[d],p=t.$options.props;u[f]=Yt(f,p,e,t)}Bt(!0),t.$options.propsData=e}n=n||a;var v=t.$options._parentListeners;t.$options._parentListeners=n,Bn(t,n,v),c&&(t.$slots=ke(i,r.context),t.$forceUpdate())}function Dn(t){while(t&&(t=t.$parent))if(t._inactive)return!0;return!1}function xn(t,e){if(e){if(t._directInactive=!1,Dn(t))return}else if(t._directInactive)return;if(t._inactive||null===t._inactive){t._inactive=!1;for(var n=0;n<t.$children.length;n++)xn(t.$children[n]);Nn(t,"activated")}}function jn(t,e){if((!e||(t._directInactive=!0,!Dn(t)))&&!t._inactive){t._inactive=!0;for(var n=0;n<t.$children.length;n++)jn(t.$children[n]);Nn(t,"deactivated")}}function Nn(t,e){bt();var n=t.$options[e],a=e+" hook";if(n)for(var r=0,i=n.length;r<i;r++)re(n[r],t,null,t,a);t._hasHookEvent&&t.$emit("hook:"+e),yt()}var Rn=[],$n=[],Un={},Gn=!1,qn=!1,Wn=0;function Kn(){Wn=Rn.length=$n.length=0,Un={},Gn=qn=!1}var Xn=0,Jn=Date.now;if(Y&&!et){var Yn=window.performance;Yn&&"function"===typeof Yn.now&&Jn()>document.createEvent("Event").timeStamp&&(Jn=function(){return Yn.now()})}function Qn(){var t,e;for(Xn=Jn(),qn=!0,Rn.sort((function(t,e){return t.id-e.id})),Wn=0;Wn<Rn.length;Wn++)t=Rn[Wn],t.before&&t.before(),e=t.id,Un[e]=null,t.run();var n=$n.slice(),a=Rn.slice();Kn(),ea(n),Zn(a),ut&&$.devtools&&ut.emit("flush")}function Zn(t){var e=t.length;while(e--){var n=t[e],a=n.vm;a._watcher===n&&a._isMounted&&!a._isDestroyed&&Nn(a,"updated")}}function ta(t){t._inactive=!1,$n.push(t)}function ea(t){for(var e=0;e<t.length;e++)t[e]._inactive=!0,xn(t[e],!0)}function na(t){var e=t.id;if(null==Un[e]){if(Un[e]=!0,qn){var n=Rn.length-1;while(n>Wn&&Rn[n].id>t.id)n--;Rn.splice(n+1,0,t)}else Rn.push(t);Gn||(Gn=!0,me(Qn))}}var aa=0,ra=function(t,e,n,a,r){this.vm=t,r&&(t._watcher=this),t._watchers.push(this),a?(this.deep=!!a.deep,this.user=!!a.user,this.lazy=!!a.lazy,this.sync=!!a.sync,this.before=a.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++aa,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new dt,this.newDepIds=new dt,this.expression="","function"===typeof e?this.getter=e:(this.getter=K(e),this.getter||(this.getter=E)),this.value=this.lazy?void 0:this.get()};ra.prototype.get=function(){var t;bt(this);var e=this.vm;try{t=this.getter.call(e,e)}catch(Ho){if(!this.user)throw Ho;ae(Ho,e,'getter for watcher "'+this.expression+'"')}finally{this.deep&&be(t),yt(),this.cleanupDeps()}return t},ra.prototype.addDep=function(t){var e=t.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(t),this.depIds.has(e)||t.addSub(this))},ra.prototype.cleanupDeps=function(){var t=this.deps.length;while(t--){var e=this.deps[t];this.newDepIds.has(e.id)||e.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},ra.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():na(this)},ra.prototype.run=function(){if(this.active){var t=this.get();if(t!==this.value||c(t)||this.deep){var e=this.value;if(this.value=t,this.user){var n='callback for watcher "'+this.expression+'"';re(this.cb,this.vm,[t,e],this.vm,n)}else this.cb.call(this.vm,t,e)}}},ra.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},ra.prototype.depend=function(){var t=this.deps.length;while(t--)this.deps[t].depend()},ra.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||y(this.vm._watchers,this);var t=this.deps.length;while(t--)this.deps[t].removeSub(this);this.active=!1}};var ia={enumerable:!0,configurable:!0,get:E,set:E};function oa(t,e,n){ia.get=function(){return this[e][n]},ia.set=function(t){this[e][n]=t},Object.defineProperty(t,n,ia)}function sa(t){t._watchers=[];var e=t.$options;e.props&&la(t,e.props),e.methods&&ma(t,e.methods),e.data?ca(t):Et(t._data={},!0),e.computed&&da(t,e.computed),e.watch&&e.watch!==ot&&ga(t,e.watch)}function la(t,e){var n=t.$options.propsData||{},a=t._props={},r=t.$options._propKeys=[],i=!t.$parent;i||Bt(!1);var o=function(i){r.push(i);var o=Yt(i,e,n,t);Pt(a,i,o),i in t||oa(t,"_props",i)};for(var s in e)o(s);Bt(!0)}function ca(t){var e=t.$options.data;e=t._data="function"===typeof e?ua(e,t):e||{},h(e)||(e={});var n=Object.keys(e),a=t.$options.props,r=(t.$options.methods,n.length);while(r--){var i=n[r];0,a&&w(a,i)||G(i)||oa(t,"_data",i)}Et(e,!0)}function ua(t,e){bt();try{return t.call(e,e)}catch(Ho){return ae(Ho,e,"data()"),{}}finally{yt()}}var ha={lazy:!0};function da(t,e){var n=t._computedWatchers=Object.create(null),a=ct();for(var r in e){var i=e[r],o="function"===typeof i?i:i.get;0,a||(n[r]=new ra(t,o||E,E,ha)),r in t||fa(t,r,i)}}function fa(t,e,n){var a=!ct();"function"===typeof n?(ia.get=a?pa(e):va(n),ia.set=E):(ia.get=n.get?a&&!1!==n.cache?pa(e):va(n.get):E,ia.set=n.set||E),Object.defineProperty(t,e,ia)}function pa(t){return function(){var e=this._computedWatchers&&this._computedWatchers[t];if(e)return e.dirty&&e.evaluate(),mt.target&&e.depend(),e.value}}function va(t){return function(){return t.call(this,this)}}function ma(t,e){t.$options.props;for(var n in e)t[n]="function"!==typeof e[n]?E:B(e[n],t)}function ga(t,e){for(var n in e){var a=e[n];if(Array.isArray(a))for(var r=0;r<a.length;r++)ba(t,n,a[r]);else ba(t,n,a)}}function ba(t,e,n,a){return h(n)&&(a=n,n=n.handler),"string"===typeof n&&(n=t[n]),t.$watch(e,n,a)}function ya(t){var e={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(t.prototype,"$data",e),Object.defineProperty(t.prototype,"$props",n),t.prototype.$set=Ft,t.prototype.$delete=_t,t.prototype.$watch=function(t,e,n){var a=this;if(h(e))return ba(a,t,e,n);n=n||{},n.user=!0;var r=new ra(a,t,e,n);if(n.immediate){var i='callback for immediate watcher "'+r.expression+'"';bt(),re(e,a,[r.value],a,i),yt()}return function(){r.teardown()}}}var za=0;function wa(t){t.prototype._init=function(t){var e=this;e._uid=za++,e._isVue=!0,t&&t._isComponent?Ma(e,t):e.$options=Xt(Va(e.constructor),t||{},e),e._renderProxy=e,e._self=e,En(e),Cn(e),bn(e),Nn(e,"beforeCreate"),Te(e),sa(e),Be(e),Nn(e,"created"),e.$options.el&&e.$mount(e.$options.el)}}function Ma(t,e){var n=t.$options=Object.create(t.constructor.options),a=e._parentVnode;n.parent=e.parent,n._parentVnode=a;var r=a.componentOptions;n.propsData=r.propsData,n._parentListeners=r.listeners,n._renderChildren=r.children,n._componentTag=r.tag,e.render&&(n.render=e.render,n.staticRenderFns=e.staticRenderFns)}function Va(t){var e=t.options;if(t.super){var n=Va(t.super),a=t.superOptions;if(n!==a){t.superOptions=n;var r=Aa(t);r&&L(t.extendOptions,r),e=t.options=Xt(n,t.extendOptions),e.name&&(e.components[e.name]=t)}}return e}function Aa(t){var e,n=t.options,a=t.sealedOptions;for(var r in n)n[r]!==a[r]&&(e||(e={}),e[r]=n[r]);return e}function Ha(t){this._init(t)}function Ca(t){t.use=function(t){var e=this._installedPlugins||(this._installedPlugins=[]);if(e.indexOf(t)>-1)return this;var n=T(arguments,1);return n.unshift(this),"function"===typeof t.install?t.install.apply(t,n):"function"===typeof t&&t.apply(null,n),e.push(t),this}}function Oa(t){t.mixin=function(t){return this.options=Xt(this.options,t),this}}function Ia(t){t.cid=0;var e=1;t.extend=function(t){t=t||{};var n=this,a=n.cid,r=t._Ctor||(t._Ctor={});if(r[a])return r[a];var i=t.name||n.options.name;var o=function(t){this._init(t)};return o.prototype=Object.create(n.prototype),o.prototype.constructor=o,o.cid=e++,o.options=Xt(n.options,t),o["super"]=n,o.options.props&&Sa(o),o.options.computed&&Ba(o),o.extend=n.extend,o.mixin=n.mixin,o.use=n.use,N.forEach((function(t){o[t]=n[t]})),i&&(o.options.components[i]=o),o.superOptions=n.options,o.extendOptions=t,o.sealedOptions=L({},o.options),r[a]=o,o}}function Sa(t){var e=t.options.props;for(var n in e)oa(t.prototype,"_props",n)}function Ba(t){var e=t.options.computed;for(var n in e)fa(t.prototype,n,e[n])}function Ta(t){N.forEach((function(e){t[e]=function(t,n){return n?("component"===e&&h(n)&&(n.name=n.name||t,n=this.options._base.extend(n)),"directive"===e&&"function"===typeof n&&(n={bind:n,update:n}),this.options[e+"s"][t]=n,n):this.options[e+"s"][t]}}))}function La(t){return t&&(t.Ctor.options.name||t.tag)}function ka(t,e){return Array.isArray(t)?t.indexOf(e)>-1:"string"===typeof t?t.split(",").indexOf(e)>-1:!!d(t)&&t.test(e)}function Ea(t,e){var n=t.cache,a=t.keys,r=t._vnode;for(var i in n){var o=n[i];if(o){var s=o.name;s&&!e(s)&&Pa(n,i,a,r)}}}function Pa(t,e,n,a){var r=t[e];!r||a&&r.tag===a.tag||r.componentInstance.$destroy(),t[e]=null,y(n,e)}wa(Ha),ya(Ha),Tn(Ha),Pn(Ha),wn(Ha);var Fa=[String,RegExp,Array],_a={name:"keep-alive",abstract:!0,props:{include:Fa,exclude:Fa,max:[String,Number]},methods:{cacheVNode:function(){var t=this,e=t.cache,n=t.keys,a=t.vnodeToCache,r=t.keyToCache;if(a){var i=a.tag,o=a.componentInstance,s=a.componentOptions;e[r]={name:La(s),tag:i,componentInstance:o},n.push(r),this.max&&n.length>parseInt(this.max)&&Pa(e,n[0],n,this._vnode),this.vnodeToCache=null}}},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var t in this.cache)Pa(this.cache,t,this.keys)},mounted:function(){var t=this;this.cacheVNode(),this.$watch("include",(function(e){Ea(t,(function(t){return ka(e,t)}))})),this.$watch("exclude",(function(e){Ea(t,(function(t){return!ka(e,t)}))}))},updated:function(){this.cacheVNode()},render:function(){var t=this.$slots.default,e=Hn(t),n=e&&e.componentOptions;if(n){var a=La(n),r=this,i=r.include,o=r.exclude;if(i&&(!a||!ka(i,a))||o&&a&&ka(o,a))return e;var s=this,l=s.cache,c=s.keys,u=null==e.key?n.Ctor.cid+(n.tag?"::"+n.tag:""):e.key;l[u]?(e.componentInstance=l[u].componentInstance,y(c,u),c.push(u)):(this.vnodeToCache=e,this.keyToCache=u),e.data.keepAlive=!0}return e||t&&t[0]}},Da={KeepAlive:_a};function xa(t){var e={get:function(){return $}};Object.defineProperty(t,"config",e),t.util={warn:pt,extend:L,mergeOptions:Xt,defineReactive:Pt},t.set=Ft,t.delete=_t,t.nextTick=me,t.observable=function(t){return Et(t),t},t.options=Object.create(null),N.forEach((function(e){t.options[e+"s"]=Object.create(null)})),t.options._base=t,L(t.options.components,Da),Ca(t),Oa(t),Ia(t),Ta(t)}xa(Ha),Object.defineProperty(Ha.prototype,"$isServer",{get:ct}),Object.defineProperty(Ha.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(Ha,"FunctionalRenderContext",{value:tn}),Ha.version="2.6.14";var ja=g("style,class"),Na=g("input,textarea,option,select,progress"),Ra=function(t,e,n){return"value"===n&&Na(t)&&"button"!==e||"selected"===n&&"option"===t||"checked"===n&&"input"===t||"muted"===n&&"video"===t},$a=g("contenteditable,draggable,spellcheck"),Ua=g("events,caret,typing,plaintext-only"),Ga=function(t,e){return Ja(e)||"false"===e?"false":"contenteditable"===t&&Ua(e)?e:"true"},qa=g("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,truespeed,typemustmatch,visible"),Wa="http://www.w3.org/1999/xlink",Ka=function(t){return":"===t.charAt(5)&&"xlink"===t.slice(0,5)},Xa=function(t){return Ka(t)?t.slice(6,t.length):""},Ja=function(t){return null==t||!1===t};function Ya(t){var e=t.data,n=t,a=t;while(i(a.componentInstance))a=a.componentInstance._vnode,a&&a.data&&(e=Qa(a.data,e));while(i(n=n.parent))n&&n.data&&(e=Qa(e,n.data));return Za(e.staticClass,e.class)}function Qa(t,e){return{staticClass:tr(t.staticClass,e.staticClass),class:i(t.class)?[t.class,e.class]:e.class}}function Za(t,e){return i(t)||i(e)?tr(t,er(e)):""}function tr(t,e){return t?e?t+" "+e:t:e||""}function er(t){return Array.isArray(t)?nr(t):c(t)?ar(t):"string"===typeof t?t:""}function nr(t){for(var e,n="",a=0,r=t.length;a<r;a++)i(e=er(t[a]))&&""!==e&&(n&&(n+=" "),n+=e);return n}function ar(t){var e="";for(var n in t)t[n]&&(e&&(e+=" "),e+=n);return e}var rr={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},ir=g("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),or=g("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",!0),sr=function(t){return ir(t)||or(t)};function lr(t){return or(t)?"svg":"math"===t?"math":void 0}var cr=Object.create(null);function ur(t){if(!Y)return!0;if(sr(t))return!1;if(t=t.toLowerCase(),null!=cr[t])return cr[t];var e=document.createElement(t);return t.indexOf("-")>-1?cr[t]=e.constructor===window.HTMLUnknownElement||e.constructor===window.HTMLElement:cr[t]=/HTMLUnknownElement/.test(e.toString())}var hr=g("text,number,password,search,email,tel,url");function dr(t){if("string"===typeof t){var e=document.querySelector(t);return e||document.createElement("div")}return t}function fr(t,e){var n=document.createElement(t);return"select"!==t||e.data&&e.data.attrs&&void 0!==e.data.attrs.multiple&&n.setAttribute("multiple","multiple"),n}function pr(t,e){return document.createElementNS(rr[t],e)}function vr(t){return document.createTextNode(t)}function mr(t){return document.createComment(t)}function gr(t,e,n){t.insertBefore(e,n)}function br(t,e){t.removeChild(e)}function yr(t,e){t.appendChild(e)}function zr(t){return t.parentNode}function wr(t){return t.nextSibling}function Mr(t){return t.tagName}function Vr(t,e){t.textContent=e}function Ar(t,e){t.setAttribute(e,"")}var Hr=Object.freeze({createElement:fr,createElementNS:pr,createTextNode:vr,createComment:mr,insertBefore:gr,removeChild:br,appendChild:yr,parentNode:zr,nextSibling:wr,tagName:Mr,setTextContent:Vr,setStyleScope:Ar}),Cr={create:function(t,e){Or(e)},update:function(t,e){t.data.ref!==e.data.ref&&(Or(t,!0),Or(e))},destroy:function(t){Or(t,!0)}};function Or(t,e){var n=t.data.ref;if(i(n)){var a=t.context,r=t.componentInstance||t.elm,o=a.$refs;e?Array.isArray(o[n])?y(o[n],r):o[n]===r&&(o[n]=void 0):t.data.refInFor?Array.isArray(o[n])?o[n].indexOf(r)<0&&o[n].push(r):o[n]=[r]:o[n]=r}}var Ir=new zt("",{},[]),Sr=["create","activate","update","remove","destroy"];function Br(t,e){return t.key===e.key&&t.asyncFactory===e.asyncFactory&&(t.tag===e.tag&&t.isComment===e.isComment&&i(t.data)===i(e.data)&&Tr(t,e)||o(t.isAsyncPlaceholder)&&r(e.asyncFactory.error))}function Tr(t,e){if("input"!==t.tag)return!0;var n,a=i(n=t.data)&&i(n=n.attrs)&&n.type,r=i(n=e.data)&&i(n=n.attrs)&&n.type;return a===r||hr(a)&&hr(r)}function Lr(t,e,n){var a,r,o={};for(a=e;a<=n;++a)r=t[a].key,i(r)&&(o[r]=a);return o}function kr(t){var e,n,a={},s=t.modules,c=t.nodeOps;for(e=0;e<Sr.length;++e)for(a[Sr[e]]=[],n=0;n<s.length;++n)i(s[n][Sr[e]])&&a[Sr[e]].push(s[n][Sr[e]]);function u(t){return new zt(c.tagName(t).toLowerCase(),{},[],void 0,t)}function h(t,e){function n(){0===--n.listeners&&d(t)}return n.listeners=e,n}function d(t){var e=c.parentNode(t);i(e)&&c.removeChild(e,t)}function f(t,e,n,a,r,s,l){if(i(t.elm)&&i(s)&&(t=s[l]=At(t)),t.isRootInsert=!r,!p(t,e,n,a)){var u=t.data,h=t.children,d=t.tag;i(d)?(t.elm=t.ns?c.createElementNS(t.ns,d):c.createElement(d,t),M(t),y(t,h,e),i(u)&&w(t,e),b(n,t.elm,a)):o(t.isComment)?(t.elm=c.createComment(t.text),b(n,t.elm,a)):(t.elm=c.createTextNode(t.text),b(n,t.elm,a))}}function p(t,e,n,a){var r=t.data;if(i(r)){var s=i(t.componentInstance)&&r.keepAlive;if(i(r=r.hook)&&i(r=r.init)&&r(t,!1),i(t.componentInstance))return v(t,e),b(n,t.elm,a),o(s)&&m(t,e,n,a),!0}}function v(t,e){i(t.data.pendingInsert)&&(e.push.apply(e,t.data.pendingInsert),t.data.pendingInsert=null),t.elm=t.componentInstance.$el,z(t)?(w(t,e),M(t)):(Or(t),e.push(t))}function m(t,e,n,r){var o,s=t;while(s.componentInstance)if(s=s.componentInstance._vnode,i(o=s.data)&&i(o=o.transition)){for(o=0;o<a.activate.length;++o)a.activate[o](Ir,s);e.push(s);break}b(n,t.elm,r)}function b(t,e,n){i(t)&&(i(n)?c.parentNode(n)===t&&c.insertBefore(t,e,n):c.appendChild(t,e))}function y(t,e,n){if(Array.isArray(e)){0;for(var a=0;a<e.length;++a)f(e[a],n,t.elm,null,!0,e,a)}else l(t.text)&&c.appendChild(t.elm,c.createTextNode(String(t.text)))}function z(t){while(t.componentInstance)t=t.componentInstance._vnode;return i(t.tag)}function w(t,n){for(var r=0;r<a.create.length;++r)a.create[r](Ir,t);e=t.data.hook,i(e)&&(i(e.create)&&e.create(Ir,t),i(e.insert)&&n.push(t))}function M(t){var e;if(i(e=t.fnScopeId))c.setStyleScope(t.elm,e);else{var n=t;while(n)i(e=n.context)&&i(e=e.$options._scopeId)&&c.setStyleScope(t.elm,e),n=n.parent}i(e=Ln)&&e!==t.context&&e!==t.fnContext&&i(e=e.$options._scopeId)&&c.setStyleScope(t.elm,e)}function V(t,e,n,a,r,i){for(;a<=r;++a)f(n[a],i,t,e,!1,n,a)}function A(t){var e,n,r=t.data;if(i(r))for(i(e=r.hook)&&i(e=e.destroy)&&e(t),e=0;e<a.destroy.length;++e)a.destroy[e](t);if(i(e=t.children))for(n=0;n<t.children.length;++n)A(t.children[n])}function H(t,e,n){for(;e<=n;++e){var a=t[e];i(a)&&(i(a.tag)?(C(a),A(a)):d(a.elm))}}function C(t,e){if(i(e)||i(t.data)){var n,r=a.remove.length+1;for(i(e)?e.listeners+=r:e=h(t.elm,r),i(n=t.componentInstance)&&i(n=n._vnode)&&i(n.data)&&C(n,e),n=0;n<a.remove.length;++n)a.remove[n](t,e);i(n=t.data.hook)&&i(n=n.remove)?n(t,e):e()}else d(t.elm)}function O(t,e,n,a,o){var s,l,u,h,d=0,p=0,v=e.length-1,m=e[0],g=e[v],b=n.length-1,y=n[0],z=n[b],w=!o;while(d<=v&&p<=b)r(m)?m=e[++d]:r(g)?g=e[--v]:Br(m,y)?(S(m,y,a,n,p),m=e[++d],y=n[++p]):Br(g,z)?(S(g,z,a,n,b),g=e[--v],z=n[--b]):Br(m,z)?(S(m,z,a,n,b),w&&c.insertBefore(t,m.elm,c.nextSibling(g.elm)),m=e[++d],z=n[--b]):Br(g,y)?(S(g,y,a,n,p),w&&c.insertBefore(t,g.elm,m.elm),g=e[--v],y=n[++p]):(r(s)&&(s=Lr(e,d,v)),l=i(y.key)?s[y.key]:I(y,e,d,v),r(l)?f(y,a,t,m.elm,!1,n,p):(u=e[l],Br(u,y)?(S(u,y,a,n,p),e[l]=void 0,w&&c.insertBefore(t,u.elm,m.elm)):f(y,a,t,m.elm,!1,n,p)),y=n[++p]);d>v?(h=r(n[b+1])?null:n[b+1].elm,V(t,h,n,p,b,a)):p>b&&H(e,d,v)}function I(t,e,n,a){for(var r=n;r<a;r++){var o=e[r];if(i(o)&&Br(t,o))return r}}function S(t,e,n,s,l,u){if(t!==e){i(e.elm)&&i(s)&&(e=s[l]=At(e));var h=e.elm=t.elm;if(o(t.isAsyncPlaceholder))i(e.asyncFactory.resolved)?L(t.elm,e,n):e.isAsyncPlaceholder=!0;else if(o(e.isStatic)&&o(t.isStatic)&&e.key===t.key&&(o(e.isCloned)||o(e.isOnce)))e.componentInstance=t.componentInstance;else{var d,f=e.data;i(f)&&i(d=f.hook)&&i(d=d.prepatch)&&d(t,e);var p=t.children,v=e.children;if(i(f)&&z(e)){for(d=0;d<a.update.length;++d)a.update[d](t,e);i(d=f.hook)&&i(d=d.update)&&d(t,e)}r(e.text)?i(p)&&i(v)?p!==v&&O(h,p,v,n,u):i(v)?(i(t.text)&&c.setTextContent(h,""),V(h,null,v,0,v.length-1,n)):i(p)?H(p,0,p.length-1):i(t.text)&&c.setTextContent(h,""):t.text!==e.text&&c.setTextContent(h,e.text),i(f)&&i(d=f.hook)&&i(d=d.postpatch)&&d(t,e)}}}function B(t,e,n){if(o(n)&&i(t.parent))t.parent.data.pendingInsert=e;else for(var a=0;a<e.length;++a)e[a].data.hook.insert(e[a])}var T=g("attrs,class,staticClass,staticStyle,key");function L(t,e,n,a){var r,s=e.tag,l=e.data,c=e.children;if(a=a||l&&l.pre,e.elm=t,o(e.isComment)&&i(e.asyncFactory))return e.isAsyncPlaceholder=!0,!0;if(i(l)&&(i(r=l.hook)&&i(r=r.init)&&r(e,!0),i(r=e.componentInstance)))return v(e,n),!0;if(i(s)){if(i(c))if(t.hasChildNodes())if(i(r=l)&&i(r=r.domProps)&&i(r=r.innerHTML)){if(r!==t.innerHTML)return!1}else{for(var u=!0,h=t.firstChild,d=0;d<c.length;d++){if(!h||!L(h,c[d],n,a)){u=!1;break}h=h.nextSibling}if(!u||h)return!1}else y(e,c,n);if(i(l)){var f=!1;for(var p in l)if(!T(p)){f=!0,w(e,n);break}!f&&l["class"]&&be(l["class"])}}else t.data!==e.text&&(t.data=e.text);return!0}return function(t,e,n,s){if(!r(e)){var l=!1,h=[];if(r(t))l=!0,f(e,h);else{var d=i(t.nodeType);if(!d&&Br(t,e))S(t,e,h,null,null,s);else{if(d){if(1===t.nodeType&&t.hasAttribute(j)&&(t.removeAttribute(j),n=!0),o(n)&&L(t,e,h))return B(e,h,!0),t;t=u(t)}var p=t.elm,v=c.parentNode(p);if(f(e,h,p._leaveCb?null:v,c.nextSibling(p)),i(e.parent)){var m=e.parent,g=z(e);while(m){for(var b=0;b<a.destroy.length;++b)a.destroy[b](m);if(m.elm=e.elm,g){for(var y=0;y<a.create.length;++y)a.create[y](Ir,m);var w=m.data.hook.insert;if(w.merged)for(var M=1;M<w.fns.length;M++)w.fns[M]()}else Or(m);m=m.parent}}i(v)?H([t],0,0):i(t.tag)&&A(t)}}return B(e,h,l),e.elm}i(t)&&A(t)}}var Er={create:Pr,update:Pr,destroy:function(t){Pr(t,Ir)}};function Pr(t,e){(t.data.directives||e.data.directives)&&Fr(t,e)}function Fr(t,e){var n,a,r,i=t===Ir,o=e===Ir,s=Dr(t.data.directives,t.context),l=Dr(e.data.directives,e.context),c=[],u=[];for(n in l)a=s[n],r=l[n],a?(r.oldValue=a.value,r.oldArg=a.arg,jr(r,"update",e,t),r.def&&r.def.componentUpdated&&u.push(r)):(jr(r,"bind",e,t),r.def&&r.def.inserted&&c.push(r));if(c.length){var h=function(){for(var n=0;n<c.length;n++)jr(c[n],"inserted",e,t)};i?Ve(e,"insert",h):h()}if(u.length&&Ve(e,"postpatch",(function(){for(var n=0;n<u.length;n++)jr(u[n],"componentUpdated",e,t)})),!i)for(n in s)l[n]||jr(s[n],"unbind",t,t,o)}var _r=Object.create(null);function Dr(t,e){var n,a,r=Object.create(null);if(!t)return r;for(n=0;n<t.length;n++)a=t[n],a.modifiers||(a.modifiers=_r),r[xr(a)]=a,a.def=Jt(e.$options,"directives",a.name,!0);return r}function xr(t){return t.rawName||t.name+"."+Object.keys(t.modifiers||{}).join(".")}function jr(t,e,n,a,r){var i=t.def&&t.def[e];if(i)try{i(n.elm,t,n,a,r)}catch(Ho){ae(Ho,n.context,"directive "+t.name+" "+e+" hook")}}var Nr=[Cr,Er];function Rr(t,e){var n=e.componentOptions;if((!i(n)||!1!==n.Ctor.options.inheritAttrs)&&(!r(t.data.attrs)||!r(e.data.attrs))){var a,o,s,l=e.elm,c=t.data.attrs||{},u=e.data.attrs||{};for(a in i(u.__ob__)&&(u=e.data.attrs=L({},u)),u)o=u[a],s=c[a],s!==o&&$r(l,a,o,e.data.pre);for(a in(et||at)&&u.value!==c.value&&$r(l,"value",u.value),c)r(u[a])&&(Ka(a)?l.removeAttributeNS(Wa,Xa(a)):$a(a)||l.removeAttribute(a))}}function $r(t,e,n,a){a||t.tagName.indexOf("-")>-1?Ur(t,e,n):qa(e)?Ja(n)?t.removeAttribute(e):(n="allowfullscreen"===e&&"EMBED"===t.tagName?"true":e,t.setAttribute(e,n)):$a(e)?t.setAttribute(e,Ga(e,n)):Ka(e)?Ja(n)?t.removeAttributeNS(Wa,Xa(e)):t.setAttributeNS(Wa,e,n):Ur(t,e,n)}function Ur(t,e,n){if(Ja(n))t.removeAttribute(e);else{if(et&&!nt&&"TEXTAREA"===t.tagName&&"placeholder"===e&&""!==n&&!t.__ieph){var a=function(e){e.stopImmediatePropagation(),t.removeEventListener("input",a)};t.addEventListener("input",a),t.__ieph=!0}t.setAttribute(e,n)}}var Gr={create:Rr,update:Rr};function qr(t,e){var n=e.elm,a=e.data,o=t.data;if(!(r(a.staticClass)&&r(a.class)&&(r(o)||r(o.staticClass)&&r(o.class)))){var s=Ya(e),l=n._transitionClasses;i(l)&&(s=tr(s,er(l))),s!==n._prevClass&&(n.setAttribute("class",s),n._prevClass=s)}}var Wr,Kr={create:qr,update:qr},Xr="__r",Jr="__c";function Yr(t){if(i(t[Xr])){var e=et?"change":"input";t[e]=[].concat(t[Xr],t[e]||[]),delete t[Xr]}i(t[Jr])&&(t.change=[].concat(t[Jr],t.change||[]),delete t[Jr])}function Qr(t,e,n){var a=Wr;return function r(){var i=e.apply(null,arguments);null!==i&&ei(t,r,n,a)}}var Zr=le&&!(it&&Number(it[1])<=53);function ti(t,e,n,a){if(Zr){var r=Xn,i=e;e=i._wrapper=function(t){if(t.target===t.currentTarget||t.timeStamp>=r||t.timeStamp<=0||t.target.ownerDocument!==document)return i.apply(this,arguments)}}Wr.addEventListener(t,e,st?{capture:n,passive:a}:n)}function ei(t,e,n,a){(a||Wr).removeEventListener(t,e._wrapper||e,n)}function ni(t,e){if(!r(t.data.on)||!r(e.data.on)){var n=e.data.on||{},a=t.data.on||{};Wr=e.elm,Yr(n),Me(n,a,ti,ei,Qr,e.context),Wr=void 0}}var ai,ri={create:ni,update:ni};function ii(t,e){if(!r(t.data.domProps)||!r(e.data.domProps)){var n,a,o=e.elm,s=t.data.domProps||{},l=e.data.domProps||{};for(n in i(l.__ob__)&&(l=e.data.domProps=L({},l)),s)n in l||(o[n]="");for(n in l){if(a=l[n],"textContent"===n||"innerHTML"===n){if(e.children&&(e.children.length=0),a===s[n])continue;1===o.childNodes.length&&o.removeChild(o.childNodes[0])}if("value"===n&&"PROGRESS"!==o.tagName){o._value=a;var c=r(a)?"":String(a);oi(o,c)&&(o.value=c)}else if("innerHTML"===n&&or(o.tagName)&&r(o.innerHTML)){ai=ai||document.createElement("div"),ai.innerHTML="<svg>"+a+"</svg>";var u=ai.firstChild;while(o.firstChild)o.removeChild(o.firstChild);while(u.firstChild)o.appendChild(u.firstChild)}else if(a!==s[n])try{o[n]=a}catch(Ho){}}}}function oi(t,e){return!t.composing&&("OPTION"===t.tagName||si(t,e)||li(t,e))}function si(t,e){var n=!0;try{n=document.activeElement!==t}catch(Ho){}return n&&t.value!==e}function li(t,e){var n=t.value,a=t._vModifiers;if(i(a)){if(a.number)return m(n)!==m(e);if(a.trim)return n.trim()!==e.trim()}return n!==e}var ci={create:ii,update:ii},ui=M((function(t){var e={},n=/;(?![^(]*\))/g,a=/:(.+)/;return t.split(n).forEach((function(t){if(t){var n=t.split(a);n.length>1&&(e[n[0].trim()]=n[1].trim())}})),e}));function hi(t){var e=di(t.style);return t.staticStyle?L(t.staticStyle,e):e}function di(t){return Array.isArray(t)?k(t):"string"===typeof t?ui(t):t}function fi(t,e){var n,a={};if(e){var r=t;while(r.componentInstance)r=r.componentInstance._vnode,r&&r.data&&(n=hi(r.data))&&L(a,n)}(n=hi(t.data))&&L(a,n);var i=t;while(i=i.parent)i.data&&(n=hi(i.data))&&L(a,n);return a}var pi,vi=/^--/,mi=/\s*!important$/,gi=function(t,e,n){if(vi.test(e))t.style.setProperty(e,n);else if(mi.test(n))t.style.setProperty(O(e),n.replace(mi,""),"important");else{var a=yi(e);if(Array.isArray(n))for(var r=0,i=n.length;r<i;r++)t.style[a]=n[r];else t.style[a]=n}},bi=["Webkit","Moz","ms"],yi=M((function(t){if(pi=pi||document.createElement("div").style,t=A(t),"filter"!==t&&t in pi)return t;for(var e=t.charAt(0).toUpperCase()+t.slice(1),n=0;n<bi.length;n++){var a=bi[n]+e;if(a in pi)return a}}));function zi(t,e){var n=e.data,a=t.data;if(!(r(n.staticStyle)&&r(n.style)&&r(a.staticStyle)&&r(a.style))){var o,s,l=e.elm,c=a.staticStyle,u=a.normalizedStyle||a.style||{},h=c||u,d=di(e.data.style)||{};e.data.normalizedStyle=i(d.__ob__)?L({},d):d;var f=fi(e,!0);for(s in h)r(f[s])&&gi(l,s,"");for(s in f)o=f[s],o!==h[s]&&gi(l,s,null==o?"":o)}}var wi={create:zi,update:zi},Mi=/\s+/;function Vi(t,e){if(e&&(e=e.trim()))if(t.classList)e.indexOf(" ")>-1?e.split(Mi).forEach((function(e){return t.classList.add(e)})):t.classList.add(e);else{var n=" "+(t.getAttribute("class")||"")+" ";n.indexOf(" "+e+" ")<0&&t.setAttribute("class",(n+e).trim())}}function Ai(t,e){if(e&&(e=e.trim()))if(t.classList)e.indexOf(" ")>-1?e.split(Mi).forEach((function(e){return t.classList.remove(e)})):t.classList.remove(e),t.classList.length||t.removeAttribute("class");else{var n=" "+(t.getAttribute("class")||"")+" ",a=" "+e+" ";while(n.indexOf(a)>=0)n=n.replace(a," ");n=n.trim(),n?t.setAttribute("class",n):t.removeAttribute("class")}}function Hi(t){if(t){if("object"===typeof t){var e={};return!1!==t.css&&L(e,Ci(t.name||"v")),L(e,t),e}return"string"===typeof t?Ci(t):void 0}}var Ci=M((function(t){return{enterClass:t+"-enter",enterToClass:t+"-enter-to",enterActiveClass:t+"-enter-active",leaveClass:t+"-leave",leaveToClass:t+"-leave-to",leaveActiveClass:t+"-leave-active"}})),Oi=Y&&!nt,Ii="transition",Si="animation",Bi="transition",Ti="transitionend",Li="animation",ki="animationend";Oi&&(void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend&&(Bi="WebkitTransition",Ti="webkitTransitionEnd"),void 0===window.onanimationend&&void 0!==window.onwebkitanimationend&&(Li="WebkitAnimation",ki="webkitAnimationEnd"));var Ei=Y?window.requestAnimationFrame?window.requestAnimationFrame.bind(window):setTimeout:function(t){return t()};function Pi(t){Ei((function(){Ei(t)}))}function Fi(t,e){var n=t._transitionClasses||(t._transitionClasses=[]);n.indexOf(e)<0&&(n.push(e),Vi(t,e))}function _i(t,e){t._transitionClasses&&y(t._transitionClasses,e),Ai(t,e)}function Di(t,e,n){var a=ji(t,e),r=a.type,i=a.timeout,o=a.propCount;if(!r)return n();var s=r===Ii?Ti:ki,l=0,c=function(){t.removeEventListener(s,u),n()},u=function(e){e.target===t&&++l>=o&&c()};setTimeout((function(){l<o&&c()}),i+1),t.addEventListener(s,u)}var xi=/\b(transform|all)(,|$)/;function ji(t,e){var n,a=window.getComputedStyle(t),r=(a[Bi+"Delay"]||"").split(", "),i=(a[Bi+"Duration"]||"").split(", "),o=Ni(r,i),s=(a[Li+"Delay"]||"").split(", "),l=(a[Li+"Duration"]||"").split(", "),c=Ni(s,l),u=0,h=0;e===Ii?o>0&&(n=Ii,u=o,h=i.length):e===Si?c>0&&(n=Si,u=c,h=l.length):(u=Math.max(o,c),n=u>0?o>c?Ii:Si:null,h=n?n===Ii?i.length:l.length:0);var d=n===Ii&&xi.test(a[Bi+"Property"]);return{type:n,timeout:u,propCount:h,hasTransform:d}}function Ni(t,e){while(t.length<e.length)t=t.concat(t);return Math.max.apply(null,e.map((function(e,n){return Ri(e)+Ri(t[n])})))}function Ri(t){return 1e3*Number(t.slice(0,-1).replace(",","."))}function $i(t,e){var n=t.elm;i(n._leaveCb)&&(n._leaveCb.cancelled=!0,n._leaveCb());var a=Hi(t.data.transition);if(!r(a)&&!i(n._enterCb)&&1===n.nodeType){var o=a.css,s=a.type,l=a.enterClass,u=a.enterToClass,h=a.enterActiveClass,d=a.appearClass,f=a.appearToClass,p=a.appearActiveClass,v=a.beforeEnter,g=a.enter,b=a.afterEnter,y=a.enterCancelled,z=a.beforeAppear,w=a.appear,M=a.afterAppear,V=a.appearCancelled,A=a.duration,H=Ln,C=Ln.$vnode;while(C&&C.parent)H=C.context,C=C.parent;var O=!H._isMounted||!t.isRootInsert;if(!O||w||""===w){var I=O&&d?d:l,S=O&&p?p:h,B=O&&f?f:u,T=O&&z||v,L=O&&"function"===typeof w?w:g,k=O&&M||b,E=O&&V||y,P=m(c(A)?A.enter:A);0;var F=!1!==o&&!nt,_=qi(L),D=n._enterCb=x((function(){F&&(_i(n,B),_i(n,S)),D.cancelled?(F&&_i(n,I),E&&E(n)):k&&k(n),n._enterCb=null}));t.data.show||Ve(t,"insert",(function(){var e=n.parentNode,a=e&&e._pending&&e._pending[t.key];a&&a.tag===t.tag&&a.elm._leaveCb&&a.elm._leaveCb(),L&&L(n,D)})),T&&T(n),F&&(Fi(n,I),Fi(n,S),Pi((function(){_i(n,I),D.cancelled||(Fi(n,B),_||(Gi(P)?setTimeout(D,P):Di(n,s,D)))}))),t.data.show&&(e&&e(),L&&L(n,D)),F||_||D()}}}function Ui(t,e){var n=t.elm;i(n._enterCb)&&(n._enterCb.cancelled=!0,n._enterCb());var a=Hi(t.data.transition);if(r(a)||1!==n.nodeType)return e();if(!i(n._leaveCb)){var o=a.css,s=a.type,l=a.leaveClass,u=a.leaveToClass,h=a.leaveActiveClass,d=a.beforeLeave,f=a.leave,p=a.afterLeave,v=a.leaveCancelled,g=a.delayLeave,b=a.duration,y=!1!==o&&!nt,z=qi(f),w=m(c(b)?b.leave:b);0;var M=n._leaveCb=x((function(){n.parentNode&&n.parentNode._pending&&(n.parentNode._pending[t.key]=null),y&&(_i(n,u),_i(n,h)),M.cancelled?(y&&_i(n,l),v&&v(n)):(e(),p&&p(n)),n._leaveCb=null}));g?g(V):V()}function V(){M.cancelled||(!t.data.show&&n.parentNode&&((n.parentNode._pending||(n.parentNode._pending={}))[t.key]=t),d&&d(n),y&&(Fi(n,l),Fi(n,h),Pi((function(){_i(n,l),M.cancelled||(Fi(n,u),z||(Gi(w)?setTimeout(M,w):Di(n,s,M)))}))),f&&f(n,M),y||z||M())}}function Gi(t){return"number"===typeof t&&!isNaN(t)}function qi(t){if(r(t))return!1;var e=t.fns;return i(e)?qi(Array.isArray(e)?e[0]:e):(t._length||t.length)>1}function Wi(t,e){!0!==e.data.show&&$i(e)}var Ki=Y?{create:Wi,activate:Wi,remove:function(t,e){!0!==t.data.show?Ui(t,e):e()}}:{},Xi=[Gr,Kr,ri,ci,wi,Ki],Ji=Xi.concat(Nr),Yi=kr({nodeOps:Hr,modules:Ji});nt&&document.addEventListener("selectionchange",(function(){var t=document.activeElement;t&&t.vmodel&&io(t,"input")}));var Qi={inserted:function(t,e,n,a){"select"===n.tag?(a.elm&&!a.elm._vOptions?Ve(n,"postpatch",(function(){Qi.componentUpdated(t,e,n)})):Zi(t,e,n.context),t._vOptions=[].map.call(t.options,no)):("textarea"===n.tag||hr(t.type))&&(t._vModifiers=e.modifiers,e.modifiers.lazy||(t.addEventListener("compositionstart",ao),t.addEventListener("compositionend",ro),t.addEventListener("change",ro),nt&&(t.vmodel=!0)))},componentUpdated:function(t,e,n){if("select"===n.tag){Zi(t,e,n.context);var a=t._vOptions,r=t._vOptions=[].map.call(t.options,no);if(r.some((function(t,e){return!_(t,a[e])}))){var i=t.multiple?e.value.some((function(t){return eo(t,r)})):e.value!==e.oldValue&&eo(e.value,r);i&&io(t,"change")}}}};function Zi(t,e,n){to(t,e,n),(et||at)&&setTimeout((function(){to(t,e,n)}),0)}function to(t,e,n){var a=e.value,r=t.multiple;if(!r||Array.isArray(a)){for(var i,o,s=0,l=t.options.length;s<l;s++)if(o=t.options[s],r)i=D(a,no(o))>-1,o.selected!==i&&(o.selected=i);else if(_(no(o),a))return void(t.selectedIndex!==s&&(t.selectedIndex=s));r||(t.selectedIndex=-1)}}function eo(t,e){return e.every((function(e){return!_(e,t)}))}function no(t){return"_value"in t?t._value:t.value}function ao(t){t.target.composing=!0}function ro(t){t.target.composing&&(t.target.composing=!1,io(t.target,"input"))}function io(t,e){var n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}function oo(t){return!t.componentInstance||t.data&&t.data.transition?t:oo(t.componentInstance._vnode)}var so={bind:function(t,e,n){var a=e.value;n=oo(n);var r=n.data&&n.data.transition,i=t.__vOriginalDisplay="none"===t.style.display?"":t.style.display;a&&r?(n.data.show=!0,$i(n,(function(){t.style.display=i}))):t.style.display=a?i:"none"},update:function(t,e,n){var a=e.value,r=e.oldValue;if(!a!==!r){n=oo(n);var i=n.data&&n.data.transition;i?(n.data.show=!0,a?$i(n,(function(){t.style.display=t.__vOriginalDisplay})):Ui(n,(function(){t.style.display="none"}))):t.style.display=a?t.__vOriginalDisplay:"none"}},unbind:function(t,e,n,a,r){r||(t.style.display=t.__vOriginalDisplay)}},lo={model:Qi,show:so},co={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterToClass:String,leaveToClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String,appearToClass:String,duration:[Number,String,Object]};function uo(t){var e=t&&t.componentOptions;return e&&e.Ctor.options.abstract?uo(Hn(e.children)):t}function ho(t){var e={},n=t.$options;for(var a in n.propsData)e[a]=t[a];var r=n._parentListeners;for(var i in r)e[A(i)]=r[i];return e}function fo(t,e){if(/\d-keep-alive$/.test(e.tag))return t("keep-alive",{props:e.componentOptions.propsData})}function po(t){while(t=t.parent)if(t.data.transition)return!0}function vo(t,e){return e.key===t.key&&e.tag===t.tag}var mo=function(t){return t.tag||Pe(t)},go=function(t){return"show"===t.name},bo={name:"transition",props:co,abstract:!0,render:function(t){var e=this,n=this.$slots.default;if(n&&(n=n.filter(mo),n.length)){0;var a=this.mode;0;var r=n[0];if(po(this.$vnode))return r;var i=uo(r);if(!i)return r;if(this._leaving)return fo(t,r);var o="__transition-"+this._uid+"-";i.key=null==i.key?i.isComment?o+"comment":o+i.tag:l(i.key)?0===String(i.key).indexOf(o)?i.key:o+i.key:i.key;var s=(i.data||(i.data={})).transition=ho(this),c=this._vnode,u=uo(c);if(i.data.directives&&i.data.directives.some(go)&&(i.data.show=!0),u&&u.data&&!vo(i,u)&&!Pe(u)&&(!u.componentInstance||!u.componentInstance._vnode.isComment)){var h=u.data.transition=L({},s);if("out-in"===a)return this._leaving=!0,Ve(h,"afterLeave",(function(){e._leaving=!1,e.$forceUpdate()})),fo(t,r);if("in-out"===a){if(Pe(i))return c;var d,f=function(){d()};Ve(s,"afterEnter",f),Ve(s,"enterCancelled",f),Ve(h,"delayLeave",(function(t){d=t}))}}return r}}},yo=L({tag:String,moveClass:String},co);delete yo.mode;var zo={props:yo,beforeMount:function(){var t=this,e=this._update;this._update=function(n,a){var r=kn(t);t.__patch__(t._vnode,t.kept,!1,!0),t._vnode=t.kept,r(),e.call(t,n,a)}},render:function(t){for(var e=this.tag||this.$vnode.data.tag||"span",n=Object.create(null),a=this.prevChildren=this.children,r=this.$slots.default||[],i=this.children=[],o=ho(this),s=0;s<r.length;s++){var l=r[s];if(l.tag)if(null!=l.key&&0!==String(l.key).indexOf("__vlist"))i.push(l),n[l.key]=l,(l.data||(l.data={})).transition=o;else;}if(a){for(var c=[],u=[],h=0;h<a.length;h++){var d=a[h];d.data.transition=o,d.data.pos=d.elm.getBoundingClientRect(),n[d.key]?c.push(d):u.push(d)}this.kept=t(e,null,c),this.removed=u}return t(e,null,i)},updated:function(){var t=this.prevChildren,e=this.moveClass||(this.name||"v")+"-move";t.length&&this.hasMove(t[0].elm,e)&&(t.forEach(wo),t.forEach(Mo),t.forEach(Vo),this._reflow=document.body.offsetHeight,t.forEach((function(t){if(t.data.moved){var n=t.elm,a=n.style;Fi(n,e),a.transform=a.WebkitTransform=a.transitionDuration="",n.addEventListener(Ti,n._moveCb=function t(a){a&&a.target!==n||a&&!/transform$/.test(a.propertyName)||(n.removeEventListener(Ti,t),n._moveCb=null,_i(n,e))})}})))},methods:{hasMove:function(t,e){if(!Oi)return!1;if(this._hasMove)return this._hasMove;var n=t.cloneNode();t._transitionClasses&&t._transitionClasses.forEach((function(t){Ai(n,t)})),Vi(n,e),n.style.display="none",this.$el.appendChild(n);var a=ji(n);return this.$el.removeChild(n),this._hasMove=a.hasTransform}}};function wo(t){t.elm._moveCb&&t.elm._moveCb(),t.elm._enterCb&&t.elm._enterCb()}function Mo(t){t.data.newPos=t.elm.getBoundingClientRect()}function Vo(t){var e=t.data.pos,n=t.data.newPos,a=e.left-n.left,r=e.top-n.top;if(a||r){t.data.moved=!0;var i=t.elm.style;i.transform=i.WebkitTransform="translate("+a+"px,"+r+"px)",i.transitionDuration="0s"}}var Ao={Transition:bo,TransitionGroup:zo};Ha.config.mustUseProp=Ra,Ha.config.isReservedTag=sr,Ha.config.isReservedAttr=ja,Ha.config.getTagNamespace=lr,Ha.config.isUnknownElement=ur,L(Ha.options.directives,lo),L(Ha.options.components,Ao),Ha.prototype.__patch__=Y?Yi:E,Ha.prototype.$mount=function(t,e){return t=t&&Y?dr(t):void 0,Fn(this,t,e)},Y&&setTimeout((function(){$.devtools&&ut&&ut.emit("init",Ha)}),0),e["default"]=Ha},4665:function(t,e,n){"use strict";n.d(e,{Se:function(){return P},nv:function(){return F},rn:function(){return k}});n(1703);
/*!
 * vuex v3.6.2
 * (c) 2021 Evan You
 * @license MIT
 */
function a(t){var e=Number(t.version.split(".")[0]);if(e>=2)t.mixin({beforeCreate:a});else{var n=t.prototype._init;t.prototype._init=function(t){void 0===t&&(t={}),t.init=t.init?[a].concat(t.init):a,n.call(this,t)}}function a(){var t=this.$options;t.store?this.$store="function"===typeof t.store?t.store():t.store:t.parent&&t.parent.$store&&(this.$store=t.parent.$store)}}var r="undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{},i=r.__VUE_DEVTOOLS_GLOBAL_HOOK__;function o(t){i&&(t._devtoolHook=i,i.emit("vuex:init",t),i.on("vuex:travel-to-state",(function(e){t.replaceState(e)})),t.subscribe((function(t,e){i.emit("vuex:mutation",t,e)}),{prepend:!0}),t.subscribeAction((function(t,e){i.emit("vuex:action",t,e)}),{prepend:!0}))}function s(t,e){return t.filter(e)[0]}function l(t,e){if(void 0===e&&(e=[]),null===t||"object"!==typeof t)return t;var n=s(e,(function(e){return e.original===t}));if(n)return n.copy;var a=Array.isArray(t)?[]:{};return e.push({original:t,copy:a}),Object.keys(t).forEach((function(n){a[n]=l(t[n],e)})),a}function c(t,e){Object.keys(t).forEach((function(n){return e(t[n],n)}))}function u(t){return null!==t&&"object"===typeof t}function h(t){return t&&"function"===typeof t.then}function d(t,e){return function(){return t(e)}}var f=function(t,e){this.runtime=e,this._children=Object.create(null),this._rawModule=t;var n=t.state;this.state=("function"===typeof n?n():n)||{}},p={namespaced:{configurable:!0}};p.namespaced.get=function(){return!!this._rawModule.namespaced},f.prototype.addChild=function(t,e){this._children[t]=e},f.prototype.removeChild=function(t){delete this._children[t]},f.prototype.getChild=function(t){return this._children[t]},f.prototype.hasChild=function(t){return t in this._children},f.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)},f.prototype.forEachChild=function(t){c(this._children,t)},f.prototype.forEachGetter=function(t){this._rawModule.getters&&c(this._rawModule.getters,t)},f.prototype.forEachAction=function(t){this._rawModule.actions&&c(this._rawModule.actions,t)},f.prototype.forEachMutation=function(t){this._rawModule.mutations&&c(this._rawModule.mutations,t)},Object.defineProperties(f.prototype,p);var v=function(t){this.register([],t,!1)};function m(t,e,n){if(e.update(n),n.modules)for(var a in n.modules){if(!e.getChild(a))return void 0;m(t.concat(a),e.getChild(a),n.modules[a])}}v.prototype.get=function(t){return t.reduce((function(t,e){return t.getChild(e)}),this.root)},v.prototype.getNamespace=function(t){var e=this.root;return t.reduce((function(t,n){return e=e.getChild(n),t+(e.namespaced?n+"/":"")}),"")},v.prototype.update=function(t){m([],this.root,t)},v.prototype.register=function(t,e,n){var a=this;void 0===n&&(n=!0);var r=new f(e,n);if(0===t.length)this.root=r;else{var i=this.get(t.slice(0,-1));i.addChild(t[t.length-1],r)}e.modules&&c(e.modules,(function(e,r){a.register(t.concat(r),e,n)}))},v.prototype.unregister=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1],a=e.getChild(n);a&&a.runtime&&e.removeChild(n)},v.prototype.isRegistered=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1];return!!e&&e.hasChild(n)};var g;var b=function(t){var e=this;void 0===t&&(t={}),!g&&"undefined"!==typeof window&&window.Vue&&L(window.Vue);var n=t.plugins;void 0===n&&(n=[]);var a=t.strict;void 0===a&&(a=!1),this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new v(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._watcherVM=new g,this._makeLocalGettersCache=Object.create(null);var r=this,i=this,s=i.dispatch,l=i.commit;this.dispatch=function(t,e){return s.call(r,t,e)},this.commit=function(t,e,n){return l.call(r,t,e,n)},this.strict=a;var c=this._modules.root.state;V(this,c,[],this._modules.root),M(this,c),n.forEach((function(t){return t(e)}));var u=void 0!==t.devtools?t.devtools:g.config.devtools;u&&o(this)},y={state:{configurable:!0}};function z(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var n=e.indexOf(t);n>-1&&e.splice(n,1)}}function w(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;V(t,n,[],t._modules.root,!0),M(t,n,e)}function M(t,e,n){var a=t._vm;t.getters={},t._makeLocalGettersCache=Object.create(null);var r=t._wrappedGetters,i={};c(r,(function(e,n){i[n]=d(e,t),Object.defineProperty(t.getters,n,{get:function(){return t._vm[n]},enumerable:!0})}));var o=g.config.silent;g.config.silent=!0,t._vm=new g({data:{$$state:e},computed:i}),g.config.silent=o,t.strict&&S(t),a&&(n&&t._withCommit((function(){a._data.$$state=null})),g.nextTick((function(){return a.$destroy()})))}function V(t,e,n,a,r){var i=!n.length,o=t._modules.getNamespace(n);if(a.namespaced&&(t._modulesNamespaceMap[o],t._modulesNamespaceMap[o]=a),!i&&!r){var s=B(e,n.slice(0,-1)),l=n[n.length-1];t._withCommit((function(){g.set(s,l,a.state)}))}var c=a.context=A(t,o,n);a.forEachMutation((function(e,n){var a=o+n;C(t,a,e,c)})),a.forEachAction((function(e,n){var a=e.root?n:o+n,r=e.handler||e;O(t,a,r,c)})),a.forEachGetter((function(e,n){var a=o+n;I(t,a,e,c)})),a.forEachChild((function(a,i){V(t,e,n.concat(i),a,r)}))}function A(t,e,n){var a=""===e,r={dispatch:a?t.dispatch:function(n,a,r){var i=T(n,a,r),o=i.payload,s=i.options,l=i.type;return s&&s.root||(l=e+l),t.dispatch(l,o)},commit:a?t.commit:function(n,a,r){var i=T(n,a,r),o=i.payload,s=i.options,l=i.type;s&&s.root||(l=e+l),t.commit(l,o,s)}};return Object.defineProperties(r,{getters:{get:a?function(){return t.getters}:function(){return H(t,e)}},state:{get:function(){return B(t.state,n)}}}),r}function H(t,e){if(!t._makeLocalGettersCache[e]){var n={},a=e.length;Object.keys(t.getters).forEach((function(r){if(r.slice(0,a)===e){var i=r.slice(a);Object.defineProperty(n,i,{get:function(){return t.getters[r]},enumerable:!0})}})),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}function C(t,e,n,a){var r=t._mutations[e]||(t._mutations[e]=[]);r.push((function(e){n.call(t,a.state,e)}))}function O(t,e,n,a){var r=t._actions[e]||(t._actions[e]=[]);r.push((function(e){var r=n.call(t,{dispatch:a.dispatch,commit:a.commit,getters:a.getters,state:a.state,rootGetters:t.getters,rootState:t.state},e);return h(r)||(r=Promise.resolve(r)),t._devtoolHook?r.catch((function(e){throw t._devtoolHook.emit("vuex:error",e),e})):r}))}function I(t,e,n,a){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(t){return n(a.state,a.getters,t.state,t.getters)})}function S(t){t._vm.$watch((function(){return this._data.$$state}),(function(){0}),{deep:!0,sync:!0})}function B(t,e){return e.reduce((function(t,e){return t[e]}),t)}function T(t,e,n){return u(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}function L(t){g&&t===g||(g=t,a(g))}y.state.get=function(){return this._vm._data.$$state},y.state.set=function(t){0},b.prototype.commit=function(t,e,n){var a=this,r=T(t,e,n),i=r.type,o=r.payload,s=(r.options,{type:i,payload:o}),l=this._mutations[i];l&&(this._withCommit((function(){l.forEach((function(t){t(o)}))})),this._subscribers.slice().forEach((function(t){return t(s,a.state)})))},b.prototype.dispatch=function(t,e){var n=this,a=T(t,e),r=a.type,i=a.payload,o={type:r,payload:i},s=this._actions[r];if(s){try{this._actionSubscribers.slice().filter((function(t){return t.before})).forEach((function(t){return t.before(o,n.state)}))}catch(c){0}var l=s.length>1?Promise.all(s.map((function(t){return t(i)}))):s[0](i);return new Promise((function(t,e){l.then((function(e){try{n._actionSubscribers.filter((function(t){return t.after})).forEach((function(t){return t.after(o,n.state)}))}catch(c){0}t(e)}),(function(t){try{n._actionSubscribers.filter((function(t){return t.error})).forEach((function(e){return e.error(o,n.state,t)}))}catch(c){0}e(t)}))}))}},b.prototype.subscribe=function(t,e){return z(t,this._subscribers,e)},b.prototype.subscribeAction=function(t,e){var n="function"===typeof t?{before:t}:t;return z(n,this._actionSubscribers,e)},b.prototype.watch=function(t,e,n){var a=this;return this._watcherVM.$watch((function(){return t(a.state,a.getters)}),e,n)},b.prototype.replaceState=function(t){var e=this;this._withCommit((function(){e._vm._data.$$state=t}))},b.prototype.registerModule=function(t,e,n){void 0===n&&(n={}),"string"===typeof t&&(t=[t]),this._modules.register(t,e),V(this,this.state,t,this._modules.get(t),n.preserveState),M(this,this.state)},b.prototype.unregisterModule=function(t){var e=this;"string"===typeof t&&(t=[t]),this._modules.unregister(t),this._withCommit((function(){var n=B(e.state,t.slice(0,-1));g.delete(n,t[t.length-1])})),w(this)},b.prototype.hasModule=function(t){return"string"===typeof t&&(t=[t]),this._modules.isRegistered(t)},b.prototype.hotUpdate=function(t){this._modules.update(t),w(this,!0)},b.prototype._withCommit=function(t){var e=this._committing;this._committing=!0,t(),this._committing=e},Object.defineProperties(b.prototype,y);var k=j((function(t,e){var n={};return D(e).forEach((function(e){var a=e.key,r=e.val;n[a]=function(){var e=this.$store.state,n=this.$store.getters;if(t){var a=N(this.$store,"mapState",t);if(!a)return;e=a.context.state,n=a.context.getters}return"function"===typeof r?r.call(this,e,n):e[r]},n[a].vuex=!0})),n})),E=j((function(t,e){var n={};return D(e).forEach((function(e){var a=e.key,r=e.val;n[a]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var a=this.$store.commit;if(t){var i=N(this.$store,"mapMutations",t);if(!i)return;a=i.context.commit}return"function"===typeof r?r.apply(this,[a].concat(e)):a.apply(this.$store,[r].concat(e))}})),n})),P=j((function(t,e){var n={};return D(e).forEach((function(e){var a=e.key,r=e.val;r=t+r,n[a]=function(){if(!t||N(this.$store,"mapGetters",t))return this.$store.getters[r]},n[a].vuex=!0})),n})),F=j((function(t,e){var n={};return D(e).forEach((function(e){var a=e.key,r=e.val;n[a]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var a=this.$store.dispatch;if(t){var i=N(this.$store,"mapActions",t);if(!i)return;a=i.context.dispatch}return"function"===typeof r?r.apply(this,[a].concat(e)):a.apply(this.$store,[r].concat(e))}})),n})),_=function(t){return{mapState:k.bind(null,t),mapGetters:P.bind(null,t),mapMutations:E.bind(null,t),mapActions:F.bind(null,t)}};function D(t){return x(t)?Array.isArray(t)?t.map((function(t){return{key:t,val:t}})):Object.keys(t).map((function(e){return{key:e,val:t[e]}})):[]}function x(t){return Array.isArray(t)||u(t)}function j(t){return function(e,n){return"string"!==typeof e?(n=e,e=""):"/"!==e.charAt(e.length-1)&&(e+="/"),t(e,n)}}function N(t,e,n){var a=t._modulesNamespaceMap[n];return a}function R(t){void 0===t&&(t={});var e=t.collapsed;void 0===e&&(e=!0);var n=t.filter;void 0===n&&(n=function(t,e,n){return!0});var a=t.transformer;void 0===a&&(a=function(t){return t});var r=t.mutationTransformer;void 0===r&&(r=function(t){return t});var i=t.actionFilter;void 0===i&&(i=function(t,e){return!0});var o=t.actionTransformer;void 0===o&&(o=function(t){return t});var s=t.logMutations;void 0===s&&(s=!0);var c=t.logActions;void 0===c&&(c=!0);var u=t.logger;return void 0===u&&(u=console),function(t){var h=l(t.state);"undefined"!==typeof u&&(s&&t.subscribe((function(t,i){var o=l(i);if(n(t,h,o)){var s=G(),c=r(t),d="mutation "+t.type+s;$(u,d,e),u.log("%c prev state","color: #9E9E9E; font-weight: bold",a(h)),u.log("%c mutation","color: #03A9F4; font-weight: bold",c),u.log("%c next state","color: #4CAF50; font-weight: bold",a(o)),U(u)}h=o})),c&&t.subscribeAction((function(t,n){if(i(t,n)){var a=G(),r=o(t),s="action "+t.type+a;$(u,s,e),u.log("%c action","color: #03A9F4; font-weight: bold",r),U(u)}})))}}function $(t,e,n){var a=n?t.groupCollapsed:t.group;try{a.call(t,e)}catch(r){t.log(e)}}function U(t){try{t.groupEnd()}catch(e){t.log("—— log end ——")}}function G(){var t=new Date;return" @ "+W(t.getHours(),2)+":"+W(t.getMinutes(),2)+":"+W(t.getSeconds(),2)+"."+W(t.getMilliseconds(),3)}function q(t,e){return new Array(e+1).join(t)}function W(t,e){return q("0",e-t.toString().length)+t}var K={Store:b,install:L,version:"3.6.2",mapState:k,mapMutations:E,mapGetters:P,mapActions:F,createNamespacedHelpers:_,createLogger:R};e["ZP"]=K},1333:function(t,e,n){"use strict";n.d(e,{Jn:function(){return vt},qX:function(){return ht},Xd:function(){return ut},Mq:function(){return gt},ZF:function(){return mt},KN:function(){return bt}});var a=n(7805),r=n(7366),i=n(3536);n(6699),n(2801);const o=(t,e)=>e.some((e=>t instanceof e));let s,l;function c(){return s||(s=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function u(){return l||(l=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const h=new WeakMap,d=new WeakMap,f=new WeakMap,p=new WeakMap,v=new WeakMap;function m(t){const e=new Promise(((e,n)=>{const a=()=>{t.removeEventListener("success",r),t.removeEventListener("error",i)},r=()=>{e(M(t.result)),a()},i=()=>{n(t.error),a()};t.addEventListener("success",r),t.addEventListener("error",i)}));return e.then((e=>{e instanceof IDBCursor&&h.set(e,t)})).catch((()=>{})),v.set(e,t),e}function g(t){if(d.has(t))return;const e=new Promise(((e,n)=>{const a=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",i),t.removeEventListener("abort",i)},r=()=>{e(),a()},i=()=>{n(t.error||new DOMException("AbortError","AbortError")),a()};t.addEventListener("complete",r),t.addEventListener("error",i),t.addEventListener("abort",i)}));d.set(t,e)}let b={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return d.get(t);if("objectStoreNames"===e)return t.objectStoreNames||f.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return M(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t}};function y(t){b=t(b)}function z(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?u().includes(t)?function(...e){return t.apply(V(this),e),M(h.get(this))}:function(...e){return M(t.apply(V(this),e))}:function(e,...n){const a=t.call(V(this),e,...n);return f.set(a,e.sort?e.sort():[e]),M(a)}}function w(t){return"function"===typeof t?z(t):(t instanceof IDBTransaction&&g(t),o(t,c())?new Proxy(t,b):t)}function M(t){if(t instanceof IDBRequest)return m(t);if(p.has(t))return p.get(t);const e=w(t);return e!==t&&(p.set(t,e),v.set(e,t)),e}const V=t=>v.get(t);function A(t,e,{blocked:n,upgrade:a,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),s=M(o);return a&&o.addEventListener("upgradeneeded",(t=>{a(M(o.result),t.oldVersion,t.newVersion,M(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),s.then((t=>{i&&t.addEventListener("close",(()=>i())),r&&t.addEventListener("versionchange",(()=>r()))})).catch((()=>{})),s}const H=["get","getKey","getAll","getAllKeys","count"],C=["put","add","delete","clear"],O=new Map;function I(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!==typeof e)return;if(O.get(e))return O.get(e);const n=e.replace(/FromIndex$/,""),a=e!==n,r=C.includes(n);if(!(n in(a?IDBIndex:IDBObjectStore).prototype)||!r&&!H.includes(n))return;const i=async function(t,...e){const i=this.transaction(t,r?"readwrite":"readonly");let o=i.store;return a&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),r&&i.done]))[0]};return O.set(e,i),i}y((t=>({...t,get:(e,n,a)=>I(e,n)||t.get(e,n,a),has:(e,n)=>!!I(e,n)||t.has(e,n)})));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class S{constructor(t){this.container=t}getPlatformInfoString(){const t=this.container.getProviders();return t.map((t=>{if(B(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}function B(t){const e=t.getComponent();return"VERSION"===(null===e||void 0===e?void 0:e.type)}const T="@firebase/app",L="0.7.26",k=new r.Yd("@firebase/app"),E="@firebase/app-compat",P="@firebase/analytics-compat",F="@firebase/analytics",_="@firebase/app-check-compat",D="@firebase/app-check",x="@firebase/auth",j="@firebase/auth-compat",N="@firebase/database",R="@firebase/database-compat",$="@firebase/functions",U="@firebase/functions-compat",G="@firebase/installations",q="@firebase/installations-compat",W="@firebase/messaging",K="@firebase/messaging-compat",X="@firebase/performance",J="@firebase/performance-compat",Y="@firebase/remote-config",Q="@firebase/remote-config-compat",Z="@firebase/storage",tt="@firebase/storage-compat",et="@firebase/firestore",nt="@firebase/firestore-compat",at="firebase",rt="9.8.3",it="[DEFAULT]",ot={[T]:"fire-core",[E]:"fire-core-compat",[F]:"fire-analytics",[P]:"fire-analytics-compat",[D]:"fire-app-check",[_]:"fire-app-check-compat",[x]:"fire-auth",[j]:"fire-auth-compat",[N]:"fire-rtdb",[R]:"fire-rtdb-compat",[$]:"fire-fn",[U]:"fire-fn-compat",[G]:"fire-iid",[q]:"fire-iid-compat",[W]:"fire-fcm",[K]:"fire-fcm-compat",[X]:"fire-perf",[J]:"fire-perf-compat",[Y]:"fire-rc",[Q]:"fire-rc-compat",[Z]:"fire-gcs",[tt]:"fire-gcs-compat",[et]:"fire-fst",[nt]:"fire-fst-compat","fire-js":"fire-js",[at]:"fire-js-all"},st=new Map,lt=new Map;function ct(t,e){try{t.container.addComponent(e)}catch(n){k.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ut(t){const e=t.name;if(lt.has(e))return k.debug(`There were multiple attempts to register component ${e}.`),!1;lt.set(e,t);for(const n of st.values())ct(n,t);return!0}function ht(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const dt={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},ft=new i.LL("app","Firebase",dt);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pt{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new a.wA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw ft.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vt=rt;function mt(t,e={}){if("object"!==typeof e){const t=e;e={name:t}}const n=Object.assign({name:it,automaticDataCollectionEnabled:!1},e),r=n.name;if("string"!==typeof r||!r)throw ft.create("bad-app-name",{appName:String(r)});const o=st.get(r);if(o){if((0,i.vZ)(t,o.options)&&(0,i.vZ)(n,o.config))return o;throw ft.create("duplicate-app",{appName:r})}const s=new a.H0(r);for(const a of lt.values())s.addComponent(a);const l=new pt(t,n,s);return st.set(r,l),l}function gt(t=it){const e=st.get(t);if(!e)throw ft.create("no-app",{appName:t});return e}function bt(t,e,n){var r;let i=null!==(r=ot[t])&&void 0!==r?r:t;n&&(i+=`-${n}`);const o=i.match(/\s|\//),s=e.match(/\s|\//);if(o||s){const t=[`Unable to register library "${i}" with version "${e}":`];return o&&t.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&t.push("and"),s&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void k.warn(t.join(" "))}ut(new a.wA(`${i}-version`,(()=>({library:i,version:e})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const yt="firebase-heartbeat-database",zt=1,wt="firebase-heartbeat-store";let Mt=null;function Vt(){return Mt||(Mt=A(yt,zt,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(wt)}}}).catch((t=>{throw ft.create("storage-open",{originalErrorMessage:t.message})}))),Mt}async function At(t){var e;try{const e=await Vt();return e.transaction(wt).objectStore(wt).get(Ct(t))}catch(n){throw ft.create("storage-get",{originalErrorMessage:null===(e=n)||void 0===e?void 0:e.message})}}async function Ht(t,e){var n;try{const n=await Vt(),a=n.transaction(wt,"readwrite"),r=a.objectStore(wt);return await r.put(e,Ct(t)),a.done}catch(a){throw ft.create("storage-set",{originalErrorMessage:null===(n=a)||void 0===n?void 0:n.message})}}function Ct(t){return`${t.name}!${t.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ot=1024,It=2592e6;class St{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Lt(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate(),e=t.getPlatformInfoString(),n=Bt();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some((t=>t.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf(),n=Date.now();return n-e<=It})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const t=Bt(),{heartbeatsToSend:e,unsentEntries:n}=Tt(this._heartbeatsCache.heartbeats),a=(0,i.L)(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}}function Bt(){const t=new Date;return t.toISOString().substring(0,10)}function Tt(t,e=Ot){const n=[];let a=t.slice();for(const r of t){const t=n.find((t=>t.agent===r.agent));if(t){if(t.dates.push(r.date),kt(n)>e){t.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),kt(n)>e){n.pop();break}a=a.slice(1)}return{heartbeatsToSend:n,unsentEntries:a}}class Lt{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,i.hl)()&&(0,i.eu)().then((()=>!0)).catch((()=>!1))}async read(){const t=await this._canUseIndexedDBPromise;if(t){const t=await At(this.app);return t||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Ht(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Ht(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function kt(t){return(0,i.L)(JSON.stringify({version:2,heartbeats:t})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Et(t){ut(new a.wA("platform-logger",(t=>new S(t)),"PRIVATE")),ut(new a.wA("heartbeat",(t=>new St(t)),"PRIVATE")),bt(T,L,t),bt(T,L,"esm2017"),bt("fire-js","")}Et("")},7805:function(t,e,n){"use strict";n.d(e,{H0:function(){return c},wA:function(){return r}});n(1703);var a=n(3536);class r{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new a.BH;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(n){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null===t||void 0===t?void 0:t.identifier),a=null!==(e=null===t||void 0===t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(a)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(r){if(a)return null;throw r}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(l(t))try{this.getOrInitializeService({instanceIdentifier:i})}catch(e){}for(const[t,n]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:a});n.resolve(t)}catch(e){}}}}clearInstance(t=i){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t=i){return this.instances.has(t)}getOptions(t=i){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[r,i]of this.instancesDeferred.entries()){const t=this.normalizeInstanceIdentifier(r);n===t&&i.resolve(a)}return a}onInit(t,e){var n;const a=this.normalizeInstanceIdentifier(e),r=null!==(n=this.onInitCallbacks.get(a))&&void 0!==n?n:new Set;r.add(t),this.onInitCallbacks.set(a,r);const i=this.instances.get(a);return i&&t(i,a),()=>{r.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const r of n)try{r(t,e)}catch(a){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:s(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(a){}return n||null}normalizeInstanceIdentifier(t=i){return this.component?this.component.multipleInstances?t:i:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function s(t){return t===i?void 0:t}function l(t){return"EAGER"===t.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){const e=this.getProvider(t.name);e.isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new o(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}},7366:function(t,e,n){"use strict";n.d(e,{Yd:function(){return c},in:function(){return r}});n(1703);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a=[];var r;(function(t){t[t["DEBUG"]=0]="DEBUG",t[t["VERBOSE"]=1]="VERBOSE",t[t["INFO"]=2]="INFO",t[t["WARN"]=3]="WARN",t[t["ERROR"]=4]="ERROR",t[t["SILENT"]=5]="SILENT"})(r||(r={}));const i={debug:r.DEBUG,verbose:r.VERBOSE,info:r.INFO,warn:r.WARN,error:r.ERROR,silent:r.SILENT},o=r.INFO,s={[r.DEBUG]:"log",[r.VERBOSE]:"log",[r.INFO]:"info",[r.WARN]:"warn",[r.ERROR]:"error"},l=(t,e,...n)=>{if(e<t.logLevel)return;const a=(new Date).toISOString(),r=s[e];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[r](`[${a}]  ${t.name}:`,...n)};class c{constructor(t){this.name=t,this._logLevel=o,this._logHandler=l,this._userLogHandler=null,a.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in r))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"===typeof t?i[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!==typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,r.DEBUG,...t),this._logHandler(this,r.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,r.VERBOSE,...t),this._logHandler(this,r.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,r.INFO,...t),this._logHandler(this,r.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,r.WARN,...t),this._logHandler(this,r.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,r.ERROR,...t),this._logHandler(this,r.ERROR,...t)}}}}]);
//# sourceMappingURL=chunk-vendors.703782f1.js.map