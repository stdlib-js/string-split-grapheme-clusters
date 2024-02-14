// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as s}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@v0.2.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/string-next-grapheme-cluster-break@v0.1.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";function e(e){var i,n,d;if(!s(e))throw new TypeError(r("invalid argument. Must provide a string. Value: `%s`.",e));if(i=0,d=[],0===e.length)return d;for(n=t(e,i);-1!==n;)d.push(e.substring(i,n)),n=t(e,i=n);return d.push(e.substring(i)),d}export{e as default};
//# sourceMappingURL=index.mjs.map
