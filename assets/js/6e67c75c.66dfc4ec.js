/*! For license information please see 6e67c75c.66dfc4ec.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[145401],{888967:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>i,contentTitle:()=>a,default:()=>f,frontMatter:()=>c,metadata:()=>u,toc:()=>s});var t=n(824246),o=n(511151);const c={id:"backend-common.cachemanager.forplugin",title:"CacheManager.forPlugin()",description:"API reference for CacheManager.forPlugin()"},a=void 0,u={id:"reference/backend-common.cachemanager.forplugin",title:"CacheManager.forPlugin()",description:"API reference for CacheManager.forPlugin()",source:"@site/../docs/reference/backend-common.cachemanager.forplugin.md",sourceDirName:"reference",slug:"/reference/backend-common.cachemanager.forplugin",permalink:"/docs/reference/backend-common.cachemanager.forplugin",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/backend-common.cachemanager.forplugin.md",tags:[],version:"current",frontMatter:{id:"backend-common.cachemanager.forplugin",title:"CacheManager.forPlugin()",description:"API reference for CacheManager.forPlugin()"}},i={},s=[{value:"Parameters",id:"parameters",level:2}];function l(e){const r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/backend-common",children:(0,t.jsx)(r.code,{children:"@backstage/backend-common"})})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/backend-common.cachemanager",children:(0,t.jsx)(r.code,{children:"CacheManager"})})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/backend-common.cachemanager.forplugin",children:(0,t.jsx)(r.code,{children:"forPlugin"})})]}),"\n",(0,t.jsx)(r.p,{children:"Generates a PluginCacheManager for consumption by plugins."}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:"forPlugin(pluginId: string): PluginCacheManager;\n"})}),"\n",(0,t.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Parameter"}),(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsx)(r.tbody,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"pluginId"}),(0,t.jsx)(r.td,{children:"string"}),(0,t.jsx)(r.td,{children:"The plugin that the cache manager should be created for. Plugin names should be unique."})]})})]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.a,{href:"/docs/reference/backend-common.plugincachemanager",children:"PluginCacheManager"})})]})}function f(e={}){const{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},371426:(e,r,n)=>{var t=n(827378),o=Symbol.for("react.element"),c=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,u=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function s(e,r,n){var t,c={},s=null,l=null;for(t in void 0!==n&&(s=""+n),void 0!==r.key&&(s=""+r.key),void 0!==r.ref&&(l=r.ref),r)a.call(r,t)&&!i.hasOwnProperty(t)&&(c[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===c[t]&&(c[t]=r[t]);return{$$typeof:o,type:e,key:s,ref:l,props:c,_owner:u.current}}r.Fragment=c,r.jsx=s,r.jsxs=s},541535:(e,r)=>{var n=Symbol.for("react.element"),t=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),i=Symbol.for("react.context"),s=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),p=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,y={};function g(e,r,n){this.props=e,this.context=r,this.refs=y,this.updater=n||h}function b(){}function _(e,r,n){this.props=e,this.context=r,this.refs=y,this.updater=n||h}g.prototype.isReactComponent={},g.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,r,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=g.prototype;var v=_.prototype=new b;v.constructor=_,m(v,g.prototype),v.isPureReactComponent=!0;var j=Array.isArray,x=Object.prototype.hasOwnProperty,k={current:null},S={key:!0,ref:!0,__self:!0,__source:!0};function C(e,r,t){var o,c={},a=null,u=null;if(null!=r)for(o in void 0!==r.ref&&(u=r.ref),void 0!==r.key&&(a=""+r.key),r)x.call(r,o)&&!S.hasOwnProperty(o)&&(c[o]=r[o]);var i=arguments.length-2;if(1===i)c.children=t;else if(1<i){for(var s=Array(i),l=0;l<i;l++)s[l]=arguments[l+2];c.children=s}if(e&&e.defaultProps)for(o in i=e.defaultProps)void 0===c[o]&&(c[o]=i[o]);return{$$typeof:n,type:e,key:a,ref:u,props:c,_owner:k.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var E=/\/+/g;function w(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function R(e,r,o,c,a){var u=typeof e;"undefined"!==u&&"boolean"!==u||(e=null);var i=!1;if(null===e)i=!0;else switch(u){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case n:case t:i=!0}}if(i)return a=a(i=e),e=""===c?"."+w(i,0):c,j(a)?(o="",null!=e&&(o=e.replace(E,"$&/")+"/"),R(a,r,o,"",(function(e){return e}))):null!=a&&(P(a)&&(a=function(e,r){return{$$typeof:n,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(a,o+(!a.key||i&&i.key===a.key?"":(""+a.key).replace(E,"$&/")+"/")+e)),r.push(a)),1;if(i=0,c=""===c?".":c+":",j(e))for(var s=0;s<e.length;s++){var l=c+w(u=e[s],s);i+=R(u,r,o,l,a)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),s=0;!(u=e.next()).done;)i+=R(u=u.value,r,o,l=c+w(u,s++),a);else if("object"===u)throw r=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r)+"). If you meant to render a collection of children, use an array instead.");return i}function $(e,r,n){if(null==e)return e;var t=[],o=0;return R(e,t,"","",(function(e){return r.call(n,e,o++)})),t}function O(e){if(-1===e._status){var r=e._result;(r=r()).then((function(r){0!==e._status&&-1!==e._status||(e._status=1,e._result=r)}),(function(r){0!==e._status&&-1!==e._status||(e._status=2,e._result=r)})),-1===e._status&&(e._status=0,e._result=r)}if(1===e._status)return e._result.default;throw e._result}var I={current:null},M={transition:null},T={ReactCurrentDispatcher:I,ReactCurrentBatchConfig:M,ReactCurrentOwner:k};r.Children={map:$,forEach:function(e,r,n){$(e,(function(){r.apply(this,arguments)}),n)},count:function(e){var r=0;return $(e,(function(){r++})),r},toArray:function(e){return $(e,(function(e){return e}))||[]},only:function(e){if(!P(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},r.Component=g,r.Fragment=o,r.Profiler=a,r.PureComponent=_,r.StrictMode=c,r.Suspense=l,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T,r.cloneElement=function(e,r,t){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=m({},e.props),c=e.key,a=e.ref,u=e._owner;if(null!=r){if(void 0!==r.ref&&(a=r.ref,u=k.current),void 0!==r.key&&(c=""+r.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(s in r)x.call(r,s)&&!S.hasOwnProperty(s)&&(o[s]=void 0===r[s]&&void 0!==i?i[s]:r[s])}var s=arguments.length-2;if(1===s)o.children=t;else if(1<s){i=Array(s);for(var l=0;l<s;l++)i[l]=arguments[l+2];o.children=i}return{$$typeof:n,type:e.type,key:c,ref:a,props:o,_owner:u}},r.createContext=function(e){return(e={$$typeof:i,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:u,_context:e},e.Consumer=e},r.createElement=C,r.createFactory=function(e){var r=C.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:s,render:e}},r.isValidElement=P,r.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:O}},r.memo=function(e,r){return{$$typeof:f,type:e,compare:void 0===r?null:r}},r.startTransition=function(e){var r=M.transition;M.transition={};try{e()}finally{M.transition=r}},r.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},r.useCallback=function(e,r){return I.current.useCallback(e,r)},r.useContext=function(e){return I.current.useContext(e)},r.useDebugValue=function(){},r.useDeferredValue=function(e){return I.current.useDeferredValue(e)},r.useEffect=function(e,r){return I.current.useEffect(e,r)},r.useId=function(){return I.current.useId()},r.useImperativeHandle=function(e,r,n){return I.current.useImperativeHandle(e,r,n)},r.useInsertionEffect=function(e,r){return I.current.useInsertionEffect(e,r)},r.useLayoutEffect=function(e,r){return I.current.useLayoutEffect(e,r)},r.useMemo=function(e,r){return I.current.useMemo(e,r)},r.useReducer=function(e,r,n){return I.current.useReducer(e,r,n)},r.useRef=function(e){return I.current.useRef(e)},r.useState=function(e){return I.current.useState(e)},r.useSyncExternalStore=function(e,r,n){return I.current.useSyncExternalStore(e,r,n)},r.useTransition=function(){return I.current.useTransition()},r.version="18.2.0"},827378:(e,r,n)=>{e.exports=n(541535)},824246:(e,r,n)=>{e.exports=n(371426)},511151:(e,r,n)=>{n.d(r,{Z:()=>u,a:()=>a});var t=n(667294);const o={},c=t.createContext(o);function a(e){const r=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function u(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),t.createElement(c.Provider,{value:r},e.children)}}}]);