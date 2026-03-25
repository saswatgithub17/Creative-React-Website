function jf(i,o){for(var c=0;c<o.length;c++){const d=o[c];if(typeof d!="string"&&!Array.isArray(d)){for(const m in d)if(m!=="default"&&!(m in i)){const f=Object.getOwnPropertyDescriptor(d,m);f&&Object.defineProperty(i,m,f.get?f:{enumerable:!0,get:()=>d[m]})}}}return Object.freeze(Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}))}(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const m of document.querySelectorAll('link[rel="modulepreload"]'))d(m);new MutationObserver(m=>{for(const f of m)if(f.type==="childList")for(const u of f.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&d(u)}).observe(document,{childList:!0,subtree:!0});function c(m){const f={};return m.integrity&&(f.integrity=m.integrity),m.referrerPolicy&&(f.referrerPolicy=m.referrerPolicy),m.crossOrigin==="use-credentials"?f.credentials="include":m.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function d(m){if(m.ep)return;m.ep=!0;const f=c(m);fetch(m.href,f)}})();function wf(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var qs={exports:{}},Wn={},Xs={exports:{}},ae={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hd;function Sf(){if(hd)return ae;hd=1;var i=Symbol.for("react.element"),o=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),d=Symbol.for("react.strict_mode"),m=Symbol.for("react.profiler"),f=Symbol.for("react.provider"),u=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),j=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),b=Symbol.iterator;function P(C){return C===null||typeof C!="object"?null:(C=b&&C[b]||C["@@iterator"],typeof C=="function"?C:null)}var H={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Y=Object.assign,R={};function M(C,I,ee){this.props=C,this.context=I,this.refs=R,this.updater=ee||H}M.prototype.isReactComponent={},M.prototype.setState=function(C,I){if(typeof C!="object"&&typeof C!="function"&&C!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,C,I,"setState")},M.prototype.forceUpdate=function(C){this.updater.enqueueForceUpdate(this,C,"forceUpdate")};function T(){}T.prototype=M.prototype;function A(C,I,ee){this.props=C,this.context=I,this.refs=R,this.updater=ee||H}var L=A.prototype=new T;L.constructor=A,Y(L,M.prototype),L.isPureReactComponent=!0;var Q=Array.isArray,ue=Object.prototype.hasOwnProperty,Ne={current:null},Fe={key:!0,ref:!0,__self:!0,__source:!0};function oe(C,I,ee){var te,re={},ie=null,de=null;if(I!=null)for(te in I.ref!==void 0&&(de=I.ref),I.key!==void 0&&(ie=""+I.key),I)ue.call(I,te)&&!Fe.hasOwnProperty(te)&&(re[te]=I[te]);var le=arguments.length-2;if(le===1)re.children=ee;else if(1<le){for(var he=Array(le),Xe=0;Xe<le;Xe++)he[Xe]=arguments[Xe+2];re.children=he}if(C&&C.defaultProps)for(te in le=C.defaultProps,le)re[te]===void 0&&(re[te]=le[te]);return{$$typeof:i,type:C,key:ie,ref:de,props:re,_owner:Ne.current}}function Ue(C,I){return{$$typeof:i,type:C.type,key:I,ref:C.ref,props:C.props,_owner:C._owner}}function ba(C){return typeof C=="object"&&C!==null&&C.$$typeof===i}function ca(C){var I={"=":"=0",":":"=2"};return"$"+C.replace(/[=:]/g,function(ee){return I[ee]})}var Ie=/\/+/g;function qe(C,I){return typeof C=="object"&&C!==null&&C.key!=null?ca(""+C.key):I.toString(36)}function da(C,I,ee,te,re){var ie=typeof C;(ie==="undefined"||ie==="boolean")&&(C=null);var de=!1;if(C===null)de=!0;else switch(ie){case"string":case"number":de=!0;break;case"object":switch(C.$$typeof){case i:case o:de=!0}}if(de)return de=C,re=re(de),C=te===""?"."+qe(de,0):te,Q(re)?(ee="",C!=null&&(ee=C.replace(Ie,"$&/")+"/"),da(re,I,ee,"",function(Xe){return Xe})):re!=null&&(ba(re)&&(re=Ue(re,ee+(!re.key||de&&de.key===re.key?"":(""+re.key).replace(Ie,"$&/")+"/")+C)),I.push(re)),1;if(de=0,te=te===""?".":te+":",Q(C))for(var le=0;le<C.length;le++){ie=C[le];var he=te+qe(ie,le);de+=da(ie,I,ee,he,re)}else if(he=P(C),typeof he=="function")for(C=he.call(C),le=0;!(ie=C.next()).done;)ie=ie.value,he=te+qe(ie,le++),de+=da(ie,I,ee,he,re);else if(ie==="object")throw I=String(C),Error("Objects are not valid as a React child (found: "+(I==="[object Object]"?"object with keys {"+Object.keys(C).join(", ")+"}":I)+"). If you meant to render a collection of children, use an array instead.");return de}function ya(C,I,ee){if(C==null)return C;var te=[],re=0;return da(C,te,"","",function(ie){return I.call(ee,ie,re++)}),te}function $e(C){if(C._status===-1){var I=C._result;I=I(),I.then(function(ee){(C._status===0||C._status===-1)&&(C._status=1,C._result=ee)},function(ee){(C._status===0||C._status===-1)&&(C._status=2,C._result=ee)}),C._status===-1&&(C._status=0,C._result=I)}if(C._status===1)return C._result.default;throw C._result}var ye={current:null},D={transition:null},q={ReactCurrentDispatcher:ye,ReactCurrentBatchConfig:D,ReactCurrentOwner:Ne};function U(){throw Error("act(...) is not supported in production builds of React.")}return ae.Children={map:ya,forEach:function(C,I,ee){ya(C,function(){I.apply(this,arguments)},ee)},count:function(C){var I=0;return ya(C,function(){I++}),I},toArray:function(C){return ya(C,function(I){return I})||[]},only:function(C){if(!ba(C))throw Error("React.Children.only expected to receive a single React element child.");return C}},ae.Component=M,ae.Fragment=c,ae.Profiler=m,ae.PureComponent=A,ae.StrictMode=d,ae.Suspense=y,ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=q,ae.act=U,ae.cloneElement=function(C,I,ee){if(C==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+C+".");var te=Y({},C.props),re=C.key,ie=C.ref,de=C._owner;if(I!=null){if(I.ref!==void 0&&(ie=I.ref,de=Ne.current),I.key!==void 0&&(re=""+I.key),C.type&&C.type.defaultProps)var le=C.type.defaultProps;for(he in I)ue.call(I,he)&&!Fe.hasOwnProperty(he)&&(te[he]=I[he]===void 0&&le!==void 0?le[he]:I[he])}var he=arguments.length-2;if(he===1)te.children=ee;else if(1<he){le=Array(he);for(var Xe=0;Xe<he;Xe++)le[Xe]=arguments[Xe+2];te.children=le}return{$$typeof:i,type:C.type,key:re,ref:ie,props:te,_owner:de}},ae.createContext=function(C){return C={$$typeof:u,_currentValue:C,_currentValue2:C,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},C.Provider={$$typeof:f,_context:C},C.Consumer=C},ae.createElement=oe,ae.createFactory=function(C){var I=oe.bind(null,C);return I.type=C,I},ae.createRef=function(){return{current:null}},ae.forwardRef=function(C){return{$$typeof:h,render:C}},ae.isValidElement=ba,ae.lazy=function(C){return{$$typeof:x,_payload:{_status:-1,_result:C},_init:$e}},ae.memo=function(C,I){return{$$typeof:j,type:C,compare:I===void 0?null:I}},ae.startTransition=function(C){var I=D.transition;D.transition={};try{C()}finally{D.transition=I}},ae.unstable_act=U,ae.useCallback=function(C,I){return ye.current.useCallback(C,I)},ae.useContext=function(C){return ye.current.useContext(C)},ae.useDebugValue=function(){},ae.useDeferredValue=function(C){return ye.current.useDeferredValue(C)},ae.useEffect=function(C,I){return ye.current.useEffect(C,I)},ae.useId=function(){return ye.current.useId()},ae.useImperativeHandle=function(C,I,ee){return ye.current.useImperativeHandle(C,I,ee)},ae.useInsertionEffect=function(C,I){return ye.current.useInsertionEffect(C,I)},ae.useLayoutEffect=function(C,I){return ye.current.useLayoutEffect(C,I)},ae.useMemo=function(C,I){return ye.current.useMemo(C,I)},ae.useReducer=function(C,I,ee){return ye.current.useReducer(C,I,ee)},ae.useRef=function(C){return ye.current.useRef(C)},ae.useState=function(C){return ye.current.useState(C)},ae.useSyncExternalStore=function(C,I,ee){return ye.current.useSyncExternalStore(C,I,ee)},ae.useTransition=function(){return ye.current.useTransition()},ae.version="18.3.1",ae}var gd;function ho(){return gd||(gd=1,Xs.exports=Sf()),Xs.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xd;function Cf(){if(xd)return Wn;xd=1;var i=ho(),o=Symbol.for("react.element"),c=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,m=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,f={key:!0,ref:!0,__self:!0,__source:!0};function u(h,y,j){var x,b={},P=null,H=null;j!==void 0&&(P=""+j),y.key!==void 0&&(P=""+y.key),y.ref!==void 0&&(H=y.ref);for(x in y)d.call(y,x)&&!f.hasOwnProperty(x)&&(b[x]=y[x]);if(h&&h.defaultProps)for(x in y=h.defaultProps,y)b[x]===void 0&&(b[x]=y[x]);return{$$typeof:o,type:h,key:P,ref:H,props:b,_owner:m.current}}return Wn.Fragment=c,Wn.jsx=u,Wn.jsxs=u,Wn}var bd;function kf(){return bd||(bd=1,qs.exports=Cf()),qs.exports}var e=kf(),v=ho();const Nf=wf(v),Ef=jf({__proto__:null,default:Nf},[v]);var qr={},Zs={exports:{}},Qe={},eo={exports:{}},ao={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yd;function Tf(){return yd||(yd=1,(function(i){function o(D,q){var U=D.length;D.push(q);e:for(;0<U;){var C=U-1>>>1,I=D[C];if(0<m(I,q))D[C]=q,D[U]=I,U=C;else break e}}function c(D){return D.length===0?null:D[0]}function d(D){if(D.length===0)return null;var q=D[0],U=D.pop();if(U!==q){D[0]=U;e:for(var C=0,I=D.length,ee=I>>>1;C<ee;){var te=2*(C+1)-1,re=D[te],ie=te+1,de=D[ie];if(0>m(re,U))ie<I&&0>m(de,re)?(D[C]=de,D[ie]=U,C=ie):(D[C]=re,D[te]=U,C=te);else if(ie<I&&0>m(de,U))D[C]=de,D[ie]=U,C=ie;else break e}}return q}function m(D,q){var U=D.sortIndex-q.sortIndex;return U!==0?U:D.id-q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var f=performance;i.unstable_now=function(){return f.now()}}else{var u=Date,h=u.now();i.unstable_now=function(){return u.now()-h}}var y=[],j=[],x=1,b=null,P=3,H=!1,Y=!1,R=!1,M=typeof setTimeout=="function"?setTimeout:null,T=typeof clearTimeout=="function"?clearTimeout:null,A=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function L(D){for(var q=c(j);q!==null;){if(q.callback===null)d(j);else if(q.startTime<=D)d(j),q.sortIndex=q.expirationTime,o(y,q);else break;q=c(j)}}function Q(D){if(R=!1,L(D),!Y)if(c(y)!==null)Y=!0,$e(ue);else{var q=c(j);q!==null&&ye(Q,q.startTime-D)}}function ue(D,q){Y=!1,R&&(R=!1,T(oe),oe=-1),H=!0;var U=P;try{for(L(q),b=c(y);b!==null&&(!(b.expirationTime>q)||D&&!ca());){var C=b.callback;if(typeof C=="function"){b.callback=null,P=b.priorityLevel;var I=C(b.expirationTime<=q);q=i.unstable_now(),typeof I=="function"?b.callback=I:b===c(y)&&d(y),L(q)}else d(y);b=c(y)}if(b!==null)var ee=!0;else{var te=c(j);te!==null&&ye(Q,te.startTime-q),ee=!1}return ee}finally{b=null,P=U,H=!1}}var Ne=!1,Fe=null,oe=-1,Ue=5,ba=-1;function ca(){return!(i.unstable_now()-ba<Ue)}function Ie(){if(Fe!==null){var D=i.unstable_now();ba=D;var q=!0;try{q=Fe(!0,D)}finally{q?qe():(Ne=!1,Fe=null)}}else Ne=!1}var qe;if(typeof A=="function")qe=function(){A(Ie)};else if(typeof MessageChannel<"u"){var da=new MessageChannel,ya=da.port2;da.port1.onmessage=Ie,qe=function(){ya.postMessage(null)}}else qe=function(){M(Ie,0)};function $e(D){Fe=D,Ne||(Ne=!0,qe())}function ye(D,q){oe=M(function(){D(i.unstable_now())},q)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(D){D.callback=null},i.unstable_continueExecution=function(){Y||H||(Y=!0,$e(ue))},i.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ue=0<D?Math.floor(1e3/D):5},i.unstable_getCurrentPriorityLevel=function(){return P},i.unstable_getFirstCallbackNode=function(){return c(y)},i.unstable_next=function(D){switch(P){case 1:case 2:case 3:var q=3;break;default:q=P}var U=P;P=q;try{return D()}finally{P=U}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(D,q){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var U=P;P=D;try{return q()}finally{P=U}},i.unstable_scheduleCallback=function(D,q,U){var C=i.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?C+U:C):U=C,D){case 1:var I=-1;break;case 2:I=250;break;case 5:I=1073741823;break;case 4:I=1e4;break;default:I=5e3}return I=U+I,D={id:x++,callback:q,priorityLevel:D,startTime:U,expirationTime:I,sortIndex:-1},U>C?(D.sortIndex=U,o(j,D),c(y)===null&&D===c(j)&&(R?(T(oe),oe=-1):R=!0,ye(Q,U-C))):(D.sortIndex=I,o(y,D),Y||H||(Y=!0,$e(ue))),D},i.unstable_shouldYield=ca,i.unstable_wrapCallback=function(D){var q=P;return function(){var U=P;P=q;try{return D.apply(this,arguments)}finally{P=U}}}})(ao)),ao}var vd;function Af(){return vd||(vd=1,eo.exports=Tf()),eo.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jd;function Pf(){if(jd)return Qe;jd=1;var i=ho(),o=Af();function c(a){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+a,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+a+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var d=new Set,m={};function f(a,t){u(a,t),u(a+"Capture",t)}function u(a,t){for(m[a]=t,a=0;a<t.length;a++)d.add(t[a])}var h=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),y=Object.prototype.hasOwnProperty,j=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,x={},b={};function P(a){return y.call(b,a)?!0:y.call(x,a)?!1:j.test(a)?b[a]=!0:(x[a]=!0,!1)}function H(a,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(a=a.toLowerCase().slice(0,5),a!=="data-"&&a!=="aria-");default:return!1}}function Y(a,t,n,r){if(t===null||typeof t>"u"||H(a,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function R(a,t,n,r,s,l,p){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=a,this.type=t,this.sanitizeURL=l,this.removeEmptyString=p}var M={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){M[a]=new R(a,0,!1,a,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var t=a[0];M[t]=new R(t,1,!1,a[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(a){M[a]=new R(a,2,!1,a.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){M[a]=new R(a,2,!1,a,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){M[a]=new R(a,3,!1,a.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(a){M[a]=new R(a,3,!0,a,null,!1,!1)}),["capture","download"].forEach(function(a){M[a]=new R(a,4,!1,a,null,!1,!1)}),["cols","rows","size","span"].forEach(function(a){M[a]=new R(a,6,!1,a,null,!1,!1)}),["rowSpan","start"].forEach(function(a){M[a]=new R(a,5,!1,a.toLowerCase(),null,!1,!1)});var T=/[\-:]([a-z])/g;function A(a){return a[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var t=a.replace(T,A);M[t]=new R(t,1,!1,a,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var t=a.replace(T,A);M[t]=new R(t,1,!1,a,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(a){var t=a.replace(T,A);M[t]=new R(t,1,!1,a,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(a){M[a]=new R(a,1,!1,a.toLowerCase(),null,!1,!1)}),M.xlinkHref=new R("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(a){M[a]=new R(a,1,!1,a.toLowerCase(),null,!0,!0)});function L(a,t,n,r){var s=M.hasOwnProperty(t)?M[t]:null;(s!==null?s.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Y(t,n,s,r)&&(n=null),r||s===null?P(t)&&(n===null?a.removeAttribute(t):a.setAttribute(t,""+n)):s.mustUseProperty?a[s.propertyName]=n===null?s.type===3?!1:"":n:(t=s.attributeName,r=s.attributeNamespace,n===null?a.removeAttribute(t):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?a.setAttributeNS(r,t,n):a.setAttribute(t,n))))}var Q=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ue=Symbol.for("react.element"),Ne=Symbol.for("react.portal"),Fe=Symbol.for("react.fragment"),oe=Symbol.for("react.strict_mode"),Ue=Symbol.for("react.profiler"),ba=Symbol.for("react.provider"),ca=Symbol.for("react.context"),Ie=Symbol.for("react.forward_ref"),qe=Symbol.for("react.suspense"),da=Symbol.for("react.suspense_list"),ya=Symbol.for("react.memo"),$e=Symbol.for("react.lazy"),ye=Symbol.for("react.offscreen"),D=Symbol.iterator;function q(a){return a===null||typeof a!="object"?null:(a=D&&a[D]||a["@@iterator"],typeof a=="function"?a:null)}var U=Object.assign,C;function I(a){if(C===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);C=t&&t[1]||""}return`
`+C+a}var ee=!1;function te(a,t){if(!a||ee)return"";ee=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(E){var r=E}Reflect.construct(a,[],t)}else{try{t.call()}catch(E){r=E}a.call(t.prototype)}else{try{throw Error()}catch(E){r=E}a()}}catch(E){if(E&&r&&typeof E.stack=="string"){for(var s=E.stack.split(`
`),l=r.stack.split(`
`),p=s.length-1,g=l.length-1;1<=p&&0<=g&&s[p]!==l[g];)g--;for(;1<=p&&0<=g;p--,g--)if(s[p]!==l[g]){if(p!==1||g!==1)do if(p--,g--,0>g||s[p]!==l[g]){var w=`
`+s[p].replace(" at new "," at ");return a.displayName&&w.includes("<anonymous>")&&(w=w.replace("<anonymous>",a.displayName)),w}while(1<=p&&0<=g);break}}}finally{ee=!1,Error.prepareStackTrace=n}return(a=a?a.displayName||a.name:"")?I(a):""}function re(a){switch(a.tag){case 5:return I(a.type);case 16:return I("Lazy");case 13:return I("Suspense");case 19:return I("SuspenseList");case 0:case 2:case 15:return a=te(a.type,!1),a;case 11:return a=te(a.type.render,!1),a;case 1:return a=te(a.type,!0),a;default:return""}}function ie(a){if(a==null)return null;if(typeof a=="function")return a.displayName||a.name||null;if(typeof a=="string")return a;switch(a){case Fe:return"Fragment";case Ne:return"Portal";case Ue:return"Profiler";case oe:return"StrictMode";case qe:return"Suspense";case da:return"SuspenseList"}if(typeof a=="object")switch(a.$$typeof){case ca:return(a.displayName||"Context")+".Consumer";case ba:return(a._context.displayName||"Context")+".Provider";case Ie:var t=a.render;return a=a.displayName,a||(a=t.displayName||t.name||"",a=a!==""?"ForwardRef("+a+")":"ForwardRef"),a;case ya:return t=a.displayName||null,t!==null?t:ie(a.type)||"Memo";case $e:t=a._payload,a=a._init;try{return ie(a(t))}catch{}}return null}function de(a){var t=a.type;switch(a.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return a=t.render,a=a.displayName||a.name||"",t.displayName||(a!==""?"ForwardRef("+a+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ie(t);case 8:return t===oe?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function le(a){switch(typeof a){case"boolean":case"number":case"string":case"undefined":return a;case"object":return a;default:return""}}function he(a){var t=a.type;return(a=a.nodeName)&&a.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Xe(a){var t=he(a)?"checked":"value",n=Object.getOwnPropertyDescriptor(a.constructor.prototype,t),r=""+a[t];if(!a.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,l=n.set;return Object.defineProperty(a,t,{configurable:!0,get:function(){return s.call(this)},set:function(p){r=""+p,l.call(this,p)}}),Object.defineProperty(a,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(p){r=""+p},stopTracking:function(){a._valueTracker=null,delete a[t]}}}}function Hn(a){a._valueTracker||(a._valueTracker=Xe(a))}function jo(a){if(!a)return!1;var t=a._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return a&&(r=he(a)?a.checked?"true":"false":a.value),a=r,a!==n?(t.setValue(a),!0):!1}function _n(a){if(a=a||(typeof document<"u"?document:void 0),typeof a>"u")return null;try{return a.activeElement||a.body}catch{return a.body}}function ri(a,t){var n=t.checked;return U({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??a._wrapperState.initialChecked})}function wo(a,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=le(t.value!=null?t.value:n),a._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function So(a,t){t=t.checked,t!=null&&L(a,"checked",t,!1)}function ii(a,t){So(a,t);var n=le(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&a.value===""||a.value!=n)&&(a.value=""+n):a.value!==""+n&&(a.value=""+n);else if(r==="submit"||r==="reset"){a.removeAttribute("value");return}t.hasOwnProperty("value")?si(a,t.type,n):t.hasOwnProperty("defaultValue")&&si(a,t.type,le(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(a.defaultChecked=!!t.defaultChecked)}function Co(a,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+a._wrapperState.initialValue,n||t===a.value||(a.value=t),a.defaultValue=t}n=a.name,n!==""&&(a.name=""),a.defaultChecked=!!a._wrapperState.initialChecked,n!==""&&(a.name=n)}function si(a,t,n){(t!=="number"||_n(a.ownerDocument)!==a)&&(n==null?a.defaultValue=""+a._wrapperState.initialValue:a.defaultValue!==""+n&&(a.defaultValue=""+n))}var Kt=Array.isArray;function vt(a,t,n,r){if(a=a.options,t){t={};for(var s=0;s<n.length;s++)t["$"+n[s]]=!0;for(n=0;n<a.length;n++)s=t.hasOwnProperty("$"+a[n].value),a[n].selected!==s&&(a[n].selected=s),s&&r&&(a[n].defaultSelected=!0)}else{for(n=""+le(n),t=null,s=0;s<a.length;s++){if(a[s].value===n){a[s].selected=!0,r&&(a[s].defaultSelected=!0);return}t!==null||a[s].disabled||(t=a[s])}t!==null&&(t.selected=!0)}}function oi(a,t){if(t.dangerouslySetInnerHTML!=null)throw Error(c(91));return U({},t,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}function ko(a,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(c(92));if(Kt(n)){if(1<n.length)throw Error(c(93));n=n[0]}t=n}t==null&&(t=""),n=t}a._wrapperState={initialValue:le(n)}}function No(a,t){var n=le(t.value),r=le(t.defaultValue);n!=null&&(n=""+n,n!==a.value&&(a.value=n),t.defaultValue==null&&a.defaultValue!==n&&(a.defaultValue=n)),r!=null&&(a.defaultValue=""+r)}function Eo(a){var t=a.textContent;t===a._wrapperState.initialValue&&t!==""&&t!==null&&(a.value=t)}function To(a){switch(a){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function li(a,t){return a==null||a==="http://www.w3.org/1999/xhtml"?To(t):a==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":a}var Un,Ao=(function(a){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,s){MSApp.execUnsafeLocalFunction(function(){return a(t,n,r,s)})}:a})(function(a,t){if(a.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in a)a.innerHTML=t;else{for(Un=Un||document.createElement("div"),Un.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Un.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;t.firstChild;)a.appendChild(t.firstChild)}});function Qt(a,t){if(t){var n=a.firstChild;if(n&&n===a.lastChild&&n.nodeType===3){n.nodeValue=t;return}}a.textContent=t}var qt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Cp=["Webkit","ms","Moz","O"];Object.keys(qt).forEach(function(a){Cp.forEach(function(t){t=t+a.charAt(0).toUpperCase()+a.substring(1),qt[t]=qt[a]})});function Po(a,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||qt.hasOwnProperty(a)&&qt[a]?(""+t).trim():t+"px"}function Ro(a,t){a=a.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=Po(n,t[n],r);n==="float"&&(n="cssFloat"),r?a.setProperty(n,s):a[n]=s}}var kp=U({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ci(a,t){if(t){if(kp[a]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(c(137,a));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(c(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(c(61))}if(t.style!=null&&typeof t.style!="object")throw Error(c(62))}}function di(a,t){if(a.indexOf("-")===-1)return typeof t.is=="string";switch(a){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var pi=null;function mi(a){return a=a.target||a.srcElement||window,a.correspondingUseElement&&(a=a.correspondingUseElement),a.nodeType===3?a.parentNode:a}var fi=null,jt=null,wt=null;function Bo(a){if(a=vn(a)){if(typeof fi!="function")throw Error(c(280));var t=a.stateNode;t&&(t=mr(t),fi(a.stateNode,a.type,t))}}function Io(a){jt?wt?wt.push(a):wt=[a]:jt=a}function zo(){if(jt){var a=jt,t=wt;if(wt=jt=null,Bo(a),t)for(a=0;a<t.length;a++)Bo(t[a])}}function Wo(a,t){return a(t)}function Mo(){}var ui=!1;function Oo(a,t,n){if(ui)return a(t,n);ui=!0;try{return Wo(a,t,n)}finally{ui=!1,(jt!==null||wt!==null)&&(Mo(),zo())}}function Xt(a,t){var n=a.stateNode;if(n===null)return null;var r=mr(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(a=a.type,r=!(a==="button"||a==="input"||a==="select"||a==="textarea")),a=!r;break e;default:a=!1}if(a)return null;if(n&&typeof n!="function")throw Error(c(231,t,typeof n));return n}var hi=!1;if(h)try{var Zt={};Object.defineProperty(Zt,"passive",{get:function(){hi=!0}}),window.addEventListener("test",Zt,Zt),window.removeEventListener("test",Zt,Zt)}catch{hi=!1}function Np(a,t,n,r,s,l,p,g,w){var E=Array.prototype.slice.call(arguments,3);try{t.apply(n,E)}catch(z){this.onError(z)}}var en=!1,$n=null,Gn=!1,gi=null,Ep={onError:function(a){en=!0,$n=a}};function Tp(a,t,n,r,s,l,p,g,w){en=!1,$n=null,Np.apply(Ep,arguments)}function Ap(a,t,n,r,s,l,p,g,w){if(Tp.apply(this,arguments),en){if(en){var E=$n;en=!1,$n=null}else throw Error(c(198));Gn||(Gn=!0,gi=E)}}function it(a){var t=a,n=a;if(a.alternate)for(;t.return;)t=t.return;else{a=t;do t=a,(t.flags&4098)!==0&&(n=t.return),a=t.return;while(a)}return t.tag===3?n:null}function Lo(a){if(a.tag===13){var t=a.memoizedState;if(t===null&&(a=a.alternate,a!==null&&(t=a.memoizedState)),t!==null)return t.dehydrated}return null}function Do(a){if(it(a)!==a)throw Error(c(188))}function Pp(a){var t=a.alternate;if(!t){if(t=it(a),t===null)throw Error(c(188));return t!==a?null:a}for(var n=a,r=t;;){var s=n.return;if(s===null)break;var l=s.alternate;if(l===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===l.child){for(l=s.child;l;){if(l===n)return Do(s),a;if(l===r)return Do(s),t;l=l.sibling}throw Error(c(188))}if(n.return!==r.return)n=s,r=l;else{for(var p=!1,g=s.child;g;){if(g===n){p=!0,n=s,r=l;break}if(g===r){p=!0,r=s,n=l;break}g=g.sibling}if(!p){for(g=l.child;g;){if(g===n){p=!0,n=l,r=s;break}if(g===r){p=!0,r=l,n=s;break}g=g.sibling}if(!p)throw Error(c(189))}}if(n.alternate!==r)throw Error(c(190))}if(n.tag!==3)throw Error(c(188));return n.stateNode.current===n?a:t}function Fo(a){return a=Pp(a),a!==null?Ho(a):null}function Ho(a){if(a.tag===5||a.tag===6)return a;for(a=a.child;a!==null;){var t=Ho(a);if(t!==null)return t;a=a.sibling}return null}var _o=o.unstable_scheduleCallback,Uo=o.unstable_cancelCallback,Rp=o.unstable_shouldYield,Bp=o.unstable_requestPaint,je=o.unstable_now,Ip=o.unstable_getCurrentPriorityLevel,xi=o.unstable_ImmediatePriority,$o=o.unstable_UserBlockingPriority,Jn=o.unstable_NormalPriority,zp=o.unstable_LowPriority,Go=o.unstable_IdlePriority,Yn=null,va=null;function Wp(a){if(va&&typeof va.onCommitFiberRoot=="function")try{va.onCommitFiberRoot(Yn,a,void 0,(a.current.flags&128)===128)}catch{}}var pa=Math.clz32?Math.clz32:Lp,Mp=Math.log,Op=Math.LN2;function Lp(a){return a>>>=0,a===0?32:31-(Mp(a)/Op|0)|0}var Vn=64,Kn=4194304;function an(a){switch(a&-a){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return a&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return a}}function Qn(a,t){var n=a.pendingLanes;if(n===0)return 0;var r=0,s=a.suspendedLanes,l=a.pingedLanes,p=n&268435455;if(p!==0){var g=p&~s;g!==0?r=an(g):(l&=p,l!==0&&(r=an(l)))}else p=n&~s,p!==0?r=an(p):l!==0&&(r=an(l));if(r===0)return 0;if(t!==0&&t!==r&&(t&s)===0&&(s=r&-r,l=t&-t,s>=l||s===16&&(l&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=a.entangledLanes,t!==0)for(a=a.entanglements,t&=r;0<t;)n=31-pa(t),s=1<<n,r|=a[n],t&=~s;return r}function Dp(a,t){switch(a){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Fp(a,t){for(var n=a.suspendedLanes,r=a.pingedLanes,s=a.expirationTimes,l=a.pendingLanes;0<l;){var p=31-pa(l),g=1<<p,w=s[p];w===-1?((g&n)===0||(g&r)!==0)&&(s[p]=Dp(g,t)):w<=t&&(a.expiredLanes|=g),l&=~g}}function bi(a){return a=a.pendingLanes&-1073741825,a!==0?a:a&1073741824?1073741824:0}function Jo(){var a=Vn;return Vn<<=1,(Vn&4194240)===0&&(Vn=64),a}function yi(a){for(var t=[],n=0;31>n;n++)t.push(a);return t}function tn(a,t,n){a.pendingLanes|=t,t!==536870912&&(a.suspendedLanes=0,a.pingedLanes=0),a=a.eventTimes,t=31-pa(t),a[t]=n}function Hp(a,t){var n=a.pendingLanes&~t;a.pendingLanes=t,a.suspendedLanes=0,a.pingedLanes=0,a.expiredLanes&=t,a.mutableReadLanes&=t,a.entangledLanes&=t,t=a.entanglements;var r=a.eventTimes;for(a=a.expirationTimes;0<n;){var s=31-pa(n),l=1<<s;t[s]=0,r[s]=-1,a[s]=-1,n&=~l}}function vi(a,t){var n=a.entangledLanes|=t;for(a=a.entanglements;n;){var r=31-pa(n),s=1<<r;s&t|a[r]&t&&(a[r]|=t),n&=~s}}var ce=0;function Yo(a){return a&=-a,1<a?4<a?(a&268435455)!==0?16:536870912:4:1}var Vo,ji,Ko,Qo,qo,wi=!1,qn=[],Ma=null,Oa=null,La=null,nn=new Map,rn=new Map,Da=[],_p="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Xo(a,t){switch(a){case"focusin":case"focusout":Ma=null;break;case"dragenter":case"dragleave":Oa=null;break;case"mouseover":case"mouseout":La=null;break;case"pointerover":case"pointerout":nn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":rn.delete(t.pointerId)}}function sn(a,t,n,r,s,l){return a===null||a.nativeEvent!==l?(a={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[s]},t!==null&&(t=vn(t),t!==null&&ji(t)),a):(a.eventSystemFlags|=r,t=a.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),a)}function Up(a,t,n,r,s){switch(t){case"focusin":return Ma=sn(Ma,a,t,n,r,s),!0;case"dragenter":return Oa=sn(Oa,a,t,n,r,s),!0;case"mouseover":return La=sn(La,a,t,n,r,s),!0;case"pointerover":var l=s.pointerId;return nn.set(l,sn(nn.get(l)||null,a,t,n,r,s)),!0;case"gotpointercapture":return l=s.pointerId,rn.set(l,sn(rn.get(l)||null,a,t,n,r,s)),!0}return!1}function Zo(a){var t=st(a.target);if(t!==null){var n=it(t);if(n!==null){if(t=n.tag,t===13){if(t=Lo(n),t!==null){a.blockedOn=t,qo(a.priority,function(){Ko(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){a.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}a.blockedOn=null}function Xn(a){if(a.blockedOn!==null)return!1;for(var t=a.targetContainers;0<t.length;){var n=Ci(a.domEventName,a.eventSystemFlags,t[0],a.nativeEvent);if(n===null){n=a.nativeEvent;var r=new n.constructor(n.type,n);pi=r,n.target.dispatchEvent(r),pi=null}else return t=vn(n),t!==null&&ji(t),a.blockedOn=n,!1;t.shift()}return!0}function el(a,t,n){Xn(a)&&n.delete(t)}function $p(){wi=!1,Ma!==null&&Xn(Ma)&&(Ma=null),Oa!==null&&Xn(Oa)&&(Oa=null),La!==null&&Xn(La)&&(La=null),nn.forEach(el),rn.forEach(el)}function on(a,t){a.blockedOn===t&&(a.blockedOn=null,wi||(wi=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,$p)))}function ln(a){function t(s){return on(s,a)}if(0<qn.length){on(qn[0],a);for(var n=1;n<qn.length;n++){var r=qn[n];r.blockedOn===a&&(r.blockedOn=null)}}for(Ma!==null&&on(Ma,a),Oa!==null&&on(Oa,a),La!==null&&on(La,a),nn.forEach(t),rn.forEach(t),n=0;n<Da.length;n++)r=Da[n],r.blockedOn===a&&(r.blockedOn=null);for(;0<Da.length&&(n=Da[0],n.blockedOn===null);)Zo(n),n.blockedOn===null&&Da.shift()}var St=Q.ReactCurrentBatchConfig,Zn=!0;function Gp(a,t,n,r){var s=ce,l=St.transition;St.transition=null;try{ce=1,Si(a,t,n,r)}finally{ce=s,St.transition=l}}function Jp(a,t,n,r){var s=ce,l=St.transition;St.transition=null;try{ce=4,Si(a,t,n,r)}finally{ce=s,St.transition=l}}function Si(a,t,n,r){if(Zn){var s=Ci(a,t,n,r);if(s===null)Hi(a,t,r,er,n),Xo(a,r);else if(Up(s,a,t,n,r))r.stopPropagation();else if(Xo(a,r),t&4&&-1<_p.indexOf(a)){for(;s!==null;){var l=vn(s);if(l!==null&&Vo(l),l=Ci(a,t,n,r),l===null&&Hi(a,t,r,er,n),l===s)break;s=l}s!==null&&r.stopPropagation()}else Hi(a,t,r,null,n)}}var er=null;function Ci(a,t,n,r){if(er=null,a=mi(r),a=st(a),a!==null)if(t=it(a),t===null)a=null;else if(n=t.tag,n===13){if(a=Lo(t),a!==null)return a;a=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;a=null}else t!==a&&(a=null);return er=a,null}function al(a){switch(a){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ip()){case xi:return 1;case $o:return 4;case Jn:case zp:return 16;case Go:return 536870912;default:return 16}default:return 16}}var Fa=null,ki=null,ar=null;function tl(){if(ar)return ar;var a,t=ki,n=t.length,r,s="value"in Fa?Fa.value:Fa.textContent,l=s.length;for(a=0;a<n&&t[a]===s[a];a++);var p=n-a;for(r=1;r<=p&&t[n-r]===s[l-r];r++);return ar=s.slice(a,1<r?1-r:void 0)}function tr(a){var t=a.keyCode;return"charCode"in a?(a=a.charCode,a===0&&t===13&&(a=13)):a=t,a===10&&(a=13),32<=a||a===13?a:0}function nr(){return!0}function nl(){return!1}function Ze(a){function t(n,r,s,l,p){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=l,this.target=p,this.currentTarget=null;for(var g in a)a.hasOwnProperty(g)&&(n=a[g],this[g]=n?n(l):l[g]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?nr:nl,this.isPropagationStopped=nl,this}return U(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=nr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=nr)},persist:function(){},isPersistent:nr}),t}var Ct={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ni=Ze(Ct),cn=U({},Ct,{view:0,detail:0}),Yp=Ze(cn),Ei,Ti,dn,rr=U({},cn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Pi,button:0,buttons:0,relatedTarget:function(a){return a.relatedTarget===void 0?a.fromElement===a.srcElement?a.toElement:a.fromElement:a.relatedTarget},movementX:function(a){return"movementX"in a?a.movementX:(a!==dn&&(dn&&a.type==="mousemove"?(Ei=a.screenX-dn.screenX,Ti=a.screenY-dn.screenY):Ti=Ei=0,dn=a),Ei)},movementY:function(a){return"movementY"in a?a.movementY:Ti}}),rl=Ze(rr),Vp=U({},rr,{dataTransfer:0}),Kp=Ze(Vp),Qp=U({},cn,{relatedTarget:0}),Ai=Ze(Qp),qp=U({},Ct,{animationName:0,elapsedTime:0,pseudoElement:0}),Xp=Ze(qp),Zp=U({},Ct,{clipboardData:function(a){return"clipboardData"in a?a.clipboardData:window.clipboardData}}),em=Ze(Zp),am=U({},Ct,{data:0}),il=Ze(am),tm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},nm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},rm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function im(a){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(a):(a=rm[a])?!!t[a]:!1}function Pi(){return im}var sm=U({},cn,{key:function(a){if(a.key){var t=tm[a.key]||a.key;if(t!=="Unidentified")return t}return a.type==="keypress"?(a=tr(a),a===13?"Enter":String.fromCharCode(a)):a.type==="keydown"||a.type==="keyup"?nm[a.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Pi,charCode:function(a){return a.type==="keypress"?tr(a):0},keyCode:function(a){return a.type==="keydown"||a.type==="keyup"?a.keyCode:0},which:function(a){return a.type==="keypress"?tr(a):a.type==="keydown"||a.type==="keyup"?a.keyCode:0}}),om=Ze(sm),lm=U({},rr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),sl=Ze(lm),cm=U({},cn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Pi}),dm=Ze(cm),pm=U({},Ct,{propertyName:0,elapsedTime:0,pseudoElement:0}),mm=Ze(pm),fm=U({},rr,{deltaX:function(a){return"deltaX"in a?a.deltaX:"wheelDeltaX"in a?-a.wheelDeltaX:0},deltaY:function(a){return"deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:0,deltaMode:0}),um=Ze(fm),hm=[9,13,27,32],Ri=h&&"CompositionEvent"in window,pn=null;h&&"documentMode"in document&&(pn=document.documentMode);var gm=h&&"TextEvent"in window&&!pn,ol=h&&(!Ri||pn&&8<pn&&11>=pn),ll=" ",cl=!1;function dl(a,t){switch(a){case"keyup":return hm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function pl(a){return a=a.detail,typeof a=="object"&&"data"in a?a.data:null}var kt=!1;function xm(a,t){switch(a){case"compositionend":return pl(t);case"keypress":return t.which!==32?null:(cl=!0,ll);case"textInput":return a=t.data,a===ll&&cl?null:a;default:return null}}function bm(a,t){if(kt)return a==="compositionend"||!Ri&&dl(a,t)?(a=tl(),ar=ki=Fa=null,kt=!1,a):null;switch(a){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ol&&t.locale!=="ko"?null:t.data;default:return null}}var ym={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ml(a){var t=a&&a.nodeName&&a.nodeName.toLowerCase();return t==="input"?!!ym[a.type]:t==="textarea"}function fl(a,t,n,r){Io(r),t=cr(t,"onChange"),0<t.length&&(n=new Ni("onChange","change",null,n,r),a.push({event:n,listeners:t}))}var mn=null,fn=null;function vm(a){Rl(a,0)}function ir(a){var t=Pt(a);if(jo(t))return a}function jm(a,t){if(a==="change")return t}var ul=!1;if(h){var Bi;if(h){var Ii="oninput"in document;if(!Ii){var hl=document.createElement("div");hl.setAttribute("oninput","return;"),Ii=typeof hl.oninput=="function"}Bi=Ii}else Bi=!1;ul=Bi&&(!document.documentMode||9<document.documentMode)}function gl(){mn&&(mn.detachEvent("onpropertychange",xl),fn=mn=null)}function xl(a){if(a.propertyName==="value"&&ir(fn)){var t=[];fl(t,fn,a,mi(a)),Oo(vm,t)}}function wm(a,t,n){a==="focusin"?(gl(),mn=t,fn=n,mn.attachEvent("onpropertychange",xl)):a==="focusout"&&gl()}function Sm(a){if(a==="selectionchange"||a==="keyup"||a==="keydown")return ir(fn)}function Cm(a,t){if(a==="click")return ir(t)}function km(a,t){if(a==="input"||a==="change")return ir(t)}function Nm(a,t){return a===t&&(a!==0||1/a===1/t)||a!==a&&t!==t}var ma=typeof Object.is=="function"?Object.is:Nm;function un(a,t){if(ma(a,t))return!0;if(typeof a!="object"||a===null||typeof t!="object"||t===null)return!1;var n=Object.keys(a),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!y.call(t,s)||!ma(a[s],t[s]))return!1}return!0}function bl(a){for(;a&&a.firstChild;)a=a.firstChild;return a}function yl(a,t){var n=bl(a);a=0;for(var r;n;){if(n.nodeType===3){if(r=a+n.textContent.length,a<=t&&r>=t)return{node:n,offset:t-a};a=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=bl(n)}}function vl(a,t){return a&&t?a===t?!0:a&&a.nodeType===3?!1:t&&t.nodeType===3?vl(a,t.parentNode):"contains"in a?a.contains(t):a.compareDocumentPosition?!!(a.compareDocumentPosition(t)&16):!1:!1}function jl(){for(var a=window,t=_n();t instanceof a.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)a=t.contentWindow;else break;t=_n(a.document)}return t}function zi(a){var t=a&&a.nodeName&&a.nodeName.toLowerCase();return t&&(t==="input"&&(a.type==="text"||a.type==="search"||a.type==="tel"||a.type==="url"||a.type==="password")||t==="textarea"||a.contentEditable==="true")}function Em(a){var t=jl(),n=a.focusedElem,r=a.selectionRange;if(t!==n&&n&&n.ownerDocument&&vl(n.ownerDocument.documentElement,n)){if(r!==null&&zi(n)){if(t=r.start,a=r.end,a===void 0&&(a=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(a,n.value.length);else if(a=(t=n.ownerDocument||document)&&t.defaultView||window,a.getSelection){a=a.getSelection();var s=n.textContent.length,l=Math.min(r.start,s);r=r.end===void 0?l:Math.min(r.end,s),!a.extend&&l>r&&(s=r,r=l,l=s),s=yl(n,l);var p=yl(n,r);s&&p&&(a.rangeCount!==1||a.anchorNode!==s.node||a.anchorOffset!==s.offset||a.focusNode!==p.node||a.focusOffset!==p.offset)&&(t=t.createRange(),t.setStart(s.node,s.offset),a.removeAllRanges(),l>r?(a.addRange(t),a.extend(p.node,p.offset)):(t.setEnd(p.node,p.offset),a.addRange(t)))}}for(t=[],a=n;a=a.parentNode;)a.nodeType===1&&t.push({element:a,left:a.scrollLeft,top:a.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)a=t[n],a.element.scrollLeft=a.left,a.element.scrollTop=a.top}}var Tm=h&&"documentMode"in document&&11>=document.documentMode,Nt=null,Wi=null,hn=null,Mi=!1;function wl(a,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Mi||Nt==null||Nt!==_n(r)||(r=Nt,"selectionStart"in r&&zi(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),hn&&un(hn,r)||(hn=r,r=cr(Wi,"onSelect"),0<r.length&&(t=new Ni("onSelect","select",null,t,n),a.push({event:t,listeners:r}),t.target=Nt)))}function sr(a,t){var n={};return n[a.toLowerCase()]=t.toLowerCase(),n["Webkit"+a]="webkit"+t,n["Moz"+a]="moz"+t,n}var Et={animationend:sr("Animation","AnimationEnd"),animationiteration:sr("Animation","AnimationIteration"),animationstart:sr("Animation","AnimationStart"),transitionend:sr("Transition","TransitionEnd")},Oi={},Sl={};h&&(Sl=document.createElement("div").style,"AnimationEvent"in window||(delete Et.animationend.animation,delete Et.animationiteration.animation,delete Et.animationstart.animation),"TransitionEvent"in window||delete Et.transitionend.transition);function or(a){if(Oi[a])return Oi[a];if(!Et[a])return a;var t=Et[a],n;for(n in t)if(t.hasOwnProperty(n)&&n in Sl)return Oi[a]=t[n];return a}var Cl=or("animationend"),kl=or("animationiteration"),Nl=or("animationstart"),El=or("transitionend"),Tl=new Map,Al="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ha(a,t){Tl.set(a,t),f(t,[a])}for(var Li=0;Li<Al.length;Li++){var Di=Al[Li],Am=Di.toLowerCase(),Pm=Di[0].toUpperCase()+Di.slice(1);Ha(Am,"on"+Pm)}Ha(Cl,"onAnimationEnd"),Ha(kl,"onAnimationIteration"),Ha(Nl,"onAnimationStart"),Ha("dblclick","onDoubleClick"),Ha("focusin","onFocus"),Ha("focusout","onBlur"),Ha(El,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),f("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),f("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),f("onBeforeInput",["compositionend","keypress","textInput","paste"]),f("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),f("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),f("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var gn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Rm=new Set("cancel close invalid load scroll toggle".split(" ").concat(gn));function Pl(a,t,n){var r=a.type||"unknown-event";a.currentTarget=n,Ap(r,t,void 0,a),a.currentTarget=null}function Rl(a,t){t=(t&4)!==0;for(var n=0;n<a.length;n++){var r=a[n],s=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var p=r.length-1;0<=p;p--){var g=r[p],w=g.instance,E=g.currentTarget;if(g=g.listener,w!==l&&s.isPropagationStopped())break e;Pl(s,g,E),l=w}else for(p=0;p<r.length;p++){if(g=r[p],w=g.instance,E=g.currentTarget,g=g.listener,w!==l&&s.isPropagationStopped())break e;Pl(s,g,E),l=w}}}if(Gn)throw a=gi,Gn=!1,gi=null,a}function me(a,t){var n=t[Yi];n===void 0&&(n=t[Yi]=new Set);var r=a+"__bubble";n.has(r)||(Bl(t,a,2,!1),n.add(r))}function Fi(a,t,n){var r=0;t&&(r|=4),Bl(n,a,r,t)}var lr="_reactListening"+Math.random().toString(36).slice(2);function xn(a){if(!a[lr]){a[lr]=!0,d.forEach(function(n){n!=="selectionchange"&&(Rm.has(n)||Fi(n,!1,a),Fi(n,!0,a))});var t=a.nodeType===9?a:a.ownerDocument;t===null||t[lr]||(t[lr]=!0,Fi("selectionchange",!1,t))}}function Bl(a,t,n,r){switch(al(t)){case 1:var s=Gp;break;case 4:s=Jp;break;default:s=Si}n=s.bind(null,t,n,a),s=void 0,!hi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),r?s!==void 0?a.addEventListener(t,n,{capture:!0,passive:s}):a.addEventListener(t,n,!0):s!==void 0?a.addEventListener(t,n,{passive:s}):a.addEventListener(t,n,!1)}function Hi(a,t,n,r,s){var l=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var p=r.tag;if(p===3||p===4){var g=r.stateNode.containerInfo;if(g===s||g.nodeType===8&&g.parentNode===s)break;if(p===4)for(p=r.return;p!==null;){var w=p.tag;if((w===3||w===4)&&(w=p.stateNode.containerInfo,w===s||w.nodeType===8&&w.parentNode===s))return;p=p.return}for(;g!==null;){if(p=st(g),p===null)return;if(w=p.tag,w===5||w===6){r=l=p;continue e}g=g.parentNode}}r=r.return}Oo(function(){var E=l,z=mi(n),W=[];e:{var B=Tl.get(a);if(B!==void 0){var F=Ni,$=a;switch(a){case"keypress":if(tr(n)===0)break e;case"keydown":case"keyup":F=om;break;case"focusin":$="focus",F=Ai;break;case"focusout":$="blur",F=Ai;break;case"beforeblur":case"afterblur":F=Ai;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":F=rl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":F=Kp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":F=dm;break;case Cl:case kl:case Nl:F=Xp;break;case El:F=mm;break;case"scroll":F=Yp;break;case"wheel":F=um;break;case"copy":case"cut":case"paste":F=em;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":F=sl}var G=(t&4)!==0,we=!G&&a==="scroll",k=G?B!==null?B+"Capture":null:B;G=[];for(var S=E,N;S!==null;){N=S;var O=N.stateNode;if(N.tag===5&&O!==null&&(N=O,k!==null&&(O=Xt(S,k),O!=null&&G.push(bn(S,O,N)))),we)break;S=S.return}0<G.length&&(B=new F(B,$,null,n,z),W.push({event:B,listeners:G}))}}if((t&7)===0){e:{if(B=a==="mouseover"||a==="pointerover",F=a==="mouseout"||a==="pointerout",B&&n!==pi&&($=n.relatedTarget||n.fromElement)&&(st($)||$[Ea]))break e;if((F||B)&&(B=z.window===z?z:(B=z.ownerDocument)?B.defaultView||B.parentWindow:window,F?($=n.relatedTarget||n.toElement,F=E,$=$?st($):null,$!==null&&(we=it($),$!==we||$.tag!==5&&$.tag!==6)&&($=null)):(F=null,$=E),F!==$)){if(G=rl,O="onMouseLeave",k="onMouseEnter",S="mouse",(a==="pointerout"||a==="pointerover")&&(G=sl,O="onPointerLeave",k="onPointerEnter",S="pointer"),we=F==null?B:Pt(F),N=$==null?B:Pt($),B=new G(O,S+"leave",F,n,z),B.target=we,B.relatedTarget=N,O=null,st(z)===E&&(G=new G(k,S+"enter",$,n,z),G.target=N,G.relatedTarget=we,O=G),we=O,F&&$)a:{for(G=F,k=$,S=0,N=G;N;N=Tt(N))S++;for(N=0,O=k;O;O=Tt(O))N++;for(;0<S-N;)G=Tt(G),S--;for(;0<N-S;)k=Tt(k),N--;for(;S--;){if(G===k||k!==null&&G===k.alternate)break a;G=Tt(G),k=Tt(k)}G=null}else G=null;F!==null&&Il(W,B,F,G,!1),$!==null&&we!==null&&Il(W,we,$,G,!0)}}e:{if(B=E?Pt(E):window,F=B.nodeName&&B.nodeName.toLowerCase(),F==="select"||F==="input"&&B.type==="file")var J=jm;else if(ml(B))if(ul)J=km;else{J=Sm;var V=wm}else(F=B.nodeName)&&F.toLowerCase()==="input"&&(B.type==="checkbox"||B.type==="radio")&&(J=Cm);if(J&&(J=J(a,E))){fl(W,J,n,z);break e}V&&V(a,B,E),a==="focusout"&&(V=B._wrapperState)&&V.controlled&&B.type==="number"&&si(B,"number",B.value)}switch(V=E?Pt(E):window,a){case"focusin":(ml(V)||V.contentEditable==="true")&&(Nt=V,Wi=E,hn=null);break;case"focusout":hn=Wi=Nt=null;break;case"mousedown":Mi=!0;break;case"contextmenu":case"mouseup":case"dragend":Mi=!1,wl(W,n,z);break;case"selectionchange":if(Tm)break;case"keydown":case"keyup":wl(W,n,z)}var K;if(Ri)e:{switch(a){case"compositionstart":var Z="onCompositionStart";break e;case"compositionend":Z="onCompositionEnd";break e;case"compositionupdate":Z="onCompositionUpdate";break e}Z=void 0}else kt?dl(a,n)&&(Z="onCompositionEnd"):a==="keydown"&&n.keyCode===229&&(Z="onCompositionStart");Z&&(ol&&n.locale!=="ko"&&(kt||Z!=="onCompositionStart"?Z==="onCompositionEnd"&&kt&&(K=tl()):(Fa=z,ki="value"in Fa?Fa.value:Fa.textContent,kt=!0)),V=cr(E,Z),0<V.length&&(Z=new il(Z,a,null,n,z),W.push({event:Z,listeners:V}),K?Z.data=K:(K=pl(n),K!==null&&(Z.data=K)))),(K=gm?xm(a,n):bm(a,n))&&(E=cr(E,"onBeforeInput"),0<E.length&&(z=new il("onBeforeInput","beforeinput",null,n,z),W.push({event:z,listeners:E}),z.data=K))}Rl(W,t)})}function bn(a,t,n){return{instance:a,listener:t,currentTarget:n}}function cr(a,t){for(var n=t+"Capture",r=[];a!==null;){var s=a,l=s.stateNode;s.tag===5&&l!==null&&(s=l,l=Xt(a,n),l!=null&&r.unshift(bn(a,l,s)),l=Xt(a,t),l!=null&&r.push(bn(a,l,s))),a=a.return}return r}function Tt(a){if(a===null)return null;do a=a.return;while(a&&a.tag!==5);return a||null}function Il(a,t,n,r,s){for(var l=t._reactName,p=[];n!==null&&n!==r;){var g=n,w=g.alternate,E=g.stateNode;if(w!==null&&w===r)break;g.tag===5&&E!==null&&(g=E,s?(w=Xt(n,l),w!=null&&p.unshift(bn(n,w,g))):s||(w=Xt(n,l),w!=null&&p.push(bn(n,w,g)))),n=n.return}p.length!==0&&a.push({event:t,listeners:p})}var Bm=/\r\n?/g,Im=/\u0000|\uFFFD/g;function zl(a){return(typeof a=="string"?a:""+a).replace(Bm,`
`).replace(Im,"")}function dr(a,t,n){if(t=zl(t),zl(a)!==t&&n)throw Error(c(425))}function pr(){}var _i=null,Ui=null;function $i(a,t){return a==="textarea"||a==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Gi=typeof setTimeout=="function"?setTimeout:void 0,zm=typeof clearTimeout=="function"?clearTimeout:void 0,Wl=typeof Promise=="function"?Promise:void 0,Wm=typeof queueMicrotask=="function"?queueMicrotask:typeof Wl<"u"?function(a){return Wl.resolve(null).then(a).catch(Mm)}:Gi;function Mm(a){setTimeout(function(){throw a})}function Ji(a,t){var n=t,r=0;do{var s=n.nextSibling;if(a.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){a.removeChild(s),ln(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);ln(t)}function _a(a){for(;a!=null;a=a.nextSibling){var t=a.nodeType;if(t===1||t===3)break;if(t===8){if(t=a.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return a}function Ml(a){a=a.previousSibling;for(var t=0;a;){if(a.nodeType===8){var n=a.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return a;t--}else n==="/$"&&t++}a=a.previousSibling}return null}var At=Math.random().toString(36).slice(2),ja="__reactFiber$"+At,yn="__reactProps$"+At,Ea="__reactContainer$"+At,Yi="__reactEvents$"+At,Om="__reactListeners$"+At,Lm="__reactHandles$"+At;function st(a){var t=a[ja];if(t)return t;for(var n=a.parentNode;n;){if(t=n[Ea]||n[ja]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(a=Ml(a);a!==null;){if(n=a[ja])return n;a=Ml(a)}return t}a=n,n=a.parentNode}return null}function vn(a){return a=a[ja]||a[Ea],!a||a.tag!==5&&a.tag!==6&&a.tag!==13&&a.tag!==3?null:a}function Pt(a){if(a.tag===5||a.tag===6)return a.stateNode;throw Error(c(33))}function mr(a){return a[yn]||null}var Vi=[],Rt=-1;function Ua(a){return{current:a}}function fe(a){0>Rt||(a.current=Vi[Rt],Vi[Rt]=null,Rt--)}function pe(a,t){Rt++,Vi[Rt]=a.current,a.current=t}var $a={},Me=Ua($a),Ge=Ua(!1),ot=$a;function Bt(a,t){var n=a.type.contextTypes;if(!n)return $a;var r=a.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var s={},l;for(l in n)s[l]=t[l];return r&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=t,a.__reactInternalMemoizedMaskedChildContext=s),s}function Je(a){return a=a.childContextTypes,a!=null}function fr(){fe(Ge),fe(Me)}function Ol(a,t,n){if(Me.current!==$a)throw Error(c(168));pe(Me,t),pe(Ge,n)}function Ll(a,t,n){var r=a.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in t))throw Error(c(108,de(a)||"Unknown",s));return U({},n,r)}function ur(a){return a=(a=a.stateNode)&&a.__reactInternalMemoizedMergedChildContext||$a,ot=Me.current,pe(Me,a),pe(Ge,Ge.current),!0}function Dl(a,t,n){var r=a.stateNode;if(!r)throw Error(c(169));n?(a=Ll(a,t,ot),r.__reactInternalMemoizedMergedChildContext=a,fe(Ge),fe(Me),pe(Me,a)):fe(Ge),pe(Ge,n)}var Ta=null,hr=!1,Ki=!1;function Fl(a){Ta===null?Ta=[a]:Ta.push(a)}function Dm(a){hr=!0,Fl(a)}function Ga(){if(!Ki&&Ta!==null){Ki=!0;var a=0,t=ce;try{var n=Ta;for(ce=1;a<n.length;a++){var r=n[a];do r=r(!0);while(r!==null)}Ta=null,hr=!1}catch(s){throw Ta!==null&&(Ta=Ta.slice(a+1)),_o(xi,Ga),s}finally{ce=t,Ki=!1}}return null}var It=[],zt=0,gr=null,xr=0,na=[],ra=0,lt=null,Aa=1,Pa="";function ct(a,t){It[zt++]=xr,It[zt++]=gr,gr=a,xr=t}function Hl(a,t,n){na[ra++]=Aa,na[ra++]=Pa,na[ra++]=lt,lt=a;var r=Aa;a=Pa;var s=32-pa(r)-1;r&=~(1<<s),n+=1;var l=32-pa(t)+s;if(30<l){var p=s-s%5;l=(r&(1<<p)-1).toString(32),r>>=p,s-=p,Aa=1<<32-pa(t)+s|n<<s|r,Pa=l+a}else Aa=1<<l|n<<s|r,Pa=a}function Qi(a){a.return!==null&&(ct(a,1),Hl(a,1,0))}function qi(a){for(;a===gr;)gr=It[--zt],It[zt]=null,xr=It[--zt],It[zt]=null;for(;a===lt;)lt=na[--ra],na[ra]=null,Pa=na[--ra],na[ra]=null,Aa=na[--ra],na[ra]=null}var ea=null,aa=null,ge=!1,fa=null;function _l(a,t){var n=la(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=a,t=a.deletions,t===null?(a.deletions=[n],a.flags|=16):t.push(n)}function Ul(a,t){switch(a.tag){case 5:var n=a.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(a.stateNode=t,ea=a,aa=_a(t.firstChild),!0):!1;case 6:return t=a.pendingProps===""||t.nodeType!==3?null:t,t!==null?(a.stateNode=t,ea=a,aa=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=lt!==null?{id:Aa,overflow:Pa}:null,a.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=la(18,null,null,0),n.stateNode=t,n.return=a,a.child=n,ea=a,aa=null,!0):!1;default:return!1}}function Xi(a){return(a.mode&1)!==0&&(a.flags&128)===0}function Zi(a){if(ge){var t=aa;if(t){var n=t;if(!Ul(a,t)){if(Xi(a))throw Error(c(418));t=_a(n.nextSibling);var r=ea;t&&Ul(a,t)?_l(r,n):(a.flags=a.flags&-4097|2,ge=!1,ea=a)}}else{if(Xi(a))throw Error(c(418));a.flags=a.flags&-4097|2,ge=!1,ea=a}}}function $l(a){for(a=a.return;a!==null&&a.tag!==5&&a.tag!==3&&a.tag!==13;)a=a.return;ea=a}function br(a){if(a!==ea)return!1;if(!ge)return $l(a),ge=!0,!1;var t;if((t=a.tag!==3)&&!(t=a.tag!==5)&&(t=a.type,t=t!=="head"&&t!=="body"&&!$i(a.type,a.memoizedProps)),t&&(t=aa)){if(Xi(a))throw Gl(),Error(c(418));for(;t;)_l(a,t),t=_a(t.nextSibling)}if($l(a),a.tag===13){if(a=a.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(c(317));e:{for(a=a.nextSibling,t=0;a;){if(a.nodeType===8){var n=a.data;if(n==="/$"){if(t===0){aa=_a(a.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}a=a.nextSibling}aa=null}}else aa=ea?_a(a.stateNode.nextSibling):null;return!0}function Gl(){for(var a=aa;a;)a=_a(a.nextSibling)}function Wt(){aa=ea=null,ge=!1}function es(a){fa===null?fa=[a]:fa.push(a)}var Fm=Q.ReactCurrentBatchConfig;function jn(a,t,n){if(a=n.ref,a!==null&&typeof a!="function"&&typeof a!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(c(309));var r=n.stateNode}if(!r)throw Error(c(147,a));var s=r,l=""+a;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(p){var g=s.refs;p===null?delete g[l]:g[l]=p},t._stringRef=l,t)}if(typeof a!="string")throw Error(c(284));if(!n._owner)throw Error(c(290,a))}return a}function yr(a,t){throw a=Object.prototype.toString.call(t),Error(c(31,a==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":a))}function Jl(a){var t=a._init;return t(a._payload)}function Yl(a){function t(k,S){if(a){var N=k.deletions;N===null?(k.deletions=[S],k.flags|=16):N.push(S)}}function n(k,S){if(!a)return null;for(;S!==null;)t(k,S),S=S.sibling;return null}function r(k,S){for(k=new Map;S!==null;)S.key!==null?k.set(S.key,S):k.set(S.index,S),S=S.sibling;return k}function s(k,S){return k=Za(k,S),k.index=0,k.sibling=null,k}function l(k,S,N){return k.index=N,a?(N=k.alternate,N!==null?(N=N.index,N<S?(k.flags|=2,S):N):(k.flags|=2,S)):(k.flags|=1048576,S)}function p(k){return a&&k.alternate===null&&(k.flags|=2),k}function g(k,S,N,O){return S===null||S.tag!==6?(S=Gs(N,k.mode,O),S.return=k,S):(S=s(S,N),S.return=k,S)}function w(k,S,N,O){var J=N.type;return J===Fe?z(k,S,N.props.children,O,N.key):S!==null&&(S.elementType===J||typeof J=="object"&&J!==null&&J.$$typeof===$e&&Jl(J)===S.type)?(O=s(S,N.props),O.ref=jn(k,S,N),O.return=k,O):(O=Ur(N.type,N.key,N.props,null,k.mode,O),O.ref=jn(k,S,N),O.return=k,O)}function E(k,S,N,O){return S===null||S.tag!==4||S.stateNode.containerInfo!==N.containerInfo||S.stateNode.implementation!==N.implementation?(S=Js(N,k.mode,O),S.return=k,S):(S=s(S,N.children||[]),S.return=k,S)}function z(k,S,N,O,J){return S===null||S.tag!==7?(S=xt(N,k.mode,O,J),S.return=k,S):(S=s(S,N),S.return=k,S)}function W(k,S,N){if(typeof S=="string"&&S!==""||typeof S=="number")return S=Gs(""+S,k.mode,N),S.return=k,S;if(typeof S=="object"&&S!==null){switch(S.$$typeof){case ue:return N=Ur(S.type,S.key,S.props,null,k.mode,N),N.ref=jn(k,null,S),N.return=k,N;case Ne:return S=Js(S,k.mode,N),S.return=k,S;case $e:var O=S._init;return W(k,O(S._payload),N)}if(Kt(S)||q(S))return S=xt(S,k.mode,N,null),S.return=k,S;yr(k,S)}return null}function B(k,S,N,O){var J=S!==null?S.key:null;if(typeof N=="string"&&N!==""||typeof N=="number")return J!==null?null:g(k,S,""+N,O);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case ue:return N.key===J?w(k,S,N,O):null;case Ne:return N.key===J?E(k,S,N,O):null;case $e:return J=N._init,B(k,S,J(N._payload),O)}if(Kt(N)||q(N))return J!==null?null:z(k,S,N,O,null);yr(k,N)}return null}function F(k,S,N,O,J){if(typeof O=="string"&&O!==""||typeof O=="number")return k=k.get(N)||null,g(S,k,""+O,J);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case ue:return k=k.get(O.key===null?N:O.key)||null,w(S,k,O,J);case Ne:return k=k.get(O.key===null?N:O.key)||null,E(S,k,O,J);case $e:var V=O._init;return F(k,S,N,V(O._payload),J)}if(Kt(O)||q(O))return k=k.get(N)||null,z(S,k,O,J,null);yr(S,O)}return null}function $(k,S,N,O){for(var J=null,V=null,K=S,Z=S=0,Be=null;K!==null&&Z<N.length;Z++){K.index>Z?(Be=K,K=null):Be=K.sibling;var se=B(k,K,N[Z],O);if(se===null){K===null&&(K=Be);break}a&&K&&se.alternate===null&&t(k,K),S=l(se,S,Z),V===null?J=se:V.sibling=se,V=se,K=Be}if(Z===N.length)return n(k,K),ge&&ct(k,Z),J;if(K===null){for(;Z<N.length;Z++)K=W(k,N[Z],O),K!==null&&(S=l(K,S,Z),V===null?J=K:V.sibling=K,V=K);return ge&&ct(k,Z),J}for(K=r(k,K);Z<N.length;Z++)Be=F(K,k,Z,N[Z],O),Be!==null&&(a&&Be.alternate!==null&&K.delete(Be.key===null?Z:Be.key),S=l(Be,S,Z),V===null?J=Be:V.sibling=Be,V=Be);return a&&K.forEach(function(et){return t(k,et)}),ge&&ct(k,Z),J}function G(k,S,N,O){var J=q(N);if(typeof J!="function")throw Error(c(150));if(N=J.call(N),N==null)throw Error(c(151));for(var V=J=null,K=S,Z=S=0,Be=null,se=N.next();K!==null&&!se.done;Z++,se=N.next()){K.index>Z?(Be=K,K=null):Be=K.sibling;var et=B(k,K,se.value,O);if(et===null){K===null&&(K=Be);break}a&&K&&et.alternate===null&&t(k,K),S=l(et,S,Z),V===null?J=et:V.sibling=et,V=et,K=Be}if(se.done)return n(k,K),ge&&ct(k,Z),J;if(K===null){for(;!se.done;Z++,se=N.next())se=W(k,se.value,O),se!==null&&(S=l(se,S,Z),V===null?J=se:V.sibling=se,V=se);return ge&&ct(k,Z),J}for(K=r(k,K);!se.done;Z++,se=N.next())se=F(K,k,Z,se.value,O),se!==null&&(a&&se.alternate!==null&&K.delete(se.key===null?Z:se.key),S=l(se,S,Z),V===null?J=se:V.sibling=se,V=se);return a&&K.forEach(function(vf){return t(k,vf)}),ge&&ct(k,Z),J}function we(k,S,N,O){if(typeof N=="object"&&N!==null&&N.type===Fe&&N.key===null&&(N=N.props.children),typeof N=="object"&&N!==null){switch(N.$$typeof){case ue:e:{for(var J=N.key,V=S;V!==null;){if(V.key===J){if(J=N.type,J===Fe){if(V.tag===7){n(k,V.sibling),S=s(V,N.props.children),S.return=k,k=S;break e}}else if(V.elementType===J||typeof J=="object"&&J!==null&&J.$$typeof===$e&&Jl(J)===V.type){n(k,V.sibling),S=s(V,N.props),S.ref=jn(k,V,N),S.return=k,k=S;break e}n(k,V);break}else t(k,V);V=V.sibling}N.type===Fe?(S=xt(N.props.children,k.mode,O,N.key),S.return=k,k=S):(O=Ur(N.type,N.key,N.props,null,k.mode,O),O.ref=jn(k,S,N),O.return=k,k=O)}return p(k);case Ne:e:{for(V=N.key;S!==null;){if(S.key===V)if(S.tag===4&&S.stateNode.containerInfo===N.containerInfo&&S.stateNode.implementation===N.implementation){n(k,S.sibling),S=s(S,N.children||[]),S.return=k,k=S;break e}else{n(k,S);break}else t(k,S);S=S.sibling}S=Js(N,k.mode,O),S.return=k,k=S}return p(k);case $e:return V=N._init,we(k,S,V(N._payload),O)}if(Kt(N))return $(k,S,N,O);if(q(N))return G(k,S,N,O);yr(k,N)}return typeof N=="string"&&N!==""||typeof N=="number"?(N=""+N,S!==null&&S.tag===6?(n(k,S.sibling),S=s(S,N),S.return=k,k=S):(n(k,S),S=Gs(N,k.mode,O),S.return=k,k=S),p(k)):n(k,S)}return we}var Mt=Yl(!0),Vl=Yl(!1),vr=Ua(null),jr=null,Ot=null,as=null;function ts(){as=Ot=jr=null}function ns(a){var t=vr.current;fe(vr),a._currentValue=t}function rs(a,t,n){for(;a!==null;){var r=a.alternate;if((a.childLanes&t)!==t?(a.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),a===n)break;a=a.return}}function Lt(a,t){jr=a,as=Ot=null,a=a.dependencies,a!==null&&a.firstContext!==null&&((a.lanes&t)!==0&&(Ye=!0),a.firstContext=null)}function ia(a){var t=a._currentValue;if(as!==a)if(a={context:a,memoizedValue:t,next:null},Ot===null){if(jr===null)throw Error(c(308));Ot=a,jr.dependencies={lanes:0,firstContext:a}}else Ot=Ot.next=a;return t}var dt=null;function is(a){dt===null?dt=[a]:dt.push(a)}function Kl(a,t,n,r){var s=t.interleaved;return s===null?(n.next=n,is(t)):(n.next=s.next,s.next=n),t.interleaved=n,Ra(a,r)}function Ra(a,t){a.lanes|=t;var n=a.alternate;for(n!==null&&(n.lanes|=t),n=a,a=a.return;a!==null;)a.childLanes|=t,n=a.alternate,n!==null&&(n.childLanes|=t),n=a,a=a.return;return n.tag===3?n.stateNode:null}var Ja=!1;function ss(a){a.updateQueue={baseState:a.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ql(a,t){a=a.updateQueue,t.updateQueue===a&&(t.updateQueue={baseState:a.baseState,firstBaseUpdate:a.firstBaseUpdate,lastBaseUpdate:a.lastBaseUpdate,shared:a.shared,effects:a.effects})}function Ba(a,t){return{eventTime:a,lane:t,tag:0,payload:null,callback:null,next:null}}function Ya(a,t,n){var r=a.updateQueue;if(r===null)return null;if(r=r.shared,(ne&2)!==0){var s=r.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),r.pending=t,Ra(a,n)}return s=r.interleaved,s===null?(t.next=t,is(r)):(t.next=s.next,s.next=t),r.interleaved=t,Ra(a,n)}function wr(a,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=a.pendingLanes,n|=r,t.lanes=n,vi(a,n)}}function ql(a,t){var n=a.updateQueue,r=a.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var p={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?s=l=p:l=l.next=p,n=n.next}while(n!==null);l===null?s=l=t:l=l.next=t}else s=l=t;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:l,shared:r.shared,effects:r.effects},a.updateQueue=n;return}a=n.lastBaseUpdate,a===null?n.firstBaseUpdate=t:a.next=t,n.lastBaseUpdate=t}function Sr(a,t,n,r){var s=a.updateQueue;Ja=!1;var l=s.firstBaseUpdate,p=s.lastBaseUpdate,g=s.shared.pending;if(g!==null){s.shared.pending=null;var w=g,E=w.next;w.next=null,p===null?l=E:p.next=E,p=w;var z=a.alternate;z!==null&&(z=z.updateQueue,g=z.lastBaseUpdate,g!==p&&(g===null?z.firstBaseUpdate=E:g.next=E,z.lastBaseUpdate=w))}if(l!==null){var W=s.baseState;p=0,z=E=w=null,g=l;do{var B=g.lane,F=g.eventTime;if((r&B)===B){z!==null&&(z=z.next={eventTime:F,lane:0,tag:g.tag,payload:g.payload,callback:g.callback,next:null});e:{var $=a,G=g;switch(B=t,F=n,G.tag){case 1:if($=G.payload,typeof $=="function"){W=$.call(F,W,B);break e}W=$;break e;case 3:$.flags=$.flags&-65537|128;case 0:if($=G.payload,B=typeof $=="function"?$.call(F,W,B):$,B==null)break e;W=U({},W,B);break e;case 2:Ja=!0}}g.callback!==null&&g.lane!==0&&(a.flags|=64,B=s.effects,B===null?s.effects=[g]:B.push(g))}else F={eventTime:F,lane:B,tag:g.tag,payload:g.payload,callback:g.callback,next:null},z===null?(E=z=F,w=W):z=z.next=F,p|=B;if(g=g.next,g===null){if(g=s.shared.pending,g===null)break;B=g,g=B.next,B.next=null,s.lastBaseUpdate=B,s.shared.pending=null}}while(!0);if(z===null&&(w=W),s.baseState=w,s.firstBaseUpdate=E,s.lastBaseUpdate=z,t=s.shared.interleaved,t!==null){s=t;do p|=s.lane,s=s.next;while(s!==t)}else l===null&&(s.shared.lanes=0);ft|=p,a.lanes=p,a.memoizedState=W}}function Xl(a,t,n){if(a=t.effects,t.effects=null,a!==null)for(t=0;t<a.length;t++){var r=a[t],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(c(191,s));s.call(r)}}}var wn={},wa=Ua(wn),Sn=Ua(wn),Cn=Ua(wn);function pt(a){if(a===wn)throw Error(c(174));return a}function os(a,t){switch(pe(Cn,t),pe(Sn,a),pe(wa,wn),a=t.nodeType,a){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:li(null,"");break;default:a=a===8?t.parentNode:t,t=a.namespaceURI||null,a=a.tagName,t=li(t,a)}fe(wa),pe(wa,t)}function Dt(){fe(wa),fe(Sn),fe(Cn)}function Zl(a){pt(Cn.current);var t=pt(wa.current),n=li(t,a.type);t!==n&&(pe(Sn,a),pe(wa,n))}function ls(a){Sn.current===a&&(fe(wa),fe(Sn))}var xe=Ua(0);function Cr(a){for(var t=a;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===a)break;for(;t.sibling===null;){if(t.return===null||t.return===a)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var cs=[];function ds(){for(var a=0;a<cs.length;a++)cs[a]._workInProgressVersionPrimary=null;cs.length=0}var kr=Q.ReactCurrentDispatcher,ps=Q.ReactCurrentBatchConfig,mt=0,be=null,Ee=null,Pe=null,Nr=!1,kn=!1,Nn=0,Hm=0;function Oe(){throw Error(c(321))}function ms(a,t){if(t===null)return!1;for(var n=0;n<t.length&&n<a.length;n++)if(!ma(a[n],t[n]))return!1;return!0}function fs(a,t,n,r,s,l){if(mt=l,be=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,kr.current=a===null||a.memoizedState===null?Gm:Jm,a=n(r,s),kn){l=0;do{if(kn=!1,Nn=0,25<=l)throw Error(c(301));l+=1,Pe=Ee=null,t.updateQueue=null,kr.current=Ym,a=n(r,s)}while(kn)}if(kr.current=Ar,t=Ee!==null&&Ee.next!==null,mt=0,Pe=Ee=be=null,Nr=!1,t)throw Error(c(300));return a}function us(){var a=Nn!==0;return Nn=0,a}function Sa(){var a={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Pe===null?be.memoizedState=Pe=a:Pe=Pe.next=a,Pe}function sa(){if(Ee===null){var a=be.alternate;a=a!==null?a.memoizedState:null}else a=Ee.next;var t=Pe===null?be.memoizedState:Pe.next;if(t!==null)Pe=t,Ee=a;else{if(a===null)throw Error(c(310));Ee=a,a={memoizedState:Ee.memoizedState,baseState:Ee.baseState,baseQueue:Ee.baseQueue,queue:Ee.queue,next:null},Pe===null?be.memoizedState=Pe=a:Pe=Pe.next=a}return Pe}function En(a,t){return typeof t=="function"?t(a):t}function hs(a){var t=sa(),n=t.queue;if(n===null)throw Error(c(311));n.lastRenderedReducer=a;var r=Ee,s=r.baseQueue,l=n.pending;if(l!==null){if(s!==null){var p=s.next;s.next=l.next,l.next=p}r.baseQueue=s=l,n.pending=null}if(s!==null){l=s.next,r=r.baseState;var g=p=null,w=null,E=l;do{var z=E.lane;if((mt&z)===z)w!==null&&(w=w.next={lane:0,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null}),r=E.hasEagerState?E.eagerState:a(r,E.action);else{var W={lane:z,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null};w===null?(g=w=W,p=r):w=w.next=W,be.lanes|=z,ft|=z}E=E.next}while(E!==null&&E!==l);w===null?p=r:w.next=g,ma(r,t.memoizedState)||(Ye=!0),t.memoizedState=r,t.baseState=p,t.baseQueue=w,n.lastRenderedState=r}if(a=n.interleaved,a!==null){s=a;do l=s.lane,be.lanes|=l,ft|=l,s=s.next;while(s!==a)}else s===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function gs(a){var t=sa(),n=t.queue;if(n===null)throw Error(c(311));n.lastRenderedReducer=a;var r=n.dispatch,s=n.pending,l=t.memoizedState;if(s!==null){n.pending=null;var p=s=s.next;do l=a(l,p.action),p=p.next;while(p!==s);ma(l,t.memoizedState)||(Ye=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function ec(){}function ac(a,t){var n=be,r=sa(),s=t(),l=!ma(r.memoizedState,s);if(l&&(r.memoizedState=s,Ye=!0),r=r.queue,xs(rc.bind(null,n,r,a),[a]),r.getSnapshot!==t||l||Pe!==null&&Pe.memoizedState.tag&1){if(n.flags|=2048,Tn(9,nc.bind(null,n,r,s,t),void 0,null),Re===null)throw Error(c(349));(mt&30)!==0||tc(n,t,s)}return s}function tc(a,t,n){a.flags|=16384,a={getSnapshot:t,value:n},t=be.updateQueue,t===null?(t={lastEffect:null,stores:null},be.updateQueue=t,t.stores=[a]):(n=t.stores,n===null?t.stores=[a]:n.push(a))}function nc(a,t,n,r){t.value=n,t.getSnapshot=r,ic(t)&&sc(a)}function rc(a,t,n){return n(function(){ic(t)&&sc(a)})}function ic(a){var t=a.getSnapshot;a=a.value;try{var n=t();return!ma(a,n)}catch{return!0}}function sc(a){var t=Ra(a,1);t!==null&&xa(t,a,1,-1)}function oc(a){var t=Sa();return typeof a=="function"&&(a=a()),t.memoizedState=t.baseState=a,a={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:En,lastRenderedState:a},t.queue=a,a=a.dispatch=$m.bind(null,be,a),[t.memoizedState,a]}function Tn(a,t,n,r){return a={tag:a,create:t,destroy:n,deps:r,next:null},t=be.updateQueue,t===null?(t={lastEffect:null,stores:null},be.updateQueue=t,t.lastEffect=a.next=a):(n=t.lastEffect,n===null?t.lastEffect=a.next=a:(r=n.next,n.next=a,a.next=r,t.lastEffect=a)),a}function lc(){return sa().memoizedState}function Er(a,t,n,r){var s=Sa();be.flags|=a,s.memoizedState=Tn(1|t,n,void 0,r===void 0?null:r)}function Tr(a,t,n,r){var s=sa();r=r===void 0?null:r;var l=void 0;if(Ee!==null){var p=Ee.memoizedState;if(l=p.destroy,r!==null&&ms(r,p.deps)){s.memoizedState=Tn(t,n,l,r);return}}be.flags|=a,s.memoizedState=Tn(1|t,n,l,r)}function cc(a,t){return Er(8390656,8,a,t)}function xs(a,t){return Tr(2048,8,a,t)}function dc(a,t){return Tr(4,2,a,t)}function pc(a,t){return Tr(4,4,a,t)}function mc(a,t){if(typeof t=="function")return a=a(),t(a),function(){t(null)};if(t!=null)return a=a(),t.current=a,function(){t.current=null}}function fc(a,t,n){return n=n!=null?n.concat([a]):null,Tr(4,4,mc.bind(null,t,a),n)}function bs(){}function uc(a,t){var n=sa();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ms(t,r[1])?r[0]:(n.memoizedState=[a,t],a)}function hc(a,t){var n=sa();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ms(t,r[1])?r[0]:(a=a(),n.memoizedState=[a,t],a)}function gc(a,t,n){return(mt&21)===0?(a.baseState&&(a.baseState=!1,Ye=!0),a.memoizedState=n):(ma(n,t)||(n=Jo(),be.lanes|=n,ft|=n,a.baseState=!0),t)}function _m(a,t){var n=ce;ce=n!==0&&4>n?n:4,a(!0);var r=ps.transition;ps.transition={};try{a(!1),t()}finally{ce=n,ps.transition=r}}function xc(){return sa().memoizedState}function Um(a,t,n){var r=qa(a);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},bc(a))yc(t,n);else if(n=Kl(a,t,n,r),n!==null){var s=_e();xa(n,a,r,s),vc(n,t,r)}}function $m(a,t,n){var r=qa(a),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(bc(a))yc(t,s);else{var l=a.alternate;if(a.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var p=t.lastRenderedState,g=l(p,n);if(s.hasEagerState=!0,s.eagerState=g,ma(g,p)){var w=t.interleaved;w===null?(s.next=s,is(t)):(s.next=w.next,w.next=s),t.interleaved=s;return}}catch{}finally{}n=Kl(a,t,s,r),n!==null&&(s=_e(),xa(n,a,r,s),vc(n,t,r))}}function bc(a){var t=a.alternate;return a===be||t!==null&&t===be}function yc(a,t){kn=Nr=!0;var n=a.pending;n===null?t.next=t:(t.next=n.next,n.next=t),a.pending=t}function vc(a,t,n){if((n&4194240)!==0){var r=t.lanes;r&=a.pendingLanes,n|=r,t.lanes=n,vi(a,n)}}var Ar={readContext:ia,useCallback:Oe,useContext:Oe,useEffect:Oe,useImperativeHandle:Oe,useInsertionEffect:Oe,useLayoutEffect:Oe,useMemo:Oe,useReducer:Oe,useRef:Oe,useState:Oe,useDebugValue:Oe,useDeferredValue:Oe,useTransition:Oe,useMutableSource:Oe,useSyncExternalStore:Oe,useId:Oe,unstable_isNewReconciler:!1},Gm={readContext:ia,useCallback:function(a,t){return Sa().memoizedState=[a,t===void 0?null:t],a},useContext:ia,useEffect:cc,useImperativeHandle:function(a,t,n){return n=n!=null?n.concat([a]):null,Er(4194308,4,mc.bind(null,t,a),n)},useLayoutEffect:function(a,t){return Er(4194308,4,a,t)},useInsertionEffect:function(a,t){return Er(4,2,a,t)},useMemo:function(a,t){var n=Sa();return t=t===void 0?null:t,a=a(),n.memoizedState=[a,t],a},useReducer:function(a,t,n){var r=Sa();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,a={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:a,lastRenderedState:t},r.queue=a,a=a.dispatch=Um.bind(null,be,a),[r.memoizedState,a]},useRef:function(a){var t=Sa();return a={current:a},t.memoizedState=a},useState:oc,useDebugValue:bs,useDeferredValue:function(a){return Sa().memoizedState=a},useTransition:function(){var a=oc(!1),t=a[0];return a=_m.bind(null,a[1]),Sa().memoizedState=a,[t,a]},useMutableSource:function(){},useSyncExternalStore:function(a,t,n){var r=be,s=Sa();if(ge){if(n===void 0)throw Error(c(407));n=n()}else{if(n=t(),Re===null)throw Error(c(349));(mt&30)!==0||tc(r,t,n)}s.memoizedState=n;var l={value:n,getSnapshot:t};return s.queue=l,cc(rc.bind(null,r,l,a),[a]),r.flags|=2048,Tn(9,nc.bind(null,r,l,n,t),void 0,null),n},useId:function(){var a=Sa(),t=Re.identifierPrefix;if(ge){var n=Pa,r=Aa;n=(r&~(1<<32-pa(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Nn++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Hm++,t=":"+t+"r"+n.toString(32)+":";return a.memoizedState=t},unstable_isNewReconciler:!1},Jm={readContext:ia,useCallback:uc,useContext:ia,useEffect:xs,useImperativeHandle:fc,useInsertionEffect:dc,useLayoutEffect:pc,useMemo:hc,useReducer:hs,useRef:lc,useState:function(){return hs(En)},useDebugValue:bs,useDeferredValue:function(a){var t=sa();return gc(t,Ee.memoizedState,a)},useTransition:function(){var a=hs(En)[0],t=sa().memoizedState;return[a,t]},useMutableSource:ec,useSyncExternalStore:ac,useId:xc,unstable_isNewReconciler:!1},Ym={readContext:ia,useCallback:uc,useContext:ia,useEffect:xs,useImperativeHandle:fc,useInsertionEffect:dc,useLayoutEffect:pc,useMemo:hc,useReducer:gs,useRef:lc,useState:function(){return gs(En)},useDebugValue:bs,useDeferredValue:function(a){var t=sa();return Ee===null?t.memoizedState=a:gc(t,Ee.memoizedState,a)},useTransition:function(){var a=gs(En)[0],t=sa().memoizedState;return[a,t]},useMutableSource:ec,useSyncExternalStore:ac,useId:xc,unstable_isNewReconciler:!1};function ua(a,t){if(a&&a.defaultProps){t=U({},t),a=a.defaultProps;for(var n in a)t[n]===void 0&&(t[n]=a[n]);return t}return t}function ys(a,t,n,r){t=a.memoizedState,n=n(r,t),n=n==null?t:U({},t,n),a.memoizedState=n,a.lanes===0&&(a.updateQueue.baseState=n)}var Pr={isMounted:function(a){return(a=a._reactInternals)?it(a)===a:!1},enqueueSetState:function(a,t,n){a=a._reactInternals;var r=_e(),s=qa(a),l=Ba(r,s);l.payload=t,n!=null&&(l.callback=n),t=Ya(a,l,s),t!==null&&(xa(t,a,s,r),wr(t,a,s))},enqueueReplaceState:function(a,t,n){a=a._reactInternals;var r=_e(),s=qa(a),l=Ba(r,s);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=Ya(a,l,s),t!==null&&(xa(t,a,s,r),wr(t,a,s))},enqueueForceUpdate:function(a,t){a=a._reactInternals;var n=_e(),r=qa(a),s=Ba(n,r);s.tag=2,t!=null&&(s.callback=t),t=Ya(a,s,r),t!==null&&(xa(t,a,r,n),wr(t,a,r))}};function jc(a,t,n,r,s,l,p){return a=a.stateNode,typeof a.shouldComponentUpdate=="function"?a.shouldComponentUpdate(r,l,p):t.prototype&&t.prototype.isPureReactComponent?!un(n,r)||!un(s,l):!0}function wc(a,t,n){var r=!1,s=$a,l=t.contextType;return typeof l=="object"&&l!==null?l=ia(l):(s=Je(t)?ot:Me.current,r=t.contextTypes,l=(r=r!=null)?Bt(a,s):$a),t=new t(n,l),a.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Pr,a.stateNode=t,t._reactInternals=a,r&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=s,a.__reactInternalMemoizedMaskedChildContext=l),t}function Sc(a,t,n,r){a=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==a&&Pr.enqueueReplaceState(t,t.state,null)}function vs(a,t,n,r){var s=a.stateNode;s.props=n,s.state=a.memoizedState,s.refs={},ss(a);var l=t.contextType;typeof l=="object"&&l!==null?s.context=ia(l):(l=Je(t)?ot:Me.current,s.context=Bt(a,l)),s.state=a.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(ys(a,t,l,n),s.state=a.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(t=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),t!==s.state&&Pr.enqueueReplaceState(s,s.state,null),Sr(a,n,s,r),s.state=a.memoizedState),typeof s.componentDidMount=="function"&&(a.flags|=4194308)}function Ft(a,t){try{var n="",r=t;do n+=re(r),r=r.return;while(r);var s=n}catch(l){s=`
Error generating stack: `+l.message+`
`+l.stack}return{value:a,source:t,stack:s,digest:null}}function js(a,t,n){return{value:a,source:null,stack:n??null,digest:t??null}}function ws(a,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Vm=typeof WeakMap=="function"?WeakMap:Map;function Cc(a,t,n){n=Ba(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Or||(Or=!0,Os=r),ws(a,t)},n}function kc(a,t,n){n=Ba(-1,n),n.tag=3;var r=a.type.getDerivedStateFromError;if(typeof r=="function"){var s=t.value;n.payload=function(){return r(s)},n.callback=function(){ws(a,t)}}var l=a.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){ws(a,t),typeof r!="function"&&(Ka===null?Ka=new Set([this]):Ka.add(this));var p=t.stack;this.componentDidCatch(t.value,{componentStack:p!==null?p:""})}),n}function Nc(a,t,n){var r=a.pingCache;if(r===null){r=a.pingCache=new Vm;var s=new Set;r.set(t,s)}else s=r.get(t),s===void 0&&(s=new Set,r.set(t,s));s.has(n)||(s.add(n),a=cf.bind(null,a,t,n),t.then(a,a))}function Ec(a){do{var t;if((t=a.tag===13)&&(t=a.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return a;a=a.return}while(a!==null);return null}function Tc(a,t,n,r,s){return(a.mode&1)===0?(a===t?a.flags|=65536:(a.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ba(-1,1),t.tag=2,Ya(n,t,1))),n.lanes|=1),a):(a.flags|=65536,a.lanes=s,a)}var Km=Q.ReactCurrentOwner,Ye=!1;function He(a,t,n,r){t.child=a===null?Vl(t,null,n,r):Mt(t,a.child,n,r)}function Ac(a,t,n,r,s){n=n.render;var l=t.ref;return Lt(t,s),r=fs(a,t,n,r,l,s),n=us(),a!==null&&!Ye?(t.updateQueue=a.updateQueue,t.flags&=-2053,a.lanes&=~s,Ia(a,t,s)):(ge&&n&&Qi(t),t.flags|=1,He(a,t,r,s),t.child)}function Pc(a,t,n,r,s){if(a===null){var l=n.type;return typeof l=="function"&&!$s(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,Rc(a,t,l,r,s)):(a=Ur(n.type,null,r,t,t.mode,s),a.ref=t.ref,a.return=t,t.child=a)}if(l=a.child,(a.lanes&s)===0){var p=l.memoizedProps;if(n=n.compare,n=n!==null?n:un,n(p,r)&&a.ref===t.ref)return Ia(a,t,s)}return t.flags|=1,a=Za(l,r),a.ref=t.ref,a.return=t,t.child=a}function Rc(a,t,n,r,s){if(a!==null){var l=a.memoizedProps;if(un(l,r)&&a.ref===t.ref)if(Ye=!1,t.pendingProps=r=l,(a.lanes&s)!==0)(a.flags&131072)!==0&&(Ye=!0);else return t.lanes=a.lanes,Ia(a,t,s)}return Ss(a,t,n,r,s)}function Bc(a,t,n){var r=t.pendingProps,s=r.children,l=a!==null?a.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},pe(_t,ta),ta|=n;else{if((n&1073741824)===0)return a=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:a,cachePool:null,transitions:null},t.updateQueue=null,pe(_t,ta),ta|=a,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,pe(_t,ta),ta|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,pe(_t,ta),ta|=r;return He(a,t,s,n),t.child}function Ic(a,t){var n=t.ref;(a===null&&n!==null||a!==null&&a.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ss(a,t,n,r,s){var l=Je(n)?ot:Me.current;return l=Bt(t,l),Lt(t,s),n=fs(a,t,n,r,l,s),r=us(),a!==null&&!Ye?(t.updateQueue=a.updateQueue,t.flags&=-2053,a.lanes&=~s,Ia(a,t,s)):(ge&&r&&Qi(t),t.flags|=1,He(a,t,n,s),t.child)}function zc(a,t,n,r,s){if(Je(n)){var l=!0;ur(t)}else l=!1;if(Lt(t,s),t.stateNode===null)Br(a,t),wc(t,n,r),vs(t,n,r,s),r=!0;else if(a===null){var p=t.stateNode,g=t.memoizedProps;p.props=g;var w=p.context,E=n.contextType;typeof E=="object"&&E!==null?E=ia(E):(E=Je(n)?ot:Me.current,E=Bt(t,E));var z=n.getDerivedStateFromProps,W=typeof z=="function"||typeof p.getSnapshotBeforeUpdate=="function";W||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(g!==r||w!==E)&&Sc(t,p,r,E),Ja=!1;var B=t.memoizedState;p.state=B,Sr(t,r,p,s),w=t.memoizedState,g!==r||B!==w||Ge.current||Ja?(typeof z=="function"&&(ys(t,n,z,r),w=t.memoizedState),(g=Ja||jc(t,n,g,r,B,w,E))?(W||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount()),typeof p.componentDidMount=="function"&&(t.flags|=4194308)):(typeof p.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=w),p.props=r,p.state=w,p.context=E,r=g):(typeof p.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{p=t.stateNode,Ql(a,t),g=t.memoizedProps,E=t.type===t.elementType?g:ua(t.type,g),p.props=E,W=t.pendingProps,B=p.context,w=n.contextType,typeof w=="object"&&w!==null?w=ia(w):(w=Je(n)?ot:Me.current,w=Bt(t,w));var F=n.getDerivedStateFromProps;(z=typeof F=="function"||typeof p.getSnapshotBeforeUpdate=="function")||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(g!==W||B!==w)&&Sc(t,p,r,w),Ja=!1,B=t.memoizedState,p.state=B,Sr(t,r,p,s);var $=t.memoizedState;g!==W||B!==$||Ge.current||Ja?(typeof F=="function"&&(ys(t,n,F,r),$=t.memoizedState),(E=Ja||jc(t,n,E,r,B,$,w)||!1)?(z||typeof p.UNSAFE_componentWillUpdate!="function"&&typeof p.componentWillUpdate!="function"||(typeof p.componentWillUpdate=="function"&&p.componentWillUpdate(r,$,w),typeof p.UNSAFE_componentWillUpdate=="function"&&p.UNSAFE_componentWillUpdate(r,$,w)),typeof p.componentDidUpdate=="function"&&(t.flags|=4),typeof p.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof p.componentDidUpdate!="function"||g===a.memoizedProps&&B===a.memoizedState||(t.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||g===a.memoizedProps&&B===a.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=$),p.props=r,p.state=$,p.context=w,r=E):(typeof p.componentDidUpdate!="function"||g===a.memoizedProps&&B===a.memoizedState||(t.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||g===a.memoizedProps&&B===a.memoizedState||(t.flags|=1024),r=!1)}return Cs(a,t,n,r,l,s)}function Cs(a,t,n,r,s,l){Ic(a,t);var p=(t.flags&128)!==0;if(!r&&!p)return s&&Dl(t,n,!1),Ia(a,t,l);r=t.stateNode,Km.current=t;var g=p&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,a!==null&&p?(t.child=Mt(t,a.child,null,l),t.child=Mt(t,null,g,l)):He(a,t,g,l),t.memoizedState=r.state,s&&Dl(t,n,!0),t.child}function Wc(a){var t=a.stateNode;t.pendingContext?Ol(a,t.pendingContext,t.pendingContext!==t.context):t.context&&Ol(a,t.context,!1),os(a,t.containerInfo)}function Mc(a,t,n,r,s){return Wt(),es(s),t.flags|=256,He(a,t,n,r),t.child}var ks={dehydrated:null,treeContext:null,retryLane:0};function Ns(a){return{baseLanes:a,cachePool:null,transitions:null}}function Oc(a,t,n){var r=t.pendingProps,s=xe.current,l=!1,p=(t.flags&128)!==0,g;if((g=p)||(g=a!==null&&a.memoizedState===null?!1:(s&2)!==0),g?(l=!0,t.flags&=-129):(a===null||a.memoizedState!==null)&&(s|=1),pe(xe,s&1),a===null)return Zi(t),a=t.memoizedState,a!==null&&(a=a.dehydrated,a!==null)?((t.mode&1)===0?t.lanes=1:a.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(p=r.children,a=r.fallback,l?(r=t.mode,l=t.child,p={mode:"hidden",children:p},(r&1)===0&&l!==null?(l.childLanes=0,l.pendingProps=p):l=$r(p,r,0,null),a=xt(a,r,n,null),l.return=t,a.return=t,l.sibling=a,t.child=l,t.child.memoizedState=Ns(n),t.memoizedState=ks,a):Es(t,p));if(s=a.memoizedState,s!==null&&(g=s.dehydrated,g!==null))return Qm(a,t,p,r,g,s,n);if(l){l=r.fallback,p=t.mode,s=a.child,g=s.sibling;var w={mode:"hidden",children:r.children};return(p&1)===0&&t.child!==s?(r=t.child,r.childLanes=0,r.pendingProps=w,t.deletions=null):(r=Za(s,w),r.subtreeFlags=s.subtreeFlags&14680064),g!==null?l=Za(g,l):(l=xt(l,p,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,p=a.child.memoizedState,p=p===null?Ns(n):{baseLanes:p.baseLanes|n,cachePool:null,transitions:p.transitions},l.memoizedState=p,l.childLanes=a.childLanes&~n,t.memoizedState=ks,r}return l=a.child,a=l.sibling,r=Za(l,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,a!==null&&(n=t.deletions,n===null?(t.deletions=[a],t.flags|=16):n.push(a)),t.child=r,t.memoizedState=null,r}function Es(a,t){return t=$r({mode:"visible",children:t},a.mode,0,null),t.return=a,a.child=t}function Rr(a,t,n,r){return r!==null&&es(r),Mt(t,a.child,null,n),a=Es(t,t.pendingProps.children),a.flags|=2,t.memoizedState=null,a}function Qm(a,t,n,r,s,l,p){if(n)return t.flags&256?(t.flags&=-257,r=js(Error(c(422))),Rr(a,t,p,r)):t.memoizedState!==null?(t.child=a.child,t.flags|=128,null):(l=r.fallback,s=t.mode,r=$r({mode:"visible",children:r.children},s,0,null),l=xt(l,s,p,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,(t.mode&1)!==0&&Mt(t,a.child,null,p),t.child.memoizedState=Ns(p),t.memoizedState=ks,l);if((t.mode&1)===0)return Rr(a,t,p,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var g=r.dgst;return r=g,l=Error(c(419)),r=js(l,r,void 0),Rr(a,t,p,r)}if(g=(p&a.childLanes)!==0,Ye||g){if(r=Re,r!==null){switch(p&-p){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=(s&(r.suspendedLanes|p))!==0?0:s,s!==0&&s!==l.retryLane&&(l.retryLane=s,Ra(a,s),xa(r,a,s,-1))}return Us(),r=js(Error(c(421))),Rr(a,t,p,r)}return s.data==="$?"?(t.flags|=128,t.child=a.child,t=df.bind(null,a),s._reactRetry=t,null):(a=l.treeContext,aa=_a(s.nextSibling),ea=t,ge=!0,fa=null,a!==null&&(na[ra++]=Aa,na[ra++]=Pa,na[ra++]=lt,Aa=a.id,Pa=a.overflow,lt=t),t=Es(t,r.children),t.flags|=4096,t)}function Lc(a,t,n){a.lanes|=t;var r=a.alternate;r!==null&&(r.lanes|=t),rs(a.return,t,n)}function Ts(a,t,n,r,s){var l=a.memoizedState;l===null?a.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=s)}function Dc(a,t,n){var r=t.pendingProps,s=r.revealOrder,l=r.tail;if(He(a,t,r.children,n),r=xe.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(a!==null&&(a.flags&128)!==0)e:for(a=t.child;a!==null;){if(a.tag===13)a.memoizedState!==null&&Lc(a,n,t);else if(a.tag===19)Lc(a,n,t);else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===t)break e;for(;a.sibling===null;){if(a.return===null||a.return===t)break e;a=a.return}a.sibling.return=a.return,a=a.sibling}r&=1}if(pe(xe,r),(t.mode&1)===0)t.memoizedState=null;else switch(s){case"forwards":for(n=t.child,s=null;n!==null;)a=n.alternate,a!==null&&Cr(a)===null&&(s=n),n=n.sibling;n=s,n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null),Ts(t,!1,s,n,l);break;case"backwards":for(n=null,s=t.child,t.child=null;s!==null;){if(a=s.alternate,a!==null&&Cr(a)===null){t.child=s;break}a=s.sibling,s.sibling=n,n=s,s=a}Ts(t,!0,n,null,l);break;case"together":Ts(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Br(a,t){(t.mode&1)===0&&a!==null&&(a.alternate=null,t.alternate=null,t.flags|=2)}function Ia(a,t,n){if(a!==null&&(t.dependencies=a.dependencies),ft|=t.lanes,(n&t.childLanes)===0)return null;if(a!==null&&t.child!==a.child)throw Error(c(153));if(t.child!==null){for(a=t.child,n=Za(a,a.pendingProps),t.child=n,n.return=t;a.sibling!==null;)a=a.sibling,n=n.sibling=Za(a,a.pendingProps),n.return=t;n.sibling=null}return t.child}function qm(a,t,n){switch(t.tag){case 3:Wc(t),Wt();break;case 5:Zl(t);break;case 1:Je(t.type)&&ur(t);break;case 4:os(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,s=t.memoizedProps.value;pe(vr,r._currentValue),r._currentValue=s;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(pe(xe,xe.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?Oc(a,t,n):(pe(xe,xe.current&1),a=Ia(a,t,n),a!==null?a.sibling:null);pe(xe,xe.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(a.flags&128)!==0){if(r)return Dc(a,t,n);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),pe(xe,xe.current),r)break;return null;case 22:case 23:return t.lanes=0,Bc(a,t,n)}return Ia(a,t,n)}var Fc,As,Hc,_c;Fc=function(a,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)a.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},As=function(){},Hc=function(a,t,n,r){var s=a.memoizedProps;if(s!==r){a=t.stateNode,pt(wa.current);var l=null;switch(n){case"input":s=ri(a,s),r=ri(a,r),l=[];break;case"select":s=U({},s,{value:void 0}),r=U({},r,{value:void 0}),l=[];break;case"textarea":s=oi(a,s),r=oi(a,r),l=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(a.onclick=pr)}ci(n,r);var p;n=null;for(E in s)if(!r.hasOwnProperty(E)&&s.hasOwnProperty(E)&&s[E]!=null)if(E==="style"){var g=s[E];for(p in g)g.hasOwnProperty(p)&&(n||(n={}),n[p]="")}else E!=="dangerouslySetInnerHTML"&&E!=="children"&&E!=="suppressContentEditableWarning"&&E!=="suppressHydrationWarning"&&E!=="autoFocus"&&(m.hasOwnProperty(E)?l||(l=[]):(l=l||[]).push(E,null));for(E in r){var w=r[E];if(g=s!=null?s[E]:void 0,r.hasOwnProperty(E)&&w!==g&&(w!=null||g!=null))if(E==="style")if(g){for(p in g)!g.hasOwnProperty(p)||w&&w.hasOwnProperty(p)||(n||(n={}),n[p]="");for(p in w)w.hasOwnProperty(p)&&g[p]!==w[p]&&(n||(n={}),n[p]=w[p])}else n||(l||(l=[]),l.push(E,n)),n=w;else E==="dangerouslySetInnerHTML"?(w=w?w.__html:void 0,g=g?g.__html:void 0,w!=null&&g!==w&&(l=l||[]).push(E,w)):E==="children"?typeof w!="string"&&typeof w!="number"||(l=l||[]).push(E,""+w):E!=="suppressContentEditableWarning"&&E!=="suppressHydrationWarning"&&(m.hasOwnProperty(E)?(w!=null&&E==="onScroll"&&me("scroll",a),l||g===w||(l=[])):(l=l||[]).push(E,w))}n&&(l=l||[]).push("style",n);var E=l;(t.updateQueue=E)&&(t.flags|=4)}},_c=function(a,t,n,r){n!==r&&(t.flags|=4)};function An(a,t){if(!ge)switch(a.tailMode){case"hidden":t=a.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?a.tail=null:n.sibling=null;break;case"collapsed":n=a.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||a.tail===null?a.tail=null:a.tail.sibling=null:r.sibling=null}}function Le(a){var t=a.alternate!==null&&a.alternate.child===a.child,n=0,r=0;if(t)for(var s=a.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=a,s=s.sibling;else for(s=a.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=a,s=s.sibling;return a.subtreeFlags|=r,a.childLanes=n,t}function Xm(a,t,n){var r=t.pendingProps;switch(qi(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Le(t),null;case 1:return Je(t.type)&&fr(),Le(t),null;case 3:return r=t.stateNode,Dt(),fe(Ge),fe(Me),ds(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(a===null||a.child===null)&&(br(t)?t.flags|=4:a===null||a.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,fa!==null&&(Fs(fa),fa=null))),As(a,t),Le(t),null;case 5:ls(t);var s=pt(Cn.current);if(n=t.type,a!==null&&t.stateNode!=null)Hc(a,t,n,r,s),a.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(c(166));return Le(t),null}if(a=pt(wa.current),br(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[ja]=t,r[yn]=l,a=(t.mode&1)!==0,n){case"dialog":me("cancel",r),me("close",r);break;case"iframe":case"object":case"embed":me("load",r);break;case"video":case"audio":for(s=0;s<gn.length;s++)me(gn[s],r);break;case"source":me("error",r);break;case"img":case"image":case"link":me("error",r),me("load",r);break;case"details":me("toggle",r);break;case"input":wo(r,l),me("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},me("invalid",r);break;case"textarea":ko(r,l),me("invalid",r)}ci(n,l),s=null;for(var p in l)if(l.hasOwnProperty(p)){var g=l[p];p==="children"?typeof g=="string"?r.textContent!==g&&(l.suppressHydrationWarning!==!0&&dr(r.textContent,g,a),s=["children",g]):typeof g=="number"&&r.textContent!==""+g&&(l.suppressHydrationWarning!==!0&&dr(r.textContent,g,a),s=["children",""+g]):m.hasOwnProperty(p)&&g!=null&&p==="onScroll"&&me("scroll",r)}switch(n){case"input":Hn(r),Co(r,l,!0);break;case"textarea":Hn(r),Eo(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=pr)}r=s,t.updateQueue=r,r!==null&&(t.flags|=4)}else{p=s.nodeType===9?s:s.ownerDocument,a==="http://www.w3.org/1999/xhtml"&&(a=To(n)),a==="http://www.w3.org/1999/xhtml"?n==="script"?(a=p.createElement("div"),a.innerHTML="<script><\/script>",a=a.removeChild(a.firstChild)):typeof r.is=="string"?a=p.createElement(n,{is:r.is}):(a=p.createElement(n),n==="select"&&(p=a,r.multiple?p.multiple=!0:r.size&&(p.size=r.size))):a=p.createElementNS(a,n),a[ja]=t,a[yn]=r,Fc(a,t,!1,!1),t.stateNode=a;e:{switch(p=di(n,r),n){case"dialog":me("cancel",a),me("close",a),s=r;break;case"iframe":case"object":case"embed":me("load",a),s=r;break;case"video":case"audio":for(s=0;s<gn.length;s++)me(gn[s],a);s=r;break;case"source":me("error",a),s=r;break;case"img":case"image":case"link":me("error",a),me("load",a),s=r;break;case"details":me("toggle",a),s=r;break;case"input":wo(a,r),s=ri(a,r),me("invalid",a);break;case"option":s=r;break;case"select":a._wrapperState={wasMultiple:!!r.multiple},s=U({},r,{value:void 0}),me("invalid",a);break;case"textarea":ko(a,r),s=oi(a,r),me("invalid",a);break;default:s=r}ci(n,s),g=s;for(l in g)if(g.hasOwnProperty(l)){var w=g[l];l==="style"?Ro(a,w):l==="dangerouslySetInnerHTML"?(w=w?w.__html:void 0,w!=null&&Ao(a,w)):l==="children"?typeof w=="string"?(n!=="textarea"||w!=="")&&Qt(a,w):typeof w=="number"&&Qt(a,""+w):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(m.hasOwnProperty(l)?w!=null&&l==="onScroll"&&me("scroll",a):w!=null&&L(a,l,w,p))}switch(n){case"input":Hn(a),Co(a,r,!1);break;case"textarea":Hn(a),Eo(a);break;case"option":r.value!=null&&a.setAttribute("value",""+le(r.value));break;case"select":a.multiple=!!r.multiple,l=r.value,l!=null?vt(a,!!r.multiple,l,!1):r.defaultValue!=null&&vt(a,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(a.onclick=pr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Le(t),null;case 6:if(a&&t.stateNode!=null)_c(a,t,a.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(c(166));if(n=pt(Cn.current),pt(wa.current),br(t)){if(r=t.stateNode,n=t.memoizedProps,r[ja]=t,(l=r.nodeValue!==n)&&(a=ea,a!==null))switch(a.tag){case 3:dr(r.nodeValue,n,(a.mode&1)!==0);break;case 5:a.memoizedProps.suppressHydrationWarning!==!0&&dr(r.nodeValue,n,(a.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[ja]=t,t.stateNode=r}return Le(t),null;case 13:if(fe(xe),r=t.memoizedState,a===null||a.memoizedState!==null&&a.memoizedState.dehydrated!==null){if(ge&&aa!==null&&(t.mode&1)!==0&&(t.flags&128)===0)Gl(),Wt(),t.flags|=98560,l=!1;else if(l=br(t),r!==null&&r.dehydrated!==null){if(a===null){if(!l)throw Error(c(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(c(317));l[ja]=t}else Wt(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Le(t),l=!1}else fa!==null&&(Fs(fa),fa=null),l=!0;if(!l)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(a!==null&&a.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(a===null||(xe.current&1)!==0?Te===0&&(Te=3):Us())),t.updateQueue!==null&&(t.flags|=4),Le(t),null);case 4:return Dt(),As(a,t),a===null&&xn(t.stateNode.containerInfo),Le(t),null;case 10:return ns(t.type._context),Le(t),null;case 17:return Je(t.type)&&fr(),Le(t),null;case 19:if(fe(xe),l=t.memoizedState,l===null)return Le(t),null;if(r=(t.flags&128)!==0,p=l.rendering,p===null)if(r)An(l,!1);else{if(Te!==0||a!==null&&(a.flags&128)!==0)for(a=t.child;a!==null;){if(p=Cr(a),p!==null){for(t.flags|=128,An(l,!1),r=p.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,a=r,l.flags&=14680066,p=l.alternate,p===null?(l.childLanes=0,l.lanes=a,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=p.childLanes,l.lanes=p.lanes,l.child=p.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=p.memoizedProps,l.memoizedState=p.memoizedState,l.updateQueue=p.updateQueue,l.type=p.type,a=p.dependencies,l.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),n=n.sibling;return pe(xe,xe.current&1|2),t.child}a=a.sibling}l.tail!==null&&je()>Ut&&(t.flags|=128,r=!0,An(l,!1),t.lanes=4194304)}else{if(!r)if(a=Cr(p),a!==null){if(t.flags|=128,r=!0,n=a.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),An(l,!0),l.tail===null&&l.tailMode==="hidden"&&!p.alternate&&!ge)return Le(t),null}else 2*je()-l.renderingStartTime>Ut&&n!==1073741824&&(t.flags|=128,r=!0,An(l,!1),t.lanes=4194304);l.isBackwards?(p.sibling=t.child,t.child=p):(n=l.last,n!==null?n.sibling=p:t.child=p,l.last=p)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=je(),t.sibling=null,n=xe.current,pe(xe,r?n&1|2:n&1),t):(Le(t),null);case 22:case 23:return _s(),r=t.memoizedState!==null,a!==null&&a.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(ta&1073741824)!==0&&(Le(t),t.subtreeFlags&6&&(t.flags|=8192)):Le(t),null;case 24:return null;case 25:return null}throw Error(c(156,t.tag))}function Zm(a,t){switch(qi(t),t.tag){case 1:return Je(t.type)&&fr(),a=t.flags,a&65536?(t.flags=a&-65537|128,t):null;case 3:return Dt(),fe(Ge),fe(Me),ds(),a=t.flags,(a&65536)!==0&&(a&128)===0?(t.flags=a&-65537|128,t):null;case 5:return ls(t),null;case 13:if(fe(xe),a=t.memoizedState,a!==null&&a.dehydrated!==null){if(t.alternate===null)throw Error(c(340));Wt()}return a=t.flags,a&65536?(t.flags=a&-65537|128,t):null;case 19:return fe(xe),null;case 4:return Dt(),null;case 10:return ns(t.type._context),null;case 22:case 23:return _s(),null;case 24:return null;default:return null}}var Ir=!1,De=!1,ef=typeof WeakSet=="function"?WeakSet:Set,_=null;function Ht(a,t){var n=a.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ve(a,t,r)}else n.current=null}function Ps(a,t,n){try{n()}catch(r){ve(a,t,r)}}var Uc=!1;function af(a,t){if(_i=Zn,a=jl(),zi(a)){if("selectionStart"in a)var n={start:a.selectionStart,end:a.selectionEnd};else e:{n=(n=a.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var p=0,g=-1,w=-1,E=0,z=0,W=a,B=null;a:for(;;){for(var F;W!==n||s!==0&&W.nodeType!==3||(g=p+s),W!==l||r!==0&&W.nodeType!==3||(w=p+r),W.nodeType===3&&(p+=W.nodeValue.length),(F=W.firstChild)!==null;)B=W,W=F;for(;;){if(W===a)break a;if(B===n&&++E===s&&(g=p),B===l&&++z===r&&(w=p),(F=W.nextSibling)!==null)break;W=B,B=W.parentNode}W=F}n=g===-1||w===-1?null:{start:g,end:w}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ui={focusedElem:a,selectionRange:n},Zn=!1,_=t;_!==null;)if(t=_,a=t.child,(t.subtreeFlags&1028)!==0&&a!==null)a.return=t,_=a;else for(;_!==null;){t=_;try{var $=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if($!==null){var G=$.memoizedProps,we=$.memoizedState,k=t.stateNode,S=k.getSnapshotBeforeUpdate(t.elementType===t.type?G:ua(t.type,G),we);k.__reactInternalSnapshotBeforeUpdate=S}break;case 3:var N=t.stateNode.containerInfo;N.nodeType===1?N.textContent="":N.nodeType===9&&N.documentElement&&N.removeChild(N.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(c(163))}}catch(O){ve(t,t.return,O)}if(a=t.sibling,a!==null){a.return=t.return,_=a;break}_=t.return}return $=Uc,Uc=!1,$}function Pn(a,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&a)===a){var l=s.destroy;s.destroy=void 0,l!==void 0&&Ps(t,n,l)}s=s.next}while(s!==r)}}function zr(a,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&a)===a){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Rs(a){var t=a.ref;if(t!==null){var n=a.stateNode;switch(a.tag){case 5:a=n;break;default:a=n}typeof t=="function"?t(a):t.current=a}}function $c(a){var t=a.alternate;t!==null&&(a.alternate=null,$c(t)),a.child=null,a.deletions=null,a.sibling=null,a.tag===5&&(t=a.stateNode,t!==null&&(delete t[ja],delete t[yn],delete t[Yi],delete t[Om],delete t[Lm])),a.stateNode=null,a.return=null,a.dependencies=null,a.memoizedProps=null,a.memoizedState=null,a.pendingProps=null,a.stateNode=null,a.updateQueue=null}function Gc(a){return a.tag===5||a.tag===3||a.tag===4}function Jc(a){e:for(;;){for(;a.sibling===null;){if(a.return===null||Gc(a.return))return null;a=a.return}for(a.sibling.return=a.return,a=a.sibling;a.tag!==5&&a.tag!==6&&a.tag!==18;){if(a.flags&2||a.child===null||a.tag===4)continue e;a.child.return=a,a=a.child}if(!(a.flags&2))return a.stateNode}}function Bs(a,t,n){var r=a.tag;if(r===5||r===6)a=a.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(a,t):n.insertBefore(a,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(a,n)):(t=n,t.appendChild(a)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=pr));else if(r!==4&&(a=a.child,a!==null))for(Bs(a,t,n),a=a.sibling;a!==null;)Bs(a,t,n),a=a.sibling}function Is(a,t,n){var r=a.tag;if(r===5||r===6)a=a.stateNode,t?n.insertBefore(a,t):n.appendChild(a);else if(r!==4&&(a=a.child,a!==null))for(Is(a,t,n),a=a.sibling;a!==null;)Is(a,t,n),a=a.sibling}var ze=null,ha=!1;function Va(a,t,n){for(n=n.child;n!==null;)Yc(a,t,n),n=n.sibling}function Yc(a,t,n){if(va&&typeof va.onCommitFiberUnmount=="function")try{va.onCommitFiberUnmount(Yn,n)}catch{}switch(n.tag){case 5:De||Ht(n,t);case 6:var r=ze,s=ha;ze=null,Va(a,t,n),ze=r,ha=s,ze!==null&&(ha?(a=ze,n=n.stateNode,a.nodeType===8?a.parentNode.removeChild(n):a.removeChild(n)):ze.removeChild(n.stateNode));break;case 18:ze!==null&&(ha?(a=ze,n=n.stateNode,a.nodeType===8?Ji(a.parentNode,n):a.nodeType===1&&Ji(a,n),ln(a)):Ji(ze,n.stateNode));break;case 4:r=ze,s=ha,ze=n.stateNode.containerInfo,ha=!0,Va(a,t,n),ze=r,ha=s;break;case 0:case 11:case 14:case 15:if(!De&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var l=s,p=l.destroy;l=l.tag,p!==void 0&&((l&2)!==0||(l&4)!==0)&&Ps(n,t,p),s=s.next}while(s!==r)}Va(a,t,n);break;case 1:if(!De&&(Ht(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(g){ve(n,t,g)}Va(a,t,n);break;case 21:Va(a,t,n);break;case 22:n.mode&1?(De=(r=De)||n.memoizedState!==null,Va(a,t,n),De=r):Va(a,t,n);break;default:Va(a,t,n)}}function Vc(a){var t=a.updateQueue;if(t!==null){a.updateQueue=null;var n=a.stateNode;n===null&&(n=a.stateNode=new ef),t.forEach(function(r){var s=pf.bind(null,a,r);n.has(r)||(n.add(r),r.then(s,s))})}}function ga(a,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var l=a,p=t,g=p;e:for(;g!==null;){switch(g.tag){case 5:ze=g.stateNode,ha=!1;break e;case 3:ze=g.stateNode.containerInfo,ha=!0;break e;case 4:ze=g.stateNode.containerInfo,ha=!0;break e}g=g.return}if(ze===null)throw Error(c(160));Yc(l,p,s),ze=null,ha=!1;var w=s.alternate;w!==null&&(w.return=null),s.return=null}catch(E){ve(s,t,E)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Kc(t,a),t=t.sibling}function Kc(a,t){var n=a.alternate,r=a.flags;switch(a.tag){case 0:case 11:case 14:case 15:if(ga(t,a),Ca(a),r&4){try{Pn(3,a,a.return),zr(3,a)}catch(G){ve(a,a.return,G)}try{Pn(5,a,a.return)}catch(G){ve(a,a.return,G)}}break;case 1:ga(t,a),Ca(a),r&512&&n!==null&&Ht(n,n.return);break;case 5:if(ga(t,a),Ca(a),r&512&&n!==null&&Ht(n,n.return),a.flags&32){var s=a.stateNode;try{Qt(s,"")}catch(G){ve(a,a.return,G)}}if(r&4&&(s=a.stateNode,s!=null)){var l=a.memoizedProps,p=n!==null?n.memoizedProps:l,g=a.type,w=a.updateQueue;if(a.updateQueue=null,w!==null)try{g==="input"&&l.type==="radio"&&l.name!=null&&So(s,l),di(g,p);var E=di(g,l);for(p=0;p<w.length;p+=2){var z=w[p],W=w[p+1];z==="style"?Ro(s,W):z==="dangerouslySetInnerHTML"?Ao(s,W):z==="children"?Qt(s,W):L(s,z,W,E)}switch(g){case"input":ii(s,l);break;case"textarea":No(s,l);break;case"select":var B=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!l.multiple;var F=l.value;F!=null?vt(s,!!l.multiple,F,!1):B!==!!l.multiple&&(l.defaultValue!=null?vt(s,!!l.multiple,l.defaultValue,!0):vt(s,!!l.multiple,l.multiple?[]:"",!1))}s[yn]=l}catch(G){ve(a,a.return,G)}}break;case 6:if(ga(t,a),Ca(a),r&4){if(a.stateNode===null)throw Error(c(162));s=a.stateNode,l=a.memoizedProps;try{s.nodeValue=l}catch(G){ve(a,a.return,G)}}break;case 3:if(ga(t,a),Ca(a),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ln(t.containerInfo)}catch(G){ve(a,a.return,G)}break;case 4:ga(t,a),Ca(a);break;case 13:ga(t,a),Ca(a),s=a.child,s.flags&8192&&(l=s.memoizedState!==null,s.stateNode.isHidden=l,!l||s.alternate!==null&&s.alternate.memoizedState!==null||(Ms=je())),r&4&&Vc(a);break;case 22:if(z=n!==null&&n.memoizedState!==null,a.mode&1?(De=(E=De)||z,ga(t,a),De=E):ga(t,a),Ca(a),r&8192){if(E=a.memoizedState!==null,(a.stateNode.isHidden=E)&&!z&&(a.mode&1)!==0)for(_=a,z=a.child;z!==null;){for(W=_=z;_!==null;){switch(B=_,F=B.child,B.tag){case 0:case 11:case 14:case 15:Pn(4,B,B.return);break;case 1:Ht(B,B.return);var $=B.stateNode;if(typeof $.componentWillUnmount=="function"){r=B,n=B.return;try{t=r,$.props=t.memoizedProps,$.state=t.memoizedState,$.componentWillUnmount()}catch(G){ve(r,n,G)}}break;case 5:Ht(B,B.return);break;case 22:if(B.memoizedState!==null){Xc(W);continue}}F!==null?(F.return=B,_=F):Xc(W)}z=z.sibling}e:for(z=null,W=a;;){if(W.tag===5){if(z===null){z=W;try{s=W.stateNode,E?(l=s.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(g=W.stateNode,w=W.memoizedProps.style,p=w!=null&&w.hasOwnProperty("display")?w.display:null,g.style.display=Po("display",p))}catch(G){ve(a,a.return,G)}}}else if(W.tag===6){if(z===null)try{W.stateNode.nodeValue=E?"":W.memoizedProps}catch(G){ve(a,a.return,G)}}else if((W.tag!==22&&W.tag!==23||W.memoizedState===null||W===a)&&W.child!==null){W.child.return=W,W=W.child;continue}if(W===a)break e;for(;W.sibling===null;){if(W.return===null||W.return===a)break e;z===W&&(z=null),W=W.return}z===W&&(z=null),W.sibling.return=W.return,W=W.sibling}}break;case 19:ga(t,a),Ca(a),r&4&&Vc(a);break;case 21:break;default:ga(t,a),Ca(a)}}function Ca(a){var t=a.flags;if(t&2){try{e:{for(var n=a.return;n!==null;){if(Gc(n)){var r=n;break e}n=n.return}throw Error(c(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(Qt(s,""),r.flags&=-33);var l=Jc(a);Is(a,l,s);break;case 3:case 4:var p=r.stateNode.containerInfo,g=Jc(a);Bs(a,g,p);break;default:throw Error(c(161))}}catch(w){ve(a,a.return,w)}a.flags&=-3}t&4096&&(a.flags&=-4097)}function tf(a,t,n){_=a,Qc(a)}function Qc(a,t,n){for(var r=(a.mode&1)!==0;_!==null;){var s=_,l=s.child;if(s.tag===22&&r){var p=s.memoizedState!==null||Ir;if(!p){var g=s.alternate,w=g!==null&&g.memoizedState!==null||De;g=Ir;var E=De;if(Ir=p,(De=w)&&!E)for(_=s;_!==null;)p=_,w=p.child,p.tag===22&&p.memoizedState!==null?Zc(s):w!==null?(w.return=p,_=w):Zc(s);for(;l!==null;)_=l,Qc(l),l=l.sibling;_=s,Ir=g,De=E}qc(a)}else(s.subtreeFlags&8772)!==0&&l!==null?(l.return=s,_=l):qc(a)}}function qc(a){for(;_!==null;){var t=_;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:De||zr(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!De)if(n===null)r.componentDidMount();else{var s=t.elementType===t.type?n.memoizedProps:ua(t.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&Xl(t,l,r);break;case 3:var p=t.updateQueue;if(p!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Xl(t,p,n)}break;case 5:var g=t.stateNode;if(n===null&&t.flags&4){n=g;var w=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":w.autoFocus&&n.focus();break;case"img":w.src&&(n.src=w.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var E=t.alternate;if(E!==null){var z=E.memoizedState;if(z!==null){var W=z.dehydrated;W!==null&&ln(W)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(c(163))}De||t.flags&512&&Rs(t)}catch(B){ve(t,t.return,B)}}if(t===a){_=null;break}if(n=t.sibling,n!==null){n.return=t.return,_=n;break}_=t.return}}function Xc(a){for(;_!==null;){var t=_;if(t===a){_=null;break}var n=t.sibling;if(n!==null){n.return=t.return,_=n;break}_=t.return}}function Zc(a){for(;_!==null;){var t=_;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{zr(4,t)}catch(w){ve(t,n,w)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var s=t.return;try{r.componentDidMount()}catch(w){ve(t,s,w)}}var l=t.return;try{Rs(t)}catch(w){ve(t,l,w)}break;case 5:var p=t.return;try{Rs(t)}catch(w){ve(t,p,w)}}}catch(w){ve(t,t.return,w)}if(t===a){_=null;break}var g=t.sibling;if(g!==null){g.return=t.return,_=g;break}_=t.return}}var nf=Math.ceil,Wr=Q.ReactCurrentDispatcher,zs=Q.ReactCurrentOwner,oa=Q.ReactCurrentBatchConfig,ne=0,Re=null,Se=null,We=0,ta=0,_t=Ua(0),Te=0,Rn=null,ft=0,Mr=0,Ws=0,Bn=null,Ve=null,Ms=0,Ut=1/0,za=null,Or=!1,Os=null,Ka=null,Lr=!1,Qa=null,Dr=0,In=0,Ls=null,Fr=-1,Hr=0;function _e(){return(ne&6)!==0?je():Fr!==-1?Fr:Fr=je()}function qa(a){return(a.mode&1)===0?1:(ne&2)!==0&&We!==0?We&-We:Fm.transition!==null?(Hr===0&&(Hr=Jo()),Hr):(a=ce,a!==0||(a=window.event,a=a===void 0?16:al(a.type)),a)}function xa(a,t,n,r){if(50<In)throw In=0,Ls=null,Error(c(185));tn(a,n,r),((ne&2)===0||a!==Re)&&(a===Re&&((ne&2)===0&&(Mr|=n),Te===4&&Xa(a,We)),Ke(a,r),n===1&&ne===0&&(t.mode&1)===0&&(Ut=je()+500,hr&&Ga()))}function Ke(a,t){var n=a.callbackNode;Fp(a,t);var r=Qn(a,a===Re?We:0);if(r===0)n!==null&&Uo(n),a.callbackNode=null,a.callbackPriority=0;else if(t=r&-r,a.callbackPriority!==t){if(n!=null&&Uo(n),t===1)a.tag===0?Dm(ad.bind(null,a)):Fl(ad.bind(null,a)),Wm(function(){(ne&6)===0&&Ga()}),n=null;else{switch(Yo(r)){case 1:n=xi;break;case 4:n=$o;break;case 16:n=Jn;break;case 536870912:n=Go;break;default:n=Jn}n=cd(n,ed.bind(null,a))}a.callbackPriority=t,a.callbackNode=n}}function ed(a,t){if(Fr=-1,Hr=0,(ne&6)!==0)throw Error(c(327));var n=a.callbackNode;if($t()&&a.callbackNode!==n)return null;var r=Qn(a,a===Re?We:0);if(r===0)return null;if((r&30)!==0||(r&a.expiredLanes)!==0||t)t=_r(a,r);else{t=r;var s=ne;ne|=2;var l=nd();(Re!==a||We!==t)&&(za=null,Ut=je()+500,ht(a,t));do try{of();break}catch(g){td(a,g)}while(!0);ts(),Wr.current=l,ne=s,Se!==null?t=0:(Re=null,We=0,t=Te)}if(t!==0){if(t===2&&(s=bi(a),s!==0&&(r=s,t=Ds(a,s))),t===1)throw n=Rn,ht(a,0),Xa(a,r),Ke(a,je()),n;if(t===6)Xa(a,r);else{if(s=a.current.alternate,(r&30)===0&&!rf(s)&&(t=_r(a,r),t===2&&(l=bi(a),l!==0&&(r=l,t=Ds(a,l))),t===1))throw n=Rn,ht(a,0),Xa(a,r),Ke(a,je()),n;switch(a.finishedWork=s,a.finishedLanes=r,t){case 0:case 1:throw Error(c(345));case 2:gt(a,Ve,za);break;case 3:if(Xa(a,r),(r&130023424)===r&&(t=Ms+500-je(),10<t)){if(Qn(a,0)!==0)break;if(s=a.suspendedLanes,(s&r)!==r){_e(),a.pingedLanes|=a.suspendedLanes&s;break}a.timeoutHandle=Gi(gt.bind(null,a,Ve,za),t);break}gt(a,Ve,za);break;case 4:if(Xa(a,r),(r&4194240)===r)break;for(t=a.eventTimes,s=-1;0<r;){var p=31-pa(r);l=1<<p,p=t[p],p>s&&(s=p),r&=~l}if(r=s,r=je()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*nf(r/1960))-r,10<r){a.timeoutHandle=Gi(gt.bind(null,a,Ve,za),r);break}gt(a,Ve,za);break;case 5:gt(a,Ve,za);break;default:throw Error(c(329))}}}return Ke(a,je()),a.callbackNode===n?ed.bind(null,a):null}function Ds(a,t){var n=Bn;return a.current.memoizedState.isDehydrated&&(ht(a,t).flags|=256),a=_r(a,t),a!==2&&(t=Ve,Ve=n,t!==null&&Fs(t)),a}function Fs(a){Ve===null?Ve=a:Ve.push.apply(Ve,a)}function rf(a){for(var t=a;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],l=s.getSnapshot;s=s.value;try{if(!ma(l(),s))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===a)break;for(;t.sibling===null;){if(t.return===null||t.return===a)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Xa(a,t){for(t&=~Ws,t&=~Mr,a.suspendedLanes|=t,a.pingedLanes&=~t,a=a.expirationTimes;0<t;){var n=31-pa(t),r=1<<n;a[n]=-1,t&=~r}}function ad(a){if((ne&6)!==0)throw Error(c(327));$t();var t=Qn(a,0);if((t&1)===0)return Ke(a,je()),null;var n=_r(a,t);if(a.tag!==0&&n===2){var r=bi(a);r!==0&&(t=r,n=Ds(a,r))}if(n===1)throw n=Rn,ht(a,0),Xa(a,t),Ke(a,je()),n;if(n===6)throw Error(c(345));return a.finishedWork=a.current.alternate,a.finishedLanes=t,gt(a,Ve,za),Ke(a,je()),null}function Hs(a,t){var n=ne;ne|=1;try{return a(t)}finally{ne=n,ne===0&&(Ut=je()+500,hr&&Ga())}}function ut(a){Qa!==null&&Qa.tag===0&&(ne&6)===0&&$t();var t=ne;ne|=1;var n=oa.transition,r=ce;try{if(oa.transition=null,ce=1,a)return a()}finally{ce=r,oa.transition=n,ne=t,(ne&6)===0&&Ga()}}function _s(){ta=_t.current,fe(_t)}function ht(a,t){a.finishedWork=null,a.finishedLanes=0;var n=a.timeoutHandle;if(n!==-1&&(a.timeoutHandle=-1,zm(n)),Se!==null)for(n=Se.return;n!==null;){var r=n;switch(qi(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&fr();break;case 3:Dt(),fe(Ge),fe(Me),ds();break;case 5:ls(r);break;case 4:Dt();break;case 13:fe(xe);break;case 19:fe(xe);break;case 10:ns(r.type._context);break;case 22:case 23:_s()}n=n.return}if(Re=a,Se=a=Za(a.current,null),We=ta=t,Te=0,Rn=null,Ws=Mr=ft=0,Ve=Bn=null,dt!==null){for(t=0;t<dt.length;t++)if(n=dt[t],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,l=n.pending;if(l!==null){var p=l.next;l.next=s,r.next=p}n.pending=r}dt=null}return a}function td(a,t){do{var n=Se;try{if(ts(),kr.current=Ar,Nr){for(var r=be.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}Nr=!1}if(mt=0,Pe=Ee=be=null,kn=!1,Nn=0,zs.current=null,n===null||n.return===null){Te=1,Rn=t,Se=null;break}e:{var l=a,p=n.return,g=n,w=t;if(t=We,g.flags|=32768,w!==null&&typeof w=="object"&&typeof w.then=="function"){var E=w,z=g,W=z.tag;if((z.mode&1)===0&&(W===0||W===11||W===15)){var B=z.alternate;B?(z.updateQueue=B.updateQueue,z.memoizedState=B.memoizedState,z.lanes=B.lanes):(z.updateQueue=null,z.memoizedState=null)}var F=Ec(p);if(F!==null){F.flags&=-257,Tc(F,p,g,l,t),F.mode&1&&Nc(l,E,t),t=F,w=E;var $=t.updateQueue;if($===null){var G=new Set;G.add(w),t.updateQueue=G}else $.add(w);break e}else{if((t&1)===0){Nc(l,E,t),Us();break e}w=Error(c(426))}}else if(ge&&g.mode&1){var we=Ec(p);if(we!==null){(we.flags&65536)===0&&(we.flags|=256),Tc(we,p,g,l,t),es(Ft(w,g));break e}}l=w=Ft(w,g),Te!==4&&(Te=2),Bn===null?Bn=[l]:Bn.push(l),l=p;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var k=Cc(l,w,t);ql(l,k);break e;case 1:g=w;var S=l.type,N=l.stateNode;if((l.flags&128)===0&&(typeof S.getDerivedStateFromError=="function"||N!==null&&typeof N.componentDidCatch=="function"&&(Ka===null||!Ka.has(N)))){l.flags|=65536,t&=-t,l.lanes|=t;var O=kc(l,g,t);ql(l,O);break e}}l=l.return}while(l!==null)}id(n)}catch(J){t=J,Se===n&&n!==null&&(Se=n=n.return);continue}break}while(!0)}function nd(){var a=Wr.current;return Wr.current=Ar,a===null?Ar:a}function Us(){(Te===0||Te===3||Te===2)&&(Te=4),Re===null||(ft&268435455)===0&&(Mr&268435455)===0||Xa(Re,We)}function _r(a,t){var n=ne;ne|=2;var r=nd();(Re!==a||We!==t)&&(za=null,ht(a,t));do try{sf();break}catch(s){td(a,s)}while(!0);if(ts(),ne=n,Wr.current=r,Se!==null)throw Error(c(261));return Re=null,We=0,Te}function sf(){for(;Se!==null;)rd(Se)}function of(){for(;Se!==null&&!Rp();)rd(Se)}function rd(a){var t=ld(a.alternate,a,ta);a.memoizedProps=a.pendingProps,t===null?id(a):Se=t,zs.current=null}function id(a){var t=a;do{var n=t.alternate;if(a=t.return,(t.flags&32768)===0){if(n=Xm(n,t,ta),n!==null){Se=n;return}}else{if(n=Zm(n,t),n!==null){n.flags&=32767,Se=n;return}if(a!==null)a.flags|=32768,a.subtreeFlags=0,a.deletions=null;else{Te=6,Se=null;return}}if(t=t.sibling,t!==null){Se=t;return}Se=t=a}while(t!==null);Te===0&&(Te=5)}function gt(a,t,n){var r=ce,s=oa.transition;try{oa.transition=null,ce=1,lf(a,t,n,r)}finally{oa.transition=s,ce=r}return null}function lf(a,t,n,r){do $t();while(Qa!==null);if((ne&6)!==0)throw Error(c(327));n=a.finishedWork;var s=a.finishedLanes;if(n===null)return null;if(a.finishedWork=null,a.finishedLanes=0,n===a.current)throw Error(c(177));a.callbackNode=null,a.callbackPriority=0;var l=n.lanes|n.childLanes;if(Hp(a,l),a===Re&&(Se=Re=null,We=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Lr||(Lr=!0,cd(Jn,function(){return $t(),null})),l=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||l){l=oa.transition,oa.transition=null;var p=ce;ce=1;var g=ne;ne|=4,zs.current=null,af(a,n),Kc(n,a),Em(Ui),Zn=!!_i,Ui=_i=null,a.current=n,tf(n),Bp(),ne=g,ce=p,oa.transition=l}else a.current=n;if(Lr&&(Lr=!1,Qa=a,Dr=s),l=a.pendingLanes,l===0&&(Ka=null),Wp(n.stateNode),Ke(a,je()),t!==null)for(r=a.onRecoverableError,n=0;n<t.length;n++)s=t[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(Or)throw Or=!1,a=Os,Os=null,a;return(Dr&1)!==0&&a.tag!==0&&$t(),l=a.pendingLanes,(l&1)!==0?a===Ls?In++:(In=0,Ls=a):In=0,Ga(),null}function $t(){if(Qa!==null){var a=Yo(Dr),t=oa.transition,n=ce;try{if(oa.transition=null,ce=16>a?16:a,Qa===null)var r=!1;else{if(a=Qa,Qa=null,Dr=0,(ne&6)!==0)throw Error(c(331));var s=ne;for(ne|=4,_=a.current;_!==null;){var l=_,p=l.child;if((_.flags&16)!==0){var g=l.deletions;if(g!==null){for(var w=0;w<g.length;w++){var E=g[w];for(_=E;_!==null;){var z=_;switch(z.tag){case 0:case 11:case 15:Pn(8,z,l)}var W=z.child;if(W!==null)W.return=z,_=W;else for(;_!==null;){z=_;var B=z.sibling,F=z.return;if($c(z),z===E){_=null;break}if(B!==null){B.return=F,_=B;break}_=F}}}var $=l.alternate;if($!==null){var G=$.child;if(G!==null){$.child=null;do{var we=G.sibling;G.sibling=null,G=we}while(G!==null)}}_=l}}if((l.subtreeFlags&2064)!==0&&p!==null)p.return=l,_=p;else e:for(;_!==null;){if(l=_,(l.flags&2048)!==0)switch(l.tag){case 0:case 11:case 15:Pn(9,l,l.return)}var k=l.sibling;if(k!==null){k.return=l.return,_=k;break e}_=l.return}}var S=a.current;for(_=S;_!==null;){p=_;var N=p.child;if((p.subtreeFlags&2064)!==0&&N!==null)N.return=p,_=N;else e:for(p=S;_!==null;){if(g=_,(g.flags&2048)!==0)try{switch(g.tag){case 0:case 11:case 15:zr(9,g)}}catch(J){ve(g,g.return,J)}if(g===p){_=null;break e}var O=g.sibling;if(O!==null){O.return=g.return,_=O;break e}_=g.return}}if(ne=s,Ga(),va&&typeof va.onPostCommitFiberRoot=="function")try{va.onPostCommitFiberRoot(Yn,a)}catch{}r=!0}return r}finally{ce=n,oa.transition=t}}return!1}function sd(a,t,n){t=Ft(n,t),t=Cc(a,t,1),a=Ya(a,t,1),t=_e(),a!==null&&(tn(a,1,t),Ke(a,t))}function ve(a,t,n){if(a.tag===3)sd(a,a,n);else for(;t!==null;){if(t.tag===3){sd(t,a,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ka===null||!Ka.has(r))){a=Ft(n,a),a=kc(t,a,1),t=Ya(t,a,1),a=_e(),t!==null&&(tn(t,1,a),Ke(t,a));break}}t=t.return}}function cf(a,t,n){var r=a.pingCache;r!==null&&r.delete(t),t=_e(),a.pingedLanes|=a.suspendedLanes&n,Re===a&&(We&n)===n&&(Te===4||Te===3&&(We&130023424)===We&&500>je()-Ms?ht(a,0):Ws|=n),Ke(a,t)}function od(a,t){t===0&&((a.mode&1)===0?t=1:(t=Kn,Kn<<=1,(Kn&130023424)===0&&(Kn=4194304)));var n=_e();a=Ra(a,t),a!==null&&(tn(a,t,n),Ke(a,n))}function df(a){var t=a.memoizedState,n=0;t!==null&&(n=t.retryLane),od(a,n)}function pf(a,t){var n=0;switch(a.tag){case 13:var r=a.stateNode,s=a.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=a.stateNode;break;default:throw Error(c(314))}r!==null&&r.delete(t),od(a,n)}var ld;ld=function(a,t,n){if(a!==null)if(a.memoizedProps!==t.pendingProps||Ge.current)Ye=!0;else{if((a.lanes&n)===0&&(t.flags&128)===0)return Ye=!1,qm(a,t,n);Ye=(a.flags&131072)!==0}else Ye=!1,ge&&(t.flags&1048576)!==0&&Hl(t,xr,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Br(a,t),a=t.pendingProps;var s=Bt(t,Me.current);Lt(t,n),s=fs(null,t,r,a,s,n);var l=us();return t.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Je(r)?(l=!0,ur(t)):l=!1,t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,ss(t),s.updater=Pr,t.stateNode=s,s._reactInternals=t,vs(t,r,a,n),t=Cs(null,t,r,!0,l,n)):(t.tag=0,ge&&l&&Qi(t),He(null,t,s,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Br(a,t),a=t.pendingProps,s=r._init,r=s(r._payload),t.type=r,s=t.tag=ff(r),a=ua(r,a),s){case 0:t=Ss(null,t,r,a,n);break e;case 1:t=zc(null,t,r,a,n);break e;case 11:t=Ac(null,t,r,a,n);break e;case 14:t=Pc(null,t,r,ua(r.type,a),n);break e}throw Error(c(306,r,""))}return t;case 0:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:ua(r,s),Ss(a,t,r,s,n);case 1:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:ua(r,s),zc(a,t,r,s,n);case 3:e:{if(Wc(t),a===null)throw Error(c(387));r=t.pendingProps,l=t.memoizedState,s=l.element,Ql(a,t),Sr(t,r,null,n);var p=t.memoizedState;if(r=p.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:p.cache,pendingSuspenseBoundaries:p.pendingSuspenseBoundaries,transitions:p.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){s=Ft(Error(c(423)),t),t=Mc(a,t,r,n,s);break e}else if(r!==s){s=Ft(Error(c(424)),t),t=Mc(a,t,r,n,s);break e}else for(aa=_a(t.stateNode.containerInfo.firstChild),ea=t,ge=!0,fa=null,n=Vl(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Wt(),r===s){t=Ia(a,t,n);break e}He(a,t,r,n)}t=t.child}return t;case 5:return Zl(t),a===null&&Zi(t),r=t.type,s=t.pendingProps,l=a!==null?a.memoizedProps:null,p=s.children,$i(r,s)?p=null:l!==null&&$i(r,l)&&(t.flags|=32),Ic(a,t),He(a,t,p,n),t.child;case 6:return a===null&&Zi(t),null;case 13:return Oc(a,t,n);case 4:return os(t,t.stateNode.containerInfo),r=t.pendingProps,a===null?t.child=Mt(t,null,r,n):He(a,t,r,n),t.child;case 11:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:ua(r,s),Ac(a,t,r,s,n);case 7:return He(a,t,t.pendingProps,n),t.child;case 8:return He(a,t,t.pendingProps.children,n),t.child;case 12:return He(a,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,s=t.pendingProps,l=t.memoizedProps,p=s.value,pe(vr,r._currentValue),r._currentValue=p,l!==null)if(ma(l.value,p)){if(l.children===s.children&&!Ge.current){t=Ia(a,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var g=l.dependencies;if(g!==null){p=l.child;for(var w=g.firstContext;w!==null;){if(w.context===r){if(l.tag===1){w=Ba(-1,n&-n),w.tag=2;var E=l.updateQueue;if(E!==null){E=E.shared;var z=E.pending;z===null?w.next=w:(w.next=z.next,z.next=w),E.pending=w}}l.lanes|=n,w=l.alternate,w!==null&&(w.lanes|=n),rs(l.return,n,t),g.lanes|=n;break}w=w.next}}else if(l.tag===10)p=l.type===t.type?null:l.child;else if(l.tag===18){if(p=l.return,p===null)throw Error(c(341));p.lanes|=n,g=p.alternate,g!==null&&(g.lanes|=n),rs(p,n,t),p=l.sibling}else p=l.child;if(p!==null)p.return=l;else for(p=l;p!==null;){if(p===t){p=null;break}if(l=p.sibling,l!==null){l.return=p.return,p=l;break}p=p.return}l=p}He(a,t,s.children,n),t=t.child}return t;case 9:return s=t.type,r=t.pendingProps.children,Lt(t,n),s=ia(s),r=r(s),t.flags|=1,He(a,t,r,n),t.child;case 14:return r=t.type,s=ua(r,t.pendingProps),s=ua(r.type,s),Pc(a,t,r,s,n);case 15:return Rc(a,t,t.type,t.pendingProps,n);case 17:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:ua(r,s),Br(a,t),t.tag=1,Je(r)?(a=!0,ur(t)):a=!1,Lt(t,n),wc(t,r,s),vs(t,r,s,n),Cs(null,t,r,!0,a,n);case 19:return Dc(a,t,n);case 22:return Bc(a,t,n)}throw Error(c(156,t.tag))};function cd(a,t){return _o(a,t)}function mf(a,t,n,r){this.tag=a,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function la(a,t,n,r){return new mf(a,t,n,r)}function $s(a){return a=a.prototype,!(!a||!a.isReactComponent)}function ff(a){if(typeof a=="function")return $s(a)?1:0;if(a!=null){if(a=a.$$typeof,a===Ie)return 11;if(a===ya)return 14}return 2}function Za(a,t){var n=a.alternate;return n===null?(n=la(a.tag,t,a.key,a.mode),n.elementType=a.elementType,n.type=a.type,n.stateNode=a.stateNode,n.alternate=a,a.alternate=n):(n.pendingProps=t,n.type=a.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=a.flags&14680064,n.childLanes=a.childLanes,n.lanes=a.lanes,n.child=a.child,n.memoizedProps=a.memoizedProps,n.memoizedState=a.memoizedState,n.updateQueue=a.updateQueue,t=a.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=a.sibling,n.index=a.index,n.ref=a.ref,n}function Ur(a,t,n,r,s,l){var p=2;if(r=a,typeof a=="function")$s(a)&&(p=1);else if(typeof a=="string")p=5;else e:switch(a){case Fe:return xt(n.children,s,l,t);case oe:p=8,s|=8;break;case Ue:return a=la(12,n,t,s|2),a.elementType=Ue,a.lanes=l,a;case qe:return a=la(13,n,t,s),a.elementType=qe,a.lanes=l,a;case da:return a=la(19,n,t,s),a.elementType=da,a.lanes=l,a;case ye:return $r(n,s,l,t);default:if(typeof a=="object"&&a!==null)switch(a.$$typeof){case ba:p=10;break e;case ca:p=9;break e;case Ie:p=11;break e;case ya:p=14;break e;case $e:p=16,r=null;break e}throw Error(c(130,a==null?a:typeof a,""))}return t=la(p,n,t,s),t.elementType=a,t.type=r,t.lanes=l,t}function xt(a,t,n,r){return a=la(7,a,r,t),a.lanes=n,a}function $r(a,t,n,r){return a=la(22,a,r,t),a.elementType=ye,a.lanes=n,a.stateNode={isHidden:!1},a}function Gs(a,t,n){return a=la(6,a,null,t),a.lanes=n,a}function Js(a,t,n){return t=la(4,a.children!==null?a.children:[],a.key,t),t.lanes=n,t.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation},t}function uf(a,t,n,r,s){this.tag=t,this.containerInfo=a,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=yi(0),this.expirationTimes=yi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=yi(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function Ys(a,t,n,r,s,l,p,g,w){return a=new uf(a,t,n,g,w),t===1?(t=1,l===!0&&(t|=8)):t=0,l=la(3,null,null,t),a.current=l,l.stateNode=a,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ss(l),a}function hf(a,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ne,key:r==null?null:""+r,children:a,containerInfo:t,implementation:n}}function dd(a){if(!a)return $a;a=a._reactInternals;e:{if(it(a)!==a||a.tag!==1)throw Error(c(170));var t=a;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Je(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(c(171))}if(a.tag===1){var n=a.type;if(Je(n))return Ll(a,n,t)}return t}function pd(a,t,n,r,s,l,p,g,w){return a=Ys(n,r,!0,a,s,l,p,g,w),a.context=dd(null),n=a.current,r=_e(),s=qa(n),l=Ba(r,s),l.callback=t??null,Ya(n,l,s),a.current.lanes=s,tn(a,s,r),Ke(a,r),a}function Gr(a,t,n,r){var s=t.current,l=_e(),p=qa(s);return n=dd(n),t.context===null?t.context=n:t.pendingContext=n,t=Ba(l,p),t.payload={element:a},r=r===void 0?null:r,r!==null&&(t.callback=r),a=Ya(s,t,p),a!==null&&(xa(a,s,p,l),wr(a,s,p)),p}function Jr(a){if(a=a.current,!a.child)return null;switch(a.child.tag){case 5:return a.child.stateNode;default:return a.child.stateNode}}function md(a,t){if(a=a.memoizedState,a!==null&&a.dehydrated!==null){var n=a.retryLane;a.retryLane=n!==0&&n<t?n:t}}function Vs(a,t){md(a,t),(a=a.alternate)&&md(a,t)}function gf(){return null}var fd=typeof reportError=="function"?reportError:function(a){console.error(a)};function Ks(a){this._internalRoot=a}Yr.prototype.render=Ks.prototype.render=function(a){var t=this._internalRoot;if(t===null)throw Error(c(409));Gr(a,t,null,null)},Yr.prototype.unmount=Ks.prototype.unmount=function(){var a=this._internalRoot;if(a!==null){this._internalRoot=null;var t=a.containerInfo;ut(function(){Gr(null,a,null,null)}),t[Ea]=null}};function Yr(a){this._internalRoot=a}Yr.prototype.unstable_scheduleHydration=function(a){if(a){var t=Qo();a={blockedOn:null,target:a,priority:t};for(var n=0;n<Da.length&&t!==0&&t<Da[n].priority;n++);Da.splice(n,0,a),n===0&&Zo(a)}};function Qs(a){return!(!a||a.nodeType!==1&&a.nodeType!==9&&a.nodeType!==11)}function Vr(a){return!(!a||a.nodeType!==1&&a.nodeType!==9&&a.nodeType!==11&&(a.nodeType!==8||a.nodeValue!==" react-mount-point-unstable "))}function ud(){}function xf(a,t,n,r,s){if(s){if(typeof r=="function"){var l=r;r=function(){var E=Jr(p);l.call(E)}}var p=pd(t,r,a,0,null,!1,!1,"",ud);return a._reactRootContainer=p,a[Ea]=p.current,xn(a.nodeType===8?a.parentNode:a),ut(),p}for(;s=a.lastChild;)a.removeChild(s);if(typeof r=="function"){var g=r;r=function(){var E=Jr(w);g.call(E)}}var w=Ys(a,0,!1,null,null,!1,!1,"",ud);return a._reactRootContainer=w,a[Ea]=w.current,xn(a.nodeType===8?a.parentNode:a),ut(function(){Gr(t,w,n,r)}),w}function Kr(a,t,n,r,s){var l=n._reactRootContainer;if(l){var p=l;if(typeof s=="function"){var g=s;s=function(){var w=Jr(p);g.call(w)}}Gr(t,p,a,s)}else p=xf(n,t,a,s,r);return Jr(p)}Vo=function(a){switch(a.tag){case 3:var t=a.stateNode;if(t.current.memoizedState.isDehydrated){var n=an(t.pendingLanes);n!==0&&(vi(t,n|1),Ke(t,je()),(ne&6)===0&&(Ut=je()+500,Ga()))}break;case 13:ut(function(){var r=Ra(a,1);if(r!==null){var s=_e();xa(r,a,1,s)}}),Vs(a,1)}},ji=function(a){if(a.tag===13){var t=Ra(a,134217728);if(t!==null){var n=_e();xa(t,a,134217728,n)}Vs(a,134217728)}},Ko=function(a){if(a.tag===13){var t=qa(a),n=Ra(a,t);if(n!==null){var r=_e();xa(n,a,t,r)}Vs(a,t)}},Qo=function(){return ce},qo=function(a,t){var n=ce;try{return ce=a,t()}finally{ce=n}},fi=function(a,t,n){switch(t){case"input":if(ii(a,n),t=n.name,n.type==="radio"&&t!=null){for(n=a;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==a&&r.form===a.form){var s=mr(r);if(!s)throw Error(c(90));jo(r),ii(r,s)}}}break;case"textarea":No(a,n);break;case"select":t=n.value,t!=null&&vt(a,!!n.multiple,t,!1)}},Wo=Hs,Mo=ut;var bf={usingClientEntryPoint:!1,Events:[vn,Pt,mr,Io,zo,Hs]},zn={findFiberByHostInstance:st,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},yf={bundleType:zn.bundleType,version:zn.version,rendererPackageName:zn.rendererPackageName,rendererConfig:zn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Q.ReactCurrentDispatcher,findHostInstanceByFiber:function(a){return a=Fo(a),a===null?null:a.stateNode},findFiberByHostInstance:zn.findFiberByHostInstance||gf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Qr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Qr.isDisabled&&Qr.supportsFiber)try{Yn=Qr.inject(yf),va=Qr}catch{}}return Qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=bf,Qe.createPortal=function(a,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Qs(t))throw Error(c(200));return hf(a,t,null,n)},Qe.createRoot=function(a,t){if(!Qs(a))throw Error(c(299));var n=!1,r="",s=fd;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=Ys(a,1,!1,null,null,n,!1,r,s),a[Ea]=t.current,xn(a.nodeType===8?a.parentNode:a),new Ks(t)},Qe.findDOMNode=function(a){if(a==null)return null;if(a.nodeType===1)return a;var t=a._reactInternals;if(t===void 0)throw typeof a.render=="function"?Error(c(188)):(a=Object.keys(a).join(","),Error(c(268,a)));return a=Fo(t),a=a===null?null:a.stateNode,a},Qe.flushSync=function(a){return ut(a)},Qe.hydrate=function(a,t,n){if(!Vr(t))throw Error(c(200));return Kr(null,a,t,!0,n)},Qe.hydrateRoot=function(a,t,n){if(!Qs(a))throw Error(c(405));var r=n!=null&&n.hydratedSources||null,s=!1,l="",p=fd;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(p=n.onRecoverableError)),t=pd(t,null,a,1,n??null,s,!1,l,p),a[Ea]=t.current,xn(a),r)for(a=0;a<r.length;a++)n=r[a],s=n._getVersion,s=s(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,s]:t.mutableSourceEagerHydrationData.push(n,s);return new Yr(t)},Qe.render=function(a,t,n){if(!Vr(t))throw Error(c(200));return Kr(null,a,t,!1,n)},Qe.unmountComponentAtNode=function(a){if(!Vr(a))throw Error(c(40));return a._reactRootContainer?(ut(function(){Kr(null,null,a,!1,function(){a._reactRootContainer=null,a[Ea]=null})}),!0):!1},Qe.unstable_batchedUpdates=Hs,Qe.unstable_renderSubtreeIntoContainer=function(a,t,n,r){if(!Vr(n))throw Error(c(200));if(a==null||a._reactInternals===void 0)throw Error(c(38));return Kr(a,t,n,!1,r)},Qe.version="18.3.1-next-f1338f8080-20240426",Qe}var wd;function tp(){if(wd)return Zs.exports;wd=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(o){console.error(o)}}return i(),Zs.exports=Pf(),Zs.exports}var Sd;function Rf(){if(Sd)return qr;Sd=1;var i=tp();return qr.createRoot=i.createRoot,qr.hydrateRoot=i.hydrateRoot,qr}var Bf=Rf();tp();/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ln(){return Ln=Object.assign?Object.assign.bind():function(i){for(var o=1;o<arguments.length;o++){var c=arguments[o];for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(i[d]=c[d])}return i},Ln.apply(this,arguments)}var tt;(function(i){i.Pop="POP",i.Push="PUSH",i.Replace="REPLACE"})(tt||(tt={}));const Cd="popstate";function If(i){i===void 0&&(i={});function o(d,m){let{pathname:f,search:u,hash:h}=d.location;return co("",{pathname:f,search:u,hash:h},m.state&&m.state.usr||null,m.state&&m.state.key||"default")}function c(d,m){return typeof m=="string"?m:ti(m)}return Wf(o,c,null,i)}function Ce(i,o){if(i===!1||i===null||typeof i>"u")throw new Error(o)}function go(i,o){if(!i){typeof console<"u"&&console.warn(o);try{throw new Error(o)}catch{}}}function zf(){return Math.random().toString(36).substr(2,8)}function kd(i,o){return{usr:i.state,key:i.key,idx:o}}function co(i,o,c,d){return c===void 0&&(c=null),Ln({pathname:typeof i=="string"?i:i.pathname,search:"",hash:""},typeof o=="string"?Vt(o):o,{state:c,key:o&&o.key||d||zf()})}function ti(i){let{pathname:o="/",search:c="",hash:d=""}=i;return c&&c!=="?"&&(o+=c.charAt(0)==="?"?c:"?"+c),d&&d!=="#"&&(o+=d.charAt(0)==="#"?d:"#"+d),o}function Vt(i){let o={};if(i){let c=i.indexOf("#");c>=0&&(o.hash=i.substr(c),i=i.substr(0,c));let d=i.indexOf("?");d>=0&&(o.search=i.substr(d),i=i.substr(0,d)),i&&(o.pathname=i)}return o}function Wf(i,o,c,d){d===void 0&&(d={});let{window:m=document.defaultView,v5Compat:f=!1}=d,u=m.history,h=tt.Pop,y=null,j=x();j==null&&(j=0,u.replaceState(Ln({},u.state,{idx:j}),""));function x(){return(u.state||{idx:null}).idx}function b(){h=tt.Pop;let M=x(),T=M==null?null:M-j;j=M,y&&y({action:h,location:R.location,delta:T})}function P(M,T){h=tt.Push;let A=co(R.location,M,T);j=x()+1;let L=kd(A,j),Q=R.createHref(A);try{u.pushState(L,"",Q)}catch(ue){if(ue instanceof DOMException&&ue.name==="DataCloneError")throw ue;m.location.assign(Q)}f&&y&&y({action:h,location:R.location,delta:1})}function H(M,T){h=tt.Replace;let A=co(R.location,M,T);j=x();let L=kd(A,j),Q=R.createHref(A);u.replaceState(L,"",Q),f&&y&&y({action:h,location:R.location,delta:0})}function Y(M){let T=m.location.origin!=="null"?m.location.origin:m.location.href,A=typeof M=="string"?M:ti(M);return A=A.replace(/ $/,"%20"),Ce(T,"No window.location.(origin|href) available to create URL for href: "+A),new URL(A,T)}let R={get action(){return h},get location(){return i(m,u)},listen(M){if(y)throw new Error("A history only accepts one active listener");return m.addEventListener(Cd,b),y=M,()=>{m.removeEventListener(Cd,b),y=null}},createHref(M){return o(m,M)},createURL:Y,encodeLocation(M){let T=Y(M);return{pathname:T.pathname,search:T.search,hash:T.hash}},push:P,replace:H,go(M){return u.go(M)}};return R}var Nd;(function(i){i.data="data",i.deferred="deferred",i.redirect="redirect",i.error="error"})(Nd||(Nd={}));function Mf(i,o,c){return c===void 0&&(c="/"),Of(i,o,c)}function Of(i,o,c,d){let m=typeof o=="string"?Vt(o):o,f=xo(m.pathname||"/",c);if(f==null)return null;let u=np(i);Lf(u);let h=null;for(let y=0;h==null&&y<u.length;++y){let j=Qf(f);h=Yf(u[y],j)}return h}function np(i,o,c,d){o===void 0&&(o=[]),c===void 0&&(c=[]),d===void 0&&(d="");let m=(f,u,h)=>{let y={relativePath:h===void 0?f.path||"":h,caseSensitive:f.caseSensitive===!0,childrenIndex:u,route:f};y.relativePath.startsWith("/")&&(Ce(y.relativePath.startsWith(d),'Absolute route path "'+y.relativePath+'" nested under path '+('"'+d+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),y.relativePath=y.relativePath.slice(d.length));let j=nt([d,y.relativePath]),x=c.concat(y);f.children&&f.children.length>0&&(Ce(f.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+j+'".')),np(f.children,o,x,j)),!(f.path==null&&!f.index)&&o.push({path:j,score:Gf(j,f.index),routesMeta:x})};return i.forEach((f,u)=>{var h;if(f.path===""||!((h=f.path)!=null&&h.includes("?")))m(f,u);else for(let y of rp(f.path))m(f,u,y)}),o}function rp(i){let o=i.split("/");if(o.length===0)return[];let[c,...d]=o,m=c.endsWith("?"),f=c.replace(/\?$/,"");if(d.length===0)return m?[f,""]:[f];let u=rp(d.join("/")),h=[];return h.push(...u.map(y=>y===""?f:[f,y].join("/"))),m&&h.push(...u),h.map(y=>i.startsWith("/")&&y===""?"/":y)}function Lf(i){i.sort((o,c)=>o.score!==c.score?c.score-o.score:Jf(o.routesMeta.map(d=>d.childrenIndex),c.routesMeta.map(d=>d.childrenIndex)))}const Df=/^:[\w-]+$/,Ff=3,Hf=2,_f=1,Uf=10,$f=-2,Ed=i=>i==="*";function Gf(i,o){let c=i.split("/"),d=c.length;return c.some(Ed)&&(d+=$f),o&&(d+=Hf),c.filter(m=>!Ed(m)).reduce((m,f)=>m+(Df.test(f)?Ff:f===""?_f:Uf),d)}function Jf(i,o){return i.length===o.length&&i.slice(0,-1).every((d,m)=>d===o[m])?i[i.length-1]-o[o.length-1]:0}function Yf(i,o,c){let{routesMeta:d}=i,m={},f="/",u=[];for(let h=0;h<d.length;++h){let y=d[h],j=h===d.length-1,x=f==="/"?o:o.slice(f.length)||"/",b=Vf({path:y.relativePath,caseSensitive:y.caseSensitive,end:j},x),P=y.route;if(!b)return null;Object.assign(m,b.params),u.push({params:m,pathname:nt([f,b.pathname]),pathnameBase:au(nt([f,b.pathnameBase])),route:P}),b.pathnameBase!=="/"&&(f=nt([f,b.pathnameBase]))}return u}function Vf(i,o){typeof i=="string"&&(i={path:i,caseSensitive:!1,end:!0});let[c,d]=Kf(i.path,i.caseSensitive,i.end),m=o.match(c);if(!m)return null;let f=m[0],u=f.replace(/(.)\/+$/,"$1"),h=m.slice(1);return{params:d.reduce((j,x,b)=>{let{paramName:P,isOptional:H}=x;if(P==="*"){let R=h[b]||"";u=f.slice(0,f.length-R.length).replace(/(.)\/+$/,"$1")}const Y=h[b];return H&&!Y?j[P]=void 0:j[P]=(Y||"").replace(/%2F/g,"/"),j},{}),pathname:f,pathnameBase:u,pattern:i}}function Kf(i,o,c){o===void 0&&(o=!1),c===void 0&&(c=!0),go(i==="*"||!i.endsWith("*")||i.endsWith("/*"),'Route path "'+i+'" will be treated as if it were '+('"'+i.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+i.replace(/\*$/,"/*")+'".'));let d=[],m="^"+i.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(u,h,y)=>(d.push({paramName:h,isOptional:y!=null}),y?"/?([^\\/]+)?":"/([^\\/]+)"));return i.endsWith("*")?(d.push({paramName:"*"}),m+=i==="*"||i==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):c?m+="\\/*$":i!==""&&i!=="/"&&(m+="(?:(?=\\/|$))"),[new RegExp(m,o?void 0:"i"),d]}function Qf(i){try{return i.split("/").map(o=>decodeURIComponent(o).replace(/\//g,"%2F")).join("/")}catch(o){return go(!1,'The URL path "'+i+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+o+").")),i}}function xo(i,o){if(o==="/")return i;if(!i.toLowerCase().startsWith(o.toLowerCase()))return null;let c=o.endsWith("/")?o.length-1:o.length,d=i.charAt(c);return d&&d!=="/"?null:i.slice(c)||"/"}const qf=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Xf=i=>qf.test(i);function Zf(i,o){o===void 0&&(o="/");let{pathname:c,search:d="",hash:m=""}=typeof i=="string"?Vt(i):i,f;if(c)if(Xf(c))f=c;else{if(c.includes("//")){let u=c;c=c.replace(/\/\/+/g,"/"),go(!1,"Pathnames cannot have embedded double slashes - normalizing "+(u+" -> "+c))}c.startsWith("/")?f=Td(c.substring(1),"/"):f=Td(c,o)}else f=o;return{pathname:f,search:tu(d),hash:nu(m)}}function Td(i,o){let c=o.replace(/\/+$/,"").split("/");return i.split("/").forEach(m=>{m===".."?c.length>1&&c.pop():m!=="."&&c.push(m)}),c.length>1?c.join("/"):"/"}function to(i,o,c,d){return"Cannot include a '"+i+"' character in a manually specified "+("`to."+o+"` field ["+JSON.stringify(d)+"].  Please separate it out to the ")+("`to."+c+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function eu(i){return i.filter((o,c)=>c===0||o.route.path&&o.route.path.length>0)}function ip(i,o){let c=eu(i);return o?c.map((d,m)=>m===c.length-1?d.pathname:d.pathnameBase):c.map(d=>d.pathnameBase)}function sp(i,o,c,d){d===void 0&&(d=!1);let m;typeof i=="string"?m=Vt(i):(m=Ln({},i),Ce(!m.pathname||!m.pathname.includes("?"),to("?","pathname","search",m)),Ce(!m.pathname||!m.pathname.includes("#"),to("#","pathname","hash",m)),Ce(!m.search||!m.search.includes("#"),to("#","search","hash",m)));let f=i===""||m.pathname==="",u=f?"/":m.pathname,h;if(u==null)h=c;else{let b=o.length-1;if(!d&&u.startsWith("..")){let P=u.split("/");for(;P[0]==="..";)P.shift(),b-=1;m.pathname=P.join("/")}h=b>=0?o[b]:"/"}let y=Zf(m,h),j=u&&u!=="/"&&u.endsWith("/"),x=(f||u===".")&&c.endsWith("/");return!y.pathname.endsWith("/")&&(j||x)&&(y.pathname+="/"),y}const nt=i=>i.join("/").replace(/\/\/+/g,"/"),au=i=>i.replace(/\/+$/,"").replace(/^\/*/,"/"),tu=i=>!i||i==="?"?"":i.startsWith("?")?i:"?"+i,nu=i=>!i||i==="#"?"":i.startsWith("#")?i:"#"+i;function ru(i){return i!=null&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.internal=="boolean"&&"data"in i}const op=["post","put","patch","delete"];new Set(op);const iu=["get",...op];new Set(iu);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Dn(){return Dn=Object.assign?Object.assign.bind():function(i){for(var o=1;o<arguments.length;o++){var c=arguments[o];for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(i[d]=c[d])}return i},Dn.apply(this,arguments)}const bo=v.createContext(null),su=v.createContext(null),bt=v.createContext(null),ni=v.createContext(null),yt=v.createContext({outlet:null,matches:[],isDataRoute:!1}),lp=v.createContext(null);function ou(i,o){let{relative:c}=o===void 0?{}:o;Fn()||Ce(!1);let{basename:d,navigator:m}=v.useContext(bt),{hash:f,pathname:u,search:h}=dp(i,{relative:c}),y=u;return d!=="/"&&(y=u==="/"?d:nt([d,u])),m.createHref({pathname:y,search:h,hash:f})}function Fn(){return v.useContext(ni)!=null}function rt(){return Fn()||Ce(!1),v.useContext(ni).location}function cp(i){v.useContext(bt).static||v.useLayoutEffect(i)}function yo(){let{isDataRoute:i}=v.useContext(yt);return i?vu():lu()}function lu(){Fn()||Ce(!1);let i=v.useContext(bo),{basename:o,future:c,navigator:d}=v.useContext(bt),{matches:m}=v.useContext(yt),{pathname:f}=rt(),u=JSON.stringify(ip(m,c.v7_relativeSplatPath)),h=v.useRef(!1);return cp(()=>{h.current=!0}),v.useCallback(function(j,x){if(x===void 0&&(x={}),!h.current)return;if(typeof j=="number"){d.go(j);return}let b=sp(j,JSON.parse(u),f,x.relative==="path");i==null&&o!=="/"&&(b.pathname=b.pathname==="/"?o:nt([o,b.pathname])),(x.replace?d.replace:d.push)(b,x.state,x)},[o,d,u,f,i])}function dp(i,o){let{relative:c}=o===void 0?{}:o,{future:d}=v.useContext(bt),{matches:m}=v.useContext(yt),{pathname:f}=rt(),u=JSON.stringify(ip(m,d.v7_relativeSplatPath));return v.useMemo(()=>sp(i,JSON.parse(u),f,c==="path"),[i,u,f,c])}function cu(i,o){return du(i,o)}function du(i,o,c,d){Fn()||Ce(!1);let{navigator:m}=v.useContext(bt),{matches:f}=v.useContext(yt),u=f[f.length-1],h=u?u.params:{};u&&u.pathname;let y=u?u.pathnameBase:"/";u&&u.route;let j=rt(),x;if(o){var b;let M=typeof o=="string"?Vt(o):o;y==="/"||(b=M.pathname)!=null&&b.startsWith(y)||Ce(!1),x=M}else x=j;let P=x.pathname||"/",H=P;if(y!=="/"){let M=y.replace(/^\//,"").split("/");H="/"+P.replace(/^\//,"").split("/").slice(M.length).join("/")}let Y=Mf(i,{pathname:H}),R=hu(Y&&Y.map(M=>Object.assign({},M,{params:Object.assign({},h,M.params),pathname:nt([y,m.encodeLocation?m.encodeLocation(M.pathname).pathname:M.pathname]),pathnameBase:M.pathnameBase==="/"?y:nt([y,m.encodeLocation?m.encodeLocation(M.pathnameBase).pathname:M.pathnameBase])})),f,c,d);return o&&R?v.createElement(ni.Provider,{value:{location:Dn({pathname:"/",search:"",hash:"",state:null,key:"default"},x),navigationType:tt.Pop}},R):R}function pu(){let i=yu(),o=ru(i)?i.status+" "+i.statusText:i instanceof Error?i.message:JSON.stringify(i),c=i instanceof Error?i.stack:null,m={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return v.createElement(v.Fragment,null,v.createElement("h2",null,"Unexpected Application Error!"),v.createElement("h3",{style:{fontStyle:"italic"}},o),c?v.createElement("pre",{style:m},c):null,null)}const mu=v.createElement(pu,null);class fu extends v.Component{constructor(o){super(o),this.state={location:o.location,revalidation:o.revalidation,error:o.error}}static getDerivedStateFromError(o){return{error:o}}static getDerivedStateFromProps(o,c){return c.location!==o.location||c.revalidation!=="idle"&&o.revalidation==="idle"?{error:o.error,location:o.location,revalidation:o.revalidation}:{error:o.error!==void 0?o.error:c.error,location:c.location,revalidation:o.revalidation||c.revalidation}}componentDidCatch(o,c){console.error("React Router caught the following error during render",o,c)}render(){return this.state.error!==void 0?v.createElement(yt.Provider,{value:this.props.routeContext},v.createElement(lp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function uu(i){let{routeContext:o,match:c,children:d}=i,m=v.useContext(bo);return m&&m.static&&m.staticContext&&(c.route.errorElement||c.route.ErrorBoundary)&&(m.staticContext._deepestRenderedBoundaryId=c.route.id),v.createElement(yt.Provider,{value:o},d)}function hu(i,o,c,d){var m;if(o===void 0&&(o=[]),c===void 0&&(c=null),d===void 0&&(d=null),i==null){var f;if(!c)return null;if(c.errors)i=c.matches;else if((f=d)!=null&&f.v7_partialHydration&&o.length===0&&!c.initialized&&c.matches.length>0)i=c.matches;else return null}let u=i,h=(m=c)==null?void 0:m.errors;if(h!=null){let x=u.findIndex(b=>b.route.id&&(h==null?void 0:h[b.route.id])!==void 0);x>=0||Ce(!1),u=u.slice(0,Math.min(u.length,x+1))}let y=!1,j=-1;if(c&&d&&d.v7_partialHydration)for(let x=0;x<u.length;x++){let b=u[x];if((b.route.HydrateFallback||b.route.hydrateFallbackElement)&&(j=x),b.route.id){let{loaderData:P,errors:H}=c,Y=b.route.loader&&P[b.route.id]===void 0&&(!H||H[b.route.id]===void 0);if(b.route.lazy||Y){y=!0,j>=0?u=u.slice(0,j+1):u=[u[0]];break}}}return u.reduceRight((x,b,P)=>{let H,Y=!1,R=null,M=null;c&&(H=h&&b.route.id?h[b.route.id]:void 0,R=b.route.errorElement||mu,y&&(j<0&&P===0?(ju("route-fallback"),Y=!0,M=null):j===P&&(Y=!0,M=b.route.hydrateFallbackElement||null)));let T=o.concat(u.slice(0,P+1)),A=()=>{let L;return H?L=R:Y?L=M:b.route.Component?L=v.createElement(b.route.Component,null):b.route.element?L=b.route.element:L=x,v.createElement(uu,{match:b,routeContext:{outlet:x,matches:T,isDataRoute:c!=null},children:L})};return c&&(b.route.ErrorBoundary||b.route.errorElement||P===0)?v.createElement(fu,{location:c.location,revalidation:c.revalidation,component:R,error:H,children:A(),routeContext:{outlet:null,matches:T,isDataRoute:!0}}):A()},null)}var pp=(function(i){return i.UseBlocker="useBlocker",i.UseRevalidator="useRevalidator",i.UseNavigateStable="useNavigate",i})(pp||{}),mp=(function(i){return i.UseBlocker="useBlocker",i.UseLoaderData="useLoaderData",i.UseActionData="useActionData",i.UseRouteError="useRouteError",i.UseNavigation="useNavigation",i.UseRouteLoaderData="useRouteLoaderData",i.UseMatches="useMatches",i.UseRevalidator="useRevalidator",i.UseNavigateStable="useNavigate",i.UseRouteId="useRouteId",i})(mp||{});function gu(i){let o=v.useContext(bo);return o||Ce(!1),o}function xu(i){let o=v.useContext(su);return o||Ce(!1),o}function bu(i){let o=v.useContext(yt);return o||Ce(!1),o}function fp(i){let o=bu(),c=o.matches[o.matches.length-1];return c.route.id||Ce(!1),c.route.id}function yu(){var i;let o=v.useContext(lp),c=xu(),d=fp();return o!==void 0?o:(i=c.errors)==null?void 0:i[d]}function vu(){let{router:i}=gu(pp.UseNavigateStable),o=fp(mp.UseNavigateStable),c=v.useRef(!1);return cp(()=>{c.current=!0}),v.useCallback(function(m,f){f===void 0&&(f={}),c.current&&(typeof m=="number"?i.navigate(m):i.navigate(m,Dn({fromRouteId:o},f)))},[i,o])}const Ad={};function ju(i,o,c){Ad[i]||(Ad[i]=!0)}function wu(i,o){i==null||i.v7_startTransition,i==null||i.v7_relativeSplatPath}function X(i){Ce(!1)}function Su(i){let{basename:o="/",children:c=null,location:d,navigationType:m=tt.Pop,navigator:f,static:u=!1,future:h}=i;Fn()&&Ce(!1);let y=o.replace(/^\/*/,"/"),j=v.useMemo(()=>({basename:y,navigator:f,static:u,future:Dn({v7_relativeSplatPath:!1},h)}),[y,h,f,u]);typeof d=="string"&&(d=Vt(d));let{pathname:x="/",search:b="",hash:P="",state:H=null,key:Y="default"}=d,R=v.useMemo(()=>{let M=xo(x,y);return M==null?null:{location:{pathname:M,search:b,hash:P,state:H,key:Y},navigationType:m}},[y,x,b,P,H,Y,m]);return R==null?null:v.createElement(bt.Provider,{value:j},v.createElement(ni.Provider,{children:c,value:R}))}function Cu(i){let{children:o,location:c}=i;return cu(po(o),c)}new Promise(()=>{});function po(i,o){o===void 0&&(o=[]);let c=[];return v.Children.forEach(i,(d,m)=>{if(!v.isValidElement(d))return;let f=[...o,m];if(d.type===v.Fragment){c.push.apply(c,po(d.props.children,f));return}d.type!==X&&Ce(!1),!d.props.index||!d.props.children||Ce(!1);let u={id:d.props.id||f.join("-"),caseSensitive:d.props.caseSensitive,element:d.props.element,Component:d.props.Component,index:d.props.index,path:d.props.path,loader:d.props.loader,action:d.props.action,errorElement:d.props.errorElement,ErrorBoundary:d.props.ErrorBoundary,hasErrorBoundary:d.props.ErrorBoundary!=null||d.props.errorElement!=null,shouldRevalidate:d.props.shouldRevalidate,handle:d.props.handle,lazy:d.props.lazy};d.props.children&&(u.children=po(d.props.children,f)),c.push(u)}),c}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function mo(){return mo=Object.assign?Object.assign.bind():function(i){for(var o=1;o<arguments.length;o++){var c=arguments[o];for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(i[d]=c[d])}return i},mo.apply(this,arguments)}function ku(i,o){if(i==null)return{};var c={},d=Object.keys(i),m,f;for(f=0;f<d.length;f++)m=d[f],!(o.indexOf(m)>=0)&&(c[m]=i[m]);return c}function Nu(i){return!!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)}function Eu(i,o){return i.button===0&&(!o||o==="_self")&&!Nu(i)}const Tu=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Au="6";try{window.__reactRouterVersion=Au}catch{}const Pu="startTransition",Pd=Ef[Pu];function Ru(i){let{basename:o,children:c,future:d,window:m}=i,f=v.useRef();f.current==null&&(f.current=If({window:m,v5Compat:!0}));let u=f.current,[h,y]=v.useState({action:u.action,location:u.location}),{v7_startTransition:j}=d||{},x=v.useCallback(b=>{j&&Pd?Pd(()=>y(b)):y(b)},[y,j]);return v.useLayoutEffect(()=>u.listen(x),[u,x]),v.useEffect(()=>wu(d),[d]),v.createElement(Su,{basename:o,children:c,location:h.location,navigationType:h.action,navigator:u,future:d})}const Bu=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Iu=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ke=v.forwardRef(function(o,c){let{onClick:d,relative:m,reloadDocument:f,replace:u,state:h,target:y,to:j,preventScrollReset:x,viewTransition:b}=o,P=ku(o,Tu),{basename:H}=v.useContext(bt),Y,R=!1;if(typeof j=="string"&&Iu.test(j)&&(Y=j,Bu))try{let L=new URL(window.location.href),Q=j.startsWith("//")?new URL(L.protocol+j):new URL(j),ue=xo(Q.pathname,H);Q.origin===L.origin&&ue!=null?j=ue+Q.search+Q.hash:R=!0}catch{}let M=ou(j,{relative:m}),T=zu(j,{replace:u,state:h,target:y,preventScrollReset:x,relative:m,viewTransition:b});function A(L){d&&d(L),L.defaultPrevented||T(L)}return v.createElement("a",mo({},P,{href:Y||M,onClick:R||f?d:A,ref:c,target:y}))});var Rd;(function(i){i.UseScrollRestoration="useScrollRestoration",i.UseSubmit="useSubmit",i.UseSubmitFetcher="useSubmitFetcher",i.UseFetcher="useFetcher",i.useViewTransitionState="useViewTransitionState"})(Rd||(Rd={}));var Bd;(function(i){i.UseFetcher="useFetcher",i.UseFetchers="useFetchers",i.UseScrollRestoration="useScrollRestoration"})(Bd||(Bd={}));function zu(i,o){let{target:c,replace:d,state:m,preventScrollReset:f,relative:u,viewTransition:h}=o===void 0?{}:o,y=yo(),j=rt(),x=dp(i,{relative:u});return v.useCallback(b=>{if(Eu(b,c)){b.preventDefault();let P=d!==void 0?d:ti(j)===ti(x);y(i,{replace:P,state:m,preventScrollReset:f,relative:u,viewTransition:h})}},[j,y,x,d,m,c,i,f,u,h])}function Wu(){const{pathname:i}=rt();return v.useEffect(()=>{window.scrollTo(0,0),document.documentElement.scrollTop=0,document.body.scrollTop=0,setTimeout(()=>{window.scrollTo(0,0),document.documentElement.scrollTop=0,document.body.scrollTop=0},0),setTimeout(()=>{window.scrollTo(0,0),document.documentElement.scrollTop=0,document.body.scrollTop=0},10)},[i]),null}function Mu(){const i="ଆମ ମହାବିଦ୍ୟାଳୟ ରେ ଆପଣଙ୍କୁ ସ୍ୱାଗତ | Creative Techno College, Angul — AICTE Approved & Affiliated to Utkal University | Admissions Open for 2026-27 | BBA | BCA | B.Sc (CS) | B.Sc (Data Science) | 100% Placement Assistance | Contact: +91 9778427170";return e.jsx("div",{className:"marquee-bar",children:e.jsxs("div",{className:"marquee-track-wrap",children:[e.jsx("span",{className:"marquee-item",children:i}),e.jsx("span",{className:"marquee-item marquee-odia",children:"ଆମ ମହାବିଦ୍ୟାଳୟ ରେ ଆପଣଙ୍କୁ ସ୍ୱାଗତ |  "}),e.jsx("span",{className:"marquee-item",children:i}),e.jsx("span",{className:"marquee-item marquee-odia",children:"ଆମ ମହାବିଦ୍ୟାଳୟ ରେ ଆପଣଙ୍କୁ ସ୍ୱାଗତ |  "})]})})}const Ou=[{label:"Home",to:"/"},{label:"About",children:[{label:"About Trust",to:"/about/trust"},{label:"About CTC",to:"/about/ctc"},{label:"Our Team",to:"/about/team"}]},{label:"Admission",to:"/admission"},{label:"Academics",children:[{label:"Courses",children:[{label:"Regular Courses",to:"/academics/regular"},{label:"Value Added Courses",to:"/academics/value-added"}]},{label:"Enhancement Programs",to:"/academics/enhancement"}]},{label:"Placement",children:[{label:"Development Program",to:"/placement/programs"},{label:"Placement Statistics",to:"/placement/statistics"},{label:"Placement Brochure",to:"/placement/brochure"}]},{label:"Gymkhana",to:"/gymkhana"},{label:"Gallery",to:"/gallery"},{label:"IQAC",children:[{label:"IQAC Item 1",to:"/iqac/item1"},{label:"IQAC Item 2",to:"/iqac/item2"},{label:"IQAC Item 3",to:"/iqac/item3"},{label:"IQAC Item 4",to:"/iqac/item4"}]},{label:"AICTE",children:[{label:"LOA 2024-25",to:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/LOA Report 2024-2025.PDF",external:!0,newTab:!0},{label:"EOA 2025-26",to:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/EOA Report 2025-26.PDF",external:!0,newTab:!0},{label:"Documents",to:"/aicte/documents"},{label:"Mandatory Disclosure",to:"/aicte/mandatory-disclosure"}]},{label:"CKF Skills",to:"/ckf-skills"},{label:"Contacts",to:"/contacts"},{label:"ICC",to:"/icc"},{label:"GRC",to:"/grc"},{label:"Logins",children:[{label:"Portal Login",to:"/login"},{label:"NBA",to:"/nba"},{label:"NAAC",to:"/naac"}]}],Id="#0a1628",zd="#e8f0fe",Wa={dropdown:{position:"absolute",top:"100%",left:0,minWidth:210,background:Id,borderRadius:10,boxShadow:"0 8px 32px rgba(10,22,40,0.35)",listStyle:"none",padding:"6px 0",margin:0,zIndex:9999,border:"1px solid rgba(255,255,255,0.1)"},subDropdown:{position:"absolute",top:0,left:"100%",minWidth:210,background:Id,borderRadius:10,boxShadow:"0 8px 32px rgba(10,22,40,0.35)",listStyle:"none",padding:"6px 0",margin:0,zIndex:9999,border:"1px solid rgba(255,255,255,0.1)"},mobileNested:{position:"static",boxShadow:"none",borderRadius:0,paddingLeft:18,background:"rgba(0,0,0,0.2)",listStyle:"none",margin:0,border:"none"},li:{position:"relative"},link:{display:"block",padding:"9px 20px",color:zd,textDecoration:"none",fontSize:"0.88rem",fontWeight:600,whiteSpace:"nowrap"},trigger:{display:"flex",alignItems:"center",gap:6,padding:"9px 20px",color:zd,fontSize:"0.88rem",fontWeight:600,whiteSpace:"nowrap",cursor:"pointer",userSelect:"none"}};function up({item:i,isMobile:o,onClose:c}){const[d,m]=v.useState(!1),f=()=>m(j=>!j),u=()=>m(!0),h=()=>m(!1);if(!i.children){const j=i.external?e.jsx("a",{href:i.to,target:i.newTab?"_blank":"_self",rel:"noreferrer",style:Wa.link,onClick:c,children:i.label}):e.jsx(ke,{to:i.to,style:Wa.link,onClick:c,children:i.label});return e.jsx("li",{style:Wa.li,onMouseEnter:x=>{var b;return((b=x.currentTarget.querySelector("a,span"))==null?void 0:b.style)&&(x.currentTarget.style.background="#2563eb")},onMouseLeave:x=>x.currentTarget.style.background="",children:j})}const y=o?Wa.mobileNested:Wa.subDropdown;return e.jsxs("li",{style:Wa.li,onMouseEnter:o?void 0:u,onMouseLeave:o?void 0:h,children:[e.jsxs("div",{style:{...Wa.trigger,background:d?"#2563eb":""},onClick:o?f:void 0,children:[i.label,e.jsx("i",{className:"fa-solid fa-chevron-right",style:{fontSize:"0.5rem",marginLeft:"auto",transform:d?"rotate(90deg)":"none",transition:"transform 0.22s"}})]}),d&&e.jsx("ul",{style:y,children:i.children.map((j,x)=>e.jsx(up,{item:j,isMobile:o,onClose:c},x))})]})}function Lu({item:i,isMobile:o,onClose:c,isActive:d}){const[m,f]=v.useState(!1),u=rt();v.useEffect(()=>{f(!1)},[u]);const h=()=>{o||f(!0)},y=()=>{o||f(!1)},j=()=>{o&&f(x=>!x)};return e.jsxs("li",{className:"nav-item",style:{position:"relative"},onMouseEnter:h,onMouseLeave:y,children:[e.jsxs("span",{className:`nav-trigger${d?" active":""}`,onClick:j,children:[i.label,e.jsx("i",{className:"fa-solid fa-chevron-down nav-arrow",style:{transform:m?"rotate(180deg)":"rotate(0)",transition:"transform 0.22s"}})]}),m&&e.jsx("ul",{style:o?{...Wa.dropdown,position:"static",boxShadow:"none",background:"rgba(0,0,0,0.2)",border:"none"}:Wa.dropdown,children:i.children.map((x,b)=>e.jsx(up,{item:x,isMobile:o,onClose:()=>{f(!1),c()}},b))})]})}function Du(){const[i,o]=v.useState(!1),c=rt();return v.useEffect(()=>{o(!1)},[c]),v.useEffect(()=>{const d=m=>{m.target.closest(".navbar")||o(!1)};return document.addEventListener("mousedown",d),()=>document.removeEventListener("mousedown",d)},[]),e.jsxs("nav",{className:"navbar",children:[e.jsx("ul",{className:`nav-list${i?" open":""}`,children:Ou.map((d,m)=>d.children?e.jsx(Lu,{item:d,isMobile:i,onClose:()=>o(!1),isActive:c.pathname.startsWith("/"+d.label.toLowerCase())},m):e.jsx("li",{className:"nav-item",children:e.jsx(ke,{to:d.to,className:`nav-link${c.pathname===d.to?" active":""}`,onClick:()=>o(!1),children:d.label})},m))}),e.jsxs("button",{className:`hamburger${i?" open":""}`,onClick:()=>o(d=>!d),"aria-label":"Toggle menu",children:[e.jsx("span",{}),e.jsx("span",{}),e.jsx("span",{})]})]})}function Fu(){return e.jsxs("footer",{className:"site-footer",children:[e.jsxs("div",{className:"footer-grid",children:[e.jsxs("div",{className:"footer-brand",children:[e.jsx("img",{src:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/LOGO FINAL.png",alt:"CTC Logo"}),e.jsx("p",{children:"Creative Techno College, Angul is a premier institution committed to academic excellence, innovation, and holistic development. AICTE approved & affiliated to Utkal University."}),e.jsx("div",{className:"footer-social",children:[{icon:"fa-brands fa-facebook-f",href:"https://www.facebook.com/creativetechnocollege.angul"},{icon:"fa-brands fa-instagram",href:"https://www.instagram.com/creative_techno_college_angul"},{icon:"fa-brands fa-youtube",href:"https://www.youtube.com/@creativetechnocollegeiangu9750"},{icon:"fa-brands fa-linkedin-in",href:"https://www.linkedin.com/in/creative-techno-college-angul/"},{icon:"fa-brands fa-twitter",href:"https://x.com/creative__1998?lang=en"}].map((i,o)=>e.jsx("a",{href:i.href,target:"_blank",rel:"noreferrer",children:e.jsx("i",{className:i.icon})},o))})]}),e.jsxs("div",{className:"footer-col",children:[e.jsx("h4",{children:"Quick Links"}),[{label:"Home",to:"/"},{label:"About CTC",to:"/about/ctc"},{label:"About Trust",to:"/about/trust"},{label:"Our Team",to:"/about/team"},{label:"Admission",to:"/admission"},{label:"Gallery",to:"/gallery"},{label:"Contacts",to:"/contacts"},{label:"ICC",to:"/icc"}].map((i,o)=>e.jsx(ke,{to:i.to,children:i.label},o))]}),e.jsxs("div",{className:"footer-col",children:[e.jsx("h4",{children:"College Services"}),[{label:"Academics",to:"/academics/regular"},{label:"Placement",to:"/placement/statistics"},{label:"Gymkhana",to:"/gymkhana"},{label:"Technocrat",to:"/gymkhana/technocrat"},{label:"Disha & CSR",to:"/gymkhana/disha-csr"},{label:"Sports",to:"/gymkhana/sports"},{label:"Cultural",to:"/gymkhana/cultural"},{label:"Portal Login",to:"/login"}].map((i,o)=>e.jsx(ke,{to:i.to,children:i.label},o))]}),e.jsxs("div",{className:"footer-col",children:[e.jsx("h4",{children:"Contact Us"}),e.jsxs("div",{className:"footer-contact-item",children:[e.jsx("i",{className:"fa-solid fa-location-dot"}),e.jsx("span",{children:"Creative Techno College, Angul, Odisha – 759122"})]}),e.jsxs("div",{className:"footer-contact-item",children:[e.jsx("i",{className:"fa-solid fa-phone"}),e.jsx("span",{children:"+91 9778427170 / 9668284222"})]}),e.jsxs("div",{className:"footer-contact-item",children:[e.jsx("i",{className:"fa-solid fa-envelope"}),e.jsx("span",{children:"principal.creativecollege@gmail.com"})]}),e.jsxs("div",{className:"footer-contact-item",children:[e.jsx("i",{className:"fa-solid fa-clock"}),e.jsx("span",{children:"Mon – Sat: 9:00 AM – 5:00 PM"})]})]})]}),e.jsxs("div",{className:"footer-bottom",children:[e.jsxs("p",{children:["© 2010 – 2025 ",e.jsx("span",{children:"Creative Techno College"}),". All Rights Reserved."]}),e.jsxs("p",{children:["A Unit of ",e.jsx("span",{children:"Creative Knowledge Foundation"})]}),e.jsxs("p",{children:["Developed by ",e.jsx("span",{children:"Technocrat Club"})]})]})]})}function Hu({children:i}){const[o,c]=v.useState(!1);return v.useEffect(()=>{const d=()=>c(window.scrollY>400);return window.addEventListener("scroll",d),()=>window.removeEventListener("scroll",d)},[]),e.jsxs(e.Fragment,{children:[e.jsx(Mu,{}),e.jsxs("header",{className:"site-header",children:[e.jsxs("div",{className:"header-brand",children:[e.jsx("div",{className:"header-logo-wrap",children:e.jsx("img",{src:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/LOGO FINAL.png",alt:"CTC Logo"})}),e.jsxs("div",{className:"header-text",children:[e.jsx("h1",{children:"Creative Techno College, Angul"}),e.jsx("p",{className:"sub",children:"A Unit of Creative Knowledge Foundation"}),e.jsxs("div",{className:"badges",children:[e.jsx("span",{className:"badge gold",children:"AICTE Approved"}),e.jsx("span",{className:"badge",children:"Utkal University Affiliated"}),e.jsx("span",{className:"badge",children:"Est. 2010"})]})]})]}),e.jsxs("div",{className:"header-logos",children:[e.jsx("img",{src:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/aicte.png",alt:"AICTE",title:"AICTE Approved"}),e.jsx("img",{src:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/utkal.png",alt:"Utkal University",title:"Utkal University Affiliated"}),e.jsx("img",{src:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/ckf.png",alt:"CKF",title:"Creative Knowledge Foundation"})]}),e.jsxs("div",{className:"header-clubs",children:[e.jsx("img",{src:"/CTC NEW REACT WEBSITE/images/GYMKHANA/technocrat.png",alt:"Technocrat",title:"Technocrat Club"}),e.jsx("img",{src:"/CTC NEW REACT WEBSITE/images/GYMKHANA/cultural.png",alt:"Cultural",title:"Cultural Club"}),e.jsx("img",{src:"/CTC NEW REACT WEBSITE/images/GYMKHANA/sports.png",alt:"Sports",title:"Sports Club"}),e.jsx("img",{src:"/CTC NEW REACT WEBSITE/images/GYMKHANA/disha.png",alt:"Disha CSR",title:"Disha & CSR Club"})]})]}),e.jsx(Du,{}),e.jsx("main",{children:i}),e.jsx(Fu,{}),e.jsx("button",{className:`scroll-top-btn${o?" visible":""}`,onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),"aria-label":"Scroll to top",children:e.jsx("i",{className:"fa-solid fa-chevron-up"})})]})}function _u(){v.useEffect(()=>{const i=document.querySelectorAll(".reveal, .reveal-left, .reveal-right"),o=new IntersectionObserver(c=>c.forEach(d=>{d.isIntersecting&&d.target.classList.add("visible")}),{threshold:.12});return i.forEach(c=>o.observe(c)),()=>o.disconnect()},[])}const Xr=[{img:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/creative-campus.jpg",eyebrow:"Welcome to Excellence",title:"Shaping Leaders of Tomorrow",sub:"AICTE Approved • Utkal University Affiliated • Est. 2010"},{img:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/7.jpg",eyebrow:"Beautiful Campus",title:"Green & Student-Friendly Environment",sub:"Sprawling campus of knowledge and growth"},{img:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/4.jpg",eyebrow:"Modern Library",title:"Resources to Empower Learning",sub:"Thousands of books, journals & digital resources"},{img:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/1.jpg",eyebrow:"World-Class Education",title:"Where Innovation Meets Tradition",sub:"BBA • BCA • B.Sc (CS) • B.Sc (Data Science)"},{img:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/2.jpg",eyebrow:"100% Placement Assistance",title:"Your Future Starts Here",sub:"1500+ Students Placed • 100+ Recruiting Companies"},{img:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/5.jpg",eyebrow:"Vibrant Campus Life",title:"Learn. Grow. Excel.",sub:"Sports • Cultural • Technocrat • Disha & CSR"},{img:"/CTC%20NEW%20REACT%20WEBSITE/images/CULTURAL/saraswati_puja/sp1.jpeg",eyebrow:"Saraswati Puja Celebrations",title:"Honouring the Goddess of Knowledge",sub:"Faith • Culture • Togetherness"},{img:"/CTC%20NEW%20REACT%20WEBSITE/images/CULTURAL/funfest/f1.jpeg",eyebrow:"Fun Fest",title:"Where Talent Takes the Stage",sub:"Energy • Creativity • Unforgettable Moments"},{img:"/CTC%20NEW%20REACT%20WEBSITE/images/CULTURAL/holi/h1.jpeg",eyebrow:"Holi Celebrations",title:"A Festival of Colours & Joy",sub:"Vibrant • Festive • Full of Life"}];function Uu(){const[i,o]=v.useState(0),c=v.useRef(null),d=m=>o((m+Xr.length)%Xr.length);return v.useEffect(()=>(c.current=setInterval(()=>d(i+1),5e3),()=>clearInterval(c.current)),[i]),e.jsxs("section",{className:"hero-section",children:[e.jsx("div",{className:"hero-slides-wrap",style:{transform:`translateX(-${i*100}%)`},children:Xr.map((m,f)=>e.jsxs("div",{className:"hero-slide",children:[e.jsx("img",{src:m.img,alt:m.title,loading:f===0?"eager":"lazy"}),e.jsx("div",{className:"hero-overlay"}),e.jsxs("div",{className:"hero-content",children:[e.jsx("p",{className:"hero-eyebrow",children:m.eyebrow}),e.jsx("h1",{className:"hero-title",dangerouslySetInnerHTML:{__html:m.title.replace(/([A-Z][a-z]+)/,"<span>$1</span>")}}),e.jsx("p",{className:"hero-sub",children:m.sub}),e.jsxs("div",{className:"hero-actions",children:[e.jsxs(ke,{to:"/admission",className:"btn-primary",children:[e.jsx("i",{className:"fa-solid fa-graduation-cap"})," Apply Now"]}),e.jsxs(ke,{to:"/about/ctc",className:"btn-outline",children:["Explore More ",e.jsx("i",{className:"fa-solid fa-arrow-right"})]})]})]})]},f))}),e.jsx("button",{className:"hero-arrow left",onClick:()=>d(i-1),"aria-label":"Previous",children:e.jsx("i",{className:"fa-solid fa-chevron-left"})}),e.jsx("button",{className:"hero-arrow right",onClick:()=>d(i+1),"aria-label":"Next",children:e.jsx("i",{className:"fa-solid fa-chevron-right"})}),e.jsx("div",{className:"hero-dots",children:Xr.map((m,f)=>e.jsx("div",{className:`hero-dot${f===i?" active":""}`,onClick:()=>d(f)},f))})]})}const no=[{end:5e3,suffix:"+",label:"Alumni"},{end:500,suffix:"+",label:"Students"},{end:200,suffix:"+",label:"Academic Events"},{end:1500,suffix:"+",label:"Placement"},{end:4,suffix:"",label:"Clubs"}];function $u(){const[i,o]=v.useState(no.map(()=>0)),c=v.useRef(null),d=v.useRef(!1);return v.useEffect(()=>{const m=new IntersectionObserver(([f])=>{f.isIntersecting&&!d.current&&(d.current=!0,no.forEach((u,h)=>{const j=u.end/112.5;let x=0;const b=setInterval(()=>{x=Math.min(x+j,u.end),o(P=>{const H=[...P];return H[h]=Math.floor(x),H}),x>=u.end&&clearInterval(b)},16)}))},{threshold:.3});return c.current&&m.observe(c.current),()=>m.disconnect()},[]),e.jsxs("section",{className:"stats-section",ref:c,children:[e.jsxs("div",{style:{textAlign:"center",marginBottom:"16px",position:"relative"},children:[e.jsx("span",{className:"section-label",style:{color:"rgba(0,212,255,0.8)"},children:"By The Numbers"}),e.jsxs("h2",{className:"section-title",style:{color:"#fff"},children:["Our ",e.jsx("span",{style:{color:"var(--gold)"},children:"Impact"})]})]}),e.jsx("div",{className:"stats-grid",children:no.map((m,f)=>e.jsxs("div",{className:"stat-card reveal",children:[e.jsxs("div",{className:"stat-number",children:[i[f],m.suffix]}),e.jsx("div",{className:"stat-label",children:m.label})]},f))})]})}const Gu=[{abbr:"BBA",full:"Bachelor of Business Administration",seats:120,icon:"💼",desc:"Management, Marketing, Finance & Entrepreneurship"},{abbr:"BCA",full:"Bachelor of Computer Applications",seats:120,icon:"💻",desc:"Programming, Databases & Software Development"},{abbr:"B.Sc (CS)",full:"Bachelor of Science in Computer Science",seats:128,icon:"🖥️",desc:"Algorithms, Theory & Practical Programming"},{abbr:"B.Sc (DS)",full:"Bachelor of Science in Data Science",seats:30,icon:"📊",desc:"Machine Learning, Statistics & Data Analytics"}],Ju=[{name:"Mr. Gyanendra Kumar Sahu",role:"Chairman",img:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/Director Sir.jpg"},{name:"Er. Manoj Kumar Das",role:"Dean Academic",img:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/Dean Sir.jpg"},{name:"Mr. Krishnasis Mishra",role:"Principal",img:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/Principal Sir.jpg"},{name:"Mr. Bhabani Shankar Sahoo",role:"Vice Principal",img:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/Bhabani Sir.jpg"},{name:"Mr. Subhrajyoti Behera",role:"Management HOD",img:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/Subhrajyoti Sir.jpg"}],Yu=[{name:"Wipro",img:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/wipro.png"},{name:"TCS",img:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/tcs.jpg"},{name:"LTI Mindtree",img:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/lti.png"},{name:"Infosys",img:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/infosys.png"},{name:"HCL",img:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/hcl.png"},{name:"Capgemini",img:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/capgemini.png"},{name:"Cisco",img:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/cisco.png"},{name:"Tech Mahindra",img:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/tech.jpg"},{name:"IBM",img:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/ibm.jpeg.jpg"},{name:"Cognizant",img:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/cognizant.png"},{name:"Accenture",img:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/acenture.png"},{name:"Deloitte",img:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/DELOITTE.jpeg"},{name:"Airtel",img:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/airtel.png"},{name:"Corpnizer",img:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/corpnizers.jpeg"},{name:"DXC",img:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/dxc.png"},{name:"Zoho",img:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/zoho.jpg"}];function Vu(){return _u(),e.jsxs(e.Fragment,{children:[e.jsx(Uu,{}),e.jsxs("section",{className:"home-about",children:[e.jsxs("div",{className:"home-about-text reveal-left",children:[e.jsx("span",{className:"section-label",children:"About Us"}),e.jsxs("h2",{className:"section-title",children:["Empowering Minds at ",e.jsx("span",{children:"Creative Techno College"})]}),e.jsx("p",{children:"Creative Techno College (CTC), Angul is a premier institution of higher education established under the aegis of Creative Knowledge Foundation. AICTE approved and affiliated to Utkal University, CTC has been a beacon of quality education since 2010."}),e.jsx("p",{children:"We offer industry-aligned programs in BBA, BCA, B.Sc (Computer Science), and B.Sc (Data Science), equipping students with the skills and knowledge needed to thrive in the modern world."}),e.jsx("p",{children:"Our state-of-the-art infrastructure, experienced faculty, and strong industry connections ensure that every student receives a world-class education with 100% placement assistance."}),e.jsx("div",{style:{display:"flex",gap:"16px",flexWrap:"wrap",marginTop:"28px"},children:e.jsxs(ke,{to:"/about/ctc",className:"btn-primary",children:[e.jsx("i",{className:"fa-solid fa-circle-info"})," Learn More"]})})]}),e.jsxs("div",{className:"director-spotlight reveal-right",children:[e.jsx("img",{className:"director-photo",src:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/Director Sir.jpg",alt:"Director"}),e.jsx("h3",{children:"Mr. Gyanendra Kumar Sahu"}),e.jsx("p",{className:"role",children:"Director"}),e.jsx("blockquote",{children:'"We strongly support inter disciplinary education and training for the benefit of student, industry and society. Our vision is to create future leaders who manage, create powerful organization in the emerging corporate landscape. Our management and IT development programs are exclusively industry focused so as to equip the students with latest techniques in the ever dynamic context of domestic and international business environment. It is an opportunity for you to avail the best course with best college in your locality. Come, be a part of our Creative family. Enjoy flexible and unlimited training programs."'})]})]}),e.jsxs("section",{className:"mv-section",children:[e.jsxs("div",{style:{textAlign:"center",position:"relative"},children:[e.jsx("span",{className:"section-label",children:"Our Foundation"}),e.jsxs("h2",{className:"section-title",style:{color:"#fff"},children:["Mission, Vision & ",e.jsx("span",{style:{color:"var(--gold)"},children:"Values"})]})]}),e.jsx("div",{className:"mv-grid",children:[{icon:e.jsx("i",{className:"fa-solid fa-bullseye"}),title:"Our Mission",content:"To provide quality education that empowers students with knowledge, skills, and values to excel in their careers and contribute positively to society.",type:"text"},{icon:e.jsx("i",{className:"fa-solid fa-eye"}),title:"Our Vision",content:"To be a globally recognized institution that nurtures innovative thinkers, ethical leaders, and responsible citizens.",type:"text"},{icon:e.jsx("i",{className:"fa-solid fa-gem"}),title:"Core Values",items:["Excellence in Education","Innovation & Creativity","Integrity & Ethics","Inclusivity & Diversity","Social Responsibility"],type:"list"},{icon:e.jsx("i",{className:"fa-solid fa-shield-halved"}),title:"Quality Policy",content:"We are committed to continuous improvement in academic standards, student outcomes, and institutional effectiveness through systematic planning and evaluation.",type:"text"}].map((i,o)=>e.jsxs("div",{className:"mv-card reveal",style:{transitionDelay:`${o*.1}s`},children:[e.jsx("div",{className:"mv-card-icon",children:i.icon}),e.jsx("h3",{children:i.title}),i.type==="text"?e.jsx("p",{children:i.content}):e.jsx("ul",{children:i.items.map((c,d)=>e.jsx("li",{children:c},d))})]},o))})]}),e.jsxs("section",{className:"courses-section",children:[e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx("span",{className:"section-label",children:"Academic Programs"}),e.jsxs("h2",{className:"section-title",children:["Courses ",e.jsx("span",{children:"Offered"})]}),e.jsx("p",{className:"section-subtitle",style:{margin:"0 auto"},children:"Industry-aligned programs designed to prepare you for the careers of tomorrow."})]}),e.jsx("div",{className:"courses-grid",children:Gu.map((i,o)=>e.jsxs("div",{className:"course-card reveal",style:{transitionDelay:`${o*.1}s`},children:[e.jsxs("div",{className:"course-abbr-banner",children:[e.jsx("h3",{children:i.abbr}),e.jsx("span",{className:"course-type-tag",children:"4-Year Degree"})]}),e.jsxs("div",{className:"course-body",children:[e.jsx("p",{className:"course-full",children:i.full}),e.jsx("p",{className:"course-desc",children:i.desc}),e.jsxs("div",{className:"course-seats-badge",children:[e.jsx("i",{className:"fa-solid fa-users"})," ",i.seats," Seats"]}),e.jsxs(ke,{to:"/admission",style:{display:"inline-flex",alignItems:"center",gap:"6px",marginTop:"4px",color:"var(--blue-light)",fontWeight:700,fontSize:"0.85rem",fontFamily:"var(--font-head)"},children:["Apply Now ",e.jsx("i",{className:"fa-solid fa-arrow-right",style:{fontSize:"0.72rem"}})]})]})]},o))})]}),e.jsx($u,{}),e.jsxs("section",{className:"admin-section",children:[e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx("span",{className:"section-label",children:"Leadership"}),e.jsxs("h2",{className:"section-title",children:["Our ",e.jsx("span",{children:"Administration"})]}),e.jsx("p",{className:"section-subtitle",style:{margin:"0 auto"},children:"Guided by experienced educators and visionary leaders committed to excellence."})]}),e.jsx("div",{className:"admin-grid",children:Ju.map((i,o)=>e.jsxs("div",{className:"admin-card reveal",style:{transitionDelay:`${o*.1}s`},children:[e.jsxs("div",{className:"admin-img-wrap",children:[e.jsx("img",{src:i.img,alt:i.name}),e.jsx("div",{className:"admin-img-overlay"})]}),e.jsxs("div",{className:"admin-info",children:[e.jsx("h4",{children:i.name}),e.jsx("span",{children:i.role})]})]},o))})]}),e.jsxs("section",{className:"recruiters-section",children:[e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx("span",{className:"section-label",children:"Industry Partners"}),e.jsxs("h2",{className:"section-title",children:["Our Top ",e.jsx("span",{children:"Recruiters"})]}),e.jsx("p",{className:"section-subtitle",style:{margin:"0 auto"},children:"Leading companies trust CTC graduates for their talent, skills, and work ethic."})]}),e.jsx("div",{className:"recruiters-grid",children:Yu.map((i,o)=>e.jsxs("div",{className:"recruiter-logo reveal",style:{transitionDelay:`${o*.05}s`},children:[e.jsx("img",{src:i.img,alt:i.name}),e.jsx("span",{children:i.name})]},o))})]}),e.jsxs("section",{className:"maps-section",children:[e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx("span",{className:"section-label",children:"Find Us"}),e.jsxs("h2",{className:"section-title",children:["Our ",e.jsx("span",{children:"Locations"})]})]}),e.jsx("div",{className:"maps-grid",children:[{title:"Creative Techno College, Angul",icon:"fa-solid fa-building-columns",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3730.0783340113476!2d85.08639287509837!3d20.788118580801687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a18a5b9850815f5%3A0xa7f8a31afad931b7!2sCreative%20Techno%20College!5e0!3m2!1sen!2sin!4v1758728395827!5m2!1sen!2sin",link:"https://www.google.com/maps/place/Creative+Techno+College/@20.7881186,85.0863929,17z"},{title:"Creative Knowledge Foundation Office",icon:"fa-solid fa-house",src:"https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3728.8844998564623!2d85.10675499999999!3d20.836369999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1m1!2zMjDCsDUwJzEwLjkiTiA4NcKwMDYnMjQuMyJF!5e0!3m2!1sen!2sin!4v1759905943185!5m2!1sen!2sin",link:"https://www.google.com/maps/place/Creative+CT+Office/@20.750000,85.000000,17z"}].map((i,o)=>e.jsxs("div",{className:"map-card reveal",style:{transitionDelay:`${o*.15}s`},children:[e.jsxs("div",{className:"map-card-header",children:[e.jsx("i",{className:i.icon}),e.jsx("h3",{children:i.title})]}),e.jsx("iframe",{src:i.src,title:i.title,allowFullScreen:!0,loading:"lazy"}),e.jsx("div",{className:"map-card-footer",children:e.jsxs("a",{href:i.link,target:"_blank",rel:"noreferrer",className:"btn-primary",style:{fontSize:"0.82rem",padding:"8px 20px"},children:[e.jsx("i",{className:"fa-solid fa-map-location-dot"})," Open in Maps"]})})]},o))})]})]})}function Ku(){v.useEffect(()=>{const i=document.querySelectorAll(".reveal, .reveal-left, .reveal-right"),o=new IntersectionObserver(c=>c.forEach(d=>{d.isIntersecting&&d.target.classList.add("visible")}),{threshold:.1});return i.forEach(c=>o.observe(c)),()=>o.disconnect()},[])}const Qu=[{year:"1995",label:"Founded",desc:"Journey began with computer education as a franchise of APTECH Computer Education."},{year:"2010",label:"CTC Established",desc:"Creative Techno College officially launched, offering BBA & BCA under Utkal University."},{year:"2017",label:"1st Permanent Approved",desc:"Became the 1st Permanently Approved College of Angul in Central Odisha."},{year:"2024",label:"AICTE Approved",desc:"Received AICTE approval, marking adherence to the highest national educational standards."}],qu=[{icon:"fa-solid fa-graduation-cap",title:"Educational Excellence",desc:"Committed to the highest standards of academic quality and student achievement across all programs."},{icon:"fa-solid fa-hands-helping",title:"Community Service",desc:"Dedicated to serving the region through education, outreach, and deep social responsibility."},{icon:"fa-solid fa-lightbulb",title:"Innovation",desc:"Fostering a culture of creativity, critical thinking, and continuous improvement in everything we do."},{icon:"fa-solid fa-seedling",title:"Holistic Development",desc:"Nurturing not just academic excellence but also character, values, and leadership in every student."}],Xu=["Spoken English","Tally ERP","Web Development","Digital Marketing","Data Analytics","Soft Skills"];function Zu(){return Ku(),e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"ckf-hero",style:{textAlign:"left"},children:e.jsxs("div",{style:{maxWidth:"1100px",margin:"0 auto",display:"flex",alignItems:"center",gap:"48px",flexWrap:"wrap"},children:[e.jsxs("div",{style:{flex:"1 1 320px"},children:[e.jsx("span",{className:"section-label",style:{color:"var(--cyan)"},children:"Our Foundation"}),e.jsxs("h1",{className:"section-title",style:{color:"#fff",margin:"12px 0 16px",textAlign:"left"},children:["About ",e.jsx("span",{style:{color:"var(--gold)"},children:"Creative Knowledge Foundation"})]}),e.jsx("p",{style:{color:"rgba(255,255,255,0.65)",lineHeight:1.8,maxWidth:"480px"},children:"The trust behind Creative Techno College, Angul — empowering education since 1995"})]}),e.jsx("div",{className:"reveal-right",style:{flex:"0 0 auto"},children:e.jsx("div",{style:{background:"#fff",padding:"20px",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 10px 30px rgba(0,0,0,0.15)",width:"180px",height:"180px"},children:e.jsx("img",{src:"/CTC NEW REACT WEBSITE/images/AboutTrust/aboutckfimg1.png",alt:"CKF Logo",style:{height:"auto",width:"100%",maxWidth:"120px",opacity:1}})})})]})}),e.jsx("section",{style:{background:"var(--page-bg)",padding:"60px 5%"},children:e.jsx("div",{style:{maxWidth:"1100px",margin:"0 auto",display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"20px"},children:Qu.map((i,o)=>e.jsxs("div",{className:"milestone-card reveal",style:{transitionDelay:`${o*.1}s`},children:[e.jsx("div",{className:"milestone-year",children:i.year}),e.jsx("h3",{style:{fontFamily:"var(--font-head)",fontWeight:800,color:"var(--navy)",marginBottom:"10px",fontSize:"0.93rem"},children:i.label}),e.jsx("p",{children:i.desc})]},o))})}),e.jsx("section",{style:{background:"#fff"},children:e.jsxs("div",{className:"ckf-history",children:[e.jsxs("div",{style:{textAlign:"center",marginBottom:"40px"},children:[e.jsx("span",{className:"section-label",children:"Our Story"}),e.jsxs("h2",{className:"section-title",children:["The ",e.jsx("span",{children:"CKF Journey"})]})]}),e.jsx("img",{src:"/CTC NEW REACT WEBSITE/images/AboutTrust/aboutckfimg2.png",alt:"CKF Timeline",className:"ckf-timeline-img reveal"}),e.jsxs("div",{className:"ckf-history-text reveal",children:[e.jsx("p",{children:"CREATIVE KNOWLEDGE FOUNDATION with Regd. Office at Tamrit Colony, Angul, Odisha is running CREATIVE TECHNO COLLEGE since 2010 situated at Baluakata, Sharadhapur, Angul."}),e.jsx("p",{children:"However the journey was started at Institutional level in year 1995 with computer education as a franchise of APTECH COMPUTER EDUCATION (APTECH Ltd.) upto 2007 and run distance education BBA, BCA, MBA and MCA courses between 2001–2015."}),e.jsxs("p",{children:["Since 2010 CREATIVE TECHNO COLLEGE is offering BBA and BCA undergraduate courses in computer application and management recognized by Government of Odisha, Department of Higher Education and Affiliated to Utkal University. In 2018 another course B.Sc. in Computer Science has been added under this umbrella. The founder of the college Mr. Gyanendra Sahu has dedicatedly worked hard to make the college the ",e.jsx("strong",{children:"1st Permanent Approved College of Angul"})," in Central Odisha in 2017."]}),e.jsxs("p",{children:["In 2019 our college has been awarded as ",e.jsx("strong",{children:"Best Professional College by Odisha Education Award 2019"}),". We received AICTE approval in 2024, which ensures the college is adhering to strict standards in terms of infrastructure, faculty, teaching methodology, and overall educational excellence."]}),e.jsx("p",{children:"In Skill Development area of IT education and training: in 2009 we trained 300 trainees in association with OCAC; in 2011–12 we trained 150 trainees in association with DTET Odisha; in 2014 we worked with OKCL (Odisha Knowledge Corporation Ltd.); and in 2018 we trained 120 trainees under NALCO CSR fund in association with AISECT Bhopal."})]})]})}),e.jsxs("section",{style:{background:"var(--page-bg)"},children:[e.jsxs("div",{style:{maxWidth:"1100px",margin:"0 auto",padding:"60px 5% 0",textAlign:"center"},children:[e.jsx("span",{className:"section-label",children:"What We Stand For"}),e.jsxs("h2",{className:"section-title",children:["Our Core ",e.jsx("span",{children:"Values"})]})]}),e.jsx("div",{style:{maxWidth:"1100px",margin:"24px auto 0",padding:"0 5% 72px",display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"20px"},children:qu.map((i,o)=>e.jsxs("div",{className:"ckf-value-card reveal",style:{transitionDelay:`${o*.1}s`},children:[e.jsx("div",{className:"ckf-value-icon",children:e.jsx("i",{className:i.icon})}),e.jsx("h3",{children:i.title}),e.jsx("p",{children:i.desc})]},o))})]}),e.jsx("section",{style:{background:"#fff",padding:"72px 5%"},children:e.jsxs("div",{className:"ckf-skills-banner reveal",style:{maxWidth:"1100px",margin:"0 auto"},children:[e.jsxs("div",{style:{flex:"1 1 300px"},children:[e.jsx("span",{className:"section-label",style:{color:"var(--cyan)"},children:"Vocational Wing"}),e.jsx("h2",{children:"CKF Skills"}),e.jsx("p",{children:"CKF Skills is the vocational and skill development wing of Creative Knowledge Foundation, offering industry-relevant training programs to bridge the skill gap and enhance employability among youth in Odisha."})]}),e.jsx("div",{style:{flex:"1 1 260px"},children:e.jsx("div",{className:"ckf-skill-tags",children:Xu.map((i,o)=>e.jsx("span",{children:i},o))})})]})})]})}function eh(){v.useEffect(()=>{const i=document.querySelectorAll(".reveal, .reveal-left, .reveal-right"),o=new IntersectionObserver(c=>c.forEach(d=>{d.isIntersecting&&d.target.classList.add("visible")}),{threshold:.1});return i.forEach(c=>o.observe(c)),()=>o.disconnect()},[])}const ah=[{img:"/CTC NEW REACT WEBSITE/images/AboutUs/StrongAcademic.png",title:"Strong Academics",desc:"Comprehensive programs delivered by experienced faculty to boost academic excellence and career readiness."},{img:"/CTC NEW REACT WEBSITE/images/AboutUs/PrePlacementActivity.jpg",title:"Pre-Placement Training",desc:"Mock interviews, aptitude tests, and resume workshops to prepare students for campus placements."},{img:"/CTC NEW REACT WEBSITE/images/AboutUs/LiveProjects.png",title:"Skill Development",desc:"Hands-on live projects and internship programs to bridge the gap between academics and industry."},{img:"/CTC NEW REACT WEBSITE/images/AboutUs/Hostel.jpg",title:"Hostel Facilities",desc:"Comfortable, secure, and well-maintained separate hostels for boys and girls with 24/7 security."},{img:"/CTC NEW REACT WEBSITE/images/AboutUs/transportation.png",title:"Buses & Transportation",desc:"Safe and timely college bus services covering major routes across Angul and surrounding areas."},{img:"/CTC NEW REACT WEBSITE/images/AboutUs/Playground.png",title:"Play Ground & Sports",desc:"Dedicated outdoor sports facilities to promote physical fitness, teamwork, and competitive spirit."},{img:"/CTC NEW REACT WEBSITE/images/AboutUs/Canteen_Caffeteria.jpg",title:"Canteen & Cafeteria",desc:"Hygienic and affordable canteen offering nutritious meals and refreshments throughout the day."},{img:"/CTC NEW REACT WEBSITE/images/AboutUs/GreenCampus.png",title:"Green Campus",desc:"Lush eco-friendly campus with beautiful surroundings promoting a healthy and inspiring environment."}];function th(){return eh(),e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"page-hero",children:[e.jsx("div",{className:"page-hero-dots"}),e.jsx("span",{className:"section-label",children:"Know Us Better"}),e.jsxs("h1",{children:["About ",e.jsx("span",{children:"Creative Techno College"})]}),e.jsx("p",{children:"Excellence in Education since 2010 — Angul, Odisha"})]}),e.jsx("section",{style:{padding:"80px 5%",background:"#fff"},children:e.jsxs("div",{style:{maxWidth:"1200px",margin:"0 auto",display:"flex",gap:"60px",flexWrap:"wrap",alignItems:"center"},children:[e.jsxs("div",{className:"reveal-left",style:{flex:"1 1 380px"},children:[e.jsx("span",{className:"section-label",children:"Our Story"}),e.jsxs("h2",{className:"section-title",children:["A Legacy of ",e.jsx("span",{children:"Excellence"})]}),e.jsx("p",{style:{color:"#4a6080",lineHeight:1.9,marginBottom:"16px"},children:"Creative Techno College (CTC), Angul (A Unit of Creative Knowledge Foundation) is located at Balukata, Sharadhapur, Angul. It is recognized by Govt. of Odisha, Dept. of Higher Education and affiliated to Utkal University — a pioneer college in Central Odisha providing IT and management education."}),e.jsx("p",{style:{color:"#4a6080",lineHeight:1.9,marginBottom:"16px"},children:"The college has a group of experienced faculties and supporting staff, well-equipped infrastructure and air-conditioned computer labs. Besides course curriculum, CTC emphasizes developing students' professional skills through soft skill training including spoken English, group discussions, debates, mock interviews, and more."}),e.jsx("p",{style:{color:"#4a6080",lineHeight:1.9,marginBottom:"28px"},children:"With a dedicated placement cell, experienced faculty, and vibrant campus life through Gymkhana activities, CTC provides a holistic educational experience that goes beyond textbooks and classrooms."}),e.jsx("div",{style:{display:"flex",gap:"16px",flexWrap:"wrap"},children:e.jsxs(ke,{to:"/admission",className:"btn-primary",children:[e.jsx("i",{className:"fa-solid fa-graduation-cap"})," Apply Now"]})})]}),e.jsxs("div",{className:"reveal-right",style:{flex:"1 1 340px"},children:[e.jsxs("div",{style:{borderRadius:"20px",overflow:"hidden",boxShadow:"var(--shadow-lg)",position:"relative"},children:[e.jsx("img",{src:"/CTC NEW REACT WEBSITE/images/AboutUs/creative-campus.jpg",alt:"CTC Campus",style:{width:"100%",height:"380px",objectFit:"cover",display:"block"}}),e.jsx("div",{style:{position:"absolute",inset:0,background:"linear-gradient(to top, rgba(10,22,40,0.45) 0%, transparent 55%)",pointerEvents:"none"}})]}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"12px",marginTop:"12px"},children:[{val:"15+",label:"Years"},{val:"1500+",label:"Alumni"},{val:"398",label:"Seats"},{val:"95%",label:"Placement"}].map((i,o)=>e.jsxs("div",{className:"reveal",style:{transitionDelay:`${o*.08}s`,background:"linear-gradient(135deg, var(--navy), var(--blue))",borderRadius:"12px",padding:"20px",textAlign:"center",color:"#fff"},children:[e.jsx("div",{style:{fontFamily:"var(--font-head)",fontSize:"1.6rem",fontWeight:900,color:"var(--gold)"},children:i.val}),e.jsx("div",{style:{fontSize:"0.78rem",color:"rgba(255,255,255,0.7)",fontWeight:600,marginTop:"4px"},children:i.label})]},o))})]})]})}),e.jsxs("section",{style:{padding:"80px 5%",background:"linear-gradient(135deg, var(--navy) 0%, #0d2550 50%, var(--blue) 100%)",position:"relative",overflow:"hidden"},children:[e.jsx("div",{style:{position:"absolute",inset:0,background:"radial-gradient(ellipse at 70% 30%, rgba(0,212,255,0.1) 0%, transparent 60%)",pointerEvents:"none"}}),e.jsxs("div",{style:{maxWidth:"1200px",margin:"0 auto",position:"relative"},children:[e.jsxs("div",{style:{textAlign:"center",marginBottom:"48px"},children:[e.jsx("span",{className:"section-label",style:{color:"var(--cyan)"},children:"Career Success"}),e.jsxs("h2",{className:"section-title",style:{color:"#fff"},children:["Best Placement Provider ",e.jsx("span",{style:{color:"var(--gold)"},children:"in Odisha"})]}),e.jsx("p",{style:{color:"rgba(255,255,255,0.65)",maxWidth:"680px",margin:"0 auto",lineHeight:1.9,fontSize:"0.97rem"},children:"Education is not just about subjects learned in college. Becoming educated is a lifelong exercise that can be unbelievably exciting if one jumps into the train of experience and takes a trip to every conceivable place on earth."})]}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:"20px",maxWidth:"900px",margin:"0 auto"},children:[{val:"1500+",label:"Students Placed",icon:"fa-solid fa-user-tie"},{val:"100+",label:"Companies",icon:"fa-solid fa-building"},{val:"₹4.5 LPA",label:"Highest Package",icon:"fa-solid fa-indian-rupee-sign"},{val:"95%",label:"Placement Rate",icon:"fa-solid fa-chart-line"}].map((i,o)=>e.jsxs("div",{className:"reveal",style:{transitionDelay:`${o*.1}s`,background:"rgba(255,255,255,0.07)",border:"1px solid rgba(255,255,255,0.13)",borderRadius:"16px",padding:"28px 20px",textAlign:"center",backdropFilter:"blur(12px)"},children:[e.jsx("i",{className:i.icon,style:{color:"var(--cyan)",fontSize:"1.6rem",marginBottom:"12px",display:"block"}}),e.jsx("div",{style:{fontFamily:"var(--font-head)",fontSize:"1.6rem",fontWeight:900,color:"var(--gold)",marginBottom:"4px"},children:i.val}),e.jsx("div",{style:{fontSize:"0.78rem",color:"rgba(255,255,255,0.65)",fontWeight:600},children:i.label})]},o))}),e.jsx("div",{style:{textAlign:"center",marginTop:"40px"},children:e.jsxs(ke,{to:"/placement",className:"btn-primary",children:[e.jsx("i",{className:"fa-solid fa-briefcase"})," View Placement Details"]})})]})]}),e.jsx("section",{style:{padding:"80px 5%",background:"var(--page-bg)"},children:e.jsxs("div",{style:{maxWidth:"1200px",margin:"0 auto"},children:[e.jsxs("div",{style:{textAlign:"center",marginBottom:"8px"},children:[e.jsx("span",{className:"section-label",children:"Campus Life"}),e.jsxs("h2",{className:"section-title",children:["World-Class ",e.jsx("span",{children:"Facilities"})]}),e.jsx("p",{className:"section-subtitle",style:{margin:"0 auto"},children:"Everything you need for a complete and enriching college experience."})]}),e.jsx("div",{className:"facility-grid",children:ah.map((i,o)=>e.jsxs("div",{className:"facility-card reveal",style:{transitionDelay:`${o%4*.08}s`},children:[e.jsxs("div",{className:"facility-img-wrap",children:[e.jsx("img",{src:i.img,alt:i.title}),e.jsx("div",{className:"facility-img-overlay"})]}),e.jsxs("div",{className:"facility-info",children:[e.jsx("h3",{children:i.title}),e.jsx("p",{children:i.desc})]})]},o))})]})})]})}function nh(){v.useEffect(()=>{const i=document.querySelectorAll(".reveal, .reveal-left, .reveal-right"),o=new IntersectionObserver(c=>c.forEach(d=>{d.isIntersecting&&d.target.classList.add("visible")}),{threshold:.08});return i.forEach(c=>o.observe(c)),()=>o.disconnect()},[])}const rh=[{name:"Mr. Manoj Kumar Das",designation:"Dean (Academic)",qualification:"23 Years Experience",img:"/CTC NEW REACT WEBSITE/images/OURTEAM/Dean Sir.jpg",email:"dasmanojp@gmail.com",role:"admin"},{name:"Mr. Krishnashis Mishra",designation:"Principal",qualification:"M.Tech (CSE) · 15 Yrs",img:"/CTC NEW REACT WEBSITE/images/OURTEAM/Principal Sir.jpg",email:"principal.creativecollege@gmail.com",role:"admin"},{name:"Mr. Bhabani Sankar Sahoo",designation:"Vice Principal",qualification:"M.Tech (CSE) · 7 Yrs",img:"/CTC NEW REACT WEBSITE/images/OURTEAM/Bhabani Sir.jpg",email:"bhabaniwipro89@gmail.com",role:"admin"},{name:"Mr. Subhrajyoti Behera",designation:"HOD — Management Faculty",qualification:"MBA (Marketing)",img:"/CTC NEW REACT WEBSITE/images/OURTEAM/Subhrajyoti Sir.jpg",email:"subhyrajyoticafpl@gmail.com",role:"mgmt"},{name:"Ms. Neha Solanki",designation:"Management Faculty",qualification:"M.Com",img:"/CTC NEW REACT WEBSITE/images/OURTEAM/Neha Mam.jpg",email:"nehasolanki1411@gmail.com",role:"mgmt"},{name:"Ms. Pravati Pradhan",designation:"Mathematics Faculty",qualification:"MSc (Mathematics)",img:"/CTC NEW REACT WEBSITE/images/OURTEAM/Pravati Mam.jpg",email:"",role:"math"},{name:"Mr. Saumya Ranjan Pradhan",designation:"IT Faculty",qualification:"MCA",img:"/CTC NEW REACT WEBSITE/images/OURTEAM/Saumya Sir.jpg",email:"",role:"it"},{name:"Mr. Swastik Ranjan Sahoo",designation:"IT Faculty",qualification:"MCA",img:"/CTC NEW REACT WEBSITE/images/OURTEAM/Swastik Sir.jpg",email:"sahooswastik406@gmail.com",role:"it"},{name:"Ms. Arghyarupa Behera",designation:"IT Faculty",qualification:"MSc (CS)",img:"/CTC NEW REACT WEBSITE/images/OURTEAM/Arghyarupa Mam.jpg",email:"arghyarupabehera3@gmail.com",role:"it"},{name:"Ms. Itishree Nath",designation:"IT Faculty",qualification:"BCA",img:"/CTC NEW REACT WEBSITE/images/OURTEAM/itishreemam.jpg",email:"",role:"it"},{name:"Mr. Satya S. S. Dehury",designation:"Public Relationship Officer",qualification:"MBA",img:"/CTC NEW REACT WEBSITE/images/OURTEAM/Satya Sir.jpg",email:"sssdehury89@gmail.com",role:"admin"},{name:"Ms. Monika Sahu",designation:"Librarian",qualification:"BCA, B.Lib.I.Sc",img:"/CTC NEW REACT WEBSITE/images/OURTEAM/monikamam.jpg",email:"monika28sahu@gmail.com",role:"lib"},{name:"Mr. Abhishek Satpathy",designation:"Accountant",qualification:"B.Com (Acctg), MBA",img:"/CTC NEW REACT WEBSITE/images/OURTEAM/abhiseksir.jpg",email:"abhisheksathpathy020@gmail.com",role:"admin"},{name:"Mr. Sarat Chandra Sahu",designation:"Campus Incharge",qualification:"General +3",img:"/CTC NEW REACT WEBSITE/images/OURTEAM/Sarat Sir.jpg",email:"saratmuna243@gmail.com",role:"admin"}];function ih(){nh();const[i,o]=v.useState(""),c=rh.filter(d=>d.name.toLowerCase().includes(i.toLowerCase())||d.designation.toLowerCase().includes(i.toLowerCase()));return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
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
            `}),e.jsxs("div",{className:"page-hero",children:[e.jsx("div",{className:"page-hero-dots"}),e.jsx("span",{className:"section-label",children:"Meet The People"}),e.jsxs("h1",{children:["Our ",e.jsx("span",{children:"Team"})]}),e.jsx("p",{children:"Dedicated educators and professionals shaping the future of our students"})]}),e.jsxs("div",{className:"team-header",children:[e.jsx("span",{className:"section-label",children:"Faculty & Staff"}),e.jsxs("h2",{children:["The ",e.jsx("span",{children:"Minds"})," Behind CTC"]}),e.jsx("p",{children:"Our team of experienced educators, industry professionals, and dedicated staff work together to provide an exceptional learning experience."})]}),e.jsx("div",{className:"search-bar",children:e.jsx("input",{type:"text",placeholder:"Search by name or designation...",value:i,onChange:d=>o(d.target.value)})}),e.jsx("div",{className:"team-grid",children:c.map((d,m)=>e.jsxs("div",{className:"team-card reveal",style:{transitionDelay:`${m%4*.08}s`},children:[e.jsx("div",{className:"team-card-img",children:e.jsx("img",{src:d.img,alt:d.name,onError:f=>{f.target.src="/CTC NEW REACT WEBSITE/images/HOMEPAGE/Director Sir.jpg"}})}),e.jsxs("div",{className:"team-card-body",children:[e.jsx("h3",{children:d.name}),e.jsx("div",{className:"designation",children:d.designation}),e.jsxs("div",{className:"qualification",children:[e.jsx("i",{className:"fa-solid fa-certificate",style:{marginRight:"5px",color:"#f5c518"}}),d.qualification]}),e.jsxs("div",{className:"email",children:[e.jsx("i",{className:"fa-solid fa-envelope"}),d.email?e.jsx("a",{href:`mailto:${d.email}`,children:d.email}):e.jsx("span",{children:"Email not available"})]})]})]},d.name))})]})}function sh(){v.useEffect(()=>{const i=document.querySelectorAll(".reveal, .reveal-left, .reveal-right"),o=new IntersectionObserver(c=>c.forEach(d=>{d.isIntersecting&&d.target.classList.add("visible")}),{threshold:.08});return i.forEach(c=>o.observe(c)),()=>o.disconnect()},[])}function oh(i,o=1800){const[c,d]=v.useState(0),m=v.useRef(null);return v.useEffect(()=>{const f=m.current;if(!f)return;const u=new IntersectionObserver(([h])=>{if(!h.isIntersecting)return;u.disconnect();let y=0;const j=Math.ceil(i/(o/16)),x=()=>{y=Math.min(y+j,i),d(y),y<i&&requestAnimationFrame(x)};requestAnimationFrame(x)},{threshold:.3});return u.observe(f),()=>u.disconnect()},[i,o]),[c,m]}function lh({pct:i,color:o,label:c,seats:d,admitted:m}){const u=2*Math.PI*54,[h,y]=v.useState(!1),j=v.useRef(null);v.useEffect(()=>{const b=new IntersectionObserver(([P])=>{P.isIntersecting&&(y(!0),b.disconnect())},{threshold:.3});return j.current&&b.observe(j.current),()=>b.disconnect()},[]);const x=h?u*(1-i/100):u;return e.jsxs("div",{ref:j,style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"14px"},children:[e.jsxs("div",{style:{position:"relative",width:"130px",height:"130px"},children:[e.jsxs("svg",{width:"130",height:"130",viewBox:"0 0 130 130",children:[e.jsx("circle",{cx:"65",cy:"65",r:54,fill:"none",stroke:"rgba(255,255,255,0.08)",strokeWidth:"10"}),e.jsx("circle",{cx:"65",cy:"65",r:54,fill:"none",stroke:o,strokeWidth:"10",strokeLinecap:"round",strokeDasharray:u,strokeDashoffset:x,style:{transition:"stroke-dashoffset 1.6s cubic-bezier(.4,0,.2,1)",transformOrigin:"65px 65px",transform:"rotate(-90deg)"}})]}),e.jsxs("div",{style:{position:"absolute",inset:0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[e.jsxs("span",{style:{fontFamily:"var(--font-head)",fontSize:"1.4rem",fontWeight:900,color:"#fff",lineHeight:1},children:[i,"%"]}),e.jsx("span",{style:{fontSize:"0.6rem",color:"rgba(255,255,255,0.45)",marginTop:"2px"},children:"FILLED"})]})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx("div",{style:{fontFamily:"var(--font-head)",fontSize:"1.1rem",fontWeight:800,color:"#fff"},children:c}),e.jsxs("div",{style:{fontSize:"0.72rem",color:"rgba(255,255,255,0.45)",marginTop:"4px"},children:[m," / ",d," seats"]})]})]})}const ch=[{abbr:"BBA",full:"Bachelor of Business Administration",seats:120,duration:"4 Years",fee:"₹50,000/yr",icon:"fa-solid fa-briefcase",tags:["Marketing","Finance","HR","Entrepreneurship"],accent:"#f5c518"},{abbr:"BCA",full:"Bachelor of Computer Applications",seats:120,duration:"4 Years",fee:"₹60,000/yr",icon:"fa-solid fa-laptop-code",tags:["Web Dev","Networking","Database","Java"],accent:"#00d4ff"},{abbr:"B.Sc CS (H)",full:"B.Sc Computer Science (Hons.)",seats:128,duration:"4 Years",fee:"₹60,000/yr",icon:"fa-solid fa-microchip",tags:["AI / ML","Python","Algorithms","Cloud"],accent:"#7b61ff"},{abbr:"B.Sc DS",full:"B.Sc Data Science",seats:30,duration:"4 Years",fee:"₹70,000/yr",icon:"fa-solid fa-chart-pie",tags:["Data Analytics","Statistics","ML","Tableau"],accent:"#ff6b6b"}],Wd=[{n:"01",icon:"fa-solid fa-clipboard-check",title:"Check Eligibility",body:"10+2 pass with min. 45% from any recognised board."},{n:"02",icon:"fa-solid fa-pen-to-square",title:"Fill Application",body:"Complete the online form or visit the college office."},{n:"03",icon:"fa-solid fa-file-arrow-up",title:"Upload Documents",body:"Upload scanned copies as per the document checklist."},{n:"04",icon:"fa-solid fa-credit-card",title:"Pay Fee",body:"Pay admission fee online or at the college counter."},{n:"05",icon:"fa-solid fa-circle-check",title:"Enrolment",body:"Receive confirmation and report on the specified date."}],dh=[{icon:"fa-solid fa-file-signature",label:"10th Certificate & Mark Sheet"},{icon:"fa-solid fa-file-lines",label:"+2 Certificate & Mark Sheet"},{icon:"fa-solid fa-id-card",label:"Aadhaar Card (Self & Parent)"},{icon:"fa-solid fa-graduation-cap",label:"Character / CLC Certificate"},{icon:"fa-solid fa-passport",label:"Migration Certificate"},{icon:"fa-solid fa-camera",label:"4 Passport-Size Photographs"},{icon:"fa-solid fa-shield-halved",label:"Caste Certificate (if applicable)"},{icon:"fa-solid fa-building-columns",label:"Bank Account Details"}],ph=[{course:"BBA",name:"Mr. Subhrajyoti Behera",email:"subhrajyoticafpl@gmail.com",phone:"+91 9861071840",img:"/CTC NEW REACT WEBSITE/images/OURTEAM/Subhrajyoti Sir.jpg",accent:"#f5c518"},{course:"BCA",name:"Mr. Manoj Kumar Das",email:"dasmanojp@gmail.com",phone:"+91 9338233303",img:"/CTC NEW REACT WEBSITE/images/OURTEAM/Dean Sir.jpg",accent:"#00d4ff"},{course:"B.Sc CS(H)",name:"Mr. Krishnashis Mishra",email:"principal.creativecollege@gmail.com",phone:"+91 9853325903",img:"/CTC NEW REACT WEBSITE/images/OURTEAM/Principal Sir.jpg",accent:"#7b61ff"},{course:"B.Sc DS",name:"Mr. Bhabani Sankar Sahoo",email:"bhabaniwipro89@gmail.com",phone:"+91 9668844571",img:"/CTC NEW REACT WEBSITE/images/OURTEAM/Bhabani Sir.jpg",accent:"#ff6b6b"}],mh=[{label:"BBA",pct:100,color:"#f5c518",seats:120,admitted:120},{label:"BCA",pct:50,color:"#00d4ff",seats:120,admitted:60},{label:"B.Sc CS(H)",pct:53,color:"#7b61ff",seats:128,admitted:68},{label:"B.Sc DS",pct:83,color:"#ff6b6b",seats:36,admitted:30}],fh=[{year:"2020",total:119,bba:16,bca:53,bsccs:50},{year:"2021",total:154,bba:30,bca:60,bsccs:64},{year:"2022",total:155,bba:30,bca:60,bsccs:65},{year:"2023",total:157,bba:30,bca:60,bsccs:67},{year:"2024",total:158,bba:30,bca:60,bsccs:68}],ro=200;function uh({target:i,suffix:o=""}){const[c,d]=oh(i);return e.jsxs("span",{ref:d,children:[c,o]})}function hh(){return sh(),e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"adm2-hero",children:[e.jsx("div",{className:"adm2-hero-glow"}),e.jsxs("div",{className:"adm2-hero-content",children:[e.jsx("span",{className:"section-label",style:{color:"var(--cyan)"},children:"Admissions Open"}),e.jsxs("h1",{children:["Shape Your ",e.jsx("span",{style:{color:"var(--gold)"},children:"Future"}),e.jsx("br",{}),"at Creative Techno College"]}),e.jsx("p",{children:"AICTE Approved · Utkal University Affiliated · Angul, Odisha"}),e.jsxs("div",{className:"adm2-hero-btns",children:[e.jsxs(ke,{to:"/admission/apply",className:"btn-primary",children:[e.jsx("i",{className:"fa-solid fa-pen-to-square"})," Apply Online"]}),e.jsxs("a",{href:"/pdfs/brochure.pdf",download:!0,className:"btn-outline",children:[e.jsx("i",{className:"fa-solid fa-file-arrow-down"})," Download Brochure"]})]})]}),e.jsx("div",{className:"adm2-hero-stats",children:[{icon:"fa-solid fa-users",val:398,suf:"+",label:"Total Seats"},{icon:"fa-solid fa-graduation-cap",val:1500,suf:"+",label:"Alumni"},{icon:"fa-solid fa-trophy",val:95,suf:"%",label:"Placement Rate"},{icon:"fa-solid fa-calendar-days",val:15,suf:"+",label:"Years of Excellence"}].map((i,o)=>e.jsxs("div",{className:"adm2-qstat",children:[e.jsx("i",{className:i.icon}),e.jsx("div",{className:"adm2-qstat-val",children:e.jsx(uh,{target:i.val,suffix:i.suf})}),e.jsx("div",{className:"adm2-qstat-label",children:i.label})]},o))})]}),e.jsx("section",{className:"adm2-section",style:{background:"var(--page-bg)"},children:e.jsxs("div",{className:"adm2-wrap",children:[e.jsxs("div",{className:"adm2-heading reveal",children:[e.jsx("span",{className:"section-label",children:"Academic Programs"}),e.jsxs("h2",{className:"section-title",children:["Courses ",e.jsx("span",{children:"Offered"})]}),e.jsx("p",{className:"section-subtitle",style:{margin:"0 auto"},children:"Government recognised · Utkal University affiliated · Industry-focused curriculum"})]}),e.jsx("div",{className:"adm2-courses",children:ch.map((i,o)=>e.jsxs("div",{className:"adm2-course reveal",style:{transitionDelay:`${o*.1}s`},children:[e.jsx("div",{style:{height:"4px",background:i.accent,borderRadius:"20px 20px 0 0",margin:"-28px -28px 24px",flexShrink:0}}),e.jsxs("div",{style:{display:"flex",alignItems:"flex-start",justifyContent:"space-between",gap:"12px",marginBottom:"16px"},children:[e.jsx("div",{style:{background:`${i.accent}1a`,border:`1px solid ${i.accent}44`,borderRadius:"14px",width:"52px",height:"52px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.3rem",color:i.accent,flexShrink:0},children:e.jsx("i",{className:i.icon})}),e.jsxs("div",{style:{background:"var(--page-bg)",borderRadius:"20px",padding:"4px 13px",fontSize:"0.75rem",fontFamily:"var(--font-head)",fontWeight:700,color:"var(--navy)",whiteSpace:"nowrap"},children:[i.seats," seats"]})]}),e.jsx("h3",{style:{fontFamily:"var(--font-head)",fontSize:"1.4rem",fontWeight:900,color:"var(--navy)",marginBottom:"4px"},children:i.abbr}),e.jsx("p",{style:{fontSize:"0.78rem",color:"var(--text-muted)",marginBottom:"16px",lineHeight:1.5},children:i.full}),e.jsx("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",marginBottom:"20px"},children:i.tags.map((c,d)=>e.jsx("span",{style:{background:`${i.accent}16`,color:i.accent,border:`1px solid ${i.accent}30`,borderRadius:"10px",padding:"3px 10px",fontSize:"0.69rem",fontFamily:"var(--font-head)",fontWeight:600},children:c},d))}),e.jsxs("div",{style:{marginTop:"auto",borderTop:"1px solid rgba(10,22,40,0.07)",paddingTop:"16px",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsxs("span",{style:{fontSize:"0.8rem",color:"var(--text-muted)",fontFamily:"var(--font-head)",fontWeight:600},children:[e.jsx("i",{className:"fa-regular fa-clock",style:{marginRight:"5px"}}),i.duration," · ",i.fee]}),e.jsxs(ke,{to:"/admission/apply",style:{display:"inline-flex",alignItems:"center",gap:"6px",background:i.accent,color:i.accent==="#f5c518"?"#0a1628":"#fff",padding:"7px 16px",borderRadius:"20px",fontSize:"0.76rem",fontFamily:"var(--font-head)",fontWeight:700,textDecoration:"none",transition:"opacity 0.2s"},children:["Apply ",e.jsx("i",{className:"fa-solid fa-arrow-right"})]})]})]},o))})]})}),e.jsxs("section",{className:"adm2-section",style:{background:"linear-gradient(160deg, #060d1a 0%, #0a1f3d 50%, #091828 100%)",position:"relative",overflow:"hidden"},children:[e.jsx("div",{style:{position:"absolute",top:"-80px",right:"-80px",width:"400px",height:"400px",borderRadius:"50%",background:"radial-gradient(circle, rgba(0,212,255,0.08) 0%, transparent 70%)",pointerEvents:"none"}}),e.jsx("div",{style:{position:"absolute",bottom:"-60px",left:"-60px",width:"300px",height:"300px",borderRadius:"50%",background:"radial-gradient(circle, rgba(123,97,255,0.08) 0%, transparent 70%)",pointerEvents:"none"}}),e.jsxs("div",{className:"adm2-wrap",style:{position:"relative"},children:[e.jsxs("div",{className:"adm2-heading reveal",children:[e.jsx("span",{className:"section-label",style:{color:"var(--cyan)"},children:"Data Insights"}),e.jsxs("h2",{className:"section-title",style:{color:"#fff"},children:["Admission ",e.jsx("span",{style:{color:"var(--gold)"},children:"Statistics"})]}),e.jsx("p",{style:{color:"rgba(255,255,255,0.45)",fontSize:"0.85rem",marginTop:"6px"},children:"Academic Year 2024-25 seat utilisation & year-over-year enrollment trends"})]}),e.jsx("div",{className:"adm2-rings-row",children:mh.map((i,o)=>e.jsx(lh,{...i},o))}),e.jsx("div",{style:{height:"1px",background:"rgba(255,255,255,0.07)",margin:"56px 0"}}),e.jsx("div",{className:"adm2-heading reveal",style:{marginBottom:"32px"},children:e.jsx("h3",{style:{fontFamily:"var(--font-head)",fontSize:"1.1rem",fontWeight:800,color:"rgba(255,255,255,0.6)",letterSpacing:"0.1em",textTransform:"uppercase"},children:"Year-over-Year Enrollment (2020–2024)"})}),e.jsxs("div",{className:"adm2-yoy reveal",children:[fh.map((i,o)=>e.jsxs("div",{className:"adm2-yoy-row",children:[e.jsx("div",{className:"adm2-yoy-year",children:i.year}),e.jsxs("div",{className:"adm2-yoy-bars",children:[e.jsxs("div",{className:"adm2-yoy-track",title:`BBA: ${i.bba}`,children:[e.jsx("div",{className:"adm2-yoy-fill",style:{width:`${i.bba/ro*100}%`,background:"#f5c518"}}),e.jsx("span",{className:"adm2-yoy-tip",children:i.bba})]}),e.jsxs("div",{className:"adm2-yoy-track",title:`BCA: ${i.bca}`,children:[e.jsx("div",{className:"adm2-yoy-fill",style:{width:`${i.bca/ro*100}%`,background:"#00d4ff"}}),e.jsx("span",{className:"adm2-yoy-tip",children:i.bca})]}),e.jsxs("div",{className:"adm2-yoy-track",title:`B.Sc CS: ${i.bsccs}`,children:[e.jsx("div",{className:"adm2-yoy-fill",style:{width:`${i.bsccs/ro*100}%`,background:"#7b61ff"}}),e.jsx("span",{className:"adm2-yoy-tip",children:i.bsccs})]})]}),e.jsxs("div",{className:"adm2-yoy-total",children:[e.jsx("span",{style:{fontFamily:"var(--font-head)",fontWeight:900,color:"var(--gold)",fontSize:"1.3rem"},children:i.total}),e.jsx("span",{style:{fontSize:"0.65rem",color:"rgba(255,255,255,0.35)",display:"block",marginTop:"2px"},children:"total"})]})]},o)),e.jsx("div",{className:"adm2-yoy-legend",children:[["#f5c518","BBA"],["#00d4ff","BCA"],["#7b61ff","B.Sc CS(H)"]].map(([i,o])=>e.jsxs("span",{children:[e.jsx("span",{style:{background:i}}),o]},o))})]})]})]}),e.jsx("section",{className:"adm2-section",style:{background:"#fff"},children:e.jsxs("div",{className:"adm2-wrap",children:[e.jsxs("div",{className:"adm2-heading reveal",children:[e.jsx("span",{className:"section-label",children:"Simple Process"}),e.jsxs("h2",{className:"section-title",children:["How to ",e.jsx("span",{children:"Apply"})]})]}),e.jsx("div",{className:"adm2-steps reveal",children:Wd.map((i,o)=>e.jsxs("div",{className:"adm2-step",children:[o<Wd.length-1&&e.jsx("div",{className:"adm2-step-line"}),e.jsx("div",{className:"adm2-step-circle",children:e.jsx("i",{className:i.icon})}),e.jsx("div",{className:"adm2-step-num",children:i.n}),e.jsx("h3",{children:i.title}),e.jsx("p",{children:i.body})]},o))})]})}),e.jsx("section",{className:"adm2-section",style:{background:"var(--page-bg)"},children:e.jsxs("div",{className:"adm2-wrap adm2-doc-coord",children:[e.jsxs("div",{className:"reveal-left",style:{flex:"1 1 300px"},children:[e.jsx("span",{className:"section-label",children:"Checklist"}),e.jsxs("h2",{className:"section-title",style:{marginBottom:"24px"},children:["Documents ",e.jsx("span",{children:"Required"})]}),e.jsx("div",{className:"adm2-docgrid",children:dh.map((i,o)=>e.jsxs("div",{className:"adm2-docitem",children:[e.jsx("i",{className:i.icon}),e.jsx("span",{children:i.label})]},o))})]}),e.jsxs("div",{className:"reveal-right",style:{flex:"1 1 340px"},children:[e.jsx("span",{className:"section-label",children:"Get in Touch"}),e.jsx("h2",{className:"section-title",style:{marginBottom:"24px"},children:"Coordinators"}),e.jsx("div",{className:"adm2-coords",children:ph.map((i,o)=>e.jsxs("div",{className:"adm2-coord",children:[e.jsx("img",{src:i.img,alt:i.name,className:"adm2-coord-img",onError:c=>c.target.style.display="none",style:{borderColor:i.accent}}),e.jsxs("div",{children:[e.jsx("span",{className:"adm2-coord-badge",style:{background:`${i.accent}22`,color:i.accent,border:`1px solid ${i.accent}44`},children:i.course}),e.jsx("p",{className:"adm2-coord-name",children:i.name}),e.jsxs("p",{className:"adm2-coord-info",children:[e.jsx("i",{className:"fa-solid fa-phone"}),i.phone]}),e.jsxs("p",{className:"adm2-coord-info",children:[e.jsx("i",{className:"fa-solid fa-envelope"}),i.email]})]})]},o))})]})]})}),e.jsxs("section",{style:{background:"linear-gradient(135deg, var(--navy) 0%, #0f2a4e 100%)",padding:"80px 5%",overflow:"hidden",position:"relative"},children:[e.jsx("div",{style:{position:"absolute",inset:0,background:"radial-gradient(ellipse at 70% 50%, rgba(0,212,255,0.07) 0%, transparent 60%)",pointerEvents:"none"}}),e.jsxs("div",{style:{maxWidth:"1100px",margin:"0 auto",display:"flex",gap:"60px",alignItems:"center",flexWrap:"wrap",position:"relative"},children:[e.jsxs("div",{className:"reveal-left",style:{flex:"1 1 300px"},children:[e.jsx("span",{className:"section-label",style:{color:"var(--cyan)"},children:"Official Publication"}),e.jsxs("h2",{className:"section-title",style:{color:"#fff",marginBottom:"18px"},children:["College ",e.jsx("span",{style:{color:"var(--gold)"},children:"Brochure"})]}),e.jsx("p",{style:{color:"rgba(255,255,255,0.6)",lineHeight:1.9,fontSize:"0.9rem"},children:"Creative Techno College, Angul — permanently recognised by the Government of Odisha, Dept. of Higher Education and affiliated to Utkal University. A pioneer in IT and Management education in Central Odisha since 2010."}),e.jsxs("div",{style:{marginTop:"20px",display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsxs("p",{style:{color:"rgba(255,255,255,0.55)",fontSize:"0.82rem"},children:[e.jsx("i",{className:"fa-solid fa-location-dot",style:{color:"var(--cyan)",marginRight:"8px"}}),"Baluakata, Saradhapur, Angul, Odisha"]}),e.jsxs("p",{style:{color:"rgba(255,255,255,0.55)",fontSize:"0.82rem"},children:[e.jsx("i",{className:"fa-solid fa-building",style:{color:"var(--cyan)",marginRight:"8px"}}),"City Office: Tamrit Colony, Angul"]})]}),e.jsxs("a",{href:"/pdfs/brochure.pdf",download:!0,className:"btn-primary",style:{marginTop:"28px",display:"inline-flex"},children:[e.jsx("i",{className:"fa-solid fa-file-arrow-down"})," Download Brochure"]})]}),e.jsx("div",{className:"reveal-right",style:{flex:"1 1 280px",maxWidth:"460px"},children:e.jsx("img",{src:"/CTC NEW REACT WEBSITE/images/Admission/banner.png",alt:"CTC Brochure",style:{width:"100%",borderRadius:"20px",boxShadow:"0 24px 60px rgba(0,0,0,0.5)"},onError:i=>i.target.style.display="none"})})]})]})]})}const gh="919668844571",fo=[{id:1,label:"Personal Info",icon:"fa-solid fa-user"},{id:2,label:"Academic Info",icon:"fa-solid fa-graduation-cap"},{id:3,label:"Course & Details",icon:"fa-solid fa-book-open"},{id:4,label:"Review & Submit",icon:"fa-solid fa-paper-plane"}];function xh({step:i}){return e.jsx("div",{className:"af-progress",children:fo.map((o,c)=>e.jsxs("div",{className:`af-step-node ${i>=o.id?"done":""} ${i===o.id?"active":""}`,children:[e.jsx("div",{className:"af-node-circle",children:i>o.id?e.jsx("i",{className:"fa-solid fa-check"}):e.jsx("i",{className:o.icon})}),e.jsx("span",{className:"af-node-label",children:o.label}),c<fo.length-1&&e.jsx("div",{className:`af-node-line ${i>o.id?"done":""}`})]},o.id))})}function Ae({label:i,icon:o,error:c,children:d}){return e.jsxs("div",{className:"af-field",children:[e.jsxs("label",{className:"af-label",children:[o&&e.jsx("i",{className:o}),i]}),d,c&&e.jsxs("span",{className:"af-error",children:[e.jsx("i",{className:"fa-solid fa-circle-exclamation"})," ",c]})]})}function bh(){const i=yo(),[o,c]=v.useState(1),[d,m]=v.useState(!1),[f,u]=v.useState({}),[h,y]=v.useState({fullName:"",dob:"",gender:"",category:"",phone:"",email:"",school10:"",pct10:"",school12:"",stream:"",pct12:"",yearPass:"",course:"",address:"",district:"",state:"Odisha",pincode:"",havePC:"",reference:""});v.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[o]);const j=(T,A)=>y(L=>({...L,[T]:A})),x=T=>u(A=>{const L={...A};return delete L[T],L});function b(T){const A={};return T===1&&(h.fullName.trim()||(A.fullName="Full name is required"),h.dob||(A.dob="Date of birth is required"),h.gender||(A.gender="Please select your gender"),h.phone.match(/^\d{10}$/)||(A.phone="Enter a valid 10-digit mobile number")),T===2&&(h.school10.trim()||(A.school10="Please enter your 10th school name"),h.pct10||(A.pct10="Enter 10th percentage / grade"),h.school12.trim()||(A.school12="Please enter your +2 school name"),h.pct12||(A.pct12="Enter +2 percentage / grade"),h.stream||(A.stream="Please select your +2 stream"),h.yearPass||(A.yearPass="Enter your year of passing +2")),T===3&&(h.course||(A.course="Please select a course"),h.address.trim()||(A.address="Address is required"),h.district.trim()||(A.district="District is required"),h.pincode.match(/^\d{6}$/)||(A.pincode="Enter a valid 6-digit pin code")),A}function P(){const T=b(o);if(Object.keys(T).length){u(T);return}u({}),c(A=>A+1)}function H(){c(T=>T-1),u({})}function Y(){const T=`*CTC Admission Application 2026-27*
─────────────────────────────
*PERSONAL DETAILS*
Name       : ${h.fullName}
DOB        : ${h.dob}
Gender     : ${h.gender}
Category   : ${h.category||"General"}
Mobile     : ${h.phone}
Email      : ${h.email||"—"}

*ACADEMIC DETAILS*
10th School: ${h.school10}
10th %/Grade: ${h.pct10}
+2 School  : ${h.school12}
Stream     : ${h.stream}
+2 %/Grade : ${h.pct12}
Year of Pass: ${h.yearPass}

*COURSE & ADDRESS*
Course     : ${h.course}
Address    : ${h.address}
District   : ${h.district}
State      : ${h.state}
PIN        : ${h.pincode}
Has PC/Laptop: ${h.havePC||"—"}
Ref Source : ${h.reference||"—"}
─────────────────────────────
Sent from: creativetechnocollege.ac.in`,A=`https://wa.me/${gh}?text=${encodeURIComponent(T)}`;window.open(A,"_blank"),m(!0)}const R=({name:T,type:A="text",placeholder:L,...Q})=>e.jsx("input",{className:`af-input ${f[T]?"af-input-err":""}`,type:A,value:h[T],placeholder:L,onChange:ue=>{j(T,ue.target.value),x(T)},...Q}),M=({name:T,children:A})=>e.jsx("select",{className:`af-input ${f[T]?"af-input-err":""}`,value:h[T],onChange:L=>{j(T,L.target.value),x(T)},children:A});return d?e.jsx(yh,{name:h.fullName,course:h.course,navigate:i}):e.jsxs("div",{className:"af-page",children:[e.jsxs("div",{className:"af-hero",children:[e.jsx("div",{className:"af-hero-glow"}),e.jsxs("div",{style:{position:"relative"},children:[e.jsx("span",{className:"section-label",style:{color:"var(--cyan)"},children:"Online Application"}),e.jsxs("h1",{style:{fontFamily:"var(--font-head)",fontSize:"clamp(1.6rem, 3.5vw, 2.6rem)",fontWeight:900,color:"#fff",margin:"12px 0 10px"},children:["Apply for Admission ",e.jsx("span",{style:{color:"var(--gold)"},children:"2026–27"})]}),e.jsx("p",{style:{color:"rgba(255,255,255,0.45)",fontSize:"0.88rem",letterSpacing:"0.04em"},children:"Creative Techno College, Angul · AICTE Approved · Utkal University Affiliated"})]})]}),e.jsxs("div",{className:"af-body",children:[e.jsxs("div",{className:"af-card",children:[e.jsx(xh,{step:o}),o===1&&e.jsxs("div",{className:"af-form-section",children:[e.jsxs("h2",{className:"af-form-title",children:[e.jsx("i",{className:"fa-solid fa-user"})," Personal Information"]}),e.jsxs("div",{className:"af-grid-2",children:[e.jsx(Ae,{label:"Full Name *",icon:"fa-solid fa-signature",error:f.fullName,children:e.jsx(R,{name:"fullName",placeholder:"As per 10th certificate"})}),e.jsx(Ae,{label:"Date of Birth *",error:f.dob,children:e.jsx(R,{name:"dob",type:"date"})}),e.jsx(Ae,{label:"Gender *",error:f.gender,children:e.jsxs(M,{name:"gender",children:[e.jsx("option",{value:"",children:"Select Gender"}),e.jsx("option",{children:"Male"}),e.jsx("option",{children:"Female"}),e.jsx("option",{children:"Other"})]})}),e.jsx(Ae,{label:"Category",children:e.jsxs(M,{name:"category",children:[e.jsx("option",{value:"",children:"Select Category"}),e.jsx("option",{children:"General"}),e.jsx("option",{children:"OBC"}),e.jsx("option",{children:"SC"}),e.jsx("option",{children:"ST"}),e.jsx("option",{children:"PwD"})]})}),e.jsx(Ae,{label:"Mobile Number *",icon:"fa-solid fa-phone",error:f.phone,children:e.jsx(R,{name:"phone",type:"tel",placeholder:"10-digit mobile number",maxLength:10})}),e.jsx(Ae,{label:"Email Address",icon:"fa-solid fa-envelope",children:e.jsx(R,{name:"email",type:"email",placeholder:"Optional"})})]})]}),o===2&&e.jsxs("div",{className:"af-form-section",children:[e.jsxs("h2",{className:"af-form-title",children:[e.jsx("i",{className:"fa-solid fa-graduation-cap"})," Academic Details"]}),e.jsx("p",{className:"af-form-subtitle",children:"10th Certificate Details"}),e.jsxs("div",{className:"af-grid-2",children:[e.jsx(Ae,{label:"10th School / Board *",error:f.school10,children:e.jsx(R,{name:"school10",placeholder:"School name"})}),e.jsx(Ae,{label:"10th Percentage / CGPA *",error:f.pct10,children:e.jsx(R,{name:"pct10",placeholder:"e.g. 78% or 7.8 CGPA"})})]}),e.jsx("p",{className:"af-form-subtitle",style:{marginTop:"24px"},children:"+2 / 12th / Diploma Details"}),e.jsxs("div",{className:"af-grid-2",children:[e.jsx(Ae,{label:"+2 School / College / Board *",error:f.school12,children:e.jsx(R,{name:"school12",placeholder:"School / college name"})}),e.jsx(Ae,{label:"+2 Stream *",error:f.stream,children:e.jsxs(M,{name:"stream",children:[e.jsx("option",{value:"",children:"Select Stream"}),e.jsx("option",{children:"Science (PCM)"}),e.jsx("option",{children:"Science (PCB)"}),e.jsx("option",{children:"Commerce"}),e.jsx("option",{children:"Arts / Humanities"}),e.jsx("option",{children:"Vocational"}),e.jsx("option",{children:"Diploma"})]})}),e.jsx(Ae,{label:"+2 Percentage / CGPA *",error:f.pct12,children:e.jsx(R,{name:"pct12",placeholder:"e.g. 65% or 6.5 CGPA"})}),e.jsx(Ae,{label:"Year of Passing +2 *",error:f.yearPass,children:e.jsxs(M,{name:"yearPass",children:[e.jsx("option",{value:"",children:"Select Year"}),[2025,2024,2023,2022,2021,2020,2019].map(T=>e.jsx("option",{children:T},T))]})})]})]}),o===3&&e.jsxs("div",{className:"af-form-section",children:[e.jsxs("h2",{className:"af-form-title",children:[e.jsx("i",{className:"fa-solid fa-book-open"})," Course & Contact Details"]}),e.jsxs(Ae,{label:"Course Applied For *",error:f.course,children:[e.jsx("div",{className:"af-course-pick",children:[{v:"BBA",label:"BBA",sub:"Bachelor of Business Administration",color:"#f5c518"},{v:"BCA",label:"BCA",sub:"Bachelor of Computer Applications",color:"#00d4ff"},{v:"B.Sc CS(H)",label:"B.Sc CS(H)",sub:"Computer Science (Honours)",color:"#7b61ff"},{v:"B.Sc DS",label:"B.Sc DS",sub:"Data Science",color:"#ff6b6b"}].map(T=>e.jsxs("label",{className:`af-course-tile ${h.course===T.v?"sel":""}`,style:{"--tc":T.color},children:[e.jsx("input",{type:"radio",name:"course",value:T.v,checked:h.course===T.v,onChange:()=>{j("course",T.v),x("course")}}),e.jsx("strong",{children:T.label}),e.jsx("span",{children:T.sub})]},T.v))}),f.course&&e.jsxs("span",{className:"af-error",children:[e.jsx("i",{className:"fa-solid fa-circle-exclamation"})," ",f.course]})]}),e.jsx("p",{className:"af-form-subtitle",style:{marginTop:"24px"},children:"Permanent Address"}),e.jsxs("div",{className:"af-grid-2",children:[e.jsx(Ae,{label:"Address *",error:f.address,children:e.jsx("textarea",{className:`af-input ${f.address?"af-input-err":""}`,rows:3,placeholder:"Street / Village / Ward",value:h.address,onChange:T=>{j("address",T.target.value),x("address")}})}),e.jsxs("div",{children:[e.jsx(Ae,{label:"District *",error:f.district,children:e.jsx(R,{name:"district",placeholder:"e.g. Angul"})}),e.jsx(Ae,{label:"State",style:{marginTop:"12px"},children:e.jsx(R,{name:"state",placeholder:"State"})})]}),e.jsx(Ae,{label:"PIN Code *",error:f.pincode,children:e.jsx(R,{name:"pincode",placeholder:"6-digit pin",maxLength:6})}),e.jsx(Ae,{label:"Do you have a PC / Laptop at home?",children:e.jsxs(M,{name:"havePC",children:[e.jsx("option",{value:"",children:"Select"}),e.jsx("option",{children:"Yes"}),e.jsx("option",{children:"No"})]})}),e.jsx(Ae,{label:"How did you hear about us?",children:e.jsxs(M,{name:"reference",children:[e.jsx("option",{value:"",children:"Select"}),e.jsx("option",{children:"Friend / Family"}),e.jsx("option",{children:"Social Media"}),e.jsx("option",{children:"News / Newspaper"}),e.jsx("option",{children:"School / Teacher"}),e.jsx("option",{children:"Walk-in / Visit"}),e.jsx("option",{children:"Other"})]})})]})]}),o===4&&e.jsxs("div",{className:"af-form-section",children:[e.jsxs("h2",{className:"af-form-title",children:[e.jsx("i",{className:"fa-solid fa-eye"})," Review Your Application"]}),e.jsxs("p",{style:{color:"var(--text-muted)",fontSize:"0.83rem",marginBottom:"24px"},children:["Please review your information carefully. Clicking ",e.jsx("strong",{children:"Submit Application"})," will open WhatsApp to send your details to the admission office."]}),e.jsxs("div",{className:"af-review-grid",children:[e.jsx(io,{title:"Personal Information",icon:"fa-solid fa-user",rows:[["Full Name",h.fullName],["Date of Birth",h.dob],["Gender",h.gender],["Category",h.category||"General"],["Mobile",h.phone],["Email",h.email||"—"]]}),e.jsx(io,{title:"Academic Details",icon:"fa-solid fa-graduation-cap",rows:[["10th School",h.school10],["10th Marks",h.pct10],["+2 School",h.school12],["+2 Stream",h.stream],["+2 Marks",h.pct12],["Year of Pass",h.yearPass]]}),e.jsx(io,{title:"Course & Address",icon:"fa-solid fa-book-open",rows:[["Course",h.course],["Address",h.address],["District",h.district],["State",h.state],["PIN Code",h.pincode],["Has PC/Laptop",h.havePC||"—"],["Reference",h.reference||"—"]]})]}),e.jsxs("div",{className:"af-wa-notice",children:[e.jsx("i",{className:"fa-brands fa-whatsapp"}),e.jsxs("p",{children:["Your application will be sent via ",e.jsx("strong",{children:"WhatsApp"})," to the admission office. You may be contacted for document verification on the same number."]})]})]}),e.jsxs("div",{className:"af-nav",children:[o>1?e.jsxs("button",{className:"af-btn-back",onClick:H,children:[e.jsx("i",{className:"fa-solid fa-arrow-left"})," Back"]}):e.jsxs(ke,{to:"/admission",className:"af-btn-back",children:[e.jsx("i",{className:"fa-solid fa-arrow-left"})," Admission Info"]}),e.jsxs("div",{style:{display:"flex",gap:"10px",alignItems:"center"},children:[e.jsxs("span",{className:"af-step-count",children:["Step ",o," of ",fo.length]}),o<4?e.jsxs("button",{className:"af-btn-next",onClick:P,children:["Next ",e.jsx("i",{className:"fa-solid fa-arrow-right"})]}):e.jsxs("button",{className:"af-btn-submit",onClick:Y,children:[e.jsx("i",{className:"fa-brands fa-whatsapp"})," Submit via WhatsApp"]})]})]})]}),e.jsxs("aside",{className:"af-aside",children:[e.jsxs("div",{className:"af-aside-card",children:[e.jsxs("h3",{children:[e.jsx("i",{className:"fa-solid fa-circle-info"})," Important Info"]}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Admission is on a ",e.jsx("strong",{children:"first-come, first-served"})," basis."]}),e.jsx("li",{children:"Bring original documents on the day of admission."}),e.jsxs("li",{children:["Eligibility: 10+2 pass with min. ",e.jsx("strong",{children:"45%"})," marks."]}),e.jsxs("li",{children:["For queries call: ",e.jsx("strong",{children:"+91 9778427170"})]})]})]}),e.jsxs("div",{className:"af-aside-card af-aside-courses",children:[e.jsxs("h3",{children:[e.jsx("i",{className:"fa-solid fa-table-list"})," Available Seats"]}),[{label:"BBA",seats:120,color:"#f5c518"},{label:"BCA",seats:120,color:"#00d4ff"},{label:"B.Sc CS(H)",seats:128,color:"#7b61ff"},{label:"B.Sc DS",seats:30,color:"#ff6b6b"}].map(T=>e.jsxs("div",{className:"af-seat-row",children:[e.jsx("span",{style:{width:"10px",height:"10px",borderRadius:"50%",background:T.color,display:"inline-block",flexShrink:0}}),e.jsx("span",{className:"af-seat-label",children:T.label}),e.jsxs("span",{className:"af-seat-count",children:[T.seats," seats"]})]},T.label))]}),e.jsxs("div",{className:"af-aside-card",children:[e.jsxs("h3",{children:[e.jsx("i",{className:"fa-solid fa-location-dot"})," Campus Address"]}),e.jsx("p",{children:"Baluakata, Saradhapur, Angul, Odisha — 759143"}),e.jsx("p",{style:{marginTop:"8px"},children:"City Office: Tamrit Colony, Angul"})]})]})]})]})}function io({title:i,icon:o,rows:c}){return e.jsxs("div",{className:"af-review-block",children:[e.jsxs("div",{className:"af-review-block-title",children:[e.jsx("i",{className:o})," ",i]}),c.map(([d,m])=>e.jsxs("div",{className:"af-review-row",children:[e.jsx("span",{className:"af-review-key",children:d}),e.jsx("span",{className:"af-review-val",children:m||"—"})]},d))]})}function yh({name:i,course:o,navigate:c}){return e.jsx("div",{className:"af-success-page",children:e.jsxs("div",{className:"af-success-card",children:[e.jsx("div",{className:"af-success-icon",children:e.jsx("i",{className:"fa-solid fa-circle-check"})}),e.jsx("h2",{children:"Application Submitted!"}),e.jsxs("p",{children:["Thank you, ",e.jsx("strong",{children:i}),"! Your application for ",e.jsx("strong",{children:o})," has been sent to the Creative Techno College admission office via WhatsApp."]}),e.jsx("p",{style:{fontSize:"0.82rem",color:"var(--text-muted)",marginTop:"12px"},children:"Our team will contact you on your registered mobile number for further steps. Please keep your documents ready."}),e.jsxs("div",{style:{display:"flex",gap:"12px",justifyContent:"center",flexWrap:"wrap",marginTop:"28px"},children:[e.jsxs("button",{className:"btn-primary",onClick:()=>c("/admission"),children:[e.jsx("i",{className:"fa-solid fa-arrow-left"})," Back to Admission"]}),e.jsxs("button",{className:"btn-outline",onClick:()=>c("/"),children:[e.jsx("i",{className:"fa-solid fa-house"})," Home"]})]})]})})}const vh=[{code:"BBA",full:"Bachelor of Business Administration",tagline:"Lead. Manage. Innovate.",icon:"fa-solid fa-briefcase",color:"#f59e0b",colorDark:"#d97706",colorLight:"#fef3c7",accent:"#92400e",tag:"Management",seats:120,duration:"4 Years · 8 Semesters",eligibility:"10+2 pass in any stream from a recognised board",overview:"The BBA program provides a solid foundation in management, business principles, and entrepreneurship. It blends theoretical concepts with practical applications to prepare students for leadership roles in the corporate world.",highlights:["Core subjects in Marketing, Finance, and Human Resource Management","Case studies, business simulations, and industry projects","Regular seminars, workshops, and industry visits","Focus on communication, leadership, and decision-making skills"],career:["Business Manager","Marketing Executive","HR Specialist","Entrepreneur","MBA Studies"],syllabus:"/CTC NEW REACT WEBSITE/images/REGULARCOURSES/BBA.pdf"},{code:"BCA",full:"Bachelor of Computer Applications",tagline:"Code. Build. Deploy.",icon:"fa-solid fa-laptop-code",color:"#3b82f6",colorDark:"#2563eb",colorLight:"#eff6ff",accent:"#1e3a8a",tag:"Technology",seats:120,duration:"4 Years · 8 Semesters",eligibility:"10+2 pass in any stream with Mathematics / Statistics as one subject",overview:"BCA is an undergraduate program focused on computer applications and IT skills. It prepares students to work in the software industry with a strong foundation in programming, databases, and system design.",highlights:["Programming in C, C++, Java, Python","Database Management, Web Development & Software Engineering","Exposure to cloud computing, networking & cybersecurity","Hands-on training via projects, coding competitions & workshops"],career:["Software Developer","Web Designer","Database Admin","System Analyst","MCA Studies"],syllabus:"/CTC NEW REACT WEBSITE/images/REGULARCOURSES/BCA.pdf"},{code:"B.Sc CS",full:"B.Sc. Computer Science (Honours)",tagline:"Analyse. Compute. Discover.",icon:"fa-solid fa-microchip",color:"#10b981",colorDark:"#059669",colorLight:"#ecfdf5",accent:"#064e3b",tag:"Science",seats:128,duration:"4 Years · 8 Semesters",eligibility:"10+2 pass with Science stream (compulsory)",overview:"This program offers in-depth knowledge of computer science fundamentals and advanced concepts. It emphasises analytical skills, algorithmic thinking, and research-oriented study.",highlights:["Data Structures, Algorithms & Operating Systems","Computer Networks, AI, Compiler Design, Software Development","Practical lab sessions and mini-projects every semester","Research and innovation-driven learning environment"],career:["Software Engineer","System Admin","Research Associate","M.Sc./MCA Studies"],syllabus:"/CTC NEW REACT WEBSITE/images/REGULARCOURSES/Bsc.pdf"},{code:"B.Sc DS",full:"B.Sc. Computer Science (Data Science)",tagline:"Predict. Analyse. Transform.",icon:"fa-solid fa-chart-line",color:"#8b5cf6",colorDark:"#7c3aed",colorLight:"#f5f3ff",accent:"#4c1d95",tag:"Data Science",seats:30,duration:"4 Years · 8 Semesters",eligibility:"10+2 pass with Science stream — Mathematics is compulsory",overview:"Designed for students aspiring to build a career in Data Science and AI. Focuses on data analytics, machine learning, and big data technologies for tech-driven industries.",highlights:["Python, R, Statistics & Data Visualization","Machine Learning, Deep Learning & Artificial Intelligence","Big Data Analytics & Cloud Computing concepts","Industry-based projects, internships & live case studies"],career:["Data Analyst","ML Engineer","BI Developer","AI Researcher","M.Sc. DS Studies"],syllabus:"/CTC NEW REACT WEBSITE/images/REGULARCOURSES/BscDsc.pdf"}];function jh(i,o=1500,c=!1){const[d,m]=v.useState(0);return v.useEffect(()=>{if(!c)return;let f=null;const u=h=>{f||(f=h);const y=Math.min((h-f)/o,1);m(Math.floor(y*i)),y<1&&requestAnimationFrame(u)};requestAnimationFrame(u)},[i,o,c]),d}const wh=[{value:4,label:"Programs",suffix:""},{value:240,label:"Total Seats",suffix:"+"},{value:4,label:"Year Duration",suffix:""},{value:100,label:"Placement Assist",suffix:"%"}];function Sh(){const i=v.useRef(null),[o,c]=v.useState(!1);return v.useEffect(()=>{const d=new IntersectionObserver(([m])=>{m.isIntersecting&&c(!0)},{threshold:.3});return i.current&&d.observe(i.current),()=>d.disconnect()},[]),e.jsx("div",{ref:i,className:"rc2-stats-row",children:wh.map((d,m)=>{const f=jh(d.value,1400,o);return e.jsxs("div",{className:"rc2-stat",style:{animationDelay:`${m*.1}s`},children:[e.jsxs("span",{className:"rc2-stat-num",children:[f,d.suffix]}),e.jsx("span",{className:"rc2-stat-label",children:d.label})]},m)})})}function Ch({course:i,index:o}){const[c,d]=v.useState(!1),m=v.useRef(null),[f,u]=v.useState(!1);return v.useEffect(()=>{const h=new IntersectionObserver(([y])=>{y.isIntersecting&&u(!0)},{threshold:.1});return m.current&&h.observe(m.current),()=>h.disconnect()},[]),e.jsxs("div",{ref:m,className:`rc2-card${f?" rc2-card--visible":""}`,style:{"--card-color":i.color,"--card-dark":i.colorDark,"--card-light":i.colorLight,animationDelay:`${o*.1}s`},children:[e.jsxs("div",{className:"rc2-card-header",style:{background:`linear-gradient(135deg, ${i.colorDark} 0%, ${i.color} 100%)`},children:[e.jsx("div",{className:"rc2-card-header-bg"}),e.jsx("div",{className:"rc2-card-tag",children:i.tag}),e.jsx("i",{className:`${i.icon} rc2-card-icon`}),e.jsx("h3",{className:"rc2-card-code",children:i.code}),e.jsx("p",{className:"rc2-card-full",children:i.full}),e.jsx("p",{className:"rc2-card-tagline",children:i.tagline}),e.jsxs("div",{className:"rc2-card-pills",children:[e.jsxs("span",{children:[e.jsx("i",{className:"fa-regular fa-clock"})," ",i.duration]}),e.jsxs("span",{children:[e.jsx("i",{className:"fa-solid fa-users"})," ",i.seats," Seats"]})]})]}),e.jsx("div",{className:"rc2-card-quick",children:e.jsxs("div",{className:"rc2-card-quick-item",children:[e.jsx("i",{className:"fa-solid fa-check-circle",style:{color:i.color}}),e.jsx("span",{children:i.eligibility})]})}),e.jsxs("button",{className:"rc2-card-toggle",style:{"--btn-color":i.color},onClick:()=>d(h=>!h),children:[e.jsx("span",{children:c?"Show Less":"Explore Course"}),e.jsx("i",{className:`fa-solid fa-chevron-${c?"up":"down"}`})]}),e.jsx("div",{className:`rc2-card-body${c?" rc2-card-body--open":""}`,children:e.jsxs("div",{className:"rc2-card-body-inner",children:[e.jsxs("div",{className:"rc2-section",children:[e.jsxs("h4",{children:[e.jsx("i",{className:"fa-solid fa-circle-info",style:{color:i.color}})," Overview"]}),e.jsx("p",{children:i.overview})]}),e.jsxs("div",{className:"rc2-section",children:[e.jsxs("h4",{children:[e.jsx("i",{className:"fa-solid fa-star",style:{color:i.color}})," Program Highlights"]}),e.jsx("ul",{className:"rc2-highlights",children:i.highlights.map((h,y)=>e.jsxs("li",{children:[e.jsx("span",{className:"rc2-bullet",style:{background:i.color}}),h]},y))})]}),e.jsxs("div",{className:"rc2-section",children:[e.jsxs("h4",{children:[e.jsx("i",{className:"fa-solid fa-rocket",style:{color:i.color}})," Career Paths"]}),e.jsx("div",{className:"rc2-career-tags",children:i.career.map((h,y)=>e.jsx("span",{className:"rc2-career-tag",style:{"--tc":i.color,"--tl":i.colorLight},children:h},y))})]}),e.jsxs("a",{href:i.syllabus,download:!0,className:"rc2-syllabus-btn",style:{background:`linear-gradient(135deg, ${i.colorDark}, ${i.color})`},children:[e.jsx("i",{className:"fa-solid fa-file-pdf"}),"Download Syllabus"]})]})})]})}function kh(){return e.jsxs("div",{className:"rc2-page",children:[e.jsx("style",{children:`
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
            `}),e.jsxs("section",{className:"rc2-hero",children:[e.jsx("div",{className:"rc2-hero-orb rc2-hero-orb-1"}),e.jsx("div",{className:"rc2-hero-orb rc2-hero-orb-2"}),e.jsxs("div",{className:"rc2-hero-content",children:[e.jsxs("div",{className:"rc2-hero-left",children:[e.jsxs("div",{className:"rc2-hero-chip",children:[e.jsx("i",{className:"fa-solid fa-graduation-cap"}),"Academics · Regular Programs"]}),e.jsxs("h1",{children:["Shape Your Future with",e.jsx("br",{}),e.jsx("em",{children:"World-Class Degrees"})]}),e.jsx("p",{children:"Industry-aligned 4-year undergraduate programs crafted to equip you with knowledge, real-world skills, and the confidence to lead tomorrow's challenges."})]}),e.jsx("div",{className:"rc2-hero-right",children:e.jsxs("div",{className:"rc2-hero-btns",children:[e.jsxs(ke,{to:"/admission/apply",className:"rc2-btn-primary",children:[e.jsx("i",{className:"fa-solid fa-paper-plane"})," Apply for 2026–27"]}),e.jsxs("a",{href:"#courses",className:"rc2-btn-outline",children:[e.jsx("i",{className:"fa-solid fa-magnifying-glass"})," Explore Courses"]})]})})]})]}),e.jsx("div",{className:"rc2-stats-wrap",children:e.jsx(Sh,{})}),e.jsx("section",{className:"rc2-intro",children:e.jsxs("div",{className:"rc2-intro-inner",children:[e.jsx("div",{className:"rc2-intro-icon",children:"🎓"}),e.jsx("h2",{children:"Our Academic Excellence"}),e.jsx("p",{children:"At Creative Techno College, Angul, we offer career-oriented undergraduate programs designed to equip students with the right blend of knowledge, skills, and industry exposure. Our courses focus on academic excellence, practical learning, and holistic development to prepare graduates for the future."})]})}),e.jsxs("section",{className:"rc2-courses-section",id:"courses",children:[e.jsxs("div",{className:"rc2-section-heading",children:[e.jsx("div",{className:"rc2-section-pill",children:"🎯 Our Programs"}),e.jsxs("h2",{children:["Courses ",e.jsx("span",{children:"Offered"})]}),e.jsx("p",{children:"Click on any course card to explore eligibility, highlights, career paths and download the full syllabus."})]}),e.jsx("div",{className:"rc2-courses-grid",children:vh.map((i,o)=>e.jsx(Ch,{course:i,index:o},i.code))})]}),e.jsx("section",{className:"rc2-features",children:e.jsxs("div",{className:"rc2-features-inner",children:[e.jsxs("h2",{className:"rc2-features-title",children:["Why choose ",e.jsx("span",{children:"Creative Techno College?"})]}),e.jsx("div",{className:"rc2-features-grid",children:[{icon:"fa-solid fa-building-columns",title:"AICTE Approved",desc:"Nationally recognised by All India Council for Technical Education."},{icon:"fa-solid fa-graduation-cap",title:"Utkal University",desc:"Affiliated to the prestigious Utkal University, Odisha."},{icon:"fa-solid fa-handshake",title:"100% Placement Assist",desc:"Dedicated placement cell with 100+ recruiting partners."},{icon:"fa-solid fa-flask",title:"Practical Learning",desc:"State-of-the-art labs, live projects and industry internships."},{icon:"fa-solid fa-globe",title:"Industry Connect",desc:"Regular seminars, workshops and expert guest lectures."}].map((i,o)=>e.jsxs("div",{className:"rc2-feature",children:[e.jsx("i",{className:`${i.icon} rc2-feature-icon`}),e.jsx("h3",{children:i.title}),e.jsx("p",{children:i.desc})]},o))})]})})]})}const Nh={Brain:i=>e.jsxs("svg",{viewBox:"0 0 24 24",width:"24",height:"24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",...i,children:[e.jsx("path",{d:"M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.04-2.44v-10A2.5 2.5 0 0 1 7.5 4.5h2"}),e.jsx("path",{d:"M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.04-2.44v-10A2.5 2.5 0 0 0 16.5 4.5h-2"})]}),Chart:i=>e.jsxs("svg",{viewBox:"0 0 24 24",width:"24",height:"24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",...i,children:[e.jsx("path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}),e.jsx("path",{d:"m7 15 4-4 3 3 5-5"})]}),Bullhorn:i=>e.jsxs("svg",{viewBox:"0 0 24 24",width:"24",height:"24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",...i,children:[e.jsx("path",{d:"M18 8A6 6 0 0 1 18 16M4 8h2l5-3v14l-5-3H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2Z"}),e.jsx("path",{d:"M14 8v8"})]}),Database:i=>e.jsxs("svg",{viewBox:"0 0 24 24",width:"24",height:"24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",...i,children:[e.jsx("ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}),e.jsx("path",{d:"M3 5v14c0 1.5 4 3 9 3s9-1.5 9-3V5"}),e.jsx("line",{x1:"3",x2:"21",y1:"12",y2:"12"}),e.jsx("line",{x1:"3",x2:"21",y1:"8",y2:"8"})]}),Link:i=>e.jsxs("svg",{viewBox:"0 0 24 24",width:"24",height:"24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",...i,children:[e.jsx("path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"}),e.jsx("path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"})]}),PieChart:i=>e.jsxs("svg",{viewBox:"0 0 24 24",width:"24",height:"24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",...i,children:[e.jsx("path",{d:"M21.21 15.89A10 10 0 1 1 8 2.83"}),e.jsx("path",{d:"M22 12A10 10 0 0 0 12 2v10h10Z"})]}),Store:i=>e.jsxs("svg",{viewBox:"0 0 24 24",width:"24",height:"24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",...i,children:[e.jsx("path",{d:"M3 9h18l-2 10H5L3 9Z"}),e.jsx("path",{d:"M6 5h12l2 4"}),e.jsx("rect",{x:"8",y:"13",width:"8",height:"6",rx:"1"})]}),Robot:i=>e.jsxs("svg",{viewBox:"0 0 24 24",width:"24",height:"24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",...i,children:[e.jsx("rect",{x:"3",y:"11",width:"18",height:"10",rx:"2"}),e.jsx("circle",{cx:"9",cy:"16",r:"1",fill:"currentColor"}),e.jsx("circle",{cx:"15",cy:"16",r:"1",fill:"currentColor"}),e.jsx("path",{d:"M8 5h8l2 6H6l2-6Z"}),e.jsx("line",{x1:"12",x2:"12",y1:"5",y2:"2"})]}),FileText:i=>e.jsxs("svg",{viewBox:"0 0 24 24",width:"24",height:"24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",...i,children:[e.jsx("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Z"}),e.jsx("path",{d:"M14 2v6h6"}),e.jsx("line",{x1:"16",x2:"8",y1:"13",y2:"13"}),e.jsx("line",{x1:"16",x2:"8",y1:"17",y2:"17"}),e.jsx("polyline",{points:"10 9 9 9 8 9"})]}),Code:i=>e.jsxs("svg",{viewBox:"0 0 24 24",width:"24",height:"24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",...i,children:[e.jsx("polyline",{points:"16 18 22 12 16 6"}),e.jsx("polyline",{points:"8 6 2 12 8 18"})]}),Users:i=>e.jsxs("svg",{viewBox:"0 0 24 24",width:"24",height:"24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",...i,children:[e.jsx("path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}),e.jsx("circle",{cx:"9",cy:"7",r:"4"}),e.jsx("path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}),e.jsx("path",{d:"M16 3.13a4 4 0 0 1 0 7.75"})]}),Python:i=>e.jsxs("svg",{viewBox:"0 0 24 24",width:"24",height:"24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",...i,children:[e.jsx("ellipse",{cx:"12",cy:"7.5",rx:"6",ry:"3"}),e.jsx("path",{d:"M6 10.5v6c0 1.5 2.7 3 6 3s6-1.5 6-3v-6"}),e.jsx("path",{d:"M6 13.5v3"}),e.jsx("path",{d:"M18 13.5v3"})]}),Rocket:i=>e.jsxs("svg",{viewBox:"0 0 24 24",width:"28",height:"28",fill:"none",stroke:"currentColor",strokeWidth:"1.5",...i,children:[e.jsx("path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09Z"}),e.jsx("path",{d:"M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2Z"}),e.jsx("path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"}),e.jsx("path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"})]}),Coins:i=>e.jsxs("svg",{viewBox:"0 0 24 24",width:"28",height:"28",fill:"none",stroke:"currentColor",strokeWidth:"1.5",...i,children:[e.jsx("circle",{cx:"12",cy:"12",r:"8"}),e.jsx("path",{d:"M8 8c2.5-2 5.5-2 8 0"}),e.jsx("path",{d:"M8 16c2.5 2 5.5 2 8 0"}),e.jsx("line",{x1:"12",x2:"12",y1:"4",y2:"20"})]}),Target:i=>e.jsxs("svg",{viewBox:"0 0 24 24",width:"28",height:"28",fill:"none",stroke:"currentColor",strokeWidth:"1.5",...i,children:[e.jsx("circle",{cx:"12",cy:"12",r:"10"}),e.jsx("circle",{cx:"12",cy:"12",r:"6"}),e.jsx("circle",{cx:"12",cy:"12",r:"2",fill:"currentColor"})]}),Bolt:i=>e.jsx("svg",{viewBox:"0 0 24 24",width:"28",height:"28",fill:"none",stroke:"currentColor",strokeWidth:"1.5",...i,children:e.jsx("path",{d:"M13 2L3 14h8l-2 8 10-12h-8l2-8z"})}),CheckCircle:i=>e.jsxs("svg",{viewBox:"0 0 24 24",width:"20",height:"20",fill:"none",stroke:"currentColor",strokeWidth:"2",...i,children:[e.jsx("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),e.jsx("polyline",{points:"22 4 12 14.01 9 11.01"})]}),ArrowRight:i=>e.jsxs("svg",{viewBox:"0 0 24 24",width:"18",height:"18",fill:"none",stroke:"currentColor",strokeWidth:"2",...i,children:[e.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),e.jsx("polyline",{points:"12 5 19 12 12 19"})]}),Mail:i=>e.jsxs("svg",{viewBox:"0 0 24 24",width:"20",height:"20",fill:"none",stroke:"currentColor",strokeWidth:"2",...i,children:[e.jsx("rect",{x:"2",y:"4",width:"20",height:"16",rx:"2"}),e.jsx("path",{d:"m22 7-10 7L2 7"})]}),Clock:i=>e.jsxs("svg",{viewBox:"0 0 24 24",width:"16",height:"16",fill:"none",stroke:"currentColor",strokeWidth:"2",...i,children:[e.jsx("circle",{cx:"12",cy:"12",r:"10"}),e.jsx("polyline",{points:"12 6 12 12 16 14"})]}),Level:i=>e.jsxs("svg",{viewBox:"0 0 24 24",width:"16",height:"16",fill:"none",stroke:"currentColor",strokeWidth:"2",...i,children:[e.jsx("path",{d:"M2 20h20"}),e.jsx("path",{d:"M4 16l2-8 2 8"}),e.jsx("path",{d:"M12 16l2-8 2 8"}),e.jsx("path",{d:"M20 16l2-8 2 8"})]})},Eh=[{title:"Machine Learning",link:"https://creativecollege.in/ML/Registration/index.html",desc:"Learn algorithms that allow computers to learn from data without explicit programming. Build real ML models.",icon:"Brain",gradient:"linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",status:"upcoming",duration:"45 Hours",level:"Intermediate",tags:["Python","Scikit-learn","TensorFlow"]},{title:"Data Science",desc:"Statistical and computational techniques to extract insights from data — cleaning, visualization, modeling and more.",icon:"Chart",gradient:"linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)",status:"completed",duration:"50 Hours",level:"Beginner to Advanced",tags:["Python","Pandas","Matplotlib"]},{title:"Digital Marketing",desc:"Promote brands to connect with customers using the internet — SEO, social media, email and web advertising.",icon:"Bullhorn",gradient:"linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",status:"completed",duration:"35 Hours",level:"Beginner",tags:["SEO","Google Ads","Meta Ads"]}],Md=[{title:"Data Science",icon:"Database",gradient:"linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",status:"completed",duration:"50 hrs"},{title:"Affiliate Marketing",icon:"Link",gradient:"linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",status:"completed",duration:"25 hrs"},{title:"Power BI",icon:"PieChart",gradient:"linear-gradient(135deg, #fa709a 0%, #fee140 100%)",status:"completed",duration:"30 hrs"},{title:"Retail Marketing",icon:"Store",gradient:"linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)",status:"upcoming",duration:"28 hrs"},{title:"Artificial Intelligence",icon:"Robot",gradient:"linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",status:"upcoming",duration:"55 hrs"},{title:"Digital Marketing",icon:"Bullhorn",gradient:"linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",status:"completed",duration:"35 hrs"},{title:"HR Documentation",icon:"FileText",gradient:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",status:"upcoming",duration:"22 hrs"},{title:"Advance Java",icon:"Code",gradient:"linear-gradient(135deg, #f77062 0%, #fe5196 100%)",status:"upcoming",duration:"60 hrs"},{title:"HR Professionals",icon:"Users",gradient:"linear-gradient(135deg, #96fbc4 0%, #f9f586 100%)",status:"upcoming",duration:"30 hrs"},{title:"Full Stack Python",icon:"Python",gradient:"linear-gradient(135deg, #30cfd0 0%, #667eea 100%)",status:"upcoming",duration:"75 hrs"}],Th=[{icon:"Rocket",title:"Expand Career Horizons",desc:"Gain in-demand skills that complement your degree and open new career opportunities."},{icon:"Coins",title:"Cost-Effective Learning",desc:"More affordable than traditional courses while delivering equivalent or better outcomes."},{icon:"Target",title:"Industry-Relevant Skills",desc:"Curriculum designed in sync with current industry needs and employer demands."},{icon:"Bolt",title:"Flexible Schedule",desc:"Programs are designed to fit alongside your regular coursework seamlessly."}],Od=({status:i})=>{const o=i==="completed";return e.jsxs("span",{className:`status-badge ${o?"completed":"upcoming"}`,children:[e.jsx("span",{className:"status-dot"}),o?"Completed":"Coming Soon"]})},ka=({name:i,className:o="",...c})=>{const d=Nh[i];return d?e.jsx(d,{className:`icon-svg ${o}`,...c}):null};function Ah(){const[i,o]=v.useState("all"),c=i==="all"?Md:Md.filter(d=>d.status===i);return e.jsxs("div",{className:"vac-page",children:[e.jsx("style",{children:`
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
      `}),e.jsx("section",{className:"vac-hero",children:e.jsxs("div",{className:"vac-hero-content",children:[e.jsxs("div",{className:"vac-hero-left",children:[e.jsxs("div",{className:"vac-hero-chip",children:[e.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:e.jsx("path",{d:"M13 2L3 14h8l-2 8 10-12h-8l2-8z"})}),"Learning Management System"]}),e.jsxs("h1",{children:["Supercharge Your Skills with",e.jsx("br",{}),e.jsx("em",{children:"Value‑Added Courses"})]}),e.jsx("p",{children:"Industry‑relevant programs designed to enhance your career prospects and make you stand out in today's competitive job market."})]}),e.jsx("div",{className:"vac-hero-right",children:e.jsx("div",{className:"vac-hero-stats",children:["10+ Courses","Certificate Programs","Industry Experts","Live Projects"].map((d,m)=>e.jsxs("div",{className:"vac-hero-stat-item",children:[e.jsx(ka,{name:"CheckCircle",className:"check",width:18,height:18}),d]},m))})})]})}),e.jsxs("section",{className:"vac-section vac-section-light",children:[e.jsxs("div",{className:"vac-heading",children:[e.jsx("span",{className:"pill",children:"🔥 Featured Programs"}),e.jsxs("h2",{children:["Our Current ",e.jsx("span",{className:"gradient-text",children:"Programs"})]}),e.jsx("p",{children:"Flagship value‑added programs with real industry outcomes and hands‑on learning."})]}),e.jsx("div",{className:"vac-grid-3",children:Eh.map((d,m)=>e.jsxs("div",{className:"vac-card-featured",children:[e.jsxs("div",{className:"vac-card-media",style:{background:d.gradient},children:[e.jsx(ka,{name:d.icon,className:"icon-large"}),e.jsx(Od,{status:d.status}),e.jsx("h3",{children:d.title}),e.jsx("p",{children:d.desc}),e.jsx("div",{className:"vac-tags",children:d.tags.map((f,u)=>e.jsx("span",{className:"vac-tag",children:f},u))})]}),e.jsxs("div",{className:"vac-card-footer",children:[e.jsxs("div",{className:"vac-meta",children:[e.jsxs("span",{children:[e.jsx(ka,{name:"Clock"})," ",d.duration]}),e.jsxs("span",{children:[e.jsx(ka,{name:"Level"})," ",d.level]})]}),d.link?e.jsxs("a",{href:d.link,target:"_blank",rel:"noopener noreferrer",className:"vac-btn-outline",children:[d.status==="completed"?"View Details":"Register"," ",e.jsx(ka,{name:"ArrowRight"})]}):e.jsxs(ke,{to:"/contacts",className:"vac-btn-outline",children:[d.status==="completed"?"View Details":"Register"," ",e.jsx(ka,{name:"ArrowRight"})]})]})]},m))})]}),e.jsxs("section",{className:"vac-section vac-section-dark",children:[e.jsxs("div",{className:"vac-heading",children:[e.jsx("span",{className:"pill",style:{background:"rgba(255,255,255,0.1)",color:"#fff",borderColor:"rgba(255,255,255,0.2)"},children:"📚 More Courses"}),e.jsxs("h2",{children:["Additional ",e.jsx("span",{className:"gradient-text",children:"Learning Paths"})]}),e.jsx("p",{children:"Browse our full catalog of skill‑building courses across technology, business, and management."})]}),e.jsx("div",{className:"vac-filter-bar",children:[["all","All Courses"],["completed","Completed"],["upcoming","Upcoming"]].map(([d,m])=>e.jsx("button",{className:`vac-filter-btn ${i===d?"active":""}`,onClick:()=>o(d),children:m},d))}),e.jsx("div",{className:"vac-grid-mini",children:c.map((d,m)=>e.jsxs("div",{className:"vac-card-mini",children:[e.jsx("div",{className:"vac-mini-top",style:{background:d.gradient},children:e.jsx(ka,{name:d.icon})}),e.jsxs("div",{className:"vac-mini-body",children:[e.jsx("h4",{children:d.title}),e.jsxs("div",{className:"vac-mini-row",children:[e.jsxs("span",{className:"vac-mini-duration",children:[e.jsx(ka,{name:"Clock"})," ",d.duration]}),e.jsx(Od,{status:d.status})]})]})]},m))})]}),e.jsx("section",{className:"vac-section vac-section-light",children:e.jsxs("div",{className:"vac-split",children:[e.jsxs("div",{className:"vac-split-text",children:[e.jsx("span",{className:"pill",children:"💡 Why Join?"}),e.jsxs("h2",{children:["Advantages of Learning ",e.jsx("span",{className:"gradient-text",children:"Extra Skills"})," During Graduation"]}),e.jsx("p",{children:"Build skills that open new doors, make you more employable, and give you a competitive edge in the professional world."}),e.jsx("ul",{className:"vac-checklist",children:["Increased job prospects and wider career horizons","Learn industry tools, techniques & in‑demand languages","More cost‑effective than traditional certification schools","Keep polishing existing skills alongside your degree"].map((d,m)=>e.jsxs("li",{children:[e.jsx(ka,{name:"CheckCircle"})," ",d]},m))})]}),e.jsx("div",{className:"vac-video-embed",children:e.jsx("iframe",{src:"https://www.youtube.com/embed/gUulJAxFuVg?autoplay=0",title:"Value Added Courses",allow:"encrypted-media; picture-in-picture",allowFullScreen:!0})})]})}),e.jsxs("section",{className:"vac-section vac-section-dark",children:[e.jsx("div",{className:"vac-heading",children:e.jsxs("h2",{children:["What You'll ",e.jsx("span",{className:"gradient-text",children:"Gain"})]})}),e.jsx("div",{className:"vac-grid-4",children:Th.map((d,m)=>e.jsxs("div",{className:"vac-adv-card",children:[e.jsx(ka,{name:d.icon}),e.jsx("h3",{children:d.title}),e.jsx("p",{children:d.desc})]},m))})]})]})}const Ph=[{title:"Soft Skills Development",short:"Communication & Leadership",desc:"Build strong communication skills, a magnetic personality, leadership qualities, and interpersonal abilities that employers look for.",icon:"fa-solid fa-comments",color:"#2dd4bf",colorBg:"linear-gradient(135deg, #2dd4bf 0%, #06b6d4 100%)",points:["Public Speaking & Presentation","Team Collaboration & Conflict Resolution","Professional Etiquette & Body Language"]},{title:"Aptitude Training",short:"Quantitative & Logical Reasoning",desc:"Master quantitative aptitude, logical reasoning, and analytical skills for placement drives, competitive exams, and interviews.",icon:"fa-solid fa-calculator",color:"#f59e0b",colorBg:"linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)",points:["Number Systems & Data Interpretation","Verbal & Non-Verbal Reasoning","Mock Tests & Placement Papers"]},{title:"Technical Workshops",short:"Hands-on Technology Sessions",desc:"Deep-dive into the latest technologies through practical workshops, coding competitions, and real-world technical projects.",icon:"fa-solid fa-screwdriver-wrench",color:"#8b5cf6",colorBg:"linear-gradient(135deg, #8b5cf6 0%, #a78bfa 100%)",points:["Hackathons & Coding Competitions","Open-Source Contributions","Industry-Standard Tool Training"]},{title:"Industry Visits",short:"Real-World Exposure",desc:"Step into the real world with organised visits to IT companies, manufacturing plants, and leading industries.",icon:"fa-solid fa-industry",color:"#ec4899",colorBg:"linear-gradient(135deg, #ec4899 0%, #f43f5e 100%)",points:["IT Company Visits","Interaction with Industry Leaders","Understanding Corporate Culture"]},{title:"Guest Lectures",short:"Learn from the Best",desc:"Regular talks by industry professionals, renowned entrepreneurs, and academic experts to broaden your professional perspective.",icon:"fa-solid fa-microphone-lines",color:"#14b8a6",colorBg:"linear-gradient(135deg, #14b8a6 0%, #06b6d4 100%)",points:["Entrepreneur & CEO Talks","Academic Research Sessions","Career Guidance Panels"]},{title:"Entrepreneurship Development",short:"Start & Scale Your Ideas",desc:"Learn to ideate, plan, and execute your own venture with training in business planning, startup fundamentals, and innovation.",icon:"fa-solid fa-rocket",color:"#f97316",colorBg:"linear-gradient(135deg, #f97316 0%, #fb923c 100%)",points:["Business Model Canvas","Startup Pitch & Funding Basics","Incubation & Mentorship Programs"]},{title:"Community Service",short:"Give Back, Grow Together",desc:"Participate in meaningful social outreach programs, environmental campaigns, and CSR activities that build character.",icon:"fa-solid fa-hand-holding-heart",color:"#10b981",colorBg:"linear-gradient(135deg, #10b981 0%, #34d399 100%)",points:["Rural Outreach Programs","Environmental Awareness Drives","Blood Donation & Health Camps"]},{title:"Sports & Fitness",short:"Compete & Stay Fit",desc:"Build teamwork, discipline, and a healthy body through annual sports events, fitness activities, and inter-college competitions.",icon:"fa-solid fa-trophy",color:"#3b82f6",colorBg:"linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)",points:["Annual Sports Meet","Indoor & Outdoor Games","Fitness & Wellness Programs"]}],Rh=[{sem:"2nd Sem",activity:"Internship – Initial Exposure",color:"#2dd4bf"},{sem:"3rd Sem",activity:"Online Courses Begin",color:"#8b5cf6"},{sem:"4th Sem",activity:"Value Addition Activities",color:"#f97316"},{sem:"5th Sem",activity:"Advanced Online Courses",color:"#ec4899"},{sem:"6th Sem",activity:"Industry Internship",color:"#10b981"},{sem:"7th Sem",activity:"Minor Projects",color:"#3b82f6"},{sem:"8th Sem",activity:"Major Project (Capstone)",color:"#f59e0b"}];function Bh({activity:i,index:o}){const[c,d]=v.useState(!1),m=v.useRef(null),[f,u]=v.useState(!1);return v.useEffect(()=>{const h=new IntersectionObserver(([y])=>{y.isIntersecting&&u(!0)},{threshold:.1});return m.current&&h.observe(m.current),()=>h.disconnect()},[]),e.jsxs("div",{ref:m,className:`ep2-card${f?" ep2-card--vis":""}`,style:{"--c":i.color,animationDelay:`${o*.08}s`},children:[e.jsxs("div",{className:"ep2-card-icon-bar",style:{background:i.colorBg},children:[e.jsx("i",{className:`${i.icon} ep2-big-icon`}),e.jsxs("div",{className:"ep2-card-header-text",children:[e.jsx("h3",{children:i.title}),e.jsx("p",{children:i.short})]})]}),e.jsxs("div",{className:"ep2-card-body",children:[e.jsx("p",{children:i.desc}),e.jsxs("button",{className:"ep2-toggle-btn",onClick:()=>d(h=>!h),children:[c?"Show Less":"See Details",e.jsx("i",{className:`fa-solid fa-chevron-${c?"up":"down"}`})]}),c&&e.jsx("ul",{className:"ep2-points",children:i.points.map((h,y)=>e.jsxs("li",{children:[e.jsx("i",{className:"fa-solid fa-check-circle"}),h]},y))})]})]})}function Ih(){return e.jsxs("div",{className:"ep2-page",children:[e.jsx("style",{children:`
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
            `}),e.jsxs("section",{className:"ep2-hero",children:[e.jsxs("div",{className:"ep2-hero-orbs",children:[e.jsx("div",{className:"ep2-orb ep2-orb-1"}),e.jsx("div",{className:"ep2-orb ep2-orb-2"})]}),e.jsxs("div",{className:"ep2-hero-content",children:[e.jsxs("div",{className:"ep2-hero-left",children:[e.jsxs("div",{className:"ep2-hero-chip",children:[e.jsx("i",{className:"fa-solid fa-seedling"})," Holistic Development"]}),e.jsxs("h1",{children:["Enhancement Programs for",e.jsx("br",{}),e.jsx("em",{children:"All-Round Excellence"})]}),e.jsx("p",{children:"Beyond the classroom — structured programs that develop your personality, skills, and career readiness from Day 1 of graduation."})]}),e.jsx("div",{className:"ep2-hero-right",children:e.jsx("div",{className:"ep2-hero-badges",children:["Soft Skills","Aptitude Training","Industry Exposure","Entrepreneurship","Community Service"].map((i,o)=>e.jsxs("span",{className:"ep2-hero-badge",children:[e.jsx("i",{className:"fa-solid fa-circle-check",style:{color:"#ffcc00"}})," ",i]},o))})})]})]}),e.jsxs("section",{className:"ep2-timeline-section",children:[e.jsxs("div",{className:"ep2-section-heading",children:[e.jsx("div",{className:"ep2-section-pill",children:"📅 Structured Plan"}),e.jsxs("h2",{children:["Semester-wise ",e.jsx("span",{children:"Enhancement Roadmap"})]}),e.jsx("p",{children:"Every semester at CTC is designed with intentional activities to build your capabilities progressively over 4 years."})]}),e.jsx("div",{className:"ep2-timeline",children:Rh.map((i,o)=>e.jsxs("div",{className:"ep2-tl-row",style:{animationDelay:`${o*.1}s`},children:[e.jsx("div",{className:"ep2-tl-dot",style:{background:i.color},children:i.sem.split(" ")[0]}),e.jsxs("div",{className:"ep2-tl-content",children:[e.jsxs("div",{children:[e.jsx("div",{className:"ep2-tl-sem",children:i.sem}),e.jsx("div",{className:"ep2-tl-act",children:i.activity})]}),e.jsx("i",{className:"fa-solid fa-chevron-right ep2-tl-arrow"})]})]},o))})]}),e.jsxs("section",{className:"ep2-activities-section",children:[e.jsxs("div",{className:"ep2-section-heading",children:[e.jsx("div",{className:"ep2-section-pill",children:"🎯 Programs"}),e.jsxs("h2",{children:["Our Enhancement ",e.jsx("span",{children:"Activities"})]}),e.jsx("p",{children:"Click on any card to see what skills you'll build through each program."})]}),e.jsx("div",{className:"ep2-grid",children:Ph.map((i,o)=>e.jsx(Bh,{activity:i,index:o},o))})]}),e.jsxs("section",{className:"ep2-table-section",children:[e.jsxs("div",{className:"ep2-section-heading",children:[e.jsx("div",{className:"ep2-section-pill",children:"📋 All Programs"}),e.jsxs("h2",{children:["Program ",e.jsx("span",{children:"Overview Table"})]}),e.jsx("p",{children:"A snapshot of activities planned across all 4 degree programs at Creative Techno College."})]}),e.jsx("div",{className:"ep2-table-wrap",children:e.jsxs("table",{className:"ep2-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Activity"}),e.jsx("th",{children:"BBA"}),e.jsx("th",{children:"BCA"}),e.jsx("th",{children:"B.Sc CS"}),e.jsx("th",{children:"B.Sc DS"})]})}),e.jsx("tbody",{children:[{act:"🗒️ Minor Projects",sems:["Every Sem","Every Sem","Every Sem","Every Sem"]},{act:"📚 Online Courses",sems:["3rd, 5th, 7th","3rd, 5th, 7th","3rd, 5th, 7th","3rd, 5th, 7th"]},{act:"💼 Internship",sems:["2nd, 4th, 6th","2nd, 4th, 6th","2nd, 4th, 6th","2nd, 4th, 6th"]},{act:"🎓 Major Project",sems:["8th Sem","8th Sem","8th Sem","8th Sem"]}].map((i,o)=>e.jsxs("tr",{children:[e.jsx("td",{children:i.act}),i.sems.map((c,d)=>e.jsx("td",{children:e.jsx("span",{className:"ep2-sem-chip",style:{background:["rgba(45,212,191,0.12)","rgba(139,92,246,0.12)","rgba(59,130,246,0.12)","rgba(245,158,11,0.12)"][d],color:["#0f766e","#7c3aed","#1d4ed8","#b45309"][d],border:`1px solid ${["rgba(45,212,191,0.3)","rgba(139,92,246,0.3)","rgba(59,130,246,0.3)","rgba(245,158,11,0.3)"][d]}`},children:c})},d))]},o))})]})})]})]})}function zh(){v.useEffect(()=>{const i=document.querySelectorAll(".rv"),o=new IntersectionObserver(c=>c.forEach(d=>{d.isIntersecting&&d.target.classList.add("visible")}),{threshold:.07});return i.forEach(c=>o.observe(c)),()=>o.disconnect()},[])}const Wh=[{name:"Mr. Bhabani Shankar Sahoo",role:"Placement Head",img:"/CTC NEW REACT WEBSITE/images/OURTEAM/Bhabani Sir.jpg",icon:"fa-briefcase",color:"#0c2340"},{name:"Mr. Subhrajyoti Behera",role:"Activity Head",img:"/CTC NEW REACT WEBSITE/images/OURTEAM/Subhrajyoti Sir.jpg",icon:"fa-calendar-check",color:"#1a3a6b"}],Mh=[{name:"Wipro",logo:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/wipro.png",color:"#8b2be2"},{name:"TCS",logo:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/tcs.jpg",color:"#0a2472"},{name:"LTI Mindtree",logo:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/lti.png",color:"#00aa44"},{name:"Cognizant",logo:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/cognizant.png",color:"#0066cc"},{name:"Infosys",logo:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/infosys.png",color:"#007acc"},{name:"Capgemini",logo:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/capgemini.png",color:"#0070ad"},{name:"Deloitte",logo:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/DELOITTE.jpeg",color:"#86bc25"}],Oh=[{icon:"fa-rocket",title:"Enhance Employability",desc:"Equip students with the necessary knowledge and skills to secure employment in leading companies."},{icon:"fa-people-group",title:"Holistic Development",desc:"Foster both technical and soft skills to prepare students for every stage of the recruitment process."},{icon:"fa-industry",title:"Industry Readiness",desc:"Align training modules with current market demands and industry expectations."},{icon:"fa-door-open",title:"Inclusive Opportunities",desc:"Provide placement opportunities across a diverse range of companies, including MNCs and local firms."},{icon:"fa-arrows-rotate",title:"Continuous Improvement",desc:"Regularly update and refine the training program based on feedback and evolving market trends."}],Lh=[{img:"/CTC NEW REACT WEBSITE/images/DevelopmentProgram/Workshop.jpg",title:"Workshops",desc:"Hands-on sessions for skill building."},{img:"/CTC NEW REACT WEBSITE/images/DevelopmentProgram/Internship.jpg",title:"Internships",desc:"Real-world work experience for students."},{img:"/CTC NEW REACT WEBSITE/images/DevelopmentProgram/LiveProject.jpg",title:"Live Projects",desc:"Authentic projects to apply knowledge."},{img:"/CTC NEW REACT WEBSITE/images/DevelopmentProgram/Webinar.jpg",title:"Webinars",desc:"Virtual expert sessions on trending topics."},{img:"/CTC NEW REACT WEBSITE/images/DevelopmentProgram/QuantPreparation.jpg",title:"Quants Prep",desc:"Sharpen analytical & numerical skills."},{img:"/CTC NEW REACT WEBSITE/images/DevelopmentProgram/MockInterview.jpg",title:"Mock Interviews",desc:"Simulated interviews for confidence."},{img:"/CTC NEW REACT WEBSITE/images/DevelopmentProgram/ProgrammingSession.jpg",title:"Programming Session",desc:"Dedicated sessions for coding clarity."},{img:"/CTC NEW REACT WEBSITE/images/DevelopmentProgram/SoftSkill.jpg",title:"Soft Skills",desc:"Training in communication & teamwork."},{img:"/CTC NEW REACT WEBSITE/images/DevelopmentProgram/Grooming.jpg",title:"Grooming",desc:"Personality & etiquette improvement."},{img:"/CTC NEW REACT WEBSITE/images/DevelopmentProgram/Seminar.jpg",title:"Seminar",desc:"Develop stage confidence."},{img:"/CTC NEW REACT WEBSITE/images/DevelopmentProgram/Presentation.jpg",title:"Presentation",desc:"Learn impactful presentation skills."},{img:"/CTC NEW REACT WEBSITE/images/DevelopmentProgram/GroupDiscussion.jpg",title:"Group Discussion",desc:"Improve teamwork & critical thinking."}],Dh=[{num:"01",title:"Aptitude & Reasoning",icon:"fa-brain",desc:"Regular practice sessions and mock tests to strengthen problem-solving and analytical skills.",tags:["Quantitative","Logical Reasoning","Mock Tests"],color:"#0c2340"},{num:"02",title:"Technical Skills",icon:"fa-code",desc:"Intensive workshops and hands-on projects for BCA and B.Sc. (CS) students to enhance practical knowledge.",tags:["Programming","Hands-on Projects","DSA"],color:"#1a3a6b"},{num:"03",title:"Soft Skills & Interview Prep",icon:"fa-comments",desc:"Role-playing exercises, group discussions, and interview simulations to improve communication and confidence.",tags:["Communication","Group Discussion","Mock Interview"],color:"#2d5a8e"}],Fh=[{title:"JOB-A-THON 2022",icon:"fa-trophy",sub:"First edition — campus hiring drive"},{title:"JOB-A-THON 2023",icon:"fa-medal",sub:"Expanded to 15+ companies"},{title:"JOB-A-THON 2024",icon:"fa-star",sub:"Record placements — 60+ students"},{title:"MISSION — 40",icon:"fa-bullseye",sub:"2025 drive — 40 MNC targets"}],Hh=[{title:"Enhance Technical Skills",icon:"fa-laptop-code",points:["Equip students with the latest technological skills and tools currently in demand.","Provide practical, hands-on experience with real-world projects and software development."]},{title:"Bridge Academia & Industry",icon:"fa-building-columns",points:["Offer exposure to industry standards, methodologies, and professional work environments.","Facilitate the transition from academic learning to professional application."]},{title:"Promote Collaboration",icon:"fa-handshake",points:["Establish and strengthen partnerships with local software companies for mutual growth.","Provide students with networking opportunities and potential job placements."]},{title:"Improve Employability",icon:"fa-briefcase",points:["Enhance employability by providing relevant, marketable skills and experiences.","Prepare students for careers in tech by improving problem-solving abilities."]}],_h=[{icon:"fa-chart-line",title:"Skill Enhancement",desc:"Provide students with advanced skills that complement their primary coursework."},{icon:"fa-hammer",title:"Practical Application",desc:"Offer hands-on projects that allow students to apply theoretical knowledge in real-world scenarios."},{icon:"fa-industry",title:"Industry Readiness",desc:"Equip students with industry-relevant skills, making them more competitive in the job market."},{icon:"fa-book-open",title:"Comprehensive Learning",desc:"Broaden the learning experience with courses covering emerging technologies and advanced topics."},{icon:"fa-certificate",title:"Certification",desc:"Validate the additional skills acquired by students through a certification process."}];function Uh({item:i,idx:o}){const[c,d]=v.useState(!1);return e.jsxs("div",{className:"rv",style:{borderRadius:18,overflow:"hidden",background:"#fff",border:"1px solid rgba(12,35,64,0.07)",boxShadow:c?"0 16px 48px rgba(12,35,64,0.18)":"0 4px 18px rgba(12,35,64,0.08)",transform:c?"translateY(-8px)":"none",transition:"all 0.3s ease",transitionDelay:`${o%4*.06}s`},onMouseEnter:()=>d(!0),onMouseLeave:()=>d(!1),children:[e.jsxs("div",{style:{position:"relative",overflow:"hidden",height:180},children:[e.jsx("img",{src:i.img,alt:i.title,style:{width:"100%",height:"100%",objectFit:"cover",transition:"transform 0.4s ease",transform:c?"scale(1.06)":"scale(1)"},onError:m=>{m.target.parentElement.style.background="linear-gradient(135deg,#0c2340,#2d5a8e)",m.target.style.display="none"}}),e.jsx("div",{style:{position:"absolute",inset:0,background:c?"rgba(12,35,64,0.3)":"rgba(12,35,64,0)",transition:"background 0.3s"}})]}),e.jsxs("div",{style:{padding:"16px 18px"},children:[e.jsx("div",{style:{fontFamily:"'Plus Jakarta Sans',sans-serif",fontWeight:800,fontSize:"0.9rem",color:"#0c2340",marginBottom:4},children:i.title}),e.jsx("div",{style:{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"0.75rem",color:"#64748b",lineHeight:1.6},children:i.desc})]})]})}function $h({p:i,idx:o}){const[c,d]=v.useState(!1);return e.jsxs("div",{className:"rv",style:{background:c?"linear-gradient(135deg,#0c2340,#1a3a6b)":"#fff",border:"2px solid",borderColor:c?"#0c2340":"rgba(12,35,64,0.15)",borderRadius:22,padding:"36px 28px",textAlign:"center",cursor:"pointer",boxShadow:c?"0 20px 60px rgba(12,35,64,0.35)":"0 4px 20px rgba(12,35,64,0.08)",transform:c?"translateY(-10px) scale(1.03)":"none",transition:"all 0.35s cubic-bezier(0.4,0,0.2,1)",transitionDelay:`${o*.07}s`,position:"relative",overflow:"hidden"},onMouseEnter:()=>d(!0),onMouseLeave:()=>d(!1),children:[c&&e.jsx("div",{style:{position:"absolute",top:"-50%",left:"-50%",width:"200%",height:"200%",background:"radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 70%)",pointerEvents:"none"}}),e.jsx("div",{style:{width:64,height:64,borderRadius:"50%",margin:"0 auto 16px",background:c?"rgba(255,204,0,0.15)":"rgba(12,35,64,0.06)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.5rem",color:c?"#ffcc00":"#0c2340",transition:"all 0.3s"},children:e.jsx("i",{className:`fa-solid ${i.icon}`})}),e.jsx("div",{style:{fontFamily:"'Plus Jakarta Sans',sans-serif",fontWeight:900,fontSize:"1.15rem",color:c?"#ffcc00":"#0c2340",marginBottom:8,letterSpacing:"-0.3px"},children:i.title}),e.jsx("div",{style:{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"0.76rem",color:c?"rgba(255,255,255,0.55)":"#64748b",fontWeight:500},children:i.sub})]})}function at({badge:i,title:o,highlight:c,sub:d}){return e.jsxs("div",{style:{textAlign:"center",marginBottom:48},children:[i&&e.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:7,background:"rgba(12,35,64,0.07)",border:"1px solid rgba(12,35,64,0.12)",color:"#0c2340",fontSize:"0.68rem",fontWeight:800,padding:"6px 16px",borderRadius:30,letterSpacing:"2px",textTransform:"uppercase",marginBottom:14},children:[e.jsx("i",{className:"fa-solid fa-circle-dot",style:{color:"#ffcc00"}}),i]}),e.jsxs("h2",{style:{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"clamp(1.7rem,3.5vw,2.4rem)",fontWeight:900,color:"#0c2340",letterSpacing:"-1px",margin:"0 0 12px",lineHeight:1.1},children:[o," ",c&&e.jsx("span",{style:{color:"#1a3a6b"},children:c})]}),d&&e.jsx("p",{style:{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"0.9rem",color:"#64748b",fontWeight:500,maxWidth:560,margin:"0 auto"},children:d})]})}function Gh(){return zh(),e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
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
  `}),e.jsxs("div",{className:"dp-page",children:[e.jsx("div",{className:"dp-hero",children:e.jsxs("div",{className:"dp-hero-content",children:[e.jsxs("div",{className:"dp-hero-badge",children:[e.jsx("i",{className:"fa-solid fa-graduation-cap"}),"Placement Cell · CTC"]}),e.jsxs("h1",{className:"dp-hero-h1",children:["Student ",e.jsx("em",{children:"Development"}),e.jsx("br",{}),"& Placement Programs"]}),e.jsx("p",{className:"dp-hero-sub",children:"Comprehensive training and placement initiatives designed to enhance employability for BCA, B.Sc. (CS) and BBA students — bridging campus to career."}),e.jsx("div",{style:{display:"flex",gap:20,flexWrap:"wrap"},children:[{val:"7+",lbl:"Top Recruiters"},{val:"12",lbl:"Activities"},{val:"3",lbl:"Training Modules"},{val:"4",lbl:"JOB-A-THON Drives"}].map((o,c)=>e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx("div",{style:{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"1.6rem",fontWeight:900,color:"#ffcc00",lineHeight:1},children:o.val}),e.jsx("div",{style:{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"0.67rem",color:"rgba(255,255,255,0.4)",fontWeight:600,marginTop:3,textTransform:"uppercase",letterSpacing:"0.5px"},children:o.lbl})]},c))})]})}),e.jsx("div",{className:"dp-wave",children:e.jsx("svg",{viewBox:"0 0 1440 56",preserveAspectRatio:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M0,38 C360,56 1080,0 1440,38 L1440,56 L0,56 Z",fill:"#f0f4f8"})})}),e.jsx("div",{className:"dp-section",children:e.jsxs("div",{className:"dp-inner",children:[e.jsx(at,{badge:"Introduction",title:"Our Placement",highlight:"Team",sub:"Dedicated professionals driving student success through structured placement programs and industry partnerships."}),e.jsx("div",{className:"dp-team-grid",children:Wh.map((o,c)=>e.jsxs("div",{className:"dp-team-card rv",style:{transitionDelay:`${c*.1}s`},children:[e.jsxs("div",{style:{height:280,overflow:"hidden",position:"relative"},children:[e.jsx("img",{src:o.img,alt:o.name,style:{width:"100%",height:"100%",objectFit:"cover",objectPosition:"top"},onError:d=>{d.target.parentElement.style.background=`linear-gradient(135deg,${o.color},#2d5a8e)`,d.target.style.display="none",d.target.parentElement.innerHTML+='<div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:4rem;opacity:0.3">👤</div>'}}),e.jsx("div",{style:{position:"absolute",inset:0,background:"linear-gradient(to top, rgba(12,35,64,0.7) 0%, transparent 50%)"}})]}),e.jsxs("div",{style:{padding:"20px 22px"},children:[e.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:7,background:"rgba(12,35,64,0.07)",borderRadius:20,padding:"4px 12px",marginBottom:10},children:[e.jsx("i",{className:`fa-solid ${o.icon}`,style:{fontSize:"0.65rem",color:"#0c2340"}}),e.jsx("span",{style:{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"0.68rem",fontWeight:800,color:"#0c2340",textTransform:"uppercase",letterSpacing:"0.5px"},children:o.role})]}),e.jsx("div",{style:{fontFamily:"'Plus Jakarta Sans',sans-serif",fontWeight:900,fontSize:"1rem",color:"#0c2340"},children:o.name})]})]},c))}),e.jsx("div",{className:"rv",style:{marginTop:48,background:"#fff",borderRadius:20,padding:"32px 36px",border:"1.5px solid rgba(12,35,64,0.08)",boxShadow:"0 4px 20px rgba(12,35,64,0.07)"},children:e.jsxs("p",{style:{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"0.95rem",color:"#334155",lineHeight:1.9,margin:0},children:["These programs outline the objectives, plans, and implementation strategies of our institution's ",e.jsx("strong",{style:{color:"#0c2340"},children:"Off-Campus Drive and Student Readiness Program"}),". This initiative is designed to enhance the employability of our students by providing them with comprehensive training and placement opportunities, with a focus on both multinational corporations (MNCs) and local companies. Our program is tailored for students enrolled in ",e.jsx("strong",{style:{color:"#0c2340"},children:"BCA, B.Sc. (Computer Science), and BBA"})," courses."]})})]})}),e.jsx("div",{className:"dp-section dp-section-alt",children:e.jsxs("div",{className:"dp-inner",children:[e.jsx(at,{badge:"Partners",title:"Our Major",highlight:"Top Recruiters",sub:"Leading MNCs who regularly recruit from Creative Techno College across all batches."}),e.jsx("div",{className:"dp-recruiter-grid",children:Mh.map((o,c)=>e.jsxs("div",{className:"dp-recruiter-card rv",style:{transitionDelay:`${c*.07}s`},children:[e.jsx("img",{src:o.logo,alt:o.name,className:"dp-recruiter-logo",onError:d=>{d.target.style.display="none",d.target.parentElement.style.background=`linear-gradient(135deg,${o.color}22,${o.color}44)`;const m=document.createElement("div");m.style.cssText=`width:90px;height:70px;display:flex;align-items:center;justify-content:center;font-size:1.1rem;font-weight:900;color:${o.color};`,m.textContent=o.name.slice(0,3),d.target.parentElement.insertBefore(m,d.target)}}),e.jsx("div",{className:"dp-recruiter-name",children:o.name})]},c))})]})}),e.jsx("div",{className:"dp-section",children:e.jsxs("div",{className:"dp-inner",children:[e.jsx(at,{badge:"Goals",title:"Program",highlight:"Objectives",sub:"Five pillars that guide our comprehensive placement and development initiative."}),e.jsx("div",{className:"dp-obj-grid",children:Oh.map((o,c)=>e.jsxs("div",{className:"dp-obj-card rv",style:{transitionDelay:`${c*.07}s`},children:[e.jsx("div",{className:"dp-obj-icon",children:e.jsx("i",{className:`fa-solid ${o.icon}`})}),e.jsx("div",{className:"dp-obj-title",children:o.title}),e.jsx("div",{className:"dp-obj-desc",children:o.desc})]},c))})]})}),e.jsx("div",{className:"dp-section dp-section-alt",children:e.jsxs("div",{className:"dp-inner",children:[e.jsx(at,{badge:"Activities",title:"Placement",highlight:"Activity Hub",sub:"12 structured activities that prepare students for every phase of the recruitment process."}),e.jsx("div",{className:"dp-activities-grid",children:Lh.map((o,c)=>e.jsx(Uh,{item:o,idx:c},c))})]})}),e.jsx("div",{className:"dp-section",children:e.jsxs("div",{className:"dp-inner",children:[e.jsx(at,{badge:"Training",title:"Module-Based",highlight:"Training Program",sub:"Three structured modules covering aptitude, technical depth, and soft skills for complete placement readiness."}),e.jsx("div",{className:"dp-modules-grid",children:Dh.map((o,c)=>e.jsxs("div",{className:"dp-module-card rv",style:{transitionDelay:`${c*.1}s`},children:[e.jsx("div",{className:"dp-module-num",children:o.num}),e.jsx("div",{className:"dp-module-icon",style:{background:`linear-gradient(135deg,${o.color},#2d5a8e)`},children:e.jsx("i",{className:`fa-solid ${o.icon}`,style:{color:"#ffcc00"}})}),e.jsx("div",{className:"dp-module-title",children:o.title}),e.jsx("div",{className:"dp-module-desc",children:o.desc}),e.jsx("div",{className:"dp-module-tags",children:o.tags.map((d,m)=>e.jsx("span",{className:"dp-tag",children:d},m))})]},c))})]})}),e.jsx("div",{className:"dp-section dp-section-alt",children:e.jsxs("div",{className:"dp-inner",children:[e.jsx(at,{badge:"Flagship Programs",title:"JOB-A-THON &",highlight:"Placement Drives",sub:"Annual flagship placement programs that connect students directly with top recruiters."}),e.jsx("div",{className:"dp-programs-grid",children:Fh.map((o,c)=>e.jsx($h,{p:o,idx:c},c))})]})}),e.jsx("div",{className:"dp-section",children:e.jsxs("div",{className:"dp-inner",children:[e.jsx(at,{badge:"Internships",title:"Industry",highlight:"Internship Program",sub:"Structured internship goals bridging academic learning with professional industry exposure."}),e.jsx("div",{className:"dp-internship-grid",children:Hh.map((o,c)=>e.jsxs("div",{className:"dp-int-card rv",style:{transitionDelay:`${c*.08}s`},children:[e.jsx("div",{className:"dp-int-icon",children:e.jsx("i",{className:`fa-solid ${o.icon}`})}),e.jsx("div",{className:"dp-int-title",children:o.title}),o.points.map((d,m)=>e.jsxs("div",{className:"dp-int-point",children:[e.jsx("div",{className:"dp-int-bullet",children:e.jsx("i",{className:"fa-solid fa-check"})}),e.jsx("div",{className:"dp-int-text",children:d})]},m))]},c))})]})}),e.jsx("div",{className:"dp-section dp-section-alt",children:e.jsxs("div",{className:"dp-inner",children:[e.jsx(at,{badge:"Value Added",title:"Value Added",highlight:"Courses",sub:"Additional certifications and courses designed to make students stand out in the competitive job market."}),e.jsx("div",{className:"dp-value-grid",children:_h.map((o,c)=>e.jsxs("div",{className:"dp-val-card rv",style:{transitionDelay:`${c*.07}s`},children:[e.jsx("div",{className:"dp-val-icon",children:e.jsx("i",{className:`fa-solid ${o.icon}`})}),e.jsx("div",{className:"dp-val-title",children:o.title}),e.jsx("div",{className:"dp-val-desc",children:o.desc})]},c))}),e.jsx("div",{className:"dp-msg-card rv",style:{marginTop:36},children:e.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:20,flexWrap:"wrap"},children:[e.jsx("div",{style:{width:54,height:54,borderRadius:"50%",flexShrink:0,background:"rgba(255,204,0,0.15)",border:"2px solid rgba(255,204,0,0.3)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.3rem",color:"#ffcc00"},children:e.jsx("i",{className:"fa-solid fa-quote-left"})}),e.jsxs("div",{style:{flex:1},children:[e.jsx("div",{style:{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"0.68rem",fontWeight:800,color:"rgba(255,204,0,0.7)",letterSpacing:2,textTransform:"uppercase",marginBottom:12},children:"From the Placement Head"}),e.jsx("div",{style:{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"0.92rem",color:"rgba(255,255,255,0.75)",lineHeight:1.85,fontStyle:"italic"},children:`"Our institution's Off-Campus Drive and Student Readiness Program is a comprehensive initiative aimed at enhancing the employability of our students. By focusing on pre-placement activities, structured assessment rounds, and targeted training modules, we are committed to preparing our students for successful careers. Our continuous efforts to update and improve the program reflect our dedication to student success and align with the high standards set by the National Board of Accreditation."`}),e.jsx("div",{style:{marginTop:20,fontFamily:"'Plus Jakarta Sans',sans-serif",fontWeight:800,fontSize:"0.88rem",color:"#ffcc00"},children:"Mr. Bhabani Shankar Sahoo"}),e.jsx("div",{style:{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"0.74rem",color:"rgba(255,255,255,0.4)",marginTop:3},children:"Placement Head · Creative Techno College"})]})]})})]})})]})]})}function Jh(){const[i,o]=v.useState(!1),[c,d]=v.useState(!1),m="/CTC NEW REACT WEBSITE/images/PlacementBrochure/PLACEMENT BROUCHURE.pdf",f=`
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
  `,u=()=>{const x=document.createElement("a");x.href=m,x.download="CTC_Placement_Brochure.pdf",x.click()},h=()=>{window.open(m,"_blank")},y=[{icon:"fa-building",label:"Top Recruiters",val:"7+",col:"linear-gradient(135deg,#0c2340,#1a3a6b)"},{icon:"fa-users",label:"Students Placed",val:"250+",col:"linear-gradient(135deg,#1a3a6b,#2d5a8e)"},{icon:"fa-calendar",label:"Years of Data",val:"2020–25",col:"linear-gradient(135deg,#2d5a8e,#3d7ab5)"},{icon:"fa-file-pdf",label:"Format",val:"PDF",col:"linear-gradient(135deg,#c0392b,#e74c3c)"}],j=[{icon:"fa-building-columns",col:"linear-gradient(135deg,#0c2340,#1a3a6b)",title:"About CTC Placements",desc:"Creative Techno College has been consistently placing students in top MNCs including TCS, Wipro, LTI Mindtree, Cognizant and Deloitte since 2020."},{icon:"fa-phone",col:"linear-gradient(135deg,#064e3b,#10b981)",title:"Contact Placement Cell",desc:"For campus recruitment partnerships and placement enquiries, reach the CTC Placement Cell at placements@creativecollege.in"},{icon:"fa-briefcase",col:"linear-gradient(135deg,#78350f,#d97706)",title:"Recruit From CTC",desc:"Partner with us for campus drives, internship programs and direct hiring. We offer BCA, B.Sc. CS and BBA graduates trained in industry-relevant skills."}];return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:f}),e.jsxs("div",{className:"pb-page",children:[e.jsx("div",{className:"pb-hero",children:e.jsxs("div",{className:"pb-hero-content",children:[e.jsxs("div",{className:"pb-hero-left",children:[e.jsxs("div",{className:"pb-hero-badge",children:[e.jsx("i",{className:"fa-solid fa-file-pdf"})," Placement Brochure · CTC"]}),e.jsxs("h1",{className:"pb-hero-title",children:["Our ",e.jsx("em",{children:"Placement"}),e.jsx("br",{}),"Brochure"]}),e.jsx("p",{className:"pb-hero-sub",children:"Complete placement brochure of Creative Techno College — featuring top recruiters, student profiles, infrastructure and placement process for campus partners."})]}),e.jsxs("div",{className:"pb-hero-right",children:[e.jsxs("button",{className:"pb-hero-btn primary",onClick:u,children:[e.jsx("i",{className:"fa-solid fa-file-arrow-down"})," Download PDF"]}),e.jsxs("button",{className:"pb-hero-btn secondary",onClick:h,children:[e.jsx("i",{className:"fa-solid fa-arrow-up-right-from-square"})," Open in New Tab"]})]})]})}),e.jsx("div",{className:"pb-wave",children:e.jsx("svg",{viewBox:"0 0 1440 56",preserveAspectRatio:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M0,38 C360,56 1080,0 1440,38 L1440,56 L0,56 Z",fill:"#f0f4f8"})})}),e.jsxs("div",{className:"pb-main",children:[e.jsx("div",{className:"pb-info-strip",children:y.map((x,b)=>e.jsxs("div",{className:"pb-info-chip",style:{animationDelay:`${b*.08}s`},children:[e.jsx("div",{className:"pb-info-chip-icon",style:{background:x.col},children:e.jsx("i",{className:`fa-solid ${x.icon}`})}),e.jsxs("div",{children:[e.jsx("div",{className:"pb-info-chip-val",children:x.val}),e.jsx("div",{className:"pb-info-chip-lbl",children:x.label})]})]},b))}),e.jsxs("div",{className:"pb-viewer-card",children:[e.jsxs("div",{className:"pb-toolbar",children:[e.jsxs("div",{className:"pb-toolbar-left",children:[e.jsx("div",{className:"pb-toolbar-icon",children:e.jsx("i",{className:"fa-solid fa-file-pdf"})}),e.jsxs("div",{children:[e.jsx("div",{className:"pb-toolbar-title",children:"CTC Placement Brochure"}),e.jsx("div",{className:"pb-toolbar-sub",children:"Creative Techno College · Official Document"})]})]}),e.jsxs("div",{className:"pb-toolbar-actions",children:[e.jsxs("button",{className:"pb-tool-btn gold",onClick:u,children:[e.jsx("i",{className:"fa-solid fa-download"})," Download"]}),e.jsxs("button",{className:"pb-tool-btn white",onClick:h,children:[e.jsx("i",{className:"fa-solid fa-arrow-up-right-from-square"})," New Tab"]}),e.jsxs("button",{className:"pb-tool-btn white",onClick:()=>d(x=>!x),children:[e.jsx("i",{className:`fa-solid ${c?"fa-compress":"fa-expand"}`}),c?"Exit":"Expand"]})]})]}),e.jsxs("div",{className:`pb-iframe-wrap${c?" fullscreen-mode":""}`,children:[!i&&e.jsxs("div",{className:"pb-loader",children:[e.jsx("div",{className:"pb-loader-ring"}),e.jsx("div",{className:"pb-loader-text",children:"Loading placement brochure…"})]}),e.jsx("iframe",{src:`${m}#toolbar=1&navpanes=1&scrollbar=1&view=FitH`,title:"CTC Placement Brochure",onLoad:()=>o(!0),style:{opacity:i?1:0,transition:"opacity 0.4s"}})]}),e.jsxs("div",{className:"pb-fullscreen-hint",children:[e.jsxs("div",{className:"pb-hint-text",children:[e.jsx("i",{className:"fa-solid fa-circle-info"}),"Use the toolbar above to download or open in a new tab for the best viewing experience."]}),e.jsxs("button",{className:"pb-tool-btn gold",onClick:u,style:{background:"rgba(12,35,64,0.07)",color:"#0c2340",border:"1.5px solid rgba(12,35,64,0.12)"},children:[e.jsx("i",{className:"fa-solid fa-file-arrow-down"})," Save Brochure"]})]})]}),e.jsxs("div",{className:"pb-mobile-notice",style:{display:"none"},id:"pb-mobile-fallback",children:[e.jsx("i",{className:"fa-solid fa-mobile-screen"}),e.jsxs("div",{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"On mobile?"})," PDF viewing may be limited on some devices. Download the brochure to your device for the best experience."]}),e.jsxs("button",{className:"pb-mobile-dl-btn",onClick:u,children:[e.jsx("i",{className:"fa-solid fa-file-arrow-down"})," Download Placement Brochure"]})]})]}),e.jsx("div",{className:"pb-bottom-grid",children:j.map((x,b)=>e.jsxs("div",{className:"pb-bottom-card",children:[e.jsx("div",{className:"pb-bottom-card-icon",style:{background:x.col},children:e.jsx("i",{className:`fa-solid ${x.icon}`})}),e.jsx("div",{className:"pb-bottom-card-title",children:x.title}),e.jsx("div",{className:"pb-bottom-card-desc",children:x.desc})]},b))})]})]}),e.jsx("script",{dangerouslySetInnerHTML:{__html:`
        (function(){
          var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
          var el = document.getElementById('pb-mobile-fallback');
          if(isMobile && el) el.style.display = 'flex';
        })();
      `}})]})}function Yh(){v.useEffect(()=>{const i=document.querySelectorAll(".rv"),o=new IntersectionObserver(c=>c.forEach(d=>{d.isIntersecting&&d.target.classList.add("visible")}),{threshold:.06});return i.forEach(c=>o.observe(c)),()=>o.disconnect()},[])}const Ld={TCS:{bg:"#0a2472",text:"#fff",short:"TCS"},WIPRO:{bg:"#8b2be2",text:"#fff",short:"WIP"},"LTI MINDTREE":{bg:"#00aa44",text:"#fff",short:"LTI"},MINDTREE:{bg:"#00aa44",text:"#fff",short:"MT"},COGNIZENT:{bg:"#0066cc",text:"#fff",short:"COG"},COGNIZANT:{bg:"#0066cc",text:"#fff",short:"COG"},INFOSYS:{bg:"#007acc",text:"#fff",short:"INF"},CAPGEMINI:{bg:"#0070ad",text:"#fff",short:"CAP"},DELOITTE:{bg:"#86bc25",text:"#fff",short:"DEL"},ACCENTURE:{bg:"#a100ff",text:"#fff",short:"ACC"},"TECH MAHINDRA":{bg:"#e31837",text:"#fff",short:"TM"},"L&T FINANCE":{bg:"#e8401c",text:"#fff",short:"L&T"},"BAJAJ ALLIANZ":{bg:"#003087",text:"#fff",short:"BAJ"},QSPIDERS:{bg:"#ff6600",text:"#fff",short:"QSP"},GQT:{bg:"#1a1a2e",text:"#fff",short:"GQT"},MPHASYS:{bg:"#6a1e91",text:"#fff",short:"MPH"},HCL:{bg:"#0d6efd",text:"#fff",short:"HCL"},"BYJU'S":{bg:"#fd4c00",text:"#fff",short:"BYJ"}},hp=i=>{const o=Object.keys(Ld).find(c=>i.toUpperCase().includes(c));return o?Ld[o]:{bg:"#334155",text:"#fff",short:i.slice(0,3).toUpperCase()}},gp=[{name:"Asutosh Sahu",batch:"BCA - 2022 AB",company:"TCS",designation:"Software Trainee"},{name:"Swapnajit Sahoo",batch:"BCA - 2022 AB",company:"TCS",designation:"Software Trainee"},{name:"Anish Ashutosh Nayak",batch:"BCA - 2022 AB",company:"TCS",designation:"Software Trainee"},{name:"Abhilipsha Pradhan",batch:"BCA - 2022 AB",company:"TCS",designation:"Software Trainee"},{name:"Adyasha Sahu",batch:"BCA - 2022 AB",company:"TCS",designation:"Software Trainee"},{name:"Archita Dhar",batch:"BCA - 2022 AB",company:"TCS",designation:"Software Trainee"},{name:"Sania Nayak",batch:"BCA - 2022 AB",company:"TCS",designation:"Software Trainee"},{name:"Bhabani Sankar Dash",batch:"BSc.CS - 2022 AB",company:"TCS",designation:"Software Trainee"},{name:"Namitarani Sahu",batch:"BSc.CS - 2022 AB",company:"TCS",designation:"Software Trainee"},{name:"Vishal Tiwari",batch:"BSc.CS - 2022 AB",company:"TCS",designation:"Software Trainee"},{name:"Sangita Pradhan",batch:"BSc.CS - 2022 AB",company:"TCS",designation:"Software Trainee"},{name:"Laxmipriya Sahu",batch:"BSc.CS - 2022 AB",company:"TCS",designation:"Software Trainee"},{name:"Payal Sahoo",batch:"BSc.CS - 2022 AB",company:"TCS",designation:"Software Trainee"},{name:"Nensi Biswal",batch:"BBA - 2022 AB",company:"TCS",designation:"Software Trainee"},{name:"Rituparna Devi",batch:"BBA - 2022 AB",company:"TCS",designation:"Software Trainee"},{name:"Ipsita Sahoo",batch:"BBA - 2022 AB",company:"TCS",designation:"Software Trainee"},{name:"Sandhyarani Sahu",batch:"BSc.CS - 2022 AB",company:"TCS",designation:"Software Trainee"},{name:"Chandrakanta Muduli",batch:"BCA",company:"WIPRO",designation:"Software Trainee"},{name:"Pritam Kumar Behera",batch:"BCA",company:"WIPRO",designation:"Software Trainee"},{name:"Adyasha Sahu",batch:"BCA",company:"WIPRO",designation:"Software Trainee"},{name:"Anish Ashutosh Nayak",batch:"BCA",company:"WIPRO",designation:"Software Trainee"},{name:"Pritiprangya Behera",batch:"BCA",company:"WIPRO",designation:"Software Trainee"},{name:"Chandan Swain",batch:"BCA",company:"WIPRO",designation:"Software Trainee"},{name:"Abhishek Kumar Rai",batch:"BCA",company:"WIPRO",designation:"Software Trainee"},{name:"Resmasmita Priyadarsini",batch:"BSc.CS (H)",company:"WIPRO",designation:"Software Trainee"},{name:"Monalisha Sahu",batch:"BSc.CS (H)",company:"WIPRO",designation:"Software Trainee"},{name:"Sushree Smita Swain",batch:"BSc.CS (H)",company:"WIPRO",designation:"Software Trainee"},{name:"Sushree Sangita Pradhan",batch:"BSc.CS (H)",company:"WIPRO",designation:"Software Trainee"},{name:"Debasish Pradhan",batch:"BSc.CS (H)",company:"WIPRO",designation:"Software Trainee"},{name:"Karan Kumar Nayak",batch:"BSc.CS (H)",company:"WIPRO",designation:"Software Trainee"},{name:"Payal Pradhan",batch:"BSc.CS (H)",company:"WIPRO",designation:"Software Trainee"},{name:"Chandrakanta Muduli",batch:"BCA - 2022 AB",company:"LTI MINDTREE",designation:"Associate Trainee"},{name:"S.K. Akil",batch:"BCA - 2022 AB",company:"LTI MINDTREE",designation:"Associate Trainee"},{name:"Payal Pradhan",batch:"BSc.CS",company:"LTI MINDTREE",designation:"Associate Trainee"},{name:"Pritiprangya Behera",batch:"BCA - 2022 AB",company:"COGNIZENT",designation:"Associate Trainee"},{name:"Ritwik Sahoo",batch:"BSc.CS",company:"COGNIZENT",designation:"Associate Trainee"},{name:"Seema Behera",batch:"BSc.CS",company:"COGNIZENT",designation:"Associate Trainee"},{name:"Lopita Sahu",batch:"BSc.CS",company:"COGNIZENT",designation:"Associate Trainee"},{name:"Anish Ashutosh Nayak",batch:"BCA - 2022 AB",company:"COGNIZENT",designation:"Associate Trainee"},{name:"Ananta Kishor Swain",batch:"BCA - 2022 AB",company:"COGNIZENT",designation:"Associate Trainee"},{name:"Swapnajit Sahoo",batch:"BCA - 2022 AB",company:"COGNIZENT",designation:"Associate Trainee"}],xp=[{name:"Rahul Kumar Sahu",batch:"BBA",company:"TCS",designation:"BPS"},{name:"Prajolita Dehury",batch:"BBA",company:"TCS",designation:"BPS"},{name:"Tushar Raman Naik",batch:"BBA",company:"TCS",designation:"BPS"},{name:"Ayush Lal",batch:"BBA",company:"TCS",designation:"BPS"},{name:"Shibuprasad Nayak",batch:"BBA",company:"TCS",designation:"BPS"},{name:"Khusi Bilas",batch:"BBA",company:"TCS",designation:"BPS"},{name:"Subrat Sahoo",batch:"BBA",company:"TCS",designation:"BPS"},{name:"Prangya Paramita Sahu",batch:"BBA",company:"TCS",designation:"BPS"},{name:"Punam P. Panda",batch:"BBA",company:"TCS",designation:"BPS"},{name:"Titan Kumar Prusty",batch:"BBA",company:"TCS",designation:"BPS"},{name:"Somesh Sahu",batch:"BBA",company:"TCS",designation:"BPS"},{name:"Biswajit Sahu",batch:"BBA",company:"TCS",designation:"BPS"},{name:"Dhiren Mahanta",batch:"BCA",company:"L&T Finance",designation:"Trainee"},{name:"Matru Prasad Muduli",batch:"BCA",company:"L&T Finance",designation:"Trainee"},{name:"Biswajit Sahu",batch:"BCA",company:"L&T Finance",designation:"Trainee"},{name:"Ashis Parida",batch:"BCA",company:"L&T Finance",designation:"Trainee"},{name:"Suman Sahoo",batch:"BSC-CS",company:"L&T Finance",designation:"Trainee"},{name:"Gyana Ranjan Sahu",batch:"BCA",company:"L&T Finance",designation:"Trainee"},{name:"Samit Kumar Pradhan",batch:"BCA",company:"L&T Finance",designation:"Trainee"},{name:"Ayush Lal",batch:"BBA",company:"L&T Finance",designation:"Trainee"},{name:"Titan Kumar Prusty",batch:"BBA",company:"L&T Finance",designation:"Trainee"},{name:"Abhishek Sahu",batch:"BBA",company:"L&T Finance",designation:"Trainee"},{name:"Tushar Raman Naik",batch:"BBA",company:"L&T Finance",designation:"Trainee"},{name:"Rahul Kumar Sahu",batch:"BBA",company:"L&T Finance",designation:"Trainee"},{name:"Subrat Sahoo",batch:"BBA",company:"L&T Finance",designation:"Trainee"},{name:"Alok Kumar Sahoo",batch:"BBA",company:"L&T Finance",designation:"Trainee"},{name:"Sibu Prashad Nayak",batch:"BBA",company:"L&T Finance",designation:"Trainee"},{name:"Ranjeet Yadav",batch:"BCA",company:"L&T Finance",designation:"Trainee"},{name:"Subhakant Pradhan",batch:"BCA",company:"L&T Finance",designation:"Trainee"},{name:"Priyadarshan Pradhan",batch:"BSC-CS",company:"L&T Finance",designation:"Trainee"},{name:"Priyaranjan Sahoo",batch:"BCA",company:"L&T Finance",designation:"Trainee"},{name:"Rasabihari Sahu",batch:"BCA",company:"L&T Finance",designation:"Trainee"},{name:"Hemananda Sahu",batch:"BCA",company:"L&T Finance",designation:"Trainee"},{name:"Alekha Sahoo",batch:"BCA",company:"L&T Finance",designation:"Trainee"},{name:"Subhendu Kumar Pratap Singh",batch:"BCA",company:"L&T Finance",designation:"Trainee"},{name:"Tusar Raman Naik",batch:"BBA",company:"E-panipuri Kartz",designation:"Trainee"},{name:"Abhishek Sahu",batch:"BBA",company:"E-panipuri Kartz",designation:"Trainee"},{name:"Chidatmika Pradhan",batch:"BBA",company:"E-panipuri Kartz",designation:"Trainee"},{name:"Monalisa Pradhan",batch:"BBA",company:"E-panipuri Kartz",designation:"Trainee"},{name:"Prajolita Dehury",batch:"BBA",company:"E-panipuri Kartz",designation:"Trainee"},{name:"Prangya Paramita Sahu",batch:"BBA",company:"E-panipuri Kartz",designation:"Trainee"},{name:"Punam P. Panda",batch:"BBA",company:"E-panipuri Kartz",designation:"Trainee"},{name:"Somesh Sahu",batch:"BBA",company:"E-panipuri Kartz",designation:"Trainee"},{name:"Subhashree Ranjan Tunga",batch:"BSC-CS",company:"Golden India Transport",designation:"Trainee"},{name:"Punam P. Panda",batch:"BBA",company:"Golden India Transport",designation:"Trainee"},{name:"Abhishek Sahoo",batch:"BBA",company:"Golden India Transport",designation:"Trainee"},{name:"Somesh Sahoo",batch:"BBA",company:"Bajaj Allianz",designation:"Trainee"},{name:"Sibuprasad Nayak",batch:"BBA",company:"Bajaj Allianz",designation:"Trainee"},{name:"Alok Kumar Sahoo",batch:"BBA",company:"Bajaj Allianz",designation:"Trainee"},{name:"Tushar Raman Naik",batch:"BBA",company:"Bajaj Allianz",designation:"Trainee"},{name:"Titan Kumar Prusty",batch:"BBA",company:"Bajaj Allianz",designation:"Trainee"},{name:"Pradyuda Kumar Sahoo",batch:"BBA",company:"Bajaj Allianz",designation:"Trainee"},{name:"Abhjit Jena",batch:"BCA",company:"EDEVLOP",designation:"Trainee"},{name:"Priyadarshan Pradhan",batch:"BSC-CS",company:"EDEVLOP",designation:"Trainee"},{name:"Somesh Sahoo",batch:"BBA",company:"Leran Medix",designation:"Trainee"},{name:"Pradyuda Kumar Sahoo",batch:"BBA",company:"Leran Medix",designation:"Trainee"},{name:"Satyabrata Ojha",batch:"BCA",company:"Edtech",designation:"Trainee"},{name:"Ashish Singh",batch:"BCA",company:"Edtech",designation:"Trainee"},{name:"Sourav Sahoo",batch:"BSC-CS",company:"DELOITTE",designation:"Software Trainee"},{name:"Priyadarshan Pradhan",batch:"BSC-CS",company:"DELOITTE",designation:"Software Trainee"},{name:"Kajal Sahoo",batch:"BSC-CS",company:"DELOITTE",designation:"Software Trainee"},{name:"Subhashree Behera",batch:"BCA",company:"ACCENTURE",designation:"Software Trainee"},{name:"Rojalin Tripathy",batch:"BSC-CS",company:"ACCENTURE",designation:"Software Trainee"},{name:"Diptimayee Sahoo",batch:"BSC-CS",company:"TCS",designation:"Software Trainee"},{name:"Gyana Ranjan Nath",batch:"BCA",company:"WIPRO",designation:"Software Trainee"},{name:"Abhijit Jena",batch:"BCA",company:"WIPRO",designation:"Software Trainee"}],bp=[{name:"Itishree Nath",batch:"BCA",company:"WIPRO",designation:"Software Trainee"},{name:"Gaurav Pathak",batch:"BCA",company:"WIPRO",designation:"Software Trainee"},{name:"Adysha Rout",batch:"BCA",company:"WIPRO",designation:"Software Trainee"},{name:"Roshan Das",batch:"BCA",company:"WIPRO",designation:"Software Trainee"},{name:"Jitendriya Jena",batch:"BCA",company:"WIPRO",designation:"Software Trainee"},{name:"Sachin Kumar Dhal",batch:"BCA",company:"WIPRO",designation:"Software Trainee"},{name:"Purusottam Barik",batch:"BCA",company:"WIPRO",designation:"Software Trainee"},{name:"Bednath Sahu",batch:"BCA",company:"WIPRO",designation:"Software Trainee"},{name:"Suraj Kumar Sahoo",batch:"BCA",company:"WIPRO",designation:"Software Trainee"},{name:"Laxminarayan Bisoi",batch:"BSC-CS",company:"WIPRO",designation:"Software Trainee"},{name:"Asit Kumar Biswal",batch:"BSC-CS",company:"WIPRO",designation:"Software Trainee"},{name:"Dharitri Sahoo",batch:"BSC-CS",company:"WIPRO",designation:"Software Trainee"},{name:"Netaji Bai",batch:"BSC-CS",company:"WIPRO",designation:"Software Trainee"},{name:"Rakesh Senapati",batch:"BSC-CS",company:"WIPRO",designation:"Software Trainee"},{name:"Kalpana Naik",batch:"BSC-CS",company:"GQT",designation:"Full Stack Developer"},{name:"Nibedita Sahoo",batch:"BSC-CS",company:"GQT",designation:"Full Stack Developer"},{name:"Sonalee Singh",batch:"BCA",company:"GQT",designation:"Full Stack Developer"},{name:"Gaurav Pathak",batch:"BCA",company:"GQT",designation:"Full Stack Developer"},{name:"Rasmita Sahoo",batch:"BSC-CS",company:"GQT",designation:"Full Stack Developer"},{name:"Shrutisweta Panda",batch:"BSC-CS",company:"GQT",designation:"Full Stack Developer"},{name:"Suraj Naik",batch:"BBA",company:"CREDENTS SOFT",designation:"Intern"},{name:"Ananya Singh",batch:"BBA",company:"CREDENTS SOFT",designation:"Intern"},{name:"Subhranshu Sahu",batch:"BBA",company:"CREDENTS SOFT",designation:"Intern"},{name:"Subrat Kumar Pradhan",batch:"BBA",company:"CREDENTS SOFT",designation:"Intern"},{name:"Jogita Jangyaseni Pradhan",batch:"BBA",company:"CREDENTS SOFT",designation:"Intern"},{name:"Janmejaya Behera",batch:"BBA",company:"CREDENTS SOFT",designation:"Intern"},{name:"Rohan Kumar Sahoo",batch:"BBA",company:"CREDENTS SOFT",designation:"Intern"},{name:"Kusumanjali Pradhan",batch:"BBA",company:"KAMALJIT ENTERPRISES",designation:"Marketing"},{name:"Jogita Jangyaseni Pradhan",batch:"BBA",company:"KAMALJIT ENTERPRISES",designation:"Marketing"},{name:"Janmejaya Behera",batch:"BBA",company:"KAMALJIT ENTERPRISES",designation:"Marketing"},{name:"Roshan Das",batch:"BCA",company:"QSPIDERS",designation:"Trainee"},{name:"Itishree Nath",batch:"BCA",company:"QSPIDERS",designation:"Trainee"},{name:"Rakesh Senapati",batch:"BSC-CS",company:"QSPIDERS",designation:"Trainee"},{name:"Baishanavi Rout",batch:"BSC-CS",company:"QSPIDERS",designation:"Trainee"},{name:"Laxminarayan Bisoi",batch:"BSC-CS",company:"QSPIDERS",designation:"Trainee"},{name:"Adysha Rout",batch:"BCA",company:"QSPIDERS",designation:"Trainee"},{name:"Sandeep Samal",batch:"BSC-CS",company:"QSPIDERS",designation:"Trainee"},{name:"Kalpana Naik",batch:"BSC-CS",company:"QSPIDERS",designation:"Trainee"},{name:"Padmalaya Sahu",batch:"BCA",company:"QSPIDERS",designation:"Trainee"},{name:"Sonalee Singh",batch:"BCA",company:"QSPIDERS",designation:"Trainee"},{name:"Dharitri Sahoo",batch:"BSC-CS",company:"QSPIDERS",designation:"Trainee"},{name:"Subhasmita Singh",batch:"BCA",company:"QSPIDERS",designation:"Trainee"},{name:"Subrat Kumar Sahu",batch:"BCA",company:"QSPIDERS",designation:"Trainee"},{name:"Abhijit Bhuyan",batch:"BSC-CS",company:"QSPIDERS",designation:"Trainee"},{name:"Netaji Bai",batch:"BSC-CS",company:"QSPIDERS",designation:"Trainee"},{name:"Rasmita Sahoo",batch:"BSC-CS",company:"QSPIDERS",designation:"Trainee"},{name:"Arjyakumari Nirlipta",batch:"BSC-CS",company:"QSPIDERS",designation:"Trainee"},{name:"Sruti Sweta Panda",batch:"BSC-CS",company:"QSPIDERS",designation:"Trainee"},{name:"Deepa Sahu",batch:"BSC-CS",company:"QSPIDERS",designation:"Trainee"},{name:"Madhusmita Rout",batch:"BSC-CS",company:"QSPIDERS",designation:"Trainee"},{name:"Sweet Kumari Muni",batch:"BCA",company:"QSPIDERS",designation:"Trainee"},{name:"Chinmayee Sahoo",batch:"BCA",company:"QSPIDERS",designation:"Trainee"},{name:"Satyajit Bhuyan",batch:"BSC-CS",company:"QSPIDERS",designation:"Trainee"},{name:"Purnima Sahoo",batch:"BCA",company:"QSPIDERS",designation:"Trainee"},{name:"Akash Kumar Behera",batch:"BBA",company:"TCS",designation:"BPS"},{name:"Jogita Jangyaseni Pradhan",batch:"BBA",company:"TCS",designation:"BPS"},{name:"Amisha Prasad",batch:"BBA",company:"TCS",designation:"BPS"},{name:"Subrat Kumar Sahu",batch:"BCA",company:"TEACHNOOK",designation:"Academic Counsellor"},{name:"Priyadarshini Garnaik",batch:"BSC-CS",company:"CREDENTS SOFT",designation:"Intern"},{name:"Satyajit Bhuyan",batch:"BSC-CS",company:"TECH MAHINDRA",designation:"BPS"},{name:"Abhijit Bhuyan",batch:"BSC-CS",company:"TECH MAHINDRA",designation:"BPS"},{name:"Akash Kumar Behera",batch:"BBA",company:"TECH MAHINDRA",designation:"BPS"},{name:"Rohan Kumar Sahoo",batch:"BBA",company:"BYJU'S",designation:"HR Role"},{name:"Rasmita Sahoo",batch:"BSC-CS",company:"TECH MAHINDRA",designation:"BPS"},{name:"Janmejaya Behera",batch:"BBA",company:"BYJU'S",designation:"Marketing"},{name:"Jogita Jangyaseni Pradhan",batch:"BBA",company:"BYJU'S",designation:"Marketing"},{name:"Ananya Singh",batch:"BBA",company:"BYJU'S",designation:"Marketing"},{name:"Barsaranee Barik",batch:"BCA",company:"EXCELERATE",designation:"Data Analyst"},{name:"Adysha Rout",batch:"BCA",company:"TECH MAHINDRA",designation:"BPS"},{name:"Janmejaya Behera",batch:"BBA",company:"TECH MAHINDRA",designation:"BPS"},{name:"Adysha Rout",batch:"BCA",company:"CAPGEMINI",designation:"Trainee"},{name:"Abhijit Jena",batch:"BCA",company:"WIPRO",designation:"Software Trainee"}],yp=[{name:"Richa Singh",batch:"BCA (2019-22)",company:"DELOITTE",designation:""},{name:"Snehlata Pandey",batch:"BCA (2019-22)",company:"DELOITTE",designation:""},{name:"Ankita Pradhan",batch:"BCA (2019-22)",company:"DELOITTE",designation:""},{name:"Debasrita Sahu",batch:"BSC (2019-22)",company:"DELOITTE",designation:""},{name:"Ratikanta Pradhan",batch:"BCA (2019-22)",company:"WIPRO",designation:""},{name:"Snehlata Pandey",batch:"BCA (2019-22)",company:"WIPRO",designation:""},{name:"Isha Agarwal",batch:"BCA (2019-22)",company:"WIPRO",designation:""},{name:"Rani Sahu",batch:"BSC (2019-22)",company:"WIPRO",designation:""},{name:"Ankita Pradhan",batch:"BCA (2019-22)",company:"WIPRO",designation:""},{name:"Answesha Sahu",batch:"BSC (2019-22)",company:"WIPRO",designation:""},{name:"Debismita Sahu",batch:"BSC (2019-22)",company:"WIPRO",designation:""},{name:"Tejaswini Pradhan",batch:"BSC (2019-22)",company:"WIPRO",designation:""},{name:"Puja Behera",batch:"BSC (2019-22)",company:"WIPRO",designation:""},{name:"Subhadra Behera",batch:"BSC (2019-22)",company:"WIPRO",designation:""},{name:"Manasmita Sahoo",batch:"BSC (2019-22)",company:"WIPRO",designation:""},{name:"Jyotirmay Prasad",batch:"BCA (2019-22)",company:"WIPRO",designation:""},{name:"S. Satya Sagar",batch:"BCA (2019-22)",company:"WIPRO",designation:""},{name:"Richa Singh",batch:"BCA (2019-22)",company:"WIPRO",designation:""},{name:"Puja Behera",batch:"BSC (2019-22)",company:"LTI",designation:""},{name:"Isha Agarwal",batch:"BCA (2019-22)",company:"LTI",designation:""},{name:"Snehlata Pandey",batch:"BCA (2019-22)",company:"LTI",designation:""},{name:"Jyotirmay Prasad",batch:"BCA (2019-22)",company:"ACCENTURE",designation:""},{name:"Swadesh Behera",batch:"BSC (2019-22)",company:"ACCENTURE",designation:""},{name:"Pratibha Behera",batch:"BCA (2019-22)",company:"MPHASYS",designation:""},{name:"Isha Agarwal",batch:"BCA (2019-22)",company:"MPHASYS",designation:""},{name:"Richa Singh",batch:"BCA (2019-22)",company:"MPHASYS",designation:""},{name:"Snehlata Pandey",batch:"BCA (2019-22)",company:"CAPGEMINI",designation:""},{name:"Smrutirekha Sahu",batch:"BSC (2019-22)",company:"CAPGEMINI",designation:""},{name:"Sratoswini Parida",batch:"BCA (2019-22)",company:"CAPGEMINI",designation:""},{name:"Swadesh Behera",batch:"BSC (2019-22)",company:"CAPGEMINI",designation:""},{name:"Ankita Pani",batch:"BCA (2019-22)",company:"CAPGEMINI",designation:""},{name:"Richa Singh",batch:"BCA (2019-22)",company:"CAPGEMINI",designation:""},{name:"Tejaswini Pradhan",batch:"BSC (2019-22)",company:"CAPGEMINI",designation:""},{name:"Isha Agarwal",batch:"BCA (2019-22)",company:"CAPGEMINI",designation:""},{name:"Rituparna Das",batch:"BBA (2019-22)",company:"O2 SAVER",designation:""},{name:"Iqra Asad",batch:"BBA (2019-22)",company:"O2 SAVER",designation:""},{name:"Vaibhab Sharma",batch:"BBA (2019-22)",company:"O2 SAVER",designation:""},{name:"Sonali Seth",batch:"BSC (2019-22)",company:"O2 SAVER",designation:""},{name:"Smrutirekha Sahu",batch:"BSC (2019-22)",company:"O2 SAVER",designation:""},{name:"Baby Pradhan",batch:"BSC (2019-22)",company:"O2 SAVER",designation:""},{name:"Sucharita Sahu",batch:"BSC (2019-22)",company:"O2 SAVER",designation:""},{name:"Puja Behera",batch:"BSC (2019-22)",company:"O2 SAVER",designation:""},{name:"Tejaswini Pradhan",batch:"BSC (2019-22)",company:"O2 SAVER",designation:""},{name:"Anwesha Sahu",batch:"BSC (2019-22)",company:"O2 SAVER",designation:""},{name:"Satybrata Pradhan",batch:"BCA (2019-22)",company:"QSPIDERS",designation:""},{name:"Subham Parida",batch:"BCA (2019-22)",company:"QSPIDERS",designation:""},{name:"Jyotirmay Prasad",batch:"BCA (2019-22)",company:"QSPIDERS",designation:""},{name:"Ankita Pani",batch:"BCA (2019-22)",company:"QSPIDERS",designation:""},{name:"Isha Agarwal",batch:"BCA (2019-22)",company:"QSPIDERS",designation:""},{name:"Sonali Seth",batch:"BSC (2019-22)",company:"QSPIDERS",designation:""},{name:"Swadesh Behera",batch:"BSC (2019-22)",company:"QSPIDERS",designation:""},{name:"Smrutirekha Sahu",batch:"BSC (2019-22)",company:"QSPIDERS",designation:""},{name:"Anwesha Sahu",batch:"BSC (2019-22)",company:"QSPIDERS",designation:""},{name:"Subhasmita Sahu",batch:"BSC (2019-22)",company:"QSPIDERS",designation:""},{name:"Tejaswini Pradhan",batch:"BSC (2019-22)",company:"QSPIDERS",designation:""},{name:"Subham Parida",batch:"BCA (2019-22)",company:"INFOSYS",designation:""},{name:"Biswabijan Mohanty",batch:"BSC (2019-22)",company:"INFOSYS",designation:""},{name:"Rani Sahu",batch:"BSC (2019-22)",company:"INFOSYS",designation:""},{name:"Pratibha Behera",batch:"BCA (2019-22)",company:"INFOSYS",designation:""},{name:"Tejaswini Pradhan",batch:"BSC (2019-22)",company:"INFOSYS",designation:""}],vp=[{name:"Ashutosh Kar",batch:"BCA-2021",company:"WIPRO, TCS, AT&T, Airtel, Publis Sapient, Mind Tree, Tech Mahindra, L&T",designation:"8 Offers"},{name:"Purushotam Swain",batch:"BCA-2021",company:"WIPRO, TCS, Infosys, CISCO, Accenture, HCL",designation:"6 Offers"},{name:"Vikash Tiwary",batch:"BCA-2021",company:"WIPRO, TCS, Edusys",designation:"3 Offers"},{name:"Swetalin Nath",batch:"BCA-2021",company:"WIPRO, Cognizent, Infosys, Mindtree",designation:"4 Offers"},{name:"Abhisek Jena",batch:"BCA-2021",company:"SNAPDEAL, Mindtree",designation:"2 Offers"},{name:"Ayush Tripathy",batch:"BCA-2021",company:"WIPRO",designation:"1 Offer"},{name:"Sagar Pradhan",batch:"BCA-2021",company:"Mindtree",designation:"1 Offer"},{name:"Rajesh Sahu",batch:"BCA-2021",company:"HCL",designation:"1 Offer"},{name:"Nasreen Qureshi",batch:"BSC-2021",company:"ICICI, Tech Mahindra, TCS, Mindtree",designation:"4 Offers"},{name:"Biswabhusan Das",batch:"BSC-2021",company:"Byju's, Upgrade",designation:"2 Offers"},{name:"Swayamprava Das",batch:"BSC-2021",company:"DXC, TCS",designation:"2 Offers"},{name:"Sunil Das",batch:"BCA-2020",company:"WIPRO",designation:"1 Offer"},{name:"Amit Kumar Mahanta",batch:"BCA-2020",company:"Tech Mahindra",designation:"1 Offer"},{name:"Krishnakanta Behera",batch:"BCA-2021",company:"Byju's",designation:"1 Offer"},{name:"Swagatika Pradhan",batch:"BCA-2021",company:"TCS",designation:"1 Offer"},{name:"Saswat Sahu",batch:"BCA-2021",company:"Mindtree",designation:"1 Offer"},{name:"Komal Gupta",batch:"BCA-2021",company:"Mindtree",designation:"1 Offer"},{name:"Anmol Kumar Mishara Sharma",batch:"BSC-2021",company:"COGNIZANT",designation:"1 Offer"}],Dd=[{id:"2025",label:"2025",data:gp,color:"#0c2340"},{id:"2024",label:"2024",data:xp,color:"#1a3a6b"},{id:"2023",label:"2023",data:bp,color:"#2d5a8e"},{id:"2022",label:"2022 Batch",data:yp,color:"#3d7ab5"},{id:"2021",label:"2020 & 2021",data:vp,color:"#5599cc"}],so=12;function Vh(){const i=v.useRef(null),o=v.useRef(null);return v.useEffect(()=>{const c=()=>{var f;const d=window.Chart;if(!d)return;o.current&&o.current.destroy();const m=(f=i.current)==null?void 0:f.getContext("2d");m&&(o.current=new d(m,{type:"bar",data:{labels:["WIPRO","TECH MAHINDRA","TCS","MINDTREE/LTI","INFOSYS","COGNIZANT","DELOITTE","ACCENTURE","CAPGEMINI","HCL","BYJU'S"],datasets:[{label:"2020",data:[10,2,8,1,2,0,1,1,2,1,1],backgroundColor:"rgba(12,35,64,0.85)"},{label:"2021",data:[8,1,7,2,1,0,2,1,1,0,1],backgroundColor:"rgba(26,58,107,0.85)"},{label:"2022",data:[12,2,9,1,2,1,1,1,3,0,1],backgroundColor:"rgba(45,90,142,0.85)"},{label:"2023",data:[15,3,10,2,1,0,1,1,1,0,2],backgroundColor:"rgba(61,122,181,0.85)"},{label:"2024",data:[8,1,4,1,1,0,1,1,1,0,1],backgroundColor:"rgba(85,153,204,0.85)"},{label:"2025",data:[5,1,2,0,0,1,1,0,1,0,0],backgroundColor:"rgba(130,190,230,0.85)"}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!0,position:"top",labels:{font:{family:"Plus Jakarta Sans",size:12},color:"#0c2340"}}},scales:{x:{stacked:!0,ticks:{font:{size:11},color:"#334155"},grid:{display:!1}},y:{stacked:!0,ticks:{font:{size:11},color:"#334155"},grid:{color:"rgba(0,0,0,0.05)"}}}}}))};if(window.Chart)c();else{const d=document.createElement("script");d.src="https://cdn.jsdelivr.net/npm/chart.js",d.async=!0,d.onload=c,document.body.appendChild(d)}return()=>{o.current&&o.current.destroy()}},[]),e.jsx("div",{style:{height:380,position:"relative",width:"100%"},children:e.jsx("canvas",{ref:i})})}function Kh({student:i,idx:o}){const c=hp(i.company),d=i.name.split(" ").map(m=>m[0]).join("").slice(0,2).toUpperCase();return e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:14,padding:"14px 18px",background:o%2===0?"#fff":"#f8fafc",borderBottom:"1px solid rgba(10,22,40,0.06)",transition:"background 0.2s"},onMouseEnter:m=>m.currentTarget.style.background="#f0f6ff",onMouseLeave:m=>m.currentTarget.style.background=o%2===0?"#fff":"#f8fafc",children:[e.jsx("div",{style:{width:38,height:38,borderRadius:"50%",flexShrink:0,background:"linear-gradient(135deg,#0c2340,#1a3a6b)",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"0.72rem",fontWeight:800,color:"#ffcc00"},children:d}),e.jsxs("div",{style:{flex:1,minWidth:0},children:[e.jsx("div",{style:{fontFamily:"'Plus Jakarta Sans',sans-serif",fontWeight:700,fontSize:"0.85rem",color:"#0c2340",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:i.name}),e.jsx("div",{style:{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"0.7rem",color:"#94a3b8",fontWeight:600,marginTop:2},children:i.batch})]}),e.jsx("div",{style:{background:c.bg,color:c.text,padding:"5px 12px",borderRadius:20,fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"0.7rem",fontWeight:800,letterSpacing:"0.3px",flexShrink:0,maxWidth:160,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",textAlign:"center"},children:i.company}),i.designation&&e.jsx("div",{style:{background:"#f0f6ff",border:"1.5px solid rgba(12,35,64,0.12)",color:"#0c2340",padding:"4px 10px",borderRadius:8,fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"0.68rem",fontWeight:700,flexShrink:0,display:"none"},className:"ps-desg",children:i.designation})]})}function Qh({data:i,year:o}){const[c,d]=v.useState(""),[m,f]=v.useState("ALL"),[u,h]=v.useState("ALL"),[y,j]=v.useState(1),[x,b]=v.useState("list"),P=v.useMemo(()=>["ALL",...new Set(i.map(A=>A.company))].sort(),[i]),H=v.useMemo(()=>["ALL",...new Set(i.map(A=>A.batch))].sort(),[i]),Y=v.useMemo(()=>i.filter(A=>{const L=c.toLowerCase(),Q=!L||A.name.toLowerCase().includes(L)||A.company.toLowerCase().includes(L)||A.batch.toLowerCase().includes(L),ue=m==="ALL"||A.company===m,Ne=u==="ALL"||A.batch===u;return Q&&ue&&Ne}),[i,c,m,u]),R=Math.ceil(Y.length/so),M=Y.slice((y-1)*so,y*so);v.useEffect(()=>{j(1)},[c,m,u]);const T=v.useMemo(()=>{const A={};return Y.forEach(L=>{A[L.company]=(A[L.company]||0)+1}),Object.entries(A).sort((L,Q)=>Q[1]-L[1]).slice(0,6)},[Y]);return e.jsxs("div",{children:[e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(150px,1fr))",gap:14,marginBottom:24},children:[{label:"Total Placed",val:i.length,icon:"fa-users"},{label:"Companies",val:new Set(i.map(A=>A.company)).size,icon:"fa-building"},{label:"Batches",val:new Set(i.map(A=>A.batch)).size,icon:"fa-graduation-cap"},{label:"Showing",val:Y.length,icon:"fa-filter"}].map((A,L)=>e.jsxs("div",{style:{background:L===0?"linear-gradient(135deg,#0c2340,#1a3a6b)":"#fff",border:"1px solid rgba(10,22,40,0.07)",borderRadius:14,padding:"16px 18px",boxShadow:"0 2px 12px rgba(10,22,40,0.07)"},children:[e.jsx("div",{style:{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"1.5rem",fontWeight:900,color:L===0?"#ffcc00":"#0c2340",lineHeight:1},children:A.val}),e.jsx("div",{style:{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"0.7rem",fontWeight:600,color:L===0?"rgba(255,255,255,0.6)":"#4a6080",marginTop:4},children:A.label})]},L))}),e.jsxs("div",{style:{display:"flex",gap:10,marginBottom:16,flexWrap:"wrap"},children:[e.jsxs("div",{style:{flex:"1 1 200px",display:"flex",alignItems:"center",gap:10,background:"#fff",border:"1.5px solid rgba(10,22,40,0.1)",borderRadius:12,padding:"0 14px"},children:[e.jsx("i",{className:"fa-solid fa-magnifying-glass",style:{color:"#94a3b8",fontSize:"0.85rem"}}),e.jsx("input",{value:c,onChange:A=>d(A.target.value),placeholder:"Search name, company, batch…",style:{flex:1,border:"none",outline:"none",padding:"12px 0",fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"0.85rem",background:"transparent",color:"#0c2340"}}),c&&e.jsx("button",{onClick:()=>d(""),style:{background:"none",border:"none",cursor:"pointer",color:"#94a3b8",fontSize:"0.75rem"},children:"✕"})]}),e.jsx("select",{value:m,onChange:A=>f(A.target.value),style:{flex:"0 0 auto",border:"1.5px solid rgba(10,22,40,0.1)",borderRadius:12,padding:"10px 14px",fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"0.82rem",color:"#0c2340",background:"#fff",outline:"none",cursor:"pointer"},children:P.map(A=>e.jsx("option",{value:A,children:A==="ALL"?"🏢 All Companies":A},A))}),e.jsx("select",{value:u,onChange:A=>h(A.target.value),style:{flex:"0 0 auto",border:"1.5px solid rgba(10,22,40,0.1)",borderRadius:12,padding:"10px 14px",fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"0.82rem",color:"#0c2340",background:"#fff",outline:"none",cursor:"pointer"},children:H.map(A=>e.jsx("option",{value:A,children:A==="ALL"?"🎓 All Batches":A},A))})]}),T.length>0&&e.jsx("div",{style:{display:"flex",gap:8,flexWrap:"wrap",marginBottom:16},children:T.map(([A,L])=>{const Q=hp(A);return e.jsxs("button",{onClick:()=>f(m===A?"ALL":A),style:{background:m===A?Q.bg:`${Q.bg}18`,color:m===A?Q.text:Q.bg,border:`1.5px solid ${Q.bg}40`,borderRadius:20,padding:"5px 12px",fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"0.72rem",fontWeight:800,cursor:"pointer",display:"flex",alignItems:"center",gap:6,transition:"all 0.2s"},children:[A," ",e.jsxs("span",{style:{opacity:.75},children:["(",L,")"]})]},A)})}),e.jsxs("div",{style:{background:"#fff",borderRadius:16,border:"1.5px solid rgba(10,22,40,0.08)",overflow:"hidden",boxShadow:"0 4px 20px rgba(10,22,40,0.07)"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:14,padding:"12px 18px",background:"linear-gradient(135deg,#0c2340,#1a3a6b)"},children:[e.jsx("div",{style:{width:38,flexShrink:0}}),e.jsx("div",{style:{flex:1,fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"0.72rem",fontWeight:800,color:"#ffcc00",textTransform:"uppercase",letterSpacing:"0.8px"},children:"Student Name · Batch"}),e.jsx("div",{style:{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"0.72rem",fontWeight:800,color:"#ffcc00",textTransform:"uppercase",letterSpacing:"0.8px"},children:"Company"})]}),M.length===0?e.jsxs("div",{style:{padding:"48px 20px",textAlign:"center"},children:[e.jsx("i",{className:"fa-solid fa-search",style:{fontSize:"2rem",color:"#cbd5e1",display:"block",marginBottom:12}}),e.jsx("div",{style:{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"0.9rem",color:"#94a3b8",fontWeight:600},children:"No results found"})]}):M.map((A,L)=>e.jsx(Kh,{student:A,idx:L},L))]}),R>1&&e.jsxs("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",gap:8,marginTop:20,flexWrap:"wrap"},children:[e.jsx("button",{onClick:()=>j(A=>Math.max(1,A-1)),disabled:y===1,style:{background:y===1?"#f0f4f8":"#0c2340",color:y===1?"#94a3b8":"#ffcc00",border:"none",borderRadius:10,padding:"8px 16px",fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"0.8rem",fontWeight:700,cursor:y===1?"default":"pointer",transition:"all 0.2s"},children:"← Prev"}),Array.from({length:Math.min(R,7)},(A,L)=>{let Q;return R<=7||y<=4?Q=L+1:y>=R-3?Q=R-6+L:Q=y-3+L,e.jsx("button",{onClick:()=>j(Q),style:{background:y===Q?"#0c2340":"#fff",color:y===Q?"#ffcc00":"#0c2340",border:`1.5px solid ${y===Q?"#0c2340":"rgba(12,35,64,0.15)"}`,borderRadius:10,padding:"8px 14px",minWidth:38,fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"0.8rem",fontWeight:700,cursor:"pointer",transition:"all 0.2s"},children:Q},Q)}),e.jsx("button",{onClick:()=>j(A=>Math.min(R,A+1)),disabled:y===R,style:{background:y===R?"#f0f4f8":"#0c2340",color:y===R?"#94a3b8":"#ffcc00",border:"none",borderRadius:10,padding:"8px 16px",fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"0.8rem",fontWeight:700,cursor:y===R?"default":"pointer"},children:"Next →"}),e.jsxs("span",{style:{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"0.75rem",color:"#94a3b8",fontWeight:600},children:["Page ",y," of ",R," · ",Y.length," records"]})]})]})}function Fd(){Yh();const[i,o]=v.useState("2025"),c=Dd.find(h=>h.id===i),d=v.useRef(null),m=h=>{o(h),setTimeout(()=>{var y;return(y=d.current)==null?void 0:y.scrollIntoView({behavior:"smooth",block:"start"})},80)},f=`
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
  `,u=gp.length+xp.length+bp.length+yp.length+vp.length;return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:f}),e.jsxs("div",{className:"ps-page",children:[e.jsx("div",{className:"ps-hero",children:e.jsxs("div",{className:"ps-hero-content",children:[e.jsxs("div",{className:"ps-hero-badge",children:[e.jsx("i",{className:"fa-solid fa-chart-bar"}),"Placement Statistics · 2020–2025"]}),e.jsxs("h1",{className:"ps-hero-h1",children:["Our ",e.jsx("em",{children:"Placement"}),e.jsx("br",{}),"Success Story"]}),e.jsxs("p",{className:"ps-hero-sub",children:["Complete year-wise placement data for Creative Techno College — ",u,"+ students placed in leading companies across India."]}),e.jsx("div",{style:{display:"flex",gap:20,flexWrap:"wrap"},children:[{val:`${u}+`,label:"Total Placements"},{val:"20+",label:"Companies"},{val:"6",label:"Years Data"},{val:"100%",label:"Commitment"}].map((h,y)=>e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx("div",{style:{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"1.6rem",fontWeight:900,color:"#ffcc00",lineHeight:1},children:h.val}),e.jsx("div",{style:{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"0.68rem",color:"rgba(255,255,255,0.4)",fontWeight:600,marginTop:3,textTransform:"uppercase",letterSpacing:"0.5px"},children:h.label})]},y))})]})}),e.jsx("div",{className:"ps-wave",children:e.jsx("svg",{viewBox:"0 0 1440 56",preserveAspectRatio:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M0,38 C360,56 1080,0 1440,38 L1440,56 L0,56 Z",fill:"#f0f4f8"})})}),e.jsxs("div",{className:"ps-main",children:[e.jsxs("div",{className:"ps-chart-card rv",children:[e.jsx("div",{className:"ps-chart-title",children:"Year-wise Hiring Distribution (2020–2025)"}),e.jsx("div",{className:"ps-chart-sub",children:"Stacked bar chart showing hiring counts by company across all years"}),e.jsx(Vh,{})]}),e.jsx("div",{className:"ps-year-tabs rv",style:{transitionDelay:"0.1s"},children:Dd.map(h=>e.jsxs("button",{className:`ps-year-tab${i===h.id?" active":""}`,onClick:()=>m(h.id),children:[h.label," ",e.jsxs("span",{style:{opacity:.6,fontSize:"0.75em",marginLeft:4},children:["(",h.data.length,")"]})]},h.id))}),e.jsxs("div",{className:"ps-table-card rv",style:{transitionDelay:"0.15s"},ref:d,children:[e.jsxs("div",{className:"ps-table-header",children:[e.jsxs("div",{className:"ps-table-title",children:["Placement Report — ",c==null?void 0:c.label]}),e.jsxs("div",{className:"ps-table-sub",children:[c==null?void 0:c.data.length," records · Searchable & filterable by company and batch"]})]}),e.jsx("div",{className:"ps-table-body",children:c&&e.jsx(Qh,{data:c.data,year:i})})]})]})]})]})}const Hd=[{name:"Technocrat",color:"#3b82f6",colorDark:"#1d4ed8",bg:"linear-gradient(135deg, #1d4ed8 0%, #3b82f6 100%)",desc:"Technology, innovation, and entrepreneurship. Coding, hackathons, and robotics drive our mission.",to:"/gymkhana/technocrat",img:"/CTC NEW REACT WEBSITE/images/GYMKHANA/technocrat.png",tag:"Innovation & Tech"},{name:"Sports",color:"#10b981",colorDark:"#059669",bg:"linear-gradient(135deg, #059669 0%, #10b981 100%)",desc:"Indoor & outdoor games, tournaments, and fitness — building discipline and sportsmanship.",to:"/gymkhana/sports",img:"/CTC NEW REACT WEBSITE/images/GYMKHANA/sports.png",tag:"Athletics & Fitness"},{name:"Cultural",color:"#f59e0b",colorDark:"#d97706",bg:"linear-gradient(135deg, #d97706 0%, #f59e0b 100%)",desc:"Music, dance, drama, arts, and literary activities — a stage for creativity and expression.",to:"/gymkhana/cultural",img:"/CTC NEW REACT WEBSITE/images/GYMKHANA/cultural.png",tag:"Arts & Expression"},{name:"Disha & CSR",color:"#ec4899",colorDark:"#db2777",bg:"linear-gradient(135deg, #db2777 0%, #ec4899 100%)",desc:"Career guidance and social responsibility — outreach programs that make a real difference.",to:"/gymkhana/disha-csr",img:"/CTC NEW REACT WEBSITE/images/GYMKHANA/disha.png",tag:"Community & Growth"}],qh=["Provide a platform for students to engage in co-curricular and extracurricular activities.","Encourage leadership, innovation, and organizational skills among students.","Cultivate teamwork, collaboration, and a sense of responsibility.","Complement academic learning with practical exposure and problem-solving experiences.","Nurture creativity, sportsmanship, and social responsibility."],Xh=[{icon:"fa-solid fa-star",title:"Skill Enhancement",desc:"Building confidence, communication, and leadership abilities."},{icon:"fa-solid fa-seedling",title:"Holistic Development",desc:"Balancing academics with cultural, technical, and sports excellence."},{icon:"fa-solid fa-people-group",title:"Community Engagement",desc:"Promoting social awareness and CSR initiatives."},{icon:"fa-solid fa-crown",title:"Student Leadership",desc:"Empowering students to take charge through active roles in clubs and events."},{icon:"fa-solid fa-handshake",title:"Collaboration",desc:"Strengthening unity and coordination among diverse student groups."}];function Zh(){return e.jsxs("div",{className:"gym-page",children:[e.jsx("style",{children:`
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
      `}),e.jsx("section",{className:"gym-hero",children:e.jsxs("div",{className:"gym-hero-content",children:[e.jsxs("div",{className:"gym-hero-left",children:[e.jsxs("div",{className:"gym-hero-chip",children:[e.jsx("i",{className:"fa-solid fa-building-columns"})," Creative Techno College · Student Wing"]}),e.jsxs("h1",{children:["GYM",e.jsx("em",{children:"KHANA"})]}),e.jsx("p",{className:"gym-hero-sub",children:"Technocrat · Sports · Cultural · Disha & CSR"}),e.jsx("p",{children:"The vibrant hub of student life, leadership, and creativity at Creative Techno College, Angul. Four dynamic clubs empowering students to explore passions, showcase talents, and develop essential life skills beyond academics."})]}),e.jsx("div",{className:"gym-hero-right",children:e.jsxs("div",{className:"gym-hero-badges",children:[Hd.map((i,o)=>e.jsxs("span",{className:"gym-hero-badge",children:[e.jsx("span",{className:"gym-hero-badge-dot",style:{background:i.color}}),e.jsx("i",{className:i.icon,style:{color:i.color}})," ",i.name]},o)),e.jsxs("span",{className:"gym-hero-badge",children:[e.jsx("span",{className:"gym-hero-badge-dot",style:{background:"#f5c518"}}),e.jsx("i",{className:"fa-solid fa-users",style:{color:"#f5c518"}})," 200+ Active Members"]})]})})]})}),e.jsx("div",{className:"gym-stats-wrap",children:e.jsx("div",{className:"gym-stats-bar",children:[["4","Active Clubs"],["200+","Student Members"],["50+","Events Yearly"],["100%","Participation"]].map(([i,o],c)=>e.jsxs("div",{className:"gym-stat",children:[e.jsx("span",{className:"gym-stat-num",children:i}),e.jsx("span",{className:"gym-stat-label",children:o})]},c))})}),e.jsx("section",{className:"gym-president",children:e.jsxs("div",{className:"gym-president-inner",children:[e.jsx("div",{className:"gym-president-img-wrap",children:e.jsx("img",{src:"/CTC NEW REACT WEBSITE/images/GYMKHANA/Dean Sir.png",alt:"Mr. Manoj Das"})}),e.jsxs("div",{className:"gym-president-text",children:[e.jsx("div",{className:"gym-president-pill",children:"Message from the President"}),e.jsxs("h2",{children:["A Message from Our ",e.jsx("span",{children:"President"})]}),e.jsx("p",{children:'"At Creative Techno College, we believe education is not confined to classrooms. True learning happens when students step beyond books and engage in experiences that shape their personality, values, and leadership qualities.'}),e.jsx("p",{children:'The Gymkhana embodies this spirit — through the four vibrant clubs — Technocrat, Sports, Cultural, and Disha+CSR — we nurture innovation, teamwork, cultural expression, and social responsibility."'}),e.jsx("p",{className:"gym-president-sig",children:"— Mr. Manoj Das  |  Dean Academic & President, Gymkhana"})]})]})}),e.jsxs("section",{className:"gym-vps",children:[e.jsxs("div",{className:"gym-section-heading",children:[e.jsxs("div",{className:"gym-section-pill",children:[e.jsx("i",{className:"fa-solid fa-users"})," Leadership"]}),e.jsxs("h2",{children:["Vice ",e.jsx("span",{children:"Presidents"})]}),e.jsx("p",{children:"Student representatives who lead the Gymkhana alongside the President."})]}),e.jsx("div",{className:"gym-vp-grid",children:[{name:"Mr. Subham Nanda",role:"Vice President",badge:"Boy Representative",img:"/CTC NEW REACT WEBSITE/images/GYMKHANA/subham.jpeg",icon:"fa-solid fa-mars"},{name:"Ms. Bidusmita Mishra",role:"Vice President",badge:"Girl Representative",img:"/CTC NEW REACT WEBSITE/images/GYMKHANA/bidusmita.jpeg",icon:"fa-solid fa-venus"}].map((i,o)=>e.jsxs("div",{className:"gym-vp-card",children:[e.jsxs("div",{className:"gym-vp-card-top",children:[e.jsx("div",{className:"gym-vp-img-ring",children:e.jsx("img",{src:i.img,alt:i.name})}),e.jsx("h4",{children:i.name}),e.jsx("p",{children:i.role})]}),e.jsx("div",{className:"gym-vp-card-bottom",children:e.jsxs("span",{className:"gym-vp-badge",children:[e.jsx("i",{className:i.icon})," ",i.badge]})})]},o))})]}),e.jsxs("section",{className:"gym-clubs",children:[e.jsxs("div",{className:"gym-section-heading",children:[e.jsxs("div",{className:"gym-section-pill",children:[e.jsx("i",{className:"fa-solid fa-layer-group"})," Our Clubs"]}),e.jsxs("h2",{children:["Clubs Under ",e.jsx("span",{children:"Gymkhana"})]}),e.jsx("p",{children:"Click any club to explore its activities, team, and achievements."})]}),e.jsx("div",{className:"gym-clubs-grid",children:Hd.map((i,o)=>e.jsxs(ke,{to:i.to,className:"gym-club-card",children:[e.jsxs("div",{className:"gym-club-img-wrap",children:[e.jsx("img",{src:i.img,alt:i.name}),e.jsx("div",{className:"gym-club-img-overlay"}),e.jsx("div",{className:"gym-club-img-icon",style:{background:i.bg},children:e.jsx("i",{className:i.icon})}),e.jsx("span",{className:"gym-club-img-tag",children:i.tag})]}),e.jsxs("div",{className:"gym-club-card-body",children:[e.jsx("h3",{children:i.name}),e.jsx("p",{children:i.desc}),e.jsxs("div",{className:"gym-club-card-footer",children:[e.jsxs("span",{className:"gym-club-card-link",style:{color:i.color},children:["Explore Club ",e.jsx("i",{className:"fa-solid fa-arrow-right",style:{fontSize:"0.68rem"}})]}),e.jsx("div",{className:"gym-club-card-arrow",style:{background:i.bg},children:e.jsx("i",{className:"fa-solid fa-chevron-right"})})]})]})]},o))})]}),e.jsx("section",{className:"gym-objectives",children:e.jsxs("div",{className:"gym-objectives-inner",children:[e.jsxs("div",{className:"gym-obj-left",children:[e.jsxs("div",{className:"gym-section-pill",children:[e.jsx("i",{className:"fa-solid fa-bullseye"})," Purpose"]}),e.jsxs("h2",{style:{fontFamily:"Poppins,sans-serif",fontSize:"clamp(1.8rem,4vw,2.4rem)",fontWeight:900,color:"#0a1628",margin:"14px 0 14px"},children:["Objectives of"," ",e.jsx("span",{style:{background:"linear-gradient(135deg,#2563eb,#00d4ff)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},children:"Gymkhana"})]}),e.jsx("p",{style:{color:"#64748b",fontSize:"0.93rem",lineHeight:1.8},children:"Our guiding principles that shape every event, club, and initiative we undertake."})]}),e.jsx("div",{className:"gym-obj-list",children:qh.map((i,o)=>e.jsxs("div",{className:"gym-obj-item",children:[e.jsx("div",{className:"gym-obj-num",children:o+1}),e.jsx("p",{children:i})]},o))})]})}),e.jsxs("section",{className:"gym-goals",children:[e.jsxs("div",{className:"gym-section-heading",children:[e.jsxs("div",{className:"gym-section-pill",style:{background:"rgba(245,197,24,0.15)",color:"#f5c518",border:"1px solid rgba(245,197,24,0.3)"},children:[e.jsx("i",{className:"fa-solid fa-flag"})," Our Goals"]}),e.jsxs("h2",{style:{color:"#fff",fontFamily:"Poppins,sans-serif",fontSize:"clamp(1.8rem,4vw,2.5rem)",fontWeight:900,margin:"0 0 12px"},children:["What We ",e.jsx("span",{style:{color:"#f5c518"},children:"Strive For"})]})]}),e.jsx("div",{className:"gym-goals-grid",children:Xh.map((i,o)=>e.jsxs("div",{className:"gym-goal-card",children:[e.jsx("i",{className:`${i.icon} gym-goal-icon`}),e.jsx("h3",{children:i.title}),e.jsx("p",{children:i.desc})]},o))})]}),e.jsxs("section",{className:"gym-structure",children:[e.jsxs("div",{className:"gym-section-heading",children:[e.jsxs("div",{className:"gym-section-pill",children:[e.jsx("i",{className:"fa-solid fa-sitemap"})," Organisation"]}),e.jsxs("h2",{children:["Structure of ",e.jsx("span",{children:"Gymkhana"})]})]}),e.jsx("div",{className:"gym-table-wrap",children:e.jsxs("table",{className:"gym-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Role"}),e.jsx("th",{children:"Name / Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"President"})}),e.jsx("td",{children:"Mr. Manoj Das (Dean Academic)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Vice Presidents"})}),e.jsx("td",{children:"Mr. Subham Nanda (Boy) & Ms. Bidusmita Mishra (Girl)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Club Secretaries"})}),e.jsx("td",{children:"One boy & one girl student for each of the four clubs"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Student Members"})}),e.jsx("td",{children:"Active participants across all academic programs"})]})]})]})})]})]})}const oo=[{key:"all",label:"All Photos",icon:"fa-solid fa-images"},{key:"campus",label:"Campus",icon:"fa-solid fa-building-columns"},{key:"events",label:"Events",icon:"fa-solid fa-calendar-star"},{key:"alumni",label:"Alumni",icon:"fa-solid fa-graduation-cap"},{key:"workshop",label:"Workshop",icon:"fa-solid fa-wrench"},{key:"activities",label:"Activities",icon:"fa-solid fa-person-running"},{key:"tour",label:"Tour",icon:"fa-solid fa-plane-departure"}],eg=[...["campus1","campus2","campus3","campus4","campus5","campus6"].map((i,o)=>({src:`/CTC%20NEW%20REACT%20WEBSITE/images/GALLERY/${i}.jpg`,cat:"campus",alt:`Campus ${o+1}`,caption:"CTC Campus"})),...["event1","event2","event3","event4","event5","event6"].map((i,o)=>({src:`/CTC%20NEW%20REACT%20WEBSITE/images/GALLERY/${i}.jpg`,cat:"events",alt:`Event ${o+1}`,caption:"College Events"})),...["alumni1","alumni2","alumni3","alumni4","alumni5","alumni6"].map((i,o)=>({src:`/CTC%20NEW%20REACT%20WEBSITE/images/GALLERY/${i}.jpg`,cat:"alumni",alt:`Alumni ${o+1}`,caption:"Alumni Meet"})),...["workshop1","workshop2","workshop3","workshop4","workshop5","workshop6"].map((i,o)=>({src:`/CTC%20NEW%20REACT%20WEBSITE/images/GALLERY/${i}.jpg`,cat:"workshop",alt:`Workshop ${o+1}`,caption:"Skill Workshops"})),...["Activity1","Activity2","Activity3","Activity4","Activity5","Activity6"].map((i,o)=>({src:`/CTC%20NEW%20REACT%20WEBSITE/images/GALLERY/${i}.jpg`,cat:"activities",alt:`Activity ${o+1}`,caption:"Student Activities"})),...["tour1","tour2","tour3","tour4","tour5","tour6"].map((i,o)=>({src:`/CTC%20NEW%20REACT%20WEBSITE/images/GALLERY/${i}.jpg`,cat:"tour",alt:`Tour ${o+1}`,caption:"Educational Tours"}))],_d=["tall","wide","normal","normal","tall","normal","wide","normal","normal","tall","normal","wide"],Gt=eg.map((i,o)=>({...i,size:_d[o%_d.length]}));function ag(){var j;const[i,o]=v.useState("all"),[c,d]=v.useState(null),[m,f]=v.useState({}),u=i==="all"?Gt:Gt.filter(x=>x.cat===i),h=v.useCallback(x=>{c!==null&&(x.key==="ArrowRight"&&d(b=>(b+1)%u.length),x.key==="ArrowLeft"&&d(b=>(b-1+u.length)%u.length),x.key==="Escape"&&d(null))},[c,u.length]);v.useEffect(()=>(window.addEventListener("keydown",h),()=>window.removeEventListener("keydown",h)),[h]),v.useEffect(()=>(document.body.style.overflow=c!==null?"hidden":"",()=>{document.body.style.overflow=""}),[c]);const y=c!==null?u[c]:null;return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"gl-hero",children:[e.jsx("div",{className:"gl-hero-glow"}),e.jsxs("div",{className:"gl-hero-inner",children:[e.jsx("span",{className:"section-label",style:{color:"var(--cyan)"},children:"Visual Showcase"}),e.jsxs("h1",{children:["Our ",e.jsx("span",{style:{color:"var(--gold)"},children:"Gallery"})]}),e.jsx("p",{children:"Moments that define the Creative Techno College experience — campus life, events, achievements & beyond."}),e.jsxs("div",{className:"gl-hero-pills",children:[e.jsxs("span",{className:"gl-pill",children:[e.jsx("i",{className:"fa-solid fa-images"})," ",Gt.length," Photos"]}),e.jsxs("span",{className:"gl-pill",children:[e.jsx("i",{className:"fa-solid fa-folder-open"})," ",oo.length-1," Categories"]}),e.jsxs("span",{className:"gl-pill",children:[e.jsx("i",{className:"fa-solid fa-calendar-days"})," 2018 – 2024"]})]})]}),e.jsx("div",{className:"gl-hero-wave",children:e.jsx("svg",{viewBox:"0 0 1440 60",preserveAspectRatio:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M0,0 C360,60 1080,0 1440,40 L1440,60 L0,60 Z",fill:"var(--page-bg)"})})})]}),e.jsxs("div",{className:"gl-filters-wrap",children:[e.jsx("div",{className:"gl-filters",children:oo.map(x=>e.jsxs("button",{className:`gl-filter-btn${i===x.key?" active":""}`,onClick:()=>{o(x.key),d(null)},children:[e.jsx("i",{className:x.icon}),x.label,i===x.key&&e.jsx("span",{className:"gl-filter-count",children:x.key==="all"?Gt.length:Gt.filter(b=>b.cat===x.key).length})]},x.key))}),e.jsxs("p",{className:"gl-count-label",children:["Showing ",e.jsx("strong",{children:u.length})," of ",e.jsx("strong",{children:Gt.length})," photos"]})]}),e.jsx("div",{className:"gl-grid-wrap",children:e.jsx("div",{className:"gl-grid",children:u.map((x,b)=>e.jsxs("div",{className:`gl-item gl-item-${x.size}`,onClick:()=>d(b),style:{animationDelay:`${b%12*.04}s`},children:[e.jsx("img",{src:x.src,alt:x.alt,loading:"lazy",onLoad:()=>f(P=>({...P,[x.src]:!0})),onError:P=>{P.target.closest(".gl-item").style.display="none"}}),e.jsx("div",{className:"gl-item-overlay",children:e.jsxs("div",{className:"gl-item-overlay-inner",children:[e.jsx("i",{className:"fa-solid fa-magnifying-glass-plus"}),e.jsx("span",{children:x.caption})]})})]},`${x.cat}-${b}`))},i)}),y&&e.jsxs("div",{className:"gl-lightbox",onClick:x=>{x.target===x.currentTarget&&d(null)},role:"dialog","aria-modal":"true",children:[e.jsx("button",{className:"gl-lb-close",onClick:()=>d(null),"aria-label":"Close",children:e.jsx("i",{className:"fa-solid fa-xmark"})}),e.jsx("button",{className:"gl-lb-nav gl-lb-prev",onClick:()=>d(x=>(x-1+u.length)%u.length),"aria-label":"Previous",children:e.jsx("i",{className:"fa-solid fa-chevron-left"})}),e.jsxs("div",{className:"gl-lb-panel",children:[e.jsx("img",{className:"gl-lb-img",src:y.src,alt:y.alt},y.src),e.jsxs("div",{className:"gl-lb-caption",children:[e.jsx("span",{className:"gl-lb-cat",children:(j=oo.find(x=>x.key===y.cat))==null?void 0:j.label}),e.jsxs("span",{className:"gl-lb-count",children:[c+1," / ",u.length]})]}),e.jsx("div",{className:"gl-lb-thumbs",children:u.map((x,b)=>e.jsx("div",{className:`gl-lb-thumb${c===b?" active":""}`,onClick:()=>d(b),children:e.jsx("img",{src:x.src,alt:"",loading:"lazy"})},b))})]}),e.jsx("button",{className:"gl-lb-nav gl-lb-next",onClick:()=>d(x=>(x+1)%u.length),"aria-label":"Next",children:e.jsx("i",{className:"fa-solid fa-chevron-right"})})]})]})}const tg=[{icon:"fa-solid fa-phone-volume",label:"Admissions Helpline",val:"+91 9778427170",href:"tel:+919778427170",color:"#00d4ff"},{icon:"fa-solid fa-envelope-open-text",label:"Principal Email",val:"principal.creativecollege@gmail.com",href:"mailto:principal.creativecollege@gmail.com",color:"#f5c518"},{icon:"fa-solid fa-location-dot",label:"Campus Address",val:"Baluakata, Saradhapur, Angul – 759143",href:"https://maps.google.com/?q=Creative+Techno+College+Angul",color:"#7b61ff"},{icon:"fa-brands fa-whatsapp",label:"WhatsApp",val:"+91 9668844571",href:"https://wa.me/919668844571",color:"#25d366"}],uo=[{key:"academic",icon:"fa-solid fa-book-open",title:"Academic & Student Support",color:"#0d7ff5",cards:[{title:"Academic Support",icon:"fa-solid fa-chalkboard-user",people:[{name:"Mr. Bhabani Sankar Sahoo",phone:["+91 9668844571"],email:"bhabaniwipro89@gmail.com"}]},{title:"Examination & Certificates",icon:"fa-solid fa-file-certificate",people:[{name:"Mr. Krishnasis Mishra",phone:["+91 8249090003"],email:"principal.creativecollege@gmail.com"}]},{title:"Counselling & Wellness",icon:"fa-solid fa-heart-pulse",people:[{name:"Respective Batch Mentor"}]}]},{key:"career",icon:"fa-solid fa-briefcase",title:"Training & Career Development",color:"#f5c518",cards:[{title:"Training & Placement",icon:"fa-solid fa-briefcase",people:[{name:"Mr. Bhabani S. Sahoo",phone:["+91 9668844571"],email:"bhabaniwipro89@gmail.com"},{name:"Mr. Subhrajyoti Behera",phone:["+91 9861071840"],email:"subhyrajyoticafpl@gmail.com"}]},{title:"DISHA",icon:"fa-solid fa-hands-holding-child",people:[{name:"Mr. Subhrajyoti Behera",phone:["+91 9861071840"],email:"subhyrajyoticafpl@gmail.com"},{name:"Ms. Neha Solanki",phone:["+91 7873848515"],email:"nehasolanki1411@gmail.com"}]},{title:"Technocrat Club",icon:"fa-solid fa-microchip",people:[{name:"Mr. Bhabani S. Sahoo",phone:["+91 9668844571"]},{name:"Mr. Swastik R. Sahoo",phone:["+91 6372877833"],email:"sahooswastik406@gmail.com"}]},{title:"Alumni",icon:"fa-solid fa-graduation-cap",people:[{name:"Mr. Krishnasis Mishra",phone:["+91 8249090003"],email:"principal.creativecollege@gmail.com"}]}]},{key:"hostel",icon:"fa-solid fa-house-user",title:"Hostel & Transport",color:"#7b61ff",cards:[{title:"Transport Services",icon:"fa-solid fa-bus-simple",people:[{name:"Mr. Satya S. S. Dehury",phone:["+91 9439137384"],email:"sssdehury89@gmail.com"},{name:"Mr. Sarat C. Sahu",phone:["+91 9853167581"],email:"saratmuna243@gmail.com"}]},{title:"Hostel (Boys)",icon:"fa-solid fa-bed",people:[{name:"Mr. Satya S. S. Dehury",phone:["+91 9439137384"]},{name:"Mr. Raghunath Behera",phone:["+91 8984949923"]}]},{title:"Hostel (Girls)",icon:"fa-solid fa-bed",people:[{name:"Ms. Nibedita Patra",phone:["+91 7606878160"],email:"nibedita.patra2903@gmail.com"},{name:"Ms. Arghyarupa Behera",phone:["+91 9827465376"],email:"arghyarupabehera3@gmail.com"}]}]},{key:"admin",icon:"fa-solid fa-landmark",title:"Administration & Finance",color:"#ff6b6b",cards:[{title:"General Administration",icon:"fa-solid fa-building",people:[{name:"Mr. Manoj Kumar Das",phone:["+91 9338233303","+91 7008574320"],email:"dasmanojp@gmail.com"}]},{title:"Scholarship & Financial Aid",icon:"fa-solid fa-hand-holding-dollar",people:[{name:"Mr. Subhrajyoti Behera",phone:["+91 9861071840"],email:"subhyrajyoticafpl@gmail.com"}]},{title:"Fees & Payments",icon:"fa-solid fa-receipt",people:[{name:"Mr. Abhisek Satpathy",phone:["+91 8260077588"],email:"abhisheksathpathy020@gmail.com"}]},{title:"Admissions Front Office",icon:"fa-solid fa-door-open",people:[{name:"Front Office",phone:["+91 9778427170","+91 9668284222","+91 9668332555"]}]}]},{key:"services",icon:"fa-solid fa-building-columns",title:"Other Services",color:"#25d366",cards:[{title:"Library",icon:"fa-solid fa-book",people:[{name:"Ms. Monika Sahu",phone:["+91 9668284222"],email:"monika28sahu@gmail.com"}]},{title:"Canteen",icon:"fa-solid fa-utensils",people:[{name:"Mr. Sarat C. Sahu",phone:["+91 9853167581"],email:"saratmuna243@gmail.com"},{name:"Mr. Ranjan Das",phone:["+91 8917466271"]}]},{title:"CSR & Sports",icon:"fa-solid fa-trophy",people:[{name:"Mr. Satya S. S. Dehury",phone:["+91 9439137384"],email:"sssdehury89@gmail.com"}]}]}];function ng({name:i,phone:o,email:c}){return e.jsxs("div",{className:"ct-person",children:[i&&e.jsxs("p",{children:[e.jsx("i",{className:"fa-solid fa-user"}),e.jsx("strong",{children:i})]}),o==null?void 0:o.map((d,m)=>e.jsxs("p",{children:[e.jsx("i",{className:"fa-solid fa-phone"}),e.jsx("a",{href:`tel:${d.replace(/\s/g,"")}`,children:d})]},m)),c&&e.jsxs("p",{children:[e.jsx("i",{className:"fa-solid fa-envelope"}),e.jsx("a",{href:`mailto:${c}`,style:{wordBreak:"break-all"},children:c})]})]})}function rg({title:i,icon:o,people:c}){return e.jsxs("div",{className:"ct-card",children:[e.jsxs("div",{className:"ct-card-title",children:[e.jsx("i",{className:o}),i]}),c.map((d,m)=>e.jsx(ng,{...d},m))]})}function ig(){const[i,o]=v.useState({name:"",phone:"",email:"",dept:"",msg:""}),[c,d]=v.useState(!1),m=(u,h)=>o(y=>({...y,[u]:h}));function f(u){u.preventDefault();const h=`*CTC Enquiry*
Name: ${i.name}
Phone: ${i.phone}
Email: ${i.email||"—"}
Dept: ${i.dept||"—"}
Message: ${i.msg}`;window.open(`https://wa.me/919668844571?text=${encodeURIComponent(h)}`,"_blank"),d(!0)}return c?e.jsxs("div",{className:"ct-form-success",children:[e.jsx("i",{className:"fa-solid fa-circle-check"}),e.jsx("h3",{children:"Message Sent!"}),e.jsx("p",{children:"Your enquiry has been forwarded via WhatsApp. We'll get back to you shortly."}),e.jsx("button",{className:"btn-primary",onClick:()=>d(!1),children:"Send Another"})]}):e.jsxs("form",{className:"ct-form",onSubmit:f,children:[e.jsxs("div",{className:"ct-form-row",children:[e.jsxs("div",{className:"ct-form-field",children:[e.jsx("label",{children:"Full Name *"}),e.jsx("input",{required:!0,placeholder:"Your name",value:i.name,onChange:u=>m("name",u.target.value)})]}),e.jsxs("div",{className:"ct-form-field",children:[e.jsx("label",{children:"Mobile Number *"}),e.jsx("input",{required:!0,type:"tel",placeholder:"+91 XXXXX XXXXX",value:i.phone,onChange:u=>m("phone",u.target.value)})]})]}),e.jsxs("div",{className:"ct-form-row",children:[e.jsxs("div",{className:"ct-form-field",children:[e.jsx("label",{children:"Email Address"}),e.jsx("input",{type:"email",placeholder:"Optional",value:i.email,onChange:u=>m("email",u.target.value)})]}),e.jsxs("div",{className:"ct-form-field",children:[e.jsx("label",{children:"Department"}),e.jsxs("select",{value:i.dept,onChange:u=>m("dept",u.target.value),children:[e.jsx("option",{value:"",children:"Select Department"}),uo.map(u=>e.jsx("option",{children:u.title},u.key)),e.jsx("option",{children:"Admissions"}),e.jsx("option",{children:"Other"})]})]})]}),e.jsxs("div",{className:"ct-form-field",children:[e.jsx("label",{children:"Your Message *"}),e.jsx("textarea",{required:!0,rows:4,placeholder:"Write your query or message here…",value:i.msg,onChange:u=>m("msg",u.target.value)})]}),e.jsxs("button",{type:"submit",className:"ct-form-submit",children:[e.jsx("i",{className:"fa-brands fa-whatsapp"})," Send via WhatsApp"]})]})}function sg(){const[i,o]=v.useState(""),[c,d]=v.useState("all"),m=uo.filter(f=>c==="all"||f.key===c).map(f=>({...f,cards:f.cards.filter(u=>{if(!i.trim())return!0;const h=i.toLowerCase();return u.title.toLowerCase().includes(h)||u.people.some(y=>{var j,x,b;return((j=y.name)==null?void 0:j.toLowerCase().includes(h))||((x=y.phone)==null?void 0:x.some(P=>P.includes(h)))||((b=y.email)==null?void 0:b.toLowerCase().includes(h))})})})).filter(f=>f.cards.length>0);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"ct-hero",children:[e.jsx("div",{className:"ct-hero-glow"}),e.jsxs("div",{className:"ct-hero-inner",children:[e.jsx("span",{className:"section-label",style:{color:"var(--cyan)"},children:"Reach Out"}),e.jsxs("h1",{children:["Helpline ",e.jsx("span",{style:{color:"var(--gold)"},children:"Contacts"})]}),e.jsx("p",{children:"Find the right person for your query — our team is here to help."}),e.jsxs("div",{className:"ct-search-wrap",children:[e.jsx("i",{className:"fa-solid fa-magnifying-glass"}),e.jsx("input",{className:"ct-search",type:"text",placeholder:"Search by name, department, phone…",value:i,onChange:f=>o(f.target.value)}),i&&e.jsx("button",{className:"ct-search-clear",onClick:()=>o(""),children:e.jsx("i",{className:"fa-solid fa-xmark"})})]})]}),e.jsx("div",{className:"ct-hero-wave",children:e.jsx("svg",{viewBox:"0 0 1440 60",preserveAspectRatio:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M0,0 C360,60 1080,0 1440,40 L1440,60 L0,60 Z",fill:"var(--page-bg)"})})})]}),e.jsx("div",{className:"ct-quick-wrap",children:e.jsx("div",{className:"ct-quick-grid",children:tg.map((f,u)=>e.jsxs("a",{href:f.href,className:"ct-quick-card",target:f.href.startsWith("http")?"_blank":void 0,rel:"noreferrer",children:[e.jsx("div",{className:"ct-quick-icon",style:{background:`${f.color}18`,border:`1.5px solid ${f.color}44`},children:e.jsx("i",{className:f.icon,style:{color:f.color}})}),e.jsxs("div",{children:[e.jsx("p",{className:"ct-quick-label",children:f.label}),e.jsx("p",{className:"ct-quick-val",children:f.val})]}),e.jsx("i",{className:"fa-solid fa-arrow-up-right-from-square ct-quick-ext"})]},u))})}),e.jsx("div",{className:"ct-tabs-wrap",children:e.jsxs("div",{className:"ct-tabs",children:[e.jsxs("button",{className:`ct-tab${c==="all"?" active":""}`,onClick:()=>d("all"),children:[e.jsx("i",{className:"fa-solid fa-grip"})," All Departments"]}),uo.map(f=>e.jsxs("button",{className:`ct-tab${c===f.key?" active":""}`,onClick:()=>d(f.key),children:[e.jsx("i",{className:f.icon})," ",f.title.split(" ")[0]]},f.key))]})}),e.jsx("div",{className:"ct-body",children:m.length===0?e.jsxs("div",{className:"ct-no-results",children:[e.jsx("i",{className:"fa-solid fa-magnifying-glass"}),e.jsxs("p",{children:['No contacts found for "',e.jsx("strong",{children:i}),'"']}),e.jsx("button",{className:"btn-outline",onClick:()=>o(""),children:"Clear Search"})]}):m.map(f=>e.jsxs("div",{className:"ct-dept",children:[e.jsxs("div",{className:"ct-dept-header",style:{"--dc":f.color},children:[e.jsx("div",{className:"ct-dept-icon",children:e.jsx("i",{className:f.icon})}),e.jsx("h2",{children:f.title}),e.jsxs("span",{className:"ct-dept-count",children:[f.cards.length," contact",f.cards.length!==1?"s":""]})]}),e.jsx("div",{className:"ct-cards-grid",children:f.cards.map((u,h)=>e.jsx(rg,{...u},h))})]},f.key))}),e.jsx("section",{className:"ct-map-section",children:e.jsxs("div",{className:"ct-map-inner",children:[e.jsxs("div",{className:"ct-map-box",children:[e.jsxs("div",{className:"ct-map-header",children:[e.jsx("i",{className:"fa-solid fa-location-dot"}),e.jsxs("div",{children:[e.jsx("h3",{children:"Find Us"}),e.jsx("p",{children:"Creative Techno College, Angul"})]})]}),e.jsx("div",{className:"ct-map-embed",children:e.jsx("iframe",{title:"CTC Campus Map",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3731.4!2d85.0964!3d20.8400!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19f3c6f2bd7d01%3A0x9b7694f44f8e2b1c!2sCreative+Techno+College!5e0!3m2!1sen!2sin!4v1",allowFullScreen:"",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade"})}),e.jsxs("div",{className:"ct-address-list",children:[e.jsxs("div",{className:"ct-addr-row",children:[e.jsx("i",{className:"fa-solid fa-building-columns"}),e.jsxs("span",{children:[e.jsx("strong",{children:"Campus:"})," Baluakata, Saradhapur, Angul, Odisha – 759143"]})]}),e.jsxs("div",{className:"ct-addr-row",children:[e.jsx("i",{className:"fa-solid fa-city"}),e.jsxs("span",{children:[e.jsx("strong",{children:"City Office:"})," Tamrit Colony, Angul"]})]}),e.jsxs("div",{className:"ct-addr-row",children:[e.jsx("i",{className:"fa-solid fa-clock"}),e.jsxs("span",{children:[e.jsx("strong",{children:"Office Hours:"})," Mon – Sat, 9:00 AM – 5:00 PM"]})]})]})]}),e.jsxs("div",{className:"ct-form-box",children:[e.jsxs("div",{className:"ct-form-header",children:[e.jsx("i",{className:"fa-brands fa-whatsapp"}),e.jsxs("div",{children:[e.jsx("h3",{children:"Send an Enquiry"}),e.jsx("p",{children:"We'll respond via WhatsApp within 24 hours"})]})]}),e.jsx(ig,{})]})]})})]})}function og(){v.useEffect(()=>{const i=document.querySelectorAll(".rv, .rv-l, .rv-r"),o=new IntersectionObserver(c=>c.forEach(d=>{d.isIntersecting&&d.target.classList.add("visible")}),{threshold:.08});return i.forEach(c=>o.observe(c)),()=>o.disconnect()},[])}const jp={resolution:[{date:"04-10-2024",pdf:"/CTC NEW REACT WEBSITE/images/ICC/1.pdf",label:"ICC Resolution — October 2024"}],committee:[{date:"01-05-2025",pdf:"/CTC NEW REACT WEBSITE/images/ICC/8.pdf",label:"Committee Members — May 2025"},{date:"18-03-2025",pdf:"/CTC NEW REACT WEBSITE/images/ICC/7.pdf",label:"Committee Members — March 2025"},{date:"05-12-2024",pdf:"/CTC NEW REACT WEBSITE/images/ICC/6.pdf",label:"Committee Members — December 2024"},{date:"05-10-2024",pdf:"/CTC NEW REACT WEBSITE/images/ICC/2.pdf",label:"Committee Members — October 2024"}],events:[{date:"05-12-2024",pdf:"/CTC NEW REACT WEBSITE/images/ICC/4.pdf",label:"Awareness Program — December 2024"},{date:"25-11-2024",pdf:"/CTC NEW REACT WEBSITE/images/ICC/5.pdf",label:"Gender Sensitization — November 2024"}],vision:[{date:"05-10-2024",pdf:"/CTC NEW REACT WEBSITE/images/ICC/3.pdf",label:"ICC Vision Document — October 2024"}]},lg=[{icon:"fa-hand",text:"Physical contact and advances"},{icon:"fa-comment-slash",text:"Sexually colored remarks"},{icon:"fa-user-lock",text:"Request for sexual favors"},{icon:"fa-eye-slash",text:"Showing pornography"},{icon:"fa-triangle-exclamation",text:"Other unwelcome sexual conduct"}],cg=["Ensure safe work and academic environment for staff and students.","Deliver impartial justice in sexual harassment cases.","Promote gender equity policies across the institution.","Organize awareness and sensitization programs.","Display institutional policies publicly.","Publish ICC members list and contact details.","Develop transparent complaint mechanism.","Conduct inquiries based on principles of natural justice.","Recommend corrective and preventive action.","Monitor implementation and follow-ups.","Provide emotional and psychological support to complainants."],dg=[{id:"about",label:"About",icon:"fa-circle-info"},{id:"resolution",label:"Resolution",icon:"fa-gavel"},{id:"committee",label:"Committee",icon:"fa-users"},{id:"events",label:"Events",icon:"fa-calendar-days"},{id:"vision",label:"Vision",icon:"fa-eye"}];function pg({onClose:i}){const o=v.useRef(null);v.useEffect(()=>{const f=u=>{u.key==="Escape"&&i()};return document.addEventListener("keydown",f),document.body.style.overflow="hidden",()=>{document.removeEventListener("keydown",f),document.body.style.overflow=""}},[i]);const c=f=>{f.target===o.current&&i()},d=()=>{const f=document.createElement("a");f.href="/CTC NEW REACT WEBSITE/images/ICC/form.pdf",f.download="ICC_Complaint_Form.pdf",f.click()};return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
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
  `}),e.jsx("div",{className:"icc-backdrop",ref:o,onClick:c,children:e.jsxs("div",{className:"icc-modal",role:"dialog","aria-modal":"true","aria-labelledby":"modal-title",children:[e.jsxs("div",{className:"icc-modal-header",children:[e.jsx("button",{className:"icc-modal-close",onClick:i,"aria-label":"Close",children:e.jsx("i",{className:"fa-solid fa-xmark"})}),e.jsx("div",{className:"icc-modal-title",id:"modal-title",children:"Submit Your Complaint"}),e.jsx("div",{className:"icc-modal-sub",children:"Internal Complaints Committee · CTC"})]}),e.jsx("div",{className:"icc-modal-body",children:e.jsxs("div",{className:"icc-modal-options",children:[e.jsxs("button",{className:"icc-modal-opt primary",onClick:()=>window.open("https://docs.google.com/forms/d/e/1FAIpQLSeXE1THmrO8-fPHCyvU1L2dzc45Na9Qy6vVijfNHzWxUhJRrQ/viewform","_blank"),children:[e.jsx("div",{className:"icc-modal-opt-icon",children:e.jsx("i",{className:"fa-solid fa-laptop"})}),e.jsxs("div",{children:[e.jsx("div",{className:"icc-modal-opt-label",children:"Apply Online"}),e.jsx("div",{className:"icc-modal-opt-sub",children:"Google Form"})]})]}),e.jsxs("button",{className:"icc-modal-opt secondary",onClick:d,children:[e.jsx("div",{className:"icc-modal-opt-icon",children:e.jsx("i",{className:"fa-solid fa-file-arrow-down"})}),e.jsxs("div",{children:[e.jsx("div",{className:"icc-modal-opt-label",children:"Download Form"}),e.jsx("div",{className:"icc-modal-opt-sub",children:"PDF Format"})]})]})]})})]})})]})}function mg({section:i}){const o=jp[i]||[],[c,d]=v.useState(null);return o.length===0?e.jsxs("div",{style:{textAlign:"center",padding:"40px 20px",color:"#94a3b8"},children:[e.jsx("i",{className:"fa-solid fa-folder-open",style:{fontSize:"2rem",marginBottom:12,display:"block",opacity:.4}}),e.jsx("p",{style:{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"0.88rem",fontWeight:600,margin:0},children:"No documents available yet."})]}):e.jsx("div",{style:{overflowX:"auto"},children:e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontFamily:"'Plus Jakarta Sans',sans-serif"},children:[e.jsx("thead",{children:e.jsx("tr",{children:["#","Date","Document","Action"].map((m,f)=>e.jsx("th",{style:{padding:"14px 18px",textAlign:"left",background:"linear-gradient(135deg,#0c2340,#1a3a6b)",color:"#ffcc00",fontSize:"0.75rem",fontWeight:800,letterSpacing:"0.8px",textTransform:"uppercase",borderBottom:"2px solid rgba(255,204,0,0.2)",whiteSpace:"nowrap"},children:m},f))})}),e.jsx("tbody",{children:o.map((m,f)=>e.jsxs("tr",{onMouseEnter:()=>d(f),onMouseLeave:()=>d(null),style:{background:c===f?"#f0f6ff":f%2===0?"#fff":"#f8fafc",transition:"background 0.2s"},children:[e.jsx("td",{style:{padding:"14px 18px",color:"#94a3b8",fontWeight:700,fontSize:"0.82rem",width:48},children:String(f+1).padStart(2,"0")}),e.jsxs("td",{style:{padding:"14px 18px",fontSize:"0.85rem",fontWeight:600,color:"#4a6080",whiteSpace:"nowrap"},children:[e.jsx("i",{className:"fa-regular fa-calendar",style:{marginRight:8,color:"#0c2340",opacity:.5}}),m.date]}),e.jsx("td",{style:{padding:"14px 18px",fontSize:"0.85rem",fontWeight:600,color:"#0c2340"},children:m.label}),e.jsx("td",{style:{padding:"14px 18px"},children:e.jsxs("a",{href:m.pdf,target:"_blank",rel:"noreferrer",style:{display:"inline-flex",alignItems:"center",gap:6,background:"linear-gradient(135deg,#0c2340,#1a3a6b)",color:"#ffcc00",textDecoration:"none",padding:"7px 14px",borderRadius:8,fontSize:"0.72rem",fontWeight:800,letterSpacing:"0.4px",textTransform:"uppercase",transition:"transform 0.2s, box-shadow 0.2s",boxShadow:"0 4px 12px rgba(12,35,64,0.2)",whiteSpace:"nowrap"},onMouseEnter:u=>{u.currentTarget.style.transform="translateY(-2px)",u.currentTarget.style.boxShadow="0 8px 20px rgba(12,35,64,0.35)"},onMouseLeave:u=>{u.currentTarget.style.transform="none",u.currentTarget.style.boxShadow="0 4px 12px rgba(12,35,64,0.2)"},children:[e.jsx("i",{className:"fa-solid fa-file-pdf"})," View PDF"]})})]},f))})]})})}function fg(){og();const[i,o]=v.useState("about"),[c,d]=v.useState(!1),[m,f]=v.useState(!1),u=v.useRef(null);v.useEffect(()=>{setTimeout(()=>f(!0),60)},[]);const h=b=>{o(b),setTimeout(()=>{u.current&&u.current.scrollIntoView({behavior:"smooth",block:"start"})},80)},y=`
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
  `,j={about:{title:"About the ICC",sub:"Background, mandate & scope · Creative Techno College"},resolution:{title:"ICC Resolutions",sub:"Formal resolutions and policy decisions"},committee:{title:"Committee Members",sub:"Constituted as per POSH Act 2013"},events:{title:"Events & Programmes",sub:"Awareness, sensitization and outreach activities"},vision:{title:"ICC Vision",sub:"Mission, objectives and institutional commitment"}},x=b=>{const P=jp[b]||[],H=[...new Set(P.map(Y=>Y.date.split("-")[2]))];return e.jsxs("div",{className:"icc-doc-stats",children:[e.jsxs("div",{className:"icc-doc-stat",children:[e.jsx("div",{className:"icc-doc-stat-val",children:P.length}),e.jsx("div",{className:"icc-doc-stat-lbl",children:"Documents"})]}),e.jsxs("div",{className:"icc-doc-stat",children:[e.jsx("div",{className:"icc-doc-stat-val",children:H.length}),e.jsx("div",{className:"icc-doc-stat-lbl",children:"Academic Years"})]}),e.jsxs("div",{className:"icc-doc-stat",children:[e.jsx("div",{className:"icc-doc-stat-val",children:"PDF"}),e.jsx("div",{className:"icc-doc-stat-lbl",children:"Format"})]})]})};return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:y}),c&&e.jsx(pg,{onClose:()=>d(!1)}),e.jsxs("div",{className:"icc-page",children:[e.jsx("div",{className:"icc-hero",children:e.jsxs("div",{className:"icc-hero-content",children:[e.jsxs("div",{className:"icc-hero-left",children:[e.jsxs("div",{className:"icc-hero-badge",children:[e.jsx("i",{className:"fa-solid fa-shield-halved"})," ICC · POSH Act 2013"]}),e.jsxs("h1",{className:"icc-hero-title",children:["Internal",e.jsx("br",{}),e.jsx("em",{children:"Complaints"}),e.jsx("br",{}),"Committee"]}),e.jsx("p",{className:"icc-hero-sub",children:"Committed to maintaining a safe, respectful and equitable working and academic environment for all women at Creative Techno College."}),e.jsx("div",{className:"icc-hero-pills",children:[{icon:"fa-scale-balanced",text:"Zero Tolerance Policy"},{icon:"fa-lock",text:"Confidential Process"},{icon:"fa-gavel",text:"Natural Justice"},{icon:"fa-building-columns",text:"UGC Mandated"}].map((b,P)=>e.jsxs("span",{className:"icc-hero-pill",children:[e.jsx("i",{className:`fa-solid ${b.icon}`,style:{color:"#ffcc00",fontSize:"0.65rem"}}),b.text]},P))})]}),e.jsx("div",{className:"icc-hero-right",children:e.jsx("div",{className:"icc-hero-logo",children:e.jsx("img",{src:"/CTC NEW REACT WEBSITE/images/ICC/LOGO FINAL.png",alt:"Creative Techno College",onError:b=>{b.target.parentElement.innerHTML='<span style="font-size:2.5rem">🏫</span>'}})})})]})}),e.jsx("div",{className:"icc-wave",children:e.jsx("svg",{viewBox:"0 0 1440 56",preserveAspectRatio:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M0,38 C360,56 1080,0 1440,38 L1440,56 L0,56 Z",fill:"#f0f4f8"})})}),e.jsx("div",{className:"icc-complaint-strip rv",children:e.jsxs("button",{className:"icc-complaint-btn",onClick:()=>d(!0),children:[e.jsx("div",{className:"icc-complaint-btn-shine"}),e.jsxs("div",{className:"icc-complaint-btn-left",children:[e.jsx("div",{className:"icc-complaint-icon",children:e.jsx("i",{className:"fa-solid fa-pen-to-square"})}),e.jsxs("div",{children:[e.jsx("div",{className:"icc-complaint-title",children:"Write Your Complaint Here"}),e.jsx("div",{className:"icc-complaint-sub",children:"Confidential · Secure · Protected — File online or download form"})]})]}),e.jsx("div",{className:"icc-complaint-arrow",children:e.jsx("i",{className:"fa-solid fa-arrow-right"})})]})}),e.jsxs("div",{className:"icc-main",children:[e.jsx("div",{className:"icc-tab-bar rv",style:{transitionDelay:"0.1s"},children:dg.map(b=>e.jsxs("button",{className:`icc-tab${i===b.id?" active":""}`,onClick:()=>h(b.id),children:[e.jsx("i",{className:`fa-solid ${b.icon}`}),b.label]},b.id))}),e.jsxs("div",{className:"icc-content-card rv",style:{transitionDelay:"0.15s"},ref:u,children:[e.jsxs("div",{className:"icc-content-header",children:[e.jsx("div",{className:"icc-content-header-title",children:j[i].title}),e.jsx("div",{className:"icc-content-header-sub",children:j[i].sub})]}),e.jsxs("div",{className:"icc-content-body",children:[i==="about"&&e.jsxs("div",{style:{animation:"iccTabIn 0.4s ease both"},children:[e.jsxs("div",{className:"icc-about-grid",children:[e.jsxs("div",{className:"icc-about-text",children:[e.jsxs("p",{children:["As per the guidelines of the ",e.jsx("strong",{children:"Supreme Court of India"}),", UGC, ",e.jsx("strong",{children:"Section 4 SHW Act 2013"})," and AICTE Regulations, 2016 vide No. F. AICTE/WH/2016/01 dated 10th June, 2016 — ",e.jsx("em",{children:"Gender Sensitization, Prevention and Prohibition of Sexual Harassment of Women Employees and Students and Redressal of Grievances in Technical Institutions"})," — ",e.jsx("strong",{children:"Creative Techno College"})," has constituted an Internal Complaints Committee (ICC)."]}),e.jsxs("p",{style:{marginTop:16},children:["The ICC of Creative Techno College facilitates ",e.jsx("strong",{children:"safe and secure educational and working environments"})," for both female students and staff. The Institute follows a strict policy of ",e.jsx("strong",{children:"zero tolerance"})," towards human rights violations. The Committee addresses issues regarding prevention, prohibition and redressal of sexual harassment of women at the workplace."]})]}),e.jsx("div",{className:"icc-legal-badges",children:[{icon:"fa-building-columns",label:"Supreme Court Guidelines",sub:"Vishakha Guidelines & subsequent orders"},{icon:"fa-scroll",label:"POSH Act 2013",sub:"Sexual Harassment of Women at Workplace Act"},{icon:"fa-landmark",label:"AICTE Regulations 2016",sub:"No. F.AICTE/WH/2016/01 — June 2016"},{icon:"fa-book-open",label:"UGC Policy Framework",sub:"Gender sensitization mandate for HEIs"}].map((b,P)=>e.jsxs("div",{className:"icc-legal-badge",children:[e.jsx("div",{className:"icc-legal-badge-icon",children:e.jsx("i",{className:`fa-solid ${b.icon}`})}),e.jsxs("div",{children:[e.jsx("div",{className:"icc-legal-badge-text",children:b.label}),e.jsx("div",{className:"icc-legal-badge-sub",children:b.sub})]})]},P))})]}),e.jsxs("div",{style:{background:"#fef2f2",border:"1.5px solid #fecaca",borderRadius:18,padding:28,marginBottom:28},children:[e.jsxs("div",{className:"icc-harassment-header",children:[e.jsx("div",{className:"icc-harassment-icon-wrap",children:e.jsx("i",{className:"fa-solid fa-triangle-exclamation"})}),e.jsxs("div",{children:[e.jsx("div",{className:"icc-harassment-title",children:"What Constitutes Sexual Harassment?"}),e.jsx("div",{className:"icc-harassment-sub",children:"As defined under Sexual Harassment of Women at Workplace Act, 2013"})]})]}),e.jsx("p",{className:"icc-harassment-text",children:"Any inappropriate advances towards a person in a sexual manner that could directly or indirectly affect their job, salary, or career constitute sexual harassment. The Act provides a broad and inclusive definition to ensure comprehensive protection."}),e.jsx("div",{className:"icc-harassment-list",children:lg.map((b,P)=>e.jsxs("div",{className:"icc-harassment-item",children:[e.jsx("div",{className:"icc-harassment-item-icon",children:e.jsx("i",{className:`fa-solid ${b.icon}`})}),e.jsx("div",{className:"icc-harassment-item-text",children:b.text})]},P))})]}),e.jsxs("div",{className:"icc-responsibilities-section",children:[e.jsxs("div",{className:"icc-resp-header",children:[e.jsx("div",{className:"icc-resp-icon-wrap",children:e.jsx("i",{className:"fa-solid fa-sitemap"})}),e.jsxs("div",{children:[e.jsx("div",{className:"icc-resp-title",children:"Roles & Responsibilities of ICC"}),e.jsx("div",{className:"icc-resp-sub",children:"11 core mandates of the Internal Complaints Committee"})]})]}),e.jsx("div",{className:"icc-resp-grid",children:cg.map((b,P)=>e.jsxs("div",{className:"icc-resp-item",children:[e.jsx("div",{className:"icc-resp-num",children:String(P+1).padStart(2,"0")}),e.jsx("div",{className:"icc-resp-text",children:b})]},P))})]}),e.jsxs("div",{className:"icc-mechanism",children:[e.jsxs("div",{className:"icc-mechanism-header",children:[e.jsx("i",{className:"fa-solid fa-diagram-project"}),e.jsx("span",{children:"ICC Complaint & Redressal Mechanism"})]}),e.jsx("img",{src:"/CTC NEW REACT WEBSITE/images/ICC/mechanism.png",alt:"ICC Complaint Mechanism",onError:b=>{b.target.parentElement.style.cssText+="background:#f8fafc;min-height:120px;display:flex;align-items:center;justify-content:center;",b.target.outerHTML='<div style="padding:40px;text-align:center;color:#94a3b8;font-family:Plus Jakarta Sans,sans-serif;font-size:0.85rem;">Mechanism diagram will appear here</div>'}})]})]}),["resolution","committee","events","vision"].includes(i)&&e.jsxs("div",{style:{animation:"iccTabIn 0.4s ease both"},children:[x(i),e.jsx("div",{className:"icc-table-wrap",children:e.jsx(mg,{section:i})})]})]})]}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(260px,1fr))",gap:18,marginTop:28},children:[{icon:"fa-envelope",color:"#0c2340",bg:"linear-gradient(135deg,#0c2340,#1a3a6b)",title:"Contact ICC",sub:"icc@creativecollege.in",desc:"Reach out to the committee directly for guidance before filing a formal complaint."},{icon:"fa-clock",color:"#d97706",bg:"linear-gradient(135deg,#78350f,#d97706)",title:"Filing Window",sub:"90 Days from Incident",desc:"Complaints must be filed within 90 days of the last incident as per POSH Act provisions."},{icon:"fa-shield-halved",color:"#059669",bg:"linear-gradient(135deg,#064e3b,#059669)",title:"Confidentiality",sub:"100% Protected",desc:"All complaints, proceedings and outcomes are treated with strict confidentiality."}].map((b,P)=>e.jsxs("div",{className:"rv",style:{background:"#fff",borderRadius:18,padding:"24px",border:"1px solid rgba(10,22,40,0.07)",boxShadow:"0 4px 20px rgba(10,22,40,0.07)",transitionDelay:`${P*.08}s`},children:[e.jsx("div",{style:{width:50,height:50,borderRadius:14,background:b.bg,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.1rem",color:"#fff",marginBottom:16},children:e.jsx("i",{className:`fa-solid ${b.icon}`})}),e.jsx("div",{style:{fontFamily:"'Plus Jakarta Sans',sans-serif",fontWeight:900,fontSize:"0.95rem",color:"#0c2340",marginBottom:3},children:b.title}),e.jsx("div",{style:{fontSize:"0.75rem",fontWeight:700,color:b.color,marginBottom:10},children:b.sub}),e.jsx("div",{style:{fontSize:"0.8rem",color:"#4a6080",lineHeight:1.7,fontWeight:500},children:b.desc})]},P))})]})]})]})}function ug(){v.useEffect(()=>{const i=document.querySelectorAll(".grc-rv, .grc-rv-l, .grc-rv-r"),o=new IntersectionObserver(c=>c.forEach(d=>{d.isIntersecting&&d.target.classList.add("visible")}),{threshold:.08});return i.forEach(c=>o.observe(c)),()=>o.disconnect()},[])}const hg=[{no:1,name:"Mr. Manoj Kumar Das",role:"Chairperson"},{no:2,name:"Mr. Satya S. S. Dehury",role:"Member"},{no:3,name:"Mrs. Monika Sahu",role:"Member"}];function gg(){return ug(),e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
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
  `}),e.jsxs("div",{className:"grc-page",children:[e.jsxs("div",{className:"grc-hero",children:[e.jsx("div",{className:"grc-hero-grid"}),e.jsx("div",{className:"grc-hero-scan"}),e.jsx("div",{className:"grc-hero-glow"}),e.jsx("div",{className:"grc-hero-glow2"}),e.jsxs("div",{className:"grc-hero-content",children:[e.jsxs("div",{className:"grc-hero-left",children:[e.jsxs("div",{className:"grc-hero-badge",children:[e.jsx("i",{className:"fa-solid fa-hands-holding-circle"})," GRC · AICTE Guidelines"]}),e.jsxs("h1",{className:"grc-hero-title",children:["Grievance",e.jsx("br",{}),e.jsx("em",{children:"Redressal"}),e.jsx("br",{}),"Committee"]}),e.jsx("p",{className:"grc-hero-sub",children:"Committed to addressing and resolving grievances of students and staff in a fair, transparent and time-bound manner at Creative Techno College."}),e.jsx("div",{className:"grc-hero-pills",children:[{icon:"fa-scale-balanced",text:"Fair & Transparent"},{icon:"fa-lock",text:"Confidential Process"},{icon:"fa-clock",text:"Time-Bound Resolution"},{icon:"fa-building-columns",text:"AICTE Mandated"}].map((o,c)=>e.jsxs("span",{className:"grc-hero-pill",children:[e.jsx("i",{className:`fa-solid ${o.icon}`,style:{color:"#ffcc00",fontSize:"0.65rem"}}),o.text]},c))})]}),e.jsx("div",{className:"grc-hero-right",children:e.jsx("div",{className:"grc-hero-logo",children:e.jsx("img",{src:"/CTC NEW REACT WEBSITE/images/ICC/LOGO FINAL.png",alt:"Creative Techno College",onError:o=>{o.target.parentElement.innerHTML='<span style="font-size:2.5rem">🏫</span>'}})})})]})]}),e.jsx("div",{className:"grc-wave",children:e.jsx("svg",{viewBox:"0 0 1440 56",preserveAspectRatio:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M0,38 C360,56 1080,0 1440,38 L1440,56 L0,56 Z",fill:"#f0f4f8"})})}),e.jsx("div",{className:"grc-btn-strip grc-rv",children:e.jsxs("button",{className:"grc-btn",onClick:()=>window.open("https://docs.google.com/forms/d/e/1FAIpQLSe1Pcq1imy_OeOFSSbNucLUNQCVWzvi-J6kNVl5ihcX5N4LTw/viewform?usp=publish-editor","_blank"),children:[e.jsx("div",{className:"grc-btn-shine"}),e.jsxs("div",{className:"grc-btn-left",children:[e.jsx("div",{className:"grc-btn-icon",children:e.jsx("i",{className:"fa-solid fa-pen-to-square"})}),e.jsxs("div",{children:[e.jsx("div",{className:"grc-btn-title",children:"Submit Your Grievance Here"}),e.jsx("div",{className:"grc-btn-sub",children:"Confidential · Secure · Protected — File online or download form"})]})]}),e.jsx("div",{className:"grc-btn-arrow",children:e.jsx("i",{className:"fa-solid fa-arrow-right"})})]})}),e.jsxs("div",{className:"grc-main",children:[e.jsxs("div",{className:"grc-letter-card grc-rv",style:{transitionDelay:"0.1s"},children:[e.jsxs("div",{className:"grc-letter-header",children:[e.jsx("div",{className:"grc-letter-header-title",children:"Official Notice — GRC Constitution"}),e.jsx("div",{className:"grc-letter-header-sub",children:"As per AICTE norms and guidelines · Creative Techno College"})]}),e.jsxs("div",{className:"grc-letter-body",children:[e.jsx("div",{className:"grc-salutation",children:"Respected Sir/Madam,"}),e.jsxs("p",{className:"grc-letter-text",children:["I am pleased to inform you that our institution has formally constituted a"," ",e.jsx("strong",{children:"Grievance Redressal Committee"})," in accordance with the norms and guidelines prescribed by ",e.jsx("strong",{children:"AICTE"}),". The committee has been established to address and resolve grievances of students and staff in a"," ",e.jsx("strong",{children:"fair, transparent and time-bound manner"}),", thereby ensuring a healthy academic environment."]}),e.jsx("div",{className:"grc-members-intro",children:"The following members have been appointed to the Grievance Redressal Committee:"}),e.jsx("div",{className:"grc-members-list",children:hg.map(o=>e.jsxs("div",{className:"grc-member-item",children:[e.jsx("div",{className:"grc-member-num",children:String(o.no).padStart(2,"0")}),e.jsxs("div",{children:[e.jsx("div",{className:"grc-member-name",children:o.name}),e.jsx("div",{className:"grc-member-role",children:o.role})]})]},o.no))}),e.jsx("div",{className:"grc-info-badges",children:[{icon:"fa-building-columns",label:"AICTE Approved",sub:"Constituted per AICTE norms & guidelines"},{icon:"fa-gavel",label:"Natural Justice",sub:"Inquiries based on principles of natural justice"},{icon:"fa-shield-halved",label:"Healthy Environment",sub:"Ensuring a positive academic atmosphere"}].map((o,c)=>e.jsxs("div",{className:"grc-info-badge",children:[e.jsx("div",{className:"grc-info-badge-icon",children:e.jsx("i",{className:`fa-solid ${o.icon}`})}),e.jsxs("div",{children:[e.jsx("div",{className:"grc-info-badge-text",children:o.label}),e.jsx("div",{className:"grc-info-badge-sub",children:o.sub})]})]},c))})]})]}),e.jsxs("div",{className:"grc-image-card grc-rv",style:{transitionDelay:"0.2s"},children:[e.jsxs("div",{className:"grc-image-header",children:[e.jsx("i",{className:"fa-solid fa-image"}),e.jsx("span",{children:"GRC — Official Document / Notice"})]}),e.jsx("div",{className:"grc-image-container",children:e.jsx("img",{src:"/CTC NEW REACT WEBSITE/images/ICC/GRC.jpeg",alt:"GRC Official Notice",onError:o=>{o.target.style.display="none",o.target.parentElement.innerHTML=`
                    <div class="grc-image-placeholder">
                      <i class="fa-solid fa-file-image"></i>
                      <p>GRC official notice / document image will appear here.<br/>Place the image at: images/GRC/grc-notice.png</p>
                    </div>`}})})]})]})]})]})}const Zr=[{name:"Abhisek Nanda",batch:"2023",domain:"Web"},{name:"Aliva Dipsikha Garnaik",batch:"2023",domain:"Web, Android"},{name:"Ipsita Pattanaik",batch:"2023",domain:"Web"},{name:"Bidusmita Mishra",batch:"2023",domain:"Web, Flutter, Backend"},{name:"Chinmayee Priyadarshini",batch:"2023",domain:"Web, Android"},{name:"Elin Pattanayak",batch:"2023",domain:"Web, Flutter"},{name:"Jasmin Samal",batch:"2023",domain:"Web, Flutter"},{name:"Monalisha Behera",batch:"2023",domain:"Web, Flutter"},{name:"Priyanka Pradhan",batch:"2023",domain:"Web, Android"},{name:"Ratnaprava Dhar",batch:"2023",domain:"Web, Flutter"},{name:"Rudra Prasad Sahu",batch:"2023",domain:"Web, Android, Backend"},{name:"Saswat Suman Dwibedy",batch:"2023",domain:"Web, Flutter, Backend"},{name:"Sudipta Suranjita Sahoo",batch:"2023",domain:"Web, Android"},{name:"Swatika Sahu",batch:"2023",domain:"Web"},{name:"Yashita Sahu",batch:"2023",domain:"Web, Android"},{name:"Abhipsa Jena",batch:"2024",domain:"Web, Android"},{name:"Bhagyalaxmi",batch:"2024",domain:"Web, Android"},{name:"Kajal Pradhan",batch:"2024",domain:"Web, Android"},{name:"Krishna Swain",batch:"2024",domain:"Web, Android"},{name:"Rimjhim Sahoo",batch:"2024",domain:"Web, Android"},{name:"Sasmita",batch:"2024",domain:"Web, Android"},{name:"Selina Sahu",batch:"2024",domain:"Web, Android"},{name:"Subham Sahu",batch:"2024",domain:"Web"},{name:"Supriyanjali Sahu",batch:"2024",domain:"Web, Android"},{name:"Tanmay Pradhan",batch:"2024",domain:"Web, Flutter"},{name:"Trishna Tamna",batch:"2024",domain:"Web, Android"},{name:"Yash Sahu",batch:"2024",domain:"Web"},{name:"Amit Pradhan",batch:"2024",domain:"Web"},{name:"Jasman Das",batch:"2024",domain:"Web"},{name:"Pratyush Patra",batch:"2024",domain:"Web"},{name:"Elina Biswal",batch:"2024",domain:"Web"},{name:"Prabhanjan Behera",batch:"2024",domain:"Web"},{name:"Happy Behera",batch:"2024",domain:"Web"},{name:"Anshuman Mishra",batch:"2025",domain:"Web, Android"},{name:"Priyadarsan Muduli",batch:"2025",domain:"Web, Android"},{name:"Biswajit Nayak",batch:"2025",domain:"Web, Flutter"},{name:"Omm Prakash Niyary",batch:"2025",domain:"Web, Flutter"},{name:"Ananta Swain",batch:"2025",domain:"Web, Flutter"},{name:"Dattatreya Khilar",batch:"2025",domain:"Web, Android"},{name:"Priyanka Mahanta",batch:"2025",domain:"Web, Android"},{name:"Ladly Sahoo",batch:"2025",domain:"Web, Flutter"},{name:"Arpita Sahu",batch:"2025",domain:"Web, Flutter"},{name:"Priyani Patra",batch:"2025",domain:"Web, Android"},{name:"Subhalaxmi Priyadarshini",batch:"2025",domain:"Web, Flutter"},{name:"Pradyumna Das",batch:"2025",domain:"Web, Flutter"},{name:"Satyabrata Pradhan",batch:"2025",domain:"Web, Flutter"},{name:"Sudhansu Pattanaik",batch:"2025",domain:"Web, Flutter"},{name:"Soumya Ranjan Sahu",batch:"2025",domain:"Web, Flutter"},{name:"Ankita Priyadarshini",batch:"2025",domain:"Web, Android"}],xg=[{name:"Attendance Management System",team:"Team Technocrat",date:"March 2023"},{name:"Lesson Planner",team:"Team Technocrat",date:"July 2024"},{name:"Notes and Assignment Tracker",team:"Team Technocrat",date:"October 2023"},{name:"Library Management System",team:"Team Technocrat",date:"March 2024"},{name:"Learning Management System (LMS)",team:"Team Technocrat",date:"July 2023"},{name:"Staff Management System",team:"Team Technocrat",date:"October 2024"},{name:"Student Database Management System",team:"Team Technocrat",date:"March 2024"},{name:"Result Management System",team:"Team Technocrat",date:"July 2025"}],bg=[{name:"Rakesh Senapati",img:"/CTC NEW REACT WEBSITE/images/TECHNOCRAT/Rakesh Ku. Senapati.jpg"},{name:"Shankar Chaitan Jena",img:"/CTC NEW REACT WEBSITE/images/TECHNOCRAT/Shankar Chaitan Jena.png"},{name:"Priyadarshan Pradhan",img:"/CTC NEW REACT WEBSITE/images/TECHNOCRAT/Priyadarshan Pradhan.png"},{name:"Abhijit Jena",img:"/CTC NEW REACT WEBSITE/images/TECHNOCRAT/Abhijit Jena.png"},{name:"Asutosh Sahu",img:"/CTC NEW REACT WEBSITE/images/TECHNOCRAT/asutosh sahu.jpg"},{name:"Chandra Kant Muduli",img:"/CTC NEW REACT WEBSITE/images/TECHNOCRAT/Chandrakant Muduli.png"},{name:"Anish Asutosh",img:"/CTC NEW REACT WEBSITE/images/TECHNOCRAT/Anish Asutosh Nayak.png"},{name:"Chandan Swain",img:"/CTC NEW REACT WEBSITE/images/TECHNOCRAT/Chandan Swain.png"},{name:"Debasish Pradhan",img:"/CTC NEW REACT WEBSITE/images/TECHNOCRAT/Debasis Pradhan.jpg"},{name:"Anata Kishor Swain",img:"/CTC NEW REACT WEBSITE/images/TECHNOCRAT/Ananta Kishore Swain.png"},{name:"Nikhil Nath",img:"/CTC NEW REACT WEBSITE/images/TECHNOCRAT/Nikhil Nath.png"},{name:"SK Akil",img:"/CTC NEW REACT WEBSITE/images/TECHNOCRAT/SK Akil.png"}],yg=[{version:"1.0",year:"2023",img:"/CTC NEW REACT WEBSITE/images/TECHNOCRAT/TechFest1.0.jpg",to:"/gymkhana/techfest/1",desc:"First edition — AI, IoT, Robotics & ML innovations by college students.",projects:8},{version:"2.0",year:"2024",img:"/CTC NEW REACT WEBSITE/images/TECHNOCRAT/TechFest2.0.jpg",to:"/gymkhana/techfest/2",desc:"Second edition — 19 cutting-edge projects in automation, safety, and smart systems.",projects:19},{version:"3.0",year:"2025",img:"/CTC NEW REACT WEBSITE/images/TECHNOCRAT/TechFest3.0.jpg",to:"/gymkhana/techfest/3",desc:"Viksit Bharat edition — schools join for the first time in this historic tech showcase.",projects:10}],Mn=[{img:"/CTC NEW REACT WEBSITE/images/TECHNOCRAT/bannerpic1.png",title:"Team Technocrat",sub:"Empowering Innovation"},{img:"/CTC NEW REACT WEBSITE/images/TECHNOCRAT/bannerpic2.png",title:"Skill Development",sub:"Shaping Future Leaders"},{img:"/CTC NEW REACT WEBSITE/images/TECHNOCRAT/bannerpic3.png",title:"Career Excellence",sub:"Connecting Academia & Industry"}],vg={2023:{bg:"#eff6ff",color:"#2563eb",border:"#bfdbfe"},2024:{bg:"#ecfdf5",color:"#059669",border:"#a7f3d0"},2025:{bg:"#fef3c7",color:"#d97706",border:"#fde68a"}},ei=12;function jg({page:i,totalPages:o,total:c,label:d,onPage:m}){if(o<=1)return null;const f=[];if(o<=7)for(let u=1;u<=o;u++)f.push(u);else if(i<=4)for(let u=1;u<=7;u++)f.push(u);else if(i>=o-3)for(let u=o-6;u<=o;u++)f.push(u);else for(let u=i-3;u<=i+3;u++)f.push(u);return e.jsxs("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",gap:8,marginTop:20,flexWrap:"wrap"},children:[e.jsx("button",{onClick:()=>m(Math.max(1,i-1)),disabled:i===1,style:{background:i===1?"#f0f4f8":"#0c2340",color:i===1?"#94a3b8":"#ffcc00",border:"none",borderRadius:10,padding:"8px 16px",fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"0.8rem",fontWeight:700,cursor:i===1?"default":"pointer"},children:"← Prev"}),f.map(u=>e.jsx("button",{onClick:()=>m(u),style:{background:i===u?"#0c2340":"#fff",color:i===u?"#ffcc00":"#0c2340",border:`1.5px solid ${i===u?"#0c2340":"rgba(12,35,64,0.15)"}`,borderRadius:10,padding:"8px 14px",minWidth:38,fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"0.8rem",fontWeight:700,cursor:"pointer"},children:u},u)),e.jsx("button",{onClick:()=>m(Math.min(o,i+1)),disabled:i===o,style:{background:i===o?"#f0f4f8":"#0c2340",color:i===o?"#94a3b8":"#ffcc00",border:"none",borderRadius:10,padding:"8px 16px",fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"0.8rem",fontWeight:700,cursor:i===o?"default":"pointer"},children:"Next →"}),e.jsxs("span",{style:{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"0.75rem",color:"#94a3b8",fontWeight:600},children:["Page ",i," of ",o," · ",c," ",d||"members"]})]})}function wg(){const[i,o]=v.useState(0),[c,d]=v.useState("all"),[m,f]=v.useState(1),u=c==="all"?Zr:Zr.filter(b=>b.batch===c),h=Math.ceil(u.length/ei),y=u.slice((m-1)*ei,m*ei),j=b=>{d(b),f(1)};return e.jsxs("div",{className:"tc-page",children:[e.jsx("style",{children:`
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
  `}),e.jsxs("div",{className:"tc-hero",children:[e.jsxs("div",{className:"tc-hero-inner",children:[e.jsxs("div",{className:"tc-hero-left",children:[e.jsxs("div",{className:"tc-hero-badge",children:[e.jsx("i",{className:"fa-solid fa-microchip"})," Gymkhana · Technical Club"]}),e.jsxs("h1",{className:"tc-hero-h1",children:["Team ",e.jsx("em",{children:"Technocrat"})]}),e.jsx("p",{className:"tc-hero-sub",children:"Empowering students with essential skills for today's competitive job market — bridging the gap between academic learning and industry demands through real-world projects and technical excellence."}),e.jsx("div",{className:"tc-hero-stats",children:[{val:`${Zr.length}+`,label:"Active Members"},{val:"8+",label:"Projects Built"},{val:"3",label:"TechFest Editions"},{val:"3",label:"Batches"}].map((b,P)=>e.jsxs("div",{children:[e.jsx("div",{className:"tc-hero-stat-val",children:b.val}),e.jsx("div",{className:"tc-hero-stat-lbl",children:b.label})]},P))})]}),e.jsx("div",{className:"tc-hero-right",children:e.jsx("div",{className:"tc-hero-pills",children:[{dot:"#3b82f6",icon:"fa-solid fa-code",label:"Web Development"},{dot:"#10b981",icon:"fa-solid fa-mobile-alt",label:"Android & Flutter"},{dot:"#ffcc00",icon:"fa-solid fa-server",label:"Backend Systems"},{dot:"#ec4899",icon:"fa-solid fa-rocket",label:"TechFest Series"},{dot:"#00d4ff",icon:"fa-solid fa-diagram-project",label:"8+ Projects Deployed"}].map((b,P)=>e.jsxs("div",{className:"tc-hero-pill",children:[e.jsx("span",{className:"tc-hero-pill-dot",style:{background:b.dot}}),e.jsx("i",{className:b.icon,style:{color:b.dot,width:16,textAlign:"center"}}),b.label]},P))})})]}),e.jsx("div",{className:"tc-hero-wave",children:e.jsx("svg",{viewBox:"0 0 1440 56",preserveAspectRatio:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M0,38 C360,56 1080,0 1440,38 L1440,56 L0,56 Z",fill:"#f0f4f8"})})})]}),e.jsxs("div",{className:"tc-main",children:[e.jsxs("div",{className:"tc-leaders-wrap",children:[e.jsxs("div",{className:"tc-section-head",children:[e.jsxs("div",{className:"tc-pill-tag",children:[e.jsx("i",{className:"fa-solid fa-users"})," Our Leadership"]}),e.jsxs("h2",{children:["Club Incharge & ",e.jsx("span",{children:"Secretaries"})]})]}),e.jsx("div",{className:"tc-leaders-grid",children:[{role:"Club Incharge",name:"Mr. Bhabani Sankar Sahoo",img:"/CTC NEW REACT WEBSITE/images/TECHNOCRAT/TeamIncharge.jpg",tag:"Faculty Lead"},{role:"Club Secretary (Boy)",name:"Mr. Saswat Suman Dwibedy",img:"/CTC NEW REACT WEBSITE/images/TECHNOCRAT/boySecretary.jpg",tag:"Student Rep"},{role:"Club Secretary (Girl)",name:"Ms. Sudipta Suranjita Sahoo",img:"/CTC NEW REACT WEBSITE/images/TECHNOCRAT/girlSecretary.jpg",tag:"Student Rep"}].map((b,P)=>e.jsxs("div",{className:"tc-leader-card",children:[e.jsx("div",{className:"tc-leader-img",children:e.jsx("img",{src:b.img,alt:b.role})}),e.jsxs("div",{className:"tc-leader-body",children:[e.jsx("h4",{children:b.role}),e.jsx("div",{style:{fontSize:"0.9rem",fontWeight:700,color:"#2563eb",marginBottom:"8px",fontFamily:"'Plus Jakarta Sans', sans-serif"},children:b.name}),e.jsx("span",{className:"tc-leader-tag",children:b.tag})]})]},P))})]}),e.jsxs("div",{className:"tc-slider-wrap",style:{borderRadius:22,marginBottom:0},children:[e.jsxs("div",{className:"tc-section-head",style:{marginBottom:0},children:[e.jsx("div",{className:"tc-pill-tag",style:{background:"rgba(255,204,0,0.15)",color:"#ffcc00",border:"1px solid rgba(255,204,0,0.3)"},children:"Team Gallery"}),e.jsxs("h2",{style:{color:"#fff",fontFamily:"'Plus Jakarta Sans',sans-serif"},children:["Our Team ",e.jsx("span",{style:{color:"#ffcc00",WebkitTextFillColor:"#ffcc00"},children:"in Action"})]})]}),e.jsxs("div",{className:"tc-slider",children:[Mn.map((b,P)=>e.jsxs("div",{className:`tc-slide${i===P?" active":""}`,children:[e.jsx("img",{src:b.img,alt:b.title}),e.jsxs("div",{className:"tc-slide-overlay",children:[e.jsx("h3",{children:b.title}),e.jsx("p",{children:b.sub})]})]},P)),e.jsx("button",{className:"tc-slider-arrow",style:{left:14},onClick:()=>o((i-1+Mn.length)%Mn.length),children:e.jsx("i",{className:"fa-solid fa-chevron-left"})}),e.jsx("button",{className:"tc-slider-arrow",style:{right:14},onClick:()=>o((i+1)%Mn.length),children:e.jsx("i",{className:"fa-solid fa-chevron-right"})})]}),e.jsx("div",{className:"tc-slider-dots",children:Mn.map((b,P)=>e.jsx("button",{className:`tc-slider-dot${i===P?" active":""}`,onClick:()=>o(P)},P))})]}),e.jsxs("div",{className:"tc-techfest-wrap",style:{borderRadius:22,marginTop:0},children:[e.jsxs("div",{className:"tc-section-head",children:[e.jsxs("div",{className:"tc-pill-tag",children:[e.jsx("i",{className:"fa-solid fa-rocket"})," Mega Event"]}),e.jsxs("h2",{children:["Tech",e.jsx("span",{children:"Fest"})," Series"]}),e.jsx("p",{children:"Our annual flagship event where innovation meets excellence — three editions, each bigger and bolder."})]}),e.jsx("div",{className:"tc-fest-grid",children:yg.map((b,P)=>e.jsxs(ke,{to:b.to,className:"tc-fest-card",children:[e.jsxs("div",{className:"tc-fest-img",children:[e.jsx("img",{src:b.img,alt:`TechFest ${b.version}`}),e.jsx("div",{className:"tc-fest-img-overlay"}),e.jsxs("span",{className:"tc-fest-ver",children:["TechFest ",b.version]})]}),e.jsxs("div",{className:"tc-fest-body",children:[e.jsxs("h3",{children:["TechFest ",b.version]}),e.jsx("p",{children:b.desc}),e.jsxs("div",{className:"tc-fest-meta",children:[e.jsxs("span",{children:[e.jsx("i",{className:"fa-regular fa-calendar"})," ",b.year]}),e.jsxs("span",{children:[e.jsx("i",{className:"fa-solid fa-diagram-project"})," ",b.projects," Projects"]})]}),e.jsxs("div",{className:"tc-fest-link",children:["Explore ",e.jsx("i",{className:"fa-solid fa-arrow-right",style:{fontSize:"0.7rem"}})]})]})]},P))})]}),e.jsxs("div",{className:"tc-team-wrap",children:[e.jsxs("div",{className:"tc-section-head",children:[e.jsxs("div",{className:"tc-pill-tag",children:[e.jsx("i",{className:"fa-solid fa-code"})," Our Team"]}),e.jsxs("h2",{children:["Meet the ",e.jsx("span",{children:"Technocrats"})]}),e.jsxs("p",{children:[Zr.length," talented members across 3 batches — building, innovating, and growing together."]})]}),e.jsx("div",{className:"tc-filter-bar",children:["all","2023","2024","2025"].map(b=>e.jsx("button",{className:`tc-filter-btn${c===b?" active":""}`,onClick:()=>j(b),children:b==="all"?"All Batches":`Batch ${b}`},b))}),e.jsx("div",{className:"tc-table-wrap",children:e.jsxs("table",{className:"tc-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{width:48},children:"#"}),e.jsx("th",{children:"Name"}),e.jsx("th",{style:{width:100},children:"Batch"}),e.jsx("th",{children:"Domain"})]})}),e.jsx("tbody",{children:y.map((b,P)=>{const H=vg[b.batch];return e.jsxs("tr",{children:[e.jsx("td",{style:{color:"#94a3b8",fontWeight:700},children:(m-1)*ei+P+1}),e.jsx("td",{style:{fontWeight:700},children:b.name}),e.jsx("td",{children:e.jsx("span",{className:"tc-batch-pill",style:{background:H.bg,color:H.color,border:`1px solid ${H.border}`},children:b.batch})}),e.jsx("td",{children:e.jsx("span",{className:"tc-domain-label",children:b.domain})})]},P)})})]})}),e.jsx(jg,{page:m,totalPages:h,total:u.length,label:"members",onPage:f})]}),e.jsxs("div",{className:"tc-proj-wrap",style:{borderRadius:22},children:[e.jsxs("div",{className:"tc-section-head",children:[e.jsxs("div",{className:"tc-pill-tag",children:[e.jsx("i",{className:"fa-solid fa-diagram-project"})," Work"]}),e.jsxs("h2",{children:["Our ",e.jsx("span",{children:"Projects"})]}),e.jsx("p",{children:"Real-world software systems built by Team Technocrat for the college community."})]}),e.jsx("div",{className:"tc-proj-inner",children:xg.map((b,P)=>e.jsxs("div",{className:"tc-proj-row",children:[e.jsx("div",{className:"tc-proj-num",children:String(P+1).padStart(2,"0")}),e.jsxs("div",{style:{flex:1},children:[e.jsx("div",{className:"tc-proj-name",children:b.name}),e.jsxs("div",{className:"tc-proj-sub",children:[e.jsx("i",{className:"fa-solid fa-users",style:{fontSize:"0.6rem",marginRight:4}}),b.team]})]}),e.jsxs("div",{className:"tc-proj-date",children:[e.jsx("i",{className:"fa-regular fa-calendar",style:{marginRight:5}}),b.date]})]},P))})]})]}),e.jsxs("div",{className:"tc-ex-wrap",children:[e.jsxs("div",{className:"tc-section-head",children:[e.jsx("div",{className:"tc-pill-tag",style:{background:"rgba(255,204,0,0.15)",color:"#ffcc00",border:"1px solid rgba(255,204,0,0.3)"},children:"Alumni"}),e.jsxs("h2",{style:{color:"#fff",fontFamily:"'Plus Jakarta Sans',sans-serif"},children:["Excellent ",e.jsx("span",{style:{color:"#ffcc00",WebkitTextFillColor:"#ffcc00"},children:"Ex-Leaders"})]}),e.jsx("p",{style:{color:"rgba(255,255,255,0.45)",fontSize:"0.88rem",maxWidth:480,margin:"0 auto"},children:"Leaders who shaped Technocrat and went on to make their mark in the industry."})]}),e.jsx("div",{className:"tc-ex-grid",children:bg.map((b,P)=>e.jsxs("div",{className:"tc-ex-card",children:[e.jsx("div",{className:"tc-ex-img",children:e.jsx("img",{src:b.img,alt:b.name})}),e.jsx("p",{className:"tc-ex-name",children:b.name})]},P))})]})]})}const Ud=[{name:"100m Running",month:"December",icon:"fa-person-running"},{name:"200m Running",month:"December",icon:"fa-person-running"},{name:"Long Jump",month:"December",icon:"fa-arrow-right-long"},{name:"High Jump",month:"December",icon:"fa-up-long"},{name:"Discus Throw",month:"December",icon:"fa-circle"},{name:"Shotput",month:"December",icon:"fa-baseball"},{name:"Javelin Throw",month:"December",icon:"fa-location-arrow"},{name:"Relay Race",month:"December",icon:"fa-people-arrows"},{name:"Badminton",month:"December",icon:"fa-table-tennis-paddle-ball"},{name:"Chess",month:"December",icon:"fa-chess"},{name:"Carrom",month:"December",icon:"fa-chess-board"}],Sg=[{icon:"fa-solid fa-handshake",text:"To develop the spirit of sportsmanship and healthy competition."},{icon:"fa-solid fa-heart-pulse",text:"To maintain physical and mental fitness through regular sports activities."},{icon:"fa-solid fa-star",text:"To identify and nurture sporting talent among students."},{icon:"fa-solid fa-people-group",text:"To promote teamwork, discipline, and time management skills."},{icon:"fa-solid fa-scale-balanced",text:"To provide a balance between academics and extracurricular excellence."}],Cg=Array.from({length:12},(i,o)=>({src:`/CTC%20NEW%20REACT%20WEBSITE/images/SPORTS/image${o+1}.jpeg`,alt:`Sports Event ${o+1}`})),$d=["normal","tall","wide","normal","normal","wide","tall","normal"];function kg(){const[i,o]=v.useState(null),[c,d]=v.useState(!1),m=v.useMemo(()=>Cg.map((j,x)=>({...j,size:$d[x%$d.length]})),[]),f=c?m:m.slice(0,10),u=v.useCallback(j=>{i!==null&&(j.key==="ArrowRight"&&o(x=>(x+1)%f.length),j.key==="ArrowLeft"&&o(x=>(x-1+f.length)%f.length),j.key==="Escape"&&o(null))},[i,f.length]);v.useEffect(()=>(window.addEventListener("keydown",u),()=>window.removeEventListener("keydown",u)),[u]);const h=i!==null?f[i]:null;return e.jsxs("div",{className:"tc-page",children:[e.jsx("style",{children:`
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
  `}),e.jsxs("div",{className:"tc-hero",children:[e.jsxs("div",{className:"tc-hero-inner",children:[e.jsxs("div",{className:"tc-hero-left",children:[e.jsxs("div",{className:"tc-hero-badge",children:[e.jsx("i",{className:"fa-solid fa-trophy"})," Gymkhana · Sports Club"]}),e.jsxs("h1",{className:"tc-hero-h1",children:["SPORTS ",e.jsx("em",{children:"CLUB"})]}),e.jsx("p",{className:"tc-hero-sub",children:"Dedicated to promoting physical fitness, discipline, teamwork, and sportsmanship — building resilience, leadership, and a healthy lifestyle among students."}),e.jsx("div",{className:"tc-hero-stats",children:[{val:`${Ud.length}+`,label:"Sports Events"},{val:"Annual",label:"Sports Meet"},{val:"100%",label:"Participation"},{val:"Dec",label:"Season"}].map((j,x)=>e.jsxs("div",{children:[e.jsx("div",{className:"tc-hero-stat-val",children:j.val}),e.jsx("div",{className:"tc-hero-stat-lbl",children:j.label})]},x))})]}),e.jsx("div",{className:"tc-hero-right",children:e.jsx("div",{className:"tc-hero-pills",children:[{dot:"#3b82f6",icon:"fa-solid fa-person-running",label:"Track & Field"},{dot:"#10b981",icon:"fa-solid fa-futbol",label:"Team Sports"},{dot:"#ffcc00",icon:"fa-solid fa-chess",label:"Indoor Games"},{dot:"#ec4899",icon:"fa-solid fa-dumbbell",label:"Fitness Workshops"},{dot:"#00d4ff",icon:"fa-solid fa-trophy",label:"Tournaments"}].map((j,x)=>e.jsxs("div",{className:"tc-hero-pill",children:[e.jsx("span",{className:"tc-hero-pill-dot",style:{background:j.dot}}),e.jsx("i",{className:j.icon,style:{color:j.dot,width:16,textAlign:"center"}}),j.label]},x))})})]}),e.jsx("div",{className:"tc-hero-wave",children:e.jsx("svg",{viewBox:"0 0 1440 56",preserveAspectRatio:"none",children:e.jsx("path",{d:"M0,38 C360,56 1080,0 1440,38 L1440,56 L0,56 Z",fill:"#f0f4f8"})})})]}),e.jsxs("div",{className:"tc-main",children:[e.jsxs("div",{className:"tc-leaders-wrap",children:[e.jsxs("div",{className:"tc-section-head",children:[e.jsxs("div",{className:"tc-pill-tag",children:[e.jsx("i",{className:"fa-solid fa-users"})," Our Leadership"]}),e.jsxs("h2",{children:["Club Incharge & ",e.jsx("span",{children:"Secretaries"})]})]}),e.jsx("div",{className:"tc-leaders-grid",children:[{role:"Club Incharge",name:"Mr. Satya S. S. Dehury",img:"/CTC NEW REACT WEBSITE/images/SPORTS/Satya Sir.jpg",tag:"Faculty Lead"},{role:"Club Secretary (Boy)",name:" Mr. Chiranjib Pattnaik",img:"/CTC NEW REACT WEBSITE/images/SPORTS/gulu.jpeg",tag:"Student Rep"},{role:"Club Secretary (Girl)",name:"Monalisha Behera",img:"/CTC NEW REACT WEBSITE/images/SPORTS/monalisha.jpeg",tag:"Student Rep"}].map((j,x)=>e.jsxs("div",{className:"tc-leader-card",children:[e.jsx("div",{className:"tc-leader-img",children:e.jsx("img",{src:j.img,alt:j.role})}),e.jsxs("div",{className:"tc-leader-body",children:[e.jsx("h4",{children:j.role}),e.jsx("div",{style:{fontSize:"0.9rem",fontWeight:700,color:"#2563eb",marginBottom:"8px",fontFamily:"'Plus Jakarta Sans', sans-serif"},children:j.name}),e.jsx("span",{className:"tc-leader-tag",children:j.tag})]})]},x))})]}),e.jsxs("div",{style:{padding:"72px 4%"},children:[e.jsxs("div",{className:"tc-section-head",children:[e.jsxs("div",{className:"tc-pill-tag",children:[e.jsx("i",{className:"fa-solid fa-bullseye"})," Mission"]}),e.jsxs("h2",{children:["Our ",e.jsx("span",{children:"Objectives"})]}),e.jsx("p",{children:"Core principles guiding every tournament, session, and activity we organize."})]}),e.jsx("div",{className:"tc-obj-grid",children:Sg.map((j,x)=>e.jsxs("div",{className:"tc-obj-card",children:[e.jsx("div",{className:"tc-obj-icon",children:e.jsx("i",{className:j.icon})}),e.jsx("p",{children:j.text})]},x))})]}),e.jsxs("div",{className:"tc-proj-wrap",children:[e.jsxs("div",{className:"tc-section-head",children:[e.jsxs("div",{className:"tc-pill-tag",children:[e.jsx("i",{className:"fa-solid fa-list"})," Events"]}),e.jsxs("h2",{children:["Our ",e.jsx("span",{children:"Activities"})]}),e.jsx("p",{children:"Annual sports events organized every December during the Sports Meet."})]}),e.jsx("div",{className:"tc-proj-inner",children:Ud.map((j,x)=>e.jsxs("div",{className:"tc-proj-row",children:[e.jsx("div",{className:"tc-proj-num",children:String(x+1).padStart(2,"0")}),e.jsx("div",{style:{flex:1},children:e.jsxs("div",{className:"tc-proj-name",children:[e.jsx("i",{className:`fa-solid ${j.icon}`,style:{marginRight:8,color:"#2563eb"}}),j.name]})}),e.jsxs("div",{className:"tc-proj-date",children:[e.jsx("i",{className:"fa-regular fa-calendar",style:{marginRight:5}}),j.month]})]},x))})]}),e.jsx("div",{className:"tc-mission-static",children:e.jsxs("div",{className:"tc-mission-card",children:[e.jsx("img",{src:"/CTC NEW REACT WEBSITE/images/SPORTS/banner.jpeg",alt:"Sports Club Banner",className:"tc-mission-img"}),e.jsxs("div",{className:"tc-mission-overlay",children:[e.jsx("h3",{children:"Annual Sports Meet"}),e.jsx("p",{children:"Where champions are made — track, field, and team sports bring out the best in every participant."})]})]})})]}),e.jsxs("div",{className:"tc-gallery-wrap",children:[e.jsxs("div",{className:"tc-section-head",children:[e.jsxs("div",{className:"tc-pill-tag",style:{background:"rgba(255,204,0,0.15)",color:"#ffcc00",border:"1px solid rgba(255,204,0,0.3)"},children:[e.jsx("i",{className:"fa-solid fa-images"})," Gallery"]}),e.jsxs("h2",{style:{color:"#fff"},children:["Annual Sports ",e.jsx("span",{style:{color:"#ffcc00"},children:"Highlights"})]}),e.jsx("p",{style:{color:"rgba(255,255,255,0.45)"},children:"Moments of triumph, teamwork, and sportsmanship from our annual sports meets."})]}),e.jsx("div",{className:"tc-gallery-grid",children:f.map((j,x)=>e.jsxs("div",{className:`tc-gallery-item ${j.size==="tall"?"tc-item-tall":""} ${j.size==="wide"?"tc-item-wide":""}`,onClick:()=>o(x),children:[e.jsx("img",{src:j.src,alt:j.alt,loading:"lazy"}),e.jsx("div",{className:"tc-gallery-overlay",children:e.jsx("i",{className:"fa-solid fa-expand"})})]},x))})]}),h&&e.jsxs("div",{className:"gl-lightbox",onClick:j=>j.target===j.currentTarget&&o(null),children:[e.jsx("button",{className:"gl-close",onClick:()=>o(null),children:"✕"}),e.jsx("button",{className:"gl-nav",style:{left:"40px"},onClick:()=>o(j=>(j-1+f.length)%f.length),children:"←"}),e.jsxs("div",{className:"gl-panel",children:[e.jsx("img",{className:"gl-img",src:h.src,alt:"View"}),e.jsx("div",{style:{color:"#ffcc00",fontWeight:900,marginTop:"25px",fontSize:"1.2rem"},children:"SPORTS CLUB ARCHIVES"})]}),e.jsx("button",{className:"gl-nav",style:{right:"40px"},onClick:()=>o(j=>(j+1)%f.length),children:"→"})]})]})}const Ng=[{icon:"fa-solid fa-palette",text:"Encourage students to showcase and develop their artistic and creative abilities."},{icon:"fa-solid fa-earth-asia",text:"Provide a platform for cultural exchange, inclusivity, and diversity."},{icon:"fa-solid fa-crown",text:"Promote leadership, teamwork, and organizational skills through cultural events."},{icon:"fa-solid fa-microphone",text:"Enhance students' confidence, communication, and presentation skills."},{icon:"fa-solid fa-music",text:"Make the campus a hub of cultural vibrancy and student engagement."}],Eg=[{name:"Inter-College Fest",members:"Ravi Kumar, Sonal Sharma",date:"March 2024",icon:"fa-solid fa-flag",color:"#3b82f6"},{name:"Drama Night",members:"Ananya Gupta",date:"December 2023",icon:"fa-solid fa-masks-theater",color:"#8b5cf6"},{name:"Folk Dance Fiesta",members:"Team Cultural",date:"August 2024",icon:"fa-solid fa-music",color:"#ec4899"}],Tg=[{src:"/CTC%20NEW%20REACT%20WEBSITE/images/CULTURAL/funfest/f1.jpeg",alt:"Fun Fest 1"},{src:"/CTC%20NEW%20REACT%20WEBSITE/images/CULTURAL/funfest/f2.jpeg",alt:"Fun Fest 2"},{src:"/CTC%20NEW%20REACT%20WEBSITE/images/CULTURAL/funfest/f3.jpeg",alt:"Fun Fest 3"},{src:"/CTC%20NEW%20REACT%20WEBSITE/images/CULTURAL/funfest/f4.jpeg",alt:"Fun Fest 4"},{src:"/CTC%20NEW%20REACT%20WEBSITE/images/CULTURAL/funfest/f5.jpeg",alt:"Fun Fest 5"},{src:"/CTC%20NEW%20REACT%20WEBSITE/images/CULTURAL/funfest/f6.jpeg",alt:"Fun Fest 6"},{src:"/CTC%20NEW%20REACT%20WEBSITE/images/CULTURAL/funfest/f7.jpeg",alt:"Fun Fest 7"},{src:"/CTC%20NEW%20REACT%20WEBSITE/images/CULTURAL/holi/h1.jpeg",alt:"Holi 1"},{src:"/CTC%20NEW%20REACT%20WEBSITE/images/CULTURAL/holi/h2.jpeg",alt:"Holi 2"},{src:"/CTC%20NEW%20REACT%20WEBSITE/images/CULTURAL/holi/h3.jpeg",alt:"Holi 3"},{src:"/CTC%20NEW%20REACT%20WEBSITE/images/CULTURAL/holi/h4.jpeg",alt:"Holi 4"},{src:"/CTC%20NEW%20REACT%20WEBSITE/images/CULTURAL/holi/h5.jpeg",alt:"Holi 5"},{src:"/CTC%20NEW%20REACT%20WEBSITE/images/CULTURAL/saraswati_puja/sp1.jpeg",alt:"Saraswati Puja 1"},{src:"/CTC%20NEW%20REACT%20WEBSITE/images/CULTURAL/saraswati_puja/sp2.jpeg",alt:"Saraswati Puja 2"},{src:"/CTC%20NEW%20REACT%20WEBSITE/images/CULTURAL/saraswati_puja/sp3.jpeg",alt:"Saraswati Puja 3"},{src:"/CTC%20NEW%20REACT%20WEBSITE/images/CULTURAL/saraswati_puja/sp4.jpeg",alt:"Saraswati Puja 4"},{src:"/CTC%20NEW%20REACT%20WEBSITE/images/CULTURAL/saraswati_puja/sp5.jpeg",alt:"Saraswati Puja 5"},{src:"/CTC%20NEW%20REACT%20WEBSITE/images/CULTURAL/saraswati_puja/sp6.jpeg",alt:"Saraswati Puja 6"}],Gd=["normal","tall","wide","normal","normal","wide","tall","normal","normal","tall","wide","normal","normal","wide","tall","normal","normal","normal"];function Ag(){const[i,o]=v.useState(null),[c,d]=v.useState(!1),m=v.useMemo(()=>Tg.map((j,x)=>({...j,size:Gd[x%Gd.length]})),[]),f=c?m:m.slice(0,10),u=v.useCallback(j=>{i!==null&&(j.key==="ArrowRight"&&o(x=>(x+1)%f.length),j.key==="ArrowLeft"&&o(x=>(x-1+f.length)%f.length),j.key==="Escape"&&o(null))},[i,f.length]);v.useEffect(()=>(window.addEventListener("keydown",u),()=>window.removeEventListener("keydown",u)),[u]);const h=i!==null?f[i]:null;return e.jsxs("div",{className:"tc-page",children:[e.jsx("style",{children:`
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
  `}),e.jsxs("div",{className:"tc-hero",children:[e.jsxs("div",{className:"tc-hero-inner",children:[e.jsxs("div",{className:"tc-hero-left",children:[e.jsxs("div",{className:"tc-hero-badge",children:[e.jsx("i",{className:"fa-solid fa-masks-theater"})," Gymkhana · Cultural Club"]}),e.jsxs("h1",{className:"tc-hero-h1",children:["CULTURAL ",e.jsx("em",{children:"CLUB"})]}),e.jsx("p",{className:"tc-hero-sub",children:"Celebrating creativity, expression, and diversity through art, music, dance, and drama — providing students a vibrant stage to explore their artistic potential and cultural heritage."}),e.jsx("div",{className:"tc-hero-stats",children:[{val:"5+",label:"Art Forms"},{val:"Annual",label:"Cultural Fest"},{val:"50+",label:"Participants"},{val:"All Year",label:"Activities"}].map((j,x)=>e.jsxs("div",{children:[e.jsx("div",{className:"tc-hero-stat-val",children:j.val}),e.jsx("div",{className:"tc-hero-stat-lbl",children:j.label})]},x))})]}),e.jsx("div",{className:"tc-hero-right",children:e.jsx("div",{className:"tc-hero-pills",children:[{dot:"#3b82f6",icon:"fa-solid fa-music",label:"Music"},{dot:"#10b981",icon:"fa-solid fa-child",label:"Dance"},{dot:"#ffcc00",icon:"fa-solid fa-masks-theater",label:"Drama"},{dot:"#ec4899",icon:"fa-solid fa-palette",label:"Fine Arts"},{dot:"#00d4ff",icon:"fa-solid fa-pen-nib",label:"Literary"}].map((j,x)=>e.jsxs("div",{className:"tc-hero-pill",children:[e.jsx("span",{className:"tc-hero-pill-dot",style:{background:j.dot}}),e.jsx("i",{className:j.icon,style:{color:j.dot,width:16,textAlign:"center"}}),j.label]},x))})})]}),e.jsx("div",{className:"tc-hero-wave",children:e.jsx("svg",{viewBox:"0 0 1440 56",preserveAspectRatio:"none",children:e.jsx("path",{d:"M0,38 C360,56 1080,0 1440,38 L1440,56 L0,56 Z",fill:"#f0f4f8"})})})]}),e.jsxs("div",{className:"tc-main",children:[e.jsxs("div",{className:"tc-leaders-wrap",children:[e.jsxs("div",{className:"tc-section-head",children:[e.jsxs("div",{className:"tc-pill-tag",children:[e.jsx("i",{className:"fa-solid fa-users"})," Our Leadership"]}),e.jsxs("h2",{children:["Club Incharge & ",e.jsx("span",{children:"Secretaries"})]})]}),e.jsx("div",{className:"tc-leaders-grid",children:[{role:"Club Incharge",name:"Mr. Krishnasis Mishra",img:"/CTC NEW REACT WEBSITE/images/CULTURAL/Principal Sir.jpg",tag:"Faculty Lead"},{role:"Club Secretary (Boy)",name:"Mr. Bikash Behera",img:"/CTC NEW REACT WEBSITE/images/CULTURAL/bikash.jpeg",tag:"Student Rep"},{role:"Club Secretary (Girl)",name:"Ms. Ipsita Pattanaik",img:"/CTC NEW REACT WEBSITE/images/CULTURAL/ipsita.jpg",tag:"Student Rep"}].map((j,x)=>e.jsxs("div",{className:"tc-leader-card",children:[e.jsx("div",{className:"tc-leader-img",children:e.jsx("img",{src:j.img,alt:j.role})}),e.jsxs("div",{className:"tc-leader-body",children:[e.jsx("h4",{children:j.role}),e.jsx("div",{style:{fontSize:"0.9rem",fontWeight:700,color:"#2563eb",marginBottom:"8px",fontFamily:"'Plus Jakarta Sans', sans-serif"},children:j.name}),e.jsx("span",{className:"tc-leader-tag",children:j.tag})]})]},x))})]}),e.jsxs("div",{style:{padding:"72px 4%"},children:[e.jsxs("div",{className:"tc-section-head",children:[e.jsxs("div",{className:"tc-pill-tag",children:[e.jsx("i",{className:"fa-solid fa-bullseye"})," Mission"]}),e.jsxs("h2",{children:["Our ",e.jsx("span",{children:"Objectives"})]}),e.jsx("p",{children:"The principles that shape every cultural event, workshop, and performance we create."})]}),e.jsx("div",{className:"tc-obj-grid",children:Ng.map((j,x)=>e.jsxs("div",{className:"tc-obj-card",children:[e.jsx("div",{className:"tc-obj-icon",children:e.jsx("i",{className:j.icon})}),e.jsx("p",{children:j.text})]},x))})]}),e.jsxs("div",{className:"tc-proj-wrap",children:[e.jsxs("div",{className:"tc-section-head",children:[e.jsxs("div",{className:"tc-pill-tag",children:[e.jsx("i",{className:"fa-solid fa-calendar-check"})," Events"]}),e.jsxs("h2",{children:["Our ",e.jsx("span",{children:"Activities"})]}),e.jsx("p",{children:"Cultural events that bring creativity, celebration, and student talent to the spotlight."})]}),e.jsx("div",{className:"tc-proj-inner",children:Eg.map((j,x)=>e.jsxs("div",{className:"tc-proj-row",children:[e.jsx("div",{className:"tc-proj-num",children:String(x+1).padStart(2,"0")}),e.jsxs("div",{style:{flex:1},children:[e.jsxs("div",{className:"tc-proj-name",children:[e.jsx("i",{className:j.icon,style:{marginRight:8,color:j.color}}),j.name]}),e.jsxs("div",{className:"tc-proj-sub",children:[e.jsx("i",{className:"fa-solid fa-users",style:{fontSize:"0.6rem",marginRight:4}}),j.members]})]}),e.jsxs("div",{className:"tc-proj-date",children:[e.jsx("i",{className:"fa-regular fa-calendar",style:{marginRight:5}}),j.date]})]},x))})]}),e.jsx("div",{className:"tc-mission-static",children:e.jsxs("div",{className:"tc-mission-card",children:[e.jsx("img",{src:"/CTC NEW REACT WEBSITE/images/CULTURAL/banner.jpg",alt:"Cultural Club Banner",className:"tc-mission-img"}),e.jsxs("div",{className:"tc-mission-overlay",children:[e.jsx("h3",{children:"Where Art Meets Identity"}),e.jsx("p",{children:"Our annual cultural fest showcases the rich heritage and creative spirit of our students."})]})]})})]})," ",e.jsxs("div",{className:"tc-gallery-wrap",children:[e.jsxs("div",{className:"tc-section-head",children:[e.jsxs("div",{className:"tc-pill-tag",style:{background:"rgba(255,204,0,0.15)",color:"#ffcc00",border:"1px solid rgba(255,204,0,0.3)"},children:[e.jsx("i",{className:"fa-solid fa-images"})," Gallery"]}),e.jsxs("h2",{style:{color:"#fff"},children:["Event ",e.jsx("span",{style:{color:"#ffcc00"},children:"Gallery"})]}),e.jsx("p",{style:{color:"rgba(255,255,255,0.45)"},children:"Vivid memories from our cultural events, performances, and festive celebrations."})]}),e.jsx("div",{className:"tc-gallery-grid",children:f.map((j,x)=>e.jsxs("div",{className:`tc-gallery-item ${j.size==="tall"?"tc-item-tall":""} ${j.size==="wide"?"tc-item-wide":""}`,onClick:()=>o(x),children:[e.jsx("img",{src:j.src,alt:j.alt,loading:"lazy"}),e.jsx("div",{className:"tc-gallery-overlay",children:e.jsx("i",{className:"fa-solid fa-expand"})})]},x))}),!c&&m.length>10&&e.jsxs("button",{className:"tc-btn-full",onClick:()=>d(!0),children:["EXPLORE FULL ARCHIVE (",m.length," IMAGES)"]})]}),h&&e.jsxs("div",{className:"gl-lightbox",onClick:j=>j.target===j.currentTarget&&o(null),children:[e.jsx("button",{className:"gl-close",onClick:()=>o(null),children:"✕"}),e.jsx("button",{className:"gl-nav",style:{left:"40px"},onClick:()=>o(j=>(j-1+f.length)%f.length),children:"←"}),e.jsxs("div",{className:"gl-panel",children:[e.jsx("img",{className:"gl-img",src:h.src,alt:"View"}),e.jsx("div",{style:{color:"#ffcc00",fontWeight:900,marginTop:"25px",fontSize:"1.2rem"},children:"CULTURAL CLUB ARCHIVES"}),e.jsx("div",{className:"gl-thumbs",children:f.map((j,x)=>e.jsx("div",{className:`gl-thumb ${i===x?"active":""}`,onClick:()=>o(x),children:e.jsx("img",{src:j.src,alt:"thumb"})},x))})]}),e.jsx("button",{className:"gl-nav",style:{right:"40px"},onClick:()=>o(j=>(j+1)%f.length),children:"→"})]})]})}const Jt=[{name:"Sana Rao",batch:"2023",domain:"HR"},{name:"Saswat Patra",batch:"2023",domain:"HR"},{name:"Puja Kumari",batch:"2023",domain:"HR"},{name:"Santosh Sahu",batch:"2023",domain:"HR"},{name:"Sneha Kumari",batch:"2023",domain:"HR"},{name:"Chiranjib Pattanaik",batch:"2023",domain:"HR"},{name:"Supriya Mohanty",batch:"2023",domain:"HR"},{name:"Shankar Sahu",batch:"2023",domain:"Marketing"},{name:"Jitendra Karan Sahu",batch:"2023",domain:"Marketing"},{name:"Surendra Sahu",batch:"2023",domain:"Marketing"},{name:"Priyanka Sahu",batch:"2023",domain:"Marketing"},{name:"Priyadarshani Sahoo",batch:"2023",domain:"Human Resource"},{name:"Ipsita Samal",batch:"2023",domain:"Human Resource"},{name:"Manasmita Dehury",batch:"2023",domain:"Human Resource"},{name:"Lipsarani Das",batch:"2023",domain:"Human Resource"},{name:"Binit Kumar Sahu",batch:"2023",domain:"Human Resource"},{name:"Jiban Jyoti Jena",batch:"2023",domain:"Human Resource"},{name:"Bikash Behera",batch:"2023",domain:"Human Resource & Marketing"},{name:"Abhijit Sahoo",batch:"2023",domain:"Human Resource"},{name:"Sunita Behera",batch:"2023",domain:"Human Resource"},{name:"Jilu Das",batch:"2023",domain:"Human Resource"},{name:"Gajendra Behera",batch:"2023",domain:"Human Resource"},{name:"Kalpana Sahoo",batch:"2023",domain:"Human Resource"}],Jd=[{name:"Fave Station",members:"Sibu, Chuman, Tusar, Prangya, Pritimayee, Prajolita, M.Anatha",year:"2023"},{name:"Young Valet",members:"Amit, Nensi, Rituprana, Monali, Sushree, Kasturi, Isha, Raju, Puja",year:"2023"},{name:"Milk Mistry",members:"Alok, Abhishek, Rahul, Chidatmika, Monalisa, Punam, Khusi, Titan",year:"2023"},{name:"Be Safe",members:"Ipshita, Lipsa, Rupali, Ankush, Jahir, Priti, Subhasmita, Sradhanjali",year:"2023"},{name:"Multi Complex",members:"Abhijeet, Rahul, Saswat, Bikash, Sneha, Puja, Ipsita, Snighdha, Santosh",year:"2023"},{name:"Rope Way",members:"Karan, Sana, Chiranjib, Soubhagya, Surendra, Priyanka, Lipsa, Arpita, Kalpana",year:"2023"},{name:"Aqua Bliss",members:"Jitendra Karan Sahu, Jiban Jyoti Jena, Rahul Biswal, Sanjay Manna, Santosh Sahu",year:"2024"},{name:"Farm Fresh",members:"Biswa, Suchismita Sahu, Swosti Swamsree Behera, Jyoti Sankar Das, Parimita Minz",year:"2024"},{name:"Bio Bloom (A)",members:"Jashmin Pradhan, Swagat Kumar Behera, Nafisha Parween, Nibedita Behera",year:"2024"},{name:"Bio Bloom (B)",members:"Binit, Lipsa, Kalpana, Supriya, Saswat, Arpita, Bikash, Jilu",year:"2024"}],Pg=[{name:"Abhishek Sahu",img:"/CTC NEW REACT WEBSITE/images/Disha & CSR/Abhishek Sahu.jpg"},{name:"Alok Kumar Sahoo",img:"/CTC NEW REACT WEBSITE/images/Disha & CSR/Alok Kumar Sahoo.jpg"},{name:"Chidatmika Pradhan",img:"/CTC NEW REACT WEBSITE/images/Disha & CSR/Chidatmika Pradhan.jpg"},{name:"Chuman Sahoo",img:"/CTC NEW REACT WEBSITE/images/Disha & CSR/Chuman Sahoo.jpg"},{name:"Khusi Bilas",img:"/CTC NEW REACT WEBSITE/images/Disha & CSR/Khusi Bilas.jpg"},{name:"M. Anata Laxmi",img:"/CTC NEW REACT WEBSITE/images/Disha & CSR/M. Anata Laxmi.jpg"},{name:"Monalisha Pradhan",img:"/CTC NEW REACT WEBSITE/images/Disha & CSR/Monalisha Pradhan.jpg"},{name:"Nibedita Dehury",img:"/CTC NEW REACT WEBSITE/images/Disha & CSR/Nibedita Dehury.jpg"},{name:"Poonam Priyadarshini Panda",img:"/CTC NEW REACT WEBSITE/images/Disha & CSR/Poonam priyadarshini Panda.jpg"},{name:"Pradyuda Sahoo",img:"/CTC NEW REACT WEBSITE/images/Disha & CSR/Pradyuda Sahoo.jpg"},{name:"Prajolita Dehury",img:"/CTC NEW REACT WEBSITE/images/Disha & CSR/Prajolita Dehury.jpg"},{name:"Prangyaparasmita Sahu",img:"/CTC NEW REACT WEBSITE/images/Disha & CSR/Prangyaparasmita Sahu.jpg"},{name:"Pritimayee Biswal",img:"/CTC NEW REACT WEBSITE/images/Disha & CSR/Pritimayee Biswal.jpg"},{name:"Rahul Kumar Sahu",img:"/CTC NEW REACT WEBSITE/images/Disha & CSR/Rahul kumar Sahu.jpg"},{name:"Sibuprasad Nayak",img:"/CTC NEW REACT WEBSITE/images/Disha & CSR/Sibuprasad.jpg"},{name:"Titan Ku Prusty",img:"/CTC NEW REACT WEBSITE/images/Disha & CSR/Titan ku Prusty.jpg"},{name:"Tusar Raman Naik",img:"/CTC NEW REACT WEBSITE/images/Disha & CSR/Tusar Raman Naik.jpg"}],Yd=[{label:"MAGAZINE 1",src:"/CTC%20NEW%20REACT%20WEBSITE/images/Disha & CSR/Published by  Management Students (1).pdf"},{label:"MAGAZINE 2",src:"/CTC%20NEW%20REACT%20WEBSITE/images/Disha & CSR/Disha (Episode 2) .pdf"},{label:"MAGAZINE 3",src:"/CTC%20NEW%20REACT%20WEBSITE/images/Disha & CSR/The children of today will make the India of tomorrow. 3.pdf"},{label:"MAGAZINE 4",src:"/CTC%20NEW%20REACT%20WEBSITE/images/Disha & CSR/Disha Episode-4.pdf"},{label:"MAGAZINE 5",src:"/CTC%20NEW%20REACT%20WEBSITE/images/Disha & CSR/Disha episode-5.pdf"},{label:"MAGAZINE 6",src:"/CTC%20NEW%20REACT%20WEBSITE/images/Disha & CSR/Disha Episode-6.pdf"},{label:"MAGAZINE 7",src:"/CTC%20NEW%20REACT%20WEBSITE/images/Disha & CSR/Disha ep-07.pdf"}],Vd=[...Array.from({length:3},(i,o)=>`/CTC%20NEW%20REACT%20WEBSITE/images/Disha & CSR/im${[1,2,3][o]}.jpg`),"/CTC%20NEW%20REACT%20WEBSITE/images/Disha & CSR/im5.jpg",...Array.from({length:24},(i,o)=>`/images/Disha & CSR/photo${o+1}.jpg`)],Kd=["normal","tall","wide","normal","normal","wide","tall","normal"],Qd={2023:{bg:"#eff6ff",color:"#2563eb",border:"#bfdbfe"},2024:{bg:"#ecfdf5",color:"#059669",border:"#a7f3d0"},2025:{bg:"#fef3c7",color:"#d97706",border:"#fde68a"}},ai=12;function Rg({page:i,totalPages:o,total:c,label:d,onPage:m}){if(o<=1)return null;const f=[];if(o<=7)for(let u=1;u<=o;u++)f.push(u);else if(i<=4)for(let u=1;u<=7;u++)f.push(u);else if(i>=o-3)for(let u=o-6;u<=o;u++)f.push(u);else for(let u=i-3;u<=i+3;u++)f.push(u);return e.jsxs("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",gap:8,marginTop:20,flexWrap:"wrap"},children:[e.jsx("button",{onClick:()=>m(Math.max(1,i-1)),disabled:i===1,style:{background:i===1?"#f0f4f8":"#0c2340",color:i===1?"#94a3b8":"#ffcc00",border:"none",borderRadius:10,padding:"8px 16px",fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"0.8rem",fontWeight:700,cursor:i===1?"default":"pointer"},children:"← Prev"}),f.map(u=>e.jsx("button",{onClick:()=>m(u),style:{background:i===u?"#0c2340":"#fff",color:i===u?"#ffcc00":"#0c2340",border:`1.5px solid ${i===u?"#0c2340":"rgba(12,35,64,0.15)"}`,borderRadius:10,padding:"8px 14px",minWidth:38,fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"0.8rem",fontWeight:700,cursor:"pointer"},children:u},u)),e.jsx("button",{onClick:()=>m(Math.min(o,i+1)),disabled:i===o,style:{background:i===o?"#f0f4f8":"#0c2340",color:i===o?"#94a3b8":"#ffcc00",border:"none",borderRadius:10,padding:"8px 16px",fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"0.8rem",fontWeight:700,cursor:i===o?"default":"pointer"},children:"Next →"}),e.jsxs("span",{style:{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"0.75rem",color:"#94a3b8",fontWeight:600},children:["Page ",i," of ",o," · ",c," ",d||"members"]})]})}function Bg(){const[i,o]=v.useState(null),[c,d]=v.useState(!1),[m,f]=v.useState(1),[u,h]=v.useState("all"),y=v.useMemo(()=>u==="all"?Jt:Jt.filter(T=>T.batch===u),[u]),j=Math.ceil(y.length/ai),x=v.useMemo(()=>y.slice((m-1)*ai,m*ai),[y,m]),b=T=>{h(T),f(1)},P=v.useMemo(()=>Vd.map((T,A)=>({src:T,size:Kd[A%Kd.length],alt:`Disha Impact Shot ${A+1}`})),[]),H=c?P:P.slice(0,10),Y=v.useCallback(T=>{i!==null&&(T.key==="ArrowRight"&&o(A=>(A+1)%H.length),T.key==="ArrowLeft"&&o(A=>(A-1+H.length)%H.length),T.key==="Escape"&&o(null))},[i,H.length]);v.useEffect(()=>(window.addEventListener("keydown",Y),()=>window.removeEventListener("keydown",Y)),[Y]);const R=i!==null?H[i]:null;return e.jsxs("div",{className:"tc-page",children:[e.jsx("style",{children:`
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
  `}),e.jsxs("div",{className:"tc-hero",children:[e.jsxs("div",{className:"tc-hero-inner",children:[e.jsxs("div",{className:"tc-hero-left",children:[e.jsxs("div",{className:"tc-hero-badge",children:[e.jsx("i",{className:"fa-solid fa-hand-holding-heart"})," Gymkhana · Social Wing"]}),e.jsxs("h1",{className:"tc-hero-h1",children:["DISHA ",e.jsx("em",{children:"&"})," CSR"]}),e.jsx("p",{className:"tc-hero-sub",children:"Advocating for the visually impaired and serving the less fortunate. We transform college life into a mission of compassion and professional responsibility."}),e.jsx("div",{className:"tc-hero-stats",children:[{val:`${Jt.length}+`,label:"Active Members"},{val:`${Jd.length}+`,label:"Projects"},{val:`${Yd.length}`,label:"Magazines"},{val:`${Vd.length}`,label:"Impact Shots"}].map((T,A)=>e.jsxs("div",{children:[e.jsx("div",{className:"tc-hero-stat-val",children:T.val}),e.jsx("div",{className:"tc-hero-stat-lbl",children:T.label})]},A))})]}),e.jsx("div",{className:"tc-hero-right",children:e.jsx("div",{className:"tc-hero-pills",children:[{dot:"#3b82f6",icon:"fa-solid fa-eye",label:"Visually Impaired Advocacy"},{dot:"#10b981",icon:"fa-solid fa-bowl-food",label:"Community Kitchen"},{dot:"#ffcc00",icon:"fa-solid fa-book-open",label:"Magazine Publications"},{dot:"#ec4899",icon:"fa-solid fa-hand-holding-heart",label:"Sewa Projects"},{dot:"#00d4ff",icon:"fa-solid fa-children",label:"Child Welfare"}].map((T,A)=>e.jsxs("div",{className:"tc-hero-pill",children:[e.jsx("span",{className:"tc-hero-pill-dot",style:{background:T.dot}}),e.jsx("i",{className:T.icon,style:{color:T.dot,width:16,textAlign:"center"}}),T.label]},A))})})]}),e.jsx("div",{className:"tc-hero-wave",children:e.jsx("svg",{viewBox:"0 0 1440 56",preserveAspectRatio:"none",children:e.jsx("path",{d:"M0,38 C360,56 1080,0 1440,38 L1440,56 L0,56 Z",fill:"#f0f4f8"})})})]}),e.jsxs("div",{className:"tc-main",children:[e.jsxs("div",{className:"tc-leaders-wrap",children:[e.jsxs("div",{className:"tc-section-head",children:[e.jsxs("div",{className:"tc-pill-tag",children:[e.jsx("i",{className:"fa-solid fa-users"})," Our Leadership"]}),e.jsxs("h2",{children:["Club Incharge & ",e.jsx("span",{children:"Secretaries"})]})]}),e.jsx("div",{className:"tc-leaders-grid",children:[{role:"Club Incharge",name:"Mr. Subhrajyoti Behera",img:"/CTC NEW REACT WEBSITE/images/OURTEAM/Subhrajyoti Sir.jpg",tag:"Faculty Lead"},{role:"Secretary (Boy)",name:"Mr. Abinash Behera",img:"/CTC NEW REACT WEBSITE/images/Disha & CSR/secretary_boy.jpg",tag:"Student Rep"},{role:"Secretary (Girl)",name:"Ms. Sana Rao",img:"/CTC NEW REACT WEBSITE/images/Disha & CSR/secretary_girl.jpg",tag:"Student Rep"}].map((T,A)=>e.jsxs("div",{className:"tc-leader-card",children:[e.jsx("div",{className:"tc-leader-img",children:e.jsx("img",{src:T.img,alt:T.role})}),e.jsxs("div",{className:"tc-leader-body",children:[e.jsx("h4",{children:T.role}),e.jsx("div",{style:{fontSize:"0.9rem",fontWeight:700,color:"#2563eb",marginBottom:"8px",fontFamily:"'Plus Jakarta Sans', sans-serif"},children:T.name}),e.jsx("span",{className:"tc-leader-tag",children:T.tag})]})]},A))})]}),e.jsx("div",{className:"tc-mission-static",children:e.jsxs("div",{className:"tc-mission-card",children:[e.jsx("img",{src:"/CTC NEW REACT WEBSITE/images/Disha & CSR/d1.jpg",alt:"Mission",className:"tc-mission-img"}),e.jsxs("div",{className:"tc-mission-overlay",children:[e.jsx("h3",{children:"Objective of Disha & CSR"}),e.jsx("p",{children:'Team Disha is a dedicated collective focused on making a sustainable impact on the lives of the less fortunate, with a specialized focus on the visually impaired community. Our mission is anchored in the spirit of "Sewa"—selfless service.'})]})]})}),e.jsxs("div",{className:"tc-techfest-wrap",style:{background:"#fff",borderRadius:22,margin:"40px 0"},children:[e.jsxs("div",{className:"tc-section-head",children:[e.jsxs("div",{className:"tc-pill-tag",children:[e.jsx("i",{className:"fa-solid fa-book-open"})," Publications"]}),e.jsxs("h2",{children:["Published ",e.jsx("span",{children:"Magazines"})]}),e.jsx("p",{children:"Episodes of Disha magazine capturing our journey and impact."})]}),e.jsx("div",{className:"tc-mag-grid",children:Yd.map((T,A)=>e.jsxs("div",{className:"tc-mag-card",onClick:()=>window.open(T.src,"_blank"),children:[e.jsxs("div",{className:"tc-mag-img",children:[e.jsx("img",{src:`/CTC%20NEW%20REACT%20WEBSITE/images/Disha & CSR/photo${A%5+1}.jpg`,alt:"preview"}),e.jsx("div",{className:"tc-mag-overlay-icon",children:e.jsx("i",{className:"fa-solid fa-file-pdf"})})]}),e.jsxs("div",{className:"tc-mag-body",children:[e.jsx("h3",{children:T.label}),e.jsxs("span",{className:"tc-mag-tag",children:["EPISODE ",A+1]}),e.jsxs("span",{className:"tc-mag-link",children:["VIEW PDF ",e.jsx("i",{className:"fa-solid fa-arrow-right"})]})]})]},A))})]}),e.jsxs("div",{className:"tc-team-wrap",children:[e.jsxs("div",{className:"tc-section-head",children:[e.jsxs("div",{className:"tc-pill-tag",children:[e.jsx("i",{className:"fa-solid fa-hand-holding-heart"})," Our Team"]}),e.jsxs("h2",{children:["Active ",e.jsx("span",{children:"Changemakers"})]}),e.jsxs("p",{children:[Jt.length," dedicated members working towards social impact."]})]}),e.jsx("div",{className:"tc-filter-bar",children:["all","2023","2024","2025"].map(T=>(T==="all"?Jt.length:Jt.filter(L=>L.batch===T).length)===0&&T!=="all"?null:e.jsx("button",{className:`tc-filter-btn${u===T?" active":""}`,onClick:()=>b(T),children:T==="all"?"All Batches":`Batch ${T}`},T))}),e.jsx("div",{className:"tc-table-wrap",children:e.jsxs("table",{className:"tc-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{width:48},children:"#"}),e.jsx("th",{children:"Name"}),e.jsx("th",{style:{width:100},children:"Batch"}),e.jsx("th",{children:"Domain"})]})}),e.jsx("tbody",{children:x.map((T,A)=>{const L=Qd[T.batch]||Qd[2023];return e.jsxs("tr",{children:[e.jsx("td",{style:{color:"#94a3b8",fontWeight:700},children:(m-1)*ai+A+1}),e.jsx("td",{style:{fontWeight:700},children:T.name}),e.jsx("td",{children:e.jsx("span",{className:"tc-batch-pill",style:{background:L.bg,color:L.color,border:`1px solid ${L.border}`},children:T.batch})}),e.jsx("td",{children:e.jsx("span",{className:"tc-domain-label",children:T.domain})})]},A)})})]})}),e.jsx(Rg,{page:m,totalPages:j,total:y.length,label:"members",onPage:f})]}),e.jsxs("div",{className:"tc-proj-wrap",children:[e.jsxs("div",{className:"tc-section-head",children:[e.jsxs("div",{className:"tc-pill-tag",children:[e.jsx("i",{className:"fa-solid fa-diagram-project"})," Impact"]}),e.jsxs("h2",{children:["Social ",e.jsx("span",{children:"Case Studies"})]}),e.jsx("p",{children:"Community projects executed by Team Disha & CSR."})]}),e.jsx("div",{className:"tc-proj-inner",children:Jd.map((T,A)=>e.jsxs("div",{className:"tc-proj-row",children:[e.jsx("div",{className:"tc-proj-num",children:String(A+1).padStart(2,"0")}),e.jsxs("div",{style:{flex:1},children:[e.jsx("div",{className:"tc-proj-name",children:T.name}),e.jsxs("div",{className:"tc-proj-sub",children:[e.jsx("i",{className:"fa-solid fa-users",style:{fontSize:"0.6rem",marginRight:4}}),T.members]})]}),e.jsxs("div",{className:"tc-proj-date",children:[e.jsx("i",{className:"fa-regular fa-calendar",style:{marginRight:5}}),T.year]})]},A))})]})]})," ",e.jsxs("div",{className:"tc-gallery-wrap",children:[e.jsxs("div",{className:"tc-section-head",children:[e.jsxs("div",{className:"tc-pill-tag",style:{background:"rgba(255,204,0,0.15)",color:"#ffcc00",border:"1px solid rgba(255,204,0,0.3)"},children:[e.jsx("i",{className:"fa-solid fa-images"})," Gallery"]}),e.jsxs("h2",{style:{color:"#fff"},children:["Visual ",e.jsx("span",{style:{color:"#ffcc00"},children:"Highlights"})]}),e.jsx("p",{style:{color:"rgba(255,255,255,0.45)"},children:"Captured moments of community outreach and selfless service."})]}),e.jsx("div",{className:"tc-gallery-grid",children:H.map((T,A)=>e.jsxs("div",{className:`tc-gallery-item ${T.size==="tall"?"tc-item-tall":""} ${T.size==="wide"?"tc-item-wide":""}`,onClick:()=>o(A),children:[e.jsx("img",{src:T.src,alt:T.alt,loading:"lazy"}),e.jsx("div",{className:"tc-gallery-overlay",children:e.jsx("i",{className:"fa-solid fa-expand"})})]},A))}),!c&&P.length>10&&e.jsxs("button",{className:"tc-btn-full",onClick:()=>d(!0),children:["EXPLORE FULL ARCHIVE (",P.length," IMAGES)"]})]}),e.jsxs("div",{className:"tc-ex-wrap",children:[e.jsxs("div",{className:"tc-section-head",children:[e.jsx("div",{className:"tc-pill-tag",style:{background:"rgba(255,204,0,0.15)",color:"#ffcc00",border:"1px solid rgba(255,204,0,0.3)"},children:"Legacy"}),e.jsxs("h2",{style:{color:"#fff"},children:["Compassionate ",e.jsx("span",{style:{color:"#ffcc00"},children:"Alumni"})]}),e.jsx("p",{style:{color:"rgba(255,255,255,0.45)"},children:"Former leaders who carried the torch of service."})]}),e.jsx("div",{className:"tc-ex-grid",children:Pg.map((T,A)=>e.jsxs("div",{className:"tc-ex-card",children:[e.jsx("div",{className:"tc-ex-img",children:e.jsx("img",{src:T.img,alt:T.name})}),e.jsx("p",{className:"tc-ex-name",children:T.name})]},A))})]}),R&&e.jsxs("div",{className:"gl-lightbox",onClick:T=>T.target===T.currentTarget&&o(null),children:[e.jsx("button",{className:"gl-close",onClick:()=>o(null),children:"✕"}),e.jsx("button",{className:"gl-nav",style:{left:"40px"},onClick:()=>o(T=>(T-1+H.length)%H.length),children:"←"}),e.jsxs("div",{className:"gl-panel",children:[e.jsx("img",{className:"gl-img",src:R.src,alt:"View"}),e.jsx("div",{style:{color:"#ffcc00",fontWeight:900,marginTop:"25px",fontSize:"1.2rem"},children:"DISHA & CSR ARCHIVES"}),e.jsx("div",{className:"gl-thumbs",children:H.map((T,A)=>e.jsx("div",{className:`gl-thumb ${i===A?"active":""}`,onClick:()=>o(A),children:e.jsx("img",{src:T.src,alt:"thumb"})},A))})]}),e.jsx("button",{className:"gl-nav",style:{right:"40px"},onClick:()=>o(T=>(T+1)%H.length),children:"→"})]})]})}const Ig={1:{version:"1.0",year:"2023",theme:"Innovation & Technology",color:"#3b82f6",colorDark:"#0c2340",img:"/CTC NEW REACT WEBSITE/images/TECHNOCRAT/TechFest1.0.jpg",about:["TechFest 1.0 is a celebration of innovation, creativity, and technology. It brings together students, developers, and innovators to showcase their technical projects and ideas. This event provides a platform for students to explore real-world problems and create impactful solutions through technology-driven projects and competitions.","Participants engaged in workshops, competitions, and seminars covering topics such as Artificial Intelligence, Internet of Things, Robotics, Software Development, and Machine Learning. TechFest 1.0 encourages collaboration, networking, and knowledge sharing among young innovators.","The event also features keynote speeches from industry leaders, mentorship sessions, and opportunities for students to showcase their startup ideas. TechFest 1.0 is designed to inspire, challenge, and recognize talent while providing a vibrant platform for learning and growth."],projects:[{name:"Human-Motion Detection",members:"Subham, Gyanaranjan, Chandanswain, Anata, Susree, Swarnalaxmi",year:"2023"},{name:"Eye Motion Detection",members:"Subasis, Abhijit, Satyadev, Subham, SK Akil",year:"2023"},{name:"Age Detection",members:"Tushar, Subodh",year:"2023"},{name:"Smart Home",members:"Shankar, Priyadarshan, Ashis, Sourav, Asutosh, Chandra, Suryakanta",year:"2023"},{name:"Gesture Control",members:"Sourav, Shankar, Rudra, Debasis, Nikhil, Somya Ranjan, Armstrong",year:"2023"},{name:"Student Attendance System",members:"Sneha, Priti Prangya, Sandhyarani, Smrutisikha",year:"2023"},{name:"Blind Person Assistant",members:"Priyadarshan, Satyabrata Ojha, Satyabrata Sahu, Sangita, Ananya, Anish, Subham",year:"2023"},{name:"LMS in Django",members:"Ashutosh, Chandra, Suryakanta, SK Akhil, Subham, Satyadev, Chandan, Anata, Susree, Swarnalaxmi, Rudra, Debasis, Nikhil, Somya Ranjan, Armstrong, Sneha, Priti Prangya, Sandhyarani, Smrutisikha, Sangita, Ananya, Anish, Subham",year:"2023"}],gallery:[26,27,28,29,30,31,33,34,36,35].map(i=>`/images/TECHNOCRAT/techfest1.0/IMG-20251002-WA00${i}.jpg`),galleryRest:[37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66].map(i=>`/images/TECHNOCRAT/techfest1.0/IMG-20251002-WA00${i}.jpg`)},2:{version:"2.0",year:"2024",theme:"Smart Systems & Automation",color:"#10b981",colorDark:"#0c2340",img:"/CTC NEW REACT WEBSITE/images/TECHNOCRAT/TechFest2.0.jpg",about:["TechFest 2.0 is a celebration of innovation, creativity, and technology. It brings together students, developers, and innovators to showcase their technical projects and ideas. This event provides a platform for students to explore real-world problems and create impactful solutions through technology-driven projects and competitions.","Participants will engage in workshops, competitions, and seminars, covering topics such as Artificial Intelligence, Internet of Things, Robotics, Software Development, and Machine Learning. TechFest 2.0 encourages collaboration, networking, and knowledge sharing among young innovators.","The event also features keynote speeches from industry leaders, mentorship sessions, and opportunities for students to showcase their startup ideas. TechFest 2.0 is designed to inspire, challenge, and recognize talent while providing a vibrant platform for learning and growth."],projects:[{name:"Automated Car",members:"Rakesh, Asutosh, Suryakant, Chandra",year:"2024"},{name:"Smart Parking System",members:"Priyadarshan, Rudraprasad, Sritam, Saswat",year:"2024"},{name:"Fire Detection & Prevention",members:"Sk, Nikhil",year:"2024"},{name:"Face To Aadhar",members:"Soumya, Aliva, Chinmayee",year:"2024"},{name:"Railway Track Accident Prevention",members:"Chandra, Ratnaprava, Monalisha",year:"2024"},{name:"IV Bag Monitoring System",members:"Anish, Debashis, Asutosh",year:"2024"},{name:"Plant Disease Detection By Leaf",members:"Rudra, Chandra",year:"2024"},{name:"Smart Traffic Control",members:"Asutosh, Yashita, Rudraprasad, Abhisek",year:"2024"},{name:"Smart Label Crossing System",members:"Anish, Swastika, Nikhil",year:"2024"},{name:"Automated Plant Watering System",members:"Chandan, Monalisha, Priyanka",year:"2024"},{name:"Women Safety",members:"Ananta, Elin, Bidusmita",year:"2024"},{name:"Product Failure Management System",members:"Priti",year:"2024"},{name:"Wildlife Detection",members:"Debasish, Archita, Sudipta",year:"2024"},{name:"Smart Reminder For Municipality",members:"Sangita, Jasmin, Saswat, Sritam",year:"2024"},{name:"Smart Home Security",members:"Smrutisikha, Arpita, Pramod",year:"2024"},{name:"Gas Level Monitoring System",members:"Sandhya, Sangita",year:"2024"},{name:"AI Mock Interview",members:"Sandhya, Sangita",year:"2024"},{name:"Drone For Delivery",members:"Abhijit, Asutosh, Suryakant",year:"2024"},{name:"Smart Restaurant Management System",members:"Anish, Sandhya, Sangita",year:"2024"}],gallery:[12,16,18,21,22,25,26,29,30,33].map(i=>`/images/TECHNOCRAT/techfest 2.0/IMG-20241120-WA00${i}.jpg`),galleryRest:[34,37,38,40,42,45,46,49,53,54,57,58,61,62].map(i=>`/images/TECHNOCRAT/techfest 2.0/IMG-20241120-WA00${i}.jpg`).concat([25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42].map(i=>`/images/TECHNOCRAT/techfest 2.0/img${i}.jpg`))},3:{version:"3.0",year:"2025",theme:"Viksit Bharat — Multi-Institution",color:"#f59e0b",colorDark:"#0c2340",img:"/CTC NEW REACT WEBSITE/images/TECHNOCRAT/TechFest3.0.jpg",about:["TechFest 3.0 is a vibrant celebration of innovation, creativity, and the spirit of Viksit Bharat. This edition brings a transformative platform where technology meets vision, empowering young minds to build solutions that contribute to a developed and progressive India.","Building on the success of TechFest 1.0 and 2.0—where only college students showcased their projects—TechFest 3.0 marks a historic moment as schools from outside the campus also participate, bringing their innovative projects and ideas to this grand stage.","This edition also features keynote sessions by industry experts, mentorship opportunities, and a dedicated arena for startup and research idea presentations. TechFest 3.0 is designed to inspire, challenge, and recognize emerging talent while fostering a culture of innovation that aligns with the vision of Viksit Bharat."],projects:[{name:"Emergency Fuel Delivery",members:"Aliva, Priyanka, Soumyaranjan, Sudhanshu",year:"2025"},{name:"Hostel Management System",members:"Aliva, Priyanka, Sudipta, Chinmayee, Ankita, Tulasi",year:"2025"},{name:"C & W Education Sponsorship Portal",members:"Yashita, Swastika, Pradyumna, Satyabrata",year:"2025"},{name:"Eco Re-Use",members:"Yashita, Swastika, Dattatreya, Om Prakash",year:"2025"},{name:"Line Up",members:"Abhisek, Rudraprasad, Ladly, Biswajit",year:"2025"},{name:"Skill Hub",members:"Krishna, Abhipsa, Trishna, Supriyanjali, Sasmita, Monalisha, Abhisek, Swastika, Priyadarshan, Arpita",year:"2025"},{name:"Food Waste Management System",members:"Saswat, Sudipta, Anshuman, Subhalaxmi",year:"2025"},{name:"Bus Tracking & Booking System",members:"Jasmin, Ratnaprava, Monalisha, Ananta, Priyanka, Priyani",year:"2025"},{name:"E-Jeevan Dan",members:"Bhagyalaxmi, Rimjhim, Selina, kajal, Bidusmita, Elin, Ipsita, Elina",year:"2025"},{name:"Smart Helmet",members:"Yash, Tanmay, Subham",year:"2025"}],gallery:Array.from({length:10},(i,o)=>`/images/TECHNOCRAT/techfest 3.0/${o+1}.jpg`),galleryRest:Array.from({length:37},(i,o)=>`/images/TECHNOCRAT/techfest 3.0/${o+11}.jpg`)}},qd=["normal","tall","wide","normal","normal","wide","tall","normal","normal","normal"];function vo({version:i}){const[o,c]=v.useState(null),[d,m]=v.useState(!1),f=Ig[i],u=[...f.gallery,...f.galleryRest].map((x,b)=>({src:x,size:qd[b%qd.length],alt:`TechFest ${i}.0 - Photo ${b+1}`})),h=d?u:u.slice(0,10),y=v.useCallback(x=>{o!==null&&(x.key==="ArrowRight"&&c(b=>(b+1)%h.length),x.key==="ArrowLeft"&&c(b=>(b-1+h.length)%h.length),x.key==="Escape"&&c(null))},[o,h.length]);v.useEffect(()=>(window.addEventListener("keydown",y),()=>window.removeEventListener("keydown",y)),[y]);const j=o!==null?h[o]:null;return e.jsxs("div",{className:"tf-page",children:[e.jsx("style",{children:`
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
      `}),e.jsx("section",{className:"tf-hero",children:e.jsxs("div",{className:"tf-hero-content",children:[e.jsxs("div",{className:"tf-hero-left",children:[e.jsxs("div",{className:"tf-hero-badge",children:[e.jsx("i",{className:"fa-solid fa-bolt"})," Official Technocrat Mega-Event"]}),e.jsxs("h1",{children:["TECH",e.jsx("em",{style:{color:f.color},children:"FEST"})," ",f.version]}),e.jsxs("div",{className:"tf-theme-box",children:["Theme: ",f.theme]}),e.jsx("p",{children:"Where code meets creativity. A grand stage for the next generation of engineers to present disruptive solutions and technological breakthroughs."})]}),e.jsx("div",{className:"tf-hero-right",children:e.jsx("div",{className:"tf-hero-stats",children:[{icon:"fa-calendar-check",label:"EVENT YEAR",val:f.year},{icon:"fa-microchip",label:"PROJECTS",val:f.projects.length},{icon:"fa-camera-retro",label:"GALLERY",val:u.length}].map((x,b)=>e.jsxs("div",{className:"tf-hero-stat-card",children:[e.jsx("i",{className:`fa-solid ${x.icon}`,style:{color:"#ffcc00",fontSize:"1.4rem"}}),e.jsxs("div",{children:[e.jsx("div",{style:{color:"rgba(255,255,255,0.4)",fontSize:"0.65rem",fontWeight:800,letterSpacing:1},children:x.label}),e.jsx("div",{style:{color:"#fff",fontSize:"1.2rem",fontWeight:900},children:x.val})]})]},b))})})]})}),e.jsx("div",{className:"tf-wave-sep",children:e.jsx("svg",{viewBox:"0 0 1440 70",preserveAspectRatio:"none",children:e.jsx("path",{d:"M0,40 C320,80 720,0 1080,50 C1260,75 1380,30 1440,20 L1440,70 L0,70Z"})})}),e.jsx("section",{className:"tf-about",children:e.jsxs("div",{className:"tf-about-inner",children:[e.jsxs("div",{className:"tf-about-left",children:[e.jsx("span",{className:"tf-section-pill",children:"The History"}),e.jsxs("h2",{children:["About ",e.jsxs("span",{style:{color:f.color},children:["TechFest ",f.version]})]}),f.about.map((x,b)=>e.jsx("p",{children:x},b))]}),e.jsx("div",{className:"tf-about-right",children:e.jsx("div",{className:"tf-about-img-container",children:e.jsx("img",{src:f.img,alt:"TechFest Highlights"})})})]})}),e.jsxs("section",{className:"tf-projects",children:[e.jsxs("div",{className:"tf-projects-header",children:[e.jsx("span",{className:"tf-pill",children:"The Arena"}),e.jsxs("h2",{children:["Innovations ",e.jsx("span",{children:"Showcased"})]}),e.jsx("p",{children:"Every single project submitted and presented during this edition."})]}),e.jsx("div",{className:"tf-table-container",children:e.jsxs("table",{className:"tf-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{width:"60px"},children:"#"}),e.jsx("th",{style:{width:"30%"},children:"Project Title"}),e.jsx("th",{children:"Team Members"}),e.jsx("th",{style:{width:"100px"},children:"Year"})]})}),e.jsx("tbody",{children:f.projects.map((x,b)=>e.jsxs("tr",{children:[e.jsx("td",{className:"tf-proj-id",children:String(b+1).padStart(2,"0")}),e.jsx("td",{className:"tf-proj-title",children:x.name}),e.jsx("td",{className:"tf-member-list",children:x.members}),e.jsx("td",{style:{fontWeight:800,color:f.color},children:x.year})]},b))})]})})]}),e.jsxs("section",{className:"tf-gallery-section",children:[e.jsxs("div",{className:"tf-heading",children:[e.jsx("span",{className:"tf-pill",style:{background:"rgba(255,204,0,0.1)",color:"#ffcc00",borderColor:"rgba(255,204,0,0.2)"},children:"Visual Log"}),e.jsxs("h2",{style:{color:"#fff"},children:["Event ",e.jsx("span",{children:"Highlights"})]}),e.jsx("p",{style:{color:"rgba(255,255,255,0.4)"},children:"Captured moments of brilliance and technical prowess."})]}),e.jsx("div",{className:"tf-grid",children:h.map((x,b)=>e.jsxs("div",{className:`tf-item tf-item-${x.size}`,onClick:()=>c(b),children:[e.jsx("img",{src:x.src,alt:x.alt,loading:"lazy"}),e.jsx("div",{className:"tf-overlay",children:e.jsx("i",{className:"fa-solid fa-expand"})})]},b))}),!d&&u.length>10&&e.jsxs("button",{className:"tf-see-all-btn",onClick:()=>m(!0),children:["Explore All ",u.length," Photos"]})]}),j&&e.jsxs("div",{className:"gl-lightbox",onClick:x=>x.target===x.currentTarget&&c(null),children:[e.jsx("button",{className:"gl-lb-close",onClick:()=>c(null),children:e.jsx("i",{className:"fa-solid fa-xmark"})}),e.jsx("button",{className:"gl-lb-nav gl-lb-prev",onClick:()=>c(x=>(x-1+h.length)%h.length),children:e.jsx("i",{className:"fa-solid fa-chevron-left"})}),e.jsxs("div",{className:"gl-lb-panel",children:[e.jsx("img",{className:"gl-lb-img",src:j.src,alt:j.alt}),e.jsxs("div",{className:"gl-lb-caption",children:[e.jsxs("div",{style:{color:"#ffcc00",fontWeight:900,fontSize:"1.2rem",letterSpacing:"1px"},children:["TECHFEST ",i,".0 ARCHIVE"]}),e.jsxs("div",{style:{color:"#fff",fontSize:"0.9rem",opacity:.6,marginTop:"5px"},children:["Shot ",o+1," of ",h.length]})]}),e.jsx("div",{className:"gl-lb-thumbs",children:h.map((x,b)=>e.jsx("div",{className:`gl-lb-thumb ${o===b?"active":""}`,onClick:()=>c(b),children:e.jsx("img",{src:x.src,alt:"thumb"})},b))})]}),e.jsx("button",{className:"gl-lb-nav gl-lb-next",onClick:()=>c(x=>(x+1)%h.length),children:e.jsx("i",{className:"fa-solid fa-chevron-right"})})]}),e.jsx("footer",{className:"tf-footer-nav",children:e.jsxs("div",{className:"tf-footer-nav-inner",children:[e.jsxs(ke,{to:"/gymkhana/technocrat",className:"tf-nav-link tf-nav-btn-secondary",children:[e.jsx("i",{className:"fa-solid fa-arrow-left-long"})," Back to Technocrat"]}),e.jsxs("div",{className:"tf-nav-group",children:[i>1&&e.jsxs(ke,{to:`/gymkhana/techfest/${i-1}`,className:"tf-nav-link tf-nav-btn-secondary",children:[e.jsx("i",{className:"fa-solid fa-chevron-left"})," Edition ",i-1,".0"]}),i<3&&e.jsxs(ke,{to:`/gymkhana/techfest/${i+1}`,className:"tf-nav-link tf-nav-btn-primary",children:["Explore Edition ",i+1,".0 ",e.jsx("i",{className:"fa-solid fa-arrow-right-long",style:{marginLeft:"5px"}})]})]})]})})]})}function Xd(){return e.jsx(vo,{version:1})}function Zd(){return e.jsx(vo,{version:2})}function ep(){return e.jsx(vo,{version:3})}function zg(){v.useEffect(()=>{const i=document.querySelectorAll(".rv,.rv-l,.rv-r"),o=new IntersectionObserver(c=>c.forEach(d=>{d.isIntersecting&&d.target.classList.add("visible")}),{threshold:.07});return i.forEach(c=>o.observe(c)),()=>o.disconnect()},[])}function wp({r:i="0,212,255"}){const o=v.useRef(null);return v.useEffect(()=>{const c=o.current;if(!c)return;const d=c.getContext("2d");let m;const f=()=>{c.width=c.offsetWidth,c.height=c.offsetHeight};f(),window.addEventListener("resize",f);const u=Array.from({length:48},()=>({x:Math.random()*c.width,y:Math.random()*c.height,r:Math.random()*1.8+.3,vx:(Math.random()-.5)*.32,vy:(Math.random()-.5)*.32,a:Math.random()*.4+.06})),h=()=>{d.clearRect(0,0,c.width,c.height),u.forEach(y=>{y.x+=y.vx,y.y+=y.vy,(y.x<0||y.x>c.width)&&(y.vx*=-1),(y.y<0||y.y>c.height)&&(y.vy*=-1),d.beginPath(),d.arc(y.x,y.y,y.r,0,Math.PI*2),d.fillStyle=`rgba(${i},${y.a})`,d.fill()}),u.forEach((y,j)=>u.slice(j+1).forEach(x=>{const b=Math.hypot(y.x-x.x,y.y-x.y);b<95&&(d.beginPath(),d.moveTo(y.x,y.y),d.lineTo(x.x,x.y),d.strokeStyle=`rgba(${i},${.055*(1-b/95)})`,d.lineWidth=.6,d.stroke())})),m=requestAnimationFrame(h)};return h(),()=>{cancelAnimationFrame(m),window.removeEventListener("resize",f)}},[i]),e.jsx("canvas",{ref:o,style:{position:"absolute",inset:0,width:"100%",height:"100%",pointerEvents:"none",zIndex:0}})}function Wg({onSuccess:i}){const[o,c]=v.useState(""),[d,m]=v.useState(""),[f,u]=v.useState(!1),[h,y]=v.useState(""),[j,x]=v.useState(!1),[b,P]=v.useState(!1);v.useEffect(()=>{setTimeout(()=>P(!0),50)},[]);const H=async R=>{if(R.preventDefault(),y(""),!o||!d){y("Please enter both username and password.");return}x(!0),await new Promise(M=>setTimeout(M,700)),x(!1),o==="login"&&d==="1010"?i():y("Invalid username or password. Please try again.")};return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
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
  `}),e.jsxs("div",{className:"naac-login-page",children:[e.jsx(wp,{r:"0,212,255"}),e.jsx("div",{className:"naac-login-dots"}),e.jsx("div",{className:"naac-login-blob",style:{width:480,height:480,background:"radial-gradient(circle,rgba(45,125,210,0.22) 0%,transparent 70%)",top:-160,right:-80,animation:"naacFloat 9s ease-in-out infinite"}}),e.jsx("div",{className:"naac-login-blob",style:{width:340,height:340,background:"radial-gradient(circle,rgba(245,197,24,0.07) 0%,transparent 70%)",bottom:-100,left:-60,animation:"naacFloat 11s ease-in-out infinite reverse"}}),e.jsxs("div",{className:`naac-split-card${b?" show":""}`,children:[e.jsxs("div",{className:"naac-left-panel",children:[e.jsx("img",{className:"naac-panel-logo",src:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/naac-removebg-preview.png",alt:"NAAC",onError:R=>{R.target.src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c0/NAAC_logo.png/200px-NAAC_logo.png"}}),e.jsx("div",{className:"naac-divider"}),e.jsxs("div",{className:"naac-panel-title",children:["National Assessment and",e.jsx("span",{children:"Accreditation Council"})]}),e.jsxs("div",{className:"naac-panel-badges",children:[e.jsx("span",{className:"naac-panel-badge",children:"NAAC"}),e.jsx("span",{className:"naac-panel-badge",children:"UGC Recognized"}),e.jsx("span",{className:"naac-panel-badge",children:"7 Criteria"})]})]}),e.jsxs("div",{className:"naac-right-panel",children:[e.jsx("p",{className:"naac-right-label",children:"Secure Access"}),e.jsxs("h1",{className:"naac-right-heading",children:["NAAC ",e.jsx("span",{children:"Portal"})]}),e.jsx("p",{className:"naac-right-sub",children:"Creative Techno College — Accreditation Dashboard"}),h&&e.jsxs("div",{className:"naac-error",children:[e.jsx("i",{className:"fa-solid fa-triangle-exclamation",style:{marginTop:2,flexShrink:0}}),e.jsx("span",{children:h})]}),e.jsxs("form",{onSubmit:H,noValidate:!0,children:[e.jsxs("label",{className:"naac-field-label",children:[e.jsx("i",{className:"fa-solid fa-user"})," Username"]}),e.jsxs("div",{className:"naac-input-wrap",children:[e.jsx("span",{className:"naac-input-icon",children:e.jsx("i",{className:"fa-solid fa-id-card"})}),e.jsx("input",{type:"text",value:o,onChange:R=>c(R.target.value),placeholder:"Enter username",autoComplete:"username",required:!0})]}),e.jsxs("label",{className:"naac-field-label",children:[e.jsx("i",{className:"fa-solid fa-lock"})," Password"]}),e.jsxs("div",{className:"naac-input-wrap",children:[e.jsx("span",{className:"naac-input-icon",children:e.jsx("i",{className:"fa-solid fa-key"})}),e.jsx("input",{type:f?"text":"password",value:d,onChange:R=>m(R.target.value),placeholder:"Enter password",autoComplete:"current-password",required:!0}),e.jsx("button",{type:"button",className:"naac-eye-btn",onClick:()=>u(R=>!R),children:e.jsx("i",{className:`fa-solid ${f?"fa-eye-slash":"fa-eye"}`})})]}),e.jsx("button",{type:"submit",className:"naac-submit-btn",disabled:j,children:j?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"naac-spinner"}),"Authenticating…"]}):e.jsxs(e.Fragment,{children:[e.jsx("i",{className:"fa-solid fa-right-to-bracket"}),"Access Dashboard"]})})]}),e.jsxs("div",{className:"naac-secure-note",children:[e.jsx("i",{className:"fa-solid fa-shield-check"}),"Protected portal — authorised personnel only"]})]})]})]})]})}const On=[{num:"I",roman:"01",title:"Curricular Aspects",icon:"fa-book-open",color:"#3b82f6",glow:"59,130,246",grad:"linear-gradient(135deg,#1e3a8a,#3b82f6)",score:2.78,maxScore:3.5,docs:12,status:"Submitted"},{num:"II",roman:"02",title:"Teaching-Learning & Evaluation",icon:"fa-chalkboard-user",color:"#10b981",glow:"16,185,129",grad:"linear-gradient(135deg,#064e3b,#10b981)",score:3.12,maxScore:3.5,docs:18,status:"Submitted"},{num:"III",roman:"03",title:"Research, Innovations & Extension",icon:"fa-flask-conical",color:"#8b5cf6",glow:"139,92,246",grad:"linear-gradient(135deg,#2e1065,#8b5cf6)",score:1.85,maxScore:3.5,docs:9,status:"Under Review"},{num:"IV",roman:"04",title:"Infrastructure & Learning Resources",icon:"fa-building-columns",color:"#ef4444",glow:"239,68,68",grad:"linear-gradient(135deg,#7f1d1d,#ef4444)",score:2.94,maxScore:3.5,docs:14,status:"Submitted"},{num:"V",roman:"05",title:"Student Support & Progression",icon:"fa-users",color:"#f59e0b",glow:"245,158,11",grad:"linear-gradient(135deg,#78350f,#f59e0b)",score:3.05,maxScore:3.5,docs:16,status:"Submitted"},{num:"VI",roman:"06",title:"Governance, Leadership & Management",icon:"fa-sitemap",color:"#06b6d4",glow:"6,182,212",grad:"linear-gradient(135deg,#164e63,#06b6d4)",score:2.88,maxScore:3.5,docs:11,status:"Submitted"},{num:"VII",roman:"07",title:"Institutional Values & Best Practices",icon:"fa-star",color:"#ec4899",glow:"236,72,153",grad:"linear-gradient(135deg,#831843,#ec4899)",score:2.5,maxScore:3.5,docs:8,status:"Submitted"}];function Mg({score:i,color:o,label:c,delay:d=0}){const[m,f]=v.useState(0),u=v.useRef(null);v.useEffect(()=>{const x=new IntersectionObserver(([b])=>{if(!b.isIntersecting)return;const P=performance.now(),H=1600,Y=R=>{const M=Math.min((R-P)/H,1),T=1-Math.pow(1-M,3);f(i*T),M<1&&requestAnimationFrame(Y)};requestAnimationFrame(Y)},{threshold:.4});return u.current&&x.observe(u.current),()=>x.disconnect()},[i]);const h=38,y=2*Math.PI*h,j=y*(1-m/4);return e.jsxs("div",{ref:u,style:{display:"flex",flexDirection:"column",alignItems:"center",gap:8},children:[e.jsxs("div",{style:{position:"relative",width:96,height:96},children:[e.jsxs("svg",{width:96,height:96,viewBox:"0 0 96 96",style:{transform:"rotate(-90deg)"},children:[e.jsx("circle",{cx:48,cy:48,r:h,fill:"none",stroke:"rgba(255,255,255,0.06)",strokeWidth:7}),e.jsx("circle",{cx:48,cy:48,r:h,fill:"none",stroke:o,strokeWidth:7,strokeDasharray:y,strokeDashoffset:j,strokeLinecap:"round",style:{filter:`drop-shadow(0 0 6px ${o}80)`}})]}),e.jsxs("div",{style:{position:"absolute",inset:0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[e.jsx("span",{style:{fontFamily:"'Outfit',sans-serif",fontWeight:900,fontSize:"1.1rem",color:"#fff",lineHeight:1},children:m.toFixed(2)}),e.jsx("span",{style:{fontFamily:"'Outfit',sans-serif",fontSize:"0.55rem",fontWeight:600,color:"rgba(255,255,255,0.35)"},children:"/4.00"})]})]}),e.jsx("span",{style:{fontFamily:"'Outfit',sans-serif",fontSize:"0.62rem",fontWeight:700,color:"rgba(255,255,255,0.4)",textTransform:"uppercase",letterSpacing:"0.6px",textAlign:"center",maxWidth:90,lineHeight:1.4},children:c})]})}function Og({c:i,i:o}){const[c,d]=v.useState(!1),m=i.score/4*100,f=i.status==="Submitted"?"#10b981":"#f59e0b";return e.jsxs("a",{href:`#crit-${o+1}`,className:"rv",style:{display:"block",textDecoration:"none",background:"#fff",borderRadius:22,overflow:"hidden",border:"1px solid rgba(10,22,40,0.07)",boxShadow:c?`0 20px 56px rgba(${i.glow},0.18)`:"0 4px 20px rgba(10,22,40,0.07)",transform:c?"translateY(-10px) scale(1.01)":"none",transition:"all 0.32s cubic-bezier(0.4,0,0.2,1)",animationDelay:`${o*.07}s`},onMouseEnter:()=>d(!0),onMouseLeave:()=>d(!1),children:[e.jsxs("div",{style:{background:i.grad,padding:"26px 22px 20px",position:"relative",overflow:"hidden"},children:[e.jsx("div",{style:{position:"absolute",right:-4,top:-14,fontFamily:"'Outfit',sans-serif",fontWeight:900,fontSize:"6rem",color:"rgba(255,255,255,0.07)",lineHeight:1,userSelect:"none",transform:c?"scale(1.1) translateX(-6px)":"scale(1)",transition:"transform 0.4s ease"},children:i.roman}),e.jsx("div",{style:{width:50,height:50,borderRadius:14,background:"rgba(255,255,255,0.15)",backdropFilter:"blur(8px)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.2rem",color:"#fff",marginBottom:14,transform:c?"scale(1.12) rotate(-6deg)":"none",transition:"transform 0.3s ease",position:"relative",zIndex:1},children:e.jsx("i",{className:`fa-solid ${i.icon}`})}),e.jsxs("div",{style:{fontFamily:"'Outfit',sans-serif",fontWeight:800,fontSize:"0.98rem",color:"#fff",lineHeight:1.35,marginBottom:16,position:"relative",zIndex:1},children:["Criterion ",i.num,": ",i.title]}),e.jsxs("div",{style:{position:"relative",zIndex:1},children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:5},children:[e.jsx("span",{style:{fontFamily:"'Outfit',sans-serif",fontSize:"0.65rem",fontWeight:700,color:"rgba(255,255,255,0.5)",textTransform:"uppercase",letterSpacing:.5},children:"Score"}),e.jsxs("span",{style:{fontFamily:"'Outfit',sans-serif",fontSize:"0.8rem",fontWeight:800,color:"#fff"},children:[i.score," / 4.00"]})]}),e.jsx("div",{style:{height:5,background:"rgba(255,255,255,0.12)",borderRadius:3,overflow:"hidden"},children:e.jsx("div",{style:{height:"100%",background:"rgba(255,255,255,0.85)",borderRadius:3,width:`${m}%`}})})]})]}),e.jsxs("div",{style:{padding:"14px 22px",display:"flex",alignItems:"center",justifyContent:"space-between",borderTop:"1px solid rgba(10,22,40,0.06)"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[e.jsx("div",{style:{width:8,height:8,borderRadius:"50%",background:f,boxShadow:`0 0 8px ${f}80`}}),e.jsx("span",{style:{fontFamily:"'Outfit',sans-serif",fontSize:"0.72rem",fontWeight:700,color:"#4a6080"},children:i.status}),e.jsx("span",{style:{fontFamily:"'Outfit',sans-serif",fontSize:"0.7rem",color:"#94a3b8"},children:"·"}),e.jsxs("span",{style:{fontFamily:"'Outfit',sans-serif",fontSize:"0.72rem",color:"#94a3b8",fontWeight:600},children:[i.docs," docs"]})]}),e.jsx("div",{style:{width:32,height:32,borderRadius:"50%",background:i.grad,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"0.7rem",color:"#fff",transform:c?"translateX(6px)":"none",transition:"transform 0.25s ease",boxShadow:c?`0 4px 14px rgba(${i.glow},0.5)`:"none"},children:e.jsx("i",{className:"fa-solid fa-arrow-right"})})]})]})}function Lg({onLogout:i}){zg();const o=(On.reduce((f,u)=>f+u.score,0)/On.length).toFixed(2),c=`
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
  `,d=[{val:"7",lbl:"Criteria Covered",icon:"fa-layer-group",col:"linear-gradient(135deg,#1e3a8a,#3b82f6)"},{val:o,lbl:"Avg. CGPA",icon:"fa-chart-line",col:"linear-gradient(135deg,#064e3b,#10b981)"},{val:"88+",lbl:"Documents Filed",icon:"fa-file-shield",col:"linear-gradient(135deg,#2e1065,#8b5cf6)"},{val:"A",lbl:"Target Grade",icon:"fa-medal",col:"linear-gradient(135deg,#78350f,#f59e0b)"}],m=[{title:"Executive Summary",meta:"SSR Part A · 12 pages",col:"linear-gradient(135deg,#1e3a8a,#3b82f6)",status:"Approved",statusCol:"#10b981"},...On.map((f,u)=>({title:`Criterion ${f.num} — ${f.title}`,meta:`${f.docs} documents · Score ${f.score}/4.00`,col:f.grad,status:f.status,statusCol:f.status==="Submitted"?"#10b981":"#f59e0b"})),{title:"Evaluative Report",meta:"SSR Part C · Departmental",col:"linear-gradient(135deg,#164e63,#06b6d4)",status:"Submitted",statusCol:"#10b981"}];return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:c}),e.jsxs("div",{className:"nd-page",children:[e.jsxs("div",{className:"nd-hero",children:[e.jsx("div",{className:"nd-hero-bg-grid"}),e.jsx("div",{className:"nd-hero-scan"}),e.jsx("div",{className:"nd-hero-glow1"}),e.jsx("div",{className:"nd-hero-glow2"}),e.jsx(wp,{r:"0,212,255"}),e.jsxs("button",{className:"nd-logout",onClick:i,children:[e.jsx("i",{className:"fa-solid fa-right-from-bracket"}),"Logout"]}),e.jsxs("div",{className:"nd-hero-content",children:[e.jsxs("div",{className:"nd-hero-badge",children:[e.jsx("i",{className:"fa-solid fa-shield-halved"}),"NAAC Accreditation 2024–25"]}),e.jsxs("h1",{className:"nd-hero-h1",children:["National Assessment",e.jsx("br",{}),"& ",e.jsx("em",{children:"Accreditation"})]}),e.jsx("p",{className:"nd-hero-p",children:"Creative Techno College, Angul, Odisha — Self Study Report comprising all 7 criteria, evidence documents and institutional data for NAAC Grade A certification."}),e.jsx("div",{className:"nd-hero-tags",children:["UGC Recognized","AICTE Approved","Utkal University","Est. 2010","ISO Certified"].map((f,u)=>e.jsxs("span",{className:"nd-hero-tag",children:[e.jsx("i",{className:"fa-solid fa-circle-check",style:{color:"#00d4ff",fontSize:"0.65rem"}}),f]},u))})]})]}),e.jsx("div",{className:"nd-wave",children:e.jsx("svg",{viewBox:"0 0 1440 60",preserveAspectRatio:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M0,40 C360,60 1080,0 1440,40 L1440,60 L0,60 Z",fill:"#f0f4f8"})})}),e.jsx("div",{className:"nd-stats-band",children:d.map((f,u)=>e.jsxs("div",{className:"nd-stat-card rv",style:{animationDelay:`${u*.08}s`},children:[e.jsx("div",{className:"nd-stat-ico",style:{background:f.col},children:e.jsx("i",{className:`fa-solid ${f.icon}`})}),e.jsxs("div",{children:[e.jsx("div",{className:"nd-stat-num",children:f.val}),e.jsx("div",{className:"nd-stat-lbl",children:f.lbl})]})]},u))}),e.jsxs("section",{className:"nd-rings-sec",children:[e.jsxs("div",{style:{maxWidth:1100,margin:"0 auto",textAlign:"center"},children:[e.jsx("span",{className:"section-label",style:{color:"rgba(0,212,255,0.7)"},children:"Performance Overview"}),e.jsxs("h2",{className:"section-title",style:{color:"#fff"},children:["Criteria-wise ",e.jsx("span",{style:{color:"#f5c518"},children:"Scores"})]})]}),e.jsx("div",{className:"nd-rings-grid",children:On.map((f,u)=>e.jsx("div",{className:"rv",style:{transitionDelay:`${u*.07}s`},children:e.jsx(Mg,{score:f.score,color:f.color,label:`Criterion ${f.num}`})},u))}),e.jsxs("div",{className:"nd-cgpa-box rv",style:{transitionDelay:"0.5s"},children:[e.jsx("div",{style:{fontFamily:"'Outfit',sans-serif",fontSize:"0.68rem",fontWeight:800,color:"rgba(255,255,255,0.35)",textTransform:"uppercase",letterSpacing:2.5,marginBottom:8},children:"Overall CGPA"}),e.jsx("div",{className:"nd-cgpa-val",children:o}),e.jsx("div",{style:{fontFamily:"'Outfit',sans-serif",fontSize:"0.78rem",color:"rgba(255,255,255,0.3)",marginTop:10},children:"Out of 4.00 — Target: Grade A"}),e.jsx("div",{style:{marginTop:16,display:"flex",justifyContent:"center",gap:16},children:["C","B","B+","A","A+"].map((f,u)=>{const h=[1.51,2.01,2.51,3.01,3.51],y=parseFloat(o)>=h[u];return e.jsx("div",{style:{textAlign:"center"},children:e.jsx("div",{style:{width:36,height:36,borderRadius:10,background:y?f==="A"?"linear-gradient(135deg,#f5c518,#f59e0b)":"rgba(255,255,255,0.12)":"rgba(255,255,255,0.04)",border:`2px solid ${y?f==="A"?"#f5c518":"rgba(255,255,255,0.2)":"rgba(255,255,255,0.07)"}`,display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"'Outfit',sans-serif",fontWeight:900,fontSize:"0.9rem",color:y?"#fff":"rgba(255,255,255,0.15)"},children:f})},u)})})]})]}),e.jsxs("section",{className:"nd-crit-sec",children:[e.jsxs("div",{style:{maxWidth:1240,margin:"0 auto",textAlign:"center"},children:[e.jsx("span",{className:"section-label",children:"Documentation"}),e.jsxs("h2",{className:"section-title",children:["Select a ",e.jsx("span",{children:"Criterion"})]}),e.jsx("p",{className:"section-subtitle",style:{margin:"0 auto"},children:"Click any criterion to access its complete SSR documentation, supporting data and evidence files."})]}),e.jsx("div",{className:"nd-crit-grid",children:On.map((f,u)=>e.jsx(Og,{c:f,i:u},u))})]}),e.jsxs("section",{className:"nd-ssr-sec",children:[e.jsxs("div",{style:{maxWidth:900,margin:"0 auto",textAlign:"center"},children:[e.jsx("span",{className:"section-label",children:"Self Study Report"}),e.jsxs("h2",{className:"section-title",children:["Document ",e.jsx("span",{children:"Timeline"})]}),e.jsx("p",{className:"section-subtitle",style:{margin:"0 auto"},children:"Complete SSR document trail — all submissions and their current status."})]}),e.jsx("div",{className:"nd-timeline",children:m.map((f,u)=>e.jsxs("div",{className:"nd-tl-item rv",style:{transitionDelay:`${u*.05}s`},children:[e.jsx("div",{className:"nd-tl-dot",style:{background:f.col},children:e.jsx("i",{className:"fa-solid fa-file-lines"})}),e.jsxs("div",{className:"nd-tl-body",children:[e.jsxs("div",{children:[e.jsx("div",{className:"nd-tl-title",children:f.title}),e.jsx("div",{className:"nd-tl-meta",children:f.meta})]}),e.jsxs("div",{className:"nd-tl-badge",style:{background:`${f.statusCol}18`,border:`1.5px solid ${f.statusCol}40`,color:f.statusCol},children:[e.jsx("i",{className:"fa-solid fa-circle-check"}),f.status]})]})]},u))})]}),e.jsx("div",{className:"nd-grade-banner",children:e.jsxs("div",{style:{maxWidth:700,margin:"0 auto"},children:[e.jsx("div",{style:{fontFamily:"'Outfit',sans-serif",fontSize:"0.7rem",fontWeight:800,color:"rgba(245,197,24,0.7)",letterSpacing:3,textTransform:"uppercase",marginBottom:12},children:"Our Goal"}),e.jsxs("h2",{style:{fontFamily:"'Outfit',sans-serif",fontWeight:900,fontSize:"clamp(2rem,4vw,3rem)",color:"#fff",letterSpacing:-1.5,marginBottom:14,lineHeight:1.1},children:["Targeting ",e.jsx("span",{style:{color:"#f5c518"},children:"NAAC Grade A"}),e.jsx("br",{}),"for Creative Techno College"]}),e.jsx("p",{style:{color:"rgba(255,255,255,0.4)",fontSize:"0.9rem",lineHeight:1.75},children:"Committed to academic excellence, institutional growth and quality assurance across all 7 criteria of the NAAC Self Study Report framework."})]})})]})]})}function Dg(){const[i,o]=v.useState(!1);return i?e.jsx(Lg,{onLogout:()=>o(!1)}):e.jsx(Wg,{onSuccess:()=>o(!0)})}function Fg(){v.useEffect(()=>{const i=document.querySelectorAll(".rv,.rv-l,.rv-r"),o=new IntersectionObserver(c=>c.forEach(d=>{d.isIntersecting&&d.target.classList.add("visible")}),{threshold:.07});return i.forEach(c=>o.observe(c)),()=>o.disconnect()},[])}function Sp({r:i="0,212,255"}){const o=v.useRef(null);return v.useEffect(()=>{const c=o.current;if(!c)return;const d=c.getContext("2d");let m;const f=()=>{c.width=c.offsetWidth,c.height=c.offsetHeight};f(),window.addEventListener("resize",f);const u=Array.from({length:44},()=>({x:Math.random()*c.width,y:Math.random()*c.height,r:Math.random()*1.8+.3,vx:(Math.random()-.5)*.28,vy:(Math.random()-.5)*.28,a:Math.random()*.35+.06})),h=()=>{d.clearRect(0,0,c.width,c.height),u.forEach(y=>{y.x+=y.vx,y.y+=y.vy,(y.x<0||y.x>c.width)&&(y.vx*=-1),(y.y<0||y.y>c.height)&&(y.vy*=-1),d.beginPath(),d.arc(y.x,y.y,y.r,0,Math.PI*2),d.fillStyle=`rgba(${i},${y.a})`,d.fill()}),u.forEach((y,j)=>u.slice(j+1).forEach(x=>{const b=Math.hypot(y.x-x.x,y.y-x.y);b<90&&(d.beginPath(),d.moveTo(y.x,y.y),d.lineTo(x.x,x.y),d.strokeStyle=`rgba(${i},${.05*(1-b/90)})`,d.lineWidth=.5,d.stroke())})),m=requestAnimationFrame(h)};return h(),()=>{cancelAnimationFrame(m),window.removeEventListener("resize",f)}},[i]),e.jsx("canvas",{ref:o,style:{position:"absolute",inset:0,width:"100%",height:"100%",pointerEvents:"none",zIndex:0}})}function Hg({onSuccess:i}){const[o,c]=v.useState(""),[d,m]=v.useState(""),[f,u]=v.useState(!1),[h,y]=v.useState(""),[j,x]=v.useState(!1),[b,P]=v.useState(!1);v.useEffect(()=>{setTimeout(()=>P(!0),50)},[]);const H=async R=>{if(R.preventDefault(),y(""),!o||!d){y("Please enter both username and password.");return}x(!0),await new Promise(M=>setTimeout(M,700)),x(!1),o==="login"&&d==="1010"?i():y("Invalid username or password. Please try again.")};return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
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
  `}),e.jsxs("div",{className:"nba-login-page",children:[e.jsx(Sp,{r:"0,212,255"}),e.jsx("div",{className:"nba-login-dots"}),e.jsx("div",{className:"nba-login-blob",style:{width:500,height:500,background:"radial-gradient(circle,rgba(45,125,210,0.22) 0%,transparent 70%)",top:-160,right:-80,animation:"nbaFloat 9s ease-in-out infinite"}}),e.jsx("div",{className:"nba-login-blob",style:{width:340,height:340,background:"radial-gradient(circle,rgba(0,212,255,0.07) 0%,transparent 70%)",bottom:-100,left:-60,animation:"nbaFloat 11s ease-in-out infinite reverse"}}),e.jsxs("div",{className:`nba-split-card${b?" show":""}`,children:[e.jsxs("div",{className:"nba-left-panel",children:[e.jsx("img",{className:"nba-panel-logo",src:"/CTC NEW REACT WEBSITE/images/HOMEPAGE/NBA-removebg-preview.png",alt:"NBA",onError:R=>{R.target.parentElement.innerHTML='<span style="font-size:5rem">🏅</span>'}}),e.jsx("div",{className:"nba-panel-divider"}),e.jsxs("div",{className:"nba-panel-title",children:["National Board of",e.jsx("span",{children:"Accreditation"})]}),e.jsxs("div",{className:"nba-panel-badges",children:[e.jsx("span",{className:"nba-panel-badge",children:"NBA"}),e.jsx("span",{className:"nba-panel-badge",children:"AICTE Linked"}),e.jsx("span",{className:"nba-panel-badge",children:"OBE Framework"})]})]}),e.jsxs("div",{className:"nba-right-panel",children:[e.jsx("p",{className:"nba-right-label",children:"Secure Access"}),e.jsxs("h1",{className:"nba-right-heading",children:["NBA ",e.jsx("span",{children:"Portal"})]}),e.jsx("p",{className:"nba-right-sub",children:"Creative Techno College — Accreditation Dashboard"}),h&&e.jsxs("div",{className:"nba-error",children:[e.jsx("i",{className:"fa-solid fa-triangle-exclamation",style:{marginTop:2,flexShrink:0}}),e.jsx("span",{children:h})]}),e.jsxs("form",{onSubmit:H,noValidate:!0,children:[e.jsxs("label",{className:"nba-field-label",children:[e.jsx("i",{className:"fa-solid fa-user"}),"Username"]}),e.jsxs("div",{className:"nba-input-wrap",children:[e.jsx("span",{className:"nba-input-icon",children:e.jsx("i",{className:"fa-solid fa-id-card"})}),e.jsx("input",{type:"text",value:o,onChange:R=>c(R.target.value),placeholder:"Enter username",autoComplete:"username",required:!0})]}),e.jsxs("label",{className:"nba-field-label",children:[e.jsx("i",{className:"fa-solid fa-lock"}),"Password"]}),e.jsxs("div",{className:"nba-input-wrap",children:[e.jsx("span",{className:"nba-input-icon",children:e.jsx("i",{className:"fa-solid fa-key"})}),e.jsx("input",{type:f?"text":"password",value:d,onChange:R=>m(R.target.value),placeholder:"Enter password",autoComplete:"current-password",required:!0}),e.jsx("button",{type:"button",className:"nba-eye-btn",onClick:()=>u(R=>!R),children:e.jsx("i",{className:`fa-solid ${f?"fa-eye-slash":"fa-eye"}`})})]}),e.jsx("button",{type:"submit",className:"nba-submit-btn",disabled:j,children:j?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"nba-spinner"}),"Authenticating…"]}):e.jsxs(e.Fragment,{children:[e.jsx("i",{className:"fa-solid fa-right-to-bracket"}),"Access Dashboard"]})})]}),e.jsxs("div",{className:"nba-secure-note",children:[e.jsx("i",{className:"fa-solid fa-shield-check"}),"Protected portal — authorised personnel only"]})]})]})]})]})}const _g=[{num:"1",title:"Vision, Mission & Programme Educational Objectives",icon:"fa-bullseye",color:"#f59e0b",glow:"245,158,11",grad:"linear-gradient(135deg,#78350f,#f59e0b)",docs:8},{num:"2",title:"Programme Curriculum & Teaching-Learning Processes",icon:"fa-book-open",color:"#3b82f6",glow:"59,130,246",grad:"linear-gradient(135deg,#1e3a8a,#3b82f6)",docs:14},{num:"3",title:"Course Outcomes & Programme Outcomes",icon:"fa-chart-line",color:"#10b981",glow:"16,185,129",grad:"linear-gradient(135deg,#064e3b,#10b981)",docs:12},{num:"4",title:"Students' Performance",icon:"fa-user-graduate",color:"#8b5cf6",glow:"139,92,246",grad:"linear-gradient(135deg,#2e1065,#8b5cf6)",docs:10},{num:"5",title:"Faculty Information & Contributions",icon:"fa-chalkboard-user",color:"#06b6d4",glow:"6,182,212",grad:"linear-gradient(135deg,#164e63,#06b6d4)",docs:16},{num:"6",title:"Facilities & Technical Support",icon:"fa-building",color:"#ef4444",glow:"239,68,68",grad:"linear-gradient(135deg,#7f1d1d,#ef4444)",docs:9},{num:"7",title:"Continuous Improvement",icon:"fa-arrows-rotate",color:"#ec4899",glow:"236,72,153",grad:"linear-gradient(135deg,#831843,#ec4899)",docs:7}],ap=[{abbr:"PEO",full:"Programme Educational Objectives",icon:"fa-bullseye",desc:"Broad statements describing career and professional accomplishments graduates are expected to achieve within a few years after graduation.",color:"#3b82f6"},{abbr:"PO",full:"Programme Outcomes",icon:"fa-graduation-cap",desc:"Attributes and skills that students should possess at the time of graduation — knowledge, skills and attitudes.",color:"#00d4ff"},{abbr:"PSO",full:"Programme Specific Outcomes",icon:"fa-star",desc:"Domain-specific competencies expected of graduates of a particular programme, beyond the standard POs.",color:"#2d7dd2"},{abbr:"CO",full:"Course Outcomes",icon:"fa-book",desc:"Specific competencies students will demonstrate upon successful completion of each individual course.",color:"#1a4a8a"}];function Ug({prog:i}){const[o,c]=v.useState(!1);return e.jsxs("div",{onMouseEnter:()=>c(!0),onMouseLeave:()=>c(!1),style:{background:"#fff",borderRadius:18,padding:"20px 22px",border:"1px solid rgba(10,22,40,0.07)",boxShadow:o?"0 12px 36px rgba(10,22,40,0.13)":"0 2px 12px rgba(10,22,40,0.06)",transform:o?"translateY(-5px)":"none",transition:"all 0.28s ease",cursor:"default"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:12},children:[e.jsx("div",{style:{fontFamily:"'Outfit',sans-serif",fontWeight:800,fontSize:"0.95rem",color:"#0a1628"},children:i.name}),e.jsx("div",{style:{background:`${i.color}18`,border:`1.5px solid ${i.color}40`,color:i.color,fontFamily:"'Outfit',sans-serif",fontSize:"0.65rem",fontWeight:800,padding:"3px 10px",borderRadius:20,letterSpacing:.5},children:i.badge})]}),e.jsx("div",{style:{fontFamily:"'Outfit',sans-serif",fontSize:"0.75rem",color:"#4a6080",marginBottom:14,fontWeight:500},children:i.dept}),i.metrics.map((d,m)=>e.jsxs("div",{style:{marginBottom:m<i.metrics.length-1?10:0},children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:4},children:[e.jsx("span",{style:{fontFamily:"'Outfit',sans-serif",fontSize:"0.7rem",fontWeight:700,color:"#4a6080"},children:d.label}),e.jsx("span",{style:{fontFamily:"'Outfit',sans-serif",fontSize:"0.7rem",fontWeight:800,color:i.color},children:d.val})]}),e.jsx("div",{style:{height:5,background:`${i.color}18`,borderRadius:3,overflow:"hidden"},children:e.jsx("div",{style:{height:"100%",background:i.color,borderRadius:3,width:o?`${d.pct}%`:"0%",transition:`width ${.8+m*.15}s cubic-bezier(0.4,0,0.2,1)`}})})]},m))]})}function $g({onLogout:i}){Fg();const o=`
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
  `,c=[{val:"7",lbl:"Criteria",icon:"fa-layer-group",col:"linear-gradient(135deg,#1e3a8a,#3b82f6)"},{val:"4",lbl:"Programs",icon:"fa-graduation-cap",col:"linear-gradient(135deg,#164e63,#06b6d4)"},{val:"OBE",lbl:"Framework",icon:"fa-arrows-spin",col:"linear-gradient(135deg,#064e3b,#10b981)"},{val:"NBA",lbl:"Accreditation",icon:"fa-medal",col:"linear-gradient(135deg,#2e1065,#8b5cf6)"},{val:"A+",lbl:"Target",icon:"fa-star",col:"linear-gradient(135deg,#0c1f3d,#2d7dd2)"}],d=[{name:"B.Tech CSE",dept:"Computer Science & Engineering",badge:"Accredited",color:"#3b82f6",metrics:[{label:"PO Attainment",val:"78%",pct:78},{label:"CO Attainment",val:"83%",pct:83},{label:"Pass Rate",val:"91%",pct:91}]},{name:"B.Tech ECE",dept:"Electronics & Communication Engg.",badge:"Accredited",color:"#10b981",metrics:[{label:"PO Attainment",val:"74%",pct:74},{label:"CO Attainment",val:"79%",pct:79},{label:"Pass Rate",val:"88%",pct:88}]},{name:"B.Tech MECH",dept:"Mechanical Engineering",badge:"Applied",color:"#06b6d4",metrics:[{label:"PO Attainment",val:"71%",pct:71},{label:"CO Attainment",val:"76%",pct:76},{label:"Pass Rate",val:"85%",pct:85}]},{name:"B.Tech CIVIL",dept:"Civil Engineering",badge:"Applied",color:"#8b5cf6",metrics:[{label:"PO Attainment",val:"69%",pct:69},{label:"CO Attainment",val:"74%",pct:74},{label:"Pass Rate",val:"87%",pct:87}]}];return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:o}),e.jsxs("div",{className:"nb-page",children:[e.jsxs("div",{className:"nb-hero",children:[e.jsx("div",{className:"nb-hero-grid"}),e.jsx("div",{className:"nb-hero-scan"}),e.jsx("div",{className:"nb-hero-glow1"}),e.jsx("div",{className:"nb-hero-glow2"}),e.jsx(Sp,{r:"0,212,255"}),e.jsxs("button",{className:"nb-logout",onClick:i,children:[e.jsx("i",{className:"fa-solid fa-right-from-bracket"}),"Logout"]}),e.jsxs("div",{className:"nb-hero-content",children:[e.jsxs("div",{className:"nb-hero-badge",children:[e.jsx("i",{className:"fa-solid fa-medal"}),"NBA Accreditation Portal"]}),e.jsxs("h1",{className:"nb-hero-h1",children:["National Board",e.jsx("br",{}),"of ",e.jsx("em",{children:"Accreditation"})]}),e.jsx("p",{className:"nb-hero-p",children:"Creative Techno College, Angul — Outcome-Based Education framework documentation, programme accreditation data and evidence for all 7 NBA criteria."}),e.jsx("div",{className:"nb-hero-tags",children:["AICTE Linked","OBE Framework","4 Programs","Utkal University","BPUT Affiliated"].map((m,f)=>e.jsxs("span",{className:"nb-hero-tag",children:[e.jsx("i",{className:"fa-solid fa-circle-check",style:{color:"#00d4ff",fontSize:"0.65rem"}}),m]},f))})]})]}),e.jsx("div",{className:"nb-wave",children:e.jsx("svg",{viewBox:"0 0 1440 60",preserveAspectRatio:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M0,40 C360,60 1080,0 1440,40 L1440,60 L0,60 Z",fill:"#f0f4f8"})})}),e.jsx("div",{className:"nb-stats-band",children:c.map((m,f)=>e.jsxs("div",{className:"nb-stat rv",style:{transitionDelay:`${f*.07}s`},children:[e.jsx("div",{className:"nb-stat-ico",style:{background:m.col},children:e.jsx("i",{className:`fa-solid ${m.icon}`})}),e.jsx("div",{className:"nb-stat-val",children:m.val}),e.jsx("div",{className:"nb-stat-lbl",children:m.lbl})]},f))}),e.jsxs("section",{className:"nb-obe-sec",children:[e.jsxs("div",{style:{maxWidth:1100,margin:"0 auto",textAlign:"center"},children:[e.jsx("span",{className:"section-label",style:{color:"rgba(0,212,255,0.7)"},children:"Framework"}),e.jsxs("h2",{className:"section-title",style:{color:"#fff"},children:["Outcome-Based ",e.jsx("span",{style:{color:"#00d4ff"},children:"Education"})]}),e.jsx("p",{className:"section-subtitle",style:{color:"rgba(255,255,255,0.4)",margin:"0 auto"},children:"The OBE chain ensures every course, programme and institutional goal is mapped to measurable outcomes."})]}),e.jsx("div",{className:"nb-obe-chain",children:ap.map((m,f)=>e.jsxs("div",{className:"nb-obe-node rv",style:{transitionDelay:`${f*.1}s`},children:[f<ap.length-1&&e.jsx("div",{className:"nb-obe-arrow",children:e.jsx("i",{className:"fa-solid fa-arrow-right"})}),e.jsxs("div",{className:"nb-obe-dot",style:{background:`linear-gradient(135deg,${m.color}cc,${m.color})`,boxShadow:`0 8px 32px ${m.color}50`},children:[e.jsx("div",{className:"nb-obe-abbr",children:m.abbr}),e.jsx("i",{className:`fa-solid ${m.icon} nb-obe-dot-icon`})]}),e.jsx("div",{className:"nb-obe-full",children:m.full}),e.jsx("div",{className:"nb-obe-desc",children:m.desc})]},f))})]}),e.jsxs("section",{className:"nb-crit-sec",children:[e.jsxs("div",{style:{maxWidth:1240,margin:"0 auto",textAlign:"center"},children:[e.jsx("span",{className:"section-label",children:"Documentation"}),e.jsxs("h2",{className:"section-title",children:["Select a ",e.jsx("span",{children:"Criterion"})]}),e.jsx("p",{className:"section-subtitle",style:{margin:"0 auto"},children:"Access complete documentation and evidence for each of the 7 NBA criteria."})]}),e.jsx("div",{className:"nb-crit-grid",children:_g.map((m,f)=>e.jsxs("a",{href:`#crit-${f+1}`,className:"nb-crit-card rv",style:{transitionDelay:`${f*.07}s`,textDecoration:"none"},children:[e.jsxs("div",{className:"nb-crit-top",style:{background:m.grad},children:[e.jsx("div",{className:"nb-crit-wm",children:m.num.padStart(2,"0")}),e.jsx("div",{style:{width:50,height:50,borderRadius:14,background:"rgba(255,255,255,0.16)",backdropFilter:"blur(8px)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.2rem",color:"#fff",marginBottom:14,position:"relative",zIndex:1},children:e.jsx("i",{className:`fa-solid ${m.icon}`})}),e.jsxs("div",{className:"nb-crit-title",children:["Criterion ",m.num,": ",m.title]})]}),e.jsxs("div",{className:"nb-crit-footer",children:[e.jsxs("div",{className:"nb-crit-docs",children:[e.jsx("i",{className:"fa-solid fa-file-lines",style:{color:m.color}}),m.docs," documents"]}),e.jsx("div",{className:"nb-crit-arrow",style:{background:m.grad,boxShadow:`0 4px 12px rgba(${m.glow},0.35)`},children:e.jsx("i",{className:"fa-solid fa-arrow-right"})})]})]},f))})]}),e.jsxs("section",{className:"nb-prog-sec",children:[e.jsxs("div",{style:{maxWidth:1200,margin:"0 auto",textAlign:"center"},children:[e.jsx("span",{className:"section-label",children:"OBE Attainment"}),e.jsxs("h2",{className:"section-title",children:["Programme ",e.jsx("span",{children:"Performance"})]}),e.jsx("p",{className:"section-subtitle",style:{margin:"0 auto"},children:"PO, CO and overall pass rate attainment across all accredited programmes."})]}),e.jsx("div",{className:"nb-prog-grid",children:d.map((m,f)=>e.jsx("div",{className:"rv",style:{transitionDelay:`${f*.08}s`},children:e.jsx(Ug,{prog:m})},f))})]}),e.jsx("div",{className:"nb-banner",children:e.jsxs("div",{style:{maxWidth:700,margin:"0 auto"},children:[e.jsx("div",{style:{fontFamily:"'Outfit',sans-serif",fontSize:"0.7rem",fontWeight:800,color:"rgba(0,212,255,0.7)",letterSpacing:3,textTransform:"uppercase",marginBottom:12},children:"Our Goal"}),e.jsxs("h2",{style:{fontFamily:"'Outfit',sans-serif",fontWeight:900,fontSize:"clamp(2rem,4vw,3rem)",color:"#fff",letterSpacing:-1.5,marginBottom:14,lineHeight:1.1},children:["Achieving ",e.jsx("span",{style:{color:"#00d4ff"},children:"NBA Accreditation"}),e.jsx("br",{}),"Across All 4 Programs"]}),e.jsx("p",{style:{color:"rgba(255,255,255,0.4)",fontSize:"0.9rem",lineHeight:1.75},children:"Delivering outcome-based engineering education with measurable PO/CO attainment, continuous quality improvement and industry-aligned curriculum."})]})})]})]})}function Gg(){const[i,o]=v.useState(!1);return i?e.jsx($g,{onLogout:()=>o(!1)}):e.jsx(Hg,{onSuccess:()=>o(!0)})}function Jg(){v.useEffect(()=>{const i=document.querySelectorAll(".reveal, .reveal-left, .reveal-right"),o=new IntersectionObserver(c=>c.forEach(d=>{d.isIntersecting&&d.target.classList.add("visible")}),{threshold:.1});return i.forEach(c=>o.observe(c)),()=>o.disconnect()},[])}const Yg=[{title:"Digital Literacy Drive",icon:"fa-laptop",color:"#2d7dd2",desc:"Empowering rural youth with digital skills, computer literacy, and internet access to bridge the digital divide.",impact:"500+ Students Trained"},{title:"Skill India Alignment",icon:"fa-tools",color:"#16a34a",desc:"Aligning curriculum with Skill India mission to produce industry-ready graduates with practical competencies.",impact:"4 Programs Aligned"},{title:"Entrepreneurship Development",icon:"fa-lightbulb",color:"#f59e0b",desc:"Fostering startup culture through incubation support, mentorship, and entrepreneurship development programs.",impact:"10+ Startups Supported"},{title:"Green Campus Initiative",icon:"fa-leaf",color:"#16a34a",desc:"Promoting sustainable practices, solar energy adoption, and eco-friendly campus operations.",impact:"Carbon Neutral Goal 2030"},{title:"Women Empowerment",icon:"fa-venus",color:"#7c3aed",desc:"Special scholarships, mentorship programs, and leadership opportunities for women students.",impact:"60%+ Women Enrollment"},{title:"Community Outreach",icon:"fa-hands-helping",color:"#dc2626",desc:"Regular community service activities, health camps, and awareness programs in surrounding villages.",impact:"20+ Villages Reached"}],Vg=[{icon:"fa-graduation-cap",title:"Quality Education",desc:"Ensuring accessible, affordable, and high-quality education for all"},{icon:"fa-industry",title:"Industry Connect",desc:"Bridging academia and industry for better employment outcomes"},{icon:"fa-globe",title:"Digital India",desc:"Contributing to India's digital transformation through tech education"},{icon:"fa-seedling",title:"Sustainable Growth",desc:"Promoting sustainable development in education and campus operations"}];function Kg(){return Jg(),e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"page-hero",children:[e.jsx("div",{className:"page-hero-dots"}),e.jsx("span",{className:"section-label",children:"National Initiative"}),e.jsxs("h1",{children:["Vikshit ",e.jsx("span",{children:"Bharat"})]}),e.jsx("p",{children:"Creative Techno College's contribution to building a Developed India by 2047"})]}),e.jsx("section",{style:{padding:"60px 5%",background:"#fff"},children:e.jsx("div",{style:{maxWidth:"1100px",margin:"0 auto"},children:e.jsxs("div",{className:"reveal tech-card",style:{padding:"36px 40px"},children:[e.jsx("span",{className:"section-label",children:"Vision"}),e.jsxs("h2",{className:"section-title",children:["Vikshit Bharat ",e.jsx("span",{children:"@2047"})]}),e.jsx("p",{style:{color:"var(--text-muted)",lineHeight:1.9,fontSize:"1rem"},children:"Vikshit Bharat (Developed India) is Prime Minister Narendra Modi's vision to transform India into a fully developed nation by 2047, the centenary of India's independence. Creative Techno College is proud to contribute to this national mission through quality education, skill development, and community empowerment."}),e.jsx("p",{style:{color:"var(--text-muted)",lineHeight:1.9,fontSize:"1rem",marginTop:"14px"},children:"Our institution actively participates in government initiatives like Skill India, Digital India, Startup India, and Swachh Bharat, aligning our academic programs and campus activities with the national development agenda."})]})})}),e.jsx("section",{className:"tech-grid-bg",style:{padding:"60px 5%"},children:e.jsxs("div",{style:{maxWidth:"1100px",margin:"0 auto"},children:[e.jsxs("div",{style:{textAlign:"center",marginBottom:"40px"},children:[e.jsx("span",{className:"section-label",children:"Foundation"}),e.jsxs("h2",{className:"section-title",children:["Our ",e.jsx("span",{children:"Pillars"})]})]}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(240px, 1fr))",gap:"24px"},children:Vg.map((i,o)=>e.jsxs("div",{className:"reveal tech-card",style:{padding:"28px",textAlign:"center",transitionDelay:`${o*.1}s`},children:[e.jsx("div",{style:{width:"60px",height:"60px",borderRadius:"50%",background:"linear-gradient(135deg, var(--blue-light), var(--cyan))",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 16px"},children:e.jsx("i",{className:`fa-solid ${i.icon}`,style:{color:"#fff",fontSize:"1.3rem"}})}),e.jsx("h3",{style:{fontFamily:"var(--font-head)",fontWeight:800,color:"var(--navy)",marginBottom:"8px",fontSize:"1rem"},children:i.title}),e.jsx("p",{style:{color:"var(--text-muted)",fontSize:"0.85rem",lineHeight:1.7},children:i.desc})]},o))})]})}),e.jsx("section",{style:{padding:"60px 5%",background:"#fff"},children:e.jsxs("div",{style:{maxWidth:"1100px",margin:"0 auto"},children:[e.jsxs("div",{style:{textAlign:"center",marginBottom:"40px"},children:[e.jsx("span",{className:"section-label",children:"Action"}),e.jsxs("h2",{className:"section-title",children:["Our ",e.jsx("span",{children:"Initiatives"})]})]}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(320px, 1fr))",gap:"24px"},children:Yg.map((i,o)=>e.jsxs("div",{className:"reveal tech-card",style:{padding:"28px",transitionDelay:`${o*.08}s`},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"14px",marginBottom:"14px"},children:[e.jsx("div",{style:{width:"48px",height:"48px",borderRadius:"12px",background:`${i.color}22`,border:`2px solid ${i.color}44`,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:e.jsx("i",{className:`fa-solid ${i.icon}`,style:{color:i.color,fontSize:"1.1rem"}})}),e.jsx("h3",{style:{fontFamily:"var(--font-head)",fontWeight:800,color:"var(--navy)",fontSize:"0.95rem"},children:i.title})]}),e.jsx("p",{style:{color:"var(--text-muted)",fontSize:"0.88rem",lineHeight:1.7,marginBottom:"12px"},children:i.desc}),e.jsx("span",{className:"status-badge completed",children:i.impact})]},o))})]})}),e.jsx("section",{className:"tech-grid-bg",style:{padding:"60px 5%"},children:e.jsxs("div",{style:{maxWidth:"1100px",margin:"0 auto"},children:[e.jsxs("div",{style:{textAlign:"center",marginBottom:"40px"},children:[e.jsx("span",{className:"section-label",children:"Impact"}),e.jsxs("h2",{className:"section-title",children:["Our ",e.jsx("span",{children:"Contribution"})]})]}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(200px, 1fr))",gap:"20px"},children:[{num:"1500+",label:"Students Empowered",icon:"fa-users"},{num:"100+",label:"Companies Partnered",icon:"fa-handshake"},{num:"20+",label:"Villages Reached",icon:"fa-map-marker-alt"},{num:"10+",label:"Startups Incubated",icon:"fa-rocket"},{num:"15+",label:"Years of Excellence",icon:"fa-award"}].map((i,o)=>e.jsxs("div",{className:"reveal tech-card gold-accent",style:{padding:"28px",textAlign:"center",transitionDelay:`${o*.08}s`},children:[e.jsx("i",{className:`fa-solid ${i.icon}`,style:{fontSize:"1.6rem",color:"var(--gold)",marginBottom:"12px",display:"block"}}),e.jsx("div",{style:{fontSize:"1.8rem",fontWeight:900,fontFamily:"var(--font-head)",color:"var(--navy)",lineHeight:1},children:i.num}),e.jsx("div",{style:{color:"var(--text-muted)",fontSize:"0.8rem",marginTop:"6px",fontWeight:600},children:i.label})]},o))})]})})]})}const lo=[{id:"student",label:"Student",sub:"Access results & records",icon:"fa-graduation-cap",color:"#3b82f6",glow:"rgba(59,130,246,0.6)",grad:"linear-gradient(135deg,#1e3a8a,#3b82f6)",lightGrad:"linear-gradient(135deg,#dbeafe,#eff6ff)",emoji:"🎓",idLabel:"Student ID",passLabel:"Date of Birth",idPlaceholder:"Enter Student ID",passPH:"••••••••"},{id:"staff",label:"Staff",sub:"Faculty portal & tools",icon:"fa-user-tie",color:"#10b981",glow:"rgba(16,185,129,0.6)",grad:"linear-gradient(135deg,#064e3b,#10b981)",lightGrad:"linear-gradient(135deg,#d1fae5,#ecfdf5)",emoji:"👨‍💼",idLabel:"Staff Username",passLabel:"Password",idPlaceholder:"Enter Staff Username",passPH:"••••••••"},{id:"admin",label:"Admin",sub:"System administration",icon:"fa-shield-halved",color:"#8b5cf6",glow:"rgba(139,92,246,0.6)",grad:"linear-gradient(135deg,#2e1065,#8b5cf6)",lightGrad:"linear-gradient(135deg,#ede9fe,#f5f3ff)",emoji:"🛡️",idLabel:"Admin Username",passLabel:"Password",idPlaceholder:"Enter Admin Username",passPH:"••••••••"},{id:"principal",label:"Principal",sub:"Institutional dashboard",icon:"fa-crown",color:"#f59e0b",glow:"rgba(245,158,11,0.6)",grad:"linear-gradient(135deg,#78350f,#f59e0b)",lightGrad:"linear-gradient(135deg,#fef3c7,#fffbeb)",emoji:"👑",idLabel:"Principal Username",passLabel:"Password",idPlaceholder:"Enter Principal Username",passPH:"••••••••"},{id:"admission",label:"Admission",sub:"Enrollment & applications",icon:"fa-file-circle-check",color:"#ec4899",glow:"rgba(236,72,153,0.6)",grad:"linear-gradient(135deg,#831843,#ec4899)",lightGrad:"linear-gradient(135deg,#fce7f3,#fdf2f8)",emoji:"📋",idLabel:"Admission Username",passLabel:"Password",idPlaceholder:"Enter Admission Username",passPH:"••••••••"}];function Qg({color:i}){return e.jsxs("div",{style:{position:"absolute",inset:0,overflow:"hidden",zIndex:0,pointerEvents:"none"},children:[e.jsx("div",{style:{position:"absolute",inset:0,background:"linear-gradient(160deg,#020817 0%,#0a0f1e 50%,#050b18 100%)"}}),e.jsx("div",{style:{position:"absolute",width:"70vw",height:"70vw",maxWidth:700,maxHeight:700,borderRadius:"50%",top:"-20%",left:"-10%",background:`radial-gradient(circle, ${i}22 0%, transparent 65%)`,filter:"blur(40px)",transition:"background 0.6s ease",animation:"auroraMove1 12s ease-in-out infinite"}}),e.jsx("div",{style:{position:"absolute",width:"60vw",height:"60vw",maxWidth:600,maxHeight:600,borderRadius:"50%",bottom:"-15%",right:"-10%",background:`radial-gradient(circle, ${i}18 0%, transparent 65%)`,filter:"blur(50px)",transition:"background 0.6s ease",animation:"auroraMove2 15s ease-in-out infinite"}}),e.jsx("div",{style:{position:"absolute",width:"40vw",height:"40vw",maxWidth:400,maxHeight:400,borderRadius:"50%",top:"30%",right:"20%",background:"radial-gradient(circle, rgba(0,212,255,0.08) 0%, transparent 65%)",filter:"blur(35px)",animation:"auroraMove3 18s ease-in-out infinite"}}),e.jsx("div",{style:{position:"absolute",inset:0,backgroundImage:"linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",backgroundSize:"40px 40px"}}),e.jsx("div",{style:{position:"absolute",inset:0,background:"radial-gradient(ellipse at center, transparent 40%, rgba(2,8,23,0.8) 100%)"}})]})}function qg({role:i,isActive:o,onClick:c}){const[d,m]=v.useState(!1);return e.jsxs("button",{onClick:c,onMouseEnter:()=>m(!0),onMouseLeave:()=>m(!1),style:{flex:"1 1 0",minWidth:0,background:o?i.grad:d?"rgba(255,255,255,0.07)":"rgba(255,255,255,0.03)",border:o?`2px solid ${i.color}`:`2px solid ${d?"rgba(255,255,255,0.15)":"rgba(255,255,255,0.06)"}`,borderRadius:16,padding:"14px 8px 12px",cursor:"pointer",transition:"all 0.3s cubic-bezier(0.4,0,0.2,1)",display:"flex",flexDirection:"column",alignItems:"center",gap:6,transform:o?"translateY(-4px) scale(1.03)":d?"translateY(-2px)":"none",boxShadow:o?`0 12px 32px ${i.glow}`:d?"0 4px 16px rgba(0,0,0,0.3)":"none",position:"relative",overflow:"hidden"},children:[o&&e.jsx("div",{style:{position:"absolute",inset:0,borderRadius:14,background:"linear-gradient(135deg, rgba(255,255,255,0.12) 0%, transparent 60%)",pointerEvents:"none"}}),e.jsx("span",{style:{fontSize:"1.6rem",lineHeight:1},children:i.emoji}),e.jsx("span",{style:{fontFamily:"'Poppins',sans-serif",fontSize:"0.68rem",fontWeight:700,color:o?"#fff":"rgba(255,255,255,0.5)",textTransform:"uppercase",letterSpacing:"0.5px",transition:"color 0.3s"},children:i.label}),o&&e.jsx("div",{style:{position:"absolute",bottom:6,left:"50%",transform:"translateX(-50%)",width:20,height:3,borderRadius:2,background:"#fff"}})]})}function Yt(){const i=rt(),o=yo(),c=i.pathname.split("/").pop(),d=lo.find(oe=>oe.id===c)||lo[0],[m,f]=v.useState(d),[u,h]=v.useState(""),[y,j]=v.useState(""),[x,b]=v.useState(!1),[P,H]=v.useState(""),[Y,R]=v.useState(!1),[M,T]=v.useState(!1),[A,L]=v.useState(!1),Q=v.useRef(null);v.useEffect(()=>{setTimeout(()=>L(!0),80)},[]);const ue=oe=>{f(oe),H(""),h(""),j(""),o(`/login/${oe.id}`,{replace:!0})},Ne=async oe=>{if(oe.preventDefault(),!u.trim()||!y.trim()){H("Both fields are required.");return}H(""),R(!0);try{const Ue=new FormData;Ue.append("id",u),Ue.append("pass",y),Ue.append("login_type",m.id);const ca=await(await fetch("https://creativecollege.in/CTC%20NEW%20REACT%20WEBSITE/api_login.php",{method:"POST",body:Ue,credentials:"include"})).json();ca.status==="success"?(R(!1),T(!0),setTimeout(()=>{const Ie=document.createElement("a");Ie.href=ca.redirect,Ie.target="_blank",Ie.rel="noopener noreferrer",document.body.appendChild(Ie),Ie.click(),document.body.removeChild(Ie),h(""),j(""),b(!1),H(""),T(!1),R(!1)},1500)):(R(!1),H(ca.message||"Invalid credentials. Please try again."))}catch{R(!1),H("Network error. Please try again later.")}};return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
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
  `}),e.jsxs("div",{className:"portal-page",children:[e.jsx(Qg,{color:m.color}),e.jsxs("div",{className:`portal-main${A?" visible":""}`,children:[e.jsxs("div",{className:"portal-logo-area",children:[e.jsxs("div",{className:"portal-logo-ring",style:{borderColor:`${m.color}40`,boxShadow:`0 0 32px ${m.glow}`},children:[e.jsx("div",{className:"portal-logo-ring-glow",style:{borderColor:m.color}}),e.jsx("img",{src:"https://creativecollege.in/Admission_Dashboard/images/CTC%20logo.png",alt:"CTC"})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"portal-wordmark",children:["Creative Techno ",e.jsx("span",{children:"College"})]}),e.jsx("div",{className:"portal-tagline",children:"Unified Portal · Angul, Odisha"})]})]}),e.jsxs("div",{className:"portal-card",children:[M&&e.jsxs("div",{className:"portal-success-overlay",children:[e.jsx("div",{className:"portal-success-icon",children:e.jsx("i",{className:"fa-solid fa-check"})}),e.jsx("span",{style:{fontFamily:"'Plus Jakarta Sans',sans-serif",fontWeight:700,color:"#fff",fontSize:"1rem"},children:"Login Successful!"}),e.jsx("span",{style:{fontSize:"0.78rem",color:"rgba(255,255,255,0.4)"},children:"Redirecting you…"})]}),e.jsx("div",{className:"portal-role-grid",children:lo.map(oe=>e.jsx(qg,{role:oe,isActive:m.id===oe.id,onClick:()=>ue(oe)},oe.id))}),e.jsxs("div",{className:"portal-divider",children:[e.jsx("div",{className:"portal-divider-line"}),e.jsxs("span",{className:"portal-divider-text",children:["Sign in as ",m.label]}),e.jsx("div",{className:"portal-divider-line"})]}),e.jsxs("h2",{className:"portal-heading",style:{color:m.color},children:[m.emoji," ",m.label," Login"]}),e.jsx("p",{className:"portal-subhead",children:m.sub}),P&&e.jsxs("div",{className:"portal-error",children:[e.jsx("i",{className:"fa-solid fa-circle-exclamation"}),P]}),e.jsxs("form",{ref:Q,onSubmit:Ne,noValidate:!0,children:[e.jsxs("div",{className:"portal-field",children:[e.jsxs("label",{className:"portal-field-label",children:[e.jsx("i",{className:"fa-solid fa-id-badge",style:{color:m.color}}),m.idLabel]}),e.jsxs("div",{className:"portal-input-wrap",style:{"--ac":m.color},children:[e.jsx("span",{className:"portal-input-icon",children:e.jsx("i",{className:"fa-solid fa-user"})}),e.jsx("input",{type:"text",value:u,onChange:oe=>h(oe.target.value),placeholder:m.idPlaceholder,autoComplete:"username"}),e.jsx("div",{className:"portal-input-focus-bar",style:{background:m.color}})]})]}),e.jsxs("div",{className:"portal-field",children:[e.jsxs("label",{className:"portal-field-label",children:[e.jsx("i",{className:"fa-solid fa-lock",style:{color:m.color}}),m.passLabel]}),e.jsxs("div",{className:"portal-input-wrap",children:[e.jsx("span",{className:"portal-input-icon",children:e.jsx("i",{className:"fa-solid fa-key"})}),e.jsx("input",{type:x?"text":"password",value:y,onChange:oe=>j(oe.target.value),placeholder:m.passPH,autoComplete:"current-password"}),e.jsx("button",{type:"button",className:"portal-eye-btn",onClick:()=>b(oe=>!oe),children:e.jsx("i",{className:`fa-solid ${x?"fa-eye-slash":"fa-eye"}`})}),e.jsx("div",{className:"portal-input-focus-bar",style:{background:m.color}})]})]}),e.jsxs("button",{type:"submit",className:"portal-submit",disabled:Y,style:{background:m.grad,boxShadow:`0 8px 32px ${m.glow}`},children:[!Y&&e.jsx("div",{className:"portal-submit-shimmer"}),Y?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"portal-spinner"})," Authenticating…"]}):e.jsxs(e.Fragment,{children:[e.jsx("i",{className:"fa-solid fa-right-to-bracket"})," Sign In to Portal"]})]})]})]})]})]})]})}const Na=({title:i})=>e.jsxs("div",{style:{textAlign:"center",padding:"80px 20px"},children:[e.jsx("h1",{style:{color:"#0c2340",fontSize:"2.5rem"},children:i}),e.jsx("p",{style:{color:"#666",marginTop:"20px",fontSize:"1.1rem"},children:"This page is coming soon."})]});function Xg(){return e.jsxs(Ru,{basename:"/CTC%20NEW%20REACT%20WEBSITE",children:[e.jsx(Wu,{}),e.jsx(Hu,{children:e.jsxs(Cu,{children:[e.jsx(X,{path:"/",element:e.jsx(Vu,{})}),e.jsx(X,{path:"/about/trust",element:e.jsx(Zu,{})}),e.jsx(X,{path:"/about/ctc",element:e.jsx(th,{})}),e.jsx(X,{path:"/about/team",element:e.jsx(ih,{})}),e.jsx(X,{path:"/admission",element:e.jsx(hh,{})}),e.jsx(X,{path:"/admission/apply",element:e.jsx(bh,{})}),e.jsx(X,{path:"/academics/regular",element:e.jsx(kh,{})}),e.jsx(X,{path:"/academics/value-added",element:e.jsx(Ah,{})}),e.jsx(X,{path:"/academics/enhancement",element:e.jsx(Ih,{})}),e.jsx(X,{path:"/placement",element:e.jsx(Fd,{})}),e.jsx(X,{path:"/placement/programs",element:e.jsx(Gh,{})}),e.jsx(X,{path:"/placement/statistics",element:e.jsx(Fd,{})}),e.jsx(X,{path:"/placement/brochure",element:e.jsx(Jh,{})}),e.jsx(X,{path:"/gymkhana",element:e.jsx(Zh,{})}),e.jsx(X,{path:"/gymkhana/cultural",element:e.jsx(Ag,{})}),e.jsx(X,{path:"/gymkhana/sports",element:e.jsx(kg,{})}),e.jsx(X,{path:"/gymkhana/technocrat",element:e.jsx(wg,{})}),e.jsx(X,{path:"/gymkhana/disha-csr",element:e.jsx(Bg,{})}),e.jsx(X,{path:"/gymkhana/techfest/1",element:e.jsx(Xd,{})}),e.jsx(X,{path:"/gymkhana/techfest/2",element:e.jsx(Zd,{})}),e.jsx(X,{path:"/gymkhana/techfest/3",element:e.jsx(ep,{})}),e.jsx(X,{path:"/gymkhana/techfest-1",element:e.jsx(Xd,{})}),e.jsx(X,{path:"/gymkhana/techfest-2",element:e.jsx(Zd,{})}),e.jsx(X,{path:"/gymkhana/techfest-3",element:e.jsx(ep,{})}),e.jsx(X,{path:"/gallery",element:e.jsx(ag,{})}),e.jsx(X,{path:"/iqac",element:e.jsx(Na,{title:"IQAC"})}),e.jsx(X,{path:"/iqac/item1",element:e.jsx(Na,{title:"IQAC — Item 1"})}),e.jsx(X,{path:"/iqac/item2",element:e.jsx(Na,{title:"IQAC — Item 2"})}),e.jsx(X,{path:"/iqac/item3",element:e.jsx(Na,{title:"IQAC — Item 3"})}),e.jsx(X,{path:"/iqac/item4",element:e.jsx(Na,{title:"IQAC — Item 4"})}),e.jsx(X,{path:"/aicte",element:e.jsx(Na,{title:"AICTE"})}),e.jsx(X,{path:"/aicte/documents",element:e.jsx(Na,{title:"AICTE — Documents"})}),e.jsx(X,{path:"/aicte/mandatory-disclosure",element:e.jsx(Na,{title:"AICTE — Mandatory Disclosure"})}),e.jsx(X,{path:"/ckf-skills",element:e.jsx(Na,{title:"CKF Skills"})}),e.jsx(X,{path:"/contacts",element:e.jsx(sg,{})}),e.jsx(X,{path:"/icc",element:e.jsx(fg,{})}),e.jsx(X,{path:"/grc",element:e.jsx(gg,{})}),e.jsx(X,{path:"/naac",element:e.jsx(Dg,{})}),e.jsx(X,{path:"/nba",element:e.jsx(Gg,{})}),e.jsx(X,{path:"/vikshit-bharat",element:e.jsx(Kg,{})}),e.jsx(X,{path:"/login",element:e.jsx(Yt,{})}),e.jsx(X,{path:"/login/student",element:e.jsx(Yt,{})}),e.jsx(X,{path:"/login/staff",element:e.jsx(Yt,{})}),e.jsx(X,{path:"/login/admin",element:e.jsx(Yt,{})}),e.jsx(X,{path:"/login/principal",element:e.jsx(Yt,{})}),e.jsx(X,{path:"/login/admission",element:e.jsx(Yt,{})}),e.jsx(X,{path:"*",element:e.jsx(Na,{title:"Page Not Found"})})]})})]})}typeof window<"u"&&(window.history.scrollRestoration="manual");Bf.createRoot(document.getElementById("root")).render(e.jsx(v.StrictMode,{children:e.jsx(Xg,{})}));
