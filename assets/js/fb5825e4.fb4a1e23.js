/*! For license information please see fb5825e4.fb4a1e23.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[294841],{769658:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>u});var r=n(824246),o=n(511151);const i={id:"index",title:"Backend System Architecture",sidebar_label:"Overview",description:"The structure and architecture of the new Backend System and its component parts"},s=void 0,a={id:"backend-system/architecture/index",title:"Backend System Architecture",description:"The structure and architecture of the new Backend System and its component parts",source:"@site/../docs/backend-system/architecture/01-index.md",sourceDirName:"backend-system/architecture",slug:"/backend-system/architecture/index",permalink:"/docs/backend-system/architecture/index",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/backend-system/architecture/01-index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"index",title:"Backend System Architecture",sidebar_label:"Overview",description:"The structure and architecture of the new Backend System and its component parts"},sidebar:"docs",previous:{title:"Introduction",permalink:"/docs/backend-system/"},next:{title:"Services",permalink:"/docs/backend-system/architecture/services"}},c={},u=[{value:"Building Blocks",id:"building-blocks",level:2},{value:"Backend",id:"backend",level:3},{value:"Plugins",id:"plugins",level:3},{value:"Services",id:"services",level:3},{value:"Extension Points",id:"extension-points",level:3},{value:"Modules",id:"modules",level:3},{value:"Package structure",id:"package-structure",level:2}];function l(e){const t=Object.assign({blockquote:"blockquote",p:"p",strong:"strong",h2:"h2",img:"img",h3:"h3",a:"a",ul:"ul",li:"li",code:"code"},(0,o.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"NOTE: The new backend system is in alpha, and some plugins do not yet fully implement it."})}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"building-blocks",children:"Building Blocks"}),"\n",(0,r.jsx)(t.p,{children:"This section introduces the high-level building blocks upon which this new\nsystem is built. These are all concepts that exist in our current system in one\nway or another, but they have all been lifted up to be first class concerns in\nthe new system. Regardless of whether you are setting up your own backstage\ninstance, developing plugins, or extending plugins with new features, it is\nimportant to understand these concepts."}),"\n",(0,r.jsx)(t.p,{children:"The diagram below provides an overview of the different building blocks, and the other blocks that each of them interact with."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"backend system building blocks diagram",src:n(628731).Z+"",width:"642",height:"327"})}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"NOTE: These are all concepts that existed in our old backend system in one way or another, but they have now all been lifted up to be first class concerns."}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"backend",children:"Backend"}),"\n",(0,r.jsx)(t.p,{children:"This is the backend instance itself, which you can think of as the unit of deployment. It does not have any functionality in and of itself, but is simply responsible for wiring things together."}),"\n",(0,r.jsx)(t.p,{children:"It is up to you to decide how many different backends you want to deploy. You can have all features in a single one, or split things out into multiple smaller deployments. All depending on your need to scale and isolate individual features."}),"\n",(0,r.jsx)(t.h3,{id:"plugins",children:"Plugins"}),"\n",(0,r.jsx)(t.p,{children:"Plugins provide the actual features, just like in our existing system. They operate completely independently of each other. If plugins want to communicate with each other, they must do so over the wire. There can be no direct communication between plugins through code. Because of this constraint, each plugin can be considered to be its own microservice."}),"\n",(0,r.jsx)(t.h3,{id:"services",children:"Services"}),"\n",(0,r.jsx)(t.p,{children:"Services provide utilities to help make it simpler to implement plugins, so that each plugin doesn't need to implement everything from scratch. There are both many built-in services, like the ones for logging, database access, and reading configuration, but you can also import third-party services, or create your own."}),"\n",(0,r.jsx)(t.p,{children:"Services are also a customization point for individual backend installations. You can override services with your own implementations, as well as make smaller customizations to existing services."}),"\n",(0,r.jsx)(t.h3,{id:"extension-points",children:"Extension Points"}),"\n",(0,r.jsx)(t.p,{children:"Many plugins have ways in which you can extend them, for example entity providers for the Catalog, or custom actions for the Scaffolder. These extension patterns are now encoded into Extension Points."}),"\n",(0,r.jsx)(t.p,{children:"Extension Points look a little bit like services, since you depended on them just like you would a service. A key difference is that extension points are registered and provided by plugins or modules themselves, based on what customizations each of them want to expose."}),"\n",(0,r.jsx)(t.p,{children:"Extension Points are exported separately from the plugin or module instance itself, and it is possible to expose multiple different extension points at once. This makes it easier to evolve and deprecate individual Extension Points over time, rather than dealing with a single large API surface."}),"\n",(0,r.jsx)(t.h3,{id:"modules",children:"Modules"}),"\n",(0,r.jsx)(t.p,{children:"Modules use Extension Points to add new features to other plugins or modules. They might for example add an individual Catalog Entity Provider, or one or more Scaffolder Actions."}),"\n",(0,r.jsx)(t.p,{children:"Each module may only use Extension Points that belong to a single plugin, and the module must be deployed together with that plugin in the same backend instance. Modules may only communicate with their plugin or other modules through the registered extension points."}),"\n",(0,r.jsx)(t.p,{children:"Just like plugins, modules also have access to services and can depend on their own service implementations. They will however share services with the plugin that they extend - there are no module-specific service implementations."}),"\n",(0,r.jsx)(t.h2,{id:"package-structure",children:"Package structure"}),"\n",(0,r.jsxs)(t.p,{children:["A detailed explanation of the package architecture can be found in the\n",(0,r.jsx)(t.a,{href:"../../overview/architecture-overview/#package-architecture",children:"Backstage Architecture\nOverview"}),". The\nmost important packages to consider for this system are the following:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"plugin-<pluginId>-backend"})," houses the implementation of the backend plugins\nthemselves."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"plugin-<pluginId>-node"})," houses the backend plugin's extension points and any other utilities\nthat modules or other plugins might need."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"plugin-<pluginId>-backend-module-<moduleId>"})," houses the modules that extend\nthe plugin via its extension points."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"backend"})," is the backend itself that wires everything together to something\nthat you can deploy."]}),"\n"]})]})}const d=function(e={}){const{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?(0,r.jsx)(t,Object.assign({},e,{children:(0,r.jsx)(l,e)})):l(e)}},628731:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/architecture-building-blocks.drawio-0f4dbebe5a6bbf21216b2fc759985804.svg"},862525:e=>{var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var i,s,a=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),c=1;c<arguments.length;c++){for(var u in i=Object(arguments[c]))n.call(i,u)&&(a[u]=i[u]);if(t){s=t(i);for(var l=0;l<s.length;l++)r.call(i,s[l])&&(a[s[l]]=i[s[l]])}}return a}},371426:(e,t,n)=>{n(862525);var r=n(827378),o=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var i=Symbol.for;o=i("react.element"),t.Fragment=i("react.fragment")}var s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,n){var r,i={},u=null,l=null;for(r in void 0!==n&&(u=""+n),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(l=t.ref),t)a.call(t,r)&&!c.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:o,type:e,key:u,ref:l,props:i,_owner:s.current}}t.jsx=u,t.jsxs=u},541535:(e,t,n)=>{var r=n(862525),o=60103,i=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var s=60109,a=60110,c=60112;t.Suspense=60113;var u=60115,l=60116;if("function"==typeof Symbol&&Symbol.for){var d=Symbol.for;o=d("react.element"),i=d("react.portal"),t.Fragment=d("react.fragment"),t.StrictMode=d("react.strict_mode"),t.Profiler=d("react.profiler"),s=d("react.provider"),a=d("react.context"),c=d("react.forward_ref"),t.Suspense=d("react.suspense"),u=d("react.memo"),l=d("react.lazy")}var h="function"==typeof Symbol&&Symbol.iterator;function p(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m={};function y(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||f}function v(){}function g(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||f}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(p(85));this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=y.prototype;var b=g.prototype=new v;b.constructor=g,r(b,y.prototype),b.isPureReactComponent=!0;var k={current:null},x=Object.prototype.hasOwnProperty,w={key:!0,ref:!0,__self:!0,__source:!0};function j(e,t,n){var r,i={},s=null,a=null;if(null!=t)for(r in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(s=""+t.key),t)x.call(t,r)&&!w.hasOwnProperty(r)&&(i[r]=t[r]);var c=arguments.length-2;if(1===c)i.children=n;else if(1<c){for(var u=Array(c),l=0;l<c;l++)u[l]=arguments[l+2];i.children=u}if(e&&e.defaultProps)for(r in c=e.defaultProps)void 0===i[r]&&(i[r]=c[r]);return{$$typeof:o,type:e,key:s,ref:a,props:i,_owner:k.current}}function _(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var S=/\/+/g;function O(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function E(e,t,n,r,s){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var c=!1;if(null===e)c=!0;else switch(a){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case o:case i:c=!0}}if(c)return s=s(c=e),e=""===r?"."+O(c,0):r,Array.isArray(s)?(n="",null!=e&&(n=e.replace(S,"$&/")+"/"),E(s,t,n,"",(function(e){return e}))):null!=s&&(_(s)&&(s=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(s,n+(!s.key||c&&c.key===s.key?"":(""+s.key).replace(S,"$&/")+"/")+e)),t.push(s)),1;if(c=0,r=""===r?".":r+":",Array.isArray(e))for(var u=0;u<e.length;u++){var l=r+O(a=e[u],u);c+=E(a,t,n,l,s)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=h&&e[h]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),u=0;!(a=e.next()).done;)c+=E(a=a.value,t,n,l=r+O(a,u++),s);else if("object"===a)throw t=""+e,Error(p(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return c}function P(e,t,n){if(null==e)return e;var r=[],o=0;return E(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function C(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var T={current:null};function R(){var e=T.current;if(null===e)throw Error(p(321));return e}var $={ReactCurrentDispatcher:T,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:k,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:P,forEach:function(e,t,n){P(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return P(e,(function(){t++})),t},toArray:function(e){return P(e,(function(e){return e}))||[]},only:function(e){if(!_(e))throw Error(p(143));return e}},t.Component=y,t.PureComponent=g,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$,t.cloneElement=function(e,t,n){if(null==e)throw Error(p(267,e));var i=r({},e.props),s=e.key,a=e.ref,c=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,c=k.current),void 0!==t.key&&(s=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(l in t)x.call(t,l)&&!w.hasOwnProperty(l)&&(i[l]=void 0===t[l]&&void 0!==u?u[l]:t[l])}var l=arguments.length-2;if(1===l)i.children=n;else if(1<l){u=Array(l);for(var d=0;d<l;d++)u[d]=arguments[d+2];i.children=u}return{$$typeof:o,type:e.type,key:s,ref:a,props:i,_owner:c}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:a,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},t.createElement=j,t.createFactory=function(e){var t=j.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=_,t.lazy=function(e){return{$$typeof:l,_payload:{_status:-1,_result:e},_init:C}},t.memo=function(e,t){return{$$typeof:u,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return R().useCallback(e,t)},t.useContext=function(e,t){return R().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return R().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return R().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return R().useLayoutEffect(e,t)},t.useMemo=function(e,t){return R().useMemo(e,t)},t.useReducer=function(e,t,n){return R().useReducer(e,t,n)},t.useRef=function(e){return R().useRef(e)},t.useState=function(e){return R().useState(e)},t.version="17.0.2"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Zo:()=>a,ah:()=>i});var r=n(667294);const o=r.createContext({});function i(e){const t=r.useContext(o);return r.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const s={};function a({components:e,children:t,disableParentContext:n}){let a;return a=n?"function"==typeof e?e({}):e||s:i(e),r.createElement(o.Provider,{value:a},t)}}}]);