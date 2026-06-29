var Ef=Object.defineProperty;var Rf=(r,s,o)=>s in r?Ef(r,s,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[s]=o;var Lt=(r,s,o)=>Rf(r,typeof s!="symbol"?s+"":s,o);function Pf(r,s){for(var o=0;o<s.length;o++){const c=s[o];if(typeof c!="string"&&!Array.isArray(c)){for(const m in c)if(m!=="default"&&!(m in r)){const p=Object.getOwnPropertyDescriptor(c,m);p&&Object.defineProperty(r,m,p.get?p:{enumerable:!0,get:()=>c[m]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const m of document.querySelectorAll('link[rel="modulepreload"]'))c(m);new MutationObserver(m=>{for(const p of m)if(p.type==="childList")for(const u of p.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&c(u)}).observe(document,{childList:!0,subtree:!0});function o(m){const p={};return m.integrity&&(p.integrity=m.integrity),m.referrerPolicy&&(p.referrerPolicy=m.referrerPolicy),m.crossOrigin==="use-credentials"?p.credentials="include":m.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function c(m){if(m.ep)return;m.ep=!0;const p=o(m);fetch(m.href,p)}})();function wi(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var vo={exports:{}},Vn={},jo={exports:{}},te={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qd;function If(){if(qd)return te;qd=1;var r=Symbol.for("react.element"),s=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),m=Symbol.for("react.profiler"),p=Symbol.for("react.provider"),u=Symbol.for("react.context"),b=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),g=Symbol.iterator;function E(C){return C===null||typeof C!="object"?null:(C=g&&C[g]||C["@@iterator"],typeof C=="function"?C:null)}var D={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},F=Object.assign,P={};function z(C,B,ee){this.props=C,this.context=B,this.refs=P,this.updater=ee||D}z.prototype.isReactComponent={},z.prototype.setState=function(C,B){if(typeof C!="object"&&typeof C!="function"&&C!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,C,B,"setState")},z.prototype.forceUpdate=function(C){this.updater.enqueueForceUpdate(this,C,"forceUpdate")};function N(){}N.prototype=z.prototype;function R(C,B,ee){this.props=C,this.context=B,this.refs=P,this.updater=ee||D}var L=R.prototype=new N;L.constructor=R,F(L,z.prototype),L.isPureReactComponent=!0;var q=Array.isArray,he=Object.prototype.hasOwnProperty,Ne={current:null},Fe={key:!0,ref:!0,__self:!0,__source:!0};function oe(C,B,ee){var ae,re={},ie=null,de=null;if(B!=null)for(ae in B.ref!==void 0&&(de=B.ref),B.key!==void 0&&(ie=""+B.key),B)he.call(B,ae)&&!Fe.hasOwnProperty(ae)&&(re[ae]=B[ae]);var le=arguments.length-2;if(le===1)re.children=ee;else if(1<le){for(var ge=Array(le),Ze=0;Ze<le;Ze++)ge[Ze]=arguments[Ze+2];re.children=ge}if(C&&C.defaultProps)for(ae in le=C.defaultProps,le)re[ae]===void 0&&(re[ae]=le[ae]);return{$$typeof:r,type:C,key:ie,ref:de,props:re,_owner:Ne.current}}function $e(C,B){return{$$typeof:r,type:C.type,key:B,ref:C.ref,props:C.props,_owner:C._owner}}function St(C){return typeof C=="object"&&C!==null&&C.$$typeof===r}function pt(C){var B={"=":"=0",":":"=2"};return"$"+C.replace(/[=:]/g,function(ee){return B[ee]})}var Me=/\/+/g;function Xe(C,B){return typeof C=="object"&&C!==null&&C.key!=null?pt(""+C.key):B.toString(36)}function mt(C,B,ee,ae,re){var ie=typeof C;(ie==="undefined"||ie==="boolean")&&(C=null);var de=!1;if(C===null)de=!0;else switch(ie){case"string":case"number":de=!0;break;case"object":switch(C.$$typeof){case r:case s:de=!0}}if(de)return de=C,re=re(de),C=ae===""?"."+Xe(de,0):ae,q(re)?(ee="",C!=null&&(ee=C.replace(Me,"$&/")+"/"),mt(re,B,ee,"",function(Ze){return Ze})):re!=null&&(St(re)&&(re=$e(re,ee+(!re.key||de&&de.key===re.key?"":(""+re.key).replace(Me,"$&/")+"/")+C)),B.push(re)),1;if(de=0,ae=ae===""?".":ae+":",q(C))for(var le=0;le<C.length;le++){ie=C[le];var ge=ae+Xe(ie,le);de+=mt(ie,B,ee,ge,re)}else if(ge=E(C),typeof ge=="function")for(C=ge.call(C),le=0;!(ie=C.next()).done;)ie=ie.value,ge=ae+Xe(ie,le++),de+=mt(ie,B,ee,ge,re);else if(ie==="object")throw B=String(C),Error("Objects are not valid as a React child (found: "+(B==="[object Object]"?"object with keys {"+Object.keys(C).join(", ")+"}":B)+"). If you meant to render a collection of children, use an array instead.");return de}function wt(C,B,ee){if(C==null)return C;var ae=[],re=0;return mt(C,ae,"","",function(ie){return B.call(ee,ie,re++)}),ae}function Ge(C){if(C._status===-1){var B=C._result;B=B(),B.then(function(ee){(C._status===0||C._status===-1)&&(C._status=1,C._result=ee)},function(ee){(C._status===0||C._status===-1)&&(C._status=2,C._result=ee)}),C._status===-1&&(C._status=0,C._result=B)}if(C._status===1)return C._result.default;throw C._result}var ve={current:null},H={transition:null},Q={ReactCurrentDispatcher:ve,ReactCurrentBatchConfig:H,ReactCurrentOwner:Ne};function $(){throw Error("act(...) is not supported in production builds of React.")}return te.Children={map:wt,forEach:function(C,B,ee){wt(C,function(){B.apply(this,arguments)},ee)},count:function(C){var B=0;return wt(C,function(){B++}),B},toArray:function(C){return wt(C,function(B){return B})||[]},only:function(C){if(!St(C))throw Error("React.Children.only expected to receive a single React element child.");return C}},te.Component=z,te.Fragment=o,te.Profiler=m,te.PureComponent=R,te.StrictMode=c,te.Suspense=h,te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Q,te.act=$,te.cloneElement=function(C,B,ee){if(C==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+C+".");var ae=F({},C.props),re=C.key,ie=C.ref,de=C._owner;if(B!=null){if(B.ref!==void 0&&(ie=B.ref,de=Ne.current),B.key!==void 0&&(re=""+B.key),C.type&&C.type.defaultProps)var le=C.type.defaultProps;for(ge in B)he.call(B,ge)&&!Fe.hasOwnProperty(ge)&&(ae[ge]=B[ge]===void 0&&le!==void 0?le[ge]:B[ge])}var ge=arguments.length-2;if(ge===1)ae.children=ee;else if(1<ge){le=Array(ge);for(var Ze=0;Ze<ge;Ze++)le[Ze]=arguments[Ze+2];ae.children=le}return{$$typeof:r,type:C.type,key:re,ref:ie,props:ae,_owner:de}},te.createContext=function(C){return C={$$typeof:u,_currentValue:C,_currentValue2:C,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},C.Provider={$$typeof:p,_context:C},C.Consumer=C},te.createElement=oe,te.createFactory=function(C){var B=oe.bind(null,C);return B.type=C,B},te.createRef=function(){return{current:null}},te.forwardRef=function(C){return{$$typeof:b,render:C}},te.isValidElement=St,te.lazy=function(C){return{$$typeof:y,_payload:{_status:-1,_result:C},_init:Ge}},te.memo=function(C,B){return{$$typeof:x,type:C,compare:B===void 0?null:B}},te.startTransition=function(C){var B=H.transition;H.transition={};try{C()}finally{H.transition=B}},te.unstable_act=$,te.useCallback=function(C,B){return ve.current.useCallback(C,B)},te.useContext=function(C){return ve.current.useContext(C)},te.useDebugValue=function(){},te.useDeferredValue=function(C){return ve.current.useDeferredValue(C)},te.useEffect=function(C,B){return ve.current.useEffect(C,B)},te.useId=function(){return ve.current.useId()},te.useImperativeHandle=function(C,B,ee){return ve.current.useImperativeHandle(C,B,ee)},te.useInsertionEffect=function(C,B){return ve.current.useInsertionEffect(C,B)},te.useLayoutEffect=function(C,B){return ve.current.useLayoutEffect(C,B)},te.useMemo=function(C,B){return ve.current.useMemo(C,B)},te.useReducer=function(C,B,ee){return ve.current.useReducer(C,B,ee)},te.useRef=function(C){return ve.current.useRef(C)},te.useState=function(C){return ve.current.useState(C)},te.useSyncExternalStore=function(C,B,ee){return ve.current.useSyncExternalStore(C,B,ee)},te.useTransition=function(){return ve.current.useTransition()},te.version="18.3.1",te}var Qd;function Ko(){return Qd||(Qd=1,jo.exports=If()),jo.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xd;function Bf(){if(Xd)return Vn;Xd=1;var r=Ko(),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,m=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function u(b,h,x){var y,g={},E=null,D=null;x!==void 0&&(E=""+x),h.key!==void 0&&(E=""+h.key),h.ref!==void 0&&(D=h.ref);for(y in h)c.call(h,y)&&!p.hasOwnProperty(y)&&(g[y]=h[y]);if(b&&b.defaultProps)for(y in h=b.defaultProps,h)g[y]===void 0&&(g[y]=h[y]);return{$$typeof:s,type:b,key:E,ref:D,props:g,_owner:m.current}}return Vn.Fragment=o,Vn.jsx=u,Vn.jsxs=u,Vn}var Zd;function Mf(){return Zd||(Zd=1,vo.exports=Bf()),vo.exports}var e=Mf(),v=Ko();const Se=wi(v),zf=Pf({__proto__:null,default:Se},[v]);var fi={},So={exports:{}},Qe={},wo={exports:{}},Co={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ep;function Of(){return ep||(ep=1,(function(r){function s(H,Q){var $=H.length;H.push(Q);e:for(;0<$;){var C=$-1>>>1,B=H[C];if(0<m(B,Q))H[C]=Q,H[$]=B,$=C;else break e}}function o(H){return H.length===0?null:H[0]}function c(H){if(H.length===0)return null;var Q=H[0],$=H.pop();if($!==Q){H[0]=$;e:for(var C=0,B=H.length,ee=B>>>1;C<ee;){var ae=2*(C+1)-1,re=H[ae],ie=ae+1,de=H[ie];if(0>m(re,$))ie<B&&0>m(de,re)?(H[C]=de,H[ie]=$,C=ie):(H[C]=re,H[ae]=$,C=ae);else if(ie<B&&0>m(de,$))H[C]=de,H[ie]=$,C=ie;else break e}}return Q}function m(H,Q){var $=H.sortIndex-Q.sortIndex;return $!==0?$:H.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var p=performance;r.unstable_now=function(){return p.now()}}else{var u=Date,b=u.now();r.unstable_now=function(){return u.now()-b}}var h=[],x=[],y=1,g=null,E=3,D=!1,F=!1,P=!1,z=typeof setTimeout=="function"?setTimeout:null,N=typeof clearTimeout=="function"?clearTimeout:null,R=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function L(H){for(var Q=o(x);Q!==null;){if(Q.callback===null)c(x);else if(Q.startTime<=H)c(x),Q.sortIndex=Q.expirationTime,s(h,Q);else break;Q=o(x)}}function q(H){if(P=!1,L(H),!F)if(o(h)!==null)F=!0,Ge(he);else{var Q=o(x);Q!==null&&ve(q,Q.startTime-H)}}function he(H,Q){F=!1,P&&(P=!1,N(oe),oe=-1),D=!0;var $=E;try{for(L(Q),g=o(h);g!==null&&(!(g.expirationTime>Q)||H&&!pt());){var C=g.callback;if(typeof C=="function"){g.callback=null,E=g.priorityLevel;var B=C(g.expirationTime<=Q);Q=r.unstable_now(),typeof B=="function"?g.callback=B:g===o(h)&&c(h),L(Q)}else c(h);g=o(h)}if(g!==null)var ee=!0;else{var ae=o(x);ae!==null&&ve(q,ae.startTime-Q),ee=!1}return ee}finally{g=null,E=$,D=!1}}var Ne=!1,Fe=null,oe=-1,$e=5,St=-1;function pt(){return!(r.unstable_now()-St<$e)}function Me(){if(Fe!==null){var H=r.unstable_now();St=H;var Q=!0;try{Q=Fe(!0,H)}finally{Q?Xe():(Ne=!1,Fe=null)}}else Ne=!1}var Xe;if(typeof R=="function")Xe=function(){R(Me)};else if(typeof MessageChannel<"u"){var mt=new MessageChannel,wt=mt.port2;mt.port1.onmessage=Me,Xe=function(){wt.postMessage(null)}}else Xe=function(){z(Me,0)};function Ge(H){Fe=H,Ne||(Ne=!0,Xe())}function ve(H,Q){oe=z(function(){H(r.unstable_now())},Q)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(H){H.callback=null},r.unstable_continueExecution=function(){F||D||(F=!0,Ge(he))},r.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$e=0<H?Math.floor(1e3/H):5},r.unstable_getCurrentPriorityLevel=function(){return E},r.unstable_getFirstCallbackNode=function(){return o(h)},r.unstable_next=function(H){switch(E){case 1:case 2:case 3:var Q=3;break;default:Q=E}var $=E;E=Q;try{return H()}finally{E=$}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(H,Q){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var $=E;E=H;try{return Q()}finally{E=$}},r.unstable_scheduleCallback=function(H,Q,$){var C=r.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?C+$:C):$=C,H){case 1:var B=-1;break;case 2:B=250;break;case 5:B=1073741823;break;case 4:B=1e4;break;default:B=5e3}return B=$+B,H={id:y++,callback:Q,priorityLevel:H,startTime:$,expirationTime:B,sortIndex:-1},$>C?(H.sortIndex=$,s(x,H),o(h)===null&&H===o(x)&&(P?(N(oe),oe=-1):P=!0,ve(q,$-C))):(H.sortIndex=B,s(h,H),F||D||(F=!0,Ge(he))),H},r.unstable_shouldYield=pt,r.unstable_wrapCallback=function(H){var Q=E;return function(){var $=E;E=Q;try{return H.apply(this,arguments)}finally{E=$}}}})(Co)),Co}var tp;function Df(){return tp||(tp=1,wo.exports=Of()),wo.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ap;function Wf(){if(ap)return Qe;ap=1;var r=Ko(),s=Df();function o(t){for(var a="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)a+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var c=new Set,m={};function p(t,a){u(t,a),u(t+"Capture",a)}function u(t,a){for(m[t]=a,t=0;t<a.length;t++)c.add(a[t])}var b=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,x=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,y={},g={};function E(t){return h.call(g,t)?!0:h.call(y,t)?!1:x.test(t)?g[t]=!0:(y[t]=!0,!1)}function D(t,a,n,i){if(n!==null&&n.type===0)return!1;switch(typeof a){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function F(t,a,n,i){if(a===null||typeof a>"u"||D(t,a,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!a;case 4:return a===!1;case 5:return isNaN(a);case 6:return isNaN(a)||1>a}return!1}function P(t,a,n,i,l,d,f){this.acceptsBooleans=a===2||a===3||a===4,this.attributeName=i,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=t,this.type=a,this.sanitizeURL=d,this.removeEmptyString=f}var z={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){z[t]=new P(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var a=t[0];z[a]=new P(a,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){z[t]=new P(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){z[t]=new P(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){z[t]=new P(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){z[t]=new P(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){z[t]=new P(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){z[t]=new P(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){z[t]=new P(t,5,!1,t.toLowerCase(),null,!1,!1)});var N=/[\-:]([a-z])/g;function R(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var a=t.replace(N,R);z[a]=new P(a,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var a=t.replace(N,R);z[a]=new P(a,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var a=t.replace(N,R);z[a]=new P(a,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){z[t]=new P(t,1,!1,t.toLowerCase(),null,!1,!1)}),z.xlinkHref=new P("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){z[t]=new P(t,1,!1,t.toLowerCase(),null,!0,!0)});function L(t,a,n,i){var l=z.hasOwnProperty(a)?z[a]:null;(l!==null?l.type!==0:i||!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(F(a,n,l,i)&&(n=null),i||l===null?E(a)&&(n===null?t.removeAttribute(a):t.setAttribute(a,""+n)):l.mustUseProperty?t[l.propertyName]=n===null?l.type===3?!1:"":n:(a=l.attributeName,i=l.attributeNamespace,n===null?t.removeAttribute(a):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,i?t.setAttributeNS(i,a,n):t.setAttribute(a,n))))}var q=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,he=Symbol.for("react.element"),Ne=Symbol.for("react.portal"),Fe=Symbol.for("react.fragment"),oe=Symbol.for("react.strict_mode"),$e=Symbol.for("react.profiler"),St=Symbol.for("react.provider"),pt=Symbol.for("react.context"),Me=Symbol.for("react.forward_ref"),Xe=Symbol.for("react.suspense"),mt=Symbol.for("react.suspense_list"),wt=Symbol.for("react.memo"),Ge=Symbol.for("react.lazy"),ve=Symbol.for("react.offscreen"),H=Symbol.iterator;function Q(t){return t===null||typeof t!="object"?null:(t=H&&t[H]||t["@@iterator"],typeof t=="function"?t:null)}var $=Object.assign,C;function B(t){if(C===void 0)try{throw Error()}catch(n){var a=n.stack.trim().match(/\n( *(at )?)/);C=a&&a[1]||""}return`
`+C+t}var ee=!1;function ae(t,a){if(!t||ee)return"";ee=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(a)if(a=function(){throw Error()},Object.defineProperty(a.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(a,[])}catch(T){var i=T}Reflect.construct(t,[],a)}else{try{a.call()}catch(T){i=T}t.call(a.prototype)}else{try{throw Error()}catch(T){i=T}t()}}catch(T){if(T&&i&&typeof T.stack=="string"){for(var l=T.stack.split(`
`),d=i.stack.split(`
`),f=l.length-1,j=d.length-1;1<=f&&0<=j&&l[f]!==d[j];)j--;for(;1<=f&&0<=j;f--,j--)if(l[f]!==d[j]){if(f!==1||j!==1)do if(f--,j--,0>j||l[f]!==d[j]){var S=`
`+l[f].replace(" at new "," at ");return t.displayName&&S.includes("<anonymous>")&&(S=S.replace("<anonymous>",t.displayName)),S}while(1<=f&&0<=j);break}}}finally{ee=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?B(t):""}function re(t){switch(t.tag){case 5:return B(t.type);case 16:return B("Lazy");case 13:return B("Suspense");case 19:return B("SuspenseList");case 0:case 2:case 15:return t=ae(t.type,!1),t;case 11:return t=ae(t.type.render,!1),t;case 1:return t=ae(t.type,!0),t;default:return""}}function ie(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Fe:return"Fragment";case Ne:return"Portal";case $e:return"Profiler";case oe:return"StrictMode";case Xe:return"Suspense";case mt:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case pt:return(t.displayName||"Context")+".Consumer";case St:return(t._context.displayName||"Context")+".Provider";case Me:var a=t.render;return t=t.displayName,t||(t=a.displayName||a.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case wt:return a=t.displayName||null,a!==null?a:ie(t.type)||"Memo";case Ge:a=t._payload,t=t._init;try{return ie(t(a))}catch{}}return null}function de(t){var a=t.type;switch(t.tag){case 24:return"Cache";case 9:return(a.displayName||"Context")+".Consumer";case 10:return(a._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=a.render,t=t.displayName||t.name||"",a.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return a;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ie(a);case 8:return a===oe?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof a=="function")return a.displayName||a.name||null;if(typeof a=="string")return a}return null}function le(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ge(t){var a=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function Ze(t){var a=ge(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,a),i=""+t[a];if(!t.hasOwnProperty(a)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,d=n.set;return Object.defineProperty(t,a,{configurable:!0,get:function(){return l.call(this)},set:function(f){i=""+f,d.call(this,f)}}),Object.defineProperty(t,a,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(f){i=""+f},stopTracking:function(){t._valueTracker=null,delete t[a]}}}}function rr(t){t._valueTracker||(t._valueTracker=Ze(t))}function al(t){if(!t)return!1;var a=t._valueTracker;if(!a)return!0;var n=a.getValue(),i="";return t&&(i=ge(t)?t.checked?"true":"false":t.value),t=i,t!==n?(a.setValue(t),!0):!1}function ir(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ki(t,a){var n=a.checked;return $({},a,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function nl(t,a){var n=a.defaultValue==null?"":a.defaultValue,i=a.checked!=null?a.checked:a.defaultChecked;n=le(a.value!=null?a.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:a.type==="checkbox"||a.type==="radio"?a.checked!=null:a.value!=null}}function rl(t,a){a=a.checked,a!=null&&L(t,"checked",a,!1)}function Ni(t,a){rl(t,a);var n=le(a.value),i=a.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}a.hasOwnProperty("value")?Ti(t,a.type,n):a.hasOwnProperty("defaultValue")&&Ti(t,a.type,le(a.defaultValue)),a.checked==null&&a.defaultChecked!=null&&(t.defaultChecked=!!a.defaultChecked)}function il(t,a,n){if(a.hasOwnProperty("value")||a.hasOwnProperty("defaultValue")){var i=a.type;if(!(i!=="submit"&&i!=="reset"||a.value!==void 0&&a.value!==null))return;a=""+t._wrapperState.initialValue,n||a===t.value||(t.value=a),t.defaultValue=a}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Ti(t,a,n){(a!=="number"||ir(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var cn=Array.isArray;function Ea(t,a,n,i){if(t=t.options,a){a={};for(var l=0;l<n.length;l++)a["$"+n[l]]=!0;for(n=0;n<t.length;n++)l=a.hasOwnProperty("$"+t[n].value),t[n].selected!==l&&(t[n].selected=l),l&&i&&(t[n].defaultSelected=!0)}else{for(n=""+le(n),a=null,l=0;l<t.length;l++){if(t[l].value===n){t[l].selected=!0,i&&(t[l].defaultSelected=!0);return}a!==null||t[l].disabled||(a=t[l])}a!==null&&(a.selected=!0)}}function Ei(t,a){if(a.dangerouslySetInnerHTML!=null)throw Error(o(91));return $({},a,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function sl(t,a){var n=a.value;if(n==null){if(n=a.children,a=a.defaultValue,n!=null){if(a!=null)throw Error(o(92));if(cn(n)){if(1<n.length)throw Error(o(93));n=n[0]}a=n}a==null&&(a=""),n=a}t._wrapperState={initialValue:le(n)}}function ol(t,a){var n=le(a.value),i=le(a.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),a.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function ll(t){var a=t.textContent;a===t._wrapperState.initialValue&&a!==""&&a!==null&&(t.value=a)}function cl(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ri(t,a){return t==null||t==="http://www.w3.org/1999/xhtml"?cl(a):t==="http://www.w3.org/2000/svg"&&a==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var sr,dl=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(a,n,i,l){MSApp.execUnsafeLocalFunction(function(){return t(a,n,i,l)})}:t})(function(t,a){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=a;else{for(sr=sr||document.createElement("div"),sr.innerHTML="<svg>"+a.valueOf().toString()+"</svg>",a=sr.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;a.firstChild;)t.appendChild(a.firstChild)}});function dn(t,a){if(a){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=a;return}}t.textContent=a}var pn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Im=["Webkit","ms","Moz","O"];Object.keys(pn).forEach(function(t){Im.forEach(function(a){a=a+t.charAt(0).toUpperCase()+t.substring(1),pn[a]=pn[t]})});function pl(t,a,n){return a==null||typeof a=="boolean"||a===""?"":n||typeof a!="number"||a===0||pn.hasOwnProperty(t)&&pn[t]?(""+a).trim():a+"px"}function ml(t,a){t=t.style;for(var n in a)if(a.hasOwnProperty(n)){var i=n.indexOf("--")===0,l=pl(n,a[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,l):t[n]=l}}var Bm=$({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Pi(t,a){if(a){if(Bm[t]&&(a.children!=null||a.dangerouslySetInnerHTML!=null))throw Error(o(137,t));if(a.dangerouslySetInnerHTML!=null){if(a.children!=null)throw Error(o(60));if(typeof a.dangerouslySetInnerHTML!="object"||!("__html"in a.dangerouslySetInnerHTML))throw Error(o(61))}if(a.style!=null&&typeof a.style!="object")throw Error(o(62))}}function Ii(t,a){if(t.indexOf("-")===-1)return typeof a.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Bi=null;function Mi(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var zi=null,Ra=null,Pa=null;function ul(t){if(t=Bn(t)){if(typeof zi!="function")throw Error(o(280));var a=t.stateNode;a&&(a=Er(a),zi(t.stateNode,t.type,a))}}function fl(t){Ra?Pa?Pa.push(t):Pa=[t]:Ra=t}function hl(){if(Ra){var t=Ra,a=Pa;if(Pa=Ra=null,ul(t),a)for(t=0;t<a.length;t++)ul(a[t])}}function gl(t,a){return t(a)}function xl(){}var Oi=!1;function bl(t,a,n){if(Oi)return t(a,n);Oi=!0;try{return gl(t,a,n)}finally{Oi=!1,(Ra!==null||Pa!==null)&&(xl(),hl())}}function mn(t,a){var n=t.stateNode;if(n===null)return null;var i=Er(n);if(i===null)return null;n=i[a];e:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(o(231,a,typeof n));return n}var Di=!1;if(b)try{var un={};Object.defineProperty(un,"passive",{get:function(){Di=!0}}),window.addEventListener("test",un,un),window.removeEventListener("test",un,un)}catch{Di=!1}function Mm(t,a,n,i,l,d,f,j,S){var T=Array.prototype.slice.call(arguments,3);try{a.apply(n,T)}catch(M){this.onError(M)}}var fn=!1,or=null,lr=!1,Wi=null,zm={onError:function(t){fn=!0,or=t}};function Om(t,a,n,i,l,d,f,j,S){fn=!1,or=null,Mm.apply(zm,arguments)}function Dm(t,a,n,i,l,d,f,j,S){if(Om.apply(this,arguments),fn){if(fn){var T=or;fn=!1,or=null}else throw Error(o(198));lr||(lr=!0,Wi=T)}}function pa(t){var a=t,n=t;if(t.alternate)for(;a.return;)a=a.return;else{t=a;do a=t,(a.flags&4098)!==0&&(n=a.return),t=a.return;while(t)}return a.tag===3?n:null}function yl(t){if(t.tag===13){var a=t.memoizedState;if(a===null&&(t=t.alternate,t!==null&&(a=t.memoizedState)),a!==null)return a.dehydrated}return null}function vl(t){if(pa(t)!==t)throw Error(o(188))}function Wm(t){var a=t.alternate;if(!a){if(a=pa(t),a===null)throw Error(o(188));return a!==t?null:t}for(var n=t,i=a;;){var l=n.return;if(l===null)break;var d=l.alternate;if(d===null){if(i=l.return,i!==null){n=i;continue}break}if(l.child===d.child){for(d=l.child;d;){if(d===n)return vl(l),t;if(d===i)return vl(l),a;d=d.sibling}throw Error(o(188))}if(n.return!==i.return)n=l,i=d;else{for(var f=!1,j=l.child;j;){if(j===n){f=!0,n=l,i=d;break}if(j===i){f=!0,i=l,n=d;break}j=j.sibling}if(!f){for(j=d.child;j;){if(j===n){f=!0,n=d,i=l;break}if(j===i){f=!0,i=d,n=l;break}j=j.sibling}if(!f)throw Error(o(189))}}if(n.alternate!==i)throw Error(o(190))}if(n.tag!==3)throw Error(o(188));return n.stateNode.current===n?t:a}function jl(t){return t=Wm(t),t!==null?Sl(t):null}function Sl(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var a=Sl(t);if(a!==null)return a;t=t.sibling}return null}var wl=s.unstable_scheduleCallback,Cl=s.unstable_cancelCallback,Lm=s.unstable_shouldYield,Hm=s.unstable_requestPaint,we=s.unstable_now,Fm=s.unstable_getCurrentPriorityLevel,Li=s.unstable_ImmediatePriority,Al=s.unstable_UserBlockingPriority,cr=s.unstable_NormalPriority,Um=s.unstable_LowPriority,kl=s.unstable_IdlePriority,dr=null,Ct=null;function _m(t){if(Ct&&typeof Ct.onCommitFiberRoot=="function")try{Ct.onCommitFiberRoot(dr,t,void 0,(t.current.flags&128)===128)}catch{}}var ut=Math.clz32?Math.clz32:Ym,$m=Math.log,Gm=Math.LN2;function Ym(t){return t>>>=0,t===0?32:31-($m(t)/Gm|0)|0}var pr=64,mr=4194304;function hn(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ur(t,a){var n=t.pendingLanes;if(n===0)return 0;var i=0,l=t.suspendedLanes,d=t.pingedLanes,f=n&268435455;if(f!==0){var j=f&~l;j!==0?i=hn(j):(d&=f,d!==0&&(i=hn(d)))}else f=n&~l,f!==0?i=hn(f):d!==0&&(i=hn(d));if(i===0)return 0;if(a!==0&&a!==i&&(a&l)===0&&(l=i&-i,d=a&-a,l>=d||l===16&&(d&4194240)!==0))return a;if((i&4)!==0&&(i|=n&16),a=t.entangledLanes,a!==0)for(t=t.entanglements,a&=i;0<a;)n=31-ut(a),l=1<<n,i|=t[n],a&=~l;return i}function Jm(t,a){switch(t){case 1:case 2:case 4:return a+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Vm(t,a){for(var n=t.suspendedLanes,i=t.pingedLanes,l=t.expirationTimes,d=t.pendingLanes;0<d;){var f=31-ut(d),j=1<<f,S=l[f];S===-1?((j&n)===0||(j&i)!==0)&&(l[f]=Jm(j,a)):S<=a&&(t.expiredLanes|=j),d&=~j}}function Hi(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Nl(){var t=pr;return pr<<=1,(pr&4194240)===0&&(pr=64),t}function Fi(t){for(var a=[],n=0;31>n;n++)a.push(t);return a}function gn(t,a,n){t.pendingLanes|=a,a!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,a=31-ut(a),t[a]=n}function Km(t,a){var n=t.pendingLanes&~a;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=a,t.mutableReadLanes&=a,t.entangledLanes&=a,a=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var l=31-ut(n),d=1<<l;a[l]=0,i[l]=-1,t[l]=-1,n&=~d}}function Ui(t,a){var n=t.entangledLanes|=a;for(t=t.entanglements;n;){var i=31-ut(n),l=1<<i;l&a|t[i]&a&&(t[i]|=a),n&=~l}}var ce=0;function Tl(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var El,_i,Rl,Pl,Il,$i=!1,fr=[],Ut=null,_t=null,$t=null,xn=new Map,bn=new Map,Gt=[],qm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Bl(t,a){switch(t){case"focusin":case"focusout":Ut=null;break;case"dragenter":case"dragleave":_t=null;break;case"mouseover":case"mouseout":$t=null;break;case"pointerover":case"pointerout":xn.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":bn.delete(a.pointerId)}}function yn(t,a,n,i,l,d){return t===null||t.nativeEvent!==d?(t={blockedOn:a,domEventName:n,eventSystemFlags:i,nativeEvent:d,targetContainers:[l]},a!==null&&(a=Bn(a),a!==null&&_i(a)),t):(t.eventSystemFlags|=i,a=t.targetContainers,l!==null&&a.indexOf(l)===-1&&a.push(l),t)}function Qm(t,a,n,i,l){switch(a){case"focusin":return Ut=yn(Ut,t,a,n,i,l),!0;case"dragenter":return _t=yn(_t,t,a,n,i,l),!0;case"mouseover":return $t=yn($t,t,a,n,i,l),!0;case"pointerover":var d=l.pointerId;return xn.set(d,yn(xn.get(d)||null,t,a,n,i,l)),!0;case"gotpointercapture":return d=l.pointerId,bn.set(d,yn(bn.get(d)||null,t,a,n,i,l)),!0}return!1}function Ml(t){var a=ma(t.target);if(a!==null){var n=pa(a);if(n!==null){if(a=n.tag,a===13){if(a=yl(n),a!==null){t.blockedOn=a,Il(t.priority,function(){Rl(n)});return}}else if(a===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function hr(t){if(t.blockedOn!==null)return!1;for(var a=t.targetContainers;0<a.length;){var n=Yi(t.domEventName,t.eventSystemFlags,a[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Bi=i,n.target.dispatchEvent(i),Bi=null}else return a=Bn(n),a!==null&&_i(a),t.blockedOn=n,!1;a.shift()}return!0}function zl(t,a,n){hr(t)&&n.delete(a)}function Xm(){$i=!1,Ut!==null&&hr(Ut)&&(Ut=null),_t!==null&&hr(_t)&&(_t=null),$t!==null&&hr($t)&&($t=null),xn.forEach(zl),bn.forEach(zl)}function vn(t,a){t.blockedOn===a&&(t.blockedOn=null,$i||($i=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,Xm)))}function jn(t){function a(l){return vn(l,t)}if(0<fr.length){vn(fr[0],t);for(var n=1;n<fr.length;n++){var i=fr[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Ut!==null&&vn(Ut,t),_t!==null&&vn(_t,t),$t!==null&&vn($t,t),xn.forEach(a),bn.forEach(a),n=0;n<Gt.length;n++)i=Gt[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Gt.length&&(n=Gt[0],n.blockedOn===null);)Ml(n),n.blockedOn===null&&Gt.shift()}var Ia=q.ReactCurrentBatchConfig,gr=!0;function Zm(t,a,n,i){var l=ce,d=Ia.transition;Ia.transition=null;try{ce=1,Gi(t,a,n,i)}finally{ce=l,Ia.transition=d}}function eu(t,a,n,i){var l=ce,d=Ia.transition;Ia.transition=null;try{ce=4,Gi(t,a,n,i)}finally{ce=l,Ia.transition=d}}function Gi(t,a,n,i){if(gr){var l=Yi(t,a,n,i);if(l===null)cs(t,a,i,xr,n),Bl(t,i);else if(Qm(l,t,a,n,i))i.stopPropagation();else if(Bl(t,i),a&4&&-1<qm.indexOf(t)){for(;l!==null;){var d=Bn(l);if(d!==null&&El(d),d=Yi(t,a,n,i),d===null&&cs(t,a,i,xr,n),d===l)break;l=d}l!==null&&i.stopPropagation()}else cs(t,a,i,null,n)}}var xr=null;function Yi(t,a,n,i){if(xr=null,t=Mi(i),t=ma(t),t!==null)if(a=pa(t),a===null)t=null;else if(n=a.tag,n===13){if(t=yl(a),t!==null)return t;t=null}else if(n===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;t=null}else a!==t&&(t=null);return xr=t,null}function Ol(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Fm()){case Li:return 1;case Al:return 4;case cr:case Um:return 16;case kl:return 536870912;default:return 16}default:return 16}}var Yt=null,Ji=null,br=null;function Dl(){if(br)return br;var t,a=Ji,n=a.length,i,l="value"in Yt?Yt.value:Yt.textContent,d=l.length;for(t=0;t<n&&a[t]===l[t];t++);var f=n-t;for(i=1;i<=f&&a[n-i]===l[d-i];i++);return br=l.slice(t,1<i?1-i:void 0)}function yr(t){var a=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&a===13&&(t=13)):t=a,t===10&&(t=13),32<=t||t===13?t:0}function vr(){return!0}function Wl(){return!1}function et(t){function a(n,i,l,d,f){this._reactName=n,this._targetInst=l,this.type=i,this.nativeEvent=d,this.target=f,this.currentTarget=null;for(var j in t)t.hasOwnProperty(j)&&(n=t[j],this[j]=n?n(d):d[j]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?vr:Wl,this.isPropagationStopped=Wl,this}return $(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=vr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=vr)},persist:function(){},isPersistent:vr}),a}var Ba={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vi=et(Ba),Sn=$({},Ba,{view:0,detail:0}),tu=et(Sn),Ki,qi,wn,jr=$({},Sn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xi,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==wn&&(wn&&t.type==="mousemove"?(Ki=t.screenX-wn.screenX,qi=t.screenY-wn.screenY):qi=Ki=0,wn=t),Ki)},movementY:function(t){return"movementY"in t?t.movementY:qi}}),Ll=et(jr),au=$({},jr,{dataTransfer:0}),nu=et(au),ru=$({},Sn,{relatedTarget:0}),Qi=et(ru),iu=$({},Ba,{animationName:0,elapsedTime:0,pseudoElement:0}),su=et(iu),ou=$({},Ba,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),lu=et(ou),cu=$({},Ba,{data:0}),Hl=et(cu),du={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},pu={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},mu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function uu(t){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(t):(t=mu[t])?!!a[t]:!1}function Xi(){return uu}var fu=$({},Sn,{key:function(t){if(t.key){var a=du[t.key]||t.key;if(a!=="Unidentified")return a}return t.type==="keypress"?(t=yr(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?pu[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xi,charCode:function(t){return t.type==="keypress"?yr(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?yr(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),hu=et(fu),gu=$({},jr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Fl=et(gu),xu=$({},Sn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xi}),bu=et(xu),yu=$({},Ba,{propertyName:0,elapsedTime:0,pseudoElement:0}),vu=et(yu),ju=$({},jr,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Su=et(ju),wu=[9,13,27,32],Zi=b&&"CompositionEvent"in window,Cn=null;b&&"documentMode"in document&&(Cn=document.documentMode);var Cu=b&&"TextEvent"in window&&!Cn,Ul=b&&(!Zi||Cn&&8<Cn&&11>=Cn),_l=" ",$l=!1;function Gl(t,a){switch(t){case"keyup":return wu.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Yl(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ma=!1;function Au(t,a){switch(t){case"compositionend":return Yl(a);case"keypress":return a.which!==32?null:($l=!0,_l);case"textInput":return t=a.data,t===_l&&$l?null:t;default:return null}}function ku(t,a){if(Ma)return t==="compositionend"||!Zi&&Gl(t,a)?(t=Dl(),br=Ji=Yt=null,Ma=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return Ul&&a.locale!=="ko"?null:a.data;default:return null}}var Nu={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Jl(t){var a=t&&t.nodeName&&t.nodeName.toLowerCase();return a==="input"?!!Nu[t.type]:a==="textarea"}function Vl(t,a,n,i){fl(i),a=kr(a,"onChange"),0<a.length&&(n=new Vi("onChange","change",null,n,i),t.push({event:n,listeners:a}))}var An=null,kn=null;function Tu(t){mc(t,0)}function Sr(t){var a=La(t);if(al(a))return t}function Eu(t,a){if(t==="change")return a}var Kl=!1;if(b){var es;if(b){var ts="oninput"in document;if(!ts){var ql=document.createElement("div");ql.setAttribute("oninput","return;"),ts=typeof ql.oninput=="function"}es=ts}else es=!1;Kl=es&&(!document.documentMode||9<document.documentMode)}function Ql(){An&&(An.detachEvent("onpropertychange",Xl),kn=An=null)}function Xl(t){if(t.propertyName==="value"&&Sr(kn)){var a=[];Vl(a,kn,t,Mi(t)),bl(Tu,a)}}function Ru(t,a,n){t==="focusin"?(Ql(),An=a,kn=n,An.attachEvent("onpropertychange",Xl)):t==="focusout"&&Ql()}function Pu(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Sr(kn)}function Iu(t,a){if(t==="click")return Sr(a)}function Bu(t,a){if(t==="input"||t==="change")return Sr(a)}function Mu(t,a){return t===a&&(t!==0||1/t===1/a)||t!==t&&a!==a}var ft=typeof Object.is=="function"?Object.is:Mu;function Nn(t,a){if(ft(t,a))return!0;if(typeof t!="object"||t===null||typeof a!="object"||a===null)return!1;var n=Object.keys(t),i=Object.keys(a);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var l=n[i];if(!h.call(a,l)||!ft(t[l],a[l]))return!1}return!0}function Zl(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ec(t,a){var n=Zl(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=a&&i>=a)return{node:n,offset:a-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Zl(n)}}function tc(t,a){return t&&a?t===a?!0:t&&t.nodeType===3?!1:a&&a.nodeType===3?tc(t,a.parentNode):"contains"in t?t.contains(a):t.compareDocumentPosition?!!(t.compareDocumentPosition(a)&16):!1:!1}function ac(){for(var t=window,a=ir();a instanceof t.HTMLIFrameElement;){try{var n=typeof a.contentWindow.location.href=="string"}catch{n=!1}if(n)t=a.contentWindow;else break;a=ir(t.document)}return a}function as(t){var a=t&&t.nodeName&&t.nodeName.toLowerCase();return a&&(a==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||a==="textarea"||t.contentEditable==="true")}function zu(t){var a=ac(),n=t.focusedElem,i=t.selectionRange;if(a!==n&&n&&n.ownerDocument&&tc(n.ownerDocument.documentElement,n)){if(i!==null&&as(n)){if(a=i.start,t=i.end,t===void 0&&(t=a),"selectionStart"in n)n.selectionStart=a,n.selectionEnd=Math.min(t,n.value.length);else if(t=(a=n.ownerDocument||document)&&a.defaultView||window,t.getSelection){t=t.getSelection();var l=n.textContent.length,d=Math.min(i.start,l);i=i.end===void 0?d:Math.min(i.end,l),!t.extend&&d>i&&(l=i,i=d,d=l),l=ec(n,d);var f=ec(n,i);l&&f&&(t.rangeCount!==1||t.anchorNode!==l.node||t.anchorOffset!==l.offset||t.focusNode!==f.node||t.focusOffset!==f.offset)&&(a=a.createRange(),a.setStart(l.node,l.offset),t.removeAllRanges(),d>i?(t.addRange(a),t.extend(f.node,f.offset)):(a.setEnd(f.node,f.offset),t.addRange(a)))}}for(a=[],t=n;t=t.parentNode;)t.nodeType===1&&a.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<a.length;n++)t=a[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Ou=b&&"documentMode"in document&&11>=document.documentMode,za=null,ns=null,Tn=null,rs=!1;function nc(t,a,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;rs||za==null||za!==ir(i)||(i=za,"selectionStart"in i&&as(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Tn&&Nn(Tn,i)||(Tn=i,i=kr(ns,"onSelect"),0<i.length&&(a=new Vi("onSelect","select",null,a,n),t.push({event:a,listeners:i}),a.target=za)))}function wr(t,a){var n={};return n[t.toLowerCase()]=a.toLowerCase(),n["Webkit"+t]="webkit"+a,n["Moz"+t]="moz"+a,n}var Oa={animationend:wr("Animation","AnimationEnd"),animationiteration:wr("Animation","AnimationIteration"),animationstart:wr("Animation","AnimationStart"),transitionend:wr("Transition","TransitionEnd")},is={},rc={};b&&(rc=document.createElement("div").style,"AnimationEvent"in window||(delete Oa.animationend.animation,delete Oa.animationiteration.animation,delete Oa.animationstart.animation),"TransitionEvent"in window||delete Oa.transitionend.transition);function Cr(t){if(is[t])return is[t];if(!Oa[t])return t;var a=Oa[t],n;for(n in a)if(a.hasOwnProperty(n)&&n in rc)return is[t]=a[n];return t}var ic=Cr("animationend"),sc=Cr("animationiteration"),oc=Cr("animationstart"),lc=Cr("transitionend"),cc=new Map,dc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Jt(t,a){cc.set(t,a),p(a,[t])}for(var ss=0;ss<dc.length;ss++){var os=dc[ss],Du=os.toLowerCase(),Wu=os[0].toUpperCase()+os.slice(1);Jt(Du,"on"+Wu)}Jt(ic,"onAnimationEnd"),Jt(sc,"onAnimationIteration"),Jt(oc,"onAnimationStart"),Jt("dblclick","onDoubleClick"),Jt("focusin","onFocus"),Jt("focusout","onBlur"),Jt(lc,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),p("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),p("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),p("onBeforeInput",["compositionend","keypress","textInput","paste"]),p("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),p("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),p("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var En="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Lu=new Set("cancel close invalid load scroll toggle".split(" ").concat(En));function pc(t,a,n){var i=t.type||"unknown-event";t.currentTarget=n,Dm(i,a,void 0,t),t.currentTarget=null}function mc(t,a){a=(a&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],l=i.event;i=i.listeners;e:{var d=void 0;if(a)for(var f=i.length-1;0<=f;f--){var j=i[f],S=j.instance,T=j.currentTarget;if(j=j.listener,S!==d&&l.isPropagationStopped())break e;pc(l,j,T),d=S}else for(f=0;f<i.length;f++){if(j=i[f],S=j.instance,T=j.currentTarget,j=j.listener,S!==d&&l.isPropagationStopped())break e;pc(l,j,T),d=S}}}if(lr)throw t=Wi,lr=!1,Wi=null,t}function me(t,a){var n=a[hs];n===void 0&&(n=a[hs]=new Set);var i=t+"__bubble";n.has(i)||(uc(a,t,2,!1),n.add(i))}function ls(t,a,n){var i=0;a&&(i|=4),uc(n,t,i,a)}var Ar="_reactListening"+Math.random().toString(36).slice(2);function Rn(t){if(!t[Ar]){t[Ar]=!0,c.forEach(function(n){n!=="selectionchange"&&(Lu.has(n)||ls(n,!1,t),ls(n,!0,t))});var a=t.nodeType===9?t:t.ownerDocument;a===null||a[Ar]||(a[Ar]=!0,ls("selectionchange",!1,a))}}function uc(t,a,n,i){switch(Ol(a)){case 1:var l=Zm;break;case 4:l=eu;break;default:l=Gi}n=l.bind(null,a,n,t),l=void 0,!Di||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(l=!0),i?l!==void 0?t.addEventListener(a,n,{capture:!0,passive:l}):t.addEventListener(a,n,!0):l!==void 0?t.addEventListener(a,n,{passive:l}):t.addEventListener(a,n,!1)}function cs(t,a,n,i,l){var d=i;if((a&1)===0&&(a&2)===0&&i!==null)e:for(;;){if(i===null)return;var f=i.tag;if(f===3||f===4){var j=i.stateNode.containerInfo;if(j===l||j.nodeType===8&&j.parentNode===l)break;if(f===4)for(f=i.return;f!==null;){var S=f.tag;if((S===3||S===4)&&(S=f.stateNode.containerInfo,S===l||S.nodeType===8&&S.parentNode===l))return;f=f.return}for(;j!==null;){if(f=ma(j),f===null)return;if(S=f.tag,S===5||S===6){i=d=f;continue e}j=j.parentNode}}i=i.return}bl(function(){var T=d,M=Mi(n),O=[];e:{var I=cc.get(t);if(I!==void 0){var U=Vi,G=t;switch(t){case"keypress":if(yr(n)===0)break e;case"keydown":case"keyup":U=hu;break;case"focusin":G="focus",U=Qi;break;case"focusout":G="blur",U=Qi;break;case"beforeblur":case"afterblur":U=Qi;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":U=Ll;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":U=nu;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":U=bu;break;case ic:case sc:case oc:U=su;break;case lc:U=vu;break;case"scroll":U=tu;break;case"wheel":U=Su;break;case"copy":case"cut":case"paste":U=lu;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":U=Fl}var Y=(a&4)!==0,Ce=!Y&&t==="scroll",A=Y?I!==null?I+"Capture":null:I;Y=[];for(var w=T,k;w!==null;){k=w;var W=k.stateNode;if(k.tag===5&&W!==null&&(k=W,A!==null&&(W=mn(w,A),W!=null&&Y.push(Pn(w,W,k)))),Ce)break;w=w.return}0<Y.length&&(I=new U(I,G,null,n,M),O.push({event:I,listeners:Y}))}}if((a&7)===0){e:{if(I=t==="mouseover"||t==="pointerover",U=t==="mouseout"||t==="pointerout",I&&n!==Bi&&(G=n.relatedTarget||n.fromElement)&&(ma(G)||G[Pt]))break e;if((U||I)&&(I=M.window===M?M:(I=M.ownerDocument)?I.defaultView||I.parentWindow:window,U?(G=n.relatedTarget||n.toElement,U=T,G=G?ma(G):null,G!==null&&(Ce=pa(G),G!==Ce||G.tag!==5&&G.tag!==6)&&(G=null)):(U=null,G=T),U!==G)){if(Y=Ll,W="onMouseLeave",A="onMouseEnter",w="mouse",(t==="pointerout"||t==="pointerover")&&(Y=Fl,W="onPointerLeave",A="onPointerEnter",w="pointer"),Ce=U==null?I:La(U),k=G==null?I:La(G),I=new Y(W,w+"leave",U,n,M),I.target=Ce,I.relatedTarget=k,W=null,ma(M)===T&&(Y=new Y(A,w+"enter",G,n,M),Y.target=k,Y.relatedTarget=Ce,W=Y),Ce=W,U&&G)t:{for(Y=U,A=G,w=0,k=Y;k;k=Da(k))w++;for(k=0,W=A;W;W=Da(W))k++;for(;0<w-k;)Y=Da(Y),w--;for(;0<k-w;)A=Da(A),k--;for(;w--;){if(Y===A||A!==null&&Y===A.alternate)break t;Y=Da(Y),A=Da(A)}Y=null}else Y=null;U!==null&&fc(O,I,U,Y,!1),G!==null&&Ce!==null&&fc(O,Ce,G,Y,!0)}}e:{if(I=T?La(T):window,U=I.nodeName&&I.nodeName.toLowerCase(),U==="select"||U==="input"&&I.type==="file")var J=Eu;else if(Jl(I))if(Kl)J=Bu;else{J=Pu;var V=Ru}else(U=I.nodeName)&&U.toLowerCase()==="input"&&(I.type==="checkbox"||I.type==="radio")&&(J=Iu);if(J&&(J=J(t,T))){Vl(O,J,n,M);break e}V&&V(t,I,T),t==="focusout"&&(V=I._wrapperState)&&V.controlled&&I.type==="number"&&Ti(I,"number",I.value)}switch(V=T?La(T):window,t){case"focusin":(Jl(V)||V.contentEditable==="true")&&(za=V,ns=T,Tn=null);break;case"focusout":Tn=ns=za=null;break;case"mousedown":rs=!0;break;case"contextmenu":case"mouseup":case"dragend":rs=!1,nc(O,n,M);break;case"selectionchange":if(Ou)break;case"keydown":case"keyup":nc(O,n,M)}var K;if(Zi)e:{switch(t){case"compositionstart":var Z="onCompositionStart";break e;case"compositionend":Z="onCompositionEnd";break e;case"compositionupdate":Z="onCompositionUpdate";break e}Z=void 0}else Ma?Gl(t,n)&&(Z="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(Z="onCompositionStart");Z&&(Ul&&n.locale!=="ko"&&(Ma||Z!=="onCompositionStart"?Z==="onCompositionEnd"&&Ma&&(K=Dl()):(Yt=M,Ji="value"in Yt?Yt.value:Yt.textContent,Ma=!0)),V=kr(T,Z),0<V.length&&(Z=new Hl(Z,t,null,n,M),O.push({event:Z,listeners:V}),K?Z.data=K:(K=Yl(n),K!==null&&(Z.data=K)))),(K=Cu?Au(t,n):ku(t,n))&&(T=kr(T,"onBeforeInput"),0<T.length&&(M=new Hl("onBeforeInput","beforeinput",null,n,M),O.push({event:M,listeners:T}),M.data=K))}mc(O,a)})}function Pn(t,a,n){return{instance:t,listener:a,currentTarget:n}}function kr(t,a){for(var n=a+"Capture",i=[];t!==null;){var l=t,d=l.stateNode;l.tag===5&&d!==null&&(l=d,d=mn(t,n),d!=null&&i.unshift(Pn(t,d,l)),d=mn(t,a),d!=null&&i.push(Pn(t,d,l))),t=t.return}return i}function Da(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function fc(t,a,n,i,l){for(var d=a._reactName,f=[];n!==null&&n!==i;){var j=n,S=j.alternate,T=j.stateNode;if(S!==null&&S===i)break;j.tag===5&&T!==null&&(j=T,l?(S=mn(n,d),S!=null&&f.unshift(Pn(n,S,j))):l||(S=mn(n,d),S!=null&&f.push(Pn(n,S,j)))),n=n.return}f.length!==0&&t.push({event:a,listeners:f})}var Hu=/\r\n?/g,Fu=/\u0000|\uFFFD/g;function hc(t){return(typeof t=="string"?t:""+t).replace(Hu,`
`).replace(Fu,"")}function Nr(t,a,n){if(a=hc(a),hc(t)!==a&&n)throw Error(o(425))}function Tr(){}var ds=null,ps=null;function ms(t,a){return t==="textarea"||t==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var us=typeof setTimeout=="function"?setTimeout:void 0,Uu=typeof clearTimeout=="function"?clearTimeout:void 0,gc=typeof Promise=="function"?Promise:void 0,_u=typeof queueMicrotask=="function"?queueMicrotask:typeof gc<"u"?function(t){return gc.resolve(null).then(t).catch($u)}:us;function $u(t){setTimeout(function(){throw t})}function fs(t,a){var n=a,i=0;do{var l=n.nextSibling;if(t.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(i===0){t.removeChild(l),jn(a);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=l}while(n);jn(a)}function Vt(t){for(;t!=null;t=t.nextSibling){var a=t.nodeType;if(a===1||a===3)break;if(a===8){if(a=t.data,a==="$"||a==="$!"||a==="$?")break;if(a==="/$")return null}}return t}function xc(t){t=t.previousSibling;for(var a=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(a===0)return t;a--}else n==="/$"&&a++}t=t.previousSibling}return null}var Wa=Math.random().toString(36).slice(2),At="__reactFiber$"+Wa,In="__reactProps$"+Wa,Pt="__reactContainer$"+Wa,hs="__reactEvents$"+Wa,Gu="__reactListeners$"+Wa,Yu="__reactHandles$"+Wa;function ma(t){var a=t[At];if(a)return a;for(var n=t.parentNode;n;){if(a=n[Pt]||n[At]){if(n=a.alternate,a.child!==null||n!==null&&n.child!==null)for(t=xc(t);t!==null;){if(n=t[At])return n;t=xc(t)}return a}t=n,n=t.parentNode}return null}function Bn(t){return t=t[At]||t[Pt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function La(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(o(33))}function Er(t){return t[In]||null}var gs=[],Ha=-1;function Kt(t){return{current:t}}function ue(t){0>Ha||(t.current=gs[Ha],gs[Ha]=null,Ha--)}function pe(t,a){Ha++,gs[Ha]=t.current,t.current=a}var qt={},De=Kt(qt),Ye=Kt(!1),ua=qt;function Fa(t,a){var n=t.type.contextTypes;if(!n)return qt;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===a)return i.__reactInternalMemoizedMaskedChildContext;var l={},d;for(d in n)l[d]=a[d];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=a,t.__reactInternalMemoizedMaskedChildContext=l),l}function Je(t){return t=t.childContextTypes,t!=null}function Rr(){ue(Ye),ue(De)}function bc(t,a,n){if(De.current!==qt)throw Error(o(168));pe(De,a),pe(Ye,n)}function yc(t,a,n){var i=t.stateNode;if(a=a.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var l in i)if(!(l in a))throw Error(o(108,de(t)||"Unknown",l));return $({},n,i)}function Pr(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||qt,ua=De.current,pe(De,t),pe(Ye,Ye.current),!0}function vc(t,a,n){var i=t.stateNode;if(!i)throw Error(o(169));n?(t=yc(t,a,ua),i.__reactInternalMemoizedMergedChildContext=t,ue(Ye),ue(De),pe(De,t)):ue(Ye),pe(Ye,n)}var It=null,Ir=!1,xs=!1;function jc(t){It===null?It=[t]:It.push(t)}function Ju(t){Ir=!0,jc(t)}function Qt(){if(!xs&&It!==null){xs=!0;var t=0,a=ce;try{var n=It;for(ce=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}It=null,Ir=!1}catch(l){throw It!==null&&(It=It.slice(t+1)),wl(Li,Qt),l}finally{ce=a,xs=!1}}return null}var Ua=[],_a=0,Br=null,Mr=0,rt=[],it=0,fa=null,Bt=1,Mt="";function ha(t,a){Ua[_a++]=Mr,Ua[_a++]=Br,Br=t,Mr=a}function Sc(t,a,n){rt[it++]=Bt,rt[it++]=Mt,rt[it++]=fa,fa=t;var i=Bt;t=Mt;var l=32-ut(i)-1;i&=~(1<<l),n+=1;var d=32-ut(a)+l;if(30<d){var f=l-l%5;d=(i&(1<<f)-1).toString(32),i>>=f,l-=f,Bt=1<<32-ut(a)+l|n<<l|i,Mt=d+t}else Bt=1<<d|n<<l|i,Mt=t}function bs(t){t.return!==null&&(ha(t,1),Sc(t,1,0))}function ys(t){for(;t===Br;)Br=Ua[--_a],Ua[_a]=null,Mr=Ua[--_a],Ua[_a]=null;for(;t===fa;)fa=rt[--it],rt[it]=null,Mt=rt[--it],rt[it]=null,Bt=rt[--it],rt[it]=null}var tt=null,at=null,xe=!1,ht=null;function wc(t,a){var n=ct(5,null,null,0);n.elementType="DELETED",n.stateNode=a,n.return=t,a=t.deletions,a===null?(t.deletions=[n],t.flags|=16):a.push(n)}function Cc(t,a){switch(t.tag){case 5:var n=t.type;return a=a.nodeType!==1||n.toLowerCase()!==a.nodeName.toLowerCase()?null:a,a!==null?(t.stateNode=a,tt=t,at=Vt(a.firstChild),!0):!1;case 6:return a=t.pendingProps===""||a.nodeType!==3?null:a,a!==null?(t.stateNode=a,tt=t,at=null,!0):!1;case 13:return a=a.nodeType!==8?null:a,a!==null?(n=fa!==null?{id:Bt,overflow:Mt}:null,t.memoizedState={dehydrated:a,treeContext:n,retryLane:1073741824},n=ct(18,null,null,0),n.stateNode=a,n.return=t,t.child=n,tt=t,at=null,!0):!1;default:return!1}}function vs(t){return(t.mode&1)!==0&&(t.flags&128)===0}function js(t){if(xe){var a=at;if(a){var n=a;if(!Cc(t,a)){if(vs(t))throw Error(o(418));a=Vt(n.nextSibling);var i=tt;a&&Cc(t,a)?wc(i,n):(t.flags=t.flags&-4097|2,xe=!1,tt=t)}}else{if(vs(t))throw Error(o(418));t.flags=t.flags&-4097|2,xe=!1,tt=t}}}function Ac(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;tt=t}function zr(t){if(t!==tt)return!1;if(!xe)return Ac(t),xe=!0,!1;var a;if((a=t.tag!==3)&&!(a=t.tag!==5)&&(a=t.type,a=a!=="head"&&a!=="body"&&!ms(t.type,t.memoizedProps)),a&&(a=at)){if(vs(t))throw kc(),Error(o(418));for(;a;)wc(t,a),a=Vt(a.nextSibling)}if(Ac(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(o(317));e:{for(t=t.nextSibling,a=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(a===0){at=Vt(t.nextSibling);break e}a--}else n!=="$"&&n!=="$!"&&n!=="$?"||a++}t=t.nextSibling}at=null}}else at=tt?Vt(t.stateNode.nextSibling):null;return!0}function kc(){for(var t=at;t;)t=Vt(t.nextSibling)}function $a(){at=tt=null,xe=!1}function Ss(t){ht===null?ht=[t]:ht.push(t)}var Vu=q.ReactCurrentBatchConfig;function Mn(t,a,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(o(309));var i=n.stateNode}if(!i)throw Error(o(147,t));var l=i,d=""+t;return a!==null&&a.ref!==null&&typeof a.ref=="function"&&a.ref._stringRef===d?a.ref:(a=function(f){var j=l.refs;f===null?delete j[d]:j[d]=f},a._stringRef=d,a)}if(typeof t!="string")throw Error(o(284));if(!n._owner)throw Error(o(290,t))}return t}function Or(t,a){throw t=Object.prototype.toString.call(a),Error(o(31,t==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":t))}function Nc(t){var a=t._init;return a(t._payload)}function Tc(t){function a(A,w){if(t){var k=A.deletions;k===null?(A.deletions=[w],A.flags|=16):k.push(w)}}function n(A,w){if(!t)return null;for(;w!==null;)a(A,w),w=w.sibling;return null}function i(A,w){for(A=new Map;w!==null;)w.key!==null?A.set(w.key,w):A.set(w.index,w),w=w.sibling;return A}function l(A,w){return A=ia(A,w),A.index=0,A.sibling=null,A}function d(A,w,k){return A.index=k,t?(k=A.alternate,k!==null?(k=k.index,k<w?(A.flags|=2,w):k):(A.flags|=2,w)):(A.flags|=1048576,w)}function f(A){return t&&A.alternate===null&&(A.flags|=2),A}function j(A,w,k,W){return w===null||w.tag!==6?(w=fo(k,A.mode,W),w.return=A,w):(w=l(w,k),w.return=A,w)}function S(A,w,k,W){var J=k.type;return J===Fe?M(A,w,k.props.children,W,k.key):w!==null&&(w.elementType===J||typeof J=="object"&&J!==null&&J.$$typeof===Ge&&Nc(J)===w.type)?(W=l(w,k.props),W.ref=Mn(A,w,k),W.return=A,W):(W=si(k.type,k.key,k.props,null,A.mode,W),W.ref=Mn(A,w,k),W.return=A,W)}function T(A,w,k,W){return w===null||w.tag!==4||w.stateNode.containerInfo!==k.containerInfo||w.stateNode.implementation!==k.implementation?(w=ho(k,A.mode,W),w.return=A,w):(w=l(w,k.children||[]),w.return=A,w)}function M(A,w,k,W,J){return w===null||w.tag!==7?(w=wa(k,A.mode,W,J),w.return=A,w):(w=l(w,k),w.return=A,w)}function O(A,w,k){if(typeof w=="string"&&w!==""||typeof w=="number")return w=fo(""+w,A.mode,k),w.return=A,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case he:return k=si(w.type,w.key,w.props,null,A.mode,k),k.ref=Mn(A,null,w),k.return=A,k;case Ne:return w=ho(w,A.mode,k),w.return=A,w;case Ge:var W=w._init;return O(A,W(w._payload),k)}if(cn(w)||Q(w))return w=wa(w,A.mode,k,null),w.return=A,w;Or(A,w)}return null}function I(A,w,k,W){var J=w!==null?w.key:null;if(typeof k=="string"&&k!==""||typeof k=="number")return J!==null?null:j(A,w,""+k,W);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case he:return k.key===J?S(A,w,k,W):null;case Ne:return k.key===J?T(A,w,k,W):null;case Ge:return J=k._init,I(A,w,J(k._payload),W)}if(cn(k)||Q(k))return J!==null?null:M(A,w,k,W,null);Or(A,k)}return null}function U(A,w,k,W,J){if(typeof W=="string"&&W!==""||typeof W=="number")return A=A.get(k)||null,j(w,A,""+W,J);if(typeof W=="object"&&W!==null){switch(W.$$typeof){case he:return A=A.get(W.key===null?k:W.key)||null,S(w,A,W,J);case Ne:return A=A.get(W.key===null?k:W.key)||null,T(w,A,W,J);case Ge:var V=W._init;return U(A,w,k,V(W._payload),J)}if(cn(W)||Q(W))return A=A.get(k)||null,M(w,A,W,J,null);Or(w,W)}return null}function G(A,w,k,W){for(var J=null,V=null,K=w,Z=w=0,Be=null;K!==null&&Z<k.length;Z++){K.index>Z?(Be=K,K=null):Be=K.sibling;var se=I(A,K,k[Z],W);if(se===null){K===null&&(K=Be);break}t&&K&&se.alternate===null&&a(A,K),w=d(se,w,Z),V===null?J=se:V.sibling=se,V=se,K=Be}if(Z===k.length)return n(A,K),xe&&ha(A,Z),J;if(K===null){for(;Z<k.length;Z++)K=O(A,k[Z],W),K!==null&&(w=d(K,w,Z),V===null?J=K:V.sibling=K,V=K);return xe&&ha(A,Z),J}for(K=i(A,K);Z<k.length;Z++)Be=U(K,A,Z,k[Z],W),Be!==null&&(t&&Be.alternate!==null&&K.delete(Be.key===null?Z:Be.key),w=d(Be,w,Z),V===null?J=Be:V.sibling=Be,V=Be);return t&&K.forEach(function(sa){return a(A,sa)}),xe&&ha(A,Z),J}function Y(A,w,k,W){var J=Q(k);if(typeof J!="function")throw Error(o(150));if(k=J.call(k),k==null)throw Error(o(151));for(var V=J=null,K=w,Z=w=0,Be=null,se=k.next();K!==null&&!se.done;Z++,se=k.next()){K.index>Z?(Be=K,K=null):Be=K.sibling;var sa=I(A,K,se.value,W);if(sa===null){K===null&&(K=Be);break}t&&K&&sa.alternate===null&&a(A,K),w=d(sa,w,Z),V===null?J=sa:V.sibling=sa,V=sa,K=Be}if(se.done)return n(A,K),xe&&ha(A,Z),J;if(K===null){for(;!se.done;Z++,se=k.next())se=O(A,se.value,W),se!==null&&(w=d(se,w,Z),V===null?J=se:V.sibling=se,V=se);return xe&&ha(A,Z),J}for(K=i(A,K);!se.done;Z++,se=k.next())se=U(K,A,Z,se.value,W),se!==null&&(t&&se.alternate!==null&&K.delete(se.key===null?Z:se.key),w=d(se,w,Z),V===null?J=se:V.sibling=se,V=se);return t&&K.forEach(function(Tf){return a(A,Tf)}),xe&&ha(A,Z),J}function Ce(A,w,k,W){if(typeof k=="object"&&k!==null&&k.type===Fe&&k.key===null&&(k=k.props.children),typeof k=="object"&&k!==null){switch(k.$$typeof){case he:e:{for(var J=k.key,V=w;V!==null;){if(V.key===J){if(J=k.type,J===Fe){if(V.tag===7){n(A,V.sibling),w=l(V,k.props.children),w.return=A,A=w;break e}}else if(V.elementType===J||typeof J=="object"&&J!==null&&J.$$typeof===Ge&&Nc(J)===V.type){n(A,V.sibling),w=l(V,k.props),w.ref=Mn(A,V,k),w.return=A,A=w;break e}n(A,V);break}else a(A,V);V=V.sibling}k.type===Fe?(w=wa(k.props.children,A.mode,W,k.key),w.return=A,A=w):(W=si(k.type,k.key,k.props,null,A.mode,W),W.ref=Mn(A,w,k),W.return=A,A=W)}return f(A);case Ne:e:{for(V=k.key;w!==null;){if(w.key===V)if(w.tag===4&&w.stateNode.containerInfo===k.containerInfo&&w.stateNode.implementation===k.implementation){n(A,w.sibling),w=l(w,k.children||[]),w.return=A,A=w;break e}else{n(A,w);break}else a(A,w);w=w.sibling}w=ho(k,A.mode,W),w.return=A,A=w}return f(A);case Ge:return V=k._init,Ce(A,w,V(k._payload),W)}if(cn(k))return G(A,w,k,W);if(Q(k))return Y(A,w,k,W);Or(A,k)}return typeof k=="string"&&k!==""||typeof k=="number"?(k=""+k,w!==null&&w.tag===6?(n(A,w.sibling),w=l(w,k),w.return=A,A=w):(n(A,w),w=fo(k,A.mode,W),w.return=A,A=w),f(A)):n(A,w)}return Ce}var Ga=Tc(!0),Ec=Tc(!1),Dr=Kt(null),Wr=null,Ya=null,ws=null;function Cs(){ws=Ya=Wr=null}function As(t){var a=Dr.current;ue(Dr),t._currentValue=a}function ks(t,a,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&a)!==a?(t.childLanes|=a,i!==null&&(i.childLanes|=a)):i!==null&&(i.childLanes&a)!==a&&(i.childLanes|=a),t===n)break;t=t.return}}function Ja(t,a){Wr=t,ws=Ya=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&a)!==0&&(Ve=!0),t.firstContext=null)}function st(t){var a=t._currentValue;if(ws!==t)if(t={context:t,memoizedValue:a,next:null},Ya===null){if(Wr===null)throw Error(o(308));Ya=t,Wr.dependencies={lanes:0,firstContext:t}}else Ya=Ya.next=t;return a}var ga=null;function Ns(t){ga===null?ga=[t]:ga.push(t)}function Rc(t,a,n,i){var l=a.interleaved;return l===null?(n.next=n,Ns(a)):(n.next=l.next,l.next=n),a.interleaved=n,zt(t,i)}function zt(t,a){t.lanes|=a;var n=t.alternate;for(n!==null&&(n.lanes|=a),n=t,t=t.return;t!==null;)t.childLanes|=a,n=t.alternate,n!==null&&(n.childLanes|=a),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Xt=!1;function Ts(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Pc(t,a){t=t.updateQueue,a.updateQueue===t&&(a.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ot(t,a){return{eventTime:t,lane:a,tag:0,payload:null,callback:null,next:null}}function Zt(t,a,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,(ne&2)!==0){var l=i.pending;return l===null?a.next=a:(a.next=l.next,l.next=a),i.pending=a,zt(t,n)}return l=i.interleaved,l===null?(a.next=a,Ns(i)):(a.next=l.next,l.next=a),i.interleaved=a,zt(t,n)}function Lr(t,a,n){if(a=a.updateQueue,a!==null&&(a=a.shared,(n&4194240)!==0)){var i=a.lanes;i&=t.pendingLanes,n|=i,a.lanes=n,Ui(t,n)}}function Ic(t,a){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var l=null,d=null;if(n=n.firstBaseUpdate,n!==null){do{var f={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};d===null?l=d=f:d=d.next=f,n=n.next}while(n!==null);d===null?l=d=a:d=d.next=a}else l=d=a;n={baseState:i.baseState,firstBaseUpdate:l,lastBaseUpdate:d,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=a:t.next=a,n.lastBaseUpdate=a}function Hr(t,a,n,i){var l=t.updateQueue;Xt=!1;var d=l.firstBaseUpdate,f=l.lastBaseUpdate,j=l.shared.pending;if(j!==null){l.shared.pending=null;var S=j,T=S.next;S.next=null,f===null?d=T:f.next=T,f=S;var M=t.alternate;M!==null&&(M=M.updateQueue,j=M.lastBaseUpdate,j!==f&&(j===null?M.firstBaseUpdate=T:j.next=T,M.lastBaseUpdate=S))}if(d!==null){var O=l.baseState;f=0,M=T=S=null,j=d;do{var I=j.lane,U=j.eventTime;if((i&I)===I){M!==null&&(M=M.next={eventTime:U,lane:0,tag:j.tag,payload:j.payload,callback:j.callback,next:null});e:{var G=t,Y=j;switch(I=a,U=n,Y.tag){case 1:if(G=Y.payload,typeof G=="function"){O=G.call(U,O,I);break e}O=G;break e;case 3:G.flags=G.flags&-65537|128;case 0:if(G=Y.payload,I=typeof G=="function"?G.call(U,O,I):G,I==null)break e;O=$({},O,I);break e;case 2:Xt=!0}}j.callback!==null&&j.lane!==0&&(t.flags|=64,I=l.effects,I===null?l.effects=[j]:I.push(j))}else U={eventTime:U,lane:I,tag:j.tag,payload:j.payload,callback:j.callback,next:null},M===null?(T=M=U,S=O):M=M.next=U,f|=I;if(j=j.next,j===null){if(j=l.shared.pending,j===null)break;I=j,j=I.next,I.next=null,l.lastBaseUpdate=I,l.shared.pending=null}}while(!0);if(M===null&&(S=O),l.baseState=S,l.firstBaseUpdate=T,l.lastBaseUpdate=M,a=l.shared.interleaved,a!==null){l=a;do f|=l.lane,l=l.next;while(l!==a)}else d===null&&(l.shared.lanes=0);ya|=f,t.lanes=f,t.memoizedState=O}}function Bc(t,a,n){if(t=a.effects,a.effects=null,t!==null)for(a=0;a<t.length;a++){var i=t[a],l=i.callback;if(l!==null){if(i.callback=null,i=n,typeof l!="function")throw Error(o(191,l));l.call(i)}}}var zn={},kt=Kt(zn),On=Kt(zn),Dn=Kt(zn);function xa(t){if(t===zn)throw Error(o(174));return t}function Es(t,a){switch(pe(Dn,a),pe(On,t),pe(kt,zn),t=a.nodeType,t){case 9:case 11:a=(a=a.documentElement)?a.namespaceURI:Ri(null,"");break;default:t=t===8?a.parentNode:a,a=t.namespaceURI||null,t=t.tagName,a=Ri(a,t)}ue(kt),pe(kt,a)}function Va(){ue(kt),ue(On),ue(Dn)}function Mc(t){xa(Dn.current);var a=xa(kt.current),n=Ri(a,t.type);a!==n&&(pe(On,t),pe(kt,n))}function Rs(t){On.current===t&&(ue(kt),ue(On))}var be=Kt(0);function Fr(t){for(var a=t;a!==null;){if(a.tag===13){var n=a.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return a}else if(a.tag===19&&a.memoizedProps.revealOrder!==void 0){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===t)break;for(;a.sibling===null;){if(a.return===null||a.return===t)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var Ps=[];function Is(){for(var t=0;t<Ps.length;t++)Ps[t]._workInProgressVersionPrimary=null;Ps.length=0}var Ur=q.ReactCurrentDispatcher,Bs=q.ReactCurrentBatchConfig,ba=0,ye=null,Te=null,Pe=null,_r=!1,Wn=!1,Ln=0,Ku=0;function We(){throw Error(o(321))}function Ms(t,a){if(a===null)return!1;for(var n=0;n<a.length&&n<t.length;n++)if(!ft(t[n],a[n]))return!1;return!0}function zs(t,a,n,i,l,d){if(ba=d,ye=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,Ur.current=t===null||t.memoizedState===null?Zu:ef,t=n(i,l),Wn){d=0;do{if(Wn=!1,Ln=0,25<=d)throw Error(o(301));d+=1,Pe=Te=null,a.updateQueue=null,Ur.current=tf,t=n(i,l)}while(Wn)}if(Ur.current=Yr,a=Te!==null&&Te.next!==null,ba=0,Pe=Te=ye=null,_r=!1,a)throw Error(o(300));return t}function Os(){var t=Ln!==0;return Ln=0,t}function Nt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Pe===null?ye.memoizedState=Pe=t:Pe=Pe.next=t,Pe}function ot(){if(Te===null){var t=ye.alternate;t=t!==null?t.memoizedState:null}else t=Te.next;var a=Pe===null?ye.memoizedState:Pe.next;if(a!==null)Pe=a,Te=t;else{if(t===null)throw Error(o(310));Te=t,t={memoizedState:Te.memoizedState,baseState:Te.baseState,baseQueue:Te.baseQueue,queue:Te.queue,next:null},Pe===null?ye.memoizedState=Pe=t:Pe=Pe.next=t}return Pe}function Hn(t,a){return typeof a=="function"?a(t):a}function Ds(t){var a=ot(),n=a.queue;if(n===null)throw Error(o(311));n.lastRenderedReducer=t;var i=Te,l=i.baseQueue,d=n.pending;if(d!==null){if(l!==null){var f=l.next;l.next=d.next,d.next=f}i.baseQueue=l=d,n.pending=null}if(l!==null){d=l.next,i=i.baseState;var j=f=null,S=null,T=d;do{var M=T.lane;if((ba&M)===M)S!==null&&(S=S.next={lane:0,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null}),i=T.hasEagerState?T.eagerState:t(i,T.action);else{var O={lane:M,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null};S===null?(j=S=O,f=i):S=S.next=O,ye.lanes|=M,ya|=M}T=T.next}while(T!==null&&T!==d);S===null?f=i:S.next=j,ft(i,a.memoizedState)||(Ve=!0),a.memoizedState=i,a.baseState=f,a.baseQueue=S,n.lastRenderedState=i}if(t=n.interleaved,t!==null){l=t;do d=l.lane,ye.lanes|=d,ya|=d,l=l.next;while(l!==t)}else l===null&&(n.lanes=0);return[a.memoizedState,n.dispatch]}function Ws(t){var a=ot(),n=a.queue;if(n===null)throw Error(o(311));n.lastRenderedReducer=t;var i=n.dispatch,l=n.pending,d=a.memoizedState;if(l!==null){n.pending=null;var f=l=l.next;do d=t(d,f.action),f=f.next;while(f!==l);ft(d,a.memoizedState)||(Ve=!0),a.memoizedState=d,a.baseQueue===null&&(a.baseState=d),n.lastRenderedState=d}return[d,i]}function zc(){}function Oc(t,a){var n=ye,i=ot(),l=a(),d=!ft(i.memoizedState,l);if(d&&(i.memoizedState=l,Ve=!0),i=i.queue,Ls(Lc.bind(null,n,i,t),[t]),i.getSnapshot!==a||d||Pe!==null&&Pe.memoizedState.tag&1){if(n.flags|=2048,Fn(9,Wc.bind(null,n,i,l,a),void 0,null),Ie===null)throw Error(o(349));(ba&30)!==0||Dc(n,a,l)}return l}function Dc(t,a,n){t.flags|=16384,t={getSnapshot:a,value:n},a=ye.updateQueue,a===null?(a={lastEffect:null,stores:null},ye.updateQueue=a,a.stores=[t]):(n=a.stores,n===null?a.stores=[t]:n.push(t))}function Wc(t,a,n,i){a.value=n,a.getSnapshot=i,Hc(a)&&Fc(t)}function Lc(t,a,n){return n(function(){Hc(a)&&Fc(t)})}function Hc(t){var a=t.getSnapshot;t=t.value;try{var n=a();return!ft(t,n)}catch{return!0}}function Fc(t){var a=zt(t,1);a!==null&&yt(a,t,1,-1)}function Uc(t){var a=Nt();return typeof t=="function"&&(t=t()),a.memoizedState=a.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Hn,lastRenderedState:t},a.queue=t,t=t.dispatch=Xu.bind(null,ye,t),[a.memoizedState,t]}function Fn(t,a,n,i){return t={tag:t,create:a,destroy:n,deps:i,next:null},a=ye.updateQueue,a===null?(a={lastEffect:null,stores:null},ye.updateQueue=a,a.lastEffect=t.next=t):(n=a.lastEffect,n===null?a.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,a.lastEffect=t)),t}function _c(){return ot().memoizedState}function $r(t,a,n,i){var l=Nt();ye.flags|=t,l.memoizedState=Fn(1|a,n,void 0,i===void 0?null:i)}function Gr(t,a,n,i){var l=ot();i=i===void 0?null:i;var d=void 0;if(Te!==null){var f=Te.memoizedState;if(d=f.destroy,i!==null&&Ms(i,f.deps)){l.memoizedState=Fn(a,n,d,i);return}}ye.flags|=t,l.memoizedState=Fn(1|a,n,d,i)}function $c(t,a){return $r(8390656,8,t,a)}function Ls(t,a){return Gr(2048,8,t,a)}function Gc(t,a){return Gr(4,2,t,a)}function Yc(t,a){return Gr(4,4,t,a)}function Jc(t,a){if(typeof a=="function")return t=t(),a(t),function(){a(null)};if(a!=null)return t=t(),a.current=t,function(){a.current=null}}function Vc(t,a,n){return n=n!=null?n.concat([t]):null,Gr(4,4,Jc.bind(null,a,t),n)}function Hs(){}function Kc(t,a){var n=ot();a=a===void 0?null:a;var i=n.memoizedState;return i!==null&&a!==null&&Ms(a,i[1])?i[0]:(n.memoizedState=[t,a],t)}function qc(t,a){var n=ot();a=a===void 0?null:a;var i=n.memoizedState;return i!==null&&a!==null&&Ms(a,i[1])?i[0]:(t=t(),n.memoizedState=[t,a],t)}function Qc(t,a,n){return(ba&21)===0?(t.baseState&&(t.baseState=!1,Ve=!0),t.memoizedState=n):(ft(n,a)||(n=Nl(),ye.lanes|=n,ya|=n,t.baseState=!0),a)}function qu(t,a){var n=ce;ce=n!==0&&4>n?n:4,t(!0);var i=Bs.transition;Bs.transition={};try{t(!1),a()}finally{ce=n,Bs.transition=i}}function Xc(){return ot().memoizedState}function Qu(t,a,n){var i=na(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Zc(t))ed(a,n);else if(n=Rc(t,a,n,i),n!==null){var l=_e();yt(n,t,i,l),td(n,a,i)}}function Xu(t,a,n){var i=na(t),l={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Zc(t))ed(a,l);else{var d=t.alternate;if(t.lanes===0&&(d===null||d.lanes===0)&&(d=a.lastRenderedReducer,d!==null))try{var f=a.lastRenderedState,j=d(f,n);if(l.hasEagerState=!0,l.eagerState=j,ft(j,f)){var S=a.interleaved;S===null?(l.next=l,Ns(a)):(l.next=S.next,S.next=l),a.interleaved=l;return}}catch{}finally{}n=Rc(t,a,l,i),n!==null&&(l=_e(),yt(n,t,i,l),td(n,a,i))}}function Zc(t){var a=t.alternate;return t===ye||a!==null&&a===ye}function ed(t,a){Wn=_r=!0;var n=t.pending;n===null?a.next=a:(a.next=n.next,n.next=a),t.pending=a}function td(t,a,n){if((n&4194240)!==0){var i=a.lanes;i&=t.pendingLanes,n|=i,a.lanes=n,Ui(t,n)}}var Yr={readContext:st,useCallback:We,useContext:We,useEffect:We,useImperativeHandle:We,useInsertionEffect:We,useLayoutEffect:We,useMemo:We,useReducer:We,useRef:We,useState:We,useDebugValue:We,useDeferredValue:We,useTransition:We,useMutableSource:We,useSyncExternalStore:We,useId:We,unstable_isNewReconciler:!1},Zu={readContext:st,useCallback:function(t,a){return Nt().memoizedState=[t,a===void 0?null:a],t},useContext:st,useEffect:$c,useImperativeHandle:function(t,a,n){return n=n!=null?n.concat([t]):null,$r(4194308,4,Jc.bind(null,a,t),n)},useLayoutEffect:function(t,a){return $r(4194308,4,t,a)},useInsertionEffect:function(t,a){return $r(4,2,t,a)},useMemo:function(t,a){var n=Nt();return a=a===void 0?null:a,t=t(),n.memoizedState=[t,a],t},useReducer:function(t,a,n){var i=Nt();return a=n!==void 0?n(a):a,i.memoizedState=i.baseState=a,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:a},i.queue=t,t=t.dispatch=Qu.bind(null,ye,t),[i.memoizedState,t]},useRef:function(t){var a=Nt();return t={current:t},a.memoizedState=t},useState:Uc,useDebugValue:Hs,useDeferredValue:function(t){return Nt().memoizedState=t},useTransition:function(){var t=Uc(!1),a=t[0];return t=qu.bind(null,t[1]),Nt().memoizedState=t,[a,t]},useMutableSource:function(){},useSyncExternalStore:function(t,a,n){var i=ye,l=Nt();if(xe){if(n===void 0)throw Error(o(407));n=n()}else{if(n=a(),Ie===null)throw Error(o(349));(ba&30)!==0||Dc(i,a,n)}l.memoizedState=n;var d={value:n,getSnapshot:a};return l.queue=d,$c(Lc.bind(null,i,d,t),[t]),i.flags|=2048,Fn(9,Wc.bind(null,i,d,n,a),void 0,null),n},useId:function(){var t=Nt(),a=Ie.identifierPrefix;if(xe){var n=Mt,i=Bt;n=(i&~(1<<32-ut(i)-1)).toString(32)+n,a=":"+a+"R"+n,n=Ln++,0<n&&(a+="H"+n.toString(32)),a+=":"}else n=Ku++,a=":"+a+"r"+n.toString(32)+":";return t.memoizedState=a},unstable_isNewReconciler:!1},ef={readContext:st,useCallback:Kc,useContext:st,useEffect:Ls,useImperativeHandle:Vc,useInsertionEffect:Gc,useLayoutEffect:Yc,useMemo:qc,useReducer:Ds,useRef:_c,useState:function(){return Ds(Hn)},useDebugValue:Hs,useDeferredValue:function(t){var a=ot();return Qc(a,Te.memoizedState,t)},useTransition:function(){var t=Ds(Hn)[0],a=ot().memoizedState;return[t,a]},useMutableSource:zc,useSyncExternalStore:Oc,useId:Xc,unstable_isNewReconciler:!1},tf={readContext:st,useCallback:Kc,useContext:st,useEffect:Ls,useImperativeHandle:Vc,useInsertionEffect:Gc,useLayoutEffect:Yc,useMemo:qc,useReducer:Ws,useRef:_c,useState:function(){return Ws(Hn)},useDebugValue:Hs,useDeferredValue:function(t){var a=ot();return Te===null?a.memoizedState=t:Qc(a,Te.memoizedState,t)},useTransition:function(){var t=Ws(Hn)[0],a=ot().memoizedState;return[t,a]},useMutableSource:zc,useSyncExternalStore:Oc,useId:Xc,unstable_isNewReconciler:!1};function gt(t,a){if(t&&t.defaultProps){a=$({},a),t=t.defaultProps;for(var n in t)a[n]===void 0&&(a[n]=t[n]);return a}return a}function Fs(t,a,n,i){a=t.memoizedState,n=n(i,a),n=n==null?a:$({},a,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Jr={isMounted:function(t){return(t=t._reactInternals)?pa(t)===t:!1},enqueueSetState:function(t,a,n){t=t._reactInternals;var i=_e(),l=na(t),d=Ot(i,l);d.payload=a,n!=null&&(d.callback=n),a=Zt(t,d,l),a!==null&&(yt(a,t,l,i),Lr(a,t,l))},enqueueReplaceState:function(t,a,n){t=t._reactInternals;var i=_e(),l=na(t),d=Ot(i,l);d.tag=1,d.payload=a,n!=null&&(d.callback=n),a=Zt(t,d,l),a!==null&&(yt(a,t,l,i),Lr(a,t,l))},enqueueForceUpdate:function(t,a){t=t._reactInternals;var n=_e(),i=na(t),l=Ot(n,i);l.tag=2,a!=null&&(l.callback=a),a=Zt(t,l,i),a!==null&&(yt(a,t,i,n),Lr(a,t,i))}};function ad(t,a,n,i,l,d,f){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,d,f):a.prototype&&a.prototype.isPureReactComponent?!Nn(n,i)||!Nn(l,d):!0}function nd(t,a,n){var i=!1,l=qt,d=a.contextType;return typeof d=="object"&&d!==null?d=st(d):(l=Je(a)?ua:De.current,i=a.contextTypes,d=(i=i!=null)?Fa(t,l):qt),a=new a(n,d),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Jr,t.stateNode=a,a._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=l,t.__reactInternalMemoizedMaskedChildContext=d),a}function rd(t,a,n,i){t=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(n,i),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(n,i),a.state!==t&&Jr.enqueueReplaceState(a,a.state,null)}function Us(t,a,n,i){var l=t.stateNode;l.props=n,l.state=t.memoizedState,l.refs={},Ts(t);var d=a.contextType;typeof d=="object"&&d!==null?l.context=st(d):(d=Je(a)?ua:De.current,l.context=Fa(t,d)),l.state=t.memoizedState,d=a.getDerivedStateFromProps,typeof d=="function"&&(Fs(t,a,d,n),l.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(a=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),a!==l.state&&Jr.enqueueReplaceState(l,l.state,null),Hr(t,n,l,i),l.state=t.memoizedState),typeof l.componentDidMount=="function"&&(t.flags|=4194308)}function Ka(t,a){try{var n="",i=a;do n+=re(i),i=i.return;while(i);var l=n}catch(d){l=`
Error generating stack: `+d.message+`
`+d.stack}return{value:t,source:a,stack:l,digest:null}}function _s(t,a,n){return{value:t,source:null,stack:n??null,digest:a??null}}function $s(t,a){try{console.error(a.value)}catch(n){setTimeout(function(){throw n})}}var af=typeof WeakMap=="function"?WeakMap:Map;function id(t,a,n){n=Ot(-1,n),n.tag=3,n.payload={element:null};var i=a.value;return n.callback=function(){ei||(ei=!0,io=i),$s(t,a)},n}function sd(t,a,n){n=Ot(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var l=a.value;n.payload=function(){return i(l)},n.callback=function(){$s(t,a)}}var d=t.stateNode;return d!==null&&typeof d.componentDidCatch=="function"&&(n.callback=function(){$s(t,a),typeof i!="function"&&(ta===null?ta=new Set([this]):ta.add(this));var f=a.stack;this.componentDidCatch(a.value,{componentStack:f!==null?f:""})}),n}function od(t,a,n){var i=t.pingCache;if(i===null){i=t.pingCache=new af;var l=new Set;i.set(a,l)}else l=i.get(a),l===void 0&&(l=new Set,i.set(a,l));l.has(n)||(l.add(n),t=xf.bind(null,t,a,n),a.then(t,t))}function ld(t){do{var a;if((a=t.tag===13)&&(a=t.memoizedState,a=a!==null?a.dehydrated!==null:!0),a)return t;t=t.return}while(t!==null);return null}function cd(t,a,n,i,l){return(t.mode&1)===0?(t===a?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(a=Ot(-1,1),a.tag=2,Zt(n,a,1))),n.lanes|=1),t):(t.flags|=65536,t.lanes=l,t)}var nf=q.ReactCurrentOwner,Ve=!1;function Ue(t,a,n,i){a.child=t===null?Ec(a,null,n,i):Ga(a,t.child,n,i)}function dd(t,a,n,i,l){n=n.render;var d=a.ref;return Ja(a,l),i=zs(t,a,n,i,d,l),n=Os(),t!==null&&!Ve?(a.updateQueue=t.updateQueue,a.flags&=-2053,t.lanes&=~l,Dt(t,a,l)):(xe&&n&&bs(a),a.flags|=1,Ue(t,a,i,l),a.child)}function pd(t,a,n,i,l){if(t===null){var d=n.type;return typeof d=="function"&&!uo(d)&&d.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(a.tag=15,a.type=d,md(t,a,d,i,l)):(t=si(n.type,null,i,a,a.mode,l),t.ref=a.ref,t.return=a,a.child=t)}if(d=t.child,(t.lanes&l)===0){var f=d.memoizedProps;if(n=n.compare,n=n!==null?n:Nn,n(f,i)&&t.ref===a.ref)return Dt(t,a,l)}return a.flags|=1,t=ia(d,i),t.ref=a.ref,t.return=a,a.child=t}function md(t,a,n,i,l){if(t!==null){var d=t.memoizedProps;if(Nn(d,i)&&t.ref===a.ref)if(Ve=!1,a.pendingProps=i=d,(t.lanes&l)!==0)(t.flags&131072)!==0&&(Ve=!0);else return a.lanes=t.lanes,Dt(t,a,l)}return Gs(t,a,n,i,l)}function ud(t,a,n){var i=a.pendingProps,l=i.children,d=t!==null?t.memoizedState:null;if(i.mode==="hidden")if((a.mode&1)===0)a.memoizedState={baseLanes:0,cachePool:null,transitions:null},pe(Qa,nt),nt|=n;else{if((n&1073741824)===0)return t=d!==null?d.baseLanes|n:n,a.lanes=a.childLanes=1073741824,a.memoizedState={baseLanes:t,cachePool:null,transitions:null},a.updateQueue=null,pe(Qa,nt),nt|=t,null;a.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=d!==null?d.baseLanes:n,pe(Qa,nt),nt|=i}else d!==null?(i=d.baseLanes|n,a.memoizedState=null):i=n,pe(Qa,nt),nt|=i;return Ue(t,a,l,n),a.child}function fd(t,a){var n=a.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(a.flags|=512,a.flags|=2097152)}function Gs(t,a,n,i,l){var d=Je(n)?ua:De.current;return d=Fa(a,d),Ja(a,l),n=zs(t,a,n,i,d,l),i=Os(),t!==null&&!Ve?(a.updateQueue=t.updateQueue,a.flags&=-2053,t.lanes&=~l,Dt(t,a,l)):(xe&&i&&bs(a),a.flags|=1,Ue(t,a,n,l),a.child)}function hd(t,a,n,i,l){if(Je(n)){var d=!0;Pr(a)}else d=!1;if(Ja(a,l),a.stateNode===null)Kr(t,a),nd(a,n,i),Us(a,n,i,l),i=!0;else if(t===null){var f=a.stateNode,j=a.memoizedProps;f.props=j;var S=f.context,T=n.contextType;typeof T=="object"&&T!==null?T=st(T):(T=Je(n)?ua:De.current,T=Fa(a,T));var M=n.getDerivedStateFromProps,O=typeof M=="function"||typeof f.getSnapshotBeforeUpdate=="function";O||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(j!==i||S!==T)&&rd(a,f,i,T),Xt=!1;var I=a.memoizedState;f.state=I,Hr(a,i,f,l),S=a.memoizedState,j!==i||I!==S||Ye.current||Xt?(typeof M=="function"&&(Fs(a,n,M,i),S=a.memoizedState),(j=Xt||ad(a,n,j,i,I,S,T))?(O||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(a.flags|=4194308)):(typeof f.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=i,a.memoizedState=S),f.props=i,f.state=S,f.context=T,i=j):(typeof f.componentDidMount=="function"&&(a.flags|=4194308),i=!1)}else{f=a.stateNode,Pc(t,a),j=a.memoizedProps,T=a.type===a.elementType?j:gt(a.type,j),f.props=T,O=a.pendingProps,I=f.context,S=n.contextType,typeof S=="object"&&S!==null?S=st(S):(S=Je(n)?ua:De.current,S=Fa(a,S));var U=n.getDerivedStateFromProps;(M=typeof U=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(j!==O||I!==S)&&rd(a,f,i,S),Xt=!1,I=a.memoizedState,f.state=I,Hr(a,i,f,l);var G=a.memoizedState;j!==O||I!==G||Ye.current||Xt?(typeof U=="function"&&(Fs(a,n,U,i),G=a.memoizedState),(T=Xt||ad(a,n,T,i,I,G,S)||!1)?(M||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(i,G,S),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(i,G,S)),typeof f.componentDidUpdate=="function"&&(a.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof f.componentDidUpdate!="function"||j===t.memoizedProps&&I===t.memoizedState||(a.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||j===t.memoizedProps&&I===t.memoizedState||(a.flags|=1024),a.memoizedProps=i,a.memoizedState=G),f.props=i,f.state=G,f.context=S,i=T):(typeof f.componentDidUpdate!="function"||j===t.memoizedProps&&I===t.memoizedState||(a.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||j===t.memoizedProps&&I===t.memoizedState||(a.flags|=1024),i=!1)}return Ys(t,a,n,i,d,l)}function Ys(t,a,n,i,l,d){fd(t,a);var f=(a.flags&128)!==0;if(!i&&!f)return l&&vc(a,n,!1),Dt(t,a,d);i=a.stateNode,nf.current=a;var j=f&&typeof n.getDerivedStateFromError!="function"?null:i.render();return a.flags|=1,t!==null&&f?(a.child=Ga(a,t.child,null,d),a.child=Ga(a,null,j,d)):Ue(t,a,j,d),a.memoizedState=i.state,l&&vc(a,n,!0),a.child}function gd(t){var a=t.stateNode;a.pendingContext?bc(t,a.pendingContext,a.pendingContext!==a.context):a.context&&bc(t,a.context,!1),Es(t,a.containerInfo)}function xd(t,a,n,i,l){return $a(),Ss(l),a.flags|=256,Ue(t,a,n,i),a.child}var Js={dehydrated:null,treeContext:null,retryLane:0};function Vs(t){return{baseLanes:t,cachePool:null,transitions:null}}function bd(t,a,n){var i=a.pendingProps,l=be.current,d=!1,f=(a.flags&128)!==0,j;if((j=f)||(j=t!==null&&t.memoizedState===null?!1:(l&2)!==0),j?(d=!0,a.flags&=-129):(t===null||t.memoizedState!==null)&&(l|=1),pe(be,l&1),t===null)return js(a),t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((a.mode&1)===0?a.lanes=1:t.data==="$!"?a.lanes=8:a.lanes=1073741824,null):(f=i.children,t=i.fallback,d?(i=a.mode,d=a.child,f={mode:"hidden",children:f},(i&1)===0&&d!==null?(d.childLanes=0,d.pendingProps=f):d=oi(f,i,0,null),t=wa(t,i,n,null),d.return=a,t.return=a,d.sibling=t,a.child=d,a.child.memoizedState=Vs(n),a.memoizedState=Js,t):Ks(a,f));if(l=t.memoizedState,l!==null&&(j=l.dehydrated,j!==null))return rf(t,a,f,i,j,l,n);if(d){d=i.fallback,f=a.mode,l=t.child,j=l.sibling;var S={mode:"hidden",children:i.children};return(f&1)===0&&a.child!==l?(i=a.child,i.childLanes=0,i.pendingProps=S,a.deletions=null):(i=ia(l,S),i.subtreeFlags=l.subtreeFlags&14680064),j!==null?d=ia(j,d):(d=wa(d,f,n,null),d.flags|=2),d.return=a,i.return=a,i.sibling=d,a.child=i,i=d,d=a.child,f=t.child.memoizedState,f=f===null?Vs(n):{baseLanes:f.baseLanes|n,cachePool:null,transitions:f.transitions},d.memoizedState=f,d.childLanes=t.childLanes&~n,a.memoizedState=Js,i}return d=t.child,t=d.sibling,i=ia(d,{mode:"visible",children:i.children}),(a.mode&1)===0&&(i.lanes=n),i.return=a,i.sibling=null,t!==null&&(n=a.deletions,n===null?(a.deletions=[t],a.flags|=16):n.push(t)),a.child=i,a.memoizedState=null,i}function Ks(t,a){return a=oi({mode:"visible",children:a},t.mode,0,null),a.return=t,t.child=a}function Vr(t,a,n,i){return i!==null&&Ss(i),Ga(a,t.child,null,n),t=Ks(a,a.pendingProps.children),t.flags|=2,a.memoizedState=null,t}function rf(t,a,n,i,l,d,f){if(n)return a.flags&256?(a.flags&=-257,i=_s(Error(o(422))),Vr(t,a,f,i)):a.memoizedState!==null?(a.child=t.child,a.flags|=128,null):(d=i.fallback,l=a.mode,i=oi({mode:"visible",children:i.children},l,0,null),d=wa(d,l,f,null),d.flags|=2,i.return=a,d.return=a,i.sibling=d,a.child=i,(a.mode&1)!==0&&Ga(a,t.child,null,f),a.child.memoizedState=Vs(f),a.memoizedState=Js,d);if((a.mode&1)===0)return Vr(t,a,f,null);if(l.data==="$!"){if(i=l.nextSibling&&l.nextSibling.dataset,i)var j=i.dgst;return i=j,d=Error(o(419)),i=_s(d,i,void 0),Vr(t,a,f,i)}if(j=(f&t.childLanes)!==0,Ve||j){if(i=Ie,i!==null){switch(f&-f){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=(l&(i.suspendedLanes|f))!==0?0:l,l!==0&&l!==d.retryLane&&(d.retryLane=l,zt(t,l),yt(i,t,l,-1))}return mo(),i=_s(Error(o(421))),Vr(t,a,f,i)}return l.data==="$?"?(a.flags|=128,a.child=t.child,a=bf.bind(null,t),l._reactRetry=a,null):(t=d.treeContext,at=Vt(l.nextSibling),tt=a,xe=!0,ht=null,t!==null&&(rt[it++]=Bt,rt[it++]=Mt,rt[it++]=fa,Bt=t.id,Mt=t.overflow,fa=a),a=Ks(a,i.children),a.flags|=4096,a)}function yd(t,a,n){t.lanes|=a;var i=t.alternate;i!==null&&(i.lanes|=a),ks(t.return,a,n)}function qs(t,a,n,i,l){var d=t.memoizedState;d===null?t.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:l}:(d.isBackwards=a,d.rendering=null,d.renderingStartTime=0,d.last=i,d.tail=n,d.tailMode=l)}function vd(t,a,n){var i=a.pendingProps,l=i.revealOrder,d=i.tail;if(Ue(t,a,i.children,n),i=be.current,(i&2)!==0)i=i&1|2,a.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=a.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&yd(t,n,a);else if(t.tag===19)yd(t,n,a);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===a)break e;for(;t.sibling===null;){if(t.return===null||t.return===a)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(pe(be,i),(a.mode&1)===0)a.memoizedState=null;else switch(l){case"forwards":for(n=a.child,l=null;n!==null;)t=n.alternate,t!==null&&Fr(t)===null&&(l=n),n=n.sibling;n=l,n===null?(l=a.child,a.child=null):(l=n.sibling,n.sibling=null),qs(a,!1,l,n,d);break;case"backwards":for(n=null,l=a.child,a.child=null;l!==null;){if(t=l.alternate,t!==null&&Fr(t)===null){a.child=l;break}t=l.sibling,l.sibling=n,n=l,l=t}qs(a,!0,n,null,d);break;case"together":qs(a,!1,null,null,void 0);break;default:a.memoizedState=null}return a.child}function Kr(t,a){(a.mode&1)===0&&t!==null&&(t.alternate=null,a.alternate=null,a.flags|=2)}function Dt(t,a,n){if(t!==null&&(a.dependencies=t.dependencies),ya|=a.lanes,(n&a.childLanes)===0)return null;if(t!==null&&a.child!==t.child)throw Error(o(153));if(a.child!==null){for(t=a.child,n=ia(t,t.pendingProps),a.child=n,n.return=a;t.sibling!==null;)t=t.sibling,n=n.sibling=ia(t,t.pendingProps),n.return=a;n.sibling=null}return a.child}function sf(t,a,n){switch(a.tag){case 3:gd(a),$a();break;case 5:Mc(a);break;case 1:Je(a.type)&&Pr(a);break;case 4:Es(a,a.stateNode.containerInfo);break;case 10:var i=a.type._context,l=a.memoizedProps.value;pe(Dr,i._currentValue),i._currentValue=l;break;case 13:if(i=a.memoizedState,i!==null)return i.dehydrated!==null?(pe(be,be.current&1),a.flags|=128,null):(n&a.child.childLanes)!==0?bd(t,a,n):(pe(be,be.current&1),t=Dt(t,a,n),t!==null?t.sibling:null);pe(be,be.current&1);break;case 19:if(i=(n&a.childLanes)!==0,(t.flags&128)!==0){if(i)return vd(t,a,n);a.flags|=128}if(l=a.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),pe(be,be.current),i)break;return null;case 22:case 23:return a.lanes=0,ud(t,a,n)}return Dt(t,a,n)}var jd,Qs,Sd,wd;jd=function(t,a){for(var n=a.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===a)break;for(;n.sibling===null;){if(n.return===null||n.return===a)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},Qs=function(){},Sd=function(t,a,n,i){var l=t.memoizedProps;if(l!==i){t=a.stateNode,xa(kt.current);var d=null;switch(n){case"input":l=ki(t,l),i=ki(t,i),d=[];break;case"select":l=$({},l,{value:void 0}),i=$({},i,{value:void 0}),d=[];break;case"textarea":l=Ei(t,l),i=Ei(t,i),d=[];break;default:typeof l.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Tr)}Pi(n,i);var f;n=null;for(T in l)if(!i.hasOwnProperty(T)&&l.hasOwnProperty(T)&&l[T]!=null)if(T==="style"){var j=l[T];for(f in j)j.hasOwnProperty(f)&&(n||(n={}),n[f]="")}else T!=="dangerouslySetInnerHTML"&&T!=="children"&&T!=="suppressContentEditableWarning"&&T!=="suppressHydrationWarning"&&T!=="autoFocus"&&(m.hasOwnProperty(T)?d||(d=[]):(d=d||[]).push(T,null));for(T in i){var S=i[T];if(j=l!=null?l[T]:void 0,i.hasOwnProperty(T)&&S!==j&&(S!=null||j!=null))if(T==="style")if(j){for(f in j)!j.hasOwnProperty(f)||S&&S.hasOwnProperty(f)||(n||(n={}),n[f]="");for(f in S)S.hasOwnProperty(f)&&j[f]!==S[f]&&(n||(n={}),n[f]=S[f])}else n||(d||(d=[]),d.push(T,n)),n=S;else T==="dangerouslySetInnerHTML"?(S=S?S.__html:void 0,j=j?j.__html:void 0,S!=null&&j!==S&&(d=d||[]).push(T,S)):T==="children"?typeof S!="string"&&typeof S!="number"||(d=d||[]).push(T,""+S):T!=="suppressContentEditableWarning"&&T!=="suppressHydrationWarning"&&(m.hasOwnProperty(T)?(S!=null&&T==="onScroll"&&me("scroll",t),d||j===S||(d=[])):(d=d||[]).push(T,S))}n&&(d=d||[]).push("style",n);var T=d;(a.updateQueue=T)&&(a.flags|=4)}},wd=function(t,a,n,i){n!==i&&(a.flags|=4)};function Un(t,a){if(!xe)switch(t.tailMode){case"hidden":a=t.tail;for(var n=null;a!==null;)a.alternate!==null&&(n=a),a=a.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?a||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Le(t){var a=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(a)for(var l=t.child;l!==null;)n|=l.lanes|l.childLanes,i|=l.subtreeFlags&14680064,i|=l.flags&14680064,l.return=t,l=l.sibling;else for(l=t.child;l!==null;)n|=l.lanes|l.childLanes,i|=l.subtreeFlags,i|=l.flags,l.return=t,l=l.sibling;return t.subtreeFlags|=i,t.childLanes=n,a}function of(t,a,n){var i=a.pendingProps;switch(ys(a),a.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Le(a),null;case 1:return Je(a.type)&&Rr(),Le(a),null;case 3:return i=a.stateNode,Va(),ue(Ye),ue(De),Is(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(zr(a)?a.flags|=4:t===null||t.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,ht!==null&&(lo(ht),ht=null))),Qs(t,a),Le(a),null;case 5:Rs(a);var l=xa(Dn.current);if(n=a.type,t!==null&&a.stateNode!=null)Sd(t,a,n,i,l),t.ref!==a.ref&&(a.flags|=512,a.flags|=2097152);else{if(!i){if(a.stateNode===null)throw Error(o(166));return Le(a),null}if(t=xa(kt.current),zr(a)){i=a.stateNode,n=a.type;var d=a.memoizedProps;switch(i[At]=a,i[In]=d,t=(a.mode&1)!==0,n){case"dialog":me("cancel",i),me("close",i);break;case"iframe":case"object":case"embed":me("load",i);break;case"video":case"audio":for(l=0;l<En.length;l++)me(En[l],i);break;case"source":me("error",i);break;case"img":case"image":case"link":me("error",i),me("load",i);break;case"details":me("toggle",i);break;case"input":nl(i,d),me("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!d.multiple},me("invalid",i);break;case"textarea":sl(i,d),me("invalid",i)}Pi(n,d),l=null;for(var f in d)if(d.hasOwnProperty(f)){var j=d[f];f==="children"?typeof j=="string"?i.textContent!==j&&(d.suppressHydrationWarning!==!0&&Nr(i.textContent,j,t),l=["children",j]):typeof j=="number"&&i.textContent!==""+j&&(d.suppressHydrationWarning!==!0&&Nr(i.textContent,j,t),l=["children",""+j]):m.hasOwnProperty(f)&&j!=null&&f==="onScroll"&&me("scroll",i)}switch(n){case"input":rr(i),il(i,d,!0);break;case"textarea":rr(i),ll(i);break;case"select":case"option":break;default:typeof d.onClick=="function"&&(i.onclick=Tr)}i=l,a.updateQueue=i,i!==null&&(a.flags|=4)}else{f=l.nodeType===9?l:l.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=cl(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=f.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=f.createElement(n,{is:i.is}):(t=f.createElement(n),n==="select"&&(f=t,i.multiple?f.multiple=!0:i.size&&(f.size=i.size))):t=f.createElementNS(t,n),t[At]=a,t[In]=i,jd(t,a,!1,!1),a.stateNode=t;e:{switch(f=Ii(n,i),n){case"dialog":me("cancel",t),me("close",t),l=i;break;case"iframe":case"object":case"embed":me("load",t),l=i;break;case"video":case"audio":for(l=0;l<En.length;l++)me(En[l],t);l=i;break;case"source":me("error",t),l=i;break;case"img":case"image":case"link":me("error",t),me("load",t),l=i;break;case"details":me("toggle",t),l=i;break;case"input":nl(t,i),l=ki(t,i),me("invalid",t);break;case"option":l=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},l=$({},i,{value:void 0}),me("invalid",t);break;case"textarea":sl(t,i),l=Ei(t,i),me("invalid",t);break;default:l=i}Pi(n,l),j=l;for(d in j)if(j.hasOwnProperty(d)){var S=j[d];d==="style"?ml(t,S):d==="dangerouslySetInnerHTML"?(S=S?S.__html:void 0,S!=null&&dl(t,S)):d==="children"?typeof S=="string"?(n!=="textarea"||S!=="")&&dn(t,S):typeof S=="number"&&dn(t,""+S):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(m.hasOwnProperty(d)?S!=null&&d==="onScroll"&&me("scroll",t):S!=null&&L(t,d,S,f))}switch(n){case"input":rr(t),il(t,i,!1);break;case"textarea":rr(t),ll(t);break;case"option":i.value!=null&&t.setAttribute("value",""+le(i.value));break;case"select":t.multiple=!!i.multiple,d=i.value,d!=null?Ea(t,!!i.multiple,d,!1):i.defaultValue!=null&&Ea(t,!!i.multiple,i.defaultValue,!0);break;default:typeof l.onClick=="function"&&(t.onclick=Tr)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(a.flags|=4)}a.ref!==null&&(a.flags|=512,a.flags|=2097152)}return Le(a),null;case 6:if(t&&a.stateNode!=null)wd(t,a,t.memoizedProps,i);else{if(typeof i!="string"&&a.stateNode===null)throw Error(o(166));if(n=xa(Dn.current),xa(kt.current),zr(a)){if(i=a.stateNode,n=a.memoizedProps,i[At]=a,(d=i.nodeValue!==n)&&(t=tt,t!==null))switch(t.tag){case 3:Nr(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Nr(i.nodeValue,n,(t.mode&1)!==0)}d&&(a.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[At]=a,a.stateNode=i}return Le(a),null;case 13:if(ue(be),i=a.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(xe&&at!==null&&(a.mode&1)!==0&&(a.flags&128)===0)kc(),$a(),a.flags|=98560,d=!1;else if(d=zr(a),i!==null&&i.dehydrated!==null){if(t===null){if(!d)throw Error(o(318));if(d=a.memoizedState,d=d!==null?d.dehydrated:null,!d)throw Error(o(317));d[At]=a}else $a(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;Le(a),d=!1}else ht!==null&&(lo(ht),ht=null),d=!0;if(!d)return a.flags&65536?a:null}return(a.flags&128)!==0?(a.lanes=n,a):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(a.child.flags|=8192,(a.mode&1)!==0&&(t===null||(be.current&1)!==0?Ee===0&&(Ee=3):mo())),a.updateQueue!==null&&(a.flags|=4),Le(a),null);case 4:return Va(),Qs(t,a),t===null&&Rn(a.stateNode.containerInfo),Le(a),null;case 10:return As(a.type._context),Le(a),null;case 17:return Je(a.type)&&Rr(),Le(a),null;case 19:if(ue(be),d=a.memoizedState,d===null)return Le(a),null;if(i=(a.flags&128)!==0,f=d.rendering,f===null)if(i)Un(d,!1);else{if(Ee!==0||t!==null&&(t.flags&128)!==0)for(t=a.child;t!==null;){if(f=Fr(t),f!==null){for(a.flags|=128,Un(d,!1),i=f.updateQueue,i!==null&&(a.updateQueue=i,a.flags|=4),a.subtreeFlags=0,i=n,n=a.child;n!==null;)d=n,t=i,d.flags&=14680066,f=d.alternate,f===null?(d.childLanes=0,d.lanes=t,d.child=null,d.subtreeFlags=0,d.memoizedProps=null,d.memoizedState=null,d.updateQueue=null,d.dependencies=null,d.stateNode=null):(d.childLanes=f.childLanes,d.lanes=f.lanes,d.child=f.child,d.subtreeFlags=0,d.deletions=null,d.memoizedProps=f.memoizedProps,d.memoizedState=f.memoizedState,d.updateQueue=f.updateQueue,d.type=f.type,t=f.dependencies,d.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return pe(be,be.current&1|2),a.child}t=t.sibling}d.tail!==null&&we()>Xa&&(a.flags|=128,i=!0,Un(d,!1),a.lanes=4194304)}else{if(!i)if(t=Fr(f),t!==null){if(a.flags|=128,i=!0,n=t.updateQueue,n!==null&&(a.updateQueue=n,a.flags|=4),Un(d,!0),d.tail===null&&d.tailMode==="hidden"&&!f.alternate&&!xe)return Le(a),null}else 2*we()-d.renderingStartTime>Xa&&n!==1073741824&&(a.flags|=128,i=!0,Un(d,!1),a.lanes=4194304);d.isBackwards?(f.sibling=a.child,a.child=f):(n=d.last,n!==null?n.sibling=f:a.child=f,d.last=f)}return d.tail!==null?(a=d.tail,d.rendering=a,d.tail=a.sibling,d.renderingStartTime=we(),a.sibling=null,n=be.current,pe(be,i?n&1|2:n&1),a):(Le(a),null);case 22:case 23:return po(),i=a.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(a.flags|=8192),i&&(a.mode&1)!==0?(nt&1073741824)!==0&&(Le(a),a.subtreeFlags&6&&(a.flags|=8192)):Le(a),null;case 24:return null;case 25:return null}throw Error(o(156,a.tag))}function lf(t,a){switch(ys(a),a.tag){case 1:return Je(a.type)&&Rr(),t=a.flags,t&65536?(a.flags=t&-65537|128,a):null;case 3:return Va(),ue(Ye),ue(De),Is(),t=a.flags,(t&65536)!==0&&(t&128)===0?(a.flags=t&-65537|128,a):null;case 5:return Rs(a),null;case 13:if(ue(be),t=a.memoizedState,t!==null&&t.dehydrated!==null){if(a.alternate===null)throw Error(o(340));$a()}return t=a.flags,t&65536?(a.flags=t&-65537|128,a):null;case 19:return ue(be),null;case 4:return Va(),null;case 10:return As(a.type._context),null;case 22:case 23:return po(),null;case 24:return null;default:return null}}var qr=!1,He=!1,cf=typeof WeakSet=="function"?WeakSet:Set,_=null;function qa(t,a){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){je(t,a,i)}else n.current=null}function Xs(t,a,n){try{n()}catch(i){je(t,a,i)}}var Cd=!1;function df(t,a){if(ds=gr,t=ac(),as(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var l=i.anchorOffset,d=i.focusNode;i=i.focusOffset;try{n.nodeType,d.nodeType}catch{n=null;break e}var f=0,j=-1,S=-1,T=0,M=0,O=t,I=null;t:for(;;){for(var U;O!==n||l!==0&&O.nodeType!==3||(j=f+l),O!==d||i!==0&&O.nodeType!==3||(S=f+i),O.nodeType===3&&(f+=O.nodeValue.length),(U=O.firstChild)!==null;)I=O,O=U;for(;;){if(O===t)break t;if(I===n&&++T===l&&(j=f),I===d&&++M===i&&(S=f),(U=O.nextSibling)!==null)break;O=I,I=O.parentNode}O=U}n=j===-1||S===-1?null:{start:j,end:S}}else n=null}n=n||{start:0,end:0}}else n=null;for(ps={focusedElem:t,selectionRange:n},gr=!1,_=a;_!==null;)if(a=_,t=a.child,(a.subtreeFlags&1028)!==0&&t!==null)t.return=a,_=t;else for(;_!==null;){a=_;try{var G=a.alternate;if((a.flags&1024)!==0)switch(a.tag){case 0:case 11:case 15:break;case 1:if(G!==null){var Y=G.memoizedProps,Ce=G.memoizedState,A=a.stateNode,w=A.getSnapshotBeforeUpdate(a.elementType===a.type?Y:gt(a.type,Y),Ce);A.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var k=a.stateNode.containerInfo;k.nodeType===1?k.textContent="":k.nodeType===9&&k.documentElement&&k.removeChild(k.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(o(163))}}catch(W){je(a,a.return,W)}if(t=a.sibling,t!==null){t.return=a.return,_=t;break}_=a.return}return G=Cd,Cd=!1,G}function _n(t,a,n){var i=a.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var l=i=i.next;do{if((l.tag&t)===t){var d=l.destroy;l.destroy=void 0,d!==void 0&&Xs(a,n,d)}l=l.next}while(l!==i)}}function Qr(t,a){if(a=a.updateQueue,a=a!==null?a.lastEffect:null,a!==null){var n=a=a.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==a)}}function Zs(t){var a=t.ref;if(a!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof a=="function"?a(t):a.current=t}}function Ad(t){var a=t.alternate;a!==null&&(t.alternate=null,Ad(a)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(a=t.stateNode,a!==null&&(delete a[At],delete a[In],delete a[hs],delete a[Gu],delete a[Yu])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function kd(t){return t.tag===5||t.tag===3||t.tag===4}function Nd(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||kd(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function eo(t,a,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,a?n.nodeType===8?n.parentNode.insertBefore(t,a):n.insertBefore(t,a):(n.nodeType===8?(a=n.parentNode,a.insertBefore(t,n)):(a=n,a.appendChild(t)),n=n._reactRootContainer,n!=null||a.onclick!==null||(a.onclick=Tr));else if(i!==4&&(t=t.child,t!==null))for(eo(t,a,n),t=t.sibling;t!==null;)eo(t,a,n),t=t.sibling}function to(t,a,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,a?n.insertBefore(t,a):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(to(t,a,n),t=t.sibling;t!==null;)to(t,a,n),t=t.sibling}var ze=null,xt=!1;function ea(t,a,n){for(n=n.child;n!==null;)Td(t,a,n),n=n.sibling}function Td(t,a,n){if(Ct&&typeof Ct.onCommitFiberUnmount=="function")try{Ct.onCommitFiberUnmount(dr,n)}catch{}switch(n.tag){case 5:He||qa(n,a);case 6:var i=ze,l=xt;ze=null,ea(t,a,n),ze=i,xt=l,ze!==null&&(xt?(t=ze,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):ze.removeChild(n.stateNode));break;case 18:ze!==null&&(xt?(t=ze,n=n.stateNode,t.nodeType===8?fs(t.parentNode,n):t.nodeType===1&&fs(t,n),jn(t)):fs(ze,n.stateNode));break;case 4:i=ze,l=xt,ze=n.stateNode.containerInfo,xt=!0,ea(t,a,n),ze=i,xt=l;break;case 0:case 11:case 14:case 15:if(!He&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){l=i=i.next;do{var d=l,f=d.destroy;d=d.tag,f!==void 0&&((d&2)!==0||(d&4)!==0)&&Xs(n,a,f),l=l.next}while(l!==i)}ea(t,a,n);break;case 1:if(!He&&(qa(n,a),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(j){je(n,a,j)}ea(t,a,n);break;case 21:ea(t,a,n);break;case 22:n.mode&1?(He=(i=He)||n.memoizedState!==null,ea(t,a,n),He=i):ea(t,a,n);break;default:ea(t,a,n)}}function Ed(t){var a=t.updateQueue;if(a!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new cf),a.forEach(function(i){var l=yf.bind(null,t,i);n.has(i)||(n.add(i),i.then(l,l))})}}function bt(t,a){var n=a.deletions;if(n!==null)for(var i=0;i<n.length;i++){var l=n[i];try{var d=t,f=a,j=f;e:for(;j!==null;){switch(j.tag){case 5:ze=j.stateNode,xt=!1;break e;case 3:ze=j.stateNode.containerInfo,xt=!0;break e;case 4:ze=j.stateNode.containerInfo,xt=!0;break e}j=j.return}if(ze===null)throw Error(o(160));Td(d,f,l),ze=null,xt=!1;var S=l.alternate;S!==null&&(S.return=null),l.return=null}catch(T){je(l,a,T)}}if(a.subtreeFlags&12854)for(a=a.child;a!==null;)Rd(a,t),a=a.sibling}function Rd(t,a){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(bt(a,t),Tt(t),i&4){try{_n(3,t,t.return),Qr(3,t)}catch(Y){je(t,t.return,Y)}try{_n(5,t,t.return)}catch(Y){je(t,t.return,Y)}}break;case 1:bt(a,t),Tt(t),i&512&&n!==null&&qa(n,n.return);break;case 5:if(bt(a,t),Tt(t),i&512&&n!==null&&qa(n,n.return),t.flags&32){var l=t.stateNode;try{dn(l,"")}catch(Y){je(t,t.return,Y)}}if(i&4&&(l=t.stateNode,l!=null)){var d=t.memoizedProps,f=n!==null?n.memoizedProps:d,j=t.type,S=t.updateQueue;if(t.updateQueue=null,S!==null)try{j==="input"&&d.type==="radio"&&d.name!=null&&rl(l,d),Ii(j,f);var T=Ii(j,d);for(f=0;f<S.length;f+=2){var M=S[f],O=S[f+1];M==="style"?ml(l,O):M==="dangerouslySetInnerHTML"?dl(l,O):M==="children"?dn(l,O):L(l,M,O,T)}switch(j){case"input":Ni(l,d);break;case"textarea":ol(l,d);break;case"select":var I=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!d.multiple;var U=d.value;U!=null?Ea(l,!!d.multiple,U,!1):I!==!!d.multiple&&(d.defaultValue!=null?Ea(l,!!d.multiple,d.defaultValue,!0):Ea(l,!!d.multiple,d.multiple?[]:"",!1))}l[In]=d}catch(Y){je(t,t.return,Y)}}break;case 6:if(bt(a,t),Tt(t),i&4){if(t.stateNode===null)throw Error(o(162));l=t.stateNode,d=t.memoizedProps;try{l.nodeValue=d}catch(Y){je(t,t.return,Y)}}break;case 3:if(bt(a,t),Tt(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{jn(a.containerInfo)}catch(Y){je(t,t.return,Y)}break;case 4:bt(a,t),Tt(t);break;case 13:bt(a,t),Tt(t),l=t.child,l.flags&8192&&(d=l.memoizedState!==null,l.stateNode.isHidden=d,!d||l.alternate!==null&&l.alternate.memoizedState!==null||(ro=we())),i&4&&Ed(t);break;case 22:if(M=n!==null&&n.memoizedState!==null,t.mode&1?(He=(T=He)||M,bt(a,t),He=T):bt(a,t),Tt(t),i&8192){if(T=t.memoizedState!==null,(t.stateNode.isHidden=T)&&!M&&(t.mode&1)!==0)for(_=t,M=t.child;M!==null;){for(O=_=M;_!==null;){switch(I=_,U=I.child,I.tag){case 0:case 11:case 14:case 15:_n(4,I,I.return);break;case 1:qa(I,I.return);var G=I.stateNode;if(typeof G.componentWillUnmount=="function"){i=I,n=I.return;try{a=i,G.props=a.memoizedProps,G.state=a.memoizedState,G.componentWillUnmount()}catch(Y){je(i,n,Y)}}break;case 5:qa(I,I.return);break;case 22:if(I.memoizedState!==null){Bd(O);continue}}U!==null?(U.return=I,_=U):Bd(O)}M=M.sibling}e:for(M=null,O=t;;){if(O.tag===5){if(M===null){M=O;try{l=O.stateNode,T?(d=l.style,typeof d.setProperty=="function"?d.setProperty("display","none","important"):d.display="none"):(j=O.stateNode,S=O.memoizedProps.style,f=S!=null&&S.hasOwnProperty("display")?S.display:null,j.style.display=pl("display",f))}catch(Y){je(t,t.return,Y)}}}else if(O.tag===6){if(M===null)try{O.stateNode.nodeValue=T?"":O.memoizedProps}catch(Y){je(t,t.return,Y)}}else if((O.tag!==22&&O.tag!==23||O.memoizedState===null||O===t)&&O.child!==null){O.child.return=O,O=O.child;continue}if(O===t)break e;for(;O.sibling===null;){if(O.return===null||O.return===t)break e;M===O&&(M=null),O=O.return}M===O&&(M=null),O.sibling.return=O.return,O=O.sibling}}break;case 19:bt(a,t),Tt(t),i&4&&Ed(t);break;case 21:break;default:bt(a,t),Tt(t)}}function Tt(t){var a=t.flags;if(a&2){try{e:{for(var n=t.return;n!==null;){if(kd(n)){var i=n;break e}n=n.return}throw Error(o(160))}switch(i.tag){case 5:var l=i.stateNode;i.flags&32&&(dn(l,""),i.flags&=-33);var d=Nd(t);to(t,d,l);break;case 3:case 4:var f=i.stateNode.containerInfo,j=Nd(t);eo(t,j,f);break;default:throw Error(o(161))}}catch(S){je(t,t.return,S)}t.flags&=-3}a&4096&&(t.flags&=-4097)}function pf(t,a,n){_=t,Pd(t)}function Pd(t,a,n){for(var i=(t.mode&1)!==0;_!==null;){var l=_,d=l.child;if(l.tag===22&&i){var f=l.memoizedState!==null||qr;if(!f){var j=l.alternate,S=j!==null&&j.memoizedState!==null||He;j=qr;var T=He;if(qr=f,(He=S)&&!T)for(_=l;_!==null;)f=_,S=f.child,f.tag===22&&f.memoizedState!==null?Md(l):S!==null?(S.return=f,_=S):Md(l);for(;d!==null;)_=d,Pd(d),d=d.sibling;_=l,qr=j,He=T}Id(t)}else(l.subtreeFlags&8772)!==0&&d!==null?(d.return=l,_=d):Id(t)}}function Id(t){for(;_!==null;){var a=_;if((a.flags&8772)!==0){var n=a.alternate;try{if((a.flags&8772)!==0)switch(a.tag){case 0:case 11:case 15:He||Qr(5,a);break;case 1:var i=a.stateNode;if(a.flags&4&&!He)if(n===null)i.componentDidMount();else{var l=a.elementType===a.type?n.memoizedProps:gt(a.type,n.memoizedProps);i.componentDidUpdate(l,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var d=a.updateQueue;d!==null&&Bc(a,d,i);break;case 3:var f=a.updateQueue;if(f!==null){if(n=null,a.child!==null)switch(a.child.tag){case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}Bc(a,f,n)}break;case 5:var j=a.stateNode;if(n===null&&a.flags&4){n=j;var S=a.memoizedProps;switch(a.type){case"button":case"input":case"select":case"textarea":S.autoFocus&&n.focus();break;case"img":S.src&&(n.src=S.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(a.memoizedState===null){var T=a.alternate;if(T!==null){var M=T.memoizedState;if(M!==null){var O=M.dehydrated;O!==null&&jn(O)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(o(163))}He||a.flags&512&&Zs(a)}catch(I){je(a,a.return,I)}}if(a===t){_=null;break}if(n=a.sibling,n!==null){n.return=a.return,_=n;break}_=a.return}}function Bd(t){for(;_!==null;){var a=_;if(a===t){_=null;break}var n=a.sibling;if(n!==null){n.return=a.return,_=n;break}_=a.return}}function Md(t){for(;_!==null;){var a=_;try{switch(a.tag){case 0:case 11:case 15:var n=a.return;try{Qr(4,a)}catch(S){je(a,n,S)}break;case 1:var i=a.stateNode;if(typeof i.componentDidMount=="function"){var l=a.return;try{i.componentDidMount()}catch(S){je(a,l,S)}}var d=a.return;try{Zs(a)}catch(S){je(a,d,S)}break;case 5:var f=a.return;try{Zs(a)}catch(S){je(a,f,S)}}}catch(S){je(a,a.return,S)}if(a===t){_=null;break}var j=a.sibling;if(j!==null){j.return=a.return,_=j;break}_=a.return}}var mf=Math.ceil,Xr=q.ReactCurrentDispatcher,ao=q.ReactCurrentOwner,lt=q.ReactCurrentBatchConfig,ne=0,Ie=null,Ae=null,Oe=0,nt=0,Qa=Kt(0),Ee=0,$n=null,ya=0,Zr=0,no=0,Gn=null,Ke=null,ro=0,Xa=1/0,Wt=null,ei=!1,io=null,ta=null,ti=!1,aa=null,ai=0,Yn=0,so=null,ni=-1,ri=0;function _e(){return(ne&6)!==0?we():ni!==-1?ni:ni=we()}function na(t){return(t.mode&1)===0?1:(ne&2)!==0&&Oe!==0?Oe&-Oe:Vu.transition!==null?(ri===0&&(ri=Nl()),ri):(t=ce,t!==0||(t=window.event,t=t===void 0?16:Ol(t.type)),t)}function yt(t,a,n,i){if(50<Yn)throw Yn=0,so=null,Error(o(185));gn(t,n,i),((ne&2)===0||t!==Ie)&&(t===Ie&&((ne&2)===0&&(Zr|=n),Ee===4&&ra(t,Oe)),qe(t,i),n===1&&ne===0&&(a.mode&1)===0&&(Xa=we()+500,Ir&&Qt()))}function qe(t,a){var n=t.callbackNode;Vm(t,a);var i=ur(t,t===Ie?Oe:0);if(i===0)n!==null&&Cl(n),t.callbackNode=null,t.callbackPriority=0;else if(a=i&-i,t.callbackPriority!==a){if(n!=null&&Cl(n),a===1)t.tag===0?Ju(Od.bind(null,t)):jc(Od.bind(null,t)),_u(function(){(ne&6)===0&&Qt()}),n=null;else{switch(Tl(i)){case 1:n=Li;break;case 4:n=Al;break;case 16:n=cr;break;case 536870912:n=kl;break;default:n=cr}n=$d(n,zd.bind(null,t))}t.callbackPriority=a,t.callbackNode=n}}function zd(t,a){if(ni=-1,ri=0,(ne&6)!==0)throw Error(o(327));var n=t.callbackNode;if(Za()&&t.callbackNode!==n)return null;var i=ur(t,t===Ie?Oe:0);if(i===0)return null;if((i&30)!==0||(i&t.expiredLanes)!==0||a)a=ii(t,i);else{a=i;var l=ne;ne|=2;var d=Wd();(Ie!==t||Oe!==a)&&(Wt=null,Xa=we()+500,ja(t,a));do try{hf();break}catch(j){Dd(t,j)}while(!0);Cs(),Xr.current=d,ne=l,Ae!==null?a=0:(Ie=null,Oe=0,a=Ee)}if(a!==0){if(a===2&&(l=Hi(t),l!==0&&(i=l,a=oo(t,l))),a===1)throw n=$n,ja(t,0),ra(t,i),qe(t,we()),n;if(a===6)ra(t,i);else{if(l=t.current.alternate,(i&30)===0&&!uf(l)&&(a=ii(t,i),a===2&&(d=Hi(t),d!==0&&(i=d,a=oo(t,d))),a===1))throw n=$n,ja(t,0),ra(t,i),qe(t,we()),n;switch(t.finishedWork=l,t.finishedLanes=i,a){case 0:case 1:throw Error(o(345));case 2:Sa(t,Ke,Wt);break;case 3:if(ra(t,i),(i&130023424)===i&&(a=ro+500-we(),10<a)){if(ur(t,0)!==0)break;if(l=t.suspendedLanes,(l&i)!==i){_e(),t.pingedLanes|=t.suspendedLanes&l;break}t.timeoutHandle=us(Sa.bind(null,t,Ke,Wt),a);break}Sa(t,Ke,Wt);break;case 4:if(ra(t,i),(i&4194240)===i)break;for(a=t.eventTimes,l=-1;0<i;){var f=31-ut(i);d=1<<f,f=a[f],f>l&&(l=f),i&=~d}if(i=l,i=we()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*mf(i/1960))-i,10<i){t.timeoutHandle=us(Sa.bind(null,t,Ke,Wt),i);break}Sa(t,Ke,Wt);break;case 5:Sa(t,Ke,Wt);break;default:throw Error(o(329))}}}return qe(t,we()),t.callbackNode===n?zd.bind(null,t):null}function oo(t,a){var n=Gn;return t.current.memoizedState.isDehydrated&&(ja(t,a).flags|=256),t=ii(t,a),t!==2&&(a=Ke,Ke=n,a!==null&&lo(a)),t}function lo(t){Ke===null?Ke=t:Ke.push.apply(Ke,t)}function uf(t){for(var a=t;;){if(a.flags&16384){var n=a.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var l=n[i],d=l.getSnapshot;l=l.value;try{if(!ft(d(),l))return!1}catch{return!1}}}if(n=a.child,a.subtreeFlags&16384&&n!==null)n.return=a,a=n;else{if(a===t)break;for(;a.sibling===null;){if(a.return===null||a.return===t)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function ra(t,a){for(a&=~no,a&=~Zr,t.suspendedLanes|=a,t.pingedLanes&=~a,t=t.expirationTimes;0<a;){var n=31-ut(a),i=1<<n;t[n]=-1,a&=~i}}function Od(t){if((ne&6)!==0)throw Error(o(327));Za();var a=ur(t,0);if((a&1)===0)return qe(t,we()),null;var n=ii(t,a);if(t.tag!==0&&n===2){var i=Hi(t);i!==0&&(a=i,n=oo(t,i))}if(n===1)throw n=$n,ja(t,0),ra(t,a),qe(t,we()),n;if(n===6)throw Error(o(345));return t.finishedWork=t.current.alternate,t.finishedLanes=a,Sa(t,Ke,Wt),qe(t,we()),null}function co(t,a){var n=ne;ne|=1;try{return t(a)}finally{ne=n,ne===0&&(Xa=we()+500,Ir&&Qt())}}function va(t){aa!==null&&aa.tag===0&&(ne&6)===0&&Za();var a=ne;ne|=1;var n=lt.transition,i=ce;try{if(lt.transition=null,ce=1,t)return t()}finally{ce=i,lt.transition=n,ne=a,(ne&6)===0&&Qt()}}function po(){nt=Qa.current,ue(Qa)}function ja(t,a){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Uu(n)),Ae!==null)for(n=Ae.return;n!==null;){var i=n;switch(ys(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Rr();break;case 3:Va(),ue(Ye),ue(De),Is();break;case 5:Rs(i);break;case 4:Va();break;case 13:ue(be);break;case 19:ue(be);break;case 10:As(i.type._context);break;case 22:case 23:po()}n=n.return}if(Ie=t,Ae=t=ia(t.current,null),Oe=nt=a,Ee=0,$n=null,no=Zr=ya=0,Ke=Gn=null,ga!==null){for(a=0;a<ga.length;a++)if(n=ga[a],i=n.interleaved,i!==null){n.interleaved=null;var l=i.next,d=n.pending;if(d!==null){var f=d.next;d.next=l,i.next=f}n.pending=i}ga=null}return t}function Dd(t,a){do{var n=Ae;try{if(Cs(),Ur.current=Yr,_r){for(var i=ye.memoizedState;i!==null;){var l=i.queue;l!==null&&(l.pending=null),i=i.next}_r=!1}if(ba=0,Pe=Te=ye=null,Wn=!1,Ln=0,ao.current=null,n===null||n.return===null){Ee=1,$n=a,Ae=null;break}e:{var d=t,f=n.return,j=n,S=a;if(a=Oe,j.flags|=32768,S!==null&&typeof S=="object"&&typeof S.then=="function"){var T=S,M=j,O=M.tag;if((M.mode&1)===0&&(O===0||O===11||O===15)){var I=M.alternate;I?(M.updateQueue=I.updateQueue,M.memoizedState=I.memoizedState,M.lanes=I.lanes):(M.updateQueue=null,M.memoizedState=null)}var U=ld(f);if(U!==null){U.flags&=-257,cd(U,f,j,d,a),U.mode&1&&od(d,T,a),a=U,S=T;var G=a.updateQueue;if(G===null){var Y=new Set;Y.add(S),a.updateQueue=Y}else G.add(S);break e}else{if((a&1)===0){od(d,T,a),mo();break e}S=Error(o(426))}}else if(xe&&j.mode&1){var Ce=ld(f);if(Ce!==null){(Ce.flags&65536)===0&&(Ce.flags|=256),cd(Ce,f,j,d,a),Ss(Ka(S,j));break e}}d=S=Ka(S,j),Ee!==4&&(Ee=2),Gn===null?Gn=[d]:Gn.push(d),d=f;do{switch(d.tag){case 3:d.flags|=65536,a&=-a,d.lanes|=a;var A=id(d,S,a);Ic(d,A);break e;case 1:j=S;var w=d.type,k=d.stateNode;if((d.flags&128)===0&&(typeof w.getDerivedStateFromError=="function"||k!==null&&typeof k.componentDidCatch=="function"&&(ta===null||!ta.has(k)))){d.flags|=65536,a&=-a,d.lanes|=a;var W=sd(d,j,a);Ic(d,W);break e}}d=d.return}while(d!==null)}Hd(n)}catch(J){a=J,Ae===n&&n!==null&&(Ae=n=n.return);continue}break}while(!0)}function Wd(){var t=Xr.current;return Xr.current=Yr,t===null?Yr:t}function mo(){(Ee===0||Ee===3||Ee===2)&&(Ee=4),Ie===null||(ya&268435455)===0&&(Zr&268435455)===0||ra(Ie,Oe)}function ii(t,a){var n=ne;ne|=2;var i=Wd();(Ie!==t||Oe!==a)&&(Wt=null,ja(t,a));do try{ff();break}catch(l){Dd(t,l)}while(!0);if(Cs(),ne=n,Xr.current=i,Ae!==null)throw Error(o(261));return Ie=null,Oe=0,Ee}function ff(){for(;Ae!==null;)Ld(Ae)}function hf(){for(;Ae!==null&&!Lm();)Ld(Ae)}function Ld(t){var a=_d(t.alternate,t,nt);t.memoizedProps=t.pendingProps,a===null?Hd(t):Ae=a,ao.current=null}function Hd(t){var a=t;do{var n=a.alternate;if(t=a.return,(a.flags&32768)===0){if(n=of(n,a,nt),n!==null){Ae=n;return}}else{if(n=lf(n,a),n!==null){n.flags&=32767,Ae=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ee=6,Ae=null;return}}if(a=a.sibling,a!==null){Ae=a;return}Ae=a=t}while(a!==null);Ee===0&&(Ee=5)}function Sa(t,a,n){var i=ce,l=lt.transition;try{lt.transition=null,ce=1,gf(t,a,n,i)}finally{lt.transition=l,ce=i}return null}function gf(t,a,n,i){do Za();while(aa!==null);if((ne&6)!==0)throw Error(o(327));n=t.finishedWork;var l=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(o(177));t.callbackNode=null,t.callbackPriority=0;var d=n.lanes|n.childLanes;if(Km(t,d),t===Ie&&(Ae=Ie=null,Oe=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||ti||(ti=!0,$d(cr,function(){return Za(),null})),d=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||d){d=lt.transition,lt.transition=null;var f=ce;ce=1;var j=ne;ne|=4,ao.current=null,df(t,n),Rd(n,t),zu(ps),gr=!!ds,ps=ds=null,t.current=n,pf(n),Hm(),ne=j,ce=f,lt.transition=d}else t.current=n;if(ti&&(ti=!1,aa=t,ai=l),d=t.pendingLanes,d===0&&(ta=null),_m(n.stateNode),qe(t,we()),a!==null)for(i=t.onRecoverableError,n=0;n<a.length;n++)l=a[n],i(l.value,{componentStack:l.stack,digest:l.digest});if(ei)throw ei=!1,t=io,io=null,t;return(ai&1)!==0&&t.tag!==0&&Za(),d=t.pendingLanes,(d&1)!==0?t===so?Yn++:(Yn=0,so=t):Yn=0,Qt(),null}function Za(){if(aa!==null){var t=Tl(ai),a=lt.transition,n=ce;try{if(lt.transition=null,ce=16>t?16:t,aa===null)var i=!1;else{if(t=aa,aa=null,ai=0,(ne&6)!==0)throw Error(o(331));var l=ne;for(ne|=4,_=t.current;_!==null;){var d=_,f=d.child;if((_.flags&16)!==0){var j=d.deletions;if(j!==null){for(var S=0;S<j.length;S++){var T=j[S];for(_=T;_!==null;){var M=_;switch(M.tag){case 0:case 11:case 15:_n(8,M,d)}var O=M.child;if(O!==null)O.return=M,_=O;else for(;_!==null;){M=_;var I=M.sibling,U=M.return;if(Ad(M),M===T){_=null;break}if(I!==null){I.return=U,_=I;break}_=U}}}var G=d.alternate;if(G!==null){var Y=G.child;if(Y!==null){G.child=null;do{var Ce=Y.sibling;Y.sibling=null,Y=Ce}while(Y!==null)}}_=d}}if((d.subtreeFlags&2064)!==0&&f!==null)f.return=d,_=f;else e:for(;_!==null;){if(d=_,(d.flags&2048)!==0)switch(d.tag){case 0:case 11:case 15:_n(9,d,d.return)}var A=d.sibling;if(A!==null){A.return=d.return,_=A;break e}_=d.return}}var w=t.current;for(_=w;_!==null;){f=_;var k=f.child;if((f.subtreeFlags&2064)!==0&&k!==null)k.return=f,_=k;else e:for(f=w;_!==null;){if(j=_,(j.flags&2048)!==0)try{switch(j.tag){case 0:case 11:case 15:Qr(9,j)}}catch(J){je(j,j.return,J)}if(j===f){_=null;break e}var W=j.sibling;if(W!==null){W.return=j.return,_=W;break e}_=j.return}}if(ne=l,Qt(),Ct&&typeof Ct.onPostCommitFiberRoot=="function")try{Ct.onPostCommitFiberRoot(dr,t)}catch{}i=!0}return i}finally{ce=n,lt.transition=a}}return!1}function Fd(t,a,n){a=Ka(n,a),a=id(t,a,1),t=Zt(t,a,1),a=_e(),t!==null&&(gn(t,1,a),qe(t,a))}function je(t,a,n){if(t.tag===3)Fd(t,t,n);else for(;a!==null;){if(a.tag===3){Fd(a,t,n);break}else if(a.tag===1){var i=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ta===null||!ta.has(i))){t=Ka(n,t),t=sd(a,t,1),a=Zt(a,t,1),t=_e(),a!==null&&(gn(a,1,t),qe(a,t));break}}a=a.return}}function xf(t,a,n){var i=t.pingCache;i!==null&&i.delete(a),a=_e(),t.pingedLanes|=t.suspendedLanes&n,Ie===t&&(Oe&n)===n&&(Ee===4||Ee===3&&(Oe&130023424)===Oe&&500>we()-ro?ja(t,0):no|=n),qe(t,a)}function Ud(t,a){a===0&&((t.mode&1)===0?a=1:(a=mr,mr<<=1,(mr&130023424)===0&&(mr=4194304)));var n=_e();t=zt(t,a),t!==null&&(gn(t,a,n),qe(t,n))}function bf(t){var a=t.memoizedState,n=0;a!==null&&(n=a.retryLane),Ud(t,n)}function yf(t,a){var n=0;switch(t.tag){case 13:var i=t.stateNode,l=t.memoizedState;l!==null&&(n=l.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(o(314))}i!==null&&i.delete(a),Ud(t,n)}var _d;_d=function(t,a,n){if(t!==null)if(t.memoizedProps!==a.pendingProps||Ye.current)Ve=!0;else{if((t.lanes&n)===0&&(a.flags&128)===0)return Ve=!1,sf(t,a,n);Ve=(t.flags&131072)!==0}else Ve=!1,xe&&(a.flags&1048576)!==0&&Sc(a,Mr,a.index);switch(a.lanes=0,a.tag){case 2:var i=a.type;Kr(t,a),t=a.pendingProps;var l=Fa(a,De.current);Ja(a,n),l=zs(null,a,i,t,l,n);var d=Os();return a.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(a.tag=1,a.memoizedState=null,a.updateQueue=null,Je(i)?(d=!0,Pr(a)):d=!1,a.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,Ts(a),l.updater=Jr,a.stateNode=l,l._reactInternals=a,Us(a,i,t,n),a=Ys(null,a,i,!0,d,n)):(a.tag=0,xe&&d&&bs(a),Ue(null,a,l,n),a=a.child),a;case 16:i=a.elementType;e:{switch(Kr(t,a),t=a.pendingProps,l=i._init,i=l(i._payload),a.type=i,l=a.tag=jf(i),t=gt(i,t),l){case 0:a=Gs(null,a,i,t,n);break e;case 1:a=hd(null,a,i,t,n);break e;case 11:a=dd(null,a,i,t,n);break e;case 14:a=pd(null,a,i,gt(i.type,t),n);break e}throw Error(o(306,i,""))}return a;case 0:return i=a.type,l=a.pendingProps,l=a.elementType===i?l:gt(i,l),Gs(t,a,i,l,n);case 1:return i=a.type,l=a.pendingProps,l=a.elementType===i?l:gt(i,l),hd(t,a,i,l,n);case 3:e:{if(gd(a),t===null)throw Error(o(387));i=a.pendingProps,d=a.memoizedState,l=d.element,Pc(t,a),Hr(a,i,null,n);var f=a.memoizedState;if(i=f.element,d.isDehydrated)if(d={element:i,isDehydrated:!1,cache:f.cache,pendingSuspenseBoundaries:f.pendingSuspenseBoundaries,transitions:f.transitions},a.updateQueue.baseState=d,a.memoizedState=d,a.flags&256){l=Ka(Error(o(423)),a),a=xd(t,a,i,n,l);break e}else if(i!==l){l=Ka(Error(o(424)),a),a=xd(t,a,i,n,l);break e}else for(at=Vt(a.stateNode.containerInfo.firstChild),tt=a,xe=!0,ht=null,n=Ec(a,null,i,n),a.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if($a(),i===l){a=Dt(t,a,n);break e}Ue(t,a,i,n)}a=a.child}return a;case 5:return Mc(a),t===null&&js(a),i=a.type,l=a.pendingProps,d=t!==null?t.memoizedProps:null,f=l.children,ms(i,l)?f=null:d!==null&&ms(i,d)&&(a.flags|=32),fd(t,a),Ue(t,a,f,n),a.child;case 6:return t===null&&js(a),null;case 13:return bd(t,a,n);case 4:return Es(a,a.stateNode.containerInfo),i=a.pendingProps,t===null?a.child=Ga(a,null,i,n):Ue(t,a,i,n),a.child;case 11:return i=a.type,l=a.pendingProps,l=a.elementType===i?l:gt(i,l),dd(t,a,i,l,n);case 7:return Ue(t,a,a.pendingProps,n),a.child;case 8:return Ue(t,a,a.pendingProps.children,n),a.child;case 12:return Ue(t,a,a.pendingProps.children,n),a.child;case 10:e:{if(i=a.type._context,l=a.pendingProps,d=a.memoizedProps,f=l.value,pe(Dr,i._currentValue),i._currentValue=f,d!==null)if(ft(d.value,f)){if(d.children===l.children&&!Ye.current){a=Dt(t,a,n);break e}}else for(d=a.child,d!==null&&(d.return=a);d!==null;){var j=d.dependencies;if(j!==null){f=d.child;for(var S=j.firstContext;S!==null;){if(S.context===i){if(d.tag===1){S=Ot(-1,n&-n),S.tag=2;var T=d.updateQueue;if(T!==null){T=T.shared;var M=T.pending;M===null?S.next=S:(S.next=M.next,M.next=S),T.pending=S}}d.lanes|=n,S=d.alternate,S!==null&&(S.lanes|=n),ks(d.return,n,a),j.lanes|=n;break}S=S.next}}else if(d.tag===10)f=d.type===a.type?null:d.child;else if(d.tag===18){if(f=d.return,f===null)throw Error(o(341));f.lanes|=n,j=f.alternate,j!==null&&(j.lanes|=n),ks(f,n,a),f=d.sibling}else f=d.child;if(f!==null)f.return=d;else for(f=d;f!==null;){if(f===a){f=null;break}if(d=f.sibling,d!==null){d.return=f.return,f=d;break}f=f.return}d=f}Ue(t,a,l.children,n),a=a.child}return a;case 9:return l=a.type,i=a.pendingProps.children,Ja(a,n),l=st(l),i=i(l),a.flags|=1,Ue(t,a,i,n),a.child;case 14:return i=a.type,l=gt(i,a.pendingProps),l=gt(i.type,l),pd(t,a,i,l,n);case 15:return md(t,a,a.type,a.pendingProps,n);case 17:return i=a.type,l=a.pendingProps,l=a.elementType===i?l:gt(i,l),Kr(t,a),a.tag=1,Je(i)?(t=!0,Pr(a)):t=!1,Ja(a,n),nd(a,i,l),Us(a,i,l,n),Ys(null,a,i,!0,t,n);case 19:return vd(t,a,n);case 22:return ud(t,a,n)}throw Error(o(156,a.tag))};function $d(t,a){return wl(t,a)}function vf(t,a,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ct(t,a,n,i){return new vf(t,a,n,i)}function uo(t){return t=t.prototype,!(!t||!t.isReactComponent)}function jf(t){if(typeof t=="function")return uo(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Me)return 11;if(t===wt)return 14}return 2}function ia(t,a){var n=t.alternate;return n===null?(n=ct(t.tag,a,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=a,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,a=t.dependencies,n.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function si(t,a,n,i,l,d){var f=2;if(i=t,typeof t=="function")uo(t)&&(f=1);else if(typeof t=="string")f=5;else e:switch(t){case Fe:return wa(n.children,l,d,a);case oe:f=8,l|=8;break;case $e:return t=ct(12,n,a,l|2),t.elementType=$e,t.lanes=d,t;case Xe:return t=ct(13,n,a,l),t.elementType=Xe,t.lanes=d,t;case mt:return t=ct(19,n,a,l),t.elementType=mt,t.lanes=d,t;case ve:return oi(n,l,d,a);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case St:f=10;break e;case pt:f=9;break e;case Me:f=11;break e;case wt:f=14;break e;case Ge:f=16,i=null;break e}throw Error(o(130,t==null?t:typeof t,""))}return a=ct(f,n,a,l),a.elementType=t,a.type=i,a.lanes=d,a}function wa(t,a,n,i){return t=ct(7,t,i,a),t.lanes=n,t}function oi(t,a,n,i){return t=ct(22,t,i,a),t.elementType=ve,t.lanes=n,t.stateNode={isHidden:!1},t}function fo(t,a,n){return t=ct(6,t,null,a),t.lanes=n,t}function ho(t,a,n){return a=ct(4,t.children!==null?t.children:[],t.key,a),a.lanes=n,a.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},a}function Sf(t,a,n,i,l){this.tag=a,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Fi(0),this.expirationTimes=Fi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Fi(0),this.identifierPrefix=i,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function go(t,a,n,i,l,d,f,j,S){return t=new Sf(t,a,n,j,S),a===1?(a=1,d===!0&&(a|=8)):a=0,d=ct(3,null,null,a),t.current=d,d.stateNode=t,d.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ts(d),t}function wf(t,a,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ne,key:i==null?null:""+i,children:t,containerInfo:a,implementation:n}}function Gd(t){if(!t)return qt;t=t._reactInternals;e:{if(pa(t)!==t||t.tag!==1)throw Error(o(170));var a=t;do{switch(a.tag){case 3:a=a.stateNode.context;break e;case 1:if(Je(a.type)){a=a.stateNode.__reactInternalMemoizedMergedChildContext;break e}}a=a.return}while(a!==null);throw Error(o(171))}if(t.tag===1){var n=t.type;if(Je(n))return yc(t,n,a)}return a}function Yd(t,a,n,i,l,d,f,j,S){return t=go(n,i,!0,t,l,d,f,j,S),t.context=Gd(null),n=t.current,i=_e(),l=na(n),d=Ot(i,l),d.callback=a??null,Zt(n,d,l),t.current.lanes=l,gn(t,l,i),qe(t,i),t}function li(t,a,n,i){var l=a.current,d=_e(),f=na(l);return n=Gd(n),a.context===null?a.context=n:a.pendingContext=n,a=Ot(d,f),a.payload={element:t},i=i===void 0?null:i,i!==null&&(a.callback=i),t=Zt(l,a,f),t!==null&&(yt(t,l,f,d),Lr(t,l,f)),f}function ci(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Jd(t,a){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<a?n:a}}function xo(t,a){Jd(t,a),(t=t.alternate)&&Jd(t,a)}function Cf(){return null}var Vd=typeof reportError=="function"?reportError:function(t){console.error(t)};function bo(t){this._internalRoot=t}di.prototype.render=bo.prototype.render=function(t){var a=this._internalRoot;if(a===null)throw Error(o(409));li(t,a,null,null)},di.prototype.unmount=bo.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var a=t.containerInfo;va(function(){li(null,t,null,null)}),a[Pt]=null}};function di(t){this._internalRoot=t}di.prototype.unstable_scheduleHydration=function(t){if(t){var a=Pl();t={blockedOn:null,target:t,priority:a};for(var n=0;n<Gt.length&&a!==0&&a<Gt[n].priority;n++);Gt.splice(n,0,t),n===0&&Ml(t)}};function yo(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function pi(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Kd(){}function Af(t,a,n,i,l){if(l){if(typeof i=="function"){var d=i;i=function(){var T=ci(f);d.call(T)}}var f=Yd(a,i,t,0,null,!1,!1,"",Kd);return t._reactRootContainer=f,t[Pt]=f.current,Rn(t.nodeType===8?t.parentNode:t),va(),f}for(;l=t.lastChild;)t.removeChild(l);if(typeof i=="function"){var j=i;i=function(){var T=ci(S);j.call(T)}}var S=go(t,0,!1,null,null,!1,!1,"",Kd);return t._reactRootContainer=S,t[Pt]=S.current,Rn(t.nodeType===8?t.parentNode:t),va(function(){li(a,S,n,i)}),S}function mi(t,a,n,i,l){var d=n._reactRootContainer;if(d){var f=d;if(typeof l=="function"){var j=l;l=function(){var S=ci(f);j.call(S)}}li(a,f,t,l)}else f=Af(n,a,t,l,i);return ci(f)}El=function(t){switch(t.tag){case 3:var a=t.stateNode;if(a.current.memoizedState.isDehydrated){var n=hn(a.pendingLanes);n!==0&&(Ui(a,n|1),qe(a,we()),(ne&6)===0&&(Xa=we()+500,Qt()))}break;case 13:va(function(){var i=zt(t,1);if(i!==null){var l=_e();yt(i,t,1,l)}}),xo(t,1)}},_i=function(t){if(t.tag===13){var a=zt(t,134217728);if(a!==null){var n=_e();yt(a,t,134217728,n)}xo(t,134217728)}},Rl=function(t){if(t.tag===13){var a=na(t),n=zt(t,a);if(n!==null){var i=_e();yt(n,t,a,i)}xo(t,a)}},Pl=function(){return ce},Il=function(t,a){var n=ce;try{return ce=t,a()}finally{ce=n}},zi=function(t,a,n){switch(a){case"input":if(Ni(t,n),a=n.name,n.type==="radio"&&a!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+a)+'][type="radio"]'),a=0;a<n.length;a++){var i=n[a];if(i!==t&&i.form===t.form){var l=Er(i);if(!l)throw Error(o(90));al(i),Ni(i,l)}}}break;case"textarea":ol(t,n);break;case"select":a=n.value,a!=null&&Ea(t,!!n.multiple,a,!1)}},gl=co,xl=va;var kf={usingClientEntryPoint:!1,Events:[Bn,La,Er,fl,hl,co]},Jn={findFiberByHostInstance:ma,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Nf={bundleType:Jn.bundleType,version:Jn.version,rendererPackageName:Jn.rendererPackageName,rendererConfig:Jn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:q.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=jl(t),t===null?null:t.stateNode},findFiberByHostInstance:Jn.findFiberByHostInstance||Cf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ui=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ui.isDisabled&&ui.supportsFiber)try{dr=ui.inject(Nf),Ct=ui}catch{}}return Qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=kf,Qe.createPortal=function(t,a){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!yo(a))throw Error(o(200));return wf(t,a,null,n)},Qe.createRoot=function(t,a){if(!yo(t))throw Error(o(299));var n=!1,i="",l=Vd;return a!=null&&(a.unstable_strictMode===!0&&(n=!0),a.identifierPrefix!==void 0&&(i=a.identifierPrefix),a.onRecoverableError!==void 0&&(l=a.onRecoverableError)),a=go(t,1,!1,null,null,n,!1,i,l),t[Pt]=a.current,Rn(t.nodeType===8?t.parentNode:t),new bo(a)},Qe.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var a=t._reactInternals;if(a===void 0)throw typeof t.render=="function"?Error(o(188)):(t=Object.keys(t).join(","),Error(o(268,t)));return t=jl(a),t=t===null?null:t.stateNode,t},Qe.flushSync=function(t){return va(t)},Qe.hydrate=function(t,a,n){if(!pi(a))throw Error(o(200));return mi(null,t,a,!0,n)},Qe.hydrateRoot=function(t,a,n){if(!yo(t))throw Error(o(405));var i=n!=null&&n.hydratedSources||null,l=!1,d="",f=Vd;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(d=n.identifierPrefix),n.onRecoverableError!==void 0&&(f=n.onRecoverableError)),a=Yd(a,null,t,1,n??null,l,!1,d,f),t[Pt]=a.current,Rn(t),i)for(t=0;t<i.length;t++)n=i[t],l=n._getVersion,l=l(n._source),a.mutableSourceEagerHydrationData==null?a.mutableSourceEagerHydrationData=[n,l]:a.mutableSourceEagerHydrationData.push(n,l);return new di(a)},Qe.render=function(t,a,n){if(!pi(a))throw Error(o(200));return mi(null,t,a,!1,n)},Qe.unmountComponentAtNode=function(t){if(!pi(t))throw Error(o(40));return t._reactRootContainer?(va(function(){mi(null,null,t,!1,function(){t._reactRootContainer=null,t[Pt]=null})}),!0):!1},Qe.unstable_batchedUpdates=co,Qe.unstable_renderSubtreeIntoContainer=function(t,a,n,i){if(!pi(n))throw Error(o(200));if(t==null||t._reactInternals===void 0)throw Error(o(38));return mi(t,a,n,!1,i)},Qe.version="18.3.1-next-f1338f8080-20240426",Qe}var np;function em(){if(np)return So.exports;np=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(s){console.error(s)}}return r(),So.exports=Wf(),So.exports}var rp;function Lf(){if(rp)return fi;rp=1;var r=em();return fi.createRoot=r.createRoot,fi.hydrateRoot=r.hydrateRoot,fi}var Hf=Lf(),Ao,ip;function Ff(){if(ip)return Ao;ip=1;var r=typeof Element<"u",s=typeof Map=="function",o=typeof Set=="function",c=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function m(p,u){if(p===u)return!0;if(p&&u&&typeof p=="object"&&typeof u=="object"){if(p.constructor!==u.constructor)return!1;var b,h,x;if(Array.isArray(p)){if(b=p.length,b!=u.length)return!1;for(h=b;h--!==0;)if(!m(p[h],u[h]))return!1;return!0}var y;if(s&&p instanceof Map&&u instanceof Map){if(p.size!==u.size)return!1;for(y=p.entries();!(h=y.next()).done;)if(!u.has(h.value[0]))return!1;for(y=p.entries();!(h=y.next()).done;)if(!m(h.value[1],u.get(h.value[0])))return!1;return!0}if(o&&p instanceof Set&&u instanceof Set){if(p.size!==u.size)return!1;for(y=p.entries();!(h=y.next()).done;)if(!u.has(h.value[0]))return!1;return!0}if(c&&ArrayBuffer.isView(p)&&ArrayBuffer.isView(u)){if(b=p.length,b!=u.length)return!1;for(h=b;h--!==0;)if(p[h]!==u[h])return!1;return!0}if(p.constructor===RegExp)return p.source===u.source&&p.flags===u.flags;if(p.valueOf!==Object.prototype.valueOf&&typeof p.valueOf=="function"&&typeof u.valueOf=="function")return p.valueOf()===u.valueOf();if(p.toString!==Object.prototype.toString&&typeof p.toString=="function"&&typeof u.toString=="function")return p.toString()===u.toString();if(x=Object.keys(p),b=x.length,b!==Object.keys(u).length)return!1;for(h=b;h--!==0;)if(!Object.prototype.hasOwnProperty.call(u,x[h]))return!1;if(r&&p instanceof Element)return!1;for(h=b;h--!==0;)if(!((x[h]==="_owner"||x[h]==="__v"||x[h]==="__o")&&p.$$typeof)&&!m(p[x[h]],u[x[h]]))return!1;return!0}return p!==p&&u!==u}return Ao=function(u,b){try{return m(u,b)}catch(h){if((h.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw h}},Ao}var Uf=Ff();const _f=wi(Uf);var ko,sp;function $f(){if(sp)return ko;sp=1;var r=function(s,o,c,m,p,u,b,h){if(!s){var x;if(o===void 0)x=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var y=[c,m,p,u,b,h],g=0;x=new Error(o.replace(/%s/g,function(){return y[g++]})),x.name="Invariant Violation"}throw x.framesToPop=1,x}};return ko=r,ko}var Gf=$f();const op=wi(Gf);var No,lp;function Yf(){return lp||(lp=1,No=function(s,o,c,m){var p=c?c.call(m,s,o):void 0;if(p!==void 0)return!!p;if(s===o)return!0;if(typeof s!="object"||!s||typeof o!="object"||!o)return!1;var u=Object.keys(s),b=Object.keys(o);if(u.length!==b.length)return!1;for(var h=Object.prototype.hasOwnProperty.bind(o),x=0;x<u.length;x++){var y=u[x];if(!h(y))return!1;var g=s[y],E=o[y];if(p=c?c.call(m,g,E,y):void 0,p===!1||p===void 0&&g!==E)return!1}return!0}),No}var Jf=Yf();const Vf=wi(Jf);var tm=(r=>(r.BASE="base",r.BODY="body",r.HEAD="head",r.HTML="html",r.LINK="link",r.META="meta",r.NOSCRIPT="noscript",r.SCRIPT="script",r.STYLE="style",r.TITLE="title",r.FRAGMENT="Symbol(react.fragment)",r))(tm||{}),To={link:{rel:["amphtml","canonical","alternate"]},script:{type:["application/ld+json"]},meta:{charset:"",name:["generator","robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]}},cp=Object.values(tm),Ci={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},am=Object.entries(Ci).reduce((r,[s,o])=>(r[o]=s,r),{}),jt="data-rh",sn={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate",PRIORITIZE_SEO_TAGS:"prioritizeSeoTags"},on=(r,s)=>{for(let o=r.length-1;o>=0;o-=1){const c=r[o];if(Object.prototype.hasOwnProperty.call(c,s))return c[s]}return null},Kf=r=>{let s=on(r,"title");const o=on(r,sn.TITLE_TEMPLATE);if(Array.isArray(s)&&(s=s.join("")),o&&s)return o.replace(/%s/g,()=>s);const c=on(r,sn.DEFAULT_TITLE);return s||c||void 0},qf=r=>on(r,sn.ON_CHANGE_CLIENT_STATE)||(()=>{}),Eo=(r,s)=>s.filter(o=>typeof o[r]<"u").map(o=>o[r]).reduce((o,c)=>({...o,...c}),{}),Qf=(r,s)=>s.filter(o=>typeof o.base<"u").map(o=>o.base).reverse().reduce((o,c)=>{if(!o.length){const m=Object.keys(c);for(let p=0;p<m.length;p+=1){const b=m[p].toLowerCase();if(r.indexOf(b)!==-1&&c[b])return o.concat(c)}}return o},[]),Xf=r=>console&&typeof console.warn=="function"&&console.warn(r),Kn=(r,s,o)=>{const c={};return o.filter(m=>Array.isArray(m[r])?!0:(typeof m[r]<"u"&&Xf(`Helmet: ${r} should be of type "Array". Instead found type "${typeof m[r]}"`),!1)).map(m=>m[r]).reverse().reduce((m,p)=>{const u={};p.filter(h=>{let x;const y=Object.keys(h);for(let E=0;E<y.length;E+=1){const D=y[E],F=D.toLowerCase();s.indexOf(F)!==-1&&!(x==="rel"&&h[x].toLowerCase()==="canonical")&&!(F==="rel"&&h[F].toLowerCase()==="stylesheet")&&(x=F),s.indexOf(D)!==-1&&(D==="innerHTML"||D==="cssText"||D==="itemprop")&&(x=D)}if(!x||!h[x])return!1;const g=h[x].toLowerCase();return c[x]||(c[x]={}),u[x]||(u[x]={}),c[x][g]?!1:(u[x][g]=!0,!0)}).reverse().forEach(h=>m.push(h));const b=Object.keys(u);for(let h=0;h<b.length;h+=1){const x=b[h],y={...c[x],...u[x]};c[x]=y}return m},[]).reverse()},Zf=(r,s)=>{if(Array.isArray(r)&&r.length){for(let o=0;o<r.length;o+=1)if(r[o][s])return!0}return!1},eh=r=>({baseTag:Qf(["href"],r),bodyAttributes:Eo("bodyAttributes",r),defer:on(r,sn.DEFER),encode:on(r,sn.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:Eo("htmlAttributes",r),linkTags:Kn("link",["rel","href"],r),metaTags:Kn("meta",["name","charset","http-equiv","property","itemprop"],r),noscriptTags:Kn("noscript",["innerHTML"],r),onChangeClientState:qf(r),scriptTags:Kn("script",["src","innerHTML"],r),styleTags:Kn("style",["cssText"],r),title:Kf(r),titleAttributes:Eo("titleAttributes",r),prioritizeSeoTags:Zf(r,sn.PRIORITIZE_SEO_TAGS)}),nm=r=>Array.isArray(r)?r.join(""):r,th=(r,s)=>{const o=Object.keys(r);for(let c=0;c<o.length;c+=1)if(s[o[c]]&&s[o[c]].includes(r[o[c]]))return!0;return!1},Ro=(r,s)=>Array.isArray(r)?r.reduce((o,c)=>(th(c,s)?o.priority.push(c):o.default.push(c),o),{priority:[],default:[]}):{default:r,priority:[]},dp=(r,s)=>({...r,[s]:void 0}),ah=["noscript","script","style"],Ho=(r,s=!0)=>s===!1?String(r):String(r).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;"),rm=r=>Object.keys(r).reduce((s,o)=>{const c=typeof r[o]<"u"?`${o}="${r[o]}"`:`${o}`;return s?`${s} ${c}`:c},""),nh=(r,s,o,c)=>{const m=rm(o),p=nm(s);return m?`<${r} ${jt}="true" ${m}>${Ho(p,c)}</${r}>`:`<${r} ${jt}="true">${Ho(p,c)}</${r}>`},rh=(r,s,o=!0)=>s.reduce((c,m)=>{const p=m,u=Object.keys(p).filter(x=>!(x==="innerHTML"||x==="cssText")).reduce((x,y)=>{const g=typeof p[y]>"u"?y:`${y}="${Ho(p[y],o)}"`;return x?`${x} ${g}`:g},""),b=p.innerHTML||p.cssText||"",h=ah.indexOf(r)===-1;return`${c}<${r} ${jt}="true" ${u}${h?"/>":`>${b}</${r}>`}`},""),im=(r,s={})=>Object.keys(r).reduce((o,c)=>{const m=Ci[c];return o[m||c]=r[c],o},s),ih=(r,s,o)=>{const c={key:s,[jt]:!0},m=im(o,c);return[Se.createElement("title",m,s)]},vi=(r,s)=>s.map((o,c)=>{const m={key:c,[jt]:!0};return Object.keys(o).forEach(p=>{const b=Ci[p]||p;if(b==="innerHTML"||b==="cssText"){const h=o.innerHTML||o.cssText;m.dangerouslySetInnerHTML={__html:h}}else m[b]=o[p]}),Se.createElement(r,m)}),dt=(r,s,o=!0)=>{switch(r){case"title":return{toComponent:()=>ih(r,s.title,s.titleAttributes),toString:()=>nh(r,s.title,s.titleAttributes,o)};case"bodyAttributes":case"htmlAttributes":return{toComponent:()=>im(s),toString:()=>rm(s)};default:return{toComponent:()=>vi(r,s),toString:()=>rh(r,s,o)}}},sh=({metaTags:r,linkTags:s,scriptTags:o,encode:c})=>{const m=Ro(r,To.meta),p=Ro(s,To.link),u=Ro(o,To.script);return{priorityMethods:{toComponent:()=>[...vi("meta",m.priority),...vi("link",p.priority),...vi("script",u.priority)],toString:()=>`${dt("meta",m.priority,c)} ${dt("link",p.priority,c)} ${dt("script",u.priority,c)}`},metaTags:m.default,linkTags:p.default,scriptTags:u.default}},oh=r=>{const{baseTag:s,bodyAttributes:o,encode:c=!0,htmlAttributes:m,noscriptTags:p,styleTags:u,title:b="",titleAttributes:h,prioritizeSeoTags:x}=r;let{linkTags:y,metaTags:g,scriptTags:E}=r,D={toComponent:()=>[],toString:()=>""};return x&&({priorityMethods:D,linkTags:y,metaTags:g,scriptTags:E}=sh(r)),{priority:D,base:dt("base",s,c),bodyAttributes:dt("bodyAttributes",o,c),htmlAttributes:dt("htmlAttributes",m,c),link:dt("link",y,c),meta:dt("meta",g,c),noscript:dt("noscript",p,c),script:dt("script",E,c),style:dt("style",u,c),title:dt("title",{title:b,titleAttributes:h},c)}},Fo=oh,hi=[],qo=!!(typeof window<"u"&&window.document&&window.document.createElement),Uo=class{constructor(r,s){Lt(this,"instances",[]);Lt(this,"canUseDOM",qo);Lt(this,"context");Lt(this,"value",{setHelmet:r=>{this.context.helmet=r},helmetInstances:{get:()=>this.canUseDOM?hi:this.instances,add:r=>{(this.canUseDOM?hi:this.instances).push(r)},remove:r=>{const s=(this.canUseDOM?hi:this.instances).indexOf(r);(this.canUseDOM?hi:this.instances).splice(s,1)}}});this.context=r,this.canUseDOM=s||!1,s||(r.helmet=Fo({baseTag:[],bodyAttributes:{},htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))}},lh=parseInt(Se.version.split(".")[0],10),_o=lh>=19,ch={},sm=Se.createContext(ch),Aa,om=(Aa=class extends v.Component{constructor(o){super(o);Lt(this,"helmetData");_o?this.helmetData=null:this.helmetData=new Uo(this.props.context||{},Aa.canUseDOM)}render(){return _o?Se.createElement(Se.Fragment,null,this.props.children):Se.createElement(sm.Provider,{value:this.helmetData.value},this.props.children)}},Lt(Aa,"canUseDOM",qo),Aa),en=(r,s)=>{const o=document.head||document.querySelector("head"),c=o.querySelectorAll(`${r}[${jt}]`),m=[].slice.call(c),p=[];let u;return s&&s.length&&s.forEach(b=>{const h=document.createElement(r);for(const x in b)if(Object.prototype.hasOwnProperty.call(b,x))if(x==="innerHTML")h.innerHTML=b.innerHTML;else if(x==="cssText"){const y=b.cssText;h.appendChild(document.createTextNode(y))}else{const y=x,g=typeof b[y]>"u"?"":b[y];h.setAttribute(x,g)}h.setAttribute(jt,"true"),m.some((x,y)=>(u=y,h.isEqualNode(x)))?m.splice(u,1):p.push(h)}),m.forEach(b=>{var h;return(h=b.parentNode)==null?void 0:h.removeChild(b)}),p.forEach(b=>o.appendChild(b)),{oldTags:m,newTags:p}},$o=(r,s)=>{const o=document.getElementsByTagName(r)[0];if(!o)return;const c=o.getAttribute(jt),m=c?c.split(","):[],p=[...m],u=Object.keys(s);for(const b of u){const h=s[b]||"";o.getAttribute(b)!==h&&o.setAttribute(b,h),m.indexOf(b)===-1&&m.push(b);const x=p.indexOf(b);x!==-1&&p.splice(x,1)}for(let b=p.length-1;b>=0;b-=1)o.removeAttribute(p[b]);m.length===p.length?o.removeAttribute(jt):o.getAttribute(jt)!==u.join(",")&&o.setAttribute(jt,u.join(","))},dh=(r,s)=>{typeof r<"u"&&document.title!==r&&(document.title=nm(r)),$o("title",s)},pp=(r,s)=>{const{baseTag:o,bodyAttributes:c,htmlAttributes:m,linkTags:p,metaTags:u,noscriptTags:b,onChangeClientState:h,scriptTags:x,styleTags:y,title:g,titleAttributes:E}=r;$o("body",c),$o("html",m),dh(g,E);const D={baseTag:en("base",o),linkTags:en("link",p),metaTags:en("meta",u),noscriptTags:en("noscript",b),scriptTags:en("script",x),styleTags:en("style",y)},F={},P={};Object.keys(D).forEach(z=>{const{newTags:N,oldTags:R}=D[z];N.length&&(F[z]=N),R.length&&(P[z]=D[z].oldTags)}),s&&s(),h(r,F,P)},qn=null,ph=r=>{qn&&cancelAnimationFrame(qn),r.defer?qn=requestAnimationFrame(()=>{pp(r,()=>{qn=null})}):(pp(r),qn=null)},mh=ph,mp=class extends v.Component{constructor(){super(...arguments);Lt(this,"rendered",!1)}shouldComponentUpdate(s){return!Vf(s,this.props)}componentDidUpdate(){this.emitChange()}componentWillUnmount(){const{helmetInstances:s}=this.props.context;s.remove(this),this.emitChange()}emitChange(){const{helmetInstances:s,setHelmet:o}=this.props.context;let c=null;const m=eh(s.get().map(p=>{const{context:u,...b}=p.props;return b}));om.canUseDOM?mh(m):Fo&&(c=Fo(m)),o(c)}init(){if(this.rendered)return;this.rendered=!0;const{helmetInstances:s}=this.props.context;s.add(this),this.emitChange()}render(){return this.init(),null}},ji=[],up=r=>{const s={};for(const o of Object.keys(r))s[am[o]||o]=r[o];return s},Ca=r=>{const s={};for(const o of Object.keys(r)){const c=Ci[o];s[c||o]=r[o]}return s},fp=(r,s)=>{if(!qo)return;const o=document.getElementsByTagName(r)[0];if(!o)return;const c="data-rh-managed",m=o.getAttribute(c),p=m?m.split(","):[],u=Object.keys(s);for(const b of p)u.includes(b)||o.removeAttribute(b);for(const b of u){const h=s[b];h==null||h===!1?o.removeAttribute(b):h===!0?o.setAttribute(b,""):o.setAttribute(b,String(h))}u.length>0?o.setAttribute(c,u.join(",")):o.removeAttribute(c)},Po=()=>{const r={},s={};for(const o of ji){const{htmlAttributes:c,bodyAttributes:m}=o.props;c&&Object.assign(r,up(c)),m&&Object.assign(s,up(m))}fp("html",r),fp("body",s)},uh=class extends v.Component{componentDidMount(){ji.push(this),Po()}componentDidUpdate(){Po()}componentWillUnmount(){const r=ji.indexOf(this);r!==-1&&ji.splice(r,1),Po()}resolveTitle(){const{title:r,titleTemplate:s,defaultTitle:o}=this.props;return r&&s?s.replace(/%s/g,()=>Array.isArray(r)?r.join(""):r):r||o||void 0}renderTitle(){const r=this.resolveTitle();if(r===void 0)return null;const s=this.props.titleAttributes||{};return Se.createElement("title",Ca(s),r)}renderBase(){const{base:r}=this.props;return r?Se.createElement("base",Ca(r)):null}renderMeta(){const{meta:r}=this.props;return!r||!Array.isArray(r)?null:r.map((s,o)=>Se.createElement("meta",{key:o,...Ca(s)}))}renderLink(){const{link:r}=this.props;return!r||!Array.isArray(r)?null:r.map((s,o)=>Se.createElement("link",{key:o,...Ca(s)}))}renderScript(){const{script:r}=this.props;return!r||!Array.isArray(r)?null:r.map((s,o)=>{const{innerHTML:c,...m}=s,p=Ca(m);return c&&(p.dangerouslySetInnerHTML={__html:c}),Se.createElement("script",{key:o,...p})})}renderStyle(){const{style:r}=this.props;return!r||!Array.isArray(r)?null:r.map((s,o)=>{const{cssText:c,...m}=s,p=Ca(m);return c&&(p.dangerouslySetInnerHTML={__html:c}),Se.createElement("style",{key:o,...p})})}renderNoscript(){const{noscript:r}=this.props;return!r||!Array.isArray(r)?null:r.map((s,o)=>{const{innerHTML:c,...m}=s,p=Ca(m);return c&&(p.dangerouslySetInnerHTML={__html:c}),Se.createElement("noscript",{key:o,...p})})}render(){return Se.createElement(Se.Fragment,null,this.renderTitle(),this.renderBase(),this.renderMeta(),this.renderLink(),this.renderScript(),this.renderStyle(),this.renderNoscript())}},Lo,lm=(Lo=class extends v.Component{shouldComponentUpdate(r){return!_f(dp(this.props,"helmetData"),dp(r,"helmetData"))}mapNestedChildrenToProps(r,s){if(!s)return null;switch(r.type){case"script":case"noscript":return{innerHTML:s};case"style":return{cssText:s};default:throw new Error(`<${r.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`)}}flattenArrayTypeChildren(r,s,o,c){return{...s,[r.type]:[...s[r.type]||[],{...o,...this.mapNestedChildrenToProps(r,c)}]}}mapObjectTypeChildren(r,s,o,c){switch(r.type){case"title":return{...s,[r.type]:c,titleAttributes:{...o}};case"body":return{...s,bodyAttributes:{...o}};case"html":return{...s,htmlAttributes:{...o}};default:return{...s,[r.type]:{...o}}}}mapArrayTypeChildrenToProps(r,s){let o={...s};return Object.keys(r).forEach(c=>{o={...o,[c]:r[c]}}),o}warnOnInvalidChildren(r,s){return op(cp.some(o=>r.type===o),typeof r.type=="function"?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":`Only elements types ${cp.join(", ")} are allowed. Helmet does not support rendering <${r.type}> elements. Refer to our API for more information.`),op(!s||typeof s=="string"||Array.isArray(s)&&!s.some(o=>typeof o!="string"),`Helmet expects a string as a child of <${r.type}>. Did you forget to wrap your children in braces? ( <${r.type}>{\`\`}</${r.type}> ) Refer to our API for more information.`),!0}mapChildrenToProps(r,s){let o={};return Se.Children.forEach(r,c=>{if(!c||!c.props)return;const{children:m,...p}=c.props,u=Object.keys(p).reduce((h,x)=>(h[am[x]||x]=p[x],h),{});let{type:b}=c;switch(typeof b=="symbol"?b=b.toString():this.warnOnInvalidChildren(c,m),b){case"Symbol(react.fragment)":s=this.mapChildrenToProps(m,s);break;case"link":case"meta":case"noscript":case"script":case"style":o=this.flattenArrayTypeChildren(c,o,u,m);break;default:s=this.mapObjectTypeChildren(c,s,u,m);break}}),this.mapArrayTypeChildrenToProps(o,s)}render(){const{children:r,...s}=this.props;let o={...s},{helmetData:c}=s;if(r&&(o=this.mapChildrenToProps(r,o)),c&&!(c instanceof Uo)){const m=c;c=new Uo(m.context,!0),delete o.helmetData}return _o?Se.createElement(uh,{...o}):c?Se.createElement(mp,{...o,context:c.value}):Se.createElement(sm.Consumer,null,m=>Se.createElement(mp,{...o,context:m}))}},Lt(Lo,"defaultProps",{defer:!0,encodeSpecialCharacters:!0,prioritizeSeoTags:!1}),Lo);em();/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function er(){return er=Object.assign?Object.assign.bind():function(r){for(var s=1;s<arguments.length;s++){var o=arguments[s];for(var c in o)Object.prototype.hasOwnProperty.call(o,c)&&(r[c]=o[c])}return r},er.apply(this,arguments)}var ca;(function(r){r.Pop="POP",r.Push="PUSH",r.Replace="REPLACE"})(ca||(ca={}));const hp="popstate";function fh(r){r===void 0&&(r={});function s(c,m){let{pathname:p,search:u,hash:b}=c.location;return Go("",{pathname:p,search:u,hash:b},m.state&&m.state.usr||null,m.state&&m.state.key||"default")}function o(c,m){return typeof m=="string"?m:Si(m)}return gh(s,o,null,r)}function ke(r,s){if(r===!1||r===null||typeof r>"u")throw new Error(s)}function Qo(r,s){if(!r){typeof console<"u"&&console.warn(s);try{throw new Error(s)}catch{}}}function hh(){return Math.random().toString(36).substr(2,8)}function gp(r,s){return{usr:r.state,key:r.key,idx:s}}function Go(r,s,o,c){return o===void 0&&(o=null),er({pathname:typeof r=="string"?r:r.pathname,search:"",hash:""},typeof s=="string"?ln(s):s,{state:o,key:s&&s.key||c||hh()})}function Si(r){let{pathname:s="/",search:o="",hash:c=""}=r;return o&&o!=="?"&&(s+=o.charAt(0)==="?"?o:"?"+o),c&&c!=="#"&&(s+=c.charAt(0)==="#"?c:"#"+c),s}function ln(r){let s={};if(r){let o=r.indexOf("#");o>=0&&(s.hash=r.substr(o),r=r.substr(0,o));let c=r.indexOf("?");c>=0&&(s.search=r.substr(c),r=r.substr(0,c)),r&&(s.pathname=r)}return s}function gh(r,s,o,c){c===void 0&&(c={});let{window:m=document.defaultView,v5Compat:p=!1}=c,u=m.history,b=ca.Pop,h=null,x=y();x==null&&(x=0,u.replaceState(er({},u.state,{idx:x}),""));function y(){return(u.state||{idx:null}).idx}function g(){b=ca.Pop;let z=y(),N=z==null?null:z-x;x=z,h&&h({action:b,location:P.location,delta:N})}function E(z,N){b=ca.Push;let R=Go(P.location,z,N);x=y()+1;let L=gp(R,x),q=P.createHref(R);try{u.pushState(L,"",q)}catch(he){if(he instanceof DOMException&&he.name==="DataCloneError")throw he;m.location.assign(q)}p&&h&&h({action:b,location:P.location,delta:1})}function D(z,N){b=ca.Replace;let R=Go(P.location,z,N);x=y();let L=gp(R,x),q=P.createHref(R);u.replaceState(L,"",q),p&&h&&h({action:b,location:P.location,delta:0})}function F(z){let N=m.location.origin!=="null"?m.location.origin:m.location.href,R=typeof z=="string"?z:Si(z);return R=R.replace(/ $/,"%20"),ke(N,"No window.location.(origin|href) available to create URL for href: "+R),new URL(R,N)}let P={get action(){return b},get location(){return r(m,u)},listen(z){if(h)throw new Error("A history only accepts one active listener");return m.addEventListener(hp,g),h=z,()=>{m.removeEventListener(hp,g),h=null}},createHref(z){return s(m,z)},createURL:F,encodeLocation(z){let N=F(z);return{pathname:N.pathname,search:N.search,hash:N.hash}},push:E,replace:D,go(z){return u.go(z)}};return P}var xp;(function(r){r.data="data",r.deferred="deferred",r.redirect="redirect",r.error="error"})(xp||(xp={}));function xh(r,s,o){return o===void 0&&(o="/"),bh(r,s,o)}function bh(r,s,o,c){let m=typeof s=="string"?ln(s):s,p=Xo(m.pathname||"/",o);if(p==null)return null;let u=cm(r);yh(u);let b=null;for(let h=0;b==null&&h<u.length;++h){let x=Ph(p);b=Th(u[h],x)}return b}function cm(r,s,o,c){s===void 0&&(s=[]),o===void 0&&(o=[]),c===void 0&&(c="");let m=(p,u,b)=>{let h={relativePath:b===void 0?p.path||"":b,caseSensitive:p.caseSensitive===!0,childrenIndex:u,route:p};h.relativePath.startsWith("/")&&(ke(h.relativePath.startsWith(c),'Absolute route path "'+h.relativePath+'" nested under path '+('"'+c+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),h.relativePath=h.relativePath.slice(c.length));let x=da([c,h.relativePath]),y=o.concat(h);p.children&&p.children.length>0&&(ke(p.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+x+'".')),cm(p.children,s,y,x)),!(p.path==null&&!p.index)&&s.push({path:x,score:kh(x,p.index),routesMeta:y})};return r.forEach((p,u)=>{var b;if(p.path===""||!((b=p.path)!=null&&b.includes("?")))m(p,u);else for(let h of dm(p.path))m(p,u,h)}),s}function dm(r){let s=r.split("/");if(s.length===0)return[];let[o,...c]=s,m=o.endsWith("?"),p=o.replace(/\?$/,"");if(c.length===0)return m?[p,""]:[p];let u=dm(c.join("/")),b=[];return b.push(...u.map(h=>h===""?p:[p,h].join("/"))),m&&b.push(...u),b.map(h=>r.startsWith("/")&&h===""?"/":h)}function yh(r){r.sort((s,o)=>s.score!==o.score?o.score-s.score:Nh(s.routesMeta.map(c=>c.childrenIndex),o.routesMeta.map(c=>c.childrenIndex)))}const vh=/^:[\w-]+$/,jh=3,Sh=2,wh=1,Ch=10,Ah=-2,bp=r=>r==="*";function kh(r,s){let o=r.split("/"),c=o.length;return o.some(bp)&&(c+=Ah),s&&(c+=Sh),o.filter(m=>!bp(m)).reduce((m,p)=>m+(vh.test(p)?jh:p===""?wh:Ch),c)}function Nh(r,s){return r.length===s.length&&r.slice(0,-1).every((c,m)=>c===s[m])?r[r.length-1]-s[s.length-1]:0}function Th(r,s,o){let{routesMeta:c}=r,m={},p="/",u=[];for(let b=0;b<c.length;++b){let h=c[b],x=b===c.length-1,y=p==="/"?s:s.slice(p.length)||"/",g=Eh({path:h.relativePath,caseSensitive:h.caseSensitive,end:x},y),E=h.route;if(!g)return null;Object.assign(m,g.params),u.push({params:m,pathname:da([p,g.pathname]),pathnameBase:Oh(da([p,g.pathnameBase])),route:E}),g.pathnameBase!=="/"&&(p=da([p,g.pathnameBase]))}return u}function Eh(r,s){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[o,c]=Rh(r.path,r.caseSensitive,r.end),m=s.match(o);if(!m)return null;let p=m[0],u=p.replace(/(.)\/+$/,"$1"),b=m.slice(1);return{params:c.reduce((x,y,g)=>{let{paramName:E,isOptional:D}=y;if(E==="*"){let P=b[g]||"";u=p.slice(0,p.length-P.length).replace(/(.)\/+$/,"$1")}const F=b[g];return D&&!F?x[E]=void 0:x[E]=(F||"").replace(/%2F/g,"/"),x},{}),pathname:p,pathnameBase:u,pattern:r}}function Rh(r,s,o){s===void 0&&(s=!1),o===void 0&&(o=!0),Qo(r==="*"||!r.endsWith("*")||r.endsWith("/*"),'Route path "'+r+'" will be treated as if it were '+('"'+r.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+r.replace(/\*$/,"/*")+'".'));let c=[],m="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(u,b,h)=>(c.push({paramName:b,isOptional:h!=null}),h?"/?([^\\/]+)?":"/([^\\/]+)"));return r.endsWith("*")?(c.push({paramName:"*"}),m+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):o?m+="\\/*$":r!==""&&r!=="/"&&(m+="(?:(?=\\/|$))"),[new RegExp(m,s?void 0:"i"),c]}function Ph(r){try{return r.split("/").map(s=>decodeURIComponent(s).replace(/\//g,"%2F")).join("/")}catch(s){return Qo(!1,'The URL path "'+r+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+s+").")),r}}function Xo(r,s){if(s==="/")return r;if(!r.toLowerCase().startsWith(s.toLowerCase()))return null;let o=s.endsWith("/")?s.length-1:s.length,c=r.charAt(o);return c&&c!=="/"?null:r.slice(o)||"/"}const Ih=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Bh=r=>Ih.test(r);function Mh(r,s){s===void 0&&(s="/");let{pathname:o,search:c="",hash:m=""}=typeof r=="string"?ln(r):r,p;if(o)if(Bh(o))p=o;else{if(o.includes("//")){let u=o;o=o.replace(/\/\/+/g,"/"),Qo(!1,"Pathnames cannot have embedded double slashes - normalizing "+(u+" -> "+o))}o.startsWith("/")?p=yp(o.substring(1),"/"):p=yp(o,s)}else p=s;return{pathname:p,search:Dh(c),hash:Wh(m)}}function yp(r,s){let o=s.replace(/\/+$/,"").split("/");return r.split("/").forEach(m=>{m===".."?o.length>1&&o.pop():m!=="."&&o.push(m)}),o.length>1?o.join("/"):"/"}function Io(r,s,o,c){return"Cannot include a '"+r+"' character in a manually specified "+("`to."+s+"` field ["+JSON.stringify(c)+"].  Please separate it out to the ")+("`to."+o+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function zh(r){return r.filter((s,o)=>o===0||s.route.path&&s.route.path.length>0)}function pm(r,s){let o=zh(r);return s?o.map((c,m)=>m===o.length-1?c.pathname:c.pathnameBase):o.map(c=>c.pathnameBase)}function mm(r,s,o,c){c===void 0&&(c=!1);let m;typeof r=="string"?m=ln(r):(m=er({},r),ke(!m.pathname||!m.pathname.includes("?"),Io("?","pathname","search",m)),ke(!m.pathname||!m.pathname.includes("#"),Io("#","pathname","hash",m)),ke(!m.search||!m.search.includes("#"),Io("#","search","hash",m)));let p=r===""||m.pathname==="",u=p?"/":m.pathname,b;if(u==null)b=o;else{let g=s.length-1;if(!c&&u.startsWith("..")){let E=u.split("/");for(;E[0]==="..";)E.shift(),g-=1;m.pathname=E.join("/")}b=g>=0?s[g]:"/"}let h=Mh(m,b),x=u&&u!=="/"&&u.endsWith("/"),y=(p||u===".")&&o.endsWith("/");return!h.pathname.endsWith("/")&&(x||y)&&(h.pathname+="/"),h}const da=r=>r.join("/").replace(/\/\/+/g,"/"),Oh=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),Dh=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,Wh=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function Lh(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}const um=["post","put","patch","delete"];new Set(um);const Hh=["get",...um];new Set(Hh);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function tr(){return tr=Object.assign?Object.assign.bind():function(r){for(var s=1;s<arguments.length;s++){var o=arguments[s];for(var c in o)Object.prototype.hasOwnProperty.call(o,c)&&(r[c]=o[c])}return r},tr.apply(this,arguments)}const Zo=v.createContext(null),Fh=v.createContext(null),ka=v.createContext(null),Ai=v.createContext(null),Na=v.createContext({outlet:null,matches:[],isDataRoute:!1}),fm=v.createContext(null);function Uh(r,s){let{relative:o}=s===void 0?{}:s;ar()||ke(!1);let{basename:c,navigator:m}=v.useContext(ka),{hash:p,pathname:u,search:b}=gm(r,{relative:o}),h=u;return c!=="/"&&(h=u==="/"?c:da([c,u])),m.createHref({pathname:h,search:b,hash:p})}function ar(){return v.useContext(Ai)!=null}function Ft(){return ar()||ke(!1),v.useContext(Ai).location}function hm(r){v.useContext(ka).static||v.useLayoutEffect(r)}function nr(){let{isDataRoute:r}=v.useContext(Na);return r?tg():_h()}function _h(){ar()||ke(!1);let r=v.useContext(Zo),{basename:s,future:o,navigator:c}=v.useContext(ka),{matches:m}=v.useContext(Na),{pathname:p}=Ft(),u=JSON.stringify(pm(m,o.v7_relativeSplatPath)),b=v.useRef(!1);return hm(()=>{b.current=!0}),v.useCallback(function(x,y){if(y===void 0&&(y={}),!b.current)return;if(typeof x=="number"){c.go(x);return}let g=mm(x,JSON.parse(u),p,y.relative==="path");r==null&&s!=="/"&&(g.pathname=g.pathname==="/"?s:da([s,g.pathname])),(y.replace?c.replace:c.push)(g,y.state,y)},[s,c,u,p,r])}function gm(r,s){let{relative:o}=s===void 0?{}:s,{future:c}=v.useContext(ka),{matches:m}=v.useContext(Na),{pathname:p}=Ft(),u=JSON.stringify(pm(m,c.v7_relativeSplatPath));return v.useMemo(()=>mm(r,JSON.parse(u),p,o==="path"),[r,u,p,o])}function $h(r,s){return Gh(r,s)}function Gh(r,s,o,c){ar()||ke(!1);let{navigator:m}=v.useContext(ka),{matches:p}=v.useContext(Na),u=p[p.length-1],b=u?u.params:{};u&&u.pathname;let h=u?u.pathnameBase:"/";u&&u.route;let x=Ft(),y;if(s){var g;let z=typeof s=="string"?ln(s):s;h==="/"||(g=z.pathname)!=null&&g.startsWith(h)||ke(!1),y=z}else y=x;let E=y.pathname||"/",D=E;if(h!=="/"){let z=h.replace(/^\//,"").split("/");D="/"+E.replace(/^\//,"").split("/").slice(z.length).join("/")}let F=xh(r,{pathname:D}),P=qh(F&&F.map(z=>Object.assign({},z,{params:Object.assign({},b,z.params),pathname:da([h,m.encodeLocation?m.encodeLocation(z.pathname).pathname:z.pathname]),pathnameBase:z.pathnameBase==="/"?h:da([h,m.encodeLocation?m.encodeLocation(z.pathnameBase).pathname:z.pathnameBase])})),p,o,c);return s&&P?v.createElement(Ai.Provider,{value:{location:tr({pathname:"/",search:"",hash:"",state:null,key:"default"},y),navigationType:ca.Pop}},P):P}function Yh(){let r=eg(),s=Lh(r)?r.status+" "+r.statusText:r instanceof Error?r.message:JSON.stringify(r),o=r instanceof Error?r.stack:null,m={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return v.createElement(v.Fragment,null,v.createElement("h2",null,"Unexpected Application Error!"),v.createElement("h3",{style:{fontStyle:"italic"}},s),o?v.createElement("pre",{style:m},o):null,null)}const Jh=v.createElement(Yh,null);class Vh extends v.Component{constructor(s){super(s),this.state={location:s.location,revalidation:s.revalidation,error:s.error}}static getDerivedStateFromError(s){return{error:s}}static getDerivedStateFromProps(s,o){return o.location!==s.location||o.revalidation!=="idle"&&s.revalidation==="idle"?{error:s.error,location:s.location,revalidation:s.revalidation}:{error:s.error!==void 0?s.error:o.error,location:o.location,revalidation:s.revalidation||o.revalidation}}componentDidCatch(s,o){console.error("React Router caught the following error during render",s,o)}render(){return this.state.error!==void 0?v.createElement(Na.Provider,{value:this.props.routeContext},v.createElement(fm.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Kh(r){let{routeContext:s,match:o,children:c}=r,m=v.useContext(Zo);return m&&m.static&&m.staticContext&&(o.route.errorElement||o.route.ErrorBoundary)&&(m.staticContext._deepestRenderedBoundaryId=o.route.id),v.createElement(Na.Provider,{value:s},c)}function qh(r,s,o,c){var m;if(s===void 0&&(s=[]),o===void 0&&(o=null),c===void 0&&(c=null),r==null){var p;if(!o)return null;if(o.errors)r=o.matches;else if((p=c)!=null&&p.v7_partialHydration&&s.length===0&&!o.initialized&&o.matches.length>0)r=o.matches;else return null}let u=r,b=(m=o)==null?void 0:m.errors;if(b!=null){let y=u.findIndex(g=>g.route.id&&(b==null?void 0:b[g.route.id])!==void 0);y>=0||ke(!1),u=u.slice(0,Math.min(u.length,y+1))}let h=!1,x=-1;if(o&&c&&c.v7_partialHydration)for(let y=0;y<u.length;y++){let g=u[y];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(x=y),g.route.id){let{loaderData:E,errors:D}=o,F=g.route.loader&&E[g.route.id]===void 0&&(!D||D[g.route.id]===void 0);if(g.route.lazy||F){h=!0,x>=0?u=u.slice(0,x+1):u=[u[0]];break}}}return u.reduceRight((y,g,E)=>{let D,F=!1,P=null,z=null;o&&(D=b&&g.route.id?b[g.route.id]:void 0,P=g.route.errorElement||Jh,h&&(x<0&&E===0?(ag("route-fallback"),F=!0,z=null):x===E&&(F=!0,z=g.route.hydrateFallbackElement||null)));let N=s.concat(u.slice(0,E+1)),R=()=>{let L;return D?L=P:F?L=z:g.route.Component?L=v.createElement(g.route.Component,null):g.route.element?L=g.route.element:L=y,v.createElement(Kh,{match:g,routeContext:{outlet:y,matches:N,isDataRoute:o!=null},children:L})};return o&&(g.route.ErrorBoundary||g.route.errorElement||E===0)?v.createElement(Vh,{location:o.location,revalidation:o.revalidation,component:P,error:D,children:R(),routeContext:{outlet:null,matches:N,isDataRoute:!0}}):R()},null)}var xm=(function(r){return r.UseBlocker="useBlocker",r.UseRevalidator="useRevalidator",r.UseNavigateStable="useNavigate",r})(xm||{}),bm=(function(r){return r.UseBlocker="useBlocker",r.UseLoaderData="useLoaderData",r.UseActionData="useActionData",r.UseRouteError="useRouteError",r.UseNavigation="useNavigation",r.UseRouteLoaderData="useRouteLoaderData",r.UseMatches="useMatches",r.UseRevalidator="useRevalidator",r.UseNavigateStable="useNavigate",r.UseRouteId="useRouteId",r})(bm||{});function Qh(r){let s=v.useContext(Zo);return s||ke(!1),s}function Xh(r){let s=v.useContext(Fh);return s||ke(!1),s}function Zh(r){let s=v.useContext(Na);return s||ke(!1),s}function ym(r){let s=Zh(),o=s.matches[s.matches.length-1];return o.route.id||ke(!1),o.route.id}function eg(){var r;let s=v.useContext(fm),o=Xh(),c=ym();return s!==void 0?s:(r=o.errors)==null?void 0:r[c]}function tg(){let{router:r}=Qh(xm.UseNavigateStable),s=ym(bm.UseNavigateStable),o=v.useRef(!1);return hm(()=>{o.current=!0}),v.useCallback(function(m,p){p===void 0&&(p={}),o.current&&(typeof m=="number"?r.navigate(m):r.navigate(m,tr({fromRouteId:s},p)))},[r,s])}const vp={};function ag(r,s,o){vp[r]||(vp[r]=!0)}function ng(r,s){r==null||r.v7_startTransition,r==null||r.v7_relativeSplatPath}function X(r){ke(!1)}function rg(r){let{basename:s="/",children:o=null,location:c,navigationType:m=ca.Pop,navigator:p,static:u=!1,future:b}=r;ar()&&ke(!1);let h=s.replace(/^\/*/,"/"),x=v.useMemo(()=>({basename:h,navigator:p,static:u,future:tr({v7_relativeSplatPath:!1},b)}),[h,b,p,u]);typeof c=="string"&&(c=ln(c));let{pathname:y="/",search:g="",hash:E="",state:D=null,key:F="default"}=c,P=v.useMemo(()=>{let z=Xo(y,h);return z==null?null:{location:{pathname:z,search:g,hash:E,state:D,key:F},navigationType:m}},[h,y,g,E,D,F,m]);return P==null?null:v.createElement(ka.Provider,{value:x},v.createElement(Ai.Provider,{children:o,value:P}))}function ig(r){let{children:s,location:o}=r;return $h(Yo(s),o)}new Promise(()=>{});function Yo(r,s){s===void 0&&(s=[]);let o=[];return v.Children.forEach(r,(c,m)=>{if(!v.isValidElement(c))return;let p=[...s,m];if(c.type===v.Fragment){o.push.apply(o,Yo(c.props.children,p));return}c.type!==X&&ke(!1),!c.props.index||!c.props.children||ke(!1);let u={id:c.props.id||p.join("-"),caseSensitive:c.props.caseSensitive,element:c.props.element,Component:c.props.Component,index:c.props.index,path:c.props.path,loader:c.props.loader,action:c.props.action,errorElement:c.props.errorElement,ErrorBoundary:c.props.ErrorBoundary,hasErrorBoundary:c.props.ErrorBoundary!=null||c.props.errorElement!=null,shouldRevalidate:c.props.shouldRevalidate,handle:c.props.handle,lazy:c.props.lazy};c.props.children&&(u.children=Yo(c.props.children,p)),o.push(u)}),o}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Jo(){return Jo=Object.assign?Object.assign.bind():function(r){for(var s=1;s<arguments.length;s++){var o=arguments[s];for(var c in o)Object.prototype.hasOwnProperty.call(o,c)&&(r[c]=o[c])}return r},Jo.apply(this,arguments)}function sg(r,s){if(r==null)return{};var o={},c=Object.keys(r),m,p;for(p=0;p<c.length;p++)m=c[p],!(s.indexOf(m)>=0)&&(o[m]=r[m]);return o}function og(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function lg(r,s){return r.button===0&&(!s||s==="_self")&&!og(r)}const cg=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],dg="6";try{window.__reactRouterVersion=dg}catch{}const pg="startTransition",jp=zf[pg];function mg(r){let{basename:s,children:o,future:c,window:m}=r,p=v.useRef();p.current==null&&(p.current=fh({window:m,v5Compat:!0}));let u=p.current,[b,h]=v.useState({action:u.action,location:u.location}),{v7_startTransition:x}=c||{},y=v.useCallback(g=>{x&&jp?jp(()=>h(g)):h(g)},[h,x]);return v.useLayoutEffect(()=>u.listen(y),[u,y]),v.useEffect(()=>ng(c),[c]),v.createElement(rg,{basename:s,children:o,location:b.location,navigationType:b.action,navigator:u,future:c})}const ug=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",fg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,fe=v.forwardRef(function(s,o){let{onClick:c,relative:m,reloadDocument:p,replace:u,state:b,target:h,to:x,preventScrollReset:y,viewTransition:g}=s,E=sg(s,cg),{basename:D}=v.useContext(ka),F,P=!1;if(typeof x=="string"&&fg.test(x)&&(F=x,ug))try{let L=new URL(window.location.href),q=x.startsWith("//")?new URL(L.protocol+x):new URL(x),he=Xo(q.pathname,D);q.origin===L.origin&&he!=null?x=he+q.search+q.hash:P=!0}catch{}let z=Uh(x,{relative:m}),N=hg(x,{replace:u,state:b,target:h,preventScrollReset:y,relative:m,viewTransition:g});function R(L){c&&c(L),L.defaultPrevented||N(L)}return v.createElement("a",Jo({},E,{href:F||z,onClick:P||p?c:R,ref:o,target:h}))});var Sp;(function(r){r.UseScrollRestoration="useScrollRestoration",r.UseSubmit="useSubmit",r.UseSubmitFetcher="useSubmitFetcher",r.UseFetcher="useFetcher",r.useViewTransitionState="useViewTransitionState"})(Sp||(Sp={}));var wp;(function(r){r.UseFetcher="useFetcher",r.UseFetchers="useFetchers",r.UseScrollRestoration="useScrollRestoration"})(wp||(wp={}));function hg(r,s){let{target:o,replace:c,state:m,preventScrollReset:p,relative:u,viewTransition:b}=s===void 0?{}:s,h=nr(),x=Ft(),y=gm(r,{relative:u});return v.useCallback(g=>{if(lg(g,o)){g.preventDefault();let E=c!==void 0?c:Si(x)===Si(y);h(r,{replace:E,state:m,preventScrollReset:p,relative:u,viewTransition:b})}},[x,h,y,c,m,o,r,p,u,b])}function gg(){const{pathname:r}=Ft();return v.useEffect(()=>{window.scrollTo(0,0),document.documentElement.scrollTop=0,document.body.scrollTop=0,setTimeout(()=>{window.scrollTo(0,0),document.documentElement.scrollTop=0,document.body.scrollTop=0},0),setTimeout(()=>{window.scrollTo(0,0),document.documentElement.scrollTop=0,document.body.scrollTop=0},10)},[r]),null}function xg(){const r=[{type:"en",text:"Creative Techno College, Angul — AICTE Approved & Utkal University Affiliated"},{type:"odia",text:"ଆମ ମହାବିଦ୍ୟାଳୟ ରେ ଆପଣଙ୍କୁ ସ୍ୱାଗତ"},{type:"en",text:"Admissions Open 2026–27 | BBA | BCA | B.Sc (CS) | B.Sc (Data Science) | MBA | MCA"},{type:"odia",text:"ଜୟ ଜଗନ୍ନାଥ · ଅନୁଗୋଳ ର ଗୌରବ"},{type:"en",text:"100% Placement Assistance | Contact: +91 9778427170"}],s=[...r,...r];return e.jsxs("div",{className:"marquee-bar angul-marquee",children:[e.jsxs("div",{className:"marquee-odia-pill","aria-label":"Education, Technology, Employment",children:[e.jsx("i",{className:"fa-solid fa-dharmachakra","aria-hidden":"true"}),e.jsx("span",{children:"ଶିକ୍ଷା · ପ୍ରଯୁକ୍ତି · ନିଯୁକ୍ତି"})]}),e.jsx("div",{className:"marquee-scroll-area",children:e.jsx("div",{className:"marquee-track-wrap",children:s.map((o,c)=>e.jsxs("span",{className:`marquee-item${o.type==="odia"?" marquee-odia":""}`,children:[o.type==="odia"&&e.jsx("span",{className:"marquee-dot","aria-hidden":"true",children:"✦"}),o.text]},c))})})]})}const bg=[{label:"Home",to:"/"},{label:"About",children:[{label:"About Trust",to:"/about/trust"},{label:"About CTC",to:"/about/ctc"},{label:"Our Team",to:"/about/team"}]},{label:"Admission",to:"/admission"},{label:"Academics",children:[{label:"Courses",children:[{label:"Regular Courses",to:"/academics/regular"},{label:"Value Added Courses",to:"/academics/value-added"}]},{label:"Enhancement Programs",to:"/academics/enhancement"}]},{label:"Placement",children:[{label:"Development Program",to:"/placement/programs"},{label:"Placement Statistics",to:"/placement/statistics"},{label:"Placement Brochure",to:"/placement/brochure"}]},{label:"Gymkhana",to:"/gymkhana"},{label:"Gallery",to:"/gallery"},{label:"IQAC",children:[{label:"IQAC Item 1",to:"/iqac/item1"},{label:"IQAC Item 2",to:"/iqac/item2"},{label:"IQAC Item 3",to:"/iqac/item3"},{label:"IQAC Item 4",to:"/iqac/item4"}]},{label:"AICTE",children:[{label:"LOA 2024-25",to:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/LOA Report 2024-2025.PDF",external:!0,newTab:!0},{label:"EOA 2025-26",to:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/EOA Report 2025-26.PDF",external:!0,newTab:!0},{label:"EOA 2026-27",to:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/EOA Report 26-27.PDF",external:!0,newTab:!0},{label:"Documents",to:"/aicte/documents"},{label:"Mandatory Disclosure",to:"/aicte/mandatory-disclosure"}]},{label:"CKF Skills",to:"/ckf-skills"},{label:"Contacts",to:"/contacts"},{label:"ICC",to:"/icc"},{label:"GRC",to:"/grc"},{label:"Logins",children:[{label:"Portal Login",to:"/login"},{label:"NBA",to:"/nba"},{label:"NAAC",to:"/naac"}]}],Cp="rgba(8, 18, 36, 0.98)",Ap="rgba(196, 92, 38, 0.85)",kp="#e8f0fe",Ht={dropdown:{position:"absolute",top:"100%",left:0,minWidth:220,background:Cp,borderRadius:"0 0 12px 12px",boxShadow:"0 12px 40px rgba(0,0,0,0.45)",listStyle:"none",padding:"8px 0",margin:0,zIndex:9999,border:"1px solid rgba(0,212,255,0.15)",borderTop:"2px solid var(--gold)"},subDropdown:{position:"absolute",top:0,left:"100%",minWidth:220,background:Cp,borderRadius:"0 12px 12px 0",boxShadow:"0 12px 40px rgba(0,0,0,0.45)",listStyle:"none",padding:"8px 0",margin:0,zIndex:9999,border:"1px solid rgba(245,197,24,0.2)",borderTop:"2px solid var(--cyan)"},mobileNested:{position:"static",boxShadow:"none",borderRadius:0,paddingLeft:18,background:"rgba(0,0,0,0.2)",listStyle:"none",margin:0,border:"none"},li:{position:"relative"},link:{display:"block",padding:"10px 20px",color:kp,textDecoration:"none",fontSize:"0.84rem",fontWeight:600,whiteSpace:"nowrap",transition:"all 0.2s ease"},trigger:{display:"flex",alignItems:"center",gap:8,padding:"10px 20px",color:kp,fontSize:"0.84rem",fontWeight:600,whiteSpace:"nowrap",cursor:"pointer",userSelect:"none"}};function vm({item:r,isMobile:s,onClose:o}){const[c,m]=v.useState(!1),p=()=>m(x=>!x),u=()=>m(!0),b=()=>m(!1);if(!r.children){const x=r.external?e.jsx("a",{href:r.to,target:r.newTab?"_blank":"_self",rel:"noreferrer",style:Ht.link,onClick:o,children:r.label}):e.jsx(fe,{to:r.to,style:Ht.link,onClick:o,children:r.label});return e.jsx("li",{style:Ht.li,onMouseEnter:y=>{y.currentTarget.style.background=Ap},onMouseLeave:y=>{y.currentTarget.style.background=""},children:x})}const h=s?Ht.mobileNested:Ht.subDropdown;return e.jsxs("li",{style:Ht.li,onMouseEnter:s?void 0:u,onMouseLeave:s?void 0:b,children:[e.jsxs("div",{style:{...Ht.trigger,background:c?Ap:""},onClick:s?p:void 0,children:[r.label,e.jsx("i",{className:"fa-solid fa-chevron-right",style:{fontSize:"0.5rem",marginLeft:"auto",transform:c?"rotate(90deg)":"none",transition:"transform 0.22s"}})]}),c&&e.jsx("ul",{style:h,children:r.children.map((x,y)=>e.jsx(vm,{item:x,isMobile:s,onClose:o},y))})]})}function yg({item:r,isMobile:s,onClose:o,isActive:c}){const[m,p]=v.useState(!1),u=Ft();v.useEffect(()=>{p(!1)},[u]);const b=()=>{s||p(!0)},h=()=>{s||p(!1)},x=()=>{s&&p(y=>!y)};return e.jsxs("li",{className:"nav-item",style:{position:"relative"},onMouseEnter:b,onMouseLeave:h,children:[e.jsxs("span",{className:`nav-trigger${c?" active":""}`,onClick:x,children:[r.label,e.jsx("i",{className:"fa-solid fa-chevron-down nav-arrow",style:{transform:m?"rotate(180deg)":"rotate(0)",transition:"transform 0.22s"}})]}),m&&e.jsx("ul",{style:s?{...Ht.dropdown,position:"static",boxShadow:"none",background:"rgba(0,0,0,0.2)",border:"none"}:Ht.dropdown,children:r.children.map((y,g)=>e.jsx(vm,{item:y,isMobile:s,onClose:()=>{p(!1),o()}},g))})]})}function vg(){const[r,s]=v.useState(!1),o=Ft();return v.useEffect(()=>{s(!1)},[o]),v.useEffect(()=>{const c=m=>{m.target.closest(".navbar")||s(!1)};return document.addEventListener("mousedown",c),()=>document.removeEventListener("mousedown",c)},[]),e.jsxs("nav",{className:"navbar angul-navbar",children:[e.jsx("div",{className:"nav-inner",children:e.jsx("ul",{className:`nav-list${r?" open":""}`,children:bg.map((c,m)=>c.children?e.jsx(yg,{item:c,isMobile:r,onClose:()=>s(!1),isActive:o.pathname.startsWith("/"+c.label.toLowerCase())},m):e.jsx("li",{className:"nav-item",children:e.jsx(fe,{to:c.to,className:`nav-link${o.pathname===c.to?" active":""}`,onClick:()=>s(!1),children:c.label})},m))})}),e.jsxs("button",{className:`hamburger${r?" open":""}`,onClick:()=>s(c=>!c),"aria-label":"Toggle menu",children:[e.jsx("span",{}),e.jsx("span",{}),e.jsx("span",{})]})]})}function jm({className:r="",opacity:s=.12}){return e.jsxs("svg",{className:`angul-pattern-svg ${r}`,"aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",style:{opacity:s},children:[e.jsxs("defs",{children:[e.jsxs("pattern",{id:"angul-diamond",width:"48",height:"48",patternUnits:"userSpaceOnUse",children:[e.jsx("path",{d:"M24 4 L44 24 L24 44 L4 24 Z",fill:"none",stroke:"currentColor",strokeWidth:"0.8"}),e.jsx("circle",{cx:"24",cy:"24",r:"3",fill:"currentColor",opacity:"0.5"}),e.jsx("path",{d:"M24 12 L36 24 L24 36 L12 24 Z",fill:"none",stroke:"currentColor",strokeWidth:"0.4",opacity:"0.6"})]}),e.jsxs("pattern",{id:"angul-weave",width:"32",height:"32",patternUnits:"userSpaceOnUse",children:[e.jsx("line",{x1:"0",y1:"16",x2:"32",y2:"16",stroke:"currentColor",strokeWidth:"0.5",opacity:"0.4"}),e.jsx("line",{x1:"16",y1:"0",x2:"16",y2:"32",stroke:"currentColor",strokeWidth:"0.5",opacity:"0.4"}),e.jsx("circle",{cx:"16",cy:"16",r:"2",fill:"currentColor",opacity:"0.35"})]})]}),e.jsx("rect",{width:"100%",height:"100%",fill:"url(#angul-diamond)"}),e.jsx("rect",{width:"100%",height:"100%",fill:"url(#angul-weave)",opacity:"0.5"})]})}function jg(){return e.jsxs("div",{className:"angul-border-strip","aria-hidden":"true",children:[e.jsx("span",{}),e.jsx("span",{}),e.jsx("span",{}),e.jsx("span",{}),e.jsx("span",{}),e.jsx("span",{}),e.jsx("span",{}),e.jsx("span",{})]})}const Sg=[{label:"Home",to:"/"},{label:"About CTC",to:"/about/ctc"},{label:"About Trust",to:"/about/trust"},{label:"Our Team",to:"/about/team"},{label:"Admission",to:"/admission"},{label:"Gallery",to:"/gallery"},{label:"Contacts",to:"/contacts"},{label:"ICC",to:"/icc"}],wg=[{label:"Academics",to:"/academics/regular"},{label:"Placement",to:"/placement/statistics"},{label:"Gymkhana",to:"/gymkhana"},{label:"Technocrat",to:"/gymkhana/technocrat"},{label:"Disha & CSR",to:"/gymkhana/disha-csr"},{label:"Sports",to:"/gymkhana/sports"},{label:"Cultural",to:"/gymkhana/cultural"},{label:"Portal Login",to:"/login"}],Cg=[{icon:"fa-brands fa-facebook-f",href:"https://www.facebook.com/creativetechnocollege.angul",label:"Facebook"},{icon:"fa-brands fa-instagram",href:"https://www.instagram.com/creative_techno_college_angul",label:"Instagram"},{icon:"fa-brands fa-youtube",href:"https://www.youtube.com/@creativetechnocollegeiangu9750",label:"YouTube"},{icon:"fa-brands fa-linkedin-in",href:"https://www.linkedin.com/in/creative-techno-college-angul/",label:"LinkedIn"},{icon:"fa-brands fa-twitter",href:"https://x.com/creative__1998?lang=en",label:"Twitter"}];function Ag(){return e.jsxs("footer",{className:"site-footer angul-footer",children:[e.jsx(jm,{className:"footer-pattern",opacity:.15}),e.jsxs("div",{className:"footer-top-bar",children:[e.jsxs("div",{className:"footer-top-odia",children:[e.jsx("span",{className:"footer-odia-script",children:"ଅନୁଗୋଳ ର ଗୌରବ"}),e.jsx("span",{className:"footer-top-divider","aria-hidden":"true"}),e.jsx("span",{className:"footer-top-en",children:"Pride of Angul · Technology Education Since 2010"})]}),e.jsxs("div",{className:"footer-top-badges",children:[e.jsxs("span",{children:[e.jsx("i",{className:"fa-solid fa-certificate"})," AICTE Approved"]}),e.jsxs("span",{children:[e.jsx("i",{className:"fa-solid fa-university"})," Utkal University"]}),e.jsxs("span",{children:[e.jsx("i",{className:"fa-solid fa-award"})," Est. 2010"]})]})]}),e.jsxs("div",{className:"footer-grid",children:[e.jsxs("div",{className:"footer-brand",children:[e.jsxs("div",{className:"footer-brand-header",children:[e.jsx("div",{className:"footer-logo-wrap",children:e.jsx("img",{src:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/LOGO FINAL.png",alt:"CTC Logo"})}),e.jsxs("div",{className:"footer-brand-titles",children:[e.jsx("h3",{className:"footer-brand-name",children:"Creative Techno College"}),e.jsx("p",{className:"footer-brand-odia",children:"କ୍ରିଏଟିଭ ଟେକ୍ନୋ କଲେଜ, ଅନୁଗୋଳ"}),e.jsx("p",{className:"footer-brand-location",children:"Angul, Odisha – 759122"})]})]}),e.jsx("p",{className:"footer-brand-desc",children:"A premier institution committed to academic excellence, innovation, and holistic development. AICTE approved & affiliated to Utkal University."}),e.jsx("div",{className:"footer-social",children:Cg.map((r,s)=>e.jsx("a",{href:r.href,target:"_blank",rel:"noreferrer","aria-label":r.label,title:r.label,children:e.jsx("i",{className:r.icon})},s))})]}),e.jsxs("div",{className:"footer-col",children:[e.jsxs("h4",{children:[e.jsx("i",{className:"fa-solid fa-link","aria-hidden":"true"})," Quick Links"]}),e.jsx("nav",{className:"footer-links","aria-label":"Quick links",children:Sg.map((r,s)=>e.jsx(fe,{to:r.to,children:r.label},s))})]}),e.jsxs("div",{className:"footer-col",children:[e.jsxs("h4",{children:[e.jsx("i",{className:"fa-solid fa-graduation-cap","aria-hidden":"true"})," College Services"]}),e.jsx("nav",{className:"footer-links","aria-label":"College services",children:wg.map((r,s)=>e.jsx(fe,{to:r.to,children:r.label},s))})]}),e.jsxs("div",{className:"footer-col footer-contact-col",children:[e.jsxs("h4",{children:[e.jsx("i",{className:"fa-solid fa-headset","aria-hidden":"true"})," Contact Us"]}),e.jsxs("div",{className:"footer-contact-list",children:[e.jsxs("div",{className:"footer-contact-item",children:[e.jsx("span",{className:"footer-contact-icon",children:e.jsx("i",{className:"fa-solid fa-location-dot"})}),e.jsx("span",{children:"Creative Techno College, Angul, Odisha – 759122"})]}),e.jsxs("div",{className:"footer-contact-item",children:[e.jsx("span",{className:"footer-contact-icon",children:e.jsx("i",{className:"fa-solid fa-phone"})}),e.jsx("span",{children:"+91 9778427170 / 9668284222"})]}),e.jsxs("div",{className:"footer-contact-item",children:[e.jsx("span",{className:"footer-contact-icon",children:e.jsx("i",{className:"fa-solid fa-envelope"})}),e.jsx("span",{children:"principal.creativecollege@gmail.com"})]}),e.jsxs("div",{className:"footer-contact-item",children:[e.jsx("span",{className:"footer-contact-icon",children:e.jsx("i",{className:"fa-solid fa-clock"})}),e.jsx("span",{children:"Mon – Sat: 9:00 AM – 5:00 PM"})]})]})]})]}),e.jsxs("div",{className:"footer-bottom",children:[e.jsxs("p",{children:["© 2010 – 2025 ",e.jsx("span",{children:"Creative Techno College"}),". All Rights Reserved."]}),e.jsxs("p",{children:["A Unit of ",e.jsx("span",{children:"Creative Knowledge Foundation"})]}),e.jsxs("p",{children:["Developed by ",e.jsx("span",{children:"Technocrat Club"})]})]})]})}function kg({isOpen:r,hasUnread:s,onClick:o}){return e.jsxs("button",{id:"ctc-chatbot-fab",className:"ctc-chatbot-fab",onClick:o,"aria-label":r?"Close chat":"Open CTC Assistant",title:r?"Close chat":"Chat with CTC Bot",children:[s&&!r&&e.jsx("span",{className:"ctc-fab-dot","aria-hidden":"true"}),e.jsx("span",{className:`ctc-fab-icon ${r?"open":""}`,"aria-hidden":"true",children:r?"✕":e.jsx("img",{src:"/CTC%20NEW%20REACT%20WEBSITE/images/chatbot/technocrat.png",alt:"Technocrat Logo",className:"fab-img"})})]})}function Ng(r){return r.split(/(\*\*[^*]+\*\*)/g).map((o,c)=>o.startsWith("**")&&o.endsWith("**")?e.jsx("strong",{children:o.slice(2,-2)},c):o)}function Tg(r){return new Intl.DateTimeFormat("en-IN",{hour:"2-digit",minute:"2-digit",hour12:!0}).format(r)}function Eg({message:r,onQuickReply:s}){const o=r.sender==="bot";return e.jsxs("div",{className:`ctc-message ${o?"bot":"user"}`,children:[o&&e.jsx("div",{className:"ctc-msg-avatar",role:"img","aria-label":"CTC Bot",children:e.jsx("img",{src:"/CTC%20NEW%20REACT%20WEBSITE/images/chatbot/technocrat.png",alt:"CTC Bot",className:"ctc-avatar-img"})}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",maxWidth:"100%"},children:[e.jsxs("div",{className:"ctc-msg-bubble",children:[e.jsx("span",{className:"ctc-msg-text",children:Ng(r.text)}),o&&r.links&&r.links.length>0&&e.jsx("div",{className:"ctc-msg-links",children:r.links.map((c,m)=>e.jsxs(fe,{to:c.path,className:"ctc-msg-link",title:`Go to ${c.label}`,children:["🔗 ",c.label]},m))})]}),e.jsx("span",{className:"ctc-msg-time",children:Tg(r.timestamp)})]})]})}const Rg=[{id:"greeting",keywords:["hello","hi","hey","good morning","good afternoon","good evening","hola","namaste","greetings"],response:{text:`👋 Hello! Welcome to **Creative Techno College, Angul**!

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

For exact fee details, please contact our admission office directly or visit the Admission page.`,quickReplies:["Apply Now","Contact Us","Admission"],links:[{label:"Admission Info",path:"/admission"},{label:"Apply Online",path:"/admission/apply"},{label:"Contact Office",path:"/contacts"}]}},{id:"courses",keywords:["course","courses","program","programs","stream","degree","bba","bca","bsc cs","bsc-cs","b.sc cs","bsc computer science","b.sc computer science","computer science","bsc ds","bsc-ds","b.sc ds","bsc data science","b.sc data science","data science","mba","master of business","mca","master of computer","ug courses","pg courses","undergraduate","postgraduate"],response:{text:`📚 **Courses Offered at CTC**

🎓 **UG Programs (4 Years):**
• **BBA** — Bachelor of Business Administration
• **BCA** — Bachelor of Computer Applications
• **B.Sc Computer Science (B.Sc CS)**
• **B.Sc Data Science (B.Sc DS)**

🏆 **PG Programs (2 Years):**
• **MBA** — Master of Business Administration
• **MCA** — Master of Computer Applications

All programs are industry-aligned with 100% placement assistance.`,quickReplies:["BBA","BCA","B.Sc CS","B.Sc DS","MBA","MCA"],links:[{label:"All Courses",path:"/academics/regular"}]}},{id:"bba",keywords:["bba","bachelor of business administration","management course","business administration"],response:{text:`📘 **BBA at CTC**

The **BBA** program helps students build knowledge in management, business, communication, and leadership skills.

It is a good choice for students interested in business, administration, and corporate careers.`,quickReplies:["Admissions","Fee Structure","Courses"],links:[{label:"Courses",path:"/academics/regular"},{label:"Admission Details",path:"/admission"}]}},{id:"bca",keywords:["bca","bachelor of computer applications","computer application"],response:{text:`💻 **BCA at CTC**

The **BCA** program focuses on computer applications, programming, software development, and IT fundamentals.

It is ideal for students who want to build a career in the software and IT field.`,quickReplies:["Admissions","Fee Structure","Courses"],links:[{label:"Courses",path:"/academics/regular"},{label:"Admission Details",path:"/admission"}]}},{id:"bsc_cs",keywords:["bsc cs","bsc-cs","b.sc cs","bsc computer science","b.sc computer science","computer science course"],response:{text:`🖥️ **B.Sc Computer Science at CTC**

The **B.Sc CS** program covers computer fundamentals, programming, databases, software concepts, and problem-solving skills.

It is a strong option for students interested in computing and technology.`,quickReplies:["Admissions","Fee Structure","Courses"],links:[{label:"Courses",path:"/academics/regular"},{label:"Admission Details",path:"/admission"}]}},{id:"bsc_ds",keywords:["bsc ds","bsc-ds","b.sc ds","bsc data science","b.sc data science","data science course"],response:{text:`📊 **B.Sc Data Science at CTC**

The **B.Sc DS** program introduces students to data analysis, statistics, computing, and modern data-driven technologies.

It is suitable for students interested in analytics, data handling, and emerging tech careers.`,quickReplies:["Admissions","Fee Structure","Courses"],links:[{label:"Courses",path:"/academics/regular"},{label:"Admission Details",path:"/admission"}]}},{id:"mba",keywords:["mba","master of business administration","master business","pg management","postgraduate management","mba admission","mba eligibility","ojee mba","cat","mat","atma"],response:{text:`🎓 **MBA at CTC — Master of Business Administration**

📅 **Duration:** 2 Years · 4 Semesters

✅ **Eligibility:**
OJEE/CAT/MAT/ATMA-2026 Rank Card Holder. Passed any Bachelor's degree with at least 50% aggregate marks (45% for reserved category candidates).

💼 **Career Paths:** Business Strategist, Marketing Manager, Finance Analyst, HR Director, Entrepreneur

Specialisations available in Finance, Marketing, HR & Operations Management.`,quickReplies:["MCA","Admissions","Courses","Contact Us"],links:[{label:"MBA Details",path:"/academics/regular"},{label:"Apply Now",path:"/admission/apply"}]}},{id:"mca",keywords:["mca","master of computer applications","master computer","pg computer","postgraduate computer","mca admission","mca eligibility","ojee mca"],response:{text:`💻 **MCA at CTC — Master of Computer Applications**

📅 **Duration:** 2 Years · 4 Semesters

✅ **Eligibility:**
OJEE 2026 Rank Card Mandatory. Passed any Bachelor's degree (B.E./B.Tech/BSC/B.Com/BA/BCA etc.) with Mathematics and at least 50% marks (45% for reserved category candidates).

🚀 **Career Paths:** Software Architect, Senior Developer, IT Consultant, Project Manager, Research Scientist`,quickReplies:["MBA","Admissions","Courses","Contact Us"],links:[{label:"MCA Details",path:"/academics/regular"},{label:"Apply Now",path:"/admission/apply"}]}},{id:"value_added",keywords:["value added","value-added","certificate","certification","extra course","additional course"],response:{text:`📘 **Value-Added Courses at CTC**

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

Visit the IQAC section for reports, minutes of meetings, and quality initiatives.`,quickReplies:["NAAC","NBA","About CTC"],links:[{label:"IQAC",path:"/iqac"}]}}],Np={text:"🤔 Hmm, I didn't quite catch that! Here are some things I can help you with:",quickReplies:["Admissions","Courses","Placements","Contact Us","About CTC","Gymkhana"],links:[]},Pg={id:"welcome",sender:"bot",text:`👋 Hello! I'm **Neo**, your virtual guide for **Creative Techno College, Angul**!

I can help you with information about admissions, courses, placements, events, and more. What would you like to know?`,quickReplies:["Admissions","Courses","Placements","Gymkhana","Contact Us"],links:[],timestamp:new Date};function Ig(r){const s=r.toLowerCase().trim();if(!s)return Np;let o=null,c=0;for(const m of Rg){let p=0;for(const u of m.keywords)s.includes(u)&&(p+=u.split(" ").length*2);p>c&&(c=p,o=m)}return o&&c>0?o.response:Np}function Bg(){return e.jsxs("div",{className:"ctc-typing-indicator",children:[e.jsx("div",{className:"ctc-msg-avatar",role:"img","aria-label":"CTC Bot",children:e.jsx("img",{src:"/CTC%20NEW%20REACT%20WEBSITE/images/chatbot/technocrat.png",alt:"CTC Bot",className:"ctc-avatar-img"})}),e.jsxs("div",{className:"ctc-typing-bubble",children:[e.jsx("span",{className:"ctc-typing-dot"}),e.jsx("span",{className:"ctc-typing-dot"}),e.jsx("span",{className:"ctc-typing-dot"})]})]})}function Mg({messages:r,onSendMessage:s,onClose:o,onMinimize:c,isClosing:m}){const[p,u]=v.useState(""),[b,h]=v.useState(!1),[x,y]=v.useState(["Admissions","Courses","Placements","Gymkhana","Contact Us"]),g=v.useRef(null),E=v.useRef(null);v.useEffect(()=>{var P;(P=g.current)==null||P.scrollIntoView({behavior:"smooth"})},[r,b]),v.useEffect(()=>{var z;const P=[...r].reverse().find(N=>N.sender==="bot");(z=P==null?void 0:P.quickReplies)!=null&&z.length&&y(P.quickReplies)},[r]),v.useEffect(()=>{setTimeout(()=>{var P;return(P=E.current)==null?void 0:P.focus()},400)},[]);const D=async P=>{const z=(P||p).trim();if(!z)return;u("");const N={id:Date.now(),sender:"user",text:z,links:[],quickReplies:[],timestamp:new Date};s(N),h(!0);const R=600+Math.random()*600;await new Promise(he=>setTimeout(he,R));const L=Ig(z),q={id:Date.now()+1,sender:"bot",text:L.text,links:L.links||[],quickReplies:L.quickReplies||[],timestamp:new Date};h(!1),s(q)},F=P=>{P.key==="Enter"&&!P.shiftKey&&(P.preventDefault(),D())};return e.jsxs("div",{className:`ctc-chat-window${m?" closing":""}`,role:"dialog","aria-label":"CTC Assistant Chat",children:[e.jsxs("div",{className:"ctc-chat-header",children:[e.jsx("div",{className:"ctc-chat-avatar",role:"img","aria-label":"CTC Bot Avatar",children:e.jsx("img",{src:"/CTC%20NEW%20REACT%20WEBSITE/images/chatbot/technocrat.png",alt:"CTC Bot",className:"ctc-avatar-img"})}),e.jsxs("div",{className:"ctc-chat-header-info",children:[e.jsx("div",{className:"ctc-chat-header-name",children:"CTC Assistant"}),e.jsxs("div",{className:"ctc-chat-header-status",children:[e.jsx("span",{className:"ctc-status-dot"}),"Online — Creative Techno College"]})]}),e.jsxs("div",{className:"ctc-chat-header-actions",children:[e.jsx("button",{id:"ctc-chat-minimize-btn",className:"ctc-header-btn",onClick:c,"aria-label":"Minimize chat",title:"Minimize",children:"−"}),e.jsx("button",{id:"ctc-chat-close-btn",className:"ctc-header-btn",onClick:o,"aria-label":"Close chat",title:"Close",children:"✕"})]})]}),e.jsxs("div",{className:"ctc-messages-container",role:"log","aria-live":"polite","aria-label":"Chat messages",children:[r.map(P=>e.jsx(Eg,{message:P},P.id)),b&&e.jsx(Bg,{}),e.jsx("div",{ref:g})]}),x.length>0&&!b&&e.jsx("div",{className:"ctc-quick-replies",role:"group","aria-label":"Quick reply options",children:x.map((P,z)=>e.jsx("button",{id:`ctc-quick-reply-${P.toLowerCase().replace(/\s+/g,"-")}`,className:"ctc-quick-reply-btn",onClick:()=>D(P),"aria-label":`Quick reply: ${P}`,children:P},z))}),e.jsxs("div",{className:"ctc-input-area",children:[e.jsx("input",{ref:E,id:"ctc-chat-input",type:"text",className:"ctc-chat-input",placeholder:"Type a message...",value:p,onChange:P=>u(P.target.value),onKeyDown:F,"aria-label":"Type your message to CTC Bot",maxLength:300,autoComplete:"off"}),e.jsx("button",{id:"ctc-chat-send-btn",className:"ctc-send-btn",onClick:()=>D(),disabled:!p.trim()||b,"aria-label":"Send message",title:"Send",children:"➤"})]})]})}function zg(){const[r,s]=v.useState(!1),[o,c]=v.useState(!1),[m,p]=v.useState(!0),[u,b]=v.useState([Pg]),h=v.useCallback(()=>{s(!0),c(!1),p(!1)},[]),x=v.useCallback(()=>{c(!0),setTimeout(()=>{s(!1),c(!1)},240)},[]),y=v.useCallback(()=>{x()},[x]),g=v.useCallback(()=>{r?x():h()},[r,h,x]),E=v.useCallback(D=>{b(F=>[...F,D])},[]);return e.jsxs(e.Fragment,{children:[r&&e.jsx(Mg,{messages:u,onSendMessage:E,onClose:x,onMinimize:y,isClosing:o}),e.jsx(kg,{isOpen:r,hasUnread:m,onClick:g})]})}function Og({children:r}){const[s,o]=v.useState(!1);return v.useEffect(()=>{const c=()=>o(window.scrollY>400);return window.addEventListener("scroll",c),()=>window.removeEventListener("scroll",c)},[]),e.jsxs(e.Fragment,{children:[e.jsx(xg,{}),e.jsxs("header",{className:"site-header angul-header",children:[e.jsx(jm,{className:"header-pattern",opacity:.15}),e.jsxs("div",{className:"header-main",children:[e.jsxs("div",{className:"header-brand",children:[e.jsx("div",{className:"header-logo-frame",children:e.jsx("img",{src:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/LOGO FINAL.png",alt:"CTC Logo"})}),e.jsxs("div",{className:"header-text",children:[e.jsx("p",{className:"header-odia-name",children:"କ୍ରିଏଟିଭ ଟେକ୍ନୋ କଲେଜ, ଅନୁଗୋଳ"}),e.jsx("h1",{children:"Creative Techno College, Angul"}),e.jsx("p",{className:"sub",children:"A Unit of Creative Knowledge Foundation"}),e.jsxs("div",{className:"badges",children:[e.jsxs("span",{className:"badge gold",children:[e.jsx("i",{className:"fa-solid fa-certificate"})," AICTE Approved"]}),e.jsxs("span",{className:"badge",children:[e.jsx("i",{className:"fa-solid fa-university"})," Utkal University"]}),e.jsxs("span",{className:"badge angul-badge",children:[e.jsx("i",{className:"fa-solid fa-location-dot"})," Angul, Odisha"]})]})]})]}),e.jsx("div",{className:"header-side-group",children:e.jsx("div",{className:"header-affiliations",children:e.jsxs("div",{className:"header-logos",children:[e.jsx("img",{src:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/aicte.png",alt:"AICTE",title:"AICTE Approved"}),e.jsx("img",{src:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/utkal.png",alt:"Utkal University",title:"Utkal University Affiliated"}),e.jsx("img",{src:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/bput.png",alt:"BPUT",title:"Creative Knowledge Foundation"}),e.jsx("img",{src:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/ckf.png",alt:"CKF",title:"Creative Knowledge Foundation"})]})})})]})]}),e.jsx(jg,{}),e.jsx(vg,{}),e.jsx("main",{children:r}),e.jsx(Ag,{}),e.jsx("button",{className:`scroll-top-btn${s?" visible":""}`,onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),"aria-label":"Scroll to top",children:e.jsx("i",{className:"fa-solid fa-chevron-up"})}),e.jsx(zg,{})]})}const Bo="Creative Techno College, Angul",Sm="https://www.creativecollege.in",Dg=`${Sm}/images/og-default.jpg`;function Ta({title:r,noSuffix:s=!1,description:o,keywords:c="",canonical:m="/",ogImage:p=Dg,ogType:u="website"}){const b=r?s?r:`${r} | ${Bo}`:Bo,h=`${Sm}${m}`;return e.jsxs(lm,{children:[e.jsx("title",{children:b}),e.jsx("meta",{name:"description",content:o}),c&&e.jsx("meta",{name:"keywords",content:c}),e.jsx("link",{rel:"canonical",href:h}),e.jsx("meta",{name:"robots",content:"index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"}),e.jsx("meta",{name:"geo.region",content:"IN-OR"}),e.jsx("meta",{name:"geo.placename",content:"Angul, Odisha, India"}),e.jsx("meta",{name:"geo.position",content:"20.788118;85.086393"}),e.jsx("meta",{name:"ICBM",content:"20.788118, 85.086393"}),e.jsx("meta",{property:"og:type",content:u}),e.jsx("meta",{property:"og:title",content:b}),e.jsx("meta",{property:"og:description",content:o}),e.jsx("meta",{property:"og:url",content:h}),e.jsx("meta",{property:"og:image",content:p}),e.jsx("meta",{property:"og:image:width",content:"1200"}),e.jsx("meta",{property:"og:image:height",content:"630"}),e.jsx("meta",{property:"og:site_name",content:Bo}),e.jsx("meta",{property:"og:locale",content:"en_IN"}),e.jsx("meta",{name:"twitter:card",content:"summary_large_image"}),e.jsx("meta",{name:"twitter:title",content:b}),e.jsx("meta",{name:"twitter:description",content:o}),e.jsx("meta",{name:"twitter:image",content:p})]})}function Wg(){const r={"@context":"https://schema.org","@graph":[{"@type":["EducationalOrganization","CollegeOrUniversity","LocalBusiness"],"@id":"https://www.creativecollege.in/#organization",name:"Creative Techno College",alternateName:["CTC Angul","Creative College Angul","CTC"],description:"Creative Techno College (CTC), Angul is an AICTE-approved, top professional and technical college in Angul, Odisha, affiliated to Utkal University. Established in 2010, CTC offers BBA, BCA, B.Sc Computer Science, B.Sc Data Science, MBA and MCA programs with 100% placement assistance.",url:"https://www.creativecollege.in",logo:"https://www.creativecollege.in/images/HOMEPAGE/LOGO FINAL.png",image:"https://www.creativecollege.in/images/HOMEPAGE/creative-campus.jpg",telephone:["+91-9778427170","+91-9668844571","+91-9668284222"],email:"principal.creativecollege@gmail.com",address:{"@type":"PostalAddress",streetAddress:"Baluakata, Saradhapur",addressLocality:"Angul",addressRegion:"Odisha",postalCode:"759143",addressCountry:"IN"},geo:{"@type":"GeoCoordinates",latitude:"20.788118",longitude:"85.086393"},openingHoursSpecification:[{"@type":"OpeningHoursSpecification",dayOfWeek:["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],opens:"09:00",closes:"17:00"}],hasMap:"https://www.google.com/maps/place/Creative+Techno+College/@20.7881186,85.0863929,17z",foundingDate:"2010",numberOfEmployees:{"@type":"QuantitativeValue",value:"50"},areaServed:["Angul","Odisha","India"],keywords:"top college angul, best college angul, technical college angul, professional college angul, BCA college angul, BBA college angul, AICTE college angul, Utkal University college angul",aggregateRating:{"@type":"AggregateRating",ratingValue:"4.5",reviewCount:"120",bestRating:"5"},sameAs:["https://www.facebook.com/creativetechnocollege","https://www.instagram.com/creativetechnocollege"]},{"@type":"FAQPage",mainEntity:[{"@type":"Question",name:"Which is the best college in Angul?",acceptedAnswer:{"@type":"Answer",text:"Creative Techno College (CTC), Angul is widely regarded as one of the best and top colleges in Angul, Odisha. AICTE-approved and affiliated to Utkal University, CTC has been providing quality technical and professional education since 2010 with 95% placement rate."}},{"@type":"Question",name:"Is Creative Techno College approved by AICTE?",acceptedAnswer:{"@type":"Answer",text:"Yes, Creative Techno College (CTC) Angul is approved by AICTE (All India Council for Technical Education) and permanently affiliated to Utkal University, recognized by the Government of Odisha, Dept. of Higher Education."}},{"@type":"Question",name:"What courses are offered at Creative Techno College, Angul?",acceptedAnswer:{"@type":"Answer",text:"CTC Angul offers UG programs: BBA (Bachelor of Business Administration) with 120 seats, BCA (Bachelor of Computer Applications) with 120 seats, B.Sc Computer Science (Honours) with 128 seats, and B.Sc Data Science with 30 seats. PG programs: MBA (Master of Business Administration) with 60 seats and MCA (Master of Computer Applications) with 60 seats."}},{"@type":"Question",name:"What is the placement record of CTC Angul?",acceptedAnswer:{"@type":"Answer",text:"Creative Techno College Angul has a 95% placement rate with over 1500+ students placed in top companies like Wipro, TCS, Infosys, HCL, Capgemini, IBM, Cognizant, Accenture, and more. The highest package offered is ₹4.5 LPA."}},{"@type":"Question",name:"How to apply for admission in Creative Techno College Angul?",acceptedAnswer:{"@type":"Answer",text:"Admission to CTC Angul requires 10+2 pass with minimum 45% marks. You can apply online through our website at creativecollege.in or visit our campus at Baluakata, Saradhapur, Angul. Call us at +91-9778427170 for more details."}},{"@type":"Question",name:"Is Creative Techno College a top technical college in Angul?",acceptedAnswer:{"@type":"Answer",text:"Yes, Creative Techno College is the top technical and professional college in Angul, Odisha. It offers computer science and IT programs like BCA, B.Sc CS, and B.Sc Data Science, making it the best choice for technical education in Angul district."}}]},{"@type":"WebSite","@id":"https://www.creativecollege.in/#website",url:"https://www.creativecollege.in",name:"Creative Techno College, Angul",description:"Official website of Creative Techno College – Top AICTE-approved college in Angul, Odisha",publisher:{"@id":"https://www.creativecollege.in/#organization"},potentialAction:{"@type":"SearchAction",target:{"@type":"EntryPoint",urlTemplate:"https://www.creativecollege.in/?s={search_term_string}"},"query-input":"required name=search_term_string"}}]};return e.jsx(lm,{children:e.jsx("script",{type:"application/ld+json",children:JSON.stringify(r,null,2)})})}const Qn=[{img:"/CTC%20NEW%20REACT%20WEBSITE/images/HOMEPAGE/MBA_MCA.jpeg",caption:"MBA & MCA Admissions Open 2026–27",sub:"Master of Business Administration • Master of Computer Applications"},{img:"/CTC%20NEW%20REACT%20WEBSITE/images/HOMEPAGE/1.jpg",caption:"Admissions Open 2026–27",sub:"BBA • BCA • B.Sc CS • B.Sc Data Science • MBA • MCA"},{img:"/CTC%20NEW%20REACT%20WEBSITE/images/HOMEPAGE/2.jpg",caption:"100% Placement Assistance",sub:"Top Recruiters • Industry-Ready Programs"},{img:"/CTC%20NEW%20REACT%20WEBSITE/images/HOMEPAGE/4.jpg",caption:"World-Class Campus & Library",sub:"Modern Infrastructure • Expert Faculty"}];function Lg({onClose:r}){const[s,o]=v.useState(0),c=nr(),m=v.useRef(null);v.useEffect(()=>(m.current=setInterval(()=>o(u=>(u+1)%Qn.length),3500),()=>clearInterval(m.current)),[]);const p=u=>o((u+Qn.length)%Qn.length);return e.jsx("div",{className:"adm-banner-overlay",onClick:r,children:e.jsxs("div",{className:"adm-banner-box",onClick:u=>u.stopPropagation(),children:[e.jsx("button",{className:"adm-banner-close",onClick:r,"aria-label":"Close banner",children:e.jsx("i",{className:"fa-solid fa-xmark"})}),e.jsxs("div",{className:"adm-banner-slider",children:[Qn.map((u,b)=>e.jsxs("div",{className:`adm-banner-slide ${b===s?"active":""}`,children:[e.jsx("img",{src:u.img,alt:u.caption,className:"adm-banner-slide-img"}),e.jsx("div",{className:"adm-banner-slide-overlay"}),e.jsxs("div",{className:"adm-banner-slide-text",children:[e.jsxs("p",{className:"adm-banner-eyebrow",children:[e.jsx("i",{className:"fa-solid fa-graduation-cap"})," Creative Techno College"]}),e.jsx("h2",{children:u.caption}),e.jsx("p",{children:u.sub})]})]},b)),e.jsx("div",{className:"adm-banner-dots",children:Qn.map((u,b)=>e.jsx("button",{className:`adm-banner-dot ${b===s?"active":""}`,onClick:()=>p(b)},b))}),e.jsx("button",{className:"adm-banner-arrow left",onClick:()=>p(s-1),children:e.jsx("i",{className:"fa-solid fa-chevron-left"})}),e.jsx("button",{className:"adm-banner-arrow right",onClick:()=>p(s+1),children:e.jsx("i",{className:"fa-solid fa-chevron-right"})})]}),e.jsxs("div",{className:"adm-banner-footer",children:[e.jsxs("div",{className:"adm-banner-footer-text",children:[e.jsx("span",{className:"adm-banner-tag",children:"🎓 Admission 2026–27 Open Now!"}),e.jsx("p",{children:"Seats are filling fast. Secure your future today."})]}),e.jsxs("button",{className:"adm-banner-apply-btn",onClick:()=>{r(),c("/admission/apply")},children:[e.jsx("i",{className:"fa-solid fa-paper-plane"})," Apply Now"]})]})]})})}function Hg(){v.useEffect(()=>{const r=document.querySelectorAll(".reveal, .reveal-left, .reveal-right"),s=new IntersectionObserver(o=>o.forEach(c=>{c.isIntersecting&&c.target.classList.add("visible")}),{threshold:.12});return r.forEach(o=>s.observe(o)),()=>s.disconnect()},[])}const gi=[{img:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/creative-campus.jpg",eyebrow:"Welcome to Excellence",title:"Shaping Leaders of Tomorrow",sub:"AICTE Approved • Utkal University Affiliated • Est. 2010"},{img:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/MBA_MCA.jpeg",eyebrow:"MBA & MCA Admissions Open 2026–27",title:"Advance Your Career with PG Programs",sub:"Master of Business Administration • Master of Computer Applications"},{img:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/7.jpg",eyebrow:"Beautiful Campus",title:"Green & Student-Friendly Environment",sub:"Sprawling campus of knowledge and growth"},{img:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/4.jpg",eyebrow:"Modern Library",title:"Resources to Empower Learning",sub:"Thousands of books, journals & digital resources"},{img:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/1.jpg",eyebrow:"World-Class Education",title:"Where Innovation Meets Tradition",sub:"BBA • BCA • B.Sc (CS) • B.Sc (Data Science) • MBA • MCA"},{img:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/2.jpg",eyebrow:"100% Placement Assistance",title:"Your Future Starts Here",sub:"1500+ Students Placed • 100+ Recruiting Companies"},{img:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/5.jpg",eyebrow:"Vibrant Campus Life",title:"Learn. Grow. Excel.",sub:"Sports • Cultural • Technocrat • Disha & CSR"},{img:"/CTC%20NEW%20REACT%20WEBSITE/images/CULTURAL/saraswati_puja/sp1.jpeg",eyebrow:"Saraswati Puja Celebrations",title:"Honouring the Goddess of Knowledge",sub:"Faith • Culture • Togetherness"},{img:"/CTC%20NEW%20REACT%20WEBSITE/images/CULTURAL/funfest/f1.jpeg",eyebrow:"Fun Fest",title:"Where Talent Takes the Stage",sub:"Energy • Creativity • Unforgettable Moments"},{img:"/CTC%20NEW%20REACT%20WEBSITE/images/CULTURAL/holi/h1.jpeg",eyebrow:"Holi Celebrations",title:"A Festival of Colours & Joy",sub:"Vibrant • Festive • Full of Life"}];function Fg(){const[r,s]=v.useState(0),o=v.useRef(null),c=m=>s((m+gi.length)%gi.length);return v.useEffect(()=>(o.current=setInterval(()=>c(r+1),5e3),()=>clearInterval(o.current)),[r]),e.jsxs("section",{className:"hero-section",children:[e.jsx("div",{className:"hero-slides-wrap",style:{transform:`translateX(-${r*100}%)`},children:gi.map((m,p)=>e.jsxs("div",{className:"hero-slide",children:[e.jsx("img",{src:m.img,alt:m.title,loading:p===0?"eager":"lazy"}),e.jsx("div",{className:"hero-overlay"}),e.jsxs("div",{className:"hero-content",children:[e.jsx("p",{className:"hero-eyebrow",children:m.eyebrow}),e.jsx("h1",{className:"hero-title",dangerouslySetInnerHTML:{__html:m.title.replace(/([A-Z][a-z]+)/,"<span>$1</span>")}}),e.jsx("p",{className:"hero-sub",children:m.sub}),e.jsxs("div",{className:"hero-actions",children:[e.jsxs(fe,{to:"/admission",className:"btn-primary",children:[e.jsx("i",{className:"fa-solid fa-graduation-cap"})," Apply Now"]}),e.jsxs(fe,{to:"/about/ctc",className:"btn-outline",children:["Explore More ",e.jsx("i",{className:"fa-solid fa-arrow-right"})]})]})]})]},p))}),e.jsx("button",{className:"hero-arrow left",onClick:()=>c(r-1),"aria-label":"Previous",children:e.jsx("i",{className:"fa-solid fa-chevron-left"})}),e.jsx("button",{className:"hero-arrow right",onClick:()=>c(r+1),"aria-label":"Next",children:e.jsx("i",{className:"fa-solid fa-chevron-right"})}),e.jsx("div",{className:"hero-dots",children:gi.map((m,p)=>e.jsx("div",{className:`hero-dot${p===r?" active":""}`,onClick:()=>c(p)},p))})]})}const Mo=[{end:5e3,suffix:"+",label:"Alumni"},{end:500,suffix:"+",label:"Students"},{end:200,suffix:"+",label:"Academic Events"},{end:1500,suffix:"+",label:"Placement"},{end:4,suffix:"",label:"Clubs"}];function Ug(){const[r,s]=v.useState(Mo.map(()=>0)),o=v.useRef(null),c=v.useRef(!1);return v.useEffect(()=>{const m=new IntersectionObserver(([p])=>{p.isIntersecting&&!c.current&&(c.current=!0,Mo.forEach((u,b)=>{const x=u.end/112.5;let y=0;const g=setInterval(()=>{y=Math.min(y+x,u.end),s(E=>{const D=[...E];return D[b]=Math.floor(y),D}),y>=u.end&&clearInterval(g)},16)}))},{threshold:.3});return o.current&&m.observe(o.current),()=>m.disconnect()},[]),e.jsxs("section",{className:"stats-section",ref:o,children:[e.jsxs("div",{style:{textAlign:"center",marginBottom:"16px",position:"relative"},children:[e.jsx("span",{className:"section-label",style:{color:"rgba(0,212,255,0.8)"},children:"By The Numbers"}),e.jsxs("h2",{className:"section-title",style:{color:"#fff"},children:["Our ",e.jsx("span",{style:{color:"var(--gold)"},children:"Impact"})]})]}),e.jsx("div",{className:"stats-grid",children:Mo.map((m,p)=>e.jsxs("div",{className:"stat-card reveal",children:[e.jsxs("div",{className:"stat-number",children:[r[p],m.suffix]}),e.jsx("div",{className:"stat-label",children:m.label})]},p))})]})}const Tp=[{abbr:"BBA",full:"Bachelor of Business Administration",seats:120,icon:"💼",desc:"Management, Marketing, Finance & Entrepreneurship",type:"UG · 4 Years"},{abbr:"BCA",full:"Bachelor of Computer Applications",seats:120,icon:"💻",desc:"Programming, Databases & Software Development",type:"UG · 4 Years"},{abbr:"B.Sc (CS)",full:"Bachelor of Science in Computer Science",seats:128,icon:"🖥️",desc:"Algorithms, Theory & Practical Programming",type:"UG · 4 Years"},{abbr:"B.Sc (DS)",full:"Bachelor of Science in Data Science",seats:30,icon:"📊",desc:"Machine Learning, Statistics & Data Analytics",type:"UG · 4 Years"},{abbr:"MBA",full:"Master of Business Administration",seats:60,icon:"🏆",desc:"Finance, Marketing, HR & Operations Management",type:"PG · 2 Years"},{abbr:"MCA",full:"Master of Computer Applications",seats:60,icon:"🚀",desc:"Software Engineering, AI/ML & Cloud Technologies",type:"PG · 2 Years"}],_g=[{name:"Mr. Gyanendra Kumar Sahu",role:"Chairman",img:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/Director Sir.jpg"},{name:"Er. Manoj Kumar Das",role:"Dean Academic",img:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/Dean Sir.jpg"},{name:"Mr. Krishnasis Mishra",role:"Principal",img:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/Principal Sir.jpg"},{name:"Mr. Bhabani Shankar Sahoo",role:"Vice Principal",img:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/Bhabani Sir.jpg"},{name:"Mr. Subhrajyoti Behera",role:"Management HOD",img:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/Subhrajyoti Sir.jpg"}],$g=[{name:"Wipro",img:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/wipro.png"},{name:"TCS",img:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/tcs.jpg"},{name:"LTI Mindtree",img:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/lti.png"},{name:"Infosys",img:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/infosys.png"},{name:"HCL",img:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/hcl.png"},{name:"Capgemini",img:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/capgemini.png"},{name:"Cisco",img:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/cisco.png"},{name:"Tech Mahindra",img:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/tech.jpg"},{name:"IBM",img:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/ibm.jpeg.jpg"},{name:"Cognizant",img:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/cognizant.png"},{name:"Accenture",img:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/acenture.png"},{name:"Deloitte",img:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/DELOITTE.jpeg"},{name:"Airtel",img:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/airtel.png"},{name:"Corpnizer",img:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/corpnizers.jpeg"},{name:"DXC",img:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/dxc.png"},{name:"Zoho",img:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/zoho.jpg"}],Gg=[{q:"Which is the best college in Angul?",a:"Creative Techno College (CTC), Angul is the top-ranked professional and technical college in Angul, Odisha. AICTE-approved, affiliated to Utkal University, and established in 2010, CTC has consistently delivered quality education with a 95% placement rate."},{q:"Is CTC Angul approved by AICTE?",a:"Yes! CTC is approved by AICTE (All India Council for Technical Education) and permanently affiliated to Utkal University. It is also recognized by the Government of Odisha, Department of Higher Education."},{q:"What courses are offered at Creative Techno College, Angul?",a:"CTC offers UG programs: BBA (Business Administration) – 120 seats, BCA (Computer Applications) – 120 seats, B.Sc Computer Science (Honours) – 128 seats, B.Sc Data Science – 30 seats. PG programs: MBA (Master of Business Administration) – 60 seats, MCA (Master of Computer Applications) – 60 seats."},{q:"What is the placement record of Creative Techno College?",a:"1500+ students have been successfully placed in top companies like Wipro, TCS, Infosys, HCL, Capgemini, IBM, Cognizant, Accenture, and more. The highest package is ₹4.5 LPA with a 95% overall placement rate."},{q:"How to apply for admission in CTC Angul 2026-27?",a:"Eligibility: 10+2 pass with minimum 45% marks from any recognised board. Apply online at creativecollege.in or visit the campus at Baluakata, Saradhapur, Angul. Call +91-9778427170 for help."},{q:"Does CTC Angul have hostel facilities?",a:"Yes, CTC provides separate, secure hostel facilities for boys and girls with 24/7 security, comfortable rooms, and all essential amenities at affordable rates."}];function Yg(){const[r,s]=v.useState(null);return e.jsxs("section",{className:"faq-section",children:[e.jsxs("div",{style:{textAlign:"center",marginBottom:"48px"},children:[e.jsx("span",{className:"section-label",children:"Got Questions?"}),e.jsxs("h2",{className:"section-title",children:["Frequently Asked ",e.jsx("span",{children:"Questions"})]}),e.jsx("p",{className:"section-subtitle",style:{margin:"0 auto"},children:"Everything you need to know about Creative Techno College, Angul."})]}),e.jsx("div",{className:"faq-list",children:Gg.map((o,c)=>e.jsxs("div",{className:`faq-item${r===c?" faq-open":""}`,children:[e.jsxs("button",{id:`faq-q-${c}`,className:"faq-question",onClick:()=>s(r===c?null:c),"aria-expanded":r===c,"aria-controls":`faq-a-${c}`,children:[e.jsx("span",{children:o.q}),e.jsx("i",{className:`fa-solid fa-chevron-down faq-icon${r===c?" rotated":""}`})]}),e.jsx("div",{id:`faq-a-${c}`,className:"faq-answer",role:"region","aria-labelledby":`faq-q-${c}`,children:e.jsx("p",{children:o.a})})]},c))})]})}function Jg(){Hg();const[r,s]=v.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsx(Ta,{title:"Creative Techno College, Angul| Top College in Angul & Odisha | BBA, BCA, MBA & Data Science | CTC",noSuffix:!0,description:"Welcome to Creative Techno College, the best residential college in Angul, Odisha. Offering top AI, Data Science, BCA, BBA, MBA & MCA courses with excellent placement.",keywords:"top college in angul, best college angul, best residential college in odisha, top technical college angul, top professional college angul, BCA college angul, BBA college angul, AICTE college angul, creative techno college angul, college in angul odisha",canonical:"/"}),e.jsx(Wg,{}),r&&e.jsx(Lg,{onClose:()=>s(!1)}),e.jsxs(fe,{to:"/admission/apply",className:"adm-float-btn",children:[e.jsx("i",{className:"fa-solid fa-graduation-cap"}),e.jsx("span",{children:"Admission Open – Apply Now"}),e.jsx("span",{className:"adm-float-ping"})]}),e.jsx(Fg,{}),e.jsxs("section",{className:"home-about",children:[e.jsxs("div",{className:"home-about-text reveal-left",children:[e.jsx("span",{className:"section-label",children:"Welcome to Creative Techno College"}),e.jsxs("h2",{className:"section-title",children:["The ",e.jsx("span",{children:"Best College in Angul, Odisha"})]}),e.jsxs("p",{children:["Looking for the ",e.jsx("strong",{children:"best college in Angul"})," to kickstart your career? At Creative Techno College (CTC), we pride ourselves on being the ",e.jsx("strong",{children:"top educational institution in Angul"})," and a premier destination for students across the state. Whether you are an aspiring software developer or a future business leader, CTC is recognized as the ",e.jsx("strong",{children:"best Bsc.CS(H), BCA, BBA and BSc.DS(H) college in Odisha"}),"."]}),e.jsxs("p",{children:["As the demand for modern tech skills skyrockets, we offer the ",e.jsx("strong",{children:"top Data Science course in Odisha"})," and the ",e.jsx("strong",{children:"top AI course in Angul"}),", providing students with career-oriented learning and hands-on skill development. Beyond undergraduate excellence, CTC stands as the ",e.jsx("strong",{children:"top MBA and MCA College in Angul"}),", bridging the gap between academic theory and corporate expectations."]}),e.jsxs("p",{children:["Experience modern education within the ",e.jsx("strong",{children:"best residential college in Odisha"}),", featuring state-of-the-art infrastructure, secure hostel facilities, and a vibrant campus life designed for your success. We provide a world-class education with ",e.jsx("strong",{children:"95% placement assistance"})," and partnerships with 100+ top recruiting companies."]}),e.jsx("div",{style:{display:"flex",gap:"16px",flexWrap:"wrap",marginTop:"28px"},children:e.jsxs(fe,{to:"/about/ctc",className:"btn-primary",children:[e.jsx("i",{className:"fa-solid fa-circle-info"})," Learn More"]})})]}),e.jsxs("div",{className:"director-spotlight reveal-right",children:[e.jsx("img",{className:"director-photo",src:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/Director Sir.jpg",alt:"Director"}),e.jsx("h3",{children:"Mr. Gyanendra Kumar Sahu"}),e.jsx("p",{className:"role",children:"Director"}),e.jsx("blockquote",{children:'"We strongly support inter disciplinary education and training for the benefit of student, industry and society. Our vision is to create future leaders who manage, create powerful organization in the emerging corporate landscape. Our management and IT development programs are exclusively industry focused so as to equip the students with latest techniques in the ever dynamic context of domestic and international business environment. It is an opportunity for you to avail the best course with best college in your locality. Come, be a part of our Creative family. Enjoy flexible and unlimited training programs."'})]})]}),e.jsxs("section",{className:"mv-section",children:[e.jsxs("div",{style:{textAlign:"center",position:"relative"},children:[e.jsx("span",{className:"section-label",children:"Our Foundation"}),e.jsxs("h2",{className:"section-title",style:{color:"#fff"},children:["Mission, Vision & ",e.jsx("span",{style:{color:"var(--gold)"},children:"Values"})]})]}),e.jsx("div",{className:"mv-grid",children:[{icon:e.jsx("i",{className:"fa-solid fa-bullseye"}),title:"Our Mission",content:"To provide quality education that empowers students with knowledge, skills, and values to excel in their careers and contribute positively to society.",type:"text"},{icon:e.jsx("i",{className:"fa-solid fa-eye"}),title:"Our Vision",content:"To be a globally recognized institution that nurtures innovative thinkers, ethical leaders, and responsible citizens.",type:"text"},{icon:e.jsx("i",{className:"fa-solid fa-gem"}),title:"Core Values",items:["Excellence in Education","Innovation & Creativity","Integrity & Ethics","Inclusivity & Diversity","Social Responsibility"],type:"list"},{icon:e.jsx("i",{className:"fa-solid fa-shield-halved"}),title:"Quality Policy",content:"We are committed to continuous improvement in academic standards, student outcomes, and institutional effectiveness through systematic planning and evaluation.",type:"text"}].map((o,c)=>e.jsxs("div",{className:"mv-card reveal",style:{transitionDelay:`${c*.1}s`},children:[e.jsx("div",{className:"mv-card-icon",children:o.icon}),e.jsx("h3",{children:o.title}),o.type==="text"?e.jsx("p",{children:o.content}):e.jsx("ul",{children:o.items.map((m,p)=>e.jsx("li",{children:m},p))})]},c))})]}),e.jsxs("section",{className:"courses-section",children:[e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx("span",{className:"section-label",children:"Academic Programs"}),e.jsxs("h2",{className:"section-title",children:["Courses ",e.jsx("span",{children:"Offered"})]}),e.jsx("p",{className:"section-subtitle",style:{margin:"0 auto"},children:"Industry-aligned programs designed to prepare you for the careers of tomorrow."})]}),e.jsx("div",{style:{textAlign:"center",marginTop:"16px",marginBottom:"24px"},children:e.jsx("h3",{style:{fontFamily:"var(--font-head)",fontSize:"1.5rem",fontWeight:800,color:"var(--navy)"},children:"Undergraduate (UG) Programs"})}),e.jsx("div",{className:"courses-grid",style:{marginBottom:"40px"},children:Tp.filter(o=>!["MBA","MCA"].includes(o.abbr)).map((o,c)=>e.jsxs("div",{className:"course-card reveal",style:{transitionDelay:`${c*.1}s`},children:[e.jsxs("div",{className:"course-abbr-banner",children:[e.jsx("h3",{children:o.abbr}),e.jsx("span",{className:"course-type-tag",children:o.type||"4-Year Degree"})]}),e.jsxs("div",{className:"course-body",children:[e.jsx("p",{className:"course-full",children:o.full}),e.jsx("p",{className:"course-desc",children:o.desc}),e.jsxs("div",{className:"course-seats-badge",children:[e.jsx("i",{className:"fa-solid fa-users"})," ",o.seats," Seats"]}),e.jsxs(fe,{to:"/admission",style:{display:"inline-flex",alignItems:"center",gap:"6px",marginTop:"4px",color:"var(--blue-light)",fontWeight:700,fontSize:"0.85rem",fontFamily:"var(--font-head)"},children:["Apply Now ",e.jsx("i",{className:"fa-solid fa-arrow-right",style:{fontSize:"0.72rem"}})]})]})]},c))}),e.jsx("div",{style:{textAlign:"center",marginBottom:"24px"},children:e.jsx("h3",{style:{fontFamily:"var(--font-head)",fontSize:"1.5rem",fontWeight:800,color:"var(--navy)"},children:"Postgraduate (PG) Programs"})}),e.jsx("div",{className:"courses-grid",children:Tp.filter(o=>["MBA","MCA"].includes(o.abbr)).map((o,c)=>e.jsxs("div",{className:"course-card reveal",style:{transitionDelay:`${c*.1}s`},children:[e.jsxs("div",{className:"course-abbr-banner",children:[e.jsx("h3",{children:o.abbr}),e.jsx("span",{className:"course-type-tag",children:o.type||"2-Year Degree"})]}),e.jsxs("div",{className:"course-body",children:[e.jsx("p",{className:"course-full",children:o.full}),e.jsx("p",{className:"course-desc",children:o.desc}),e.jsxs("div",{className:"course-seats-badge",children:[e.jsx("i",{className:"fa-solid fa-users"})," ",o.seats," Seats"]}),e.jsxs(fe,{to:"/admission",style:{display:"inline-flex",alignItems:"center",gap:"6px",marginTop:"4px",color:"var(--blue-light)",fontWeight:700,fontSize:"0.85rem",fontFamily:"var(--font-head)"},children:["Apply Now ",e.jsx("i",{className:"fa-solid fa-arrow-right",style:{fontSize:"0.72rem"}})]})]})]},c))})]}),e.jsx(Ug,{}),e.jsxs("section",{className:"admin-section",children:[e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx("span",{className:"section-label",children:"Leadership"}),e.jsxs("h2",{className:"section-title",children:["Our ",e.jsx("span",{children:"Administration"})]}),e.jsx("p",{className:"section-subtitle",style:{margin:"0 auto"},children:"Guided by experienced educators and visionary leaders committed to excellence."})]}),e.jsx("div",{className:"admin-grid",children:_g.map((o,c)=>e.jsxs("div",{className:"admin-card reveal",style:{transitionDelay:`${c*.1}s`},children:[e.jsxs("div",{className:"admin-img-wrap",children:[e.jsx("img",{src:o.img,alt:o.name}),e.jsx("div",{className:"admin-img-overlay"})]}),e.jsxs("div",{className:"admin-info",children:[e.jsx("h4",{children:o.name}),e.jsx("span",{children:o.role})]})]},c))})]}),e.jsxs("section",{className:"recruiters-section",children:[e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx("span",{className:"section-label",children:"Industry Partners"}),e.jsxs("h2",{className:"section-title",children:["Our Top ",e.jsx("span",{children:"Recruiters"})]}),e.jsx("p",{className:"section-subtitle",style:{margin:"0 auto"},children:"Leading companies trust CTC graduates for their talent, skills, and work ethic."})]}),e.jsx("div",{className:"recruiters-grid",children:$g.map((o,c)=>e.jsxs("div",{className:"recruiter-logo reveal",style:{transitionDelay:`${c*.05}s`},children:[e.jsx("img",{src:o.img,alt:o.name}),e.jsx("span",{children:o.name})]},c))})]}),e.jsx(Yg,{}),e.jsxs("section",{className:"maps-section",children:[e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx("span",{className:"section-label",children:"Find Us"}),e.jsxs("h2",{className:"section-title",children:["Our ",e.jsx("span",{children:"Locations"})]})]}),e.jsx("div",{className:"maps-grid",children:[{title:"Creative Techno College, Angul",icon:"fa-solid fa-building-columns",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3730.0783340113476!2d85.08639287509837!3d20.788118580801687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a18a5b9850815f5%3A0xa7f8a31afad931b7!2sCreative%20Techno%20College!5e0!3m2!1sen!2sin!4v1758728395827!5m2!1sen!2sin",link:"https://www.google.com/maps/place/Creative+Techno+College/@20.7881186,85.0863929,17z"},{title:"Creative Knowledge Foundation Office",icon:"fa-solid fa-house",src:"https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3728.8844998564623!2d85.10675499999999!3d20.836369999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1m1!2zMjDCsDUwJzEwLjkiTiA4NcKwMDYnMjQuMyJF!5e0!3m2!1sen!2sin!4v1759905943185!5m2!1sen!2sin",link:"https://www.google.com/maps/place/Creative+CT+Office/@20.750000,85.000000,17z"}].map((o,c)=>e.jsxs("div",{className:"map-card reveal",style:{transitionDelay:`${c*.15}s`},children:[e.jsxs("div",{className:"map-card-header",children:[e.jsx("i",{className:o.icon}),e.jsx("h3",{children:o.title})]}),e.jsx("iframe",{src:o.src,title:o.title,allowFullScreen:!0,loading:"lazy"}),e.jsx("div",{className:"map-card-footer",children:e.jsxs("a",{href:o.link,target:"_blank",rel:"noreferrer",className:"btn-primary",style:{fontSize:"0.82rem",padding:"8px 20px"},children:[e.jsx("i",{className:"fa-solid fa-map-location-dot"})," Open in Maps"]})})]},c))})]})]})}function Vg(){v.useEffect(()=>{const r=document.querySelectorAll(".reveal, .reveal-left, .reveal-right"),s=new IntersectionObserver(o=>o.forEach(c=>{c.isIntersecting&&c.target.classList.add("visible")}),{threshold:.1});return r.forEach(o=>s.observe(o)),()=>s.disconnect()},[])}const Kg=[{year:"1995",label:"Founded",desc:"Journey began with computer education as a franchise of APTECH Computer Education."},{year:"2010",label:"CTC Established",desc:"Creative Techno College officially launched, offering BBA & BCA under Utkal University."},{year:"2017",label:"1st Permanent Approved",desc:"Became the 1st Permanently Approved College of Angul in Central Odisha."},{year:"2024",label:"AICTE Approved",desc:"Received AICTE approval, marking adherence to the highest national educational standards."}],qg=[{icon:"fa-solid fa-graduation-cap",title:"Educational Excellence",desc:"Committed to the highest standards of academic quality and student achievement across all programs."},{icon:"fa-solid fa-hands-helping",title:"Community Service",desc:"Dedicated to serving the region through education, outreach, and deep social responsibility."},{icon:"fa-solid fa-lightbulb",title:"Innovation",desc:"Fostering a culture of creativity, critical thinking, and continuous improvement in everything we do."},{icon:"fa-solid fa-seedling",title:"Holistic Development",desc:"Nurturing not just academic excellence but also character, values, and leadership in every student."}],Qg=["Spoken English","Tally ERP","Web Development","Digital Marketing","Data Analytics","Soft Skills"];function Xg(){return Vg(),e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"ckf-hero",style:{textAlign:"left"},children:e.jsxs("div",{style:{maxWidth:"1100px",margin:"0 auto",display:"flex",alignItems:"center",gap:"48px",flexWrap:"wrap"},children:[e.jsxs("div",{style:{flex:"1 1 320px"},children:[e.jsx("span",{className:"section-label",style:{color:"var(--cyan)"},children:"Our Foundation"}),e.jsxs("h1",{className:"section-title",style:{color:"#fff",margin:"12px 0 16px",textAlign:"left"},children:["About ",e.jsx("span",{style:{color:"var(--gold)"},children:"Creative Knowledge Foundation"})]}),e.jsx("p",{style:{color:"rgba(255,255,255,0.65)",lineHeight:1.8,maxWidth:"480px"},children:"The trust behind Creative Techno College, Angul — empowering education since 1995"})]}),e.jsx("div",{className:"reveal-right",style:{flex:"0 0 auto"},children:e.jsx("div",{style:{background:"#fff",padding:"20px",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 10px 30px rgba(0,0,0,0.15)",width:"180px",height:"180px"},children:e.jsx("img",{src:"/CTC NEW REACT WEBSITE/images/AboutTrust/aboutckfimg1.png",alt:"CKF Logo",style:{height:"auto",width:"100%",maxWidth:"120px",opacity:1}})})})]})}),e.jsx("section",{style:{background:"var(--page-bg)",padding:"60px 5%"},children:e.jsx("div",{style:{maxWidth:"1100px",margin:"0 auto",display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"20px"},children:Kg.map((r,s)=>e.jsxs("div",{className:"milestone-card reveal",style:{transitionDelay:`${s*.1}s`},children:[e.jsx("div",{className:"milestone-year",children:r.year}),e.jsx("h3",{style:{fontFamily:"var(--font-head)",fontWeight:800,color:"var(--navy)",marginBottom:"10px",fontSize:"0.93rem"},children:r.label}),e.jsx("p",{children:r.desc})]},s))})}),e.jsx("section",{style:{background:"#fff"},children:e.jsxs("div",{className:"ckf-history",children:[e.jsxs("div",{style:{textAlign:"center",marginBottom:"40px"},children:[e.jsx("span",{className:"section-label",children:"Our Story"}),e.jsxs("h2",{className:"section-title",children:["The ",e.jsx("span",{children:"CKF Journey"})]})]}),e.jsx("img",{src:"/CTC NEW REACT WEBSITE/images/AboutTrust/aboutckfimg2.png",alt:"CKF Timeline",className:"ckf-timeline-img reveal"}),e.jsxs("div",{className:"ckf-history-text reveal",children:[e.jsx("p",{children:"CREATIVE KNOWLEDGE FOUNDATION with Regd. Office at Tamrit Colony, Angul, Odisha is running CREATIVE TECHNO COLLEGE since 2010 situated at Baluakata, Sharadhapur, Angul."}),e.jsx("p",{children:"However the journey was started at Institutional level in year 1995 with computer education as a franchise of APTECH COMPUTER EDUCATION (APTECH Ltd.) upto 2007 and run distance education BBA, BCA, MBA and MCA courses between 2001–2015."}),e.jsxs("p",{children:["Since 2010 CREATIVE TECHNO COLLEGE is offering BBA and BCA undergraduate courses in computer application and management recognized by Government of Odisha, Department of Higher Education and Affiliated to Utkal University. In 2018 another course B.Sc. in Computer Science has been added under this umbrella. The founder of the college Mr. Gyanendra Sahu has dedicatedly worked hard to make the college the ",e.jsx("strong",{children:"1st Permanent Approved College of Angul"})," in Central Odisha in 2017."]}),e.jsxs("p",{children:["In 2019 our college has been awarded as ",e.jsx("strong",{children:"Best Professional College by Odisha Education Award 2019"}),". We received AICTE approval in 2024, which ensures the college is adhering to strict standards in terms of infrastructure, faculty, teaching methodology, and overall educational excellence."]}),e.jsx("p",{children:"In Skill Development area of IT education and training: in 2009 we trained 300 trainees in association with OCAC; in 2011–12 we trained 150 trainees in association with DTET Odisha; in 2014 we worked with OKCL (Odisha Knowledge Corporation Ltd.); and in 2018 we trained 120 trainees under NALCO CSR fund in association with AISECT Bhopal."})]})]})}),e.jsxs("section",{style:{background:"var(--page-bg)"},children:[e.jsxs("div",{style:{maxWidth:"1100px",margin:"0 auto",padding:"60px 5% 0",textAlign:"center"},children:[e.jsx("span",{className:"section-label",children:"What We Stand For"}),e.jsxs("h2",{className:"section-title",children:["Our Core ",e.jsx("span",{children:"Values"})]})]}),e.jsx("div",{style:{maxWidth:"1100px",margin:"24px auto 0",padding:"0 5% 72px",display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"20px"},children:qg.map((r,s)=>e.jsxs("div",{className:"ckf-value-card reveal",style:{transitionDelay:`${s*.1}s`},children:[e.jsx("div",{className:"ckf-value-icon",children:e.jsx("i",{className:r.icon})}),e.jsx("h3",{children:r.title}),e.jsx("p",{children:r.desc})]},s))})]}),e.jsx("section",{style:{background:"#fff",padding:"72px 5%"},children:e.jsxs("div",{className:"ckf-skills-banner reveal",style:{maxWidth:"1100px",margin:"0 auto"},children:[e.jsxs("div",{style:{flex:"1 1 300px"},children:[e.jsx("span",{className:"section-label",style:{color:"var(--cyan)"},children:"Vocational Wing"}),e.jsx("h2",{children:"CKF Skills"}),e.jsx("p",{children:"CKF Skills is the vocational and skill development wing of Creative Knowledge Foundation, offering industry-relevant training programs to bridge the skill gap and enhance employability among youth in Odisha."})]}),e.jsx("div",{style:{flex:"1 1 260px"},children:e.jsx("div",{className:"ckf-skill-tags",children:Qg.map((r,s)=>e.jsx("span",{children:r},s))})})]})})]})}function Zg(){v.useEffect(()=>{const r=document.querySelectorAll(".reveal, .reveal-left, .reveal-right"),s=new IntersectionObserver(o=>o.forEach(c=>{c.isIntersecting&&c.target.classList.add("visible")}),{threshold:.1});return r.forEach(o=>s.observe(o)),()=>s.disconnect()},[])}const e0=[{img:"/CTC NEW REACT WEBSITE/images/AboutUs/StrongAcademic.png",title:"Strong Academics",desc:"Comprehensive programs delivered by experienced faculty to boost academic excellence and career readiness."},{img:"/CTC NEW REACT WEBSITE/images/AboutUs/PrePlacementActivity.jpg",title:"Pre-Placement Training",desc:"Mock interviews, aptitude tests, and resume workshops to prepare students for campus placements."},{img:"/CTC NEW REACT WEBSITE/images/AboutUs/LiveProjects.png",title:"Skill Development",desc:"Hands-on live projects and internship programs to bridge the gap between academics and industry."},{img:"/CTC NEW REACT WEBSITE/images/AboutUs/Hostel.jpg",title:"Hostel Facilities",desc:"Comfortable, secure, and well-maintained separate hostels for boys and girls with 24/7 security."},{img:"/CTC NEW REACT WEBSITE/images/AboutUs/transportation.png",title:"Buses & Transportation",desc:"Safe and timely college bus services covering major routes across Angul and surrounding areas."},{img:"/CTC NEW REACT WEBSITE/images/AboutUs/Playground.png",title:"Play Ground & Sports",desc:"Dedicated outdoor sports facilities to promote physical fitness, teamwork, and competitive spirit."},{img:"/CTC NEW REACT WEBSITE/images/AboutUs/Canteen_Caffeteria.jpg",title:"Canteen & Cafeteria",desc:"Hygienic and affordable canteen offering nutritious meals and refreshments throughout the day."},{img:"/CTC NEW REACT WEBSITE/images/AboutUs/GreenCampus.png",title:"Green Campus",desc:"Lush eco-friendly campus with beautiful surroundings promoting a healthy and inspiring environment."}];function t0(){return Zg(),e.jsxs(e.Fragment,{children:[e.jsx(Ta,{title:"About Creative Techno College | Top Educational Institution in Odisha",description:"Learn about Creative Techno College (CTC), the top engineering and degree college in Angul, dedicated to modern education, skill development, and student success.",keywords:"about creative techno college angul, CTC angul about, best college angul odisha, top educational institution odisha, best residential college angul, modern education odisha",canonical:"/about/ctc"}),e.jsxs("div",{className:"page-hero",children:[e.jsx("div",{className:"page-hero-dots"}),e.jsx("span",{className:"section-label",children:"Know Us Better"}),e.jsxs("h1",{children:["About ",e.jsx("span",{children:"Creative Techno College: A Legacy of Excellence"})]}),e.jsx("p",{children:"Top Educational Institution in Odisha — Angul"})]}),e.jsx("section",{style:{padding:"80px 5%",background:"#fff"},children:e.jsxs("div",{style:{maxWidth:"1200px",margin:"0 auto",display:"flex",gap:"60px",flexWrap:"wrap",alignItems:"center"},children:[e.jsxs("div",{className:"reveal-left",style:{flex:"1 1 380px"},children:[e.jsx("span",{className:"section-label",children:"Our Story"}),e.jsxs("h2",{className:"section-title",children:["Our Vision as the ",e.jsx("span",{children:"Top College in Odisha"})]}),e.jsxs("p",{style:{color:"#4a6080",lineHeight:1.9,marginBottom:"16px"},children:["Established with a vision to redefine higher education, Creative Techno College has grown into the ",e.jsx("strong",{children:"top college in Odisha"})," for technology and management studies. Our mission goes beyond textbooks; we focus on holistic, career-oriented learning that transforms students into industry leaders."]}),e.jsxs("p",{style:{color:"#4a6080",lineHeight:1.9,marginBottom:"16px"},children:["Recognized widely as the ",e.jsx("strong",{children:"top educational institution in Odisha"}),", we offer a secure and dynamic environment, making us the ",e.jsx("strong",{children:"best residential college in Angul"}),". Our dedicated faculty, modern education methodologies, and robust infrastructure ensure that whether you are pursuing our ",e.jsx("strong",{children:"top Data Science course in Angul"})," or seeking a foundation in business administration, you receive an education that meets global standards."]}),e.jsx("p",{style:{color:"#4a6080",lineHeight:1.9,marginBottom:"28px"},children:"With a dedicated placement cell, experienced faculty, and vibrant campus life through Gymkhana activities, CTC provides a holistic educational experience that fosters innovation and modern education."}),e.jsx("div",{style:{display:"flex",gap:"16px",flexWrap:"wrap"},children:e.jsxs(fe,{to:"/admission",className:"btn-primary",children:[e.jsx("i",{className:"fa-solid fa-graduation-cap"})," Apply Now"]})})]}),e.jsxs("div",{className:"reveal-right",style:{flex:"1 1 340px"},children:[e.jsxs("div",{style:{borderRadius:"20px",overflow:"hidden",boxShadow:"var(--shadow-lg)",position:"relative"},children:[e.jsx("img",{src:"/CTC NEW REACT WEBSITE/images/AboutUs/creative-campus.jpg",alt:"CTC Campus",style:{width:"100%",height:"380px",objectFit:"cover",display:"block"}}),e.jsx("div",{style:{position:"absolute",inset:0,background:"linear-gradient(to top, rgba(10,22,40,0.45) 0%, transparent 55%)",pointerEvents:"none"}})]}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"12px",marginTop:"12px"},children:[{val:"15+",label:"Years"},{val:"1500+",label:"Alumni"},{val:"398",label:"Seats"},{val:"95%",label:"Placement"}].map((r,s)=>e.jsxs("div",{className:"reveal",style:{transitionDelay:`${s*.08}s`,background:"linear-gradient(135deg, var(--navy), var(--blue))",borderRadius:"12px",padding:"20px",textAlign:"center",color:"#fff"},children:[e.jsx("div",{style:{fontFamily:"var(--font-head)",fontSize:"1.6rem",fontWeight:900,color:"var(--gold)"},children:r.val}),e.jsx("div",{style:{fontSize:"0.78rem",color:"rgba(255,255,255,0.7)",fontWeight:600,marginTop:"4px"},children:r.label})]},s))})]})]})}),e.jsxs("section",{style:{padding:"80px 5%",background:"linear-gradient(135deg, var(--navy) 0%, #0d2550 50%, var(--blue) 100%)",position:"relative",overflow:"hidden"},children:[e.jsx("div",{style:{position:"absolute",inset:0,background:"radial-gradient(ellipse at 70% 30%, rgba(0,212,255,0.1) 0%, transparent 60%)",pointerEvents:"none"}}),e.jsxs("div",{style:{maxWidth:"1200px",margin:"0 auto",position:"relative"},children:[e.jsxs("div",{style:{textAlign:"center",marginBottom:"48px"},children:[e.jsx("span",{className:"section-label",style:{color:"var(--cyan)"},children:"Career Success"}),e.jsxs("h2",{className:"section-title",style:{color:"#fff"},children:["Best Placement Provider ",e.jsx("span",{style:{color:"var(--gold)"},children:"in Odisha"})]}),e.jsx("p",{style:{color:"rgba(255,255,255,0.65)",maxWidth:"680px",margin:"0 auto",lineHeight:1.9,fontSize:"0.97rem"},children:"Education is not just about subjects learned in college. Becoming educated is a lifelong exercise that can be unbelievably exciting if one jumps into the train of experience and takes a trip to every conceivable place on earth."})]}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:"20px",maxWidth:"900px",margin:"0 auto"},children:[{val:"1500+",label:"Students Placed",icon:"fa-solid fa-user-tie"},{val:"100+",label:"Companies",icon:"fa-solid fa-building"},{val:"₹4.5 LPA",label:"Highest Package",icon:"fa-solid fa-indian-rupee-sign"},{val:"95%",label:"Placement Rate",icon:"fa-solid fa-chart-line"}].map((r,s)=>e.jsxs("div",{className:"reveal",style:{transitionDelay:`${s*.1}s`,background:"rgba(255,255,255,0.07)",border:"1px solid rgba(255,255,255,0.13)",borderRadius:"16px",padding:"28px 20px",textAlign:"center",backdropFilter:"blur(12px)"},children:[e.jsx("i",{className:r.icon,style:{color:"var(--cyan)",fontSize:"1.6rem",marginBottom:"12px",display:"block"}}),e.jsx("div",{style:{fontFamily:"var(--font-head)",fontSize:"1.6rem",fontWeight:900,color:"var(--gold)",marginBottom:"4px"},children:r.val}),e.jsx("div",{style:{fontSize:"0.78rem",color:"rgba(255,255,255,0.65)",fontWeight:600},children:r.label})]},s))}),e.jsx("div",{style:{textAlign:"center",marginTop:"40px"},children:e.jsxs(fe,{to:"/placement",className:"btn-primary",children:[e.jsx("i",{className:"fa-solid fa-briefcase"})," View Placement Details"]})})]})]}),e.jsx("section",{style:{padding:"80px 5%",background:"var(--page-bg)"},children:e.jsxs("div",{style:{maxWidth:"1200px",margin:"0 auto"},children:[e.jsxs("div",{style:{textAlign:"center",marginBottom:"8px"},children:[e.jsx("span",{className:"section-label",children:"Campus Life"}),e.jsxs("h2",{className:"section-title",children:["World-Class ",e.jsx("span",{children:"Facilities"})]}),e.jsx("p",{className:"section-subtitle",style:{margin:"0 auto"},children:"Everything you need for a complete and enriching college experience."})]}),e.jsx("div",{className:"facility-grid",children:e0.map((r,s)=>e.jsxs("div",{className:"facility-card reveal",style:{transitionDelay:`${s%4*.08}s`},children:[e.jsxs("div",{className:"facility-img-wrap",children:[e.jsx("img",{src:r.img,alt:r.title}),e.jsx("div",{className:"facility-img-overlay"})]}),e.jsxs("div",{className:"facility-info",children:[e.jsx("h3",{children:r.title}),e.jsx("p",{children:r.desc})]})]},s))})]})})]})}function a0(){v.useEffect(()=>{const r=document.querySelectorAll(".reveal, .reveal-left, .reveal-right"),s=new IntersectionObserver(o=>o.forEach(c=>{c.isIntersecting&&c.target.classList.add("visible")}),{threshold:.08});return r.forEach(o=>s.observe(o)),()=>s.disconnect()},[])}const n0=[{name:"Mr. Manoj Kumar Das",designation:"Dean (Academic)",qualification:"23 Years Experience",img:"/CTC NEW REACT WEBSITE/images/OURTEAM/Dean Sir.jpg",email:"dasmanojp@gmail.com",role:"admin"},{name:"Mr. Krishnashis Mishra",designation:"Principal",qualification:"M.Tech (CSE) · 15 Yrs",img:"/CTC NEW REACT WEBSITE/images/OURTEAM/Principal Sir.jpg",email:"principal.creativecollege@gmail.com",role:"admin"},{name:"Mr. Bhabani Sankar Sahoo",designation:"Vice Principal",qualification:"M.Tech (CSE) · 7 Yrs",img:"/CTC NEW REACT WEBSITE/images/OURTEAM/Bhabani Sir.jpg",email:"bhabaniwipro89@gmail.com",role:"admin"},{name:"Mr. Subhrajyoti Behera",designation:"HOD — Management Faculty",qualification:"MBA (Marketing)",img:"/CTC NEW REACT WEBSITE/images/OURTEAM/Subhrajyoti Sir.jpg",email:"subhyrajyoticafpl@gmail.com",role:"mgmt"},{name:"Ms. Neha Solanki",designation:"Management Faculty",qualification:"M.Com",img:"/CTC NEW REACT WEBSITE/images/OURTEAM/Neha Mam.jpg",email:"nehasolanki1411@gmail.com",role:"mgmt"},{name:"Ms. Pravati Pradhan",designation:"Mathematics Faculty",qualification:"MSc (Mathematics)",img:"/CTC NEW REACT WEBSITE/images/OURTEAM/Pravati Mam.jpg",email:"",role:"math"},{name:"Mr. Saumya Ranjan Pradhan",designation:"IT Faculty",qualification:"MCA",img:"/CTC NEW REACT WEBSITE/images/OURTEAM/Saumya Sir.jpg",email:"",role:"it"},{name:"Mr. Swastik Ranjan Sahoo",designation:"IT Faculty",qualification:"MCA",img:"/CTC NEW REACT WEBSITE/images/OURTEAM/Swastik Sir.jpg",email:"sahooswastik406@gmail.com",role:"it"},{name:"Ms. Arghyarupa Behera",designation:"IT Faculty",qualification:"MSc (CS)",img:"/CTC NEW REACT WEBSITE/images/OURTEAM/Arghyarupa Mam.jpg",email:"arghyarupabehera3@gmail.com",role:"it"},{name:"Ms. Itishree Nath",designation:"IT Faculty",qualification:"BCA",img:"/CTC NEW REACT WEBSITE/images/OURTEAM/itishreemam.jpg",email:"",role:"it"},{name:"Mr. Satya S. S. Dehury",designation:"Public Relationship Officer",qualification:"MBA",img:"/CTC NEW REACT WEBSITE/images/OURTEAM/Satya Sir.jpg",email:"sssdehury89@gmail.com",role:"admin"},{name:"Ms. Monika Sahu",designation:"Librarian",qualification:"BCA, B.Lib.I.Sc",img:"/CTC NEW REACT WEBSITE/images/OURTEAM/monikamam.jpg",email:"monika28sahu@gmail.com",role:"lib"},{name:"Mr. Abhishek Satpathy",designation:"Accountant",qualification:"B.Com (Acctg), MBA",img:"/CTC NEW REACT WEBSITE/images/OURTEAM/abhiseksir.jpg",email:"abhisheksathpathy020@gmail.com",role:"admin"},{name:"Mr. Sarat Chandra Sahu",designation:"Campus Incharge",qualification:"General +3",img:"/CTC NEW REACT WEBSITE/images/OURTEAM/Sarat Sir.jpg",email:"saratmuna243@gmail.com",role:"admin"}];function r0(){a0();const[r,s]=v.useState(""),o=n0.filter(c=>c.name.toLowerCase().includes(r.toLowerCase())||c.designation.toLowerCase().includes(r.toLowerCase()));return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
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
            `}),e.jsxs("div",{className:"page-hero",children:[e.jsx("div",{className:"page-hero-dots"}),e.jsx("span",{className:"section-label",children:"Meet The People"}),e.jsxs("h1",{children:["Our ",e.jsx("span",{children:"Team"})]}),e.jsx("p",{children:"Dedicated educators and professionals shaping the future of our students"})]}),e.jsxs("div",{className:"team-header",children:[e.jsx("span",{className:"section-label",children:"Faculty & Staff"}),e.jsxs("h2",{children:["The ",e.jsx("span",{children:"Minds"})," Behind CTC"]}),e.jsx("p",{children:"Our team of experienced educators, industry professionals, and dedicated staff work together to provide an exceptional learning experience."})]}),e.jsx("div",{className:"search-bar",children:e.jsx("input",{type:"text",placeholder:"Search by name or designation...",value:r,onChange:c=>s(c.target.value)})}),e.jsx("div",{className:"team-grid",children:o.map((c,m)=>e.jsxs("div",{className:"team-card reveal",style:{transitionDelay:`${m%4*.08}s`},children:[e.jsx("div",{className:"team-card-img",children:e.jsx("img",{src:c.img,alt:c.name,onError:p=>{p.target.src="/CTC NEW REACT WEBSITE/images/HOMEPAGE/Director Sir.jpg"}})}),e.jsxs("div",{className:"team-card-body",children:[e.jsx("h3",{children:c.name}),e.jsx("div",{className:"designation",children:c.designation}),e.jsxs("div",{className:"qualification",children:[e.jsx("i",{className:"fa-solid fa-certificate",style:{marginRight:"5px",color:"#f5c518"}}),c.qualification]}),e.jsxs("div",{className:"email",children:[e.jsx("i",{className:"fa-solid fa-envelope"}),c.email?e.jsx("a",{href:`mailto:${c.email}`,children:c.email}):e.jsx("span",{children:"Email not available"})]})]})]},c.name))})]})}function i0(){v.useEffect(()=>{const r=document.querySelectorAll(".reveal, .reveal-left, .reveal-right"),s=new IntersectionObserver(o=>o.forEach(c=>{c.isIntersecting&&c.target.classList.add("visible")}),{threshold:.08});return r.forEach(o=>s.observe(o)),()=>s.disconnect()},[])}function s0(r,s=1800){const[o,c]=v.useState(0),m=v.useRef(null);return v.useEffect(()=>{const p=m.current;if(!p)return;const u=new IntersectionObserver(([b])=>{if(!b.isIntersecting)return;u.disconnect();let h=0;const x=Math.ceil(r/(s/16)),y=()=>{h=Math.min(h+x,r),c(h),h<r&&requestAnimationFrame(y)};requestAnimationFrame(y)},{threshold:.3});return u.observe(p),()=>u.disconnect()},[r,s]),[o,m]}function o0({pct:r,color:s,label:o,seats:c,admitted:m}){const u=2*Math.PI*54,[b,h]=v.useState(!1),x=v.useRef(null);v.useEffect(()=>{const g=new IntersectionObserver(([E])=>{E.isIntersecting&&(h(!0),g.disconnect())},{threshold:.3});return x.current&&g.observe(x.current),()=>g.disconnect()},[]);const y=b?u*(1-r/100):u;return e.jsxs("div",{ref:x,style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"14px"},children:[e.jsxs("div",{style:{position:"relative",width:"130px",height:"130px"},children:[e.jsxs("svg",{width:"130",height:"130",viewBox:"0 0 130 130",children:[e.jsx("circle",{cx:"65",cy:"65",r:54,fill:"none",stroke:"rgba(255,255,255,0.08)",strokeWidth:"10"}),e.jsx("circle",{cx:"65",cy:"65",r:54,fill:"none",stroke:s,strokeWidth:"10",strokeLinecap:"round",strokeDasharray:u,strokeDashoffset:y,style:{transition:"stroke-dashoffset 1.6s cubic-bezier(.4,0,.2,1)",transformOrigin:"65px 65px",transform:"rotate(-90deg)"}})]}),e.jsxs("div",{style:{position:"absolute",inset:0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[e.jsxs("span",{style:{fontFamily:"var(--font-head)",fontSize:"1.4rem",fontWeight:900,color:"#fff",lineHeight:1},children:[r,"%"]}),e.jsx("span",{style:{fontSize:"0.6rem",color:"rgba(255,255,255,0.45)",marginTop:"2px"},children:"FILLED"})]})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx("div",{style:{fontFamily:"var(--font-head)",fontSize:"1.1rem",fontWeight:800,color:"#fff"},children:o}),e.jsxs("div",{style:{fontSize:"0.72rem",color:"rgba(255,255,255,0.45)",marginTop:"4px"},children:[m," / ",c," seats"]})]})]})}const Ep=[{abbr:"BBA",full:"Bachelor of Business Administration",seats:120,duration:"4 Years",fee:"₹50,000/yr",icon:"fa-solid fa-briefcase",tags:["Marketing","Finance","HR","Entrepreneurship"],accent:"#f5c518"},{abbr:"BCA",full:"Bachelor of Computer Applications",seats:120,duration:"4 Years",fee:"₹60,000/yr",icon:"fa-solid fa-laptop-code",tags:["Web Dev","Networking","Database","Java"],accent:"#00d4ff"},{abbr:"B.Sc CS (H)",full:"B.Sc Computer Science (Hons.)",seats:128,duration:"4 Years",fee:"₹60,000/yr",icon:"fa-solid fa-microchip",tags:["AI / ML","Python","Algorithms","Cloud"],accent:"#7b61ff"},{abbr:"B.Sc DS",full:"B.Sc Data Science",seats:30,duration:"4 Years",fee:"₹70,000/yr",icon:"fa-solid fa-chart-pie",tags:["Data Analytics","Statistics","ML","Tableau"],accent:"#ff6b6b"},{abbr:"MBA",full:"Master of Business Administration",seats:60,duration:"2 Years",fee:"Contact Office",icon:"fa-solid fa-chart-line",tags:["Finance","Marketing","HR","Operations"],accent:"#ec4899",note:"OJEE / CAT / MAT / ATMA 2026 Rank Required"},{abbr:"MCA",full:"Master of Computer Applications",seats:60,duration:"2 Years",fee:"Contact Office",icon:"fa-solid fa-code",tags:["Software Engg","Cloud","AI/ML","Cybersecurity"],accent:"#06b6d4",note:"OJEE 2026 Rank Card Required"}],Rp=[{n:"01",icon:"fa-solid fa-clipboard-check",title:"Check Eligibility",body:"10+2 pass with min. 45% from any recognised board."},{n:"02",icon:"fa-solid fa-pen-to-square",title:"Fill Application",body:"Complete the online form or visit the college office."},{n:"03",icon:"fa-solid fa-file-arrow-up",title:"Upload Documents",body:"Upload scanned copies as per the document checklist."},{n:"04",icon:"fa-solid fa-credit-card",title:"Pay Fee",body:"Pay admission fee online or at the college counter."},{n:"05",icon:"fa-solid fa-circle-check",title:"Enrolment",body:"Receive confirmation and report on the specified date."}],l0=[{icon:"fa-solid fa-file-signature",label:"10th Certificate & Mark Sheet"},{icon:"fa-solid fa-file-lines",label:"+2 Certificate & Mark Sheet"},{icon:"fa-solid fa-id-card",label:"Aadhaar Card (Self & Parent)"},{icon:"fa-solid fa-graduation-cap",label:"Character / CLC Certificate"},{icon:"fa-solid fa-passport",label:"Migration Certificate"},{icon:"fa-solid fa-camera",label:"4 Passport-Size Photographs"},{icon:"fa-solid fa-shield-halved",label:"Caste Certificate (if applicable)"},{icon:"fa-solid fa-building-columns",label:"Bank Account Details"}],c0=[{course:"BBA",name:"Mr. Subhrajyoti Behera",email:"subhrajyoticafpl@gmail.com",phone:"+91 9861071840",img:"/CTC NEW REACT WEBSITE/images/OURTEAM/Subhrajyoti Sir.jpg",accent:"#f5c518"},{course:"BCA",name:"Mr. Manoj Kumar Das",email:"dasmanojp@gmail.com",phone:"+91 9338233303",img:"/CTC NEW REACT WEBSITE/images/OURTEAM/Dean Sir.jpg",accent:"#00d4ff"},{course:"B.Sc CS(H)",name:"Mr. Krishnashis Mishra",email:"principal.creativecollege@gmail.com",phone:"+91 9853325903",img:"/CTC NEW REACT WEBSITE/images/OURTEAM/Principal Sir.jpg",accent:"#7b61ff"},{course:"B.Sc DS",name:"Mr. Bhabani Sankar Sahoo",email:"bhabaniwipro89@gmail.com",phone:"+91 9668844571",img:"/CTC NEW REACT WEBSITE/images/OURTEAM/Bhabani Sir.jpg",accent:"#ff6b6b"}],d0=[{label:"BBA",pct:100,color:"#f5c518",seats:120,admitted:120},{label:"BCA",pct:50,color:"#00d4ff",seats:120,admitted:60},{label:"B.Sc CS(H)",pct:53,color:"#7b61ff",seats:128,admitted:68},{label:"B.Sc DS",pct:83,color:"#ff6b6b",seats:36,admitted:30},{label:"MBA",pct:0,color:"#ec4899",seats:60,admitted:0},{label:"MCA",pct:0,color:"#06b6d4",seats:60,admitted:0}],p0=[{year:"2020",total:119,bba:16,bca:53,bsccs:50},{year:"2021",total:154,bba:30,bca:60,bsccs:64},{year:"2022",total:155,bba:30,bca:60,bsccs:65},{year:"2023",total:157,bba:30,bca:60,bsccs:67},{year:"2024",total:158,bba:30,bca:60,bsccs:68}],zo=200;function m0({target:r,suffix:s=""}){const[o,c]=s0(r);return e.jsxs("span",{ref:c,children:[o,s]})}function u0(){return i0(),e.jsxs(e.Fragment,{children:[e.jsx(Ta,{title:"Admissions Open 2026 | Top College in Angul, Odisha | Apply Now",description:"Secure your seat at the best college in Angul. Apply now for BCA, BBA, BSc Data Science, AI, MBA, and MCA programs at Creative Techno College.",keywords:"admission in angul college, CTC angul admission 2026, BCA admission angul, top AI course angul, best residential college odisha, BBA admission angul, MBA admission angul, MCA admission angul",canonical:"/admission"}),e.jsxs("div",{className:"adm2-hero",children:[e.jsx("div",{className:"adm2-hero-glow"}),e.jsxs("div",{className:"adm2-hero-content",children:[e.jsx("span",{className:"section-label",style:{color:"var(--cyan)"},children:"Admissions Open 2026"}),e.jsxs("h1",{children:["Admissions at ",e.jsx("span",{style:{color:"var(--gold)"},children:"Creative Techno College"})]}),e.jsx("p",{children:"AICTE Approved · Utkal University Affiliated · Angul, Odisha"}),e.jsxs("div",{className:"adm2-hero-btns",children:[e.jsxs(fe,{to:"/admission/apply",className:"btn-primary",children:[e.jsx("i",{className:"fa-solid fa-pen-to-square"})," Apply Online"]}),e.jsxs("a",{href:"/pdfs/brochure.pdf",download:!0,className:"btn-outline",children:[e.jsx("i",{className:"fa-solid fa-file-arrow-down"})," Download Brochure"]})]})]}),e.jsx("div",{className:"adm2-hero-stats",children:[{icon:"fa-solid fa-users",val:518,suf:"+",label:"Total Seats"},{icon:"fa-solid fa-graduation-cap",val:1500,suf:"+",label:"Alumni"},{icon:"fa-solid fa-trophy",val:95,suf:"%",label:"Placement Rate"},{icon:"fa-solid fa-calendar-days",val:15,suf:"+",label:"Years of Excellence"}].map((r,s)=>e.jsxs("div",{className:"adm2-qstat",children:[e.jsx("i",{className:r.icon}),e.jsx("div",{className:"adm2-qstat-val",children:e.jsx(m0,{target:r.val,suffix:r.suf})}),e.jsx("div",{className:"adm2-qstat-label",children:r.label})]},s))})]}),e.jsx("section",{className:"adm2-section",style:{background:"var(--page-bg)"},children:e.jsxs("div",{className:"adm2-wrap",children:[e.jsxs("div",{className:"adm2-heading reveal",children:[e.jsx("span",{className:"section-label",children:"Join the Best Residential College in Angul"}),e.jsxs("h2",{className:"section-title",children:["Eligibility for Our ",e.jsx("span",{children:"Top Courses"})]}),e.jsxs("p",{className:"section-subtitle",style:{margin:"0 auto 16px"},children:["Take the first step toward a brilliant career by securing your admission at the ",e.jsx("strong",{children:"top college in Angul"}),". Creative Techno College welcomes ambitious students after 10th and 12th, as well as graduates seeking advanced degrees."]}),e.jsxs("p",{className:"section-subtitle",style:{margin:"0 auto"},children:["Whether you are looking to enroll in the ",e.jsx("strong",{children:"top AI course in Angul"})," or join the ",e.jsx("strong",{children:"best Bsc.CS(H), BCA, BBA and BSc.DS(H) college in Odisha"}),", our admission process is streamlined and student-friendly. Parents seeking a safe, nurturing environment will find peace of mind knowing CTC is the ",e.jsx("strong",{children:"best residential college in Odisha"}),"."]})]}),e.jsx("div",{className:"adm2-heading reveal",style:{marginBottom:"24px",marginTop:"16px",textAlign:"center"},children:e.jsx("h3",{style:{fontFamily:"var(--font-head)",fontSize:"1.4rem",fontWeight:800,color:"var(--navy)"},children:"Undergraduate (UG) Programs"})}),e.jsx("div",{className:"adm2-courses",style:{marginBottom:"40px"},children:Ep.filter(r=>!["MBA","MCA"].includes(r.abbr)).map((r,s)=>e.jsxs("div",{className:"adm2-course reveal",style:{transitionDelay:`${s*.1}s`},children:[e.jsx("div",{style:{height:"4px",background:r.accent,borderRadius:"20px 20px 0 0",margin:"-28px -28px 24px",flexShrink:0}}),e.jsxs("div",{style:{display:"flex",alignItems:"flex-start",justifyContent:"space-between",gap:"12px",marginBottom:"16px"},children:[e.jsx("div",{style:{background:`${r.accent}1a`,border:`1px solid ${r.accent}44`,borderRadius:"14px",width:"52px",height:"52px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.3rem",color:r.accent,flexShrink:0},children:e.jsx("i",{className:r.icon})}),e.jsxs("div",{style:{background:"var(--page-bg)",borderRadius:"20px",padding:"4px 13px",fontSize:"0.75rem",fontFamily:"var(--font-head)",fontWeight:700,color:"var(--navy)",whiteSpace:"nowrap"},children:[r.seats," seats"]})]}),e.jsx("h3",{style:{fontFamily:"var(--font-head)",fontSize:"1.4rem",fontWeight:900,color:"var(--navy)",marginBottom:"4px"},children:r.abbr}),e.jsx("p",{style:{fontSize:"0.78rem",color:"var(--text-muted)",marginBottom:"8px",lineHeight:1.5},children:r.full}),r.note&&e.jsxs("p",{style:{fontSize:"0.69rem",color:r.accent,fontWeight:700,fontFamily:"var(--font-head)",marginBottom:"10px",background:`${r.accent}12`,border:`1px solid ${r.accent}30`,borderRadius:"8px",padding:"4px 10px",display:"inline-block"},children:[e.jsx("i",{className:"fa-solid fa-circle-info",style:{marginRight:"5px"}}),r.note]}),e.jsx("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",marginBottom:"20px"},children:r.tags.map((o,c)=>e.jsx("span",{style:{background:`${r.accent}16`,color:r.accent,border:`1px solid ${r.accent}30`,borderRadius:"10px",padding:"3px 10px",fontSize:"0.69rem",fontFamily:"var(--font-head)",fontWeight:600},children:o},c))}),e.jsxs("div",{style:{marginTop:"auto",borderTop:"1px solid rgba(10,22,40,0.07)",paddingTop:"16px",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsxs("span",{style:{fontSize:"0.8rem",color:"var(--text-muted)",fontFamily:"var(--font-head)",fontWeight:600},children:[e.jsx("i",{className:"fa-regular fa-clock",style:{marginRight:"5px"}}),r.duration]}),e.jsxs(fe,{to:"/admission/apply",style:{display:"inline-flex",alignItems:"center",gap:"6px",background:r.accent,color:r.accent==="#f5c518"?"#0a1628":"#fff",padding:"7px 16px",borderRadius:"20px",fontSize:"0.76rem",fontFamily:"var(--font-head)",fontWeight:700,textDecoration:"none",transition:"opacity 0.2s"},children:["Apply ",e.jsx("i",{className:"fa-solid fa-arrow-right"})]})]})]},s))}),e.jsx("div",{className:"adm2-heading reveal",style:{marginBottom:"24px",textAlign:"center"},children:e.jsx("h3",{style:{fontFamily:"var(--font-head)",fontSize:"1.4rem",fontWeight:800,color:"var(--navy)"},children:"Postgraduate (PG) Programs"})}),e.jsx("div",{className:"adm2-courses",children:Ep.filter(r=>["MBA","MCA"].includes(r.abbr)).map((r,s)=>e.jsxs("div",{className:"adm2-course reveal",style:{transitionDelay:`${s*.1}s`},children:[e.jsx("div",{style:{height:"4px",background:r.accent,borderRadius:"20px 20px 0 0",margin:"-28px -28px 24px",flexShrink:0}}),e.jsxs("div",{style:{display:"flex",alignItems:"flex-start",justifyContent:"space-between",gap:"12px",marginBottom:"16px"},children:[e.jsx("div",{style:{background:`${r.accent}1a`,border:`1px solid ${r.accent}44`,borderRadius:"14px",width:"52px",height:"52px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.3rem",color:r.accent,flexShrink:0},children:e.jsx("i",{className:r.icon})}),e.jsxs("div",{style:{background:"var(--page-bg)",borderRadius:"20px",padding:"4px 13px",fontSize:"0.75rem",fontFamily:"var(--font-head)",fontWeight:700,color:"var(--navy)",whiteSpace:"nowrap"},children:[r.seats," seats"]})]}),e.jsx("h3",{style:{fontFamily:"var(--font-head)",fontSize:"1.4rem",fontWeight:900,color:"var(--navy)",marginBottom:"4px"},children:r.abbr}),e.jsx("p",{style:{fontSize:"0.78rem",color:"var(--text-muted)",marginBottom:"8px",lineHeight:1.5},children:r.full}),r.note&&e.jsxs("p",{style:{fontSize:"0.69rem",color:r.accent,fontWeight:700,fontFamily:"var(--font-head)",marginBottom:"10px",background:`${r.accent}12`,border:`1px solid ${r.accent}30`,borderRadius:"8px",padding:"4px 10px",display:"inline-block"},children:[e.jsx("i",{className:"fa-solid fa-circle-info",style:{marginRight:"5px"}}),r.note]}),e.jsx("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",marginBottom:"20px"},children:r.tags.map((o,c)=>e.jsx("span",{style:{background:`${r.accent}16`,color:r.accent,border:`1px solid ${r.accent}30`,borderRadius:"10px",padding:"3px 10px",fontSize:"0.69rem",fontFamily:"var(--font-head)",fontWeight:600},children:o},c))}),e.jsxs("div",{style:{marginTop:"auto",borderTop:"1px solid rgba(10,22,40,0.07)",paddingTop:"16px",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsxs("span",{style:{fontSize:"0.8rem",color:"var(--text-muted)",fontFamily:"var(--font-head)",fontWeight:600},children:[e.jsx("i",{className:"fa-regular fa-clock",style:{marginRight:"5px"}}),r.duration]}),e.jsxs(fe,{to:"/admission/apply",style:{display:"inline-flex",alignItems:"center",gap:"6px",background:r.accent,color:r.accent==="#f5c518"?"#0a1628":"#fff",padding:"7px 16px",borderRadius:"20px",fontSize:"0.76rem",fontFamily:"var(--font-head)",fontWeight:700,textDecoration:"none",transition:"opacity 0.2s"},children:["Apply ",e.jsx("i",{className:"fa-solid fa-arrow-right"})]})]})]},s))})]})}),e.jsxs("section",{className:"adm2-section",style:{background:"linear-gradient(160deg, #060d1a 0%, #0a1f3d 50%, #091828 100%)",position:"relative",overflow:"hidden"},children:[e.jsx("div",{style:{position:"absolute",top:"-80px",right:"-80px",width:"400px",height:"400px",borderRadius:"50%",background:"radial-gradient(circle, rgba(0,212,255,0.08) 0%, transparent 70%)",pointerEvents:"none"}}),e.jsx("div",{style:{position:"absolute",bottom:"-60px",left:"-60px",width:"300px",height:"300px",borderRadius:"50%",background:"radial-gradient(circle, rgba(123,97,255,0.08) 0%, transparent 70%)",pointerEvents:"none"}}),e.jsxs("div",{className:"adm2-wrap",style:{position:"relative"},children:[e.jsxs("div",{className:"adm2-heading reveal",children:[e.jsx("span",{className:"section-label",style:{color:"var(--cyan)"},children:"Data Insights"}),e.jsxs("h2",{className:"section-title",style:{color:"#fff"},children:["Admission ",e.jsx("span",{style:{color:"var(--gold)"},children:"Statistics"})]}),e.jsx("p",{style:{color:"rgba(255,255,255,0.45)",fontSize:"0.85rem",marginTop:"6px"},children:"Academic Year 2024-25 seat utilisation & year-over-year enrollment trends"})]}),e.jsx("div",{className:"adm2-rings-row",children:d0.map((r,s)=>e.jsx(o0,{...r},s))}),e.jsx("div",{style:{height:"1px",background:"rgba(255,255,255,0.07)",margin:"56px 0"}}),e.jsx("div",{className:"adm2-heading reveal",style:{marginBottom:"32px"},children:e.jsx("h3",{style:{fontFamily:"var(--font-head)",fontSize:"1.1rem",fontWeight:800,color:"rgba(255,255,255,0.6)",letterSpacing:"0.1em",textTransform:"uppercase"},children:"Year-over-Year Enrollment (2020–2024)"})}),e.jsxs("div",{className:"adm2-yoy reveal",children:[p0.map((r,s)=>e.jsxs("div",{className:"adm2-yoy-row",children:[e.jsx("div",{className:"adm2-yoy-year",children:r.year}),e.jsxs("div",{className:"adm2-yoy-bars",children:[e.jsxs("div",{className:"adm2-yoy-track",title:`BBA: ${r.bba}`,children:[e.jsx("div",{className:"adm2-yoy-fill",style:{width:`${r.bba/zo*100}%`,background:"#f5c518"}}),e.jsx("span",{className:"adm2-yoy-tip",children:r.bba})]}),e.jsxs("div",{className:"adm2-yoy-track",title:`BCA: ${r.bca}`,children:[e.jsx("div",{className:"adm2-yoy-fill",style:{width:`${r.bca/zo*100}%`,background:"#00d4ff"}}),e.jsx("span",{className:"adm2-yoy-tip",children:r.bca})]}),e.jsxs("div",{className:"adm2-yoy-track",title:`B.Sc CS: ${r.bsccs}`,children:[e.jsx("div",{className:"adm2-yoy-fill",style:{width:`${r.bsccs/zo*100}%`,background:"#7b61ff"}}),e.jsx("span",{className:"adm2-yoy-tip",children:r.bsccs})]})]}),e.jsxs("div",{className:"adm2-yoy-total",children:[e.jsx("span",{style:{fontFamily:"var(--font-head)",fontWeight:900,color:"var(--gold)",fontSize:"1.3rem"},children:r.total}),e.jsx("span",{style:{fontSize:"0.65rem",color:"rgba(255,255,255,0.35)",display:"block",marginTop:"2px"},children:"total"})]})]},s)),e.jsx("div",{className:"adm2-yoy-legend",children:[["#f5c518","BBA"],["#00d4ff","BCA"],["#7b61ff","B.Sc CS(H)"]].map(([r,s])=>e.jsxs("span",{children:[e.jsx("span",{style:{background:r}}),s]},s))})]})]})]}),e.jsx("section",{className:"adm2-section",style:{background:"#fff"},children:e.jsxs("div",{className:"adm2-wrap",children:[e.jsxs("div",{className:"adm2-heading reveal",children:[e.jsx("span",{className:"section-label",children:"Simple Process"}),e.jsxs("h2",{className:"section-title",children:["How to ",e.jsx("span",{children:"Apply"})]})]}),e.jsx("div",{className:"adm2-steps reveal",children:Rp.map((r,s)=>e.jsxs("div",{className:"adm2-step",children:[s<Rp.length-1&&e.jsx("div",{className:"adm2-step-line"}),e.jsx("div",{className:"adm2-step-circle",children:e.jsx("i",{className:r.icon})}),e.jsx("div",{className:"adm2-step-num",children:r.n}),e.jsx("h3",{children:r.title}),e.jsx("p",{children:r.body})]},s))})]})}),e.jsx("section",{className:"adm2-section",style:{background:"var(--page-bg)"},children:e.jsxs("div",{className:"adm2-wrap adm2-doc-coord",children:[e.jsxs("div",{className:"reveal-left",style:{flex:"1 1 300px"},children:[e.jsx("span",{className:"section-label",children:"Checklist"}),e.jsxs("h2",{className:"section-title",style:{marginBottom:"24px"},children:["Documents ",e.jsx("span",{children:"Required"})]}),e.jsx("div",{className:"adm2-docgrid",children:l0.map((r,s)=>e.jsxs("div",{className:"adm2-docitem",children:[e.jsx("i",{className:r.icon}),e.jsx("span",{children:r.label})]},s))})]}),e.jsxs("div",{className:"reveal-right",style:{flex:"1 1 340px"},children:[e.jsx("span",{className:"section-label",children:"Get in Touch"}),e.jsx("h2",{className:"section-title",style:{marginBottom:"24px"},children:"Coordinators"}),e.jsx("div",{className:"adm2-coords",children:c0.map((r,s)=>e.jsxs("div",{className:"adm2-coord",children:[e.jsx("img",{src:r.img,alt:r.name,className:"adm2-coord-img",onError:o=>o.target.style.display="none",style:{borderColor:r.accent}}),e.jsxs("div",{children:[e.jsx("span",{className:"adm2-coord-badge",style:{background:`${r.accent}22`,color:r.accent,border:`1px solid ${r.accent}44`},children:r.course}),e.jsx("p",{className:"adm2-coord-name",children:r.name}),e.jsxs("p",{className:"adm2-coord-info",children:[e.jsx("i",{className:"fa-solid fa-phone"}),r.phone]}),e.jsxs("p",{className:"adm2-coord-info",children:[e.jsx("i",{className:"fa-solid fa-envelope"}),r.email]})]})]},s))})]})]})}),e.jsxs("section",{style:{background:"linear-gradient(135deg, var(--navy) 0%, #0f2a4e 100%)",padding:"80px 5%",overflow:"hidden",position:"relative"},children:[e.jsx("div",{style:{position:"absolute",inset:0,background:"radial-gradient(ellipse at 70% 50%, rgba(0,212,255,0.07) 0%, transparent 60%)",pointerEvents:"none"}}),e.jsxs("div",{style:{maxWidth:"1100px",margin:"0 auto",display:"flex",gap:"60px",alignItems:"center",flexWrap:"wrap",position:"relative"},children:[e.jsxs("div",{className:"reveal-left",style:{flex:"1 1 300px"},children:[e.jsx("span",{className:"section-label",style:{color:"var(--cyan)"},children:"Official Publication"}),e.jsxs("h2",{className:"section-title",style:{color:"#fff",marginBottom:"18px"},children:["College ",e.jsx("span",{style:{color:"var(--gold)"},children:"Brochure"})]}),e.jsx("p",{style:{color:"rgba(255,255,255,0.6)",lineHeight:1.9,fontSize:"0.9rem"},children:"Creative Techno College, Angul — permanently recognised by the Government of Odisha, Dept. of Higher Education and affiliated to Utkal University. A pioneer in IT and Management education in Central Odisha since 2010."}),e.jsxs("div",{style:{marginTop:"20px",display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsxs("p",{style:{color:"rgba(255,255,255,0.55)",fontSize:"0.82rem"},children:[e.jsx("i",{className:"fa-solid fa-location-dot",style:{color:"var(--cyan)",marginRight:"8px"}}),"Baluakata, Saradhapur, Angul, Odisha"]}),e.jsxs("p",{style:{color:"rgba(255,255,255,0.55)",fontSize:"0.82rem"},children:[e.jsx("i",{className:"fa-solid fa-building",style:{color:"var(--cyan)",marginRight:"8px"}}),"City Office: Tamrit Colony, Angul"]})]}),e.jsxs("a",{href:"/CTC NEW REACT WEBSITE/images/Admission/college brochure.pdf",download:!0,className:"btn-primary",style:{marginTop:"28px",display:"inline-flex"},children:[e.jsx("i",{className:"fa-solid fa-file-arrow-down"})," Download Brochure"]})]}),e.jsx("div",{className:"reveal-right",style:{flex:"1 1 280px",maxWidth:"460px"},children:e.jsx("img",{src:"/CTC NEW REACT WEBSITE/images/Admission/banner.png",alt:"CTC Brochure",style:{width:"100%",borderRadius:"20px",boxShadow:"0 24px 60px rgba(0,0,0,0.5)"},onError:r=>r.target.style.display="none"})})]})]})]})}const el=v.createContext(null),f0="/CTC%20NEW%20REACT%20WEBSITE/Admission/submit.php";function Re({label:r,icon:s,error:o,children:c}){return e.jsxs("div",{className:"af-field",children:[e.jsxs("label",{className:"af-label",children:[s&&e.jsx("i",{className:s}),r]}),c,o&&e.jsxs("span",{className:"af-error",children:[e.jsx("i",{className:"fa-solid fa-circle-exclamation"})," ",o]})]})}function vt({name:r,type:s="text",placeholder:o,...c}){const{form:m,set:p,errors:u,clrErr:b}=v.useContext(el);return e.jsx("input",{className:`af-input ${u[r]?"af-input-err":""}`,type:s,value:m[r],placeholder:o,onChange:h=>{p(r,h.target.value),b(r)},name:r,...c})}function tn({name:r,children:s}){const{form:o,set:c,errors:m,clrErr:p}=v.useContext(el);return e.jsx("select",{className:`af-input ${m[r]?"af-input-err":""}`,value:o[r],onChange:u=>{c(r,u.target.value),p(r)},name:r,children:s})}function h0(){const r=nr(),[s,o]=v.useState(!1),[c,m]=v.useState(!1),[p,u]=v.useState(""),[b,h]=v.useState(null),[x,y]=v.useState({}),[g,E]=v.useState({fullName:"",dob:"",gender:"",category:"",phone:"",email:"",school10:"",pct10:"",school12:"",stream:"",pct12:"",yearPass:"",course:"",address:"",district:"",state:"Odisha",pincode:"",havePC:"",reference:""});v.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[]);const D=(N,R)=>E(L=>({...L,[N]:R})),F=N=>y(R=>{const L={...R};return delete L[N],L});function P(){const N={};return g.fullName.trim()||(N.fullName="Full name is required"),g.dob||(N.dob="Date of birth is required"),g.gender||(N.gender="Please select your gender"),g.phone.match(/^\d{10}$/)||(N.phone="Enter a valid 10-digit mobile number"),g.school10.trim()||(N.school10="Please enter your 10th school name"),g.pct10||(N.pct10="Enter 10th percentage / grade"),g.school12.trim()||(N.school12="Please enter your +2 school name"),g.pct12||(N.pct12="Enter +2 percentage / grade"),g.stream||(N.stream="Please select your +2 stream"),g.yearPass||(N.yearPass="Enter your year of passing +2"),g.course||(N.course="Please select a course"),g.address.trim()||(N.address="Address is required"),g.district.trim()||(N.district="District is required"),g.pincode.match(/^\d{6}$/)||(N.pincode="Enter a valid 6-digit pin code"),N}async function z(){const N=P();if(Object.keys(N).length){y(N);const R=Object.keys(N)[0],L=document.getElementsByName(R)[0]||document.querySelector(`[name="${R}"]`);L?(L.scrollIntoView({behavior:"smooth",block:"center"}),L.focus({preventScroll:!0})):window.scrollTo({top:0,behavior:"smooth"});return}y({}),m(!0),u("");try{const L=await(await fetch(f0,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(g)})).json();L.success?(h(L.application_id),o(!0),typeof window<"u"&&(window.dataLayer=window.dataLayer||[],window.dataLayer.push({event:"lead_form_submitted",form_type:"admission_apply",application_id:L.application_id,course:g.course}),typeof window.gtag=="function"&&(window.gtag("event","generate_lead",{event_category:"engagement",event_label:"Admission Form Submit Success",value:1,currency:"INR",course:g.course,lead_id:L.application_id}),window.gtag("event","conversion",{send_to:"AW-16982895656/MYlTCPvQyLEcEKjYiaI_"})),console.log("Lead form successfully saved in database. Conversion events dispatched."))):u(L.error||"Submission failed. Please try again.")}catch{u("Network error. Please check your connection and try again.")}finally{m(!1)}}return s?e.jsx(g0,{name:g.fullName,course:g.course,appId:b,navigate:r}):e.jsx(el.Provider,{value:{form:g,set:D,errors:x,clrErr:F},children:e.jsxs("div",{className:"af-page",children:[e.jsxs("div",{className:"af-hero",children:[e.jsx("div",{className:"af-hero-glow"}),e.jsxs("div",{style:{position:"relative"},children:[e.jsx("span",{className:"section-label",style:{color:"var(--cyan)"},children:"Online Application"}),e.jsxs("h1",{style:{fontFamily:"var(--font-head)",fontSize:"clamp(1.6rem, 3.5vw, 2.6rem)",fontWeight:900,color:"#fff",margin:"12px 0 10px"},children:["Apply for Admission ",e.jsx("span",{style:{color:"var(--gold)"},children:"2026–27"})]}),e.jsx("p",{style:{color:"rgba(255,255,255,0.45)",fontSize:"0.88rem",letterSpacing:"0.04em"},children:"Creative Techno College, Angul · AICTE Approved · Utkal University Affiliated"})]})]}),e.jsxs("div",{className:"af-body",children:[e.jsxs("div",{className:"af-card",children:[e.jsxs("div",{className:"af-form-section",children:[e.jsxs("h2",{className:"af-form-title",children:[e.jsx("i",{className:"fa-solid fa-user"})," 1. Personal Information"]}),e.jsxs("div",{className:"af-grid-2",children:[e.jsx(Re,{label:"Full Name *",icon:"fa-solid fa-signature",error:x.fullName,children:e.jsx(vt,{name:"fullName",placeholder:"As per 10th certificate"})}),e.jsx(Re,{label:"Date of Birth *",error:x.dob,children:e.jsx(vt,{name:"dob",type:"date"})}),e.jsx(Re,{label:"Gender *",error:x.gender,children:e.jsxs(tn,{name:"gender",children:[e.jsx("option",{value:"",children:"Select Gender"}),e.jsx("option",{children:"Male"}),e.jsx("option",{children:"Female"}),e.jsx("option",{children:"Other"})]})}),e.jsx(Re,{label:"Category",children:e.jsxs(tn,{name:"category",children:[e.jsx("option",{value:"",children:"Select Category"}),e.jsx("option",{children:"General"}),e.jsx("option",{children:"OBC"}),e.jsx("option",{children:"SC"}),e.jsx("option",{children:"ST"}),e.jsx("option",{children:"PwD"})]})}),e.jsx(Re,{label:"Mobile Number *",icon:"fa-solid fa-phone",error:x.phone,children:e.jsx(vt,{name:"phone",type:"tel",placeholder:"10-digit mobile number",maxLength:10})}),e.jsx(Re,{label:"Email Address",icon:"fa-solid fa-envelope",children:e.jsx(vt,{name:"email",type:"email",placeholder:"Optional"})})]})]}),e.jsx("div",{style:{height:"1px",background:"rgba(10,22,40,0.08)",margin:"36px 0"}}),e.jsxs("div",{className:"af-form-section",children:[e.jsxs("h2",{className:"af-form-title",children:[e.jsx("i",{className:"fa-solid fa-graduation-cap"})," 2. Academic Details"]}),e.jsx("p",{className:"af-form-subtitle",children:"10th Certificate Details"}),e.jsxs("div",{className:"af-grid-2",children:[e.jsx(Re,{label:"10th School / Board *",error:x.school10,children:e.jsx(vt,{name:"school10",placeholder:"School name"})}),e.jsx(Re,{label:"10th Percentage / CGPA *",error:x.pct10,children:e.jsx(vt,{name:"pct10",placeholder:"e.g. 78% or 7.8 CGPA"})})]}),e.jsx("p",{className:"af-form-subtitle",style:{marginTop:"24px"},children:"+2 / 12th / Diploma Details"}),e.jsxs("div",{className:"af-grid-2",children:[e.jsx(Re,{label:"+2 School / College / Board *",error:x.school12,children:e.jsx(vt,{name:"school12",placeholder:"School / college name"})}),e.jsx(Re,{label:"+2 Stream *",error:x.stream,children:e.jsxs(tn,{name:"stream",children:[e.jsx("option",{value:"",children:"Select Stream"}),e.jsx("option",{children:"Science (PCM)"}),e.jsx("option",{children:"Science (PCB)"}),e.jsx("option",{children:"Commerce"}),e.jsx("option",{children:"Arts / Humanities"}),e.jsx("option",{children:"Vocational"}),e.jsx("option",{children:"Diploma"})]})}),e.jsx(Re,{label:"+2 Percentage / CGPA *",error:x.pct12,children:e.jsx(vt,{name:"pct12",placeholder:"e.g. 65% or 6.5 CGPA"})}),e.jsx(Re,{label:"Year of Passing +2 *",error:x.yearPass,children:e.jsxs(tn,{name:"yearPass",children:[e.jsx("option",{value:"",children:"Select Year"}),[2026,2025,2024,2023,2022,2021,2020,2019].map(N=>e.jsx("option",{children:N},N))]})})]})]}),e.jsx("div",{style:{height:"1px",background:"rgba(10,22,40,0.08)",margin:"36px 0"}}),e.jsxs("div",{className:"af-form-section",children:[e.jsxs("h2",{className:"af-form-title",children:[e.jsx("i",{className:"fa-solid fa-book-open"})," 3. Course & Contact Details"]}),e.jsxs(Re,{label:"Course Applied For *",error:x.course,children:[e.jsx("div",{className:"af-course-pick",children:[{v:"BBA",label:"BBA",sub:"Bachelor of Business Administration",color:"#f5c518"},{v:"BCA",label:"BCA",sub:"Bachelor of Computer Applications",color:"#00d4ff"},{v:"B.Sc CS(H)",label:"B.Sc CS(H)",sub:"Computer Science (Honours)",color:"#7b61ff"},{v:"B.Sc DS",label:"B.Sc DS",sub:"Data Science",color:"#ff6b6b"},{v:"MBA",label:"MBA",sub:"Master of Business Administration",color:"#ec4899"},{v:"MCA",label:"MCA",sub:"Master of Computer Applications",color:"#06b6d4"}].map(N=>e.jsxs("label",{className:`af-course-tile ${g.course===N.v?"sel":""}`,style:{"--tc":N.color},children:[e.jsx("input",{type:"radio",name:"course",value:N.v,checked:g.course===N.v,onChange:()=>{D("course",N.v),F("course")}}),e.jsx("strong",{children:N.label}),e.jsx("span",{children:N.sub})]},N.v))}),x.course&&e.jsxs("span",{className:"af-error",children:[e.jsx("i",{className:"fa-solid fa-circle-exclamation"})," ",x.course]})]}),e.jsx("p",{className:"af-form-subtitle",style:{marginTop:"24px"},children:"Permanent Address"}),e.jsxs("div",{className:"af-grid-2",children:[e.jsx(Re,{label:"Address *",error:x.address,children:e.jsx("textarea",{name:"address",className:`af-input ${x.address?"af-input-err":""}`,rows:3,placeholder:"Street / Village / Ward",value:g.address,onChange:N=>{D("address",N.target.value),F("address")}})}),e.jsxs("div",{children:[e.jsx(Re,{label:"District *",error:x.district,children:e.jsx(vt,{name:"district",placeholder:"e.g. Angul"})}),e.jsx(Re,{label:"State",style:{marginTop:"12px"},children:e.jsx(vt,{name:"state",placeholder:"State"})})]}),e.jsx(Re,{label:"PIN Code *",error:x.pincode,children:e.jsx(vt,{name:"pincode",placeholder:"6-digit pin",maxLength:6})}),e.jsx(Re,{label:"Do you have a PC / Laptop at home?",children:e.jsxs(tn,{name:"havePC",children:[e.jsx("option",{value:"",children:"Select"}),e.jsx("option",{children:"Yes"}),e.jsx("option",{children:"No"})]})}),e.jsx(Re,{label:"How did you hear about us?",children:e.jsxs(tn,{name:"reference",children:[e.jsx("option",{value:"",children:"Select"}),e.jsx("option",{children:"Friend / Family"}),e.jsx("option",{children:"Social Media"}),e.jsx("option",{children:"News / Newspaper"}),e.jsx("option",{children:"School / Teacher"}),e.jsx("option",{children:"Walk-in / Visit"}),e.jsx("option",{children:"Other"})]})})]})]}),e.jsxs("div",{className:"af-nav",children:[e.jsxs(fe,{to:"/admission",className:"af-btn-back",children:[e.jsx("i",{className:"fa-solid fa-arrow-left"})," Back to Admission Info"]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:"6px"},children:[e.jsx("button",{className:"af-btn-submit",onClick:z,disabled:c,style:{opacity:c?.7:1,cursor:c?"wait":"pointer"},children:c?e.jsxs(e.Fragment,{children:[e.jsx("i",{className:"fa-solid fa-spinner fa-spin"})," Submitting…"]}):e.jsxs(e.Fragment,{children:[e.jsx("i",{className:"fa-solid fa-paper-plane"})," Submit Application"]})}),p&&e.jsxs("p",{style:{color:"#e53e3e",fontSize:"0.82rem",marginTop:"4px",textAlign:"right",fontFamily:"var(--font-head)"},children:[e.jsx("i",{className:"fa-solid fa-circle-exclamation"})," ",p]})]})]})]}),e.jsxs("aside",{className:"af-aside",children:[e.jsxs("div",{className:"af-aside-card",children:[e.jsxs("h3",{children:[e.jsx("i",{className:"fa-solid fa-circle-info"})," Important Info"]}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Admission is on a ",e.jsx("strong",{children:"first-come, first-served"})," basis."]}),e.jsx("li",{children:"Bring original documents on the day of admission."}),e.jsxs("li",{children:["Eligibility: 10+2 pass with min. ",e.jsx("strong",{children:"45%"})," marks."]}),e.jsxs("li",{children:["For queries call: ",e.jsx("strong",{children:"+91 9668844571"})]})]})]}),e.jsxs("div",{className:"af-aside-card af-aside-courses",children:[e.jsxs("h3",{children:[e.jsx("i",{className:"fa-solid fa-table-list"})," Available Seats"]}),[{label:"BBA",seats:120,color:"#f5c518"},{label:"BCA",seats:120,color:"#00d4ff"},{label:"B.Sc CS(H)",seats:128,color:"#7b61ff"},{label:"B.Sc DS",seats:30,color:"#ff6b6b"},{label:"MBA",seats:60,color:"#ec4899"},{label:"MCA",seats:60,color:"#06b6d4"}].map(N=>e.jsxs("div",{className:"af-seat-row",children:[e.jsx("span",{style:{width:"10px",height:"10px",borderRadius:"50%",background:N.color,display:"inline-block",flexShrink:0}}),e.jsx("span",{className:"af-seat-label",children:N.label}),e.jsxs("span",{className:"af-seat-count",children:[N.seats," seats"]})]},N.label))]}),e.jsxs("div",{className:"af-aside-card",children:[e.jsxs("h3",{children:[e.jsx("i",{className:"fa-solid fa-location-dot"})," Campus Address"]}),e.jsx("p",{children:"Baluakata, Saradhapur, Angul, Odisha — 759143"}),e.jsx("p",{style:{marginTop:"8px"},children:"City Office: Tamrit Colony, Angul"})]})]})]})]})})}function g0({name:r,course:s,appId:o,navigate:c}){return e.jsx("div",{className:"af-success-page",children:e.jsxs("div",{className:"af-success-card",children:[e.jsx("div",{className:"af-success-icon",children:e.jsx("i",{className:"fa-solid fa-circle-check"})}),e.jsx("h2",{children:"Application Submitted!"}),e.jsxs("p",{children:["Thank you, ",e.jsx("strong",{children:r}),"! Your application for ",e.jsx("strong",{children:s})," has been received by Creative Techno College."]}),o&&e.jsxs("p",{style:{marginTop:"14px",fontSize:"0.88rem",fontFamily:"var(--font-head)",color:"var(--blue-light)"},children:[e.jsx("i",{className:"fa-solid fa-hashtag"})," Application ID: ",e.jsxs("strong",{style:{color:"var(--gold)"},children:["#",o]})]}),e.jsxs("p",{style:{fontSize:"0.82rem",color:"var(--text-muted)",marginTop:"12px"},children:["Our team will contact you on ",e.jsxs("strong",{children:[r.split(" ")[0],"'s"]})," registered mobile number for further steps. Please keep your documents ready."]}),e.jsxs("div",{style:{display:"flex",gap:"12px",justifyContent:"center",flexWrap:"wrap",marginTop:"28px"},children:[e.jsxs("button",{className:"btn-primary",onClick:()=>c("/admission"),children:[e.jsx("i",{className:"fa-solid fa-arrow-left"})," Back to Admission"]}),e.jsxs("button",{className:"btn-outline",onClick:()=>c("/"),children:[e.jsx("i",{className:"fa-solid fa-house"})," Home"]})]})]})})}const x0=[{code:"BBA",full:"Bachelor of Business Administration",tagline:"Lead. Manage. Innovate.",icon:"fa-solid fa-briefcase",color:"#f59e0b",colorDark:"#d97706",colorLight:"#fef3c7",accent:"#92400e",tag:"Management",seats:120,duration:"4 Years · 8 Semesters",eligibility:"10+2 pass in any stream from a recognised board",overview:"The BBA program provides a solid foundation in management, business principles, and entrepreneurship. It blends theoretical concepts with practical applications to prepare students for leadership roles in the corporate world.",highlights:["Core subjects in Marketing, Finance, and Human Resource Management","Case studies, business simulations, and industry projects","Regular seminars, workshops, and industry visits","Focus on communication, leadership, and decision-making skills"],career:["Business Manager","Marketing Executive","HR Specialist","Entrepreneur","MBA Studies"],syllabus:"/CTC NEW REACT WEBSITE/images/REGULARCOURSES/BBA.pdf"},{code:"BCA",full:"Bachelor of Computer Applications",tagline:"Code. Build. Deploy.",icon:"fa-solid fa-laptop-code",color:"#3b82f6",colorDark:"#2563eb",colorLight:"#eff6ff",accent:"#1e3a8a",tag:"Technology",seats:120,duration:"4 Years · 8 Semesters",eligibility:"10+2 pass in any stream with Mathematics / Statistics as one subject",overview:"BCA is an undergraduate program focused on computer applications and IT skills. It prepares students to work in the software industry with a strong foundation in programming, databases, and system design.",highlights:["Programming in C, C++, Java, Python","Database Management, Web Development & Software Engineering","Exposure to cloud computing, networking & cybersecurity","Hands-on training via projects, coding competitions & workshops"],career:["Software Developer","Web Designer","Database Admin","System Analyst","MCA Studies"],syllabus:"/CTC NEW REACT WEBSITE/images/REGULARCOURSES/BCA.pdf"},{code:"B.Sc CS",full:"B.Sc. Computer Science (Honours)",tagline:"Analyse. Compute. Discover.",icon:"fa-solid fa-microchip",color:"#10b981",colorDark:"#059669",colorLight:"#ecfdf5",accent:"#064e3b",tag:"Science",seats:128,duration:"4 Years · 8 Semesters",eligibility:"10+2 pass with Science stream (compulsory)",overview:"This program offers in-depth knowledge of computer science fundamentals and advanced concepts. It emphasises analytical skills, algorithmic thinking, and research-oriented study.",highlights:["Data Structures, Algorithms & Operating Systems","Computer Networks, AI, Compiler Design, Software Development","Practical lab sessions and mini-projects every semester","Research and innovation-driven learning environment"],career:["Software Engineer","System Admin","Research Associate","M.Sc./MCA Studies"],syllabus:"/CTC NEW REACT WEBSITE/images/REGULARCOURSES/Bsc.pdf"},{code:"B.Sc DS",full:"B.Sc. Computer Science (Data Science)",tagline:"Predict. Analyse. Transform.",icon:"fa-solid fa-chart-line",color:"#8b5cf6",colorDark:"#7c3aed",colorLight:"#f5f3ff",accent:"#4c1d95",tag:"Data Science",seats:30,duration:"4 Years · 8 Semesters",eligibility:"10+2 pass with Science stream — Mathematics is compulsory",overview:"Designed for students aspiring to build a career in Data Science and AI. Focuses on data analytics, machine learning, and big data technologies for tech-driven industries.",highlights:["Python, R, Statistics & Data Visualization","Machine Learning, Deep Learning & Artificial Intelligence","Big Data Analytics & Cloud Computing concepts","Industry-based projects, internships & live case studies"],career:["Data Analyst","ML Engineer","BI Developer","AI Researcher","M.Sc. DS Studies"],syllabus:"/CTC NEW REACT WEBSITE/images/REGULARCOURSES/BscDsc.pdf"}],b0=[{code:"MCA",full:"Master of Computer Applications",tagline:"Innovate. Engineer. Lead.",icon:"fa-solid fa-code",color:"#06b6d4",colorDark:"#0891b2",colorLight:"#ecfeff",accent:"#164e63",tag:"PG · Technology",seats:60,duration:"2 Years · 4 Semesters",eligibility:"OJEE Mandatory – OJEE 2026 Rank Card Holder. Passed any Bachelor's degree (e.g. B.E./B.Tech/BSC/B.Com/BA/BCA etc.) with Mathematics and obtained at least 50% marks (45% for reserved category candidates) in the qualifying examination.",overview:"The MCA program is a postgraduate course designed to equip students with advanced knowledge of computer applications, software engineering, and modern technologies. It builds on undergraduate fundamentals to prepare professionals for senior IT roles.",highlights:["Advanced programming: Java, Python, .NET & Cloud Technologies","Software Engineering, System Design & Architecture","AI, Machine Learning, Data Science & Cybersecurity modules","Industry internships, live projects & research work"],career:["Software Architect","Senior Developer","IT Consultant","Project Manager","Research Scientist"],syllabus:null},{code:"MBA",full:"Master of Business Administration",tagline:"Strategise. Lead. Transform.",icon:"fa-solid fa-chart-pie",color:"#ec4899",colorDark:"#db2777",colorLight:"#fdf2f8",accent:"#831843",tag:"PG · Management",seats:60,duration:"2 Years · 4 Semesters",eligibility:"OJEE/CAT/MAT/ATMA-2026 Rank Card Holder. Passed any Bachelor's degree (e.g. any stream/Graduation) with at least 50% aggregate marks (45% for reserved category candidates) in the last qualifying examination.",overview:"The MBA program is a flagship postgraduate management degree that prepares students for leadership roles in business, finance, marketing, and operations. It combines strategic thinking with real-world application.",highlights:["Specialisations: Finance, Marketing, HR & Operations Management","Case study methodology, business simulations & live projects","Leadership development, communication & entrepreneurship skills","Industry interaction, guest lectures & national-level seminars"],career:["Business Strategist","Marketing Manager","Finance Analyst","HR Director","Entrepreneur"],syllabus:null}];function y0(r,s=1500,o=!1){const[c,m]=v.useState(0);return v.useEffect(()=>{if(!o)return;let p=null;const u=b=>{p||(p=b);const h=Math.min((b-p)/s,1);m(Math.floor(h*r)),h<1&&requestAnimationFrame(u)};requestAnimationFrame(u)},[r,s,o]),c}const v0=[{value:6,label:"Programs",suffix:""},{value:458,label:"Total Seats",suffix:"+"},{value:2,label:"PG Programs",suffix:""},{value:100,label:"Placement Assist",suffix:"%"}];function j0(){const r=v.useRef(null),[s,o]=v.useState(!1);return v.useEffect(()=>{const c=new IntersectionObserver(([m])=>{m.isIntersecting&&o(!0)},{threshold:.3});return r.current&&c.observe(r.current),()=>c.disconnect()},[]),e.jsx("div",{ref:r,className:"rc2-stats-row",children:v0.map((c,m)=>{const p=y0(c.value,1400,s);return e.jsxs("div",{className:"rc2-stat",style:{animationDelay:`${m*.1}s`},children:[e.jsxs("span",{className:"rc2-stat-num",children:[p,c.suffix]}),e.jsx("span",{className:"rc2-stat-label",children:c.label})]},m)})})}function Pp({course:r,index:s}){const[o,c]=v.useState(!1),m=v.useRef(null),[p,u]=v.useState(!1);return v.useEffect(()=>{const b=new IntersectionObserver(([h])=>{h.isIntersecting&&u(!0)},{threshold:.1});return m.current&&b.observe(m.current),()=>b.disconnect()},[]),e.jsxs("div",{ref:m,className:`rc2-card${p?" rc2-card--visible":""}`,style:{"--card-color":r.color,"--card-dark":r.colorDark,"--card-light":r.colorLight,animationDelay:`${s*.1}s`},children:[e.jsxs("div",{className:"rc2-card-header",style:{background:`linear-gradient(135deg, ${r.colorDark} 0%, ${r.color} 100%)`},children:[e.jsx("div",{className:"rc2-card-header-bg"}),e.jsx("div",{className:"rc2-card-tag",children:r.tag}),e.jsx("i",{className:`${r.icon} rc2-card-icon`}),e.jsx("h3",{className:"rc2-card-code",children:r.code}),e.jsx("p",{className:"rc2-card-full",children:r.full}),e.jsx("p",{className:"rc2-card-tagline",children:r.tagline}),e.jsxs("div",{className:"rc2-card-pills",children:[e.jsxs("span",{children:[e.jsx("i",{className:"fa-regular fa-clock"})," ",r.duration]}),e.jsxs("span",{children:[e.jsx("i",{className:"fa-solid fa-users"})," ",r.seats," Seats"]})]})]}),e.jsx("div",{className:"rc2-card-quick",children:e.jsxs("div",{className:"rc2-card-quick-item",children:[e.jsx("i",{className:"fa-solid fa-check-circle",style:{color:r.color}}),e.jsx("span",{children:r.eligibility})]})}),e.jsxs("button",{className:"rc2-card-toggle",style:{"--btn-color":r.color},onClick:()=>c(b=>!b),children:[e.jsx("span",{children:o?"Show Less":"Explore Course"}),e.jsx("i",{className:`fa-solid fa-chevron-${o?"up":"down"}`})]}),e.jsx("div",{className:`rc2-card-body${o?" rc2-card-body--open":""}`,children:e.jsxs("div",{className:"rc2-card-body-inner",children:[e.jsxs("div",{className:"rc2-section",children:[e.jsxs("h4",{children:[e.jsx("i",{className:"fa-solid fa-circle-info",style:{color:r.color}})," Overview"]}),e.jsx("p",{children:r.overview})]}),e.jsxs("div",{className:"rc2-section",children:[e.jsxs("h4",{children:[e.jsx("i",{className:"fa-solid fa-star",style:{color:r.color}})," Program Highlights"]}),e.jsx("ul",{className:"rc2-highlights",children:r.highlights.map((b,h)=>e.jsxs("li",{children:[e.jsx("span",{className:"rc2-bullet",style:{background:r.color}}),b]},h))})]}),e.jsxs("div",{className:"rc2-section",children:[e.jsxs("h4",{children:[e.jsx("i",{className:"fa-solid fa-rocket",style:{color:r.color}})," Career Paths"]}),e.jsx("div",{className:"rc2-career-tags",children:r.career.map((b,h)=>e.jsx("span",{className:"rc2-career-tag",style:{"--tc":r.color,"--tl":r.colorLight},children:b},h))})]}),r.syllabus&&e.jsxs("a",{href:r.syllabus,download:!0,className:"rc2-syllabus-btn",style:{background:`linear-gradient(135deg, ${r.colorDark}, ${r.color})`},children:[e.jsx("i",{className:"fa-solid fa-file-pdf"}),"Download Syllabus"]})]})})]})}function S0(){return e.jsxs("div",{className:"rc2-page",children:[e.jsx(Ta,{title:"Courses Offered | AI, Data Science, BCA, BBA, MBA | CTC Angul",description:"Explore our wide range of courses at CTC. We are the best Bsc.CS(H), BCA, BBA and BSc.DS(H) college in Odisha, also offering top MBA and MCA programs.",keywords:"BBA college angul, BCA college angul, MBA college angul, MCA college angul, top Data Science course odisha, top AI course odisha, best Bsc.CS(H) college odisha, engineering courses odisha",canonical:"/academics/regular"}),e.jsx("style",{children:`
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

                /* ── CATEGORY HEADERS ── */
                .rc2-category-header {
                    max-width: 1400px; margin: 0 auto 32px; padding: 0 0 0 4px;
                    display: flex; flex-direction: column; gap: 6px;
                }
                .rc2-category-badge {
                    display: inline-flex; align-items: center; gap: 10px;
                    padding: 10px 22px; border-radius: 40px;
                    font-family: 'Poppins', sans-serif; font-size: 0.9rem; font-weight: 800;
                    width: fit-content;
                }
                .rc2-badge-ug {
                    background: linear-gradient(135deg, #eff6ff, #dbeafe);
                    color: #1d4ed8; border: 2px solid #bfdbfe;
                }
                .rc2-badge-pg {
                    background: linear-gradient(135deg, #fdf4ff, #fae8ff);
                    color: #a21caf; border: 2px solid #e879f9;
                }
                .rc2-category-desc {
                    font-size: 0.82rem; color: #64748b; font-weight: 500; margin: 0; padding-left: 4px;
                }
                .rc2-courses-grid--pg {
                    grid-template-columns: repeat(2, 1fr) !important;
                    max-width: 900px !important;
                    margin-left: auto !important;
                    margin-right: auto !important;
                }

                /* ── RESPONSIVE ── */
                @media (max-width: 1100px) {
                    .rc2-courses-grid { grid-template-columns: repeat(2, 1fr); }
                    .rc2-courses-grid--pg { grid-template-columns: repeat(2, 1fr) !important; }
                    .rc2-features-grid { grid-template-columns: repeat(3, 1fr); }
                }
                @media (max-width: 768px) {
                    .rc2-stats-row { grid-template-columns: repeat(2, 1fr); margin-top: 20px; }
                    .rc2-intro-inner { padding: 36px 24px; }
                    .rc2-courses-grid { grid-template-columns: 1fr; }
                    .rc2-courses-grid--pg { grid-template-columns: 1fr !important; }
                    .rc2-features-grid { grid-template-columns: 1fr 1fr; }
                    .rc2-hero { padding-top: 64px; }
                }
                @media (max-width: 480px) {
                    .rc2-stats-row { grid-template-columns: repeat(2,1fr); }
                    .rc2-features-grid { grid-template-columns: 1fr; }
                    .rc2-cta h2 { font-size: 1.6rem; }
                }
            `}),e.jsxs("section",{className:"rc2-hero",children:[e.jsx("div",{className:"rc2-hero-orb rc2-hero-orb-1"}),e.jsx("div",{className:"rc2-hero-orb rc2-hero-orb-2"}),e.jsxs("div",{className:"rc2-hero-content",children:[e.jsxs("div",{className:"rc2-hero-left",children:[e.jsxs("div",{className:"rc2-hero-chip",children:[e.jsx("i",{className:"fa-solid fa-graduation-cap"}),"Academic Programs"]}),e.jsxs("h1",{children:["Academic Programs at the",e.jsx("br",{}),e.jsx("em",{children:"Best College in Odisha"})]}),e.jsx("p",{children:"At Creative Techno College, our curriculum is designed for the future. For students passionate about technology, we offer the top Data Science course in Odisha and the top AI course in Odisha. For those aiming for business and applications, we are the best Bsc.CS(H), BCA, BBA and BSc.DS(H) college in Angul."})]}),e.jsx("div",{className:"rc2-hero-right",children:e.jsxs("div",{className:"rc2-hero-btns",children:[e.jsxs(fe,{to:"/admission/apply",className:"rc2-btn-primary",children:[e.jsx("i",{className:"fa-solid fa-paper-plane"})," Apply for 2026–27"]}),e.jsxs("a",{href:"#courses",className:"rc2-btn-outline",children:[e.jsx("i",{className:"fa-solid fa-magnifying-glass"})," Explore Courses"]})]})})]})]}),e.jsx("div",{className:"rc2-stats-wrap",children:e.jsx(j0,{})}),e.jsx("section",{className:"rc2-intro",children:e.jsxs("div",{className:"rc2-intro-inner",children:[e.jsx("div",{className:"rc2-intro-icon",children:"🎓"}),e.jsxs("h2",{children:["Technology & Management: ",e.jsx("span",{children:"Top MBA, MCA, AI & Data Science Courses"})]}),e.jsxs("p",{style:{marginBottom:"16px"},children:["For postgraduates seeking leadership roles or advanced technical expertise, CTC is highly ranked as the ",e.jsx("strong",{children:"top MBA and MCA College in Odisha"}),"."]}),e.jsx("p",{children:"Our engineering courses and degree programs are built on a foundation of skill development and practical application, guaranteeing that our graduates are ready to excel in the global workforce."})]})}),e.jsxs("section",{className:"rc2-courses-section",id:"courses",children:[e.jsxs("div",{className:"rc2-section-heading",children:[e.jsx("div",{className:"rc2-section-pill",children:"🎯 Our Programs"}),e.jsxs("h2",{children:["Courses ",e.jsx("span",{children:"Offered"})]}),e.jsx("p",{children:"Click on any course card to explore eligibility, highlights, career paths and download the full syllabus."})]}),e.jsxs("div",{className:"rc2-category-header",children:[e.jsxs("span",{className:"rc2-category-badge rc2-badge-ug",children:[e.jsx("i",{className:"fa-solid fa-user-graduate"})," Undergraduate Programs (UG)"]}),e.jsx("p",{className:"rc2-category-desc",children:"4-Year Degree Programs · 8 Semesters · Affiliated to Utkal University"})]}),e.jsx("div",{className:"rc2-courses-grid",children:x0.map((r,s)=>e.jsx(Pp,{course:r,index:s},r.code))}),e.jsxs("div",{className:"rc2-category-header",style:{marginTop:"60px"},children:[e.jsxs("span",{className:"rc2-category-badge rc2-badge-pg",children:[e.jsx("i",{className:"fa-solid fa-award"})," Postgraduate Programs (PG)"]}),e.jsx("p",{className:"rc2-category-desc",children:"2-Year Degree Programs · 4 Semesters · Affiliated to BPUT"})]}),e.jsx("div",{className:"rc2-courses-grid rc2-courses-grid--pg",children:b0.map((r,s)=>e.jsx(Pp,{course:r,index:s},r.code))})]}),e.jsx("section",{className:"rc2-features",children:e.jsxs("div",{className:"rc2-features-inner",children:[e.jsxs("h2",{className:"rc2-features-title",children:["Why choose ",e.jsx("span",{children:"Creative Techno College?"})]}),e.jsx("div",{className:"rc2-features-grid",children:[{icon:"fa-solid fa-building-columns",title:"AICTE Approved",desc:"Nationally recognised by All India Council for Technical Education."},{icon:"fa-solid fa-graduation-cap",title:"Utkal University",desc:"Affiliated to the prestigious Utkal University, Odisha."},{icon:"fa-solid fa-handshake",title:"100% Placement Assist",desc:"Dedicated placement cell with 100+ recruiting partners."},{icon:"fa-solid fa-flask",title:"Practical Learning",desc:"State-of-the-art labs, live projects and industry internships."},{icon:"fa-solid fa-globe",title:"Industry Connect",desc:"Regular seminars, workshops and expert guest lectures."}].map((r,s)=>e.jsxs("div",{className:"rc2-feature",children:[e.jsx("i",{className:`${r.icon} rc2-feature-icon`}),e.jsx("h3",{children:r.title}),e.jsx("p",{children:r.desc})]},s))})]})})]})}const w0={Brain:r=>e.jsxs("svg",{viewBox:"0 0 24 24",width:"24",height:"24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",...r,children:[e.jsx("path",{d:"M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.04-2.44v-10A2.5 2.5 0 0 1 7.5 4.5h2"}),e.jsx("path",{d:"M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.04-2.44v-10A2.5 2.5 0 0 0 16.5 4.5h-2"})]}),Chart:r=>e.jsxs("svg",{viewBox:"0 0 24 24",width:"24",height:"24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",...r,children:[e.jsx("path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}),e.jsx("path",{d:"m7 15 4-4 3 3 5-5"})]}),Bullhorn:r=>e.jsxs("svg",{viewBox:"0 0 24 24",width:"24",height:"24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",...r,children:[e.jsx("path",{d:"M18 8A6 6 0 0 1 18 16M4 8h2l5-3v14l-5-3H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2Z"}),e.jsx("path",{d:"M14 8v8"})]}),Database:r=>e.jsxs("svg",{viewBox:"0 0 24 24",width:"24",height:"24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",...r,children:[e.jsx("ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}),e.jsx("path",{d:"M3 5v14c0 1.5 4 3 9 3s9-1.5 9-3V5"}),e.jsx("line",{x1:"3",x2:"21",y1:"12",y2:"12"}),e.jsx("line",{x1:"3",x2:"21",y1:"8",y2:"8"})]}),Link:r=>e.jsxs("svg",{viewBox:"0 0 24 24",width:"24",height:"24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",...r,children:[e.jsx("path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"}),e.jsx("path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"})]}),PieChart:r=>e.jsxs("svg",{viewBox:"0 0 24 24",width:"24",height:"24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",...r,children:[e.jsx("path",{d:"M21.21 15.89A10 10 0 1 1 8 2.83"}),e.jsx("path",{d:"M22 12A10 10 0 0 0 12 2v10h10Z"})]}),Store:r=>e.jsxs("svg",{viewBox:"0 0 24 24",width:"24",height:"24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",...r,children:[e.jsx("path",{d:"M3 9h18l-2 10H5L3 9Z"}),e.jsx("path",{d:"M6 5h12l2 4"}),e.jsx("rect",{x:"8",y:"13",width:"8",height:"6",rx:"1"})]}),Robot:r=>e.jsxs("svg",{viewBox:"0 0 24 24",width:"24",height:"24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",...r,children:[e.jsx("rect",{x:"3",y:"11",width:"18",height:"10",rx:"2"}),e.jsx("circle",{cx:"9",cy:"16",r:"1",fill:"currentColor"}),e.jsx("circle",{cx:"15",cy:"16",r:"1",fill:"currentColor"}),e.jsx("path",{d:"M8 5h8l2 6H6l2-6Z"}),e.jsx("line",{x1:"12",x2:"12",y1:"5",y2:"2"})]}),FileText:r=>e.jsxs("svg",{viewBox:"0 0 24 24",width:"24",height:"24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",...r,children:[e.jsx("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Z"}),e.jsx("path",{d:"M14 2v6h6"}),e.jsx("line",{x1:"16",x2:"8",y1:"13",y2:"13"}),e.jsx("line",{x1:"16",x2:"8",y1:"17",y2:"17"}),e.jsx("polyline",{points:"10 9 9 9 8 9"})]}),Code:r=>e.jsxs("svg",{viewBox:"0 0 24 24",width:"24",height:"24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",...r,children:[e.jsx("polyline",{points:"16 18 22 12 16 6"}),e.jsx("polyline",{points:"8 6 2 12 8 18"})]}),Users:r=>e.jsxs("svg",{viewBox:"0 0 24 24",width:"24",height:"24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",...r,children:[e.jsx("path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}),e.jsx("circle",{cx:"9",cy:"7",r:"4"}),e.jsx("path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}),e.jsx("path",{d:"M16 3.13a4 4 0 0 1 0 7.75"})]}),Python:r=>e.jsxs("svg",{viewBox:"0 0 24 24",width:"24",height:"24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",...r,children:[e.jsx("ellipse",{cx:"12",cy:"7.5",rx:"6",ry:"3"}),e.jsx("path",{d:"M6 10.5v6c0 1.5 2.7 3 6 3s6-1.5 6-3v-6"}),e.jsx("path",{d:"M6 13.5v3"}),e.jsx("path",{d:"M18 13.5v3"})]}),Rocket:r=>e.jsxs("svg",{viewBox:"0 0 24 24",width:"28",height:"28",fill:"none",stroke:"currentColor",strokeWidth:"1.5",...r,children:[e.jsx("path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09Z"}),e.jsx("path",{d:"M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2Z"}),e.jsx("path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"}),e.jsx("path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"})]}),Coins:r=>e.jsxs("svg",{viewBox:"0 0 24 24",width:"28",height:"28",fill:"none",stroke:"currentColor",strokeWidth:"1.5",...r,children:[e.jsx("circle",{cx:"12",cy:"12",r:"8"}),e.jsx("path",{d:"M8 8c2.5-2 5.5-2 8 0"}),e.jsx("path",{d:"M8 16c2.5 2 5.5 2 8 0"}),e.jsx("line",{x1:"12",x2:"12",y1:"4",y2:"20"})]}),Target:r=>e.jsxs("svg",{viewBox:"0 0 24 24",width:"28",height:"28",fill:"none",stroke:"currentColor",strokeWidth:"1.5",...r,children:[e.jsx("circle",{cx:"12",cy:"12",r:"10"}),e.jsx("circle",{cx:"12",cy:"12",r:"6"}),e.jsx("circle",{cx:"12",cy:"12",r:"2",fill:"currentColor"})]}),Bolt:r=>e.jsx("svg",{viewBox:"0 0 24 24",width:"28",height:"28",fill:"none",stroke:"currentColor",strokeWidth:"1.5",...r,children:e.jsx("path",{d:"M13 2L3 14h8l-2 8 10-12h-8l2-8z"})}),CheckCircle:r=>e.jsxs("svg",{viewBox:"0 0 24 24",width:"20",height:"20",fill:"none",stroke:"currentColor",strokeWidth:"2",...r,children:[e.jsx("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),e.jsx("polyline",{points:"22 4 12 14.01 9 11.01"})]}),ArrowRight:r=>e.jsxs("svg",{viewBox:"0 0 24 24",width:"18",height:"18",fill:"none",stroke:"currentColor",strokeWidth:"2",...r,children:[e.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),e.jsx("polyline",{points:"12 5 19 12 12 19"})]}),Mail:r=>e.jsxs("svg",{viewBox:"0 0 24 24",width:"20",height:"20",fill:"none",stroke:"currentColor",strokeWidth:"2",...r,children:[e.jsx("rect",{x:"2",y:"4",width:"20",height:"16",rx:"2"}),e.jsx("path",{d:"m22 7-10 7L2 7"})]}),Clock:r=>e.jsxs("svg",{viewBox:"0 0 24 24",width:"16",height:"16",fill:"none",stroke:"currentColor",strokeWidth:"2",...r,children:[e.jsx("circle",{cx:"12",cy:"12",r:"10"}),e.jsx("polyline",{points:"12 6 12 12 16 14"})]}),Level:r=>e.jsxs("svg",{viewBox:"0 0 24 24",width:"16",height:"16",fill:"none",stroke:"currentColor",strokeWidth:"2",...r,children:[e.jsx("path",{d:"M2 20h20"}),e.jsx("path",{d:"M4 16l2-8 2 8"}),e.jsx("path",{d:"M12 16l2-8 2 8"}),e.jsx("path",{d:"M20 16l2-8 2 8"})]})},C0=[{title:"Machine Learning",link:"https://creativecollege.in/ML/Registration/index.html",desc:"Learn algorithms that allow computers to learn from data without explicit programming. Build real ML models.",icon:"Brain",gradient:"linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",status:"upcoming",duration:"45 Hours",level:"Intermediate",tags:["Python","Scikit-learn","TensorFlow"]},{title:"Data Science",desc:"Statistical and computational techniques to extract insights from data — cleaning, visualization, modeling and more.",icon:"Chart",gradient:"linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)",status:"completed",duration:"50 Hours",level:"Beginner to Advanced",tags:["Python","Pandas","Matplotlib"]},{title:"Digital Marketing",desc:"Promote brands to connect with customers using the internet — SEO, social media, email and web advertising.",icon:"Bullhorn",gradient:"linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",status:"completed",duration:"35 Hours",level:"Beginner",tags:["SEO","Google Ads","Meta Ads"]}],Ip=[{title:"Data Science",icon:"Database",gradient:"linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",status:"completed",duration:"50 hrs"},{title:"Affiliate Marketing",icon:"Link",gradient:"linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",status:"completed",duration:"25 hrs"},{title:"Power BI",icon:"PieChart",gradient:"linear-gradient(135deg, #fa709a 0%, #fee140 100%)",status:"completed",duration:"30 hrs"},{title:"Retail Marketing",icon:"Store",gradient:"linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)",status:"upcoming",duration:"28 hrs"},{title:"Artificial Intelligence",icon:"Robot",gradient:"linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",status:"upcoming",duration:"55 hrs"},{title:"Digital Marketing",icon:"Bullhorn",gradient:"linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",status:"completed",duration:"35 hrs"},{title:"HR Documentation",icon:"FileText",gradient:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",status:"upcoming",duration:"22 hrs"},{title:"Advance Java",icon:"Code",gradient:"linear-gradient(135deg, #f77062 0%, #fe5196 100%)",status:"upcoming",duration:"60 hrs"},{title:"HR Professionals",icon:"Users",gradient:"linear-gradient(135deg, #96fbc4 0%, #f9f586 100%)",status:"upcoming",duration:"30 hrs"},{title:"Full Stack Python",icon:"Python",gradient:"linear-gradient(135deg, #30cfd0 0%, #667eea 100%)",status:"upcoming",duration:"75 hrs"}],A0=[{icon:"Rocket",title:"Expand Career Horizons",desc:"Gain in-demand skills that complement your degree and open new career opportunities."},{icon:"Coins",title:"Cost-Effective Learning",desc:"More affordable than traditional courses while delivering equivalent or better outcomes."},{icon:"Target",title:"Industry-Relevant Skills",desc:"Curriculum designed in sync with current industry needs and employer demands."},{icon:"Bolt",title:"Flexible Schedule",desc:"Programs are designed to fit alongside your regular coursework seamlessly."}],Bp=({status:r})=>{const s=r==="completed";return e.jsxs("span",{className:`status-badge ${s?"completed":"upcoming"}`,children:[e.jsx("span",{className:"status-dot"}),s?"Completed":"Coming Soon"]})},Et=({name:r,className:s="",...o})=>{const c=w0[r];return c?e.jsx(c,{className:`icon-svg ${s}`,...o}):null};function k0(){const[r,s]=v.useState("all"),o=r==="all"?Ip:Ip.filter(c=>c.status===r);return e.jsxs("div",{className:"vac-page",children:[e.jsx("style",{children:`
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
      `}),e.jsx("section",{className:"vac-hero",children:e.jsxs("div",{className:"vac-hero-content",children:[e.jsxs("div",{className:"vac-hero-left",children:[e.jsxs("div",{className:"vac-hero-chip",children:[e.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:e.jsx("path",{d:"M13 2L3 14h8l-2 8 10-12h-8l2-8z"})}),"Learning Management System"]}),e.jsxs("h1",{children:["Supercharge Your Skills with",e.jsx("br",{}),e.jsx("em",{children:"Value‑Added Courses"})]}),e.jsx("p",{children:"Industry‑relevant programs designed to enhance your career prospects and make you stand out in today's competitive job market."})]}),e.jsx("div",{className:"vac-hero-right",children:e.jsx("div",{className:"vac-hero-stats",children:["10+ Courses","Certificate Programs","Industry Experts","Live Projects"].map((c,m)=>e.jsxs("div",{className:"vac-hero-stat-item",children:[e.jsx(Et,{name:"CheckCircle",className:"check",width:18,height:18}),c]},m))})})]})}),e.jsxs("section",{className:"vac-section vac-section-light",children:[e.jsxs("div",{className:"vac-heading",children:[e.jsx("span",{className:"pill",children:"🔥 Featured Programs"}),e.jsxs("h2",{children:["Our Current ",e.jsx("span",{className:"gradient-text",children:"Programs"})]}),e.jsx("p",{children:"Flagship value‑added programs with real industry outcomes and hands‑on learning."})]}),e.jsx("div",{className:"vac-grid-3",children:C0.map((c,m)=>e.jsxs("div",{className:"vac-card-featured",children:[e.jsxs("div",{className:"vac-card-media",style:{background:c.gradient},children:[e.jsx(Et,{name:c.icon,className:"icon-large"}),e.jsx(Bp,{status:c.status}),e.jsx("h3",{children:c.title}),e.jsx("p",{children:c.desc}),e.jsx("div",{className:"vac-tags",children:c.tags.map((p,u)=>e.jsx("span",{className:"vac-tag",children:p},u))})]}),e.jsxs("div",{className:"vac-card-footer",children:[e.jsxs("div",{className:"vac-meta",children:[e.jsxs("span",{children:[e.jsx(Et,{name:"Clock"})," ",c.duration]}),e.jsxs("span",{children:[e.jsx(Et,{name:"Level"})," ",c.level]})]}),c.link?e.jsxs("a",{href:c.link,target:"_blank",rel:"noopener noreferrer",className:"vac-btn-outline",children:[c.status==="completed"?"View Details":"Register"," ",e.jsx(Et,{name:"ArrowRight"})]}):e.jsxs(fe,{to:"/contacts",className:"vac-btn-outline",children:[c.status==="completed"?"View Details":"Register"," ",e.jsx(Et,{name:"ArrowRight"})]})]})]},m))})]}),e.jsxs("section",{className:"vac-section vac-section-dark",children:[e.jsxs("div",{className:"vac-heading",children:[e.jsx("span",{className:"pill",style:{background:"rgba(255,255,255,0.1)",color:"#fff",borderColor:"rgba(255,255,255,0.2)"},children:"📚 More Courses"}),e.jsxs("h2",{children:["Additional ",e.jsx("span",{className:"gradient-text",children:"Learning Paths"})]}),e.jsx("p",{children:"Browse our full catalog of skill‑building courses across technology, business, and management."})]}),e.jsx("div",{className:"vac-filter-bar",children:[["all","All Courses"],["completed","Completed"],["upcoming","Upcoming"]].map(([c,m])=>e.jsx("button",{className:`vac-filter-btn ${r===c?"active":""}`,onClick:()=>s(c),children:m},c))}),e.jsx("div",{className:"vac-grid-mini",children:o.map((c,m)=>e.jsxs("div",{className:"vac-card-mini",children:[e.jsx("div",{className:"vac-mini-top",style:{background:c.gradient},children:e.jsx(Et,{name:c.icon})}),e.jsxs("div",{className:"vac-mini-body",children:[e.jsx("h4",{children:c.title}),e.jsxs("div",{className:"vac-mini-row",children:[e.jsxs("span",{className:"vac-mini-duration",children:[e.jsx(Et,{name:"Clock"})," ",c.duration]}),e.jsx(Bp,{status:c.status})]})]})]},m))})]}),e.jsx("section",{className:"vac-section vac-section-light",children:e.jsxs("div",{className:"vac-split",children:[e.jsxs("div",{className:"vac-split-text",children:[e.jsx("span",{className:"pill",children:"💡 Why Join?"}),e.jsxs("h2",{children:["Advantages of Learning ",e.jsx("span",{className:"gradient-text",children:"Extra Skills"})," During Graduation"]}),e.jsx("p",{children:"Build skills that open new doors, make you more employable, and give you a competitive edge in the professional world."}),e.jsx("ul",{className:"vac-checklist",children:["Increased job prospects and wider career horizons","Learn industry tools, techniques & in‑demand languages","More cost‑effective than traditional certification schools","Keep polishing existing skills alongside your degree"].map((c,m)=>e.jsxs("li",{children:[e.jsx(Et,{name:"CheckCircle"})," ",c]},m))})]}),e.jsx("div",{className:"vac-video-embed",children:e.jsx("iframe",{src:"https://www.youtube.com/embed/gUulJAxFuVg?autoplay=0",title:"Value Added Courses",allow:"encrypted-media; picture-in-picture",allowFullScreen:!0})})]})}),e.jsxs("section",{className:"vac-section vac-section-dark",children:[e.jsx("div",{className:"vac-heading",children:e.jsxs("h2",{children:["What You'll ",e.jsx("span",{className:"gradient-text",children:"Gain"})]})}),e.jsx("div",{className:"vac-grid-4",children:A0.map((c,m)=>e.jsxs("div",{className:"vac-adv-card",children:[e.jsx(Et,{name:c.icon}),e.jsx("h3",{children:c.title}),e.jsx("p",{children:c.desc})]},m))})]})]})}const N0=[{title:"Soft Skills Development",short:"Communication & Leadership",desc:"Build strong communication skills, a magnetic personality, leadership qualities, and interpersonal abilities that employers look for.",icon:"fa-solid fa-comments",color:"#2dd4bf",colorBg:"linear-gradient(135deg, #2dd4bf 0%, #06b6d4 100%)",points:["Public Speaking & Presentation","Team Collaboration & Conflict Resolution","Professional Etiquette & Body Language"]},{title:"Aptitude Training",short:"Quantitative & Logical Reasoning",desc:"Master quantitative aptitude, logical reasoning, and analytical skills for placement drives, competitive exams, and interviews.",icon:"fa-solid fa-calculator",color:"#f59e0b",colorBg:"linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)",points:["Number Systems & Data Interpretation","Verbal & Non-Verbal Reasoning","Mock Tests & Placement Papers"]},{title:"Technical Workshops",short:"Hands-on Technology Sessions",desc:"Deep-dive into the latest technologies through practical workshops, coding competitions, and real-world technical projects.",icon:"fa-solid fa-screwdriver-wrench",color:"#8b5cf6",colorBg:"linear-gradient(135deg, #8b5cf6 0%, #a78bfa 100%)",points:["Hackathons & Coding Competitions","Open-Source Contributions","Industry-Standard Tool Training"]},{title:"Industry Visits",short:"Real-World Exposure",desc:"Step into the real world with organised visits to IT companies, manufacturing plants, and leading industries.",icon:"fa-solid fa-industry",color:"#ec4899",colorBg:"linear-gradient(135deg, #ec4899 0%, #f43f5e 100%)",points:["IT Company Visits","Interaction with Industry Leaders","Understanding Corporate Culture"]},{title:"Guest Lectures",short:"Learn from the Best",desc:"Regular talks by industry professionals, renowned entrepreneurs, and academic experts to broaden your professional perspective.",icon:"fa-solid fa-microphone-lines",color:"#14b8a6",colorBg:"linear-gradient(135deg, #14b8a6 0%, #06b6d4 100%)",points:["Entrepreneur & CEO Talks","Academic Research Sessions","Career Guidance Panels"]},{title:"Entrepreneurship Development",short:"Start & Scale Your Ideas",desc:"Learn to ideate, plan, and execute your own venture with training in business planning, startup fundamentals, and innovation.",icon:"fa-solid fa-rocket",color:"#f97316",colorBg:"linear-gradient(135deg, #f97316 0%, #fb923c 100%)",points:["Business Model Canvas","Startup Pitch & Funding Basics","Incubation & Mentorship Programs"]},{title:"Community Service",short:"Give Back, Grow Together",desc:"Participate in meaningful social outreach programs, environmental campaigns, and CSR activities that build character.",icon:"fa-solid fa-hand-holding-heart",color:"#10b981",colorBg:"linear-gradient(135deg, #10b981 0%, #34d399 100%)",points:["Rural Outreach Programs","Environmental Awareness Drives","Blood Donation & Health Camps"]},{title:"Sports & Fitness",short:"Compete & Stay Fit",desc:"Build teamwork, discipline, and a healthy body through annual sports events, fitness activities, and inter-college competitions.",icon:"fa-solid fa-trophy",color:"#3b82f6",colorBg:"linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)",points:["Annual Sports Meet","Indoor & Outdoor Games","Fitness & Wellness Programs"]}],T0=[{sem:"2nd Sem",activity:"Internship – Initial Exposure",color:"#2dd4bf"},{sem:"3rd Sem",activity:"Online Courses Begin",color:"#8b5cf6"},{sem:"4th Sem",activity:"Value Addition Activities",color:"#f97316"},{sem:"5th Sem",activity:"Advanced Online Courses",color:"#ec4899"},{sem:"6th Sem",activity:"Industry Internship",color:"#10b981"},{sem:"7th Sem",activity:"Minor Projects",color:"#3b82f6"},{sem:"8th Sem",activity:"Major Project (Capstone)",color:"#f59e0b"}];function E0({activity:r,index:s}){const[o,c]=v.useState(!1),m=v.useRef(null),[p,u]=v.useState(!1);return v.useEffect(()=>{const b=new IntersectionObserver(([h])=>{h.isIntersecting&&u(!0)},{threshold:.1});return m.current&&b.observe(m.current),()=>b.disconnect()},[]),e.jsxs("div",{ref:m,className:`ep2-card${p?" ep2-card--vis":""}`,style:{"--c":r.color,animationDelay:`${s*.08}s`},children:[e.jsxs("div",{className:"ep2-card-icon-bar",style:{background:r.colorBg},children:[e.jsx("i",{className:`${r.icon} ep2-big-icon`}),e.jsxs("div",{className:"ep2-card-header-text",children:[e.jsx("h3",{children:r.title}),e.jsx("p",{children:r.short})]})]}),e.jsxs("div",{className:"ep2-card-body",children:[e.jsx("p",{children:r.desc}),e.jsxs("button",{className:"ep2-toggle-btn",onClick:()=>c(b=>!b),children:[o?"Show Less":"See Details",e.jsx("i",{className:`fa-solid fa-chevron-${o?"up":"down"}`})]}),o&&e.jsx("ul",{className:"ep2-points",children:r.points.map((b,h)=>e.jsxs("li",{children:[e.jsx("i",{className:"fa-solid fa-check-circle"}),b]},h))})]})]})}function R0(){return e.jsxs("div",{className:"ep2-page",children:[e.jsx("style",{children:`
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
            `}),e.jsxs("section",{className:"ep2-hero",children:[e.jsxs("div",{className:"ep2-hero-orbs",children:[e.jsx("div",{className:"ep2-orb ep2-orb-1"}),e.jsx("div",{className:"ep2-orb ep2-orb-2"})]}),e.jsxs("div",{className:"ep2-hero-content",children:[e.jsxs("div",{className:"ep2-hero-left",children:[e.jsxs("div",{className:"ep2-hero-chip",children:[e.jsx("i",{className:"fa-solid fa-seedling"})," Holistic Development"]}),e.jsxs("h1",{children:["Enhancement Programs for",e.jsx("br",{}),e.jsx("em",{children:"All-Round Excellence"})]}),e.jsx("p",{children:"Beyond the classroom — structured programs that develop your personality, skills, and career readiness from Day 1 of graduation."})]}),e.jsx("div",{className:"ep2-hero-right",children:e.jsx("div",{className:"ep2-hero-badges",children:["Soft Skills","Aptitude Training","Industry Exposure","Entrepreneurship","Community Service"].map((r,s)=>e.jsxs("span",{className:"ep2-hero-badge",children:[e.jsx("i",{className:"fa-solid fa-circle-check",style:{color:"#ffcc00"}})," ",r]},s))})})]})]}),e.jsxs("section",{className:"ep2-timeline-section",children:[e.jsxs("div",{className:"ep2-section-heading",children:[e.jsx("div",{className:"ep2-section-pill",children:"📅 Structured Plan"}),e.jsxs("h2",{children:["Semester-wise ",e.jsx("span",{children:"Enhancement Roadmap"})]}),e.jsx("p",{children:"Every semester at CTC is designed with intentional activities to build your capabilities progressively over 4 years."})]}),e.jsx("div",{className:"ep2-timeline",children:T0.map((r,s)=>e.jsxs("div",{className:"ep2-tl-row",style:{animationDelay:`${s*.1}s`},children:[e.jsx("div",{className:"ep2-tl-dot",style:{background:r.color},children:r.sem.split(" ")[0]}),e.jsxs("div",{className:"ep2-tl-content",children:[e.jsxs("div",{children:[e.jsx("div",{className:"ep2-tl-sem",children:r.sem}),e.jsx("div",{className:"ep2-tl-act",children:r.activity})]}),e.jsx("i",{className:"fa-solid fa-chevron-right ep2-tl-arrow"})]})]},s))})]}),e.jsxs("section",{className:"ep2-activities-section",children:[e.jsxs("div",{className:"ep2-section-heading",children:[e.jsx("div",{className:"ep2-section-pill",children:"🎯 Programs"}),e.jsxs("h2",{children:["Our Enhancement ",e.jsx("span",{children:"Activities"})]}),e.jsx("p",{children:"Click on any card to see what skills you'll build through each program."})]}),e.jsx("div",{className:"ep2-grid",children:N0.map((r,s)=>e.jsx(E0,{activity:r,index:s},s))})]}),e.jsxs("section",{className:"ep2-table-section",children:[e.jsxs("div",{className:"ep2-section-heading",children:[e.jsx("div",{className:"ep2-section-pill",children:"📋 All Programs"}),e.jsxs("h2",{children:["Program ",e.jsx("span",{children:"Overview Table"})]}),e.jsx("p",{children:"A snapshot of activities planned across all 4 degree programs at Creative Techno College."})]}),e.jsx("div",{className:"ep2-table-wrap",children:e.jsxs("table",{className:"ep2-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Activity"}),e.jsx("th",{children:"BBA"}),e.jsx("th",{children:"BCA"}),e.jsx("th",{children:"B.Sc CS"}),e.jsx("th",{children:"B.Sc DS"})]})}),e.jsx("tbody",{children:[{act:"🗒️ Minor Projects",sems:["Every Sem","Every Sem","Every Sem","Every Sem"]},{act:"📚 Online Courses",sems:["3rd, 5th, 7th","3rd, 5th, 7th","3rd, 5th, 7th","3rd, 5th, 7th"]},{act:"💼 Internship",sems:["2nd, 4th, 6th","2nd, 4th, 6th","2nd, 4th, 6th","2nd, 4th, 6th"]},{act:"🎓 Major Project",sems:["8th Sem","8th Sem","8th Sem","8th Sem"]}].map((r,s)=>e.jsxs("tr",{children:[e.jsx("td",{children:r.act}),r.sems.map((o,c)=>e.jsx("td",{children:e.jsx("span",{className:"ep2-sem-chip",style:{background:["rgba(45,212,191,0.12)","rgba(139,92,246,0.12)","rgba(59,130,246,0.12)","rgba(245,158,11,0.12)"][c],color:["#0f766e","#7c3aed","#1d4ed8","#b45309"][c],border:`1px solid ${["rgba(45,212,191,0.3)","rgba(139,92,246,0.3)","rgba(59,130,246,0.3)","rgba(245,158,11,0.3)"][c]}`},children:o})},c))]},s))})]})})]})]})}function P0(){v.useEffect(()=>{const r=document.querySelectorAll(".rv"),s=new IntersectionObserver(o=>o.forEach(c=>{c.isIntersecting&&c.target.classList.add("visible")}),{threshold:.07});return r.forEach(o=>s.observe(o)),()=>s.disconnect()},[])}const I0=[{name:"Mr. Bhabani Shankar Sahoo",role:"Placement Head",img:"/CTC NEW REACT WEBSITE/images/OURTEAM/Bhabani Sir.jpg",icon:"fa-briefcase",color:"#0c2340"},{name:"Mr. Subhrajyoti Behera",role:"Activity Head",img:"/CTC NEW REACT WEBSITE/images/OURTEAM/Subhrajyoti Sir.jpg",icon:"fa-calendar-check",color:"#1a3a6b"}],B0=[{name:"Wipro",logo:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/wipro.png",color:"#8b2be2"},{name:"TCS",logo:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/tcs.jpg",color:"#0a2472"},{name:"LTI Mindtree",logo:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/lti.png",color:"#00aa44"},{name:"Cognizant",logo:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/cognizant.png",color:"#0066cc"},{name:"Infosys",logo:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/infosys.png",color:"#007acc"},{name:"Capgemini",logo:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/capgemini.png",color:"#0070ad"},{name:"Deloitte",logo:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/DELOITTE.jpeg",color:"#86bc25"}],M0=[{icon:"fa-rocket",title:"Enhance Employability",desc:"Equip students with the necessary knowledge and skills to secure employment in leading companies."},{icon:"fa-people-group",title:"Holistic Development",desc:"Foster both technical and soft skills to prepare students for every stage of the recruitment process."},{icon:"fa-industry",title:"Industry Readiness",desc:"Align training modules with current market demands and industry expectations."},{icon:"fa-door-open",title:"Inclusive Opportunities",desc:"Provide placement opportunities across a diverse range of companies, including MNCs and local firms."},{icon:"fa-arrows-rotate",title:"Continuous Improvement",desc:"Regularly update and refine the training program based on feedback and evolving market trends."}],z0=[{img:"/CTC NEW REACT WEBSITE/images/DevelopmentProgram/Workshop.jpg",title:"Workshops",desc:"Hands-on sessions for skill building."},{img:"/CTC NEW REACT WEBSITE/images/DevelopmentProgram/Internship.jpg",title:"Internships",desc:"Real-world work experience for students."},{img:"/CTC NEW REACT WEBSITE/images/DevelopmentProgram/LiveProject.jpg",title:"Live Projects",desc:"Authentic projects to apply knowledge."},{img:"/CTC NEW REACT WEBSITE/images/DevelopmentProgram/Webinar.jpg",title:"Webinars",desc:"Virtual expert sessions on trending topics."},{img:"/CTC NEW REACT WEBSITE/images/DevelopmentProgram/QuantPreparation.jpg",title:"Quants Prep",desc:"Sharpen analytical & numerical skills."},{img:"/CTC NEW REACT WEBSITE/images/DevelopmentProgram/MockInterview.jpg",title:"Mock Interviews",desc:"Simulated interviews for confidence."},{img:"/CTC NEW REACT WEBSITE/images/DevelopmentProgram/ProgrammingSession.jpg",title:"Programming Session",desc:"Dedicated sessions for coding clarity."},{img:"/CTC NEW REACT WEBSITE/images/DevelopmentProgram/SoftSkill.jpg",title:"Soft Skills",desc:"Training in communication & teamwork."},{img:"/CTC NEW REACT WEBSITE/images/DevelopmentProgram/Grooming.jpg",title:"Grooming",desc:"Personality & etiquette improvement."},{img:"/CTC NEW REACT WEBSITE/images/DevelopmentProgram/Seminar.jpg",title:"Seminar",desc:"Develop stage confidence."},{img:"/CTC NEW REACT WEBSITE/images/DevelopmentProgram/Presentation.jpg",title:"Presentation",desc:"Learn impactful presentation skills."},{img:"/CTC NEW REACT WEBSITE/images/DevelopmentProgram/GroupDiscussion.jpg",title:"Group Discussion",desc:"Improve teamwork & critical thinking."}],O0=[{num:"01",title:"Aptitude & Reasoning",icon:"fa-brain",desc:"Regular practice sessions and mock tests to strengthen problem-solving and analytical skills.",tags:["Quantitative","Logical Reasoning","Mock Tests"],color:"#0c2340"},{num:"02",title:"Technical Skills",icon:"fa-code",desc:"Intensive workshops and hands-on projects for BCA and B.Sc. (CS) students to enhance practical knowledge.",tags:["Programming","Hands-on Projects","DSA"],color:"#1a3a6b"},{num:"03",title:"Soft Skills & Interview Prep",icon:"fa-comments",desc:"Role-playing exercises, group discussions, and interview simulations to improve communication and confidence.",tags:["Communication","Group Discussion","Mock Interview"],color:"#2d5a8e"}],D0=[{title:"JOB-A-THON 2022",icon:"fa-trophy",sub:"First edition — campus hiring drive",link:null},{title:"JOB-A-THON 2023",icon:"fa-medal",sub:"Expanded to 15+ companies",link:null},{title:"JOB-A-THON 2024",icon:"fa-star",sub:"Record placements — 60+ students",link:null},{title:"MISSION — 40",icon:"fa-bullseye",sub:"2025 drive — 40 MNC targets",link:"/placement/mission40"}],W0=[{title:"Enhance Technical Skills",icon:"fa-laptop-code",points:["Equip students with the latest technological skills and tools currently in demand.","Provide practical, hands-on experience with real-world projects and software development."]},{title:"Bridge Academia & Industry",icon:"fa-building-columns",points:["Offer exposure to industry standards, methodologies, and professional work environments.","Facilitate the transition from academic learning to professional application."]},{title:"Promote Collaboration",icon:"fa-handshake",points:["Establish and strengthen partnerships with local software companies for mutual growth.","Provide students with networking opportunities and potential job placements."]},{title:"Improve Employability",icon:"fa-briefcase",points:["Enhance employability by providing relevant, marketable skills and experiences.","Prepare students for careers in tech by improving problem-solving abilities."]}],L0=[{icon:"fa-chart-line",title:"Skill Enhancement",desc:"Provide students with advanced skills that complement their primary coursework."},{icon:"fa-hammer",title:"Practical Application",desc:"Offer hands-on projects that allow students to apply theoretical knowledge in real-world scenarios."},{icon:"fa-industry",title:"Industry Readiness",desc:"Equip students with industry-relevant skills, making them more competitive in the job market."},{icon:"fa-book-open",title:"Comprehensive Learning",desc:"Broaden the learning experience with courses covering emerging technologies and advanced topics."},{icon:"fa-certificate",title:"Certification",desc:"Validate the additional skills acquired by students through a certification process."}];function H0({item:r,idx:s}){const[o,c]=v.useState(!1);return e.jsxs("div",{className:"rv",style:{borderRadius:18,overflow:"hidden",background:"#fff",border:"1px solid rgba(12,35,64,0.07)",boxShadow:o?"0 16px 48px rgba(12,35,64,0.18)":"0 4px 18px rgba(12,35,64,0.08)",transform:o?"translateY(-8px)":"none",transition:"all 0.3s ease",transitionDelay:`${s%4*.06}s`},onMouseEnter:()=>c(!0),onMouseLeave:()=>c(!1),children:[e.jsxs("div",{style:{position:"relative",overflow:"hidden",height:180},children:[e.jsx("img",{src:r.img,alt:r.title,style:{width:"100%",height:"100%",objectFit:"cover",transition:"transform 0.4s ease",transform:o?"scale(1.06)":"scale(1)"},onError:m=>{m.target.parentElement.style.background="linear-gradient(135deg,#0c2340,#2d5a8e)",m.target.style.display="none"}}),e.jsx("div",{style:{position:"absolute",inset:0,background:o?"rgba(12,35,64,0.3)":"rgba(12,35,64,0)",transition:"background 0.3s"}})]}),e.jsxs("div",{style:{padding:"16px 18px"},children:[e.jsx("div",{style:{fontFamily:"'Plus Jakarta Sans',sans-serif",fontWeight:800,fontSize:"0.9rem",color:"#0c2340",marginBottom:4},children:r.title}),e.jsx("div",{style:{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"0.75rem",color:"#64748b",lineHeight:1.6},children:r.desc})]})]})}function F0({p:r,idx:s}){const[o,c]=v.useState(!1),m=nr(),p=()=>{r.link&&m(r.link)};return e.jsxs("div",{className:"rv",style:{background:o?"linear-gradient(135deg,#0c2340,#1a3a6b)":"#fff",border:"2px solid",borderColor:o?"#0c2340":"rgba(12,35,64,0.15)",borderRadius:22,padding:"36px 28px",textAlign:"center",cursor:r.link?"pointer":"default",boxShadow:o?"0 20px 60px rgba(12,35,64,0.35)":"0 4px 20px rgba(12,35,64,0.08)",transform:o?"translateY(-10px) scale(1.03)":"none",transition:"all 0.35s cubic-bezier(0.4,0,0.2,1)",transitionDelay:`${s*.07}s`,position:"relative",overflow:"hidden"},onMouseEnter:()=>c(!0),onMouseLeave:()=>c(!1),onClick:p,children:[o&&e.jsx("div",{style:{position:"absolute",top:"-50%",left:"-50%",width:"200%",height:"200%",background:"radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 70%)",pointerEvents:"none"}}),r.link&&e.jsx("div",{style:{position:"absolute",top:14,right:14,background:o?"rgba(255,204,0,0.25)":"rgba(12,35,64,0.07)",border:"1px solid",borderColor:o?"rgba(255,204,0,0.45)":"rgba(12,35,64,0.15)",color:o?"#ffcc00":"#0c2340",borderRadius:20,padding:"3px 10px",fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"0.62rem",fontWeight:800,letterSpacing:"1px",textTransform:"uppercase",transition:"all 0.3s"},children:"View Details"}),e.jsx("div",{style:{width:64,height:64,borderRadius:"50%",margin:"0 auto 16px",background:o?"rgba(255,204,0,0.15)":"rgba(12,35,64,0.06)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.5rem",color:o?"#ffcc00":"#0c2340",transition:"all 0.3s"},children:e.jsx("i",{className:`fa-solid ${r.icon}`})}),e.jsx("div",{style:{fontFamily:"'Plus Jakarta Sans',sans-serif",fontWeight:900,fontSize:"1.15rem",color:o?"#ffcc00":"#0c2340",marginBottom:8,letterSpacing:"-0.3px"},children:r.title}),e.jsx("div",{style:{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"0.76rem",color:o?"rgba(255,255,255,0.55)":"#64748b",fontWeight:500},children:r.sub}),r.link&&e.jsxs("div",{style:{marginTop:16,display:"inline-flex",alignItems:"center",gap:6,fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"0.75rem",fontWeight:800,color:o?"#ffcc00":"#0c2340",transition:"all 0.3s"},children:["Explore Program ",e.jsx("i",{className:"fa-solid fa-arrow-right",style:{fontSize:"0.7rem",transform:o?"translateX(4px)":"none",transition:"transform 0.25s"}})]})]})}function oa({badge:r,title:s,highlight:o,sub:c}){return e.jsxs("div",{style:{textAlign:"center",marginBottom:48},children:[r&&e.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:7,background:"rgba(12,35,64,0.07)",border:"1px solid rgba(12,35,64,0.12)",color:"#0c2340",fontSize:"0.68rem",fontWeight:800,padding:"6px 16px",borderRadius:30,letterSpacing:"2px",textTransform:"uppercase",marginBottom:14},children:[e.jsx("i",{className:"fa-solid fa-circle-dot",style:{color:"#ffcc00"}}),r]}),e.jsxs("h2",{style:{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"clamp(1.7rem,3.5vw,2.4rem)",fontWeight:900,color:"#0c2340",letterSpacing:"-1px",margin:"0 0 12px",lineHeight:1.1},children:[s," ",o&&e.jsx("span",{style:{color:"#1a3a6b"},children:o})]}),c&&e.jsx("p",{style:{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"0.9rem",color:"#64748b",fontWeight:500,maxWidth:560,margin:"0 auto"},children:c})]})}function U0(){return P0(),e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
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
  `}),e.jsxs("div",{className:"dp-page",children:[e.jsx("div",{className:"dp-hero",children:e.jsxs("div",{className:"dp-hero-content",children:[e.jsxs("div",{className:"dp-hero-badge",children:[e.jsx("i",{className:"fa-solid fa-graduation-cap"}),"Placement Cell · CTC"]}),e.jsxs("h1",{className:"dp-hero-h1",children:["Student ",e.jsx("em",{children:"Development"}),e.jsx("br",{}),"& Placement Programs"]}),e.jsx("p",{className:"dp-hero-sub",children:"Comprehensive training and placement initiatives designed to enhance employability for BCA, B.Sc. (CS) and BBA students — bridging campus to career."}),e.jsx("div",{style:{display:"flex",gap:20,flexWrap:"wrap"},children:[{val:"7+",lbl:"Top Recruiters"},{val:"12",lbl:"Activities"},{val:"3",lbl:"Training Modules"},{val:"4",lbl:"JOB-A-THON Drives"}].map((s,o)=>e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx("div",{style:{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"1.6rem",fontWeight:900,color:"#ffcc00",lineHeight:1},children:s.val}),e.jsx("div",{style:{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"0.67rem",color:"rgba(255,255,255,0.4)",fontWeight:600,marginTop:3,textTransform:"uppercase",letterSpacing:"0.5px"},children:s.lbl})]},o))})]})}),e.jsx("div",{className:"dp-wave",children:e.jsx("svg",{viewBox:"0 0 1440 56",preserveAspectRatio:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M0,38 C360,56 1080,0 1440,38 L1440,56 L0,56 Z",fill:"#f0f4f8"})})}),e.jsx("div",{className:"dp-section",children:e.jsxs("div",{className:"dp-inner",children:[e.jsx(oa,{badge:"Introduction",title:"Our Placement",highlight:"Team",sub:"Dedicated professionals driving student success through structured placement programs and industry partnerships."}),e.jsx("div",{className:"dp-team-grid",children:I0.map((s,o)=>e.jsxs("div",{className:"dp-team-card rv",style:{transitionDelay:`${o*.1}s`},children:[e.jsxs("div",{style:{height:280,overflow:"hidden",position:"relative"},children:[e.jsx("img",{src:s.img,alt:s.name,style:{width:"100%",height:"100%",objectFit:"cover",objectPosition:"top"},onError:c=>{c.target.parentElement.style.background=`linear-gradient(135deg,${s.color},#2d5a8e)`,c.target.style.display="none",c.target.parentElement.innerHTML+='<div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:4rem;opacity:0.3">👤</div>'}}),e.jsx("div",{style:{position:"absolute",inset:0,background:"linear-gradient(to top, rgba(12,35,64,0.7) 0%, transparent 50%)"}})]}),e.jsxs("div",{style:{padding:"20px 22px"},children:[e.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:7,background:"rgba(12,35,64,0.07)",borderRadius:20,padding:"4px 12px",marginBottom:10},children:[e.jsx("i",{className:`fa-solid ${s.icon}`,style:{fontSize:"0.65rem",color:"#0c2340"}}),e.jsx("span",{style:{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"0.68rem",fontWeight:800,color:"#0c2340",textTransform:"uppercase",letterSpacing:"0.5px"},children:s.role})]}),e.jsx("div",{style:{fontFamily:"'Plus Jakarta Sans',sans-serif",fontWeight:900,fontSize:"1rem",color:"#0c2340"},children:s.name})]})]},o))}),e.jsx("div",{className:"rv",style:{marginTop:48,background:"#fff",borderRadius:20,padding:"32px 36px",border:"1.5px solid rgba(12,35,64,0.08)",boxShadow:"0 4px 20px rgba(12,35,64,0.07)"},children:e.jsxs("p",{style:{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"0.95rem",color:"#334155",lineHeight:1.9,margin:0},children:["These programs outline the objectives, plans, and implementation strategies of our institution's ",e.jsx("strong",{style:{color:"#0c2340"},children:"Off-Campus Drive and Student Readiness Program"}),". This initiative is designed to enhance the employability of our students by providing them with comprehensive training and placement opportunities, with a focus on both multinational corporations (MNCs) and local companies. Our program is tailored for students enrolled in ",e.jsx("strong",{style:{color:"#0c2340"},children:"BCA, B.Sc. (Computer Science), and BBA"})," courses."]})})]})}),e.jsx("div",{className:"dp-section dp-section-alt",children:e.jsxs("div",{className:"dp-inner",children:[e.jsx(oa,{badge:"Partners",title:"Our Major",highlight:"Top Recruiters",sub:"Leading MNCs who regularly recruit from Creative Techno College across all batches."}),e.jsx("div",{className:"dp-recruiter-grid",children:B0.map((s,o)=>e.jsxs("div",{className:"dp-recruiter-card rv",style:{transitionDelay:`${o*.07}s`},children:[e.jsx("img",{src:s.logo,alt:s.name,className:"dp-recruiter-logo",onError:c=>{c.target.style.display="none",c.target.parentElement.style.background=`linear-gradient(135deg,${s.color}22,${s.color}44)`;const m=document.createElement("div");m.style.cssText=`width:90px;height:70px;display:flex;align-items:center;justify-content:center;font-size:1.1rem;font-weight:900;color:${s.color};`,m.textContent=s.name.slice(0,3),c.target.parentElement.insertBefore(m,c.target)}}),e.jsx("div",{className:"dp-recruiter-name",children:s.name})]},o))})]})}),e.jsx("div",{className:"dp-section",children:e.jsxs("div",{className:"dp-inner",children:[e.jsx(oa,{badge:"Goals",title:"Program",highlight:"Objectives",sub:"Five pillars that guide our comprehensive placement and development initiative."}),e.jsx("div",{className:"dp-obj-grid",children:M0.map((s,o)=>e.jsxs("div",{className:"dp-obj-card rv",style:{transitionDelay:`${o*.07}s`},children:[e.jsx("div",{className:"dp-obj-icon",children:e.jsx("i",{className:`fa-solid ${s.icon}`})}),e.jsx("div",{className:"dp-obj-title",children:s.title}),e.jsx("div",{className:"dp-obj-desc",children:s.desc})]},o))})]})}),e.jsx("div",{className:"dp-section dp-section-alt",children:e.jsxs("div",{className:"dp-inner",children:[e.jsx(oa,{badge:"Activities",title:"Placement",highlight:"Activity Hub",sub:"12 structured activities that prepare students for every phase of the recruitment process."}),e.jsx("div",{className:"dp-activities-grid",children:z0.map((s,o)=>e.jsx(H0,{item:s,idx:o},o))})]})}),e.jsx("div",{className:"dp-section",children:e.jsxs("div",{className:"dp-inner",children:[e.jsx(oa,{badge:"Training",title:"Module-Based",highlight:"Training Program",sub:"Three structured modules covering aptitude, technical depth, and soft skills for complete placement readiness."}),e.jsx("div",{className:"dp-modules-grid",children:O0.map((s,o)=>e.jsxs("div",{className:"dp-module-card rv",style:{transitionDelay:`${o*.1}s`},children:[e.jsx("div",{className:"dp-module-num",children:s.num}),e.jsx("div",{className:"dp-module-icon",style:{background:`linear-gradient(135deg,${s.color},#2d5a8e)`},children:e.jsx("i",{className:`fa-solid ${s.icon}`,style:{color:"#ffcc00"}})}),e.jsx("div",{className:"dp-module-title",children:s.title}),e.jsx("div",{className:"dp-module-desc",children:s.desc}),e.jsx("div",{className:"dp-module-tags",children:s.tags.map((c,m)=>e.jsx("span",{className:"dp-tag",children:c},m))})]},o))})]})}),e.jsx("div",{className:"dp-section dp-section-alt",children:e.jsxs("div",{className:"dp-inner",children:[e.jsx(oa,{badge:"Flagship Programs",title:"JOB-A-THON &",highlight:"Placement Drives",sub:"Annual flagship placement programs that connect students directly with top recruiters."}),e.jsx("div",{className:"dp-programs-grid",children:D0.map((s,o)=>e.jsx(F0,{p:s,idx:o},o))})]})}),e.jsx("div",{className:"dp-section",children:e.jsxs("div",{className:"dp-inner",children:[e.jsx(oa,{badge:"Internships",title:"Industry",highlight:"Internship Program",sub:"Structured internship goals bridging academic learning with professional industry exposure."}),e.jsx("div",{className:"dp-internship-grid",children:W0.map((s,o)=>e.jsxs("div",{className:"dp-int-card rv",style:{transitionDelay:`${o*.08}s`},children:[e.jsx("div",{className:"dp-int-icon",children:e.jsx("i",{className:`fa-solid ${s.icon}`})}),e.jsx("div",{className:"dp-int-title",children:s.title}),s.points.map((c,m)=>e.jsxs("div",{className:"dp-int-point",children:[e.jsx("div",{className:"dp-int-bullet",children:e.jsx("i",{className:"fa-solid fa-check"})}),e.jsx("div",{className:"dp-int-text",children:c})]},m))]},o))})]})}),e.jsx("div",{className:"dp-section dp-section-alt",children:e.jsxs("div",{className:"dp-inner",children:[e.jsx(oa,{badge:"Value Added",title:"Value Added",highlight:"Courses",sub:"Additional certifications and courses designed to make students stand out in the competitive job market."}),e.jsx("div",{className:"dp-value-grid",children:L0.map((s,o)=>e.jsxs("div",{className:"dp-val-card rv",style:{transitionDelay:`${o*.07}s`},children:[e.jsx("div",{className:"dp-val-icon",children:e.jsx("i",{className:`fa-solid ${s.icon}`})}),e.jsx("div",{className:"dp-val-title",children:s.title}),e.jsx("div",{className:"dp-val-desc",children:s.desc})]},o))}),e.jsx("div",{className:"dp-msg-card rv",style:{marginTop:36},children:e.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:20,flexWrap:"wrap"},children:[e.jsx("div",{style:{width:54,height:54,borderRadius:"50%",flexShrink:0,background:"rgba(255,204,0,0.15)",border:"2px solid rgba(255,204,0,0.3)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.3rem",color:"#ffcc00"},children:e.jsx("i",{className:"fa-solid fa-quote-left"})}),e.jsxs("div",{style:{flex:1},children:[e.jsx("div",{style:{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"0.68rem",fontWeight:800,color:"rgba(255,204,0,0.7)",letterSpacing:2,textTransform:"uppercase",marginBottom:12},children:"From the Placement Head"}),e.jsx("div",{style:{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"0.92rem",color:"rgba(255,255,255,0.75)",lineHeight:1.85,fontStyle:"italic"},children:`"Our institution's Off-Campus Drive and Student Readiness Program is a comprehensive initiative aimed at enhancing the employability of our students. By focusing on pre-placement activities, structured assessment rounds, and targeted training modules, we are committed to preparing our students for successful careers. Our continuous efforts to update and improve the program reflect our dedication to student success and align with the high standards set by the National Board of Accreditation."`}),e.jsx("div",{style:{marginTop:20,fontFamily:"'Plus Jakarta Sans',sans-serif",fontWeight:800,fontSize:"0.88rem",color:"#ffcc00"},children:"Mr. Bhabani Shankar Sahoo"}),e.jsx("div",{style:{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"0.74rem",color:"rgba(255,255,255,0.4)",marginTop:3},children:"Placement Head · Creative Techno College"})]})]})})]})})]})]})}function _0(){const[r,s]=v.useState(!1),[o,c]=v.useState(!1),m="/CTC NEW REACT WEBSITE/images/PlacementBrochure/PLACEMENT BROUCHURE.pdf",p=`
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
  `,u=()=>{const y=document.createElement("a");y.href=m,y.download="CTC_Placement_Brochure.pdf",y.click()},b=()=>{window.open(m,"_blank")},h=[{icon:"fa-building",label:"Top Recruiters",val:"7+",col:"linear-gradient(135deg,#0c2340,#1a3a6b)"},{icon:"fa-users",label:"Students Placed",val:"250+",col:"linear-gradient(135deg,#1a3a6b,#2d5a8e)"},{icon:"fa-calendar",label:"Years of Data",val:"2020–25",col:"linear-gradient(135deg,#2d5a8e,#3d7ab5)"},{icon:"fa-file-pdf",label:"Format",val:"PDF",col:"linear-gradient(135deg,#c0392b,#e74c3c)"}],x=[{icon:"fa-building-columns",col:"linear-gradient(135deg,#0c2340,#1a3a6b)",title:"About CTC Placements",desc:"Creative Techno College has been consistently placing students in top MNCs including TCS, Wipro, LTI Mindtree, Cognizant and Deloitte since 2020."},{icon:"fa-phone",col:"linear-gradient(135deg,#064e3b,#10b981)",title:"Contact Placement Cell",desc:"For campus recruitment partnerships and placement enquiries, reach the CTC Placement Cell at placements@creativecollege.in"},{icon:"fa-briefcase",col:"linear-gradient(135deg,#78350f,#d97706)",title:"Recruit From CTC",desc:"Partner with us for campus drives, internship programs and direct hiring. We offer BCA, B.Sc. CS and BBA graduates trained in industry-relevant skills."}];return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:p}),e.jsxs("div",{className:"pb-page",children:[e.jsx("div",{className:"pb-hero",children:e.jsxs("div",{className:"pb-hero-content",children:[e.jsxs("div",{className:"pb-hero-left",children:[e.jsxs("div",{className:"pb-hero-badge",children:[e.jsx("i",{className:"fa-solid fa-file-pdf"})," Placement Brochure · CTC"]}),e.jsxs("h1",{className:"pb-hero-title",children:["Our ",e.jsx("em",{children:"Placement"}),e.jsx("br",{}),"Brochure"]}),e.jsx("p",{className:"pb-hero-sub",children:"Complete placement brochure of Creative Techno College — featuring top recruiters, student profiles, infrastructure and placement process for campus partners."})]}),e.jsxs("div",{className:"pb-hero-right",children:[e.jsxs("button",{className:"pb-hero-btn primary",onClick:u,children:[e.jsx("i",{className:"fa-solid fa-file-arrow-down"})," Download PDF"]}),e.jsxs("button",{className:"pb-hero-btn secondary",onClick:b,children:[e.jsx("i",{className:"fa-solid fa-arrow-up-right-from-square"})," Open in New Tab"]})]})]})}),e.jsx("div",{className:"pb-wave",children:e.jsx("svg",{viewBox:"0 0 1440 56",preserveAspectRatio:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M0,38 C360,56 1080,0 1440,38 L1440,56 L0,56 Z",fill:"#f0f4f8"})})}),e.jsxs("div",{className:"pb-main",children:[e.jsx("div",{className:"pb-info-strip",children:h.map((y,g)=>e.jsxs("div",{className:"pb-info-chip",style:{animationDelay:`${g*.08}s`},children:[e.jsx("div",{className:"pb-info-chip-icon",style:{background:y.col},children:e.jsx("i",{className:`fa-solid ${y.icon}`})}),e.jsxs("div",{children:[e.jsx("div",{className:"pb-info-chip-val",children:y.val}),e.jsx("div",{className:"pb-info-chip-lbl",children:y.label})]})]},g))}),e.jsxs("div",{className:"pb-viewer-card",children:[e.jsxs("div",{className:"pb-toolbar",children:[e.jsxs("div",{className:"pb-toolbar-left",children:[e.jsx("div",{className:"pb-toolbar-icon",children:e.jsx("i",{className:"fa-solid fa-file-pdf"})}),e.jsxs("div",{children:[e.jsx("div",{className:"pb-toolbar-title",children:"CTC Placement Brochure"}),e.jsx("div",{className:"pb-toolbar-sub",children:"Creative Techno College · Official Document"})]})]}),e.jsxs("div",{className:"pb-toolbar-actions",children:[e.jsxs("button",{className:"pb-tool-btn gold",onClick:u,children:[e.jsx("i",{className:"fa-solid fa-download"})," Download"]}),e.jsxs("button",{className:"pb-tool-btn white",onClick:b,children:[e.jsx("i",{className:"fa-solid fa-arrow-up-right-from-square"})," New Tab"]}),e.jsxs("button",{className:"pb-tool-btn white",onClick:()=>c(y=>!y),children:[e.jsx("i",{className:`fa-solid ${o?"fa-compress":"fa-expand"}`}),o?"Exit":"Expand"]})]})]}),e.jsxs("div",{className:`pb-iframe-wrap${o?" fullscreen-mode":""}`,children:[!r&&e.jsxs("div",{className:"pb-loader",children:[e.jsx("div",{className:"pb-loader-ring"}),e.jsx("div",{className:"pb-loader-text",children:"Loading placement brochure…"})]}),e.jsx("iframe",{src:`${m}#toolbar=1&navpanes=1&scrollbar=1&view=FitH`,title:"CTC Placement Brochure",onLoad:()=>s(!0),style:{opacity:r?1:0,transition:"opacity 0.4s"}})]}),e.jsxs("div",{className:"pb-fullscreen-hint",children:[e.jsxs("div",{className:"pb-hint-text",children:[e.jsx("i",{className:"fa-solid fa-circle-info"}),"Use the toolbar above to download or open in a new tab for the best viewing experience."]}),e.jsxs("button",{className:"pb-tool-btn gold",onClick:u,style:{background:"rgba(12,35,64,0.07)",color:"#0c2340",border:"1.5px solid rgba(12,35,64,0.12)"},children:[e.jsx("i",{className:"fa-solid fa-file-arrow-down"})," Save Brochure"]})]})]}),e.jsxs("div",{className:"pb-mobile-notice",style:{display:"none"},id:"pb-mobile-fallback",children:[e.jsx("i",{className:"fa-solid fa-mobile-screen"}),e.jsxs("div",{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"On mobile?"})," PDF viewing may be limited on some devices. Download the brochure to your device for the best experience."]}),e.jsxs("button",{className:"pb-mobile-dl-btn",onClick:u,children:[e.jsx("i",{className:"fa-solid fa-file-arrow-down"})," Download Placement Brochure"]})]})]}),e.jsx("div",{className:"pb-bottom-grid",children:x.map((y,g)=>e.jsxs("div",{className:"pb-bottom-card",children:[e.jsx("div",{className:"pb-bottom-card-icon",style:{background:y.col},children:e.jsx("i",{className:`fa-solid ${y.icon}`})}),e.jsx("div",{className:"pb-bottom-card-title",children:y.title}),e.jsx("div",{className:"pb-bottom-card-desc",children:y.desc})]},g))})]})]}),e.jsx("script",{dangerouslySetInnerHTML:{__html:`
        (function(){
          var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
          var el = document.getElementById('pb-mobile-fallback');
          if(isMobile && el) el.style.display = 'flex';
        })();
      `}})]})}function $0(){v.useEffect(()=>{const r=document.querySelectorAll(".rv"),s=new IntersectionObserver(o=>o.forEach(c=>{c.isIntersecting&&c.target.classList.add("visible")}),{threshold:.06});return r.forEach(o=>s.observe(o)),()=>s.disconnect()},[])}const Mp={TCS:{bg:"#0a2472",text:"#fff",short:"TCS"},WIPRO:{bg:"#8b2be2",text:"#fff",short:"WIP"},"LTI MINDTREE":{bg:"#00aa44",text:"#fff",short:"LTI"},MINDTREE:{bg:"#00aa44",text:"#fff",short:"MT"},COGNIZENT:{bg:"#0066cc",text:"#fff",short:"COG"},COGNIZANT:{bg:"#0066cc",text:"#fff",short:"COG"},INFOSYS:{bg:"#007acc",text:"#fff",short:"INF"},CAPGEMINI:{bg:"#0070ad",text:"#fff",short:"CAP"},DELOITTE:{bg:"#86bc25",text:"#fff",short:"DEL"},ACCENTURE:{bg:"#a100ff",text:"#fff",short:"ACC"},"TECH MAHINDRA":{bg:"#e31837",text:"#fff",short:"TM"},"L&T FINANCE":{bg:"#e8401c",text:"#fff",short:"L&T"},"BAJAJ ALLIANZ":{bg:"#003087",text:"#fff",short:"BAJ"},QSPIDERS:{bg:"#ff6600",text:"#fff",short:"QSP"},GQT:{bg:"#1a1a2e",text:"#fff",short:"GQT"},MPHASYS:{bg:"#6a1e91",text:"#fff",short:"MPH"},HCL:{bg:"#0d6efd",text:"#fff",short:"HCL"},"BYJU'S":{bg:"#fd4c00",text:"#fff",short:"BYJ"}},wm=r=>{const s=Object.keys(Mp).find(o=>r.toUpperCase().includes(o));return s?Mp[s]:{bg:"#334155",text:"#fff",short:r.slice(0,3).toUpperCase()}},Cm=[{name:"Asutosh Sahu",batch:"BCA - 2022 AB",company:"TCS",designation:"Software Trainee"},{name:"Swapnajit Sahoo",batch:"BCA - 2022 AB",company:"TCS",designation:"Software Trainee"},{name:"Anish Ashutosh Nayak",batch:"BCA - 2022 AB",company:"TCS",designation:"Software Trainee"},{name:"Abhilipsha Pradhan",batch:"BCA - 2022 AB",company:"TCS",designation:"Software Trainee"},{name:"Adyasha Sahu",batch:"BCA - 2022 AB",company:"TCS",designation:"Software Trainee"},{name:"Archita Dhar",batch:"BCA - 2022 AB",company:"TCS",designation:"Software Trainee"},{name:"Sania Nayak",batch:"BCA - 2022 AB",company:"TCS",designation:"Software Trainee"},{name:"Bhabani Sankar Dash",batch:"BSc.CS - 2022 AB",company:"TCS",designation:"Software Trainee"},{name:"Namitarani Sahu",batch:"BSc.CS - 2022 AB",company:"TCS",designation:"Software Trainee"},{name:"Vishal Tiwari",batch:"BSc.CS - 2022 AB",company:"TCS",designation:"Software Trainee"},{name:"Sangita Pradhan",batch:"BSc.CS - 2022 AB",company:"TCS",designation:"Software Trainee"},{name:"Laxmipriya Sahu",batch:"BSc.CS - 2022 AB",company:"TCS",designation:"Software Trainee"},{name:"Payal Sahoo",batch:"BSc.CS - 2022 AB",company:"TCS",designation:"Software Trainee"},{name:"Nensi Biswal",batch:"BBA - 2022 AB",company:"TCS",designation:"Software Trainee"},{name:"Rituparna Devi",batch:"BBA - 2022 AB",company:"TCS",designation:"Software Trainee"},{name:"Ipsita Sahoo",batch:"BBA - 2022 AB",company:"TCS",designation:"Software Trainee"},{name:"Sandhyarani Sahu",batch:"BSc.CS - 2022 AB",company:"TCS",designation:"Software Trainee"},{name:"Chandrakanta Muduli",batch:"BCA",company:"WIPRO",designation:"Software Trainee"},{name:"Pritam Kumar Behera",batch:"BCA",company:"WIPRO",designation:"Software Trainee"},{name:"Adyasha Sahu",batch:"BCA",company:"WIPRO",designation:"Software Trainee"},{name:"Anish Ashutosh Nayak",batch:"BCA",company:"WIPRO",designation:"Software Trainee"},{name:"Pritiprangya Behera",batch:"BCA",company:"WIPRO",designation:"Software Trainee"},{name:"Chandan Swain",batch:"BCA",company:"WIPRO",designation:"Software Trainee"},{name:"Abhishek Kumar Rai",batch:"BCA",company:"WIPRO",designation:"Software Trainee"},{name:"Resmasmita Priyadarsini",batch:"BSc.CS (H)",company:"WIPRO",designation:"Software Trainee"},{name:"Monalisha Sahu",batch:"BSc.CS (H)",company:"WIPRO",designation:"Software Trainee"},{name:"Sushree Smita Swain",batch:"BSc.CS (H)",company:"WIPRO",designation:"Software Trainee"},{name:"Sushree Sangita Pradhan",batch:"BSc.CS (H)",company:"WIPRO",designation:"Software Trainee"},{name:"Debasish Pradhan",batch:"BSc.CS (H)",company:"WIPRO",designation:"Software Trainee"},{name:"Karan Kumar Nayak",batch:"BSc.CS (H)",company:"WIPRO",designation:"Software Trainee"},{name:"Payal Pradhan",batch:"BSc.CS (H)",company:"WIPRO",designation:"Software Trainee"},{name:"Chandrakanta Muduli",batch:"BCA - 2022 AB",company:"LTI MINDTREE",designation:"Associate Trainee"},{name:"S.K. Akil",batch:"BCA - 2022 AB",company:"LTI MINDTREE",designation:"Associate Trainee"},{name:"Payal Pradhan",batch:"BSc.CS",company:"LTI MINDTREE",designation:"Associate Trainee"},{name:"Pritiprangya Behera",batch:"BCA - 2022 AB",company:"COGNIZENT",designation:"Associate Trainee"},{name:"Ritwik Sahoo",batch:"BSc.CS",company:"COGNIZENT",designation:"Associate Trainee"},{name:"Seema Behera",batch:"BSc.CS",company:"COGNIZENT",designation:"Associate Trainee"},{name:"Lopita Sahu",batch:"BSc.CS",company:"COGNIZENT",designation:"Associate Trainee"},{name:"Anish Ashutosh Nayak",batch:"BCA - 2022 AB",company:"COGNIZENT",designation:"Associate Trainee"},{name:"Ananta Kishor Swain",batch:"BCA - 2022 AB",company:"COGNIZENT",designation:"Associate Trainee"},{name:"Swapnajit Sahoo",batch:"BCA - 2022 AB",company:"COGNIZENT",designation:"Associate Trainee"}],Am=[{name:"Rahul Kumar Sahu",batch:"BBA",company:"TCS",designation:"BPS"},{name:"Prajolita Dehury",batch:"BBA",company:"TCS",designation:"BPS"},{name:"Tushar Raman Naik",batch:"BBA",company:"TCS",designation:"BPS"},{name:"Ayush Lal",batch:"BBA",company:"TCS",designation:"BPS"},{name:"Shibuprasad Nayak",batch:"BBA",company:"TCS",designation:"BPS"},{name:"Khusi Bilas",batch:"BBA",company:"TCS",designation:"BPS"},{name:"Subrat Sahoo",batch:"BBA",company:"TCS",designation:"BPS"},{name:"Prangya Paramita Sahu",batch:"BBA",company:"TCS",designation:"BPS"},{name:"Punam P. Panda",batch:"BBA",company:"TCS",designation:"BPS"},{name:"Titan Kumar Prusty",batch:"BBA",company:"TCS",designation:"BPS"},{name:"Somesh Sahu",batch:"BBA",company:"TCS",designation:"BPS"},{name:"Biswajit Sahu",batch:"BBA",company:"TCS",designation:"BPS"},{name:"Dhiren Mahanta",batch:"BCA",company:"L&T Finance",designation:"Trainee"},{name:"Matru Prasad Muduli",batch:"BCA",company:"L&T Finance",designation:"Trainee"},{name:"Biswajit Sahu",batch:"BCA",company:"L&T Finance",designation:"Trainee"},{name:"Ashis Parida",batch:"BCA",company:"L&T Finance",designation:"Trainee"},{name:"Suman Sahoo",batch:"BSC-CS",company:"L&T Finance",designation:"Trainee"},{name:"Gyana Ranjan Sahu",batch:"BCA",company:"L&T Finance",designation:"Trainee"},{name:"Samit Kumar Pradhan",batch:"BCA",company:"L&T Finance",designation:"Trainee"},{name:"Ayush Lal",batch:"BBA",company:"L&T Finance",designation:"Trainee"},{name:"Titan Kumar Prusty",batch:"BBA",company:"L&T Finance",designation:"Trainee"},{name:"Abhishek Sahu",batch:"BBA",company:"L&T Finance",designation:"Trainee"},{name:"Tushar Raman Naik",batch:"BBA",company:"L&T Finance",designation:"Trainee"},{name:"Rahul Kumar Sahu",batch:"BBA",company:"L&T Finance",designation:"Trainee"},{name:"Subrat Sahoo",batch:"BBA",company:"L&T Finance",designation:"Trainee"},{name:"Alok Kumar Sahoo",batch:"BBA",company:"L&T Finance",designation:"Trainee"},{name:"Sibu Prashad Nayak",batch:"BBA",company:"L&T Finance",designation:"Trainee"},{name:"Ranjeet Yadav",batch:"BCA",company:"L&T Finance",designation:"Trainee"},{name:"Subhakant Pradhan",batch:"BCA",company:"L&T Finance",designation:"Trainee"},{name:"Priyadarshan Pradhan",batch:"BSC-CS",company:"L&T Finance",designation:"Trainee"},{name:"Priyaranjan Sahoo",batch:"BCA",company:"L&T Finance",designation:"Trainee"},{name:"Rasabihari Sahu",batch:"BCA",company:"L&T Finance",designation:"Trainee"},{name:"Hemananda Sahu",batch:"BCA",company:"L&T Finance",designation:"Trainee"},{name:"Alekha Sahoo",batch:"BCA",company:"L&T Finance",designation:"Trainee"},{name:"Subhendu Kumar Pratap Singh",batch:"BCA",company:"L&T Finance",designation:"Trainee"},{name:"Tusar Raman Naik",batch:"BBA",company:"E-panipuri Kartz",designation:"Trainee"},{name:"Abhishek Sahu",batch:"BBA",company:"E-panipuri Kartz",designation:"Trainee"},{name:"Chidatmika Pradhan",batch:"BBA",company:"E-panipuri Kartz",designation:"Trainee"},{name:"Monalisa Pradhan",batch:"BBA",company:"E-panipuri Kartz",designation:"Trainee"},{name:"Prajolita Dehury",batch:"BBA",company:"E-panipuri Kartz",designation:"Trainee"},{name:"Prangya Paramita Sahu",batch:"BBA",company:"E-panipuri Kartz",designation:"Trainee"},{name:"Punam P. Panda",batch:"BBA",company:"E-panipuri Kartz",designation:"Trainee"},{name:"Somesh Sahu",batch:"BBA",company:"E-panipuri Kartz",designation:"Trainee"},{name:"Subhashree Ranjan Tunga",batch:"BSC-CS",company:"Golden India Transport",designation:"Trainee"},{name:"Punam P. Panda",batch:"BBA",company:"Golden India Transport",designation:"Trainee"},{name:"Abhishek Sahoo",batch:"BBA",company:"Golden India Transport",designation:"Trainee"},{name:"Somesh Sahoo",batch:"BBA",company:"Bajaj Allianz",designation:"Trainee"},{name:"Sibuprasad Nayak",batch:"BBA",company:"Bajaj Allianz",designation:"Trainee"},{name:"Alok Kumar Sahoo",batch:"BBA",company:"Bajaj Allianz",designation:"Trainee"},{name:"Tushar Raman Naik",batch:"BBA",company:"Bajaj Allianz",designation:"Trainee"},{name:"Titan Kumar Prusty",batch:"BBA",company:"Bajaj Allianz",designation:"Trainee"},{name:"Pradyuda Kumar Sahoo",batch:"BBA",company:"Bajaj Allianz",designation:"Trainee"},{name:"Abhjit Jena",batch:"BCA",company:"EDEVLOP",designation:"Trainee"},{name:"Priyadarshan Pradhan",batch:"BSC-CS",company:"EDEVLOP",designation:"Trainee"},{name:"Somesh Sahoo",batch:"BBA",company:"Leran Medix",designation:"Trainee"},{name:"Pradyuda Kumar Sahoo",batch:"BBA",company:"Leran Medix",designation:"Trainee"},{name:"Satyabrata Ojha",batch:"BCA",company:"Edtech",designation:"Trainee"},{name:"Ashish Singh",batch:"BCA",company:"Edtech",designation:"Trainee"},{name:"Sourav Sahoo",batch:"BSC-CS",company:"DELOITTE",designation:"Software Trainee"},{name:"Priyadarshan Pradhan",batch:"BSC-CS",company:"DELOITTE",designation:"Software Trainee"},{name:"Kajal Sahoo",batch:"BSC-CS",company:"DELOITTE",designation:"Software Trainee"},{name:"Subhashree Behera",batch:"BCA",company:"ACCENTURE",designation:"Software Trainee"},{name:"Rojalin Tripathy",batch:"BSC-CS",company:"ACCENTURE",designation:"Software Trainee"},{name:"Diptimayee Sahoo",batch:"BSC-CS",company:"TCS",designation:"Software Trainee"},{name:"Gyana Ranjan Nath",batch:"BCA",company:"WIPRO",designation:"Software Trainee"},{name:"Abhijit Jena",batch:"BCA",company:"WIPRO",designation:"Software Trainee"}],km=[{name:"Itishree Nath",batch:"BCA",company:"WIPRO",designation:"Software Trainee"},{name:"Gaurav Pathak",batch:"BCA",company:"WIPRO",designation:"Software Trainee"},{name:"Adysha Rout",batch:"BCA",company:"WIPRO",designation:"Software Trainee"},{name:"Roshan Das",batch:"BCA",company:"WIPRO",designation:"Software Trainee"},{name:"Jitendriya Jena",batch:"BCA",company:"WIPRO",designation:"Software Trainee"},{name:"Sachin Kumar Dhal",batch:"BCA",company:"WIPRO",designation:"Software Trainee"},{name:"Purusottam Barik",batch:"BCA",company:"WIPRO",designation:"Software Trainee"},{name:"Bednath Sahu",batch:"BCA",company:"WIPRO",designation:"Software Trainee"},{name:"Suraj Kumar Sahoo",batch:"BCA",company:"WIPRO",designation:"Software Trainee"},{name:"Laxminarayan Bisoi",batch:"BSC-CS",company:"WIPRO",designation:"Software Trainee"},{name:"Asit Kumar Biswal",batch:"BSC-CS",company:"WIPRO",designation:"Software Trainee"},{name:"Dharitri Sahoo",batch:"BSC-CS",company:"WIPRO",designation:"Software Trainee"},{name:"Netaji Bai",batch:"BSC-CS",company:"WIPRO",designation:"Software Trainee"},{name:"Rakesh Senapati",batch:"BSC-CS",company:"WIPRO",designation:"Software Trainee"},{name:"Kalpana Naik",batch:"BSC-CS",company:"GQT",designation:"Full Stack Developer"},{name:"Nibedita Sahoo",batch:"BSC-CS",company:"GQT",designation:"Full Stack Developer"},{name:"Sonalee Singh",batch:"BCA",company:"GQT",designation:"Full Stack Developer"},{name:"Gaurav Pathak",batch:"BCA",company:"GQT",designation:"Full Stack Developer"},{name:"Rasmita Sahoo",batch:"BSC-CS",company:"GQT",designation:"Full Stack Developer"},{name:"Shrutisweta Panda",batch:"BSC-CS",company:"GQT",designation:"Full Stack Developer"},{name:"Suraj Naik",batch:"BBA",company:"CREDENTS SOFT",designation:"Intern"},{name:"Ananya Singh",batch:"BBA",company:"CREDENTS SOFT",designation:"Intern"},{name:"Subhranshu Sahu",batch:"BBA",company:"CREDENTS SOFT",designation:"Intern"},{name:"Subrat Kumar Pradhan",batch:"BBA",company:"CREDENTS SOFT",designation:"Intern"},{name:"Jogita Jangyaseni Pradhan",batch:"BBA",company:"CREDENTS SOFT",designation:"Intern"},{name:"Janmejaya Behera",batch:"BBA",company:"CREDENTS SOFT",designation:"Intern"},{name:"Rohan Kumar Sahoo",batch:"BBA",company:"CREDENTS SOFT",designation:"Intern"},{name:"Kusumanjali Pradhan",batch:"BBA",company:"KAMALJIT ENTERPRISES",designation:"Marketing"},{name:"Jogita Jangyaseni Pradhan",batch:"BBA",company:"KAMALJIT ENTERPRISES",designation:"Marketing"},{name:"Janmejaya Behera",batch:"BBA",company:"KAMALJIT ENTERPRISES",designation:"Marketing"},{name:"Roshan Das",batch:"BCA",company:"QSPIDERS",designation:"Trainee"},{name:"Itishree Nath",batch:"BCA",company:"QSPIDERS",designation:"Trainee"},{name:"Rakesh Senapati",batch:"BSC-CS",company:"QSPIDERS",designation:"Trainee"},{name:"Baishanavi Rout",batch:"BSC-CS",company:"QSPIDERS",designation:"Trainee"},{name:"Laxminarayan Bisoi",batch:"BSC-CS",company:"QSPIDERS",designation:"Trainee"},{name:"Adysha Rout",batch:"BCA",company:"QSPIDERS",designation:"Trainee"},{name:"Sandeep Samal",batch:"BSC-CS",company:"QSPIDERS",designation:"Trainee"},{name:"Kalpana Naik",batch:"BSC-CS",company:"QSPIDERS",designation:"Trainee"},{name:"Padmalaya Sahu",batch:"BCA",company:"QSPIDERS",designation:"Trainee"},{name:"Sonalee Singh",batch:"BCA",company:"QSPIDERS",designation:"Trainee"},{name:"Dharitri Sahoo",batch:"BSC-CS",company:"QSPIDERS",designation:"Trainee"},{name:"Subhasmita Singh",batch:"BCA",company:"QSPIDERS",designation:"Trainee"},{name:"Subrat Kumar Sahu",batch:"BCA",company:"QSPIDERS",designation:"Trainee"},{name:"Abhijit Bhuyan",batch:"BSC-CS",company:"QSPIDERS",designation:"Trainee"},{name:"Netaji Bai",batch:"BSC-CS",company:"QSPIDERS",designation:"Trainee"},{name:"Rasmita Sahoo",batch:"BSC-CS",company:"QSPIDERS",designation:"Trainee"},{name:"Arjyakumari Nirlipta",batch:"BSC-CS",company:"QSPIDERS",designation:"Trainee"},{name:"Sruti Sweta Panda",batch:"BSC-CS",company:"QSPIDERS",designation:"Trainee"},{name:"Deepa Sahu",batch:"BSC-CS",company:"QSPIDERS",designation:"Trainee"},{name:"Madhusmita Rout",batch:"BSC-CS",company:"QSPIDERS",designation:"Trainee"},{name:"Sweet Kumari Muni",batch:"BCA",company:"QSPIDERS",designation:"Trainee"},{name:"Chinmayee Sahoo",batch:"BCA",company:"QSPIDERS",designation:"Trainee"},{name:"Satyajit Bhuyan",batch:"BSC-CS",company:"QSPIDERS",designation:"Trainee"},{name:"Purnima Sahoo",batch:"BCA",company:"QSPIDERS",designation:"Trainee"},{name:"Akash Kumar Behera",batch:"BBA",company:"TCS",designation:"BPS"},{name:"Jogita Jangyaseni Pradhan",batch:"BBA",company:"TCS",designation:"BPS"},{name:"Amisha Prasad",batch:"BBA",company:"TCS",designation:"BPS"},{name:"Subrat Kumar Sahu",batch:"BCA",company:"TEACHNOOK",designation:"Academic Counsellor"},{name:"Priyadarshini Garnaik",batch:"BSC-CS",company:"CREDENTS SOFT",designation:"Intern"},{name:"Satyajit Bhuyan",batch:"BSC-CS",company:"TECH MAHINDRA",designation:"BPS"},{name:"Abhijit Bhuyan",batch:"BSC-CS",company:"TECH MAHINDRA",designation:"BPS"},{name:"Akash Kumar Behera",batch:"BBA",company:"TECH MAHINDRA",designation:"BPS"},{name:"Rohan Kumar Sahoo",batch:"BBA",company:"BYJU'S",designation:"HR Role"},{name:"Rasmita Sahoo",batch:"BSC-CS",company:"TECH MAHINDRA",designation:"BPS"},{name:"Janmejaya Behera",batch:"BBA",company:"BYJU'S",designation:"Marketing"},{name:"Jogita Jangyaseni Pradhan",batch:"BBA",company:"BYJU'S",designation:"Marketing"},{name:"Ananya Singh",batch:"BBA",company:"BYJU'S",designation:"Marketing"},{name:"Barsaranee Barik",batch:"BCA",company:"EXCELERATE",designation:"Data Analyst"},{name:"Adysha Rout",batch:"BCA",company:"TECH MAHINDRA",designation:"BPS"},{name:"Janmejaya Behera",batch:"BBA",company:"TECH MAHINDRA",designation:"BPS"},{name:"Adysha Rout",batch:"BCA",company:"CAPGEMINI",designation:"Trainee"},{name:"Abhijit Jena",batch:"BCA",company:"WIPRO",designation:"Software Trainee"}],Nm=[{name:"Richa Singh",batch:"BCA (2019-22)",company:"DELOITTE",designation:""},{name:"Snehlata Pandey",batch:"BCA (2019-22)",company:"DELOITTE",designation:""},{name:"Ankita Pradhan",batch:"BCA (2019-22)",company:"DELOITTE",designation:""},{name:"Debasrita Sahu",batch:"BSC (2019-22)",company:"DELOITTE",designation:""},{name:"Ratikanta Pradhan",batch:"BCA (2019-22)",company:"WIPRO",designation:""},{name:"Snehlata Pandey",batch:"BCA (2019-22)",company:"WIPRO",designation:""},{name:"Isha Agarwal",batch:"BCA (2019-22)",company:"WIPRO",designation:""},{name:"Rani Sahu",batch:"BSC (2019-22)",company:"WIPRO",designation:""},{name:"Ankita Pradhan",batch:"BCA (2019-22)",company:"WIPRO",designation:""},{name:"Answesha Sahu",batch:"BSC (2019-22)",company:"WIPRO",designation:""},{name:"Debismita Sahu",batch:"BSC (2019-22)",company:"WIPRO",designation:""},{name:"Tejaswini Pradhan",batch:"BSC (2019-22)",company:"WIPRO",designation:""},{name:"Puja Behera",batch:"BSC (2019-22)",company:"WIPRO",designation:""},{name:"Subhadra Behera",batch:"BSC (2019-22)",company:"WIPRO",designation:""},{name:"Manasmita Sahoo",batch:"BSC (2019-22)",company:"WIPRO",designation:""},{name:"Jyotirmay Prasad",batch:"BCA (2019-22)",company:"WIPRO",designation:""},{name:"S. Satya Sagar",batch:"BCA (2019-22)",company:"WIPRO",designation:""},{name:"Richa Singh",batch:"BCA (2019-22)",company:"WIPRO",designation:""},{name:"Puja Behera",batch:"BSC (2019-22)",company:"LTI",designation:""},{name:"Isha Agarwal",batch:"BCA (2019-22)",company:"LTI",designation:""},{name:"Snehlata Pandey",batch:"BCA (2019-22)",company:"LTI",designation:""},{name:"Jyotirmay Prasad",batch:"BCA (2019-22)",company:"ACCENTURE",designation:""},{name:"Swadesh Behera",batch:"BSC (2019-22)",company:"ACCENTURE",designation:""},{name:"Pratibha Behera",batch:"BCA (2019-22)",company:"MPHASYS",designation:""},{name:"Isha Agarwal",batch:"BCA (2019-22)",company:"MPHASYS",designation:""},{name:"Richa Singh",batch:"BCA (2019-22)",company:"MPHASYS",designation:""},{name:"Snehlata Pandey",batch:"BCA (2019-22)",company:"CAPGEMINI",designation:""},{name:"Smrutirekha Sahu",batch:"BSC (2019-22)",company:"CAPGEMINI",designation:""},{name:"Sratoswini Parida",batch:"BCA (2019-22)",company:"CAPGEMINI",designation:""},{name:"Swadesh Behera",batch:"BSC (2019-22)",company:"CAPGEMINI",designation:""},{name:"Ankita Pani",batch:"BCA (2019-22)",company:"CAPGEMINI",designation:""},{name:"Richa Singh",batch:"BCA (2019-22)",company:"CAPGEMINI",designation:""},{name:"Tejaswini Pradhan",batch:"BSC (2019-22)",company:"CAPGEMINI",designation:""},{name:"Isha Agarwal",batch:"BCA (2019-22)",company:"CAPGEMINI",designation:""},{name:"Rituparna Das",batch:"BBA (2019-22)",company:"O2 SAVER",designation:""},{name:"Iqra Asad",batch:"BBA (2019-22)",company:"O2 SAVER",designation:""},{name:"Vaibhab Sharma",batch:"BBA (2019-22)",company:"O2 SAVER",designation:""},{name:"Sonali Seth",batch:"BSC (2019-22)",company:"O2 SAVER",designation:""},{name:"Smrutirekha Sahu",batch:"BSC (2019-22)",company:"O2 SAVER",designation:""},{name:"Baby Pradhan",batch:"BSC (2019-22)",company:"O2 SAVER",designation:""},{name:"Sucharita Sahu",batch:"BSC (2019-22)",company:"O2 SAVER",designation:""},{name:"Puja Behera",batch:"BSC (2019-22)",company:"O2 SAVER",designation:""},{name:"Tejaswini Pradhan",batch:"BSC (2019-22)",company:"O2 SAVER",designation:""},{name:"Anwesha Sahu",batch:"BSC (2019-22)",company:"O2 SAVER",designation:""},{name:"Satybrata Pradhan",batch:"BCA (2019-22)",company:"QSPIDERS",designation:""},{name:"Subham Parida",batch:"BCA (2019-22)",company:"QSPIDERS",designation:""},{name:"Jyotirmay Prasad",batch:"BCA (2019-22)",company:"QSPIDERS",designation:""},{name:"Ankita Pani",batch:"BCA (2019-22)",company:"QSPIDERS",designation:""},{name:"Isha Agarwal",batch:"BCA (2019-22)",company:"QSPIDERS",designation:""},{name:"Sonali Seth",batch:"BSC (2019-22)",company:"QSPIDERS",designation:""},{name:"Swadesh Behera",batch:"BSC (2019-22)",company:"QSPIDERS",designation:""},{name:"Smrutirekha Sahu",batch:"BSC (2019-22)",company:"QSPIDERS",designation:""},{name:"Anwesha Sahu",batch:"BSC (2019-22)",company:"QSPIDERS",designation:""},{name:"Subhasmita Sahu",batch:"BSC (2019-22)",company:"QSPIDERS",designation:""},{name:"Tejaswini Pradhan",batch:"BSC (2019-22)",company:"QSPIDERS",designation:""},{name:"Subham Parida",batch:"BCA (2019-22)",company:"INFOSYS",designation:""},{name:"Biswabijan Mohanty",batch:"BSC (2019-22)",company:"INFOSYS",designation:""},{name:"Rani Sahu",batch:"BSC (2019-22)",company:"INFOSYS",designation:""},{name:"Pratibha Behera",batch:"BCA (2019-22)",company:"INFOSYS",designation:""},{name:"Tejaswini Pradhan",batch:"BSC (2019-22)",company:"INFOSYS",designation:""}],Tm=[{name:"Ashutosh Kar",batch:"BCA-2021",company:"WIPRO, TCS, AT&T, Airtel, Publis Sapient, Mind Tree, Tech Mahindra, L&T",designation:"8 Offers"},{name:"Purushotam Swain",batch:"BCA-2021",company:"WIPRO, TCS, Infosys, CISCO, Accenture, HCL",designation:"6 Offers"},{name:"Vikash Tiwary",batch:"BCA-2021",company:"WIPRO, TCS, Edusys",designation:"3 Offers"},{name:"Swetalin Nath",batch:"BCA-2021",company:"WIPRO, Cognizent, Infosys, Mindtree",designation:"4 Offers"},{name:"Abhisek Jena",batch:"BCA-2021",company:"SNAPDEAL, Mindtree",designation:"2 Offers"},{name:"Ayush Tripathy",batch:"BCA-2021",company:"WIPRO",designation:"1 Offer"},{name:"Sagar Pradhan",batch:"BCA-2021",company:"Mindtree",designation:"1 Offer"},{name:"Rajesh Sahu",batch:"BCA-2021",company:"HCL",designation:"1 Offer"},{name:"Nasreen Qureshi",batch:"BSC-2021",company:"ICICI, Tech Mahindra, TCS, Mindtree",designation:"4 Offers"},{name:"Biswabhusan Das",batch:"BSC-2021",company:"Byju's, Upgrade",designation:"2 Offers"},{name:"Swayamprava Das",batch:"BSC-2021",company:"DXC, TCS",designation:"2 Offers"},{name:"Sunil Das",batch:"BCA-2020",company:"WIPRO",designation:"1 Offer"},{name:"Amit Kumar Mahanta",batch:"BCA-2020",company:"Tech Mahindra",designation:"1 Offer"},{name:"Krishnakanta Behera",batch:"BCA-2021",company:"Byju's",designation:"1 Offer"},{name:"Swagatika Pradhan",batch:"BCA-2021",company:"TCS",designation:"1 Offer"},{name:"Saswat Sahu",batch:"BCA-2021",company:"Mindtree",designation:"1 Offer"},{name:"Komal Gupta",batch:"BCA-2021",company:"Mindtree",designation:"1 Offer"},{name:"Anmol Kumar Mishara Sharma",batch:"BSC-2021",company:"COGNIZANT",designation:"1 Offer"}],zp=[{id:"2025",label:"2025",data:Cm,color:"#0c2340"},{id:"2024",label:"2024",data:Am,color:"#1a3a6b"},{id:"2023",label:"2023",data:km,color:"#2d5a8e"},{id:"2022",label:"2022 Batch",data:Nm,color:"#3d7ab5"},{id:"2021",label:"2020 & 2021",data:Tm,color:"#5599cc"}],Oo=12;function G0(){const r=v.useRef(null),s=v.useRef(null);return v.useEffect(()=>{const o=()=>{var p;const c=window.Chart;if(!c)return;s.current&&s.current.destroy();const m=(p=r.current)==null?void 0:p.getContext("2d");m&&(s.current=new c(m,{type:"bar",data:{labels:["WIPRO","TECH MAHINDRA","TCS","MINDTREE/LTI","INFOSYS","COGNIZANT","DELOITTE","ACCENTURE","CAPGEMINI","HCL","BYJU'S"],datasets:[{label:"2020",data:[10,2,8,1,2,0,1,1,2,1,1],backgroundColor:"rgba(12,35,64,0.85)"},{label:"2021",data:[8,1,7,2,1,0,2,1,1,0,1],backgroundColor:"rgba(26,58,107,0.85)"},{label:"2022",data:[12,2,9,1,2,1,1,1,3,0,1],backgroundColor:"rgba(45,90,142,0.85)"},{label:"2023",data:[15,3,10,2,1,0,1,1,1,0,2],backgroundColor:"rgba(61,122,181,0.85)"},{label:"2024",data:[8,1,4,1,1,0,1,1,1,0,1],backgroundColor:"rgba(85,153,204,0.85)"},{label:"2025",data:[5,1,2,0,0,1,1,0,1,0,0],backgroundColor:"rgba(130,190,230,0.85)"}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!0,position:"top",labels:{font:{family:"Plus Jakarta Sans",size:12},color:"#0c2340"}}},scales:{x:{stacked:!0,ticks:{font:{size:11},color:"#334155"},grid:{display:!1}},y:{stacked:!0,ticks:{font:{size:11},color:"#334155"},grid:{color:"rgba(0,0,0,0.05)"}}}}}))};if(window.Chart)o();else{const c=document.createElement("script");c.src="https://cdn.jsdelivr.net/npm/chart.js",c.async=!0,c.onload=o,document.body.appendChild(c)}return()=>{s.current&&s.current.destroy()}},[]),e.jsx("div",{style:{height:380,position:"relative",width:"100%"},children:e.jsx("canvas",{ref:r})})}function Y0({student:r,idx:s}){const o=wm(r.company),c=r.name.split(" ").map(m=>m[0]).join("").slice(0,2).toUpperCase();return e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:14,padding:"14px 18px",background:s%2===0?"#fff":"#f8fafc",borderBottom:"1px solid rgba(10,22,40,0.06)",transition:"background 0.2s"},onMouseEnter:m=>m.currentTarget.style.background="#f0f6ff",onMouseLeave:m=>m.currentTarget.style.background=s%2===0?"#fff":"#f8fafc",children:[e.jsx("div",{style:{width:38,height:38,borderRadius:"50%",flexShrink:0,background:"linear-gradient(135deg,#0c2340,#1a3a6b)",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"0.72rem",fontWeight:800,color:"#ffcc00"},children:c}),e.jsxs("div",{style:{flex:1,minWidth:0},children:[e.jsx("div",{style:{fontFamily:"'Plus Jakarta Sans',sans-serif",fontWeight:700,fontSize:"0.85rem",color:"#0c2340",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:r.name}),e.jsx("div",{style:{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"0.7rem",color:"#94a3b8",fontWeight:600,marginTop:2},children:r.batch})]}),e.jsx("div",{style:{background:o.bg,color:o.text,padding:"5px 12px",borderRadius:20,fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"0.7rem",fontWeight:800,letterSpacing:"0.3px",flexShrink:0,maxWidth:160,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",textAlign:"center"},children:r.company}),r.designation&&e.jsx("div",{style:{background:"#f0f6ff",border:"1.5px solid rgba(12,35,64,0.12)",color:"#0c2340",padding:"4px 10px",borderRadius:8,fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"0.68rem",fontWeight:700,flexShrink:0,display:"none"},className:"ps-desg",children:r.designation})]})}function J0({data:r,year:s}){const[o,c]=v.useState(""),[m,p]=v.useState("ALL"),[u,b]=v.useState("ALL"),[h,x]=v.useState(1),[y,g]=v.useState("list"),E=v.useMemo(()=>["ALL",...new Set(r.map(R=>R.company))].sort(),[r]),D=v.useMemo(()=>["ALL",...new Set(r.map(R=>R.batch))].sort(),[r]),F=v.useMemo(()=>r.filter(R=>{const L=o.toLowerCase(),q=!L||R.name.toLowerCase().includes(L)||R.company.toLowerCase().includes(L)||R.batch.toLowerCase().includes(L),he=m==="ALL"||R.company===m,Ne=u==="ALL"||R.batch===u;return q&&he&&Ne}),[r,o,m,u]),P=Math.ceil(F.length/Oo),z=F.slice((h-1)*Oo,h*Oo);v.useEffect(()=>{x(1)},[o,m,u]);const N=v.useMemo(()=>{const R={};return F.forEach(L=>{R[L.company]=(R[L.company]||0)+1}),Object.entries(R).sort((L,q)=>q[1]-L[1]).slice(0,6)},[F]);return e.jsxs("div",{children:[e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(150px,1fr))",gap:14,marginBottom:24},children:[{label:"Total Placed",val:r.length,icon:"fa-users"},{label:"Companies",val:new Set(r.map(R=>R.company)).size,icon:"fa-building"},{label:"Batches",val:new Set(r.map(R=>R.batch)).size,icon:"fa-graduation-cap"},{label:"Showing",val:F.length,icon:"fa-filter"}].map((R,L)=>e.jsxs("div",{style:{background:L===0?"linear-gradient(135deg,#0c2340,#1a3a6b)":"#fff",border:"1px solid rgba(10,22,40,0.07)",borderRadius:14,padding:"16px 18px",boxShadow:"0 2px 12px rgba(10,22,40,0.07)"},children:[e.jsx("div",{style:{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"1.5rem",fontWeight:900,color:L===0?"#ffcc00":"#0c2340",lineHeight:1},children:R.val}),e.jsx("div",{style:{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"0.7rem",fontWeight:600,color:L===0?"rgba(255,255,255,0.6)":"#4a6080",marginTop:4},children:R.label})]},L))}),e.jsxs("div",{style:{display:"flex",gap:10,marginBottom:16,flexWrap:"wrap"},children:[e.jsxs("div",{style:{flex:"1 1 200px",display:"flex",alignItems:"center",gap:10,background:"#fff",border:"1.5px solid rgba(10,22,40,0.1)",borderRadius:12,padding:"0 14px"},children:[e.jsx("i",{className:"fa-solid fa-magnifying-glass",style:{color:"#94a3b8",fontSize:"0.85rem"}}),e.jsx("input",{value:o,onChange:R=>c(R.target.value),placeholder:"Search name, company, batch…",style:{flex:1,border:"none",outline:"none",padding:"12px 0",fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"0.85rem",background:"transparent",color:"#0c2340"}}),o&&e.jsx("button",{onClick:()=>c(""),style:{background:"none",border:"none",cursor:"pointer",color:"#94a3b8",fontSize:"0.75rem"},children:"✕"})]}),e.jsx("select",{value:m,onChange:R=>p(R.target.value),style:{flex:"0 0 auto",border:"1.5px solid rgba(10,22,40,0.1)",borderRadius:12,padding:"10px 14px",fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"0.82rem",color:"#0c2340",background:"#fff",outline:"none",cursor:"pointer"},children:E.map(R=>e.jsx("option",{value:R,children:R==="ALL"?"🏢 All Companies":R},R))}),e.jsx("select",{value:u,onChange:R=>b(R.target.value),style:{flex:"0 0 auto",border:"1.5px solid rgba(10,22,40,0.1)",borderRadius:12,padding:"10px 14px",fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"0.82rem",color:"#0c2340",background:"#fff",outline:"none",cursor:"pointer"},children:D.map(R=>e.jsx("option",{value:R,children:R==="ALL"?"🎓 All Batches":R},R))})]}),N.length>0&&e.jsx("div",{style:{display:"flex",gap:8,flexWrap:"wrap",marginBottom:16},children:N.map(([R,L])=>{const q=wm(R);return e.jsxs("button",{onClick:()=>p(m===R?"ALL":R),style:{background:m===R?q.bg:`${q.bg}18`,color:m===R?q.text:q.bg,border:`1.5px solid ${q.bg}40`,borderRadius:20,padding:"5px 12px",fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"0.72rem",fontWeight:800,cursor:"pointer",display:"flex",alignItems:"center",gap:6,transition:"all 0.2s"},children:[R," ",e.jsxs("span",{style:{opacity:.75},children:["(",L,")"]})]},R)})}),e.jsxs("div",{style:{background:"#fff",borderRadius:16,border:"1.5px solid rgba(10,22,40,0.08)",overflow:"hidden",boxShadow:"0 4px 20px rgba(10,22,40,0.07)"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:14,padding:"12px 18px",background:"linear-gradient(135deg,#0c2340,#1a3a6b)"},children:[e.jsx("div",{style:{width:38,flexShrink:0}}),e.jsx("div",{style:{flex:1,fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"0.72rem",fontWeight:800,color:"#ffcc00",textTransform:"uppercase",letterSpacing:"0.8px"},children:"Student Name · Batch"}),e.jsx("div",{style:{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"0.72rem",fontWeight:800,color:"#ffcc00",textTransform:"uppercase",letterSpacing:"0.8px"},children:"Company"})]}),z.length===0?e.jsxs("div",{style:{padding:"48px 20px",textAlign:"center"},children:[e.jsx("i",{className:"fa-solid fa-search",style:{fontSize:"2rem",color:"#cbd5e1",display:"block",marginBottom:12}}),e.jsx("div",{style:{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"0.9rem",color:"#94a3b8",fontWeight:600},children:"No results found"})]}):z.map((R,L)=>e.jsx(Y0,{student:R,idx:L},L))]}),P>1&&e.jsxs("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",gap:8,marginTop:20,flexWrap:"wrap"},children:[e.jsx("button",{onClick:()=>x(R=>Math.max(1,R-1)),disabled:h===1,style:{background:h===1?"#f0f4f8":"#0c2340",color:h===1?"#94a3b8":"#ffcc00",border:"none",borderRadius:10,padding:"8px 16px",fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"0.8rem",fontWeight:700,cursor:h===1?"default":"pointer",transition:"all 0.2s"},children:"← Prev"}),Array.from({length:Math.min(P,7)},(R,L)=>{let q;return P<=7||h<=4?q=L+1:h>=P-3?q=P-6+L:q=h-3+L,e.jsx("button",{onClick:()=>x(q),style:{background:h===q?"#0c2340":"#fff",color:h===q?"#ffcc00":"#0c2340",border:`1.5px solid ${h===q?"#0c2340":"rgba(12,35,64,0.15)"}`,borderRadius:10,padding:"8px 14px",minWidth:38,fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"0.8rem",fontWeight:700,cursor:"pointer",transition:"all 0.2s"},children:q},q)}),e.jsx("button",{onClick:()=>x(R=>Math.min(P,R+1)),disabled:h===P,style:{background:h===P?"#f0f4f8":"#0c2340",color:h===P?"#94a3b8":"#ffcc00",border:"none",borderRadius:10,padding:"8px 16px",fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"0.8rem",fontWeight:700,cursor:h===P?"default":"pointer"},children:"Next →"}),e.jsxs("span",{style:{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"0.75rem",color:"#94a3b8",fontWeight:600},children:["Page ",h," of ",P," · ",F.length," records"]})]})]})}function Op(){$0();const[r,s]=v.useState("2025"),o=zp.find(b=>b.id===r),c=v.useRef(null),m=b=>{s(b),setTimeout(()=>{var h;return(h=c.current)==null?void 0:h.scrollIntoView({behavior:"smooth",block:"start"})},80)},p=`
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
  `,u=Cm.length+Am.length+km.length+Nm.length+Tm.length;return e.jsxs(e.Fragment,{children:[e.jsx(Ta,{title:"Placements & Careers | Top MBA & MCA College in Odisha | CTC",description:"Creative Techno College offers exceptional placement records. Discover career opportunities after completing our Data Science, AI, Engineering, and Management courses.",keywords:"CTC angul placement, creative techno college placement, top MBA college odisha, top MCA college odisha, best placement college odisha, Data Science placement angul",canonical:"/placement/statistics"}),e.jsx("style",{children:p}),e.jsxs("div",{className:"ps-page",children:[e.jsx("div",{className:"ps-hero",children:e.jsxs("div",{className:"ps-hero-content",children:[e.jsxs("div",{className:"ps-hero-badge",children:[e.jsx("i",{className:"fa-solid fa-chart-bar"}),"Placement Statistics · 2020–2025"]}),e.jsxs("h1",{className:"ps-hero-h1",children:["Career ",e.jsx("em",{children:"Placements"})," at the",e.jsx("br",{}),"Top Educational Institution in Angul"]}),e.jsxs("p",{className:"ps-hero-sub",children:["Education is incomplete without a clear path to a successful career. At CTC, we don't just teach; we place. Our dedicated placement cell ensures that graduates from the ",e.jsx("strong",{children:"top MBA and MCA College in Angul"})," are recruited by leading multinational companies."]}),e.jsxs("p",{className:"ps-hero-sub",style:{marginTop:"-20px"},children:["Students completing our ",e.jsx("strong",{children:"top Data Science course in Angul"})," or our engineering programs benefit from rigorous interview preparation, resume building, and career-oriented learning. As the ",e.jsx("strong",{children:"best college in Odisha"})," for robust industry partnerships, we guarantee that our students step out of our campus directly into rewarding professional roles."]}),e.jsx("div",{style:{display:"flex",gap:20,flexWrap:"wrap"},children:[{val:`${u}+`,label:"Total Placements"},{val:"20+",label:"Companies"},{val:"6",label:"Years Data"},{val:"100%",label:"Commitment"}].map((b,h)=>e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx("div",{style:{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"1.6rem",fontWeight:900,color:"#ffcc00",lineHeight:1},children:b.val}),e.jsx("div",{style:{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"0.68rem",color:"rgba(255,255,255,0.4)",fontWeight:600,marginTop:3,textTransform:"uppercase",letterSpacing:"0.5px"},children:b.label})]},h))})]})}),e.jsx("div",{className:"ps-wave",children:e.jsx("svg",{viewBox:"0 0 1440 56",preserveAspectRatio:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M0,38 C360,56 1080,0 1440,38 L1440,56 L0,56 Z",fill:"#f0f4f8"})})}),e.jsxs("div",{className:"ps-main",children:[e.jsxs("div",{className:"ps-chart-card rv",children:[e.jsx("div",{className:"ps-chart-title",children:"Year-wise Hiring Distribution (2020–2025)"}),e.jsx("div",{className:"ps-chart-sub",children:"Stacked bar chart showing hiring counts by company across all years"}),e.jsx(G0,{})]}),e.jsx("div",{className:"ps-year-tabs rv",style:{transitionDelay:"0.1s"},children:zp.map(b=>e.jsxs("button",{className:`ps-year-tab${r===b.id?" active":""}`,onClick:()=>m(b.id),children:[b.label," ",e.jsxs("span",{style:{opacity:.6,fontSize:"0.75em",marginLeft:4},children:["(",b.data.length,")"]})]},b.id))}),e.jsxs("div",{className:"ps-table-card rv",style:{transitionDelay:"0.15s"},ref:c,children:[e.jsxs("div",{className:"ps-table-header",children:[e.jsxs("div",{className:"ps-table-title",children:["Placement Report — ",o==null?void 0:o.label]}),e.jsxs("div",{className:"ps-table-sub",children:[o==null?void 0:o.data.length," records · Searchable & filterable by company and batch"]})]}),e.jsx("div",{className:"ps-table-body",children:o&&e.jsx(J0,{data:o.data,year:r})})]})]})]})]})}const Dp={"MISSION 1":["MONALISA BEHERA","YASHITA SAHU","SUPRIYA MOHANTY","ELIN PATTANAYAK","DEBIPRASAD PRADHAN","DURGA PRASAD BEHERA","SASWAT PATRA","SUBHASMITA BEHERA","SIBASISH MISHRA","PRIYANSHU MOHARANA","BIDUSMITA MISHRA","JASMIN SAMAL","BINIT KUMAR SAHU","JILU DAS","SUDIPTA SURANJITA SAHOO","LIPA SAHU","IPSITA PATTANAIK","PRIYANKA BISWAL","RUDRA PRASAD SAHU","ALIVA DIPSIKHA GARNAIK","ABHISEK NANDA","SWASTIKA SAHU","LAXMIPRIYA NAYAK","AMIT SAHOO","KALPANA SAHOO","RATNAPRAVA DHAR","SRITAM BEHERA","PUJA KUMARI","SWAPNARANI DHAR","ALISHA DAS","SANA RAO","MANASMITA DEHURY","SURENDRA SAHU","ARPITA MALIK","SASWAT SUMAN DWIBEDY","SUBHAM BISWAL","CHINMAYEE P PRADHAN","MOMITA MISHRA","SANJIB SAHOO","V. VIBEK MUSKAN"],"MISSION 2":["SASWAT SUMAN DWIBEDY","DEBIPRASAD PRADHAN","LIPA SAHU","ABANTI DEHURY","RATNAPRAVA DHAR","JITENDRA KARAN SAHU","DURGA PRASAD BEHERA","PRIYANSHU SAHU","BIDUSMITA MISHRA","RITISHNA MOHANTY","SUBHASMITA BEHERA","SIBASISH MISHRA","PAYAL PRADHAN","YASHITA SAHU","PRASNAJIT DEHURY","SHANKARA SAHU","CHINMAYEE PRIYADARSHINI","SNEHA SAHOO","RUDRAPRASAD SAHU C","JAYANTA SAHU","STHITA PRANGYA SAHOO","STHITIPRAJNA BEHERA","ANSHUMAN PRADHAN","SOMESH PRADHAN","AMARENDRA SAHOO","SWASTIKA NAYAK","SATYAJIT SAHOO","ABHISEK NANDA","RUDRAPRASAD SAHU A","SHASWAT PATRA","KALPANA SAHOO","PRABINA SAHOO","SUBHASMITA SAHOO","SRITAM BEHERA","MONALISA BEHERA","SRUTI SONALI BARAH","RUDRAPRASAD SAHU B","KANHA CHARAN PRADAHAN","ALISHA DAS","MANASMITA DEHURY"],"MISSION 3":["DEBIPRASAD PRADHAN","YASHITA SAHU","SUDIPTA SURANJITA SAHOO","SIBASISH MISHRA","SUBHASMITA BEHERA","SASMITA DAS","DURGA PRASAD BEHERA","KANHA CHARAN PRADAHAN","ALIVA DIPSIKHA GARNAIK","ALISHA DAS","SUPRIYA MOHANTY","BIDUSMITA MISHRA","SNEHA KUMARI SINGH","PRIYANSHU BISWAL","DIBYANI DIBYASMITA","PRACHI PARASMITA PRADHAN","MOMITA MISHRA","SWASTIKA SAHU","RUDRAPRASAD SAHU B","SUBHAM BISWAL","PUJA KUMARI","SANJIB SAHOO","PRIYANSHU MOHARANA","ARPITA MALIK","CHINMAYEE PRIYADARSHINI","LIPA SAHU","SRITAM BEHERA","GAJENDRA BEHERA","MADHUMAY SAHU","SANA RAO","KALPANA SAHOO","ELIN PATTANAYAK","SUBHAM NANDA","SUSHREE LIKHA PRADHAN","SUBRAT KUMAR SAHOO","SUBHASHREE BEHERA","SWAPNARANI DHAR","SUBHASMITA PRADHAN","RATNAPRAVA SAHOO","IPSITA PATTANAIK"],"MISSION 4":["SHANKARA SAHU","LAXMIPRIYA NAYAK","SUDIPTA SURANJITA SAHOO","DEBIPRASAD PRADHAN","JITENDRA KARAN SAHU","KALPANA SAHOO","MANASMITA DEHURY","PUJA KUMARI","SASWAT SUMAN DWIBEDY","RATNAPRAVA SAHOO","KANHA CHARAN PRADAHAN","PRIYANSHU SAHU","SUBHAM BISWAL","DURGA PRASAD BEHERA","PRACHI PARASMITA PRADHAN","JASMIN SAMAL","SNEHA KUMARI SINGH","ALIVA DIPSIKHA GARNAIK","LIPA SAHU","RUDRAPRASAD SAHU A","CHINMAYEE PRIYADARSHINI","MOMITA MISHRA","ARPITA MALIK","AMARENDRA SAHOO","RITISHNA MOHANTY","DIBYANI DIBYASMITA","SUBHASMITA PRADHAN","AISHA DEHURY","SASMITA DAS","ELIN PATTANAYAK","ALISHA DAS","RUDRAPRASAD SAHU C","ABHISEK NANDA","SWAPNARANI DHAR","STHITA PRANGYA SAHOO","SAMBIT PRADHAN","SUPRIYA MOHANTY","SUBHASMITA SAHOO","STHITIPRAJNA BEHERA","JILU DAS"],"MISSION 5":["SASWAT SUMAN DWIBEDY","CHIRANJIB PATTANAIK","KANHA CHARAN PRADAHAN","SHANKARA SAHU","DEBIPRASAD PRADHAN","RUDRAPRASAD SAHU B","ALIVA DIPSIKHA GARNAIK","IPSITA PATTANAIK","LAXMIPRIYA NAYAK","SWASTIKA SAHU","CHINMAYEE PRIYADARSHINI","SRITAM BEHERA","MOMITA MISHRA","SUBHASMITA BEHERA","LIPA SAHU","ABHISEK NANDA","BIDUSMITA MISHRA","SIBASISH MISHRA","MADHUMAY SAHU","JAYANTA SAHU","DURGA PRASAD BEHERA","SOMESH PRADHAN","JILU DAS","SUBHAM BISWAL","ALISHA DAS","PRACHI PARASMITA PRADHAN","V VIBEK MUSKAN","SASMITA DAS","RUDRAPRASAD SAHU A","SASMITA SAHOO","ARPITA MALIK","AMIT SAHOO","SUDIPTA SURANJITA SAHOO","YASHITA SAHU","SANA RAO","PRIYANKA BISWAL","PRIYANSHU MOHARANA","SANJIB SAHOO","RATNAPRAVA DHAR","JITENDRA KARAN SAHU"],"MISSION 6":["SHANKARA SAHU","SANGITA PRIYADARSHANI","YASHITA SAHU","SASWAT SUMAN DWIBEDY","SUBHASMITA BEHERA","DEBIPRASAD PRADHAN","SWAGATIKA SAHOO","KANHA CHARAN PRADAHAN","JITENDRA KARAN SAHU","LIPA SAHU","SRITAM BEHERA","RUDRAPRASAD SAHU B","RUDRAPRASAD SAHU A","ABHIJIT SAHOO","MADHUMAY SAHU","BIDUSMITA MISHRA","ARPITA MALIK","DIBYANI DIBYASMITA","MOMITA MISHRA","IPSITA PATTANAIK","SWASTIKA SAHU","JASMIN SAMAL","ELIN PATTANAYAK","LAXMIPRIYA NAYAK","SASMITA DAS","SUDHANSHU","RATNAPRAVA DHAR","CHINMAYEE PRIYADARSHINI","PRACHI PARASMITA PRADHAN","PRIYANSHU MOHARANA","AMIT SAHOO","PRIYADARSHINI BEHERA","SUBHASHREE BEHERA","RUDRAPRASAD SAHU C","ALIVA DIPSIKHA GARNAIK","DURGA PRASAD BEHERA","AUROBINDO NAYAK","BINIT KUMAR SAHU","V VIBEK MUSKAN","SURENDRA SAHU"]},Wp=[{rank:1,name:"LIPA SAHU",frequency:6},{rank:2,name:"DURGA PRASAD BEHERA",frequency:6},{rank:3,name:"DEBIPRASAD PRADHAN",frequency:6},{rank:4,name:"KANHA CHARAN PRADAHAN",frequency:5},{rank:5,name:"SASWAT SUMAN DWIBEDY",frequency:5},{rank:6,name:"SHANKARA SAHU",frequency:5},{rank:7,name:"SUBHASMITA BEHERA",frequency:5},{rank:8,name:"YASHITA SAHU",frequency:5},{rank:9,name:"SIBASISH MISHRA",frequency:5},{rank:10,name:"BIDUSMITA MISHRA",frequency:5},{rank:11,name:"SUDIPTA SURANJITA SAHOO",frequency:5},{rank:12,name:"ALIVA DIPSIKHA GARNAIK",frequency:5},{rank:13,name:"IPSITA PATTANAIK",frequency:5},{rank:14,name:"JITENDRA KARAN SAHU",frequency:5}],V0=[{icon:"🎓",title:"Bridge the Skill Gap",desc:"Connect classroom knowledge with real corporate expectations through focused training and assessment."},{icon:"🧠",title:"Develop Key Skills",desc:"Improve aptitude, reasoning, technical knowledge, English communication, and interview handling."},{icon:"📈",title:"Track Performance",desc:"Measure consistency across multiple missions and identify high-potential students using real results."},{icon:"🏢",title:"Placement Readiness",desc:"Prepare candidates for companies like TCS, Wipro, Accenture, Cognizant, Infosys, and Tech Mahindra."}],K0=[{num:1,title:"Assessment & Selection",desc:"Students are evaluated through aptitude, English, technical skills, and personality-based screening. The top 40 are shortlisted for the program."},{num:2,title:"Team Formation",desc:"The selected students are divided into groups such as Mission 40 A, B, C, and D, each guided by faculty mentors for continuous tracking."},{num:3,title:"Structured Training",desc:"The 10-week plan includes aptitude, technical practice, GD-PI training, mock interviews, profile building, and company-specific preparation."}],q0=[{week:"Week 1",title:"Orientation",desc:"Program introduction, expectations, and goal setting."},{week:"Week 2–3",title:"Aptitude Mastery",desc:"Reasoning, quantitative aptitude, and logical problem solving."},{week:"Week 4–5",title:"Technical Grooming",desc:"Stream-wise technical strengthening and practice sessions."},{week:"Week 6–7",title:"Communication & Profile",desc:"GD, spoken communication, resume, LinkedIn, and email etiquette."},{week:"Week 8–10",title:"Company Prep & Mock",desc:"Company-specific modules, mock interviews, and final revision drills."}],Q0=[{title:"Industry-Ready Students",desc:"Students become better prepared for aptitude rounds, technical interviews, and HR interaction."},{title:"Better Placement Results",desc:"Improved shortlisting and stronger recruitment performance in top companies."},{title:"Stronger Professional Profiles",desc:"Enhanced resumes, LinkedIn presence, communication style, and corporate behavior."},{title:"Benchmark Academic Initiative",desc:"A repeatable model that can inspire future batches and strengthen the placement cell's reputation."}],X0=[{src:"/CTC NEW REACT WEBSITE/images/MISSION40/mission40_img1.jpeg",alt:"Mission 40 - Session 1"},{src:"/CTC NEW REACT WEBSITE/images/MISSION40/mission40_img2.jpeg",alt:"Mission 40 - Session 2"},{src:"/CTC NEW REACT WEBSITE/images/MISSION40/mission40_img3.jpeg",alt:"Mission 40 - Session 3"},{src:"/CTC NEW REACT WEBSITE/images/MISSION40/mission40_img4.jpeg",alt:"Mission 40 - Session 4"},{src:"/CTC NEW REACT WEBSITE/images/MISSION40/mission40_img5.jpeg",alt:"Mission 40 - Session 5"},{src:"/CTC NEW REACT WEBSITE/images/MISSION40/mission40_img6.jpeg",alt:"Mission 40 - Session 6"},{src:"/CTC NEW REACT WEBSITE/images/MISSION40/mission40_img7.jpeg",alt:"Mission 40 - Session 7"},{src:"/CTC NEW REACT WEBSITE/images/MISSION40/mission40_img8.jpeg",alt:"Mission 40 - Session 8"}];function Z0(r){return r>=6?"Excellent":r===5?"Very Strong":"Strong"}function ex(){v.useEffect(()=>{const r=document.querySelectorAll(".rv"),s=new IntersectionObserver(o=>o.forEach(c=>{c.isIntersecting&&c.target.classList.add("rv-in")}),{threshold:.05});return r.forEach(o=>s.observe(o)),()=>s.disconnect()},[])}function tx({children:r}){return e.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:6,background:"rgba(12,35,64,0.06)",border:"1px solid rgba(12,35,64,0.11)",color:"#0c2340",fontSize:"0.67rem",fontWeight:800,padding:"5px 14px",borderRadius:30,letterSpacing:"2px",textTransform:"uppercase",marginBottom:12},children:[e.jsx("span",{style:{width:6,height:6,borderRadius:"50%",background:"#ffcc00",display:"inline-block"}}),r]})}function la({badge:r,title:s,highlight:o,sub:c}){return e.jsxs("div",{style:{textAlign:"center",marginBottom:52},children:[r&&e.jsx(tx,{children:r}),e.jsxs("h2",{style:{fontFamily:"'Sora', sans-serif",fontSize:"clamp(1.6rem, 3.2vw, 2.3rem)",fontWeight:800,color:"#0c2340",letterSpacing:"-0.8px",margin:"0 0 14px",lineHeight:1.15},children:[s," ",o&&e.jsx("span",{style:{color:"#1a4080"},children:o})]}),c&&e.jsx("p",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:"0.92rem",color:"#64748b",fontWeight:400,maxWidth:560,margin:"0 auto",lineHeight:1.8},children:c})]})}function ax(){const r=Object.keys(Dp),[s,o]=v.useState(r[0]),[c,m]=v.useState(1),p=10,u=Dp[s]||[],b=Math.ceil(u.length/p),h=(c-1)*p,x=u.slice(h,h+p),y=g=>{o(g),m(1)};return e.jsxs("div",{style:{background:"#fff",border:"1.5px solid rgba(12,35,64,0.09)",borderRadius:20,overflow:"hidden",boxShadow:"0 6px 32px rgba(12,35,64,0.09)"},children:[e.jsxs("div",{style:{padding:"22px 24px 18px",borderBottom:"1px solid rgba(12,35,64,0.07)",background:"#fafcff"},children:[e.jsxs("div",{style:{marginBottom:14},children:[e.jsx("p",{style:{fontFamily:"'Sora',sans-serif",fontWeight:700,fontSize:"0.92rem",color:"#0c2340",margin:"0 0 3px"},children:"Mission-wise Top 40 Students"}),e.jsxs("p",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:"0.8rem",color:"#94a3b8",margin:0},children:[s,"  ·  40 students  ·  Batch 2023–26"]})]}),e.jsx("div",{style:{display:"flex",gap:7,flexWrap:"wrap"},children:r.map(g=>e.jsx("button",{onClick:()=>y(g),style:{border:"1.5px solid",borderColor:s===g?"transparent":"rgba(12,35,64,0.13)",background:s===g?"linear-gradient(135deg,#0c2340 0%,#1a4080 100%)":"#f1f5f9",color:s===g?"#fff":"#475569",borderRadius:10,padding:"8px 14px",fontFamily:"'Sora',sans-serif",fontWeight:700,fontSize:"0.75rem",cursor:"pointer",transition:"all 0.2s",boxShadow:s===g?"0 4px 14px rgba(12,35,64,0.22)":"none"},children:g},g))})]}),e.jsx("div",{style:{overflowX:"auto"},children:e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",minWidth:480},children:[e.jsx("thead",{children:e.jsx("tr",{style:{background:"#f8fafc"},children:["Sl. No.","Student Name","Mission","Status"].map(g=>e.jsx("th",{style:{padding:"12px 18px",textAlign:"left",fontFamily:"'Sora',sans-serif",fontSize:"0.68rem",color:"#94a3b8",textTransform:"uppercase",letterSpacing:"0.07em",fontWeight:700,borderBottom:"1px solid rgba(12,35,64,0.07)",whiteSpace:"nowrap"},children:g},g))})}),e.jsx("tbody",{children:x.map((g,E)=>e.jsxs("tr",{style:{transition:"background 0.12s",cursor:"default"},onMouseEnter:D=>D.currentTarget.style.background="#f5f9ff",onMouseLeave:D=>D.currentTarget.style.background="transparent",children:[e.jsx("td",{style:{padding:"13px 18px",borderBottom:"1px solid rgba(12,35,64,0.04)",fontFamily:"'DM Sans',sans-serif",color:"#94a3b8",fontWeight:600,fontSize:"0.85rem",width:70},children:h+E+1}),e.jsx("td",{style:{padding:"13px 18px",borderBottom:"1px solid rgba(12,35,64,0.04)",fontFamily:"'DM Sans',sans-serif",fontWeight:600,color:"#0f172a",fontSize:"0.87rem"},children:g}),e.jsx("td",{style:{padding:"13px 18px",borderBottom:"1px solid rgba(12,35,64,0.04)",fontFamily:"'DM Sans',sans-serif",fontWeight:500,color:"#475569",fontSize:"0.85rem",whiteSpace:"nowrap"},children:s}),e.jsx("td",{style:{padding:"13px 18px",borderBottom:"1px solid rgba(12,35,64,0.04)"},children:e.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:5,padding:"4px 12px",borderRadius:999,background:"#eef2ff",color:"#3730a3",fontFamily:"'Sora',sans-serif",fontWeight:700,fontSize:"0.7rem",whiteSpace:"nowrap"},children:[e.jsx("span",{style:{width:5,height:5,borderRadius:"50%",background:"#6366f1",display:"inline-block"}}),"Top 40 Selected"]})})]},E))})]})}),e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:12,padding:"16px 24px 20px",borderTop:"1px solid rgba(12,35,64,0.06)",background:"#fafcff"},children:[e.jsxs("span",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:"0.8rem",color:"#94a3b8"},children:["Showing ",h+1,"–",Math.min(h+p,u.length)," of ",u.length]}),e.jsxs("div",{style:{display:"flex",gap:5,flexWrap:"wrap",alignItems:"center"},children:[e.jsx("button",{onClick:()=>m(g=>g-1),disabled:c===1,style:{width:34,height:34,borderRadius:8,border:"1.5px solid rgba(12,35,64,0.12)",background:"#fff",fontWeight:700,cursor:c===1?"not-allowed":"pointer",opacity:c===1?.35:1,fontFamily:"'Sora',sans-serif",fontSize:"0.9rem",color:"#0c2340"},children:"‹"}),Array.from({length:b},(g,E)=>E+1).map(g=>e.jsx("button",{onClick:()=>m(g),style:{width:34,height:34,borderRadius:8,border:"1.5px solid",borderColor:g===c?"#0c2340":"rgba(12,35,64,0.12)",background:g===c?"#0c2340":"#fff",color:g===c?"#fff":"#0c2340",fontWeight:700,cursor:"pointer",fontFamily:"'Sora',sans-serif",fontSize:"0.82rem",transition:"all 0.15s"},children:g},g)),e.jsx("button",{onClick:()=>m(g=>g+1),disabled:c===b,style:{width:34,height:34,borderRadius:8,border:"1.5px solid rgba(12,35,64,0.12)",background:"#fff",fontWeight:700,cursor:c===b?"not-allowed":"pointer",opacity:c===b?.35:1,fontFamily:"'Sora',sans-serif",fontSize:"0.9rem",color:"#0c2340"},children:"›"})]})]})]})}function nx({img:r,idx:s}){const[o,c]=v.useState(!1),[m,p]=v.useState(!1),[u,b]=v.useState(!1);return e.jsxs("div",{className:"rv",style:{borderRadius:14,overflow:"hidden",background:"#1a3a6b",boxShadow:o?"0 16px 44px rgba(12,35,64,0.28)":"0 3px 14px rgba(12,35,64,0.1)",transform:o?"translateY(-6px) scale(1.018)":"none",transition:"all 0.32s cubic-bezier(0.4,0,0.2,1)",transitionDelay:`${s%4*.06}s`,cursor:"pointer",aspectRatio:"4/3",position:"relative"},onMouseEnter:()=>c(!0),onMouseLeave:()=>c(!1),children:[u?e.jsxs("div",{style:{width:"100%",height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",background:"linear-gradient(135deg,#0c2340,#1a3a6b)",color:"rgba(255,255,255,0.4)",gap:8},children:[e.jsx("span",{style:{fontSize:"2rem"},children:"📸"}),e.jsxs("span",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:"0.72rem",fontWeight:600},children:["Photo ",s+1]})]}):e.jsxs(e.Fragment,{children:[!m&&e.jsx("div",{style:{position:"absolute",inset:0,background:"linear-gradient(135deg,#0c2340,#1a3a6b)",display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx("div",{style:{width:28,height:28,borderRadius:"50%",border:"3px solid rgba(255,204,0,0.25)",borderTopColor:"#ffcc00",animation:"spin 0.8s linear infinite"}})}),e.jsx("img",{src:r.src,alt:r.alt,onLoad:()=>p(!0),onError:()=>b(!0),style:{width:"100%",height:"100%",objectFit:"cover",transition:"transform 0.42s ease",transform:o?"scale(1.07)":"scale(1)",display:m?"block":"none"}})]}),e.jsx("div",{style:{position:"absolute",inset:0,background:o?"linear-gradient(to top,rgba(12,35,64,0.6) 0%,transparent 55%)":"linear-gradient(to top,rgba(12,35,64,0.15) 0%,transparent 55%)",transition:"background 0.32s"}}),o&&e.jsx("div",{style:{position:"absolute",bottom:12,left:12,right:12},children:e.jsx("p",{style:{fontFamily:"'DM Sans',sans-serif",fontWeight:700,fontSize:"0.78rem",color:"#fff",margin:0},children:r.alt})})]})}function rx(){return ex(),e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
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
  `}),e.jsxs("div",{className:"m40",children:[e.jsxs("div",{className:"m40-hero",children:[e.jsx("div",{className:"m40-hero__orb m40-hero__orb--1"}),e.jsx("div",{className:"m40-hero__orb m40-hero__orb--2"}),e.jsx("div",{className:"m40-hero__orb m40-hero__orb--3"}),e.jsxs("div",{className:"m40-hero__inner",children:[e.jsxs("div",{className:"m40-hero__eyebrow",children:[e.jsx("span",{className:"m40-hero__eyebrow-dot"}),"Placement Excellence Initiative"]}),e.jsxs("h1",{className:"m40-hero__h1",children:[e.jsx("em",{children:"Mission 40"}),e.jsx("br",{}),"Placement Power"]}),e.jsxs("p",{className:"m40-hero__sub",children:["A structured training and placement readiness initiative by"," ",e.jsx("strong",{children:"Creative Techno College, Angul"})," designed to identify, mentor, and prepare high-potential students from the ",e.jsx("strong",{children:"2023–26 batch"})," for success in corporate recruitment."]}),e.jsx("div",{className:"m40-stats",children:[{val:"6",lbl:"Mission Exams Conducted"},{val:"40",lbl:"Selected Students Per Mission"},{val:"14",lbl:"Top Consistent Performers"},{val:"10",lbl:"Weeks Training Roadmap"}].map((s,o)=>e.jsxs("div",{className:"m40-stat",children:[e.jsx("div",{className:"m40-stat__val",children:s.val}),e.jsx("div",{className:"m40-stat__lbl",children:s.lbl})]},o))})]})]}),e.jsx("div",{className:"m40-wave",children:e.jsx("svg",{viewBox:"0 0 1440 56",preserveAspectRatio:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M0,36 C360,56 1080,0 1440,36 L1440,56 L0,56 Z",fill:"#f0f4f8"})})}),e.jsx("div",{className:"m40-sec",children:e.jsxs("div",{className:"m40-inner",children:[e.jsx(la,{badge:"About the Program",title:"What is",highlight:"Mission 40?",sub:"Mission 40 is a focused training and mentoring initiative launched by the Training & Placement Cell to bridge the gap between academic learning and industry expectations."}),e.jsxs("div",{className:"m40-about-grid",children:[e.jsxs("div",{className:"m40-card rv",children:[e.jsxs("div",{className:"m40-card__head",children:[e.jsx("div",{className:"m40-card__icon",children:e.jsx("i",{className:"fa-solid fa-circle-info"})}),e.jsx("span",{className:"m40-card__title",children:"Official Details"})]}),e.jsx("ul",{className:"m40-detail-list",children:[["Event","Mission 40"],["Date","26 June 2025"],["College","Creative Techno College, Angul"],["Target Group","BCA, BBA and BSc CS students"],["Displayed Result Batch","2023–26"],["Resource Person","Bhabani Sankar Sahoo, Vice Principal"]].map(([s,o])=>e.jsxs("li",{children:[e.jsxs("span",{className:"lbl",children:[s,":"]}),e.jsx("span",{className:"val",children:o})]},s))})]}),e.jsxs("div",{className:"m40-card rv",style:{transitionDelay:"0.1s"},children:[e.jsxs("div",{className:"m40-card__head",children:[e.jsx("div",{className:"m40-card__icon",children:e.jsx("i",{className:"fa-solid fa-lightbulb"})}),e.jsx("span",{className:"m40-card__title",children:"Why Mission 40?"})]}),e.jsx("ul",{className:"m40-why-list",children:["To identify top-performing and placement-ready students early.","To improve aptitude, technical, communication, and interview skills.","To create a benchmark group with strong corporate readiness.","To build confidence, consistency, and professional discipline."].map((s,o)=>e.jsxs("li",{children:[e.jsx("span",{className:"m40-why-check",children:"✓"}),s]},o))})]})]})]})}),e.jsx("div",{className:"m40-sec m40-sec--alt",children:e.jsxs("div",{className:"m40-inner",children:[e.jsx(la,{badge:"Objectives",title:"Core",highlight:"Objectives",sub:"Every section of this initiative is aligned with the Mission 40 vision of grooming students for strong placement outcomes."}),e.jsx("div",{className:"m40-obj-grid",children:V0.map((s,o)=>e.jsxs("div",{className:"m40-obj-card rv",style:{transitionDelay:`${o*.08}s`},children:[e.jsx("div",{className:"m40-obj-icon",children:s.icon}),e.jsx("div",{className:"m40-obj-title",children:s.title}),e.jsx("p",{className:"m40-obj-desc",children:s.desc})]},o))})]})}),e.jsx("div",{className:"m40-sec",children:e.jsxs("div",{className:"m40-inner",children:[e.jsx(la,{badge:"Process",title:"Program",highlight:"Phases",sub:"The Mission 40 model follows a structured process from selection to final grooming."}),e.jsx("div",{className:"m40-phase-grid",children:K0.map((s,o)=>e.jsxs("div",{className:"m40-phase-card rv",style:{transitionDelay:`${o*.1}s`},children:[e.jsx("div",{className:"m40-phase-num",children:s.num}),e.jsx("h3",{className:"h3",children:s.title}),e.jsx("p",{className:"body-sm",children:s.desc})]},o))})]})}),e.jsx("div",{className:"m40-sec m40-sec--alt",children:e.jsxs("div",{className:"m40-inner",children:[e.jsx(la,{badge:"Results",title:"Mission 40",highlight:"Exam Results",sub:"Below are the mission-wise results for the Batch 2023–26. Each table is paginated with 10 students per page."}),e.jsx("div",{className:"rv",children:e.jsx(ax,{})})]})}),e.jsx("div",{className:"m40-sec",children:e.jsxs("div",{className:"m40-inner",children:[e.jsx(la,{badge:"Consistency",title:"Top 14 Consistent",highlight:"Performers",sub:"These students are highlighted based on their consistency across the six Mission 40 exams."}),e.jsxs("div",{className:"m40-consistency-grid",children:[e.jsxs("div",{className:"rv",style:{background:"#fff",border:"1.5px solid rgba(12,35,64,0.08)",borderRadius:20,boxShadow:"0 6px 32px rgba(12,35,64,0.09)",overflow:"hidden"},children:[e.jsxs("div",{style:{padding:"20px 22px 14px",borderBottom:"1px solid rgba(12,35,64,0.07)",background:"#fafcff"},children:[e.jsx("p",{style:{fontFamily:"'Sora',sans-serif",fontWeight:700,fontSize:"0.9rem",color:"#0c2340",margin:"0 0 3px"},children:"Consistency Ranking"}),e.jsx("p",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:"0.78rem",color:"#94a3b8",margin:0},children:"Frequency calculated out of 6 missions"})]}),e.jsx("div",{style:{overflowX:"auto"},children:e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",minWidth:420},children:[e.jsx("thead",{children:e.jsx("tr",{style:{background:"#f8fafc"},children:["Rank","Student Name","Frequency","Status"].map(s=>e.jsx("th",{style:{padding:"11px 16px",textAlign:"left",fontFamily:"'Sora',sans-serif",fontSize:"0.67rem",color:"#94a3b8",textTransform:"uppercase",letterSpacing:"0.07em",fontWeight:700,borderBottom:"1px solid rgba(12,35,64,0.07)",whiteSpace:"nowrap"},children:s},s))})}),e.jsx("tbody",{children:Wp.map(s=>e.jsxs("tr",{style:{transition:"background 0.12s"},onMouseEnter:o=>o.currentTarget.style.background="#f5f9ff",onMouseLeave:o=>o.currentTarget.style.background="transparent",children:[e.jsx("td",{style:{padding:"11px 16px",borderBottom:"1px solid rgba(12,35,64,0.04)",fontFamily:"'Sora',sans-serif",fontWeight:700,color:"#0c2340",fontSize:"0.83rem",width:56},children:s.rank}),e.jsx("td",{style:{padding:"11px 16px",borderBottom:"1px solid rgba(12,35,64,0.04)",fontFamily:"'DM Sans',sans-serif",fontWeight:600,color:"#0f172a",fontSize:"0.85rem"},children:s.name}),e.jsxs("td",{style:{padding:"11px 16px",borderBottom:"1px solid rgba(12,35,64,0.04)",fontFamily:"'DM Sans',sans-serif",fontWeight:600,color:"#475569",fontSize:"0.85rem",whiteSpace:"nowrap"},children:[s.frequency,"/6"]}),e.jsx("td",{style:{padding:"11px 16px",borderBottom:"1px solid rgba(12,35,64,0.04)"},children:e.jsx("span",{style:{display:"inline-flex",alignItems:"center",gap:5,padding:"4px 10px",borderRadius:999,background:s.frequency>=6?"#dcfce7":s.frequency===5?"#e0f2fe":"#eef2ff",color:s.frequency>=6?"#166534":s.frequency===5?"#075985":"#3730a3",fontFamily:"'Sora',sans-serif",fontWeight:700,fontSize:"0.7rem",whiteSpace:"nowrap"},children:Z0(s.frequency)})})]},s.rank))})]})}),e.jsx("div",{style:{height:16}})]}),e.jsx("div",{className:"rv",style:{transitionDelay:"0.12s"},children:e.jsxs("div",{style:{background:"#fff",border:"1.5px solid rgba(12,35,64,0.08)",borderRadius:20,padding:"26px 22px",boxShadow:"0 4px 20px rgba(12,35,64,0.08)"},children:[e.jsx("p",{style:{fontFamily:"'Sora',sans-serif",fontWeight:800,fontSize:"0.9rem",color:"#0c2340",margin:"0 0 5px"},children:"Top 3 Highlights"}),e.jsx("p",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:"0.78rem",color:"#94a3b8",margin:"0 0 20px"},children:"Strongest repeated performance across all mission examinations."}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:14},children:Wp.slice(0,3).map((s,o)=>e.jsxs("div",{className:`rank-${["gold","silver","bronze"][o]}`,style:{borderRadius:16,padding:"18px 20px",boxShadow:"0 3px 14px rgba(12,35,64,0.09)"},children:[e.jsxs("span",{style:{display:"block",fontSize:"0.75rem",fontWeight:700,opacity:.65,fontFamily:"'Sora',sans-serif"},children:[s.rank," ",["🥇","🥈","🥉"][o]]}),e.jsx("strong",{style:{display:"block",fontSize:"0.97rem",marginTop:6,fontFamily:"'Sora',sans-serif",fontWeight:800,color:"#0f172a"},children:s.name}),e.jsxs("small",{style:{display:"block",marginTop:4,fontWeight:700,fontFamily:"'DM Sans',sans-serif",fontSize:"0.77rem",color:"#334155"},children:[s.frequency,"/6 Missions"]})]},o))})]})})]})]})}),e.jsx("div",{className:"m40-sec m40-sec--alt",children:e.jsxs("div",{className:"m40-inner",children:[e.jsx(la,{badge:"Training Plan",title:"10-Week Training",highlight:"Roadmap",sub:"The training plan is designed to move students from orientation to final interview readiness in a structured way."}),e.jsx("div",{className:"m40-roadmap",children:q0.map((s,o)=>e.jsxs("div",{className:"m40-road-card rv",style:{transitionDelay:`${o*.08}s`},children:[e.jsx("span",{className:"m40-week-badge",children:s.week}),e.jsx("h4",{className:"h3",style:{fontSize:"0.9rem"},children:s.title}),e.jsx("p",{className:"body-xs",children:s.desc})]},o))})]})}),e.jsx("div",{className:"m40-sec",children:e.jsxs("div",{className:"m40-inner",children:[e.jsx(la,{badge:"Outcomes",title:"Expected",highlight:"Outcomes",sub:"Mission 40 aims to produce students who are not just shortlisted, but genuinely ready for placement success."}),e.jsx("div",{className:"m40-outcomes-grid",children:Q0.map((s,o)=>e.jsxs("div",{className:"m40-outcome-card rv",style:{transitionDelay:`${o*.08}s`},children:[e.jsx("div",{className:"m40-check",children:"✓"}),e.jsxs("div",{children:[e.jsx("h4",{className:"h3",style:{fontSize:"0.9rem"},children:s.title}),e.jsx("p",{className:"body-xs",children:s.desc})]})]},o))})]})}),e.jsx("div",{className:"m40-sec m40-sec--alt",children:e.jsxs("div",{className:"m40-inner",children:[e.jsx(la,{badge:"Gallery",title:"Mission 40",highlight:"Photo Gallery",sub:"Moments captured from Mission 40 sessions, assessments, and training activities at Creative Techno College."}),e.jsx("div",{className:"m40-gallery-grid",children:X0.map((s,o)=>e.jsx(nx,{img:s,idx:o},o))})]})}),e.jsx("div",{className:"m40-footer-cta",children:e.jsxs("div",{className:"m40-inner",children:[e.jsx("p",{style:{fontFamily:"'Sora',sans-serif",fontSize:"0.65rem",fontWeight:700,color:"rgba(255,204,0,0.6)",letterSpacing:2,textTransform:"uppercase",margin:"0 0 14px"},children:"Creative Techno College, Angul"}),e.jsx("h2",{style:{fontFamily:"'Sora',sans-serif",fontSize:"clamp(1.4rem,2.8vw,2.1rem)",fontWeight:800,color:"#fff",margin:"0 0 12px",letterSpacing:"-0.5px"},children:"Mission 40  ·  Placement Readiness Program"}),e.jsx("p",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:"0.87rem",color:"rgba(255,255,255,0.38)",margin:"0 0 30px"},children:"Training & Placement Cell  ·  Vice Principal / Placement Team  ·  Batch 2023–26"}),e.jsxs(fe,{to:"/placement/programs",style:{display:"inline-flex",alignItems:"center",gap:9,padding:"13px 26px",borderRadius:13,background:"rgba(255,204,0,0.1)",border:"1.5px solid rgba(255,204,0,0.28)",color:"#ffcc00",fontFamily:"'Sora',sans-serif",fontWeight:700,fontSize:"0.86rem",textDecoration:"none",transition:"all 0.22s"},onMouseEnter:s=>{s.currentTarget.style.background="rgba(255,204,0,0.18)",s.currentTarget.style.transform="translateY(-2px)"},onMouseLeave:s=>{s.currentTarget.style.background="rgba(255,204,0,0.1)",s.currentTarget.style.transform="none"},children:[e.jsx("i",{className:"fa-solid fa-arrow-left"})," Back to Development Programs"]})]})})]})]})}const Lp=[{name:"Technocrat",color:"#3b82f6",colorDark:"#1d4ed8",bg:"linear-gradient(135deg, #1d4ed8 0%, #3b82f6 100%)",desc:"Technology, innovation, and entrepreneurship. Coding, hackathons, and robotics drive our mission.",to:"/gymkhana/technocrat",img:"/CTC NEW REACT WEBSITE/images/GYMKHANA/technocrat.png",tag:"Innovation & Tech"},{name:"Sports",color:"#10b981",colorDark:"#059669",bg:"linear-gradient(135deg, #059669 0%, #10b981 100%)",desc:"Indoor & outdoor games, tournaments, and fitness — building discipline and sportsmanship.",to:"/gymkhana/sports",img:"/CTC NEW REACT WEBSITE/images/GYMKHANA/sports.png",tag:"Athletics & Fitness"},{name:"Cultural",color:"#f59e0b",colorDark:"#d97706",bg:"linear-gradient(135deg, #d97706 0%, #f59e0b 100%)",desc:"Music, dance, drama, arts, and literary activities — a stage for creativity and expression.",to:"/gymkhana/cultural",img:"/CTC NEW REACT WEBSITE/images/GYMKHANA/cultural.png",tag:"Arts & Expression"},{name:"Disha & CSR",color:"#ec4899",colorDark:"#db2777",bg:"linear-gradient(135deg, #db2777 0%, #ec4899 100%)",desc:"Career guidance and social responsibility — outreach programs that make a real difference.",to:"/gymkhana/disha-csr",img:"/CTC NEW REACT WEBSITE/images/GYMKHANA/disha.png",tag:"Community & Growth"}],ix=["Provide a platform for students to engage in co-curricular and extracurricular activities.","Encourage leadership, innovation, and organizational skills among students.","Cultivate teamwork, collaboration, and a sense of responsibility.","Complement academic learning with practical exposure and problem-solving experiences.","Nurture creativity, sportsmanship, and social responsibility."],sx=[{icon:"fa-solid fa-star",title:"Skill Enhancement",desc:"Building confidence, communication, and leadership abilities."},{icon:"fa-solid fa-seedling",title:"Holistic Development",desc:"Balancing academics with cultural, technical, and sports excellence."},{icon:"fa-solid fa-people-group",title:"Community Engagement",desc:"Promoting social awareness and CSR initiatives."},{icon:"fa-solid fa-crown",title:"Student Leadership",desc:"Empowering students to take charge through active roles in clubs and events."},{icon:"fa-solid fa-handshake",title:"Collaboration",desc:"Strengthening unity and coordination among diverse student groups."}];function ox(){return e.jsxs("div",{className:"gym-page",children:[e.jsx("style",{children:`
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
      `}),e.jsx("section",{className:"gym-hero",children:e.jsxs("div",{className:"gym-hero-content",children:[e.jsxs("div",{className:"gym-hero-left",children:[e.jsxs("div",{className:"gym-hero-chip",children:[e.jsx("i",{className:"fa-solid fa-building-columns"})," Creative Techno College · Student Wing"]}),e.jsxs("h1",{children:["GYM",e.jsx("em",{children:"KHANA"})]}),e.jsx("p",{className:"gym-hero-sub",children:"Technocrat · Sports · Cultural · Disha & CSR"}),e.jsx("p",{children:"The vibrant hub of student life, leadership, and creativity at Creative Techno College, Angul. Four dynamic clubs empowering students to explore passions, showcase talents, and develop essential life skills beyond academics."})]}),e.jsx("div",{className:"gym-hero-right",children:e.jsxs("div",{className:"gym-hero-badges",children:[Lp.map((r,s)=>e.jsxs("span",{className:"gym-hero-badge",children:[e.jsx("span",{className:"gym-hero-badge-dot",style:{background:r.color}}),e.jsx("i",{className:r.icon,style:{color:r.color}})," ",r.name]},s)),e.jsxs("span",{className:"gym-hero-badge",children:[e.jsx("span",{className:"gym-hero-badge-dot",style:{background:"#f5c518"}}),e.jsx("i",{className:"fa-solid fa-users",style:{color:"#f5c518"}})," 200+ Active Members"]})]})})]})}),e.jsx("div",{className:"gym-stats-wrap",children:e.jsx("div",{className:"gym-stats-bar",children:[["4","Active Clubs"],["200+","Student Members"],["50+","Events Yearly"],["100%","Participation"]].map(([r,s],o)=>e.jsxs("div",{className:"gym-stat",children:[e.jsx("span",{className:"gym-stat-num",children:r}),e.jsx("span",{className:"gym-stat-label",children:s})]},o))})}),e.jsx("section",{className:"gym-president",children:e.jsxs("div",{className:"gym-president-inner",children:[e.jsx("div",{className:"gym-president-img-wrap",children:e.jsx("img",{src:"/CTC NEW REACT WEBSITE/images/GYMKHANA/Dean Sir.png",alt:"Mr. Manoj Das"})}),e.jsxs("div",{className:"gym-president-text",children:[e.jsx("div",{className:"gym-president-pill",children:"Message from the President"}),e.jsxs("h2",{children:["A Message from Our ",e.jsx("span",{children:"President"})]}),e.jsx("p",{children:'"At Creative Techno College, we believe education is not confined to classrooms. True learning happens when students step beyond books and engage in experiences that shape their personality, values, and leadership qualities.'}),e.jsx("p",{children:'The Gymkhana embodies this spirit — through the four vibrant clubs — Technocrat, Sports, Cultural, and Disha+CSR — we nurture innovation, teamwork, cultural expression, and social responsibility."'}),e.jsx("p",{className:"gym-president-sig",children:"— Mr. Manoj Das  |  Dean Academic & President, Gymkhana"})]})]})}),e.jsxs("section",{className:"gym-vps",children:[e.jsxs("div",{className:"gym-section-heading",children:[e.jsxs("div",{className:"gym-section-pill",children:[e.jsx("i",{className:"fa-solid fa-users"})," Leadership"]}),e.jsxs("h2",{children:["Vice ",e.jsx("span",{children:"Presidents"})]}),e.jsx("p",{children:"Student representatives who lead the Gymkhana alongside the President."})]}),e.jsx("div",{className:"gym-vp-grid",children:[{name:"Mr. Subham Nanda",role:"Vice President",badge:"Boy Representative",img:"/CTC NEW REACT WEBSITE/images/GYMKHANA/subham.jpeg",icon:"fa-solid fa-mars"},{name:"Ms. Bidusmita Mishra",role:"Vice President",badge:"Girl Representative",img:"/CTC NEW REACT WEBSITE/images/GYMKHANA/bidusmita.jpeg",icon:"fa-solid fa-venus"}].map((r,s)=>e.jsxs("div",{className:"gym-vp-card",children:[e.jsxs("div",{className:"gym-vp-card-top",children:[e.jsx("div",{className:"gym-vp-img-ring",children:e.jsx("img",{src:r.img,alt:r.name})}),e.jsx("h4",{children:r.name}),e.jsx("p",{children:r.role})]}),e.jsx("div",{className:"gym-vp-card-bottom",children:e.jsxs("span",{className:"gym-vp-badge",children:[e.jsx("i",{className:r.icon})," ",r.badge]})})]},s))})]}),e.jsxs("section",{className:"gym-clubs",children:[e.jsxs("div",{className:"gym-section-heading",children:[e.jsxs("div",{className:"gym-section-pill",children:[e.jsx("i",{className:"fa-solid fa-layer-group"})," Our Clubs"]}),e.jsxs("h2",{children:["Clubs Under ",e.jsx("span",{children:"Gymkhana"})]}),e.jsx("p",{children:"Click any club to explore its activities, team, and achievements."})]}),e.jsx("div",{className:"gym-clubs-grid",children:Lp.map((r,s)=>e.jsxs(fe,{to:r.to,className:"gym-club-card",children:[e.jsxs("div",{className:"gym-club-img-wrap",children:[e.jsx("img",{src:r.img,alt:r.name}),e.jsx("div",{className:"gym-club-img-overlay"}),e.jsx("div",{className:"gym-club-img-icon",style:{background:r.bg},children:e.jsx("i",{className:r.icon})}),e.jsx("span",{className:"gym-club-img-tag",children:r.tag})]}),e.jsxs("div",{className:"gym-club-card-body",children:[e.jsx("h3",{children:r.name}),e.jsx("p",{children:r.desc}),e.jsxs("div",{className:"gym-club-card-footer",children:[e.jsxs("span",{className:"gym-club-card-link",style:{color:r.color},children:["Explore Club ",e.jsx("i",{className:"fa-solid fa-arrow-right",style:{fontSize:"0.68rem"}})]}),e.jsx("div",{className:"gym-club-card-arrow",style:{background:r.bg},children:e.jsx("i",{className:"fa-solid fa-chevron-right"})})]})]})]},s))})]}),e.jsx("section",{className:"gym-objectives",children:e.jsxs("div",{className:"gym-objectives-inner",children:[e.jsxs("div",{className:"gym-obj-left",children:[e.jsxs("div",{className:"gym-section-pill",children:[e.jsx("i",{className:"fa-solid fa-bullseye"})," Purpose"]}),e.jsxs("h2",{style:{fontFamily:"Poppins,sans-serif",fontSize:"clamp(1.8rem,4vw,2.4rem)",fontWeight:900,color:"#0a1628",margin:"14px 0 14px"},children:["Objectives of"," ",e.jsx("span",{style:{background:"linear-gradient(135deg,#2563eb,#00d4ff)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},children:"Gymkhana"})]}),e.jsx("p",{style:{color:"#64748b",fontSize:"0.93rem",lineHeight:1.8},children:"Our guiding principles that shape every event, club, and initiative we undertake."})]}),e.jsx("div",{className:"gym-obj-list",children:ix.map((r,s)=>e.jsxs("div",{className:"gym-obj-item",children:[e.jsx("div",{className:"gym-obj-num",children:s+1}),e.jsx("p",{children:r})]},s))})]})}),e.jsxs("section",{className:"gym-goals",children:[e.jsxs("div",{className:"gym-section-heading",children:[e.jsxs("div",{className:"gym-section-pill",style:{background:"rgba(245,197,24,0.15)",color:"#f5c518",border:"1px solid rgba(245,197,24,0.3)"},children:[e.jsx("i",{className:"fa-solid fa-flag"})," Our Goals"]}),e.jsxs("h2",{style:{color:"#fff",fontFamily:"Poppins,sans-serif",fontSize:"clamp(1.8rem,4vw,2.5rem)",fontWeight:900,margin:"0 0 12px"},children:["What We ",e.jsx("span",{style:{color:"#f5c518"},children:"Strive For"})]})]}),e.jsx("div",{className:"gym-goals-grid",children:sx.map((r,s)=>e.jsxs("div",{className:"gym-goal-card",children:[e.jsx("i",{className:`${r.icon} gym-goal-icon`}),e.jsx("h3",{children:r.title}),e.jsx("p",{children:r.desc})]},s))})]}),e.jsxs("section",{className:"gym-structure",children:[e.jsxs("div",{className:"gym-section-heading",children:[e.jsxs("div",{className:"gym-section-pill",children:[e.jsx("i",{className:"fa-solid fa-sitemap"})," Organisation"]}),e.jsxs("h2",{children:["Structure of ",e.jsx("span",{children:"Gymkhana"})]})]}),e.jsx("div",{className:"gym-table-wrap",children:e.jsxs("table",{className:"gym-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Role"}),e.jsx("th",{children:"Name / Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"President"})}),e.jsx("td",{children:"Mr. Manoj Das (Dean Academic)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Vice Presidents"})}),e.jsx("td",{children:"Mr. Subham Nanda (Boy) & Ms. Bidusmita Mishra (Girl)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Club Secretaries"})}),e.jsx("td",{children:"One boy & one girl student for each of the four clubs"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Student Members"})}),e.jsx("td",{children:"Active participants across all academic programs"})]})]})]})})]})]})}const Do=[{key:"all",label:"All Photos",icon:"fa-solid fa-images"},{key:"campus",label:"Campus",icon:"fa-solid fa-building-columns"},{key:"events",label:"Events",icon:"fa-solid fa-calendar-star"},{key:"alumni",label:"Alumni",icon:"fa-solid fa-graduation-cap"},{key:"workshop",label:"Workshop",icon:"fa-solid fa-wrench"},{key:"activities",label:"Activities",icon:"fa-solid fa-person-running"},{key:"tour",label:"Tour",icon:"fa-solid fa-plane-departure"}],lx=[...["campus1","campus2","campus3","campus4","campus5","campus6"].map((r,s)=>({src:`/CTC%20NEW%20REACT%20WEBSITE/images/GALLERY/${r}.jpg`,cat:"campus",alt:`Campus ${s+1}`,caption:"CTC Campus"})),...["event1","event2","event3","event4","event5","event6"].map((r,s)=>({src:`/CTC%20NEW%20REACT%20WEBSITE/images/GALLERY/${r}.jpg`,cat:"events",alt:`Event ${s+1}`,caption:"College Events"})),...["alumni1","alumni2","alumni3","alumni4","alumni5","alumni6"].map((r,s)=>({src:`/CTC%20NEW%20REACT%20WEBSITE/images/GALLERY/${r}.jpg`,cat:"alumni",alt:`Alumni ${s+1}`,caption:"Alumni Meet"})),...["workshop1","workshop2","workshop3","workshop4","workshop5","workshop6"].map((r,s)=>({src:`/CTC%20NEW%20REACT%20WEBSITE/images/GALLERY/${r}.jpg`,cat:"workshop",alt:`Workshop ${s+1}`,caption:"Skill Workshops"})),...["Activity1","Activity2","Activity3","Activity4","Activity5","Activity6"].map((r,s)=>({src:`/CTC%20NEW%20REACT%20WEBSITE/images/GALLERY/${r}.jpg`,cat:"activities",alt:`Activity ${s+1}`,caption:"Student Activities"})),...["tour1","tour2","tour3","tour4","tour5","tour6"].map((r,s)=>({src:`/CTC%20NEW%20REACT%20WEBSITE/images/GALLERY/${r}.jpg`,cat:"tour",alt:`Tour ${s+1}`,caption:"Educational Tours"}))],Hp=["tall","wide","normal","normal","tall","normal","wide","normal","normal","tall","normal","wide"],an=lx.map((r,s)=>({...r,size:Hp[s%Hp.length]}));function cx(){var x;const[r,s]=v.useState("all"),[o,c]=v.useState(null),[m,p]=v.useState({}),u=r==="all"?an:an.filter(y=>y.cat===r),b=v.useCallback(y=>{o!==null&&(y.key==="ArrowRight"&&c(g=>(g+1)%u.length),y.key==="ArrowLeft"&&c(g=>(g-1+u.length)%u.length),y.key==="Escape"&&c(null))},[o,u.length]);v.useEffect(()=>(window.addEventListener("keydown",b),()=>window.removeEventListener("keydown",b)),[b]),v.useEffect(()=>(document.body.style.overflow=o!==null?"hidden":"",()=>{document.body.style.overflow=""}),[o]);const h=o!==null?u[o]:null;return e.jsxs(e.Fragment,{children:[e.jsx(Ta,{title:"Campus Gallery – CTC Angul | Campus Life, Events & Achievements",description:"Explore the vibrant campus life at Creative Techno College, Angul through our photo gallery. Events, sports, cultural programs, workshops, alumni meets and more.",keywords:"CTC angul gallery, creative techno college campus, college life angul, CTC events photos",canonical:"/gallery"}),e.jsxs("div",{className:"gl-hero",children:[e.jsx("div",{className:"gl-hero-glow"}),e.jsxs("div",{className:"gl-hero-inner",children:[e.jsx("span",{className:"section-label",style:{color:"var(--cyan)"},children:"Visual Showcase"}),e.jsxs("h1",{children:["Our ",e.jsx("span",{style:{color:"var(--gold)"},children:"Gallery"})]}),e.jsx("p",{children:"Moments that define the Creative Techno College experience — campus life, events, achievements & beyond."}),e.jsxs("div",{className:"gl-hero-pills",children:[e.jsxs("span",{className:"gl-pill",children:[e.jsx("i",{className:"fa-solid fa-images"})," ",an.length," Photos"]}),e.jsxs("span",{className:"gl-pill",children:[e.jsx("i",{className:"fa-solid fa-folder-open"})," ",Do.length-1," Categories"]}),e.jsxs("span",{className:"gl-pill",children:[e.jsx("i",{className:"fa-solid fa-calendar-days"})," 2018 – 2024"]})]})]}),e.jsx("div",{className:"gl-hero-wave",children:e.jsx("svg",{viewBox:"0 0 1440 60",preserveAspectRatio:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M0,0 C360,60 1080,0 1440,40 L1440,60 L0,60 Z",fill:"var(--page-bg)"})})})]}),e.jsxs("div",{className:"gl-filters-wrap",children:[e.jsx("div",{className:"gl-filters",children:Do.map(y=>e.jsxs("button",{className:`gl-filter-btn${r===y.key?" active":""}`,onClick:()=>{s(y.key),c(null)},children:[e.jsx("i",{className:y.icon}),y.label,r===y.key&&e.jsx("span",{className:"gl-filter-count",children:y.key==="all"?an.length:an.filter(g=>g.cat===y.key).length})]},y.key))}),e.jsxs("p",{className:"gl-count-label",children:["Showing ",e.jsx("strong",{children:u.length})," of ",e.jsx("strong",{children:an.length})," photos"]})]}),e.jsx("div",{className:"gl-grid-wrap",children:e.jsx("div",{className:"gl-grid",children:u.map((y,g)=>e.jsxs("div",{className:`gl-item gl-item-${y.size}`,onClick:()=>c(g),style:{animationDelay:`${g%12*.04}s`},children:[e.jsx("img",{src:y.src,alt:y.alt,loading:"lazy",onLoad:()=>p(E=>({...E,[y.src]:!0})),onError:E=>{E.target.closest(".gl-item").style.display="none"}}),e.jsx("div",{className:"gl-item-overlay",children:e.jsxs("div",{className:"gl-item-overlay-inner",children:[e.jsx("i",{className:"fa-solid fa-magnifying-glass-plus"}),e.jsx("span",{children:y.caption})]})})]},`${y.cat}-${g}`))},r)}),h&&e.jsxs("div",{className:"gl-lightbox",onClick:y=>{y.target===y.currentTarget&&c(null)},role:"dialog","aria-modal":"true",children:[e.jsx("button",{className:"gl-lb-close",onClick:()=>c(null),"aria-label":"Close",children:e.jsx("i",{className:"fa-solid fa-xmark"})}),e.jsx("button",{className:"gl-lb-nav gl-lb-prev",onClick:()=>c(y=>(y-1+u.length)%u.length),"aria-label":"Previous",children:e.jsx("i",{className:"fa-solid fa-chevron-left"})}),e.jsxs("div",{className:"gl-lb-panel",children:[e.jsx("img",{className:"gl-lb-img",src:h.src,alt:h.alt},h.src),e.jsxs("div",{className:"gl-lb-caption",children:[e.jsx("span",{className:"gl-lb-cat",children:(x=Do.find(y=>y.key===h.cat))==null?void 0:x.label}),e.jsxs("span",{className:"gl-lb-count",children:[o+1," / ",u.length]})]}),e.jsx("div",{className:"gl-lb-thumbs",children:u.map((y,g)=>e.jsx("div",{className:`gl-lb-thumb${o===g?" active":""}`,onClick:()=>c(g),children:e.jsx("img",{src:y.src,alt:"",loading:"lazy"})},g))})]}),e.jsx("button",{className:"gl-lb-nav gl-lb-next",onClick:()=>c(y=>(y+1)%u.length),"aria-label":"Next",children:e.jsx("i",{className:"fa-solid fa-chevron-right"})})]})]})}const dx=[{icon:"fa-solid fa-phone-volume",label:"Admissions Helpline",val:"+91 9778427170",href:"tel:+919778427170",color:"#00d4ff"},{icon:"fa-solid fa-envelope-open-text",label:"Principal Email",val:"principal.creativecollege@gmail.com",href:"mailto:principal.creativecollege@gmail.com",color:"#f5c518"},{icon:"fa-solid fa-location-dot",label:"Campus Address",val:"Baluakata, Saradhapur, Angul – 759143",href:"https://maps.google.com/?q=Creative+Techno+College+Angul",color:"#7b61ff"},{icon:"fa-brands fa-whatsapp",label:"WhatsApp",val:"+91 9668844571",href:"https://wa.me/919668844571",color:"#25d366"}],Vo=[{key:"academic",icon:"fa-solid fa-book-open",title:"Academic & Student Support",color:"#0d7ff5",cards:[{title:"Academic Support",icon:"fa-solid fa-chalkboard-user",people:[{name:"Mr. Bhabani Sankar Sahoo",phone:["+91 9668844571"],email:"bhabaniwipro89@gmail.com"}]},{title:"Examination & Certificates",icon:"fa-solid fa-file-certificate",people:[{name:"Mr. Krishnasis Mishra",phone:["+91 8249090003"],email:"principal.creativecollege@gmail.com"}]},{title:"Counselling & Wellness",icon:"fa-solid fa-heart-pulse",people:[{name:"Respective Batch Mentor"}]}]},{key:"career",icon:"fa-solid fa-briefcase",title:"Training & Career Development",color:"#f5c518",cards:[{title:"Training & Placement",icon:"fa-solid fa-briefcase",people:[{name:"Mr. Bhabani S. Sahoo",phone:["+91 9668844571"],email:"bhabaniwipro89@gmail.com"},{name:"Mr. Subhrajyoti Behera",phone:["+91 9861071840"],email:"subhyrajyoticafpl@gmail.com"}]},{title:"DISHA",icon:"fa-solid fa-hands-holding-child",people:[{name:"Mr. Subhrajyoti Behera",phone:["+91 9861071840"],email:"subhyrajyoticafpl@gmail.com"},{name:"Ms. Neha Solanki",phone:[""],email:"nehasolanki1411@gmail.com"}]},{title:"Technocrat Club",icon:"fa-solid fa-microchip",people:[{name:"Mr. Bhabani S. Sahoo",phone:["+91 9668844571"]},{name:"Mr. Swastik R. Sahoo",phone:["+91 6372877833"],email:"sahooswastik406@gmail.com"}]},{title:"Alumni",icon:"fa-solid fa-graduation-cap",people:[{name:"Mr. Krishnasis Mishra",phone:["+91 8249090003"],email:"principal.creativecollege@gmail.com"}]}]},{key:"hostel",icon:"fa-solid fa-house-user",title:"Hostel & Transport",color:"#7b61ff",cards:[{title:"Transport Services",icon:"fa-solid fa-bus-simple",people:[{name:"Mr. Satya S. S. Dehury",phone:["+91 9439137384"],email:"sssdehury89@gmail.com"},{name:"Mr. Sarat C. Sahu",phone:["+91 9853167581"],email:"saratmuna243@gmail.com"}]},{title:"Hostel (Boys)",icon:"fa-solid fa-bed",people:[{name:"Mr. Satya S. S. Dehury",phone:["+91 9439137384"]},{name:"Mr. Raghunath Behera",phone:["+91 8984949923"]}]},{title:"Hostel (Girls)",icon:"fa-solid fa-bed",people:[{name:"Ms. Nibedita Patra",phone:["+91 7606878160"],email:"nibedita.patra2903@gmail.com"},{name:"Ms. Arghyarupa Behera",phone:["+91 9827465376"],email:"arghyarupabehera3@gmail.com"}]}]},{key:"admin",icon:"fa-solid fa-landmark",title:"Administration & Finance",color:"#ff6b6b",cards:[{title:"General Administration",icon:"fa-solid fa-building",people:[{name:"Mr. Manoj Kumar Das",phone:["+91 9338233303","+91 7008574320"],email:"dasmanojp@gmail.com"}]},{title:"Scholarship & Financial Aid",icon:"fa-solid fa-hand-holding-dollar",people:[{name:"Mr. Subhrajyoti Behera",phone:["+91 9861071840"],email:"subhyrajyoticafpl@gmail.com"}]},{title:"Fees & Payments",icon:"fa-solid fa-receipt",people:[{name:"Mr. Abhisek Satpathy",phone:["+91 8260077588"],email:"abhisheksathpathy020@gmail.com"}]},{title:"Admissions Front Office",icon:"fa-solid fa-door-open",people:[{name:"Front Office",phone:["+91 9778427170","+91 9668284222","+91 9668332555"]}]}]},{key:"services",icon:"fa-solid fa-building-columns",title:"Other Services",color:"#25d366",cards:[{title:"Library",icon:"fa-solid fa-book",people:[{name:"Ms. Monika Sahu",phone:["+91 9668284222"],email:"monika28sahu@gmail.com"}]},{title:"Canteen",icon:"fa-solid fa-utensils",people:[{name:"Mr. Sarat C. Sahu",phone:["+91 9853167581"],email:"saratmuna243@gmail.com"},{name:"Mr. Ranjan Das",phone:["+91 8917466271"]}]},{title:"CSR & Sports",icon:"fa-solid fa-trophy",people:[{name:"Mr. Satya S. S. Dehury",phone:["+91 9439137384"],email:"sssdehury89@gmail.com"}]}]}];function px({name:r,phone:s,email:o}){return e.jsxs("div",{className:"ct-person",children:[r&&e.jsxs("p",{children:[e.jsx("i",{className:"fa-solid fa-user"}),e.jsx("strong",{children:r})]}),s==null?void 0:s.map((c,m)=>e.jsxs("p",{children:[e.jsx("i",{className:"fa-solid fa-phone"}),e.jsx("a",{href:`tel:${c.replace(/\s/g,"")}`,children:c})]},m)),o&&e.jsxs("p",{children:[e.jsx("i",{className:"fa-solid fa-envelope"}),e.jsx("a",{href:`mailto:${o}`,style:{wordBreak:"break-all"},children:o})]})]})}function mx({title:r,icon:s,people:o}){return e.jsxs("div",{className:"ct-card",children:[e.jsxs("div",{className:"ct-card-title",children:[e.jsx("i",{className:s}),r]}),o.map((c,m)=>e.jsx(px,{...c},m))]})}function ux(){const[r,s]=v.useState({name:"",phone:"",email:"",dept:"",msg:""}),[o,c]=v.useState(!1),m=(u,b)=>s(h=>({...h,[u]:b}));function p(u){u.preventDefault(),typeof window<"u"&&(window.dataLayer=window.dataLayer||[],window.dataLayer.push({event:"contact_form_submitted",form_type:"whatsapp_enquiry",dept:r.dept||"General"}),typeof window.gtag=="function"&&window.gtag("event","contact",{event_category:"engagement",event_label:"WhatsApp Enquiry Submit",dept:r.dept||"General"}),console.log("WhatsApp enquiry conversion events dispatched."));const b=`*CTC Enquiry*
Name: ${r.name}
Phone: ${r.phone}
Email: ${r.email||"—"}
Dept: ${r.dept||"—"}
Message: ${r.msg}`;window.open(`https://wa.me/919668844571?text=${encodeURIComponent(b)}`,"_blank"),c(!0)}return o?e.jsxs("div",{className:"ct-form-success",children:[e.jsx("i",{className:"fa-solid fa-circle-check"}),e.jsx("h3",{children:"Message Sent!"}),e.jsx("p",{children:"Your enquiry has been forwarded via WhatsApp. We'll get back to you shortly."}),e.jsx("button",{className:"btn-primary",onClick:()=>c(!1),children:"Send Another"})]}):e.jsxs("form",{className:"ct-form",onSubmit:p,children:[e.jsxs("div",{className:"ct-form-row",children:[e.jsxs("div",{className:"ct-form-field",children:[e.jsx("label",{children:"Full Name *"}),e.jsx("input",{required:!0,placeholder:"Your name",value:r.name,onChange:u=>m("name",u.target.value)})]}),e.jsxs("div",{className:"ct-form-field",children:[e.jsx("label",{children:"Mobile Number *"}),e.jsx("input",{required:!0,type:"tel",placeholder:"+91 XXXXX XXXXX",value:r.phone,onChange:u=>m("phone",u.target.value)})]})]}),e.jsxs("div",{className:"ct-form-row",children:[e.jsxs("div",{className:"ct-form-field",children:[e.jsx("label",{children:"Email Address"}),e.jsx("input",{type:"email",placeholder:"Optional",value:r.email,onChange:u=>m("email",u.target.value)})]}),e.jsxs("div",{className:"ct-form-field",children:[e.jsx("label",{children:"Department"}),e.jsxs("select",{value:r.dept,onChange:u=>m("dept",u.target.value),children:[e.jsx("option",{value:"",children:"Select Department"}),Vo.map(u=>e.jsx("option",{children:u.title},u.key)),e.jsx("option",{children:"Admissions"}),e.jsx("option",{children:"Other"})]})]})]}),e.jsxs("div",{className:"ct-form-field",children:[e.jsx("label",{children:"Your Message *"}),e.jsx("textarea",{required:!0,rows:4,placeholder:"Write your query or message here…",value:r.msg,onChange:u=>m("msg",u.target.value)})]}),e.jsxs("button",{type:"submit",className:"ct-form-submit",children:[e.jsx("i",{className:"fa-brands fa-whatsapp"})," Send via WhatsApp"]})]})}function fx(){const[r,s]=v.useState(""),[o,c]=v.useState("all"),m=Vo.filter(p=>o==="all"||p.key===o).map(p=>({...p,cards:p.cards.filter(u=>{if(!r.trim())return!0;const b=r.toLowerCase();return u.title.toLowerCase().includes(b)||u.people.some(h=>{var x,y,g;return((x=h.name)==null?void 0:x.toLowerCase().includes(b))||((y=h.phone)==null?void 0:y.some(E=>E.includes(b)))||((g=h.email)==null?void 0:g.toLowerCase().includes(b))})})})).filter(p=>p.cards.length>0);return e.jsxs(e.Fragment,{children:[e.jsx(Ta,{title:"Contact Creative Techno College | Best College in Angul, Odisha",description:"Get in touch with Creative Techno College, Angul. Contact us for admission inquiries regarding BCA, BBA, MBA, MCA, AI, and Data Science programs.",keywords:"creative techno college contact, CTC angul phone number, top AI course odisha, best residential college angul, college in angul contact, admission inquiry angul",canonical:"/contacts"}),e.jsxs("div",{className:"ct-hero",children:[e.jsx("div",{className:"ct-hero-glow"}),e.jsxs("div",{className:"ct-hero-inner",children:[e.jsx("span",{className:"section-label",style:{color:"var(--cyan)"},children:"Reach Out"}),e.jsxs("h1",{children:["Contact the ",e.jsx("span",{style:{color:"var(--gold)"},children:"Top College in Angul"})]}),e.jsxs("p",{style:{maxWidth:"700px",margin:"0 auto 10px"},children:["Ready to join the ",e.jsx("strong",{children:"top educational institution in Angul"}),"? Our admissions team is here to answer all your questions regarding course structures, hostel facilities, and campus life."]}),e.jsxs("p",{style:{maxWidth:"700px",margin:"0 auto 20px",fontSize:"0.85rem"},children:["Visit us to see firsthand why we are considered the ",e.jsx("strong",{children:"best residential college in Angul"}),". Whether you are an engineering aspirant, a future data scientist inquiring about the ",e.jsx("strong",{children:"top AI course in Odisha"}),", or a parent seeking the best education for your child, contact Creative Techno College today to shape a brighter tomorrow."]}),e.jsxs("div",{className:"ct-search-wrap",children:[e.jsx("i",{className:"fa-solid fa-magnifying-glass"}),e.jsx("input",{className:"ct-search",type:"text",placeholder:"Search by name, department, phone…",value:r,onChange:p=>s(p.target.value)}),r&&e.jsx("button",{className:"ct-search-clear",onClick:()=>s(""),children:e.jsx("i",{className:"fa-solid fa-xmark"})})]})]}),e.jsx("div",{className:"ct-hero-wave",children:e.jsx("svg",{viewBox:"0 0 1440 60",preserveAspectRatio:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M0,0 C360,60 1080,0 1440,40 L1440,60 L0,60 Z",fill:"var(--page-bg)"})})})]}),e.jsx("div",{className:"ct-quick-wrap",children:e.jsx("div",{className:"ct-quick-grid",children:dx.map((p,u)=>e.jsxs("a",{href:p.href,className:"ct-quick-card",target:p.href.startsWith("http")?"_blank":void 0,rel:"noreferrer",children:[e.jsx("div",{className:"ct-quick-icon",style:{background:`${p.color}18`,border:`1.5px solid ${p.color}44`},children:e.jsx("i",{className:p.icon,style:{color:p.color}})}),e.jsxs("div",{children:[e.jsx("p",{className:"ct-quick-label",children:p.label}),e.jsx("p",{className:"ct-quick-val",children:p.val})]}),e.jsx("i",{className:"fa-solid fa-arrow-up-right-from-square ct-quick-ext"})]},u))})}),e.jsx("div",{className:"ct-tabs-wrap",children:e.jsxs("div",{className:"ct-tabs",children:[e.jsxs("button",{className:`ct-tab${o==="all"?" active":""}`,onClick:()=>c("all"),children:[e.jsx("i",{className:"fa-solid fa-grip"})," All Departments"]}),Vo.map(p=>e.jsxs("button",{className:`ct-tab${o===p.key?" active":""}`,onClick:()=>c(p.key),children:[e.jsx("i",{className:p.icon})," ",p.title.split(" ")[0]]},p.key))]})}),e.jsx("div",{className:"ct-body",children:m.length===0?e.jsxs("div",{className:"ct-no-results",children:[e.jsx("i",{className:"fa-solid fa-magnifying-glass"}),e.jsxs("p",{children:['No contacts found for "',e.jsx("strong",{children:r}),'"']}),e.jsx("button",{className:"btn-outline",onClick:()=>s(""),children:"Clear Search"})]}):m.map(p=>e.jsxs("div",{className:"ct-dept",children:[e.jsxs("div",{className:"ct-dept-header",style:{"--dc":p.color},children:[e.jsx("div",{className:"ct-dept-icon",children:e.jsx("i",{className:p.icon})}),e.jsx("h2",{children:p.title}),e.jsxs("span",{className:"ct-dept-count",children:[p.cards.length," contact",p.cards.length!==1?"s":""]})]}),e.jsx("div",{className:"ct-cards-grid",children:p.cards.map((u,b)=>e.jsx(mx,{...u},b))})]},p.key))}),e.jsx("section",{className:"ct-map-section",children:e.jsxs("div",{className:"ct-map-inner",children:[e.jsxs("div",{className:"ct-map-box",children:[e.jsxs("div",{className:"ct-map-header",children:[e.jsx("i",{className:"fa-solid fa-location-dot"}),e.jsxs("div",{children:[e.jsx("h3",{children:"Find Us"}),e.jsx("p",{children:"Creative Techno College, Angul"})]})]}),e.jsx("div",{className:"ct-map-embed",children:e.jsx("iframe",{title:"CTC Campus Map",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3731.4!2d85.0964!3d20.8400!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19f3c6f2bd7d01%3A0x9b7694f44f8e2b1c!2sCreative+Techno+College!5e0!3m2!1sen!2sin!4v1",allowFullScreen:"",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade"})}),e.jsxs("div",{className:"ct-address-list",children:[e.jsxs("div",{className:"ct-addr-row",children:[e.jsx("i",{className:"fa-solid fa-building-columns"}),e.jsxs("span",{children:[e.jsx("strong",{children:"Campus:"})," Baluakata, Saradhapur, Angul, Odisha – 759143"]})]}),e.jsxs("div",{className:"ct-addr-row",children:[e.jsx("i",{className:"fa-solid fa-city"}),e.jsxs("span",{children:[e.jsx("strong",{children:"City Office:"})," Tamrit Colony, Angul"]})]}),e.jsxs("div",{className:"ct-addr-row",children:[e.jsx("i",{className:"fa-solid fa-clock"}),e.jsxs("span",{children:[e.jsx("strong",{children:"Office Hours:"})," Mon – Sat, 9:00 AM – 5:00 PM"]})]})]})]}),e.jsxs("div",{className:"ct-form-box",children:[e.jsxs("div",{className:"ct-form-header",children:[e.jsx("i",{className:"fa-brands fa-whatsapp"}),e.jsxs("div",{children:[e.jsx("h3",{children:"Send an Enquiry"}),e.jsx("p",{children:"We'll respond via WhatsApp within 24 hours"})]})]}),e.jsx(ux,{})]})]})})]})}function hx(){v.useEffect(()=>{const r=document.querySelectorAll(".rv, .rv-l, .rv-r"),s=new IntersectionObserver(o=>o.forEach(c=>{c.isIntersecting&&c.target.classList.add("visible")}),{threshold:.08});return r.forEach(o=>s.observe(o)),()=>s.disconnect()},[])}const Em={resolution:[{date:"04-10-2024",pdf:"/CTC NEW REACT WEBSITE/images/ICC/1.pdf",label:"ICC Resolution — October 2024"}],committee:[{date:"01-05-2025",pdf:"/CTC NEW REACT WEBSITE/images/ICC/8.pdf",label:"Committee Members — May 2025"},{date:"18-03-2025",pdf:"/CTC NEW REACT WEBSITE/images/ICC/7.pdf",label:"Committee Members — March 2025"},{date:"05-12-2024",pdf:"/CTC NEW REACT WEBSITE/images/ICC/6.pdf",label:"Committee Members — December 2024"},{date:"05-10-2024",pdf:"/CTC NEW REACT WEBSITE/images/ICC/2.pdf",label:"Committee Members — October 2024"}],events:[{date:"05-12-2024",pdf:"/CTC NEW REACT WEBSITE/images/ICC/4.pdf",label:"Awareness Program — December 2024"},{date:"25-11-2024",pdf:"/CTC NEW REACT WEBSITE/images/ICC/5.pdf",label:"Gender Sensitization — November 2024"}],vision:[{date:"05-10-2024",pdf:"/CTC NEW REACT WEBSITE/images/ICC/3.pdf",label:"ICC Vision Document — October 2024"}]},gx=[{icon:"fa-hand",text:"Physical contact and advances"},{icon:"fa-comment-slash",text:"Sexually colored remarks"},{icon:"fa-user-lock",text:"Request for sexual favors"},{icon:"fa-eye-slash",text:"Showing pornography"},{icon:"fa-triangle-exclamation",text:"Other unwelcome sexual conduct"}],xx=["Ensure safe work and academic environment for staff and students.","Deliver impartial justice in sexual harassment cases.","Promote gender equity policies across the institution.","Organize awareness and sensitization programs.","Display institutional policies publicly.","Publish ICC members list and contact details.","Develop transparent complaint mechanism.","Conduct inquiries based on principles of natural justice.","Recommend corrective and preventive action.","Monitor implementation and follow-ups.","Provide emotional and psychological support to complainants."],bx=[{id:"about",label:"About",icon:"fa-circle-info"},{id:"resolution",label:"Resolution",icon:"fa-gavel"},{id:"committee",label:"Committee",icon:"fa-users"},{id:"events",label:"Events",icon:"fa-calendar-days"},{id:"vision",label:"Vision",icon:"fa-eye"}];function yx({onClose:r}){const s=v.useRef(null);v.useEffect(()=>{const p=u=>{u.key==="Escape"&&r()};return document.addEventListener("keydown",p),document.body.style.overflow="hidden",()=>{document.removeEventListener("keydown",p),document.body.style.overflow=""}},[r]);const o=p=>{p.target===s.current&&r()},c=()=>{const p=document.createElement("a");p.href="/CTC NEW REACT WEBSITE/images/ICC/form.pdf",p.download="ICC_Complaint_Form.pdf",p.click()};return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
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
  `}),e.jsx("div",{className:"icc-backdrop",ref:s,onClick:o,children:e.jsxs("div",{className:"icc-modal",role:"dialog","aria-modal":"true","aria-labelledby":"modal-title",children:[e.jsxs("div",{className:"icc-modal-header",children:[e.jsx("button",{className:"icc-modal-close",onClick:r,"aria-label":"Close",children:e.jsx("i",{className:"fa-solid fa-xmark"})}),e.jsx("div",{className:"icc-modal-title",id:"modal-title",children:"Submit Your Complaint"}),e.jsx("div",{className:"icc-modal-sub",children:"Internal Complaints Committee · CTC"})]}),e.jsx("div",{className:"icc-modal-body",children:e.jsxs("div",{className:"icc-modal-options",children:[e.jsxs("button",{className:"icc-modal-opt primary",onClick:()=>window.open("https://docs.google.com/forms/d/e/1FAIpQLSeXE1THmrO8-fPHCyvU1L2dzc45Na9Qy6vVijfNHzWxUhJRrQ/viewform","_blank"),children:[e.jsx("div",{className:"icc-modal-opt-icon",children:e.jsx("i",{className:"fa-solid fa-laptop"})}),e.jsxs("div",{children:[e.jsx("div",{className:"icc-modal-opt-label",children:"Apply Online"}),e.jsx("div",{className:"icc-modal-opt-sub",children:"Google Form"})]})]}),e.jsxs("button",{className:"icc-modal-opt secondary",onClick:c,children:[e.jsx("div",{className:"icc-modal-opt-icon",children:e.jsx("i",{className:"fa-solid fa-file-arrow-down"})}),e.jsxs("div",{children:[e.jsx("div",{className:"icc-modal-opt-label",children:"Download Form"}),e.jsx("div",{className:"icc-modal-opt-sub",children:"PDF Format"})]})]})]})})]})})]})}function vx({section:r}){const s=Em[r]||[],[o,c]=v.useState(null);return s.length===0?e.jsxs("div",{style:{textAlign:"center",padding:"40px 20px",color:"#94a3b8"},children:[e.jsx("i",{className:"fa-solid fa-folder-open",style:{fontSize:"2rem",marginBottom:12,display:"block",opacity:.4}}),e.jsx("p",{style:{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"0.88rem",fontWeight:600,margin:0},children:"No documents available yet."})]}):e.jsx("div",{style:{overflowX:"auto"},children:e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontFamily:"'Plus Jakarta Sans',sans-serif"},children:[e.jsx("thead",{children:e.jsx("tr",{children:["#","Date","Document","Action"].map((m,p)=>e.jsx("th",{style:{padding:"14px 18px",textAlign:"left",background:"linear-gradient(135deg,#0c2340,#1a3a6b)",color:"#ffcc00",fontSize:"0.75rem",fontWeight:800,letterSpacing:"0.8px",textTransform:"uppercase",borderBottom:"2px solid rgba(255,204,0,0.2)",whiteSpace:"nowrap"},children:m},p))})}),e.jsx("tbody",{children:s.map((m,p)=>e.jsxs("tr",{onMouseEnter:()=>c(p),onMouseLeave:()=>c(null),style:{background:o===p?"#f0f6ff":p%2===0?"#fff":"#f8fafc",transition:"background 0.2s"},children:[e.jsx("td",{style:{padding:"14px 18px",color:"#94a3b8",fontWeight:700,fontSize:"0.82rem",width:48},children:String(p+1).padStart(2,"0")}),e.jsxs("td",{style:{padding:"14px 18px",fontSize:"0.85rem",fontWeight:600,color:"#4a6080",whiteSpace:"nowrap"},children:[e.jsx("i",{className:"fa-regular fa-calendar",style:{marginRight:8,color:"#0c2340",opacity:.5}}),m.date]}),e.jsx("td",{style:{padding:"14px 18px",fontSize:"0.85rem",fontWeight:600,color:"#0c2340"},children:m.label}),e.jsx("td",{style:{padding:"14px 18px"},children:e.jsxs("a",{href:m.pdf,target:"_blank",rel:"noreferrer",style:{display:"inline-flex",alignItems:"center",gap:6,background:"linear-gradient(135deg,#0c2340,#1a3a6b)",color:"#ffcc00",textDecoration:"none",padding:"7px 14px",borderRadius:8,fontSize:"0.72rem",fontWeight:800,letterSpacing:"0.4px",textTransform:"uppercase",transition:"transform 0.2s, box-shadow 0.2s",boxShadow:"0 4px 12px rgba(12,35,64,0.2)",whiteSpace:"nowrap"},onMouseEnter:u=>{u.currentTarget.style.transform="translateY(-2px)",u.currentTarget.style.boxShadow="0 8px 20px rgba(12,35,64,0.35)"},onMouseLeave:u=>{u.currentTarget.style.transform="none",u.currentTarget.style.boxShadow="0 4px 12px rgba(12,35,64,0.2)"},children:[e.jsx("i",{className:"fa-solid fa-file-pdf"})," View PDF"]})})]},p))})]})})}function jx(){hx();const[r,s]=v.useState("about"),[o,c]=v.useState(!1),[m,p]=v.useState(!1),u=v.useRef(null);v.useEffect(()=>{setTimeout(()=>p(!0),60)},[]);const b=g=>{s(g),setTimeout(()=>{u.current&&u.current.scrollIntoView({behavior:"smooth",block:"start"})},80)},h=`
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
  `,x={about:{title:"About the ICC",sub:"Background, mandate & scope · Creative Techno College"},resolution:{title:"ICC Resolutions",sub:"Formal resolutions and policy decisions"},committee:{title:"Committee Members",sub:"Constituted as per POSH Act 2013"},events:{title:"Events & Programmes",sub:"Awareness, sensitization and outreach activities"},vision:{title:"ICC Vision",sub:"Mission, objectives and institutional commitment"}},y=g=>{const E=Em[g]||[],D=[...new Set(E.map(F=>F.date.split("-")[2]))];return e.jsxs("div",{className:"icc-doc-stats",children:[e.jsxs("div",{className:"icc-doc-stat",children:[e.jsx("div",{className:"icc-doc-stat-val",children:E.length}),e.jsx("div",{className:"icc-doc-stat-lbl",children:"Documents"})]}),e.jsxs("div",{className:"icc-doc-stat",children:[e.jsx("div",{className:"icc-doc-stat-val",children:D.length}),e.jsx("div",{className:"icc-doc-stat-lbl",children:"Academic Years"})]}),e.jsxs("div",{className:"icc-doc-stat",children:[e.jsx("div",{className:"icc-doc-stat-val",children:"PDF"}),e.jsx("div",{className:"icc-doc-stat-lbl",children:"Format"})]})]})};return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:h}),o&&e.jsx(yx,{onClose:()=>c(!1)}),e.jsxs("div",{className:"icc-page",children:[e.jsx("div",{className:"icc-hero",children:e.jsxs("div",{className:"icc-hero-content",children:[e.jsxs("div",{className:"icc-hero-left",children:[e.jsxs("div",{className:"icc-hero-badge",children:[e.jsx("i",{className:"fa-solid fa-shield-halved"})," ICC · POSH Act 2013"]}),e.jsxs("h1",{className:"icc-hero-title",children:["Internal",e.jsx("br",{}),e.jsx("em",{children:"Complaints"}),e.jsx("br",{}),"Committee"]}),e.jsx("p",{className:"icc-hero-sub",children:"Committed to maintaining a safe, respectful and equitable working and academic environment for all women at Creative Techno College."}),e.jsx("div",{className:"icc-hero-pills",children:[{icon:"fa-scale-balanced",text:"Zero Tolerance Policy"},{icon:"fa-lock",text:"Confidential Process"},{icon:"fa-gavel",text:"Natural Justice"},{icon:"fa-building-columns",text:"UGC Mandated"}].map((g,E)=>e.jsxs("span",{className:"icc-hero-pill",children:[e.jsx("i",{className:`fa-solid ${g.icon}`,style:{color:"#ffcc00",fontSize:"0.65rem"}}),g.text]},E))})]}),e.jsx("div",{className:"icc-hero-right",children:e.jsx("div",{className:"icc-hero-logo",children:e.jsx("img",{src:"/CTC NEW REACT WEBSITE/images/ICC/LOGO FINAL.png",alt:"Creative Techno College",onError:g=>{g.target.parentElement.innerHTML='<span style="font-size:2.5rem">🏫</span>'}})})})]})}),e.jsx("div",{className:"icc-wave",children:e.jsx("svg",{viewBox:"0 0 1440 56",preserveAspectRatio:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M0,38 C360,56 1080,0 1440,38 L1440,56 L0,56 Z",fill:"#f0f4f8"})})}),e.jsx("div",{className:"icc-complaint-strip rv",children:e.jsxs("button",{className:"icc-complaint-btn",onClick:()=>c(!0),children:[e.jsx("div",{className:"icc-complaint-btn-shine"}),e.jsxs("div",{className:"icc-complaint-btn-left",children:[e.jsx("div",{className:"icc-complaint-icon",children:e.jsx("i",{className:"fa-solid fa-pen-to-square"})}),e.jsxs("div",{children:[e.jsx("div",{className:"icc-complaint-title",children:"Write Your Complaint Here"}),e.jsx("div",{className:"icc-complaint-sub",children:"Confidential · Secure · Protected — File online or download form"})]})]}),e.jsx("div",{className:"icc-complaint-arrow",children:e.jsx("i",{className:"fa-solid fa-arrow-right"})})]})}),e.jsxs("div",{className:"icc-main",children:[e.jsx("div",{className:"icc-tab-bar rv",style:{transitionDelay:"0.1s"},children:bx.map(g=>e.jsxs("button",{className:`icc-tab${r===g.id?" active":""}`,onClick:()=>b(g.id),children:[e.jsx("i",{className:`fa-solid ${g.icon}`}),g.label]},g.id))}),e.jsxs("div",{className:"icc-content-card rv",style:{transitionDelay:"0.15s"},ref:u,children:[e.jsxs("div",{className:"icc-content-header",children:[e.jsx("div",{className:"icc-content-header-title",children:x[r].title}),e.jsx("div",{className:"icc-content-header-sub",children:x[r].sub})]}),e.jsxs("div",{className:"icc-content-body",children:[r==="about"&&e.jsxs("div",{style:{animation:"iccTabIn 0.4s ease both"},children:[e.jsxs("div",{className:"icc-about-grid",children:[e.jsxs("div",{className:"icc-about-text",children:[e.jsxs("p",{children:["As per the guidelines of the ",e.jsx("strong",{children:"Supreme Court of India"}),", UGC, ",e.jsx("strong",{children:"Section 4 SHW Act 2013"})," and AICTE Regulations, 2016 vide No. F. AICTE/WH/2016/01 dated 10th June, 2016 — ",e.jsx("em",{children:"Gender Sensitization, Prevention and Prohibition of Sexual Harassment of Women Employees and Students and Redressal of Grievances in Technical Institutions"})," — ",e.jsx("strong",{children:"Creative Techno College"})," has constituted an Internal Complaints Committee (ICC)."]}),e.jsxs("p",{style:{marginTop:16},children:["The ICC of Creative Techno College facilitates ",e.jsx("strong",{children:"safe and secure educational and working environments"})," for both female students and staff. The Institute follows a strict policy of ",e.jsx("strong",{children:"zero tolerance"})," towards human rights violations. The Committee addresses issues regarding prevention, prohibition and redressal of sexual harassment of women at the workplace."]})]}),e.jsx("div",{className:"icc-legal-badges",children:[{icon:"fa-building-columns",label:"Supreme Court Guidelines",sub:"Vishakha Guidelines & subsequent orders"},{icon:"fa-scroll",label:"POSH Act 2013",sub:"Sexual Harassment of Women at Workplace Act"},{icon:"fa-landmark",label:"AICTE Regulations 2016",sub:"No. F.AICTE/WH/2016/01 — June 2016"},{icon:"fa-book-open",label:"UGC Policy Framework",sub:"Gender sensitization mandate for HEIs"}].map((g,E)=>e.jsxs("div",{className:"icc-legal-badge",children:[e.jsx("div",{className:"icc-legal-badge-icon",children:e.jsx("i",{className:`fa-solid ${g.icon}`})}),e.jsxs("div",{children:[e.jsx("div",{className:"icc-legal-badge-text",children:g.label}),e.jsx("div",{className:"icc-legal-badge-sub",children:g.sub})]})]},E))})]}),e.jsxs("div",{style:{background:"#fef2f2",border:"1.5px solid #fecaca",borderRadius:18,padding:28,marginBottom:28},children:[e.jsxs("div",{className:"icc-harassment-header",children:[e.jsx("div",{className:"icc-harassment-icon-wrap",children:e.jsx("i",{className:"fa-solid fa-triangle-exclamation"})}),e.jsxs("div",{children:[e.jsx("div",{className:"icc-harassment-title",children:"What Constitutes Sexual Harassment?"}),e.jsx("div",{className:"icc-harassment-sub",children:"As defined under Sexual Harassment of Women at Workplace Act, 2013"})]})]}),e.jsx("p",{className:"icc-harassment-text",children:"Any inappropriate advances towards a person in a sexual manner that could directly or indirectly affect their job, salary, or career constitute sexual harassment. The Act provides a broad and inclusive definition to ensure comprehensive protection."}),e.jsx("div",{className:"icc-harassment-list",children:gx.map((g,E)=>e.jsxs("div",{className:"icc-harassment-item",children:[e.jsx("div",{className:"icc-harassment-item-icon",children:e.jsx("i",{className:`fa-solid ${g.icon}`})}),e.jsx("div",{className:"icc-harassment-item-text",children:g.text})]},E))})]}),e.jsxs("div",{className:"icc-responsibilities-section",children:[e.jsxs("div",{className:"icc-resp-header",children:[e.jsx("div",{className:"icc-resp-icon-wrap",children:e.jsx("i",{className:"fa-solid fa-sitemap"})}),e.jsxs("div",{children:[e.jsx("div",{className:"icc-resp-title",children:"Roles & Responsibilities of ICC"}),e.jsx("div",{className:"icc-resp-sub",children:"11 core mandates of the Internal Complaints Committee"})]})]}),e.jsx("div",{className:"icc-resp-grid",children:xx.map((g,E)=>e.jsxs("div",{className:"icc-resp-item",children:[e.jsx("div",{className:"icc-resp-num",children:String(E+1).padStart(2,"0")}),e.jsx("div",{className:"icc-resp-text",children:g})]},E))})]}),e.jsxs("div",{className:"icc-mechanism",children:[e.jsxs("div",{className:"icc-mechanism-header",children:[e.jsx("i",{className:"fa-solid fa-diagram-project"}),e.jsx("span",{children:"ICC Complaint & Redressal Mechanism"})]}),e.jsx("img",{src:"/CTC NEW REACT WEBSITE/images/ICC/mechanism.png",alt:"ICC Complaint Mechanism",onError:g=>{g.target.parentElement.style.cssText+="background:#f8fafc;min-height:120px;display:flex;align-items:center;justify-content:center;",g.target.outerHTML='<div style="padding:40px;text-align:center;color:#94a3b8;font-family:Plus Jakarta Sans,sans-serif;font-size:0.85rem;">Mechanism diagram will appear here</div>'}})]})]}),["resolution","committee","events","vision"].includes(r)&&e.jsxs("div",{style:{animation:"iccTabIn 0.4s ease both"},children:[y(r),e.jsx("div",{className:"icc-table-wrap",children:e.jsx(vx,{section:r})})]})]})]}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(260px,1fr))",gap:18,marginTop:28},children:[{icon:"fa-envelope",color:"#0c2340",bg:"linear-gradient(135deg,#0c2340,#1a3a6b)",title:"Contact ICC",sub:"icc@creativecollege.in",desc:"Reach out to the committee directly for guidance before filing a formal complaint."},{icon:"fa-clock",color:"#d97706",bg:"linear-gradient(135deg,#78350f,#d97706)",title:"Filing Window",sub:"90 Days from Incident",desc:"Complaints must be filed within 90 days of the last incident as per POSH Act provisions."},{icon:"fa-shield-halved",color:"#059669",bg:"linear-gradient(135deg,#064e3b,#059669)",title:"Confidentiality",sub:"100% Protected",desc:"All complaints, proceedings and outcomes are treated with strict confidentiality."}].map((g,E)=>e.jsxs("div",{className:"rv",style:{background:"#fff",borderRadius:18,padding:"24px",border:"1px solid rgba(10,22,40,0.07)",boxShadow:"0 4px 20px rgba(10,22,40,0.07)",transitionDelay:`${E*.08}s`},children:[e.jsx("div",{style:{width:50,height:50,borderRadius:14,background:g.bg,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.1rem",color:"#fff",marginBottom:16},children:e.jsx("i",{className:`fa-solid ${g.icon}`})}),e.jsx("div",{style:{fontFamily:"'Plus Jakarta Sans',sans-serif",fontWeight:900,fontSize:"0.95rem",color:"#0c2340",marginBottom:3},children:g.title}),e.jsx("div",{style:{fontSize:"0.75rem",fontWeight:700,color:g.color,marginBottom:10},children:g.sub}),e.jsx("div",{style:{fontSize:"0.8rem",color:"#4a6080",lineHeight:1.7,fontWeight:500},children:g.desc})]},E))})]})]})]})}function Sx(){v.useEffect(()=>{const r=document.querySelectorAll(".grc-rv, .grc-rv-l, .grc-rv-r"),s=new IntersectionObserver(o=>o.forEach(c=>{c.isIntersecting&&c.target.classList.add("visible")}),{threshold:.08});return r.forEach(o=>s.observe(o)),()=>s.disconnect()},[])}const wx=[{no:1,name:"Mr. Manoj Kumar Das",role:"Chairperson"},{no:2,name:"Mr. Satya S. S. Dehury",role:"Member"},{no:3,name:"Mrs. Monika Sahu",role:"Member"}];function Cx(){return Sx(),e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
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
  `}),e.jsxs("div",{className:"grc-page",children:[e.jsxs("div",{className:"grc-hero",children:[e.jsx("div",{className:"grc-hero-grid"}),e.jsx("div",{className:"grc-hero-scan"}),e.jsx("div",{className:"grc-hero-glow"}),e.jsx("div",{className:"grc-hero-glow2"}),e.jsxs("div",{className:"grc-hero-content",children:[e.jsxs("div",{className:"grc-hero-left",children:[e.jsxs("div",{className:"grc-hero-badge",children:[e.jsx("i",{className:"fa-solid fa-hands-holding-circle"})," GRC · AICTE Guidelines"]}),e.jsxs("h1",{className:"grc-hero-title",children:["Grievance",e.jsx("br",{}),e.jsx("em",{children:"Redressal"}),e.jsx("br",{}),"Committee"]}),e.jsx("p",{className:"grc-hero-sub",children:"Committed to addressing and resolving grievances of students and staff in a fair, transparent and time-bound manner at Creative Techno College."}),e.jsx("div",{className:"grc-hero-pills",children:[{icon:"fa-scale-balanced",text:"Fair & Transparent"},{icon:"fa-lock",text:"Confidential Process"},{icon:"fa-clock",text:"Time-Bound Resolution"},{icon:"fa-building-columns",text:"AICTE Mandated"}].map((s,o)=>e.jsxs("span",{className:"grc-hero-pill",children:[e.jsx("i",{className:`fa-solid ${s.icon}`,style:{color:"#ffcc00",fontSize:"0.65rem"}}),s.text]},o))})]}),e.jsx("div",{className:"grc-hero-right",children:e.jsx("div",{className:"grc-hero-logo",children:e.jsx("img",{src:"/CTC NEW REACT WEBSITE/images/ICC/LOGO FINAL.png",alt:"Creative Techno College",onError:s=>{s.target.parentElement.innerHTML='<span style="font-size:2.5rem">🏫</span>'}})})})]})]}),e.jsx("div",{className:"grc-wave",children:e.jsx("svg",{viewBox:"0 0 1440 56",preserveAspectRatio:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M0,38 C360,56 1080,0 1440,38 L1440,56 L0,56 Z",fill:"#f0f4f8"})})}),e.jsx("div",{className:"grc-btn-strip grc-rv",children:e.jsxs("button",{className:"grc-btn",onClick:()=>window.open("https://docs.google.com/forms/d/e/1FAIpQLSe1Pcq1imy_OeOFSSbNucLUNQCVWzvi-J6kNVl5ihcX5N4LTw/viewform?usp=publish-editor","_blank"),children:[e.jsx("div",{className:"grc-btn-shine"}),e.jsxs("div",{className:"grc-btn-left",children:[e.jsx("div",{className:"grc-btn-icon",children:e.jsx("i",{className:"fa-solid fa-pen-to-square"})}),e.jsxs("div",{children:[e.jsx("div",{className:"grc-btn-title",children:"Submit Your Grievance Here"}),e.jsx("div",{className:"grc-btn-sub",children:"Confidential · Secure · Protected — File online or download form"})]})]}),e.jsx("div",{className:"grc-btn-arrow",children:e.jsx("i",{className:"fa-solid fa-arrow-right"})})]})}),e.jsxs("div",{className:"grc-main",children:[e.jsxs("div",{className:"grc-letter-card grc-rv",style:{transitionDelay:"0.1s"},children:[e.jsxs("div",{className:"grc-letter-header",children:[e.jsx("div",{className:"grc-letter-header-title",children:"Official Notice — GRC Constitution"}),e.jsx("div",{className:"grc-letter-header-sub",children:"As per AICTE norms and guidelines · Creative Techno College"})]}),e.jsxs("div",{className:"grc-letter-body",children:[e.jsx("div",{className:"grc-salutation",children:"Respected Sir/Madam,"}),e.jsxs("p",{className:"grc-letter-text",children:["I am pleased to inform you that our institution has formally constituted a"," ",e.jsx("strong",{children:"Grievance Redressal Committee"})," in accordance with the norms and guidelines prescribed by ",e.jsx("strong",{children:"AICTE"}),". The committee has been established to address and resolve grievances of students and staff in a"," ",e.jsx("strong",{children:"fair, transparent and time-bound manner"}),", thereby ensuring a healthy academic environment."]}),e.jsx("div",{className:"grc-members-intro",children:"The following members have been appointed to the Grievance Redressal Committee:"}),e.jsx("div",{className:"grc-members-list",children:wx.map(s=>e.jsxs("div",{className:"grc-member-item",children:[e.jsx("div",{className:"grc-member-num",children:String(s.no).padStart(2,"0")}),e.jsxs("div",{children:[e.jsx("div",{className:"grc-member-name",children:s.name}),e.jsx("div",{className:"grc-member-role",children:s.role})]})]},s.no))}),e.jsx("div",{className:"grc-info-badges",children:[{icon:"fa-building-columns",label:"AICTE Approved",sub:"Constituted per AICTE norms & guidelines"},{icon:"fa-gavel",label:"Natural Justice",sub:"Inquiries based on principles of natural justice"},{icon:"fa-shield-halved",label:"Healthy Environment",sub:"Ensuring a positive academic atmosphere"}].map((s,o)=>e.jsxs("div",{className:"grc-info-badge",children:[e.jsx("div",{className:"grc-info-badge-icon",children:e.jsx("i",{className:`fa-solid ${s.icon}`})}),e.jsxs("div",{children:[e.jsx("div",{className:"grc-info-badge-text",children:s.label}),e.jsx("div",{className:"grc-info-badge-sub",children:s.sub})]})]},o))})]})]}),e.jsxs("div",{className:"grc-image-card grc-rv",style:{transitionDelay:"0.2s"},children:[e.jsxs("div",{className:"grc-image-header",children:[e.jsx("i",{className:"fa-solid fa-image"}),e.jsx("span",{children:"GRC — Official Document / Notice"})]}),e.jsx("div",{className:"grc-image-container",children:e.jsx("img",{src:"/CTC NEW REACT WEBSITE/images/ICC/GRC.jpeg",alt:"GRC Official Notice",onError:s=>{s.target.style.display="none",s.target.parentElement.innerHTML=`
                    <div class="grc-image-placeholder">
                      <i class="fa-solid fa-file-image"></i>
                      <p>GRC official notice / document image will appear here.<br/>Place the image at: images/GRC/grc-notice.png</p>
                    </div>`}})})]})]})]})]})}const xi=[{name:"Abhisek Nanda",batch:"2023",domain:"Web"},{name:"Aliva Dipsikha Garnaik",batch:"2023",domain:"Web, Android"},{name:"Ipsita Pattanaik",batch:"2023",domain:"Web"},{name:"Bidusmita Mishra",batch:"2023",domain:"Web, Flutter, Backend"},{name:"Chinmayee Priyadarshini",batch:"2023",domain:"Web, Android"},{name:"Elin Pattanayak",batch:"2023",domain:"Web, Flutter"},{name:"Jasmin Samal",batch:"2023",domain:"Web, Flutter"},{name:"Monalisha Behera",batch:"2023",domain:"Web, Flutter"},{name:"Priyanka Pradhan",batch:"2023",domain:"Web, Android"},{name:"Ratnaprava Dhar",batch:"2023",domain:"Web, Flutter"},{name:"Rudra Prasad Sahu",batch:"2023",domain:"Web, Android, Backend"},{name:"Saswat Suman Dwibedy",batch:"2023",domain:"Web, Flutter, Backend"},{name:"Sudipta Suranjita Sahoo",batch:"2023",domain:"Web, Android"},{name:"Swatika Sahu",batch:"2023",domain:"Web"},{name:"Yashita Sahu",batch:"2023",domain:"Web, Android"},{name:"Abhipsa Jena",batch:"2024",domain:"Web, Android"},{name:"Bhagyalaxmi",batch:"2024",domain:"Web, Android"},{name:"Kajal Pradhan",batch:"2024",domain:"Web, Android"},{name:"Krishna Swain",batch:"2024",domain:"Web, Android"},{name:"Rimjhim Sahoo",batch:"2024",domain:"Web, Android"},{name:"Sasmita",batch:"2024",domain:"Web, Android"},{name:"Selina Sahu",batch:"2024",domain:"Web, Android"},{name:"Subham Sahu",batch:"2024",domain:"Web"},{name:"Supriyanjali Sahu",batch:"2024",domain:"Web, Android"},{name:"Tanmay Pradhan",batch:"2024",domain:"Web, Flutter"},{name:"Trishna Tamna",batch:"2024",domain:"Web, Android"},{name:"Yash Sahu",batch:"2024",domain:"Web"},{name:"Amit Pradhan",batch:"2024",domain:"Web"},{name:"Jasman Das",batch:"2024",domain:"Web"},{name:"Pratyush Patra",batch:"2024",domain:"Web"},{name:"Elina Biswal",batch:"2024",domain:"Web"},{name:"Prabhanjan Behera",batch:"2024",domain:"Web"},{name:"Happy Behera",batch:"2024",domain:"Web"},{name:"Anshuman Mishra",batch:"2025",domain:"Web, Android"},{name:"Priyadarsan Muduli",batch:"2025",domain:"Web, Android"},{name:"Biswajit Nayak",batch:"2025",domain:"Web, Flutter"},{name:"Omm Prakash Niyary",batch:"2025",domain:"Web, Flutter"},{name:"Ananta Swain",batch:"2025",domain:"Web, Flutter"},{name:"Dattatreya Khilar",batch:"2025",domain:"Web, Android"},{name:"Priyanka Mahanta",batch:"2025",domain:"Web, Android"},{name:"Ladly Sahoo",batch:"2025",domain:"Web, Flutter"},{name:"Arpita Sahu",batch:"2025",domain:"Web, Flutter"},{name:"Priyani Patra",batch:"2025",domain:"Web, Android"},{name:"Subhalaxmi Priyadarshini",batch:"2025",domain:"Web, Flutter"},{name:"Pradyumna Das",batch:"2025",domain:"Web, Flutter"},{name:"Satyabrata Pradhan",batch:"2025",domain:"Web, Flutter"},{name:"Sudhansu Pattanaik",batch:"2025",domain:"Web, Flutter"},{name:"Soumya Ranjan Sahu",batch:"2025",domain:"Web, Flutter"},{name:"Ankita Priyadarshini",batch:"2025",domain:"Web, Android"}],Ax=[{name:"Attendance Management System",team:"Team Technocrat",date:"March 2023"},{name:"Lesson Planner",team:"Team Technocrat",date:"July 2024"},{name:"Notes and Assignment Tracker",team:"Team Technocrat",date:"October 2023"},{name:"Library Management System",team:"Team Technocrat",date:"March 2024"},{name:"Learning Management System (LMS)",team:"Team Technocrat",date:"July 2023"},{name:"Staff Management System",team:"Team Technocrat",date:"October 2024"},{name:"Student Database Management System",team:"Team Technocrat",date:"March 2024"},{name:"Result Management System",team:"Team Technocrat",date:"July 2025"}],kx=[{name:"Rakesh Senapati",img:"/CTC NEW REACT WEBSITE/images/TECHNOCRAT/Rakesh Ku. Senapati.jpg"},{name:"Shankar Chaitan Jena",img:"/CTC NEW REACT WEBSITE/images/TECHNOCRAT/Shankar Chaitan Jena.png"},{name:"Priyadarshan Pradhan",img:"/CTC NEW REACT WEBSITE/images/TECHNOCRAT/Priyadarshan Pradhan.png"},{name:"Abhijit Jena",img:"/CTC NEW REACT WEBSITE/images/TECHNOCRAT/Abhijit Jena.png"},{name:"Asutosh Sahu",img:"/CTC NEW REACT WEBSITE/images/TECHNOCRAT/asutosh sahu.jpg"},{name:"Chandra Kant Muduli",img:"/CTC NEW REACT WEBSITE/images/TECHNOCRAT/Chandrakant Muduli.png"},{name:"Anish Asutosh",img:"/CTC NEW REACT WEBSITE/images/TECHNOCRAT/Anish Asutosh Nayak.png"},{name:"Chandan Swain",img:"/CTC NEW REACT WEBSITE/images/TECHNOCRAT/Chandan Swain.png"},{name:"Debasish Pradhan",img:"/CTC NEW REACT WEBSITE/images/TECHNOCRAT/Debasis Pradhan.jpg"},{name:"Anata Kishor Swain",img:"/CTC NEW REACT WEBSITE/images/TECHNOCRAT/Ananta Kishore Swain.png"},{name:"Nikhil Nath",img:"/CTC NEW REACT WEBSITE/images/TECHNOCRAT/Nikhil Nath.png"},{name:"SK Akil",img:"/CTC NEW REACT WEBSITE/images/TECHNOCRAT/SK Akil.png"}],Nx=[{version:"1.0",year:"2023",img:"/CTC NEW REACT WEBSITE/images/TECHNOCRAT/TechFest1.0.jpg",to:"/gymkhana/techfest/1",desc:"First edition — AI, IoT, Robotics & ML innovations by college students.",projects:8},{version:"2.0",year:"2024",img:"/CTC NEW REACT WEBSITE/images/TECHNOCRAT/TechFest2.0.jpg",to:"/gymkhana/techfest/2",desc:"Second edition — 19 cutting-edge projects in automation, safety, and smart systems.",projects:19},{version:"3.0",year:"2025",img:"/CTC NEW REACT WEBSITE/images/TECHNOCRAT/TechFest3.0.jpg",to:"/gymkhana/techfest/3",desc:"Viksit Bharat edition — schools join for the first time in this historic tech showcase.",projects:10}],Xn=[{img:"/CTC NEW REACT WEBSITE/images/TECHNOCRAT/bannerpic1.png",title:"Team Technocrat",sub:"Empowering Innovation"},{img:"/CTC NEW REACT WEBSITE/images/TECHNOCRAT/bannerpic2.png",title:"Skill Development",sub:"Shaping Future Leaders"},{img:"/CTC NEW REACT WEBSITE/images/TECHNOCRAT/bannerpic3.png",title:"Career Excellence",sub:"Connecting Academia & Industry"}],Tx={2023:{bg:"#eff6ff",color:"#2563eb",border:"#bfdbfe"},2024:{bg:"#ecfdf5",color:"#059669",border:"#a7f3d0"},2025:{bg:"#fef3c7",color:"#d97706",border:"#fde68a"}},bi=12;function Ex({page:r,totalPages:s,total:o,label:c,onPage:m}){if(s<=1)return null;const p=[];if(s<=7)for(let u=1;u<=s;u++)p.push(u);else if(r<=4)for(let u=1;u<=7;u++)p.push(u);else if(r>=s-3)for(let u=s-6;u<=s;u++)p.push(u);else for(let u=r-3;u<=r+3;u++)p.push(u);return e.jsxs("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",gap:8,marginTop:20,flexWrap:"wrap"},children:[e.jsx("button",{onClick:()=>m(Math.max(1,r-1)),disabled:r===1,style:{background:r===1?"#f0f4f8":"#0c2340",color:r===1?"#94a3b8":"#ffcc00",border:"none",borderRadius:10,padding:"8px 16px",fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"0.8rem",fontWeight:700,cursor:r===1?"default":"pointer"},children:"← Prev"}),p.map(u=>e.jsx("button",{onClick:()=>m(u),style:{background:r===u?"#0c2340":"#fff",color:r===u?"#ffcc00":"#0c2340",border:`1.5px solid ${r===u?"#0c2340":"rgba(12,35,64,0.15)"}`,borderRadius:10,padding:"8px 14px",minWidth:38,fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"0.8rem",fontWeight:700,cursor:"pointer"},children:u},u)),e.jsx("button",{onClick:()=>m(Math.min(s,r+1)),disabled:r===s,style:{background:r===s?"#f0f4f8":"#0c2340",color:r===s?"#94a3b8":"#ffcc00",border:"none",borderRadius:10,padding:"8px 16px",fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"0.8rem",fontWeight:700,cursor:r===s?"default":"pointer"},children:"Next →"}),e.jsxs("span",{style:{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"0.75rem",color:"#94a3b8",fontWeight:600},children:["Page ",r," of ",s," · ",o," ",c||"members"]})]})}function Rx(){const[r,s]=v.useState(0),[o,c]=v.useState("all"),[m,p]=v.useState(1),u=o==="all"?xi:xi.filter(g=>g.batch===o),b=Math.ceil(u.length/bi),h=u.slice((m-1)*bi,m*bi),x=g=>{c(g),p(1)};return e.jsxs("div",{className:"tc-page",children:[e.jsx("style",{children:`
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
  `}),e.jsxs("div",{className:"tc-hero",children:[e.jsxs("div",{className:"tc-hero-inner",children:[e.jsxs("div",{className:"tc-hero-left",children:[e.jsxs("div",{className:"tc-hero-badge",children:[e.jsx("i",{className:"fa-solid fa-microchip"})," Gymkhana · Technical Club"]}),e.jsxs("h1",{className:"tc-hero-h1",children:["Team ",e.jsx("em",{children:"Technocrat"})]}),e.jsx("p",{className:"tc-hero-sub",children:"Empowering students with essential skills for today's competitive job market — bridging the gap between academic learning and industry demands through real-world projects and technical excellence."}),e.jsx("div",{className:"tc-hero-stats",children:[{val:`${xi.length}+`,label:"Active Members"},{val:"8+",label:"Projects Built"},{val:"3",label:"TechFest Editions"},{val:"3",label:"Batches"}].map((g,E)=>e.jsxs("div",{children:[e.jsx("div",{className:"tc-hero-stat-val",children:g.val}),e.jsx("div",{className:"tc-hero-stat-lbl",children:g.label})]},E))})]}),e.jsx("div",{className:"tc-hero-right",children:e.jsx("div",{className:"tc-hero-pills",children:[{dot:"#3b82f6",icon:"fa-solid fa-code",label:"Web Development"},{dot:"#10b981",icon:"fa-solid fa-mobile-alt",label:"Android & Flutter"},{dot:"#ffcc00",icon:"fa-solid fa-server",label:"Backend Systems"},{dot:"#ec4899",icon:"fa-solid fa-rocket",label:"TechFest Series"},{dot:"#00d4ff",icon:"fa-solid fa-diagram-project",label:"8+ Projects Deployed"}].map((g,E)=>e.jsxs("div",{className:"tc-hero-pill",children:[e.jsx("span",{className:"tc-hero-pill-dot",style:{background:g.dot}}),e.jsx("i",{className:g.icon,style:{color:g.dot,width:16,textAlign:"center"}}),g.label]},E))})})]}),e.jsx("div",{className:"tc-hero-wave",children:e.jsx("svg",{viewBox:"0 0 1440 56",preserveAspectRatio:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M0,38 C360,56 1080,0 1440,38 L1440,56 L0,56 Z",fill:"#f0f4f8"})})})]}),e.jsxs("div",{className:"tc-main",children:[e.jsxs("div",{className:"tc-leaders-wrap",children:[e.jsxs("div",{className:"tc-section-head",children:[e.jsxs("div",{className:"tc-pill-tag",children:[e.jsx("i",{className:"fa-solid fa-users"})," Our Leadership"]}),e.jsxs("h2",{children:["Club Incharge & ",e.jsx("span",{children:"Secretaries"})]})]}),e.jsx("div",{className:"tc-leaders-grid",children:[{role:"Club Incharge",name:"Mr. Bhabani Sankar Sahoo",img:"/CTC NEW REACT WEBSITE/images/TECHNOCRAT/TeamIncharge.jpg",tag:"Faculty Lead"},{role:"Club Secretary (Boy)",name:"Mr. Saswat Suman Dwibedy",img:"/CTC NEW REACT WEBSITE/images/TECHNOCRAT/boySecretary.jpg",tag:"Student Rep"},{role:"Club Secretary (Girl)",name:"Ms. Sudipta Suranjita Sahoo",img:"/CTC NEW REACT WEBSITE/images/TECHNOCRAT/girlSecretary.jpg",tag:"Student Rep"}].map((g,E)=>e.jsxs("div",{className:"tc-leader-card",children:[e.jsx("div",{className:"tc-leader-img",children:e.jsx("img",{src:g.img,alt:g.role})}),e.jsxs("div",{className:"tc-leader-body",children:[e.jsx("h4",{children:g.role}),e.jsx("div",{style:{fontSize:"0.9rem",fontWeight:700,color:"#2563eb",marginBottom:"8px",fontFamily:"'Plus Jakarta Sans', sans-serif"},children:g.name}),e.jsx("span",{className:"tc-leader-tag",children:g.tag})]})]},E))})]}),e.jsxs("div",{className:"tc-slider-wrap",style:{borderRadius:22,marginBottom:0},children:[e.jsxs("div",{className:"tc-section-head",style:{marginBottom:0},children:[e.jsx("div",{className:"tc-pill-tag",style:{background:"rgba(255,204,0,0.15)",color:"#ffcc00",border:"1px solid rgba(255,204,0,0.3)"},children:"Team Gallery"}),e.jsxs("h2",{style:{color:"#fff",fontFamily:"'Plus Jakarta Sans',sans-serif"},children:["Our Team ",e.jsx("span",{style:{color:"#ffcc00",WebkitTextFillColor:"#ffcc00"},children:"in Action"})]})]}),e.jsxs("div",{className:"tc-slider",children:[Xn.map((g,E)=>e.jsxs("div",{className:`tc-slide${r===E?" active":""}`,children:[e.jsx("img",{src:g.img,alt:g.title}),e.jsxs("div",{className:"tc-slide-overlay",children:[e.jsx("h3",{children:g.title}),e.jsx("p",{children:g.sub})]})]},E)),e.jsx("button",{className:"tc-slider-arrow",style:{left:14},onClick:()=>s((r-1+Xn.length)%Xn.length),children:e.jsx("i",{className:"fa-solid fa-chevron-left"})}),e.jsx("button",{className:"tc-slider-arrow",style:{right:14},onClick:()=>s((r+1)%Xn.length),children:e.jsx("i",{className:"fa-solid fa-chevron-right"})})]}),e.jsx("div",{className:"tc-slider-dots",children:Xn.map((g,E)=>e.jsx("button",{className:`tc-slider-dot${r===E?" active":""}`,onClick:()=>s(E)},E))})]}),e.jsxs("div",{className:"tc-techfest-wrap",style:{borderRadius:22,marginTop:0},children:[e.jsxs("div",{className:"tc-section-head",children:[e.jsxs("div",{className:"tc-pill-tag",children:[e.jsx("i",{className:"fa-solid fa-rocket"})," Mega Event"]}),e.jsxs("h2",{children:["Tech",e.jsx("span",{children:"Fest"})," Series"]}),e.jsx("p",{children:"Our annual flagship event where innovation meets excellence — three editions, each bigger and bolder."})]}),e.jsx("div",{className:"tc-fest-grid",children:Nx.map((g,E)=>e.jsxs(fe,{to:g.to,className:"tc-fest-card",children:[e.jsxs("div",{className:"tc-fest-img",children:[e.jsx("img",{src:g.img,alt:`TechFest ${g.version}`}),e.jsx("div",{className:"tc-fest-img-overlay"}),e.jsxs("span",{className:"tc-fest-ver",children:["TechFest ",g.version]})]}),e.jsxs("div",{className:"tc-fest-body",children:[e.jsxs("h3",{children:["TechFest ",g.version]}),e.jsx("p",{children:g.desc}),e.jsxs("div",{className:"tc-fest-meta",children:[e.jsxs("span",{children:[e.jsx("i",{className:"fa-regular fa-calendar"})," ",g.year]}),e.jsxs("span",{children:[e.jsx("i",{className:"fa-solid fa-diagram-project"})," ",g.projects," Projects"]})]}),e.jsxs("div",{className:"tc-fest-link",children:["Explore ",e.jsx("i",{className:"fa-solid fa-arrow-right",style:{fontSize:"0.7rem"}})]})]})]},E))})]}),e.jsxs("div",{className:"tc-team-wrap",children:[e.jsxs("div",{className:"tc-section-head",children:[e.jsxs("div",{className:"tc-pill-tag",children:[e.jsx("i",{className:"fa-solid fa-code"})," Our Team"]}),e.jsxs("h2",{children:["Meet the ",e.jsx("span",{children:"Technocrats"})]}),e.jsxs("p",{children:[xi.length," talented members across 3 batches — building, innovating, and growing together."]})]}),e.jsx("div",{className:"tc-filter-bar",children:["all","2023","2024","2025"].map(g=>e.jsx("button",{className:`tc-filter-btn${o===g?" active":""}`,onClick:()=>x(g),children:g==="all"?"All Batches":`Batch ${g}`},g))}),e.jsx("div",{className:"tc-table-wrap",children:e.jsxs("table",{className:"tc-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{width:48},children:"#"}),e.jsx("th",{children:"Name"}),e.jsx("th",{style:{width:100},children:"Batch"}),e.jsx("th",{children:"Domain"})]})}),e.jsx("tbody",{children:h.map((g,E)=>{const D=Tx[g.batch];return e.jsxs("tr",{children:[e.jsx("td",{style:{color:"#94a3b8",fontWeight:700},children:(m-1)*bi+E+1}),e.jsx("td",{style:{fontWeight:700},children:g.name}),e.jsx("td",{children:e.jsx("span",{className:"tc-batch-pill",style:{background:D.bg,color:D.color,border:`1px solid ${D.border}`},children:g.batch})}),e.jsx("td",{children:e.jsx("span",{className:"tc-domain-label",children:g.domain})})]},E)})})]})}),e.jsx(Ex,{page:m,totalPages:b,total:u.length,label:"members",onPage:p})]}),e.jsxs("div",{className:"tc-proj-wrap",style:{borderRadius:22},children:[e.jsxs("div",{className:"tc-section-head",children:[e.jsxs("div",{className:"tc-pill-tag",children:[e.jsx("i",{className:"fa-solid fa-diagram-project"})," Work"]}),e.jsxs("h2",{children:["Our ",e.jsx("span",{children:"Projects"})]}),e.jsx("p",{children:"Real-world software systems built by Team Technocrat for the college community."})]}),e.jsx("div",{className:"tc-proj-inner",children:Ax.map((g,E)=>e.jsxs("div",{className:"tc-proj-row",children:[e.jsx("div",{className:"tc-proj-num",children:String(E+1).padStart(2,"0")}),e.jsxs("div",{style:{flex:1},children:[e.jsx("div",{className:"tc-proj-name",children:g.name}),e.jsxs("div",{className:"tc-proj-sub",children:[e.jsx("i",{className:"fa-solid fa-users",style:{fontSize:"0.6rem",marginRight:4}}),g.team]})]}),e.jsxs("div",{className:"tc-proj-date",children:[e.jsx("i",{className:"fa-regular fa-calendar",style:{marginRight:5}}),g.date]})]},E))})]})]}),e.jsxs("div",{className:"tc-ex-wrap",children:[e.jsxs("div",{className:"tc-section-head",children:[e.jsx("div",{className:"tc-pill-tag",style:{background:"rgba(255,204,0,0.15)",color:"#ffcc00",border:"1px solid rgba(255,204,0,0.3)"},children:"Alumni"}),e.jsxs("h2",{style:{color:"#fff",fontFamily:"'Plus Jakarta Sans',sans-serif"},children:["Excellent ",e.jsx("span",{style:{color:"#ffcc00",WebkitTextFillColor:"#ffcc00"},children:"Ex-Leaders"})]}),e.jsx("p",{style:{color:"rgba(255,255,255,0.45)",fontSize:"0.88rem",maxWidth:480,margin:"0 auto"},children:"Leaders who shaped Technocrat and went on to make their mark in the industry."})]}),e.jsx("div",{className:"tc-ex-grid",children:kx.map((g,E)=>e.jsxs("div",{className:"tc-ex-card",children:[e.jsx("div",{className:"tc-ex-img",children:e.jsx("img",{src:g.img,alt:g.name})}),e.jsx("p",{className:"tc-ex-name",children:g.name})]},E))})]})]})}const Fp=[{name:"100m Running",month:"December",icon:"fa-person-running"},{name:"200m Running",month:"December",icon:"fa-person-running"},{name:"Long Jump",month:"December",icon:"fa-arrow-right-long"},{name:"High Jump",month:"December",icon:"fa-up-long"},{name:"Discus Throw",month:"December",icon:"fa-circle"},{name:"Shotput",month:"December",icon:"fa-baseball"},{name:"Javelin Throw",month:"December",icon:"fa-location-arrow"},{name:"Relay Race",month:"December",icon:"fa-people-arrows"},{name:"Badminton",month:"December",icon:"fa-table-tennis-paddle-ball"},{name:"Chess",month:"December",icon:"fa-chess"},{name:"Carrom",month:"December",icon:"fa-chess-board"}],Px=[{icon:"fa-solid fa-handshake",text:"To develop the spirit of sportsmanship and healthy competition."},{icon:"fa-solid fa-heart-pulse",text:"To maintain physical and mental fitness through regular sports activities."},{icon:"fa-solid fa-star",text:"To identify and nurture sporting talent among students."},{icon:"fa-solid fa-people-group",text:"To promote teamwork, discipline, and time management skills."},{icon:"fa-solid fa-scale-balanced",text:"To provide a balance between academics and extracurricular excellence."}],Ix=Array.from({length:12},(r,s)=>({src:`/CTC%20NEW%20REACT%20WEBSITE/images/SPORTS/image${s+1}.jpeg`,alt:`Sports Event ${s+1}`})),Up=["normal","tall","wide","normal","normal","wide","tall","normal"];function Bx(){const[r,s]=v.useState(null),[o,c]=v.useState(!1),m=v.useMemo(()=>Ix.map((x,y)=>({...x,size:Up[y%Up.length]})),[]),p=o?m:m.slice(0,10),u=v.useCallback(x=>{r!==null&&(x.key==="ArrowRight"&&s(y=>(y+1)%p.length),x.key==="ArrowLeft"&&s(y=>(y-1+p.length)%p.length),x.key==="Escape"&&s(null))},[r,p.length]);v.useEffect(()=>(window.addEventListener("keydown",u),()=>window.removeEventListener("keydown",u)),[u]);const b=r!==null?p[r]:null;return e.jsxs("div",{className:"tc-page",children:[e.jsx("style",{children:`
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
  `}),e.jsxs("div",{className:"tc-hero",children:[e.jsxs("div",{className:"tc-hero-inner",children:[e.jsxs("div",{className:"tc-hero-left",children:[e.jsxs("div",{className:"tc-hero-badge",children:[e.jsx("i",{className:"fa-solid fa-trophy"})," Gymkhana · Sports Club"]}),e.jsxs("h1",{className:"tc-hero-h1",children:["SPORTS ",e.jsx("em",{children:"CLUB"})]}),e.jsx("p",{className:"tc-hero-sub",children:"Dedicated to promoting physical fitness, discipline, teamwork, and sportsmanship — building resilience, leadership, and a healthy lifestyle among students."}),e.jsx("div",{className:"tc-hero-stats",children:[{val:`${Fp.length}+`,label:"Sports Events"},{val:"Annual",label:"Sports Meet"},{val:"100%",label:"Participation"},{val:"Dec",label:"Season"}].map((x,y)=>e.jsxs("div",{children:[e.jsx("div",{className:"tc-hero-stat-val",children:x.val}),e.jsx("div",{className:"tc-hero-stat-lbl",children:x.label})]},y))})]}),e.jsx("div",{className:"tc-hero-right",children:e.jsx("div",{className:"tc-hero-pills",children:[{dot:"#3b82f6",icon:"fa-solid fa-person-running",label:"Track & Field"},{dot:"#10b981",icon:"fa-solid fa-futbol",label:"Team Sports"},{dot:"#ffcc00",icon:"fa-solid fa-chess",label:"Indoor Games"},{dot:"#ec4899",icon:"fa-solid fa-dumbbell",label:"Fitness Workshops"},{dot:"#00d4ff",icon:"fa-solid fa-trophy",label:"Tournaments"}].map((x,y)=>e.jsxs("div",{className:"tc-hero-pill",children:[e.jsx("span",{className:"tc-hero-pill-dot",style:{background:x.dot}}),e.jsx("i",{className:x.icon,style:{color:x.dot,width:16,textAlign:"center"}}),x.label]},y))})})]}),e.jsx("div",{className:"tc-hero-wave",children:e.jsx("svg",{viewBox:"0 0 1440 56",preserveAspectRatio:"none",children:e.jsx("path",{d:"M0,38 C360,56 1080,0 1440,38 L1440,56 L0,56 Z",fill:"#f0f4f8"})})})]}),e.jsxs("div",{className:"tc-main",children:[e.jsxs("div",{className:"tc-leaders-wrap",children:[e.jsxs("div",{className:"tc-section-head",children:[e.jsxs("div",{className:"tc-pill-tag",children:[e.jsx("i",{className:"fa-solid fa-users"})," Our Leadership"]}),e.jsxs("h2",{children:["Club Incharge & ",e.jsx("span",{children:"Secretaries"})]})]}),e.jsx("div",{className:"tc-leaders-grid",children:[{role:"Club Incharge",name:"Mr. Satya S. S. Dehury",img:"/CTC NEW REACT WEBSITE/images/SPORTS/Satya Sir.jpg",tag:"Faculty Lead"},{role:"Club Secretary (Boy)",name:" Mr. Chiranjib Pattnaik",img:"/CTC NEW REACT WEBSITE/images/SPORTS/gulu.jpeg",tag:"Student Rep"},{role:"Club Secretary (Girl)",name:"Monalisha Behera",img:"/CTC NEW REACT WEBSITE/images/SPORTS/monalisha.jpeg",tag:"Student Rep"}].map((x,y)=>e.jsxs("div",{className:"tc-leader-card",children:[e.jsx("div",{className:"tc-leader-img",children:e.jsx("img",{src:x.img,alt:x.role})}),e.jsxs("div",{className:"tc-leader-body",children:[e.jsx("h4",{children:x.role}),e.jsx("div",{style:{fontSize:"0.9rem",fontWeight:700,color:"#2563eb",marginBottom:"8px",fontFamily:"'Plus Jakarta Sans', sans-serif"},children:x.name}),e.jsx("span",{className:"tc-leader-tag",children:x.tag})]})]},y))})]}),e.jsxs("div",{style:{padding:"72px 4%"},children:[e.jsxs("div",{className:"tc-section-head",children:[e.jsxs("div",{className:"tc-pill-tag",children:[e.jsx("i",{className:"fa-solid fa-bullseye"})," Mission"]}),e.jsxs("h2",{children:["Our ",e.jsx("span",{children:"Objectives"})]}),e.jsx("p",{children:"Core principles guiding every tournament, session, and activity we organize."})]}),e.jsx("div",{className:"tc-obj-grid",children:Px.map((x,y)=>e.jsxs("div",{className:"tc-obj-card",children:[e.jsx("div",{className:"tc-obj-icon",children:e.jsx("i",{className:x.icon})}),e.jsx("p",{children:x.text})]},y))})]}),e.jsxs("div",{className:"tc-proj-wrap",children:[e.jsxs("div",{className:"tc-section-head",children:[e.jsxs("div",{className:"tc-pill-tag",children:[e.jsx("i",{className:"fa-solid fa-list"})," Events"]}),e.jsxs("h2",{children:["Our ",e.jsx("span",{children:"Activities"})]}),e.jsx("p",{children:"Annual sports events organized every December during the Sports Meet."})]}),e.jsx("div",{className:"tc-proj-inner",children:Fp.map((x,y)=>e.jsxs("div",{className:"tc-proj-row",children:[e.jsx("div",{className:"tc-proj-num",children:String(y+1).padStart(2,"0")}),e.jsx("div",{style:{flex:1},children:e.jsxs("div",{className:"tc-proj-name",children:[e.jsx("i",{className:`fa-solid ${x.icon}`,style:{marginRight:8,color:"#2563eb"}}),x.name]})}),e.jsxs("div",{className:"tc-proj-date",children:[e.jsx("i",{className:"fa-regular fa-calendar",style:{marginRight:5}}),x.month]})]},y))})]}),e.jsx("div",{className:"tc-mission-static",children:e.jsxs("div",{className:"tc-mission-card",children:[e.jsx("img",{src:"/CTC NEW REACT WEBSITE/images/SPORTS/banner.jpeg",alt:"Sports Club Banner",className:"tc-mission-img"}),e.jsxs("div",{className:"tc-mission-overlay",children:[e.jsx("h3",{children:"Annual Sports Meet"}),e.jsx("p",{children:"Where champions are made — track, field, and team sports bring out the best in every participant."})]})]})})]}),e.jsxs("div",{className:"tc-gallery-wrap",children:[e.jsxs("div",{className:"tc-section-head",children:[e.jsxs("div",{className:"tc-pill-tag",style:{background:"rgba(255,204,0,0.15)",color:"#ffcc00",border:"1px solid rgba(255,204,0,0.3)"},children:[e.jsx("i",{className:"fa-solid fa-images"})," Gallery"]}),e.jsxs("h2",{style:{color:"#fff"},children:["Annual Sports ",e.jsx("span",{style:{color:"#ffcc00"},children:"Highlights"})]}),e.jsx("p",{style:{color:"rgba(255,255,255,0.45)"},children:"Moments of triumph, teamwork, and sportsmanship from our annual sports meets."})]}),e.jsx("div",{className:"tc-gallery-grid",children:p.map((x,y)=>e.jsxs("div",{className:`tc-gallery-item ${x.size==="tall"?"tc-item-tall":""} ${x.size==="wide"?"tc-item-wide":""}`,onClick:()=>s(y),children:[e.jsx("img",{src:x.src,alt:x.alt,loading:"lazy"}),e.jsx("div",{className:"tc-gallery-overlay",children:e.jsx("i",{className:"fa-solid fa-expand"})})]},y))})]}),b&&e.jsxs("div",{className:"gl-lightbox",onClick:x=>x.target===x.currentTarget&&s(null),children:[e.jsx("button",{className:"gl-close",onClick:()=>s(null),children:"✕"}),e.jsx("button",{className:"gl-nav",style:{left:"40px"},onClick:()=>s(x=>(x-1+p.length)%p.length),children:"←"}),e.jsxs("div",{className:"gl-panel",children:[e.jsx("img",{className:"gl-img",src:b.src,alt:"View"}),e.jsx("div",{style:{color:"#ffcc00",fontWeight:900,marginTop:"25px",fontSize:"1.2rem"},children:"SPORTS CLUB ARCHIVES"})]}),e.jsx("button",{className:"gl-nav",style:{right:"40px"},onClick:()=>s(x=>(x+1)%p.length),children:"→"})]})]})}const Mx=[{icon:"fa-solid fa-palette",text:"Encourage students to showcase and develop their artistic and creative abilities."},{icon:"fa-solid fa-earth-asia",text:"Provide a platform for cultural exchange, inclusivity, and diversity."},{icon:"fa-solid fa-crown",text:"Promote leadership, teamwork, and organizational skills through cultural events."},{icon:"fa-solid fa-microphone",text:"Enhance students' confidence, communication, and presentation skills."},{icon:"fa-solid fa-music",text:"Make the campus a hub of cultural vibrancy and student engagement."}],zx=[{name:"Inter-College Fest",members:"Ravi Kumar, Sonal Sharma",date:"March 2024",icon:"fa-solid fa-flag",color:"#3b82f6"},{name:"Drama Night",members:"Ananya Gupta",date:"December 2023",icon:"fa-solid fa-masks-theater",color:"#8b5cf6"},{name:"Folk Dance Fiesta",members:"Team Cultural",date:"August 2024",icon:"fa-solid fa-music",color:"#ec4899"}],Ox=[{src:"/CTC%20NEW%20REACT%20WEBSITE/images/CULTURAL/funfest/f1.jpeg",alt:"Fun Fest 1"},{src:"/CTC%20NEW%20REACT%20WEBSITE/images/CULTURAL/funfest/f2.jpeg",alt:"Fun Fest 2"},{src:"/CTC%20NEW%20REACT%20WEBSITE/images/CULTURAL/funfest/f3.jpeg",alt:"Fun Fest 3"},{src:"/CTC%20NEW%20REACT%20WEBSITE/images/CULTURAL/funfest/f4.jpeg",alt:"Fun Fest 4"},{src:"/CTC%20NEW%20REACT%20WEBSITE/images/CULTURAL/funfest/f5.jpeg",alt:"Fun Fest 5"},{src:"/CTC%20NEW%20REACT%20WEBSITE/images/CULTURAL/funfest/f6.jpeg",alt:"Fun Fest 6"},{src:"/CTC%20NEW%20REACT%20WEBSITE/images/CULTURAL/funfest/f7.jpeg",alt:"Fun Fest 7"},{src:"/CTC%20NEW%20REACT%20WEBSITE/images/CULTURAL/holi/h1.jpeg",alt:"Holi 1"},{src:"/CTC%20NEW%20REACT%20WEBSITE/images/CULTURAL/holi/h2.jpeg",alt:"Holi 2"},{src:"/CTC%20NEW%20REACT%20WEBSITE/images/CULTURAL/holi/h3.jpeg",alt:"Holi 3"},{src:"/CTC%20NEW%20REACT%20WEBSITE/images/CULTURAL/holi/h4.jpeg",alt:"Holi 4"},{src:"/CTC%20NEW%20REACT%20WEBSITE/images/CULTURAL/holi/h5.jpeg",alt:"Holi 5"},{src:"/CTC%20NEW%20REACT%20WEBSITE/images/CULTURAL/saraswati_puja/sp1.jpeg",alt:"Saraswati Puja 1"},{src:"/CTC%20NEW%20REACT%20WEBSITE/images/CULTURAL/saraswati_puja/sp2.jpeg",alt:"Saraswati Puja 2"},{src:"/CTC%20NEW%20REACT%20WEBSITE/images/CULTURAL/saraswati_puja/sp3.jpeg",alt:"Saraswati Puja 3"},{src:"/CTC%20NEW%20REACT%20WEBSITE/images/CULTURAL/saraswati_puja/sp4.jpeg",alt:"Saraswati Puja 4"},{src:"/CTC%20NEW%20REACT%20WEBSITE/images/CULTURAL/saraswati_puja/sp5.jpeg",alt:"Saraswati Puja 5"},{src:"/CTC%20NEW%20REACT%20WEBSITE/images/CULTURAL/saraswati_puja/sp6.jpeg",alt:"Saraswati Puja 6"}],_p=["normal","tall","wide","normal","normal","wide","tall","normal","normal","tall","wide","normal","normal","wide","tall","normal","normal","normal"];function Dx(){const[r,s]=v.useState(null),[o,c]=v.useState(!1),m=v.useMemo(()=>Ox.map((x,y)=>({...x,size:_p[y%_p.length]})),[]),p=o?m:m.slice(0,10),u=v.useCallback(x=>{r!==null&&(x.key==="ArrowRight"&&s(y=>(y+1)%p.length),x.key==="ArrowLeft"&&s(y=>(y-1+p.length)%p.length),x.key==="Escape"&&s(null))},[r,p.length]);v.useEffect(()=>(window.addEventListener("keydown",u),()=>window.removeEventListener("keydown",u)),[u]);const b=r!==null?p[r]:null;return e.jsxs("div",{className:"tc-page",children:[e.jsx("style",{children:`
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
  `}),e.jsxs("div",{className:"tc-hero",children:[e.jsxs("div",{className:"tc-hero-inner",children:[e.jsxs("div",{className:"tc-hero-left",children:[e.jsxs("div",{className:"tc-hero-badge",children:[e.jsx("i",{className:"fa-solid fa-masks-theater"})," Gymkhana · Cultural Club"]}),e.jsxs("h1",{className:"tc-hero-h1",children:["CULTURAL ",e.jsx("em",{children:"CLUB"})]}),e.jsx("p",{className:"tc-hero-sub",children:"Celebrating creativity, expression, and diversity through art, music, dance, and drama — providing students a vibrant stage to explore their artistic potential and cultural heritage."}),e.jsx("div",{className:"tc-hero-stats",children:[{val:"5+",label:"Art Forms"},{val:"Annual",label:"Cultural Fest"},{val:"50+",label:"Participants"},{val:"All Year",label:"Activities"}].map((x,y)=>e.jsxs("div",{children:[e.jsx("div",{className:"tc-hero-stat-val",children:x.val}),e.jsx("div",{className:"tc-hero-stat-lbl",children:x.label})]},y))})]}),e.jsx("div",{className:"tc-hero-right",children:e.jsx("div",{className:"tc-hero-pills",children:[{dot:"#3b82f6",icon:"fa-solid fa-music",label:"Music"},{dot:"#10b981",icon:"fa-solid fa-child",label:"Dance"},{dot:"#ffcc00",icon:"fa-solid fa-masks-theater",label:"Drama"},{dot:"#ec4899",icon:"fa-solid fa-palette",label:"Fine Arts"},{dot:"#00d4ff",icon:"fa-solid fa-pen-nib",label:"Literary"}].map((x,y)=>e.jsxs("div",{className:"tc-hero-pill",children:[e.jsx("span",{className:"tc-hero-pill-dot",style:{background:x.dot}}),e.jsx("i",{className:x.icon,style:{color:x.dot,width:16,textAlign:"center"}}),x.label]},y))})})]}),e.jsx("div",{className:"tc-hero-wave",children:e.jsx("svg",{viewBox:"0 0 1440 56",preserveAspectRatio:"none",children:e.jsx("path",{d:"M0,38 C360,56 1080,0 1440,38 L1440,56 L0,56 Z",fill:"#f0f4f8"})})})]}),e.jsxs("div",{className:"tc-main",children:[e.jsxs("div",{className:"tc-leaders-wrap",children:[e.jsxs("div",{className:"tc-section-head",children:[e.jsxs("div",{className:"tc-pill-tag",children:[e.jsx("i",{className:"fa-solid fa-users"})," Our Leadership"]}),e.jsxs("h2",{children:["Club Incharge & ",e.jsx("span",{children:"Secretaries"})]})]}),e.jsx("div",{className:"tc-leaders-grid",children:[{role:"Club Incharge",name:"Mr. Krishnasis Mishra",img:"/CTC NEW REACT WEBSITE/images/CULTURAL/Principal Sir.jpg",tag:"Faculty Lead"},{role:"Club Secretary (Boy)",name:"Mr. Bikash Behera",img:"/CTC NEW REACT WEBSITE/images/CULTURAL/bikash.jpeg",tag:"Student Rep"},{role:"Club Secretary (Girl)",name:"Ms. Ipsita Pattanaik",img:"/CTC NEW REACT WEBSITE/images/CULTURAL/ipsita.jpg",tag:"Student Rep"}].map((x,y)=>e.jsxs("div",{className:"tc-leader-card",children:[e.jsx("div",{className:"tc-leader-img",children:e.jsx("img",{src:x.img,alt:x.role})}),e.jsxs("div",{className:"tc-leader-body",children:[e.jsx("h4",{children:x.role}),e.jsx("div",{style:{fontSize:"0.9rem",fontWeight:700,color:"#2563eb",marginBottom:"8px",fontFamily:"'Plus Jakarta Sans', sans-serif"},children:x.name}),e.jsx("span",{className:"tc-leader-tag",children:x.tag})]})]},y))})]}),e.jsxs("div",{style:{padding:"72px 4%"},children:[e.jsxs("div",{className:"tc-section-head",children:[e.jsxs("div",{className:"tc-pill-tag",children:[e.jsx("i",{className:"fa-solid fa-bullseye"})," Mission"]}),e.jsxs("h2",{children:["Our ",e.jsx("span",{children:"Objectives"})]}),e.jsx("p",{children:"The principles that shape every cultural event, workshop, and performance we create."})]}),e.jsx("div",{className:"tc-obj-grid",children:Mx.map((x,y)=>e.jsxs("div",{className:"tc-obj-card",children:[e.jsx("div",{className:"tc-obj-icon",children:e.jsx("i",{className:x.icon})}),e.jsx("p",{children:x.text})]},y))})]}),e.jsxs("div",{className:"tc-proj-wrap",children:[e.jsxs("div",{className:"tc-section-head",children:[e.jsxs("div",{className:"tc-pill-tag",children:[e.jsx("i",{className:"fa-solid fa-calendar-check"})," Events"]}),e.jsxs("h2",{children:["Our ",e.jsx("span",{children:"Activities"})]}),e.jsx("p",{children:"Cultural events that bring creativity, celebration, and student talent to the spotlight."})]}),e.jsx("div",{className:"tc-proj-inner",children:zx.map((x,y)=>e.jsxs("div",{className:"tc-proj-row",children:[e.jsx("div",{className:"tc-proj-num",children:String(y+1).padStart(2,"0")}),e.jsxs("div",{style:{flex:1},children:[e.jsxs("div",{className:"tc-proj-name",children:[e.jsx("i",{className:x.icon,style:{marginRight:8,color:x.color}}),x.name]}),e.jsxs("div",{className:"tc-proj-sub",children:[e.jsx("i",{className:"fa-solid fa-users",style:{fontSize:"0.6rem",marginRight:4}}),x.members]})]}),e.jsxs("div",{className:"tc-proj-date",children:[e.jsx("i",{className:"fa-regular fa-calendar",style:{marginRight:5}}),x.date]})]},y))})]}),e.jsx("div",{className:"tc-mission-static",children:e.jsxs("div",{className:"tc-mission-card",children:[e.jsx("img",{src:"/CTC NEW REACT WEBSITE/images/CULTURAL/banner.jpg",alt:"Cultural Club Banner",className:"tc-mission-img"}),e.jsxs("div",{className:"tc-mission-overlay",children:[e.jsx("h3",{children:"Where Art Meets Identity"}),e.jsx("p",{children:"Our annual cultural fest showcases the rich heritage and creative spirit of our students."})]})]})})]})," ",e.jsxs("div",{className:"tc-gallery-wrap",children:[e.jsxs("div",{className:"tc-section-head",children:[e.jsxs("div",{className:"tc-pill-tag",style:{background:"rgba(255,204,0,0.15)",color:"#ffcc00",border:"1px solid rgba(255,204,0,0.3)"},children:[e.jsx("i",{className:"fa-solid fa-images"})," Gallery"]}),e.jsxs("h2",{style:{color:"#fff"},children:["Event ",e.jsx("span",{style:{color:"#ffcc00"},children:"Gallery"})]}),e.jsx("p",{style:{color:"rgba(255,255,255,0.45)"},children:"Vivid memories from our cultural events, performances, and festive celebrations."})]}),e.jsx("div",{className:"tc-gallery-grid",children:p.map((x,y)=>e.jsxs("div",{className:`tc-gallery-item ${x.size==="tall"?"tc-item-tall":""} ${x.size==="wide"?"tc-item-wide":""}`,onClick:()=>s(y),children:[e.jsx("img",{src:x.src,alt:x.alt,loading:"lazy"}),e.jsx("div",{className:"tc-gallery-overlay",children:e.jsx("i",{className:"fa-solid fa-expand"})})]},y))}),!o&&m.length>10&&e.jsxs("button",{className:"tc-btn-full",onClick:()=>c(!0),children:["EXPLORE FULL ARCHIVE (",m.length," IMAGES)"]})]}),b&&e.jsxs("div",{className:"gl-lightbox",onClick:x=>x.target===x.currentTarget&&s(null),children:[e.jsx("button",{className:"gl-close",onClick:()=>s(null),children:"✕"}),e.jsx("button",{className:"gl-nav",style:{left:"40px"},onClick:()=>s(x=>(x-1+p.length)%p.length),children:"←"}),e.jsxs("div",{className:"gl-panel",children:[e.jsx("img",{className:"gl-img",src:b.src,alt:"View"}),e.jsx("div",{style:{color:"#ffcc00",fontWeight:900,marginTop:"25px",fontSize:"1.2rem"},children:"CULTURAL CLUB ARCHIVES"}),e.jsx("div",{className:"gl-thumbs",children:p.map((x,y)=>e.jsx("div",{className:`gl-thumb ${r===y?"active":""}`,onClick:()=>s(y),children:e.jsx("img",{src:x.src,alt:"thumb"})},y))})]}),e.jsx("button",{className:"gl-nav",style:{right:"40px"},onClick:()=>s(x=>(x+1)%p.length),children:"→"})]})]})}const nn=[{name:"Sana Rao",batch:"2023",domain:"HR"},{name:"Saswat Patra",batch:"2023",domain:"HR"},{name:"Puja Kumari",batch:"2023",domain:"HR"},{name:"Santosh Sahu",batch:"2023",domain:"HR"},{name:"Sneha Kumari",batch:"2023",domain:"HR"},{name:"Chiranjib Pattanaik",batch:"2023",domain:"HR"},{name:"Supriya Mohanty",batch:"2023",domain:"HR"},{name:"Shankar Sahu",batch:"2023",domain:"Marketing"},{name:"Jitendra Karan Sahu",batch:"2023",domain:"Marketing"},{name:"Surendra Sahu",batch:"2023",domain:"Marketing"},{name:"Priyanka Sahu",batch:"2023",domain:"Marketing"},{name:"Priyadarshani Sahoo",batch:"2023",domain:"Human Resource"},{name:"Ipsita Samal",batch:"2023",domain:"Human Resource"},{name:"Manasmita Dehury",batch:"2023",domain:"Human Resource"},{name:"Lipsarani Das",batch:"2023",domain:"Human Resource"},{name:"Binit Kumar Sahu",batch:"2023",domain:"Human Resource"},{name:"Jiban Jyoti Jena",batch:"2023",domain:"Human Resource"},{name:"Bikash Behera",batch:"2023",domain:"Human Resource & Marketing"},{name:"Abhijit Sahoo",batch:"2023",domain:"Human Resource"},{name:"Sunita Behera",batch:"2023",domain:"Human Resource"},{name:"Jilu Das",batch:"2023",domain:"Human Resource"},{name:"Gajendra Behera",batch:"2023",domain:"Human Resource"},{name:"Kalpana Sahoo",batch:"2023",domain:"Human Resource"}],$p=[{name:"Fave Station",members:"Sibu, Chuman, Tusar, Prangya, Pritimayee, Prajolita, M.Anatha",year:"2023"},{name:"Young Valet",members:"Amit, Nensi, Rituprana, Monali, Sushree, Kasturi, Isha, Raju, Puja",year:"2023"},{name:"Milk Mistry",members:"Alok, Abhishek, Rahul, Chidatmika, Monalisa, Punam, Khusi, Titan",year:"2023"},{name:"Be Safe",members:"Ipshita, Lipsa, Rupali, Ankush, Jahir, Priti, Subhasmita, Sradhanjali",year:"2023"},{name:"Multi Complex",members:"Abhijeet, Rahul, Saswat, Bikash, Sneha, Puja, Ipsita, Snighdha, Santosh",year:"2023"},{name:"Rope Way",members:"Karan, Sana, Chiranjib, Soubhagya, Surendra, Priyanka, Lipsa, Arpita, Kalpana",year:"2023"},{name:"Aqua Bliss",members:"Jitendra Karan Sahu, Jiban Jyoti Jena, Rahul Biswal, Sanjay Manna, Santosh Sahu",year:"2024"},{name:"Farm Fresh",members:"Biswa, Suchismita Sahu, Swosti Swamsree Behera, Jyoti Sankar Das, Parimita Minz",year:"2024"},{name:"Bio Bloom (A)",members:"Jashmin Pradhan, Swagat Kumar Behera, Nafisha Parween, Nibedita Behera",year:"2024"},{name:"Bio Bloom (B)",members:"Binit, Lipsa, Kalpana, Supriya, Saswat, Arpita, Bikash, Jilu",year:"2024"}],Wx=[{name:"Abhishek Sahu",img:"/CTC NEW REACT WEBSITE/images/Disha & CSR/Abhishek Sahu.jpg"},{name:"Alok Kumar Sahoo",img:"/CTC NEW REACT WEBSITE/images/Disha & CSR/Alok Kumar Sahoo.jpg"},{name:"Chidatmika Pradhan",img:"/CTC NEW REACT WEBSITE/images/Disha & CSR/Chidatmika Pradhan.jpg"},{name:"Chuman Sahoo",img:"/CTC NEW REACT WEBSITE/images/Disha & CSR/Chuman Sahoo.jpg"},{name:"Khusi Bilas",img:"/CTC NEW REACT WEBSITE/images/Disha & CSR/Khusi Bilas.jpg"},{name:"M. Anata Laxmi",img:"/CTC NEW REACT WEBSITE/images/Disha & CSR/M. Anata Laxmi.jpg"},{name:"Monalisha Pradhan",img:"/CTC NEW REACT WEBSITE/images/Disha & CSR/Monalisha Pradhan.jpg"},{name:"Nibedita Dehury",img:"/CTC NEW REACT WEBSITE/images/Disha & CSR/Nibedita Dehury.jpg"},{name:"Poonam Priyadarshini Panda",img:"/CTC NEW REACT WEBSITE/images/Disha & CSR/Poonam priyadarshini Panda.jpg"},{name:"Pradyuda Sahoo",img:"/CTC NEW REACT WEBSITE/images/Disha & CSR/Pradyuda Sahoo.jpg"},{name:"Prajolita Dehury",img:"/CTC NEW REACT WEBSITE/images/Disha & CSR/Prajolita Dehury.jpg"},{name:"Prangyaparasmita Sahu",img:"/CTC NEW REACT WEBSITE/images/Disha & CSR/Prangyaparasmita Sahu.jpg"},{name:"Pritimayee Biswal",img:"/CTC NEW REACT WEBSITE/images/Disha & CSR/Pritimayee Biswal.jpg"},{name:"Rahul Kumar Sahu",img:"/CTC NEW REACT WEBSITE/images/Disha & CSR/Rahul kumar Sahu.jpg"},{name:"Sibuprasad Nayak",img:"/CTC NEW REACT WEBSITE/images/Disha & CSR/Sibuprasad.jpg"},{name:"Titan Ku Prusty",img:"/CTC NEW REACT WEBSITE/images/Disha & CSR/Titan ku Prusty.jpg"},{name:"Tusar Raman Naik",img:"/CTC NEW REACT WEBSITE/images/Disha & CSR/Tusar Raman Naik.jpg"}],Gp=[{label:"MAGAZINE 1",src:"/CTC%20NEW%20REACT%20WEBSITE/images/Disha & CSR/Published by  Management Students (1).pdf"},{label:"MAGAZINE 2",src:"/CTC%20NEW%20REACT%20WEBSITE/images/Disha & CSR/Disha (Episode 2) .pdf"},{label:"MAGAZINE 3",src:"/CTC%20NEW%20REACT%20WEBSITE/images/Disha & CSR/The children of today will make the India of tomorrow. 3.pdf"},{label:"MAGAZINE 4",src:"/CTC%20NEW%20REACT%20WEBSITE/images/Disha & CSR/Disha Episode-4.pdf"},{label:"MAGAZINE 5",src:"/CTC%20NEW%20REACT%20WEBSITE/images/Disha & CSR/Disha episode-5.pdf"},{label:"MAGAZINE 6",src:"/CTC%20NEW%20REACT%20WEBSITE/images/Disha & CSR/Disha Episode-6.pdf"},{label:"MAGAZINE 7",src:"/CTC%20NEW%20REACT%20WEBSITE/images/Disha & CSR/Disha ep-07.pdf"}],Yp=[...Array.from({length:3},(r,s)=>`/CTC%20NEW%20REACT%20WEBSITE/images/Disha & CSR/im${[1,2,3][s]}.jpg`),"/CTC%20NEW%20REACT%20WEBSITE/images/Disha & CSR/im5.jpg",...Array.from({length:24},(r,s)=>`/CTC%20NEW%20REACT%20WEBSITE/images/Disha & CSR/photo${s+1}.jpg`)],Jp=["normal","tall","wide","normal","normal","wide","tall","normal"],Vp={2023:{bg:"#eff6ff",color:"#2563eb",border:"#bfdbfe"},2024:{bg:"#ecfdf5",color:"#059669",border:"#a7f3d0"},2025:{bg:"#fef3c7",color:"#d97706",border:"#fde68a"}},yi=12;function Lx({page:r,totalPages:s,total:o,label:c,onPage:m}){if(s<=1)return null;const p=[];if(s<=7)for(let u=1;u<=s;u++)p.push(u);else if(r<=4)for(let u=1;u<=7;u++)p.push(u);else if(r>=s-3)for(let u=s-6;u<=s;u++)p.push(u);else for(let u=r-3;u<=r+3;u++)p.push(u);return e.jsxs("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",gap:8,marginTop:20,flexWrap:"wrap"},children:[e.jsx("button",{onClick:()=>m(Math.max(1,r-1)),disabled:r===1,style:{background:r===1?"#f0f4f8":"#0c2340",color:r===1?"#94a3b8":"#ffcc00",border:"none",borderRadius:10,padding:"8px 16px",fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"0.8rem",fontWeight:700,cursor:r===1?"default":"pointer"},children:"← Prev"}),p.map(u=>e.jsx("button",{onClick:()=>m(u),style:{background:r===u?"#0c2340":"#fff",color:r===u?"#ffcc00":"#0c2340",border:`1.5px solid ${r===u?"#0c2340":"rgba(12,35,64,0.15)"}`,borderRadius:10,padding:"8px 14px",minWidth:38,fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"0.8rem",fontWeight:700,cursor:"pointer"},children:u},u)),e.jsx("button",{onClick:()=>m(Math.min(s,r+1)),disabled:r===s,style:{background:r===s?"#f0f4f8":"#0c2340",color:r===s?"#94a3b8":"#ffcc00",border:"none",borderRadius:10,padding:"8px 16px",fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"0.8rem",fontWeight:700,cursor:r===s?"default":"pointer"},children:"Next →"}),e.jsxs("span",{style:{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"0.75rem",color:"#94a3b8",fontWeight:600},children:["Page ",r," of ",s," · ",o," ",c||"members"]})]})}function Hx(){const[r,s]=v.useState(null),[o,c]=v.useState(!1),[m,p]=v.useState(1),[u,b]=v.useState("all"),h=v.useMemo(()=>u==="all"?nn:nn.filter(N=>N.batch===u),[u]),x=Math.ceil(h.length/yi),y=v.useMemo(()=>h.slice((m-1)*yi,m*yi),[h,m]),g=N=>{b(N),p(1)},E=v.useMemo(()=>Yp.map((N,R)=>({src:N,size:Jp[R%Jp.length],alt:`Disha Impact Shot ${R+1}`})),[]),D=o?E:E.slice(0,10),F=v.useCallback(N=>{r!==null&&(N.key==="ArrowRight"&&s(R=>(R+1)%D.length),N.key==="ArrowLeft"&&s(R=>(R-1+D.length)%D.length),N.key==="Escape"&&s(null))},[r,D.length]);v.useEffect(()=>(window.addEventListener("keydown",F),()=>window.removeEventListener("keydown",F)),[F]);const P=r!==null?D[r]:null;return e.jsxs("div",{className:"tc-page",children:[e.jsx("style",{children:`
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
  `}),e.jsxs("div",{className:"tc-hero",children:[e.jsxs("div",{className:"tc-hero-inner",children:[e.jsxs("div",{className:"tc-hero-left",children:[e.jsxs("div",{className:"tc-hero-badge",children:[e.jsx("i",{className:"fa-solid fa-hand-holding-heart"})," Gymkhana · Social Wing"]}),e.jsxs("h1",{className:"tc-hero-h1",children:["DISHA ",e.jsx("em",{children:"&"})," CSR"]}),e.jsx("p",{className:"tc-hero-sub",children:"Advocating for the visually impaired and serving the less fortunate. We transform college life into a mission of compassion and professional responsibility."}),e.jsx("div",{className:"tc-hero-stats",children:[{val:`${nn.length}+`,label:"Active Members"},{val:`${$p.length}+`,label:"Projects"},{val:`${Gp.length}`,label:"Magazines"},{val:`${Yp.length}`,label:"Impact Shots"}].map((N,R)=>e.jsxs("div",{children:[e.jsx("div",{className:"tc-hero-stat-val",children:N.val}),e.jsx("div",{className:"tc-hero-stat-lbl",children:N.label})]},R))})]}),e.jsx("div",{className:"tc-hero-right",children:e.jsx("div",{className:"tc-hero-pills",children:[{dot:"#3b82f6",icon:"fa-solid fa-eye",label:"Visually Impaired Advocacy"},{dot:"#10b981",icon:"fa-solid fa-bowl-food",label:"Community Kitchen"},{dot:"#ffcc00",icon:"fa-solid fa-book-open",label:"Magazine Publications"},{dot:"#ec4899",icon:"fa-solid fa-hand-holding-heart",label:"Sewa Projects"},{dot:"#00d4ff",icon:"fa-solid fa-children",label:"Child Welfare"}].map((N,R)=>e.jsxs("div",{className:"tc-hero-pill",children:[e.jsx("span",{className:"tc-hero-pill-dot",style:{background:N.dot}}),e.jsx("i",{className:N.icon,style:{color:N.dot,width:16,textAlign:"center"}}),N.label]},R))})})]}),e.jsx("div",{className:"tc-hero-wave",children:e.jsx("svg",{viewBox:"0 0 1440 56",preserveAspectRatio:"none",children:e.jsx("path",{d:"M0,38 C360,56 1080,0 1440,38 L1440,56 L0,56 Z",fill:"#f0f4f8"})})})]}),e.jsxs("div",{className:"tc-main",children:[e.jsxs("div",{className:"tc-leaders-wrap",children:[e.jsxs("div",{className:"tc-section-head",children:[e.jsxs("div",{className:"tc-pill-tag",children:[e.jsx("i",{className:"fa-solid fa-users"})," Our Leadership"]}),e.jsxs("h2",{children:["Club Incharge & ",e.jsx("span",{children:"Secretaries"})]})]}),e.jsx("div",{className:"tc-leaders-grid",children:[{role:"Club Incharge",name:"Mr. Subhrajyoti Behera",img:"/CTC NEW REACT WEBSITE/images/OURTEAM/Subhrajyoti Sir.jpg",tag:"Faculty Lead"},{role:"Secretary (Boy)",name:"Mr. Abinash Behera",img:"/CTC NEW REACT WEBSITE/images/Disha & CSR/secretary_boy.jpg",tag:"Student Rep"},{role:"Secretary (Girl)",name:"Ms. Sana Rao",img:"/CTC NEW REACT WEBSITE/images/Disha & CSR/secretary_girl.jpg",tag:"Student Rep"}].map((N,R)=>e.jsxs("div",{className:"tc-leader-card",children:[e.jsx("div",{className:"tc-leader-img",children:e.jsx("img",{src:N.img,alt:N.role})}),e.jsxs("div",{className:"tc-leader-body",children:[e.jsx("h4",{children:N.role}),e.jsx("div",{style:{fontSize:"0.9rem",fontWeight:700,color:"#2563eb",marginBottom:"8px",fontFamily:"'Plus Jakarta Sans', sans-serif"},children:N.name}),e.jsx("span",{className:"tc-leader-tag",children:N.tag})]})]},R))})]}),e.jsx("div",{className:"tc-mission-static",children:e.jsxs("div",{className:"tc-mission-card",children:[e.jsx("img",{src:"/CTC NEW REACT WEBSITE/images/Disha & CSR/d1.jpg",alt:"Mission",className:"tc-mission-img"}),e.jsxs("div",{className:"tc-mission-overlay",children:[e.jsx("h3",{children:"Objective of Disha & CSR"}),e.jsx("p",{children:'Team Disha is a dedicated collective focused on making a sustainable impact on the lives of the less fortunate, with a specialized focus on the visually impaired community. Our mission is anchored in the spirit of "Sewa"—selfless service.'})]})]})}),e.jsxs("div",{className:"tc-techfest-wrap",style:{background:"#fff",borderRadius:22,margin:"40px 0"},children:[e.jsxs("div",{className:"tc-section-head",children:[e.jsxs("div",{className:"tc-pill-tag",children:[e.jsx("i",{className:"fa-solid fa-book-open"})," Publications"]}),e.jsxs("h2",{children:["Published ",e.jsx("span",{children:"Magazines"})]}),e.jsx("p",{children:"Episodes of Disha magazine capturing our journey and impact."})]}),e.jsx("div",{className:"tc-mag-grid",children:Gp.map((N,R)=>e.jsxs("div",{className:"tc-mag-card",onClick:()=>window.open(N.src,"_blank"),children:[e.jsxs("div",{className:"tc-mag-img",children:[e.jsx("img",{src:`/CTC%20NEW%20REACT%20WEBSITE/images/Disha & CSR/photo${R%5+1}.jpg`,alt:"preview"}),e.jsx("div",{className:"tc-mag-overlay-icon",children:e.jsx("i",{className:"fa-solid fa-file-pdf"})})]}),e.jsxs("div",{className:"tc-mag-body",children:[e.jsx("h3",{children:N.label}),e.jsxs("span",{className:"tc-mag-tag",children:["EPISODE ",R+1]}),e.jsxs("span",{className:"tc-mag-link",children:["VIEW PDF ",e.jsx("i",{className:"fa-solid fa-arrow-right"})]})]})]},R))})]}),e.jsxs("div",{className:"tc-team-wrap",children:[e.jsxs("div",{className:"tc-section-head",children:[e.jsxs("div",{className:"tc-pill-tag",children:[e.jsx("i",{className:"fa-solid fa-hand-holding-heart"})," Our Team"]}),e.jsxs("h2",{children:["Active ",e.jsx("span",{children:"Changemakers"})]}),e.jsxs("p",{children:[nn.length," dedicated members working towards social impact."]})]}),e.jsx("div",{className:"tc-filter-bar",children:["all","2023","2024","2025"].map(N=>(N==="all"?nn.length:nn.filter(L=>L.batch===N).length)===0&&N!=="all"?null:e.jsx("button",{className:`tc-filter-btn${u===N?" active":""}`,onClick:()=>g(N),children:N==="all"?"All Batches":`Batch ${N}`},N))}),e.jsx("div",{className:"tc-table-wrap",children:e.jsxs("table",{className:"tc-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{width:48},children:"#"}),e.jsx("th",{children:"Name"}),e.jsx("th",{style:{width:100},children:"Batch"}),e.jsx("th",{children:"Domain"})]})}),e.jsx("tbody",{children:y.map((N,R)=>{const L=Vp[N.batch]||Vp[2023];return e.jsxs("tr",{children:[e.jsx("td",{style:{color:"#94a3b8",fontWeight:700},children:(m-1)*yi+R+1}),e.jsx("td",{style:{fontWeight:700},children:N.name}),e.jsx("td",{children:e.jsx("span",{className:"tc-batch-pill",style:{background:L.bg,color:L.color,border:`1px solid ${L.border}`},children:N.batch})}),e.jsx("td",{children:e.jsx("span",{className:"tc-domain-label",children:N.domain})})]},R)})})]})}),e.jsx(Lx,{page:m,totalPages:x,total:h.length,label:"members",onPage:p})]}),e.jsxs("div",{className:"tc-proj-wrap",children:[e.jsxs("div",{className:"tc-section-head",children:[e.jsxs("div",{className:"tc-pill-tag",children:[e.jsx("i",{className:"fa-solid fa-diagram-project"})," Impact"]}),e.jsxs("h2",{children:["Social ",e.jsx("span",{children:"Case Studies"})]}),e.jsx("p",{children:"Community projects executed by Team Disha & CSR."})]}),e.jsx("div",{className:"tc-proj-inner",children:$p.map((N,R)=>e.jsxs("div",{className:"tc-proj-row",children:[e.jsx("div",{className:"tc-proj-num",children:String(R+1).padStart(2,"0")}),e.jsxs("div",{style:{flex:1},children:[e.jsx("div",{className:"tc-proj-name",children:N.name}),e.jsxs("div",{className:"tc-proj-sub",children:[e.jsx("i",{className:"fa-solid fa-users",style:{fontSize:"0.6rem",marginRight:4}}),N.members]})]}),e.jsxs("div",{className:"tc-proj-date",children:[e.jsx("i",{className:"fa-regular fa-calendar",style:{marginRight:5}}),N.year]})]},R))})]})]})," ",e.jsxs("div",{className:"tc-gallery-wrap",children:[e.jsxs("div",{className:"tc-section-head",children:[e.jsxs("div",{className:"tc-pill-tag",style:{background:"rgba(255,204,0,0.15)",color:"#ffcc00",border:"1px solid rgba(255,204,0,0.3)"},children:[e.jsx("i",{className:"fa-solid fa-images"})," Gallery"]}),e.jsxs("h2",{style:{color:"#fff"},children:["Visual ",e.jsx("span",{style:{color:"#ffcc00"},children:"Highlights"})]}),e.jsx("p",{style:{color:"rgba(255,255,255,0.45)"},children:"Captured moments of community outreach and selfless service."})]}),e.jsx("div",{className:"tc-gallery-grid",children:D.map((N,R)=>e.jsxs("div",{className:`tc-gallery-item ${N.size==="tall"?"tc-item-tall":""} ${N.size==="wide"?"tc-item-wide":""}`,onClick:()=>s(R),children:[e.jsx("img",{src:N.src,alt:N.alt,loading:"lazy"}),e.jsx("div",{className:"tc-gallery-overlay",children:e.jsx("i",{className:"fa-solid fa-expand"})})]},R))}),!o&&E.length>10&&e.jsxs("button",{className:"tc-btn-full",onClick:()=>c(!0),children:["EXPLORE FULL ARCHIVE (",E.length," IMAGES)"]})]}),e.jsxs("div",{className:"tc-ex-wrap",children:[e.jsxs("div",{className:"tc-section-head",children:[e.jsx("div",{className:"tc-pill-tag",style:{background:"rgba(255,204,0,0.15)",color:"#ffcc00",border:"1px solid rgba(255,204,0,0.3)"},children:"Legacy"}),e.jsxs("h2",{style:{color:"#fff"},children:["Compassionate ",e.jsx("span",{style:{color:"#ffcc00"},children:"Alumni"})]}),e.jsx("p",{style:{color:"rgba(255,255,255,0.45)"},children:"Former leaders who carried the torch of service."})]}),e.jsx("div",{className:"tc-ex-grid",children:Wx.map((N,R)=>e.jsxs("div",{className:"tc-ex-card",children:[e.jsx("div",{className:"tc-ex-img",children:e.jsx("img",{src:N.img,alt:N.name})}),e.jsx("p",{className:"tc-ex-name",children:N.name})]},R))})]}),P&&e.jsxs("div",{className:"gl-lightbox",onClick:N=>N.target===N.currentTarget&&s(null),children:[e.jsx("button",{className:"gl-close",onClick:()=>s(null),children:"✕"}),e.jsx("button",{className:"gl-nav",style:{left:"40px"},onClick:()=>s(N=>(N-1+D.length)%D.length),children:"←"}),e.jsxs("div",{className:"gl-panel",children:[e.jsx("img",{className:"gl-img",src:P.src,alt:"View"}),e.jsx("div",{style:{color:"#ffcc00",fontWeight:900,marginTop:"25px",fontSize:"1.2rem"},children:"DISHA & CSR ARCHIVES"}),e.jsx("div",{className:"gl-thumbs",children:D.map((N,R)=>e.jsx("div",{className:`gl-thumb ${r===R?"active":""}`,onClick:()=>s(R),children:e.jsx("img",{src:N.src,alt:"thumb"})},R))})]}),e.jsx("button",{className:"gl-nav",style:{right:"40px"},onClick:()=>s(N=>(N+1)%D.length),children:"→"})]})]})}const Fx={1:{version:"1.0",year:"2023",theme:"Innovation & Technology",color:"#3b82f6",colorDark:"#0c2340",img:"/CTC NEW REACT WEBSITE/images/TECHNOCRAT/TechFest1.0.jpg",about:["TechFest 1.0 is a celebration of innovation, creativity, and technology. It brings together students, developers, and innovators to showcase their technical projects and ideas. This event provides a platform for students to explore real-world problems and create impactful solutions through technology-driven projects and competitions.","Participants engaged in workshops, competitions, and seminars covering topics such as Artificial Intelligence, Internet of Things, Robotics, Software Development, and Machine Learning. TechFest 1.0 encourages collaboration, networking, and knowledge sharing among young innovators.","The event also features keynote speeches from industry leaders, mentorship sessions, and opportunities for students to showcase their startup ideas. TechFest 1.0 is designed to inspire, challenge, and recognize talent while providing a vibrant platform for learning and growth."],projects:[{name:"Human-Motion Detection",members:"Subham, Gyanaranjan, Chandanswain, Anata, Susree, Swarnalaxmi",year:"2023"},{name:"Eye Motion Detection",members:"Subasis, Abhijit, Satyadev, Subham, SK Akil",year:"2023"},{name:"Age Detection",members:"Tushar, Subodh",year:"2023"},{name:"Smart Home",members:"Shankar, Priyadarshan, Ashis, Sourav, Asutosh, Chandra, Suryakanta",year:"2023"},{name:"Gesture Control",members:"Sourav, Shankar, Rudra, Debasis, Nikhil, Somya Ranjan, Armstrong",year:"2023"},{name:"Student Attendance System",members:"Sneha, Priti Prangya, Sandhyarani, Smrutisikha",year:"2023"},{name:"Blind Person Assistant",members:"Priyadarshan, Satyabrata Ojha, Satyabrata Sahu, Sangita, Ananya, Anish, Subham",year:"2023"},{name:"LMS in Django",members:"Ashutosh, Chandra, Suryakanta, SK Akhil, Subham, Satyadev, Chandan, Anata, Susree, Swarnalaxmi, Rudra, Debasis, Nikhil, Somya Ranjan, Armstrong, Sneha, Priti Prangya, Sandhyarani, Smrutisikha, Sangita, Ananya, Anish, Subham",year:"2023"}],gallery:[26,27,28,29,30,31,33,34,36,35].map(r=>`/CTC%20NEW%20REACT%20WEBSITE/images/TECHNOCRAT/techfest1.0/IMG-20251002-WA00${r}.jpg`),galleryRest:[37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66].map(r=>`/CTC%20NEW%20REACT%20WEBSITE/images/TECHNOCRAT/techfest1.0/IMG-20251002-WA00${r}.jpg`)},2:{version:"2.0",year:"2024",theme:"Smart Systems & Automation",color:"#10b981",colorDark:"#0c2340",img:"/CTC NEW REACT WEBSITE/images/TECHNOCRAT/TechFest2.0.jpg",about:["TechFest 2.0 is a celebration of innovation, creativity, and technology. It brings together students, developers, and innovators to showcase their technical projects and ideas. This event provides a platform for students to explore real-world problems and create impactful solutions through technology-driven projects and competitions.","Participants will engage in workshops, competitions, and seminars, covering topics such as Artificial Intelligence, Internet of Things, Robotics, Software Development, and Machine Learning. TechFest 2.0 encourages collaboration, networking, and knowledge sharing among young innovators.","The event also features keynote speeches from industry leaders, mentorship sessions, and opportunities for students to showcase their startup ideas. TechFest 2.0 is designed to inspire, challenge, and recognize talent while providing a vibrant platform for learning and growth."],projects:[{name:"Automated Car",members:"Rakesh, Asutosh, Suryakant, Chandra",year:"2024"},{name:"Smart Parking System",members:"Priyadarshan, Rudraprasad, Sritam, Saswat",year:"2024"},{name:"Fire Detection & Prevention",members:"Sk, Nikhil",year:"2024"},{name:"Face To Aadhar",members:"Soumya, Aliva, Chinmayee",year:"2024"},{name:"Railway Track Accident Prevention",members:"Chandra, Ratnaprava, Monalisha",year:"2024"},{name:"IV Bag Monitoring System",members:"Anish, Debashis, Asutosh",year:"2024"},{name:"Plant Disease Detection By Leaf",members:"Rudra, Chandra",year:"2024"},{name:"Smart Traffic Control",members:"Asutosh, Yashita, Rudraprasad, Abhisek",year:"2024"},{name:"Smart Label Crossing System",members:"Anish, Swastika, Nikhil",year:"2024"},{name:"Automated Plant Watering System",members:"Chandan, Monalisha, Priyanka",year:"2024"},{name:"Women Safety",members:"Ananta, Elin, Bidusmita",year:"2024"},{name:"Product Failure Management System",members:"Priti",year:"2024"},{name:"Wildlife Detection",members:"Debasish, Archita, Sudipta",year:"2024"},{name:"Smart Reminder For Municipality",members:"Sangita, Jasmin, Saswat, Sritam",year:"2024"},{name:"Smart Home Security",members:"Smrutisikha, Arpita, Pramod",year:"2024"},{name:"Gas Level Monitoring System",members:"Sandhya, Sangita",year:"2024"},{name:"AI Mock Interview",members:"Sandhya, Sangita",year:"2024"},{name:"Drone For Delivery",members:"Abhijit, Asutosh, Suryakant",year:"2024"},{name:"Smart Restaurant Management System",members:"Anish, Sandhya, Sangita",year:"2024"}],gallery:[12,16,18,21,22,25,26,29,30,33].map(r=>`/CTC%20NEW%20REACT%20WEBSITE/images/TECHNOCRAT/techfest 2.0/IMG-20241120-WA00${r}.jpg`),galleryRest:[34,37,38,40,42,45,46,49,53,54,57,58,61,62].map(r=>`/CTC%20NEW%20REACT%20WEBSITE/images/TECHNOCRAT/techfest 2.0/IMG-20241120-WA00${r}.jpg`).concat([25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42].map(r=>`/CTC%20NEW%20REACT%20WEBSITE/images/TECHNOCRAT/techfest 2.0/img${r}.jpg`))},3:{version:"3.0",year:"2025",theme:"Viksit Bharat — Multi-Institution",color:"#f59e0b",colorDark:"#0c2340",img:"/CTC NEW REACT WEBSITE/images/TECHNOCRAT/TechFest3.0.jpg",about:["TechFest 3.0 is a vibrant celebration of innovation, creativity, and the spirit of Viksit Bharat. This edition brings a transformative platform where technology meets vision, empowering young minds to build solutions that contribute to a developed and progressive India.","Building on the success of TechFest 1.0 and 2.0—where only college students showcased their projects—TechFest 3.0 marks a historic moment as schools from outside the campus also participate, bringing their innovative projects and ideas to this grand stage.","This edition also features keynote sessions by industry experts, mentorship opportunities, and a dedicated arena for startup and research idea presentations. TechFest 3.0 is designed to inspire, challenge, and recognize emerging talent while fostering a culture of innovation that aligns with the vision of Viksit Bharat."],projects:[{name:"Emergency Fuel Delivery",members:"Aliva, Priyanka, Soumyaranjan, Sudhanshu",year:"2025"},{name:"Hostel Management System",members:"Aliva, Priyanka, Sudipta, Chinmayee, Ankita, Tulasi",year:"2025"},{name:"C & W Education Sponsorship Portal",members:"Yashita, Swastika, Pradyumna, Satyabrata",year:"2025"},{name:"Eco Re-Use",members:"Yashita, Swastika, Dattatreya, Om Prakash",year:"2025"},{name:"Line Up",members:"Abhisek, Rudraprasad, Ladly, Biswajit",year:"2025"},{name:"Skill Hub",members:"Krishna, Abhipsa, Trishna, Supriyanjali, Sasmita, Monalisha, Abhisek, Swastika, Priyadarshan, Arpita",year:"2025"},{name:"Food Waste Management System",members:"Saswat, Sudipta, Anshuman, Subhalaxmi",year:"2025"},{name:"Bus Tracking & Booking System",members:"Jasmin, Ratnaprava, Monalisha, Ananta, Priyanka, Priyani",year:"2025"},{name:"E-Jeevan Dan",members:"Bhagyalaxmi, Rimjhim, Selina, kajal, Bidusmita, Elin, Ipsita, Elina",year:"2025"},{name:"Smart Helmet",members:"Yash, Tanmay, Subham",year:"2025"}],gallery:Array.from({length:10},(r,s)=>`/CTC%20NEW%20REACT%20WEBSITE/images/TECHNOCRAT/techfest 3.0/${s+1}.jpg`),galleryRest:Array.from({length:37},(r,s)=>`/CTC%20NEW%20REACT%20WEBSITE/images/TECHNOCRAT/techfest 3.0/${s+11}.jpg`)}},Kp=["normal","tall","wide","normal","normal","wide","tall","normal","normal","normal"];function tl({version:r}){const[s,o]=v.useState(null),[c,m]=v.useState(!1),p=Fx[r],u=[...p.gallery,...p.galleryRest].map((y,g)=>({src:y,size:Kp[g%Kp.length],alt:`TechFest ${r}.0 - Photo ${g+1}`})),b=c?u:u.slice(0,10),h=v.useCallback(y=>{s!==null&&(y.key==="ArrowRight"&&o(g=>(g+1)%b.length),y.key==="ArrowLeft"&&o(g=>(g-1+b.length)%b.length),y.key==="Escape"&&o(null))},[s,b.length]);v.useEffect(()=>(window.addEventListener("keydown",h),()=>window.removeEventListener("keydown",h)),[h]);const x=s!==null?b[s]:null;return e.jsxs("div",{className:"tf-page",children:[e.jsx("style",{children:`
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
      `}),e.jsx("section",{className:"tf-hero",children:e.jsxs("div",{className:"tf-hero-content",children:[e.jsxs("div",{className:"tf-hero-left",children:[e.jsxs("div",{className:"tf-hero-badge",children:[e.jsx("i",{className:"fa-solid fa-bolt"})," Official Technocrat Mega-Event"]}),e.jsxs("h1",{children:["TECH",e.jsx("em",{style:{color:p.color},children:"FEST"})," ",p.version]}),e.jsxs("div",{className:"tf-theme-box",children:["Theme: ",p.theme]}),e.jsx("p",{children:"Where code meets creativity. A grand stage for the next generation of engineers to present disruptive solutions and technological breakthroughs."})]}),e.jsx("div",{className:"tf-hero-right",children:e.jsx("div",{className:"tf-hero-stats",children:[{icon:"fa-calendar-check",label:"EVENT YEAR",val:p.year},{icon:"fa-microchip",label:"PROJECTS",val:p.projects.length},{icon:"fa-camera-retro",label:"GALLERY",val:u.length}].map((y,g)=>e.jsxs("div",{className:"tf-hero-stat-card",children:[e.jsx("i",{className:`fa-solid ${y.icon}`,style:{color:"#ffcc00",fontSize:"1.4rem"}}),e.jsxs("div",{children:[e.jsx("div",{style:{color:"rgba(255,255,255,0.4)",fontSize:"0.65rem",fontWeight:800,letterSpacing:1},children:y.label}),e.jsx("div",{style:{color:"#fff",fontSize:"1.2rem",fontWeight:900},children:y.val})]})]},g))})})]})}),e.jsx("div",{className:"tf-wave-sep",children:e.jsx("svg",{viewBox:"0 0 1440 70",preserveAspectRatio:"none",children:e.jsx("path",{d:"M0,40 C320,80 720,0 1080,50 C1260,75 1380,30 1440,20 L1440,70 L0,70Z"})})}),e.jsx("section",{className:"tf-about",children:e.jsxs("div",{className:"tf-about-inner",children:[e.jsxs("div",{className:"tf-about-left",children:[e.jsx("span",{className:"tf-section-pill",children:"The History"}),e.jsxs("h2",{children:["About ",e.jsxs("span",{style:{color:p.color},children:["TechFest ",p.version]})]}),p.about.map((y,g)=>e.jsx("p",{children:y},g))]}),e.jsx("div",{className:"tf-about-right",children:e.jsx("div",{className:"tf-about-img-container",children:e.jsx("img",{src:p.img,alt:"TechFest Highlights"})})})]})}),e.jsxs("section",{className:"tf-projects",children:[e.jsxs("div",{className:"tf-projects-header",children:[e.jsx("span",{className:"tf-pill",children:"The Arena"}),e.jsxs("h2",{children:["Innovations ",e.jsx("span",{children:"Showcased"})]}),e.jsx("p",{children:"Every single project submitted and presented during this edition."})]}),e.jsx("div",{className:"tf-table-container",children:e.jsxs("table",{className:"tf-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{width:"60px"},children:"#"}),e.jsx("th",{style:{width:"30%"},children:"Project Title"}),e.jsx("th",{children:"Team Members"}),e.jsx("th",{style:{width:"100px"},children:"Year"})]})}),e.jsx("tbody",{children:p.projects.map((y,g)=>e.jsxs("tr",{children:[e.jsx("td",{className:"tf-proj-id",children:String(g+1).padStart(2,"0")}),e.jsx("td",{className:"tf-proj-title",children:y.name}),e.jsx("td",{className:"tf-member-list",children:y.members}),e.jsx("td",{style:{fontWeight:800,color:p.color},children:y.year})]},g))})]})})]}),e.jsxs("section",{className:"tf-gallery-section",children:[e.jsxs("div",{className:"tf-heading",children:[e.jsx("span",{className:"tf-pill",style:{background:"rgba(255,204,0,0.1)",color:"#ffcc00",borderColor:"rgba(255,204,0,0.2)"},children:"Visual Log"}),e.jsxs("h2",{style:{color:"#fff"},children:["Event ",e.jsx("span",{children:"Highlights"})]}),e.jsx("p",{style:{color:"rgba(255,255,255,0.4)"},children:"Captured moments of brilliance and technical prowess."})]}),e.jsx("div",{className:"tf-grid",children:b.map((y,g)=>e.jsxs("div",{className:`tf-item tf-item-${y.size}`,onClick:()=>o(g),children:[e.jsx("img",{src:y.src,alt:y.alt,loading:"lazy"}),e.jsx("div",{className:"tf-overlay",children:e.jsx("i",{className:"fa-solid fa-expand"})})]},g))}),!c&&u.length>10&&e.jsxs("button",{className:"tf-see-all-btn",onClick:()=>m(!0),children:["Explore All ",u.length," Photos"]})]}),x&&e.jsxs("div",{className:"gl-lightbox",onClick:y=>y.target===y.currentTarget&&o(null),children:[e.jsx("button",{className:"gl-lb-close",onClick:()=>o(null),children:e.jsx("i",{className:"fa-solid fa-xmark"})}),e.jsx("button",{className:"gl-lb-nav gl-lb-prev",onClick:()=>o(y=>(y-1+b.length)%b.length),children:e.jsx("i",{className:"fa-solid fa-chevron-left"})}),e.jsxs("div",{className:"gl-lb-panel",children:[e.jsx("img",{className:"gl-lb-img",src:x.src,alt:x.alt}),e.jsxs("div",{className:"gl-lb-caption",children:[e.jsxs("div",{style:{color:"#ffcc00",fontWeight:900,fontSize:"1.2rem",letterSpacing:"1px"},children:["TECHFEST ",r,".0 ARCHIVE"]}),e.jsxs("div",{style:{color:"#fff",fontSize:"0.9rem",opacity:.6,marginTop:"5px"},children:["Shot ",s+1," of ",b.length]})]}),e.jsx("div",{className:"gl-lb-thumbs",children:b.map((y,g)=>e.jsx("div",{className:`gl-lb-thumb ${s===g?"active":""}`,onClick:()=>o(g),children:e.jsx("img",{src:y.src,alt:"thumb"})},g))})]}),e.jsx("button",{className:"gl-lb-nav gl-lb-next",onClick:()=>o(y=>(y+1)%b.length),children:e.jsx("i",{className:"fa-solid fa-chevron-right"})})]}),e.jsx("footer",{className:"tf-footer-nav",children:e.jsxs("div",{className:"tf-footer-nav-inner",children:[e.jsxs(fe,{to:"/gymkhana/technocrat",className:"tf-nav-link tf-nav-btn-secondary",children:[e.jsx("i",{className:"fa-solid fa-arrow-left-long"})," Back to Technocrat"]}),e.jsxs("div",{className:"tf-nav-group",children:[r>1&&e.jsxs(fe,{to:`/gymkhana/techfest/${r-1}`,className:"tf-nav-link tf-nav-btn-secondary",children:[e.jsx("i",{className:"fa-solid fa-chevron-left"})," Edition ",r-1,".0"]}),r<3&&e.jsxs(fe,{to:`/gymkhana/techfest/${r+1}`,className:"tf-nav-link tf-nav-btn-primary",children:["Explore Edition ",r+1,".0 ",e.jsx("i",{className:"fa-solid fa-arrow-right-long",style:{marginLeft:"5px"}})]})]})]})})]})}function qp(){return e.jsx(tl,{version:1})}function Qp(){return e.jsx(tl,{version:2})}function Xp(){return e.jsx(tl,{version:3})}function Ux(){v.useEffect(()=>{const r=document.querySelectorAll(".rv,.rv-l,.rv-r"),s=new IntersectionObserver(o=>o.forEach(c=>{c.isIntersecting&&c.target.classList.add("visible")}),{threshold:.07});return r.forEach(o=>s.observe(o)),()=>s.disconnect()},[])}function Rm({r="0,212,255"}){const s=v.useRef(null);return v.useEffect(()=>{const o=s.current;if(!o)return;const c=o.getContext("2d");let m;const p=()=>{o.width=o.offsetWidth,o.height=o.offsetHeight};p(),window.addEventListener("resize",p);const u=Array.from({length:48},()=>({x:Math.random()*o.width,y:Math.random()*o.height,r:Math.random()*1.8+.3,vx:(Math.random()-.5)*.32,vy:(Math.random()-.5)*.32,a:Math.random()*.4+.06})),b=()=>{c.clearRect(0,0,o.width,o.height),u.forEach(h=>{h.x+=h.vx,h.y+=h.vy,(h.x<0||h.x>o.width)&&(h.vx*=-1),(h.y<0||h.y>o.height)&&(h.vy*=-1),c.beginPath(),c.arc(h.x,h.y,h.r,0,Math.PI*2),c.fillStyle=`rgba(${r},${h.a})`,c.fill()}),u.forEach((h,x)=>u.slice(x+1).forEach(y=>{const g=Math.hypot(h.x-y.x,h.y-y.y);g<95&&(c.beginPath(),c.moveTo(h.x,h.y),c.lineTo(y.x,y.y),c.strokeStyle=`rgba(${r},${.055*(1-g/95)})`,c.lineWidth=.6,c.stroke())})),m=requestAnimationFrame(b)};return b(),()=>{cancelAnimationFrame(m),window.removeEventListener("resize",p)}},[r]),e.jsx("canvas",{ref:s,style:{position:"absolute",inset:0,width:"100%",height:"100%",pointerEvents:"none",zIndex:0}})}function _x({onSuccess:r}){const[s,o]=v.useState(""),[c,m]=v.useState(""),[p,u]=v.useState(!1),[b,h]=v.useState(""),[x,y]=v.useState(!1),[g,E]=v.useState(!1);v.useEffect(()=>{setTimeout(()=>E(!0),50)},[]);const D=async P=>{if(P.preventDefault(),h(""),!s||!c){h("Please enter both username and password.");return}y(!0),await new Promise(z=>setTimeout(z,700)),y(!1),s==="login"&&c==="1010"?r():h("Invalid username or password. Please try again.")};return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
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
  `}),e.jsxs("div",{className:"naac-login-page",children:[e.jsx(Rm,{r:"0,212,255"}),e.jsx("div",{className:"naac-login-dots"}),e.jsx("div",{className:"naac-login-blob",style:{width:480,height:480,background:"radial-gradient(circle,rgba(45,125,210,0.22) 0%,transparent 70%)",top:-160,right:-80,animation:"naacFloat 9s ease-in-out infinite"}}),e.jsx("div",{className:"naac-login-blob",style:{width:340,height:340,background:"radial-gradient(circle,rgba(245,197,24,0.07) 0%,transparent 70%)",bottom:-100,left:-60,animation:"naacFloat 11s ease-in-out infinite reverse"}}),e.jsxs("div",{className:`naac-split-card${g?" show":""}`,children:[e.jsxs("div",{className:"naac-left-panel",children:[e.jsx("img",{className:"naac-panel-logo",src:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/naac-removebg-preview.png",alt:"NAAC",onError:P=>{P.target.src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c0/NAAC_logo.png/200px-NAAC_logo.png"}}),e.jsx("div",{className:"naac-divider"}),e.jsxs("div",{className:"naac-panel-title",children:["National Assessment and",e.jsx("span",{children:"Accreditation Council"})]}),e.jsxs("div",{className:"naac-panel-badges",children:[e.jsx("span",{className:"naac-panel-badge",children:"NAAC"}),e.jsx("span",{className:"naac-panel-badge",children:"UGC Recognized"}),e.jsx("span",{className:"naac-panel-badge",children:"7 Criteria"})]})]}),e.jsxs("div",{className:"naac-right-panel",children:[e.jsx("p",{className:"naac-right-label",children:"Secure Access"}),e.jsxs("h1",{className:"naac-right-heading",children:["NAAC ",e.jsx("span",{children:"Portal"})]}),e.jsx("p",{className:"naac-right-sub",children:"Creative Techno College — Accreditation Dashboard"}),b&&e.jsxs("div",{className:"naac-error",children:[e.jsx("i",{className:"fa-solid fa-triangle-exclamation",style:{marginTop:2,flexShrink:0}}),e.jsx("span",{children:b})]}),e.jsxs("form",{onSubmit:D,noValidate:!0,children:[e.jsxs("label",{className:"naac-field-label",children:[e.jsx("i",{className:"fa-solid fa-user"})," Username"]}),e.jsxs("div",{className:"naac-input-wrap",children:[e.jsx("span",{className:"naac-input-icon",children:e.jsx("i",{className:"fa-solid fa-id-card"})}),e.jsx("input",{type:"text",value:s,onChange:P=>o(P.target.value),placeholder:"Enter username",autoComplete:"username",required:!0})]}),e.jsxs("label",{className:"naac-field-label",children:[e.jsx("i",{className:"fa-solid fa-lock"})," Password"]}),e.jsxs("div",{className:"naac-input-wrap",children:[e.jsx("span",{className:"naac-input-icon",children:e.jsx("i",{className:"fa-solid fa-key"})}),e.jsx("input",{type:p?"text":"password",value:c,onChange:P=>m(P.target.value),placeholder:"Enter password",autoComplete:"current-password",required:!0}),e.jsx("button",{type:"button",className:"naac-eye-btn",onClick:()=>u(P=>!P),children:e.jsx("i",{className:`fa-solid ${p?"fa-eye-slash":"fa-eye"}`})})]}),e.jsx("button",{type:"submit",className:"naac-submit-btn",disabled:x,children:x?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"naac-spinner"}),"Authenticating…"]}):e.jsxs(e.Fragment,{children:[e.jsx("i",{className:"fa-solid fa-right-to-bracket"}),"Access Dashboard"]})})]}),e.jsxs("div",{className:"naac-secure-note",children:[e.jsx("i",{className:"fa-solid fa-shield-check"}),"Protected portal — authorised personnel only"]})]})]})]})]})}const Zn=[{num:"I",roman:"01",title:"Curricular Aspects",icon:"fa-book-open",color:"#3b82f6",glow:"59,130,246",grad:"linear-gradient(135deg,#1e3a8a,#3b82f6)",score:2.78,maxScore:3.5,docs:12,status:"Submitted"},{num:"II",roman:"02",title:"Teaching-Learning & Evaluation",icon:"fa-chalkboard-user",color:"#10b981",glow:"16,185,129",grad:"linear-gradient(135deg,#064e3b,#10b981)",score:3.12,maxScore:3.5,docs:18,status:"Submitted"},{num:"III",roman:"03",title:"Research, Innovations & Extension",icon:"fa-flask-conical",color:"#8b5cf6",glow:"139,92,246",grad:"linear-gradient(135deg,#2e1065,#8b5cf6)",score:1.85,maxScore:3.5,docs:9,status:"Under Review"},{num:"IV",roman:"04",title:"Infrastructure & Learning Resources",icon:"fa-building-columns",color:"#ef4444",glow:"239,68,68",grad:"linear-gradient(135deg,#7f1d1d,#ef4444)",score:2.94,maxScore:3.5,docs:14,status:"Submitted"},{num:"V",roman:"05",title:"Student Support & Progression",icon:"fa-users",color:"#f59e0b",glow:"245,158,11",grad:"linear-gradient(135deg,#78350f,#f59e0b)",score:3.05,maxScore:3.5,docs:16,status:"Submitted"},{num:"VI",roman:"06",title:"Governance, Leadership & Management",icon:"fa-sitemap",color:"#06b6d4",glow:"6,182,212",grad:"linear-gradient(135deg,#164e63,#06b6d4)",score:2.88,maxScore:3.5,docs:11,status:"Submitted"},{num:"VII",roman:"07",title:"Institutional Values & Best Practices",icon:"fa-star",color:"#ec4899",glow:"236,72,153",grad:"linear-gradient(135deg,#831843,#ec4899)",score:2.5,maxScore:3.5,docs:8,status:"Submitted"}];function $x({score:r,color:s,label:o,delay:c=0}){const[m,p]=v.useState(0),u=v.useRef(null);v.useEffect(()=>{const y=new IntersectionObserver(([g])=>{if(!g.isIntersecting)return;const E=performance.now(),D=1600,F=P=>{const z=Math.min((P-E)/D,1),N=1-Math.pow(1-z,3);p(r*N),z<1&&requestAnimationFrame(F)};requestAnimationFrame(F)},{threshold:.4});return u.current&&y.observe(u.current),()=>y.disconnect()},[r]);const b=38,h=2*Math.PI*b,x=h*(1-m/4);return e.jsxs("div",{ref:u,style:{display:"flex",flexDirection:"column",alignItems:"center",gap:8},children:[e.jsxs("div",{style:{position:"relative",width:96,height:96},children:[e.jsxs("svg",{width:96,height:96,viewBox:"0 0 96 96",style:{transform:"rotate(-90deg)"},children:[e.jsx("circle",{cx:48,cy:48,r:b,fill:"none",stroke:"rgba(255,255,255,0.06)",strokeWidth:7}),e.jsx("circle",{cx:48,cy:48,r:b,fill:"none",stroke:s,strokeWidth:7,strokeDasharray:h,strokeDashoffset:x,strokeLinecap:"round",style:{filter:`drop-shadow(0 0 6px ${s}80)`}})]}),e.jsxs("div",{style:{position:"absolute",inset:0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[e.jsx("span",{style:{fontFamily:"'Outfit',sans-serif",fontWeight:900,fontSize:"1.1rem",color:"#fff",lineHeight:1},children:m.toFixed(2)}),e.jsx("span",{style:{fontFamily:"'Outfit',sans-serif",fontSize:"0.55rem",fontWeight:600,color:"rgba(255,255,255,0.35)"},children:"/4.00"})]})]}),e.jsx("span",{style:{fontFamily:"'Outfit',sans-serif",fontSize:"0.62rem",fontWeight:700,color:"rgba(255,255,255,0.4)",textTransform:"uppercase",letterSpacing:"0.6px",textAlign:"center",maxWidth:90,lineHeight:1.4},children:o})]})}function Gx({c:r,i:s}){const[o,c]=v.useState(!1),m=r.score/4*100,p=r.status==="Submitted"?"#10b981":"#f59e0b";return e.jsxs("a",{href:`#crit-${s+1}`,className:"rv",style:{display:"block",textDecoration:"none",background:"#fff",borderRadius:22,overflow:"hidden",border:"1px solid rgba(10,22,40,0.07)",boxShadow:o?`0 20px 56px rgba(${r.glow},0.18)`:"0 4px 20px rgba(10,22,40,0.07)",transform:o?"translateY(-10px) scale(1.01)":"none",transition:"all 0.32s cubic-bezier(0.4,0,0.2,1)",animationDelay:`${s*.07}s`},onMouseEnter:()=>c(!0),onMouseLeave:()=>c(!1),children:[e.jsxs("div",{style:{background:r.grad,padding:"26px 22px 20px",position:"relative",overflow:"hidden"},children:[e.jsx("div",{style:{position:"absolute",right:-4,top:-14,fontFamily:"'Outfit',sans-serif",fontWeight:900,fontSize:"6rem",color:"rgba(255,255,255,0.07)",lineHeight:1,userSelect:"none",transform:o?"scale(1.1) translateX(-6px)":"scale(1)",transition:"transform 0.4s ease"},children:r.roman}),e.jsx("div",{style:{width:50,height:50,borderRadius:14,background:"rgba(255,255,255,0.15)",backdropFilter:"blur(8px)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.2rem",color:"#fff",marginBottom:14,transform:o?"scale(1.12) rotate(-6deg)":"none",transition:"transform 0.3s ease",position:"relative",zIndex:1},children:e.jsx("i",{className:`fa-solid ${r.icon}`})}),e.jsxs("div",{style:{fontFamily:"'Outfit',sans-serif",fontWeight:800,fontSize:"0.98rem",color:"#fff",lineHeight:1.35,marginBottom:16,position:"relative",zIndex:1},children:["Criterion ",r.num,": ",r.title]}),e.jsxs("div",{style:{position:"relative",zIndex:1},children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:5},children:[e.jsx("span",{style:{fontFamily:"'Outfit',sans-serif",fontSize:"0.65rem",fontWeight:700,color:"rgba(255,255,255,0.5)",textTransform:"uppercase",letterSpacing:.5},children:"Score"}),e.jsxs("span",{style:{fontFamily:"'Outfit',sans-serif",fontSize:"0.8rem",fontWeight:800,color:"#fff"},children:[r.score," / 4.00"]})]}),e.jsx("div",{style:{height:5,background:"rgba(255,255,255,0.12)",borderRadius:3,overflow:"hidden"},children:e.jsx("div",{style:{height:"100%",background:"rgba(255,255,255,0.85)",borderRadius:3,width:`${m}%`}})})]})]}),e.jsxs("div",{style:{padding:"14px 22px",display:"flex",alignItems:"center",justifyContent:"space-between",borderTop:"1px solid rgba(10,22,40,0.06)"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[e.jsx("div",{style:{width:8,height:8,borderRadius:"50%",background:p,boxShadow:`0 0 8px ${p}80`}}),e.jsx("span",{style:{fontFamily:"'Outfit',sans-serif",fontSize:"0.72rem",fontWeight:700,color:"#4a6080"},children:r.status}),e.jsx("span",{style:{fontFamily:"'Outfit',sans-serif",fontSize:"0.7rem",color:"#94a3b8"},children:"·"}),e.jsxs("span",{style:{fontFamily:"'Outfit',sans-serif",fontSize:"0.72rem",color:"#94a3b8",fontWeight:600},children:[r.docs," docs"]})]}),e.jsx("div",{style:{width:32,height:32,borderRadius:"50%",background:r.grad,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"0.7rem",color:"#fff",transform:o?"translateX(6px)":"none",transition:"transform 0.25s ease",boxShadow:o?`0 4px 14px rgba(${r.glow},0.5)`:"none"},children:e.jsx("i",{className:"fa-solid fa-arrow-right"})})]})]})}function Yx({onLogout:r}){Ux();const s=(Zn.reduce((p,u)=>p+u.score,0)/Zn.length).toFixed(2),o=`
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
  `,c=[{val:"7",lbl:"Criteria Covered",icon:"fa-layer-group",col:"linear-gradient(135deg,#1e3a8a,#3b82f6)"},{val:s,lbl:"Avg. CGPA",icon:"fa-chart-line",col:"linear-gradient(135deg,#064e3b,#10b981)"},{val:"88+",lbl:"Documents Filed",icon:"fa-file-shield",col:"linear-gradient(135deg,#2e1065,#8b5cf6)"},{val:"A",lbl:"Target Grade",icon:"fa-medal",col:"linear-gradient(135deg,#78350f,#f59e0b)"}],m=[{title:"Executive Summary",meta:"SSR Part A · 12 pages",col:"linear-gradient(135deg,#1e3a8a,#3b82f6)",status:"Approved",statusCol:"#10b981"},...Zn.map((p,u)=>({title:`Criterion ${p.num} — ${p.title}`,meta:`${p.docs} documents · Score ${p.score}/4.00`,col:p.grad,status:p.status,statusCol:p.status==="Submitted"?"#10b981":"#f59e0b"})),{title:"Evaluative Report",meta:"SSR Part C · Departmental",col:"linear-gradient(135deg,#164e63,#06b6d4)",status:"Submitted",statusCol:"#10b981"}];return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:o}),e.jsxs("div",{className:"nd-page",children:[e.jsxs("div",{className:"nd-hero",children:[e.jsx("div",{className:"nd-hero-bg-grid"}),e.jsx("div",{className:"nd-hero-scan"}),e.jsx("div",{className:"nd-hero-glow1"}),e.jsx("div",{className:"nd-hero-glow2"}),e.jsx(Rm,{r:"0,212,255"}),e.jsxs("button",{className:"nd-logout",onClick:r,children:[e.jsx("i",{className:"fa-solid fa-right-from-bracket"}),"Logout"]}),e.jsxs("div",{className:"nd-hero-content",children:[e.jsxs("div",{className:"nd-hero-badge",children:[e.jsx("i",{className:"fa-solid fa-shield-halved"}),"NAAC Accreditation 2024–25"]}),e.jsxs("h1",{className:"nd-hero-h1",children:["National Assessment",e.jsx("br",{}),"& ",e.jsx("em",{children:"Accreditation"})]}),e.jsx("p",{className:"nd-hero-p",children:"Creative Techno College, Angul, Odisha — Self Study Report comprising all 7 criteria, evidence documents and institutional data for NAAC Grade A certification."}),e.jsx("div",{className:"nd-hero-tags",children:["UGC Recognized","AICTE Approved","Utkal University","Est. 2010","ISO Certified"].map((p,u)=>e.jsxs("span",{className:"nd-hero-tag",children:[e.jsx("i",{className:"fa-solid fa-circle-check",style:{color:"#00d4ff",fontSize:"0.65rem"}}),p]},u))})]})]}),e.jsx("div",{className:"nd-wave",children:e.jsx("svg",{viewBox:"0 0 1440 60",preserveAspectRatio:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M0,40 C360,60 1080,0 1440,40 L1440,60 L0,60 Z",fill:"#f0f4f8"})})}),e.jsx("div",{className:"nd-stats-band",children:c.map((p,u)=>e.jsxs("div",{className:"nd-stat-card rv",style:{animationDelay:`${u*.08}s`},children:[e.jsx("div",{className:"nd-stat-ico",style:{background:p.col},children:e.jsx("i",{className:`fa-solid ${p.icon}`})}),e.jsxs("div",{children:[e.jsx("div",{className:"nd-stat-num",children:p.val}),e.jsx("div",{className:"nd-stat-lbl",children:p.lbl})]})]},u))}),e.jsxs("section",{className:"nd-rings-sec",children:[e.jsxs("div",{style:{maxWidth:1100,margin:"0 auto",textAlign:"center"},children:[e.jsx("span",{className:"section-label",style:{color:"rgba(0,212,255,0.7)"},children:"Performance Overview"}),e.jsxs("h2",{className:"section-title",style:{color:"#fff"},children:["Criteria-wise ",e.jsx("span",{style:{color:"#f5c518"},children:"Scores"})]})]}),e.jsx("div",{className:"nd-rings-grid",children:Zn.map((p,u)=>e.jsx("div",{className:"rv",style:{transitionDelay:`${u*.07}s`},children:e.jsx($x,{score:p.score,color:p.color,label:`Criterion ${p.num}`})},u))}),e.jsxs("div",{className:"nd-cgpa-box rv",style:{transitionDelay:"0.5s"},children:[e.jsx("div",{style:{fontFamily:"'Outfit',sans-serif",fontSize:"0.68rem",fontWeight:800,color:"rgba(255,255,255,0.35)",textTransform:"uppercase",letterSpacing:2.5,marginBottom:8},children:"Overall CGPA"}),e.jsx("div",{className:"nd-cgpa-val",children:s}),e.jsx("div",{style:{fontFamily:"'Outfit',sans-serif",fontSize:"0.78rem",color:"rgba(255,255,255,0.3)",marginTop:10},children:"Out of 4.00 — Target: Grade A"}),e.jsx("div",{style:{marginTop:16,display:"flex",justifyContent:"center",gap:16},children:["C","B","B+","A","A+"].map((p,u)=>{const b=[1.51,2.01,2.51,3.01,3.51],h=parseFloat(s)>=b[u];return e.jsx("div",{style:{textAlign:"center"},children:e.jsx("div",{style:{width:36,height:36,borderRadius:10,background:h?p==="A"?"linear-gradient(135deg,#f5c518,#f59e0b)":"rgba(255,255,255,0.12)":"rgba(255,255,255,0.04)",border:`2px solid ${h?p==="A"?"#f5c518":"rgba(255,255,255,0.2)":"rgba(255,255,255,0.07)"}`,display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"'Outfit',sans-serif",fontWeight:900,fontSize:"0.9rem",color:h?"#fff":"rgba(255,255,255,0.15)"},children:p})},u)})})]})]}),e.jsxs("section",{className:"nd-crit-sec",children:[e.jsxs("div",{style:{maxWidth:1240,margin:"0 auto",textAlign:"center"},children:[e.jsx("span",{className:"section-label",children:"Documentation"}),e.jsxs("h2",{className:"section-title",children:["Select a ",e.jsx("span",{children:"Criterion"})]}),e.jsx("p",{className:"section-subtitle",style:{margin:"0 auto"},children:"Click any criterion to access its complete SSR documentation, supporting data and evidence files."})]}),e.jsx("div",{className:"nd-crit-grid",children:Zn.map((p,u)=>e.jsx(Gx,{c:p,i:u},u))})]}),e.jsxs("section",{className:"nd-ssr-sec",children:[e.jsxs("div",{style:{maxWidth:900,margin:"0 auto",textAlign:"center"},children:[e.jsx("span",{className:"section-label",children:"Self Study Report"}),e.jsxs("h2",{className:"section-title",children:["Document ",e.jsx("span",{children:"Timeline"})]}),e.jsx("p",{className:"section-subtitle",style:{margin:"0 auto"},children:"Complete SSR document trail — all submissions and their current status."})]}),e.jsx("div",{className:"nd-timeline",children:m.map((p,u)=>e.jsxs("div",{className:"nd-tl-item rv",style:{transitionDelay:`${u*.05}s`},children:[e.jsx("div",{className:"nd-tl-dot",style:{background:p.col},children:e.jsx("i",{className:"fa-solid fa-file-lines"})}),e.jsxs("div",{className:"nd-tl-body",children:[e.jsxs("div",{children:[e.jsx("div",{className:"nd-tl-title",children:p.title}),e.jsx("div",{className:"nd-tl-meta",children:p.meta})]}),e.jsxs("div",{className:"nd-tl-badge",style:{background:`${p.statusCol}18`,border:`1.5px solid ${p.statusCol}40`,color:p.statusCol},children:[e.jsx("i",{className:"fa-solid fa-circle-check"}),p.status]})]})]},u))})]}),e.jsx("div",{className:"nd-grade-banner",children:e.jsxs("div",{style:{maxWidth:700,margin:"0 auto"},children:[e.jsx("div",{style:{fontFamily:"'Outfit',sans-serif",fontSize:"0.7rem",fontWeight:800,color:"rgba(245,197,24,0.7)",letterSpacing:3,textTransform:"uppercase",marginBottom:12},children:"Our Goal"}),e.jsxs("h2",{style:{fontFamily:"'Outfit',sans-serif",fontWeight:900,fontSize:"clamp(2rem,4vw,3rem)",color:"#fff",letterSpacing:-1.5,marginBottom:14,lineHeight:1.1},children:["Targeting ",e.jsx("span",{style:{color:"#f5c518"},children:"NAAC Grade A"}),e.jsx("br",{}),"for Creative Techno College"]}),e.jsx("p",{style:{color:"rgba(255,255,255,0.4)",fontSize:"0.9rem",lineHeight:1.75},children:"Committed to academic excellence, institutional growth and quality assurance across all 7 criteria of the NAAC Self Study Report framework."})]})})]})]})}function Jx(){const[r,s]=v.useState(!1);return r?e.jsx(Yx,{onLogout:()=>s(!1)}):e.jsx(_x,{onSuccess:()=>s(!0)})}function Vx(){v.useEffect(()=>{const r=document.querySelectorAll(".rv,.rv-l,.rv-r"),s=new IntersectionObserver(o=>o.forEach(c=>{c.isIntersecting&&c.target.classList.add("visible")}),{threshold:.07});return r.forEach(o=>s.observe(o)),()=>s.disconnect()},[])}function Pm({r="0,212,255"}){const s=v.useRef(null);return v.useEffect(()=>{const o=s.current;if(!o)return;const c=o.getContext("2d");let m;const p=()=>{o.width=o.offsetWidth,o.height=o.offsetHeight};p(),window.addEventListener("resize",p);const u=Array.from({length:44},()=>({x:Math.random()*o.width,y:Math.random()*o.height,r:Math.random()*1.8+.3,vx:(Math.random()-.5)*.28,vy:(Math.random()-.5)*.28,a:Math.random()*.35+.06})),b=()=>{c.clearRect(0,0,o.width,o.height),u.forEach(h=>{h.x+=h.vx,h.y+=h.vy,(h.x<0||h.x>o.width)&&(h.vx*=-1),(h.y<0||h.y>o.height)&&(h.vy*=-1),c.beginPath(),c.arc(h.x,h.y,h.r,0,Math.PI*2),c.fillStyle=`rgba(${r},${h.a})`,c.fill()}),u.forEach((h,x)=>u.slice(x+1).forEach(y=>{const g=Math.hypot(h.x-y.x,h.y-y.y);g<90&&(c.beginPath(),c.moveTo(h.x,h.y),c.lineTo(y.x,y.y),c.strokeStyle=`rgba(${r},${.05*(1-g/90)})`,c.lineWidth=.5,c.stroke())})),m=requestAnimationFrame(b)};return b(),()=>{cancelAnimationFrame(m),window.removeEventListener("resize",p)}},[r]),e.jsx("canvas",{ref:s,style:{position:"absolute",inset:0,width:"100%",height:"100%",pointerEvents:"none",zIndex:0}})}function Kx({onSuccess:r}){const[s,o]=v.useState(""),[c,m]=v.useState(""),[p,u]=v.useState(!1),[b,h]=v.useState(""),[x,y]=v.useState(!1),[g,E]=v.useState(!1);v.useEffect(()=>{setTimeout(()=>E(!0),50)},[]);const D=async P=>{if(P.preventDefault(),h(""),!s||!c){h("Please enter both username and password.");return}y(!0),await new Promise(z=>setTimeout(z,700)),y(!1),s==="login"&&c==="1010"?r():h("Invalid username or password. Please try again.")};return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
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
  `}),e.jsxs("div",{className:"nba-login-page",children:[e.jsx(Pm,{r:"0,212,255"}),e.jsx("div",{className:"nba-login-dots"}),e.jsx("div",{className:"nba-login-blob",style:{width:500,height:500,background:"radial-gradient(circle,rgba(45,125,210,0.22) 0%,transparent 70%)",top:-160,right:-80,animation:"nbaFloat 9s ease-in-out infinite"}}),e.jsx("div",{className:"nba-login-blob",style:{width:340,height:340,background:"radial-gradient(circle,rgba(0,212,255,0.07) 0%,transparent 70%)",bottom:-100,left:-60,animation:"nbaFloat 11s ease-in-out infinite reverse"}}),e.jsxs("div",{className:`nba-split-card${g?" show":""}`,children:[e.jsxs("div",{className:"nba-left-panel",children:[e.jsx("img",{className:"nba-panel-logo",src:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/NBA-removebg-preview.png",alt:"NBA",onError:P=>{P.target.parentElement.innerHTML='<span style="font-size:5rem">🏅</span>'}}),e.jsx("div",{className:"nba-panel-divider"}),e.jsxs("div",{className:"nba-panel-title",children:["National Board of",e.jsx("span",{children:"Accreditation"})]}),e.jsxs("div",{className:"nba-panel-badges",children:[e.jsx("span",{className:"nba-panel-badge",children:"NBA"}),e.jsx("span",{className:"nba-panel-badge",children:"AICTE Linked"}),e.jsx("span",{className:"nba-panel-badge",children:"OBE Framework"})]})]}),e.jsxs("div",{className:"nba-right-panel",children:[e.jsx("p",{className:"nba-right-label",children:"Secure Access"}),e.jsxs("h1",{className:"nba-right-heading",children:["NBA ",e.jsx("span",{children:"Portal"})]}),e.jsx("p",{className:"nba-right-sub",children:"Creative Techno College — Accreditation Dashboard"}),b&&e.jsxs("div",{className:"nba-error",children:[e.jsx("i",{className:"fa-solid fa-triangle-exclamation",style:{marginTop:2,flexShrink:0}}),e.jsx("span",{children:b})]}),e.jsxs("form",{onSubmit:D,noValidate:!0,children:[e.jsxs("label",{className:"nba-field-label",children:[e.jsx("i",{className:"fa-solid fa-user"}),"Username"]}),e.jsxs("div",{className:"nba-input-wrap",children:[e.jsx("span",{className:"nba-input-icon",children:e.jsx("i",{className:"fa-solid fa-id-card"})}),e.jsx("input",{type:"text",value:s,onChange:P=>o(P.target.value),placeholder:"Enter username",autoComplete:"username",required:!0})]}),e.jsxs("label",{className:"nba-field-label",children:[e.jsx("i",{className:"fa-solid fa-lock"}),"Password"]}),e.jsxs("div",{className:"nba-input-wrap",children:[e.jsx("span",{className:"nba-input-icon",children:e.jsx("i",{className:"fa-solid fa-key"})}),e.jsx("input",{type:p?"text":"password",value:c,onChange:P=>m(P.target.value),placeholder:"Enter password",autoComplete:"current-password",required:!0}),e.jsx("button",{type:"button",className:"nba-eye-btn",onClick:()=>u(P=>!P),children:e.jsx("i",{className:`fa-solid ${p?"fa-eye-slash":"fa-eye"}`})})]}),e.jsx("button",{type:"submit",className:"nba-submit-btn",disabled:x,children:x?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"nba-spinner"}),"Authenticating…"]}):e.jsxs(e.Fragment,{children:[e.jsx("i",{className:"fa-solid fa-right-to-bracket"}),"Access Dashboard"]})})]}),e.jsxs("div",{className:"nba-secure-note",children:[e.jsx("i",{className:"fa-solid fa-shield-check"}),"Protected portal — authorised personnel only"]})]})]})]})]})}const qx=[{num:"1",title:"Vision, Mission & Programme Educational Objectives",icon:"fa-bullseye",color:"#f59e0b",glow:"245,158,11",grad:"linear-gradient(135deg,#78350f,#f59e0b)",docs:8},{num:"2",title:"Programme Curriculum & Teaching-Learning Processes",icon:"fa-book-open",color:"#3b82f6",glow:"59,130,246",grad:"linear-gradient(135deg,#1e3a8a,#3b82f6)",docs:14},{num:"3",title:"Course Outcomes & Programme Outcomes",icon:"fa-chart-line",color:"#10b981",glow:"16,185,129",grad:"linear-gradient(135deg,#064e3b,#10b981)",docs:12},{num:"4",title:"Students' Performance",icon:"fa-user-graduate",color:"#8b5cf6",glow:"139,92,246",grad:"linear-gradient(135deg,#2e1065,#8b5cf6)",docs:10},{num:"5",title:"Faculty Information & Contributions",icon:"fa-chalkboard-user",color:"#06b6d4",glow:"6,182,212",grad:"linear-gradient(135deg,#164e63,#06b6d4)",docs:16},{num:"6",title:"Facilities & Technical Support",icon:"fa-building",color:"#ef4444",glow:"239,68,68",grad:"linear-gradient(135deg,#7f1d1d,#ef4444)",docs:9},{num:"7",title:"Continuous Improvement",icon:"fa-arrows-rotate",color:"#ec4899",glow:"236,72,153",grad:"linear-gradient(135deg,#831843,#ec4899)",docs:7}],Zp=[{abbr:"PEO",full:"Programme Educational Objectives",icon:"fa-bullseye",desc:"Broad statements describing career and professional accomplishments graduates are expected to achieve within a few years after graduation.",color:"#3b82f6"},{abbr:"PO",full:"Programme Outcomes",icon:"fa-graduation-cap",desc:"Attributes and skills that students should possess at the time of graduation — knowledge, skills and attitudes.",color:"#00d4ff"},{abbr:"PSO",full:"Programme Specific Outcomes",icon:"fa-star",desc:"Domain-specific competencies expected of graduates of a particular programme, beyond the standard POs.",color:"#2d7dd2"},{abbr:"CO",full:"Course Outcomes",icon:"fa-book",desc:"Specific competencies students will demonstrate upon successful completion of each individual course.",color:"#1a4a8a"}];function Qx({prog:r}){const[s,o]=v.useState(!1);return e.jsxs("div",{onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1),style:{background:"#fff",borderRadius:18,padding:"20px 22px",border:"1px solid rgba(10,22,40,0.07)",boxShadow:s?"0 12px 36px rgba(10,22,40,0.13)":"0 2px 12px rgba(10,22,40,0.06)",transform:s?"translateY(-5px)":"none",transition:"all 0.28s ease",cursor:"default"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:12},children:[e.jsx("div",{style:{fontFamily:"'Outfit',sans-serif",fontWeight:800,fontSize:"0.95rem",color:"#0a1628"},children:r.name}),e.jsx("div",{style:{background:`${r.color}18`,border:`1.5px solid ${r.color}40`,color:r.color,fontFamily:"'Outfit',sans-serif",fontSize:"0.65rem",fontWeight:800,padding:"3px 10px",borderRadius:20,letterSpacing:.5},children:r.badge})]}),e.jsx("div",{style:{fontFamily:"'Outfit',sans-serif",fontSize:"0.75rem",color:"#4a6080",marginBottom:14,fontWeight:500},children:r.dept}),r.metrics.map((c,m)=>e.jsxs("div",{style:{marginBottom:m<r.metrics.length-1?10:0},children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:4},children:[e.jsx("span",{style:{fontFamily:"'Outfit',sans-serif",fontSize:"0.7rem",fontWeight:700,color:"#4a6080"},children:c.label}),e.jsx("span",{style:{fontFamily:"'Outfit',sans-serif",fontSize:"0.7rem",fontWeight:800,color:r.color},children:c.val})]}),e.jsx("div",{style:{height:5,background:`${r.color}18`,borderRadius:3,overflow:"hidden"},children:e.jsx("div",{style:{height:"100%",background:r.color,borderRadius:3,width:s?`${c.pct}%`:"0%",transition:`width ${.8+m*.15}s cubic-bezier(0.4,0,0.2,1)`}})})]},m))]})}function Xx({onLogout:r}){Vx();const s=`
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
  `,o=[{val:"7",lbl:"Criteria",icon:"fa-layer-group",col:"linear-gradient(135deg,#1e3a8a,#3b82f6)"},{val:"4",lbl:"Programs",icon:"fa-graduation-cap",col:"linear-gradient(135deg,#164e63,#06b6d4)"},{val:"OBE",lbl:"Framework",icon:"fa-arrows-spin",col:"linear-gradient(135deg,#064e3b,#10b981)"},{val:"NBA",lbl:"Accreditation",icon:"fa-medal",col:"linear-gradient(135deg,#2e1065,#8b5cf6)"},{val:"A+",lbl:"Target",icon:"fa-star",col:"linear-gradient(135deg,#0c1f3d,#2d7dd2)"}],c=[{name:"B.Tech CSE",dept:"Computer Science & Engineering",badge:"Accredited",color:"#3b82f6",metrics:[{label:"PO Attainment",val:"78%",pct:78},{label:"CO Attainment",val:"83%",pct:83},{label:"Pass Rate",val:"91%",pct:91}]},{name:"B.Tech ECE",dept:"Electronics & Communication Engg.",badge:"Accredited",color:"#10b981",metrics:[{label:"PO Attainment",val:"74%",pct:74},{label:"CO Attainment",val:"79%",pct:79},{label:"Pass Rate",val:"88%",pct:88}]},{name:"B.Tech MECH",dept:"Mechanical Engineering",badge:"Applied",color:"#06b6d4",metrics:[{label:"PO Attainment",val:"71%",pct:71},{label:"CO Attainment",val:"76%",pct:76},{label:"Pass Rate",val:"85%",pct:85}]},{name:"B.Tech CIVIL",dept:"Civil Engineering",badge:"Applied",color:"#8b5cf6",metrics:[{label:"PO Attainment",val:"69%",pct:69},{label:"CO Attainment",val:"74%",pct:74},{label:"Pass Rate",val:"87%",pct:87}]}];return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:s}),e.jsxs("div",{className:"nb-page",children:[e.jsxs("div",{className:"nb-hero",children:[e.jsx("div",{className:"nb-hero-grid"}),e.jsx("div",{className:"nb-hero-scan"}),e.jsx("div",{className:"nb-hero-glow1"}),e.jsx("div",{className:"nb-hero-glow2"}),e.jsx(Pm,{r:"0,212,255"}),e.jsxs("button",{className:"nb-logout",onClick:r,children:[e.jsx("i",{className:"fa-solid fa-right-from-bracket"}),"Logout"]}),e.jsxs("div",{className:"nb-hero-content",children:[e.jsxs("div",{className:"nb-hero-badge",children:[e.jsx("i",{className:"fa-solid fa-medal"}),"NBA Accreditation Portal"]}),e.jsxs("h1",{className:"nb-hero-h1",children:["National Board",e.jsx("br",{}),"of ",e.jsx("em",{children:"Accreditation"})]}),e.jsx("p",{className:"nb-hero-p",children:"Creative Techno College, Angul — Outcome-Based Education framework documentation, programme accreditation data and evidence for all 7 NBA criteria."}),e.jsx("div",{className:"nb-hero-tags",children:["AICTE Linked","OBE Framework","4 Programs","Utkal University","BPUT Affiliated"].map((m,p)=>e.jsxs("span",{className:"nb-hero-tag",children:[e.jsx("i",{className:"fa-solid fa-circle-check",style:{color:"#00d4ff",fontSize:"0.65rem"}}),m]},p))})]})]}),e.jsx("div",{className:"nb-wave",children:e.jsx("svg",{viewBox:"0 0 1440 60",preserveAspectRatio:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M0,40 C360,60 1080,0 1440,40 L1440,60 L0,60 Z",fill:"#f0f4f8"})})}),e.jsx("div",{className:"nb-stats-band",children:o.map((m,p)=>e.jsxs("div",{className:"nb-stat rv",style:{transitionDelay:`${p*.07}s`},children:[e.jsx("div",{className:"nb-stat-ico",style:{background:m.col},children:e.jsx("i",{className:`fa-solid ${m.icon}`})}),e.jsx("div",{className:"nb-stat-val",children:m.val}),e.jsx("div",{className:"nb-stat-lbl",children:m.lbl})]},p))}),e.jsxs("section",{className:"nb-obe-sec",children:[e.jsxs("div",{style:{maxWidth:1100,margin:"0 auto",textAlign:"center"},children:[e.jsx("span",{className:"section-label",style:{color:"rgba(0,212,255,0.7)"},children:"Framework"}),e.jsxs("h2",{className:"section-title",style:{color:"#fff"},children:["Outcome-Based ",e.jsx("span",{style:{color:"#00d4ff"},children:"Education"})]}),e.jsx("p",{className:"section-subtitle",style:{color:"rgba(255,255,255,0.4)",margin:"0 auto"},children:"The OBE chain ensures every course, programme and institutional goal is mapped to measurable outcomes."})]}),e.jsx("div",{className:"nb-obe-chain",children:Zp.map((m,p)=>e.jsxs("div",{className:"nb-obe-node rv",style:{transitionDelay:`${p*.1}s`},children:[p<Zp.length-1&&e.jsx("div",{className:"nb-obe-arrow",children:e.jsx("i",{className:"fa-solid fa-arrow-right"})}),e.jsxs("div",{className:"nb-obe-dot",style:{background:`linear-gradient(135deg,${m.color}cc,${m.color})`,boxShadow:`0 8px 32px ${m.color}50`},children:[e.jsx("div",{className:"nb-obe-abbr",children:m.abbr}),e.jsx("i",{className:`fa-solid ${m.icon} nb-obe-dot-icon`})]}),e.jsx("div",{className:"nb-obe-full",children:m.full}),e.jsx("div",{className:"nb-obe-desc",children:m.desc})]},p))})]}),e.jsxs("section",{className:"nb-crit-sec",children:[e.jsxs("div",{style:{maxWidth:1240,margin:"0 auto",textAlign:"center"},children:[e.jsx("span",{className:"section-label",children:"Documentation"}),e.jsxs("h2",{className:"section-title",children:["Select a ",e.jsx("span",{children:"Criterion"})]}),e.jsx("p",{className:"section-subtitle",style:{margin:"0 auto"},children:"Access complete documentation and evidence for each of the 7 NBA criteria."})]}),e.jsx("div",{className:"nb-crit-grid",children:qx.map((m,p)=>e.jsxs("a",{href:`#crit-${p+1}`,className:"nb-crit-card rv",style:{transitionDelay:`${p*.07}s`,textDecoration:"none"},children:[e.jsxs("div",{className:"nb-crit-top",style:{background:m.grad},children:[e.jsx("div",{className:"nb-crit-wm",children:m.num.padStart(2,"0")}),e.jsx("div",{style:{width:50,height:50,borderRadius:14,background:"rgba(255,255,255,0.16)",backdropFilter:"blur(8px)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.2rem",color:"#fff",marginBottom:14,position:"relative",zIndex:1},children:e.jsx("i",{className:`fa-solid ${m.icon}`})}),e.jsxs("div",{className:"nb-crit-title",children:["Criterion ",m.num,": ",m.title]})]}),e.jsxs("div",{className:"nb-crit-footer",children:[e.jsxs("div",{className:"nb-crit-docs",children:[e.jsx("i",{className:"fa-solid fa-file-lines",style:{color:m.color}}),m.docs," documents"]}),e.jsx("div",{className:"nb-crit-arrow",style:{background:m.grad,boxShadow:`0 4px 12px rgba(${m.glow},0.35)`},children:e.jsx("i",{className:"fa-solid fa-arrow-right"})})]})]},p))})]}),e.jsxs("section",{className:"nb-prog-sec",children:[e.jsxs("div",{style:{maxWidth:1200,margin:"0 auto",textAlign:"center"},children:[e.jsx("span",{className:"section-label",children:"OBE Attainment"}),e.jsxs("h2",{className:"section-title",children:["Programme ",e.jsx("span",{children:"Performance"})]}),e.jsx("p",{className:"section-subtitle",style:{margin:"0 auto"},children:"PO, CO and overall pass rate attainment across all accredited programmes."})]}),e.jsx("div",{className:"nb-prog-grid",children:c.map((m,p)=>e.jsx("div",{className:"rv",style:{transitionDelay:`${p*.08}s`},children:e.jsx(Qx,{prog:m})},p))})]}),e.jsx("div",{className:"nb-banner",children:e.jsxs("div",{style:{maxWidth:700,margin:"0 auto"},children:[e.jsx("div",{style:{fontFamily:"'Outfit',sans-serif",fontSize:"0.7rem",fontWeight:800,color:"rgba(0,212,255,0.7)",letterSpacing:3,textTransform:"uppercase",marginBottom:12},children:"Our Goal"}),e.jsxs("h2",{style:{fontFamily:"'Outfit',sans-serif",fontWeight:900,fontSize:"clamp(2rem,4vw,3rem)",color:"#fff",letterSpacing:-1.5,marginBottom:14,lineHeight:1.1},children:["Achieving ",e.jsx("span",{style:{color:"#00d4ff"},children:"NBA Accreditation"}),e.jsx("br",{}),"Across All 4 Programs"]}),e.jsx("p",{style:{color:"rgba(255,255,255,0.4)",fontSize:"0.9rem",lineHeight:1.75},children:"Delivering outcome-based engineering education with measurable PO/CO attainment, continuous quality improvement and industry-aligned curriculum."})]})})]})]})}function Zx(){const[r,s]=v.useState(!1);return r?e.jsx(Xx,{onLogout:()=>s(!1)}):e.jsx(Kx,{onSuccess:()=>s(!0)})}function eb(){v.useEffect(()=>{const r=document.querySelectorAll(".reveal, .reveal-left, .reveal-right"),s=new IntersectionObserver(o=>o.forEach(c=>{c.isIntersecting&&c.target.classList.add("visible")}),{threshold:.1});return r.forEach(o=>s.observe(o)),()=>s.disconnect()},[])}const tb=[{title:"Digital Literacy Drive",icon:"fa-laptop",color:"#2d7dd2",desc:"Empowering rural youth with digital skills, computer literacy, and internet access to bridge the digital divide.",impact:"500+ Students Trained"},{title:"Skill India Alignment",icon:"fa-tools",color:"#16a34a",desc:"Aligning curriculum with Skill India mission to produce industry-ready graduates with practical competencies.",impact:"4 Programs Aligned"},{title:"Entrepreneurship Development",icon:"fa-lightbulb",color:"#f59e0b",desc:"Fostering startup culture through incubation support, mentorship, and entrepreneurship development programs.",impact:"10+ Startups Supported"},{title:"Green Campus Initiative",icon:"fa-leaf",color:"#16a34a",desc:"Promoting sustainable practices, solar energy adoption, and eco-friendly campus operations.",impact:"Carbon Neutral Goal 2030"},{title:"Women Empowerment",icon:"fa-venus",color:"#7c3aed",desc:"Special scholarships, mentorship programs, and leadership opportunities for women students.",impact:"60%+ Women Enrollment"},{title:"Community Outreach",icon:"fa-hands-helping",color:"#dc2626",desc:"Regular community service activities, health camps, and awareness programs in surrounding villages.",impact:"20+ Villages Reached"}],ab=[{icon:"fa-graduation-cap",title:"Quality Education",desc:"Ensuring accessible, affordable, and high-quality education for all"},{icon:"fa-industry",title:"Industry Connect",desc:"Bridging academia and industry for better employment outcomes"},{icon:"fa-globe",title:"Digital India",desc:"Contributing to India's digital transformation through tech education"},{icon:"fa-seedling",title:"Sustainable Growth",desc:"Promoting sustainable development in education and campus operations"}];function nb(){return eb(),e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"page-hero",children:[e.jsx("div",{className:"page-hero-dots"}),e.jsx("span",{className:"section-label",children:"National Initiative"}),e.jsxs("h1",{children:["Vikshit ",e.jsx("span",{children:"Bharat"})]}),e.jsx("p",{children:"Creative Techno College's contribution to building a Developed India by 2047"})]}),e.jsx("section",{style:{padding:"60px 5%",background:"#fff"},children:e.jsx("div",{style:{maxWidth:"1100px",margin:"0 auto"},children:e.jsxs("div",{className:"reveal tech-card",style:{padding:"36px 40px"},children:[e.jsx("span",{className:"section-label",children:"Vision"}),e.jsxs("h2",{className:"section-title",children:["Vikshit Bharat ",e.jsx("span",{children:"@2047"})]}),e.jsx("p",{style:{color:"var(--text-muted)",lineHeight:1.9,fontSize:"1rem"},children:"Vikshit Bharat (Developed India) is Prime Minister Narendra Modi's vision to transform India into a fully developed nation by 2047, the centenary of India's independence. Creative Techno College is proud to contribute to this national mission through quality education, skill development, and community empowerment."}),e.jsx("p",{style:{color:"var(--text-muted)",lineHeight:1.9,fontSize:"1rem",marginTop:"14px"},children:"Our institution actively participates in government initiatives like Skill India, Digital India, Startup India, and Swachh Bharat, aligning our academic programs and campus activities with the national development agenda."})]})})}),e.jsx("section",{className:"tech-grid-bg",style:{padding:"60px 5%"},children:e.jsxs("div",{style:{maxWidth:"1100px",margin:"0 auto"},children:[e.jsxs("div",{style:{textAlign:"center",marginBottom:"40px"},children:[e.jsx("span",{className:"section-label",children:"Foundation"}),e.jsxs("h2",{className:"section-title",children:["Our ",e.jsx("span",{children:"Pillars"})]})]}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(240px, 1fr))",gap:"24px"},children:ab.map((r,s)=>e.jsxs("div",{className:"reveal tech-card",style:{padding:"28px",textAlign:"center",transitionDelay:`${s*.1}s`},children:[e.jsx("div",{style:{width:"60px",height:"60px",borderRadius:"50%",background:"linear-gradient(135deg, var(--blue-light), var(--cyan))",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 16px"},children:e.jsx("i",{className:`fa-solid ${r.icon}`,style:{color:"#fff",fontSize:"1.3rem"}})}),e.jsx("h3",{style:{fontFamily:"var(--font-head)",fontWeight:800,color:"var(--navy)",marginBottom:"8px",fontSize:"1rem"},children:r.title}),e.jsx("p",{style:{color:"var(--text-muted)",fontSize:"0.85rem",lineHeight:1.7},children:r.desc})]},s))})]})}),e.jsx("section",{style:{padding:"60px 5%",background:"#fff"},children:e.jsxs("div",{style:{maxWidth:"1100px",margin:"0 auto"},children:[e.jsxs("div",{style:{textAlign:"center",marginBottom:"40px"},children:[e.jsx("span",{className:"section-label",children:"Action"}),e.jsxs("h2",{className:"section-title",children:["Our ",e.jsx("span",{children:"Initiatives"})]})]}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(320px, 1fr))",gap:"24px"},children:tb.map((r,s)=>e.jsxs("div",{className:"reveal tech-card",style:{padding:"28px",transitionDelay:`${s*.08}s`},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"14px",marginBottom:"14px"},children:[e.jsx("div",{style:{width:"48px",height:"48px",borderRadius:"12px",background:`${r.color}22`,border:`2px solid ${r.color}44`,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:e.jsx("i",{className:`fa-solid ${r.icon}`,style:{color:r.color,fontSize:"1.1rem"}})}),e.jsx("h3",{style:{fontFamily:"var(--font-head)",fontWeight:800,color:"var(--navy)",fontSize:"0.95rem"},children:r.title})]}),e.jsx("p",{style:{color:"var(--text-muted)",fontSize:"0.88rem",lineHeight:1.7,marginBottom:"12px"},children:r.desc}),e.jsx("span",{className:"status-badge completed",children:r.impact})]},s))})]})}),e.jsx("section",{className:"tech-grid-bg",style:{padding:"60px 5%"},children:e.jsxs("div",{style:{maxWidth:"1100px",margin:"0 auto"},children:[e.jsxs("div",{style:{textAlign:"center",marginBottom:"40px"},children:[e.jsx("span",{className:"section-label",children:"Impact"}),e.jsxs("h2",{className:"section-title",children:["Our ",e.jsx("span",{children:"Contribution"})]})]}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(200px, 1fr))",gap:"20px"},children:[{num:"1500+",label:"Students Empowered",icon:"fa-users"},{num:"100+",label:"Companies Partnered",icon:"fa-handshake"},{num:"20+",label:"Villages Reached",icon:"fa-map-marker-alt"},{num:"10+",label:"Startups Incubated",icon:"fa-rocket"},{num:"15+",label:"Years of Excellence",icon:"fa-award"}].map((r,s)=>e.jsxs("div",{className:"reveal tech-card gold-accent",style:{padding:"28px",textAlign:"center",transitionDelay:`${s*.08}s`},children:[e.jsx("i",{className:`fa-solid ${r.icon}`,style:{fontSize:"1.6rem",color:"var(--gold)",marginBottom:"12px",display:"block"}}),e.jsx("div",{style:{fontSize:"1.8rem",fontWeight:900,fontFamily:"var(--font-head)",color:"var(--navy)",lineHeight:1},children:r.num}),e.jsx("div",{style:{color:"var(--text-muted)",fontSize:"0.8rem",marginTop:"6px",fontWeight:600},children:r.label})]},s))})]})})]})}const Wo=[{id:"student",label:"Student",sub:"Access results & records",icon:"fa-graduation-cap",color:"#3b82f6",glow:"rgba(59,130,246,0.6)",grad:"linear-gradient(135deg,#1e3a8a,#3b82f6)",lightGrad:"linear-gradient(135deg,#dbeafe,#eff6ff)",emoji:"🎓",idLabel:"Student ID",passLabel:"Date of Birth",idPlaceholder:"Enter Student ID",passPH:"••••••••"},{id:"staff",label:"Staff",sub:"Faculty portal & tools",icon:"fa-user-tie",color:"#10b981",glow:"rgba(16,185,129,0.6)",grad:"linear-gradient(135deg,#064e3b,#10b981)",lightGrad:"linear-gradient(135deg,#d1fae5,#ecfdf5)",emoji:"👨‍💼",idLabel:"Staff Username",passLabel:"Password",idPlaceholder:"Enter Staff Username",passPH:"••••••••"},{id:"admin",label:"Admin",sub:"System administration",icon:"fa-shield-halved",color:"#8b5cf6",glow:"rgba(139,92,246,0.6)",grad:"linear-gradient(135deg,#2e1065,#8b5cf6)",lightGrad:"linear-gradient(135deg,#ede9fe,#f5f3ff)",emoji:"🛡️",idLabel:"Admin Username",passLabel:"Password",idPlaceholder:"Enter Admin Username",passPH:"••••••••"},{id:"principal",label:"Principal",sub:"Institutional dashboard",icon:"fa-crown",color:"#f59e0b",glow:"rgba(245,158,11,0.6)",grad:"linear-gradient(135deg,#78350f,#f59e0b)",lightGrad:"linear-gradient(135deg,#fef3c7,#fffbeb)",emoji:"👑",idLabel:"Principal Username",passLabel:"Password",idPlaceholder:"Enter Principal Username",passPH:"••••••••"},{id:"admission",label:"Admission",sub:"Enrollment & applications",icon:"fa-file-circle-check",color:"#ec4899",glow:"rgba(236,72,153,0.6)",grad:"linear-gradient(135deg,#831843,#ec4899)",lightGrad:"linear-gradient(135deg,#fce7f3,#fdf2f8)",emoji:"📋",idLabel:"Admission Username",passLabel:"Password",idPlaceholder:"Enter Admission Username",passPH:"••••••••"}];function rb({color:r}){return e.jsxs("div",{style:{position:"absolute",inset:0,overflow:"hidden",zIndex:0,pointerEvents:"none"},children:[e.jsx("div",{style:{position:"absolute",inset:0,background:"linear-gradient(160deg,#020817 0%,#0a0f1e 50%,#050b18 100%)"}}),e.jsx("div",{style:{position:"absolute",width:"70vw",height:"70vw",maxWidth:700,maxHeight:700,borderRadius:"50%",top:"-20%",left:"-10%",background:`radial-gradient(circle, ${r}22 0%, transparent 65%)`,filter:"blur(40px)",transition:"background 0.6s ease",animation:"auroraMove1 12s ease-in-out infinite"}}),e.jsx("div",{style:{position:"absolute",width:"60vw",height:"60vw",maxWidth:600,maxHeight:600,borderRadius:"50%",bottom:"-15%",right:"-10%",background:`radial-gradient(circle, ${r}18 0%, transparent 65%)`,filter:"blur(50px)",transition:"background 0.6s ease",animation:"auroraMove2 15s ease-in-out infinite"}}),e.jsx("div",{style:{position:"absolute",width:"40vw",height:"40vw",maxWidth:400,maxHeight:400,borderRadius:"50%",top:"30%",right:"20%",background:"radial-gradient(circle, rgba(0,212,255,0.08) 0%, transparent 65%)",filter:"blur(35px)",animation:"auroraMove3 18s ease-in-out infinite"}}),e.jsx("div",{style:{position:"absolute",inset:0,backgroundImage:"linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",backgroundSize:"40px 40px"}}),e.jsx("div",{style:{position:"absolute",inset:0,background:"radial-gradient(ellipse at center, transparent 40%, rgba(2,8,23,0.8) 100%)"}})]})}function ib({role:r,isActive:s,onClick:o}){const[c,m]=v.useState(!1);return e.jsxs("button",{onClick:o,onMouseEnter:()=>m(!0),onMouseLeave:()=>m(!1),style:{flex:"1 1 0",minWidth:0,background:s?r.grad:c?"rgba(255,255,255,0.07)":"rgba(255,255,255,0.03)",border:s?`2px solid ${r.color}`:`2px solid ${c?"rgba(255,255,255,0.15)":"rgba(255,255,255,0.06)"}`,borderRadius:16,padding:"14px 8px 12px",cursor:"pointer",transition:"all 0.3s cubic-bezier(0.4,0,0.2,1)",display:"flex",flexDirection:"column",alignItems:"center",gap:6,transform:s?"translateY(-4px) scale(1.03)":c?"translateY(-2px)":"none",boxShadow:s?`0 12px 32px ${r.glow}`:c?"0 4px 16px rgba(0,0,0,0.3)":"none",position:"relative",overflow:"hidden"},children:[s&&e.jsx("div",{style:{position:"absolute",inset:0,borderRadius:14,background:"linear-gradient(135deg, rgba(255,255,255,0.12) 0%, transparent 60%)",pointerEvents:"none"}}),e.jsx("span",{style:{fontSize:"1.6rem",lineHeight:1},children:r.emoji}),e.jsx("span",{style:{fontFamily:"'Poppins',sans-serif",fontSize:"0.68rem",fontWeight:700,color:s?"#fff":"rgba(255,255,255,0.5)",textTransform:"uppercase",letterSpacing:"0.5px",transition:"color 0.3s"},children:r.label}),s&&e.jsx("div",{style:{position:"absolute",bottom:6,left:"50%",transform:"translateX(-50%)",width:20,height:3,borderRadius:2,background:"#fff"}})]})}function rn(){const r=Ft(),s=nr(),o=r.pathname.split("/").pop(),c=Wo.find(oe=>oe.id===o)||Wo[0],[m,p]=v.useState(c),[u,b]=v.useState(""),[h,x]=v.useState(""),[y,g]=v.useState(!1),[E,D]=v.useState(""),[F,P]=v.useState(!1),[z,N]=v.useState(!1),[R,L]=v.useState(!1),q=v.useRef(null);v.useEffect(()=>{setTimeout(()=>L(!0),80)},[]);const he=oe=>{p(oe),D(""),b(""),x(""),s(`/login/${oe.id}`,{replace:!0})},Ne=async oe=>{if(oe.preventDefault(),!u.trim()||!h.trim()){D("Both fields are required.");return}D(""),P(!0);try{const $e=new FormData;$e.append("id",u),$e.append("pass",h),$e.append("login_type",m.id);const pt=await(await fetch("https://creativecollege.in/CTC%20NEW%20REACT%20WEBSITE/api_login.php",{method:"POST",body:$e,credentials:"include"})).json();pt.status==="success"?(P(!1),N(!0),setTimeout(()=>{const Me=document.createElement("a");Me.href=pt.redirect,Me.target="_blank",Me.rel="noopener noreferrer",document.body.appendChild(Me),Me.click(),document.body.removeChild(Me),b(""),x(""),g(!1),D(""),N(!1),P(!1)},1500)):(P(!1),D(pt.message||"Invalid credentials. Please try again."))}catch{P(!1),D("Network error. Please try again later.")}};return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
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
  `}),e.jsxs("div",{className:"portal-page",children:[e.jsx(rb,{color:m.color}),e.jsxs("div",{className:`portal-main${R?" visible":""}`,children:[e.jsxs("div",{className:"portal-logo-area",children:[e.jsxs("div",{className:"portal-logo-ring",style:{borderColor:`${m.color}40`,boxShadow:`0 0 32px ${m.glow}`},children:[e.jsx("div",{className:"portal-logo-ring-glow",style:{borderColor:m.color}}),e.jsx("img",{src:"https://creativecollege.in/Admission_Dashboard/images/CTC%20logo.png",alt:"CTC"})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"portal-wordmark",children:["Creative Techno ",e.jsx("span",{children:"College"})]}),e.jsx("div",{className:"portal-tagline",children:"Unified Portal · Angul, Odisha"})]})]}),e.jsxs("div",{className:"portal-card",children:[z&&e.jsxs("div",{className:"portal-success-overlay",children:[e.jsx("div",{className:"portal-success-icon",children:e.jsx("i",{className:"fa-solid fa-check"})}),e.jsx("span",{style:{fontFamily:"'Plus Jakarta Sans',sans-serif",fontWeight:700,color:"#fff",fontSize:"1rem"},children:"Login Successful!"}),e.jsx("span",{style:{fontSize:"0.78rem",color:"rgba(255,255,255,0.4)"},children:"Redirecting you…"})]}),e.jsx("div",{className:"portal-role-grid",children:Wo.map(oe=>e.jsx(ib,{role:oe,isActive:m.id===oe.id,onClick:()=>he(oe)},oe.id))}),e.jsxs("div",{className:"portal-divider",children:[e.jsx("div",{className:"portal-divider-line"}),e.jsxs("span",{className:"portal-divider-text",children:["Sign in as ",m.label]}),e.jsx("div",{className:"portal-divider-line"})]}),e.jsxs("h2",{className:"portal-heading",style:{color:m.color},children:[m.emoji," ",m.label," Login"]}),e.jsx("p",{className:"portal-subhead",children:m.sub}),E&&e.jsxs("div",{className:"portal-error",children:[e.jsx("i",{className:"fa-solid fa-circle-exclamation"}),E]}),e.jsxs("form",{ref:q,onSubmit:Ne,noValidate:!0,children:[e.jsxs("div",{className:"portal-field",children:[e.jsxs("label",{className:"portal-field-label",children:[e.jsx("i",{className:"fa-solid fa-id-badge",style:{color:m.color}}),m.idLabel]}),e.jsxs("div",{className:"portal-input-wrap",style:{"--ac":m.color},children:[e.jsx("span",{className:"portal-input-icon",children:e.jsx("i",{className:"fa-solid fa-user"})}),e.jsx("input",{type:"text",value:u,onChange:oe=>b(oe.target.value),placeholder:m.idPlaceholder,autoComplete:"username"}),e.jsx("div",{className:"portal-input-focus-bar",style:{background:m.color}})]})]}),e.jsxs("div",{className:"portal-field",children:[e.jsxs("label",{className:"portal-field-label",children:[e.jsx("i",{className:"fa-solid fa-lock",style:{color:m.color}}),m.passLabel]}),e.jsxs("div",{className:"portal-input-wrap",children:[e.jsx("span",{className:"portal-input-icon",children:e.jsx("i",{className:"fa-solid fa-key"})}),e.jsx("input",{type:y?"text":"password",value:h,onChange:oe=>x(oe.target.value),placeholder:m.passPH,autoComplete:"current-password"}),e.jsx("button",{type:"button",className:"portal-eye-btn",onClick:()=>g(oe=>!oe),children:e.jsx("i",{className:`fa-solid ${y?"fa-eye-slash":"fa-eye"}`})}),e.jsx("div",{className:"portal-input-focus-bar",style:{background:m.color}})]})]}),e.jsxs("button",{type:"submit",className:"portal-submit",disabled:F,style:{background:m.grad,boxShadow:`0 8px 32px ${m.glow}`},children:[!F&&e.jsx("div",{className:"portal-submit-shimmer"}),F?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"portal-spinner"})," Authenticating…"]}):e.jsxs(e.Fragment,{children:[e.jsx("i",{className:"fa-solid fa-right-to-bracket"})," Sign In to Portal"]})]})]})]})]})]})]})}const Rt=({title:r})=>e.jsxs("div",{style:{textAlign:"center",padding:"80px 20px"},children:[e.jsx("h1",{style:{color:"#0c2340",fontSize:"2.5rem"},children:r}),e.jsx("p",{style:{color:"#666",marginTop:"20px",fontSize:"1.1rem"},children:"This page is coming soon."})]});function sb(){const r=Ft();return v.useEffect(()=>{if(typeof window<"u"&&typeof window.gtag=="function"){const s=r.pathname+r.search;window.gtag("config","G-53E5PMMFF8",{page_path:s}),window.gtag("config","GT-NSV9FQGQ",{page_path:s})}},[r]),null}function ob(){return e.jsxs(mg,{basename:"/CTC%20NEW%20REACT%20WEBSITE",children:[e.jsx(sb,{}),e.jsx(gg,{}),e.jsx(Og,{children:e.jsxs(ig,{children:[e.jsx(X,{path:"/",element:e.jsx(Jg,{})}),e.jsx(X,{path:"/about/trust",element:e.jsx(Xg,{})}),e.jsx(X,{path:"/about/ctc",element:e.jsx(t0,{})}),e.jsx(X,{path:"/about/team",element:e.jsx(r0,{})}),e.jsx(X,{path:"/admission",element:e.jsx(u0,{})}),e.jsx(X,{path:"/admission/apply",element:e.jsx(h0,{})}),e.jsx(X,{path:"/academics/regular",element:e.jsx(S0,{})}),e.jsx(X,{path:"/academics/value-added",element:e.jsx(k0,{})}),e.jsx(X,{path:"/academics/enhancement",element:e.jsx(R0,{})}),e.jsx(X,{path:"/placement",element:e.jsx(Op,{})}),e.jsx(X,{path:"/placement/programs",element:e.jsx(U0,{})}),e.jsx(X,{path:"/placement/statistics",element:e.jsx(Op,{})}),e.jsx(X,{path:"/placement/brochure",element:e.jsx(_0,{})}),e.jsx(X,{path:"/placement/mission40",element:e.jsx(rx,{})}),e.jsx(X,{path:"/gymkhana",element:e.jsx(ox,{})}),e.jsx(X,{path:"/gymkhana/cultural",element:e.jsx(Dx,{})}),e.jsx(X,{path:"/gymkhana/sports",element:e.jsx(Bx,{})}),e.jsx(X,{path:"/gymkhana/technocrat",element:e.jsx(Rx,{})}),e.jsx(X,{path:"/gymkhana/disha-csr",element:e.jsx(Hx,{})}),e.jsx(X,{path:"/gymkhana/techfest/1",element:e.jsx(qp,{})}),e.jsx(X,{path:"/gymkhana/techfest/2",element:e.jsx(Qp,{})}),e.jsx(X,{path:"/gymkhana/techfest/3",element:e.jsx(Xp,{})}),e.jsx(X,{path:"/gymkhana/techfest-1",element:e.jsx(qp,{})}),e.jsx(X,{path:"/gymkhana/techfest-2",element:e.jsx(Qp,{})}),e.jsx(X,{path:"/gymkhana/techfest-3",element:e.jsx(Xp,{})}),e.jsx(X,{path:"/gallery",element:e.jsx(cx,{})}),e.jsx(X,{path:"/iqac",element:e.jsx(Rt,{title:"IQAC"})}),e.jsx(X,{path:"/iqac/item1",element:e.jsx(Rt,{title:"IQAC — Item 1"})}),e.jsx(X,{path:"/iqac/item2",element:e.jsx(Rt,{title:"IQAC — Item 2"})}),e.jsx(X,{path:"/iqac/item3",element:e.jsx(Rt,{title:"IQAC — Item 3"})}),e.jsx(X,{path:"/iqac/item4",element:e.jsx(Rt,{title:"IQAC — Item 4"})}),e.jsx(X,{path:"/aicte",element:e.jsx(Rt,{title:"AICTE"})}),e.jsx(X,{path:"/aicte/documents",element:e.jsx(Rt,{title:"AICTE — Documents"})}),e.jsx(X,{path:"/aicte/mandatory-disclosure",element:e.jsx(Rt,{title:"AICTE — Mandatory Disclosure"})}),e.jsx(X,{path:"/ckf-skills",element:e.jsx(Rt,{title:"CKF Skills"})}),e.jsx(X,{path:"/contacts",element:e.jsx(fx,{})}),e.jsx(X,{path:"/icc",element:e.jsx(jx,{})}),e.jsx(X,{path:"/grc",element:e.jsx(Cx,{})}),e.jsx(X,{path:"/naac",element:e.jsx(Jx,{})}),e.jsx(X,{path:"/nba",element:e.jsx(Zx,{})}),e.jsx(X,{path:"/vikshit-bharat",element:e.jsx(nb,{})}),e.jsx(X,{path:"/login",element:e.jsx(rn,{})}),e.jsx(X,{path:"/login/student",element:e.jsx(rn,{})}),e.jsx(X,{path:"/login/staff",element:e.jsx(rn,{})}),e.jsx(X,{path:"/login/admin",element:e.jsx(rn,{})}),e.jsx(X,{path:"/login/principal",element:e.jsx(rn,{})}),e.jsx(X,{path:"/login/admission",element:e.jsx(rn,{})}),e.jsx(X,{path:"*",element:e.jsx(Rt,{title:"Page Not Found"})})]})})]})}typeof window<"u"&&(window.history.scrollRestoration="manual");Hf.createRoot(document.getElementById("root")).render(e.jsx(v.StrictMode,{children:e.jsx(om,{children:e.jsx(ob,{})})}));
