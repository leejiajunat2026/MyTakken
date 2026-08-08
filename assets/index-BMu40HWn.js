(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();/**
* @vue/shared v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Fn(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const U={},st=[],Ee=()=>{},Hs=()=>!1,Xt=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Zt=e=>e.startsWith("onUpdate:"),te=Object.assign,Dn=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Bi=Object.prototype.hasOwnProperty,D=(e,t)=>Bi.call(e,t),A=Array.isArray,it=e=>At(e)==="[object Map]",Ls=e=>At(e)==="[object Set]",os=e=>At(e)==="[object Date]",I=e=>typeof e=="function",B=e=>typeof e=="string",Oe=e=>typeof e=="symbol",H=e=>e!==null&&typeof e=="object",$s=e=>(H(e)||I(e))&&I(e.then)&&I(e.catch),Ks=Object.prototype.toString,At=e=>Ks.call(e),Ji=e=>At(e).slice(8,-1),zs=e=>At(e)==="[object Object]",Nn=e=>B(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,mt=Fn(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),en=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Gi=/-\w/g,fe=en(e=>e.replace(Gi,t=>t.slice(1).toUpperCase())),Yi=/\B([A-Z])/g,Xe=en(e=>e.replace(Yi,"-$1").toLowerCase()),Us=en(e=>e.charAt(0).toUpperCase()+e.slice(1)),dn=en(e=>e?`on${Us(e)}`:""),Ce=(e,t)=>!Object.is(e,t),gn=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},Vs=(e,t,n,s=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:s,value:n})},Qi=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let ls;const tn=()=>ls||(ls=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function jn(e){if(A(e)){const t={};for(let n=0;n<e.length;n++){const s=e[n],i=B(s)?tr(s):jn(s);if(i)for(const r in i)t[r]=i[r]}return t}else if(B(e)||H(e))return e}const Xi=/;(?![^(]*\))/g,Zi=/:([^]+)/,er=/\/\*[^]*?\*\//g;function tr(e){const t={};return e.replace(er,"").split(Xi).forEach(n=>{if(n){const s=n.split(Zi);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function nn(e){let t="";if(B(e))t=e;else if(A(e))for(let n=0;n<e.length;n++){const s=nn(e[n]);s&&(t+=s+" ")}else if(H(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const nr="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",sr=Fn(nr);function Ws(e){return!!e||e===""}function ir(e,t){if(e.length!==t.length)return!1;let n=!0;for(let s=0;n&&s<e.length;s++)n=Hn(e[s],t[s]);return n}function Hn(e,t){if(e===t)return!0;let n=os(e),s=os(t);if(n||s)return n&&s?e.getTime()===t.getTime():!1;if(n=Oe(e),s=Oe(t),n||s)return e===t;if(n=A(e),s=A(t),n||s)return n&&s?ir(e,t):!1;if(n=H(e),s=H(t),n||s){if(!n||!s)return!1;const i=Object.keys(e).length,r=Object.keys(t).length;if(i!==r)return!1;for(const o in e){const l=e.hasOwnProperty(o),a=t.hasOwnProperty(o);if(l&&!a||!l&&a||!Hn(e[o],t[o]))return!1}}return String(e)===String(t)}const Bs=e=>!!(e&&e.__v_isRef===!0),ce=e=>B(e)?e:e==null?"":A(e)||H(e)&&(e.toString===Ks||!I(e.toString))?Bs(e)?ce(e.value):JSON.stringify(e,Js,2):String(e),Js=(e,t)=>Bs(t)?Js(e,t.value):it(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[s,i],r)=>(n[hn(s,r)+" =>"]=i,n),{})}:Ls(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>hn(n))}:Oe(t)?hn(t):H(t)&&!A(t)&&!zs(t)?String(t):t,hn=(e,t="")=>{var n;return Oe(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let X;class rr{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!t&&X&&(X.active?(this.parent=X,this.index=(X.scopes||(X.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes){const s=this.scopes.slice();for(t=0,n=s.length;t<n;t++)s[t].pause()}for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes){const i=this.scopes.slice();for(t=0,n=i.length;t<n;t++)i[t].resume()}const s=this.effects.slice();for(t=0,n=s.length;t<n;t++)s[t].resume()}}run(t){if(this._active){const n=X;try{return X=this,t()}finally{X=n}}}on(){++this._on===1&&(this.prevScope=X,X=this)}off(){if(this._on>0&&--this._on===0){if(X===this)X=this.prevScope;else{let t=X;for(;t;){if(t.prevScope===this){t.prevScope=this.prevScope;break}t=t.prevScope}}this.prevScope=void 0}}stop(t){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){const i=this.scopes.slice();for(n=0,s=i.length;n<s;n++)i[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function or(){return X}let z;const pn=new WeakSet;class Gs{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,X&&(X.active?X.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,pn.has(this)&&(pn.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Qs(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,cs(this),Xs(this);const t=z,n=de;z=this,de=!0;try{return this.fn()}finally{Zs(this),z=t,de=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Kn(t);this.deps=this.depsTail=void 0,cs(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?pn.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){kn(this)&&this.run()}get dirty(){return kn(this)}}let Ys=0,wt,bt;function Qs(e,t=!1){if(e.flags|=8,t){e.next=bt,bt=e;return}e.next=wt,wt=e}function Ln(){Ys++}function $n(){if(--Ys>0)return;if(bt){let t=bt;for(bt=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;wt;){let t=wt;for(wt=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(s){e||(e=s)}t=n}}if(e)throw e}function Xs(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Zs(e){let t,n=e.depsTail,s=n;for(;s;){const i=s.prevDep;s.version===-1?(s===n&&(n=i),Kn(s),lr(s)):t=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=i}e.deps=t,e.depsTail=n}function kn(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(ei(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function ei(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===kt)||(e.globalVersion=kt,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!kn(e))))return;e.flags|=2;const t=e.dep,n=z,s=de;z=e,de=!0;try{Xs(e);const i=e.fn(e._value);(t.version===0||Ce(i,e._value))&&(e.flags|=128,e._value=i,t.version++)}catch(i){throw t.version++,i}finally{z=n,de=s,Zs(e),e.flags&=-3}}function Kn(e,t=!1){const{dep:n,prevSub:s,nextSub:i}=e;if(s&&(s.nextSub=i,e.prevSub=void 0),i&&(i.prevSub=s,e.nextSub=void 0),n.subs===e&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)Kn(r,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function lr(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let de=!0;const ti=[];function Me(){ti.push(de),de=!1}function Fe(){const e=ti.pop();de=e===void 0?!0:e}function cs(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=z;z=void 0;try{t()}finally{z=n}}}let kt=0;class cr{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class zn{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!z||!de||z===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==z)n=this.activeLink=new cr(z,this),z.deps?(n.prevDep=z.depsTail,z.depsTail.nextDep=n,z.depsTail=n):z.deps=z.depsTail=n,ni(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=z.depsTail,n.nextDep=void 0,z.depsTail.nextDep=n,z.depsTail=n,z.deps===n&&(z.deps=s)}return n}trigger(t){this.version++,kt++,this.notify(t)}notify(t){Ln();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{$n()}}}function ni(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let s=t.deps;s;s=s.nextDep)ni(s)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const Sn=new WeakMap,Be=Symbol(""),Cn=Symbol(""),St=Symbol("");function Z(e,t,n){if(de&&z){let s=Sn.get(e);s||Sn.set(e,s=new Map);let i=s.get(n);i||(s.set(n,i=new zn),i.map=s,i.key=n),i.track()}}function Re(e,t,n,s,i,r){const o=Sn.get(e);if(!o){kt++;return}const l=a=>{a&&a.trigger()};if(Ln(),t==="clear")o.forEach(l);else{const a=A(e),d=a&&Nn(n);if(a&&n==="length"){const f=Number(s);o.forEach((h,q)=>{(q==="length"||q===St||!Oe(q)&&q>=f)&&l(h)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),d&&l(o.get(St)),t){case"add":a?d&&l(o.get("length")):(l(o.get(Be)),it(e)&&l(o.get(Cn)));break;case"delete":a||(l(o.get(Be)),it(e)&&l(o.get(Cn)));break;case"set":it(e)&&l(o.get(Be));break}}$n()}function Ze(e){const t=F(e);return t===e?t:(Z(t,"iterate",St),ue(e)?t:t.map(ge))}function sn(e){return Z(e=F(e),"iterate",St),e}function qe(e,t){return De(e)?lt(Je(e)?ge(t):t):ge(t)}const ar={__proto__:null,[Symbol.iterator](){return yn(this,Symbol.iterator,e=>qe(this,e))},concat(...e){return Ze(this).concat(...e.map(t=>A(t)?Ze(t):t))},entries(){return yn(this,"entries",e=>(e[1]=qe(this,e[1]),e))},every(e,t){return Ae(this,"every",e,t,void 0,arguments)},filter(e,t){return Ae(this,"filter",e,t,n=>n.map(s=>qe(this,s)),arguments)},find(e,t){return Ae(this,"find",e,t,n=>qe(this,n),arguments)},findIndex(e,t){return Ae(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return Ae(this,"findLast",e,t,n=>qe(this,n),arguments)},findLastIndex(e,t){return Ae(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return Ae(this,"forEach",e,t,void 0,arguments)},includes(...e){return _n(this,"includes",e)},indexOf(...e){return _n(this,"indexOf",e)},join(e){return Ze(this).join(e)},lastIndexOf(...e){return _n(this,"lastIndexOf",e)},map(e,t){return Ae(this,"map",e,t,void 0,arguments)},pop(){return gt(this,"pop")},push(...e){return gt(this,"push",e)},reduce(e,...t){return as(this,"reduce",e,t)},reduceRight(e,...t){return as(this,"reduceRight",e,t)},shift(){return gt(this,"shift")},some(e,t){return Ae(this,"some",e,t,void 0,arguments)},splice(...e){return gt(this,"splice",e)},toReversed(){return Ze(this).toReversed()},toSorted(e){return Ze(this).toSorted(e)},toSpliced(...e){return Ze(this).toSpliced(...e)},unshift(...e){return gt(this,"unshift",e)},values(){return yn(this,"values",e=>qe(this,e))}};function yn(e,t,n){const s=sn(e),i=s[t]();return s!==e&&!ue(e)&&(i._next=i.next,i.next=()=>{const r=i._next();return r.done||(r.value=n(r.value)),r}),i}const ur=Array.prototype;function Ae(e,t,n,s,i,r){const o=sn(e),l=o!==e&&!ue(e),a=o[t];if(a!==ur[t]){const h=a.apply(e,r);return l?ge(h):h}let d=n;o!==e&&(l?d=function(h,q){return n.call(this,qe(e,h),q,e)}:n.length>2&&(d=function(h,q){return n.call(this,h,q,e)}));const f=a.call(o,d,s);return l&&i?i(f):f}function as(e,t,n,s){const i=sn(e),r=i!==e&&!ue(e);let o=n,l=!1;i!==e&&(r?(l=s.length===0,o=function(d,f,h){return l&&(l=!1,d=qe(e,d)),n.call(this,d,qe(e,f),h,e)}):n.length>3&&(o=function(d,f,h){return n.call(this,d,f,h,e)}));const a=i[t](o,...s);return l?qe(e,a):a}function _n(e,t,n){const s=F(e);Z(s,"iterate",St);const i=s[t](...n);return(i===-1||i===!1)&&Bn(n[0])?(n[0]=F(n[0]),s[t](...n)):i}function gt(e,t,n=[]){Me(),Ln();const s=F(e)[t].apply(e,n);return $n(),Fe(),s}const fr=Fn("__proto__,__v_isRef,__isVue"),si=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Oe));function dr(e){Oe(e)||(e=String(e));const t=F(this);return Z(t,"has",e),t.hasOwnProperty(e)}class ii{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,s){if(n==="__v_skip")return t.__v_skip;const i=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return r;if(n==="__v_raw")return s===(i?r?xr:ci:r?li:oi).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(s)?t:void 0;const o=A(t);if(!i){let a;if(o&&(a=ar[n]))return a;if(n==="hasOwnProperty")return dr}const l=Reflect.get(t,n,ee(t)?t:s);if((Oe(n)?si.has(n):fr(n))||(i||Z(t,"get",n),r))return l;if(ee(l)){const a=o&&Nn(n)?l:l.value;return i&&H(a)?En(a):a}return H(l)?i?En(l):Vn(l):l}}class ri extends ii{constructor(t=!1){super(!1,t)}set(t,n,s,i){let r=t[n];const o=A(t)&&Nn(n);if(!this._isShallow){const d=De(r);if(!ue(s)&&!De(s)&&(r=F(r),s=F(s)),!o&&ee(r)&&!ee(s))return d||(r.value=s),!0}const l=o?Number(n)<t.length:D(t,n),a=Reflect.set(t,n,s,ee(t)?t:i);return t===F(i)&&a&&(l?Ce(s,r)&&Re(t,"set",n,s):Re(t,"add",n,s)),a}deleteProperty(t,n){const s=D(t,n);t[n];const i=Reflect.deleteProperty(t,n);return i&&s&&Re(t,"delete",n,void 0),i}has(t,n){const s=Reflect.has(t,n);return(!Oe(n)||!si.has(n))&&Z(t,"has",n),s}ownKeys(t){return Z(t,"iterate",A(t)?"length":Be),Reflect.ownKeys(t)}}class gr extends ii{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const hr=new ri,pr=new gr,yr=new ri(!0);const Tn=e=>e,jt=e=>Reflect.getPrototypeOf(e);function _r(e,t,n){return function(...s){const i=this.__v_raw,r=F(i),o=it(r),l=e==="entries"||e===Symbol.iterator&&o,a=e==="keys"&&o,d=i[e](...s),f=n?Tn:t?lt:ge;return!t&&Z(r,"iterate",a?Cn:Be),te(Object.create(d),{next(){const{value:h,done:q}=d.next();return q?{value:h,done:q}:{value:l?[f(h[0]),f(h[1])]:f(h),done:q}}})}}function Ht(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function mr(e,t){const n={get(i){const r=this.__v_raw,o=F(r),l=F(i);e||(Ce(i,l)&&Z(o,"get",i),Z(o,"get",l));const{has:a}=jt(o),d=t?Tn:e?lt:ge;if(a.call(o,i))return d(r.get(i));if(a.call(o,l))return d(r.get(l));r!==o&&r.get(i)},get size(){const i=this.__v_raw;return!e&&Z(F(i),"iterate",Be),i.size},has(i){const r=this.__v_raw,o=F(r),l=F(i);return e||(Ce(i,l)&&Z(o,"has",i),Z(o,"has",l)),i===l?r.has(i):r.has(i)||r.has(l)},forEach(i,r){const o=this,l=o.__v_raw,a=F(l),d=t?Tn:e?lt:ge;return!e&&Z(a,"iterate",Be),l.forEach((f,h)=>i.call(r,d(f),d(h),o))}};return te(n,e?{add:Ht("add"),set:Ht("set"),delete:Ht("delete"),clear:Ht("clear")}:{add(i){const r=F(this),o=jt(r),l=F(i),a=!t&&!ue(i)&&!De(i)?l:i;return o.has.call(r,a)||Ce(i,a)&&o.has.call(r,i)||Ce(l,a)&&o.has.call(r,l)||(r.add(a),Re(r,"add",a,a)),this},set(i,r){!t&&!ue(r)&&!De(r)&&(r=F(r));const o=F(this),{has:l,get:a}=jt(o);let d=l.call(o,i);d||(i=F(i),d=l.call(o,i));const f=a.call(o,i);return o.set(i,r),d?Ce(r,f)&&Re(o,"set",i,r):Re(o,"add",i,r),this},delete(i){const r=F(this),{has:o,get:l}=jt(r);let a=o.call(r,i);a||(i=F(i),a=o.call(r,i)),l&&l.call(r,i);const d=r.delete(i);return a&&Re(r,"delete",i,void 0),d},clear(){const i=F(this),r=i.size!==0,o=i.clear();return r&&Re(i,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(i=>{n[i]=_r(i,e,t)}),n}function Un(e,t){const n=mr(e,t);return(s,i,r)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?s:Reflect.get(D(n,i)&&i in s?n:s,i,r)}const wr={get:Un(!1,!1)},br={get:Un(!1,!0)},vr={get:Un(!0,!1)};const oi=new WeakMap,li=new WeakMap,ci=new WeakMap,xr=new WeakMap;function qr(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Vn(e){return De(e)?e:Wn(e,!1,hr,wr,oi)}function kr(e){return Wn(e,!1,yr,br,li)}function En(e){return Wn(e,!0,pr,vr,ci)}function Wn(e,t,n,s,i){if(!H(e)||e.__v_raw&&!(t&&e.__v_isReactive)||e.__v_skip||!Object.isExtensible(e))return e;const r=i.get(e);if(r)return r;const o=qr(Ji(e));if(o===0)return e;const l=new Proxy(e,o===2?s:n);return i.set(e,l),l}function Je(e){return De(e)?Je(e.__v_raw):!!(e&&e.__v_isReactive)}function De(e){return!!(e&&e.__v_isReadonly)}function ue(e){return!!(e&&e.__v_isShallow)}function Bn(e){return e?!!e.__v_raw:!1}function F(e){const t=e&&e.__v_raw;return t?F(t):e}function Sr(e){return!D(e,"__v_skip")&&Object.isExtensible(e)&&Vs(e,"__v_skip",!0),e}const ge=e=>H(e)?Vn(e):e,lt=e=>H(e)?En(e):e;function ee(e){return e?e.__v_isRef===!0:!1}function Lt(e){return Cr(e,!1)}function Cr(e,t){return ee(e)?e:new Tr(e,t)}class Tr{constructor(t,n){this.dep=new zn,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:F(t),this._value=n?t:ge(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,s=this.__v_isShallow||ue(t)||De(t);t=s?t:F(t),Ce(t,n)&&(this._rawValue=t,this._value=s?t:ge(t),this.dep.trigger())}}function Er(e){return ee(e)?e.value:e}const Or={get:(e,t,n)=>t==="__v_raw"?e:Er(Reflect.get(e,t,n)),set:(e,t,n,s)=>{const i=e[t];return ee(i)&&!ee(n)?(i.value=n,!0):Reflect.set(e,t,n,s)}};function ai(e){return Je(e)?e:new Proxy(e,Or)}class Ar{constructor(t,n,s){this.fn=t,this.setter=n,this._value=void 0,this.dep=new zn(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=kt-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&z!==this)return Qs(this,!0),!0}get value(){const t=this.dep.track();return ei(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Pr(e,t,n=!1){let s,i;return I(e)?s=e:(s=e.get,i=e.set),new Ar(s,i,n)}const $t={},Vt=new WeakMap;let We;function Ir(e,t=!1,n=We){if(n){let s=Vt.get(n);s||Vt.set(n,s=[]),s.push(e)}}function Rr(e,t,n=U){const{immediate:s,deep:i,once:r,scheduler:o,augmentJob:l,call:a}=n,d=E=>i?E:ue(E)||i===!1||i===0?Le(E,1):Le(E);let f,h,q,k,P=!1,S=!1;if(ee(e)?(h=()=>e.value,P=ue(e)):Je(e)?(h=()=>d(e),P=!0):A(e)?(S=!0,P=e.some(E=>Je(E)||ue(E)),h=()=>e.map(E=>{if(ee(E))return E.value;if(Je(E))return d(E);if(I(E))return a?a(E,2):E()})):I(e)?t?h=a?()=>a(e,2):e:h=()=>{if(q){Me();try{q()}finally{Fe()}}const E=We;We=f;try{return a?a(e,3,[k]):e(k)}finally{We=E}}:h=Ee,t&&i){const E=h,G=i===!0?1/0:i;h=()=>Le(E(),G)}const V=or(),$=()=>{f.stop(),V&&V.active&&Dn(V.effects,f)};if(r&&t){const E=t;t=(...G)=>{const pe=E(...G);return $(),pe}}let R=S?new Array(e.length).fill($t):$t;const N=E=>{if(!(!(f.flags&1)||!f.dirty&&!E))if(t){const G=f.run();if(E||i||P||(S?G.some((pe,ye)=>Ce(pe,R[ye])):Ce(G,R))){q&&q();const pe=We;We=f;try{const ye=[G,R===$t?void 0:S&&R[0]===$t?[]:R,k];R=G,a?a(t,3,ye):t(...ye)}finally{We=pe}}}else f.run()};return l&&l(N),f=new Gs(h),f.scheduler=o?()=>o(N,!1):N,k=E=>Ir(E,!1,f),q=f.onStop=()=>{const E=Vt.get(f);if(E){if(a)a(E,4);else for(const G of E)G();Vt.delete(f)}},t?s?N(!0):R=f.run():o?o(N.bind(null,!0),!0):f.run(),$.pause=f.pause.bind(f),$.resume=f.resume.bind(f),$.stop=$,$}function Le(e,t=1/0,n){if(t<=0||!H(e)||e.__v_skip||(n=n||new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,ee(e))Le(e.value,t,n);else if(A(e))for(let s=0;s<e.length;s++)Le(e[s],t,n);else if(Ls(e)||it(e))e.forEach(s=>{Le(s,t,n)});else if(zs(e)){for(const s in e)Le(e[s],t,n);for(const s of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,s)&&Le(e[s],t,n)}return e}/**
* @vue/runtime-core v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Pt(e,t,n,s){try{return s?e(...s):e()}catch(i){rn(i,t,n)}}function he(e,t,n,s){if(I(e)){const i=Pt(e,t,n,s);return i&&$s(i)&&i.catch(r=>{rn(r,t,n)}),i}if(A(e)){const i=[];for(let r=0;r<e.length;r++)i.push(he(e[r],t,n,s));return i}}function rn(e,t,n,s=!0){const i=t?t.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||U;if(t){let l=t.parent;const a=t.proxy,d=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const f=l.ec;if(f){for(let h=0;h<f.length;h++)if(f[h](e,a,d)===!1)return}l=l.parent}if(r){Me(),Pt(r,null,10,[e,a,d]),Fe();return}}Mr(e,n,i,s,o)}function Mr(e,t,n,s=!0,i=!1){if(i)throw e;console.error(e)}const ie=[];let xe=-1;const rt=[];let He=null,nt=0;const ui=Promise.resolve();let Wt=null;function Fr(e){const t=Wt||ui;return e?t.then(this?e.bind(this):e):t}function Dr(e){let t=xe+1,n=ie.length;for(;t<n;){const s=t+n>>>1,i=ie[s],r=Ct(i);r<e||r===e&&i.flags&2?t=s+1:n=s}return t}function Jn(e){if(!(e.flags&1)){const t=Ct(e),n=ie[ie.length-1];!n||!(e.flags&2)&&t>=Ct(n)?ie.push(e):ie.splice(Dr(t),0,e),e.flags|=1,fi()}}function fi(){Wt||(Wt=ui.then(gi))}function Nr(e){if(!A(e))He&&e.id===-1?He.splice(nt+1,0,e):e.flags&1||(rt.push(e),e.flags|=1);else for(let t=0;t<e.length;t++)rt.push(e[t]);fi()}function us(e,t,n=xe+1){for(;n<ie.length;n++){const s=ie[n];if(s&&s.flags&2){if(e&&s.id!==e.uid)continue;ie.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function di(e){if(rt.length){const t=[...new Set(rt)].sort((n,s)=>Ct(n)-Ct(s));if(rt.length=0,He){for(let n=0;n<t.length;n++)He.push(t[n]);return}for(He=t,nt=0;nt<He.length;nt++){const n=He[nt];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}He=null,nt=0}}const Ct=e=>e.id==null?e.flags&2?-1:1/0:e.id;function gi(e){try{for(xe=0;xe<ie.length;xe++){const t=ie[xe];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Pt(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;xe<ie.length;xe++){const t=ie[xe];t&&(t.flags&=-2)}xe=-1,ie.length=0,di(),Wt=null,(ie.length||rt.length)&&gi()}}let Te=null,hi=null;function Bt(e){const t=Te;return Te=e,hi=e&&e.type.__scopeId||null,t}function jr(e,t=Te,n){if(!t||e._n)return e;const s=(...i)=>{s._d&&vs(-1);const r=Bt(t),o=Ge.length;let l;try{l=e(...i)}finally{for(let a=Ge.length;a>o;a--)Hi();Bt(r),s._d&&vs(1)}return l};return s._n=!0,s._c=!0,s._d=!0,s}function Ue(e,t,n,s){const i=e.dirs,r=t&&t.dirs;for(let o=0;o<i.length;o++){const l=i[o];r&&(l.oldValue=r[o].value);let a=l.dir[s];a&&(Me(),he(a,n,8,[e.el,l,e,t]),Fe())}}function Hr(e,t){if(re){let n=re.provides;const s=re.parent&&re.parent.provides;s===n&&(n=re.provides=Object.create(s)),n[e]=t}}function Kt(e,t,n=!1){const s=Ho();if(s||ot){let i=ot?ot._context.provides:s?s.parent==null||s.ce?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(i&&e in i)return i[e];if(arguments.length>1)return n&&I(t)?t.call(s&&s.proxy):t}}const Lr=Symbol.for("v-scx"),$r=()=>Kt(Lr);function zt(e,t,n){return pi(e,t,n)}function pi(e,t,n=U){const{immediate:s,deep:i,flush:r,once:o}=n,l=te({},n),a=t&&s||!t&&r!=="post";let d;if(Ot){if(r==="sync"){const k=$r();d=k.__watcherHandles||(k.__watcherHandles=[])}else if(!a){const k=()=>{};return k.stop=Ee,k.resume=Ee,k.pause=Ee,k}}const f=re;l.call=(k,P,S)=>he(k,f,P,S);let h=!1;r==="post"?l.scheduler=k=>{oe(k,f&&f.suspense)}:r!=="sync"&&(h=!0,l.scheduler=(k,P)=>{P?k():Jn(k)}),l.augmentJob=k=>{t&&(k.flags|=4),h&&(k.flags|=2,f&&(k.id=f.uid,k.i=f))};const q=Rr(e,t,l);return Ot&&(d?d.push(q):a&&q()),q}function Kr(e,t,n){const s=this.proxy,i=B(e)?e.includes(".")?yi(s,e):()=>s[e]:e.bind(s,s);let r;I(t)?r=t:(r=t.handler,n=t);const o=It(this),l=pi(i,r.bind(s),n);return o(),l}function yi(e,t){const n=t.split(".");return()=>{let s=e;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}const zr=Symbol("_vte"),on=e=>e.__isTeleport,mn=Symbol("_leaveCb");function Ur(e){let t=e[0];if(e.length>1){for(const n of e)if(n.type!==Qe){t=n;break}}return t}function _i(e){if(!Yn(e))return on(e.type)&&e.children?Ur(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&I(n.default))return n.default()}}function Gn(e,t){if(e.shapeFlag&6&&e.component){e.transition=t;const n=e.component.subTree;Gn(on(n.type)&&_i(n)||n,t)}else e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function mi(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function fs(e,t){let n;return!!((n=Object.getOwnPropertyDescriptor(e,t))&&!n.configurable)}const Jt=new WeakMap;function vt(e,t,n,s,i=!1){if(A(e)){e.forEach((S,V)=>vt(S,t&&(A(t)?t[V]:t),n,s,i));return}if(xt(s)&&!i){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&vt(e,t,n,s.component.subTree);return}const r=s.shapeFlag&4?Zn(s.component):s.el,o=i?null:r,{i:l,r:a}=e,d=t&&t.r,f=l.refs===U?l.refs={}:l.refs,h=l.setupState,q=F(h),k=h===U?Hs:S=>fs(f,S)?!1:D(q,S),P=(S,V)=>!(V&&fs(f,V));if(d!=null&&d!==a){if(ds(t),B(d))f[d]=null,k(d)&&(h[d]=null);else if(ee(d)){const S=t;P(d,S.k)&&(d.value=null),S.k&&(f[S.k]=null)}}if(I(a))Pt(a,l,12,[o,f]);else{const S=B(a),V=ee(a);if(S||V){const $=()=>{if(e.f){const R=S?k(a)?h[a]:f[a]:P()||!e.k?a.value:f[e.k];if(i)A(R)&&Dn(R,r);else if(A(R))R.includes(r)||R.push(r);else if(S)f[a]=[r],k(a)&&(h[a]=f[a]);else{const N=[r];P(a,e.k)&&(a.value=N),e.k&&(f[e.k]=N)}}else S?(f[a]=o,k(a)&&(h[a]=o)):V&&(P(a,e.k)&&(a.value=o),e.k&&(f[e.k]=o))};if(o){const R=()=>{$(),Jt.delete(e)};R.id=-1,Jt.set(e,R),oe(R,n)}else ds(e),$()}}}function ds(e){const t=Jt.get(e);t&&(t.flags|=8,Jt.delete(e))}tn().requestIdleCallback;tn().cancelIdleCallback;const xt=e=>!!e.type.__asyncLoader,Yn=e=>e.type.__isKeepAlive;function Vr(e,t){wi(e,"a",t)}function Wr(e,t){wi(e,"da",t)}function wi(e,t,n=re){const s=e.__wdc||(e.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(ln(t,s,n),n){let i=n.parent;for(;i&&i.parent;)Yn(i.parent.vnode)&&Br(s,t,n,i),i=i.parent}}function Br(e,t,n,s){const i=ln(t,e,s,!0);vi(()=>{Dn(s[t],i)},n)}function ln(e,t,n=re,s=!1){if(n){const i=n[e]||(n[e]=[]),r=t.__weh||(t.__weh=(...o)=>{Me();const l=It(n),a=he(t,n,e,o);return l(),Fe(),a});return s?i.unshift(r):i.push(r),r}}const Ne=e=>(t,n=re)=>{(!Ot||e==="sp")&&ln(e,(...s)=>t(...s),n)},Jr=Ne("bm"),bi=Ne("m"),Gr=Ne("bu"),Yr=Ne("u"),Qr=Ne("bum"),vi=Ne("um"),Xr=Ne("sp"),Zr=Ne("rtg"),eo=Ne("rtc");function to(e,t=re){ln("ec",e,t)}const no=Symbol.for("v-ndc");function so(e,t,n,s){let i;const r=n,o=A(e);if(o||B(e)){const l=o&&Je(e);let a=!1,d=!1;l&&(a=!ue(e),d=De(e),e=sn(e)),i=new Array(e.length);for(let f=0,h=e.length;f<h;f++)i[f]=t(a?d?lt(ge(e[f])):ge(e[f]):e[f],f,void 0,r)}else if(typeof e=="number"){i=new Array(e);for(let l=0;l<e;l++)i[l]=t(l+1,l,void 0,r)}else if(H(e))if(e[Symbol.iterator])i=Array.from(e,(l,a)=>t(l,a,void 0,r));else{const l=Object.keys(e);i=new Array(l.length);for(let a=0,d=l.length;a<d;a++){const f=l[a];i[a]=t(e[f],f,a,r)}}else i=[];return i}const On=e=>e?Ki(e)?Zn(e):On(e.parent):null,qt=te(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>On(e.parent),$root:e=>On(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>qi(e),$forceUpdate:e=>e.f||(e.f=()=>{Jn(e.update)}),$nextTick:e=>e.n||(e.n=Fr.bind(e.proxy)),$watch:e=>Kr.bind(e)}),wn=(e,t)=>e!==U&&!e.__isScriptSetup&&D(e,t),io={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:l,appContext:a}=e;if(t[0]!=="$"){const q=o[t];if(q!==void 0)switch(q){case 1:return s[t];case 2:return i[t];case 4:return n[t];case 3:return r[t]}else{if(wn(s,t))return o[t]=1,s[t];if(i!==U&&D(i,t))return o[t]=2,i[t];if(D(r,t))return o[t]=3,r[t];if(n!==U&&D(n,t))return o[t]=4,n[t];An&&(o[t]=0)}}const d=qt[t];let f,h;if(d)return t==="$attrs"&&Z(e.attrs,"get",""),d(e);if((f=l.__cssModules)&&(f=f[t]))return f;if(n!==U&&D(n,t))return o[t]=4,n[t];if(h=a.config.globalProperties,D(h,t))return h[t]},set({_:e},t,n){const{data:s,setupState:i,ctx:r}=e;return wn(i,t)?(i[t]=n,!0):s!==U&&D(s,t)?(s[t]=n,!0):D(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(r[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:s,appContext:i,props:r,type:o}},l){let a;return!!(n[l]||e!==U&&l[0]!=="$"&&D(e,l)||wn(t,l)||D(r,l)||D(s,l)||D(qt,l)||D(i.config.globalProperties,l)||(a=o.__cssModules)&&a[l])},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:D(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function gs(e){return A(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let An=!0;function ro(e){const t=qi(e),n=e.proxy,s=e.ctx;An=!1,t.beforeCreate&&hs(t.beforeCreate,e,"bc");const{data:i,computed:r,methods:o,watch:l,provide:a,inject:d,created:f,beforeMount:h,mounted:q,beforeUpdate:k,updated:P,activated:S,deactivated:V,beforeDestroy:$,beforeUnmount:R,destroyed:N,unmounted:E,render:G,renderTracked:pe,renderTriggered:ye,errorCaptured:je,serverPrefetch:Rt,expose:$e,inheritAttrs:at,components:Mt,directives:Ft,filters:un}=t;if(d&&oo(d,s,null),o)for(const W in o){const K=o[W];I(K)&&(s[W]=K.bind(n))}if(i){const W=i.call(n,n);H(W)&&(e.data=Vn(W))}if(An=!0,r)for(const W in r){const K=r[W],Ke=I(K)?K.bind(n,n):I(K.get)?K.get.bind(n,n):Ee,Dt=!I(K)&&I(K.set)?K.set.bind(n):Ee,ze=yt({get:Ke,set:Dt});Object.defineProperty(s,W,{enumerable:!0,configurable:!0,get:()=>ze.value,set:_e=>ze.value=_e})}if(l)for(const W in l)xi(l[W],s,n,W);if(a){const W=I(a)?a.call(n):a;Reflect.ownKeys(W).forEach(K=>{Hr(K,W[K])})}f&&hs(f,e,"c");function ne(W,K){A(K)?K.forEach(Ke=>W(Ke.bind(n))):K&&W(K.bind(n))}if(ne(Jr,h),ne(bi,q),ne(Gr,k),ne(Yr,P),ne(Vr,S),ne(Wr,V),ne(to,je),ne(eo,pe),ne(Zr,ye),ne(Qr,R),ne(vi,E),ne(Xr,Rt),A($e))if($e.length){const W=e.exposed||(e.exposed={});$e.forEach(K=>{Object.defineProperty(W,K,{get:()=>n[K],set:Ke=>n[K]=Ke,enumerable:!0})})}else e.exposed||(e.exposed={});G&&e.render===Ee&&(e.render=G),at!=null&&(e.inheritAttrs=at),Mt&&(e.components=Mt),Ft&&(e.directives=Ft),Rt&&mi(e)}function oo(e,t,n=Ee){A(e)&&(e=Pn(e));for(const s in e){const i=e[s];let r;H(i)?"default"in i?r=Kt(i.from||s,i.default,!0):r=Kt(i.from||s):r=Kt(i),ee(r)?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):t[s]=r}}function hs(e,t,n){he(A(e)?e.map(s=>s.bind(t.proxy)):e.bind(t.proxy),t,n)}function xi(e,t,n,s){let i=s.includes(".")?yi(n,s):()=>n[s];if(B(e)){const r=t[e];I(r)&&zt(i,r)}else if(I(e))zt(i,e.bind(n));else if(H(e))if(A(e))e.forEach(r=>xi(r,t,n,s));else{const r=I(e.handler)?e.handler.bind(n):t[e.handler];I(r)&&zt(i,r,e)}}function qi(e){const t=e.type,{mixins:n,extends:s}=t,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=e.appContext,l=r.get(t);let a;return l?a=l:!i.length&&!n&&!s?a=t:(a={},i.length&&i.forEach(d=>Gt(a,d,o,!0)),Gt(a,t,o)),H(t)&&r.set(t,a),a}function Gt(e,t,n,s=!1){const{mixins:i,extends:r}=t;r&&Gt(e,r,n,!0),i&&i.forEach(o=>Gt(e,o,n,!0));for(const o in t)if(!(s&&o==="expose")){const l=lo[o]||n&&n[o];e[o]=l?l(e[o],t[o]):t[o]}return e}const lo={data:ps,props:ys,emits:ys,methods:pt,computed:pt,beforeCreate:se,created:se,beforeMount:se,mounted:se,beforeUpdate:se,updated:se,beforeDestroy:se,beforeUnmount:se,destroyed:se,unmounted:se,activated:se,deactivated:se,errorCaptured:se,serverPrefetch:se,components:pt,directives:pt,watch:ao,provide:ps,inject:co};function ps(e,t){return t?e?function(){return te(I(e)?e.call(this,this):e,I(t)?t.call(this,this):t)}:t:e}function co(e,t){return pt(Pn(e),Pn(t))}function Pn(e){if(A(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function se(e,t){return e?[...new Set([].concat(e,t))]:t}function pt(e,t){return e?te(Object.create(null),e,t):t}function ys(e,t){return e?A(e)&&A(t)?[...new Set([...e,...t])]:te(Object.create(null),gs(e),gs(t??{})):t}function ao(e,t){if(!e)return t;if(!t)return e;const n=te(Object.create(null),e);for(const s in t)n[s]=se(e[s],t[s]);return n}function ki(){return{app:null,config:{isNativeTag:Hs,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let uo=0;function fo(e,t){return function(s,i=null){I(s)||(s=te({},s)),i!=null&&!H(i)&&(i=null);const r=ki(),o=new WeakSet,l=[];let a=!1;const d=r.app={_uid:uo++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:Vo,get config(){return r.config},set config(f){},use(f,...h){return o.has(f)||(f&&I(f.install)?(o.add(f),f.install(d,...h)):I(f)&&(o.add(f),f(d,...h))),d},mixin(f){return r.mixins.includes(f)||r.mixins.push(f),d},component(f,h){return h?(r.components[f]=h,d):r.components[f]},directive(f,h){return h?(r.directives[f]=h,d):r.directives[f]},mount(f,h,q){if(!a){const k=d._ceVNode||Ye(s,i);return k.appContext=r,q===!0?q="svg":q===!1&&(q=void 0),e(k,f,q),a=!0,d._container=f,f.__vue_app__=d,Zn(k.component)}},onUnmount(f){l.push(f)},unmount(){a&&(he(l,d._instance,16),e(null,d._container),delete d._container.__vue_app__)},provide(f,h){return r.provides[f]=h,d},runWithContext(f){const h=ot;ot=d;try{return f()}finally{ot=h}}};return d}}let ot=null;const go=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${fe(t)}Modifiers`]||e[`${Xe(t)}Modifiers`];function ho(e,t,...n){if(e.isUnmounted)return;const s=e.vnode.props||U;let i=n;const r=t.startsWith("update:"),o=r&&go(s,t.slice(7));o&&(o.trim&&(i=n.map(f=>B(f)?f.trim():f)),o.number&&(i=n.map(Qi)));let l,a=s[l=dn(t)]||s[l=dn(fe(t))];!a&&r&&(a=s[l=dn(Xe(t))]),a&&he(a,e,6,i);const d=s[l+"Once"];if(d){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,he(d,e,6,i)}}const po=new WeakMap;function Si(e,t,n=!1){const s=n?po:t.emitsCache,i=s.get(e);if(i!==void 0)return i;const r=e.emits;let o={},l=!1;if(!I(e)){const a=d=>{const f=Si(d,t,!0);f&&(l=!0,te(o,f))};!n&&t.mixins.length&&t.mixins.forEach(a),e.extends&&a(e.extends),e.mixins&&e.mixins.forEach(a)}return!r&&!l?(H(e)&&s.set(e,null),null):(A(r)?r.forEach(a=>o[a]=null):te(o,r),H(e)&&s.set(e,o),o)}function cn(e,t){return!e||!Xt(t)?!1:(t=t.slice(2),t=t==="Once"?t:t.replace(/Once$/,""),D(e,t[0].toLowerCase()+t.slice(1))||D(e,Xe(t))||D(e,t))}function _s(e){const{type:t,vnode:n,proxy:s,withProxy:i,propsOptions:[r],slots:o,attrs:l,emit:a,render:d,renderCache:f,props:h,data:q,setupState:k,ctx:P,inheritAttrs:S}=e,V=Bt(e);let $,R;try{if(n.shapeFlag&4){const E=i||s,G=E;$=Se(d.call(G,E,f,h,k,q,P)),R=l}else{const E=t;$=Se(E.length>1?E(h,{attrs:l,slots:o,emit:a}):E(h,null)),R=t.props?l:yo(l)}}catch(E){Ge.length=0,rn(E,e,1),$=Ye(Qe)}let N=$;if(R&&S!==!1){const E=Object.keys(R),{shapeFlag:G}=N;E.length&&G&7&&(r&&E.some(Zt)&&(R=_o(R,r)),N=ct(N,R,!1,!0))}if(n.dirs&&(N=ct(N,null,!1,!0),N.dirs=N.dirs?N.dirs.concat(n.dirs):n.dirs),n.transition){const E=on(N.type)&&_i(N)||N;Gn(E,n.transition)}return $=N,Bt(V),$}const yo=e=>{let t;for(const n in e)(n==="class"||n==="style"||Xt(n))&&((t||(t={}))[n]=e[n]);return t},_o=(e,t)=>{const n={};for(const s in e)(!Zt(s)||!(s.slice(9)in t))&&(n[s]=e[s]);return n};function mo(e,t,n){const{props:s,children:i,component:r}=e,{props:o,children:l,patchFlag:a}=t,d=r.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return s?ms(s,o,d):!!o;if(a&8){const f=t.dynamicProps;for(let h=0;h<f.length;h++){const q=f[h];if(Ci(o,s,q)&&!cn(d,q))return!0}}}else return(i||l)&&(!l||!l.$stable)?!0:s===o?!1:s?o?ms(s,o,d):!0:!!o;return!1}function ms(e,t,n){const s=Object.keys(t);if(s.length!==Object.keys(e).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(Ci(t,e,r)&&!cn(n,r))return!0}return!1}function Ci(e,t,n){const s=e[n],i=t[n];return n==="style"&&H(s)&&H(i)?!Hn(s,i):s!==i}function wo({vnode:e,parent:t,suspense:n},s){for(;t;){const i=t.subTree;if(i.suspense&&i.suspense.activeBranch===e&&(i.suspense.vnode.el=i.el=s,e=i),i===e)(e=t.vnode).el=s,t=t.parent;else break}n&&n.activeBranch===e&&(n.vnode.el=s)}const Ti={},Ei=()=>Object.create(Ti),Oi=e=>Object.getPrototypeOf(e)===Ti;function bo(e,t,n,s=!1){const i={},r=Ei();e.propsDefaults=Object.create(null),Ai(e,t,i,r);for(const o in e.propsOptions[0])o in i||(i[o]=void 0);n?e.props=s?i:kr(i):e.type.props?e.props=i:e.props=r,e.attrs=r}function vo(e,t,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=e,l=F(i),[a]=e.propsOptions;let d=!1;if((s||o>0)&&!(o&16)){if(o&8){const f=e.vnode.dynamicProps;for(let h=0;h<f.length;h++){let q=f[h];if(cn(e.emitsOptions,q))continue;const k=t[q];if(a)if(D(r,q))k!==r[q]&&(r[q]=k,d=!0);else{const P=fe(q);i[P]=In(a,l,P,k,e,!1)}else k!==r[q]&&(r[q]=k,d=!0)}}}else{Ai(e,t,i,r)&&(d=!0);let f;for(const h in l)(!t||!D(t,h)&&((f=Xe(h))===h||!D(t,f)))&&(a?n&&(n[h]!==void 0||n[f]!==void 0)&&(i[h]=In(a,l,h,void 0,e,!0)):delete i[h]);if(r!==l)for(const h in r)(!t||!D(t,h))&&(delete r[h],d=!0)}d&&Re(e.attrs,"set","")}function Ai(e,t,n,s){const[i,r]=e.propsOptions;let o=!1,l;if(t)for(let a in t){if(mt(a))continue;const d=t[a];let f;i&&D(i,f=fe(a))?!r||!r.includes(f)?n[f]=d:(l||(l={}))[f]=d:cn(e.emitsOptions,a)||(!(a in s)||d!==s[a])&&(s[a]=d,o=!0)}if(r){const a=F(n),d=l||U;for(let f=0;f<r.length;f++){const h=r[f];n[h]=In(i,a,h,d[h],e,!D(d,h))}}return o}function In(e,t,n,s,i,r){const o=e[n];if(o!=null){const l=D(o,"default");if(l&&s===void 0){const a=o.default;if(o.type!==Function&&!o.skipFactory&&I(a)){const{propsDefaults:d}=i;if(n in d)s=d[n];else{const f=It(i);s=d[n]=a.call(null,t),f()}}else s=a;i.ce&&i.ce._setProp(n,s)}o[0]&&(r&&!l?s=!1:o[1]&&(s===""||s===Xe(n))&&(s=!0))}return s}const xo=new WeakMap;function Pi(e,t,n=!1){const s=n?xo:t.propsCache,i=s.get(e);if(i)return i;const r=e.props,o={},l=[];let a=!1;if(!I(e)){const f=h=>{a=!0;const[q,k]=Pi(h,t,!0);te(o,q),k&&l.push(...k)};!n&&t.mixins.length&&t.mixins.forEach(f),e.extends&&f(e.extends),e.mixins&&e.mixins.forEach(f)}if(!r&&!a)return H(e)&&s.set(e,st),st;if(A(r))for(let f=0;f<r.length;f++){const h=fe(r[f]);ws(h)&&(o[h]=U)}else if(r)for(const f in r){const h=fe(f);if(ws(h)){const q=r[f],k=o[h]=A(q)||I(q)?{type:q}:te({},q),P=k.type;let S=!1,V=!0;if(A(P))for(let $=0;$<P.length;++$){const R=P[$],N=I(R)&&R.name;if(N==="Boolean"){S=!0;break}else N==="String"&&(V=!1)}else S=I(P)&&P.name==="Boolean";k[0]=S,k[1]=V,(S||D(k,"default"))&&l.push(h)}}const d=[o,l];return H(e)&&s.set(e,d),d}function ws(e){return e[0]!=="$"&&!mt(e)}const Qn=e=>e==="_"||e==="_ctx"||e==="$stable",Xn=e=>A(e)?e.map(Se):[Se(e)],qo=(e,t,n)=>{if(t._n)return t;const s=jr((...i)=>Xn(t(...i)),n);return s._c=!1,s},Ii=(e,t,n)=>{const s=e._ctx;for(const i in e){if(Qn(i))continue;const r=e[i];if(I(r))t[i]=qo(i,r,s);else if(r!=null){const o=Xn(r);t[i]=()=>o}}},Ri=(e,t)=>{const n=Xn(t);e.slots.default=()=>n},Mi=(e,t,n)=>{for(const s in t)(n||!Qn(s))&&(e[s]=t[s])},ko=(e,t,n)=>{const s=e.slots=Ei();if(e.vnode.shapeFlag&32){const i=t._;i?(Mi(s,t,n),n&&Vs(s,"_",i,!0)):Ii(t,s)}else t&&Ri(e,t)},So=(e,t,n)=>{const{vnode:s,slots:i}=e;let r=!0,o=U;if(s.shapeFlag&32){const l=t._;l?n&&l===1?r=!1:Mi(i,t,n):(r=!t.$stable,Ii(t,i)),o=t}else t&&(Ri(e,t),o={default:1});if(r)for(const l in i)!Qn(l)&&o[l]==null&&delete i[l]},oe=Ao;function Co(e){return To(e)}function To(e,t){const n=tn();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:l,createComment:a,setText:d,setElementText:f,parentNode:h,nextSibling:q,setScopeId:k=Ee,insertStaticContent:P}=e,S=(c,u,g,m=null,_=null,p=null,v=void 0,b=null,w=!!u.dynamicChildren)=>{if(c===u)return;c&&!ht(c,u)&&(m=Nt(c),_e(c,_,p,!0),c=null),u.patchFlag===-2&&(w=!1,u.dynamicChildren=null);const{type:y,ref:T,shapeFlag:x}=u;switch(y){case an:V(c,u,g,m);break;case Qe:$(c,u,g,m);break;case vn:c==null&&R(u,g,m,v);break;case ke:Mt(c,u,g,m,_,p,v,b,w);break;default:x&1?G(c,u,g,m,_,p,v,b,w):x&6?Ft(c,u,g,m,_,p,v,b,w):(x&64||x&128)&&y.process(c,u,g,m,_,p,v,b,w,ft)}T!=null&&_?vt(T,c&&c.ref,p,u||c,!u):T==null&&c&&c.ref!=null&&vt(c.ref,null,p,c,!0)},V=(c,u,g,m)=>{if(c==null)s(u.el=l(u.children),g,m);else{const _=u.el=c.el;u.children!==c.children&&d(_,u.children)}},$=(c,u,g,m)=>{c==null?s(u.el=a(u.children||""),g,m):u.el=c.el},R=(c,u,g,m)=>{[c.el,c.anchor]=P(c.children,u,g,m,c.el,c.anchor)},N=({el:c,anchor:u},g,m)=>{let _;for(;c&&c!==u;)_=q(c),s(c,g,m),c=_;s(u,g,m)},E=({el:c,anchor:u})=>{let g;for(;c&&c!==u;)g=q(c),i(c),c=g;i(u)},G=(c,u,g,m,_,p,v,b,w)=>{if(u.type==="svg"?v="svg":u.type==="math"&&(v="mathml"),c==null)pe(u,g,m,_,p,v,b,w);else{const y=c.el&&c.el._isVueCE?c.el:null;try{y&&y._beginPatch(),Rt(c,u,_,p,v,b,w)}finally{y&&y._endPatch()}}},pe=(c,u,g,m,_,p,v,b)=>{let w,y;const{props:T,shapeFlag:x,transition:C,dirs:O}=c;if(w=c.el=o(c.type,p,T&&T.is,T),x&8?f(w,c.children):x&16&&je(c.children,w,null,m,_,bn(c,p),v,b),O&&Ue(c,null,m,"created"),ye(w,c,c.scopeId,v,m),T){for(const L in T)L!=="value"&&!mt(L)&&r(w,L,null,T[L],p,m);"value"in T&&r(w,"value",null,T.value,p),(y=T.onVnodeBeforeMount)&&ve(y,m,c)}O&&Ue(c,null,m,"beforeMount");const M=Eo(_,C);M&&C.beforeEnter(w),s(w,u,g),((y=T&&T.onVnodeMounted)||M||O)&&oe(()=>{try{y&&ve(y,m,c),M&&C.enter(w),O&&Ue(c,null,m,"mounted")}finally{}},_)},ye=(c,u,g,m,_)=>{if(g&&k(c,g),m)for(let p=0;p<m.length;p++)k(c,m[p]);if(_){let p=_.subTree;if(u===p||ji(p.type)&&(p.ssContent===u||p.ssFallback===u)){const v=_.vnode;ye(c,v,v.scopeId,v.slotScopeIds,_.parent)}}},je=(c,u,g,m,_,p,v,b,w=0)=>{for(let y=w;y<c.length;y++){const T=c[y]=b?Ie(c[y]):Se(c[y]);S(null,T,u,g,m,_,p,v,b)}},Rt=(c,u,g,m,_,p,v)=>{const b=u.el=c.el;let{patchFlag:w,dynamicChildren:y,dirs:T}=u;w|=c.patchFlag&16;const x=c.props||U,C=u.props||U;let O;if(g&&Ve(g,!1),(O=C.onVnodeBeforeUpdate)&&ve(O,g,u,c),T&&Ue(u,c,g,"beforeUpdate"),g&&Ve(g,!0),y&&(!c.dynamicChildren||c.dynamicChildren.length!==y.length)&&(w=0,v=!1,y=null),(x.innerHTML&&C.innerHTML==null||x.textContent&&C.textContent==null)&&f(b,""),y?$e(c.dynamicChildren,y,b,g,m,bn(u,_),p):v||K(c,u,b,null,g,m,bn(u,_),p,!1),w>0){if(w&16)at(b,x,C,g,_);else if(w&2&&x.class!==C.class&&r(b,"class",null,C.class,_),w&4&&r(b,"style",x.style,C.style,_),w&8){const M=u.dynamicProps;for(let L=0;L<M.length;L++){const j=M[L],J=x[j],Q=C[j];(Q!==J||j==="value")&&r(b,j,J,Q,_,g)}}w&1&&c.children!==u.children&&f(b,u.children)}else!v&&y==null&&at(b,x,C,g,_);((O=C.onVnodeUpdated)||T)&&oe(()=>{O&&ve(O,g,u,c),T&&Ue(u,c,g,"updated")},m)},$e=(c,u,g,m,_,p,v)=>{for(let b=0;b<u.length;b++){const w=c[b],y=u[b],T=w.el&&(w.type===ke||!ht(w,y)||w.shapeFlag&198)?h(w.el):g;S(w,y,T,null,m,_,p,v,!0)}},at=(c,u,g,m,_)=>{if(u!==g){if(u!==U)for(const p in u)!mt(p)&&!(p in g)&&r(c,p,u[p],null,_,m);for(const p in g){if(mt(p))continue;const v=g[p],b=u[p];v!==b&&p!=="value"&&r(c,p,b,v,_,m)}"value"in g&&r(c,"value",u.value,g.value,_)}},Mt=(c,u,g,m,_,p,v,b,w)=>{const y=u.el=c?c.el:l(""),T=u.anchor=c?c.anchor:l("");let{patchFlag:x,dynamicChildren:C,slotScopeIds:O}=u;O&&(b=b?b.concat(O):O),c==null?(s(y,g,m),s(T,g,m),je(u.children||[],g,T,_,p,v,b,w)):x>0&&x&64&&C&&c.dynamicChildren&&c.dynamicChildren.length===C.length?($e(c.dynamicChildren,C,g,_,p,v,b),(u.key!=null||_&&u===_.subTree)&&Fi(c,u,!0)):K(c,u,g,T,_,p,v,b,w)},Ft=(c,u,g,m,_,p,v,b,w)=>{u.slotScopeIds=b,c==null?u.shapeFlag&512?_.ctx.activate(u,g,m,v,w):un(u,g,m,_,p,v,w):es(c,u,w)},un=(c,u,g,m,_,p,v)=>{const b=c.component=jo(c,m,_);if(Yn(c)&&(b.ctx.renderer=ft),Lo(b,!1,v),b.asyncDep){if(_&&_.registerDep(b,ne,v),!c.el){const w=b.subTree=Ye(Qe);$(null,w,u,g),c.placeholder=w.el}}else ne(b,c,u,g,_,p,v)},es=(c,u,g)=>{const m=u.component=c.component;if(mo(c,u,g))if(m.asyncDep&&!m.asyncResolved){W(m,u,g);return}else m.next=u,m.update();else u.el=c.el,m.vnode=u},ne=(c,u,g,m,_,p,v)=>{const b=()=>{if(c.isMounted){let{next:x,bu:C,u:O,parent:M,vnode:L}=c;{const we=Di(c);if(we){x&&(x.el=L.el,W(c,x,v)),we.asyncDep.then(()=>{oe(()=>{c.isUnmounted||y()},_)});return}}let j=x,J;Ve(c,!1),x?(x.el=L.el,W(c,x,v)):x=L,C&&gn(C),(J=x.props&&x.props.onVnodeBeforeUpdate)&&ve(J,M,x,L),Ve(c,!0);const Q=_s(c),me=c.subTree;c.subTree=Q,S(me,Q,h(me.el),Nt(me),c,_,p),x.el=Q.el,j===null&&wo(c,Q.el),O&&oe(O,_),(J=x.props&&x.props.onVnodeUpdated)&&oe(()=>ve(J,M,x,L),_)}else{let x;const{el:C,props:O}=u,{bm:M,m:L,parent:j,root:J,type:Q}=c,me=xt(u);Ve(c,!1),M&&gn(M),!me&&(x=O&&O.onVnodeBeforeMount)&&ve(x,j,u),Ve(c,!0);{J.ce&&J.ce._hasShadowRoot()&&J.ce._injectChildStyle(Q,c.parent?c.parent.type:void 0);const we=c.subTree=_s(c);S(null,we,g,m,c,_,p),u.el=we.el}if(L&&oe(L,_),!me&&(x=O&&O.onVnodeMounted)){const we=u;oe(()=>ve(x,j,we),_)}(u.shapeFlag&256||j&&xt(j.vnode)&&j.vnode.shapeFlag&256)&&c.a&&oe(c.a,_),c.isMounted=!0,u=g=m=null}};c.scope.on();const w=c.effect=new Gs(b);c.scope.off();const y=c.update=w.run.bind(w),T=c.job=w.runIfDirty.bind(w);T.i=c,T.id=c.uid,w.scheduler=()=>Jn(T),Ve(c,!0),y()},W=(c,u,g)=>{u.component=c;const m=c.vnode.props;c.vnode=u,c.next=null,vo(c,u.props,m,g),So(c,u.children,g),Me(),us(c),Fe()},K=(c,u,g,m,_,p,v,b,w=!1)=>{const y=c&&c.children,T=c?c.shapeFlag:0,x=u.children,{patchFlag:C,shapeFlag:O}=u;if(C>0){if(C&128){Dt(y,x,g,m,_,p,v,b,w);return}else if(C&256){Ke(y,x,g,m,_,p,v,b,w);return}}O&8?(T&16&&ut(y,_,p),x!==y&&f(g,x)):T&16?O&16?Dt(y,x,g,m,_,p,v,b,w):ut(y,_,p,!0):(T&8&&f(g,""),O&16&&je(x,g,m,_,p,v,b,w))},Ke=(c,u,g,m,_,p,v,b,w)=>{c=c||st,u=u||st;const y=c.length,T=u.length,x=Math.min(y,T);let C;for(C=0;C<x;C++){const O=u[C]=w?Ie(u[C]):Se(u[C]);S(c[C],O,g,null,_,p,v,b,w)}y>T?ut(c,_,p,!0,!1,x):je(u,g,m,_,p,v,b,w,x)},Dt=(c,u,g,m,_,p,v,b,w)=>{let y=0;const T=u.length;let x=c.length-1,C=T-1;for(;y<=x&&y<=C;){const O=c[y],M=u[y]=w?Ie(u[y]):Se(u[y]);if(ht(O,M))S(O,M,g,null,_,p,v,b,w);else break;y++}for(;y<=x&&y<=C;){const O=c[x],M=u[C]=w?Ie(u[C]):Se(u[C]);if(ht(O,M))S(O,M,g,null,_,p,v,b,w);else break;x--,C--}if(y>x){if(y<=C){const O=C+1,M=O<T?u[O].el:m;for(;y<=C;)S(null,u[y]=w?Ie(u[y]):Se(u[y]),g,M,_,p,v,b,w),y++}}else if(y>C)for(;y<=x;)_e(c[y],_,p,!0),y++;else{const O=y,M=y,L=new Map;for(y=M;y<=C;y++){const le=u[y]=w?Ie(u[y]):Se(u[y]);le.key!=null&&L.set(le.key,y)}let j,J=0;const Q=C-M+1;let me=!1,we=0;const dt=new Array(Q);for(y=0;y<Q;y++)dt[y]=0;for(y=O;y<=x;y++){const le=c[y];if(J>=Q){_e(le,_,p,!0);continue}let be;if(le.key!=null)be=L.get(le.key);else for(j=M;j<=C;j++)if(dt[j-M]===0&&ht(le,u[j])){be=j;break}be===void 0?_e(le,_,p,!0):(dt[be-M]=y+1,be>=we?we=be:me=!0,S(le,u[be],g,null,_,p,v,b,w),J++)}const ss=me?Oo(dt):st;for(j=ss.length-1,y=Q-1;y>=0;y--){const le=M+y,be=u[le],is=u[le+1],rs=le+1<T?is.el||Ni(is):m;dt[y]===0?S(null,be,g,rs,_,p,v,b,w):me&&(j<0||y!==ss[j]?ze(be,g,rs,2):j--)}}},ze=(c,u,g,m,_=null)=>{const{el:p,type:v,transition:b,children:w,shapeFlag:y}=c;if(y&6){ze(c.component.subTree,u,g,m);return}if(y&128){c.suspense.move(u,g,m);return}if(y&64){v.move(c,u,g,ft);return}if(v===ke){s(p,u,g);for(let x=0;x<w.length;x++)ze(w[x],u,g,m);s(c.anchor,u,g);return}if(v===vn){N(c,u,g);return}if(m!==2&&y&1&&b)if(m===0)b.persisted&&!p[mn]?s(p,u,g):(b.beforeEnter(p),s(p,u,g),oe(()=>b.enter(p),_));else{const{leave:x,delayLeave:C,afterLeave:O}=b,M=()=>{c.ctx.isUnmounted?i(p):s(p,u,g)},L=()=>{const j=p._isLeaving||!!p[mn];p._isLeaving&&p[mn](!0),b.persisted&&!j?M():x(p,()=>{M(),O&&O()})};C?C(p,M,L):L()}else s(p,u,g)},_e=(c,u,g,m=!1,_=!1)=>{const{type:p,props:v,ref:b,children:w,dynamicChildren:y,shapeFlag:T,patchFlag:x,dirs:C,cacheIndex:O,memo:M}=c;if(x===-2&&(_=!1),b!=null&&(Me(),vt(b,null,g,c,!0),Fe()),O!=null&&(u.renderCache[O]=void 0),T&256){u.ctx.deactivate(c);return}const L=T&1&&C,j=!xt(c);let J;if(j&&(J=v&&v.onVnodeBeforeUnmount)&&ve(J,u,c),T&6)Wi(c.component,g,m);else{if(T&128){c.suspense.unmount(g,m);return}L&&Ue(c,null,u,"beforeUnmount"),T&64?c.type.remove(c,u,g,ft,m):y&&!y.hasOnce&&(p!==ke||x>0&&x&64)?ut(y,u,g,!1,!0):(p===ke&&x&384||!_&&T&16)&&ut(w,u,g),m&&ts(c)}const Q=M!=null&&O==null;(j&&(J=v&&v.onVnodeUnmounted)||L||Q)&&oe(()=>{J&&ve(J,u,c),L&&Ue(c,null,u,"unmounted"),Q&&(c.el=null)},g)},ts=c=>{const{type:u,el:g,anchor:m,transition:_}=c;if(u===ke){Vi(g,m);return}if(u===vn){E(c);return}const p=()=>{i(g),_&&!_.persisted&&_.afterLeave&&_.afterLeave()};if(c.shapeFlag&1&&_&&!_.persisted){const{leave:v,delayLeave:b}=_,w=()=>v(g,p);b?b(c.el,p,w):w()}else p()},Vi=(c,u)=>{let g;for(;c!==u;)g=q(c),i(c),c=g;i(u)},Wi=(c,u,g)=>{const{bum:m,scope:_,job:p,subTree:v,um:b,m:w,a:y}=c;bs(w),bs(y),m&&gn(m),_.stop(),p&&(p.flags|=8,_e(v,c,u,g)),b&&oe(b,u),oe(()=>{c.isUnmounted=!0},u)},ut=(c,u,g,m=!1,_=!1,p=0)=>{for(let v=p;v<c.length;v++)_e(c[v],u,g,m,_)},Nt=c=>{if(c.shapeFlag&6)return Nt(c.component.subTree);if(c.shapeFlag&128)return c.suspense.next();const u=q(c.anchor||c.el),g=u&&u[zr];return g?q(g):u};let fn=!1;const ns=(c,u,g)=>{let m;c==null?u._vnode&&(_e(u._vnode,null,null,!0),m=u._vnode.component):S(u._vnode||null,c,u,null,null,null,g),u._vnode=c,fn||(fn=!0,us(m),di(),fn=!1)},ft={p:S,um:_e,m:ze,r:ts,mt:un,mc:je,pc:K,pbc:$e,n:Nt,o:e};return{render:ns,hydrate:void 0,createApp:fo(ns)}}function bn({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Ve({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Eo(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Fi(e,t,n=!1){const s=e.children,i=t.children;if(A(s)&&A(i))for(let r=0;r<s.length;r++){const o=s[r];let l=i[r];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=i[r]=Ie(i[r]),l.el=o.el),!n&&l.patchFlag!==-2&&Fi(o,l)),l.type===an&&(l.patchFlag===-1&&(l=i[r]=Ie(l)),l.el=o.el),l.type===Qe&&!l.el&&(l.el=o.el)}}function Oo(e){const t=e.slice(),n=[0];let s,i,r,o,l;const a=e.length;for(s=0;s<a;s++){const d=e[s];if(d!==0){if(i=n[n.length-1],e[i]<d){t[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)l=r+o>>1,e[n[l]]<d?r=l+1:o=l;d<e[n[r]]&&(r>0&&(t[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=t[o];return n}function Di(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Di(t)}function bs(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function Ni(e){if(e.placeholder)return e.placeholder;const t=e.component;return t?Ni(t.subTree):null}const ji=e=>e.__isSuspense;function Ao(e,t){t&&t.pendingBranch?A(e)?t.effects.push(...e):t.effects.push(e):Nr(e)}const ke=Symbol.for("v-fgt"),an=Symbol.for("v-txt"),Qe=Symbol.for("v-cmt"),vn=Symbol.for("v-stc"),Ge=[];let ae=null;function et(e=!1){Ge.push(ae=e?null:[])}function Hi(){Ge.pop(),ae=Ge[Ge.length-1]||null}let Tt=1;function vs(e,t=!1){Tt+=e,e<0&&ae&&t&&(ae.hasOnce=!0)}function Po(e){return e.dynamicChildren=Tt>0?ae||st:null,Hi(),Tt>0&&ae&&ae.push(e),e}function tt(e,t,n,s,i,r){return Po(Y(e,t,n,s,i,r,!0))}function Li(e){return e?e.__v_isVNode===!0:!1}function ht(e,t){return e.type===t.type&&e.key===t.key}const $i=({key:e})=>e??null,Ut=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?B(e)||ee(e)||I(e)?{i:Te,r:e,k:t,f:!!n}:e:null);function Y(e,t=null,n=null,s=0,i=null,r=e===ke?0:1,o=!1,l=!1){const a={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&$i(t),ref:t&&Ut(t),scopeId:hi,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Te};return l?(Yt(a,n),r&128&&e.normalize(a)):n&&(a.shapeFlag|=B(n)?8:16),Tt>0&&!o&&ae&&(a.patchFlag>0||r&6)&&a.patchFlag!==32&&ae.push(a),a}const Ye=Io;function Io(e,t=null,n=null,s=0,i=null,r=!1){if((!e||e===no)&&(e=Qe),Li(e)){const l=ct(e,t,!0);return n&&Yt(l,n),Tt>0&&!r&&ae&&(l.shapeFlag&6?ae[ae.indexOf(e)]=l:ae.push(l)),l.patchFlag=-2,l}if(Uo(e)&&(e=e.__vccOpts),t){t=Ro(t);let{class:l,style:a}=t;l&&!B(l)&&(t.class=nn(l)),H(a)&&(Bn(a)&&!A(a)&&(a=te({},a)),t.style=jn(a))}const o=B(e)?1:ji(e)?128:on(e)?64:H(e)?4:I(e)?2:0;return Y(e,t,n,s,i,o,r,!0)}function Ro(e){return e?Bn(e)||Oi(e)?te({},e):e:null}function ct(e,t,n=!1,s=!1){const{props:i,ref:r,patchFlag:o,children:l,transition:a}=e,d=t?Fo(i||{},t):i,f={__v_isVNode:!0,__v_skip:!0,type:e.type,props:d,key:d&&$i(d),ref:t&&t.ref?n&&r?A(r)?r.concat(Ut(t)):[r,Ut(t)]:Ut(t):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:l,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==ke?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:a,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&ct(e.ssContent),ssFallback:e.ssFallback&&ct(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return a&&s&&Gn(f,a.clone(f)),f}function Mo(e=" ",t=0){return Ye(an,null,e,t)}function Se(e){return e==null||typeof e=="boolean"?Ye(Qe):A(e)?Ye(ke,null,e.slice()):Li(e)?Ie(e):Ye(an,null,String(e))}function Ie(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:ct(e)}function Yt(e,t){let n=0;const{shapeFlag:s}=e;if(t==null)t=null;else if(A(t))n=16;else if(typeof t=="object")if(s&65){const i=t.default;i&&(i._c&&(i._d=!1),Yt(e,i()),i._c&&(i._d=!0));return}else{n=32;const i=t._;!i&&!Oi(t)?t._ctx=Te:i===3&&Te&&(Te.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else if(I(t)){if(s&65){Yt(e,{default:t});return}t={default:t,_ctx:Te},n=32}else t=String(t),s&64?(n=16,t=[Mo(t)]):n=8;e.children=t,e.shapeFlag|=n}function Fo(...e){const t={};for(let n=0;n<e.length;n++){const s=e[n];for(const i in s)if(i==="class")t.class!==s.class&&(t.class=nn([t.class,s.class]));else if(i==="style")t.style=jn([t.style,s.style]);else if(Xt(i)){const r=t[i],o=s[i];o&&r!==o&&!(A(r)&&r.includes(o))?t[i]=r?[].concat(r,o):o:o==null&&r==null&&!Zt(i)&&(t[i]=o)}else i!==""&&(t[i]=s[i])}return t}function ve(e,t,n,s=null){he(e,t,7,[n,s])}const Do=ki();let No=0;function jo(e,t,n){const s=e.type,i=(t?t.appContext:e.appContext)||Do,r={uid:No++,vnode:e,type:s,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new rr(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Pi(s,i),emitsOptions:Si(s,i),emit:null,emitted:null,propsDefaults:U,inheritAttrs:s.inheritAttrs,ctx:U,data:U,props:U,attrs:U,slots:U,refs:U,setupState:U,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=ho.bind(null,r),e.ce&&e.ce(r),r}let re=null;const Ho=()=>re||Te;let Qt,Et;{const e=tn(),t=(n,s)=>{let i;return(i=e[n])||(i=e[n]=[]),i.push(s),r=>{i.length>1?i.forEach(o=>o(r)):i[0](r)}};Qt=t("__VUE_INSTANCE_SETTERS__",n=>re=n),Et=t("__VUE_SSR_SETTERS__",n=>Ot=n)}const It=e=>{const t=re;return Qt(e),e.scope.on(),()=>{e.scope.off(),Qt(t)}},xs=()=>{re&&re.scope.off(),Qt(null)};function Ki(e){return e.vnode.shapeFlag&4}let Ot=!1;function Lo(e,t=!1,n=!1){t&&Et(t);const{props:s,children:i}=e.vnode,r=Ki(e);bo(e,s,r,t),ko(e,i,n||t);const o=r?$o(e,t):void 0;return t&&Et(!1),o}function $o(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,io);const{setup:s}=n;if(s){Me();const i=e.setupContext=s.length>1?zo(e):null,r=It(e),o=Pt(s,e,0,[e.props,i]),l=$s(o);if(Fe(),r(),(l||e.sp)&&!xt(e)&&mi(e),l){if(o.then(xs,xs),t)return o.then(a=>{Et(!0);try{qs(e,a,t)}finally{Et(!1)}}).catch(a=>{rn(a,e,0)});e.asyncDep=o}else qs(e,o)}else zi(e)}function qs(e,t,n){I(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:H(t)&&(e.setupState=ai(t)),zi(e)}function zi(e,t,n){const s=e.type;e.render||(e.render=s.render||Ee);{const i=It(e);Me();try{ro(e)}finally{Fe(),i()}}}const Ko={get(e,t){return Z(e,"get",""),e[t]}};function zo(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,Ko),slots:e.slots,emit:e.emit,expose:t}}function Zn(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(ai(Sr(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in qt)return qt[n](e)},has(t,n){return n in t||n in qt}})):e.proxy}function Uo(e){return I(e)&&"__vccOpts"in e}const yt=(e,t)=>Pr(e,t,Ot),Vo="3.5.41";/**
* @vue/runtime-dom v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Rn;const ks=typeof window<"u"&&window.trustedTypes;if(ks)try{Rn=ks.createPolicy("vue",{createHTML:e=>e})}catch{}const Ui=Rn?e=>Rn.createHTML(e):e=>e,Wo="http://www.w3.org/2000/svg",Bo="http://www.w3.org/1998/Math/MathML",Pe=typeof document<"u"?document:null,Ss=Pe&&Pe.createElement("template"),Jo={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,s)=>{const i=t==="svg"?Pe.createElementNS(Wo,e):t==="mathml"?Pe.createElementNS(Bo,e):n?Pe.createElement(e,{is:n}):Pe.createElement(e);return e==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:e=>Pe.createTextNode(e),createComment:e=>Pe.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Pe.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,s,i,r){const o=n?n.previousSibling:t.lastChild;if(i&&(i===r||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{Ss.innerHTML=Ui(s==="svg"?`<svg>${e}</svg>`:s==="mathml"?`<math>${e}</math>`:e);const l=Ss.content;if(s==="svg"||s==="mathml"){const a=l.firstChild;for(;a.firstChild;)l.appendChild(a.firstChild);l.removeChild(a)}t.insertBefore(l,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Go=Symbol("_vtc");function Yo(e,t,n){const s=e[Go];s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Cs=Symbol("_vod"),Qo=Symbol("_vsh"),Xo=Symbol(""),Zo=/(?:^|;)\s*display\s*:/;function el(e,t,n){const s=e.style,i=B(n);let r=!1;if(n&&!i){if(t)if(B(t))for(const o of t.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&_t(s,l,"")}else for(const o in t)n[o]==null&&_t(s,o,"");for(const o in n){o==="display"&&(r=!0);const l=n[o];l!=null?nl(e,o,!B(t)&&t?t[o]:void 0,l)||_t(s,o,l):_t(s,o,"")}}else if(i){if(t!==n){const o=s[Xo];o&&(n+=";"+o),s.cssText=n,r=Zo.test(n)}}else t&&e.removeAttribute("style");Cs in e&&(e[Cs]=r?s.display:"",e[Qo]&&(s.display="none"))}const Ts=/\s*!important$/;function _t(e,t,n){if(A(n))n.forEach(s=>_t(e,t,s));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const s=tl(e,t);Ts.test(n)?e.setProperty(Xe(s),n.replace(Ts,""),"important"):e[s]=n}}const Es=["Webkit","Moz","ms"],xn={};function tl(e,t){const n=xn[t];if(n)return n;let s=fe(t);if(s!=="filter"&&s in e)return xn[t]=s;s=Us(s);for(let i=0;i<Es.length;i++){const r=Es[i]+s;if(r in e)return xn[t]=r}return t}function nl(e,t,n,s){return e.tagName==="TEXTAREA"&&(t==="width"||t==="height")&&B(s)&&n===s}const Os="http://www.w3.org/1999/xlink";function As(e,t,n,s,i,r=sr(t)){s&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(Os,t.slice(6,t.length)):e.setAttributeNS(Os,t,n):n==null||r&&!Ws(n)?e.removeAttribute(t):e.setAttribute(t,r?"":Oe(n)?String(n):n)}function Ps(e,t,n,s,i){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?Ui(n):n);return}const r=e.tagName;if(t==="value"&&r!=="PROGRESS"&&!r.includes("-")){const l=r==="OPTION"?e.getAttribute("value")||"":e.value,a=n==null?e.type==="checkbox"?"on":"":String(n);(l!==a||!("_value"in e))&&(e.value=a),n==null&&e.removeAttribute(t),e._value=n;return}let o=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=Ws(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(i||t)}function sl(e,t,n,s){e.addEventListener(t,n,s)}function il(e,t,n,s){e.removeEventListener(t,n,s)}const Is=Symbol("_vei");function rl(e,t,n,s,i=null){const r=e[Is]||(e[Is]={}),o=r[t];if(s&&o)o.value=s;else{const[l,a]=cl(t);if(s){const d=r[t]=fl(s,i);sl(e,l,d,a)}else o&&(il(e,l,o,a),r[t]=void 0)}}const ol=/(Once|Passive|Capture)$/,ll=/^on:?(?:Once|Passive|Capture)$/;function cl(e){let t,n;for(;(n=e.match(ol))&&!ll.test(e);)t||(t={}),e=e.slice(0,e.length-n[1].length),t[n[1].toLowerCase()]=!0;return[e[2]===":"?e.slice(3):Xe(e.slice(2)),t]}let qn=0;const al=Promise.resolve(),ul=()=>qn||(al.then(()=>qn=0),qn=Date.now());function fl(e,t){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;const i=n.value;if(A(i)){const r=s.stopImmediatePropagation;s.stopImmediatePropagation=()=>{r.call(s),s._stopped=!0};const o=i.slice(),l=[s];for(let a=0;a<o.length&&!s._stopped;a++){const d=o[a];d&&he(d,t,5,l)}}else he(i,t,5,[s])};return n.value=e,n.attached=ul(),n}const Rs=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,dl=(e,t,n,s,i,r)=>{const o=i==="svg";t==="class"?Yo(e,s,o):t==="style"?el(e,n,s):Xt(t)?Zt(t)||rl(e,t,n,s,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):gl(e,t,s,o))?(Ps(e,t,s),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&As(e,t,s,o,r,t!=="value")):e._isVueCE&&(hl(e,t)||e._def.__asyncLoader&&(/[A-Z]/.test(t)||!B(s)))?Ps(e,fe(t),s,r,t):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),As(e,t,s,o))};function gl(e,t,n,s){if(s)return!!(t==="innerHTML"||t==="textContent"||t in e&&Rs(t)&&I(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const i=e.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return Rs(t)&&B(n)?!1:t in e}function hl(e,t){const n=e._def.props;if(!n)return!1;const s=fe(t);return Array.isArray(n)?n.some(i=>fe(i)===s):Object.keys(n).some(i=>fe(i)===s)}const pl=te({patchProp:dl},Jo);let Ms;function yl(){return Ms||(Ms=Co(pl))}const _l=(...e)=>{const t=yl().createApp(...e),{mount:n}=t;return t.mount=s=>{const i=wl(s);if(!i)return;const r=t._component;!I(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const o=n(i,!1,ml(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},t};function ml(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function wl(e){return B(e)?document.querySelector(e):e}const Fs=[{id:"takken-001",category:"宅建業法",title:"免許",question:"【免許】需要掌握哪些考试要点？",answer:`宅建業免許の有効期間は？ → 5年。
考场速记：5年。
二以上の都道府県に事務所を設置する場合の免許は？ → 国土交通大臣免許。
考场速记：国土交通大臣免許。
一の都道府県内だけに事務所を設置する場合の免許は？ → 都道府県知事免許。
考场速记：都道府県知事免許。
自己所有物件の単純な賃貸は宅建業か？ → 通常、宅建業法上の宅建業には当たらない。
考场速记：通常、宅建業法上の宅建業には当たらない。
反復継続して自己所有不動産を売買する場合は？ → 宅建業に該当し得るため、免許が必要。
考场速记：宅建業に該当し得るため、免許が必要。
【易错点】反向判断陷阱：不正确。正确结论是：5年。；反向判断陷阱：不正确。正确结论是：国土交通大臣免許。；反向判断陷阱：不正确。正确结论是：都道府県知事免許。；反向判断陷阱：不正确。正确结论是：通常、宅建業法上の宅建業には当たらない。；反向判断陷阱：不正确。正确结论是：宅建業に該当し得るため、免許が必要。；通用陷阱：不要只背结论，要同时确认“谁、何时、多少、例外条件”。`,tags:["数字","必考","陷阱","2026合格版","综合记忆","易错点"]},{id:"takken-002",category:"宅建業法",title:"専任宅建士",question:"【専任宅建士】需要掌握哪些考试要点？",answer:`専任宅建士の配置割合は？ → 原則、従業者5人につき1人以上。
考场速记：原則、従業者5人につき1人以上。
専任宅建士が不足した場合の補充期限は？ → 不足が生じた日から2週間以内。
考场速记：不足が生じた日から2週間以内。
【易错点】反向判断陷阱：不正确。正确结论是：原則、従業者5人につき1人以上。；反向判断陷阱：不正确。正确结论是：不足が生じた日から2週間以内。；通用陷阱：不要只背结论，要同时确认“谁、何时、多少、例外条件”。`,tags:["数字","必考","2026合格版","综合记忆","易错点"]},{id:"takken-003",category:"宅建業法",title:"営業保証金",question:"【営業保証金】需要掌握哪些考试要点？",answer:`主たる事務所の営業保証金はいくら？ → 1,000万円。
考场速记：1,000万円。
従たる事務所1か所ごとの営業保証金加算額は？ → 500万円。
考场速记：500万円。
営業保証金を供託しただけで営業開始できるか？ → できない。供託済みの届出等、法定手続を完了する必要がある。
考场速记：できない。供託済みの届出等、法定手続を完了する必要がある。
【易错点】反向判断陷阱：不正确。正确结论是：1,000万円。；反向判断陷阱：不正确。正确结论是：500万円。；反向判断陷阱：不正确。正确结论是：できない。供託済みの届出等、法定手続を完了する必要がある。；通用陷阱：不要只背结论，要同时确认“谁、何时、多少、例外条件”。`,tags:["数字","必考","陷阱","2026合格版","综合记忆","易错点"]},{id:"takken-004",category:"宅建業法",title:"保証協会",question:"【保証協会】需要掌握哪些考试要点？",answer:`保証協会の弁済業務保証金分担金は主たる事務所いくら？ → 60万円。
考场速记：60万円。
保証協会の弁済業務保証金分担金は従たる事務所1か所いくら？ → 30万円。
考场速记：30万円。
【易错点】反向判断陷阱：不正确。正确结论是：60万円。；反向判断陷阱：不正确。正确结论是：30万円。；通用陷阱：不要只背结论，要同时确认“谁、何时、多少、例外条件”。`,tags:["数字","2026合格版","综合记忆","易错点"]},{id:"takken-005",category:"宅建業法",title:"媒介契約",question:"【媒介契約】需要掌握哪些考试要点？",answer:`専任媒介契約の有効期間の上限は？ → 3か月。
考场速记：3か月。
専属専任媒介契約の有効期間の上限は？ → 3か月。
専任媒介の指定流通機構への登録期限は？ → 契約締結日の翌日から7日以内。休業日を除く。
考场速记：契約締結日の翌日から7日以内。休業日を除く。
専属専任媒介の指定流通機構への登録期限は？ → 契約締結日の翌日から5日以内。休業日を除く。
考场速记：契約締結日の翌日から5日以内。休業日を除く。
専任媒介の業務処理状況報告は少なくとも何週間に1回？ → 2週間に1回以上。
考场速记：2週間に1回以上。
専属専任媒介の業務処理状況報告は少なくとも何週間に1回？ → 1週間に1回以上。
考场速记：1週間に1回以上。
一般媒介契約では他業者への重ねての依頼ができるか？ → できる。
考场速记：できる。
専任媒介契約で依頼者自身が発見した相手方と契約できるか？ → できる。専属専任媒介とは異なる。
考场速记：できる。専属専任媒介とは異なる。
専属専任媒介契約で依頼者自身が発見した相手方と契約できるか？ → できない。
考场速记：できない。
【易错点】反向判断陷阱：不正确。正确结论是：3か月。；反向判断陷阱：不正确。正确结论是：契約締結日の翌日から7日以内。休業日を除く。；反向判断陷阱：不正确。正确结论是：契約締結日の翌日から5日以内。休業日を除く。；反向判断陷阱：不正确。正确结论是：2週間に1回以上。；反向判断陷阱：不正确。正确结论是：1週間に1回以上。；反向判断陷阱：不正确。正确结论是：できる。；反向判断陷阱：不正确。正确结论是：できる。専属専任媒介とは異なる。；反向判断陷阱：不正确。正确结论是：できない。；通用陷阱：不要只背结论，要同时确认“谁、何时、多少、例外条件”。`,tags:["数字","必考","陷阱","2026合格版","综合记忆","易错点"]},{id:"takken-006",category:"宅建業法",title:"35条",question:"【35条】需要掌握哪些考试要点？",answer:`重要事項説明は誰が行う？ → 宅地建物取引士が行う。
考场速记：宅地建物取引士が行う。
重要事項説明時に宅建士証を提示する必要があるか？ → 必要。
考场速记：必要。
IT重説は可能か？ → 可能。双方向の映像・音声等、法定要件を満たして行う。
考场速记：可能。双方向の映像・音声等、法定要件を満たして行う。
【易错点】反向判断陷阱：不正确。正确结论是：宅地建物取引士が行う。；反向判断陷阱：不正确。正确结论是：必要。；反向判断陷阱：不正确。正确结论是：可能。双方向の映像・音声等、法定要件を満たして行う。；通用陷阱：不要只背结论，要同时确认“谁、何时、多少、例外条件”。`,tags:["必考","法改正","2026合格版","综合记忆","易错点"]},{id:"takken-007",category:"宅建業法",title:"35条/37条",question:"【35条/37条】需要掌握哪些考试要点？",answer:`35条・37条書面の宅建士押印義務は残っているか？ → 廃止されている。法定の記名等による。
考场速记：廃止されている。法定の記名等による。
35条・37条書面は電磁的方法で提供できるか？ → 法定要件を満たせば可能。
考场速记：法定要件を満たせば可能。
【易错点】反向判断陷阱：不正确。正确结论是：廃止されている。法定の記名等による。；反向判断陷阱：不正确。正确结论是：法定要件を満たせば可能。；通用陷阱：不要只背结论，要同时确认“谁、何时、多少、例外条件”。`,tags:["法改正","2026合格版","综合记忆","易错点"]},{id:"takken-008",category:"宅建業法",title:"37条",question:"【37条】需要掌握哪些考试要点？",answer:`代金・借賃の支払時期・方法は35条か37条か？ → 37条書面の記載事項。
考场速记：37条書面の記載事項。
【易错点】反向判断陷阱：不正确。正确结论是：37条書面の記載事項。；通用陷阱：不要只背结论，要同时确认“谁、何时、多少、例外条件”。`,tags:["陷阱","2026合格版","综合记忆","易错点"]},{id:"takken-009",category:"宅建業法",title:"8種制限",question:"【8種制限】需要掌握哪些考试要点？",answer:`宅建業者が自ら売主となる場合の手付金等の上限は？ → 代金の20%を超えて受領できない。
考场速记：代金の20%を超えて受領できない。
違約金と損害賠償額の予定の合計上限は？ → 代金の20%。
考场速记：代金の20%。
未完成物件の手付金等保全の重要な金額基準は？ → 代金の5%または1,000万円を超える場合。
考场速记：代金の5%または1,000万円を超える場合。
完成物件の手付金等保全の重要な金額基準は？ → 代金の10%または1,000万円を超える場合。
考场速记：代金の10%または1,000万円を超える場合。
【易错点】反向判断陷阱：不正确。正确结论是：代金の20%を超えて受領できない。；反向判断陷阱：不正确。正确结论是：代金の20%。；反向判断陷阱：不正确。正确结论是：代金の5%または1,000万円を超える場合。；反向判断陷阱：不正确。正确结论是：代金の10%または1,000万円を超える場合。；通用陷阱：不要只背结论，要同时确认“谁、何时、多少、例外条件”。`,tags:["数字","必考","2026合格版","综合记忆","易错点"]},{id:"takken-010",category:"宅建業法",title:"クーリングオフ",question:"【クーリングオフ】需要掌握哪些考试要点？",answer:`宅建業者の事務所で契約した場合、原則クーリングオフできるか？ → できない。
考场速记：できない。
買主が自ら希望して自宅で契約した場合、原則クーリングオフできるか？ → できない。
クーリングオフの法定期間の基本数字は？ → 告知を受けた日から8日。
考场速记：告知を受けた日から8日。
【易错点】反向判断陷阱：不正确。正确结论是：できない。；反向判断陷阱：不正确。正确结论是：告知を受けた日から8日。；通用陷阱：不要只背结论，要同时确认“谁、何时、多少、例外条件”。`,tags:["陷阱","数字","2026合格版","综合记忆","易错点"]},{id:"takken-011",category:"宅建業法",title:"報酬",question:"【報酬】需要掌握哪些考试要点？",answer:`400万円超の売買媒介報酬の簡易計算式は？ → 税抜きで売買価額×3%＋6万円。別途消費税。
考场速记：税抜きで売買価額×3%＋6万円。別途消費税。
200万円以下の部分の媒介報酬率は？ → 5%。
考场速记：5%。
200万円超400万円以下の部分の媒介報酬率は？ → 4%。
考场速记：4%。
低廉な空家等の価格基準は？ → 800万円以下。
考场速记：800万円以下。
低廉な空家等の媒介報酬の現行上限は？ → 依頼者一方から税込33万円以内。
考场速记：依頼者一方から税込33万円以内。
居住用建物の賃貸媒介報酬の双方合計の原則上限は？ → 賃料1か月分×1.1以内。
考场速记：賃料1か月分×1.1以内。
【易错点】反向判断陷阱：不正确。正确结论是：税抜きで売買価額×3%＋6万円。別途消費税。；反向判断陷阱：不正确。正确结论是：5%。；反向判断陷阱：不正确。正确结论是：4%。；反向判断陷阱：不正确。正确结论是：800万円以下。；反向判断陷阱：不正确。正确结论是：依頼者一方から税込33万円以内。；反向判断陷阱：不正确。正确结论是：賃料1か月分×1.1以内。；通用陷阱：不要只背结论，要同时确认“谁、何时、多少、例外条件”。`,tags:["数字","法改正","2026合格版","综合记忆","易错点"]},{id:"takken-012",category:"宅建業法",title:"瑕疵担保履行法",question:"【瑕疵担保履行法】需要掌握哪些考试要点？",answer:`住宅瑕疵担保履行法の基準日は？ → 毎年3月31日。
考场速记：毎年3月31日。
基準日からの資力確保状況の届出期限は？ → 50日以内。
考场速记：50日以内。
【易错点】反向判断陷阱：不正确。正确结论是：毎年3月31日。；反向判断陷阱：不正确。正确结论是：50日以内。；通用陷阱：不要只背结论，要同时确认“谁、何时、多少、例外条件”。`,tags:["数字","2026合格版","综合记忆","易错点"]},{id:"takken-013",category:"宅建業法",title:"免許｜真伪",question:"【免許｜真伪】需要掌握哪些考试要点？",answer:`判断：下面的说法是否正确？ → 正确。核心结论为：5年。
判断：下面的说法是否正确？ → 正确。核心结论为：国土交通大臣免許。
判断：下面的说法是否正确？ → 正确。核心结论为：都道府県知事免許。
判断：下面的说法是否正确？ → 正确。核心结论为：通常、宅建業法上の宅建業には当たらない。
判断：下面的说法是否正确？ → 正确。核心结论为：宅建業に該当し得るため、免許が必要。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["数字","必考","陷阱","2026合格版","综合记忆","易错点"]},{id:"takken-014",category:"宅建業法",title:"専任宅建士｜真伪",question:"【専任宅建士｜真伪】需要掌握哪些考试要点？",answer:`判断：下面的说法是否正确？ → 正确。核心结论为：原則、従業者5人につき1人以上。
判断：下面的说法是否正确？ → 正确。核心结论为：不足が生じた日から2週間以内。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["数字","必考","2026合格版","综合记忆","易错点"]},{id:"takken-015",category:"宅建業法",title:"営業保証金｜真伪",question:"【営業保証金｜真伪】需要掌握哪些考试要点？",answer:`判断：下面的说法是否正确？ → 正确。核心结论为：1,000万円。
判断：下面的说法是否正确？ → 正确。核心结论为：500万円。
判断：下面的说法是否正确？ → 正确。核心结论为：できない。供託済みの届出等、法定手続を完了する必要がある。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["数字","必考","陷阱","2026合格版","综合记忆","易错点"]},{id:"takken-016",category:"宅建業法",title:"保証協会｜真伪",question:"【保証協会｜真伪】需要掌握哪些考试要点？",answer:`判断：下面的说法是否正确？ → 正确。核心结论为：60万円。
判断：下面的说法是否正确？ → 正确。核心结论为：30万円。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["数字","2026合格版","综合记忆","易错点"]},{id:"takken-017",category:"宅建業法",title:"媒介契約｜真伪",question:"【媒介契約｜真伪】需要掌握哪些考试要点？",answer:`判断：下面的说法是否正确？ → 正确。核心结论为：3か月。
判断：下面的说法是否正确？ → 正确。核心结论为：契約締結日の翌日から7日以内。休業日を除く。
判断：下面的说法是否正确？ → 正确。核心结论为：契約締結日の翌日から5日以内。休業日を除く。
判断：下面的说法是否正确？ → 正确。核心结论为：2週間に1回以上。
判断：下面的说法是否正确？ → 正确。核心结论为：1週間に1回以上。
判断：下面的说法是否正确？ → 正确。核心结论为：できる。
判断：下面的说法是否正确？ → 正确。核心结论为：できる。専属専任媒介とは異なる。
判断：下面的说法是否正确？ → 正确。核心结论为：できない。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["数字","必考","陷阱","2026合格版","综合记忆","易错点"]},{id:"takken-018",category:"宅建業法",title:"35条｜真伪",question:"【35条｜真伪】需要掌握哪些考试要点？",answer:`判断：下面的说法是否正确？ → 正确。核心结论为：宅地建物取引士が行う。
判断：下面的说法是否正确？ → 正确。核心结论为：必要。
判断：下面的说法是否正确？ → 正确。核心结论为：可能。双方向の映像・音声等、法定要件を満たして行う。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["必考","法改正","2026合格版","综合记忆","易错点"]},{id:"takken-019",category:"宅建業法",title:"35条/37条｜真伪",question:"【35条/37条｜真伪】需要掌握哪些考试要点？",answer:`判断：下面的说法是否正确？ → 正确。核心结论为：廃止されている。法定の記名等による。
判断：下面的说法是否正确？ → 正确。核心结论为：法定要件を満たせば可能。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["法改正","2026合格版","综合记忆","易错点"]},{id:"takken-020",category:"宅建業法",title:"37条｜真伪",question:"【37条｜真伪】需要掌握哪些考试要点？",answer:`判断：下面的说法是否正确？ → 正确。核心结论为：37条書面の記載事項。
判断顺序：先确认适用制度，再确认主体与时间，最后核对数字、例外和是否属于特例。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["陷阱","2026合格版","综合记忆","易错点"]},{id:"takken-021",category:"宅建業法",title:"8種制限｜真伪",question:"【8種制限｜真伪】需要掌握哪些考试要点？",answer:`判断：下面的说法是否正确？ → 正确。核心结论为：代金の20%を超えて受領できない。
判断：下面的说法是否正确？ → 正确。核心结论为：代金の20%。
判断：下面的说法是否正确？ → 正确。核心结论为：代金の5%または1,000万円を超える場合。
判断：下面的说法是否正确？ → 正确。核心结论为：代金の10%または1,000万円を超える場合。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["数字","必考","2026合格版","综合记忆","易错点"]},{id:"takken-022",category:"宅建業法",title:"クーリングオフ｜真伪",question:"【クーリングオフ｜真伪】需要掌握哪些考试要点？",answer:`判断：下面的说法是否正确？ → 正确。核心结论为：できない。
判断：下面的说法是否正确？ → 正确。核心结论为：告知を受けた日から8日。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["陷阱","数字","2026合格版","综合记忆","易错点"]},{id:"takken-023",category:"宅建業法",title:"報酬｜真伪",question:"【報酬｜真伪】需要掌握哪些考试要点？",answer:`判断：下面的说法是否正确？ → 正确。核心结论为：税抜きで売買価額×3%＋6万円。別途消費税。
判断：下面的说法是否正确？ → 正确。核心结论为：5%。
判断：下面的说法是否正确？ → 正确。核心结论为：4%。
判断：下面的说法是否正确？ → 正确。核心结论为：800万円以下。
判断：下面的说法是否正确？ → 正确。核心结论为：依頼者一方から税込33万円以内。
判断：下面的说法是否正确？ → 正确。核心结论为：賃料1か月分×1.1以内。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["数字","法改正","2026合格版","综合记忆","易错点"]},{id:"takken-024",category:"宅建業法",title:"瑕疵担保履行法｜真伪",question:"【瑕疵担保履行法｜真伪】需要掌握哪些考试要点？",answer:`判断：下面的说法是否正确？ → 正确。核心结论为：毎年3月31日。
判断：下面的说法是否正确？ → 正确。核心结论为：50日以内。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["数字","2026合格版","综合记忆","易错点"]},{id:"takken-025",category:"宅建業法",title:"免許制度総合",question:"【免許制度総合】需要掌握哪些考试要点？",answer:`免許区分・有効期間・更新・免許換えを一括で覚える → 1都道府県内のみ＝知事免許、2以上＝国土交通大臣免許。有効期間は5年。免許換えが必要な場合は新免許を受ける。更新申請は有効期間満了日の90日前から30日前まで。
判断顺序：先确认适用制度，再确认主体与时间，最后核对数字、例外和是否属于特例。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["免許","5年","90日","30日","高頻度","2026合格版","扩展知识点","综合记忆","易错点"]},{id:"takken-026",category:"宅建業法",title:"免許の効力",question:"【免許の効力】需要掌握哪些考试要点？",answer:`免許取消し後・廃業後の扱い → 免許が失効・取消しになった後も、一定の場合に既存契約の履行等に関する義務が残る。免許失効＝すべての民事上の契約関係が消える、ではない。
判断顺序：先确认适用制度，再确认主体与时间，最后核对数字、例外和是否属于特例。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["免許","失効","ひっかけ","2026合格版","扩展知识点","综合记忆","易错点"]},{id:"takken-027",category:"宅建業法",title:"事務所届出",question:"【事務所届出】需要掌握哪些考试要点？",answer:`事務所設置・移転・廃止と届出 → 事務所の設置・移転・廃止等は免許行政庁への届出対象。変更届出の代表的期限は30日以内。事務所ごとの専任宅建士数も常に適法に維持する。
判断顺序：先确认适用制度，再确认主体与时间，最后核对数字、例外和是否属于特例。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["30日","事務所","専任宅建士","2026合格版","扩展知识点","综合记忆","易错点"]},{id:"takken-028",category:"宅建業法",title:"専任宅建士の常勤性",question:"【専任宅建士の常勤性】需要掌握哪些考试要点？",answer:`専任宅建士の『専任』とは何か → 原則としてその事務所に常勤して専ら宅建業務に従事することが必要。人数だけ満たしていても実態が専任でなければ不可。
判断顺序：先确认适用制度，再确认主体与时间，最后核对数字、例外和是否属于特例。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["専任","常勤","2026合格版","扩展知识点","综合记忆","易错点"]},{id:"takken-029",category:"宅建業法",title:"宅建士登録",question:"【宅建士登録】需要掌握哪些考试要点？",answer:`登録・宅建士証・更新の区別 → 宅建士の『登録』と『宅建士証』は別制度。宅建士証の有効期間は5年。重要事項説明では宅建士証提示が必要。
判断顺序：先确认适用制度，再确认主体与时间，最后核对数字、例外和是否属于特例。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["宅建士証","5年","35条","2026合格版","扩展知识点","综合记忆","易错点"]},{id:"takken-030",category:"宅建業法",title:"営業保証金総合",question:"【営業保証金総合】需要掌握哪些考试要点？",answer:`供託額・届出・還付を一括暗記 → 営業保証金＝主たる事務所1,000万円、従たる事務所1か所500万円。供託後は免許権者への届出を経て営業開始。弁済制度と保証協会制度を混同しない。
判断顺序：先确认适用制度，再确认主体与时间，最后核对数字、例外和是否属于特例。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["1000万円","500万円","供託","2026合格版","扩展知识点","综合记忆","易错点"]},{id:"takken-031",category:"宅建業法",title:"保証協会総合",question:"【保証協会総合】需要掌握哪些考试要点？",answer:`分担金・弁済業務保証金・加入効果 → 弁済業務保証金分担金＝主たる事務所60万円、従たる事務所1か所30万円。加入者は営業保証金を供託する制度ではなく、分担金を納付する。
判断顺序：先确认适用制度，再确认主体与时间，最后核对数字、例外和是否属于特例。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["60万円","30万円","保証協会","2026合格版","扩展知识点","综合记忆","易错点"]},{id:"takken-032",category:"宅建業法",title:"媒介契約比較",question:"【媒介契約比較】需要掌握哪些考试要点？",answer:`一般・専任・専属専任の全比較 → 一般＝重ね依頼可・自己発見取引可。専任＝重ね依頼不可・自己発見可。専属専任＝重ね依頼不可・自己発見不可。専任・専属専任は3か月以内。
判断顺序：先确认适用制度，再确认主体与时间，最后核对数字、例外和是否属于特例。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["媒介","3か月","比較","2026合格版","扩展知识点","综合记忆","易错点"]},{id:"takken-033",category:"宅建業法",title:"媒介報告",question:"【媒介報告】需要掌握哪些考试要点？",answer:`専任・専属専任の報告頻度とREINS → 専任＝2週間に1回以上報告、REINSは契約締結日の翌日から7日以内。専属専任＝1週間に1回以上、REINSは翌日から5日以内。休業日は数えない。
判断顺序：先确认适用制度，再确认主体与时间，最后核对数字、例外和是否属于特例。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["2週間","1週間","7日","5日","2026合格版","扩展知识点","综合记忆","易错点"]},{id:"takken-034",category:"宅建業法",title:"媒介契約書面",question:"【媒介契約書面】需要掌握哪些考试要点？",answer:`媒介契約締結時の書面 → 媒介契約締結後、遅滞なく必要事項を記載した書面を交付。標準媒介契約約款の採用有無等も記載対象。
判断顺序：先确认适用制度，再确认主体与时间，最后核对数字、例外和是否属于特例。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["媒介契約","書面","2026合格版","扩展知识点","综合记忆","易错点"]},{id:"takken-035",category:"宅建業法",title:"35条総合",question:"【35条総合】需要掌握哪些考试要点？",answer:`重要事項説明の主体・時期・宅建士証・電子化 → 契約成立前に重要事項を説明。宅建士が説明し、宅建士証を提示。IT重説が可能。35条書面は一定要件の電磁的方法による提供が可能。押印義務は廃止。
判断顺序：先确认适用制度，再确认主体与时间，最后核对数字、例外和是否属于特例。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["35条","IT重説","電磁化","2026合格版","扩展知识点","综合记忆","易错点"]},{id:"takken-036",category:"宅建業法",title:"37条総合",question:"【37条総合】需要掌握哪些考试要点？",answer:`37条書面の時期・内容・記名 → 契約成立後、遅滞なく交付。契約当事者に交付する。宅建士の記名が必要。35条と37条を『契約前／契約後』で区別。
判断顺序：先确认适用制度，再确认主体与时间，最后核对数字、例外和是否属于特例。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["37条","契約後","記名","2026合格版","扩展知识点","综合记忆","易错点"]},{id:"takken-037",category:"宅建業法",title:"8種制限総合",question:"【8種制限総合】需要掌握哪些考试要点？",answer:`自ら売主の場合の手付・違約金・保全 → 宅建業者が自ら売主の場合、手付金等・違約金等には上限規制がある。手付金等保全制度では未完成5%または1,000万円、完成10%または1,000万円が代表的基準。
判断顺序：先确认适用制度，再确认主体与时间，最后核对数字、例外和是否属于特例。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["8種制限","20%","5%","10%","2026合格版","扩展知识点","综合记忆","易错点"]},{id:"takken-038",category:"宅建業法",title:"手付解除",question:"【手付解除】需要掌握哪些考试要点？",answer:`手付解除と履行着手 → 解約手付では、相手方が履行に着手するまで、買主は手付放棄、売主は倍返しで解除できる。宅建業者自ら売主では8種制限がさらに適用される。
判断顺序：先确认适用制度，再确认主体与时间，最后核对数字、例外和是否属于特例。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["手付","履行着手","2026合格版","扩展知识点","综合记忆","易错点"]},{id:"takken-039",category:"宅建業法",title:"クーリングオフ総合",question:"【クーリングオフ総合】需要掌握哪些考试要点？",answer:`場所・8日・通知方法 → 事務所以外の一定場所での申込み・契約はクーリングオフ対象となり得る。書面等で告げられた日から8日以内が基本。通知は発信時に効力が生じる。
判断顺序：先确认适用制度，再确认主体与时间，最后核对数字、例外和是否属于特例。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["8日","クーリングオフ","2026合格版","扩展知识点","综合记忆","易错点"]},{id:"takken-040",category:"宅建業法",title:"報酬計算",question:"【報酬計算】需要掌握哪些考试要点？",answer:`売買媒介報酬の速算式と区分 → 400万円超の売買では一方当事者からの上限は税抜『価格×3%＋6万円』。200万円以下、200万円超400万円以下は区分計算。消費税を最後に加える。
判断顺序：先确认适用制度，再确认主体与时间，最后核对数字、例外和是否属于特例。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["3%","6万円","報酬","2026合格版","扩展知识点","综合记忆","易错点"]},{id:"takken-041",category:"宅建業法",title:"低廉空家",question:"【低廉空家】需要掌握哪些考试要点？",answer:`800万円以下・30万円・税込33万円 → 800万円以下の低廉な空家等では特例により一方当事者から税込33万円以内を上限として受領できる。物件の使用状態は問わない。
判断顺序：先确认适用制度，再确认主体与时间，最后核对数字、例外和是否属于特例。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["800万円","30万円","33万円","2024改正","2026合格版","扩展知识点","综合记忆","易错点"]},{id:"takken-042",category:"宅建業法",title:"賃貸媒介報酬",question:"【賃貸媒介報酬】需要掌握哪些考试要点？",answer:`居住用建物の媒介報酬 → 居住用建物の賃貸借では、依頼者の一方から受けられる報酬に原則として賃料1か月分×1.1の上限があり、双方から受ける場合も合計上限に注意。長期空家等の特例は別に整理。
判断顺序：先确认适用制度，再确认主体与时间，最后核对数字、例外和是否属于特例。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["賃貸","報酬","1か月","2026合格版","扩展知识点","综合记忆","易错点"]},{id:"takken-043",category:"宅建業法",title:"広告規制",question:"【広告規制】需要掌握哪些考试要点？",answer:`誇大広告・おとり広告・広告開始時期 → 事実と著しく異なる表示、著しく優良・有利と誤認させる表示は禁止。おとり広告も禁止。許可・確認等が必要な物件は広告開始時期の制限も確認。
判断顺序：先确认适用制度，再确认主体与时间，最后核对数字、例外和是否属于特例。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["広告","おとり","2026合格版","扩展知识点","综合记忆","易错点"]},{id:"takken-044",category:"宅建業法",title:"勧誘規制",question:"【勧誘規制】需要掌握哪些考试要点？",answer:`氏名・目的告知、威迫、断った後の継続勧誘 → 勧誘前に商号・名称、担当者氏名、勧誘目的等を告げる。威迫して困惑させる行為は禁止。断られた後に継続して勧誘する行為も禁止。
判断顺序：先确认适用制度，再确认主体与时间，最后核对数字、例外和是否属于特例。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["勧誘","禁止","2026合格版","扩展知识点","综合记忆","易错点"]},{id:"takken-045",category:"宅建業法",title:"従業者証明",question:"【従業者証明】需要掌握哪些考试要点？",answer:`従業者証明書・名簿・帳簿 → 従業者は従業者証明書を携帯し請求時に提示。事務所ごとに従業者名簿と帳簿を備え付ける。宅建士証と従業者証明書は別物。
判断顺序：先确认适用制度，再确认主体与时间，最后核对数字、例外和是否属于特例。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["従業者","名簿","帳簿","2026合格版","扩展知识点","综合记忆","易错点"]},{id:"takken-046",category:"宅建業法",title:"守秘義務",question:"【守秘義務】需要掌握哪些考试要点？",answer:`業務上知り得た秘密 → 宅建士・従業者は正当な理由なく業務上知り得た秘密を漏らしてはならない。従業者でなくなった後も守秘義務は残る。
判断顺序：先确认适用制度，再确认主体与时间，最后核对数字、例外和是否属于特例。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["守秘義務","2026合格版","扩展知识点","综合记忆","易错点"]},{id:"takken-047",category:"宅建業法",title:"手付貸与禁止",question:"【手付貸与禁止】需要掌握哪些考试要点？",answer:`信用供与による契約誘引 → 手付金等について貸付け、後払いの約束など信用を供与して契約を誘引する行為は禁止。『手付を貸すから契約』は典型的誤り。
判断顺序：先确认适用制度，再确认主体与时间，最后核对数字、例外和是否属于特例。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["禁止","手付","2026合格版","扩展知识点","综合记忆","易错点"]},{id:"takken-048",category:"宅建業法",title:"監督処分",question:"【監督処分】需要掌握哪些考试要点？",answer:`指示・業務停止・免許取消し → 違反の程度等に応じ指示処分、業務停止処分、免許取消し等。行政処分と刑事罰は別制度。
判断顺序：先确认适用制度，再确认主体与时间，最后核对数字、例外和是否属于特例。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["監督処分","罰則","2026合格版","扩展知识点","综合记忆","易错点"]},{id:"takken-049",category:"宅建業法",title:"2026年改正",question:"【2026年改正】需要掌握哪些考试要点？",answer:`令和8年4月1日施行の宅建業法運用基準 → 2026年4月1日以降は国交省『宅地建物取引業法の解釈・運用の考え方』令和8年4月1日施行版を基準に確認。重要事項説明の追加など、施行日をまたぐ論点に注意。
判断顺序：先确认适用制度，再确认主体与时间，最后核对数字、例外和是否属于特例。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["2026","法改正","2026合格版","扩展知识点","综合记忆","易错点"]},{id:"takken-050",category:"宅建業法",title:"リースバック",question:"【リースバック】需要掌握哪些考试要点？",answer:`住宅リースバック取引の注意 → 2026年10月施行予定のリースバック関連ガイドライン等、試験基準日との関係を確認。『現行法』と『施行予定』を混同しない。
判断顺序：先确认适用制度，再确认主体与时间，最后核对数字、例外和是否属于特例。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["リースバック","2026","2026合格版","扩展知识点","综合记忆","易错点"]},{id:"takken-051",category:"宅建業法",title:"住宅瑕疵担保",question:"【住宅瑕疵担保】需要掌握哪些考试要点？",answer:`資力確保・基準日 → 新築住宅の売主等には供託または保険加入による資力確保措置。基準日・届出・供託／保険の仕組みを一連で覚える。
判断顺序：先确认适用制度，再确认主体与时间，最后核对数字、例外和是否属于特例。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["瑕疵担保","新築","2026合格版","扩展知识点","综合记忆","易错点"]},{id:"takken-052",category:"宅建業法",title:"案内所等",question:"【案内所等】需要掌握哪些考试要点？",answer:`標識・専任宅建士・届出 → 案内所や展示会場等で契約締結や申込み受付を行う場合、標識や専任宅建士等の設置・届出が必要となる場合がある。事務所と同一視しない。
判断顺序：先确认适用制度，再确认主体与时间，最后核对数字、例外和是否属于特例。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["案内所","標識","2026合格版","扩展知识点","综合记忆","易错点"]},{id:"takken-053",category:"宅建業法",title:"免許欠格",question:"【免許欠格】需要掌握哪些考试要点？",answer:`刑罰・破産・役員の欠格 → 破産者は復権すれば直ちに欠格ではない。一定の刑罰等による欠格期間は5年が頻出。法人では役員等の欠格も確認。
判断顺序：先确认适用制度，再确认主体与时间，最后核对数字、例外和是否属于特例。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["欠格","5年","2026合格版","扩展知识点","综合记忆","易错点"]},{id:"takken-054",category:"宅建業法",title:"営業保証金還付",question:"【営業保証金還付】需要掌握哪些考试要点？",answer:`取引関係者の保護 → 営業保証金は宅建業者と取引した者の債権を一定範囲で弁済するための制度。還付を受けるための手続と、供託所への請求を混同しない。
判断顺序：先确认适用制度，再确认主体与时间，最后核对数字、例外和是否属于特例。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["営業保証金","還付","2026合格版","扩展知识点","综合记忆","易错点"]},{id:"takken-055",category:"宅建業法",title:"保証協会弁済",question:"【保証協会弁済】需要掌握哪些考试要点？",answer:`弁済業務保証金の仕組み → 保証協会加入業者について、取引関係者の債権は弁済業務保証金から弁済される仕組み。弁済後、保証協会が社員に求償する関係を理解。
判断顺序：先确认适用制度，再确认主体与时间，最后核对数字、例外和是否属于特例。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["保証協会","弁済","2026合格版","扩展知识点","综合记忆","易错点"]},{id:"takken-056",category:"宅建業法",title:"重要事項追加",question:"【重要事項追加】需要掌握哪些考试要点？",answer:`2026年4月1日以降の重要事項説明追加 → 2026年4月1日施行の省令改正で、管理業者管理者方式が導入されている場合の説明事項が追加。古い教材だけで判断しない。
判断顺序：先确认适用制度，再确认主体与时间，最后核对数字、例外和是否属于特例。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["2026","35条","管理業者","2026合格版","扩展知识点","综合记忆","易错点"]},{id:"takken-057",category:"宅建業法",title:"電磁的方法",question:"【電磁的方法】需要掌握哪些考试要点？",answer:`書面交付の電子化の条件 → 電磁的方法は法定要件・相手方の承諾等が必要な場合がある。『PDFなら何でも自動的に有効』ではなく、対象書面ごとの規定を確認。
判断顺序：先确认适用制度，再确认主体与时间，最后核对数字、例外和是否属于特例。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["電子契約","電磁的方法","2026合格版","扩展知识点","综合记忆","易错点"]},{id:"takken-058",category:"宅建業法",title:"宅建業者自ら売主",question:"【宅建業者自ら売主】需要掌握哪些考试要点？",answer:`買主保護規制の適用範囲 → 8種制限は宅建業者が自ら売主となる取引を中心に適用。媒介取引に同じ規制が全部かかると考えない。
判断顺序：先确认适用制度，再确认主体与时间，最后核对数字、例外和是否属于特例。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["8種制限","2026合格版","扩展知识点","综合记忆","易错点"]},{id:"takken-059",category:"宅建業法",title:"手付金等の保全",question:"【手付金等の保全】需要掌握哪些考试要点？",answer:`未完成・完成の区別 → 未完成＝5%または1,000万円を超える場合、完成＝10%または1,000万円を超える場合に保全措置が問題となる。『5%/10%』と『20%』を混同しない。
判断顺序：先确认适用制度，再确认主体与时间，最后核对数字、例外和是否属于特例。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["5%","10%","20%","2026合格版","扩展知识点","综合记忆","易错点"]},{id:"takken-060",category:"宅建業法",title:"報酬と消費税",question:"【報酬と消費税】需要掌握哪些考试要点？",answer:`税抜速算式と税込上限 → 報酬の速算式は税抜計算が基礎。最後に消費税を加える。低廉空家特例の30万円は税抜で、税込上限は33万円。
判断顺序：先确认适用制度，再确认主体与时间，最后核对数字、例外和是否属于特例。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["報酬","消費税","2026合格版","扩展知识点","综合记忆","易错点"]},{id:"takken-061",category:"宅建業法",title:"免許権者",question:"【免許権者】需要掌握哪些考试要点？",answer:`大臣・知事の区分 → 免許権者の区分は事務所所在地で決まり、取引物件の所在地ではない。『物件が他県だから大臣免許』は誤り。
判断顺序：先确认适用制度，再确认主体与时间，最后核对数字、例外和是否属于特例。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["免許","ひっかけ","2026合格版","扩展知识点","综合记忆","易错点"]},{id:"takken-062",category:"宅建業法",title:"宅建業の範囲",question:"【宅建業の範囲】需要掌握哪些考试要点？",answer:`自己所有物件の賃貸 → 自己所有の宅地建物を自ら賃貸するだけなら宅建業に該当しない。貸借の代理・媒介は宅建業。『貸借は全部宅建業』ではない。
判断顺序：先确认适用制度，再确认主体与时间，最后核对数字、例外和是否属于特例。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["定義","賃貸","2026合格版","扩展知识点","综合记忆","易错点"]},{id:"takken-063",category:"宅建業法",title:"広告の取引態様",question:"【広告の取引態様】需要掌握哪些考试要点？",answer:`売主・代理・媒介の明示 → 広告では取引態様を明示する必要がある。売主・代理・媒介を曖昧にしない。
判断顺序：先确认适用制度，再确认主体与时间，最后核对数字、例外和是否属于特例。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["広告","取引態様","2026合格版","扩展知识点","综合记忆","易错点"]},{id:"takken-064",category:"宅建業法",title:"標識",question:"【標識】需要掌握哪些考试要点？",answer:`事務所標識の目的 → 宅建業者の事務所には所定の標識を掲示する。案内所等にも必要な場合がある。標識と従業者証明書を区別。
判断顺序：先确认适用制度，再确认主体与时间，最后核对数字、例外和是否属于特例。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["標識","2026合格版","扩展知识点","综合记忆","易错点"]},{id:"takken-065",category:"宅建業法",title:"報告義務",question:"【報告義務】需要掌握哪些考试要点？",answer:`帳簿・名簿・標識のセット → 事務所では帳簿、従業者名簿、標識、専任宅建士等をそれぞれの目的で管理。ひとつの制度にまとめて覚えず、誰が見るかを整理。
判断顺序：先确认适用制度，再确认主体与时间，最后核对数字、例外和是否属于特例。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["事務所","管理","2026合格版","扩展知识点","综合记忆","易错点"]}],Ds=[{id:"kenri-001",category:"権利関係",title:"民法",question:"【民法】需要掌握哪些考试要点？",answer:`成年年齢は？ → 18歳。
考场速记：18歳。
公序良俗に反する法律行為の効力は？ → 無効。
考场速记：無効。
通謀虚偽表示の効力は？ → 当事者間では無効。ただし善意の第三者には無効を対抗できない。
考场速记：当事者間では無効。ただし善意の第三者には無効を対抗できない。
第三者による詐欺の場合、相手方が善意無過失なら撤回できるか？ → 原則としてできない。第三者詐欺では相手方の悪意・有過失等が問題となる。
考场速记：原則としてできない。第三者詐欺では相手方の悪意・有過失等が問題となる。
第三者による強迫の場合、相手方が善意でも撤回できるか？ → できる。第三者強迫では相手方の善意無過失にかかわらず撤回できる。
考场速记：できる。第三者強迫では相手方の善意無過失にかかわらず撤回できる。
無権代理について本人追認前の善意相手方は？ → 原則として取り消すことができる。
考场速记：原則として取り消すことができる。
自己契約は原則どうなる？ → 原則禁止。ただし本人の許諾等の法定例外がある。
考场速记：原則禁止。ただし本人の許諾等の法定例外がある。
双方代理は原則どうなる？ → 原則禁止。ただし本人双方の許諾等の法定例外がある。
考场速记：原則禁止。ただし本人双方の許諾等の法定例外がある。
一般債権の消滅時効の主観期間は？ → 権利を行使できることを知った時から5年。
考场速记：権利を行使できることを知った時から5年。
一般債権の消滅時効の客観期間は？ → 権利を行使できる時から10年。
考场速记：権利を行使できる時から10年。
共有物の保存行為は誰ができる？ → 各共有者が単独でできる。
考场速记：各共有者が単独でできる。
共有物の管理は原則どの程度の持分で決める？ → 持分価格の過半数。
考场速记：持分価格の過半数。
共有物の変更は原則どう決める？ → 共有者全員の同意が原則。ただし法律上の特則がある。
考场速记：共有者全員の同意が原則。ただし法律上の特則がある。
【易错点】反向判断陷阱：不正确。正确结论是：18歳。；反向判断陷阱：不正确。正确结论是：無効。；反向判断陷阱：不正确。正确结论是：当事者間では無効。ただし善意の第三者には無効を対抗できない。；反向判断陷阱：不正确。正确结论是：原則としてできない。第三者詐欺では相手方の悪意・有過失等が問題となる。；反向判断陷阱：不正确。正确结论是：できる。第三者強迫では相手方の善意無過失にかかわらず撤回できる。；反向判断陷阱：不正确。正确结论是：原則として取り消すことができる。；反向判断陷阱：不正确。正确结论是：原則禁止。ただし本人の許諾等の法定例外がある。；反向判断陷阱：不正确。正确结论是：原則禁止。ただし本人双方の許諾等の法定例外がある。；反向判断陷阱：不正确。正确结论是：権利を行使できることを知った時から5年。；反向判断陷阱：不正确。正确结论是：権利を行使できる時から10年。；反向判断陷阱：不正确。正确结论是：各共有者が単独でできる。；反向判断陷阱：不正确。正确结论是：持分価格の過半数。；反向判断陷阱：不正确。正确结论是：共有者全員の同意が原則。ただし法律上の特則がある。；通用陷阱：不要只背结论，要同时确认“谁、何时、多少、例外条件”。`,tags:["数字","必考","陷阱","2026合格版","综合记忆","易错点"]},{id:"kenri-002",category:"権利関係",title:"不動産登記法",question:"【不動産登記法】需要掌握哪些考试要点？",answer:`相続登記の申請期限は？ → 相続で不動産を取得したことを知った日等から3年以内。
考场速记：相続で不動産を取得したことを知った日等から3年以内。
相続登記義務違反の過料上限は？ → 10万円以下。
考场速记：10万円以下。
【易错点】反向判断陷阱：不正确。正确结论是：相続で不動産を取得したことを知った日等から3年以内。；反向判断陷阱：不正确。正确结论是：10万円以下。；通用陷阱：不要只背结论，要同时确认“谁、何时、多少、例外条件”。`,tags:["法改正","数字","2026合格版","综合记忆","易错点"]},{id:"kenri-003",category:"権利関係",title:"抵当権",question:"【抵当権】需要掌握哪些考试要点？",answer:`抵当権は占有を移転する担保物権か？ → 原則として占有を移転しない。
考场速记：原則として占有を移転しない。
抵当権は被担保債権に従うか？ → 原則として従う（付従性）。
考场速记：原則として従う（付従性）。
同一不動産上の抵当権の順位は何で決まる？ → 原則として登記の先後。
考场速记：原則として登記の先後。
【易错点】反向判断陷阱：不正确。正确结论是：原則として占有を移転しない。；反向判断陷阱：不正确。正确结论是：原則として従う（付従性）。；反向判断陷阱：不正确。正确结论是：原則として登記の先後。；通用陷阱：不要只背结论，要同时确认“谁、何时、多少、例外条件”。`,tags:["必考","2026合格版","综合记忆","易错点"]},{id:"kenri-004",category:"権利関係",title:"借地借家法",question:"【借地借家法】需要掌握哪些考试要点？",answer:`普通借地権の初回存続期間は？ → 30年。
考场速记：30年。
普通借地権の第1回更新期間は？ → 20年。
考场速记：20年。
普通借地権の第2回以降の更新期間は？ → 10年。
考场速记：10年。
一般定期借地権の最低存続期間は？ → 50年以上。
考场速记：50年以上。
一般定期借地権に更新はあるか？ → 原則としてない。
考场速记：原則としてない。
一般定期借地権に建物買取請求権はあるか？ → 原則としてない。
定期建物賃貸借で事前説明が必要か？ → 必要。期間満了で更新がない旨を契約前に説明する。
考场速记：必要。期間満了で更新がない旨を契約前に説明する。
【易错点】反向判断陷阱：不正确。正确结论是：30年。；反向判断陷阱：不正确。正确结论是：20年。；反向判断陷阱：不正确。正确结论是：10年。；反向判断陷阱：不正确。正确结论是：50年以上。；反向判断陷阱：不正确。正确结论是：原則としてない。；反向判断陷阱：不正确。正确结论是：必要。期間満了で更新がない旨を契約前に説明する。；通用陷阱：不要只背结论，要同时确认“谁、何时、多少、例外条件”。`,tags:["数字","必考","陷阱","2026合格版","综合记忆","易错点"]},{id:"kenri-005",category:"権利関係",title:"相続",question:"【相続】需要掌握哪些考试要点？",answer:`相続放棄等の熟慮期間は？ → 原則3か月。
考场速记：原則3か月。
配偶者と子が相続する場合の法定相続分は？ → 配偶者1/2、子全体1/2。
考场速记：配偶者1/2、子全体1/2。
配偶者と直系尊属が相続する場合の法定相続分は？ → 配偶者2/3、直系尊属全体1/3。
考场速记：配偶者2/3、直系尊属全体1/3。
配偶者と兄弟姉妹が相続する場合の法定相続分は？ → 配偶者3/4、兄弟姉妹全体1/4。
考场速记：配偶者3/4、兄弟姉妹全体1/4。
兄弟姉妹に遺留分はあるか？ → ない。
考场速记：ない。
配偶者居住権は譲渡できるか？ → できない。
考场速记：できない。
【易错点】反向判断陷阱：不正确。正确结论是：原則3か月。；反向判断陷阱：不正确。正确结论是：配偶者1/2、子全体1/2。；反向判断陷阱：不正确。正确结论是：配偶者2/3、直系尊属全体1/3。；反向判断陷阱：不正确。正确结论是：配偶者3/4、兄弟姉妹全体1/4。；反向判断陷阱：不正确。正确结论是：ない。；反向判断陷阱：不正确。正确结论是：できない。；通用陷阱：不要只背结论，要同时确认“谁、何时、多少、例外条件”。`,tags:["数字","必考","2026合格版","综合记忆","易错点"]},{id:"kenri-006",category:"権利関係",title:"契約不適合責任",question:"【契約不適合責任】需要掌握哪些考试要点？",answer:`種類・品質の不適合を知った買主の通知期限の基本は？ → 知った時から1年以内。売主の故意・重過失等には特則がある。
考场速记：知った時から1年以内。売主の故意・重過失等には特則がある。
【易错点】反向判断陷阱：不正确。正确结论是：知った時から1年以内。売主の故意・重過失等には特則がある。；通用陷阱：不要只背结论，要同时确认“谁、何时、多少、例外条件”。`,tags:["数字","2026合格版","综合记忆","易错点"]},{id:"kenri-007",category:"権利関係",title:"民法｜真伪",question:"【民法｜真伪】需要掌握哪些考试要点？",answer:`判断：下面的说法是否正确？ → 正确。核心结论为：18歳。
判断：下面的说法是否正确？ → 正确。核心结论为：無効。
判断：下面的说法是否正确？ → 正确。核心结论为：当事者間では無効。ただし善意の第三者には無効を対抗できない。
判断：下面的说法是否正确？ → 正确。核心结论为：原則としてできない。第三者詐欺では相手方の悪意・有過失等が問題となる。
判断：下面的说法是否正确？ → 正确。核心结论为：できる。第三者強迫では相手方の善意無過失にかかわらず撤回できる。
判断：下面的说法是否正确？ → 正确。核心结论为：原則として取り消すことができる。
判断：下面的说法是否正确？ → 正确。核心结论为：原則禁止。ただし本人の許諾等の法定例外がある。
判断：下面的说法是否正确？ → 正确。核心结论为：原則禁止。ただし本人双方の許諾等の法定例外がある。
判断：下面的说法是否正确？ → 正确。核心结论为：権利を行使できることを知った時から5年。
判断：下面的说法是否正确？ → 正确。核心结论为：権利を行使できる時から10年。
判断：下面的说法是否正确？ → 正确。核心结论为：各共有者が単独でできる。
判断：下面的说法是否正确？ → 正确。核心结论为：持分価格の過半数。
判断：下面的说法是否正确？ → 正确。核心结论为：共有者全員の同意が原則。ただし法律上の特則がある。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["数字","必考","陷阱","2026合格版","综合记忆","易错点"]},{id:"kenri-008",category:"権利関係",title:"不動産登記法｜真伪",question:"【不動産登記法｜真伪】需要掌握哪些考试要点？",answer:`判断：下面的说法是否正确？ → 正确。核心结论为：相続で不動産を取得したことを知った日等から3年以内。
判断：下面的说法是否正确？ → 正确。核心结论为：10万円以下。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["法改正","数字","2026合格版","综合记忆","易错点"]},{id:"kenri-009",category:"権利関係",title:"抵当権｜真伪",question:"【抵当権｜真伪】需要掌握哪些考试要点？",answer:`判断：下面的说法是否正确？ → 正确。核心结论为：原則として占有を移転しない。
判断：下面的说法是否正确？ → 正确。核心结论为：原則として従う（付従性）。
判断：下面的说法是否正确？ → 正确。核心结论为：原則として登記の先後。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["必考","2026合格版","综合记忆","易错点"]},{id:"kenri-010",category:"権利関係",title:"借地借家法｜真伪",question:"【借地借家法｜真伪】需要掌握哪些考试要点？",answer:`判断：下面的说法是否正确？ → 正确。核心结论为：30年。
判断：下面的说法是否正确？ → 正确。核心结论为：20年。
判断：下面的说法是否正确？ → 正确。核心结论为：10年。
判断：下面的说法是否正确？ → 正确。核心结论为：50年以上。
判断：下面的说法是否正确？ → 正确。核心结论为：原則としてない。
判断：下面的说法是否正确？ → 正确。核心结论为：必要。期間満了で更新がない旨を契約前に説明する。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["数字","必考","陷阱","2026合格版","综合记忆","易错点"]},{id:"kenri-011",category:"権利関係",title:"相続｜真伪",question:"【相続｜真伪】需要掌握哪些考试要点？",answer:`判断：下面的说法是否正确？ → 正确。核心结论为：原則3か月。
判断：下面的说法是否正确？ → 正确。核心结论为：配偶者1/2、子全体1/2。
判断：下面的说法是否正确？ → 正确。核心结论为：配偶者2/3、直系尊属全体1/3。
判断：下面的说法是否正确？ → 正确。核心结论为：配偶者3/4、兄弟姉妹全体1/4。
判断：下面的说法是否正确？ → 正确。核心结论为：ない。
判断：下面的说法是否正确？ → 正确。核心结论为：できない。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["数字","必考","2026合格版","综合记忆","易错点"]},{id:"kenri-012",category:"権利関係",title:"契約不適合責任｜真伪",question:"【契約不適合責任｜真伪】需要掌握哪些考试要点？",answer:`判断：下面的说法是否正确？ → 正确。核心结论为：知った時から1年以内。売主の故意・重過失等には特則がある。
判断顺序：先确认适用制度，再确认主体与时间，最后核对数字、例外和是否属于特例。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["数字","2026合格版","综合记忆","易错点"]},{id:"kenri-013",category:"権利関係",title:"意思表示総合",question:"【意思表示総合】需要掌握哪些考试要点？",answer:`錯誤・詐欺・強迫の比較 → 錯誤＝要件を満たせば取消し。詐欺＝取消し可能で第三者との関係に善意等の論点。強迫＝相手方の善意無過失にかかわらず取消しが問題。
判断顺序：先确认适用制度，再确认主体与时间，最后核对数字、例外和是否属于特例。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["意思表示","比較","2026合格版","扩展知识点","综合记忆","易错点"]},{id:"kenri-014",category:"権利関係",title:"制限行為能力総合",question:"【制限行為能力総合】需要掌握哪些考试要点？",answer:`未成年・成年被後見・被保佐・被補助 → 未成年者・成年被後見人は原則取消可能。被保佐人・被補助人は同意対象行為の範囲が異なる。日常生活行為は取消しの対象外。
判断顺序：先确认适用制度，再确认主体与时间，最后核对数字、例外和是否属于特例。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["制限行為能力","2026合格版","扩展知识点","综合记忆","易错点"]},{id:"kenri-015",category:"権利関係",title:"代理総合",question:"【代理総合】需要掌握哪些考试要点？",answer:`顕名・無権代理・追認・催告 → 代理人が本人のためにすることを示すのが顕名。無権代理は本人の追認で本人に効力。相手方には催告権等。本人が追認しなければ原則本人に効果なし。
判断顺序：先确认适用制度，再确认主体与时间，最后核对数字、例外和是否属于特例。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["代理","無権代理","2026合格版","扩展知识点","综合记忆","易错点"]},{id:"kenri-016",category:"権利関係",title:"表見代理",question:"【表見代理】需要掌握哪些考试要点？",answer:`代理権授与表示・権限外・消滅後 → 表見代理は本人側の帰責性と相手方保護を組み合わせて判断。『代理権が実際にあった』制度ではない。
判断顺序：先确认适用制度，再确认主体与时间，最后核对数字、例外和是否属于特例。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["表見代理","2026合格版","扩展知识点","综合记忆","易错点"]},{id:"kenri-017",category:"権利関係",title:"時効総合",question:"【時効総合】需要掌握哪些考试要点？",answer:`取得時効・消滅時効・完成猶予 → 取得時効＝善意無過失10年、悪意・有過失20年。債権の消滅時効は知った時から5年、権利行使可能時から10年が基本。更新・完成猶予を区別。
判断顺序：先确认适用制度，再确认主体与时间，最后核对数字、例外和是否属于特例。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["時効","10年","20年","5年","2026合格版","扩展知识点","综合记忆","易错点"]},{id:"kenri-018",category:"権利関係",title:"債務不履行",question:"【債務不履行】需要掌握哪些考试要点？",answer:`履行遅滞・履行不能・不完全履行 → 契約内容に応じて履行請求、追完、代金減額、解除、損害賠償等。解除しても損害賠償請求を妨げない。
判断顺序：先确认适用制度，再确认主体与时间，最后核对数字、例外和是否属于特例。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["債務不履行","2026合格版","扩展知识点","综合记忆","易错点"]},{id:"kenri-019",category:"権利関係",title:"契約不適合総合",question:"【契約不適合総合】需要掌握哪些考试要点？",answer:`追完・代金減額・解除・損害賠償・通知 → 契約内容に適合しない目的物なら追完請求、代金減額、要件を満たせば解除・損害賠償。種類・品質不適合を知った場合の通知期間も確認。
判断顺序：先确认适用制度，再确认主体与时间，最后核对数字、例外和是否属于特例。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["契約不適合","2026合格版","扩展知识点","综合记忆","易错点"]},{id:"kenri-020",category:"権利関係",title:"危険負担",question:"【危険負担】需要掌握哪些考试要点？",answer:`契約後の目的物滅失 → 契約成立後の不可抗力による滅失では、履行不能と代金支払義務の関係を考える。単純な『売主負担』暗記は危険。
判断顺序：先确认适用制度，再确认主体与时间，最后核对数字、例外和是否属于特例。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["危険負担","2026合格版","扩展知识点","综合记忆","易错点"]},{id:"kenri-021",category:"権利関係",title:"手付",question:"【手付】需要掌握哪些考试要点？",answer:`解約手付・証約手付・違約手付 → 手付の性質は契約内容による。宅建業者自ら売主では解約手付として扱われる。履行着手前の解除と損害賠償の関係を整理。
判断顺序：先确认适用制度，再确认主体与时间，最后核对数字、例外和是否属于特例。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["手付","2026合格版","扩展知识点","综合记忆","易错点"]},{id:"kenri-022",category:"権利関係",title:"同時履行",question:"【同時履行】需要掌握哪些考试要点？",answer:`双務契約の抗弁 → 売買等の双務契約では、相手方が履行提供するまで自己の履行を拒める場合がある。先履行特約があれば別。
判断顺序：先确认适用制度，再确认主体与时间，最后核对数字、例外和是否属于特例。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["同時履行","2026合格版","扩展知识点","综合记忆","易错点"]},{id:"kenri-023",category:"権利関係",title:"債権譲渡",question:"【債権譲渡】需要掌握哪些考试要点？",answer:`通知・承諾・確定日付 → 債権譲渡を債務者に対抗するには通知または承諾。第三者対抗では確定日付ある証書が重要。二段階で暗記。
判断顺序：先确认适用制度，再确认主体与时间，最后核对数字、例外和是否属于特例。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["債権譲渡","2026合格版","扩展知识点","综合记忆","易错点"]},{id:"kenri-024",category:"権利関係",title:"相殺",question:"【相殺】需要掌握哪些考试要点？",answer:`相殺適状・禁止 → 双方が同種の債務を負い、原則として弁済期が到来していること等が必要。相殺禁止特約や差押えとの関係も出題される。
判断顺序：先确认适用制度，再确认主体与时间，最后核对数字、例外和是否属于特例。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["相殺","2026合格版","扩展知识点","综合记忆","易错点"]},{id:"kenri-025",category:"権利関係",title:"保証総合",question:"【保証総合】需要掌握哪些考试要点？",answer:`保証・連帯保証・根保証 → 保証契約は書面等が必要。連帯保証人には催告・検索の抗弁がない。個人根保証は極度額の定めが必要。
判断顺序：先确认适用制度，再确认主体与时间，最后核对数字、例外和是否属于特例。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["保証","連帯保証","根保証","2026合格版","扩展知识点","综合记忆","易错点"]},{id:"kenri-026",category:"権利関係",title:"連帯債務",question:"【連帯債務】需要掌握哪些考试要点？",answer:`絶対効・相対効 → 一人について生じた事由が他の連帯債務者にも効力を及ぼすかを区別。弁済等の絶対効と、原則相対効の事項を整理。
判断顺序：先确认适用制度，再确认主体与时间，最后核对数字、例外和是否属于特例。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["連帯債務","2026合格版","扩展知识点","综合记忆","易错点"]},{id:"kenri-027",category:"権利関係",title:"抵当権総合",question:"【抵当権総合】需要掌握哪些考试要点？",answer:`物上代位・物上保証人・優先弁済 → 抵当権は目的不動産を占有せず優先弁済を受ける。物上代位は目的物の代替価値に及ぶが差押えが重要。
判断顺序：先确认适用制度，再确认主体与时间，最后核对数字、例外和是否属于特例。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["抵当権","2026合格版","扩展知识点","综合记忆","易错点"]},{id:"kenri-028",category:"権利関係",title:"抵当権と賃貸借",question:"【抵当権と賃貸借】需要掌握哪些考试要点？",answer:`抵当権設定前後と競売 → 賃貸借の対抗要件、抵当権設定登記との先後、競売時の賃貸借の処遇を区別。『抵当権後の賃借権は全部無効』ではない。
判断顺序：先确认适用制度，再确认主体与时间，最后核对数字、例外和是否属于特例。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["抵当権","賃貸借","2026合格版","扩展知识点","综合记忆","易错点"]},{id:"kenri-029",category:"権利関係",title:"物権変動",question:"【物権変動】需要掌握哪些考试要点？",answer:`登記の第三者対抗 → 不動産物権変動は登記が第三者対抗要件。第三者の範囲・背信的悪意者を判例問題として整理。
判断顺序：先确认适用制度，再确认主体与时间，最后核对数字、例外和是否属于特例。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["登記","第三者","2026合格版","扩展知识点","综合记忆","易错点"]},{id:"kenri-030",category:"権利関係",title:"所有権",question:"【所有権】需要掌握哪些考试要点？",answer:`所有権に基づく返還・妨害排除 → 所有権者は所有物の返還、妨害排除、妨害予防を請求できる。占有権との関係を区別。
判断顺序：先确认适用制度，再确认主体与时间，最后核对数字、例外和是否属于特例。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["所有権","2026合格版","扩展知识点","综合记忆","易错点"]},{id:"kenri-031",category:"権利関係",title:"共有総合",question:"【共有総合】需要掌握哪些考试要点？",answer:`保存・管理・変更・分割 → 保存＝各共有者単独。管理＝持分価格の過半数。変更＝原則全員同意。共有物分割請求は原則いつでも可能。
判断顺序：先确认适用制度，再确认主体与时间，最后核对数字、例外和是否属于特例。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["共有","過半数","2026合格版","扩展知识点","综合记忆","易错点"]},{id:"kenri-032",category:"権利関係",title:"相続総合",question:"【相続総合】需要掌握哪些考试要点？",answer:`法定相続分・代襲・遺留分 → 配偶者＋子＝1/2ずつ。配偶者＋直系尊属＝2/3と1/3。配偶者＋兄弟姉妹＝3/4と1/4。兄弟姉妹に遺留分なし。代襲相続も重要。
判断顺序：先确认适用制度，再确认主体与时间，最后核对数字、例外和是否属于特例。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["相続","遺留分","2026合格版","扩展知识点","综合记忆","易错点"]},{id:"kenri-033",category:"権利関係",title:"遺言総合",question:"【遺言総合】需要掌握哪些考试要点？",answer:`自筆・公正証書・秘密証書 → 普通方式は自筆証書、公正証書、秘密証書。自筆証書遺言は財産目録を除き原則全文自書等。公正証書は公証人が作成。
判断顺序：先确认适用制度，再确认主体与时间，最后核对数字、例外和是否属于特例。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["遺言","2026合格版","扩展知识点","综合记忆","易错点"]},{id:"kenri-034",category:"権利関係",title:"配偶者居住権",question:"【配偶者居住権】需要掌握哪些考试要点？",answer:`取得・譲渡・使用 → 一定要件で生存配偶者が居住建物を無償使用。譲渡不可。所有者の承諾なく第三者に使用収益させられない。
判断顺序：先确认适用制度，再确认主体与时间，最后核对数字、例外和是否属于特例。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["配偶者居住権","2026合格版","扩展知识点","综合记忆","易错点"]},{id:"kenri-035",category:"権利関係",title:"普通借地権",question:"【普通借地権】需要掌握哪些考试要点？",answer:`存続期間・更新 → 存続期間30年以上。更新後は最初20年以上、その後10年以上。建物が存在すること等を要件として考える。
判断顺序：先确认适用制度，再确认主体与时间，最后核对数字、例外和是否属于特例。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["借地","30年","20年","10年","2026合格版","扩展知识点","综合记忆","易错点"]},{id:"kenri-036",category:"権利関係",title:"一般定期借地権",question:"【一般定期借地権】需要掌握哪些考试要点？",answer:`50年以上・更新なし・建物買取なし → 存続期間50年以上。更新なし、建物買取請求なし等の特約が可能。書面等で契約。
判断顺序：先确认适用制度，再确认主体与时间，最后核对数字、例外和是否属于特例。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["定期借地","50年","2026合格版","扩展知识点","综合记忆","易错点"]},{id:"kenri-037",category:"権利関係",title:"事業用定期借地権",question:"【事業用定期借地権】需要掌握哪些考试要点？",answer:`10年以上50年未満・公正証書 → 専ら事業用建物の所有を目的とし、10年以上50年未満。公正証書による契約。居住用建物は不可。
判断顺序：先确认适用制度，再确认主体与时间，最后核对数字、例外和是否属于特例。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["事業用定期借地","2026合格版","扩展知识点","综合记忆","易错点"]},{id:"kenri-038",category:"権利関係",title:"建物譲渡特約付借地権",question:"【建物譲渡特約付借地権】需要掌握哪些考试要点？",answer:`30年以上・建物譲渡 → 30年以上経過した時点で建物を相当対価で地主に譲渡する特約。譲渡により借地権が消滅する仕組み。
判断顺序：先确认适用制度，再确认主体与时间，最后核对数字、例外和是否属于特例。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["借地","30年","2026合格版","扩展知识点","综合记忆","易错点"]},{id:"kenri-039",category:"権利関係",title:"定期建物賃貸借",question:"【定期建物賃貸借】需要掌握哪些考试要点？",answer:`更新なし・事前説明・書面 → 期間満了で更新なく終了。契約前に更新がない旨の説明が必要。書面等による契約。
判断顺序：先确认适用制度，再确认主体与时间，最后核对数字、例外和是否属于特例。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["定期借家","2026合格版","扩展知识点","综合记忆","易错点"]},{id:"kenri-040",category:"権利関係",title:"普通借家",question:"【普通借家】需要掌握哪些考试要点？",answer:`正当事由・法定更新 → 貸主からの更新拒絶や解約申入れには正当事由が必要。期間満了だけで当然終了とはならない。
判断顺序：先确认适用制度，再确认主体与时间，最后核对数字、例外和是否属于特例。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["借家","正当事由","2026合格版","扩展知识点","综合记忆","易错点"]},{id:"kenri-041",category:"権利関係",title:"賃料増減請求",question:"【賃料増減請求】需要掌握哪些考试要点？",answer:`事情変更と特約 → 租税公課、経済事情、近傍同種賃料等で不相当となった場合、増減請求が問題。一定の特約の効力も区別。
判断顺序：先确认适用制度，再确认主体与时间，最后核对数字、例外和是否属于特例。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["借賃増減","2026合格版","扩展知识点","综合记忆","易错点"]},{id:"kenri-042",category:"権利関係",title:"区分所有総合",question:"【区分所有総合】需要掌握哪些考试要点？",answer:`専有部分・共用部分・敷地利用権 → 専有部分と共用部分を区別。規約共用部分、敷地利用権、専有部分の処分制限を一緒に整理。
判断顺序：先确认适用制度，再确认主体与时间，最后核对数字、例外和是否属于特例。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["区分所有","2026合格版","扩展知识点","综合记忆","易错点"]},{id:"kenri-043",category:"権利関係",title:"区分所有決議",question:"【区分所有決議】需要掌握哪些考试要点？",answer:`普通決議・重大変更・建替え → 議決権と区分所有者数の双方が関係。重大な変更や建替えは特別多数決。制度ごとの数字を別々に暗記。
判断顺序：先确认适用制度，再确认主体与时间，最后核对数字、例外和是否属于特例。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["区分所有","決議","2026合格版","扩展知识点","综合记忆","易错点"]},{id:"kenri-044",category:"権利関係",title:"不動産登記",question:"【不動産登記】需要掌握哪些考试要点？",answer:`表示登記・権利登記・申請主義 → 表示に関する登記と権利に関する登記を区別。所有権移転は権利登記。申請主義と職権登記の例外を確認。
判断顺序：先确认适用制度，再确认主体与时间，最后核对数字、例外和是否属于特例。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["登記","2026合格版","扩展知识点","综合记忆","易错点"]},{id:"kenri-045",category:"権利関係",title:"相続登記",question:"【相続登記】需要掌握哪些考试要点？",answer:`3年・10万円以下・遺産分割後3年 → 相続・遺贈で取得を知った日から3年以内。遺産分割で取得した場合も分割成立日から3年以内。正当な理由なく違反で10万円以下の過料。
判断顺序：先确认适用制度，再确认主体与时间，最后核对数字、例外和是否属于特例。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["相続登記","3年","10万円","2026合格版","扩展知识点","综合记忆","易错点"]},{id:"kenri-046",category:"権利関係",title:"不法行為",question:"【不法行為】需要掌握哪些考试要点？",answer:`一般3年・生命身体5年・20年 → 損害と加害者を知った時から原則3年、生命・身体侵害は5年。行為時から20年の期間制限も重要。
判断顺序：先确认适用制度，再确认主体与时间，最后核对数字、例外和是否属于特例。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["不法行為","3年","5年","20年","2026合格版","扩展知识点","综合记忆","易错点"]},{id:"kenri-047",category:"権利関係",title:"契約の解除",question:"【契約の解除】需要掌握哪些考试要点？",answer:`解除の効果と原状回復 → 解除により契約関係を解消し、原状回復義務が生じる。解除と取消しは別制度。損害賠償請求を妨げない。
判断顺序：先确认适用制度，再确认主体与时间，最后核对数字、例外和是否属于特例。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["解除","取消し","2026合格版","扩展知识点","综合记忆","易错点"]},{id:"kenri-048",category:"権利関係",title:"無効と取消し",question:"【無効と取消し】需要掌握哪些考试要点？",answer:`無効・取消しの違い → 無効＝初めから効力を生じない。取消し＝取消されるまでは一応有効。取消し後は遡及的に無効となる。
判断顺序：先确认适用制度，再确认主体与时间，最后核对数字、例外和是否属于特例。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["無効","取消し","2026合格版","扩展知识点","综合记忆","易错点"]},{id:"kenri-049",category:"権利関係",title:"代理権消滅",question:"【代理権消滅】需要掌握哪些考试要点？",answer:`本人死亡・代理人死亡等 → 代理権の消滅原因を整理。本人・代理人の死亡、法人の解散等、任意代理と法定代理で違いがある。
判断顺序：先确认适用制度，再确认主体与时间，最后核对数字、例外和是否属于特例。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["代理権","2026合格版","扩展知识点","综合记忆","易错点"]},{id:"kenri-050",category:"権利関係",title:"法人",question:"【法人】需要掌握哪些考试要点？",answer:`法人格と代表 → 法人は独立した権利義務主体。代表者の行為が法人に帰属する。代表権濫用・制限と第三者保護を区別。
判断顺序：先确认适用制度，再确认主体与时间，最后核对数字、例外和是否属于特例。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["法人","2026合格版","扩展知识点","综合记忆","易错点"]}],Ns=[{id:"hourei-001",category:"法令上の制限",title:"都市計画法",question:"【都市計画法】需要掌握哪些考试要点？",answer:`用途地域は何種類？ → 13種類。
考场速记：13種類。
市街化区域とは？ → 既成市街地及びおおむね10年以内に優先的・計画的に市街化を図る区域。
考场速记：既成市街地及びおおむね10年以内に優先的・計画的に市街化を図る区域。
市街化調整区域とは？ → 市街化を抑制すべき区域。
考场速记：市街化を抑制すべき区域。
開発行為とは？ → 主として建築物の建築等を目的とする土地の区画形質の変更。
考场速记：主として建築物の建築等を目的とする土地の区画形質の変更。
【易错点】反向判断陷阱：不正确。正确结论是：13種類。；反向判断陷阱：不正确。正确结论是：既成市街地及びおおむね10年以内に優先的・計画的に市街化を図る区域。；反向判断陷阱：不正确。正确结论是：市街化を抑制すべき区域。；反向判断陷阱：不正确。正确结论是：主として建築物の建築等を目的とする土地の区画形質の変更。；通用陷阱：不要只背结论，要同时确认“谁、何时、多少、例外条件”。`,tags:["数字","必考","2026合格版","综合记忆","易错点"]},{id:"hourei-002",category:"法令上の制限",title:"建築基準法",question:"【建築基準法】需要掌握哪些考试要点？",answer:`敷地の接道義務の基本は？ → 建築基準法上の道路に2m以上接すること。
考场速记：建築基準法上の道路に2m以上接すること。
建築基準法上の道路の原則幅員は？ → 4m以上。
考场速记：4m以上。
2項道路では何に注意する？ → 原則としてセットバックが必要。
考场速记：原則としてセットバックが必要。
建蔽率の計算式は？ → 建築面積÷敷地面積×100%。
考场速记：建築面積÷敷地面積×100%。
容積率の計算式は？ → 延べ面積÷敷地面積×100%。
考场速记：延べ面積÷敷地面積×100%。
第一種・第二種低層住居専用地域の絶対高さ制限の基本は？ → 原則10mまたは12m。
考场速记：原則10mまたは12m。
工業専用地域で住宅を建築できるか？ → 原則としてできない。
考场速记：原則としてできない。
既存不適格建築物は違法建築物と同じか？ → 同じではない。建築時は適法で、その後の法改正等で現行基準に適合しなくなったもの。
考场速记：同じではない。建築時は適法で、その後の法改正等で現行基準に適合しなくなったもの。
【易错点】反向判断陷阱：不正确。正确结论是：建築基準法上の道路に2m以上接すること。；反向判断陷阱：不正确。正确结论是：4m以上。；反向判断陷阱：不正确。正确结论是：原則としてセットバックが必要。；反向判断陷阱：不正确。正确结论是：建築面積÷敷地面積×100%。；反向判断陷阱：不正确。正确结论是：延べ面積÷敷地面積×100%。；反向判断陷阱：不正确。正确结论是：原則10mまたは12m。；反向判断陷阱：不正确。正确结论是：原則としてできない。；反向判断陷阱：不正确。正确结论是：同じではない。建築時は適法で、その後の法改正等で現行基準に適合しなくなったもの。；通用陷阱：不要只背结论，要同时确认“谁、何时、多少、例外条件”。`,tags:["数字","必考","陷阱","2026合格版","综合记忆","易错点"]},{id:"hourei-003",category:"法令上の制限",title:"建築物省エネ法",question:"【建築物省エネ法】需要掌握哪些考试要点？",answer:`新築建築物の省エネ基準適合義務の全面拡大はいつから？ → 2025年4月1日から。
考场速记：2025年4月1日から。
省エネ基準適合義務の例外として覚える床面積は？ → 10㎡以下等の法定例外がある。
考场速记：10㎡以下等の法定例外がある。
【易错点】反向判断陷阱：不正确。正确结论是：2025年4月1日から。；反向判断陷阱：不正确。正确结论是：10㎡以下等の法定例外がある。；通用陷阱：不要只背结论，要同时确认“谁、何时、多少、例外条件”。`,tags:["法改正","数字","2026合格版","综合记忆","易错点"]},{id:"hourei-004",category:"法令上の制限",title:"国土利用計画法",question:"【国土利用計画法】需要掌握哪些考试要点？",answer:`市街化区域の事後届出面積は？ → 2,000㎡以上。
考场速记：2,000㎡以上。
市街化区域以外の都市計画区域の事後届出面積は？ → 5,000㎡以上。
考场速记：5,000㎡以上。
都市計画区域外の事後届出面積は？ → 10,000㎡以上。
考场速记：10,000㎡以上。
事後届出の期限は？ → 契約締結後2週間以内。
考场速记：契約締結後2週間以内。
届出面積と事後届出 → 市街化区域2,000㎡以上、市街化区域を除く都市計画区域5,000㎡以上、都市計画区域外10,000㎡以上が基本。『事後届出』と注視区域等を区別。
【易错点】反向判断陷阱：不正确。正确结论是：2,000㎡以上。；反向判断陷阱：不正确。正确结论是：5,000㎡以上。；反向判断陷阱：不正确。正确结论是：10,000㎡以上。；反向判断陷阱：不正确。正确结论是：契約締結後2週間以内。；通用陷阱：不要只背结论，要同时确认“谁、何时、多少、例外条件”。`,tags:["数字","必考","2000㎡","5000㎡","10000㎡","2026合格版","扩展知识点","综合记忆","易错点"]},{id:"hourei-005",category:"法令上の制限",title:"農地法",question:"【農地法】需要掌握哪些考试要点？",answer:`農地を農地のまま権利移転する基本条文は？ → 農地法3条。
考场速记：農地法3条。
自己転用の基本条文は？ → 農地法4条。
考场速记：農地法4条。
転用＋権利移転の基本条文は？ → 農地法5条。
考场速记：農地法5条。
【易错点】反向判断陷阱：不正确。正确结论是：農地法3条。；反向判断陷阱：不正确。正确结论是：農地法4条。；反向判断陷阱：不正确。正确结论是：農地法5条。；通用陷阱：不要只背结论，要同时确认“谁、何时、多少、例外条件”。`,tags:["数字","必考","2026合格版","综合记忆","易错点"]},{id:"hourei-006",category:"法令上の制限",title:"土地区画整理法",question:"【土地区画整理法】需要掌握哪些考试要点？",answer:`換地処分の公告の効力発生日は？ → 原則として公告の翌日。
考场速记：原則として公告の翌日。
換地処分・公告・清算金 → 換地処分の公告があった場合、原則として公告の翌日から換地を従前の土地とみなす。清算金・保留地・仮換地を区別。
【易错点】反向判断陷阱：不正确。正确结论是：原則として公告の翌日。；通用陷阱：不要只背结论，要同时确认“谁、何时、多少、例外条件”。`,tags:["数字","土地区画整理","2026合格版","扩展知识点","综合记忆","易错点"]},{id:"hourei-007",category:"法令上の制限",title:"盛土規制法",question:"【盛土規制法】需要掌握哪些考试要点？",answer:`盛土規制法の施行日は？ → 2023年5月26日。
考场速记：2023年5月26日。
盛土規制法は土地用途を宅地に限定するか？ → 限定しない。農地・森林等も対象となり得る。
考场速记：限定しない。農地・森林等も対象となり得る。
規制区域の基本区分は？ → 宅地造成等工事規制区域と特定盛土等規制区域。
考场速记：宅地造成等工事規制区域と特定盛土等規制区域。
対象規模の盛土等を規制区域内で行う場合の基本手続は？ → 原則として都道府県知事等の許可が必要。
考场速记：原則として都道府県知事等の許可が必要。
盛土規制法の許可基準を『2mまたは500㎡』だけで判断できるか？ → できない。規制区域と工事類型・規模に応じた法令上の基準で判断する。
考场速记：できない。規制区域と工事類型・規模に応じた法令上の基準で判断する。
2区域・許可・届出・特定盛土 → 宅地造成等工事規制区域と特定盛土等規制区域を区別。対象規模の盛土・切土・土石堆積等について許可・届出制度がある。『2m/500㎡だけで全国一律』とはしない。
【易错点】反向判断陷阱：不正确。正确结论是：2023年5月26日。；反向判断陷阱：不正确。正确结论是：限定しない。農地・森林等も対象となり得る。；反向判断陷阱：不正确。正确结论是：宅地造成等工事規制区域と特定盛土等規制区域。；反向判断陷阱：不正确。正确结论是：原則として都道府県知事等の許可が必要。；反向判断陷阱：不正确。正确结论是：できない。規制区域と工事類型・規模に応じた法令上の基準で判断する。；通用陷阱：不要只背结论，要同时确认“谁、何时、多少、例外条件”。`,tags:["法改正","数字","必考","重要修正","盛土規制法","2023","2026合格版","扩展知识点","综合记忆","易错点"]},{id:"hourei-008",category:"法令上の制限",title:"都市計画法｜真伪",question:"【都市計画法｜真伪】需要掌握哪些考试要点？",answer:`判断：下面的说法是否正确？ → 正确。核心结论为：13種類。
判断：下面的说法是否正确？ → 正确。核心结论为：既成市街地及びおおむね10年以内に優先的・計画的に市街化を図る区域。
判断：下面的说法是否正确？ → 正确。核心结论为：市街化を抑制すべき区域。
判断：下面的说法是否正确？ → 正确。核心结论为：主として建築物の建築等を目的とする土地の区画形質の変更。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["数字","必考","2026合格版","综合记忆","易错点"]},{id:"hourei-009",category:"法令上の制限",title:"建築基準法｜真伪",question:"【建築基準法｜真伪】需要掌握哪些考试要点？",answer:`判断：下面的说法是否正确？ → 正确。核心结论为：建築基準法上の道路に2m以上接すること。
判断：下面的说法是否正确？ → 正确。核心结论为：4m以上。
判断：下面的说法是否正确？ → 正确。核心结论为：原則としてセットバックが必要。
判断：下面的说法是否正确？ → 正确。核心结论为：建築面積÷敷地面積×100%。
判断：下面的说法是否正确？ → 正确。核心结论为：延べ面積÷敷地面積×100%。
判断：下面的说法是否正确？ → 正确。核心结论为：原則10mまたは12m。
判断：下面的说法是否正确？ → 正确。核心结论为：原則としてできない。
判断：下面的说法是否正确？ → 正确。核心结论为：同じではない。建築時は適法で、その後の法改正等で現行基準に適合しなくなったもの。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["数字","必考","陷阱","2026合格版","综合记忆","易错点"]},{id:"hourei-010",category:"法令上の制限",title:"建築物省エネ法｜真伪",question:"【建築物省エネ法｜真伪】需要掌握哪些考试要点？",answer:`判断：下面的说法是否正确？ → 正确。核心结论为：2025年4月1日から。
判断：下面的说法是否正确？ → 正确。核心结论为：10㎡以下等の法定例外がある。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["法改正","数字","2026合格版","综合记忆","易错点"]},{id:"hourei-011",category:"法令上の制限",title:"国土利用計画法｜真伪",question:"【国土利用計画法｜真伪】需要掌握哪些考试要点？",answer:`判断：下面的说法是否正确？ → 正确。核心结论为：2,000㎡以上。
判断：下面的说法是否正确？ → 正确。核心结论为：5,000㎡以上。
判断：下面的说法是否正确？ → 正确。核心结论为：10,000㎡以上。
判断：下面的说法是否正确？ → 正确。核心结论为：契約締結後2週間以内。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["数字","必考","2026合格版","综合记忆","易错点"]},{id:"hourei-012",category:"法令上の制限",title:"農地法｜真伪",question:"【農地法｜真伪】需要掌握哪些考试要点？",answer:`判断：下面的说法是否正确？ → 正确。核心结论为：農地法3条。
判断：下面的说法是否正确？ → 正确。核心结论为：農地法4条。
判断：下面的说法是否正确？ → 正确。核心结论为：農地法5条。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["数字","必考","2026合格版","综合记忆","易错点"]},{id:"hourei-013",category:"法令上の制限",title:"土地区画整理法｜真伪",question:"【土地区画整理法｜真伪】需要掌握哪些考试要点？",answer:`判断：下面的说法是否正确？ → 正确。核心结论为：原則として公告の翌日。
判断顺序：先确认适用制度，再确认主体与时间，最后核对数字、例外和是否属于特例。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["数字","2026合格版","综合记忆","易错点"]},{id:"hourei-014",category:"法令上の制限",title:"盛土規制法｜真伪",question:"【盛土規制法｜真伪】需要掌握哪些考试要点？",answer:`判断：下面的说法是否正确？ → 正确。核心结论为：2023年5月26日。
判断：下面的说法是否正确？ → 正确。核心结论为：限定しない。農地・森林等も対象となり得る。
判断：下面的说法是否正确？ → 正确。核心结论为：宅地造成等工事規制区域と特定盛土等規制区域。
判断：下面的说法是否正确？ → 正确。核心结论为：原則として都道府県知事等の許可が必要。
判断：下面的说法是否正确？ → 正确。核心结论为：できない。規制区域と工事類型・規模に応じた法令上の基準で判断する。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["法改正","数字","必考","重要修正","2026合格版","综合记忆","易错点"]},{id:"hourei-015",category:"法令上の制限",title:"都市計画法総合",question:"【都市計画法総合】需要掌握哪些考试要点？",answer:`都市計画区域・準都市計画区域・区域区分 → 都市計画区域内で区域区分を定める場合、市街化区域・市街化調整区域に分ける。非線引き区域は区域区分なし。準都市計画区域は土地利用整序のため指定。
判断顺序：先确认适用制度，再确认主体与时间，最后核对数字、例外和是否属于特例。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["都市計画法","区域","2026合格版","扩展知识点","综合记忆","易错点"]},{id:"hourei-016",category:"法令上の制限",title:"市街化区域",question:"【市街化区域】需要掌握哪些考试要点？",answer:`おおむね10年以内に優先的・計画的に市街化 → 市街化区域＝既成市街地＋おおむね10年以内に優先的・計画的に市街化を図る区域。調整区域は市街化を抑制。
判断顺序：先确认适用制度，再确认主体与时间，最后核对数字、例外和是否属于特例。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["市街化区域","10年","2026合格版","扩展知识点","综合记忆","易错点"]},{id:"hourei-017",category:"法令上の制限",title:"開発許可",question:"【開発許可】需要掌握哪些考试要点？",answer:`開発行為の定義と許可主体 → 建築物の建築等を目的として土地の区画形質を変更する行為が開発行為。原則として都道府県知事等の許可。
判断顺序：先确认适用制度，再确认主体与时间，最后核对数字、例外和是否属于特例。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["開発許可","2026合格版","扩展知识点","综合记忆","易错点"]},{id:"hourei-018",category:"法令上の制限",title:"開発許可面積",question:"【開発許可面積】需要掌握哪些考试要点？",answer:`市街化区域・非線引き等の基準 → 市街化区域では1,000㎡・3,000㎡など区域により基準が異なる。非線引き区域・準都市計画区域も基準を確認。条例による引下げ等に注意。
判断顺序：先确认适用制度，再确认主体与时间，最后核对数字、例外和是否属于特例。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["1000㎡","3000㎡","2026合格版","扩展知识点","综合记忆","易错点"]},{id:"hourei-019",category:"法令上の制限",title:"市街化調整区域",question:"【市街化調整区域】需要掌握哪些考试要点？",answer:`開発許可の原則と例外 → 市街化調整区域では開発行為は原則許可制。法定の例外・立地基準を確認。『調整区域は開発不可』と断定しない。
判断顺序：先确认适用制度，再确认主体与时间，最后核对数字、例外和是否属于特例。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["調整区域","2026合格版","扩展知识点","综合记忆","易错点"]},{id:"hourei-020",category:"法令上の制限",title:"建築確認総合",question:"【建築確認総合】需要掌握哪些考试要点？",answer:`確認対象・区域・用途変更 → 一定規模の新築・増改築・用途変更等に建築確認。都市計画区域等と区域外で対象が異なる。特殊建築物への用途変更も要注意。
判断顺序：先确认适用制度，再确认主体与时间，最后核对数字、例外和是否属于特例。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["建築確認","2026合格版","扩展知识点","综合记忆","易错点"]},{id:"hourei-021",category:"法令上の制限",title:"道路",question:"【道路】需要掌握哪些考试要点？",answer:`42条道路・2項道路・接道 → 原則4m以上の道路に2m以上接道。2項道路はセットバックが重要。道路の種類と敷地の接道を分けて判断。
判断顺序：先确认适用制度，再确认主体与时间，最后核对数字、例外和是否属于特例。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["4m","2m","2項道路","2026合格版","扩展知识点","综合记忆","易错点"]},{id:"hourei-022",category:"法令上の制限",title:"セットバック",question:"【セットバック】需要掌握哪些考试要点？",answer:`道路中心線から2m → 2項道路では原則として道路中心線から2m後退した線が道路境界線とみなされる。後退部分は建築敷地に算入できない。
判断顺序：先确认适用制度，再确认主体与时间，最后核对数字、例外和是否属于特例。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["2m","セットバック","2026合格版","扩展知识点","综合记忆","易错点"]},{id:"hourei-023",category:"法令上の制限",title:"用途地域",question:"【用途地域】需要掌握哪些考试要点？",answer:`13用途地域と用途制限 → 住居系・商業系・工業系の13用途地域。建築できる用途は地域ごとに異なる。用途地域の名称だけで建築可否を断定しない。
判断顺序：先确认适用制度，再确认主体与时间，最后核对数字、例外和是否属于特例。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["用途地域","2026合格版","扩展知识点","综合记忆","易错点"]},{id:"hourei-024",category:"法令上の制限",title:"建ぺい率",question:"【建ぺい率】需要掌握哪些考试要点？",answer:`計算・角地・防火地域 → 建築面積÷敷地面積。角地等の緩和、防火地域内の一定の耐火建築物等の緩和がある。指定建ぺい率を超える場合でも特例を確認。
判断顺序：先确认适用制度，再确认主体与时间，最后核对数字、例外和是否属于特例。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["建ぺい率","角地","2026合格版","扩展知识点","综合记忆","易错点"]},{id:"hourei-025",category:"法令上の制限",title:"容積率",question:"【容積率】需要掌握哪些考试要点？",answer:`計算・前面道路幅員 → 延べ面積÷敷地面積。前面道路幅員12m未満なら道路幅員による制限と指定容積率の小さい方。用途地域別係数を整理。
判断顺序：先确认适用制度，再确认主体与时间，最后核对数字、例外和是否属于特例。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["容積率","12m","2026合格版","扩展知识点","综合记忆","易错点"]},{id:"hourei-026",category:"法令上の制限",title:"高さ制限",question:"【高さ制限】需要掌握哪些考试要点？",answer:`道路斜線・隣地斜線・北側斜線 → 高さ制限は用途地域や区域により適用関係が異なる。北側斜線は主に住居系用途地域等で問題になる。
判断顺序：先确认适用制度，再确认主体与时间，最后核对数字、例外和是否属于特例。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["高さ制限","2026合格版","扩展知识点","综合记忆","易错点"]},{id:"hourei-027",category:"法令上の制限",title:"防火・準防火",question:"【防火・準防火】需要掌握哪些考试要点？",answer:`建築物の防火規制 → 防火地域・準防火地域では建築物の規模・構造に応じた耐火・準耐火等の規制。防火地域内の一定の耐火建築物には建ぺい率緩和。
判断顺序：先确认适用制度，再确认主体与时间，最后核对数字、例外和是否属于特例。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["防火地域","2026合格版","扩展知识点","综合记忆","易错点"]},{id:"hourei-028",category:"法令上の制限",title:"農地法総合",question:"【農地法総合】需要掌握哪些考试要点？",answer:`3条・4条・5条 → 3条＝農地のまま権利移動。4条＝権利移動なしの転用。5条＝転用＋権利移動。許可権者・市街化区域内の特例も確認。
判断顺序：先确认适用制度，再确认主体与时间，最后核对数字、例外和是否属于特例。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["農地法","3条","4条","5条","2026合格版","扩展知识点","综合记忆","易错点"]},{id:"hourei-029",category:"法令上の制限",title:"農地転用",question:"【農地転用】需要掌握哪些考试要点？",answer:`市街化区域内の届出 → 市街化区域内の農地転用には、一定の場合に許可ではなく届出となる特例がある。3条・4条・5条を先に分類してから区域特例を判断。
判断顺序：先确认适用制度，再确认主体与时间，最后核对数字、例外和是否属于特例。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["農地法","市街化区域","2026合格版","扩展知识点","综合记忆","易错点"]},{id:"hourei-030",category:"法令上の制限",title:"仮換地",question:"【仮換地】需要掌握哪些考试要点？",answer:`従前地との関係 → 仮換地指定後は仮換地を使用収益する。所有権そのものが直ちに仮換地へ移るわけではない。換地処分との違いを覚える。
判断顺序：先确认适用制度，再确认主体与时间，最后核对数字、例外和是否属于特例。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["仮換地","2026合格版","扩展知识点","综合记忆","易错点"]},{id:"hourei-031",category:"法令上の制限",title:"建築協定",question:"【建築協定】需要掌握哪些考试要点？",answer:`土地所有者等の合意による地域ルール → 建築物の敷地、位置、構造、用途、形態等に関する基準を定める。認可を受けた建築協定は区域内で効力を持つ。
判断顺序：先确认适用制度，再确认主体与时间，最后核对数字、例外和是否属于特例。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["建築協定","2026合格版","扩展知识点","综合记忆","易错点"]},{id:"hourei-032",category:"法令上の制限",title:"都市計画施設",question:"【都市計画施設】需要掌握哪些考试要点？",answer:`区域内建築の許可 → 都市計画施設の区域内で建築物を建築する場合、一定の許可が必要。都市計画決定だけで全ての建築が直ちに禁止されるわけではない。
判断顺序：先确认适用制度，再确认主体与时间，最后核对数字、例外和是否属于特例。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["都市計画施設","2026合格版","扩展知识点","综合记忆","易错点"]},{id:"hourei-033",category:"法令上の制限",title:"都市計画事業制限",question:"【都市計画事業制限】需要掌握哪些考试要点？",answer:`事業認可後の制限 → 都市計画事業の認可等がされた区域では建築等に特別の制限。『都市計画決定』と『事業認可』の段階を区別。
判断顺序：先确认适用制度，再确认主体与时间，最后核对数字、例外和是否属于特例。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["都市計画事業","2026合格版","扩展知识点","综合记忆","易错点"]},{id:"hourei-034",category:"法令上の制限",title:"省エネ基準",question:"【省エネ基準】需要掌握哪些考试要点？",answer:`2025年4月から原則全面適合義務 → 2025年4月1日から原則として新築住宅・非住宅建築物は省エネ基準適合義務。床面積10㎡以下などの法定除外がある。2026年は施行後制度。
判断顺序：先确认适用制度，再确认主体与时间，最后核对数字、例外和是否属于特例。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["省エネ","2025","10㎡","2026合格版","扩展知识点","综合记忆","易错点"]},{id:"hourei-035",category:"法令上の制限",title:"建築基準法改正",question:"【建築基準法改正】需要掌握哪些考试要点？",answer:`木造建築物の構造規定見直し → 2025年改正で省エネ化に伴う木造建築物の構造関係規定等が見直された。旧教材の高さ・規模基準をそのまま使わない。
判断顺序：先确认适用制度，再确认主体与时间，最后核对数字、例外和是否属于特例。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["2025改正","木造","2026合格版","扩展知识点","综合记忆","易错点"]},{id:"hourei-036",category:"法令上の制限",title:"宅地造成等規制",question:"【宅地造成等規制】需要掌握哪些考试要点？",answer:`旧宅造法との関係 → 盛土規制法は従来の宅地造成等規制法を抜本改正した制度。宅地だけでなく農地・森林等も対象になり得る。
判断顺序：先确认适用制度，再确认主体与时间，最后核对数字、例外和是否属于特例。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["盛土規制法","2026合格版","扩展知识点","综合记忆","易错点"]},{id:"hourei-037",category:"法令上の制限",title:"自然公園法",question:"【自然公園法】需要掌握哪些考试要点？",answer:`特別地域等の行為規制 → 自然公園内では特別地域・特別保護地区等で建築・土地形状変更等に許可等が必要。国立公園等の区域を区別。
判断顺序：先确认适用制度，再确认主体与时间，最后核对数字、例外和是否属于特例。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["自然公園法","2026合格版","扩展知识点","综合记忆","易错点"]},{id:"hourei-038",category:"法令上の制限",title:"河川法",question:"【河川法】需要掌握哪些考试要点？",answer:`河川区域内の行為 → 河川区域内で工作物の新築、土地の掘削等を行う場合、河川管理者の許可が問題になる。宅建の法令制限では対象区域と許可行為を整理。
判断顺序：先确认适用制度，再确认主体与时间，最后核对数字、例外和是否属于特例。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["河川法","2026合格版","扩展知识点","综合记忆","易错点"]},{id:"hourei-039",category:"法令上の制限",title:"森林法",question:"【森林法】需要掌握哪些考试要点？",answer:`林地開発許可 → 地域森林計画対象民有林等では一定規模の開発に許可が必要。保安林では別途規制が強い。
判断顺序：先确认适用制度，再确认主体与时间，最后核对数字、例外和是否属于特例。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["森林法","2026合格版","扩展知识点","综合记忆","易错点"]},{id:"hourei-040",category:"法令上の制限",title:"文化財保護法",question:"【文化財保護法】需要掌握哪些考试要点？",answer:`重要な遺跡等の区域 → 埋蔵文化財包蔵地等で土木工事を行う場合の届出等が問題。法令上の制限では文化財保護法も出題対象。
判断顺序：先确认适用制度，再确认主体与时间，最后核对数字、例外和是否属于特例。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["文化財","2026合格版","扩展知识点","综合记忆","易错点"]}],js=[{id:"zei-001",category:"税・その他",title:"不動産取得税",question:"【不動産取得税】需要掌握哪些考试要点？",answer:`住宅取得の不動産取得税率の現行特例は？ → 3%。本則4%。
考场速记：3%。本則4%。
新築住宅の一般的な課税標準控除額は？ → 1,200万円。
考场速记：1,200万円。
認定長期優良住宅の新築住宅控除額の特例は？ → 1,300万円。
考场速记：1,300万円。
【易错点】反向判断陷阱：不正确。正确结论是：3%。本則4%。；反向判断陷阱：不正确。正确结论是：1,200万円。；反向判断陷阱：不正确。正确结论是：1,300万円。；通用陷阱：不要只背结论，要同时确认“谁、何时、多少、例外条件”。`,tags:["法改正","数字","2026合格版","综合记忆","易错点"]},{id:"zei-002",category:"税・その他",title:"登録免許税",question:"【登録免許税】需要掌握哪些考试要点？",answer:`所有権保存登記の本則税率は？ → 0.4%。
考场速记：0.4%。
所有権移転登記の本則税率は？ → 2%。
考场速记：2%。
土地売買による所有権移転登記の現行特例税率は？ → 1.5%。
考场速记：1.5%。
【易错点】反向判断陷阱：不正确。正确结论是：0.4%。；反向判断陷阱：不正确。正确结论是：2%。；反向判断陷阱：不正确。正确结论是：1.5%。；通用陷阱：不要只背结论，要同时确认“谁、何时、多少、例外条件”。`,tags:["数字","法改正","2026合格版","综合记忆","易错点"]},{id:"zei-003",category:"税・その他",title:"固定資産税",question:"【固定資産税】需要掌握哪些考试要点？",answer:`固定資産税の標準税率は？ → 1.4%。
考场速记：1.4%。
小規模住宅用地の面積基準は？ → 200㎡以下。
考场速记：200㎡以下。
小規模住宅用地の課税標準特例は？ → 価格の1/6。
考场速记：価格の1/6。
一般住宅用地の課税標準特例は？ → 価格の1/3。
考场速记：価格の1/3。
【易错点】反向判断陷阱：不正确。正确结论是：1.4%。；反向判断陷阱：不正确。正确结论是：200㎡以下。；反向判断陷阱：不正确。正确结论是：価格の1/6。；反向判断陷阱：不正确。正确结论是：価格の1/3。；通用陷阱：不要只背结论，要同时确认“谁、何时、多少、例外条件”。`,tags:["数字","2026合格版","综合记忆","易错点"]},{id:"zei-004",category:"税・その他",title:"都市計画税",question:"【都市計画税】需要掌握哪些考试要点？",answer:`都市計画税の税率上限は？ → 0.3%。
考场速记：0.3%。
0.3%・市街化区域 → 都市計画税は市町村が条例で課税。税率上限0.3%。原則として市街化区域内の土地・家屋が対象。
【易错点】反向判断陷阱：不正确。正确结论是：0.3%。；通用陷阱：不要只背结论，要同时确认“谁、何时、多少、例外条件”。`,tags:["数字","都市計画税","0.3%","2026合格版","扩展知识点","综合记忆","易错点"]},{id:"zei-005",category:"税・その他",title:"印紙税",question:"【印紙税】需要掌握哪些考试要点？",answer:`電子契約に印紙税はかかるか？ → 紙の課税文書を作成しない単純な電子契約は、印紙税の課税文書ではない。
考场速记：紙の課税文書を作成しない単純な電子契約は、印紙税の課税文書ではない。
不動産売買契約書は印紙税の何号文書？ → 第1号文書。
考场速记：第1号文書。
紙の契約書を複数作成したら各通課税されるか？ → 原則として各文書について課税関係を判断する。
考场速记：原則として各文書について課税関係を判断する。
紙・電子の区別 → 印紙税は課税文書が対象。電子データのみで締結した契約は課税文書に該当しない。紙の契約書を別途作成すれば、その紙文書について課税関係が生じ得る。
【易错点】反向判断陷阱：不正确。正确结论是：紙の課税文書を作成しない単純な電子契約は、印紙税の課税文書ではない。；反向判断陷阱：不正确。正确结论是：第1号文書。；反向判断陷阱：不正确。正确结论是：原則として各文書について課税関係を判断する。；通用陷阱：不要只背结论，要同时确认“谁、何时、多少、例外条件”。`,tags:["必考","印紙税","電子契約","2026合格版","扩展知识点","综合记忆","易错点"]},{id:"zei-006",category:"税・その他",title:"譲渡所得",question:"【譲渡所得】需要掌握哪些考试要点？",answer:`長期譲渡所得の判定基準日は？ → 譲渡した年の1月1日現在で所有期間5年超。
考场速记：譲渡した年の1月1日現在で所有期間5年超。
短期譲渡所得の判定基準は？ → 譲渡した年の1月1日現在で所有期間5年以下。
考场速记：譲渡した年の1月1日現在で所有期間5年以下。
居住用財産の3,000万円特別控除とは？ → 一定要件を満たすマイホームの譲渡所得から最高3,000万円を控除する制度。
考场速记：一定要件を満たすマイホームの譲渡所得から最高3,000万円を控除する制度。
短期・長期と1月1日基準 → 土地建物の譲渡所得は分離課税。所有期間5年以下＝短期、5年超＝長期。判定は譲渡した年の1月1日時点。
【易错点】反向判断陷阱：不正确。正确结论是：譲渡した年の1月1日現在で所有期間5年超。；反向判断陷阱：不正确。正确结论是：譲渡した年の1月1日現在で所有期間5年以下。；反向判断陷阱：不正确。正确结论是：一定要件を満たすマイホームの譲渡所得から最高3,000万円を控除する制度。；通用陷阱：不要只背结论，要同时确认“谁、何时、多少、例外条件”。`,tags:["数字","譲渡所得","5年","2026合格版","扩展知识点","综合记忆","易错点"]},{id:"zei-007",category:"税・その他",title:"消費税",question:"【消費税】需要掌握哪些考试要点？",answer:`土地の譲渡は消費税課税か？ → 原則として非課税。
考场速记：原則として非課税。
住宅の貸付けは消費税課税か？ → 居住用の住宅の貸付けは原則非課税。
考场速记：居住用の住宅の貸付けは原則非課税。
事務所の貸付けは消費税課税か？ → 原則として課税。
考场速记：原則として課税。
【易错点】反向判断陷阱：不正确。正确结论是：原則として非課税。；反向判断陷阱：不正确。正确结论是：居住用の住宅の貸付けは原則非課税。；反向判断陷阱：不正确。正确结论是：原則として課税。；通用陷阱：不要只背结论，要同时确认“谁、何时、多少、例外条件”。`,tags:["必考","2026合格版","综合记忆","易错点"]},{id:"zei-008",category:"税・その他",title:"景表法",question:"【景表法】需要掌握哪些考试要点？",answer:`徒歩1分の表示距離は？ → 80m。
考场速记：80m。
400mは徒歩何分？ → 5分。
考场速记：5分。
401mは徒歩何分？ → 6分。
考场速记：6分。
【易错点】反向判断陷阱：不正确。正确结论是：80m。；反向判断陷阱：不正确。正确结论是：5分。；反向判断陷阱：不正确。正确结论是：6分。；通用陷阱：不要只背结论，要同时确认“谁、何时、多少、例外条件”。`,tags:["数字","必考","2026合格版","综合记忆","易错点"]},{id:"zei-009",category:"税・その他",title:"土地",question:"【土地】需要掌握哪些考试要点？",answer:`自然堤防の地盤・排水の一般的特徴は？ → 周囲の低地よりやや高く、一般に後背湿地より排水・地盤条件が良いことが多い。
考场速记：周囲の低地よりやや高く、一般に後背湿地より排水・地盤条件が良いことが多い。
後背湿地の一般的特徴は？ → 低湿で排水不良・軟弱地盤のリスクが比較的高い。
考场速记：低湿で排水不良・軟弱地盤のリスクが比較的高い。
三角州の一般的特徴は？ → 河口付近の堆積地形で低平な土地が多く、洪水や軟弱地盤に注意する。
考场速记：河口付近の堆積地形で低平な土地が多く、洪水や軟弱地盤に注意する。
扇状地の一般的特徴は？ → 山地から平地へ出る場所で河川の土砂が堆積して形成される。
考场速记：山地から平地へ出る場所で河川の土砂が堆積して形成される。
【易错点】反向判断陷阱：不正确。正确结论是：周囲の低地よりやや高く、一般に後背湿地より排水・地盤条件が良いことが多い。；反向判断陷阱：不正确。正确结论是：低湿で排水不良・軟弱地盤のリスクが比較的高い。；反向判断陷阱：不正确。正确结论是：河口付近の堆積地形で低平な土地が多く、洪水や軟弱地盤に注意する。；反向判断陷阱：不正确。正确结论是：山地から平地へ出る場所で河川の土砂が堆積して形成される。；通用陷阱：不要只背结论，要同时确认“谁、何时、多少、例外条件”。`,tags:["土地","2026合格版","综合记忆","易错点"]},{id:"zei-010",category:"税・その他",title:"建物",question:"【建物】需要掌握哪些考试要点？",answer:`RC造とは？ → 鉄筋コンクリート造。
考场速记：鉄筋コンクリート造。
S造とは？ → 鉄骨造。
考场速记：鉄骨造。
免震構造の基本は？ → 建物への地震入力を低減するため、基礎等に免震装置を設ける。
考场速记：建物への地震入力を低減するため、基礎等に免震装置を設ける。
制震構造の基本は？ → ダンパー等で地震エネルギーを吸収・減衰させる。
考场速记：ダンパー等で地震エネルギーを吸収・減衰させる。
【易错点】反向判断陷阱：不正确。正确结论是：鉄筋コンクリート造。；反向判断陷阱：不正确。正确结论是：鉄骨造。；反向判断陷阱：不正确。正确结论是：建物への地震入力を低減するため、基礎等に免震装置を設ける。；反向判断陷阱：不正确。正确结论是：ダンパー等で地震エネルギーを吸収・減衰させる。；通用陷阱：不要只背结论，要同时确认“谁、何时、多少、例外条件”。`,tags:["建物","2026合格版","综合记忆","易错点"]},{id:"zei-011",category:"税・その他",title:"不動産取得税｜真伪",question:"【不動産取得税｜真伪】需要掌握哪些考试要点？",answer:`判断：下面的说法是否正确？ → 正确。核心结论为：3%。本則4%。
判断：下面的说法是否正确？ → 正确。核心结论为：1,200万円。
判断：下面的说法是否正确？ → 正确。核心结论为：1,300万円。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["法改正","数字","2026合格版","综合记忆","易错点"]},{id:"zei-012",category:"税・その他",title:"不動産取得税総合",question:"【不動産取得税総合】需要掌握哪些考试要点？",answer:`原則税率・住宅特例・新築控除 → 原則税率4%。住宅等の特例で3%。一定の新築住宅は課税標準から1,200万円控除。床面積等の要件をセットで覚える。
判断顺序：先确认适用制度，再确认主体与时间，最后核对数字、例外和是否属于特例。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["不動産取得税","4%","3%","1200万円","2026合格版","扩展知识点","综合记忆","易错点"]},{id:"zei-013",category:"税・その他",title:"不動産取得税の課税時期",question:"【不動産取得税の課税時期】需要掌握哪些考试要点？",answer:`取得の意義 → 売買・贈与・新築等による取得が課税対象。登記の有無だけで取得の有無を判断しない。相続による取得は原則として課税対象外。
判断顺序：先确认适用制度，再确认主体与时间，最后核对数字、例外和是否属于特例。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["不動産取得税","2026合格版","扩展知识点","综合记忆","易错点"]},{id:"zei-014",category:"税・その他",title:"固定資産税総合",question:"【固定資産税総合】需要掌握哪些考试要点？",answer:`1.4%・200㎡・1/6・1/3 → 標準税率1.4%。小規模住宅用地200㎡以下＝課税標準1/6、一般住宅用地の200㎡超部分＝1/3。新築住宅の税額軽減も頻出。
判断顺序：先确认适用制度，再确认主体与时间，最后核对数字、例外和是否属于特例。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["固定資産税","1.4%","200㎡","1/6","1/3","2026合格版","扩展知识点","综合记忆","易错点"]},{id:"zei-015",category:"税・その他",title:"固定資産税の納税義務者",question:"【固定資産税の納税義務者】需要掌握哪些考试要点？",answer:`1月1日現在の所有者 → 固定資産税は原則として1月1日現在の固定資産課税台帳上の所有者に課税。年途中の売買では当事者間の精算と税法上の納税義務者を区別。
判断顺序：先确认适用制度，再确认主体与时间，最后核对数字、例外和是否属于特例。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["固定資産税","1月1日","2026合格版","扩展知识点","综合记忆","易错点"]},{id:"zei-016",category:"税・その他",title:"登録免許税総合",question:"【登録免許税総合】需要掌握哪些考试要点？",answer:`保存・移転・抵当権 → 所有権保存登記本則0.4%、所有権移転登記本則2%、抵当権設定登記本則0.4%。土地売買による所有権移転には現行軽減税率1.5%が重要。
判断顺序：先确认适用制度，再确认主体与时间，最后核对数字、例外和是否属于特例。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["登録免許税","0.4%","2%","1.5%","2026合格版","扩展知识点","综合记忆","易错点"]},{id:"zei-017",category:"税・その他",title:"譲渡所得特例",question:"【譲渡所得特例】需要掌握哪些考试要点？",answer:`居住用財産の3,000万円特別控除 → 一定のマイホーム売却では3,000万円特別控除等の特例がある。適用要件・併用制限を区別。
判断顺序：先确认适用制度，再确认主体与时间，最后核对数字、例外和是否属于特例。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["3000万円","譲渡所得","2026合格版","扩展知识点","综合记忆","易错点"]},{id:"zei-018",category:"税・その他",title:"住宅ローン控除",question:"【住宅ローン控除】需要掌握哪些考试要点？",answer:`所得・入居・性能要件 → 住宅ローン控除は入居年、所得、床面積、住宅性能、借入期間等の条件がある。2025年以降の新築では省エネ性能要件が特に重要。
判断顺序：先确认适用制度，再确认主体与时间，最后核对数字、例外和是否属于特例。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["住宅ローン控除","2026合格版","扩展知识点","综合记忆","易错点"]},{id:"zei-019",category:"税・その他",title:"地価公示",question:"【地価公示】需要掌握哪些考试要点？",answer:`1月1日・3月公示・標準地 → 国土交通省土地鑑定委員会が毎年1月1日時点の標準地の正常価格を公示。地価公示法上の公示価格は土地取引の指標。
判断顺序：先确认适用制度，再确认主体与时间，最后核对数字、例外和是否属于特例。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["地価公示","1月1日","2026合格版","扩展知识点","综合记忆","易错点"]},{id:"zei-020",category:"税・その他",title:"都道府県地価調査",question:"【都道府県地価調査】需要掌握哪些考试要点？",answer:`7月1日・基準地 → 都道府県知事が毎年7月1日時点の基準地価格を調査。地価公示との基準日を比較して覚える。
判断顺序：先确认适用制度，再确认主体与时间，最后核对数字、例外和是否属于特例。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["地価調査","7月1日","2026合格版","扩展知识点","综合记忆","易错点"]},{id:"zei-021",category:"税・その他",title:"鑑定評価3方式",question:"【鑑定評価3方式】需要掌握哪些考试要点？",answer:`原価・比較・収益 → 原価法＝積算価格、取引事例比較法＝比準価格、収益還元法＝収益価格。用途・収益性等に応じて方式を選択。
判断顺序：先确认适用制度，再确认主体与时间，最后核对数字、例外和是否属于特例。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["鑑定評価","3方式","2026合格版","扩展知识点","综合记忆","易错点"]},{id:"zei-022",category:"税・その他",title:"取引事例比較法",question:"【取引事例比較法】需要掌握哪些考试要点？",answer:`多数の事例・事情補正・時点修正 → 類似不動産の取引事例を比較し、事情補正・時点修正・地域要因・個別的要因等を考慮して比準価格を求める。
判断顺序：先确认适用制度，再确认主体与时间，最后核对数字、例外和是否属于特例。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["比較法","2026合格版","扩展知识点","综合记忆","易错点"]},{id:"zei-023",category:"税・その他",title:"収益還元法",question:"【収益還元法】需要掌握哪些考试要点？",answer:`直接還元法・DCF → 将来生み出す純収益を基礎に価格を求める。直接還元法とDCF法がある。収益用不動産で重要。
判断顺序：先确认适用制度，再确认主体与时间，最后核对数字、例外和是否属于特例。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["収益還元法","2026合格版","扩展知识点","综合记忆","易错点"]},{id:"zei-024",category:"税・その他",title:"土地総合",question:"【土地総合】需要掌握哪些考试要点？",answer:`扇状地・三角州・自然堤防・後背湿地 → 扇状地＝山地出口の土砂堆積、一般に水はけ良好。三角州＝河口付近の細粒土砂、低地・液状化等に注意。自然堤防は周囲より微高地、後背湿地は低湿地。
判断顺序：先确认适用制度，再确认主体与时间，最后核对数字、例外和是否属于特例。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["土地","地形","2026合格版","扩展知识点","综合记忆","易错点"]},{id:"zei-025",category:"税・その他",title:"土地災害",question:"【土地災害】需要掌握哪些考试要点？",answer:`崖・盛土・液状化 → 急傾斜地、谷埋め盛土、埋立地、旧河道等は災害リスクを確認。地形名だけで安全・危険を断定せず、ハザード情報も考慮。
判断顺序：先确认适用制度，再确认主体与时间，最后核对数字、例外和是否属于特例。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["土地","災害","2026合格版","扩展知识点","综合记忆","易错点"]},{id:"zei-026",category:"税・その他",title:"建物構造",question:"【建物構造】需要掌握哪些考试要点？",answer:`木造・S造・RC造・SRC造 → 木造＝軽量・加工性。S造＝鉄骨。RC造＝鉄筋コンクリート。SRC造＝鉄骨鉄筋コンクリート。耐火・遮音・重量・施工性の違いを整理。
判断顺序：先确认适用制度，再确认主体与时间，最后核对数字、例外和是否属于特例。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["建物","構造","2026合格版","扩展知识点","综合记忆","易错点"]},{id:"zei-027",category:"税・その他",title:"建物基礎",question:"【建物基礎】需要掌握哪些考试要点？",answer:`直接基礎・杭基礎 → 支持地盤が浅い場合は直接基礎、深い支持層まで杭で荷重を伝える杭基礎。地盤条件と基礎形式を関連付ける。
判断顺序：先确认适用制度，再确认主体与时间，最后核对数字、例外和是否属于特例。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["建物","基礎","2026合格版","扩展知识点","综合记忆","易错点"]},{id:"zei-028",category:"税・その他",title:"建物耐震",question:"【建物耐震】需要掌握哪些考试要点？",answer:`耐震・制震・免震 → 耐震＝建物自体で地震力に耐える。制震＝ダンパー等で揺れを吸収。免震＝建物と地盤の間で揺れを伝えにくくする。
判断顺序：先确认适用制度，再确认主体与时间，最后核对数字、例外和是否属于特例。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["建物","耐震","2026合格版","扩展知识点","综合记忆","易错点"]},{id:"zei-029",category:"税・その他",title:"不動産広告",question:"【不動産広告】需要掌握哪些考试要点？",answer:`徒歩80m=1分 → 徒歩所要時間は道路距離80mを1分として表示し、1分未満の端数は切上げ。400mなら5分。
判断顺序：先确认适用制度，再确认主体与时间，最后核对数字、例外和是否属于特例。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["広告","80m","2026合格版","扩展知识点","综合记忆","易错点"]},{id:"zei-030",category:"税・その他",title:"不動産広告面積",question:"【不動産広告面積】需要掌握哪些考试要点？",answer:`㎡・坪・畳表示 → 面積表示は実測・登記面積等の基準を確認。広告の『徒歩』『面積』『価格』は数字の単位を取り違えない。
判断顺序：先确认适用制度，再确认主体与时间，最后核对数字、例外和是否属于特例。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["広告","面積","2026合格版","扩展知识点","综合记忆","易错点"]},{id:"zei-031",category:"税・その他",title:"統計問題",question:"【統計問題】需要掌握哪些考试要点？",answer:`直前期の統計対策 → 統計は毎年変動するため、2026年試験では最新の公式統計・試験年対応資料を直前確認。過去の数値を固定暗記しない。
判断顺序：先确认适用制度，再确认主体与时间，最后核对数字、例外和是否属于特例。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["統計","2026","2026合格版","扩展知识点","综合记忆","易错点"]},{id:"zei-032",category:"税・その他",title:"フラット35",question:"【フラット35】需要掌握哪些考试要点？",answer:`長期固定金利住宅ローン → 住宅金融支援機構と民間金融機関が連携する長期固定金利型住宅ローン。商品条件は更新されるため、試験年の公式情報を確認。
判断顺序：先确认适用制度，再确认主体与时间，最后核对数字、例外和是否属于特例。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["フラット35","2026合格版","扩展知识点","综合记忆","易错点"]},{id:"zei-033",category:"税・その他",title:"不動産価格",question:"【不動産価格】需要掌握哪些考试要点？",answer:`価格の4原則 → 不動産価格形成要因は一般的要因、地域要因、個別的要因。価格形成の原則・市場性・収益性等を関連付けて覚える。
判断顺序：先确认适用制度，再确认主体与时间，最后核对数字、例外和是否属于特例。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["不動産価格","2026合格版","扩展知识点","综合记忆","易错点"]},{id:"zei-034",category:"税・その他",title:"景品表示法",question:"【景品表示法】需要掌握哪些考试要点？",answer:`不動産表示の不当表示 → 実際より著しく優良・有利と誤認させる表示、おとり広告等は禁止。宅建業法の広告規制と重なるが、根拠法を区別。
判断顺序：先确认适用制度，再确认主体与时间，最后核对数字、例外和是否属于特例。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["景品表示法","2026合格版","扩展知识点","综合记忆","易错点"]},{id:"zei-035",category:"税・その他",title:"長期空家等",question:"【長期空家等】需要掌握哪些考试要点？",answer:`賃貸媒介報酬特例 → 長期の空家等では、貸主から受ける報酬について通常上限を超える特例がある。税込上限は賃料1か月分×2.2倍。双方合計にも上限。
判断顺序：先确认适用制度，再确认主体与时间，最后核对数字、例外和是否属于特例。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["空家","賃貸報酬","2026合格版","扩展知识点","综合记忆","易错点"]},{id:"zei-036",category:"税・その他",title:"税の納税義務者",question:"【税の納税義務者】需要掌握哪些考试要点？",answer:`税法上の所有者と契約上の精算 → 固定資産税等では法定納税義務者と売買契約上の負担割合を分けて考える。契約で日割精算しても納税義務者が変わるわけではない。
判断顺序：先确认适用制度，再确认主体与时间，最后核对数字、例外和是否属于特例。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["税","ひっかけ","2026合格版","扩展知识点","综合记忆","易错点"]},{id:"zei-037",category:"税・その他",title:"住宅用地特例",question:"【住宅用地特例】需要掌握哪些考试要点？",answer:`小規模と一般の区分 → 200㎡以下部分＝小規模住宅用地1/6。200㎡超部分＝一般住宅用地1/3。『土地全体を一律1/6』は誤り。
判断顺序：先确认适用制度，再确认主体与时间，最后核对数字、例外和是否属于特例。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["固定資産税","住宅用地","2026合格版","扩展知识点","综合记忆","易错点"]},{id:"zei-038",category:"税・その他",title:"税率と特例",question:"【税率と特例】需要掌握哪些考试要点？",answer:`本則税率と軽減税率 → 宅建の税問題は『本則→特例→期限』の順で整理。特例は時限措置が多いため2026年試験基準日で確認。
判断顺序：先确认适用制度，再确认主体与时间，最后核对数字、例外和是否属于特例。
【易错点】注意主体、期限、数字、例外条件；题目常通过替换其中一个条件制造错误。`,tags:["税","特例","2026合格版","扩展知识点","综合记忆","易错点"]}];function bl(e){switch(e){case"gyohou":return Fs;case"kenri":return Ds;case"hourei":return Ns;case"zeitsu":return js;default:return[...Fs,...Ds,...Ns,...js]}}function Mn(){const e=localStorage.getItem("takken_2026_progress");return e?JSON.parse(e):{}}function vl(e,t){const n=Mn();n[e]=t,localStorage.setItem("takken_2026_progress",JSON.stringify(n))}const xl=(e,t)=>{const n=e.__vccOpts||e;for(const[s,i]of t)n[s]=i;return n},ql={class:"app-container"},kl={class:"header"},Sl={class:"stats-box"},Cl={class:"tab-group"},Tl=["onClick"],El={key:0,class:"card-wrapper"},Ol={class:"card-meta"},Al={class:"category-tag"},Pl={class:"counter"},Il={class:"question-text"},Rl={key:0,class:"answer-box"},Ml={class:"answer-text"},Fl={key:1,class:"flip-hint"},Dl={class:"action-grid"},Nl=["disabled"],jl=["disabled"],Hl={key:1,class:"empty-state"},Ll={__name:"App",setup(e){const t=Lt("all"),n=Lt(0),s=Lt(!1),i=Lt({}),r=[{key:"all",label:"全部"},{key:"gyohou",label:"宅建業法"},{key:"kenri",label:"権利関係"},{key:"hourei",label:"法令上の制限"},{key:"zeitsu",label:"税・その他"}];bi(()=>{i.value=Mn()});const o=yt(()=>bl(t.value)),l=yt(()=>o.value),a=yt(()=>l.value[n.value]||null),d=yt(()=>{const k=o.value.length;let P=0,S=0,V=0;return o.value.forEach($=>{const R=i.value[$.id]||0;R===2?P++:R===1?S++:V++}),{total:k,mastered:P,review:S,unlearned:V,percent:k?Math.round(P/k*100):0}});zt(t,()=>{n.value=0,s.value=!1});const f=k=>{a.value&&(vl(a.value.id,k),i.value=Mn(),s.value=!1,n.value<l.value.length-1&&n.value++)},h=()=>{n.value<l.value.length-1&&(n.value++,s.value=!1)},q=()=>{n.value>0&&(n.value--,s.value=!1)};return(k,P)=>(et(),tt("div",ql,[Y("header",kl,[P[3]||(P[3]=Y("h1",{class:"title"},"2026 宅建士 核心考点通关卡",-1)),Y("div",Sl," 掌握进度："+ce(d.value.mastered)+" / "+ce(d.value.total)+"（"+ce(d.value.percent)+"%） | 需复习: "+ce(d.value.review)+" | 未刷: "+ce(d.value.unlearned),1)]),Y("div",Cl,[(et(),tt(ke,null,so(r,S=>Y("button",{key:S.key,class:nn(["tab-btn",{active:t.value===S.key}]),onClick:V=>t.value=S.key},ce(S.label),11,Tl)),64))]),a.value?(et(),tt("div",El,[Y("div",Ol,[Y("span",Al,"["+ce(a.value.category)+"] "+ce(a.value.title),1),Y("span",Pl,ce(n.value+1)+" / "+ce(l.value.length),1)]),Y("div",{class:"card",onClick:P[0]||(P[0]=S=>s.value=!s.value)},[Y("div",Il,ce(a.value.question),1),s.value?(et(),tt("div",Rl,[P[4]||(P[4]=Y("div",{class:"answer-title"},"【核心解析 / 正确答案】",-1)),Y("div",Ml,ce(a.value.answer),1)])):(et(),tt("div",Fl," 💡 点击卡片查看答案与解析 "))]),Y("div",Dl,[Y("button",{disabled:n.value===0,onClick:q},"上一题",8,Nl),Y("button",{class:"btn-review",onClick:P[1]||(P[1]=S=>f(1))},"⚠️ 标记模糊"),Y("button",{class:"btn-master",onClick:P[2]||(P[2]=S=>f(2))},"✅ 标记掌握"),Y("button",{disabled:n.value===l.value.length-1,onClick:h},"下一题",8,jl)])])):(et(),tt("div",Hl," 🎉 当前分类下暂无题库卡片 "))]))}},$l=xl(Ll,[["__scopeId","data-v-2d68a8fc"]]);_l($l).mount("#app");
