/*! For license information please see 45ba93f8.c47ee216.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[349750],{985109:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>u,default:()=>f,frontMatter:()=>c,metadata:()=>a,toc:()=>l});var n=r(824246),o=r(511151);const c={id:"plugin-catalog-backend-module-gcp.catalogmodulegcpgkeentityprovider",title:"catalogModuleGcpGkeEntityProvider",description:"API reference for catalogModuleGcpGkeEntityProvider"},u=void 0,a={id:"reference/plugin-catalog-backend-module-gcp.catalogmodulegcpgkeentityprovider",title:"catalogModuleGcpGkeEntityProvider",description:"API reference for catalogModuleGcpGkeEntityProvider",source:"@site/../docs/reference/plugin-catalog-backend-module-gcp.catalogmodulegcpgkeentityprovider.md",sourceDirName:"reference",slug:"/reference/plugin-catalog-backend-module-gcp.catalogmodulegcpgkeentityprovider",permalink:"/docs/reference/plugin-catalog-backend-module-gcp.catalogmodulegcpgkeentityprovider",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-catalog-backend-module-gcp.catalogmodulegcpgkeentityprovider.md",tags:[],version:"current",frontMatter:{id:"plugin-catalog-backend-module-gcp.catalogmodulegcpgkeentityprovider",title:"catalogModuleGcpGkeEntityProvider",description:"API reference for catalogModuleGcpGkeEntityProvider"}},i={},l=[];function s(e){const t=Object.assign({p:"p",a:"a",code:"code",strong:"strong",pre:"pre"},(0,o.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-catalog-backend-module-gcp",children:(0,n.jsx)(t.code,{children:"@backstage/plugin-catalog-backend-module-gcp"})})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-catalog-backend-module-gcp.catalogmodulegcpgkeentityprovider",children:(0,n.jsx)(t.code,{children:"catalogModuleGcpGkeEntityProvider"})})]}),"\n",(0,n.jsx)(t.p,{children:"Registers the GcpGkeEntityProvider with the catalog processing extension point."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:'catalogModuleGcpGkeEntityProvider: () => import("@backstage/backend-plugin-api").BackendFeature\n'})})]})}const f=function(e={}){const{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(s,e)})):s(e)}},371426:(e,t,r)=>{var n=r(827378),o=Symbol.for("react.element"),c=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,r){var n,c={},l=null,s=null;for(n in void 0!==r&&(l=""+r),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(s=t.ref),t)u.call(t,n)&&!i.hasOwnProperty(n)&&(c[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===c[n]&&(c[n]=t[n]);return{$$typeof:o,type:e,key:l,ref:s,props:c,_owner:a.current}}t.Fragment=c,t.jsx=l,t.jsxs=l},541535:(e,t)=>{var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),i=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),s=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),d=Symbol.iterator;var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,m={};function h(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||y}function v(){}function b(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||y}h.prototype.isReactComponent={},h.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=h.prototype;var _=b.prototype=new v;_.constructor=b,g(_,h.prototype),_.isPureReactComponent=!0;var k=Array.isArray,E=Object.prototype.hasOwnProperty,S={current:null},j={key:!0,ref:!0,__self:!0,__source:!0};function x(e,t,n){var o,c={},u=null,a=null;if(null!=t)for(o in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(u=""+t.key),t)E.call(t,o)&&!j.hasOwnProperty(o)&&(c[o]=t[o]);var i=arguments.length-2;if(1===i)c.children=n;else if(1<i){for(var l=Array(i),s=0;s<i;s++)l[s]=arguments[s+2];c.children=l}if(e&&e.defaultProps)for(o in i=e.defaultProps)void 0===c[o]&&(c[o]=i[o]);return{$$typeof:r,type:e,key:u,ref:a,props:c,_owner:S.current}}function w(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var P=/\/+/g;function R(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function C(e,t,o,c,u){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var i=!1;if(null===e)i=!0;else switch(a){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case r:case n:i=!0}}if(i)return u=u(i=e),e=""===c?"."+R(i,0):c,k(u)?(o="",null!=e&&(o=e.replace(P,"$&/")+"/"),C(u,t,o,"",(function(e){return e}))):null!=u&&(w(u)&&(u=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(u,o+(!u.key||i&&i.key===u.key?"":(""+u.key).replace(P,"$&/")+"/")+e)),t.push(u)),1;if(i=0,c=""===c?".":c+":",k(e))for(var l=0;l<e.length;l++){var s=c+R(a=e[l],l);i+=C(a,t,o,s,u)}else if(s=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof s)for(e=s.call(e),l=0;!(a=e.next()).done;)i+=C(a=a.value,t,o,s=c+R(a,l++),u);else if("object"===a)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function $(e,t,r){if(null==e)return e;var n=[],o=0;return C(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function O(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var G={current:null},I={transition:null},M={ReactCurrentDispatcher:G,ReactCurrentBatchConfig:I,ReactCurrentOwner:S};t.Children={map:$,forEach:function(e,t,r){$(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return $(e,(function(){t++})),t},toArray:function(e){return $(e,(function(e){return e}))||[]},only:function(e){if(!w(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=h,t.Fragment=o,t.Profiler=u,t.PureComponent=b,t.StrictMode=c,t.Suspense=s,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=M,t.cloneElement=function(e,t,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=g({},e.props),c=e.key,u=e.ref,a=e._owner;if(null!=t){if(void 0!==t.ref&&(u=t.ref,a=S.current),void 0!==t.key&&(c=""+t.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(l in t)E.call(t,l)&&!j.hasOwnProperty(l)&&(o[l]=void 0===t[l]&&void 0!==i?i[l]:t[l])}var l=arguments.length-2;if(1===l)o.children=n;else if(1<l){i=Array(l);for(var s=0;s<l;s++)i[s]=arguments[s+2];o.children=i}return{$$typeof:r,type:e.type,key:c,ref:u,props:o,_owner:a}},t.createContext=function(e){return(e={$$typeof:i,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},t.createElement=x,t.createFactory=function(e){var t=x.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:l,render:e}},t.isValidElement=w,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:O}},t.memo=function(e,t){return{$$typeof:f,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=I.transition;I.transition={};try{e()}finally{I.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return G.current.useCallback(e,t)},t.useContext=function(e){return G.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return G.current.useDeferredValue(e)},t.useEffect=function(e,t){return G.current.useEffect(e,t)},t.useId=function(){return G.current.useId()},t.useImperativeHandle=function(e,t,r){return G.current.useImperativeHandle(e,t,r)},t.useInsertionEffect=function(e,t){return G.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return G.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return G.current.useMemo(e,t)},t.useReducer=function(e,t,r){return G.current.useReducer(e,t,r)},t.useRef=function(e){return G.current.useRef(e)},t.useState=function(e){return G.current.useState(e)},t.useSyncExternalStore=function(e,t,r){return G.current.useSyncExternalStore(e,t,r)},t.useTransition=function(){return G.current.useTransition()},t.version="18.2.0"},827378:(e,t,r)=>{e.exports=r(541535)},824246:(e,t,r)=>{e.exports=r(371426)},511151:(e,t,r)=>{r.d(t,{Zo:()=>a,ah:()=>c});var n=r(667294);const o=n.createContext({});function c(e){const t=n.useContext(o);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const u={};function a({components:e,children:t,disableParentContext:r}){let a;return a=r?"function"==typeof e?e({}):e||u:c(e),n.createElement(o.Provider,{value:a},t)}}}]);