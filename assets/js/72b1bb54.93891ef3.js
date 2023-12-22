/*! For license information please see 72b1bb54.93891ef3.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[165162],{485615:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>a,contentTitle:()=>s,default:()=>d,frontMatter:()=>c,metadata:()=>i,toc:()=>l});var n=t(824246),o=t(511151);const c={id:"backend-common.gerriturlreader",title:"GerritUrlReader",description:"API reference for GerritUrlReader"},s=void 0,i={id:"reference/backend-common.gerriturlreader",title:"GerritUrlReader",description:"API reference for GerritUrlReader",source:"@site/../docs/reference/backend-common.gerriturlreader.md",sourceDirName:"reference",slug:"/reference/backend-common.gerriturlreader",permalink:"/docs/reference/backend-common.gerriturlreader",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/backend-common.gerriturlreader.md",tags:[],version:"current",frontMatter:{id:"backend-common.gerriturlreader",title:"GerritUrlReader",description:"API reference for GerritUrlReader"}},a={},l=[{value:"Remarks",id:"remarks",level:2},{value:"Constructors",id:"constructors",level:2},{value:"Properties",id:"properties",level:2},{value:"Methods",id:"methods",level:2}];function u(e){const r=Object.assign({p:"p",a:"a",code:"code",strong:"strong",pre:"pre",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,o.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/backend-common",children:(0,n.jsx)(r.code,{children:"@backstage/backend-common"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/backend-common.gerriturlreader",children:(0,n.jsx)(r.code,{children:"GerritUrlReader"})})]}),"\n",(0,n.jsxs)(r.p,{children:["Implements a ",(0,n.jsx)(r.a,{href:"/docs/reference/backend-plugin-api.urlreaderservice",children:"UrlReaderService"})," for files in Gerrit."]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"class GerritUrlReader implements UrlReader \n"})}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Implements:"})," ",(0,n.jsx)(r.a,{href:"/docs/reference/backend-plugin-api.urlreaderservice",children:"UrlReader"})]}),"\n",(0,n.jsx)(r.h2,{id:"remarks",children:"Remarks"}),"\n",(0,n.jsx)(r.p,{children:"To be able to link to Git contents for Gerrit providers in a user friendly way we are depending on that there is a Gitiles installation somewhere that we can link to. It is perfectly possible to integrate Gerrit with Backstage without Gitiles since all API calls goes directly to Gerrit. However if Gitiles is configured, readTree will use it to fetch an archive instead of cloning the repository."}),"\n",(0,n.jsx)(r.p,{children:'The "host" variable in the config is the Gerrit host. The address where Gitiles is installed may be on the same host but it could be on a separate host. For example a Gerrit instance could be hosted on "gerrit-review.company.com" but the repos could be browsable on a separate host, e.g. "gerrit.company.com" and the human readable URL would then not point to the API host.'}),"\n",(0,n.jsx)(r.h2,{id:"constructors",children:"Constructors"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Constructor"}),(0,n.jsx)(r.th,{children:"Modifiers"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/docs/reference/backend-common.gerriturlreader._constructor_",children:"(constructor)(integration, deps, workDir)"})}),(0,n.jsx)(r.td,{}),(0,n.jsxs)(r.td,{children:["Constructs a new instance of the ",(0,n.jsx)(r.code,{children:"GerritUrlReader"})," class"]})]})})]}),"\n",(0,n.jsx)(r.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Property"}),(0,n.jsx)(r.th,{children:"Modifiers"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/docs/reference/backend-common.gerriturlreader.factory",children:"factory"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"static"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/docs/reference/backend-common.readerfactory",children:"ReaderFactory"})}),(0,n.jsx)(r.td,{})]})})]}),"\n",(0,n.jsx)(r.h2,{id:"methods",children:"Methods"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Method"}),(0,n.jsx)(r.th,{children:"Modifiers"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/docs/reference/backend-common.gerriturlreader.read",children:"read(url)"})}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/docs/reference/backend-common.gerriturlreader.readtree",children:"readTree(url, options)"})}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/docs/reference/backend-common.gerriturlreader.readurl",children:"readUrl(url, options)"})}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/docs/reference/backend-common.gerriturlreader.search",children:"search()"})}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/docs/reference/backend-common.gerriturlreader.tostring",children:"toString()"})}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{})]})]})]})]})}const d=function(e={}){const{wrapper:r}=Object.assign({},(0,o.ah)(),e.components);return r?(0,n.jsx)(r,Object.assign({},e,{children:(0,n.jsx)(u,e)})):u(e)}},371426:(e,r,t)=>{var n=t(827378),o=Symbol.for("react.element"),c=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function l(e,r,t){var n,c={},l=null,u=null;for(n in void 0!==t&&(l=""+t),void 0!==r.key&&(l=""+r.key),void 0!==r.ref&&(u=r.ref),r)s.call(r,n)&&!a.hasOwnProperty(n)&&(c[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===c[n]&&(c[n]=r[n]);return{$$typeof:o,type:e,key:l,ref:u,props:c,_owner:i.current}}r.Fragment=c,r.jsx=l,r.jsxs=l},541535:(e,r)=>{var t=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),a=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),h=Symbol.iterator;var p={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,y={};function j(e,r,t){this.props=e,this.context=r,this.refs=y,this.updater=t||p}function x(){}function b(e,r,t){this.props=e,this.context=r,this.refs=y,this.updater=t||p}j.prototype.isReactComponent={},j.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,r,"setState")},j.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},x.prototype=j.prototype;var v=b.prototype=new x;v.constructor=b,m(v,j.prototype),v.isPureReactComponent=!0;var _=Array.isArray,g=Object.prototype.hasOwnProperty,k={current:null},w={key:!0,ref:!0,__self:!0,__source:!0};function R(e,r,n){var o,c={},s=null,i=null;if(null!=r)for(o in void 0!==r.ref&&(i=r.ref),void 0!==r.key&&(s=""+r.key),r)g.call(r,o)&&!w.hasOwnProperty(o)&&(c[o]=r[o]);var a=arguments.length-2;if(1===a)c.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];c.children=l}if(e&&e.defaultProps)for(o in a=e.defaultProps)void 0===c[o]&&(c[o]=a[o]);return{$$typeof:t,type:e,key:s,ref:i,props:c,_owner:k.current}}function S(e){return"object"==typeof e&&null!==e&&e.$$typeof===t}var E=/\/+/g;function C(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function P(e,r,o,c,s){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var a=!1;if(null===e)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case t:case n:a=!0}}if(a)return s=s(a=e),e=""===c?"."+C(a,0):c,_(s)?(o="",null!=e&&(o=e.replace(E,"$&/")+"/"),P(s,r,o,"",(function(e){return e}))):null!=s&&(S(s)&&(s=function(e,r){return{$$typeof:t,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(s,o+(!s.key||a&&a.key===s.key?"":(""+s.key).replace(E,"$&/")+"/")+e)),r.push(s)),1;if(a=0,c=""===c?".":c+":",_(e))for(var l=0;l<e.length;l++){var u=c+C(i=e[l],l);a+=P(i,r,o,u,s)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=h&&e[h]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),l=0;!(i=e.next()).done;)a+=P(i=i.value,r,o,u=c+C(i,l++),s);else if("object"===i)throw r=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r)+"). If you meant to render a collection of children, use an array instead.");return a}function $(e,r,t){if(null==e)return e;var n=[],o=0;return P(e,n,"","",(function(e){return r.call(t,e,o++)})),n}function O(e){if(-1===e._status){var r=e._result;(r=r()).then((function(r){0!==e._status&&-1!==e._status||(e._status=1,e._result=r)}),(function(r){0!==e._status&&-1!==e._status||(e._status=2,e._result=r)})),-1===e._status&&(e._status=0,e._result=r)}if(1===e._status)return e._result.default;throw e._result}var U={current:null},I={transition:null},G={ReactCurrentDispatcher:U,ReactCurrentBatchConfig:I,ReactCurrentOwner:k};r.Children={map:$,forEach:function(e,r,t){$(e,(function(){r.apply(this,arguments)}),t)},count:function(e){var r=0;return $(e,(function(){r++})),r},toArray:function(e){return $(e,(function(e){return e}))||[]},only:function(e){if(!S(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},r.Component=j,r.Fragment=o,r.Profiler=s,r.PureComponent=b,r.StrictMode=c,r.Suspense=u,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=G,r.cloneElement=function(e,r,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=m({},e.props),c=e.key,s=e.ref,i=e._owner;if(null!=r){if(void 0!==r.ref&&(s=r.ref,i=k.current),void 0!==r.key&&(c=""+r.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in r)g.call(r,l)&&!w.hasOwnProperty(l)&&(o[l]=void 0===r[l]&&void 0!==a?a[l]:r[l])}var l=arguments.length-2;if(1===l)o.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];o.children=a}return{$$typeof:t,type:e.type,key:c,ref:s,props:o,_owner:i}},r.createContext=function(e){return(e={$$typeof:a,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},r.createElement=R,r.createFactory=function(e){var r=R.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:l,render:e}},r.isValidElement=S,r.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:O}},r.memo=function(e,r){return{$$typeof:d,type:e,compare:void 0===r?null:r}},r.startTransition=function(e){var r=I.transition;I.transition={};try{e()}finally{I.transition=r}},r.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},r.useCallback=function(e,r){return U.current.useCallback(e,r)},r.useContext=function(e){return U.current.useContext(e)},r.useDebugValue=function(){},r.useDeferredValue=function(e){return U.current.useDeferredValue(e)},r.useEffect=function(e,r){return U.current.useEffect(e,r)},r.useId=function(){return U.current.useId()},r.useImperativeHandle=function(e,r,t){return U.current.useImperativeHandle(e,r,t)},r.useInsertionEffect=function(e,r){return U.current.useInsertionEffect(e,r)},r.useLayoutEffect=function(e,r){return U.current.useLayoutEffect(e,r)},r.useMemo=function(e,r){return U.current.useMemo(e,r)},r.useReducer=function(e,r,t){return U.current.useReducer(e,r,t)},r.useRef=function(e){return U.current.useRef(e)},r.useState=function(e){return U.current.useState(e)},r.useSyncExternalStore=function(e,r,t){return U.current.useSyncExternalStore(e,r,t)},r.useTransition=function(){return U.current.useTransition()},r.version="18.2.0"},827378:(e,r,t)=>{e.exports=t(541535)},824246:(e,r,t)=>{e.exports=t(371426)},511151:(e,r,t)=>{t.d(r,{Zo:()=>i,ah:()=>c});var n=t(667294);const o=n.createContext({});function c(e){const r=n.useContext(o);return n.useMemo((()=>"function"==typeof e?e(r):{...r,...e}),[r,e])}const s={};function i({components:e,children:r,disableParentContext:t}){let i;return i=t?"function"==typeof e?e({}):e||s:c(e),n.createElement(o.Provider,{value:i},r)}}}]);