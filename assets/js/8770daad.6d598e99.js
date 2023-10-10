/*! For license information please see 8770daad.6d598e99.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[824071],{649104:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>i,contentTitle:()=>c,default:()=>l,frontMatter:()=>a,metadata:()=>u,toc:()=>s});var t=n(824246),o=n(511151);const a={id:"plugin-sonarqube-backend.sonarqubeinstanceconfig.apikey",title:"SonarqubeInstanceConfig.apiKey",description:"API reference for SonarqubeInstanceConfig.apiKey"},c=void 0,u={id:"reference/plugin-sonarqube-backend.sonarqubeinstanceconfig.apikey",title:"SonarqubeInstanceConfig.apiKey",description:"API reference for SonarqubeInstanceConfig.apiKey",source:"@site/../docs/reference/plugin-sonarqube-backend.sonarqubeinstanceconfig.apikey.md",sourceDirName:"reference",slug:"/reference/plugin-sonarqube-backend.sonarqubeinstanceconfig.apikey",permalink:"/docs/reference/plugin-sonarqube-backend.sonarqubeinstanceconfig.apikey",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-sonarqube-backend.sonarqubeinstanceconfig.apikey.md",tags:[],version:"current",frontMatter:{id:"plugin-sonarqube-backend.sonarqubeinstanceconfig.apikey",title:"SonarqubeInstanceConfig.apiKey",description:"API reference for SonarqubeInstanceConfig.apiKey"}},i={},s=[];function f(e){const r=Object.assign({p:"p",a:"a",code:"code",strong:"strong",pre:"pre"},(0,o.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-sonarqube-backend",children:(0,t.jsx)(r.code,{children:"@backstage/plugin-sonarqube-backend"})})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-sonarqube-backend.sonarqubeinstanceconfig",children:(0,t.jsx)(r.code,{children:"SonarqubeInstanceConfig"})})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-sonarqube-backend.sonarqubeinstanceconfig.apikey",children:(0,t.jsx)(r.code,{children:"apiKey"})})]}),"\n",(0,t.jsx)(r.p,{children:"Access token to access the sonarqube instance as generated in user profile."}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:"apiKey: string;\n"})})]})}const l=function(e={}){const{wrapper:r}=Object.assign({},(0,o.ah)(),e.components);return r?(0,t.jsx)(r,Object.assign({},e,{children:(0,t.jsx)(f,e)})):f(e)}},862525:e=>{var r=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},n=0;n<10;n++)r["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var t={};return"abcdefghijklmnopqrst".split("").forEach((function(e){t[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},t)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var a,c,u=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),i=1;i<arguments.length;i++){for(var s in a=Object(arguments[i]))n.call(a,s)&&(u[s]=a[s]);if(r){c=r(a);for(var f=0;f<c.length;f++)t.call(a,c[f])&&(u[c[f]]=a[c[f]])}}return u}},371426:(e,r,n)=>{n(862525);var t=n(827378),o=60103;if(r.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var a=Symbol.for;o=a("react.element"),r.Fragment=a("react.fragment")}var c=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u=Object.prototype.hasOwnProperty,i={key:!0,ref:!0,__self:!0,__source:!0};function s(e,r,n){var t,a={},s=null,f=null;for(t in void 0!==n&&(s=""+n),void 0!==r.key&&(s=""+r.key),void 0!==r.ref&&(f=r.ref),r)u.call(r,t)&&!i.hasOwnProperty(t)&&(a[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===a[t]&&(a[t]=r[t]);return{$$typeof:o,type:e,key:s,ref:f,props:a,_owner:c.current}}r.jsx=s,r.jsxs=s},541535:(e,r,n)=>{var t=n(862525),o=60103,a=60106;r.Fragment=60107,r.StrictMode=60108,r.Profiler=60114;var c=60109,u=60110,i=60112;r.Suspense=60113;var s=60115,f=60116;if("function"==typeof Symbol&&Symbol.for){var l=Symbol.for;o=l("react.element"),a=l("react.portal"),r.Fragment=l("react.fragment"),r.StrictMode=l("react.strict_mode"),r.Profiler=l("react.profiler"),c=l("react.provider"),u=l("react.context"),i=l("react.forward_ref"),r.Suspense=l("react.suspense"),s=l("react.memo"),f=l("react.lazy")}var p="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)r+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b={};function h(e,r,n){this.props=e,this.context=r,this.refs=b,this.updater=n||y}function g(){}function v(e,r,n){this.props=e,this.context=r,this.refs=b,this.updater=n||y}h.prototype.isReactComponent={},h.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,r,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=h.prototype;var m=v.prototype=new g;m.constructor=v,t(m,h.prototype),m.isPureReactComponent=!0;var _={current:null},k=Object.prototype.hasOwnProperty,j={key:!0,ref:!0,__self:!0,__source:!0};function S(e,r,n){var t,a={},c=null,u=null;if(null!=r)for(t in void 0!==r.ref&&(u=r.ref),void 0!==r.key&&(c=""+r.key),r)k.call(r,t)&&!j.hasOwnProperty(t)&&(a[t]=r[t]);var i=arguments.length-2;if(1===i)a.children=n;else if(1<i){for(var s=Array(i),f=0;f<i;f++)s[f]=arguments[f+2];a.children=s}if(e&&e.defaultProps)for(t in i=e.defaultProps)void 0===a[t]&&(a[t]=i[t]);return{$$typeof:o,type:e,key:c,ref:u,props:a,_owner:_.current}}function O(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var w=/\/+/g;function C(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function q(e,r,n,t,c){var u=typeof e;"undefined"!==u&&"boolean"!==u||(e=null);var i=!1;if(null===e)i=!0;else switch(u){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case o:case a:i=!0}}if(i)return c=c(i=e),e=""===t?"."+C(i,0):t,Array.isArray(c)?(n="",null!=e&&(n=e.replace(w,"$&/")+"/"),q(c,r,n,"",(function(e){return e}))):null!=c&&(O(c)&&(c=function(e,r){return{$$typeof:o,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(c,n+(!c.key||i&&i.key===c.key?"":(""+c.key).replace(w,"$&/")+"/")+e)),r.push(c)),1;if(i=0,t=""===t?".":t+":",Array.isArray(e))for(var s=0;s<e.length;s++){var f=t+C(u=e[s],s);i+=q(u,r,n,f,c)}else if(f=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof f)for(e=f.call(e),s=0;!(u=e.next()).done;)i+=q(u=u.value,r,n,f=t+C(u,s++),c);else if("object"===u)throw r=""+e,Error(d(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r));return i}function x(e,r,n){if(null==e)return e;var t=[],o=0;return q(e,t,"","",(function(e){return r.call(n,e,o++)})),t}function E(e){if(-1===e._status){var r=e._result;r=r(),e._status=0,e._result=r,r.then((function(r){0===e._status&&(r=r.default,e._status=1,e._result=r)}),(function(r){0===e._status&&(e._status=2,e._result=r)}))}if(1===e._status)return e._result;throw e._result}var P={current:null};function $(){var e=P.current;if(null===e)throw Error(d(321));return e}var R={ReactCurrentDispatcher:P,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:_,IsSomeRendererActing:{current:!1},assign:t};r.Children={map:x,forEach:function(e,r,n){x(e,(function(){r.apply(this,arguments)}),n)},count:function(e){var r=0;return x(e,(function(){r++})),r},toArray:function(e){return x(e,(function(e){return e}))||[]},only:function(e){if(!O(e))throw Error(d(143));return e}},r.Component=h,r.PureComponent=v,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=R,r.cloneElement=function(e,r,n){if(null==e)throw Error(d(267,e));var a=t({},e.props),c=e.key,u=e.ref,i=e._owner;if(null!=r){if(void 0!==r.ref&&(u=r.ref,i=_.current),void 0!==r.key&&(c=""+r.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(f in r)k.call(r,f)&&!j.hasOwnProperty(f)&&(a[f]=void 0===r[f]&&void 0!==s?s[f]:r[f])}var f=arguments.length-2;if(1===f)a.children=n;else if(1<f){s=Array(f);for(var l=0;l<f;l++)s[l]=arguments[l+2];a.children=s}return{$$typeof:o,type:e.type,key:c,ref:u,props:a,_owner:i}},r.createContext=function(e,r){return void 0===r&&(r=null),(e={$$typeof:u,_calculateChangedBits:r,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:c,_context:e},e.Consumer=e},r.createElement=S,r.createFactory=function(e){var r=S.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:i,render:e}},r.isValidElement=O,r.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:E}},r.memo=function(e,r){return{$$typeof:s,type:e,compare:void 0===r?null:r}},r.useCallback=function(e,r){return $().useCallback(e,r)},r.useContext=function(e,r){return $().useContext(e,r)},r.useDebugValue=function(){},r.useEffect=function(e,r){return $().useEffect(e,r)},r.useImperativeHandle=function(e,r,n){return $().useImperativeHandle(e,r,n)},r.useLayoutEffect=function(e,r){return $().useLayoutEffect(e,r)},r.useMemo=function(e,r){return $().useMemo(e,r)},r.useReducer=function(e,r,n){return $().useReducer(e,r,n)},r.useRef=function(e){return $().useRef(e)},r.useState=function(e){return $().useState(e)},r.version="17.0.2"},827378:(e,r,n)=>{e.exports=n(541535)},824246:(e,r,n)=>{e.exports=n(371426)},511151:(e,r,n)=>{n.d(r,{Zo:()=>u,ah:()=>a});var t=n(667294);const o=t.createContext({});function a(e){const r=t.useContext(o);return t.useMemo((()=>"function"==typeof e?e(r):{...r,...e}),[r,e])}const c={};function u({components:e,children:r,disableParentContext:n}){let u;return u=n?"function"==typeof e?e({}):e||c:a(e),t.createElement(o.Provider,{value:u},r)}}}]);