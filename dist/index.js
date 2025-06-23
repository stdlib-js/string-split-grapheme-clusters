"use strict";var n=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var s=n(function(g,a){
var v=require('@stdlib/assert-is-string/dist').isPrimitive,t=require('@stdlib/string-next-grapheme-cluster-break/dist'),p=require('@stdlib/error-tools-fmtprodmsg/dist');function o(e){var r,i,u;if(!v(e))throw new TypeError(p('1PV3B',e));if(r=0,u=[],e.length===0)return u;for(i=t(e,r);i!==-1;)u.push(e.substring(r,i)),r=i,i=t(e,r);return u.push(e.substring(r)),u}a.exports=o
});var h=s();module.exports=h;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
