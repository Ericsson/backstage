/*! For license information please see a0ecbaf5.b8cc7310.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[88850],{564202:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var r=n(824246),o=n(511151);const a={id:"debugging",title:"Debugging Backstage",description:"How logging works and how to configure it"},i=void 0,c={id:"tooling/local-dev/debugging",title:"Debugging Backstage",description:"How logging works and how to configure it",source:"@site/../docs/tooling/local-dev/debugging.md",sourceDirName:"tooling/local-dev",slug:"/tooling/local-dev/debugging",permalink:"/docs/tooling/local-dev/debugging",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/tooling/local-dev/debugging.md",tags:[],version:"current",frontMatter:{id:"debugging",title:"Debugging Backstage",description:"How logging works and how to configure it"},sidebar:"docs",previous:{title:"Linking in Local Packages",permalink:"/docs/tooling/local-dev/linking-local-packages"},next:{title:"Package Metadata",permalink:"/docs/tooling/package-metadata"}},s={},l=[{value:"Debugger",id:"debugger",level:2},{value:"VSCode",id:"vscode",level:3},{value:"WebStorm",id:"webstorm",level:3}];function u(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"When configuring Backstage for the first time locally, or contributing new code changes,\nit can be helpful to change the logging levels to better understand how the system is functioning."}),"\n",(0,r.jsxs)(t.p,{children:["Backstage uses the ",(0,r.jsx)(t.a,{href:"https://github.com/winstonjs/winston",children:"Winston logging library"})," and supports\n",(0,r.jsxs)(t.a,{href:"https://github.com/winstonjs/winston#logging-levels",children:["the ",(0,r.jsx)(t.code,{children:"npm"})," logging levels"]})," such as\n",(0,r.jsx)(t.code,{children:"warn"}),", ",(0,r.jsx)(t.code,{children:"info"})," (the default), or ",(0,r.jsx)(t.code,{children:"debug"}),"."]}),"\n",(0,r.jsx)(t.p,{children:"The logging instance is also passed to plugins for them to expose information about\ntheir processing as well."}),"\n",(0,r.jsxs)(t.p,{children:["Changing the level can be done by setting the ",(0,r.jsx)(t.code,{children:"LOG_LEVEL"})," environment variable."]}),"\n",(0,r.jsx)(t.p,{children:"For example, to turn on debug logs when running the app locally, you can run:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:"LOG_LEVEL=debug yarn dev\n"})}),"\n",(0,r.jsx)(t.p,{children:"The resulting log should now have more information available for debugging:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-text",children:'[1] 2023-04-12T00:51:42.468Z catalog debug Skipped stitching of domain:default/artists, no changes type=plugin\n[1] 2023-04-12T00:51:42.469Z catalog debug Skipped stitching of domain:default/playback, no changes type=plugin\n[1] 2023-04-12T00:51:42.470Z catalog debug Processing system:default/podcast type=plugin\n[1] 2023-04-12T00:51:42.470Z catalog debug Processing group:default/infrastructure type=plugin\n[1] 2023-04-12T00:51:42.470Z catalog debug Processing group:default/boxoffice type=plugin\n[1] 2023-04-12T00:51:42.470Z catalog debug Processing group:default/backstage type=plugin\n[1] 2023-04-12T00:51:42.470Z catalog debug Processing group:default/team-a type=plugin\n[1] 2023-04-12T00:51:42.519Z catalog debug Skipped stitching of group:default/acme-corp, no changes type=plugin\n[1] 2023-04-12T00:51:42.520Z catalog debug Skipped stitching of group:default/backstage, no changes type=plugin\n[1] 2023-04-12T00:51:42.521Z catalog debug Skipped stitching of group:default/boxoffice, no changes type=plugin\n[1] 2023-04-12T00:51:42.523Z catalog debug Processing user:default/breanna.davison type=plugin\n[1] 2023-04-12T00:51:42.524Z catalog debug Processing user:default/janelle.dawe type=plugin\n[1] 2023-04-12T00:51:42.524Z catalog debug Processing user:default/nigel.manning type=plugin\n[1] 2023-04-12T00:51:42.524Z catalog debug Processing user:default/guest type=plugin\n[1] 2023-04-12T00:51:42.525Z catalog debug Processing group:default/team-b type=plugin\n[1] 2023-04-12T00:51:44.057Z search info Starting collation of explore tools type=plugin\n[1] 2023-04-12T00:51:44.095Z backstage info ::1 - - [12/Apr/2023:00:51:44 +0000] "GET /api/explore/tools HTTP/1.1" 200 - "-" "node-fetch/1.0 (+https://github.com/bitinn/node-fetch)" type=incomingRequest\n[1] 2023-04-12T00:51:44.100Z backstage info ::1 - - [12/Apr/2023:00:51:44 +0000] "GET /api/catalog/entities?filter=metadata.annotations.backstage.io%2Ftechdocs-ref&fields=kind,namespace,metadata.annotations,metadata.name,metadata.title,metadata.namespace,spec.type,spec.lifecycle,relations&offset=0&limit=500 HTTP/1.1" 200 - "-" "node-fetch/1.0 (+https://github.com/bitinn/node-fetch)" type=incomingRequest\n[1] 2023-04-12T00:51:44.104Z search info Finished collation of explore tools type=plugin\n[1] 2023-04-12T00:51:44.118Z search info Collating documents for tools succeeded type=plugin documentType=tools\n[1] 2023-04-12T00:51:44.119Z backstage debug task: search_index_tools will next occur around 2023-04-11T21:01:44.118-04:00 type=taskManager task=search_index_tools\n'})}),"\n",(0,r.jsx)(t.h2,{id:"debugger",children:"Debugger"}),"\n",(0,r.jsx)(t.h3,{id:"vscode",children:"VSCode"}),"\n",(0,r.jsxs)(t.p,{children:["In your ",(0,r.jsx)(t.code,{children:"launch.json"}),", add a new entry with the following,"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-jsonc",children:'{\n    "name": "Start Backend",\n    "type": "node",\n    "request": "launch",\n    "args": [\n        "package",\n        "start"\n    ],\n    "cwd": "${workspaceFolder}/packages/backend",\n    "program": "${workspaceFolder}/node_modules/.bin/backstage-cli",\n    "skipFiles": [\n        "<node_internals>/**"\n    ],\n    "console": "integratedTerminal"\n},\n'})}),"\n",(0,r.jsx)(t.h3,{id:"webstorm",children:"WebStorm"}),"\n",(0,r.jsx)(t.p,{children:"This section describes the process for enabling run configurations for Backstage in WebStorm.\nRun configurations enable the use of debugging functionality such as steppers and breakpoints."}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["Select ",(0,r.jsx)(t.code,{children:"Edit Configurations"})," in the ",(0,r.jsx)(t.code,{children:"Run"})," dropdown menu. Click the plus sign to add a new\nconfiguration, then select ",(0,r.jsx)(t.code,{children:"Node.js"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:["In ",(0,r.jsx)(t.code,{children:"Working directory"}),", input ",(0,r.jsx)(t.code,{children:"{PROJECT_DIR}/packages/backend"}),".\nReplace ",(0,r.jsx)(t.code,{children:"{PROJECT_DIR}"})," with the path to your Backstage repo."]}),"\n",(0,r.jsxs)(t.li,{children:["In ",(0,r.jsx)(t.code,{children:"JavaScript file"}),", input ",(0,r.jsx)(t.code,{children:"{PROJECT_DIR}/node_modules/@backstage/cli/bin/backstage-cli"}),".\nReplace ",(0,r.jsx)(t.code,{children:"{PROJECT_DIR}"})," with the path to your Backstage repo."]}),"\n",(0,r.jsxs)(t.li,{children:["In ",(0,r.jsx)(t.code,{children:"Application parameters"}),", input ",(0,r.jsx)(t.code,{children:"package start"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:["Optionally, for ",(0,r.jsx)(t.code,{children:"Environment Variables"}),", input ",(0,r.jsx)(t.code,{children:"LOG_LEVEL=debug"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:["Click ",(0,r.jsx)(t.code,{children:"Apply"})," to save the changes."]}),"\n",(0,r.jsxs)(t.li,{children:["With the newly-created configuration selected, use the ",(0,r.jsx)(t.code,{children:"Run"})," or ",(0,r.jsx)(t.code,{children:"Debug"})," icons on the\ntoolbar to execute the newly created configuration."]}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},371426:(e,t,n)=>{var r=n(827378),o=Symbol.for("react.element"),a=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var r,a={},l=null,u=null;for(r in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(u=t.ref),t)i.call(t,r)&&!s.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===a[r]&&(a[r]=t[r]);return{$$typeof:o,type:e,key:l,ref:u,props:a,_owner:c.current}}t.Fragment=a,t.jsx=l,t.jsxs=l},541535:(e,t)=>{var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),s=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),f=Symbol.iterator;var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,y={};function b(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||g}function m(){}function k(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||g}b.prototype.isReactComponent={},b.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},m.prototype=b.prototype;var v=k.prototype=new m;v.constructor=k,h(v,b.prototype),v.isPureReactComponent=!0;var x=Array.isArray,_=Object.prototype.hasOwnProperty,j={current:null},w={key:!0,ref:!0,__self:!0,__source:!0};function S(e,t,r){var o,a={},i=null,c=null;if(null!=t)for(o in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(i=""+t.key),t)_.call(t,o)&&!w.hasOwnProperty(o)&&(a[o]=t[o]);var s=arguments.length-2;if(1===s)a.children=r;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];a.children=l}if(e&&e.defaultProps)for(o in s=e.defaultProps)void 0===a[o]&&(a[o]=s[o]);return{$$typeof:n,type:e,key:i,ref:c,props:a,_owner:j.current}}function T(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var E=/\/+/g;function R(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function C(e,t,o,a,i){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var s=!1;if(null===e)s=!0;else switch(c){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case n:case r:s=!0}}if(s)return i=i(s=e),e=""===a?"."+R(s,0):a,x(i)?(o="",null!=e&&(o=e.replace(E,"$&/")+"/"),C(i,t,o,"",(function(e){return e}))):null!=i&&(T(i)&&(i=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,o+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(E,"$&/")+"/")+e)),t.push(i)),1;if(s=0,a=""===a?".":a+":",x(e))for(var l=0;l<e.length;l++){var u=a+R(c=e[l],l);s+=C(c,t,o,u,i)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),l=0;!(c=e.next()).done;)s+=C(c=c.value,t,o,u=a+R(c,l++),i);else if("object"===c)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function P(e,t,n){if(null==e)return e;var r=[],o=0;return C(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function O(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var $={current:null},Z={transition:null},I={ReactCurrentDispatcher:$,ReactCurrentBatchConfig:Z,ReactCurrentOwner:j};t.Children={map:P,forEach:function(e,t,n){P(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return P(e,(function(){t++})),t},toArray:function(e){return P(e,(function(e){return e}))||[]},only:function(e){if(!T(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=b,t.Fragment=o,t.Profiler=i,t.PureComponent=k,t.StrictMode=a,t.Suspense=u,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=I,t.cloneElement=function(e,t,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=h({},e.props),a=e.key,i=e.ref,c=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,c=j.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)_.call(t,l)&&!w.hasOwnProperty(l)&&(o[l]=void 0===t[l]&&void 0!==s?s[l]:t[l])}var l=arguments.length-2;if(1===l)o.children=r;else if(1<l){s=Array(l);for(var u=0;u<l;u++)s[u]=arguments[u+2];o.children=s}return{$$typeof:n,type:e.type,key:a,ref:i,props:o,_owner:c}},t.createContext=function(e){return(e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:c,_context:e},e.Consumer=e},t.createElement=S,t.createFactory=function(e){var t=S.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:l,render:e}},t.isValidElement=T,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:O}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=Z.transition;Z.transition={};try{e()}finally{Z.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return $.current.useCallback(e,t)},t.useContext=function(e){return $.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return $.current.useDeferredValue(e)},t.useEffect=function(e,t){return $.current.useEffect(e,t)},t.useId=function(){return $.current.useId()},t.useImperativeHandle=function(e,t,n){return $.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return $.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return $.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return $.current.useMemo(e,t)},t.useReducer=function(e,t,n){return $.current.useReducer(e,t,n)},t.useRef=function(e){return $.current.useRef(e)},t.useState=function(e){return $.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return $.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return $.current.useTransition()},t.version="18.2.0"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>i});var r=n(667294);const o={},a=r.createContext(o);function i(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);