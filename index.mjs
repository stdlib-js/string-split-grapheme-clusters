// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as s}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@v0.2.2-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/string-next-grapheme-cluster-break@v0.2.2-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.2-esm/index.mjs";function e(e){var i,n,m;if(!s(e))throw new TypeError(t("1PV3B",e));if(i=0,m=[],0===e.length)return m;for(n=r(e,i);-1!==n;)m.push(e.substring(i,n)),n=r(e,i=n);return m.push(e.substring(i)),m}export{e as default};
//# sourceMappingURL=index.mjs.map
