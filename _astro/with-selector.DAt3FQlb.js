import{g as $}from"./_commonjsHelpers.D6-XlEtG.js";import{d as F,e as g}from"./index.B2v4dHBy.js";var j={exports:{}},x={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var T;function G(){if(T)return x;T=1;var e=Symbol.for("react.transitional.element"),a=Symbol.for("react.fragment");function o(r,u,c){var S=null;if(c!==void 0&&(S=""+c),u.key!==void 0&&(S=""+u.key),"key"in u){c={};for(var p in u)p!=="key"&&(c[p]=u[p])}else c=u;return u=c.ref,{$$typeof:e,type:r,key:S,ref:u!==void 0?u:null,props:c}}return x.Fragment=a,x.jsx=o,x.jsxs=o,x}var A;function I(){return A||(A=1,j.exports=G()),j.exports}var X=I(),L=F();const Z=$(L);function z(e){var a,o,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var u=e.length;for(a=0;a<u;a++)e[a]&&(o=z(e[a]))&&(r&&(r+=" "),r+=o)}else for(o in e)e[o]&&(r&&(r+=" "),r+=o);return r}function K(){for(var e,a,o=0,r="",u=arguments.length;o<u;o++)(e=arguments[o])&&(a=z(e))&&(r&&(r+=" "),r+=a);return r}var _={exports:{}},q={},w={exports:{}},D={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var J;function P(){if(J)return D;J=1;var e=g();function a(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var o=typeof Object.is=="function"?Object.is:a,r=e.useState,u=e.useEffect,c=e.useLayoutEffect,S=e.useDebugValue;function p(t,n){var s=n(),f=r({inst:{value:s,getSnapshot:n}}),i=f[0].inst,m=f[1];return c(function(){i.value=s,i.getSnapshot=n,R(i)&&m({inst:i})},[t,s,n]),u(function(){return R(i)&&m({inst:i}),t(function(){R(i)&&m({inst:i})})},[t]),S(s),s}function R(t){var n=t.getSnapshot;t=t.value;try{var s=n();return!o(t,s)}catch{return!0}}function l(t,n){return n()}var v=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?l:p;return D.useSyncExternalStore=e.useSyncExternalStore!==void 0?e.useSyncExternalStore:v,D}var O;function U(){return O||(O=1,w.exports=P()),w.exports}/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var W;function Y(){if(W)return q;W=1;var e=g(),a=U();function o(l,v){return l===v&&(l!==0||1/l===1/v)||l!==l&&v!==v}var r=typeof Object.is=="function"?Object.is:o,u=a.useSyncExternalStore,c=e.useRef,S=e.useEffect,p=e.useMemo,R=e.useDebugValue;return q.useSyncExternalStoreWithSelector=function(l,v,t,n,s){var f=c(null);if(f.current===null){var i={hasValue:!1,value:null};f.current=i}else i=f.current;f=p(function(){function b(d){if(!k){if(k=!0,h=d,d=n(d),s!==void 0&&i.hasValue){var E=i.value;if(s(E,d))return y=E}return y=d}if(E=y,r(h,d))return E;var M=n(d);return s!==void 0&&s(E,M)?(h=d,E):(h=d,y=M)}var k=!1,h,y,V=t===void 0?null:t;return[function(){return b(v())},V===null?void 0:function(){return b(V())}]},[v,t,n,s]);var m=u(l,f[0],f[1]);return S(function(){i.hasValue=!0,i.value=m},[m]),R(m),m},q}var C;function B(){return C||(C=1,_.exports=Y()),_.exports}var H=B();const ee=$(H);export{Z as R,U as a,K as c,X as j,L as r,ee as u,H as w};
