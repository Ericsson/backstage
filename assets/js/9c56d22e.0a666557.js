/*! For license information please see 9c56d22e.0a666557.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[522790],{255301:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>f,frontMatter:()=>u,metadata:()=>c,toc:()=>s});var n=t(824246),o=t(511151);const u={id:"plugin-cloudbuild.cloudbuildclient.rerunworkflow",title:"CloudbuildClient.reRunWorkflow()",description:"API reference for CloudbuildClient.reRunWorkflow()"},i=void 0,c={id:"reference/plugin-cloudbuild.cloudbuildclient.rerunworkflow",title:"CloudbuildClient.reRunWorkflow()",description:"API reference for CloudbuildClient.reRunWorkflow()",source:"@site/../docs/reference/plugin-cloudbuild.cloudbuildclient.rerunworkflow.md",sourceDirName:"reference",slug:"/reference/plugin-cloudbuild.cloudbuildclient.rerunworkflow",permalink:"/docs/reference/plugin-cloudbuild.cloudbuildclient.rerunworkflow",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-cloudbuild.cloudbuildclient.rerunworkflow.md",tags:[],version:"current",frontMatter:{id:"plugin-cloudbuild.cloudbuildclient.rerunworkflow",title:"CloudbuildClient.reRunWorkflow()",description:"API reference for CloudbuildClient.reRunWorkflow()"}},l={},s=[{value:"Parameters",id:"parameters",level:2}];function a(e){const r=Object.assign({p:"p",a:"a",code:"code",strong:"strong",pre:"pre",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,o.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-cloudbuild",children:(0,n.jsx)(r.code,{children:"@backstage/plugin-cloudbuild"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-cloudbuild.cloudbuildclient",children:(0,n.jsx)(r.code,{children:"CloudbuildClient"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-cloudbuild.cloudbuildclient.rerunworkflow",children:(0,n.jsx)(r.code,{children:"reRunWorkflow"})})]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"reRunWorkflow(options: {\n        projectId: string;\n        runId: string;\n    }): Promise<void>;\n"})}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Parameter"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"options"}),(0,n.jsx)(r.td,{children:"{ projectId: string; runId: string; }"}),(0,n.jsx)(r.td,{})]})})]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,n.jsx)(r.p,{children:"Promise<void>"})]})}const f=function(e={}){const{wrapper:r}=Object.assign({},(0,o.ah)(),e.components);return r?(0,n.jsx)(r,Object.assign({},e,{children:(0,n.jsx)(a,e)})):a(e)}},862525:e=>{var r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var u,i,c=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),l=1;l<arguments.length;l++){for(var s in u=Object(arguments[l]))t.call(u,s)&&(c[s]=u[s]);if(r){i=r(u);for(var a=0;a<i.length;a++)n.call(u,i[a])&&(c[i[a]]=u[i[a]])}}return c}},371426:(e,r,t)=>{t(862525);var n=t(827378),o=60103;if(r.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var u=Symbol.for;o=u("react.element"),r.Fragment=u("react.fragment")}var i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c=Object.prototype.hasOwnProperty,l={key:!0,ref:!0,__self:!0,__source:!0};function s(e,r,t){var n,u={},s=null,a=null;for(n in void 0!==t&&(s=""+t),void 0!==r.key&&(s=""+r.key),void 0!==r.ref&&(a=r.ref),r)c.call(r,n)&&!l.hasOwnProperty(n)&&(u[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===u[n]&&(u[n]=r[n]);return{$$typeof:o,type:e,key:s,ref:a,props:u,_owner:i.current}}r.jsx=s,r.jsxs=s},541535:(e,r,t)=>{var n=t(862525),o=60103,u=60106;r.Fragment=60107,r.StrictMode=60108,r.Profiler=60114;var i=60109,c=60110,l=60112;r.Suspense=60113;var s=60115,a=60116;if("function"==typeof Symbol&&Symbol.for){var f=Symbol.for;o=f("react.element"),u=f("react.portal"),r.Fragment=f("react.fragment"),r.StrictMode=f("react.strict_mode"),r.Profiler=f("react.profiler"),i=f("react.provider"),c=f("react.context"),l=f("react.forward_ref"),r.Suspense=f("react.suspense"),s=f("react.memo"),a=f("react.lazy")}var d="function"==typeof Symbol&&Symbol.iterator;function p(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)r+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y={};function b(e,r,t){this.props=e,this.context=r,this.refs=y,this.updater=t||h}function m(){}function v(e,r,t){this.props=e,this.context=r,this.refs=y,this.updater=t||h}b.prototype.isReactComponent={},b.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(p(85));this.updater.enqueueSetState(this,e,r,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},m.prototype=b.prototype;var g=v.prototype=new m;g.constructor=v,n(g,b.prototype),g.isPureReactComponent=!0;var j={current:null},_=Object.prototype.hasOwnProperty,w={key:!0,ref:!0,__self:!0,__source:!0};function k(e,r,t){var n,u={},i=null,c=null;if(null!=r)for(n in void 0!==r.ref&&(c=r.ref),void 0!==r.key&&(i=""+r.key),r)_.call(r,n)&&!w.hasOwnProperty(n)&&(u[n]=r[n]);var l=arguments.length-2;if(1===l)u.children=t;else if(1<l){for(var s=Array(l),a=0;a<l;a++)s[a]=arguments[a+2];u.children=s}if(e&&e.defaultProps)for(n in l=e.defaultProps)void 0===u[n]&&(u[n]=l[n]);return{$$typeof:o,type:e,key:i,ref:c,props:u,_owner:j.current}}function x(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var C=/\/+/g;function O(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function R(e,r,t,n,i){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var l=!1;if(null===e)l=!0;else switch(c){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case o:case u:l=!0}}if(l)return i=i(l=e),e=""===n?"."+O(l,0):n,Array.isArray(i)?(t="",null!=e&&(t=e.replace(C,"$&/")+"/"),R(i,r,t,"",(function(e){return e}))):null!=i&&(x(i)&&(i=function(e,r){return{$$typeof:o,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(i,t+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(C,"$&/")+"/")+e)),r.push(i)),1;if(l=0,n=""===n?".":n+":",Array.isArray(e))for(var s=0;s<e.length;s++){var a=n+O(c=e[s],s);l+=R(c,r,t,a,i)}else if(a=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof a)for(e=a.call(e),s=0;!(c=e.next()).done;)l+=R(c=c.value,r,t,a=n+O(c,s++),i);else if("object"===c)throw r=""+e,Error(p(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r));return l}function S(e,r,t){if(null==e)return e;var n=[],o=0;return R(e,n,"","",(function(e){return r.call(t,e,o++)})),n}function P(e){if(-1===e._status){var r=e._result;r=r(),e._status=0,e._result=r,r.then((function(r){0===e._status&&(r=r.default,e._status=1,e._result=r)}),(function(r){0===e._status&&(e._status=2,e._result=r)}))}if(1===e._status)return e._result;throw e._result}var E={current:null};function $(){var e=E.current;if(null===e)throw Error(p(321));return e}var I={ReactCurrentDispatcher:E,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:j,IsSomeRendererActing:{current:!1},assign:n};r.Children={map:S,forEach:function(e,r,t){S(e,(function(){r.apply(this,arguments)}),t)},count:function(e){var r=0;return S(e,(function(){r++})),r},toArray:function(e){return S(e,(function(e){return e}))||[]},only:function(e){if(!x(e))throw Error(p(143));return e}},r.Component=b,r.PureComponent=v,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=I,r.cloneElement=function(e,r,t){if(null==e)throw Error(p(267,e));var u=n({},e.props),i=e.key,c=e.ref,l=e._owner;if(null!=r){if(void 0!==r.ref&&(c=r.ref,l=j.current),void 0!==r.key&&(i=""+r.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(a in r)_.call(r,a)&&!w.hasOwnProperty(a)&&(u[a]=void 0===r[a]&&void 0!==s?s[a]:r[a])}var a=arguments.length-2;if(1===a)u.children=t;else if(1<a){s=Array(a);for(var f=0;f<a;f++)s[f]=arguments[f+2];u.children=s}return{$$typeof:o,type:e.type,key:i,ref:c,props:u,_owner:l}},r.createContext=function(e,r){return void 0===r&&(r=null),(e={$$typeof:c,_calculateChangedBits:r,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},r.createElement=k,r.createFactory=function(e){var r=k.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:l,render:e}},r.isValidElement=x,r.lazy=function(e){return{$$typeof:a,_payload:{_status:-1,_result:e},_init:P}},r.memo=function(e,r){return{$$typeof:s,type:e,compare:void 0===r?null:r}},r.useCallback=function(e,r){return $().useCallback(e,r)},r.useContext=function(e,r){return $().useContext(e,r)},r.useDebugValue=function(){},r.useEffect=function(e,r){return $().useEffect(e,r)},r.useImperativeHandle=function(e,r,t){return $().useImperativeHandle(e,r,t)},r.useLayoutEffect=function(e,r){return $().useLayoutEffect(e,r)},r.useMemo=function(e,r){return $().useMemo(e,r)},r.useReducer=function(e,r,t){return $().useReducer(e,r,t)},r.useRef=function(e){return $().useRef(e)},r.useState=function(e){return $().useState(e)},r.version="17.0.2"},827378:(e,r,t)=>{e.exports=t(541535)},824246:(e,r,t)=>{e.exports=t(371426)},511151:(e,r,t)=>{t.d(r,{Zo:()=>c,ah:()=>u});var n=t(667294);const o=n.createContext({});function u(e){const r=n.useContext(o);return n.useMemo((()=>"function"==typeof e?e(r):{...r,...e}),[r,e])}const i={};function c({components:e,children:r,disableParentContext:t}){let c;return c=t?"function"==typeof e?e({}):e||i:u(e),n.createElement(o.Provider,{value:c},r)}}}]);