/*! For license information please see 6d9d4e9f.f202b945.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[336990],{96382:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(824246),a=n(511151);const o={id:"feature-flags",title:"Feature Flags",description:"Details the process of defining setting and reading a feature flag."},i=void 0,s={id:"plugins/feature-flags",title:"Feature Flags",description:"Details the process of defining setting and reading a feature flag.",source:"@site/../docs/plugins/feature-flags.md",sourceDirName:"plugins",slug:"/plugins/feature-flags",permalink:"/docs/plugins/feature-flags",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/plugins/feature-flags.md",tags:[],version:"current",frontMatter:{id:"feature-flags",title:"Feature Flags",description:"Details the process of defining setting and reading a feature flag."},sidebar:"docs",previous:{title:"Plugin Analytics",permalink:"/docs/plugins/analytics"},next:{title:"Proxying",permalink:"/docs/plugins/proxying"}},u={},l=[{value:"Defining a Feature Flag",id:"defining-a-feature-flag",level:2},{value:"In a plugin",id:"in-a-plugin",level:3},{value:"In the application",id:"in-the-application",level:3},{value:"Enabling Feature Flags",id:"enabling-feature-flags",level:2},{value:"FeatureFlagged Component",id:"featureflagged-component",level:2},{value:"Evaluating Feature Flag State",id:"evaluating-feature-flag-state",level:2}];function c(e){const t=Object.assign({p:"p",a:"a",h2:"h2",h3:"h3",code:"code",pre:"pre"},(0,a.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Backstage offers the ability to define feature flags inside a plugin or during application creation. This allows you to restrict parts of your plugin to those individual users who have toggled the feature flag to on."}),"\n",(0,r.jsxs)(t.p,{children:["This page describes the process of defining setting and reading a feature flag. If you are looking for using feature flags with software templates that can be found under ",(0,r.jsx)(t.a,{href:"https://backstage.io/docs/features/software-templates/writing-templates#remove-sections-or-fields-based-on-feature-flags",children:"Writing Templates"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"defining-a-feature-flag",children:"Defining a Feature Flag"}),"\n",(0,r.jsx)(t.h3,{id:"in-a-plugin",children:"In a plugin"}),"\n",(0,r.jsxs)(t.p,{children:["Defining feature flag in a plugin is done by passing the name of the feature flag into the ",(0,r.jsx)(t.code,{children:"featureFlags"})," array:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"/* src/plugin.ts */\nimport { createPlugin, createRouteRef } from '@backstage/core-plugin-api';\nimport ExampleComponent from './components/ExampleComponent';\n\nexport const examplePlugin = createPlugin({\n  id: 'example',\n  routes: {\n    root: rootRouteRef,\n  },\n  featureFlags: [{ name: 'show-example-feature' }],\n});\n"})}),"\n",(0,r.jsx)(t.h3,{id:"in-the-application",children:"In the application"}),"\n",(0,r.jsxs)(t.p,{children:["Defining feature flag in the application is done by adding feature flags in",(0,r.jsx)(t.code,{children:"featureFlags"})," array in\n",(0,r.jsx)(t.code,{children:"createApp()"})," function call:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"const app = createApp({\n  // ...\n  featureFlags: [\n    {\n      pluginId: '', // pluginId is required for feature flags in plugins. It can be left blank for a feature flag leveraged in the application.\n      name: 'tech-radar',\n      description: 'Enables the tech radar plugin',\n    },\n  ],\n  // ...\n});\n"})}),"\n",(0,r.jsx)(t.h2,{id:"enabling-feature-flags",children:"Enabling Feature Flags"}),"\n",(0,r.jsx)(t.p,{children:"Feature flags are defaulted to off and can be updated by individual users in the backstage interface."}),"\n",(0,r.jsxs)(t.p,{children:["These are set by navigating to the page under ",(0,r.jsx)(t.code,{children:"Settings"})," > ",(0,r.jsx)(t.code,{children:"Feature Flags"}),"."]}),"\n",(0,r.jsx)(t.p,{children:"The users selection is saved in the users browsers local storage. Once toggled it may be required for a user to refresh the page to see any new changes."}),"\n",(0,r.jsx)(t.h2,{id:"featureflagged-component",children:"FeatureFlagged Component"}),"\n",(0,r.jsxs)(t.p,{children:["The easiest way to control content based on the state of a feature flag is to use the ",(0,r.jsx)(t.a,{href:"https://backstage.io/docs/reference/core-app-api.featureflagged",children:"FeatureFlagged"})," component."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:'import { FeatureFlagged } from \'@backstage/core-app-api\';\n\n...\n\n<FeatureFlagged with="show-example-feature">\n  <NewFeatureComponent />\n</FeatureFlagged>\n\n<FeatureFlagged without="show-example-feature">\n  <PreviousFeatureComponent />\n</FeatureFlagged>\n'})}),"\n",(0,r.jsx)(t.h2,{id:"evaluating-feature-flag-state",children:"Evaluating Feature Flag State"}),"\n",(0,r.jsxs)(t.p,{children:["It is also possible to test the feature flag state using the ",(0,r.jsx)(t.a,{href:"https://backstage.io/docs/reference/core-plugin-api.featureflagsapi",children:"FeatureFlags Api"}),"."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"import { useApi, featureFlagsApiRef } from '@backstage/core-plugin-api';\n\nconst featureFlagsApi = useApi(featureFlagsApiRef);\nconst isOn = featureFlagsApi.isActive('show-example-feature');\n"})})]})}const f=function(e={}){const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?(0,r.jsx)(t,Object.assign({},e,{children:(0,r.jsx)(c,e)})):c(e)}},862525:e=>{var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(a){return!1}}()?Object.assign:function(e,a){for(var o,i,s=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),u=1;u<arguments.length;u++){for(var l in o=Object(arguments[u]))n.call(o,l)&&(s[l]=o[l]);if(t){i=t(o);for(var c=0;c<i.length;c++)r.call(o,i[c])&&(s[i[c]]=o[i[c]])}}return s}},371426:(e,t,n)=>{n(862525);var r=n(827378),a=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var o=Symbol.for;a=o("react.element"),t.Fragment=o("react.fragment")}var i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s=Object.prototype.hasOwnProperty,u={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var r,o={},l=null,c=null;for(r in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(c=t.ref),t)s.call(t,r)&&!u.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:a,type:e,key:l,ref:c,props:o,_owner:i.current}}t.jsx=l,t.jsxs=l},541535:(e,t,n)=>{var r=n(862525),a=60103,o=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var i=60109,s=60110,u=60112;t.Suspense=60113;var l=60115,c=60116;if("function"==typeof Symbol&&Symbol.for){var f=Symbol.for;a=f("react.element"),o=f("react.portal"),t.Fragment=f("react.fragment"),t.StrictMode=f("react.strict_mode"),t.Profiler=f("react.profiler"),i=f("react.provider"),s=f("react.context"),u=f("react.forward_ref"),t.Suspense=f("react.suspense"),l=f("react.memo"),c=f("react.lazy")}var p="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h={};function y(e,t,n){this.props=e,this.context=t,this.refs=h,this.updater=n||g}function m(){}function v(e,t,n){this.props=e,this.context=t,this.refs=h,this.updater=n||g}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},m.prototype=y.prototype;var b=v.prototype=new m;b.constructor=v,r(b,y.prototype),b.isPureReactComponent=!0;var j={current:null},_=Object.prototype.hasOwnProperty,x={key:!0,ref:!0,__self:!0,__source:!0};function F(e,t,n){var r,o={},i=null,s=null;if(null!=t)for(r in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(i=""+t.key),t)_.call(t,r)&&!x.hasOwnProperty(r)&&(o[r]=t[r]);var u=arguments.length-2;if(1===u)o.children=n;else if(1<u){for(var l=Array(u),c=0;c<u;c++)l[c]=arguments[c+2];o.children=l}if(e&&e.defaultProps)for(r in u=e.defaultProps)void 0===o[r]&&(o[r]=u[r]);return{$$typeof:a,type:e,key:i,ref:s,props:o,_owner:j.current}}function w(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var k=/\/+/g;function O(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function E(e,t,n,r,i){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var u=!1;if(null===e)u=!0;else switch(s){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case a:case o:u=!0}}if(u)return i=i(u=e),e=""===r?"."+O(u,0):r,Array.isArray(i)?(n="",null!=e&&(n=e.replace(k,"$&/")+"/"),E(i,t,n,"",(function(e){return e}))):null!=i&&(w(i)&&(i=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,n+(!i.key||u&&u.key===i.key?"":(""+i.key).replace(k,"$&/")+"/")+e)),t.push(i)),1;if(u=0,r=""===r?".":r+":",Array.isArray(e))for(var l=0;l<e.length;l++){var c=r+O(s=e[l],l);u+=E(s,t,n,c,i)}else if(c=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof c)for(e=c.call(e),l=0;!(s=e.next()).done;)u+=E(s=s.value,t,n,c=r+O(s,l++),i);else if("object"===s)throw t=""+e,Error(d(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return u}function C(e,t,n){if(null==e)return e;var r=[],a=0;return E(e,r,"","",(function(e){return t.call(n,e,a++)})),r}function S(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var R={current:null};function P(){var e=R.current;if(null===e)throw Error(d(321));return e}var $={ReactCurrentDispatcher:R,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:j,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:C,forEach:function(e,t,n){C(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return C(e,(function(){t++})),t},toArray:function(e){return C(e,(function(e){return e}))||[]},only:function(e){if(!w(e))throw Error(d(143));return e}},t.Component=y,t.PureComponent=v,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$,t.cloneElement=function(e,t,n){if(null==e)throw Error(d(267,e));var o=r({},e.props),i=e.key,s=e.ref,u=e._owner;if(null!=t){if(void 0!==t.ref&&(s=t.ref,u=j.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)_.call(t,c)&&!x.hasOwnProperty(c)&&(o[c]=void 0===t[c]&&void 0!==l?l[c]:t[c])}var c=arguments.length-2;if(1===c)o.children=n;else if(1<c){l=Array(c);for(var f=0;f<c;f++)l[f]=arguments[f+2];o.children=l}return{$$typeof:a,type:e.type,key:i,ref:s,props:o,_owner:u}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:s,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},t.createElement=F,t.createFactory=function(e){var t=F.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:u,render:e}},t.isValidElement=w,t.lazy=function(e){return{$$typeof:c,_payload:{_status:-1,_result:e},_init:S}},t.memo=function(e,t){return{$$typeof:l,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return P().useCallback(e,t)},t.useContext=function(e,t){return P().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return P().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return P().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return P().useLayoutEffect(e,t)},t.useMemo=function(e,t){return P().useMemo(e,t)},t.useReducer=function(e,t,n){return P().useReducer(e,t,n)},t.useRef=function(e){return P().useRef(e)},t.useState=function(e){return P().useState(e)},t.version="17.0.2"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Zo:()=>s,ah:()=>o});var r=n(667294);const a=r.createContext({});function o(e){const t=r.useContext(a);return r.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const i={};function s({components:e,children:t,disableParentContext:n}){let s;return s=n?"function"==typeof e?e({}):e||i:o(e),r.createElement(a.Provider,{value:s},t)}}}]);