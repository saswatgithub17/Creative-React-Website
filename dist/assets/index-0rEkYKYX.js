var wf=Object.defineProperty;var Cf=(r,s,o)=>s in r?wf(r,s,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[s]=o;var Wt=(r,s,o)=>Cf(r,typeof s!="symbol"?s+"":s,o);function kf(r,s){for(var o=0;o<s.length;o++){const c=s[o];if(typeof c!="string"&&!Array.isArray(c)){for(const m in c)if(m!=="default"&&!(m in r)){const p=Object.getOwnPropertyDescriptor(c,m);p&&Object.defineProperty(r,m,p.get?p:{enumerable:!0,get:()=>c[m]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const m of document.querySelectorAll('link[rel="modulepreload"]'))c(m);new MutationObserver(m=>{for(const p of m)if(p.type==="childList")for(const u of p.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&c(u)}).observe(document,{childList:!0,subtree:!0});function o(m){const p={};return m.integrity&&(p.integrity=m.integrity),m.referrerPolicy&&(p.referrerPolicy=m.referrerPolicy),m.crossOrigin==="use-credentials"?p.credentials="include":m.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function c(m){if(m.ep)return;m.ep=!0;const p=o(m);fetch(m.href,p)}})();function ji(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var bo={exports:{}},Yn={},yo={exports:{}},ne={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kd;function Af(){if(Kd)return ne;Kd=1;var r=Symbol.for("react.element"),s=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),m=Symbol.for("react.profiler"),p=Symbol.for("react.provider"),u=Symbol.for("react.context"),x=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),b=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),g=Symbol.iterator;function T(C){return C===null||typeof C!="object"?null:(C=g&&C[g]||C["@@iterator"],typeof C=="function"?C:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},F=Object.assign,R={};function z(C,M,ae){this.props=C,this.context=M,this.refs=R,this.updater=ae||E}z.prototype.isReactComponent={},z.prototype.setState=function(C,M){if(typeof C!="object"&&typeof C!="function"&&C!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,C,M,"setState")},z.prototype.forceUpdate=function(C){this.updater.enqueueForceUpdate(this,C,"forceUpdate")};function P(){}P.prototype=z.prototype;function I(C,M,ae){this.props=C,this.context=M,this.refs=R,this.updater=ae||E}var U=I.prototype=new P;U.constructor=I,F(U,z.prototype),U.isPureReactComponent=!0;var q=Array.isArray,ie=Object.prototype.hasOwnProperty,me={current:null},K={key:!0,ref:!0,__self:!0,__source:!0};function J(C,M,ae){var re,oe={},le=null,ue=null;if(M!=null)for(re in M.ref!==void 0&&(ue=M.ref),M.key!==void 0&&(le=""+M.key),M)ie.call(M,re)&&!K.hasOwnProperty(re)&&(oe[re]=M[re]);var de=arguments.length-2;if(de===1)oe.children=ae;else if(1<de){for(var xe=Array(de),et=0;et<de;et++)xe[et]=arguments[et+2];oe.children=xe}if(C&&C.defaultProps)for(re in de=C.defaultProps,de)oe[re]===void 0&&(oe[re]=de[re]);return{$$typeof:r,type:C,key:le,ref:ue,props:oe,_owner:me.current}}function ye(C,M){return{$$typeof:r,type:C.type,key:M,ref:C.ref,props:C.props,_owner:C._owner}}function it(C){return typeof C=="object"&&C!==null&&C.$$typeof===r}function Xe(C){var M={"=":"=0",":":"=2"};return"$"+C.replace(/[=:]/g,function(ae){return M[ae]})}var Oe=/\/+/g;function Ze(C,M){return typeof C=="object"&&C!==null&&C.key!=null?Xe(""+C.key):M.toString(36)}function ut(C,M,ae,re,oe){var le=typeof C;(le==="undefined"||le==="boolean")&&(C=null);var ue=!1;if(C===null)ue=!0;else switch(le){case"string":case"number":ue=!0;break;case"object":switch(C.$$typeof){case r:case s:ue=!0}}if(ue)return ue=C,oe=oe(ue),C=re===""?"."+Ze(ue,0):re,q(oe)?(ae="",C!=null&&(ae=C.replace(Oe,"$&/")+"/"),ut(oe,M,ae,"",function(et){return et})):oe!=null&&(it(oe)&&(oe=ye(oe,ae+(!oe.key||ue&&ue.key===oe.key?"":(""+oe.key).replace(Oe,"$&/")+"/")+C)),M.push(oe)),1;if(ue=0,re=re===""?".":re+":",q(C))for(var de=0;de<C.length;de++){le=C[de];var xe=re+Ze(le,de);ue+=ut(le,M,ae,xe,oe)}else if(xe=T(C),typeof xe=="function")for(C=xe.call(C),de=0;!(le=C.next()).done;)le=le.value,xe=re+Ze(le,de++),ue+=ut(le,M,ae,xe,oe);else if(le==="object")throw M=String(C),Error("Objects are not valid as a React child (found: "+(M==="[object Object]"?"object with keys {"+Object.keys(C).join(", ")+"}":M)+"). If you meant to render a collection of children, use an array instead.");return ue}function St(C,M,ae){if(C==null)return C;var re=[],oe=0;return ut(C,re,"","",function(le){return M.call(ae,le,oe++)}),re}function Ge(C){if(C._status===-1){var M=C._result;M=M(),M.then(function(ae){(C._status===0||C._status===-1)&&(C._status=1,C._result=ae)},function(ae){(C._status===0||C._status===-1)&&(C._status=2,C._result=ae)}),C._status===-1&&(C._status=0,C._result=M)}if(C._status===1)return C._result.default;throw C._result}var we={current:null},L={transition:null},Z={ReactCurrentDispatcher:we,ReactCurrentBatchConfig:L,ReactCurrentOwner:me};function $(){throw Error("act(...) is not supported in production builds of React.")}return ne.Children={map:St,forEach:function(C,M,ae){St(C,function(){M.apply(this,arguments)},ae)},count:function(C){var M=0;return St(C,function(){M++}),M},toArray:function(C){return St(C,function(M){return M})||[]},only:function(C){if(!it(C))throw Error("React.Children.only expected to receive a single React element child.");return C}},ne.Component=z,ne.Fragment=o,ne.Profiler=m,ne.PureComponent=I,ne.StrictMode=c,ne.Suspense=h,ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Z,ne.act=$,ne.cloneElement=function(C,M,ae){if(C==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+C+".");var re=F({},C.props),oe=C.key,le=C.ref,ue=C._owner;if(M!=null){if(M.ref!==void 0&&(le=M.ref,ue=me.current),M.key!==void 0&&(oe=""+M.key),C.type&&C.type.defaultProps)var de=C.type.defaultProps;for(xe in M)ie.call(M,xe)&&!K.hasOwnProperty(xe)&&(re[xe]=M[xe]===void 0&&de!==void 0?de[xe]:M[xe])}var xe=arguments.length-2;if(xe===1)re.children=ae;else if(1<xe){de=Array(xe);for(var et=0;et<xe;et++)de[et]=arguments[et+2];re.children=de}return{$$typeof:r,type:C.type,key:oe,ref:le,props:re,_owner:ue}},ne.createContext=function(C){return C={$$typeof:u,_currentValue:C,_currentValue2:C,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},C.Provider={$$typeof:p,_context:C},C.Consumer=C},ne.createElement=J,ne.createFactory=function(C){var M=J.bind(null,C);return M.type=C,M},ne.createRef=function(){return{current:null}},ne.forwardRef=function(C){return{$$typeof:x,render:C}},ne.isValidElement=it,ne.lazy=function(C){return{$$typeof:y,_payload:{_status:-1,_result:C},_init:Ge}},ne.memo=function(C,M){return{$$typeof:b,type:C,compare:M===void 0?null:M}},ne.startTransition=function(C){var M=L.transition;L.transition={};try{C()}finally{L.transition=M}},ne.unstable_act=$,ne.useCallback=function(C,M){return we.current.useCallback(C,M)},ne.useContext=function(C){return we.current.useContext(C)},ne.useDebugValue=function(){},ne.useDeferredValue=function(C){return we.current.useDeferredValue(C)},ne.useEffect=function(C,M){return we.current.useEffect(C,M)},ne.useId=function(){return we.current.useId()},ne.useImperativeHandle=function(C,M,ae){return we.current.useImperativeHandle(C,M,ae)},ne.useInsertionEffect=function(C,M){return we.current.useInsertionEffect(C,M)},ne.useLayoutEffect=function(C,M){return we.current.useLayoutEffect(C,M)},ne.useMemo=function(C,M){return we.current.useMemo(C,M)},ne.useReducer=function(C,M,ae){return we.current.useReducer(C,M,ae)},ne.useRef=function(C){return we.current.useRef(C)},ne.useState=function(C){return we.current.useState(C)},ne.useSyncExternalStore=function(C,M,ae){return we.current.useSyncExternalStore(C,M,ae)},ne.useTransition=function(){return we.current.useTransition()},ne.version="18.3.1",ne}var qd;function Ko(){return qd||(qd=1,yo.exports=Af()),yo.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qd;function Nf(){if(Qd)return Yn;Qd=1;var r=Ko(),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,m=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function u(x,h,b){var y,g={},T=null,E=null;b!==void 0&&(T=""+b),h.key!==void 0&&(T=""+h.key),h.ref!==void 0&&(E=h.ref);for(y in h)c.call(h,y)&&!p.hasOwnProperty(y)&&(g[y]=h[y]);if(x&&x.defaultProps)for(y in h=x.defaultProps,h)g[y]===void 0&&(g[y]=h[y]);return{$$typeof:s,type:x,key:T,ref:E,props:g,_owner:m.current}}return Yn.Fragment=o,Yn.jsx=u,Yn.jsxs=u,Yn}var Xd;function Tf(){return Xd||(Xd=1,bo.exports=Nf()),bo.exports}var e=Tf(),v=Ko();const ke=ji(v),Ef=kf({__proto__:null,default:ke},[v]);var mi={},vo={exports:{}},Qe={},jo={exports:{}},So={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zd;function Rf(){return Zd||(Zd=1,(function(r){function s(L,Z){var $=L.length;L.push(Z);e:for(;0<$;){var C=$-1>>>1,M=L[C];if(0<m(M,Z))L[C]=Z,L[$]=M,$=C;else break e}}function o(L){return L.length===0?null:L[0]}function c(L){if(L.length===0)return null;var Z=L[0],$=L.pop();if($!==Z){L[0]=$;e:for(var C=0,M=L.length,ae=M>>>1;C<ae;){var re=2*(C+1)-1,oe=L[re],le=re+1,ue=L[le];if(0>m(oe,$))le<M&&0>m(ue,oe)?(L[C]=ue,L[le]=$,C=le):(L[C]=oe,L[re]=$,C=re);else if(le<M&&0>m(ue,$))L[C]=ue,L[le]=$,C=le;else break e}}return Z}function m(L,Z){var $=L.sortIndex-Z.sortIndex;return $!==0?$:L.id-Z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var p=performance;r.unstable_now=function(){return p.now()}}else{var u=Date,x=u.now();r.unstable_now=function(){return u.now()-x}}var h=[],b=[],y=1,g=null,T=3,E=!1,F=!1,R=!1,z=typeof setTimeout=="function"?setTimeout:null,P=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function U(L){for(var Z=o(b);Z!==null;){if(Z.callback===null)c(b);else if(Z.startTime<=L)c(b),Z.sortIndex=Z.expirationTime,s(h,Z);else break;Z=o(b)}}function q(L){if(R=!1,U(L),!F)if(o(h)!==null)F=!0,Ge(ie);else{var Z=o(b);Z!==null&&we(q,Z.startTime-L)}}function ie(L,Z){F=!1,R&&(R=!1,P(J),J=-1),E=!0;var $=T;try{for(U(Z),g=o(h);g!==null&&(!(g.expirationTime>Z)||L&&!Xe());){var C=g.callback;if(typeof C=="function"){g.callback=null,T=g.priorityLevel;var M=C(g.expirationTime<=Z);Z=r.unstable_now(),typeof M=="function"?g.callback=M:g===o(h)&&c(h),U(Z)}else c(h);g=o(h)}if(g!==null)var ae=!0;else{var re=o(b);re!==null&&we(q,re.startTime-Z),ae=!1}return ae}finally{g=null,T=$,E=!1}}var me=!1,K=null,J=-1,ye=5,it=-1;function Xe(){return!(r.unstable_now()-it<ye)}function Oe(){if(K!==null){var L=r.unstable_now();it=L;var Z=!0;try{Z=K(!0,L)}finally{Z?Ze():(me=!1,K=null)}}else me=!1}var Ze;if(typeof I=="function")Ze=function(){I(Oe)};else if(typeof MessageChannel<"u"){var ut=new MessageChannel,St=ut.port2;ut.port1.onmessage=Oe,Ze=function(){St.postMessage(null)}}else Ze=function(){z(Oe,0)};function Ge(L){K=L,me||(me=!0,Ze())}function we(L,Z){J=z(function(){L(r.unstable_now())},Z)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(L){L.callback=null},r.unstable_continueExecution=function(){F||E||(F=!0,Ge(ie))},r.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ye=0<L?Math.floor(1e3/L):5},r.unstable_getCurrentPriorityLevel=function(){return T},r.unstable_getFirstCallbackNode=function(){return o(h)},r.unstable_next=function(L){switch(T){case 1:case 2:case 3:var Z=3;break;default:Z=T}var $=T;T=Z;try{return L()}finally{T=$}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(L,Z){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var $=T;T=L;try{return Z()}finally{T=$}},r.unstable_scheduleCallback=function(L,Z,$){var C=r.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?C+$:C):$=C,L){case 1:var M=-1;break;case 2:M=250;break;case 5:M=1073741823;break;case 4:M=1e4;break;default:M=5e3}return M=$+M,L={id:y++,callback:Z,priorityLevel:L,startTime:$,expirationTime:M,sortIndex:-1},$>C?(L.sortIndex=$,s(b,L),o(h)===null&&L===o(b)&&(R?(P(J),J=-1):R=!0,we(q,$-C))):(L.sortIndex=M,s(h,L),F||E||(F=!0,Ge(ie))),L},r.unstable_shouldYield=Xe,r.unstable_wrapCallback=function(L){var Z=T;return function(){var $=T;T=Z;try{return L.apply(this,arguments)}finally{T=$}}}})(So)),So}var ep;function If(){return ep||(ep=1,jo.exports=Rf()),jo.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tp;function Pf(){if(tp)return Qe;tp=1;var r=Ko(),s=If();function o(t){for(var a="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)a+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var c=new Set,m={};function p(t,a){u(t,a),u(t+"Capture",a)}function u(t,a){for(m[t]=a,t=0;t<a.length;t++)c.add(a[t])}var x=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,b=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,y={},g={};function T(t){return h.call(g,t)?!0:h.call(y,t)?!1:b.test(t)?g[t]=!0:(y[t]=!0,!1)}function E(t,a,n,i){if(n!==null&&n.type===0)return!1;switch(typeof a){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function F(t,a,n,i){if(a===null||typeof a>"u"||E(t,a,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!a;case 4:return a===!1;case 5:return isNaN(a);case 6:return isNaN(a)||1>a}return!1}function R(t,a,n,i,l,d,f){this.acceptsBooleans=a===2||a===3||a===4,this.attributeName=i,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=t,this.type=a,this.sanitizeURL=d,this.removeEmptyString=f}var z={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){z[t]=new R(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var a=t[0];z[a]=new R(a,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){z[t]=new R(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){z[t]=new R(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){z[t]=new R(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){z[t]=new R(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){z[t]=new R(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){z[t]=new R(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){z[t]=new R(t,5,!1,t.toLowerCase(),null,!1,!1)});var P=/[\-:]([a-z])/g;function I(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var a=t.replace(P,I);z[a]=new R(a,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var a=t.replace(P,I);z[a]=new R(a,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var a=t.replace(P,I);z[a]=new R(a,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){z[t]=new R(t,1,!1,t.toLowerCase(),null,!1,!1)}),z.xlinkHref=new R("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){z[t]=new R(t,1,!1,t.toLowerCase(),null,!0,!0)});function U(t,a,n,i){var l=z.hasOwnProperty(a)?z[a]:null;(l!==null?l.type!==0:i||!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(F(a,n,l,i)&&(n=null),i||l===null?T(a)&&(n===null?t.removeAttribute(a):t.setAttribute(a,""+n)):l.mustUseProperty?t[l.propertyName]=n===null?l.type===3?!1:"":n:(a=l.attributeName,i=l.attributeNamespace,n===null?t.removeAttribute(a):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,i?t.setAttributeNS(i,a,n):t.setAttribute(a,n))))}var q=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ie=Symbol.for("react.element"),me=Symbol.for("react.portal"),K=Symbol.for("react.fragment"),J=Symbol.for("react.strict_mode"),ye=Symbol.for("react.profiler"),it=Symbol.for("react.provider"),Xe=Symbol.for("react.context"),Oe=Symbol.for("react.forward_ref"),Ze=Symbol.for("react.suspense"),ut=Symbol.for("react.suspense_list"),St=Symbol.for("react.memo"),Ge=Symbol.for("react.lazy"),we=Symbol.for("react.offscreen"),L=Symbol.iterator;function Z(t){return t===null||typeof t!="object"?null:(t=L&&t[L]||t["@@iterator"],typeof t=="function"?t:null)}var $=Object.assign,C;function M(t){if(C===void 0)try{throw Error()}catch(n){var a=n.stack.trim().match(/\n( *(at )?)/);C=a&&a[1]||""}return`
`+C+t}var ae=!1;function re(t,a){if(!t||ae)return"";ae=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(a)if(a=function(){throw Error()},Object.defineProperty(a.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(a,[])}catch(N){var i=N}Reflect.construct(t,[],a)}else{try{a.call()}catch(N){i=N}t.call(a.prototype)}else{try{throw Error()}catch(N){i=N}t()}}catch(N){if(N&&i&&typeof N.stack=="string"){for(var l=N.stack.split(`
`),d=i.stack.split(`
`),f=l.length-1,j=d.length-1;1<=f&&0<=j&&l[f]!==d[j];)j--;for(;1<=f&&0<=j;f--,j--)if(l[f]!==d[j]){if(f!==1||j!==1)do if(f--,j--,0>j||l[f]!==d[j]){var S=`
`+l[f].replace(" at new "," at ");return t.displayName&&S.includes("<anonymous>")&&(S=S.replace("<anonymous>",t.displayName)),S}while(1<=f&&0<=j);break}}}finally{ae=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?M(t):""}function oe(t){switch(t.tag){case 5:return M(t.type);case 16:return M("Lazy");case 13:return M("Suspense");case 19:return M("SuspenseList");case 0:case 2:case 15:return t=re(t.type,!1),t;case 11:return t=re(t.type.render,!1),t;case 1:return t=re(t.type,!0),t;default:return""}}function le(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case K:return"Fragment";case me:return"Portal";case ye:return"Profiler";case J:return"StrictMode";case Ze:return"Suspense";case ut:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Xe:return(t.displayName||"Context")+".Consumer";case it:return(t._context.displayName||"Context")+".Provider";case Oe:var a=t.render;return t=t.displayName,t||(t=a.displayName||a.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case St:return a=t.displayName||null,a!==null?a:le(t.type)||"Memo";case Ge:a=t._payload,t=t._init;try{return le(t(a))}catch{}}return null}function ue(t){var a=t.type;switch(t.tag){case 24:return"Cache";case 9:return(a.displayName||"Context")+".Consumer";case 10:return(a._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=a.render,t=t.displayName||t.name||"",a.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return a;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return le(a);case 8:return a===J?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof a=="function")return a.displayName||a.name||null;if(typeof a=="string")return a}return null}function de(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function xe(t){var a=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function et(t){var a=xe(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,a),i=""+t[a];if(!t.hasOwnProperty(a)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,d=n.set;return Object.defineProperty(t,a,{configurable:!0,get:function(){return l.call(this)},set:function(f){i=""+f,d.call(this,f)}}),Object.defineProperty(t,a,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(f){i=""+f},stopTracking:function(){t._valueTracker=null,delete t[a]}}}}function ar(t){t._valueTracker||(t._valueTracker=et(t))}function tl(t){if(!t)return!1;var a=t._valueTracker;if(!a)return!0;var n=a.getValue(),i="";return t&&(i=xe(t)?t.checked?"true":"false":t.value),t=i,t!==n?(a.setValue(t),!0):!1}function nr(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ci(t,a){var n=a.checked;return $({},a,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function al(t,a){var n=a.defaultValue==null?"":a.defaultValue,i=a.checked!=null?a.checked:a.defaultChecked;n=de(a.value!=null?a.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:a.type==="checkbox"||a.type==="radio"?a.checked!=null:a.value!=null}}function nl(t,a){a=a.checked,a!=null&&U(t,"checked",a,!1)}function ki(t,a){nl(t,a);var n=de(a.value),i=a.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}a.hasOwnProperty("value")?Ai(t,a.type,n):a.hasOwnProperty("defaultValue")&&Ai(t,a.type,de(a.defaultValue)),a.checked==null&&a.defaultChecked!=null&&(t.defaultChecked=!!a.defaultChecked)}function rl(t,a,n){if(a.hasOwnProperty("value")||a.hasOwnProperty("defaultValue")){var i=a.type;if(!(i!=="submit"&&i!=="reset"||a.value!==void 0&&a.value!==null))return;a=""+t._wrapperState.initialValue,n||a===t.value||(t.value=a),t.defaultValue=a}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Ai(t,a,n){(a!=="number"||nr(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var on=Array.isArray;function Ta(t,a,n,i){if(t=t.options,a){a={};for(var l=0;l<n.length;l++)a["$"+n[l]]=!0;for(n=0;n<t.length;n++)l=a.hasOwnProperty("$"+t[n].value),t[n].selected!==l&&(t[n].selected=l),l&&i&&(t[n].defaultSelected=!0)}else{for(n=""+de(n),a=null,l=0;l<t.length;l++){if(t[l].value===n){t[l].selected=!0,i&&(t[l].defaultSelected=!0);return}a!==null||t[l].disabled||(a=t[l])}a!==null&&(a.selected=!0)}}function Ni(t,a){if(a.dangerouslySetInnerHTML!=null)throw Error(o(91));return $({},a,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function il(t,a){var n=a.value;if(n==null){if(n=a.children,a=a.defaultValue,n!=null){if(a!=null)throw Error(o(92));if(on(n)){if(1<n.length)throw Error(o(93));n=n[0]}a=n}a==null&&(a=""),n=a}t._wrapperState={initialValue:de(n)}}function sl(t,a){var n=de(a.value),i=de(a.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),a.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function ol(t){var a=t.textContent;a===t._wrapperState.initialValue&&a!==""&&a!==null&&(t.value=a)}function ll(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ti(t,a){return t==null||t==="http://www.w3.org/1999/xhtml"?ll(a):t==="http://www.w3.org/2000/svg"&&a==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var rr,cl=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(a,n,i,l){MSApp.execUnsafeLocalFunction(function(){return t(a,n,i,l)})}:t})(function(t,a){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=a;else{for(rr=rr||document.createElement("div"),rr.innerHTML="<svg>"+a.valueOf().toString()+"</svg>",a=rr.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;a.firstChild;)t.appendChild(a.firstChild)}});function ln(t,a){if(a){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=a;return}}t.textContent=a}var cn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Am=["Webkit","ms","Moz","O"];Object.keys(cn).forEach(function(t){Am.forEach(function(a){a=a+t.charAt(0).toUpperCase()+t.substring(1),cn[a]=cn[t]})});function dl(t,a,n){return a==null||typeof a=="boolean"||a===""?"":n||typeof a!="number"||a===0||cn.hasOwnProperty(t)&&cn[t]?(""+a).trim():a+"px"}function pl(t,a){t=t.style;for(var n in a)if(a.hasOwnProperty(n)){var i=n.indexOf("--")===0,l=dl(n,a[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,l):t[n]=l}}var Nm=$({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ei(t,a){if(a){if(Nm[t]&&(a.children!=null||a.dangerouslySetInnerHTML!=null))throw Error(o(137,t));if(a.dangerouslySetInnerHTML!=null){if(a.children!=null)throw Error(o(60));if(typeof a.dangerouslySetInnerHTML!="object"||!("__html"in a.dangerouslySetInnerHTML))throw Error(o(61))}if(a.style!=null&&typeof a.style!="object")throw Error(o(62))}}function Ri(t,a){if(t.indexOf("-")===-1)return typeof a.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ii=null;function Pi(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Bi=null,Ea=null,Ra=null;function ml(t){if(t=In(t)){if(typeof Bi!="function")throw Error(o(280));var a=t.stateNode;a&&(a=Nr(a),Bi(t.stateNode,t.type,a))}}function ul(t){Ea?Ra?Ra.push(t):Ra=[t]:Ea=t}function fl(){if(Ea){var t=Ea,a=Ra;if(Ra=Ea=null,ml(t),a)for(t=0;t<a.length;t++)ml(a[t])}}function hl(t,a){return t(a)}function gl(){}var zi=!1;function xl(t,a,n){if(zi)return t(a,n);zi=!0;try{return hl(t,a,n)}finally{zi=!1,(Ea!==null||Ra!==null)&&(gl(),fl())}}function dn(t,a){var n=t.stateNode;if(n===null)return null;var i=Nr(n);if(i===null)return null;n=i[a];e:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(o(231,a,typeof n));return n}var Mi=!1;if(x)try{var pn={};Object.defineProperty(pn,"passive",{get:function(){Mi=!0}}),window.addEventListener("test",pn,pn),window.removeEventListener("test",pn,pn)}catch{Mi=!1}function Tm(t,a,n,i,l,d,f,j,S){var N=Array.prototype.slice.call(arguments,3);try{a.apply(n,N)}catch(O){this.onError(O)}}var mn=!1,ir=null,sr=!1,Oi=null,Em={onError:function(t){mn=!0,ir=t}};function Rm(t,a,n,i,l,d,f,j,S){mn=!1,ir=null,Tm.apply(Em,arguments)}function Im(t,a,n,i,l,d,f,j,S){if(Rm.apply(this,arguments),mn){if(mn){var N=ir;mn=!1,ir=null}else throw Error(o(198));sr||(sr=!0,Oi=N)}}function da(t){var a=t,n=t;if(t.alternate)for(;a.return;)a=a.return;else{t=a;do a=t,(a.flags&4098)!==0&&(n=a.return),t=a.return;while(t)}return a.tag===3?n:null}function bl(t){if(t.tag===13){var a=t.memoizedState;if(a===null&&(t=t.alternate,t!==null&&(a=t.memoizedState)),a!==null)return a.dehydrated}return null}function yl(t){if(da(t)!==t)throw Error(o(188))}function Pm(t){var a=t.alternate;if(!a){if(a=da(t),a===null)throw Error(o(188));return a!==t?null:t}for(var n=t,i=a;;){var l=n.return;if(l===null)break;var d=l.alternate;if(d===null){if(i=l.return,i!==null){n=i;continue}break}if(l.child===d.child){for(d=l.child;d;){if(d===n)return yl(l),t;if(d===i)return yl(l),a;d=d.sibling}throw Error(o(188))}if(n.return!==i.return)n=l,i=d;else{for(var f=!1,j=l.child;j;){if(j===n){f=!0,n=l,i=d;break}if(j===i){f=!0,i=l,n=d;break}j=j.sibling}if(!f){for(j=d.child;j;){if(j===n){f=!0,n=d,i=l;break}if(j===i){f=!0,i=d,n=l;break}j=j.sibling}if(!f)throw Error(o(189))}}if(n.alternate!==i)throw Error(o(190))}if(n.tag!==3)throw Error(o(188));return n.stateNode.current===n?t:a}function vl(t){return t=Pm(t),t!==null?jl(t):null}function jl(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var a=jl(t);if(a!==null)return a;t=t.sibling}return null}var Sl=s.unstable_scheduleCallback,wl=s.unstable_cancelCallback,Bm=s.unstable_shouldYield,zm=s.unstable_requestPaint,Ae=s.unstable_now,Mm=s.unstable_getCurrentPriorityLevel,Di=s.unstable_ImmediatePriority,Cl=s.unstable_UserBlockingPriority,or=s.unstable_NormalPriority,Om=s.unstable_LowPriority,kl=s.unstable_IdlePriority,lr=null,wt=null;function Dm(t){if(wt&&typeof wt.onCommitFiberRoot=="function")try{wt.onCommitFiberRoot(lr,t,void 0,(t.current.flags&128)===128)}catch{}}var ft=Math.clz32?Math.clz32:Hm,Wm=Math.log,Lm=Math.LN2;function Hm(t){return t>>>=0,t===0?32:31-(Wm(t)/Lm|0)|0}var cr=64,dr=4194304;function un(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function pr(t,a){var n=t.pendingLanes;if(n===0)return 0;var i=0,l=t.suspendedLanes,d=t.pingedLanes,f=n&268435455;if(f!==0){var j=f&~l;j!==0?i=un(j):(d&=f,d!==0&&(i=un(d)))}else f=n&~l,f!==0?i=un(f):d!==0&&(i=un(d));if(i===0)return 0;if(a!==0&&a!==i&&(a&l)===0&&(l=i&-i,d=a&-a,l>=d||l===16&&(d&4194240)!==0))return a;if((i&4)!==0&&(i|=n&16),a=t.entangledLanes,a!==0)for(t=t.entanglements,a&=i;0<a;)n=31-ft(a),l=1<<n,i|=t[n],a&=~l;return i}function Fm(t,a){switch(t){case 1:case 2:case 4:return a+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Um(t,a){for(var n=t.suspendedLanes,i=t.pingedLanes,l=t.expirationTimes,d=t.pendingLanes;0<d;){var f=31-ft(d),j=1<<f,S=l[f];S===-1?((j&n)===0||(j&i)!==0)&&(l[f]=Fm(j,a)):S<=a&&(t.expiredLanes|=j),d&=~j}}function Wi(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Al(){var t=cr;return cr<<=1,(cr&4194240)===0&&(cr=64),t}function Li(t){for(var a=[],n=0;31>n;n++)a.push(t);return a}function fn(t,a,n){t.pendingLanes|=a,a!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,a=31-ft(a),t[a]=n}function _m(t,a){var n=t.pendingLanes&~a;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=a,t.mutableReadLanes&=a,t.entangledLanes&=a,a=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var l=31-ft(n),d=1<<l;a[l]=0,i[l]=-1,t[l]=-1,n&=~d}}function Hi(t,a){var n=t.entangledLanes|=a;for(t=t.entanglements;n;){var i=31-ft(n),l=1<<i;l&a|t[i]&a&&(t[i]|=a),n&=~l}}var pe=0;function Nl(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var Tl,Fi,El,Rl,Il,Ui=!1,mr=[],Ht=null,Ft=null,Ut=null,hn=new Map,gn=new Map,_t=[],$m="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Pl(t,a){switch(t){case"focusin":case"focusout":Ht=null;break;case"dragenter":case"dragleave":Ft=null;break;case"mouseover":case"mouseout":Ut=null;break;case"pointerover":case"pointerout":hn.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":gn.delete(a.pointerId)}}function xn(t,a,n,i,l,d){return t===null||t.nativeEvent!==d?(t={blockedOn:a,domEventName:n,eventSystemFlags:i,nativeEvent:d,targetContainers:[l]},a!==null&&(a=In(a),a!==null&&Fi(a)),t):(t.eventSystemFlags|=i,a=t.targetContainers,l!==null&&a.indexOf(l)===-1&&a.push(l),t)}function Gm(t,a,n,i,l){switch(a){case"focusin":return Ht=xn(Ht,t,a,n,i,l),!0;case"dragenter":return Ft=xn(Ft,t,a,n,i,l),!0;case"mouseover":return Ut=xn(Ut,t,a,n,i,l),!0;case"pointerover":var d=l.pointerId;return hn.set(d,xn(hn.get(d)||null,t,a,n,i,l)),!0;case"gotpointercapture":return d=l.pointerId,gn.set(d,xn(gn.get(d)||null,t,a,n,i,l)),!0}return!1}function Bl(t){var a=pa(t.target);if(a!==null){var n=da(a);if(n!==null){if(a=n.tag,a===13){if(a=bl(n),a!==null){t.blockedOn=a,Il(t.priority,function(){El(n)});return}}else if(a===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ur(t){if(t.blockedOn!==null)return!1;for(var a=t.targetContainers;0<a.length;){var n=$i(t.domEventName,t.eventSystemFlags,a[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Ii=i,n.target.dispatchEvent(i),Ii=null}else return a=In(n),a!==null&&Fi(a),t.blockedOn=n,!1;a.shift()}return!0}function zl(t,a,n){ur(t)&&n.delete(a)}function Ym(){Ui=!1,Ht!==null&&ur(Ht)&&(Ht=null),Ft!==null&&ur(Ft)&&(Ft=null),Ut!==null&&ur(Ut)&&(Ut=null),hn.forEach(zl),gn.forEach(zl)}function bn(t,a){t.blockedOn===a&&(t.blockedOn=null,Ui||(Ui=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,Ym)))}function yn(t){function a(l){return bn(l,t)}if(0<mr.length){bn(mr[0],t);for(var n=1;n<mr.length;n++){var i=mr[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Ht!==null&&bn(Ht,t),Ft!==null&&bn(Ft,t),Ut!==null&&bn(Ut,t),hn.forEach(a),gn.forEach(a),n=0;n<_t.length;n++)i=_t[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<_t.length&&(n=_t[0],n.blockedOn===null);)Bl(n),n.blockedOn===null&&_t.shift()}var Ia=q.ReactCurrentBatchConfig,fr=!0;function Jm(t,a,n,i){var l=pe,d=Ia.transition;Ia.transition=null;try{pe=1,_i(t,a,n,i)}finally{pe=l,Ia.transition=d}}function Vm(t,a,n,i){var l=pe,d=Ia.transition;Ia.transition=null;try{pe=4,_i(t,a,n,i)}finally{pe=l,Ia.transition=d}}function _i(t,a,n,i){if(fr){var l=$i(t,a,n,i);if(l===null)os(t,a,i,hr,n),Pl(t,i);else if(Gm(l,t,a,n,i))i.stopPropagation();else if(Pl(t,i),a&4&&-1<$m.indexOf(t)){for(;l!==null;){var d=In(l);if(d!==null&&Tl(d),d=$i(t,a,n,i),d===null&&os(t,a,i,hr,n),d===l)break;l=d}l!==null&&i.stopPropagation()}else os(t,a,i,null,n)}}var hr=null;function $i(t,a,n,i){if(hr=null,t=Pi(i),t=pa(t),t!==null)if(a=da(t),a===null)t=null;else if(n=a.tag,n===13){if(t=bl(a),t!==null)return t;t=null}else if(n===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;t=null}else a!==t&&(t=null);return hr=t,null}function Ml(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Mm()){case Di:return 1;case Cl:return 4;case or:case Om:return 16;case kl:return 536870912;default:return 16}default:return 16}}var $t=null,Gi=null,gr=null;function Ol(){if(gr)return gr;var t,a=Gi,n=a.length,i,l="value"in $t?$t.value:$t.textContent,d=l.length;for(t=0;t<n&&a[t]===l[t];t++);var f=n-t;for(i=1;i<=f&&a[n-i]===l[d-i];i++);return gr=l.slice(t,1<i?1-i:void 0)}function xr(t){var a=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&a===13&&(t=13)):t=a,t===10&&(t=13),32<=t||t===13?t:0}function br(){return!0}function Dl(){return!1}function tt(t){function a(n,i,l,d,f){this._reactName=n,this._targetInst=l,this.type=i,this.nativeEvent=d,this.target=f,this.currentTarget=null;for(var j in t)t.hasOwnProperty(j)&&(n=t[j],this[j]=n?n(d):d[j]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?br:Dl,this.isPropagationStopped=Dl,this}return $(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=br)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=br)},persist:function(){},isPersistent:br}),a}var Pa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Yi=tt(Pa),vn=$({},Pa,{view:0,detail:0}),Km=tt(vn),Ji,Vi,jn,yr=$({},vn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qi,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==jn&&(jn&&t.type==="mousemove"?(Ji=t.screenX-jn.screenX,Vi=t.screenY-jn.screenY):Vi=Ji=0,jn=t),Ji)},movementY:function(t){return"movementY"in t?t.movementY:Vi}}),Wl=tt(yr),qm=$({},yr,{dataTransfer:0}),Qm=tt(qm),Xm=$({},vn,{relatedTarget:0}),Ki=tt(Xm),Zm=$({},Pa,{animationName:0,elapsedTime:0,pseudoElement:0}),eu=tt(Zm),tu=$({},Pa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),au=tt(tu),nu=$({},Pa,{data:0}),Ll=tt(nu),ru={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},iu={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},su={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ou(t){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(t):(t=su[t])?!!a[t]:!1}function qi(){return ou}var lu=$({},vn,{key:function(t){if(t.key){var a=ru[t.key]||t.key;if(a!=="Unidentified")return a}return t.type==="keypress"?(t=xr(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?iu[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qi,charCode:function(t){return t.type==="keypress"?xr(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?xr(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),cu=tt(lu),du=$({},yr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Hl=tt(du),pu=$({},vn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qi}),mu=tt(pu),uu=$({},Pa,{propertyName:0,elapsedTime:0,pseudoElement:0}),fu=tt(uu),hu=$({},yr,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),gu=tt(hu),xu=[9,13,27,32],Qi=x&&"CompositionEvent"in window,Sn=null;x&&"documentMode"in document&&(Sn=document.documentMode);var bu=x&&"TextEvent"in window&&!Sn,Fl=x&&(!Qi||Sn&&8<Sn&&11>=Sn),Ul=" ",_l=!1;function $l(t,a){switch(t){case"keyup":return xu.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Gl(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ba=!1;function yu(t,a){switch(t){case"compositionend":return Gl(a);case"keypress":return a.which!==32?null:(_l=!0,Ul);case"textInput":return t=a.data,t===Ul&&_l?null:t;default:return null}}function vu(t,a){if(Ba)return t==="compositionend"||!Qi&&$l(t,a)?(t=Ol(),gr=Gi=$t=null,Ba=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return Fl&&a.locale!=="ko"?null:a.data;default:return null}}var ju={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Yl(t){var a=t&&t.nodeName&&t.nodeName.toLowerCase();return a==="input"?!!ju[t.type]:a==="textarea"}function Jl(t,a,n,i){ul(i),a=Cr(a,"onChange"),0<a.length&&(n=new Yi("onChange","change",null,n,i),t.push({event:n,listeners:a}))}var wn=null,Cn=null;function Su(t){pc(t,0)}function vr(t){var a=Wa(t);if(tl(a))return t}function wu(t,a){if(t==="change")return a}var Vl=!1;if(x){var Xi;if(x){var Zi="oninput"in document;if(!Zi){var Kl=document.createElement("div");Kl.setAttribute("oninput","return;"),Zi=typeof Kl.oninput=="function"}Xi=Zi}else Xi=!1;Vl=Xi&&(!document.documentMode||9<document.documentMode)}function ql(){wn&&(wn.detachEvent("onpropertychange",Ql),Cn=wn=null)}function Ql(t){if(t.propertyName==="value"&&vr(Cn)){var a=[];Jl(a,Cn,t,Pi(t)),xl(Su,a)}}function Cu(t,a,n){t==="focusin"?(ql(),wn=a,Cn=n,wn.attachEvent("onpropertychange",Ql)):t==="focusout"&&ql()}function ku(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return vr(Cn)}function Au(t,a){if(t==="click")return vr(a)}function Nu(t,a){if(t==="input"||t==="change")return vr(a)}function Tu(t,a){return t===a&&(t!==0||1/t===1/a)||t!==t&&a!==a}var ht=typeof Object.is=="function"?Object.is:Tu;function kn(t,a){if(ht(t,a))return!0;if(typeof t!="object"||t===null||typeof a!="object"||a===null)return!1;var n=Object.keys(t),i=Object.keys(a);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var l=n[i];if(!h.call(a,l)||!ht(t[l],a[l]))return!1}return!0}function Xl(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Zl(t,a){var n=Xl(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=a&&i>=a)return{node:n,offset:a-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Xl(n)}}function ec(t,a){return t&&a?t===a?!0:t&&t.nodeType===3?!1:a&&a.nodeType===3?ec(t,a.parentNode):"contains"in t?t.contains(a):t.compareDocumentPosition?!!(t.compareDocumentPosition(a)&16):!1:!1}function tc(){for(var t=window,a=nr();a instanceof t.HTMLIFrameElement;){try{var n=typeof a.contentWindow.location.href=="string"}catch{n=!1}if(n)t=a.contentWindow;else break;a=nr(t.document)}return a}function es(t){var a=t&&t.nodeName&&t.nodeName.toLowerCase();return a&&(a==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||a==="textarea"||t.contentEditable==="true")}function Eu(t){var a=tc(),n=t.focusedElem,i=t.selectionRange;if(a!==n&&n&&n.ownerDocument&&ec(n.ownerDocument.documentElement,n)){if(i!==null&&es(n)){if(a=i.start,t=i.end,t===void 0&&(t=a),"selectionStart"in n)n.selectionStart=a,n.selectionEnd=Math.min(t,n.value.length);else if(t=(a=n.ownerDocument||document)&&a.defaultView||window,t.getSelection){t=t.getSelection();var l=n.textContent.length,d=Math.min(i.start,l);i=i.end===void 0?d:Math.min(i.end,l),!t.extend&&d>i&&(l=i,i=d,d=l),l=Zl(n,d);var f=Zl(n,i);l&&f&&(t.rangeCount!==1||t.anchorNode!==l.node||t.anchorOffset!==l.offset||t.focusNode!==f.node||t.focusOffset!==f.offset)&&(a=a.createRange(),a.setStart(l.node,l.offset),t.removeAllRanges(),d>i?(t.addRange(a),t.extend(f.node,f.offset)):(a.setEnd(f.node,f.offset),t.addRange(a)))}}for(a=[],t=n;t=t.parentNode;)t.nodeType===1&&a.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<a.length;n++)t=a[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Ru=x&&"documentMode"in document&&11>=document.documentMode,za=null,ts=null,An=null,as=!1;function ac(t,a,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;as||za==null||za!==nr(i)||(i=za,"selectionStart"in i&&es(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),An&&kn(An,i)||(An=i,i=Cr(ts,"onSelect"),0<i.length&&(a=new Yi("onSelect","select",null,a,n),t.push({event:a,listeners:i}),a.target=za)))}function jr(t,a){var n={};return n[t.toLowerCase()]=a.toLowerCase(),n["Webkit"+t]="webkit"+a,n["Moz"+t]="moz"+a,n}var Ma={animationend:jr("Animation","AnimationEnd"),animationiteration:jr("Animation","AnimationIteration"),animationstart:jr("Animation","AnimationStart"),transitionend:jr("Transition","TransitionEnd")},ns={},nc={};x&&(nc=document.createElement("div").style,"AnimationEvent"in window||(delete Ma.animationend.animation,delete Ma.animationiteration.animation,delete Ma.animationstart.animation),"TransitionEvent"in window||delete Ma.transitionend.transition);function Sr(t){if(ns[t])return ns[t];if(!Ma[t])return t;var a=Ma[t],n;for(n in a)if(a.hasOwnProperty(n)&&n in nc)return ns[t]=a[n];return t}var rc=Sr("animationend"),ic=Sr("animationiteration"),sc=Sr("animationstart"),oc=Sr("transitionend"),lc=new Map,cc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Gt(t,a){lc.set(t,a),p(a,[t])}for(var rs=0;rs<cc.length;rs++){var is=cc[rs],Iu=is.toLowerCase(),Pu=is[0].toUpperCase()+is.slice(1);Gt(Iu,"on"+Pu)}Gt(rc,"onAnimationEnd"),Gt(ic,"onAnimationIteration"),Gt(sc,"onAnimationStart"),Gt("dblclick","onDoubleClick"),Gt("focusin","onFocus"),Gt("focusout","onBlur"),Gt(oc,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),p("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),p("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),p("onBeforeInput",["compositionend","keypress","textInput","paste"]),p("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),p("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),p("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Nn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Bu=new Set("cancel close invalid load scroll toggle".split(" ").concat(Nn));function dc(t,a,n){var i=t.type||"unknown-event";t.currentTarget=n,Im(i,a,void 0,t),t.currentTarget=null}function pc(t,a){a=(a&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],l=i.event;i=i.listeners;e:{var d=void 0;if(a)for(var f=i.length-1;0<=f;f--){var j=i[f],S=j.instance,N=j.currentTarget;if(j=j.listener,S!==d&&l.isPropagationStopped())break e;dc(l,j,N),d=S}else for(f=0;f<i.length;f++){if(j=i[f],S=j.instance,N=j.currentTarget,j=j.listener,S!==d&&l.isPropagationStopped())break e;dc(l,j,N),d=S}}}if(sr)throw t=Oi,sr=!1,Oi=null,t}function he(t,a){var n=a[us];n===void 0&&(n=a[us]=new Set);var i=t+"__bubble";n.has(i)||(mc(a,t,2,!1),n.add(i))}function ss(t,a,n){var i=0;a&&(i|=4),mc(n,t,i,a)}var wr="_reactListening"+Math.random().toString(36).slice(2);function Tn(t){if(!t[wr]){t[wr]=!0,c.forEach(function(n){n!=="selectionchange"&&(Bu.has(n)||ss(n,!1,t),ss(n,!0,t))});var a=t.nodeType===9?t:t.ownerDocument;a===null||a[wr]||(a[wr]=!0,ss("selectionchange",!1,a))}}function mc(t,a,n,i){switch(Ml(a)){case 1:var l=Jm;break;case 4:l=Vm;break;default:l=_i}n=l.bind(null,a,n,t),l=void 0,!Mi||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(l=!0),i?l!==void 0?t.addEventListener(a,n,{capture:!0,passive:l}):t.addEventListener(a,n,!0):l!==void 0?t.addEventListener(a,n,{passive:l}):t.addEventListener(a,n,!1)}function os(t,a,n,i,l){var d=i;if((a&1)===0&&(a&2)===0&&i!==null)e:for(;;){if(i===null)return;var f=i.tag;if(f===3||f===4){var j=i.stateNode.containerInfo;if(j===l||j.nodeType===8&&j.parentNode===l)break;if(f===4)for(f=i.return;f!==null;){var S=f.tag;if((S===3||S===4)&&(S=f.stateNode.containerInfo,S===l||S.nodeType===8&&S.parentNode===l))return;f=f.return}for(;j!==null;){if(f=pa(j),f===null)return;if(S=f.tag,S===5||S===6){i=d=f;continue e}j=j.parentNode}}i=i.return}xl(function(){var N=d,O=Pi(n),D=[];e:{var B=lc.get(t);if(B!==void 0){var H=Yi,G=t;switch(t){case"keypress":if(xr(n)===0)break e;case"keydown":case"keyup":H=cu;break;case"focusin":G="focus",H=Ki;break;case"focusout":G="blur",H=Ki;break;case"beforeblur":case"afterblur":H=Ki;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":H=Wl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":H=Qm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":H=mu;break;case rc:case ic:case sc:H=eu;break;case oc:H=fu;break;case"scroll":H=Km;break;case"wheel":H=gu;break;case"copy":case"cut":case"paste":H=au;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":H=Hl}var Y=(a&4)!==0,Ne=!Y&&t==="scroll",k=Y?B!==null?B+"Capture":null:B;Y=[];for(var w=N,A;w!==null;){A=w;var W=A.stateNode;if(A.tag===5&&W!==null&&(A=W,k!==null&&(W=dn(w,k),W!=null&&Y.push(En(w,W,A)))),Ne)break;w=w.return}0<Y.length&&(B=new H(B,G,null,n,O),D.push({event:B,listeners:Y}))}}if((a&7)===0){e:{if(B=t==="mouseover"||t==="pointerover",H=t==="mouseout"||t==="pointerout",B&&n!==Ii&&(G=n.relatedTarget||n.fromElement)&&(pa(G)||G[Rt]))break e;if((H||B)&&(B=O.window===O?O:(B=O.ownerDocument)?B.defaultView||B.parentWindow:window,H?(G=n.relatedTarget||n.toElement,H=N,G=G?pa(G):null,G!==null&&(Ne=da(G),G!==Ne||G.tag!==5&&G.tag!==6)&&(G=null)):(H=null,G=N),H!==G)){if(Y=Wl,W="onMouseLeave",k="onMouseEnter",w="mouse",(t==="pointerout"||t==="pointerover")&&(Y=Hl,W="onPointerLeave",k="onPointerEnter",w="pointer"),Ne=H==null?B:Wa(H),A=G==null?B:Wa(G),B=new Y(W,w+"leave",H,n,O),B.target=Ne,B.relatedTarget=A,W=null,pa(O)===N&&(Y=new Y(k,w+"enter",G,n,O),Y.target=A,Y.relatedTarget=Ne,W=Y),Ne=W,H&&G)t:{for(Y=H,k=G,w=0,A=Y;A;A=Oa(A))w++;for(A=0,W=k;W;W=Oa(W))A++;for(;0<w-A;)Y=Oa(Y),w--;for(;0<A-w;)k=Oa(k),A--;for(;w--;){if(Y===k||k!==null&&Y===k.alternate)break t;Y=Oa(Y),k=Oa(k)}Y=null}else Y=null;H!==null&&uc(D,B,H,Y,!1),G!==null&&Ne!==null&&uc(D,Ne,G,Y,!0)}}e:{if(B=N?Wa(N):window,H=B.nodeName&&B.nodeName.toLowerCase(),H==="select"||H==="input"&&B.type==="file")var V=wu;else if(Yl(B))if(Vl)V=Nu;else{V=ku;var Q=Cu}else(H=B.nodeName)&&H.toLowerCase()==="input"&&(B.type==="checkbox"||B.type==="radio")&&(V=Au);if(V&&(V=V(t,N))){Jl(D,V,n,O);break e}Q&&Q(t,B,N),t==="focusout"&&(Q=B._wrapperState)&&Q.controlled&&B.type==="number"&&Ai(B,"number",B.value)}switch(Q=N?Wa(N):window,t){case"focusin":(Yl(Q)||Q.contentEditable==="true")&&(za=Q,ts=N,An=null);break;case"focusout":An=ts=za=null;break;case"mousedown":as=!0;break;case"contextmenu":case"mouseup":case"dragend":as=!1,ac(D,n,O);break;case"selectionchange":if(Ru)break;case"keydown":case"keyup":ac(D,n,O)}var X;if(Qi)e:{switch(t){case"compositionstart":var te="onCompositionStart";break e;case"compositionend":te="onCompositionEnd";break e;case"compositionupdate":te="onCompositionUpdate";break e}te=void 0}else Ba?$l(t,n)&&(te="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(te="onCompositionStart");te&&(Fl&&n.locale!=="ko"&&(Ba||te!=="onCompositionStart"?te==="onCompositionEnd"&&Ba&&(X=Ol()):($t=O,Gi="value"in $t?$t.value:$t.textContent,Ba=!0)),Q=Cr(N,te),0<Q.length&&(te=new Ll(te,t,null,n,O),D.push({event:te,listeners:Q}),X?te.data=X:(X=Gl(n),X!==null&&(te.data=X)))),(X=bu?yu(t,n):vu(t,n))&&(N=Cr(N,"onBeforeInput"),0<N.length&&(O=new Ll("onBeforeInput","beforeinput",null,n,O),D.push({event:O,listeners:N}),O.data=X))}pc(D,a)})}function En(t,a,n){return{instance:t,listener:a,currentTarget:n}}function Cr(t,a){for(var n=a+"Capture",i=[];t!==null;){var l=t,d=l.stateNode;l.tag===5&&d!==null&&(l=d,d=dn(t,n),d!=null&&i.unshift(En(t,d,l)),d=dn(t,a),d!=null&&i.push(En(t,d,l))),t=t.return}return i}function Oa(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function uc(t,a,n,i,l){for(var d=a._reactName,f=[];n!==null&&n!==i;){var j=n,S=j.alternate,N=j.stateNode;if(S!==null&&S===i)break;j.tag===5&&N!==null&&(j=N,l?(S=dn(n,d),S!=null&&f.unshift(En(n,S,j))):l||(S=dn(n,d),S!=null&&f.push(En(n,S,j)))),n=n.return}f.length!==0&&t.push({event:a,listeners:f})}var zu=/\r\n?/g,Mu=/\u0000|\uFFFD/g;function fc(t){return(typeof t=="string"?t:""+t).replace(zu,`
`).replace(Mu,"")}function kr(t,a,n){if(a=fc(a),fc(t)!==a&&n)throw Error(o(425))}function Ar(){}var ls=null,cs=null;function ds(t,a){return t==="textarea"||t==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var ps=typeof setTimeout=="function"?setTimeout:void 0,Ou=typeof clearTimeout=="function"?clearTimeout:void 0,hc=typeof Promise=="function"?Promise:void 0,Du=typeof queueMicrotask=="function"?queueMicrotask:typeof hc<"u"?function(t){return hc.resolve(null).then(t).catch(Wu)}:ps;function Wu(t){setTimeout(function(){throw t})}function ms(t,a){var n=a,i=0;do{var l=n.nextSibling;if(t.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(i===0){t.removeChild(l),yn(a);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=l}while(n);yn(a)}function Yt(t){for(;t!=null;t=t.nextSibling){var a=t.nodeType;if(a===1||a===3)break;if(a===8){if(a=t.data,a==="$"||a==="$!"||a==="$?")break;if(a==="/$")return null}}return t}function gc(t){t=t.previousSibling;for(var a=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(a===0)return t;a--}else n==="/$"&&a++}t=t.previousSibling}return null}var Da=Math.random().toString(36).slice(2),Ct="__reactFiber$"+Da,Rn="__reactProps$"+Da,Rt="__reactContainer$"+Da,us="__reactEvents$"+Da,Lu="__reactListeners$"+Da,Hu="__reactHandles$"+Da;function pa(t){var a=t[Ct];if(a)return a;for(var n=t.parentNode;n;){if(a=n[Rt]||n[Ct]){if(n=a.alternate,a.child!==null||n!==null&&n.child!==null)for(t=gc(t);t!==null;){if(n=t[Ct])return n;t=gc(t)}return a}t=n,n=t.parentNode}return null}function In(t){return t=t[Ct]||t[Rt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Wa(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(o(33))}function Nr(t){return t[Rn]||null}var fs=[],La=-1;function Jt(t){return{current:t}}function ge(t){0>La||(t.current=fs[La],fs[La]=null,La--)}function fe(t,a){La++,fs[La]=t.current,t.current=a}var Vt={},Le=Jt(Vt),Ye=Jt(!1),ma=Vt;function Ha(t,a){var n=t.type.contextTypes;if(!n)return Vt;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===a)return i.__reactInternalMemoizedMaskedChildContext;var l={},d;for(d in n)l[d]=a[d];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=a,t.__reactInternalMemoizedMaskedChildContext=l),l}function Je(t){return t=t.childContextTypes,t!=null}function Tr(){ge(Ye),ge(Le)}function xc(t,a,n){if(Le.current!==Vt)throw Error(o(168));fe(Le,a),fe(Ye,n)}function bc(t,a,n){var i=t.stateNode;if(a=a.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var l in i)if(!(l in a))throw Error(o(108,ue(t)||"Unknown",l));return $({},n,i)}function Er(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Vt,ma=Le.current,fe(Le,t),fe(Ye,Ye.current),!0}function yc(t,a,n){var i=t.stateNode;if(!i)throw Error(o(169));n?(t=bc(t,a,ma),i.__reactInternalMemoizedMergedChildContext=t,ge(Ye),ge(Le),fe(Le,t)):ge(Ye),fe(Ye,n)}var It=null,Rr=!1,hs=!1;function vc(t){It===null?It=[t]:It.push(t)}function Fu(t){Rr=!0,vc(t)}function Kt(){if(!hs&&It!==null){hs=!0;var t=0,a=pe;try{var n=It;for(pe=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}It=null,Rr=!1}catch(l){throw It!==null&&(It=It.slice(t+1)),Sl(Di,Kt),l}finally{pe=a,hs=!1}}return null}var Fa=[],Ua=0,Ir=null,Pr=0,st=[],ot=0,ua=null,Pt=1,Bt="";function fa(t,a){Fa[Ua++]=Pr,Fa[Ua++]=Ir,Ir=t,Pr=a}function jc(t,a,n){st[ot++]=Pt,st[ot++]=Bt,st[ot++]=ua,ua=t;var i=Pt;t=Bt;var l=32-ft(i)-1;i&=~(1<<l),n+=1;var d=32-ft(a)+l;if(30<d){var f=l-l%5;d=(i&(1<<f)-1).toString(32),i>>=f,l-=f,Pt=1<<32-ft(a)+l|n<<l|i,Bt=d+t}else Pt=1<<d|n<<l|i,Bt=t}function gs(t){t.return!==null&&(fa(t,1),jc(t,1,0))}function xs(t){for(;t===Ir;)Ir=Fa[--Ua],Fa[Ua]=null,Pr=Fa[--Ua],Fa[Ua]=null;for(;t===ua;)ua=st[--ot],st[ot]=null,Bt=st[--ot],st[ot]=null,Pt=st[--ot],st[ot]=null}var at=null,nt=null,be=!1,gt=null;function Sc(t,a){var n=pt(5,null,null,0);n.elementType="DELETED",n.stateNode=a,n.return=t,a=t.deletions,a===null?(t.deletions=[n],t.flags|=16):a.push(n)}function wc(t,a){switch(t.tag){case 5:var n=t.type;return a=a.nodeType!==1||n.toLowerCase()!==a.nodeName.toLowerCase()?null:a,a!==null?(t.stateNode=a,at=t,nt=Yt(a.firstChild),!0):!1;case 6:return a=t.pendingProps===""||a.nodeType!==3?null:a,a!==null?(t.stateNode=a,at=t,nt=null,!0):!1;case 13:return a=a.nodeType!==8?null:a,a!==null?(n=ua!==null?{id:Pt,overflow:Bt}:null,t.memoizedState={dehydrated:a,treeContext:n,retryLane:1073741824},n=pt(18,null,null,0),n.stateNode=a,n.return=t,t.child=n,at=t,nt=null,!0):!1;default:return!1}}function bs(t){return(t.mode&1)!==0&&(t.flags&128)===0}function ys(t){if(be){var a=nt;if(a){var n=a;if(!wc(t,a)){if(bs(t))throw Error(o(418));a=Yt(n.nextSibling);var i=at;a&&wc(t,a)?Sc(i,n):(t.flags=t.flags&-4097|2,be=!1,at=t)}}else{if(bs(t))throw Error(o(418));t.flags=t.flags&-4097|2,be=!1,at=t}}}function Cc(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;at=t}function Br(t){if(t!==at)return!1;if(!be)return Cc(t),be=!0,!1;var a;if((a=t.tag!==3)&&!(a=t.tag!==5)&&(a=t.type,a=a!=="head"&&a!=="body"&&!ds(t.type,t.memoizedProps)),a&&(a=nt)){if(bs(t))throw kc(),Error(o(418));for(;a;)Sc(t,a),a=Yt(a.nextSibling)}if(Cc(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(o(317));e:{for(t=t.nextSibling,a=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(a===0){nt=Yt(t.nextSibling);break e}a--}else n!=="$"&&n!=="$!"&&n!=="$?"||a++}t=t.nextSibling}nt=null}}else nt=at?Yt(t.stateNode.nextSibling):null;return!0}function kc(){for(var t=nt;t;)t=Yt(t.nextSibling)}function _a(){nt=at=null,be=!1}function vs(t){gt===null?gt=[t]:gt.push(t)}var Uu=q.ReactCurrentBatchConfig;function Pn(t,a,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(o(309));var i=n.stateNode}if(!i)throw Error(o(147,t));var l=i,d=""+t;return a!==null&&a.ref!==null&&typeof a.ref=="function"&&a.ref._stringRef===d?a.ref:(a=function(f){var j=l.refs;f===null?delete j[d]:j[d]=f},a._stringRef=d,a)}if(typeof t!="string")throw Error(o(284));if(!n._owner)throw Error(o(290,t))}return t}function zr(t,a){throw t=Object.prototype.toString.call(a),Error(o(31,t==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":t))}function Ac(t){var a=t._init;return a(t._payload)}function Nc(t){function a(k,w){if(t){var A=k.deletions;A===null?(k.deletions=[w],k.flags|=16):A.push(w)}}function n(k,w){if(!t)return null;for(;w!==null;)a(k,w),w=w.sibling;return null}function i(k,w){for(k=new Map;w!==null;)w.key!==null?k.set(w.key,w):k.set(w.index,w),w=w.sibling;return k}function l(k,w){return k=na(k,w),k.index=0,k.sibling=null,k}function d(k,w,A){return k.index=A,t?(A=k.alternate,A!==null?(A=A.index,A<w?(k.flags|=2,w):A):(k.flags|=2,w)):(k.flags|=1048576,w)}function f(k){return t&&k.alternate===null&&(k.flags|=2),k}function j(k,w,A,W){return w===null||w.tag!==6?(w=mo(A,k.mode,W),w.return=k,w):(w=l(w,A),w.return=k,w)}function S(k,w,A,W){var V=A.type;return V===K?O(k,w,A.props.children,W,A.key):w!==null&&(w.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===Ge&&Ac(V)===w.type)?(W=l(w,A.props),W.ref=Pn(k,w,A),W.return=k,W):(W=ri(A.type,A.key,A.props,null,k.mode,W),W.ref=Pn(k,w,A),W.return=k,W)}function N(k,w,A,W){return w===null||w.tag!==4||w.stateNode.containerInfo!==A.containerInfo||w.stateNode.implementation!==A.implementation?(w=uo(A,k.mode,W),w.return=k,w):(w=l(w,A.children||[]),w.return=k,w)}function O(k,w,A,W,V){return w===null||w.tag!==7?(w=Sa(A,k.mode,W,V),w.return=k,w):(w=l(w,A),w.return=k,w)}function D(k,w,A){if(typeof w=="string"&&w!==""||typeof w=="number")return w=mo(""+w,k.mode,A),w.return=k,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case ie:return A=ri(w.type,w.key,w.props,null,k.mode,A),A.ref=Pn(k,null,w),A.return=k,A;case me:return w=uo(w,k.mode,A),w.return=k,w;case Ge:var W=w._init;return D(k,W(w._payload),A)}if(on(w)||Z(w))return w=Sa(w,k.mode,A,null),w.return=k,w;zr(k,w)}return null}function B(k,w,A,W){var V=w!==null?w.key:null;if(typeof A=="string"&&A!==""||typeof A=="number")return V!==null?null:j(k,w,""+A,W);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case ie:return A.key===V?S(k,w,A,W):null;case me:return A.key===V?N(k,w,A,W):null;case Ge:return V=A._init,B(k,w,V(A._payload),W)}if(on(A)||Z(A))return V!==null?null:O(k,w,A,W,null);zr(k,A)}return null}function H(k,w,A,W,V){if(typeof W=="string"&&W!==""||typeof W=="number")return k=k.get(A)||null,j(w,k,""+W,V);if(typeof W=="object"&&W!==null){switch(W.$$typeof){case ie:return k=k.get(W.key===null?A:W.key)||null,S(w,k,W,V);case me:return k=k.get(W.key===null?A:W.key)||null,N(w,k,W,V);case Ge:var Q=W._init;return H(k,w,A,Q(W._payload),V)}if(on(W)||Z(W))return k=k.get(A)||null,O(w,k,W,V,null);zr(w,W)}return null}function G(k,w,A,W){for(var V=null,Q=null,X=w,te=w=0,Me=null;X!==null&&te<A.length;te++){X.index>te?(Me=X,X=null):Me=X.sibling;var ce=B(k,X,A[te],W);if(ce===null){X===null&&(X=Me);break}t&&X&&ce.alternate===null&&a(k,X),w=d(ce,w,te),Q===null?V=ce:Q.sibling=ce,Q=ce,X=Me}if(te===A.length)return n(k,X),be&&fa(k,te),V;if(X===null){for(;te<A.length;te++)X=D(k,A[te],W),X!==null&&(w=d(X,w,te),Q===null?V=X:Q.sibling=X,Q=X);return be&&fa(k,te),V}for(X=i(k,X);te<A.length;te++)Me=H(X,k,te,A[te],W),Me!==null&&(t&&Me.alternate!==null&&X.delete(Me.key===null?te:Me.key),w=d(Me,w,te),Q===null?V=Me:Q.sibling=Me,Q=Me);return t&&X.forEach(function(ra){return a(k,ra)}),be&&fa(k,te),V}function Y(k,w,A,W){var V=Z(A);if(typeof V!="function")throw Error(o(150));if(A=V.call(A),A==null)throw Error(o(151));for(var Q=V=null,X=w,te=w=0,Me=null,ce=A.next();X!==null&&!ce.done;te++,ce=A.next()){X.index>te?(Me=X,X=null):Me=X.sibling;var ra=B(k,X,ce.value,W);if(ra===null){X===null&&(X=Me);break}t&&X&&ra.alternate===null&&a(k,X),w=d(ra,w,te),Q===null?V=ra:Q.sibling=ra,Q=ra,X=Me}if(ce.done)return n(k,X),be&&fa(k,te),V;if(X===null){for(;!ce.done;te++,ce=A.next())ce=D(k,ce.value,W),ce!==null&&(w=d(ce,w,te),Q===null?V=ce:Q.sibling=ce,Q=ce);return be&&fa(k,te),V}for(X=i(k,X);!ce.done;te++,ce=A.next())ce=H(X,k,te,ce.value,W),ce!==null&&(t&&ce.alternate!==null&&X.delete(ce.key===null?te:ce.key),w=d(ce,w,te),Q===null?V=ce:Q.sibling=ce,Q=ce);return t&&X.forEach(function(Sf){return a(k,Sf)}),be&&fa(k,te),V}function Ne(k,w,A,W){if(typeof A=="object"&&A!==null&&A.type===K&&A.key===null&&(A=A.props.children),typeof A=="object"&&A!==null){switch(A.$$typeof){case ie:e:{for(var V=A.key,Q=w;Q!==null;){if(Q.key===V){if(V=A.type,V===K){if(Q.tag===7){n(k,Q.sibling),w=l(Q,A.props.children),w.return=k,k=w;break e}}else if(Q.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===Ge&&Ac(V)===Q.type){n(k,Q.sibling),w=l(Q,A.props),w.ref=Pn(k,Q,A),w.return=k,k=w;break e}n(k,Q);break}else a(k,Q);Q=Q.sibling}A.type===K?(w=Sa(A.props.children,k.mode,W,A.key),w.return=k,k=w):(W=ri(A.type,A.key,A.props,null,k.mode,W),W.ref=Pn(k,w,A),W.return=k,k=W)}return f(k);case me:e:{for(Q=A.key;w!==null;){if(w.key===Q)if(w.tag===4&&w.stateNode.containerInfo===A.containerInfo&&w.stateNode.implementation===A.implementation){n(k,w.sibling),w=l(w,A.children||[]),w.return=k,k=w;break e}else{n(k,w);break}else a(k,w);w=w.sibling}w=uo(A,k.mode,W),w.return=k,k=w}return f(k);case Ge:return Q=A._init,Ne(k,w,Q(A._payload),W)}if(on(A))return G(k,w,A,W);if(Z(A))return Y(k,w,A,W);zr(k,A)}return typeof A=="string"&&A!==""||typeof A=="number"?(A=""+A,w!==null&&w.tag===6?(n(k,w.sibling),w=l(w,A),w.return=k,k=w):(n(k,w),w=mo(A,k.mode,W),w.return=k,k=w),f(k)):n(k,w)}return Ne}var $a=Nc(!0),Tc=Nc(!1),Mr=Jt(null),Or=null,Ga=null,js=null;function Ss(){js=Ga=Or=null}function ws(t){var a=Mr.current;ge(Mr),t._currentValue=a}function Cs(t,a,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&a)!==a?(t.childLanes|=a,i!==null&&(i.childLanes|=a)):i!==null&&(i.childLanes&a)!==a&&(i.childLanes|=a),t===n)break;t=t.return}}function Ya(t,a){Or=t,js=Ga=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&a)!==0&&(Ve=!0),t.firstContext=null)}function lt(t){var a=t._currentValue;if(js!==t)if(t={context:t,memoizedValue:a,next:null},Ga===null){if(Or===null)throw Error(o(308));Ga=t,Or.dependencies={lanes:0,firstContext:t}}else Ga=Ga.next=t;return a}var ha=null;function ks(t){ha===null?ha=[t]:ha.push(t)}function Ec(t,a,n,i){var l=a.interleaved;return l===null?(n.next=n,ks(a)):(n.next=l.next,l.next=n),a.interleaved=n,zt(t,i)}function zt(t,a){t.lanes|=a;var n=t.alternate;for(n!==null&&(n.lanes|=a),n=t,t=t.return;t!==null;)t.childLanes|=a,n=t.alternate,n!==null&&(n.childLanes|=a),n=t,t=t.return;return n.tag===3?n.stateNode:null}var qt=!1;function As(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Rc(t,a){t=t.updateQueue,a.updateQueue===t&&(a.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Mt(t,a){return{eventTime:t,lane:a,tag:0,payload:null,callback:null,next:null}}function Qt(t,a,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,(se&2)!==0){var l=i.pending;return l===null?a.next=a:(a.next=l.next,l.next=a),i.pending=a,zt(t,n)}return l=i.interleaved,l===null?(a.next=a,ks(i)):(a.next=l.next,l.next=a),i.interleaved=a,zt(t,n)}function Dr(t,a,n){if(a=a.updateQueue,a!==null&&(a=a.shared,(n&4194240)!==0)){var i=a.lanes;i&=t.pendingLanes,n|=i,a.lanes=n,Hi(t,n)}}function Ic(t,a){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var l=null,d=null;if(n=n.firstBaseUpdate,n!==null){do{var f={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};d===null?l=d=f:d=d.next=f,n=n.next}while(n!==null);d===null?l=d=a:d=d.next=a}else l=d=a;n={baseState:i.baseState,firstBaseUpdate:l,lastBaseUpdate:d,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=a:t.next=a,n.lastBaseUpdate=a}function Wr(t,a,n,i){var l=t.updateQueue;qt=!1;var d=l.firstBaseUpdate,f=l.lastBaseUpdate,j=l.shared.pending;if(j!==null){l.shared.pending=null;var S=j,N=S.next;S.next=null,f===null?d=N:f.next=N,f=S;var O=t.alternate;O!==null&&(O=O.updateQueue,j=O.lastBaseUpdate,j!==f&&(j===null?O.firstBaseUpdate=N:j.next=N,O.lastBaseUpdate=S))}if(d!==null){var D=l.baseState;f=0,O=N=S=null,j=d;do{var B=j.lane,H=j.eventTime;if((i&B)===B){O!==null&&(O=O.next={eventTime:H,lane:0,tag:j.tag,payload:j.payload,callback:j.callback,next:null});e:{var G=t,Y=j;switch(B=a,H=n,Y.tag){case 1:if(G=Y.payload,typeof G=="function"){D=G.call(H,D,B);break e}D=G;break e;case 3:G.flags=G.flags&-65537|128;case 0:if(G=Y.payload,B=typeof G=="function"?G.call(H,D,B):G,B==null)break e;D=$({},D,B);break e;case 2:qt=!0}}j.callback!==null&&j.lane!==0&&(t.flags|=64,B=l.effects,B===null?l.effects=[j]:B.push(j))}else H={eventTime:H,lane:B,tag:j.tag,payload:j.payload,callback:j.callback,next:null},O===null?(N=O=H,S=D):O=O.next=H,f|=B;if(j=j.next,j===null){if(j=l.shared.pending,j===null)break;B=j,j=B.next,B.next=null,l.lastBaseUpdate=B,l.shared.pending=null}}while(!0);if(O===null&&(S=D),l.baseState=S,l.firstBaseUpdate=N,l.lastBaseUpdate=O,a=l.shared.interleaved,a!==null){l=a;do f|=l.lane,l=l.next;while(l!==a)}else d===null&&(l.shared.lanes=0);ba|=f,t.lanes=f,t.memoizedState=D}}function Pc(t,a,n){if(t=a.effects,a.effects=null,t!==null)for(a=0;a<t.length;a++){var i=t[a],l=i.callback;if(l!==null){if(i.callback=null,i=n,typeof l!="function")throw Error(o(191,l));l.call(i)}}}var Bn={},kt=Jt(Bn),zn=Jt(Bn),Mn=Jt(Bn);function ga(t){if(t===Bn)throw Error(o(174));return t}function Ns(t,a){switch(fe(Mn,a),fe(zn,t),fe(kt,Bn),t=a.nodeType,t){case 9:case 11:a=(a=a.documentElement)?a.namespaceURI:Ti(null,"");break;default:t=t===8?a.parentNode:a,a=t.namespaceURI||null,t=t.tagName,a=Ti(a,t)}ge(kt),fe(kt,a)}function Ja(){ge(kt),ge(zn),ge(Mn)}function Bc(t){ga(Mn.current);var a=ga(kt.current),n=Ti(a,t.type);a!==n&&(fe(zn,t),fe(kt,n))}function Ts(t){zn.current===t&&(ge(kt),ge(zn))}var ve=Jt(0);function Lr(t){for(var a=t;a!==null;){if(a.tag===13){var n=a.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return a}else if(a.tag===19&&a.memoizedProps.revealOrder!==void 0){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===t)break;for(;a.sibling===null;){if(a.return===null||a.return===t)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var Es=[];function Rs(){for(var t=0;t<Es.length;t++)Es[t]._workInProgressVersionPrimary=null;Es.length=0}var Hr=q.ReactCurrentDispatcher,Is=q.ReactCurrentBatchConfig,xa=0,je=null,Re=null,Be=null,Fr=!1,On=!1,Dn=0,_u=0;function He(){throw Error(o(321))}function Ps(t,a){if(a===null)return!1;for(var n=0;n<a.length&&n<t.length;n++)if(!ht(t[n],a[n]))return!1;return!0}function Bs(t,a,n,i,l,d){if(xa=d,je=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,Hr.current=t===null||t.memoizedState===null?Ju:Vu,t=n(i,l),On){d=0;do{if(On=!1,Dn=0,25<=d)throw Error(o(301));d+=1,Be=Re=null,a.updateQueue=null,Hr.current=Ku,t=n(i,l)}while(On)}if(Hr.current=$r,a=Re!==null&&Re.next!==null,xa=0,Be=Re=je=null,Fr=!1,a)throw Error(o(300));return t}function zs(){var t=Dn!==0;return Dn=0,t}function At(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Be===null?je.memoizedState=Be=t:Be=Be.next=t,Be}function ct(){if(Re===null){var t=je.alternate;t=t!==null?t.memoizedState:null}else t=Re.next;var a=Be===null?je.memoizedState:Be.next;if(a!==null)Be=a,Re=t;else{if(t===null)throw Error(o(310));Re=t,t={memoizedState:Re.memoizedState,baseState:Re.baseState,baseQueue:Re.baseQueue,queue:Re.queue,next:null},Be===null?je.memoizedState=Be=t:Be=Be.next=t}return Be}function Wn(t,a){return typeof a=="function"?a(t):a}function Ms(t){var a=ct(),n=a.queue;if(n===null)throw Error(o(311));n.lastRenderedReducer=t;var i=Re,l=i.baseQueue,d=n.pending;if(d!==null){if(l!==null){var f=l.next;l.next=d.next,d.next=f}i.baseQueue=l=d,n.pending=null}if(l!==null){d=l.next,i=i.baseState;var j=f=null,S=null,N=d;do{var O=N.lane;if((xa&O)===O)S!==null&&(S=S.next={lane:0,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null}),i=N.hasEagerState?N.eagerState:t(i,N.action);else{var D={lane:O,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null};S===null?(j=S=D,f=i):S=S.next=D,je.lanes|=O,ba|=O}N=N.next}while(N!==null&&N!==d);S===null?f=i:S.next=j,ht(i,a.memoizedState)||(Ve=!0),a.memoizedState=i,a.baseState=f,a.baseQueue=S,n.lastRenderedState=i}if(t=n.interleaved,t!==null){l=t;do d=l.lane,je.lanes|=d,ba|=d,l=l.next;while(l!==t)}else l===null&&(n.lanes=0);return[a.memoizedState,n.dispatch]}function Os(t){var a=ct(),n=a.queue;if(n===null)throw Error(o(311));n.lastRenderedReducer=t;var i=n.dispatch,l=n.pending,d=a.memoizedState;if(l!==null){n.pending=null;var f=l=l.next;do d=t(d,f.action),f=f.next;while(f!==l);ht(d,a.memoizedState)||(Ve=!0),a.memoizedState=d,a.baseQueue===null&&(a.baseState=d),n.lastRenderedState=d}return[d,i]}function zc(){}function Mc(t,a){var n=je,i=ct(),l=a(),d=!ht(i.memoizedState,l);if(d&&(i.memoizedState=l,Ve=!0),i=i.queue,Ds(Wc.bind(null,n,i,t),[t]),i.getSnapshot!==a||d||Be!==null&&Be.memoizedState.tag&1){if(n.flags|=2048,Ln(9,Dc.bind(null,n,i,l,a),void 0,null),ze===null)throw Error(o(349));(xa&30)!==0||Oc(n,a,l)}return l}function Oc(t,a,n){t.flags|=16384,t={getSnapshot:a,value:n},a=je.updateQueue,a===null?(a={lastEffect:null,stores:null},je.updateQueue=a,a.stores=[t]):(n=a.stores,n===null?a.stores=[t]:n.push(t))}function Dc(t,a,n,i){a.value=n,a.getSnapshot=i,Lc(a)&&Hc(t)}function Wc(t,a,n){return n(function(){Lc(a)&&Hc(t)})}function Lc(t){var a=t.getSnapshot;t=t.value;try{var n=a();return!ht(t,n)}catch{return!0}}function Hc(t){var a=zt(t,1);a!==null&&vt(a,t,1,-1)}function Fc(t){var a=At();return typeof t=="function"&&(t=t()),a.memoizedState=a.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Wn,lastRenderedState:t},a.queue=t,t=t.dispatch=Yu.bind(null,je,t),[a.memoizedState,t]}function Ln(t,a,n,i){return t={tag:t,create:a,destroy:n,deps:i,next:null},a=je.updateQueue,a===null?(a={lastEffect:null,stores:null},je.updateQueue=a,a.lastEffect=t.next=t):(n=a.lastEffect,n===null?a.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,a.lastEffect=t)),t}function Uc(){return ct().memoizedState}function Ur(t,a,n,i){var l=At();je.flags|=t,l.memoizedState=Ln(1|a,n,void 0,i===void 0?null:i)}function _r(t,a,n,i){var l=ct();i=i===void 0?null:i;var d=void 0;if(Re!==null){var f=Re.memoizedState;if(d=f.destroy,i!==null&&Ps(i,f.deps)){l.memoizedState=Ln(a,n,d,i);return}}je.flags|=t,l.memoizedState=Ln(1|a,n,d,i)}function _c(t,a){return Ur(8390656,8,t,a)}function Ds(t,a){return _r(2048,8,t,a)}function $c(t,a){return _r(4,2,t,a)}function Gc(t,a){return _r(4,4,t,a)}function Yc(t,a){if(typeof a=="function")return t=t(),a(t),function(){a(null)};if(a!=null)return t=t(),a.current=t,function(){a.current=null}}function Jc(t,a,n){return n=n!=null?n.concat([t]):null,_r(4,4,Yc.bind(null,a,t),n)}function Ws(){}function Vc(t,a){var n=ct();a=a===void 0?null:a;var i=n.memoizedState;return i!==null&&a!==null&&Ps(a,i[1])?i[0]:(n.memoizedState=[t,a],t)}function Kc(t,a){var n=ct();a=a===void 0?null:a;var i=n.memoizedState;return i!==null&&a!==null&&Ps(a,i[1])?i[0]:(t=t(),n.memoizedState=[t,a],t)}function qc(t,a,n){return(xa&21)===0?(t.baseState&&(t.baseState=!1,Ve=!0),t.memoizedState=n):(ht(n,a)||(n=Al(),je.lanes|=n,ba|=n,t.baseState=!0),a)}function $u(t,a){var n=pe;pe=n!==0&&4>n?n:4,t(!0);var i=Is.transition;Is.transition={};try{t(!1),a()}finally{pe=n,Is.transition=i}}function Qc(){return ct().memoizedState}function Gu(t,a,n){var i=ta(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Xc(t))Zc(a,n);else if(n=Ec(t,a,n,i),n!==null){var l=$e();vt(n,t,i,l),ed(n,a,i)}}function Yu(t,a,n){var i=ta(t),l={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Xc(t))Zc(a,l);else{var d=t.alternate;if(t.lanes===0&&(d===null||d.lanes===0)&&(d=a.lastRenderedReducer,d!==null))try{var f=a.lastRenderedState,j=d(f,n);if(l.hasEagerState=!0,l.eagerState=j,ht(j,f)){var S=a.interleaved;S===null?(l.next=l,ks(a)):(l.next=S.next,S.next=l),a.interleaved=l;return}}catch{}finally{}n=Ec(t,a,l,i),n!==null&&(l=$e(),vt(n,t,i,l),ed(n,a,i))}}function Xc(t){var a=t.alternate;return t===je||a!==null&&a===je}function Zc(t,a){On=Fr=!0;var n=t.pending;n===null?a.next=a:(a.next=n.next,n.next=a),t.pending=a}function ed(t,a,n){if((n&4194240)!==0){var i=a.lanes;i&=t.pendingLanes,n|=i,a.lanes=n,Hi(t,n)}}var $r={readContext:lt,useCallback:He,useContext:He,useEffect:He,useImperativeHandle:He,useInsertionEffect:He,useLayoutEffect:He,useMemo:He,useReducer:He,useRef:He,useState:He,useDebugValue:He,useDeferredValue:He,useTransition:He,useMutableSource:He,useSyncExternalStore:He,useId:He,unstable_isNewReconciler:!1},Ju={readContext:lt,useCallback:function(t,a){return At().memoizedState=[t,a===void 0?null:a],t},useContext:lt,useEffect:_c,useImperativeHandle:function(t,a,n){return n=n!=null?n.concat([t]):null,Ur(4194308,4,Yc.bind(null,a,t),n)},useLayoutEffect:function(t,a){return Ur(4194308,4,t,a)},useInsertionEffect:function(t,a){return Ur(4,2,t,a)},useMemo:function(t,a){var n=At();return a=a===void 0?null:a,t=t(),n.memoizedState=[t,a],t},useReducer:function(t,a,n){var i=At();return a=n!==void 0?n(a):a,i.memoizedState=i.baseState=a,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:a},i.queue=t,t=t.dispatch=Gu.bind(null,je,t),[i.memoizedState,t]},useRef:function(t){var a=At();return t={current:t},a.memoizedState=t},useState:Fc,useDebugValue:Ws,useDeferredValue:function(t){return At().memoizedState=t},useTransition:function(){var t=Fc(!1),a=t[0];return t=$u.bind(null,t[1]),At().memoizedState=t,[a,t]},useMutableSource:function(){},useSyncExternalStore:function(t,a,n){var i=je,l=At();if(be){if(n===void 0)throw Error(o(407));n=n()}else{if(n=a(),ze===null)throw Error(o(349));(xa&30)!==0||Oc(i,a,n)}l.memoizedState=n;var d={value:n,getSnapshot:a};return l.queue=d,_c(Wc.bind(null,i,d,t),[t]),i.flags|=2048,Ln(9,Dc.bind(null,i,d,n,a),void 0,null),n},useId:function(){var t=At(),a=ze.identifierPrefix;if(be){var n=Bt,i=Pt;n=(i&~(1<<32-ft(i)-1)).toString(32)+n,a=":"+a+"R"+n,n=Dn++,0<n&&(a+="H"+n.toString(32)),a+=":"}else n=_u++,a=":"+a+"r"+n.toString(32)+":";return t.memoizedState=a},unstable_isNewReconciler:!1},Vu={readContext:lt,useCallback:Vc,useContext:lt,useEffect:Ds,useImperativeHandle:Jc,useInsertionEffect:$c,useLayoutEffect:Gc,useMemo:Kc,useReducer:Ms,useRef:Uc,useState:function(){return Ms(Wn)},useDebugValue:Ws,useDeferredValue:function(t){var a=ct();return qc(a,Re.memoizedState,t)},useTransition:function(){var t=Ms(Wn)[0],a=ct().memoizedState;return[t,a]},useMutableSource:zc,useSyncExternalStore:Mc,useId:Qc,unstable_isNewReconciler:!1},Ku={readContext:lt,useCallback:Vc,useContext:lt,useEffect:Ds,useImperativeHandle:Jc,useInsertionEffect:$c,useLayoutEffect:Gc,useMemo:Kc,useReducer:Os,useRef:Uc,useState:function(){return Os(Wn)},useDebugValue:Ws,useDeferredValue:function(t){var a=ct();return Re===null?a.memoizedState=t:qc(a,Re.memoizedState,t)},useTransition:function(){var t=Os(Wn)[0],a=ct().memoizedState;return[t,a]},useMutableSource:zc,useSyncExternalStore:Mc,useId:Qc,unstable_isNewReconciler:!1};function xt(t,a){if(t&&t.defaultProps){a=$({},a),t=t.defaultProps;for(var n in t)a[n]===void 0&&(a[n]=t[n]);return a}return a}function Ls(t,a,n,i){a=t.memoizedState,n=n(i,a),n=n==null?a:$({},a,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Gr={isMounted:function(t){return(t=t._reactInternals)?da(t)===t:!1},enqueueSetState:function(t,a,n){t=t._reactInternals;var i=$e(),l=ta(t),d=Mt(i,l);d.payload=a,n!=null&&(d.callback=n),a=Qt(t,d,l),a!==null&&(vt(a,t,l,i),Dr(a,t,l))},enqueueReplaceState:function(t,a,n){t=t._reactInternals;var i=$e(),l=ta(t),d=Mt(i,l);d.tag=1,d.payload=a,n!=null&&(d.callback=n),a=Qt(t,d,l),a!==null&&(vt(a,t,l,i),Dr(a,t,l))},enqueueForceUpdate:function(t,a){t=t._reactInternals;var n=$e(),i=ta(t),l=Mt(n,i);l.tag=2,a!=null&&(l.callback=a),a=Qt(t,l,i),a!==null&&(vt(a,t,i,n),Dr(a,t,i))}};function td(t,a,n,i,l,d,f){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,d,f):a.prototype&&a.prototype.isPureReactComponent?!kn(n,i)||!kn(l,d):!0}function ad(t,a,n){var i=!1,l=Vt,d=a.contextType;return typeof d=="object"&&d!==null?d=lt(d):(l=Je(a)?ma:Le.current,i=a.contextTypes,d=(i=i!=null)?Ha(t,l):Vt),a=new a(n,d),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Gr,t.stateNode=a,a._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=l,t.__reactInternalMemoizedMaskedChildContext=d),a}function nd(t,a,n,i){t=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(n,i),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(n,i),a.state!==t&&Gr.enqueueReplaceState(a,a.state,null)}function Hs(t,a,n,i){var l=t.stateNode;l.props=n,l.state=t.memoizedState,l.refs={},As(t);var d=a.contextType;typeof d=="object"&&d!==null?l.context=lt(d):(d=Je(a)?ma:Le.current,l.context=Ha(t,d)),l.state=t.memoizedState,d=a.getDerivedStateFromProps,typeof d=="function"&&(Ls(t,a,d,n),l.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(a=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),a!==l.state&&Gr.enqueueReplaceState(l,l.state,null),Wr(t,n,l,i),l.state=t.memoizedState),typeof l.componentDidMount=="function"&&(t.flags|=4194308)}function Va(t,a){try{var n="",i=a;do n+=oe(i),i=i.return;while(i);var l=n}catch(d){l=`
Error generating stack: `+d.message+`
`+d.stack}return{value:t,source:a,stack:l,digest:null}}function Fs(t,a,n){return{value:t,source:null,stack:n??null,digest:a??null}}function Us(t,a){try{console.error(a.value)}catch(n){setTimeout(function(){throw n})}}var qu=typeof WeakMap=="function"?WeakMap:Map;function rd(t,a,n){n=Mt(-1,n),n.tag=3,n.payload={element:null};var i=a.value;return n.callback=function(){Xr||(Xr=!0,no=i),Us(t,a)},n}function id(t,a,n){n=Mt(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var l=a.value;n.payload=function(){return i(l)},n.callback=function(){Us(t,a)}}var d=t.stateNode;return d!==null&&typeof d.componentDidCatch=="function"&&(n.callback=function(){Us(t,a),typeof i!="function"&&(Zt===null?Zt=new Set([this]):Zt.add(this));var f=a.stack;this.componentDidCatch(a.value,{componentStack:f!==null?f:""})}),n}function sd(t,a,n){var i=t.pingCache;if(i===null){i=t.pingCache=new qu;var l=new Set;i.set(a,l)}else l=i.get(a),l===void 0&&(l=new Set,i.set(a,l));l.has(n)||(l.add(n),t=pf.bind(null,t,a,n),a.then(t,t))}function od(t){do{var a;if((a=t.tag===13)&&(a=t.memoizedState,a=a!==null?a.dehydrated!==null:!0),a)return t;t=t.return}while(t!==null);return null}function ld(t,a,n,i,l){return(t.mode&1)===0?(t===a?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(a=Mt(-1,1),a.tag=2,Qt(n,a,1))),n.lanes|=1),t):(t.flags|=65536,t.lanes=l,t)}var Qu=q.ReactCurrentOwner,Ve=!1;function _e(t,a,n,i){a.child=t===null?Tc(a,null,n,i):$a(a,t.child,n,i)}function cd(t,a,n,i,l){n=n.render;var d=a.ref;return Ya(a,l),i=Bs(t,a,n,i,d,l),n=zs(),t!==null&&!Ve?(a.updateQueue=t.updateQueue,a.flags&=-2053,t.lanes&=~l,Ot(t,a,l)):(be&&n&&gs(a),a.flags|=1,_e(t,a,i,l),a.child)}function dd(t,a,n,i,l){if(t===null){var d=n.type;return typeof d=="function"&&!po(d)&&d.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(a.tag=15,a.type=d,pd(t,a,d,i,l)):(t=ri(n.type,null,i,a,a.mode,l),t.ref=a.ref,t.return=a,a.child=t)}if(d=t.child,(t.lanes&l)===0){var f=d.memoizedProps;if(n=n.compare,n=n!==null?n:kn,n(f,i)&&t.ref===a.ref)return Ot(t,a,l)}return a.flags|=1,t=na(d,i),t.ref=a.ref,t.return=a,a.child=t}function pd(t,a,n,i,l){if(t!==null){var d=t.memoizedProps;if(kn(d,i)&&t.ref===a.ref)if(Ve=!1,a.pendingProps=i=d,(t.lanes&l)!==0)(t.flags&131072)!==0&&(Ve=!0);else return a.lanes=t.lanes,Ot(t,a,l)}return _s(t,a,n,i,l)}function md(t,a,n){var i=a.pendingProps,l=i.children,d=t!==null?t.memoizedState:null;if(i.mode==="hidden")if((a.mode&1)===0)a.memoizedState={baseLanes:0,cachePool:null,transitions:null},fe(qa,rt),rt|=n;else{if((n&1073741824)===0)return t=d!==null?d.baseLanes|n:n,a.lanes=a.childLanes=1073741824,a.memoizedState={baseLanes:t,cachePool:null,transitions:null},a.updateQueue=null,fe(qa,rt),rt|=t,null;a.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=d!==null?d.baseLanes:n,fe(qa,rt),rt|=i}else d!==null?(i=d.baseLanes|n,a.memoizedState=null):i=n,fe(qa,rt),rt|=i;return _e(t,a,l,n),a.child}function ud(t,a){var n=a.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(a.flags|=512,a.flags|=2097152)}function _s(t,a,n,i,l){var d=Je(n)?ma:Le.current;return d=Ha(a,d),Ya(a,l),n=Bs(t,a,n,i,d,l),i=zs(),t!==null&&!Ve?(a.updateQueue=t.updateQueue,a.flags&=-2053,t.lanes&=~l,Ot(t,a,l)):(be&&i&&gs(a),a.flags|=1,_e(t,a,n,l),a.child)}function fd(t,a,n,i,l){if(Je(n)){var d=!0;Er(a)}else d=!1;if(Ya(a,l),a.stateNode===null)Jr(t,a),ad(a,n,i),Hs(a,n,i,l),i=!0;else if(t===null){var f=a.stateNode,j=a.memoizedProps;f.props=j;var S=f.context,N=n.contextType;typeof N=="object"&&N!==null?N=lt(N):(N=Je(n)?ma:Le.current,N=Ha(a,N));var O=n.getDerivedStateFromProps,D=typeof O=="function"||typeof f.getSnapshotBeforeUpdate=="function";D||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(j!==i||S!==N)&&nd(a,f,i,N),qt=!1;var B=a.memoizedState;f.state=B,Wr(a,i,f,l),S=a.memoizedState,j!==i||B!==S||Ye.current||qt?(typeof O=="function"&&(Ls(a,n,O,i),S=a.memoizedState),(j=qt||td(a,n,j,i,B,S,N))?(D||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(a.flags|=4194308)):(typeof f.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=i,a.memoizedState=S),f.props=i,f.state=S,f.context=N,i=j):(typeof f.componentDidMount=="function"&&(a.flags|=4194308),i=!1)}else{f=a.stateNode,Rc(t,a),j=a.memoizedProps,N=a.type===a.elementType?j:xt(a.type,j),f.props=N,D=a.pendingProps,B=f.context,S=n.contextType,typeof S=="object"&&S!==null?S=lt(S):(S=Je(n)?ma:Le.current,S=Ha(a,S));var H=n.getDerivedStateFromProps;(O=typeof H=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(j!==D||B!==S)&&nd(a,f,i,S),qt=!1,B=a.memoizedState,f.state=B,Wr(a,i,f,l);var G=a.memoizedState;j!==D||B!==G||Ye.current||qt?(typeof H=="function"&&(Ls(a,n,H,i),G=a.memoizedState),(N=qt||td(a,n,N,i,B,G,S)||!1)?(O||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(i,G,S),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(i,G,S)),typeof f.componentDidUpdate=="function"&&(a.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof f.componentDidUpdate!="function"||j===t.memoizedProps&&B===t.memoizedState||(a.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||j===t.memoizedProps&&B===t.memoizedState||(a.flags|=1024),a.memoizedProps=i,a.memoizedState=G),f.props=i,f.state=G,f.context=S,i=N):(typeof f.componentDidUpdate!="function"||j===t.memoizedProps&&B===t.memoizedState||(a.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||j===t.memoizedProps&&B===t.memoizedState||(a.flags|=1024),i=!1)}return $s(t,a,n,i,d,l)}function $s(t,a,n,i,l,d){ud(t,a);var f=(a.flags&128)!==0;if(!i&&!f)return l&&yc(a,n,!1),Ot(t,a,d);i=a.stateNode,Qu.current=a;var j=f&&typeof n.getDerivedStateFromError!="function"?null:i.render();return a.flags|=1,t!==null&&f?(a.child=$a(a,t.child,null,d),a.child=$a(a,null,j,d)):_e(t,a,j,d),a.memoizedState=i.state,l&&yc(a,n,!0),a.child}function hd(t){var a=t.stateNode;a.pendingContext?xc(t,a.pendingContext,a.pendingContext!==a.context):a.context&&xc(t,a.context,!1),Ns(t,a.containerInfo)}function gd(t,a,n,i,l){return _a(),vs(l),a.flags|=256,_e(t,a,n,i),a.child}var Gs={dehydrated:null,treeContext:null,retryLane:0};function Ys(t){return{baseLanes:t,cachePool:null,transitions:null}}function xd(t,a,n){var i=a.pendingProps,l=ve.current,d=!1,f=(a.flags&128)!==0,j;if((j=f)||(j=t!==null&&t.memoizedState===null?!1:(l&2)!==0),j?(d=!0,a.flags&=-129):(t===null||t.memoizedState!==null)&&(l|=1),fe(ve,l&1),t===null)return ys(a),t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((a.mode&1)===0?a.lanes=1:t.data==="$!"?a.lanes=8:a.lanes=1073741824,null):(f=i.children,t=i.fallback,d?(i=a.mode,d=a.child,f={mode:"hidden",children:f},(i&1)===0&&d!==null?(d.childLanes=0,d.pendingProps=f):d=ii(f,i,0,null),t=Sa(t,i,n,null),d.return=a,t.return=a,d.sibling=t,a.child=d,a.child.memoizedState=Ys(n),a.memoizedState=Gs,t):Js(a,f));if(l=t.memoizedState,l!==null&&(j=l.dehydrated,j!==null))return Xu(t,a,f,i,j,l,n);if(d){d=i.fallback,f=a.mode,l=t.child,j=l.sibling;var S={mode:"hidden",children:i.children};return(f&1)===0&&a.child!==l?(i=a.child,i.childLanes=0,i.pendingProps=S,a.deletions=null):(i=na(l,S),i.subtreeFlags=l.subtreeFlags&14680064),j!==null?d=na(j,d):(d=Sa(d,f,n,null),d.flags|=2),d.return=a,i.return=a,i.sibling=d,a.child=i,i=d,d=a.child,f=t.child.memoizedState,f=f===null?Ys(n):{baseLanes:f.baseLanes|n,cachePool:null,transitions:f.transitions},d.memoizedState=f,d.childLanes=t.childLanes&~n,a.memoizedState=Gs,i}return d=t.child,t=d.sibling,i=na(d,{mode:"visible",children:i.children}),(a.mode&1)===0&&(i.lanes=n),i.return=a,i.sibling=null,t!==null&&(n=a.deletions,n===null?(a.deletions=[t],a.flags|=16):n.push(t)),a.child=i,a.memoizedState=null,i}function Js(t,a){return a=ii({mode:"visible",children:a},t.mode,0,null),a.return=t,t.child=a}function Yr(t,a,n,i){return i!==null&&vs(i),$a(a,t.child,null,n),t=Js(a,a.pendingProps.children),t.flags|=2,a.memoizedState=null,t}function Xu(t,a,n,i,l,d,f){if(n)return a.flags&256?(a.flags&=-257,i=Fs(Error(o(422))),Yr(t,a,f,i)):a.memoizedState!==null?(a.child=t.child,a.flags|=128,null):(d=i.fallback,l=a.mode,i=ii({mode:"visible",children:i.children},l,0,null),d=Sa(d,l,f,null),d.flags|=2,i.return=a,d.return=a,i.sibling=d,a.child=i,(a.mode&1)!==0&&$a(a,t.child,null,f),a.child.memoizedState=Ys(f),a.memoizedState=Gs,d);if((a.mode&1)===0)return Yr(t,a,f,null);if(l.data==="$!"){if(i=l.nextSibling&&l.nextSibling.dataset,i)var j=i.dgst;return i=j,d=Error(o(419)),i=Fs(d,i,void 0),Yr(t,a,f,i)}if(j=(f&t.childLanes)!==0,Ve||j){if(i=ze,i!==null){switch(f&-f){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=(l&(i.suspendedLanes|f))!==0?0:l,l!==0&&l!==d.retryLane&&(d.retryLane=l,zt(t,l),vt(i,t,l,-1))}return co(),i=Fs(Error(o(421))),Yr(t,a,f,i)}return l.data==="$?"?(a.flags|=128,a.child=t.child,a=mf.bind(null,t),l._reactRetry=a,null):(t=d.treeContext,nt=Yt(l.nextSibling),at=a,be=!0,gt=null,t!==null&&(st[ot++]=Pt,st[ot++]=Bt,st[ot++]=ua,Pt=t.id,Bt=t.overflow,ua=a),a=Js(a,i.children),a.flags|=4096,a)}function bd(t,a,n){t.lanes|=a;var i=t.alternate;i!==null&&(i.lanes|=a),Cs(t.return,a,n)}function Vs(t,a,n,i,l){var d=t.memoizedState;d===null?t.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:l}:(d.isBackwards=a,d.rendering=null,d.renderingStartTime=0,d.last=i,d.tail=n,d.tailMode=l)}function yd(t,a,n){var i=a.pendingProps,l=i.revealOrder,d=i.tail;if(_e(t,a,i.children,n),i=ve.current,(i&2)!==0)i=i&1|2,a.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=a.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&bd(t,n,a);else if(t.tag===19)bd(t,n,a);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===a)break e;for(;t.sibling===null;){if(t.return===null||t.return===a)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(fe(ve,i),(a.mode&1)===0)a.memoizedState=null;else switch(l){case"forwards":for(n=a.child,l=null;n!==null;)t=n.alternate,t!==null&&Lr(t)===null&&(l=n),n=n.sibling;n=l,n===null?(l=a.child,a.child=null):(l=n.sibling,n.sibling=null),Vs(a,!1,l,n,d);break;case"backwards":for(n=null,l=a.child,a.child=null;l!==null;){if(t=l.alternate,t!==null&&Lr(t)===null){a.child=l;break}t=l.sibling,l.sibling=n,n=l,l=t}Vs(a,!0,n,null,d);break;case"together":Vs(a,!1,null,null,void 0);break;default:a.memoizedState=null}return a.child}function Jr(t,a){(a.mode&1)===0&&t!==null&&(t.alternate=null,a.alternate=null,a.flags|=2)}function Ot(t,a,n){if(t!==null&&(a.dependencies=t.dependencies),ba|=a.lanes,(n&a.childLanes)===0)return null;if(t!==null&&a.child!==t.child)throw Error(o(153));if(a.child!==null){for(t=a.child,n=na(t,t.pendingProps),a.child=n,n.return=a;t.sibling!==null;)t=t.sibling,n=n.sibling=na(t,t.pendingProps),n.return=a;n.sibling=null}return a.child}function Zu(t,a,n){switch(a.tag){case 3:hd(a),_a();break;case 5:Bc(a);break;case 1:Je(a.type)&&Er(a);break;case 4:Ns(a,a.stateNode.containerInfo);break;case 10:var i=a.type._context,l=a.memoizedProps.value;fe(Mr,i._currentValue),i._currentValue=l;break;case 13:if(i=a.memoizedState,i!==null)return i.dehydrated!==null?(fe(ve,ve.current&1),a.flags|=128,null):(n&a.child.childLanes)!==0?xd(t,a,n):(fe(ve,ve.current&1),t=Ot(t,a,n),t!==null?t.sibling:null);fe(ve,ve.current&1);break;case 19:if(i=(n&a.childLanes)!==0,(t.flags&128)!==0){if(i)return yd(t,a,n);a.flags|=128}if(l=a.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),fe(ve,ve.current),i)break;return null;case 22:case 23:return a.lanes=0,md(t,a,n)}return Ot(t,a,n)}var vd,Ks,jd,Sd;vd=function(t,a){for(var n=a.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===a)break;for(;n.sibling===null;){if(n.return===null||n.return===a)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},Ks=function(){},jd=function(t,a,n,i){var l=t.memoizedProps;if(l!==i){t=a.stateNode,ga(kt.current);var d=null;switch(n){case"input":l=Ci(t,l),i=Ci(t,i),d=[];break;case"select":l=$({},l,{value:void 0}),i=$({},i,{value:void 0}),d=[];break;case"textarea":l=Ni(t,l),i=Ni(t,i),d=[];break;default:typeof l.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Ar)}Ei(n,i);var f;n=null;for(N in l)if(!i.hasOwnProperty(N)&&l.hasOwnProperty(N)&&l[N]!=null)if(N==="style"){var j=l[N];for(f in j)j.hasOwnProperty(f)&&(n||(n={}),n[f]="")}else N!=="dangerouslySetInnerHTML"&&N!=="children"&&N!=="suppressContentEditableWarning"&&N!=="suppressHydrationWarning"&&N!=="autoFocus"&&(m.hasOwnProperty(N)?d||(d=[]):(d=d||[]).push(N,null));for(N in i){var S=i[N];if(j=l!=null?l[N]:void 0,i.hasOwnProperty(N)&&S!==j&&(S!=null||j!=null))if(N==="style")if(j){for(f in j)!j.hasOwnProperty(f)||S&&S.hasOwnProperty(f)||(n||(n={}),n[f]="");for(f in S)S.hasOwnProperty(f)&&j[f]!==S[f]&&(n||(n={}),n[f]=S[f])}else n||(d||(d=[]),d.push(N,n)),n=S;else N==="dangerouslySetInnerHTML"?(S=S?S.__html:void 0,j=j?j.__html:void 0,S!=null&&j!==S&&(d=d||[]).push(N,S)):N==="children"?typeof S!="string"&&typeof S!="number"||(d=d||[]).push(N,""+S):N!=="suppressContentEditableWarning"&&N!=="suppressHydrationWarning"&&(m.hasOwnProperty(N)?(S!=null&&N==="onScroll"&&he("scroll",t),d||j===S||(d=[])):(d=d||[]).push(N,S))}n&&(d=d||[]).push("style",n);var N=d;(a.updateQueue=N)&&(a.flags|=4)}},Sd=function(t,a,n,i){n!==i&&(a.flags|=4)};function Hn(t,a){if(!be)switch(t.tailMode){case"hidden":a=t.tail;for(var n=null;a!==null;)a.alternate!==null&&(n=a),a=a.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?a||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Fe(t){var a=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(a)for(var l=t.child;l!==null;)n|=l.lanes|l.childLanes,i|=l.subtreeFlags&14680064,i|=l.flags&14680064,l.return=t,l=l.sibling;else for(l=t.child;l!==null;)n|=l.lanes|l.childLanes,i|=l.subtreeFlags,i|=l.flags,l.return=t,l=l.sibling;return t.subtreeFlags|=i,t.childLanes=n,a}function ef(t,a,n){var i=a.pendingProps;switch(xs(a),a.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Fe(a),null;case 1:return Je(a.type)&&Tr(),Fe(a),null;case 3:return i=a.stateNode,Ja(),ge(Ye),ge(Le),Rs(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Br(a)?a.flags|=4:t===null||t.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,gt!==null&&(so(gt),gt=null))),Ks(t,a),Fe(a),null;case 5:Ts(a);var l=ga(Mn.current);if(n=a.type,t!==null&&a.stateNode!=null)jd(t,a,n,i,l),t.ref!==a.ref&&(a.flags|=512,a.flags|=2097152);else{if(!i){if(a.stateNode===null)throw Error(o(166));return Fe(a),null}if(t=ga(kt.current),Br(a)){i=a.stateNode,n=a.type;var d=a.memoizedProps;switch(i[Ct]=a,i[Rn]=d,t=(a.mode&1)!==0,n){case"dialog":he("cancel",i),he("close",i);break;case"iframe":case"object":case"embed":he("load",i);break;case"video":case"audio":for(l=0;l<Nn.length;l++)he(Nn[l],i);break;case"source":he("error",i);break;case"img":case"image":case"link":he("error",i),he("load",i);break;case"details":he("toggle",i);break;case"input":al(i,d),he("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!d.multiple},he("invalid",i);break;case"textarea":il(i,d),he("invalid",i)}Ei(n,d),l=null;for(var f in d)if(d.hasOwnProperty(f)){var j=d[f];f==="children"?typeof j=="string"?i.textContent!==j&&(d.suppressHydrationWarning!==!0&&kr(i.textContent,j,t),l=["children",j]):typeof j=="number"&&i.textContent!==""+j&&(d.suppressHydrationWarning!==!0&&kr(i.textContent,j,t),l=["children",""+j]):m.hasOwnProperty(f)&&j!=null&&f==="onScroll"&&he("scroll",i)}switch(n){case"input":ar(i),rl(i,d,!0);break;case"textarea":ar(i),ol(i);break;case"select":case"option":break;default:typeof d.onClick=="function"&&(i.onclick=Ar)}i=l,a.updateQueue=i,i!==null&&(a.flags|=4)}else{f=l.nodeType===9?l:l.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=ll(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=f.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=f.createElement(n,{is:i.is}):(t=f.createElement(n),n==="select"&&(f=t,i.multiple?f.multiple=!0:i.size&&(f.size=i.size))):t=f.createElementNS(t,n),t[Ct]=a,t[Rn]=i,vd(t,a,!1,!1),a.stateNode=t;e:{switch(f=Ri(n,i),n){case"dialog":he("cancel",t),he("close",t),l=i;break;case"iframe":case"object":case"embed":he("load",t),l=i;break;case"video":case"audio":for(l=0;l<Nn.length;l++)he(Nn[l],t);l=i;break;case"source":he("error",t),l=i;break;case"img":case"image":case"link":he("error",t),he("load",t),l=i;break;case"details":he("toggle",t),l=i;break;case"input":al(t,i),l=Ci(t,i),he("invalid",t);break;case"option":l=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},l=$({},i,{value:void 0}),he("invalid",t);break;case"textarea":il(t,i),l=Ni(t,i),he("invalid",t);break;default:l=i}Ei(n,l),j=l;for(d in j)if(j.hasOwnProperty(d)){var S=j[d];d==="style"?pl(t,S):d==="dangerouslySetInnerHTML"?(S=S?S.__html:void 0,S!=null&&cl(t,S)):d==="children"?typeof S=="string"?(n!=="textarea"||S!=="")&&ln(t,S):typeof S=="number"&&ln(t,""+S):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(m.hasOwnProperty(d)?S!=null&&d==="onScroll"&&he("scroll",t):S!=null&&U(t,d,S,f))}switch(n){case"input":ar(t),rl(t,i,!1);break;case"textarea":ar(t),ol(t);break;case"option":i.value!=null&&t.setAttribute("value",""+de(i.value));break;case"select":t.multiple=!!i.multiple,d=i.value,d!=null?Ta(t,!!i.multiple,d,!1):i.defaultValue!=null&&Ta(t,!!i.multiple,i.defaultValue,!0);break;default:typeof l.onClick=="function"&&(t.onclick=Ar)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(a.flags|=4)}a.ref!==null&&(a.flags|=512,a.flags|=2097152)}return Fe(a),null;case 6:if(t&&a.stateNode!=null)Sd(t,a,t.memoizedProps,i);else{if(typeof i!="string"&&a.stateNode===null)throw Error(o(166));if(n=ga(Mn.current),ga(kt.current),Br(a)){if(i=a.stateNode,n=a.memoizedProps,i[Ct]=a,(d=i.nodeValue!==n)&&(t=at,t!==null))switch(t.tag){case 3:kr(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&kr(i.nodeValue,n,(t.mode&1)!==0)}d&&(a.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Ct]=a,a.stateNode=i}return Fe(a),null;case 13:if(ge(ve),i=a.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(be&&nt!==null&&(a.mode&1)!==0&&(a.flags&128)===0)kc(),_a(),a.flags|=98560,d=!1;else if(d=Br(a),i!==null&&i.dehydrated!==null){if(t===null){if(!d)throw Error(o(318));if(d=a.memoizedState,d=d!==null?d.dehydrated:null,!d)throw Error(o(317));d[Ct]=a}else _a(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;Fe(a),d=!1}else gt!==null&&(so(gt),gt=null),d=!0;if(!d)return a.flags&65536?a:null}return(a.flags&128)!==0?(a.lanes=n,a):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(a.child.flags|=8192,(a.mode&1)!==0&&(t===null||(ve.current&1)!==0?Ie===0&&(Ie=3):co())),a.updateQueue!==null&&(a.flags|=4),Fe(a),null);case 4:return Ja(),Ks(t,a),t===null&&Tn(a.stateNode.containerInfo),Fe(a),null;case 10:return ws(a.type._context),Fe(a),null;case 17:return Je(a.type)&&Tr(),Fe(a),null;case 19:if(ge(ve),d=a.memoizedState,d===null)return Fe(a),null;if(i=(a.flags&128)!==0,f=d.rendering,f===null)if(i)Hn(d,!1);else{if(Ie!==0||t!==null&&(t.flags&128)!==0)for(t=a.child;t!==null;){if(f=Lr(t),f!==null){for(a.flags|=128,Hn(d,!1),i=f.updateQueue,i!==null&&(a.updateQueue=i,a.flags|=4),a.subtreeFlags=0,i=n,n=a.child;n!==null;)d=n,t=i,d.flags&=14680066,f=d.alternate,f===null?(d.childLanes=0,d.lanes=t,d.child=null,d.subtreeFlags=0,d.memoizedProps=null,d.memoizedState=null,d.updateQueue=null,d.dependencies=null,d.stateNode=null):(d.childLanes=f.childLanes,d.lanes=f.lanes,d.child=f.child,d.subtreeFlags=0,d.deletions=null,d.memoizedProps=f.memoizedProps,d.memoizedState=f.memoizedState,d.updateQueue=f.updateQueue,d.type=f.type,t=f.dependencies,d.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return fe(ve,ve.current&1|2),a.child}t=t.sibling}d.tail!==null&&Ae()>Qa&&(a.flags|=128,i=!0,Hn(d,!1),a.lanes=4194304)}else{if(!i)if(t=Lr(f),t!==null){if(a.flags|=128,i=!0,n=t.updateQueue,n!==null&&(a.updateQueue=n,a.flags|=4),Hn(d,!0),d.tail===null&&d.tailMode==="hidden"&&!f.alternate&&!be)return Fe(a),null}else 2*Ae()-d.renderingStartTime>Qa&&n!==1073741824&&(a.flags|=128,i=!0,Hn(d,!1),a.lanes=4194304);d.isBackwards?(f.sibling=a.child,a.child=f):(n=d.last,n!==null?n.sibling=f:a.child=f,d.last=f)}return d.tail!==null?(a=d.tail,d.rendering=a,d.tail=a.sibling,d.renderingStartTime=Ae(),a.sibling=null,n=ve.current,fe(ve,i?n&1|2:n&1),a):(Fe(a),null);case 22:case 23:return lo(),i=a.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(a.flags|=8192),i&&(a.mode&1)!==0?(rt&1073741824)!==0&&(Fe(a),a.subtreeFlags&6&&(a.flags|=8192)):Fe(a),null;case 24:return null;case 25:return null}throw Error(o(156,a.tag))}function tf(t,a){switch(xs(a),a.tag){case 1:return Je(a.type)&&Tr(),t=a.flags,t&65536?(a.flags=t&-65537|128,a):null;case 3:return Ja(),ge(Ye),ge(Le),Rs(),t=a.flags,(t&65536)!==0&&(t&128)===0?(a.flags=t&-65537|128,a):null;case 5:return Ts(a),null;case 13:if(ge(ve),t=a.memoizedState,t!==null&&t.dehydrated!==null){if(a.alternate===null)throw Error(o(340));_a()}return t=a.flags,t&65536?(a.flags=t&-65537|128,a):null;case 19:return ge(ve),null;case 4:return Ja(),null;case 10:return ws(a.type._context),null;case 22:case 23:return lo(),null;case 24:return null;default:return null}}var Vr=!1,Ue=!1,af=typeof WeakSet=="function"?WeakSet:Set,_=null;function Ka(t,a){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Ce(t,a,i)}else n.current=null}function qs(t,a,n){try{n()}catch(i){Ce(t,a,i)}}var wd=!1;function nf(t,a){if(ls=fr,t=tc(),es(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var l=i.anchorOffset,d=i.focusNode;i=i.focusOffset;try{n.nodeType,d.nodeType}catch{n=null;break e}var f=0,j=-1,S=-1,N=0,O=0,D=t,B=null;t:for(;;){for(var H;D!==n||l!==0&&D.nodeType!==3||(j=f+l),D!==d||i!==0&&D.nodeType!==3||(S=f+i),D.nodeType===3&&(f+=D.nodeValue.length),(H=D.firstChild)!==null;)B=D,D=H;for(;;){if(D===t)break t;if(B===n&&++N===l&&(j=f),B===d&&++O===i&&(S=f),(H=D.nextSibling)!==null)break;D=B,B=D.parentNode}D=H}n=j===-1||S===-1?null:{start:j,end:S}}else n=null}n=n||{start:0,end:0}}else n=null;for(cs={focusedElem:t,selectionRange:n},fr=!1,_=a;_!==null;)if(a=_,t=a.child,(a.subtreeFlags&1028)!==0&&t!==null)t.return=a,_=t;else for(;_!==null;){a=_;try{var G=a.alternate;if((a.flags&1024)!==0)switch(a.tag){case 0:case 11:case 15:break;case 1:if(G!==null){var Y=G.memoizedProps,Ne=G.memoizedState,k=a.stateNode,w=k.getSnapshotBeforeUpdate(a.elementType===a.type?Y:xt(a.type,Y),Ne);k.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var A=a.stateNode.containerInfo;A.nodeType===1?A.textContent="":A.nodeType===9&&A.documentElement&&A.removeChild(A.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(o(163))}}catch(W){Ce(a,a.return,W)}if(t=a.sibling,t!==null){t.return=a.return,_=t;break}_=a.return}return G=wd,wd=!1,G}function Fn(t,a,n){var i=a.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var l=i=i.next;do{if((l.tag&t)===t){var d=l.destroy;l.destroy=void 0,d!==void 0&&qs(a,n,d)}l=l.next}while(l!==i)}}function Kr(t,a){if(a=a.updateQueue,a=a!==null?a.lastEffect:null,a!==null){var n=a=a.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==a)}}function Qs(t){var a=t.ref;if(a!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof a=="function"?a(t):a.current=t}}function Cd(t){var a=t.alternate;a!==null&&(t.alternate=null,Cd(a)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(a=t.stateNode,a!==null&&(delete a[Ct],delete a[Rn],delete a[us],delete a[Lu],delete a[Hu])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function kd(t){return t.tag===5||t.tag===3||t.tag===4}function Ad(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||kd(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Xs(t,a,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,a?n.nodeType===8?n.parentNode.insertBefore(t,a):n.insertBefore(t,a):(n.nodeType===8?(a=n.parentNode,a.insertBefore(t,n)):(a=n,a.appendChild(t)),n=n._reactRootContainer,n!=null||a.onclick!==null||(a.onclick=Ar));else if(i!==4&&(t=t.child,t!==null))for(Xs(t,a,n),t=t.sibling;t!==null;)Xs(t,a,n),t=t.sibling}function Zs(t,a,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,a?n.insertBefore(t,a):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Zs(t,a,n),t=t.sibling;t!==null;)Zs(t,a,n),t=t.sibling}var De=null,bt=!1;function Xt(t,a,n){for(n=n.child;n!==null;)Nd(t,a,n),n=n.sibling}function Nd(t,a,n){if(wt&&typeof wt.onCommitFiberUnmount=="function")try{wt.onCommitFiberUnmount(lr,n)}catch{}switch(n.tag){case 5:Ue||Ka(n,a);case 6:var i=De,l=bt;De=null,Xt(t,a,n),De=i,bt=l,De!==null&&(bt?(t=De,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):De.removeChild(n.stateNode));break;case 18:De!==null&&(bt?(t=De,n=n.stateNode,t.nodeType===8?ms(t.parentNode,n):t.nodeType===1&&ms(t,n),yn(t)):ms(De,n.stateNode));break;case 4:i=De,l=bt,De=n.stateNode.containerInfo,bt=!0,Xt(t,a,n),De=i,bt=l;break;case 0:case 11:case 14:case 15:if(!Ue&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){l=i=i.next;do{var d=l,f=d.destroy;d=d.tag,f!==void 0&&((d&2)!==0||(d&4)!==0)&&qs(n,a,f),l=l.next}while(l!==i)}Xt(t,a,n);break;case 1:if(!Ue&&(Ka(n,a),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(j){Ce(n,a,j)}Xt(t,a,n);break;case 21:Xt(t,a,n);break;case 22:n.mode&1?(Ue=(i=Ue)||n.memoizedState!==null,Xt(t,a,n),Ue=i):Xt(t,a,n);break;default:Xt(t,a,n)}}function Td(t){var a=t.updateQueue;if(a!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new af),a.forEach(function(i){var l=uf.bind(null,t,i);n.has(i)||(n.add(i),i.then(l,l))})}}function yt(t,a){var n=a.deletions;if(n!==null)for(var i=0;i<n.length;i++){var l=n[i];try{var d=t,f=a,j=f;e:for(;j!==null;){switch(j.tag){case 5:De=j.stateNode,bt=!1;break e;case 3:De=j.stateNode.containerInfo,bt=!0;break e;case 4:De=j.stateNode.containerInfo,bt=!0;break e}j=j.return}if(De===null)throw Error(o(160));Nd(d,f,l),De=null,bt=!1;var S=l.alternate;S!==null&&(S.return=null),l.return=null}catch(N){Ce(l,a,N)}}if(a.subtreeFlags&12854)for(a=a.child;a!==null;)Ed(a,t),a=a.sibling}function Ed(t,a){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(yt(a,t),Nt(t),i&4){try{Fn(3,t,t.return),Kr(3,t)}catch(Y){Ce(t,t.return,Y)}try{Fn(5,t,t.return)}catch(Y){Ce(t,t.return,Y)}}break;case 1:yt(a,t),Nt(t),i&512&&n!==null&&Ka(n,n.return);break;case 5:if(yt(a,t),Nt(t),i&512&&n!==null&&Ka(n,n.return),t.flags&32){var l=t.stateNode;try{ln(l,"")}catch(Y){Ce(t,t.return,Y)}}if(i&4&&(l=t.stateNode,l!=null)){var d=t.memoizedProps,f=n!==null?n.memoizedProps:d,j=t.type,S=t.updateQueue;if(t.updateQueue=null,S!==null)try{j==="input"&&d.type==="radio"&&d.name!=null&&nl(l,d),Ri(j,f);var N=Ri(j,d);for(f=0;f<S.length;f+=2){var O=S[f],D=S[f+1];O==="style"?pl(l,D):O==="dangerouslySetInnerHTML"?cl(l,D):O==="children"?ln(l,D):U(l,O,D,N)}switch(j){case"input":ki(l,d);break;case"textarea":sl(l,d);break;case"select":var B=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!d.multiple;var H=d.value;H!=null?Ta(l,!!d.multiple,H,!1):B!==!!d.multiple&&(d.defaultValue!=null?Ta(l,!!d.multiple,d.defaultValue,!0):Ta(l,!!d.multiple,d.multiple?[]:"",!1))}l[Rn]=d}catch(Y){Ce(t,t.return,Y)}}break;case 6:if(yt(a,t),Nt(t),i&4){if(t.stateNode===null)throw Error(o(162));l=t.stateNode,d=t.memoizedProps;try{l.nodeValue=d}catch(Y){Ce(t,t.return,Y)}}break;case 3:if(yt(a,t),Nt(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{yn(a.containerInfo)}catch(Y){Ce(t,t.return,Y)}break;case 4:yt(a,t),Nt(t);break;case 13:yt(a,t),Nt(t),l=t.child,l.flags&8192&&(d=l.memoizedState!==null,l.stateNode.isHidden=d,!d||l.alternate!==null&&l.alternate.memoizedState!==null||(ao=Ae())),i&4&&Td(t);break;case 22:if(O=n!==null&&n.memoizedState!==null,t.mode&1?(Ue=(N=Ue)||O,yt(a,t),Ue=N):yt(a,t),Nt(t),i&8192){if(N=t.memoizedState!==null,(t.stateNode.isHidden=N)&&!O&&(t.mode&1)!==0)for(_=t,O=t.child;O!==null;){for(D=_=O;_!==null;){switch(B=_,H=B.child,B.tag){case 0:case 11:case 14:case 15:Fn(4,B,B.return);break;case 1:Ka(B,B.return);var G=B.stateNode;if(typeof G.componentWillUnmount=="function"){i=B,n=B.return;try{a=i,G.props=a.memoizedProps,G.state=a.memoizedState,G.componentWillUnmount()}catch(Y){Ce(i,n,Y)}}break;case 5:Ka(B,B.return);break;case 22:if(B.memoizedState!==null){Pd(D);continue}}H!==null?(H.return=B,_=H):Pd(D)}O=O.sibling}e:for(O=null,D=t;;){if(D.tag===5){if(O===null){O=D;try{l=D.stateNode,N?(d=l.style,typeof d.setProperty=="function"?d.setProperty("display","none","important"):d.display="none"):(j=D.stateNode,S=D.memoizedProps.style,f=S!=null&&S.hasOwnProperty("display")?S.display:null,j.style.display=dl("display",f))}catch(Y){Ce(t,t.return,Y)}}}else if(D.tag===6){if(O===null)try{D.stateNode.nodeValue=N?"":D.memoizedProps}catch(Y){Ce(t,t.return,Y)}}else if((D.tag!==22&&D.tag!==23||D.memoizedState===null||D===t)&&D.child!==null){D.child.return=D,D=D.child;continue}if(D===t)break e;for(;D.sibling===null;){if(D.return===null||D.return===t)break e;O===D&&(O=null),D=D.return}O===D&&(O=null),D.sibling.return=D.return,D=D.sibling}}break;case 19:yt(a,t),Nt(t),i&4&&Td(t);break;case 21:break;default:yt(a,t),Nt(t)}}function Nt(t){var a=t.flags;if(a&2){try{e:{for(var n=t.return;n!==null;){if(kd(n)){var i=n;break e}n=n.return}throw Error(o(160))}switch(i.tag){case 5:var l=i.stateNode;i.flags&32&&(ln(l,""),i.flags&=-33);var d=Ad(t);Zs(t,d,l);break;case 3:case 4:var f=i.stateNode.containerInfo,j=Ad(t);Xs(t,j,f);break;default:throw Error(o(161))}}catch(S){Ce(t,t.return,S)}t.flags&=-3}a&4096&&(t.flags&=-4097)}function rf(t,a,n){_=t,Rd(t)}function Rd(t,a,n){for(var i=(t.mode&1)!==0;_!==null;){var l=_,d=l.child;if(l.tag===22&&i){var f=l.memoizedState!==null||Vr;if(!f){var j=l.alternate,S=j!==null&&j.memoizedState!==null||Ue;j=Vr;var N=Ue;if(Vr=f,(Ue=S)&&!N)for(_=l;_!==null;)f=_,S=f.child,f.tag===22&&f.memoizedState!==null?Bd(l):S!==null?(S.return=f,_=S):Bd(l);for(;d!==null;)_=d,Rd(d),d=d.sibling;_=l,Vr=j,Ue=N}Id(t)}else(l.subtreeFlags&8772)!==0&&d!==null?(d.return=l,_=d):Id(t)}}function Id(t){for(;_!==null;){var a=_;if((a.flags&8772)!==0){var n=a.alternate;try{if((a.flags&8772)!==0)switch(a.tag){case 0:case 11:case 15:Ue||Kr(5,a);break;case 1:var i=a.stateNode;if(a.flags&4&&!Ue)if(n===null)i.componentDidMount();else{var l=a.elementType===a.type?n.memoizedProps:xt(a.type,n.memoizedProps);i.componentDidUpdate(l,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var d=a.updateQueue;d!==null&&Pc(a,d,i);break;case 3:var f=a.updateQueue;if(f!==null){if(n=null,a.child!==null)switch(a.child.tag){case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}Pc(a,f,n)}break;case 5:var j=a.stateNode;if(n===null&&a.flags&4){n=j;var S=a.memoizedProps;switch(a.type){case"button":case"input":case"select":case"textarea":S.autoFocus&&n.focus();break;case"img":S.src&&(n.src=S.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(a.memoizedState===null){var N=a.alternate;if(N!==null){var O=N.memoizedState;if(O!==null){var D=O.dehydrated;D!==null&&yn(D)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(o(163))}Ue||a.flags&512&&Qs(a)}catch(B){Ce(a,a.return,B)}}if(a===t){_=null;break}if(n=a.sibling,n!==null){n.return=a.return,_=n;break}_=a.return}}function Pd(t){for(;_!==null;){var a=_;if(a===t){_=null;break}var n=a.sibling;if(n!==null){n.return=a.return,_=n;break}_=a.return}}function Bd(t){for(;_!==null;){var a=_;try{switch(a.tag){case 0:case 11:case 15:var n=a.return;try{Kr(4,a)}catch(S){Ce(a,n,S)}break;case 1:var i=a.stateNode;if(typeof i.componentDidMount=="function"){var l=a.return;try{i.componentDidMount()}catch(S){Ce(a,l,S)}}var d=a.return;try{Qs(a)}catch(S){Ce(a,d,S)}break;case 5:var f=a.return;try{Qs(a)}catch(S){Ce(a,f,S)}}}catch(S){Ce(a,a.return,S)}if(a===t){_=null;break}var j=a.sibling;if(j!==null){j.return=a.return,_=j;break}_=a.return}}var sf=Math.ceil,qr=q.ReactCurrentDispatcher,eo=q.ReactCurrentOwner,dt=q.ReactCurrentBatchConfig,se=0,ze=null,Te=null,We=0,rt=0,qa=Jt(0),Ie=0,Un=null,ba=0,Qr=0,to=0,_n=null,Ke=null,ao=0,Qa=1/0,Dt=null,Xr=!1,no=null,Zt=null,Zr=!1,ea=null,ei=0,$n=0,ro=null,ti=-1,ai=0;function $e(){return(se&6)!==0?Ae():ti!==-1?ti:ti=Ae()}function ta(t){return(t.mode&1)===0?1:(se&2)!==0&&We!==0?We&-We:Uu.transition!==null?(ai===0&&(ai=Al()),ai):(t=pe,t!==0||(t=window.event,t=t===void 0?16:Ml(t.type)),t)}function vt(t,a,n,i){if(50<$n)throw $n=0,ro=null,Error(o(185));fn(t,n,i),((se&2)===0||t!==ze)&&(t===ze&&((se&2)===0&&(Qr|=n),Ie===4&&aa(t,We)),qe(t,i),n===1&&se===0&&(a.mode&1)===0&&(Qa=Ae()+500,Rr&&Kt()))}function qe(t,a){var n=t.callbackNode;Um(t,a);var i=pr(t,t===ze?We:0);if(i===0)n!==null&&wl(n),t.callbackNode=null,t.callbackPriority=0;else if(a=i&-i,t.callbackPriority!==a){if(n!=null&&wl(n),a===1)t.tag===0?Fu(Md.bind(null,t)):vc(Md.bind(null,t)),Du(function(){(se&6)===0&&Kt()}),n=null;else{switch(Nl(i)){case 1:n=Di;break;case 4:n=Cl;break;case 16:n=or;break;case 536870912:n=kl;break;default:n=or}n=_d(n,zd.bind(null,t))}t.callbackPriority=a,t.callbackNode=n}}function zd(t,a){if(ti=-1,ai=0,(se&6)!==0)throw Error(o(327));var n=t.callbackNode;if(Xa()&&t.callbackNode!==n)return null;var i=pr(t,t===ze?We:0);if(i===0)return null;if((i&30)!==0||(i&t.expiredLanes)!==0||a)a=ni(t,i);else{a=i;var l=se;se|=2;var d=Dd();(ze!==t||We!==a)&&(Dt=null,Qa=Ae()+500,va(t,a));do try{cf();break}catch(j){Od(t,j)}while(!0);Ss(),qr.current=d,se=l,Te!==null?a=0:(ze=null,We=0,a=Ie)}if(a!==0){if(a===2&&(l=Wi(t),l!==0&&(i=l,a=io(t,l))),a===1)throw n=Un,va(t,0),aa(t,i),qe(t,Ae()),n;if(a===6)aa(t,i);else{if(l=t.current.alternate,(i&30)===0&&!of(l)&&(a=ni(t,i),a===2&&(d=Wi(t),d!==0&&(i=d,a=io(t,d))),a===1))throw n=Un,va(t,0),aa(t,i),qe(t,Ae()),n;switch(t.finishedWork=l,t.finishedLanes=i,a){case 0:case 1:throw Error(o(345));case 2:ja(t,Ke,Dt);break;case 3:if(aa(t,i),(i&130023424)===i&&(a=ao+500-Ae(),10<a)){if(pr(t,0)!==0)break;if(l=t.suspendedLanes,(l&i)!==i){$e(),t.pingedLanes|=t.suspendedLanes&l;break}t.timeoutHandle=ps(ja.bind(null,t,Ke,Dt),a);break}ja(t,Ke,Dt);break;case 4:if(aa(t,i),(i&4194240)===i)break;for(a=t.eventTimes,l=-1;0<i;){var f=31-ft(i);d=1<<f,f=a[f],f>l&&(l=f),i&=~d}if(i=l,i=Ae()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*sf(i/1960))-i,10<i){t.timeoutHandle=ps(ja.bind(null,t,Ke,Dt),i);break}ja(t,Ke,Dt);break;case 5:ja(t,Ke,Dt);break;default:throw Error(o(329))}}}return qe(t,Ae()),t.callbackNode===n?zd.bind(null,t):null}function io(t,a){var n=_n;return t.current.memoizedState.isDehydrated&&(va(t,a).flags|=256),t=ni(t,a),t!==2&&(a=Ke,Ke=n,a!==null&&so(a)),t}function so(t){Ke===null?Ke=t:Ke.push.apply(Ke,t)}function of(t){for(var a=t;;){if(a.flags&16384){var n=a.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var l=n[i],d=l.getSnapshot;l=l.value;try{if(!ht(d(),l))return!1}catch{return!1}}}if(n=a.child,a.subtreeFlags&16384&&n!==null)n.return=a,a=n;else{if(a===t)break;for(;a.sibling===null;){if(a.return===null||a.return===t)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function aa(t,a){for(a&=~to,a&=~Qr,t.suspendedLanes|=a,t.pingedLanes&=~a,t=t.expirationTimes;0<a;){var n=31-ft(a),i=1<<n;t[n]=-1,a&=~i}}function Md(t){if((se&6)!==0)throw Error(o(327));Xa();var a=pr(t,0);if((a&1)===0)return qe(t,Ae()),null;var n=ni(t,a);if(t.tag!==0&&n===2){var i=Wi(t);i!==0&&(a=i,n=io(t,i))}if(n===1)throw n=Un,va(t,0),aa(t,a),qe(t,Ae()),n;if(n===6)throw Error(o(345));return t.finishedWork=t.current.alternate,t.finishedLanes=a,ja(t,Ke,Dt),qe(t,Ae()),null}function oo(t,a){var n=se;se|=1;try{return t(a)}finally{se=n,se===0&&(Qa=Ae()+500,Rr&&Kt())}}function ya(t){ea!==null&&ea.tag===0&&(se&6)===0&&Xa();var a=se;se|=1;var n=dt.transition,i=pe;try{if(dt.transition=null,pe=1,t)return t()}finally{pe=i,dt.transition=n,se=a,(se&6)===0&&Kt()}}function lo(){rt=qa.current,ge(qa)}function va(t,a){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Ou(n)),Te!==null)for(n=Te.return;n!==null;){var i=n;switch(xs(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Tr();break;case 3:Ja(),ge(Ye),ge(Le),Rs();break;case 5:Ts(i);break;case 4:Ja();break;case 13:ge(ve);break;case 19:ge(ve);break;case 10:ws(i.type._context);break;case 22:case 23:lo()}n=n.return}if(ze=t,Te=t=na(t.current,null),We=rt=a,Ie=0,Un=null,to=Qr=ba=0,Ke=_n=null,ha!==null){for(a=0;a<ha.length;a++)if(n=ha[a],i=n.interleaved,i!==null){n.interleaved=null;var l=i.next,d=n.pending;if(d!==null){var f=d.next;d.next=l,i.next=f}n.pending=i}ha=null}return t}function Od(t,a){do{var n=Te;try{if(Ss(),Hr.current=$r,Fr){for(var i=je.memoizedState;i!==null;){var l=i.queue;l!==null&&(l.pending=null),i=i.next}Fr=!1}if(xa=0,Be=Re=je=null,On=!1,Dn=0,eo.current=null,n===null||n.return===null){Ie=1,Un=a,Te=null;break}e:{var d=t,f=n.return,j=n,S=a;if(a=We,j.flags|=32768,S!==null&&typeof S=="object"&&typeof S.then=="function"){var N=S,O=j,D=O.tag;if((O.mode&1)===0&&(D===0||D===11||D===15)){var B=O.alternate;B?(O.updateQueue=B.updateQueue,O.memoizedState=B.memoizedState,O.lanes=B.lanes):(O.updateQueue=null,O.memoizedState=null)}var H=od(f);if(H!==null){H.flags&=-257,ld(H,f,j,d,a),H.mode&1&&sd(d,N,a),a=H,S=N;var G=a.updateQueue;if(G===null){var Y=new Set;Y.add(S),a.updateQueue=Y}else G.add(S);break e}else{if((a&1)===0){sd(d,N,a),co();break e}S=Error(o(426))}}else if(be&&j.mode&1){var Ne=od(f);if(Ne!==null){(Ne.flags&65536)===0&&(Ne.flags|=256),ld(Ne,f,j,d,a),vs(Va(S,j));break e}}d=S=Va(S,j),Ie!==4&&(Ie=2),_n===null?_n=[d]:_n.push(d),d=f;do{switch(d.tag){case 3:d.flags|=65536,a&=-a,d.lanes|=a;var k=rd(d,S,a);Ic(d,k);break e;case 1:j=S;var w=d.type,A=d.stateNode;if((d.flags&128)===0&&(typeof w.getDerivedStateFromError=="function"||A!==null&&typeof A.componentDidCatch=="function"&&(Zt===null||!Zt.has(A)))){d.flags|=65536,a&=-a,d.lanes|=a;var W=id(d,j,a);Ic(d,W);break e}}d=d.return}while(d!==null)}Ld(n)}catch(V){a=V,Te===n&&n!==null&&(Te=n=n.return);continue}break}while(!0)}function Dd(){var t=qr.current;return qr.current=$r,t===null?$r:t}function co(){(Ie===0||Ie===3||Ie===2)&&(Ie=4),ze===null||(ba&268435455)===0&&(Qr&268435455)===0||aa(ze,We)}function ni(t,a){var n=se;se|=2;var i=Dd();(ze!==t||We!==a)&&(Dt=null,va(t,a));do try{lf();break}catch(l){Od(t,l)}while(!0);if(Ss(),se=n,qr.current=i,Te!==null)throw Error(o(261));return ze=null,We=0,Ie}function lf(){for(;Te!==null;)Wd(Te)}function cf(){for(;Te!==null&&!Bm();)Wd(Te)}function Wd(t){var a=Ud(t.alternate,t,rt);t.memoizedProps=t.pendingProps,a===null?Ld(t):Te=a,eo.current=null}function Ld(t){var a=t;do{var n=a.alternate;if(t=a.return,(a.flags&32768)===0){if(n=ef(n,a,rt),n!==null){Te=n;return}}else{if(n=tf(n,a),n!==null){n.flags&=32767,Te=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ie=6,Te=null;return}}if(a=a.sibling,a!==null){Te=a;return}Te=a=t}while(a!==null);Ie===0&&(Ie=5)}function ja(t,a,n){var i=pe,l=dt.transition;try{dt.transition=null,pe=1,df(t,a,n,i)}finally{dt.transition=l,pe=i}return null}function df(t,a,n,i){do Xa();while(ea!==null);if((se&6)!==0)throw Error(o(327));n=t.finishedWork;var l=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(o(177));t.callbackNode=null,t.callbackPriority=0;var d=n.lanes|n.childLanes;if(_m(t,d),t===ze&&(Te=ze=null,We=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Zr||(Zr=!0,_d(or,function(){return Xa(),null})),d=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||d){d=dt.transition,dt.transition=null;var f=pe;pe=1;var j=se;se|=4,eo.current=null,nf(t,n),Ed(n,t),Eu(cs),fr=!!ls,cs=ls=null,t.current=n,rf(n),zm(),se=j,pe=f,dt.transition=d}else t.current=n;if(Zr&&(Zr=!1,ea=t,ei=l),d=t.pendingLanes,d===0&&(Zt=null),Dm(n.stateNode),qe(t,Ae()),a!==null)for(i=t.onRecoverableError,n=0;n<a.length;n++)l=a[n],i(l.value,{componentStack:l.stack,digest:l.digest});if(Xr)throw Xr=!1,t=no,no=null,t;return(ei&1)!==0&&t.tag!==0&&Xa(),d=t.pendingLanes,(d&1)!==0?t===ro?$n++:($n=0,ro=t):$n=0,Kt(),null}function Xa(){if(ea!==null){var t=Nl(ei),a=dt.transition,n=pe;try{if(dt.transition=null,pe=16>t?16:t,ea===null)var i=!1;else{if(t=ea,ea=null,ei=0,(se&6)!==0)throw Error(o(331));var l=se;for(se|=4,_=t.current;_!==null;){var d=_,f=d.child;if((_.flags&16)!==0){var j=d.deletions;if(j!==null){for(var S=0;S<j.length;S++){var N=j[S];for(_=N;_!==null;){var O=_;switch(O.tag){case 0:case 11:case 15:Fn(8,O,d)}var D=O.child;if(D!==null)D.return=O,_=D;else for(;_!==null;){O=_;var B=O.sibling,H=O.return;if(Cd(O),O===N){_=null;break}if(B!==null){B.return=H,_=B;break}_=H}}}var G=d.alternate;if(G!==null){var Y=G.child;if(Y!==null){G.child=null;do{var Ne=Y.sibling;Y.sibling=null,Y=Ne}while(Y!==null)}}_=d}}if((d.subtreeFlags&2064)!==0&&f!==null)f.return=d,_=f;else e:for(;_!==null;){if(d=_,(d.flags&2048)!==0)switch(d.tag){case 0:case 11:case 15:Fn(9,d,d.return)}var k=d.sibling;if(k!==null){k.return=d.return,_=k;break e}_=d.return}}var w=t.current;for(_=w;_!==null;){f=_;var A=f.child;if((f.subtreeFlags&2064)!==0&&A!==null)A.return=f,_=A;else e:for(f=w;_!==null;){if(j=_,(j.flags&2048)!==0)try{switch(j.tag){case 0:case 11:case 15:Kr(9,j)}}catch(V){Ce(j,j.return,V)}if(j===f){_=null;break e}var W=j.sibling;if(W!==null){W.return=j.return,_=W;break e}_=j.return}}if(se=l,Kt(),wt&&typeof wt.onPostCommitFiberRoot=="function")try{wt.onPostCommitFiberRoot(lr,t)}catch{}i=!0}return i}finally{pe=n,dt.transition=a}}return!1}function Hd(t,a,n){a=Va(n,a),a=rd(t,a,1),t=Qt(t,a,1),a=$e(),t!==null&&(fn(t,1,a),qe(t,a))}function Ce(t,a,n){if(t.tag===3)Hd(t,t,n);else for(;a!==null;){if(a.tag===3){Hd(a,t,n);break}else if(a.tag===1){var i=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Zt===null||!Zt.has(i))){t=Va(n,t),t=id(a,t,1),a=Qt(a,t,1),t=$e(),a!==null&&(fn(a,1,t),qe(a,t));break}}a=a.return}}function pf(t,a,n){var i=t.pingCache;i!==null&&i.delete(a),a=$e(),t.pingedLanes|=t.suspendedLanes&n,ze===t&&(We&n)===n&&(Ie===4||Ie===3&&(We&130023424)===We&&500>Ae()-ao?va(t,0):to|=n),qe(t,a)}function Fd(t,a){a===0&&((t.mode&1)===0?a=1:(a=dr,dr<<=1,(dr&130023424)===0&&(dr=4194304)));var n=$e();t=zt(t,a),t!==null&&(fn(t,a,n),qe(t,n))}function mf(t){var a=t.memoizedState,n=0;a!==null&&(n=a.retryLane),Fd(t,n)}function uf(t,a){var n=0;switch(t.tag){case 13:var i=t.stateNode,l=t.memoizedState;l!==null&&(n=l.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(o(314))}i!==null&&i.delete(a),Fd(t,n)}var Ud;Ud=function(t,a,n){if(t!==null)if(t.memoizedProps!==a.pendingProps||Ye.current)Ve=!0;else{if((t.lanes&n)===0&&(a.flags&128)===0)return Ve=!1,Zu(t,a,n);Ve=(t.flags&131072)!==0}else Ve=!1,be&&(a.flags&1048576)!==0&&jc(a,Pr,a.index);switch(a.lanes=0,a.tag){case 2:var i=a.type;Jr(t,a),t=a.pendingProps;var l=Ha(a,Le.current);Ya(a,n),l=Bs(null,a,i,t,l,n);var d=zs();return a.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(a.tag=1,a.memoizedState=null,a.updateQueue=null,Je(i)?(d=!0,Er(a)):d=!1,a.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,As(a),l.updater=Gr,a.stateNode=l,l._reactInternals=a,Hs(a,i,t,n),a=$s(null,a,i,!0,d,n)):(a.tag=0,be&&d&&gs(a),_e(null,a,l,n),a=a.child),a;case 16:i=a.elementType;e:{switch(Jr(t,a),t=a.pendingProps,l=i._init,i=l(i._payload),a.type=i,l=a.tag=hf(i),t=xt(i,t),l){case 0:a=_s(null,a,i,t,n);break e;case 1:a=fd(null,a,i,t,n);break e;case 11:a=cd(null,a,i,t,n);break e;case 14:a=dd(null,a,i,xt(i.type,t),n);break e}throw Error(o(306,i,""))}return a;case 0:return i=a.type,l=a.pendingProps,l=a.elementType===i?l:xt(i,l),_s(t,a,i,l,n);case 1:return i=a.type,l=a.pendingProps,l=a.elementType===i?l:xt(i,l),fd(t,a,i,l,n);case 3:e:{if(hd(a),t===null)throw Error(o(387));i=a.pendingProps,d=a.memoizedState,l=d.element,Rc(t,a),Wr(a,i,null,n);var f=a.memoizedState;if(i=f.element,d.isDehydrated)if(d={element:i,isDehydrated:!1,cache:f.cache,pendingSuspenseBoundaries:f.pendingSuspenseBoundaries,transitions:f.transitions},a.updateQueue.baseState=d,a.memoizedState=d,a.flags&256){l=Va(Error(o(423)),a),a=gd(t,a,i,n,l);break e}else if(i!==l){l=Va(Error(o(424)),a),a=gd(t,a,i,n,l);break e}else for(nt=Yt(a.stateNode.containerInfo.firstChild),at=a,be=!0,gt=null,n=Tc(a,null,i,n),a.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(_a(),i===l){a=Ot(t,a,n);break e}_e(t,a,i,n)}a=a.child}return a;case 5:return Bc(a),t===null&&ys(a),i=a.type,l=a.pendingProps,d=t!==null?t.memoizedProps:null,f=l.children,ds(i,l)?f=null:d!==null&&ds(i,d)&&(a.flags|=32),ud(t,a),_e(t,a,f,n),a.child;case 6:return t===null&&ys(a),null;case 13:return xd(t,a,n);case 4:return Ns(a,a.stateNode.containerInfo),i=a.pendingProps,t===null?a.child=$a(a,null,i,n):_e(t,a,i,n),a.child;case 11:return i=a.type,l=a.pendingProps,l=a.elementType===i?l:xt(i,l),cd(t,a,i,l,n);case 7:return _e(t,a,a.pendingProps,n),a.child;case 8:return _e(t,a,a.pendingProps.children,n),a.child;case 12:return _e(t,a,a.pendingProps.children,n),a.child;case 10:e:{if(i=a.type._context,l=a.pendingProps,d=a.memoizedProps,f=l.value,fe(Mr,i._currentValue),i._currentValue=f,d!==null)if(ht(d.value,f)){if(d.children===l.children&&!Ye.current){a=Ot(t,a,n);break e}}else for(d=a.child,d!==null&&(d.return=a);d!==null;){var j=d.dependencies;if(j!==null){f=d.child;for(var S=j.firstContext;S!==null;){if(S.context===i){if(d.tag===1){S=Mt(-1,n&-n),S.tag=2;var N=d.updateQueue;if(N!==null){N=N.shared;var O=N.pending;O===null?S.next=S:(S.next=O.next,O.next=S),N.pending=S}}d.lanes|=n,S=d.alternate,S!==null&&(S.lanes|=n),Cs(d.return,n,a),j.lanes|=n;break}S=S.next}}else if(d.tag===10)f=d.type===a.type?null:d.child;else if(d.tag===18){if(f=d.return,f===null)throw Error(o(341));f.lanes|=n,j=f.alternate,j!==null&&(j.lanes|=n),Cs(f,n,a),f=d.sibling}else f=d.child;if(f!==null)f.return=d;else for(f=d;f!==null;){if(f===a){f=null;break}if(d=f.sibling,d!==null){d.return=f.return,f=d;break}f=f.return}d=f}_e(t,a,l.children,n),a=a.child}return a;case 9:return l=a.type,i=a.pendingProps.children,Ya(a,n),l=lt(l),i=i(l),a.flags|=1,_e(t,a,i,n),a.child;case 14:return i=a.type,l=xt(i,a.pendingProps),l=xt(i.type,l),dd(t,a,i,l,n);case 15:return pd(t,a,a.type,a.pendingProps,n);case 17:return i=a.type,l=a.pendingProps,l=a.elementType===i?l:xt(i,l),Jr(t,a),a.tag=1,Je(i)?(t=!0,Er(a)):t=!1,Ya(a,n),ad(a,i,l),Hs(a,i,l,n),$s(null,a,i,!0,t,n);case 19:return yd(t,a,n);case 22:return md(t,a,n)}throw Error(o(156,a.tag))};function _d(t,a){return Sl(t,a)}function ff(t,a,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function pt(t,a,n,i){return new ff(t,a,n,i)}function po(t){return t=t.prototype,!(!t||!t.isReactComponent)}function hf(t){if(typeof t=="function")return po(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Oe)return 11;if(t===St)return 14}return 2}function na(t,a){var n=t.alternate;return n===null?(n=pt(t.tag,a,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=a,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,a=t.dependencies,n.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ri(t,a,n,i,l,d){var f=2;if(i=t,typeof t=="function")po(t)&&(f=1);else if(typeof t=="string")f=5;else e:switch(t){case K:return Sa(n.children,l,d,a);case J:f=8,l|=8;break;case ye:return t=pt(12,n,a,l|2),t.elementType=ye,t.lanes=d,t;case Ze:return t=pt(13,n,a,l),t.elementType=Ze,t.lanes=d,t;case ut:return t=pt(19,n,a,l),t.elementType=ut,t.lanes=d,t;case we:return ii(n,l,d,a);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case it:f=10;break e;case Xe:f=9;break e;case Oe:f=11;break e;case St:f=14;break e;case Ge:f=16,i=null;break e}throw Error(o(130,t==null?t:typeof t,""))}return a=pt(f,n,a,l),a.elementType=t,a.type=i,a.lanes=d,a}function Sa(t,a,n,i){return t=pt(7,t,i,a),t.lanes=n,t}function ii(t,a,n,i){return t=pt(22,t,i,a),t.elementType=we,t.lanes=n,t.stateNode={isHidden:!1},t}function mo(t,a,n){return t=pt(6,t,null,a),t.lanes=n,t}function uo(t,a,n){return a=pt(4,t.children!==null?t.children:[],t.key,a),a.lanes=n,a.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},a}function gf(t,a,n,i,l){this.tag=a,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Li(0),this.expirationTimes=Li(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Li(0),this.identifierPrefix=i,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function fo(t,a,n,i,l,d,f,j,S){return t=new gf(t,a,n,j,S),a===1?(a=1,d===!0&&(a|=8)):a=0,d=pt(3,null,null,a),t.current=d,d.stateNode=t,d.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},As(d),t}function xf(t,a,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:me,key:i==null?null:""+i,children:t,containerInfo:a,implementation:n}}function $d(t){if(!t)return Vt;t=t._reactInternals;e:{if(da(t)!==t||t.tag!==1)throw Error(o(170));var a=t;do{switch(a.tag){case 3:a=a.stateNode.context;break e;case 1:if(Je(a.type)){a=a.stateNode.__reactInternalMemoizedMergedChildContext;break e}}a=a.return}while(a!==null);throw Error(o(171))}if(t.tag===1){var n=t.type;if(Je(n))return bc(t,n,a)}return a}function Gd(t,a,n,i,l,d,f,j,S){return t=fo(n,i,!0,t,l,d,f,j,S),t.context=$d(null),n=t.current,i=$e(),l=ta(n),d=Mt(i,l),d.callback=a??null,Qt(n,d,l),t.current.lanes=l,fn(t,l,i),qe(t,i),t}function si(t,a,n,i){var l=a.current,d=$e(),f=ta(l);return n=$d(n),a.context===null?a.context=n:a.pendingContext=n,a=Mt(d,f),a.payload={element:t},i=i===void 0?null:i,i!==null&&(a.callback=i),t=Qt(l,a,f),t!==null&&(vt(t,l,f,d),Dr(t,l,f)),f}function oi(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Yd(t,a){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<a?n:a}}function ho(t,a){Yd(t,a),(t=t.alternate)&&Yd(t,a)}function bf(){return null}var Jd=typeof reportError=="function"?reportError:function(t){console.error(t)};function go(t){this._internalRoot=t}li.prototype.render=go.prototype.render=function(t){var a=this._internalRoot;if(a===null)throw Error(o(409));si(t,a,null,null)},li.prototype.unmount=go.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var a=t.containerInfo;ya(function(){si(null,t,null,null)}),a[Rt]=null}};function li(t){this._internalRoot=t}li.prototype.unstable_scheduleHydration=function(t){if(t){var a=Rl();t={blockedOn:null,target:t,priority:a};for(var n=0;n<_t.length&&a!==0&&a<_t[n].priority;n++);_t.splice(n,0,t),n===0&&Bl(t)}};function xo(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ci(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Vd(){}function yf(t,a,n,i,l){if(l){if(typeof i=="function"){var d=i;i=function(){var N=oi(f);d.call(N)}}var f=Gd(a,i,t,0,null,!1,!1,"",Vd);return t._reactRootContainer=f,t[Rt]=f.current,Tn(t.nodeType===8?t.parentNode:t),ya(),f}for(;l=t.lastChild;)t.removeChild(l);if(typeof i=="function"){var j=i;i=function(){var N=oi(S);j.call(N)}}var S=fo(t,0,!1,null,null,!1,!1,"",Vd);return t._reactRootContainer=S,t[Rt]=S.current,Tn(t.nodeType===8?t.parentNode:t),ya(function(){si(a,S,n,i)}),S}function di(t,a,n,i,l){var d=n._reactRootContainer;if(d){var f=d;if(typeof l=="function"){var j=l;l=function(){var S=oi(f);j.call(S)}}si(a,f,t,l)}else f=yf(n,a,t,l,i);return oi(f)}Tl=function(t){switch(t.tag){case 3:var a=t.stateNode;if(a.current.memoizedState.isDehydrated){var n=un(a.pendingLanes);n!==0&&(Hi(a,n|1),qe(a,Ae()),(se&6)===0&&(Qa=Ae()+500,Kt()))}break;case 13:ya(function(){var i=zt(t,1);if(i!==null){var l=$e();vt(i,t,1,l)}}),ho(t,1)}},Fi=function(t){if(t.tag===13){var a=zt(t,134217728);if(a!==null){var n=$e();vt(a,t,134217728,n)}ho(t,134217728)}},El=function(t){if(t.tag===13){var a=ta(t),n=zt(t,a);if(n!==null){var i=$e();vt(n,t,a,i)}ho(t,a)}},Rl=function(){return pe},Il=function(t,a){var n=pe;try{return pe=t,a()}finally{pe=n}},Bi=function(t,a,n){switch(a){case"input":if(ki(t,n),a=n.name,n.type==="radio"&&a!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+a)+'][type="radio"]'),a=0;a<n.length;a++){var i=n[a];if(i!==t&&i.form===t.form){var l=Nr(i);if(!l)throw Error(o(90));tl(i),ki(i,l)}}}break;case"textarea":sl(t,n);break;case"select":a=n.value,a!=null&&Ta(t,!!n.multiple,a,!1)}},hl=oo,gl=ya;var vf={usingClientEntryPoint:!1,Events:[In,Wa,Nr,ul,fl,oo]},Gn={findFiberByHostInstance:pa,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},jf={bundleType:Gn.bundleType,version:Gn.version,rendererPackageName:Gn.rendererPackageName,rendererConfig:Gn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:q.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=vl(t),t===null?null:t.stateNode},findFiberByHostInstance:Gn.findFiberByHostInstance||bf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var pi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!pi.isDisabled&&pi.supportsFiber)try{lr=pi.inject(jf),wt=pi}catch{}}return Qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vf,Qe.createPortal=function(t,a){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!xo(a))throw Error(o(200));return xf(t,a,null,n)},Qe.createRoot=function(t,a){if(!xo(t))throw Error(o(299));var n=!1,i="",l=Jd;return a!=null&&(a.unstable_strictMode===!0&&(n=!0),a.identifierPrefix!==void 0&&(i=a.identifierPrefix),a.onRecoverableError!==void 0&&(l=a.onRecoverableError)),a=fo(t,1,!1,null,null,n,!1,i,l),t[Rt]=a.current,Tn(t.nodeType===8?t.parentNode:t),new go(a)},Qe.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var a=t._reactInternals;if(a===void 0)throw typeof t.render=="function"?Error(o(188)):(t=Object.keys(t).join(","),Error(o(268,t)));return t=vl(a),t=t===null?null:t.stateNode,t},Qe.flushSync=function(t){return ya(t)},Qe.hydrate=function(t,a,n){if(!ci(a))throw Error(o(200));return di(null,t,a,!0,n)},Qe.hydrateRoot=function(t,a,n){if(!xo(t))throw Error(o(405));var i=n!=null&&n.hydratedSources||null,l=!1,d="",f=Jd;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(d=n.identifierPrefix),n.onRecoverableError!==void 0&&(f=n.onRecoverableError)),a=Gd(a,null,t,1,n??null,l,!1,d,f),t[Rt]=a.current,Tn(t),i)for(t=0;t<i.length;t++)n=i[t],l=n._getVersion,l=l(n._source),a.mutableSourceEagerHydrationData==null?a.mutableSourceEagerHydrationData=[n,l]:a.mutableSourceEagerHydrationData.push(n,l);return new li(a)},Qe.render=function(t,a,n){if(!ci(a))throw Error(o(200));return di(null,t,a,!1,n)},Qe.unmountComponentAtNode=function(t){if(!ci(t))throw Error(o(40));return t._reactRootContainer?(ya(function(){di(null,null,t,!1,function(){t._reactRootContainer=null,t[Rt]=null})}),!0):!1},Qe.unstable_batchedUpdates=oo,Qe.unstable_renderSubtreeIntoContainer=function(t,a,n,i){if(!ci(n))throw Error(o(200));if(t==null||t._reactInternals===void 0)throw Error(o(38));return di(t,a,n,!1,i)},Qe.version="18.3.1-next-f1338f8080-20240426",Qe}var ap;function Kp(){if(ap)return vo.exports;ap=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(s){console.error(s)}}return r(),vo.exports=Pf(),vo.exports}var np;function Bf(){if(np)return mi;np=1;var r=Kp();return mi.createRoot=r.createRoot,mi.hydrateRoot=r.hydrateRoot,mi}var zf=Bf(),wo,rp;function Mf(){if(rp)return wo;rp=1;var r=typeof Element<"u",s=typeof Map=="function",o=typeof Set=="function",c=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function m(p,u){if(p===u)return!0;if(p&&u&&typeof p=="object"&&typeof u=="object"){if(p.constructor!==u.constructor)return!1;var x,h,b;if(Array.isArray(p)){if(x=p.length,x!=u.length)return!1;for(h=x;h--!==0;)if(!m(p[h],u[h]))return!1;return!0}var y;if(s&&p instanceof Map&&u instanceof Map){if(p.size!==u.size)return!1;for(y=p.entries();!(h=y.next()).done;)if(!u.has(h.value[0]))return!1;for(y=p.entries();!(h=y.next()).done;)if(!m(h.value[1],u.get(h.value[0])))return!1;return!0}if(o&&p instanceof Set&&u instanceof Set){if(p.size!==u.size)return!1;for(y=p.entries();!(h=y.next()).done;)if(!u.has(h.value[0]))return!1;return!0}if(c&&ArrayBuffer.isView(p)&&ArrayBuffer.isView(u)){if(x=p.length,x!=u.length)return!1;for(h=x;h--!==0;)if(p[h]!==u[h])return!1;return!0}if(p.constructor===RegExp)return p.source===u.source&&p.flags===u.flags;if(p.valueOf!==Object.prototype.valueOf&&typeof p.valueOf=="function"&&typeof u.valueOf=="function")return p.valueOf()===u.valueOf();if(p.toString!==Object.prototype.toString&&typeof p.toString=="function"&&typeof u.toString=="function")return p.toString()===u.toString();if(b=Object.keys(p),x=b.length,x!==Object.keys(u).length)return!1;for(h=x;h--!==0;)if(!Object.prototype.hasOwnProperty.call(u,b[h]))return!1;if(r&&p instanceof Element)return!1;for(h=x;h--!==0;)if(!((b[h]==="_owner"||b[h]==="__v"||b[h]==="__o")&&p.$$typeof)&&!m(p[b[h]],u[b[h]]))return!1;return!0}return p!==p&&u!==u}return wo=function(u,x){try{return m(u,x)}catch(h){if((h.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw h}},wo}var Of=Mf();const Df=ji(Of);var Co,ip;function Wf(){if(ip)return Co;ip=1;var r=function(s,o,c,m,p,u,x,h){if(!s){var b;if(o===void 0)b=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var y=[c,m,p,u,x,h],g=0;b=new Error(o.replace(/%s/g,function(){return y[g++]})),b.name="Invariant Violation"}throw b.framesToPop=1,b}};return Co=r,Co}var Lf=Wf();const sp=ji(Lf);var ko,op;function Hf(){return op||(op=1,ko=function(s,o,c,m){var p=c?c.call(m,s,o):void 0;if(p!==void 0)return!!p;if(s===o)return!0;if(typeof s!="object"||!s||typeof o!="object"||!o)return!1;var u=Object.keys(s),x=Object.keys(o);if(u.length!==x.length)return!1;for(var h=Object.prototype.hasOwnProperty.bind(o),b=0;b<u.length;b++){var y=u[b];if(!h(y))return!1;var g=s[y],T=o[y];if(p=c?c.call(m,g,T,y):void 0,p===!1||p===void 0&&g!==T)return!1}return!0}),ko}var Ff=Hf();const Uf=ji(Ff);var qp=(r=>(r.BASE="base",r.BODY="body",r.HEAD="head",r.HTML="html",r.LINK="link",r.META="meta",r.NOSCRIPT="noscript",r.SCRIPT="script",r.STYLE="style",r.TITLE="title",r.FRAGMENT="Symbol(react.fragment)",r))(qp||{}),Ao={link:{rel:["amphtml","canonical","alternate"]},script:{type:["application/ld+json"]},meta:{charset:"",name:["generator","robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]}},lp=Object.values(qp),Si={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},Qp=Object.entries(Si).reduce((r,[s,o])=>(r[o]=s,r),{}),jt="data-rh",nn={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate",PRIORITIZE_SEO_TAGS:"prioritizeSeoTags"},rn=(r,s)=>{for(let o=r.length-1;o>=0;o-=1){const c=r[o];if(Object.prototype.hasOwnProperty.call(c,s))return c[s]}return null},_f=r=>{let s=rn(r,"title");const o=rn(r,nn.TITLE_TEMPLATE);if(Array.isArray(s)&&(s=s.join("")),o&&s)return o.replace(/%s/g,()=>s);const c=rn(r,nn.DEFAULT_TITLE);return s||c||void 0},$f=r=>rn(r,nn.ON_CHANGE_CLIENT_STATE)||(()=>{}),No=(r,s)=>s.filter(o=>typeof o[r]<"u").map(o=>o[r]).reduce((o,c)=>({...o,...c}),{}),Gf=(r,s)=>s.filter(o=>typeof o.base<"u").map(o=>o.base).reverse().reduce((o,c)=>{if(!o.length){const m=Object.keys(c);for(let p=0;p<m.length;p+=1){const x=m[p].toLowerCase();if(r.indexOf(x)!==-1&&c[x])return o.concat(c)}}return o},[]),Yf=r=>console&&typeof console.warn=="function"&&console.warn(r),Jn=(r,s,o)=>{const c={};return o.filter(m=>Array.isArray(m[r])?!0:(typeof m[r]<"u"&&Yf(`Helmet: ${r} should be of type "Array". Instead found type "${typeof m[r]}"`),!1)).map(m=>m[r]).reverse().reduce((m,p)=>{const u={};p.filter(h=>{let b;const y=Object.keys(h);for(let T=0;T<y.length;T+=1){const E=y[T],F=E.toLowerCase();s.indexOf(F)!==-1&&!(b==="rel"&&h[b].toLowerCase()==="canonical")&&!(F==="rel"&&h[F].toLowerCase()==="stylesheet")&&(b=F),s.indexOf(E)!==-1&&(E==="innerHTML"||E==="cssText"||E==="itemprop")&&(b=E)}if(!b||!h[b])return!1;const g=h[b].toLowerCase();return c[b]||(c[b]={}),u[b]||(u[b]={}),c[b][g]?!1:(u[b][g]=!0,!0)}).reverse().forEach(h=>m.push(h));const x=Object.keys(u);for(let h=0;h<x.length;h+=1){const b=x[h],y={...c[b],...u[b]};c[b]=y}return m},[]).reverse()},Jf=(r,s)=>{if(Array.isArray(r)&&r.length){for(let o=0;o<r.length;o+=1)if(r[o][s])return!0}return!1},Vf=r=>({baseTag:Gf(["href"],r),bodyAttributes:No("bodyAttributes",r),defer:rn(r,nn.DEFER),encode:rn(r,nn.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:No("htmlAttributes",r),linkTags:Jn("link",["rel","href"],r),metaTags:Jn("meta",["name","charset","http-equiv","property","itemprop"],r),noscriptTags:Jn("noscript",["innerHTML"],r),onChangeClientState:$f(r),scriptTags:Jn("script",["src","innerHTML"],r),styleTags:Jn("style",["cssText"],r),title:_f(r),titleAttributes:No("titleAttributes",r),prioritizeSeoTags:Jf(r,nn.PRIORITIZE_SEO_TAGS)}),Xp=r=>Array.isArray(r)?r.join(""):r,Kf=(r,s)=>{const o=Object.keys(r);for(let c=0;c<o.length;c+=1)if(s[o[c]]&&s[o[c]].includes(r[o[c]]))return!0;return!1},To=(r,s)=>Array.isArray(r)?r.reduce((o,c)=>(Kf(c,s)?o.priority.push(c):o.default.push(c),o),{priority:[],default:[]}):{default:r,priority:[]},cp=(r,s)=>({...r,[s]:void 0}),qf=["noscript","script","style"],Lo=(r,s=!0)=>s===!1?String(r):String(r).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;"),Zp=r=>Object.keys(r).reduce((s,o)=>{const c=typeof r[o]<"u"?`${o}="${r[o]}"`:`${o}`;return s?`${s} ${c}`:c},""),Qf=(r,s,o,c)=>{const m=Zp(o),p=Xp(s);return m?`<${r} ${jt}="true" ${m}>${Lo(p,c)}</${r}>`:`<${r} ${jt}="true">${Lo(p,c)}</${r}>`},Xf=(r,s,o=!0)=>s.reduce((c,m)=>{const p=m,u=Object.keys(p).filter(b=>!(b==="innerHTML"||b==="cssText")).reduce((b,y)=>{const g=typeof p[y]>"u"?y:`${y}="${Lo(p[y],o)}"`;return b?`${b} ${g}`:g},""),x=p.innerHTML||p.cssText||"",h=qf.indexOf(r)===-1;return`${c}<${r} ${jt}="true" ${u}${h?"/>":`>${x}</${r}>`}`},""),em=(r,s={})=>Object.keys(r).reduce((o,c)=>{const m=Si[c];return o[m||c]=r[c],o},s),Zf=(r,s,o)=>{const c={key:s,[jt]:!0},m=em(o,c);return[ke.createElement("title",m,s)]},bi=(r,s)=>s.map((o,c)=>{const m={key:c,[jt]:!0};return Object.keys(o).forEach(p=>{const x=Si[p]||p;if(x==="innerHTML"||x==="cssText"){const h=o.innerHTML||o.cssText;m.dangerouslySetInnerHTML={__html:h}}else m[x]=o[p]}),ke.createElement(r,m)}),mt=(r,s,o=!0)=>{switch(r){case"title":return{toComponent:()=>Zf(r,s.title,s.titleAttributes),toString:()=>Qf(r,s.title,s.titleAttributes,o)};case"bodyAttributes":case"htmlAttributes":return{toComponent:()=>em(s),toString:()=>Zp(s)};default:return{toComponent:()=>bi(r,s),toString:()=>Xf(r,s,o)}}},eh=({metaTags:r,linkTags:s,scriptTags:o,encode:c})=>{const m=To(r,Ao.meta),p=To(s,Ao.link),u=To(o,Ao.script);return{priorityMethods:{toComponent:()=>[...bi("meta",m.priority),...bi("link",p.priority),...bi("script",u.priority)],toString:()=>`${mt("meta",m.priority,c)} ${mt("link",p.priority,c)} ${mt("script",u.priority,c)}`},metaTags:m.default,linkTags:p.default,scriptTags:u.default}},th=r=>{const{baseTag:s,bodyAttributes:o,encode:c=!0,htmlAttributes:m,noscriptTags:p,styleTags:u,title:x="",titleAttributes:h,prioritizeSeoTags:b}=r;let{linkTags:y,metaTags:g,scriptTags:T}=r,E={toComponent:()=>[],toString:()=>""};return b&&({priorityMethods:E,linkTags:y,metaTags:g,scriptTags:T}=eh(r)),{priority:E,base:mt("base",s,c),bodyAttributes:mt("bodyAttributes",o,c),htmlAttributes:mt("htmlAttributes",m,c),link:mt("link",y,c),meta:mt("meta",g,c),noscript:mt("noscript",p,c),script:mt("script",T,c),style:mt("style",u,c),title:mt("title",{title:x,titleAttributes:h},c)}},Ho=th,ui=[],qo=!!(typeof window<"u"&&window.document&&window.document.createElement),Fo=class{constructor(r,s){Wt(this,"instances",[]);Wt(this,"canUseDOM",qo);Wt(this,"context");Wt(this,"value",{setHelmet:r=>{this.context.helmet=r},helmetInstances:{get:()=>this.canUseDOM?ui:this.instances,add:r=>{(this.canUseDOM?ui:this.instances).push(r)},remove:r=>{const s=(this.canUseDOM?ui:this.instances).indexOf(r);(this.canUseDOM?ui:this.instances).splice(s,1)}}});this.context=r,this.canUseDOM=s||!1,s||(r.helmet=Ho({baseTag:[],bodyAttributes:{},htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))}},ah=parseInt(ke.version.split(".")[0],10),Uo=ah>=19,nh={},tm=ke.createContext(nh),Ca,am=(Ca=class extends v.Component{constructor(o){super(o);Wt(this,"helmetData");Uo?this.helmetData=null:this.helmetData=new Fo(this.props.context||{},Ca.canUseDOM)}render(){return Uo?ke.createElement(ke.Fragment,null,this.props.children):ke.createElement(tm.Provider,{value:this.helmetData.value},this.props.children)}},Wt(Ca,"canUseDOM",qo),Ca),Za=(r,s)=>{const o=document.head||document.querySelector("head"),c=o.querySelectorAll(`${r}[${jt}]`),m=[].slice.call(c),p=[];let u;return s&&s.length&&s.forEach(x=>{const h=document.createElement(r);for(const b in x)if(Object.prototype.hasOwnProperty.call(x,b))if(b==="innerHTML")h.innerHTML=x.innerHTML;else if(b==="cssText"){const y=x.cssText;h.appendChild(document.createTextNode(y))}else{const y=b,g=typeof x[y]>"u"?"":x[y];h.setAttribute(b,g)}h.setAttribute(jt,"true"),m.some((b,y)=>(u=y,h.isEqualNode(b)))?m.splice(u,1):p.push(h)}),m.forEach(x=>{var h;return(h=x.parentNode)==null?void 0:h.removeChild(x)}),p.forEach(x=>o.appendChild(x)),{oldTags:m,newTags:p}},_o=(r,s)=>{const o=document.getElementsByTagName(r)[0];if(!o)return;const c=o.getAttribute(jt),m=c?c.split(","):[],p=[...m],u=Object.keys(s);for(const x of u){const h=s[x]||"";o.getAttribute(x)!==h&&o.setAttribute(x,h),m.indexOf(x)===-1&&m.push(x);const b=p.indexOf(x);b!==-1&&p.splice(b,1)}for(let x=p.length-1;x>=0;x-=1)o.removeAttribute(p[x]);m.length===p.length?o.removeAttribute(jt):o.getAttribute(jt)!==u.join(",")&&o.setAttribute(jt,u.join(","))},rh=(r,s)=>{typeof r<"u"&&document.title!==r&&(document.title=Xp(r)),_o("title",s)},dp=(r,s)=>{const{baseTag:o,bodyAttributes:c,htmlAttributes:m,linkTags:p,metaTags:u,noscriptTags:x,onChangeClientState:h,scriptTags:b,styleTags:y,title:g,titleAttributes:T}=r;_o("body",c),_o("html",m),rh(g,T);const E={baseTag:Za("base",o),linkTags:Za("link",p),metaTags:Za("meta",u),noscriptTags:Za("noscript",x),scriptTags:Za("script",b),styleTags:Za("style",y)},F={},R={};Object.keys(E).forEach(z=>{const{newTags:P,oldTags:I}=E[z];P.length&&(F[z]=P),I.length&&(R[z]=E[z].oldTags)}),s&&s(),h(r,F,R)},Vn=null,ih=r=>{Vn&&cancelAnimationFrame(Vn),r.defer?Vn=requestAnimationFrame(()=>{dp(r,()=>{Vn=null})}):(dp(r),Vn=null)},sh=ih,pp=class extends v.Component{constructor(){super(...arguments);Wt(this,"rendered",!1)}shouldComponentUpdate(s){return!Uf(s,this.props)}componentDidUpdate(){this.emitChange()}componentWillUnmount(){const{helmetInstances:s}=this.props.context;s.remove(this),this.emitChange()}emitChange(){const{helmetInstances:s,setHelmet:o}=this.props.context;let c=null;const m=Vf(s.get().map(p=>{const{context:u,...x}=p.props;return x}));am.canUseDOM?sh(m):Ho&&(c=Ho(m)),o(c)}init(){if(this.rendered)return;this.rendered=!0;const{helmetInstances:s}=this.props.context;s.add(this),this.emitChange()}render(){return this.init(),null}},yi=[],mp=r=>{const s={};for(const o of Object.keys(r))s[Qp[o]||o]=r[o];return s},wa=r=>{const s={};for(const o of Object.keys(r)){const c=Si[o];s[c||o]=r[o]}return s},up=(r,s)=>{if(!qo)return;const o=document.getElementsByTagName(r)[0];if(!o)return;const c="data-rh-managed",m=o.getAttribute(c),p=m?m.split(","):[],u=Object.keys(s);for(const x of p)u.includes(x)||o.removeAttribute(x);for(const x of u){const h=s[x];h==null||h===!1?o.removeAttribute(x):h===!0?o.setAttribute(x,""):o.setAttribute(x,String(h))}u.length>0?o.setAttribute(c,u.join(",")):o.removeAttribute(c)},Eo=()=>{const r={},s={};for(const o of yi){const{htmlAttributes:c,bodyAttributes:m}=o.props;c&&Object.assign(r,mp(c)),m&&Object.assign(s,mp(m))}up("html",r),up("body",s)},oh=class extends v.Component{componentDidMount(){yi.push(this),Eo()}componentDidUpdate(){Eo()}componentWillUnmount(){const r=yi.indexOf(this);r!==-1&&yi.splice(r,1),Eo()}resolveTitle(){const{title:r,titleTemplate:s,defaultTitle:o}=this.props;return r&&s?s.replace(/%s/g,()=>Array.isArray(r)?r.join(""):r):r||o||void 0}renderTitle(){const r=this.resolveTitle();if(r===void 0)return null;const s=this.props.titleAttributes||{};return ke.createElement("title",wa(s),r)}renderBase(){const{base:r}=this.props;return r?ke.createElement("base",wa(r)):null}renderMeta(){const{meta:r}=this.props;return!r||!Array.isArray(r)?null:r.map((s,o)=>ke.createElement("meta",{key:o,...wa(s)}))}renderLink(){const{link:r}=this.props;return!r||!Array.isArray(r)?null:r.map((s,o)=>ke.createElement("link",{key:o,...wa(s)}))}renderScript(){const{script:r}=this.props;return!r||!Array.isArray(r)?null:r.map((s,o)=>{const{innerHTML:c,...m}=s,p=wa(m);return c&&(p.dangerouslySetInnerHTML={__html:c}),ke.createElement("script",{key:o,...p})})}renderStyle(){const{style:r}=this.props;return!r||!Array.isArray(r)?null:r.map((s,o)=>{const{cssText:c,...m}=s,p=wa(m);return c&&(p.dangerouslySetInnerHTML={__html:c}),ke.createElement("style",{key:o,...p})})}renderNoscript(){const{noscript:r}=this.props;return!r||!Array.isArray(r)?null:r.map((s,o)=>{const{innerHTML:c,...m}=s,p=wa(m);return c&&(p.dangerouslySetInnerHTML={__html:c}),ke.createElement("noscript",{key:o,...p})})}render(){return ke.createElement(ke.Fragment,null,this.renderTitle(),this.renderBase(),this.renderMeta(),this.renderLink(),this.renderScript(),this.renderStyle(),this.renderNoscript())}},Wo,nm=(Wo=class extends v.Component{shouldComponentUpdate(r){return!Df(cp(this.props,"helmetData"),cp(r,"helmetData"))}mapNestedChildrenToProps(r,s){if(!s)return null;switch(r.type){case"script":case"noscript":return{innerHTML:s};case"style":return{cssText:s};default:throw new Error(`<${r.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`)}}flattenArrayTypeChildren(r,s,o,c){return{...s,[r.type]:[...s[r.type]||[],{...o,...this.mapNestedChildrenToProps(r,c)}]}}mapObjectTypeChildren(r,s,o,c){switch(r.type){case"title":return{...s,[r.type]:c,titleAttributes:{...o}};case"body":return{...s,bodyAttributes:{...o}};case"html":return{...s,htmlAttributes:{...o}};default:return{...s,[r.type]:{...o}}}}mapArrayTypeChildrenToProps(r,s){let o={...s};return Object.keys(r).forEach(c=>{o={...o,[c]:r[c]}}),o}warnOnInvalidChildren(r,s){return sp(lp.some(o=>r.type===o),typeof r.type=="function"?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":`Only elements types ${lp.join(", ")} are allowed. Helmet does not support rendering <${r.type}> elements. Refer to our API for more information.`),sp(!s||typeof s=="string"||Array.isArray(s)&&!s.some(o=>typeof o!="string"),`Helmet expects a string as a child of <${r.type}>. Did you forget to wrap your children in braces? ( <${r.type}>{\`\`}</${r.type}> ) Refer to our API for more information.`),!0}mapChildrenToProps(r,s){let o={};return ke.Children.forEach(r,c=>{if(!c||!c.props)return;const{children:m,...p}=c.props,u=Object.keys(p).reduce((h,b)=>(h[Qp[b]||b]=p[b],h),{});let{type:x}=c;switch(typeof x=="symbol"?x=x.toString():this.warnOnInvalidChildren(c,m),x){case"Symbol(react.fragment)":s=this.mapChildrenToProps(m,s);break;case"link":case"meta":case"noscript":case"script":case"style":o=this.flattenArrayTypeChildren(c,o,u,m);break;default:s=this.mapObjectTypeChildren(c,s,u,m);break}}),this.mapArrayTypeChildrenToProps(o,s)}render(){const{children:r,...s}=this.props;let o={...s},{helmetData:c}=s;if(r&&(o=this.mapChildrenToProps(r,o)),c&&!(c instanceof Fo)){const m=c;c=new Fo(m.context,!0),delete o.helmetData}return Uo?ke.createElement(oh,{...o}):c?ke.createElement(pp,{...o,context:c.value}):ke.createElement(tm.Consumer,null,m=>ke.createElement(pp,{...o,context:m}))}},Wt(Wo,"defaultProps",{defer:!0,encodeSpecialCharacters:!0,prioritizeSeoTags:!1}),Wo);Kp();/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Xn(){return Xn=Object.assign?Object.assign.bind():function(r){for(var s=1;s<arguments.length;s++){var o=arguments[s];for(var c in o)Object.prototype.hasOwnProperty.call(o,c)&&(r[c]=o[c])}return r},Xn.apply(this,arguments)}var oa;(function(r){r.Pop="POP",r.Push="PUSH",r.Replace="REPLACE"})(oa||(oa={}));const fp="popstate";function lh(r){r===void 0&&(r={});function s(c,m){let{pathname:p,search:u,hash:x}=c.location;return $o("",{pathname:p,search:u,hash:x},m.state&&m.state.usr||null,m.state&&m.state.key||"default")}function o(c,m){return typeof m=="string"?m:vi(m)}return dh(s,o,null,r)}function Ee(r,s){if(r===!1||r===null||typeof r>"u")throw new Error(s)}function Qo(r,s){if(!r){typeof console<"u"&&console.warn(s);try{throw new Error(s)}catch{}}}function ch(){return Math.random().toString(36).substr(2,8)}function hp(r,s){return{usr:r.state,key:r.key,idx:s}}function $o(r,s,o,c){return o===void 0&&(o=null),Xn({pathname:typeof r=="string"?r:r.pathname,search:"",hash:""},typeof s=="string"?sn(s):s,{state:o,key:s&&s.key||c||ch()})}function vi(r){let{pathname:s="/",search:o="",hash:c=""}=r;return o&&o!=="?"&&(s+=o.charAt(0)==="?"?o:"?"+o),c&&c!=="#"&&(s+=c.charAt(0)==="#"?c:"#"+c),s}function sn(r){let s={};if(r){let o=r.indexOf("#");o>=0&&(s.hash=r.substr(o),r=r.substr(0,o));let c=r.indexOf("?");c>=0&&(s.search=r.substr(c),r=r.substr(0,c)),r&&(s.pathname=r)}return s}function dh(r,s,o,c){c===void 0&&(c={});let{window:m=document.defaultView,v5Compat:p=!1}=c,u=m.history,x=oa.Pop,h=null,b=y();b==null&&(b=0,u.replaceState(Xn({},u.state,{idx:b}),""));function y(){return(u.state||{idx:null}).idx}function g(){x=oa.Pop;let z=y(),P=z==null?null:z-b;b=z,h&&h({action:x,location:R.location,delta:P})}function T(z,P){x=oa.Push;let I=$o(R.location,z,P);b=y()+1;let U=hp(I,b),q=R.createHref(I);try{u.pushState(U,"",q)}catch(ie){if(ie instanceof DOMException&&ie.name==="DataCloneError")throw ie;m.location.assign(q)}p&&h&&h({action:x,location:R.location,delta:1})}function E(z,P){x=oa.Replace;let I=$o(R.location,z,P);b=y();let U=hp(I,b),q=R.createHref(I);u.replaceState(U,"",q),p&&h&&h({action:x,location:R.location,delta:0})}function F(z){let P=m.location.origin!=="null"?m.location.origin:m.location.href,I=typeof z=="string"?z:vi(z);return I=I.replace(/ $/,"%20"),Ee(P,"No window.location.(origin|href) available to create URL for href: "+I),new URL(I,P)}let R={get action(){return x},get location(){return r(m,u)},listen(z){if(h)throw new Error("A history only accepts one active listener");return m.addEventListener(fp,g),h=z,()=>{m.removeEventListener(fp,g),h=null}},createHref(z){return s(m,z)},createURL:F,encodeLocation(z){let P=F(z);return{pathname:P.pathname,search:P.search,hash:P.hash}},push:T,replace:E,go(z){return u.go(z)}};return R}var gp;(function(r){r.data="data",r.deferred="deferred",r.redirect="redirect",r.error="error"})(gp||(gp={}));function ph(r,s,o){return o===void 0&&(o="/"),mh(r,s,o)}function mh(r,s,o,c){let m=typeof s=="string"?sn(s):s,p=Xo(m.pathname||"/",o);if(p==null)return null;let u=rm(r);uh(u);let x=null;for(let h=0;x==null&&h<u.length;++h){let b=kh(p);x=Sh(u[h],b)}return x}function rm(r,s,o,c){s===void 0&&(s=[]),o===void 0&&(o=[]),c===void 0&&(c="");let m=(p,u,x)=>{let h={relativePath:x===void 0?p.path||"":x,caseSensitive:p.caseSensitive===!0,childrenIndex:u,route:p};h.relativePath.startsWith("/")&&(Ee(h.relativePath.startsWith(c),'Absolute route path "'+h.relativePath+'" nested under path '+('"'+c+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),h.relativePath=h.relativePath.slice(c.length));let b=la([c,h.relativePath]),y=o.concat(h);p.children&&p.children.length>0&&(Ee(p.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+b+'".')),rm(p.children,s,y,b)),!(p.path==null&&!p.index)&&s.push({path:b,score:vh(b,p.index),routesMeta:y})};return r.forEach((p,u)=>{var x;if(p.path===""||!((x=p.path)!=null&&x.includes("?")))m(p,u);else for(let h of im(p.path))m(p,u,h)}),s}function im(r){let s=r.split("/");if(s.length===0)return[];let[o,...c]=s,m=o.endsWith("?"),p=o.replace(/\?$/,"");if(c.length===0)return m?[p,""]:[p];let u=im(c.join("/")),x=[];return x.push(...u.map(h=>h===""?p:[p,h].join("/"))),m&&x.push(...u),x.map(h=>r.startsWith("/")&&h===""?"/":h)}function uh(r){r.sort((s,o)=>s.score!==o.score?o.score-s.score:jh(s.routesMeta.map(c=>c.childrenIndex),o.routesMeta.map(c=>c.childrenIndex)))}const fh=/^:[\w-]+$/,hh=3,gh=2,xh=1,bh=10,yh=-2,xp=r=>r==="*";function vh(r,s){let o=r.split("/"),c=o.length;return o.some(xp)&&(c+=yh),s&&(c+=gh),o.filter(m=>!xp(m)).reduce((m,p)=>m+(fh.test(p)?hh:p===""?xh:bh),c)}function jh(r,s){return r.length===s.length&&r.slice(0,-1).every((c,m)=>c===s[m])?r[r.length-1]-s[s.length-1]:0}function Sh(r,s,o){let{routesMeta:c}=r,m={},p="/",u=[];for(let x=0;x<c.length;++x){let h=c[x],b=x===c.length-1,y=p==="/"?s:s.slice(p.length)||"/",g=wh({path:h.relativePath,caseSensitive:h.caseSensitive,end:b},y),T=h.route;if(!g)return null;Object.assign(m,g.params),u.push({params:m,pathname:la([p,g.pathname]),pathnameBase:Rh(la([p,g.pathnameBase])),route:T}),g.pathnameBase!=="/"&&(p=la([p,g.pathnameBase]))}return u}function wh(r,s){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[o,c]=Ch(r.path,r.caseSensitive,r.end),m=s.match(o);if(!m)return null;let p=m[0],u=p.replace(/(.)\/+$/,"$1"),x=m.slice(1);return{params:c.reduce((b,y,g)=>{let{paramName:T,isOptional:E}=y;if(T==="*"){let R=x[g]||"";u=p.slice(0,p.length-R.length).replace(/(.)\/+$/,"$1")}const F=x[g];return E&&!F?b[T]=void 0:b[T]=(F||"").replace(/%2F/g,"/"),b},{}),pathname:p,pathnameBase:u,pattern:r}}function Ch(r,s,o){s===void 0&&(s=!1),o===void 0&&(o=!0),Qo(r==="*"||!r.endsWith("*")||r.endsWith("/*"),'Route path "'+r+'" will be treated as if it were '+('"'+r.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+r.replace(/\*$/,"/*")+'".'));let c=[],m="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(u,x,h)=>(c.push({paramName:x,isOptional:h!=null}),h?"/?([^\\/]+)?":"/([^\\/]+)"));return r.endsWith("*")?(c.push({paramName:"*"}),m+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):o?m+="\\/*$":r!==""&&r!=="/"&&(m+="(?:(?=\\/|$))"),[new RegExp(m,s?void 0:"i"),c]}function kh(r){try{return r.split("/").map(s=>decodeURIComponent(s).replace(/\//g,"%2F")).join("/")}catch(s){return Qo(!1,'The URL path "'+r+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+s+").")),r}}function Xo(r,s){if(s==="/")return r;if(!r.toLowerCase().startsWith(s.toLowerCase()))return null;let o=s.endsWith("/")?s.length-1:s.length,c=r.charAt(o);return c&&c!=="/"?null:r.slice(o)||"/"}const Ah=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Nh=r=>Ah.test(r);function Th(r,s){s===void 0&&(s="/");let{pathname:o,search:c="",hash:m=""}=typeof r=="string"?sn(r):r,p;if(o)if(Nh(o))p=o;else{if(o.includes("//")){let u=o;o=o.replace(/\/\/+/g,"/"),Qo(!1,"Pathnames cannot have embedded double slashes - normalizing "+(u+" -> "+o))}o.startsWith("/")?p=bp(o.substring(1),"/"):p=bp(o,s)}else p=s;return{pathname:p,search:Ih(c),hash:Ph(m)}}function bp(r,s){let o=s.replace(/\/+$/,"").split("/");return r.split("/").forEach(m=>{m===".."?o.length>1&&o.pop():m!=="."&&o.push(m)}),o.length>1?o.join("/"):"/"}function Ro(r,s,o,c){return"Cannot include a '"+r+"' character in a manually specified "+("`to."+s+"` field ["+JSON.stringify(c)+"].  Please separate it out to the ")+("`to."+o+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Eh(r){return r.filter((s,o)=>o===0||s.route.path&&s.route.path.length>0)}function sm(r,s){let o=Eh(r);return s?o.map((c,m)=>m===o.length-1?c.pathname:c.pathnameBase):o.map(c=>c.pathnameBase)}function om(r,s,o,c){c===void 0&&(c=!1);let m;typeof r=="string"?m=sn(r):(m=Xn({},r),Ee(!m.pathname||!m.pathname.includes("?"),Ro("?","pathname","search",m)),Ee(!m.pathname||!m.pathname.includes("#"),Ro("#","pathname","hash",m)),Ee(!m.search||!m.search.includes("#"),Ro("#","search","hash",m)));let p=r===""||m.pathname==="",u=p?"/":m.pathname,x;if(u==null)x=o;else{let g=s.length-1;if(!c&&u.startsWith("..")){let T=u.split("/");for(;T[0]==="..";)T.shift(),g-=1;m.pathname=T.join("/")}x=g>=0?s[g]:"/"}let h=Th(m,x),b=u&&u!=="/"&&u.endsWith("/"),y=(p||u===".")&&o.endsWith("/");return!h.pathname.endsWith("/")&&(b||y)&&(h.pathname+="/"),h}const la=r=>r.join("/").replace(/\/\/+/g,"/"),Rh=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),Ih=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,Ph=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function Bh(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}const lm=["post","put","patch","delete"];new Set(lm);const zh=["get",...lm];new Set(zh);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Zn(){return Zn=Object.assign?Object.assign.bind():function(r){for(var s=1;s<arguments.length;s++){var o=arguments[s];for(var c in o)Object.prototype.hasOwnProperty.call(o,c)&&(r[c]=o[c])}return r},Zn.apply(this,arguments)}const Zo=v.createContext(null),Mh=v.createContext(null),ka=v.createContext(null),wi=v.createContext(null),Aa=v.createContext({outlet:null,matches:[],isDataRoute:!1}),cm=v.createContext(null);function Oh(r,s){let{relative:o}=s===void 0?{}:s;er()||Ee(!1);let{basename:c,navigator:m}=v.useContext(ka),{hash:p,pathname:u,search:x}=pm(r,{relative:o}),h=u;return c!=="/"&&(h=u==="/"?c:la([c,u])),m.createHref({pathname:h,search:x,hash:p})}function er(){return v.useContext(wi)!=null}function ca(){return er()||Ee(!1),v.useContext(wi).location}function dm(r){v.useContext(ka).static||v.useLayoutEffect(r)}function tr(){let{isDataRoute:r}=v.useContext(Aa);return r?Kh():Dh()}function Dh(){er()||Ee(!1);let r=v.useContext(Zo),{basename:s,future:o,navigator:c}=v.useContext(ka),{matches:m}=v.useContext(Aa),{pathname:p}=ca(),u=JSON.stringify(sm(m,o.v7_relativeSplatPath)),x=v.useRef(!1);return dm(()=>{x.current=!0}),v.useCallback(function(b,y){if(y===void 0&&(y={}),!x.current)return;if(typeof b=="number"){c.go(b);return}let g=om(b,JSON.parse(u),p,y.relative==="path");r==null&&s!=="/"&&(g.pathname=g.pathname==="/"?s:la([s,g.pathname])),(y.replace?c.replace:c.push)(g,y.state,y)},[s,c,u,p,r])}function pm(r,s){let{relative:o}=s===void 0?{}:s,{future:c}=v.useContext(ka),{matches:m}=v.useContext(Aa),{pathname:p}=ca(),u=JSON.stringify(sm(m,c.v7_relativeSplatPath));return v.useMemo(()=>om(r,JSON.parse(u),p,o==="path"),[r,u,p,o])}function Wh(r,s){return Lh(r,s)}function Lh(r,s,o,c){er()||Ee(!1);let{navigator:m}=v.useContext(ka),{matches:p}=v.useContext(Aa),u=p[p.length-1],x=u?u.params:{};u&&u.pathname;let h=u?u.pathnameBase:"/";u&&u.route;let b=ca(),y;if(s){var g;let z=typeof s=="string"?sn(s):s;h==="/"||(g=z.pathname)!=null&&g.startsWith(h)||Ee(!1),y=z}else y=b;let T=y.pathname||"/",E=T;if(h!=="/"){let z=h.replace(/^\//,"").split("/");E="/"+T.replace(/^\//,"").split("/").slice(z.length).join("/")}let F=ph(r,{pathname:E}),R=$h(F&&F.map(z=>Object.assign({},z,{params:Object.assign({},x,z.params),pathname:la([h,m.encodeLocation?m.encodeLocation(z.pathname).pathname:z.pathname]),pathnameBase:z.pathnameBase==="/"?h:la([h,m.encodeLocation?m.encodeLocation(z.pathnameBase).pathname:z.pathnameBase])})),p,o,c);return s&&R?v.createElement(wi.Provider,{value:{location:Zn({pathname:"/",search:"",hash:"",state:null,key:"default"},y),navigationType:oa.Pop}},R):R}function Hh(){let r=Vh(),s=Bh(r)?r.status+" "+r.statusText:r instanceof Error?r.message:JSON.stringify(r),o=r instanceof Error?r.stack:null,m={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return v.createElement(v.Fragment,null,v.createElement("h2",null,"Unexpected Application Error!"),v.createElement("h3",{style:{fontStyle:"italic"}},s),o?v.createElement("pre",{style:m},o):null,null)}const Fh=v.createElement(Hh,null);class Uh extends v.Component{constructor(s){super(s),this.state={location:s.location,revalidation:s.revalidation,error:s.error}}static getDerivedStateFromError(s){return{error:s}}static getDerivedStateFromProps(s,o){return o.location!==s.location||o.revalidation!=="idle"&&s.revalidation==="idle"?{error:s.error,location:s.location,revalidation:s.revalidation}:{error:s.error!==void 0?s.error:o.error,location:o.location,revalidation:s.revalidation||o.revalidation}}componentDidCatch(s,o){console.error("React Router caught the following error during render",s,o)}render(){return this.state.error!==void 0?v.createElement(Aa.Provider,{value:this.props.routeContext},v.createElement(cm.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function _h(r){let{routeContext:s,match:o,children:c}=r,m=v.useContext(Zo);return m&&m.static&&m.staticContext&&(o.route.errorElement||o.route.ErrorBoundary)&&(m.staticContext._deepestRenderedBoundaryId=o.route.id),v.createElement(Aa.Provider,{value:s},c)}function $h(r,s,o,c){var m;if(s===void 0&&(s=[]),o===void 0&&(o=null),c===void 0&&(c=null),r==null){var p;if(!o)return null;if(o.errors)r=o.matches;else if((p=c)!=null&&p.v7_partialHydration&&s.length===0&&!o.initialized&&o.matches.length>0)r=o.matches;else return null}let u=r,x=(m=o)==null?void 0:m.errors;if(x!=null){let y=u.findIndex(g=>g.route.id&&(x==null?void 0:x[g.route.id])!==void 0);y>=0||Ee(!1),u=u.slice(0,Math.min(u.length,y+1))}let h=!1,b=-1;if(o&&c&&c.v7_partialHydration)for(let y=0;y<u.length;y++){let g=u[y];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(b=y),g.route.id){let{loaderData:T,errors:E}=o,F=g.route.loader&&T[g.route.id]===void 0&&(!E||E[g.route.id]===void 0);if(g.route.lazy||F){h=!0,b>=0?u=u.slice(0,b+1):u=[u[0]];break}}}return u.reduceRight((y,g,T)=>{let E,F=!1,R=null,z=null;o&&(E=x&&g.route.id?x[g.route.id]:void 0,R=g.route.errorElement||Fh,h&&(b<0&&T===0?(qh("route-fallback"),F=!0,z=null):b===T&&(F=!0,z=g.route.hydrateFallbackElement||null)));let P=s.concat(u.slice(0,T+1)),I=()=>{let U;return E?U=R:F?U=z:g.route.Component?U=v.createElement(g.route.Component,null):g.route.element?U=g.route.element:U=y,v.createElement(_h,{match:g,routeContext:{outlet:y,matches:P,isDataRoute:o!=null},children:U})};return o&&(g.route.ErrorBoundary||g.route.errorElement||T===0)?v.createElement(Uh,{location:o.location,revalidation:o.revalidation,component:R,error:E,children:I(),routeContext:{outlet:null,matches:P,isDataRoute:!0}}):I()},null)}var mm=(function(r){return r.UseBlocker="useBlocker",r.UseRevalidator="useRevalidator",r.UseNavigateStable="useNavigate",r})(mm||{}),um=(function(r){return r.UseBlocker="useBlocker",r.UseLoaderData="useLoaderData",r.UseActionData="useActionData",r.UseRouteError="useRouteError",r.UseNavigation="useNavigation",r.UseRouteLoaderData="useRouteLoaderData",r.UseMatches="useMatches",r.UseRevalidator="useRevalidator",r.UseNavigateStable="useNavigate",r.UseRouteId="useRouteId",r})(um||{});function Gh(r){let s=v.useContext(Zo);return s||Ee(!1),s}function Yh(r){let s=v.useContext(Mh);return s||Ee(!1),s}function Jh(r){let s=v.useContext(Aa);return s||Ee(!1),s}function fm(r){let s=Jh(),o=s.matches[s.matches.length-1];return o.route.id||Ee(!1),o.route.id}function Vh(){var r;let s=v.useContext(cm),o=Yh(),c=fm();return s!==void 0?s:(r=o.errors)==null?void 0:r[c]}function Kh(){let{router:r}=Gh(mm.UseNavigateStable),s=fm(um.UseNavigateStable),o=v.useRef(!1);return dm(()=>{o.current=!0}),v.useCallback(function(m,p){p===void 0&&(p={}),o.current&&(typeof m=="number"?r.navigate(m):r.navigate(m,Zn({fromRouteId:s},p)))},[r,s])}const yp={};function qh(r,s,o){yp[r]||(yp[r]=!0)}function Qh(r,s){r==null||r.v7_startTransition,r==null||r.v7_relativeSplatPath}function ee(r){Ee(!1)}function Xh(r){let{basename:s="/",children:o=null,location:c,navigationType:m=oa.Pop,navigator:p,static:u=!1,future:x}=r;er()&&Ee(!1);let h=s.replace(/^\/*/,"/"),b=v.useMemo(()=>({basename:h,navigator:p,static:u,future:Zn({v7_relativeSplatPath:!1},x)}),[h,x,p,u]);typeof c=="string"&&(c=sn(c));let{pathname:y="/",search:g="",hash:T="",state:E=null,key:F="default"}=c,R=v.useMemo(()=>{let z=Xo(y,h);return z==null?null:{location:{pathname:z,search:g,hash:T,state:E,key:F},navigationType:m}},[h,y,g,T,E,F,m]);return R==null?null:v.createElement(ka.Provider,{value:b},v.createElement(wi.Provider,{children:o,value:R}))}function Zh(r){let{children:s,location:o}=r;return Wh(Go(s),o)}new Promise(()=>{});function Go(r,s){s===void 0&&(s=[]);let o=[];return v.Children.forEach(r,(c,m)=>{if(!v.isValidElement(c))return;let p=[...s,m];if(c.type===v.Fragment){o.push.apply(o,Go(c.props.children,p));return}c.type!==ee&&Ee(!1),!c.props.index||!c.props.children||Ee(!1);let u={id:c.props.id||p.join("-"),caseSensitive:c.props.caseSensitive,element:c.props.element,Component:c.props.Component,index:c.props.index,path:c.props.path,loader:c.props.loader,action:c.props.action,errorElement:c.props.errorElement,ErrorBoundary:c.props.ErrorBoundary,hasErrorBoundary:c.props.ErrorBoundary!=null||c.props.errorElement!=null,shouldRevalidate:c.props.shouldRevalidate,handle:c.props.handle,lazy:c.props.lazy};c.props.children&&(u.children=Go(c.props.children,p)),o.push(u)}),o}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Yo(){return Yo=Object.assign?Object.assign.bind():function(r){for(var s=1;s<arguments.length;s++){var o=arguments[s];for(var c in o)Object.prototype.hasOwnProperty.call(o,c)&&(r[c]=o[c])}return r},Yo.apply(this,arguments)}function eg(r,s){if(r==null)return{};var o={},c=Object.keys(r),m,p;for(p=0;p<c.length;p++)m=c[p],!(s.indexOf(m)>=0)&&(o[m]=r[m]);return o}function tg(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function ag(r,s){return r.button===0&&(!s||s==="_self")&&!tg(r)}const ng=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],rg="6";try{window.__reactRouterVersion=rg}catch{}const ig="startTransition",vp=Ef[ig];function sg(r){let{basename:s,children:o,future:c,window:m}=r,p=v.useRef();p.current==null&&(p.current=lh({window:m,v5Compat:!0}));let u=p.current,[x,h]=v.useState({action:u.action,location:u.location}),{v7_startTransition:b}=c||{},y=v.useCallback(g=>{b&&vp?vp(()=>h(g)):h(g)},[h,b]);return v.useLayoutEffect(()=>u.listen(y),[u,y]),v.useEffect(()=>Qh(c),[c]),v.createElement(Xh,{basename:s,children:o,location:x.location,navigationType:x.action,navigator:u,future:c})}const og=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",lg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Se=v.forwardRef(function(s,o){let{onClick:c,relative:m,reloadDocument:p,replace:u,state:x,target:h,to:b,preventScrollReset:y,viewTransition:g}=s,T=eg(s,ng),{basename:E}=v.useContext(ka),F,R=!1;if(typeof b=="string"&&lg.test(b)&&(F=b,og))try{let U=new URL(window.location.href),q=b.startsWith("//")?new URL(U.protocol+b):new URL(b),ie=Xo(q.pathname,E);q.origin===U.origin&&ie!=null?b=ie+q.search+q.hash:R=!0}catch{}let z=Oh(b,{relative:m}),P=cg(b,{replace:u,state:x,target:h,preventScrollReset:y,relative:m,viewTransition:g});function I(U){c&&c(U),U.defaultPrevented||P(U)}return v.createElement("a",Yo({},T,{href:F||z,onClick:R||p?c:I,ref:o,target:h}))});var jp;(function(r){r.UseScrollRestoration="useScrollRestoration",r.UseSubmit="useSubmit",r.UseSubmitFetcher="useSubmitFetcher",r.UseFetcher="useFetcher",r.useViewTransitionState="useViewTransitionState"})(jp||(jp={}));var Sp;(function(r){r.UseFetcher="useFetcher",r.UseFetchers="useFetchers",r.UseScrollRestoration="useScrollRestoration"})(Sp||(Sp={}));function cg(r,s){let{target:o,replace:c,state:m,preventScrollReset:p,relative:u,viewTransition:x}=s===void 0?{}:s,h=tr(),b=ca(),y=pm(r,{relative:u});return v.useCallback(g=>{if(ag(g,o)){g.preventDefault();let T=c!==void 0?c:vi(b)===vi(y);h(r,{replace:T,state:m,preventScrollReset:p,relative:u,viewTransition:x})}},[b,h,y,c,m,o,r,p,u,x])}function dg(){const{pathname:r}=ca();return v.useEffect(()=>{window.scrollTo(0,0),document.documentElement.scrollTop=0,document.body.scrollTop=0,setTimeout(()=>{window.scrollTo(0,0),document.documentElement.scrollTop=0,document.body.scrollTop=0},0),setTimeout(()=>{window.scrollTo(0,0),document.documentElement.scrollTop=0,document.body.scrollTop=0},10)},[r]),null}function pg(){const r="ଆମ ମହାବିଦ୍ୟାଳୟ ରେ ଆପଣଙ୍କୁ ସ୍ୱାଗତ | Creative Techno College, Angul — AICTE Approved & Affiliated to Utkal University | Admissions Open for 2026-27 | BBA | BCA | B.Sc (CS) | B.Sc (Data Science) | 100% Placement Assistance | Contact: +91 9778427170";return e.jsx("div",{className:"marquee-bar",children:e.jsxs("div",{className:"marquee-track-wrap",children:[e.jsx("span",{className:"marquee-item",children:r}),e.jsx("span",{className:"marquee-item marquee-odia",children:"ଆମ ମହାବିଦ୍ୟାଳୟ ରେ ଆପଣଙ୍କୁ ସ୍ୱାଗତ |  "}),e.jsx("span",{className:"marquee-item",children:r}),e.jsx("span",{className:"marquee-item marquee-odia",children:"ଆମ ମହାବିଦ୍ୟାଳୟ ରେ ଆପଣଙ୍କୁ ସ୍ୱାଗତ |  "})]})})}const mg=[{label:"Home",to:"/"},{label:"About",children:[{label:"About Trust",to:"/about/trust"},{label:"About CTC",to:"/about/ctc"},{label:"Our Team",to:"/about/team"}]},{label:"Admission",to:"/admission"},{label:"Academics",children:[{label:"Courses",children:[{label:"Regular Courses",to:"/academics/regular"},{label:"Value Added Courses",to:"/academics/value-added"}]},{label:"Enhancement Programs",to:"/academics/enhancement"}]},{label:"Placement",children:[{label:"Development Program",to:"/placement/programs"},{label:"Placement Statistics",to:"/placement/statistics"},{label:"Placement Brochure",to:"/placement/brochure"}]},{label:"Gymkhana",to:"/gymkhana"},{label:"Gallery",to:"/gallery"},{label:"IQAC",children:[{label:"IQAC Item 1",to:"/iqac/item1"},{label:"IQAC Item 2",to:"/iqac/item2"},{label:"IQAC Item 3",to:"/iqac/item3"},{label:"IQAC Item 4",to:"/iqac/item4"}]},{label:"AICTE",children:[{label:"LOA 2024-25",to:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/LOA Report 2024-2025.PDF",external:!0,newTab:!0},{label:"EOA 2025-26",to:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/EOA Report 2025-26.PDF",external:!0,newTab:!0},{label:"Documents",to:"/aicte/documents"},{label:"Mandatory Disclosure",to:"/aicte/mandatory-disclosure"}]},{label:"CKF Skills",to:"/ckf-skills"},{label:"Contacts",to:"/contacts"},{label:"ICC",to:"/icc"},{label:"GRC",to:"/grc"},{label:"Logins",children:[{label:"Portal Login",to:"/login"},{label:"NBA",to:"/nba"},{label:"NAAC",to:"/naac"}]}],wp="#0a1628",Cp="#e8f0fe",Lt={dropdown:{position:"absolute",top:"100%",left:0,minWidth:210,background:wp,borderRadius:10,boxShadow:"0 8px 32px rgba(10,22,40,0.35)",listStyle:"none",padding:"6px 0",margin:0,zIndex:9999,border:"1px solid rgba(255,255,255,0.1)"},subDropdown:{position:"absolute",top:0,left:"100%",minWidth:210,background:wp,borderRadius:10,boxShadow:"0 8px 32px rgba(10,22,40,0.35)",listStyle:"none",padding:"6px 0",margin:0,zIndex:9999,border:"1px solid rgba(255,255,255,0.1)"},mobileNested:{position:"static",boxShadow:"none",borderRadius:0,paddingLeft:18,background:"rgba(0,0,0,0.2)",listStyle:"none",margin:0,border:"none"},li:{position:"relative"},link:{display:"block",padding:"9px 20px",color:Cp,textDecoration:"none",fontSize:"0.88rem",fontWeight:600,whiteSpace:"nowrap"},trigger:{display:"flex",alignItems:"center",gap:6,padding:"9px 20px",color:Cp,fontSize:"0.88rem",fontWeight:600,whiteSpace:"nowrap",cursor:"pointer",userSelect:"none"}};function hm({item:r,isMobile:s,onClose:o}){const[c,m]=v.useState(!1),p=()=>m(b=>!b),u=()=>m(!0),x=()=>m(!1);if(!r.children){const b=r.external?e.jsx("a",{href:r.to,target:r.newTab?"_blank":"_self",rel:"noreferrer",style:Lt.link,onClick:o,children:r.label}):e.jsx(Se,{to:r.to,style:Lt.link,onClick:o,children:r.label});return e.jsx("li",{style:Lt.li,onMouseEnter:y=>{var g;return((g=y.currentTarget.querySelector("a,span"))==null?void 0:g.style)&&(y.currentTarget.style.background="#2563eb")},onMouseLeave:y=>y.currentTarget.style.background="",children:b})}const h=s?Lt.mobileNested:Lt.subDropdown;return e.jsxs("li",{style:Lt.li,onMouseEnter:s?void 0:u,onMouseLeave:s?void 0:x,children:[e.jsxs("div",{style:{...Lt.trigger,background:c?"#2563eb":""},onClick:s?p:void 0,children:[r.label,e.jsx("i",{className:"fa-solid fa-chevron-right",style:{fontSize:"0.5rem",marginLeft:"auto",transform:c?"rotate(90deg)":"none",transition:"transform 0.22s"}})]}),c&&e.jsx("ul",{style:h,children:r.children.map((b,y)=>e.jsx(hm,{item:b,isMobile:s,onClose:o},y))})]})}function ug({item:r,isMobile:s,onClose:o,isActive:c}){const[m,p]=v.useState(!1),u=ca();v.useEffect(()=>{p(!1)},[u]);const x=()=>{s||p(!0)},h=()=>{s||p(!1)},b=()=>{s&&p(y=>!y)};return e.jsxs("li",{className:"nav-item",style:{position:"relative"},onMouseEnter:x,onMouseLeave:h,children:[e.jsxs("span",{className:`nav-trigger${c?" active":""}`,onClick:b,children:[r.label,e.jsx("i",{className:"fa-solid fa-chevron-down nav-arrow",style:{transform:m?"rotate(180deg)":"rotate(0)",transition:"transform 0.22s"}})]}),m&&e.jsx("ul",{style:s?{...Lt.dropdown,position:"static",boxShadow:"none",background:"rgba(0,0,0,0.2)",border:"none"}:Lt.dropdown,children:r.children.map((y,g)=>e.jsx(hm,{item:y,isMobile:s,onClose:()=>{p(!1),o()}},g))})]})}function fg(){const[r,s]=v.useState(!1),o=ca();return v.useEffect(()=>{s(!1)},[o]),v.useEffect(()=>{const c=m=>{m.target.closest(".navbar")||s(!1)};return document.addEventListener("mousedown",c),()=>document.removeEventListener("mousedown",c)},[]),e.jsxs("nav",{className:"navbar",children:[e.jsx("ul",{className:`nav-list${r?" open":""}`,children:mg.map((c,m)=>c.children?e.jsx(ug,{item:c,isMobile:r,onClose:()=>s(!1),isActive:o.pathname.startsWith("/"+c.label.toLowerCase())},m):e.jsx("li",{className:"nav-item",children:e.jsx(Se,{to:c.to,className:`nav-link${o.pathname===c.to?" active":""}`,onClick:()=>s(!1),children:c.label})},m))}),e.jsxs("button",{className:`hamburger${r?" open":""}`,onClick:()=>s(c=>!c),"aria-label":"Toggle menu",children:[e.jsx("span",{}),e.jsx("span",{}),e.jsx("span",{})]})]})}function hg(){return e.jsxs("footer",{className:"site-footer",children:[e.jsxs("div",{className:"footer-grid",children:[e.jsxs("div",{className:"footer-brand",children:[e.jsx("img",{src:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/LOGO FINAL.png",alt:"CTC Logo"}),e.jsx("p",{children:"Creative Techno College, Angul is a premier institution committed to academic excellence, innovation, and holistic development. AICTE approved & affiliated to Utkal University."}),e.jsx("div",{className:"footer-social",children:[{icon:"fa-brands fa-facebook-f",href:"https://www.facebook.com/creativetechnocollege.angul"},{icon:"fa-brands fa-instagram",href:"https://www.instagram.com/creative_techno_college_angul"},{icon:"fa-brands fa-youtube",href:"https://www.youtube.com/@creativetechnocollegeiangu9750"},{icon:"fa-brands fa-linkedin-in",href:"https://www.linkedin.com/in/creative-techno-college-angul/"},{icon:"fa-brands fa-twitter",href:"https://x.com/creative__1998?lang=en"}].map((r,s)=>e.jsx("a",{href:r.href,target:"_blank",rel:"noreferrer",children:e.jsx("i",{className:r.icon})},s))})]}),e.jsxs("div",{className:"footer-col",children:[e.jsx("h4",{children:"Quick Links"}),[{label:"Home",to:"/"},{label:"About CTC",to:"/about/ctc"},{label:"About Trust",to:"/about/trust"},{label:"Our Team",to:"/about/team"},{label:"Admission",to:"/admission"},{label:"Gallery",to:"/gallery"},{label:"Contacts",to:"/contacts"},{label:"ICC",to:"/icc"}].map((r,s)=>e.jsx(Se,{to:r.to,children:r.label},s))]}),e.jsxs("div",{className:"footer-col",children:[e.jsx("h4",{children:"College Services"}),[{label:"Academics",to:"/academics/regular"},{label:"Placement",to:"/placement/statistics"},{label:"Gymkhana",to:"/gymkhana"},{label:"Technocrat",to:"/gymkhana/technocrat"},{label:"Disha & CSR",to:"/gymkhana/disha-csr"},{label:"Sports",to:"/gymkhana/sports"},{label:"Cultural",to:"/gymkhana/cultural"},{label:"Portal Login",to:"/login"}].map((r,s)=>e.jsx(Se,{to:r.to,children:r.label},s))]}),e.jsxs("div",{className:"footer-col",children:[e.jsx("h4",{children:"Contact Us"}),e.jsxs("div",{className:"footer-contact-item",children:[e.jsx("i",{className:"fa-solid fa-location-dot"}),e.jsx("span",{children:"Creative Techno College, Angul, Odisha – 759122"})]}),e.jsxs("div",{className:"footer-contact-item",children:[e.jsx("i",{className:"fa-solid fa-phone"}),e.jsx("span",{children:"+91 9778427170 / 9668284222"})]}),e.jsxs("div",{className:"footer-contact-item",children:[e.jsx("i",{className:"fa-solid fa-envelope"}),e.jsx("span",{children:"principal.creativecollege@gmail.com"})]}),e.jsxs("div",{className:"footer-contact-item",children:[e.jsx("i",{className:"fa-solid fa-clock"}),e.jsx("span",{children:"Mon – Sat: 9:00 AM – 5:00 PM"})]})]})]}),e.jsxs("div",{className:"footer-bottom",children:[e.jsxs("p",{children:["© 2010 – 2025 ",e.jsx("span",{children:"Creative Techno College"}),". All Rights Reserved."]}),e.jsxs("p",{children:["A Unit of ",e.jsx("span",{children:"Creative Knowledge Foundation"})]}),e.jsxs("p",{children:["Developed by ",e.jsx("span",{children:"Technocrat Club"})]})]})]})}function gg({isOpen:r,hasUnread:s,onClick:o}){return e.jsxs("button",{id:"ctc-chatbot-fab",className:"ctc-chatbot-fab",onClick:o,"aria-label":r?"Close chat":"Open CTC Assistant",title:r?"Close chat":"Chat with CTC Bot",children:[s&&!r&&e.jsx("span",{className:"ctc-fab-dot","aria-hidden":"true"}),e.jsx("span",{className:`ctc-fab-icon ${r?"open":""}`,"aria-hidden":"true",children:r?"✕":e.jsx("img",{src:"/CTC%20NEW%20REACT%20WEBSITE/images/chatbot/technocrat.png",alt:"Technocrat Logo",className:"fab-img"})})]})}function xg(r){return r.split(/(\*\*[^*]+\*\*)/g).map((o,c)=>o.startsWith("**")&&o.endsWith("**")?e.jsx("strong",{children:o.slice(2,-2)},c):o)}function bg(r){return new Intl.DateTimeFormat("en-IN",{hour:"2-digit",minute:"2-digit",hour12:!0}).format(r)}function yg({message:r,onQuickReply:s}){const o=r.sender==="bot";return e.jsxs("div",{className:`ctc-message ${o?"bot":"user"}`,children:[o&&e.jsx("div",{className:"ctc-msg-avatar",role:"img","aria-label":"CTC Bot",children:e.jsx("img",{src:"/CTC%20NEW%20REACT%20WEBSITE/images/chatbot/technocrat.png",alt:"CTC Bot",className:"ctc-avatar-img"})}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",maxWidth:"100%"},children:[e.jsxs("div",{className:"ctc-msg-bubble",children:[e.jsx("span",{className:"ctc-msg-text",children:xg(r.text)}),o&&r.links&&r.links.length>0&&e.jsx("div",{className:"ctc-msg-links",children:r.links.map((c,m)=>e.jsxs(Se,{to:c.path,className:"ctc-msg-link",title:`Go to ${c.label}`,children:["🔗 ",c.label]},m))})]}),e.jsx("span",{className:"ctc-msg-time",children:bg(r.timestamp)})]})]})}const vg=[{id:"greeting",keywords:["hello","hi","hey","good morning","good afternoon","good evening","hola","namaste","greetings"],response:{text:`👋 Hello! Welcome to **Creative Techno College, Angul**!

I'm Neo  — your virtual guide. I can help you with admissions, courses, placements, events, and much more! What would you like to know?`,quickReplies:["Admissions","Courses","Placements","Contact Us"],links:[]}},{id:"thanks",keywords:["thank","thanks","thank you","thankyou","thx","ty","appreciate","helpful"],response:{text:`😊 You're most welcome! It's my pleasure to assist you.

Is there anything else you'd like to know about CTC?`,quickReplies:["Courses","Admissions","Contact Us"],links:[]}},{id:"bye",keywords:["bye","goodbye","see you","later","take care","exit","close"],response:{text:`👋 Goodbye! Have a wonderful day!

Feel free to come back anytime. CTC is always here to help you on your academic journey! 🎓`,quickReplies:[],links:[]}},{id:"about",keywords:["about ctc","about college","what is ctc","creative techno","college info","tell me about","history","established","founded","est"],response:{text:`🏛️ **Creative Techno College (CTC), Angul** is a premier technical institution established in **2010**, affiliated to **Utkal University** and approved by **AICTE**.

Located in Angul, Odisha, CTC offers world-class engineering education under the aegis of the **Creative Knowledge Foundation (CKF)**.

🎯 **Vision:** To be a centre of excellence for technical education
📚 **Mission:** Empower students with knowledge, skills & values`,quickReplies:["Our Team","About Trust","Courses","Accreditation"],links:[{label:"About CTC",path:"/about/ctc"},{label:"About Trust",path:"/about/trust"}]}},{id:"trust",keywords:["trust","ckf","creative knowledge foundation","management","organization"],response:{text:`🏢 **Creative Knowledge Foundation (CKF)** is the parent organization that runs Creative Techno College.

CKF is committed to fostering quality education and skill development across Odisha. They also run **CKF Skills** — a dedicated skill training wing.`,quickReplies:["About CTC","Our Team","CKF Skills"],links:[{label:"About Trust",path:"/about/trust"},{label:"CKF Skills",path:"/ckf-skills"}]}},{id:"team",keywords:["team","principal","faculty","staff","professor","teacher","director","our team","management team"],response:{text:`👩‍🏫 **CTC Faculty & Management Team**

CTC is led by an experienced team of academicians and industry professionals dedicated to student success.

Visit our Our Team page to meet the Principal, HODs, and teaching staff.`,quickReplies:["About CTC","Contact Us"],links:[{label:"Our Team",path:"/about/team"}]}},{id:"admission",keywords:["admission","admissions","apply","join","enroll","enroll","how to apply","application","seat","intake"],response:{text:`🎓 **Admissions at CTC — 2024-25**

📋 **Eligibility:** 10+2 / HSC pass with Physics, Chemistry, Maths (PCM)
📅 **Process:** Apply online → Submit documents → Merit list → Fee payment
📑 **Documents:** Mark sheets, Transfer Certificate, Caste Certificate (if applicable), Passport photos

`,quickReplies:["Apply Now","Fee Structure","Courses","Contact Us"],links:[{label:"Admission Details",path:"/admission"},{label:"Apply Now",path:"/admission/apply"}]}},{id:"fee",keywords:["fee","fees","cost","tuition","payment","scholarship","fee structure","how much"],response:{text:`💰 **Fee Structure at CTC**

CTC offers affordable fee structures with options for:
• 🏦 Bank loan assistance
• 🎖️ Government scholarships (SC/ST/OBC)
• 📊 Merit-based fee concessions

For exact fee details, please contact our admission office directly or visit the Admission page.`,quickReplies:["Apply Now","Contact Us","Admission"],links:[{label:"Admission Info",path:"/admission"},{label:"Apply Online",path:"/admission/apply"},{label:"Contact Office",path:"/contacts"}]}},{id:"courses",keywords:["course","courses","program","programs","stream","degree","bba","bca","bsc cs","bsc-cs","b.sc cs","bsc computer science","b.sc computer science","computer science","bsc ds","bsc-ds","b.sc ds","bsc data science","b.sc data science","data science"],response:{text:`📚 **Courses Offered at CTC**

🎓 **UG Programs:**
• **BBA**
• **BCA**
• **B.Sc Computer Science (B.Sc CS)**
• **B.Sc Data Science (B.Sc DS)**

These courses are designed to provide strong academic knowledge and career-oriented skills.`,quickReplies:["BBA","BCA","B.Sc CS","B.Sc DS","Admissions"],links:[{label:"Courses",path:"/academics/regular"}]}},{id:"bba",keywords:["bba","bachelor of business administration","management course","business administration"],response:{text:`📘 **BBA at CTC**

The **BBA** program helps students build knowledge in management, business, communication, and leadership skills.

It is a good choice for students interested in business, administration, and corporate careers.`,quickReplies:["Admissions","Fee Structure","Courses"],links:[{label:"Courses",path:"/academics/regular"},{label:"Admission Details",path:"/admission"}]}},{id:"bca",keywords:["bca","bachelor of computer applications","computer application"],response:{text:`💻 **BCA at CTC**

The **BCA** program focuses on computer applications, programming, software development, and IT fundamentals.

It is ideal for students who want to build a career in the software and IT field.`,quickReplies:["Admissions","Fee Structure","Courses"],links:[{label:"Courses",path:"/academics/regular"},{label:"Admission Details",path:"/admission"}]}},{id:"bsc_cs",keywords:["bsc cs","bsc-cs","b.sc cs","bsc computer science","b.sc computer science","computer science course"],response:{text:`🖥️ **B.Sc Computer Science at CTC**

The **B.Sc CS** program covers computer fundamentals, programming, databases, software concepts, and problem-solving skills.

It is a strong option for students interested in computing and technology.`,quickReplies:["Admissions","Fee Structure","Courses"],links:[{label:"Courses",path:"/academics/regular"},{label:"Admission Details",path:"/admission"}]}},{id:"bsc_ds",keywords:["bsc ds","bsc-ds","b.sc ds","bsc data science","b.sc data science","data science course"],response:{text:`📊 **B.Sc Data Science at CTC**

The **B.Sc DS** program introduces students to data analysis, statistics, computing, and modern data-driven technologies.

It is suitable for students interested in analytics, data handling, and emerging tech careers.`,quickReplies:["Admissions","Fee Structure","Courses"],links:[{label:"Courses",path:"/academics/regular"},{label:"Admission Details",path:"/admission"}]}},{id:"value_added",keywords:["value added","value-added","certificate","certification","extra course","additional course"],response:{text:`📘 **Value-Added Courses at CTC**

CTC offers industry-oriented value-added certification programs that complement your degree:

• Programming & Software Development
• Digital Marketing
• Spoken English & Communication
• AutoCAD & Design Tools
• And more...

These courses prepare students for industry with practical skills beyond the classroom.`,quickReplies:["Regular Courses","Enhancement Programs","Placements"],links:[{label:"Value-Added Courses",path:"/academics/value-added"}]}},{id:"enhancement",keywords:["enhancement","personality","soft skill","spoken english","communication","development program"],response:{text:`🚀 **Enhancement Programs at CTC**

CTC's enhancement programs focus on holistic student development:

• 🗣️ Communication & Soft Skills
• 💼 Interview Preparation
• 🧠 Aptitude Training
• 🤝 Leadership & Teamwork
• 📊 Resume Building Workshops

These programs ensure our graduates are industry-ready!`,quickReplies:["Placements","Courses","Admissions"],links:[{label:"Enhancement Programs",path:"/academics/enhancement"}]}},{id:"placements",keywords:["placement","placements","job","jobs","recruit","recruiter","company","companies","package","ctc","salary","career","hire","campus"],response:{text:`💼 **Placements at CTC**

CTC has a strong placement record with students placed in top companies!

🏆 **Top Recruiters:** Infosys, TCS, Wipro, L&T, Tata Motors, NTPC, and many more
📈 **Placement Rate:** Consistently high year-on-year
💰 **Average Package:** Competitive salary packages

Our dedicated Placement Cell conducts drives, mock interviews & industry connects.`,quickReplies:["Placement Stats","Development Programs","Brochure","Courses"],links:[{label:"Placement Statistics",path:"/placement/statistics"},{label:"Development Programs",path:"/placement/programs"},{label:"Placement Brochure",path:"/placement/brochure"}]}},{id:"placement_stats",keywords:["placement statistics","placement record","how many students placed","stats","statistics","numbers","data"],response:{text:`📊 **Placement Statistics**

CTC proudly showcases impressive placement statistics year after year.

Visit our Placement Statistics page for detailed numbers, company-wise data, and branch-wise placement records.`,quickReplies:["Placements","Brochure","Courses"],links:[{label:"Placement Statistics",path:"/placement/statistics"},{label:"Placement Brochure",path:"/placement/brochure"}]}},{id:"gymkhana",keywords:["gymkhana","clubs","activities","extracurricular","extra curricular","student activities","student life"],response:{text:`🎉 **CTC Gymkhana — Student Activities Hub!**

CTC Gymkhana is the heart of student life with 4 vibrant wings:

🔧 **Technocrat** — Technical events & innovations
🎭 **Cultural** — Arts, dance, drama & cultural events
⚽ **Sports** — Inter-college & intra-college sports
🌱 **Disha CSR** — Community service & social responsibility`,quickReplies:["Technocrat","Cultural","Sports","Disha CSR"],links:[{label:"Gymkhana Home",path:"/gymkhana"},{label:"Technocrat",path:"/gymkhana/technocrat"},{label:"Cultural",path:"/gymkhana/cultural"},{label:"Sports",path:"/gymkhana/sports"}]}},{id:"technocrat",keywords:["technocrat","technical club","tech club","technical events","hackathon","coding club"],response:{text:`🔧 **Technocrat Club — CTC's Technical Wing**

Technocrat drives innovation and technical excellence:
• Hackathons & Coding Competitions
• Project Exhibitions
• Technical Workshops
• Industry Guest Lectures
• TechFest — our annual mega technical festival!`,quickReplies:["TechFest","Cultural","Sports","Gymkhana"],links:[{label:"Technocrat",path:"/gymkhana/technocrat"}]}},{id:"cultural",keywords:["cultural","dance","music","drama","arts","cultural event","cultural club","fest"],response:{text:`🎭 **Cultural Club — CTC's Creative Heart**

CTC's Cultural wing celebrates talent and creativity:
• Annual Cultural Fest
• Dance & Music Competitions
• Drama & Theatre
• Literary Events
• Fashion Shows & Art Exhibitions`,quickReplies:["Technocrat","Sports","Gymkhana"],links:[{label:"Cultural",path:"/gymkhana/cultural"}]}},{id:"sports",keywords:["sports","games","football","cricket","basketball","athletics","tournament","sport"],response:{text:`⚽ **Sports Club — CTC's Champion Spirit!**

CTC encourages sports excellence:
• Cricket, Football, Basketball, Volleyball
• Athletics & Track Events
• Indoor Games (Chess, Carrom, TT)
• Inter-college Tournaments
• State-level Sports Participation`,quickReplies:["Cultural","Technocrat","Gymkhana"],links:[{label:"Sports",path:"/gymkhana/sports"}]}},{id:"disha",keywords:["disha","csr","community","social","nss","volunteer","service","social responsibility"],response:{text:`🌱 **Disha & CSR Club — Giving Back to Society**

Disha is CTC's social responsibility wing:
• Blood Donation Camps
• Environmental Drives (plantation, cleanliness)
• Village Adoption Programs
• Awareness campaigns (health, literacy)
• Collaboration with NGOs`,quickReplies:["Cultural","Sports","Gymkhana"],links:[{label:"Disha CSR",path:"/gymkhana/disha-csr"}]}},{id:"techfest",keywords:["techfest","tech fest","technical festival","annual fest","annual festival","techfest 1","techfest 2","techfest 3"],response:{text:`🚀 **TechFest — CTC's Annual Technical Extravaganza!**

TechFest is our flagship event bringing together students, industry experts, and innovators!

We've had **3 incredible editions** so far:
• 🔵 TechFest 1 — The Beginning
• 🟡 TechFest 2 — Rising Higher
• 🔴 TechFest 3 — Innovation Unleashed`,quickReplies:["TechFest 1","TechFest 2","TechFest 3","Gymkhana"],links:[{label:"TechFest 1",path:"/gymkhana/techfest/1"},{label:"TechFest 2",path:"/gymkhana/techfest/2"},{label:"TechFest 3",path:"/gymkhana/techfest/3"}]}},{id:"contact",keywords:["contact","contacts","address","phone","number","email","location","where","how to reach","directions","reach us","call"],response:{text:`📍 **Contact Creative Techno College**

🏛️ **Address:**
Creative Techno College, Angul,
Odisha — 759001, India

📞 **Phone:** Available on contact page
📧 **Email:** Available on contact page
🗺️ **Location:** Angul, Odisha`,quickReplies:["About CTC","Admissions","Our Team"],links:[{label:"View Contact Page",path:"/contacts"}]}},{id:"naac",keywords:["naac","accreditation","grade","quality","assessment","accredited","naac grade"],response:{text:`⭐ **NAAC Accreditation — CTC**

CTC is proud to be assessed by **NAAC** (National Assessment and Accreditation Council).

Visit our NAAC page for the detailed accreditation report, criteria scores, and official documents.`,quickReplies:["NBA","About CTC","AICTE"],links:[{label:"NAAC Details",path:"/naac"}]}},{id:"nba",keywords:["nba","national board","program accreditation","nba accreditation"],response:{text:`🏆 **NBA Accreditation — CTC**

NBA (National Board of Accreditation) ensures our engineering programs meet national quality standards.

Visit our NBA page for accreditation details, program criteria, and documentation.`,quickReplies:["NAAC","Courses","About CTC"],links:[{label:"NBA Details",path:"/nba"}]}},{id:"aicte",keywords:["aicte","approval","approved","all india council","regulatory","government approval","mhrd"],response:{text:`✅ **AICTE Approval — CTC**

CTC is **AICTE (All India Council for Technical Education)** approved — the statutory body for technical education in India.

Our programs meet all AICTE norms and regulations, ensuring recognition across India.`,quickReplies:["NAAC","NBA","Courses"],links:[{label:"AICTE Documents",path:"/aicte/documents"},{label:"Mandatory Disclosure",path:"/aicte/mandatory-disclosure"}]}},{id:"icc",keywords:["icc","internal complaints","posh","harassment","grievance women","complaints committee","anti harassment"],response:{text:`🛡️ **Internal Complaints Committee (ICC)**

CTC's ICC is committed to providing a safe, respectful, and dignified environment for all students and staff.

• Handles complaints under POSH Act
• Confidential & impartial process
• Dedicated women's safety focus

For queries or complaints, contact the ICC through the official channel.`,quickReplies:["GRC","Contact Us","About CTC"],links:[{label:"ICC Details",path:"/icc"}]}},{id:"grc",keywords:["grc","grievance","redressal","complaint","grievance redressal","student complaint","dispute"],response:{text:`⚖️ **Grievance Redressal Committee (GRC)**

CTC's GRC ensures swift and fair resolution of student and staff grievances.

• Academic grievances
• Administrative issues
• Fee-related disputes
• Any other concerns

The committee ensures transparency and timely action.`,quickReplies:["ICC","Contact Us"],links:[{label:"GRC Details",path:"/grc"}]}},{id:"gallery",keywords:["gallery","photos","pictures","images","photo gallery","campus photos","campus pictures"],response:{text:`📸 **CTC Photo Gallery**

Explore beautiful moments from CTC campus life — events, fests, achievements, and more!

Visit the gallery to see our vibrant campus culture.`,quickReplies:["About CTC","Gymkhana","Contact Us"],links:[{label:"View Gallery",path:"/gallery"}]}},{id:"vikshit_bharat",keywords:["vikshit bharat","viksit bharat","developed india","vikshit","national initiative"],response:{text:`🇮🇳 **Vikshit Bharat Initiative at CTC**

CTC actively participates in the **Vikshit Bharat** (Developed India) national initiative — aligning education with India's vision for 2047.

Learn more about how CTC is contributing to this national mission.`,quickReplies:["About CTC","Courses"],links:[{label:"Vikshit Bharat",path:"/vikshit-bharat"}]}},{id:"login",keywords:["login","portal","student portal","staff portal","admin portal","sign in","log in","student login","faculty login"],response:{text:`🔐 **CTC Portals — Login Access**

Access your dedicated portal:

👨‍🎓 **Student Portal** — Attendance, marks, results
👩‍🏫 **Staff Portal** — Faculty resources & info
🏫 **Admin Portal** — Administrative access
🎓 **Principal Portal** — Principal dashboard
📋 **Admission Portal** — Admission process`,quickReplies:["Contact Us","About CTC"],links:[{label:"Student Login",path:"/login/student"},{label:"Staff Login",path:"/login/staff"},{label:"Admin Login",path:"/login/admin"}]}},{id:"iqac",keywords:["iqac","internal quality","quality assurance","quality cell"],response:{text:`📋 **IQAC — Internal Quality Assurance Cell**

CTC's IQAC ensures continuous quality enhancement in academic and administrative activities.

Visit the IQAC section for reports, minutes of meetings, and quality initiatives.`,quickReplies:["NAAC","NBA","About CTC"],links:[{label:"IQAC",path:"/iqac"}]}}],kp={text:"🤔 Hmm, I didn't quite catch that! Here are some things I can help you with:",quickReplies:["Admissions","Courses","Placements","Contact Us","About CTC","Gymkhana"],links:[]},jg={id:"welcome",sender:"bot",text:`👋 Hello! I'm **Neo**, your virtual guide for **Creative Techno College, Angul**!

I can help you with information about admissions, courses, placements, events, and more. What would you like to know?`,quickReplies:["Admissions","Courses","Placements","Gymkhana","Contact Us"],links:[],timestamp:new Date};function Sg(r){const s=r.toLowerCase().trim();if(!s)return kp;let o=null,c=0;for(const m of vg){let p=0;for(const u of m.keywords)s.includes(u)&&(p+=u.split(" ").length*2);p>c&&(c=p,o=m)}return o&&c>0?o.response:kp}function wg(){return e.jsxs("div",{className:"ctc-typing-indicator",children:[e.jsx("div",{className:"ctc-msg-avatar",role:"img","aria-label":"CTC Bot",children:e.jsx("img",{src:"/CTC%20NEW%20REACT%20WEBSITE/images/chatbot/technocrat.png",alt:"CTC Bot",className:"ctc-avatar-img"})}),e.jsxs("div",{className:"ctc-typing-bubble",children:[e.jsx("span",{className:"ctc-typing-dot"}),e.jsx("span",{className:"ctc-typing-dot"}),e.jsx("span",{className:"ctc-typing-dot"})]})]})}function Cg({messages:r,onSendMessage:s,onClose:o,onMinimize:c,isClosing:m}){const[p,u]=v.useState(""),[x,h]=v.useState(!1),[b,y]=v.useState(["Admissions","Courses","Placements","Gymkhana","Contact Us"]),g=v.useRef(null),T=v.useRef(null);v.useEffect(()=>{var R;(R=g.current)==null||R.scrollIntoView({behavior:"smooth"})},[r,x]),v.useEffect(()=>{var z;const R=[...r].reverse().find(P=>P.sender==="bot");(z=R==null?void 0:R.quickReplies)!=null&&z.length&&y(R.quickReplies)},[r]),v.useEffect(()=>{setTimeout(()=>{var R;return(R=T.current)==null?void 0:R.focus()},400)},[]);const E=async R=>{const z=(R||p).trim();if(!z)return;u("");const P={id:Date.now(),sender:"user",text:z,links:[],quickReplies:[],timestamp:new Date};s(P),h(!0);const I=600+Math.random()*600;await new Promise(ie=>setTimeout(ie,I));const U=Sg(z),q={id:Date.now()+1,sender:"bot",text:U.text,links:U.links||[],quickReplies:U.quickReplies||[],timestamp:new Date};h(!1),s(q)},F=R=>{R.key==="Enter"&&!R.shiftKey&&(R.preventDefault(),E())};return e.jsxs("div",{className:`ctc-chat-window${m?" closing":""}`,role:"dialog","aria-label":"CTC Assistant Chat",children:[e.jsxs("div",{className:"ctc-chat-header",children:[e.jsx("div",{className:"ctc-chat-avatar",role:"img","aria-label":"CTC Bot Avatar",children:e.jsx("img",{src:"/CTC%20NEW%20REACT%20WEBSITE/images/chatbot/technocrat.png",alt:"CTC Bot",className:"ctc-avatar-img"})}),e.jsxs("div",{className:"ctc-chat-header-info",children:[e.jsx("div",{className:"ctc-chat-header-name",children:"CTC Assistant"}),e.jsxs("div",{className:"ctc-chat-header-status",children:[e.jsx("span",{className:"ctc-status-dot"}),"Online — Creative Techno College"]})]}),e.jsxs("div",{className:"ctc-chat-header-actions",children:[e.jsx("button",{id:"ctc-chat-minimize-btn",className:"ctc-header-btn",onClick:c,"aria-label":"Minimize chat",title:"Minimize",children:"−"}),e.jsx("button",{id:"ctc-chat-close-btn",className:"ctc-header-btn",onClick:o,"aria-label":"Close chat",title:"Close",children:"✕"})]})]}),e.jsxs("div",{className:"ctc-messages-container",role:"log","aria-live":"polite","aria-label":"Chat messages",children:[r.map(R=>e.jsx(yg,{message:R},R.id)),x&&e.jsx(wg,{}),e.jsx("div",{ref:g})]}),b.length>0&&!x&&e.jsx("div",{className:"ctc-quick-replies",role:"group","aria-label":"Quick reply options",children:b.map((R,z)=>e.jsx("button",{id:`ctc-quick-reply-${R.toLowerCase().replace(/\s+/g,"-")}`,className:"ctc-quick-reply-btn",onClick:()=>E(R),"aria-label":`Quick reply: ${R}`,children:R},z))}),e.jsxs("div",{className:"ctc-input-area",children:[e.jsx("input",{ref:T,id:"ctc-chat-input",type:"text",className:"ctc-chat-input",placeholder:"Type a message...",value:p,onChange:R=>u(R.target.value),onKeyDown:F,"aria-label":"Type your message to CTC Bot",maxLength:300,autoComplete:"off"}),e.jsx("button",{id:"ctc-chat-send-btn",className:"ctc-send-btn",onClick:()=>E(),disabled:!p.trim()||x,"aria-label":"Send message",title:"Send",children:"➤"})]})]})}function kg(){const[r,s]=v.useState(!1),[o,c]=v.useState(!1),[m,p]=v.useState(!0),[u,x]=v.useState([jg]),h=v.useCallback(()=>{s(!0),c(!1),p(!1)},[]),b=v.useCallback(()=>{c(!0),setTimeout(()=>{s(!1),c(!1)},240)},[]),y=v.useCallback(()=>{b()},[b]),g=v.useCallback(()=>{r?b():h()},[r,h,b]),T=v.useCallback(E=>{x(F=>[...F,E])},[]);return e.jsxs(e.Fragment,{children:[r&&e.jsx(Cg,{messages:u,onSendMessage:T,onClose:b,onMinimize:y,isClosing:o}),e.jsx(gg,{isOpen:r,hasUnread:m,onClick:g})]})}function Ag({children:r}){const[s,o]=v.useState(!1);return v.useEffect(()=>{const c=()=>o(window.scrollY>400);return window.addEventListener("scroll",c),()=>window.removeEventListener("scroll",c)},[]),e.jsxs(e.Fragment,{children:[e.jsx(pg,{}),e.jsxs("header",{className:"site-header",children:[e.jsxs("div",{className:"header-brand",children:[e.jsx("div",{className:"header-logo-wrap",children:e.jsx("img",{src:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/LOGO FINAL.png",alt:"CTC Logo"})}),e.jsxs("div",{className:"header-text",children:[e.jsx("h1",{children:"Creative Techno College, Angul"}),e.jsx("p",{className:"sub",children:"A Unit of Creative Knowledge Foundation"}),e.jsxs("div",{className:"badges",children:[e.jsx("span",{className:"badge gold",children:"AICTE Approved"}),e.jsx("span",{className:"badge",children:"Utkal University Affiliated"}),e.jsx("span",{className:"badge",children:"Est. 2010"})]})]})]}),e.jsxs("div",{className:"header-logos",children:[e.jsx("img",{src:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/aicte.png",alt:"AICTE",title:"AICTE Approved"}),e.jsx("img",{src:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/utkal.png",alt:"Utkal University",title:"Utkal University Affiliated"}),e.jsx("img",{src:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/ckf.png",alt:"CKF",title:"Creative Knowledge Foundation"})]}),e.jsxs("div",{className:"header-clubs",children:[e.jsx("img",{src:"/CTC NEW REACT WEBSITE/images/GYMKHANA/technocrat.png",alt:"Technocrat",title:"Technocrat Club"}),e.jsx("img",{src:"/CTC NEW REACT WEBSITE/images/GYMKHANA/cultural.png",alt:"Cultural",title:"Cultural Club"}),e.jsx("img",{src:"/CTC NEW REACT WEBSITE/images/GYMKHANA/sports.png",alt:"Sports",title:"Sports Club"}),e.jsx("img",{src:"/CTC NEW REACT WEBSITE/images/GYMKHANA/disha.png",alt:"Disha CSR",title:"Disha & CSR Club"})]})]}),e.jsx(fg,{}),e.jsx("main",{children:r}),e.jsx(hg,{}),e.jsx("button",{className:`scroll-top-btn${s?" visible":""}`,onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),"aria-label":"Scroll to top",children:e.jsx("i",{className:"fa-solid fa-chevron-up"})}),e.jsx(kg,{})]})}const Io="Creative Techno College, Angul",gm="https://www.creativecollege.in",Ng=`${gm}/images/og-default.jpg`;function Na({title:r,noSuffix:s=!1,description:o,keywords:c="",canonical:m="/",ogImage:p=Ng,ogType:u="website"}){const x=r?s?r:`${r} | ${Io}`:Io,h=`${gm}${m}`;return e.jsxs(nm,{children:[e.jsx("title",{children:x}),e.jsx("meta",{name:"description",content:o}),c&&e.jsx("meta",{name:"keywords",content:c}),e.jsx("link",{rel:"canonical",href:h}),e.jsx("meta",{name:"robots",content:"index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"}),e.jsx("meta",{name:"geo.region",content:"IN-OR"}),e.jsx("meta",{name:"geo.placename",content:"Angul, Odisha, India"}),e.jsx("meta",{name:"geo.position",content:"20.788118;85.086393"}),e.jsx("meta",{name:"ICBM",content:"20.788118, 85.086393"}),e.jsx("meta",{property:"og:type",content:u}),e.jsx("meta",{property:"og:title",content:x}),e.jsx("meta",{property:"og:description",content:o}),e.jsx("meta",{property:"og:url",content:h}),e.jsx("meta",{property:"og:image",content:p}),e.jsx("meta",{property:"og:image:width",content:"1200"}),e.jsx("meta",{property:"og:image:height",content:"630"}),e.jsx("meta",{property:"og:site_name",content:Io}),e.jsx("meta",{property:"og:locale",content:"en_IN"}),e.jsx("meta",{name:"twitter:card",content:"summary_large_image"}),e.jsx("meta",{name:"twitter:title",content:x}),e.jsx("meta",{name:"twitter:description",content:o}),e.jsx("meta",{name:"twitter:image",content:p})]})}function Tg(){const r={"@context":"https://schema.org","@graph":[{"@type":["EducationalOrganization","CollegeOrUniversity","LocalBusiness"],"@id":"https://www.creativecollege.in/#organization",name:"Creative Techno College",alternateName:["CTC Angul","Creative College Angul","CTC"],description:"Creative Techno College (CTC), Angul is an AICTE-approved, top professional and technical college in Angul, Odisha, affiliated to Utkal University. Established in 2010, CTC offers BBA, BCA, B.Sc Computer Science, and B.Sc Data Science programs with 100% placement assistance.",url:"https://www.creativecollege.in",logo:"https://www.creativecollege.in/images/HOMEPAGE/LOGO FINAL.png",image:"https://www.creativecollege.in/images/HOMEPAGE/creative-campus.jpg",telephone:["+91-9778427170","+91-9668844571","+91-9668284222"],email:"principal.creativecollege@gmail.com",address:{"@type":"PostalAddress",streetAddress:"Baluakata, Saradhapur",addressLocality:"Angul",addressRegion:"Odisha",postalCode:"759143",addressCountry:"IN"},geo:{"@type":"GeoCoordinates",latitude:"20.788118",longitude:"85.086393"},openingHoursSpecification:[{"@type":"OpeningHoursSpecification",dayOfWeek:["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],opens:"09:00",closes:"17:00"}],hasMap:"https://www.google.com/maps/place/Creative+Techno+College/@20.7881186,85.0863929,17z",foundingDate:"2010",numberOfEmployees:{"@type":"QuantitativeValue",value:"50"},areaServed:["Angul","Odisha","India"],keywords:"top college angul, best college angul, technical college angul, professional college angul, BCA college angul, BBA college angul, AICTE college angul, Utkal University college angul",aggregateRating:{"@type":"AggregateRating",ratingValue:"4.5",reviewCount:"120",bestRating:"5"},sameAs:["https://www.facebook.com/creativetechnocollege","https://www.instagram.com/creativetechnocollege"]},{"@type":"FAQPage",mainEntity:[{"@type":"Question",name:"Which is the best college in Angul?",acceptedAnswer:{"@type":"Answer",text:"Creative Techno College (CTC), Angul is widely regarded as one of the best and top colleges in Angul, Odisha. AICTE-approved and affiliated to Utkal University, CTC has been providing quality technical and professional education since 2010 with 95% placement rate."}},{"@type":"Question",name:"Is Creative Techno College approved by AICTE?",acceptedAnswer:{"@type":"Answer",text:"Yes, Creative Techno College (CTC) Angul is approved by AICTE (All India Council for Technical Education) and permanently affiliated to Utkal University, recognized by the Government of Odisha, Dept. of Higher Education."}},{"@type":"Question",name:"What courses are offered at Creative Techno College, Angul?",acceptedAnswer:{"@type":"Answer",text:"CTC Angul offers 4-year degree programs: BBA (Bachelor of Business Administration) with 120 seats, BCA (Bachelor of Computer Applications) with 120 seats, B.Sc Computer Science (Honours) with 128 seats, and B.Sc Data Science with 30 seats."}},{"@type":"Question",name:"What is the placement record of CTC Angul?",acceptedAnswer:{"@type":"Answer",text:"Creative Techno College Angul has a 95% placement rate with over 1500+ students placed in top companies like Wipro, TCS, Infosys, HCL, Capgemini, IBM, Cognizant, Accenture, and more. The highest package offered is ₹4.5 LPA."}},{"@type":"Question",name:"How to apply for admission in Creative Techno College Angul?",acceptedAnswer:{"@type":"Answer",text:"Admission to CTC Angul requires 10+2 pass with minimum 45% marks. You can apply online through our website at creativecollege.in or visit our campus at Baluakata, Saradhapur, Angul. Call us at +91-9778427170 for more details."}},{"@type":"Question",name:"Is Creative Techno College a top technical college in Angul?",acceptedAnswer:{"@type":"Answer",text:"Yes, Creative Techno College is the top technical and professional college in Angul, Odisha. It offers computer science and IT programs like BCA, B.Sc CS, and B.Sc Data Science, making it the best choice for technical education in Angul district."}}]},{"@type":"WebSite","@id":"https://www.creativecollege.in/#website",url:"https://www.creativecollege.in",name:"Creative Techno College, Angul",description:"Official website of Creative Techno College – Top AICTE-approved college in Angul, Odisha",publisher:{"@id":"https://www.creativecollege.in/#organization"},potentialAction:{"@type":"SearchAction",target:{"@type":"EntryPoint",urlTemplate:"https://www.creativecollege.in/?s={search_term_string}"},"query-input":"required name=search_term_string"}}]};return e.jsx(nm,{children:e.jsx("script",{type:"application/ld+json",children:JSON.stringify(r,null,2)})})}const Kn=[{img:"/CTC%20NEW%20REACT%20WEBSITE/images/HOMEPAGE/1.jpg",caption:"Admissions Open 2026–27",sub:"BBA • BCA • B.Sc CS • B.Sc Data Science"},{img:"/CTC%20NEW%20REACT%20WEBSITE/images/HOMEPAGE/2.jpg",caption:"100% Placement Assistance",sub:"Top Recruiters • Industry-Ready Programs"},{img:"/CTC%20NEW%20REACT%20WEBSITE/images/HOMEPAGE/4.jpg",caption:"World-Class Campus & Library",sub:"Modern Infrastructure • Expert Faculty"}];function Eg({onClose:r}){const[s,o]=v.useState(0),c=tr(),m=v.useRef(null);v.useEffect(()=>(m.current=setInterval(()=>o(u=>(u+1)%Kn.length),3500),()=>clearInterval(m.current)),[]);const p=u=>o((u+Kn.length)%Kn.length);return e.jsx("div",{className:"adm-banner-overlay",onClick:r,children:e.jsxs("div",{className:"adm-banner-box",onClick:u=>u.stopPropagation(),children:[e.jsx("button",{className:"adm-banner-close",onClick:r,"aria-label":"Close banner",children:e.jsx("i",{className:"fa-solid fa-xmark"})}),e.jsxs("div",{className:"adm-banner-slider",children:[Kn.map((u,x)=>e.jsxs("div",{className:`adm-banner-slide ${x===s?"active":""}`,children:[e.jsx("img",{src:u.img,alt:u.caption,className:"adm-banner-slide-img"}),e.jsx("div",{className:"adm-banner-slide-overlay"}),e.jsxs("div",{className:"adm-banner-slide-text",children:[e.jsxs("p",{className:"adm-banner-eyebrow",children:[e.jsx("i",{className:"fa-solid fa-graduation-cap"})," Creative Techno College"]}),e.jsx("h2",{children:u.caption}),e.jsx("p",{children:u.sub})]})]},x)),e.jsx("div",{className:"adm-banner-dots",children:Kn.map((u,x)=>e.jsx("button",{className:`adm-banner-dot ${x===s?"active":""}`,onClick:()=>p(x)},x))}),e.jsx("button",{className:"adm-banner-arrow left",onClick:()=>p(s-1),children:e.jsx("i",{className:"fa-solid fa-chevron-left"})}),e.jsx("button",{className:"adm-banner-arrow right",onClick:()=>p(s+1),children:e.jsx("i",{className:"fa-solid fa-chevron-right"})})]}),e.jsxs("div",{className:"adm-banner-footer",children:[e.jsxs("div",{className:"adm-banner-footer-text",children:[e.jsx("span",{className:"adm-banner-tag",children:"🎓 Admission 2026–27 Open Now!"}),e.jsx("p",{children:"Seats are filling fast. Secure your future today."})]}),e.jsxs("button",{className:"adm-banner-apply-btn",onClick:()=>{r(),c("/admission/apply")},children:[e.jsx("i",{className:"fa-solid fa-paper-plane"})," Apply Now"]})]})]})})}function Rg(){v.useEffect(()=>{const r=document.querySelectorAll(".reveal, .reveal-left, .reveal-right"),s=new IntersectionObserver(o=>o.forEach(c=>{c.isIntersecting&&c.target.classList.add("visible")}),{threshold:.12});return r.forEach(o=>s.observe(o)),()=>s.disconnect()},[])}const fi=[{img:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/creative-campus.jpg",eyebrow:"Welcome to Excellence",title:"Shaping Leaders of Tomorrow",sub:"AICTE Approved • Utkal University Affiliated • Est. 2010"},{img:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/7.jpg",eyebrow:"Beautiful Campus",title:"Green & Student-Friendly Environment",sub:"Sprawling campus of knowledge and growth"},{img:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/4.jpg",eyebrow:"Modern Library",title:"Resources to Empower Learning",sub:"Thousands of books, journals & digital resources"},{img:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/1.jpg",eyebrow:"World-Class Education",title:"Where Innovation Meets Tradition",sub:"BBA • BCA • B.Sc (CS) • B.Sc (Data Science)"},{img:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/2.jpg",eyebrow:"100% Placement Assistance",title:"Your Future Starts Here",sub:"1500+ Students Placed • 100+ Recruiting Companies"},{img:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/5.jpg",eyebrow:"Vibrant Campus Life",title:"Learn. Grow. Excel.",sub:"Sports • Cultural • Technocrat • Disha & CSR"},{img:"/CTC%20NEW%20REACT%20WEBSITE/images/CULTURAL/saraswati_puja/sp1.jpeg",eyebrow:"Saraswati Puja Celebrations",title:"Honouring the Goddess of Knowledge",sub:"Faith • Culture • Togetherness"},{img:"/CTC%20NEW%20REACT%20WEBSITE/images/CULTURAL/funfest/f1.jpeg",eyebrow:"Fun Fest",title:"Where Talent Takes the Stage",sub:"Energy • Creativity • Unforgettable Moments"},{img:"/CTC%20NEW%20REACT%20WEBSITE/images/CULTURAL/holi/h1.jpeg",eyebrow:"Holi Celebrations",title:"A Festival of Colours & Joy",sub:"Vibrant • Festive • Full of Life"}];function Ig(){const[r,s]=v.useState(0),o=v.useRef(null),c=m=>s((m+fi.length)%fi.length);return v.useEffect(()=>(o.current=setInterval(()=>c(r+1),5e3),()=>clearInterval(o.current)),[r]),e.jsxs("section",{className:"hero-section",children:[e.jsx("div",{className:"hero-slides-wrap",style:{transform:`translateX(-${r*100}%)`},children:fi.map((m,p)=>e.jsxs("div",{className:"hero-slide",children:[e.jsx("img",{src:m.img,alt:m.title,loading:p===0?"eager":"lazy"}),e.jsx("div",{className:"hero-overlay"}),e.jsxs("div",{className:"hero-content",children:[e.jsx("p",{className:"hero-eyebrow",children:m.eyebrow}),e.jsx("h1",{className:"hero-title",dangerouslySetInnerHTML:{__html:m.title.replace(/([A-Z][a-z]+)/,"<span>$1</span>")}}),e.jsx("p",{className:"hero-sub",children:m.sub}),e.jsxs("div",{className:"hero-actions",children:[e.jsxs(Se,{to:"/admission",className:"btn-primary",children:[e.jsx("i",{className:"fa-solid fa-graduation-cap"})," Apply Now"]}),e.jsxs(Se,{to:"/about/ctc",className:"btn-outline",children:["Explore More ",e.jsx("i",{className:"fa-solid fa-arrow-right"})]})]})]})]},p))}),e.jsx("button",{className:"hero-arrow left",onClick:()=>c(r-1),"aria-label":"Previous",children:e.jsx("i",{className:"fa-solid fa-chevron-left"})}),e.jsx("button",{className:"hero-arrow right",onClick:()=>c(r+1),"aria-label":"Next",children:e.jsx("i",{className:"fa-solid fa-chevron-right"})}),e.jsx("div",{className:"hero-dots",children:fi.map((m,p)=>e.jsx("div",{className:`hero-dot${p===r?" active":""}`,onClick:()=>c(p)},p))})]})}const Po=[{end:5e3,suffix:"+",label:"Alumni"},{end:500,suffix:"+",label:"Students"},{end:200,suffix:"+",label:"Academic Events"},{end:1500,suffix:"+",label:"Placement"},{end:4,suffix:"",label:"Clubs"}];function Pg(){const[r,s]=v.useState(Po.map(()=>0)),o=v.useRef(null),c=v.useRef(!1);return v.useEffect(()=>{const m=new IntersectionObserver(([p])=>{p.isIntersecting&&!c.current&&(c.current=!0,Po.forEach((u,x)=>{const b=u.end/112.5;let y=0;const g=setInterval(()=>{y=Math.min(y+b,u.end),s(T=>{const E=[...T];return E[x]=Math.floor(y),E}),y>=u.end&&clearInterval(g)},16)}))},{threshold:.3});return o.current&&m.observe(o.current),()=>m.disconnect()},[]),e.jsxs("section",{className:"stats-section",ref:o,children:[e.jsxs("div",{style:{textAlign:"center",marginBottom:"16px",position:"relative"},children:[e.jsx("span",{className:"section-label",style:{color:"rgba(0,212,255,0.8)"},children:"By The Numbers"}),e.jsxs("h2",{className:"section-title",style:{color:"#fff"},children:["Our ",e.jsx("span",{style:{color:"var(--gold)"},children:"Impact"})]})]}),e.jsx("div",{className:"stats-grid",children:Po.map((m,p)=>e.jsxs("div",{className:"stat-card reveal",children:[e.jsxs("div",{className:"stat-number",children:[r[p],m.suffix]}),e.jsx("div",{className:"stat-label",children:m.label})]},p))})]})}const Bg=[{abbr:"BBA",full:"Bachelor of Business Administration",seats:120,icon:"💼",desc:"Management, Marketing, Finance & Entrepreneurship"},{abbr:"BCA",full:"Bachelor of Computer Applications",seats:120,icon:"💻",desc:"Programming, Databases & Software Development"},{abbr:"B.Sc (CS)",full:"Bachelor of Science in Computer Science",seats:128,icon:"🖥️",desc:"Algorithms, Theory & Practical Programming"},{abbr:"B.Sc (DS)",full:"Bachelor of Science in Data Science",seats:30,icon:"📊",desc:"Machine Learning, Statistics & Data Analytics"}],zg=[{name:"Mr. Gyanendra Kumar Sahu",role:"Chairman",img:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/Director Sir.jpg"},{name:"Er. Manoj Kumar Das",role:"Dean Academic",img:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/Dean Sir.jpg"},{name:"Mr. Krishnasis Mishra",role:"Principal",img:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/Principal Sir.jpg"},{name:"Mr. Bhabani Shankar Sahoo",role:"Vice Principal",img:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/Bhabani Sir.jpg"},{name:"Mr. Subhrajyoti Behera",role:"Management HOD",img:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/Subhrajyoti Sir.jpg"}],Mg=[{name:"Wipro",img:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/wipro.png"},{name:"TCS",img:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/tcs.jpg"},{name:"LTI Mindtree",img:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/lti.png"},{name:"Infosys",img:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/infosys.png"},{name:"HCL",img:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/hcl.png"},{name:"Capgemini",img:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/capgemini.png"},{name:"Cisco",img:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/cisco.png"},{name:"Tech Mahindra",img:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/tech.jpg"},{name:"IBM",img:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/ibm.jpeg.jpg"},{name:"Cognizant",img:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/cognizant.png"},{name:"Accenture",img:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/acenture.png"},{name:"Deloitte",img:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/DELOITTE.jpeg"},{name:"Airtel",img:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/airtel.png"},{name:"Corpnizer",img:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/corpnizers.jpeg"},{name:"DXC",img:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/dxc.png"},{name:"Zoho",img:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/zoho.jpg"}],Og=[{q:"Which is the best college in Angul?",a:"Creative Techno College (CTC), Angul is the top-ranked professional and technical college in Angul, Odisha. AICTE-approved, affiliated to Utkal University, and established in 2010, CTC has consistently delivered quality education with a 95% placement rate."},{q:"Is CTC Angul approved by AICTE?",a:"Yes! CTC is approved by AICTE (All India Council for Technical Education) and permanently affiliated to Utkal University. It is also recognized by the Government of Odisha, Department of Higher Education."},{q:"What courses are offered at Creative Techno College, Angul?",a:"CTC offers 4-year degree programs: BBA (Business Administration) – 120 seats, BCA (Computer Applications) – 120 seats, B.Sc Computer Science (Honours) – 128 seats, and B.Sc Data Science – 30 seats."},{q:"What is the placement record of Creative Techno College?",a:"1500+ students have been successfully placed in top companies like Wipro, TCS, Infosys, HCL, Capgemini, IBM, Cognizant, Accenture, and more. The highest package is ₹4.5 LPA with a 95% overall placement rate."},{q:"How to apply for admission in CTC Angul 2026-27?",a:"Eligibility: 10+2 pass with minimum 45% marks from any recognised board. Apply online at creativecollege.in or visit the campus at Baluakata, Saradhapur, Angul. Call +91-9778427170 for help."},{q:"Does CTC Angul have hostel facilities?",a:"Yes, CTC provides separate, secure hostel facilities for boys and girls with 24/7 security, comfortable rooms, and all essential amenities at affordable rates."}];function Dg(){const[r,s]=v.useState(null);return e.jsxs("section",{className:"faq-section",children:[e.jsxs("div",{style:{textAlign:"center",marginBottom:"48px"},children:[e.jsx("span",{className:"section-label",children:"Got Questions?"}),e.jsxs("h2",{className:"section-title",children:["Frequently Asked ",e.jsx("span",{children:"Questions"})]}),e.jsx("p",{className:"section-subtitle",style:{margin:"0 auto"},children:"Everything you need to know about Creative Techno College, Angul."})]}),e.jsx("div",{className:"faq-list",children:Og.map((o,c)=>e.jsxs("div",{className:`faq-item${r===c?" faq-open":""}`,children:[e.jsxs("button",{id:`faq-q-${c}`,className:"faq-question",onClick:()=>s(r===c?null:c),"aria-expanded":r===c,"aria-controls":`faq-a-${c}`,children:[e.jsx("span",{children:o.q}),e.jsx("i",{className:`fa-solid fa-chevron-down faq-icon${r===c?" rotated":""}`})]}),e.jsx("div",{id:`faq-a-${c}`,className:"faq-answer",role:"region","aria-labelledby":`faq-q-${c}`,children:e.jsx("p",{children:o.a})})]},c))})]})}function Wg(){Rg();const[r,s]=v.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsx(Na,{title:"Creative Techno College, Angul",noSuffix:!0,description:"Creative Techno College (CTC) is the top AICTE-approved college in Angul, Odisha. Offering BBA, BCA, B.Sc Computer Science & Data Science with 95% placement record. Affiliated to Utkal University. Admission open 2026-27.",keywords:"top college in angul, best college angul, top technical college angul, top professional college angul, BCA college angul, BBA college angul, AICTE college angul, creative techno college angul, college in angul odisha",canonical:"/"}),e.jsx(Tg,{}),r&&e.jsx(Eg,{onClose:()=>s(!1)}),e.jsxs(Se,{to:"/admission/apply",className:"adm-float-btn",children:[e.jsx("i",{className:"fa-solid fa-graduation-cap"}),e.jsx("span",{children:"Admission Open – Apply Now"}),e.jsx("span",{className:"adm-float-ping"})]}),e.jsx(Ig,{}),e.jsxs("section",{className:"home-about",children:[e.jsxs("div",{className:"home-about-text reveal-left",children:[e.jsx("span",{className:"section-label",children:"About Us"}),e.jsxs("h2",{className:"section-title",children:["Empowering Minds at ",e.jsx("span",{children:"Creative Techno College"})]}),e.jsxs("p",{children:["Creative Techno College (CTC), Angul – the ",e.jsx("strong",{children:"top professional and technical college in Angul, Odisha"})," – is established under the aegis of Creative Knowledge Foundation. AICTE-approved and permanently affiliated to Utkal University, CTC has been a beacon of quality education in Angul district since 2010."]}),e.jsx("p",{children:"Located at Baluakata, Saradhapur, Angul, we proudly serve students from across Angul, Dhenkanal, Sambalpur, Cuttack, and all of Odisha. We offer industry-aligned programs in BBA, BCA, B.Sc (Computer Science), and B.Sc (Data Science) — equipping students with skills to thrive in the modern corporate world."}),e.jsxs("p",{children:["With state-of-the-art infrastructure, experienced faculty, and strong industry connections, CTC provides a world-class education with ",e.jsx("strong",{children:"95% placement assistance"})," and partnerships with 100+ top recruiting companies."]}),e.jsx("div",{style:{display:"flex",gap:"16px",flexWrap:"wrap",marginTop:"28px"},children:e.jsxs(Se,{to:"/about/ctc",className:"btn-primary",children:[e.jsx("i",{className:"fa-solid fa-circle-info"})," Learn More"]})})]}),e.jsxs("div",{className:"director-spotlight reveal-right",children:[e.jsx("img",{className:"director-photo",src:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/Director Sir.jpg",alt:"Director"}),e.jsx("h3",{children:"Mr. Gyanendra Kumar Sahu"}),e.jsx("p",{className:"role",children:"Director"}),e.jsx("blockquote",{children:'"We strongly support inter disciplinary education and training for the benefit of student, industry and society. Our vision is to create future leaders who manage, create powerful organization in the emerging corporate landscape. Our management and IT development programs are exclusively industry focused so as to equip the students with latest techniques in the ever dynamic context of domestic and international business environment. It is an opportunity for you to avail the best course with best college in your locality. Come, be a part of our Creative family. Enjoy flexible and unlimited training programs."'})]})]}),e.jsxs("section",{className:"mv-section",children:[e.jsxs("div",{style:{textAlign:"center",position:"relative"},children:[e.jsx("span",{className:"section-label",children:"Our Foundation"}),e.jsxs("h2",{className:"section-title",style:{color:"#fff"},children:["Mission, Vision & ",e.jsx("span",{style:{color:"var(--gold)"},children:"Values"})]})]}),e.jsx("div",{className:"mv-grid",children:[{icon:e.jsx("i",{className:"fa-solid fa-bullseye"}),title:"Our Mission",content:"To provide quality education that empowers students with knowledge, skills, and values to excel in their careers and contribute positively to society.",type:"text"},{icon:e.jsx("i",{className:"fa-solid fa-eye"}),title:"Our Vision",content:"To be a globally recognized institution that nurtures innovative thinkers, ethical leaders, and responsible citizens.",type:"text"},{icon:e.jsx("i",{className:"fa-solid fa-gem"}),title:"Core Values",items:["Excellence in Education","Innovation & Creativity","Integrity & Ethics","Inclusivity & Diversity","Social Responsibility"],type:"list"},{icon:e.jsx("i",{className:"fa-solid fa-shield-halved"}),title:"Quality Policy",content:"We are committed to continuous improvement in academic standards, student outcomes, and institutional effectiveness through systematic planning and evaluation.",type:"text"}].map((o,c)=>e.jsxs("div",{className:"mv-card reveal",style:{transitionDelay:`${c*.1}s`},children:[e.jsx("div",{className:"mv-card-icon",children:o.icon}),e.jsx("h3",{children:o.title}),o.type==="text"?e.jsx("p",{children:o.content}):e.jsx("ul",{children:o.items.map((m,p)=>e.jsx("li",{children:m},p))})]},c))})]}),e.jsxs("section",{className:"courses-section",children:[e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx("span",{className:"section-label",children:"Academic Programs"}),e.jsxs("h2",{className:"section-title",children:["Courses ",e.jsx("span",{children:"Offered"})]}),e.jsx("p",{className:"section-subtitle",style:{margin:"0 auto"},children:"Industry-aligned programs designed to prepare you for the careers of tomorrow."})]}),e.jsx("div",{className:"courses-grid",children:Bg.map((o,c)=>e.jsxs("div",{className:"course-card reveal",style:{transitionDelay:`${c*.1}s`},children:[e.jsxs("div",{className:"course-abbr-banner",children:[e.jsx("h3",{children:o.abbr}),e.jsx("span",{className:"course-type-tag",children:"4-Year Degree"})]}),e.jsxs("div",{className:"course-body",children:[e.jsx("p",{className:"course-full",children:o.full}),e.jsx("p",{className:"course-desc",children:o.desc}),e.jsxs("div",{className:"course-seats-badge",children:[e.jsx("i",{className:"fa-solid fa-users"})," ",o.seats," Seats"]}),e.jsxs(Se,{to:"/admission",style:{display:"inline-flex",alignItems:"center",gap:"6px",marginTop:"4px",color:"var(--blue-light)",fontWeight:700,fontSize:"0.85rem",fontFamily:"var(--font-head)"},children:["Apply Now ",e.jsx("i",{className:"fa-solid fa-arrow-right",style:{fontSize:"0.72rem"}})]})]})]},c))})]}),e.jsx(Pg,{}),e.jsxs("section",{className:"admin-section",children:[e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx("span",{className:"section-label",children:"Leadership"}),e.jsxs("h2",{className:"section-title",children:["Our ",e.jsx("span",{children:"Administration"})]}),e.jsx("p",{className:"section-subtitle",style:{margin:"0 auto"},children:"Guided by experienced educators and visionary leaders committed to excellence."})]}),e.jsx("div",{className:"admin-grid",children:zg.map((o,c)=>e.jsxs("div",{className:"admin-card reveal",style:{transitionDelay:`${c*.1}s`},children:[e.jsxs("div",{className:"admin-img-wrap",children:[e.jsx("img",{src:o.img,alt:o.name}),e.jsx("div",{className:"admin-img-overlay"})]}),e.jsxs("div",{className:"admin-info",children:[e.jsx("h4",{children:o.name}),e.jsx("span",{children:o.role})]})]},c))})]}),e.jsxs("section",{className:"recruiters-section",children:[e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx("span",{className:"section-label",children:"Industry Partners"}),e.jsxs("h2",{className:"section-title",children:["Our Top ",e.jsx("span",{children:"Recruiters"})]}),e.jsx("p",{className:"section-subtitle",style:{margin:"0 auto"},children:"Leading companies trust CTC graduates for their talent, skills, and work ethic."})]}),e.jsx("div",{className:"recruiters-grid",children:Mg.map((o,c)=>e.jsxs("div",{className:"recruiter-logo reveal",style:{transitionDelay:`${c*.05}s`},children:[e.jsx("img",{src:o.img,alt:o.name}),e.jsx("span",{children:o.name})]},c))})]}),e.jsx(Dg,{}),e.jsxs("section",{className:"maps-section",children:[e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx("span",{className:"section-label",children:"Find Us"}),e.jsxs("h2",{className:"section-title",children:["Our ",e.jsx("span",{children:"Locations"})]})]}),e.jsx("div",{className:"maps-grid",children:[{title:"Creative Techno College, Angul",icon:"fa-solid fa-building-columns",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3730.0783340113476!2d85.08639287509837!3d20.788118580801687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a18a5b9850815f5%3A0xa7f8a31afad931b7!2sCreative%20Techno%20College!5e0!3m2!1sen!2sin!4v1758728395827!5m2!1sen!2sin",link:"https://www.google.com/maps/place/Creative+Techno+College/@20.7881186,85.0863929,17z"},{title:"Creative Knowledge Foundation Office",icon:"fa-solid fa-house",src:"https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3728.8844998564623!2d85.10675499999999!3d20.836369999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1m1!2zMjDCsDUwJzEwLjkiTiA4NcKwMDYnMjQuMyJF!5e0!3m2!1sen!2sin!4v1759905943185!5m2!1sen!2sin",link:"https://www.google.com/maps/place/Creative+CT+Office/@20.750000,85.000000,17z"}].map((o,c)=>e.jsxs("div",{className:"map-card reveal",style:{transitionDelay:`${c*.15}s`},children:[e.jsxs("div",{className:"map-card-header",children:[e.jsx("i",{className:o.icon}),e.jsx("h3",{children:o.title})]}),e.jsx("iframe",{src:o.src,title:o.title,allowFullScreen:!0,loading:"lazy"}),e.jsx("div",{className:"map-card-footer",children:e.jsxs("a",{href:o.link,target:"_blank",rel:"noreferrer",className:"btn-primary",style:{fontSize:"0.82rem",padding:"8px 20px"},children:[e.jsx("i",{className:"fa-solid fa-map-location-dot"})," Open in Maps"]})})]},c))})]})]})}function Lg(){v.useEffect(()=>{const r=document.querySelectorAll(".reveal, .reveal-left, .reveal-right"),s=new IntersectionObserver(o=>o.forEach(c=>{c.isIntersecting&&c.target.classList.add("visible")}),{threshold:.1});return r.forEach(o=>s.observe(o)),()=>s.disconnect()},[])}const Hg=[{year:"1995",label:"Founded",desc:"Journey began with computer education as a franchise of APTECH Computer Education."},{year:"2010",label:"CTC Established",desc:"Creative Techno College officially launched, offering BBA & BCA under Utkal University."},{year:"2017",label:"1st Permanent Approved",desc:"Became the 1st Permanently Approved College of Angul in Central Odisha."},{year:"2024",label:"AICTE Approved",desc:"Received AICTE approval, marking adherence to the highest national educational standards."}],Fg=[{icon:"fa-solid fa-graduation-cap",title:"Educational Excellence",desc:"Committed to the highest standards of academic quality and student achievement across all programs."},{icon:"fa-solid fa-hands-helping",title:"Community Service",desc:"Dedicated to serving the region through education, outreach, and deep social responsibility."},{icon:"fa-solid fa-lightbulb",title:"Innovation",desc:"Fostering a culture of creativity, critical thinking, and continuous improvement in everything we do."},{icon:"fa-solid fa-seedling",title:"Holistic Development",desc:"Nurturing not just academic excellence but also character, values, and leadership in every student."}],Ug=["Spoken English","Tally ERP","Web Development","Digital Marketing","Data Analytics","Soft Skills"];function _g(){return Lg(),e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"ckf-hero",style:{textAlign:"left"},children:e.jsxs("div",{style:{maxWidth:"1100px",margin:"0 auto",display:"flex",alignItems:"center",gap:"48px",flexWrap:"wrap"},children:[e.jsxs("div",{style:{flex:"1 1 320px"},children:[e.jsx("span",{className:"section-label",style:{color:"var(--cyan)"},children:"Our Foundation"}),e.jsxs("h1",{className:"section-title",style:{color:"#fff",margin:"12px 0 16px",textAlign:"left"},children:["About ",e.jsx("span",{style:{color:"var(--gold)"},children:"Creative Knowledge Foundation"})]}),e.jsx("p",{style:{color:"rgba(255,255,255,0.65)",lineHeight:1.8,maxWidth:"480px"},children:"The trust behind Creative Techno College, Angul — empowering education since 1995"})]}),e.jsx("div",{className:"reveal-right",style:{flex:"0 0 auto"},children:e.jsx("div",{style:{background:"#fff",padding:"20px",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 10px 30px rgba(0,0,0,0.15)",width:"180px",height:"180px"},children:e.jsx("img",{src:"/CTC NEW REACT WEBSITE/images/AboutTrust/aboutckfimg1.png",alt:"CKF Logo",style:{height:"auto",width:"100%",maxWidth:"120px",opacity:1}})})})]})}),e.jsx("section",{style:{background:"var(--page-bg)",padding:"60px 5%"},children:e.jsx("div",{style:{maxWidth:"1100px",margin:"0 auto",display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"20px"},children:Hg.map((r,s)=>e.jsxs("div",{className:"milestone-card reveal",style:{transitionDelay:`${s*.1}s`},children:[e.jsx("div",{className:"milestone-year",children:r.year}),e.jsx("h3",{style:{fontFamily:"var(--font-head)",fontWeight:800,color:"var(--navy)",marginBottom:"10px",fontSize:"0.93rem"},children:r.label}),e.jsx("p",{children:r.desc})]},s))})}),e.jsx("section",{style:{background:"#fff"},children:e.jsxs("div",{className:"ckf-history",children:[e.jsxs("div",{style:{textAlign:"center",marginBottom:"40px"},children:[e.jsx("span",{className:"section-label",children:"Our Story"}),e.jsxs("h2",{className:"section-title",children:["The ",e.jsx("span",{children:"CKF Journey"})]})]}),e.jsx("img",{src:"/CTC NEW REACT WEBSITE/images/AboutTrust/aboutckfimg2.png",alt:"CKF Timeline",className:"ckf-timeline-img reveal"}),e.jsxs("div",{className:"ckf-history-text reveal",children:[e.jsx("p",{children:"CREATIVE KNOWLEDGE FOUNDATION with Regd. Office at Tamrit Colony, Angul, Odisha is running CREATIVE TECHNO COLLEGE since 2010 situated at Baluakata, Sharadhapur, Angul."}),e.jsx("p",{children:"However the journey was started at Institutional level in year 1995 with computer education as a franchise of APTECH COMPUTER EDUCATION (APTECH Ltd.) upto 2007 and run distance education BBA, BCA, MBA and MCA courses between 2001–2015."}),e.jsxs("p",{children:["Since 2010 CREATIVE TECHNO COLLEGE is offering BBA and BCA undergraduate courses in computer application and management recognized by Government of Odisha, Department of Higher Education and Affiliated to Utkal University. In 2018 another course B.Sc. in Computer Science has been added under this umbrella. The founder of the college Mr. Gyanendra Sahu has dedicatedly worked hard to make the college the ",e.jsx("strong",{children:"1st Permanent Approved College of Angul"})," in Central Odisha in 2017."]}),e.jsxs("p",{children:["In 2019 our college has been awarded as ",e.jsx("strong",{children:"Best Professional College by Odisha Education Award 2019"}),". We received AICTE approval in 2024, which ensures the college is adhering to strict standards in terms of infrastructure, faculty, teaching methodology, and overall educational excellence."]}),e.jsx("p",{children:"In Skill Development area of IT education and training: in 2009 we trained 300 trainees in association with OCAC; in 2011–12 we trained 150 trainees in association with DTET Odisha; in 2014 we worked with OKCL (Odisha Knowledge Corporation Ltd.); and in 2018 we trained 120 trainees under NALCO CSR fund in association with AISECT Bhopal."})]})]})}),e.jsxs("section",{style:{background:"var(--page-bg)"},children:[e.jsxs("div",{style:{maxWidth:"1100px",margin:"0 auto",padding:"60px 5% 0",textAlign:"center"},children:[e.jsx("span",{className:"section-label",children:"What We Stand For"}),e.jsxs("h2",{className:"section-title",children:["Our Core ",e.jsx("span",{children:"Values"})]})]}),e.jsx("div",{style:{maxWidth:"1100px",margin:"24px auto 0",padding:"0 5% 72px",display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"20px"},children:Fg.map((r,s)=>e.jsxs("div",{className:"ckf-value-card reveal",style:{transitionDelay:`${s*.1}s`},children:[e.jsx("div",{className:"ckf-value-icon",children:e.jsx("i",{className:r.icon})}),e.jsx("h3",{children:r.title}),e.jsx("p",{children:r.desc})]},s))})]}),e.jsx("section",{style:{background:"#fff",padding:"72px 5%"},children:e.jsxs("div",{className:"ckf-skills-banner reveal",style:{maxWidth:"1100px",margin:"0 auto"},children:[e.jsxs("div",{style:{flex:"1 1 300px"},children:[e.jsx("span",{className:"section-label",style:{color:"var(--cyan)"},children:"Vocational Wing"}),e.jsx("h2",{children:"CKF Skills"}),e.jsx("p",{children:"CKF Skills is the vocational and skill development wing of Creative Knowledge Foundation, offering industry-relevant training programs to bridge the skill gap and enhance employability among youth in Odisha."})]}),e.jsx("div",{style:{flex:"1 1 260px"},children:e.jsx("div",{className:"ckf-skill-tags",children:Ug.map((r,s)=>e.jsx("span",{children:r},s))})})]})})]})}function $g(){v.useEffect(()=>{const r=document.querySelectorAll(".reveal, .reveal-left, .reveal-right"),s=new IntersectionObserver(o=>o.forEach(c=>{c.isIntersecting&&c.target.classList.add("visible")}),{threshold:.1});return r.forEach(o=>s.observe(o)),()=>s.disconnect()},[])}const Gg=[{img:"/CTC NEW REACT WEBSITE/images/AboutUs/StrongAcademic.png",title:"Strong Academics",desc:"Comprehensive programs delivered by experienced faculty to boost academic excellence and career readiness."},{img:"/CTC NEW REACT WEBSITE/images/AboutUs/PrePlacementActivity.jpg",title:"Pre-Placement Training",desc:"Mock interviews, aptitude tests, and resume workshops to prepare students for campus placements."},{img:"/CTC NEW REACT WEBSITE/images/AboutUs/LiveProjects.png",title:"Skill Development",desc:"Hands-on live projects and internship programs to bridge the gap between academics and industry."},{img:"/CTC NEW REACT WEBSITE/images/AboutUs/Hostel.jpg",title:"Hostel Facilities",desc:"Comfortable, secure, and well-maintained separate hostels for boys and girls with 24/7 security."},{img:"/CTC NEW REACT WEBSITE/images/AboutUs/transportation.png",title:"Buses & Transportation",desc:"Safe and timely college bus services covering major routes across Angul and surrounding areas."},{img:"/CTC NEW REACT WEBSITE/images/AboutUs/Playground.png",title:"Play Ground & Sports",desc:"Dedicated outdoor sports facilities to promote physical fitness, teamwork, and competitive spirit."},{img:"/CTC NEW REACT WEBSITE/images/AboutUs/Canteen_Caffeteria.jpg",title:"Canteen & Cafeteria",desc:"Hygienic and affordable canteen offering nutritious meals and refreshments throughout the day."},{img:"/CTC NEW REACT WEBSITE/images/AboutUs/GreenCampus.png",title:"Green Campus",desc:"Lush eco-friendly campus with beautiful surroundings promoting a healthy and inspiring environment."}];function Yg(){return $g(),e.jsxs(e.Fragment,{children:[e.jsx(Na,{title:"About Creative Techno College – Top AICTE College in Angul, Odisha",description:"Creative Techno College (CTC) Angul, established in 2010, is the best AICTE-approved college in Angul, Odisha. Located at Baluakata, Saradhapur, Angul. Affiliated to Utkal University. Hostel, transport, placement – all under one roof.",keywords:"about creative techno college angul, CTC angul about, best college angul odisha, AICTE approved college angul, Utkal University affiliated college angul, professional college angul",canonical:"/about/ctc"}),e.jsxs("div",{className:"page-hero",children:[e.jsx("div",{className:"page-hero-dots"}),e.jsx("span",{className:"section-label",children:"Know Us Better"}),e.jsxs("h1",{children:["About ",e.jsx("span",{children:"Creative Techno College"})]}),e.jsx("p",{children:"Excellence in Education since 2010 — Angul, Odisha"})]}),e.jsx("section",{style:{padding:"80px 5%",background:"#fff"},children:e.jsxs("div",{style:{maxWidth:"1200px",margin:"0 auto",display:"flex",gap:"60px",flexWrap:"wrap",alignItems:"center"},children:[e.jsxs("div",{className:"reveal-left",style:{flex:"1 1 380px"},children:[e.jsx("span",{className:"section-label",children:"Our Story"}),e.jsxs("h2",{className:"section-title",children:["A Legacy of ",e.jsx("span",{children:"Excellence"})]}),e.jsx("p",{style:{color:"#4a6080",lineHeight:1.9,marginBottom:"16px"},children:"Creative Techno College (CTC), Angul (A Unit of Creative Knowledge Foundation) is located at Balukata, Sharadhapur, Angul. It is recognized by Govt. of Odisha, Dept. of Higher Education and affiliated to Utkal University — a pioneer college in Central Odisha providing IT and management education."}),e.jsx("p",{style:{color:"#4a6080",lineHeight:1.9,marginBottom:"16px"},children:"The college has a group of experienced faculties and supporting staff, well-equipped infrastructure and air-conditioned computer labs. Besides course curriculum, CTC emphasizes developing students' professional skills through soft skill training including spoken English, group discussions, debates, mock interviews, and more."}),e.jsx("p",{style:{color:"#4a6080",lineHeight:1.9,marginBottom:"28px"},children:"With a dedicated placement cell, experienced faculty, and vibrant campus life through Gymkhana activities, CTC provides a holistic educational experience that goes beyond textbooks and classrooms."}),e.jsx("div",{style:{display:"flex",gap:"16px",flexWrap:"wrap"},children:e.jsxs(Se,{to:"/admission",className:"btn-primary",children:[e.jsx("i",{className:"fa-solid fa-graduation-cap"})," Apply Now"]})})]}),e.jsxs("div",{className:"reveal-right",style:{flex:"1 1 340px"},children:[e.jsxs("div",{style:{borderRadius:"20px",overflow:"hidden",boxShadow:"var(--shadow-lg)",position:"relative"},children:[e.jsx("img",{src:"/CTC NEW REACT WEBSITE/images/AboutUs/creative-campus.jpg",alt:"CTC Campus",style:{width:"100%",height:"380px",objectFit:"cover",display:"block"}}),e.jsx("div",{style:{position:"absolute",inset:0,background:"linear-gradient(to top, rgba(10,22,40,0.45) 0%, transparent 55%)",pointerEvents:"none"}})]}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"12px",marginTop:"12px"},children:[{val:"15+",label:"Years"},{val:"1500+",label:"Alumni"},{val:"398",label:"Seats"},{val:"95%",label:"Placement"}].map((r,s)=>e.jsxs("div",{className:"reveal",style:{transitionDelay:`${s*.08}s`,background:"linear-gradient(135deg, var(--navy), var(--blue))",borderRadius:"12px",padding:"20px",textAlign:"center",color:"#fff"},children:[e.jsx("div",{style:{fontFamily:"var(--font-head)",fontSize:"1.6rem",fontWeight:900,color:"var(--gold)"},children:r.val}),e.jsx("div",{style:{fontSize:"0.78rem",color:"rgba(255,255,255,0.7)",fontWeight:600,marginTop:"4px"},children:r.label})]},s))})]})]})}),e.jsxs("section",{style:{padding:"80px 5%",background:"linear-gradient(135deg, var(--navy) 0%, #0d2550 50%, var(--blue) 100%)",position:"relative",overflow:"hidden"},children:[e.jsx("div",{style:{position:"absolute",inset:0,background:"radial-gradient(ellipse at 70% 30%, rgba(0,212,255,0.1) 0%, transparent 60%)",pointerEvents:"none"}}),e.jsxs("div",{style:{maxWidth:"1200px",margin:"0 auto",position:"relative"},children:[e.jsxs("div",{style:{textAlign:"center",marginBottom:"48px"},children:[e.jsx("span",{className:"section-label",style:{color:"var(--cyan)"},children:"Career Success"}),e.jsxs("h2",{className:"section-title",style:{color:"#fff"},children:["Best Placement Provider ",e.jsx("span",{style:{color:"var(--gold)"},children:"in Odisha"})]}),e.jsx("p",{style:{color:"rgba(255,255,255,0.65)",maxWidth:"680px",margin:"0 auto",lineHeight:1.9,fontSize:"0.97rem"},children:"Education is not just about subjects learned in college. Becoming educated is a lifelong exercise that can be unbelievably exciting if one jumps into the train of experience and takes a trip to every conceivable place on earth."})]}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:"20px",maxWidth:"900px",margin:"0 auto"},children:[{val:"1500+",label:"Students Placed",icon:"fa-solid fa-user-tie"},{val:"100+",label:"Companies",icon:"fa-solid fa-building"},{val:"₹4.5 LPA",label:"Highest Package",icon:"fa-solid fa-indian-rupee-sign"},{val:"95%",label:"Placement Rate",icon:"fa-solid fa-chart-line"}].map((r,s)=>e.jsxs("div",{className:"reveal",style:{transitionDelay:`${s*.1}s`,background:"rgba(255,255,255,0.07)",border:"1px solid rgba(255,255,255,0.13)",borderRadius:"16px",padding:"28px 20px",textAlign:"center",backdropFilter:"blur(12px)"},children:[e.jsx("i",{className:r.icon,style:{color:"var(--cyan)",fontSize:"1.6rem",marginBottom:"12px",display:"block"}}),e.jsx("div",{style:{fontFamily:"var(--font-head)",fontSize:"1.6rem",fontWeight:900,color:"var(--gold)",marginBottom:"4px"},children:r.val}),e.jsx("div",{style:{fontSize:"0.78rem",color:"rgba(255,255,255,0.65)",fontWeight:600},children:r.label})]},s))}),e.jsx("div",{style:{textAlign:"center",marginTop:"40px"},children:e.jsxs(Se,{to:"/placement",className:"btn-primary",children:[e.jsx("i",{className:"fa-solid fa-briefcase"})," View Placement Details"]})})]})]}),e.jsx("section",{style:{padding:"80px 5%",background:"var(--page-bg)"},children:e.jsxs("div",{style:{maxWidth:"1200px",margin:"0 auto"},children:[e.jsxs("div",{style:{textAlign:"center",marginBottom:"8px"},children:[e.jsx("span",{className:"section-label",children:"Campus Life"}),e.jsxs("h2",{className:"section-title",children:["World-Class ",e.jsx("span",{children:"Facilities"})]}),e.jsx("p",{className:"section-subtitle",style:{margin:"0 auto"},children:"Everything you need for a complete and enriching college experience."})]}),e.jsx("div",{className:"facility-grid",children:Gg.map((r,s)=>e.jsxs("div",{className:"facility-card reveal",style:{transitionDelay:`${s%4*.08}s`},children:[e.jsxs("div",{className:"facility-img-wrap",children:[e.jsx("img",{src:r.img,alt:r.title}),e.jsx("div",{className:"facility-img-overlay"})]}),e.jsxs("div",{className:"facility-info",children:[e.jsx("h3",{children:r.title}),e.jsx("p",{children:r.desc})]})]},s))})]})})]})}function Jg(){v.useEffect(()=>{const r=document.querySelectorAll(".reveal, .reveal-left, .reveal-right"),s=new IntersectionObserver(o=>o.forEach(c=>{c.isIntersecting&&c.target.classList.add("visible")}),{threshold:.08});return r.forEach(o=>s.observe(o)),()=>s.disconnect()},[])}const Vg=[{name:"Mr. Manoj Kumar Das",designation:"Dean (Academic)",qualification:"23 Years Experience",img:"/CTC NEW REACT WEBSITE/images/OURTEAM/Dean Sir.jpg",email:"dasmanojp@gmail.com",role:"admin"},{name:"Mr. Krishnashis Mishra",designation:"Principal",qualification:"M.Tech (CSE) · 15 Yrs",img:"/CTC NEW REACT WEBSITE/images/OURTEAM/Principal Sir.jpg",email:"principal.creativecollege@gmail.com",role:"admin"},{name:"Mr. Bhabani Sankar Sahoo",designation:"Vice Principal",qualification:"M.Tech (CSE) · 7 Yrs",img:"/CTC NEW REACT WEBSITE/images/OURTEAM/Bhabani Sir.jpg",email:"bhabaniwipro89@gmail.com",role:"admin"},{name:"Mr. Subhrajyoti Behera",designation:"HOD — Management Faculty",qualification:"MBA (Marketing)",img:"/CTC NEW REACT WEBSITE/images/OURTEAM/Subhrajyoti Sir.jpg",email:"subhyrajyoticafpl@gmail.com",role:"mgmt"},{name:"Ms. Neha Solanki",designation:"Management Faculty",qualification:"M.Com",img:"/CTC NEW REACT WEBSITE/images/OURTEAM/Neha Mam.jpg",email:"nehasolanki1411@gmail.com",role:"mgmt"},{name:"Ms. Pravati Pradhan",designation:"Mathematics Faculty",qualification:"MSc (Mathematics)",img:"/CTC NEW REACT WEBSITE/images/OURTEAM/Pravati Mam.jpg",email:"",role:"math"},{name:"Mr. Saumya Ranjan Pradhan",designation:"IT Faculty",qualification:"MCA",img:"/CTC NEW REACT WEBSITE/images/OURTEAM/Saumya Sir.jpg",email:"",role:"it"},{name:"Mr. Swastik Ranjan Sahoo",designation:"IT Faculty",qualification:"MCA",img:"/CTC NEW REACT WEBSITE/images/OURTEAM/Swastik Sir.jpg",email:"sahooswastik406@gmail.com",role:"it"},{name:"Ms. Arghyarupa Behera",designation:"IT Faculty",qualification:"MSc (CS)",img:"/CTC NEW REACT WEBSITE/images/OURTEAM/Arghyarupa Mam.jpg",email:"arghyarupabehera3@gmail.com",role:"it"},{name:"Ms. Itishree Nath",designation:"IT Faculty",qualification:"BCA",img:"/CTC NEW REACT WEBSITE/images/OURTEAM/itishreemam.jpg",email:"",role:"it"},{name:"Mr. Satya S. S. Dehury",designation:"Public Relationship Officer",qualification:"MBA",img:"/CTC NEW REACT WEBSITE/images/OURTEAM/Satya Sir.jpg",email:"sssdehury89@gmail.com",role:"admin"},{name:"Ms. Monika Sahu",designation:"Librarian",qualification:"BCA, B.Lib.I.Sc",img:"/CTC NEW REACT WEBSITE/images/OURTEAM/monikamam.jpg",email:"monika28sahu@gmail.com",role:"lib"},{name:"Mr. Abhishek Satpathy",designation:"Accountant",qualification:"B.Com (Acctg), MBA",img:"/CTC NEW REACT WEBSITE/images/OURTEAM/abhiseksir.jpg",email:"abhisheksathpathy020@gmail.com",role:"admin"},{name:"Mr. Sarat Chandra Sahu",designation:"Campus Incharge",qualification:"General +3",img:"/CTC NEW REACT WEBSITE/images/OURTEAM/Sarat Sir.jpg",email:"saratmuna243@gmail.com",role:"admin"}];function Kg(){Jg();const[r,s]=v.useState(""),o=Vg.filter(c=>c.name.toLowerCase().includes(r.toLowerCase())||c.designation.toLowerCase().includes(r.toLowerCase()));return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
                .team-page {
                    background: #f8faff;
                    font-family: 'Inter', sans-serif;
                }
                .page-hero {
                    background: linear-gradient(165deg, #020c1b 0%, #0c2340 40%, #112d52 70%, #060f1e 100%);
                    padding: 100px 5% 80px;
                    text-align: center;
                    position: relative;
                    overflow: hidden;
                }
                .page-hero-dots {
                    position: absolute;
                    inset: 0;
                    background-image: radial-gradient(rgba(0,212,255,0.1) 1px, transparent 1px);
                    background-size: 30px 30px;
                    opacity: 0.3;
                }
                .section-label {
                    display: inline-block;
                    background: rgba(0,212,255,0.1);
                    border: 1px solid rgba(0,212,255,0.3);
                    color: #00d4ff;
                    padding: 5px 16px;
                    border-radius: 30px;
                    font-size: 0.68rem;
                    font-weight: 800;
                    letter-spacing: 2px;
                    text-transform: uppercase;
                    margin-bottom: 20px;
                }
                .page-hero h1 {
                    font-family: 'Poppins', sans-serif;
                    font-size: clamp(2.6rem, 6vw, 4.2rem);
                    font-weight: 900;
                    color: #fff;
                    line-height: 1.1;
                    margin-bottom: 16px;
                }
                .page-hero h1 span {
                    background: linear-gradient(90deg, #f5c518, #ff8c00);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
                .page-hero p {
                    color: rgba(255,255,255,0.65);
                    font-size: 1rem;
                    max-width: 600px;
                    margin: 0 auto;
                }

                .team-header {
                    text-align: center;
                    padding: 60px 5% 20px;
                }
                .team-header .section-label {
                    background: #eff6ff;
                    color: #2563eb;
                    border-color: #bfdbfe;
                }
                .team-header h2 {
                    font-family: 'Poppins', sans-serif;
                    font-size: 2.2rem;
                    font-weight: 800;
                    color: #0a1628;
                    margin: 12px 0 14px;
                }
                .team-header h2 span {
                    background: linear-gradient(135deg, #2563eb, #00d4ff);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
                .team-header p {
                    color: #64748b;
                    font-size: 0.97rem;
                    max-width: 620px;
                    margin: 0 auto;
                }

                .search-bar {
                    max-width: 500px;
                    margin: 0 auto 40px;
                    padding: 0 5%;
                }
                .search-bar input {
                    width: 100%;
                    padding: 14px 22px;
                    border: 1px solid rgba(10,22,40,0.12);
                    border-radius: 60px;
                    font-size: 0.95rem;
                    background: #fff;
                    box-shadow: 0 8px 20px rgba(0,0,0,0.02);
                    transition: all 0.2s;
                }
                .search-bar input:focus {
                    outline: none;
                    border-color: #2563eb;
                    box-shadow: 0 12px 28px rgba(37,99,235,0.1);
                }

                .team-grid {
                    max-width: 1280px;
                    margin: 0 auto;
                    padding: 0 5% 80px;
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 28px;
                }

                .team-card {
                    background: #fff;
                    border-radius: 24px;
                    overflow: hidden;
                    box-shadow: 0 8px 30px rgba(10,22,40,0.08);
                    transition: transform 0.25s, box-shadow 0.25s;
                    border: 1px solid rgba(10,22,40,0.06);
                    display: flex;
                    flex-direction: column;
                }
                .team-card:hover {
                    transform: translateY(-8px);
                    box-shadow: 0 20px 40px rgba(10,22,40,0.15);
                }

                .team-card-img {
                    width: 100%;
                    height: 240px;
                    overflow: hidden;
                    background: #0a1628;
                    position: relative;
                }
                .team-card-img img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    object-position: center 20%;
                    display: block;
                    transition: transform 0.4s;
                }
                .team-card:hover .team-card-img img {
                    transform: scale(1.05);
                }
                .team-card-img::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    height: 60px;
                    background: linear-gradient(to top, rgba(10,22,40,0.6), transparent);
                    pointer-events: none;
                }

                .team-card-body {
                    padding: 20px 18px 24px;
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                }
                .team-card-body h3 {
                    font-family: 'Poppins', sans-serif;
                    font-size: 1.1rem;
                    font-weight: 700;
                    color: #0a1628;
                    margin: 0 0 6px;
                    line-height: 1.3;
                }
                .team-card-body .designation {
                    font-size: 0.85rem;
                    font-weight: 600;
                    color: #2563eb;
                    margin-bottom: 10px;
                    letter-spacing: 0.3px;
                }
                .team-card-body .qualification {
                    font-size: 0.8rem;
                    color: #64748b;
                    background: #f1f5f9;
                    padding: 5px 10px;
                    border-radius: 30px;
                    display: inline-block;
                    margin-bottom: 14px;
                    font-weight: 500;
                }
                .team-card-body .email {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    font-size: 0.8rem;
                    color: #334155;
                    margin-top: auto;
                    word-break: break-all;
                    background: #f8fafc;
                    padding: 8px 12px;
                    border-radius: 30px;
                    border: 1px solid #e2e8f0;
                }
                .team-card-body .email i {
                    color: #2563eb;
                    width: 16px;
                }
                .team-card-body .email a {
                    color: #0a1628;
                    text-decoration: none;
                    transition: color 0.2s;
                }
                .team-card-body .email a:hover {
                    color: #2563eb;
                    text-decoration: underline;
                }
                .team-card-body .email span {
                    color: #94a3b8;
                    font-style: italic;
                }

                .cta-section {
                    background: linear-gradient(135deg, #1a3a6b, #2563eb);
                    padding: 70px 5%;
                    text-align: center;
                    position: relative;
                    overflow: hidden;
                }
                .cta-section::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background: radial-gradient(ellipse at 50% 0%, rgba(0,212,255,0.15), transparent 60%);
                }
                .cta-content {
                    max-width: 600px;
                    margin: 0 auto;
                    position: relative;
                }
                .cta-content .section-label {
                    background: rgba(255,255,255,0.1);
                    border-color: rgba(255,255,255,0.3);
                    color: #f5c518;
                }
                .cta-content h2 {
                    font-family: 'Poppins', sans-serif;
                    font-size: 2rem;
                    font-weight: 800;
                    color: #fff;
                    margin: 15px 0 12px;
                }
                .cta-content h2 span {
                    color: #f5c518;
                }
                .cta-content p {
                    color: rgba(255,255,255,0.7);
                    font-size: 0.98rem;
                    margin-bottom: 32px;
                }
                .cta-btn {
                    display: inline-flex;
                    align-items: center;
                    gap: 10px;
                    background: #f5c518;
                    color: #0a1628;
                    padding: 15px 38px;
                    border-radius: 50px;
                    font-weight: 700;
                    font-size: 1rem;
                    text-decoration: none;
                    transition: all 0.25s;
                    box-shadow: 0 10px 25px rgba(245,197,24,0.4);
                }
                .cta-btn:hover {
                    transform: translateY(-4px);
                    box-shadow: 0 18px 35px rgba(245,197,24,0.6);
                }

                /* Responsive */
                @media (max-width: 1100px) {
                    .team-grid { grid-template-columns: repeat(3, 1fr); }
                }
                @media (max-width: 800px) {
                    .team-grid { grid-template-columns: repeat(2, 1fr); }
                }
                @media (max-width: 500px) {
                    .team-grid { grid-template-columns: 1fr; }
                }
            `}),e.jsxs("div",{className:"page-hero",children:[e.jsx("div",{className:"page-hero-dots"}),e.jsx("span",{className:"section-label",children:"Meet The People"}),e.jsxs("h1",{children:["Our ",e.jsx("span",{children:"Team"})]}),e.jsx("p",{children:"Dedicated educators and professionals shaping the future of our students"})]}),e.jsxs("div",{className:"team-header",children:[e.jsx("span",{className:"section-label",children:"Faculty & Staff"}),e.jsxs("h2",{children:["The ",e.jsx("span",{children:"Minds"})," Behind CTC"]}),e.jsx("p",{children:"Our team of experienced educators, industry professionals, and dedicated staff work together to provide an exceptional learning experience."})]}),e.jsx("div",{className:"search-bar",children:e.jsx("input",{type:"text",placeholder:"Search by name or designation...",value:r,onChange:c=>s(c.target.value)})}),e.jsx("div",{className:"team-grid",children:o.map((c,m)=>e.jsxs("div",{className:"team-card reveal",style:{transitionDelay:`${m%4*.08}s`},children:[e.jsx("div",{className:"team-card-img",children:e.jsx("img",{src:c.img,alt:c.name,onError:p=>{p.target.src="/CTC NEW REACT WEBSITE/images/HOMEPAGE/Director Sir.jpg"}})}),e.jsxs("div",{className:"team-card-body",children:[e.jsx("h3",{children:c.name}),e.jsx("div",{className:"designation",children:c.designation}),e.jsxs("div",{className:"qualification",children:[e.jsx("i",{className:"fa-solid fa-certificate",style:{marginRight:"5px",color:"#f5c518"}}),c.qualification]}),e.jsxs("div",{className:"email",children:[e.jsx("i",{className:"fa-solid fa-envelope"}),c.email?e.jsx("a",{href:`mailto:${c.email}`,children:c.email}):e.jsx("span",{children:"Email not available"})]})]})]},c.name))})]})}function qg(){v.useEffect(()=>{const r=document.querySelectorAll(".reveal, .reveal-left, .reveal-right"),s=new IntersectionObserver(o=>o.forEach(c=>{c.isIntersecting&&c.target.classList.add("visible")}),{threshold:.08});return r.forEach(o=>s.observe(o)),()=>s.disconnect()},[])}function Qg(r,s=1800){const[o,c]=v.useState(0),m=v.useRef(null);return v.useEffect(()=>{const p=m.current;if(!p)return;const u=new IntersectionObserver(([x])=>{if(!x.isIntersecting)return;u.disconnect();let h=0;const b=Math.ceil(r/(s/16)),y=()=>{h=Math.min(h+b,r),c(h),h<r&&requestAnimationFrame(y)};requestAnimationFrame(y)},{threshold:.3});return u.observe(p),()=>u.disconnect()},[r,s]),[o,m]}function Xg({pct:r,color:s,label:o,seats:c,admitted:m}){const u=2*Math.PI*54,[x,h]=v.useState(!1),b=v.useRef(null);v.useEffect(()=>{const g=new IntersectionObserver(([T])=>{T.isIntersecting&&(h(!0),g.disconnect())},{threshold:.3});return b.current&&g.observe(b.current),()=>g.disconnect()},[]);const y=x?u*(1-r/100):u;return e.jsxs("div",{ref:b,style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"14px"},children:[e.jsxs("div",{style:{position:"relative",width:"130px",height:"130px"},children:[e.jsxs("svg",{width:"130",height:"130",viewBox:"0 0 130 130",children:[e.jsx("circle",{cx:"65",cy:"65",r:54,fill:"none",stroke:"rgba(255,255,255,0.08)",strokeWidth:"10"}),e.jsx("circle",{cx:"65",cy:"65",r:54,fill:"none",stroke:s,strokeWidth:"10",strokeLinecap:"round",strokeDasharray:u,strokeDashoffset:y,style:{transition:"stroke-dashoffset 1.6s cubic-bezier(.4,0,.2,1)",transformOrigin:"65px 65px",transform:"rotate(-90deg)"}})]}),e.jsxs("div",{style:{position:"absolute",inset:0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[e.jsxs("span",{style:{fontFamily:"var(--font-head)",fontSize:"1.4rem",fontWeight:900,color:"#fff",lineHeight:1},children:[r,"%"]}),e.jsx("span",{style:{fontSize:"0.6rem",color:"rgba(255,255,255,0.45)",marginTop:"2px"},children:"FILLED"})]})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx("div",{style:{fontFamily:"var(--font-head)",fontSize:"1.1rem",fontWeight:800,color:"#fff"},children:o}),e.jsxs("div",{style:{fontSize:"0.72rem",color:"rgba(255,255,255,0.45)",marginTop:"4px"},children:[m," / ",c," seats"]})]})]})}const Zg=[{abbr:"BBA",full:"Bachelor of Business Administration",seats:120,duration:"4 Years",fee:"₹50,000/yr",icon:"fa-solid fa-briefcase",tags:["Marketing","Finance","HR","Entrepreneurship"],accent:"#f5c518"},{abbr:"BCA",full:"Bachelor of Computer Applications",seats:120,duration:"4 Years",fee:"₹60,000/yr",icon:"fa-solid fa-laptop-code",tags:["Web Dev","Networking","Database","Java"],accent:"#00d4ff"},{abbr:"B.Sc CS (H)",full:"B.Sc Computer Science (Hons.)",seats:128,duration:"4 Years",fee:"₹60,000/yr",icon:"fa-solid fa-microchip",tags:["AI / ML","Python","Algorithms","Cloud"],accent:"#7b61ff"},{abbr:"B.Sc DS",full:"B.Sc Data Science",seats:30,duration:"4 Years",fee:"₹70,000/yr",icon:"fa-solid fa-chart-pie",tags:["Data Analytics","Statistics","ML","Tableau"],accent:"#ff6b6b"}],Ap=[{n:"01",icon:"fa-solid fa-clipboard-check",title:"Check Eligibility",body:"10+2 pass with min. 45% from any recognised board."},{n:"02",icon:"fa-solid fa-pen-to-square",title:"Fill Application",body:"Complete the online form or visit the college office."},{n:"03",icon:"fa-solid fa-file-arrow-up",title:"Upload Documents",body:"Upload scanned copies as per the document checklist."},{n:"04",icon:"fa-solid fa-credit-card",title:"Pay Fee",body:"Pay admission fee online or at the college counter."},{n:"05",icon:"fa-solid fa-circle-check",title:"Enrolment",body:"Receive confirmation and report on the specified date."}],e0=[{icon:"fa-solid fa-file-signature",label:"10th Certificate & Mark Sheet"},{icon:"fa-solid fa-file-lines",label:"+2 Certificate & Mark Sheet"},{icon:"fa-solid fa-id-card",label:"Aadhaar Card (Self & Parent)"},{icon:"fa-solid fa-graduation-cap",label:"Character / CLC Certificate"},{icon:"fa-solid fa-passport",label:"Migration Certificate"},{icon:"fa-solid fa-camera",label:"4 Passport-Size Photographs"},{icon:"fa-solid fa-shield-halved",label:"Caste Certificate (if applicable)"},{icon:"fa-solid fa-building-columns",label:"Bank Account Details"}],t0=[{course:"BBA",name:"Mr. Subhrajyoti Behera",email:"subhrajyoticafpl@gmail.com",phone:"+91 9861071840",img:"/CTC NEW REACT WEBSITE/images/OURTEAM/Subhrajyoti Sir.jpg",accent:"#f5c518"},{course:"BCA",name:"Mr. Manoj Kumar Das",email:"dasmanojp@gmail.com",phone:"+91 9338233303",img:"/CTC NEW REACT WEBSITE/images/OURTEAM/Dean Sir.jpg",accent:"#00d4ff"},{course:"B.Sc CS(H)",name:"Mr. Krishnashis Mishra",email:"principal.creativecollege@gmail.com",phone:"+91 9853325903",img:"/CTC NEW REACT WEBSITE/images/OURTEAM/Principal Sir.jpg",accent:"#7b61ff"},{course:"B.Sc DS",name:"Mr. Bhabani Sankar Sahoo",email:"bhabaniwipro89@gmail.com",phone:"+91 9668844571",img:"/CTC NEW REACT WEBSITE/images/OURTEAM/Bhabani Sir.jpg",accent:"#ff6b6b"}],a0=[{label:"BBA",pct:100,color:"#f5c518",seats:120,admitted:120},{label:"BCA",pct:50,color:"#00d4ff",seats:120,admitted:60},{label:"B.Sc CS(H)",pct:53,color:"#7b61ff",seats:128,admitted:68},{label:"B.Sc DS",pct:83,color:"#ff6b6b",seats:36,admitted:30}],n0=[{year:"2020",total:119,bba:16,bca:53,bsccs:50},{year:"2021",total:154,bba:30,bca:60,bsccs:64},{year:"2022",total:155,bba:30,bca:60,bsccs:65},{year:"2023",total:157,bba:30,bca:60,bsccs:67},{year:"2024",total:158,bba:30,bca:60,bsccs:68}],Bo=200;function r0({target:r,suffix:s=""}){const[o,c]=Qg(r);return e.jsxs("span",{ref:c,children:[o,s]})}function i0(){return qg(),e.jsxs(e.Fragment,{children:[e.jsx(Na,{title:"Admission 2026-27 – BBA, BCA, B.Sc CS & Data Science | CTC Angul",description:"Apply for admission at Creative Techno College, Angul – top AICTE-approved college in Angul, Odisha. BBA (120 seats), BCA (120 seats), B.Sc CS (128 seats), B.Sc Data Science (30 seats). Eligibility: 10+2 with minimum 45%.",keywords:"admission in angul college, CTC angul admission 2026, BCA admission angul, BBA admission angul, best college admission angul odisha, creative techno college admission",canonical:"/admission"}),e.jsxs("div",{className:"adm2-hero",children:[e.jsx("div",{className:"adm2-hero-glow"}),e.jsxs("div",{className:"adm2-hero-content",children:[e.jsx("span",{className:"section-label",style:{color:"var(--cyan)"},children:"Admissions Open"}),e.jsxs("h1",{children:["Shape Your ",e.jsx("span",{style:{color:"var(--gold)"},children:"Future"}),e.jsx("br",{}),"at Creative Techno College"]}),e.jsx("p",{children:"AICTE Approved · Utkal University Affiliated · Angul, Odisha"}),e.jsxs("div",{className:"adm2-hero-btns",children:[e.jsxs(Se,{to:"/admission/apply",className:"btn-primary",children:[e.jsx("i",{className:"fa-solid fa-pen-to-square"})," Apply Online"]}),e.jsxs("a",{href:"/pdfs/brochure.pdf",download:!0,className:"btn-outline",children:[e.jsx("i",{className:"fa-solid fa-file-arrow-down"})," Download Brochure"]})]})]}),e.jsx("div",{className:"adm2-hero-stats",children:[{icon:"fa-solid fa-users",val:398,suf:"+",label:"Total Seats"},{icon:"fa-solid fa-graduation-cap",val:1500,suf:"+",label:"Alumni"},{icon:"fa-solid fa-trophy",val:95,suf:"%",label:"Placement Rate"},{icon:"fa-solid fa-calendar-days",val:15,suf:"+",label:"Years of Excellence"}].map((r,s)=>e.jsxs("div",{className:"adm2-qstat",children:[e.jsx("i",{className:r.icon}),e.jsx("div",{className:"adm2-qstat-val",children:e.jsx(r0,{target:r.val,suffix:r.suf})}),e.jsx("div",{className:"adm2-qstat-label",children:r.label})]},s))})]}),e.jsx("section",{className:"adm2-section",style:{background:"var(--page-bg)"},children:e.jsxs("div",{className:"adm2-wrap",children:[e.jsxs("div",{className:"adm2-heading reveal",children:[e.jsx("span",{className:"section-label",children:"Academic Programs"}),e.jsxs("h2",{className:"section-title",children:["Courses ",e.jsx("span",{children:"Offered"})]}),e.jsx("p",{className:"section-subtitle",style:{margin:"0 auto"},children:"Government recognised · Utkal University affiliated · Industry-focused curriculum"})]}),e.jsx("div",{className:"adm2-courses",children:Zg.map((r,s)=>e.jsxs("div",{className:"adm2-course reveal",style:{transitionDelay:`${s*.1}s`},children:[e.jsx("div",{style:{height:"4px",background:r.accent,borderRadius:"20px 20px 0 0",margin:"-28px -28px 24px",flexShrink:0}}),e.jsxs("div",{style:{display:"flex",alignItems:"flex-start",justifyContent:"space-between",gap:"12px",marginBottom:"16px"},children:[e.jsx("div",{style:{background:`${r.accent}1a`,border:`1px solid ${r.accent}44`,borderRadius:"14px",width:"52px",height:"52px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.3rem",color:r.accent,flexShrink:0},children:e.jsx("i",{className:r.icon})}),e.jsxs("div",{style:{background:"var(--page-bg)",borderRadius:"20px",padding:"4px 13px",fontSize:"0.75rem",fontFamily:"var(--font-head)",fontWeight:700,color:"var(--navy)",whiteSpace:"nowrap"},children:[r.seats," seats"]})]}),e.jsx("h3",{style:{fontFamily:"var(--font-head)",fontSize:"1.4rem",fontWeight:900,color:"var(--navy)",marginBottom:"4px"},children:r.abbr}),e.jsx("p",{style:{fontSize:"0.78rem",color:"var(--text-muted)",marginBottom:"16px",lineHeight:1.5},children:r.full}),e.jsx("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",marginBottom:"20px"},children:r.tags.map((o,c)=>e.jsx("span",{style:{background:`${r.accent}16`,color:r.accent,border:`1px solid ${r.accent}30`,borderRadius:"10px",padding:"3px 10px",fontSize:"0.69rem",fontFamily:"var(--font-head)",fontWeight:600},children:o},c))}),e.jsxs("div",{style:{marginTop:"auto",borderTop:"1px solid rgba(10,22,40,0.07)",paddingTop:"16px",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsxs("span",{style:{fontSize:"0.8rem",color:"var(--text-muted)",fontFamily:"var(--font-head)",fontWeight:600},children:[e.jsx("i",{className:"fa-regular fa-clock",style:{marginRight:"5px"}}),r.duration," · ",r.fee]}),e.jsxs(Se,{to:"/admission/apply",style:{display:"inline-flex",alignItems:"center",gap:"6px",background:r.accent,color:r.accent==="#f5c518"?"#0a1628":"#fff",padding:"7px 16px",borderRadius:"20px",fontSize:"0.76rem",fontFamily:"var(--font-head)",fontWeight:700,textDecoration:"none",transition:"opacity 0.2s"},children:["Apply ",e.jsx("i",{className:"fa-solid fa-arrow-right"})]})]})]},s))})]})}),e.jsxs("section",{className:"adm2-section",style:{background:"linear-gradient(160deg, #060d1a 0%, #0a1f3d 50%, #091828 100%)",position:"relative",overflow:"hidden"},children:[e.jsx("div",{style:{position:"absolute",top:"-80px",right:"-80px",width:"400px",height:"400px",borderRadius:"50%",background:"radial-gradient(circle, rgba(0,212,255,0.08) 0%, transparent 70%)",pointerEvents:"none"}}),e.jsx("div",{style:{position:"absolute",bottom:"-60px",left:"-60px",width:"300px",height:"300px",borderRadius:"50%",background:"radial-gradient(circle, rgba(123,97,255,0.08) 0%, transparent 70%)",pointerEvents:"none"}}),e.jsxs("div",{className:"adm2-wrap",style:{position:"relative"},children:[e.jsxs("div",{className:"adm2-heading reveal",children:[e.jsx("span",{className:"section-label",style:{color:"var(--cyan)"},children:"Data Insights"}),e.jsxs("h2",{className:"section-title",style:{color:"#fff"},children:["Admission ",e.jsx("span",{style:{color:"var(--gold)"},children:"Statistics"})]}),e.jsx("p",{style:{color:"rgba(255,255,255,0.45)",fontSize:"0.85rem",marginTop:"6px"},children:"Academic Year 2024-25 seat utilisation & year-over-year enrollment trends"})]}),e.jsx("div",{className:"adm2-rings-row",children:a0.map((r,s)=>e.jsx(Xg,{...r},s))}),e.jsx("div",{style:{height:"1px",background:"rgba(255,255,255,0.07)",margin:"56px 0"}}),e.jsx("div",{className:"adm2-heading reveal",style:{marginBottom:"32px"},children:e.jsx("h3",{style:{fontFamily:"var(--font-head)",fontSize:"1.1rem",fontWeight:800,color:"rgba(255,255,255,0.6)",letterSpacing:"0.1em",textTransform:"uppercase"},children:"Year-over-Year Enrollment (2020–2024)"})}),e.jsxs("div",{className:"adm2-yoy reveal",children:[n0.map((r,s)=>e.jsxs("div",{className:"adm2-yoy-row",children:[e.jsx("div",{className:"adm2-yoy-year",children:r.year}),e.jsxs("div",{className:"adm2-yoy-bars",children:[e.jsxs("div",{className:"adm2-yoy-track",title:`BBA: ${r.bba}`,children:[e.jsx("div",{className:"adm2-yoy-fill",style:{width:`${r.bba/Bo*100}%`,background:"#f5c518"}}),e.jsx("span",{className:"adm2-yoy-tip",children:r.bba})]}),e.jsxs("div",{className:"adm2-yoy-track",title:`BCA: ${r.bca}`,children:[e.jsx("div",{className:"adm2-yoy-fill",style:{width:`${r.bca/Bo*100}%`,background:"#00d4ff"}}),e.jsx("span",{className:"adm2-yoy-tip",children:r.bca})]}),e.jsxs("div",{className:"adm2-yoy-track",title:`B.Sc CS: ${r.bsccs}`,children:[e.jsx("div",{className:"adm2-yoy-fill",style:{width:`${r.bsccs/Bo*100}%`,background:"#7b61ff"}}),e.jsx("span",{className:"adm2-yoy-tip",children:r.bsccs})]})]}),e.jsxs("div",{className:"adm2-yoy-total",children:[e.jsx("span",{style:{fontFamily:"var(--font-head)",fontWeight:900,color:"var(--gold)",fontSize:"1.3rem"},children:r.total}),e.jsx("span",{style:{fontSize:"0.65rem",color:"rgba(255,255,255,0.35)",display:"block",marginTop:"2px"},children:"total"})]})]},s)),e.jsx("div",{className:"adm2-yoy-legend",children:[["#f5c518","BBA"],["#00d4ff","BCA"],["#7b61ff","B.Sc CS(H)"]].map(([r,s])=>e.jsxs("span",{children:[e.jsx("span",{style:{background:r}}),s]},s))})]})]})]}),e.jsx("section",{className:"adm2-section",style:{background:"#fff"},children:e.jsxs("div",{className:"adm2-wrap",children:[e.jsxs("div",{className:"adm2-heading reveal",children:[e.jsx("span",{className:"section-label",children:"Simple Process"}),e.jsxs("h2",{className:"section-title",children:["How to ",e.jsx("span",{children:"Apply"})]})]}),e.jsx("div",{className:"adm2-steps reveal",children:Ap.map((r,s)=>e.jsxs("div",{className:"adm2-step",children:[s<Ap.length-1&&e.jsx("div",{className:"adm2-step-line"}),e.jsx("div",{className:"adm2-step-circle",children:e.jsx("i",{className:r.icon})}),e.jsx("div",{className:"adm2-step-num",children:r.n}),e.jsx("h3",{children:r.title}),e.jsx("p",{children:r.body})]},s))})]})}),e.jsx("section",{className:"adm2-section",style:{background:"var(--page-bg)"},children:e.jsxs("div",{className:"adm2-wrap adm2-doc-coord",children:[e.jsxs("div",{className:"reveal-left",style:{flex:"1 1 300px"},children:[e.jsx("span",{className:"section-label",children:"Checklist"}),e.jsxs("h2",{className:"section-title",style:{marginBottom:"24px"},children:["Documents ",e.jsx("span",{children:"Required"})]}),e.jsx("div",{className:"adm2-docgrid",children:e0.map((r,s)=>e.jsxs("div",{className:"adm2-docitem",children:[e.jsx("i",{className:r.icon}),e.jsx("span",{children:r.label})]},s))})]}),e.jsxs("div",{className:"reveal-right",style:{flex:"1 1 340px"},children:[e.jsx("span",{className:"section-label",children:"Get in Touch"}),e.jsx("h2",{className:"section-title",style:{marginBottom:"24px"},children:"Coordinators"}),e.jsx("div",{className:"adm2-coords",children:t0.map((r,s)=>e.jsxs("div",{className:"adm2-coord",children:[e.jsx("img",{src:r.img,alt:r.name,className:"adm2-coord-img",onError:o=>o.target.style.display="none",style:{borderColor:r.accent}}),e.jsxs("div",{children:[e.jsx("span",{className:"adm2-coord-badge",style:{background:`${r.accent}22`,color:r.accent,border:`1px solid ${r.accent}44`},children:r.course}),e.jsx("p",{className:"adm2-coord-name",children:r.name}),e.jsxs("p",{className:"adm2-coord-info",children:[e.jsx("i",{className:"fa-solid fa-phone"}),r.phone]}),e.jsxs("p",{className:"adm2-coord-info",children:[e.jsx("i",{className:"fa-solid fa-envelope"}),r.email]})]})]},s))})]})]})}),e.jsxs("section",{style:{background:"linear-gradient(135deg, var(--navy) 0%, #0f2a4e 100%)",padding:"80px 5%",overflow:"hidden",position:"relative"},children:[e.jsx("div",{style:{position:"absolute",inset:0,background:"radial-gradient(ellipse at 70% 50%, rgba(0,212,255,0.07) 0%, transparent 60%)",pointerEvents:"none"}}),e.jsxs("div",{style:{maxWidth:"1100px",margin:"0 auto",display:"flex",gap:"60px",alignItems:"center",flexWrap:"wrap",position:"relative"},children:[e.jsxs("div",{className:"reveal-left",style:{flex:"1 1 300px"},children:[e.jsx("span",{className:"section-label",style:{color:"var(--cyan)"},children:"Official Publication"}),e.jsxs("h2",{className:"section-title",style:{color:"#fff",marginBottom:"18px"},children:["College ",e.jsx("span",{style:{color:"var(--gold)"},children:"Brochure"})]}),e.jsx("p",{style:{color:"rgba(255,255,255,0.6)",lineHeight:1.9,fontSize:"0.9rem"},children:"Creative Techno College, Angul — permanently recognised by the Government of Odisha, Dept. of Higher Education and affiliated to Utkal University. A pioneer in IT and Management education in Central Odisha since 2010."}),e.jsxs("div",{style:{marginTop:"20px",display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsxs("p",{style:{color:"rgba(255,255,255,0.55)",fontSize:"0.82rem"},children:[e.jsx("i",{className:"fa-solid fa-location-dot",style:{color:"var(--cyan)",marginRight:"8px"}}),"Baluakata, Saradhapur, Angul, Odisha"]}),e.jsxs("p",{style:{color:"rgba(255,255,255,0.55)",fontSize:"0.82rem"},children:[e.jsx("i",{className:"fa-solid fa-building",style:{color:"var(--cyan)",marginRight:"8px"}}),"City Office: Tamrit Colony, Angul"]})]}),e.jsxs("a",{href:"/pdfs/brochure.pdf",download:!0,className:"btn-primary",style:{marginTop:"28px",display:"inline-flex"},children:[e.jsx("i",{className:"fa-solid fa-file-arrow-down"})," Download Brochure"]})]}),e.jsx("div",{className:"reveal-right",style:{flex:"1 1 280px",maxWidth:"460px"},children:e.jsx("img",{src:"/CTC NEW REACT WEBSITE/images/Admission/banner.png",alt:"CTC Brochure",style:{width:"100%",borderRadius:"20px",boxShadow:"0 24px 60px rgba(0,0,0,0.5)"},onError:r=>r.target.style.display="none"})})]})]})]})}const s0="/CTC%20NEW%20REACT%20WEBSITE/Admission/submit.php",Jo=[{id:1,label:"Personal Info",icon:"fa-solid fa-user"},{id:2,label:"Academic Info",icon:"fa-solid fa-graduation-cap"},{id:3,label:"Course & Details",icon:"fa-solid fa-book-open"},{id:4,label:"Review & Submit",icon:"fa-solid fa-paper-plane"}];function o0({step:r}){return e.jsx("div",{className:"af-progress",children:Jo.map((s,o)=>e.jsxs("div",{className:`af-step-node ${r>=s.id?"done":""} ${r===s.id?"active":""}`,children:[e.jsx("div",{className:"af-node-circle",children:r>s.id?e.jsx("i",{className:"fa-solid fa-check"}):e.jsx("i",{className:s.icon})}),e.jsx("span",{className:"af-node-label",children:s.label}),o<Jo.length-1&&e.jsx("div",{className:`af-node-line ${r>s.id?"done":""}`})]},s.id))})}function Pe({label:r,icon:s,error:o,children:c}){return e.jsxs("div",{className:"af-field",children:[e.jsxs("label",{className:"af-label",children:[s&&e.jsx("i",{className:s}),r]}),c,o&&e.jsxs("span",{className:"af-error",children:[e.jsx("i",{className:"fa-solid fa-circle-exclamation"})," ",o]})]})}function l0(){const r=tr(),[s,o]=v.useState(1),[c,m]=v.useState(!1),[p,u]=v.useState(!1),[x,h]=v.useState(""),[b,y]=v.useState(null),[g,T]=v.useState({}),[E,F]=v.useState({fullName:"",dob:"",gender:"",category:"",phone:"",email:"",school10:"",pct10:"",school12:"",stream:"",pct12:"",yearPass:"",course:"",address:"",district:"",state:"Odisha",pincode:"",havePC:"",reference:""});v.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[s]);const R=(K,J)=>F(ye=>({...ye,[K]:J})),z=K=>T(J=>{const ye={...J};return delete ye[K],ye});function P(K){const J={};return K===1&&(E.fullName.trim()||(J.fullName="Full name is required"),E.dob||(J.dob="Date of birth is required"),E.gender||(J.gender="Please select your gender"),E.phone.match(/^\d{10}$/)||(J.phone="Enter a valid 10-digit mobile number")),K===2&&(E.school10.trim()||(J.school10="Please enter your 10th school name"),E.pct10||(J.pct10="Enter 10th percentage / grade"),E.school12.trim()||(J.school12="Please enter your +2 school name"),E.pct12||(J.pct12="Enter +2 percentage / grade"),E.stream||(J.stream="Please select your +2 stream"),E.yearPass||(J.yearPass="Enter your year of passing +2")),K===3&&(E.course||(J.course="Please select a course"),E.address.trim()||(J.address="Address is required"),E.district.trim()||(J.district="District is required"),E.pincode.match(/^\d{6}$/)||(J.pincode="Enter a valid 6-digit pin code")),J}function I(){const K=P(s);if(Object.keys(K).length){T(K);return}T({}),o(J=>J+1)}function U(){o(K=>K-1),T({})}async function q(){u(!0),h("");try{const J=await(await fetch(s0,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(E)})).json();J.success?(y(J.application_id),m(!0)):h(J.error||"Submission failed. Please try again.")}catch{h("Network error. Please check your connection and try again.")}finally{u(!1)}}const ie=({name:K,type:J="text",placeholder:ye,...it})=>e.jsx("input",{className:`af-input ${g[K]?"af-input-err":""}`,type:J,value:E[K],placeholder:ye,onChange:Xe=>{R(K,Xe.target.value),z(K)},...it}),me=({name:K,children:J})=>e.jsx("select",{className:`af-input ${g[K]?"af-input-err":""}`,value:E[K],onChange:ye=>{R(K,ye.target.value),z(K)},children:J});return c?e.jsx(c0,{name:E.fullName,course:E.course,appId:b,navigate:r}):e.jsxs("div",{className:"af-page",children:[e.jsxs("div",{className:"af-hero",children:[e.jsx("div",{className:"af-hero-glow"}),e.jsxs("div",{style:{position:"relative"},children:[e.jsx("span",{className:"section-label",style:{color:"var(--cyan)"},children:"Online Application"}),e.jsxs("h1",{style:{fontFamily:"var(--font-head)",fontSize:"clamp(1.6rem, 3.5vw, 2.6rem)",fontWeight:900,color:"#fff",margin:"12px 0 10px"},children:["Apply for Admission ",e.jsx("span",{style:{color:"var(--gold)"},children:"2026–27"})]}),e.jsx("p",{style:{color:"rgba(255,255,255,0.45)",fontSize:"0.88rem",letterSpacing:"0.04em"},children:"Creative Techno College, Angul · AICTE Approved · Utkal University Affiliated"})]})]}),e.jsxs("div",{className:"af-body",children:[e.jsxs("div",{className:"af-card",children:[e.jsx(o0,{step:s}),s===1&&e.jsxs("div",{className:"af-form-section",children:[e.jsxs("h2",{className:"af-form-title",children:[e.jsx("i",{className:"fa-solid fa-user"})," Personal Information"]}),e.jsxs("div",{className:"af-grid-2",children:[e.jsx(Pe,{label:"Full Name *",icon:"fa-solid fa-signature",error:g.fullName,children:e.jsx(ie,{name:"fullName",placeholder:"As per 10th certificate"})}),e.jsx(Pe,{label:"Date of Birth *",error:g.dob,children:e.jsx(ie,{name:"dob",type:"date"})}),e.jsx(Pe,{label:"Gender *",error:g.gender,children:e.jsxs(me,{name:"gender",children:[e.jsx("option",{value:"",children:"Select Gender"}),e.jsx("option",{children:"Male"}),e.jsx("option",{children:"Female"}),e.jsx("option",{children:"Other"})]})}),e.jsx(Pe,{label:"Category",children:e.jsxs(me,{name:"category",children:[e.jsx("option",{value:"",children:"Select Category"}),e.jsx("option",{children:"General"}),e.jsx("option",{children:"OBC"}),e.jsx("option",{children:"SC"}),e.jsx("option",{children:"ST"}),e.jsx("option",{children:"PwD"})]})}),e.jsx(Pe,{label:"Mobile Number *",icon:"fa-solid fa-phone",error:g.phone,children:e.jsx(ie,{name:"phone",type:"tel",placeholder:"10-digit mobile number",maxLength:10})}),e.jsx(Pe,{label:"Email Address",icon:"fa-solid fa-envelope",children:e.jsx(ie,{name:"email",type:"email",placeholder:"Optional"})})]})]}),s===2&&e.jsxs("div",{className:"af-form-section",children:[e.jsxs("h2",{className:"af-form-title",children:[e.jsx("i",{className:"fa-solid fa-graduation-cap"})," Academic Details"]}),e.jsx("p",{className:"af-form-subtitle",children:"10th Certificate Details"}),e.jsxs("div",{className:"af-grid-2",children:[e.jsx(Pe,{label:"10th School / Board *",error:g.school10,children:e.jsx(ie,{name:"school10",placeholder:"School name"})}),e.jsx(Pe,{label:"10th Percentage / CGPA *",error:g.pct10,children:e.jsx(ie,{name:"pct10",placeholder:"e.g. 78% or 7.8 CGPA"})})]}),e.jsx("p",{className:"af-form-subtitle",style:{marginTop:"24px"},children:"+2 / 12th / Diploma Details"}),e.jsxs("div",{className:"af-grid-2",children:[e.jsx(Pe,{label:"+2 School / College / Board *",error:g.school12,children:e.jsx(ie,{name:"school12",placeholder:"School / college name"})}),e.jsx(Pe,{label:"+2 Stream *",error:g.stream,children:e.jsxs(me,{name:"stream",children:[e.jsx("option",{value:"",children:"Select Stream"}),e.jsx("option",{children:"Science (PCM)"}),e.jsx("option",{children:"Science (PCB)"}),e.jsx("option",{children:"Commerce"}),e.jsx("option",{children:"Arts / Humanities"}),e.jsx("option",{children:"Vocational"}),e.jsx("option",{children:"Diploma"})]})}),e.jsx(Pe,{label:"+2 Percentage / CGPA *",error:g.pct12,children:e.jsx(ie,{name:"pct12",placeholder:"e.g. 65% or 6.5 CGPA"})}),e.jsx(Pe,{label:"Year of Passing +2 *",error:g.yearPass,children:e.jsxs(me,{name:"yearPass",children:[e.jsx("option",{value:"",children:"Select Year"}),[2025,2024,2023,2022,2021,2020,2019].map(K=>e.jsx("option",{children:K},K))]})})]})]}),s===3&&e.jsxs("div",{className:"af-form-section",children:[e.jsxs("h2",{className:"af-form-title",children:[e.jsx("i",{className:"fa-solid fa-book-open"})," Course & Contact Details"]}),e.jsxs(Pe,{label:"Course Applied For *",error:g.course,children:[e.jsx("div",{className:"af-course-pick",children:[{v:"BBA",label:"BBA",sub:"Bachelor of Business Administration",color:"#f5c518"},{v:"BCA",label:"BCA",sub:"Bachelor of Computer Applications",color:"#00d4ff"},{v:"B.Sc CS(H)",label:"B.Sc CS(H)",sub:"Computer Science (Honours)",color:"#7b61ff"},{v:"B.Sc DS",label:"B.Sc DS",sub:"Data Science",color:"#ff6b6b"}].map(K=>e.jsxs("label",{className:`af-course-tile ${E.course===K.v?"sel":""}`,style:{"--tc":K.color},children:[e.jsx("input",{type:"radio",name:"course",value:K.v,checked:E.course===K.v,onChange:()=>{R("course",K.v),z("course")}}),e.jsx("strong",{children:K.label}),e.jsx("span",{children:K.sub})]},K.v))}),g.course&&e.jsxs("span",{className:"af-error",children:[e.jsx("i",{className:"fa-solid fa-circle-exclamation"})," ",g.course]})]}),e.jsx("p",{className:"af-form-subtitle",style:{marginTop:"24px"},children:"Permanent Address"}),e.jsxs("div",{className:"af-grid-2",children:[e.jsx(Pe,{label:"Address *",error:g.address,children:e.jsx("textarea",{className:`af-input ${g.address?"af-input-err":""}`,rows:3,placeholder:"Street / Village / Ward",value:E.address,onChange:K=>{R("address",K.target.value),z("address")}})}),e.jsxs("div",{children:[e.jsx(Pe,{label:"District *",error:g.district,children:e.jsx(ie,{name:"district",placeholder:"e.g. Angul"})}),e.jsx(Pe,{label:"State",style:{marginTop:"12px"},children:e.jsx(ie,{name:"state",placeholder:"State"})})]}),e.jsx(Pe,{label:"PIN Code *",error:g.pincode,children:e.jsx(ie,{name:"pincode",placeholder:"6-digit pin",maxLength:6})}),e.jsx(Pe,{label:"Do you have a PC / Laptop at home?",children:e.jsxs(me,{name:"havePC",children:[e.jsx("option",{value:"",children:"Select"}),e.jsx("option",{children:"Yes"}),e.jsx("option",{children:"No"})]})}),e.jsx(Pe,{label:"How did you hear about us?",children:e.jsxs(me,{name:"reference",children:[e.jsx("option",{value:"",children:"Select"}),e.jsx("option",{children:"Friend / Family"}),e.jsx("option",{children:"Social Media"}),e.jsx("option",{children:"News / Newspaper"}),e.jsx("option",{children:"School / Teacher"}),e.jsx("option",{children:"Walk-in / Visit"}),e.jsx("option",{children:"Other"})]})})]})]}),s===4&&e.jsxs("div",{className:"af-form-section",children:[e.jsxs("h2",{className:"af-form-title",children:[e.jsx("i",{className:"fa-solid fa-eye"})," Review Your Application"]}),e.jsxs("p",{style:{color:"var(--text-muted)",fontSize:"0.83rem",marginBottom:"24px"},children:["Please review your information carefully. Clicking ",e.jsx("strong",{children:"Submit Application"})," will securely save your details directly to the database."]}),e.jsxs("div",{className:"af-review-grid",children:[e.jsx(zo,{title:"Personal Information",icon:"fa-solid fa-user",rows:[["Full Name",E.fullName],["Date of Birth",E.dob],["Gender",E.gender],["Category",E.category||"General"],["Mobile",E.phone],["Email",E.email||"—"]]}),e.jsx(zo,{title:"Academic Details",icon:"fa-solid fa-graduation-cap",rows:[["10th School",E.school10],["10th Marks",E.pct10],["+2 School",E.school12],["+2 Stream",E.stream],["+2 Marks",E.pct12],["Year of Pass",E.yearPass]]}),e.jsx(zo,{title:"Course & Address",icon:"fa-solid fa-book-open",rows:[["Course",E.course],["Address",E.address],["District",E.district],["State",E.state],["PIN Code",E.pincode],["Has PC/Laptop",E.havePC||"—"],["Reference",E.reference||"—"]]})]}),e.jsxs("div",{className:"af-wa-notice",style:{background:"rgba(45,125,210,0.08)",borderColor:"rgba(45,125,210,0.25)"},children:[e.jsx("i",{className:"fa-solid fa-database",style:{color:"var(--cyan)"}}),e.jsxs("p",{children:["Your application will be ",e.jsx("strong",{children:"securely stored"})," in the college database. The admission team will contact you on your registered mobile number for document verification."]})]})]}),e.jsxs("div",{className:"af-nav",children:[s>1?e.jsxs("button",{className:"af-btn-back",onClick:U,children:[e.jsx("i",{className:"fa-solid fa-arrow-left"})," Back"]}):e.jsxs(Se,{to:"/admission",className:"af-btn-back",children:[e.jsx("i",{className:"fa-solid fa-arrow-left"})," Admission Info"]}),e.jsxs("div",{style:{display:"flex",gap:"10px",alignItems:"center"},children:[e.jsxs("span",{className:"af-step-count",children:["Step ",s," of ",Jo.length]}),s<4?e.jsxs("button",{className:"af-btn-next",onClick:I,children:["Next ",e.jsx("i",{className:"fa-solid fa-arrow-right"})]}):e.jsx("button",{className:"af-btn-submit",onClick:q,disabled:p,style:{opacity:p?.7:1,cursor:p?"wait":"pointer"},children:p?e.jsxs(e.Fragment,{children:[e.jsx("i",{className:"fa-solid fa-spinner fa-spin"})," Submitting…"]}):e.jsxs(e.Fragment,{children:[e.jsx("i",{className:"fa-solid fa-paper-plane"})," Submit Application"]})})]}),x&&e.jsxs("p",{style:{color:"#e53e3e",fontSize:"0.82rem",marginTop:"10px",textAlign:"right",fontFamily:"var(--font-head)"},children:[e.jsx("i",{className:"fa-solid fa-circle-exclamation"})," ",x]})]})]}),e.jsxs("aside",{className:"af-aside",children:[e.jsxs("div",{className:"af-aside-card",children:[e.jsxs("h3",{children:[e.jsx("i",{className:"fa-solid fa-circle-info"})," Important Info"]}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Admission is on a ",e.jsx("strong",{children:"first-come, first-served"})," basis."]}),e.jsx("li",{children:"Bring original documents on the day of admission."}),e.jsxs("li",{children:["Eligibility: 10+2 pass with min. ",e.jsx("strong",{children:"45%"})," marks."]}),e.jsxs("li",{children:["For queries call: ",e.jsx("strong",{children:"+91 9668844571"})]})]})]}),e.jsxs("div",{className:"af-aside-card af-aside-courses",children:[e.jsxs("h3",{children:[e.jsx("i",{className:"fa-solid fa-table-list"})," Available Seats"]}),[{label:"BBA",seats:120,color:"#f5c518"},{label:"BCA",seats:120,color:"#00d4ff"},{label:"B.Sc CS(H)",seats:128,color:"#7b61ff"},{label:"B.Sc DS",seats:30,color:"#ff6b6b"}].map(K=>e.jsxs("div",{className:"af-seat-row",children:[e.jsx("span",{style:{width:"10px",height:"10px",borderRadius:"50%",background:K.color,display:"inline-block",flexShrink:0}}),e.jsx("span",{className:"af-seat-label",children:K.label}),e.jsxs("span",{className:"af-seat-count",children:[K.seats," seats"]})]},K.label))]}),e.jsxs("div",{className:"af-aside-card",children:[e.jsxs("h3",{children:[e.jsx("i",{className:"fa-solid fa-location-dot"})," Campus Address"]}),e.jsx("p",{children:"Baluakata, Saradhapur, Angul, Odisha — 759143"}),e.jsx("p",{style:{marginTop:"8px"},children:"City Office: Tamrit Colony, Angul"})]})]})]})]})}function zo({title:r,icon:s,rows:o}){return e.jsxs("div",{className:"af-review-block",children:[e.jsxs("div",{className:"af-review-block-title",children:[e.jsx("i",{className:s})," ",r]}),o.map(([c,m])=>e.jsxs("div",{className:"af-review-row",children:[e.jsx("span",{className:"af-review-key",children:c}),e.jsx("span",{className:"af-review-val",children:m||"—"})]},c))]})}function c0({name:r,course:s,appId:o,navigate:c}){return e.jsx("div",{className:"af-success-page",children:e.jsxs("div",{className:"af-success-card",children:[e.jsx("div",{className:"af-success-icon",children:e.jsx("i",{className:"fa-solid fa-circle-check"})}),e.jsx("h2",{children:"Application Submitted!"}),e.jsxs("p",{children:["Thank you, ",e.jsx("strong",{children:r}),"! Your application for ",e.jsx("strong",{children:s})," has been received by Creative Techno College."]}),o&&e.jsxs("p",{style:{marginTop:"14px",fontSize:"0.88rem",fontFamily:"var(--font-head)",color:"var(--blue-light)"},children:[e.jsx("i",{className:"fa-solid fa-hashtag"})," Application ID: ",e.jsxs("strong",{style:{color:"var(--gold)"},children:["#",o]})]}),e.jsxs("p",{style:{fontSize:"0.82rem",color:"var(--text-muted)",marginTop:"12px"},children:["Our team will contact you on ",e.jsxs("strong",{children:[r.split(" ")[0],"'s"]})," registered mobile number for further steps. Please keep your documents ready."]}),e.jsxs("div",{style:{display:"flex",gap:"12px",justifyContent:"center",flexWrap:"wrap",marginTop:"28px"},children:[e.jsxs("button",{className:"btn-primary",onClick:()=>c("/admission"),children:[e.jsx("i",{className:"fa-solid fa-arrow-left"})," Back to Admission"]}),e.jsxs("button",{className:"btn-outline",onClick:()=>c("/"),children:[e.jsx("i",{className:"fa-solid fa-house"})," Home"]})]})]})})}const d0=[{code:"BBA",full:"Bachelor of Business Administration",tagline:"Lead. Manage. Innovate.",icon:"fa-solid fa-briefcase",color:"#f59e0b",colorDark:"#d97706",colorLight:"#fef3c7",accent:"#92400e",tag:"Management",seats:120,duration:"4 Years · 8 Semesters",eligibility:"10+2 pass in any stream from a recognised board",overview:"The BBA program provides a solid foundation in management, business principles, and entrepreneurship. It blends theoretical concepts with practical applications to prepare students for leadership roles in the corporate world.",highlights:["Core subjects in Marketing, Finance, and Human Resource Management","Case studies, business simulations, and industry projects","Regular seminars, workshops, and industry visits","Focus on communication, leadership, and decision-making skills"],career:["Business Manager","Marketing Executive","HR Specialist","Entrepreneur","MBA Studies"],syllabus:"/CTC NEW REACT WEBSITE/images/REGULARCOURSES/BBA.pdf"},{code:"BCA",full:"Bachelor of Computer Applications",tagline:"Code. Build. Deploy.",icon:"fa-solid fa-laptop-code",color:"#3b82f6",colorDark:"#2563eb",colorLight:"#eff6ff",accent:"#1e3a8a",tag:"Technology",seats:120,duration:"4 Years · 8 Semesters",eligibility:"10+2 pass in any stream with Mathematics / Statistics as one subject",overview:"BCA is an undergraduate program focused on computer applications and IT skills. It prepares students to work in the software industry with a strong foundation in programming, databases, and system design.",highlights:["Programming in C, C++, Java, Python","Database Management, Web Development & Software Engineering","Exposure to cloud computing, networking & cybersecurity","Hands-on training via projects, coding competitions & workshops"],career:["Software Developer","Web Designer","Database Admin","System Analyst","MCA Studies"],syllabus:"/CTC NEW REACT WEBSITE/images/REGULARCOURSES/BCA.pdf"},{code:"B.Sc CS",full:"B.Sc. Computer Science (Honours)",tagline:"Analyse. Compute. Discover.",icon:"fa-solid fa-microchip",color:"#10b981",colorDark:"#059669",colorLight:"#ecfdf5",accent:"#064e3b",tag:"Science",seats:128,duration:"4 Years · 8 Semesters",eligibility:"10+2 pass with Science stream (compulsory)",overview:"This program offers in-depth knowledge of computer science fundamentals and advanced concepts. It emphasises analytical skills, algorithmic thinking, and research-oriented study.",highlights:["Data Structures, Algorithms & Operating Systems","Computer Networks, AI, Compiler Design, Software Development","Practical lab sessions and mini-projects every semester","Research and innovation-driven learning environment"],career:["Software Engineer","System Admin","Research Associate","M.Sc./MCA Studies"],syllabus:"/CTC NEW REACT WEBSITE/images/REGULARCOURSES/Bsc.pdf"},{code:"B.Sc DS",full:"B.Sc. Computer Science (Data Science)",tagline:"Predict. Analyse. Transform.",icon:"fa-solid fa-chart-line",color:"#8b5cf6",colorDark:"#7c3aed",colorLight:"#f5f3ff",accent:"#4c1d95",tag:"Data Science",seats:30,duration:"4 Years · 8 Semesters",eligibility:"10+2 pass with Science stream — Mathematics is compulsory",overview:"Designed for students aspiring to build a career in Data Science and AI. Focuses on data analytics, machine learning, and big data technologies for tech-driven industries.",highlights:["Python, R, Statistics & Data Visualization","Machine Learning, Deep Learning & Artificial Intelligence","Big Data Analytics & Cloud Computing concepts","Industry-based projects, internships & live case studies"],career:["Data Analyst","ML Engineer","BI Developer","AI Researcher","M.Sc. DS Studies"],syllabus:"/CTC NEW REACT WEBSITE/images/REGULARCOURSES/BscDsc.pdf"}];function p0(r,s=1500,o=!1){const[c,m]=v.useState(0);return v.useEffect(()=>{if(!o)return;let p=null;const u=x=>{p||(p=x);const h=Math.min((x-p)/s,1);m(Math.floor(h*r)),h<1&&requestAnimationFrame(u)};requestAnimationFrame(u)},[r,s,o]),c}const m0=[{value:4,label:"Programs",suffix:""},{value:240,label:"Total Seats",suffix:"+"},{value:4,label:"Year Duration",suffix:""},{value:100,label:"Placement Assist",suffix:"%"}];function u0(){const r=v.useRef(null),[s,o]=v.useState(!1);return v.useEffect(()=>{const c=new IntersectionObserver(([m])=>{m.isIntersecting&&o(!0)},{threshold:.3});return r.current&&c.observe(r.current),()=>c.disconnect()},[]),e.jsx("div",{ref:r,className:"rc2-stats-row",children:m0.map((c,m)=>{const p=p0(c.value,1400,s);return e.jsxs("div",{className:"rc2-stat",style:{animationDelay:`${m*.1}s`},children:[e.jsxs("span",{className:"rc2-stat-num",children:[p,c.suffix]}),e.jsx("span",{className:"rc2-stat-label",children:c.label})]},m)})})}function f0({course:r,index:s}){const[o,c]=v.useState(!1),m=v.useRef(null),[p,u]=v.useState(!1);return v.useEffect(()=>{const x=new IntersectionObserver(([h])=>{h.isIntersecting&&u(!0)},{threshold:.1});return m.current&&x.observe(m.current),()=>x.disconnect()},[]),e.jsxs("div",{ref:m,className:`rc2-card${p?" rc2-card--visible":""}`,style:{"--card-color":r.color,"--card-dark":r.colorDark,"--card-light":r.colorLight,animationDelay:`${s*.1}s`},children:[e.jsxs("div",{className:"rc2-card-header",style:{background:`linear-gradient(135deg, ${r.colorDark} 0%, ${r.color} 100%)`},children:[e.jsx("div",{className:"rc2-card-header-bg"}),e.jsx("div",{className:"rc2-card-tag",children:r.tag}),e.jsx("i",{className:`${r.icon} rc2-card-icon`}),e.jsx("h3",{className:"rc2-card-code",children:r.code}),e.jsx("p",{className:"rc2-card-full",children:r.full}),e.jsx("p",{className:"rc2-card-tagline",children:r.tagline}),e.jsxs("div",{className:"rc2-card-pills",children:[e.jsxs("span",{children:[e.jsx("i",{className:"fa-regular fa-clock"})," ",r.duration]}),e.jsxs("span",{children:[e.jsx("i",{className:"fa-solid fa-users"})," ",r.seats," Seats"]})]})]}),e.jsx("div",{className:"rc2-card-quick",children:e.jsxs("div",{className:"rc2-card-quick-item",children:[e.jsx("i",{className:"fa-solid fa-check-circle",style:{color:r.color}}),e.jsx("span",{children:r.eligibility})]})}),e.jsxs("button",{className:"rc2-card-toggle",style:{"--btn-color":r.color},onClick:()=>c(x=>!x),children:[e.jsx("span",{children:o?"Show Less":"Explore Course"}),e.jsx("i",{className:`fa-solid fa-chevron-${o?"up":"down"}`})]}),e.jsx("div",{className:`rc2-card-body${o?" rc2-card-body--open":""}`,children:e.jsxs("div",{className:"rc2-card-body-inner",children:[e.jsxs("div",{className:"rc2-section",children:[e.jsxs("h4",{children:[e.jsx("i",{className:"fa-solid fa-circle-info",style:{color:r.color}})," Overview"]}),e.jsx("p",{children:r.overview})]}),e.jsxs("div",{className:"rc2-section",children:[e.jsxs("h4",{children:[e.jsx("i",{className:"fa-solid fa-star",style:{color:r.color}})," Program Highlights"]}),e.jsx("ul",{className:"rc2-highlights",children:r.highlights.map((x,h)=>e.jsxs("li",{children:[e.jsx("span",{className:"rc2-bullet",style:{background:r.color}}),x]},h))})]}),e.jsxs("div",{className:"rc2-section",children:[e.jsxs("h4",{children:[e.jsx("i",{className:"fa-solid fa-rocket",style:{color:r.color}})," Career Paths"]}),e.jsx("div",{className:"rc2-career-tags",children:r.career.map((x,h)=>e.jsx("span",{className:"rc2-career-tag",style:{"--tc":r.color,"--tl":r.colorLight},children:x},h))})]}),e.jsxs("a",{href:r.syllabus,download:!0,className:"rc2-syllabus-btn",style:{background:`linear-gradient(135deg, ${r.colorDark}, ${r.color})`},children:[e.jsx("i",{className:"fa-solid fa-file-pdf"}),"Download Syllabus"]})]})})]})}function h0(){return e.jsxs("div",{className:"rc2-page",children:[e.jsx(Na,{title:"BBA, BCA, B.Sc CS & Data Science Courses in Angul – CTC",description:"Explore 4-year degree programs at Creative Techno College, Angul: BBA (120 seats), BCA (120 seats), B.Sc Computer Science (128 seats), B.Sc Data Science (30 seats). AICTE approved. Affiliated to Utkal University.",keywords:"BBA college angul, BCA college angul, computer science college angul, data science college angul, best courses angul odisha, CTC angul courses, technical courses angul",canonical:"/academics/regular"}),e.jsx("style",{children:`
                .rc2-page { background: #f8faff; min-height: 100vh; }

                /* ── HERO ── */
                .rc2-hero {
                    background: linear-gradient(165deg, #020c1b 0%, #0c2340 40%, #112d52 70%, #060f1e 100%);
                    padding: 80px 5% 0;
                    position: relative;
                    overflow: hidden;
                }

                /* New Flex Container for Left/Right Split */
                .rc2-hero-content {
                    position: relative;
                    z-index: 2;
                    display: flex;
                    align-items: center; /* Vertical Center */
                    justify-content: space-between;
                    gap: 40px;
                    flex-wrap: wrap;
                    max-width: 1200px;
                    margin: 0 auto;
                    text-align: left; /* Reset text to left */
                    padding-bottom: 60px;
                }

                .rc2-hero-left { flex: 1; min-width: 300px; }
                .rc2-hero-right { flex-shrink: 0; }

                /* Yellow Accent Chip */
                .rc2-hero-chip {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    background: rgba(255, 204, 0, 0.1);
                    border: 1px solid rgba(255, 204, 0, 0.28);
                    color: #ffcc00; /* Yellow */
                    padding: 6px 16px;
                    border-radius: 30px;
                    font-size: 0.68rem;
                    font-weight: 800;
                    letter-spacing: 2px;
                    text-transform: uppercase;
                    margin-bottom: 18px;
                }

                .rc2-hero h1 {
                    font-family: 'Poppins', sans-serif;
                    font-size: clamp(2rem, 5vw, 3.4rem);
                    font-weight: 900;
                    color: #fff;
                    line-height: 1.1;
                    margin-bottom: 20px;
                }

                .rc2-hero h1 em {
                    font-style: normal;
                    color: #ffcc00; /* Yellow instead of gradient */
                }

                .rc2-hero p {
                    color: rgba(255, 255, 255, 0.5); /* Muted descriptive text */
                    font-size: 1.05rem;
                    line-height: 1.8;
                    max-width: 580px;
                    margin: 0; /* Remove auto centering */
                }

                /* Stacked Buttons on the Right */
                .rc2-hero-btns {
                    display: flex;
                    flex-direction: column; /* Stacks the CTA and Explore buttons */
                    gap: 16px;
                    min-width: 250px;
                }

                .rc2-btn-primary {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 10px;
                    background: #ffcc00; /* Solid Yellow */
                    color: #020c1b;
                    padding: 16px 32px;
                    border-radius: 12px;
                    font-weight: 800;
                    font-size: 0.95rem;
                    text-decoration: none;
                    transition: all 0.3s;
                    box-shadow: 0 8px 25px rgba(255, 204, 0, 0.2);
                }

                .rc2-btn-outline {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 10px;
                    background: rgba(255, 255, 255, 0.05);
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    color: #fff;
                    padding: 14px 32px;
                    border-radius: 12px;
                    font-weight: 700;
                    font-size: 0.95rem;
                    text-decoration: none;
                    transition: all 0.3s;
                }

                /* ── STATS ── */
                .rc2-stats-wrap { background: #fff; padding: 0 5% 10px; }
                .rc2-stats-row {
                    max-width: 900px; margin: -40px auto 0;
                    display: grid; grid-template-columns: repeat(4, 1fr);
                    background: #fff; border-radius: 20px;
                    box-shadow: 0 20px 60px rgba(10,22,40,0.15);
                    overflow: hidden; border: 1px solid rgba(10,22,40,0.08);
                    position: relative; z-index: 2;
                }
                .rc2-stat {
                    padding: 28px 20px; text-align: center; position: relative;
                    animation: rc2StatIn 0.6s ease both;
                }
                .rc2-stat:not(:last-child) { border-right: 1px solid rgba(10,22,40,0.07); }
                .rc2-stat:nth-child(1) { border-top: 4px solid #f5c518; }
                .rc2-stat:nth-child(2) { border-top: 4px solid #3b82f6; }
                .rc2-stat:nth-child(3) { border-top: 4px solid #10b981; }
                .rc2-stat:nth-child(4) { border-top: 4px solid #8b5cf6; }
                @keyframes rc2StatIn { from { opacity:0; transform: translateY(20px); } to { opacity:1; transform: translateY(0); } }
                .rc2-stat-num {
                    display: block; font-family: 'Poppins', sans-serif;
                    font-size: 2.4rem; font-weight: 900; color: #0a1628; line-height: 1;
                }
                .rc2-stat-label { display: block; font-size: 0.72rem; font-weight: 600; color: #64748b; margin-top: 6px; text-transform: uppercase; letter-spacing: 0.5px; }

                /* ── INTRO ── */
                .rc2-intro { background: #fff; padding: 80px 5% 60px; }
                .rc2-intro-inner {
                    max-width: 1000px; margin: 0 auto;
                    background: linear-gradient(135deg, #0a1628 0%, #1a3a6b 100%);
                    border-radius: 28px; padding: 56px; text-align: center;
                    position: relative; overflow: hidden;
                    box-shadow: 0 24px 80px rgba(10,22,40,0.25);
                }
                .rc2-intro-inner::before {
                    content: '';
                    position: absolute; top: 0; right: 0;
                    width: 300px; height: 300px;
                    background: radial-gradient(circle, rgba(0,212,255,0.12) 0%, transparent 70%);
                }
                .rc2-intro-icon {
                    width: 72px; height: 72px; background: rgba(245,197,24,0.15);
                    border: 2px solid rgba(245,197,24,0.35); border-radius: 50%;
                    display: flex; align-items: center; justify-content: center;
                    font-size: 1.8rem; margin: 0 auto 20px; position: relative; z-index: 1;
                }
                .rc2-intro-inner h2 {
                    font-family: 'Poppins', sans-serif; font-size: 2rem; font-weight: 900;
                    color: #f5c518; margin-bottom: 14px; position: relative; z-index: 1;
                }
                .rc2-intro-inner p {
                    font-size: 1rem; color: rgba(255,255,255,0.75); line-height: 1.9;
                    max-width: 720px; margin: 0 auto; position: relative; z-index: 1;
                }

                /* ── SECTION HEADING ── */
                .rc2-section-heading { text-align: center; margin-bottom: 56px; padding: 0 5%; }
                .rc2-section-pill {
                    display: inline-block; background: #eff6ff; color: #2563eb;
                    border: 1px solid #bfdbfe; border-radius: 20px; padding: 5px 16px;
                    font-size: 0.72rem; font-weight: 800; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 14px;
                }
                .rc2-section-heading h2 {
                    font-family: 'Poppins', sans-serif; font-size: clamp(1.8rem, 4vw, 2.6rem);
                    font-weight: 900; color: #0a1628; margin-bottom: 12px;
                }
                .rc2-section-heading h2 span {
                    background: linear-gradient(135deg, #2563eb, #00d4ff);
                    -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
                }
                .rc2-section-heading p { color: #64748b; font-size: 0.95rem; max-width: 540px; margin: 0 auto; }

                /* ── COURSES GRID ── */
                .rc2-courses-section { background: #f8faff; padding: 80px 5%; }
                .rc2-courses-grid {
                    max-width: 1400px; margin: 0 auto;
                    display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px;
                }

                /* ── COURSE CARD ── */
                .rc2-card {
                    background: #fff; border-radius: 24px;
                    box-shadow: 0 4px 24px rgba(10,22,40,0.08);
                    border: 1px solid rgba(10,22,40,0.07);
                    overflow: hidden;
                    opacity: 0; transform: translateY(40px);
                    transition: opacity 0.6s ease, transform 0.6s ease, box-shadow 0.3s;
                }
                .rc2-card--visible { opacity: 1; transform: translateY(0); }
                .rc2-card:hover { box-shadow: 0 16px 48px rgba(10,22,40,0.15); }
                .rc2-card-header {
                    padding: 32px 28px 28px; position: relative; overflow: hidden; cursor: default;
                }
                .rc2-card-header-bg {
                    position: absolute; top: -50%; right: -30%;
                    width: 240px; height: 240px; border-radius: 50%;
                    background: rgba(255,255,255,0.1); pointer-events: none;
                }
                .rc2-card-tag {
                    display: inline-block; background: rgba(255,255,255,0.2);
                    border: 1px solid rgba(255,255,255,0.3); color: #fff;
                    padding: 3px 12px; border-radius: 20px;
                    font-size: 0.62rem; font-weight: 800; letter-spacing: 1.5px; text-transform: uppercase; margin-bottom: 14px;
                }
                .rc2-card-icon { font-size: 2rem; margin-bottom: 10px; display: block; color: rgba(255,255,255,0.9); }
                .rc2-card-code {
                    font-family: 'Poppins', sans-serif; font-size: 2rem; font-weight: 900;
                    color: #fff; margin: 0 0 6px; line-height: 1;
                }
                .rc2-card-full { font-size: 0.82rem; color: rgba(255,255,255,0.75); margin: 0 0 8px; font-weight: 500; }
                .rc2-card-tagline { font-size: 0.88rem; color: rgba(255,255,255,0.9); margin: 0 0 18px; font-weight: 600; font-style: italic; }
                .rc2-card-pills { display: flex; gap: 12px; flex-wrap: wrap; }
                .rc2-card-pills span { font-size: 0.74rem; color: rgba(255,255,255,0.8); display: flex; align-items: center; gap: 6px; font-weight: 600; }

                .rc2-card-quick { padding: 16px 24px; background: var(--card-light); border-bottom: 1px solid rgba(10,22,40,0.06); }
                .rc2-card-quick-item { display: flex; align-items: flex-start; gap: 8px; font-size: 0.78rem; color: #475569; line-height: 1.5; }
                .rc2-card-quick-item i { flex-shrink: 0; margin-top: 2px; font-size: 0.72rem; }

                .rc2-card-toggle {
                    width: 100%; padding: 14px 24px; border: none; cursor: pointer;
                    background: #fff; display: flex; align-items: center; justify-content: space-between;
                    font-family: 'Poppins', sans-serif; font-size: 0.85rem; font-weight: 700;
                    color: var(--btn-color); transition: background 0.2s;
                }
                .rc2-card-toggle:hover { background: var(--card-light, #f8faff); }
                .rc2-card-toggle i { font-size: 0.75rem; transition: transform 0.3s; }

                .rc2-card-body { max-height: 0; overflow: hidden; transition: max-height 0.5s cubic-bezier(0.4,0,0.2,1); }
                .rc2-card-body--open { max-height: 900px; }
                .rc2-card-body-inner { padding: 24px; background: #fafbff; border-top: 1px solid rgba(10,22,40,0.07); }

                .rc2-section { margin-bottom: 20px; }
                .rc2-section h4 {
                    display: flex; align-items: center; gap: 8px;
                    font-family: 'Poppins', sans-serif; font-size: 0.78rem; font-weight: 800;
                    text-transform: uppercase; letter-spacing: 0.8px; color: #0a1628; margin: 0 0 10px;
                }
                .rc2-section p { font-size: 0.82rem; color: #475569; line-height: 1.8; margin: 0; }
                .rc2-highlights { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 8px; }
                .rc2-highlights li { display: flex; align-items: flex-start; gap: 10px; font-size: 0.8rem; color: #475569; line-height: 1.5; }
                .rc2-bullet { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; margin-top: 5px; }
                .rc2-career-tags { display: flex; flex-wrap: wrap; gap: 8px; }
                .rc2-career-tag {
                    background: var(--tl); color: var(--tc); border: 1px solid var(--tc);
                    opacity: 0.7; padding: 4px 12px; border-radius: 20px;
                    font-size: 0.72rem; font-weight: 700; font-family: 'Poppins', sans-serif;
                    filter: saturate(0.7);
                }
                .rc2-syllabus-btn {
                    display: inline-flex; align-items: center; gap: 8px;
                    padding: 12px 22px; border-radius: 30px; color: #fff;
                    font-family: 'Poppins', sans-serif; font-size: 0.82rem; font-weight: 700;
                    text-decoration: none; transition: all 0.3s; margin-top: 4px;
                }
                .rc2-syllabus-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 20px rgba(0,0,0,0.2); opacity: 0.9; }

                /* ── FEATURES STRIP ── */
                .rc2-features { background: #0a1628; padding: 72px 5%; }
                .rc2-features-inner { max-width: 1100px; margin: 0 auto; }
                .rc2-features-title {
                    text-align: center; font-family: 'Poppins', sans-serif; font-size: 1.8rem;
                    font-weight: 900; color: #fff; margin-bottom: 48px;
                }
                .rc2-features-title span { color: #f5c518; }
                .rc2-features-grid {
                    display: grid; grid-template-columns: repeat(5, 1fr); gap: 20px;
                }
                .rc2-feature {
                    background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1);
                    border-radius: 18px; padding: 28px 22px; text-align: center;
                    transition: background 0.2s, transform 0.2s;
                }
                .rc2-feature:hover { background: rgba(255,255,255,0.1); transform: translateY(-4px); }
                .rc2-feature-icon {
                    font-size: 1.9rem; margin-bottom: 14px; display: block; color: #f5c518;
                }
                .rc2-feature h3 { font-family: 'Poppins', sans-serif; font-size: 0.95rem; font-weight: 700; color: #fff; margin: 0 0 8px; }
                .rc2-feature p { font-size: 0.78rem; color: rgba(255,255,255,0.55); line-height: 1.7; margin: 0; }

                /* ── CTA ── */
                .rc2-cta {
                    background: linear-gradient(135deg, #1a3a6b, #2563eb);
                    padding: 72px 5%; text-align: center; position: relative; overflow: hidden;
                }
                .rc2-cta::before {
                    content: ''; position: absolute; inset: 0;
                    background: radial-gradient(ellipse at 50% 0%, rgba(0,212,255,0.15) 0%, transparent 60%);
                }
                .rc2-cta-inner { max-width: 640px; margin: 0 auto; position: relative; z-index: 1; }
                .rc2-cta h2 { font-family: 'Poppins', sans-serif; font-size: 2.2rem; font-weight: 900; color: #fff; margin-bottom: 12px; }
                .rc2-cta p { color: rgba(255,255,255,0.7); font-size: 1rem; margin-bottom: 32px; line-height: 1.7; }
                .rc2-cta-btn {
                    display: inline-flex; align-items: center; gap: 10px;
                    background: #f5c518; color: #0a1628; padding: 16px 36px; border-radius: 50px;
                    font-family: 'Poppins', sans-serif; font-size: 1rem; font-weight: 800;
                    text-decoration: none; transition: all 0.3s;
                    box-shadow: 0 8px 30px rgba(245,197,24,0.4);
                }
                .rc2-cta-btn:hover { transform: translateY(-4px); box-shadow: 0 16px 40px rgba(245,197,24,0.55); }

                /* ── RESPONSIVE ── */
                @media (max-width: 1100px) {
                    .rc2-courses-grid { grid-template-columns: repeat(2, 1fr); }
                    .rc2-features-grid { grid-template-columns: repeat(3, 1fr); }
                }
                @media (max-width: 768px) {
                    .rc2-stats-row { grid-template-columns: repeat(2, 1fr); margin-top: 20px; }
                    .rc2-intro-inner { padding: 36px 24px; }
                    .rc2-courses-grid { grid-template-columns: 1fr; }
                    .rc2-features-grid { grid-template-columns: 1fr 1fr; }
                    .rc2-hero { padding-top: 64px; }
                }
                @media (max-width: 480px) {
                    .rc2-stats-row { grid-template-columns: repeat(2,1fr); }
                    .rc2-features-grid { grid-template-columns: 1fr; }
                    .rc2-cta h2 { font-size: 1.6rem; }
                }
            `}),e.jsxs("section",{className:"rc2-hero",children:[e.jsx("div",{className:"rc2-hero-orb rc2-hero-orb-1"}),e.jsx("div",{className:"rc2-hero-orb rc2-hero-orb-2"}),e.jsxs("div",{className:"rc2-hero-content",children:[e.jsxs("div",{className:"rc2-hero-left",children:[e.jsxs("div",{className:"rc2-hero-chip",children:[e.jsx("i",{className:"fa-solid fa-graduation-cap"}),"Academics · Regular Programs"]}),e.jsxs("h1",{children:["Shape Your Future with",e.jsx("br",{}),e.jsx("em",{children:"World-Class Degrees"})]}),e.jsx("p",{children:"Industry-aligned 4-year undergraduate programs crafted to equip you with knowledge, real-world skills, and the confidence to lead tomorrow's challenges."})]}),e.jsx("div",{className:"rc2-hero-right",children:e.jsxs("div",{className:"rc2-hero-btns",children:[e.jsxs(Se,{to:"/admission/apply",className:"rc2-btn-primary",children:[e.jsx("i",{className:"fa-solid fa-paper-plane"})," Apply for 2026–27"]}),e.jsxs("a",{href:"#courses",className:"rc2-btn-outline",children:[e.jsx("i",{className:"fa-solid fa-magnifying-glass"})," Explore Courses"]})]})})]})]}),e.jsx("div",{className:"rc2-stats-wrap",children:e.jsx(u0,{})}),e.jsx("section",{className:"rc2-intro",children:e.jsxs("div",{className:"rc2-intro-inner",children:[e.jsx("div",{className:"rc2-intro-icon",children:"🎓"}),e.jsx("h2",{children:"Our Academic Excellence"}),e.jsx("p",{children:"At Creative Techno College, Angul, we offer career-oriented undergraduate programs designed to equip students with the right blend of knowledge, skills, and industry exposure. Our courses focus on academic excellence, practical learning, and holistic development to prepare graduates for the future."})]})}),e.jsxs("section",{className:"rc2-courses-section",id:"courses",children:[e.jsxs("div",{className:"rc2-section-heading",children:[e.jsx("div",{className:"rc2-section-pill",children:"🎯 Our Programs"}),e.jsxs("h2",{children:["Courses ",e.jsx("span",{children:"Offered"})]}),e.jsx("p",{children:"Click on any course card to explore eligibility, highlights, career paths and download the full syllabus."})]}),e.jsx("div",{className:"rc2-courses-grid",children:d0.map((r,s)=>e.jsx(f0,{course:r,index:s},r.code))})]}),e.jsx("section",{className:"rc2-features",children:e.jsxs("div",{className:"rc2-features-inner",children:[e.jsxs("h2",{className:"rc2-features-title",children:["Why choose ",e.jsx("span",{children:"Creative Techno College?"})]}),e.jsx("div",{className:"rc2-features-grid",children:[{icon:"fa-solid fa-building-columns",title:"AICTE Approved",desc:"Nationally recognised by All India Council for Technical Education."},{icon:"fa-solid fa-graduation-cap",title:"Utkal University",desc:"Affiliated to the prestigious Utkal University, Odisha."},{icon:"fa-solid fa-handshake",title:"100% Placement Assist",desc:"Dedicated placement cell with 100+ recruiting partners."},{icon:"fa-solid fa-flask",title:"Practical Learning",desc:"State-of-the-art labs, live projects and industry internships."},{icon:"fa-solid fa-globe",title:"Industry Connect",desc:"Regular seminars, workshops and expert guest lectures."}].map((r,s)=>e.jsxs("div",{className:"rc2-feature",children:[e.jsx("i",{className:`${r.icon} rc2-feature-icon`}),e.jsx("h3",{children:r.title}),e.jsx("p",{children:r.desc})]},s))})]})})]})}const g0={Brain:r=>e.jsxs("svg",{viewBox:"0 0 24 24",width:"24",height:"24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",...r,children:[e.jsx("path",{d:"M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.04-2.44v-10A2.5 2.5 0 0 1 7.5 4.5h2"}),e.jsx("path",{d:"M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.04-2.44v-10A2.5 2.5 0 0 0 16.5 4.5h-2"})]}),Chart:r=>e.jsxs("svg",{viewBox:"0 0 24 24",width:"24",height:"24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",...r,children:[e.jsx("path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}),e.jsx("path",{d:"m7 15 4-4 3 3 5-5"})]}),Bullhorn:r=>e.jsxs("svg",{viewBox:"0 0 24 24",width:"24",height:"24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",...r,children:[e.jsx("path",{d:"M18 8A6 6 0 0 1 18 16M4 8h2l5-3v14l-5-3H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2Z"}),e.jsx("path",{d:"M14 8v8"})]}),Database:r=>e.jsxs("svg",{viewBox:"0 0 24 24",width:"24",height:"24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",...r,children:[e.jsx("ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}),e.jsx("path",{d:"M3 5v14c0 1.5 4 3 9 3s9-1.5 9-3V5"}),e.jsx("line",{x1:"3",x2:"21",y1:"12",y2:"12"}),e.jsx("line",{x1:"3",x2:"21",y1:"8",y2:"8"})]}),Link:r=>e.jsxs("svg",{viewBox:"0 0 24 24",width:"24",height:"24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",...r,children:[e.jsx("path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"}),e.jsx("path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"})]}),PieChart:r=>e.jsxs("svg",{viewBox:"0 0 24 24",width:"24",height:"24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",...r,children:[e.jsx("path",{d:"M21.21 15.89A10 10 0 1 1 8 2.83"}),e.jsx("path",{d:"M22 12A10 10 0 0 0 12 2v10h10Z"})]}),Store:r=>e.jsxs("svg",{viewBox:"0 0 24 24",width:"24",height:"24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",...r,children:[e.jsx("path",{d:"M3 9h18l-2 10H5L3 9Z"}),e.jsx("path",{d:"M6 5h12l2 4"}),e.jsx("rect",{x:"8",y:"13",width:"8",height:"6",rx:"1"})]}),Robot:r=>e.jsxs("svg",{viewBox:"0 0 24 24",width:"24",height:"24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",...r,children:[e.jsx("rect",{x:"3",y:"11",width:"18",height:"10",rx:"2"}),e.jsx("circle",{cx:"9",cy:"16",r:"1",fill:"currentColor"}),e.jsx("circle",{cx:"15",cy:"16",r:"1",fill:"currentColor"}),e.jsx("path",{d:"M8 5h8l2 6H6l2-6Z"}),e.jsx("line",{x1:"12",x2:"12",y1:"5",y2:"2"})]}),FileText:r=>e.jsxs("svg",{viewBox:"0 0 24 24",width:"24",height:"24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",...r,children:[e.jsx("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Z"}),e.jsx("path",{d:"M14 2v6h6"}),e.jsx("line",{x1:"16",x2:"8",y1:"13",y2:"13"}),e.jsx("line",{x1:"16",x2:"8",y1:"17",y2:"17"}),e.jsx("polyline",{points:"10 9 9 9 8 9"})]}),Code:r=>e.jsxs("svg",{viewBox:"0 0 24 24",width:"24",height:"24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",...r,children:[e.jsx("polyline",{points:"16 18 22 12 16 6"}),e.jsx("polyline",{points:"8 6 2 12 8 18"})]}),Users:r=>e.jsxs("svg",{viewBox:"0 0 24 24",width:"24",height:"24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",...r,children:[e.jsx("path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}),e.jsx("circle",{cx:"9",cy:"7",r:"4"}),e.jsx("path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}),e.jsx("path",{d:"M16 3.13a4 4 0 0 1 0 7.75"})]}),Python:r=>e.jsxs("svg",{viewBox:"0 0 24 24",width:"24",height:"24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",...r,children:[e.jsx("ellipse",{cx:"12",cy:"7.5",rx:"6",ry:"3"}),e.jsx("path",{d:"M6 10.5v6c0 1.5 2.7 3 6 3s6-1.5 6-3v-6"}),e.jsx("path",{d:"M6 13.5v3"}),e.jsx("path",{d:"M18 13.5v3"})]}),Rocket:r=>e.jsxs("svg",{viewBox:"0 0 24 24",width:"28",height:"28",fill:"none",stroke:"currentColor",strokeWidth:"1.5",...r,children:[e.jsx("path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09Z"}),e.jsx("path",{d:"M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2Z"}),e.jsx("path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"}),e.jsx("path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"})]}),Coins:r=>e.jsxs("svg",{viewBox:"0 0 24 24",width:"28",height:"28",fill:"none",stroke:"currentColor",strokeWidth:"1.5",...r,children:[e.jsx("circle",{cx:"12",cy:"12",r:"8"}),e.jsx("path",{d:"M8 8c2.5-2 5.5-2 8 0"}),e.jsx("path",{d:"M8 16c2.5 2 5.5 2 8 0"}),e.jsx("line",{x1:"12",x2:"12",y1:"4",y2:"20"})]}),Target:r=>e.jsxs("svg",{viewBox:"0 0 24 24",width:"28",height:"28",fill:"none",stroke:"currentColor",strokeWidth:"1.5",...r,children:[e.jsx("circle",{cx:"12",cy:"12",r:"10"}),e.jsx("circle",{cx:"12",cy:"12",r:"6"}),e.jsx("circle",{cx:"12",cy:"12",r:"2",fill:"currentColor"})]}),Bolt:r=>e.jsx("svg",{viewBox:"0 0 24 24",width:"28",height:"28",fill:"none",stroke:"currentColor",strokeWidth:"1.5",...r,children:e.jsx("path",{d:"M13 2L3 14h8l-2 8 10-12h-8l2-8z"})}),CheckCircle:r=>e.jsxs("svg",{viewBox:"0 0 24 24",width:"20",height:"20",fill:"none",stroke:"currentColor",strokeWidth:"2",...r,children:[e.jsx("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),e.jsx("polyline",{points:"22 4 12 14.01 9 11.01"})]}),ArrowRight:r=>e.jsxs("svg",{viewBox:"0 0 24 24",width:"18",height:"18",fill:"none",stroke:"currentColor",strokeWidth:"2",...r,children:[e.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),e.jsx("polyline",{points:"12 5 19 12 12 19"})]}),Mail:r=>e.jsxs("svg",{viewBox:"0 0 24 24",width:"20",height:"20",fill:"none",stroke:"currentColor",strokeWidth:"2",...r,children:[e.jsx("rect",{x:"2",y:"4",width:"20",height:"16",rx:"2"}),e.jsx("path",{d:"m22 7-10 7L2 7"})]}),Clock:r=>e.jsxs("svg",{viewBox:"0 0 24 24",width:"16",height:"16",fill:"none",stroke:"currentColor",strokeWidth:"2",...r,children:[e.jsx("circle",{cx:"12",cy:"12",r:"10"}),e.jsx("polyline",{points:"12 6 12 12 16 14"})]}),Level:r=>e.jsxs("svg",{viewBox:"0 0 24 24",width:"16",height:"16",fill:"none",stroke:"currentColor",strokeWidth:"2",...r,children:[e.jsx("path",{d:"M2 20h20"}),e.jsx("path",{d:"M4 16l2-8 2 8"}),e.jsx("path",{d:"M12 16l2-8 2 8"}),e.jsx("path",{d:"M20 16l2-8 2 8"})]})},x0=[{title:"Machine Learning",link:"https://creativecollege.in/ML/Registration/index.html",desc:"Learn algorithms that allow computers to learn from data without explicit programming. Build real ML models.",icon:"Brain",gradient:"linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",status:"upcoming",duration:"45 Hours",level:"Intermediate",tags:["Python","Scikit-learn","TensorFlow"]},{title:"Data Science",desc:"Statistical and computational techniques to extract insights from data — cleaning, visualization, modeling and more.",icon:"Chart",gradient:"linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)",status:"completed",duration:"50 Hours",level:"Beginner to Advanced",tags:["Python","Pandas","Matplotlib"]},{title:"Digital Marketing",desc:"Promote brands to connect with customers using the internet — SEO, social media, email and web advertising.",icon:"Bullhorn",gradient:"linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",status:"completed",duration:"35 Hours",level:"Beginner",tags:["SEO","Google Ads","Meta Ads"]}],Np=[{title:"Data Science",icon:"Database",gradient:"linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",status:"completed",duration:"50 hrs"},{title:"Affiliate Marketing",icon:"Link",gradient:"linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",status:"completed",duration:"25 hrs"},{title:"Power BI",icon:"PieChart",gradient:"linear-gradient(135deg, #fa709a 0%, #fee140 100%)",status:"completed",duration:"30 hrs"},{title:"Retail Marketing",icon:"Store",gradient:"linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)",status:"upcoming",duration:"28 hrs"},{title:"Artificial Intelligence",icon:"Robot",gradient:"linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",status:"upcoming",duration:"55 hrs"},{title:"Digital Marketing",icon:"Bullhorn",gradient:"linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",status:"completed",duration:"35 hrs"},{title:"HR Documentation",icon:"FileText",gradient:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",status:"upcoming",duration:"22 hrs"},{title:"Advance Java",icon:"Code",gradient:"linear-gradient(135deg, #f77062 0%, #fe5196 100%)",status:"upcoming",duration:"60 hrs"},{title:"HR Professionals",icon:"Users",gradient:"linear-gradient(135deg, #96fbc4 0%, #f9f586 100%)",status:"upcoming",duration:"30 hrs"},{title:"Full Stack Python",icon:"Python",gradient:"linear-gradient(135deg, #30cfd0 0%, #667eea 100%)",status:"upcoming",duration:"75 hrs"}],b0=[{icon:"Rocket",title:"Expand Career Horizons",desc:"Gain in-demand skills that complement your degree and open new career opportunities."},{icon:"Coins",title:"Cost-Effective Learning",desc:"More affordable than traditional courses while delivering equivalent or better outcomes."},{icon:"Target",title:"Industry-Relevant Skills",desc:"Curriculum designed in sync with current industry needs and employer demands."},{icon:"Bolt",title:"Flexible Schedule",desc:"Programs are designed to fit alongside your regular coursework seamlessly."}],Tp=({status:r})=>{const s=r==="completed";return e.jsxs("span",{className:`status-badge ${s?"completed":"upcoming"}`,children:[e.jsx("span",{className:"status-dot"}),s?"Completed":"Coming Soon"]})},Tt=({name:r,className:s="",...o})=>{const c=g0[r];return c?e.jsx(c,{className:`icon-svg ${s}`,...o}):null};function y0(){const[r,s]=v.useState("all"),o=r==="all"?Np:Np.filter(c=>c.status===r);return e.jsxs("div",{className:"vac-page",children:[e.jsx("style",{children:`
        /* ----- GLOBAL & RESETS ----- */
        .vac-page {
          --primary: #1a3a6b;
          --primary-light: #2563eb;
          --primary-dark: #0a1628;
          --accent: #f5c518;
          --gray-50: #f8fafc;
          --gray-100: #f1f5f9;
          --gray-200: #e2e8f0;
          --gray-600: #475569;
          --gray-700: #334155;
          --gray-900: #0f172a;
          font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          background: var(--gray-50);
          line-height: 1.5;
          color: var(--gray-900);
        }
        .vac-page * {
          box-sizing: border-box;
        }

        /* icons */
        .icon-svg {
          width: 1em;
          height: 1em;
          display: inline-block;
          vertical-align: middle;
          stroke: currentColor;
          fill: none;
        }

        /* section containers */
        .vac-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* section spacing */
        .vac-section {
          padding: 80px 0;
        }
        .vac-section-dark {
          background: linear-gradient(145deg, var(--primary-dark) 0%, #1e3a5f 100%);
          color: #fff;
        }
        .vac-section-light {
          background: #fff;
        }

        /* headings */
        .vac-heading {
          text-align: center;
          margin-bottom: 56px;
        }
        .vac-heading .pill {
          display: inline-block;
          padding: 4px 14px;
          border-radius: 40px;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.3px;
          text-transform: uppercase;
          background: rgba(37, 99, 235, 0.08);
          color: var(--primary-light);
          border: 1px solid rgba(37, 99, 235, 0.2);
          margin-bottom: 16px;
        }
        .vac-heading h2 {
          font-size: clamp(2rem, 5vw, 2.8rem);
          font-weight: 800;
          line-height: 1.2;
          margin: 0 0 16px;
          color: var(--gray-900);
        }
        .vac-section-dark .vac-heading h2 {
          color: #fff;
        }
        .vac-heading h2 .gradient-text {
          background: linear-gradient(135deg, var(--primary-light), #00c6fb);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .vac-heading p {
          max-width: 560px;
          margin: 0 auto;
          color: var(--gray-600);
          font-size: 1rem;
        }
        .vac-section-dark .vac-heading p {
          color: rgba(255,255,255,0.7);
        }

        /* ----- HERO ----- */
        .vac-hero {
          background: linear-gradient(165deg, #020c1b 0%, #0c2340 40%, #112d52 70%, #060f1e 100%);
          padding: 80px 5% 0;
          position: relative;
          overflow: hidden;
        }

        /* Flex Container for Left/Right Split */
        .vac-hero-content {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center; /* Vertical Center */
          justify-content: space-between;
          gap: 40px;
          flex-wrap: wrap;
          max-width: 1200px;
          margin: 0 auto;
          text-align: left; /* Reset text to left */
          padding-bottom: 60px;
        }

        .vac-hero-left { flex: 1; min-width: 300px; }
        .vac-hero-right { flex-shrink: 0; }

        /* Yellow Accent Chip */
        .vac-hero-chip {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255, 204, 0, 0.1);
          border: 1px solid rgba(255, 204, 0, 0.28);
          color: #ffcc00; /* Yellow */
          padding: 6px 16px;
          border-radius: 40px;
          font-size: 0.68rem;
          font-weight: 800;
          letter-spacing: 1px;
          text-transform: uppercase;
          margin-bottom: 24px;
        }

        .vac-hero h1 {
          font-size: clamp(2.2rem, 5vw, 3.4rem);
          font-weight: 900;
          color: #fff;
          line-height: 1.1;
          margin: 0 0 18px;
        }

        .vac-hero h1 em {
          font-style: normal;
          color: #ffcc00; /* Yellow Highlight */
        }

        .vac-hero p {
          color: rgba(255, 255, 255, 0.5); /* Muted gray-white */
          font-size: 1.05rem;
          max-width: 520px;
          margin: 0 0 32px;
        }

        /* Vertical Checklist on the Right */
        .vac-hero-stats {
          display: flex;
          flex-direction: column; /* Stacks items vertically */
          gap: 12px;
        }

        .vac-hero-stat-item {
          display: flex;
          align-items: center;
          gap: 12px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 12px 20px;
          color: #fff;
          font-weight: 600;
          font-size: 0.9rem;
          min-width: 240px;
        }

        .vac-hero-stat-item .check {
          color: #ffcc00; /* Yellow Check */
        }

        /* ----- CURRENT PROGRAMS CARDS (featured) ----- */
        .vac-grid-3 {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 28px;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }
        .vac-card-featured {
          background: #fff;
          border-radius: 28px;
          overflow: hidden;
          box-shadow: 0 15px 35px -10px rgba(0,0,0,0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          display: flex;
          flex-direction: column;
        }
        .vac-card-featured:hover {
          transform: translateY(-8px);
          box-shadow: 0 25px 45px -12px rgba(0,0,0,0.2);
        }
        .vac-card-media {
          padding: 32px 28px 24px;
          position: relative;
          color: #fff;
        }
        .vac-card-media .icon-large {
          position: absolute;
          top: 24px;
          right: 24px;
          width: 56px;
          height: 56px;
          opacity: 0.2;
          color: #fff;
          stroke-width: 1;
        }
        .vac-card-media .status-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 4px 12px;
          border-radius: 30px;
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.3px;
          text-transform: uppercase;
          background: rgba(255,255,255,0.15);
          backdrop-filter: blur(4px);
          border: 1px solid rgba(255,255,255,0.25);
          color: #fff;
          margin-bottom: 24px;
        }
        .vac-card-media .status-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #fff;
        }
        .vac-card-media .status-badge.completed .status-dot {
          background: #10b981;
        }
        .vac-card-media .status-badge.upcoming .status-dot {
          background: #f59e0b;
        }
        .vac-card-media h3 {
          font-size: 1.9rem;
          font-weight: 800;
          margin: 0 0 12px;
          line-height: 1.2;
        }
        .vac-card-media p {
          font-size: 0.85rem;
          opacity: 0.9;
          margin: 0 0 16px;
          max-width: 85%;
        }
        .vac-tags {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }
        .vac-tag {
          background: rgba(255,255,255,0.15);
          border: 1px solid rgba(255,255,255,0.3);
          border-radius: 30px;
          padding: 3px 10px;
          font-size: 0.6rem;
          font-weight: 600;
          letter-spacing: 0.3px;
          color: #fff;
        }
        .vac-card-footer {
          padding: 20px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: #fff;
        }
        .vac-meta {
          display: flex;
          gap: 18px;
          font-size: 0.75rem;
          font-weight: 500;
          color: var(--gray-600);
        }
        .vac-meta span {
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .vac-btn-outline {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: transparent;
          border: 1.5px solid var(--primary);
          color: var(--primary);
          padding: 8px 18px;
          border-radius: 40px;
          font-weight: 600;
          font-size: 0.8rem;
          transition: all 0.2s;
          text-decoration: none;
        }
        .vac-btn-outline:hover {
          background: var(--primary);
          color: #fff;
        }

        /* ----- ADDITIONAL COURSES (small cards) ----- */
        .vac-filter-bar {
          display: flex;
          gap: 8px;
          justify-content: center;
          margin-bottom: 40px;
          flex-wrap: wrap;
        }
        .vac-filter-btn {
          background: transparent;
          border: 1.5px solid rgba(255,255,255,0.2);
          color: rgba(255,255,255,0.7);
          padding: 8px 22px;
          border-radius: 40px;
          font-weight: 600;
          font-size: 0.85rem;
          cursor: pointer;
          transition: 0.2s;
        }
        .vac-filter-btn:hover {
          background: rgba(255,255,255,0.1);
          border-color: rgba(255,255,255,0.3);
        }
        .vac-filter-btn.active {
          background: #fff;
          color: var(--primary-dark);
          border-color: #fff;
          font-weight: 700;
        }
        .vac-grid-mini {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));
          gap: 18px;
          max-width: 1100px;
          margin: 0 auto;
        }
        .vac-card-mini {
          background: #fff;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 8px 18px rgba(0,0,0,0.05);
          transition: transform 0.2s, box-shadow 0.2s;
          text-decoration: none;
          color: inherit;
        }
        .vac-card-mini:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 28px rgba(0,0,0,0.1);
        }
        .vac-mini-top {
          height: 100px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          position: relative;
        }
        .vac-mini-top .icon-svg {
          width: 40px;
          height: 40px;
          stroke-width: 1.5;
          z-index: 2;
          position: relative;
        }
        .vac-mini-top::after {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.1);
        }
        .vac-mini-body {
          padding: 14px 16px;
        }
        .vac-mini-body h4 {
          font-size: 0.9rem;
          font-weight: 700;
          margin: 0 0 8px;
          color: var(--gray-900);
        }
        .vac-mini-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .vac-mini-duration {
          font-size: 0.7rem;
          color: var(--gray-600);
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .vac-mini-duration .icon-svg {
          width: 14px;
          height: 14px;
        }
        .status-badge.small {
          padding: 2px 8px;
          font-size: 0.55rem;
          font-weight: 700;
        }

        /* ----- VIDEO + ADVANTAGES SECTION ----- */
        .vac-split {
          display: flex;
          gap: 60px;
          align-items: center;
          flex-wrap: wrap;
          max-width: 1100px;
          margin: 0 auto;
        }
        .vac-split-text {
          flex: 1 1 360px;
        }
        .vac-split-text h2 {
          font-size: 2rem;
          font-weight: 800;
          margin: 0 0 16px;
          color: var(--gray-900);
        }
        .vac-split-text h2 .gradient-text {
          background: linear-gradient(135deg, var(--primary-light), #00c6fb);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .vac-split-text p {
          color: var(--gray-600);
          line-height: 1.7;
          margin-bottom: 24px;
        }
        .vac-checklist {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .vac-checklist li {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 14px;
          font-weight: 500;
          color: var(--gray-700);
        }
        .vac-checklist .icon-svg {
          color: var(--primary-light);
          flex-shrink: 0;
        }
        .vac-video-embed {
          flex: 1 1 420px;
          border-radius: 24px;
          overflow: hidden;
          height: 280px;
          box-shadow: 0 20px 35px -8px rgba(0,0,0,0.2);
          background: #000;
        }
        .vac-video-embed iframe {
          width: 100%;
          height: 100%;
          border: none;
        }

        /* ----- ADVANTAGES GRID (dark) ----- */
        .vac-grid-4 {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 24px;
          max-width: 1100px;
          margin: 0 auto;
        }
        .vac-adv-card {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          backdrop-filter: blur(8px);
          border-radius: 24px;
          padding: 30px 24px;
          transition: 0.2s;
        }
        .vac-adv-card:hover {
          background: rgba(255,255,255,0.08);
          transform: translateY(-4px);
        }
        .vac-adv-card .icon-svg {
          width: 40px;
          height: 40px;
          color: var(--accent);
          margin-bottom: 20px;
        }
        .vac-adv-card h3 {
          font-size: 1.1rem;
          font-weight: 700;
          margin: 0 0 10px;
          color: #fff;
        }
        .vac-adv-card p {
          font-size: 0.8rem;
          color: rgba(255,255,255,0.6);
          line-height: 1.6;
          margin: 0;
        }

        /* ----- CTA ----- */
        .vac-cta {
          background: linear-gradient(145deg, var(--primary), #1e4b8a);
          padding: 80px 24px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .vac-cta::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at 30% 50%, rgba(255,215,0,0.15) 0%, transparent 60%);
        }
        .vac-cta-inner {
          max-width: 600px;
          margin: 0 auto;
          position: relative;
        }
        .vac-cta h2 {
          font-size: 2.4rem;
          font-weight: 900;
          color: #fff;
          margin: 0 0 16px;
        }
        .vac-cta p {
          color: rgba(255,255,255,0.7);
          font-size: 1rem;
          margin-bottom: 28px;
        }
        .vac-btn-cta {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: var(--accent);
          color: var(--primary-dark);
          padding: 14px 34px;
          border-radius: 60px;
          font-weight: 800;
          font-size: 1rem;
          text-decoration: none;
          transition: all 0.3s;
          box-shadow: 0 10px 25px rgba(245,197,24,0.4);
        }
        .vac-btn-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 18px 35px rgba(245,197,24,0.5);
        }

        @media (max-width: 640px) {
          .vac-grid-mini { grid-template-columns: repeat(2,1fr); }
          .vac-grid-4 { grid-template-columns: 1fr; }
        }
      `}),e.jsx("section",{className:"vac-hero",children:e.jsxs("div",{className:"vac-hero-content",children:[e.jsxs("div",{className:"vac-hero-left",children:[e.jsxs("div",{className:"vac-hero-chip",children:[e.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:e.jsx("path",{d:"M13 2L3 14h8l-2 8 10-12h-8l2-8z"})}),"Learning Management System"]}),e.jsxs("h1",{children:["Supercharge Your Skills with",e.jsx("br",{}),e.jsx("em",{children:"Value‑Added Courses"})]}),e.jsx("p",{children:"Industry‑relevant programs designed to enhance your career prospects and make you stand out in today's competitive job market."})]}),e.jsx("div",{className:"vac-hero-right",children:e.jsx("div",{className:"vac-hero-stats",children:["10+ Courses","Certificate Programs","Industry Experts","Live Projects"].map((c,m)=>e.jsxs("div",{className:"vac-hero-stat-item",children:[e.jsx(Tt,{name:"CheckCircle",className:"check",width:18,height:18}),c]},m))})})]})}),e.jsxs("section",{className:"vac-section vac-section-light",children:[e.jsxs("div",{className:"vac-heading",children:[e.jsx("span",{className:"pill",children:"🔥 Featured Programs"}),e.jsxs("h2",{children:["Our Current ",e.jsx("span",{className:"gradient-text",children:"Programs"})]}),e.jsx("p",{children:"Flagship value‑added programs with real industry outcomes and hands‑on learning."})]}),e.jsx("div",{className:"vac-grid-3",children:x0.map((c,m)=>e.jsxs("div",{className:"vac-card-featured",children:[e.jsxs("div",{className:"vac-card-media",style:{background:c.gradient},children:[e.jsx(Tt,{name:c.icon,className:"icon-large"}),e.jsx(Tp,{status:c.status}),e.jsx("h3",{children:c.title}),e.jsx("p",{children:c.desc}),e.jsx("div",{className:"vac-tags",children:c.tags.map((p,u)=>e.jsx("span",{className:"vac-tag",children:p},u))})]}),e.jsxs("div",{className:"vac-card-footer",children:[e.jsxs("div",{className:"vac-meta",children:[e.jsxs("span",{children:[e.jsx(Tt,{name:"Clock"})," ",c.duration]}),e.jsxs("span",{children:[e.jsx(Tt,{name:"Level"})," ",c.level]})]}),c.link?e.jsxs("a",{href:c.link,target:"_blank",rel:"noopener noreferrer",className:"vac-btn-outline",children:[c.status==="completed"?"View Details":"Register"," ",e.jsx(Tt,{name:"ArrowRight"})]}):e.jsxs(Se,{to:"/contacts",className:"vac-btn-outline",children:[c.status==="completed"?"View Details":"Register"," ",e.jsx(Tt,{name:"ArrowRight"})]})]})]},m))})]}),e.jsxs("section",{className:"vac-section vac-section-dark",children:[e.jsxs("div",{className:"vac-heading",children:[e.jsx("span",{className:"pill",style:{background:"rgba(255,255,255,0.1)",color:"#fff",borderColor:"rgba(255,255,255,0.2)"},children:"📚 More Courses"}),e.jsxs("h2",{children:["Additional ",e.jsx("span",{className:"gradient-text",children:"Learning Paths"})]}),e.jsx("p",{children:"Browse our full catalog of skill‑building courses across technology, business, and management."})]}),e.jsx("div",{className:"vac-filter-bar",children:[["all","All Courses"],["completed","Completed"],["upcoming","Upcoming"]].map(([c,m])=>e.jsx("button",{className:`vac-filter-btn ${r===c?"active":""}`,onClick:()=>s(c),children:m},c))}),e.jsx("div",{className:"vac-grid-mini",children:o.map((c,m)=>e.jsxs("div",{className:"vac-card-mini",children:[e.jsx("div",{className:"vac-mini-top",style:{background:c.gradient},children:e.jsx(Tt,{name:c.icon})}),e.jsxs("div",{className:"vac-mini-body",children:[e.jsx("h4",{children:c.title}),e.jsxs("div",{className:"vac-mini-row",children:[e.jsxs("span",{className:"vac-mini-duration",children:[e.jsx(Tt,{name:"Clock"})," ",c.duration]}),e.jsx(Tp,{status:c.status})]})]})]},m))})]}),e.jsx("section",{className:"vac-section vac-section-light",children:e.jsxs("div",{className:"vac-split",children:[e.jsxs("div",{className:"vac-split-text",children:[e.jsx("span",{className:"pill",children:"💡 Why Join?"}),e.jsxs("h2",{children:["Advantages of Learning ",e.jsx("span",{className:"gradient-text",children:"Extra Skills"})," During Graduation"]}),e.jsx("p",{children:"Build skills that open new doors, make you more employable, and give you a competitive edge in the professional world."}),e.jsx("ul",{className:"vac-checklist",children:["Increased job prospects and wider career horizons","Learn industry tools, techniques & in‑demand languages","More cost‑effective than traditional certification schools","Keep polishing existing skills alongside your degree"].map((c,m)=>e.jsxs("li",{children:[e.jsx(Tt,{name:"CheckCircle"})," ",c]},m))})]}),e.jsx("div",{className:"vac-video-embed",children:e.jsx("iframe",{src:"https://www.youtube.com/embed/gUulJAxFuVg?autoplay=0",title:"Value Added Courses",allow:"encrypted-media; picture-in-picture",allowFullScreen:!0})})]})}),e.jsxs("section",{className:"vac-section vac-section-dark",children:[e.jsx("div",{className:"vac-heading",children:e.jsxs("h2",{children:["What You'll ",e.jsx("span",{className:"gradient-text",children:"Gain"})]})}),e.jsx("div",{className:"vac-grid-4",children:b0.map((c,m)=>e.jsxs("div",{className:"vac-adv-card",children:[e.jsx(Tt,{name:c.icon}),e.jsx("h3",{children:c.title}),e.jsx("p",{children:c.desc})]},m))})]})]})}const v0=[{title:"Soft Skills Development",short:"Communication & Leadership",desc:"Build strong communication skills, a magnetic personality, leadership qualities, and interpersonal abilities that employers look for.",icon:"fa-solid fa-comments",color:"#2dd4bf",colorBg:"linear-gradient(135deg, #2dd4bf 0%, #06b6d4 100%)",points:["Public Speaking & Presentation","Team Collaboration & Conflict Resolution","Professional Etiquette & Body Language"]},{title:"Aptitude Training",short:"Quantitative & Logical Reasoning",desc:"Master quantitative aptitude, logical reasoning, and analytical skills for placement drives, competitive exams, and interviews.",icon:"fa-solid fa-calculator",color:"#f59e0b",colorBg:"linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)",points:["Number Systems & Data Interpretation","Verbal & Non-Verbal Reasoning","Mock Tests & Placement Papers"]},{title:"Technical Workshops",short:"Hands-on Technology Sessions",desc:"Deep-dive into the latest technologies through practical workshops, coding competitions, and real-world technical projects.",icon:"fa-solid fa-screwdriver-wrench",color:"#8b5cf6",colorBg:"linear-gradient(135deg, #8b5cf6 0%, #a78bfa 100%)",points:["Hackathons & Coding Competitions","Open-Source Contributions","Industry-Standard Tool Training"]},{title:"Industry Visits",short:"Real-World Exposure",desc:"Step into the real world with organised visits to IT companies, manufacturing plants, and leading industries.",icon:"fa-solid fa-industry",color:"#ec4899",colorBg:"linear-gradient(135deg, #ec4899 0%, #f43f5e 100%)",points:["IT Company Visits","Interaction with Industry Leaders","Understanding Corporate Culture"]},{title:"Guest Lectures",short:"Learn from the Best",desc:"Regular talks by industry professionals, renowned entrepreneurs, and academic experts to broaden your professional perspective.",icon:"fa-solid fa-microphone-lines",color:"#14b8a6",colorBg:"linear-gradient(135deg, #14b8a6 0%, #06b6d4 100%)",points:["Entrepreneur & CEO Talks","Academic Research Sessions","Career Guidance Panels"]},{title:"Entrepreneurship Development",short:"Start & Scale Your Ideas",desc:"Learn to ideate, plan, and execute your own venture with training in business planning, startup fundamentals, and innovation.",icon:"fa-solid fa-rocket",color:"#f97316",colorBg:"linear-gradient(135deg, #f97316 0%, #fb923c 100%)",points:["Business Model Canvas","Startup Pitch & Funding Basics","Incubation & Mentorship Programs"]},{title:"Community Service",short:"Give Back, Grow Together",desc:"Participate in meaningful social outreach programs, environmental campaigns, and CSR activities that build character.",icon:"fa-solid fa-hand-holding-heart",color:"#10b981",colorBg:"linear-gradient(135deg, #10b981 0%, #34d399 100%)",points:["Rural Outreach Programs","Environmental Awareness Drives","Blood Donation & Health Camps"]},{title:"Sports & Fitness",short:"Compete & Stay Fit",desc:"Build teamwork, discipline, and a healthy body through annual sports events, fitness activities, and inter-college competitions.",icon:"fa-solid fa-trophy",color:"#3b82f6",colorBg:"linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)",points:["Annual Sports Meet","Indoor & Outdoor Games","Fitness & Wellness Programs"]}],j0=[{sem:"2nd Sem",activity:"Internship – Initial Exposure",color:"#2dd4bf"},{sem:"3rd Sem",activity:"Online Courses Begin",color:"#8b5cf6"},{sem:"4th Sem",activity:"Value Addition Activities",color:"#f97316"},{sem:"5th Sem",activity:"Advanced Online Courses",color:"#ec4899"},{sem:"6th Sem",activity:"Industry Internship",color:"#10b981"},{sem:"7th Sem",activity:"Minor Projects",color:"#3b82f6"},{sem:"8th Sem",activity:"Major Project (Capstone)",color:"#f59e0b"}];function S0({activity:r,index:s}){const[o,c]=v.useState(!1),m=v.useRef(null),[p,u]=v.useState(!1);return v.useEffect(()=>{const x=new IntersectionObserver(([h])=>{h.isIntersecting&&u(!0)},{threshold:.1});return m.current&&x.observe(m.current),()=>x.disconnect()},[]),e.jsxs("div",{ref:m,className:`ep2-card${p?" ep2-card--vis":""}`,style:{"--c":r.color,animationDelay:`${s*.08}s`},children:[e.jsxs("div",{className:"ep2-card-icon-bar",style:{background:r.colorBg},children:[e.jsx("i",{className:`${r.icon} ep2-big-icon`}),e.jsxs("div",{className:"ep2-card-header-text",children:[e.jsx("h3",{children:r.title}),e.jsx("p",{children:r.short})]})]}),e.jsxs("div",{className:"ep2-card-body",children:[e.jsx("p",{children:r.desc}),e.jsxs("button",{className:"ep2-toggle-btn",onClick:()=>c(x=>!x),children:[o?"Show Less":"See Details",e.jsx("i",{className:`fa-solid fa-chevron-${o?"up":"down"}`})]}),o&&e.jsx("ul",{className:"ep2-points",children:r.points.map((x,h)=>e.jsxs("li",{children:[e.jsx("i",{className:"fa-solid fa-check-circle"}),x]},h))})]})]})}function w0(){return e.jsxs("div",{className:"ep2-page",children:[e.jsx("style",{children:`
                .ep2-page { background: #f8faff; }

                /* ── HERO ── */
                .ep2-hero {
                    background: linear-gradient(165deg, #020c1b 0%, #0c2340 40%, #112d52 70%, #060f1e 100%);
                    padding: 80px 5% 60px;
                    position: relative;
                    overflow: hidden;
                }

                /* New Flex Container for Left/Right Layout */
                .ep2-hero-content {
                    position: relative;
                    z-index: 2;
                    display: flex;
                    align-items: center; /* Vertical Center */
                    justify-content: space-between;
                    gap: 40px;
                    flex-wrap: wrap;
                    max-width: 1200px;
                    margin: 0 auto;
                }

                .ep2-hero-left { flex: 1; min-width: 300px; text-align: left; }
                .ep2-hero-right { flex-shrink: 0; }

                /* ICC Style Badge */
                .ep2-hero-chip {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    background: rgba(255, 204, 0, 0.1);
                    border: 1px solid rgba(255, 204, 0, 0.28);
                    color: #ffcc00; /* Yellow */
                    padding: 6px 16px;
                    border-radius: 30px;
                    font-size: 0.68rem;
                    font-weight: 800;
                    letter-spacing: 2px;
                    text-transform: uppercase;
                    margin-bottom: 18px;
                }

                .ep2-hero h1 {
                    font-family: 'Poppins', sans-serif;
                    font-size: clamp(2rem, 5vw, 3.2rem);
                    font-weight: 900;
                    color: #fff;
                    line-height: 1.1;
                    margin-bottom: 18px;
                }

                .ep2-hero h1 em {
                    font-style: normal;
                    color: #ffcc00; /* Yellow instead of teal */
                }

                .ep2-hero p {
                    color: rgba(255, 255, 255, 0.5);
                    font-size: 1rem;
                    max-width: 520px;
                    line-height: 1.8;
                }

                /* Right Side Badges Stack */
                .ep2-hero-badges {
                    display: flex;
                    flex-direction: column; /* Stacked on the right */
                    gap: 12px;
                }

                .ep2-hero-badge {
                    background: rgba(255, 255, 255, 0.06);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    color: rgba(255, 255, 255, 0.7);
                    padding: 10px 20px;
                    border-radius: 12px;
                    font-weight: 600;
                    font-size: 0.85rem;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                }

                /* ── SEMESTER TIMELINE ── */
                .ep2-timeline-section { background: #fff; padding: 80px 5%; }
                .ep2-section-heading { text-align: center; margin-bottom: 52px; }
                .ep2-section-pill {
                    display: inline-block; background: #ccfbf1; color: #0f766e;
                    border: 1px solid #99f6e4; border-radius: 20px; padding: 5px 16px;
                    font-size: 0.72rem; font-weight: 800; letter-spacing: 1.5px; text-transform: uppercase; margin-bottom: 12px;
                }
                .ep2-section-heading h2 {
                    font-family: 'Poppins', sans-serif; font-size: clamp(1.8rem, 4vw, 2.5rem);
                    font-weight: 900; color: #0a1628; margin-bottom: 12px;
                }
                .ep2-section-heading h2 span {
                    background: linear-gradient(135deg, #0f766e, #2dd4bf);
                    -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
                }
                .ep2-section-heading p { color: #64748b; font-size: 0.95rem; max-width: 540px; margin: 0 auto; }
                .ep2-timeline {
                    max-width: 900px; margin: 0 auto;
                    display: flex; flex-direction: column; gap: 0;
                    position: relative;
                }
                .ep2-timeline::before {
                    content: ''; position: absolute; left: 48px; top: 24px; bottom: 24px;
                    width: 2px; background: linear-gradient(to bottom, #2dd4bf, #06b6d4);
                }
                .ep2-tl-row {
                    display: flex; align-items: center; gap: 24px; padding: 16px 0; position: relative;
                    animation: ep2TlIn 0.5s ease both;
                }
                @keyframes ep2TlIn { from { opacity:0; transform:translateX(-20px); } to { opacity:1; transform:translateX(0); } }
                .ep2-tl-dot {
                    width: 48px; height: 48px; border-radius: 50%; flex-shrink: 0;
                    display: flex; align-items: center; justify-content: center;
                    font-family: 'Poppins', sans-serif; font-size: 0.65rem; font-weight: 800;
                    color: #fff; z-index: 1; box-shadow: 0 4px 16px rgba(0,0,0,0.15);
                }
                .ep2-tl-content {
                    flex: 1; background: #f8faff; border-radius: 14px; padding: 16px 20px;
                    border: 1px solid rgba(10,22,40,0.07);
                    display: flex; align-items: center; justify-content: space-between;
                    transition: box-shadow 0.2s, transform 0.2s;
                }
                .ep2-tl-content:hover { box-shadow: 0 8px 24px rgba(10,22,40,0.1); transform: translateX(4px); }
                .ep2-tl-sem {
                    font-family: 'Poppins', sans-serif; font-size: 0.72rem; font-weight: 800;
                    text-transform: uppercase; letter-spacing: 0.8px; color: #64748b; margin-bottom: 4px;
                }
                .ep2-tl-act { font-family: 'Poppins', sans-serif; font-size: 0.9rem; font-weight: 700; color: #0a1628; }
                .ep2-tl-arrow { color: #94a3b8; font-size: 0.75rem; }

                /* ── ACTIVITIES SECTION ── */
                .ep2-activities-section { background: #f8faff; padding: 80px 5%; }
                .ep2-grid {
                    max-width: 1200px; margin: 0 auto;
                    display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 24px;
                }
                .ep2-card {
                    background: #fff; border-radius: 20px; overflow: hidden;
                    box-shadow: 0 4px 20px rgba(10,22,40,0.07);
                    border: 1px solid rgba(10,22,40,0.06);
                    border-top: 4px solid var(--c);
                    opacity: 0; transform: translateY(30px);
                    transition: opacity 0.5s ease, transform 0.5s ease, box-shadow 0.3s;
                }
                .ep2-card--vis { opacity: 1; transform: translateY(0); }
                .ep2-card:hover { box-shadow: 0 12px 40px rgba(10,22,40,0.13); }
                .ep2-card-icon-bar {
                    padding: 24px 22px; display: flex; align-items: center; gap: 16px;
                    position: relative; overflow: hidden;
                }
                .ep2-card-icon-bar::after {
                    content: ''; position: absolute; top: -20px; right: -20px;
                    width: 80px; height: 80px; border-radius: 50%; background: rgba(255,255,255,0.15);
                }
                .ep2-big-icon { font-size: 1.9rem; flex-shrink: 0; color: rgba(255,255,255,0.92); }
                .ep2-card-header-text h3 { font-family: 'Poppins', sans-serif; font-size: 1rem; font-weight: 800; color: #fff; margin: 0 0 4px; }
                .ep2-card-header-text p { font-size: 0.75rem; color: rgba(255,255,255,0.75); margin: 0; font-weight: 500; }
                .ep2-card-body { padding: 20px 22px; }
                .ep2-card-body > p { font-size: 0.82rem; color: #475569; line-height: 1.8; margin: 0 0 14px; }
                .ep2-toggle-btn {
                    display: flex; align-items: center; gap: 8px; padding: 8px 0; border: none;
                    background: none; cursor: pointer; font-family: 'Poppins', sans-serif;
                    font-size: 0.78rem; font-weight: 700; color: var(--c); transition: opacity 0.2s;
                }
                .ep2-toggle-btn:hover { opacity: 0.8; }
                .ep2-points { list-style: none; padding: 0; margin: 12px 0 0; display: flex; flex-direction: column; gap: 8px; }
                .ep2-points li {
                    display: flex; align-items: flex-start; gap: 8px;
                    font-size: 0.79rem; color: #334155; line-height: 1.5;
                }
                .ep2-points li i { color: var(--c); font-size: 0.7rem; flex-shrink: 0; margin-top: 3px; }

                /* ── PROGRAMS TABLE ── */
                .ep2-table-section { background: #fff; padding: 80px 5%; }
                .ep2-table-wrap { max-width: 1100px; margin: 0 auto; overflow-x: auto; }
                .ep2-table {
                    width: 100%; border-collapse: collapse; min-width: 700px;
                    background: #fff; border-radius: 16px; overflow: hidden;
                    box-shadow: 0 8px 32px rgba(10,22,40,0.1); border: 1px solid rgba(10,22,40,0.07);
                }
                .ep2-table th {
                    background: #0a1628; color: #fff;
                    font-family: 'Poppins', sans-serif; font-size: 0.8rem; font-weight: 700;
                    padding: 16px 18px; text-align: center;
                }
                .ep2-table th:first-child { text-align: left; }
                .ep2-table td {
                    padding: 14px 18px; border-bottom: 1px solid rgba(10,22,40,0.06);
                    font-family: 'Poppins', sans-serif; font-size: 0.82rem; text-align: center; color: #334155;
                }
                .ep2-table td:first-child { text-align: left; font-weight: 700; color: #0a1628; }
                .ep2-table tr:nth-child(even) td { background: rgba(45,212,191,0.03); }
                .ep2-table tr:hover td { background: rgba(45,212,191,0.06); }
                .ep2-sem-chip {
                    display: inline-block; border-radius: 20px; padding: 3px 12px;
                    font-size: 0.7rem; font-weight: 700; white-space: nowrap; margin: 2px;
                }

                /* ── CTA ── */
                .ep2-cta {
                    background: linear-gradient(135deg, #0f2027, #2dd4bf);
                    padding: 80px 5%; text-align: center; position: relative; overflow: hidden;
                }
                .ep2-cta::before {
                    content: ''; position: absolute; inset: 0;
                    background: radial-gradient(ellipse at 50% 0%, rgba(6,182,212,0.2) 0%, transparent 60%);
                }
                .ep2-cta-inner { max-width: 640px; margin: 0 auto; position: relative; z-index: 1; }
                .ep2-cta h2 { font-family: 'Poppins', sans-serif; font-size: 2.2rem; font-weight: 900; color: #fff; margin-bottom: 12px; }
                .ep2-cta p { color: rgba(255,255,255,0.7); font-size: 1rem; margin-bottom: 32px; line-height: 1.7; }
                .ep2-cta-btn {
                    display: inline-flex; align-items: center; gap: 10px;
                    background: #fff; color: #0f2027; padding: 16px 36px; border-radius: 50px;
                    font-family: 'Poppins', sans-serif; font-size: 1rem; font-weight: 800;
                    text-decoration: none; transition: all 0.3s;
                    box-shadow: 0 8px 30px rgba(0,0,0,0.2);
                }
                .ep2-cta-btn:hover { transform: translateY(-4px); box-shadow: 0 16px 40px rgba(0,0,0,0.3); }

                /* ── RESPONSIVE ── */
                @media (max-width: 768px) {
                    .ep2-grid { grid-template-columns: 1fr; }
                    .ep2-timeline::before { left: 24px; }
                    .ep2-tl-dot { width: 36px; height: 36px; font-size: 0.55rem; }
                }
                @media (max-width: 480px) {
                    .ep2-hero { padding-top: 64px; }
                    .ep2-cta h2 { font-size: 1.6rem; }
                }
            `}),e.jsxs("section",{className:"ep2-hero",children:[e.jsxs("div",{className:"ep2-hero-orbs",children:[e.jsx("div",{className:"ep2-orb ep2-orb-1"}),e.jsx("div",{className:"ep2-orb ep2-orb-2"})]}),e.jsxs("div",{className:"ep2-hero-content",children:[e.jsxs("div",{className:"ep2-hero-left",children:[e.jsxs("div",{className:"ep2-hero-chip",children:[e.jsx("i",{className:"fa-solid fa-seedling"})," Holistic Development"]}),e.jsxs("h1",{children:["Enhancement Programs for",e.jsx("br",{}),e.jsx("em",{children:"All-Round Excellence"})]}),e.jsx("p",{children:"Beyond the classroom — structured programs that develop your personality, skills, and career readiness from Day 1 of graduation."})]}),e.jsx("div",{className:"ep2-hero-right",children:e.jsx("div",{className:"ep2-hero-badges",children:["Soft Skills","Aptitude Training","Industry Exposure","Entrepreneurship","Community Service"].map((r,s)=>e.jsxs("span",{className:"ep2-hero-badge",children:[e.jsx("i",{className:"fa-solid fa-circle-check",style:{color:"#ffcc00"}})," ",r]},s))})})]})]}),e.jsxs("section",{className:"ep2-timeline-section",children:[e.jsxs("div",{className:"ep2-section-heading",children:[e.jsx("div",{className:"ep2-section-pill",children:"📅 Structured Plan"}),e.jsxs("h2",{children:["Semester-wise ",e.jsx("span",{children:"Enhancement Roadmap"})]}),e.jsx("p",{children:"Every semester at CTC is designed with intentional activities to build your capabilities progressively over 4 years."})]}),e.jsx("div",{className:"ep2-timeline",children:j0.map((r,s)=>e.jsxs("div",{className:"ep2-tl-row",style:{animationDelay:`${s*.1}s`},children:[e.jsx("div",{className:"ep2-tl-dot",style:{background:r.color},children:r.sem.split(" ")[0]}),e.jsxs("div",{className:"ep2-tl-content",children:[e.jsxs("div",{children:[e.jsx("div",{className:"ep2-tl-sem",children:r.sem}),e.jsx("div",{className:"ep2-tl-act",children:r.activity})]}),e.jsx("i",{className:"fa-solid fa-chevron-right ep2-tl-arrow"})]})]},s))})]}),e.jsxs("section",{className:"ep2-activities-section",children:[e.jsxs("div",{className:"ep2-section-heading",children:[e.jsx("div",{className:"ep2-section-pill",children:"🎯 Programs"}),e.jsxs("h2",{children:["Our Enhancement ",e.jsx("span",{children:"Activities"})]}),e.jsx("p",{children:"Click on any card to see what skills you'll build through each program."})]}),e.jsx("div",{className:"ep2-grid",children:v0.map((r,s)=>e.jsx(S0,{activity:r,index:s},s))})]}),e.jsxs("section",{className:"ep2-table-section",children:[e.jsxs("div",{className:"ep2-section-heading",children:[e.jsx("div",{className:"ep2-section-pill",children:"📋 All Programs"}),e.jsxs("h2",{children:["Program ",e.jsx("span",{children:"Overview Table"})]}),e.jsx("p",{children:"A snapshot of activities planned across all 4 degree programs at Creative Techno College."})]}),e.jsx("div",{className:"ep2-table-wrap",children:e.jsxs("table",{className:"ep2-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Activity"}),e.jsx("th",{children:"BBA"}),e.jsx("th",{children:"BCA"}),e.jsx("th",{children:"B.Sc CS"}),e.jsx("th",{children:"B.Sc DS"})]})}),e.jsx("tbody",{children:[{act:"🗒️ Minor Projects",sems:["Every Sem","Every Sem","Every Sem","Every Sem"]},{act:"📚 Online Courses",sems:["3rd, 5th, 7th","3rd, 5th, 7th","3rd, 5th, 7th","3rd, 5th, 7th"]},{act:"💼 Internship",sems:["2nd, 4th, 6th","2nd, 4th, 6th","2nd, 4th, 6th","2nd, 4th, 6th"]},{act:"🎓 Major Project",sems:["8th Sem","8th Sem","8th Sem","8th Sem"]}].map((r,s)=>e.jsxs("tr",{children:[e.jsx("td",{children:r.act}),r.sems.map((o,c)=>e.jsx("td",{children:e.jsx("span",{className:"ep2-sem-chip",style:{background:["rgba(45,212,191,0.12)","rgba(139,92,246,0.12)","rgba(59,130,246,0.12)","rgba(245,158,11,0.12)"][c],color:["#0f766e","#7c3aed","#1d4ed8","#b45309"][c],border:`1px solid ${["rgba(45,212,191,0.3)","rgba(139,92,246,0.3)","rgba(59,130,246,0.3)","rgba(245,158,11,0.3)"][c]}`},children:o})},c))]},s))})]})})]})]})}function C0(){v.useEffect(()=>{const r=document.querySelectorAll(".rv"),s=new IntersectionObserver(o=>o.forEach(c=>{c.isIntersecting&&c.target.classList.add("visible")}),{threshold:.07});return r.forEach(o=>s.observe(o)),()=>s.disconnect()},[])}const k0=[{name:"Mr. Bhabani Shankar Sahoo",role:"Placement Head",img:"/CTC NEW REACT WEBSITE/images/OURTEAM/Bhabani Sir.jpg",icon:"fa-briefcase",color:"#0c2340"},{name:"Mr. Subhrajyoti Behera",role:"Activity Head",img:"/CTC NEW REACT WEBSITE/images/OURTEAM/Subhrajyoti Sir.jpg",icon:"fa-calendar-check",color:"#1a3a6b"}],A0=[{name:"Wipro",logo:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/wipro.png",color:"#8b2be2"},{name:"TCS",logo:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/tcs.jpg",color:"#0a2472"},{name:"LTI Mindtree",logo:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/lti.png",color:"#00aa44"},{name:"Cognizant",logo:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/cognizant.png",color:"#0066cc"},{name:"Infosys",logo:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/infosys.png",color:"#007acc"},{name:"Capgemini",logo:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/capgemini.png",color:"#0070ad"},{name:"Deloitte",logo:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/DELOITTE.jpeg",color:"#86bc25"}],N0=[{icon:"fa-rocket",title:"Enhance Employability",desc:"Equip students with the necessary knowledge and skills to secure employment in leading companies."},{icon:"fa-people-group",title:"Holistic Development",desc:"Foster both technical and soft skills to prepare students for every stage of the recruitment process."},{icon:"fa-industry",title:"Industry Readiness",desc:"Align training modules with current market demands and industry expectations."},{icon:"fa-door-open",title:"Inclusive Opportunities",desc:"Provide placement opportunities across a diverse range of companies, including MNCs and local firms."},{icon:"fa-arrows-rotate",title:"Continuous Improvement",desc:"Regularly update and refine the training program based on feedback and evolving market trends."}],T0=[{img:"/CTC NEW REACT WEBSITE/images/DevelopmentProgram/Workshop.jpg",title:"Workshops",desc:"Hands-on sessions for skill building."},{img:"/CTC NEW REACT WEBSITE/images/DevelopmentProgram/Internship.jpg",title:"Internships",desc:"Real-world work experience for students."},{img:"/CTC NEW REACT WEBSITE/images/DevelopmentProgram/LiveProject.jpg",title:"Live Projects",desc:"Authentic projects to apply knowledge."},{img:"/CTC NEW REACT WEBSITE/images/DevelopmentProgram/Webinar.jpg",title:"Webinars",desc:"Virtual expert sessions on trending topics."},{img:"/CTC NEW REACT WEBSITE/images/DevelopmentProgram/QuantPreparation.jpg",title:"Quants Prep",desc:"Sharpen analytical & numerical skills."},{img:"/CTC NEW REACT WEBSITE/images/DevelopmentProgram/MockInterview.jpg",title:"Mock Interviews",desc:"Simulated interviews for confidence."},{img:"/CTC NEW REACT WEBSITE/images/DevelopmentProgram/ProgrammingSession.jpg",title:"Programming Session",desc:"Dedicated sessions for coding clarity."},{img:"/CTC NEW REACT WEBSITE/images/DevelopmentProgram/SoftSkill.jpg",title:"Soft Skills",desc:"Training in communication & teamwork."},{img:"/CTC NEW REACT WEBSITE/images/DevelopmentProgram/Grooming.jpg",title:"Grooming",desc:"Personality & etiquette improvement."},{img:"/CTC NEW REACT WEBSITE/images/DevelopmentProgram/Seminar.jpg",title:"Seminar",desc:"Develop stage confidence."},{img:"/CTC NEW REACT WEBSITE/images/DevelopmentProgram/Presentation.jpg",title:"Presentation",desc:"Learn impactful presentation skills."},{img:"/CTC NEW REACT WEBSITE/images/DevelopmentProgram/GroupDiscussion.jpg",title:"Group Discussion",desc:"Improve teamwork & critical thinking."}],E0=[{num:"01",title:"Aptitude & Reasoning",icon:"fa-brain",desc:"Regular practice sessions and mock tests to strengthen problem-solving and analytical skills.",tags:["Quantitative","Logical Reasoning","Mock Tests"],color:"#0c2340"},{num:"02",title:"Technical Skills",icon:"fa-code",desc:"Intensive workshops and hands-on projects for BCA and B.Sc. (CS) students to enhance practical knowledge.",tags:["Programming","Hands-on Projects","DSA"],color:"#1a3a6b"},{num:"03",title:"Soft Skills & Interview Prep",icon:"fa-comments",desc:"Role-playing exercises, group discussions, and interview simulations to improve communication and confidence.",tags:["Communication","Group Discussion","Mock Interview"],color:"#2d5a8e"}],R0=[{title:"JOB-A-THON 2022",icon:"fa-trophy",sub:"First edition — campus hiring drive",link:null},{title:"JOB-A-THON 2023",icon:"fa-medal",sub:"Expanded to 15+ companies",link:null},{title:"JOB-A-THON 2024",icon:"fa-star",sub:"Record placements — 60+ students",link:null},{title:"MISSION — 40",icon:"fa-bullseye",sub:"2025 drive — 40 MNC targets",link:"/placement/mission40"}],I0=[{title:"Enhance Technical Skills",icon:"fa-laptop-code",points:["Equip students with the latest technological skills and tools currently in demand.","Provide practical, hands-on experience with real-world projects and software development."]},{title:"Bridge Academia & Industry",icon:"fa-building-columns",points:["Offer exposure to industry standards, methodologies, and professional work environments.","Facilitate the transition from academic learning to professional application."]},{title:"Promote Collaboration",icon:"fa-handshake",points:["Establish and strengthen partnerships with local software companies for mutual growth.","Provide students with networking opportunities and potential job placements."]},{title:"Improve Employability",icon:"fa-briefcase",points:["Enhance employability by providing relevant, marketable skills and experiences.","Prepare students for careers in tech by improving problem-solving abilities."]}],P0=[{icon:"fa-chart-line",title:"Skill Enhancement",desc:"Provide students with advanced skills that complement their primary coursework."},{icon:"fa-hammer",title:"Practical Application",desc:"Offer hands-on projects that allow students to apply theoretical knowledge in real-world scenarios."},{icon:"fa-industry",title:"Industry Readiness",desc:"Equip students with industry-relevant skills, making them more competitive in the job market."},{icon:"fa-book-open",title:"Comprehensive Learning",desc:"Broaden the learning experience with courses covering emerging technologies and advanced topics."},{icon:"fa-certificate",title:"Certification",desc:"Validate the additional skills acquired by students through a certification process."}];function B0({item:r,idx:s}){const[o,c]=v.useState(!1);return e.jsxs("div",{className:"rv",style:{borderRadius:18,overflow:"hidden",background:"#fff",border:"1px solid rgba(12,35,64,0.07)",boxShadow:o?"0 16px 48px rgba(12,35,64,0.18)":"0 4px 18px rgba(12,35,64,0.08)",transform:o?"translateY(-8px)":"none",transition:"all 0.3s ease",transitionDelay:`${s%4*.06}s`},onMouseEnter:()=>c(!0),onMouseLeave:()=>c(!1),children:[e.jsxs("div",{style:{position:"relative",overflow:"hidden",height:180},children:[e.jsx("img",{src:r.img,alt:r.title,style:{width:"100%",height:"100%",objectFit:"cover",transition:"transform 0.4s ease",transform:o?"scale(1.06)":"scale(1)"},onError:m=>{m.target.parentElement.style.background="linear-gradient(135deg,#0c2340,#2d5a8e)",m.target.style.display="none"}}),e.jsx("div",{style:{position:"absolute",inset:0,background:o?"rgba(12,35,64,0.3)":"rgba(12,35,64,0)",transition:"background 0.3s"}})]}),e.jsxs("div",{style:{padding:"16px 18px"},children:[e.jsx("div",{style:{fontFamily:"'Plus Jakarta Sans',sans-serif",fontWeight:800,fontSize:"0.9rem",color:"#0c2340",marginBottom:4},children:r.title}),e.jsx("div",{style:{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"0.75rem",color:"#64748b",lineHeight:1.6},children:r.desc})]})]})}function z0({p:r,idx:s}){const[o,c]=v.useState(!1),m=tr(),p=()=>{r.link&&m(r.link)};return e.jsxs("div",{className:"rv",style:{background:o?"linear-gradient(135deg,#0c2340,#1a3a6b)":"#fff",border:"2px solid",borderColor:o?"#0c2340":"rgba(12,35,64,0.15)",borderRadius:22,padding:"36px 28px",textAlign:"center",cursor:r.link?"pointer":"default",boxShadow:o?"0 20px 60px rgba(12,35,64,0.35)":"0 4px 20px rgba(12,35,64,0.08)",transform:o?"translateY(-10px) scale(1.03)":"none",transition:"all 0.35s cubic-bezier(0.4,0,0.2,1)",transitionDelay:`${s*.07}s`,position:"relative",overflow:"hidden"},onMouseEnter:()=>c(!0),onMouseLeave:()=>c(!1),onClick:p,children:[o&&e.jsx("div",{style:{position:"absolute",top:"-50%",left:"-50%",width:"200%",height:"200%",background:"radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 70%)",pointerEvents:"none"}}),r.link&&e.jsx("div",{style:{position:"absolute",top:14,right:14,background:o?"rgba(255,204,0,0.25)":"rgba(12,35,64,0.07)",border:"1px solid",borderColor:o?"rgba(255,204,0,0.45)":"rgba(12,35,64,0.15)",color:o?"#ffcc00":"#0c2340",borderRadius:20,padding:"3px 10px",fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"0.62rem",fontWeight:800,letterSpacing:"1px",textTransform:"uppercase",transition:"all 0.3s"},children:"View Details"}),e.jsx("div",{style:{width:64,height:64,borderRadius:"50%",margin:"0 auto 16px",background:o?"rgba(255,204,0,0.15)":"rgba(12,35,64,0.06)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.5rem",color:o?"#ffcc00":"#0c2340",transition:"all 0.3s"},children:e.jsx("i",{className:`fa-solid ${r.icon}`})}),e.jsx("div",{style:{fontFamily:"'Plus Jakarta Sans',sans-serif",fontWeight:900,fontSize:"1.15rem",color:o?"#ffcc00":"#0c2340",marginBottom:8,letterSpacing:"-0.3px"},children:r.title}),e.jsx("div",{style:{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"0.76rem",color:o?"rgba(255,255,255,0.55)":"#64748b",fontWeight:500},children:r.sub}),r.link&&e.jsxs("div",{style:{marginTop:16,display:"inline-flex",alignItems:"center",gap:6,fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"0.75rem",fontWeight:800,color:o?"#ffcc00":"#0c2340",transition:"all 0.3s"},children:["Explore Program ",e.jsx("i",{className:"fa-solid fa-arrow-right",style:{fontSize:"0.7rem",transform:o?"translateX(4px)":"none",transition:"transform 0.25s"}})]})]})}function ia({badge:r,title:s,highlight:o,sub:c}){return e.jsxs("div",{style:{textAlign:"center",marginBottom:48},children:[r&&e.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:7,background:"rgba(12,35,64,0.07)",border:"1px solid rgba(12,35,64,0.12)",color:"#0c2340",fontSize:"0.68rem",fontWeight:800,padding:"6px 16px",borderRadius:30,letterSpacing:"2px",textTransform:"uppercase",marginBottom:14},children:[e.jsx("i",{className:"fa-solid fa-circle-dot",style:{color:"#ffcc00"}}),r]}),e.jsxs("h2",{style:{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"clamp(1.7rem,3.5vw,2.4rem)",fontWeight:900,color:"#0c2340",letterSpacing:"-1px",margin:"0 0 12px",lineHeight:1.1},children:[s," ",o&&e.jsx("span",{style:{color:"#1a3a6b"},children:o})]}),c&&e.jsx("p",{style:{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"0.9rem",color:"#64748b",fontWeight:500,maxWidth:560,margin:"0 auto"},children:c})]})}function M0(){return C0(),e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
    @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap');
    @keyframes dpIn{from{opacity:0;transform:translateY(32px);}to{opacity:1;transform:none;}}
    @keyframes dpShimmer{0%{transform:translateX(-100%);}100%{transform:translateX(200%);}}
    @keyframes logoFloat{0%,100%{transform:translateY(0);}50%{transform:translateY(-6px);}}
    .rv{opacity:0;transform:translateY(24px);transition:opacity 0.5s ease,transform 0.5s ease;}
    .rv.visible{opacity:1;transform:none;}
    *{box-sizing:border-box;}
    .dp-page{background:#f0f4f8;min-height:100vh;font-family:'Plus Jakarta Sans',sans-serif;}
    .dp-hero{
      background:linear-gradient(165deg,#020c1b 0%,#0c2340 40%,#112d52 70%,#06101e 100%);
      min-height:360px;display:flex;flex-direction:column;justify-content:flex-end;
      position:relative;overflow:hidden;
    }
    .dp-hero-content{position:relative;z-index:2;padding:68px 5% 52px;}
    .dp-hero-badge{display:inline-flex;align-items:center;gap:8px;background:rgba(255,204,0,0.1);border:1px solid rgba(255,204,0,0.28);color:#ffcc00;font-size:0.68rem;font-weight:800;padding:6px 16px;border-radius:30px;letter-spacing:2.5px;text-transform:uppercase;margin-bottom:18px;}
    .dp-hero-h1{font-family:'Plus Jakarta Sans',sans-serif;font-size:clamp(2rem,5vw,3.4rem);font-weight:900;color:#fff;line-height:1.08;letter-spacing:-1.5px;margin-bottom:14px;}
    .dp-hero-h1 em{font-style:normal;color:#ffcc00;}
    .dp-hero-sub{color:rgba(255,255,255,0.42);font-size:0.88rem;line-height:1.75;max-width:520px;margin-bottom:28px;}
    .dp-wave{height:56px;margin-top:-1px;}
    .dp-wave svg{width:100%;height:100%;display:block;}
    .dp-section{padding:72px 5%;}
    .dp-section-alt{background:#fff;}
    .dp-inner{max-width:1200px;margin:0 auto;}
    .dp-recruiter-grid{display:flex;flex-wrap:wrap;justify-content:center;gap:20px;margin-top:48px;}
    .dp-recruiter-card{
      background:#fff;border-radius:18px;padding:20px 24px;
      box-shadow:0 4px 18px rgba(12,35,64,0.09);border:1.5px solid rgba(12,35,64,0.07);
      display:flex;flex-direction:column;align-items:center;gap:12px;
      width:160px;transition:all 0.28s;cursor:default;
    }
    .dp-recruiter-card:hover{transform:translateY(-8px);box-shadow:0 16px 40px rgba(12,35,64,0.18);}
    .dp-recruiter-logo{width:90px;height:70px;object-fit:contain;}
    .dp-recruiter-name{font-family:'Plus Jakarta Sans',sans-serif;font-size:0.78rem;font-weight:800;color:#0c2340;text-align:center;}
    .dp-obj-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:20px;margin-top:0;}
    .dp-obj-card{
      background:#fff;border-radius:18px;padding:24px 22px;
      border:1.5px solid rgba(12,35,64,0.07);
      box-shadow:0 4px 18px rgba(12,35,64,0.07);
      transition:all 0.28s;
    }
    .dp-obj-card:hover{transform:translateY(-5px);box-shadow:0 12px 36px rgba(12,35,64,0.13);}
    .dp-obj-icon{width:48px;height:48px;border-radius:14px;background:linear-gradient(135deg,#0c2340,#2d5a8e);display:flex;align-items:center;justify-content:center;font-size:1.1rem;color:#ffcc00;margin-bottom:14px;}
    .dp-obj-title{font-family:'Plus Jakarta Sans',sans-serif;font-weight:900;font-size:0.9rem;color:#0c2340;margin-bottom:6px;}
    .dp-obj-desc{font-family:'Plus Jakarta Sans',sans-serif;font-size:0.78rem;color:#64748b;line-height:1.7;}
    .dp-activities-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(230px,1fr));gap:20px;}
    .dp-modules-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:24px;margin-top:0;}
    .dp-module-card{
      background:#fff;border-radius:22px;padding:32px 28px;
      border:1.5px solid rgba(12,35,64,0.08);
      box-shadow:0 4px 20px rgba(12,35,64,0.08);
      transition:all 0.3s;
    }
    .dp-module-card:hover{transform:translateY(-6px);box-shadow:0 16px 48px rgba(12,35,64,0.15);}
    .dp-module-num{font-family:'Plus Jakarta Sans',sans-serif;font-size:3.5rem;font-weight:900;color:rgba(12,35,64,0.06);line-height:1;margin-bottom:-8px;}
    .dp-module-icon{width:52px;height:52px;border-radius:16px;display:flex;align-items:center;justify-content:center;font-size:1.2rem;color:#fff;margin-bottom:16px;}
    .dp-module-title{font-family:'Plus Jakarta Sans',sans-serif;font-weight:900;font-size:1rem;color:#0c2340;margin-bottom:8px;}
    .dp-module-desc{font-family:'Plus Jakarta Sans',sans-serif;font-size:0.8rem;color:#64748b;line-height:1.75;margin-bottom:16px;}
    .dp-module-tags{display:flex;flex-wrap:wrap;gap:6px;}
    .dp-tag{background:rgba(12,35,64,0.06);border:1px solid rgba(12,35,64,0.1);color:#0c2340;border-radius:20px;padding:3px 10px;font-family:'Plus Jakarta Sans',sans-serif;font-size:0.67rem;font-weight:700;}
    .dp-programs-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:20px;}
    .dp-internship-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:20px;margin-top:0;}
    .dp-int-card{
      background:#fff;border-radius:20px;padding:26px 24px;
      border:1.5px solid rgba(12,35,64,0.07);
      box-shadow:0 4px 18px rgba(12,35,64,0.07);
      transition:all 0.28s;
    }
    .dp-int-card:hover{transform:translateY(-5px);box-shadow:0 14px 40px rgba(12,35,64,0.13);}
    .dp-int-icon{width:50px;height:50px;border-radius:15px;background:linear-gradient(135deg,#0c2340,#2d5a8e);display:flex;align-items:center;justify-content:center;font-size:1.1rem;color:#ffcc00;margin-bottom:14px;}
    .dp-int-title{font-family:'Plus Jakarta Sans',sans-serif;font-weight:900;font-size:0.9rem;color:#0c2340;margin-bottom:12px;}
    .dp-int-point{display:flex;gap:9px;margin-bottom:8px;align-items:flex-start;}
    .dp-int-bullet{width:18px;height:18px;border-radius:50%;background:rgba(12,35,64,0.07);flex-shrink:0;display:flex;align-items:center;justify-content:center;margin-top:2px;}
    .dp-int-bullet i{font-size:0.5rem;color:#0c2340;}
    .dp-int-text{font-family:'Plus Jakarta Sans',sans-serif;font-size:0.78rem;color:#475569;line-height:1.65;}
    .dp-value-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:16px;}
    .dp-val-card{
      background:#fff;border-radius:16px;padding:22px 20px;text-align:center;
      border:1.5px solid rgba(12,35,64,0.07);box-shadow:0 3px 14px rgba(12,35,64,0.07);
      transition:all 0.25s;
    }
    .dp-val-card:hover{transform:translateY(-5px);box-shadow:0 12px 32px rgba(12,35,64,0.12);}
    .dp-val-icon{width:50px;height:50px;border-radius:14px;background:linear-gradient(135deg,#0c2340,#1a3a6b);display:flex;align-items:center;justify-content:center;font-size:1.05rem;color:#ffcc00;margin:0 auto 14px;}
    .dp-val-title{font-family:'Plus Jakarta Sans',sans-serif;font-weight:800;font-size:0.85rem;color:#0c2340;margin-bottom:6px;}
    .dp-val-desc{font-family:'Plus Jakarta Sans',sans-serif;font-size:0.74rem;color:#64748b;line-height:1.65;}
    .dp-team-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:24px;margin-top:0;}
    .dp-team-card{
      background:#fff;border-radius:22px;overflow:hidden;
      border:1.5px solid rgba(12,35,64,0.07);box-shadow:0 4px 20px rgba(12,35,64,0.08);
      transition:all 0.3s;
    }
    .dp-team-card:hover{transform:translateY(-8px);box-shadow:0 18px 52px rgba(12,35,64,0.16);}
    .dp-msg-card{
      background:linear-gradient(135deg,#0c2340 0%,#1a3a6b 100%);
      border-radius:22px;padding:36px 40px;
      box-shadow:0 12px 40px rgba(12,35,64,0.3);
      position:relative;overflow:hidden;
    }
    .dp-msg-card::before{content:'';position:absolute;top:-60px;right:-60px;width:220px;height:220px;border-radius:50%;background:rgba(255,204,0,0.07);pointer-events:none;}
    @media(max-width:900px){.dp-recruiter-card{width:130px;}.dp-activities-grid{grid-template-columns:repeat(2,1fr);}}
    @media(max-width:600px){
      .dp-hero-content{padding:48px 4% 36px;}
      .dp-hero-h1{font-size:2rem;letter-spacing:-1px;}
      .dp-section{padding:52px 4%;}
      .dp-activities-grid{grid-template-columns:repeat(2,1fr);gap:12px;}
      .dp-recruiter-card{width:110px;}
    }
    @media(max-width:400px){
      .dp-activities-grid{grid-template-columns:1fr 1fr;}
    }
  `}),e.jsxs("div",{className:"dp-page",children:[e.jsx("div",{className:"dp-hero",children:e.jsxs("div",{className:"dp-hero-content",children:[e.jsxs("div",{className:"dp-hero-badge",children:[e.jsx("i",{className:"fa-solid fa-graduation-cap"}),"Placement Cell · CTC"]}),e.jsxs("h1",{className:"dp-hero-h1",children:["Student ",e.jsx("em",{children:"Development"}),e.jsx("br",{}),"& Placement Programs"]}),e.jsx("p",{className:"dp-hero-sub",children:"Comprehensive training and placement initiatives designed to enhance employability for BCA, B.Sc. (CS) and BBA students — bridging campus to career."}),e.jsx("div",{style:{display:"flex",gap:20,flexWrap:"wrap"},children:[{val:"7+",lbl:"Top Recruiters"},{val:"12",lbl:"Activities"},{val:"3",lbl:"Training Modules"},{val:"4",lbl:"JOB-A-THON Drives"}].map((s,o)=>e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx("div",{style:{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"1.6rem",fontWeight:900,color:"#ffcc00",lineHeight:1},children:s.val}),e.jsx("div",{style:{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"0.67rem",color:"rgba(255,255,255,0.4)",fontWeight:600,marginTop:3,textTransform:"uppercase",letterSpacing:"0.5px"},children:s.lbl})]},o))})]})}),e.jsx("div",{className:"dp-wave",children:e.jsx("svg",{viewBox:"0 0 1440 56",preserveAspectRatio:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M0,38 C360,56 1080,0 1440,38 L1440,56 L0,56 Z",fill:"#f0f4f8"})})}),e.jsx("div",{className:"dp-section",children:e.jsxs("div",{className:"dp-inner",children:[e.jsx(ia,{badge:"Introduction",title:"Our Placement",highlight:"Team",sub:"Dedicated professionals driving student success through structured placement programs and industry partnerships."}),e.jsx("div",{className:"dp-team-grid",children:k0.map((s,o)=>e.jsxs("div",{className:"dp-team-card rv",style:{transitionDelay:`${o*.1}s`},children:[e.jsxs("div",{style:{height:280,overflow:"hidden",position:"relative"},children:[e.jsx("img",{src:s.img,alt:s.name,style:{width:"100%",height:"100%",objectFit:"cover",objectPosition:"top"},onError:c=>{c.target.parentElement.style.background=`linear-gradient(135deg,${s.color},#2d5a8e)`,c.target.style.display="none",c.target.parentElement.innerHTML+='<div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:4rem;opacity:0.3">👤</div>'}}),e.jsx("div",{style:{position:"absolute",inset:0,background:"linear-gradient(to top, rgba(12,35,64,0.7) 0%, transparent 50%)"}})]}),e.jsxs("div",{style:{padding:"20px 22px"},children:[e.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:7,background:"rgba(12,35,64,0.07)",borderRadius:20,padding:"4px 12px",marginBottom:10},children:[e.jsx("i",{className:`fa-solid ${s.icon}`,style:{fontSize:"0.65rem",color:"#0c2340"}}),e.jsx("span",{style:{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"0.68rem",fontWeight:800,color:"#0c2340",textTransform:"uppercase",letterSpacing:"0.5px"},children:s.role})]}),e.jsx("div",{style:{fontFamily:"'Plus Jakarta Sans',sans-serif",fontWeight:900,fontSize:"1rem",color:"#0c2340"},children:s.name})]})]},o))}),e.jsx("div",{className:"rv",style:{marginTop:48,background:"#fff",borderRadius:20,padding:"32px 36px",border:"1.5px solid rgba(12,35,64,0.08)",boxShadow:"0 4px 20px rgba(12,35,64,0.07)"},children:e.jsxs("p",{style:{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"0.95rem",color:"#334155",lineHeight:1.9,margin:0},children:["These programs outline the objectives, plans, and implementation strategies of our institution's ",e.jsx("strong",{style:{color:"#0c2340"},children:"Off-Campus Drive and Student Readiness Program"}),". This initiative is designed to enhance the employability of our students by providing them with comprehensive training and placement opportunities, with a focus on both multinational corporations (MNCs) and local companies. Our program is tailored for students enrolled in ",e.jsx("strong",{style:{color:"#0c2340"},children:"BCA, B.Sc. (Computer Science), and BBA"})," courses."]})})]})}),e.jsx("div",{className:"dp-section dp-section-alt",children:e.jsxs("div",{className:"dp-inner",children:[e.jsx(ia,{badge:"Partners",title:"Our Major",highlight:"Top Recruiters",sub:"Leading MNCs who regularly recruit from Creative Techno College across all batches."}),e.jsx("div",{className:"dp-recruiter-grid",children:A0.map((s,o)=>e.jsxs("div",{className:"dp-recruiter-card rv",style:{transitionDelay:`${o*.07}s`},children:[e.jsx("img",{src:s.logo,alt:s.name,className:"dp-recruiter-logo",onError:c=>{c.target.style.display="none",c.target.parentElement.style.background=`linear-gradient(135deg,${s.color}22,${s.color}44)`;const m=document.createElement("div");m.style.cssText=`width:90px;height:70px;display:flex;align-items:center;justify-content:center;font-size:1.1rem;font-weight:900;color:${s.color};`,m.textContent=s.name.slice(0,3),c.target.parentElement.insertBefore(m,c.target)}}),e.jsx("div",{className:"dp-recruiter-name",children:s.name})]},o))})]})}),e.jsx("div",{className:"dp-section",children:e.jsxs("div",{className:"dp-inner",children:[e.jsx(ia,{badge:"Goals",title:"Program",highlight:"Objectives",sub:"Five pillars that guide our comprehensive placement and development initiative."}),e.jsx("div",{className:"dp-obj-grid",children:N0.map((s,o)=>e.jsxs("div",{className:"dp-obj-card rv",style:{transitionDelay:`${o*.07}s`},children:[e.jsx("div",{className:"dp-obj-icon",children:e.jsx("i",{className:`fa-solid ${s.icon}`})}),e.jsx("div",{className:"dp-obj-title",children:s.title}),e.jsx("div",{className:"dp-obj-desc",children:s.desc})]},o))})]})}),e.jsx("div",{className:"dp-section dp-section-alt",children:e.jsxs("div",{className:"dp-inner",children:[e.jsx(ia,{badge:"Activities",title:"Placement",highlight:"Activity Hub",sub:"12 structured activities that prepare students for every phase of the recruitment process."}),e.jsx("div",{className:"dp-activities-grid",children:T0.map((s,o)=>e.jsx(B0,{item:s,idx:o},o))})]})}),e.jsx("div",{className:"dp-section",children:e.jsxs("div",{className:"dp-inner",children:[e.jsx(ia,{badge:"Training",title:"Module-Based",highlight:"Training Program",sub:"Three structured modules covering aptitude, technical depth, and soft skills for complete placement readiness."}),e.jsx("div",{className:"dp-modules-grid",children:E0.map((s,o)=>e.jsxs("div",{className:"dp-module-card rv",style:{transitionDelay:`${o*.1}s`},children:[e.jsx("div",{className:"dp-module-num",children:s.num}),e.jsx("div",{className:"dp-module-icon",style:{background:`linear-gradient(135deg,${s.color},#2d5a8e)`},children:e.jsx("i",{className:`fa-solid ${s.icon}`,style:{color:"#ffcc00"}})}),e.jsx("div",{className:"dp-module-title",children:s.title}),e.jsx("div",{className:"dp-module-desc",children:s.desc}),e.jsx("div",{className:"dp-module-tags",children:s.tags.map((c,m)=>e.jsx("span",{className:"dp-tag",children:c},m))})]},o))})]})}),e.jsx("div",{className:"dp-section dp-section-alt",children:e.jsxs("div",{className:"dp-inner",children:[e.jsx(ia,{badge:"Flagship Programs",title:"JOB-A-THON &",highlight:"Placement Drives",sub:"Annual flagship placement programs that connect students directly with top recruiters."}),e.jsx("div",{className:"dp-programs-grid",children:R0.map((s,o)=>e.jsx(z0,{p:s,idx:o},o))})]})}),e.jsx("div",{className:"dp-section",children:e.jsxs("div",{className:"dp-inner",children:[e.jsx(ia,{badge:"Internships",title:"Industry",highlight:"Internship Program",sub:"Structured internship goals bridging academic learning with professional industry exposure."}),e.jsx("div",{className:"dp-internship-grid",children:I0.map((s,o)=>e.jsxs("div",{className:"dp-int-card rv",style:{transitionDelay:`${o*.08}s`},children:[e.jsx("div",{className:"dp-int-icon",children:e.jsx("i",{className:`fa-solid ${s.icon}`})}),e.jsx("div",{className:"dp-int-title",children:s.title}),s.points.map((c,m)=>e.jsxs("div",{className:"dp-int-point",children:[e.jsx("div",{className:"dp-int-bullet",children:e.jsx("i",{className:"fa-solid fa-check"})}),e.jsx("div",{className:"dp-int-text",children:c})]},m))]},o))})]})}),e.jsx("div",{className:"dp-section dp-section-alt",children:e.jsxs("div",{className:"dp-inner",children:[e.jsx(ia,{badge:"Value Added",title:"Value Added",highlight:"Courses",sub:"Additional certifications and courses designed to make students stand out in the competitive job market."}),e.jsx("div",{className:"dp-value-grid",children:P0.map((s,o)=>e.jsxs("div",{className:"dp-val-card rv",style:{transitionDelay:`${o*.07}s`},children:[e.jsx("div",{className:"dp-val-icon",children:e.jsx("i",{className:`fa-solid ${s.icon}`})}),e.jsx("div",{className:"dp-val-title",children:s.title}),e.jsx("div",{className:"dp-val-desc",children:s.desc})]},o))}),e.jsx("div",{className:"dp-msg-card rv",style:{marginTop:36},children:e.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:20,flexWrap:"wrap"},children:[e.jsx("div",{style:{width:54,height:54,borderRadius:"50%",flexShrink:0,background:"rgba(255,204,0,0.15)",border:"2px solid rgba(255,204,0,0.3)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.3rem",color:"#ffcc00"},children:e.jsx("i",{className:"fa-solid fa-quote-left"})}),e.jsxs("div",{style:{flex:1},children:[e.jsx("div",{style:{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"0.68rem",fontWeight:800,color:"rgba(255,204,0,0.7)",letterSpacing:2,textTransform:"uppercase",marginBottom:12},children:"From the Placement Head"}),e.jsx("div",{style:{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"0.92rem",color:"rgba(255,255,255,0.75)",lineHeight:1.85,fontStyle:"italic"},children:`"Our institution's Off-Campus Drive and Student Readiness Program is a comprehensive initiative aimed at enhancing the employability of our students. By focusing on pre-placement activities, structured assessment rounds, and targeted training modules, we are committed to preparing our students for successful careers. Our continuous efforts to update and improve the program reflect our dedication to student success and align with the high standards set by the National Board of Accreditation."`}),e.jsx("div",{style:{marginTop:20,fontFamily:"'Plus Jakarta Sans',sans-serif",fontWeight:800,fontSize:"0.88rem",color:"#ffcc00"},children:"Mr. Bhabani Shankar Sahoo"}),e.jsx("div",{style:{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"0.74rem",color:"rgba(255,255,255,0.4)",marginTop:3},children:"Placement Head · Creative Techno College"})]})]})})]})})]})]})}function O0(){const[r,s]=v.useState(!1),[o,c]=v.useState(!1),m="/CTC NEW REACT WEBSITE/images/PlacementBrochure/PLACEMENT BROUCHURE.pdf",p=`
    @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap');

    @keyframes pbIn{from{opacity:0;transform:translateY(32px);}to{opacity:1;transform:none;}}
    @keyframes pbPulse{0%,100%{opacity:0.5;transform:scale(1);}50%{opacity:1;transform:scale(1.05);}}
    @keyframes pbShimmer{0%{transform:translateX(-100%);}100%{transform:translateX(200%);}}
    @keyframes spin{to{transform:rotate(360deg);}}

    *{box-sizing:border-box;margin:0;padding:0;}
    body{font-family:'Plus Jakarta Sans',sans-serif;background:#f0f4f8;}

    .pb-page{min-height:100vh;background:#f0f4f8;font-family:'Plus Jakarta Sans',sans-serif;}

    /* ── HERO ── */
    .pb-hero{
      background:linear-gradient(165deg,#020c1b 0%,#0c2340 40%,#112d52 70%,#06101e 100%);
      min-height:280px;display:flex;flex-direction:column;justify-content:flex-end;
      position:relative;overflow:hidden;
    }
    .pb-hero-content{
      position:relative;z-index:2;padding:56px 5% 48px;
      display:flex;align-items:flex-end;justify-content:space-between;gap:24px;flex-wrap:wrap;
    }
    .pb-hero-left{flex:1;min-width:260px;}
    .pb-hero-badge{
      display:inline-flex;align-items:center;gap:8px;
      background:rgba(255,204,0,0.1);border:1px solid rgba(255,204,0,0.28);
      color:#ffcc00;font-size:0.68rem;font-weight:800;padding:6px 16px;
      border-radius:30px;letter-spacing:2.5px;text-transform:uppercase;margin-bottom:16px;
    }
    .pb-hero-title{
      font-family:'Plus Jakarta Sans',sans-serif;
      font-size:clamp(2rem,4.5vw,3.2rem);font-weight:900;
      color:#fff;line-height:1.08;letter-spacing:-1.5px;margin-bottom:12px;
    }
    .pb-hero-title em{font-style:normal;color:#ffcc00;}
    .pb-hero-sub{color:rgba(255,255,255,0.42);font-size:0.86rem;line-height:1.75;max-width:480px;}
    .pb-hero-right{display:flex;flex-direction:column;gap:10px;flex-shrink:0;}
    .pb-hero-btn{
      display:inline-flex;align-items:center;gap:9px;
      padding:12px 22px;border-radius:13px;border:none;cursor:pointer;
      font-family:'Plus Jakarta Sans',sans-serif;font-size:0.82rem;font-weight:800;
      transition:all 0.25s;position:relative;overflow:hidden;
      white-space:nowrap;
    }
    .pb-hero-btn.primary{
      background:linear-gradient(135deg,#0c2340,#1a3a6b);
      color:#ffcc00;
      box-shadow:0 8px 24px rgba(12,35,64,0.4);
    }
    .pb-hero-btn.primary:hover{transform:translateY(-3px);box-shadow:0 14px 36px rgba(12,35,64,0.5);}
    .pb-hero-btn.secondary{
      background:rgba(255,255,255,0.08);border:1.5px solid rgba(255,255,255,0.18);
      color:rgba(255,255,255,0.75);
    }
    .pb-hero-btn.secondary:hover{background:rgba(255,255,255,0.14);color:#fff;}

    /* ── WAVE ── */
    .pb-wave{height:56px;margin-top:-1px;}
    .pb-wave svg{width:100%;height:100%;display:block;}

    /* ── MAIN ── */
    .pb-main{max-width:1100px;margin:-20px auto 60px;padding:0 4%;}

    /* Quick info strip */
    .pb-info-strip{
      display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:14px;
      margin-bottom:28px;
    }
    .pb-info-chip{
      background:#fff;border-radius:16px;padding:18px 20px;
      border:1px solid rgba(12,35,64,0.07);
      box-shadow:0 3px 16px rgba(12,35,64,0.07);
      display:flex;align-items:center;gap:14px;
      animation:pbIn 0.5s ease both;
    }
    .pb-info-chip-icon{
      width:44px;height:44px;border-radius:12px;flex-shrink:0;
      display:flex;align-items:center;justify-content:center;font-size:1.1rem;color:#fff;
    }
    .pb-info-chip-val{font-family:'Plus Jakarta Sans',sans-serif;font-size:1rem;font-weight:900;color:#0c2340;line-height:1;}
    .pb-info-chip-lbl{font-family:'Plus Jakarta Sans',sans-serif;font-size:0.68rem;font-weight:600;color:#4a6080;margin-top:3px;}

    /* ── PDF VIEWER CARD ── */
    .pb-viewer-card{
      background:#fff;border-radius:24px;overflow:hidden;
      box-shadow:0 8px 40px rgba(12,35,64,0.13);
      border:1px solid rgba(12,35,64,0.07);
    }

    /* Toolbar */
    .pb-toolbar{
      background:linear-gradient(135deg,#0c2340 0%,#1a3a6b 100%);
      padding:16px 24px;
      display:flex;align-items:center;justify-content:space-between;gap:16px;
      flex-wrap:wrap;
      position:relative;overflow:hidden;
    }
    .pb-toolbar::before{
      content:'';position:absolute;inset:0;
      background:radial-gradient(ellipse at 80% 0%,rgba(255,204,0,0.1) 0%,transparent 55%);
      pointer-events:none;
    }
    .pb-toolbar-left{display:flex;align-items:center;gap:12px;position:relative;z-index:1;}
    .pb-toolbar-icon{
      width:40px;height:40px;border-radius:10px;background:rgba(255,204,0,0.15);
      display:flex;align-items:center;justify-content:center;font-size:1rem;color:#ffcc00;flex-shrink:0;
    }
    .pb-toolbar-title{font-family:'Plus Jakarta Sans',sans-serif;font-weight:800;font-size:0.92rem;color:#fff;}
    .pb-toolbar-sub{font-family:'Plus Jakarta Sans',sans-serif;font-size:0.7rem;color:rgba(255,255,255,0.45);margin-top:2px;}
    .pb-toolbar-actions{display:flex;gap:8px;position:relative;z-index:1;flex-wrap:wrap;}
    .pb-tool-btn{
      display:inline-flex;align-items:center;gap:7px;
      padding:8px 16px;border-radius:10px;border:none;cursor:pointer;
      font-family:'Plus Jakarta Sans',sans-serif;font-size:0.74rem;font-weight:800;
      transition:all 0.22s;white-space:nowrap;
    }
    .pb-tool-btn.gold{background:rgba(255,204,0,0.18);color:#ffcc00;border:1.5px solid rgba(255,204,0,0.3);}
    .pb-tool-btn.gold:hover{background:rgba(255,204,0,0.3);transform:translateY(-1px);}
    .pb-tool-btn.white{background:rgba(255,255,255,0.1);color:#fff;border:1.5px solid rgba(255,255,255,0.15);}
    .pb-tool-btn.white:hover{background:rgba(255,255,255,0.18);}

    /* Loader */
    .pb-loader{
      height:520px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;
      background:linear-gradient(135deg,#f8fafc,#f0f4f8);
    }
    .pb-loader-ring{
      width:52px;height:52px;border-radius:50%;
      border:4px solid rgba(12,35,64,0.1);border-top-color:#0c2340;
      animation:spin 0.8s linear infinite;
    }
    .pb-loader-text{font-family:'Plus Jakarta Sans',sans-serif;font-size:0.85rem;font-weight:600;color:#4a6080;}

    /* iframe wrapper */
    .pb-iframe-wrap{
      position:relative;width:100%;
      height:680px;
      background:#525659;
    }
    .pb-iframe-wrap.fullscreen-mode{
      height:92vh;
    }
    .pb-iframe-wrap iframe{
      width:100%;height:100%;border:none;display:block;
    }

    /* Fullscreen toggle */
    .pb-fullscreen-hint{
      padding:14px 24px;background:#f8fafc;border-top:1px solid rgba(12,35,64,0.07);
      display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px;
    }
    .pb-hint-text{font-family:'Plus Jakarta Sans',sans-serif;font-size:0.76rem;color:#4a6080;font-weight:500;display:flex;align-items:center;gap:7px;}
    .pb-hint-text i{color:#0c2340;opacity:0.5;}
    .pb-mobile-notice{
      background:#fff8e1;border:1.5px solid #fde68a;border-radius:12px;
      padding:14px 18px;margin-top:20px;
      display:flex;gap:12px;align-items:flex-start;
    }
    .pb-mobile-notice i{color:#d97706;margin-top:2px;flex-shrink:0;}
    .pb-mobile-notice p{font-family:'Plus Jakarta Sans',sans-serif;font-size:0.8rem;color:#92400e;line-height:1.65;margin:0;font-weight:500;}
    .pb-mobile-dl-btn{
      width:100%;margin-top:14px;padding:15px;border:none;border-radius:13px;
      background:linear-gradient(135deg,#0c2340,#1a3a6b);color:#ffcc00;
      font-family:'Plus Jakarta Sans',sans-serif;font-size:0.9rem;font-weight:800;
      cursor:pointer;display:flex;align-items:center;justify-content:center;gap:9px;
      box-shadow:0 8px 24px rgba(12,35,64,0.3);transition:transform 0.22s,box-shadow 0.22s;
    }
    .pb-mobile-dl-btn:hover{transform:translateY(-2px);box-shadow:0 14px 36px rgba(12,35,64,0.4);}

    /* Bottom cards */
    .pb-bottom-grid{
      display:grid;grid-template-columns:repeat(auto-fill,minmax(250px,1fr));
      gap:18px;margin-top:28px;
    }
    .pb-bottom-card{
      background:#fff;border-radius:18px;padding:24px;
      border:1px solid rgba(12,35,64,0.07);
      box-shadow:0 3px 16px rgba(12,35,64,0.07);
      transition:all 0.28s;
    }
    .pb-bottom-card:hover{transform:translateY(-5px);box-shadow:0 12px 36px rgba(12,35,64,0.13);}
    .pb-bottom-card-icon{
      width:48px;height:48px;border-radius:14px;
      display:flex;align-items:center;justify-content:center;font-size:1.1rem;color:#fff;
      margin-bottom:14px;
    }
    .pb-bottom-card-title{font-family:'Plus Jakarta Sans',sans-serif;font-weight:900;font-size:0.92rem;color:#0c2340;margin-bottom:5px;}
    .pb-bottom-card-desc{font-family:'Plus Jakarta Sans',sans-serif;font-size:0.78rem;color:#4a6080;line-height:1.7;font-weight:500;}

    @media(max-width:700px){
      .pb-hero-right{flex-direction:row;flex-wrap:wrap;}
      .pb-iframe-wrap{height:480px;}
      .pb-toolbar-actions{gap:6px;}
      .pb-tool-btn{font-size:0.68rem;padding:7px 12px;}
    }
    @media(max-width:480px){
      .pb-iframe-wrap{height:380px;}
      .pb-hero-title{font-size:2rem;letter-spacing:-1px;}
      .pb-hero-content{padding:44px 4% 36px;}
    }
  `,u=()=>{const y=document.createElement("a");y.href=m,y.download="CTC_Placement_Brochure.pdf",y.click()},x=()=>{window.open(m,"_blank")},h=[{icon:"fa-building",label:"Top Recruiters",val:"7+",col:"linear-gradient(135deg,#0c2340,#1a3a6b)"},{icon:"fa-users",label:"Students Placed",val:"250+",col:"linear-gradient(135deg,#1a3a6b,#2d5a8e)"},{icon:"fa-calendar",label:"Years of Data",val:"2020–25",col:"linear-gradient(135deg,#2d5a8e,#3d7ab5)"},{icon:"fa-file-pdf",label:"Format",val:"PDF",col:"linear-gradient(135deg,#c0392b,#e74c3c)"}],b=[{icon:"fa-building-columns",col:"linear-gradient(135deg,#0c2340,#1a3a6b)",title:"About CTC Placements",desc:"Creative Techno College has been consistently placing students in top MNCs including TCS, Wipro, LTI Mindtree, Cognizant and Deloitte since 2020."},{icon:"fa-phone",col:"linear-gradient(135deg,#064e3b,#10b981)",title:"Contact Placement Cell",desc:"For campus recruitment partnerships and placement enquiries, reach the CTC Placement Cell at placements@creativecollege.in"},{icon:"fa-briefcase",col:"linear-gradient(135deg,#78350f,#d97706)",title:"Recruit From CTC",desc:"Partner with us for campus drives, internship programs and direct hiring. We offer BCA, B.Sc. CS and BBA graduates trained in industry-relevant skills."}];return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:p}),e.jsxs("div",{className:"pb-page",children:[e.jsx("div",{className:"pb-hero",children:e.jsxs("div",{className:"pb-hero-content",children:[e.jsxs("div",{className:"pb-hero-left",children:[e.jsxs("div",{className:"pb-hero-badge",children:[e.jsx("i",{className:"fa-solid fa-file-pdf"})," Placement Brochure · CTC"]}),e.jsxs("h1",{className:"pb-hero-title",children:["Our ",e.jsx("em",{children:"Placement"}),e.jsx("br",{}),"Brochure"]}),e.jsx("p",{className:"pb-hero-sub",children:"Complete placement brochure of Creative Techno College — featuring top recruiters, student profiles, infrastructure and placement process for campus partners."})]}),e.jsxs("div",{className:"pb-hero-right",children:[e.jsxs("button",{className:"pb-hero-btn primary",onClick:u,children:[e.jsx("i",{className:"fa-solid fa-file-arrow-down"})," Download PDF"]}),e.jsxs("button",{className:"pb-hero-btn secondary",onClick:x,children:[e.jsx("i",{className:"fa-solid fa-arrow-up-right-from-square"})," Open in New Tab"]})]})]})}),e.jsx("div",{className:"pb-wave",children:e.jsx("svg",{viewBox:"0 0 1440 56",preserveAspectRatio:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M0,38 C360,56 1080,0 1440,38 L1440,56 L0,56 Z",fill:"#f0f4f8"})})}),e.jsxs("div",{className:"pb-main",children:[e.jsx("div",{className:"pb-info-strip",children:h.map((y,g)=>e.jsxs("div",{className:"pb-info-chip",style:{animationDelay:`${g*.08}s`},children:[e.jsx("div",{className:"pb-info-chip-icon",style:{background:y.col},children:e.jsx("i",{className:`fa-solid ${y.icon}`})}),e.jsxs("div",{children:[e.jsx("div",{className:"pb-info-chip-val",children:y.val}),e.jsx("div",{className:"pb-info-chip-lbl",children:y.label})]})]},g))}),e.jsxs("div",{className:"pb-viewer-card",children:[e.jsxs("div",{className:"pb-toolbar",children:[e.jsxs("div",{className:"pb-toolbar-left",children:[e.jsx("div",{className:"pb-toolbar-icon",children:e.jsx("i",{className:"fa-solid fa-file-pdf"})}),e.jsxs("div",{children:[e.jsx("div",{className:"pb-toolbar-title",children:"CTC Placement Brochure"}),e.jsx("div",{className:"pb-toolbar-sub",children:"Creative Techno College · Official Document"})]})]}),e.jsxs("div",{className:"pb-toolbar-actions",children:[e.jsxs("button",{className:"pb-tool-btn gold",onClick:u,children:[e.jsx("i",{className:"fa-solid fa-download"})," Download"]}),e.jsxs("button",{className:"pb-tool-btn white",onClick:x,children:[e.jsx("i",{className:"fa-solid fa-arrow-up-right-from-square"})," New Tab"]}),e.jsxs("button",{className:"pb-tool-btn white",onClick:()=>c(y=>!y),children:[e.jsx("i",{className:`fa-solid ${o?"fa-compress":"fa-expand"}`}),o?"Exit":"Expand"]})]})]}),e.jsxs("div",{className:`pb-iframe-wrap${o?" fullscreen-mode":""}`,children:[!r&&e.jsxs("div",{className:"pb-loader",children:[e.jsx("div",{className:"pb-loader-ring"}),e.jsx("div",{className:"pb-loader-text",children:"Loading placement brochure…"})]}),e.jsx("iframe",{src:`${m}#toolbar=1&navpanes=1&scrollbar=1&view=FitH`,title:"CTC Placement Brochure",onLoad:()=>s(!0),style:{opacity:r?1:0,transition:"opacity 0.4s"}})]}),e.jsxs("div",{className:"pb-fullscreen-hint",children:[e.jsxs("div",{className:"pb-hint-text",children:[e.jsx("i",{className:"fa-solid fa-circle-info"}),"Use the toolbar above to download or open in a new tab for the best viewing experience."]}),e.jsxs("button",{className:"pb-tool-btn gold",onClick:u,style:{background:"rgba(12,35,64,0.07)",color:"#0c2340",border:"1.5px solid rgba(12,35,64,0.12)"},children:[e.jsx("i",{className:"fa-solid fa-file-arrow-down"})," Save Brochure"]})]})]}),e.jsxs("div",{className:"pb-mobile-notice",style:{display:"none"},id:"pb-mobile-fallback",children:[e.jsx("i",{className:"fa-solid fa-mobile-screen"}),e.jsxs("div",{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"On mobile?"})," PDF viewing may be limited on some devices. Download the brochure to your device for the best experience."]}),e.jsxs("button",{className:"pb-mobile-dl-btn",onClick:u,children:[e.jsx("i",{className:"fa-solid fa-file-arrow-down"})," Download Placement Brochure"]})]})]}),e.jsx("div",{className:"pb-bottom-grid",children:b.map((y,g)=>e.jsxs("div",{className:"pb-bottom-card",children:[e.jsx("div",{className:"pb-bottom-card-icon",style:{background:y.col},children:e.jsx("i",{className:`fa-solid ${y.icon}`})}),e.jsx("div",{className:"pb-bottom-card-title",children:y.title}),e.jsx("div",{className:"pb-bottom-card-desc",children:y.desc})]},g))})]})]}),e.jsx("script",{dangerouslySetInnerHTML:{__html:`
        (function(){
          var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
          var el = document.getElementById('pb-mobile-fallback');
          if(isMobile && el) el.style.display = 'flex';
        })();
      `}})]})}function D0(){v.useEffect(()=>{const r=document.querySelectorAll(".rv"),s=new IntersectionObserver(o=>o.forEach(c=>{c.isIntersecting&&c.target.classList.add("visible")}),{threshold:.06});return r.forEach(o=>s.observe(o)),()=>s.disconnect()},[])}const Ep={TCS:{bg:"#0a2472",text:"#fff",short:"TCS"},WIPRO:{bg:"#8b2be2",text:"#fff",short:"WIP"},"LTI MINDTREE":{bg:"#00aa44",text:"#fff",short:"LTI"},MINDTREE:{bg:"#00aa44",text:"#fff",short:"MT"},COGNIZENT:{bg:"#0066cc",text:"#fff",short:"COG"},COGNIZANT:{bg:"#0066cc",text:"#fff",short:"COG"},INFOSYS:{bg:"#007acc",text:"#fff",short:"INF"},CAPGEMINI:{bg:"#0070ad",text:"#fff",short:"CAP"},DELOITTE:{bg:"#86bc25",text:"#fff",short:"DEL"},ACCENTURE:{bg:"#a100ff",text:"#fff",short:"ACC"},"TECH MAHINDRA":{bg:"#e31837",text:"#fff",short:"TM"},"L&T FINANCE":{bg:"#e8401c",text:"#fff",short:"L&T"},"BAJAJ ALLIANZ":{bg:"#003087",text:"#fff",short:"BAJ"},QSPIDERS:{bg:"#ff6600",text:"#fff",short:"QSP"},GQT:{bg:"#1a1a2e",text:"#fff",short:"GQT"},MPHASYS:{bg:"#6a1e91",text:"#fff",short:"MPH"},HCL:{bg:"#0d6efd",text:"#fff",short:"HCL"},"BYJU'S":{bg:"#fd4c00",text:"#fff",short:"BYJ"}},xm=r=>{const s=Object.keys(Ep).find(o=>r.toUpperCase().includes(o));return s?Ep[s]:{bg:"#334155",text:"#fff",short:r.slice(0,3).toUpperCase()}},bm=[{name:"Asutosh Sahu",batch:"BCA - 2022 AB",company:"TCS",designation:"Software Trainee"},{name:"Swapnajit Sahoo",batch:"BCA - 2022 AB",company:"TCS",designation:"Software Trainee"},{name:"Anish Ashutosh Nayak",batch:"BCA - 2022 AB",company:"TCS",designation:"Software Trainee"},{name:"Abhilipsha Pradhan",batch:"BCA - 2022 AB",company:"TCS",designation:"Software Trainee"},{name:"Adyasha Sahu",batch:"BCA - 2022 AB",company:"TCS",designation:"Software Trainee"},{name:"Archita Dhar",batch:"BCA - 2022 AB",company:"TCS",designation:"Software Trainee"},{name:"Sania Nayak",batch:"BCA - 2022 AB",company:"TCS",designation:"Software Trainee"},{name:"Bhabani Sankar Dash",batch:"BSc.CS - 2022 AB",company:"TCS",designation:"Software Trainee"},{name:"Namitarani Sahu",batch:"BSc.CS - 2022 AB",company:"TCS",designation:"Software Trainee"},{name:"Vishal Tiwari",batch:"BSc.CS - 2022 AB",company:"TCS",designation:"Software Trainee"},{name:"Sangita Pradhan",batch:"BSc.CS - 2022 AB",company:"TCS",designation:"Software Trainee"},{name:"Laxmipriya Sahu",batch:"BSc.CS - 2022 AB",company:"TCS",designation:"Software Trainee"},{name:"Payal Sahoo",batch:"BSc.CS - 2022 AB",company:"TCS",designation:"Software Trainee"},{name:"Nensi Biswal",batch:"BBA - 2022 AB",company:"TCS",designation:"Software Trainee"},{name:"Rituparna Devi",batch:"BBA - 2022 AB",company:"TCS",designation:"Software Trainee"},{name:"Ipsita Sahoo",batch:"BBA - 2022 AB",company:"TCS",designation:"Software Trainee"},{name:"Sandhyarani Sahu",batch:"BSc.CS - 2022 AB",company:"TCS",designation:"Software Trainee"},{name:"Chandrakanta Muduli",batch:"BCA",company:"WIPRO",designation:"Software Trainee"},{name:"Pritam Kumar Behera",batch:"BCA",company:"WIPRO",designation:"Software Trainee"},{name:"Adyasha Sahu",batch:"BCA",company:"WIPRO",designation:"Software Trainee"},{name:"Anish Ashutosh Nayak",batch:"BCA",company:"WIPRO",designation:"Software Trainee"},{name:"Pritiprangya Behera",batch:"BCA",company:"WIPRO",designation:"Software Trainee"},{name:"Chandan Swain",batch:"BCA",company:"WIPRO",designation:"Software Trainee"},{name:"Abhishek Kumar Rai",batch:"BCA",company:"WIPRO",designation:"Software Trainee"},{name:"Resmasmita Priyadarsini",batch:"BSc.CS (H)",company:"WIPRO",designation:"Software Trainee"},{name:"Monalisha Sahu",batch:"BSc.CS (H)",company:"WIPRO",designation:"Software Trainee"},{name:"Sushree Smita Swain",batch:"BSc.CS (H)",company:"WIPRO",designation:"Software Trainee"},{name:"Sushree Sangita Pradhan",batch:"BSc.CS (H)",company:"WIPRO",designation:"Software Trainee"},{name:"Debasish Pradhan",batch:"BSc.CS (H)",company:"WIPRO",designation:"Software Trainee"},{name:"Karan Kumar Nayak",batch:"BSc.CS (H)",company:"WIPRO",designation:"Software Trainee"},{name:"Payal Pradhan",batch:"BSc.CS (H)",company:"WIPRO",designation:"Software Trainee"},{name:"Chandrakanta Muduli",batch:"BCA - 2022 AB",company:"LTI MINDTREE",designation:"Associate Trainee"},{name:"S.K. Akil",batch:"BCA - 2022 AB",company:"LTI MINDTREE",designation:"Associate Trainee"},{name:"Payal Pradhan",batch:"BSc.CS",company:"LTI MINDTREE",designation:"Associate Trainee"},{name:"Pritiprangya Behera",batch:"BCA - 2022 AB",company:"COGNIZENT",designation:"Associate Trainee"},{name:"Ritwik Sahoo",batch:"BSc.CS",company:"COGNIZENT",designation:"Associate Trainee"},{name:"Seema Behera",batch:"BSc.CS",company:"COGNIZENT",designation:"Associate Trainee"},{name:"Lopita Sahu",batch:"BSc.CS",company:"COGNIZENT",designation:"Associate Trainee"},{name:"Anish Ashutosh Nayak",batch:"BCA - 2022 AB",company:"COGNIZENT",designation:"Associate Trainee"},{name:"Ananta Kishor Swain",batch:"BCA - 2022 AB",company:"COGNIZENT",designation:"Associate Trainee"},{name:"Swapnajit Sahoo",batch:"BCA - 2022 AB",company:"COGNIZENT",designation:"Associate Trainee"}],ym=[{name:"Rahul Kumar Sahu",batch:"BBA",company:"TCS",designation:"BPS"},{name:"Prajolita Dehury",batch:"BBA",company:"TCS",designation:"BPS"},{name:"Tushar Raman Naik",batch:"BBA",company:"TCS",designation:"BPS"},{name:"Ayush Lal",batch:"BBA",company:"TCS",designation:"BPS"},{name:"Shibuprasad Nayak",batch:"BBA",company:"TCS",designation:"BPS"},{name:"Khusi Bilas",batch:"BBA",company:"TCS",designation:"BPS"},{name:"Subrat Sahoo",batch:"BBA",company:"TCS",designation:"BPS"},{name:"Prangya Paramita Sahu",batch:"BBA",company:"TCS",designation:"BPS"},{name:"Punam P. Panda",batch:"BBA",company:"TCS",designation:"BPS"},{name:"Titan Kumar Prusty",batch:"BBA",company:"TCS",designation:"BPS"},{name:"Somesh Sahu",batch:"BBA",company:"TCS",designation:"BPS"},{name:"Biswajit Sahu",batch:"BBA",company:"TCS",designation:"BPS"},{name:"Dhiren Mahanta",batch:"BCA",company:"L&T Finance",designation:"Trainee"},{name:"Matru Prasad Muduli",batch:"BCA",company:"L&T Finance",designation:"Trainee"},{name:"Biswajit Sahu",batch:"BCA",company:"L&T Finance",designation:"Trainee"},{name:"Ashis Parida",batch:"BCA",company:"L&T Finance",designation:"Trainee"},{name:"Suman Sahoo",batch:"BSC-CS",company:"L&T Finance",designation:"Trainee"},{name:"Gyana Ranjan Sahu",batch:"BCA",company:"L&T Finance",designation:"Trainee"},{name:"Samit Kumar Pradhan",batch:"BCA",company:"L&T Finance",designation:"Trainee"},{name:"Ayush Lal",batch:"BBA",company:"L&T Finance",designation:"Trainee"},{name:"Titan Kumar Prusty",batch:"BBA",company:"L&T Finance",designation:"Trainee"},{name:"Abhishek Sahu",batch:"BBA",company:"L&T Finance",designation:"Trainee"},{name:"Tushar Raman Naik",batch:"BBA",company:"L&T Finance",designation:"Trainee"},{name:"Rahul Kumar Sahu",batch:"BBA",company:"L&T Finance",designation:"Trainee"},{name:"Subrat Sahoo",batch:"BBA",company:"L&T Finance",designation:"Trainee"},{name:"Alok Kumar Sahoo",batch:"BBA",company:"L&T Finance",designation:"Trainee"},{name:"Sibu Prashad Nayak",batch:"BBA",company:"L&T Finance",designation:"Trainee"},{name:"Ranjeet Yadav",batch:"BCA",company:"L&T Finance",designation:"Trainee"},{name:"Subhakant Pradhan",batch:"BCA",company:"L&T Finance",designation:"Trainee"},{name:"Priyadarshan Pradhan",batch:"BSC-CS",company:"L&T Finance",designation:"Trainee"},{name:"Priyaranjan Sahoo",batch:"BCA",company:"L&T Finance",designation:"Trainee"},{name:"Rasabihari Sahu",batch:"BCA",company:"L&T Finance",designation:"Trainee"},{name:"Hemananda Sahu",batch:"BCA",company:"L&T Finance",designation:"Trainee"},{name:"Alekha Sahoo",batch:"BCA",company:"L&T Finance",designation:"Trainee"},{name:"Subhendu Kumar Pratap Singh",batch:"BCA",company:"L&T Finance",designation:"Trainee"},{name:"Tusar Raman Naik",batch:"BBA",company:"E-panipuri Kartz",designation:"Trainee"},{name:"Abhishek Sahu",batch:"BBA",company:"E-panipuri Kartz",designation:"Trainee"},{name:"Chidatmika Pradhan",batch:"BBA",company:"E-panipuri Kartz",designation:"Trainee"},{name:"Monalisa Pradhan",batch:"BBA",company:"E-panipuri Kartz",designation:"Trainee"},{name:"Prajolita Dehury",batch:"BBA",company:"E-panipuri Kartz",designation:"Trainee"},{name:"Prangya Paramita Sahu",batch:"BBA",company:"E-panipuri Kartz",designation:"Trainee"},{name:"Punam P. Panda",batch:"BBA",company:"E-panipuri Kartz",designation:"Trainee"},{name:"Somesh Sahu",batch:"BBA",company:"E-panipuri Kartz",designation:"Trainee"},{name:"Subhashree Ranjan Tunga",batch:"BSC-CS",company:"Golden India Transport",designation:"Trainee"},{name:"Punam P. Panda",batch:"BBA",company:"Golden India Transport",designation:"Trainee"},{name:"Abhishek Sahoo",batch:"BBA",company:"Golden India Transport",designation:"Trainee"},{name:"Somesh Sahoo",batch:"BBA",company:"Bajaj Allianz",designation:"Trainee"},{name:"Sibuprasad Nayak",batch:"BBA",company:"Bajaj Allianz",designation:"Trainee"},{name:"Alok Kumar Sahoo",batch:"BBA",company:"Bajaj Allianz",designation:"Trainee"},{name:"Tushar Raman Naik",batch:"BBA",company:"Bajaj Allianz",designation:"Trainee"},{name:"Titan Kumar Prusty",batch:"BBA",company:"Bajaj Allianz",designation:"Trainee"},{name:"Pradyuda Kumar Sahoo",batch:"BBA",company:"Bajaj Allianz",designation:"Trainee"},{name:"Abhjit Jena",batch:"BCA",company:"EDEVLOP",designation:"Trainee"},{name:"Priyadarshan Pradhan",batch:"BSC-CS",company:"EDEVLOP",designation:"Trainee"},{name:"Somesh Sahoo",batch:"BBA",company:"Leran Medix",designation:"Trainee"},{name:"Pradyuda Kumar Sahoo",batch:"BBA",company:"Leran Medix",designation:"Trainee"},{name:"Satyabrata Ojha",batch:"BCA",company:"Edtech",designation:"Trainee"},{name:"Ashish Singh",batch:"BCA",company:"Edtech",designation:"Trainee"},{name:"Sourav Sahoo",batch:"BSC-CS",company:"DELOITTE",designation:"Software Trainee"},{name:"Priyadarshan Pradhan",batch:"BSC-CS",company:"DELOITTE",designation:"Software Trainee"},{name:"Kajal Sahoo",batch:"BSC-CS",company:"DELOITTE",designation:"Software Trainee"},{name:"Subhashree Behera",batch:"BCA",company:"ACCENTURE",designation:"Software Trainee"},{name:"Rojalin Tripathy",batch:"BSC-CS",company:"ACCENTURE",designation:"Software Trainee"},{name:"Diptimayee Sahoo",batch:"BSC-CS",company:"TCS",designation:"Software Trainee"},{name:"Gyana Ranjan Nath",batch:"BCA",company:"WIPRO",designation:"Software Trainee"},{name:"Abhijit Jena",batch:"BCA",company:"WIPRO",designation:"Software Trainee"}],vm=[{name:"Itishree Nath",batch:"BCA",company:"WIPRO",designation:"Software Trainee"},{name:"Gaurav Pathak",batch:"BCA",company:"WIPRO",designation:"Software Trainee"},{name:"Adysha Rout",batch:"BCA",company:"WIPRO",designation:"Software Trainee"},{name:"Roshan Das",batch:"BCA",company:"WIPRO",designation:"Software Trainee"},{name:"Jitendriya Jena",batch:"BCA",company:"WIPRO",designation:"Software Trainee"},{name:"Sachin Kumar Dhal",batch:"BCA",company:"WIPRO",designation:"Software Trainee"},{name:"Purusottam Barik",batch:"BCA",company:"WIPRO",designation:"Software Trainee"},{name:"Bednath Sahu",batch:"BCA",company:"WIPRO",designation:"Software Trainee"},{name:"Suraj Kumar Sahoo",batch:"BCA",company:"WIPRO",designation:"Software Trainee"},{name:"Laxminarayan Bisoi",batch:"BSC-CS",company:"WIPRO",designation:"Software Trainee"},{name:"Asit Kumar Biswal",batch:"BSC-CS",company:"WIPRO",designation:"Software Trainee"},{name:"Dharitri Sahoo",batch:"BSC-CS",company:"WIPRO",designation:"Software Trainee"},{name:"Netaji Bai",batch:"BSC-CS",company:"WIPRO",designation:"Software Trainee"},{name:"Rakesh Senapati",batch:"BSC-CS",company:"WIPRO",designation:"Software Trainee"},{name:"Kalpana Naik",batch:"BSC-CS",company:"GQT",designation:"Full Stack Developer"},{name:"Nibedita Sahoo",batch:"BSC-CS",company:"GQT",designation:"Full Stack Developer"},{name:"Sonalee Singh",batch:"BCA",company:"GQT",designation:"Full Stack Developer"},{name:"Gaurav Pathak",batch:"BCA",company:"GQT",designation:"Full Stack Developer"},{name:"Rasmita Sahoo",batch:"BSC-CS",company:"GQT",designation:"Full Stack Developer"},{name:"Shrutisweta Panda",batch:"BSC-CS",company:"GQT",designation:"Full Stack Developer"},{name:"Suraj Naik",batch:"BBA",company:"CREDENTS SOFT",designation:"Intern"},{name:"Ananya Singh",batch:"BBA",company:"CREDENTS SOFT",designation:"Intern"},{name:"Subhranshu Sahu",batch:"BBA",company:"CREDENTS SOFT",designation:"Intern"},{name:"Subrat Kumar Pradhan",batch:"BBA",company:"CREDENTS SOFT",designation:"Intern"},{name:"Jogita Jangyaseni Pradhan",batch:"BBA",company:"CREDENTS SOFT",designation:"Intern"},{name:"Janmejaya Behera",batch:"BBA",company:"CREDENTS SOFT",designation:"Intern"},{name:"Rohan Kumar Sahoo",batch:"BBA",company:"CREDENTS SOFT",designation:"Intern"},{name:"Kusumanjali Pradhan",batch:"BBA",company:"KAMALJIT ENTERPRISES",designation:"Marketing"},{name:"Jogita Jangyaseni Pradhan",batch:"BBA",company:"KAMALJIT ENTERPRISES",designation:"Marketing"},{name:"Janmejaya Behera",batch:"BBA",company:"KAMALJIT ENTERPRISES",designation:"Marketing"},{name:"Roshan Das",batch:"BCA",company:"QSPIDERS",designation:"Trainee"},{name:"Itishree Nath",batch:"BCA",company:"QSPIDERS",designation:"Trainee"},{name:"Rakesh Senapati",batch:"BSC-CS",company:"QSPIDERS",designation:"Trainee"},{name:"Baishanavi Rout",batch:"BSC-CS",company:"QSPIDERS",designation:"Trainee"},{name:"Laxminarayan Bisoi",batch:"BSC-CS",company:"QSPIDERS",designation:"Trainee"},{name:"Adysha Rout",batch:"BCA",company:"QSPIDERS",designation:"Trainee"},{name:"Sandeep Samal",batch:"BSC-CS",company:"QSPIDERS",designation:"Trainee"},{name:"Kalpana Naik",batch:"BSC-CS",company:"QSPIDERS",designation:"Trainee"},{name:"Padmalaya Sahu",batch:"BCA",company:"QSPIDERS",designation:"Trainee"},{name:"Sonalee Singh",batch:"BCA",company:"QSPIDERS",designation:"Trainee"},{name:"Dharitri Sahoo",batch:"BSC-CS",company:"QSPIDERS",designation:"Trainee"},{name:"Subhasmita Singh",batch:"BCA",company:"QSPIDERS",designation:"Trainee"},{name:"Subrat Kumar Sahu",batch:"BCA",company:"QSPIDERS",designation:"Trainee"},{name:"Abhijit Bhuyan",batch:"BSC-CS",company:"QSPIDERS",designation:"Trainee"},{name:"Netaji Bai",batch:"BSC-CS",company:"QSPIDERS",designation:"Trainee"},{name:"Rasmita Sahoo",batch:"BSC-CS",company:"QSPIDERS",designation:"Trainee"},{name:"Arjyakumari Nirlipta",batch:"BSC-CS",company:"QSPIDERS",designation:"Trainee"},{name:"Sruti Sweta Panda",batch:"BSC-CS",company:"QSPIDERS",designation:"Trainee"},{name:"Deepa Sahu",batch:"BSC-CS",company:"QSPIDERS",designation:"Trainee"},{name:"Madhusmita Rout",batch:"BSC-CS",company:"QSPIDERS",designation:"Trainee"},{name:"Sweet Kumari Muni",batch:"BCA",company:"QSPIDERS",designation:"Trainee"},{name:"Chinmayee Sahoo",batch:"BCA",company:"QSPIDERS",designation:"Trainee"},{name:"Satyajit Bhuyan",batch:"BSC-CS",company:"QSPIDERS",designation:"Trainee"},{name:"Purnima Sahoo",batch:"BCA",company:"QSPIDERS",designation:"Trainee"},{name:"Akash Kumar Behera",batch:"BBA",company:"TCS",designation:"BPS"},{name:"Jogita Jangyaseni Pradhan",batch:"BBA",company:"TCS",designation:"BPS"},{name:"Amisha Prasad",batch:"BBA",company:"TCS",designation:"BPS"},{name:"Subrat Kumar Sahu",batch:"BCA",company:"TEACHNOOK",designation:"Academic Counsellor"},{name:"Priyadarshini Garnaik",batch:"BSC-CS",company:"CREDENTS SOFT",designation:"Intern"},{name:"Satyajit Bhuyan",batch:"BSC-CS",company:"TECH MAHINDRA",designation:"BPS"},{name:"Abhijit Bhuyan",batch:"BSC-CS",company:"TECH MAHINDRA",designation:"BPS"},{name:"Akash Kumar Behera",batch:"BBA",company:"TECH MAHINDRA",designation:"BPS"},{name:"Rohan Kumar Sahoo",batch:"BBA",company:"BYJU'S",designation:"HR Role"},{name:"Rasmita Sahoo",batch:"BSC-CS",company:"TECH MAHINDRA",designation:"BPS"},{name:"Janmejaya Behera",batch:"BBA",company:"BYJU'S",designation:"Marketing"},{name:"Jogita Jangyaseni Pradhan",batch:"BBA",company:"BYJU'S",designation:"Marketing"},{name:"Ananya Singh",batch:"BBA",company:"BYJU'S",designation:"Marketing"},{name:"Barsaranee Barik",batch:"BCA",company:"EXCELERATE",designation:"Data Analyst"},{name:"Adysha Rout",batch:"BCA",company:"TECH MAHINDRA",designation:"BPS"},{name:"Janmejaya Behera",batch:"BBA",company:"TECH MAHINDRA",designation:"BPS"},{name:"Adysha Rout",batch:"BCA",company:"CAPGEMINI",designation:"Trainee"},{name:"Abhijit Jena",batch:"BCA",company:"WIPRO",designation:"Software Trainee"}],jm=[{name:"Richa Singh",batch:"BCA (2019-22)",company:"DELOITTE",designation:""},{name:"Snehlata Pandey",batch:"BCA (2019-22)",company:"DELOITTE",designation:""},{name:"Ankita Pradhan",batch:"BCA (2019-22)",company:"DELOITTE",designation:""},{name:"Debasrita Sahu",batch:"BSC (2019-22)",company:"DELOITTE",designation:""},{name:"Ratikanta Pradhan",batch:"BCA (2019-22)",company:"WIPRO",designation:""},{name:"Snehlata Pandey",batch:"BCA (2019-22)",company:"WIPRO",designation:""},{name:"Isha Agarwal",batch:"BCA (2019-22)",company:"WIPRO",designation:""},{name:"Rani Sahu",batch:"BSC (2019-22)",company:"WIPRO",designation:""},{name:"Ankita Pradhan",batch:"BCA (2019-22)",company:"WIPRO",designation:""},{name:"Answesha Sahu",batch:"BSC (2019-22)",company:"WIPRO",designation:""},{name:"Debismita Sahu",batch:"BSC (2019-22)",company:"WIPRO",designation:""},{name:"Tejaswini Pradhan",batch:"BSC (2019-22)",company:"WIPRO",designation:""},{name:"Puja Behera",batch:"BSC (2019-22)",company:"WIPRO",designation:""},{name:"Subhadra Behera",batch:"BSC (2019-22)",company:"WIPRO",designation:""},{name:"Manasmita Sahoo",batch:"BSC (2019-22)",company:"WIPRO",designation:""},{name:"Jyotirmay Prasad",batch:"BCA (2019-22)",company:"WIPRO",designation:""},{name:"S. Satya Sagar",batch:"BCA (2019-22)",company:"WIPRO",designation:""},{name:"Richa Singh",batch:"BCA (2019-22)",company:"WIPRO",designation:""},{name:"Puja Behera",batch:"BSC (2019-22)",company:"LTI",designation:""},{name:"Isha Agarwal",batch:"BCA (2019-22)",company:"LTI",designation:""},{name:"Snehlata Pandey",batch:"BCA (2019-22)",company:"LTI",designation:""},{name:"Jyotirmay Prasad",batch:"BCA (2019-22)",company:"ACCENTURE",designation:""},{name:"Swadesh Behera",batch:"BSC (2019-22)",company:"ACCENTURE",designation:""},{name:"Pratibha Behera",batch:"BCA (2019-22)",company:"MPHASYS",designation:""},{name:"Isha Agarwal",batch:"BCA (2019-22)",company:"MPHASYS",designation:""},{name:"Richa Singh",batch:"BCA (2019-22)",company:"MPHASYS",designation:""},{name:"Snehlata Pandey",batch:"BCA (2019-22)",company:"CAPGEMINI",designation:""},{name:"Smrutirekha Sahu",batch:"BSC (2019-22)",company:"CAPGEMINI",designation:""},{name:"Sratoswini Parida",batch:"BCA (2019-22)",company:"CAPGEMINI",designation:""},{name:"Swadesh Behera",batch:"BSC (2019-22)",company:"CAPGEMINI",designation:""},{name:"Ankita Pani",batch:"BCA (2019-22)",company:"CAPGEMINI",designation:""},{name:"Richa Singh",batch:"BCA (2019-22)",company:"CAPGEMINI",designation:""},{name:"Tejaswini Pradhan",batch:"BSC (2019-22)",company:"CAPGEMINI",designation:""},{name:"Isha Agarwal",batch:"BCA (2019-22)",company:"CAPGEMINI",designation:""},{name:"Rituparna Das",batch:"BBA (2019-22)",company:"O2 SAVER",designation:""},{name:"Iqra Asad",batch:"BBA (2019-22)",company:"O2 SAVER",designation:""},{name:"Vaibhab Sharma",batch:"BBA (2019-22)",company:"O2 SAVER",designation:""},{name:"Sonali Seth",batch:"BSC (2019-22)",company:"O2 SAVER",designation:""},{name:"Smrutirekha Sahu",batch:"BSC (2019-22)",company:"O2 SAVER",designation:""},{name:"Baby Pradhan",batch:"BSC (2019-22)",company:"O2 SAVER",designation:""},{name:"Sucharita Sahu",batch:"BSC (2019-22)",company:"O2 SAVER",designation:""},{name:"Puja Behera",batch:"BSC (2019-22)",company:"O2 SAVER",designation:""},{name:"Tejaswini Pradhan",batch:"BSC (2019-22)",company:"O2 SAVER",designation:""},{name:"Anwesha Sahu",batch:"BSC (2019-22)",company:"O2 SAVER",designation:""},{name:"Satybrata Pradhan",batch:"BCA (2019-22)",company:"QSPIDERS",designation:""},{name:"Subham Parida",batch:"BCA (2019-22)",company:"QSPIDERS",designation:""},{name:"Jyotirmay Prasad",batch:"BCA (2019-22)",company:"QSPIDERS",designation:""},{name:"Ankita Pani",batch:"BCA (2019-22)",company:"QSPIDERS",designation:""},{name:"Isha Agarwal",batch:"BCA (2019-22)",company:"QSPIDERS",designation:""},{name:"Sonali Seth",batch:"BSC (2019-22)",company:"QSPIDERS",designation:""},{name:"Swadesh Behera",batch:"BSC (2019-22)",company:"QSPIDERS",designation:""},{name:"Smrutirekha Sahu",batch:"BSC (2019-22)",company:"QSPIDERS",designation:""},{name:"Anwesha Sahu",batch:"BSC (2019-22)",company:"QSPIDERS",designation:""},{name:"Subhasmita Sahu",batch:"BSC (2019-22)",company:"QSPIDERS",designation:""},{name:"Tejaswini Pradhan",batch:"BSC (2019-22)",company:"QSPIDERS",designation:""},{name:"Subham Parida",batch:"BCA (2019-22)",company:"INFOSYS",designation:""},{name:"Biswabijan Mohanty",batch:"BSC (2019-22)",company:"INFOSYS",designation:""},{name:"Rani Sahu",batch:"BSC (2019-22)",company:"INFOSYS",designation:""},{name:"Pratibha Behera",batch:"BCA (2019-22)",company:"INFOSYS",designation:""},{name:"Tejaswini Pradhan",batch:"BSC (2019-22)",company:"INFOSYS",designation:""}],Sm=[{name:"Ashutosh Kar",batch:"BCA-2021",company:"WIPRO, TCS, AT&T, Airtel, Publis Sapient, Mind Tree, Tech Mahindra, L&T",designation:"8 Offers"},{name:"Purushotam Swain",batch:"BCA-2021",company:"WIPRO, TCS, Infosys, CISCO, Accenture, HCL",designation:"6 Offers"},{name:"Vikash Tiwary",batch:"BCA-2021",company:"WIPRO, TCS, Edusys",designation:"3 Offers"},{name:"Swetalin Nath",batch:"BCA-2021",company:"WIPRO, Cognizent, Infosys, Mindtree",designation:"4 Offers"},{name:"Abhisek Jena",batch:"BCA-2021",company:"SNAPDEAL, Mindtree",designation:"2 Offers"},{name:"Ayush Tripathy",batch:"BCA-2021",company:"WIPRO",designation:"1 Offer"},{name:"Sagar Pradhan",batch:"BCA-2021",company:"Mindtree",designation:"1 Offer"},{name:"Rajesh Sahu",batch:"BCA-2021",company:"HCL",designation:"1 Offer"},{name:"Nasreen Qureshi",batch:"BSC-2021",company:"ICICI, Tech Mahindra, TCS, Mindtree",designation:"4 Offers"},{name:"Biswabhusan Das",batch:"BSC-2021",company:"Byju's, Upgrade",designation:"2 Offers"},{name:"Swayamprava Das",batch:"BSC-2021",company:"DXC, TCS",designation:"2 Offers"},{name:"Sunil Das",batch:"BCA-2020",company:"WIPRO",designation:"1 Offer"},{name:"Amit Kumar Mahanta",batch:"BCA-2020",company:"Tech Mahindra",designation:"1 Offer"},{name:"Krishnakanta Behera",batch:"BCA-2021",company:"Byju's",designation:"1 Offer"},{name:"Swagatika Pradhan",batch:"BCA-2021",company:"TCS",designation:"1 Offer"},{name:"Saswat Sahu",batch:"BCA-2021",company:"Mindtree",designation:"1 Offer"},{name:"Komal Gupta",batch:"BCA-2021",company:"Mindtree",designation:"1 Offer"},{name:"Anmol Kumar Mishara Sharma",batch:"BSC-2021",company:"COGNIZANT",designation:"1 Offer"}],Rp=[{id:"2025",label:"2025",data:bm,color:"#0c2340"},{id:"2024",label:"2024",data:ym,color:"#1a3a6b"},{id:"2023",label:"2023",data:vm,color:"#2d5a8e"},{id:"2022",label:"2022 Batch",data:jm,color:"#3d7ab5"},{id:"2021",label:"2020 & 2021",data:Sm,color:"#5599cc"}],Mo=12;function W0(){const r=v.useRef(null),s=v.useRef(null);return v.useEffect(()=>{const o=()=>{var p;const c=window.Chart;if(!c)return;s.current&&s.current.destroy();const m=(p=r.current)==null?void 0:p.getContext("2d");m&&(s.current=new c(m,{type:"bar",data:{labels:["WIPRO","TECH MAHINDRA","TCS","MINDTREE/LTI","INFOSYS","COGNIZANT","DELOITTE","ACCENTURE","CAPGEMINI","HCL","BYJU'S"],datasets:[{label:"2020",data:[10,2,8,1,2,0,1,1,2,1,1],backgroundColor:"rgba(12,35,64,0.85)"},{label:"2021",data:[8,1,7,2,1,0,2,1,1,0,1],backgroundColor:"rgba(26,58,107,0.85)"},{label:"2022",data:[12,2,9,1,2,1,1,1,3,0,1],backgroundColor:"rgba(45,90,142,0.85)"},{label:"2023",data:[15,3,10,2,1,0,1,1,1,0,2],backgroundColor:"rgba(61,122,181,0.85)"},{label:"2024",data:[8,1,4,1,1,0,1,1,1,0,1],backgroundColor:"rgba(85,153,204,0.85)"},{label:"2025",data:[5,1,2,0,0,1,1,0,1,0,0],backgroundColor:"rgba(130,190,230,0.85)"}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!0,position:"top",labels:{font:{family:"Plus Jakarta Sans",size:12},color:"#0c2340"}}},scales:{x:{stacked:!0,ticks:{font:{size:11},color:"#334155"},grid:{display:!1}},y:{stacked:!0,ticks:{font:{size:11},color:"#334155"},grid:{color:"rgba(0,0,0,0.05)"}}}}}))};if(window.Chart)o();else{const c=document.createElement("script");c.src="https://cdn.jsdelivr.net/npm/chart.js",c.async=!0,c.onload=o,document.body.appendChild(c)}return()=>{s.current&&s.current.destroy()}},[]),e.jsx("div",{style:{height:380,position:"relative",width:"100%"},children:e.jsx("canvas",{ref:r})})}function L0({student:r,idx:s}){const o=xm(r.company),c=r.name.split(" ").map(m=>m[0]).join("").slice(0,2).toUpperCase();return e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:14,padding:"14px 18px",background:s%2===0?"#fff":"#f8fafc",borderBottom:"1px solid rgba(10,22,40,0.06)",transition:"background 0.2s"},onMouseEnter:m=>m.currentTarget.style.background="#f0f6ff",onMouseLeave:m=>m.currentTarget.style.background=s%2===0?"#fff":"#f8fafc",children:[e.jsx("div",{style:{width:38,height:38,borderRadius:"50%",flexShrink:0,background:"linear-gradient(135deg,#0c2340,#1a3a6b)",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"0.72rem",fontWeight:800,color:"#ffcc00"},children:c}),e.jsxs("div",{style:{flex:1,minWidth:0},children:[e.jsx("div",{style:{fontFamily:"'Plus Jakarta Sans',sans-serif",fontWeight:700,fontSize:"0.85rem",color:"#0c2340",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:r.name}),e.jsx("div",{style:{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"0.7rem",color:"#94a3b8",fontWeight:600,marginTop:2},children:r.batch})]}),e.jsx("div",{style:{background:o.bg,color:o.text,padding:"5px 12px",borderRadius:20,fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"0.7rem",fontWeight:800,letterSpacing:"0.3px",flexShrink:0,maxWidth:160,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",textAlign:"center"},children:r.company}),r.designation&&e.jsx("div",{style:{background:"#f0f6ff",border:"1.5px solid rgba(12,35,64,0.12)",color:"#0c2340",padding:"4px 10px",borderRadius:8,fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"0.68rem",fontWeight:700,flexShrink:0,display:"none"},className:"ps-desg",children:r.designation})]})}function H0({data:r,year:s}){const[o,c]=v.useState(""),[m,p]=v.useState("ALL"),[u,x]=v.useState("ALL"),[h,b]=v.useState(1),[y,g]=v.useState("list"),T=v.useMemo(()=>["ALL",...new Set(r.map(I=>I.company))].sort(),[r]),E=v.useMemo(()=>["ALL",...new Set(r.map(I=>I.batch))].sort(),[r]),F=v.useMemo(()=>r.filter(I=>{const U=o.toLowerCase(),q=!U||I.name.toLowerCase().includes(U)||I.company.toLowerCase().includes(U)||I.batch.toLowerCase().includes(U),ie=m==="ALL"||I.company===m,me=u==="ALL"||I.batch===u;return q&&ie&&me}),[r,o,m,u]),R=Math.ceil(F.length/Mo),z=F.slice((h-1)*Mo,h*Mo);v.useEffect(()=>{b(1)},[o,m,u]);const P=v.useMemo(()=>{const I={};return F.forEach(U=>{I[U.company]=(I[U.company]||0)+1}),Object.entries(I).sort((U,q)=>q[1]-U[1]).slice(0,6)},[F]);return e.jsxs("div",{children:[e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(150px,1fr))",gap:14,marginBottom:24},children:[{label:"Total Placed",val:r.length,icon:"fa-users"},{label:"Companies",val:new Set(r.map(I=>I.company)).size,icon:"fa-building"},{label:"Batches",val:new Set(r.map(I=>I.batch)).size,icon:"fa-graduation-cap"},{label:"Showing",val:F.length,icon:"fa-filter"}].map((I,U)=>e.jsxs("div",{style:{background:U===0?"linear-gradient(135deg,#0c2340,#1a3a6b)":"#fff",border:"1px solid rgba(10,22,40,0.07)",borderRadius:14,padding:"16px 18px",boxShadow:"0 2px 12px rgba(10,22,40,0.07)"},children:[e.jsx("div",{style:{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"1.5rem",fontWeight:900,color:U===0?"#ffcc00":"#0c2340",lineHeight:1},children:I.val}),e.jsx("div",{style:{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"0.7rem",fontWeight:600,color:U===0?"rgba(255,255,255,0.6)":"#4a6080",marginTop:4},children:I.label})]},U))}),e.jsxs("div",{style:{display:"flex",gap:10,marginBottom:16,flexWrap:"wrap"},children:[e.jsxs("div",{style:{flex:"1 1 200px",display:"flex",alignItems:"center",gap:10,background:"#fff",border:"1.5px solid rgba(10,22,40,0.1)",borderRadius:12,padding:"0 14px"},children:[e.jsx("i",{className:"fa-solid fa-magnifying-glass",style:{color:"#94a3b8",fontSize:"0.85rem"}}),e.jsx("input",{value:o,onChange:I=>c(I.target.value),placeholder:"Search name, company, batch…",style:{flex:1,border:"none",outline:"none",padding:"12px 0",fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"0.85rem",background:"transparent",color:"#0c2340"}}),o&&e.jsx("button",{onClick:()=>c(""),style:{background:"none",border:"none",cursor:"pointer",color:"#94a3b8",fontSize:"0.75rem"},children:"✕"})]}),e.jsx("select",{value:m,onChange:I=>p(I.target.value),style:{flex:"0 0 auto",border:"1.5px solid rgba(10,22,40,0.1)",borderRadius:12,padding:"10px 14px",fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"0.82rem",color:"#0c2340",background:"#fff",outline:"none",cursor:"pointer"},children:T.map(I=>e.jsx("option",{value:I,children:I==="ALL"?"🏢 All Companies":I},I))}),e.jsx("select",{value:u,onChange:I=>x(I.target.value),style:{flex:"0 0 auto",border:"1.5px solid rgba(10,22,40,0.1)",borderRadius:12,padding:"10px 14px",fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"0.82rem",color:"#0c2340",background:"#fff",outline:"none",cursor:"pointer"},children:E.map(I=>e.jsx("option",{value:I,children:I==="ALL"?"🎓 All Batches":I},I))})]}),P.length>0&&e.jsx("div",{style:{display:"flex",gap:8,flexWrap:"wrap",marginBottom:16},children:P.map(([I,U])=>{const q=xm(I);return e.jsxs("button",{onClick:()=>p(m===I?"ALL":I),style:{background:m===I?q.bg:`${q.bg}18`,color:m===I?q.text:q.bg,border:`1.5px solid ${q.bg}40`,borderRadius:20,padding:"5px 12px",fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"0.72rem",fontWeight:800,cursor:"pointer",display:"flex",alignItems:"center",gap:6,transition:"all 0.2s"},children:[I," ",e.jsxs("span",{style:{opacity:.75},children:["(",U,")"]})]},I)})}),e.jsxs("div",{style:{background:"#fff",borderRadius:16,border:"1.5px solid rgba(10,22,40,0.08)",overflow:"hidden",boxShadow:"0 4px 20px rgba(10,22,40,0.07)"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:14,padding:"12px 18px",background:"linear-gradient(135deg,#0c2340,#1a3a6b)"},children:[e.jsx("div",{style:{width:38,flexShrink:0}}),e.jsx("div",{style:{flex:1,fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"0.72rem",fontWeight:800,color:"#ffcc00",textTransform:"uppercase",letterSpacing:"0.8px"},children:"Student Name · Batch"}),e.jsx("div",{style:{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"0.72rem",fontWeight:800,color:"#ffcc00",textTransform:"uppercase",letterSpacing:"0.8px"},children:"Company"})]}),z.length===0?e.jsxs("div",{style:{padding:"48px 20px",textAlign:"center"},children:[e.jsx("i",{className:"fa-solid fa-search",style:{fontSize:"2rem",color:"#cbd5e1",display:"block",marginBottom:12}}),e.jsx("div",{style:{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"0.9rem",color:"#94a3b8",fontWeight:600},children:"No results found"})]}):z.map((I,U)=>e.jsx(L0,{student:I,idx:U},U))]}),R>1&&e.jsxs("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",gap:8,marginTop:20,flexWrap:"wrap"},children:[e.jsx("button",{onClick:()=>b(I=>Math.max(1,I-1)),disabled:h===1,style:{background:h===1?"#f0f4f8":"#0c2340",color:h===1?"#94a3b8":"#ffcc00",border:"none",borderRadius:10,padding:"8px 16px",fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"0.8rem",fontWeight:700,cursor:h===1?"default":"pointer",transition:"all 0.2s"},children:"← Prev"}),Array.from({length:Math.min(R,7)},(I,U)=>{let q;return R<=7||h<=4?q=U+1:h>=R-3?q=R-6+U:q=h-3+U,e.jsx("button",{onClick:()=>b(q),style:{background:h===q?"#0c2340":"#fff",color:h===q?"#ffcc00":"#0c2340",border:`1.5px solid ${h===q?"#0c2340":"rgba(12,35,64,0.15)"}`,borderRadius:10,padding:"8px 14px",minWidth:38,fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"0.8rem",fontWeight:700,cursor:"pointer",transition:"all 0.2s"},children:q},q)}),e.jsx("button",{onClick:()=>b(I=>Math.min(R,I+1)),disabled:h===R,style:{background:h===R?"#f0f4f8":"#0c2340",color:h===R?"#94a3b8":"#ffcc00",border:"none",borderRadius:10,padding:"8px 16px",fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"0.8rem",fontWeight:700,cursor:h===R?"default":"pointer"},children:"Next →"}),e.jsxs("span",{style:{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"0.75rem",color:"#94a3b8",fontWeight:600},children:["Page ",h," of ",R," · ",F.length," records"]})]})]})}function Ip(){D0();const[r,s]=v.useState("2025"),o=Rp.find(x=>x.id===r),c=v.useRef(null),m=x=>{s(x),setTimeout(()=>{var h;return(h=c.current)==null?void 0:h.scrollIntoView({behavior:"smooth",block:"start"})},80)},p=`
    @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap');
    @keyframes psIn{from{opacity:0;transform:translateY(32px);}to{opacity:1;transform:none;}}
    @keyframes psShimmer{0%{transform:translateX(-100%);}100%{transform:translateX(200%);}}
    .rv{opacity:0;transform:translateY(24px);transition:opacity 0.5s ease,transform 0.5s ease;}
    .rv.visible{opacity:1;transform:none;}
    *{box-sizing:border-box;}
    body{margin:0;font-family:'Plus Jakarta Sans',sans-serif;}
    .ps-page{background:#f0f4f8;min-height:100vh;}
    .ps-hero{
      background:linear-gradient(165deg,#020c1b 0%,#0c2340 40%,#112d52 70%,#06101e 100%);
      min-height:320px;display:flex;flex-direction:column;justify-content:flex-end;
      position:relative;overflow:hidden;
    }
    .ps-hero-content{position:relative;z-index:2;padding:68px 5% 52px;}
    .ps-hero-badge{display:inline-flex;align-items:center;gap:8px;background:rgba(255,204,0,0.1);border:1px solid rgba(255,204,0,0.28);color:#ffcc00;font-size:0.68rem;font-weight:800;padding:6px 16px;border-radius:30px;letter-spacing:2.5px;text-transform:uppercase;margin-bottom:18px;}
    .ps-hero-h1{font-family:'Plus Jakarta Sans',sans-serif;font-size:clamp(2rem,5vw,3.4rem);font-weight:900;color:#fff;line-height:1.08;letter-spacing:-1.5px;margin-bottom:14px;}
    .ps-hero-h1 em{font-style:normal;color:#ffcc00;}
    .ps-hero-sub{color:rgba(255,255,255,0.42);font-size:0.88rem;line-height:1.75;max-width:520px;margin-bottom:28px;}
    .ps-wave{height:56px;margin-top:-1px;}
    .ps-wave svg{width:100%;height:100%;display:block;}
    .ps-main{max-width:1200px;margin:0 auto;padding:0 4% 80px;}
    .ps-chart-card{background:#fff;border-radius:22px;padding:32px;box-shadow:0 4px 24px rgba(10,22,40,0.09);border:1px solid rgba(10,22,40,0.06);margin-bottom:36px;}
    .ps-chart-title{font-family:'Plus Jakarta Sans',sans-serif;font-size:1.1rem;font-weight:900;color:#0c2340;margin-bottom:4px;}
    .ps-chart-sub{font-size:0.78rem;color:#4a6080;font-weight:500;margin-bottom:24px;}
    .ps-year-tabs{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:28px;}
    .ps-year-tab{
      padding:10px 20px;border-radius:12px;border:1.5px solid rgba(12,35,64,0.12);
      background:#fff;color:#0c2340;font-family:'Plus Jakarta Sans',sans-serif;
      font-size:0.82rem;font-weight:800;cursor:pointer;transition:all 0.25s;
    }
    .ps-year-tab.active{background:#0c2340;color:#ffcc00;border-color:#0c2340;box-shadow:0 6px 20px rgba(12,35,64,0.28);}
    .ps-year-tab:not(.active):hover{background:#f0f4f8;}
    .ps-table-card{background:#fff;border-radius:22px;overflow:hidden;box-shadow:0 4px 24px rgba(10,22,40,0.09);border:1px solid rgba(10,22,40,0.06);}
    .ps-table-header{background:linear-gradient(135deg,#0c2340,#1a3a6b);padding:24px 28px;position:relative;overflow:hidden;}
    .ps-table-header::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse at 80% 0%,rgba(255,204,0,0.12) 0%,transparent 55%);pointer-events:none;}
    .ps-table-title{font-family:'Plus Jakarta Sans',sans-serif;font-size:1.2rem;font-weight:900;color:#fff;position:relative;z-index:1;}
    .ps-table-sub{font-size:0.78rem;color:rgba(255,255,255,0.45);position:relative;z-index:1;margin-top:3px;}
    .ps-table-body{padding:24px;}
    @media(max-width:600px){
      .ps-hero-content{padding:48px 4% 36px;}
      .ps-hero-h1{font-size:2rem;letter-spacing:-1px;}
      .ps-year-tab{padding:8px 14px;font-size:0.76rem;}
      .ps-table-body{padding:16px 12px;}
    }
  `,u=bm.length+ym.length+vm.length+jm.length+Sm.length;return e.jsxs(e.Fragment,{children:[e.jsx(Na,{title:"Placement Record 2025 – 1500+ Placed | Creative Techno College Angul",description:"CTC Angul placement statistics 2020–2025. 1500+ students placed in TCS, Wipro, LTI Mindtree, Cognizant, Infosys, Capgemini, Deloitte, Accenture and more. Highest package ₹4.5 LPA. 95% placement rate.",keywords:"CTC angul placement, creative techno college placement, placement record angul college, best placement college angul, TCS placement angul, Wipro placement angul",canonical:"/placement/statistics"}),e.jsx("style",{children:p}),e.jsxs("div",{className:"ps-page",children:[e.jsx("div",{className:"ps-hero",children:e.jsxs("div",{className:"ps-hero-content",children:[e.jsxs("div",{className:"ps-hero-badge",children:[e.jsx("i",{className:"fa-solid fa-chart-bar"}),"Placement Statistics · 2020–2025"]}),e.jsxs("h1",{className:"ps-hero-h1",children:["Our ",e.jsx("em",{children:"Placement"}),e.jsx("br",{}),"Success Story"]}),e.jsxs("p",{className:"ps-hero-sub",children:["Complete year-wise placement data for Creative Techno College — ",u,"+ students placed in leading companies across India."]}),e.jsx("div",{style:{display:"flex",gap:20,flexWrap:"wrap"},children:[{val:`${u}+`,label:"Total Placements"},{val:"20+",label:"Companies"},{val:"6",label:"Years Data"},{val:"100%",label:"Commitment"}].map((x,h)=>e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx("div",{style:{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"1.6rem",fontWeight:900,color:"#ffcc00",lineHeight:1},children:x.val}),e.jsx("div",{style:{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"0.68rem",color:"rgba(255,255,255,0.4)",fontWeight:600,marginTop:3,textTransform:"uppercase",letterSpacing:"0.5px"},children:x.label})]},h))})]})}),e.jsx("div",{className:"ps-wave",children:e.jsx("svg",{viewBox:"0 0 1440 56",preserveAspectRatio:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M0,38 C360,56 1080,0 1440,38 L1440,56 L0,56 Z",fill:"#f0f4f8"})})}),e.jsxs("div",{className:"ps-main",children:[e.jsxs("div",{className:"ps-chart-card rv",children:[e.jsx("div",{className:"ps-chart-title",children:"Year-wise Hiring Distribution (2020–2025)"}),e.jsx("div",{className:"ps-chart-sub",children:"Stacked bar chart showing hiring counts by company across all years"}),e.jsx(W0,{})]}),e.jsx("div",{className:"ps-year-tabs rv",style:{transitionDelay:"0.1s"},children:Rp.map(x=>e.jsxs("button",{className:`ps-year-tab${r===x.id?" active":""}`,onClick:()=>m(x.id),children:[x.label," ",e.jsxs("span",{style:{opacity:.6,fontSize:"0.75em",marginLeft:4},children:["(",x.data.length,")"]})]},x.id))}),e.jsxs("div",{className:"ps-table-card rv",style:{transitionDelay:"0.15s"},ref:c,children:[e.jsxs("div",{className:"ps-table-header",children:[e.jsxs("div",{className:"ps-table-title",children:["Placement Report — ",o==null?void 0:o.label]}),e.jsxs("div",{className:"ps-table-sub",children:[o==null?void 0:o.data.length," records · Searchable & filterable by company and batch"]})]}),e.jsx("div",{className:"ps-table-body",children:o&&e.jsx(H0,{data:o.data,year:r})})]})]})]})]})}const Pp={"MISSION 1":["MONALISA BEHERA","YASHITA SAHU","SUPRIYA MOHANTY","ELIN PATTANAYAK","DEBIPRASAD PRADHAN","DURGA PRASAD BEHERA","SASWAT PATRA","SUBHASMITA BEHERA","SIBASISH MISHRA","PRIYANSHU MOHARANA","BIDUSMITA MISHRA","JASMIN SAMAL","BINIT KUMAR SAHU","JILU DAS","SUDIPTA SURANJITA SAHOO","LIPA SAHU","IPSITA PATTANAIK","PRIYANKA BISWAL","RUDRA PRASAD SAHU","ALIVA DIPSIKHA GARNAIK","ABHISEK NANDA","SWASTIKA SAHU","LAXMIPRIYA NAYAK","AMIT SAHOO","KALPANA SAHOO","RATNAPRAVA DHAR","SRITAM BEHERA","PUJA KUMARI","SWAPNARANI DHAR","ALISHA DAS","SANA RAO","MANASMITA DEHURY","SURENDRA SAHU","ARPITA MALIK","SASWAT SUMAN DWIBEDY","SUBHAM BISWAL","CHINMAYEE P PRADHAN","MOMITA MISHRA","SANJIB SAHOO","V. VIBEK MUSKAN"],"MISSION 2":["SASWAT SUMAN DWIBEDY","DEBIPRASAD PRADHAN","LIPA SAHU","ABANTI DEHURY","RATNAPRAVA DHAR","JITENDRA KARAN SAHU","DURGA PRASAD BEHERA","PRIYANSHU SAHU","BIDUSMITA MISHRA","RITISHNA MOHANTY","SUBHASMITA BEHERA","SIBASISH MISHRA","PAYAL PRADHAN","YASHITA SAHU","PRASNAJIT DEHURY","SHANKARA SAHU","CHINMAYEE PRIYADARSHINI","SNEHA SAHOO","RUDRAPRASAD SAHU C","JAYANTA SAHU","STHITA PRANGYA SAHOO","STHITIPRAJNA BEHERA","ANSHUMAN PRADHAN","SOMESH PRADHAN","AMARENDRA SAHOO","SWASTIKA NAYAK","SATYAJIT SAHOO","ABHISEK NANDA","RUDRAPRASAD SAHU A","SHASWAT PATRA","KALPANA SAHOO","PRABINA SAHOO","SUBHASMITA SAHOO","SRITAM BEHERA","MONALISA BEHERA","SRUTI SONALI BARAH","RUDRAPRASAD SAHU B","KANHA CHARAN PRADAHAN","ALISHA DAS","MANASMITA DEHURY"],"MISSION 3":["DEBIPRASAD PRADHAN","YASHITA SAHU","SUDIPTA SURANJITA SAHOO","SIBASISH MISHRA","SUBHASMITA BEHERA","SASMITA DAS","DURGA PRASAD BEHERA","KANHA CHARAN PRADAHAN","ALIVA DIPSIKHA GARNAIK","ALISHA DAS","SUPRIYA MOHANTY","BIDUSMITA MISHRA","SNEHA KUMARI SINGH","PRIYANSHU BISWAL","DIBYANI DIBYASMITA","PRACHI PARASMITA PRADHAN","MOMITA MISHRA","SWASTIKA SAHU","RUDRAPRASAD SAHU B","SUBHAM BISWAL","PUJA KUMARI","SANJIB SAHOO","PRIYANSHU MOHARANA","ARPITA MALIK","CHINMAYEE PRIYADARSHINI","LIPA SAHU","SRITAM BEHERA","GAJENDRA BEHERA","MADHUMAY SAHU","SANA RAO","KALPANA SAHOO","ELIN PATTANAYAK","SUBHAM NANDA","SUSHREE LIKHA PRADHAN","SUBRAT KUMAR SAHOO","SUBHASHREE BEHERA","SWAPNARANI DHAR","SUBHASMITA PRADHAN","RATNAPRAVA SAHOO","IPSITA PATTANAIK"],"MISSION 4":["SHANKARA SAHU","LAXMIPRIYA NAYAK","SUDIPTA SURANJITA SAHOO","DEBIPRASAD PRADHAN","JITENDRA KARAN SAHU","KALPANA SAHOO","MANASMITA DEHURY","PUJA KUMARI","SASWAT SUMAN DWIBEDY","RATNAPRAVA SAHOO","KANHA CHARAN PRADAHAN","PRIYANSHU SAHU","SUBHAM BISWAL","DURGA PRASAD BEHERA","PRACHI PARASMITA PRADHAN","JASMIN SAMAL","SNEHA KUMARI SINGH","ALIVA DIPSIKHA GARNAIK","LIPA SAHU","RUDRAPRASAD SAHU A","CHINMAYEE PRIYADARSHINI","MOMITA MISHRA","ARPITA MALIK","AMARENDRA SAHOO","RITISHNA MOHANTY","DIBYANI DIBYASMITA","SUBHASMITA PRADHAN","AISHA DEHURY","SASMITA DAS","ELIN PATTANAYAK","ALISHA DAS","RUDRAPRASAD SAHU C","ABHISEK NANDA","SWAPNARANI DHAR","STHITA PRANGYA SAHOO","SAMBIT PRADHAN","SUPRIYA MOHANTY","SUBHASMITA SAHOO","STHITIPRAJNA BEHERA","JILU DAS"],"MISSION 5":["SASWAT SUMAN DWIBEDY","CHIRANJIB PATTANAIK","KANHA CHARAN PRADAHAN","SHANKARA SAHU","DEBIPRASAD PRADHAN","RUDRAPRASAD SAHU B","ALIVA DIPSIKHA GARNAIK","IPSITA PATTANAIK","LAXMIPRIYA NAYAK","SWASTIKA SAHU","CHINMAYEE PRIYADARSHINI","SRITAM BEHERA","MOMITA MISHRA","SUBHASMITA BEHERA","LIPA SAHU","ABHISEK NANDA","BIDUSMITA MISHRA","SIBASISH MISHRA","MADHUMAY SAHU","JAYANTA SAHU","DURGA PRASAD BEHERA","SOMESH PRADHAN","JILU DAS","SUBHAM BISWAL","ALISHA DAS","PRACHI PARASMITA PRADHAN","V VIBEK MUSKAN","SASMITA DAS","RUDRAPRASAD SAHU A","SASMITA SAHOO","ARPITA MALIK","AMIT SAHOO","SUDIPTA SURANJITA SAHOO","YASHITA SAHU","SANA RAO","PRIYANKA BISWAL","PRIYANSHU MOHARANA","SANJIB SAHOO","RATNAPRAVA DHAR","JITENDRA KARAN SAHU"],"MISSION 6":["SHANKARA SAHU","SANGITA PRIYADARSHANI","YASHITA SAHU","SASWAT SUMAN DWIBEDY","SUBHASMITA BEHERA","DEBIPRASAD PRADHAN","SWAGATIKA SAHOO","KANHA CHARAN PRADAHAN","JITENDRA KARAN SAHU","LIPA SAHU","SRITAM BEHERA","RUDRAPRASAD SAHU B","RUDRAPRASAD SAHU A","ABHIJIT SAHOO","MADHUMAY SAHU","BIDUSMITA MISHRA","ARPITA MALIK","DIBYANI DIBYASMITA","MOMITA MISHRA","IPSITA PATTANAIK","SWASTIKA SAHU","JASMIN SAMAL","ELIN PATTANAYAK","LAXMIPRIYA NAYAK","SASMITA DAS","SUDHANSHU","RATNAPRAVA DHAR","CHINMAYEE PRIYADARSHINI","PRACHI PARASMITA PRADHAN","PRIYANSHU MOHARANA","AMIT SAHOO","PRIYADARSHINI BEHERA","SUBHASHREE BEHERA","RUDRAPRASAD SAHU C","ALIVA DIPSIKHA GARNAIK","DURGA PRASAD BEHERA","AUROBINDO NAYAK","BINIT KUMAR SAHU","V VIBEK MUSKAN","SURENDRA SAHU"]},Bp=[{rank:1,name:"LIPA SAHU",frequency:6},{rank:2,name:"DURGA PRASAD BEHERA",frequency:6},{rank:3,name:"DEBIPRASAD PRADHAN",frequency:6},{rank:4,name:"KANHA CHARAN PRADAHAN",frequency:5},{rank:5,name:"SASWAT SUMAN DWIBEDY",frequency:5},{rank:6,name:"SHANKARA SAHU",frequency:4},{rank:7,name:"SUBHASMITA BEHERA",frequency:4},{rank:8,name:"YASHITA SAHU",frequency:4},{rank:9,name:"SIBASISH MISHRA",frequency:4},{rank:10,name:"BIDUSMITA MISHRA",frequency:4},{rank:11,name:"SUDIPTA SURANJITA SAHOO",frequency:4},{rank:12,name:"ALIVA DIPSIKHA GARNAIK",frequency:4},{rank:13,name:"IPSITA PATTANAIK",frequency:4},{rank:14,name:"JITENDRA KARAN SAHU",frequency:4}],F0=[{icon:"🎓",title:"Bridge the Skill Gap",desc:"Connect classroom knowledge with real corporate expectations through focused training and assessment."},{icon:"🧠",title:"Develop Key Skills",desc:"Improve aptitude, reasoning, technical knowledge, English communication, and interview handling."},{icon:"📈",title:"Track Performance",desc:"Measure consistency across multiple missions and identify high-potential students using real results."},{icon:"🏢",title:"Placement Readiness",desc:"Prepare candidates for companies like TCS, Wipro, Accenture, Cognizant, Infosys, and Tech Mahindra."}],U0=[{num:1,title:"Assessment & Selection",desc:"Students are evaluated through aptitude, English, technical skills, and personality-based screening. The top 40 are shortlisted for the program."},{num:2,title:"Team Formation",desc:"The selected students are divided into groups such as Mission 40 A, B, C, and D, each guided by faculty mentors for continuous tracking."},{num:3,title:"Structured Training",desc:"The 10-week plan includes aptitude, technical practice, GD-PI training, mock interviews, profile building, and company-specific preparation."}],_0=[{week:"Week 1",title:"Orientation",desc:"Program introduction, expectations, and goal setting."},{week:"Week 2–3",title:"Aptitude Mastery",desc:"Reasoning, quantitative aptitude, and logical problem solving."},{week:"Week 4–5",title:"Technical Grooming",desc:"Stream-wise technical strengthening and practice sessions."},{week:"Week 6–7",title:"Communication & Profile",desc:"GD, spoken communication, resume, LinkedIn, and email etiquette."},{week:"Week 8–10",title:"Company Prep & Mock",desc:"Company-specific modules, mock interviews, and final revision drills."}],$0=[{title:"Industry-Ready Students",desc:"Students become better prepared for aptitude rounds, technical interviews, and HR interaction."},{title:"Better Placement Results",desc:"Improved shortlisting and stronger recruitment performance in top companies."},{title:"Stronger Professional Profiles",desc:"Enhanced resumes, LinkedIn presence, communication style, and corporate behavior."},{title:"Benchmark Academic Initiative",desc:"A repeatable model that can inspire future batches and strengthen the placement cell's reputation."}],G0=[{src:"/CTC NEW REACT WEBSITE/images/MISSION40/mission40_img1.jpeg",alt:"Mission 40 - Session 1"},{src:"/CTC NEW REACT WEBSITE/images/MISSION40/mission40_img2.jpeg",alt:"Mission 40 - Session 2"},{src:"/CTC NEW REACT WEBSITE/images/MISSION40/mission40_img3.jpeg",alt:"Mission 40 - Session 3"},{src:"/CTC NEW REACT WEBSITE/images/MISSION40/mission40_img4.jpeg",alt:"Mission 40 - Session 4"},{src:"/CTC NEW REACT WEBSITE/images/MISSION40/mission40_img5.jpeg",alt:"Mission 40 - Session 5"},{src:"/CTC NEW REACT WEBSITE/images/MISSION40/mission40_img6.jpeg",alt:"Mission 40 - Session 6"},{src:"/CTC NEW REACT WEBSITE/images/MISSION40/mission40_img7.jpeg",alt:"Mission 40 - Session 7"},{src:"/CTC NEW REACT WEBSITE/images/MISSION40/mission40_img8.jpeg",alt:"Mission 40 - Session 8"}];function Y0(r){return r>=6?"Excellent":r===5?"Very Strong":"Strong"}function J0(){v.useEffect(()=>{const r=document.querySelectorAll(".rv"),s=new IntersectionObserver(o=>o.forEach(c=>{c.isIntersecting&&c.target.classList.add("rv-in")}),{threshold:.05});return r.forEach(o=>s.observe(o)),()=>s.disconnect()},[])}function V0({children:r}){return e.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:6,background:"rgba(12,35,64,0.06)",border:"1px solid rgba(12,35,64,0.11)",color:"#0c2340",fontSize:"0.67rem",fontWeight:800,padding:"5px 14px",borderRadius:30,letterSpacing:"2px",textTransform:"uppercase",marginBottom:12},children:[e.jsx("span",{style:{width:6,height:6,borderRadius:"50%",background:"#ffcc00",display:"inline-block"}}),r]})}function sa({badge:r,title:s,highlight:o,sub:c}){return e.jsxs("div",{style:{textAlign:"center",marginBottom:52},children:[r&&e.jsx(V0,{children:r}),e.jsxs("h2",{style:{fontFamily:"'Sora', sans-serif",fontSize:"clamp(1.6rem, 3.2vw, 2.3rem)",fontWeight:800,color:"#0c2340",letterSpacing:"-0.8px",margin:"0 0 14px",lineHeight:1.15},children:[s," ",o&&e.jsx("span",{style:{color:"#1a4080"},children:o})]}),c&&e.jsx("p",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:"0.92rem",color:"#64748b",fontWeight:400,maxWidth:560,margin:"0 auto",lineHeight:1.8},children:c})]})}function K0(){const r=Object.keys(Pp),[s,o]=v.useState(r[0]),[c,m]=v.useState(1),p=10,u=Pp[s]||[],x=Math.ceil(u.length/p),h=(c-1)*p,b=u.slice(h,h+p),y=g=>{o(g),m(1)};return e.jsxs("div",{style:{background:"#fff",border:"1.5px solid rgba(12,35,64,0.09)",borderRadius:20,overflow:"hidden",boxShadow:"0 6px 32px rgba(12,35,64,0.09)"},children:[e.jsxs("div",{style:{padding:"22px 24px 18px",borderBottom:"1px solid rgba(12,35,64,0.07)",background:"#fafcff"},children:[e.jsxs("div",{style:{marginBottom:14},children:[e.jsx("p",{style:{fontFamily:"'Sora',sans-serif",fontWeight:700,fontSize:"0.92rem",color:"#0c2340",margin:"0 0 3px"},children:"Mission-wise Top 40 Students"}),e.jsxs("p",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:"0.8rem",color:"#94a3b8",margin:0},children:[s,"  ·  40 students  ·  Batch 2023–26"]})]}),e.jsx("div",{style:{display:"flex",gap:7,flexWrap:"wrap"},children:r.map(g=>e.jsx("button",{onClick:()=>y(g),style:{border:"1.5px solid",borderColor:s===g?"transparent":"rgba(12,35,64,0.13)",background:s===g?"linear-gradient(135deg,#0c2340 0%,#1a4080 100%)":"#f1f5f9",color:s===g?"#fff":"#475569",borderRadius:10,padding:"8px 14px",fontFamily:"'Sora',sans-serif",fontWeight:700,fontSize:"0.75rem",cursor:"pointer",transition:"all 0.2s",boxShadow:s===g?"0 4px 14px rgba(12,35,64,0.22)":"none"},children:g},g))})]}),e.jsx("div",{style:{overflowX:"auto"},children:e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",minWidth:480},children:[e.jsx("thead",{children:e.jsx("tr",{style:{background:"#f8fafc"},children:["Sl. No.","Student Name","Mission","Status"].map(g=>e.jsx("th",{style:{padding:"12px 18px",textAlign:"left",fontFamily:"'Sora',sans-serif",fontSize:"0.68rem",color:"#94a3b8",textTransform:"uppercase",letterSpacing:"0.07em",fontWeight:700,borderBottom:"1px solid rgba(12,35,64,0.07)",whiteSpace:"nowrap"},children:g},g))})}),e.jsx("tbody",{children:b.map((g,T)=>e.jsxs("tr",{style:{transition:"background 0.12s",cursor:"default"},onMouseEnter:E=>E.currentTarget.style.background="#f5f9ff",onMouseLeave:E=>E.currentTarget.style.background="transparent",children:[e.jsx("td",{style:{padding:"13px 18px",borderBottom:"1px solid rgba(12,35,64,0.04)",fontFamily:"'DM Sans',sans-serif",color:"#94a3b8",fontWeight:600,fontSize:"0.85rem",width:70},children:h+T+1}),e.jsx("td",{style:{padding:"13px 18px",borderBottom:"1px solid rgba(12,35,64,0.04)",fontFamily:"'DM Sans',sans-serif",fontWeight:600,color:"#0f172a",fontSize:"0.87rem"},children:g}),e.jsx("td",{style:{padding:"13px 18px",borderBottom:"1px solid rgba(12,35,64,0.04)",fontFamily:"'DM Sans',sans-serif",fontWeight:500,color:"#475569",fontSize:"0.85rem",whiteSpace:"nowrap"},children:s}),e.jsx("td",{style:{padding:"13px 18px",borderBottom:"1px solid rgba(12,35,64,0.04)"},children:e.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:5,padding:"4px 12px",borderRadius:999,background:"#eef2ff",color:"#3730a3",fontFamily:"'Sora',sans-serif",fontWeight:700,fontSize:"0.7rem",whiteSpace:"nowrap"},children:[e.jsx("span",{style:{width:5,height:5,borderRadius:"50%",background:"#6366f1",display:"inline-block"}}),"Top 40 Selected"]})})]},T))})]})}),e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:12,padding:"16px 24px 20px",borderTop:"1px solid rgba(12,35,64,0.06)",background:"#fafcff"},children:[e.jsxs("span",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:"0.8rem",color:"#94a3b8"},children:["Showing ",h+1,"–",Math.min(h+p,u.length)," of ",u.length]}),e.jsxs("div",{style:{display:"flex",gap:5,flexWrap:"wrap",alignItems:"center"},children:[e.jsx("button",{onClick:()=>m(g=>g-1),disabled:c===1,style:{width:34,height:34,borderRadius:8,border:"1.5px solid rgba(12,35,64,0.12)",background:"#fff",fontWeight:700,cursor:c===1?"not-allowed":"pointer",opacity:c===1?.35:1,fontFamily:"'Sora',sans-serif",fontSize:"0.9rem",color:"#0c2340"},children:"‹"}),Array.from({length:x},(g,T)=>T+1).map(g=>e.jsx("button",{onClick:()=>m(g),style:{width:34,height:34,borderRadius:8,border:"1.5px solid",borderColor:g===c?"#0c2340":"rgba(12,35,64,0.12)",background:g===c?"#0c2340":"#fff",color:g===c?"#fff":"#0c2340",fontWeight:700,cursor:"pointer",fontFamily:"'Sora',sans-serif",fontSize:"0.82rem",transition:"all 0.15s"},children:g},g)),e.jsx("button",{onClick:()=>m(g=>g+1),disabled:c===x,style:{width:34,height:34,borderRadius:8,border:"1.5px solid rgba(12,35,64,0.12)",background:"#fff",fontWeight:700,cursor:c===x?"not-allowed":"pointer",opacity:c===x?.35:1,fontFamily:"'Sora',sans-serif",fontSize:"0.9rem",color:"#0c2340"},children:"›"})]})]})]})}function q0({img:r,idx:s}){const[o,c]=v.useState(!1),[m,p]=v.useState(!1),[u,x]=v.useState(!1);return e.jsxs("div",{className:"rv",style:{borderRadius:14,overflow:"hidden",background:"#1a3a6b",boxShadow:o?"0 16px 44px rgba(12,35,64,0.28)":"0 3px 14px rgba(12,35,64,0.1)",transform:o?"translateY(-6px) scale(1.018)":"none",transition:"all 0.32s cubic-bezier(0.4,0,0.2,1)",transitionDelay:`${s%4*.06}s`,cursor:"pointer",aspectRatio:"4/3",position:"relative"},onMouseEnter:()=>c(!0),onMouseLeave:()=>c(!1),children:[u?e.jsxs("div",{style:{width:"100%",height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",background:"linear-gradient(135deg,#0c2340,#1a3a6b)",color:"rgba(255,255,255,0.4)",gap:8},children:[e.jsx("span",{style:{fontSize:"2rem"},children:"📸"}),e.jsxs("span",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:"0.72rem",fontWeight:600},children:["Photo ",s+1]})]}):e.jsxs(e.Fragment,{children:[!m&&e.jsx("div",{style:{position:"absolute",inset:0,background:"linear-gradient(135deg,#0c2340,#1a3a6b)",display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx("div",{style:{width:28,height:28,borderRadius:"50%",border:"3px solid rgba(255,204,0,0.25)",borderTopColor:"#ffcc00",animation:"spin 0.8s linear infinite"}})}),e.jsx("img",{src:r.src,alt:r.alt,onLoad:()=>p(!0),onError:()=>x(!0),style:{width:"100%",height:"100%",objectFit:"cover",transition:"transform 0.42s ease",transform:o?"scale(1.07)":"scale(1)",display:m?"block":"none"}})]}),e.jsx("div",{style:{position:"absolute",inset:0,background:o?"linear-gradient(to top,rgba(12,35,64,0.6) 0%,transparent 55%)":"linear-gradient(to top,rgba(12,35,64,0.15) 0%,transparent 55%)",transition:"background 0.32s"}}),o&&e.jsx("div",{style:{position:"absolute",bottom:12,left:12,right:12},children:e.jsx("p",{style:{fontFamily:"'DM Sans',sans-serif",fontWeight:700,fontSize:"0.78rem",color:"#fff",margin:0},children:r.alt})})]})}function Q0(){return J0(),e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
    @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&family=DM+Sans:wght@400;500;600;700&display=swap');

    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    @keyframes spin { to { transform: rotate(360deg); } }
    @keyframes heroFadeUp { from { opacity:0; transform:translateY(28px); } to { opacity:1; transform:none; } }
    @keyframes pulseGold { 0%,100%{opacity:0.6;} 50%{opacity:1;} }

    .rv { opacity:0; transform:translateY(20px); transition: opacity 0.5s ease, transform 0.5s ease; }
    .rv-in { opacity:1; transform:none; }

    .m40 {
      background: #f0f4f8;
      min-height: 100vh;
      font-family: 'DM Sans', sans-serif;
    }

    /* ── HERO ── */
    .m40-hero {
      background: linear-gradient(160deg, #020d1e 0%, #0c2340 45%, #0d2a4e 75%, #030e20 100%);
      position: relative;
      overflow: hidden;
      padding: 88px 0 0;
    }
    .m40-hero__orb {
      position: absolute; border-radius: 50%; pointer-events: none;
    }
    .m40-hero__orb--1 {
      top: -100px; right: -60px; width: 360px; height: 360px;
      background: radial-gradient(circle, rgba(255,204,0,0.10) 0%, transparent 65%);
    }
    .m40-hero__orb--2 {
      bottom: -80px; left: -40px; width: 300px; height: 300px;
      background: radial-gradient(circle, rgba(44,103,242,0.12) 0%, transparent 65%);
    }
    .m40-hero__orb--3 {
      top: 30%; right: 20%; width: 180px; height: 180px;
      background: radial-gradient(circle, rgba(255,204,0,0.05) 0%, transparent 65%);
    }
    .m40-hero__inner {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 5% 64px;
      position: relative; z-index: 2;
      animation: heroFadeUp 0.8s ease both;
    }
    .m40-hero__eyebrow {
      display: inline-flex; align-items: center; gap: 8px;
      background: rgba(255,204,0,0.09); border: 1px solid rgba(255,204,0,0.25);
      color: #ffcc00; font-size: 0.65rem; font-weight: 700;
      padding: 6px 14px; border-radius: 30px;
      letter-spacing: 2.5px; text-transform: uppercase; margin-bottom: 22px;
    }
    .m40-hero__eyebrow-dot {
      width: 6px; height: 6px; border-radius: 50%; background: #ffcc00;
      animation: pulseGold 1.6s ease infinite;
    }
    .m40-hero__h1 {
      font-family: 'Sora', sans-serif;
      font-size: clamp(2.4rem, 5.5vw, 4rem);
      font-weight: 800; color: #fff;
      line-height: 1.05; letter-spacing: -1.5px;
      margin-bottom: 18px;
    }
    .m40-hero__h1 em { font-style: normal; color: #ffcc00; }
    .m40-hero__sub {
      color: rgba(255,255,255,0.42);
      font-size: clamp(0.85rem, 1.5vw, 0.97rem);
      line-height: 1.85; max-width: 540px; margin-bottom: 36px;
    }
    .m40-hero__sub strong { color: rgba(255,255,255,0.7); font-weight: 600; }

    /* ── HERO STATS ── */
    .m40-stats {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 14px;
      max-width: 640px;
    }
    .m40-stat {
      background: rgba(255,255,255,0.05);
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 14px; padding: 18px 16px;
      text-align: center; backdrop-filter: blur(6px);
    }
    .m40-stat__val {
      font-family: 'Sora', sans-serif;
      font-size: clamp(1.6rem, 3vw, 2.1rem);
      font-weight: 800; color: #ffcc00; line-height: 1;
    }
    .m40-stat__lbl {
      font-size: 0.62rem; color: rgba(255,255,255,0.38);
      font-weight: 600; margin-top: 5px;
      text-transform: uppercase; letter-spacing: 0.4px;
      line-height: 1.45;
    }

    /* ── WAVE ── */
    .m40-wave { height: 56px; margin-top: -1px; }
    .m40-wave svg { width: 100%; height: 100%; display: block; }

    /* ── SECTIONS ── */
    .m40-sec {
      padding: 80px 5%;
    }
    .m40-sec--alt { background: #fff; }
    .m40-inner { max-width: 1200px; margin: 0 auto; }

    /* ── ABOUT CARDS ── */
    .m40-about-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 22px;
    }
    .m40-card {
      background: #fff;
      border: 1.5px solid rgba(12,35,64,0.08);
      border-radius: 20px; padding: 28px 26px;
      box-shadow: 0 4px 20px rgba(12,35,64,0.07);
      transition: transform 0.26s, box-shadow 0.26s;
    }
    .m40-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 12px 36px rgba(12,35,64,0.12);
    }
    .m40-card__head {
      display: flex; align-items: center; gap: 10px;
      margin-bottom: 20px;
    }
    .m40-card__icon {
      width: 36px; height: 36px; border-radius: 10px;
      background: linear-gradient(135deg,#0c2340,#1a4080);
      display: flex; align-items: center; justify-content: center;
      color: #ffcc00; font-size: 0.85rem; flex-shrink: 0;
    }
    .m40-card__title {
      font-family: 'Sora', sans-serif;
      font-weight: 800; font-size: 0.9rem; color: #0c2340;
    }

    /* ── OBJECTIVES ── */
    .m40-obj-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 18px;
    }
    .m40-obj-card {
      background: #fff;
      border: 1.5px solid rgba(12,35,64,0.07);
      border-radius: 20px; padding: 24px 20px;
      box-shadow: 0 3px 14px rgba(12,35,64,0.06);
      transition: transform 0.26s, box-shadow 0.26s;
    }
    .m40-obj-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 12px 36px rgba(12,35,64,0.13);
    }
    .m40-obj-icon {
      width: 50px; height: 50px; border-radius: 14px;
      background: linear-gradient(135deg,#dbeafe,#eef2ff);
      display: flex; align-items: center; justify-content: center;
      font-size: 1.4rem; margin-bottom: 14px;
    }
    .m40-obj-title {
      font-family: 'Sora', sans-serif;
      font-weight: 800; font-size: 0.9rem; color: #0c2340; margin-bottom: 8px;
    }
    .m40-obj-desc {
      font-size: 0.79rem; color: #64748b; line-height: 1.7;
    }

    /* ── PHASES ── */
    .m40-phase-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
    }
    .m40-phase-card {
      background: #fff;
      border: 1.5px solid rgba(12,35,64,0.07);
      border-radius: 20px; padding: 28px 24px;
      box-shadow: 0 3px 16px rgba(12,35,64,0.07);
      transition: transform 0.28s, box-shadow 0.28s;
    }
    .m40-phase-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 14px 42px rgba(12,35,64,0.13);
    }
    .m40-phase-num {
      width: 42px; height: 42px; border-radius: 13px;
      background: linear-gradient(135deg,#0c2340,#1a4080);
      color: #ffcc00; display: flex; align-items: center; justify-content: center;
      font-family: 'Sora', sans-serif; font-weight: 800; font-size: 1.05rem;
      margin-bottom: 16px;
    }

    /* ── ROADMAP ── */
    .m40-roadmap {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      gap: 16px;
    }
    .m40-road-card {
      background: #fff;
      border: 1.5px solid rgba(12,35,64,0.07);
      border-radius: 18px; padding: 22px 18px;
      box-shadow: 0 3px 14px rgba(12,35,64,0.06);
      transition: transform 0.26s, box-shadow 0.26s;
    }
    .m40-road-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 10px 32px rgba(12,35,64,0.12);
    }
    .m40-week-badge {
      display: inline-block; padding: 4px 10px; border-radius: 999px;
      background: #e0f2fe; color: #0369a1;
      font-size: 0.71rem; font-weight: 700;
      font-family: 'Sora', sans-serif;
      margin-bottom: 10px;
    }

    /* ── OUTCOMES ── */
    .m40-outcomes-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 18px;
    }
    .m40-outcome-card {
      display: flex; gap: 13px; align-items: flex-start;
      background: #fff;
      border: 1.5px solid rgba(12,35,64,0.07);
      border-radius: 20px; padding: 22px 20px;
      box-shadow: 0 3px 14px rgba(12,35,64,0.06);
      transition: transform 0.26s, box-shadow 0.26s;
    }
    .m40-outcome-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 10px 30px rgba(12,35,64,0.12);
    }
    .m40-check {
      width: 34px; height: 34px; border-radius: 11px;
      background: #dcfce7; color: #16a34a;
      display: flex; align-items: center; justify-content: center;
      font-weight: 900; flex-shrink: 0; font-size: 0.9rem;
    }

    /* ── GALLERY ── */
    .m40-gallery-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 16px;
    }

    /* ── CONSISTENCY LAYOUT ── */
    .m40-consistency-grid {
      display: grid;
      grid-template-columns: 3fr 2fr;
      gap: 24px;
      align-items: start;
    }

    /* ── RANK CHIPS ── */
    .rank-gold   { background: linear-gradient(135deg,#fff3c4,#ffd86b); }
    .rank-silver { background: linear-gradient(135deg,#f1f5f9,#dbe4f2); }
    .rank-bronze { background: linear-gradient(135deg,#ffe5d2,#f6b17a); }

    /* ── FOOTER CTA ── */
    .m40-footer-cta {
      background: linear-gradient(160deg,#020d1e 0%,#0c2340 50%,#030e20 100%);
      padding: 64px 5%;
      text-align: center;
    }

    /* ── SHARED TEXT ── */
    .h3 {
      font-family: 'Sora', sans-serif;
      font-weight: 800; font-size: 0.96rem; color: #0c2340;
      margin: 0 0 9px;
    }
    .body-sm { font-size: 0.82rem; color: #64748b; line-height: 1.75; margin: 0; }
    .body-xs { font-size: 0.79rem; color: #64748b; line-height: 1.7; margin: 0; }

    /* ── DETAIL LIST ── */
    .m40-detail-list { list-style: none; }
    .m40-detail-list li {
      display: flex; gap: 12px;
      padding-bottom: 11px; margin-bottom: 11px;
      border-bottom: 1px solid rgba(12,35,64,0.05);
      font-size: 0.84rem; line-height: 1.6;
    }
    .m40-detail-list li:last-child { border-bottom: none; margin-bottom: 0; padding-bottom: 0; }
    .m40-detail-list .lbl {
      font-family: 'Sora', sans-serif;
      font-weight: 700; color: #0c2340; min-width: 128px; flex-shrink: 0;
    }
    .m40-detail-list .val { color: #334155; font-weight: 500; }

    /* ── WHY LIST ── */
    .m40-why-list { list-style: none; }
    .m40-why-list li {
      display: flex; gap: 10px; align-items: flex-start;
      margin-bottom: 13px; font-size: 0.84rem; color: #334155; line-height: 1.65;
    }
    .m40-why-check {
      width: 20px; height: 20px; border-radius: 7px;
      background: linear-gradient(135deg,#dcfce7,#bbf7d0);
      color: #16a34a; display: flex; align-items: center; justify-content: center;
      flex-shrink: 0; font-weight: 900; font-size: 0.6rem; margin-top: 2px;
    }

    /* ── RESPONSIVE ── */
    @media (max-width: 1100px) {
      .m40-obj-grid { grid-template-columns: repeat(2, 1fr); }
      .m40-outcomes-grid { grid-template-columns: repeat(2, 1fr); }
      .m40-roadmap { grid-template-columns: repeat(3, 1fr); }
    }
    @media (max-width: 900px) {
      .m40-stats { grid-template-columns: repeat(2, 1fr); max-width: 380px; }
      .m40-about-grid { grid-template-columns: 1fr; }
      .m40-phase-grid { grid-template-columns: 1fr; }
      .m40-consistency-grid { grid-template-columns: 1fr; }
      .m40-gallery-grid { grid-template-columns: repeat(2, 1fr); }
    }
    @media (max-width: 700px) {
      .m40-sec { padding: 60px 4%; }
      .m40-hero__inner { padding: 0 4% 52px; }
      .m40-obj-grid { grid-template-columns: 1fr 1fr; gap: 14px; }
      .m40-outcomes-grid { grid-template-columns: 1fr; }
      .m40-roadmap { grid-template-columns: repeat(2, 1fr); }
    }
    @media (max-width: 480px) {
      .m40-stats { grid-template-columns: repeat(2, 1fr); gap: 10px; }
      .m40-obj-grid { grid-template-columns: 1fr; }
      .m40-roadmap { grid-template-columns: 1fr 1fr; }
      .m40-gallery-grid { grid-template-columns: 1fr 1fr; gap: 12px; }
    }
  `}),e.jsxs("div",{className:"m40",children:[e.jsxs("div",{className:"m40-hero",children:[e.jsx("div",{className:"m40-hero__orb m40-hero__orb--1"}),e.jsx("div",{className:"m40-hero__orb m40-hero__orb--2"}),e.jsx("div",{className:"m40-hero__orb m40-hero__orb--3"}),e.jsxs("div",{className:"m40-hero__inner",children:[e.jsxs("div",{className:"m40-hero__eyebrow",children:[e.jsx("span",{className:"m40-hero__eyebrow-dot"}),"Placement Excellence Initiative"]}),e.jsxs("h1",{className:"m40-hero__h1",children:[e.jsx("em",{children:"Mission 40"}),e.jsx("br",{}),"Placement Power"]}),e.jsxs("p",{className:"m40-hero__sub",children:["A structured training and placement readiness initiative by"," ",e.jsx("strong",{children:"Creative Techno College, Angul"})," designed to identify, mentor, and prepare high-potential students from the ",e.jsx("strong",{children:"2023–26 batch"})," for success in corporate recruitment."]}),e.jsx("div",{className:"m40-stats",children:[{val:"6",lbl:"Mission Exams Conducted"},{val:"40",lbl:"Selected Students Per Mission"},{val:"14",lbl:"Top Consistent Performers"},{val:"10",lbl:"Weeks Training Roadmap"}].map((s,o)=>e.jsxs("div",{className:"m40-stat",children:[e.jsx("div",{className:"m40-stat__val",children:s.val}),e.jsx("div",{className:"m40-stat__lbl",children:s.lbl})]},o))})]})]}),e.jsx("div",{className:"m40-wave",children:e.jsx("svg",{viewBox:"0 0 1440 56",preserveAspectRatio:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M0,36 C360,56 1080,0 1440,36 L1440,56 L0,56 Z",fill:"#f0f4f8"})})}),e.jsx("div",{className:"m40-sec",children:e.jsxs("div",{className:"m40-inner",children:[e.jsx(sa,{badge:"About the Program",title:"What is",highlight:"Mission 40?",sub:"Mission 40 is a focused training and mentoring initiative launched by the Training & Placement Cell to bridge the gap between academic learning and industry expectations."}),e.jsxs("div",{className:"m40-about-grid",children:[e.jsxs("div",{className:"m40-card rv",children:[e.jsxs("div",{className:"m40-card__head",children:[e.jsx("div",{className:"m40-card__icon",children:e.jsx("i",{className:"fa-solid fa-circle-info"})}),e.jsx("span",{className:"m40-card__title",children:"Official Details"})]}),e.jsx("ul",{className:"m40-detail-list",children:[["Event","Mission 40"],["Date","26 June 2025"],["College","Creative Techno College, Angul"],["Target Group","BCA, BBA and BSc CS students"],["Displayed Result Batch","2023–26"],["Resource Person","Bhabani Sankar Sahoo, Vice Principal"]].map(([s,o])=>e.jsxs("li",{children:[e.jsxs("span",{className:"lbl",children:[s,":"]}),e.jsx("span",{className:"val",children:o})]},s))})]}),e.jsxs("div",{className:"m40-card rv",style:{transitionDelay:"0.1s"},children:[e.jsxs("div",{className:"m40-card__head",children:[e.jsx("div",{className:"m40-card__icon",children:e.jsx("i",{className:"fa-solid fa-lightbulb"})}),e.jsx("span",{className:"m40-card__title",children:"Why Mission 40?"})]}),e.jsx("ul",{className:"m40-why-list",children:["To identify top-performing and placement-ready students early.","To improve aptitude, technical, communication, and interview skills.","To create a benchmark group with strong corporate readiness.","To build confidence, consistency, and professional discipline."].map((s,o)=>e.jsxs("li",{children:[e.jsx("span",{className:"m40-why-check",children:"✓"}),s]},o))})]})]})]})}),e.jsx("div",{className:"m40-sec m40-sec--alt",children:e.jsxs("div",{className:"m40-inner",children:[e.jsx(sa,{badge:"Objectives",title:"Core",highlight:"Objectives",sub:"Every section of this initiative is aligned with the Mission 40 vision of grooming students for strong placement outcomes."}),e.jsx("div",{className:"m40-obj-grid",children:F0.map((s,o)=>e.jsxs("div",{className:"m40-obj-card rv",style:{transitionDelay:`${o*.08}s`},children:[e.jsx("div",{className:"m40-obj-icon",children:s.icon}),e.jsx("div",{className:"m40-obj-title",children:s.title}),e.jsx("p",{className:"m40-obj-desc",children:s.desc})]},o))})]})}),e.jsx("div",{className:"m40-sec",children:e.jsxs("div",{className:"m40-inner",children:[e.jsx(sa,{badge:"Process",title:"Program",highlight:"Phases",sub:"The Mission 40 model follows a structured process from selection to final grooming."}),e.jsx("div",{className:"m40-phase-grid",children:U0.map((s,o)=>e.jsxs("div",{className:"m40-phase-card rv",style:{transitionDelay:`${o*.1}s`},children:[e.jsx("div",{className:"m40-phase-num",children:s.num}),e.jsx("h3",{className:"h3",children:s.title}),e.jsx("p",{className:"body-sm",children:s.desc})]},o))})]})}),e.jsx("div",{className:"m40-sec m40-sec--alt",children:e.jsxs("div",{className:"m40-inner",children:[e.jsx(sa,{badge:"Results",title:"Mission 40",highlight:"Exam Results",sub:"Below are the mission-wise results for the Batch 2023–26. Each table is paginated with 10 students per page."}),e.jsx("div",{className:"rv",children:e.jsx(K0,{})})]})}),e.jsx("div",{className:"m40-sec",children:e.jsxs("div",{className:"m40-inner",children:[e.jsx(sa,{badge:"Consistency",title:"Top 14 Consistent",highlight:"Performers",sub:"These students are highlighted based on their consistency across the six Mission 40 exams."}),e.jsxs("div",{className:"m40-consistency-grid",children:[e.jsxs("div",{className:"rv",style:{background:"#fff",border:"1.5px solid rgba(12,35,64,0.08)",borderRadius:20,boxShadow:"0 6px 32px rgba(12,35,64,0.09)",overflow:"hidden"},children:[e.jsxs("div",{style:{padding:"20px 22px 14px",borderBottom:"1px solid rgba(12,35,64,0.07)",background:"#fafcff"},children:[e.jsx("p",{style:{fontFamily:"'Sora',sans-serif",fontWeight:700,fontSize:"0.9rem",color:"#0c2340",margin:"0 0 3px"},children:"Consistency Ranking"}),e.jsx("p",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:"0.78rem",color:"#94a3b8",margin:0},children:"Frequency calculated out of 6 missions"})]}),e.jsx("div",{style:{overflowX:"auto"},children:e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",minWidth:420},children:[e.jsx("thead",{children:e.jsx("tr",{style:{background:"#f8fafc"},children:["Rank","Student Name","Frequency","Status"].map(s=>e.jsx("th",{style:{padding:"11px 16px",textAlign:"left",fontFamily:"'Sora',sans-serif",fontSize:"0.67rem",color:"#94a3b8",textTransform:"uppercase",letterSpacing:"0.07em",fontWeight:700,borderBottom:"1px solid rgba(12,35,64,0.07)",whiteSpace:"nowrap"},children:s},s))})}),e.jsx("tbody",{children:Bp.map(s=>e.jsxs("tr",{style:{transition:"background 0.12s"},onMouseEnter:o=>o.currentTarget.style.background="#f5f9ff",onMouseLeave:o=>o.currentTarget.style.background="transparent",children:[e.jsx("td",{style:{padding:"11px 16px",borderBottom:"1px solid rgba(12,35,64,0.04)",fontFamily:"'Sora',sans-serif",fontWeight:700,color:"#0c2340",fontSize:"0.83rem",width:56},children:s.rank}),e.jsx("td",{style:{padding:"11px 16px",borderBottom:"1px solid rgba(12,35,64,0.04)",fontFamily:"'DM Sans',sans-serif",fontWeight:600,color:"#0f172a",fontSize:"0.85rem"},children:s.name}),e.jsxs("td",{style:{padding:"11px 16px",borderBottom:"1px solid rgba(12,35,64,0.04)",fontFamily:"'DM Sans',sans-serif",fontWeight:600,color:"#475569",fontSize:"0.85rem",whiteSpace:"nowrap"},children:[s.frequency,"/6"]}),e.jsx("td",{style:{padding:"11px 16px",borderBottom:"1px solid rgba(12,35,64,0.04)"},children:e.jsx("span",{style:{display:"inline-flex",alignItems:"center",gap:5,padding:"4px 10px",borderRadius:999,background:s.frequency>=6?"#dcfce7":s.frequency===5?"#e0f2fe":"#eef2ff",color:s.frequency>=6?"#166534":s.frequency===5?"#075985":"#3730a3",fontFamily:"'Sora',sans-serif",fontWeight:700,fontSize:"0.7rem",whiteSpace:"nowrap"},children:Y0(s.frequency)})})]},s.rank))})]})}),e.jsx("div",{style:{height:16}})]}),e.jsx("div",{className:"rv",style:{transitionDelay:"0.12s"},children:e.jsxs("div",{style:{background:"#fff",border:"1.5px solid rgba(12,35,64,0.08)",borderRadius:20,padding:"26px 22px",boxShadow:"0 4px 20px rgba(12,35,64,0.08)"},children:[e.jsx("p",{style:{fontFamily:"'Sora',sans-serif",fontWeight:800,fontSize:"0.9rem",color:"#0c2340",margin:"0 0 5px"},children:"Top 3 Highlights"}),e.jsx("p",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:"0.78rem",color:"#94a3b8",margin:"0 0 20px"},children:"Strongest repeated performance across all mission examinations."}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:14},children:Bp.slice(0,3).map((s,o)=>e.jsxs("div",{className:`rank-${["gold","silver","bronze"][o]}`,style:{borderRadius:16,padding:"18px 20px",boxShadow:"0 3px 14px rgba(12,35,64,0.09)"},children:[e.jsxs("span",{style:{display:"block",fontSize:"0.75rem",fontWeight:700,opacity:.65,fontFamily:"'Sora',sans-serif"},children:[s.rank," ",["🥇","🥈","🥉"][o]]}),e.jsx("strong",{style:{display:"block",fontSize:"0.97rem",marginTop:6,fontFamily:"'Sora',sans-serif",fontWeight:800,color:"#0f172a"},children:s.name}),e.jsxs("small",{style:{display:"block",marginTop:4,fontWeight:700,fontFamily:"'DM Sans',sans-serif",fontSize:"0.77rem",color:"#334155"},children:[s.frequency,"/6 Missions"]})]},o))})]})})]})]})}),e.jsx("div",{className:"m40-sec m40-sec--alt",children:e.jsxs("div",{className:"m40-inner",children:[e.jsx(sa,{badge:"Training Plan",title:"10-Week Training",highlight:"Roadmap",sub:"The training plan is designed to move students from orientation to final interview readiness in a structured way."}),e.jsx("div",{className:"m40-roadmap",children:_0.map((s,o)=>e.jsxs("div",{className:"m40-road-card rv",style:{transitionDelay:`${o*.08}s`},children:[e.jsx("span",{className:"m40-week-badge",children:s.week}),e.jsx("h4",{className:"h3",style:{fontSize:"0.9rem"},children:s.title}),e.jsx("p",{className:"body-xs",children:s.desc})]},o))})]})}),e.jsx("div",{className:"m40-sec",children:e.jsxs("div",{className:"m40-inner",children:[e.jsx(sa,{badge:"Outcomes",title:"Expected",highlight:"Outcomes",sub:"Mission 40 aims to produce students who are not just shortlisted, but genuinely ready for placement success."}),e.jsx("div",{className:"m40-outcomes-grid",children:$0.map((s,o)=>e.jsxs("div",{className:"m40-outcome-card rv",style:{transitionDelay:`${o*.08}s`},children:[e.jsx("div",{className:"m40-check",children:"✓"}),e.jsxs("div",{children:[e.jsx("h4",{className:"h3",style:{fontSize:"0.9rem"},children:s.title}),e.jsx("p",{className:"body-xs",children:s.desc})]})]},o))})]})}),e.jsx("div",{className:"m40-sec m40-sec--alt",children:e.jsxs("div",{className:"m40-inner",children:[e.jsx(sa,{badge:"Gallery",title:"Mission 40",highlight:"Photo Gallery",sub:"Moments captured from Mission 40 sessions, assessments, and training activities at Creative Techno College."}),e.jsx("div",{className:"m40-gallery-grid",children:G0.map((s,o)=>e.jsx(q0,{img:s,idx:o},o))})]})}),e.jsx("div",{className:"m40-footer-cta",children:e.jsxs("div",{className:"m40-inner",children:[e.jsx("p",{style:{fontFamily:"'Sora',sans-serif",fontSize:"0.65rem",fontWeight:700,color:"rgba(255,204,0,0.6)",letterSpacing:2,textTransform:"uppercase",margin:"0 0 14px"},children:"Creative Techno College, Angul"}),e.jsx("h2",{style:{fontFamily:"'Sora',sans-serif",fontSize:"clamp(1.4rem,2.8vw,2.1rem)",fontWeight:800,color:"#fff",margin:"0 0 12px",letterSpacing:"-0.5px"},children:"Mission 40  ·  Placement Readiness Program"}),e.jsx("p",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:"0.87rem",color:"rgba(255,255,255,0.38)",margin:"0 0 30px"},children:"Training & Placement Cell  ·  Vice Principal / Placement Team  ·  Batch 2023–26"}),e.jsxs(Se,{to:"/placement/programs",style:{display:"inline-flex",alignItems:"center",gap:9,padding:"13px 26px",borderRadius:13,background:"rgba(255,204,0,0.1)",border:"1.5px solid rgba(255,204,0,0.28)",color:"#ffcc00",fontFamily:"'Sora',sans-serif",fontWeight:700,fontSize:"0.86rem",textDecoration:"none",transition:"all 0.22s"},onMouseEnter:s=>{s.currentTarget.style.background="rgba(255,204,0,0.18)",s.currentTarget.style.transform="translateY(-2px)"},onMouseLeave:s=>{s.currentTarget.style.background="rgba(255,204,0,0.1)",s.currentTarget.style.transform="none"},children:[e.jsx("i",{className:"fa-solid fa-arrow-left"})," Back to Development Programs"]})]})})]})]})}const zp=[{name:"Technocrat",color:"#3b82f6",colorDark:"#1d4ed8",bg:"linear-gradient(135deg, #1d4ed8 0%, #3b82f6 100%)",desc:"Technology, innovation, and entrepreneurship. Coding, hackathons, and robotics drive our mission.",to:"/gymkhana/technocrat",img:"/CTC NEW REACT WEBSITE/images/GYMKHANA/technocrat.png",tag:"Innovation & Tech"},{name:"Sports",color:"#10b981",colorDark:"#059669",bg:"linear-gradient(135deg, #059669 0%, #10b981 100%)",desc:"Indoor & outdoor games, tournaments, and fitness — building discipline and sportsmanship.",to:"/gymkhana/sports",img:"/CTC NEW REACT WEBSITE/images/GYMKHANA/sports.png",tag:"Athletics & Fitness"},{name:"Cultural",color:"#f59e0b",colorDark:"#d97706",bg:"linear-gradient(135deg, #d97706 0%, #f59e0b 100%)",desc:"Music, dance, drama, arts, and literary activities — a stage for creativity and expression.",to:"/gymkhana/cultural",img:"/CTC NEW REACT WEBSITE/images/GYMKHANA/cultural.png",tag:"Arts & Expression"},{name:"Disha & CSR",color:"#ec4899",colorDark:"#db2777",bg:"linear-gradient(135deg, #db2777 0%, #ec4899 100%)",desc:"Career guidance and social responsibility — outreach programs that make a real difference.",to:"/gymkhana/disha-csr",img:"/CTC NEW REACT WEBSITE/images/GYMKHANA/disha.png",tag:"Community & Growth"}],X0=["Provide a platform for students to engage in co-curricular and extracurricular activities.","Encourage leadership, innovation, and organizational skills among students.","Cultivate teamwork, collaboration, and a sense of responsibility.","Complement academic learning with practical exposure and problem-solving experiences.","Nurture creativity, sportsmanship, and social responsibility."],Z0=[{icon:"fa-solid fa-star",title:"Skill Enhancement",desc:"Building confidence, communication, and leadership abilities."},{icon:"fa-solid fa-seedling",title:"Holistic Development",desc:"Balancing academics with cultural, technical, and sports excellence."},{icon:"fa-solid fa-people-group",title:"Community Engagement",desc:"Promoting social awareness and CSR initiatives."},{icon:"fa-solid fa-crown",title:"Student Leadership",desc:"Empowering students to take charge through active roles in clubs and events."},{icon:"fa-solid fa-handshake",title:"Collaboration",desc:"Strengthening unity and coordination among diverse student groups."}];function ex(){return e.jsxs("div",{className:"gym-page",children:[e.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;900&family=Inter:wght@400;500;600&display=swap');
        *, *::before, *::after { box-sizing: border-box; }
        .gym-page { background:#f8faff; min-height:100vh; font-family:'Inter',sans-serif; }

        /* ── HERO ── */
        .gym-hero {
          background:linear-gradient(165deg,#020c1b 0%,#0c2340 40%,#112d52 70%,#060f1e 100%);
          padding:90px 5% 70px; position:relative; overflow:hidden;
        }
        .gym-hero-content { position:relative; z-index:2; display:flex; align-items:center; justify-content:space-between; gap:48px; flex-wrap:wrap; max-width:1200px; margin:0 auto; }
        .gym-hero-left { flex:1; min-width:300px; text-align:left; }
        .gym-hero-chip { display:inline-flex; align-items:center; gap:8px; background:rgba(0,212,255,0.1); border:1px solid rgba(0,212,255,0.28); color:#00d4ff; padding:6px 18px; border-radius:30px; font-size:0.68rem; font-weight:800; letter-spacing:2px; text-transform:uppercase; margin-bottom:20px; }
        .gym-hero h1 { font-family:'Poppins',sans-serif; font-size:clamp(2.6rem,6vw,4.2rem); font-weight:900; color:#fff; line-height:1.05; margin-bottom:16px; }
        .gym-hero h1 em { font-style:normal; background:linear-gradient(90deg,#f5c518,#ff8c00); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; }
        .gym-hero-sub { font-size:0.78rem; color:rgba(255,255,255,0.45); letter-spacing:3px; text-transform:uppercase; font-weight:700; margin-bottom:18px; }
        .gym-hero-left > p { color:rgba(255,255,255,0.55); font-size:1rem; max-width:500px; line-height:1.85; margin-bottom:0; }
        .gym-hero-right { flex-shrink:0; }
        .gym-hero-badges { display:flex; flex-direction:column; gap:12px; }
        .gym-hero-badge { background:rgba(255,255,255,0.06); border:1px solid rgba(255,255,255,0.1); color:rgba(255,255,255,0.75); padding:12px 22px; border-radius:14px; font-weight:600; font-size:0.88rem; display:flex; align-items:center; gap:12px; transition:background 0.2s,border-color 0.2s; }
        .gym-hero-badge:hover { background:rgba(255,255,255,0.1); border-color:rgba(255,255,255,0.2); }
        .gym-hero-badge-dot { width:8px; height:8px; border-radius:50%; flex-shrink:0; }

        /* ── STATS ── */
        .gym-stats-wrap { background:#fff; padding:0 5%; }
        .gym-stats-bar { max-width:940px; margin:-46px auto 0; display:grid; grid-template-columns:repeat(4,1fr); background:#fff; border-radius:20px; box-shadow:0 20px 60px rgba(10,22,40,0.14); overflow:hidden; border:1px solid rgba(10,22,40,0.08); position:relative; z-index:3; }
        .gym-stat { padding:28px 20px; text-align:center; }
        .gym-stat:not(:last-child) { border-right:1px solid rgba(10,22,40,0.07); }
        .gym-stat:nth-child(1) { border-top:4px solid #f5c518; }
        .gym-stat:nth-child(2) { border-top:4px solid #3b82f6; }
        .gym-stat:nth-child(3) { border-top:4px solid #10b981; }
        .gym-stat:nth-child(4) { border-top:4px solid #ec4899; }
        .gym-stat-num { display:block; font-family:'Poppins',sans-serif; font-size:2.3rem; font-weight:900; color:#0a1628; line-height:1; }
        .gym-stat-label { display:block; font-size:0.68rem; font-weight:700; color:#64748b; margin-top:6px; text-transform:uppercase; letter-spacing:0.8px; }

        /* ── PRESIDENT ── */
        .gym-president { background:#fff; padding:90px 5% 70px; }
        .gym-president-inner { max-width:1100px; margin:0 auto; background:linear-gradient(135deg,#0a1628 0%,#1a3a6b 100%); border-radius:28px; padding:56px 60px; display:flex; gap:52px; align-items:center; box-shadow:0 24px 80px rgba(10,22,40,0.22); position:relative; overflow:hidden; }
        .gym-president-inner::before { content:''; position:absolute; top:-60px; right:-60px; width:380px; height:380px; border-radius:50%; background:radial-gradient(circle,rgba(0,212,255,0.1),transparent 70%); }
        .gym-president-img-wrap { position:relative; z-index:1; flex-shrink:0; }
        .gym-president-img-wrap img { width:200px; height:248px; object-fit:cover; border-radius:20px; border:3px solid rgba(245,197,24,0.4); box-shadow:0 16px 48px rgba(0,0,0,0.35); }
        .gym-president-text { position:relative; z-index:1; }
        .gym-president-pill { display:inline-block; background:rgba(245,197,24,0.15); color:#f5c518; border:1px solid rgba(245,197,24,0.3); border-radius:20px; padding:5px 16px; font-size:0.68rem; font-weight:800; letter-spacing:2px; text-transform:uppercase; margin-bottom:18px; }
        .gym-president-text h2 { font-family:'Poppins',sans-serif; font-size:1.75rem; font-weight:900; color:#fff; margin-bottom:20px; }
        .gym-president-text h2 span { color:#00d4ff; }
        .gym-president-text p { color:rgba(255,255,255,0.68); font-size:0.93rem; line-height:1.95; margin-bottom:14px; }
        .gym-president-sig { color:#f5c518!important; font-weight:700!important; font-size:0.95rem!important; }

        /* ── SECTION SHARED ── */
        .gym-section-heading { text-align:center; margin-bottom:52px; }
        .gym-section-pill { display:inline-block; background:#eff6ff; color:#2563eb; border:1px solid #bfdbfe; border-radius:20px; padding:5px 16px; font-size:0.68rem; font-weight:800; letter-spacing:2px; text-transform:uppercase; margin-bottom:14px; }
        .gym-section-heading h2 { font-family:'Poppins',sans-serif; font-size:clamp(1.8rem,4vw,2.5rem); font-weight:900; color:#0a1628; margin-bottom:12px; }
        .gym-section-heading h2 span { background:linear-gradient(135deg,#2563eb,#00d4ff); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; }
        .gym-section-heading p { color:#64748b; font-size:0.95rem; max-width:520px; margin:0 auto; }

        /* ── VICE PRESIDENTS ── */
        .gym-vps { background:#f0f4ff; padding:80px 5%; }
        .gym-vp-grid {
          display:flex; gap:36px; justify-content:center; align-items:stretch;
          flex-wrap:wrap; margin-top:48px;
        }
        .gym-vp-card {
          background:#fff; border-radius:24px; overflow:hidden;
          box-shadow:0 8px 36px rgba(10,22,40,0.1); border:1px solid rgba(10,22,40,0.07);
          transition:transform 0.32s,box-shadow 0.32s;
          width:280px; display:flex; flex-direction:column;
        }
        .gym-vp-card:hover { transform:translateY(-10px); box-shadow:0 24px 56px rgba(10,22,40,0.16); }
        .gym-vp-card-top {
          background:linear-gradient(135deg,#0a1628 0%,#1a3a6b 100%);
          padding:36px 24px 28px; display:flex; flex-direction:column;
          align-items:center; position:relative; overflow:hidden; flex:1;
        }
        .gym-vp-card-top::before { content:''; position:absolute; top:-30px; right:-30px; width:120px; height:120px; border-radius:50%; background:radial-gradient(circle,rgba(0,212,255,0.15),transparent 70%); }
        .gym-vp-card-top::after { content:''; position:absolute; bottom:0; left:0; right:0; height:2px; background:linear-gradient(90deg,#2563eb,#00d4ff,#2563eb); }
        .gym-vp-img-ring {
          position:relative; z-index:1;
          width:130px; height:130px; border-radius:50%;
          padding:3px; background:linear-gradient(135deg,#f5c518,#ff8c00);
          margin-bottom:18px; flex-shrink:0;
        }
        .gym-vp-img-ring img {
          width:100%; height:100%; object-fit:cover; object-position:top;
          border-radius:50%; border:3px solid #0a1628; display:block;
        }
        .gym-vp-card-top h4 { font-family:'Poppins',sans-serif; font-size:1rem; font-weight:800; color:#fff; margin:0 0 4px; position:relative; z-index:1; text-align:center; }
        .gym-vp-card-top p { font-size:0.72rem; color:rgba(255,255,255,0.5); font-weight:600; margin:0; position:relative; z-index:1; text-align:center; }
        .gym-vp-card-bottom { padding:18px 22px; display:flex; align-items:center; justify-content:center; background:#fff; }
        .gym-vp-badge { display:inline-flex; align-items:center; gap:6px; background:#eff6ff; color:#2563eb; border:1px solid #bfdbfe; border-radius:20px; padding:6px 16px; font-size:0.68rem; font-weight:800; letter-spacing:1px; text-transform:uppercase; }

        /* ── CLUB CARDS ── */
        .gym-clubs { background:#fff; padding:80px 5%; }
        .gym-clubs-grid { max-width:1200px; margin:0 auto; display:grid; grid-template-columns:repeat(4,1fr); gap:24px; }
        .gym-club-card { border-radius:22px; overflow:hidden; box-shadow:0 6px 28px rgba(10,22,40,0.09); transition:transform 0.32s,box-shadow 0.32s; text-decoration:none; display:flex; flex-direction:column; border:1px solid rgba(10,22,40,0.06); background:#fff; }
        .gym-club-card:hover { transform:translateY(-10px); box-shadow:0 24px 60px rgba(10,22,40,0.17); }

        /* Image area with centered icon overlay */
        .gym-club-img-wrap { position:relative; width:100%; height:160px; overflow:hidden; }
        .gym-club-img-wrap img { width:100%; height:100%; object-fit:contain; display:block; transition:transform 0.4s; }
        .gym-club-card:hover .gym-club-img-wrap img { transform:scale(1.07); }
        .gym-club-img-overlay { position:absolute; inset:0; background:linear-gradient(to top,rgba(10,22,40,0.78) 0%,rgba(10,22,40,0.25) 55%); }
        /* Big icon pinned center of image — always clearly visible */
        .gym-club-img-tag { position:absolute; bottom:10px; left:12px; background:rgba(255,255,255,0.15); backdrop-filter:blur(6px); border:1px solid rgba(255,255,255,0.25); color:#fff; border-radius:20px; padding:3px 11px; font-size:0.62rem; font-weight:700; letter-spacing:0.8px; text-transform:uppercase; }

        .gym-club-card-body { padding:20px 20px 22px; display:flex; flex-direction:column; flex:1; }
        .gym-club-card-body h3 { font-family:'Poppins',sans-serif; font-size:1.05rem; font-weight:800; color:#0a1628; margin:0 0 8px; }
        .gym-club-card-body p { font-size:0.79rem; color:#64748b; line-height:1.75; margin:0 0 16px; flex:1; }
        .gym-club-card-footer { display:flex; align-items:center; justify-content:space-between; padding-top:12px; border-top:1px solid rgba(10,22,40,0.06); }
        .gym-club-card-link { display:inline-flex; align-items:center; gap:6px; font-size:0.76rem; font-weight:700; font-family:'Poppins',sans-serif; text-decoration:none; transition:gap 0.2s; }
        .gym-club-card:hover .gym-club-card-link { gap:10px; }
        .gym-club-card-arrow { width:28px; height:28px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:0.6rem; color:#fff; transition:transform 0.2s; }
        .gym-club-card:hover .gym-club-card-arrow { transform:translateX(3px); }

        /* ── OBJECTIVES ── */
        .gym-objectives { background:#f8faff; padding:80px 5%; }
        .gym-objectives-inner { max-width:1100px; margin:0 auto; display:flex; gap:64px; align-items:flex-start; flex-wrap:wrap; }
        .gym-obj-left { flex:1 1 280px; }
        .gym-obj-list { flex:1 1 420px; }
        .gym-obj-item { display:flex; align-items:flex-start; gap:16px; padding:18px 20px; background:#fff; border-radius:16px; margin-bottom:12px; box-shadow:0 4px 16px rgba(10,22,40,0.06); border:1px solid rgba(10,22,40,0.05); border-left:4px solid #2563eb; transition:transform 0.2s,box-shadow 0.2s; }
        .gym-obj-item:hover { transform:translateX(6px); box-shadow:0 8px 28px rgba(10,22,40,0.1); }
        .gym-obj-num { width:34px; height:34px; border-radius:10px; background:linear-gradient(135deg,#1a3a6b,#2563eb); color:#fff; font-family:'Poppins',sans-serif; font-size:0.82rem; font-weight:900; display:flex; align-items:center; justify-content:center; flex-shrink:0; }
        .gym-obj-item p { margin:0; font-size:0.87rem; color:#334155; line-height:1.75; }

        /* ── GOALS ── */
        .gym-goals { background:#0a1628; padding:80px 5%; }
        .gym-goals-grid { max-width:1100px; margin:44px auto 0; display:grid; grid-template-columns:repeat(5,1fr); gap:20px; }
        .gym-goal-card { background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.09); border-radius:20px; padding:28px 18px; text-align:center; transition:background 0.25s,transform 0.25s,border-color 0.25s; }
        .gym-goal-card:hover { background:rgba(255,255,255,0.1); transform:translateY(-8px); border-color:rgba(245,197,24,0.3); }
        .gym-goal-icon { font-size:1.85rem; color:#f5c518; margin-bottom:14px; display:block; }
        .gym-goal-card h3 { font-family:'Poppins',sans-serif; font-size:0.88rem; font-weight:700; color:#fff; margin:0 0 8px; }
        .gym-goal-card p { font-size:0.74rem; color:rgba(255,255,255,0.48); line-height:1.75; margin:0; }

        /* ── STRUCTURE ── */
        .gym-structure { background:#fff; padding:80px 5%; }
        .gym-table-wrap { max-width:820px; margin:0 auto; border-radius:20px; overflow:hidden; box-shadow:0 12px 40px rgba(10,22,40,0.1); border:1px solid rgba(10,22,40,0.08); }
        .gym-table { width:100%; border-collapse:collapse; }
        .gym-table th { background:linear-gradient(90deg,#0a1628,#1a3a6b); color:#f5c518; padding:18px 26px; font-family:'Poppins',sans-serif; font-size:0.82rem; font-weight:800; letter-spacing:1px; text-transform:uppercase; text-align:left; }
        .gym-table td { padding:16px 26px; font-size:0.9rem; color:#334155; border-bottom:1px solid rgba(10,22,40,0.06); }
        .gym-table tr:last-child td { border-bottom:none; }
        .gym-table tr:hover td { background:#f0f4ff; }

        /* ── CTA ── */
        .gym-cta { background:linear-gradient(135deg,#1a3a6b,#2563eb); padding:80px 5%; text-align:center; position:relative; overflow:hidden; }
        .gym-cta::before { content:''; position:absolute; inset:0; background:radial-gradient(ellipse at 50% 0%,rgba(0,212,255,0.18),transparent 60%); }
        .gym-cta-inner { max-width:580px; margin:0 auto; position:relative; z-index:1; }
        .gym-cta h2 { font-family:'Poppins',sans-serif; font-size:2.1rem; font-weight:900; color:#fff; margin-bottom:12px; }
        .gym-cta p { color:rgba(255,255,255,0.68); margin-bottom:34px; font-size:0.95rem; line-height:1.75; }
        .gym-cta-btn { display:inline-flex; align-items:center; gap:10px; background:#f5c518; color:#0a1628; padding:16px 38px; border-radius:50px; font-family:'Poppins',sans-serif; font-size:1rem; font-weight:800; text-decoration:none; transition:all 0.3s; box-shadow:0 8px 30px rgba(245,197,24,0.38); }
        .gym-cta-btn:hover { transform:translateY(-4px); box-shadow:0 16px 40px rgba(245,197,24,0.55); }

        /* ── RESPONSIVE ── */
        @media(max-width:1100px){ .gym-clubs-grid { grid-template-columns:repeat(2,1fr); } .gym-goals-grid { grid-template-columns:repeat(3,1fr); } }
        @media(max-width:900px){ .gym-hero-content { flex-direction:column; gap:36px; } .gym-hero-left { text-align:center; } .gym-hero-left > p { margin:0 auto; } .gym-hero-badges { flex-direction:row; flex-wrap:wrap; justify-content:center; } }
        @media(max-width:768px){ .gym-stats-bar { grid-template-columns:repeat(2,1fr); margin-top:20px; } .gym-president-inner { flex-direction:column; padding:36px 28px; gap:28px; } .gym-clubs-grid { grid-template-columns:1fr 1fr; } .gym-goals-grid { grid-template-columns:repeat(2,1fr); } .gym-objectives-inner { gap:32px; } }
        @media(max-width:560px){ .gym-clubs-grid { grid-template-columns:1fr; } .gym-goals-grid { grid-template-columns:1fr 1fr; } .gym-vp-grid { flex-direction:column; align-items:center; } .gym-vp-card { width:100%; max-width:340px; } }
        @media(max-width:400px){ .gym-goals-grid { grid-template-columns:1fr; } }
      `}),e.jsx("section",{className:"gym-hero",children:e.jsxs("div",{className:"gym-hero-content",children:[e.jsxs("div",{className:"gym-hero-left",children:[e.jsxs("div",{className:"gym-hero-chip",children:[e.jsx("i",{className:"fa-solid fa-building-columns"})," Creative Techno College · Student Wing"]}),e.jsxs("h1",{children:["GYM",e.jsx("em",{children:"KHANA"})]}),e.jsx("p",{className:"gym-hero-sub",children:"Technocrat · Sports · Cultural · Disha & CSR"}),e.jsx("p",{children:"The vibrant hub of student life, leadership, and creativity at Creative Techno College, Angul. Four dynamic clubs empowering students to explore passions, showcase talents, and develop essential life skills beyond academics."})]}),e.jsx("div",{className:"gym-hero-right",children:e.jsxs("div",{className:"gym-hero-badges",children:[zp.map((r,s)=>e.jsxs("span",{className:"gym-hero-badge",children:[e.jsx("span",{className:"gym-hero-badge-dot",style:{background:r.color}}),e.jsx("i",{className:r.icon,style:{color:r.color}})," ",r.name]},s)),e.jsxs("span",{className:"gym-hero-badge",children:[e.jsx("span",{className:"gym-hero-badge-dot",style:{background:"#f5c518"}}),e.jsx("i",{className:"fa-solid fa-users",style:{color:"#f5c518"}})," 200+ Active Members"]})]})})]})}),e.jsx("div",{className:"gym-stats-wrap",children:e.jsx("div",{className:"gym-stats-bar",children:[["4","Active Clubs"],["200+","Student Members"],["50+","Events Yearly"],["100%","Participation"]].map(([r,s],o)=>e.jsxs("div",{className:"gym-stat",children:[e.jsx("span",{className:"gym-stat-num",children:r}),e.jsx("span",{className:"gym-stat-label",children:s})]},o))})}),e.jsx("section",{className:"gym-president",children:e.jsxs("div",{className:"gym-president-inner",children:[e.jsx("div",{className:"gym-president-img-wrap",children:e.jsx("img",{src:"/CTC NEW REACT WEBSITE/images/GYMKHANA/Dean Sir.png",alt:"Mr. Manoj Das"})}),e.jsxs("div",{className:"gym-president-text",children:[e.jsx("div",{className:"gym-president-pill",children:"Message from the President"}),e.jsxs("h2",{children:["A Message from Our ",e.jsx("span",{children:"President"})]}),e.jsx("p",{children:'"At Creative Techno College, we believe education is not confined to classrooms. True learning happens when students step beyond books and engage in experiences that shape their personality, values, and leadership qualities.'}),e.jsx("p",{children:'The Gymkhana embodies this spirit — through the four vibrant clubs — Technocrat, Sports, Cultural, and Disha+CSR — we nurture innovation, teamwork, cultural expression, and social responsibility."'}),e.jsx("p",{className:"gym-president-sig",children:"— Mr. Manoj Das  |  Dean Academic & President, Gymkhana"})]})]})}),e.jsxs("section",{className:"gym-vps",children:[e.jsxs("div",{className:"gym-section-heading",children:[e.jsxs("div",{className:"gym-section-pill",children:[e.jsx("i",{className:"fa-solid fa-users"})," Leadership"]}),e.jsxs("h2",{children:["Vice ",e.jsx("span",{children:"Presidents"})]}),e.jsx("p",{children:"Student representatives who lead the Gymkhana alongside the President."})]}),e.jsx("div",{className:"gym-vp-grid",children:[{name:"Mr. Subham Nanda",role:"Vice President",badge:"Boy Representative",img:"/CTC NEW REACT WEBSITE/images/GYMKHANA/subham.jpeg",icon:"fa-solid fa-mars"},{name:"Ms. Bidusmita Mishra",role:"Vice President",badge:"Girl Representative",img:"/CTC NEW REACT WEBSITE/images/GYMKHANA/bidusmita.jpeg",icon:"fa-solid fa-venus"}].map((r,s)=>e.jsxs("div",{className:"gym-vp-card",children:[e.jsxs("div",{className:"gym-vp-card-top",children:[e.jsx("div",{className:"gym-vp-img-ring",children:e.jsx("img",{src:r.img,alt:r.name})}),e.jsx("h4",{children:r.name}),e.jsx("p",{children:r.role})]}),e.jsx("div",{className:"gym-vp-card-bottom",children:e.jsxs("span",{className:"gym-vp-badge",children:[e.jsx("i",{className:r.icon})," ",r.badge]})})]},s))})]}),e.jsxs("section",{className:"gym-clubs",children:[e.jsxs("div",{className:"gym-section-heading",children:[e.jsxs("div",{className:"gym-section-pill",children:[e.jsx("i",{className:"fa-solid fa-layer-group"})," Our Clubs"]}),e.jsxs("h2",{children:["Clubs Under ",e.jsx("span",{children:"Gymkhana"})]}),e.jsx("p",{children:"Click any club to explore its activities, team, and achievements."})]}),e.jsx("div",{className:"gym-clubs-grid",children:zp.map((r,s)=>e.jsxs(Se,{to:r.to,className:"gym-club-card",children:[e.jsxs("div",{className:"gym-club-img-wrap",children:[e.jsx("img",{src:r.img,alt:r.name}),e.jsx("div",{className:"gym-club-img-overlay"}),e.jsx("div",{className:"gym-club-img-icon",style:{background:r.bg},children:e.jsx("i",{className:r.icon})}),e.jsx("span",{className:"gym-club-img-tag",children:r.tag})]}),e.jsxs("div",{className:"gym-club-card-body",children:[e.jsx("h3",{children:r.name}),e.jsx("p",{children:r.desc}),e.jsxs("div",{className:"gym-club-card-footer",children:[e.jsxs("span",{className:"gym-club-card-link",style:{color:r.color},children:["Explore Club ",e.jsx("i",{className:"fa-solid fa-arrow-right",style:{fontSize:"0.68rem"}})]}),e.jsx("div",{className:"gym-club-card-arrow",style:{background:r.bg},children:e.jsx("i",{className:"fa-solid fa-chevron-right"})})]})]})]},s))})]}),e.jsx("section",{className:"gym-objectives",children:e.jsxs("div",{className:"gym-objectives-inner",children:[e.jsxs("div",{className:"gym-obj-left",children:[e.jsxs("div",{className:"gym-section-pill",children:[e.jsx("i",{className:"fa-solid fa-bullseye"})," Purpose"]}),e.jsxs("h2",{style:{fontFamily:"Poppins,sans-serif",fontSize:"clamp(1.8rem,4vw,2.4rem)",fontWeight:900,color:"#0a1628",margin:"14px 0 14px"},children:["Objectives of"," ",e.jsx("span",{style:{background:"linear-gradient(135deg,#2563eb,#00d4ff)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},children:"Gymkhana"})]}),e.jsx("p",{style:{color:"#64748b",fontSize:"0.93rem",lineHeight:1.8},children:"Our guiding principles that shape every event, club, and initiative we undertake."})]}),e.jsx("div",{className:"gym-obj-list",children:X0.map((r,s)=>e.jsxs("div",{className:"gym-obj-item",children:[e.jsx("div",{className:"gym-obj-num",children:s+1}),e.jsx("p",{children:r})]},s))})]})}),e.jsxs("section",{className:"gym-goals",children:[e.jsxs("div",{className:"gym-section-heading",children:[e.jsxs("div",{className:"gym-section-pill",style:{background:"rgba(245,197,24,0.15)",color:"#f5c518",border:"1px solid rgba(245,197,24,0.3)"},children:[e.jsx("i",{className:"fa-solid fa-flag"})," Our Goals"]}),e.jsxs("h2",{style:{color:"#fff",fontFamily:"Poppins,sans-serif",fontSize:"clamp(1.8rem,4vw,2.5rem)",fontWeight:900,margin:"0 0 12px"},children:["What We ",e.jsx("span",{style:{color:"#f5c518"},children:"Strive For"})]})]}),e.jsx("div",{className:"gym-goals-grid",children:Z0.map((r,s)=>e.jsxs("div",{className:"gym-goal-card",children:[e.jsx("i",{className:`${r.icon} gym-goal-icon`}),e.jsx("h3",{children:r.title}),e.jsx("p",{children:r.desc})]},s))})]}),e.jsxs("section",{className:"gym-structure",children:[e.jsxs("div",{className:"gym-section-heading",children:[e.jsxs("div",{className:"gym-section-pill",children:[e.jsx("i",{className:"fa-solid fa-sitemap"})," Organisation"]}),e.jsxs("h2",{children:["Structure of ",e.jsx("span",{children:"Gymkhana"})]})]}),e.jsx("div",{className:"gym-table-wrap",children:e.jsxs("table",{className:"gym-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Role"}),e.jsx("th",{children:"Name / Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"President"})}),e.jsx("td",{children:"Mr. Manoj Das (Dean Academic)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Vice Presidents"})}),e.jsx("td",{children:"Mr. Subham Nanda (Boy) & Ms. Bidusmita Mishra (Girl)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Club Secretaries"})}),e.jsx("td",{children:"One boy & one girl student for each of the four clubs"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Student Members"})}),e.jsx("td",{children:"Active participants across all academic programs"})]})]})]})})]})]})}const Oo=[{key:"all",label:"All Photos",icon:"fa-solid fa-images"},{key:"campus",label:"Campus",icon:"fa-solid fa-building-columns"},{key:"events",label:"Events",icon:"fa-solid fa-calendar-star"},{key:"alumni",label:"Alumni",icon:"fa-solid fa-graduation-cap"},{key:"workshop",label:"Workshop",icon:"fa-solid fa-wrench"},{key:"activities",label:"Activities",icon:"fa-solid fa-person-running"},{key:"tour",label:"Tour",icon:"fa-solid fa-plane-departure"}],tx=[...["campus1","campus2","campus3","campus4","campus5","campus6"].map((r,s)=>({src:`/CTC%20NEW%20REACT%20WEBSITE/images/GALLERY/${r}.jpg`,cat:"campus",alt:`Campus ${s+1}`,caption:"CTC Campus"})),...["event1","event2","event3","event4","event5","event6"].map((r,s)=>({src:`/CTC%20NEW%20REACT%20WEBSITE/images/GALLERY/${r}.jpg`,cat:"events",alt:`Event ${s+1}`,caption:"College Events"})),...["alumni1","alumni2","alumni3","alumni4","alumni5","alumni6"].map((r,s)=>({src:`/CTC%20NEW%20REACT%20WEBSITE/images/GALLERY/${r}.jpg`,cat:"alumni",alt:`Alumni ${s+1}`,caption:"Alumni Meet"})),...["workshop1","workshop2","workshop3","workshop4","workshop5","workshop6"].map((r,s)=>({src:`/CTC%20NEW%20REACT%20WEBSITE/images/GALLERY/${r}.jpg`,cat:"workshop",alt:`Workshop ${s+1}`,caption:"Skill Workshops"})),...["Activity1","Activity2","Activity3","Activity4","Activity5","Activity6"].map((r,s)=>({src:`/CTC%20NEW%20REACT%20WEBSITE/images/GALLERY/${r}.jpg`,cat:"activities",alt:`Activity ${s+1}`,caption:"Student Activities"})),...["tour1","tour2","tour3","tour4","tour5","tour6"].map((r,s)=>({src:`/CTC%20NEW%20REACT%20WEBSITE/images/GALLERY/${r}.jpg`,cat:"tour",alt:`Tour ${s+1}`,caption:"Educational Tours"}))],Mp=["tall","wide","normal","normal","tall","normal","wide","normal","normal","tall","normal","wide"],en=tx.map((r,s)=>({...r,size:Mp[s%Mp.length]}));function ax(){var b;const[r,s]=v.useState("all"),[o,c]=v.useState(null),[m,p]=v.useState({}),u=r==="all"?en:en.filter(y=>y.cat===r),x=v.useCallback(y=>{o!==null&&(y.key==="ArrowRight"&&c(g=>(g+1)%u.length),y.key==="ArrowLeft"&&c(g=>(g-1+u.length)%u.length),y.key==="Escape"&&c(null))},[o,u.length]);v.useEffect(()=>(window.addEventListener("keydown",x),()=>window.removeEventListener("keydown",x)),[x]),v.useEffect(()=>(document.body.style.overflow=o!==null?"hidden":"",()=>{document.body.style.overflow=""}),[o]);const h=o!==null?u[o]:null;return e.jsxs(e.Fragment,{children:[e.jsx(Na,{title:"Campus Gallery – CTC Angul | Campus Life, Events & Achievements",description:"Explore the vibrant campus life at Creative Techno College, Angul through our photo gallery. Events, sports, cultural programs, workshops, alumni meets and more.",keywords:"CTC angul gallery, creative techno college campus, college life angul, CTC events photos",canonical:"/gallery"}),e.jsxs("div",{className:"gl-hero",children:[e.jsx("div",{className:"gl-hero-glow"}),e.jsxs("div",{className:"gl-hero-inner",children:[e.jsx("span",{className:"section-label",style:{color:"var(--cyan)"},children:"Visual Showcase"}),e.jsxs("h1",{children:["Our ",e.jsx("span",{style:{color:"var(--gold)"},children:"Gallery"})]}),e.jsx("p",{children:"Moments that define the Creative Techno College experience — campus life, events, achievements & beyond."}),e.jsxs("div",{className:"gl-hero-pills",children:[e.jsxs("span",{className:"gl-pill",children:[e.jsx("i",{className:"fa-solid fa-images"})," ",en.length," Photos"]}),e.jsxs("span",{className:"gl-pill",children:[e.jsx("i",{className:"fa-solid fa-folder-open"})," ",Oo.length-1," Categories"]}),e.jsxs("span",{className:"gl-pill",children:[e.jsx("i",{className:"fa-solid fa-calendar-days"})," 2018 – 2024"]})]})]}),e.jsx("div",{className:"gl-hero-wave",children:e.jsx("svg",{viewBox:"0 0 1440 60",preserveAspectRatio:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M0,0 C360,60 1080,0 1440,40 L1440,60 L0,60 Z",fill:"var(--page-bg)"})})})]}),e.jsxs("div",{className:"gl-filters-wrap",children:[e.jsx("div",{className:"gl-filters",children:Oo.map(y=>e.jsxs("button",{className:`gl-filter-btn${r===y.key?" active":""}`,onClick:()=>{s(y.key),c(null)},children:[e.jsx("i",{className:y.icon}),y.label,r===y.key&&e.jsx("span",{className:"gl-filter-count",children:y.key==="all"?en.length:en.filter(g=>g.cat===y.key).length})]},y.key))}),e.jsxs("p",{className:"gl-count-label",children:["Showing ",e.jsx("strong",{children:u.length})," of ",e.jsx("strong",{children:en.length})," photos"]})]}),e.jsx("div",{className:"gl-grid-wrap",children:e.jsx("div",{className:"gl-grid",children:u.map((y,g)=>e.jsxs("div",{className:`gl-item gl-item-${y.size}`,onClick:()=>c(g),style:{animationDelay:`${g%12*.04}s`},children:[e.jsx("img",{src:y.src,alt:y.alt,loading:"lazy",onLoad:()=>p(T=>({...T,[y.src]:!0})),onError:T=>{T.target.closest(".gl-item").style.display="none"}}),e.jsx("div",{className:"gl-item-overlay",children:e.jsxs("div",{className:"gl-item-overlay-inner",children:[e.jsx("i",{className:"fa-solid fa-magnifying-glass-plus"}),e.jsx("span",{children:y.caption})]})})]},`${y.cat}-${g}`))},r)}),h&&e.jsxs("div",{className:"gl-lightbox",onClick:y=>{y.target===y.currentTarget&&c(null)},role:"dialog","aria-modal":"true",children:[e.jsx("button",{className:"gl-lb-close",onClick:()=>c(null),"aria-label":"Close",children:e.jsx("i",{className:"fa-solid fa-xmark"})}),e.jsx("button",{className:"gl-lb-nav gl-lb-prev",onClick:()=>c(y=>(y-1+u.length)%u.length),"aria-label":"Previous",children:e.jsx("i",{className:"fa-solid fa-chevron-left"})}),e.jsxs("div",{className:"gl-lb-panel",children:[e.jsx("img",{className:"gl-lb-img",src:h.src,alt:h.alt},h.src),e.jsxs("div",{className:"gl-lb-caption",children:[e.jsx("span",{className:"gl-lb-cat",children:(b=Oo.find(y=>y.key===h.cat))==null?void 0:b.label}),e.jsxs("span",{className:"gl-lb-count",children:[o+1," / ",u.length]})]}),e.jsx("div",{className:"gl-lb-thumbs",children:u.map((y,g)=>e.jsx("div",{className:`gl-lb-thumb${o===g?" active":""}`,onClick:()=>c(g),children:e.jsx("img",{src:y.src,alt:"",loading:"lazy"})},g))})]}),e.jsx("button",{className:"gl-lb-nav gl-lb-next",onClick:()=>c(y=>(y+1)%u.length),"aria-label":"Next",children:e.jsx("i",{className:"fa-solid fa-chevron-right"})})]})]})}const nx=[{icon:"fa-solid fa-phone-volume",label:"Admissions Helpline",val:"+91 9778427170",href:"tel:+919778427170",color:"#00d4ff"},{icon:"fa-solid fa-envelope-open-text",label:"Principal Email",val:"principal.creativecollege@gmail.com",href:"mailto:principal.creativecollege@gmail.com",color:"#f5c518"},{icon:"fa-solid fa-location-dot",label:"Campus Address",val:"Baluakata, Saradhapur, Angul – 759143",href:"https://maps.google.com/?q=Creative+Techno+College+Angul",color:"#7b61ff"},{icon:"fa-brands fa-whatsapp",label:"WhatsApp",val:"+91 9668844571",href:"https://wa.me/919668844571",color:"#25d366"}],Vo=[{key:"academic",icon:"fa-solid fa-book-open",title:"Academic & Student Support",color:"#0d7ff5",cards:[{title:"Academic Support",icon:"fa-solid fa-chalkboard-user",people:[{name:"Mr. Bhabani Sankar Sahoo",phone:["+91 9668844571"],email:"bhabaniwipro89@gmail.com"}]},{title:"Examination & Certificates",icon:"fa-solid fa-file-certificate",people:[{name:"Mr. Krishnasis Mishra",phone:["+91 8249090003"],email:"principal.creativecollege@gmail.com"}]},{title:"Counselling & Wellness",icon:"fa-solid fa-heart-pulse",people:[{name:"Respective Batch Mentor"}]}]},{key:"career",icon:"fa-solid fa-briefcase",title:"Training & Career Development",color:"#f5c518",cards:[{title:"Training & Placement",icon:"fa-solid fa-briefcase",people:[{name:"Mr. Bhabani S. Sahoo",phone:["+91 9668844571"],email:"bhabaniwipro89@gmail.com"},{name:"Mr. Subhrajyoti Behera",phone:["+91 9861071840"],email:"subhyrajyoticafpl@gmail.com"}]},{title:"DISHA",icon:"fa-solid fa-hands-holding-child",people:[{name:"Mr. Subhrajyoti Behera",phone:["+91 9861071840"],email:"subhyrajyoticafpl@gmail.com"},{name:"Ms. Neha Solanki",phone:[""],email:"nehasolanki1411@gmail.com"}]},{title:"Technocrat Club",icon:"fa-solid fa-microchip",people:[{name:"Mr. Bhabani S. Sahoo",phone:["+91 9668844571"]},{name:"Mr. Swastik R. Sahoo",phone:["+91 6372877833"],email:"sahooswastik406@gmail.com"}]},{title:"Alumni",icon:"fa-solid fa-graduation-cap",people:[{name:"Mr. Krishnasis Mishra",phone:["+91 8249090003"],email:"principal.creativecollege@gmail.com"}]}]},{key:"hostel",icon:"fa-solid fa-house-user",title:"Hostel & Transport",color:"#7b61ff",cards:[{title:"Transport Services",icon:"fa-solid fa-bus-simple",people:[{name:"Mr. Satya S. S. Dehury",phone:["+91 9439137384"],email:"sssdehury89@gmail.com"},{name:"Mr. Sarat C. Sahu",phone:["+91 9853167581"],email:"saratmuna243@gmail.com"}]},{title:"Hostel (Boys)",icon:"fa-solid fa-bed",people:[{name:"Mr. Satya S. S. Dehury",phone:["+91 9439137384"]},{name:"Mr. Raghunath Behera",phone:["+91 8984949923"]}]},{title:"Hostel (Girls)",icon:"fa-solid fa-bed",people:[{name:"Ms. Nibedita Patra",phone:["+91 7606878160"],email:"nibedita.patra2903@gmail.com"},{name:"Ms. Arghyarupa Behera",phone:["+91 9827465376"],email:"arghyarupabehera3@gmail.com"}]}]},{key:"admin",icon:"fa-solid fa-landmark",title:"Administration & Finance",color:"#ff6b6b",cards:[{title:"General Administration",icon:"fa-solid fa-building",people:[{name:"Mr. Manoj Kumar Das",phone:["+91 9338233303","+91 7008574320"],email:"dasmanojp@gmail.com"}]},{title:"Scholarship & Financial Aid",icon:"fa-solid fa-hand-holding-dollar",people:[{name:"Mr. Subhrajyoti Behera",phone:["+91 9861071840"],email:"subhyrajyoticafpl@gmail.com"}]},{title:"Fees & Payments",icon:"fa-solid fa-receipt",people:[{name:"Mr. Abhisek Satpathy",phone:["+91 8260077588"],email:"abhisheksathpathy020@gmail.com"}]},{title:"Admissions Front Office",icon:"fa-solid fa-door-open",people:[{name:"Front Office",phone:["+91 9778427170","+91 9668284222","+91 9668332555"]}]}]},{key:"services",icon:"fa-solid fa-building-columns",title:"Other Services",color:"#25d366",cards:[{title:"Library",icon:"fa-solid fa-book",people:[{name:"Ms. Monika Sahu",phone:["+91 9668284222"],email:"monika28sahu@gmail.com"}]},{title:"Canteen",icon:"fa-solid fa-utensils",people:[{name:"Mr. Sarat C. Sahu",phone:["+91 9853167581"],email:"saratmuna243@gmail.com"},{name:"Mr. Ranjan Das",phone:["+91 8917466271"]}]},{title:"CSR & Sports",icon:"fa-solid fa-trophy",people:[{name:"Mr. Satya S. S. Dehury",phone:["+91 9439137384"],email:"sssdehury89@gmail.com"}]}]}];function rx({name:r,phone:s,email:o}){return e.jsxs("div",{className:"ct-person",children:[r&&e.jsxs("p",{children:[e.jsx("i",{className:"fa-solid fa-user"}),e.jsx("strong",{children:r})]}),s==null?void 0:s.map((c,m)=>e.jsxs("p",{children:[e.jsx("i",{className:"fa-solid fa-phone"}),e.jsx("a",{href:`tel:${c.replace(/\s/g,"")}`,children:c})]},m)),o&&e.jsxs("p",{children:[e.jsx("i",{className:"fa-solid fa-envelope"}),e.jsx("a",{href:`mailto:${o}`,style:{wordBreak:"break-all"},children:o})]})]})}function ix({title:r,icon:s,people:o}){return e.jsxs("div",{className:"ct-card",children:[e.jsxs("div",{className:"ct-card-title",children:[e.jsx("i",{className:s}),r]}),o.map((c,m)=>e.jsx(rx,{...c},m))]})}function sx(){const[r,s]=v.useState({name:"",phone:"",email:"",dept:"",msg:""}),[o,c]=v.useState(!1),m=(u,x)=>s(h=>({...h,[u]:x}));function p(u){u.preventDefault();const x=`*CTC Enquiry*
Name: ${r.name}
Phone: ${r.phone}
Email: ${r.email||"—"}
Dept: ${r.dept||"—"}
Message: ${r.msg}`;window.open(`https://wa.me/919668844571?text=${encodeURIComponent(x)}`,"_blank"),c(!0)}return o?e.jsxs("div",{className:"ct-form-success",children:[e.jsx("i",{className:"fa-solid fa-circle-check"}),e.jsx("h3",{children:"Message Sent!"}),e.jsx("p",{children:"Your enquiry has been forwarded via WhatsApp. We'll get back to you shortly."}),e.jsx("button",{className:"btn-primary",onClick:()=>c(!1),children:"Send Another"})]}):e.jsxs("form",{className:"ct-form",onSubmit:p,children:[e.jsxs("div",{className:"ct-form-row",children:[e.jsxs("div",{className:"ct-form-field",children:[e.jsx("label",{children:"Full Name *"}),e.jsx("input",{required:!0,placeholder:"Your name",value:r.name,onChange:u=>m("name",u.target.value)})]}),e.jsxs("div",{className:"ct-form-field",children:[e.jsx("label",{children:"Mobile Number *"}),e.jsx("input",{required:!0,type:"tel",placeholder:"+91 XXXXX XXXXX",value:r.phone,onChange:u=>m("phone",u.target.value)})]})]}),e.jsxs("div",{className:"ct-form-row",children:[e.jsxs("div",{className:"ct-form-field",children:[e.jsx("label",{children:"Email Address"}),e.jsx("input",{type:"email",placeholder:"Optional",value:r.email,onChange:u=>m("email",u.target.value)})]}),e.jsxs("div",{className:"ct-form-field",children:[e.jsx("label",{children:"Department"}),e.jsxs("select",{value:r.dept,onChange:u=>m("dept",u.target.value),children:[e.jsx("option",{value:"",children:"Select Department"}),Vo.map(u=>e.jsx("option",{children:u.title},u.key)),e.jsx("option",{children:"Admissions"}),e.jsx("option",{children:"Other"})]})]})]}),e.jsxs("div",{className:"ct-form-field",children:[e.jsx("label",{children:"Your Message *"}),e.jsx("textarea",{required:!0,rows:4,placeholder:"Write your query or message here…",value:r.msg,onChange:u=>m("msg",u.target.value)})]}),e.jsxs("button",{type:"submit",className:"ct-form-submit",children:[e.jsx("i",{className:"fa-brands fa-whatsapp"})," Send via WhatsApp"]})]})}function ox(){const[r,s]=v.useState(""),[o,c]=v.useState("all"),m=Vo.filter(p=>o==="all"||p.key===o).map(p=>({...p,cards:p.cards.filter(u=>{if(!r.trim())return!0;const x=r.toLowerCase();return u.title.toLowerCase().includes(x)||u.people.some(h=>{var b,y,g;return((b=h.name)==null?void 0:b.toLowerCase().includes(x))||((y=h.phone)==null?void 0:y.some(T=>T.includes(x)))||((g=h.email)==null?void 0:g.toLowerCase().includes(x))})})})).filter(p=>p.cards.length>0);return e.jsxs(e.Fragment,{children:[e.jsx(Na,{title:"Contact Creative Techno College – Angul, Odisha | Phone, Address & Map",description:"Contact Creative Techno College (CTC), Angul. Campus address: Baluakata, Saradhapur, Angul 759143. Admissions helpline: +91-9778427170. Email: principal.creativecollege@gmail.com. Open Mon–Sat, 9AM–5PM.",keywords:"creative techno college contact, CTC angul phone number, CTC angul address, college in angul contact, creative college angul helpline",canonical:"/contacts"}),e.jsxs("div",{className:"ct-hero",children:[e.jsx("div",{className:"ct-hero-glow"}),e.jsxs("div",{className:"ct-hero-inner",children:[e.jsx("span",{className:"section-label",style:{color:"var(--cyan)"},children:"Reach Out"}),e.jsxs("h1",{children:["Helpline ",e.jsx("span",{style:{color:"var(--gold)"},children:"Contacts"})]}),e.jsx("p",{children:"Find the right person for your query — our team is here to help."}),e.jsxs("div",{className:"ct-search-wrap",children:[e.jsx("i",{className:"fa-solid fa-magnifying-glass"}),e.jsx("input",{className:"ct-search",type:"text",placeholder:"Search by name, department, phone…",value:r,onChange:p=>s(p.target.value)}),r&&e.jsx("button",{className:"ct-search-clear",onClick:()=>s(""),children:e.jsx("i",{className:"fa-solid fa-xmark"})})]})]}),e.jsx("div",{className:"ct-hero-wave",children:e.jsx("svg",{viewBox:"0 0 1440 60",preserveAspectRatio:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M0,0 C360,60 1080,0 1440,40 L1440,60 L0,60 Z",fill:"var(--page-bg)"})})})]}),e.jsx("div",{className:"ct-quick-wrap",children:e.jsx("div",{className:"ct-quick-grid",children:nx.map((p,u)=>e.jsxs("a",{href:p.href,className:"ct-quick-card",target:p.href.startsWith("http")?"_blank":void 0,rel:"noreferrer",children:[e.jsx("div",{className:"ct-quick-icon",style:{background:`${p.color}18`,border:`1.5px solid ${p.color}44`},children:e.jsx("i",{className:p.icon,style:{color:p.color}})}),e.jsxs("div",{children:[e.jsx("p",{className:"ct-quick-label",children:p.label}),e.jsx("p",{className:"ct-quick-val",children:p.val})]}),e.jsx("i",{className:"fa-solid fa-arrow-up-right-from-square ct-quick-ext"})]},u))})}),e.jsx("div",{className:"ct-tabs-wrap",children:e.jsxs("div",{className:"ct-tabs",children:[e.jsxs("button",{className:`ct-tab${o==="all"?" active":""}`,onClick:()=>c("all"),children:[e.jsx("i",{className:"fa-solid fa-grip"})," All Departments"]}),Vo.map(p=>e.jsxs("button",{className:`ct-tab${o===p.key?" active":""}`,onClick:()=>c(p.key),children:[e.jsx("i",{className:p.icon})," ",p.title.split(" ")[0]]},p.key))]})}),e.jsx("div",{className:"ct-body",children:m.length===0?e.jsxs("div",{className:"ct-no-results",children:[e.jsx("i",{className:"fa-solid fa-magnifying-glass"}),e.jsxs("p",{children:['No contacts found for "',e.jsx("strong",{children:r}),'"']}),e.jsx("button",{className:"btn-outline",onClick:()=>s(""),children:"Clear Search"})]}):m.map(p=>e.jsxs("div",{className:"ct-dept",children:[e.jsxs("div",{className:"ct-dept-header",style:{"--dc":p.color},children:[e.jsx("div",{className:"ct-dept-icon",children:e.jsx("i",{className:p.icon})}),e.jsx("h2",{children:p.title}),e.jsxs("span",{className:"ct-dept-count",children:[p.cards.length," contact",p.cards.length!==1?"s":""]})]}),e.jsx("div",{className:"ct-cards-grid",children:p.cards.map((u,x)=>e.jsx(ix,{...u},x))})]},p.key))}),e.jsx("section",{className:"ct-map-section",children:e.jsxs("div",{className:"ct-map-inner",children:[e.jsxs("div",{className:"ct-map-box",children:[e.jsxs("div",{className:"ct-map-header",children:[e.jsx("i",{className:"fa-solid fa-location-dot"}),e.jsxs("div",{children:[e.jsx("h3",{children:"Find Us"}),e.jsx("p",{children:"Creative Techno College, Angul"})]})]}),e.jsx("div",{className:"ct-map-embed",children:e.jsx("iframe",{title:"CTC Campus Map",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3731.4!2d85.0964!3d20.8400!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19f3c6f2bd7d01%3A0x9b7694f44f8e2b1c!2sCreative+Techno+College!5e0!3m2!1sen!2sin!4v1",allowFullScreen:"",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade"})}),e.jsxs("div",{className:"ct-address-list",children:[e.jsxs("div",{className:"ct-addr-row",children:[e.jsx("i",{className:"fa-solid fa-building-columns"}),e.jsxs("span",{children:[e.jsx("strong",{children:"Campus:"})," Baluakata, Saradhapur, Angul, Odisha – 759143"]})]}),e.jsxs("div",{className:"ct-addr-row",children:[e.jsx("i",{className:"fa-solid fa-city"}),e.jsxs("span",{children:[e.jsx("strong",{children:"City Office:"})," Tamrit Colony, Angul"]})]}),e.jsxs("div",{className:"ct-addr-row",children:[e.jsx("i",{className:"fa-solid fa-clock"}),e.jsxs("span",{children:[e.jsx("strong",{children:"Office Hours:"})," Mon – Sat, 9:00 AM – 5:00 PM"]})]})]})]}),e.jsxs("div",{className:"ct-form-box",children:[e.jsxs("div",{className:"ct-form-header",children:[e.jsx("i",{className:"fa-brands fa-whatsapp"}),e.jsxs("div",{children:[e.jsx("h3",{children:"Send an Enquiry"}),e.jsx("p",{children:"We'll respond via WhatsApp within 24 hours"})]})]}),e.jsx(sx,{})]})]})})]})}function lx(){v.useEffect(()=>{const r=document.querySelectorAll(".rv, .rv-l, .rv-r"),s=new IntersectionObserver(o=>o.forEach(c=>{c.isIntersecting&&c.target.classList.add("visible")}),{threshold:.08});return r.forEach(o=>s.observe(o)),()=>s.disconnect()},[])}const wm={resolution:[{date:"04-10-2024",pdf:"/CTC NEW REACT WEBSITE/images/ICC/1.pdf",label:"ICC Resolution — October 2024"}],committee:[{date:"01-05-2025",pdf:"/CTC NEW REACT WEBSITE/images/ICC/8.pdf",label:"Committee Members — May 2025"},{date:"18-03-2025",pdf:"/CTC NEW REACT WEBSITE/images/ICC/7.pdf",label:"Committee Members — March 2025"},{date:"05-12-2024",pdf:"/CTC NEW REACT WEBSITE/images/ICC/6.pdf",label:"Committee Members — December 2024"},{date:"05-10-2024",pdf:"/CTC NEW REACT WEBSITE/images/ICC/2.pdf",label:"Committee Members — October 2024"}],events:[{date:"05-12-2024",pdf:"/CTC NEW REACT WEBSITE/images/ICC/4.pdf",label:"Awareness Program — December 2024"},{date:"25-11-2024",pdf:"/CTC NEW REACT WEBSITE/images/ICC/5.pdf",label:"Gender Sensitization — November 2024"}],vision:[{date:"05-10-2024",pdf:"/CTC NEW REACT WEBSITE/images/ICC/3.pdf",label:"ICC Vision Document — October 2024"}]},cx=[{icon:"fa-hand",text:"Physical contact and advances"},{icon:"fa-comment-slash",text:"Sexually colored remarks"},{icon:"fa-user-lock",text:"Request for sexual favors"},{icon:"fa-eye-slash",text:"Showing pornography"},{icon:"fa-triangle-exclamation",text:"Other unwelcome sexual conduct"}],dx=["Ensure safe work and academic environment for staff and students.","Deliver impartial justice in sexual harassment cases.","Promote gender equity policies across the institution.","Organize awareness and sensitization programs.","Display institutional policies publicly.","Publish ICC members list and contact details.","Develop transparent complaint mechanism.","Conduct inquiries based on principles of natural justice.","Recommend corrective and preventive action.","Monitor implementation and follow-ups.","Provide emotional and psychological support to complainants."],px=[{id:"about",label:"About",icon:"fa-circle-info"},{id:"resolution",label:"Resolution",icon:"fa-gavel"},{id:"committee",label:"Committee",icon:"fa-users"},{id:"events",label:"Events",icon:"fa-calendar-days"},{id:"vision",label:"Vision",icon:"fa-eye"}];function mx({onClose:r}){const s=v.useRef(null);v.useEffect(()=>{const p=u=>{u.key==="Escape"&&r()};return document.addEventListener("keydown",p),document.body.style.overflow="hidden",()=>{document.removeEventListener("keydown",p),document.body.style.overflow=""}},[r]);const o=p=>{p.target===s.current&&r()},c=()=>{const p=document.createElement("a");p.href="/CTC NEW REACT WEBSITE/images/ICC/form.pdf",p.download="ICC_Complaint_Form.pdf",p.click()};return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
    @keyframes modalIn{from{opacity:0;transform:scale(0.92) translateY(20px);}to{opacity:1;transform:none;}}
    .icc-backdrop{position:fixed;inset:0;background:rgba(5,15,35,0.75);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);z-index:1000;display:flex;align-items:center;justify-content:center;padding:20px;}
    .icc-modal{background:#fff;border-radius:24px;width:100%;max-width:460px;overflow:hidden;box-shadow:0 32px 80px rgba(0,0,0,0.35);animation:modalIn 0.35s cubic-bezier(0.4,0,0.2,1) both;}
    .icc-modal-header{background:linear-gradient(135deg,#0c2340 0%,#1a3a6b 100%);padding:28px 32px;position:relative;}
    .icc-modal-header::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse at 80% 0%,rgba(255,204,0,0.12) 0%,transparent 60%);pointer-events:none;}
    .icc-modal-title{font-family:'Plus Jakarta Sans',sans-serif;font-size:1.25rem;font-weight:800;color:#fff;margin-bottom:4px;}
    .icc-modal-sub{font-size:0.8rem;color:rgba(255,255,255,0.45);font-weight:500;}
    .icc-modal-close{position:absolute;top:20px;right:20px;width:34px;height:34px;border-radius:50%;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.15);color:rgba(255,255,255,0.7);cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:0.8rem;transition:all 0.2s;}
    .icc-modal-close:hover{background:rgba(255,255,255,0.2);color:#fff;}
    .icc-modal-body{padding:32px;}
    .icc-modal-note{background:#fef3c7;border:1px solid #fcd34d;border-radius:12px;padding:14px 16px;margin-bottom:24px;display:flex;gap:10px;align-items:flex-start;}
    .icc-modal-note i{color:#d97706;margin-top:2px;flex-shrink:0;}
    .icc-modal-note p{font-size:0.8rem;color:#92400e;line-height:1.6;margin:0;font-weight:500;}
    .icc-modal-options{display:grid;grid-template-columns:1fr 1fr;gap:14px;}
    .icc-modal-opt{border:none;border-radius:14px;padding:18px 14px;cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:10px;transition:all 0.25s;font-family:'Plus Jakarta Sans',sans-serif;}
    .icc-modal-opt.primary{background:linear-gradient(135deg,#0c2340,#1a3a6b);color:#fff;box-shadow:0 8px 24px rgba(12,35,64,0.3);}
    .icc-modal-opt.primary:hover{transform:translateY(-3px);box-shadow:0 14px 32px rgba(12,35,64,0.4);}
    .icc-modal-opt.secondary{background:#f0f4f8;color:#0c2340;border:1.5px solid rgba(12,35,64,0.12);}
    .icc-modal-opt.secondary:hover{background:#e2eaf5;transform:translateY(-3px);}
    .icc-modal-opt-icon{width:44px;height:44px;border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:1.1rem;}
    .icc-modal-opt.primary .icc-modal-opt-icon{background:rgba(255,255,255,0.15);}
    .icc-modal-opt.secondary .icc-modal-opt-icon{background:rgba(12,35,64,0.08);}
    .icc-modal-opt-label{font-size:0.8rem;font-weight:800;text-align:center;line-height:1.3;}
    .icc-modal-opt-sub{font-size:0.68rem;opacity:0.6;text-align:center;}
    .icc-modal-footer{padding:0 32px 24px;text-align:center;}
    .icc-modal-footer p{font-size:0.75rem;color:#94a3b8;line-height:1.6;}
    .icc-modal-footer strong{color:#0c2340;}
  `}),e.jsx("div",{className:"icc-backdrop",ref:s,onClick:o,children:e.jsxs("div",{className:"icc-modal",role:"dialog","aria-modal":"true","aria-labelledby":"modal-title",children:[e.jsxs("div",{className:"icc-modal-header",children:[e.jsx("button",{className:"icc-modal-close",onClick:r,"aria-label":"Close",children:e.jsx("i",{className:"fa-solid fa-xmark"})}),e.jsx("div",{className:"icc-modal-title",id:"modal-title",children:"Submit Your Complaint"}),e.jsx("div",{className:"icc-modal-sub",children:"Internal Complaints Committee · CTC"})]}),e.jsx("div",{className:"icc-modal-body",children:e.jsxs("div",{className:"icc-modal-options",children:[e.jsxs("button",{className:"icc-modal-opt primary",onClick:()=>window.open("https://docs.google.com/forms/d/e/1FAIpQLSeXE1THmrO8-fPHCyvU1L2dzc45Na9Qy6vVijfNHzWxUhJRrQ/viewform","_blank"),children:[e.jsx("div",{className:"icc-modal-opt-icon",children:e.jsx("i",{className:"fa-solid fa-laptop"})}),e.jsxs("div",{children:[e.jsx("div",{className:"icc-modal-opt-label",children:"Apply Online"}),e.jsx("div",{className:"icc-modal-opt-sub",children:"Google Form"})]})]}),e.jsxs("button",{className:"icc-modal-opt secondary",onClick:c,children:[e.jsx("div",{className:"icc-modal-opt-icon",children:e.jsx("i",{className:"fa-solid fa-file-arrow-down"})}),e.jsxs("div",{children:[e.jsx("div",{className:"icc-modal-opt-label",children:"Download Form"}),e.jsx("div",{className:"icc-modal-opt-sub",children:"PDF Format"})]})]})]})})]})})]})}function ux({section:r}){const s=wm[r]||[],[o,c]=v.useState(null);return s.length===0?e.jsxs("div",{style:{textAlign:"center",padding:"40px 20px",color:"#94a3b8"},children:[e.jsx("i",{className:"fa-solid fa-folder-open",style:{fontSize:"2rem",marginBottom:12,display:"block",opacity:.4}}),e.jsx("p",{style:{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"0.88rem",fontWeight:600,margin:0},children:"No documents available yet."})]}):e.jsx("div",{style:{overflowX:"auto"},children:e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontFamily:"'Plus Jakarta Sans',sans-serif"},children:[e.jsx("thead",{children:e.jsx("tr",{children:["#","Date","Document","Action"].map((m,p)=>e.jsx("th",{style:{padding:"14px 18px",textAlign:"left",background:"linear-gradient(135deg,#0c2340,#1a3a6b)",color:"#ffcc00",fontSize:"0.75rem",fontWeight:800,letterSpacing:"0.8px",textTransform:"uppercase",borderBottom:"2px solid rgba(255,204,0,0.2)",whiteSpace:"nowrap"},children:m},p))})}),e.jsx("tbody",{children:s.map((m,p)=>e.jsxs("tr",{onMouseEnter:()=>c(p),onMouseLeave:()=>c(null),style:{background:o===p?"#f0f6ff":p%2===0?"#fff":"#f8fafc",transition:"background 0.2s"},children:[e.jsx("td",{style:{padding:"14px 18px",color:"#94a3b8",fontWeight:700,fontSize:"0.82rem",width:48},children:String(p+1).padStart(2,"0")}),e.jsxs("td",{style:{padding:"14px 18px",fontSize:"0.85rem",fontWeight:600,color:"#4a6080",whiteSpace:"nowrap"},children:[e.jsx("i",{className:"fa-regular fa-calendar",style:{marginRight:8,color:"#0c2340",opacity:.5}}),m.date]}),e.jsx("td",{style:{padding:"14px 18px",fontSize:"0.85rem",fontWeight:600,color:"#0c2340"},children:m.label}),e.jsx("td",{style:{padding:"14px 18px"},children:e.jsxs("a",{href:m.pdf,target:"_blank",rel:"noreferrer",style:{display:"inline-flex",alignItems:"center",gap:6,background:"linear-gradient(135deg,#0c2340,#1a3a6b)",color:"#ffcc00",textDecoration:"none",padding:"7px 14px",borderRadius:8,fontSize:"0.72rem",fontWeight:800,letterSpacing:"0.4px",textTransform:"uppercase",transition:"transform 0.2s, box-shadow 0.2s",boxShadow:"0 4px 12px rgba(12,35,64,0.2)",whiteSpace:"nowrap"},onMouseEnter:u=>{u.currentTarget.style.transform="translateY(-2px)",u.currentTarget.style.boxShadow="0 8px 20px rgba(12,35,64,0.35)"},onMouseLeave:u=>{u.currentTarget.style.transform="none",u.currentTarget.style.boxShadow="0 4px 12px rgba(12,35,64,0.2)"},children:[e.jsx("i",{className:"fa-solid fa-file-pdf"})," View PDF"]})})]},p))})]})})}function fx(){lx();const[r,s]=v.useState("about"),[o,c]=v.useState(!1),[m,p]=v.useState(!1),u=v.useRef(null);v.useEffect(()=>{setTimeout(()=>p(!0),60)},[]);const x=g=>{s(g),setTimeout(()=>{u.current&&u.current.scrollIntoView({behavior:"smooth",block:"start"})},80)},h=`
    @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&family=DM+Serif+Display:ital@0;1&display=swap');

    @keyframes iccFadeUp{from{opacity:0;transform:translateY(32px);}to{opacity:1;transform:none;}}
    @keyframes iccHeroIn{from{opacity:0;transform:translateY(20px);}to{opacity:1;transform:none;}}
    @keyframes iccBlink{0%,100%{opacity:1;}50%{opacity:0.55;}}
    @keyframes iccShimmer{0%{transform:translateX(-100%);}100%{transform:translateX(200%);}}
    @keyframes iccTabIn{from{opacity:0;transform:translateY(10px);}to{opacity:1;transform:none;}}

    .rv{opacity:0;transform:translateY(28px);transition:opacity 0.55s ease,transform 0.55s ease;}
    .rv.visible{opacity:1;transform:none;}
    .rv-l{opacity:0;transform:translateX(-28px);transition:opacity 0.55s ease,transform 0.55s ease;}
    .rv-l.visible{opacity:1;transform:none;}
    .rv-r{opacity:0;transform:translateX(28px);transition:opacity 0.55s ease,transform 0.55s ease;}
    .rv-r.visible{opacity:1;transform:none;}

    .icc-page{background:#f0f4f8;min-height:100vh;font-family:'Plus Jakarta Sans',sans-serif;}

    /* ── HERO ── */
    .icc-hero{
      background:linear-gradient(165deg,#020c1b 0%,#0c2340 40%,#112d52 70%,#060f1e 100%);
      min-height:360px;display:flex;flex-direction:column;justify-content:flex-end;
      position:relative;overflow:hidden;padding:0;
    }
    .icc-hero-grid{
      position:absolute;inset:0;pointer-events:none;
      background-image:linear-gradient(rgba(255,204,0,0.04) 1px,transparent 1px),
        linear-gradient(90deg,rgba(255,204,0,0.04) 1px,transparent 1px);
      background-size:48px 48px;
    }
    .icc-hero-scan{
      position:absolute;left:0;right:0;height:1px;
      background:linear-gradient(90deg,transparent,rgba(255,204,0,0.4),transparent);
      animation:iccScanLine 9s linear infinite;pointer-events:none;
    }
    .icc-hero-glow{
      position:absolute;width:600px;height:600px;border-radius:50%;
      background:radial-gradient(circle,rgba(255,204,0,0.1) 0%,transparent 65%);
      top:-180px;right:-100px;filter:blur(50px);pointer-events:none;
    }
    .icc-hero-glow2{
      position:absolute;width:400px;height:400px;border-radius:50%;
      background:radial-gradient(circle,rgba(26,58,107,0.6) 0%,transparent 65%);
      bottom:-100px;left:5%;filter:blur(40px);pointer-events:none;
    }
    .icc-hero-content {
        position: relative;
        z-index: 2;
        padding: 72px 5% 56px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 32px;
        flex-wrap: wrap;
    }
    .icc-hero-left{flex:1;min-width:280px;}
    .icc-hero-badge{
      display:inline-flex;align-items:center;gap:8px;
      background:rgba(255,204,0,0.1);border:1px solid rgba(255,204,0,0.28);
      color:#ffcc00;font-size:0.68rem;font-weight:800;padding:6px 16px;
      border-radius:30px;letter-spacing:2.5px;text-transform:uppercase;
      margin-bottom:18px;animation:iccHeroIn 0.6s 0.1s ease both;
    }
    .icc-hero-title{
      font-family:'Plus Jakarta Sans',sans-serif;
      font-size:clamp(2rem,5vw,3.4rem);font-weight:900;
      color:#fff;line-height:1.08;letter-spacing:-1.5px;
      margin-bottom:14px;animation:iccHeroIn 0.6s 0.2s ease both;
    }
    .icc-hero-title em{font-style:normal;color:#ffcc00;}
    .icc-hero-sub{
      color:rgba(255,255,255,0.42);font-size:0.88rem;line-height:1.75;
      max-width:520px;margin-bottom:28px;animation:iccHeroIn 0.6s 0.3s ease both;font-weight:500;
    }
    .icc-hero-pills {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        animation: iccHeroIn 0.6s 0.4s ease both;
    }
    .icc-hero-pill{
      display:inline-flex;align-items:center;gap:7px;
      background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);
      border-radius:30px;padding:7px 16px;
      font-size:0.72rem;font-weight:700;color:rgba(255,255,255,0.5);
    }
    .icc-hero-pill i{font-size:0.65rem;}
    .icc-hero-right{animation:iccHeroIn 0.6s 0.35s ease both;flex-shrink:0;}
    .icc-hero-logo {
        flex: 0 0 auto;
        animation: iccHeroIn 0.6s 0.35s ease both;
    }

    .icc-hero-logo img {
        height: 140px; /* Matches AboutTrust height */
        width: auto;
        opacity: 0.9;
        margin:0 auto;
        filter: drop-shadow(0 4px 16px rgba(0,0,0,0.4));
    }

    /* Wave */
    .icc-wave{height:56px;margin-top:-1px;position:relative;}
    .icc-wave svg{width:100%;height:100%;display:block;}

    /* ── COMPLAINT BUTTON ── */
    .icc-complaint-strip{
      max-width:1200px;margin:-28px auto 0;padding:0 4%;
      position:relative;z-index:4;
    }
    .icc-complaint-btn{
      width:100%;padding:20px 32px;border:none;border-radius:18px;
      background:linear-gradient(135deg,#b91c1c,#dc2626,#ef4444);
      color:#fff;cursor:pointer;
      display:flex;align-items:center;justify-content:space-between;gap:16px;
      box-shadow:0 12px 40px rgba(185,28,28,0.4);
      position:relative;overflow:hidden;
      transition:transform 0.25s,box-shadow 0.28s;
      font-family:'Plus Jakarta Sans',sans-serif;
    }
    .icc-complaint-btn:hover{transform:translateY(-3px);box-shadow:0 18px 50px rgba(185,28,28,0.5);}
    .icc-complaint-btn-shine{
      position:absolute;top:0;left:0;bottom:0;width:40%;
      background:linear-gradient(90deg,transparent,rgba(255,255,255,0.15),transparent);
      animation:iccShimmer 3s ease-in-out infinite;pointer-events:none;
    }
    .icc-complaint-btn-left{display:flex;align-items:center;gap:16px;}
    .icc-complaint-icon{
      width:52px;height:52px;border-radius:14px;
      background:rgba(255,255,255,0.18);
      display:flex;align-items:center;justify-content:center;
      font-size:1.3rem;flex-shrink:0;
      animation:iccBlink 2s ease-in-out infinite;
    }
    .icc-complaint-title{font-size:1.05rem;font-weight:900;letter-spacing:-0.3px;text-align:left;}
    .icc-complaint-sub{font-size:0.78rem;opacity:0.75;font-weight:500;text-align:left;margin-top:2px;}
    .icc-complaint-arrow{
      width:44px;height:44px;border-radius:12px;
      background:rgba(255,255,255,0.18);
      display:flex;align-items:center;justify-content:center;
      font-size:1rem;flex-shrink:0;
      transition:transform 0.25s;
    }
    .icc-complaint-btn:hover .icc-complaint-arrow{transform:translateX(4px);}

    /* ── MAIN CONTENT AREA ── */
    .icc-main{max-width:1200px;margin:40px auto;padding:0 4%;}

    /* TAB BAR */
    .icc-tab-bar{
      display:flex;gap:6px;background:#fff;
      border-radius:18px;padding:6px;
      box-shadow:0 4px 20px rgba(10,22,40,0.08);
      border:1px solid rgba(10,22,40,0.06);
      margin-bottom:28px;flex-wrap:wrap;
    }
    .icc-tab{
      flex:1;min-width:0;
      display:flex;align-items:center;justify-content:center;gap:7px;
      padding:12px 14px;border:none;border-radius:12px;
      cursor:pointer;font-family:'Plus Jakarta Sans',sans-serif;
      font-size:0.8rem;font-weight:700;letter-spacing:0.2px;
      transition:all 0.25s cubic-bezier(0.4,0,0.2,1);
      background:transparent;color:#4a6080;white-space:nowrap;
    }
    .icc-tab i{font-size:0.75rem;transition:transform 0.25s;}
    .icc-tab.active{
      background:linear-gradient(135deg,#0c2340,#1a3a6b);
      color:#ffcc00;
      box-shadow:0 6px 20px rgba(12,35,64,0.3);
    }
    .icc-tab.active i{transform:scale(1.15);}
    .icc-tab:not(.active):hover{background:#f0f4f8;color:#0c2340;}

    /* CONTENT CARD */
    .icc-content-card{
      background:#fff;border-radius:22px;overflow:hidden;
      box-shadow:0 4px 24px rgba(10,22,40,0.09);
      border:1px solid rgba(10,22,40,0.06);
    }
    .icc-content-header{
      background:linear-gradient(135deg,#0c2340 0%,#1a3a6b 100%);
      padding:28px 36px;position:relative;overflow:hidden;
    }
    .icc-content-header::before{
      content:'';position:absolute;inset:0;
      background:radial-gradient(ellipse at 80% 0%,rgba(255,204,0,0.12) 0%,transparent 55%);
      pointer-events:none;
    }
    .icc-content-header-title{
      font-family:'Plus Jakarta Sans',sans-serif;
      font-size:1.3rem;font-weight:900;color:#fff;margin-bottom:4px;
      position:relative;z-index:1;
    }
    .icc-content-header-sub{font-size:0.78rem;color:rgba(255,255,255,0.45);position:relative;z-index:1;}
    .icc-content-body{padding:36px;}

    /* ABOUT TAB */
    .icc-about-grid{display:grid;grid-template-columns:1fr 1fr;gap:24px;margin-bottom:36px;}
    .icc-about-text{
      font-size:0.92rem;line-height:1.85;color:#334155;
      font-weight:500;
    }
    .icc-about-text strong{color:#0c2340;}
    .icc-legal-badges{display:flex;flex-direction:column;gap:10px;}
    .icc-legal-badge{
      background:#f0f6ff;border:1.5px solid rgba(12,35,64,0.1);
      border-radius:12px;padding:14px 16px;
      display:flex;align-items:center;gap:12px;
    }
    .icc-legal-badge-icon{
      width:38px;height:38px;border-radius:10px;flex-shrink:0;
      background:linear-gradient(135deg,#0c2340,#1a3a6b);
      display:flex;align-items:center;justify-content:center;
      font-size:0.85rem;color:#ffcc00;
    }
    .icc-legal-badge-text{font-size:0.75rem;font-weight:700;color:#0c2340;line-height:1.45;}
    .icc-legal-badge-sub{font-size:0.68rem;color:#4a6080;font-weight:500;margin-top:2px;}

    /* HARASSMENT SECTION */
    .icc-harassment-header{
      display:flex;align-items:center;gap:12px;margin-bottom:20px;
      padding-bottom:16px;border-bottom:2px solid #f0f4f8;
    }
    .icc-harassment-icon-wrap{
      width:46px;height:46px;border-radius:13px;flex-shrink:0;
      background:linear-gradient(135deg,#b91c1c,#ef4444);
      display:flex;align-items:center;justify-content:center;
      font-size:1.1rem;color:#fff;
    }
    .icc-harassment-title{font-family:'Plus Jakarta Sans',sans-serif;font-size:1.05rem;font-weight:900;color:#0c2340;}
    .icc-harassment-sub{font-size:0.78rem;color:#4a6080;font-weight:500;margin-top:2px;}
    .icc-harassment-text{font-size:0.88rem;line-height:1.8;color:#475569;margin-bottom:20px;}
    .icc-harassment-list{display:grid;grid-template-columns:1fr 1fr;gap:10px;}
    .icc-harassment-item{
      display:flex;align-items:center;gap:12px;
      background:#fef2f2;border:1.5px solid #fecaca;
      border-radius:12px;padding:13px 16px;
      transition:all 0.22s;
    }
    .icc-harassment-item:hover{background:#fee2e2;transform:translateX(4px);}
    .icc-harassment-item-icon{
      width:34px;height:34px;border-radius:9px;flex-shrink:0;
      background:linear-gradient(135deg,#b91c1c,#ef4444);
      display:flex;align-items:center;justify-content:center;
      font-size:0.8rem;color:#fff;
    }
    .icc-harassment-item-text{font-size:0.8rem;font-weight:700;color:#7f1d1d;line-height:1.35;}

    /* RESPONSIBILITIES */
    .icc-responsibilities-section{margin-top:32px;}
    .icc-resp-header{
      display:flex;align-items:center;gap:12px;margin-bottom:20px;
      padding-bottom:16px;border-bottom:2px solid #f0f4f8;
    }
    .icc-resp-icon-wrap{
      width:46px;height:46px;border-radius:13px;flex-shrink:0;
      background:linear-gradient(135deg,#0c2340,#1a3a6b);
      display:flex;align-items:center;justify-content:center;
      font-size:1.1rem;color:#ffcc00;
    }
    .icc-resp-title{font-family:'Plus Jakarta Sans',sans-serif;font-size:1.05rem;font-weight:900;color:#0c2340;}
    .icc-resp-sub{font-size:0.78rem;color:#4a6080;font-weight:500;margin-top:2px;}
    .icc-resp-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px;}
    .icc-resp-item{
      display:flex;align-items:flex-start;gap:12px;
      background:#f0f6ff;border:1.5px solid rgba(12,35,64,0.1);
      border-radius:12px;padding:14px 16px;
      transition:all 0.22s;
    }
    .icc-resp-item:hover{background:#e2eaf5;transform:translateX(4px);}
    .icc-resp-num{
      width:28px;height:28px;border-radius:8px;flex-shrink:0;
      background:linear-gradient(135deg,#0c2340,#1a3a6b);
      display:flex;align-items:center;justify-content:center;
      font-size:0.65rem;font-weight:900;color:#ffcc00;margin-top:1px;
    }
    .icc-resp-text{font-size:0.8rem;font-weight:600;color:#0c2340;line-height:1.55;}

    /* MECHANISM IMAGE */
    .icc-mechanism{
      margin-top:32px;border-radius:16px;overflow:hidden;
      border:1.5px solid rgba(12,35,64,0.1);
    }
    .icc-mechanism-header{
      background:linear-gradient(135deg,#0c2340,#1a3a6b);
      padding:14px 20px;display:flex;align-items:center;gap:10px;
    }
    .icc-mechanism-header i{color:#ffcc00;font-size:0.85rem;}
    .icc-mechanism-header span{font-family:'Plus Jakarta Sans',sans-serif;font-size:0.82rem;font-weight:800;color:#fff;letter-spacing:0.3px;}
    .icc-mechanism img{width:100%;height:auto;display:block;}

    /* DOC TABS — Resolution/Committee/Events/Vision */
    .icc-doc-stats{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-bottom:24px;}
    .icc-doc-stat{
      background:#f8fafc;border:1px solid rgba(10,22,40,0.07);border-radius:14px;
      padding:18px 20px;text-align:center;
    }
    .icc-doc-stat-val{font-family:'Plus Jakarta Sans',sans-serif;font-size:1.6rem;font-weight:900;color:#0c2340;line-height:1;}
    .icc-doc-stat-lbl{font-size:0.72rem;font-weight:600;color:#4a6080;margin-top:4px;}
    .icc-table-wrap{
      border:1.5px solid rgba(10,22,40,0.08);border-radius:14px;
      overflow:hidden;
    }

    @media(max-width:900px){
      .icc-about-grid{grid-template-columns:1fr;}
      .icc-harassment-list{grid-template-columns:1fr;}
      .icc-resp-grid{grid-template-columns:1fr;}
      .icc-tab{flex:1 1 calc(50% - 6px);}
    }
    @media(max-width:600px){
      .icc-hero-content{padding:48px 4% 40px;flex-direction:column;align-items:flex-start;}
      .icc-hero-logo{width:80px;height:80px;}
      .icc-hero-title{font-size:1.9rem;letter-spacing:-1px;}
      .icc-content-body{padding:24px 20px;}
      .icc-complaint-btn{padding:16px 20px;}
      .icc-complaint-icon{width:42px;height:42px;font-size:1.1rem;}
      .icc-tab{padding:10px 10px;font-size:0.74rem;}
      .icc-doc-stats{grid-template-columns:1fr 1fr;}
    }
    @media(max-width:400px){
      .icc-tab{flex:1 1 100%;}
      .icc-doc-stats{grid-template-columns:1fr;}
    }
  `,b={about:{title:"About the ICC",sub:"Background, mandate & scope · Creative Techno College"},resolution:{title:"ICC Resolutions",sub:"Formal resolutions and policy decisions"},committee:{title:"Committee Members",sub:"Constituted as per POSH Act 2013"},events:{title:"Events & Programmes",sub:"Awareness, sensitization and outreach activities"},vision:{title:"ICC Vision",sub:"Mission, objectives and institutional commitment"}},y=g=>{const T=wm[g]||[],E=[...new Set(T.map(F=>F.date.split("-")[2]))];return e.jsxs("div",{className:"icc-doc-stats",children:[e.jsxs("div",{className:"icc-doc-stat",children:[e.jsx("div",{className:"icc-doc-stat-val",children:T.length}),e.jsx("div",{className:"icc-doc-stat-lbl",children:"Documents"})]}),e.jsxs("div",{className:"icc-doc-stat",children:[e.jsx("div",{className:"icc-doc-stat-val",children:E.length}),e.jsx("div",{className:"icc-doc-stat-lbl",children:"Academic Years"})]}),e.jsxs("div",{className:"icc-doc-stat",children:[e.jsx("div",{className:"icc-doc-stat-val",children:"PDF"}),e.jsx("div",{className:"icc-doc-stat-lbl",children:"Format"})]})]})};return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:h}),o&&e.jsx(mx,{onClose:()=>c(!1)}),e.jsxs("div",{className:"icc-page",children:[e.jsx("div",{className:"icc-hero",children:e.jsxs("div",{className:"icc-hero-content",children:[e.jsxs("div",{className:"icc-hero-left",children:[e.jsxs("div",{className:"icc-hero-badge",children:[e.jsx("i",{className:"fa-solid fa-shield-halved"})," ICC · POSH Act 2013"]}),e.jsxs("h1",{className:"icc-hero-title",children:["Internal",e.jsx("br",{}),e.jsx("em",{children:"Complaints"}),e.jsx("br",{}),"Committee"]}),e.jsx("p",{className:"icc-hero-sub",children:"Committed to maintaining a safe, respectful and equitable working and academic environment for all women at Creative Techno College."}),e.jsx("div",{className:"icc-hero-pills",children:[{icon:"fa-scale-balanced",text:"Zero Tolerance Policy"},{icon:"fa-lock",text:"Confidential Process"},{icon:"fa-gavel",text:"Natural Justice"},{icon:"fa-building-columns",text:"UGC Mandated"}].map((g,T)=>e.jsxs("span",{className:"icc-hero-pill",children:[e.jsx("i",{className:`fa-solid ${g.icon}`,style:{color:"#ffcc00",fontSize:"0.65rem"}}),g.text]},T))})]}),e.jsx("div",{className:"icc-hero-right",children:e.jsx("div",{className:"icc-hero-logo",children:e.jsx("img",{src:"/CTC NEW REACT WEBSITE/images/ICC/LOGO FINAL.png",alt:"Creative Techno College",onError:g=>{g.target.parentElement.innerHTML='<span style="font-size:2.5rem">🏫</span>'}})})})]})}),e.jsx("div",{className:"icc-wave",children:e.jsx("svg",{viewBox:"0 0 1440 56",preserveAspectRatio:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M0,38 C360,56 1080,0 1440,38 L1440,56 L0,56 Z",fill:"#f0f4f8"})})}),e.jsx("div",{className:"icc-complaint-strip rv",children:e.jsxs("button",{className:"icc-complaint-btn",onClick:()=>c(!0),children:[e.jsx("div",{className:"icc-complaint-btn-shine"}),e.jsxs("div",{className:"icc-complaint-btn-left",children:[e.jsx("div",{className:"icc-complaint-icon",children:e.jsx("i",{className:"fa-solid fa-pen-to-square"})}),e.jsxs("div",{children:[e.jsx("div",{className:"icc-complaint-title",children:"Write Your Complaint Here"}),e.jsx("div",{className:"icc-complaint-sub",children:"Confidential · Secure · Protected — File online or download form"})]})]}),e.jsx("div",{className:"icc-complaint-arrow",children:e.jsx("i",{className:"fa-solid fa-arrow-right"})})]})}),e.jsxs("div",{className:"icc-main",children:[e.jsx("div",{className:"icc-tab-bar rv",style:{transitionDelay:"0.1s"},children:px.map(g=>e.jsxs("button",{className:`icc-tab${r===g.id?" active":""}`,onClick:()=>x(g.id),children:[e.jsx("i",{className:`fa-solid ${g.icon}`}),g.label]},g.id))}),e.jsxs("div",{className:"icc-content-card rv",style:{transitionDelay:"0.15s"},ref:u,children:[e.jsxs("div",{className:"icc-content-header",children:[e.jsx("div",{className:"icc-content-header-title",children:b[r].title}),e.jsx("div",{className:"icc-content-header-sub",children:b[r].sub})]}),e.jsxs("div",{className:"icc-content-body",children:[r==="about"&&e.jsxs("div",{style:{animation:"iccTabIn 0.4s ease both"},children:[e.jsxs("div",{className:"icc-about-grid",children:[e.jsxs("div",{className:"icc-about-text",children:[e.jsxs("p",{children:["As per the guidelines of the ",e.jsx("strong",{children:"Supreme Court of India"}),", UGC, ",e.jsx("strong",{children:"Section 4 SHW Act 2013"})," and AICTE Regulations, 2016 vide No. F. AICTE/WH/2016/01 dated 10th June, 2016 — ",e.jsx("em",{children:"Gender Sensitization, Prevention and Prohibition of Sexual Harassment of Women Employees and Students and Redressal of Grievances in Technical Institutions"})," — ",e.jsx("strong",{children:"Creative Techno College"})," has constituted an Internal Complaints Committee (ICC)."]}),e.jsxs("p",{style:{marginTop:16},children:["The ICC of Creative Techno College facilitates ",e.jsx("strong",{children:"safe and secure educational and working environments"})," for both female students and staff. The Institute follows a strict policy of ",e.jsx("strong",{children:"zero tolerance"})," towards human rights violations. The Committee addresses issues regarding prevention, prohibition and redressal of sexual harassment of women at the workplace."]})]}),e.jsx("div",{className:"icc-legal-badges",children:[{icon:"fa-building-columns",label:"Supreme Court Guidelines",sub:"Vishakha Guidelines & subsequent orders"},{icon:"fa-scroll",label:"POSH Act 2013",sub:"Sexual Harassment of Women at Workplace Act"},{icon:"fa-landmark",label:"AICTE Regulations 2016",sub:"No. F.AICTE/WH/2016/01 — June 2016"},{icon:"fa-book-open",label:"UGC Policy Framework",sub:"Gender sensitization mandate for HEIs"}].map((g,T)=>e.jsxs("div",{className:"icc-legal-badge",children:[e.jsx("div",{className:"icc-legal-badge-icon",children:e.jsx("i",{className:`fa-solid ${g.icon}`})}),e.jsxs("div",{children:[e.jsx("div",{className:"icc-legal-badge-text",children:g.label}),e.jsx("div",{className:"icc-legal-badge-sub",children:g.sub})]})]},T))})]}),e.jsxs("div",{style:{background:"#fef2f2",border:"1.5px solid #fecaca",borderRadius:18,padding:28,marginBottom:28},children:[e.jsxs("div",{className:"icc-harassment-header",children:[e.jsx("div",{className:"icc-harassment-icon-wrap",children:e.jsx("i",{className:"fa-solid fa-triangle-exclamation"})}),e.jsxs("div",{children:[e.jsx("div",{className:"icc-harassment-title",children:"What Constitutes Sexual Harassment?"}),e.jsx("div",{className:"icc-harassment-sub",children:"As defined under Sexual Harassment of Women at Workplace Act, 2013"})]})]}),e.jsx("p",{className:"icc-harassment-text",children:"Any inappropriate advances towards a person in a sexual manner that could directly or indirectly affect their job, salary, or career constitute sexual harassment. The Act provides a broad and inclusive definition to ensure comprehensive protection."}),e.jsx("div",{className:"icc-harassment-list",children:cx.map((g,T)=>e.jsxs("div",{className:"icc-harassment-item",children:[e.jsx("div",{className:"icc-harassment-item-icon",children:e.jsx("i",{className:`fa-solid ${g.icon}`})}),e.jsx("div",{className:"icc-harassment-item-text",children:g.text})]},T))})]}),e.jsxs("div",{className:"icc-responsibilities-section",children:[e.jsxs("div",{className:"icc-resp-header",children:[e.jsx("div",{className:"icc-resp-icon-wrap",children:e.jsx("i",{className:"fa-solid fa-sitemap"})}),e.jsxs("div",{children:[e.jsx("div",{className:"icc-resp-title",children:"Roles & Responsibilities of ICC"}),e.jsx("div",{className:"icc-resp-sub",children:"11 core mandates of the Internal Complaints Committee"})]})]}),e.jsx("div",{className:"icc-resp-grid",children:dx.map((g,T)=>e.jsxs("div",{className:"icc-resp-item",children:[e.jsx("div",{className:"icc-resp-num",children:String(T+1).padStart(2,"0")}),e.jsx("div",{className:"icc-resp-text",children:g})]},T))})]}),e.jsxs("div",{className:"icc-mechanism",children:[e.jsxs("div",{className:"icc-mechanism-header",children:[e.jsx("i",{className:"fa-solid fa-diagram-project"}),e.jsx("span",{children:"ICC Complaint & Redressal Mechanism"})]}),e.jsx("img",{src:"/CTC NEW REACT WEBSITE/images/ICC/mechanism.png",alt:"ICC Complaint Mechanism",onError:g=>{g.target.parentElement.style.cssText+="background:#f8fafc;min-height:120px;display:flex;align-items:center;justify-content:center;",g.target.outerHTML='<div style="padding:40px;text-align:center;color:#94a3b8;font-family:Plus Jakarta Sans,sans-serif;font-size:0.85rem;">Mechanism diagram will appear here</div>'}})]})]}),["resolution","committee","events","vision"].includes(r)&&e.jsxs("div",{style:{animation:"iccTabIn 0.4s ease both"},children:[y(r),e.jsx("div",{className:"icc-table-wrap",children:e.jsx(ux,{section:r})})]})]})]}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(260px,1fr))",gap:18,marginTop:28},children:[{icon:"fa-envelope",color:"#0c2340",bg:"linear-gradient(135deg,#0c2340,#1a3a6b)",title:"Contact ICC",sub:"icc@creativecollege.in",desc:"Reach out to the committee directly for guidance before filing a formal complaint."},{icon:"fa-clock",color:"#d97706",bg:"linear-gradient(135deg,#78350f,#d97706)",title:"Filing Window",sub:"90 Days from Incident",desc:"Complaints must be filed within 90 days of the last incident as per POSH Act provisions."},{icon:"fa-shield-halved",color:"#059669",bg:"linear-gradient(135deg,#064e3b,#059669)",title:"Confidentiality",sub:"100% Protected",desc:"All complaints, proceedings and outcomes are treated with strict confidentiality."}].map((g,T)=>e.jsxs("div",{className:"rv",style:{background:"#fff",borderRadius:18,padding:"24px",border:"1px solid rgba(10,22,40,0.07)",boxShadow:"0 4px 20px rgba(10,22,40,0.07)",transitionDelay:`${T*.08}s`},children:[e.jsx("div",{style:{width:50,height:50,borderRadius:14,background:g.bg,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.1rem",color:"#fff",marginBottom:16},children:e.jsx("i",{className:`fa-solid ${g.icon}`})}),e.jsx("div",{style:{fontFamily:"'Plus Jakarta Sans',sans-serif",fontWeight:900,fontSize:"0.95rem",color:"#0c2340",marginBottom:3},children:g.title}),e.jsx("div",{style:{fontSize:"0.75rem",fontWeight:700,color:g.color,marginBottom:10},children:g.sub}),e.jsx("div",{style:{fontSize:"0.8rem",color:"#4a6080",lineHeight:1.7,fontWeight:500},children:g.desc})]},T))})]})]})]})}function hx(){v.useEffect(()=>{const r=document.querySelectorAll(".grc-rv, .grc-rv-l, .grc-rv-r"),s=new IntersectionObserver(o=>o.forEach(c=>{c.isIntersecting&&c.target.classList.add("visible")}),{threshold:.08});return r.forEach(o=>s.observe(o)),()=>s.disconnect()},[])}const gx=[{no:1,name:"Mr. Manoj Kumar Das",role:"Chairperson"},{no:2,name:"Mr. Satya S. S. Dehury",role:"Member"},{no:3,name:"Mrs. Monika Sahu",role:"Member"}];function xx(){return hx(),e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
    @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap');

    @keyframes grcFadeUp{from{opacity:0;transform:translateY(32px);}to{opacity:1;transform:none;}}
    @keyframes grcHeroIn{from{opacity:0;transform:translateY(20px);}to{opacity:1;transform:none;}}
    @keyframes grcShimmer{0%{transform:translateX(-100%);}100%{transform:translateX(200%);}}
    @keyframes grcBlink{0%,100%{opacity:1;}50%{opacity:0.55;}}
    @keyframes grcScanLine{0%{top:0%;}100%{top:100%;}}

    .grc-rv{opacity:0;transform:translateY(28px);transition:opacity 0.55s ease,transform 0.55s ease;}
    .grc-rv.visible{opacity:1;transform:none;}
    .grc-rv-l{opacity:0;transform:translateX(-28px);transition:opacity 0.55s ease,transform 0.55s ease;}
    .grc-rv-l.visible{opacity:1;transform:none;}
    .grc-rv-r{opacity:0;transform:translateX(28px);transition:opacity 0.55s ease,transform 0.55s ease;}
    .grc-rv-r.visible{opacity:1;transform:none;}

    .grc-page{background:#f0f4f8;min-height:100vh;font-family:'Plus Jakarta Sans',sans-serif;}

    /* ── HERO ── */
    .grc-hero{
      background:linear-gradient(165deg,#020c1b 0%,#0c2340 40%,#112d52 70%,#060f1e 100%);
      min-height:360px;display:flex;flex-direction:column;justify-content:flex-end;
      position:relative;overflow:hidden;padding:0;
    }
    .grc-hero-glow{
      position:absolute;width:600px;height:600px;border-radius:50%;
      background:radial-gradient(circle,rgba(255,204,0,0.1) 0%,transparent 65%);
      top:-180px;right:-100px;filter:blur(50px);pointer-events:none;
    }
    .grc-hero-glow2{
      position:absolute;width:400px;height:400px;border-radius:50%;
      background:radial-gradient(circle,rgba(26,58,107,0.6) 0%,transparent 65%);
      bottom:-100px;left:5%;filter:blur(40px);pointer-events:none;
    }
    .grc-hero-content{
      position:relative;z-index:2;padding:72px 5% 56px;
      display:flex;align-items:center;justify-content:space-between;gap:32px;flex-wrap:wrap;
    }
    .grc-hero-left{flex:1;min-width:280px;}
    .grc-hero-badge{
      display:inline-flex;align-items:center;gap:8px;
      background:rgba(255,204,0,0.1);border:1px solid rgba(255,204,0,0.28);
      color:#ffcc00;font-size:0.68rem;font-weight:800;padding:6px 16px;
      border-radius:30px;letter-spacing:2.5px;text-transform:uppercase;
      margin-bottom:18px;animation:grcHeroIn 0.6s 0.1s ease both;
    }
    .grc-hero-title{
      font-family:'Plus Jakarta Sans',sans-serif;
      font-size:clamp(2rem,5vw,3.4rem);font-weight:900;
      color:#fff;line-height:1.08;letter-spacing:-1.5px;
      margin-bottom:14px;animation:grcHeroIn 0.6s 0.2s ease both;
    }
    .grc-hero-title em{font-style:normal;color:#ffcc00;}
    .grc-hero-sub{
      color:rgba(255,255,255,0.42);font-size:0.88rem;line-height:1.75;
      max-width:520px;margin-bottom:28px;animation:grcHeroIn 0.6s 0.3s ease both;font-weight:500;
    }
    .grc-hero-pills{display:flex;flex-wrap:wrap;gap:10px;animation:grcHeroIn 0.6s 0.4s ease both;}
    .grc-hero-pill{
      display:inline-flex;align-items:center;gap:7px;
      background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);
      border-radius:30px;padding:7px 16px;
      font-size:0.72rem;font-weight:700;color:rgba(255,255,255,0.5);
    }
    .grc-hero-right{flex:0 0 auto;animation:grcHeroIn 0.6s 0.35s ease both;}
    .grc-hero-logo img{height:140px;width:auto;opacity:0.9;filter:drop-shadow(0 4px 16px rgba(0,0,0,0.4));}

    /* Wave */
    .grc-wave{height:56px;margin-top:-1px;position:relative;}
    .grc-wave svg{width:100%;height:100%;display:block;}

    /* ── GRIEVANCE BUTTON ── */
    .grc-btn-strip{max-width:1200px;margin:-28px auto 0;padding:0 4%;position:relative;z-index:4;}
    .grc-btn{
      width:100%;padding:20px 32px;border:none;border-radius:18px;
      background:linear-gradient(135deg,#1e3a8a,#2563eb,#3b82f6);
      color:#fff;cursor:pointer;
      display:flex;align-items:center;justify-content:space-between;gap:16px;
      box-shadow:0 12px 40px rgba(30,58,138,0.4);
      position:relative;overflow:hidden;
      transition:transform 0.25s,box-shadow 0.28s;
      font-family:'Plus Jakarta Sans',sans-serif;
    }
    .grc-btn:hover{transform:translateY(-3px);box-shadow:0 18px 50px rgba(30,58,138,0.5);}
    .grc-btn-shine{
      position:absolute;top:0;left:0;bottom:0;width:40%;
      background:linear-gradient(90deg,transparent,rgba(255,255,255,0.15),transparent);
      animation:grcShimmer 3s ease-in-out infinite;pointer-events:none;
    }
    .grc-btn-left{display:flex;align-items:center;gap:16px;}
    .grc-btn-icon{
      width:52px;height:52px;border-radius:14px;
      background:rgba(255,255,255,0.18);
      display:flex;align-items:center;justify-content:center;
      font-size:1.3rem;flex-shrink:0;
      animation:grcBlink 2s ease-in-out infinite;
    }
    .grc-btn-title{font-size:1.05rem;font-weight:900;letter-spacing:-0.3px;text-align:left;}
    .grc-btn-sub{font-size:0.78rem;opacity:0.75;font-weight:500;text-align:left;margin-top:2px;}
    .grc-btn-arrow{
      width:44px;height:44px;border-radius:12px;
      background:rgba(255,255,255,0.18);
      display:flex;align-items:center;justify-content:center;
      font-size:1rem;flex-shrink:0;transition:transform 0.25s;
    }
    .grc-btn:hover .grc-btn-arrow{transform:translateX(4px);}

    /* ── MAIN CONTENT ── */
    .grc-main{max-width:1200px;margin:40px auto;padding:0 4%;}

    /* Letter Card */
    .grc-letter-card{
      background:#fff;border-radius:22px;overflow:hidden;
      box-shadow:0 4px 24px rgba(10,22,40,0.09);
      border:1px solid rgba(10,22,40,0.06);
      margin-bottom:28px;
    }
    .grc-letter-header{
      background:linear-gradient(135deg,#0c2340 0%,#1a3a6b 100%);
      padding:28px 36px;position:relative;overflow:hidden;
    }
    .grc-letter-header::before{
      content:'';position:absolute;inset:0;
      background:radial-gradient(ellipse at 80% 0%,rgba(255,204,0,0.12) 0%,transparent 55%);
      pointer-events:none;
    }
    .grc-letter-header-title{
      font-family:'Plus Jakarta Sans',sans-serif;
      font-size:1.3rem;font-weight:900;color:#fff;margin-bottom:4px;
      position:relative;z-index:1;
    }
    .grc-letter-header-sub{font-size:0.78rem;color:rgba(255,255,255,0.45);position:relative;z-index:1;}
    .grc-letter-body{padding:40px 40px 36px;}

    /* Salutation */
    .grc-salutation{font-size:1rem;font-weight:700;color:#0c2340;margin-bottom:20px;}

    /* Letter text */
    .grc-letter-text{
      font-size:0.95rem;line-height:1.9;color:#334155;
      font-weight:500;margin-bottom:28px;
    }
    .grc-letter-text strong{color:#0c2340;}

    /* Members list */
    .grc-members-intro{
      font-size:0.95rem;font-weight:600;color:#0c2340;
      margin-bottom:16px;
    }
    .grc-members-list{display:flex;flex-direction:column;gap:10px;margin-bottom:36px;}
    .grc-member-item{
      display:flex;align-items:center;gap:14px;
      background:#f0f6ff;border:1.5px solid rgba(12,35,64,0.1);
      border-radius:12px;padding:14px 18px;
      transition:all 0.22s;
    }
    .grc-member-item:hover{background:#e2eaf5;transform:translateX(4px);}
    .grc-member-num{
      width:32px;height:32px;border-radius:9px;flex-shrink:0;
      background:linear-gradient(135deg,#0c2340,#1a3a6b);
      display:flex;align-items:center;justify-content:center;
      font-size:0.75rem;font-weight:900;color:#ffcc00;
    }
    .grc-member-name{font-size:0.9rem;font-weight:700;color:#0c2340;}
    .grc-member-role{font-size:0.72rem;color:#4a6080;font-weight:500;margin-top:2px;}

    /* Image Container */
    .grc-image-card{
      background:#fff;border-radius:22px;overflow:hidden;
      box-shadow:0 4px 24px rgba(10,22,40,0.09);
      border:1px solid rgba(10,22,40,0.06);
      margin-bottom:28px;
    }
    .grc-image-header{
      background:linear-gradient(135deg,#0c2340 0%,#1a3a6b 100%);
      padding:14px 20px;display:flex;align-items:center;gap:10px;
    }
    .grc-image-header i{color:#ffcc00;font-size:0.85rem;}
    .grc-image-header span{font-family:'Plus Jakarta Sans',sans-serif;font-size:0.82rem;font-weight:800;color:#fff;letter-spacing:0.3px;}
    .grc-image-container{
      width:100%;min-height:300px;
      display:flex;align-items:center;justify-content:center;
      background:#f8fafc;position:relative;overflow:hidden;
    }
    .grc-image-container img{width:100%;height:auto;display:block;object-fit:contain;}
    .grc-image-placeholder{
      display:flex;flex-direction:column;align-items:center;gap:12px;
      padding:60px 40px;color:#94a3b8;text-align:center;
    }
    .grc-image-placeholder i{font-size:2.5rem;opacity:0.35;}
    .grc-image-placeholder p{font-family:'Plus Jakarta Sans',sans-serif;font-size:0.88rem;font-weight:600;margin:0;opacity:0.6;}

    /* Info badges */
    .grc-info-badges{
      display:grid;grid-template-columns:repeat(3,1fr);gap:16px;
      margin-top:28px;
    }
    .grc-info-badge{
      background:#f0f6ff;border:1.5px solid rgba(12,35,64,0.1);
      border-radius:12px;padding:16px;
      display:flex;align-items:center;gap:12px;
    }
    .grc-info-badge-icon{
      width:38px;height:38px;border-radius:10px;flex-shrink:0;
      background:linear-gradient(135deg,#0c2340,#1a3a6b);
      display:flex;align-items:center;justify-content:center;
      font-size:0.85rem;color:#ffcc00;
    }
    .grc-info-badge-text{font-size:0.75rem;font-weight:700;color:#0c2340;line-height:1.45;}
    .grc-info-badge-sub{font-size:0.68rem;color:#4a6080;font-weight:500;margin-top:2px;}

    @media(max-width:768px){
      .grc-hero-content{padding:48px 4% 40px;flex-direction:column;align-items:flex-start;}
      .grc-hero-logo img{height:90px;}
      .grc-hero-title{font-size:1.9rem;letter-spacing:-1px;}
      .grc-letter-body{padding:28px 24px;}
      .grc-btn{padding:16px 20px;}
      .grc-btn-icon{width:42px;height:42px;font-size:1.1rem;}
      .grc-info-badges{grid-template-columns:1fr;}
    }
    @media(max-width:480px){
      .grc-info-badges{grid-template-columns:1fr;}
    }
  `}),e.jsxs("div",{className:"grc-page",children:[e.jsxs("div",{className:"grc-hero",children:[e.jsx("div",{className:"grc-hero-grid"}),e.jsx("div",{className:"grc-hero-scan"}),e.jsx("div",{className:"grc-hero-glow"}),e.jsx("div",{className:"grc-hero-glow2"}),e.jsxs("div",{className:"grc-hero-content",children:[e.jsxs("div",{className:"grc-hero-left",children:[e.jsxs("div",{className:"grc-hero-badge",children:[e.jsx("i",{className:"fa-solid fa-hands-holding-circle"})," GRC · AICTE Guidelines"]}),e.jsxs("h1",{className:"grc-hero-title",children:["Grievance",e.jsx("br",{}),e.jsx("em",{children:"Redressal"}),e.jsx("br",{}),"Committee"]}),e.jsx("p",{className:"grc-hero-sub",children:"Committed to addressing and resolving grievances of students and staff in a fair, transparent and time-bound manner at Creative Techno College."}),e.jsx("div",{className:"grc-hero-pills",children:[{icon:"fa-scale-balanced",text:"Fair & Transparent"},{icon:"fa-lock",text:"Confidential Process"},{icon:"fa-clock",text:"Time-Bound Resolution"},{icon:"fa-building-columns",text:"AICTE Mandated"}].map((s,o)=>e.jsxs("span",{className:"grc-hero-pill",children:[e.jsx("i",{className:`fa-solid ${s.icon}`,style:{color:"#ffcc00",fontSize:"0.65rem"}}),s.text]},o))})]}),e.jsx("div",{className:"grc-hero-right",children:e.jsx("div",{className:"grc-hero-logo",children:e.jsx("img",{src:"/CTC NEW REACT WEBSITE/images/ICC/LOGO FINAL.png",alt:"Creative Techno College",onError:s=>{s.target.parentElement.innerHTML='<span style="font-size:2.5rem">🏫</span>'}})})})]})]}),e.jsx("div",{className:"grc-wave",children:e.jsx("svg",{viewBox:"0 0 1440 56",preserveAspectRatio:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M0,38 C360,56 1080,0 1440,38 L1440,56 L0,56 Z",fill:"#f0f4f8"})})}),e.jsx("div",{className:"grc-btn-strip grc-rv",children:e.jsxs("button",{className:"grc-btn",onClick:()=>window.open("https://docs.google.com/forms/d/e/1FAIpQLSe1Pcq1imy_OeOFSSbNucLUNQCVWzvi-J6kNVl5ihcX5N4LTw/viewform?usp=publish-editor","_blank"),children:[e.jsx("div",{className:"grc-btn-shine"}),e.jsxs("div",{className:"grc-btn-left",children:[e.jsx("div",{className:"grc-btn-icon",children:e.jsx("i",{className:"fa-solid fa-pen-to-square"})}),e.jsxs("div",{children:[e.jsx("div",{className:"grc-btn-title",children:"Submit Your Grievance Here"}),e.jsx("div",{className:"grc-btn-sub",children:"Confidential · Secure · Protected — File online or download form"})]})]}),e.jsx("div",{className:"grc-btn-arrow",children:e.jsx("i",{className:"fa-solid fa-arrow-right"})})]})}),e.jsxs("div",{className:"grc-main",children:[e.jsxs("div",{className:"grc-letter-card grc-rv",style:{transitionDelay:"0.1s"},children:[e.jsxs("div",{className:"grc-letter-header",children:[e.jsx("div",{className:"grc-letter-header-title",children:"Official Notice — GRC Constitution"}),e.jsx("div",{className:"grc-letter-header-sub",children:"As per AICTE norms and guidelines · Creative Techno College"})]}),e.jsxs("div",{className:"grc-letter-body",children:[e.jsx("div",{className:"grc-salutation",children:"Respected Sir/Madam,"}),e.jsxs("p",{className:"grc-letter-text",children:["I am pleased to inform you that our institution has formally constituted a"," ",e.jsx("strong",{children:"Grievance Redressal Committee"})," in accordance with the norms and guidelines prescribed by ",e.jsx("strong",{children:"AICTE"}),". The committee has been established to address and resolve grievances of students and staff in a"," ",e.jsx("strong",{children:"fair, transparent and time-bound manner"}),", thereby ensuring a healthy academic environment."]}),e.jsx("div",{className:"grc-members-intro",children:"The following members have been appointed to the Grievance Redressal Committee:"}),e.jsx("div",{className:"grc-members-list",children:gx.map(s=>e.jsxs("div",{className:"grc-member-item",children:[e.jsx("div",{className:"grc-member-num",children:String(s.no).padStart(2,"0")}),e.jsxs("div",{children:[e.jsx("div",{className:"grc-member-name",children:s.name}),e.jsx("div",{className:"grc-member-role",children:s.role})]})]},s.no))}),e.jsx("div",{className:"grc-info-badges",children:[{icon:"fa-building-columns",label:"AICTE Approved",sub:"Constituted per AICTE norms & guidelines"},{icon:"fa-gavel",label:"Natural Justice",sub:"Inquiries based on principles of natural justice"},{icon:"fa-shield-halved",label:"Healthy Environment",sub:"Ensuring a positive academic atmosphere"}].map((s,o)=>e.jsxs("div",{className:"grc-info-badge",children:[e.jsx("div",{className:"grc-info-badge-icon",children:e.jsx("i",{className:`fa-solid ${s.icon}`})}),e.jsxs("div",{children:[e.jsx("div",{className:"grc-info-badge-text",children:s.label}),e.jsx("div",{className:"grc-info-badge-sub",children:s.sub})]})]},o))})]})]}),e.jsxs("div",{className:"grc-image-card grc-rv",style:{transitionDelay:"0.2s"},children:[e.jsxs("div",{className:"grc-image-header",children:[e.jsx("i",{className:"fa-solid fa-image"}),e.jsx("span",{children:"GRC — Official Document / Notice"})]}),e.jsx("div",{className:"grc-image-container",children:e.jsx("img",{src:"/CTC NEW REACT WEBSITE/images/ICC/GRC.jpeg",alt:"GRC Official Notice",onError:s=>{s.target.style.display="none",s.target.parentElement.innerHTML=`
                    <div class="grc-image-placeholder">
                      <i class="fa-solid fa-file-image"></i>
                      <p>GRC official notice / document image will appear here.<br/>Place the image at: images/GRC/grc-notice.png</p>
                    </div>`}})})]})]})]})]})}const hi=[{name:"Abhisek Nanda",batch:"2023",domain:"Web"},{name:"Aliva Dipsikha Garnaik",batch:"2023",domain:"Web, Android"},{name:"Ipsita Pattanaik",batch:"2023",domain:"Web"},{name:"Bidusmita Mishra",batch:"2023",domain:"Web, Flutter, Backend"},{name:"Chinmayee Priyadarshini",batch:"2023",domain:"Web, Android"},{name:"Elin Pattanayak",batch:"2023",domain:"Web, Flutter"},{name:"Jasmin Samal",batch:"2023",domain:"Web, Flutter"},{name:"Monalisha Behera",batch:"2023",domain:"Web, Flutter"},{name:"Priyanka Pradhan",batch:"2023",domain:"Web, Android"},{name:"Ratnaprava Dhar",batch:"2023",domain:"Web, Flutter"},{name:"Rudra Prasad Sahu",batch:"2023",domain:"Web, Android, Backend"},{name:"Saswat Suman Dwibedy",batch:"2023",domain:"Web, Flutter, Backend"},{name:"Sudipta Suranjita Sahoo",batch:"2023",domain:"Web, Android"},{name:"Swatika Sahu",batch:"2023",domain:"Web"},{name:"Yashita Sahu",batch:"2023",domain:"Web, Android"},{name:"Abhipsa Jena",batch:"2024",domain:"Web, Android"},{name:"Bhagyalaxmi",batch:"2024",domain:"Web, Android"},{name:"Kajal Pradhan",batch:"2024",domain:"Web, Android"},{name:"Krishna Swain",batch:"2024",domain:"Web, Android"},{name:"Rimjhim Sahoo",batch:"2024",domain:"Web, Android"},{name:"Sasmita",batch:"2024",domain:"Web, Android"},{name:"Selina Sahu",batch:"2024",domain:"Web, Android"},{name:"Subham Sahu",batch:"2024",domain:"Web"},{name:"Supriyanjali Sahu",batch:"2024",domain:"Web, Android"},{name:"Tanmay Pradhan",batch:"2024",domain:"Web, Flutter"},{name:"Trishna Tamna",batch:"2024",domain:"Web, Android"},{name:"Yash Sahu",batch:"2024",domain:"Web"},{name:"Amit Pradhan",batch:"2024",domain:"Web"},{name:"Jasman Das",batch:"2024",domain:"Web"},{name:"Pratyush Patra",batch:"2024",domain:"Web"},{name:"Elina Biswal",batch:"2024",domain:"Web"},{name:"Prabhanjan Behera",batch:"2024",domain:"Web"},{name:"Happy Behera",batch:"2024",domain:"Web"},{name:"Anshuman Mishra",batch:"2025",domain:"Web, Android"},{name:"Priyadarsan Muduli",batch:"2025",domain:"Web, Android"},{name:"Biswajit Nayak",batch:"2025",domain:"Web, Flutter"},{name:"Omm Prakash Niyary",batch:"2025",domain:"Web, Flutter"},{name:"Ananta Swain",batch:"2025",domain:"Web, Flutter"},{name:"Dattatreya Khilar",batch:"2025",domain:"Web, Android"},{name:"Priyanka Mahanta",batch:"2025",domain:"Web, Android"},{name:"Ladly Sahoo",batch:"2025",domain:"Web, Flutter"},{name:"Arpita Sahu",batch:"2025",domain:"Web, Flutter"},{name:"Priyani Patra",batch:"2025",domain:"Web, Android"},{name:"Subhalaxmi Priyadarshini",batch:"2025",domain:"Web, Flutter"},{name:"Pradyumna Das",batch:"2025",domain:"Web, Flutter"},{name:"Satyabrata Pradhan",batch:"2025",domain:"Web, Flutter"},{name:"Sudhansu Pattanaik",batch:"2025",domain:"Web, Flutter"},{name:"Soumya Ranjan Sahu",batch:"2025",domain:"Web, Flutter"},{name:"Ankita Priyadarshini",batch:"2025",domain:"Web, Android"}],bx=[{name:"Attendance Management System",team:"Team Technocrat",date:"March 2023"},{name:"Lesson Planner",team:"Team Technocrat",date:"July 2024"},{name:"Notes and Assignment Tracker",team:"Team Technocrat",date:"October 2023"},{name:"Library Management System",team:"Team Technocrat",date:"March 2024"},{name:"Learning Management System (LMS)",team:"Team Technocrat",date:"July 2023"},{name:"Staff Management System",team:"Team Technocrat",date:"October 2024"},{name:"Student Database Management System",team:"Team Technocrat",date:"March 2024"},{name:"Result Management System",team:"Team Technocrat",date:"July 2025"}],yx=[{name:"Rakesh Senapati",img:"/CTC NEW REACT WEBSITE/images/TECHNOCRAT/Rakesh Ku. Senapati.jpg"},{name:"Shankar Chaitan Jena",img:"/CTC NEW REACT WEBSITE/images/TECHNOCRAT/Shankar Chaitan Jena.png"},{name:"Priyadarshan Pradhan",img:"/CTC NEW REACT WEBSITE/images/TECHNOCRAT/Priyadarshan Pradhan.png"},{name:"Abhijit Jena",img:"/CTC NEW REACT WEBSITE/images/TECHNOCRAT/Abhijit Jena.png"},{name:"Asutosh Sahu",img:"/CTC NEW REACT WEBSITE/images/TECHNOCRAT/asutosh sahu.jpg"},{name:"Chandra Kant Muduli",img:"/CTC NEW REACT WEBSITE/images/TECHNOCRAT/Chandrakant Muduli.png"},{name:"Anish Asutosh",img:"/CTC NEW REACT WEBSITE/images/TECHNOCRAT/Anish Asutosh Nayak.png"},{name:"Chandan Swain",img:"/CTC NEW REACT WEBSITE/images/TECHNOCRAT/Chandan Swain.png"},{name:"Debasish Pradhan",img:"/CTC NEW REACT WEBSITE/images/TECHNOCRAT/Debasis Pradhan.jpg"},{name:"Anata Kishor Swain",img:"/CTC NEW REACT WEBSITE/images/TECHNOCRAT/Ananta Kishore Swain.png"},{name:"Nikhil Nath",img:"/CTC NEW REACT WEBSITE/images/TECHNOCRAT/Nikhil Nath.png"},{name:"SK Akil",img:"/CTC NEW REACT WEBSITE/images/TECHNOCRAT/SK Akil.png"}],vx=[{version:"1.0",year:"2023",img:"/CTC NEW REACT WEBSITE/images/TECHNOCRAT/TechFest1.0.jpg",to:"/gymkhana/techfest/1",desc:"First edition — AI, IoT, Robotics & ML innovations by college students.",projects:8},{version:"2.0",year:"2024",img:"/CTC NEW REACT WEBSITE/images/TECHNOCRAT/TechFest2.0.jpg",to:"/gymkhana/techfest/2",desc:"Second edition — 19 cutting-edge projects in automation, safety, and smart systems.",projects:19},{version:"3.0",year:"2025",img:"/CTC NEW REACT WEBSITE/images/TECHNOCRAT/TechFest3.0.jpg",to:"/gymkhana/techfest/3",desc:"Viksit Bharat edition — schools join for the first time in this historic tech showcase.",projects:10}],qn=[{img:"/CTC NEW REACT WEBSITE/images/TECHNOCRAT/bannerpic1.png",title:"Team Technocrat",sub:"Empowering Innovation"},{img:"/CTC NEW REACT WEBSITE/images/TECHNOCRAT/bannerpic2.png",title:"Skill Development",sub:"Shaping Future Leaders"},{img:"/CTC NEW REACT WEBSITE/images/TECHNOCRAT/bannerpic3.png",title:"Career Excellence",sub:"Connecting Academia & Industry"}],jx={2023:{bg:"#eff6ff",color:"#2563eb",border:"#bfdbfe"},2024:{bg:"#ecfdf5",color:"#059669",border:"#a7f3d0"},2025:{bg:"#fef3c7",color:"#d97706",border:"#fde68a"}},gi=12;function Sx({page:r,totalPages:s,total:o,label:c,onPage:m}){if(s<=1)return null;const p=[];if(s<=7)for(let u=1;u<=s;u++)p.push(u);else if(r<=4)for(let u=1;u<=7;u++)p.push(u);else if(r>=s-3)for(let u=s-6;u<=s;u++)p.push(u);else for(let u=r-3;u<=r+3;u++)p.push(u);return e.jsxs("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",gap:8,marginTop:20,flexWrap:"wrap"},children:[e.jsx("button",{onClick:()=>m(Math.max(1,r-1)),disabled:r===1,style:{background:r===1?"#f0f4f8":"#0c2340",color:r===1?"#94a3b8":"#ffcc00",border:"none",borderRadius:10,padding:"8px 16px",fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"0.8rem",fontWeight:700,cursor:r===1?"default":"pointer"},children:"← Prev"}),p.map(u=>e.jsx("button",{onClick:()=>m(u),style:{background:r===u?"#0c2340":"#fff",color:r===u?"#ffcc00":"#0c2340",border:`1.5px solid ${r===u?"#0c2340":"rgba(12,35,64,0.15)"}`,borderRadius:10,padding:"8px 14px",minWidth:38,fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"0.8rem",fontWeight:700,cursor:"pointer"},children:u},u)),e.jsx("button",{onClick:()=>m(Math.min(s,r+1)),disabled:r===s,style:{background:r===s?"#f0f4f8":"#0c2340",color:r===s?"#94a3b8":"#ffcc00",border:"none",borderRadius:10,padding:"8px 16px",fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"0.8rem",fontWeight:700,cursor:r===s?"default":"pointer"},children:"Next →"}),e.jsxs("span",{style:{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"0.75rem",color:"#94a3b8",fontWeight:600},children:["Page ",r," of ",s," · ",o," ",c||"members"]})]})}function wx(){const[r,s]=v.useState(0),[o,c]=v.useState("all"),[m,p]=v.useState(1),u=o==="all"?hi:hi.filter(g=>g.batch===o),x=Math.ceil(u.length/gi),h=u.slice((m-1)*gi,m*gi),b=g=>{c(g),p(1)};return e.jsxs("div",{className:"tc-page",children:[e.jsx("style",{children:`
    @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap');
    *, *::before, *::after { box-sizing: border-box; }

    /* ══ HERO — exact PS style ══ */
    .tc-hero {
      background: linear-gradient(165deg,#020c1b 0%,#0c2340 40%,#112d52 70%,#06101e 100%);
      position: relative; overflow: hidden;
    }
    .tc-hero-inner {
      max-width: 1200px; margin: 0 auto;
      padding: 72px 5% 56px;
      display: flex; align-items: center; justify-content: space-between;
      gap: 48px; flex-wrap: wrap;
    }
    /* LEFT */
    .tc-hero-left { flex: 1; min-width: 280px; }
    .tc-hero-badge {
      display: inline-flex; align-items: center; gap: 8px;
      background: rgba(255,204,0,0.1); border: 1px solid rgba(255,204,0,0.28);
      color: #ffcc00; font-size: 0.68rem; font-weight: 800;
      padding: 6px 16px; border-radius: 30px; letter-spacing: 2.5px;
      text-transform: uppercase; margin-bottom: 18px;
    }
    .tc-hero-h1 {
      font-family: 'Plus Jakarta Sans', sans-serif;
      font-size: clamp(2.2rem,5vw,3.6rem); font-weight: 900;
      color: #fff; line-height: 1.08; letter-spacing: -1px; margin-bottom: 14px;
    }
    .tc-hero-h1 em { font-style: normal; color: #ffcc00; }
    .tc-hero-sub { color: rgba(255,255,255,0.42); font-size: 0.88rem; line-height: 1.75; max-width: 480px; margin-bottom: 28px; }
    .tc-hero-stats { display: flex; gap: 28px; flex-wrap: wrap; }
    .tc-hero-stat-val { font-family: 'Plus Jakarta Sans',sans-serif; font-size: 1.6rem; font-weight: 900; color: #ffcc00; line-height: 1; }
    .tc-hero-stat-lbl { font-size: 0.66rem; color: rgba(255,255,255,0.4); font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; margin-top: 3px; }

    /* RIGHT */
    .tc-hero-right { flex-shrink: 0; }
    .tc-hero-pills { display: flex; flex-direction: column; gap: 10px; }
    .tc-hero-pill {
      display: flex; align-items: center; gap: 12px;
      background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1);
      color: rgba(255,255,255,0.75); padding: 11px 20px; border-radius: 14px;
      font-family: 'Plus Jakarta Sans',sans-serif; font-weight: 600; font-size: 0.86rem;
      transition: background 0.2s;
    }
    .tc-hero-pill:hover { background: rgba(255,255,255,0.1); }
    .tc-hero-pill-dot { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; }

    /* WAVE */
    .tc-hero-wave { height: 56px; margin-top: -1px; }
    .tc-hero-wave svg { width: 100%; height: 100%; display: block; }

    /* ══ SHARED ══ */
    .tc-page { background: #f0f4f8; min-height: 100vh; font-family: 'Plus Jakarta Sans',sans-serif; }
    .tc-main { max-width: 1200px; margin: 0 auto; padding: 0 4% 80px; }
    .tc-pill-tag { display: inline-block; background: #eff6ff; color: #2563eb; border: 1px solid #bfdbfe; border-radius: 20px; padding: 5px 16px; font-size: 0.7rem; font-weight: 800; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 14px; }
    .tc-section-head { text-align: center; margin-bottom: 40px; }
    .tc-section-head h2 { font-family: 'Plus Jakarta Sans',sans-serif; font-size: clamp(1.7rem,4vw,2.3rem); font-weight: 900; color: #0a1628; margin-bottom: 10px; }
    .tc-section-head h2 span { background: linear-gradient(135deg,#0c2340,#2563eb); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
    .tc-section-head p { color: #64748b; font-size: 0.88rem; max-width: 480px; margin: 0 auto; }
    .tc-card { background: #fff; border-radius: 22px; box-shadow: 0 4px 24px rgba(10,22,40,0.09); border: 1px solid rgba(10,22,40,0.06); }

    /* ══ LEADERS ══ */
    .tc-leaders-wrap { padding: 72px 4%; }
    .tc-leaders-grid { max-width: 820px; margin: 0 auto; display: flex; gap: 28px; justify-content: center; flex-wrap: wrap; }
    .tc-leader-card { background: #fff; border-radius: 22px; overflow: hidden; box-shadow: 0 8px 30px rgba(10,22,40,0.09); border: 1px solid rgba(10,22,40,0.07); transition: transform 0.3s,box-shadow 0.3s; width: 220px; }
    .tc-leader-card:hover { transform: translateY(-8px); box-shadow: 0 20px 50px rgba(10,22,40,0.14); }
    .tc-leader-img { width: 100%; height: 200px; overflow: hidden; background: linear-gradient(135deg,#0a1628,#1a3a6b); }
    .tc-leader-img img { width: 100%; height: 100%; object-fit: cover; object-position: top center; display: block; }
   .tc-leader-body { 
        padding: 16px 14px 20px; /* Reduced side padding slightly */
        text-align: center; 
    }

    .tc-leader-body h4 { 
        font-family: 'Plus Jakarta Sans',sans-serif; 
        font-size: 0.75rem; /* Made role slightly smaller to emphasize name */
        font-weight: 600; 
        color: #64748b; /* Made role a softer color */
        text-transform: uppercase;
        letter-spacing: 0.5px;
        margin: 0 0 4px; 
    }
    .tc-leader-tag { display: inline-block; background: #eff6ff; color: #2563eb; border: 1px solid #bfdbfe; border-radius: 20px; padding: 3px 12px; font-size: 0.66rem; font-weight: 800; letter-spacing: 1px; text-transform: uppercase; }

    /* ══ SLIDER ══ */
    .tc-slider-wrap { background: #0a1628; padding: 60px 4%; }
    .tc-slider { max-width: 1100px; margin: 28px auto 0; position: relative; border-radius: 22px; overflow: hidden; height: 370px; box-shadow: 0 24px 80px rgba(0,0,0,0.4); }
    .tc-slide { position: absolute; inset: 0; opacity: 0; transition: opacity 0.5s; }
    .tc-slide.active { opacity: 1; }
    .tc-slide img { width: 100%; height: 100%; object-fit: cover; }
    .tc-slide-overlay { position: absolute; inset: 0; background: linear-gradient(to top,rgba(10,22,40,0.85),rgba(10,22,40,0.2) 60%); display: flex; flex-direction: column; justify-content: flex-end; padding: 36px; }
    .tc-slide-overlay h3 { font-family: 'Plus Jakarta Sans',sans-serif; font-size: 1.9rem; font-weight: 900; color: #fff; margin: 0 0 5px; }
    .tc-slide-overlay p { color: rgba(255,255,255,0.65); margin: 0; }
    .tc-slider-arrow { position: absolute; top: 50%; transform: translateY(-50%); background: rgba(255,255,255,0.15); border: 1px solid rgba(255,255,255,0.2); color: #fff; width: 42px; height: 42px; border-radius: 50%; cursor: pointer; display: flex; align-items: center; justify-content: center; z-index: 10; font-size: 0.85rem; transition: background 0.2s; }
    .tc-slider-arrow:hover { background: rgba(255,255,255,0.3); }
    .tc-slider-dots { display: flex; gap: 9px; justify-content: center; margin-top: 20px; }
    .tc-slider-dot { width: 10px; height: 10px; border-radius: 50%; background: rgba(255,255,255,0.3); border: none; cursor: pointer; padding: 0; transition: background 0.2s, transform 0.2s; }
    .tc-slider-dot.active { background: #ffcc00; transform: scale(1.3); }

    /* ══ TECHFEST CARDS ══ */
    .tc-techfest-wrap { padding: 72px 4%; background: #fff; }
    .tc-fest-grid { max-width: 1100px; margin: 0 auto; display: grid; grid-template-columns: repeat(3,1fr); gap: 26px; }
    .tc-fest-card { border-radius: 20px; overflow: hidden; box-shadow: 0 6px 28px rgba(10,22,40,0.1); transition: transform 0.3s,box-shadow 0.3s; text-decoration: none; display: flex; flex-direction: column; background: #fff; border: 1px solid rgba(10,22,40,0.06); }
    .tc-fest-card:hover { transform: translateY(-10px); box-shadow: 0 24px 60px rgba(10,22,40,0.18); }
    .tc-fest-img { position: relative; height: 185px; overflow: hidden; }
    .tc-fest-img img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.4s; }
    .tc-fest-card:hover .tc-fest-img img { transform: scale(1.08); }
    .tc-fest-img-overlay { position: absolute; inset: 0; background: linear-gradient(to top,rgba(10,22,40,0.7),transparent); }
    .tc-fest-ver { position: absolute; top: 12px; right: 12px; background: linear-gradient(135deg,#ffcc00,#ff8c00); color: #0a1628; padding: 4px 12px; border-radius: 20px; font-family: 'Plus Jakarta Sans',sans-serif; font-size: 0.75rem; font-weight: 900; }
    .tc-fest-body { padding: 20px; flex: 1; display: flex; flex-direction: column; }
    .tc-fest-body h3 { font-family: 'Plus Jakarta Sans',sans-serif; font-size: 1.1rem; font-weight: 900; color: #0a1628; margin: 0 0 7px; }
    .tc-fest-body p { font-size: 0.8rem; color: #64748b; line-height: 1.7; margin: 0 0 12px; flex: 1; }
    .tc-fest-meta { display: flex; gap: 14px; }
    .tc-fest-meta span { font-size: 0.72rem; color: #475569; display: flex; align-items: center; gap: 5px; font-weight: 600; }
    .tc-fest-link { display: inline-flex; align-items: center; gap: 5px; margin-top: 12px; color: #2563eb; font-size: 0.78rem; font-weight: 700; font-family: 'Plus Jakarta Sans',sans-serif; }

    /* ══ TEAM TABLE ══ */
    .tc-team-wrap { padding: 72px 4%; }
    .tc-filter-bar { display: flex; gap: 9px; justify-content: center; flex-wrap: wrap; margin-bottom: 24px; }
    .tc-filter-btn { padding: 8px 20px; border-radius: 30px; border: 1.5px solid rgba(10,22,40,0.15); background: #fff; font-family: 'Plus Jakarta Sans',sans-serif; font-size: 0.8rem; font-weight: 700; color: #475569; cursor: pointer; transition: all 0.2s; }
    .tc-filter-btn:hover { border-color: #0c2340; color: #0c2340; }
    .tc-filter-btn.active { background: #0c2340; border-color: #0c2340; color: #ffcc00; }
    .tc-table-wrap { max-width: 1000px; margin: 0 auto; border-radius: 18px; overflow: hidden; box-shadow: 0 4px 24px rgba(10,22,40,0.09); border: 1.5px solid rgba(10,22,40,0.07); }
    .tc-table { width: 100%; border-collapse: collapse; }
    .tc-table thead tr { background: linear-gradient(90deg,#0c2340,#1a3a6b); }
    .tc-table th { padding: 15px 20px; font-family: 'Plus Jakarta Sans',sans-serif; font-size: 0.78rem; font-weight: 800; color: #ffcc00; letter-spacing: 1px; text-transform: uppercase; text-align: left; }
    .tc-table td { padding: 13px 20px; font-size: 0.85rem; color: #334155; border-bottom: 1px solid rgba(10,22,40,0.06); background: #fff; }
    .tc-table tbody tr:nth-child(even) td { background: #f8fafc; }
    .tc-table tbody tr:hover td { background: #f0f4ff; }
    .tc-batch-pill { display: inline-block; padding: 2px 10px; border-radius: 12px; font-size: 0.72rem; font-weight: 800; }
    .tc-domain-label { font-size: 0.78rem; color: #2563eb; font-weight: 600; }

    /* ══ PROJECTS ══ */
    .tc-proj-wrap { padding: 72px 4%; background: #fff; }
    .tc-proj-inner { max-width: 1000px; margin: 0 auto; }
    .tc-proj-row { display: flex; align-items: center; gap: 18px; padding: 16px 22px; background: #f8faff; border-radius: 14px; margin-bottom: 9px; border: 1px solid rgba(10,22,40,0.06); border-left: 4px solid #0c2340; transition: transform 0.2s,box-shadow 0.2s; }
    .tc-proj-row:hover { transform: translateX(6px); box-shadow: 0 6px 20px rgba(10,22,40,0.08); }
    .tc-proj-num { width: 34px; height: 34px; background: linear-gradient(135deg,#0c2340,#1a3a6b); color: #ffcc00; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-family: 'Plus Jakarta Sans',sans-serif; font-size: 0.78rem; font-weight: 900; flex-shrink: 0; }
    .tc-proj-name { font-family: 'Plus Jakarta Sans',sans-serif; font-size: 0.88rem; font-weight: 700; color: #0a1628; }
    .tc-proj-sub { font-size: 0.73rem; color: #64748b; margin-top: 2px; }
    .tc-proj-date { font-size: 0.73rem; color: #0c2340; font-weight: 700; white-space: nowrap; flex-shrink: 0; }

    /* ══ EX-LEADERS ══ */
    .tc-ex-wrap { background: #0a1628; padding: 72px 4%; }
    .tc-ex-grid { max-width: 1100px; margin: 32px auto 0; display: grid; grid-template-columns: repeat(6,1fr); gap: 18px; }
    .tc-ex-card { text-align: center; }
    .tc-ex-img { width: 100%; aspect-ratio: 3/4; overflow: hidden; border-radius: 14px; border: 2px solid rgba(255,204,0,0.25); background: rgba(255,255,255,0.05); transition: border-color 0.3s; }
    .tc-ex-img img { width: 100%; height: 100%; object-fit: cover; object-position: top center; display: block; transition: transform 0.3s; }
    .tc-ex-card:hover .tc-ex-img { border-color: #ffcc00; }
    .tc-ex-card:hover .tc-ex-img img { transform: scale(1.05); }
    .tc-ex-name { font-family: 'Plus Jakarta Sans',sans-serif; font-size: 0.72rem; color: rgba(255,255,255,0.65); font-weight: 600; margin: 8px 0 0; line-height: 1.4; }

    /* ══ RESPONSIVE ══ */
    @media(max-width:900px) {
      .tc-hero-inner { flex-direction: column; gap: 36px; }
      .tc-hero-left .tc-hero-sub { max-width: 100%; }
    }
    @media(max-width:768px) {
      .tc-fest-grid { grid-template-columns: 1fr; }
      .tc-leaders-grid { flex-direction: column; align-items: center; }
      .tc-leader-card { width: 100%; max-width: 320px; }
      .tc-ex-grid { grid-template-columns: repeat(3,1fr); }
    }
    @media(max-width:480px) { .tc-ex-grid { grid-template-columns: repeat(2,1fr); } }
  `}),e.jsxs("div",{className:"tc-hero",children:[e.jsxs("div",{className:"tc-hero-inner",children:[e.jsxs("div",{className:"tc-hero-left",children:[e.jsxs("div",{className:"tc-hero-badge",children:[e.jsx("i",{className:"fa-solid fa-microchip"})," Gymkhana · Technical Club"]}),e.jsxs("h1",{className:"tc-hero-h1",children:["Team ",e.jsx("em",{children:"Technocrat"})]}),e.jsx("p",{className:"tc-hero-sub",children:"Empowering students with essential skills for today's competitive job market — bridging the gap between academic learning and industry demands through real-world projects and technical excellence."}),e.jsx("div",{className:"tc-hero-stats",children:[{val:`${hi.length}+`,label:"Active Members"},{val:"8+",label:"Projects Built"},{val:"3",label:"TechFest Editions"},{val:"3",label:"Batches"}].map((g,T)=>e.jsxs("div",{children:[e.jsx("div",{className:"tc-hero-stat-val",children:g.val}),e.jsx("div",{className:"tc-hero-stat-lbl",children:g.label})]},T))})]}),e.jsx("div",{className:"tc-hero-right",children:e.jsx("div",{className:"tc-hero-pills",children:[{dot:"#3b82f6",icon:"fa-solid fa-code",label:"Web Development"},{dot:"#10b981",icon:"fa-solid fa-mobile-alt",label:"Android & Flutter"},{dot:"#ffcc00",icon:"fa-solid fa-server",label:"Backend Systems"},{dot:"#ec4899",icon:"fa-solid fa-rocket",label:"TechFest Series"},{dot:"#00d4ff",icon:"fa-solid fa-diagram-project",label:"8+ Projects Deployed"}].map((g,T)=>e.jsxs("div",{className:"tc-hero-pill",children:[e.jsx("span",{className:"tc-hero-pill-dot",style:{background:g.dot}}),e.jsx("i",{className:g.icon,style:{color:g.dot,width:16,textAlign:"center"}}),g.label]},T))})})]}),e.jsx("div",{className:"tc-hero-wave",children:e.jsx("svg",{viewBox:"0 0 1440 56",preserveAspectRatio:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M0,38 C360,56 1080,0 1440,38 L1440,56 L0,56 Z",fill:"#f0f4f8"})})})]}),e.jsxs("div",{className:"tc-main",children:[e.jsxs("div",{className:"tc-leaders-wrap",children:[e.jsxs("div",{className:"tc-section-head",children:[e.jsxs("div",{className:"tc-pill-tag",children:[e.jsx("i",{className:"fa-solid fa-users"})," Our Leadership"]}),e.jsxs("h2",{children:["Club Incharge & ",e.jsx("span",{children:"Secretaries"})]})]}),e.jsx("div",{className:"tc-leaders-grid",children:[{role:"Club Incharge",name:"Mr. Bhabani Sankar Sahoo",img:"/CTC NEW REACT WEBSITE/images/TECHNOCRAT/TeamIncharge.jpg",tag:"Faculty Lead"},{role:"Club Secretary (Boy)",name:"Mr. Saswat Suman Dwibedy",img:"/CTC NEW REACT WEBSITE/images/TECHNOCRAT/boySecretary.jpg",tag:"Student Rep"},{role:"Club Secretary (Girl)",name:"Ms. Sudipta Suranjita Sahoo",img:"/CTC NEW REACT WEBSITE/images/TECHNOCRAT/girlSecretary.jpg",tag:"Student Rep"}].map((g,T)=>e.jsxs("div",{className:"tc-leader-card",children:[e.jsx("div",{className:"tc-leader-img",children:e.jsx("img",{src:g.img,alt:g.role})}),e.jsxs("div",{className:"tc-leader-body",children:[e.jsx("h4",{children:g.role}),e.jsx("div",{style:{fontSize:"0.9rem",fontWeight:700,color:"#2563eb",marginBottom:"8px",fontFamily:"'Plus Jakarta Sans', sans-serif"},children:g.name}),e.jsx("span",{className:"tc-leader-tag",children:g.tag})]})]},T))})]}),e.jsxs("div",{className:"tc-slider-wrap",style:{borderRadius:22,marginBottom:0},children:[e.jsxs("div",{className:"tc-section-head",style:{marginBottom:0},children:[e.jsx("div",{className:"tc-pill-tag",style:{background:"rgba(255,204,0,0.15)",color:"#ffcc00",border:"1px solid rgba(255,204,0,0.3)"},children:"Team Gallery"}),e.jsxs("h2",{style:{color:"#fff",fontFamily:"'Plus Jakarta Sans',sans-serif"},children:["Our Team ",e.jsx("span",{style:{color:"#ffcc00",WebkitTextFillColor:"#ffcc00"},children:"in Action"})]})]}),e.jsxs("div",{className:"tc-slider",children:[qn.map((g,T)=>e.jsxs("div",{className:`tc-slide${r===T?" active":""}`,children:[e.jsx("img",{src:g.img,alt:g.title}),e.jsxs("div",{className:"tc-slide-overlay",children:[e.jsx("h3",{children:g.title}),e.jsx("p",{children:g.sub})]})]},T)),e.jsx("button",{className:"tc-slider-arrow",style:{left:14},onClick:()=>s((r-1+qn.length)%qn.length),children:e.jsx("i",{className:"fa-solid fa-chevron-left"})}),e.jsx("button",{className:"tc-slider-arrow",style:{right:14},onClick:()=>s((r+1)%qn.length),children:e.jsx("i",{className:"fa-solid fa-chevron-right"})})]}),e.jsx("div",{className:"tc-slider-dots",children:qn.map((g,T)=>e.jsx("button",{className:`tc-slider-dot${r===T?" active":""}`,onClick:()=>s(T)},T))})]}),e.jsxs("div",{className:"tc-techfest-wrap",style:{borderRadius:22,marginTop:0},children:[e.jsxs("div",{className:"tc-section-head",children:[e.jsxs("div",{className:"tc-pill-tag",children:[e.jsx("i",{className:"fa-solid fa-rocket"})," Mega Event"]}),e.jsxs("h2",{children:["Tech",e.jsx("span",{children:"Fest"})," Series"]}),e.jsx("p",{children:"Our annual flagship event where innovation meets excellence — three editions, each bigger and bolder."})]}),e.jsx("div",{className:"tc-fest-grid",children:vx.map((g,T)=>e.jsxs(Se,{to:g.to,className:"tc-fest-card",children:[e.jsxs("div",{className:"tc-fest-img",children:[e.jsx("img",{src:g.img,alt:`TechFest ${g.version}`}),e.jsx("div",{className:"tc-fest-img-overlay"}),e.jsxs("span",{className:"tc-fest-ver",children:["TechFest ",g.version]})]}),e.jsxs("div",{className:"tc-fest-body",children:[e.jsxs("h3",{children:["TechFest ",g.version]}),e.jsx("p",{children:g.desc}),e.jsxs("div",{className:"tc-fest-meta",children:[e.jsxs("span",{children:[e.jsx("i",{className:"fa-regular fa-calendar"})," ",g.year]}),e.jsxs("span",{children:[e.jsx("i",{className:"fa-solid fa-diagram-project"})," ",g.projects," Projects"]})]}),e.jsxs("div",{className:"tc-fest-link",children:["Explore ",e.jsx("i",{className:"fa-solid fa-arrow-right",style:{fontSize:"0.7rem"}})]})]})]},T))})]}),e.jsxs("div",{className:"tc-team-wrap",children:[e.jsxs("div",{className:"tc-section-head",children:[e.jsxs("div",{className:"tc-pill-tag",children:[e.jsx("i",{className:"fa-solid fa-code"})," Our Team"]}),e.jsxs("h2",{children:["Meet the ",e.jsx("span",{children:"Technocrats"})]}),e.jsxs("p",{children:[hi.length," talented members across 3 batches — building, innovating, and growing together."]})]}),e.jsx("div",{className:"tc-filter-bar",children:["all","2023","2024","2025"].map(g=>e.jsx("button",{className:`tc-filter-btn${o===g?" active":""}`,onClick:()=>b(g),children:g==="all"?"All Batches":`Batch ${g}`},g))}),e.jsx("div",{className:"tc-table-wrap",children:e.jsxs("table",{className:"tc-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{width:48},children:"#"}),e.jsx("th",{children:"Name"}),e.jsx("th",{style:{width:100},children:"Batch"}),e.jsx("th",{children:"Domain"})]})}),e.jsx("tbody",{children:h.map((g,T)=>{const E=jx[g.batch];return e.jsxs("tr",{children:[e.jsx("td",{style:{color:"#94a3b8",fontWeight:700},children:(m-1)*gi+T+1}),e.jsx("td",{style:{fontWeight:700},children:g.name}),e.jsx("td",{children:e.jsx("span",{className:"tc-batch-pill",style:{background:E.bg,color:E.color,border:`1px solid ${E.border}`},children:g.batch})}),e.jsx("td",{children:e.jsx("span",{className:"tc-domain-label",children:g.domain})})]},T)})})]})}),e.jsx(Sx,{page:m,totalPages:x,total:u.length,label:"members",onPage:p})]}),e.jsxs("div",{className:"tc-proj-wrap",style:{borderRadius:22},children:[e.jsxs("div",{className:"tc-section-head",children:[e.jsxs("div",{className:"tc-pill-tag",children:[e.jsx("i",{className:"fa-solid fa-diagram-project"})," Work"]}),e.jsxs("h2",{children:["Our ",e.jsx("span",{children:"Projects"})]}),e.jsx("p",{children:"Real-world software systems built by Team Technocrat for the college community."})]}),e.jsx("div",{className:"tc-proj-inner",children:bx.map((g,T)=>e.jsxs("div",{className:"tc-proj-row",children:[e.jsx("div",{className:"tc-proj-num",children:String(T+1).padStart(2,"0")}),e.jsxs("div",{style:{flex:1},children:[e.jsx("div",{className:"tc-proj-name",children:g.name}),e.jsxs("div",{className:"tc-proj-sub",children:[e.jsx("i",{className:"fa-solid fa-users",style:{fontSize:"0.6rem",marginRight:4}}),g.team]})]}),e.jsxs("div",{className:"tc-proj-date",children:[e.jsx("i",{className:"fa-regular fa-calendar",style:{marginRight:5}}),g.date]})]},T))})]})]}),e.jsxs("div",{className:"tc-ex-wrap",children:[e.jsxs("div",{className:"tc-section-head",children:[e.jsx("div",{className:"tc-pill-tag",style:{background:"rgba(255,204,0,0.15)",color:"#ffcc00",border:"1px solid rgba(255,204,0,0.3)"},children:"Alumni"}),e.jsxs("h2",{style:{color:"#fff",fontFamily:"'Plus Jakarta Sans',sans-serif"},children:["Excellent ",e.jsx("span",{style:{color:"#ffcc00",WebkitTextFillColor:"#ffcc00"},children:"Ex-Leaders"})]}),e.jsx("p",{style:{color:"rgba(255,255,255,0.45)",fontSize:"0.88rem",maxWidth:480,margin:"0 auto"},children:"Leaders who shaped Technocrat and went on to make their mark in the industry."})]}),e.jsx("div",{className:"tc-ex-grid",children:yx.map((g,T)=>e.jsxs("div",{className:"tc-ex-card",children:[e.jsx("div",{className:"tc-ex-img",children:e.jsx("img",{src:g.img,alt:g.name})}),e.jsx("p",{className:"tc-ex-name",children:g.name})]},T))})]})]})}const Op=[{name:"100m Running",month:"December",icon:"fa-person-running"},{name:"200m Running",month:"December",icon:"fa-person-running"},{name:"Long Jump",month:"December",icon:"fa-arrow-right-long"},{name:"High Jump",month:"December",icon:"fa-up-long"},{name:"Discus Throw",month:"December",icon:"fa-circle"},{name:"Shotput",month:"December",icon:"fa-baseball"},{name:"Javelin Throw",month:"December",icon:"fa-location-arrow"},{name:"Relay Race",month:"December",icon:"fa-people-arrows"},{name:"Badminton",month:"December",icon:"fa-table-tennis-paddle-ball"},{name:"Chess",month:"December",icon:"fa-chess"},{name:"Carrom",month:"December",icon:"fa-chess-board"}],Cx=[{icon:"fa-solid fa-handshake",text:"To develop the spirit of sportsmanship and healthy competition."},{icon:"fa-solid fa-heart-pulse",text:"To maintain physical and mental fitness through regular sports activities."},{icon:"fa-solid fa-star",text:"To identify and nurture sporting talent among students."},{icon:"fa-solid fa-people-group",text:"To promote teamwork, discipline, and time management skills."},{icon:"fa-solid fa-scale-balanced",text:"To provide a balance between academics and extracurricular excellence."}],kx=Array.from({length:12},(r,s)=>({src:`/CTC%20NEW%20REACT%20WEBSITE/images/SPORTS/image${s+1}.jpeg`,alt:`Sports Event ${s+1}`})),Dp=["normal","tall","wide","normal","normal","wide","tall","normal"];function Ax(){const[r,s]=v.useState(null),[o,c]=v.useState(!1),m=v.useMemo(()=>kx.map((b,y)=>({...b,size:Dp[y%Dp.length]})),[]),p=o?m:m.slice(0,10),u=v.useCallback(b=>{r!==null&&(b.key==="ArrowRight"&&s(y=>(y+1)%p.length),b.key==="ArrowLeft"&&s(y=>(y-1+p.length)%p.length),b.key==="Escape"&&s(null))},[r,p.length]);v.useEffect(()=>(window.addEventListener("keydown",u),()=>window.removeEventListener("keydown",u)),[u]);const x=r!==null?p[r]:null;return e.jsxs("div",{className:"tc-page",children:[e.jsx("style",{children:`
    @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap');
    *, *::before, *::after { box-sizing: border-box; }

    .tc-hero {
      background: linear-gradient(165deg,#020c1b 0%,#0c2340 40%,#112d52 70%,#06101e 100%);
      position: relative; overflow: hidden;
    }
    .tc-hero-inner {
      max-width: 1200px; margin: 0 auto;
      padding: 72px 5% 56px;
      display: flex; align-items: center; justify-content: space-between;
      gap: 48px; flex-wrap: wrap;
    }
    .tc-hero-left { flex: 1; min-width: 280px; }
    .tc-hero-badge {
      display: inline-flex; align-items: center; gap: 8px;
      background: rgba(255,204,0,0.1); border: 1px solid rgba(255,204,0,0.28);
      color: #ffcc00; font-size: 0.68rem; font-weight: 800;
      padding: 6px 16px; border-radius: 30px; letter-spacing: 2.5px;
      text-transform: uppercase; margin-bottom: 18px;
    }
    .tc-hero-h1 {
      font-family: 'Plus Jakarta Sans', sans-serif;
      font-size: clamp(2.2rem,5vw,3.6rem); font-weight: 900;
      color: #fff; line-height: 1.08; letter-spacing: -1px; margin-bottom: 14px;
    }
    .tc-hero-h1 em { font-style: normal; color: #ffcc00; }
    .tc-hero-sub { color: rgba(255,255,255,0.42); font-size: 0.88rem; line-height: 1.75; max-width: 480px; margin-bottom: 28px; }
    .tc-hero-stats { display: flex; gap: 28px; flex-wrap: wrap; }
    .tc-hero-stat-val { font-family: 'Plus Jakarta Sans',sans-serif; font-size: 1.6rem; font-weight: 900; color: #ffcc00; line-height: 1; }
    .tc-hero-stat-lbl { font-size: 0.66rem; color: rgba(255,255,255,0.4); font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; margin-top: 3px; }

    .tc-hero-right { flex-shrink: 0; }
    .tc-hero-pills { display: flex; flex-direction: column; gap: 10px; }
    .tc-hero-pill {
      display: flex; align-items: center; gap: 12px;
      background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1);
      color: rgba(255,255,255,0.75); padding: 11px 20px; border-radius: 14px;
      font-family: 'Plus Jakarta Sans',sans-serif; font-weight: 600; font-size: 0.86rem;
      transition: background 0.2s;
    }
    .tc-hero-pill:hover { background: rgba(255,255,255,0.1); }
    .tc-hero-pill-dot { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; }

    .tc-hero-wave { height: 56px; margin-top: -1px; }
    .tc-hero-wave svg { width: 100%; height: 100%; display: block; }

    .tc-page { background: #f0f4f8; min-height: 100vh; font-family: 'Plus Jakarta Sans',sans-serif; }
    .tc-main { max-width: 1200px; margin: 0 auto; padding: 0 4% 80px; }
    .tc-pill-tag { display: inline-block; background: #eff6ff; color: #2563eb; border: 1px solid #bfdbfe; border-radius: 20px; padding: 5px 16px; font-size: 0.7rem; font-weight: 800; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 14px; }
    .tc-section-head { text-align: center; margin-bottom: 40px; }
    .tc-section-head h2 { font-family: 'Plus Jakarta Sans',sans-serif; font-size: clamp(1.7rem,4vw,2.3rem); font-weight: 900; color: #0a1628; margin-bottom: 10px; }
    .tc-section-head h2 span { background: linear-gradient(135deg,#0c2340,#2563eb); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
    .tc-section-head p { color: #64748b; font-size: 0.88rem; max-width: 480px; margin: 0 auto; }

    .tc-leaders-wrap { padding: 72px 4%; }
    .tc-leaders-grid { max-width: 820px; margin: 0 auto; display: flex; gap: 28px; justify-content: center; flex-wrap: wrap; }
    .tc-leader-card { background: #fff; border-radius: 22px; overflow: hidden; box-shadow: 0 8px 30px rgba(10,22,40,0.09); border: 1px solid rgba(10,22,40,0.07); transition: transform 0.3s,box-shadow 0.3s; width: 220px; }
    .tc-leader-card:hover { transform: translateY(-8px); box-shadow: 0 20px 50px rgba(10,22,40,0.14); }
    .tc-leader-img { width: 100%; height: 200px; overflow: hidden; background: linear-gradient(135deg,#0a1628,#1a3a6b); }
    .tc-leader-img img { width: 100%; height: 100%; object-fit: cover; object-position: top center; display: block; }
    .tc-leader-body { padding: 16px 18px 20px; text-align: center; }
    .tc-leader-body h4 { font-family: 'Plus Jakarta Sans',sans-serif; font-size: 0.8rem; font-weight: 600; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px; margin: 0 0 4px; }
    .tc-leader-tag { display: inline-block; background: #eff6ff; color: #2563eb; border: 1px solid #bfdbfe; border-radius: 20px; padding: 3px 12px; font-size: 0.66rem; font-weight: 800; letter-spacing: 1px; text-transform: uppercase; }

    .tc-obj-grid { max-width: 1000px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
    .tc-obj-card { background: #fff; border-radius: 16px; padding: 22px 24px; display: flex; align-items: flex-start; gap: 16px; border: 1px solid rgba(10,22,40,0.07); box-shadow: 0 4px 16px rgba(10,22,40,0.06); transition: transform 0.2s; }
    .tc-obj-card:hover { transform: translateX(6px); }
    .tc-obj-icon { width: 42px; height: 42px; background: linear-gradient(135deg,#059669,#10b981); border-radius: 12px; display: flex; align-items: center; justify-content: center; color: #fff; font-size: 1rem; flex-shrink: 0; }
    .tc-obj-card p { margin: 0; color: #334155; font-size: 0.88rem; line-height: 1.7; }

    .tc-proj-wrap { padding: 72px 4%; background: #fff; border-radius: 22px; margin: 40px 0; }
    .tc-proj-inner { max-width: 1000px; margin: 0 auto; }
    .tc-proj-row { display: flex; align-items: center; gap: 18px; padding: 16px 22px; background: #f8faff; border-radius: 14px; margin-bottom: 9px; border: 1px solid rgba(10,22,40,0.06); border-left: 4px solid #0c2340; transition: transform 0.2s,box-shadow 0.2s; }
    .tc-proj-row:hover { transform: translateX(6px); box-shadow: 0 6px 20px rgba(10,22,40,0.08); }
    .tc-proj-num { width: 34px; height: 34px; background: linear-gradient(135deg,#0c2340,#1a3a6b); color: #ffcc00; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-family: 'Plus Jakarta Sans',sans-serif; font-size: 0.78rem; font-weight: 900; flex-shrink: 0; }
    .tc-proj-name { font-family: 'Plus Jakarta Sans',sans-serif; font-size: 0.88rem; font-weight: 700; color: #0a1628; }
    .tc-proj-date { font-size: 0.73rem; color: #0c2340; font-weight: 700; white-space: nowrap; flex-shrink: 0; }

    .tc-gallery-wrap { background: #0a1628; padding: 72px 4%; }
    .tc-gallery-grid {
      max-width: 1200px; margin: 40px auto 0;
      display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      grid-auto-rows: 220px; grid-auto-flow: dense; gap: 20px;
    }
    .tc-gallery-item {
      position: relative; border-radius: 16px; overflow: hidden; cursor: pointer;
      border: 1px solid rgba(255,255,255,0.1); transition: transform 0.3s;
    }
    .tc-gallery-item:hover { transform: scale(1.02); box-shadow: 0 20px 40px rgba(0,0,0,0.5); }
    .tc-gallery-item img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s; }
    .tc-gallery-item:hover img { transform: scale(1.1); }
    .tc-gallery-overlay {
      position: absolute; inset: 0; background: rgba(10,22,40,0.5);
      display: flex; align-items: center; justify-content: center; opacity: 0; transition: 0.3s;
    }
    .tc-gallery-item:hover .tc-gallery-overlay { opacity: 1; }
    .tc-gallery-overlay i { color: #ffcc00; font-size: 2rem; transform: scale(0.5); transition: 0.3s; }
    .tc-gallery-item:hover .tc-gallery-overlay i { transform: scale(1); }
    .tc-item-tall { grid-row: span 2; }
    .tc-item-wide { grid-column: span 2; }

    .gl-lightbox {
      position: fixed; inset: 0; background: rgba(1, 7, 17, 0.99); z-index: 2000;
      display: flex; align-items: center; justify-content: center; padding: 40px;
      backdrop-filter: blur(15px);
    }
    .gl-close {
      position: absolute; top: 40px; right: 40px; background: rgba(255,255,255,0.05);
      border: none; color: #fff; width: 60px; height: 60px; border-radius: 50%; cursor: pointer;
      font-size: 1.8rem; transition: 0.3s; z-index: 2300;
    }
    .gl-nav {
      position: absolute; top: 50%; transform: translateY(-50%);
      background: rgba(255,255,255,0.05); border: none; color: #fff; width: 70px; height: 70px;
      border-radius: 50%; cursor: pointer; transition: 0.3s; z-index: 2200; font-size: 1.5rem;
    }
    .gl-nav:hover { background: #ffcc00; color: #000; }
    .gl-panel { max-width: 1000px; width: 100%; display: flex; flex-direction: column; align-items: center; }
    .gl-img { max-width: 100%; max-height: 60vh; object-fit: contain; border-radius: 16px; box-shadow: 0 40px 100px rgba(0,0,0,0.8); }

    .tc-mission-static {
      background: #0a1628; padding: 60px 4%; border-radius: 22px; margin: 40px 0;
    }
    .tc-mission-card {
      max-width: 1100px; margin: 0 auto; position: relative; border-radius: 22px; overflow: hidden; height: 370px; box-shadow: 0 24px 80px rgba(0,0,0,0.4);
    }
    .tc-mission-img { width: 100%; height: 100%; object-fit: cover; }
    .tc-mission-overlay {
      position: absolute; inset: 0; background: linear-gradient(to top,rgba(10,22,40,0.85),rgba(10,22,40,0.2) 60%);
      display: flex; flex-direction: column; justify-content: flex-end; padding: 36px;
    }
    .tc-mission-overlay h3 { font-family: 'Plus Jakarta Sans',sans-serif; font-size: 1.9rem; font-weight: 900; color: #fff; margin: 0 0 5px; }

    @media(max-width:900px) {
      .tc-hero-inner { flex-direction: column; gap: 36px; }
      .tc-obj-grid { grid-template-columns: 1fr; }
      .tc-gallery-grid { grid-template-columns: repeat(2,1fr); }
    }
  `}),e.jsxs("div",{className:"tc-hero",children:[e.jsxs("div",{className:"tc-hero-inner",children:[e.jsxs("div",{className:"tc-hero-left",children:[e.jsxs("div",{className:"tc-hero-badge",children:[e.jsx("i",{className:"fa-solid fa-trophy"})," Gymkhana · Sports Club"]}),e.jsxs("h1",{className:"tc-hero-h1",children:["SPORTS ",e.jsx("em",{children:"CLUB"})]}),e.jsx("p",{className:"tc-hero-sub",children:"Dedicated to promoting physical fitness, discipline, teamwork, and sportsmanship — building resilience, leadership, and a healthy lifestyle among students."}),e.jsx("div",{className:"tc-hero-stats",children:[{val:`${Op.length}+`,label:"Sports Events"},{val:"Annual",label:"Sports Meet"},{val:"100%",label:"Participation"},{val:"Dec",label:"Season"}].map((b,y)=>e.jsxs("div",{children:[e.jsx("div",{className:"tc-hero-stat-val",children:b.val}),e.jsx("div",{className:"tc-hero-stat-lbl",children:b.label})]},y))})]}),e.jsx("div",{className:"tc-hero-right",children:e.jsx("div",{className:"tc-hero-pills",children:[{dot:"#3b82f6",icon:"fa-solid fa-person-running",label:"Track & Field"},{dot:"#10b981",icon:"fa-solid fa-futbol",label:"Team Sports"},{dot:"#ffcc00",icon:"fa-solid fa-chess",label:"Indoor Games"},{dot:"#ec4899",icon:"fa-solid fa-dumbbell",label:"Fitness Workshops"},{dot:"#00d4ff",icon:"fa-solid fa-trophy",label:"Tournaments"}].map((b,y)=>e.jsxs("div",{className:"tc-hero-pill",children:[e.jsx("span",{className:"tc-hero-pill-dot",style:{background:b.dot}}),e.jsx("i",{className:b.icon,style:{color:b.dot,width:16,textAlign:"center"}}),b.label]},y))})})]}),e.jsx("div",{className:"tc-hero-wave",children:e.jsx("svg",{viewBox:"0 0 1440 56",preserveAspectRatio:"none",children:e.jsx("path",{d:"M0,38 C360,56 1080,0 1440,38 L1440,56 L0,56 Z",fill:"#f0f4f8"})})})]}),e.jsxs("div",{className:"tc-main",children:[e.jsxs("div",{className:"tc-leaders-wrap",children:[e.jsxs("div",{className:"tc-section-head",children:[e.jsxs("div",{className:"tc-pill-tag",children:[e.jsx("i",{className:"fa-solid fa-users"})," Our Leadership"]}),e.jsxs("h2",{children:["Club Incharge & ",e.jsx("span",{children:"Secretaries"})]})]}),e.jsx("div",{className:"tc-leaders-grid",children:[{role:"Club Incharge",name:"Mr. Satya S. S. Dehury",img:"/CTC NEW REACT WEBSITE/images/SPORTS/Satya Sir.jpg",tag:"Faculty Lead"},{role:"Club Secretary (Boy)",name:" Mr. Chiranjib Pattnaik",img:"/CTC NEW REACT WEBSITE/images/SPORTS/gulu.jpeg",tag:"Student Rep"},{role:"Club Secretary (Girl)",name:"Monalisha Behera",img:"/CTC NEW REACT WEBSITE/images/SPORTS/monalisha.jpeg",tag:"Student Rep"}].map((b,y)=>e.jsxs("div",{className:"tc-leader-card",children:[e.jsx("div",{className:"tc-leader-img",children:e.jsx("img",{src:b.img,alt:b.role})}),e.jsxs("div",{className:"tc-leader-body",children:[e.jsx("h4",{children:b.role}),e.jsx("div",{style:{fontSize:"0.9rem",fontWeight:700,color:"#2563eb",marginBottom:"8px",fontFamily:"'Plus Jakarta Sans', sans-serif"},children:b.name}),e.jsx("span",{className:"tc-leader-tag",children:b.tag})]})]},y))})]}),e.jsxs("div",{style:{padding:"72px 4%"},children:[e.jsxs("div",{className:"tc-section-head",children:[e.jsxs("div",{className:"tc-pill-tag",children:[e.jsx("i",{className:"fa-solid fa-bullseye"})," Mission"]}),e.jsxs("h2",{children:["Our ",e.jsx("span",{children:"Objectives"})]}),e.jsx("p",{children:"Core principles guiding every tournament, session, and activity we organize."})]}),e.jsx("div",{className:"tc-obj-grid",children:Cx.map((b,y)=>e.jsxs("div",{className:"tc-obj-card",children:[e.jsx("div",{className:"tc-obj-icon",children:e.jsx("i",{className:b.icon})}),e.jsx("p",{children:b.text})]},y))})]}),e.jsxs("div",{className:"tc-proj-wrap",children:[e.jsxs("div",{className:"tc-section-head",children:[e.jsxs("div",{className:"tc-pill-tag",children:[e.jsx("i",{className:"fa-solid fa-list"})," Events"]}),e.jsxs("h2",{children:["Our ",e.jsx("span",{children:"Activities"})]}),e.jsx("p",{children:"Annual sports events organized every December during the Sports Meet."})]}),e.jsx("div",{className:"tc-proj-inner",children:Op.map((b,y)=>e.jsxs("div",{className:"tc-proj-row",children:[e.jsx("div",{className:"tc-proj-num",children:String(y+1).padStart(2,"0")}),e.jsx("div",{style:{flex:1},children:e.jsxs("div",{className:"tc-proj-name",children:[e.jsx("i",{className:`fa-solid ${b.icon}`,style:{marginRight:8,color:"#2563eb"}}),b.name]})}),e.jsxs("div",{className:"tc-proj-date",children:[e.jsx("i",{className:"fa-regular fa-calendar",style:{marginRight:5}}),b.month]})]},y))})]}),e.jsx("div",{className:"tc-mission-static",children:e.jsxs("div",{className:"tc-mission-card",children:[e.jsx("img",{src:"/CTC NEW REACT WEBSITE/images/SPORTS/banner.jpeg",alt:"Sports Club Banner",className:"tc-mission-img"}),e.jsxs("div",{className:"tc-mission-overlay",children:[e.jsx("h3",{children:"Annual Sports Meet"}),e.jsx("p",{children:"Where champions are made — track, field, and team sports bring out the best in every participant."})]})]})})]}),e.jsxs("div",{className:"tc-gallery-wrap",children:[e.jsxs("div",{className:"tc-section-head",children:[e.jsxs("div",{className:"tc-pill-tag",style:{background:"rgba(255,204,0,0.15)",color:"#ffcc00",border:"1px solid rgba(255,204,0,0.3)"},children:[e.jsx("i",{className:"fa-solid fa-images"})," Gallery"]}),e.jsxs("h2",{style:{color:"#fff"},children:["Annual Sports ",e.jsx("span",{style:{color:"#ffcc00"},children:"Highlights"})]}),e.jsx("p",{style:{color:"rgba(255,255,255,0.45)"},children:"Moments of triumph, teamwork, and sportsmanship from our annual sports meets."})]}),e.jsx("div",{className:"tc-gallery-grid",children:p.map((b,y)=>e.jsxs("div",{className:`tc-gallery-item ${b.size==="tall"?"tc-item-tall":""} ${b.size==="wide"?"tc-item-wide":""}`,onClick:()=>s(y),children:[e.jsx("img",{src:b.src,alt:b.alt,loading:"lazy"}),e.jsx("div",{className:"tc-gallery-overlay",children:e.jsx("i",{className:"fa-solid fa-expand"})})]},y))})]}),x&&e.jsxs("div",{className:"gl-lightbox",onClick:b=>b.target===b.currentTarget&&s(null),children:[e.jsx("button",{className:"gl-close",onClick:()=>s(null),children:"✕"}),e.jsx("button",{className:"gl-nav",style:{left:"40px"},onClick:()=>s(b=>(b-1+p.length)%p.length),children:"←"}),e.jsxs("div",{className:"gl-panel",children:[e.jsx("img",{className:"gl-img",src:x.src,alt:"View"}),e.jsx("div",{style:{color:"#ffcc00",fontWeight:900,marginTop:"25px",fontSize:"1.2rem"},children:"SPORTS CLUB ARCHIVES"})]}),e.jsx("button",{className:"gl-nav",style:{right:"40px"},onClick:()=>s(b=>(b+1)%p.length),children:"→"})]})]})}const Nx=[{icon:"fa-solid fa-palette",text:"Encourage students to showcase and develop their artistic and creative abilities."},{icon:"fa-solid fa-earth-asia",text:"Provide a platform for cultural exchange, inclusivity, and diversity."},{icon:"fa-solid fa-crown",text:"Promote leadership, teamwork, and organizational skills through cultural events."},{icon:"fa-solid fa-microphone",text:"Enhance students' confidence, communication, and presentation skills."},{icon:"fa-solid fa-music",text:"Make the campus a hub of cultural vibrancy and student engagement."}],Tx=[{name:"Inter-College Fest",members:"Ravi Kumar, Sonal Sharma",date:"March 2024",icon:"fa-solid fa-flag",color:"#3b82f6"},{name:"Drama Night",members:"Ananya Gupta",date:"December 2023",icon:"fa-solid fa-masks-theater",color:"#8b5cf6"},{name:"Folk Dance Fiesta",members:"Team Cultural",date:"August 2024",icon:"fa-solid fa-music",color:"#ec4899"}],Ex=[{src:"/CTC%20NEW%20REACT%20WEBSITE/images/CULTURAL/funfest/f1.jpeg",alt:"Fun Fest 1"},{src:"/CTC%20NEW%20REACT%20WEBSITE/images/CULTURAL/funfest/f2.jpeg",alt:"Fun Fest 2"},{src:"/CTC%20NEW%20REACT%20WEBSITE/images/CULTURAL/funfest/f3.jpeg",alt:"Fun Fest 3"},{src:"/CTC%20NEW%20REACT%20WEBSITE/images/CULTURAL/funfest/f4.jpeg",alt:"Fun Fest 4"},{src:"/CTC%20NEW%20REACT%20WEBSITE/images/CULTURAL/funfest/f5.jpeg",alt:"Fun Fest 5"},{src:"/CTC%20NEW%20REACT%20WEBSITE/images/CULTURAL/funfest/f6.jpeg",alt:"Fun Fest 6"},{src:"/CTC%20NEW%20REACT%20WEBSITE/images/CULTURAL/funfest/f7.jpeg",alt:"Fun Fest 7"},{src:"/CTC%20NEW%20REACT%20WEBSITE/images/CULTURAL/holi/h1.jpeg",alt:"Holi 1"},{src:"/CTC%20NEW%20REACT%20WEBSITE/images/CULTURAL/holi/h2.jpeg",alt:"Holi 2"},{src:"/CTC%20NEW%20REACT%20WEBSITE/images/CULTURAL/holi/h3.jpeg",alt:"Holi 3"},{src:"/CTC%20NEW%20REACT%20WEBSITE/images/CULTURAL/holi/h4.jpeg",alt:"Holi 4"},{src:"/CTC%20NEW%20REACT%20WEBSITE/images/CULTURAL/holi/h5.jpeg",alt:"Holi 5"},{src:"/CTC%20NEW%20REACT%20WEBSITE/images/CULTURAL/saraswati_puja/sp1.jpeg",alt:"Saraswati Puja 1"},{src:"/CTC%20NEW%20REACT%20WEBSITE/images/CULTURAL/saraswati_puja/sp2.jpeg",alt:"Saraswati Puja 2"},{src:"/CTC%20NEW%20REACT%20WEBSITE/images/CULTURAL/saraswati_puja/sp3.jpeg",alt:"Saraswati Puja 3"},{src:"/CTC%20NEW%20REACT%20WEBSITE/images/CULTURAL/saraswati_puja/sp4.jpeg",alt:"Saraswati Puja 4"},{src:"/CTC%20NEW%20REACT%20WEBSITE/images/CULTURAL/saraswati_puja/sp5.jpeg",alt:"Saraswati Puja 5"},{src:"/CTC%20NEW%20REACT%20WEBSITE/images/CULTURAL/saraswati_puja/sp6.jpeg",alt:"Saraswati Puja 6"}],Wp=["normal","tall","wide","normal","normal","wide","tall","normal","normal","tall","wide","normal","normal","wide","tall","normal","normal","normal"];function Rx(){const[r,s]=v.useState(null),[o,c]=v.useState(!1),m=v.useMemo(()=>Ex.map((b,y)=>({...b,size:Wp[y%Wp.length]})),[]),p=o?m:m.slice(0,10),u=v.useCallback(b=>{r!==null&&(b.key==="ArrowRight"&&s(y=>(y+1)%p.length),b.key==="ArrowLeft"&&s(y=>(y-1+p.length)%p.length),b.key==="Escape"&&s(null))},[r,p.length]);v.useEffect(()=>(window.addEventListener("keydown",u),()=>window.removeEventListener("keydown",u)),[u]);const x=r!==null?p[r]:null;return e.jsxs("div",{className:"tc-page",children:[e.jsx("style",{children:`
    @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap');
    *, *::before, *::after { box-sizing: border-box; }

    .tc-hero {
      background: linear-gradient(165deg,#020c1b 0%,#0c2340 40%,#112d52 70%,#06101e 100%);
      position: relative; overflow: hidden;
    }
    .tc-hero-inner {
      max-width: 1200px; margin: 0 auto;
      padding: 72px 5% 56px;
      display: flex; align-items: center; justify-content: space-between;
      gap: 48px; flex-wrap: wrap;
    }
    .tc-hero-left { flex: 1; min-width: 280px; }
    .tc-hero-badge {
      display: inline-flex; align-items: center; gap: 8px;
      background: rgba(255,204,0,0.1); border: 1px solid rgba(255,204,0,0.28);
      color: #ffcc00; font-size: 0.68rem; font-weight: 800;
      padding: 6px 16px; border-radius: 30px; letter-spacing: 2.5px;
      text-transform: uppercase; margin-bottom: 18px;
    }
    .tc-hero-h1 {
      font-family: 'Plus Jakarta Sans', sans-serif;
      font-size: clamp(2.2rem,5vw,3.6rem); font-weight: 900;
      color: #fff; line-height: 1.08; letter-spacing: -1px; margin-bottom: 14px;
    }
    .tc-hero-h1 em { font-style: normal; color: #ffcc00; }
    .tc-hero-sub { color: rgba(255,255,255,0.42); font-size: 0.88rem; line-height: 1.75; max-width: 480px; margin-bottom: 28px; }
    .tc-hero-stats { display: flex; gap: 28px; flex-wrap: wrap; }
    .tc-hero-stat-val { font-family: 'Plus Jakarta Sans',sans-serif; font-size: 1.6rem; font-weight: 900; color: #ffcc00; line-height: 1; }
    .tc-hero-stat-lbl { font-size: 0.66rem; color: rgba(255,255,255,0.4); font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; margin-top: 3px; }

    .tc-hero-right { flex-shrink: 0; }
    .tc-hero-pills { display: flex; flex-direction: column; gap: 10px; }
    .tc-hero-pill {
      display: flex; align-items: center; gap: 12px;
      background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1);
      color: rgba(255,255,255,0.75); padding: 11px 20px; border-radius: 14px;
      font-family: 'Plus Jakarta Sans',sans-serif; font-weight: 600; font-size: 0.86rem;
      transition: background 0.2s;
    }
    .tc-hero-pill:hover { background: rgba(255,255,255,0.1); }
    .tc-hero-pill-dot { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; }

    .tc-hero-wave { height: 56px; margin-top: -1px; }
    .tc-hero-wave svg { width: 100%; height: 100%; display: block; }

    .tc-page { background: #f0f4f8; min-height: 100vh; font-family: 'Plus Jakarta Sans',sans-serif; }
    .tc-main { max-width: 1200px; margin: 0 auto; padding: 0 4% 80px; }
    .tc-pill-tag { display: inline-block; background: #eff6ff; color: #2563eb; border: 1px solid #bfdbfe; border-radius: 20px; padding: 5px 16px; font-size: 0.7rem; font-weight: 800; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 14px; }
    .tc-section-head { text-align: center; margin-bottom: 40px; }
    .tc-section-head h2 { font-family: 'Plus Jakarta Sans',sans-serif; font-size: clamp(1.7rem,4vw,2.3rem); font-weight: 900; color: #0a1628; margin-bottom: 10px; }
    .tc-section-head h2 span { background: linear-gradient(135deg,#0c2340,#2563eb); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
    .tc-section-head p { color: #64748b; font-size: 0.88rem; max-width: 480px; margin: 0 auto; }

    .tc-leaders-wrap { padding: 72px 4%; }
    .tc-leaders-grid { max-width: 820px; margin: 0 auto; display: flex; gap: 28px; justify-content: center; flex-wrap: wrap; }
    .tc-leader-card { background: #fff; border-radius: 22px; overflow: hidden; box-shadow: 0 8px 30px rgba(10,22,40,0.09); border: 1px solid rgba(10,22,40,0.07); transition: transform 0.3s,box-shadow 0.3s; width: 220px; }
    .tc-leader-card:hover { transform: translateY(-8px); box-shadow: 0 20px 50px rgba(10,22,40,0.14); }
    .tc-leader-img { width: 100%; height: 200px; overflow: hidden; background: linear-gradient(135deg,#0a1628,#1a3a6b); }
    .tc-leader-img img { width: 100%; height: 100%; object-fit: cover; object-position: top center; display: block; }
    .tc-leader-body { padding: 16px 18px 20px; text-align: center; }
    .tc-leader-body h4 { font-family: 'Plus Jakarta Sans',sans-serif; font-size: 0.8rem; font-weight: 600; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px; margin: 0 0 4px; }
    .tc-leader-tag { display: inline-block; background: #eff6ff; color: #2563eb; border: 1px solid #bfdbfe; border-radius: 20px; padding: 3px 12px; font-size: 0.66rem; font-weight: 800; letter-spacing: 1px; text-transform: uppercase; }

    .tc-obj-grid { max-width: 1000px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
    .tc-obj-card { background: #fff; border-radius: 16px; padding: 22px 24px; display: flex; align-items: flex-start; gap: 16px; border: 1px solid rgba(10,22,40,0.07); box-shadow: 0 4px 16px rgba(10,22,40,0.06); transition: transform 0.2s; }
    .tc-obj-card:hover { transform: translateX(6px); }
    .tc-obj-icon { width: 42px; height: 42px; background: linear-gradient(135deg,#d97706,#f59e0b); border-radius: 12px; display: flex; align-items: center; justify-content: center; color: #fff; font-size: 1rem; flex-shrink: 0; }
    .tc-obj-card p { margin: 0; color: #334155; font-size: 0.88rem; line-height: 1.7; }

    .tc-proj-wrap { padding: 72px 4%; background: #fff; border-radius: 22px; margin: 40px 0; }
    .tc-proj-inner { max-width: 1000px; margin: 0 auto; }
    .tc-proj-row { display: flex; align-items: center; gap: 18px; padding: 16px 22px; background: #f8faff; border-radius: 14px; margin-bottom: 9px; border: 1px solid rgba(10,22,40,0.06); border-left: 4px solid #0c2340; transition: transform 0.2s,box-shadow 0.2s; }
    .tc-proj-row:hover { transform: translateX(6px); box-shadow: 0 6px 20px rgba(10,22,40,0.08); }
    .tc-proj-num { width: 34px; height: 34px; background: linear-gradient(135deg,#0c2340,#1a3a6b); color: #ffcc00; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-family: 'Plus Jakarta Sans',sans-serif; font-size: 0.78rem; font-weight: 900; flex-shrink: 0; }
    .tc-proj-name { font-family: 'Plus Jakarta Sans',sans-serif; font-size: 0.88rem; font-weight: 700; color: #0a1628; }
    .tc-proj-sub { font-size: 0.73rem; color: #64748b; margin-top: 2px; }
    .tc-proj-date { font-size: 0.73rem; color: #0c2340; font-weight: 700; white-space: nowrap; flex-shrink: 0; }

    .tc-gallery-wrap { background: #0a1628; padding: 72px 4%; }
    .tc-gallery-grid {
      max-width: 1200px; margin: 40px auto 0;
      display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      grid-auto-rows: 220px; grid-auto-flow: dense; gap: 20px;
    }
    .tc-gallery-item {
      position: relative; border-radius: 16px; overflow: hidden; cursor: pointer;
      border: 1px solid rgba(255,255,255,0.1); transition: transform 0.3s;
    }
    .tc-gallery-item:hover { transform: scale(1.02); box-shadow: 0 20px 40px rgba(0,0,0,0.5); }
    .tc-gallery-item img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s; }
    .tc-gallery-item:hover img { transform: scale(1.1); }
    .tc-gallery-overlay {
      position: absolute; inset: 0; background: rgba(10,22,40,0.5);
      display: flex; align-items: center; justify-content: center; opacity: 0; transition: 0.3s;
    }
    .tc-gallery-item:hover .tc-gallery-overlay { opacity: 1; }
    .tc-gallery-overlay i { color: #ffcc00; font-size: 2rem; transform: scale(0.5); transition: 0.3s; }
    .tc-gallery-item:hover .tc-gallery-overlay i { transform: scale(1); }
    .tc-item-tall { grid-row: span 2; }
    .tc-item-wide { grid-column: span 2; }

    .tc-btn-full {
      display: block; margin: 60px auto 0; background: transparent; border: 2px solid #ffcc00;
      color: #ffcc00; padding: 18px 60px; border-radius: 50px; font-weight: 800; cursor: pointer;
      transition: 0.3s; font-family:'Plus Jakarta Sans',sans-serif; letter-spacing: 2px;
    }
    .tc-btn-full:hover { background: #ffcc00; color: #020c1b; box-shadow: 0 10px 40px rgba(255,204,0,0.3); }

    .gl-lightbox {
      position: fixed; inset: 0; background: rgba(1, 7, 17, 0.99); z-index: 2000;
      display: flex; align-items: center; justify-content: center; padding: 40px;
      backdrop-filter: blur(15px);
    }
    .gl-close {
      position: absolute; top: 40px; right: 40px; background: rgba(255,255,255,0.05);
      border: none; color: #fff; width: 60px; height: 60px; border-radius: 50%; cursor: pointer;
      font-size: 1.8rem; transition: 0.3s; z-index: 2300;
    }
    .gl-nav {
      position: absolute; top: 50%; transform: translateY(-50%);
      background: rgba(255,255,255,0.05); border: none; color: #fff; width: 70px; height: 70px;
      border-radius: 50%; cursor: pointer; transition: 0.3s; z-index: 2200; font-size: 1.5rem;
    }
    .gl-nav:hover { background: #ffcc00; color: #000; }
    .gl-panel { max-width: 1000px; width: 100%; display: flex; flex-direction: column; align-items: center; }
    .gl-img { max-width: 100%; max-height: 60vh; object-fit: contain; border-radius: 16px; box-shadow: 0 40px 100px rgba(0,0,0,0.8); }
    .gl-thumbs { display: flex; gap: 10px; margin-top: 30px; flex-wrap: wrap; justify-content: center; }
    .gl-thumb { width: 60px; height: 60px; border-radius: 8px; overflow: hidden; cursor: pointer; border: 2px solid transparent; transition: 0.2s; }
    .gl-thumb.active { border-color: #ffcc00; transform: scale(1.1); }
    .gl-thumb img { width: 100%; height: 100%; object-fit: cover; }

    .tc-mission-static {
      background: #0a1628; padding: 60px 4%; border-radius: 22px; margin: 40px 0;
    }
    .tc-mission-card {
      max-width: 1100px; margin: 0 auto; position: relative; border-radius: 22px; overflow: hidden; height: 370px; box-shadow: 0 24px 80px rgba(0,0,0,0.4);
    }
    .tc-mission-img { width: 100%; height: 100%; object-fit: cover; }
    .tc-mission-overlay {
      position: absolute; inset: 0; background: linear-gradient(to top,rgba(10,22,40,0.85),rgba(10,22,40,0.2) 60%);
      display: flex; flex-direction: column; justify-content: flex-end; padding: 36px;
    }
    .tc-mission-overlay h3 { font-family: 'Plus Jakarta Sans',sans-serif; font-size: 1.9rem; font-weight: 900; color: #fff; margin: 0 0 5px; }
    .tc-mission-overlay p { color: rgba(255,255,255,0.65); margin: 0; max-width: 500px; }

    .cu-cta {
      background: linear-gradient(135deg,#1a3a6b,#2563eb); padding: 72px 5%; text-align:center; border-radius:30px; margin:40px 4%;
    }
    .cu-cta h2 { font-family:'Plus Jakarta Sans',sans-serif; font-size:1.9rem; font-weight:900; color:#fff; margin-bottom:12px; }
    .cu-cta p { color:rgba(255,255,255,0.7); margin-bottom:28px; font-size:0.95rem; line-height:1.7; }
    .cu-cta-btn { display:inline-flex; align-items:center; gap:10px; background:#f5c518; color:#0a1628; padding:15px 34px; border-radius:50px; font-family:'Plus Jakarta Sans',sans-serif; font-size:0.95rem; font-weight:800; text-decoration:none; transition:all 0.3s; box-shadow:0 8px 30px rgba(245,197,24,0.35); }
    .cu-cta-btn:hover { transform:translateY(-4px); box-shadow:0 16px 40px rgba(245,197,24,0.5); }

    @media(max-width:900px) {
      .tc-hero-inner { flex-direction: column; gap: 36px; }
      .tc-obj-grid { grid-template-columns: 1fr; }
      .tc-gallery-grid { grid-template-columns: repeat(2,1fr); }
    }
    @media(max-width:600px) {
      .tc-gallery-grid { grid-template-columns: 1fr; }
    }
  `}),e.jsxs("div",{className:"tc-hero",children:[e.jsxs("div",{className:"tc-hero-inner",children:[e.jsxs("div",{className:"tc-hero-left",children:[e.jsxs("div",{className:"tc-hero-badge",children:[e.jsx("i",{className:"fa-solid fa-masks-theater"})," Gymkhana · Cultural Club"]}),e.jsxs("h1",{className:"tc-hero-h1",children:["CULTURAL ",e.jsx("em",{children:"CLUB"})]}),e.jsx("p",{className:"tc-hero-sub",children:"Celebrating creativity, expression, and diversity through art, music, dance, and drama — providing students a vibrant stage to explore their artistic potential and cultural heritage."}),e.jsx("div",{className:"tc-hero-stats",children:[{val:"5+",label:"Art Forms"},{val:"Annual",label:"Cultural Fest"},{val:"50+",label:"Participants"},{val:"All Year",label:"Activities"}].map((b,y)=>e.jsxs("div",{children:[e.jsx("div",{className:"tc-hero-stat-val",children:b.val}),e.jsx("div",{className:"tc-hero-stat-lbl",children:b.label})]},y))})]}),e.jsx("div",{className:"tc-hero-right",children:e.jsx("div",{className:"tc-hero-pills",children:[{dot:"#3b82f6",icon:"fa-solid fa-music",label:"Music"},{dot:"#10b981",icon:"fa-solid fa-child",label:"Dance"},{dot:"#ffcc00",icon:"fa-solid fa-masks-theater",label:"Drama"},{dot:"#ec4899",icon:"fa-solid fa-palette",label:"Fine Arts"},{dot:"#00d4ff",icon:"fa-solid fa-pen-nib",label:"Literary"}].map((b,y)=>e.jsxs("div",{className:"tc-hero-pill",children:[e.jsx("span",{className:"tc-hero-pill-dot",style:{background:b.dot}}),e.jsx("i",{className:b.icon,style:{color:b.dot,width:16,textAlign:"center"}}),b.label]},y))})})]}),e.jsx("div",{className:"tc-hero-wave",children:e.jsx("svg",{viewBox:"0 0 1440 56",preserveAspectRatio:"none",children:e.jsx("path",{d:"M0,38 C360,56 1080,0 1440,38 L1440,56 L0,56 Z",fill:"#f0f4f8"})})})]}),e.jsxs("div",{className:"tc-main",children:[e.jsxs("div",{className:"tc-leaders-wrap",children:[e.jsxs("div",{className:"tc-section-head",children:[e.jsxs("div",{className:"tc-pill-tag",children:[e.jsx("i",{className:"fa-solid fa-users"})," Our Leadership"]}),e.jsxs("h2",{children:["Club Incharge & ",e.jsx("span",{children:"Secretaries"})]})]}),e.jsx("div",{className:"tc-leaders-grid",children:[{role:"Club Incharge",name:"Mr. Krishnasis Mishra",img:"/CTC NEW REACT WEBSITE/images/CULTURAL/Principal Sir.jpg",tag:"Faculty Lead"},{role:"Club Secretary (Boy)",name:"Mr. Bikash Behera",img:"/CTC NEW REACT WEBSITE/images/CULTURAL/bikash.jpeg",tag:"Student Rep"},{role:"Club Secretary (Girl)",name:"Ms. Ipsita Pattanaik",img:"/CTC NEW REACT WEBSITE/images/CULTURAL/ipsita.jpg",tag:"Student Rep"}].map((b,y)=>e.jsxs("div",{className:"tc-leader-card",children:[e.jsx("div",{className:"tc-leader-img",children:e.jsx("img",{src:b.img,alt:b.role})}),e.jsxs("div",{className:"tc-leader-body",children:[e.jsx("h4",{children:b.role}),e.jsx("div",{style:{fontSize:"0.9rem",fontWeight:700,color:"#2563eb",marginBottom:"8px",fontFamily:"'Plus Jakarta Sans', sans-serif"},children:b.name}),e.jsx("span",{className:"tc-leader-tag",children:b.tag})]})]},y))})]}),e.jsxs("div",{style:{padding:"72px 4%"},children:[e.jsxs("div",{className:"tc-section-head",children:[e.jsxs("div",{className:"tc-pill-tag",children:[e.jsx("i",{className:"fa-solid fa-bullseye"})," Mission"]}),e.jsxs("h2",{children:["Our ",e.jsx("span",{children:"Objectives"})]}),e.jsx("p",{children:"The principles that shape every cultural event, workshop, and performance we create."})]}),e.jsx("div",{className:"tc-obj-grid",children:Nx.map((b,y)=>e.jsxs("div",{className:"tc-obj-card",children:[e.jsx("div",{className:"tc-obj-icon",children:e.jsx("i",{className:b.icon})}),e.jsx("p",{children:b.text})]},y))})]}),e.jsxs("div",{className:"tc-proj-wrap",children:[e.jsxs("div",{className:"tc-section-head",children:[e.jsxs("div",{className:"tc-pill-tag",children:[e.jsx("i",{className:"fa-solid fa-calendar-check"})," Events"]}),e.jsxs("h2",{children:["Our ",e.jsx("span",{children:"Activities"})]}),e.jsx("p",{children:"Cultural events that bring creativity, celebration, and student talent to the spotlight."})]}),e.jsx("div",{className:"tc-proj-inner",children:Tx.map((b,y)=>e.jsxs("div",{className:"tc-proj-row",children:[e.jsx("div",{className:"tc-proj-num",children:String(y+1).padStart(2,"0")}),e.jsxs("div",{style:{flex:1},children:[e.jsxs("div",{className:"tc-proj-name",children:[e.jsx("i",{className:b.icon,style:{marginRight:8,color:b.color}}),b.name]}),e.jsxs("div",{className:"tc-proj-sub",children:[e.jsx("i",{className:"fa-solid fa-users",style:{fontSize:"0.6rem",marginRight:4}}),b.members]})]}),e.jsxs("div",{className:"tc-proj-date",children:[e.jsx("i",{className:"fa-regular fa-calendar",style:{marginRight:5}}),b.date]})]},y))})]}),e.jsx("div",{className:"tc-mission-static",children:e.jsxs("div",{className:"tc-mission-card",children:[e.jsx("img",{src:"/CTC NEW REACT WEBSITE/images/CULTURAL/banner.jpg",alt:"Cultural Club Banner",className:"tc-mission-img"}),e.jsxs("div",{className:"tc-mission-overlay",children:[e.jsx("h3",{children:"Where Art Meets Identity"}),e.jsx("p",{children:"Our annual cultural fest showcases the rich heritage and creative spirit of our students."})]})]})})]})," ",e.jsxs("div",{className:"tc-gallery-wrap",children:[e.jsxs("div",{className:"tc-section-head",children:[e.jsxs("div",{className:"tc-pill-tag",style:{background:"rgba(255,204,0,0.15)",color:"#ffcc00",border:"1px solid rgba(255,204,0,0.3)"},children:[e.jsx("i",{className:"fa-solid fa-images"})," Gallery"]}),e.jsxs("h2",{style:{color:"#fff"},children:["Event ",e.jsx("span",{style:{color:"#ffcc00"},children:"Gallery"})]}),e.jsx("p",{style:{color:"rgba(255,255,255,0.45)"},children:"Vivid memories from our cultural events, performances, and festive celebrations."})]}),e.jsx("div",{className:"tc-gallery-grid",children:p.map((b,y)=>e.jsxs("div",{className:`tc-gallery-item ${b.size==="tall"?"tc-item-tall":""} ${b.size==="wide"?"tc-item-wide":""}`,onClick:()=>s(y),children:[e.jsx("img",{src:b.src,alt:b.alt,loading:"lazy"}),e.jsx("div",{className:"tc-gallery-overlay",children:e.jsx("i",{className:"fa-solid fa-expand"})})]},y))}),!o&&m.length>10&&e.jsxs("button",{className:"tc-btn-full",onClick:()=>c(!0),children:["EXPLORE FULL ARCHIVE (",m.length," IMAGES)"]})]}),x&&e.jsxs("div",{className:"gl-lightbox",onClick:b=>b.target===b.currentTarget&&s(null),children:[e.jsx("button",{className:"gl-close",onClick:()=>s(null),children:"✕"}),e.jsx("button",{className:"gl-nav",style:{left:"40px"},onClick:()=>s(b=>(b-1+p.length)%p.length),children:"←"}),e.jsxs("div",{className:"gl-panel",children:[e.jsx("img",{className:"gl-img",src:x.src,alt:"View"}),e.jsx("div",{style:{color:"#ffcc00",fontWeight:900,marginTop:"25px",fontSize:"1.2rem"},children:"CULTURAL CLUB ARCHIVES"}),e.jsx("div",{className:"gl-thumbs",children:p.map((b,y)=>e.jsx("div",{className:`gl-thumb ${r===y?"active":""}`,onClick:()=>s(y),children:e.jsx("img",{src:b.src,alt:"thumb"})},y))})]}),e.jsx("button",{className:"gl-nav",style:{right:"40px"},onClick:()=>s(b=>(b+1)%p.length),children:"→"})]})]})}const tn=[{name:"Sana Rao",batch:"2023",domain:"HR"},{name:"Saswat Patra",batch:"2023",domain:"HR"},{name:"Puja Kumari",batch:"2023",domain:"HR"},{name:"Santosh Sahu",batch:"2023",domain:"HR"},{name:"Sneha Kumari",batch:"2023",domain:"HR"},{name:"Chiranjib Pattanaik",batch:"2023",domain:"HR"},{name:"Supriya Mohanty",batch:"2023",domain:"HR"},{name:"Shankar Sahu",batch:"2023",domain:"Marketing"},{name:"Jitendra Karan Sahu",batch:"2023",domain:"Marketing"},{name:"Surendra Sahu",batch:"2023",domain:"Marketing"},{name:"Priyanka Sahu",batch:"2023",domain:"Marketing"},{name:"Priyadarshani Sahoo",batch:"2023",domain:"Human Resource"},{name:"Ipsita Samal",batch:"2023",domain:"Human Resource"},{name:"Manasmita Dehury",batch:"2023",domain:"Human Resource"},{name:"Lipsarani Das",batch:"2023",domain:"Human Resource"},{name:"Binit Kumar Sahu",batch:"2023",domain:"Human Resource"},{name:"Jiban Jyoti Jena",batch:"2023",domain:"Human Resource"},{name:"Bikash Behera",batch:"2023",domain:"Human Resource & Marketing"},{name:"Abhijit Sahoo",batch:"2023",domain:"Human Resource"},{name:"Sunita Behera",batch:"2023",domain:"Human Resource"},{name:"Jilu Das",batch:"2023",domain:"Human Resource"},{name:"Gajendra Behera",batch:"2023",domain:"Human Resource"},{name:"Kalpana Sahoo",batch:"2023",domain:"Human Resource"}],Lp=[{name:"Fave Station",members:"Sibu, Chuman, Tusar, Prangya, Pritimayee, Prajolita, M.Anatha",year:"2023"},{name:"Young Valet",members:"Amit, Nensi, Rituprana, Monali, Sushree, Kasturi, Isha, Raju, Puja",year:"2023"},{name:"Milk Mistry",members:"Alok, Abhishek, Rahul, Chidatmika, Monalisa, Punam, Khusi, Titan",year:"2023"},{name:"Be Safe",members:"Ipshita, Lipsa, Rupali, Ankush, Jahir, Priti, Subhasmita, Sradhanjali",year:"2023"},{name:"Multi Complex",members:"Abhijeet, Rahul, Saswat, Bikash, Sneha, Puja, Ipsita, Snighdha, Santosh",year:"2023"},{name:"Rope Way",members:"Karan, Sana, Chiranjib, Soubhagya, Surendra, Priyanka, Lipsa, Arpita, Kalpana",year:"2023"},{name:"Aqua Bliss",members:"Jitendra Karan Sahu, Jiban Jyoti Jena, Rahul Biswal, Sanjay Manna, Santosh Sahu",year:"2024"},{name:"Farm Fresh",members:"Biswa, Suchismita Sahu, Swosti Swamsree Behera, Jyoti Sankar Das, Parimita Minz",year:"2024"},{name:"Bio Bloom (A)",members:"Jashmin Pradhan, Swagat Kumar Behera, Nafisha Parween, Nibedita Behera",year:"2024"},{name:"Bio Bloom (B)",members:"Binit, Lipsa, Kalpana, Supriya, Saswat, Arpita, Bikash, Jilu",year:"2024"}],Ix=[{name:"Abhishek Sahu",img:"/CTC NEW REACT WEBSITE/images/Disha & CSR/Abhishek Sahu.jpg"},{name:"Alok Kumar Sahoo",img:"/CTC NEW REACT WEBSITE/images/Disha & CSR/Alok Kumar Sahoo.jpg"},{name:"Chidatmika Pradhan",img:"/CTC NEW REACT WEBSITE/images/Disha & CSR/Chidatmika Pradhan.jpg"},{name:"Chuman Sahoo",img:"/CTC NEW REACT WEBSITE/images/Disha & CSR/Chuman Sahoo.jpg"},{name:"Khusi Bilas",img:"/CTC NEW REACT WEBSITE/images/Disha & CSR/Khusi Bilas.jpg"},{name:"M. Anata Laxmi",img:"/CTC NEW REACT WEBSITE/images/Disha & CSR/M. Anata Laxmi.jpg"},{name:"Monalisha Pradhan",img:"/CTC NEW REACT WEBSITE/images/Disha & CSR/Monalisha Pradhan.jpg"},{name:"Nibedita Dehury",img:"/CTC NEW REACT WEBSITE/images/Disha & CSR/Nibedita Dehury.jpg"},{name:"Poonam Priyadarshini Panda",img:"/CTC NEW REACT WEBSITE/images/Disha & CSR/Poonam priyadarshini Panda.jpg"},{name:"Pradyuda Sahoo",img:"/CTC NEW REACT WEBSITE/images/Disha & CSR/Pradyuda Sahoo.jpg"},{name:"Prajolita Dehury",img:"/CTC NEW REACT WEBSITE/images/Disha & CSR/Prajolita Dehury.jpg"},{name:"Prangyaparasmita Sahu",img:"/CTC NEW REACT WEBSITE/images/Disha & CSR/Prangyaparasmita Sahu.jpg"},{name:"Pritimayee Biswal",img:"/CTC NEW REACT WEBSITE/images/Disha & CSR/Pritimayee Biswal.jpg"},{name:"Rahul Kumar Sahu",img:"/CTC NEW REACT WEBSITE/images/Disha & CSR/Rahul kumar Sahu.jpg"},{name:"Sibuprasad Nayak",img:"/CTC NEW REACT WEBSITE/images/Disha & CSR/Sibuprasad.jpg"},{name:"Titan Ku Prusty",img:"/CTC NEW REACT WEBSITE/images/Disha & CSR/Titan ku Prusty.jpg"},{name:"Tusar Raman Naik",img:"/CTC NEW REACT WEBSITE/images/Disha & CSR/Tusar Raman Naik.jpg"}],Hp=[{label:"MAGAZINE 1",src:"/CTC%20NEW%20REACT%20WEBSITE/images/Disha & CSR/Published by  Management Students (1).pdf"},{label:"MAGAZINE 2",src:"/CTC%20NEW%20REACT%20WEBSITE/images/Disha & CSR/Disha (Episode 2) .pdf"},{label:"MAGAZINE 3",src:"/CTC%20NEW%20REACT%20WEBSITE/images/Disha & CSR/The children of today will make the India of tomorrow. 3.pdf"},{label:"MAGAZINE 4",src:"/CTC%20NEW%20REACT%20WEBSITE/images/Disha & CSR/Disha Episode-4.pdf"},{label:"MAGAZINE 5",src:"/CTC%20NEW%20REACT%20WEBSITE/images/Disha & CSR/Disha episode-5.pdf"},{label:"MAGAZINE 6",src:"/CTC%20NEW%20REACT%20WEBSITE/images/Disha & CSR/Disha Episode-6.pdf"},{label:"MAGAZINE 7",src:"/CTC%20NEW%20REACT%20WEBSITE/images/Disha & CSR/Disha ep-07.pdf"}],Fp=[...Array.from({length:3},(r,s)=>`/CTC%20NEW%20REACT%20WEBSITE/images/Disha & CSR/im${[1,2,3][s]}.jpg`),"/CTC%20NEW%20REACT%20WEBSITE/images/Disha & CSR/im5.jpg",...Array.from({length:24},(r,s)=>`/images/Disha & CSR/photo${s+1}.jpg`)],Up=["normal","tall","wide","normal","normal","wide","tall","normal"],_p={2023:{bg:"#eff6ff",color:"#2563eb",border:"#bfdbfe"},2024:{bg:"#ecfdf5",color:"#059669",border:"#a7f3d0"},2025:{bg:"#fef3c7",color:"#d97706",border:"#fde68a"}},xi=12;function Px({page:r,totalPages:s,total:o,label:c,onPage:m}){if(s<=1)return null;const p=[];if(s<=7)for(let u=1;u<=s;u++)p.push(u);else if(r<=4)for(let u=1;u<=7;u++)p.push(u);else if(r>=s-3)for(let u=s-6;u<=s;u++)p.push(u);else for(let u=r-3;u<=r+3;u++)p.push(u);return e.jsxs("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",gap:8,marginTop:20,flexWrap:"wrap"},children:[e.jsx("button",{onClick:()=>m(Math.max(1,r-1)),disabled:r===1,style:{background:r===1?"#f0f4f8":"#0c2340",color:r===1?"#94a3b8":"#ffcc00",border:"none",borderRadius:10,padding:"8px 16px",fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"0.8rem",fontWeight:700,cursor:r===1?"default":"pointer"},children:"← Prev"}),p.map(u=>e.jsx("button",{onClick:()=>m(u),style:{background:r===u?"#0c2340":"#fff",color:r===u?"#ffcc00":"#0c2340",border:`1.5px solid ${r===u?"#0c2340":"rgba(12,35,64,0.15)"}`,borderRadius:10,padding:"8px 14px",minWidth:38,fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"0.8rem",fontWeight:700,cursor:"pointer"},children:u},u)),e.jsx("button",{onClick:()=>m(Math.min(s,r+1)),disabled:r===s,style:{background:r===s?"#f0f4f8":"#0c2340",color:r===s?"#94a3b8":"#ffcc00",border:"none",borderRadius:10,padding:"8px 16px",fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"0.8rem",fontWeight:700,cursor:r===s?"default":"pointer"},children:"Next →"}),e.jsxs("span",{style:{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"0.75rem",color:"#94a3b8",fontWeight:600},children:["Page ",r," of ",s," · ",o," ",c||"members"]})]})}function Bx(){const[r,s]=v.useState(null),[o,c]=v.useState(!1),[m,p]=v.useState(1),[u,x]=v.useState("all"),h=v.useMemo(()=>u==="all"?tn:tn.filter(P=>P.batch===u),[u]),b=Math.ceil(h.length/xi),y=v.useMemo(()=>h.slice((m-1)*xi,m*xi),[h,m]),g=P=>{x(P),p(1)},T=v.useMemo(()=>Fp.map((P,I)=>({src:P,size:Up[I%Up.length],alt:`Disha Impact Shot ${I+1}`})),[]),E=o?T:T.slice(0,10),F=v.useCallback(P=>{r!==null&&(P.key==="ArrowRight"&&s(I=>(I+1)%E.length),P.key==="ArrowLeft"&&s(I=>(I-1+E.length)%E.length),P.key==="Escape"&&s(null))},[r,E.length]);v.useEffect(()=>(window.addEventListener("keydown",F),()=>window.removeEventListener("keydown",F)),[F]);const R=r!==null?E[r]:null;return e.jsxs("div",{className:"tc-page",children:[e.jsx("style",{children:`
    @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap');
    *, *::before, *::after { box-sizing: border-box; }

    /* ══ HERO — exact PS style ══ */
    .tc-hero {
      background: linear-gradient(165deg,#020c1b 0%,#0c2340 40%,#112d52 70%,#06101e 100%);
      position: relative; overflow: hidden;
    }
    .tc-hero-inner {
      max-width: 1200px; margin: 0 auto;
      padding: 72px 5% 56px;
      display: flex; align-items: center; justify-content: space-between;
      gap: 48px; flex-wrap: wrap;
    }
    .tc-hero-left { flex: 1; min-width: 280px; }
    .tc-hero-badge {
      display: inline-flex; align-items: center; gap: 8px;
      background: rgba(255,204,0,0.1); border: 1px solid rgba(255,204,0,0.28);
      color: #ffcc00; font-size: 0.68rem; font-weight: 800;
      padding: 6px 16px; border-radius: 30px; letter-spacing: 2.5px;
      text-transform: uppercase; margin-bottom: 18px;
    }
    .tc-hero-h1 {
      font-family: 'Plus Jakarta Sans', sans-serif;
      font-size: clamp(2.2rem,5vw,3.6rem); font-weight: 900;
      color: #fff; line-height: 1.08; letter-spacing: -1px; margin-bottom: 14px;
    }
    .tc-hero-h1 em { font-style: normal; color: #ffcc00; }
    .tc-hero-sub { color: rgba(255,255,255,0.42); font-size: 0.88rem; line-height: 1.75; max-width: 480px; margin-bottom: 28px; }
    .tc-hero-stats { display: flex; gap: 28px; flex-wrap: wrap; }
    .tc-hero-stat-val { font-family: 'Plus Jakarta Sans',sans-serif; font-size: 1.6rem; font-weight: 900; color: #ffcc00; line-height: 1; }
    .tc-hero-stat-lbl { font-size: 0.66rem; color: rgba(255,255,255,0.4); font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; margin-top: 3px; }

    .tc-hero-right { flex-shrink: 0; }
    .tc-hero-pills { display: flex; flex-direction: column; gap: 10px; }
    .tc-hero-pill {
      display: flex; align-items: center; gap: 12px;
      background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1);
      color: rgba(255,255,255,0.75); padding: 11px 20px; border-radius: 14px;
      font-family: 'Plus Jakarta Sans',sans-serif; font-weight: 600; font-size: 0.86rem;
      transition: background 0.2s;
    }
    .tc-hero-pill:hover { background: rgba(255,255,255,0.1); }
    .tc-hero-pill-dot { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; }

    .tc-hero-wave { height: 56px; margin-top: -1px; }
    .tc-hero-wave svg { width: 100%; height: 100%; display: block; }

    /* ══ SHARED ══ */
    .tc-page { background: #f0f4f8; min-height: 100vh; font-family: 'Plus Jakarta Sans',sans-serif; }
    .tc-main { max-width: 1200px; margin: 0 auto; padding: 0 4% 80px; }
    .tc-pill-tag { display: inline-block; background: #eff6ff; color: #2563eb; border: 1px solid #bfdbfe; border-radius: 20px; padding: 5px 16px; font-size: 0.7rem; font-weight: 800; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 14px; }
    .tc-section-head { text-align: center; margin-bottom: 40px; }
    .tc-section-head h2 { font-family: 'Plus Jakarta Sans',sans-serif; font-size: clamp(1.7rem,4vw,2.3rem); font-weight: 900; color: #0a1628; margin-bottom: 10px; }
    .tc-section-head h2 span { background: linear-gradient(135deg,#0c2340,#2563eb); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
    .tc-section-head p { color: #64748b; font-size: 0.88rem; max-width: 480px; margin: 0 auto; }
    .tc-card { background: #fff; border-radius: 22px; box-shadow: 0 4px 24px rgba(10,22,40,0.09); border: 1px solid rgba(10,22,40,0.06); }

    /* ══ LEADERS ══ */
    .tc-leaders-wrap { padding: 72px 4%; }
    .tc-leaders-grid { max-width: 820px; margin: 0 auto; display: flex; gap: 28px; justify-content: center; flex-wrap: wrap; }
    .tc-leader-card { background: #fff; border-radius: 22px; overflow: hidden; box-shadow: 0 8px 30px rgba(10,22,40,0.09); border: 1px solid rgba(10,22,40,0.07); transition: transform 0.3s,box-shadow 0.3s; width: 220px; }
    .tc-leader-card:hover { transform: translateY(-8px); box-shadow: 0 20px 50px rgba(10,22,40,0.14); }
    .tc-leader-img { width: 100%; height: 200px; overflow: hidden; background: linear-gradient(135deg,#0a1628,#1a3a6b); }
    .tc-leader-img img { width: 100%; height: 100%; object-fit: cover; object-position: top center; display: block; }
    .tc-leader-body { padding: 16px 18px 20px; text-align: center; }
    .tc-leader-body h4 { font-family: 'Plus Jakarta Sans',sans-serif; font-size: 0.85rem; font-weight: 800; color: #0a1628; margin: 0 0 6px; }
    .tc-leader-tag { display: inline-block; background: #eff6ff; color: #2563eb; border: 1px solid #bfdbfe; border-radius: 20px; padding: 3px 12px; font-size: 0.66rem; font-weight: 800; letter-spacing: 1px; text-transform: uppercase; }

    /* ══ MISSION STATIC SLIDE (like slider but static) ══ */
    .tc-mission-static {
      background: #0a1628; padding: 60px 4%; border-radius: 22px; margin: 40px 0;
    }
    .tc-mission-card {
      max-width: 1100px; margin: 0 auto; position: relative; border-radius: 22px; overflow: hidden; height: 370px; box-shadow: 0 24px 80px rgba(0,0,0,0.4);
    }
    .tc-mission-img { width: 100%; height: 100%; object-fit: cover; }
    .tc-mission-overlay {
      position: absolute; inset: 0; background: linear-gradient(to top,rgba(10,22,40,0.85),rgba(10,22,40,0.2) 60%);
      display: flex; flex-direction: column; justify-content: flex-end; padding: 36px;
    }
    .tc-mission-overlay h3 { font-family: 'Plus Jakarta Sans',sans-serif; font-size: 1.9rem; font-weight: 900; color: #fff; margin: 0 0 5px; }
    .tc-mission-overlay p { color: rgba(255,255,255,0.65); margin: 0; max-width: 500px; }

    /* ══ MAGAZINE CARDS (identical to TechFest cards) ══ */
    .tc-mag-grid { max-width: 1100px; margin: 0 auto; display: grid; grid-template-columns: repeat(4,1fr); gap: 26px; }
    .tc-mag-card { border-radius: 20px; overflow: hidden; box-shadow: 0 6px 28px rgba(10,22,40,0.1); transition: transform 0.3s,box-shadow 0.3s; text-decoration: none; display: flex; flex-direction: column; background: #fff; border: 1px solid rgba(10,22,40,0.06); cursor: pointer; }
    .tc-mag-card:hover { transform: translateY(-10px); box-shadow: 0 24px 60px rgba(10,22,40,0.18); }
    .tc-mag-img { position: relative; height: 185px; overflow: hidden; background: #0a1628; }
    .tc-mag-img img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.4s; opacity: 0.6; }
    .tc-mag-card:hover .tc-mag-img img { transform: scale(1.08); opacity: 0.8; }
    .tc-mag-overlay-icon { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; z-index: 2; font-size: 3rem; color: #ffcc00; text-shadow: 0 10px 30px rgba(0,0,0,0.5); }
    .tc-mag-body { padding: 20px; flex: 1; display: flex; flex-direction: column; }
    .tc-mag-body h3 { font-family: 'Plus Jakarta Sans',sans-serif; font-size: 1.1rem; font-weight: 900; color: #0a1628; margin: 0 0 7px; }
    .tc-mag-tag { background: #f5c518; color: #0c2340; padding: 4px 12px; border-radius: 12px; font-size: 0.7rem; font-weight: 900; align-self: flex-start; margin-bottom: 12px; }
    .tc-mag-link { display: inline-flex; align-items: center; gap: 5px; margin-top: 12px; color: #2563eb; font-size: 0.78rem; font-weight: 700; font-family: 'Plus Jakarta Sans',sans-serif; }

    /* ══ TEAM TABLE ══ */
    .tc-team-wrap { padding: 72px 4%; }
    .tc-filter-bar { display: flex; gap: 9px; justify-content: center; flex-wrap: wrap; margin-bottom: 24px; }
    .tc-filter-btn { padding: 8px 20px; border-radius: 30px; border: 1.5px solid rgba(10,22,40,0.15); background: #fff; font-family: 'Plus Jakarta Sans',sans-serif; font-size: 0.8rem; font-weight: 700; color: #475569; cursor: pointer; transition: all 0.2s; }
    .tc-filter-btn:hover { border-color: #0c2340; color: #0c2340; }
    .tc-filter-btn.active { background: #0c2340; border-color: #0c2340; color: #ffcc00; }
    .tc-table-wrap { max-width: 1000px; margin: 0 auto; border-radius: 18px; overflow: hidden; box-shadow: 0 4px 24px rgba(10,22,40,0.09); border: 1.5px solid rgba(10,22,40,0.07); }
    .tc-table { width: 100%; border-collapse: collapse; }
    .tc-table thead tr { background: linear-gradient(90deg,#0c2340,#1a3a6b); }
    .tc-table th { padding: 15px 20px; font-family: 'Plus Jakarta Sans',sans-serif; font-size: 0.78rem; font-weight: 800; color: #ffcc00; letter-spacing: 1px; text-transform: uppercase; text-align: left; }
    .tc-table td { padding: 13px 20px; font-size: 0.85rem; color: #334155; border-bottom: 1px solid rgba(10,22,40,0.06); background: #fff; }
    .tc-table tbody tr:nth-child(even) td { background: #f8fafc; }
    .tc-table tbody tr:hover td { background: #f0f4ff; }
    .tc-batch-pill { display: inline-block; padding: 2px 10px; border-radius: 12px; font-size: 0.72rem; font-weight: 800; }
    .tc-domain-label { font-size: 0.78rem; color: #2563eb; font-weight: 600; }

    /* ══ PROJECTS ══ */
    .tc-proj-wrap { padding: 72px 4%; background: #fff; border-radius: 22px; margin: 40px 0; }
    .tc-proj-inner { max-width: 1000px; margin: 0 auto; }
    .tc-proj-row { display: flex; align-items: center; gap: 18px; padding: 16px 22px; background: #f8faff; border-radius: 14px; margin-bottom: 9px; border: 1px solid rgba(10,22,40,0.06); border-left: 4px solid #0c2340; transition: transform 0.2s,box-shadow 0.2s; }
    .tc-proj-row:hover { transform: translateX(6px); box-shadow: 0 6px 20px rgba(10,22,40,0.08); }
    .tc-proj-num { width: 34px; height: 34px; background: linear-gradient(135deg,#0c2340,#1a3a6b); color: #ffcc00; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-family: 'Plus Jakarta Sans',sans-serif; font-size: 0.78rem; font-weight: 900; flex-shrink: 0; }
    .tc-proj-name { font-family: 'Plus Jakarta Sans',sans-serif; font-size: 0.88rem; font-weight: 700; color: #0a1628; }
    .tc-proj-sub { font-size: 0.73rem; color: #64748b; margin-top: 2px; }
    .tc-proj-date { font-size: 0.73rem; color: #0c2340; font-weight: 700; white-space: nowrap; flex-shrink: 0; }

    /* ══ EX-LEADERS ══ */
    .tc-ex-wrap { background: #0a1628; padding: 72px 4%; }
    .tc-ex-grid { max-width: 1100px; margin: 32px auto 0; display: grid; grid-template-columns: repeat(6,1fr); gap: 18px; }
    .tc-ex-card { text-align: center; }
    .tc-ex-img { width: 100%; aspect-ratio: 3/4; overflow: hidden; border-radius: 14px; border: 2px solid rgba(255,204,0,0.25); background: rgba(255,255,255,0.05); transition: border-color 0.3s; }
    .tc-ex-img img { width: 100%; height: 100%; object-fit: cover; object-position: top center; display: block; transition: transform 0.3s; }
    .tc-ex-card:hover .tc-ex-img { border-color: #ffcc00; }
    .tc-ex-card:hover .tc-ex-img img { transform: scale(1.05); }
    .tc-ex-name { font-family: 'Plus Jakarta Sans',sans-serif; font-size: 0.72rem; color: rgba(255,255,255,0.65); font-weight: 600; margin: 8px 0 0; line-height: 1.4; }

    /* ══ GALLERY (masonry with lightbox) ══ */
    .tc-gallery-wrap { background: #0a1628; padding: 72px 4%; }
    .tc-gallery-grid {
      max-width: 1200px; margin: 40px auto 0;
      display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      grid-auto-rows: 220px; grid-auto-flow: dense; gap: 20px;
    }
    .tc-gallery-item {
      position: relative; border-radius: 16px; overflow: hidden; cursor: pointer;
      border: 1px solid rgba(255,255,255,0.1); transition: transform 0.3s;
    }
    .tc-gallery-item:hover { transform: scale(1.02); box-shadow: 0 20px 40px rgba(0,0,0,0.5); }
    .tc-gallery-item img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s; }
    .tc-gallery-item:hover img { transform: scale(1.1); }
    .tc-gallery-overlay {
      position: absolute; inset: 0; background: rgba(10,22,40,0.5);
      display: flex; align-items: center; justify-content: center; opacity: 0; transition: 0.3s;
    }
    .tc-gallery-item:hover .tc-gallery-overlay { opacity: 1; }
    .tc-gallery-overlay i { color: #ffcc00; font-size: 2rem; transform: scale(0.5); transition: 0.3s; }
    .tc-gallery-item:hover .tc-gallery-overlay i { transform: scale(1); }
    .tc-item-tall { grid-row: span 2; }
    .tc-item-wide { grid-column: span 2; }

    .tc-btn-full {
      display: block; margin: 60px auto 0; background: transparent; border: 2px solid #ffcc00;
      color: #ffcc00; padding: 18px 60px; border-radius: 50px; font-weight: 800; cursor: pointer;
      transition: 0.3s; font-family:'Plus Jakarta Sans',sans-serif; letter-spacing: 2px;
    }
    .tc-btn-full:hover { background: #ffcc00; color: #020c1b; box-shadow: 0 10px 40px rgba(255,204,0,0.3); }

    /* ══ LIGHTBOX (exact from original) ══ */
    .gl-lightbox {
      position: fixed; inset: 0; background: rgba(1, 7, 17, 0.99); z-index: 2000;
      display: flex; align-items: center; justify-content: center; padding: 40px;
      backdrop-filter: blur(15px);
    }
    .gl-close {
      position: absolute; top: 40px; right: 40px; background: rgba(255,255,255,0.05);
      border: none; color: #fff; width: 60px; height: 60px; border-radius: 50%; cursor: pointer;
      font-size: 1.8rem; transition: 0.3s; z-index: 2300;
    }
    .gl-nav {
      position: absolute; top: 50%; transform: translateY(-50%);
      background: rgba(255,255,255,0.05); border: none; color: #fff; width: 70px; height: 70px;
      border-radius: 50%; cursor: pointer; transition: 0.3s; z-index: 2200; font-size: 1.5rem;
    }
    .gl-nav:hover { background: #ffcc00; color: #000; }
    .gl-panel { max-width: 1000px; width: 100%; display: flex; flex-direction: column; align-items: center; }
    .gl-img { max-width: 100%; max-height: 60vh; object-fit: contain; border-radius: 16px; box-shadow: 0 40px 100px rgba(0,0,0,0.8); }
    .gl-thumbs { display: flex; gap: 10px; margin-top: 30px; flex-wrap: wrap; justify-content: center; }
    .gl-thumb { width: 60px; height: 60px; border-radius: 8px; overflow: hidden; cursor: pointer; border: 2px solid transparent; transition: 0.2s; }
    .gl-thumb.active { border-color: #ffcc00; transform: scale(1.1); }
    .gl-thumb img { width: 100%; height: 100%; object-fit: cover; }

    /* ══ CTA ══ */
    .tc-cta {
      background: #0c2340; padding: 80px 5%; text-align: center; color: #fff;
      border-radius: 30px; margin: 40px 4%;
    }
    .tc-cta h2 { font-size: 2.2rem; font-weight: 900; margin-bottom: 15px; }
    .tc-cta p { color: rgba(255,255,255,0.6); max-width: 500px; margin: 0 auto 25px; }
    .tc-cta-btn {
      display: inline-block; background: #ffcc00; color: #0c2340; padding: 14px 50px;
      border-radius: 40px; font-weight: 800; text-decoration: none; transition: 0.3s;
    }
    .tc-cta-btn:hover { background: #fff; transform: translateY(-3px); }

    @media(max-width:992px) {
      .tc-mag-grid { grid-template-columns: repeat(2,1fr); }
      .tc-ex-grid { grid-template-columns: repeat(3,1fr); }
      .tc-gallery-grid { grid-template-columns: repeat(2,1fr); }
    }
    @media(max-width:600px) {
      .tc-mag-grid { grid-template-columns: 1fr; }
      .tc-ex-grid { grid-template-columns: repeat(2,1fr); }
    }
  `}),e.jsxs("div",{className:"tc-hero",children:[e.jsxs("div",{className:"tc-hero-inner",children:[e.jsxs("div",{className:"tc-hero-left",children:[e.jsxs("div",{className:"tc-hero-badge",children:[e.jsx("i",{className:"fa-solid fa-hand-holding-heart"})," Gymkhana · Social Wing"]}),e.jsxs("h1",{className:"tc-hero-h1",children:["DISHA ",e.jsx("em",{children:"&"})," CSR"]}),e.jsx("p",{className:"tc-hero-sub",children:"Advocating for the visually impaired and serving the less fortunate. We transform college life into a mission of compassion and professional responsibility."}),e.jsx("div",{className:"tc-hero-stats",children:[{val:`${tn.length}+`,label:"Active Members"},{val:`${Lp.length}+`,label:"Projects"},{val:`${Hp.length}`,label:"Magazines"},{val:`${Fp.length}`,label:"Impact Shots"}].map((P,I)=>e.jsxs("div",{children:[e.jsx("div",{className:"tc-hero-stat-val",children:P.val}),e.jsx("div",{className:"tc-hero-stat-lbl",children:P.label})]},I))})]}),e.jsx("div",{className:"tc-hero-right",children:e.jsx("div",{className:"tc-hero-pills",children:[{dot:"#3b82f6",icon:"fa-solid fa-eye",label:"Visually Impaired Advocacy"},{dot:"#10b981",icon:"fa-solid fa-bowl-food",label:"Community Kitchen"},{dot:"#ffcc00",icon:"fa-solid fa-book-open",label:"Magazine Publications"},{dot:"#ec4899",icon:"fa-solid fa-hand-holding-heart",label:"Sewa Projects"},{dot:"#00d4ff",icon:"fa-solid fa-children",label:"Child Welfare"}].map((P,I)=>e.jsxs("div",{className:"tc-hero-pill",children:[e.jsx("span",{className:"tc-hero-pill-dot",style:{background:P.dot}}),e.jsx("i",{className:P.icon,style:{color:P.dot,width:16,textAlign:"center"}}),P.label]},I))})})]}),e.jsx("div",{className:"tc-hero-wave",children:e.jsx("svg",{viewBox:"0 0 1440 56",preserveAspectRatio:"none",children:e.jsx("path",{d:"M0,38 C360,56 1080,0 1440,38 L1440,56 L0,56 Z",fill:"#f0f4f8"})})})]}),e.jsxs("div",{className:"tc-main",children:[e.jsxs("div",{className:"tc-leaders-wrap",children:[e.jsxs("div",{className:"tc-section-head",children:[e.jsxs("div",{className:"tc-pill-tag",children:[e.jsx("i",{className:"fa-solid fa-users"})," Our Leadership"]}),e.jsxs("h2",{children:["Club Incharge & ",e.jsx("span",{children:"Secretaries"})]})]}),e.jsx("div",{className:"tc-leaders-grid",children:[{role:"Club Incharge",name:"Mr. Subhrajyoti Behera",img:"/CTC NEW REACT WEBSITE/images/OURTEAM/Subhrajyoti Sir.jpg",tag:"Faculty Lead"},{role:"Secretary (Boy)",name:"Mr. Abinash Behera",img:"/CTC NEW REACT WEBSITE/images/Disha & CSR/secretary_boy.jpg",tag:"Student Rep"},{role:"Secretary (Girl)",name:"Ms. Sana Rao",img:"/CTC NEW REACT WEBSITE/images/Disha & CSR/secretary_girl.jpg",tag:"Student Rep"}].map((P,I)=>e.jsxs("div",{className:"tc-leader-card",children:[e.jsx("div",{className:"tc-leader-img",children:e.jsx("img",{src:P.img,alt:P.role})}),e.jsxs("div",{className:"tc-leader-body",children:[e.jsx("h4",{children:P.role}),e.jsx("div",{style:{fontSize:"0.9rem",fontWeight:700,color:"#2563eb",marginBottom:"8px",fontFamily:"'Plus Jakarta Sans', sans-serif"},children:P.name}),e.jsx("span",{className:"tc-leader-tag",children:P.tag})]})]},I))})]}),e.jsx("div",{className:"tc-mission-static",children:e.jsxs("div",{className:"tc-mission-card",children:[e.jsx("img",{src:"/CTC NEW REACT WEBSITE/images/Disha & CSR/d1.jpg",alt:"Mission",className:"tc-mission-img"}),e.jsxs("div",{className:"tc-mission-overlay",children:[e.jsx("h3",{children:"Objective of Disha & CSR"}),e.jsx("p",{children:'Team Disha is a dedicated collective focused on making a sustainable impact on the lives of the less fortunate, with a specialized focus on the visually impaired community. Our mission is anchored in the spirit of "Sewa"—selfless service.'})]})]})}),e.jsxs("div",{className:"tc-techfest-wrap",style:{background:"#fff",borderRadius:22,margin:"40px 0"},children:[e.jsxs("div",{className:"tc-section-head",children:[e.jsxs("div",{className:"tc-pill-tag",children:[e.jsx("i",{className:"fa-solid fa-book-open"})," Publications"]}),e.jsxs("h2",{children:["Published ",e.jsx("span",{children:"Magazines"})]}),e.jsx("p",{children:"Episodes of Disha magazine capturing our journey and impact."})]}),e.jsx("div",{className:"tc-mag-grid",children:Hp.map((P,I)=>e.jsxs("div",{className:"tc-mag-card",onClick:()=>window.open(P.src,"_blank"),children:[e.jsxs("div",{className:"tc-mag-img",children:[e.jsx("img",{src:`/CTC%20NEW%20REACT%20WEBSITE/images/Disha & CSR/photo${I%5+1}.jpg`,alt:"preview"}),e.jsx("div",{className:"tc-mag-overlay-icon",children:e.jsx("i",{className:"fa-solid fa-file-pdf"})})]}),e.jsxs("div",{className:"tc-mag-body",children:[e.jsx("h3",{children:P.label}),e.jsxs("span",{className:"tc-mag-tag",children:["EPISODE ",I+1]}),e.jsxs("span",{className:"tc-mag-link",children:["VIEW PDF ",e.jsx("i",{className:"fa-solid fa-arrow-right"})]})]})]},I))})]}),e.jsxs("div",{className:"tc-team-wrap",children:[e.jsxs("div",{className:"tc-section-head",children:[e.jsxs("div",{className:"tc-pill-tag",children:[e.jsx("i",{className:"fa-solid fa-hand-holding-heart"})," Our Team"]}),e.jsxs("h2",{children:["Active ",e.jsx("span",{children:"Changemakers"})]}),e.jsxs("p",{children:[tn.length," dedicated members working towards social impact."]})]}),e.jsx("div",{className:"tc-filter-bar",children:["all","2023","2024","2025"].map(P=>(P==="all"?tn.length:tn.filter(U=>U.batch===P).length)===0&&P!=="all"?null:e.jsx("button",{className:`tc-filter-btn${u===P?" active":""}`,onClick:()=>g(P),children:P==="all"?"All Batches":`Batch ${P}`},P))}),e.jsx("div",{className:"tc-table-wrap",children:e.jsxs("table",{className:"tc-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{width:48},children:"#"}),e.jsx("th",{children:"Name"}),e.jsx("th",{style:{width:100},children:"Batch"}),e.jsx("th",{children:"Domain"})]})}),e.jsx("tbody",{children:y.map((P,I)=>{const U=_p[P.batch]||_p[2023];return e.jsxs("tr",{children:[e.jsx("td",{style:{color:"#94a3b8",fontWeight:700},children:(m-1)*xi+I+1}),e.jsx("td",{style:{fontWeight:700},children:P.name}),e.jsx("td",{children:e.jsx("span",{className:"tc-batch-pill",style:{background:U.bg,color:U.color,border:`1px solid ${U.border}`},children:P.batch})}),e.jsx("td",{children:e.jsx("span",{className:"tc-domain-label",children:P.domain})})]},I)})})]})}),e.jsx(Px,{page:m,totalPages:b,total:h.length,label:"members",onPage:p})]}),e.jsxs("div",{className:"tc-proj-wrap",children:[e.jsxs("div",{className:"tc-section-head",children:[e.jsxs("div",{className:"tc-pill-tag",children:[e.jsx("i",{className:"fa-solid fa-diagram-project"})," Impact"]}),e.jsxs("h2",{children:["Social ",e.jsx("span",{children:"Case Studies"})]}),e.jsx("p",{children:"Community projects executed by Team Disha & CSR."})]}),e.jsx("div",{className:"tc-proj-inner",children:Lp.map((P,I)=>e.jsxs("div",{className:"tc-proj-row",children:[e.jsx("div",{className:"tc-proj-num",children:String(I+1).padStart(2,"0")}),e.jsxs("div",{style:{flex:1},children:[e.jsx("div",{className:"tc-proj-name",children:P.name}),e.jsxs("div",{className:"tc-proj-sub",children:[e.jsx("i",{className:"fa-solid fa-users",style:{fontSize:"0.6rem",marginRight:4}}),P.members]})]}),e.jsxs("div",{className:"tc-proj-date",children:[e.jsx("i",{className:"fa-regular fa-calendar",style:{marginRight:5}}),P.year]})]},I))})]})]})," ",e.jsxs("div",{className:"tc-gallery-wrap",children:[e.jsxs("div",{className:"tc-section-head",children:[e.jsxs("div",{className:"tc-pill-tag",style:{background:"rgba(255,204,0,0.15)",color:"#ffcc00",border:"1px solid rgba(255,204,0,0.3)"},children:[e.jsx("i",{className:"fa-solid fa-images"})," Gallery"]}),e.jsxs("h2",{style:{color:"#fff"},children:["Visual ",e.jsx("span",{style:{color:"#ffcc00"},children:"Highlights"})]}),e.jsx("p",{style:{color:"rgba(255,255,255,0.45)"},children:"Captured moments of community outreach and selfless service."})]}),e.jsx("div",{className:"tc-gallery-grid",children:E.map((P,I)=>e.jsxs("div",{className:`tc-gallery-item ${P.size==="tall"?"tc-item-tall":""} ${P.size==="wide"?"tc-item-wide":""}`,onClick:()=>s(I),children:[e.jsx("img",{src:P.src,alt:P.alt,loading:"lazy"}),e.jsx("div",{className:"tc-gallery-overlay",children:e.jsx("i",{className:"fa-solid fa-expand"})})]},I))}),!o&&T.length>10&&e.jsxs("button",{className:"tc-btn-full",onClick:()=>c(!0),children:["EXPLORE FULL ARCHIVE (",T.length," IMAGES)"]})]}),e.jsxs("div",{className:"tc-ex-wrap",children:[e.jsxs("div",{className:"tc-section-head",children:[e.jsx("div",{className:"tc-pill-tag",style:{background:"rgba(255,204,0,0.15)",color:"#ffcc00",border:"1px solid rgba(255,204,0,0.3)"},children:"Legacy"}),e.jsxs("h2",{style:{color:"#fff"},children:["Compassionate ",e.jsx("span",{style:{color:"#ffcc00"},children:"Alumni"})]}),e.jsx("p",{style:{color:"rgba(255,255,255,0.45)"},children:"Former leaders who carried the torch of service."})]}),e.jsx("div",{className:"tc-ex-grid",children:Ix.map((P,I)=>e.jsxs("div",{className:"tc-ex-card",children:[e.jsx("div",{className:"tc-ex-img",children:e.jsx("img",{src:P.img,alt:P.name})}),e.jsx("p",{className:"tc-ex-name",children:P.name})]},I))})]}),R&&e.jsxs("div",{className:"gl-lightbox",onClick:P=>P.target===P.currentTarget&&s(null),children:[e.jsx("button",{className:"gl-close",onClick:()=>s(null),children:"✕"}),e.jsx("button",{className:"gl-nav",style:{left:"40px"},onClick:()=>s(P=>(P-1+E.length)%E.length),children:"←"}),e.jsxs("div",{className:"gl-panel",children:[e.jsx("img",{className:"gl-img",src:R.src,alt:"View"}),e.jsx("div",{style:{color:"#ffcc00",fontWeight:900,marginTop:"25px",fontSize:"1.2rem"},children:"DISHA & CSR ARCHIVES"}),e.jsx("div",{className:"gl-thumbs",children:E.map((P,I)=>e.jsx("div",{className:`gl-thumb ${r===I?"active":""}`,onClick:()=>s(I),children:e.jsx("img",{src:P.src,alt:"thumb"})},I))})]}),e.jsx("button",{className:"gl-nav",style:{right:"40px"},onClick:()=>s(P=>(P+1)%E.length),children:"→"})]})]})}const zx={1:{version:"1.0",year:"2023",theme:"Innovation & Technology",color:"#3b82f6",colorDark:"#0c2340",img:"/CTC NEW REACT WEBSITE/images/TECHNOCRAT/TechFest1.0.jpg",about:["TechFest 1.0 is a celebration of innovation, creativity, and technology. It brings together students, developers, and innovators to showcase their technical projects and ideas. This event provides a platform for students to explore real-world problems and create impactful solutions through technology-driven projects and competitions.","Participants engaged in workshops, competitions, and seminars covering topics such as Artificial Intelligence, Internet of Things, Robotics, Software Development, and Machine Learning. TechFest 1.0 encourages collaboration, networking, and knowledge sharing among young innovators.","The event also features keynote speeches from industry leaders, mentorship sessions, and opportunities for students to showcase their startup ideas. TechFest 1.0 is designed to inspire, challenge, and recognize talent while providing a vibrant platform for learning and growth."],projects:[{name:"Human-Motion Detection",members:"Subham, Gyanaranjan, Chandanswain, Anata, Susree, Swarnalaxmi",year:"2023"},{name:"Eye Motion Detection",members:"Subasis, Abhijit, Satyadev, Subham, SK Akil",year:"2023"},{name:"Age Detection",members:"Tushar, Subodh",year:"2023"},{name:"Smart Home",members:"Shankar, Priyadarshan, Ashis, Sourav, Asutosh, Chandra, Suryakanta",year:"2023"},{name:"Gesture Control",members:"Sourav, Shankar, Rudra, Debasis, Nikhil, Somya Ranjan, Armstrong",year:"2023"},{name:"Student Attendance System",members:"Sneha, Priti Prangya, Sandhyarani, Smrutisikha",year:"2023"},{name:"Blind Person Assistant",members:"Priyadarshan, Satyabrata Ojha, Satyabrata Sahu, Sangita, Ananya, Anish, Subham",year:"2023"},{name:"LMS in Django",members:"Ashutosh, Chandra, Suryakanta, SK Akhil, Subham, Satyadev, Chandan, Anata, Susree, Swarnalaxmi, Rudra, Debasis, Nikhil, Somya Ranjan, Armstrong, Sneha, Priti Prangya, Sandhyarani, Smrutisikha, Sangita, Ananya, Anish, Subham",year:"2023"}],gallery:[26,27,28,29,30,31,33,34,36,35].map(r=>`/images/TECHNOCRAT/techfest1.0/IMG-20251002-WA00${r}.jpg`),galleryRest:[37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66].map(r=>`/images/TECHNOCRAT/techfest1.0/IMG-20251002-WA00${r}.jpg`)},2:{version:"2.0",year:"2024",theme:"Smart Systems & Automation",color:"#10b981",colorDark:"#0c2340",img:"/CTC NEW REACT WEBSITE/images/TECHNOCRAT/TechFest2.0.jpg",about:["TechFest 2.0 is a celebration of innovation, creativity, and technology. It brings together students, developers, and innovators to showcase their technical projects and ideas. This event provides a platform for students to explore real-world problems and create impactful solutions through technology-driven projects and competitions.","Participants will engage in workshops, competitions, and seminars, covering topics such as Artificial Intelligence, Internet of Things, Robotics, Software Development, and Machine Learning. TechFest 2.0 encourages collaboration, networking, and knowledge sharing among young innovators.","The event also features keynote speeches from industry leaders, mentorship sessions, and opportunities for students to showcase their startup ideas. TechFest 2.0 is designed to inspire, challenge, and recognize talent while providing a vibrant platform for learning and growth."],projects:[{name:"Automated Car",members:"Rakesh, Asutosh, Suryakant, Chandra",year:"2024"},{name:"Smart Parking System",members:"Priyadarshan, Rudraprasad, Sritam, Saswat",year:"2024"},{name:"Fire Detection & Prevention",members:"Sk, Nikhil",year:"2024"},{name:"Face To Aadhar",members:"Soumya, Aliva, Chinmayee",year:"2024"},{name:"Railway Track Accident Prevention",members:"Chandra, Ratnaprava, Monalisha",year:"2024"},{name:"IV Bag Monitoring System",members:"Anish, Debashis, Asutosh",year:"2024"},{name:"Plant Disease Detection By Leaf",members:"Rudra, Chandra",year:"2024"},{name:"Smart Traffic Control",members:"Asutosh, Yashita, Rudraprasad, Abhisek",year:"2024"},{name:"Smart Label Crossing System",members:"Anish, Swastika, Nikhil",year:"2024"},{name:"Automated Plant Watering System",members:"Chandan, Monalisha, Priyanka",year:"2024"},{name:"Women Safety",members:"Ananta, Elin, Bidusmita",year:"2024"},{name:"Product Failure Management System",members:"Priti",year:"2024"},{name:"Wildlife Detection",members:"Debasish, Archita, Sudipta",year:"2024"},{name:"Smart Reminder For Municipality",members:"Sangita, Jasmin, Saswat, Sritam",year:"2024"},{name:"Smart Home Security",members:"Smrutisikha, Arpita, Pramod",year:"2024"},{name:"Gas Level Monitoring System",members:"Sandhya, Sangita",year:"2024"},{name:"AI Mock Interview",members:"Sandhya, Sangita",year:"2024"},{name:"Drone For Delivery",members:"Abhijit, Asutosh, Suryakant",year:"2024"},{name:"Smart Restaurant Management System",members:"Anish, Sandhya, Sangita",year:"2024"}],gallery:[12,16,18,21,22,25,26,29,30,33].map(r=>`/images/TECHNOCRAT/techfest 2.0/IMG-20241120-WA00${r}.jpg`),galleryRest:[34,37,38,40,42,45,46,49,53,54,57,58,61,62].map(r=>`/images/TECHNOCRAT/techfest 2.0/IMG-20241120-WA00${r}.jpg`).concat([25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42].map(r=>`/images/TECHNOCRAT/techfest 2.0/img${r}.jpg`))},3:{version:"3.0",year:"2025",theme:"Viksit Bharat — Multi-Institution",color:"#f59e0b",colorDark:"#0c2340",img:"/CTC NEW REACT WEBSITE/images/TECHNOCRAT/TechFest3.0.jpg",about:["TechFest 3.0 is a vibrant celebration of innovation, creativity, and the spirit of Viksit Bharat. This edition brings a transformative platform where technology meets vision, empowering young minds to build solutions that contribute to a developed and progressive India.","Building on the success of TechFest 1.0 and 2.0—where only college students showcased their projects—TechFest 3.0 marks a historic moment as schools from outside the campus also participate, bringing their innovative projects and ideas to this grand stage.","This edition also features keynote sessions by industry experts, mentorship opportunities, and a dedicated arena for startup and research idea presentations. TechFest 3.0 is designed to inspire, challenge, and recognize emerging talent while fostering a culture of innovation that aligns with the vision of Viksit Bharat."],projects:[{name:"Emergency Fuel Delivery",members:"Aliva, Priyanka, Soumyaranjan, Sudhanshu",year:"2025"},{name:"Hostel Management System",members:"Aliva, Priyanka, Sudipta, Chinmayee, Ankita, Tulasi",year:"2025"},{name:"C & W Education Sponsorship Portal",members:"Yashita, Swastika, Pradyumna, Satyabrata",year:"2025"},{name:"Eco Re-Use",members:"Yashita, Swastika, Dattatreya, Om Prakash",year:"2025"},{name:"Line Up",members:"Abhisek, Rudraprasad, Ladly, Biswajit",year:"2025"},{name:"Skill Hub",members:"Krishna, Abhipsa, Trishna, Supriyanjali, Sasmita, Monalisha, Abhisek, Swastika, Priyadarshan, Arpita",year:"2025"},{name:"Food Waste Management System",members:"Saswat, Sudipta, Anshuman, Subhalaxmi",year:"2025"},{name:"Bus Tracking & Booking System",members:"Jasmin, Ratnaprava, Monalisha, Ananta, Priyanka, Priyani",year:"2025"},{name:"E-Jeevan Dan",members:"Bhagyalaxmi, Rimjhim, Selina, kajal, Bidusmita, Elin, Ipsita, Elina",year:"2025"},{name:"Smart Helmet",members:"Yash, Tanmay, Subham",year:"2025"}],gallery:Array.from({length:10},(r,s)=>`/images/TECHNOCRAT/techfest 3.0/${s+1}.jpg`),galleryRest:Array.from({length:37},(r,s)=>`/images/TECHNOCRAT/techfest 3.0/${s+11}.jpg`)}},$p=["normal","tall","wide","normal","normal","wide","tall","normal","normal","normal"];function el({version:r}){const[s,o]=v.useState(null),[c,m]=v.useState(!1),p=zx[r],u=[...p.gallery,...p.galleryRest].map((y,g)=>({src:y,size:$p[g%$p.length],alt:`TechFest ${r}.0 - Photo ${g+1}`})),x=c?u:u.slice(0,10),h=v.useCallback(y=>{s!==null&&(y.key==="ArrowRight"&&o(g=>(g+1)%x.length),y.key==="ArrowLeft"&&o(g=>(g-1+x.length)%x.length),y.key==="Escape"&&o(null))},[s,x.length]);v.useEffect(()=>(window.addEventListener("keydown",h),()=>window.removeEventListener("keydown",h)),[h]);const b=s!==null?x[s]:null;return e.jsxs("div",{className:"tf-page",children:[e.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&family=Poppins:wght@400;600;700;900&display=swap');
        
        .tf-page { background:#f8faff; min-height:100vh; font-family:'Plus Jakarta Sans',sans-serif; }

        /* ── SENIOR HERO ── */
        .tf-hero {
          background: linear-gradient(165deg, #020c1b 0%, #0c2340 40%, #112d52 70%, #06101e 100%);
          padding: 120px 5% 100px; position: relative; overflow: hidden;
        }
        .tf-hero-content {
          position: relative; z-index: 2; display: flex; align-items: center; 
          justify-content: space-between; gap: 60px; flex-wrap: wrap; 
          max-width: 1200px; margin: 0 auto;
        }
        .tf-hero-left { flex: 1; min-width: 350px; text-align: left; }
        .tf-hero-right { flex-shrink: 0; align-self: flex-end; }

        .tf-hero-badge {
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(255, 204, 0, 0.12); border: 1px solid rgba(255, 204, 0, 0.3);
          color: #ffcc00; padding: 8px 20px; border-radius: 40px;
          font-size: 0.75rem; font-weight: 800; letter-spacing: 2px; text-transform: uppercase;
          margin-bottom: 25px;
        }
        .tf-hero h1 {
          font-family:'Poppins',sans-serif; font-size:clamp(3rem, 7vw, 4.8rem);
          font-weight:900; color:#fff; line-height:0.95; margin-bottom:18px; letter-spacing: -3px;
        }
        .tf-hero h1 em { font-style:normal; color:#ffcc00; text-shadow: 0 0 30px rgba(255,204,0,0.2); }

        .tf-theme-box {
          display: inline-block; padding: 10px 24px; border-radius: 14px;
          font-size: 0.95rem; font-weight: 800; color: #fff; margin-bottom: 25px;
          background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1);
          backdrop-filter: blur(10px);
        }
        .tf-hero-left p { color: rgba(255,255,255,0.6); font-size: 1.1rem; max-width: 550px; line-height: 1.8; }

        .tf-hero-stat-card {
          background: rgba(255, 255, 255, 0.04); border: 1px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(15px); padding: 18px 30px; border-radius: 20px;
          display: flex; align-items: center; gap: 20px; width: 260px; margin-bottom: 15px;
        }

        .tf-wave-sep { position: relative; height: 80px; margin-top: -1px; }
        .tf-wave-sep svg { width: 100%; height: 100%; display: block; fill: #fff; }

        /* ── ABOUT SECTION (PROFESSIONAL SPLIT) ── */
        .tf-about { background:#fff; padding:120px 5%; }
        .tf-about-inner { max-width:1200px; margin:0 auto; display:flex; gap:100px; align-items:center; flex-wrap:wrap; }
        .tf-about-left { flex: 1.2; min-width: 350px; }
        .tf-about-right { flex: 0.8; min-width: 350px; }
        
        .tf-section-pill { display:inline-block; background:#eff6ff; color:#2563eb; border:1px solid #bfdbfe; border-radius:20px; padding:6px 18px; font-size:0.75rem; font-weight:800; letter-spacing:1px; text-transform:uppercase; margin-bottom:20px; }
        .tf-about-left h2 { font-family:'Poppins',sans-serif; font-size:2.8rem; font-weight:900; color:#0c2340; margin-bottom:28px; line-height:1.1; }
        .tf-about-left p { color:#475569; line-height:1.9; font-size:1.05rem; margin-bottom:22px; text-align: justify; }
        
        .tf-about-img-container { 
          position: relative; border-radius: 35px; overflow: hidden; 
          box-shadow: 0 40px 80px rgba(12,35,64,0.15); border: 10px solid #f8fafc;
        }
        .tf-about-img-container img { width:100%; height:auto; display:block; transition: 0.7s cubic-bezier(0.4, 0, 0.2, 1); }
        .tf-about-img-container:hover img { transform: scale(1.08); }

        /* ── PROJECTS TABLE ── */
        .tf-projects { background:#f8faff; padding:120px 5%; }
        .tf-projects-header { text-align:center; margin-bottom:60px; }
        .tf-projects-header .tf-pill { background:#eff6ff; color:#2563eb; border:1px solid #bfdbfe; }
        .tf-projects-header h2 { font-family:'Poppins',sans-serif; font-size:2.8rem; font-weight:900; color:#0c2340; margin-bottom:20px; }
        .tf-projects-header p { color:#475569; font-size:1.05rem; }

        .tf-table-container { 
            max-width:1200px; margin:0 auto; border-radius:24px; overflow:hidden; 
            box-shadow:0 20px 50px rgba(10,22,40,0.1); border: 1px solid #e2e8f0;
        }
        .tf-table { width:100%; border-collapse:collapse; background: #fff; }
        .tf-table th { 
            background: #0c2340; padding:22px 25px; font-family:'Poppins',sans-serif; 
            font-size:0.9rem; font-weight:800; color:#ffcc00; text-align:left;
            text-transform: uppercase; letter-spacing: 1px;
        }
        .tf-table td { 
            padding:20px 25px; font-size:0.95rem; color:#334155; 
            border-bottom:1px solid #f1f5f9; vertical-align: middle;
        }
        .tf-table tr:hover td { background: #f8fafc; }
        .tf-proj-id { font-weight: 900; color: #cbd5e1; font-size: 1.1rem; width: 60px; }
        .tf-proj-title { font-weight: 800; color: #0c2340; font-size: 1.05rem; }
        .tf-member-list { font-size: 0.88rem; color: #64748b; line-height: 1.6; }

        .tf-footer-nav {
  background: #fff;
  padding: 60px 5%;
  border-top: 1px solid #eef2f6;
  position: relative;
}

.tf-footer-nav-inner {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
}

.tf-nav-group {
  display: flex;
  gap: 15px;
  align-items: center;
}

.tf-nav-link {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 14px 28px;
  border-radius: 12px;
  font-family: 'Poppins', sans-serif;
  font-size: 0.88rem;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  letter-spacing: 0.5px;
}

/* Secondary Button Styles */
.tf-nav-btn-secondary {
  background: #f8fafc;
  border: 1.5px solid #e2e8f0;
  color: #475569;
}

.tf-nav-btn-secondary:hover {
  background: #fff;
  border-color: #0c2340;
  color: #0c2340;
  transform: translateY(-2px);
}

/* Primary Button Styles */
.tf-nav-btn-primary {
  background: #0c2340;
  color: #ffcc00;
  border: 1.5px solid #0c2340;
  box-shadow: 0 10px 25px rgba(12, 35, 64, 0.15);
}

.tf-nav-btn-primary:hover {
  background: #1a3a6b;
  transform: translateY(-3px);
  box-shadow: 0 15px 35px rgba(12, 35, 64, 0.25);
}

        /* ── MASONRY GALLERY ── */
        .tf-gallery-section { background:#020c1b; padding:120px 5%; }
        .tf-grid {
          display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          grid-auto-rows: 240px; grid-auto-flow: dense; gap: 20px; max-width: 1300px; margin: 50px auto 0;
        }
        .tf-item { position: relative; border-radius: 20px; overflow: hidden; background: #0c2340; cursor: pointer; border: 1px solid rgba(255,255,255,0.05); }
        .tf-item img { width: 100%; height: 100%; object-fit: cover; transition: 0.6s; }
        .tf-item:hover img { transform: scale(1.1); filter: brightness(1.1); }
        
        .tf-item-tall { grid-row: span 2; }
        .tf-item-wide { grid-column: span 2; }
        
        .tf-overlay { position: absolute; inset: 0; background: rgba(12, 35, 64, 0.6); display: flex; align-items: center; justify-content: center; opacity: 0; transition: 0.3s; }
        .tf-item:hover .tf-overlay { opacity: 1; }
        .tf-overlay i { color: #ffcc00; font-size: 2.2rem; }

        .tf-see-all-btn {
          display: block; margin: 60px auto 0; background: transparent; 
          border: 2px solid #ffcc00; color: #ffcc00; 
          padding: 16px 50px; border-radius: 50px; font-weight: 800; 
          cursor: pointer; transition: 0.3s; font-family: 'Poppins';
          text-transform: uppercase; letter-spacing: 2px;
        }
        .tf-see-all-btn:hover { background: #ffcc00; color: #020c1b; box-shadow: 0 10px 30px rgba(255,204,0,0.3); }

        /* ── LIGHTBOX ── */
        .gl-lightbox { position: fixed; inset: 0; background: rgba(1, 7, 17, 0.99); z-index: 2000; display: flex; align-items: center; justify-content: center; padding: 40px; backdrop-filter: blur(10px); }
        .gl-lb-close { position: absolute; top: 40px; right: 40px; background: rgba(255,255,255,0.05); border: none; color: #fff; width: 60px; height: 60px; border-radius: 50%; cursor: pointer; font-size: 1.8rem; transition: 0.3s; z-index: 2300; }
        .gl-lb-close:hover { background: #ff4444; transform: rotate(90deg); }
        .gl-lb-nav { position: absolute; top: 50%; transform: translateY(-50%); background: rgba(255,255,255,0.05); border: none; color: #fff; width: 70px; height: 70px; border-radius: 50%; cursor: pointer; transition: 0.3s; z-index: 2200; font-size: 1.5rem; }
        .gl-lb-nav:hover { background: #ffcc00; color: #000; }
        .gl-lb-prev { left: 40px; }
        .gl-lb-next { right: 40px; }
        .gl-lb-panel { max-width: 1000px; width: 100%; display: flex; flex-direction: column; align-items: center; }
        .gl-lb-img { max-width: 100%; max-height: 60vh; object-fit: contain; border-radius: 16px; box-shadow: 0 40px 100px rgba(0,0,0,0.8); }
        .gl-lb-thumbs { margin-top: 40px; display: flex; gap: 12px; overflow-x: auto; padding: 15px; max-width: 100%; scrollbar-width: none; }
        .gl-lb-thumb { width: 80px; height: 60px; flex-shrink: 0; border-radius: 10px; overflow: hidden; opacity: 0.3; cursor: pointer; border: 2px solid transparent; transition: 0.3s; }
        .gl-lb-thumb.active { opacity: 1; border-color: #ffcc00; transform: translateY(-8px) scale(1.1); }
        .gl-lb-thumb img { width: 100%; height: 100%; object-fit: contain; }

        @media(max-width:992px){
          .tf-hero-content { flex-direction: column; text-align: center; }
          .tf-hero-left { text-align: center; }
          .tf-about-inner { flex-direction: column; text-align: center; gap: 50px; }
          .tf-about-left { order: 1; }
          .tf-about-right { order: 2; width: 100%; }
          .tf-grid { grid-template-columns: repeat(2, 1fr); }
          .tf-item-wide { grid-column: span 1; }
          .gl-lb-nav { width: 50px; height: 50px; }
        }
      `}),e.jsx("section",{className:"tf-hero",children:e.jsxs("div",{className:"tf-hero-content",children:[e.jsxs("div",{className:"tf-hero-left",children:[e.jsxs("div",{className:"tf-hero-badge",children:[e.jsx("i",{className:"fa-solid fa-bolt"})," Official Technocrat Mega-Event"]}),e.jsxs("h1",{children:["TECH",e.jsx("em",{style:{color:p.color},children:"FEST"})," ",p.version]}),e.jsxs("div",{className:"tf-theme-box",children:["Theme: ",p.theme]}),e.jsx("p",{children:"Where code meets creativity. A grand stage for the next generation of engineers to present disruptive solutions and technological breakthroughs."})]}),e.jsx("div",{className:"tf-hero-right",children:e.jsx("div",{className:"tf-hero-stats",children:[{icon:"fa-calendar-check",label:"EVENT YEAR",val:p.year},{icon:"fa-microchip",label:"PROJECTS",val:p.projects.length},{icon:"fa-camera-retro",label:"GALLERY",val:u.length}].map((y,g)=>e.jsxs("div",{className:"tf-hero-stat-card",children:[e.jsx("i",{className:`fa-solid ${y.icon}`,style:{color:"#ffcc00",fontSize:"1.4rem"}}),e.jsxs("div",{children:[e.jsx("div",{style:{color:"rgba(255,255,255,0.4)",fontSize:"0.65rem",fontWeight:800,letterSpacing:1},children:y.label}),e.jsx("div",{style:{color:"#fff",fontSize:"1.2rem",fontWeight:900},children:y.val})]})]},g))})})]})}),e.jsx("div",{className:"tf-wave-sep",children:e.jsx("svg",{viewBox:"0 0 1440 70",preserveAspectRatio:"none",children:e.jsx("path",{d:"M0,40 C320,80 720,0 1080,50 C1260,75 1380,30 1440,20 L1440,70 L0,70Z"})})}),e.jsx("section",{className:"tf-about",children:e.jsxs("div",{className:"tf-about-inner",children:[e.jsxs("div",{className:"tf-about-left",children:[e.jsx("span",{className:"tf-section-pill",children:"The History"}),e.jsxs("h2",{children:["About ",e.jsxs("span",{style:{color:p.color},children:["TechFest ",p.version]})]}),p.about.map((y,g)=>e.jsx("p",{children:y},g))]}),e.jsx("div",{className:"tf-about-right",children:e.jsx("div",{className:"tf-about-img-container",children:e.jsx("img",{src:p.img,alt:"TechFest Highlights"})})})]})}),e.jsxs("section",{className:"tf-projects",children:[e.jsxs("div",{className:"tf-projects-header",children:[e.jsx("span",{className:"tf-pill",children:"The Arena"}),e.jsxs("h2",{children:["Innovations ",e.jsx("span",{children:"Showcased"})]}),e.jsx("p",{children:"Every single project submitted and presented during this edition."})]}),e.jsx("div",{className:"tf-table-container",children:e.jsxs("table",{className:"tf-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{width:"60px"},children:"#"}),e.jsx("th",{style:{width:"30%"},children:"Project Title"}),e.jsx("th",{children:"Team Members"}),e.jsx("th",{style:{width:"100px"},children:"Year"})]})}),e.jsx("tbody",{children:p.projects.map((y,g)=>e.jsxs("tr",{children:[e.jsx("td",{className:"tf-proj-id",children:String(g+1).padStart(2,"0")}),e.jsx("td",{className:"tf-proj-title",children:y.name}),e.jsx("td",{className:"tf-member-list",children:y.members}),e.jsx("td",{style:{fontWeight:800,color:p.color},children:y.year})]},g))})]})})]}),e.jsxs("section",{className:"tf-gallery-section",children:[e.jsxs("div",{className:"tf-heading",children:[e.jsx("span",{className:"tf-pill",style:{background:"rgba(255,204,0,0.1)",color:"#ffcc00",borderColor:"rgba(255,204,0,0.2)"},children:"Visual Log"}),e.jsxs("h2",{style:{color:"#fff"},children:["Event ",e.jsx("span",{children:"Highlights"})]}),e.jsx("p",{style:{color:"rgba(255,255,255,0.4)"},children:"Captured moments of brilliance and technical prowess."})]}),e.jsx("div",{className:"tf-grid",children:x.map((y,g)=>e.jsxs("div",{className:`tf-item tf-item-${y.size}`,onClick:()=>o(g),children:[e.jsx("img",{src:y.src,alt:y.alt,loading:"lazy"}),e.jsx("div",{className:"tf-overlay",children:e.jsx("i",{className:"fa-solid fa-expand"})})]},g))}),!c&&u.length>10&&e.jsxs("button",{className:"tf-see-all-btn",onClick:()=>m(!0),children:["Explore All ",u.length," Photos"]})]}),b&&e.jsxs("div",{className:"gl-lightbox",onClick:y=>y.target===y.currentTarget&&o(null),children:[e.jsx("button",{className:"gl-lb-close",onClick:()=>o(null),children:e.jsx("i",{className:"fa-solid fa-xmark"})}),e.jsx("button",{className:"gl-lb-nav gl-lb-prev",onClick:()=>o(y=>(y-1+x.length)%x.length),children:e.jsx("i",{className:"fa-solid fa-chevron-left"})}),e.jsxs("div",{className:"gl-lb-panel",children:[e.jsx("img",{className:"gl-lb-img",src:b.src,alt:b.alt}),e.jsxs("div",{className:"gl-lb-caption",children:[e.jsxs("div",{style:{color:"#ffcc00",fontWeight:900,fontSize:"1.2rem",letterSpacing:"1px"},children:["TECHFEST ",r,".0 ARCHIVE"]}),e.jsxs("div",{style:{color:"#fff",fontSize:"0.9rem",opacity:.6,marginTop:"5px"},children:["Shot ",s+1," of ",x.length]})]}),e.jsx("div",{className:"gl-lb-thumbs",children:x.map((y,g)=>e.jsx("div",{className:`gl-lb-thumb ${s===g?"active":""}`,onClick:()=>o(g),children:e.jsx("img",{src:y.src,alt:"thumb"})},g))})]}),e.jsx("button",{className:"gl-lb-nav gl-lb-next",onClick:()=>o(y=>(y+1)%x.length),children:e.jsx("i",{className:"fa-solid fa-chevron-right"})})]}),e.jsx("footer",{className:"tf-footer-nav",children:e.jsxs("div",{className:"tf-footer-nav-inner",children:[e.jsxs(Se,{to:"/gymkhana/technocrat",className:"tf-nav-link tf-nav-btn-secondary",children:[e.jsx("i",{className:"fa-solid fa-arrow-left-long"})," Back to Technocrat"]}),e.jsxs("div",{className:"tf-nav-group",children:[r>1&&e.jsxs(Se,{to:`/gymkhana/techfest/${r-1}`,className:"tf-nav-link tf-nav-btn-secondary",children:[e.jsx("i",{className:"fa-solid fa-chevron-left"})," Edition ",r-1,".0"]}),r<3&&e.jsxs(Se,{to:`/gymkhana/techfest/${r+1}`,className:"tf-nav-link tf-nav-btn-primary",children:["Explore Edition ",r+1,".0 ",e.jsx("i",{className:"fa-solid fa-arrow-right-long",style:{marginLeft:"5px"}})]})]})]})})]})}function Gp(){return e.jsx(el,{version:1})}function Yp(){return e.jsx(el,{version:2})}function Jp(){return e.jsx(el,{version:3})}function Mx(){v.useEffect(()=>{const r=document.querySelectorAll(".rv,.rv-l,.rv-r"),s=new IntersectionObserver(o=>o.forEach(c=>{c.isIntersecting&&c.target.classList.add("visible")}),{threshold:.07});return r.forEach(o=>s.observe(o)),()=>s.disconnect()},[])}function Cm({r="0,212,255"}){const s=v.useRef(null);return v.useEffect(()=>{const o=s.current;if(!o)return;const c=o.getContext("2d");let m;const p=()=>{o.width=o.offsetWidth,o.height=o.offsetHeight};p(),window.addEventListener("resize",p);const u=Array.from({length:48},()=>({x:Math.random()*o.width,y:Math.random()*o.height,r:Math.random()*1.8+.3,vx:(Math.random()-.5)*.32,vy:(Math.random()-.5)*.32,a:Math.random()*.4+.06})),x=()=>{c.clearRect(0,0,o.width,o.height),u.forEach(h=>{h.x+=h.vx,h.y+=h.vy,(h.x<0||h.x>o.width)&&(h.vx*=-1),(h.y<0||h.y>o.height)&&(h.vy*=-1),c.beginPath(),c.arc(h.x,h.y,h.r,0,Math.PI*2),c.fillStyle=`rgba(${r},${h.a})`,c.fill()}),u.forEach((h,b)=>u.slice(b+1).forEach(y=>{const g=Math.hypot(h.x-y.x,h.y-y.y);g<95&&(c.beginPath(),c.moveTo(h.x,h.y),c.lineTo(y.x,y.y),c.strokeStyle=`rgba(${r},${.055*(1-g/95)})`,c.lineWidth=.6,c.stroke())})),m=requestAnimationFrame(x)};return x(),()=>{cancelAnimationFrame(m),window.removeEventListener("resize",p)}},[r]),e.jsx("canvas",{ref:s,style:{position:"absolute",inset:0,width:"100%",height:"100%",pointerEvents:"none",zIndex:0}})}function Ox({onSuccess:r}){const[s,o]=v.useState(""),[c,m]=v.useState(""),[p,u]=v.useState(!1),[x,h]=v.useState(""),[b,y]=v.useState(!1),[g,T]=v.useState(!1);v.useEffect(()=>{setTimeout(()=>T(!0),50)},[]);const E=async R=>{if(R.preventDefault(),h(""),!s||!c){h("Please enter both username and password.");return}y(!0),await new Promise(z=>setTimeout(z,700)),y(!1),s==="login"&&c==="1010"?r():h("Invalid username or password. Please try again.")};return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
    @keyframes naacFloat{0%,100%{transform:translateY(0) rotate(0deg);}50%{transform:translateY(-16px) rotate(3deg);}}
    @keyframes naacSpin{to{transform:rotate(360deg);}}
    .naac-login-page{min-height:100vh;display:flex;align-items:center;justify-content:center;background:linear-gradient(160deg,#060d1a 0%,#0c1f3d 55%,#0a1628 100%);padding:40px 20px;position:relative;overflow:hidden;}
    .naac-login-dots{position:absolute;inset:0;pointer-events:none;background-image:radial-gradient(rgba(255,255,255,0.04) 1px,transparent 1px);background-size:28px 28px;}
    .naac-login-blob{position:absolute;border-radius:50%;filter:blur(65px);pointer-events:none;}
    .naac-split-card{width:100%;max-width:860px;border-radius:28px;overflow:hidden;display:flex;flex-direction:row;box-shadow:0 32px 80px rgba(0,0,0,0.55),0 0 0 1px rgba(255,255,255,0.06);position:relative;z-index:2;opacity:0;transform:translateY(30px);transition:opacity 0.55s ease,transform 0.55s ease;}
    .naac-split-card.show{opacity:1;transform:translateY(0);}
    .naac-left-panel{flex:1.1;background:linear-gradient(160deg,#f8fafc 0%,#e8eef7 100%);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:52px 40px;gap:20px;position:relative;overflow:hidden;}
    .naac-left-panel::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse at 60% 20%,rgba(45,125,210,0.1) 0%,transparent 60%);pointer-events:none;}
    .naac-panel-logo{width:140px;height:140px;object-fit:contain;filter:drop-shadow(0 8px 20px rgba(0,0,0,0.15));transition:transform 0.35s ease;}
    .naac-panel-logo:hover{transform:scale(1.06);}
    .naac-panel-title{font-family:'Poppins',sans-serif;font-size:0.8rem;font-weight:800;color:#0a1628;text-align:center;letter-spacing:0.5px;text-transform:uppercase;line-height:1.5;}
    .naac-panel-title span{display:block;font-size:1.05rem;color:#2d7dd2;margin-top:4px;}
    .naac-panel-badges{display:flex;flex-wrap:wrap;justify-content:center;gap:8px;margin-top:4px;}
    .naac-panel-badge{background:rgba(45,125,210,0.1);border:1px solid rgba(45,125,210,0.25);color:#1a4a8a;font-family:'Poppins',sans-serif;font-size:0.65rem;font-weight:700;padding:4px 12px;border-radius:20px;letter-spacing:0.5px;}
    .naac-divider{width:48px;height:3px;border-radius:2px;background:linear-gradient(90deg,#2d7dd2,#00d4ff);margin:0 auto;}
    .naac-right-panel{flex:1;background:rgba(10,22,40,0.97);display:flex;flex-direction:column;justify-content:center;padding:52px 44px;gap:0;position:relative;}
    .naac-right-panel::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse at 40% 0%,rgba(0,212,255,0.07) 0%,transparent 55%);pointer-events:none;}
    .naac-right-label{font-family:'Poppins',sans-serif;font-size:0.65rem;font-weight:800;color:rgba(0,212,255,0.7);letter-spacing:3px;text-transform:uppercase;margin-bottom:8px;}
    .naac-right-heading{font-family:'Poppins',sans-serif;font-size:1.8rem;font-weight:900;color:#fff;margin-bottom:6px;line-height:1.15;letter-spacing:-0.3px;}
    .naac-right-heading span{color:#00d4ff;}
    .naac-right-sub{font-family:'Poppins',sans-serif;font-size:0.8rem;color:rgba(255,255,255,0.4);margin-bottom:28px;font-weight:500;}
    .naac-error{background:rgba(220,38,38,0.12);border:1px solid rgba(220,38,38,0.3);border-radius:12px;padding:11px 14px;margin-bottom:16px;display:flex;align-items:flex-start;gap:9px;font-family:'Poppins',sans-serif;font-size:0.78rem;color:#fca5a5;line-height:1.5;}
    .naac-field-label{font-family:'Poppins',sans-serif;font-size:0.7rem;font-weight:700;color:rgba(255,255,255,0.45);letter-spacing:1.5px;text-transform:uppercase;margin-bottom:7px;display:flex;align-items:center;gap:7px;}
    .naac-field-label i{color:#00d4ff;font-size:0.65rem;}
    .naac-input-wrap{display:flex;align-items:center;background:rgba(255,255,255,0.06);border:1.5px solid rgba(255,255,255,0.1);border-radius:13px;overflow:hidden;margin-bottom:18px;transition:border-color 0.22s,background 0.22s,box-shadow 0.22s;}
    .naac-input-wrap:focus-within{border-color:#00d4ff;background:rgba(0,212,255,0.06);box-shadow:0 0 0 3px rgba(0,212,255,0.12);}
    .naac-input-icon{width:44px;display:flex;align-items:center;justify-content:center;color:rgba(255,255,255,0.3);font-size:0.85rem;flex-shrink:0;}
    .naac-input-wrap input{flex:1;border:none;background:transparent;padding:13px 12px 13px 0;font-family:'Inter',sans-serif;font-size:0.9rem;color:#fff;outline:none;}
    .naac-input-wrap input::placeholder{color:rgba(255,255,255,0.2);}
    .naac-eye-btn{width:42px;display:flex;align-items:center;justify-content:center;background:none;border:none;color:rgba(255,255,255,0.3);cursor:pointer;font-size:0.82rem;transition:color 0.2s;}
    .naac-eye-btn:hover{color:rgba(255,255,255,0.7);}
    .naac-submit-btn{width:100%;padding:14px;border:none;border-radius:13px;background:linear-gradient(135deg,#1a4a8a,#2d7dd2);color:#fff;font-family:'Poppins',sans-serif;font-size:0.92rem;font-weight:700;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:9px;margin-top:4px;transition:transform 0.22s,box-shadow 0.22s;letter-spacing:0.3px;box-shadow:0 8px 24px rgba(45,125,210,0.35);position:relative;overflow:hidden;}
    .naac-submit-btn::after{content:'';position:absolute;top:-50%;left:-60%;width:200%;height:200%;background:rgba(255,255,255,0.1);transform:rotate(30deg);transition:0.45s;}
    .naac-submit-btn:hover::after{left:100%;}
    .naac-submit-btn:hover{transform:translateY(-2px);box-shadow:0 12px 32px rgba(45,125,210,0.45);}
    .naac-submit-btn:disabled{opacity:0.6;cursor:not-allowed;transform:none;}
    .naac-spinner{width:17px;height:17px;border:2.5px solid rgba(255,255,255,0.25);border-top-color:#fff;border-radius:50%;animation:naacSpin 0.7s linear infinite;}
    .naac-secure-note{margin-top:18px;display:flex;align-items:center;justify-content:center;gap:6px;font-family:'Poppins',sans-serif;font-size:0.7rem;color:rgba(255,255,255,0.22);}
    .naac-secure-note i{color:rgba(0,212,255,0.5);}
    @media(max-width:700px){.naac-split-card{flex-direction:column;max-width:420px;}.naac-left-panel{padding:36px 28px 28px;}.naac-panel-logo{width:100px;height:100px;}.naac-right-panel{padding:32px 28px 36px;}.naac-right-heading{font-size:1.5rem;}}
    @media(max-width:420px){.naac-right-panel{padding:28px 22px 32px;}.naac-left-panel{padding:28px 18px 22px;}}
  `}),e.jsxs("div",{className:"naac-login-page",children:[e.jsx(Cm,{r:"0,212,255"}),e.jsx("div",{className:"naac-login-dots"}),e.jsx("div",{className:"naac-login-blob",style:{width:480,height:480,background:"radial-gradient(circle,rgba(45,125,210,0.22) 0%,transparent 70%)",top:-160,right:-80,animation:"naacFloat 9s ease-in-out infinite"}}),e.jsx("div",{className:"naac-login-blob",style:{width:340,height:340,background:"radial-gradient(circle,rgba(245,197,24,0.07) 0%,transparent 70%)",bottom:-100,left:-60,animation:"naacFloat 11s ease-in-out infinite reverse"}}),e.jsxs("div",{className:`naac-split-card${g?" show":""}`,children:[e.jsxs("div",{className:"naac-left-panel",children:[e.jsx("img",{className:"naac-panel-logo",src:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/naac-removebg-preview.png",alt:"NAAC",onError:R=>{R.target.src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c0/NAAC_logo.png/200px-NAAC_logo.png"}}),e.jsx("div",{className:"naac-divider"}),e.jsxs("div",{className:"naac-panel-title",children:["National Assessment and",e.jsx("span",{children:"Accreditation Council"})]}),e.jsxs("div",{className:"naac-panel-badges",children:[e.jsx("span",{className:"naac-panel-badge",children:"NAAC"}),e.jsx("span",{className:"naac-panel-badge",children:"UGC Recognized"}),e.jsx("span",{className:"naac-panel-badge",children:"7 Criteria"})]})]}),e.jsxs("div",{className:"naac-right-panel",children:[e.jsx("p",{className:"naac-right-label",children:"Secure Access"}),e.jsxs("h1",{className:"naac-right-heading",children:["NAAC ",e.jsx("span",{children:"Portal"})]}),e.jsx("p",{className:"naac-right-sub",children:"Creative Techno College — Accreditation Dashboard"}),x&&e.jsxs("div",{className:"naac-error",children:[e.jsx("i",{className:"fa-solid fa-triangle-exclamation",style:{marginTop:2,flexShrink:0}}),e.jsx("span",{children:x})]}),e.jsxs("form",{onSubmit:E,noValidate:!0,children:[e.jsxs("label",{className:"naac-field-label",children:[e.jsx("i",{className:"fa-solid fa-user"})," Username"]}),e.jsxs("div",{className:"naac-input-wrap",children:[e.jsx("span",{className:"naac-input-icon",children:e.jsx("i",{className:"fa-solid fa-id-card"})}),e.jsx("input",{type:"text",value:s,onChange:R=>o(R.target.value),placeholder:"Enter username",autoComplete:"username",required:!0})]}),e.jsxs("label",{className:"naac-field-label",children:[e.jsx("i",{className:"fa-solid fa-lock"})," Password"]}),e.jsxs("div",{className:"naac-input-wrap",children:[e.jsx("span",{className:"naac-input-icon",children:e.jsx("i",{className:"fa-solid fa-key"})}),e.jsx("input",{type:p?"text":"password",value:c,onChange:R=>m(R.target.value),placeholder:"Enter password",autoComplete:"current-password",required:!0}),e.jsx("button",{type:"button",className:"naac-eye-btn",onClick:()=>u(R=>!R),children:e.jsx("i",{className:`fa-solid ${p?"fa-eye-slash":"fa-eye"}`})})]}),e.jsx("button",{type:"submit",className:"naac-submit-btn",disabled:b,children:b?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"naac-spinner"}),"Authenticating…"]}):e.jsxs(e.Fragment,{children:[e.jsx("i",{className:"fa-solid fa-right-to-bracket"}),"Access Dashboard"]})})]}),e.jsxs("div",{className:"naac-secure-note",children:[e.jsx("i",{className:"fa-solid fa-shield-check"}),"Protected portal — authorised personnel only"]})]})]})]})]})}const Qn=[{num:"I",roman:"01",title:"Curricular Aspects",icon:"fa-book-open",color:"#3b82f6",glow:"59,130,246",grad:"linear-gradient(135deg,#1e3a8a,#3b82f6)",score:2.78,maxScore:3.5,docs:12,status:"Submitted"},{num:"II",roman:"02",title:"Teaching-Learning & Evaluation",icon:"fa-chalkboard-user",color:"#10b981",glow:"16,185,129",grad:"linear-gradient(135deg,#064e3b,#10b981)",score:3.12,maxScore:3.5,docs:18,status:"Submitted"},{num:"III",roman:"03",title:"Research, Innovations & Extension",icon:"fa-flask-conical",color:"#8b5cf6",glow:"139,92,246",grad:"linear-gradient(135deg,#2e1065,#8b5cf6)",score:1.85,maxScore:3.5,docs:9,status:"Under Review"},{num:"IV",roman:"04",title:"Infrastructure & Learning Resources",icon:"fa-building-columns",color:"#ef4444",glow:"239,68,68",grad:"linear-gradient(135deg,#7f1d1d,#ef4444)",score:2.94,maxScore:3.5,docs:14,status:"Submitted"},{num:"V",roman:"05",title:"Student Support & Progression",icon:"fa-users",color:"#f59e0b",glow:"245,158,11",grad:"linear-gradient(135deg,#78350f,#f59e0b)",score:3.05,maxScore:3.5,docs:16,status:"Submitted"},{num:"VI",roman:"06",title:"Governance, Leadership & Management",icon:"fa-sitemap",color:"#06b6d4",glow:"6,182,212",grad:"linear-gradient(135deg,#164e63,#06b6d4)",score:2.88,maxScore:3.5,docs:11,status:"Submitted"},{num:"VII",roman:"07",title:"Institutional Values & Best Practices",icon:"fa-star",color:"#ec4899",glow:"236,72,153",grad:"linear-gradient(135deg,#831843,#ec4899)",score:2.5,maxScore:3.5,docs:8,status:"Submitted"}];function Dx({score:r,color:s,label:o,delay:c=0}){const[m,p]=v.useState(0),u=v.useRef(null);v.useEffect(()=>{const y=new IntersectionObserver(([g])=>{if(!g.isIntersecting)return;const T=performance.now(),E=1600,F=R=>{const z=Math.min((R-T)/E,1),P=1-Math.pow(1-z,3);p(r*P),z<1&&requestAnimationFrame(F)};requestAnimationFrame(F)},{threshold:.4});return u.current&&y.observe(u.current),()=>y.disconnect()},[r]);const x=38,h=2*Math.PI*x,b=h*(1-m/4);return e.jsxs("div",{ref:u,style:{display:"flex",flexDirection:"column",alignItems:"center",gap:8},children:[e.jsxs("div",{style:{position:"relative",width:96,height:96},children:[e.jsxs("svg",{width:96,height:96,viewBox:"0 0 96 96",style:{transform:"rotate(-90deg)"},children:[e.jsx("circle",{cx:48,cy:48,r:x,fill:"none",stroke:"rgba(255,255,255,0.06)",strokeWidth:7}),e.jsx("circle",{cx:48,cy:48,r:x,fill:"none",stroke:s,strokeWidth:7,strokeDasharray:h,strokeDashoffset:b,strokeLinecap:"round",style:{filter:`drop-shadow(0 0 6px ${s}80)`}})]}),e.jsxs("div",{style:{position:"absolute",inset:0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[e.jsx("span",{style:{fontFamily:"'Outfit',sans-serif",fontWeight:900,fontSize:"1.1rem",color:"#fff",lineHeight:1},children:m.toFixed(2)}),e.jsx("span",{style:{fontFamily:"'Outfit',sans-serif",fontSize:"0.55rem",fontWeight:600,color:"rgba(255,255,255,0.35)"},children:"/4.00"})]})]}),e.jsx("span",{style:{fontFamily:"'Outfit',sans-serif",fontSize:"0.62rem",fontWeight:700,color:"rgba(255,255,255,0.4)",textTransform:"uppercase",letterSpacing:"0.6px",textAlign:"center",maxWidth:90,lineHeight:1.4},children:o})]})}function Wx({c:r,i:s}){const[o,c]=v.useState(!1),m=r.score/4*100,p=r.status==="Submitted"?"#10b981":"#f59e0b";return e.jsxs("a",{href:`#crit-${s+1}`,className:"rv",style:{display:"block",textDecoration:"none",background:"#fff",borderRadius:22,overflow:"hidden",border:"1px solid rgba(10,22,40,0.07)",boxShadow:o?`0 20px 56px rgba(${r.glow},0.18)`:"0 4px 20px rgba(10,22,40,0.07)",transform:o?"translateY(-10px) scale(1.01)":"none",transition:"all 0.32s cubic-bezier(0.4,0,0.2,1)",animationDelay:`${s*.07}s`},onMouseEnter:()=>c(!0),onMouseLeave:()=>c(!1),children:[e.jsxs("div",{style:{background:r.grad,padding:"26px 22px 20px",position:"relative",overflow:"hidden"},children:[e.jsx("div",{style:{position:"absolute",right:-4,top:-14,fontFamily:"'Outfit',sans-serif",fontWeight:900,fontSize:"6rem",color:"rgba(255,255,255,0.07)",lineHeight:1,userSelect:"none",transform:o?"scale(1.1) translateX(-6px)":"scale(1)",transition:"transform 0.4s ease"},children:r.roman}),e.jsx("div",{style:{width:50,height:50,borderRadius:14,background:"rgba(255,255,255,0.15)",backdropFilter:"blur(8px)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.2rem",color:"#fff",marginBottom:14,transform:o?"scale(1.12) rotate(-6deg)":"none",transition:"transform 0.3s ease",position:"relative",zIndex:1},children:e.jsx("i",{className:`fa-solid ${r.icon}`})}),e.jsxs("div",{style:{fontFamily:"'Outfit',sans-serif",fontWeight:800,fontSize:"0.98rem",color:"#fff",lineHeight:1.35,marginBottom:16,position:"relative",zIndex:1},children:["Criterion ",r.num,": ",r.title]}),e.jsxs("div",{style:{position:"relative",zIndex:1},children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:5},children:[e.jsx("span",{style:{fontFamily:"'Outfit',sans-serif",fontSize:"0.65rem",fontWeight:700,color:"rgba(255,255,255,0.5)",textTransform:"uppercase",letterSpacing:.5},children:"Score"}),e.jsxs("span",{style:{fontFamily:"'Outfit',sans-serif",fontSize:"0.8rem",fontWeight:800,color:"#fff"},children:[r.score," / 4.00"]})]}),e.jsx("div",{style:{height:5,background:"rgba(255,255,255,0.12)",borderRadius:3,overflow:"hidden"},children:e.jsx("div",{style:{height:"100%",background:"rgba(255,255,255,0.85)",borderRadius:3,width:`${m}%`}})})]})]}),e.jsxs("div",{style:{padding:"14px 22px",display:"flex",alignItems:"center",justifyContent:"space-between",borderTop:"1px solid rgba(10,22,40,0.06)"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[e.jsx("div",{style:{width:8,height:8,borderRadius:"50%",background:p,boxShadow:`0 0 8px ${p}80`}}),e.jsx("span",{style:{fontFamily:"'Outfit',sans-serif",fontSize:"0.72rem",fontWeight:700,color:"#4a6080"},children:r.status}),e.jsx("span",{style:{fontFamily:"'Outfit',sans-serif",fontSize:"0.7rem",color:"#94a3b8"},children:"·"}),e.jsxs("span",{style:{fontFamily:"'Outfit',sans-serif",fontSize:"0.72rem",color:"#94a3b8",fontWeight:600},children:[r.docs," docs"]})]}),e.jsx("div",{style:{width:32,height:32,borderRadius:"50%",background:r.grad,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"0.7rem",color:"#fff",transform:o?"translateX(6px)":"none",transition:"transform 0.25s ease",boxShadow:o?`0 4px 14px rgba(${r.glow},0.5)`:"none"},children:e.jsx("i",{className:"fa-solid fa-arrow-right"})})]})]})}function Lx({onLogout:r}){Mx();const s=(Qn.reduce((p,u)=>p+u.score,0)/Qn.length).toFixed(2),o=`
    @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap');
    @keyframes dUp{from{opacity:0;transform:translateY(32px);}to{opacity:1;transform:none;}}
    @keyframes heroIn{from{opacity:0;transform:translateY(18px);}to{opacity:1;transform:none;}}
    @keyframes scan{0%{top:0%;}100%{top:100%;}}
    @keyframes counterUp{from{opacity:0;transform:translateY(10px);}to{opacity:1;transform:none;}}
    @keyframes gradShift{0%,100%{background-position:0% 50%;}50%{background-position:100% 50%;}}

    .rv{opacity:0;transform:translateY(28px);transition:opacity 0.55s ease,transform 0.55s ease;}
    .rv.visible{opacity:1;transform:none;}
    .rv-l{opacity:0;transform:translateX(-28px);transition:opacity 0.55s ease,transform 0.55s ease;}
    .rv-l.visible{opacity:1;transform:none;}

    .nd-page{background:#f0f4f8;min-height:100vh;font-family:'Outfit',sans-serif;}

    /* ─ Hero ─ */
    .nd-hero{
      background:linear-gradient(165deg,#010b18 0%,#051935 35%,#082242 65%,#010f1e 100%);
      min-height:360px;display:flex;flex-direction:column;justify-content:flex-end;
      padding:0;position:relative;overflow:hidden;
    }
    .nd-hero-bg-grid{
      position:absolute;inset:0;pointer-events:none;
      background-image:linear-gradient(rgba(0,212,255,0.035) 1px,transparent 1px),
        linear-gradient(90deg,rgba(0,212,255,0.035) 1px,transparent 1px);
      background-size:44px 44px;
    }
    .nd-hero-scan{
      position:absolute;left:0;right:0;height:1px;
      background:linear-gradient(90deg,transparent,rgba(0,212,255,0.5),transparent);
      animation:scan 7s linear infinite;pointer-events:none;
    }
    .nd-hero-glow1{
      position:absolute;width:700px;height:700px;border-radius:50%;
      background:radial-gradient(circle,rgba(45,125,210,0.2) 0%,transparent 60%);
      top:-200px;right:-150px;filter:blur(50px);pointer-events:none;
    }
    .nd-hero-glow2{
      position:absolute;width:400px;height:400px;border-radius:50%;
      background:radial-gradient(circle,rgba(0,212,255,0.1) 0%,transparent 65%);
      bottom:-100px;left:10%;filter:blur(40px);pointer-events:none;
    }
    .nd-hero-content{position:relative;z-index:2;padding:72px 5% 56px;}
    .nd-hero-badge{
      display:inline-flex;align-items:center;gap:8px;
      background:rgba(0,212,255,0.1);border:1px solid rgba(0,212,255,0.28);
      color:#00d4ff;font-size:0.68rem;font-weight:800;padding:6px 16px;
      border-radius:30px;letter-spacing:2.5px;text-transform:uppercase;
      margin-bottom:18px;animation:heroIn 0.6s 0.1s ease both;
    }
    .nd-hero-h1{
      font-family:'Outfit',sans-serif;
      font-size:clamp(2.2rem,5.5vw,3.8rem);font-weight:900;
      color:#fff;line-height:1.05;letter-spacing:-2px;
      margin-bottom:14px;animation:heroIn 0.6s 0.2s ease both;
    }
    .nd-hero-h1 em{font-style:normal;color:#f5c518;}
    .nd-hero-p{color:rgba(255,255,255,0.42);font-size:0.92rem;line-height:1.75;max-width:540px;margin-bottom:32px;animation:heroIn 0.6s 0.3s ease both;}
    .nd-hero-tags{display:flex;flex-wrap:wrap;gap:10px;animation:heroIn 0.6s 0.4s ease both;}
    .nd-hero-tag{
      display:inline-flex;align-items:center;gap:7px;
      background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);
      border-radius:40px;padding:7px 16px;
      font-size:0.74rem;font-weight:700;color:rgba(255,255,255,0.55);
    }
    .nd-logout{
      position:absolute;top:22px;right:5%;z-index:10;
      display:inline-flex;align-items:center;gap:7px;
      background:rgba(255,255,255,0.07);border:1.5px solid rgba(255,255,255,0.12);
      color:rgba(255,255,255,0.55);font-family:'Outfit',sans-serif;
      font-size:0.76rem;font-weight:700;padding:9px 18px;border-radius:24px;
      cursor:pointer;transition:all 0.22s;
    }
    .nd-logout:hover{background:rgba(239,68,68,0.2);border-color:rgba(239,68,68,0.4);color:#fca5a5;}
    .nd-wave{height:60px;margin-top:-1px;position:relative;}
    .nd-wave svg{width:100%;height:100%;display:block;}

    /* ─ Stats band ─ */
    .nd-stats-band{
      max-width:1240px;margin:-40px auto 0;
      padding:0 4%;
      display:grid;grid-template-columns:repeat(4,1fr);gap:18px;
      position:relative;z-index:4;
    }
    .nd-stat-card{
      background:#fff;border-radius:20px;padding:22px 20px;
      box-shadow:0 4px 28px rgba(10,22,40,0.09);border:1px solid rgba(10,22,40,0.06);
      display:flex;align-items:center;gap:16px;
      transition:transform 0.28s,box-shadow 0.28s;cursor:default;
    }
    .nd-stat-card:hover{transform:translateY(-5px);box-shadow:0 14px 40px rgba(10,22,40,0.14);}
    .nd-stat-ico{
      width:54px;height:54px;border-radius:15px;flex-shrink:0;
      display:flex;align-items:center;justify-content:center;font-size:1.25rem;color:#fff;
    }
    .nd-stat-num{font-family:'Outfit',sans-serif;font-size:1.85rem;font-weight:900;color:#0a1628;line-height:1;}
    .nd-stat-lbl{font-size:0.73rem;font-weight:600;color:#4a6080;margin-top:3px;}

    /* ─ Score rings ─ */
    .nd-rings-sec{
      background:linear-gradient(165deg,#010b18 0%,#051935 50%,#010f1e 100%);
      padding:72px 5%;position:relative;overflow:hidden;margin-top:48px;
    }
    .nd-rings-sec::before{
      content:'';position:absolute;inset:0;
      background:radial-gradient(ellipse at 50% 50%,rgba(0,212,255,0.06) 0%,transparent 65%);
      pointer-events:none;
    }
    .nd-rings-grid{
      max-width:1100px;margin:48px auto 0;
      display:grid;grid-template-columns:repeat(7,1fr);gap:20px;
    }
    .nd-cgpa-box{
      max-width:400px;margin:52px auto 0;
      background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.1);
      border-radius:20px;padding:28px 32px;text-align:center;
      backdrop-filter:blur(12px);
    }
    .nd-cgpa-val{
      font-family:'Outfit',sans-serif;font-size:4rem;font-weight:900;
      background:linear-gradient(135deg,#f5c518,#00d4ff,#f5c518);
      background-size:200% auto;
      -webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;
      animation:gradShift 4s ease infinite;line-height:1;
    }

    /* ─ Criteria grid ─ */
    .nd-crit-sec{padding:32px 4% 80px;}
    .nd-crit-grid{
      max-width:1240px;margin:40px auto 0;
      display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:22px;
    }

    /* ─ Timeline SSR ─ */
    .nd-ssr-sec{background:#fff;padding:72px 5%;}
    .nd-timeline{max-width:900px;margin:40px auto 0;position:relative;}
    .nd-timeline::before{
      content:'';position:absolute;left:22px;top:0;bottom:0;width:2px;
      background:linear-gradient(180deg,#3b82f6,#10b981,#8b5cf6,#ec4899);
      border-radius:2px;
    }
    .nd-tl-item{
      display:flex;align-items:flex-start;gap:24px;
      padding:0 0 28px 0;margin-left:0;
      transition:all 0.3s;
    }
    .nd-tl-dot{
      width:46px;height:46px;border-radius:50%;flex-shrink:0;
      display:flex;align-items:center;justify-content:center;
      font-size:0.85rem;color:#fff;
      box-shadow:0 4px 14px rgba(0,0,0,0.2);
      position:relative;z-index:1;border:3px solid #fff;
    }
    .nd-tl-body{
      flex:1;background:#f8fafc;border:1px solid rgba(10,22,40,0.07);
      border-radius:14px;padding:16px 20px;
      display:flex;align-items:center;justify-content:space-between;gap:12px;
      transition:all 0.28s;cursor:pointer;
    }
    .nd-tl-body:hover{background:#fff;box-shadow:0 6px 24px rgba(10,22,40,0.1);transform:translateX(6px);}
    .nd-tl-title{font-family:'Outfit',sans-serif;font-size:0.86rem;font-weight:800;color:#0a1628;margin-bottom:3px;}
    .nd-tl-meta{font-size:0.72rem;font-weight:600;color:#94a3b8;}
    .nd-tl-badge{
      display:inline-flex;align-items:center;gap:5px;
      border-radius:20px;padding:5px 12px;font-size:0.68rem;font-weight:800;
      white-space:nowrap;flex-shrink:0;
    }

    /* ─ Grade target banner ─ */
    .nd-grade-banner{
      background:linear-gradient(135deg,#0a1628 0%,#1a3a6b 50%,#0a1628 100%);
      background-size:200% auto;animation:gradShift 6s ease infinite;
      padding:56px 5%;text-align:center;
    }

    @media(max-width:960px){.nd-stats-band{grid-template-columns:1fr 1fr;}.nd-rings-grid{grid-template-columns:repeat(4,1fr);}}
    @media(max-width:600px){.nd-stats-band{grid-template-columns:1fr 1fr;padding:0 3%;}.nd-crit-grid{grid-template-columns:1fr 1fr;gap:14px;}.nd-rings-grid{grid-template-columns:repeat(3,1fr);}.nd-hero-h1{font-size:2rem;letter-spacing:-1px;}.nd-timeline::before{left:18px;}.nd-tl-dot{width:38px;height:38px;}}
    @media(max-width:400px){.nd-crit-grid{grid-template-columns:1fr;}.nd-rings-grid{grid-template-columns:repeat(2,1fr);}.nd-stats-band{grid-template-columns:1fr;}}
  `,c=[{val:"7",lbl:"Criteria Covered",icon:"fa-layer-group",col:"linear-gradient(135deg,#1e3a8a,#3b82f6)"},{val:s,lbl:"Avg. CGPA",icon:"fa-chart-line",col:"linear-gradient(135deg,#064e3b,#10b981)"},{val:"88+",lbl:"Documents Filed",icon:"fa-file-shield",col:"linear-gradient(135deg,#2e1065,#8b5cf6)"},{val:"A",lbl:"Target Grade",icon:"fa-medal",col:"linear-gradient(135deg,#78350f,#f59e0b)"}],m=[{title:"Executive Summary",meta:"SSR Part A · 12 pages",col:"linear-gradient(135deg,#1e3a8a,#3b82f6)",status:"Approved",statusCol:"#10b981"},...Qn.map((p,u)=>({title:`Criterion ${p.num} — ${p.title}`,meta:`${p.docs} documents · Score ${p.score}/4.00`,col:p.grad,status:p.status,statusCol:p.status==="Submitted"?"#10b981":"#f59e0b"})),{title:"Evaluative Report",meta:"SSR Part C · Departmental",col:"linear-gradient(135deg,#164e63,#06b6d4)",status:"Submitted",statusCol:"#10b981"}];return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:o}),e.jsxs("div",{className:"nd-page",children:[e.jsxs("div",{className:"nd-hero",children:[e.jsx("div",{className:"nd-hero-bg-grid"}),e.jsx("div",{className:"nd-hero-scan"}),e.jsx("div",{className:"nd-hero-glow1"}),e.jsx("div",{className:"nd-hero-glow2"}),e.jsx(Cm,{r:"0,212,255"}),e.jsxs("button",{className:"nd-logout",onClick:r,children:[e.jsx("i",{className:"fa-solid fa-right-from-bracket"}),"Logout"]}),e.jsxs("div",{className:"nd-hero-content",children:[e.jsxs("div",{className:"nd-hero-badge",children:[e.jsx("i",{className:"fa-solid fa-shield-halved"}),"NAAC Accreditation 2024–25"]}),e.jsxs("h1",{className:"nd-hero-h1",children:["National Assessment",e.jsx("br",{}),"& ",e.jsx("em",{children:"Accreditation"})]}),e.jsx("p",{className:"nd-hero-p",children:"Creative Techno College, Angul, Odisha — Self Study Report comprising all 7 criteria, evidence documents and institutional data for NAAC Grade A certification."}),e.jsx("div",{className:"nd-hero-tags",children:["UGC Recognized","AICTE Approved","Utkal University","Est. 2010","ISO Certified"].map((p,u)=>e.jsxs("span",{className:"nd-hero-tag",children:[e.jsx("i",{className:"fa-solid fa-circle-check",style:{color:"#00d4ff",fontSize:"0.65rem"}}),p]},u))})]})]}),e.jsx("div",{className:"nd-wave",children:e.jsx("svg",{viewBox:"0 0 1440 60",preserveAspectRatio:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M0,40 C360,60 1080,0 1440,40 L1440,60 L0,60 Z",fill:"#f0f4f8"})})}),e.jsx("div",{className:"nd-stats-band",children:c.map((p,u)=>e.jsxs("div",{className:"nd-stat-card rv",style:{animationDelay:`${u*.08}s`},children:[e.jsx("div",{className:"nd-stat-ico",style:{background:p.col},children:e.jsx("i",{className:`fa-solid ${p.icon}`})}),e.jsxs("div",{children:[e.jsx("div",{className:"nd-stat-num",children:p.val}),e.jsx("div",{className:"nd-stat-lbl",children:p.lbl})]})]},u))}),e.jsxs("section",{className:"nd-rings-sec",children:[e.jsxs("div",{style:{maxWidth:1100,margin:"0 auto",textAlign:"center"},children:[e.jsx("span",{className:"section-label",style:{color:"rgba(0,212,255,0.7)"},children:"Performance Overview"}),e.jsxs("h2",{className:"section-title",style:{color:"#fff"},children:["Criteria-wise ",e.jsx("span",{style:{color:"#f5c518"},children:"Scores"})]})]}),e.jsx("div",{className:"nd-rings-grid",children:Qn.map((p,u)=>e.jsx("div",{className:"rv",style:{transitionDelay:`${u*.07}s`},children:e.jsx(Dx,{score:p.score,color:p.color,label:`Criterion ${p.num}`})},u))}),e.jsxs("div",{className:"nd-cgpa-box rv",style:{transitionDelay:"0.5s"},children:[e.jsx("div",{style:{fontFamily:"'Outfit',sans-serif",fontSize:"0.68rem",fontWeight:800,color:"rgba(255,255,255,0.35)",textTransform:"uppercase",letterSpacing:2.5,marginBottom:8},children:"Overall CGPA"}),e.jsx("div",{className:"nd-cgpa-val",children:s}),e.jsx("div",{style:{fontFamily:"'Outfit',sans-serif",fontSize:"0.78rem",color:"rgba(255,255,255,0.3)",marginTop:10},children:"Out of 4.00 — Target: Grade A"}),e.jsx("div",{style:{marginTop:16,display:"flex",justifyContent:"center",gap:16},children:["C","B","B+","A","A+"].map((p,u)=>{const x=[1.51,2.01,2.51,3.01,3.51],h=parseFloat(s)>=x[u];return e.jsx("div",{style:{textAlign:"center"},children:e.jsx("div",{style:{width:36,height:36,borderRadius:10,background:h?p==="A"?"linear-gradient(135deg,#f5c518,#f59e0b)":"rgba(255,255,255,0.12)":"rgba(255,255,255,0.04)",border:`2px solid ${h?p==="A"?"#f5c518":"rgba(255,255,255,0.2)":"rgba(255,255,255,0.07)"}`,display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"'Outfit',sans-serif",fontWeight:900,fontSize:"0.9rem",color:h?"#fff":"rgba(255,255,255,0.15)"},children:p})},u)})})]})]}),e.jsxs("section",{className:"nd-crit-sec",children:[e.jsxs("div",{style:{maxWidth:1240,margin:"0 auto",textAlign:"center"},children:[e.jsx("span",{className:"section-label",children:"Documentation"}),e.jsxs("h2",{className:"section-title",children:["Select a ",e.jsx("span",{children:"Criterion"})]}),e.jsx("p",{className:"section-subtitle",style:{margin:"0 auto"},children:"Click any criterion to access its complete SSR documentation, supporting data and evidence files."})]}),e.jsx("div",{className:"nd-crit-grid",children:Qn.map((p,u)=>e.jsx(Wx,{c:p,i:u},u))})]}),e.jsxs("section",{className:"nd-ssr-sec",children:[e.jsxs("div",{style:{maxWidth:900,margin:"0 auto",textAlign:"center"},children:[e.jsx("span",{className:"section-label",children:"Self Study Report"}),e.jsxs("h2",{className:"section-title",children:["Document ",e.jsx("span",{children:"Timeline"})]}),e.jsx("p",{className:"section-subtitle",style:{margin:"0 auto"},children:"Complete SSR document trail — all submissions and their current status."})]}),e.jsx("div",{className:"nd-timeline",children:m.map((p,u)=>e.jsxs("div",{className:"nd-tl-item rv",style:{transitionDelay:`${u*.05}s`},children:[e.jsx("div",{className:"nd-tl-dot",style:{background:p.col},children:e.jsx("i",{className:"fa-solid fa-file-lines"})}),e.jsxs("div",{className:"nd-tl-body",children:[e.jsxs("div",{children:[e.jsx("div",{className:"nd-tl-title",children:p.title}),e.jsx("div",{className:"nd-tl-meta",children:p.meta})]}),e.jsxs("div",{className:"nd-tl-badge",style:{background:`${p.statusCol}18`,border:`1.5px solid ${p.statusCol}40`,color:p.statusCol},children:[e.jsx("i",{className:"fa-solid fa-circle-check"}),p.status]})]})]},u))})]}),e.jsx("div",{className:"nd-grade-banner",children:e.jsxs("div",{style:{maxWidth:700,margin:"0 auto"},children:[e.jsx("div",{style:{fontFamily:"'Outfit',sans-serif",fontSize:"0.7rem",fontWeight:800,color:"rgba(245,197,24,0.7)",letterSpacing:3,textTransform:"uppercase",marginBottom:12},children:"Our Goal"}),e.jsxs("h2",{style:{fontFamily:"'Outfit',sans-serif",fontWeight:900,fontSize:"clamp(2rem,4vw,3rem)",color:"#fff",letterSpacing:-1.5,marginBottom:14,lineHeight:1.1},children:["Targeting ",e.jsx("span",{style:{color:"#f5c518"},children:"NAAC Grade A"}),e.jsx("br",{}),"for Creative Techno College"]}),e.jsx("p",{style:{color:"rgba(255,255,255,0.4)",fontSize:"0.9rem",lineHeight:1.75},children:"Committed to academic excellence, institutional growth and quality assurance across all 7 criteria of the NAAC Self Study Report framework."})]})})]})]})}function Hx(){const[r,s]=v.useState(!1);return r?e.jsx(Lx,{onLogout:()=>s(!1)}):e.jsx(Ox,{onSuccess:()=>s(!0)})}function Fx(){v.useEffect(()=>{const r=document.querySelectorAll(".rv,.rv-l,.rv-r"),s=new IntersectionObserver(o=>o.forEach(c=>{c.isIntersecting&&c.target.classList.add("visible")}),{threshold:.07});return r.forEach(o=>s.observe(o)),()=>s.disconnect()},[])}function km({r="0,212,255"}){const s=v.useRef(null);return v.useEffect(()=>{const o=s.current;if(!o)return;const c=o.getContext("2d");let m;const p=()=>{o.width=o.offsetWidth,o.height=o.offsetHeight};p(),window.addEventListener("resize",p);const u=Array.from({length:44},()=>({x:Math.random()*o.width,y:Math.random()*o.height,r:Math.random()*1.8+.3,vx:(Math.random()-.5)*.28,vy:(Math.random()-.5)*.28,a:Math.random()*.35+.06})),x=()=>{c.clearRect(0,0,o.width,o.height),u.forEach(h=>{h.x+=h.vx,h.y+=h.vy,(h.x<0||h.x>o.width)&&(h.vx*=-1),(h.y<0||h.y>o.height)&&(h.vy*=-1),c.beginPath(),c.arc(h.x,h.y,h.r,0,Math.PI*2),c.fillStyle=`rgba(${r},${h.a})`,c.fill()}),u.forEach((h,b)=>u.slice(b+1).forEach(y=>{const g=Math.hypot(h.x-y.x,h.y-y.y);g<90&&(c.beginPath(),c.moveTo(h.x,h.y),c.lineTo(y.x,y.y),c.strokeStyle=`rgba(${r},${.05*(1-g/90)})`,c.lineWidth=.5,c.stroke())})),m=requestAnimationFrame(x)};return x(),()=>{cancelAnimationFrame(m),window.removeEventListener("resize",p)}},[r]),e.jsx("canvas",{ref:s,style:{position:"absolute",inset:0,width:"100%",height:"100%",pointerEvents:"none",zIndex:0}})}function Ux({onSuccess:r}){const[s,o]=v.useState(""),[c,m]=v.useState(""),[p,u]=v.useState(!1),[x,h]=v.useState(""),[b,y]=v.useState(!1),[g,T]=v.useState(!1);v.useEffect(()=>{setTimeout(()=>T(!0),50)},[]);const E=async R=>{if(R.preventDefault(),h(""),!s||!c){h("Please enter both username and password.");return}y(!0),await new Promise(z=>setTimeout(z,700)),y(!1),s==="login"&&c==="1010"?r():h("Invalid username or password. Please try again.")};return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
    @keyframes nbaFloat{0%,100%{transform:translateY(0) rotate(0deg);}50%{transform:translateY(-18px) rotate(3deg);}}
    @keyframes nbaSpin{to{transform:rotate(360deg);}}
    .nba-login-page{min-height:100vh;display:flex;align-items:center;justify-content:center;background:linear-gradient(160deg,#060d1a 0%,#0c1f3d 45%,#0a1628 100%);padding:40px 20px;position:relative;overflow:hidden;}
    .nba-login-dots{position:absolute;inset:0;pointer-events:none;background-image:radial-gradient(rgba(255,255,255,0.04) 1px,transparent 1px);background-size:28px 28px;}
    .nba-login-blob{position:absolute;border-radius:50%;filter:blur(65px);pointer-events:none;}
    .nba-split-card{width:100%;max-width:860px;border-radius:28px;overflow:hidden;display:flex;box-shadow:0 32px 80px rgba(0,0,0,0.55),0 0 0 1px rgba(255,255,255,0.06);position:relative;z-index:2;opacity:0;transform:translateY(30px);transition:opacity 0.55s ease,transform 0.55s ease;}
    .nba-split-card.show{opacity:1;transform:translateY(0);}
    .nba-left-panel{flex:1.1;background:linear-gradient(160deg,#f8fafc 0%,#e8eef7 100%);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:52px 40px;gap:18px;position:relative;overflow:hidden;}
    .nba-left-panel::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse at 60% 20%,rgba(45,125,210,0.1) 0%,transparent 60%);pointer-events:none;}
    .nba-panel-logo{width:140px;height:140px;object-fit:contain;filter:drop-shadow(0 8px 24px rgba(0,0,0,0.15));transition:transform 0.35s ease;}
    .nba-panel-logo:hover{transform:scale(1.06);}
    .nba-panel-divider{width:48px;height:3px;border-radius:2px;background:linear-gradient(90deg,#2d7dd2,#00d4ff);}
    .nba-panel-title{font-family:'Poppins',sans-serif;font-size:0.8rem;font-weight:800;color:#0a1628;text-align:center;letter-spacing:0.5px;text-transform:uppercase;line-height:1.5;}
    .nba-panel-title span{display:block;font-size:1.05rem;color:#2d7dd2;margin-top:4px;}
    .nba-panel-badges{display:flex;flex-wrap:wrap;justify-content:center;gap:8px;}
    .nba-panel-badge{background:rgba(45,125,210,0.1);border:1px solid rgba(45,125,210,0.25);color:#1a4a8a;font-family:'Poppins',sans-serif;font-size:0.65rem;font-weight:700;padding:4px 12px;border-radius:20px;letter-spacing:0.5px;}
    .nba-right-panel{flex:1;background:rgba(10,22,40,0.97);display:flex;flex-direction:column;justify-content:center;padding:52px 44px;position:relative;}
    .nba-right-panel::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse at 40% 0%,rgba(0,212,255,0.07) 0%,transparent 55%);pointer-events:none;}
    .nba-right-label{font-family:'Poppins',sans-serif;font-size:0.65rem;font-weight:800;color:rgba(0,212,255,0.7);letter-spacing:3px;text-transform:uppercase;margin-bottom:8px;}
    .nba-right-heading{font-family:'Poppins',sans-serif;font-size:1.8rem;font-weight:900;color:#fff;margin-bottom:6px;line-height:1.15;letter-spacing:-0.3px;}
    .nba-right-heading span{color:#00d4ff;}
    .nba-right-sub{font-family:'Poppins',sans-serif;font-size:0.8rem;color:rgba(255,255,255,0.35);margin-bottom:28px;font-weight:500;}
    .nba-error{background:rgba(220,38,38,0.12);border:1px solid rgba(220,38,38,0.3);border-radius:12px;padding:11px 14px;margin-bottom:16px;display:flex;align-items:flex-start;gap:9px;font-family:'Poppins',sans-serif;font-size:0.78rem;color:#fca5a5;line-height:1.5;}
    .nba-field-label{font-family:'Poppins',sans-serif;font-size:0.7rem;font-weight:700;color:rgba(255,255,255,0.45);letter-spacing:1.5px;text-transform:uppercase;margin-bottom:7px;display:flex;align-items:center;gap:7px;}
    .nba-field-label i{color:#00d4ff;font-size:0.65rem;}
    .nba-input-wrap{display:flex;align-items:center;background:rgba(255,255,255,0.06);border:1.5px solid rgba(255,255,255,0.1);border-radius:13px;overflow:hidden;margin-bottom:18px;transition:border-color 0.22s,background 0.22s,box-shadow 0.22s;}
    .nba-input-wrap:focus-within{border-color:#00d4ff;background:rgba(0,212,255,0.06);box-shadow:0 0 0 3px rgba(0,212,255,0.12);}
    .nba-input-icon{width:44px;display:flex;align-items:center;justify-content:center;color:rgba(255,255,255,0.3);font-size:0.85rem;flex-shrink:0;}
    .nba-input-wrap input{flex:1;border:none;background:transparent;padding:13px 12px 13px 0;font-family:'Inter',sans-serif;font-size:0.9rem;color:#fff;outline:none;}
    .nba-input-wrap input::placeholder{color:rgba(255,255,255,0.2);}
    .nba-eye-btn{width:42px;display:flex;align-items:center;justify-content:center;background:none;border:none;color:rgba(255,255,255,0.3);cursor:pointer;font-size:0.82rem;transition:color 0.2s;}
    .nba-eye-btn:hover{color:rgba(255,255,255,0.7);}
    .nba-submit-btn{width:100%;padding:14px;border:none;border-radius:13px;background:linear-gradient(135deg,#1a4a8a,#2d7dd2);color:#fff;font-family:'Poppins',sans-serif;font-size:0.92rem;font-weight:700;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:9px;margin-top:4px;transition:transform 0.22s,box-shadow 0.22s;letter-spacing:0.3px;box-shadow:0 8px 24px rgba(45,125,210,0.35);position:relative;overflow:hidden;}
    .nba-submit-btn::after{content:'';position:absolute;top:-50%;left:-60%;width:200%;height:200%;background:rgba(255,255,255,0.1);transform:rotate(30deg);transition:0.45s;}
    .nba-submit-btn:hover::after{left:100%;}
    .nba-submit-btn:hover{transform:translateY(-2px);box-shadow:0 12px 32px rgba(45,125,210,0.45);}
    .nba-submit-btn:disabled{opacity:0.6;cursor:not-allowed;transform:none;}
    .nba-spinner{width:17px;height:17px;border:2.5px solid rgba(255,255,255,0.25);border-top-color:#fff;border-radius:50%;animation:nbaSpin 0.7s linear infinite;}
    .nba-secure-note{margin-top:18px;display:flex;align-items:center;justify-content:center;gap:6px;font-family:'Poppins',sans-serif;font-size:0.7rem;color:rgba(255,255,255,0.22);}
    .nba-secure-note i{color:rgba(0,212,255,0.5);}
    @media(max-width:700px){.nba-split-card{flex-direction:column;max-width:420px;}.nba-left-panel{padding:36px 28px 28px;}.nba-panel-logo{width:100px;height:100px;}.nba-right-panel{padding:32px 28px 36px;}.nba-right-heading{font-size:1.5rem;}}
    @media(max-width:420px){.nba-right-panel{padding:28px 22px 32px;}.nba-left-panel{padding:28px 18px 22px;}}
  `}),e.jsxs("div",{className:"nba-login-page",children:[e.jsx(km,{r:"0,212,255"}),e.jsx("div",{className:"nba-login-dots"}),e.jsx("div",{className:"nba-login-blob",style:{width:500,height:500,background:"radial-gradient(circle,rgba(45,125,210,0.22) 0%,transparent 70%)",top:-160,right:-80,animation:"nbaFloat 9s ease-in-out infinite"}}),e.jsx("div",{className:"nba-login-blob",style:{width:340,height:340,background:"radial-gradient(circle,rgba(0,212,255,0.07) 0%,transparent 70%)",bottom:-100,left:-60,animation:"nbaFloat 11s ease-in-out infinite reverse"}}),e.jsxs("div",{className:`nba-split-card${g?" show":""}`,children:[e.jsxs("div",{className:"nba-left-panel",children:[e.jsx("img",{className:"nba-panel-logo",src:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/NBA-removebg-preview.png",alt:"NBA",onError:R=>{R.target.parentElement.innerHTML='<span style="font-size:5rem">🏅</span>'}}),e.jsx("div",{className:"nba-panel-divider"}),e.jsxs("div",{className:"nba-panel-title",children:["National Board of",e.jsx("span",{children:"Accreditation"})]}),e.jsxs("div",{className:"nba-panel-badges",children:[e.jsx("span",{className:"nba-panel-badge",children:"NBA"}),e.jsx("span",{className:"nba-panel-badge",children:"AICTE Linked"}),e.jsx("span",{className:"nba-panel-badge",children:"OBE Framework"})]})]}),e.jsxs("div",{className:"nba-right-panel",children:[e.jsx("p",{className:"nba-right-label",children:"Secure Access"}),e.jsxs("h1",{className:"nba-right-heading",children:["NBA ",e.jsx("span",{children:"Portal"})]}),e.jsx("p",{className:"nba-right-sub",children:"Creative Techno College — Accreditation Dashboard"}),x&&e.jsxs("div",{className:"nba-error",children:[e.jsx("i",{className:"fa-solid fa-triangle-exclamation",style:{marginTop:2,flexShrink:0}}),e.jsx("span",{children:x})]}),e.jsxs("form",{onSubmit:E,noValidate:!0,children:[e.jsxs("label",{className:"nba-field-label",children:[e.jsx("i",{className:"fa-solid fa-user"}),"Username"]}),e.jsxs("div",{className:"nba-input-wrap",children:[e.jsx("span",{className:"nba-input-icon",children:e.jsx("i",{className:"fa-solid fa-id-card"})}),e.jsx("input",{type:"text",value:s,onChange:R=>o(R.target.value),placeholder:"Enter username",autoComplete:"username",required:!0})]}),e.jsxs("label",{className:"nba-field-label",children:[e.jsx("i",{className:"fa-solid fa-lock"}),"Password"]}),e.jsxs("div",{className:"nba-input-wrap",children:[e.jsx("span",{className:"nba-input-icon",children:e.jsx("i",{className:"fa-solid fa-key"})}),e.jsx("input",{type:p?"text":"password",value:c,onChange:R=>m(R.target.value),placeholder:"Enter password",autoComplete:"current-password",required:!0}),e.jsx("button",{type:"button",className:"nba-eye-btn",onClick:()=>u(R=>!R),children:e.jsx("i",{className:`fa-solid ${p?"fa-eye-slash":"fa-eye"}`})})]}),e.jsx("button",{type:"submit",className:"nba-submit-btn",disabled:b,children:b?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"nba-spinner"}),"Authenticating…"]}):e.jsxs(e.Fragment,{children:[e.jsx("i",{className:"fa-solid fa-right-to-bracket"}),"Access Dashboard"]})})]}),e.jsxs("div",{className:"nba-secure-note",children:[e.jsx("i",{className:"fa-solid fa-shield-check"}),"Protected portal — authorised personnel only"]})]})]})]})]})}const _x=[{num:"1",title:"Vision, Mission & Programme Educational Objectives",icon:"fa-bullseye",color:"#f59e0b",glow:"245,158,11",grad:"linear-gradient(135deg,#78350f,#f59e0b)",docs:8},{num:"2",title:"Programme Curriculum & Teaching-Learning Processes",icon:"fa-book-open",color:"#3b82f6",glow:"59,130,246",grad:"linear-gradient(135deg,#1e3a8a,#3b82f6)",docs:14},{num:"3",title:"Course Outcomes & Programme Outcomes",icon:"fa-chart-line",color:"#10b981",glow:"16,185,129",grad:"linear-gradient(135deg,#064e3b,#10b981)",docs:12},{num:"4",title:"Students' Performance",icon:"fa-user-graduate",color:"#8b5cf6",glow:"139,92,246",grad:"linear-gradient(135deg,#2e1065,#8b5cf6)",docs:10},{num:"5",title:"Faculty Information & Contributions",icon:"fa-chalkboard-user",color:"#06b6d4",glow:"6,182,212",grad:"linear-gradient(135deg,#164e63,#06b6d4)",docs:16},{num:"6",title:"Facilities & Technical Support",icon:"fa-building",color:"#ef4444",glow:"239,68,68",grad:"linear-gradient(135deg,#7f1d1d,#ef4444)",docs:9},{num:"7",title:"Continuous Improvement",icon:"fa-arrows-rotate",color:"#ec4899",glow:"236,72,153",grad:"linear-gradient(135deg,#831843,#ec4899)",docs:7}],Vp=[{abbr:"PEO",full:"Programme Educational Objectives",icon:"fa-bullseye",desc:"Broad statements describing career and professional accomplishments graduates are expected to achieve within a few years after graduation.",color:"#3b82f6"},{abbr:"PO",full:"Programme Outcomes",icon:"fa-graduation-cap",desc:"Attributes and skills that students should possess at the time of graduation — knowledge, skills and attitudes.",color:"#00d4ff"},{abbr:"PSO",full:"Programme Specific Outcomes",icon:"fa-star",desc:"Domain-specific competencies expected of graduates of a particular programme, beyond the standard POs.",color:"#2d7dd2"},{abbr:"CO",full:"Course Outcomes",icon:"fa-book",desc:"Specific competencies students will demonstrate upon successful completion of each individual course.",color:"#1a4a8a"}];function $x({prog:r}){const[s,o]=v.useState(!1);return e.jsxs("div",{onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1),style:{background:"#fff",borderRadius:18,padding:"20px 22px",border:"1px solid rgba(10,22,40,0.07)",boxShadow:s?"0 12px 36px rgba(10,22,40,0.13)":"0 2px 12px rgba(10,22,40,0.06)",transform:s?"translateY(-5px)":"none",transition:"all 0.28s ease",cursor:"default"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:12},children:[e.jsx("div",{style:{fontFamily:"'Outfit',sans-serif",fontWeight:800,fontSize:"0.95rem",color:"#0a1628"},children:r.name}),e.jsx("div",{style:{background:`${r.color}18`,border:`1.5px solid ${r.color}40`,color:r.color,fontFamily:"'Outfit',sans-serif",fontSize:"0.65rem",fontWeight:800,padding:"3px 10px",borderRadius:20,letterSpacing:.5},children:r.badge})]}),e.jsx("div",{style:{fontFamily:"'Outfit',sans-serif",fontSize:"0.75rem",color:"#4a6080",marginBottom:14,fontWeight:500},children:r.dept}),r.metrics.map((c,m)=>e.jsxs("div",{style:{marginBottom:m<r.metrics.length-1?10:0},children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:4},children:[e.jsx("span",{style:{fontFamily:"'Outfit',sans-serif",fontSize:"0.7rem",fontWeight:700,color:"#4a6080"},children:c.label}),e.jsx("span",{style:{fontFamily:"'Outfit',sans-serif",fontSize:"0.7rem",fontWeight:800,color:r.color},children:c.val})]}),e.jsx("div",{style:{height:5,background:`${r.color}18`,borderRadius:3,overflow:"hidden"},children:e.jsx("div",{style:{height:"100%",background:r.color,borderRadius:3,width:s?`${c.pct}%`:"0%",transition:`width ${.8+m*.15}s cubic-bezier(0.4,0,0.2,1)`}})})]},m))]})}function Gx({onLogout:r}){Fx();const s=`
    @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap');
    @keyframes dUp{from{opacity:0;transform:translateY(32px);}to{opacity:1;transform:none;}}
    @keyframes heroIn{from{opacity:0;transform:translateY(18px);}to{opacity:1;transform:none;}}
    @keyframes scanAnim{0%{top:-2px;}100%{top:100%;}}
    @keyframes chainArrow{0%,100%{transform:translateX(0);}50%{transform:translateX(6px);}}
    @keyframes gradShift{0%,100%{background-position:0% 50%;}50%{background-position:100% 50%;}}

    .rv{opacity:0;transform:translateY(28px);transition:opacity 0.55s ease,transform 0.55s ease;}
    .rv.visible{opacity:1;transform:none;}
    .rv-l{opacity:0;transform:translateX(-28px);transition:opacity 0.55s ease,transform 0.55s ease;}
    .rv-l.visible{opacity:1;transform:none;}

    .nb-page{background:#f0f4f8;min-height:100vh;font-family:'Outfit',sans-serif;}

    /* ─ HERO ─ */
    .nb-hero{
      background:linear-gradient(165deg,#010b18 0%,#051935 35%,#082242 65%,#010f1e 100%);
      min-height:360px;display:flex;flex-direction:column;justify-content:flex-end;
      padding:0;position:relative;overflow:hidden;
    }
    .nb-hero-grid{
      position:absolute;inset:0;pointer-events:none;
      background-image:linear-gradient(rgba(0,212,255,0.035) 1px,transparent 1px),
        linear-gradient(90deg,rgba(0,212,255,0.035) 1px,transparent 1px);
      background-size:44px 44px;
    }
    .nb-hero-scan{
      position:absolute;left:0;right:0;height:1px;
      background:linear-gradient(90deg,transparent,rgba(0,212,255,0.5),transparent);
      animation:scanAnim 8s linear infinite;pointer-events:none;
    }
    .nb-hero-glow1{position:absolute;width:700px;height:700px;border-radius:50%;background:radial-gradient(circle,rgba(45,125,210,0.2) 0%,transparent 60%);top:-200px;right:-150px;filter:blur(55px);pointer-events:none;}
    .nb-hero-glow2{position:absolute;width:400px;height:400px;border-radius:50%;background:radial-gradient(circle,rgba(0,212,255,0.1) 0%,transparent 65%);bottom:-100px;left:10%;filter:blur(45px);pointer-events:none;}
    .nb-hero-content{position:relative;z-index:2;padding:72px 5% 56px;}
    .nb-hero-badge{
      display:inline-flex;align-items:center;gap:8px;
      background:rgba(0,212,255,0.1);border:1px solid rgba(0,212,255,0.28);
      color:#00d4ff;font-size:0.68rem;font-weight:800;padding:6px 16px;
      border-radius:30px;letter-spacing:2.5px;text-transform:uppercase;
      margin-bottom:18px;animation:heroIn 0.6s 0.1s ease both;
    }
    .nb-hero-h1{
      font-family:'Outfit',sans-serif;
      font-size:clamp(2.2rem,5.5vw,3.8rem);font-weight:900;
      color:#fff;line-height:1.05;letter-spacing:-2px;
      margin-bottom:14px;animation:heroIn 0.6s 0.2s ease both;
    }
    .nb-hero-h1 em{font-style:normal;color:#00d4ff;}
    .nb-hero-p{color:rgba(255,255,255,0.42);font-size:0.92rem;line-height:1.75;max-width:540px;margin-bottom:32px;animation:heroIn 0.6s 0.3s ease both;}
    .nb-hero-tags{display:flex;flex-wrap:wrap;gap:10px;animation:heroIn 0.6s 0.4s ease both;}
    .nb-hero-tag{
      display:inline-flex;align-items:center;gap:7px;
      background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);
      border-radius:40px;padding:7px 16px;
      font-size:0.74rem;font-weight:700;color:rgba(255,255,255,0.55);
    }
    .nb-logout{
      position:absolute;top:22px;right:5%;z-index:10;
      display:inline-flex;align-items:center;gap:7px;
      background:rgba(255,255,255,0.07);border:1.5px solid rgba(255,255,255,0.12);
      color:rgba(255,255,255,0.55);font-family:'Outfit',sans-serif;
      font-size:0.76rem;font-weight:700;padding:9px 18px;border-radius:24px;cursor:pointer;transition:all 0.22s;
    }
    .nb-logout:hover{background:rgba(239,68,68,0.2);border-color:rgba(239,68,68,0.4);color:#fca5a5;}
    .nb-wave{height:60px;margin-top:-1px;position:relative;}
    .nb-wave svg{width:100%;height:100%;display:block;}

    /* ─ Stats ─ */
    .nb-stats-band{
      max-width:1240px;margin:-40px auto 0;padding:0 4%;
      display:grid;grid-template-columns:repeat(5,1fr);gap:16px;position:relative;z-index:4;
    }
    .nb-stat{
      background:#fff;border-radius:18px;padding:20px 18px;
      box-shadow:0 4px 24px rgba(10,22,40,0.09);border:1px solid rgba(10,22,40,0.06);
      text-align:center;transition:transform 0.28s,box-shadow 0.28s;cursor:default;
    }
    .nb-stat:hover{transform:translateY(-5px);box-shadow:0 12px 36px rgba(10,22,40,0.14);}
    .nb-stat-ico{
      width:48px;height:48px;border-radius:14px;margin:0 auto 12px;
      display:flex;align-items:center;justify-content:center;font-size:1.15rem;color:#fff;
    }
    .nb-stat-val{font-family:'Outfit',sans-serif;font-size:1.6rem;font-weight:900;color:#0a1628;line-height:1;}
    .nb-stat-lbl{font-size:0.7rem;font-weight:600;color:#4a6080;margin-top:3px;}

    /* ─ OBE Chain ─ */
    .nb-obe-sec{
      background:linear-gradient(165deg,#010b18 0%,#051935 50%,#010f1e 100%);
      padding:72px 5%;position:relative;overflow:hidden;margin-top:48px;
    }
    .nb-obe-sec::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse at 50% 50%,rgba(0,212,255,0.06) 0%,transparent 60%);pointer-events:none;}
    .nb-obe-chain{
      max-width:1100px;margin:52px auto 0;
      display:grid;grid-template-columns:repeat(4,1fr);gap:0;
      position:relative;
    }
    .nb-obe-chain::before{
      content:'';position:absolute;top:52px;left:12%;right:12%;height:2px;
      background:linear-gradient(90deg,#3b82f6,#00d4ff,#2d7dd2,#1a4a8a);
      border-radius:2px;pointer-events:none;
    }
    .nb-obe-node{
      display:flex;flex-direction:column;align-items:center;text-align:center;padding:0 16px;
      position:relative;
    }
    .nb-obe-dot{
      width:106px;height:106px;border-radius:50%;
      display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;
      position:relative;z-index:1;margin-bottom:20px;
      border:3px solid rgba(255,255,255,0.12);
      transition:transform 0.3s ease,box-shadow 0.3s ease;cursor:default;
    }
    .nb-obe-dot:hover{transform:scale(1.08);}
    .nb-obe-abbr{font-family:'Outfit',sans-serif;font-size:1.5rem;font-weight:900;color:#fff;line-height:1;}
    .nb-obe-dot-icon{font-size:0.8rem;opacity:0.7;color:#fff;}
    .nb-obe-full{font-family:'Outfit',sans-serif;font-size:0.78rem;font-weight:800;color:#fff;margin-bottom:8px;line-height:1.3;}
    .nb-obe-desc{font-family:'Outfit',sans-serif;font-size:0.72rem;color:rgba(255,255,255,0.4);line-height:1.7;font-weight:500;}
    .nb-obe-arrow{
      position:absolute;top:44px;right:-12px;z-index:2;
      width:24px;height:24px;background:rgba(255,255,255,0.08);
      border:1px solid rgba(255,255,255,0.12);border-radius:50%;
      display:flex;align-items:center;justify-content:center;
      font-size:0.55rem;color:rgba(255,255,255,0.4);
      animation:chainArrow 2s ease-in-out infinite;
    }

    /* ─ Criteria grid ─ */
    .nb-crit-sec{padding:32px 4% 72px;}
    .nb-crit-grid{
      max-width:1240px;margin:40px auto 0;
      display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:22px;
    }
    .nb-crit-card{
      background:#fff;border-radius:22px;overflow:hidden;
      border:1px solid rgba(10,22,40,0.07);
      box-shadow:0 4px 20px rgba(10,22,40,0.08);
      text-decoration:none;display:block;
      transition:transform 0.3s,box-shadow 0.3s;
    }
    .nb-crit-card:hover{transform:translateY(-9px);box-shadow:0 22px 56px rgba(10,22,40,0.16);}
    .nb-crit-top{padding:26px 22px 20px;position:relative;overflow:hidden;}
    .nb-crit-wm{
      position:absolute;right:-4px;top:-14px;
      font-family:'Outfit',sans-serif;font-weight:900;font-size:6rem;
      color:rgba(255,255,255,0.07);line-height:1;userSelect:none;
    }
    .nb-crit-title{font-family:'Outfit',sans-serif;font-weight:800;font-size:0.97rem;color:#fff;line-height:1.35;position:relative;z-index:1;margin-bottom:14px;}
    .nb-crit-footer{
      padding:14px 22px;background:#fff;
      display:flex;align-items:center;justify-content:space-between;
      border-top:1px solid rgba(10,22,40,0.06);
    }
    .nb-crit-docs{font-family:'Outfit',sans-serif;font-size:0.72rem;font-weight:700;color:#4a6080;display:flex;align-items:center;gap:6px;}
    .nb-crit-arrow{
      width:32px;height:32px;border-radius:50%;
      display:flex;align-items:center;justify-content:center;
      font-size:0.72rem;color:#fff;
      transition:transform 0.25s,box-shadow 0.25s;
    }
    .nb-crit-card:hover .nb-crit-arrow{transform:translateX(6px);}

    /* ─ Programs ─ */
    .nb-prog-sec{background:#fff;padding:72px 5%;}
    .nb-prog-grid{
      max-width:1200px;margin:40px auto 0;
      display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:20px;
    }

    /* ─ Bottom banner ─ */
    .nb-banner{
      background:linear-gradient(135deg,#010b18 0%,#051935 50%,#010f1e 100%);
      background-size:200% auto;animation:gradShift 6s ease infinite;
      padding:64px 5%;text-align:center;
    }

    @media(max-width:960px){.nb-stats-band{grid-template-columns:repeat(3,1fr);}.nb-obe-chain{grid-template-columns:repeat(2,1fr);gap:32px;}.nb-obe-chain::before{display:none;}.nb-obe-arrow{display:none;}}
    @media(max-width:640px){.nb-stats-band{grid-template-columns:repeat(2,1fr);padding:0 3%;}.nb-crit-grid{grid-template-columns:1fr 1fr;gap:14px;}.nb-hero-h1{font-size:2rem;letter-spacing:-1px;}}
    @media(max-width:400px){.nb-crit-grid{grid-template-columns:1fr;}.nb-stats-band{grid-template-columns:1fr 1fr;}}
  `,o=[{val:"7",lbl:"Criteria",icon:"fa-layer-group",col:"linear-gradient(135deg,#1e3a8a,#3b82f6)"},{val:"4",lbl:"Programs",icon:"fa-graduation-cap",col:"linear-gradient(135deg,#164e63,#06b6d4)"},{val:"OBE",lbl:"Framework",icon:"fa-arrows-spin",col:"linear-gradient(135deg,#064e3b,#10b981)"},{val:"NBA",lbl:"Accreditation",icon:"fa-medal",col:"linear-gradient(135deg,#2e1065,#8b5cf6)"},{val:"A+",lbl:"Target",icon:"fa-star",col:"linear-gradient(135deg,#0c1f3d,#2d7dd2)"}],c=[{name:"B.Tech CSE",dept:"Computer Science & Engineering",badge:"Accredited",color:"#3b82f6",metrics:[{label:"PO Attainment",val:"78%",pct:78},{label:"CO Attainment",val:"83%",pct:83},{label:"Pass Rate",val:"91%",pct:91}]},{name:"B.Tech ECE",dept:"Electronics & Communication Engg.",badge:"Accredited",color:"#10b981",metrics:[{label:"PO Attainment",val:"74%",pct:74},{label:"CO Attainment",val:"79%",pct:79},{label:"Pass Rate",val:"88%",pct:88}]},{name:"B.Tech MECH",dept:"Mechanical Engineering",badge:"Applied",color:"#06b6d4",metrics:[{label:"PO Attainment",val:"71%",pct:71},{label:"CO Attainment",val:"76%",pct:76},{label:"Pass Rate",val:"85%",pct:85}]},{name:"B.Tech CIVIL",dept:"Civil Engineering",badge:"Applied",color:"#8b5cf6",metrics:[{label:"PO Attainment",val:"69%",pct:69},{label:"CO Attainment",val:"74%",pct:74},{label:"Pass Rate",val:"87%",pct:87}]}];return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:s}),e.jsxs("div",{className:"nb-page",children:[e.jsxs("div",{className:"nb-hero",children:[e.jsx("div",{className:"nb-hero-grid"}),e.jsx("div",{className:"nb-hero-scan"}),e.jsx("div",{className:"nb-hero-glow1"}),e.jsx("div",{className:"nb-hero-glow2"}),e.jsx(km,{r:"0,212,255"}),e.jsxs("button",{className:"nb-logout",onClick:r,children:[e.jsx("i",{className:"fa-solid fa-right-from-bracket"}),"Logout"]}),e.jsxs("div",{className:"nb-hero-content",children:[e.jsxs("div",{className:"nb-hero-badge",children:[e.jsx("i",{className:"fa-solid fa-medal"}),"NBA Accreditation Portal"]}),e.jsxs("h1",{className:"nb-hero-h1",children:["National Board",e.jsx("br",{}),"of ",e.jsx("em",{children:"Accreditation"})]}),e.jsx("p",{className:"nb-hero-p",children:"Creative Techno College, Angul — Outcome-Based Education framework documentation, programme accreditation data and evidence for all 7 NBA criteria."}),e.jsx("div",{className:"nb-hero-tags",children:["AICTE Linked","OBE Framework","4 Programs","Utkal University","BPUT Affiliated"].map((m,p)=>e.jsxs("span",{className:"nb-hero-tag",children:[e.jsx("i",{className:"fa-solid fa-circle-check",style:{color:"#00d4ff",fontSize:"0.65rem"}}),m]},p))})]})]}),e.jsx("div",{className:"nb-wave",children:e.jsx("svg",{viewBox:"0 0 1440 60",preserveAspectRatio:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M0,40 C360,60 1080,0 1440,40 L1440,60 L0,60 Z",fill:"#f0f4f8"})})}),e.jsx("div",{className:"nb-stats-band",children:o.map((m,p)=>e.jsxs("div",{className:"nb-stat rv",style:{transitionDelay:`${p*.07}s`},children:[e.jsx("div",{className:"nb-stat-ico",style:{background:m.col},children:e.jsx("i",{className:`fa-solid ${m.icon}`})}),e.jsx("div",{className:"nb-stat-val",children:m.val}),e.jsx("div",{className:"nb-stat-lbl",children:m.lbl})]},p))}),e.jsxs("section",{className:"nb-obe-sec",children:[e.jsxs("div",{style:{maxWidth:1100,margin:"0 auto",textAlign:"center"},children:[e.jsx("span",{className:"section-label",style:{color:"rgba(0,212,255,0.7)"},children:"Framework"}),e.jsxs("h2",{className:"section-title",style:{color:"#fff"},children:["Outcome-Based ",e.jsx("span",{style:{color:"#00d4ff"},children:"Education"})]}),e.jsx("p",{className:"section-subtitle",style:{color:"rgba(255,255,255,0.4)",margin:"0 auto"},children:"The OBE chain ensures every course, programme and institutional goal is mapped to measurable outcomes."})]}),e.jsx("div",{className:"nb-obe-chain",children:Vp.map((m,p)=>e.jsxs("div",{className:"nb-obe-node rv",style:{transitionDelay:`${p*.1}s`},children:[p<Vp.length-1&&e.jsx("div",{className:"nb-obe-arrow",children:e.jsx("i",{className:"fa-solid fa-arrow-right"})}),e.jsxs("div",{className:"nb-obe-dot",style:{background:`linear-gradient(135deg,${m.color}cc,${m.color})`,boxShadow:`0 8px 32px ${m.color}50`},children:[e.jsx("div",{className:"nb-obe-abbr",children:m.abbr}),e.jsx("i",{className:`fa-solid ${m.icon} nb-obe-dot-icon`})]}),e.jsx("div",{className:"nb-obe-full",children:m.full}),e.jsx("div",{className:"nb-obe-desc",children:m.desc})]},p))})]}),e.jsxs("section",{className:"nb-crit-sec",children:[e.jsxs("div",{style:{maxWidth:1240,margin:"0 auto",textAlign:"center"},children:[e.jsx("span",{className:"section-label",children:"Documentation"}),e.jsxs("h2",{className:"section-title",children:["Select a ",e.jsx("span",{children:"Criterion"})]}),e.jsx("p",{className:"section-subtitle",style:{margin:"0 auto"},children:"Access complete documentation and evidence for each of the 7 NBA criteria."})]}),e.jsx("div",{className:"nb-crit-grid",children:_x.map((m,p)=>e.jsxs("a",{href:`#crit-${p+1}`,className:"nb-crit-card rv",style:{transitionDelay:`${p*.07}s`,textDecoration:"none"},children:[e.jsxs("div",{className:"nb-crit-top",style:{background:m.grad},children:[e.jsx("div",{className:"nb-crit-wm",children:m.num.padStart(2,"0")}),e.jsx("div",{style:{width:50,height:50,borderRadius:14,background:"rgba(255,255,255,0.16)",backdropFilter:"blur(8px)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.2rem",color:"#fff",marginBottom:14,position:"relative",zIndex:1},children:e.jsx("i",{className:`fa-solid ${m.icon}`})}),e.jsxs("div",{className:"nb-crit-title",children:["Criterion ",m.num,": ",m.title]})]}),e.jsxs("div",{className:"nb-crit-footer",children:[e.jsxs("div",{className:"nb-crit-docs",children:[e.jsx("i",{className:"fa-solid fa-file-lines",style:{color:m.color}}),m.docs," documents"]}),e.jsx("div",{className:"nb-crit-arrow",style:{background:m.grad,boxShadow:`0 4px 12px rgba(${m.glow},0.35)`},children:e.jsx("i",{className:"fa-solid fa-arrow-right"})})]})]},p))})]}),e.jsxs("section",{className:"nb-prog-sec",children:[e.jsxs("div",{style:{maxWidth:1200,margin:"0 auto",textAlign:"center"},children:[e.jsx("span",{className:"section-label",children:"OBE Attainment"}),e.jsxs("h2",{className:"section-title",children:["Programme ",e.jsx("span",{children:"Performance"})]}),e.jsx("p",{className:"section-subtitle",style:{margin:"0 auto"},children:"PO, CO and overall pass rate attainment across all accredited programmes."})]}),e.jsx("div",{className:"nb-prog-grid",children:c.map((m,p)=>e.jsx("div",{className:"rv",style:{transitionDelay:`${p*.08}s`},children:e.jsx($x,{prog:m})},p))})]}),e.jsx("div",{className:"nb-banner",children:e.jsxs("div",{style:{maxWidth:700,margin:"0 auto"},children:[e.jsx("div",{style:{fontFamily:"'Outfit',sans-serif",fontSize:"0.7rem",fontWeight:800,color:"rgba(0,212,255,0.7)",letterSpacing:3,textTransform:"uppercase",marginBottom:12},children:"Our Goal"}),e.jsxs("h2",{style:{fontFamily:"'Outfit',sans-serif",fontWeight:900,fontSize:"clamp(2rem,4vw,3rem)",color:"#fff",letterSpacing:-1.5,marginBottom:14,lineHeight:1.1},children:["Achieving ",e.jsx("span",{style:{color:"#00d4ff"},children:"NBA Accreditation"}),e.jsx("br",{}),"Across All 4 Programs"]}),e.jsx("p",{style:{color:"rgba(255,255,255,0.4)",fontSize:"0.9rem",lineHeight:1.75},children:"Delivering outcome-based engineering education with measurable PO/CO attainment, continuous quality improvement and industry-aligned curriculum."})]})})]})]})}function Yx(){const[r,s]=v.useState(!1);return r?e.jsx(Gx,{onLogout:()=>s(!1)}):e.jsx(Ux,{onSuccess:()=>s(!0)})}function Jx(){v.useEffect(()=>{const r=document.querySelectorAll(".reveal, .reveal-left, .reveal-right"),s=new IntersectionObserver(o=>o.forEach(c=>{c.isIntersecting&&c.target.classList.add("visible")}),{threshold:.1});return r.forEach(o=>s.observe(o)),()=>s.disconnect()},[])}const Vx=[{title:"Digital Literacy Drive",icon:"fa-laptop",color:"#2d7dd2",desc:"Empowering rural youth with digital skills, computer literacy, and internet access to bridge the digital divide.",impact:"500+ Students Trained"},{title:"Skill India Alignment",icon:"fa-tools",color:"#16a34a",desc:"Aligning curriculum with Skill India mission to produce industry-ready graduates with practical competencies.",impact:"4 Programs Aligned"},{title:"Entrepreneurship Development",icon:"fa-lightbulb",color:"#f59e0b",desc:"Fostering startup culture through incubation support, mentorship, and entrepreneurship development programs.",impact:"10+ Startups Supported"},{title:"Green Campus Initiative",icon:"fa-leaf",color:"#16a34a",desc:"Promoting sustainable practices, solar energy adoption, and eco-friendly campus operations.",impact:"Carbon Neutral Goal 2030"},{title:"Women Empowerment",icon:"fa-venus",color:"#7c3aed",desc:"Special scholarships, mentorship programs, and leadership opportunities for women students.",impact:"60%+ Women Enrollment"},{title:"Community Outreach",icon:"fa-hands-helping",color:"#dc2626",desc:"Regular community service activities, health camps, and awareness programs in surrounding villages.",impact:"20+ Villages Reached"}],Kx=[{icon:"fa-graduation-cap",title:"Quality Education",desc:"Ensuring accessible, affordable, and high-quality education for all"},{icon:"fa-industry",title:"Industry Connect",desc:"Bridging academia and industry for better employment outcomes"},{icon:"fa-globe",title:"Digital India",desc:"Contributing to India's digital transformation through tech education"},{icon:"fa-seedling",title:"Sustainable Growth",desc:"Promoting sustainable development in education and campus operations"}];function qx(){return Jx(),e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"page-hero",children:[e.jsx("div",{className:"page-hero-dots"}),e.jsx("span",{className:"section-label",children:"National Initiative"}),e.jsxs("h1",{children:["Vikshit ",e.jsx("span",{children:"Bharat"})]}),e.jsx("p",{children:"Creative Techno College's contribution to building a Developed India by 2047"})]}),e.jsx("section",{style:{padding:"60px 5%",background:"#fff"},children:e.jsx("div",{style:{maxWidth:"1100px",margin:"0 auto"},children:e.jsxs("div",{className:"reveal tech-card",style:{padding:"36px 40px"},children:[e.jsx("span",{className:"section-label",children:"Vision"}),e.jsxs("h2",{className:"section-title",children:["Vikshit Bharat ",e.jsx("span",{children:"@2047"})]}),e.jsx("p",{style:{color:"var(--text-muted)",lineHeight:1.9,fontSize:"1rem"},children:"Vikshit Bharat (Developed India) is Prime Minister Narendra Modi's vision to transform India into a fully developed nation by 2047, the centenary of India's independence. Creative Techno College is proud to contribute to this national mission through quality education, skill development, and community empowerment."}),e.jsx("p",{style:{color:"var(--text-muted)",lineHeight:1.9,fontSize:"1rem",marginTop:"14px"},children:"Our institution actively participates in government initiatives like Skill India, Digital India, Startup India, and Swachh Bharat, aligning our academic programs and campus activities with the national development agenda."})]})})}),e.jsx("section",{className:"tech-grid-bg",style:{padding:"60px 5%"},children:e.jsxs("div",{style:{maxWidth:"1100px",margin:"0 auto"},children:[e.jsxs("div",{style:{textAlign:"center",marginBottom:"40px"},children:[e.jsx("span",{className:"section-label",children:"Foundation"}),e.jsxs("h2",{className:"section-title",children:["Our ",e.jsx("span",{children:"Pillars"})]})]}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(240px, 1fr))",gap:"24px"},children:Kx.map((r,s)=>e.jsxs("div",{className:"reveal tech-card",style:{padding:"28px",textAlign:"center",transitionDelay:`${s*.1}s`},children:[e.jsx("div",{style:{width:"60px",height:"60px",borderRadius:"50%",background:"linear-gradient(135deg, var(--blue-light), var(--cyan))",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 16px"},children:e.jsx("i",{className:`fa-solid ${r.icon}`,style:{color:"#fff",fontSize:"1.3rem"}})}),e.jsx("h3",{style:{fontFamily:"var(--font-head)",fontWeight:800,color:"var(--navy)",marginBottom:"8px",fontSize:"1rem"},children:r.title}),e.jsx("p",{style:{color:"var(--text-muted)",fontSize:"0.85rem",lineHeight:1.7},children:r.desc})]},s))})]})}),e.jsx("section",{style:{padding:"60px 5%",background:"#fff"},children:e.jsxs("div",{style:{maxWidth:"1100px",margin:"0 auto"},children:[e.jsxs("div",{style:{textAlign:"center",marginBottom:"40px"},children:[e.jsx("span",{className:"section-label",children:"Action"}),e.jsxs("h2",{className:"section-title",children:["Our ",e.jsx("span",{children:"Initiatives"})]})]}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(320px, 1fr))",gap:"24px"},children:Vx.map((r,s)=>e.jsxs("div",{className:"reveal tech-card",style:{padding:"28px",transitionDelay:`${s*.08}s`},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"14px",marginBottom:"14px"},children:[e.jsx("div",{style:{width:"48px",height:"48px",borderRadius:"12px",background:`${r.color}22`,border:`2px solid ${r.color}44`,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:e.jsx("i",{className:`fa-solid ${r.icon}`,style:{color:r.color,fontSize:"1.1rem"}})}),e.jsx("h3",{style:{fontFamily:"var(--font-head)",fontWeight:800,color:"var(--navy)",fontSize:"0.95rem"},children:r.title})]}),e.jsx("p",{style:{color:"var(--text-muted)",fontSize:"0.88rem",lineHeight:1.7,marginBottom:"12px"},children:r.desc}),e.jsx("span",{className:"status-badge completed",children:r.impact})]},s))})]})}),e.jsx("section",{className:"tech-grid-bg",style:{padding:"60px 5%"},children:e.jsxs("div",{style:{maxWidth:"1100px",margin:"0 auto"},children:[e.jsxs("div",{style:{textAlign:"center",marginBottom:"40px"},children:[e.jsx("span",{className:"section-label",children:"Impact"}),e.jsxs("h2",{className:"section-title",children:["Our ",e.jsx("span",{children:"Contribution"})]})]}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(200px, 1fr))",gap:"20px"},children:[{num:"1500+",label:"Students Empowered",icon:"fa-users"},{num:"100+",label:"Companies Partnered",icon:"fa-handshake"},{num:"20+",label:"Villages Reached",icon:"fa-map-marker-alt"},{num:"10+",label:"Startups Incubated",icon:"fa-rocket"},{num:"15+",label:"Years of Excellence",icon:"fa-award"}].map((r,s)=>e.jsxs("div",{className:"reveal tech-card gold-accent",style:{padding:"28px",textAlign:"center",transitionDelay:`${s*.08}s`},children:[e.jsx("i",{className:`fa-solid ${r.icon}`,style:{fontSize:"1.6rem",color:"var(--gold)",marginBottom:"12px",display:"block"}}),e.jsx("div",{style:{fontSize:"1.8rem",fontWeight:900,fontFamily:"var(--font-head)",color:"var(--navy)",lineHeight:1},children:r.num}),e.jsx("div",{style:{color:"var(--text-muted)",fontSize:"0.8rem",marginTop:"6px",fontWeight:600},children:r.label})]},s))})]})})]})}const Do=[{id:"student",label:"Student",sub:"Access results & records",icon:"fa-graduation-cap",color:"#3b82f6",glow:"rgba(59,130,246,0.6)",grad:"linear-gradient(135deg,#1e3a8a,#3b82f6)",lightGrad:"linear-gradient(135deg,#dbeafe,#eff6ff)",emoji:"🎓",idLabel:"Student ID",passLabel:"Date of Birth",idPlaceholder:"Enter Student ID",passPH:"••••••••"},{id:"staff",label:"Staff",sub:"Faculty portal & tools",icon:"fa-user-tie",color:"#10b981",glow:"rgba(16,185,129,0.6)",grad:"linear-gradient(135deg,#064e3b,#10b981)",lightGrad:"linear-gradient(135deg,#d1fae5,#ecfdf5)",emoji:"👨‍💼",idLabel:"Staff Username",passLabel:"Password",idPlaceholder:"Enter Staff Username",passPH:"••••••••"},{id:"admin",label:"Admin",sub:"System administration",icon:"fa-shield-halved",color:"#8b5cf6",glow:"rgba(139,92,246,0.6)",grad:"linear-gradient(135deg,#2e1065,#8b5cf6)",lightGrad:"linear-gradient(135deg,#ede9fe,#f5f3ff)",emoji:"🛡️",idLabel:"Admin Username",passLabel:"Password",idPlaceholder:"Enter Admin Username",passPH:"••••••••"},{id:"principal",label:"Principal",sub:"Institutional dashboard",icon:"fa-crown",color:"#f59e0b",glow:"rgba(245,158,11,0.6)",grad:"linear-gradient(135deg,#78350f,#f59e0b)",lightGrad:"linear-gradient(135deg,#fef3c7,#fffbeb)",emoji:"👑",idLabel:"Principal Username",passLabel:"Password",idPlaceholder:"Enter Principal Username",passPH:"••••••••"},{id:"admission",label:"Admission",sub:"Enrollment & applications",icon:"fa-file-circle-check",color:"#ec4899",glow:"rgba(236,72,153,0.6)",grad:"linear-gradient(135deg,#831843,#ec4899)",lightGrad:"linear-gradient(135deg,#fce7f3,#fdf2f8)",emoji:"📋",idLabel:"Admission Username",passLabel:"Password",idPlaceholder:"Enter Admission Username",passPH:"••••••••"}];function Qx({color:r}){return e.jsxs("div",{style:{position:"absolute",inset:0,overflow:"hidden",zIndex:0,pointerEvents:"none"},children:[e.jsx("div",{style:{position:"absolute",inset:0,background:"linear-gradient(160deg,#020817 0%,#0a0f1e 50%,#050b18 100%)"}}),e.jsx("div",{style:{position:"absolute",width:"70vw",height:"70vw",maxWidth:700,maxHeight:700,borderRadius:"50%",top:"-20%",left:"-10%",background:`radial-gradient(circle, ${r}22 0%, transparent 65%)`,filter:"blur(40px)",transition:"background 0.6s ease",animation:"auroraMove1 12s ease-in-out infinite"}}),e.jsx("div",{style:{position:"absolute",width:"60vw",height:"60vw",maxWidth:600,maxHeight:600,borderRadius:"50%",bottom:"-15%",right:"-10%",background:`radial-gradient(circle, ${r}18 0%, transparent 65%)`,filter:"blur(50px)",transition:"background 0.6s ease",animation:"auroraMove2 15s ease-in-out infinite"}}),e.jsx("div",{style:{position:"absolute",width:"40vw",height:"40vw",maxWidth:400,maxHeight:400,borderRadius:"50%",top:"30%",right:"20%",background:"radial-gradient(circle, rgba(0,212,255,0.08) 0%, transparent 65%)",filter:"blur(35px)",animation:"auroraMove3 18s ease-in-out infinite"}}),e.jsx("div",{style:{position:"absolute",inset:0,backgroundImage:"linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",backgroundSize:"40px 40px"}}),e.jsx("div",{style:{position:"absolute",inset:0,background:"radial-gradient(ellipse at center, transparent 40%, rgba(2,8,23,0.8) 100%)"}})]})}function Xx({role:r,isActive:s,onClick:o}){const[c,m]=v.useState(!1);return e.jsxs("button",{onClick:o,onMouseEnter:()=>m(!0),onMouseLeave:()=>m(!1),style:{flex:"1 1 0",minWidth:0,background:s?r.grad:c?"rgba(255,255,255,0.07)":"rgba(255,255,255,0.03)",border:s?`2px solid ${r.color}`:`2px solid ${c?"rgba(255,255,255,0.15)":"rgba(255,255,255,0.06)"}`,borderRadius:16,padding:"14px 8px 12px",cursor:"pointer",transition:"all 0.3s cubic-bezier(0.4,0,0.2,1)",display:"flex",flexDirection:"column",alignItems:"center",gap:6,transform:s?"translateY(-4px) scale(1.03)":c?"translateY(-2px)":"none",boxShadow:s?`0 12px 32px ${r.glow}`:c?"0 4px 16px rgba(0,0,0,0.3)":"none",position:"relative",overflow:"hidden"},children:[s&&e.jsx("div",{style:{position:"absolute",inset:0,borderRadius:14,background:"linear-gradient(135deg, rgba(255,255,255,0.12) 0%, transparent 60%)",pointerEvents:"none"}}),e.jsx("span",{style:{fontSize:"1.6rem",lineHeight:1},children:r.emoji}),e.jsx("span",{style:{fontFamily:"'Poppins',sans-serif",fontSize:"0.68rem",fontWeight:700,color:s?"#fff":"rgba(255,255,255,0.5)",textTransform:"uppercase",letterSpacing:"0.5px",transition:"color 0.3s"},children:r.label}),s&&e.jsx("div",{style:{position:"absolute",bottom:6,left:"50%",transform:"translateX(-50%)",width:20,height:3,borderRadius:2,background:"#fff"}})]})}function an(){const r=ca(),s=tr(),o=r.pathname.split("/").pop(),c=Do.find(J=>J.id===o)||Do[0],[m,p]=v.useState(c),[u,x]=v.useState(""),[h,b]=v.useState(""),[y,g]=v.useState(!1),[T,E]=v.useState(""),[F,R]=v.useState(!1),[z,P]=v.useState(!1),[I,U]=v.useState(!1),q=v.useRef(null);v.useEffect(()=>{setTimeout(()=>U(!0),80)},[]);const ie=J=>{p(J),E(""),x(""),b(""),s(`/login/${J.id}`,{replace:!0})},me=async J=>{if(J.preventDefault(),!u.trim()||!h.trim()){E("Both fields are required.");return}E(""),R(!0);try{const ye=new FormData;ye.append("id",u),ye.append("pass",h),ye.append("login_type",m.id);const Xe=await(await fetch("https://creativecollege.in/CTC%20NEW%20REACT%20WEBSITE/api_login.php",{method:"POST",body:ye,credentials:"include"})).json();Xe.status==="success"?(R(!1),P(!0),setTimeout(()=>{const Oe=document.createElement("a");Oe.href=Xe.redirect,Oe.target="_blank",Oe.rel="noopener noreferrer",document.body.appendChild(Oe),Oe.click(),document.body.removeChild(Oe),x(""),b(""),g(!1),E(""),P(!1),R(!1)},1500)):(R(!1),E(Xe.message||"Invalid credentials. Please try again."))}catch{R(!1),E("Network error. Please try again later.")}};return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
    @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&family=Space+Grotesk:wght@400;500;600;700&display=swap');

    @keyframes auroraMove1 {
      0%,100%{transform:translate(0,0) scale(1);}
      33%{transform:translate(40px,-30px) scale(1.08);}
      66%{transform:translate(-20px,40px) scale(0.95);}
    }
    @keyframes auroraMove2 {
      0%,100%{transform:translate(0,0) scale(1);}
      33%{transform:translate(-50px,30px) scale(1.1);}
      66%{transform:translate(30px,-40px) scale(0.92);}
    }
    @keyframes auroraMove3 {
      0%,100%{transform:translate(0,0);}
      50%{transform:translate(-30px,50px);}
    }
    @keyframes portalIn {
      from{opacity:0;transform:translateY(40px) scale(0.97);}
      to{opacity:1;transform:translateY(0) scale(1);}
    }
    @keyframes portalSpin { to{transform:rotate(360deg);} }
    @keyframes portalShimmer {
      0%{background-position:-200% center;}
      100%{background-position:200% center;}
    }
    @keyframes successPop {
      0%{transform:scale(0.8);opacity:0;}
      60%{transform:scale(1.15);}
      100%{transform:scale(1);opacity:1;}
    }
    @keyframes floatBadge {
      0%,100%{transform:translateY(0);}
      50%{transform:translateY(-6px);}
    }
    @keyframes glowPulse {
      0%,100%{opacity:0.6;}
      50%{opacity:1;}
    }

    .portal-page {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 32px 16px;
      position: relative;
      font-family: 'Plus Jakarta Sans', sans-serif;
    }

    .portal-main {
      width: 100%;
      max-width: 500px;
      position: relative;
      z-index: 2;
      opacity: 0;
      transform: translateY(40px) scale(0.97);
      transition: opacity 0.6s cubic-bezier(0.4,0,0.2,1), transform 0.6s cubic-bezier(0.4,0,0.2,1);
    }
    .portal-main.visible { opacity: 1; transform: translateY(0) scale(1); }

    /* Top logo area */
    .portal-logo-area {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 28px;
      gap: 12px;
    }
    .portal-logo-ring {
      width: 80px; height: 80px;
      border-radius: 50%;
      background: rgba(255,255,255,0.05);
      border: 2px solid rgba(255,255,255,0.1);
      display: flex; align-items: center; justify-content: center;
      position: relative;
      transition: border-color 0.4s, box-shadow 0.4s;
    }
    .portal-logo-ring img {
      width: 62px; height: 62px;
      border-radius: 50%; object-fit: contain;
    }
    .portal-logo-ring-glow {
      position: absolute; inset: -4px;
      border-radius: 50%;
      border: 2px solid transparent;
      animation: glowPulse 2s ease-in-out infinite;
      pointer-events: none;
      transition: border-color 0.4s;
    }
    .portal-wordmark {
      font-family: 'Plus Jakarta Sans', sans-serif;
      font-weight: 800; font-size: 1.15rem;
      color: #fff; letter-spacing: -0.3px; text-align: center;
    }
    .portal-wordmark span {
      background: linear-gradient(90deg, #60a5fa, #a78bfa, #f472b6);
      -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
    }
    .portal-tagline {
      font-size: 0.72rem; color: rgba(255,255,255,0.35); font-weight: 500; letter-spacing: 2px;
      text-transform: uppercase;
    }

    /* Card */
    .portal-card {
      background: rgba(255,255,255,0.04);
      border: 1px solid rgba(255,255,255,0.08);
      border-radius: 28px;
      padding: 32px;
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      box-shadow: 0 0 0 1px rgba(255,255,255,0.04), 0 32px 80px rgba(0,0,0,0.5);
      position: relative;
      overflow: hidden;
    }
    .portal-card::before {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0; height: 1px;
      background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
    }

    /* Role grid */
    .portal-role-grid {
      display: flex;
      gap: 8px;
      margin-bottom: 28px;
    }

    /* Divider */
    .portal-divider {
      display: flex; align-items: center; gap: 12px;
      margin-bottom: 24px;
    }
    .portal-divider-line {
      flex: 1; height: 1px;
      background: rgba(255,255,255,0.07);
    }
    .portal-divider-text {
      font-size: 0.7rem; font-weight: 600;
      color: rgba(255,255,255,0.25);
      letter-spacing: 1.5px; text-transform: uppercase;
      white-space: nowrap;
    }

    /* Heading */
    .portal-heading {
      font-family: 'Plus Jakarta Sans', sans-serif;
      font-size: 1.5rem; font-weight: 800;
      color: #fff; margin-bottom: 4px; letter-spacing: -0.5px;
    }
    .portal-subhead {
      font-size: 0.8rem; color: rgba(255,255,255,0.38);
      font-weight: 500; margin-bottom: 24px;
    }

    /* Error */
    .portal-error {
      background: rgba(239,68,68,0.1);
      border: 1px solid rgba(239,68,68,0.2);
      border-radius: 12px; padding: 10px 14px;
      display: flex; align-items: center; gap: 8px;
      font-size: 0.8rem; color: #fca5a5; margin-bottom: 16px;
    }

    /* Field */
    .portal-field { margin-bottom: 16px; }
    .portal-field-label {
      font-size: 0.72rem; font-weight: 700;
      color: rgba(255,255,255,0.4);
      text-transform: uppercase; letter-spacing: 1.2px;
      margin-bottom: 8px; display: flex; align-items: center; gap: 6px;
    }
    .portal-input-wrap {
      position: relative;
      border-radius: 14px;
      border: 1.5px solid rgba(255,255,255,0.1);
      background: rgba(255,255,255,0.05);
      display: flex; align-items: center;
      transition: border-color 0.25s, background 0.25s, box-shadow 0.25s;
      overflow: hidden;
    }
    .portal-input-wrap:focus-within {
      background: rgba(255,255,255,0.08);
    }
    .portal-input-icon {
      width: 46px; display: flex; align-items: center; justify-content: center;
      color: rgba(255,255,255,0.25); font-size: 0.88rem; flex-shrink: 0;
      transition: color 0.25s;
    }
    .portal-input-wrap:focus-within .portal-input-icon { color: rgba(255,255,255,0.6); }
    .portal-input-wrap input {
      flex: 1; border: none; background: transparent;
      padding: 14px 12px 14px 0;
      font-family: 'Plus Jakarta Sans', sans-serif;
      font-size: 0.9rem; color: #fff; outline: none;
    }
    .portal-input-wrap input::placeholder { color: rgba(255,255,255,0.18); }
    .portal-eye-btn {
      width: 44px; height: 44px;
      display: flex; align-items: center; justify-content: center;
      background: none; border: none;
      color: rgba(255,255,255,0.25); cursor: pointer;
      font-size: 0.82rem; transition: color 0.2s; flex-shrink: 0;
    }
    .portal-eye-btn:hover { color: rgba(255,255,255,0.7); }
    /* Focus ring strip */
    .portal-input-focus-bar {
      position: absolute; bottom: 0; left: 0; right: 0;
      height: 2px;
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 0.3s cubic-bezier(0.4,0,0.2,1);
      border-radius: 0 0 14px 14px;
    }
    .portal-input-wrap:focus-within .portal-input-focus-bar { transform: scaleX(1); }

    /* Submit */
    .portal-submit {
      width: 100%; margin-top: 8px;
      padding: 16px;
      border: none; border-radius: 14px;
      font-family: 'Plus Jakarta Sans', sans-serif;
      font-size: 0.95rem; font-weight: 800;
      color: #fff; cursor: pointer;
      display: flex; align-items: center; justify-content: center; gap: 10px;
      position: relative; overflow: hidden;
      transition: transform 0.2s, box-shadow 0.3s;
      letter-spacing: 0.2px;
    }
    .portal-submit:hover:not(:disabled) {
      transform: translateY(-2px);
    }
    .portal-submit:disabled { opacity: 0.65; cursor: not-allowed; }
    .portal-submit-shimmer {
      position: absolute; inset: 0;
      background: linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent);
      background-size: 200% 100%;
      animation: portalShimmer 2s linear infinite;
    }
    .portal-spinner {
      width: 18px; height: 18px;
      border: 2.5px solid rgba(255,255,255,0.3);
      border-top-color: #fff;
      border-radius: 50%;
      animation: portalSpin 0.65s linear infinite;
    }

    /* Success overlay */
    .portal-success-overlay {
      position: absolute; inset: 0;
      background: rgba(2,8,23,0.92);
      backdrop-filter: blur(10px);
      border-radius: 28px;
      display: flex; flex-direction: column; align-items: center; justify-content: center;
      gap: 12px; z-index: 10;
      animation: successPop 0.4s cubic-bezier(0.4,0,0.2,1) both;
    }
    .portal-success-icon {
      width: 64px; height: 64px; border-radius: 50%;
      background: linear-gradient(135deg,#10b981,#34d399);
      display: flex; align-items: center; justify-content: center;
      font-size: 1.6rem; color: #fff;
      box-shadow: 0 0 40px rgba(16,185,129,0.5);
    }

    /* Bottom trust strip */
    .portal-trust-strip {
      margin-top: 20px;
      display: flex; align-items: center; justify-content: center; gap: 6px;
      flex-wrap: wrap;
    }
    .portal-trust-badge {
      display: inline-flex; align-items: center; gap: 5px;
      background: rgba(255,255,255,0.05);
      border: 1px solid rgba(255,255,255,0.08);
      border-radius: 20px; padding: 5px 12px;
      font-size: 0.68rem; font-weight: 600;
      color: rgba(255,255,255,0.3);
      font-family: 'Plus Jakarta Sans', sans-serif;
    }
    .portal-trust-badge i { font-size: 0.6rem; }

    @media(max-width:480px){
      .portal-card { padding: 24px 20px; }
      .portal-role-grid { gap: 6px; }
      .portal-heading { font-size: 1.3rem; }
    }
  `}),e.jsxs("div",{className:"portal-page",children:[e.jsx(Qx,{color:m.color}),e.jsxs("div",{className:`portal-main${I?" visible":""}`,children:[e.jsxs("div",{className:"portal-logo-area",children:[e.jsxs("div",{className:"portal-logo-ring",style:{borderColor:`${m.color}40`,boxShadow:`0 0 32px ${m.glow}`},children:[e.jsx("div",{className:"portal-logo-ring-glow",style:{borderColor:m.color}}),e.jsx("img",{src:"https://creativecollege.in/Admission_Dashboard/images/CTC%20logo.png",alt:"CTC"})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"portal-wordmark",children:["Creative Techno ",e.jsx("span",{children:"College"})]}),e.jsx("div",{className:"portal-tagline",children:"Unified Portal · Angul, Odisha"})]})]}),e.jsxs("div",{className:"portal-card",children:[z&&e.jsxs("div",{className:"portal-success-overlay",children:[e.jsx("div",{className:"portal-success-icon",children:e.jsx("i",{className:"fa-solid fa-check"})}),e.jsx("span",{style:{fontFamily:"'Plus Jakarta Sans',sans-serif",fontWeight:700,color:"#fff",fontSize:"1rem"},children:"Login Successful!"}),e.jsx("span",{style:{fontSize:"0.78rem",color:"rgba(255,255,255,0.4)"},children:"Redirecting you…"})]}),e.jsx("div",{className:"portal-role-grid",children:Do.map(J=>e.jsx(Xx,{role:J,isActive:m.id===J.id,onClick:()=>ie(J)},J.id))}),e.jsxs("div",{className:"portal-divider",children:[e.jsx("div",{className:"portal-divider-line"}),e.jsxs("span",{className:"portal-divider-text",children:["Sign in as ",m.label]}),e.jsx("div",{className:"portal-divider-line"})]}),e.jsxs("h2",{className:"portal-heading",style:{color:m.color},children:[m.emoji," ",m.label," Login"]}),e.jsx("p",{className:"portal-subhead",children:m.sub}),T&&e.jsxs("div",{className:"portal-error",children:[e.jsx("i",{className:"fa-solid fa-circle-exclamation"}),T]}),e.jsxs("form",{ref:q,onSubmit:me,noValidate:!0,children:[e.jsxs("div",{className:"portal-field",children:[e.jsxs("label",{className:"portal-field-label",children:[e.jsx("i",{className:"fa-solid fa-id-badge",style:{color:m.color}}),m.idLabel]}),e.jsxs("div",{className:"portal-input-wrap",style:{"--ac":m.color},children:[e.jsx("span",{className:"portal-input-icon",children:e.jsx("i",{className:"fa-solid fa-user"})}),e.jsx("input",{type:"text",value:u,onChange:J=>x(J.target.value),placeholder:m.idPlaceholder,autoComplete:"username"}),e.jsx("div",{className:"portal-input-focus-bar",style:{background:m.color}})]})]}),e.jsxs("div",{className:"portal-field",children:[e.jsxs("label",{className:"portal-field-label",children:[e.jsx("i",{className:"fa-solid fa-lock",style:{color:m.color}}),m.passLabel]}),e.jsxs("div",{className:"portal-input-wrap",children:[e.jsx("span",{className:"portal-input-icon",children:e.jsx("i",{className:"fa-solid fa-key"})}),e.jsx("input",{type:y?"text":"password",value:h,onChange:J=>b(J.target.value),placeholder:m.passPH,autoComplete:"current-password"}),e.jsx("button",{type:"button",className:"portal-eye-btn",onClick:()=>g(J=>!J),children:e.jsx("i",{className:`fa-solid ${y?"fa-eye-slash":"fa-eye"}`})}),e.jsx("div",{className:"portal-input-focus-bar",style:{background:m.color}})]})]}),e.jsxs("button",{type:"submit",className:"portal-submit",disabled:F,style:{background:m.grad,boxShadow:`0 8px 32px ${m.glow}`},children:[!F&&e.jsx("div",{className:"portal-submit-shimmer"}),F?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"portal-spinner"})," Authenticating…"]}):e.jsxs(e.Fragment,{children:[e.jsx("i",{className:"fa-solid fa-right-to-bracket"})," Sign In to Portal"]})]})]})]})]})]})]})}const Et=({title:r})=>e.jsxs("div",{style:{textAlign:"center",padding:"80px 20px"},children:[e.jsx("h1",{style:{color:"#0c2340",fontSize:"2.5rem"},children:r}),e.jsx("p",{style:{color:"#666",marginTop:"20px",fontSize:"1.1rem"},children:"This page is coming soon."})]});function Zx(){return e.jsxs(sg,{basename:"/CTC%20NEW%20REACT%20WEBSITE",children:[e.jsx(dg,{}),e.jsx(Ag,{children:e.jsxs(Zh,{children:[e.jsx(ee,{path:"/",element:e.jsx(Wg,{})}),e.jsx(ee,{path:"/about/trust",element:e.jsx(_g,{})}),e.jsx(ee,{path:"/about/ctc",element:e.jsx(Yg,{})}),e.jsx(ee,{path:"/about/team",element:e.jsx(Kg,{})}),e.jsx(ee,{path:"/admission",element:e.jsx(i0,{})}),e.jsx(ee,{path:"/admission/apply",element:e.jsx(l0,{})}),e.jsx(ee,{path:"/academics/regular",element:e.jsx(h0,{})}),e.jsx(ee,{path:"/academics/value-added",element:e.jsx(y0,{})}),e.jsx(ee,{path:"/academics/enhancement",element:e.jsx(w0,{})}),e.jsx(ee,{path:"/placement",element:e.jsx(Ip,{})}),e.jsx(ee,{path:"/placement/programs",element:e.jsx(M0,{})}),e.jsx(ee,{path:"/placement/statistics",element:e.jsx(Ip,{})}),e.jsx(ee,{path:"/placement/brochure",element:e.jsx(O0,{})}),e.jsx(ee,{path:"/placement/mission40",element:e.jsx(Q0,{})}),e.jsx(ee,{path:"/gymkhana",element:e.jsx(ex,{})}),e.jsx(ee,{path:"/gymkhana/cultural",element:e.jsx(Rx,{})}),e.jsx(ee,{path:"/gymkhana/sports",element:e.jsx(Ax,{})}),e.jsx(ee,{path:"/gymkhana/technocrat",element:e.jsx(wx,{})}),e.jsx(ee,{path:"/gymkhana/disha-csr",element:e.jsx(Bx,{})}),e.jsx(ee,{path:"/gymkhana/techfest/1",element:e.jsx(Gp,{})}),e.jsx(ee,{path:"/gymkhana/techfest/2",element:e.jsx(Yp,{})}),e.jsx(ee,{path:"/gymkhana/techfest/3",element:e.jsx(Jp,{})}),e.jsx(ee,{path:"/gymkhana/techfest-1",element:e.jsx(Gp,{})}),e.jsx(ee,{path:"/gymkhana/techfest-2",element:e.jsx(Yp,{})}),e.jsx(ee,{path:"/gymkhana/techfest-3",element:e.jsx(Jp,{})}),e.jsx(ee,{path:"/gallery",element:e.jsx(ax,{})}),e.jsx(ee,{path:"/iqac",element:e.jsx(Et,{title:"IQAC"})}),e.jsx(ee,{path:"/iqac/item1",element:e.jsx(Et,{title:"IQAC — Item 1"})}),e.jsx(ee,{path:"/iqac/item2",element:e.jsx(Et,{title:"IQAC — Item 2"})}),e.jsx(ee,{path:"/iqac/item3",element:e.jsx(Et,{title:"IQAC — Item 3"})}),e.jsx(ee,{path:"/iqac/item4",element:e.jsx(Et,{title:"IQAC — Item 4"})}),e.jsx(ee,{path:"/aicte",element:e.jsx(Et,{title:"AICTE"})}),e.jsx(ee,{path:"/aicte/documents",element:e.jsx(Et,{title:"AICTE — Documents"})}),e.jsx(ee,{path:"/aicte/mandatory-disclosure",element:e.jsx(Et,{title:"AICTE — Mandatory Disclosure"})}),e.jsx(ee,{path:"/ckf-skills",element:e.jsx(Et,{title:"CKF Skills"})}),e.jsx(ee,{path:"/contacts",element:e.jsx(ox,{})}),e.jsx(ee,{path:"/icc",element:e.jsx(fx,{})}),e.jsx(ee,{path:"/grc",element:e.jsx(xx,{})}),e.jsx(ee,{path:"/naac",element:e.jsx(Hx,{})}),e.jsx(ee,{path:"/nba",element:e.jsx(Yx,{})}),e.jsx(ee,{path:"/vikshit-bharat",element:e.jsx(qx,{})}),e.jsx(ee,{path:"/login",element:e.jsx(an,{})}),e.jsx(ee,{path:"/login/student",element:e.jsx(an,{})}),e.jsx(ee,{path:"/login/staff",element:e.jsx(an,{})}),e.jsx(ee,{path:"/login/admin",element:e.jsx(an,{})}),e.jsx(ee,{path:"/login/principal",element:e.jsx(an,{})}),e.jsx(ee,{path:"/login/admission",element:e.jsx(an,{})}),e.jsx(ee,{path:"*",element:e.jsx(Et,{title:"Page Not Found"})})]})})]})}typeof window<"u"&&(window.history.scrollRestoration="manual");zf.createRoot(document.getElementById("root")).render(e.jsx(v.StrictMode,{children:e.jsx(am,{children:e.jsx(Zx,{})})}));
