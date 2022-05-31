// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/string-next-grapheme-cluster-break@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@esm/index.mjs";var e=r.isPrimitive,i=s,n=t;var m=function(r){var s,t,m;if(!e(r))throw new TypeError(n("0hb3N",r));if(s=0,m=[],0===r.length)return m;for(t=i(r,s);-1!==t;)m.push(r.substring(s,t)),t=i(r,s=t);return m.push(r.substring(s)),m};export{m as default};
//# sourceMappingURL=index.mjs.map
