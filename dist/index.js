"use strict";var d=function(t,e){return function(){try{return e||t((e={exports:{}}).exports,e),e.exports}catch(u){throw (e=0, u)}};};var x=d(function($,h){
var O=require('@stdlib/ndarray-base-assert-is-row-major/dist'),S=require('@stdlib/math-base-special-fast-max/dist'),T=require('@stdlib/math-base-special-fast-min/dist');function z(t,e,u,f,q,n,g,i,o,m,l){var v,s,r,a;if(v=g,s=l,O([q,n])){for(a=0;a<t;a++){for(r=S(0,a+u);r<e;r++)i[s+r*o]=f[v+r*n];v+=q,s+=m}return i}for(a=0;a<e;a++){for(r=0;r<=T(a-u,t-1);r++)i[s+r*m]=f[v+r*q];v+=n,s+=o}return i}h.exports=z
});var y=d(function(k,p){
var C=require('@stdlib/blas-base-assert-is-layout/dist'),G=require('@stdlib/ndarray-base-assert-is-row-major-string/dist'),w=require('@stdlib/math-base-special-fast-max/dist'),b=require('@stdlib/error-tools-fmtprodmsg/dist'),H=x();function I(t,e,u,f,q,n,g,i){var o,m,l,v,s,r,a;if(!C(t))throw new TypeError(b('nullFx',t));if(o=G(t),o?(r=u,a=e):(r=e,a=u),n<w(1,r))throw new RangeError(b('nullJL',r,n));if(i<w(1,a))throw new RangeError(b('nullGM',a,i));return o?(m=n,l=1,v=i,s=1):(m=1,l=n,v=1,s=i),H(e,u,f,q,m,l,0,g,v,s,0)}p.exports=I
});var j=d(function(M,R){
var J=x();function K(t,e,u,f,q,n,g,i,o,m,l){return J(t,e,u,f,q,n,g,i,o,m,l)}R.exports=K
});var _=d(function(N,V){
var P=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),E=y(),Q=j();P(E,"ndarray",Q);V.exports=E
});var U=require("path").join,W=require('@stdlib/utils-try-require/dist'),X=require('@stdlib/assert-is-error/dist'),Y=_(),c,F=W(U(__dirname,"./native.js"));X(F)?c=Y:c=F;module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
