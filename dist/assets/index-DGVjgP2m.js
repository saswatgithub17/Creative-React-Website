function wf(i,o){for(var l=0;l<o.length;l++){const d=o[l];if(typeof d!="string"&&!Array.isArray(d)){for(const m in d)if(m!=="default"&&!(m in i)){const f=Object.getOwnPropertyDescriptor(d,m);f&&Object.defineProperty(i,m,f.get?f:{enumerable:!0,get:()=>d[m]})}}}return Object.freeze(Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}))}(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const m of document.querySelectorAll('link[rel="modulepreload"]'))d(m);new MutationObserver(m=>{for(const f of m)if(f.type==="childList")for(const u of f.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&d(u)}).observe(document,{childList:!0,subtree:!0});function l(m){const f={};return m.integrity&&(f.integrity=m.integrity),m.referrerPolicy&&(f.referrerPolicy=m.referrerPolicy),m.crossOrigin==="use-credentials"?f.credentials="include":m.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function d(m){if(m.ep)return;m.ep=!0;const f=l(m);fetch(m.href,f)}})();function Sf(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Zs={exports:{}},Wn={},eo={exports:{}},ne={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gd;function Cf(){if(gd)return ne;gd=1;var i=Symbol.for("react.element"),o=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),d=Symbol.for("react.strict_mode"),m=Symbol.for("react.profiler"),f=Symbol.for("react.provider"),u=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),b=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),h=Symbol.iterator;function T(C){return C===null||typeof C!="object"?null:(C=h&&C[h]||C["@@iterator"],typeof C=="function"?C:null)}var P={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},K=Object.assign,W={};function L(C,I,te){this.props=C,this.context=I,this.refs=W,this.updater=te||P}L.prototype.isReactComponent={},L.prototype.setState=function(C,I){if(typeof C!="object"&&typeof C!="function"&&C!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,C,I,"setState")},L.prototype.forceUpdate=function(C){this.updater.enqueueForceUpdate(this,C,"forceUpdate")};function B(){}B.prototype=L.prototype;function A(C,I,te){this.props=C,this.context=I,this.refs=W,this.updater=te||P}var _=A.prototype=new B;_.constructor=A,K(_,L.prototype),_.isPureReactComponent=!0;var X=Array.isArray,ie=Object.prototype.hasOwnProperty,me={current:null},V={key:!0,ref:!0,__self:!0,__source:!0};function J(C,I,te){var re,oe={},le=null,fe=null;if(I!=null)for(re in I.ref!==void 0&&(fe=I.ref),I.key!==void 0&&(le=""+I.key),I)ie.call(I,re)&&!V.hasOwnProperty(re)&&(oe[re]=I[re]);var de=arguments.length-2;if(de===1)oe.children=te;else if(1<de){for(var xe=Array(de),Ze=0;Ze<de;Ze++)xe[Ze]=arguments[Ze+2];oe.children=xe}if(C&&C.defaultProps)for(re in de=C.defaultProps,de)oe[re]===void 0&&(oe[re]=de[re]);return{$$typeof:i,type:C,key:le,ref:fe,props:oe,_owner:me.current}}function ye(C,I){return{$$typeof:i,type:C.type,key:I,ref:C.ref,props:C.props,_owner:C._owner}}function ra(C){return typeof C=="object"&&C!==null&&C.$$typeof===i}function qe(C){var I={"=":"=0",":":"=2"};return"$"+C.replace(/[=:]/g,function(te){return I[te]})}var We=/\/+/g;function Xe(C,I){return typeof C=="object"&&C!==null&&C.key!=null?qe(""+C.key):I.toString(36)}function pa(C,I,te,re,oe){var le=typeof C;(le==="undefined"||le==="boolean")&&(C=null);var fe=!1;if(C===null)fe=!0;else switch(le){case"string":case"number":fe=!0;break;case"object":switch(C.$$typeof){case i:case o:fe=!0}}if(fe)return fe=C,oe=oe(fe),C=re===""?"."+Xe(fe,0):re,X(oe)?(te="",C!=null&&(te=C.replace(We,"$&/")+"/"),pa(oe,I,te,"",function(Ze){return Ze})):oe!=null&&(ra(oe)&&(oe=ye(oe,te+(!oe.key||fe&&fe.key===oe.key?"":(""+oe.key).replace(We,"$&/")+"/")+C)),I.push(oe)),1;if(fe=0,re=re===""?".":re+":",X(C))for(var de=0;de<C.length;de++){le=C[de];var xe=re+Xe(le,de);fe+=pa(le,I,te,xe,oe)}else if(xe=T(C),typeof xe=="function")for(C=xe.call(C),de=0;!(le=C.next()).done;)le=le.value,xe=re+Xe(le,de++),fe+=pa(le,I,te,xe,oe);else if(le==="object")throw I=String(C),Error("Objects are not valid as a React child (found: "+(I==="[object Object]"?"object with keys {"+Object.keys(C).join(", ")+"}":I)+"). If you meant to render a collection of children, use an array instead.");return fe}function ya(C,I,te){if(C==null)return C;var re=[],oe=0;return pa(C,re,"","",function(le){return I.call(te,le,oe++)}),re}function $e(C){if(C._status===-1){var I=C._result;I=I(),I.then(function(te){(C._status===0||C._status===-1)&&(C._status=1,C._result=te)},function(te){(C._status===0||C._status===-1)&&(C._status=2,C._result=te)}),C._status===-1&&(C._status=0,C._result=I)}if(C._status===1)return C._result.default;throw C._result}var we={current:null},D={transition:null},Z={ReactCurrentDispatcher:we,ReactCurrentBatchConfig:D,ReactCurrentOwner:me};function U(){throw Error("act(...) is not supported in production builds of React.")}return ne.Children={map:ya,forEach:function(C,I,te){ya(C,function(){I.apply(this,arguments)},te)},count:function(C){var I=0;return ya(C,function(){I++}),I},toArray:function(C){return ya(C,function(I){return I})||[]},only:function(C){if(!ra(C))throw Error("React.Children.only expected to receive a single React element child.");return C}},ne.Component=L,ne.Fragment=l,ne.Profiler=m,ne.PureComponent=A,ne.StrictMode=d,ne.Suspense=b,ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Z,ne.act=U,ne.cloneElement=function(C,I,te){if(C==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+C+".");var re=K({},C.props),oe=C.key,le=C.ref,fe=C._owner;if(I!=null){if(I.ref!==void 0&&(le=I.ref,fe=me.current),I.key!==void 0&&(oe=""+I.key),C.type&&C.type.defaultProps)var de=C.type.defaultProps;for(xe in I)ie.call(I,xe)&&!V.hasOwnProperty(xe)&&(re[xe]=I[xe]===void 0&&de!==void 0?de[xe]:I[xe])}var xe=arguments.length-2;if(xe===1)re.children=te;else if(1<xe){de=Array(xe);for(var Ze=0;Ze<xe;Ze++)de[Ze]=arguments[Ze+2];re.children=de}return{$$typeof:i,type:C.type,key:oe,ref:le,props:re,_owner:fe}},ne.createContext=function(C){return C={$$typeof:u,_currentValue:C,_currentValue2:C,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},C.Provider={$$typeof:f,_context:C},C.Consumer=C},ne.createElement=J,ne.createFactory=function(C){var I=J.bind(null,C);return I.type=C,I},ne.createRef=function(){return{current:null}},ne.forwardRef=function(C){return{$$typeof:w,render:C}},ne.isValidElement=ra,ne.lazy=function(C){return{$$typeof:x,_payload:{_status:-1,_result:C},_init:$e}},ne.memo=function(C,I){return{$$typeof:v,type:C,compare:I===void 0?null:I}},ne.startTransition=function(C){var I=D.transition;D.transition={};try{C()}finally{D.transition=I}},ne.unstable_act=U,ne.useCallback=function(C,I){return we.current.useCallback(C,I)},ne.useContext=function(C){return we.current.useContext(C)},ne.useDebugValue=function(){},ne.useDeferredValue=function(C){return we.current.useDeferredValue(C)},ne.useEffect=function(C,I){return we.current.useEffect(C,I)},ne.useId=function(){return we.current.useId()},ne.useImperativeHandle=function(C,I,te){return we.current.useImperativeHandle(C,I,te)},ne.useInsertionEffect=function(C,I){return we.current.useInsertionEffect(C,I)},ne.useLayoutEffect=function(C,I){return we.current.useLayoutEffect(C,I)},ne.useMemo=function(C,I){return we.current.useMemo(C,I)},ne.useReducer=function(C,I,te){return we.current.useReducer(C,I,te)},ne.useRef=function(C){return we.current.useRef(C)},ne.useState=function(C){return we.current.useState(C)},ne.useSyncExternalStore=function(C,I,te){return we.current.useSyncExternalStore(C,I,te)},ne.useTransition=function(){return we.current.useTransition()},ne.version="18.3.1",ne}var xd;function xo(){return xd||(xd=1,eo.exports=Cf()),eo.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bd;function kf(){if(bd)return Wn;bd=1;var i=xo(),o=Symbol.for("react.element"),l=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,m=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,f={key:!0,ref:!0,__self:!0,__source:!0};function u(w,b,v){var x,h={},T=null,P=null;v!==void 0&&(T=""+v),b.key!==void 0&&(T=""+b.key),b.ref!==void 0&&(P=b.ref);for(x in b)d.call(b,x)&&!f.hasOwnProperty(x)&&(h[x]=b[x]);if(w&&w.defaultProps)for(x in b=w.defaultProps,b)h[x]===void 0&&(h[x]=b[x]);return{$$typeof:o,type:w,key:T,ref:P,props:h,_owner:m.current}}return Wn.Fragment=l,Wn.jsx=u,Wn.jsxs=u,Wn}var yd;function Nf(){return yd||(yd=1,Zs.exports=kf()),Zs.exports}var e=Nf(),y=xo();const Ef=Sf(y),Tf=wf({__proto__:null,default:Ef},[y]);var Xr={},ao={exports:{}},Qe={},to={exports:{}},no={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vd;function Af(){return vd||(vd=1,(function(i){function o(D,Z){var U=D.length;D.push(Z);e:for(;0<U;){var C=U-1>>>1,I=D[C];if(0<m(I,Z))D[C]=Z,D[U]=I,U=C;else break e}}function l(D){return D.length===0?null:D[0]}function d(D){if(D.length===0)return null;var Z=D[0],U=D.pop();if(U!==Z){D[0]=U;e:for(var C=0,I=D.length,te=I>>>1;C<te;){var re=2*(C+1)-1,oe=D[re],le=re+1,fe=D[le];if(0>m(oe,U))le<I&&0>m(fe,oe)?(D[C]=fe,D[le]=U,C=le):(D[C]=oe,D[re]=U,C=re);else if(le<I&&0>m(fe,U))D[C]=fe,D[le]=U,C=le;else break e}}return Z}function m(D,Z){var U=D.sortIndex-Z.sortIndex;return U!==0?U:D.id-Z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var f=performance;i.unstable_now=function(){return f.now()}}else{var u=Date,w=u.now();i.unstable_now=function(){return u.now()-w}}var b=[],v=[],x=1,h=null,T=3,P=!1,K=!1,W=!1,L=typeof setTimeout=="function"?setTimeout:null,B=typeof clearTimeout=="function"?clearTimeout:null,A=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(D){for(var Z=l(v);Z!==null;){if(Z.callback===null)d(v);else if(Z.startTime<=D)d(v),Z.sortIndex=Z.expirationTime,o(b,Z);else break;Z=l(v)}}function X(D){if(W=!1,_(D),!K)if(l(b)!==null)K=!0,$e(ie);else{var Z=l(v);Z!==null&&we(X,Z.startTime-D)}}function ie(D,Z){K=!1,W&&(W=!1,B(J),J=-1),P=!0;var U=T;try{for(_(Z),h=l(b);h!==null&&(!(h.expirationTime>Z)||D&&!qe());){var C=h.callback;if(typeof C=="function"){h.callback=null,T=h.priorityLevel;var I=C(h.expirationTime<=Z);Z=i.unstable_now(),typeof I=="function"?h.callback=I:h===l(b)&&d(b),_(Z)}else d(b);h=l(b)}if(h!==null)var te=!0;else{var re=l(v);re!==null&&we(X,re.startTime-Z),te=!1}return te}finally{h=null,T=U,P=!1}}var me=!1,V=null,J=-1,ye=5,ra=-1;function qe(){return!(i.unstable_now()-ra<ye)}function We(){if(V!==null){var D=i.unstable_now();ra=D;var Z=!0;try{Z=V(!0,D)}finally{Z?Xe():(me=!1,V=null)}}else me=!1}var Xe;if(typeof A=="function")Xe=function(){A(We)};else if(typeof MessageChannel<"u"){var pa=new MessageChannel,ya=pa.port2;pa.port1.onmessage=We,Xe=function(){ya.postMessage(null)}}else Xe=function(){L(We,0)};function $e(D){V=D,me||(me=!0,Xe())}function we(D,Z){J=L(function(){D(i.unstable_now())},Z)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(D){D.callback=null},i.unstable_continueExecution=function(){K||P||(K=!0,$e(ie))},i.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ye=0<D?Math.floor(1e3/D):5},i.unstable_getCurrentPriorityLevel=function(){return T},i.unstable_getFirstCallbackNode=function(){return l(b)},i.unstable_next=function(D){switch(T){case 1:case 2:case 3:var Z=3;break;default:Z=T}var U=T;T=Z;try{return D()}finally{T=U}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(D,Z){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var U=T;T=D;try{return Z()}finally{T=U}},i.unstable_scheduleCallback=function(D,Z,U){var C=i.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?C+U:C):U=C,D){case 1:var I=-1;break;case 2:I=250;break;case 5:I=1073741823;break;case 4:I=1e4;break;default:I=5e3}return I=U+I,D={id:x++,callback:Z,priorityLevel:D,startTime:U,expirationTime:I,sortIndex:-1},U>C?(D.sortIndex=U,o(v,D),l(b)===null&&D===l(v)&&(W?(B(J),J=-1):W=!0,we(X,U-C))):(D.sortIndex=I,o(b,D),K||P||(K=!0,$e(ie))),D},i.unstable_shouldYield=qe,i.unstable_wrapCallback=function(D){var Z=T;return function(){var U=T;T=Z;try{return D.apply(this,arguments)}finally{T=U}}}})(no)),no}var jd;function Pf(){return jd||(jd=1,to.exports=Af()),to.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wd;function Rf(){if(wd)return Qe;wd=1;var i=xo(),o=Pf();function l(a){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+a,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+a+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var d=new Set,m={};function f(a,t){u(a,t),u(a+"Capture",t)}function u(a,t){for(m[a]=t,a=0;a<t.length;a++)d.add(t[a])}var w=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),b=Object.prototype.hasOwnProperty,v=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,x={},h={};function T(a){return b.call(h,a)?!0:b.call(x,a)?!1:v.test(a)?h[a]=!0:(x[a]=!0,!1)}function P(a,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(a=a.toLowerCase().slice(0,5),a!=="data-"&&a!=="aria-");default:return!1}}function K(a,t,n,r){if(t===null||typeof t>"u"||P(a,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function W(a,t,n,r,s,c,p){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=a,this.type=t,this.sanitizeURL=c,this.removeEmptyString=p}var L={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){L[a]=new W(a,0,!1,a,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var t=a[0];L[t]=new W(t,1,!1,a[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(a){L[a]=new W(a,2,!1,a.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){L[a]=new W(a,2,!1,a,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){L[a]=new W(a,3,!1,a.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(a){L[a]=new W(a,3,!0,a,null,!1,!1)}),["capture","download"].forEach(function(a){L[a]=new W(a,4,!1,a,null,!1,!1)}),["cols","rows","size","span"].forEach(function(a){L[a]=new W(a,6,!1,a,null,!1,!1)}),["rowSpan","start"].forEach(function(a){L[a]=new W(a,5,!1,a.toLowerCase(),null,!1,!1)});var B=/[\-:]([a-z])/g;function A(a){return a[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var t=a.replace(B,A);L[t]=new W(t,1,!1,a,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var t=a.replace(B,A);L[t]=new W(t,1,!1,a,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(a){var t=a.replace(B,A);L[t]=new W(t,1,!1,a,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(a){L[a]=new W(a,1,!1,a.toLowerCase(),null,!1,!1)}),L.xlinkHref=new W("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(a){L[a]=new W(a,1,!1,a.toLowerCase(),null,!0,!0)});function _(a,t,n,r){var s=L.hasOwnProperty(t)?L[t]:null;(s!==null?s.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(K(t,n,s,r)&&(n=null),r||s===null?T(t)&&(n===null?a.removeAttribute(t):a.setAttribute(t,""+n)):s.mustUseProperty?a[s.propertyName]=n===null?s.type===3?!1:"":n:(t=s.attributeName,r=s.attributeNamespace,n===null?a.removeAttribute(t):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?a.setAttributeNS(r,t,n):a.setAttribute(t,n))))}var X=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ie=Symbol.for("react.element"),me=Symbol.for("react.portal"),V=Symbol.for("react.fragment"),J=Symbol.for("react.strict_mode"),ye=Symbol.for("react.profiler"),ra=Symbol.for("react.provider"),qe=Symbol.for("react.context"),We=Symbol.for("react.forward_ref"),Xe=Symbol.for("react.suspense"),pa=Symbol.for("react.suspense_list"),ya=Symbol.for("react.memo"),$e=Symbol.for("react.lazy"),we=Symbol.for("react.offscreen"),D=Symbol.iterator;function Z(a){return a===null||typeof a!="object"?null:(a=D&&a[D]||a["@@iterator"],typeof a=="function"?a:null)}var U=Object.assign,C;function I(a){if(C===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);C=t&&t[1]||""}return`
`+C+a}var te=!1;function re(a,t){if(!a||te)return"";te=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(E){var r=E}Reflect.construct(a,[],t)}else{try{t.call()}catch(E){r=E}a.call(t.prototype)}else{try{throw Error()}catch(E){r=E}a()}}catch(E){if(E&&r&&typeof E.stack=="string"){for(var s=E.stack.split(`
`),c=r.stack.split(`
`),p=s.length-1,g=c.length-1;1<=p&&0<=g&&s[p]!==c[g];)g--;for(;1<=p&&0<=g;p--,g--)if(s[p]!==c[g]){if(p!==1||g!==1)do if(p--,g--,0>g||s[p]!==c[g]){var j=`
`+s[p].replace(" at new "," at ");return a.displayName&&j.includes("<anonymous>")&&(j=j.replace("<anonymous>",a.displayName)),j}while(1<=p&&0<=g);break}}}finally{te=!1,Error.prepareStackTrace=n}return(a=a?a.displayName||a.name:"")?I(a):""}function oe(a){switch(a.tag){case 5:return I(a.type);case 16:return I("Lazy");case 13:return I("Suspense");case 19:return I("SuspenseList");case 0:case 2:case 15:return a=re(a.type,!1),a;case 11:return a=re(a.type.render,!1),a;case 1:return a=re(a.type,!0),a;default:return""}}function le(a){if(a==null)return null;if(typeof a=="function")return a.displayName||a.name||null;if(typeof a=="string")return a;switch(a){case V:return"Fragment";case me:return"Portal";case ye:return"Profiler";case J:return"StrictMode";case Xe:return"Suspense";case pa:return"SuspenseList"}if(typeof a=="object")switch(a.$$typeof){case qe:return(a.displayName||"Context")+".Consumer";case ra:return(a._context.displayName||"Context")+".Provider";case We:var t=a.render;return a=a.displayName,a||(a=t.displayName||t.name||"",a=a!==""?"ForwardRef("+a+")":"ForwardRef"),a;case ya:return t=a.displayName||null,t!==null?t:le(a.type)||"Memo";case $e:t=a._payload,a=a._init;try{return le(a(t))}catch{}}return null}function fe(a){var t=a.type;switch(a.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return a=t.render,a=a.displayName||a.name||"",t.displayName||(a!==""?"ForwardRef("+a+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return le(t);case 8:return t===J?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function de(a){switch(typeof a){case"boolean":case"number":case"string":case"undefined":return a;case"object":return a;default:return""}}function xe(a){var t=a.type;return(a=a.nodeName)&&a.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ze(a){var t=xe(a)?"checked":"value",n=Object.getOwnPropertyDescriptor(a.constructor.prototype,t),r=""+a[t];if(!a.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,c=n.set;return Object.defineProperty(a,t,{configurable:!0,get:function(){return s.call(this)},set:function(p){r=""+p,c.call(this,p)}}),Object.defineProperty(a,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(p){r=""+p},stopTracking:function(){a._valueTracker=null,delete a[t]}}}}function _n(a){a._valueTracker||(a._valueTracker=Ze(a))}function wo(a){if(!a)return!1;var t=a._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return a&&(r=xe(a)?a.checked?"true":"false":a.value),a=r,a!==n?(t.setValue(a),!0):!1}function Un(a){if(a=a||(typeof document<"u"?document:void 0),typeof a>"u")return null;try{return a.activeElement||a.body}catch{return a.body}}function si(a,t){var n=t.checked;return U({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??a._wrapperState.initialChecked})}function So(a,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=de(t.value!=null?t.value:n),a._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Co(a,t){t=t.checked,t!=null&&_(a,"checked",t,!1)}function oi(a,t){Co(a,t);var n=de(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&a.value===""||a.value!=n)&&(a.value=""+n):a.value!==""+n&&(a.value=""+n);else if(r==="submit"||r==="reset"){a.removeAttribute("value");return}t.hasOwnProperty("value")?li(a,t.type,n):t.hasOwnProperty("defaultValue")&&li(a,t.type,de(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(a.defaultChecked=!!t.defaultChecked)}function ko(a,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+a._wrapperState.initialValue,n||t===a.value||(a.value=t),a.defaultValue=t}n=a.name,n!==""&&(a.name=""),a.defaultChecked=!!a._wrapperState.initialChecked,n!==""&&(a.name=n)}function li(a,t,n){(t!=="number"||Un(a.ownerDocument)!==a)&&(n==null?a.defaultValue=""+a._wrapperState.initialValue:a.defaultValue!==""+n&&(a.defaultValue=""+n))}var Kt=Array.isArray;function vt(a,t,n,r){if(a=a.options,t){t={};for(var s=0;s<n.length;s++)t["$"+n[s]]=!0;for(n=0;n<a.length;n++)s=t.hasOwnProperty("$"+a[n].value),a[n].selected!==s&&(a[n].selected=s),s&&r&&(a[n].defaultSelected=!0)}else{for(n=""+de(n),t=null,s=0;s<a.length;s++){if(a[s].value===n){a[s].selected=!0,r&&(a[s].defaultSelected=!0);return}t!==null||a[s].disabled||(t=a[s])}t!==null&&(t.selected=!0)}}function ci(a,t){if(t.dangerouslySetInnerHTML!=null)throw Error(l(91));return U({},t,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}function No(a,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(l(92));if(Kt(n)){if(1<n.length)throw Error(l(93));n=n[0]}t=n}t==null&&(t=""),n=t}a._wrapperState={initialValue:de(n)}}function Eo(a,t){var n=de(t.value),r=de(t.defaultValue);n!=null&&(n=""+n,n!==a.value&&(a.value=n),t.defaultValue==null&&a.defaultValue!==n&&(a.defaultValue=n)),r!=null&&(a.defaultValue=""+r)}function To(a){var t=a.textContent;t===a._wrapperState.initialValue&&t!==""&&t!==null&&(a.value=t)}function Ao(a){switch(a){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function di(a,t){return a==null||a==="http://www.w3.org/1999/xhtml"?Ao(t):a==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":a}var $n,Po=(function(a){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,s){MSApp.execUnsafeLocalFunction(function(){return a(t,n,r,s)})}:a})(function(a,t){if(a.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in a)a.innerHTML=t;else{for($n=$n||document.createElement("div"),$n.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=$n.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;t.firstChild;)a.appendChild(t.firstChild)}});function Qt(a,t){if(t){var n=a.firstChild;if(n&&n===a.lastChild&&n.nodeType===3){n.nodeValue=t;return}}a.textContent=t}var qt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},kp=["Webkit","ms","Moz","O"];Object.keys(qt).forEach(function(a){kp.forEach(function(t){t=t+a.charAt(0).toUpperCase()+a.substring(1),qt[t]=qt[a]})});function Ro(a,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||qt.hasOwnProperty(a)&&qt[a]?(""+t).trim():t+"px"}function Bo(a,t){a=a.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=Ro(n,t[n],r);n==="float"&&(n="cssFloat"),r?a.setProperty(n,s):a[n]=s}}var Np=U({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function pi(a,t){if(t){if(Np[a]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(l(137,a));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(l(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(l(61))}if(t.style!=null&&typeof t.style!="object")throw Error(l(62))}}function mi(a,t){if(a.indexOf("-")===-1)return typeof t.is=="string";switch(a){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var fi=null;function ui(a){return a=a.target||a.srcElement||window,a.correspondingUseElement&&(a=a.correspondingUseElement),a.nodeType===3?a.parentNode:a}var hi=null,jt=null,wt=null;function Io(a){if(a=vn(a)){if(typeof hi!="function")throw Error(l(280));var t=a.stateNode;t&&(t=fr(t),hi(a.stateNode,a.type,t))}}function zo(a){jt?wt?wt.push(a):wt=[a]:jt=a}function Wo(){if(jt){var a=jt,t=wt;if(wt=jt=null,Io(a),t)for(a=0;a<t.length;a++)Io(t[a])}}function Oo(a,t){return a(t)}function Mo(){}var gi=!1;function Lo(a,t,n){if(gi)return a(t,n);gi=!0;try{return Oo(a,t,n)}finally{gi=!1,(jt!==null||wt!==null)&&(Mo(),Wo())}}function Xt(a,t){var n=a.stateNode;if(n===null)return null;var r=fr(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(a=a.type,r=!(a==="button"||a==="input"||a==="select"||a==="textarea")),a=!r;break e;default:a=!1}if(a)return null;if(n&&typeof n!="function")throw Error(l(231,t,typeof n));return n}var xi=!1;if(w)try{var Zt={};Object.defineProperty(Zt,"passive",{get:function(){xi=!0}}),window.addEventListener("test",Zt,Zt),window.removeEventListener("test",Zt,Zt)}catch{xi=!1}function Ep(a,t,n,r,s,c,p,g,j){var E=Array.prototype.slice.call(arguments,3);try{t.apply(n,E)}catch(z){this.onError(z)}}var en=!1,Gn=null,Jn=!1,bi=null,Tp={onError:function(a){en=!0,Gn=a}};function Ap(a,t,n,r,s,c,p,g,j){en=!1,Gn=null,Ep.apply(Tp,arguments)}function Pp(a,t,n,r,s,c,p,g,j){if(Ap.apply(this,arguments),en){if(en){var E=Gn;en=!1,Gn=null}else throw Error(l(198));Jn||(Jn=!0,bi=E)}}function it(a){var t=a,n=a;if(a.alternate)for(;t.return;)t=t.return;else{a=t;do t=a,(t.flags&4098)!==0&&(n=t.return),a=t.return;while(a)}return t.tag===3?n:null}function Do(a){if(a.tag===13){var t=a.memoizedState;if(t===null&&(a=a.alternate,a!==null&&(t=a.memoizedState)),t!==null)return t.dehydrated}return null}function Fo(a){if(it(a)!==a)throw Error(l(188))}function Rp(a){var t=a.alternate;if(!t){if(t=it(a),t===null)throw Error(l(188));return t!==a?null:a}for(var n=a,r=t;;){var s=n.return;if(s===null)break;var c=s.alternate;if(c===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===c.child){for(c=s.child;c;){if(c===n)return Fo(s),a;if(c===r)return Fo(s),t;c=c.sibling}throw Error(l(188))}if(n.return!==r.return)n=s,r=c;else{for(var p=!1,g=s.child;g;){if(g===n){p=!0,n=s,r=c;break}if(g===r){p=!0,r=s,n=c;break}g=g.sibling}if(!p){for(g=c.child;g;){if(g===n){p=!0,n=c,r=s;break}if(g===r){p=!0,r=c,n=s;break}g=g.sibling}if(!p)throw Error(l(189))}}if(n.alternate!==r)throw Error(l(190))}if(n.tag!==3)throw Error(l(188));return n.stateNode.current===n?a:t}function Ho(a){return a=Rp(a),a!==null?_o(a):null}function _o(a){if(a.tag===5||a.tag===6)return a;for(a=a.child;a!==null;){var t=_o(a);if(t!==null)return t;a=a.sibling}return null}var Uo=o.unstable_scheduleCallback,$o=o.unstable_cancelCallback,Bp=o.unstable_shouldYield,Ip=o.unstable_requestPaint,Ce=o.unstable_now,zp=o.unstable_getCurrentPriorityLevel,yi=o.unstable_ImmediatePriority,Go=o.unstable_UserBlockingPriority,Yn=o.unstable_NormalPriority,Wp=o.unstable_LowPriority,Jo=o.unstable_IdlePriority,Vn=null,va=null;function Op(a){if(va&&typeof va.onCommitFiberRoot=="function")try{va.onCommitFiberRoot(Vn,a,void 0,(a.current.flags&128)===128)}catch{}}var ma=Math.clz32?Math.clz32:Dp,Mp=Math.log,Lp=Math.LN2;function Dp(a){return a>>>=0,a===0?32:31-(Mp(a)/Lp|0)|0}var Kn=64,Qn=4194304;function an(a){switch(a&-a){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return a&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return a}}function qn(a,t){var n=a.pendingLanes;if(n===0)return 0;var r=0,s=a.suspendedLanes,c=a.pingedLanes,p=n&268435455;if(p!==0){var g=p&~s;g!==0?r=an(g):(c&=p,c!==0&&(r=an(c)))}else p=n&~s,p!==0?r=an(p):c!==0&&(r=an(c));if(r===0)return 0;if(t!==0&&t!==r&&(t&s)===0&&(s=r&-r,c=t&-t,s>=c||s===16&&(c&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=a.entangledLanes,t!==0)for(a=a.entanglements,t&=r;0<t;)n=31-ma(t),s=1<<n,r|=a[n],t&=~s;return r}function Fp(a,t){switch(a){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Hp(a,t){for(var n=a.suspendedLanes,r=a.pingedLanes,s=a.expirationTimes,c=a.pendingLanes;0<c;){var p=31-ma(c),g=1<<p,j=s[p];j===-1?((g&n)===0||(g&r)!==0)&&(s[p]=Fp(g,t)):j<=t&&(a.expiredLanes|=g),c&=~g}}function vi(a){return a=a.pendingLanes&-1073741825,a!==0?a:a&1073741824?1073741824:0}function Yo(){var a=Kn;return Kn<<=1,(Kn&4194240)===0&&(Kn=64),a}function ji(a){for(var t=[],n=0;31>n;n++)t.push(a);return t}function tn(a,t,n){a.pendingLanes|=t,t!==536870912&&(a.suspendedLanes=0,a.pingedLanes=0),a=a.eventTimes,t=31-ma(t),a[t]=n}function _p(a,t){var n=a.pendingLanes&~t;a.pendingLanes=t,a.suspendedLanes=0,a.pingedLanes=0,a.expiredLanes&=t,a.mutableReadLanes&=t,a.entangledLanes&=t,t=a.entanglements;var r=a.eventTimes;for(a=a.expirationTimes;0<n;){var s=31-ma(n),c=1<<s;t[s]=0,r[s]=-1,a[s]=-1,n&=~c}}function wi(a,t){var n=a.entangledLanes|=t;for(a=a.entanglements;n;){var r=31-ma(n),s=1<<r;s&t|a[r]&t&&(a[r]|=t),n&=~s}}var pe=0;function Vo(a){return a&=-a,1<a?4<a?(a&268435455)!==0?16:536870912:4:1}var Ko,Si,Qo,qo,Xo,Ci=!1,Xn=[],Oa=null,Ma=null,La=null,nn=new Map,rn=new Map,Da=[],Up="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Zo(a,t){switch(a){case"focusin":case"focusout":Oa=null;break;case"dragenter":case"dragleave":Ma=null;break;case"mouseover":case"mouseout":La=null;break;case"pointerover":case"pointerout":nn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":rn.delete(t.pointerId)}}function sn(a,t,n,r,s,c){return a===null||a.nativeEvent!==c?(a={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:c,targetContainers:[s]},t!==null&&(t=vn(t),t!==null&&Si(t)),a):(a.eventSystemFlags|=r,t=a.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),a)}function $p(a,t,n,r,s){switch(t){case"focusin":return Oa=sn(Oa,a,t,n,r,s),!0;case"dragenter":return Ma=sn(Ma,a,t,n,r,s),!0;case"mouseover":return La=sn(La,a,t,n,r,s),!0;case"pointerover":var c=s.pointerId;return nn.set(c,sn(nn.get(c)||null,a,t,n,r,s)),!0;case"gotpointercapture":return c=s.pointerId,rn.set(c,sn(rn.get(c)||null,a,t,n,r,s)),!0}return!1}function el(a){var t=st(a.target);if(t!==null){var n=it(t);if(n!==null){if(t=n.tag,t===13){if(t=Do(n),t!==null){a.blockedOn=t,Xo(a.priority,function(){Qo(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){a.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}a.blockedOn=null}function Zn(a){if(a.blockedOn!==null)return!1;for(var t=a.targetContainers;0<t.length;){var n=Ni(a.domEventName,a.eventSystemFlags,t[0],a.nativeEvent);if(n===null){n=a.nativeEvent;var r=new n.constructor(n.type,n);fi=r,n.target.dispatchEvent(r),fi=null}else return t=vn(n),t!==null&&Si(t),a.blockedOn=n,!1;t.shift()}return!0}function al(a,t,n){Zn(a)&&n.delete(t)}function Gp(){Ci=!1,Oa!==null&&Zn(Oa)&&(Oa=null),Ma!==null&&Zn(Ma)&&(Ma=null),La!==null&&Zn(La)&&(La=null),nn.forEach(al),rn.forEach(al)}function on(a,t){a.blockedOn===t&&(a.blockedOn=null,Ci||(Ci=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Gp)))}function ln(a){function t(s){return on(s,a)}if(0<Xn.length){on(Xn[0],a);for(var n=1;n<Xn.length;n++){var r=Xn[n];r.blockedOn===a&&(r.blockedOn=null)}}for(Oa!==null&&on(Oa,a),Ma!==null&&on(Ma,a),La!==null&&on(La,a),nn.forEach(t),rn.forEach(t),n=0;n<Da.length;n++)r=Da[n],r.blockedOn===a&&(r.blockedOn=null);for(;0<Da.length&&(n=Da[0],n.blockedOn===null);)el(n),n.blockedOn===null&&Da.shift()}var St=X.ReactCurrentBatchConfig,er=!0;function Jp(a,t,n,r){var s=pe,c=St.transition;St.transition=null;try{pe=1,ki(a,t,n,r)}finally{pe=s,St.transition=c}}function Yp(a,t,n,r){var s=pe,c=St.transition;St.transition=null;try{pe=4,ki(a,t,n,r)}finally{pe=s,St.transition=c}}function ki(a,t,n,r){if(er){var s=Ni(a,t,n,r);if(s===null)Ui(a,t,r,ar,n),Zo(a,r);else if($p(s,a,t,n,r))r.stopPropagation();else if(Zo(a,r),t&4&&-1<Up.indexOf(a)){for(;s!==null;){var c=vn(s);if(c!==null&&Ko(c),c=Ni(a,t,n,r),c===null&&Ui(a,t,r,ar,n),c===s)break;s=c}s!==null&&r.stopPropagation()}else Ui(a,t,r,null,n)}}var ar=null;function Ni(a,t,n,r){if(ar=null,a=ui(r),a=st(a),a!==null)if(t=it(a),t===null)a=null;else if(n=t.tag,n===13){if(a=Do(t),a!==null)return a;a=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;a=null}else t!==a&&(a=null);return ar=a,null}function tl(a){switch(a){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(zp()){case yi:return 1;case Go:return 4;case Yn:case Wp:return 16;case Jo:return 536870912;default:return 16}default:return 16}}var Fa=null,Ei=null,tr=null;function nl(){if(tr)return tr;var a,t=Ei,n=t.length,r,s="value"in Fa?Fa.value:Fa.textContent,c=s.length;for(a=0;a<n&&t[a]===s[a];a++);var p=n-a;for(r=1;r<=p&&t[n-r]===s[c-r];r++);return tr=s.slice(a,1<r?1-r:void 0)}function nr(a){var t=a.keyCode;return"charCode"in a?(a=a.charCode,a===0&&t===13&&(a=13)):a=t,a===10&&(a=13),32<=a||a===13?a:0}function rr(){return!0}function rl(){return!1}function ea(a){function t(n,r,s,c,p){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=c,this.target=p,this.currentTarget=null;for(var g in a)a.hasOwnProperty(g)&&(n=a[g],this[g]=n?n(c):c[g]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?rr:rl,this.isPropagationStopped=rl,this}return U(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=rr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=rr)},persist:function(){},isPersistent:rr}),t}var Ct={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ti=ea(Ct),cn=U({},Ct,{view:0,detail:0}),Vp=ea(cn),Ai,Pi,dn,ir=U({},cn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Bi,button:0,buttons:0,relatedTarget:function(a){return a.relatedTarget===void 0?a.fromElement===a.srcElement?a.toElement:a.fromElement:a.relatedTarget},movementX:function(a){return"movementX"in a?a.movementX:(a!==dn&&(dn&&a.type==="mousemove"?(Ai=a.screenX-dn.screenX,Pi=a.screenY-dn.screenY):Pi=Ai=0,dn=a),Ai)},movementY:function(a){return"movementY"in a?a.movementY:Pi}}),il=ea(ir),Kp=U({},ir,{dataTransfer:0}),Qp=ea(Kp),qp=U({},cn,{relatedTarget:0}),Ri=ea(qp),Xp=U({},Ct,{animationName:0,elapsedTime:0,pseudoElement:0}),Zp=ea(Xp),em=U({},Ct,{clipboardData:function(a){return"clipboardData"in a?a.clipboardData:window.clipboardData}}),am=ea(em),tm=U({},Ct,{data:0}),sl=ea(tm),nm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},rm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},im={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function sm(a){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(a):(a=im[a])?!!t[a]:!1}function Bi(){return sm}var om=U({},cn,{key:function(a){if(a.key){var t=nm[a.key]||a.key;if(t!=="Unidentified")return t}return a.type==="keypress"?(a=nr(a),a===13?"Enter":String.fromCharCode(a)):a.type==="keydown"||a.type==="keyup"?rm[a.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Bi,charCode:function(a){return a.type==="keypress"?nr(a):0},keyCode:function(a){return a.type==="keydown"||a.type==="keyup"?a.keyCode:0},which:function(a){return a.type==="keypress"?nr(a):a.type==="keydown"||a.type==="keyup"?a.keyCode:0}}),lm=ea(om),cm=U({},ir,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ol=ea(cm),dm=U({},cn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Bi}),pm=ea(dm),mm=U({},Ct,{propertyName:0,elapsedTime:0,pseudoElement:0}),fm=ea(mm),um=U({},ir,{deltaX:function(a){return"deltaX"in a?a.deltaX:"wheelDeltaX"in a?-a.wheelDeltaX:0},deltaY:function(a){return"deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:0,deltaMode:0}),hm=ea(um),gm=[9,13,27,32],Ii=w&&"CompositionEvent"in window,pn=null;w&&"documentMode"in document&&(pn=document.documentMode);var xm=w&&"TextEvent"in window&&!pn,ll=w&&(!Ii||pn&&8<pn&&11>=pn),cl=" ",dl=!1;function pl(a,t){switch(a){case"keyup":return gm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ml(a){return a=a.detail,typeof a=="object"&&"data"in a?a.data:null}var kt=!1;function bm(a,t){switch(a){case"compositionend":return ml(t);case"keypress":return t.which!==32?null:(dl=!0,cl);case"textInput":return a=t.data,a===cl&&dl?null:a;default:return null}}function ym(a,t){if(kt)return a==="compositionend"||!Ii&&pl(a,t)?(a=nl(),tr=Ei=Fa=null,kt=!1,a):null;switch(a){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ll&&t.locale!=="ko"?null:t.data;default:return null}}var vm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function fl(a){var t=a&&a.nodeName&&a.nodeName.toLowerCase();return t==="input"?!!vm[a.type]:t==="textarea"}function ul(a,t,n,r){zo(r),t=dr(t,"onChange"),0<t.length&&(n=new Ti("onChange","change",null,n,r),a.push({event:n,listeners:t}))}var mn=null,fn=null;function jm(a){Bl(a,0)}function sr(a){var t=Pt(a);if(wo(t))return a}function wm(a,t){if(a==="change")return t}var hl=!1;if(w){var zi;if(w){var Wi="oninput"in document;if(!Wi){var gl=document.createElement("div");gl.setAttribute("oninput","return;"),Wi=typeof gl.oninput=="function"}zi=Wi}else zi=!1;hl=zi&&(!document.documentMode||9<document.documentMode)}function xl(){mn&&(mn.detachEvent("onpropertychange",bl),fn=mn=null)}function bl(a){if(a.propertyName==="value"&&sr(fn)){var t=[];ul(t,fn,a,ui(a)),Lo(jm,t)}}function Sm(a,t,n){a==="focusin"?(xl(),mn=t,fn=n,mn.attachEvent("onpropertychange",bl)):a==="focusout"&&xl()}function Cm(a){if(a==="selectionchange"||a==="keyup"||a==="keydown")return sr(fn)}function km(a,t){if(a==="click")return sr(t)}function Nm(a,t){if(a==="input"||a==="change")return sr(t)}function Em(a,t){return a===t&&(a!==0||1/a===1/t)||a!==a&&t!==t}var fa=typeof Object.is=="function"?Object.is:Em;function un(a,t){if(fa(a,t))return!0;if(typeof a!="object"||a===null||typeof t!="object"||t===null)return!1;var n=Object.keys(a),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!b.call(t,s)||!fa(a[s],t[s]))return!1}return!0}function yl(a){for(;a&&a.firstChild;)a=a.firstChild;return a}function vl(a,t){var n=yl(a);a=0;for(var r;n;){if(n.nodeType===3){if(r=a+n.textContent.length,a<=t&&r>=t)return{node:n,offset:t-a};a=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=yl(n)}}function jl(a,t){return a&&t?a===t?!0:a&&a.nodeType===3?!1:t&&t.nodeType===3?jl(a,t.parentNode):"contains"in a?a.contains(t):a.compareDocumentPosition?!!(a.compareDocumentPosition(t)&16):!1:!1}function wl(){for(var a=window,t=Un();t instanceof a.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)a=t.contentWindow;else break;t=Un(a.document)}return t}function Oi(a){var t=a&&a.nodeName&&a.nodeName.toLowerCase();return t&&(t==="input"&&(a.type==="text"||a.type==="search"||a.type==="tel"||a.type==="url"||a.type==="password")||t==="textarea"||a.contentEditable==="true")}function Tm(a){var t=wl(),n=a.focusedElem,r=a.selectionRange;if(t!==n&&n&&n.ownerDocument&&jl(n.ownerDocument.documentElement,n)){if(r!==null&&Oi(n)){if(t=r.start,a=r.end,a===void 0&&(a=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(a,n.value.length);else if(a=(t=n.ownerDocument||document)&&t.defaultView||window,a.getSelection){a=a.getSelection();var s=n.textContent.length,c=Math.min(r.start,s);r=r.end===void 0?c:Math.min(r.end,s),!a.extend&&c>r&&(s=r,r=c,c=s),s=vl(n,c);var p=vl(n,r);s&&p&&(a.rangeCount!==1||a.anchorNode!==s.node||a.anchorOffset!==s.offset||a.focusNode!==p.node||a.focusOffset!==p.offset)&&(t=t.createRange(),t.setStart(s.node,s.offset),a.removeAllRanges(),c>r?(a.addRange(t),a.extend(p.node,p.offset)):(t.setEnd(p.node,p.offset),a.addRange(t)))}}for(t=[],a=n;a=a.parentNode;)a.nodeType===1&&t.push({element:a,left:a.scrollLeft,top:a.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)a=t[n],a.element.scrollLeft=a.left,a.element.scrollTop=a.top}}var Am=w&&"documentMode"in document&&11>=document.documentMode,Nt=null,Mi=null,hn=null,Li=!1;function Sl(a,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Li||Nt==null||Nt!==Un(r)||(r=Nt,"selectionStart"in r&&Oi(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),hn&&un(hn,r)||(hn=r,r=dr(Mi,"onSelect"),0<r.length&&(t=new Ti("onSelect","select",null,t,n),a.push({event:t,listeners:r}),t.target=Nt)))}function or(a,t){var n={};return n[a.toLowerCase()]=t.toLowerCase(),n["Webkit"+a]="webkit"+t,n["Moz"+a]="moz"+t,n}var Et={animationend:or("Animation","AnimationEnd"),animationiteration:or("Animation","AnimationIteration"),animationstart:or("Animation","AnimationStart"),transitionend:or("Transition","TransitionEnd")},Di={},Cl={};w&&(Cl=document.createElement("div").style,"AnimationEvent"in window||(delete Et.animationend.animation,delete Et.animationiteration.animation,delete Et.animationstart.animation),"TransitionEvent"in window||delete Et.transitionend.transition);function lr(a){if(Di[a])return Di[a];if(!Et[a])return a;var t=Et[a],n;for(n in t)if(t.hasOwnProperty(n)&&n in Cl)return Di[a]=t[n];return a}var kl=lr("animationend"),Nl=lr("animationiteration"),El=lr("animationstart"),Tl=lr("transitionend"),Al=new Map,Pl="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ha(a,t){Al.set(a,t),f(t,[a])}for(var Fi=0;Fi<Pl.length;Fi++){var Hi=Pl[Fi],Pm=Hi.toLowerCase(),Rm=Hi[0].toUpperCase()+Hi.slice(1);Ha(Pm,"on"+Rm)}Ha(kl,"onAnimationEnd"),Ha(Nl,"onAnimationIteration"),Ha(El,"onAnimationStart"),Ha("dblclick","onDoubleClick"),Ha("focusin","onFocus"),Ha("focusout","onBlur"),Ha(Tl,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),f("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),f("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),f("onBeforeInput",["compositionend","keypress","textInput","paste"]),f("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),f("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),f("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var gn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Bm=new Set("cancel close invalid load scroll toggle".split(" ").concat(gn));function Rl(a,t,n){var r=a.type||"unknown-event";a.currentTarget=n,Pp(r,t,void 0,a),a.currentTarget=null}function Bl(a,t){t=(t&4)!==0;for(var n=0;n<a.length;n++){var r=a[n],s=r.event;r=r.listeners;e:{var c=void 0;if(t)for(var p=r.length-1;0<=p;p--){var g=r[p],j=g.instance,E=g.currentTarget;if(g=g.listener,j!==c&&s.isPropagationStopped())break e;Rl(s,g,E),c=j}else for(p=0;p<r.length;p++){if(g=r[p],j=g.instance,E=g.currentTarget,g=g.listener,j!==c&&s.isPropagationStopped())break e;Rl(s,g,E),c=j}}}if(Jn)throw a=bi,Jn=!1,bi=null,a}function he(a,t){var n=t[Ki];n===void 0&&(n=t[Ki]=new Set);var r=a+"__bubble";n.has(r)||(Il(t,a,2,!1),n.add(r))}function _i(a,t,n){var r=0;t&&(r|=4),Il(n,a,r,t)}var cr="_reactListening"+Math.random().toString(36).slice(2);function xn(a){if(!a[cr]){a[cr]=!0,d.forEach(function(n){n!=="selectionchange"&&(Bm.has(n)||_i(n,!1,a),_i(n,!0,a))});var t=a.nodeType===9?a:a.ownerDocument;t===null||t[cr]||(t[cr]=!0,_i("selectionchange",!1,t))}}function Il(a,t,n,r){switch(tl(t)){case 1:var s=Jp;break;case 4:s=Yp;break;default:s=ki}n=s.bind(null,t,n,a),s=void 0,!xi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),r?s!==void 0?a.addEventListener(t,n,{capture:!0,passive:s}):a.addEventListener(t,n,!0):s!==void 0?a.addEventListener(t,n,{passive:s}):a.addEventListener(t,n,!1)}function Ui(a,t,n,r,s){var c=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var p=r.tag;if(p===3||p===4){var g=r.stateNode.containerInfo;if(g===s||g.nodeType===8&&g.parentNode===s)break;if(p===4)for(p=r.return;p!==null;){var j=p.tag;if((j===3||j===4)&&(j=p.stateNode.containerInfo,j===s||j.nodeType===8&&j.parentNode===s))return;p=p.return}for(;g!==null;){if(p=st(g),p===null)return;if(j=p.tag,j===5||j===6){r=c=p;continue e}g=g.parentNode}}r=r.return}Lo(function(){var E=c,z=ui(n),O=[];e:{var R=Al.get(a);if(R!==void 0){var F=Ti,$=a;switch(a){case"keypress":if(nr(n)===0)break e;case"keydown":case"keyup":F=lm;break;case"focusin":$="focus",F=Ri;break;case"focusout":$="blur",F=Ri;break;case"beforeblur":case"afterblur":F=Ri;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":F=il;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":F=Qp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":F=pm;break;case kl:case Nl:case El:F=Zp;break;case Tl:F=fm;break;case"scroll":F=Vp;break;case"wheel":F=hm;break;case"copy":case"cut":case"paste":F=am;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":F=ol}var G=(t&4)!==0,ke=!G&&a==="scroll",k=G?R!==null?R+"Capture":null:R;G=[];for(var S=E,N;S!==null;){N=S;var M=N.stateNode;if(N.tag===5&&M!==null&&(N=M,k!==null&&(M=Xt(S,k),M!=null&&G.push(bn(S,M,N)))),ke)break;S=S.return}0<G.length&&(R=new F(R,$,null,n,z),O.push({event:R,listeners:G}))}}if((t&7)===0){e:{if(R=a==="mouseover"||a==="pointerover",F=a==="mouseout"||a==="pointerout",R&&n!==fi&&($=n.relatedTarget||n.fromElement)&&(st($)||$[Ea]))break e;if((F||R)&&(R=z.window===z?z:(R=z.ownerDocument)?R.defaultView||R.parentWindow:window,F?($=n.relatedTarget||n.toElement,F=E,$=$?st($):null,$!==null&&(ke=it($),$!==ke||$.tag!==5&&$.tag!==6)&&($=null)):(F=null,$=E),F!==$)){if(G=il,M="onMouseLeave",k="onMouseEnter",S="mouse",(a==="pointerout"||a==="pointerover")&&(G=ol,M="onPointerLeave",k="onPointerEnter",S="pointer"),ke=F==null?R:Pt(F),N=$==null?R:Pt($),R=new G(M,S+"leave",F,n,z),R.target=ke,R.relatedTarget=N,M=null,st(z)===E&&(G=new G(k,S+"enter",$,n,z),G.target=N,G.relatedTarget=ke,M=G),ke=M,F&&$)a:{for(G=F,k=$,S=0,N=G;N;N=Tt(N))S++;for(N=0,M=k;M;M=Tt(M))N++;for(;0<S-N;)G=Tt(G),S--;for(;0<N-S;)k=Tt(k),N--;for(;S--;){if(G===k||k!==null&&G===k.alternate)break a;G=Tt(G),k=Tt(k)}G=null}else G=null;F!==null&&zl(O,R,F,G,!1),$!==null&&ke!==null&&zl(O,ke,$,G,!0)}}e:{if(R=E?Pt(E):window,F=R.nodeName&&R.nodeName.toLowerCase(),F==="select"||F==="input"&&R.type==="file")var Y=wm;else if(fl(R))if(hl)Y=Nm;else{Y=Cm;var Q=Sm}else(F=R.nodeName)&&F.toLowerCase()==="input"&&(R.type==="checkbox"||R.type==="radio")&&(Y=km);if(Y&&(Y=Y(a,E))){ul(O,Y,n,z);break e}Q&&Q(a,R,E),a==="focusout"&&(Q=R._wrapperState)&&Q.controlled&&R.type==="number"&&li(R,"number",R.value)}switch(Q=E?Pt(E):window,a){case"focusin":(fl(Q)||Q.contentEditable==="true")&&(Nt=Q,Mi=E,hn=null);break;case"focusout":hn=Mi=Nt=null;break;case"mousedown":Li=!0;break;case"contextmenu":case"mouseup":case"dragend":Li=!1,Sl(O,n,z);break;case"selectionchange":if(Am)break;case"keydown":case"keyup":Sl(O,n,z)}var q;if(Ii)e:{switch(a){case"compositionstart":var ae="onCompositionStart";break e;case"compositionend":ae="onCompositionEnd";break e;case"compositionupdate":ae="onCompositionUpdate";break e}ae=void 0}else kt?pl(a,n)&&(ae="onCompositionEnd"):a==="keydown"&&n.keyCode===229&&(ae="onCompositionStart");ae&&(ll&&n.locale!=="ko"&&(kt||ae!=="onCompositionStart"?ae==="onCompositionEnd"&&kt&&(q=nl()):(Fa=z,Ei="value"in Fa?Fa.value:Fa.textContent,kt=!0)),Q=dr(E,ae),0<Q.length&&(ae=new sl(ae,a,null,n,z),O.push({event:ae,listeners:Q}),q?ae.data=q:(q=ml(n),q!==null&&(ae.data=q)))),(q=xm?bm(a,n):ym(a,n))&&(E=dr(E,"onBeforeInput"),0<E.length&&(z=new sl("onBeforeInput","beforeinput",null,n,z),O.push({event:z,listeners:E}),z.data=q))}Bl(O,t)})}function bn(a,t,n){return{instance:a,listener:t,currentTarget:n}}function dr(a,t){for(var n=t+"Capture",r=[];a!==null;){var s=a,c=s.stateNode;s.tag===5&&c!==null&&(s=c,c=Xt(a,n),c!=null&&r.unshift(bn(a,c,s)),c=Xt(a,t),c!=null&&r.push(bn(a,c,s))),a=a.return}return r}function Tt(a){if(a===null)return null;do a=a.return;while(a&&a.tag!==5);return a||null}function zl(a,t,n,r,s){for(var c=t._reactName,p=[];n!==null&&n!==r;){var g=n,j=g.alternate,E=g.stateNode;if(j!==null&&j===r)break;g.tag===5&&E!==null&&(g=E,s?(j=Xt(n,c),j!=null&&p.unshift(bn(n,j,g))):s||(j=Xt(n,c),j!=null&&p.push(bn(n,j,g)))),n=n.return}p.length!==0&&a.push({event:t,listeners:p})}var Im=/\r\n?/g,zm=/\u0000|\uFFFD/g;function Wl(a){return(typeof a=="string"?a:""+a).replace(Im,`
`).replace(zm,"")}function pr(a,t,n){if(t=Wl(t),Wl(a)!==t&&n)throw Error(l(425))}function mr(){}var $i=null,Gi=null;function Ji(a,t){return a==="textarea"||a==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Yi=typeof setTimeout=="function"?setTimeout:void 0,Wm=typeof clearTimeout=="function"?clearTimeout:void 0,Ol=typeof Promise=="function"?Promise:void 0,Om=typeof queueMicrotask=="function"?queueMicrotask:typeof Ol<"u"?function(a){return Ol.resolve(null).then(a).catch(Mm)}:Yi;function Mm(a){setTimeout(function(){throw a})}function Vi(a,t){var n=t,r=0;do{var s=n.nextSibling;if(a.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){a.removeChild(s),ln(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);ln(t)}function _a(a){for(;a!=null;a=a.nextSibling){var t=a.nodeType;if(t===1||t===3)break;if(t===8){if(t=a.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return a}function Ml(a){a=a.previousSibling;for(var t=0;a;){if(a.nodeType===8){var n=a.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return a;t--}else n==="/$"&&t++}a=a.previousSibling}return null}var At=Math.random().toString(36).slice(2),ja="__reactFiber$"+At,yn="__reactProps$"+At,Ea="__reactContainer$"+At,Ki="__reactEvents$"+At,Lm="__reactListeners$"+At,Dm="__reactHandles$"+At;function st(a){var t=a[ja];if(t)return t;for(var n=a.parentNode;n;){if(t=n[Ea]||n[ja]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(a=Ml(a);a!==null;){if(n=a[ja])return n;a=Ml(a)}return t}a=n,n=a.parentNode}return null}function vn(a){return a=a[ja]||a[Ea],!a||a.tag!==5&&a.tag!==6&&a.tag!==13&&a.tag!==3?null:a}function Pt(a){if(a.tag===5||a.tag===6)return a.stateNode;throw Error(l(33))}function fr(a){return a[yn]||null}var Qi=[],Rt=-1;function Ua(a){return{current:a}}function ge(a){0>Rt||(a.current=Qi[Rt],Qi[Rt]=null,Rt--)}function ue(a,t){Rt++,Qi[Rt]=a.current,a.current=t}var $a={},Le=Ua($a),Ge=Ua(!1),ot=$a;function Bt(a,t){var n=a.type.contextTypes;if(!n)return $a;var r=a.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var s={},c;for(c in n)s[c]=t[c];return r&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=t,a.__reactInternalMemoizedMaskedChildContext=s),s}function Je(a){return a=a.childContextTypes,a!=null}function ur(){ge(Ge),ge(Le)}function Ll(a,t,n){if(Le.current!==$a)throw Error(l(168));ue(Le,t),ue(Ge,n)}function Dl(a,t,n){var r=a.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in t))throw Error(l(108,fe(a)||"Unknown",s));return U({},n,r)}function hr(a){return a=(a=a.stateNode)&&a.__reactInternalMemoizedMergedChildContext||$a,ot=Le.current,ue(Le,a),ue(Ge,Ge.current),!0}function Fl(a,t,n){var r=a.stateNode;if(!r)throw Error(l(169));n?(a=Dl(a,t,ot),r.__reactInternalMemoizedMergedChildContext=a,ge(Ge),ge(Le),ue(Le,a)):ge(Ge),ue(Ge,n)}var Ta=null,gr=!1,qi=!1;function Hl(a){Ta===null?Ta=[a]:Ta.push(a)}function Fm(a){gr=!0,Hl(a)}function Ga(){if(!qi&&Ta!==null){qi=!0;var a=0,t=pe;try{var n=Ta;for(pe=1;a<n.length;a++){var r=n[a];do r=r(!0);while(r!==null)}Ta=null,gr=!1}catch(s){throw Ta!==null&&(Ta=Ta.slice(a+1)),Uo(yi,Ga),s}finally{pe=t,qi=!1}}return null}var It=[],zt=0,xr=null,br=0,ia=[],sa=0,lt=null,Aa=1,Pa="";function ct(a,t){It[zt++]=br,It[zt++]=xr,xr=a,br=t}function _l(a,t,n){ia[sa++]=Aa,ia[sa++]=Pa,ia[sa++]=lt,lt=a;var r=Aa;a=Pa;var s=32-ma(r)-1;r&=~(1<<s),n+=1;var c=32-ma(t)+s;if(30<c){var p=s-s%5;c=(r&(1<<p)-1).toString(32),r>>=p,s-=p,Aa=1<<32-ma(t)+s|n<<s|r,Pa=c+a}else Aa=1<<c|n<<s|r,Pa=a}function Xi(a){a.return!==null&&(ct(a,1),_l(a,1,0))}function Zi(a){for(;a===xr;)xr=It[--zt],It[zt]=null,br=It[--zt],It[zt]=null;for(;a===lt;)lt=ia[--sa],ia[sa]=null,Pa=ia[--sa],ia[sa]=null,Aa=ia[--sa],ia[sa]=null}var aa=null,ta=null,be=!1,ua=null;function Ul(a,t){var n=da(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=a,t=a.deletions,t===null?(a.deletions=[n],a.flags|=16):t.push(n)}function $l(a,t){switch(a.tag){case 5:var n=a.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(a.stateNode=t,aa=a,ta=_a(t.firstChild),!0):!1;case 6:return t=a.pendingProps===""||t.nodeType!==3?null:t,t!==null?(a.stateNode=t,aa=a,ta=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=lt!==null?{id:Aa,overflow:Pa}:null,a.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=da(18,null,null,0),n.stateNode=t,n.return=a,a.child=n,aa=a,ta=null,!0):!1;default:return!1}}function es(a){return(a.mode&1)!==0&&(a.flags&128)===0}function as(a){if(be){var t=ta;if(t){var n=t;if(!$l(a,t)){if(es(a))throw Error(l(418));t=_a(n.nextSibling);var r=aa;t&&$l(a,t)?Ul(r,n):(a.flags=a.flags&-4097|2,be=!1,aa=a)}}else{if(es(a))throw Error(l(418));a.flags=a.flags&-4097|2,be=!1,aa=a}}}function Gl(a){for(a=a.return;a!==null&&a.tag!==5&&a.tag!==3&&a.tag!==13;)a=a.return;aa=a}function yr(a){if(a!==aa)return!1;if(!be)return Gl(a),be=!0,!1;var t;if((t=a.tag!==3)&&!(t=a.tag!==5)&&(t=a.type,t=t!=="head"&&t!=="body"&&!Ji(a.type,a.memoizedProps)),t&&(t=ta)){if(es(a))throw Jl(),Error(l(418));for(;t;)Ul(a,t),t=_a(t.nextSibling)}if(Gl(a),a.tag===13){if(a=a.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(l(317));e:{for(a=a.nextSibling,t=0;a;){if(a.nodeType===8){var n=a.data;if(n==="/$"){if(t===0){ta=_a(a.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}a=a.nextSibling}ta=null}}else ta=aa?_a(a.stateNode.nextSibling):null;return!0}function Jl(){for(var a=ta;a;)a=_a(a.nextSibling)}function Wt(){ta=aa=null,be=!1}function ts(a){ua===null?ua=[a]:ua.push(a)}var Hm=X.ReactCurrentBatchConfig;function jn(a,t,n){if(a=n.ref,a!==null&&typeof a!="function"&&typeof a!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(l(309));var r=n.stateNode}if(!r)throw Error(l(147,a));var s=r,c=""+a;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===c?t.ref:(t=function(p){var g=s.refs;p===null?delete g[c]:g[c]=p},t._stringRef=c,t)}if(typeof a!="string")throw Error(l(284));if(!n._owner)throw Error(l(290,a))}return a}function vr(a,t){throw a=Object.prototype.toString.call(t),Error(l(31,a==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":a))}function Yl(a){var t=a._init;return t(a._payload)}function Vl(a){function t(k,S){if(a){var N=k.deletions;N===null?(k.deletions=[S],k.flags|=16):N.push(S)}}function n(k,S){if(!a)return null;for(;S!==null;)t(k,S),S=S.sibling;return null}function r(k,S){for(k=new Map;S!==null;)S.key!==null?k.set(S.key,S):k.set(S.index,S),S=S.sibling;return k}function s(k,S){return k=Za(k,S),k.index=0,k.sibling=null,k}function c(k,S,N){return k.index=N,a?(N=k.alternate,N!==null?(N=N.index,N<S?(k.flags|=2,S):N):(k.flags|=2,S)):(k.flags|=1048576,S)}function p(k){return a&&k.alternate===null&&(k.flags|=2),k}function g(k,S,N,M){return S===null||S.tag!==6?(S=Ys(N,k.mode,M),S.return=k,S):(S=s(S,N),S.return=k,S)}function j(k,S,N,M){var Y=N.type;return Y===V?z(k,S,N.props.children,M,N.key):S!==null&&(S.elementType===Y||typeof Y=="object"&&Y!==null&&Y.$$typeof===$e&&Yl(Y)===S.type)?(M=s(S,N.props),M.ref=jn(k,S,N),M.return=k,M):(M=$r(N.type,N.key,N.props,null,k.mode,M),M.ref=jn(k,S,N),M.return=k,M)}function E(k,S,N,M){return S===null||S.tag!==4||S.stateNode.containerInfo!==N.containerInfo||S.stateNode.implementation!==N.implementation?(S=Vs(N,k.mode,M),S.return=k,S):(S=s(S,N.children||[]),S.return=k,S)}function z(k,S,N,M,Y){return S===null||S.tag!==7?(S=xt(N,k.mode,M,Y),S.return=k,S):(S=s(S,N),S.return=k,S)}function O(k,S,N){if(typeof S=="string"&&S!==""||typeof S=="number")return S=Ys(""+S,k.mode,N),S.return=k,S;if(typeof S=="object"&&S!==null){switch(S.$$typeof){case ie:return N=$r(S.type,S.key,S.props,null,k.mode,N),N.ref=jn(k,null,S),N.return=k,N;case me:return S=Vs(S,k.mode,N),S.return=k,S;case $e:var M=S._init;return O(k,M(S._payload),N)}if(Kt(S)||Z(S))return S=xt(S,k.mode,N,null),S.return=k,S;vr(k,S)}return null}function R(k,S,N,M){var Y=S!==null?S.key:null;if(typeof N=="string"&&N!==""||typeof N=="number")return Y!==null?null:g(k,S,""+N,M);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case ie:return N.key===Y?j(k,S,N,M):null;case me:return N.key===Y?E(k,S,N,M):null;case $e:return Y=N._init,R(k,S,Y(N._payload),M)}if(Kt(N)||Z(N))return Y!==null?null:z(k,S,N,M,null);vr(k,N)}return null}function F(k,S,N,M,Y){if(typeof M=="string"&&M!==""||typeof M=="number")return k=k.get(N)||null,g(S,k,""+M,Y);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case ie:return k=k.get(M.key===null?N:M.key)||null,j(S,k,M,Y);case me:return k=k.get(M.key===null?N:M.key)||null,E(S,k,M,Y);case $e:var Q=M._init;return F(k,S,N,Q(M._payload),Y)}if(Kt(M)||Z(M))return k=k.get(N)||null,z(S,k,M,Y,null);vr(S,M)}return null}function $(k,S,N,M){for(var Y=null,Q=null,q=S,ae=S=0,ze=null;q!==null&&ae<N.length;ae++){q.index>ae?(ze=q,q=null):ze=q.sibling;var ce=R(k,q,N[ae],M);if(ce===null){q===null&&(q=ze);break}a&&q&&ce.alternate===null&&t(k,q),S=c(ce,S,ae),Q===null?Y=ce:Q.sibling=ce,Q=ce,q=ze}if(ae===N.length)return n(k,q),be&&ct(k,ae),Y;if(q===null){for(;ae<N.length;ae++)q=O(k,N[ae],M),q!==null&&(S=c(q,S,ae),Q===null?Y=q:Q.sibling=q,Q=q);return be&&ct(k,ae),Y}for(q=r(k,q);ae<N.length;ae++)ze=F(q,k,ae,N[ae],M),ze!==null&&(a&&ze.alternate!==null&&q.delete(ze.key===null?ae:ze.key),S=c(ze,S,ae),Q===null?Y=ze:Q.sibling=ze,Q=ze);return a&&q.forEach(function(et){return t(k,et)}),be&&ct(k,ae),Y}function G(k,S,N,M){var Y=Z(N);if(typeof Y!="function")throw Error(l(150));if(N=Y.call(N),N==null)throw Error(l(151));for(var Q=Y=null,q=S,ae=S=0,ze=null,ce=N.next();q!==null&&!ce.done;ae++,ce=N.next()){q.index>ae?(ze=q,q=null):ze=q.sibling;var et=R(k,q,ce.value,M);if(et===null){q===null&&(q=ze);break}a&&q&&et.alternate===null&&t(k,q),S=c(et,S,ae),Q===null?Y=et:Q.sibling=et,Q=et,q=ze}if(ce.done)return n(k,q),be&&ct(k,ae),Y;if(q===null){for(;!ce.done;ae++,ce=N.next())ce=O(k,ce.value,M),ce!==null&&(S=c(ce,S,ae),Q===null?Y=ce:Q.sibling=ce,Q=ce);return be&&ct(k,ae),Y}for(q=r(k,q);!ce.done;ae++,ce=N.next())ce=F(q,k,ae,ce.value,M),ce!==null&&(a&&ce.alternate!==null&&q.delete(ce.key===null?ae:ce.key),S=c(ce,S,ae),Q===null?Y=ce:Q.sibling=ce,Q=ce);return a&&q.forEach(function(jf){return t(k,jf)}),be&&ct(k,ae),Y}function ke(k,S,N,M){if(typeof N=="object"&&N!==null&&N.type===V&&N.key===null&&(N=N.props.children),typeof N=="object"&&N!==null){switch(N.$$typeof){case ie:e:{for(var Y=N.key,Q=S;Q!==null;){if(Q.key===Y){if(Y=N.type,Y===V){if(Q.tag===7){n(k,Q.sibling),S=s(Q,N.props.children),S.return=k,k=S;break e}}else if(Q.elementType===Y||typeof Y=="object"&&Y!==null&&Y.$$typeof===$e&&Yl(Y)===Q.type){n(k,Q.sibling),S=s(Q,N.props),S.ref=jn(k,Q,N),S.return=k,k=S;break e}n(k,Q);break}else t(k,Q);Q=Q.sibling}N.type===V?(S=xt(N.props.children,k.mode,M,N.key),S.return=k,k=S):(M=$r(N.type,N.key,N.props,null,k.mode,M),M.ref=jn(k,S,N),M.return=k,k=M)}return p(k);case me:e:{for(Q=N.key;S!==null;){if(S.key===Q)if(S.tag===4&&S.stateNode.containerInfo===N.containerInfo&&S.stateNode.implementation===N.implementation){n(k,S.sibling),S=s(S,N.children||[]),S.return=k,k=S;break e}else{n(k,S);break}else t(k,S);S=S.sibling}S=Vs(N,k.mode,M),S.return=k,k=S}return p(k);case $e:return Q=N._init,ke(k,S,Q(N._payload),M)}if(Kt(N))return $(k,S,N,M);if(Z(N))return G(k,S,N,M);vr(k,N)}return typeof N=="string"&&N!==""||typeof N=="number"?(N=""+N,S!==null&&S.tag===6?(n(k,S.sibling),S=s(S,N),S.return=k,k=S):(n(k,S),S=Ys(N,k.mode,M),S.return=k,k=S),p(k)):n(k,S)}return ke}var Ot=Vl(!0),Kl=Vl(!1),jr=Ua(null),wr=null,Mt=null,ns=null;function rs(){ns=Mt=wr=null}function is(a){var t=jr.current;ge(jr),a._currentValue=t}function ss(a,t,n){for(;a!==null;){var r=a.alternate;if((a.childLanes&t)!==t?(a.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),a===n)break;a=a.return}}function Lt(a,t){wr=a,ns=Mt=null,a=a.dependencies,a!==null&&a.firstContext!==null&&((a.lanes&t)!==0&&(Ye=!0),a.firstContext=null)}function oa(a){var t=a._currentValue;if(ns!==a)if(a={context:a,memoizedValue:t,next:null},Mt===null){if(wr===null)throw Error(l(308));Mt=a,wr.dependencies={lanes:0,firstContext:a}}else Mt=Mt.next=a;return t}var dt=null;function os(a){dt===null?dt=[a]:dt.push(a)}function Ql(a,t,n,r){var s=t.interleaved;return s===null?(n.next=n,os(t)):(n.next=s.next,s.next=n),t.interleaved=n,Ra(a,r)}function Ra(a,t){a.lanes|=t;var n=a.alternate;for(n!==null&&(n.lanes|=t),n=a,a=a.return;a!==null;)a.childLanes|=t,n=a.alternate,n!==null&&(n.childLanes|=t),n=a,a=a.return;return n.tag===3?n.stateNode:null}var Ja=!1;function ls(a){a.updateQueue={baseState:a.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ql(a,t){a=a.updateQueue,t.updateQueue===a&&(t.updateQueue={baseState:a.baseState,firstBaseUpdate:a.firstBaseUpdate,lastBaseUpdate:a.lastBaseUpdate,shared:a.shared,effects:a.effects})}function Ba(a,t){return{eventTime:a,lane:t,tag:0,payload:null,callback:null,next:null}}function Ya(a,t,n){var r=a.updateQueue;if(r===null)return null;if(r=r.shared,(se&2)!==0){var s=r.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),r.pending=t,Ra(a,n)}return s=r.interleaved,s===null?(t.next=t,os(r)):(t.next=s.next,s.next=t),r.interleaved=t,Ra(a,n)}function Sr(a,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=a.pendingLanes,n|=r,t.lanes=n,wi(a,n)}}function Xl(a,t){var n=a.updateQueue,r=a.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,c=null;if(n=n.firstBaseUpdate,n!==null){do{var p={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};c===null?s=c=p:c=c.next=p,n=n.next}while(n!==null);c===null?s=c=t:c=c.next=t}else s=c=t;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:c,shared:r.shared,effects:r.effects},a.updateQueue=n;return}a=n.lastBaseUpdate,a===null?n.firstBaseUpdate=t:a.next=t,n.lastBaseUpdate=t}function Cr(a,t,n,r){var s=a.updateQueue;Ja=!1;var c=s.firstBaseUpdate,p=s.lastBaseUpdate,g=s.shared.pending;if(g!==null){s.shared.pending=null;var j=g,E=j.next;j.next=null,p===null?c=E:p.next=E,p=j;var z=a.alternate;z!==null&&(z=z.updateQueue,g=z.lastBaseUpdate,g!==p&&(g===null?z.firstBaseUpdate=E:g.next=E,z.lastBaseUpdate=j))}if(c!==null){var O=s.baseState;p=0,z=E=j=null,g=c;do{var R=g.lane,F=g.eventTime;if((r&R)===R){z!==null&&(z=z.next={eventTime:F,lane:0,tag:g.tag,payload:g.payload,callback:g.callback,next:null});e:{var $=a,G=g;switch(R=t,F=n,G.tag){case 1:if($=G.payload,typeof $=="function"){O=$.call(F,O,R);break e}O=$;break e;case 3:$.flags=$.flags&-65537|128;case 0:if($=G.payload,R=typeof $=="function"?$.call(F,O,R):$,R==null)break e;O=U({},O,R);break e;case 2:Ja=!0}}g.callback!==null&&g.lane!==0&&(a.flags|=64,R=s.effects,R===null?s.effects=[g]:R.push(g))}else F={eventTime:F,lane:R,tag:g.tag,payload:g.payload,callback:g.callback,next:null},z===null?(E=z=F,j=O):z=z.next=F,p|=R;if(g=g.next,g===null){if(g=s.shared.pending,g===null)break;R=g,g=R.next,R.next=null,s.lastBaseUpdate=R,s.shared.pending=null}}while(!0);if(z===null&&(j=O),s.baseState=j,s.firstBaseUpdate=E,s.lastBaseUpdate=z,t=s.shared.interleaved,t!==null){s=t;do p|=s.lane,s=s.next;while(s!==t)}else c===null&&(s.shared.lanes=0);ft|=p,a.lanes=p,a.memoizedState=O}}function Zl(a,t,n){if(a=t.effects,t.effects=null,a!==null)for(t=0;t<a.length;t++){var r=a[t],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(l(191,s));s.call(r)}}}var wn={},wa=Ua(wn),Sn=Ua(wn),Cn=Ua(wn);function pt(a){if(a===wn)throw Error(l(174));return a}function cs(a,t){switch(ue(Cn,t),ue(Sn,a),ue(wa,wn),a=t.nodeType,a){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:di(null,"");break;default:a=a===8?t.parentNode:t,t=a.namespaceURI||null,a=a.tagName,t=di(t,a)}ge(wa),ue(wa,t)}function Dt(){ge(wa),ge(Sn),ge(Cn)}function ec(a){pt(Cn.current);var t=pt(wa.current),n=di(t,a.type);t!==n&&(ue(Sn,a),ue(wa,n))}function ds(a){Sn.current===a&&(ge(wa),ge(Sn))}var ve=Ua(0);function kr(a){for(var t=a;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===a)break;for(;t.sibling===null;){if(t.return===null||t.return===a)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ps=[];function ms(){for(var a=0;a<ps.length;a++)ps[a]._workInProgressVersionPrimary=null;ps.length=0}var Nr=X.ReactCurrentDispatcher,fs=X.ReactCurrentBatchConfig,mt=0,je=null,Ae=null,Be=null,Er=!1,kn=!1,Nn=0,_m=0;function De(){throw Error(l(321))}function us(a,t){if(t===null)return!1;for(var n=0;n<t.length&&n<a.length;n++)if(!fa(a[n],t[n]))return!1;return!0}function hs(a,t,n,r,s,c){if(mt=c,je=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Nr.current=a===null||a.memoizedState===null?Jm:Ym,a=n(r,s),kn){c=0;do{if(kn=!1,Nn=0,25<=c)throw Error(l(301));c+=1,Be=Ae=null,t.updateQueue=null,Nr.current=Vm,a=n(r,s)}while(kn)}if(Nr.current=Pr,t=Ae!==null&&Ae.next!==null,mt=0,Be=Ae=je=null,Er=!1,t)throw Error(l(300));return a}function gs(){var a=Nn!==0;return Nn=0,a}function Sa(){var a={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Be===null?je.memoizedState=Be=a:Be=Be.next=a,Be}function la(){if(Ae===null){var a=je.alternate;a=a!==null?a.memoizedState:null}else a=Ae.next;var t=Be===null?je.memoizedState:Be.next;if(t!==null)Be=t,Ae=a;else{if(a===null)throw Error(l(310));Ae=a,a={memoizedState:Ae.memoizedState,baseState:Ae.baseState,baseQueue:Ae.baseQueue,queue:Ae.queue,next:null},Be===null?je.memoizedState=Be=a:Be=Be.next=a}return Be}function En(a,t){return typeof t=="function"?t(a):t}function xs(a){var t=la(),n=t.queue;if(n===null)throw Error(l(311));n.lastRenderedReducer=a;var r=Ae,s=r.baseQueue,c=n.pending;if(c!==null){if(s!==null){var p=s.next;s.next=c.next,c.next=p}r.baseQueue=s=c,n.pending=null}if(s!==null){c=s.next,r=r.baseState;var g=p=null,j=null,E=c;do{var z=E.lane;if((mt&z)===z)j!==null&&(j=j.next={lane:0,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null}),r=E.hasEagerState?E.eagerState:a(r,E.action);else{var O={lane:z,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null};j===null?(g=j=O,p=r):j=j.next=O,je.lanes|=z,ft|=z}E=E.next}while(E!==null&&E!==c);j===null?p=r:j.next=g,fa(r,t.memoizedState)||(Ye=!0),t.memoizedState=r,t.baseState=p,t.baseQueue=j,n.lastRenderedState=r}if(a=n.interleaved,a!==null){s=a;do c=s.lane,je.lanes|=c,ft|=c,s=s.next;while(s!==a)}else s===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function bs(a){var t=la(),n=t.queue;if(n===null)throw Error(l(311));n.lastRenderedReducer=a;var r=n.dispatch,s=n.pending,c=t.memoizedState;if(s!==null){n.pending=null;var p=s=s.next;do c=a(c,p.action),p=p.next;while(p!==s);fa(c,t.memoizedState)||(Ye=!0),t.memoizedState=c,t.baseQueue===null&&(t.baseState=c),n.lastRenderedState=c}return[c,r]}function ac(){}function tc(a,t){var n=je,r=la(),s=t(),c=!fa(r.memoizedState,s);if(c&&(r.memoizedState=s,Ye=!0),r=r.queue,ys(ic.bind(null,n,r,a),[a]),r.getSnapshot!==t||c||Be!==null&&Be.memoizedState.tag&1){if(n.flags|=2048,Tn(9,rc.bind(null,n,r,s,t),void 0,null),Ie===null)throw Error(l(349));(mt&30)!==0||nc(n,t,s)}return s}function nc(a,t,n){a.flags|=16384,a={getSnapshot:t,value:n},t=je.updateQueue,t===null?(t={lastEffect:null,stores:null},je.updateQueue=t,t.stores=[a]):(n=t.stores,n===null?t.stores=[a]:n.push(a))}function rc(a,t,n,r){t.value=n,t.getSnapshot=r,sc(t)&&oc(a)}function ic(a,t,n){return n(function(){sc(t)&&oc(a)})}function sc(a){var t=a.getSnapshot;a=a.value;try{var n=t();return!fa(a,n)}catch{return!0}}function oc(a){var t=Ra(a,1);t!==null&&ba(t,a,1,-1)}function lc(a){var t=Sa();return typeof a=="function"&&(a=a()),t.memoizedState=t.baseState=a,a={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:En,lastRenderedState:a},t.queue=a,a=a.dispatch=Gm.bind(null,je,a),[t.memoizedState,a]}function Tn(a,t,n,r){return a={tag:a,create:t,destroy:n,deps:r,next:null},t=je.updateQueue,t===null?(t={lastEffect:null,stores:null},je.updateQueue=t,t.lastEffect=a.next=a):(n=t.lastEffect,n===null?t.lastEffect=a.next=a:(r=n.next,n.next=a,a.next=r,t.lastEffect=a)),a}function cc(){return la().memoizedState}function Tr(a,t,n,r){var s=Sa();je.flags|=a,s.memoizedState=Tn(1|t,n,void 0,r===void 0?null:r)}function Ar(a,t,n,r){var s=la();r=r===void 0?null:r;var c=void 0;if(Ae!==null){var p=Ae.memoizedState;if(c=p.destroy,r!==null&&us(r,p.deps)){s.memoizedState=Tn(t,n,c,r);return}}je.flags|=a,s.memoizedState=Tn(1|t,n,c,r)}function dc(a,t){return Tr(8390656,8,a,t)}function ys(a,t){return Ar(2048,8,a,t)}function pc(a,t){return Ar(4,2,a,t)}function mc(a,t){return Ar(4,4,a,t)}function fc(a,t){if(typeof t=="function")return a=a(),t(a),function(){t(null)};if(t!=null)return a=a(),t.current=a,function(){t.current=null}}function uc(a,t,n){return n=n!=null?n.concat([a]):null,Ar(4,4,fc.bind(null,t,a),n)}function vs(){}function hc(a,t){var n=la();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&us(t,r[1])?r[0]:(n.memoizedState=[a,t],a)}function gc(a,t){var n=la();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&us(t,r[1])?r[0]:(a=a(),n.memoizedState=[a,t],a)}function xc(a,t,n){return(mt&21)===0?(a.baseState&&(a.baseState=!1,Ye=!0),a.memoizedState=n):(fa(n,t)||(n=Yo(),je.lanes|=n,ft|=n,a.baseState=!0),t)}function Um(a,t){var n=pe;pe=n!==0&&4>n?n:4,a(!0);var r=fs.transition;fs.transition={};try{a(!1),t()}finally{pe=n,fs.transition=r}}function bc(){return la().memoizedState}function $m(a,t,n){var r=qa(a);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},yc(a))vc(t,n);else if(n=Ql(a,t,n,r),n!==null){var s=Ue();ba(n,a,r,s),jc(n,t,r)}}function Gm(a,t,n){var r=qa(a),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(yc(a))vc(t,s);else{var c=a.alternate;if(a.lanes===0&&(c===null||c.lanes===0)&&(c=t.lastRenderedReducer,c!==null))try{var p=t.lastRenderedState,g=c(p,n);if(s.hasEagerState=!0,s.eagerState=g,fa(g,p)){var j=t.interleaved;j===null?(s.next=s,os(t)):(s.next=j.next,j.next=s),t.interleaved=s;return}}catch{}finally{}n=Ql(a,t,s,r),n!==null&&(s=Ue(),ba(n,a,r,s),jc(n,t,r))}}function yc(a){var t=a.alternate;return a===je||t!==null&&t===je}function vc(a,t){kn=Er=!0;var n=a.pending;n===null?t.next=t:(t.next=n.next,n.next=t),a.pending=t}function jc(a,t,n){if((n&4194240)!==0){var r=t.lanes;r&=a.pendingLanes,n|=r,t.lanes=n,wi(a,n)}}var Pr={readContext:oa,useCallback:De,useContext:De,useEffect:De,useImperativeHandle:De,useInsertionEffect:De,useLayoutEffect:De,useMemo:De,useReducer:De,useRef:De,useState:De,useDebugValue:De,useDeferredValue:De,useTransition:De,useMutableSource:De,useSyncExternalStore:De,useId:De,unstable_isNewReconciler:!1},Jm={readContext:oa,useCallback:function(a,t){return Sa().memoizedState=[a,t===void 0?null:t],a},useContext:oa,useEffect:dc,useImperativeHandle:function(a,t,n){return n=n!=null?n.concat([a]):null,Tr(4194308,4,fc.bind(null,t,a),n)},useLayoutEffect:function(a,t){return Tr(4194308,4,a,t)},useInsertionEffect:function(a,t){return Tr(4,2,a,t)},useMemo:function(a,t){var n=Sa();return t=t===void 0?null:t,a=a(),n.memoizedState=[a,t],a},useReducer:function(a,t,n){var r=Sa();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,a={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:a,lastRenderedState:t},r.queue=a,a=a.dispatch=$m.bind(null,je,a),[r.memoizedState,a]},useRef:function(a){var t=Sa();return a={current:a},t.memoizedState=a},useState:lc,useDebugValue:vs,useDeferredValue:function(a){return Sa().memoizedState=a},useTransition:function(){var a=lc(!1),t=a[0];return a=Um.bind(null,a[1]),Sa().memoizedState=a,[t,a]},useMutableSource:function(){},useSyncExternalStore:function(a,t,n){var r=je,s=Sa();if(be){if(n===void 0)throw Error(l(407));n=n()}else{if(n=t(),Ie===null)throw Error(l(349));(mt&30)!==0||nc(r,t,n)}s.memoizedState=n;var c={value:n,getSnapshot:t};return s.queue=c,dc(ic.bind(null,r,c,a),[a]),r.flags|=2048,Tn(9,rc.bind(null,r,c,n,t),void 0,null),n},useId:function(){var a=Sa(),t=Ie.identifierPrefix;if(be){var n=Pa,r=Aa;n=(r&~(1<<32-ma(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Nn++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=_m++,t=":"+t+"r"+n.toString(32)+":";return a.memoizedState=t},unstable_isNewReconciler:!1},Ym={readContext:oa,useCallback:hc,useContext:oa,useEffect:ys,useImperativeHandle:uc,useInsertionEffect:pc,useLayoutEffect:mc,useMemo:gc,useReducer:xs,useRef:cc,useState:function(){return xs(En)},useDebugValue:vs,useDeferredValue:function(a){var t=la();return xc(t,Ae.memoizedState,a)},useTransition:function(){var a=xs(En)[0],t=la().memoizedState;return[a,t]},useMutableSource:ac,useSyncExternalStore:tc,useId:bc,unstable_isNewReconciler:!1},Vm={readContext:oa,useCallback:hc,useContext:oa,useEffect:ys,useImperativeHandle:uc,useInsertionEffect:pc,useLayoutEffect:mc,useMemo:gc,useReducer:bs,useRef:cc,useState:function(){return bs(En)},useDebugValue:vs,useDeferredValue:function(a){var t=la();return Ae===null?t.memoizedState=a:xc(t,Ae.memoizedState,a)},useTransition:function(){var a=bs(En)[0],t=la().memoizedState;return[a,t]},useMutableSource:ac,useSyncExternalStore:tc,useId:bc,unstable_isNewReconciler:!1};function ha(a,t){if(a&&a.defaultProps){t=U({},t),a=a.defaultProps;for(var n in a)t[n]===void 0&&(t[n]=a[n]);return t}return t}function js(a,t,n,r){t=a.memoizedState,n=n(r,t),n=n==null?t:U({},t,n),a.memoizedState=n,a.lanes===0&&(a.updateQueue.baseState=n)}var Rr={isMounted:function(a){return(a=a._reactInternals)?it(a)===a:!1},enqueueSetState:function(a,t,n){a=a._reactInternals;var r=Ue(),s=qa(a),c=Ba(r,s);c.payload=t,n!=null&&(c.callback=n),t=Ya(a,c,s),t!==null&&(ba(t,a,s,r),Sr(t,a,s))},enqueueReplaceState:function(a,t,n){a=a._reactInternals;var r=Ue(),s=qa(a),c=Ba(r,s);c.tag=1,c.payload=t,n!=null&&(c.callback=n),t=Ya(a,c,s),t!==null&&(ba(t,a,s,r),Sr(t,a,s))},enqueueForceUpdate:function(a,t){a=a._reactInternals;var n=Ue(),r=qa(a),s=Ba(n,r);s.tag=2,t!=null&&(s.callback=t),t=Ya(a,s,r),t!==null&&(ba(t,a,r,n),Sr(t,a,r))}};function wc(a,t,n,r,s,c,p){return a=a.stateNode,typeof a.shouldComponentUpdate=="function"?a.shouldComponentUpdate(r,c,p):t.prototype&&t.prototype.isPureReactComponent?!un(n,r)||!un(s,c):!0}function Sc(a,t,n){var r=!1,s=$a,c=t.contextType;return typeof c=="object"&&c!==null?c=oa(c):(s=Je(t)?ot:Le.current,r=t.contextTypes,c=(r=r!=null)?Bt(a,s):$a),t=new t(n,c),a.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Rr,a.stateNode=t,t._reactInternals=a,r&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=s,a.__reactInternalMemoizedMaskedChildContext=c),t}function Cc(a,t,n,r){a=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==a&&Rr.enqueueReplaceState(t,t.state,null)}function ws(a,t,n,r){var s=a.stateNode;s.props=n,s.state=a.memoizedState,s.refs={},ls(a);var c=t.contextType;typeof c=="object"&&c!==null?s.context=oa(c):(c=Je(t)?ot:Le.current,s.context=Bt(a,c)),s.state=a.memoizedState,c=t.getDerivedStateFromProps,typeof c=="function"&&(js(a,t,c,n),s.state=a.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(t=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),t!==s.state&&Rr.enqueueReplaceState(s,s.state,null),Cr(a,n,s,r),s.state=a.memoizedState),typeof s.componentDidMount=="function"&&(a.flags|=4194308)}function Ft(a,t){try{var n="",r=t;do n+=oe(r),r=r.return;while(r);var s=n}catch(c){s=`
Error generating stack: `+c.message+`
`+c.stack}return{value:a,source:t,stack:s,digest:null}}function Ss(a,t,n){return{value:a,source:null,stack:n??null,digest:t??null}}function Cs(a,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Km=typeof WeakMap=="function"?WeakMap:Map;function kc(a,t,n){n=Ba(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Lr||(Lr=!0,Ds=r),Cs(a,t)},n}function Nc(a,t,n){n=Ba(-1,n),n.tag=3;var r=a.type.getDerivedStateFromError;if(typeof r=="function"){var s=t.value;n.payload=function(){return r(s)},n.callback=function(){Cs(a,t)}}var c=a.stateNode;return c!==null&&typeof c.componentDidCatch=="function"&&(n.callback=function(){Cs(a,t),typeof r!="function"&&(Ka===null?Ka=new Set([this]):Ka.add(this));var p=t.stack;this.componentDidCatch(t.value,{componentStack:p!==null?p:""})}),n}function Ec(a,t,n){var r=a.pingCache;if(r===null){r=a.pingCache=new Km;var s=new Set;r.set(t,s)}else s=r.get(t),s===void 0&&(s=new Set,r.set(t,s));s.has(n)||(s.add(n),a=df.bind(null,a,t,n),t.then(a,a))}function Tc(a){do{var t;if((t=a.tag===13)&&(t=a.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return a;a=a.return}while(a!==null);return null}function Ac(a,t,n,r,s){return(a.mode&1)===0?(a===t?a.flags|=65536:(a.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ba(-1,1),t.tag=2,Ya(n,t,1))),n.lanes|=1),a):(a.flags|=65536,a.lanes=s,a)}var Qm=X.ReactCurrentOwner,Ye=!1;function _e(a,t,n,r){t.child=a===null?Kl(t,null,n,r):Ot(t,a.child,n,r)}function Pc(a,t,n,r,s){n=n.render;var c=t.ref;return Lt(t,s),r=hs(a,t,n,r,c,s),n=gs(),a!==null&&!Ye?(t.updateQueue=a.updateQueue,t.flags&=-2053,a.lanes&=~s,Ia(a,t,s)):(be&&n&&Xi(t),t.flags|=1,_e(a,t,r,s),t.child)}function Rc(a,t,n,r,s){if(a===null){var c=n.type;return typeof c=="function"&&!Js(c)&&c.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=c,Bc(a,t,c,r,s)):(a=$r(n.type,null,r,t,t.mode,s),a.ref=t.ref,a.return=t,t.child=a)}if(c=a.child,(a.lanes&s)===0){var p=c.memoizedProps;if(n=n.compare,n=n!==null?n:un,n(p,r)&&a.ref===t.ref)return Ia(a,t,s)}return t.flags|=1,a=Za(c,r),a.ref=t.ref,a.return=t,t.child=a}function Bc(a,t,n,r,s){if(a!==null){var c=a.memoizedProps;if(un(c,r)&&a.ref===t.ref)if(Ye=!1,t.pendingProps=r=c,(a.lanes&s)!==0)(a.flags&131072)!==0&&(Ye=!0);else return t.lanes=a.lanes,Ia(a,t,s)}return ks(a,t,n,r,s)}function Ic(a,t,n){var r=t.pendingProps,s=r.children,c=a!==null?a.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ue(_t,na),na|=n;else{if((n&1073741824)===0)return a=c!==null?c.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:a,cachePool:null,transitions:null},t.updateQueue=null,ue(_t,na),na|=a,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=c!==null?c.baseLanes:n,ue(_t,na),na|=r}else c!==null?(r=c.baseLanes|n,t.memoizedState=null):r=n,ue(_t,na),na|=r;return _e(a,t,s,n),t.child}function zc(a,t){var n=t.ref;(a===null&&n!==null||a!==null&&a.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ks(a,t,n,r,s){var c=Je(n)?ot:Le.current;return c=Bt(t,c),Lt(t,s),n=hs(a,t,n,r,c,s),r=gs(),a!==null&&!Ye?(t.updateQueue=a.updateQueue,t.flags&=-2053,a.lanes&=~s,Ia(a,t,s)):(be&&r&&Xi(t),t.flags|=1,_e(a,t,n,s),t.child)}function Wc(a,t,n,r,s){if(Je(n)){var c=!0;hr(t)}else c=!1;if(Lt(t,s),t.stateNode===null)Ir(a,t),Sc(t,n,r),ws(t,n,r,s),r=!0;else if(a===null){var p=t.stateNode,g=t.memoizedProps;p.props=g;var j=p.context,E=n.contextType;typeof E=="object"&&E!==null?E=oa(E):(E=Je(n)?ot:Le.current,E=Bt(t,E));var z=n.getDerivedStateFromProps,O=typeof z=="function"||typeof p.getSnapshotBeforeUpdate=="function";O||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(g!==r||j!==E)&&Cc(t,p,r,E),Ja=!1;var R=t.memoizedState;p.state=R,Cr(t,r,p,s),j=t.memoizedState,g!==r||R!==j||Ge.current||Ja?(typeof z=="function"&&(js(t,n,z,r),j=t.memoizedState),(g=Ja||wc(t,n,g,r,R,j,E))?(O||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount()),typeof p.componentDidMount=="function"&&(t.flags|=4194308)):(typeof p.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=j),p.props=r,p.state=j,p.context=E,r=g):(typeof p.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{p=t.stateNode,ql(a,t),g=t.memoizedProps,E=t.type===t.elementType?g:ha(t.type,g),p.props=E,O=t.pendingProps,R=p.context,j=n.contextType,typeof j=="object"&&j!==null?j=oa(j):(j=Je(n)?ot:Le.current,j=Bt(t,j));var F=n.getDerivedStateFromProps;(z=typeof F=="function"||typeof p.getSnapshotBeforeUpdate=="function")||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(g!==O||R!==j)&&Cc(t,p,r,j),Ja=!1,R=t.memoizedState,p.state=R,Cr(t,r,p,s);var $=t.memoizedState;g!==O||R!==$||Ge.current||Ja?(typeof F=="function"&&(js(t,n,F,r),$=t.memoizedState),(E=Ja||wc(t,n,E,r,R,$,j)||!1)?(z||typeof p.UNSAFE_componentWillUpdate!="function"&&typeof p.componentWillUpdate!="function"||(typeof p.componentWillUpdate=="function"&&p.componentWillUpdate(r,$,j),typeof p.UNSAFE_componentWillUpdate=="function"&&p.UNSAFE_componentWillUpdate(r,$,j)),typeof p.componentDidUpdate=="function"&&(t.flags|=4),typeof p.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof p.componentDidUpdate!="function"||g===a.memoizedProps&&R===a.memoizedState||(t.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||g===a.memoizedProps&&R===a.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=$),p.props=r,p.state=$,p.context=j,r=E):(typeof p.componentDidUpdate!="function"||g===a.memoizedProps&&R===a.memoizedState||(t.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||g===a.memoizedProps&&R===a.memoizedState||(t.flags|=1024),r=!1)}return Ns(a,t,n,r,c,s)}function Ns(a,t,n,r,s,c){zc(a,t);var p=(t.flags&128)!==0;if(!r&&!p)return s&&Fl(t,n,!1),Ia(a,t,c);r=t.stateNode,Qm.current=t;var g=p&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,a!==null&&p?(t.child=Ot(t,a.child,null,c),t.child=Ot(t,null,g,c)):_e(a,t,g,c),t.memoizedState=r.state,s&&Fl(t,n,!0),t.child}function Oc(a){var t=a.stateNode;t.pendingContext?Ll(a,t.pendingContext,t.pendingContext!==t.context):t.context&&Ll(a,t.context,!1),cs(a,t.containerInfo)}function Mc(a,t,n,r,s){return Wt(),ts(s),t.flags|=256,_e(a,t,n,r),t.child}var Es={dehydrated:null,treeContext:null,retryLane:0};function Ts(a){return{baseLanes:a,cachePool:null,transitions:null}}function Lc(a,t,n){var r=t.pendingProps,s=ve.current,c=!1,p=(t.flags&128)!==0,g;if((g=p)||(g=a!==null&&a.memoizedState===null?!1:(s&2)!==0),g?(c=!0,t.flags&=-129):(a===null||a.memoizedState!==null)&&(s|=1),ue(ve,s&1),a===null)return as(t),a=t.memoizedState,a!==null&&(a=a.dehydrated,a!==null)?((t.mode&1)===0?t.lanes=1:a.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(p=r.children,a=r.fallback,c?(r=t.mode,c=t.child,p={mode:"hidden",children:p},(r&1)===0&&c!==null?(c.childLanes=0,c.pendingProps=p):c=Gr(p,r,0,null),a=xt(a,r,n,null),c.return=t,a.return=t,c.sibling=a,t.child=c,t.child.memoizedState=Ts(n),t.memoizedState=Es,a):As(t,p));if(s=a.memoizedState,s!==null&&(g=s.dehydrated,g!==null))return qm(a,t,p,r,g,s,n);if(c){c=r.fallback,p=t.mode,s=a.child,g=s.sibling;var j={mode:"hidden",children:r.children};return(p&1)===0&&t.child!==s?(r=t.child,r.childLanes=0,r.pendingProps=j,t.deletions=null):(r=Za(s,j),r.subtreeFlags=s.subtreeFlags&14680064),g!==null?c=Za(g,c):(c=xt(c,p,n,null),c.flags|=2),c.return=t,r.return=t,r.sibling=c,t.child=r,r=c,c=t.child,p=a.child.memoizedState,p=p===null?Ts(n):{baseLanes:p.baseLanes|n,cachePool:null,transitions:p.transitions},c.memoizedState=p,c.childLanes=a.childLanes&~n,t.memoizedState=Es,r}return c=a.child,a=c.sibling,r=Za(c,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,a!==null&&(n=t.deletions,n===null?(t.deletions=[a],t.flags|=16):n.push(a)),t.child=r,t.memoizedState=null,r}function As(a,t){return t=Gr({mode:"visible",children:t},a.mode,0,null),t.return=a,a.child=t}function Br(a,t,n,r){return r!==null&&ts(r),Ot(t,a.child,null,n),a=As(t,t.pendingProps.children),a.flags|=2,t.memoizedState=null,a}function qm(a,t,n,r,s,c,p){if(n)return t.flags&256?(t.flags&=-257,r=Ss(Error(l(422))),Br(a,t,p,r)):t.memoizedState!==null?(t.child=a.child,t.flags|=128,null):(c=r.fallback,s=t.mode,r=Gr({mode:"visible",children:r.children},s,0,null),c=xt(c,s,p,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,(t.mode&1)!==0&&Ot(t,a.child,null,p),t.child.memoizedState=Ts(p),t.memoizedState=Es,c);if((t.mode&1)===0)return Br(a,t,p,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var g=r.dgst;return r=g,c=Error(l(419)),r=Ss(c,r,void 0),Br(a,t,p,r)}if(g=(p&a.childLanes)!==0,Ye||g){if(r=Ie,r!==null){switch(p&-p){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=(s&(r.suspendedLanes|p))!==0?0:s,s!==0&&s!==c.retryLane&&(c.retryLane=s,Ra(a,s),ba(r,a,s,-1))}return Gs(),r=Ss(Error(l(421))),Br(a,t,p,r)}return s.data==="$?"?(t.flags|=128,t.child=a.child,t=pf.bind(null,a),s._reactRetry=t,null):(a=c.treeContext,ta=_a(s.nextSibling),aa=t,be=!0,ua=null,a!==null&&(ia[sa++]=Aa,ia[sa++]=Pa,ia[sa++]=lt,Aa=a.id,Pa=a.overflow,lt=t),t=As(t,r.children),t.flags|=4096,t)}function Dc(a,t,n){a.lanes|=t;var r=a.alternate;r!==null&&(r.lanes|=t),ss(a.return,t,n)}function Ps(a,t,n,r,s){var c=a.memoizedState;c===null?a.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(c.isBackwards=t,c.rendering=null,c.renderingStartTime=0,c.last=r,c.tail=n,c.tailMode=s)}function Fc(a,t,n){var r=t.pendingProps,s=r.revealOrder,c=r.tail;if(_e(a,t,r.children,n),r=ve.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(a!==null&&(a.flags&128)!==0)e:for(a=t.child;a!==null;){if(a.tag===13)a.memoizedState!==null&&Dc(a,n,t);else if(a.tag===19)Dc(a,n,t);else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===t)break e;for(;a.sibling===null;){if(a.return===null||a.return===t)break e;a=a.return}a.sibling.return=a.return,a=a.sibling}r&=1}if(ue(ve,r),(t.mode&1)===0)t.memoizedState=null;else switch(s){case"forwards":for(n=t.child,s=null;n!==null;)a=n.alternate,a!==null&&kr(a)===null&&(s=n),n=n.sibling;n=s,n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null),Ps(t,!1,s,n,c);break;case"backwards":for(n=null,s=t.child,t.child=null;s!==null;){if(a=s.alternate,a!==null&&kr(a)===null){t.child=s;break}a=s.sibling,s.sibling=n,n=s,s=a}Ps(t,!0,n,null,c);break;case"together":Ps(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ir(a,t){(t.mode&1)===0&&a!==null&&(a.alternate=null,t.alternate=null,t.flags|=2)}function Ia(a,t,n){if(a!==null&&(t.dependencies=a.dependencies),ft|=t.lanes,(n&t.childLanes)===0)return null;if(a!==null&&t.child!==a.child)throw Error(l(153));if(t.child!==null){for(a=t.child,n=Za(a,a.pendingProps),t.child=n,n.return=t;a.sibling!==null;)a=a.sibling,n=n.sibling=Za(a,a.pendingProps),n.return=t;n.sibling=null}return t.child}function Xm(a,t,n){switch(t.tag){case 3:Oc(t),Wt();break;case 5:ec(t);break;case 1:Je(t.type)&&hr(t);break;case 4:cs(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,s=t.memoizedProps.value;ue(jr,r._currentValue),r._currentValue=s;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ue(ve,ve.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?Lc(a,t,n):(ue(ve,ve.current&1),a=Ia(a,t,n),a!==null?a.sibling:null);ue(ve,ve.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(a.flags&128)!==0){if(r)return Fc(a,t,n);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),ue(ve,ve.current),r)break;return null;case 22:case 23:return t.lanes=0,Ic(a,t,n)}return Ia(a,t,n)}var Hc,Rs,_c,Uc;Hc=function(a,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)a.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},Rs=function(){},_c=function(a,t,n,r){var s=a.memoizedProps;if(s!==r){a=t.stateNode,pt(wa.current);var c=null;switch(n){case"input":s=si(a,s),r=si(a,r),c=[];break;case"select":s=U({},s,{value:void 0}),r=U({},r,{value:void 0}),c=[];break;case"textarea":s=ci(a,s),r=ci(a,r),c=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(a.onclick=mr)}pi(n,r);var p;n=null;for(E in s)if(!r.hasOwnProperty(E)&&s.hasOwnProperty(E)&&s[E]!=null)if(E==="style"){var g=s[E];for(p in g)g.hasOwnProperty(p)&&(n||(n={}),n[p]="")}else E!=="dangerouslySetInnerHTML"&&E!=="children"&&E!=="suppressContentEditableWarning"&&E!=="suppressHydrationWarning"&&E!=="autoFocus"&&(m.hasOwnProperty(E)?c||(c=[]):(c=c||[]).push(E,null));for(E in r){var j=r[E];if(g=s!=null?s[E]:void 0,r.hasOwnProperty(E)&&j!==g&&(j!=null||g!=null))if(E==="style")if(g){for(p in g)!g.hasOwnProperty(p)||j&&j.hasOwnProperty(p)||(n||(n={}),n[p]="");for(p in j)j.hasOwnProperty(p)&&g[p]!==j[p]&&(n||(n={}),n[p]=j[p])}else n||(c||(c=[]),c.push(E,n)),n=j;else E==="dangerouslySetInnerHTML"?(j=j?j.__html:void 0,g=g?g.__html:void 0,j!=null&&g!==j&&(c=c||[]).push(E,j)):E==="children"?typeof j!="string"&&typeof j!="number"||(c=c||[]).push(E,""+j):E!=="suppressContentEditableWarning"&&E!=="suppressHydrationWarning"&&(m.hasOwnProperty(E)?(j!=null&&E==="onScroll"&&he("scroll",a),c||g===j||(c=[])):(c=c||[]).push(E,j))}n&&(c=c||[]).push("style",n);var E=c;(t.updateQueue=E)&&(t.flags|=4)}},Uc=function(a,t,n,r){n!==r&&(t.flags|=4)};function An(a,t){if(!be)switch(a.tailMode){case"hidden":t=a.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?a.tail=null:n.sibling=null;break;case"collapsed":n=a.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||a.tail===null?a.tail=null:a.tail.sibling=null:r.sibling=null}}function Fe(a){var t=a.alternate!==null&&a.alternate.child===a.child,n=0,r=0;if(t)for(var s=a.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=a,s=s.sibling;else for(s=a.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=a,s=s.sibling;return a.subtreeFlags|=r,a.childLanes=n,t}function Zm(a,t,n){var r=t.pendingProps;switch(Zi(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Fe(t),null;case 1:return Je(t.type)&&ur(),Fe(t),null;case 3:return r=t.stateNode,Dt(),ge(Ge),ge(Le),ms(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(a===null||a.child===null)&&(yr(t)?t.flags|=4:a===null||a.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,ua!==null&&(_s(ua),ua=null))),Rs(a,t),Fe(t),null;case 5:ds(t);var s=pt(Cn.current);if(n=t.type,a!==null&&t.stateNode!=null)_c(a,t,n,r,s),a.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(l(166));return Fe(t),null}if(a=pt(wa.current),yr(t)){r=t.stateNode,n=t.type;var c=t.memoizedProps;switch(r[ja]=t,r[yn]=c,a=(t.mode&1)!==0,n){case"dialog":he("cancel",r),he("close",r);break;case"iframe":case"object":case"embed":he("load",r);break;case"video":case"audio":for(s=0;s<gn.length;s++)he(gn[s],r);break;case"source":he("error",r);break;case"img":case"image":case"link":he("error",r),he("load",r);break;case"details":he("toggle",r);break;case"input":So(r,c),he("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!c.multiple},he("invalid",r);break;case"textarea":No(r,c),he("invalid",r)}pi(n,c),s=null;for(var p in c)if(c.hasOwnProperty(p)){var g=c[p];p==="children"?typeof g=="string"?r.textContent!==g&&(c.suppressHydrationWarning!==!0&&pr(r.textContent,g,a),s=["children",g]):typeof g=="number"&&r.textContent!==""+g&&(c.suppressHydrationWarning!==!0&&pr(r.textContent,g,a),s=["children",""+g]):m.hasOwnProperty(p)&&g!=null&&p==="onScroll"&&he("scroll",r)}switch(n){case"input":_n(r),ko(r,c,!0);break;case"textarea":_n(r),To(r);break;case"select":case"option":break;default:typeof c.onClick=="function"&&(r.onclick=mr)}r=s,t.updateQueue=r,r!==null&&(t.flags|=4)}else{p=s.nodeType===9?s:s.ownerDocument,a==="http://www.w3.org/1999/xhtml"&&(a=Ao(n)),a==="http://www.w3.org/1999/xhtml"?n==="script"?(a=p.createElement("div"),a.innerHTML="<script><\/script>",a=a.removeChild(a.firstChild)):typeof r.is=="string"?a=p.createElement(n,{is:r.is}):(a=p.createElement(n),n==="select"&&(p=a,r.multiple?p.multiple=!0:r.size&&(p.size=r.size))):a=p.createElementNS(a,n),a[ja]=t,a[yn]=r,Hc(a,t,!1,!1),t.stateNode=a;e:{switch(p=mi(n,r),n){case"dialog":he("cancel",a),he("close",a),s=r;break;case"iframe":case"object":case"embed":he("load",a),s=r;break;case"video":case"audio":for(s=0;s<gn.length;s++)he(gn[s],a);s=r;break;case"source":he("error",a),s=r;break;case"img":case"image":case"link":he("error",a),he("load",a),s=r;break;case"details":he("toggle",a),s=r;break;case"input":So(a,r),s=si(a,r),he("invalid",a);break;case"option":s=r;break;case"select":a._wrapperState={wasMultiple:!!r.multiple},s=U({},r,{value:void 0}),he("invalid",a);break;case"textarea":No(a,r),s=ci(a,r),he("invalid",a);break;default:s=r}pi(n,s),g=s;for(c in g)if(g.hasOwnProperty(c)){var j=g[c];c==="style"?Bo(a,j):c==="dangerouslySetInnerHTML"?(j=j?j.__html:void 0,j!=null&&Po(a,j)):c==="children"?typeof j=="string"?(n!=="textarea"||j!=="")&&Qt(a,j):typeof j=="number"&&Qt(a,""+j):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(m.hasOwnProperty(c)?j!=null&&c==="onScroll"&&he("scroll",a):j!=null&&_(a,c,j,p))}switch(n){case"input":_n(a),ko(a,r,!1);break;case"textarea":_n(a),To(a);break;case"option":r.value!=null&&a.setAttribute("value",""+de(r.value));break;case"select":a.multiple=!!r.multiple,c=r.value,c!=null?vt(a,!!r.multiple,c,!1):r.defaultValue!=null&&vt(a,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(a.onclick=mr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Fe(t),null;case 6:if(a&&t.stateNode!=null)Uc(a,t,a.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(l(166));if(n=pt(Cn.current),pt(wa.current),yr(t)){if(r=t.stateNode,n=t.memoizedProps,r[ja]=t,(c=r.nodeValue!==n)&&(a=aa,a!==null))switch(a.tag){case 3:pr(r.nodeValue,n,(a.mode&1)!==0);break;case 5:a.memoizedProps.suppressHydrationWarning!==!0&&pr(r.nodeValue,n,(a.mode&1)!==0)}c&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[ja]=t,t.stateNode=r}return Fe(t),null;case 13:if(ge(ve),r=t.memoizedState,a===null||a.memoizedState!==null&&a.memoizedState.dehydrated!==null){if(be&&ta!==null&&(t.mode&1)!==0&&(t.flags&128)===0)Jl(),Wt(),t.flags|=98560,c=!1;else if(c=yr(t),r!==null&&r.dehydrated!==null){if(a===null){if(!c)throw Error(l(318));if(c=t.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(l(317));c[ja]=t}else Wt(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Fe(t),c=!1}else ua!==null&&(_s(ua),ua=null),c=!0;if(!c)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(a!==null&&a.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(a===null||(ve.current&1)!==0?Pe===0&&(Pe=3):Gs())),t.updateQueue!==null&&(t.flags|=4),Fe(t),null);case 4:return Dt(),Rs(a,t),a===null&&xn(t.stateNode.containerInfo),Fe(t),null;case 10:return is(t.type._context),Fe(t),null;case 17:return Je(t.type)&&ur(),Fe(t),null;case 19:if(ge(ve),c=t.memoizedState,c===null)return Fe(t),null;if(r=(t.flags&128)!==0,p=c.rendering,p===null)if(r)An(c,!1);else{if(Pe!==0||a!==null&&(a.flags&128)!==0)for(a=t.child;a!==null;){if(p=kr(a),p!==null){for(t.flags|=128,An(c,!1),r=p.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)c=n,a=r,c.flags&=14680066,p=c.alternate,p===null?(c.childLanes=0,c.lanes=a,c.child=null,c.subtreeFlags=0,c.memoizedProps=null,c.memoizedState=null,c.updateQueue=null,c.dependencies=null,c.stateNode=null):(c.childLanes=p.childLanes,c.lanes=p.lanes,c.child=p.child,c.subtreeFlags=0,c.deletions=null,c.memoizedProps=p.memoizedProps,c.memoizedState=p.memoizedState,c.updateQueue=p.updateQueue,c.type=p.type,a=p.dependencies,c.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),n=n.sibling;return ue(ve,ve.current&1|2),t.child}a=a.sibling}c.tail!==null&&Ce()>Ut&&(t.flags|=128,r=!0,An(c,!1),t.lanes=4194304)}else{if(!r)if(a=kr(p),a!==null){if(t.flags|=128,r=!0,n=a.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),An(c,!0),c.tail===null&&c.tailMode==="hidden"&&!p.alternate&&!be)return Fe(t),null}else 2*Ce()-c.renderingStartTime>Ut&&n!==1073741824&&(t.flags|=128,r=!0,An(c,!1),t.lanes=4194304);c.isBackwards?(p.sibling=t.child,t.child=p):(n=c.last,n!==null?n.sibling=p:t.child=p,c.last=p)}return c.tail!==null?(t=c.tail,c.rendering=t,c.tail=t.sibling,c.renderingStartTime=Ce(),t.sibling=null,n=ve.current,ue(ve,r?n&1|2:n&1),t):(Fe(t),null);case 22:case 23:return $s(),r=t.memoizedState!==null,a!==null&&a.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(na&1073741824)!==0&&(Fe(t),t.subtreeFlags&6&&(t.flags|=8192)):Fe(t),null;case 24:return null;case 25:return null}throw Error(l(156,t.tag))}function ef(a,t){switch(Zi(t),t.tag){case 1:return Je(t.type)&&ur(),a=t.flags,a&65536?(t.flags=a&-65537|128,t):null;case 3:return Dt(),ge(Ge),ge(Le),ms(),a=t.flags,(a&65536)!==0&&(a&128)===0?(t.flags=a&-65537|128,t):null;case 5:return ds(t),null;case 13:if(ge(ve),a=t.memoizedState,a!==null&&a.dehydrated!==null){if(t.alternate===null)throw Error(l(340));Wt()}return a=t.flags,a&65536?(t.flags=a&-65537|128,t):null;case 19:return ge(ve),null;case 4:return Dt(),null;case 10:return is(t.type._context),null;case 22:case 23:return $s(),null;case 24:return null;default:return null}}var zr=!1,He=!1,af=typeof WeakSet=="function"?WeakSet:Set,H=null;function Ht(a,t){var n=a.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Se(a,t,r)}else n.current=null}function Bs(a,t,n){try{n()}catch(r){Se(a,t,r)}}var $c=!1;function tf(a,t){if($i=er,a=wl(),Oi(a)){if("selectionStart"in a)var n={start:a.selectionStart,end:a.selectionEnd};else e:{n=(n=a.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,c=r.focusNode;r=r.focusOffset;try{n.nodeType,c.nodeType}catch{n=null;break e}var p=0,g=-1,j=-1,E=0,z=0,O=a,R=null;a:for(;;){for(var F;O!==n||s!==0&&O.nodeType!==3||(g=p+s),O!==c||r!==0&&O.nodeType!==3||(j=p+r),O.nodeType===3&&(p+=O.nodeValue.length),(F=O.firstChild)!==null;)R=O,O=F;for(;;){if(O===a)break a;if(R===n&&++E===s&&(g=p),R===c&&++z===r&&(j=p),(F=O.nextSibling)!==null)break;O=R,R=O.parentNode}O=F}n=g===-1||j===-1?null:{start:g,end:j}}else n=null}n=n||{start:0,end:0}}else n=null;for(Gi={focusedElem:a,selectionRange:n},er=!1,H=t;H!==null;)if(t=H,a=t.child,(t.subtreeFlags&1028)!==0&&a!==null)a.return=t,H=a;else for(;H!==null;){t=H;try{var $=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if($!==null){var G=$.memoizedProps,ke=$.memoizedState,k=t.stateNode,S=k.getSnapshotBeforeUpdate(t.elementType===t.type?G:ha(t.type,G),ke);k.__reactInternalSnapshotBeforeUpdate=S}break;case 3:var N=t.stateNode.containerInfo;N.nodeType===1?N.textContent="":N.nodeType===9&&N.documentElement&&N.removeChild(N.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(l(163))}}catch(M){Se(t,t.return,M)}if(a=t.sibling,a!==null){a.return=t.return,H=a;break}H=t.return}return $=$c,$c=!1,$}function Pn(a,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&a)===a){var c=s.destroy;s.destroy=void 0,c!==void 0&&Bs(t,n,c)}s=s.next}while(s!==r)}}function Wr(a,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&a)===a){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Is(a){var t=a.ref;if(t!==null){var n=a.stateNode;switch(a.tag){case 5:a=n;break;default:a=n}typeof t=="function"?t(a):t.current=a}}function Gc(a){var t=a.alternate;t!==null&&(a.alternate=null,Gc(t)),a.child=null,a.deletions=null,a.sibling=null,a.tag===5&&(t=a.stateNode,t!==null&&(delete t[ja],delete t[yn],delete t[Ki],delete t[Lm],delete t[Dm])),a.stateNode=null,a.return=null,a.dependencies=null,a.memoizedProps=null,a.memoizedState=null,a.pendingProps=null,a.stateNode=null,a.updateQueue=null}function Jc(a){return a.tag===5||a.tag===3||a.tag===4}function Yc(a){e:for(;;){for(;a.sibling===null;){if(a.return===null||Jc(a.return))return null;a=a.return}for(a.sibling.return=a.return,a=a.sibling;a.tag!==5&&a.tag!==6&&a.tag!==18;){if(a.flags&2||a.child===null||a.tag===4)continue e;a.child.return=a,a=a.child}if(!(a.flags&2))return a.stateNode}}function zs(a,t,n){var r=a.tag;if(r===5||r===6)a=a.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(a,t):n.insertBefore(a,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(a,n)):(t=n,t.appendChild(a)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=mr));else if(r!==4&&(a=a.child,a!==null))for(zs(a,t,n),a=a.sibling;a!==null;)zs(a,t,n),a=a.sibling}function Ws(a,t,n){var r=a.tag;if(r===5||r===6)a=a.stateNode,t?n.insertBefore(a,t):n.appendChild(a);else if(r!==4&&(a=a.child,a!==null))for(Ws(a,t,n),a=a.sibling;a!==null;)Ws(a,t,n),a=a.sibling}var Oe=null,ga=!1;function Va(a,t,n){for(n=n.child;n!==null;)Vc(a,t,n),n=n.sibling}function Vc(a,t,n){if(va&&typeof va.onCommitFiberUnmount=="function")try{va.onCommitFiberUnmount(Vn,n)}catch{}switch(n.tag){case 5:He||Ht(n,t);case 6:var r=Oe,s=ga;Oe=null,Va(a,t,n),Oe=r,ga=s,Oe!==null&&(ga?(a=Oe,n=n.stateNode,a.nodeType===8?a.parentNode.removeChild(n):a.removeChild(n)):Oe.removeChild(n.stateNode));break;case 18:Oe!==null&&(ga?(a=Oe,n=n.stateNode,a.nodeType===8?Vi(a.parentNode,n):a.nodeType===1&&Vi(a,n),ln(a)):Vi(Oe,n.stateNode));break;case 4:r=Oe,s=ga,Oe=n.stateNode.containerInfo,ga=!0,Va(a,t,n),Oe=r,ga=s;break;case 0:case 11:case 14:case 15:if(!He&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var c=s,p=c.destroy;c=c.tag,p!==void 0&&((c&2)!==0||(c&4)!==0)&&Bs(n,t,p),s=s.next}while(s!==r)}Va(a,t,n);break;case 1:if(!He&&(Ht(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(g){Se(n,t,g)}Va(a,t,n);break;case 21:Va(a,t,n);break;case 22:n.mode&1?(He=(r=He)||n.memoizedState!==null,Va(a,t,n),He=r):Va(a,t,n);break;default:Va(a,t,n)}}function Kc(a){var t=a.updateQueue;if(t!==null){a.updateQueue=null;var n=a.stateNode;n===null&&(n=a.stateNode=new af),t.forEach(function(r){var s=mf.bind(null,a,r);n.has(r)||(n.add(r),r.then(s,s))})}}function xa(a,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var c=a,p=t,g=p;e:for(;g!==null;){switch(g.tag){case 5:Oe=g.stateNode,ga=!1;break e;case 3:Oe=g.stateNode.containerInfo,ga=!0;break e;case 4:Oe=g.stateNode.containerInfo,ga=!0;break e}g=g.return}if(Oe===null)throw Error(l(160));Vc(c,p,s),Oe=null,ga=!1;var j=s.alternate;j!==null&&(j.return=null),s.return=null}catch(E){Se(s,t,E)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Qc(t,a),t=t.sibling}function Qc(a,t){var n=a.alternate,r=a.flags;switch(a.tag){case 0:case 11:case 14:case 15:if(xa(t,a),Ca(a),r&4){try{Pn(3,a,a.return),Wr(3,a)}catch(G){Se(a,a.return,G)}try{Pn(5,a,a.return)}catch(G){Se(a,a.return,G)}}break;case 1:xa(t,a),Ca(a),r&512&&n!==null&&Ht(n,n.return);break;case 5:if(xa(t,a),Ca(a),r&512&&n!==null&&Ht(n,n.return),a.flags&32){var s=a.stateNode;try{Qt(s,"")}catch(G){Se(a,a.return,G)}}if(r&4&&(s=a.stateNode,s!=null)){var c=a.memoizedProps,p=n!==null?n.memoizedProps:c,g=a.type,j=a.updateQueue;if(a.updateQueue=null,j!==null)try{g==="input"&&c.type==="radio"&&c.name!=null&&Co(s,c),mi(g,p);var E=mi(g,c);for(p=0;p<j.length;p+=2){var z=j[p],O=j[p+1];z==="style"?Bo(s,O):z==="dangerouslySetInnerHTML"?Po(s,O):z==="children"?Qt(s,O):_(s,z,O,E)}switch(g){case"input":oi(s,c);break;case"textarea":Eo(s,c);break;case"select":var R=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!c.multiple;var F=c.value;F!=null?vt(s,!!c.multiple,F,!1):R!==!!c.multiple&&(c.defaultValue!=null?vt(s,!!c.multiple,c.defaultValue,!0):vt(s,!!c.multiple,c.multiple?[]:"",!1))}s[yn]=c}catch(G){Se(a,a.return,G)}}break;case 6:if(xa(t,a),Ca(a),r&4){if(a.stateNode===null)throw Error(l(162));s=a.stateNode,c=a.memoizedProps;try{s.nodeValue=c}catch(G){Se(a,a.return,G)}}break;case 3:if(xa(t,a),Ca(a),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ln(t.containerInfo)}catch(G){Se(a,a.return,G)}break;case 4:xa(t,a),Ca(a);break;case 13:xa(t,a),Ca(a),s=a.child,s.flags&8192&&(c=s.memoizedState!==null,s.stateNode.isHidden=c,!c||s.alternate!==null&&s.alternate.memoizedState!==null||(Ls=Ce())),r&4&&Kc(a);break;case 22:if(z=n!==null&&n.memoizedState!==null,a.mode&1?(He=(E=He)||z,xa(t,a),He=E):xa(t,a),Ca(a),r&8192){if(E=a.memoizedState!==null,(a.stateNode.isHidden=E)&&!z&&(a.mode&1)!==0)for(H=a,z=a.child;z!==null;){for(O=H=z;H!==null;){switch(R=H,F=R.child,R.tag){case 0:case 11:case 14:case 15:Pn(4,R,R.return);break;case 1:Ht(R,R.return);var $=R.stateNode;if(typeof $.componentWillUnmount=="function"){r=R,n=R.return;try{t=r,$.props=t.memoizedProps,$.state=t.memoizedState,$.componentWillUnmount()}catch(G){Se(r,n,G)}}break;case 5:Ht(R,R.return);break;case 22:if(R.memoizedState!==null){Zc(O);continue}}F!==null?(F.return=R,H=F):Zc(O)}z=z.sibling}e:for(z=null,O=a;;){if(O.tag===5){if(z===null){z=O;try{s=O.stateNode,E?(c=s.style,typeof c.setProperty=="function"?c.setProperty("display","none","important"):c.display="none"):(g=O.stateNode,j=O.memoizedProps.style,p=j!=null&&j.hasOwnProperty("display")?j.display:null,g.style.display=Ro("display",p))}catch(G){Se(a,a.return,G)}}}else if(O.tag===6){if(z===null)try{O.stateNode.nodeValue=E?"":O.memoizedProps}catch(G){Se(a,a.return,G)}}else if((O.tag!==22&&O.tag!==23||O.memoizedState===null||O===a)&&O.child!==null){O.child.return=O,O=O.child;continue}if(O===a)break e;for(;O.sibling===null;){if(O.return===null||O.return===a)break e;z===O&&(z=null),O=O.return}z===O&&(z=null),O.sibling.return=O.return,O=O.sibling}}break;case 19:xa(t,a),Ca(a),r&4&&Kc(a);break;case 21:break;default:xa(t,a),Ca(a)}}function Ca(a){var t=a.flags;if(t&2){try{e:{for(var n=a.return;n!==null;){if(Jc(n)){var r=n;break e}n=n.return}throw Error(l(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(Qt(s,""),r.flags&=-33);var c=Yc(a);Ws(a,c,s);break;case 3:case 4:var p=r.stateNode.containerInfo,g=Yc(a);zs(a,g,p);break;default:throw Error(l(161))}}catch(j){Se(a,a.return,j)}a.flags&=-3}t&4096&&(a.flags&=-4097)}function nf(a,t,n){H=a,qc(a)}function qc(a,t,n){for(var r=(a.mode&1)!==0;H!==null;){var s=H,c=s.child;if(s.tag===22&&r){var p=s.memoizedState!==null||zr;if(!p){var g=s.alternate,j=g!==null&&g.memoizedState!==null||He;g=zr;var E=He;if(zr=p,(He=j)&&!E)for(H=s;H!==null;)p=H,j=p.child,p.tag===22&&p.memoizedState!==null?ed(s):j!==null?(j.return=p,H=j):ed(s);for(;c!==null;)H=c,qc(c),c=c.sibling;H=s,zr=g,He=E}Xc(a)}else(s.subtreeFlags&8772)!==0&&c!==null?(c.return=s,H=c):Xc(a)}}function Xc(a){for(;H!==null;){var t=H;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:He||Wr(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!He)if(n===null)r.componentDidMount();else{var s=t.elementType===t.type?n.memoizedProps:ha(t.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var c=t.updateQueue;c!==null&&Zl(t,c,r);break;case 3:var p=t.updateQueue;if(p!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Zl(t,p,n)}break;case 5:var g=t.stateNode;if(n===null&&t.flags&4){n=g;var j=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":j.autoFocus&&n.focus();break;case"img":j.src&&(n.src=j.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var E=t.alternate;if(E!==null){var z=E.memoizedState;if(z!==null){var O=z.dehydrated;O!==null&&ln(O)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(l(163))}He||t.flags&512&&Is(t)}catch(R){Se(t,t.return,R)}}if(t===a){H=null;break}if(n=t.sibling,n!==null){n.return=t.return,H=n;break}H=t.return}}function Zc(a){for(;H!==null;){var t=H;if(t===a){H=null;break}var n=t.sibling;if(n!==null){n.return=t.return,H=n;break}H=t.return}}function ed(a){for(;H!==null;){var t=H;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Wr(4,t)}catch(j){Se(t,n,j)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var s=t.return;try{r.componentDidMount()}catch(j){Se(t,s,j)}}var c=t.return;try{Is(t)}catch(j){Se(t,c,j)}break;case 5:var p=t.return;try{Is(t)}catch(j){Se(t,p,j)}}}catch(j){Se(t,t.return,j)}if(t===a){H=null;break}var g=t.sibling;if(g!==null){g.return=t.return,H=g;break}H=t.return}}var rf=Math.ceil,Or=X.ReactCurrentDispatcher,Os=X.ReactCurrentOwner,ca=X.ReactCurrentBatchConfig,se=0,Ie=null,Ee=null,Me=0,na=0,_t=Ua(0),Pe=0,Rn=null,ft=0,Mr=0,Ms=0,Bn=null,Ve=null,Ls=0,Ut=1/0,za=null,Lr=!1,Ds=null,Ka=null,Dr=!1,Qa=null,Fr=0,In=0,Fs=null,Hr=-1,_r=0;function Ue(){return(se&6)!==0?Ce():Hr!==-1?Hr:Hr=Ce()}function qa(a){return(a.mode&1)===0?1:(se&2)!==0&&Me!==0?Me&-Me:Hm.transition!==null?(_r===0&&(_r=Yo()),_r):(a=pe,a!==0||(a=window.event,a=a===void 0?16:tl(a.type)),a)}function ba(a,t,n,r){if(50<In)throw In=0,Fs=null,Error(l(185));tn(a,n,r),((se&2)===0||a!==Ie)&&(a===Ie&&((se&2)===0&&(Mr|=n),Pe===4&&Xa(a,Me)),Ke(a,r),n===1&&se===0&&(t.mode&1)===0&&(Ut=Ce()+500,gr&&Ga()))}function Ke(a,t){var n=a.callbackNode;Hp(a,t);var r=qn(a,a===Ie?Me:0);if(r===0)n!==null&&$o(n),a.callbackNode=null,a.callbackPriority=0;else if(t=r&-r,a.callbackPriority!==t){if(n!=null&&$o(n),t===1)a.tag===0?Fm(td.bind(null,a)):Hl(td.bind(null,a)),Om(function(){(se&6)===0&&Ga()}),n=null;else{switch(Vo(r)){case 1:n=yi;break;case 4:n=Go;break;case 16:n=Yn;break;case 536870912:n=Jo;break;default:n=Yn}n=dd(n,ad.bind(null,a))}a.callbackPriority=t,a.callbackNode=n}}function ad(a,t){if(Hr=-1,_r=0,(se&6)!==0)throw Error(l(327));var n=a.callbackNode;if($t()&&a.callbackNode!==n)return null;var r=qn(a,a===Ie?Me:0);if(r===0)return null;if((r&30)!==0||(r&a.expiredLanes)!==0||t)t=Ur(a,r);else{t=r;var s=se;se|=2;var c=rd();(Ie!==a||Me!==t)&&(za=null,Ut=Ce()+500,ht(a,t));do try{lf();break}catch(g){nd(a,g)}while(!0);rs(),Or.current=c,se=s,Ee!==null?t=0:(Ie=null,Me=0,t=Pe)}if(t!==0){if(t===2&&(s=vi(a),s!==0&&(r=s,t=Hs(a,s))),t===1)throw n=Rn,ht(a,0),Xa(a,r),Ke(a,Ce()),n;if(t===6)Xa(a,r);else{if(s=a.current.alternate,(r&30)===0&&!sf(s)&&(t=Ur(a,r),t===2&&(c=vi(a),c!==0&&(r=c,t=Hs(a,c))),t===1))throw n=Rn,ht(a,0),Xa(a,r),Ke(a,Ce()),n;switch(a.finishedWork=s,a.finishedLanes=r,t){case 0:case 1:throw Error(l(345));case 2:gt(a,Ve,za);break;case 3:if(Xa(a,r),(r&130023424)===r&&(t=Ls+500-Ce(),10<t)){if(qn(a,0)!==0)break;if(s=a.suspendedLanes,(s&r)!==r){Ue(),a.pingedLanes|=a.suspendedLanes&s;break}a.timeoutHandle=Yi(gt.bind(null,a,Ve,za),t);break}gt(a,Ve,za);break;case 4:if(Xa(a,r),(r&4194240)===r)break;for(t=a.eventTimes,s=-1;0<r;){var p=31-ma(r);c=1<<p,p=t[p],p>s&&(s=p),r&=~c}if(r=s,r=Ce()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*rf(r/1960))-r,10<r){a.timeoutHandle=Yi(gt.bind(null,a,Ve,za),r);break}gt(a,Ve,za);break;case 5:gt(a,Ve,za);break;default:throw Error(l(329))}}}return Ke(a,Ce()),a.callbackNode===n?ad.bind(null,a):null}function Hs(a,t){var n=Bn;return a.current.memoizedState.isDehydrated&&(ht(a,t).flags|=256),a=Ur(a,t),a!==2&&(t=Ve,Ve=n,t!==null&&_s(t)),a}function _s(a){Ve===null?Ve=a:Ve.push.apply(Ve,a)}function sf(a){for(var t=a;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],c=s.getSnapshot;s=s.value;try{if(!fa(c(),s))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===a)break;for(;t.sibling===null;){if(t.return===null||t.return===a)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Xa(a,t){for(t&=~Ms,t&=~Mr,a.suspendedLanes|=t,a.pingedLanes&=~t,a=a.expirationTimes;0<t;){var n=31-ma(t),r=1<<n;a[n]=-1,t&=~r}}function td(a){if((se&6)!==0)throw Error(l(327));$t();var t=qn(a,0);if((t&1)===0)return Ke(a,Ce()),null;var n=Ur(a,t);if(a.tag!==0&&n===2){var r=vi(a);r!==0&&(t=r,n=Hs(a,r))}if(n===1)throw n=Rn,ht(a,0),Xa(a,t),Ke(a,Ce()),n;if(n===6)throw Error(l(345));return a.finishedWork=a.current.alternate,a.finishedLanes=t,gt(a,Ve,za),Ke(a,Ce()),null}function Us(a,t){var n=se;se|=1;try{return a(t)}finally{se=n,se===0&&(Ut=Ce()+500,gr&&Ga())}}function ut(a){Qa!==null&&Qa.tag===0&&(se&6)===0&&$t();var t=se;se|=1;var n=ca.transition,r=pe;try{if(ca.transition=null,pe=1,a)return a()}finally{pe=r,ca.transition=n,se=t,(se&6)===0&&Ga()}}function $s(){na=_t.current,ge(_t)}function ht(a,t){a.finishedWork=null,a.finishedLanes=0;var n=a.timeoutHandle;if(n!==-1&&(a.timeoutHandle=-1,Wm(n)),Ee!==null)for(n=Ee.return;n!==null;){var r=n;switch(Zi(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ur();break;case 3:Dt(),ge(Ge),ge(Le),ms();break;case 5:ds(r);break;case 4:Dt();break;case 13:ge(ve);break;case 19:ge(ve);break;case 10:is(r.type._context);break;case 22:case 23:$s()}n=n.return}if(Ie=a,Ee=a=Za(a.current,null),Me=na=t,Pe=0,Rn=null,Ms=Mr=ft=0,Ve=Bn=null,dt!==null){for(t=0;t<dt.length;t++)if(n=dt[t],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,c=n.pending;if(c!==null){var p=c.next;c.next=s,r.next=p}n.pending=r}dt=null}return a}function nd(a,t){do{var n=Ee;try{if(rs(),Nr.current=Pr,Er){for(var r=je.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}Er=!1}if(mt=0,Be=Ae=je=null,kn=!1,Nn=0,Os.current=null,n===null||n.return===null){Pe=1,Rn=t,Ee=null;break}e:{var c=a,p=n.return,g=n,j=t;if(t=Me,g.flags|=32768,j!==null&&typeof j=="object"&&typeof j.then=="function"){var E=j,z=g,O=z.tag;if((z.mode&1)===0&&(O===0||O===11||O===15)){var R=z.alternate;R?(z.updateQueue=R.updateQueue,z.memoizedState=R.memoizedState,z.lanes=R.lanes):(z.updateQueue=null,z.memoizedState=null)}var F=Tc(p);if(F!==null){F.flags&=-257,Ac(F,p,g,c,t),F.mode&1&&Ec(c,E,t),t=F,j=E;var $=t.updateQueue;if($===null){var G=new Set;G.add(j),t.updateQueue=G}else $.add(j);break e}else{if((t&1)===0){Ec(c,E,t),Gs();break e}j=Error(l(426))}}else if(be&&g.mode&1){var ke=Tc(p);if(ke!==null){(ke.flags&65536)===0&&(ke.flags|=256),Ac(ke,p,g,c,t),ts(Ft(j,g));break e}}c=j=Ft(j,g),Pe!==4&&(Pe=2),Bn===null?Bn=[c]:Bn.push(c),c=p;do{switch(c.tag){case 3:c.flags|=65536,t&=-t,c.lanes|=t;var k=kc(c,j,t);Xl(c,k);break e;case 1:g=j;var S=c.type,N=c.stateNode;if((c.flags&128)===0&&(typeof S.getDerivedStateFromError=="function"||N!==null&&typeof N.componentDidCatch=="function"&&(Ka===null||!Ka.has(N)))){c.flags|=65536,t&=-t,c.lanes|=t;var M=Nc(c,g,t);Xl(c,M);break e}}c=c.return}while(c!==null)}sd(n)}catch(Y){t=Y,Ee===n&&n!==null&&(Ee=n=n.return);continue}break}while(!0)}function rd(){var a=Or.current;return Or.current=Pr,a===null?Pr:a}function Gs(){(Pe===0||Pe===3||Pe===2)&&(Pe=4),Ie===null||(ft&268435455)===0&&(Mr&268435455)===0||Xa(Ie,Me)}function Ur(a,t){var n=se;se|=2;var r=rd();(Ie!==a||Me!==t)&&(za=null,ht(a,t));do try{of();break}catch(s){nd(a,s)}while(!0);if(rs(),se=n,Or.current=r,Ee!==null)throw Error(l(261));return Ie=null,Me=0,Pe}function of(){for(;Ee!==null;)id(Ee)}function lf(){for(;Ee!==null&&!Bp();)id(Ee)}function id(a){var t=cd(a.alternate,a,na);a.memoizedProps=a.pendingProps,t===null?sd(a):Ee=t,Os.current=null}function sd(a){var t=a;do{var n=t.alternate;if(a=t.return,(t.flags&32768)===0){if(n=Zm(n,t,na),n!==null){Ee=n;return}}else{if(n=ef(n,t),n!==null){n.flags&=32767,Ee=n;return}if(a!==null)a.flags|=32768,a.subtreeFlags=0,a.deletions=null;else{Pe=6,Ee=null;return}}if(t=t.sibling,t!==null){Ee=t;return}Ee=t=a}while(t!==null);Pe===0&&(Pe=5)}function gt(a,t,n){var r=pe,s=ca.transition;try{ca.transition=null,pe=1,cf(a,t,n,r)}finally{ca.transition=s,pe=r}return null}function cf(a,t,n,r){do $t();while(Qa!==null);if((se&6)!==0)throw Error(l(327));n=a.finishedWork;var s=a.finishedLanes;if(n===null)return null;if(a.finishedWork=null,a.finishedLanes=0,n===a.current)throw Error(l(177));a.callbackNode=null,a.callbackPriority=0;var c=n.lanes|n.childLanes;if(_p(a,c),a===Ie&&(Ee=Ie=null,Me=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Dr||(Dr=!0,dd(Yn,function(){return $t(),null})),c=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||c){c=ca.transition,ca.transition=null;var p=pe;pe=1;var g=se;se|=4,Os.current=null,tf(a,n),Qc(n,a),Tm(Gi),er=!!$i,Gi=$i=null,a.current=n,nf(n),Ip(),se=g,pe=p,ca.transition=c}else a.current=n;if(Dr&&(Dr=!1,Qa=a,Fr=s),c=a.pendingLanes,c===0&&(Ka=null),Op(n.stateNode),Ke(a,Ce()),t!==null)for(r=a.onRecoverableError,n=0;n<t.length;n++)s=t[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(Lr)throw Lr=!1,a=Ds,Ds=null,a;return(Fr&1)!==0&&a.tag!==0&&$t(),c=a.pendingLanes,(c&1)!==0?a===Fs?In++:(In=0,Fs=a):In=0,Ga(),null}function $t(){if(Qa!==null){var a=Vo(Fr),t=ca.transition,n=pe;try{if(ca.transition=null,pe=16>a?16:a,Qa===null)var r=!1;else{if(a=Qa,Qa=null,Fr=0,(se&6)!==0)throw Error(l(331));var s=se;for(se|=4,H=a.current;H!==null;){var c=H,p=c.child;if((H.flags&16)!==0){var g=c.deletions;if(g!==null){for(var j=0;j<g.length;j++){var E=g[j];for(H=E;H!==null;){var z=H;switch(z.tag){case 0:case 11:case 15:Pn(8,z,c)}var O=z.child;if(O!==null)O.return=z,H=O;else for(;H!==null;){z=H;var R=z.sibling,F=z.return;if(Gc(z),z===E){H=null;break}if(R!==null){R.return=F,H=R;break}H=F}}}var $=c.alternate;if($!==null){var G=$.child;if(G!==null){$.child=null;do{var ke=G.sibling;G.sibling=null,G=ke}while(G!==null)}}H=c}}if((c.subtreeFlags&2064)!==0&&p!==null)p.return=c,H=p;else e:for(;H!==null;){if(c=H,(c.flags&2048)!==0)switch(c.tag){case 0:case 11:case 15:Pn(9,c,c.return)}var k=c.sibling;if(k!==null){k.return=c.return,H=k;break e}H=c.return}}var S=a.current;for(H=S;H!==null;){p=H;var N=p.child;if((p.subtreeFlags&2064)!==0&&N!==null)N.return=p,H=N;else e:for(p=S;H!==null;){if(g=H,(g.flags&2048)!==0)try{switch(g.tag){case 0:case 11:case 15:Wr(9,g)}}catch(Y){Se(g,g.return,Y)}if(g===p){H=null;break e}var M=g.sibling;if(M!==null){M.return=g.return,H=M;break e}H=g.return}}if(se=s,Ga(),va&&typeof va.onPostCommitFiberRoot=="function")try{va.onPostCommitFiberRoot(Vn,a)}catch{}r=!0}return r}finally{pe=n,ca.transition=t}}return!1}function od(a,t,n){t=Ft(n,t),t=kc(a,t,1),a=Ya(a,t,1),t=Ue(),a!==null&&(tn(a,1,t),Ke(a,t))}function Se(a,t,n){if(a.tag===3)od(a,a,n);else for(;t!==null;){if(t.tag===3){od(t,a,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ka===null||!Ka.has(r))){a=Ft(n,a),a=Nc(t,a,1),t=Ya(t,a,1),a=Ue(),t!==null&&(tn(t,1,a),Ke(t,a));break}}t=t.return}}function df(a,t,n){var r=a.pingCache;r!==null&&r.delete(t),t=Ue(),a.pingedLanes|=a.suspendedLanes&n,Ie===a&&(Me&n)===n&&(Pe===4||Pe===3&&(Me&130023424)===Me&&500>Ce()-Ls?ht(a,0):Ms|=n),Ke(a,t)}function ld(a,t){t===0&&((a.mode&1)===0?t=1:(t=Qn,Qn<<=1,(Qn&130023424)===0&&(Qn=4194304)));var n=Ue();a=Ra(a,t),a!==null&&(tn(a,t,n),Ke(a,n))}function pf(a){var t=a.memoizedState,n=0;t!==null&&(n=t.retryLane),ld(a,n)}function mf(a,t){var n=0;switch(a.tag){case 13:var r=a.stateNode,s=a.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=a.stateNode;break;default:throw Error(l(314))}r!==null&&r.delete(t),ld(a,n)}var cd;cd=function(a,t,n){if(a!==null)if(a.memoizedProps!==t.pendingProps||Ge.current)Ye=!0;else{if((a.lanes&n)===0&&(t.flags&128)===0)return Ye=!1,Xm(a,t,n);Ye=(a.flags&131072)!==0}else Ye=!1,be&&(t.flags&1048576)!==0&&_l(t,br,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ir(a,t),a=t.pendingProps;var s=Bt(t,Le.current);Lt(t,n),s=hs(null,t,r,a,s,n);var c=gs();return t.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Je(r)?(c=!0,hr(t)):c=!1,t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,ls(t),s.updater=Rr,t.stateNode=s,s._reactInternals=t,ws(t,r,a,n),t=Ns(null,t,r,!0,c,n)):(t.tag=0,be&&c&&Xi(t),_e(null,t,s,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ir(a,t),a=t.pendingProps,s=r._init,r=s(r._payload),t.type=r,s=t.tag=uf(r),a=ha(r,a),s){case 0:t=ks(null,t,r,a,n);break e;case 1:t=Wc(null,t,r,a,n);break e;case 11:t=Pc(null,t,r,a,n);break e;case 14:t=Rc(null,t,r,ha(r.type,a),n);break e}throw Error(l(306,r,""))}return t;case 0:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:ha(r,s),ks(a,t,r,s,n);case 1:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:ha(r,s),Wc(a,t,r,s,n);case 3:e:{if(Oc(t),a===null)throw Error(l(387));r=t.pendingProps,c=t.memoizedState,s=c.element,ql(a,t),Cr(t,r,null,n);var p=t.memoizedState;if(r=p.element,c.isDehydrated)if(c={element:r,isDehydrated:!1,cache:p.cache,pendingSuspenseBoundaries:p.pendingSuspenseBoundaries,transitions:p.transitions},t.updateQueue.baseState=c,t.memoizedState=c,t.flags&256){s=Ft(Error(l(423)),t),t=Mc(a,t,r,n,s);break e}else if(r!==s){s=Ft(Error(l(424)),t),t=Mc(a,t,r,n,s);break e}else for(ta=_a(t.stateNode.containerInfo.firstChild),aa=t,be=!0,ua=null,n=Kl(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Wt(),r===s){t=Ia(a,t,n);break e}_e(a,t,r,n)}t=t.child}return t;case 5:return ec(t),a===null&&as(t),r=t.type,s=t.pendingProps,c=a!==null?a.memoizedProps:null,p=s.children,Ji(r,s)?p=null:c!==null&&Ji(r,c)&&(t.flags|=32),zc(a,t),_e(a,t,p,n),t.child;case 6:return a===null&&as(t),null;case 13:return Lc(a,t,n);case 4:return cs(t,t.stateNode.containerInfo),r=t.pendingProps,a===null?t.child=Ot(t,null,r,n):_e(a,t,r,n),t.child;case 11:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:ha(r,s),Pc(a,t,r,s,n);case 7:return _e(a,t,t.pendingProps,n),t.child;case 8:return _e(a,t,t.pendingProps.children,n),t.child;case 12:return _e(a,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,s=t.pendingProps,c=t.memoizedProps,p=s.value,ue(jr,r._currentValue),r._currentValue=p,c!==null)if(fa(c.value,p)){if(c.children===s.children&&!Ge.current){t=Ia(a,t,n);break e}}else for(c=t.child,c!==null&&(c.return=t);c!==null;){var g=c.dependencies;if(g!==null){p=c.child;for(var j=g.firstContext;j!==null;){if(j.context===r){if(c.tag===1){j=Ba(-1,n&-n),j.tag=2;var E=c.updateQueue;if(E!==null){E=E.shared;var z=E.pending;z===null?j.next=j:(j.next=z.next,z.next=j),E.pending=j}}c.lanes|=n,j=c.alternate,j!==null&&(j.lanes|=n),ss(c.return,n,t),g.lanes|=n;break}j=j.next}}else if(c.tag===10)p=c.type===t.type?null:c.child;else if(c.tag===18){if(p=c.return,p===null)throw Error(l(341));p.lanes|=n,g=p.alternate,g!==null&&(g.lanes|=n),ss(p,n,t),p=c.sibling}else p=c.child;if(p!==null)p.return=c;else for(p=c;p!==null;){if(p===t){p=null;break}if(c=p.sibling,c!==null){c.return=p.return,p=c;break}p=p.return}c=p}_e(a,t,s.children,n),t=t.child}return t;case 9:return s=t.type,r=t.pendingProps.children,Lt(t,n),s=oa(s),r=r(s),t.flags|=1,_e(a,t,r,n),t.child;case 14:return r=t.type,s=ha(r,t.pendingProps),s=ha(r.type,s),Rc(a,t,r,s,n);case 15:return Bc(a,t,t.type,t.pendingProps,n);case 17:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:ha(r,s),Ir(a,t),t.tag=1,Je(r)?(a=!0,hr(t)):a=!1,Lt(t,n),Sc(t,r,s),ws(t,r,s,n),Ns(null,t,r,!0,a,n);case 19:return Fc(a,t,n);case 22:return Ic(a,t,n)}throw Error(l(156,t.tag))};function dd(a,t){return Uo(a,t)}function ff(a,t,n,r){this.tag=a,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function da(a,t,n,r){return new ff(a,t,n,r)}function Js(a){return a=a.prototype,!(!a||!a.isReactComponent)}function uf(a){if(typeof a=="function")return Js(a)?1:0;if(a!=null){if(a=a.$$typeof,a===We)return 11;if(a===ya)return 14}return 2}function Za(a,t){var n=a.alternate;return n===null?(n=da(a.tag,t,a.key,a.mode),n.elementType=a.elementType,n.type=a.type,n.stateNode=a.stateNode,n.alternate=a,a.alternate=n):(n.pendingProps=t,n.type=a.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=a.flags&14680064,n.childLanes=a.childLanes,n.lanes=a.lanes,n.child=a.child,n.memoizedProps=a.memoizedProps,n.memoizedState=a.memoizedState,n.updateQueue=a.updateQueue,t=a.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=a.sibling,n.index=a.index,n.ref=a.ref,n}function $r(a,t,n,r,s,c){var p=2;if(r=a,typeof a=="function")Js(a)&&(p=1);else if(typeof a=="string")p=5;else e:switch(a){case V:return xt(n.children,s,c,t);case J:p=8,s|=8;break;case ye:return a=da(12,n,t,s|2),a.elementType=ye,a.lanes=c,a;case Xe:return a=da(13,n,t,s),a.elementType=Xe,a.lanes=c,a;case pa:return a=da(19,n,t,s),a.elementType=pa,a.lanes=c,a;case we:return Gr(n,s,c,t);default:if(typeof a=="object"&&a!==null)switch(a.$$typeof){case ra:p=10;break e;case qe:p=9;break e;case We:p=11;break e;case ya:p=14;break e;case $e:p=16,r=null;break e}throw Error(l(130,a==null?a:typeof a,""))}return t=da(p,n,t,s),t.elementType=a,t.type=r,t.lanes=c,t}function xt(a,t,n,r){return a=da(7,a,r,t),a.lanes=n,a}function Gr(a,t,n,r){return a=da(22,a,r,t),a.elementType=we,a.lanes=n,a.stateNode={isHidden:!1},a}function Ys(a,t,n){return a=da(6,a,null,t),a.lanes=n,a}function Vs(a,t,n){return t=da(4,a.children!==null?a.children:[],a.key,t),t.lanes=n,t.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation},t}function hf(a,t,n,r,s){this.tag=t,this.containerInfo=a,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ji(0),this.expirationTimes=ji(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ji(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function Ks(a,t,n,r,s,c,p,g,j){return a=new hf(a,t,n,g,j),t===1?(t=1,c===!0&&(t|=8)):t=0,c=da(3,null,null,t),a.current=c,c.stateNode=a,c.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ls(c),a}function gf(a,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:me,key:r==null?null:""+r,children:a,containerInfo:t,implementation:n}}function pd(a){if(!a)return $a;a=a._reactInternals;e:{if(it(a)!==a||a.tag!==1)throw Error(l(170));var t=a;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Je(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(l(171))}if(a.tag===1){var n=a.type;if(Je(n))return Dl(a,n,t)}return t}function md(a,t,n,r,s,c,p,g,j){return a=Ks(n,r,!0,a,s,c,p,g,j),a.context=pd(null),n=a.current,r=Ue(),s=qa(n),c=Ba(r,s),c.callback=t??null,Ya(n,c,s),a.current.lanes=s,tn(a,s,r),Ke(a,r),a}function Jr(a,t,n,r){var s=t.current,c=Ue(),p=qa(s);return n=pd(n),t.context===null?t.context=n:t.pendingContext=n,t=Ba(c,p),t.payload={element:a},r=r===void 0?null:r,r!==null&&(t.callback=r),a=Ya(s,t,p),a!==null&&(ba(a,s,p,c),Sr(a,s,p)),p}function Yr(a){if(a=a.current,!a.child)return null;switch(a.child.tag){case 5:return a.child.stateNode;default:return a.child.stateNode}}function fd(a,t){if(a=a.memoizedState,a!==null&&a.dehydrated!==null){var n=a.retryLane;a.retryLane=n!==0&&n<t?n:t}}function Qs(a,t){fd(a,t),(a=a.alternate)&&fd(a,t)}function xf(){return null}var ud=typeof reportError=="function"?reportError:function(a){console.error(a)};function qs(a){this._internalRoot=a}Vr.prototype.render=qs.prototype.render=function(a){var t=this._internalRoot;if(t===null)throw Error(l(409));Jr(a,t,null,null)},Vr.prototype.unmount=qs.prototype.unmount=function(){var a=this._internalRoot;if(a!==null){this._internalRoot=null;var t=a.containerInfo;ut(function(){Jr(null,a,null,null)}),t[Ea]=null}};function Vr(a){this._internalRoot=a}Vr.prototype.unstable_scheduleHydration=function(a){if(a){var t=qo();a={blockedOn:null,target:a,priority:t};for(var n=0;n<Da.length&&t!==0&&t<Da[n].priority;n++);Da.splice(n,0,a),n===0&&el(a)}};function Xs(a){return!(!a||a.nodeType!==1&&a.nodeType!==9&&a.nodeType!==11)}function Kr(a){return!(!a||a.nodeType!==1&&a.nodeType!==9&&a.nodeType!==11&&(a.nodeType!==8||a.nodeValue!==" react-mount-point-unstable "))}function hd(){}function bf(a,t,n,r,s){if(s){if(typeof r=="function"){var c=r;r=function(){var E=Yr(p);c.call(E)}}var p=md(t,r,a,0,null,!1,!1,"",hd);return a._reactRootContainer=p,a[Ea]=p.current,xn(a.nodeType===8?a.parentNode:a),ut(),p}for(;s=a.lastChild;)a.removeChild(s);if(typeof r=="function"){var g=r;r=function(){var E=Yr(j);g.call(E)}}var j=Ks(a,0,!1,null,null,!1,!1,"",hd);return a._reactRootContainer=j,a[Ea]=j.current,xn(a.nodeType===8?a.parentNode:a),ut(function(){Jr(t,j,n,r)}),j}function Qr(a,t,n,r,s){var c=n._reactRootContainer;if(c){var p=c;if(typeof s=="function"){var g=s;s=function(){var j=Yr(p);g.call(j)}}Jr(t,p,a,s)}else p=bf(n,t,a,s,r);return Yr(p)}Ko=function(a){switch(a.tag){case 3:var t=a.stateNode;if(t.current.memoizedState.isDehydrated){var n=an(t.pendingLanes);n!==0&&(wi(t,n|1),Ke(t,Ce()),(se&6)===0&&(Ut=Ce()+500,Ga()))}break;case 13:ut(function(){var r=Ra(a,1);if(r!==null){var s=Ue();ba(r,a,1,s)}}),Qs(a,1)}},Si=function(a){if(a.tag===13){var t=Ra(a,134217728);if(t!==null){var n=Ue();ba(t,a,134217728,n)}Qs(a,134217728)}},Qo=function(a){if(a.tag===13){var t=qa(a),n=Ra(a,t);if(n!==null){var r=Ue();ba(n,a,t,r)}Qs(a,t)}},qo=function(){return pe},Xo=function(a,t){var n=pe;try{return pe=a,t()}finally{pe=n}},hi=function(a,t,n){switch(t){case"input":if(oi(a,n),t=n.name,n.type==="radio"&&t!=null){for(n=a;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==a&&r.form===a.form){var s=fr(r);if(!s)throw Error(l(90));wo(r),oi(r,s)}}}break;case"textarea":Eo(a,n);break;case"select":t=n.value,t!=null&&vt(a,!!n.multiple,t,!1)}},Oo=Us,Mo=ut;var yf={usingClientEntryPoint:!1,Events:[vn,Pt,fr,zo,Wo,Us]},zn={findFiberByHostInstance:st,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},vf={bundleType:zn.bundleType,version:zn.version,rendererPackageName:zn.rendererPackageName,rendererConfig:zn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:X.ReactCurrentDispatcher,findHostInstanceByFiber:function(a){return a=Ho(a),a===null?null:a.stateNode},findFiberByHostInstance:zn.findFiberByHostInstance||xf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var qr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!qr.isDisabled&&qr.supportsFiber)try{Vn=qr.inject(vf),va=qr}catch{}}return Qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=yf,Qe.createPortal=function(a,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Xs(t))throw Error(l(200));return gf(a,t,null,n)},Qe.createRoot=function(a,t){if(!Xs(a))throw Error(l(299));var n=!1,r="",s=ud;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=Ks(a,1,!1,null,null,n,!1,r,s),a[Ea]=t.current,xn(a.nodeType===8?a.parentNode:a),new qs(t)},Qe.findDOMNode=function(a){if(a==null)return null;if(a.nodeType===1)return a;var t=a._reactInternals;if(t===void 0)throw typeof a.render=="function"?Error(l(188)):(a=Object.keys(a).join(","),Error(l(268,a)));return a=Ho(t),a=a===null?null:a.stateNode,a},Qe.flushSync=function(a){return ut(a)},Qe.hydrate=function(a,t,n){if(!Kr(t))throw Error(l(200));return Qr(null,a,t,!0,n)},Qe.hydrateRoot=function(a,t,n){if(!Xs(a))throw Error(l(405));var r=n!=null&&n.hydratedSources||null,s=!1,c="",p=ud;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(c=n.identifierPrefix),n.onRecoverableError!==void 0&&(p=n.onRecoverableError)),t=md(t,null,a,1,n??null,s,!1,c,p),a[Ea]=t.current,xn(a),r)for(a=0;a<r.length;a++)n=r[a],s=n._getVersion,s=s(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,s]:t.mutableSourceEagerHydrationData.push(n,s);return new Vr(t)},Qe.render=function(a,t,n){if(!Kr(t))throw Error(l(200));return Qr(null,a,t,!1,n)},Qe.unmountComponentAtNode=function(a){if(!Kr(a))throw Error(l(40));return a._reactRootContainer?(ut(function(){Qr(null,null,a,!1,function(){a._reactRootContainer=null,a[Ea]=null})}),!0):!1},Qe.unstable_batchedUpdates=Us,Qe.unstable_renderSubtreeIntoContainer=function(a,t,n,r){if(!Kr(n))throw Error(l(200));if(a==null||a._reactInternals===void 0)throw Error(l(38));return Qr(a,t,n,!1,r)},Qe.version="18.3.1-next-f1338f8080-20240426",Qe}var Sd;function np(){if(Sd)return ao.exports;Sd=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(o){console.error(o)}}return i(),ao.exports=Rf(),ao.exports}var Cd;function Bf(){if(Cd)return Xr;Cd=1;var i=np();return Xr.createRoot=i.createRoot,Xr.hydrateRoot=i.hydrateRoot,Xr}var If=Bf();np();/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Dn(){return Dn=Object.assign?Object.assign.bind():function(i){for(var o=1;o<arguments.length;o++){var l=arguments[o];for(var d in l)Object.prototype.hasOwnProperty.call(l,d)&&(i[d]=l[d])}return i},Dn.apply(this,arguments)}var tt;(function(i){i.Pop="POP",i.Push="PUSH",i.Replace="REPLACE"})(tt||(tt={}));const kd="popstate";function zf(i){i===void 0&&(i={});function o(d,m){let{pathname:f,search:u,hash:w}=d.location;return mo("",{pathname:f,search:u,hash:w},m.state&&m.state.usr||null,m.state&&m.state.key||"default")}function l(d,m){return typeof m=="string"?m:ni(m)}return Of(o,l,null,i)}function Te(i,o){if(i===!1||i===null||typeof i>"u")throw new Error(o)}function bo(i,o){if(!i){typeof console<"u"&&console.warn(o);try{throw new Error(o)}catch{}}}function Wf(){return Math.random().toString(36).substr(2,8)}function Nd(i,o){return{usr:i.state,key:i.key,idx:o}}function mo(i,o,l,d){return l===void 0&&(l=null),Dn({pathname:typeof i=="string"?i:i.pathname,search:"",hash:""},typeof o=="string"?Vt(o):o,{state:l,key:o&&o.key||d||Wf()})}function ni(i){let{pathname:o="/",search:l="",hash:d=""}=i;return l&&l!=="?"&&(o+=l.charAt(0)==="?"?l:"?"+l),d&&d!=="#"&&(o+=d.charAt(0)==="#"?d:"#"+d),o}function Vt(i){let o={};if(i){let l=i.indexOf("#");l>=0&&(o.hash=i.substr(l),i=i.substr(0,l));let d=i.indexOf("?");d>=0&&(o.search=i.substr(d),i=i.substr(0,d)),i&&(o.pathname=i)}return o}function Of(i,o,l,d){d===void 0&&(d={});let{window:m=document.defaultView,v5Compat:f=!1}=d,u=m.history,w=tt.Pop,b=null,v=x();v==null&&(v=0,u.replaceState(Dn({},u.state,{idx:v}),""));function x(){return(u.state||{idx:null}).idx}function h(){w=tt.Pop;let L=x(),B=L==null?null:L-v;v=L,b&&b({action:w,location:W.location,delta:B})}function T(L,B){w=tt.Push;let A=mo(W.location,L,B);v=x()+1;let _=Nd(A,v),X=W.createHref(A);try{u.pushState(_,"",X)}catch(ie){if(ie instanceof DOMException&&ie.name==="DataCloneError")throw ie;m.location.assign(X)}f&&b&&b({action:w,location:W.location,delta:1})}function P(L,B){w=tt.Replace;let A=mo(W.location,L,B);v=x();let _=Nd(A,v),X=W.createHref(A);u.replaceState(_,"",X),f&&b&&b({action:w,location:W.location,delta:0})}function K(L){let B=m.location.origin!=="null"?m.location.origin:m.location.href,A=typeof L=="string"?L:ni(L);return A=A.replace(/ $/,"%20"),Te(B,"No window.location.(origin|href) available to create URL for href: "+A),new URL(A,B)}let W={get action(){return w},get location(){return i(m,u)},listen(L){if(b)throw new Error("A history only accepts one active listener");return m.addEventListener(kd,h),b=L,()=>{m.removeEventListener(kd,h),b=null}},createHref(L){return o(m,L)},createURL:K,encodeLocation(L){let B=K(L);return{pathname:B.pathname,search:B.search,hash:B.hash}},push:T,replace:P,go(L){return u.go(L)}};return W}var Ed;(function(i){i.data="data",i.deferred="deferred",i.redirect="redirect",i.error="error"})(Ed||(Ed={}));function Mf(i,o,l){return l===void 0&&(l="/"),Lf(i,o,l)}function Lf(i,o,l,d){let m=typeof o=="string"?Vt(o):o,f=yo(m.pathname||"/",l);if(f==null)return null;let u=rp(i);Df(u);let w=null;for(let b=0;w==null&&b<u.length;++b){let v=qf(f);w=Vf(u[b],v)}return w}function rp(i,o,l,d){o===void 0&&(o=[]),l===void 0&&(l=[]),d===void 0&&(d="");let m=(f,u,w)=>{let b={relativePath:w===void 0?f.path||"":w,caseSensitive:f.caseSensitive===!0,childrenIndex:u,route:f};b.relativePath.startsWith("/")&&(Te(b.relativePath.startsWith(d),'Absolute route path "'+b.relativePath+'" nested under path '+('"'+d+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),b.relativePath=b.relativePath.slice(d.length));let v=nt([d,b.relativePath]),x=l.concat(b);f.children&&f.children.length>0&&(Te(f.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+v+'".')),rp(f.children,o,x,v)),!(f.path==null&&!f.index)&&o.push({path:v,score:Jf(v,f.index),routesMeta:x})};return i.forEach((f,u)=>{var w;if(f.path===""||!((w=f.path)!=null&&w.includes("?")))m(f,u);else for(let b of ip(f.path))m(f,u,b)}),o}function ip(i){let o=i.split("/");if(o.length===0)return[];let[l,...d]=o,m=l.endsWith("?"),f=l.replace(/\?$/,"");if(d.length===0)return m?[f,""]:[f];let u=ip(d.join("/")),w=[];return w.push(...u.map(b=>b===""?f:[f,b].join("/"))),m&&w.push(...u),w.map(b=>i.startsWith("/")&&b===""?"/":b)}function Df(i){i.sort((o,l)=>o.score!==l.score?l.score-o.score:Yf(o.routesMeta.map(d=>d.childrenIndex),l.routesMeta.map(d=>d.childrenIndex)))}const Ff=/^:[\w-]+$/,Hf=3,_f=2,Uf=1,$f=10,Gf=-2,Td=i=>i==="*";function Jf(i,o){let l=i.split("/"),d=l.length;return l.some(Td)&&(d+=Gf),o&&(d+=_f),l.filter(m=>!Td(m)).reduce((m,f)=>m+(Ff.test(f)?Hf:f===""?Uf:$f),d)}function Yf(i,o){return i.length===o.length&&i.slice(0,-1).every((d,m)=>d===o[m])?i[i.length-1]-o[o.length-1]:0}function Vf(i,o,l){let{routesMeta:d}=i,m={},f="/",u=[];for(let w=0;w<d.length;++w){let b=d[w],v=w===d.length-1,x=f==="/"?o:o.slice(f.length)||"/",h=Kf({path:b.relativePath,caseSensitive:b.caseSensitive,end:v},x),T=b.route;if(!h)return null;Object.assign(m,h.params),u.push({params:m,pathname:nt([f,h.pathname]),pathnameBase:tu(nt([f,h.pathnameBase])),route:T}),h.pathnameBase!=="/"&&(f=nt([f,h.pathnameBase]))}return u}function Kf(i,o){typeof i=="string"&&(i={path:i,caseSensitive:!1,end:!0});let[l,d]=Qf(i.path,i.caseSensitive,i.end),m=o.match(l);if(!m)return null;let f=m[0],u=f.replace(/(.)\/+$/,"$1"),w=m.slice(1);return{params:d.reduce((v,x,h)=>{let{paramName:T,isOptional:P}=x;if(T==="*"){let W=w[h]||"";u=f.slice(0,f.length-W.length).replace(/(.)\/+$/,"$1")}const K=w[h];return P&&!K?v[T]=void 0:v[T]=(K||"").replace(/%2F/g,"/"),v},{}),pathname:f,pathnameBase:u,pattern:i}}function Qf(i,o,l){o===void 0&&(o=!1),l===void 0&&(l=!0),bo(i==="*"||!i.endsWith("*")||i.endsWith("/*"),'Route path "'+i+'" will be treated as if it were '+('"'+i.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+i.replace(/\*$/,"/*")+'".'));let d=[],m="^"+i.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(u,w,b)=>(d.push({paramName:w,isOptional:b!=null}),b?"/?([^\\/]+)?":"/([^\\/]+)"));return i.endsWith("*")?(d.push({paramName:"*"}),m+=i==="*"||i==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):l?m+="\\/*$":i!==""&&i!=="/"&&(m+="(?:(?=\\/|$))"),[new RegExp(m,o?void 0:"i"),d]}function qf(i){try{return i.split("/").map(o=>decodeURIComponent(o).replace(/\//g,"%2F")).join("/")}catch(o){return bo(!1,'The URL path "'+i+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+o+").")),i}}function yo(i,o){if(o==="/")return i;if(!i.toLowerCase().startsWith(o.toLowerCase()))return null;let l=o.endsWith("/")?o.length-1:o.length,d=i.charAt(l);return d&&d!=="/"?null:i.slice(l)||"/"}const Xf=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Zf=i=>Xf.test(i);function eu(i,o){o===void 0&&(o="/");let{pathname:l,search:d="",hash:m=""}=typeof i=="string"?Vt(i):i,f;if(l)if(Zf(l))f=l;else{if(l.includes("//")){let u=l;l=l.replace(/\/\/+/g,"/"),bo(!1,"Pathnames cannot have embedded double slashes - normalizing "+(u+" -> "+l))}l.startsWith("/")?f=Ad(l.substring(1),"/"):f=Ad(l,o)}else f=o;return{pathname:f,search:nu(d),hash:ru(m)}}function Ad(i,o){let l=o.replace(/\/+$/,"").split("/");return i.split("/").forEach(m=>{m===".."?l.length>1&&l.pop():m!=="."&&l.push(m)}),l.length>1?l.join("/"):"/"}function ro(i,o,l,d){return"Cannot include a '"+i+"' character in a manually specified "+("`to."+o+"` field ["+JSON.stringify(d)+"].  Please separate it out to the ")+("`to."+l+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function au(i){return i.filter((o,l)=>l===0||o.route.path&&o.route.path.length>0)}function sp(i,o){let l=au(i);return o?l.map((d,m)=>m===l.length-1?d.pathname:d.pathnameBase):l.map(d=>d.pathnameBase)}function op(i,o,l,d){d===void 0&&(d=!1);let m;typeof i=="string"?m=Vt(i):(m=Dn({},i),Te(!m.pathname||!m.pathname.includes("?"),ro("?","pathname","search",m)),Te(!m.pathname||!m.pathname.includes("#"),ro("#","pathname","hash",m)),Te(!m.search||!m.search.includes("#"),ro("#","search","hash",m)));let f=i===""||m.pathname==="",u=f?"/":m.pathname,w;if(u==null)w=l;else{let h=o.length-1;if(!d&&u.startsWith("..")){let T=u.split("/");for(;T[0]==="..";)T.shift(),h-=1;m.pathname=T.join("/")}w=h>=0?o[h]:"/"}let b=eu(m,w),v=u&&u!=="/"&&u.endsWith("/"),x=(f||u===".")&&l.endsWith("/");return!b.pathname.endsWith("/")&&(v||x)&&(b.pathname+="/"),b}const nt=i=>i.join("/").replace(/\/\/+/g,"/"),tu=i=>i.replace(/\/+$/,"").replace(/^\/*/,"/"),nu=i=>!i||i==="?"?"":i.startsWith("?")?i:"?"+i,ru=i=>!i||i==="#"?"":i.startsWith("#")?i:"#"+i;function iu(i){return i!=null&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.internal=="boolean"&&"data"in i}const lp=["post","put","patch","delete"];new Set(lp);const su=["get",...lp];new Set(su);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Fn(){return Fn=Object.assign?Object.assign.bind():function(i){for(var o=1;o<arguments.length;o++){var l=arguments[o];for(var d in l)Object.prototype.hasOwnProperty.call(l,d)&&(i[d]=l[d])}return i},Fn.apply(this,arguments)}const vo=y.createContext(null),ou=y.createContext(null),bt=y.createContext(null),ri=y.createContext(null),yt=y.createContext({outlet:null,matches:[],isDataRoute:!1}),cp=y.createContext(null);function lu(i,o){let{relative:l}=o===void 0?{}:o;Hn()||Te(!1);let{basename:d,navigator:m}=y.useContext(bt),{hash:f,pathname:u,search:w}=pp(i,{relative:l}),b=u;return d!=="/"&&(b=u==="/"?d:nt([d,u])),m.createHref({pathname:b,search:w,hash:f})}function Hn(){return y.useContext(ri)!=null}function rt(){return Hn()||Te(!1),y.useContext(ri).location}function dp(i){y.useContext(bt).static||y.useLayoutEffect(i)}function ii(){let{isDataRoute:i}=y.useContext(yt);return i?ju():cu()}function cu(){Hn()||Te(!1);let i=y.useContext(vo),{basename:o,future:l,navigator:d}=y.useContext(bt),{matches:m}=y.useContext(yt),{pathname:f}=rt(),u=JSON.stringify(sp(m,l.v7_relativeSplatPath)),w=y.useRef(!1);return dp(()=>{w.current=!0}),y.useCallback(function(v,x){if(x===void 0&&(x={}),!w.current)return;if(typeof v=="number"){d.go(v);return}let h=op(v,JSON.parse(u),f,x.relative==="path");i==null&&o!=="/"&&(h.pathname=h.pathname==="/"?o:nt([o,h.pathname])),(x.replace?d.replace:d.push)(h,x.state,x)},[o,d,u,f,i])}function pp(i,o){let{relative:l}=o===void 0?{}:o,{future:d}=y.useContext(bt),{matches:m}=y.useContext(yt),{pathname:f}=rt(),u=JSON.stringify(sp(m,d.v7_relativeSplatPath));return y.useMemo(()=>op(i,JSON.parse(u),f,l==="path"),[i,u,f,l])}function du(i,o){return pu(i,o)}function pu(i,o,l,d){Hn()||Te(!1);let{navigator:m}=y.useContext(bt),{matches:f}=y.useContext(yt),u=f[f.length-1],w=u?u.params:{};u&&u.pathname;let b=u?u.pathnameBase:"/";u&&u.route;let v=rt(),x;if(o){var h;let L=typeof o=="string"?Vt(o):o;b==="/"||(h=L.pathname)!=null&&h.startsWith(b)||Te(!1),x=L}else x=v;let T=x.pathname||"/",P=T;if(b!=="/"){let L=b.replace(/^\//,"").split("/");P="/"+T.replace(/^\//,"").split("/").slice(L.length).join("/")}let K=Mf(i,{pathname:P}),W=gu(K&&K.map(L=>Object.assign({},L,{params:Object.assign({},w,L.params),pathname:nt([b,m.encodeLocation?m.encodeLocation(L.pathname).pathname:L.pathname]),pathnameBase:L.pathnameBase==="/"?b:nt([b,m.encodeLocation?m.encodeLocation(L.pathnameBase).pathname:L.pathnameBase])})),f,l,d);return o&&W?y.createElement(ri.Provider,{value:{location:Fn({pathname:"/",search:"",hash:"",state:null,key:"default"},x),navigationType:tt.Pop}},W):W}function mu(){let i=vu(),o=iu(i)?i.status+" "+i.statusText:i instanceof Error?i.message:JSON.stringify(i),l=i instanceof Error?i.stack:null,m={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return y.createElement(y.Fragment,null,y.createElement("h2",null,"Unexpected Application Error!"),y.createElement("h3",{style:{fontStyle:"italic"}},o),l?y.createElement("pre",{style:m},l):null,null)}const fu=y.createElement(mu,null);class uu extends y.Component{constructor(o){super(o),this.state={location:o.location,revalidation:o.revalidation,error:o.error}}static getDerivedStateFromError(o){return{error:o}}static getDerivedStateFromProps(o,l){return l.location!==o.location||l.revalidation!=="idle"&&o.revalidation==="idle"?{error:o.error,location:o.location,revalidation:o.revalidation}:{error:o.error!==void 0?o.error:l.error,location:l.location,revalidation:o.revalidation||l.revalidation}}componentDidCatch(o,l){console.error("React Router caught the following error during render",o,l)}render(){return this.state.error!==void 0?y.createElement(yt.Provider,{value:this.props.routeContext},y.createElement(cp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function hu(i){let{routeContext:o,match:l,children:d}=i,m=y.useContext(vo);return m&&m.static&&m.staticContext&&(l.route.errorElement||l.route.ErrorBoundary)&&(m.staticContext._deepestRenderedBoundaryId=l.route.id),y.createElement(yt.Provider,{value:o},d)}function gu(i,o,l,d){var m;if(o===void 0&&(o=[]),l===void 0&&(l=null),d===void 0&&(d=null),i==null){var f;if(!l)return null;if(l.errors)i=l.matches;else if((f=d)!=null&&f.v7_partialHydration&&o.length===0&&!l.initialized&&l.matches.length>0)i=l.matches;else return null}let u=i,w=(m=l)==null?void 0:m.errors;if(w!=null){let x=u.findIndex(h=>h.route.id&&(w==null?void 0:w[h.route.id])!==void 0);x>=0||Te(!1),u=u.slice(0,Math.min(u.length,x+1))}let b=!1,v=-1;if(l&&d&&d.v7_partialHydration)for(let x=0;x<u.length;x++){let h=u[x];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(v=x),h.route.id){let{loaderData:T,errors:P}=l,K=h.route.loader&&T[h.route.id]===void 0&&(!P||P[h.route.id]===void 0);if(h.route.lazy||K){b=!0,v>=0?u=u.slice(0,v+1):u=[u[0]];break}}}return u.reduceRight((x,h,T)=>{let P,K=!1,W=null,L=null;l&&(P=w&&h.route.id?w[h.route.id]:void 0,W=h.route.errorElement||fu,b&&(v<0&&T===0?(wu("route-fallback"),K=!0,L=null):v===T&&(K=!0,L=h.route.hydrateFallbackElement||null)));let B=o.concat(u.slice(0,T+1)),A=()=>{let _;return P?_=W:K?_=L:h.route.Component?_=y.createElement(h.route.Component,null):h.route.element?_=h.route.element:_=x,y.createElement(hu,{match:h,routeContext:{outlet:x,matches:B,isDataRoute:l!=null},children:_})};return l&&(h.route.ErrorBoundary||h.route.errorElement||T===0)?y.createElement(uu,{location:l.location,revalidation:l.revalidation,component:W,error:P,children:A(),routeContext:{outlet:null,matches:B,isDataRoute:!0}}):A()},null)}var mp=(function(i){return i.UseBlocker="useBlocker",i.UseRevalidator="useRevalidator",i.UseNavigateStable="useNavigate",i})(mp||{}),fp=(function(i){return i.UseBlocker="useBlocker",i.UseLoaderData="useLoaderData",i.UseActionData="useActionData",i.UseRouteError="useRouteError",i.UseNavigation="useNavigation",i.UseRouteLoaderData="useRouteLoaderData",i.UseMatches="useMatches",i.UseRevalidator="useRevalidator",i.UseNavigateStable="useNavigate",i.UseRouteId="useRouteId",i})(fp||{});function xu(i){let o=y.useContext(vo);return o||Te(!1),o}function bu(i){let o=y.useContext(ou);return o||Te(!1),o}function yu(i){let o=y.useContext(yt);return o||Te(!1),o}function up(i){let o=yu(),l=o.matches[o.matches.length-1];return l.route.id||Te(!1),l.route.id}function vu(){var i;let o=y.useContext(cp),l=bu(),d=up();return o!==void 0?o:(i=l.errors)==null?void 0:i[d]}function ju(){let{router:i}=xu(mp.UseNavigateStable),o=up(fp.UseNavigateStable),l=y.useRef(!1);return dp(()=>{l.current=!0}),y.useCallback(function(m,f){f===void 0&&(f={}),l.current&&(typeof m=="number"?i.navigate(m):i.navigate(m,Fn({fromRouteId:o},f)))},[i,o])}const Pd={};function wu(i,o,l){Pd[i]||(Pd[i]=!0)}function Su(i,o){i==null||i.v7_startTransition,i==null||i.v7_relativeSplatPath}function ee(i){Te(!1)}function Cu(i){let{basename:o="/",children:l=null,location:d,navigationType:m=tt.Pop,navigator:f,static:u=!1,future:w}=i;Hn()&&Te(!1);let b=o.replace(/^\/*/,"/"),v=y.useMemo(()=>({basename:b,navigator:f,static:u,future:Fn({v7_relativeSplatPath:!1},w)}),[b,w,f,u]);typeof d=="string"&&(d=Vt(d));let{pathname:x="/",search:h="",hash:T="",state:P=null,key:K="default"}=d,W=y.useMemo(()=>{let L=yo(x,b);return L==null?null:{location:{pathname:L,search:h,hash:T,state:P,key:K},navigationType:m}},[b,x,h,T,P,K,m]);return W==null?null:y.createElement(bt.Provider,{value:v},y.createElement(ri.Provider,{children:l,value:W}))}function ku(i){let{children:o,location:l}=i;return du(fo(o),l)}new Promise(()=>{});function fo(i,o){o===void 0&&(o=[]);let l=[];return y.Children.forEach(i,(d,m)=>{if(!y.isValidElement(d))return;let f=[...o,m];if(d.type===y.Fragment){l.push.apply(l,fo(d.props.children,f));return}d.type!==ee&&Te(!1),!d.props.index||!d.props.children||Te(!1);let u={id:d.props.id||f.join("-"),caseSensitive:d.props.caseSensitive,element:d.props.element,Component:d.props.Component,index:d.props.index,path:d.props.path,loader:d.props.loader,action:d.props.action,errorElement:d.props.errorElement,ErrorBoundary:d.props.ErrorBoundary,hasErrorBoundary:d.props.ErrorBoundary!=null||d.props.errorElement!=null,shouldRevalidate:d.props.shouldRevalidate,handle:d.props.handle,lazy:d.props.lazy};d.props.children&&(u.children=fo(d.props.children,f)),l.push(u)}),l}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function uo(){return uo=Object.assign?Object.assign.bind():function(i){for(var o=1;o<arguments.length;o++){var l=arguments[o];for(var d in l)Object.prototype.hasOwnProperty.call(l,d)&&(i[d]=l[d])}return i},uo.apply(this,arguments)}function Nu(i,o){if(i==null)return{};var l={},d=Object.keys(i),m,f;for(f=0;f<d.length;f++)m=d[f],!(o.indexOf(m)>=0)&&(l[m]=i[m]);return l}function Eu(i){return!!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)}function Tu(i,o){return i.button===0&&(!o||o==="_self")&&!Eu(i)}const Au=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Pu="6";try{window.__reactRouterVersion=Pu}catch{}const Ru="startTransition",Rd=Tf[Ru];function Bu(i){let{basename:o,children:l,future:d,window:m}=i,f=y.useRef();f.current==null&&(f.current=zf({window:m,v5Compat:!0}));let u=f.current,[w,b]=y.useState({action:u.action,location:u.location}),{v7_startTransition:v}=d||{},x=y.useCallback(h=>{v&&Rd?Rd(()=>b(h)):b(h)},[b,v]);return y.useLayoutEffect(()=>u.listen(x),[u,x]),y.useEffect(()=>Su(d),[d]),y.createElement(Cu,{basename:o,children:l,location:w.location,navigationType:w.action,navigator:u,future:d})}const Iu=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",zu=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ne=y.forwardRef(function(o,l){let{onClick:d,relative:m,reloadDocument:f,replace:u,state:w,target:b,to:v,preventScrollReset:x,viewTransition:h}=o,T=Nu(o,Au),{basename:P}=y.useContext(bt),K,W=!1;if(typeof v=="string"&&zu.test(v)&&(K=v,Iu))try{let _=new URL(window.location.href),X=v.startsWith("//")?new URL(_.protocol+v):new URL(v),ie=yo(X.pathname,P);X.origin===_.origin&&ie!=null?v=ie+X.search+X.hash:W=!0}catch{}let L=lu(v,{relative:m}),B=Wu(v,{replace:u,state:w,target:b,preventScrollReset:x,relative:m,viewTransition:h});function A(_){d&&d(_),_.defaultPrevented||B(_)}return y.createElement("a",uo({},T,{href:K||L,onClick:W||f?d:A,ref:l,target:b}))});var Bd;(function(i){i.UseScrollRestoration="useScrollRestoration",i.UseSubmit="useSubmit",i.UseSubmitFetcher="useSubmitFetcher",i.UseFetcher="useFetcher",i.useViewTransitionState="useViewTransitionState"})(Bd||(Bd={}));var Id;(function(i){i.UseFetcher="useFetcher",i.UseFetchers="useFetchers",i.UseScrollRestoration="useScrollRestoration"})(Id||(Id={}));function Wu(i,o){let{target:l,replace:d,state:m,preventScrollReset:f,relative:u,viewTransition:w}=o===void 0?{}:o,b=ii(),v=rt(),x=pp(i,{relative:u});return y.useCallback(h=>{if(Tu(h,l)){h.preventDefault();let T=d!==void 0?d:ni(v)===ni(x);b(i,{replace:T,state:m,preventScrollReset:f,relative:u,viewTransition:w})}},[v,b,x,d,m,l,i,f,u,w])}function Ou(){const{pathname:i}=rt();return y.useEffect(()=>{window.scrollTo(0,0),document.documentElement.scrollTop=0,document.body.scrollTop=0,setTimeout(()=>{window.scrollTo(0,0),document.documentElement.scrollTop=0,document.body.scrollTop=0},0),setTimeout(()=>{window.scrollTo(0,0),document.documentElement.scrollTop=0,document.body.scrollTop=0},10)},[i]),null}function Mu(){const i="ଆମ ମହାବିଦ୍ୟାଳୟ ରେ ଆପଣଙ୍କୁ ସ୍ୱାଗତ | Creative Techno College, Angul — AICTE Approved & Affiliated to Utkal University | Admissions Open for 2026-27 | BBA | BCA | B.Sc (CS) | B.Sc (Data Science) | 100% Placement Assistance | Contact: +91 9778427170";return e.jsx("div",{className:"marquee-bar",children:e.jsxs("div",{className:"marquee-track-wrap",children:[e.jsx("span",{className:"marquee-item",children:i}),e.jsx("span",{className:"marquee-item marquee-odia",children:"ଆମ ମହାବିଦ୍ୟାଳୟ ରେ ଆପଣଙ୍କୁ ସ୍ୱାଗତ |  "}),e.jsx("span",{className:"marquee-item",children:i}),e.jsx("span",{className:"marquee-item marquee-odia",children:"ଆମ ମହାବିଦ୍ୟାଳୟ ରେ ଆପଣଙ୍କୁ ସ୍ୱାଗତ |  "})]})})}const Lu=[{label:"Home",to:"/"},{label:"About",children:[{label:"About Trust",to:"/about/trust"},{label:"About CTC",to:"/about/ctc"},{label:"Our Team",to:"/about/team"}]},{label:"Admission",to:"/admission"},{label:"Academics",children:[{label:"Courses",children:[{label:"Regular Courses",to:"/academics/regular"},{label:"Value Added Courses",to:"/academics/value-added"}]},{label:"Enhancement Programs",to:"/academics/enhancement"}]},{label:"Placement",children:[{label:"Development Program",to:"/placement/programs"},{label:"Placement Statistics",to:"/placement/statistics"},{label:"Placement Brochure",to:"/placement/brochure"}]},{label:"Gymkhana",to:"/gymkhana"},{label:"Gallery",to:"/gallery"},{label:"IQAC",children:[{label:"IQAC Item 1",to:"/iqac/item1"},{label:"IQAC Item 2",to:"/iqac/item2"},{label:"IQAC Item 3",to:"/iqac/item3"},{label:"IQAC Item 4",to:"/iqac/item4"}]},{label:"AICTE",children:[{label:"LOA 2024-25",to:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/LOA Report 2024-2025.PDF",external:!0,newTab:!0},{label:"EOA 2025-26",to:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/EOA Report 2025-26.PDF",external:!0,newTab:!0},{label:"Documents",to:"/aicte/documents"},{label:"Mandatory Disclosure",to:"/aicte/mandatory-disclosure"}]},{label:"CKF Skills",to:"/ckf-skills"},{label:"Contacts",to:"/contacts"},{label:"ICC",to:"/icc"},{label:"GRC",to:"/grc"},{label:"Logins",children:[{label:"Portal Login",to:"/login"},{label:"NBA",to:"/nba"},{label:"NAAC",to:"/naac"}]}],zd="#0a1628",Wd="#e8f0fe",Wa={dropdown:{position:"absolute",top:"100%",left:0,minWidth:210,background:zd,borderRadius:10,boxShadow:"0 8px 32px rgba(10,22,40,0.35)",listStyle:"none",padding:"6px 0",margin:0,zIndex:9999,border:"1px solid rgba(255,255,255,0.1)"},subDropdown:{position:"absolute",top:0,left:"100%",minWidth:210,background:zd,borderRadius:10,boxShadow:"0 8px 32px rgba(10,22,40,0.35)",listStyle:"none",padding:"6px 0",margin:0,zIndex:9999,border:"1px solid rgba(255,255,255,0.1)"},mobileNested:{position:"static",boxShadow:"none",borderRadius:0,paddingLeft:18,background:"rgba(0,0,0,0.2)",listStyle:"none",margin:0,border:"none"},li:{position:"relative"},link:{display:"block",padding:"9px 20px",color:Wd,textDecoration:"none",fontSize:"0.88rem",fontWeight:600,whiteSpace:"nowrap"},trigger:{display:"flex",alignItems:"center",gap:6,padding:"9px 20px",color:Wd,fontSize:"0.88rem",fontWeight:600,whiteSpace:"nowrap",cursor:"pointer",userSelect:"none"}};function hp({item:i,isMobile:o,onClose:l}){const[d,m]=y.useState(!1),f=()=>m(v=>!v),u=()=>m(!0),w=()=>m(!1);if(!i.children){const v=i.external?e.jsx("a",{href:i.to,target:i.newTab?"_blank":"_self",rel:"noreferrer",style:Wa.link,onClick:l,children:i.label}):e.jsx(Ne,{to:i.to,style:Wa.link,onClick:l,children:i.label});return e.jsx("li",{style:Wa.li,onMouseEnter:x=>{var h;return((h=x.currentTarget.querySelector("a,span"))==null?void 0:h.style)&&(x.currentTarget.style.background="#2563eb")},onMouseLeave:x=>x.currentTarget.style.background="",children:v})}const b=o?Wa.mobileNested:Wa.subDropdown;return e.jsxs("li",{style:Wa.li,onMouseEnter:o?void 0:u,onMouseLeave:o?void 0:w,children:[e.jsxs("div",{style:{...Wa.trigger,background:d?"#2563eb":""},onClick:o?f:void 0,children:[i.label,e.jsx("i",{className:"fa-solid fa-chevron-right",style:{fontSize:"0.5rem",marginLeft:"auto",transform:d?"rotate(90deg)":"none",transition:"transform 0.22s"}})]}),d&&e.jsx("ul",{style:b,children:i.children.map((v,x)=>e.jsx(hp,{item:v,isMobile:o,onClose:l},x))})]})}function Du({item:i,isMobile:o,onClose:l,isActive:d}){const[m,f]=y.useState(!1),u=rt();y.useEffect(()=>{f(!1)},[u]);const w=()=>{o||f(!0)},b=()=>{o||f(!1)},v=()=>{o&&f(x=>!x)};return e.jsxs("li",{className:"nav-item",style:{position:"relative"},onMouseEnter:w,onMouseLeave:b,children:[e.jsxs("span",{className:`nav-trigger${d?" active":""}`,onClick:v,children:[i.label,e.jsx("i",{className:"fa-solid fa-chevron-down nav-arrow",style:{transform:m?"rotate(180deg)":"rotate(0)",transition:"transform 0.22s"}})]}),m&&e.jsx("ul",{style:o?{...Wa.dropdown,position:"static",boxShadow:"none",background:"rgba(0,0,0,0.2)",border:"none"}:Wa.dropdown,children:i.children.map((x,h)=>e.jsx(hp,{item:x,isMobile:o,onClose:()=>{f(!1),l()}},h))})]})}function Fu(){const[i,o]=y.useState(!1),l=rt();return y.useEffect(()=>{o(!1)},[l]),y.useEffect(()=>{const d=m=>{m.target.closest(".navbar")||o(!1)};return document.addEventListener("mousedown",d),()=>document.removeEventListener("mousedown",d)},[]),e.jsxs("nav",{className:"navbar",children:[e.jsx("ul",{className:`nav-list${i?" open":""}`,children:Lu.map((d,m)=>d.children?e.jsx(Du,{item:d,isMobile:i,onClose:()=>o(!1),isActive:l.pathname.startsWith("/"+d.label.toLowerCase())},m):e.jsx("li",{className:"nav-item",children:e.jsx(Ne,{to:d.to,className:`nav-link${l.pathname===d.to?" active":""}`,onClick:()=>o(!1),children:d.label})},m))}),e.jsxs("button",{className:`hamburger${i?" open":""}`,onClick:()=>o(d=>!d),"aria-label":"Toggle menu",children:[e.jsx("span",{}),e.jsx("span",{}),e.jsx("span",{})]})]})}function Hu(){return e.jsxs("footer",{className:"site-footer",children:[e.jsxs("div",{className:"footer-grid",children:[e.jsxs("div",{className:"footer-brand",children:[e.jsx("img",{src:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/LOGO FINAL.png",alt:"CTC Logo"}),e.jsx("p",{children:"Creative Techno College, Angul is a premier institution committed to academic excellence, innovation, and holistic development. AICTE approved & affiliated to Utkal University."}),e.jsx("div",{className:"footer-social",children:[{icon:"fa-brands fa-facebook-f",href:"https://www.facebook.com/creativetechnocollege.angul"},{icon:"fa-brands fa-instagram",href:"https://www.instagram.com/creative_techno_college_angul"},{icon:"fa-brands fa-youtube",href:"https://www.youtube.com/@creativetechnocollegeiangu9750"},{icon:"fa-brands fa-linkedin-in",href:"https://www.linkedin.com/in/creative-techno-college-angul/"},{icon:"fa-brands fa-twitter",href:"https://x.com/creative__1998?lang=en"}].map((i,o)=>e.jsx("a",{href:i.href,target:"_blank",rel:"noreferrer",children:e.jsx("i",{className:i.icon})},o))})]}),e.jsxs("div",{className:"footer-col",children:[e.jsx("h4",{children:"Quick Links"}),[{label:"Home",to:"/"},{label:"About CTC",to:"/about/ctc"},{label:"About Trust",to:"/about/trust"},{label:"Our Team",to:"/about/team"},{label:"Admission",to:"/admission"},{label:"Gallery",to:"/gallery"},{label:"Contacts",to:"/contacts"},{label:"ICC",to:"/icc"}].map((i,o)=>e.jsx(Ne,{to:i.to,children:i.label},o))]}),e.jsxs("div",{className:"footer-col",children:[e.jsx("h4",{children:"College Services"}),[{label:"Academics",to:"/academics/regular"},{label:"Placement",to:"/placement/statistics"},{label:"Gymkhana",to:"/gymkhana"},{label:"Technocrat",to:"/gymkhana/technocrat"},{label:"Disha & CSR",to:"/gymkhana/disha-csr"},{label:"Sports",to:"/gymkhana/sports"},{label:"Cultural",to:"/gymkhana/cultural"},{label:"Portal Login",to:"/login"}].map((i,o)=>e.jsx(Ne,{to:i.to,children:i.label},o))]}),e.jsxs("div",{className:"footer-col",children:[e.jsx("h4",{children:"Contact Us"}),e.jsxs("div",{className:"footer-contact-item",children:[e.jsx("i",{className:"fa-solid fa-location-dot"}),e.jsx("span",{children:"Creative Techno College, Angul, Odisha – 759122"})]}),e.jsxs("div",{className:"footer-contact-item",children:[e.jsx("i",{className:"fa-solid fa-phone"}),e.jsx("span",{children:"+91 9778427170 / 9668284222"})]}),e.jsxs("div",{className:"footer-contact-item",children:[e.jsx("i",{className:"fa-solid fa-envelope"}),e.jsx("span",{children:"principal.creativecollege@gmail.com"})]}),e.jsxs("div",{className:"footer-contact-item",children:[e.jsx("i",{className:"fa-solid fa-clock"}),e.jsx("span",{children:"Mon – Sat: 9:00 AM – 5:00 PM"})]})]})]}),e.jsxs("div",{className:"footer-bottom",children:[e.jsxs("p",{children:["© 2010 – 2025 ",e.jsx("span",{children:"Creative Techno College"}),". All Rights Reserved."]}),e.jsxs("p",{children:["A Unit of ",e.jsx("span",{children:"Creative Knowledge Foundation"})]}),e.jsxs("p",{children:["Developed by ",e.jsx("span",{children:"Technocrat Club"})]})]})]})}function _u({children:i}){const[o,l]=y.useState(!1);return y.useEffect(()=>{const d=()=>l(window.scrollY>400);return window.addEventListener("scroll",d),()=>window.removeEventListener("scroll",d)},[]),e.jsxs(e.Fragment,{children:[e.jsx(Mu,{}),e.jsxs("header",{className:"site-header",children:[e.jsxs("div",{className:"header-brand",children:[e.jsx("div",{className:"header-logo-wrap",children:e.jsx("img",{src:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/LOGO FINAL.png",alt:"CTC Logo"})}),e.jsxs("div",{className:"header-text",children:[e.jsx("h1",{children:"Creative Techno College, Angul"}),e.jsx("p",{className:"sub",children:"A Unit of Creative Knowledge Foundation"}),e.jsxs("div",{className:"badges",children:[e.jsx("span",{className:"badge gold",children:"AICTE Approved"}),e.jsx("span",{className:"badge",children:"Utkal University Affiliated"}),e.jsx("span",{className:"badge",children:"Est. 2010"})]})]})]}),e.jsxs("div",{className:"header-logos",children:[e.jsx("img",{src:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/aicte.png",alt:"AICTE",title:"AICTE Approved"}),e.jsx("img",{src:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/utkal.png",alt:"Utkal University",title:"Utkal University Affiliated"}),e.jsx("img",{src:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/ckf.png",alt:"CKF",title:"Creative Knowledge Foundation"})]}),e.jsxs("div",{className:"header-clubs",children:[e.jsx("img",{src:"/CTC NEW REACT WEBSITE/images/GYMKHANA/technocrat.png",alt:"Technocrat",title:"Technocrat Club"}),e.jsx("img",{src:"/CTC NEW REACT WEBSITE/images/GYMKHANA/cultural.png",alt:"Cultural",title:"Cultural Club"}),e.jsx("img",{src:"/CTC NEW REACT WEBSITE/images/GYMKHANA/sports.png",alt:"Sports",title:"Sports Club"}),e.jsx("img",{src:"/CTC NEW REACT WEBSITE/images/GYMKHANA/disha.png",alt:"Disha CSR",title:"Disha & CSR Club"})]})]}),e.jsx(Fu,{}),e.jsx("main",{children:i}),e.jsx(Hu,{}),e.jsx("button",{className:`scroll-top-btn${o?" visible":""}`,onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),"aria-label":"Scroll to top",children:e.jsx("i",{className:"fa-solid fa-chevron-up"})})]})}const On=[{img:"/CTC%20NEW%20REACT%20WEBSITE/images/HOMEPAGE/1.jpg",caption:"Admissions Open 2026–27",sub:"BBA • BCA • B.Sc CS • B.Sc Data Science"},{img:"/CTC%20NEW%20REACT%20WEBSITE/images/HOMEPAGE/2.jpg",caption:"100% Placement Assistance",sub:"Top Recruiters • Industry-Ready Programs"},{img:"/CTC%20NEW%20REACT%20WEBSITE/images/HOMEPAGE/4.jpg",caption:"World-Class Campus & Library",sub:"Modern Infrastructure • Expert Faculty"}];function Uu({onClose:i}){const[o,l]=y.useState(0),d=ii(),m=y.useRef(null);y.useEffect(()=>(m.current=setInterval(()=>l(u=>(u+1)%On.length),3500),()=>clearInterval(m.current)),[]);const f=u=>l((u+On.length)%On.length);return e.jsx("div",{className:"adm-banner-overlay",onClick:i,children:e.jsxs("div",{className:"adm-banner-box",onClick:u=>u.stopPropagation(),children:[e.jsx("button",{className:"adm-banner-close",onClick:i,"aria-label":"Close banner",children:e.jsx("i",{className:"fa-solid fa-xmark"})}),e.jsxs("div",{className:"adm-banner-slider",children:[On.map((u,w)=>e.jsxs("div",{className:`adm-banner-slide ${w===o?"active":""}`,children:[e.jsx("img",{src:u.img,alt:u.caption,className:"adm-banner-slide-img"}),e.jsx("div",{className:"adm-banner-slide-overlay"}),e.jsxs("div",{className:"adm-banner-slide-text",children:[e.jsxs("p",{className:"adm-banner-eyebrow",children:[e.jsx("i",{className:"fa-solid fa-graduation-cap"})," Creative Techno College"]}),e.jsx("h2",{children:u.caption}),e.jsx("p",{children:u.sub})]})]},w)),e.jsx("div",{className:"adm-banner-dots",children:On.map((u,w)=>e.jsx("button",{className:`adm-banner-dot ${w===o?"active":""}`,onClick:()=>f(w)},w))}),e.jsx("button",{className:"adm-banner-arrow left",onClick:()=>f(o-1),children:e.jsx("i",{className:"fa-solid fa-chevron-left"})}),e.jsx("button",{className:"adm-banner-arrow right",onClick:()=>f(o+1),children:e.jsx("i",{className:"fa-solid fa-chevron-right"})})]}),e.jsxs("div",{className:"adm-banner-footer",children:[e.jsxs("div",{className:"adm-banner-footer-text",children:[e.jsx("span",{className:"adm-banner-tag",children:"🎓 Admission 2026–27 Open Now!"}),e.jsx("p",{children:"Seats are filling fast. Secure your future today."})]}),e.jsxs("button",{className:"adm-banner-apply-btn",onClick:()=>{i(),d("/admission/apply")},children:[e.jsx("i",{className:"fa-solid fa-paper-plane"})," Apply Now"]})]})]})})}function $u(){y.useEffect(()=>{const i=document.querySelectorAll(".reveal, .reveal-left, .reveal-right"),o=new IntersectionObserver(l=>l.forEach(d=>{d.isIntersecting&&d.target.classList.add("visible")}),{threshold:.12});return i.forEach(l=>o.observe(l)),()=>o.disconnect()},[])}const Zr=[{img:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/creative-campus.jpg",eyebrow:"Welcome to Excellence",title:"Shaping Leaders of Tomorrow",sub:"AICTE Approved • Utkal University Affiliated • Est. 2010"},{img:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/7.jpg",eyebrow:"Beautiful Campus",title:"Green & Student-Friendly Environment",sub:"Sprawling campus of knowledge and growth"},{img:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/4.jpg",eyebrow:"Modern Library",title:"Resources to Empower Learning",sub:"Thousands of books, journals & digital resources"},{img:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/1.jpg",eyebrow:"World-Class Education",title:"Where Innovation Meets Tradition",sub:"BBA • BCA • B.Sc (CS) • B.Sc (Data Science)"},{img:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/2.jpg",eyebrow:"100% Placement Assistance",title:"Your Future Starts Here",sub:"1500+ Students Placed • 100+ Recruiting Companies"},{img:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/5.jpg",eyebrow:"Vibrant Campus Life",title:"Learn. Grow. Excel.",sub:"Sports • Cultural • Technocrat • Disha & CSR"},{img:"/CTC%20NEW%20REACT%20WEBSITE/images/CULTURAL/saraswati_puja/sp1.jpeg",eyebrow:"Saraswati Puja Celebrations",title:"Honouring the Goddess of Knowledge",sub:"Faith • Culture • Togetherness"},{img:"/CTC%20NEW%20REACT%20WEBSITE/images/CULTURAL/funfest/f1.jpeg",eyebrow:"Fun Fest",title:"Where Talent Takes the Stage",sub:"Energy • Creativity • Unforgettable Moments"},{img:"/CTC%20NEW%20REACT%20WEBSITE/images/CULTURAL/holi/h1.jpeg",eyebrow:"Holi Celebrations",title:"A Festival of Colours & Joy",sub:"Vibrant • Festive • Full of Life"}];function Gu(){const[i,o]=y.useState(0),l=y.useRef(null),d=m=>o((m+Zr.length)%Zr.length);return y.useEffect(()=>(l.current=setInterval(()=>d(i+1),5e3),()=>clearInterval(l.current)),[i]),e.jsxs("section",{className:"hero-section",children:[e.jsx("div",{className:"hero-slides-wrap",style:{transform:`translateX(-${i*100}%)`},children:Zr.map((m,f)=>e.jsxs("div",{className:"hero-slide",children:[e.jsx("img",{src:m.img,alt:m.title,loading:f===0?"eager":"lazy"}),e.jsx("div",{className:"hero-overlay"}),e.jsxs("div",{className:"hero-content",children:[e.jsx("p",{className:"hero-eyebrow",children:m.eyebrow}),e.jsx("h1",{className:"hero-title",dangerouslySetInnerHTML:{__html:m.title.replace(/([A-Z][a-z]+)/,"<span>$1</span>")}}),e.jsx("p",{className:"hero-sub",children:m.sub}),e.jsxs("div",{className:"hero-actions",children:[e.jsxs(Ne,{to:"/admission",className:"btn-primary",children:[e.jsx("i",{className:"fa-solid fa-graduation-cap"})," Apply Now"]}),e.jsxs(Ne,{to:"/about/ctc",className:"btn-outline",children:["Explore More ",e.jsx("i",{className:"fa-solid fa-arrow-right"})]})]})]})]},f))}),e.jsx("button",{className:"hero-arrow left",onClick:()=>d(i-1),"aria-label":"Previous",children:e.jsx("i",{className:"fa-solid fa-chevron-left"})}),e.jsx("button",{className:"hero-arrow right",onClick:()=>d(i+1),"aria-label":"Next",children:e.jsx("i",{className:"fa-solid fa-chevron-right"})}),e.jsx("div",{className:"hero-dots",children:Zr.map((m,f)=>e.jsx("div",{className:`hero-dot${f===i?" active":""}`,onClick:()=>d(f)},f))})]})}const io=[{end:5e3,suffix:"+",label:"Alumni"},{end:500,suffix:"+",label:"Students"},{end:200,suffix:"+",label:"Academic Events"},{end:1500,suffix:"+",label:"Placement"},{end:4,suffix:"",label:"Clubs"}];function Ju(){const[i,o]=y.useState(io.map(()=>0)),l=y.useRef(null),d=y.useRef(!1);return y.useEffect(()=>{const m=new IntersectionObserver(([f])=>{f.isIntersecting&&!d.current&&(d.current=!0,io.forEach((u,w)=>{const v=u.end/112.5;let x=0;const h=setInterval(()=>{x=Math.min(x+v,u.end),o(T=>{const P=[...T];return P[w]=Math.floor(x),P}),x>=u.end&&clearInterval(h)},16)}))},{threshold:.3});return l.current&&m.observe(l.current),()=>m.disconnect()},[]),e.jsxs("section",{className:"stats-section",ref:l,children:[e.jsxs("div",{style:{textAlign:"center",marginBottom:"16px",position:"relative"},children:[e.jsx("span",{className:"section-label",style:{color:"rgba(0,212,255,0.8)"},children:"By The Numbers"}),e.jsxs("h2",{className:"section-title",style:{color:"#fff"},children:["Our ",e.jsx("span",{style:{color:"var(--gold)"},children:"Impact"})]})]}),e.jsx("div",{className:"stats-grid",children:io.map((m,f)=>e.jsxs("div",{className:"stat-card reveal",children:[e.jsxs("div",{className:"stat-number",children:[i[f],m.suffix]}),e.jsx("div",{className:"stat-label",children:m.label})]},f))})]})}const Yu=[{abbr:"BBA",full:"Bachelor of Business Administration",seats:120,icon:"💼",desc:"Management, Marketing, Finance & Entrepreneurship"},{abbr:"BCA",full:"Bachelor of Computer Applications",seats:120,icon:"💻",desc:"Programming, Databases & Software Development"},{abbr:"B.Sc (CS)",full:"Bachelor of Science in Computer Science",seats:128,icon:"🖥️",desc:"Algorithms, Theory & Practical Programming"},{abbr:"B.Sc (DS)",full:"Bachelor of Science in Data Science",seats:30,icon:"📊",desc:"Machine Learning, Statistics & Data Analytics"}],Vu=[{name:"Mr. Gyanendra Kumar Sahu",role:"Chairman",img:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/Director Sir.jpg"},{name:"Er. Manoj Kumar Das",role:"Dean Academic",img:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/Dean Sir.jpg"},{name:"Mr. Krishnasis Mishra",role:"Principal",img:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/Principal Sir.jpg"},{name:"Mr. Bhabani Shankar Sahoo",role:"Vice Principal",img:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/Bhabani Sir.jpg"},{name:"Mr. Subhrajyoti Behera",role:"Management HOD",img:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/Subhrajyoti Sir.jpg"}],Ku=[{name:"Wipro",img:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/wipro.png"},{name:"TCS",img:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/tcs.jpg"},{name:"LTI Mindtree",img:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/lti.png"},{name:"Infosys",img:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/infosys.png"},{name:"HCL",img:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/hcl.png"},{name:"Capgemini",img:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/capgemini.png"},{name:"Cisco",img:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/cisco.png"},{name:"Tech Mahindra",img:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/tech.jpg"},{name:"IBM",img:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/ibm.jpeg.jpg"},{name:"Cognizant",img:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/cognizant.png"},{name:"Accenture",img:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/acenture.png"},{name:"Deloitte",img:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/DELOITTE.jpeg"},{name:"Airtel",img:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/airtel.png"},{name:"Corpnizer",img:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/corpnizers.jpeg"},{name:"DXC",img:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/dxc.png"},{name:"Zoho",img:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/zoho.jpg"}];function Qu(){$u();const[i,o]=y.useState(!0);return e.jsxs(e.Fragment,{children:[i&&e.jsx(Uu,{onClose:()=>o(!1)}),e.jsxs(Ne,{to:"/admission/apply",className:"adm-float-btn",children:[e.jsx("i",{className:"fa-solid fa-graduation-cap"}),e.jsx("span",{children:"Admission Open – Apply Now"}),e.jsx("span",{className:"adm-float-ping"})]}),e.jsx(Gu,{}),e.jsxs("section",{className:"home-about",children:[e.jsxs("div",{className:"home-about-text reveal-left",children:[e.jsx("span",{className:"section-label",children:"About Us"}),e.jsxs("h2",{className:"section-title",children:["Empowering Minds at ",e.jsx("span",{children:"Creative Techno College"})]}),e.jsx("p",{children:"Creative Techno College (CTC), Angul is a premier institution of higher education established under the aegis of Creative Knowledge Foundation. AICTE approved and affiliated to Utkal University, CTC has been a beacon of quality education since 2010."}),e.jsx("p",{children:"We offer industry-aligned programs in BBA, BCA, B.Sc (Computer Science), and B.Sc (Data Science), equipping students with the skills and knowledge needed to thrive in the modern world."}),e.jsx("p",{children:"Our state-of-the-art infrastructure, experienced faculty, and strong industry connections ensure that every student receives a world-class education with 100% placement assistance."}),e.jsx("div",{style:{display:"flex",gap:"16px",flexWrap:"wrap",marginTop:"28px"},children:e.jsxs(Ne,{to:"/about/ctc",className:"btn-primary",children:[e.jsx("i",{className:"fa-solid fa-circle-info"})," Learn More"]})})]}),e.jsxs("div",{className:"director-spotlight reveal-right",children:[e.jsx("img",{className:"director-photo",src:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/Director Sir.jpg",alt:"Director"}),e.jsx("h3",{children:"Mr. Gyanendra Kumar Sahu"}),e.jsx("p",{className:"role",children:"Director"}),e.jsx("blockquote",{children:'"We strongly support inter disciplinary education and training for the benefit of student, industry and society. Our vision is to create future leaders who manage, create powerful organization in the emerging corporate landscape. Our management and IT development programs are exclusively industry focused so as to equip the students with latest techniques in the ever dynamic context of domestic and international business environment. It is an opportunity for you to avail the best course with best college in your locality. Come, be a part of our Creative family. Enjoy flexible and unlimited training programs."'})]})]}),e.jsxs("section",{className:"mv-section",children:[e.jsxs("div",{style:{textAlign:"center",position:"relative"},children:[e.jsx("span",{className:"section-label",children:"Our Foundation"}),e.jsxs("h2",{className:"section-title",style:{color:"#fff"},children:["Mission, Vision & ",e.jsx("span",{style:{color:"var(--gold)"},children:"Values"})]})]}),e.jsx("div",{className:"mv-grid",children:[{icon:e.jsx("i",{className:"fa-solid fa-bullseye"}),title:"Our Mission",content:"To provide quality education that empowers students with knowledge, skills, and values to excel in their careers and contribute positively to society.",type:"text"},{icon:e.jsx("i",{className:"fa-solid fa-eye"}),title:"Our Vision",content:"To be a globally recognized institution that nurtures innovative thinkers, ethical leaders, and responsible citizens.",type:"text"},{icon:e.jsx("i",{className:"fa-solid fa-gem"}),title:"Core Values",items:["Excellence in Education","Innovation & Creativity","Integrity & Ethics","Inclusivity & Diversity","Social Responsibility"],type:"list"},{icon:e.jsx("i",{className:"fa-solid fa-shield-halved"}),title:"Quality Policy",content:"We are committed to continuous improvement in academic standards, student outcomes, and institutional effectiveness through systematic planning and evaluation.",type:"text"}].map((l,d)=>e.jsxs("div",{className:"mv-card reveal",style:{transitionDelay:`${d*.1}s`},children:[e.jsx("div",{className:"mv-card-icon",children:l.icon}),e.jsx("h3",{children:l.title}),l.type==="text"?e.jsx("p",{children:l.content}):e.jsx("ul",{children:l.items.map((m,f)=>e.jsx("li",{children:m},f))})]},d))})]}),e.jsxs("section",{className:"courses-section",children:[e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx("span",{className:"section-label",children:"Academic Programs"}),e.jsxs("h2",{className:"section-title",children:["Courses ",e.jsx("span",{children:"Offered"})]}),e.jsx("p",{className:"section-subtitle",style:{margin:"0 auto"},children:"Industry-aligned programs designed to prepare you for the careers of tomorrow."})]}),e.jsx("div",{className:"courses-grid",children:Yu.map((l,d)=>e.jsxs("div",{className:"course-card reveal",style:{transitionDelay:`${d*.1}s`},children:[e.jsxs("div",{className:"course-abbr-banner",children:[e.jsx("h3",{children:l.abbr}),e.jsx("span",{className:"course-type-tag",children:"4-Year Degree"})]}),e.jsxs("div",{className:"course-body",children:[e.jsx("p",{className:"course-full",children:l.full}),e.jsx("p",{className:"course-desc",children:l.desc}),e.jsxs("div",{className:"course-seats-badge",children:[e.jsx("i",{className:"fa-solid fa-users"})," ",l.seats," Seats"]}),e.jsxs(Ne,{to:"/admission",style:{display:"inline-flex",alignItems:"center",gap:"6px",marginTop:"4px",color:"var(--blue-light)",fontWeight:700,fontSize:"0.85rem",fontFamily:"var(--font-head)"},children:["Apply Now ",e.jsx("i",{className:"fa-solid fa-arrow-right",style:{fontSize:"0.72rem"}})]})]})]},d))})]}),e.jsx(Ju,{}),e.jsxs("section",{className:"admin-section",children:[e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx("span",{className:"section-label",children:"Leadership"}),e.jsxs("h2",{className:"section-title",children:["Our ",e.jsx("span",{children:"Administration"})]}),e.jsx("p",{className:"section-subtitle",style:{margin:"0 auto"},children:"Guided by experienced educators and visionary leaders committed to excellence."})]}),e.jsx("div",{className:"admin-grid",children:Vu.map((l,d)=>e.jsxs("div",{className:"admin-card reveal",style:{transitionDelay:`${d*.1}s`},children:[e.jsxs("div",{className:"admin-img-wrap",children:[e.jsx("img",{src:l.img,alt:l.name}),e.jsx("div",{className:"admin-img-overlay"})]}),e.jsxs("div",{className:"admin-info",children:[e.jsx("h4",{children:l.name}),e.jsx("span",{children:l.role})]})]},d))})]}),e.jsxs("section",{className:"recruiters-section",children:[e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx("span",{className:"section-label",children:"Industry Partners"}),e.jsxs("h2",{className:"section-title",children:["Our Top ",e.jsx("span",{children:"Recruiters"})]}),e.jsx("p",{className:"section-subtitle",style:{margin:"0 auto"},children:"Leading companies trust CTC graduates for their talent, skills, and work ethic."})]}),e.jsx("div",{className:"recruiters-grid",children:Ku.map((l,d)=>e.jsxs("div",{className:"recruiter-logo reveal",style:{transitionDelay:`${d*.05}s`},children:[e.jsx("img",{src:l.img,alt:l.name}),e.jsx("span",{children:l.name})]},d))})]}),e.jsxs("section",{className:"maps-section",children:[e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx("span",{className:"section-label",children:"Find Us"}),e.jsxs("h2",{className:"section-title",children:["Our ",e.jsx("span",{children:"Locations"})]})]}),e.jsx("div",{className:"maps-grid",children:[{title:"Creative Techno College, Angul",icon:"fa-solid fa-building-columns",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3730.0783340113476!2d85.08639287509837!3d20.788118580801687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a18a5b9850815f5%3A0xa7f8a31afad931b7!2sCreative%20Techno%20College!5e0!3m2!1sen!2sin!4v1758728395827!5m2!1sen!2sin",link:"https://www.google.com/maps/place/Creative+Techno+College/@20.7881186,85.0863929,17z"},{title:"Creative Knowledge Foundation Office",icon:"fa-solid fa-house",src:"https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3728.8844998564623!2d85.10675499999999!3d20.836369999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1m1!2zMjDCsDUwJzEwLjkiTiA4NcKwMDYnMjQuMyJF!5e0!3m2!1sen!2sin!4v1759905943185!5m2!1sen!2sin",link:"https://www.google.com/maps/place/Creative+CT+Office/@20.750000,85.000000,17z"}].map((l,d)=>e.jsxs("div",{className:"map-card reveal",style:{transitionDelay:`${d*.15}s`},children:[e.jsxs("div",{className:"map-card-header",children:[e.jsx("i",{className:l.icon}),e.jsx("h3",{children:l.title})]}),e.jsx("iframe",{src:l.src,title:l.title,allowFullScreen:!0,loading:"lazy"}),e.jsx("div",{className:"map-card-footer",children:e.jsxs("a",{href:l.link,target:"_blank",rel:"noreferrer",className:"btn-primary",style:{fontSize:"0.82rem",padding:"8px 20px"},children:[e.jsx("i",{className:"fa-solid fa-map-location-dot"})," Open in Maps"]})})]},d))})]})]})}function qu(){y.useEffect(()=>{const i=document.querySelectorAll(".reveal, .reveal-left, .reveal-right"),o=new IntersectionObserver(l=>l.forEach(d=>{d.isIntersecting&&d.target.classList.add("visible")}),{threshold:.1});return i.forEach(l=>o.observe(l)),()=>o.disconnect()},[])}const Xu=[{year:"1995",label:"Founded",desc:"Journey began with computer education as a franchise of APTECH Computer Education."},{year:"2010",label:"CTC Established",desc:"Creative Techno College officially launched, offering BBA & BCA under Utkal University."},{year:"2017",label:"1st Permanent Approved",desc:"Became the 1st Permanently Approved College of Angul in Central Odisha."},{year:"2024",label:"AICTE Approved",desc:"Received AICTE approval, marking adherence to the highest national educational standards."}],Zu=[{icon:"fa-solid fa-graduation-cap",title:"Educational Excellence",desc:"Committed to the highest standards of academic quality and student achievement across all programs."},{icon:"fa-solid fa-hands-helping",title:"Community Service",desc:"Dedicated to serving the region through education, outreach, and deep social responsibility."},{icon:"fa-solid fa-lightbulb",title:"Innovation",desc:"Fostering a culture of creativity, critical thinking, and continuous improvement in everything we do."},{icon:"fa-solid fa-seedling",title:"Holistic Development",desc:"Nurturing not just academic excellence but also character, values, and leadership in every student."}],eh=["Spoken English","Tally ERP","Web Development","Digital Marketing","Data Analytics","Soft Skills"];function ah(){return qu(),e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"ckf-hero",style:{textAlign:"left"},children:e.jsxs("div",{style:{maxWidth:"1100px",margin:"0 auto",display:"flex",alignItems:"center",gap:"48px",flexWrap:"wrap"},children:[e.jsxs("div",{style:{flex:"1 1 320px"},children:[e.jsx("span",{className:"section-label",style:{color:"var(--cyan)"},children:"Our Foundation"}),e.jsxs("h1",{className:"section-title",style:{color:"#fff",margin:"12px 0 16px",textAlign:"left"},children:["About ",e.jsx("span",{style:{color:"var(--gold)"},children:"Creative Knowledge Foundation"})]}),e.jsx("p",{style:{color:"rgba(255,255,255,0.65)",lineHeight:1.8,maxWidth:"480px"},children:"The trust behind Creative Techno College, Angul — empowering education since 1995"})]}),e.jsx("div",{className:"reveal-right",style:{flex:"0 0 auto"},children:e.jsx("div",{style:{background:"#fff",padding:"20px",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 10px 30px rgba(0,0,0,0.15)",width:"180px",height:"180px"},children:e.jsx("img",{src:"/CTC NEW REACT WEBSITE/images/AboutTrust/aboutckfimg1.png",alt:"CKF Logo",style:{height:"auto",width:"100%",maxWidth:"120px",opacity:1}})})})]})}),e.jsx("section",{style:{background:"var(--page-bg)",padding:"60px 5%"},children:e.jsx("div",{style:{maxWidth:"1100px",margin:"0 auto",display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"20px"},children:Xu.map((i,o)=>e.jsxs("div",{className:"milestone-card reveal",style:{transitionDelay:`${o*.1}s`},children:[e.jsx("div",{className:"milestone-year",children:i.year}),e.jsx("h3",{style:{fontFamily:"var(--font-head)",fontWeight:800,color:"var(--navy)",marginBottom:"10px",fontSize:"0.93rem"},children:i.label}),e.jsx("p",{children:i.desc})]},o))})}),e.jsx("section",{style:{background:"#fff"},children:e.jsxs("div",{className:"ckf-history",children:[e.jsxs("div",{style:{textAlign:"center",marginBottom:"40px"},children:[e.jsx("span",{className:"section-label",children:"Our Story"}),e.jsxs("h2",{className:"section-title",children:["The ",e.jsx("span",{children:"CKF Journey"})]})]}),e.jsx("img",{src:"/CTC NEW REACT WEBSITE/images/AboutTrust/aboutckfimg2.png",alt:"CKF Timeline",className:"ckf-timeline-img reveal"}),e.jsxs("div",{className:"ckf-history-text reveal",children:[e.jsx("p",{children:"CREATIVE KNOWLEDGE FOUNDATION with Regd. Office at Tamrit Colony, Angul, Odisha is running CREATIVE TECHNO COLLEGE since 2010 situated at Baluakata, Sharadhapur, Angul."}),e.jsx("p",{children:"However the journey was started at Institutional level in year 1995 with computer education as a franchise of APTECH COMPUTER EDUCATION (APTECH Ltd.) upto 2007 and run distance education BBA, BCA, MBA and MCA courses between 2001–2015."}),e.jsxs("p",{children:["Since 2010 CREATIVE TECHNO COLLEGE is offering BBA and BCA undergraduate courses in computer application and management recognized by Government of Odisha, Department of Higher Education and Affiliated to Utkal University. In 2018 another course B.Sc. in Computer Science has been added under this umbrella. The founder of the college Mr. Gyanendra Sahu has dedicatedly worked hard to make the college the ",e.jsx("strong",{children:"1st Permanent Approved College of Angul"})," in Central Odisha in 2017."]}),e.jsxs("p",{children:["In 2019 our college has been awarded as ",e.jsx("strong",{children:"Best Professional College by Odisha Education Award 2019"}),". We received AICTE approval in 2024, which ensures the college is adhering to strict standards in terms of infrastructure, faculty, teaching methodology, and overall educational excellence."]}),e.jsx("p",{children:"In Skill Development area of IT education and training: in 2009 we trained 300 trainees in association with OCAC; in 2011–12 we trained 150 trainees in association with DTET Odisha; in 2014 we worked with OKCL (Odisha Knowledge Corporation Ltd.); and in 2018 we trained 120 trainees under NALCO CSR fund in association with AISECT Bhopal."})]})]})}),e.jsxs("section",{style:{background:"var(--page-bg)"},children:[e.jsxs("div",{style:{maxWidth:"1100px",margin:"0 auto",padding:"60px 5% 0",textAlign:"center"},children:[e.jsx("span",{className:"section-label",children:"What We Stand For"}),e.jsxs("h2",{className:"section-title",children:["Our Core ",e.jsx("span",{children:"Values"})]})]}),e.jsx("div",{style:{maxWidth:"1100px",margin:"24px auto 0",padding:"0 5% 72px",display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"20px"},children:Zu.map((i,o)=>e.jsxs("div",{className:"ckf-value-card reveal",style:{transitionDelay:`${o*.1}s`},children:[e.jsx("div",{className:"ckf-value-icon",children:e.jsx("i",{className:i.icon})}),e.jsx("h3",{children:i.title}),e.jsx("p",{children:i.desc})]},o))})]}),e.jsx("section",{style:{background:"#fff",padding:"72px 5%"},children:e.jsxs("div",{className:"ckf-skills-banner reveal",style:{maxWidth:"1100px",margin:"0 auto"},children:[e.jsxs("div",{style:{flex:"1 1 300px"},children:[e.jsx("span",{className:"section-label",style:{color:"var(--cyan)"},children:"Vocational Wing"}),e.jsx("h2",{children:"CKF Skills"}),e.jsx("p",{children:"CKF Skills is the vocational and skill development wing of Creative Knowledge Foundation, offering industry-relevant training programs to bridge the skill gap and enhance employability among youth in Odisha."})]}),e.jsx("div",{style:{flex:"1 1 260px"},children:e.jsx("div",{className:"ckf-skill-tags",children:eh.map((i,o)=>e.jsx("span",{children:i},o))})})]})})]})}function th(){y.useEffect(()=>{const i=document.querySelectorAll(".reveal, .reveal-left, .reveal-right"),o=new IntersectionObserver(l=>l.forEach(d=>{d.isIntersecting&&d.target.classList.add("visible")}),{threshold:.1});return i.forEach(l=>o.observe(l)),()=>o.disconnect()},[])}const nh=[{img:"/CTC NEW REACT WEBSITE/images/AboutUs/StrongAcademic.png",title:"Strong Academics",desc:"Comprehensive programs delivered by experienced faculty to boost academic excellence and career readiness."},{img:"/CTC NEW REACT WEBSITE/images/AboutUs/PrePlacementActivity.jpg",title:"Pre-Placement Training",desc:"Mock interviews, aptitude tests, and resume workshops to prepare students for campus placements."},{img:"/CTC NEW REACT WEBSITE/images/AboutUs/LiveProjects.png",title:"Skill Development",desc:"Hands-on live projects and internship programs to bridge the gap between academics and industry."},{img:"/CTC NEW REACT WEBSITE/images/AboutUs/Hostel.jpg",title:"Hostel Facilities",desc:"Comfortable, secure, and well-maintained separate hostels for boys and girls with 24/7 security."},{img:"/CTC NEW REACT WEBSITE/images/AboutUs/transportation.png",title:"Buses & Transportation",desc:"Safe and timely college bus services covering major routes across Angul and surrounding areas."},{img:"/CTC NEW REACT WEBSITE/images/AboutUs/Playground.png",title:"Play Ground & Sports",desc:"Dedicated outdoor sports facilities to promote physical fitness, teamwork, and competitive spirit."},{img:"/CTC NEW REACT WEBSITE/images/AboutUs/Canteen_Caffeteria.jpg",title:"Canteen & Cafeteria",desc:"Hygienic and affordable canteen offering nutritious meals and refreshments throughout the day."},{img:"/CTC NEW REACT WEBSITE/images/AboutUs/GreenCampus.png",title:"Green Campus",desc:"Lush eco-friendly campus with beautiful surroundings promoting a healthy and inspiring environment."}];function rh(){return th(),e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"page-hero",children:[e.jsx("div",{className:"page-hero-dots"}),e.jsx("span",{className:"section-label",children:"Know Us Better"}),e.jsxs("h1",{children:["About ",e.jsx("span",{children:"Creative Techno College"})]}),e.jsx("p",{children:"Excellence in Education since 2010 — Angul, Odisha"})]}),e.jsx("section",{style:{padding:"80px 5%",background:"#fff"},children:e.jsxs("div",{style:{maxWidth:"1200px",margin:"0 auto",display:"flex",gap:"60px",flexWrap:"wrap",alignItems:"center"},children:[e.jsxs("div",{className:"reveal-left",style:{flex:"1 1 380px"},children:[e.jsx("span",{className:"section-label",children:"Our Story"}),e.jsxs("h2",{className:"section-title",children:["A Legacy of ",e.jsx("span",{children:"Excellence"})]}),e.jsx("p",{style:{color:"#4a6080",lineHeight:1.9,marginBottom:"16px"},children:"Creative Techno College (CTC), Angul (A Unit of Creative Knowledge Foundation) is located at Balukata, Sharadhapur, Angul. It is recognized by Govt. of Odisha, Dept. of Higher Education and affiliated to Utkal University — a pioneer college in Central Odisha providing IT and management education."}),e.jsx("p",{style:{color:"#4a6080",lineHeight:1.9,marginBottom:"16px"},children:"The college has a group of experienced faculties and supporting staff, well-equipped infrastructure and air-conditioned computer labs. Besides course curriculum, CTC emphasizes developing students' professional skills through soft skill training including spoken English, group discussions, debates, mock interviews, and more."}),e.jsx("p",{style:{color:"#4a6080",lineHeight:1.9,marginBottom:"28px"},children:"With a dedicated placement cell, experienced faculty, and vibrant campus life through Gymkhana activities, CTC provides a holistic educational experience that goes beyond textbooks and classrooms."}),e.jsx("div",{style:{display:"flex",gap:"16px",flexWrap:"wrap"},children:e.jsxs(Ne,{to:"/admission",className:"btn-primary",children:[e.jsx("i",{className:"fa-solid fa-graduation-cap"})," Apply Now"]})})]}),e.jsxs("div",{className:"reveal-right",style:{flex:"1 1 340px"},children:[e.jsxs("div",{style:{borderRadius:"20px",overflow:"hidden",boxShadow:"var(--shadow-lg)",position:"relative"},children:[e.jsx("img",{src:"/CTC NEW REACT WEBSITE/images/AboutUs/creative-campus.jpg",alt:"CTC Campus",style:{width:"100%",height:"380px",objectFit:"cover",display:"block"}}),e.jsx("div",{style:{position:"absolute",inset:0,background:"linear-gradient(to top, rgba(10,22,40,0.45) 0%, transparent 55%)",pointerEvents:"none"}})]}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"12px",marginTop:"12px"},children:[{val:"15+",label:"Years"},{val:"1500+",label:"Alumni"},{val:"398",label:"Seats"},{val:"95%",label:"Placement"}].map((i,o)=>e.jsxs("div",{className:"reveal",style:{transitionDelay:`${o*.08}s`,background:"linear-gradient(135deg, var(--navy), var(--blue))",borderRadius:"12px",padding:"20px",textAlign:"center",color:"#fff"},children:[e.jsx("div",{style:{fontFamily:"var(--font-head)",fontSize:"1.6rem",fontWeight:900,color:"var(--gold)"},children:i.val}),e.jsx("div",{style:{fontSize:"0.78rem",color:"rgba(255,255,255,0.7)",fontWeight:600,marginTop:"4px"},children:i.label})]},o))})]})]})}),e.jsxs("section",{style:{padding:"80px 5%",background:"linear-gradient(135deg, var(--navy) 0%, #0d2550 50%, var(--blue) 100%)",position:"relative",overflow:"hidden"},children:[e.jsx("div",{style:{position:"absolute",inset:0,background:"radial-gradient(ellipse at 70% 30%, rgba(0,212,255,0.1) 0%, transparent 60%)",pointerEvents:"none"}}),e.jsxs("div",{style:{maxWidth:"1200px",margin:"0 auto",position:"relative"},children:[e.jsxs("div",{style:{textAlign:"center",marginBottom:"48px"},children:[e.jsx("span",{className:"section-label",style:{color:"var(--cyan)"},children:"Career Success"}),e.jsxs("h2",{className:"section-title",style:{color:"#fff"},children:["Best Placement Provider ",e.jsx("span",{style:{color:"var(--gold)"},children:"in Odisha"})]}),e.jsx("p",{style:{color:"rgba(255,255,255,0.65)",maxWidth:"680px",margin:"0 auto",lineHeight:1.9,fontSize:"0.97rem"},children:"Education is not just about subjects learned in college. Becoming educated is a lifelong exercise that can be unbelievably exciting if one jumps into the train of experience and takes a trip to every conceivable place on earth."})]}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:"20px",maxWidth:"900px",margin:"0 auto"},children:[{val:"1500+",label:"Students Placed",icon:"fa-solid fa-user-tie"},{val:"100+",label:"Companies",icon:"fa-solid fa-building"},{val:"₹4.5 LPA",label:"Highest Package",icon:"fa-solid fa-indian-rupee-sign"},{val:"95%",label:"Placement Rate",icon:"fa-solid fa-chart-line"}].map((i,o)=>e.jsxs("div",{className:"reveal",style:{transitionDelay:`${o*.1}s`,background:"rgba(255,255,255,0.07)",border:"1px solid rgba(255,255,255,0.13)",borderRadius:"16px",padding:"28px 20px",textAlign:"center",backdropFilter:"blur(12px)"},children:[e.jsx("i",{className:i.icon,style:{color:"var(--cyan)",fontSize:"1.6rem",marginBottom:"12px",display:"block"}}),e.jsx("div",{style:{fontFamily:"var(--font-head)",fontSize:"1.6rem",fontWeight:900,color:"var(--gold)",marginBottom:"4px"},children:i.val}),e.jsx("div",{style:{fontSize:"0.78rem",color:"rgba(255,255,255,0.65)",fontWeight:600},children:i.label})]},o))}),e.jsx("div",{style:{textAlign:"center",marginTop:"40px"},children:e.jsxs(Ne,{to:"/placement",className:"btn-primary",children:[e.jsx("i",{className:"fa-solid fa-briefcase"})," View Placement Details"]})})]})]}),e.jsx("section",{style:{padding:"80px 5%",background:"var(--page-bg)"},children:e.jsxs("div",{style:{maxWidth:"1200px",margin:"0 auto"},children:[e.jsxs("div",{style:{textAlign:"center",marginBottom:"8px"},children:[e.jsx("span",{className:"section-label",children:"Campus Life"}),e.jsxs("h2",{className:"section-title",children:["World-Class ",e.jsx("span",{children:"Facilities"})]}),e.jsx("p",{className:"section-subtitle",style:{margin:"0 auto"},children:"Everything you need for a complete and enriching college experience."})]}),e.jsx("div",{className:"facility-grid",children:nh.map((i,o)=>e.jsxs("div",{className:"facility-card reveal",style:{transitionDelay:`${o%4*.08}s`},children:[e.jsxs("div",{className:"facility-img-wrap",children:[e.jsx("img",{src:i.img,alt:i.title}),e.jsx("div",{className:"facility-img-overlay"})]}),e.jsxs("div",{className:"facility-info",children:[e.jsx("h3",{children:i.title}),e.jsx("p",{children:i.desc})]})]},o))})]})})]})}function ih(){y.useEffect(()=>{const i=document.querySelectorAll(".reveal, .reveal-left, .reveal-right"),o=new IntersectionObserver(l=>l.forEach(d=>{d.isIntersecting&&d.target.classList.add("visible")}),{threshold:.08});return i.forEach(l=>o.observe(l)),()=>o.disconnect()},[])}const sh=[{name:"Mr. Manoj Kumar Das",designation:"Dean (Academic)",qualification:"23 Years Experience",img:"/CTC NEW REACT WEBSITE/images/OURTEAM/Dean Sir.jpg",email:"dasmanojp@gmail.com",role:"admin"},{name:"Mr. Krishnashis Mishra",designation:"Principal",qualification:"M.Tech (CSE) · 15 Yrs",img:"/CTC NEW REACT WEBSITE/images/OURTEAM/Principal Sir.jpg",email:"principal.creativecollege@gmail.com",role:"admin"},{name:"Mr. Bhabani Sankar Sahoo",designation:"Vice Principal",qualification:"M.Tech (CSE) · 7 Yrs",img:"/CTC NEW REACT WEBSITE/images/OURTEAM/Bhabani Sir.jpg",email:"bhabaniwipro89@gmail.com",role:"admin"},{name:"Mr. Subhrajyoti Behera",designation:"HOD — Management Faculty",qualification:"MBA (Marketing)",img:"/CTC NEW REACT WEBSITE/images/OURTEAM/Subhrajyoti Sir.jpg",email:"subhyrajyoticafpl@gmail.com",role:"mgmt"},{name:"Ms. Neha Solanki",designation:"Management Faculty",qualification:"M.Com",img:"/CTC NEW REACT WEBSITE/images/OURTEAM/Neha Mam.jpg",email:"nehasolanki1411@gmail.com",role:"mgmt"},{name:"Ms. Pravati Pradhan",designation:"Mathematics Faculty",qualification:"MSc (Mathematics)",img:"/CTC NEW REACT WEBSITE/images/OURTEAM/Pravati Mam.jpg",email:"",role:"math"},{name:"Mr. Saumya Ranjan Pradhan",designation:"IT Faculty",qualification:"MCA",img:"/CTC NEW REACT WEBSITE/images/OURTEAM/Saumya Sir.jpg",email:"",role:"it"},{name:"Mr. Swastik Ranjan Sahoo",designation:"IT Faculty",qualification:"MCA",img:"/CTC NEW REACT WEBSITE/images/OURTEAM/Swastik Sir.jpg",email:"sahooswastik406@gmail.com",role:"it"},{name:"Ms. Arghyarupa Behera",designation:"IT Faculty",qualification:"MSc (CS)",img:"/CTC NEW REACT WEBSITE/images/OURTEAM/Arghyarupa Mam.jpg",email:"arghyarupabehera3@gmail.com",role:"it"},{name:"Ms. Itishree Nath",designation:"IT Faculty",qualification:"BCA",img:"/CTC NEW REACT WEBSITE/images/OURTEAM/itishreemam.jpg",email:"",role:"it"},{name:"Mr. Satya S. S. Dehury",designation:"Public Relationship Officer",qualification:"MBA",img:"/CTC NEW REACT WEBSITE/images/OURTEAM/Satya Sir.jpg",email:"sssdehury89@gmail.com",role:"admin"},{name:"Ms. Monika Sahu",designation:"Librarian",qualification:"BCA, B.Lib.I.Sc",img:"/CTC NEW REACT WEBSITE/images/OURTEAM/monikamam.jpg",email:"monika28sahu@gmail.com",role:"lib"},{name:"Mr. Abhishek Satpathy",designation:"Accountant",qualification:"B.Com (Acctg), MBA",img:"/CTC NEW REACT WEBSITE/images/OURTEAM/abhiseksir.jpg",email:"abhisheksathpathy020@gmail.com",role:"admin"},{name:"Mr. Sarat Chandra Sahu",designation:"Campus Incharge",qualification:"General +3",img:"/CTC NEW REACT WEBSITE/images/OURTEAM/Sarat Sir.jpg",email:"saratmuna243@gmail.com",role:"admin"}];function oh(){ih();const[i,o]=y.useState(""),l=sh.filter(d=>d.name.toLowerCase().includes(i.toLowerCase())||d.designation.toLowerCase().includes(i.toLowerCase()));return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
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
            `}),e.jsxs("div",{className:"page-hero",children:[e.jsx("div",{className:"page-hero-dots"}),e.jsx("span",{className:"section-label",children:"Meet The People"}),e.jsxs("h1",{children:["Our ",e.jsx("span",{children:"Team"})]}),e.jsx("p",{children:"Dedicated educators and professionals shaping the future of our students"})]}),e.jsxs("div",{className:"team-header",children:[e.jsx("span",{className:"section-label",children:"Faculty & Staff"}),e.jsxs("h2",{children:["The ",e.jsx("span",{children:"Minds"})," Behind CTC"]}),e.jsx("p",{children:"Our team of experienced educators, industry professionals, and dedicated staff work together to provide an exceptional learning experience."})]}),e.jsx("div",{className:"search-bar",children:e.jsx("input",{type:"text",placeholder:"Search by name or designation...",value:i,onChange:d=>o(d.target.value)})}),e.jsx("div",{className:"team-grid",children:l.map((d,m)=>e.jsxs("div",{className:"team-card reveal",style:{transitionDelay:`${m%4*.08}s`},children:[e.jsx("div",{className:"team-card-img",children:e.jsx("img",{src:d.img,alt:d.name,onError:f=>{f.target.src="/CTC NEW REACT WEBSITE/images/HOMEPAGE/Director Sir.jpg"}})}),e.jsxs("div",{className:"team-card-body",children:[e.jsx("h3",{children:d.name}),e.jsx("div",{className:"designation",children:d.designation}),e.jsxs("div",{className:"qualification",children:[e.jsx("i",{className:"fa-solid fa-certificate",style:{marginRight:"5px",color:"#f5c518"}}),d.qualification]}),e.jsxs("div",{className:"email",children:[e.jsx("i",{className:"fa-solid fa-envelope"}),d.email?e.jsx("a",{href:`mailto:${d.email}`,children:d.email}):e.jsx("span",{children:"Email not available"})]})]})]},d.name))})]})}function lh(){y.useEffect(()=>{const i=document.querySelectorAll(".reveal, .reveal-left, .reveal-right"),o=new IntersectionObserver(l=>l.forEach(d=>{d.isIntersecting&&d.target.classList.add("visible")}),{threshold:.08});return i.forEach(l=>o.observe(l)),()=>o.disconnect()},[])}function ch(i,o=1800){const[l,d]=y.useState(0),m=y.useRef(null);return y.useEffect(()=>{const f=m.current;if(!f)return;const u=new IntersectionObserver(([w])=>{if(!w.isIntersecting)return;u.disconnect();let b=0;const v=Math.ceil(i/(o/16)),x=()=>{b=Math.min(b+v,i),d(b),b<i&&requestAnimationFrame(x)};requestAnimationFrame(x)},{threshold:.3});return u.observe(f),()=>u.disconnect()},[i,o]),[l,m]}function dh({pct:i,color:o,label:l,seats:d,admitted:m}){const u=2*Math.PI*54,[w,b]=y.useState(!1),v=y.useRef(null);y.useEffect(()=>{const h=new IntersectionObserver(([T])=>{T.isIntersecting&&(b(!0),h.disconnect())},{threshold:.3});return v.current&&h.observe(v.current),()=>h.disconnect()},[]);const x=w?u*(1-i/100):u;return e.jsxs("div",{ref:v,style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"14px"},children:[e.jsxs("div",{style:{position:"relative",width:"130px",height:"130px"},children:[e.jsxs("svg",{width:"130",height:"130",viewBox:"0 0 130 130",children:[e.jsx("circle",{cx:"65",cy:"65",r:54,fill:"none",stroke:"rgba(255,255,255,0.08)",strokeWidth:"10"}),e.jsx("circle",{cx:"65",cy:"65",r:54,fill:"none",stroke:o,strokeWidth:"10",strokeLinecap:"round",strokeDasharray:u,strokeDashoffset:x,style:{transition:"stroke-dashoffset 1.6s cubic-bezier(.4,0,.2,1)",transformOrigin:"65px 65px",transform:"rotate(-90deg)"}})]}),e.jsxs("div",{style:{position:"absolute",inset:0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[e.jsxs("span",{style:{fontFamily:"var(--font-head)",fontSize:"1.4rem",fontWeight:900,color:"#fff",lineHeight:1},children:[i,"%"]}),e.jsx("span",{style:{fontSize:"0.6rem",color:"rgba(255,255,255,0.45)",marginTop:"2px"},children:"FILLED"})]})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx("div",{style:{fontFamily:"var(--font-head)",fontSize:"1.1rem",fontWeight:800,color:"#fff"},children:l}),e.jsxs("div",{style:{fontSize:"0.72rem",color:"rgba(255,255,255,0.45)",marginTop:"4px"},children:[m," / ",d," seats"]})]})]})}const ph=[{abbr:"BBA",full:"Bachelor of Business Administration",seats:120,duration:"4 Years",fee:"₹50,000/yr",icon:"fa-solid fa-briefcase",tags:["Marketing","Finance","HR","Entrepreneurship"],accent:"#f5c518"},{abbr:"BCA",full:"Bachelor of Computer Applications",seats:120,duration:"4 Years",fee:"₹60,000/yr",icon:"fa-solid fa-laptop-code",tags:["Web Dev","Networking","Database","Java"],accent:"#00d4ff"},{abbr:"B.Sc CS (H)",full:"B.Sc Computer Science (Hons.)",seats:128,duration:"4 Years",fee:"₹60,000/yr",icon:"fa-solid fa-microchip",tags:["AI / ML","Python","Algorithms","Cloud"],accent:"#7b61ff"},{abbr:"B.Sc DS",full:"B.Sc Data Science",seats:30,duration:"4 Years",fee:"₹70,000/yr",icon:"fa-solid fa-chart-pie",tags:["Data Analytics","Statistics","ML","Tableau"],accent:"#ff6b6b"}],Od=[{n:"01",icon:"fa-solid fa-clipboard-check",title:"Check Eligibility",body:"10+2 pass with min. 45% from any recognised board."},{n:"02",icon:"fa-solid fa-pen-to-square",title:"Fill Application",body:"Complete the online form or visit the college office."},{n:"03",icon:"fa-solid fa-file-arrow-up",title:"Upload Documents",body:"Upload scanned copies as per the document checklist."},{n:"04",icon:"fa-solid fa-credit-card",title:"Pay Fee",body:"Pay admission fee online or at the college counter."},{n:"05",icon:"fa-solid fa-circle-check",title:"Enrolment",body:"Receive confirmation and report on the specified date."}],mh=[{icon:"fa-solid fa-file-signature",label:"10th Certificate & Mark Sheet"},{icon:"fa-solid fa-file-lines",label:"+2 Certificate & Mark Sheet"},{icon:"fa-solid fa-id-card",label:"Aadhaar Card (Self & Parent)"},{icon:"fa-solid fa-graduation-cap",label:"Character / CLC Certificate"},{icon:"fa-solid fa-passport",label:"Migration Certificate"},{icon:"fa-solid fa-camera",label:"4 Passport-Size Photographs"},{icon:"fa-solid fa-shield-halved",label:"Caste Certificate (if applicable)"},{icon:"fa-solid fa-building-columns",label:"Bank Account Details"}],fh=[{course:"BBA",name:"Mr. Subhrajyoti Behera",email:"subhrajyoticafpl@gmail.com",phone:"+91 9861071840",img:"/CTC NEW REACT WEBSITE/images/OURTEAM/Subhrajyoti Sir.jpg",accent:"#f5c518"},{course:"BCA",name:"Mr. Manoj Kumar Das",email:"dasmanojp@gmail.com",phone:"+91 9338233303",img:"/CTC NEW REACT WEBSITE/images/OURTEAM/Dean Sir.jpg",accent:"#00d4ff"},{course:"B.Sc CS(H)",name:"Mr. Krishnashis Mishra",email:"principal.creativecollege@gmail.com",phone:"+91 9853325903",img:"/CTC NEW REACT WEBSITE/images/OURTEAM/Principal Sir.jpg",accent:"#7b61ff"},{course:"B.Sc DS",name:"Mr. Bhabani Sankar Sahoo",email:"bhabaniwipro89@gmail.com",phone:"+91 9668844571",img:"/CTC NEW REACT WEBSITE/images/OURTEAM/Bhabani Sir.jpg",accent:"#ff6b6b"}],uh=[{label:"BBA",pct:100,color:"#f5c518",seats:120,admitted:120},{label:"BCA",pct:50,color:"#00d4ff",seats:120,admitted:60},{label:"B.Sc CS(H)",pct:53,color:"#7b61ff",seats:128,admitted:68},{label:"B.Sc DS",pct:83,color:"#ff6b6b",seats:36,admitted:30}],hh=[{year:"2020",total:119,bba:16,bca:53,bsccs:50},{year:"2021",total:154,bba:30,bca:60,bsccs:64},{year:"2022",total:155,bba:30,bca:60,bsccs:65},{year:"2023",total:157,bba:30,bca:60,bsccs:67},{year:"2024",total:158,bba:30,bca:60,bsccs:68}],so=200;function gh({target:i,suffix:o=""}){const[l,d]=ch(i);return e.jsxs("span",{ref:d,children:[l,o]})}function xh(){return lh(),e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"adm2-hero",children:[e.jsx("div",{className:"adm2-hero-glow"}),e.jsxs("div",{className:"adm2-hero-content",children:[e.jsx("span",{className:"section-label",style:{color:"var(--cyan)"},children:"Admissions Open"}),e.jsxs("h1",{children:["Shape Your ",e.jsx("span",{style:{color:"var(--gold)"},children:"Future"}),e.jsx("br",{}),"at Creative Techno College"]}),e.jsx("p",{children:"AICTE Approved · Utkal University Affiliated · Angul, Odisha"}),e.jsxs("div",{className:"adm2-hero-btns",children:[e.jsxs(Ne,{to:"/admission/apply",className:"btn-primary",children:[e.jsx("i",{className:"fa-solid fa-pen-to-square"})," Apply Online"]}),e.jsxs("a",{href:"/pdfs/brochure.pdf",download:!0,className:"btn-outline",children:[e.jsx("i",{className:"fa-solid fa-file-arrow-down"})," Download Brochure"]})]})]}),e.jsx("div",{className:"adm2-hero-stats",children:[{icon:"fa-solid fa-users",val:398,suf:"+",label:"Total Seats"},{icon:"fa-solid fa-graduation-cap",val:1500,suf:"+",label:"Alumni"},{icon:"fa-solid fa-trophy",val:95,suf:"%",label:"Placement Rate"},{icon:"fa-solid fa-calendar-days",val:15,suf:"+",label:"Years of Excellence"}].map((i,o)=>e.jsxs("div",{className:"adm2-qstat",children:[e.jsx("i",{className:i.icon}),e.jsx("div",{className:"adm2-qstat-val",children:e.jsx(gh,{target:i.val,suffix:i.suf})}),e.jsx("div",{className:"adm2-qstat-label",children:i.label})]},o))})]}),e.jsx("section",{className:"adm2-section",style:{background:"var(--page-bg)"},children:e.jsxs("div",{className:"adm2-wrap",children:[e.jsxs("div",{className:"adm2-heading reveal",children:[e.jsx("span",{className:"section-label",children:"Academic Programs"}),e.jsxs("h2",{className:"section-title",children:["Courses ",e.jsx("span",{children:"Offered"})]}),e.jsx("p",{className:"section-subtitle",style:{margin:"0 auto"},children:"Government recognised · Utkal University affiliated · Industry-focused curriculum"})]}),e.jsx("div",{className:"adm2-courses",children:ph.map((i,o)=>e.jsxs("div",{className:"adm2-course reveal",style:{transitionDelay:`${o*.1}s`},children:[e.jsx("div",{style:{height:"4px",background:i.accent,borderRadius:"20px 20px 0 0",margin:"-28px -28px 24px",flexShrink:0}}),e.jsxs("div",{style:{display:"flex",alignItems:"flex-start",justifyContent:"space-between",gap:"12px",marginBottom:"16px"},children:[e.jsx("div",{style:{background:`${i.accent}1a`,border:`1px solid ${i.accent}44`,borderRadius:"14px",width:"52px",height:"52px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.3rem",color:i.accent,flexShrink:0},children:e.jsx("i",{className:i.icon})}),e.jsxs("div",{style:{background:"var(--page-bg)",borderRadius:"20px",padding:"4px 13px",fontSize:"0.75rem",fontFamily:"var(--font-head)",fontWeight:700,color:"var(--navy)",whiteSpace:"nowrap"},children:[i.seats," seats"]})]}),e.jsx("h3",{style:{fontFamily:"var(--font-head)",fontSize:"1.4rem",fontWeight:900,color:"var(--navy)",marginBottom:"4px"},children:i.abbr}),e.jsx("p",{style:{fontSize:"0.78rem",color:"var(--text-muted)",marginBottom:"16px",lineHeight:1.5},children:i.full}),e.jsx("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",marginBottom:"20px"},children:i.tags.map((l,d)=>e.jsx("span",{style:{background:`${i.accent}16`,color:i.accent,border:`1px solid ${i.accent}30`,borderRadius:"10px",padding:"3px 10px",fontSize:"0.69rem",fontFamily:"var(--font-head)",fontWeight:600},children:l},d))}),e.jsxs("div",{style:{marginTop:"auto",borderTop:"1px solid rgba(10,22,40,0.07)",paddingTop:"16px",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsxs("span",{style:{fontSize:"0.8rem",color:"var(--text-muted)",fontFamily:"var(--font-head)",fontWeight:600},children:[e.jsx("i",{className:"fa-regular fa-clock",style:{marginRight:"5px"}}),i.duration," · ",i.fee]}),e.jsxs(Ne,{to:"/admission/apply",style:{display:"inline-flex",alignItems:"center",gap:"6px",background:i.accent,color:i.accent==="#f5c518"?"#0a1628":"#fff",padding:"7px 16px",borderRadius:"20px",fontSize:"0.76rem",fontFamily:"var(--font-head)",fontWeight:700,textDecoration:"none",transition:"opacity 0.2s"},children:["Apply ",e.jsx("i",{className:"fa-solid fa-arrow-right"})]})]})]},o))})]})}),e.jsxs("section",{className:"adm2-section",style:{background:"linear-gradient(160deg, #060d1a 0%, #0a1f3d 50%, #091828 100%)",position:"relative",overflow:"hidden"},children:[e.jsx("div",{style:{position:"absolute",top:"-80px",right:"-80px",width:"400px",height:"400px",borderRadius:"50%",background:"radial-gradient(circle, rgba(0,212,255,0.08) 0%, transparent 70%)",pointerEvents:"none"}}),e.jsx("div",{style:{position:"absolute",bottom:"-60px",left:"-60px",width:"300px",height:"300px",borderRadius:"50%",background:"radial-gradient(circle, rgba(123,97,255,0.08) 0%, transparent 70%)",pointerEvents:"none"}}),e.jsxs("div",{className:"adm2-wrap",style:{position:"relative"},children:[e.jsxs("div",{className:"adm2-heading reveal",children:[e.jsx("span",{className:"section-label",style:{color:"var(--cyan)"},children:"Data Insights"}),e.jsxs("h2",{className:"section-title",style:{color:"#fff"},children:["Admission ",e.jsx("span",{style:{color:"var(--gold)"},children:"Statistics"})]}),e.jsx("p",{style:{color:"rgba(255,255,255,0.45)",fontSize:"0.85rem",marginTop:"6px"},children:"Academic Year 2024-25 seat utilisation & year-over-year enrollment trends"})]}),e.jsx("div",{className:"adm2-rings-row",children:uh.map((i,o)=>e.jsx(dh,{...i},o))}),e.jsx("div",{style:{height:"1px",background:"rgba(255,255,255,0.07)",margin:"56px 0"}}),e.jsx("div",{className:"adm2-heading reveal",style:{marginBottom:"32px"},children:e.jsx("h3",{style:{fontFamily:"var(--font-head)",fontSize:"1.1rem",fontWeight:800,color:"rgba(255,255,255,0.6)",letterSpacing:"0.1em",textTransform:"uppercase"},children:"Year-over-Year Enrollment (2020–2024)"})}),e.jsxs("div",{className:"adm2-yoy reveal",children:[hh.map((i,o)=>e.jsxs("div",{className:"adm2-yoy-row",children:[e.jsx("div",{className:"adm2-yoy-year",children:i.year}),e.jsxs("div",{className:"adm2-yoy-bars",children:[e.jsxs("div",{className:"adm2-yoy-track",title:`BBA: ${i.bba}`,children:[e.jsx("div",{className:"adm2-yoy-fill",style:{width:`${i.bba/so*100}%`,background:"#f5c518"}}),e.jsx("span",{className:"adm2-yoy-tip",children:i.bba})]}),e.jsxs("div",{className:"adm2-yoy-track",title:`BCA: ${i.bca}`,children:[e.jsx("div",{className:"adm2-yoy-fill",style:{width:`${i.bca/so*100}%`,background:"#00d4ff"}}),e.jsx("span",{className:"adm2-yoy-tip",children:i.bca})]}),e.jsxs("div",{className:"adm2-yoy-track",title:`B.Sc CS: ${i.bsccs}`,children:[e.jsx("div",{className:"adm2-yoy-fill",style:{width:`${i.bsccs/so*100}%`,background:"#7b61ff"}}),e.jsx("span",{className:"adm2-yoy-tip",children:i.bsccs})]})]}),e.jsxs("div",{className:"adm2-yoy-total",children:[e.jsx("span",{style:{fontFamily:"var(--font-head)",fontWeight:900,color:"var(--gold)",fontSize:"1.3rem"},children:i.total}),e.jsx("span",{style:{fontSize:"0.65rem",color:"rgba(255,255,255,0.35)",display:"block",marginTop:"2px"},children:"total"})]})]},o)),e.jsx("div",{className:"adm2-yoy-legend",children:[["#f5c518","BBA"],["#00d4ff","BCA"],["#7b61ff","B.Sc CS(H)"]].map(([i,o])=>e.jsxs("span",{children:[e.jsx("span",{style:{background:i}}),o]},o))})]})]})]}),e.jsx("section",{className:"adm2-section",style:{background:"#fff"},children:e.jsxs("div",{className:"adm2-wrap",children:[e.jsxs("div",{className:"adm2-heading reveal",children:[e.jsx("span",{className:"section-label",children:"Simple Process"}),e.jsxs("h2",{className:"section-title",children:["How to ",e.jsx("span",{children:"Apply"})]})]}),e.jsx("div",{className:"adm2-steps reveal",children:Od.map((i,o)=>e.jsxs("div",{className:"adm2-step",children:[o<Od.length-1&&e.jsx("div",{className:"adm2-step-line"}),e.jsx("div",{className:"adm2-step-circle",children:e.jsx("i",{className:i.icon})}),e.jsx("div",{className:"adm2-step-num",children:i.n}),e.jsx("h3",{children:i.title}),e.jsx("p",{children:i.body})]},o))})]})}),e.jsx("section",{className:"adm2-section",style:{background:"var(--page-bg)"},children:e.jsxs("div",{className:"adm2-wrap adm2-doc-coord",children:[e.jsxs("div",{className:"reveal-left",style:{flex:"1 1 300px"},children:[e.jsx("span",{className:"section-label",children:"Checklist"}),e.jsxs("h2",{className:"section-title",style:{marginBottom:"24px"},children:["Documents ",e.jsx("span",{children:"Required"})]}),e.jsx("div",{className:"adm2-docgrid",children:mh.map((i,o)=>e.jsxs("div",{className:"adm2-docitem",children:[e.jsx("i",{className:i.icon}),e.jsx("span",{children:i.label})]},o))})]}),e.jsxs("div",{className:"reveal-right",style:{flex:"1 1 340px"},children:[e.jsx("span",{className:"section-label",children:"Get in Touch"}),e.jsx("h2",{className:"section-title",style:{marginBottom:"24px"},children:"Coordinators"}),e.jsx("div",{className:"adm2-coords",children:fh.map((i,o)=>e.jsxs("div",{className:"adm2-coord",children:[e.jsx("img",{src:i.img,alt:i.name,className:"adm2-coord-img",onError:l=>l.target.style.display="none",style:{borderColor:i.accent}}),e.jsxs("div",{children:[e.jsx("span",{className:"adm2-coord-badge",style:{background:`${i.accent}22`,color:i.accent,border:`1px solid ${i.accent}44`},children:i.course}),e.jsx("p",{className:"adm2-coord-name",children:i.name}),e.jsxs("p",{className:"adm2-coord-info",children:[e.jsx("i",{className:"fa-solid fa-phone"}),i.phone]}),e.jsxs("p",{className:"adm2-coord-info",children:[e.jsx("i",{className:"fa-solid fa-envelope"}),i.email]})]})]},o))})]})]})}),e.jsxs("section",{style:{background:"linear-gradient(135deg, var(--navy) 0%, #0f2a4e 100%)",padding:"80px 5%",overflow:"hidden",position:"relative"},children:[e.jsx("div",{style:{position:"absolute",inset:0,background:"radial-gradient(ellipse at 70% 50%, rgba(0,212,255,0.07) 0%, transparent 60%)",pointerEvents:"none"}}),e.jsxs("div",{style:{maxWidth:"1100px",margin:"0 auto",display:"flex",gap:"60px",alignItems:"center",flexWrap:"wrap",position:"relative"},children:[e.jsxs("div",{className:"reveal-left",style:{flex:"1 1 300px"},children:[e.jsx("span",{className:"section-label",style:{color:"var(--cyan)"},children:"Official Publication"}),e.jsxs("h2",{className:"section-title",style:{color:"#fff",marginBottom:"18px"},children:["College ",e.jsx("span",{style:{color:"var(--gold)"},children:"Brochure"})]}),e.jsx("p",{style:{color:"rgba(255,255,255,0.6)",lineHeight:1.9,fontSize:"0.9rem"},children:"Creative Techno College, Angul — permanently recognised by the Government of Odisha, Dept. of Higher Education and affiliated to Utkal University. A pioneer in IT and Management education in Central Odisha since 2010."}),e.jsxs("div",{style:{marginTop:"20px",display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsxs("p",{style:{color:"rgba(255,255,255,0.55)",fontSize:"0.82rem"},children:[e.jsx("i",{className:"fa-solid fa-location-dot",style:{color:"var(--cyan)",marginRight:"8px"}}),"Baluakata, Saradhapur, Angul, Odisha"]}),e.jsxs("p",{style:{color:"rgba(255,255,255,0.55)",fontSize:"0.82rem"},children:[e.jsx("i",{className:"fa-solid fa-building",style:{color:"var(--cyan)",marginRight:"8px"}}),"City Office: Tamrit Colony, Angul"]})]}),e.jsxs("a",{href:"/pdfs/brochure.pdf",download:!0,className:"btn-primary",style:{marginTop:"28px",display:"inline-flex"},children:[e.jsx("i",{className:"fa-solid fa-file-arrow-down"})," Download Brochure"]})]}),e.jsx("div",{className:"reveal-right",style:{flex:"1 1 280px",maxWidth:"460px"},children:e.jsx("img",{src:"/CTC NEW REACT WEBSITE/images/Admission/banner.png",alt:"CTC Brochure",style:{width:"100%",borderRadius:"20px",boxShadow:"0 24px 60px rgba(0,0,0,0.5)"},onError:i=>i.target.style.display="none"})})]})]})]})}const bh="/CTC%20NEW%20REACT%20WEBSITE/Admission/submit.php",ho=[{id:1,label:"Personal Info",icon:"fa-solid fa-user"},{id:2,label:"Academic Info",icon:"fa-solid fa-graduation-cap"},{id:3,label:"Course & Details",icon:"fa-solid fa-book-open"},{id:4,label:"Review & Submit",icon:"fa-solid fa-paper-plane"}];function yh({step:i}){return e.jsx("div",{className:"af-progress",children:ho.map((o,l)=>e.jsxs("div",{className:`af-step-node ${i>=o.id?"done":""} ${i===o.id?"active":""}`,children:[e.jsx("div",{className:"af-node-circle",children:i>o.id?e.jsx("i",{className:"fa-solid fa-check"}):e.jsx("i",{className:o.icon})}),e.jsx("span",{className:"af-node-label",children:o.label}),l<ho.length-1&&e.jsx("div",{className:`af-node-line ${i>o.id?"done":""}`})]},o.id))})}function Re({label:i,icon:o,error:l,children:d}){return e.jsxs("div",{className:"af-field",children:[e.jsxs("label",{className:"af-label",children:[o&&e.jsx("i",{className:o}),i]}),d,l&&e.jsxs("span",{className:"af-error",children:[e.jsx("i",{className:"fa-solid fa-circle-exclamation"})," ",l]})]})}function vh(){const i=ii(),[o,l]=y.useState(1),[d,m]=y.useState(!1),[f,u]=y.useState(!1),[w,b]=y.useState(""),[v,x]=y.useState(null),[h,T]=y.useState({}),[P,K]=y.useState({fullName:"",dob:"",gender:"",category:"",phone:"",email:"",school10:"",pct10:"",school12:"",stream:"",pct12:"",yearPass:"",course:"",address:"",district:"",state:"Odisha",pincode:"",havePC:"",reference:""});y.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[o]);const W=(V,J)=>K(ye=>({...ye,[V]:J})),L=V=>T(J=>{const ye={...J};return delete ye[V],ye});function B(V){const J={};return V===1&&(P.fullName.trim()||(J.fullName="Full name is required"),P.dob||(J.dob="Date of birth is required"),P.gender||(J.gender="Please select your gender"),P.phone.match(/^\d{10}$/)||(J.phone="Enter a valid 10-digit mobile number")),V===2&&(P.school10.trim()||(J.school10="Please enter your 10th school name"),P.pct10||(J.pct10="Enter 10th percentage / grade"),P.school12.trim()||(J.school12="Please enter your +2 school name"),P.pct12||(J.pct12="Enter +2 percentage / grade"),P.stream||(J.stream="Please select your +2 stream"),P.yearPass||(J.yearPass="Enter your year of passing +2")),V===3&&(P.course||(J.course="Please select a course"),P.address.trim()||(J.address="Address is required"),P.district.trim()||(J.district="District is required"),P.pincode.match(/^\d{6}$/)||(J.pincode="Enter a valid 6-digit pin code")),J}function A(){const V=B(o);if(Object.keys(V).length){T(V);return}T({}),l(J=>J+1)}function _(){l(V=>V-1),T({})}async function X(){u(!0),b("");try{const J=await(await fetch(bh,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(P)})).json();J.success?(x(J.application_id),m(!0)):b(J.error||"Submission failed. Please try again.")}catch{b("Network error. Please check your connection and try again.")}finally{u(!1)}}const ie=({name:V,type:J="text",placeholder:ye,...ra})=>e.jsx("input",{className:`af-input ${h[V]?"af-input-err":""}`,type:J,value:P[V],placeholder:ye,onChange:qe=>{W(V,qe.target.value),L(V)},...ra}),me=({name:V,children:J})=>e.jsx("select",{className:`af-input ${h[V]?"af-input-err":""}`,value:P[V],onChange:ye=>{W(V,ye.target.value),L(V)},children:J});return d?e.jsx(jh,{name:P.fullName,course:P.course,appId:v,navigate:i}):e.jsxs("div",{className:"af-page",children:[e.jsxs("div",{className:"af-hero",children:[e.jsx("div",{className:"af-hero-glow"}),e.jsxs("div",{style:{position:"relative"},children:[e.jsx("span",{className:"section-label",style:{color:"var(--cyan)"},children:"Online Application"}),e.jsxs("h1",{style:{fontFamily:"var(--font-head)",fontSize:"clamp(1.6rem, 3.5vw, 2.6rem)",fontWeight:900,color:"#fff",margin:"12px 0 10px"},children:["Apply for Admission ",e.jsx("span",{style:{color:"var(--gold)"},children:"2026–27"})]}),e.jsx("p",{style:{color:"rgba(255,255,255,0.45)",fontSize:"0.88rem",letterSpacing:"0.04em"},children:"Creative Techno College, Angul · AICTE Approved · Utkal University Affiliated"})]})]}),e.jsxs("div",{className:"af-body",children:[e.jsxs("div",{className:"af-card",children:[e.jsx(yh,{step:o}),o===1&&e.jsxs("div",{className:"af-form-section",children:[e.jsxs("h2",{className:"af-form-title",children:[e.jsx("i",{className:"fa-solid fa-user"})," Personal Information"]}),e.jsxs("div",{className:"af-grid-2",children:[e.jsx(Re,{label:"Full Name *",icon:"fa-solid fa-signature",error:h.fullName,children:e.jsx(ie,{name:"fullName",placeholder:"As per 10th certificate"})}),e.jsx(Re,{label:"Date of Birth *",error:h.dob,children:e.jsx(ie,{name:"dob",type:"date"})}),e.jsx(Re,{label:"Gender *",error:h.gender,children:e.jsxs(me,{name:"gender",children:[e.jsx("option",{value:"",children:"Select Gender"}),e.jsx("option",{children:"Male"}),e.jsx("option",{children:"Female"}),e.jsx("option",{children:"Other"})]})}),e.jsx(Re,{label:"Category",children:e.jsxs(me,{name:"category",children:[e.jsx("option",{value:"",children:"Select Category"}),e.jsx("option",{children:"General"}),e.jsx("option",{children:"OBC"}),e.jsx("option",{children:"SC"}),e.jsx("option",{children:"ST"}),e.jsx("option",{children:"PwD"})]})}),e.jsx(Re,{label:"Mobile Number *",icon:"fa-solid fa-phone",error:h.phone,children:e.jsx(ie,{name:"phone",type:"tel",placeholder:"10-digit mobile number",maxLength:10})}),e.jsx(Re,{label:"Email Address",icon:"fa-solid fa-envelope",children:e.jsx(ie,{name:"email",type:"email",placeholder:"Optional"})})]})]}),o===2&&e.jsxs("div",{className:"af-form-section",children:[e.jsxs("h2",{className:"af-form-title",children:[e.jsx("i",{className:"fa-solid fa-graduation-cap"})," Academic Details"]}),e.jsx("p",{className:"af-form-subtitle",children:"10th Certificate Details"}),e.jsxs("div",{className:"af-grid-2",children:[e.jsx(Re,{label:"10th School / Board *",error:h.school10,children:e.jsx(ie,{name:"school10",placeholder:"School name"})}),e.jsx(Re,{label:"10th Percentage / CGPA *",error:h.pct10,children:e.jsx(ie,{name:"pct10",placeholder:"e.g. 78% or 7.8 CGPA"})})]}),e.jsx("p",{className:"af-form-subtitle",style:{marginTop:"24px"},children:"+2 / 12th / Diploma Details"}),e.jsxs("div",{className:"af-grid-2",children:[e.jsx(Re,{label:"+2 School / College / Board *",error:h.school12,children:e.jsx(ie,{name:"school12",placeholder:"School / college name"})}),e.jsx(Re,{label:"+2 Stream *",error:h.stream,children:e.jsxs(me,{name:"stream",children:[e.jsx("option",{value:"",children:"Select Stream"}),e.jsx("option",{children:"Science (PCM)"}),e.jsx("option",{children:"Science (PCB)"}),e.jsx("option",{children:"Commerce"}),e.jsx("option",{children:"Arts / Humanities"}),e.jsx("option",{children:"Vocational"}),e.jsx("option",{children:"Diploma"})]})}),e.jsx(Re,{label:"+2 Percentage / CGPA *",error:h.pct12,children:e.jsx(ie,{name:"pct12",placeholder:"e.g. 65% or 6.5 CGPA"})}),e.jsx(Re,{label:"Year of Passing +2 *",error:h.yearPass,children:e.jsxs(me,{name:"yearPass",children:[e.jsx("option",{value:"",children:"Select Year"}),[2025,2024,2023,2022,2021,2020,2019].map(V=>e.jsx("option",{children:V},V))]})})]})]}),o===3&&e.jsxs("div",{className:"af-form-section",children:[e.jsxs("h2",{className:"af-form-title",children:[e.jsx("i",{className:"fa-solid fa-book-open"})," Course & Contact Details"]}),e.jsxs(Re,{label:"Course Applied For *",error:h.course,children:[e.jsx("div",{className:"af-course-pick",children:[{v:"BBA",label:"BBA",sub:"Bachelor of Business Administration",color:"#f5c518"},{v:"BCA",label:"BCA",sub:"Bachelor of Computer Applications",color:"#00d4ff"},{v:"B.Sc CS(H)",label:"B.Sc CS(H)",sub:"Computer Science (Honours)",color:"#7b61ff"},{v:"B.Sc DS",label:"B.Sc DS",sub:"Data Science",color:"#ff6b6b"}].map(V=>e.jsxs("label",{className:`af-course-tile ${P.course===V.v?"sel":""}`,style:{"--tc":V.color},children:[e.jsx("input",{type:"radio",name:"course",value:V.v,checked:P.course===V.v,onChange:()=>{W("course",V.v),L("course")}}),e.jsx("strong",{children:V.label}),e.jsx("span",{children:V.sub})]},V.v))}),h.course&&e.jsxs("span",{className:"af-error",children:[e.jsx("i",{className:"fa-solid fa-circle-exclamation"})," ",h.course]})]}),e.jsx("p",{className:"af-form-subtitle",style:{marginTop:"24px"},children:"Permanent Address"}),e.jsxs("div",{className:"af-grid-2",children:[e.jsx(Re,{label:"Address *",error:h.address,children:e.jsx("textarea",{className:`af-input ${h.address?"af-input-err":""}`,rows:3,placeholder:"Street / Village / Ward",value:P.address,onChange:V=>{W("address",V.target.value),L("address")}})}),e.jsxs("div",{children:[e.jsx(Re,{label:"District *",error:h.district,children:e.jsx(ie,{name:"district",placeholder:"e.g. Angul"})}),e.jsx(Re,{label:"State",style:{marginTop:"12px"},children:e.jsx(ie,{name:"state",placeholder:"State"})})]}),e.jsx(Re,{label:"PIN Code *",error:h.pincode,children:e.jsx(ie,{name:"pincode",placeholder:"6-digit pin",maxLength:6})}),e.jsx(Re,{label:"Do you have a PC / Laptop at home?",children:e.jsxs(me,{name:"havePC",children:[e.jsx("option",{value:"",children:"Select"}),e.jsx("option",{children:"Yes"}),e.jsx("option",{children:"No"})]})}),e.jsx(Re,{label:"How did you hear about us?",children:e.jsxs(me,{name:"reference",children:[e.jsx("option",{value:"",children:"Select"}),e.jsx("option",{children:"Friend / Family"}),e.jsx("option",{children:"Social Media"}),e.jsx("option",{children:"News / Newspaper"}),e.jsx("option",{children:"School / Teacher"}),e.jsx("option",{children:"Walk-in / Visit"}),e.jsx("option",{children:"Other"})]})})]})]}),o===4&&e.jsxs("div",{className:"af-form-section",children:[e.jsxs("h2",{className:"af-form-title",children:[e.jsx("i",{className:"fa-solid fa-eye"})," Review Your Application"]}),e.jsxs("p",{style:{color:"var(--text-muted)",fontSize:"0.83rem",marginBottom:"24px"},children:["Please review your information carefully. Clicking ",e.jsx("strong",{children:"Submit Application"})," will securely save your details directly to the database."]}),e.jsxs("div",{className:"af-review-grid",children:[e.jsx(oo,{title:"Personal Information",icon:"fa-solid fa-user",rows:[["Full Name",P.fullName],["Date of Birth",P.dob],["Gender",P.gender],["Category",P.category||"General"],["Mobile",P.phone],["Email",P.email||"—"]]}),e.jsx(oo,{title:"Academic Details",icon:"fa-solid fa-graduation-cap",rows:[["10th School",P.school10],["10th Marks",P.pct10],["+2 School",P.school12],["+2 Stream",P.stream],["+2 Marks",P.pct12],["Year of Pass",P.yearPass]]}),e.jsx(oo,{title:"Course & Address",icon:"fa-solid fa-book-open",rows:[["Course",P.course],["Address",P.address],["District",P.district],["State",P.state],["PIN Code",P.pincode],["Has PC/Laptop",P.havePC||"—"],["Reference",P.reference||"—"]]})]}),e.jsxs("div",{className:"af-wa-notice",style:{background:"rgba(45,125,210,0.08)",borderColor:"rgba(45,125,210,0.25)"},children:[e.jsx("i",{className:"fa-solid fa-database",style:{color:"var(--cyan)"}}),e.jsxs("p",{children:["Your application will be ",e.jsx("strong",{children:"securely stored"})," in the college database. The admission team will contact you on your registered mobile number for document verification."]})]})]}),e.jsxs("div",{className:"af-nav",children:[o>1?e.jsxs("button",{className:"af-btn-back",onClick:_,children:[e.jsx("i",{className:"fa-solid fa-arrow-left"})," Back"]}):e.jsxs(Ne,{to:"/admission",className:"af-btn-back",children:[e.jsx("i",{className:"fa-solid fa-arrow-left"})," Admission Info"]}),e.jsxs("div",{style:{display:"flex",gap:"10px",alignItems:"center"},children:[e.jsxs("span",{className:"af-step-count",children:["Step ",o," of ",ho.length]}),o<4?e.jsxs("button",{className:"af-btn-next",onClick:A,children:["Next ",e.jsx("i",{className:"fa-solid fa-arrow-right"})]}):e.jsx("button",{className:"af-btn-submit",onClick:X,disabled:f,style:{opacity:f?.7:1,cursor:f?"wait":"pointer"},children:f?e.jsxs(e.Fragment,{children:[e.jsx("i",{className:"fa-solid fa-spinner fa-spin"})," Submitting…"]}):e.jsxs(e.Fragment,{children:[e.jsx("i",{className:"fa-solid fa-paper-plane"})," Submit Application"]})})]}),w&&e.jsxs("p",{style:{color:"#e53e3e",fontSize:"0.82rem",marginTop:"10px",textAlign:"right",fontFamily:"var(--font-head)"},children:[e.jsx("i",{className:"fa-solid fa-circle-exclamation"})," ",w]})]})]}),e.jsxs("aside",{className:"af-aside",children:[e.jsxs("div",{className:"af-aside-card",children:[e.jsxs("h3",{children:[e.jsx("i",{className:"fa-solid fa-circle-info"})," Important Info"]}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Admission is on a ",e.jsx("strong",{children:"first-come, first-served"})," basis."]}),e.jsx("li",{children:"Bring original documents on the day of admission."}),e.jsxs("li",{children:["Eligibility: 10+2 pass with min. ",e.jsx("strong",{children:"45%"})," marks."]}),e.jsxs("li",{children:["For queries call: ",e.jsx("strong",{children:"+91 9668844571"})]})]})]}),e.jsxs("div",{className:"af-aside-card af-aside-courses",children:[e.jsxs("h3",{children:[e.jsx("i",{className:"fa-solid fa-table-list"})," Available Seats"]}),[{label:"BBA",seats:120,color:"#f5c518"},{label:"BCA",seats:120,color:"#00d4ff"},{label:"B.Sc CS(H)",seats:128,color:"#7b61ff"},{label:"B.Sc DS",seats:30,color:"#ff6b6b"}].map(V=>e.jsxs("div",{className:"af-seat-row",children:[e.jsx("span",{style:{width:"10px",height:"10px",borderRadius:"50%",background:V.color,display:"inline-block",flexShrink:0}}),e.jsx("span",{className:"af-seat-label",children:V.label}),e.jsxs("span",{className:"af-seat-count",children:[V.seats," seats"]})]},V.label))]}),e.jsxs("div",{className:"af-aside-card",children:[e.jsxs("h3",{children:[e.jsx("i",{className:"fa-solid fa-location-dot"})," Campus Address"]}),e.jsx("p",{children:"Baluakata, Saradhapur, Angul, Odisha — 759143"}),e.jsx("p",{style:{marginTop:"8px"},children:"City Office: Tamrit Colony, Angul"})]})]})]})]})}function oo({title:i,icon:o,rows:l}){return e.jsxs("div",{className:"af-review-block",children:[e.jsxs("div",{className:"af-review-block-title",children:[e.jsx("i",{className:o})," ",i]}),l.map(([d,m])=>e.jsxs("div",{className:"af-review-row",children:[e.jsx("span",{className:"af-review-key",children:d}),e.jsx("span",{className:"af-review-val",children:m||"—"})]},d))]})}function jh({name:i,course:o,appId:l,navigate:d}){return e.jsx("div",{className:"af-success-page",children:e.jsxs("div",{className:"af-success-card",children:[e.jsx("div",{className:"af-success-icon",children:e.jsx("i",{className:"fa-solid fa-circle-check"})}),e.jsx("h2",{children:"Application Submitted!"}),e.jsxs("p",{children:["Thank you, ",e.jsx("strong",{children:i}),"! Your application for ",e.jsx("strong",{children:o})," has been received by Creative Techno College."]}),l&&e.jsxs("p",{style:{marginTop:"14px",fontSize:"0.88rem",fontFamily:"var(--font-head)",color:"var(--blue-light)"},children:[e.jsx("i",{className:"fa-solid fa-hashtag"})," Application ID: ",e.jsxs("strong",{style:{color:"var(--gold)"},children:["#",l]})]}),e.jsxs("p",{style:{fontSize:"0.82rem",color:"var(--text-muted)",marginTop:"12px"},children:["Our team will contact you on ",e.jsxs("strong",{children:[i.split(" ")[0],"'s"]})," registered mobile number for further steps. Please keep your documents ready."]}),e.jsxs("div",{style:{display:"flex",gap:"12px",justifyContent:"center",flexWrap:"wrap",marginTop:"28px"},children:[e.jsxs("button",{className:"btn-primary",onClick:()=>d("/admission"),children:[e.jsx("i",{className:"fa-solid fa-arrow-left"})," Back to Admission"]}),e.jsxs("button",{className:"btn-outline",onClick:()=>d("/"),children:[e.jsx("i",{className:"fa-solid fa-house"})," Home"]})]})]})})}const wh=[{code:"BBA",full:"Bachelor of Business Administration",tagline:"Lead. Manage. Innovate.",icon:"fa-solid fa-briefcase",color:"#f59e0b",colorDark:"#d97706",colorLight:"#fef3c7",accent:"#92400e",tag:"Management",seats:120,duration:"4 Years · 8 Semesters",eligibility:"10+2 pass in any stream from a recognised board",overview:"The BBA program provides a solid foundation in management, business principles, and entrepreneurship. It blends theoretical concepts with practical applications to prepare students for leadership roles in the corporate world.",highlights:["Core subjects in Marketing, Finance, and Human Resource Management","Case studies, business simulations, and industry projects","Regular seminars, workshops, and industry visits","Focus on communication, leadership, and decision-making skills"],career:["Business Manager","Marketing Executive","HR Specialist","Entrepreneur","MBA Studies"],syllabus:"/CTC NEW REACT WEBSITE/images/REGULARCOURSES/BBA.pdf"},{code:"BCA",full:"Bachelor of Computer Applications",tagline:"Code. Build. Deploy.",icon:"fa-solid fa-laptop-code",color:"#3b82f6",colorDark:"#2563eb",colorLight:"#eff6ff",accent:"#1e3a8a",tag:"Technology",seats:120,duration:"4 Years · 8 Semesters",eligibility:"10+2 pass in any stream with Mathematics / Statistics as one subject",overview:"BCA is an undergraduate program focused on computer applications and IT skills. It prepares students to work in the software industry with a strong foundation in programming, databases, and system design.",highlights:["Programming in C, C++, Java, Python","Database Management, Web Development & Software Engineering","Exposure to cloud computing, networking & cybersecurity","Hands-on training via projects, coding competitions & workshops"],career:["Software Developer","Web Designer","Database Admin","System Analyst","MCA Studies"],syllabus:"/CTC NEW REACT WEBSITE/images/REGULARCOURSES/BCA.pdf"},{code:"B.Sc CS",full:"B.Sc. Computer Science (Honours)",tagline:"Analyse. Compute. Discover.",icon:"fa-solid fa-microchip",color:"#10b981",colorDark:"#059669",colorLight:"#ecfdf5",accent:"#064e3b",tag:"Science",seats:128,duration:"4 Years · 8 Semesters",eligibility:"10+2 pass with Science stream (compulsory)",overview:"This program offers in-depth knowledge of computer science fundamentals and advanced concepts. It emphasises analytical skills, algorithmic thinking, and research-oriented study.",highlights:["Data Structures, Algorithms & Operating Systems","Computer Networks, AI, Compiler Design, Software Development","Practical lab sessions and mini-projects every semester","Research and innovation-driven learning environment"],career:["Software Engineer","System Admin","Research Associate","M.Sc./MCA Studies"],syllabus:"/CTC NEW REACT WEBSITE/images/REGULARCOURSES/Bsc.pdf"},{code:"B.Sc DS",full:"B.Sc. Computer Science (Data Science)",tagline:"Predict. Analyse. Transform.",icon:"fa-solid fa-chart-line",color:"#8b5cf6",colorDark:"#7c3aed",colorLight:"#f5f3ff",accent:"#4c1d95",tag:"Data Science",seats:30,duration:"4 Years · 8 Semesters",eligibility:"10+2 pass with Science stream — Mathematics is compulsory",overview:"Designed for students aspiring to build a career in Data Science and AI. Focuses on data analytics, machine learning, and big data technologies for tech-driven industries.",highlights:["Python, R, Statistics & Data Visualization","Machine Learning, Deep Learning & Artificial Intelligence","Big Data Analytics & Cloud Computing concepts","Industry-based projects, internships & live case studies"],career:["Data Analyst","ML Engineer","BI Developer","AI Researcher","M.Sc. DS Studies"],syllabus:"/CTC NEW REACT WEBSITE/images/REGULARCOURSES/BscDsc.pdf"}];function Sh(i,o=1500,l=!1){const[d,m]=y.useState(0);return y.useEffect(()=>{if(!l)return;let f=null;const u=w=>{f||(f=w);const b=Math.min((w-f)/o,1);m(Math.floor(b*i)),b<1&&requestAnimationFrame(u)};requestAnimationFrame(u)},[i,o,l]),d}const Ch=[{value:4,label:"Programs",suffix:""},{value:240,label:"Total Seats",suffix:"+"},{value:4,label:"Year Duration",suffix:""},{value:100,label:"Placement Assist",suffix:"%"}];function kh(){const i=y.useRef(null),[o,l]=y.useState(!1);return y.useEffect(()=>{const d=new IntersectionObserver(([m])=>{m.isIntersecting&&l(!0)},{threshold:.3});return i.current&&d.observe(i.current),()=>d.disconnect()},[]),e.jsx("div",{ref:i,className:"rc2-stats-row",children:Ch.map((d,m)=>{const f=Sh(d.value,1400,o);return e.jsxs("div",{className:"rc2-stat",style:{animationDelay:`${m*.1}s`},children:[e.jsxs("span",{className:"rc2-stat-num",children:[f,d.suffix]}),e.jsx("span",{className:"rc2-stat-label",children:d.label})]},m)})})}function Nh({course:i,index:o}){const[l,d]=y.useState(!1),m=y.useRef(null),[f,u]=y.useState(!1);return y.useEffect(()=>{const w=new IntersectionObserver(([b])=>{b.isIntersecting&&u(!0)},{threshold:.1});return m.current&&w.observe(m.current),()=>w.disconnect()},[]),e.jsxs("div",{ref:m,className:`rc2-card${f?" rc2-card--visible":""}`,style:{"--card-color":i.color,"--card-dark":i.colorDark,"--card-light":i.colorLight,animationDelay:`${o*.1}s`},children:[e.jsxs("div",{className:"rc2-card-header",style:{background:`linear-gradient(135deg, ${i.colorDark} 0%, ${i.color} 100%)`},children:[e.jsx("div",{className:"rc2-card-header-bg"}),e.jsx("div",{className:"rc2-card-tag",children:i.tag}),e.jsx("i",{className:`${i.icon} rc2-card-icon`}),e.jsx("h3",{className:"rc2-card-code",children:i.code}),e.jsx("p",{className:"rc2-card-full",children:i.full}),e.jsx("p",{className:"rc2-card-tagline",children:i.tagline}),e.jsxs("div",{className:"rc2-card-pills",children:[e.jsxs("span",{children:[e.jsx("i",{className:"fa-regular fa-clock"})," ",i.duration]}),e.jsxs("span",{children:[e.jsx("i",{className:"fa-solid fa-users"})," ",i.seats," Seats"]})]})]}),e.jsx("div",{className:"rc2-card-quick",children:e.jsxs("div",{className:"rc2-card-quick-item",children:[e.jsx("i",{className:"fa-solid fa-check-circle",style:{color:i.color}}),e.jsx("span",{children:i.eligibility})]})}),e.jsxs("button",{className:"rc2-card-toggle",style:{"--btn-color":i.color},onClick:()=>d(w=>!w),children:[e.jsx("span",{children:l?"Show Less":"Explore Course"}),e.jsx("i",{className:`fa-solid fa-chevron-${l?"up":"down"}`})]}),e.jsx("div",{className:`rc2-card-body${l?" rc2-card-body--open":""}`,children:e.jsxs("div",{className:"rc2-card-body-inner",children:[e.jsxs("div",{className:"rc2-section",children:[e.jsxs("h4",{children:[e.jsx("i",{className:"fa-solid fa-circle-info",style:{color:i.color}})," Overview"]}),e.jsx("p",{children:i.overview})]}),e.jsxs("div",{className:"rc2-section",children:[e.jsxs("h4",{children:[e.jsx("i",{className:"fa-solid fa-star",style:{color:i.color}})," Program Highlights"]}),e.jsx("ul",{className:"rc2-highlights",children:i.highlights.map((w,b)=>e.jsxs("li",{children:[e.jsx("span",{className:"rc2-bullet",style:{background:i.color}}),w]},b))})]}),e.jsxs("div",{className:"rc2-section",children:[e.jsxs("h4",{children:[e.jsx("i",{className:"fa-solid fa-rocket",style:{color:i.color}})," Career Paths"]}),e.jsx("div",{className:"rc2-career-tags",children:i.career.map((w,b)=>e.jsx("span",{className:"rc2-career-tag",style:{"--tc":i.color,"--tl":i.colorLight},children:w},b))})]}),e.jsxs("a",{href:i.syllabus,download:!0,className:"rc2-syllabus-btn",style:{background:`linear-gradient(135deg, ${i.colorDark}, ${i.color})`},children:[e.jsx("i",{className:"fa-solid fa-file-pdf"}),"Download Syllabus"]})]})})]})}function Eh(){return e.jsxs("div",{className:"rc2-page",children:[e.jsx("style",{children:`
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
            `}),e.jsxs("section",{className:"rc2-hero",children:[e.jsx("div",{className:"rc2-hero-orb rc2-hero-orb-1"}),e.jsx("div",{className:"rc2-hero-orb rc2-hero-orb-2"}),e.jsxs("div",{className:"rc2-hero-content",children:[e.jsxs("div",{className:"rc2-hero-left",children:[e.jsxs("div",{className:"rc2-hero-chip",children:[e.jsx("i",{className:"fa-solid fa-graduation-cap"}),"Academics · Regular Programs"]}),e.jsxs("h1",{children:["Shape Your Future with",e.jsx("br",{}),e.jsx("em",{children:"World-Class Degrees"})]}),e.jsx("p",{children:"Industry-aligned 4-year undergraduate programs crafted to equip you with knowledge, real-world skills, and the confidence to lead tomorrow's challenges."})]}),e.jsx("div",{className:"rc2-hero-right",children:e.jsxs("div",{className:"rc2-hero-btns",children:[e.jsxs(Ne,{to:"/admission/apply",className:"rc2-btn-primary",children:[e.jsx("i",{className:"fa-solid fa-paper-plane"})," Apply for 2026–27"]}),e.jsxs("a",{href:"#courses",className:"rc2-btn-outline",children:[e.jsx("i",{className:"fa-solid fa-magnifying-glass"})," Explore Courses"]})]})})]})]}),e.jsx("div",{className:"rc2-stats-wrap",children:e.jsx(kh,{})}),e.jsx("section",{className:"rc2-intro",children:e.jsxs("div",{className:"rc2-intro-inner",children:[e.jsx("div",{className:"rc2-intro-icon",children:"🎓"}),e.jsx("h2",{children:"Our Academic Excellence"}),e.jsx("p",{children:"At Creative Techno College, Angul, we offer career-oriented undergraduate programs designed to equip students with the right blend of knowledge, skills, and industry exposure. Our courses focus on academic excellence, practical learning, and holistic development to prepare graduates for the future."})]})}),e.jsxs("section",{className:"rc2-courses-section",id:"courses",children:[e.jsxs("div",{className:"rc2-section-heading",children:[e.jsx("div",{className:"rc2-section-pill",children:"🎯 Our Programs"}),e.jsxs("h2",{children:["Courses ",e.jsx("span",{children:"Offered"})]}),e.jsx("p",{children:"Click on any course card to explore eligibility, highlights, career paths and download the full syllabus."})]}),e.jsx("div",{className:"rc2-courses-grid",children:wh.map((i,o)=>e.jsx(Nh,{course:i,index:o},i.code))})]}),e.jsx("section",{className:"rc2-features",children:e.jsxs("div",{className:"rc2-features-inner",children:[e.jsxs("h2",{className:"rc2-features-title",children:["Why choose ",e.jsx("span",{children:"Creative Techno College?"})]}),e.jsx("div",{className:"rc2-features-grid",children:[{icon:"fa-solid fa-building-columns",title:"AICTE Approved",desc:"Nationally recognised by All India Council for Technical Education."},{icon:"fa-solid fa-graduation-cap",title:"Utkal University",desc:"Affiliated to the prestigious Utkal University, Odisha."},{icon:"fa-solid fa-handshake",title:"100% Placement Assist",desc:"Dedicated placement cell with 100+ recruiting partners."},{icon:"fa-solid fa-flask",title:"Practical Learning",desc:"State-of-the-art labs, live projects and industry internships."},{icon:"fa-solid fa-globe",title:"Industry Connect",desc:"Regular seminars, workshops and expert guest lectures."}].map((i,o)=>e.jsxs("div",{className:"rc2-feature",children:[e.jsx("i",{className:`${i.icon} rc2-feature-icon`}),e.jsx("h3",{children:i.title}),e.jsx("p",{children:i.desc})]},o))})]})})]})}const Th={Brain:i=>e.jsxs("svg",{viewBox:"0 0 24 24",width:"24",height:"24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",...i,children:[e.jsx("path",{d:"M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.04-2.44v-10A2.5 2.5 0 0 1 7.5 4.5h2"}),e.jsx("path",{d:"M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.04-2.44v-10A2.5 2.5 0 0 0 16.5 4.5h-2"})]}),Chart:i=>e.jsxs("svg",{viewBox:"0 0 24 24",width:"24",height:"24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",...i,children:[e.jsx("path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}),e.jsx("path",{d:"m7 15 4-4 3 3 5-5"})]}),Bullhorn:i=>e.jsxs("svg",{viewBox:"0 0 24 24",width:"24",height:"24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",...i,children:[e.jsx("path",{d:"M18 8A6 6 0 0 1 18 16M4 8h2l5-3v14l-5-3H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2Z"}),e.jsx("path",{d:"M14 8v8"})]}),Database:i=>e.jsxs("svg",{viewBox:"0 0 24 24",width:"24",height:"24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",...i,children:[e.jsx("ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}),e.jsx("path",{d:"M3 5v14c0 1.5 4 3 9 3s9-1.5 9-3V5"}),e.jsx("line",{x1:"3",x2:"21",y1:"12",y2:"12"}),e.jsx("line",{x1:"3",x2:"21",y1:"8",y2:"8"})]}),Link:i=>e.jsxs("svg",{viewBox:"0 0 24 24",width:"24",height:"24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",...i,children:[e.jsx("path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"}),e.jsx("path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"})]}),PieChart:i=>e.jsxs("svg",{viewBox:"0 0 24 24",width:"24",height:"24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",...i,children:[e.jsx("path",{d:"M21.21 15.89A10 10 0 1 1 8 2.83"}),e.jsx("path",{d:"M22 12A10 10 0 0 0 12 2v10h10Z"})]}),Store:i=>e.jsxs("svg",{viewBox:"0 0 24 24",width:"24",height:"24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",...i,children:[e.jsx("path",{d:"M3 9h18l-2 10H5L3 9Z"}),e.jsx("path",{d:"M6 5h12l2 4"}),e.jsx("rect",{x:"8",y:"13",width:"8",height:"6",rx:"1"})]}),Robot:i=>e.jsxs("svg",{viewBox:"0 0 24 24",width:"24",height:"24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",...i,children:[e.jsx("rect",{x:"3",y:"11",width:"18",height:"10",rx:"2"}),e.jsx("circle",{cx:"9",cy:"16",r:"1",fill:"currentColor"}),e.jsx("circle",{cx:"15",cy:"16",r:"1",fill:"currentColor"}),e.jsx("path",{d:"M8 5h8l2 6H6l2-6Z"}),e.jsx("line",{x1:"12",x2:"12",y1:"5",y2:"2"})]}),FileText:i=>e.jsxs("svg",{viewBox:"0 0 24 24",width:"24",height:"24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",...i,children:[e.jsx("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Z"}),e.jsx("path",{d:"M14 2v6h6"}),e.jsx("line",{x1:"16",x2:"8",y1:"13",y2:"13"}),e.jsx("line",{x1:"16",x2:"8",y1:"17",y2:"17"}),e.jsx("polyline",{points:"10 9 9 9 8 9"})]}),Code:i=>e.jsxs("svg",{viewBox:"0 0 24 24",width:"24",height:"24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",...i,children:[e.jsx("polyline",{points:"16 18 22 12 16 6"}),e.jsx("polyline",{points:"8 6 2 12 8 18"})]}),Users:i=>e.jsxs("svg",{viewBox:"0 0 24 24",width:"24",height:"24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",...i,children:[e.jsx("path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}),e.jsx("circle",{cx:"9",cy:"7",r:"4"}),e.jsx("path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}),e.jsx("path",{d:"M16 3.13a4 4 0 0 1 0 7.75"})]}),Python:i=>e.jsxs("svg",{viewBox:"0 0 24 24",width:"24",height:"24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",...i,children:[e.jsx("ellipse",{cx:"12",cy:"7.5",rx:"6",ry:"3"}),e.jsx("path",{d:"M6 10.5v6c0 1.5 2.7 3 6 3s6-1.5 6-3v-6"}),e.jsx("path",{d:"M6 13.5v3"}),e.jsx("path",{d:"M18 13.5v3"})]}),Rocket:i=>e.jsxs("svg",{viewBox:"0 0 24 24",width:"28",height:"28",fill:"none",stroke:"currentColor",strokeWidth:"1.5",...i,children:[e.jsx("path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09Z"}),e.jsx("path",{d:"M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2Z"}),e.jsx("path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"}),e.jsx("path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"})]}),Coins:i=>e.jsxs("svg",{viewBox:"0 0 24 24",width:"28",height:"28",fill:"none",stroke:"currentColor",strokeWidth:"1.5",...i,children:[e.jsx("circle",{cx:"12",cy:"12",r:"8"}),e.jsx("path",{d:"M8 8c2.5-2 5.5-2 8 0"}),e.jsx("path",{d:"M8 16c2.5 2 5.5 2 8 0"}),e.jsx("line",{x1:"12",x2:"12",y1:"4",y2:"20"})]}),Target:i=>e.jsxs("svg",{viewBox:"0 0 24 24",width:"28",height:"28",fill:"none",stroke:"currentColor",strokeWidth:"1.5",...i,children:[e.jsx("circle",{cx:"12",cy:"12",r:"10"}),e.jsx("circle",{cx:"12",cy:"12",r:"6"}),e.jsx("circle",{cx:"12",cy:"12",r:"2",fill:"currentColor"})]}),Bolt:i=>e.jsx("svg",{viewBox:"0 0 24 24",width:"28",height:"28",fill:"none",stroke:"currentColor",strokeWidth:"1.5",...i,children:e.jsx("path",{d:"M13 2L3 14h8l-2 8 10-12h-8l2-8z"})}),CheckCircle:i=>e.jsxs("svg",{viewBox:"0 0 24 24",width:"20",height:"20",fill:"none",stroke:"currentColor",strokeWidth:"2",...i,children:[e.jsx("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),e.jsx("polyline",{points:"22 4 12 14.01 9 11.01"})]}),ArrowRight:i=>e.jsxs("svg",{viewBox:"0 0 24 24",width:"18",height:"18",fill:"none",stroke:"currentColor",strokeWidth:"2",...i,children:[e.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),e.jsx("polyline",{points:"12 5 19 12 12 19"})]}),Mail:i=>e.jsxs("svg",{viewBox:"0 0 24 24",width:"20",height:"20",fill:"none",stroke:"currentColor",strokeWidth:"2",...i,children:[e.jsx("rect",{x:"2",y:"4",width:"20",height:"16",rx:"2"}),e.jsx("path",{d:"m22 7-10 7L2 7"})]}),Clock:i=>e.jsxs("svg",{viewBox:"0 0 24 24",width:"16",height:"16",fill:"none",stroke:"currentColor",strokeWidth:"2",...i,children:[e.jsx("circle",{cx:"12",cy:"12",r:"10"}),e.jsx("polyline",{points:"12 6 12 12 16 14"})]}),Level:i=>e.jsxs("svg",{viewBox:"0 0 24 24",width:"16",height:"16",fill:"none",stroke:"currentColor",strokeWidth:"2",...i,children:[e.jsx("path",{d:"M2 20h20"}),e.jsx("path",{d:"M4 16l2-8 2 8"}),e.jsx("path",{d:"M12 16l2-8 2 8"}),e.jsx("path",{d:"M20 16l2-8 2 8"})]})},Ah=[{title:"Machine Learning",link:"https://creativecollege.in/ML/Registration/index.html",desc:"Learn algorithms that allow computers to learn from data without explicit programming. Build real ML models.",icon:"Brain",gradient:"linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",status:"upcoming",duration:"45 Hours",level:"Intermediate",tags:["Python","Scikit-learn","TensorFlow"]},{title:"Data Science",desc:"Statistical and computational techniques to extract insights from data — cleaning, visualization, modeling and more.",icon:"Chart",gradient:"linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)",status:"completed",duration:"50 Hours",level:"Beginner to Advanced",tags:["Python","Pandas","Matplotlib"]},{title:"Digital Marketing",desc:"Promote brands to connect with customers using the internet — SEO, social media, email and web advertising.",icon:"Bullhorn",gradient:"linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",status:"completed",duration:"35 Hours",level:"Beginner",tags:["SEO","Google Ads","Meta Ads"]}],Md=[{title:"Data Science",icon:"Database",gradient:"linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",status:"completed",duration:"50 hrs"},{title:"Affiliate Marketing",icon:"Link",gradient:"linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",status:"completed",duration:"25 hrs"},{title:"Power BI",icon:"PieChart",gradient:"linear-gradient(135deg, #fa709a 0%, #fee140 100%)",status:"completed",duration:"30 hrs"},{title:"Retail Marketing",icon:"Store",gradient:"linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)",status:"upcoming",duration:"28 hrs"},{title:"Artificial Intelligence",icon:"Robot",gradient:"linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",status:"upcoming",duration:"55 hrs"},{title:"Digital Marketing",icon:"Bullhorn",gradient:"linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",status:"completed",duration:"35 hrs"},{title:"HR Documentation",icon:"FileText",gradient:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",status:"upcoming",duration:"22 hrs"},{title:"Advance Java",icon:"Code",gradient:"linear-gradient(135deg, #f77062 0%, #fe5196 100%)",status:"upcoming",duration:"60 hrs"},{title:"HR Professionals",icon:"Users",gradient:"linear-gradient(135deg, #96fbc4 0%, #f9f586 100%)",status:"upcoming",duration:"30 hrs"},{title:"Full Stack Python",icon:"Python",gradient:"linear-gradient(135deg, #30cfd0 0%, #667eea 100%)",status:"upcoming",duration:"75 hrs"}],Ph=[{icon:"Rocket",title:"Expand Career Horizons",desc:"Gain in-demand skills that complement your degree and open new career opportunities."},{icon:"Coins",title:"Cost-Effective Learning",desc:"More affordable than traditional courses while delivering equivalent or better outcomes."},{icon:"Target",title:"Industry-Relevant Skills",desc:"Curriculum designed in sync with current industry needs and employer demands."},{icon:"Bolt",title:"Flexible Schedule",desc:"Programs are designed to fit alongside your regular coursework seamlessly."}],Ld=({status:i})=>{const o=i==="completed";return e.jsxs("span",{className:`status-badge ${o?"completed":"upcoming"}`,children:[e.jsx("span",{className:"status-dot"}),o?"Completed":"Coming Soon"]})},ka=({name:i,className:o="",...l})=>{const d=Th[i];return d?e.jsx(d,{className:`icon-svg ${o}`,...l}):null};function Rh(){const[i,o]=y.useState("all"),l=i==="all"?Md:Md.filter(d=>d.status===i);return e.jsxs("div",{className:"vac-page",children:[e.jsx("style",{children:`
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
      `}),e.jsx("section",{className:"vac-hero",children:e.jsxs("div",{className:"vac-hero-content",children:[e.jsxs("div",{className:"vac-hero-left",children:[e.jsxs("div",{className:"vac-hero-chip",children:[e.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:e.jsx("path",{d:"M13 2L3 14h8l-2 8 10-12h-8l2-8z"})}),"Learning Management System"]}),e.jsxs("h1",{children:["Supercharge Your Skills with",e.jsx("br",{}),e.jsx("em",{children:"Value‑Added Courses"})]}),e.jsx("p",{children:"Industry‑relevant programs designed to enhance your career prospects and make you stand out in today's competitive job market."})]}),e.jsx("div",{className:"vac-hero-right",children:e.jsx("div",{className:"vac-hero-stats",children:["10+ Courses","Certificate Programs","Industry Experts","Live Projects"].map((d,m)=>e.jsxs("div",{className:"vac-hero-stat-item",children:[e.jsx(ka,{name:"CheckCircle",className:"check",width:18,height:18}),d]},m))})})]})}),e.jsxs("section",{className:"vac-section vac-section-light",children:[e.jsxs("div",{className:"vac-heading",children:[e.jsx("span",{className:"pill",children:"🔥 Featured Programs"}),e.jsxs("h2",{children:["Our Current ",e.jsx("span",{className:"gradient-text",children:"Programs"})]}),e.jsx("p",{children:"Flagship value‑added programs with real industry outcomes and hands‑on learning."})]}),e.jsx("div",{className:"vac-grid-3",children:Ah.map((d,m)=>e.jsxs("div",{className:"vac-card-featured",children:[e.jsxs("div",{className:"vac-card-media",style:{background:d.gradient},children:[e.jsx(ka,{name:d.icon,className:"icon-large"}),e.jsx(Ld,{status:d.status}),e.jsx("h3",{children:d.title}),e.jsx("p",{children:d.desc}),e.jsx("div",{className:"vac-tags",children:d.tags.map((f,u)=>e.jsx("span",{className:"vac-tag",children:f},u))})]}),e.jsxs("div",{className:"vac-card-footer",children:[e.jsxs("div",{className:"vac-meta",children:[e.jsxs("span",{children:[e.jsx(ka,{name:"Clock"})," ",d.duration]}),e.jsxs("span",{children:[e.jsx(ka,{name:"Level"})," ",d.level]})]}),d.link?e.jsxs("a",{href:d.link,target:"_blank",rel:"noopener noreferrer",className:"vac-btn-outline",children:[d.status==="completed"?"View Details":"Register"," ",e.jsx(ka,{name:"ArrowRight"})]}):e.jsxs(Ne,{to:"/contacts",className:"vac-btn-outline",children:[d.status==="completed"?"View Details":"Register"," ",e.jsx(ka,{name:"ArrowRight"})]})]})]},m))})]}),e.jsxs("section",{className:"vac-section vac-section-dark",children:[e.jsxs("div",{className:"vac-heading",children:[e.jsx("span",{className:"pill",style:{background:"rgba(255,255,255,0.1)",color:"#fff",borderColor:"rgba(255,255,255,0.2)"},children:"📚 More Courses"}),e.jsxs("h2",{children:["Additional ",e.jsx("span",{className:"gradient-text",children:"Learning Paths"})]}),e.jsx("p",{children:"Browse our full catalog of skill‑building courses across technology, business, and management."})]}),e.jsx("div",{className:"vac-filter-bar",children:[["all","All Courses"],["completed","Completed"],["upcoming","Upcoming"]].map(([d,m])=>e.jsx("button",{className:`vac-filter-btn ${i===d?"active":""}`,onClick:()=>o(d),children:m},d))}),e.jsx("div",{className:"vac-grid-mini",children:l.map((d,m)=>e.jsxs("div",{className:"vac-card-mini",children:[e.jsx("div",{className:"vac-mini-top",style:{background:d.gradient},children:e.jsx(ka,{name:d.icon})}),e.jsxs("div",{className:"vac-mini-body",children:[e.jsx("h4",{children:d.title}),e.jsxs("div",{className:"vac-mini-row",children:[e.jsxs("span",{className:"vac-mini-duration",children:[e.jsx(ka,{name:"Clock"})," ",d.duration]}),e.jsx(Ld,{status:d.status})]})]})]},m))})]}),e.jsx("section",{className:"vac-section vac-section-light",children:e.jsxs("div",{className:"vac-split",children:[e.jsxs("div",{className:"vac-split-text",children:[e.jsx("span",{className:"pill",children:"💡 Why Join?"}),e.jsxs("h2",{children:["Advantages of Learning ",e.jsx("span",{className:"gradient-text",children:"Extra Skills"})," During Graduation"]}),e.jsx("p",{children:"Build skills that open new doors, make you more employable, and give you a competitive edge in the professional world."}),e.jsx("ul",{className:"vac-checklist",children:["Increased job prospects and wider career horizons","Learn industry tools, techniques & in‑demand languages","More cost‑effective than traditional certification schools","Keep polishing existing skills alongside your degree"].map((d,m)=>e.jsxs("li",{children:[e.jsx(ka,{name:"CheckCircle"})," ",d]},m))})]}),e.jsx("div",{className:"vac-video-embed",children:e.jsx("iframe",{src:"https://www.youtube.com/embed/gUulJAxFuVg?autoplay=0",title:"Value Added Courses",allow:"encrypted-media; picture-in-picture",allowFullScreen:!0})})]})}),e.jsxs("section",{className:"vac-section vac-section-dark",children:[e.jsx("div",{className:"vac-heading",children:e.jsxs("h2",{children:["What You'll ",e.jsx("span",{className:"gradient-text",children:"Gain"})]})}),e.jsx("div",{className:"vac-grid-4",children:Ph.map((d,m)=>e.jsxs("div",{className:"vac-adv-card",children:[e.jsx(ka,{name:d.icon}),e.jsx("h3",{children:d.title}),e.jsx("p",{children:d.desc})]},m))})]})]})}const Bh=[{title:"Soft Skills Development",short:"Communication & Leadership",desc:"Build strong communication skills, a magnetic personality, leadership qualities, and interpersonal abilities that employers look for.",icon:"fa-solid fa-comments",color:"#2dd4bf",colorBg:"linear-gradient(135deg, #2dd4bf 0%, #06b6d4 100%)",points:["Public Speaking & Presentation","Team Collaboration & Conflict Resolution","Professional Etiquette & Body Language"]},{title:"Aptitude Training",short:"Quantitative & Logical Reasoning",desc:"Master quantitative aptitude, logical reasoning, and analytical skills for placement drives, competitive exams, and interviews.",icon:"fa-solid fa-calculator",color:"#f59e0b",colorBg:"linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)",points:["Number Systems & Data Interpretation","Verbal & Non-Verbal Reasoning","Mock Tests & Placement Papers"]},{title:"Technical Workshops",short:"Hands-on Technology Sessions",desc:"Deep-dive into the latest technologies through practical workshops, coding competitions, and real-world technical projects.",icon:"fa-solid fa-screwdriver-wrench",color:"#8b5cf6",colorBg:"linear-gradient(135deg, #8b5cf6 0%, #a78bfa 100%)",points:["Hackathons & Coding Competitions","Open-Source Contributions","Industry-Standard Tool Training"]},{title:"Industry Visits",short:"Real-World Exposure",desc:"Step into the real world with organised visits to IT companies, manufacturing plants, and leading industries.",icon:"fa-solid fa-industry",color:"#ec4899",colorBg:"linear-gradient(135deg, #ec4899 0%, #f43f5e 100%)",points:["IT Company Visits","Interaction with Industry Leaders","Understanding Corporate Culture"]},{title:"Guest Lectures",short:"Learn from the Best",desc:"Regular talks by industry professionals, renowned entrepreneurs, and academic experts to broaden your professional perspective.",icon:"fa-solid fa-microphone-lines",color:"#14b8a6",colorBg:"linear-gradient(135deg, #14b8a6 0%, #06b6d4 100%)",points:["Entrepreneur & CEO Talks","Academic Research Sessions","Career Guidance Panels"]},{title:"Entrepreneurship Development",short:"Start & Scale Your Ideas",desc:"Learn to ideate, plan, and execute your own venture with training in business planning, startup fundamentals, and innovation.",icon:"fa-solid fa-rocket",color:"#f97316",colorBg:"linear-gradient(135deg, #f97316 0%, #fb923c 100%)",points:["Business Model Canvas","Startup Pitch & Funding Basics","Incubation & Mentorship Programs"]},{title:"Community Service",short:"Give Back, Grow Together",desc:"Participate in meaningful social outreach programs, environmental campaigns, and CSR activities that build character.",icon:"fa-solid fa-hand-holding-heart",color:"#10b981",colorBg:"linear-gradient(135deg, #10b981 0%, #34d399 100%)",points:["Rural Outreach Programs","Environmental Awareness Drives","Blood Donation & Health Camps"]},{title:"Sports & Fitness",short:"Compete & Stay Fit",desc:"Build teamwork, discipline, and a healthy body through annual sports events, fitness activities, and inter-college competitions.",icon:"fa-solid fa-trophy",color:"#3b82f6",colorBg:"linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)",points:["Annual Sports Meet","Indoor & Outdoor Games","Fitness & Wellness Programs"]}],Ih=[{sem:"2nd Sem",activity:"Internship – Initial Exposure",color:"#2dd4bf"},{sem:"3rd Sem",activity:"Online Courses Begin",color:"#8b5cf6"},{sem:"4th Sem",activity:"Value Addition Activities",color:"#f97316"},{sem:"5th Sem",activity:"Advanced Online Courses",color:"#ec4899"},{sem:"6th Sem",activity:"Industry Internship",color:"#10b981"},{sem:"7th Sem",activity:"Minor Projects",color:"#3b82f6"},{sem:"8th Sem",activity:"Major Project (Capstone)",color:"#f59e0b"}];function zh({activity:i,index:o}){const[l,d]=y.useState(!1),m=y.useRef(null),[f,u]=y.useState(!1);return y.useEffect(()=>{const w=new IntersectionObserver(([b])=>{b.isIntersecting&&u(!0)},{threshold:.1});return m.current&&w.observe(m.current),()=>w.disconnect()},[]),e.jsxs("div",{ref:m,className:`ep2-card${f?" ep2-card--vis":""}`,style:{"--c":i.color,animationDelay:`${o*.08}s`},children:[e.jsxs("div",{className:"ep2-card-icon-bar",style:{background:i.colorBg},children:[e.jsx("i",{className:`${i.icon} ep2-big-icon`}),e.jsxs("div",{className:"ep2-card-header-text",children:[e.jsx("h3",{children:i.title}),e.jsx("p",{children:i.short})]})]}),e.jsxs("div",{className:"ep2-card-body",children:[e.jsx("p",{children:i.desc}),e.jsxs("button",{className:"ep2-toggle-btn",onClick:()=>d(w=>!w),children:[l?"Show Less":"See Details",e.jsx("i",{className:`fa-solid fa-chevron-${l?"up":"down"}`})]}),l&&e.jsx("ul",{className:"ep2-points",children:i.points.map((w,b)=>e.jsxs("li",{children:[e.jsx("i",{className:"fa-solid fa-check-circle"}),w]},b))})]})]})}function Wh(){return e.jsxs("div",{className:"ep2-page",children:[e.jsx("style",{children:`
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
            `}),e.jsxs("section",{className:"ep2-hero",children:[e.jsxs("div",{className:"ep2-hero-orbs",children:[e.jsx("div",{className:"ep2-orb ep2-orb-1"}),e.jsx("div",{className:"ep2-orb ep2-orb-2"})]}),e.jsxs("div",{className:"ep2-hero-content",children:[e.jsxs("div",{className:"ep2-hero-left",children:[e.jsxs("div",{className:"ep2-hero-chip",children:[e.jsx("i",{className:"fa-solid fa-seedling"})," Holistic Development"]}),e.jsxs("h1",{children:["Enhancement Programs for",e.jsx("br",{}),e.jsx("em",{children:"All-Round Excellence"})]}),e.jsx("p",{children:"Beyond the classroom — structured programs that develop your personality, skills, and career readiness from Day 1 of graduation."})]}),e.jsx("div",{className:"ep2-hero-right",children:e.jsx("div",{className:"ep2-hero-badges",children:["Soft Skills","Aptitude Training","Industry Exposure","Entrepreneurship","Community Service"].map((i,o)=>e.jsxs("span",{className:"ep2-hero-badge",children:[e.jsx("i",{className:"fa-solid fa-circle-check",style:{color:"#ffcc00"}})," ",i]},o))})})]})]}),e.jsxs("section",{className:"ep2-timeline-section",children:[e.jsxs("div",{className:"ep2-section-heading",children:[e.jsx("div",{className:"ep2-section-pill",children:"📅 Structured Plan"}),e.jsxs("h2",{children:["Semester-wise ",e.jsx("span",{children:"Enhancement Roadmap"})]}),e.jsx("p",{children:"Every semester at CTC is designed with intentional activities to build your capabilities progressively over 4 years."})]}),e.jsx("div",{className:"ep2-timeline",children:Ih.map((i,o)=>e.jsxs("div",{className:"ep2-tl-row",style:{animationDelay:`${o*.1}s`},children:[e.jsx("div",{className:"ep2-tl-dot",style:{background:i.color},children:i.sem.split(" ")[0]}),e.jsxs("div",{className:"ep2-tl-content",children:[e.jsxs("div",{children:[e.jsx("div",{className:"ep2-tl-sem",children:i.sem}),e.jsx("div",{className:"ep2-tl-act",children:i.activity})]}),e.jsx("i",{className:"fa-solid fa-chevron-right ep2-tl-arrow"})]})]},o))})]}),e.jsxs("section",{className:"ep2-activities-section",children:[e.jsxs("div",{className:"ep2-section-heading",children:[e.jsx("div",{className:"ep2-section-pill",children:"🎯 Programs"}),e.jsxs("h2",{children:["Our Enhancement ",e.jsx("span",{children:"Activities"})]}),e.jsx("p",{children:"Click on any card to see what skills you'll build through each program."})]}),e.jsx("div",{className:"ep2-grid",children:Bh.map((i,o)=>e.jsx(zh,{activity:i,index:o},o))})]}),e.jsxs("section",{className:"ep2-table-section",children:[e.jsxs("div",{className:"ep2-section-heading",children:[e.jsx("div",{className:"ep2-section-pill",children:"📋 All Programs"}),e.jsxs("h2",{children:["Program ",e.jsx("span",{children:"Overview Table"})]}),e.jsx("p",{children:"A snapshot of activities planned across all 4 degree programs at Creative Techno College."})]}),e.jsx("div",{className:"ep2-table-wrap",children:e.jsxs("table",{className:"ep2-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Activity"}),e.jsx("th",{children:"BBA"}),e.jsx("th",{children:"BCA"}),e.jsx("th",{children:"B.Sc CS"}),e.jsx("th",{children:"B.Sc DS"})]})}),e.jsx("tbody",{children:[{act:"🗒️ Minor Projects",sems:["Every Sem","Every Sem","Every Sem","Every Sem"]},{act:"📚 Online Courses",sems:["3rd, 5th, 7th","3rd, 5th, 7th","3rd, 5th, 7th","3rd, 5th, 7th"]},{act:"💼 Internship",sems:["2nd, 4th, 6th","2nd, 4th, 6th","2nd, 4th, 6th","2nd, 4th, 6th"]},{act:"🎓 Major Project",sems:["8th Sem","8th Sem","8th Sem","8th Sem"]}].map((i,o)=>e.jsxs("tr",{children:[e.jsx("td",{children:i.act}),i.sems.map((l,d)=>e.jsx("td",{children:e.jsx("span",{className:"ep2-sem-chip",style:{background:["rgba(45,212,191,0.12)","rgba(139,92,246,0.12)","rgba(59,130,246,0.12)","rgba(245,158,11,0.12)"][d],color:["#0f766e","#7c3aed","#1d4ed8","#b45309"][d],border:`1px solid ${["rgba(45,212,191,0.3)","rgba(139,92,246,0.3)","rgba(59,130,246,0.3)","rgba(245,158,11,0.3)"][d]}`},children:l})},d))]},o))})]})})]})]})}function Oh(){y.useEffect(()=>{const i=document.querySelectorAll(".rv"),o=new IntersectionObserver(l=>l.forEach(d=>{d.isIntersecting&&d.target.classList.add("visible")}),{threshold:.07});return i.forEach(l=>o.observe(l)),()=>o.disconnect()},[])}const Mh=[{name:"Mr. Bhabani Shankar Sahoo",role:"Placement Head",img:"/CTC NEW REACT WEBSITE/images/OURTEAM/Bhabani Sir.jpg",icon:"fa-briefcase",color:"#0c2340"},{name:"Mr. Subhrajyoti Behera",role:"Activity Head",img:"/CTC NEW REACT WEBSITE/images/OURTEAM/Subhrajyoti Sir.jpg",icon:"fa-calendar-check",color:"#1a3a6b"}],Lh=[{name:"Wipro",logo:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/wipro.png",color:"#8b2be2"},{name:"TCS",logo:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/tcs.jpg",color:"#0a2472"},{name:"LTI Mindtree",logo:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/lti.png",color:"#00aa44"},{name:"Cognizant",logo:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/cognizant.png",color:"#0066cc"},{name:"Infosys",logo:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/infosys.png",color:"#007acc"},{name:"Capgemini",logo:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/capgemini.png",color:"#0070ad"},{name:"Deloitte",logo:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/DELOITTE.jpeg",color:"#86bc25"}],Dh=[{icon:"fa-rocket",title:"Enhance Employability",desc:"Equip students with the necessary knowledge and skills to secure employment in leading companies."},{icon:"fa-people-group",title:"Holistic Development",desc:"Foster both technical and soft skills to prepare students for every stage of the recruitment process."},{icon:"fa-industry",title:"Industry Readiness",desc:"Align training modules with current market demands and industry expectations."},{icon:"fa-door-open",title:"Inclusive Opportunities",desc:"Provide placement opportunities across a diverse range of companies, including MNCs and local firms."},{icon:"fa-arrows-rotate",title:"Continuous Improvement",desc:"Regularly update and refine the training program based on feedback and evolving market trends."}],Fh=[{img:"/CTC NEW REACT WEBSITE/images/DevelopmentProgram/Workshop.jpg",title:"Workshops",desc:"Hands-on sessions for skill building."},{img:"/CTC NEW REACT WEBSITE/images/DevelopmentProgram/Internship.jpg",title:"Internships",desc:"Real-world work experience for students."},{img:"/CTC NEW REACT WEBSITE/images/DevelopmentProgram/LiveProject.jpg",title:"Live Projects",desc:"Authentic projects to apply knowledge."},{img:"/CTC NEW REACT WEBSITE/images/DevelopmentProgram/Webinar.jpg",title:"Webinars",desc:"Virtual expert sessions on trending topics."},{img:"/CTC NEW REACT WEBSITE/images/DevelopmentProgram/QuantPreparation.jpg",title:"Quants Prep",desc:"Sharpen analytical & numerical skills."},{img:"/CTC NEW REACT WEBSITE/images/DevelopmentProgram/MockInterview.jpg",title:"Mock Interviews",desc:"Simulated interviews for confidence."},{img:"/CTC NEW REACT WEBSITE/images/DevelopmentProgram/ProgrammingSession.jpg",title:"Programming Session",desc:"Dedicated sessions for coding clarity."},{img:"/CTC NEW REACT WEBSITE/images/DevelopmentProgram/SoftSkill.jpg",title:"Soft Skills",desc:"Training in communication & teamwork."},{img:"/CTC NEW REACT WEBSITE/images/DevelopmentProgram/Grooming.jpg",title:"Grooming",desc:"Personality & etiquette improvement."},{img:"/CTC NEW REACT WEBSITE/images/DevelopmentProgram/Seminar.jpg",title:"Seminar",desc:"Develop stage confidence."},{img:"/CTC NEW REACT WEBSITE/images/DevelopmentProgram/Presentation.jpg",title:"Presentation",desc:"Learn impactful presentation skills."},{img:"/CTC NEW REACT WEBSITE/images/DevelopmentProgram/GroupDiscussion.jpg",title:"Group Discussion",desc:"Improve teamwork & critical thinking."}],Hh=[{num:"01",title:"Aptitude & Reasoning",icon:"fa-brain",desc:"Regular practice sessions and mock tests to strengthen problem-solving and analytical skills.",tags:["Quantitative","Logical Reasoning","Mock Tests"],color:"#0c2340"},{num:"02",title:"Technical Skills",icon:"fa-code",desc:"Intensive workshops and hands-on projects for BCA and B.Sc. (CS) students to enhance practical knowledge.",tags:["Programming","Hands-on Projects","DSA"],color:"#1a3a6b"},{num:"03",title:"Soft Skills & Interview Prep",icon:"fa-comments",desc:"Role-playing exercises, group discussions, and interview simulations to improve communication and confidence.",tags:["Communication","Group Discussion","Mock Interview"],color:"#2d5a8e"}],_h=[{title:"JOB-A-THON 2022",icon:"fa-trophy",sub:"First edition — campus hiring drive"},{title:"JOB-A-THON 2023",icon:"fa-medal",sub:"Expanded to 15+ companies"},{title:"JOB-A-THON 2024",icon:"fa-star",sub:"Record placements — 60+ students"},{title:"MISSION — 40",icon:"fa-bullseye",sub:"2025 drive — 40 MNC targets"}],Uh=[{title:"Enhance Technical Skills",icon:"fa-laptop-code",points:["Equip students with the latest technological skills and tools currently in demand.","Provide practical, hands-on experience with real-world projects and software development."]},{title:"Bridge Academia & Industry",icon:"fa-building-columns",points:["Offer exposure to industry standards, methodologies, and professional work environments.","Facilitate the transition from academic learning to professional application."]},{title:"Promote Collaboration",icon:"fa-handshake",points:["Establish and strengthen partnerships with local software companies for mutual growth.","Provide students with networking opportunities and potential job placements."]},{title:"Improve Employability",icon:"fa-briefcase",points:["Enhance employability by providing relevant, marketable skills and experiences.","Prepare students for careers in tech by improving problem-solving abilities."]}],$h=[{icon:"fa-chart-line",title:"Skill Enhancement",desc:"Provide students with advanced skills that complement their primary coursework."},{icon:"fa-hammer",title:"Practical Application",desc:"Offer hands-on projects that allow students to apply theoretical knowledge in real-world scenarios."},{icon:"fa-industry",title:"Industry Readiness",desc:"Equip students with industry-relevant skills, making them more competitive in the job market."},{icon:"fa-book-open",title:"Comprehensive Learning",desc:"Broaden the learning experience with courses covering emerging technologies and advanced topics."},{icon:"fa-certificate",title:"Certification",desc:"Validate the additional skills acquired by students through a certification process."}];function Gh({item:i,idx:o}){const[l,d]=y.useState(!1);return e.jsxs("div",{className:"rv",style:{borderRadius:18,overflow:"hidden",background:"#fff",border:"1px solid rgba(12,35,64,0.07)",boxShadow:l?"0 16px 48px rgba(12,35,64,0.18)":"0 4px 18px rgba(12,35,64,0.08)",transform:l?"translateY(-8px)":"none",transition:"all 0.3s ease",transitionDelay:`${o%4*.06}s`},onMouseEnter:()=>d(!0),onMouseLeave:()=>d(!1),children:[e.jsxs("div",{style:{position:"relative",overflow:"hidden",height:180},children:[e.jsx("img",{src:i.img,alt:i.title,style:{width:"100%",height:"100%",objectFit:"cover",transition:"transform 0.4s ease",transform:l?"scale(1.06)":"scale(1)"},onError:m=>{m.target.parentElement.style.background="linear-gradient(135deg,#0c2340,#2d5a8e)",m.target.style.display="none"}}),e.jsx("div",{style:{position:"absolute",inset:0,background:l?"rgba(12,35,64,0.3)":"rgba(12,35,64,0)",transition:"background 0.3s"}})]}),e.jsxs("div",{style:{padding:"16px 18px"},children:[e.jsx("div",{style:{fontFamily:"'Plus Jakarta Sans',sans-serif",fontWeight:800,fontSize:"0.9rem",color:"#0c2340",marginBottom:4},children:i.title}),e.jsx("div",{style:{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"0.75rem",color:"#64748b",lineHeight:1.6},children:i.desc})]})]})}function Jh({p:i,idx:o}){const[l,d]=y.useState(!1);return e.jsxs("div",{className:"rv",style:{background:l?"linear-gradient(135deg,#0c2340,#1a3a6b)":"#fff",border:"2px solid",borderColor:l?"#0c2340":"rgba(12,35,64,0.15)",borderRadius:22,padding:"36px 28px",textAlign:"center",cursor:"pointer",boxShadow:l?"0 20px 60px rgba(12,35,64,0.35)":"0 4px 20px rgba(12,35,64,0.08)",transform:l?"translateY(-10px) scale(1.03)":"none",transition:"all 0.35s cubic-bezier(0.4,0,0.2,1)",transitionDelay:`${o*.07}s`,position:"relative",overflow:"hidden"},onMouseEnter:()=>d(!0),onMouseLeave:()=>d(!1),children:[l&&e.jsx("div",{style:{position:"absolute",top:"-50%",left:"-50%",width:"200%",height:"200%",background:"radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 70%)",pointerEvents:"none"}}),e.jsx("div",{style:{width:64,height:64,borderRadius:"50%",margin:"0 auto 16px",background:l?"rgba(255,204,0,0.15)":"rgba(12,35,64,0.06)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.5rem",color:l?"#ffcc00":"#0c2340",transition:"all 0.3s"},children:e.jsx("i",{className:`fa-solid ${i.icon}`})}),e.jsx("div",{style:{fontFamily:"'Plus Jakarta Sans',sans-serif",fontWeight:900,fontSize:"1.15rem",color:l?"#ffcc00":"#0c2340",marginBottom:8,letterSpacing:"-0.3px"},children:i.title}),e.jsx("div",{style:{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"0.76rem",color:l?"rgba(255,255,255,0.55)":"#64748b",fontWeight:500},children:i.sub})]})}function at({badge:i,title:o,highlight:l,sub:d}){return e.jsxs("div",{style:{textAlign:"center",marginBottom:48},children:[i&&e.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:7,background:"rgba(12,35,64,0.07)",border:"1px solid rgba(12,35,64,0.12)",color:"#0c2340",fontSize:"0.68rem",fontWeight:800,padding:"6px 16px",borderRadius:30,letterSpacing:"2px",textTransform:"uppercase",marginBottom:14},children:[e.jsx("i",{className:"fa-solid fa-circle-dot",style:{color:"#ffcc00"}}),i]}),e.jsxs("h2",{style:{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"clamp(1.7rem,3.5vw,2.4rem)",fontWeight:900,color:"#0c2340",letterSpacing:"-1px",margin:"0 0 12px",lineHeight:1.1},children:[o," ",l&&e.jsx("span",{style:{color:"#1a3a6b"},children:l})]}),d&&e.jsx("p",{style:{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"0.9rem",color:"#64748b",fontWeight:500,maxWidth:560,margin:"0 auto"},children:d})]})}function Yh(){return Oh(),e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
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
  `}),e.jsxs("div",{className:"dp-page",children:[e.jsx("div",{className:"dp-hero",children:e.jsxs("div",{className:"dp-hero-content",children:[e.jsxs("div",{className:"dp-hero-badge",children:[e.jsx("i",{className:"fa-solid fa-graduation-cap"}),"Placement Cell · CTC"]}),e.jsxs("h1",{className:"dp-hero-h1",children:["Student ",e.jsx("em",{children:"Development"}),e.jsx("br",{}),"& Placement Programs"]}),e.jsx("p",{className:"dp-hero-sub",children:"Comprehensive training and placement initiatives designed to enhance employability for BCA, B.Sc. (CS) and BBA students — bridging campus to career."}),e.jsx("div",{style:{display:"flex",gap:20,flexWrap:"wrap"},children:[{val:"7+",lbl:"Top Recruiters"},{val:"12",lbl:"Activities"},{val:"3",lbl:"Training Modules"},{val:"4",lbl:"JOB-A-THON Drives"}].map((o,l)=>e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx("div",{style:{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"1.6rem",fontWeight:900,color:"#ffcc00",lineHeight:1},children:o.val}),e.jsx("div",{style:{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"0.67rem",color:"rgba(255,255,255,0.4)",fontWeight:600,marginTop:3,textTransform:"uppercase",letterSpacing:"0.5px"},children:o.lbl})]},l))})]})}),e.jsx("div",{className:"dp-wave",children:e.jsx("svg",{viewBox:"0 0 1440 56",preserveAspectRatio:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M0,38 C360,56 1080,0 1440,38 L1440,56 L0,56 Z",fill:"#f0f4f8"})})}),e.jsx("div",{className:"dp-section",children:e.jsxs("div",{className:"dp-inner",children:[e.jsx(at,{badge:"Introduction",title:"Our Placement",highlight:"Team",sub:"Dedicated professionals driving student success through structured placement programs and industry partnerships."}),e.jsx("div",{className:"dp-team-grid",children:Mh.map((o,l)=>e.jsxs("div",{className:"dp-team-card rv",style:{transitionDelay:`${l*.1}s`},children:[e.jsxs("div",{style:{height:280,overflow:"hidden",position:"relative"},children:[e.jsx("img",{src:o.img,alt:o.name,style:{width:"100%",height:"100%",objectFit:"cover",objectPosition:"top"},onError:d=>{d.target.parentElement.style.background=`linear-gradient(135deg,${o.color},#2d5a8e)`,d.target.style.display="none",d.target.parentElement.innerHTML+='<div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:4rem;opacity:0.3">👤</div>'}}),e.jsx("div",{style:{position:"absolute",inset:0,background:"linear-gradient(to top, rgba(12,35,64,0.7) 0%, transparent 50%)"}})]}),e.jsxs("div",{style:{padding:"20px 22px"},children:[e.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:7,background:"rgba(12,35,64,0.07)",borderRadius:20,padding:"4px 12px",marginBottom:10},children:[e.jsx("i",{className:`fa-solid ${o.icon}`,style:{fontSize:"0.65rem",color:"#0c2340"}}),e.jsx("span",{style:{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"0.68rem",fontWeight:800,color:"#0c2340",textTransform:"uppercase",letterSpacing:"0.5px"},children:o.role})]}),e.jsx("div",{style:{fontFamily:"'Plus Jakarta Sans',sans-serif",fontWeight:900,fontSize:"1rem",color:"#0c2340"},children:o.name})]})]},l))}),e.jsx("div",{className:"rv",style:{marginTop:48,background:"#fff",borderRadius:20,padding:"32px 36px",border:"1.5px solid rgba(12,35,64,0.08)",boxShadow:"0 4px 20px rgba(12,35,64,0.07)"},children:e.jsxs("p",{style:{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"0.95rem",color:"#334155",lineHeight:1.9,margin:0},children:["These programs outline the objectives, plans, and implementation strategies of our institution's ",e.jsx("strong",{style:{color:"#0c2340"},children:"Off-Campus Drive and Student Readiness Program"}),". This initiative is designed to enhance the employability of our students by providing them with comprehensive training and placement opportunities, with a focus on both multinational corporations (MNCs) and local companies. Our program is tailored for students enrolled in ",e.jsx("strong",{style:{color:"#0c2340"},children:"BCA, B.Sc. (Computer Science), and BBA"})," courses."]})})]})}),e.jsx("div",{className:"dp-section dp-section-alt",children:e.jsxs("div",{className:"dp-inner",children:[e.jsx(at,{badge:"Partners",title:"Our Major",highlight:"Top Recruiters",sub:"Leading MNCs who regularly recruit from Creative Techno College across all batches."}),e.jsx("div",{className:"dp-recruiter-grid",children:Lh.map((o,l)=>e.jsxs("div",{className:"dp-recruiter-card rv",style:{transitionDelay:`${l*.07}s`},children:[e.jsx("img",{src:o.logo,alt:o.name,className:"dp-recruiter-logo",onError:d=>{d.target.style.display="none",d.target.parentElement.style.background=`linear-gradient(135deg,${o.color}22,${o.color}44)`;const m=document.createElement("div");m.style.cssText=`width:90px;height:70px;display:flex;align-items:center;justify-content:center;font-size:1.1rem;font-weight:900;color:${o.color};`,m.textContent=o.name.slice(0,3),d.target.parentElement.insertBefore(m,d.target)}}),e.jsx("div",{className:"dp-recruiter-name",children:o.name})]},l))})]})}),e.jsx("div",{className:"dp-section",children:e.jsxs("div",{className:"dp-inner",children:[e.jsx(at,{badge:"Goals",title:"Program",highlight:"Objectives",sub:"Five pillars that guide our comprehensive placement and development initiative."}),e.jsx("div",{className:"dp-obj-grid",children:Dh.map((o,l)=>e.jsxs("div",{className:"dp-obj-card rv",style:{transitionDelay:`${l*.07}s`},children:[e.jsx("div",{className:"dp-obj-icon",children:e.jsx("i",{className:`fa-solid ${o.icon}`})}),e.jsx("div",{className:"dp-obj-title",children:o.title}),e.jsx("div",{className:"dp-obj-desc",children:o.desc})]},l))})]})}),e.jsx("div",{className:"dp-section dp-section-alt",children:e.jsxs("div",{className:"dp-inner",children:[e.jsx(at,{badge:"Activities",title:"Placement",highlight:"Activity Hub",sub:"12 structured activities that prepare students for every phase of the recruitment process."}),e.jsx("div",{className:"dp-activities-grid",children:Fh.map((o,l)=>e.jsx(Gh,{item:o,idx:l},l))})]})}),e.jsx("div",{className:"dp-section",children:e.jsxs("div",{className:"dp-inner",children:[e.jsx(at,{badge:"Training",title:"Module-Based",highlight:"Training Program",sub:"Three structured modules covering aptitude, technical depth, and soft skills for complete placement readiness."}),e.jsx("div",{className:"dp-modules-grid",children:Hh.map((o,l)=>e.jsxs("div",{className:"dp-module-card rv",style:{transitionDelay:`${l*.1}s`},children:[e.jsx("div",{className:"dp-module-num",children:o.num}),e.jsx("div",{className:"dp-module-icon",style:{background:`linear-gradient(135deg,${o.color},#2d5a8e)`},children:e.jsx("i",{className:`fa-solid ${o.icon}`,style:{color:"#ffcc00"}})}),e.jsx("div",{className:"dp-module-title",children:o.title}),e.jsx("div",{className:"dp-module-desc",children:o.desc}),e.jsx("div",{className:"dp-module-tags",children:o.tags.map((d,m)=>e.jsx("span",{className:"dp-tag",children:d},m))})]},l))})]})}),e.jsx("div",{className:"dp-section dp-section-alt",children:e.jsxs("div",{className:"dp-inner",children:[e.jsx(at,{badge:"Flagship Programs",title:"JOB-A-THON &",highlight:"Placement Drives",sub:"Annual flagship placement programs that connect students directly with top recruiters."}),e.jsx("div",{className:"dp-programs-grid",children:_h.map((o,l)=>e.jsx(Jh,{p:o,idx:l},l))})]})}),e.jsx("div",{className:"dp-section",children:e.jsxs("div",{className:"dp-inner",children:[e.jsx(at,{badge:"Internships",title:"Industry",highlight:"Internship Program",sub:"Structured internship goals bridging academic learning with professional industry exposure."}),e.jsx("div",{className:"dp-internship-grid",children:Uh.map((o,l)=>e.jsxs("div",{className:"dp-int-card rv",style:{transitionDelay:`${l*.08}s`},children:[e.jsx("div",{className:"dp-int-icon",children:e.jsx("i",{className:`fa-solid ${o.icon}`})}),e.jsx("div",{className:"dp-int-title",children:o.title}),o.points.map((d,m)=>e.jsxs("div",{className:"dp-int-point",children:[e.jsx("div",{className:"dp-int-bullet",children:e.jsx("i",{className:"fa-solid fa-check"})}),e.jsx("div",{className:"dp-int-text",children:d})]},m))]},l))})]})}),e.jsx("div",{className:"dp-section dp-section-alt",children:e.jsxs("div",{className:"dp-inner",children:[e.jsx(at,{badge:"Value Added",title:"Value Added",highlight:"Courses",sub:"Additional certifications and courses designed to make students stand out in the competitive job market."}),e.jsx("div",{className:"dp-value-grid",children:$h.map((o,l)=>e.jsxs("div",{className:"dp-val-card rv",style:{transitionDelay:`${l*.07}s`},children:[e.jsx("div",{className:"dp-val-icon",children:e.jsx("i",{className:`fa-solid ${o.icon}`})}),e.jsx("div",{className:"dp-val-title",children:o.title}),e.jsx("div",{className:"dp-val-desc",children:o.desc})]},l))}),e.jsx("div",{className:"dp-msg-card rv",style:{marginTop:36},children:e.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:20,flexWrap:"wrap"},children:[e.jsx("div",{style:{width:54,height:54,borderRadius:"50%",flexShrink:0,background:"rgba(255,204,0,0.15)",border:"2px solid rgba(255,204,0,0.3)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.3rem",color:"#ffcc00"},children:e.jsx("i",{className:"fa-solid fa-quote-left"})}),e.jsxs("div",{style:{flex:1},children:[e.jsx("div",{style:{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"0.68rem",fontWeight:800,color:"rgba(255,204,0,0.7)",letterSpacing:2,textTransform:"uppercase",marginBottom:12},children:"From the Placement Head"}),e.jsx("div",{style:{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"0.92rem",color:"rgba(255,255,255,0.75)",lineHeight:1.85,fontStyle:"italic"},children:`"Our institution's Off-Campus Drive and Student Readiness Program is a comprehensive initiative aimed at enhancing the employability of our students. By focusing on pre-placement activities, structured assessment rounds, and targeted training modules, we are committed to preparing our students for successful careers. Our continuous efforts to update and improve the program reflect our dedication to student success and align with the high standards set by the National Board of Accreditation."`}),e.jsx("div",{style:{marginTop:20,fontFamily:"'Plus Jakarta Sans',sans-serif",fontWeight:800,fontSize:"0.88rem",color:"#ffcc00"},children:"Mr. Bhabani Shankar Sahoo"}),e.jsx("div",{style:{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"0.74rem",color:"rgba(255,255,255,0.4)",marginTop:3},children:"Placement Head · Creative Techno College"})]})]})})]})})]})]})}function Vh(){const[i,o]=y.useState(!1),[l,d]=y.useState(!1),m="/CTC NEW REACT WEBSITE/images/PlacementBrochure/PLACEMENT BROUCHURE.pdf",f=`
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
  `,u=()=>{const x=document.createElement("a");x.href=m,x.download="CTC_Placement_Brochure.pdf",x.click()},w=()=>{window.open(m,"_blank")},b=[{icon:"fa-building",label:"Top Recruiters",val:"7+",col:"linear-gradient(135deg,#0c2340,#1a3a6b)"},{icon:"fa-users",label:"Students Placed",val:"250+",col:"linear-gradient(135deg,#1a3a6b,#2d5a8e)"},{icon:"fa-calendar",label:"Years of Data",val:"2020–25",col:"linear-gradient(135deg,#2d5a8e,#3d7ab5)"},{icon:"fa-file-pdf",label:"Format",val:"PDF",col:"linear-gradient(135deg,#c0392b,#e74c3c)"}],v=[{icon:"fa-building-columns",col:"linear-gradient(135deg,#0c2340,#1a3a6b)",title:"About CTC Placements",desc:"Creative Techno College has been consistently placing students in top MNCs including TCS, Wipro, LTI Mindtree, Cognizant and Deloitte since 2020."},{icon:"fa-phone",col:"linear-gradient(135deg,#064e3b,#10b981)",title:"Contact Placement Cell",desc:"For campus recruitment partnerships and placement enquiries, reach the CTC Placement Cell at placements@creativecollege.in"},{icon:"fa-briefcase",col:"linear-gradient(135deg,#78350f,#d97706)",title:"Recruit From CTC",desc:"Partner with us for campus drives, internship programs and direct hiring. We offer BCA, B.Sc. CS and BBA graduates trained in industry-relevant skills."}];return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:f}),e.jsxs("div",{className:"pb-page",children:[e.jsx("div",{className:"pb-hero",children:e.jsxs("div",{className:"pb-hero-content",children:[e.jsxs("div",{className:"pb-hero-left",children:[e.jsxs("div",{className:"pb-hero-badge",children:[e.jsx("i",{className:"fa-solid fa-file-pdf"})," Placement Brochure · CTC"]}),e.jsxs("h1",{className:"pb-hero-title",children:["Our ",e.jsx("em",{children:"Placement"}),e.jsx("br",{}),"Brochure"]}),e.jsx("p",{className:"pb-hero-sub",children:"Complete placement brochure of Creative Techno College — featuring top recruiters, student profiles, infrastructure and placement process for campus partners."})]}),e.jsxs("div",{className:"pb-hero-right",children:[e.jsxs("button",{className:"pb-hero-btn primary",onClick:u,children:[e.jsx("i",{className:"fa-solid fa-file-arrow-down"})," Download PDF"]}),e.jsxs("button",{className:"pb-hero-btn secondary",onClick:w,children:[e.jsx("i",{className:"fa-solid fa-arrow-up-right-from-square"})," Open in New Tab"]})]})]})}),e.jsx("div",{className:"pb-wave",children:e.jsx("svg",{viewBox:"0 0 1440 56",preserveAspectRatio:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M0,38 C360,56 1080,0 1440,38 L1440,56 L0,56 Z",fill:"#f0f4f8"})})}),e.jsxs("div",{className:"pb-main",children:[e.jsx("div",{className:"pb-info-strip",children:b.map((x,h)=>e.jsxs("div",{className:"pb-info-chip",style:{animationDelay:`${h*.08}s`},children:[e.jsx("div",{className:"pb-info-chip-icon",style:{background:x.col},children:e.jsx("i",{className:`fa-solid ${x.icon}`})}),e.jsxs("div",{children:[e.jsx("div",{className:"pb-info-chip-val",children:x.val}),e.jsx("div",{className:"pb-info-chip-lbl",children:x.label})]})]},h))}),e.jsxs("div",{className:"pb-viewer-card",children:[e.jsxs("div",{className:"pb-toolbar",children:[e.jsxs("div",{className:"pb-toolbar-left",children:[e.jsx("div",{className:"pb-toolbar-icon",children:e.jsx("i",{className:"fa-solid fa-file-pdf"})}),e.jsxs("div",{children:[e.jsx("div",{className:"pb-toolbar-title",children:"CTC Placement Brochure"}),e.jsx("div",{className:"pb-toolbar-sub",children:"Creative Techno College · Official Document"})]})]}),e.jsxs("div",{className:"pb-toolbar-actions",children:[e.jsxs("button",{className:"pb-tool-btn gold",onClick:u,children:[e.jsx("i",{className:"fa-solid fa-download"})," Download"]}),e.jsxs("button",{className:"pb-tool-btn white",onClick:w,children:[e.jsx("i",{className:"fa-solid fa-arrow-up-right-from-square"})," New Tab"]}),e.jsxs("button",{className:"pb-tool-btn white",onClick:()=>d(x=>!x),children:[e.jsx("i",{className:`fa-solid ${l?"fa-compress":"fa-expand"}`}),l?"Exit":"Expand"]})]})]}),e.jsxs("div",{className:`pb-iframe-wrap${l?" fullscreen-mode":""}`,children:[!i&&e.jsxs("div",{className:"pb-loader",children:[e.jsx("div",{className:"pb-loader-ring"}),e.jsx("div",{className:"pb-loader-text",children:"Loading placement brochure…"})]}),e.jsx("iframe",{src:`${m}#toolbar=1&navpanes=1&scrollbar=1&view=FitH`,title:"CTC Placement Brochure",onLoad:()=>o(!0),style:{opacity:i?1:0,transition:"opacity 0.4s"}})]}),e.jsxs("div",{className:"pb-fullscreen-hint",children:[e.jsxs("div",{className:"pb-hint-text",children:[e.jsx("i",{className:"fa-solid fa-circle-info"}),"Use the toolbar above to download or open in a new tab for the best viewing experience."]}),e.jsxs("button",{className:"pb-tool-btn gold",onClick:u,style:{background:"rgba(12,35,64,0.07)",color:"#0c2340",border:"1.5px solid rgba(12,35,64,0.12)"},children:[e.jsx("i",{className:"fa-solid fa-file-arrow-down"})," Save Brochure"]})]})]}),e.jsxs("div",{className:"pb-mobile-notice",style:{display:"none"},id:"pb-mobile-fallback",children:[e.jsx("i",{className:"fa-solid fa-mobile-screen"}),e.jsxs("div",{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"On mobile?"})," PDF viewing may be limited on some devices. Download the brochure to your device for the best experience."]}),e.jsxs("button",{className:"pb-mobile-dl-btn",onClick:u,children:[e.jsx("i",{className:"fa-solid fa-file-arrow-down"})," Download Placement Brochure"]})]})]}),e.jsx("div",{className:"pb-bottom-grid",children:v.map((x,h)=>e.jsxs("div",{className:"pb-bottom-card",children:[e.jsx("div",{className:"pb-bottom-card-icon",style:{background:x.col},children:e.jsx("i",{className:`fa-solid ${x.icon}`})}),e.jsx("div",{className:"pb-bottom-card-title",children:x.title}),e.jsx("div",{className:"pb-bottom-card-desc",children:x.desc})]},h))})]})]}),e.jsx("script",{dangerouslySetInnerHTML:{__html:`
        (function(){
          var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
          var el = document.getElementById('pb-mobile-fallback');
          if(isMobile && el) el.style.display = 'flex';
        })();
      `}})]})}function Kh(){y.useEffect(()=>{const i=document.querySelectorAll(".rv"),o=new IntersectionObserver(l=>l.forEach(d=>{d.isIntersecting&&d.target.classList.add("visible")}),{threshold:.06});return i.forEach(l=>o.observe(l)),()=>o.disconnect()},[])}const Dd={TCS:{bg:"#0a2472",text:"#fff",short:"TCS"},WIPRO:{bg:"#8b2be2",text:"#fff",short:"WIP"},"LTI MINDTREE":{bg:"#00aa44",text:"#fff",short:"LTI"},MINDTREE:{bg:"#00aa44",text:"#fff",short:"MT"},COGNIZENT:{bg:"#0066cc",text:"#fff",short:"COG"},COGNIZANT:{bg:"#0066cc",text:"#fff",short:"COG"},INFOSYS:{bg:"#007acc",text:"#fff",short:"INF"},CAPGEMINI:{bg:"#0070ad",text:"#fff",short:"CAP"},DELOITTE:{bg:"#86bc25",text:"#fff",short:"DEL"},ACCENTURE:{bg:"#a100ff",text:"#fff",short:"ACC"},"TECH MAHINDRA":{bg:"#e31837",text:"#fff",short:"TM"},"L&T FINANCE":{bg:"#e8401c",text:"#fff",short:"L&T"},"BAJAJ ALLIANZ":{bg:"#003087",text:"#fff",short:"BAJ"},QSPIDERS:{bg:"#ff6600",text:"#fff",short:"QSP"},GQT:{bg:"#1a1a2e",text:"#fff",short:"GQT"},MPHASYS:{bg:"#6a1e91",text:"#fff",short:"MPH"},HCL:{bg:"#0d6efd",text:"#fff",short:"HCL"},"BYJU'S":{bg:"#fd4c00",text:"#fff",short:"BYJ"}},gp=i=>{const o=Object.keys(Dd).find(l=>i.toUpperCase().includes(l));return o?Dd[o]:{bg:"#334155",text:"#fff",short:i.slice(0,3).toUpperCase()}},xp=[{name:"Asutosh Sahu",batch:"BCA - 2022 AB",company:"TCS",designation:"Software Trainee"},{name:"Swapnajit Sahoo",batch:"BCA - 2022 AB",company:"TCS",designation:"Software Trainee"},{name:"Anish Ashutosh Nayak",batch:"BCA - 2022 AB",company:"TCS",designation:"Software Trainee"},{name:"Abhilipsha Pradhan",batch:"BCA - 2022 AB",company:"TCS",designation:"Software Trainee"},{name:"Adyasha Sahu",batch:"BCA - 2022 AB",company:"TCS",designation:"Software Trainee"},{name:"Archita Dhar",batch:"BCA - 2022 AB",company:"TCS",designation:"Software Trainee"},{name:"Sania Nayak",batch:"BCA - 2022 AB",company:"TCS",designation:"Software Trainee"},{name:"Bhabani Sankar Dash",batch:"BSc.CS - 2022 AB",company:"TCS",designation:"Software Trainee"},{name:"Namitarani Sahu",batch:"BSc.CS - 2022 AB",company:"TCS",designation:"Software Trainee"},{name:"Vishal Tiwari",batch:"BSc.CS - 2022 AB",company:"TCS",designation:"Software Trainee"},{name:"Sangita Pradhan",batch:"BSc.CS - 2022 AB",company:"TCS",designation:"Software Trainee"},{name:"Laxmipriya Sahu",batch:"BSc.CS - 2022 AB",company:"TCS",designation:"Software Trainee"},{name:"Payal Sahoo",batch:"BSc.CS - 2022 AB",company:"TCS",designation:"Software Trainee"},{name:"Nensi Biswal",batch:"BBA - 2022 AB",company:"TCS",designation:"Software Trainee"},{name:"Rituparna Devi",batch:"BBA - 2022 AB",company:"TCS",designation:"Software Trainee"},{name:"Ipsita Sahoo",batch:"BBA - 2022 AB",company:"TCS",designation:"Software Trainee"},{name:"Sandhyarani Sahu",batch:"BSc.CS - 2022 AB",company:"TCS",designation:"Software Trainee"},{name:"Chandrakanta Muduli",batch:"BCA",company:"WIPRO",designation:"Software Trainee"},{name:"Pritam Kumar Behera",batch:"BCA",company:"WIPRO",designation:"Software Trainee"},{name:"Adyasha Sahu",batch:"BCA",company:"WIPRO",designation:"Software Trainee"},{name:"Anish Ashutosh Nayak",batch:"BCA",company:"WIPRO",designation:"Software Trainee"},{name:"Pritiprangya Behera",batch:"BCA",company:"WIPRO",designation:"Software Trainee"},{name:"Chandan Swain",batch:"BCA",company:"WIPRO",designation:"Software Trainee"},{name:"Abhishek Kumar Rai",batch:"BCA",company:"WIPRO",designation:"Software Trainee"},{name:"Resmasmita Priyadarsini",batch:"BSc.CS (H)",company:"WIPRO",designation:"Software Trainee"},{name:"Monalisha Sahu",batch:"BSc.CS (H)",company:"WIPRO",designation:"Software Trainee"},{name:"Sushree Smita Swain",batch:"BSc.CS (H)",company:"WIPRO",designation:"Software Trainee"},{name:"Sushree Sangita Pradhan",batch:"BSc.CS (H)",company:"WIPRO",designation:"Software Trainee"},{name:"Debasish Pradhan",batch:"BSc.CS (H)",company:"WIPRO",designation:"Software Trainee"},{name:"Karan Kumar Nayak",batch:"BSc.CS (H)",company:"WIPRO",designation:"Software Trainee"},{name:"Payal Pradhan",batch:"BSc.CS (H)",company:"WIPRO",designation:"Software Trainee"},{name:"Chandrakanta Muduli",batch:"BCA - 2022 AB",company:"LTI MINDTREE",designation:"Associate Trainee"},{name:"S.K. Akil",batch:"BCA - 2022 AB",company:"LTI MINDTREE",designation:"Associate Trainee"},{name:"Payal Pradhan",batch:"BSc.CS",company:"LTI MINDTREE",designation:"Associate Trainee"},{name:"Pritiprangya Behera",batch:"BCA - 2022 AB",company:"COGNIZENT",designation:"Associate Trainee"},{name:"Ritwik Sahoo",batch:"BSc.CS",company:"COGNIZENT",designation:"Associate Trainee"},{name:"Seema Behera",batch:"BSc.CS",company:"COGNIZENT",designation:"Associate Trainee"},{name:"Lopita Sahu",batch:"BSc.CS",company:"COGNIZENT",designation:"Associate Trainee"},{name:"Anish Ashutosh Nayak",batch:"BCA - 2022 AB",company:"COGNIZENT",designation:"Associate Trainee"},{name:"Ananta Kishor Swain",batch:"BCA - 2022 AB",company:"COGNIZENT",designation:"Associate Trainee"},{name:"Swapnajit Sahoo",batch:"BCA - 2022 AB",company:"COGNIZENT",designation:"Associate Trainee"}],bp=[{name:"Rahul Kumar Sahu",batch:"BBA",company:"TCS",designation:"BPS"},{name:"Prajolita Dehury",batch:"BBA",company:"TCS",designation:"BPS"},{name:"Tushar Raman Naik",batch:"BBA",company:"TCS",designation:"BPS"},{name:"Ayush Lal",batch:"BBA",company:"TCS",designation:"BPS"},{name:"Shibuprasad Nayak",batch:"BBA",company:"TCS",designation:"BPS"},{name:"Khusi Bilas",batch:"BBA",company:"TCS",designation:"BPS"},{name:"Subrat Sahoo",batch:"BBA",company:"TCS",designation:"BPS"},{name:"Prangya Paramita Sahu",batch:"BBA",company:"TCS",designation:"BPS"},{name:"Punam P. Panda",batch:"BBA",company:"TCS",designation:"BPS"},{name:"Titan Kumar Prusty",batch:"BBA",company:"TCS",designation:"BPS"},{name:"Somesh Sahu",batch:"BBA",company:"TCS",designation:"BPS"},{name:"Biswajit Sahu",batch:"BBA",company:"TCS",designation:"BPS"},{name:"Dhiren Mahanta",batch:"BCA",company:"L&T Finance",designation:"Trainee"},{name:"Matru Prasad Muduli",batch:"BCA",company:"L&T Finance",designation:"Trainee"},{name:"Biswajit Sahu",batch:"BCA",company:"L&T Finance",designation:"Trainee"},{name:"Ashis Parida",batch:"BCA",company:"L&T Finance",designation:"Trainee"},{name:"Suman Sahoo",batch:"BSC-CS",company:"L&T Finance",designation:"Trainee"},{name:"Gyana Ranjan Sahu",batch:"BCA",company:"L&T Finance",designation:"Trainee"},{name:"Samit Kumar Pradhan",batch:"BCA",company:"L&T Finance",designation:"Trainee"},{name:"Ayush Lal",batch:"BBA",company:"L&T Finance",designation:"Trainee"},{name:"Titan Kumar Prusty",batch:"BBA",company:"L&T Finance",designation:"Trainee"},{name:"Abhishek Sahu",batch:"BBA",company:"L&T Finance",designation:"Trainee"},{name:"Tushar Raman Naik",batch:"BBA",company:"L&T Finance",designation:"Trainee"},{name:"Rahul Kumar Sahu",batch:"BBA",company:"L&T Finance",designation:"Trainee"},{name:"Subrat Sahoo",batch:"BBA",company:"L&T Finance",designation:"Trainee"},{name:"Alok Kumar Sahoo",batch:"BBA",company:"L&T Finance",designation:"Trainee"},{name:"Sibu Prashad Nayak",batch:"BBA",company:"L&T Finance",designation:"Trainee"},{name:"Ranjeet Yadav",batch:"BCA",company:"L&T Finance",designation:"Trainee"},{name:"Subhakant Pradhan",batch:"BCA",company:"L&T Finance",designation:"Trainee"},{name:"Priyadarshan Pradhan",batch:"BSC-CS",company:"L&T Finance",designation:"Trainee"},{name:"Priyaranjan Sahoo",batch:"BCA",company:"L&T Finance",designation:"Trainee"},{name:"Rasabihari Sahu",batch:"BCA",company:"L&T Finance",designation:"Trainee"},{name:"Hemananda Sahu",batch:"BCA",company:"L&T Finance",designation:"Trainee"},{name:"Alekha Sahoo",batch:"BCA",company:"L&T Finance",designation:"Trainee"},{name:"Subhendu Kumar Pratap Singh",batch:"BCA",company:"L&T Finance",designation:"Trainee"},{name:"Tusar Raman Naik",batch:"BBA",company:"E-panipuri Kartz",designation:"Trainee"},{name:"Abhishek Sahu",batch:"BBA",company:"E-panipuri Kartz",designation:"Trainee"},{name:"Chidatmika Pradhan",batch:"BBA",company:"E-panipuri Kartz",designation:"Trainee"},{name:"Monalisa Pradhan",batch:"BBA",company:"E-panipuri Kartz",designation:"Trainee"},{name:"Prajolita Dehury",batch:"BBA",company:"E-panipuri Kartz",designation:"Trainee"},{name:"Prangya Paramita Sahu",batch:"BBA",company:"E-panipuri Kartz",designation:"Trainee"},{name:"Punam P. Panda",batch:"BBA",company:"E-panipuri Kartz",designation:"Trainee"},{name:"Somesh Sahu",batch:"BBA",company:"E-panipuri Kartz",designation:"Trainee"},{name:"Subhashree Ranjan Tunga",batch:"BSC-CS",company:"Golden India Transport",designation:"Trainee"},{name:"Punam P. Panda",batch:"BBA",company:"Golden India Transport",designation:"Trainee"},{name:"Abhishek Sahoo",batch:"BBA",company:"Golden India Transport",designation:"Trainee"},{name:"Somesh Sahoo",batch:"BBA",company:"Bajaj Allianz",designation:"Trainee"},{name:"Sibuprasad Nayak",batch:"BBA",company:"Bajaj Allianz",designation:"Trainee"},{name:"Alok Kumar Sahoo",batch:"BBA",company:"Bajaj Allianz",designation:"Trainee"},{name:"Tushar Raman Naik",batch:"BBA",company:"Bajaj Allianz",designation:"Trainee"},{name:"Titan Kumar Prusty",batch:"BBA",company:"Bajaj Allianz",designation:"Trainee"},{name:"Pradyuda Kumar Sahoo",batch:"BBA",company:"Bajaj Allianz",designation:"Trainee"},{name:"Abhjit Jena",batch:"BCA",company:"EDEVLOP",designation:"Trainee"},{name:"Priyadarshan Pradhan",batch:"BSC-CS",company:"EDEVLOP",designation:"Trainee"},{name:"Somesh Sahoo",batch:"BBA",company:"Leran Medix",designation:"Trainee"},{name:"Pradyuda Kumar Sahoo",batch:"BBA",company:"Leran Medix",designation:"Trainee"},{name:"Satyabrata Ojha",batch:"BCA",company:"Edtech",designation:"Trainee"},{name:"Ashish Singh",batch:"BCA",company:"Edtech",designation:"Trainee"},{name:"Sourav Sahoo",batch:"BSC-CS",company:"DELOITTE",designation:"Software Trainee"},{name:"Priyadarshan Pradhan",batch:"BSC-CS",company:"DELOITTE",designation:"Software Trainee"},{name:"Kajal Sahoo",batch:"BSC-CS",company:"DELOITTE",designation:"Software Trainee"},{name:"Subhashree Behera",batch:"BCA",company:"ACCENTURE",designation:"Software Trainee"},{name:"Rojalin Tripathy",batch:"BSC-CS",company:"ACCENTURE",designation:"Software Trainee"},{name:"Diptimayee Sahoo",batch:"BSC-CS",company:"TCS",designation:"Software Trainee"},{name:"Gyana Ranjan Nath",batch:"BCA",company:"WIPRO",designation:"Software Trainee"},{name:"Abhijit Jena",batch:"BCA",company:"WIPRO",designation:"Software Trainee"}],yp=[{name:"Itishree Nath",batch:"BCA",company:"WIPRO",designation:"Software Trainee"},{name:"Gaurav Pathak",batch:"BCA",company:"WIPRO",designation:"Software Trainee"},{name:"Adysha Rout",batch:"BCA",company:"WIPRO",designation:"Software Trainee"},{name:"Roshan Das",batch:"BCA",company:"WIPRO",designation:"Software Trainee"},{name:"Jitendriya Jena",batch:"BCA",company:"WIPRO",designation:"Software Trainee"},{name:"Sachin Kumar Dhal",batch:"BCA",company:"WIPRO",designation:"Software Trainee"},{name:"Purusottam Barik",batch:"BCA",company:"WIPRO",designation:"Software Trainee"},{name:"Bednath Sahu",batch:"BCA",company:"WIPRO",designation:"Software Trainee"},{name:"Suraj Kumar Sahoo",batch:"BCA",company:"WIPRO",designation:"Software Trainee"},{name:"Laxminarayan Bisoi",batch:"BSC-CS",company:"WIPRO",designation:"Software Trainee"},{name:"Asit Kumar Biswal",batch:"BSC-CS",company:"WIPRO",designation:"Software Trainee"},{name:"Dharitri Sahoo",batch:"BSC-CS",company:"WIPRO",designation:"Software Trainee"},{name:"Netaji Bai",batch:"BSC-CS",company:"WIPRO",designation:"Software Trainee"},{name:"Rakesh Senapati",batch:"BSC-CS",company:"WIPRO",designation:"Software Trainee"},{name:"Kalpana Naik",batch:"BSC-CS",company:"GQT",designation:"Full Stack Developer"},{name:"Nibedita Sahoo",batch:"BSC-CS",company:"GQT",designation:"Full Stack Developer"},{name:"Sonalee Singh",batch:"BCA",company:"GQT",designation:"Full Stack Developer"},{name:"Gaurav Pathak",batch:"BCA",company:"GQT",designation:"Full Stack Developer"},{name:"Rasmita Sahoo",batch:"BSC-CS",company:"GQT",designation:"Full Stack Developer"},{name:"Shrutisweta Panda",batch:"BSC-CS",company:"GQT",designation:"Full Stack Developer"},{name:"Suraj Naik",batch:"BBA",company:"CREDENTS SOFT",designation:"Intern"},{name:"Ananya Singh",batch:"BBA",company:"CREDENTS SOFT",designation:"Intern"},{name:"Subhranshu Sahu",batch:"BBA",company:"CREDENTS SOFT",designation:"Intern"},{name:"Subrat Kumar Pradhan",batch:"BBA",company:"CREDENTS SOFT",designation:"Intern"},{name:"Jogita Jangyaseni Pradhan",batch:"BBA",company:"CREDENTS SOFT",designation:"Intern"},{name:"Janmejaya Behera",batch:"BBA",company:"CREDENTS SOFT",designation:"Intern"},{name:"Rohan Kumar Sahoo",batch:"BBA",company:"CREDENTS SOFT",designation:"Intern"},{name:"Kusumanjali Pradhan",batch:"BBA",company:"KAMALJIT ENTERPRISES",designation:"Marketing"},{name:"Jogita Jangyaseni Pradhan",batch:"BBA",company:"KAMALJIT ENTERPRISES",designation:"Marketing"},{name:"Janmejaya Behera",batch:"BBA",company:"KAMALJIT ENTERPRISES",designation:"Marketing"},{name:"Roshan Das",batch:"BCA",company:"QSPIDERS",designation:"Trainee"},{name:"Itishree Nath",batch:"BCA",company:"QSPIDERS",designation:"Trainee"},{name:"Rakesh Senapati",batch:"BSC-CS",company:"QSPIDERS",designation:"Trainee"},{name:"Baishanavi Rout",batch:"BSC-CS",company:"QSPIDERS",designation:"Trainee"},{name:"Laxminarayan Bisoi",batch:"BSC-CS",company:"QSPIDERS",designation:"Trainee"},{name:"Adysha Rout",batch:"BCA",company:"QSPIDERS",designation:"Trainee"},{name:"Sandeep Samal",batch:"BSC-CS",company:"QSPIDERS",designation:"Trainee"},{name:"Kalpana Naik",batch:"BSC-CS",company:"QSPIDERS",designation:"Trainee"},{name:"Padmalaya Sahu",batch:"BCA",company:"QSPIDERS",designation:"Trainee"},{name:"Sonalee Singh",batch:"BCA",company:"QSPIDERS",designation:"Trainee"},{name:"Dharitri Sahoo",batch:"BSC-CS",company:"QSPIDERS",designation:"Trainee"},{name:"Subhasmita Singh",batch:"BCA",company:"QSPIDERS",designation:"Trainee"},{name:"Subrat Kumar Sahu",batch:"BCA",company:"QSPIDERS",designation:"Trainee"},{name:"Abhijit Bhuyan",batch:"BSC-CS",company:"QSPIDERS",designation:"Trainee"},{name:"Netaji Bai",batch:"BSC-CS",company:"QSPIDERS",designation:"Trainee"},{name:"Rasmita Sahoo",batch:"BSC-CS",company:"QSPIDERS",designation:"Trainee"},{name:"Arjyakumari Nirlipta",batch:"BSC-CS",company:"QSPIDERS",designation:"Trainee"},{name:"Sruti Sweta Panda",batch:"BSC-CS",company:"QSPIDERS",designation:"Trainee"},{name:"Deepa Sahu",batch:"BSC-CS",company:"QSPIDERS",designation:"Trainee"},{name:"Madhusmita Rout",batch:"BSC-CS",company:"QSPIDERS",designation:"Trainee"},{name:"Sweet Kumari Muni",batch:"BCA",company:"QSPIDERS",designation:"Trainee"},{name:"Chinmayee Sahoo",batch:"BCA",company:"QSPIDERS",designation:"Trainee"},{name:"Satyajit Bhuyan",batch:"BSC-CS",company:"QSPIDERS",designation:"Trainee"},{name:"Purnima Sahoo",batch:"BCA",company:"QSPIDERS",designation:"Trainee"},{name:"Akash Kumar Behera",batch:"BBA",company:"TCS",designation:"BPS"},{name:"Jogita Jangyaseni Pradhan",batch:"BBA",company:"TCS",designation:"BPS"},{name:"Amisha Prasad",batch:"BBA",company:"TCS",designation:"BPS"},{name:"Subrat Kumar Sahu",batch:"BCA",company:"TEACHNOOK",designation:"Academic Counsellor"},{name:"Priyadarshini Garnaik",batch:"BSC-CS",company:"CREDENTS SOFT",designation:"Intern"},{name:"Satyajit Bhuyan",batch:"BSC-CS",company:"TECH MAHINDRA",designation:"BPS"},{name:"Abhijit Bhuyan",batch:"BSC-CS",company:"TECH MAHINDRA",designation:"BPS"},{name:"Akash Kumar Behera",batch:"BBA",company:"TECH MAHINDRA",designation:"BPS"},{name:"Rohan Kumar Sahoo",batch:"BBA",company:"BYJU'S",designation:"HR Role"},{name:"Rasmita Sahoo",batch:"BSC-CS",company:"TECH MAHINDRA",designation:"BPS"},{name:"Janmejaya Behera",batch:"BBA",company:"BYJU'S",designation:"Marketing"},{name:"Jogita Jangyaseni Pradhan",batch:"BBA",company:"BYJU'S",designation:"Marketing"},{name:"Ananya Singh",batch:"BBA",company:"BYJU'S",designation:"Marketing"},{name:"Barsaranee Barik",batch:"BCA",company:"EXCELERATE",designation:"Data Analyst"},{name:"Adysha Rout",batch:"BCA",company:"TECH MAHINDRA",designation:"BPS"},{name:"Janmejaya Behera",batch:"BBA",company:"TECH MAHINDRA",designation:"BPS"},{name:"Adysha Rout",batch:"BCA",company:"CAPGEMINI",designation:"Trainee"},{name:"Abhijit Jena",batch:"BCA",company:"WIPRO",designation:"Software Trainee"}],vp=[{name:"Richa Singh",batch:"BCA (2019-22)",company:"DELOITTE",designation:""},{name:"Snehlata Pandey",batch:"BCA (2019-22)",company:"DELOITTE",designation:""},{name:"Ankita Pradhan",batch:"BCA (2019-22)",company:"DELOITTE",designation:""},{name:"Debasrita Sahu",batch:"BSC (2019-22)",company:"DELOITTE",designation:""},{name:"Ratikanta Pradhan",batch:"BCA (2019-22)",company:"WIPRO",designation:""},{name:"Snehlata Pandey",batch:"BCA (2019-22)",company:"WIPRO",designation:""},{name:"Isha Agarwal",batch:"BCA (2019-22)",company:"WIPRO",designation:""},{name:"Rani Sahu",batch:"BSC (2019-22)",company:"WIPRO",designation:""},{name:"Ankita Pradhan",batch:"BCA (2019-22)",company:"WIPRO",designation:""},{name:"Answesha Sahu",batch:"BSC (2019-22)",company:"WIPRO",designation:""},{name:"Debismita Sahu",batch:"BSC (2019-22)",company:"WIPRO",designation:""},{name:"Tejaswini Pradhan",batch:"BSC (2019-22)",company:"WIPRO",designation:""},{name:"Puja Behera",batch:"BSC (2019-22)",company:"WIPRO",designation:""},{name:"Subhadra Behera",batch:"BSC (2019-22)",company:"WIPRO",designation:""},{name:"Manasmita Sahoo",batch:"BSC (2019-22)",company:"WIPRO",designation:""},{name:"Jyotirmay Prasad",batch:"BCA (2019-22)",company:"WIPRO",designation:""},{name:"S. Satya Sagar",batch:"BCA (2019-22)",company:"WIPRO",designation:""},{name:"Richa Singh",batch:"BCA (2019-22)",company:"WIPRO",designation:""},{name:"Puja Behera",batch:"BSC (2019-22)",company:"LTI",designation:""},{name:"Isha Agarwal",batch:"BCA (2019-22)",company:"LTI",designation:""},{name:"Snehlata Pandey",batch:"BCA (2019-22)",company:"LTI",designation:""},{name:"Jyotirmay Prasad",batch:"BCA (2019-22)",company:"ACCENTURE",designation:""},{name:"Swadesh Behera",batch:"BSC (2019-22)",company:"ACCENTURE",designation:""},{name:"Pratibha Behera",batch:"BCA (2019-22)",company:"MPHASYS",designation:""},{name:"Isha Agarwal",batch:"BCA (2019-22)",company:"MPHASYS",designation:""},{name:"Richa Singh",batch:"BCA (2019-22)",company:"MPHASYS",designation:""},{name:"Snehlata Pandey",batch:"BCA (2019-22)",company:"CAPGEMINI",designation:""},{name:"Smrutirekha Sahu",batch:"BSC (2019-22)",company:"CAPGEMINI",designation:""},{name:"Sratoswini Parida",batch:"BCA (2019-22)",company:"CAPGEMINI",designation:""},{name:"Swadesh Behera",batch:"BSC (2019-22)",company:"CAPGEMINI",designation:""},{name:"Ankita Pani",batch:"BCA (2019-22)",company:"CAPGEMINI",designation:""},{name:"Richa Singh",batch:"BCA (2019-22)",company:"CAPGEMINI",designation:""},{name:"Tejaswini Pradhan",batch:"BSC (2019-22)",company:"CAPGEMINI",designation:""},{name:"Isha Agarwal",batch:"BCA (2019-22)",company:"CAPGEMINI",designation:""},{name:"Rituparna Das",batch:"BBA (2019-22)",company:"O2 SAVER",designation:""},{name:"Iqra Asad",batch:"BBA (2019-22)",company:"O2 SAVER",designation:""},{name:"Vaibhab Sharma",batch:"BBA (2019-22)",company:"O2 SAVER",designation:""},{name:"Sonali Seth",batch:"BSC (2019-22)",company:"O2 SAVER",designation:""},{name:"Smrutirekha Sahu",batch:"BSC (2019-22)",company:"O2 SAVER",designation:""},{name:"Baby Pradhan",batch:"BSC (2019-22)",company:"O2 SAVER",designation:""},{name:"Sucharita Sahu",batch:"BSC (2019-22)",company:"O2 SAVER",designation:""},{name:"Puja Behera",batch:"BSC (2019-22)",company:"O2 SAVER",designation:""},{name:"Tejaswini Pradhan",batch:"BSC (2019-22)",company:"O2 SAVER",designation:""},{name:"Anwesha Sahu",batch:"BSC (2019-22)",company:"O2 SAVER",designation:""},{name:"Satybrata Pradhan",batch:"BCA (2019-22)",company:"QSPIDERS",designation:""},{name:"Subham Parida",batch:"BCA (2019-22)",company:"QSPIDERS",designation:""},{name:"Jyotirmay Prasad",batch:"BCA (2019-22)",company:"QSPIDERS",designation:""},{name:"Ankita Pani",batch:"BCA (2019-22)",company:"QSPIDERS",designation:""},{name:"Isha Agarwal",batch:"BCA (2019-22)",company:"QSPIDERS",designation:""},{name:"Sonali Seth",batch:"BSC (2019-22)",company:"QSPIDERS",designation:""},{name:"Swadesh Behera",batch:"BSC (2019-22)",company:"QSPIDERS",designation:""},{name:"Smrutirekha Sahu",batch:"BSC (2019-22)",company:"QSPIDERS",designation:""},{name:"Anwesha Sahu",batch:"BSC (2019-22)",company:"QSPIDERS",designation:""},{name:"Subhasmita Sahu",batch:"BSC (2019-22)",company:"QSPIDERS",designation:""},{name:"Tejaswini Pradhan",batch:"BSC (2019-22)",company:"QSPIDERS",designation:""},{name:"Subham Parida",batch:"BCA (2019-22)",company:"INFOSYS",designation:""},{name:"Biswabijan Mohanty",batch:"BSC (2019-22)",company:"INFOSYS",designation:""},{name:"Rani Sahu",batch:"BSC (2019-22)",company:"INFOSYS",designation:""},{name:"Pratibha Behera",batch:"BCA (2019-22)",company:"INFOSYS",designation:""},{name:"Tejaswini Pradhan",batch:"BSC (2019-22)",company:"INFOSYS",designation:""}],jp=[{name:"Ashutosh Kar",batch:"BCA-2021",company:"WIPRO, TCS, AT&T, Airtel, Publis Sapient, Mind Tree, Tech Mahindra, L&T",designation:"8 Offers"},{name:"Purushotam Swain",batch:"BCA-2021",company:"WIPRO, TCS, Infosys, CISCO, Accenture, HCL",designation:"6 Offers"},{name:"Vikash Tiwary",batch:"BCA-2021",company:"WIPRO, TCS, Edusys",designation:"3 Offers"},{name:"Swetalin Nath",batch:"BCA-2021",company:"WIPRO, Cognizent, Infosys, Mindtree",designation:"4 Offers"},{name:"Abhisek Jena",batch:"BCA-2021",company:"SNAPDEAL, Mindtree",designation:"2 Offers"},{name:"Ayush Tripathy",batch:"BCA-2021",company:"WIPRO",designation:"1 Offer"},{name:"Sagar Pradhan",batch:"BCA-2021",company:"Mindtree",designation:"1 Offer"},{name:"Rajesh Sahu",batch:"BCA-2021",company:"HCL",designation:"1 Offer"},{name:"Nasreen Qureshi",batch:"BSC-2021",company:"ICICI, Tech Mahindra, TCS, Mindtree",designation:"4 Offers"},{name:"Biswabhusan Das",batch:"BSC-2021",company:"Byju's, Upgrade",designation:"2 Offers"},{name:"Swayamprava Das",batch:"BSC-2021",company:"DXC, TCS",designation:"2 Offers"},{name:"Sunil Das",batch:"BCA-2020",company:"WIPRO",designation:"1 Offer"},{name:"Amit Kumar Mahanta",batch:"BCA-2020",company:"Tech Mahindra",designation:"1 Offer"},{name:"Krishnakanta Behera",batch:"BCA-2021",company:"Byju's",designation:"1 Offer"},{name:"Swagatika Pradhan",batch:"BCA-2021",company:"TCS",designation:"1 Offer"},{name:"Saswat Sahu",batch:"BCA-2021",company:"Mindtree",designation:"1 Offer"},{name:"Komal Gupta",batch:"BCA-2021",company:"Mindtree",designation:"1 Offer"},{name:"Anmol Kumar Mishara Sharma",batch:"BSC-2021",company:"COGNIZANT",designation:"1 Offer"}],Fd=[{id:"2025",label:"2025",data:xp,color:"#0c2340"},{id:"2024",label:"2024",data:bp,color:"#1a3a6b"},{id:"2023",label:"2023",data:yp,color:"#2d5a8e"},{id:"2022",label:"2022 Batch",data:vp,color:"#3d7ab5"},{id:"2021",label:"2020 & 2021",data:jp,color:"#5599cc"}],lo=12;function Qh(){const i=y.useRef(null),o=y.useRef(null);return y.useEffect(()=>{const l=()=>{var f;const d=window.Chart;if(!d)return;o.current&&o.current.destroy();const m=(f=i.current)==null?void 0:f.getContext("2d");m&&(o.current=new d(m,{type:"bar",data:{labels:["WIPRO","TECH MAHINDRA","TCS","MINDTREE/LTI","INFOSYS","COGNIZANT","DELOITTE","ACCENTURE","CAPGEMINI","HCL","BYJU'S"],datasets:[{label:"2020",data:[10,2,8,1,2,0,1,1,2,1,1],backgroundColor:"rgba(12,35,64,0.85)"},{label:"2021",data:[8,1,7,2,1,0,2,1,1,0,1],backgroundColor:"rgba(26,58,107,0.85)"},{label:"2022",data:[12,2,9,1,2,1,1,1,3,0,1],backgroundColor:"rgba(45,90,142,0.85)"},{label:"2023",data:[15,3,10,2,1,0,1,1,1,0,2],backgroundColor:"rgba(61,122,181,0.85)"},{label:"2024",data:[8,1,4,1,1,0,1,1,1,0,1],backgroundColor:"rgba(85,153,204,0.85)"},{label:"2025",data:[5,1,2,0,0,1,1,0,1,0,0],backgroundColor:"rgba(130,190,230,0.85)"}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!0,position:"top",labels:{font:{family:"Plus Jakarta Sans",size:12},color:"#0c2340"}}},scales:{x:{stacked:!0,ticks:{font:{size:11},color:"#334155"},grid:{display:!1}},y:{stacked:!0,ticks:{font:{size:11},color:"#334155"},grid:{color:"rgba(0,0,0,0.05)"}}}}}))};if(window.Chart)l();else{const d=document.createElement("script");d.src="https://cdn.jsdelivr.net/npm/chart.js",d.async=!0,d.onload=l,document.body.appendChild(d)}return()=>{o.current&&o.current.destroy()}},[]),e.jsx("div",{style:{height:380,position:"relative",width:"100%"},children:e.jsx("canvas",{ref:i})})}function qh({student:i,idx:o}){const l=gp(i.company),d=i.name.split(" ").map(m=>m[0]).join("").slice(0,2).toUpperCase();return e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:14,padding:"14px 18px",background:o%2===0?"#fff":"#f8fafc",borderBottom:"1px solid rgba(10,22,40,0.06)",transition:"background 0.2s"},onMouseEnter:m=>m.currentTarget.style.background="#f0f6ff",onMouseLeave:m=>m.currentTarget.style.background=o%2===0?"#fff":"#f8fafc",children:[e.jsx("div",{style:{width:38,height:38,borderRadius:"50%",flexShrink:0,background:"linear-gradient(135deg,#0c2340,#1a3a6b)",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"0.72rem",fontWeight:800,color:"#ffcc00"},children:d}),e.jsxs("div",{style:{flex:1,minWidth:0},children:[e.jsx("div",{style:{fontFamily:"'Plus Jakarta Sans',sans-serif",fontWeight:700,fontSize:"0.85rem",color:"#0c2340",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:i.name}),e.jsx("div",{style:{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"0.7rem",color:"#94a3b8",fontWeight:600,marginTop:2},children:i.batch})]}),e.jsx("div",{style:{background:l.bg,color:l.text,padding:"5px 12px",borderRadius:20,fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"0.7rem",fontWeight:800,letterSpacing:"0.3px",flexShrink:0,maxWidth:160,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",textAlign:"center"},children:i.company}),i.designation&&e.jsx("div",{style:{background:"#f0f6ff",border:"1.5px solid rgba(12,35,64,0.12)",color:"#0c2340",padding:"4px 10px",borderRadius:8,fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"0.68rem",fontWeight:700,flexShrink:0,display:"none"},className:"ps-desg",children:i.designation})]})}function Xh({data:i,year:o}){const[l,d]=y.useState(""),[m,f]=y.useState("ALL"),[u,w]=y.useState("ALL"),[b,v]=y.useState(1),[x,h]=y.useState("list"),T=y.useMemo(()=>["ALL",...new Set(i.map(A=>A.company))].sort(),[i]),P=y.useMemo(()=>["ALL",...new Set(i.map(A=>A.batch))].sort(),[i]),K=y.useMemo(()=>i.filter(A=>{const _=l.toLowerCase(),X=!_||A.name.toLowerCase().includes(_)||A.company.toLowerCase().includes(_)||A.batch.toLowerCase().includes(_),ie=m==="ALL"||A.company===m,me=u==="ALL"||A.batch===u;return X&&ie&&me}),[i,l,m,u]),W=Math.ceil(K.length/lo),L=K.slice((b-1)*lo,b*lo);y.useEffect(()=>{v(1)},[l,m,u]);const B=y.useMemo(()=>{const A={};return K.forEach(_=>{A[_.company]=(A[_.company]||0)+1}),Object.entries(A).sort((_,X)=>X[1]-_[1]).slice(0,6)},[K]);return e.jsxs("div",{children:[e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(150px,1fr))",gap:14,marginBottom:24},children:[{label:"Total Placed",val:i.length,icon:"fa-users"},{label:"Companies",val:new Set(i.map(A=>A.company)).size,icon:"fa-building"},{label:"Batches",val:new Set(i.map(A=>A.batch)).size,icon:"fa-graduation-cap"},{label:"Showing",val:K.length,icon:"fa-filter"}].map((A,_)=>e.jsxs("div",{style:{background:_===0?"linear-gradient(135deg,#0c2340,#1a3a6b)":"#fff",border:"1px solid rgba(10,22,40,0.07)",borderRadius:14,padding:"16px 18px",boxShadow:"0 2px 12px rgba(10,22,40,0.07)"},children:[e.jsx("div",{style:{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"1.5rem",fontWeight:900,color:_===0?"#ffcc00":"#0c2340",lineHeight:1},children:A.val}),e.jsx("div",{style:{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"0.7rem",fontWeight:600,color:_===0?"rgba(255,255,255,0.6)":"#4a6080",marginTop:4},children:A.label})]},_))}),e.jsxs("div",{style:{display:"flex",gap:10,marginBottom:16,flexWrap:"wrap"},children:[e.jsxs("div",{style:{flex:"1 1 200px",display:"flex",alignItems:"center",gap:10,background:"#fff",border:"1.5px solid rgba(10,22,40,0.1)",borderRadius:12,padding:"0 14px"},children:[e.jsx("i",{className:"fa-solid fa-magnifying-glass",style:{color:"#94a3b8",fontSize:"0.85rem"}}),e.jsx("input",{value:l,onChange:A=>d(A.target.value),placeholder:"Search name, company, batch…",style:{flex:1,border:"none",outline:"none",padding:"12px 0",fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"0.85rem",background:"transparent",color:"#0c2340"}}),l&&e.jsx("button",{onClick:()=>d(""),style:{background:"none",border:"none",cursor:"pointer",color:"#94a3b8",fontSize:"0.75rem"},children:"✕"})]}),e.jsx("select",{value:m,onChange:A=>f(A.target.value),style:{flex:"0 0 auto",border:"1.5px solid rgba(10,22,40,0.1)",borderRadius:12,padding:"10px 14px",fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"0.82rem",color:"#0c2340",background:"#fff",outline:"none",cursor:"pointer"},children:T.map(A=>e.jsx("option",{value:A,children:A==="ALL"?"🏢 All Companies":A},A))}),e.jsx("select",{value:u,onChange:A=>w(A.target.value),style:{flex:"0 0 auto",border:"1.5px solid rgba(10,22,40,0.1)",borderRadius:12,padding:"10px 14px",fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"0.82rem",color:"#0c2340",background:"#fff",outline:"none",cursor:"pointer"},children:P.map(A=>e.jsx("option",{value:A,children:A==="ALL"?"🎓 All Batches":A},A))})]}),B.length>0&&e.jsx("div",{style:{display:"flex",gap:8,flexWrap:"wrap",marginBottom:16},children:B.map(([A,_])=>{const X=gp(A);return e.jsxs("button",{onClick:()=>f(m===A?"ALL":A),style:{background:m===A?X.bg:`${X.bg}18`,color:m===A?X.text:X.bg,border:`1.5px solid ${X.bg}40`,borderRadius:20,padding:"5px 12px",fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"0.72rem",fontWeight:800,cursor:"pointer",display:"flex",alignItems:"center",gap:6,transition:"all 0.2s"},children:[A," ",e.jsxs("span",{style:{opacity:.75},children:["(",_,")"]})]},A)})}),e.jsxs("div",{style:{background:"#fff",borderRadius:16,border:"1.5px solid rgba(10,22,40,0.08)",overflow:"hidden",boxShadow:"0 4px 20px rgba(10,22,40,0.07)"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:14,padding:"12px 18px",background:"linear-gradient(135deg,#0c2340,#1a3a6b)"},children:[e.jsx("div",{style:{width:38,flexShrink:0}}),e.jsx("div",{style:{flex:1,fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"0.72rem",fontWeight:800,color:"#ffcc00",textTransform:"uppercase",letterSpacing:"0.8px"},children:"Student Name · Batch"}),e.jsx("div",{style:{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"0.72rem",fontWeight:800,color:"#ffcc00",textTransform:"uppercase",letterSpacing:"0.8px"},children:"Company"})]}),L.length===0?e.jsxs("div",{style:{padding:"48px 20px",textAlign:"center"},children:[e.jsx("i",{className:"fa-solid fa-search",style:{fontSize:"2rem",color:"#cbd5e1",display:"block",marginBottom:12}}),e.jsx("div",{style:{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"0.9rem",color:"#94a3b8",fontWeight:600},children:"No results found"})]}):L.map((A,_)=>e.jsx(qh,{student:A,idx:_},_))]}),W>1&&e.jsxs("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",gap:8,marginTop:20,flexWrap:"wrap"},children:[e.jsx("button",{onClick:()=>v(A=>Math.max(1,A-1)),disabled:b===1,style:{background:b===1?"#f0f4f8":"#0c2340",color:b===1?"#94a3b8":"#ffcc00",border:"none",borderRadius:10,padding:"8px 16px",fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"0.8rem",fontWeight:700,cursor:b===1?"default":"pointer",transition:"all 0.2s"},children:"← Prev"}),Array.from({length:Math.min(W,7)},(A,_)=>{let X;return W<=7||b<=4?X=_+1:b>=W-3?X=W-6+_:X=b-3+_,e.jsx("button",{onClick:()=>v(X),style:{background:b===X?"#0c2340":"#fff",color:b===X?"#ffcc00":"#0c2340",border:`1.5px solid ${b===X?"#0c2340":"rgba(12,35,64,0.15)"}`,borderRadius:10,padding:"8px 14px",minWidth:38,fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"0.8rem",fontWeight:700,cursor:"pointer",transition:"all 0.2s"},children:X},X)}),e.jsx("button",{onClick:()=>v(A=>Math.min(W,A+1)),disabled:b===W,style:{background:b===W?"#f0f4f8":"#0c2340",color:b===W?"#94a3b8":"#ffcc00",border:"none",borderRadius:10,padding:"8px 16px",fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"0.8rem",fontWeight:700,cursor:b===W?"default":"pointer"},children:"Next →"}),e.jsxs("span",{style:{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"0.75rem",color:"#94a3b8",fontWeight:600},children:["Page ",b," of ",W," · ",K.length," records"]})]})]})}function Hd(){Kh();const[i,o]=y.useState("2025"),l=Fd.find(w=>w.id===i),d=y.useRef(null),m=w=>{o(w),setTimeout(()=>{var b;return(b=d.current)==null?void 0:b.scrollIntoView({behavior:"smooth",block:"start"})},80)},f=`
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
  `,u=xp.length+bp.length+yp.length+vp.length+jp.length;return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:f}),e.jsxs("div",{className:"ps-page",children:[e.jsx("div",{className:"ps-hero",children:e.jsxs("div",{className:"ps-hero-content",children:[e.jsxs("div",{className:"ps-hero-badge",children:[e.jsx("i",{className:"fa-solid fa-chart-bar"}),"Placement Statistics · 2020–2025"]}),e.jsxs("h1",{className:"ps-hero-h1",children:["Our ",e.jsx("em",{children:"Placement"}),e.jsx("br",{}),"Success Story"]}),e.jsxs("p",{className:"ps-hero-sub",children:["Complete year-wise placement data for Creative Techno College — ",u,"+ students placed in leading companies across India."]}),e.jsx("div",{style:{display:"flex",gap:20,flexWrap:"wrap"},children:[{val:`${u}+`,label:"Total Placements"},{val:"20+",label:"Companies"},{val:"6",label:"Years Data"},{val:"100%",label:"Commitment"}].map((w,b)=>e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx("div",{style:{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"1.6rem",fontWeight:900,color:"#ffcc00",lineHeight:1},children:w.val}),e.jsx("div",{style:{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"0.68rem",color:"rgba(255,255,255,0.4)",fontWeight:600,marginTop:3,textTransform:"uppercase",letterSpacing:"0.5px"},children:w.label})]},b))})]})}),e.jsx("div",{className:"ps-wave",children:e.jsx("svg",{viewBox:"0 0 1440 56",preserveAspectRatio:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M0,38 C360,56 1080,0 1440,38 L1440,56 L0,56 Z",fill:"#f0f4f8"})})}),e.jsxs("div",{className:"ps-main",children:[e.jsxs("div",{className:"ps-chart-card rv",children:[e.jsx("div",{className:"ps-chart-title",children:"Year-wise Hiring Distribution (2020–2025)"}),e.jsx("div",{className:"ps-chart-sub",children:"Stacked bar chart showing hiring counts by company across all years"}),e.jsx(Qh,{})]}),e.jsx("div",{className:"ps-year-tabs rv",style:{transitionDelay:"0.1s"},children:Fd.map(w=>e.jsxs("button",{className:`ps-year-tab${i===w.id?" active":""}`,onClick:()=>m(w.id),children:[w.label," ",e.jsxs("span",{style:{opacity:.6,fontSize:"0.75em",marginLeft:4},children:["(",w.data.length,")"]})]},w.id))}),e.jsxs("div",{className:"ps-table-card rv",style:{transitionDelay:"0.15s"},ref:d,children:[e.jsxs("div",{className:"ps-table-header",children:[e.jsxs("div",{className:"ps-table-title",children:["Placement Report — ",l==null?void 0:l.label]}),e.jsxs("div",{className:"ps-table-sub",children:[l==null?void 0:l.data.length," records · Searchable & filterable by company and batch"]})]}),e.jsx("div",{className:"ps-table-body",children:l&&e.jsx(Xh,{data:l.data,year:i})})]})]})]})]})}const _d=[{name:"Technocrat",color:"#3b82f6",colorDark:"#1d4ed8",bg:"linear-gradient(135deg, #1d4ed8 0%, #3b82f6 100%)",desc:"Technology, innovation, and entrepreneurship. Coding, hackathons, and robotics drive our mission.",to:"/gymkhana/technocrat",img:"/CTC NEW REACT WEBSITE/images/GYMKHANA/technocrat.png",tag:"Innovation & Tech"},{name:"Sports",color:"#10b981",colorDark:"#059669",bg:"linear-gradient(135deg, #059669 0%, #10b981 100%)",desc:"Indoor & outdoor games, tournaments, and fitness — building discipline and sportsmanship.",to:"/gymkhana/sports",img:"/CTC NEW REACT WEBSITE/images/GYMKHANA/sports.png",tag:"Athletics & Fitness"},{name:"Cultural",color:"#f59e0b",colorDark:"#d97706",bg:"linear-gradient(135deg, #d97706 0%, #f59e0b 100%)",desc:"Music, dance, drama, arts, and literary activities — a stage for creativity and expression.",to:"/gymkhana/cultural",img:"/CTC NEW REACT WEBSITE/images/GYMKHANA/cultural.png",tag:"Arts & Expression"},{name:"Disha & CSR",color:"#ec4899",colorDark:"#db2777",bg:"linear-gradient(135deg, #db2777 0%, #ec4899 100%)",desc:"Career guidance and social responsibility — outreach programs that make a real difference.",to:"/gymkhana/disha-csr",img:"/CTC NEW REACT WEBSITE/images/GYMKHANA/disha.png",tag:"Community & Growth"}],Zh=["Provide a platform for students to engage in co-curricular and extracurricular activities.","Encourage leadership, innovation, and organizational skills among students.","Cultivate teamwork, collaboration, and a sense of responsibility.","Complement academic learning with practical exposure and problem-solving experiences.","Nurture creativity, sportsmanship, and social responsibility."],eg=[{icon:"fa-solid fa-star",title:"Skill Enhancement",desc:"Building confidence, communication, and leadership abilities."},{icon:"fa-solid fa-seedling",title:"Holistic Development",desc:"Balancing academics with cultural, technical, and sports excellence."},{icon:"fa-solid fa-people-group",title:"Community Engagement",desc:"Promoting social awareness and CSR initiatives."},{icon:"fa-solid fa-crown",title:"Student Leadership",desc:"Empowering students to take charge through active roles in clubs and events."},{icon:"fa-solid fa-handshake",title:"Collaboration",desc:"Strengthening unity and coordination among diverse student groups."}];function ag(){return e.jsxs("div",{className:"gym-page",children:[e.jsx("style",{children:`
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
      `}),e.jsx("section",{className:"gym-hero",children:e.jsxs("div",{className:"gym-hero-content",children:[e.jsxs("div",{className:"gym-hero-left",children:[e.jsxs("div",{className:"gym-hero-chip",children:[e.jsx("i",{className:"fa-solid fa-building-columns"})," Creative Techno College · Student Wing"]}),e.jsxs("h1",{children:["GYM",e.jsx("em",{children:"KHANA"})]}),e.jsx("p",{className:"gym-hero-sub",children:"Technocrat · Sports · Cultural · Disha & CSR"}),e.jsx("p",{children:"The vibrant hub of student life, leadership, and creativity at Creative Techno College, Angul. Four dynamic clubs empowering students to explore passions, showcase talents, and develop essential life skills beyond academics."})]}),e.jsx("div",{className:"gym-hero-right",children:e.jsxs("div",{className:"gym-hero-badges",children:[_d.map((i,o)=>e.jsxs("span",{className:"gym-hero-badge",children:[e.jsx("span",{className:"gym-hero-badge-dot",style:{background:i.color}}),e.jsx("i",{className:i.icon,style:{color:i.color}})," ",i.name]},o)),e.jsxs("span",{className:"gym-hero-badge",children:[e.jsx("span",{className:"gym-hero-badge-dot",style:{background:"#f5c518"}}),e.jsx("i",{className:"fa-solid fa-users",style:{color:"#f5c518"}})," 200+ Active Members"]})]})})]})}),e.jsx("div",{className:"gym-stats-wrap",children:e.jsx("div",{className:"gym-stats-bar",children:[["4","Active Clubs"],["200+","Student Members"],["50+","Events Yearly"],["100%","Participation"]].map(([i,o],l)=>e.jsxs("div",{className:"gym-stat",children:[e.jsx("span",{className:"gym-stat-num",children:i}),e.jsx("span",{className:"gym-stat-label",children:o})]},l))})}),e.jsx("section",{className:"gym-president",children:e.jsxs("div",{className:"gym-president-inner",children:[e.jsx("div",{className:"gym-president-img-wrap",children:e.jsx("img",{src:"/CTC NEW REACT WEBSITE/images/GYMKHANA/Dean Sir.png",alt:"Mr. Manoj Das"})}),e.jsxs("div",{className:"gym-president-text",children:[e.jsx("div",{className:"gym-president-pill",children:"Message from the President"}),e.jsxs("h2",{children:["A Message from Our ",e.jsx("span",{children:"President"})]}),e.jsx("p",{children:'"At Creative Techno College, we believe education is not confined to classrooms. True learning happens when students step beyond books and engage in experiences that shape their personality, values, and leadership qualities.'}),e.jsx("p",{children:'The Gymkhana embodies this spirit — through the four vibrant clubs — Technocrat, Sports, Cultural, and Disha+CSR — we nurture innovation, teamwork, cultural expression, and social responsibility."'}),e.jsx("p",{className:"gym-president-sig",children:"— Mr. Manoj Das  |  Dean Academic & President, Gymkhana"})]})]})}),e.jsxs("section",{className:"gym-vps",children:[e.jsxs("div",{className:"gym-section-heading",children:[e.jsxs("div",{className:"gym-section-pill",children:[e.jsx("i",{className:"fa-solid fa-users"})," Leadership"]}),e.jsxs("h2",{children:["Vice ",e.jsx("span",{children:"Presidents"})]}),e.jsx("p",{children:"Student representatives who lead the Gymkhana alongside the President."})]}),e.jsx("div",{className:"gym-vp-grid",children:[{name:"Mr. Subham Nanda",role:"Vice President",badge:"Boy Representative",img:"/CTC NEW REACT WEBSITE/images/GYMKHANA/subham.jpeg",icon:"fa-solid fa-mars"},{name:"Ms. Bidusmita Mishra",role:"Vice President",badge:"Girl Representative",img:"/CTC NEW REACT WEBSITE/images/GYMKHANA/bidusmita.jpeg",icon:"fa-solid fa-venus"}].map((i,o)=>e.jsxs("div",{className:"gym-vp-card",children:[e.jsxs("div",{className:"gym-vp-card-top",children:[e.jsx("div",{className:"gym-vp-img-ring",children:e.jsx("img",{src:i.img,alt:i.name})}),e.jsx("h4",{children:i.name}),e.jsx("p",{children:i.role})]}),e.jsx("div",{className:"gym-vp-card-bottom",children:e.jsxs("span",{className:"gym-vp-badge",children:[e.jsx("i",{className:i.icon})," ",i.badge]})})]},o))})]}),e.jsxs("section",{className:"gym-clubs",children:[e.jsxs("div",{className:"gym-section-heading",children:[e.jsxs("div",{className:"gym-section-pill",children:[e.jsx("i",{className:"fa-solid fa-layer-group"})," Our Clubs"]}),e.jsxs("h2",{children:["Clubs Under ",e.jsx("span",{children:"Gymkhana"})]}),e.jsx("p",{children:"Click any club to explore its activities, team, and achievements."})]}),e.jsx("div",{className:"gym-clubs-grid",children:_d.map((i,o)=>e.jsxs(Ne,{to:i.to,className:"gym-club-card",children:[e.jsxs("div",{className:"gym-club-img-wrap",children:[e.jsx("img",{src:i.img,alt:i.name}),e.jsx("div",{className:"gym-club-img-overlay"}),e.jsx("div",{className:"gym-club-img-icon",style:{background:i.bg},children:e.jsx("i",{className:i.icon})}),e.jsx("span",{className:"gym-club-img-tag",children:i.tag})]}),e.jsxs("div",{className:"gym-club-card-body",children:[e.jsx("h3",{children:i.name}),e.jsx("p",{children:i.desc}),e.jsxs("div",{className:"gym-club-card-footer",children:[e.jsxs("span",{className:"gym-club-card-link",style:{color:i.color},children:["Explore Club ",e.jsx("i",{className:"fa-solid fa-arrow-right",style:{fontSize:"0.68rem"}})]}),e.jsx("div",{className:"gym-club-card-arrow",style:{background:i.bg},children:e.jsx("i",{className:"fa-solid fa-chevron-right"})})]})]})]},o))})]}),e.jsx("section",{className:"gym-objectives",children:e.jsxs("div",{className:"gym-objectives-inner",children:[e.jsxs("div",{className:"gym-obj-left",children:[e.jsxs("div",{className:"gym-section-pill",children:[e.jsx("i",{className:"fa-solid fa-bullseye"})," Purpose"]}),e.jsxs("h2",{style:{fontFamily:"Poppins,sans-serif",fontSize:"clamp(1.8rem,4vw,2.4rem)",fontWeight:900,color:"#0a1628",margin:"14px 0 14px"},children:["Objectives of"," ",e.jsx("span",{style:{background:"linear-gradient(135deg,#2563eb,#00d4ff)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},children:"Gymkhana"})]}),e.jsx("p",{style:{color:"#64748b",fontSize:"0.93rem",lineHeight:1.8},children:"Our guiding principles that shape every event, club, and initiative we undertake."})]}),e.jsx("div",{className:"gym-obj-list",children:Zh.map((i,o)=>e.jsxs("div",{className:"gym-obj-item",children:[e.jsx("div",{className:"gym-obj-num",children:o+1}),e.jsx("p",{children:i})]},o))})]})}),e.jsxs("section",{className:"gym-goals",children:[e.jsxs("div",{className:"gym-section-heading",children:[e.jsxs("div",{className:"gym-section-pill",style:{background:"rgba(245,197,24,0.15)",color:"#f5c518",border:"1px solid rgba(245,197,24,0.3)"},children:[e.jsx("i",{className:"fa-solid fa-flag"})," Our Goals"]}),e.jsxs("h2",{style:{color:"#fff",fontFamily:"Poppins,sans-serif",fontSize:"clamp(1.8rem,4vw,2.5rem)",fontWeight:900,margin:"0 0 12px"},children:["What We ",e.jsx("span",{style:{color:"#f5c518"},children:"Strive For"})]})]}),e.jsx("div",{className:"gym-goals-grid",children:eg.map((i,o)=>e.jsxs("div",{className:"gym-goal-card",children:[e.jsx("i",{className:`${i.icon} gym-goal-icon`}),e.jsx("h3",{children:i.title}),e.jsx("p",{children:i.desc})]},o))})]}),e.jsxs("section",{className:"gym-structure",children:[e.jsxs("div",{className:"gym-section-heading",children:[e.jsxs("div",{className:"gym-section-pill",children:[e.jsx("i",{className:"fa-solid fa-sitemap"})," Organisation"]}),e.jsxs("h2",{children:["Structure of ",e.jsx("span",{children:"Gymkhana"})]})]}),e.jsx("div",{className:"gym-table-wrap",children:e.jsxs("table",{className:"gym-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Role"}),e.jsx("th",{children:"Name / Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"President"})}),e.jsx("td",{children:"Mr. Manoj Das (Dean Academic)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Vice Presidents"})}),e.jsx("td",{children:"Mr. Subham Nanda (Boy) & Ms. Bidusmita Mishra (Girl)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Club Secretaries"})}),e.jsx("td",{children:"One boy & one girl student for each of the four clubs"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Student Members"})}),e.jsx("td",{children:"Active participants across all academic programs"})]})]})]})})]})]})}const co=[{key:"all",label:"All Photos",icon:"fa-solid fa-images"},{key:"campus",label:"Campus",icon:"fa-solid fa-building-columns"},{key:"events",label:"Events",icon:"fa-solid fa-calendar-star"},{key:"alumni",label:"Alumni",icon:"fa-solid fa-graduation-cap"},{key:"workshop",label:"Workshop",icon:"fa-solid fa-wrench"},{key:"activities",label:"Activities",icon:"fa-solid fa-person-running"},{key:"tour",label:"Tour",icon:"fa-solid fa-plane-departure"}],tg=[...["campus1","campus2","campus3","campus4","campus5","campus6"].map((i,o)=>({src:`/CTC%20NEW%20REACT%20WEBSITE/images/GALLERY/${i}.jpg`,cat:"campus",alt:`Campus ${o+1}`,caption:"CTC Campus"})),...["event1","event2","event3","event4","event5","event6"].map((i,o)=>({src:`/CTC%20NEW%20REACT%20WEBSITE/images/GALLERY/${i}.jpg`,cat:"events",alt:`Event ${o+1}`,caption:"College Events"})),...["alumni1","alumni2","alumni3","alumni4","alumni5","alumni6"].map((i,o)=>({src:`/CTC%20NEW%20REACT%20WEBSITE/images/GALLERY/${i}.jpg`,cat:"alumni",alt:`Alumni ${o+1}`,caption:"Alumni Meet"})),...["workshop1","workshop2","workshop3","workshop4","workshop5","workshop6"].map((i,o)=>({src:`/CTC%20NEW%20REACT%20WEBSITE/images/GALLERY/${i}.jpg`,cat:"workshop",alt:`Workshop ${o+1}`,caption:"Skill Workshops"})),...["Activity1","Activity2","Activity3","Activity4","Activity5","Activity6"].map((i,o)=>({src:`/CTC%20NEW%20REACT%20WEBSITE/images/GALLERY/${i}.jpg`,cat:"activities",alt:`Activity ${o+1}`,caption:"Student Activities"})),...["tour1","tour2","tour3","tour4","tour5","tour6"].map((i,o)=>({src:`/CTC%20NEW%20REACT%20WEBSITE/images/GALLERY/${i}.jpg`,cat:"tour",alt:`Tour ${o+1}`,caption:"Educational Tours"}))],Ud=["tall","wide","normal","normal","tall","normal","wide","normal","normal","tall","normal","wide"],Gt=tg.map((i,o)=>({...i,size:Ud[o%Ud.length]}));function ng(){var v;const[i,o]=y.useState("all"),[l,d]=y.useState(null),[m,f]=y.useState({}),u=i==="all"?Gt:Gt.filter(x=>x.cat===i),w=y.useCallback(x=>{l!==null&&(x.key==="ArrowRight"&&d(h=>(h+1)%u.length),x.key==="ArrowLeft"&&d(h=>(h-1+u.length)%u.length),x.key==="Escape"&&d(null))},[l,u.length]);y.useEffect(()=>(window.addEventListener("keydown",w),()=>window.removeEventListener("keydown",w)),[w]),y.useEffect(()=>(document.body.style.overflow=l!==null?"hidden":"",()=>{document.body.style.overflow=""}),[l]);const b=l!==null?u[l]:null;return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"gl-hero",children:[e.jsx("div",{className:"gl-hero-glow"}),e.jsxs("div",{className:"gl-hero-inner",children:[e.jsx("span",{className:"section-label",style:{color:"var(--cyan)"},children:"Visual Showcase"}),e.jsxs("h1",{children:["Our ",e.jsx("span",{style:{color:"var(--gold)"},children:"Gallery"})]}),e.jsx("p",{children:"Moments that define the Creative Techno College experience — campus life, events, achievements & beyond."}),e.jsxs("div",{className:"gl-hero-pills",children:[e.jsxs("span",{className:"gl-pill",children:[e.jsx("i",{className:"fa-solid fa-images"})," ",Gt.length," Photos"]}),e.jsxs("span",{className:"gl-pill",children:[e.jsx("i",{className:"fa-solid fa-folder-open"})," ",co.length-1," Categories"]}),e.jsxs("span",{className:"gl-pill",children:[e.jsx("i",{className:"fa-solid fa-calendar-days"})," 2018 – 2024"]})]})]}),e.jsx("div",{className:"gl-hero-wave",children:e.jsx("svg",{viewBox:"0 0 1440 60",preserveAspectRatio:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M0,0 C360,60 1080,0 1440,40 L1440,60 L0,60 Z",fill:"var(--page-bg)"})})})]}),e.jsxs("div",{className:"gl-filters-wrap",children:[e.jsx("div",{className:"gl-filters",children:co.map(x=>e.jsxs("button",{className:`gl-filter-btn${i===x.key?" active":""}`,onClick:()=>{o(x.key),d(null)},children:[e.jsx("i",{className:x.icon}),x.label,i===x.key&&e.jsx("span",{className:"gl-filter-count",children:x.key==="all"?Gt.length:Gt.filter(h=>h.cat===x.key).length})]},x.key))}),e.jsxs("p",{className:"gl-count-label",children:["Showing ",e.jsx("strong",{children:u.length})," of ",e.jsx("strong",{children:Gt.length})," photos"]})]}),e.jsx("div",{className:"gl-grid-wrap",children:e.jsx("div",{className:"gl-grid",children:u.map((x,h)=>e.jsxs("div",{className:`gl-item gl-item-${x.size}`,onClick:()=>d(h),style:{animationDelay:`${h%12*.04}s`},children:[e.jsx("img",{src:x.src,alt:x.alt,loading:"lazy",onLoad:()=>f(T=>({...T,[x.src]:!0})),onError:T=>{T.target.closest(".gl-item").style.display="none"}}),e.jsx("div",{className:"gl-item-overlay",children:e.jsxs("div",{className:"gl-item-overlay-inner",children:[e.jsx("i",{className:"fa-solid fa-magnifying-glass-plus"}),e.jsx("span",{children:x.caption})]})})]},`${x.cat}-${h}`))},i)}),b&&e.jsxs("div",{className:"gl-lightbox",onClick:x=>{x.target===x.currentTarget&&d(null)},role:"dialog","aria-modal":"true",children:[e.jsx("button",{className:"gl-lb-close",onClick:()=>d(null),"aria-label":"Close",children:e.jsx("i",{className:"fa-solid fa-xmark"})}),e.jsx("button",{className:"gl-lb-nav gl-lb-prev",onClick:()=>d(x=>(x-1+u.length)%u.length),"aria-label":"Previous",children:e.jsx("i",{className:"fa-solid fa-chevron-left"})}),e.jsxs("div",{className:"gl-lb-panel",children:[e.jsx("img",{className:"gl-lb-img",src:b.src,alt:b.alt},b.src),e.jsxs("div",{className:"gl-lb-caption",children:[e.jsx("span",{className:"gl-lb-cat",children:(v=co.find(x=>x.key===b.cat))==null?void 0:v.label}),e.jsxs("span",{className:"gl-lb-count",children:[l+1," / ",u.length]})]}),e.jsx("div",{className:"gl-lb-thumbs",children:u.map((x,h)=>e.jsx("div",{className:`gl-lb-thumb${l===h?" active":""}`,onClick:()=>d(h),children:e.jsx("img",{src:x.src,alt:"",loading:"lazy"})},h))})]}),e.jsx("button",{className:"gl-lb-nav gl-lb-next",onClick:()=>d(x=>(x+1)%u.length),"aria-label":"Next",children:e.jsx("i",{className:"fa-solid fa-chevron-right"})})]})]})}const rg=[{icon:"fa-solid fa-phone-volume",label:"Admissions Helpline",val:"+91 9778427170",href:"tel:+919778427170",color:"#00d4ff"},{icon:"fa-solid fa-envelope-open-text",label:"Principal Email",val:"principal.creativecollege@gmail.com",href:"mailto:principal.creativecollege@gmail.com",color:"#f5c518"},{icon:"fa-solid fa-location-dot",label:"Campus Address",val:"Baluakata, Saradhapur, Angul – 759143",href:"https://maps.google.com/?q=Creative+Techno+College+Angul",color:"#7b61ff"},{icon:"fa-brands fa-whatsapp",label:"WhatsApp",val:"+91 9668844571",href:"https://wa.me/919668844571",color:"#25d366"}],go=[{key:"academic",icon:"fa-solid fa-book-open",title:"Academic & Student Support",color:"#0d7ff5",cards:[{title:"Academic Support",icon:"fa-solid fa-chalkboard-user",people:[{name:"Mr. Bhabani Sankar Sahoo",phone:["+91 9668844571"],email:"bhabaniwipro89@gmail.com"}]},{title:"Examination & Certificates",icon:"fa-solid fa-file-certificate",people:[{name:"Mr. Krishnasis Mishra",phone:["+91 8249090003"],email:"principal.creativecollege@gmail.com"}]},{title:"Counselling & Wellness",icon:"fa-solid fa-heart-pulse",people:[{name:"Respective Batch Mentor"}]}]},{key:"career",icon:"fa-solid fa-briefcase",title:"Training & Career Development",color:"#f5c518",cards:[{title:"Training & Placement",icon:"fa-solid fa-briefcase",people:[{name:"Mr. Bhabani S. Sahoo",phone:["+91 9668844571"],email:"bhabaniwipro89@gmail.com"},{name:"Mr. Subhrajyoti Behera",phone:["+91 9861071840"],email:"subhyrajyoticafpl@gmail.com"}]},{title:"DISHA",icon:"fa-solid fa-hands-holding-child",people:[{name:"Mr. Subhrajyoti Behera",phone:["+91 9861071840"],email:"subhyrajyoticafpl@gmail.com"},{name:"Ms. Neha Solanki",phone:[""],email:"nehasolanki1411@gmail.com"}]},{title:"Technocrat Club",icon:"fa-solid fa-microchip",people:[{name:"Mr. Bhabani S. Sahoo",phone:["+91 9668844571"]},{name:"Mr. Swastik R. Sahoo",phone:["+91 6372877833"],email:"sahooswastik406@gmail.com"}]},{title:"Alumni",icon:"fa-solid fa-graduation-cap",people:[{name:"Mr. Krishnasis Mishra",phone:["+91 8249090003"],email:"principal.creativecollege@gmail.com"}]}]},{key:"hostel",icon:"fa-solid fa-house-user",title:"Hostel & Transport",color:"#7b61ff",cards:[{title:"Transport Services",icon:"fa-solid fa-bus-simple",people:[{name:"Mr. Satya S. S. Dehury",phone:["+91 9439137384"],email:"sssdehury89@gmail.com"},{name:"Mr. Sarat C. Sahu",phone:["+91 9853167581"],email:"saratmuna243@gmail.com"}]},{title:"Hostel (Boys)",icon:"fa-solid fa-bed",people:[{name:"Mr. Satya S. S. Dehury",phone:["+91 9439137384"]},{name:"Mr. Raghunath Behera",phone:["+91 8984949923"]}]},{title:"Hostel (Girls)",icon:"fa-solid fa-bed",people:[{name:"Ms. Nibedita Patra",phone:["+91 7606878160"],email:"nibedita.patra2903@gmail.com"},{name:"Ms. Arghyarupa Behera",phone:["+91 9827465376"],email:"arghyarupabehera3@gmail.com"}]}]},{key:"admin",icon:"fa-solid fa-landmark",title:"Administration & Finance",color:"#ff6b6b",cards:[{title:"General Administration",icon:"fa-solid fa-building",people:[{name:"Mr. Manoj Kumar Das",phone:["+91 9338233303","+91 7008574320"],email:"dasmanojp@gmail.com"}]},{title:"Scholarship & Financial Aid",icon:"fa-solid fa-hand-holding-dollar",people:[{name:"Mr. Subhrajyoti Behera",phone:["+91 9861071840"],email:"subhyrajyoticafpl@gmail.com"}]},{title:"Fees & Payments",icon:"fa-solid fa-receipt",people:[{name:"Mr. Abhisek Satpathy",phone:["+91 8260077588"],email:"abhisheksathpathy020@gmail.com"}]},{title:"Admissions Front Office",icon:"fa-solid fa-door-open",people:[{name:"Front Office",phone:["+91 9778427170","+91 9668284222","+91 9668332555"]}]}]},{key:"services",icon:"fa-solid fa-building-columns",title:"Other Services",color:"#25d366",cards:[{title:"Library",icon:"fa-solid fa-book",people:[{name:"Ms. Monika Sahu",phone:["+91 9668284222"],email:"monika28sahu@gmail.com"}]},{title:"Canteen",icon:"fa-solid fa-utensils",people:[{name:"Mr. Sarat C. Sahu",phone:["+91 9853167581"],email:"saratmuna243@gmail.com"},{name:"Mr. Ranjan Das",phone:["+91 8917466271"]}]},{title:"CSR & Sports",icon:"fa-solid fa-trophy",people:[{name:"Mr. Satya S. S. Dehury",phone:["+91 9439137384"],email:"sssdehury89@gmail.com"}]}]}];function ig({name:i,phone:o,email:l}){return e.jsxs("div",{className:"ct-person",children:[i&&e.jsxs("p",{children:[e.jsx("i",{className:"fa-solid fa-user"}),e.jsx("strong",{children:i})]}),o==null?void 0:o.map((d,m)=>e.jsxs("p",{children:[e.jsx("i",{className:"fa-solid fa-phone"}),e.jsx("a",{href:`tel:${d.replace(/\s/g,"")}`,children:d})]},m)),l&&e.jsxs("p",{children:[e.jsx("i",{className:"fa-solid fa-envelope"}),e.jsx("a",{href:`mailto:${l}`,style:{wordBreak:"break-all"},children:l})]})]})}function sg({title:i,icon:o,people:l}){return e.jsxs("div",{className:"ct-card",children:[e.jsxs("div",{className:"ct-card-title",children:[e.jsx("i",{className:o}),i]}),l.map((d,m)=>e.jsx(ig,{...d},m))]})}function og(){const[i,o]=y.useState({name:"",phone:"",email:"",dept:"",msg:""}),[l,d]=y.useState(!1),m=(u,w)=>o(b=>({...b,[u]:w}));function f(u){u.preventDefault();const w=`*CTC Enquiry*
Name: ${i.name}
Phone: ${i.phone}
Email: ${i.email||"—"}
Dept: ${i.dept||"—"}
Message: ${i.msg}`;window.open(`https://wa.me/919668844571?text=${encodeURIComponent(w)}`,"_blank"),d(!0)}return l?e.jsxs("div",{className:"ct-form-success",children:[e.jsx("i",{className:"fa-solid fa-circle-check"}),e.jsx("h3",{children:"Message Sent!"}),e.jsx("p",{children:"Your enquiry has been forwarded via WhatsApp. We'll get back to you shortly."}),e.jsx("button",{className:"btn-primary",onClick:()=>d(!1),children:"Send Another"})]}):e.jsxs("form",{className:"ct-form",onSubmit:f,children:[e.jsxs("div",{className:"ct-form-row",children:[e.jsxs("div",{className:"ct-form-field",children:[e.jsx("label",{children:"Full Name *"}),e.jsx("input",{required:!0,placeholder:"Your name",value:i.name,onChange:u=>m("name",u.target.value)})]}),e.jsxs("div",{className:"ct-form-field",children:[e.jsx("label",{children:"Mobile Number *"}),e.jsx("input",{required:!0,type:"tel",placeholder:"+91 XXXXX XXXXX",value:i.phone,onChange:u=>m("phone",u.target.value)})]})]}),e.jsxs("div",{className:"ct-form-row",children:[e.jsxs("div",{className:"ct-form-field",children:[e.jsx("label",{children:"Email Address"}),e.jsx("input",{type:"email",placeholder:"Optional",value:i.email,onChange:u=>m("email",u.target.value)})]}),e.jsxs("div",{className:"ct-form-field",children:[e.jsx("label",{children:"Department"}),e.jsxs("select",{value:i.dept,onChange:u=>m("dept",u.target.value),children:[e.jsx("option",{value:"",children:"Select Department"}),go.map(u=>e.jsx("option",{children:u.title},u.key)),e.jsx("option",{children:"Admissions"}),e.jsx("option",{children:"Other"})]})]})]}),e.jsxs("div",{className:"ct-form-field",children:[e.jsx("label",{children:"Your Message *"}),e.jsx("textarea",{required:!0,rows:4,placeholder:"Write your query or message here…",value:i.msg,onChange:u=>m("msg",u.target.value)})]}),e.jsxs("button",{type:"submit",className:"ct-form-submit",children:[e.jsx("i",{className:"fa-brands fa-whatsapp"})," Send via WhatsApp"]})]})}function lg(){const[i,o]=y.useState(""),[l,d]=y.useState("all"),m=go.filter(f=>l==="all"||f.key===l).map(f=>({...f,cards:f.cards.filter(u=>{if(!i.trim())return!0;const w=i.toLowerCase();return u.title.toLowerCase().includes(w)||u.people.some(b=>{var v,x,h;return((v=b.name)==null?void 0:v.toLowerCase().includes(w))||((x=b.phone)==null?void 0:x.some(T=>T.includes(w)))||((h=b.email)==null?void 0:h.toLowerCase().includes(w))})})})).filter(f=>f.cards.length>0);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"ct-hero",children:[e.jsx("div",{className:"ct-hero-glow"}),e.jsxs("div",{className:"ct-hero-inner",children:[e.jsx("span",{className:"section-label",style:{color:"var(--cyan)"},children:"Reach Out"}),e.jsxs("h1",{children:["Helpline ",e.jsx("span",{style:{color:"var(--gold)"},children:"Contacts"})]}),e.jsx("p",{children:"Find the right person for your query — our team is here to help."}),e.jsxs("div",{className:"ct-search-wrap",children:[e.jsx("i",{className:"fa-solid fa-magnifying-glass"}),e.jsx("input",{className:"ct-search",type:"text",placeholder:"Search by name, department, phone…",value:i,onChange:f=>o(f.target.value)}),i&&e.jsx("button",{className:"ct-search-clear",onClick:()=>o(""),children:e.jsx("i",{className:"fa-solid fa-xmark"})})]})]}),e.jsx("div",{className:"ct-hero-wave",children:e.jsx("svg",{viewBox:"0 0 1440 60",preserveAspectRatio:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M0,0 C360,60 1080,0 1440,40 L1440,60 L0,60 Z",fill:"var(--page-bg)"})})})]}),e.jsx("div",{className:"ct-quick-wrap",children:e.jsx("div",{className:"ct-quick-grid",children:rg.map((f,u)=>e.jsxs("a",{href:f.href,className:"ct-quick-card",target:f.href.startsWith("http")?"_blank":void 0,rel:"noreferrer",children:[e.jsx("div",{className:"ct-quick-icon",style:{background:`${f.color}18`,border:`1.5px solid ${f.color}44`},children:e.jsx("i",{className:f.icon,style:{color:f.color}})}),e.jsxs("div",{children:[e.jsx("p",{className:"ct-quick-label",children:f.label}),e.jsx("p",{className:"ct-quick-val",children:f.val})]}),e.jsx("i",{className:"fa-solid fa-arrow-up-right-from-square ct-quick-ext"})]},u))})}),e.jsx("div",{className:"ct-tabs-wrap",children:e.jsxs("div",{className:"ct-tabs",children:[e.jsxs("button",{className:`ct-tab${l==="all"?" active":""}`,onClick:()=>d("all"),children:[e.jsx("i",{className:"fa-solid fa-grip"})," All Departments"]}),go.map(f=>e.jsxs("button",{className:`ct-tab${l===f.key?" active":""}`,onClick:()=>d(f.key),children:[e.jsx("i",{className:f.icon})," ",f.title.split(" ")[0]]},f.key))]})}),e.jsx("div",{className:"ct-body",children:m.length===0?e.jsxs("div",{className:"ct-no-results",children:[e.jsx("i",{className:"fa-solid fa-magnifying-glass"}),e.jsxs("p",{children:['No contacts found for "',e.jsx("strong",{children:i}),'"']}),e.jsx("button",{className:"btn-outline",onClick:()=>o(""),children:"Clear Search"})]}):m.map(f=>e.jsxs("div",{className:"ct-dept",children:[e.jsxs("div",{className:"ct-dept-header",style:{"--dc":f.color},children:[e.jsx("div",{className:"ct-dept-icon",children:e.jsx("i",{className:f.icon})}),e.jsx("h2",{children:f.title}),e.jsxs("span",{className:"ct-dept-count",children:[f.cards.length," contact",f.cards.length!==1?"s":""]})]}),e.jsx("div",{className:"ct-cards-grid",children:f.cards.map((u,w)=>e.jsx(sg,{...u},w))})]},f.key))}),e.jsx("section",{className:"ct-map-section",children:e.jsxs("div",{className:"ct-map-inner",children:[e.jsxs("div",{className:"ct-map-box",children:[e.jsxs("div",{className:"ct-map-header",children:[e.jsx("i",{className:"fa-solid fa-location-dot"}),e.jsxs("div",{children:[e.jsx("h3",{children:"Find Us"}),e.jsx("p",{children:"Creative Techno College, Angul"})]})]}),e.jsx("div",{className:"ct-map-embed",children:e.jsx("iframe",{title:"CTC Campus Map",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3731.4!2d85.0964!3d20.8400!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19f3c6f2bd7d01%3A0x9b7694f44f8e2b1c!2sCreative+Techno+College!5e0!3m2!1sen!2sin!4v1",allowFullScreen:"",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade"})}),e.jsxs("div",{className:"ct-address-list",children:[e.jsxs("div",{className:"ct-addr-row",children:[e.jsx("i",{className:"fa-solid fa-building-columns"}),e.jsxs("span",{children:[e.jsx("strong",{children:"Campus:"})," Baluakata, Saradhapur, Angul, Odisha – 759143"]})]}),e.jsxs("div",{className:"ct-addr-row",children:[e.jsx("i",{className:"fa-solid fa-city"}),e.jsxs("span",{children:[e.jsx("strong",{children:"City Office:"})," Tamrit Colony, Angul"]})]}),e.jsxs("div",{className:"ct-addr-row",children:[e.jsx("i",{className:"fa-solid fa-clock"}),e.jsxs("span",{children:[e.jsx("strong",{children:"Office Hours:"})," Mon – Sat, 9:00 AM – 5:00 PM"]})]})]})]}),e.jsxs("div",{className:"ct-form-box",children:[e.jsxs("div",{className:"ct-form-header",children:[e.jsx("i",{className:"fa-brands fa-whatsapp"}),e.jsxs("div",{children:[e.jsx("h3",{children:"Send an Enquiry"}),e.jsx("p",{children:"We'll respond via WhatsApp within 24 hours"})]})]}),e.jsx(og,{})]})]})})]})}function cg(){y.useEffect(()=>{const i=document.querySelectorAll(".rv, .rv-l, .rv-r"),o=new IntersectionObserver(l=>l.forEach(d=>{d.isIntersecting&&d.target.classList.add("visible")}),{threshold:.08});return i.forEach(l=>o.observe(l)),()=>o.disconnect()},[])}const wp={resolution:[{date:"04-10-2024",pdf:"/CTC NEW REACT WEBSITE/images/ICC/1.pdf",label:"ICC Resolution — October 2024"}],committee:[{date:"01-05-2025",pdf:"/CTC NEW REACT WEBSITE/images/ICC/8.pdf",label:"Committee Members — May 2025"},{date:"18-03-2025",pdf:"/CTC NEW REACT WEBSITE/images/ICC/7.pdf",label:"Committee Members — March 2025"},{date:"05-12-2024",pdf:"/CTC NEW REACT WEBSITE/images/ICC/6.pdf",label:"Committee Members — December 2024"},{date:"05-10-2024",pdf:"/CTC NEW REACT WEBSITE/images/ICC/2.pdf",label:"Committee Members — October 2024"}],events:[{date:"05-12-2024",pdf:"/CTC NEW REACT WEBSITE/images/ICC/4.pdf",label:"Awareness Program — December 2024"},{date:"25-11-2024",pdf:"/CTC NEW REACT WEBSITE/images/ICC/5.pdf",label:"Gender Sensitization — November 2024"}],vision:[{date:"05-10-2024",pdf:"/CTC NEW REACT WEBSITE/images/ICC/3.pdf",label:"ICC Vision Document — October 2024"}]},dg=[{icon:"fa-hand",text:"Physical contact and advances"},{icon:"fa-comment-slash",text:"Sexually colored remarks"},{icon:"fa-user-lock",text:"Request for sexual favors"},{icon:"fa-eye-slash",text:"Showing pornography"},{icon:"fa-triangle-exclamation",text:"Other unwelcome sexual conduct"}],pg=["Ensure safe work and academic environment for staff and students.","Deliver impartial justice in sexual harassment cases.","Promote gender equity policies across the institution.","Organize awareness and sensitization programs.","Display institutional policies publicly.","Publish ICC members list and contact details.","Develop transparent complaint mechanism.","Conduct inquiries based on principles of natural justice.","Recommend corrective and preventive action.","Monitor implementation and follow-ups.","Provide emotional and psychological support to complainants."],mg=[{id:"about",label:"About",icon:"fa-circle-info"},{id:"resolution",label:"Resolution",icon:"fa-gavel"},{id:"committee",label:"Committee",icon:"fa-users"},{id:"events",label:"Events",icon:"fa-calendar-days"},{id:"vision",label:"Vision",icon:"fa-eye"}];function fg({onClose:i}){const o=y.useRef(null);y.useEffect(()=>{const f=u=>{u.key==="Escape"&&i()};return document.addEventListener("keydown",f),document.body.style.overflow="hidden",()=>{document.removeEventListener("keydown",f),document.body.style.overflow=""}},[i]);const l=f=>{f.target===o.current&&i()},d=()=>{const f=document.createElement("a");f.href="/CTC NEW REACT WEBSITE/images/ICC/form.pdf",f.download="ICC_Complaint_Form.pdf",f.click()};return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
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
  `}),e.jsx("div",{className:"icc-backdrop",ref:o,onClick:l,children:e.jsxs("div",{className:"icc-modal",role:"dialog","aria-modal":"true","aria-labelledby":"modal-title",children:[e.jsxs("div",{className:"icc-modal-header",children:[e.jsx("button",{className:"icc-modal-close",onClick:i,"aria-label":"Close",children:e.jsx("i",{className:"fa-solid fa-xmark"})}),e.jsx("div",{className:"icc-modal-title",id:"modal-title",children:"Submit Your Complaint"}),e.jsx("div",{className:"icc-modal-sub",children:"Internal Complaints Committee · CTC"})]}),e.jsx("div",{className:"icc-modal-body",children:e.jsxs("div",{className:"icc-modal-options",children:[e.jsxs("button",{className:"icc-modal-opt primary",onClick:()=>window.open("https://docs.google.com/forms/d/e/1FAIpQLSeXE1THmrO8-fPHCyvU1L2dzc45Na9Qy6vVijfNHzWxUhJRrQ/viewform","_blank"),children:[e.jsx("div",{className:"icc-modal-opt-icon",children:e.jsx("i",{className:"fa-solid fa-laptop"})}),e.jsxs("div",{children:[e.jsx("div",{className:"icc-modal-opt-label",children:"Apply Online"}),e.jsx("div",{className:"icc-modal-opt-sub",children:"Google Form"})]})]}),e.jsxs("button",{className:"icc-modal-opt secondary",onClick:d,children:[e.jsx("div",{className:"icc-modal-opt-icon",children:e.jsx("i",{className:"fa-solid fa-file-arrow-down"})}),e.jsxs("div",{children:[e.jsx("div",{className:"icc-modal-opt-label",children:"Download Form"}),e.jsx("div",{className:"icc-modal-opt-sub",children:"PDF Format"})]})]})]})})]})})]})}function ug({section:i}){const o=wp[i]||[],[l,d]=y.useState(null);return o.length===0?e.jsxs("div",{style:{textAlign:"center",padding:"40px 20px",color:"#94a3b8"},children:[e.jsx("i",{className:"fa-solid fa-folder-open",style:{fontSize:"2rem",marginBottom:12,display:"block",opacity:.4}}),e.jsx("p",{style:{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"0.88rem",fontWeight:600,margin:0},children:"No documents available yet."})]}):e.jsx("div",{style:{overflowX:"auto"},children:e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontFamily:"'Plus Jakarta Sans',sans-serif"},children:[e.jsx("thead",{children:e.jsx("tr",{children:["#","Date","Document","Action"].map((m,f)=>e.jsx("th",{style:{padding:"14px 18px",textAlign:"left",background:"linear-gradient(135deg,#0c2340,#1a3a6b)",color:"#ffcc00",fontSize:"0.75rem",fontWeight:800,letterSpacing:"0.8px",textTransform:"uppercase",borderBottom:"2px solid rgba(255,204,0,0.2)",whiteSpace:"nowrap"},children:m},f))})}),e.jsx("tbody",{children:o.map((m,f)=>e.jsxs("tr",{onMouseEnter:()=>d(f),onMouseLeave:()=>d(null),style:{background:l===f?"#f0f6ff":f%2===0?"#fff":"#f8fafc",transition:"background 0.2s"},children:[e.jsx("td",{style:{padding:"14px 18px",color:"#94a3b8",fontWeight:700,fontSize:"0.82rem",width:48},children:String(f+1).padStart(2,"0")}),e.jsxs("td",{style:{padding:"14px 18px",fontSize:"0.85rem",fontWeight:600,color:"#4a6080",whiteSpace:"nowrap"},children:[e.jsx("i",{className:"fa-regular fa-calendar",style:{marginRight:8,color:"#0c2340",opacity:.5}}),m.date]}),e.jsx("td",{style:{padding:"14px 18px",fontSize:"0.85rem",fontWeight:600,color:"#0c2340"},children:m.label}),e.jsx("td",{style:{padding:"14px 18px"},children:e.jsxs("a",{href:m.pdf,target:"_blank",rel:"noreferrer",style:{display:"inline-flex",alignItems:"center",gap:6,background:"linear-gradient(135deg,#0c2340,#1a3a6b)",color:"#ffcc00",textDecoration:"none",padding:"7px 14px",borderRadius:8,fontSize:"0.72rem",fontWeight:800,letterSpacing:"0.4px",textTransform:"uppercase",transition:"transform 0.2s, box-shadow 0.2s",boxShadow:"0 4px 12px rgba(12,35,64,0.2)",whiteSpace:"nowrap"},onMouseEnter:u=>{u.currentTarget.style.transform="translateY(-2px)",u.currentTarget.style.boxShadow="0 8px 20px rgba(12,35,64,0.35)"},onMouseLeave:u=>{u.currentTarget.style.transform="none",u.currentTarget.style.boxShadow="0 4px 12px rgba(12,35,64,0.2)"},children:[e.jsx("i",{className:"fa-solid fa-file-pdf"})," View PDF"]})})]},f))})]})})}function hg(){cg();const[i,o]=y.useState("about"),[l,d]=y.useState(!1),[m,f]=y.useState(!1),u=y.useRef(null);y.useEffect(()=>{setTimeout(()=>f(!0),60)},[]);const w=h=>{o(h),setTimeout(()=>{u.current&&u.current.scrollIntoView({behavior:"smooth",block:"start"})},80)},b=`
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
  `,v={about:{title:"About the ICC",sub:"Background, mandate & scope · Creative Techno College"},resolution:{title:"ICC Resolutions",sub:"Formal resolutions and policy decisions"},committee:{title:"Committee Members",sub:"Constituted as per POSH Act 2013"},events:{title:"Events & Programmes",sub:"Awareness, sensitization and outreach activities"},vision:{title:"ICC Vision",sub:"Mission, objectives and institutional commitment"}},x=h=>{const T=wp[h]||[],P=[...new Set(T.map(K=>K.date.split("-")[2]))];return e.jsxs("div",{className:"icc-doc-stats",children:[e.jsxs("div",{className:"icc-doc-stat",children:[e.jsx("div",{className:"icc-doc-stat-val",children:T.length}),e.jsx("div",{className:"icc-doc-stat-lbl",children:"Documents"})]}),e.jsxs("div",{className:"icc-doc-stat",children:[e.jsx("div",{className:"icc-doc-stat-val",children:P.length}),e.jsx("div",{className:"icc-doc-stat-lbl",children:"Academic Years"})]}),e.jsxs("div",{className:"icc-doc-stat",children:[e.jsx("div",{className:"icc-doc-stat-val",children:"PDF"}),e.jsx("div",{className:"icc-doc-stat-lbl",children:"Format"})]})]})};return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:b}),l&&e.jsx(fg,{onClose:()=>d(!1)}),e.jsxs("div",{className:"icc-page",children:[e.jsx("div",{className:"icc-hero",children:e.jsxs("div",{className:"icc-hero-content",children:[e.jsxs("div",{className:"icc-hero-left",children:[e.jsxs("div",{className:"icc-hero-badge",children:[e.jsx("i",{className:"fa-solid fa-shield-halved"})," ICC · POSH Act 2013"]}),e.jsxs("h1",{className:"icc-hero-title",children:["Internal",e.jsx("br",{}),e.jsx("em",{children:"Complaints"}),e.jsx("br",{}),"Committee"]}),e.jsx("p",{className:"icc-hero-sub",children:"Committed to maintaining a safe, respectful and equitable working and academic environment for all women at Creative Techno College."}),e.jsx("div",{className:"icc-hero-pills",children:[{icon:"fa-scale-balanced",text:"Zero Tolerance Policy"},{icon:"fa-lock",text:"Confidential Process"},{icon:"fa-gavel",text:"Natural Justice"},{icon:"fa-building-columns",text:"UGC Mandated"}].map((h,T)=>e.jsxs("span",{className:"icc-hero-pill",children:[e.jsx("i",{className:`fa-solid ${h.icon}`,style:{color:"#ffcc00",fontSize:"0.65rem"}}),h.text]},T))})]}),e.jsx("div",{className:"icc-hero-right",children:e.jsx("div",{className:"icc-hero-logo",children:e.jsx("img",{src:"/CTC NEW REACT WEBSITE/images/ICC/LOGO FINAL.png",alt:"Creative Techno College",onError:h=>{h.target.parentElement.innerHTML='<span style="font-size:2.5rem">🏫</span>'}})})})]})}),e.jsx("div",{className:"icc-wave",children:e.jsx("svg",{viewBox:"0 0 1440 56",preserveAspectRatio:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M0,38 C360,56 1080,0 1440,38 L1440,56 L0,56 Z",fill:"#f0f4f8"})})}),e.jsx("div",{className:"icc-complaint-strip rv",children:e.jsxs("button",{className:"icc-complaint-btn",onClick:()=>d(!0),children:[e.jsx("div",{className:"icc-complaint-btn-shine"}),e.jsxs("div",{className:"icc-complaint-btn-left",children:[e.jsx("div",{className:"icc-complaint-icon",children:e.jsx("i",{className:"fa-solid fa-pen-to-square"})}),e.jsxs("div",{children:[e.jsx("div",{className:"icc-complaint-title",children:"Write Your Complaint Here"}),e.jsx("div",{className:"icc-complaint-sub",children:"Confidential · Secure · Protected — File online or download form"})]})]}),e.jsx("div",{className:"icc-complaint-arrow",children:e.jsx("i",{className:"fa-solid fa-arrow-right"})})]})}),e.jsxs("div",{className:"icc-main",children:[e.jsx("div",{className:"icc-tab-bar rv",style:{transitionDelay:"0.1s"},children:mg.map(h=>e.jsxs("button",{className:`icc-tab${i===h.id?" active":""}`,onClick:()=>w(h.id),children:[e.jsx("i",{className:`fa-solid ${h.icon}`}),h.label]},h.id))}),e.jsxs("div",{className:"icc-content-card rv",style:{transitionDelay:"0.15s"},ref:u,children:[e.jsxs("div",{className:"icc-content-header",children:[e.jsx("div",{className:"icc-content-header-title",children:v[i].title}),e.jsx("div",{className:"icc-content-header-sub",children:v[i].sub})]}),e.jsxs("div",{className:"icc-content-body",children:[i==="about"&&e.jsxs("div",{style:{animation:"iccTabIn 0.4s ease both"},children:[e.jsxs("div",{className:"icc-about-grid",children:[e.jsxs("div",{className:"icc-about-text",children:[e.jsxs("p",{children:["As per the guidelines of the ",e.jsx("strong",{children:"Supreme Court of India"}),", UGC, ",e.jsx("strong",{children:"Section 4 SHW Act 2013"})," and AICTE Regulations, 2016 vide No. F. AICTE/WH/2016/01 dated 10th June, 2016 — ",e.jsx("em",{children:"Gender Sensitization, Prevention and Prohibition of Sexual Harassment of Women Employees and Students and Redressal of Grievances in Technical Institutions"})," — ",e.jsx("strong",{children:"Creative Techno College"})," has constituted an Internal Complaints Committee (ICC)."]}),e.jsxs("p",{style:{marginTop:16},children:["The ICC of Creative Techno College facilitates ",e.jsx("strong",{children:"safe and secure educational and working environments"})," for both female students and staff. The Institute follows a strict policy of ",e.jsx("strong",{children:"zero tolerance"})," towards human rights violations. The Committee addresses issues regarding prevention, prohibition and redressal of sexual harassment of women at the workplace."]})]}),e.jsx("div",{className:"icc-legal-badges",children:[{icon:"fa-building-columns",label:"Supreme Court Guidelines",sub:"Vishakha Guidelines & subsequent orders"},{icon:"fa-scroll",label:"POSH Act 2013",sub:"Sexual Harassment of Women at Workplace Act"},{icon:"fa-landmark",label:"AICTE Regulations 2016",sub:"No. F.AICTE/WH/2016/01 — June 2016"},{icon:"fa-book-open",label:"UGC Policy Framework",sub:"Gender sensitization mandate for HEIs"}].map((h,T)=>e.jsxs("div",{className:"icc-legal-badge",children:[e.jsx("div",{className:"icc-legal-badge-icon",children:e.jsx("i",{className:`fa-solid ${h.icon}`})}),e.jsxs("div",{children:[e.jsx("div",{className:"icc-legal-badge-text",children:h.label}),e.jsx("div",{className:"icc-legal-badge-sub",children:h.sub})]})]},T))})]}),e.jsxs("div",{style:{background:"#fef2f2",border:"1.5px solid #fecaca",borderRadius:18,padding:28,marginBottom:28},children:[e.jsxs("div",{className:"icc-harassment-header",children:[e.jsx("div",{className:"icc-harassment-icon-wrap",children:e.jsx("i",{className:"fa-solid fa-triangle-exclamation"})}),e.jsxs("div",{children:[e.jsx("div",{className:"icc-harassment-title",children:"What Constitutes Sexual Harassment?"}),e.jsx("div",{className:"icc-harassment-sub",children:"As defined under Sexual Harassment of Women at Workplace Act, 2013"})]})]}),e.jsx("p",{className:"icc-harassment-text",children:"Any inappropriate advances towards a person in a sexual manner that could directly or indirectly affect their job, salary, or career constitute sexual harassment. The Act provides a broad and inclusive definition to ensure comprehensive protection."}),e.jsx("div",{className:"icc-harassment-list",children:dg.map((h,T)=>e.jsxs("div",{className:"icc-harassment-item",children:[e.jsx("div",{className:"icc-harassment-item-icon",children:e.jsx("i",{className:`fa-solid ${h.icon}`})}),e.jsx("div",{className:"icc-harassment-item-text",children:h.text})]},T))})]}),e.jsxs("div",{className:"icc-responsibilities-section",children:[e.jsxs("div",{className:"icc-resp-header",children:[e.jsx("div",{className:"icc-resp-icon-wrap",children:e.jsx("i",{className:"fa-solid fa-sitemap"})}),e.jsxs("div",{children:[e.jsx("div",{className:"icc-resp-title",children:"Roles & Responsibilities of ICC"}),e.jsx("div",{className:"icc-resp-sub",children:"11 core mandates of the Internal Complaints Committee"})]})]}),e.jsx("div",{className:"icc-resp-grid",children:pg.map((h,T)=>e.jsxs("div",{className:"icc-resp-item",children:[e.jsx("div",{className:"icc-resp-num",children:String(T+1).padStart(2,"0")}),e.jsx("div",{className:"icc-resp-text",children:h})]},T))})]}),e.jsxs("div",{className:"icc-mechanism",children:[e.jsxs("div",{className:"icc-mechanism-header",children:[e.jsx("i",{className:"fa-solid fa-diagram-project"}),e.jsx("span",{children:"ICC Complaint & Redressal Mechanism"})]}),e.jsx("img",{src:"/CTC NEW REACT WEBSITE/images/ICC/mechanism.png",alt:"ICC Complaint Mechanism",onError:h=>{h.target.parentElement.style.cssText+="background:#f8fafc;min-height:120px;display:flex;align-items:center;justify-content:center;",h.target.outerHTML='<div style="padding:40px;text-align:center;color:#94a3b8;font-family:Plus Jakarta Sans,sans-serif;font-size:0.85rem;">Mechanism diagram will appear here</div>'}})]})]}),["resolution","committee","events","vision"].includes(i)&&e.jsxs("div",{style:{animation:"iccTabIn 0.4s ease both"},children:[x(i),e.jsx("div",{className:"icc-table-wrap",children:e.jsx(ug,{section:i})})]})]})]}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(260px,1fr))",gap:18,marginTop:28},children:[{icon:"fa-envelope",color:"#0c2340",bg:"linear-gradient(135deg,#0c2340,#1a3a6b)",title:"Contact ICC",sub:"icc@creativecollege.in",desc:"Reach out to the committee directly for guidance before filing a formal complaint."},{icon:"fa-clock",color:"#d97706",bg:"linear-gradient(135deg,#78350f,#d97706)",title:"Filing Window",sub:"90 Days from Incident",desc:"Complaints must be filed within 90 days of the last incident as per POSH Act provisions."},{icon:"fa-shield-halved",color:"#059669",bg:"linear-gradient(135deg,#064e3b,#059669)",title:"Confidentiality",sub:"100% Protected",desc:"All complaints, proceedings and outcomes are treated with strict confidentiality."}].map((h,T)=>e.jsxs("div",{className:"rv",style:{background:"#fff",borderRadius:18,padding:"24px",border:"1px solid rgba(10,22,40,0.07)",boxShadow:"0 4px 20px rgba(10,22,40,0.07)",transitionDelay:`${T*.08}s`},children:[e.jsx("div",{style:{width:50,height:50,borderRadius:14,background:h.bg,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.1rem",color:"#fff",marginBottom:16},children:e.jsx("i",{className:`fa-solid ${h.icon}`})}),e.jsx("div",{style:{fontFamily:"'Plus Jakarta Sans',sans-serif",fontWeight:900,fontSize:"0.95rem",color:"#0c2340",marginBottom:3},children:h.title}),e.jsx("div",{style:{fontSize:"0.75rem",fontWeight:700,color:h.color,marginBottom:10},children:h.sub}),e.jsx("div",{style:{fontSize:"0.8rem",color:"#4a6080",lineHeight:1.7,fontWeight:500},children:h.desc})]},T))})]})]})]})}function gg(){y.useEffect(()=>{const i=document.querySelectorAll(".grc-rv, .grc-rv-l, .grc-rv-r"),o=new IntersectionObserver(l=>l.forEach(d=>{d.isIntersecting&&d.target.classList.add("visible")}),{threshold:.08});return i.forEach(l=>o.observe(l)),()=>o.disconnect()},[])}const xg=[{no:1,name:"Mr. Manoj Kumar Das",role:"Chairperson"},{no:2,name:"Mr. Satya S. S. Dehury",role:"Member"},{no:3,name:"Mrs. Monika Sahu",role:"Member"}];function bg(){return gg(),e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
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
  `}),e.jsxs("div",{className:"grc-page",children:[e.jsxs("div",{className:"grc-hero",children:[e.jsx("div",{className:"grc-hero-grid"}),e.jsx("div",{className:"grc-hero-scan"}),e.jsx("div",{className:"grc-hero-glow"}),e.jsx("div",{className:"grc-hero-glow2"}),e.jsxs("div",{className:"grc-hero-content",children:[e.jsxs("div",{className:"grc-hero-left",children:[e.jsxs("div",{className:"grc-hero-badge",children:[e.jsx("i",{className:"fa-solid fa-hands-holding-circle"})," GRC · AICTE Guidelines"]}),e.jsxs("h1",{className:"grc-hero-title",children:["Grievance",e.jsx("br",{}),e.jsx("em",{children:"Redressal"}),e.jsx("br",{}),"Committee"]}),e.jsx("p",{className:"grc-hero-sub",children:"Committed to addressing and resolving grievances of students and staff in a fair, transparent and time-bound manner at Creative Techno College."}),e.jsx("div",{className:"grc-hero-pills",children:[{icon:"fa-scale-balanced",text:"Fair & Transparent"},{icon:"fa-lock",text:"Confidential Process"},{icon:"fa-clock",text:"Time-Bound Resolution"},{icon:"fa-building-columns",text:"AICTE Mandated"}].map((o,l)=>e.jsxs("span",{className:"grc-hero-pill",children:[e.jsx("i",{className:`fa-solid ${o.icon}`,style:{color:"#ffcc00",fontSize:"0.65rem"}}),o.text]},l))})]}),e.jsx("div",{className:"grc-hero-right",children:e.jsx("div",{className:"grc-hero-logo",children:e.jsx("img",{src:"/CTC NEW REACT WEBSITE/images/ICC/LOGO FINAL.png",alt:"Creative Techno College",onError:o=>{o.target.parentElement.innerHTML='<span style="font-size:2.5rem">🏫</span>'}})})})]})]}),e.jsx("div",{className:"grc-wave",children:e.jsx("svg",{viewBox:"0 0 1440 56",preserveAspectRatio:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M0,38 C360,56 1080,0 1440,38 L1440,56 L0,56 Z",fill:"#f0f4f8"})})}),e.jsx("div",{className:"grc-btn-strip grc-rv",children:e.jsxs("button",{className:"grc-btn",onClick:()=>window.open("https://docs.google.com/forms/d/e/1FAIpQLSe1Pcq1imy_OeOFSSbNucLUNQCVWzvi-J6kNVl5ihcX5N4LTw/viewform?usp=publish-editor","_blank"),children:[e.jsx("div",{className:"grc-btn-shine"}),e.jsxs("div",{className:"grc-btn-left",children:[e.jsx("div",{className:"grc-btn-icon",children:e.jsx("i",{className:"fa-solid fa-pen-to-square"})}),e.jsxs("div",{children:[e.jsx("div",{className:"grc-btn-title",children:"Submit Your Grievance Here"}),e.jsx("div",{className:"grc-btn-sub",children:"Confidential · Secure · Protected — File online or download form"})]})]}),e.jsx("div",{className:"grc-btn-arrow",children:e.jsx("i",{className:"fa-solid fa-arrow-right"})})]})}),e.jsxs("div",{className:"grc-main",children:[e.jsxs("div",{className:"grc-letter-card grc-rv",style:{transitionDelay:"0.1s"},children:[e.jsxs("div",{className:"grc-letter-header",children:[e.jsx("div",{className:"grc-letter-header-title",children:"Official Notice — GRC Constitution"}),e.jsx("div",{className:"grc-letter-header-sub",children:"As per AICTE norms and guidelines · Creative Techno College"})]}),e.jsxs("div",{className:"grc-letter-body",children:[e.jsx("div",{className:"grc-salutation",children:"Respected Sir/Madam,"}),e.jsxs("p",{className:"grc-letter-text",children:["I am pleased to inform you that our institution has formally constituted a"," ",e.jsx("strong",{children:"Grievance Redressal Committee"})," in accordance with the norms and guidelines prescribed by ",e.jsx("strong",{children:"AICTE"}),". The committee has been established to address and resolve grievances of students and staff in a"," ",e.jsx("strong",{children:"fair, transparent and time-bound manner"}),", thereby ensuring a healthy academic environment."]}),e.jsx("div",{className:"grc-members-intro",children:"The following members have been appointed to the Grievance Redressal Committee:"}),e.jsx("div",{className:"grc-members-list",children:xg.map(o=>e.jsxs("div",{className:"grc-member-item",children:[e.jsx("div",{className:"grc-member-num",children:String(o.no).padStart(2,"0")}),e.jsxs("div",{children:[e.jsx("div",{className:"grc-member-name",children:o.name}),e.jsx("div",{className:"grc-member-role",children:o.role})]})]},o.no))}),e.jsx("div",{className:"grc-info-badges",children:[{icon:"fa-building-columns",label:"AICTE Approved",sub:"Constituted per AICTE norms & guidelines"},{icon:"fa-gavel",label:"Natural Justice",sub:"Inquiries based on principles of natural justice"},{icon:"fa-shield-halved",label:"Healthy Environment",sub:"Ensuring a positive academic atmosphere"}].map((o,l)=>e.jsxs("div",{className:"grc-info-badge",children:[e.jsx("div",{className:"grc-info-badge-icon",children:e.jsx("i",{className:`fa-solid ${o.icon}`})}),e.jsxs("div",{children:[e.jsx("div",{className:"grc-info-badge-text",children:o.label}),e.jsx("div",{className:"grc-info-badge-sub",children:o.sub})]})]},l))})]})]}),e.jsxs("div",{className:"grc-image-card grc-rv",style:{transitionDelay:"0.2s"},children:[e.jsxs("div",{className:"grc-image-header",children:[e.jsx("i",{className:"fa-solid fa-image"}),e.jsx("span",{children:"GRC — Official Document / Notice"})]}),e.jsx("div",{className:"grc-image-container",children:e.jsx("img",{src:"/CTC NEW REACT WEBSITE/images/ICC/GRC.jpeg",alt:"GRC Official Notice",onError:o=>{o.target.style.display="none",o.target.parentElement.innerHTML=`
                    <div class="grc-image-placeholder">
                      <i class="fa-solid fa-file-image"></i>
                      <p>GRC official notice / document image will appear here.<br/>Place the image at: images/GRC/grc-notice.png</p>
                    </div>`}})})]})]})]})]})}const ei=[{name:"Abhisek Nanda",batch:"2023",domain:"Web"},{name:"Aliva Dipsikha Garnaik",batch:"2023",domain:"Web, Android"},{name:"Ipsita Pattanaik",batch:"2023",domain:"Web"},{name:"Bidusmita Mishra",batch:"2023",domain:"Web, Flutter, Backend"},{name:"Chinmayee Priyadarshini",batch:"2023",domain:"Web, Android"},{name:"Elin Pattanayak",batch:"2023",domain:"Web, Flutter"},{name:"Jasmin Samal",batch:"2023",domain:"Web, Flutter"},{name:"Monalisha Behera",batch:"2023",domain:"Web, Flutter"},{name:"Priyanka Pradhan",batch:"2023",domain:"Web, Android"},{name:"Ratnaprava Dhar",batch:"2023",domain:"Web, Flutter"},{name:"Rudra Prasad Sahu",batch:"2023",domain:"Web, Android, Backend"},{name:"Saswat Suman Dwibedy",batch:"2023",domain:"Web, Flutter, Backend"},{name:"Sudipta Suranjita Sahoo",batch:"2023",domain:"Web, Android"},{name:"Swatika Sahu",batch:"2023",domain:"Web"},{name:"Yashita Sahu",batch:"2023",domain:"Web, Android"},{name:"Abhipsa Jena",batch:"2024",domain:"Web, Android"},{name:"Bhagyalaxmi",batch:"2024",domain:"Web, Android"},{name:"Kajal Pradhan",batch:"2024",domain:"Web, Android"},{name:"Krishna Swain",batch:"2024",domain:"Web, Android"},{name:"Rimjhim Sahoo",batch:"2024",domain:"Web, Android"},{name:"Sasmita",batch:"2024",domain:"Web, Android"},{name:"Selina Sahu",batch:"2024",domain:"Web, Android"},{name:"Subham Sahu",batch:"2024",domain:"Web"},{name:"Supriyanjali Sahu",batch:"2024",domain:"Web, Android"},{name:"Tanmay Pradhan",batch:"2024",domain:"Web, Flutter"},{name:"Trishna Tamna",batch:"2024",domain:"Web, Android"},{name:"Yash Sahu",batch:"2024",domain:"Web"},{name:"Amit Pradhan",batch:"2024",domain:"Web"},{name:"Jasman Das",batch:"2024",domain:"Web"},{name:"Pratyush Patra",batch:"2024",domain:"Web"},{name:"Elina Biswal",batch:"2024",domain:"Web"},{name:"Prabhanjan Behera",batch:"2024",domain:"Web"},{name:"Happy Behera",batch:"2024",domain:"Web"},{name:"Anshuman Mishra",batch:"2025",domain:"Web, Android"},{name:"Priyadarsan Muduli",batch:"2025",domain:"Web, Android"},{name:"Biswajit Nayak",batch:"2025",domain:"Web, Flutter"},{name:"Omm Prakash Niyary",batch:"2025",domain:"Web, Flutter"},{name:"Ananta Swain",batch:"2025",domain:"Web, Flutter"},{name:"Dattatreya Khilar",batch:"2025",domain:"Web, Android"},{name:"Priyanka Mahanta",batch:"2025",domain:"Web, Android"},{name:"Ladly Sahoo",batch:"2025",domain:"Web, Flutter"},{name:"Arpita Sahu",batch:"2025",domain:"Web, Flutter"},{name:"Priyani Patra",batch:"2025",domain:"Web, Android"},{name:"Subhalaxmi Priyadarshini",batch:"2025",domain:"Web, Flutter"},{name:"Pradyumna Das",batch:"2025",domain:"Web, Flutter"},{name:"Satyabrata Pradhan",batch:"2025",domain:"Web, Flutter"},{name:"Sudhansu Pattanaik",batch:"2025",domain:"Web, Flutter"},{name:"Soumya Ranjan Sahu",batch:"2025",domain:"Web, Flutter"},{name:"Ankita Priyadarshini",batch:"2025",domain:"Web, Android"}],yg=[{name:"Attendance Management System",team:"Team Technocrat",date:"March 2023"},{name:"Lesson Planner",team:"Team Technocrat",date:"July 2024"},{name:"Notes and Assignment Tracker",team:"Team Technocrat",date:"October 2023"},{name:"Library Management System",team:"Team Technocrat",date:"March 2024"},{name:"Learning Management System (LMS)",team:"Team Technocrat",date:"July 2023"},{name:"Staff Management System",team:"Team Technocrat",date:"October 2024"},{name:"Student Database Management System",team:"Team Technocrat",date:"March 2024"},{name:"Result Management System",team:"Team Technocrat",date:"July 2025"}],vg=[{name:"Rakesh Senapati",img:"/CTC NEW REACT WEBSITE/images/TECHNOCRAT/Rakesh Ku. Senapati.jpg"},{name:"Shankar Chaitan Jena",img:"/CTC NEW REACT WEBSITE/images/TECHNOCRAT/Shankar Chaitan Jena.png"},{name:"Priyadarshan Pradhan",img:"/CTC NEW REACT WEBSITE/images/TECHNOCRAT/Priyadarshan Pradhan.png"},{name:"Abhijit Jena",img:"/CTC NEW REACT WEBSITE/images/TECHNOCRAT/Abhijit Jena.png"},{name:"Asutosh Sahu",img:"/CTC NEW REACT WEBSITE/images/TECHNOCRAT/asutosh sahu.jpg"},{name:"Chandra Kant Muduli",img:"/CTC NEW REACT WEBSITE/images/TECHNOCRAT/Chandrakant Muduli.png"},{name:"Anish Asutosh",img:"/CTC NEW REACT WEBSITE/images/TECHNOCRAT/Anish Asutosh Nayak.png"},{name:"Chandan Swain",img:"/CTC NEW REACT WEBSITE/images/TECHNOCRAT/Chandan Swain.png"},{name:"Debasish Pradhan",img:"/CTC NEW REACT WEBSITE/images/TECHNOCRAT/Debasis Pradhan.jpg"},{name:"Anata Kishor Swain",img:"/CTC NEW REACT WEBSITE/images/TECHNOCRAT/Ananta Kishore Swain.png"},{name:"Nikhil Nath",img:"/CTC NEW REACT WEBSITE/images/TECHNOCRAT/Nikhil Nath.png"},{name:"SK Akil",img:"/CTC NEW REACT WEBSITE/images/TECHNOCRAT/SK Akil.png"}],jg=[{version:"1.0",year:"2023",img:"/CTC NEW REACT WEBSITE/images/TECHNOCRAT/TechFest1.0.jpg",to:"/gymkhana/techfest/1",desc:"First edition — AI, IoT, Robotics & ML innovations by college students.",projects:8},{version:"2.0",year:"2024",img:"/CTC NEW REACT WEBSITE/images/TECHNOCRAT/TechFest2.0.jpg",to:"/gymkhana/techfest/2",desc:"Second edition — 19 cutting-edge projects in automation, safety, and smart systems.",projects:19},{version:"3.0",year:"2025",img:"/CTC NEW REACT WEBSITE/images/TECHNOCRAT/TechFest3.0.jpg",to:"/gymkhana/techfest/3",desc:"Viksit Bharat edition — schools join for the first time in this historic tech showcase.",projects:10}],Mn=[{img:"/CTC NEW REACT WEBSITE/images/TECHNOCRAT/bannerpic1.png",title:"Team Technocrat",sub:"Empowering Innovation"},{img:"/CTC NEW REACT WEBSITE/images/TECHNOCRAT/bannerpic2.png",title:"Skill Development",sub:"Shaping Future Leaders"},{img:"/CTC NEW REACT WEBSITE/images/TECHNOCRAT/bannerpic3.png",title:"Career Excellence",sub:"Connecting Academia & Industry"}],wg={2023:{bg:"#eff6ff",color:"#2563eb",border:"#bfdbfe"},2024:{bg:"#ecfdf5",color:"#059669",border:"#a7f3d0"},2025:{bg:"#fef3c7",color:"#d97706",border:"#fde68a"}},ai=12;function Sg({page:i,totalPages:o,total:l,label:d,onPage:m}){if(o<=1)return null;const f=[];if(o<=7)for(let u=1;u<=o;u++)f.push(u);else if(i<=4)for(let u=1;u<=7;u++)f.push(u);else if(i>=o-3)for(let u=o-6;u<=o;u++)f.push(u);else for(let u=i-3;u<=i+3;u++)f.push(u);return e.jsxs("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",gap:8,marginTop:20,flexWrap:"wrap"},children:[e.jsx("button",{onClick:()=>m(Math.max(1,i-1)),disabled:i===1,style:{background:i===1?"#f0f4f8":"#0c2340",color:i===1?"#94a3b8":"#ffcc00",border:"none",borderRadius:10,padding:"8px 16px",fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"0.8rem",fontWeight:700,cursor:i===1?"default":"pointer"},children:"← Prev"}),f.map(u=>e.jsx("button",{onClick:()=>m(u),style:{background:i===u?"#0c2340":"#fff",color:i===u?"#ffcc00":"#0c2340",border:`1.5px solid ${i===u?"#0c2340":"rgba(12,35,64,0.15)"}`,borderRadius:10,padding:"8px 14px",minWidth:38,fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"0.8rem",fontWeight:700,cursor:"pointer"},children:u},u)),e.jsx("button",{onClick:()=>m(Math.min(o,i+1)),disabled:i===o,style:{background:i===o?"#f0f4f8":"#0c2340",color:i===o?"#94a3b8":"#ffcc00",border:"none",borderRadius:10,padding:"8px 16px",fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"0.8rem",fontWeight:700,cursor:i===o?"default":"pointer"},children:"Next →"}),e.jsxs("span",{style:{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"0.75rem",color:"#94a3b8",fontWeight:600},children:["Page ",i," of ",o," · ",l," ",d||"members"]})]})}function Cg(){const[i,o]=y.useState(0),[l,d]=y.useState("all"),[m,f]=y.useState(1),u=l==="all"?ei:ei.filter(h=>h.batch===l),w=Math.ceil(u.length/ai),b=u.slice((m-1)*ai,m*ai),v=h=>{d(h),f(1)};return e.jsxs("div",{className:"tc-page",children:[e.jsx("style",{children:`
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
  `}),e.jsxs("div",{className:"tc-hero",children:[e.jsxs("div",{className:"tc-hero-inner",children:[e.jsxs("div",{className:"tc-hero-left",children:[e.jsxs("div",{className:"tc-hero-badge",children:[e.jsx("i",{className:"fa-solid fa-microchip"})," Gymkhana · Technical Club"]}),e.jsxs("h1",{className:"tc-hero-h1",children:["Team ",e.jsx("em",{children:"Technocrat"})]}),e.jsx("p",{className:"tc-hero-sub",children:"Empowering students with essential skills for today's competitive job market — bridging the gap between academic learning and industry demands through real-world projects and technical excellence."}),e.jsx("div",{className:"tc-hero-stats",children:[{val:`${ei.length}+`,label:"Active Members"},{val:"8+",label:"Projects Built"},{val:"3",label:"TechFest Editions"},{val:"3",label:"Batches"}].map((h,T)=>e.jsxs("div",{children:[e.jsx("div",{className:"tc-hero-stat-val",children:h.val}),e.jsx("div",{className:"tc-hero-stat-lbl",children:h.label})]},T))})]}),e.jsx("div",{className:"tc-hero-right",children:e.jsx("div",{className:"tc-hero-pills",children:[{dot:"#3b82f6",icon:"fa-solid fa-code",label:"Web Development"},{dot:"#10b981",icon:"fa-solid fa-mobile-alt",label:"Android & Flutter"},{dot:"#ffcc00",icon:"fa-solid fa-server",label:"Backend Systems"},{dot:"#ec4899",icon:"fa-solid fa-rocket",label:"TechFest Series"},{dot:"#00d4ff",icon:"fa-solid fa-diagram-project",label:"8+ Projects Deployed"}].map((h,T)=>e.jsxs("div",{className:"tc-hero-pill",children:[e.jsx("span",{className:"tc-hero-pill-dot",style:{background:h.dot}}),e.jsx("i",{className:h.icon,style:{color:h.dot,width:16,textAlign:"center"}}),h.label]},T))})})]}),e.jsx("div",{className:"tc-hero-wave",children:e.jsx("svg",{viewBox:"0 0 1440 56",preserveAspectRatio:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M0,38 C360,56 1080,0 1440,38 L1440,56 L0,56 Z",fill:"#f0f4f8"})})})]}),e.jsxs("div",{className:"tc-main",children:[e.jsxs("div",{className:"tc-leaders-wrap",children:[e.jsxs("div",{className:"tc-section-head",children:[e.jsxs("div",{className:"tc-pill-tag",children:[e.jsx("i",{className:"fa-solid fa-users"})," Our Leadership"]}),e.jsxs("h2",{children:["Club Incharge & ",e.jsx("span",{children:"Secretaries"})]})]}),e.jsx("div",{className:"tc-leaders-grid",children:[{role:"Club Incharge",name:"Mr. Bhabani Sankar Sahoo",img:"/CTC NEW REACT WEBSITE/images/TECHNOCRAT/TeamIncharge.jpg",tag:"Faculty Lead"},{role:"Club Secretary (Boy)",name:"Mr. Saswat Suman Dwibedy",img:"/CTC NEW REACT WEBSITE/images/TECHNOCRAT/boySecretary.jpg",tag:"Student Rep"},{role:"Club Secretary (Girl)",name:"Ms. Sudipta Suranjita Sahoo",img:"/CTC NEW REACT WEBSITE/images/TECHNOCRAT/girlSecretary.jpg",tag:"Student Rep"}].map((h,T)=>e.jsxs("div",{className:"tc-leader-card",children:[e.jsx("div",{className:"tc-leader-img",children:e.jsx("img",{src:h.img,alt:h.role})}),e.jsxs("div",{className:"tc-leader-body",children:[e.jsx("h4",{children:h.role}),e.jsx("div",{style:{fontSize:"0.9rem",fontWeight:700,color:"#2563eb",marginBottom:"8px",fontFamily:"'Plus Jakarta Sans', sans-serif"},children:h.name}),e.jsx("span",{className:"tc-leader-tag",children:h.tag})]})]},T))})]}),e.jsxs("div",{className:"tc-slider-wrap",style:{borderRadius:22,marginBottom:0},children:[e.jsxs("div",{className:"tc-section-head",style:{marginBottom:0},children:[e.jsx("div",{className:"tc-pill-tag",style:{background:"rgba(255,204,0,0.15)",color:"#ffcc00",border:"1px solid rgba(255,204,0,0.3)"},children:"Team Gallery"}),e.jsxs("h2",{style:{color:"#fff",fontFamily:"'Plus Jakarta Sans',sans-serif"},children:["Our Team ",e.jsx("span",{style:{color:"#ffcc00",WebkitTextFillColor:"#ffcc00"},children:"in Action"})]})]}),e.jsxs("div",{className:"tc-slider",children:[Mn.map((h,T)=>e.jsxs("div",{className:`tc-slide${i===T?" active":""}`,children:[e.jsx("img",{src:h.img,alt:h.title}),e.jsxs("div",{className:"tc-slide-overlay",children:[e.jsx("h3",{children:h.title}),e.jsx("p",{children:h.sub})]})]},T)),e.jsx("button",{className:"tc-slider-arrow",style:{left:14},onClick:()=>o((i-1+Mn.length)%Mn.length),children:e.jsx("i",{className:"fa-solid fa-chevron-left"})}),e.jsx("button",{className:"tc-slider-arrow",style:{right:14},onClick:()=>o((i+1)%Mn.length),children:e.jsx("i",{className:"fa-solid fa-chevron-right"})})]}),e.jsx("div",{className:"tc-slider-dots",children:Mn.map((h,T)=>e.jsx("button",{className:`tc-slider-dot${i===T?" active":""}`,onClick:()=>o(T)},T))})]}),e.jsxs("div",{className:"tc-techfest-wrap",style:{borderRadius:22,marginTop:0},children:[e.jsxs("div",{className:"tc-section-head",children:[e.jsxs("div",{className:"tc-pill-tag",children:[e.jsx("i",{className:"fa-solid fa-rocket"})," Mega Event"]}),e.jsxs("h2",{children:["Tech",e.jsx("span",{children:"Fest"})," Series"]}),e.jsx("p",{children:"Our annual flagship event where innovation meets excellence — three editions, each bigger and bolder."})]}),e.jsx("div",{className:"tc-fest-grid",children:jg.map((h,T)=>e.jsxs(Ne,{to:h.to,className:"tc-fest-card",children:[e.jsxs("div",{className:"tc-fest-img",children:[e.jsx("img",{src:h.img,alt:`TechFest ${h.version}`}),e.jsx("div",{className:"tc-fest-img-overlay"}),e.jsxs("span",{className:"tc-fest-ver",children:["TechFest ",h.version]})]}),e.jsxs("div",{className:"tc-fest-body",children:[e.jsxs("h3",{children:["TechFest ",h.version]}),e.jsx("p",{children:h.desc}),e.jsxs("div",{className:"tc-fest-meta",children:[e.jsxs("span",{children:[e.jsx("i",{className:"fa-regular fa-calendar"})," ",h.year]}),e.jsxs("span",{children:[e.jsx("i",{className:"fa-solid fa-diagram-project"})," ",h.projects," Projects"]})]}),e.jsxs("div",{className:"tc-fest-link",children:["Explore ",e.jsx("i",{className:"fa-solid fa-arrow-right",style:{fontSize:"0.7rem"}})]})]})]},T))})]}),e.jsxs("div",{className:"tc-team-wrap",children:[e.jsxs("div",{className:"tc-section-head",children:[e.jsxs("div",{className:"tc-pill-tag",children:[e.jsx("i",{className:"fa-solid fa-code"})," Our Team"]}),e.jsxs("h2",{children:["Meet the ",e.jsx("span",{children:"Technocrats"})]}),e.jsxs("p",{children:[ei.length," talented members across 3 batches — building, innovating, and growing together."]})]}),e.jsx("div",{className:"tc-filter-bar",children:["all","2023","2024","2025"].map(h=>e.jsx("button",{className:`tc-filter-btn${l===h?" active":""}`,onClick:()=>v(h),children:h==="all"?"All Batches":`Batch ${h}`},h))}),e.jsx("div",{className:"tc-table-wrap",children:e.jsxs("table",{className:"tc-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{width:48},children:"#"}),e.jsx("th",{children:"Name"}),e.jsx("th",{style:{width:100},children:"Batch"}),e.jsx("th",{children:"Domain"})]})}),e.jsx("tbody",{children:b.map((h,T)=>{const P=wg[h.batch];return e.jsxs("tr",{children:[e.jsx("td",{style:{color:"#94a3b8",fontWeight:700},children:(m-1)*ai+T+1}),e.jsx("td",{style:{fontWeight:700},children:h.name}),e.jsx("td",{children:e.jsx("span",{className:"tc-batch-pill",style:{background:P.bg,color:P.color,border:`1px solid ${P.border}`},children:h.batch})}),e.jsx("td",{children:e.jsx("span",{className:"tc-domain-label",children:h.domain})})]},T)})})]})}),e.jsx(Sg,{page:m,totalPages:w,total:u.length,label:"members",onPage:f})]}),e.jsxs("div",{className:"tc-proj-wrap",style:{borderRadius:22},children:[e.jsxs("div",{className:"tc-section-head",children:[e.jsxs("div",{className:"tc-pill-tag",children:[e.jsx("i",{className:"fa-solid fa-diagram-project"})," Work"]}),e.jsxs("h2",{children:["Our ",e.jsx("span",{children:"Projects"})]}),e.jsx("p",{children:"Real-world software systems built by Team Technocrat for the college community."})]}),e.jsx("div",{className:"tc-proj-inner",children:yg.map((h,T)=>e.jsxs("div",{className:"tc-proj-row",children:[e.jsx("div",{className:"tc-proj-num",children:String(T+1).padStart(2,"0")}),e.jsxs("div",{style:{flex:1},children:[e.jsx("div",{className:"tc-proj-name",children:h.name}),e.jsxs("div",{className:"tc-proj-sub",children:[e.jsx("i",{className:"fa-solid fa-users",style:{fontSize:"0.6rem",marginRight:4}}),h.team]})]}),e.jsxs("div",{className:"tc-proj-date",children:[e.jsx("i",{className:"fa-regular fa-calendar",style:{marginRight:5}}),h.date]})]},T))})]})]}),e.jsxs("div",{className:"tc-ex-wrap",children:[e.jsxs("div",{className:"tc-section-head",children:[e.jsx("div",{className:"tc-pill-tag",style:{background:"rgba(255,204,0,0.15)",color:"#ffcc00",border:"1px solid rgba(255,204,0,0.3)"},children:"Alumni"}),e.jsxs("h2",{style:{color:"#fff",fontFamily:"'Plus Jakarta Sans',sans-serif"},children:["Excellent ",e.jsx("span",{style:{color:"#ffcc00",WebkitTextFillColor:"#ffcc00"},children:"Ex-Leaders"})]}),e.jsx("p",{style:{color:"rgba(255,255,255,0.45)",fontSize:"0.88rem",maxWidth:480,margin:"0 auto"},children:"Leaders who shaped Technocrat and went on to make their mark in the industry."})]}),e.jsx("div",{className:"tc-ex-grid",children:vg.map((h,T)=>e.jsxs("div",{className:"tc-ex-card",children:[e.jsx("div",{className:"tc-ex-img",children:e.jsx("img",{src:h.img,alt:h.name})}),e.jsx("p",{className:"tc-ex-name",children:h.name})]},T))})]})]})}const $d=[{name:"100m Running",month:"December",icon:"fa-person-running"},{name:"200m Running",month:"December",icon:"fa-person-running"},{name:"Long Jump",month:"December",icon:"fa-arrow-right-long"},{name:"High Jump",month:"December",icon:"fa-up-long"},{name:"Discus Throw",month:"December",icon:"fa-circle"},{name:"Shotput",month:"December",icon:"fa-baseball"},{name:"Javelin Throw",month:"December",icon:"fa-location-arrow"},{name:"Relay Race",month:"December",icon:"fa-people-arrows"},{name:"Badminton",month:"December",icon:"fa-table-tennis-paddle-ball"},{name:"Chess",month:"December",icon:"fa-chess"},{name:"Carrom",month:"December",icon:"fa-chess-board"}],kg=[{icon:"fa-solid fa-handshake",text:"To develop the spirit of sportsmanship and healthy competition."},{icon:"fa-solid fa-heart-pulse",text:"To maintain physical and mental fitness through regular sports activities."},{icon:"fa-solid fa-star",text:"To identify and nurture sporting talent among students."},{icon:"fa-solid fa-people-group",text:"To promote teamwork, discipline, and time management skills."},{icon:"fa-solid fa-scale-balanced",text:"To provide a balance between academics and extracurricular excellence."}],Ng=Array.from({length:12},(i,o)=>({src:`/CTC%20NEW%20REACT%20WEBSITE/images/SPORTS/image${o+1}.jpeg`,alt:`Sports Event ${o+1}`})),Gd=["normal","tall","wide","normal","normal","wide","tall","normal"];function Eg(){const[i,o]=y.useState(null),[l,d]=y.useState(!1),m=y.useMemo(()=>Ng.map((v,x)=>({...v,size:Gd[x%Gd.length]})),[]),f=l?m:m.slice(0,10),u=y.useCallback(v=>{i!==null&&(v.key==="ArrowRight"&&o(x=>(x+1)%f.length),v.key==="ArrowLeft"&&o(x=>(x-1+f.length)%f.length),v.key==="Escape"&&o(null))},[i,f.length]);y.useEffect(()=>(window.addEventListener("keydown",u),()=>window.removeEventListener("keydown",u)),[u]);const w=i!==null?f[i]:null;return e.jsxs("div",{className:"tc-page",children:[e.jsx("style",{children:`
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
  `}),e.jsxs("div",{className:"tc-hero",children:[e.jsxs("div",{className:"tc-hero-inner",children:[e.jsxs("div",{className:"tc-hero-left",children:[e.jsxs("div",{className:"tc-hero-badge",children:[e.jsx("i",{className:"fa-solid fa-trophy"})," Gymkhana · Sports Club"]}),e.jsxs("h1",{className:"tc-hero-h1",children:["SPORTS ",e.jsx("em",{children:"CLUB"})]}),e.jsx("p",{className:"tc-hero-sub",children:"Dedicated to promoting physical fitness, discipline, teamwork, and sportsmanship — building resilience, leadership, and a healthy lifestyle among students."}),e.jsx("div",{className:"tc-hero-stats",children:[{val:`${$d.length}+`,label:"Sports Events"},{val:"Annual",label:"Sports Meet"},{val:"100%",label:"Participation"},{val:"Dec",label:"Season"}].map((v,x)=>e.jsxs("div",{children:[e.jsx("div",{className:"tc-hero-stat-val",children:v.val}),e.jsx("div",{className:"tc-hero-stat-lbl",children:v.label})]},x))})]}),e.jsx("div",{className:"tc-hero-right",children:e.jsx("div",{className:"tc-hero-pills",children:[{dot:"#3b82f6",icon:"fa-solid fa-person-running",label:"Track & Field"},{dot:"#10b981",icon:"fa-solid fa-futbol",label:"Team Sports"},{dot:"#ffcc00",icon:"fa-solid fa-chess",label:"Indoor Games"},{dot:"#ec4899",icon:"fa-solid fa-dumbbell",label:"Fitness Workshops"},{dot:"#00d4ff",icon:"fa-solid fa-trophy",label:"Tournaments"}].map((v,x)=>e.jsxs("div",{className:"tc-hero-pill",children:[e.jsx("span",{className:"tc-hero-pill-dot",style:{background:v.dot}}),e.jsx("i",{className:v.icon,style:{color:v.dot,width:16,textAlign:"center"}}),v.label]},x))})})]}),e.jsx("div",{className:"tc-hero-wave",children:e.jsx("svg",{viewBox:"0 0 1440 56",preserveAspectRatio:"none",children:e.jsx("path",{d:"M0,38 C360,56 1080,0 1440,38 L1440,56 L0,56 Z",fill:"#f0f4f8"})})})]}),e.jsxs("div",{className:"tc-main",children:[e.jsxs("div",{className:"tc-leaders-wrap",children:[e.jsxs("div",{className:"tc-section-head",children:[e.jsxs("div",{className:"tc-pill-tag",children:[e.jsx("i",{className:"fa-solid fa-users"})," Our Leadership"]}),e.jsxs("h2",{children:["Club Incharge & ",e.jsx("span",{children:"Secretaries"})]})]}),e.jsx("div",{className:"tc-leaders-grid",children:[{role:"Club Incharge",name:"Mr. Satya S. S. Dehury",img:"/CTC NEW REACT WEBSITE/images/SPORTS/Satya Sir.jpg",tag:"Faculty Lead"},{role:"Club Secretary (Boy)",name:" Mr. Chiranjib Pattnaik",img:"/CTC NEW REACT WEBSITE/images/SPORTS/gulu.jpeg",tag:"Student Rep"},{role:"Club Secretary (Girl)",name:"Monalisha Behera",img:"/CTC NEW REACT WEBSITE/images/SPORTS/monalisha.jpeg",tag:"Student Rep"}].map((v,x)=>e.jsxs("div",{className:"tc-leader-card",children:[e.jsx("div",{className:"tc-leader-img",children:e.jsx("img",{src:v.img,alt:v.role})}),e.jsxs("div",{className:"tc-leader-body",children:[e.jsx("h4",{children:v.role}),e.jsx("div",{style:{fontSize:"0.9rem",fontWeight:700,color:"#2563eb",marginBottom:"8px",fontFamily:"'Plus Jakarta Sans', sans-serif"},children:v.name}),e.jsx("span",{className:"tc-leader-tag",children:v.tag})]})]},x))})]}),e.jsxs("div",{style:{padding:"72px 4%"},children:[e.jsxs("div",{className:"tc-section-head",children:[e.jsxs("div",{className:"tc-pill-tag",children:[e.jsx("i",{className:"fa-solid fa-bullseye"})," Mission"]}),e.jsxs("h2",{children:["Our ",e.jsx("span",{children:"Objectives"})]}),e.jsx("p",{children:"Core principles guiding every tournament, session, and activity we organize."})]}),e.jsx("div",{className:"tc-obj-grid",children:kg.map((v,x)=>e.jsxs("div",{className:"tc-obj-card",children:[e.jsx("div",{className:"tc-obj-icon",children:e.jsx("i",{className:v.icon})}),e.jsx("p",{children:v.text})]},x))})]}),e.jsxs("div",{className:"tc-proj-wrap",children:[e.jsxs("div",{className:"tc-section-head",children:[e.jsxs("div",{className:"tc-pill-tag",children:[e.jsx("i",{className:"fa-solid fa-list"})," Events"]}),e.jsxs("h2",{children:["Our ",e.jsx("span",{children:"Activities"})]}),e.jsx("p",{children:"Annual sports events organized every December during the Sports Meet."})]}),e.jsx("div",{className:"tc-proj-inner",children:$d.map((v,x)=>e.jsxs("div",{className:"tc-proj-row",children:[e.jsx("div",{className:"tc-proj-num",children:String(x+1).padStart(2,"0")}),e.jsx("div",{style:{flex:1},children:e.jsxs("div",{className:"tc-proj-name",children:[e.jsx("i",{className:`fa-solid ${v.icon}`,style:{marginRight:8,color:"#2563eb"}}),v.name]})}),e.jsxs("div",{className:"tc-proj-date",children:[e.jsx("i",{className:"fa-regular fa-calendar",style:{marginRight:5}}),v.month]})]},x))})]}),e.jsx("div",{className:"tc-mission-static",children:e.jsxs("div",{className:"tc-mission-card",children:[e.jsx("img",{src:"/CTC NEW REACT WEBSITE/images/SPORTS/banner.jpeg",alt:"Sports Club Banner",className:"tc-mission-img"}),e.jsxs("div",{className:"tc-mission-overlay",children:[e.jsx("h3",{children:"Annual Sports Meet"}),e.jsx("p",{children:"Where champions are made — track, field, and team sports bring out the best in every participant."})]})]})})]}),e.jsxs("div",{className:"tc-gallery-wrap",children:[e.jsxs("div",{className:"tc-section-head",children:[e.jsxs("div",{className:"tc-pill-tag",style:{background:"rgba(255,204,0,0.15)",color:"#ffcc00",border:"1px solid rgba(255,204,0,0.3)"},children:[e.jsx("i",{className:"fa-solid fa-images"})," Gallery"]}),e.jsxs("h2",{style:{color:"#fff"},children:["Annual Sports ",e.jsx("span",{style:{color:"#ffcc00"},children:"Highlights"})]}),e.jsx("p",{style:{color:"rgba(255,255,255,0.45)"},children:"Moments of triumph, teamwork, and sportsmanship from our annual sports meets."})]}),e.jsx("div",{className:"tc-gallery-grid",children:f.map((v,x)=>e.jsxs("div",{className:`tc-gallery-item ${v.size==="tall"?"tc-item-tall":""} ${v.size==="wide"?"tc-item-wide":""}`,onClick:()=>o(x),children:[e.jsx("img",{src:v.src,alt:v.alt,loading:"lazy"}),e.jsx("div",{className:"tc-gallery-overlay",children:e.jsx("i",{className:"fa-solid fa-expand"})})]},x))})]}),w&&e.jsxs("div",{className:"gl-lightbox",onClick:v=>v.target===v.currentTarget&&o(null),children:[e.jsx("button",{className:"gl-close",onClick:()=>o(null),children:"✕"}),e.jsx("button",{className:"gl-nav",style:{left:"40px"},onClick:()=>o(v=>(v-1+f.length)%f.length),children:"←"}),e.jsxs("div",{className:"gl-panel",children:[e.jsx("img",{className:"gl-img",src:w.src,alt:"View"}),e.jsx("div",{style:{color:"#ffcc00",fontWeight:900,marginTop:"25px",fontSize:"1.2rem"},children:"SPORTS CLUB ARCHIVES"})]}),e.jsx("button",{className:"gl-nav",style:{right:"40px"},onClick:()=>o(v=>(v+1)%f.length),children:"→"})]})]})}const Tg=[{icon:"fa-solid fa-palette",text:"Encourage students to showcase and develop their artistic and creative abilities."},{icon:"fa-solid fa-earth-asia",text:"Provide a platform for cultural exchange, inclusivity, and diversity."},{icon:"fa-solid fa-crown",text:"Promote leadership, teamwork, and organizational skills through cultural events."},{icon:"fa-solid fa-microphone",text:"Enhance students' confidence, communication, and presentation skills."},{icon:"fa-solid fa-music",text:"Make the campus a hub of cultural vibrancy and student engagement."}],Ag=[{name:"Inter-College Fest",members:"Ravi Kumar, Sonal Sharma",date:"March 2024",icon:"fa-solid fa-flag",color:"#3b82f6"},{name:"Drama Night",members:"Ananya Gupta",date:"December 2023",icon:"fa-solid fa-masks-theater",color:"#8b5cf6"},{name:"Folk Dance Fiesta",members:"Team Cultural",date:"August 2024",icon:"fa-solid fa-music",color:"#ec4899"}],Pg=[{src:"/CTC%20NEW%20REACT%20WEBSITE/images/CULTURAL/funfest/f1.jpeg",alt:"Fun Fest 1"},{src:"/CTC%20NEW%20REACT%20WEBSITE/images/CULTURAL/funfest/f2.jpeg",alt:"Fun Fest 2"},{src:"/CTC%20NEW%20REACT%20WEBSITE/images/CULTURAL/funfest/f3.jpeg",alt:"Fun Fest 3"},{src:"/CTC%20NEW%20REACT%20WEBSITE/images/CULTURAL/funfest/f4.jpeg",alt:"Fun Fest 4"},{src:"/CTC%20NEW%20REACT%20WEBSITE/images/CULTURAL/funfest/f5.jpeg",alt:"Fun Fest 5"},{src:"/CTC%20NEW%20REACT%20WEBSITE/images/CULTURAL/funfest/f6.jpeg",alt:"Fun Fest 6"},{src:"/CTC%20NEW%20REACT%20WEBSITE/images/CULTURAL/funfest/f7.jpeg",alt:"Fun Fest 7"},{src:"/CTC%20NEW%20REACT%20WEBSITE/images/CULTURAL/holi/h1.jpeg",alt:"Holi 1"},{src:"/CTC%20NEW%20REACT%20WEBSITE/images/CULTURAL/holi/h2.jpeg",alt:"Holi 2"},{src:"/CTC%20NEW%20REACT%20WEBSITE/images/CULTURAL/holi/h3.jpeg",alt:"Holi 3"},{src:"/CTC%20NEW%20REACT%20WEBSITE/images/CULTURAL/holi/h4.jpeg",alt:"Holi 4"},{src:"/CTC%20NEW%20REACT%20WEBSITE/images/CULTURAL/holi/h5.jpeg",alt:"Holi 5"},{src:"/CTC%20NEW%20REACT%20WEBSITE/images/CULTURAL/saraswati_puja/sp1.jpeg",alt:"Saraswati Puja 1"},{src:"/CTC%20NEW%20REACT%20WEBSITE/images/CULTURAL/saraswati_puja/sp2.jpeg",alt:"Saraswati Puja 2"},{src:"/CTC%20NEW%20REACT%20WEBSITE/images/CULTURAL/saraswati_puja/sp3.jpeg",alt:"Saraswati Puja 3"},{src:"/CTC%20NEW%20REACT%20WEBSITE/images/CULTURAL/saraswati_puja/sp4.jpeg",alt:"Saraswati Puja 4"},{src:"/CTC%20NEW%20REACT%20WEBSITE/images/CULTURAL/saraswati_puja/sp5.jpeg",alt:"Saraswati Puja 5"},{src:"/CTC%20NEW%20REACT%20WEBSITE/images/CULTURAL/saraswati_puja/sp6.jpeg",alt:"Saraswati Puja 6"}],Jd=["normal","tall","wide","normal","normal","wide","tall","normal","normal","tall","wide","normal","normal","wide","tall","normal","normal","normal"];function Rg(){const[i,o]=y.useState(null),[l,d]=y.useState(!1),m=y.useMemo(()=>Pg.map((v,x)=>({...v,size:Jd[x%Jd.length]})),[]),f=l?m:m.slice(0,10),u=y.useCallback(v=>{i!==null&&(v.key==="ArrowRight"&&o(x=>(x+1)%f.length),v.key==="ArrowLeft"&&o(x=>(x-1+f.length)%f.length),v.key==="Escape"&&o(null))},[i,f.length]);y.useEffect(()=>(window.addEventListener("keydown",u),()=>window.removeEventListener("keydown",u)),[u]);const w=i!==null?f[i]:null;return e.jsxs("div",{className:"tc-page",children:[e.jsx("style",{children:`
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
  `}),e.jsxs("div",{className:"tc-hero",children:[e.jsxs("div",{className:"tc-hero-inner",children:[e.jsxs("div",{className:"tc-hero-left",children:[e.jsxs("div",{className:"tc-hero-badge",children:[e.jsx("i",{className:"fa-solid fa-masks-theater"})," Gymkhana · Cultural Club"]}),e.jsxs("h1",{className:"tc-hero-h1",children:["CULTURAL ",e.jsx("em",{children:"CLUB"})]}),e.jsx("p",{className:"tc-hero-sub",children:"Celebrating creativity, expression, and diversity through art, music, dance, and drama — providing students a vibrant stage to explore their artistic potential and cultural heritage."}),e.jsx("div",{className:"tc-hero-stats",children:[{val:"5+",label:"Art Forms"},{val:"Annual",label:"Cultural Fest"},{val:"50+",label:"Participants"},{val:"All Year",label:"Activities"}].map((v,x)=>e.jsxs("div",{children:[e.jsx("div",{className:"tc-hero-stat-val",children:v.val}),e.jsx("div",{className:"tc-hero-stat-lbl",children:v.label})]},x))})]}),e.jsx("div",{className:"tc-hero-right",children:e.jsx("div",{className:"tc-hero-pills",children:[{dot:"#3b82f6",icon:"fa-solid fa-music",label:"Music"},{dot:"#10b981",icon:"fa-solid fa-child",label:"Dance"},{dot:"#ffcc00",icon:"fa-solid fa-masks-theater",label:"Drama"},{dot:"#ec4899",icon:"fa-solid fa-palette",label:"Fine Arts"},{dot:"#00d4ff",icon:"fa-solid fa-pen-nib",label:"Literary"}].map((v,x)=>e.jsxs("div",{className:"tc-hero-pill",children:[e.jsx("span",{className:"tc-hero-pill-dot",style:{background:v.dot}}),e.jsx("i",{className:v.icon,style:{color:v.dot,width:16,textAlign:"center"}}),v.label]},x))})})]}),e.jsx("div",{className:"tc-hero-wave",children:e.jsx("svg",{viewBox:"0 0 1440 56",preserveAspectRatio:"none",children:e.jsx("path",{d:"M0,38 C360,56 1080,0 1440,38 L1440,56 L0,56 Z",fill:"#f0f4f8"})})})]}),e.jsxs("div",{className:"tc-main",children:[e.jsxs("div",{className:"tc-leaders-wrap",children:[e.jsxs("div",{className:"tc-section-head",children:[e.jsxs("div",{className:"tc-pill-tag",children:[e.jsx("i",{className:"fa-solid fa-users"})," Our Leadership"]}),e.jsxs("h2",{children:["Club Incharge & ",e.jsx("span",{children:"Secretaries"})]})]}),e.jsx("div",{className:"tc-leaders-grid",children:[{role:"Club Incharge",name:"Mr. Krishnasis Mishra",img:"/CTC NEW REACT WEBSITE/images/CULTURAL/Principal Sir.jpg",tag:"Faculty Lead"},{role:"Club Secretary (Boy)",name:"Mr. Bikash Behera",img:"/CTC NEW REACT WEBSITE/images/CULTURAL/bikash.jpeg",tag:"Student Rep"},{role:"Club Secretary (Girl)",name:"Ms. Ipsita Pattanaik",img:"/CTC NEW REACT WEBSITE/images/CULTURAL/ipsita.jpg",tag:"Student Rep"}].map((v,x)=>e.jsxs("div",{className:"tc-leader-card",children:[e.jsx("div",{className:"tc-leader-img",children:e.jsx("img",{src:v.img,alt:v.role})}),e.jsxs("div",{className:"tc-leader-body",children:[e.jsx("h4",{children:v.role}),e.jsx("div",{style:{fontSize:"0.9rem",fontWeight:700,color:"#2563eb",marginBottom:"8px",fontFamily:"'Plus Jakarta Sans', sans-serif"},children:v.name}),e.jsx("span",{className:"tc-leader-tag",children:v.tag})]})]},x))})]}),e.jsxs("div",{style:{padding:"72px 4%"},children:[e.jsxs("div",{className:"tc-section-head",children:[e.jsxs("div",{className:"tc-pill-tag",children:[e.jsx("i",{className:"fa-solid fa-bullseye"})," Mission"]}),e.jsxs("h2",{children:["Our ",e.jsx("span",{children:"Objectives"})]}),e.jsx("p",{children:"The principles that shape every cultural event, workshop, and performance we create."})]}),e.jsx("div",{className:"tc-obj-grid",children:Tg.map((v,x)=>e.jsxs("div",{className:"tc-obj-card",children:[e.jsx("div",{className:"tc-obj-icon",children:e.jsx("i",{className:v.icon})}),e.jsx("p",{children:v.text})]},x))})]}),e.jsxs("div",{className:"tc-proj-wrap",children:[e.jsxs("div",{className:"tc-section-head",children:[e.jsxs("div",{className:"tc-pill-tag",children:[e.jsx("i",{className:"fa-solid fa-calendar-check"})," Events"]}),e.jsxs("h2",{children:["Our ",e.jsx("span",{children:"Activities"})]}),e.jsx("p",{children:"Cultural events that bring creativity, celebration, and student talent to the spotlight."})]}),e.jsx("div",{className:"tc-proj-inner",children:Ag.map((v,x)=>e.jsxs("div",{className:"tc-proj-row",children:[e.jsx("div",{className:"tc-proj-num",children:String(x+1).padStart(2,"0")}),e.jsxs("div",{style:{flex:1},children:[e.jsxs("div",{className:"tc-proj-name",children:[e.jsx("i",{className:v.icon,style:{marginRight:8,color:v.color}}),v.name]}),e.jsxs("div",{className:"tc-proj-sub",children:[e.jsx("i",{className:"fa-solid fa-users",style:{fontSize:"0.6rem",marginRight:4}}),v.members]})]}),e.jsxs("div",{className:"tc-proj-date",children:[e.jsx("i",{className:"fa-regular fa-calendar",style:{marginRight:5}}),v.date]})]},x))})]}),e.jsx("div",{className:"tc-mission-static",children:e.jsxs("div",{className:"tc-mission-card",children:[e.jsx("img",{src:"/CTC NEW REACT WEBSITE/images/CULTURAL/banner.jpg",alt:"Cultural Club Banner",className:"tc-mission-img"}),e.jsxs("div",{className:"tc-mission-overlay",children:[e.jsx("h3",{children:"Where Art Meets Identity"}),e.jsx("p",{children:"Our annual cultural fest showcases the rich heritage and creative spirit of our students."})]})]})})]})," ",e.jsxs("div",{className:"tc-gallery-wrap",children:[e.jsxs("div",{className:"tc-section-head",children:[e.jsxs("div",{className:"tc-pill-tag",style:{background:"rgba(255,204,0,0.15)",color:"#ffcc00",border:"1px solid rgba(255,204,0,0.3)"},children:[e.jsx("i",{className:"fa-solid fa-images"})," Gallery"]}),e.jsxs("h2",{style:{color:"#fff"},children:["Event ",e.jsx("span",{style:{color:"#ffcc00"},children:"Gallery"})]}),e.jsx("p",{style:{color:"rgba(255,255,255,0.45)"},children:"Vivid memories from our cultural events, performances, and festive celebrations."})]}),e.jsx("div",{className:"tc-gallery-grid",children:f.map((v,x)=>e.jsxs("div",{className:`tc-gallery-item ${v.size==="tall"?"tc-item-tall":""} ${v.size==="wide"?"tc-item-wide":""}`,onClick:()=>o(x),children:[e.jsx("img",{src:v.src,alt:v.alt,loading:"lazy"}),e.jsx("div",{className:"tc-gallery-overlay",children:e.jsx("i",{className:"fa-solid fa-expand"})})]},x))}),!l&&m.length>10&&e.jsxs("button",{className:"tc-btn-full",onClick:()=>d(!0),children:["EXPLORE FULL ARCHIVE (",m.length," IMAGES)"]})]}),w&&e.jsxs("div",{className:"gl-lightbox",onClick:v=>v.target===v.currentTarget&&o(null),children:[e.jsx("button",{className:"gl-close",onClick:()=>o(null),children:"✕"}),e.jsx("button",{className:"gl-nav",style:{left:"40px"},onClick:()=>o(v=>(v-1+f.length)%f.length),children:"←"}),e.jsxs("div",{className:"gl-panel",children:[e.jsx("img",{className:"gl-img",src:w.src,alt:"View"}),e.jsx("div",{style:{color:"#ffcc00",fontWeight:900,marginTop:"25px",fontSize:"1.2rem"},children:"CULTURAL CLUB ARCHIVES"}),e.jsx("div",{className:"gl-thumbs",children:f.map((v,x)=>e.jsx("div",{className:`gl-thumb ${i===x?"active":""}`,onClick:()=>o(x),children:e.jsx("img",{src:v.src,alt:"thumb"})},x))})]}),e.jsx("button",{className:"gl-nav",style:{right:"40px"},onClick:()=>o(v=>(v+1)%f.length),children:"→"})]})]})}const Jt=[{name:"Sana Rao",batch:"2023",domain:"HR"},{name:"Saswat Patra",batch:"2023",domain:"HR"},{name:"Puja Kumari",batch:"2023",domain:"HR"},{name:"Santosh Sahu",batch:"2023",domain:"HR"},{name:"Sneha Kumari",batch:"2023",domain:"HR"},{name:"Chiranjib Pattanaik",batch:"2023",domain:"HR"},{name:"Supriya Mohanty",batch:"2023",domain:"HR"},{name:"Shankar Sahu",batch:"2023",domain:"Marketing"},{name:"Jitendra Karan Sahu",batch:"2023",domain:"Marketing"},{name:"Surendra Sahu",batch:"2023",domain:"Marketing"},{name:"Priyanka Sahu",batch:"2023",domain:"Marketing"},{name:"Priyadarshani Sahoo",batch:"2023",domain:"Human Resource"},{name:"Ipsita Samal",batch:"2023",domain:"Human Resource"},{name:"Manasmita Dehury",batch:"2023",domain:"Human Resource"},{name:"Lipsarani Das",batch:"2023",domain:"Human Resource"},{name:"Binit Kumar Sahu",batch:"2023",domain:"Human Resource"},{name:"Jiban Jyoti Jena",batch:"2023",domain:"Human Resource"},{name:"Bikash Behera",batch:"2023",domain:"Human Resource & Marketing"},{name:"Abhijit Sahoo",batch:"2023",domain:"Human Resource"},{name:"Sunita Behera",batch:"2023",domain:"Human Resource"},{name:"Jilu Das",batch:"2023",domain:"Human Resource"},{name:"Gajendra Behera",batch:"2023",domain:"Human Resource"},{name:"Kalpana Sahoo",batch:"2023",domain:"Human Resource"}],Yd=[{name:"Fave Station",members:"Sibu, Chuman, Tusar, Prangya, Pritimayee, Prajolita, M.Anatha",year:"2023"},{name:"Young Valet",members:"Amit, Nensi, Rituprana, Monali, Sushree, Kasturi, Isha, Raju, Puja",year:"2023"},{name:"Milk Mistry",members:"Alok, Abhishek, Rahul, Chidatmika, Monalisa, Punam, Khusi, Titan",year:"2023"},{name:"Be Safe",members:"Ipshita, Lipsa, Rupali, Ankush, Jahir, Priti, Subhasmita, Sradhanjali",year:"2023"},{name:"Multi Complex",members:"Abhijeet, Rahul, Saswat, Bikash, Sneha, Puja, Ipsita, Snighdha, Santosh",year:"2023"},{name:"Rope Way",members:"Karan, Sana, Chiranjib, Soubhagya, Surendra, Priyanka, Lipsa, Arpita, Kalpana",year:"2023"},{name:"Aqua Bliss",members:"Jitendra Karan Sahu, Jiban Jyoti Jena, Rahul Biswal, Sanjay Manna, Santosh Sahu",year:"2024"},{name:"Farm Fresh",members:"Biswa, Suchismita Sahu, Swosti Swamsree Behera, Jyoti Sankar Das, Parimita Minz",year:"2024"},{name:"Bio Bloom (A)",members:"Jashmin Pradhan, Swagat Kumar Behera, Nafisha Parween, Nibedita Behera",year:"2024"},{name:"Bio Bloom (B)",members:"Binit, Lipsa, Kalpana, Supriya, Saswat, Arpita, Bikash, Jilu",year:"2024"}],Bg=[{name:"Abhishek Sahu",img:"/CTC NEW REACT WEBSITE/images/Disha & CSR/Abhishek Sahu.jpg"},{name:"Alok Kumar Sahoo",img:"/CTC NEW REACT WEBSITE/images/Disha & CSR/Alok Kumar Sahoo.jpg"},{name:"Chidatmika Pradhan",img:"/CTC NEW REACT WEBSITE/images/Disha & CSR/Chidatmika Pradhan.jpg"},{name:"Chuman Sahoo",img:"/CTC NEW REACT WEBSITE/images/Disha & CSR/Chuman Sahoo.jpg"},{name:"Khusi Bilas",img:"/CTC NEW REACT WEBSITE/images/Disha & CSR/Khusi Bilas.jpg"},{name:"M. Anata Laxmi",img:"/CTC NEW REACT WEBSITE/images/Disha & CSR/M. Anata Laxmi.jpg"},{name:"Monalisha Pradhan",img:"/CTC NEW REACT WEBSITE/images/Disha & CSR/Monalisha Pradhan.jpg"},{name:"Nibedita Dehury",img:"/CTC NEW REACT WEBSITE/images/Disha & CSR/Nibedita Dehury.jpg"},{name:"Poonam Priyadarshini Panda",img:"/CTC NEW REACT WEBSITE/images/Disha & CSR/Poonam priyadarshini Panda.jpg"},{name:"Pradyuda Sahoo",img:"/CTC NEW REACT WEBSITE/images/Disha & CSR/Pradyuda Sahoo.jpg"},{name:"Prajolita Dehury",img:"/CTC NEW REACT WEBSITE/images/Disha & CSR/Prajolita Dehury.jpg"},{name:"Prangyaparasmita Sahu",img:"/CTC NEW REACT WEBSITE/images/Disha & CSR/Prangyaparasmita Sahu.jpg"},{name:"Pritimayee Biswal",img:"/CTC NEW REACT WEBSITE/images/Disha & CSR/Pritimayee Biswal.jpg"},{name:"Rahul Kumar Sahu",img:"/CTC NEW REACT WEBSITE/images/Disha & CSR/Rahul kumar Sahu.jpg"},{name:"Sibuprasad Nayak",img:"/CTC NEW REACT WEBSITE/images/Disha & CSR/Sibuprasad.jpg"},{name:"Titan Ku Prusty",img:"/CTC NEW REACT WEBSITE/images/Disha & CSR/Titan ku Prusty.jpg"},{name:"Tusar Raman Naik",img:"/CTC NEW REACT WEBSITE/images/Disha & CSR/Tusar Raman Naik.jpg"}],Vd=[{label:"MAGAZINE 1",src:"/CTC%20NEW%20REACT%20WEBSITE/images/Disha & CSR/Published by  Management Students (1).pdf"},{label:"MAGAZINE 2",src:"/CTC%20NEW%20REACT%20WEBSITE/images/Disha & CSR/Disha (Episode 2) .pdf"},{label:"MAGAZINE 3",src:"/CTC%20NEW%20REACT%20WEBSITE/images/Disha & CSR/The children of today will make the India of tomorrow. 3.pdf"},{label:"MAGAZINE 4",src:"/CTC%20NEW%20REACT%20WEBSITE/images/Disha & CSR/Disha Episode-4.pdf"},{label:"MAGAZINE 5",src:"/CTC%20NEW%20REACT%20WEBSITE/images/Disha & CSR/Disha episode-5.pdf"},{label:"MAGAZINE 6",src:"/CTC%20NEW%20REACT%20WEBSITE/images/Disha & CSR/Disha Episode-6.pdf"},{label:"MAGAZINE 7",src:"/CTC%20NEW%20REACT%20WEBSITE/images/Disha & CSR/Disha ep-07.pdf"}],Kd=[...Array.from({length:3},(i,o)=>`/CTC%20NEW%20REACT%20WEBSITE/images/Disha & CSR/im${[1,2,3][o]}.jpg`),"/CTC%20NEW%20REACT%20WEBSITE/images/Disha & CSR/im5.jpg",...Array.from({length:24},(i,o)=>`/images/Disha & CSR/photo${o+1}.jpg`)],Qd=["normal","tall","wide","normal","normal","wide","tall","normal"],qd={2023:{bg:"#eff6ff",color:"#2563eb",border:"#bfdbfe"},2024:{bg:"#ecfdf5",color:"#059669",border:"#a7f3d0"},2025:{bg:"#fef3c7",color:"#d97706",border:"#fde68a"}},ti=12;function Ig({page:i,totalPages:o,total:l,label:d,onPage:m}){if(o<=1)return null;const f=[];if(o<=7)for(let u=1;u<=o;u++)f.push(u);else if(i<=4)for(let u=1;u<=7;u++)f.push(u);else if(i>=o-3)for(let u=o-6;u<=o;u++)f.push(u);else for(let u=i-3;u<=i+3;u++)f.push(u);return e.jsxs("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",gap:8,marginTop:20,flexWrap:"wrap"},children:[e.jsx("button",{onClick:()=>m(Math.max(1,i-1)),disabled:i===1,style:{background:i===1?"#f0f4f8":"#0c2340",color:i===1?"#94a3b8":"#ffcc00",border:"none",borderRadius:10,padding:"8px 16px",fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"0.8rem",fontWeight:700,cursor:i===1?"default":"pointer"},children:"← Prev"}),f.map(u=>e.jsx("button",{onClick:()=>m(u),style:{background:i===u?"#0c2340":"#fff",color:i===u?"#ffcc00":"#0c2340",border:`1.5px solid ${i===u?"#0c2340":"rgba(12,35,64,0.15)"}`,borderRadius:10,padding:"8px 14px",minWidth:38,fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"0.8rem",fontWeight:700,cursor:"pointer"},children:u},u)),e.jsx("button",{onClick:()=>m(Math.min(o,i+1)),disabled:i===o,style:{background:i===o?"#f0f4f8":"#0c2340",color:i===o?"#94a3b8":"#ffcc00",border:"none",borderRadius:10,padding:"8px 16px",fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"0.8rem",fontWeight:700,cursor:i===o?"default":"pointer"},children:"Next →"}),e.jsxs("span",{style:{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"0.75rem",color:"#94a3b8",fontWeight:600},children:["Page ",i," of ",o," · ",l," ",d||"members"]})]})}function zg(){const[i,o]=y.useState(null),[l,d]=y.useState(!1),[m,f]=y.useState(1),[u,w]=y.useState("all"),b=y.useMemo(()=>u==="all"?Jt:Jt.filter(B=>B.batch===u),[u]),v=Math.ceil(b.length/ti),x=y.useMemo(()=>b.slice((m-1)*ti,m*ti),[b,m]),h=B=>{w(B),f(1)},T=y.useMemo(()=>Kd.map((B,A)=>({src:B,size:Qd[A%Qd.length],alt:`Disha Impact Shot ${A+1}`})),[]),P=l?T:T.slice(0,10),K=y.useCallback(B=>{i!==null&&(B.key==="ArrowRight"&&o(A=>(A+1)%P.length),B.key==="ArrowLeft"&&o(A=>(A-1+P.length)%P.length),B.key==="Escape"&&o(null))},[i,P.length]);y.useEffect(()=>(window.addEventListener("keydown",K),()=>window.removeEventListener("keydown",K)),[K]);const W=i!==null?P[i]:null;return e.jsxs("div",{className:"tc-page",children:[e.jsx("style",{children:`
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
  `}),e.jsxs("div",{className:"tc-hero",children:[e.jsxs("div",{className:"tc-hero-inner",children:[e.jsxs("div",{className:"tc-hero-left",children:[e.jsxs("div",{className:"tc-hero-badge",children:[e.jsx("i",{className:"fa-solid fa-hand-holding-heart"})," Gymkhana · Social Wing"]}),e.jsxs("h1",{className:"tc-hero-h1",children:["DISHA ",e.jsx("em",{children:"&"})," CSR"]}),e.jsx("p",{className:"tc-hero-sub",children:"Advocating for the visually impaired and serving the less fortunate. We transform college life into a mission of compassion and professional responsibility."}),e.jsx("div",{className:"tc-hero-stats",children:[{val:`${Jt.length}+`,label:"Active Members"},{val:`${Yd.length}+`,label:"Projects"},{val:`${Vd.length}`,label:"Magazines"},{val:`${Kd.length}`,label:"Impact Shots"}].map((B,A)=>e.jsxs("div",{children:[e.jsx("div",{className:"tc-hero-stat-val",children:B.val}),e.jsx("div",{className:"tc-hero-stat-lbl",children:B.label})]},A))})]}),e.jsx("div",{className:"tc-hero-right",children:e.jsx("div",{className:"tc-hero-pills",children:[{dot:"#3b82f6",icon:"fa-solid fa-eye",label:"Visually Impaired Advocacy"},{dot:"#10b981",icon:"fa-solid fa-bowl-food",label:"Community Kitchen"},{dot:"#ffcc00",icon:"fa-solid fa-book-open",label:"Magazine Publications"},{dot:"#ec4899",icon:"fa-solid fa-hand-holding-heart",label:"Sewa Projects"},{dot:"#00d4ff",icon:"fa-solid fa-children",label:"Child Welfare"}].map((B,A)=>e.jsxs("div",{className:"tc-hero-pill",children:[e.jsx("span",{className:"tc-hero-pill-dot",style:{background:B.dot}}),e.jsx("i",{className:B.icon,style:{color:B.dot,width:16,textAlign:"center"}}),B.label]},A))})})]}),e.jsx("div",{className:"tc-hero-wave",children:e.jsx("svg",{viewBox:"0 0 1440 56",preserveAspectRatio:"none",children:e.jsx("path",{d:"M0,38 C360,56 1080,0 1440,38 L1440,56 L0,56 Z",fill:"#f0f4f8"})})})]}),e.jsxs("div",{className:"tc-main",children:[e.jsxs("div",{className:"tc-leaders-wrap",children:[e.jsxs("div",{className:"tc-section-head",children:[e.jsxs("div",{className:"tc-pill-tag",children:[e.jsx("i",{className:"fa-solid fa-users"})," Our Leadership"]}),e.jsxs("h2",{children:["Club Incharge & ",e.jsx("span",{children:"Secretaries"})]})]}),e.jsx("div",{className:"tc-leaders-grid",children:[{role:"Club Incharge",name:"Mr. Subhrajyoti Behera",img:"/CTC NEW REACT WEBSITE/images/OURTEAM/Subhrajyoti Sir.jpg",tag:"Faculty Lead"},{role:"Secretary (Boy)",name:"Mr. Abinash Behera",img:"/CTC NEW REACT WEBSITE/images/Disha & CSR/secretary_boy.jpg",tag:"Student Rep"},{role:"Secretary (Girl)",name:"Ms. Sana Rao",img:"/CTC NEW REACT WEBSITE/images/Disha & CSR/secretary_girl.jpg",tag:"Student Rep"}].map((B,A)=>e.jsxs("div",{className:"tc-leader-card",children:[e.jsx("div",{className:"tc-leader-img",children:e.jsx("img",{src:B.img,alt:B.role})}),e.jsxs("div",{className:"tc-leader-body",children:[e.jsx("h4",{children:B.role}),e.jsx("div",{style:{fontSize:"0.9rem",fontWeight:700,color:"#2563eb",marginBottom:"8px",fontFamily:"'Plus Jakarta Sans', sans-serif"},children:B.name}),e.jsx("span",{className:"tc-leader-tag",children:B.tag})]})]},A))})]}),e.jsx("div",{className:"tc-mission-static",children:e.jsxs("div",{className:"tc-mission-card",children:[e.jsx("img",{src:"/CTC NEW REACT WEBSITE/images/Disha & CSR/d1.jpg",alt:"Mission",className:"tc-mission-img"}),e.jsxs("div",{className:"tc-mission-overlay",children:[e.jsx("h3",{children:"Objective of Disha & CSR"}),e.jsx("p",{children:'Team Disha is a dedicated collective focused on making a sustainable impact on the lives of the less fortunate, with a specialized focus on the visually impaired community. Our mission is anchored in the spirit of "Sewa"—selfless service.'})]})]})}),e.jsxs("div",{className:"tc-techfest-wrap",style:{background:"#fff",borderRadius:22,margin:"40px 0"},children:[e.jsxs("div",{className:"tc-section-head",children:[e.jsxs("div",{className:"tc-pill-tag",children:[e.jsx("i",{className:"fa-solid fa-book-open"})," Publications"]}),e.jsxs("h2",{children:["Published ",e.jsx("span",{children:"Magazines"})]}),e.jsx("p",{children:"Episodes of Disha magazine capturing our journey and impact."})]}),e.jsx("div",{className:"tc-mag-grid",children:Vd.map((B,A)=>e.jsxs("div",{className:"tc-mag-card",onClick:()=>window.open(B.src,"_blank"),children:[e.jsxs("div",{className:"tc-mag-img",children:[e.jsx("img",{src:`/CTC%20NEW%20REACT%20WEBSITE/images/Disha & CSR/photo${A%5+1}.jpg`,alt:"preview"}),e.jsx("div",{className:"tc-mag-overlay-icon",children:e.jsx("i",{className:"fa-solid fa-file-pdf"})})]}),e.jsxs("div",{className:"tc-mag-body",children:[e.jsx("h3",{children:B.label}),e.jsxs("span",{className:"tc-mag-tag",children:["EPISODE ",A+1]}),e.jsxs("span",{className:"tc-mag-link",children:["VIEW PDF ",e.jsx("i",{className:"fa-solid fa-arrow-right"})]})]})]},A))})]}),e.jsxs("div",{className:"tc-team-wrap",children:[e.jsxs("div",{className:"tc-section-head",children:[e.jsxs("div",{className:"tc-pill-tag",children:[e.jsx("i",{className:"fa-solid fa-hand-holding-heart"})," Our Team"]}),e.jsxs("h2",{children:["Active ",e.jsx("span",{children:"Changemakers"})]}),e.jsxs("p",{children:[Jt.length," dedicated members working towards social impact."]})]}),e.jsx("div",{className:"tc-filter-bar",children:["all","2023","2024","2025"].map(B=>(B==="all"?Jt.length:Jt.filter(_=>_.batch===B).length)===0&&B!=="all"?null:e.jsx("button",{className:`tc-filter-btn${u===B?" active":""}`,onClick:()=>h(B),children:B==="all"?"All Batches":`Batch ${B}`},B))}),e.jsx("div",{className:"tc-table-wrap",children:e.jsxs("table",{className:"tc-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{width:48},children:"#"}),e.jsx("th",{children:"Name"}),e.jsx("th",{style:{width:100},children:"Batch"}),e.jsx("th",{children:"Domain"})]})}),e.jsx("tbody",{children:x.map((B,A)=>{const _=qd[B.batch]||qd[2023];return e.jsxs("tr",{children:[e.jsx("td",{style:{color:"#94a3b8",fontWeight:700},children:(m-1)*ti+A+1}),e.jsx("td",{style:{fontWeight:700},children:B.name}),e.jsx("td",{children:e.jsx("span",{className:"tc-batch-pill",style:{background:_.bg,color:_.color,border:`1px solid ${_.border}`},children:B.batch})}),e.jsx("td",{children:e.jsx("span",{className:"tc-domain-label",children:B.domain})})]},A)})})]})}),e.jsx(Ig,{page:m,totalPages:v,total:b.length,label:"members",onPage:f})]}),e.jsxs("div",{className:"tc-proj-wrap",children:[e.jsxs("div",{className:"tc-section-head",children:[e.jsxs("div",{className:"tc-pill-tag",children:[e.jsx("i",{className:"fa-solid fa-diagram-project"})," Impact"]}),e.jsxs("h2",{children:["Social ",e.jsx("span",{children:"Case Studies"})]}),e.jsx("p",{children:"Community projects executed by Team Disha & CSR."})]}),e.jsx("div",{className:"tc-proj-inner",children:Yd.map((B,A)=>e.jsxs("div",{className:"tc-proj-row",children:[e.jsx("div",{className:"tc-proj-num",children:String(A+1).padStart(2,"0")}),e.jsxs("div",{style:{flex:1},children:[e.jsx("div",{className:"tc-proj-name",children:B.name}),e.jsxs("div",{className:"tc-proj-sub",children:[e.jsx("i",{className:"fa-solid fa-users",style:{fontSize:"0.6rem",marginRight:4}}),B.members]})]}),e.jsxs("div",{className:"tc-proj-date",children:[e.jsx("i",{className:"fa-regular fa-calendar",style:{marginRight:5}}),B.year]})]},A))})]})]})," ",e.jsxs("div",{className:"tc-gallery-wrap",children:[e.jsxs("div",{className:"tc-section-head",children:[e.jsxs("div",{className:"tc-pill-tag",style:{background:"rgba(255,204,0,0.15)",color:"#ffcc00",border:"1px solid rgba(255,204,0,0.3)"},children:[e.jsx("i",{className:"fa-solid fa-images"})," Gallery"]}),e.jsxs("h2",{style:{color:"#fff"},children:["Visual ",e.jsx("span",{style:{color:"#ffcc00"},children:"Highlights"})]}),e.jsx("p",{style:{color:"rgba(255,255,255,0.45)"},children:"Captured moments of community outreach and selfless service."})]}),e.jsx("div",{className:"tc-gallery-grid",children:P.map((B,A)=>e.jsxs("div",{className:`tc-gallery-item ${B.size==="tall"?"tc-item-tall":""} ${B.size==="wide"?"tc-item-wide":""}`,onClick:()=>o(A),children:[e.jsx("img",{src:B.src,alt:B.alt,loading:"lazy"}),e.jsx("div",{className:"tc-gallery-overlay",children:e.jsx("i",{className:"fa-solid fa-expand"})})]},A))}),!l&&T.length>10&&e.jsxs("button",{className:"tc-btn-full",onClick:()=>d(!0),children:["EXPLORE FULL ARCHIVE (",T.length," IMAGES)"]})]}),e.jsxs("div",{className:"tc-ex-wrap",children:[e.jsxs("div",{className:"tc-section-head",children:[e.jsx("div",{className:"tc-pill-tag",style:{background:"rgba(255,204,0,0.15)",color:"#ffcc00",border:"1px solid rgba(255,204,0,0.3)"},children:"Legacy"}),e.jsxs("h2",{style:{color:"#fff"},children:["Compassionate ",e.jsx("span",{style:{color:"#ffcc00"},children:"Alumni"})]}),e.jsx("p",{style:{color:"rgba(255,255,255,0.45)"},children:"Former leaders who carried the torch of service."})]}),e.jsx("div",{className:"tc-ex-grid",children:Bg.map((B,A)=>e.jsxs("div",{className:"tc-ex-card",children:[e.jsx("div",{className:"tc-ex-img",children:e.jsx("img",{src:B.img,alt:B.name})}),e.jsx("p",{className:"tc-ex-name",children:B.name})]},A))})]}),W&&e.jsxs("div",{className:"gl-lightbox",onClick:B=>B.target===B.currentTarget&&o(null),children:[e.jsx("button",{className:"gl-close",onClick:()=>o(null),children:"✕"}),e.jsx("button",{className:"gl-nav",style:{left:"40px"},onClick:()=>o(B=>(B-1+P.length)%P.length),children:"←"}),e.jsxs("div",{className:"gl-panel",children:[e.jsx("img",{className:"gl-img",src:W.src,alt:"View"}),e.jsx("div",{style:{color:"#ffcc00",fontWeight:900,marginTop:"25px",fontSize:"1.2rem"},children:"DISHA & CSR ARCHIVES"}),e.jsx("div",{className:"gl-thumbs",children:P.map((B,A)=>e.jsx("div",{className:`gl-thumb ${i===A?"active":""}`,onClick:()=>o(A),children:e.jsx("img",{src:B.src,alt:"thumb"})},A))})]}),e.jsx("button",{className:"gl-nav",style:{right:"40px"},onClick:()=>o(B=>(B+1)%P.length),children:"→"})]})]})}const Wg={1:{version:"1.0",year:"2023",theme:"Innovation & Technology",color:"#3b82f6",colorDark:"#0c2340",img:"/CTC NEW REACT WEBSITE/images/TECHNOCRAT/TechFest1.0.jpg",about:["TechFest 1.0 is a celebration of innovation, creativity, and technology. It brings together students, developers, and innovators to showcase their technical projects and ideas. This event provides a platform for students to explore real-world problems and create impactful solutions through technology-driven projects and competitions.","Participants engaged in workshops, competitions, and seminars covering topics such as Artificial Intelligence, Internet of Things, Robotics, Software Development, and Machine Learning. TechFest 1.0 encourages collaboration, networking, and knowledge sharing among young innovators.","The event also features keynote speeches from industry leaders, mentorship sessions, and opportunities for students to showcase their startup ideas. TechFest 1.0 is designed to inspire, challenge, and recognize talent while providing a vibrant platform for learning and growth."],projects:[{name:"Human-Motion Detection",members:"Subham, Gyanaranjan, Chandanswain, Anata, Susree, Swarnalaxmi",year:"2023"},{name:"Eye Motion Detection",members:"Subasis, Abhijit, Satyadev, Subham, SK Akil",year:"2023"},{name:"Age Detection",members:"Tushar, Subodh",year:"2023"},{name:"Smart Home",members:"Shankar, Priyadarshan, Ashis, Sourav, Asutosh, Chandra, Suryakanta",year:"2023"},{name:"Gesture Control",members:"Sourav, Shankar, Rudra, Debasis, Nikhil, Somya Ranjan, Armstrong",year:"2023"},{name:"Student Attendance System",members:"Sneha, Priti Prangya, Sandhyarani, Smrutisikha",year:"2023"},{name:"Blind Person Assistant",members:"Priyadarshan, Satyabrata Ojha, Satyabrata Sahu, Sangita, Ananya, Anish, Subham",year:"2023"},{name:"LMS in Django",members:"Ashutosh, Chandra, Suryakanta, SK Akhil, Subham, Satyadev, Chandan, Anata, Susree, Swarnalaxmi, Rudra, Debasis, Nikhil, Somya Ranjan, Armstrong, Sneha, Priti Prangya, Sandhyarani, Smrutisikha, Sangita, Ananya, Anish, Subham",year:"2023"}],gallery:[26,27,28,29,30,31,33,34,36,35].map(i=>`/images/TECHNOCRAT/techfest1.0/IMG-20251002-WA00${i}.jpg`),galleryRest:[37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66].map(i=>`/images/TECHNOCRAT/techfest1.0/IMG-20251002-WA00${i}.jpg`)},2:{version:"2.0",year:"2024",theme:"Smart Systems & Automation",color:"#10b981",colorDark:"#0c2340",img:"/CTC NEW REACT WEBSITE/images/TECHNOCRAT/TechFest2.0.jpg",about:["TechFest 2.0 is a celebration of innovation, creativity, and technology. It brings together students, developers, and innovators to showcase their technical projects and ideas. This event provides a platform for students to explore real-world problems and create impactful solutions through technology-driven projects and competitions.","Participants will engage in workshops, competitions, and seminars, covering topics such as Artificial Intelligence, Internet of Things, Robotics, Software Development, and Machine Learning. TechFest 2.0 encourages collaboration, networking, and knowledge sharing among young innovators.","The event also features keynote speeches from industry leaders, mentorship sessions, and opportunities for students to showcase their startup ideas. TechFest 2.0 is designed to inspire, challenge, and recognize talent while providing a vibrant platform for learning and growth."],projects:[{name:"Automated Car",members:"Rakesh, Asutosh, Suryakant, Chandra",year:"2024"},{name:"Smart Parking System",members:"Priyadarshan, Rudraprasad, Sritam, Saswat",year:"2024"},{name:"Fire Detection & Prevention",members:"Sk, Nikhil",year:"2024"},{name:"Face To Aadhar",members:"Soumya, Aliva, Chinmayee",year:"2024"},{name:"Railway Track Accident Prevention",members:"Chandra, Ratnaprava, Monalisha",year:"2024"},{name:"IV Bag Monitoring System",members:"Anish, Debashis, Asutosh",year:"2024"},{name:"Plant Disease Detection By Leaf",members:"Rudra, Chandra",year:"2024"},{name:"Smart Traffic Control",members:"Asutosh, Yashita, Rudraprasad, Abhisek",year:"2024"},{name:"Smart Label Crossing System",members:"Anish, Swastika, Nikhil",year:"2024"},{name:"Automated Plant Watering System",members:"Chandan, Monalisha, Priyanka",year:"2024"},{name:"Women Safety",members:"Ananta, Elin, Bidusmita",year:"2024"},{name:"Product Failure Management System",members:"Priti",year:"2024"},{name:"Wildlife Detection",members:"Debasish, Archita, Sudipta",year:"2024"},{name:"Smart Reminder For Municipality",members:"Sangita, Jasmin, Saswat, Sritam",year:"2024"},{name:"Smart Home Security",members:"Smrutisikha, Arpita, Pramod",year:"2024"},{name:"Gas Level Monitoring System",members:"Sandhya, Sangita",year:"2024"},{name:"AI Mock Interview",members:"Sandhya, Sangita",year:"2024"},{name:"Drone For Delivery",members:"Abhijit, Asutosh, Suryakant",year:"2024"},{name:"Smart Restaurant Management System",members:"Anish, Sandhya, Sangita",year:"2024"}],gallery:[12,16,18,21,22,25,26,29,30,33].map(i=>`/images/TECHNOCRAT/techfest 2.0/IMG-20241120-WA00${i}.jpg`),galleryRest:[34,37,38,40,42,45,46,49,53,54,57,58,61,62].map(i=>`/images/TECHNOCRAT/techfest 2.0/IMG-20241120-WA00${i}.jpg`).concat([25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42].map(i=>`/images/TECHNOCRAT/techfest 2.0/img${i}.jpg`))},3:{version:"3.0",year:"2025",theme:"Viksit Bharat — Multi-Institution",color:"#f59e0b",colorDark:"#0c2340",img:"/CTC NEW REACT WEBSITE/images/TECHNOCRAT/TechFest3.0.jpg",about:["TechFest 3.0 is a vibrant celebration of innovation, creativity, and the spirit of Viksit Bharat. This edition brings a transformative platform where technology meets vision, empowering young minds to build solutions that contribute to a developed and progressive India.","Building on the success of TechFest 1.0 and 2.0—where only college students showcased their projects—TechFest 3.0 marks a historic moment as schools from outside the campus also participate, bringing their innovative projects and ideas to this grand stage.","This edition also features keynote sessions by industry experts, mentorship opportunities, and a dedicated arena for startup and research idea presentations. TechFest 3.0 is designed to inspire, challenge, and recognize emerging talent while fostering a culture of innovation that aligns with the vision of Viksit Bharat."],projects:[{name:"Emergency Fuel Delivery",members:"Aliva, Priyanka, Soumyaranjan, Sudhanshu",year:"2025"},{name:"Hostel Management System",members:"Aliva, Priyanka, Sudipta, Chinmayee, Ankita, Tulasi",year:"2025"},{name:"C & W Education Sponsorship Portal",members:"Yashita, Swastika, Pradyumna, Satyabrata",year:"2025"},{name:"Eco Re-Use",members:"Yashita, Swastika, Dattatreya, Om Prakash",year:"2025"},{name:"Line Up",members:"Abhisek, Rudraprasad, Ladly, Biswajit",year:"2025"},{name:"Skill Hub",members:"Krishna, Abhipsa, Trishna, Supriyanjali, Sasmita, Monalisha, Abhisek, Swastika, Priyadarshan, Arpita",year:"2025"},{name:"Food Waste Management System",members:"Saswat, Sudipta, Anshuman, Subhalaxmi",year:"2025"},{name:"Bus Tracking & Booking System",members:"Jasmin, Ratnaprava, Monalisha, Ananta, Priyanka, Priyani",year:"2025"},{name:"E-Jeevan Dan",members:"Bhagyalaxmi, Rimjhim, Selina, kajal, Bidusmita, Elin, Ipsita, Elina",year:"2025"},{name:"Smart Helmet",members:"Yash, Tanmay, Subham",year:"2025"}],gallery:Array.from({length:10},(i,o)=>`/images/TECHNOCRAT/techfest 3.0/${o+1}.jpg`),galleryRest:Array.from({length:37},(i,o)=>`/images/TECHNOCRAT/techfest 3.0/${o+11}.jpg`)}},Xd=["normal","tall","wide","normal","normal","wide","tall","normal","normal","normal"];function jo({version:i}){const[o,l]=y.useState(null),[d,m]=y.useState(!1),f=Wg[i],u=[...f.gallery,...f.galleryRest].map((x,h)=>({src:x,size:Xd[h%Xd.length],alt:`TechFest ${i}.0 - Photo ${h+1}`})),w=d?u:u.slice(0,10),b=y.useCallback(x=>{o!==null&&(x.key==="ArrowRight"&&l(h=>(h+1)%w.length),x.key==="ArrowLeft"&&l(h=>(h-1+w.length)%w.length),x.key==="Escape"&&l(null))},[o,w.length]);y.useEffect(()=>(window.addEventListener("keydown",b),()=>window.removeEventListener("keydown",b)),[b]);const v=o!==null?w[o]:null;return e.jsxs("div",{className:"tf-page",children:[e.jsx("style",{children:`
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
      `}),e.jsx("section",{className:"tf-hero",children:e.jsxs("div",{className:"tf-hero-content",children:[e.jsxs("div",{className:"tf-hero-left",children:[e.jsxs("div",{className:"tf-hero-badge",children:[e.jsx("i",{className:"fa-solid fa-bolt"})," Official Technocrat Mega-Event"]}),e.jsxs("h1",{children:["TECH",e.jsx("em",{style:{color:f.color},children:"FEST"})," ",f.version]}),e.jsxs("div",{className:"tf-theme-box",children:["Theme: ",f.theme]}),e.jsx("p",{children:"Where code meets creativity. A grand stage for the next generation of engineers to present disruptive solutions and technological breakthroughs."})]}),e.jsx("div",{className:"tf-hero-right",children:e.jsx("div",{className:"tf-hero-stats",children:[{icon:"fa-calendar-check",label:"EVENT YEAR",val:f.year},{icon:"fa-microchip",label:"PROJECTS",val:f.projects.length},{icon:"fa-camera-retro",label:"GALLERY",val:u.length}].map((x,h)=>e.jsxs("div",{className:"tf-hero-stat-card",children:[e.jsx("i",{className:`fa-solid ${x.icon}`,style:{color:"#ffcc00",fontSize:"1.4rem"}}),e.jsxs("div",{children:[e.jsx("div",{style:{color:"rgba(255,255,255,0.4)",fontSize:"0.65rem",fontWeight:800,letterSpacing:1},children:x.label}),e.jsx("div",{style:{color:"#fff",fontSize:"1.2rem",fontWeight:900},children:x.val})]})]},h))})})]})}),e.jsx("div",{className:"tf-wave-sep",children:e.jsx("svg",{viewBox:"0 0 1440 70",preserveAspectRatio:"none",children:e.jsx("path",{d:"M0,40 C320,80 720,0 1080,50 C1260,75 1380,30 1440,20 L1440,70 L0,70Z"})})}),e.jsx("section",{className:"tf-about",children:e.jsxs("div",{className:"tf-about-inner",children:[e.jsxs("div",{className:"tf-about-left",children:[e.jsx("span",{className:"tf-section-pill",children:"The History"}),e.jsxs("h2",{children:["About ",e.jsxs("span",{style:{color:f.color},children:["TechFest ",f.version]})]}),f.about.map((x,h)=>e.jsx("p",{children:x},h))]}),e.jsx("div",{className:"tf-about-right",children:e.jsx("div",{className:"tf-about-img-container",children:e.jsx("img",{src:f.img,alt:"TechFest Highlights"})})})]})}),e.jsxs("section",{className:"tf-projects",children:[e.jsxs("div",{className:"tf-projects-header",children:[e.jsx("span",{className:"tf-pill",children:"The Arena"}),e.jsxs("h2",{children:["Innovations ",e.jsx("span",{children:"Showcased"})]}),e.jsx("p",{children:"Every single project submitted and presented during this edition."})]}),e.jsx("div",{className:"tf-table-container",children:e.jsxs("table",{className:"tf-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{width:"60px"},children:"#"}),e.jsx("th",{style:{width:"30%"},children:"Project Title"}),e.jsx("th",{children:"Team Members"}),e.jsx("th",{style:{width:"100px"},children:"Year"})]})}),e.jsx("tbody",{children:f.projects.map((x,h)=>e.jsxs("tr",{children:[e.jsx("td",{className:"tf-proj-id",children:String(h+1).padStart(2,"0")}),e.jsx("td",{className:"tf-proj-title",children:x.name}),e.jsx("td",{className:"tf-member-list",children:x.members}),e.jsx("td",{style:{fontWeight:800,color:f.color},children:x.year})]},h))})]})})]}),e.jsxs("section",{className:"tf-gallery-section",children:[e.jsxs("div",{className:"tf-heading",children:[e.jsx("span",{className:"tf-pill",style:{background:"rgba(255,204,0,0.1)",color:"#ffcc00",borderColor:"rgba(255,204,0,0.2)"},children:"Visual Log"}),e.jsxs("h2",{style:{color:"#fff"},children:["Event ",e.jsx("span",{children:"Highlights"})]}),e.jsx("p",{style:{color:"rgba(255,255,255,0.4)"},children:"Captured moments of brilliance and technical prowess."})]}),e.jsx("div",{className:"tf-grid",children:w.map((x,h)=>e.jsxs("div",{className:`tf-item tf-item-${x.size}`,onClick:()=>l(h),children:[e.jsx("img",{src:x.src,alt:x.alt,loading:"lazy"}),e.jsx("div",{className:"tf-overlay",children:e.jsx("i",{className:"fa-solid fa-expand"})})]},h))}),!d&&u.length>10&&e.jsxs("button",{className:"tf-see-all-btn",onClick:()=>m(!0),children:["Explore All ",u.length," Photos"]})]}),v&&e.jsxs("div",{className:"gl-lightbox",onClick:x=>x.target===x.currentTarget&&l(null),children:[e.jsx("button",{className:"gl-lb-close",onClick:()=>l(null),children:e.jsx("i",{className:"fa-solid fa-xmark"})}),e.jsx("button",{className:"gl-lb-nav gl-lb-prev",onClick:()=>l(x=>(x-1+w.length)%w.length),children:e.jsx("i",{className:"fa-solid fa-chevron-left"})}),e.jsxs("div",{className:"gl-lb-panel",children:[e.jsx("img",{className:"gl-lb-img",src:v.src,alt:v.alt}),e.jsxs("div",{className:"gl-lb-caption",children:[e.jsxs("div",{style:{color:"#ffcc00",fontWeight:900,fontSize:"1.2rem",letterSpacing:"1px"},children:["TECHFEST ",i,".0 ARCHIVE"]}),e.jsxs("div",{style:{color:"#fff",fontSize:"0.9rem",opacity:.6,marginTop:"5px"},children:["Shot ",o+1," of ",w.length]})]}),e.jsx("div",{className:"gl-lb-thumbs",children:w.map((x,h)=>e.jsx("div",{className:`gl-lb-thumb ${o===h?"active":""}`,onClick:()=>l(h),children:e.jsx("img",{src:x.src,alt:"thumb"})},h))})]}),e.jsx("button",{className:"gl-lb-nav gl-lb-next",onClick:()=>l(x=>(x+1)%w.length),children:e.jsx("i",{className:"fa-solid fa-chevron-right"})})]}),e.jsx("footer",{className:"tf-footer-nav",children:e.jsxs("div",{className:"tf-footer-nav-inner",children:[e.jsxs(Ne,{to:"/gymkhana/technocrat",className:"tf-nav-link tf-nav-btn-secondary",children:[e.jsx("i",{className:"fa-solid fa-arrow-left-long"})," Back to Technocrat"]}),e.jsxs("div",{className:"tf-nav-group",children:[i>1&&e.jsxs(Ne,{to:`/gymkhana/techfest/${i-1}`,className:"tf-nav-link tf-nav-btn-secondary",children:[e.jsx("i",{className:"fa-solid fa-chevron-left"})," Edition ",i-1,".0"]}),i<3&&e.jsxs(Ne,{to:`/gymkhana/techfest/${i+1}`,className:"tf-nav-link tf-nav-btn-primary",children:["Explore Edition ",i+1,".0 ",e.jsx("i",{className:"fa-solid fa-arrow-right-long",style:{marginLeft:"5px"}})]})]})]})})]})}function Zd(){return e.jsx(jo,{version:1})}function ep(){return e.jsx(jo,{version:2})}function ap(){return e.jsx(jo,{version:3})}function Og(){y.useEffect(()=>{const i=document.querySelectorAll(".rv,.rv-l,.rv-r"),o=new IntersectionObserver(l=>l.forEach(d=>{d.isIntersecting&&d.target.classList.add("visible")}),{threshold:.07});return i.forEach(l=>o.observe(l)),()=>o.disconnect()},[])}function Sp({r:i="0,212,255"}){const o=y.useRef(null);return y.useEffect(()=>{const l=o.current;if(!l)return;const d=l.getContext("2d");let m;const f=()=>{l.width=l.offsetWidth,l.height=l.offsetHeight};f(),window.addEventListener("resize",f);const u=Array.from({length:48},()=>({x:Math.random()*l.width,y:Math.random()*l.height,r:Math.random()*1.8+.3,vx:(Math.random()-.5)*.32,vy:(Math.random()-.5)*.32,a:Math.random()*.4+.06})),w=()=>{d.clearRect(0,0,l.width,l.height),u.forEach(b=>{b.x+=b.vx,b.y+=b.vy,(b.x<0||b.x>l.width)&&(b.vx*=-1),(b.y<0||b.y>l.height)&&(b.vy*=-1),d.beginPath(),d.arc(b.x,b.y,b.r,0,Math.PI*2),d.fillStyle=`rgba(${i},${b.a})`,d.fill()}),u.forEach((b,v)=>u.slice(v+1).forEach(x=>{const h=Math.hypot(b.x-x.x,b.y-x.y);h<95&&(d.beginPath(),d.moveTo(b.x,b.y),d.lineTo(x.x,x.y),d.strokeStyle=`rgba(${i},${.055*(1-h/95)})`,d.lineWidth=.6,d.stroke())})),m=requestAnimationFrame(w)};return w(),()=>{cancelAnimationFrame(m),window.removeEventListener("resize",f)}},[i]),e.jsx("canvas",{ref:o,style:{position:"absolute",inset:0,width:"100%",height:"100%",pointerEvents:"none",zIndex:0}})}function Mg({onSuccess:i}){const[o,l]=y.useState(""),[d,m]=y.useState(""),[f,u]=y.useState(!1),[w,b]=y.useState(""),[v,x]=y.useState(!1),[h,T]=y.useState(!1);y.useEffect(()=>{setTimeout(()=>T(!0),50)},[]);const P=async W=>{if(W.preventDefault(),b(""),!o||!d){b("Please enter both username and password.");return}x(!0),await new Promise(L=>setTimeout(L,700)),x(!1),o==="login"&&d==="1010"?i():b("Invalid username or password. Please try again.")};return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
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
  `}),e.jsxs("div",{className:"naac-login-page",children:[e.jsx(Sp,{r:"0,212,255"}),e.jsx("div",{className:"naac-login-dots"}),e.jsx("div",{className:"naac-login-blob",style:{width:480,height:480,background:"radial-gradient(circle,rgba(45,125,210,0.22) 0%,transparent 70%)",top:-160,right:-80,animation:"naacFloat 9s ease-in-out infinite"}}),e.jsx("div",{className:"naac-login-blob",style:{width:340,height:340,background:"radial-gradient(circle,rgba(245,197,24,0.07) 0%,transparent 70%)",bottom:-100,left:-60,animation:"naacFloat 11s ease-in-out infinite reverse"}}),e.jsxs("div",{className:`naac-split-card${h?" show":""}`,children:[e.jsxs("div",{className:"naac-left-panel",children:[e.jsx("img",{className:"naac-panel-logo",src:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/naac-removebg-preview.png",alt:"NAAC",onError:W=>{W.target.src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c0/NAAC_logo.png/200px-NAAC_logo.png"}}),e.jsx("div",{className:"naac-divider"}),e.jsxs("div",{className:"naac-panel-title",children:["National Assessment and",e.jsx("span",{children:"Accreditation Council"})]}),e.jsxs("div",{className:"naac-panel-badges",children:[e.jsx("span",{className:"naac-panel-badge",children:"NAAC"}),e.jsx("span",{className:"naac-panel-badge",children:"UGC Recognized"}),e.jsx("span",{className:"naac-panel-badge",children:"7 Criteria"})]})]}),e.jsxs("div",{className:"naac-right-panel",children:[e.jsx("p",{className:"naac-right-label",children:"Secure Access"}),e.jsxs("h1",{className:"naac-right-heading",children:["NAAC ",e.jsx("span",{children:"Portal"})]}),e.jsx("p",{className:"naac-right-sub",children:"Creative Techno College — Accreditation Dashboard"}),w&&e.jsxs("div",{className:"naac-error",children:[e.jsx("i",{className:"fa-solid fa-triangle-exclamation",style:{marginTop:2,flexShrink:0}}),e.jsx("span",{children:w})]}),e.jsxs("form",{onSubmit:P,noValidate:!0,children:[e.jsxs("label",{className:"naac-field-label",children:[e.jsx("i",{className:"fa-solid fa-user"})," Username"]}),e.jsxs("div",{className:"naac-input-wrap",children:[e.jsx("span",{className:"naac-input-icon",children:e.jsx("i",{className:"fa-solid fa-id-card"})}),e.jsx("input",{type:"text",value:o,onChange:W=>l(W.target.value),placeholder:"Enter username",autoComplete:"username",required:!0})]}),e.jsxs("label",{className:"naac-field-label",children:[e.jsx("i",{className:"fa-solid fa-lock"})," Password"]}),e.jsxs("div",{className:"naac-input-wrap",children:[e.jsx("span",{className:"naac-input-icon",children:e.jsx("i",{className:"fa-solid fa-key"})}),e.jsx("input",{type:f?"text":"password",value:d,onChange:W=>m(W.target.value),placeholder:"Enter password",autoComplete:"current-password",required:!0}),e.jsx("button",{type:"button",className:"naac-eye-btn",onClick:()=>u(W=>!W),children:e.jsx("i",{className:`fa-solid ${f?"fa-eye-slash":"fa-eye"}`})})]}),e.jsx("button",{type:"submit",className:"naac-submit-btn",disabled:v,children:v?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"naac-spinner"}),"Authenticating…"]}):e.jsxs(e.Fragment,{children:[e.jsx("i",{className:"fa-solid fa-right-to-bracket"}),"Access Dashboard"]})})]}),e.jsxs("div",{className:"naac-secure-note",children:[e.jsx("i",{className:"fa-solid fa-shield-check"}),"Protected portal — authorised personnel only"]})]})]})]})]})}const Ln=[{num:"I",roman:"01",title:"Curricular Aspects",icon:"fa-book-open",color:"#3b82f6",glow:"59,130,246",grad:"linear-gradient(135deg,#1e3a8a,#3b82f6)",score:2.78,maxScore:3.5,docs:12,status:"Submitted"},{num:"II",roman:"02",title:"Teaching-Learning & Evaluation",icon:"fa-chalkboard-user",color:"#10b981",glow:"16,185,129",grad:"linear-gradient(135deg,#064e3b,#10b981)",score:3.12,maxScore:3.5,docs:18,status:"Submitted"},{num:"III",roman:"03",title:"Research, Innovations & Extension",icon:"fa-flask-conical",color:"#8b5cf6",glow:"139,92,246",grad:"linear-gradient(135deg,#2e1065,#8b5cf6)",score:1.85,maxScore:3.5,docs:9,status:"Under Review"},{num:"IV",roman:"04",title:"Infrastructure & Learning Resources",icon:"fa-building-columns",color:"#ef4444",glow:"239,68,68",grad:"linear-gradient(135deg,#7f1d1d,#ef4444)",score:2.94,maxScore:3.5,docs:14,status:"Submitted"},{num:"V",roman:"05",title:"Student Support & Progression",icon:"fa-users",color:"#f59e0b",glow:"245,158,11",grad:"linear-gradient(135deg,#78350f,#f59e0b)",score:3.05,maxScore:3.5,docs:16,status:"Submitted"},{num:"VI",roman:"06",title:"Governance, Leadership & Management",icon:"fa-sitemap",color:"#06b6d4",glow:"6,182,212",grad:"linear-gradient(135deg,#164e63,#06b6d4)",score:2.88,maxScore:3.5,docs:11,status:"Submitted"},{num:"VII",roman:"07",title:"Institutional Values & Best Practices",icon:"fa-star",color:"#ec4899",glow:"236,72,153",grad:"linear-gradient(135deg,#831843,#ec4899)",score:2.5,maxScore:3.5,docs:8,status:"Submitted"}];function Lg({score:i,color:o,label:l,delay:d=0}){const[m,f]=y.useState(0),u=y.useRef(null);y.useEffect(()=>{const x=new IntersectionObserver(([h])=>{if(!h.isIntersecting)return;const T=performance.now(),P=1600,K=W=>{const L=Math.min((W-T)/P,1),B=1-Math.pow(1-L,3);f(i*B),L<1&&requestAnimationFrame(K)};requestAnimationFrame(K)},{threshold:.4});return u.current&&x.observe(u.current),()=>x.disconnect()},[i]);const w=38,b=2*Math.PI*w,v=b*(1-m/4);return e.jsxs("div",{ref:u,style:{display:"flex",flexDirection:"column",alignItems:"center",gap:8},children:[e.jsxs("div",{style:{position:"relative",width:96,height:96},children:[e.jsxs("svg",{width:96,height:96,viewBox:"0 0 96 96",style:{transform:"rotate(-90deg)"},children:[e.jsx("circle",{cx:48,cy:48,r:w,fill:"none",stroke:"rgba(255,255,255,0.06)",strokeWidth:7}),e.jsx("circle",{cx:48,cy:48,r:w,fill:"none",stroke:o,strokeWidth:7,strokeDasharray:b,strokeDashoffset:v,strokeLinecap:"round",style:{filter:`drop-shadow(0 0 6px ${o}80)`}})]}),e.jsxs("div",{style:{position:"absolute",inset:0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[e.jsx("span",{style:{fontFamily:"'Outfit',sans-serif",fontWeight:900,fontSize:"1.1rem",color:"#fff",lineHeight:1},children:m.toFixed(2)}),e.jsx("span",{style:{fontFamily:"'Outfit',sans-serif",fontSize:"0.55rem",fontWeight:600,color:"rgba(255,255,255,0.35)"},children:"/4.00"})]})]}),e.jsx("span",{style:{fontFamily:"'Outfit',sans-serif",fontSize:"0.62rem",fontWeight:700,color:"rgba(255,255,255,0.4)",textTransform:"uppercase",letterSpacing:"0.6px",textAlign:"center",maxWidth:90,lineHeight:1.4},children:l})]})}function Dg({c:i,i:o}){const[l,d]=y.useState(!1),m=i.score/4*100,f=i.status==="Submitted"?"#10b981":"#f59e0b";return e.jsxs("a",{href:`#crit-${o+1}`,className:"rv",style:{display:"block",textDecoration:"none",background:"#fff",borderRadius:22,overflow:"hidden",border:"1px solid rgba(10,22,40,0.07)",boxShadow:l?`0 20px 56px rgba(${i.glow},0.18)`:"0 4px 20px rgba(10,22,40,0.07)",transform:l?"translateY(-10px) scale(1.01)":"none",transition:"all 0.32s cubic-bezier(0.4,0,0.2,1)",animationDelay:`${o*.07}s`},onMouseEnter:()=>d(!0),onMouseLeave:()=>d(!1),children:[e.jsxs("div",{style:{background:i.grad,padding:"26px 22px 20px",position:"relative",overflow:"hidden"},children:[e.jsx("div",{style:{position:"absolute",right:-4,top:-14,fontFamily:"'Outfit',sans-serif",fontWeight:900,fontSize:"6rem",color:"rgba(255,255,255,0.07)",lineHeight:1,userSelect:"none",transform:l?"scale(1.1) translateX(-6px)":"scale(1)",transition:"transform 0.4s ease"},children:i.roman}),e.jsx("div",{style:{width:50,height:50,borderRadius:14,background:"rgba(255,255,255,0.15)",backdropFilter:"blur(8px)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.2rem",color:"#fff",marginBottom:14,transform:l?"scale(1.12) rotate(-6deg)":"none",transition:"transform 0.3s ease",position:"relative",zIndex:1},children:e.jsx("i",{className:`fa-solid ${i.icon}`})}),e.jsxs("div",{style:{fontFamily:"'Outfit',sans-serif",fontWeight:800,fontSize:"0.98rem",color:"#fff",lineHeight:1.35,marginBottom:16,position:"relative",zIndex:1},children:["Criterion ",i.num,": ",i.title]}),e.jsxs("div",{style:{position:"relative",zIndex:1},children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:5},children:[e.jsx("span",{style:{fontFamily:"'Outfit',sans-serif",fontSize:"0.65rem",fontWeight:700,color:"rgba(255,255,255,0.5)",textTransform:"uppercase",letterSpacing:.5},children:"Score"}),e.jsxs("span",{style:{fontFamily:"'Outfit',sans-serif",fontSize:"0.8rem",fontWeight:800,color:"#fff"},children:[i.score," / 4.00"]})]}),e.jsx("div",{style:{height:5,background:"rgba(255,255,255,0.12)",borderRadius:3,overflow:"hidden"},children:e.jsx("div",{style:{height:"100%",background:"rgba(255,255,255,0.85)",borderRadius:3,width:`${m}%`}})})]})]}),e.jsxs("div",{style:{padding:"14px 22px",display:"flex",alignItems:"center",justifyContent:"space-between",borderTop:"1px solid rgba(10,22,40,0.06)"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[e.jsx("div",{style:{width:8,height:8,borderRadius:"50%",background:f,boxShadow:`0 0 8px ${f}80`}}),e.jsx("span",{style:{fontFamily:"'Outfit',sans-serif",fontSize:"0.72rem",fontWeight:700,color:"#4a6080"},children:i.status}),e.jsx("span",{style:{fontFamily:"'Outfit',sans-serif",fontSize:"0.7rem",color:"#94a3b8"},children:"·"}),e.jsxs("span",{style:{fontFamily:"'Outfit',sans-serif",fontSize:"0.72rem",color:"#94a3b8",fontWeight:600},children:[i.docs," docs"]})]}),e.jsx("div",{style:{width:32,height:32,borderRadius:"50%",background:i.grad,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"0.7rem",color:"#fff",transform:l?"translateX(6px)":"none",transition:"transform 0.25s ease",boxShadow:l?`0 4px 14px rgba(${i.glow},0.5)`:"none"},children:e.jsx("i",{className:"fa-solid fa-arrow-right"})})]})]})}function Fg({onLogout:i}){Og();const o=(Ln.reduce((f,u)=>f+u.score,0)/Ln.length).toFixed(2),l=`
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
  `,d=[{val:"7",lbl:"Criteria Covered",icon:"fa-layer-group",col:"linear-gradient(135deg,#1e3a8a,#3b82f6)"},{val:o,lbl:"Avg. CGPA",icon:"fa-chart-line",col:"linear-gradient(135deg,#064e3b,#10b981)"},{val:"88+",lbl:"Documents Filed",icon:"fa-file-shield",col:"linear-gradient(135deg,#2e1065,#8b5cf6)"},{val:"A",lbl:"Target Grade",icon:"fa-medal",col:"linear-gradient(135deg,#78350f,#f59e0b)"}],m=[{title:"Executive Summary",meta:"SSR Part A · 12 pages",col:"linear-gradient(135deg,#1e3a8a,#3b82f6)",status:"Approved",statusCol:"#10b981"},...Ln.map((f,u)=>({title:`Criterion ${f.num} — ${f.title}`,meta:`${f.docs} documents · Score ${f.score}/4.00`,col:f.grad,status:f.status,statusCol:f.status==="Submitted"?"#10b981":"#f59e0b"})),{title:"Evaluative Report",meta:"SSR Part C · Departmental",col:"linear-gradient(135deg,#164e63,#06b6d4)",status:"Submitted",statusCol:"#10b981"}];return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:l}),e.jsxs("div",{className:"nd-page",children:[e.jsxs("div",{className:"nd-hero",children:[e.jsx("div",{className:"nd-hero-bg-grid"}),e.jsx("div",{className:"nd-hero-scan"}),e.jsx("div",{className:"nd-hero-glow1"}),e.jsx("div",{className:"nd-hero-glow2"}),e.jsx(Sp,{r:"0,212,255"}),e.jsxs("button",{className:"nd-logout",onClick:i,children:[e.jsx("i",{className:"fa-solid fa-right-from-bracket"}),"Logout"]}),e.jsxs("div",{className:"nd-hero-content",children:[e.jsxs("div",{className:"nd-hero-badge",children:[e.jsx("i",{className:"fa-solid fa-shield-halved"}),"NAAC Accreditation 2024–25"]}),e.jsxs("h1",{className:"nd-hero-h1",children:["National Assessment",e.jsx("br",{}),"& ",e.jsx("em",{children:"Accreditation"})]}),e.jsx("p",{className:"nd-hero-p",children:"Creative Techno College, Angul, Odisha — Self Study Report comprising all 7 criteria, evidence documents and institutional data for NAAC Grade A certification."}),e.jsx("div",{className:"nd-hero-tags",children:["UGC Recognized","AICTE Approved","Utkal University","Est. 2010","ISO Certified"].map((f,u)=>e.jsxs("span",{className:"nd-hero-tag",children:[e.jsx("i",{className:"fa-solid fa-circle-check",style:{color:"#00d4ff",fontSize:"0.65rem"}}),f]},u))})]})]}),e.jsx("div",{className:"nd-wave",children:e.jsx("svg",{viewBox:"0 0 1440 60",preserveAspectRatio:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M0,40 C360,60 1080,0 1440,40 L1440,60 L0,60 Z",fill:"#f0f4f8"})})}),e.jsx("div",{className:"nd-stats-band",children:d.map((f,u)=>e.jsxs("div",{className:"nd-stat-card rv",style:{animationDelay:`${u*.08}s`},children:[e.jsx("div",{className:"nd-stat-ico",style:{background:f.col},children:e.jsx("i",{className:`fa-solid ${f.icon}`})}),e.jsxs("div",{children:[e.jsx("div",{className:"nd-stat-num",children:f.val}),e.jsx("div",{className:"nd-stat-lbl",children:f.lbl})]})]},u))}),e.jsxs("section",{className:"nd-rings-sec",children:[e.jsxs("div",{style:{maxWidth:1100,margin:"0 auto",textAlign:"center"},children:[e.jsx("span",{className:"section-label",style:{color:"rgba(0,212,255,0.7)"},children:"Performance Overview"}),e.jsxs("h2",{className:"section-title",style:{color:"#fff"},children:["Criteria-wise ",e.jsx("span",{style:{color:"#f5c518"},children:"Scores"})]})]}),e.jsx("div",{className:"nd-rings-grid",children:Ln.map((f,u)=>e.jsx("div",{className:"rv",style:{transitionDelay:`${u*.07}s`},children:e.jsx(Lg,{score:f.score,color:f.color,label:`Criterion ${f.num}`})},u))}),e.jsxs("div",{className:"nd-cgpa-box rv",style:{transitionDelay:"0.5s"},children:[e.jsx("div",{style:{fontFamily:"'Outfit',sans-serif",fontSize:"0.68rem",fontWeight:800,color:"rgba(255,255,255,0.35)",textTransform:"uppercase",letterSpacing:2.5,marginBottom:8},children:"Overall CGPA"}),e.jsx("div",{className:"nd-cgpa-val",children:o}),e.jsx("div",{style:{fontFamily:"'Outfit',sans-serif",fontSize:"0.78rem",color:"rgba(255,255,255,0.3)",marginTop:10},children:"Out of 4.00 — Target: Grade A"}),e.jsx("div",{style:{marginTop:16,display:"flex",justifyContent:"center",gap:16},children:["C","B","B+","A","A+"].map((f,u)=>{const w=[1.51,2.01,2.51,3.01,3.51],b=parseFloat(o)>=w[u];return e.jsx("div",{style:{textAlign:"center"},children:e.jsx("div",{style:{width:36,height:36,borderRadius:10,background:b?f==="A"?"linear-gradient(135deg,#f5c518,#f59e0b)":"rgba(255,255,255,0.12)":"rgba(255,255,255,0.04)",border:`2px solid ${b?f==="A"?"#f5c518":"rgba(255,255,255,0.2)":"rgba(255,255,255,0.07)"}`,display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"'Outfit',sans-serif",fontWeight:900,fontSize:"0.9rem",color:b?"#fff":"rgba(255,255,255,0.15)"},children:f})},u)})})]})]}),e.jsxs("section",{className:"nd-crit-sec",children:[e.jsxs("div",{style:{maxWidth:1240,margin:"0 auto",textAlign:"center"},children:[e.jsx("span",{className:"section-label",children:"Documentation"}),e.jsxs("h2",{className:"section-title",children:["Select a ",e.jsx("span",{children:"Criterion"})]}),e.jsx("p",{className:"section-subtitle",style:{margin:"0 auto"},children:"Click any criterion to access its complete SSR documentation, supporting data and evidence files."})]}),e.jsx("div",{className:"nd-crit-grid",children:Ln.map((f,u)=>e.jsx(Dg,{c:f,i:u},u))})]}),e.jsxs("section",{className:"nd-ssr-sec",children:[e.jsxs("div",{style:{maxWidth:900,margin:"0 auto",textAlign:"center"},children:[e.jsx("span",{className:"section-label",children:"Self Study Report"}),e.jsxs("h2",{className:"section-title",children:["Document ",e.jsx("span",{children:"Timeline"})]}),e.jsx("p",{className:"section-subtitle",style:{margin:"0 auto"},children:"Complete SSR document trail — all submissions and their current status."})]}),e.jsx("div",{className:"nd-timeline",children:m.map((f,u)=>e.jsxs("div",{className:"nd-tl-item rv",style:{transitionDelay:`${u*.05}s`},children:[e.jsx("div",{className:"nd-tl-dot",style:{background:f.col},children:e.jsx("i",{className:"fa-solid fa-file-lines"})}),e.jsxs("div",{className:"nd-tl-body",children:[e.jsxs("div",{children:[e.jsx("div",{className:"nd-tl-title",children:f.title}),e.jsx("div",{className:"nd-tl-meta",children:f.meta})]}),e.jsxs("div",{className:"nd-tl-badge",style:{background:`${f.statusCol}18`,border:`1.5px solid ${f.statusCol}40`,color:f.statusCol},children:[e.jsx("i",{className:"fa-solid fa-circle-check"}),f.status]})]})]},u))})]}),e.jsx("div",{className:"nd-grade-banner",children:e.jsxs("div",{style:{maxWidth:700,margin:"0 auto"},children:[e.jsx("div",{style:{fontFamily:"'Outfit',sans-serif",fontSize:"0.7rem",fontWeight:800,color:"rgba(245,197,24,0.7)",letterSpacing:3,textTransform:"uppercase",marginBottom:12},children:"Our Goal"}),e.jsxs("h2",{style:{fontFamily:"'Outfit',sans-serif",fontWeight:900,fontSize:"clamp(2rem,4vw,3rem)",color:"#fff",letterSpacing:-1.5,marginBottom:14,lineHeight:1.1},children:["Targeting ",e.jsx("span",{style:{color:"#f5c518"},children:"NAAC Grade A"}),e.jsx("br",{}),"for Creative Techno College"]}),e.jsx("p",{style:{color:"rgba(255,255,255,0.4)",fontSize:"0.9rem",lineHeight:1.75},children:"Committed to academic excellence, institutional growth and quality assurance across all 7 criteria of the NAAC Self Study Report framework."})]})})]})]})}function Hg(){const[i,o]=y.useState(!1);return i?e.jsx(Fg,{onLogout:()=>o(!1)}):e.jsx(Mg,{onSuccess:()=>o(!0)})}function _g(){y.useEffect(()=>{const i=document.querySelectorAll(".rv,.rv-l,.rv-r"),o=new IntersectionObserver(l=>l.forEach(d=>{d.isIntersecting&&d.target.classList.add("visible")}),{threshold:.07});return i.forEach(l=>o.observe(l)),()=>o.disconnect()},[])}function Cp({r:i="0,212,255"}){const o=y.useRef(null);return y.useEffect(()=>{const l=o.current;if(!l)return;const d=l.getContext("2d");let m;const f=()=>{l.width=l.offsetWidth,l.height=l.offsetHeight};f(),window.addEventListener("resize",f);const u=Array.from({length:44},()=>({x:Math.random()*l.width,y:Math.random()*l.height,r:Math.random()*1.8+.3,vx:(Math.random()-.5)*.28,vy:(Math.random()-.5)*.28,a:Math.random()*.35+.06})),w=()=>{d.clearRect(0,0,l.width,l.height),u.forEach(b=>{b.x+=b.vx,b.y+=b.vy,(b.x<0||b.x>l.width)&&(b.vx*=-1),(b.y<0||b.y>l.height)&&(b.vy*=-1),d.beginPath(),d.arc(b.x,b.y,b.r,0,Math.PI*2),d.fillStyle=`rgba(${i},${b.a})`,d.fill()}),u.forEach((b,v)=>u.slice(v+1).forEach(x=>{const h=Math.hypot(b.x-x.x,b.y-x.y);h<90&&(d.beginPath(),d.moveTo(b.x,b.y),d.lineTo(x.x,x.y),d.strokeStyle=`rgba(${i},${.05*(1-h/90)})`,d.lineWidth=.5,d.stroke())})),m=requestAnimationFrame(w)};return w(),()=>{cancelAnimationFrame(m),window.removeEventListener("resize",f)}},[i]),e.jsx("canvas",{ref:o,style:{position:"absolute",inset:0,width:"100%",height:"100%",pointerEvents:"none",zIndex:0}})}function Ug({onSuccess:i}){const[o,l]=y.useState(""),[d,m]=y.useState(""),[f,u]=y.useState(!1),[w,b]=y.useState(""),[v,x]=y.useState(!1),[h,T]=y.useState(!1);y.useEffect(()=>{setTimeout(()=>T(!0),50)},[]);const P=async W=>{if(W.preventDefault(),b(""),!o||!d){b("Please enter both username and password.");return}x(!0),await new Promise(L=>setTimeout(L,700)),x(!1),o==="login"&&d==="1010"?i():b("Invalid username or password. Please try again.")};return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
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
  `}),e.jsxs("div",{className:"nba-login-page",children:[e.jsx(Cp,{r:"0,212,255"}),e.jsx("div",{className:"nba-login-dots"}),e.jsx("div",{className:"nba-login-blob",style:{width:500,height:500,background:"radial-gradient(circle,rgba(45,125,210,0.22) 0%,transparent 70%)",top:-160,right:-80,animation:"nbaFloat 9s ease-in-out infinite"}}),e.jsx("div",{className:"nba-login-blob",style:{width:340,height:340,background:"radial-gradient(circle,rgba(0,212,255,0.07) 0%,transparent 70%)",bottom:-100,left:-60,animation:"nbaFloat 11s ease-in-out infinite reverse"}}),e.jsxs("div",{className:`nba-split-card${h?" show":""}`,children:[e.jsxs("div",{className:"nba-left-panel",children:[e.jsx("img",{className:"nba-panel-logo",src:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/NBA-removebg-preview.png",alt:"NBA",onError:W=>{W.target.parentElement.innerHTML='<span style="font-size:5rem">🏅</span>'}}),e.jsx("div",{className:"nba-panel-divider"}),e.jsxs("div",{className:"nba-panel-title",children:["National Board of",e.jsx("span",{children:"Accreditation"})]}),e.jsxs("div",{className:"nba-panel-badges",children:[e.jsx("span",{className:"nba-panel-badge",children:"NBA"}),e.jsx("span",{className:"nba-panel-badge",children:"AICTE Linked"}),e.jsx("span",{className:"nba-panel-badge",children:"OBE Framework"})]})]}),e.jsxs("div",{className:"nba-right-panel",children:[e.jsx("p",{className:"nba-right-label",children:"Secure Access"}),e.jsxs("h1",{className:"nba-right-heading",children:["NBA ",e.jsx("span",{children:"Portal"})]}),e.jsx("p",{className:"nba-right-sub",children:"Creative Techno College — Accreditation Dashboard"}),w&&e.jsxs("div",{className:"nba-error",children:[e.jsx("i",{className:"fa-solid fa-triangle-exclamation",style:{marginTop:2,flexShrink:0}}),e.jsx("span",{children:w})]}),e.jsxs("form",{onSubmit:P,noValidate:!0,children:[e.jsxs("label",{className:"nba-field-label",children:[e.jsx("i",{className:"fa-solid fa-user"}),"Username"]}),e.jsxs("div",{className:"nba-input-wrap",children:[e.jsx("span",{className:"nba-input-icon",children:e.jsx("i",{className:"fa-solid fa-id-card"})}),e.jsx("input",{type:"text",value:o,onChange:W=>l(W.target.value),placeholder:"Enter username",autoComplete:"username",required:!0})]}),e.jsxs("label",{className:"nba-field-label",children:[e.jsx("i",{className:"fa-solid fa-lock"}),"Password"]}),e.jsxs("div",{className:"nba-input-wrap",children:[e.jsx("span",{className:"nba-input-icon",children:e.jsx("i",{className:"fa-solid fa-key"})}),e.jsx("input",{type:f?"text":"password",value:d,onChange:W=>m(W.target.value),placeholder:"Enter password",autoComplete:"current-password",required:!0}),e.jsx("button",{type:"button",className:"nba-eye-btn",onClick:()=>u(W=>!W),children:e.jsx("i",{className:`fa-solid ${f?"fa-eye-slash":"fa-eye"}`})})]}),e.jsx("button",{type:"submit",className:"nba-submit-btn",disabled:v,children:v?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"nba-spinner"}),"Authenticating…"]}):e.jsxs(e.Fragment,{children:[e.jsx("i",{className:"fa-solid fa-right-to-bracket"}),"Access Dashboard"]})})]}),e.jsxs("div",{className:"nba-secure-note",children:[e.jsx("i",{className:"fa-solid fa-shield-check"}),"Protected portal — authorised personnel only"]})]})]})]})]})}const $g=[{num:"1",title:"Vision, Mission & Programme Educational Objectives",icon:"fa-bullseye",color:"#f59e0b",glow:"245,158,11",grad:"linear-gradient(135deg,#78350f,#f59e0b)",docs:8},{num:"2",title:"Programme Curriculum & Teaching-Learning Processes",icon:"fa-book-open",color:"#3b82f6",glow:"59,130,246",grad:"linear-gradient(135deg,#1e3a8a,#3b82f6)",docs:14},{num:"3",title:"Course Outcomes & Programme Outcomes",icon:"fa-chart-line",color:"#10b981",glow:"16,185,129",grad:"linear-gradient(135deg,#064e3b,#10b981)",docs:12},{num:"4",title:"Students' Performance",icon:"fa-user-graduate",color:"#8b5cf6",glow:"139,92,246",grad:"linear-gradient(135deg,#2e1065,#8b5cf6)",docs:10},{num:"5",title:"Faculty Information & Contributions",icon:"fa-chalkboard-user",color:"#06b6d4",glow:"6,182,212",grad:"linear-gradient(135deg,#164e63,#06b6d4)",docs:16},{num:"6",title:"Facilities & Technical Support",icon:"fa-building",color:"#ef4444",glow:"239,68,68",grad:"linear-gradient(135deg,#7f1d1d,#ef4444)",docs:9},{num:"7",title:"Continuous Improvement",icon:"fa-arrows-rotate",color:"#ec4899",glow:"236,72,153",grad:"linear-gradient(135deg,#831843,#ec4899)",docs:7}],tp=[{abbr:"PEO",full:"Programme Educational Objectives",icon:"fa-bullseye",desc:"Broad statements describing career and professional accomplishments graduates are expected to achieve within a few years after graduation.",color:"#3b82f6"},{abbr:"PO",full:"Programme Outcomes",icon:"fa-graduation-cap",desc:"Attributes and skills that students should possess at the time of graduation — knowledge, skills and attitudes.",color:"#00d4ff"},{abbr:"PSO",full:"Programme Specific Outcomes",icon:"fa-star",desc:"Domain-specific competencies expected of graduates of a particular programme, beyond the standard POs.",color:"#2d7dd2"},{abbr:"CO",full:"Course Outcomes",icon:"fa-book",desc:"Specific competencies students will demonstrate upon successful completion of each individual course.",color:"#1a4a8a"}];function Gg({prog:i}){const[o,l]=y.useState(!1);return e.jsxs("div",{onMouseEnter:()=>l(!0),onMouseLeave:()=>l(!1),style:{background:"#fff",borderRadius:18,padding:"20px 22px",border:"1px solid rgba(10,22,40,0.07)",boxShadow:o?"0 12px 36px rgba(10,22,40,0.13)":"0 2px 12px rgba(10,22,40,0.06)",transform:o?"translateY(-5px)":"none",transition:"all 0.28s ease",cursor:"default"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:12},children:[e.jsx("div",{style:{fontFamily:"'Outfit',sans-serif",fontWeight:800,fontSize:"0.95rem",color:"#0a1628"},children:i.name}),e.jsx("div",{style:{background:`${i.color}18`,border:`1.5px solid ${i.color}40`,color:i.color,fontFamily:"'Outfit',sans-serif",fontSize:"0.65rem",fontWeight:800,padding:"3px 10px",borderRadius:20,letterSpacing:.5},children:i.badge})]}),e.jsx("div",{style:{fontFamily:"'Outfit',sans-serif",fontSize:"0.75rem",color:"#4a6080",marginBottom:14,fontWeight:500},children:i.dept}),i.metrics.map((d,m)=>e.jsxs("div",{style:{marginBottom:m<i.metrics.length-1?10:0},children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:4},children:[e.jsx("span",{style:{fontFamily:"'Outfit',sans-serif",fontSize:"0.7rem",fontWeight:700,color:"#4a6080"},children:d.label}),e.jsx("span",{style:{fontFamily:"'Outfit',sans-serif",fontSize:"0.7rem",fontWeight:800,color:i.color},children:d.val})]}),e.jsx("div",{style:{height:5,background:`${i.color}18`,borderRadius:3,overflow:"hidden"},children:e.jsx("div",{style:{height:"100%",background:i.color,borderRadius:3,width:o?`${d.pct}%`:"0%",transition:`width ${.8+m*.15}s cubic-bezier(0.4,0,0.2,1)`}})})]},m))]})}function Jg({onLogout:i}){_g();const o=`
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
  `,l=[{val:"7",lbl:"Criteria",icon:"fa-layer-group",col:"linear-gradient(135deg,#1e3a8a,#3b82f6)"},{val:"4",lbl:"Programs",icon:"fa-graduation-cap",col:"linear-gradient(135deg,#164e63,#06b6d4)"},{val:"OBE",lbl:"Framework",icon:"fa-arrows-spin",col:"linear-gradient(135deg,#064e3b,#10b981)"},{val:"NBA",lbl:"Accreditation",icon:"fa-medal",col:"linear-gradient(135deg,#2e1065,#8b5cf6)"},{val:"A+",lbl:"Target",icon:"fa-star",col:"linear-gradient(135deg,#0c1f3d,#2d7dd2)"}],d=[{name:"B.Tech CSE",dept:"Computer Science & Engineering",badge:"Accredited",color:"#3b82f6",metrics:[{label:"PO Attainment",val:"78%",pct:78},{label:"CO Attainment",val:"83%",pct:83},{label:"Pass Rate",val:"91%",pct:91}]},{name:"B.Tech ECE",dept:"Electronics & Communication Engg.",badge:"Accredited",color:"#10b981",metrics:[{label:"PO Attainment",val:"74%",pct:74},{label:"CO Attainment",val:"79%",pct:79},{label:"Pass Rate",val:"88%",pct:88}]},{name:"B.Tech MECH",dept:"Mechanical Engineering",badge:"Applied",color:"#06b6d4",metrics:[{label:"PO Attainment",val:"71%",pct:71},{label:"CO Attainment",val:"76%",pct:76},{label:"Pass Rate",val:"85%",pct:85}]},{name:"B.Tech CIVIL",dept:"Civil Engineering",badge:"Applied",color:"#8b5cf6",metrics:[{label:"PO Attainment",val:"69%",pct:69},{label:"CO Attainment",val:"74%",pct:74},{label:"Pass Rate",val:"87%",pct:87}]}];return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:o}),e.jsxs("div",{className:"nb-page",children:[e.jsxs("div",{className:"nb-hero",children:[e.jsx("div",{className:"nb-hero-grid"}),e.jsx("div",{className:"nb-hero-scan"}),e.jsx("div",{className:"nb-hero-glow1"}),e.jsx("div",{className:"nb-hero-glow2"}),e.jsx(Cp,{r:"0,212,255"}),e.jsxs("button",{className:"nb-logout",onClick:i,children:[e.jsx("i",{className:"fa-solid fa-right-from-bracket"}),"Logout"]}),e.jsxs("div",{className:"nb-hero-content",children:[e.jsxs("div",{className:"nb-hero-badge",children:[e.jsx("i",{className:"fa-solid fa-medal"}),"NBA Accreditation Portal"]}),e.jsxs("h1",{className:"nb-hero-h1",children:["National Board",e.jsx("br",{}),"of ",e.jsx("em",{children:"Accreditation"})]}),e.jsx("p",{className:"nb-hero-p",children:"Creative Techno College, Angul — Outcome-Based Education framework documentation, programme accreditation data and evidence for all 7 NBA criteria."}),e.jsx("div",{className:"nb-hero-tags",children:["AICTE Linked","OBE Framework","4 Programs","Utkal University","BPUT Affiliated"].map((m,f)=>e.jsxs("span",{className:"nb-hero-tag",children:[e.jsx("i",{className:"fa-solid fa-circle-check",style:{color:"#00d4ff",fontSize:"0.65rem"}}),m]},f))})]})]}),e.jsx("div",{className:"nb-wave",children:e.jsx("svg",{viewBox:"0 0 1440 60",preserveAspectRatio:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M0,40 C360,60 1080,0 1440,40 L1440,60 L0,60 Z",fill:"#f0f4f8"})})}),e.jsx("div",{className:"nb-stats-band",children:l.map((m,f)=>e.jsxs("div",{className:"nb-stat rv",style:{transitionDelay:`${f*.07}s`},children:[e.jsx("div",{className:"nb-stat-ico",style:{background:m.col},children:e.jsx("i",{className:`fa-solid ${m.icon}`})}),e.jsx("div",{className:"nb-stat-val",children:m.val}),e.jsx("div",{className:"nb-stat-lbl",children:m.lbl})]},f))}),e.jsxs("section",{className:"nb-obe-sec",children:[e.jsxs("div",{style:{maxWidth:1100,margin:"0 auto",textAlign:"center"},children:[e.jsx("span",{className:"section-label",style:{color:"rgba(0,212,255,0.7)"},children:"Framework"}),e.jsxs("h2",{className:"section-title",style:{color:"#fff"},children:["Outcome-Based ",e.jsx("span",{style:{color:"#00d4ff"},children:"Education"})]}),e.jsx("p",{className:"section-subtitle",style:{color:"rgba(255,255,255,0.4)",margin:"0 auto"},children:"The OBE chain ensures every course, programme and institutional goal is mapped to measurable outcomes."})]}),e.jsx("div",{className:"nb-obe-chain",children:tp.map((m,f)=>e.jsxs("div",{className:"nb-obe-node rv",style:{transitionDelay:`${f*.1}s`},children:[f<tp.length-1&&e.jsx("div",{className:"nb-obe-arrow",children:e.jsx("i",{className:"fa-solid fa-arrow-right"})}),e.jsxs("div",{className:"nb-obe-dot",style:{background:`linear-gradient(135deg,${m.color}cc,${m.color})`,boxShadow:`0 8px 32px ${m.color}50`},children:[e.jsx("div",{className:"nb-obe-abbr",children:m.abbr}),e.jsx("i",{className:`fa-solid ${m.icon} nb-obe-dot-icon`})]}),e.jsx("div",{className:"nb-obe-full",children:m.full}),e.jsx("div",{className:"nb-obe-desc",children:m.desc})]},f))})]}),e.jsxs("section",{className:"nb-crit-sec",children:[e.jsxs("div",{style:{maxWidth:1240,margin:"0 auto",textAlign:"center"},children:[e.jsx("span",{className:"section-label",children:"Documentation"}),e.jsxs("h2",{className:"section-title",children:["Select a ",e.jsx("span",{children:"Criterion"})]}),e.jsx("p",{className:"section-subtitle",style:{margin:"0 auto"},children:"Access complete documentation and evidence for each of the 7 NBA criteria."})]}),e.jsx("div",{className:"nb-crit-grid",children:$g.map((m,f)=>e.jsxs("a",{href:`#crit-${f+1}`,className:"nb-crit-card rv",style:{transitionDelay:`${f*.07}s`,textDecoration:"none"},children:[e.jsxs("div",{className:"nb-crit-top",style:{background:m.grad},children:[e.jsx("div",{className:"nb-crit-wm",children:m.num.padStart(2,"0")}),e.jsx("div",{style:{width:50,height:50,borderRadius:14,background:"rgba(255,255,255,0.16)",backdropFilter:"blur(8px)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.2rem",color:"#fff",marginBottom:14,position:"relative",zIndex:1},children:e.jsx("i",{className:`fa-solid ${m.icon}`})}),e.jsxs("div",{className:"nb-crit-title",children:["Criterion ",m.num,": ",m.title]})]}),e.jsxs("div",{className:"nb-crit-footer",children:[e.jsxs("div",{className:"nb-crit-docs",children:[e.jsx("i",{className:"fa-solid fa-file-lines",style:{color:m.color}}),m.docs," documents"]}),e.jsx("div",{className:"nb-crit-arrow",style:{background:m.grad,boxShadow:`0 4px 12px rgba(${m.glow},0.35)`},children:e.jsx("i",{className:"fa-solid fa-arrow-right"})})]})]},f))})]}),e.jsxs("section",{className:"nb-prog-sec",children:[e.jsxs("div",{style:{maxWidth:1200,margin:"0 auto",textAlign:"center"},children:[e.jsx("span",{className:"section-label",children:"OBE Attainment"}),e.jsxs("h2",{className:"section-title",children:["Programme ",e.jsx("span",{children:"Performance"})]}),e.jsx("p",{className:"section-subtitle",style:{margin:"0 auto"},children:"PO, CO and overall pass rate attainment across all accredited programmes."})]}),e.jsx("div",{className:"nb-prog-grid",children:d.map((m,f)=>e.jsx("div",{className:"rv",style:{transitionDelay:`${f*.08}s`},children:e.jsx(Gg,{prog:m})},f))})]}),e.jsx("div",{className:"nb-banner",children:e.jsxs("div",{style:{maxWidth:700,margin:"0 auto"},children:[e.jsx("div",{style:{fontFamily:"'Outfit',sans-serif",fontSize:"0.7rem",fontWeight:800,color:"rgba(0,212,255,0.7)",letterSpacing:3,textTransform:"uppercase",marginBottom:12},children:"Our Goal"}),e.jsxs("h2",{style:{fontFamily:"'Outfit',sans-serif",fontWeight:900,fontSize:"clamp(2rem,4vw,3rem)",color:"#fff",letterSpacing:-1.5,marginBottom:14,lineHeight:1.1},children:["Achieving ",e.jsx("span",{style:{color:"#00d4ff"},children:"NBA Accreditation"}),e.jsx("br",{}),"Across All 4 Programs"]}),e.jsx("p",{style:{color:"rgba(255,255,255,0.4)",fontSize:"0.9rem",lineHeight:1.75},children:"Delivering outcome-based engineering education with measurable PO/CO attainment, continuous quality improvement and industry-aligned curriculum."})]})})]})]})}function Yg(){const[i,o]=y.useState(!1);return i?e.jsx(Jg,{onLogout:()=>o(!1)}):e.jsx(Ug,{onSuccess:()=>o(!0)})}function Vg(){y.useEffect(()=>{const i=document.querySelectorAll(".reveal, .reveal-left, .reveal-right"),o=new IntersectionObserver(l=>l.forEach(d=>{d.isIntersecting&&d.target.classList.add("visible")}),{threshold:.1});return i.forEach(l=>o.observe(l)),()=>o.disconnect()},[])}const Kg=[{title:"Digital Literacy Drive",icon:"fa-laptop",color:"#2d7dd2",desc:"Empowering rural youth with digital skills, computer literacy, and internet access to bridge the digital divide.",impact:"500+ Students Trained"},{title:"Skill India Alignment",icon:"fa-tools",color:"#16a34a",desc:"Aligning curriculum with Skill India mission to produce industry-ready graduates with practical competencies.",impact:"4 Programs Aligned"},{title:"Entrepreneurship Development",icon:"fa-lightbulb",color:"#f59e0b",desc:"Fostering startup culture through incubation support, mentorship, and entrepreneurship development programs.",impact:"10+ Startups Supported"},{title:"Green Campus Initiative",icon:"fa-leaf",color:"#16a34a",desc:"Promoting sustainable practices, solar energy adoption, and eco-friendly campus operations.",impact:"Carbon Neutral Goal 2030"},{title:"Women Empowerment",icon:"fa-venus",color:"#7c3aed",desc:"Special scholarships, mentorship programs, and leadership opportunities for women students.",impact:"60%+ Women Enrollment"},{title:"Community Outreach",icon:"fa-hands-helping",color:"#dc2626",desc:"Regular community service activities, health camps, and awareness programs in surrounding villages.",impact:"20+ Villages Reached"}],Qg=[{icon:"fa-graduation-cap",title:"Quality Education",desc:"Ensuring accessible, affordable, and high-quality education for all"},{icon:"fa-industry",title:"Industry Connect",desc:"Bridging academia and industry for better employment outcomes"},{icon:"fa-globe",title:"Digital India",desc:"Contributing to India's digital transformation through tech education"},{icon:"fa-seedling",title:"Sustainable Growth",desc:"Promoting sustainable development in education and campus operations"}];function qg(){return Vg(),e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"page-hero",children:[e.jsx("div",{className:"page-hero-dots"}),e.jsx("span",{className:"section-label",children:"National Initiative"}),e.jsxs("h1",{children:["Vikshit ",e.jsx("span",{children:"Bharat"})]}),e.jsx("p",{children:"Creative Techno College's contribution to building a Developed India by 2047"})]}),e.jsx("section",{style:{padding:"60px 5%",background:"#fff"},children:e.jsx("div",{style:{maxWidth:"1100px",margin:"0 auto"},children:e.jsxs("div",{className:"reveal tech-card",style:{padding:"36px 40px"},children:[e.jsx("span",{className:"section-label",children:"Vision"}),e.jsxs("h2",{className:"section-title",children:["Vikshit Bharat ",e.jsx("span",{children:"@2047"})]}),e.jsx("p",{style:{color:"var(--text-muted)",lineHeight:1.9,fontSize:"1rem"},children:"Vikshit Bharat (Developed India) is Prime Minister Narendra Modi's vision to transform India into a fully developed nation by 2047, the centenary of India's independence. Creative Techno College is proud to contribute to this national mission through quality education, skill development, and community empowerment."}),e.jsx("p",{style:{color:"var(--text-muted)",lineHeight:1.9,fontSize:"1rem",marginTop:"14px"},children:"Our institution actively participates in government initiatives like Skill India, Digital India, Startup India, and Swachh Bharat, aligning our academic programs and campus activities with the national development agenda."})]})})}),e.jsx("section",{className:"tech-grid-bg",style:{padding:"60px 5%"},children:e.jsxs("div",{style:{maxWidth:"1100px",margin:"0 auto"},children:[e.jsxs("div",{style:{textAlign:"center",marginBottom:"40px"},children:[e.jsx("span",{className:"section-label",children:"Foundation"}),e.jsxs("h2",{className:"section-title",children:["Our ",e.jsx("span",{children:"Pillars"})]})]}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(240px, 1fr))",gap:"24px"},children:Qg.map((i,o)=>e.jsxs("div",{className:"reveal tech-card",style:{padding:"28px",textAlign:"center",transitionDelay:`${o*.1}s`},children:[e.jsx("div",{style:{width:"60px",height:"60px",borderRadius:"50%",background:"linear-gradient(135deg, var(--blue-light), var(--cyan))",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 16px"},children:e.jsx("i",{className:`fa-solid ${i.icon}`,style:{color:"#fff",fontSize:"1.3rem"}})}),e.jsx("h3",{style:{fontFamily:"var(--font-head)",fontWeight:800,color:"var(--navy)",marginBottom:"8px",fontSize:"1rem"},children:i.title}),e.jsx("p",{style:{color:"var(--text-muted)",fontSize:"0.85rem",lineHeight:1.7},children:i.desc})]},o))})]})}),e.jsx("section",{style:{padding:"60px 5%",background:"#fff"},children:e.jsxs("div",{style:{maxWidth:"1100px",margin:"0 auto"},children:[e.jsxs("div",{style:{textAlign:"center",marginBottom:"40px"},children:[e.jsx("span",{className:"section-label",children:"Action"}),e.jsxs("h2",{className:"section-title",children:["Our ",e.jsx("span",{children:"Initiatives"})]})]}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(320px, 1fr))",gap:"24px"},children:Kg.map((i,o)=>e.jsxs("div",{className:"reveal tech-card",style:{padding:"28px",transitionDelay:`${o*.08}s`},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"14px",marginBottom:"14px"},children:[e.jsx("div",{style:{width:"48px",height:"48px",borderRadius:"12px",background:`${i.color}22`,border:`2px solid ${i.color}44`,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:e.jsx("i",{className:`fa-solid ${i.icon}`,style:{color:i.color,fontSize:"1.1rem"}})}),e.jsx("h3",{style:{fontFamily:"var(--font-head)",fontWeight:800,color:"var(--navy)",fontSize:"0.95rem"},children:i.title})]}),e.jsx("p",{style:{color:"var(--text-muted)",fontSize:"0.88rem",lineHeight:1.7,marginBottom:"12px"},children:i.desc}),e.jsx("span",{className:"status-badge completed",children:i.impact})]},o))})]})}),e.jsx("section",{className:"tech-grid-bg",style:{padding:"60px 5%"},children:e.jsxs("div",{style:{maxWidth:"1100px",margin:"0 auto"},children:[e.jsxs("div",{style:{textAlign:"center",marginBottom:"40px"},children:[e.jsx("span",{className:"section-label",children:"Impact"}),e.jsxs("h2",{className:"section-title",children:["Our ",e.jsx("span",{children:"Contribution"})]})]}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(200px, 1fr))",gap:"20px"},children:[{num:"1500+",label:"Students Empowered",icon:"fa-users"},{num:"100+",label:"Companies Partnered",icon:"fa-handshake"},{num:"20+",label:"Villages Reached",icon:"fa-map-marker-alt"},{num:"10+",label:"Startups Incubated",icon:"fa-rocket"},{num:"15+",label:"Years of Excellence",icon:"fa-award"}].map((i,o)=>e.jsxs("div",{className:"reveal tech-card gold-accent",style:{padding:"28px",textAlign:"center",transitionDelay:`${o*.08}s`},children:[e.jsx("i",{className:`fa-solid ${i.icon}`,style:{fontSize:"1.6rem",color:"var(--gold)",marginBottom:"12px",display:"block"}}),e.jsx("div",{style:{fontSize:"1.8rem",fontWeight:900,fontFamily:"var(--font-head)",color:"var(--navy)",lineHeight:1},children:i.num}),e.jsx("div",{style:{color:"var(--text-muted)",fontSize:"0.8rem",marginTop:"6px",fontWeight:600},children:i.label})]},o))})]})})]})}const po=[{id:"student",label:"Student",sub:"Access results & records",icon:"fa-graduation-cap",color:"#3b82f6",glow:"rgba(59,130,246,0.6)",grad:"linear-gradient(135deg,#1e3a8a,#3b82f6)",lightGrad:"linear-gradient(135deg,#dbeafe,#eff6ff)",emoji:"🎓",idLabel:"Student ID",passLabel:"Date of Birth",idPlaceholder:"Enter Student ID",passPH:"••••••••"},{id:"staff",label:"Staff",sub:"Faculty portal & tools",icon:"fa-user-tie",color:"#10b981",glow:"rgba(16,185,129,0.6)",grad:"linear-gradient(135deg,#064e3b,#10b981)",lightGrad:"linear-gradient(135deg,#d1fae5,#ecfdf5)",emoji:"👨‍💼",idLabel:"Staff Username",passLabel:"Password",idPlaceholder:"Enter Staff Username",passPH:"••••••••"},{id:"admin",label:"Admin",sub:"System administration",icon:"fa-shield-halved",color:"#8b5cf6",glow:"rgba(139,92,246,0.6)",grad:"linear-gradient(135deg,#2e1065,#8b5cf6)",lightGrad:"linear-gradient(135deg,#ede9fe,#f5f3ff)",emoji:"🛡️",idLabel:"Admin Username",passLabel:"Password",idPlaceholder:"Enter Admin Username",passPH:"••••••••"},{id:"principal",label:"Principal",sub:"Institutional dashboard",icon:"fa-crown",color:"#f59e0b",glow:"rgba(245,158,11,0.6)",grad:"linear-gradient(135deg,#78350f,#f59e0b)",lightGrad:"linear-gradient(135deg,#fef3c7,#fffbeb)",emoji:"👑",idLabel:"Principal Username",passLabel:"Password",idPlaceholder:"Enter Principal Username",passPH:"••••••••"},{id:"admission",label:"Admission",sub:"Enrollment & applications",icon:"fa-file-circle-check",color:"#ec4899",glow:"rgba(236,72,153,0.6)",grad:"linear-gradient(135deg,#831843,#ec4899)",lightGrad:"linear-gradient(135deg,#fce7f3,#fdf2f8)",emoji:"📋",idLabel:"Admission Username",passLabel:"Password",idPlaceholder:"Enter Admission Username",passPH:"••••••••"}];function Xg({color:i}){return e.jsxs("div",{style:{position:"absolute",inset:0,overflow:"hidden",zIndex:0,pointerEvents:"none"},children:[e.jsx("div",{style:{position:"absolute",inset:0,background:"linear-gradient(160deg,#020817 0%,#0a0f1e 50%,#050b18 100%)"}}),e.jsx("div",{style:{position:"absolute",width:"70vw",height:"70vw",maxWidth:700,maxHeight:700,borderRadius:"50%",top:"-20%",left:"-10%",background:`radial-gradient(circle, ${i}22 0%, transparent 65%)`,filter:"blur(40px)",transition:"background 0.6s ease",animation:"auroraMove1 12s ease-in-out infinite"}}),e.jsx("div",{style:{position:"absolute",width:"60vw",height:"60vw",maxWidth:600,maxHeight:600,borderRadius:"50%",bottom:"-15%",right:"-10%",background:`radial-gradient(circle, ${i}18 0%, transparent 65%)`,filter:"blur(50px)",transition:"background 0.6s ease",animation:"auroraMove2 15s ease-in-out infinite"}}),e.jsx("div",{style:{position:"absolute",width:"40vw",height:"40vw",maxWidth:400,maxHeight:400,borderRadius:"50%",top:"30%",right:"20%",background:"radial-gradient(circle, rgba(0,212,255,0.08) 0%, transparent 65%)",filter:"blur(35px)",animation:"auroraMove3 18s ease-in-out infinite"}}),e.jsx("div",{style:{position:"absolute",inset:0,backgroundImage:"linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",backgroundSize:"40px 40px"}}),e.jsx("div",{style:{position:"absolute",inset:0,background:"radial-gradient(ellipse at center, transparent 40%, rgba(2,8,23,0.8) 100%)"}})]})}function Zg({role:i,isActive:o,onClick:l}){const[d,m]=y.useState(!1);return e.jsxs("button",{onClick:l,onMouseEnter:()=>m(!0),onMouseLeave:()=>m(!1),style:{flex:"1 1 0",minWidth:0,background:o?i.grad:d?"rgba(255,255,255,0.07)":"rgba(255,255,255,0.03)",border:o?`2px solid ${i.color}`:`2px solid ${d?"rgba(255,255,255,0.15)":"rgba(255,255,255,0.06)"}`,borderRadius:16,padding:"14px 8px 12px",cursor:"pointer",transition:"all 0.3s cubic-bezier(0.4,0,0.2,1)",display:"flex",flexDirection:"column",alignItems:"center",gap:6,transform:o?"translateY(-4px) scale(1.03)":d?"translateY(-2px)":"none",boxShadow:o?`0 12px 32px ${i.glow}`:d?"0 4px 16px rgba(0,0,0,0.3)":"none",position:"relative",overflow:"hidden"},children:[o&&e.jsx("div",{style:{position:"absolute",inset:0,borderRadius:14,background:"linear-gradient(135deg, rgba(255,255,255,0.12) 0%, transparent 60%)",pointerEvents:"none"}}),e.jsx("span",{style:{fontSize:"1.6rem",lineHeight:1},children:i.emoji}),e.jsx("span",{style:{fontFamily:"'Poppins',sans-serif",fontSize:"0.68rem",fontWeight:700,color:o?"#fff":"rgba(255,255,255,0.5)",textTransform:"uppercase",letterSpacing:"0.5px",transition:"color 0.3s"},children:i.label}),o&&e.jsx("div",{style:{position:"absolute",bottom:6,left:"50%",transform:"translateX(-50%)",width:20,height:3,borderRadius:2,background:"#fff"}})]})}function Yt(){const i=rt(),o=ii(),l=i.pathname.split("/").pop(),d=po.find(J=>J.id===l)||po[0],[m,f]=y.useState(d),[u,w]=y.useState(""),[b,v]=y.useState(""),[x,h]=y.useState(!1),[T,P]=y.useState(""),[K,W]=y.useState(!1),[L,B]=y.useState(!1),[A,_]=y.useState(!1),X=y.useRef(null);y.useEffect(()=>{setTimeout(()=>_(!0),80)},[]);const ie=J=>{f(J),P(""),w(""),v(""),o(`/login/${J.id}`,{replace:!0})},me=async J=>{if(J.preventDefault(),!u.trim()||!b.trim()){P("Both fields are required.");return}P(""),W(!0);try{const ye=new FormData;ye.append("id",u),ye.append("pass",b),ye.append("login_type",m.id);const qe=await(await fetch("https://creativecollege.in/CTC%20NEW%20REACT%20WEBSITE/api_login.php",{method:"POST",body:ye,credentials:"include"})).json();qe.status==="success"?(W(!1),B(!0),setTimeout(()=>{const We=document.createElement("a");We.href=qe.redirect,We.target="_blank",We.rel="noopener noreferrer",document.body.appendChild(We),We.click(),document.body.removeChild(We),w(""),v(""),h(!1),P(""),B(!1),W(!1)},1500)):(W(!1),P(qe.message||"Invalid credentials. Please try again."))}catch{W(!1),P("Network error. Please try again later.")}};return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
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
  `}),e.jsxs("div",{className:"portal-page",children:[e.jsx(Xg,{color:m.color}),e.jsxs("div",{className:`portal-main${A?" visible":""}`,children:[e.jsxs("div",{className:"portal-logo-area",children:[e.jsxs("div",{className:"portal-logo-ring",style:{borderColor:`${m.color}40`,boxShadow:`0 0 32px ${m.glow}`},children:[e.jsx("div",{className:"portal-logo-ring-glow",style:{borderColor:m.color}}),e.jsx("img",{src:"https://creativecollege.in/Admission_Dashboard/images/CTC%20logo.png",alt:"CTC"})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"portal-wordmark",children:["Creative Techno ",e.jsx("span",{children:"College"})]}),e.jsx("div",{className:"portal-tagline",children:"Unified Portal · Angul, Odisha"})]})]}),e.jsxs("div",{className:"portal-card",children:[L&&e.jsxs("div",{className:"portal-success-overlay",children:[e.jsx("div",{className:"portal-success-icon",children:e.jsx("i",{className:"fa-solid fa-check"})}),e.jsx("span",{style:{fontFamily:"'Plus Jakarta Sans',sans-serif",fontWeight:700,color:"#fff",fontSize:"1rem"},children:"Login Successful!"}),e.jsx("span",{style:{fontSize:"0.78rem",color:"rgba(255,255,255,0.4)"},children:"Redirecting you…"})]}),e.jsx("div",{className:"portal-role-grid",children:po.map(J=>e.jsx(Zg,{role:J,isActive:m.id===J.id,onClick:()=>ie(J)},J.id))}),e.jsxs("div",{className:"portal-divider",children:[e.jsx("div",{className:"portal-divider-line"}),e.jsxs("span",{className:"portal-divider-text",children:["Sign in as ",m.label]}),e.jsx("div",{className:"portal-divider-line"})]}),e.jsxs("h2",{className:"portal-heading",style:{color:m.color},children:[m.emoji," ",m.label," Login"]}),e.jsx("p",{className:"portal-subhead",children:m.sub}),T&&e.jsxs("div",{className:"portal-error",children:[e.jsx("i",{className:"fa-solid fa-circle-exclamation"}),T]}),e.jsxs("form",{ref:X,onSubmit:me,noValidate:!0,children:[e.jsxs("div",{className:"portal-field",children:[e.jsxs("label",{className:"portal-field-label",children:[e.jsx("i",{className:"fa-solid fa-id-badge",style:{color:m.color}}),m.idLabel]}),e.jsxs("div",{className:"portal-input-wrap",style:{"--ac":m.color},children:[e.jsx("span",{className:"portal-input-icon",children:e.jsx("i",{className:"fa-solid fa-user"})}),e.jsx("input",{type:"text",value:u,onChange:J=>w(J.target.value),placeholder:m.idPlaceholder,autoComplete:"username"}),e.jsx("div",{className:"portal-input-focus-bar",style:{background:m.color}})]})]}),e.jsxs("div",{className:"portal-field",children:[e.jsxs("label",{className:"portal-field-label",children:[e.jsx("i",{className:"fa-solid fa-lock",style:{color:m.color}}),m.passLabel]}),e.jsxs("div",{className:"portal-input-wrap",children:[e.jsx("span",{className:"portal-input-icon",children:e.jsx("i",{className:"fa-solid fa-key"})}),e.jsx("input",{type:x?"text":"password",value:b,onChange:J=>v(J.target.value),placeholder:m.passPH,autoComplete:"current-password"}),e.jsx("button",{type:"button",className:"portal-eye-btn",onClick:()=>h(J=>!J),children:e.jsx("i",{className:`fa-solid ${x?"fa-eye-slash":"fa-eye"}`})}),e.jsx("div",{className:"portal-input-focus-bar",style:{background:m.color}})]})]}),e.jsxs("button",{type:"submit",className:"portal-submit",disabled:K,style:{background:m.grad,boxShadow:`0 8px 32px ${m.glow}`},children:[!K&&e.jsx("div",{className:"portal-submit-shimmer"}),K?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"portal-spinner"})," Authenticating…"]}):e.jsxs(e.Fragment,{children:[e.jsx("i",{className:"fa-solid fa-right-to-bracket"})," Sign In to Portal"]})]})]})]})]})]})]})}const Na=({title:i})=>e.jsxs("div",{style:{textAlign:"center",padding:"80px 20px"},children:[e.jsx("h1",{style:{color:"#0c2340",fontSize:"2.5rem"},children:i}),e.jsx("p",{style:{color:"#666",marginTop:"20px",fontSize:"1.1rem"},children:"This page is coming soon."})]});function e0(){return e.jsxs(Bu,{basename:"/CTC%20NEW%20REACT%20WEBSITE",children:[e.jsx(Ou,{}),e.jsx(_u,{children:e.jsxs(ku,{children:[e.jsx(ee,{path:"/",element:e.jsx(Qu,{})}),e.jsx(ee,{path:"/about/trust",element:e.jsx(ah,{})}),e.jsx(ee,{path:"/about/ctc",element:e.jsx(rh,{})}),e.jsx(ee,{path:"/about/team",element:e.jsx(oh,{})}),e.jsx(ee,{path:"/admission",element:e.jsx(xh,{})}),e.jsx(ee,{path:"/admission/apply",element:e.jsx(vh,{})}),e.jsx(ee,{path:"/academics/regular",element:e.jsx(Eh,{})}),e.jsx(ee,{path:"/academics/value-added",element:e.jsx(Rh,{})}),e.jsx(ee,{path:"/academics/enhancement",element:e.jsx(Wh,{})}),e.jsx(ee,{path:"/placement",element:e.jsx(Hd,{})}),e.jsx(ee,{path:"/placement/programs",element:e.jsx(Yh,{})}),e.jsx(ee,{path:"/placement/statistics",element:e.jsx(Hd,{})}),e.jsx(ee,{path:"/placement/brochure",element:e.jsx(Vh,{})}),e.jsx(ee,{path:"/gymkhana",element:e.jsx(ag,{})}),e.jsx(ee,{path:"/gymkhana/cultural",element:e.jsx(Rg,{})}),e.jsx(ee,{path:"/gymkhana/sports",element:e.jsx(Eg,{})}),e.jsx(ee,{path:"/gymkhana/technocrat",element:e.jsx(Cg,{})}),e.jsx(ee,{path:"/gymkhana/disha-csr",element:e.jsx(zg,{})}),e.jsx(ee,{path:"/gymkhana/techfest/1",element:e.jsx(Zd,{})}),e.jsx(ee,{path:"/gymkhana/techfest/2",element:e.jsx(ep,{})}),e.jsx(ee,{path:"/gymkhana/techfest/3",element:e.jsx(ap,{})}),e.jsx(ee,{path:"/gymkhana/techfest-1",element:e.jsx(Zd,{})}),e.jsx(ee,{path:"/gymkhana/techfest-2",element:e.jsx(ep,{})}),e.jsx(ee,{path:"/gymkhana/techfest-3",element:e.jsx(ap,{})}),e.jsx(ee,{path:"/gallery",element:e.jsx(ng,{})}),e.jsx(ee,{path:"/iqac",element:e.jsx(Na,{title:"IQAC"})}),e.jsx(ee,{path:"/iqac/item1",element:e.jsx(Na,{title:"IQAC — Item 1"})}),e.jsx(ee,{path:"/iqac/item2",element:e.jsx(Na,{title:"IQAC — Item 2"})}),e.jsx(ee,{path:"/iqac/item3",element:e.jsx(Na,{title:"IQAC — Item 3"})}),e.jsx(ee,{path:"/iqac/item4",element:e.jsx(Na,{title:"IQAC — Item 4"})}),e.jsx(ee,{path:"/aicte",element:e.jsx(Na,{title:"AICTE"})}),e.jsx(ee,{path:"/aicte/documents",element:e.jsx(Na,{title:"AICTE — Documents"})}),e.jsx(ee,{path:"/aicte/mandatory-disclosure",element:e.jsx(Na,{title:"AICTE — Mandatory Disclosure"})}),e.jsx(ee,{path:"/ckf-skills",element:e.jsx(Na,{title:"CKF Skills"})}),e.jsx(ee,{path:"/contacts",element:e.jsx(lg,{})}),e.jsx(ee,{path:"/icc",element:e.jsx(hg,{})}),e.jsx(ee,{path:"/grc",element:e.jsx(bg,{})}),e.jsx(ee,{path:"/naac",element:e.jsx(Hg,{})}),e.jsx(ee,{path:"/nba",element:e.jsx(Yg,{})}),e.jsx(ee,{path:"/vikshit-bharat",element:e.jsx(qg,{})}),e.jsx(ee,{path:"/login",element:e.jsx(Yt,{})}),e.jsx(ee,{path:"/login/student",element:e.jsx(Yt,{})}),e.jsx(ee,{path:"/login/staff",element:e.jsx(Yt,{})}),e.jsx(ee,{path:"/login/admin",element:e.jsx(Yt,{})}),e.jsx(ee,{path:"/login/principal",element:e.jsx(Yt,{})}),e.jsx(ee,{path:"/login/admission",element:e.jsx(Yt,{})}),e.jsx(ee,{path:"*",element:e.jsx(Na,{title:"Page Not Found"})})]})})]})}typeof window<"u"&&(window.history.scrollRestoration="manual");If.createRoot(document.getElementById("root")).render(e.jsx(y.StrictMode,{children:e.jsx(e0,{})}));
