!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function r(e,t,n){const r="beginning"===n?0:e.length-1;return e.toLowerCase().charAt(r)===t}function o(e,t,n){let o=0;for(let i=0;i<e.length;i+=1)r(e[i],t,n)&&(o+=1);return o}function i(e){document.querySelector(".result").innerHTML=e}function u(e){document.querySelector(".result-label").innerHTML=e}n.r(t);const c="We the People of the United States, in Order to form a more perfect Union, establish Justice, insure domestic Tranquility, provide for the common defence, promote the general Welfare, and secure the Blessings of Liberty to ourselves and our Posterity, do ordain and establish this Constitution for the United States of America.".split(/(?=[.\s]|\b)/);const l=document.querySelector(".t-button"),d=document.querySelector(".e-button"),s=document.querySelector(".t-e-button");var a;l.addEventListener("click",e=>{i(o(c,"t","beginning")),u('words that begin with "t"')}),d.addEventListener("click",e=>{i(o(c,"e","end")),u('words that end with "e"')}),s.addEventListener("click",e=>{i(function(e,t,n){let o=0;for(let i=0;i<e.length;i+=1)r(e[i],t,"beginning")&&r(e[i],n,"end")&&(o+=1);return o}(c,"t","e")),u('words that begin with "t" and end with "e"')}),a=c,document.querySelector(".preamble").innerHTML=a.join("")}]);