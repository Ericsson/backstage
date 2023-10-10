/*! For license information please see e9f82b5f.73e482f6.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[176570],{351573:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>s,metadata:()=>u,toc:()=>a});var t=n(824246),o=n(511151);const s={id:"plugin-permission-common.querypermissionresponse",title:"QueryPermissionResponse",description:"API reference for QueryPermissionResponse"},i=void 0,u={id:"reference/plugin-permission-common.querypermissionresponse",title:"QueryPermissionResponse",description:"API reference for QueryPermissionResponse",source:"@site/../docs/reference/plugin-permission-common.querypermissionresponse.md",sourceDirName:"reference",slug:"/reference/plugin-permission-common.querypermissionresponse",permalink:"/docs/reference/plugin-permission-common.querypermissionresponse",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-permission-common.querypermissionresponse.md",tags:[],version:"current",frontMatter:{id:"plugin-permission-common.querypermissionresponse",title:"QueryPermissionResponse",description:"API reference for QueryPermissionResponse"}},c={},a=[];function f(e){const r=Object.assign({p:"p",a:"a",code:"code",strong:"strong",pre:"pre"},(0,o.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-permission-common",children:(0,t.jsx)(r.code,{children:"@backstage/plugin-permission-common"})})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-permission-common.querypermissionresponse",children:(0,t.jsx)(r.code,{children:"QueryPermissionResponse"})})]}),"\n",(0,t.jsxs)(r.p,{children:["Response object for ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-permission-common.permissionevaluator.authorizeconditional",children:"PermissionEvaluator.authorizeConditional()"}),"."]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:"export type QueryPermissionResponse = PolicyDecision;\n"})}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"References:"})," ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-permission-common.policydecision",children:"PolicyDecision"})]})]})}const l=function(e={}){const{wrapper:r}=Object.assign({},(0,o.ah)(),e.components);return r?(0,t.jsx)(r,Object.assign({},e,{children:(0,t.jsx)(f,e)})):f(e)}},862525:e=>{var r=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},n=0;n<10;n++)r["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var t={};return"abcdefghijklmnopqrst".split("").forEach((function(e){t[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},t)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var s,i,u=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),c=1;c<arguments.length;c++){for(var a in s=Object(arguments[c]))n.call(s,a)&&(u[a]=s[a]);if(r){i=r(s);for(var f=0;f<i.length;f++)t.call(s,i[f])&&(u[i[f]]=s[i[f]])}}return u}},371426:(e,r,n)=>{n(862525);var t=n(827378),o=60103;if(r.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var s=Symbol.for;o=s("react.element"),r.Fragment=s("react.fragment")}var i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};function a(e,r,n){var t,s={},a=null,f=null;for(t in void 0!==n&&(a=""+n),void 0!==r.key&&(a=""+r.key),void 0!==r.ref&&(f=r.ref),r)u.call(r,t)&&!c.hasOwnProperty(t)&&(s[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===s[t]&&(s[t]=r[t]);return{$$typeof:o,type:e,key:a,ref:f,props:s,_owner:i.current}}r.jsx=a,r.jsxs=a},541535:(e,r,n)=>{var t=n(862525),o=60103,s=60106;r.Fragment=60107,r.StrictMode=60108,r.Profiler=60114;var i=60109,u=60110,c=60112;r.Suspense=60113;var a=60115,f=60116;if("function"==typeof Symbol&&Symbol.for){var l=Symbol.for;o=l("react.element"),s=l("react.portal"),r.Fragment=l("react.fragment"),r.StrictMode=l("react.strict_mode"),r.Profiler=l("react.profiler"),i=l("react.provider"),u=l("react.context"),c=l("react.forward_ref"),r.Suspense=l("react.suspense"),a=l("react.memo"),f=l("react.lazy")}var p="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)r+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m={};function h(e,r,n){this.props=e,this.context=r,this.refs=m,this.updater=n||y}function v(){}function g(e,r,n){this.props=e,this.context=r,this.refs=m,this.updater=n||y}h.prototype.isReactComponent={},h.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,r,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=h.prototype;var _=g.prototype=new v;_.constructor=g,t(_,h.prototype),_.isPureReactComponent=!0;var b={current:null},j=Object.prototype.hasOwnProperty,O={key:!0,ref:!0,__self:!0,__source:!0};function k(e,r,n){var t,s={},i=null,u=null;if(null!=r)for(t in void 0!==r.ref&&(u=r.ref),void 0!==r.key&&(i=""+r.key),r)j.call(r,t)&&!O.hasOwnProperty(t)&&(s[t]=r[t]);var c=arguments.length-2;if(1===c)s.children=n;else if(1<c){for(var a=Array(c),f=0;f<c;f++)a[f]=arguments[f+2];s.children=a}if(e&&e.defaultProps)for(t in c=e.defaultProps)void 0===s[t]&&(s[t]=c[t]);return{$$typeof:o,type:e,key:i,ref:u,props:s,_owner:b.current}}function w(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var P=/\/+/g;function x(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function R(e,r,n,t,i){var u=typeof e;"undefined"!==u&&"boolean"!==u||(e=null);var c=!1;if(null===e)c=!0;else switch(u){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case o:case s:c=!0}}if(c)return i=i(c=e),e=""===t?"."+x(c,0):t,Array.isArray(i)?(n="",null!=e&&(n=e.replace(P,"$&/")+"/"),R(i,r,n,"",(function(e){return e}))):null!=i&&(w(i)&&(i=function(e,r){return{$$typeof:o,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(i,n+(!i.key||c&&c.key===i.key?"":(""+i.key).replace(P,"$&/")+"/")+e)),r.push(i)),1;if(c=0,t=""===t?".":t+":",Array.isArray(e))for(var a=0;a<e.length;a++){var f=t+x(u=e[a],a);c+=R(u,r,n,f,i)}else if(f=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof f)for(e=f.call(e),a=0;!(u=e.next()).done;)c+=R(u=u.value,r,n,f=t+x(u,a++),i);else if("object"===u)throw r=""+e,Error(d(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r));return c}function S(e,r,n){if(null==e)return e;var t=[],o=0;return R(e,t,"","",(function(e){return r.call(n,e,o++)})),t}function C(e){if(-1===e._status){var r=e._result;r=r(),e._status=0,e._result=r,r.then((function(r){0===e._status&&(r=r.default,e._status=1,e._result=r)}),(function(r){0===e._status&&(e._status=2,e._result=r)}))}if(1===e._status)return e._result;throw e._result}var E={current:null};function $(){var e=E.current;if(null===e)throw Error(d(321));return e}var q={ReactCurrentDispatcher:E,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:b,IsSomeRendererActing:{current:!1},assign:t};r.Children={map:S,forEach:function(e,r,n){S(e,(function(){r.apply(this,arguments)}),n)},count:function(e){var r=0;return S(e,(function(){r++})),r},toArray:function(e){return S(e,(function(e){return e}))||[]},only:function(e){if(!w(e))throw Error(d(143));return e}},r.Component=h,r.PureComponent=g,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=q,r.cloneElement=function(e,r,n){if(null==e)throw Error(d(267,e));var s=t({},e.props),i=e.key,u=e.ref,c=e._owner;if(null!=r){if(void 0!==r.ref&&(u=r.ref,c=b.current),void 0!==r.key&&(i=""+r.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(f in r)j.call(r,f)&&!O.hasOwnProperty(f)&&(s[f]=void 0===r[f]&&void 0!==a?a[f]:r[f])}var f=arguments.length-2;if(1===f)s.children=n;else if(1<f){a=Array(f);for(var l=0;l<f;l++)a[l]=arguments[l+2];s.children=a}return{$$typeof:o,type:e.type,key:i,ref:u,props:s,_owner:c}},r.createContext=function(e,r){return void 0===r&&(r=null),(e={$$typeof:u,_calculateChangedBits:r,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},r.createElement=k,r.createFactory=function(e){var r=k.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:c,render:e}},r.isValidElement=w,r.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:C}},r.memo=function(e,r){return{$$typeof:a,type:e,compare:void 0===r?null:r}},r.useCallback=function(e,r){return $().useCallback(e,r)},r.useContext=function(e,r){return $().useContext(e,r)},r.useDebugValue=function(){},r.useEffect=function(e,r){return $().useEffect(e,r)},r.useImperativeHandle=function(e,r,n){return $().useImperativeHandle(e,r,n)},r.useLayoutEffect=function(e,r){return $().useLayoutEffect(e,r)},r.useMemo=function(e,r){return $().useMemo(e,r)},r.useReducer=function(e,r,n){return $().useReducer(e,r,n)},r.useRef=function(e){return $().useRef(e)},r.useState=function(e){return $().useState(e)},r.version="17.0.2"},827378:(e,r,n)=>{e.exports=n(541535)},824246:(e,r,n)=>{e.exports=n(371426)},511151:(e,r,n)=>{n.d(r,{Zo:()=>u,ah:()=>s});var t=n(667294);const o=t.createContext({});function s(e){const r=t.useContext(o);return t.useMemo((()=>"function"==typeof e?e(r):{...r,...e}),[r,e])}const i={};function u({components:e,children:r,disableParentContext:n}){let u;return u=n?"function"==typeof e?e({}):e||i:s(e),t.createElement(o.Provider,{value:u},r)}}}]);