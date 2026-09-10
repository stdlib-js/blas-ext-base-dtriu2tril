"use strict";var g=function(n,e){return function(){try{return e||n((e={exports:{}}).exports,e),e.exports}catch(t){throw (e=0, t)}};};var b=g(function(k,w){
var S=require('@stdlib/ndarray-base-assert-is-row-major/dist'),T=require('@stdlib/math-base-special-fast-max/dist'),z=require('@stdlib/math-base-special-fast-min/dist');function C(n,e,t,f,m,u,d,i,s,l,q){var v,o,r,a;if(v=d,o=q,S([m,u])){for(a=0;a<n;a++){for(r=T(0,a+t);r<e;r++)i[o+r*s]=f[v+r*u];v+=m,o+=l}return i}for(a=0;a<e;a++){for(r=0;r<=z(a-t,n-1);r++)i[o+r*l]=f[v+r*m];v+=u,o+=s}return i}w.exports=C
});var R=g(function(M,y){
var G=require('@stdlib/blas-base-layout-resolve-str/dist'),H=require('@stdlib/ndarray-base-assert-is-row-major-string/dist'),p=require('@stdlib/math-base-special-fast-max/dist'),c=require('@stdlib/error-tools-fmtprodmsg/dist'),I=b();function J(n,e,t,f,m,u,d,i){var s,l,q,v,o,r,a,x;if(x=G(n),x===null)throw new TypeError(c('36ZFx',n));if(s=H(x),s?(r=t,a=e):(r=e,a=t),u<p(1,r))throw new RangeError(c('36ZJL',r,u));if(i<p(1,a))throw new RangeError(c('36ZGM',a,i));return s?(l=u,q=1,v=i,o=1):(l=1,q=u,v=1,o=i),I(e,t,f,m,l,q,0,d,v,o,0)}y.exports=J
});var E=g(function(N,j){
var K=b();function P(n,e,t,f,m,u,d,i,s,l,q){return K(n,e,t,f,m,u,d,i,s,l,q)}j.exports=P
});var F=g(function(L,_){
var Q=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),V=R(),U=E();Q(V,"ndarray",U);_.exports=V
});var W=require("path").join,X=require('@stdlib/utils-try-require/dist'),Y=require('@stdlib/assert-is-error/dist'),Z=F(),h,O=X(W(__dirname,"./native.js"));Y(O)?h=Z:h=O;module.exports=h;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
