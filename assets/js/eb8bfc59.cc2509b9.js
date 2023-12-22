/*! For license information please see eb8bfc59.cc2509b9.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[336594],{594025:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=t(824246),s=t(511151);const a={id:"versioning-policy",title:"Release & Versioning Policy",description:"The process and policy for releasing and versioning Backstage"},o=void 0,i={id:"overview/versioning-policy",title:"Release & Versioning Policy",description:"The process and policy for releasing and versioning Backstage",source:"@site/../docs/overview/versioning-policy.md",sourceDirName:"overview",slug:"/overview/versioning-policy",permalink:"/docs/overview/versioning-policy",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/overview/versioning-policy.md",tags:[],version:"current",frontMatter:{id:"versioning-policy",title:"Release & Versioning Policy",description:"The process and policy for releasing and versioning Backstage"},sidebar:"docs",previous:{title:"Strategies for adopting",permalink:"/docs/overview/adopting"},next:{title:"Backstage Threat Model",permalink:"/docs/overview/threat-model"}},l={},c=[{value:"Release Lines",id:"release-lines",level:2},{value:"Main Release Line",id:"main-release-line",level:2},{value:"Next Release Line",id:"next-release-line",level:2},{value:"Release Versioning Policy",id:"release-versioning-policy",level:2},{value:"Skew Policy",id:"skew-policy",level:3},{value:"Package Versioning Policy",id:"package-versioning-policy",level:2},{value:"Changes that are Not Considered Breaking",id:"changes-that-are-not-considered-breaking",level:3},{value:"Release Stages",id:"release-stages",level:3},{value:"Node.js Releases",id:"nodejs-releases",level:2},{value:"TypeScript Releases",id:"typescript-releases",level:2},{value:"PostgreSQL Releases",id:"postgresql-releases",level:2}];function d(e){const n=Object.assign({p:"p",a:"a",h2:"h2",strong:"strong",code:"code",ul:"ul",li:"li",h3:"h3",em:"em"},(0,s.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["The Backstage project is comprised of a set of software components that together\nform the Backstage platform. These components are both plugins as well as core\nplatform libraries and tools. Each component is distributed as a collection of\n",(0,r.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Npm_(software)",children:"packages"}),", which in the end is\nwhat you end up consuming as an adopter of Backstage."]}),"\n",(0,r.jsx)(n.p,{children:"The number of Backstage packages that build up an application can be quite\nlarge, in the order of hundreds, with just the core platform packages being\ncounted in the dozen. This creates a challenge for the integrators of a\nBackstage project, as there are a lot of moving parts and pieces to keep up to\ndate."}),"\n",(0,r.jsx)(n.p,{children:"Our solution to this is collecting our most used components and their packages\ninto an umbrella version that we call a Backstage release. Each release is a\ncollection of packages at specific versions that have been verified to work\ntogether. Think of it as a toolbox that comes with batteries included, but you\ncan always add more plugins and libraries from the open source ecosystem as well\nas build your own."}),"\n",(0,r.jsx)(n.h2,{id:"release-lines",children:"Release Lines"}),"\n",(0,r.jsx)(n.p,{children:'The Backstage project is structured around two different release lines, a\nprimary "main" release line, and a "next" release line that serves as a preview\nand pre-release of the next main-line release. Each of these release lines have\ntheir own release cadence and versioning policy.'}),"\n",(0,r.jsx)(n.h2,{id:"main-release-line",children:"Main Release Line"}),"\n",(0,r.jsx)(n.p,{children:"Release cadence: Monthly, specifically on the Tuesday before the third Wednesday of each month. The first release took place in March 2022."}),"\n",(0,r.jsxs)(n.p,{children:["The main release line in versioned with a major, minor and patch version but\ndoes ",(0,r.jsx)(n.strong,{children:"not"})," adhere to ",(0,r.jsx)(n.a,{href:"https://semver.org",children:"semver"}),". The version format is\n",(0,r.jsx)(n.code,{children:"<major>.<minor>.<patch>"}),", for example ",(0,r.jsx)(n.code,{children:"1.3.0"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"An increment of the major version denotes a significant improvement or change to\nthe Backstage platform. It may come with a large new set of features, or a\nswitch in the product direction. These will be few and far between, and do not\nhave any set cadence. Policy-wise they are no different than a minor release."}),"\n",(0,r.jsxs)(n.p,{children:["Each regularly scheduled release will bring an increment to the minor version,\nas long as it is not a major release. Each new minor version can contain new\nfunctionality, breaking changes, and bug fixes, according the\n",(0,r.jsx)(n.a,{href:"#release-versioning-policy",children:"versioning policy"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"Patch versions will only be released to address critical bug fixes. They are not\nbound to the regular cadence and are instead released whenever needed."}),"\n",(0,r.jsx)(n.h2,{id:"next-release-line",children:"Next Release Line"}),"\n",(0,r.jsx)(n.p,{children:"Release cadence: Weekly, specifically on Tuesdays."}),"\n",(0,r.jsx)(n.p,{children:"The next release line is a weekly release of the project. Consuming these\nreleases gives you early access to upcoming functionality in Backstage. There\nare however fewer guarantees around breaking changes in these releases, where\nmoving from one release to the next may introduce significant breaking changes."}),"\n",(0,r.jsx)(n.h2,{id:"release-versioning-policy",children:"Release Versioning Policy"}),"\n",(0,r.jsx)(n.p,{children:"The following versioning policy applies to the main-line releases only."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Breaking changes in Packages that have reached version ",(0,r.jsx)(n.code,{children:">=1.0.0"})," will only be\ndone when necessary and with the goal of having minimal impact. When possible,\nthere will always be a deprecation path for a breaking change."]}),"\n",(0,r.jsxs)(n.li,{children:["Security fixes ",(0,r.jsx)(n.strong,{children:"may"})," be backported to older releases based on the simplicity\nof the upgrade path, and the severity of the vulnerability."]}),"\n",(0,r.jsx)(n.li,{children:"Bug reports are valid only if reproducible in the most recent release, and bug\nfixes are only applied to the next release."}),"\n",(0,r.jsx)(n.li,{children:"We will do our best to adhere to this policy."}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"skew-policy",children:"Skew Policy"}),"\n",(0,r.jsxs)(n.p,{children:["In order for Backstage to function properly the following versioning rules must\nbe followed. The rules are referring to the\n",(0,r.jsx)(n.a,{href:"https://backstage.io/docs/overview/architecture-overview#package-architecture",children:"Package Architecture"}),"."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["The versions of all the packages in the ",(0,r.jsx)(n.code,{children:"Frontend App Core"})," must be from the\nsame release, and it is recommended to keep ",(0,r.jsx)(n.code,{children:"Common Tooling"})," on that release\ntoo."]}),"\n",(0,r.jsxs)(n.li,{children:["The Backstage dependencies of any given plugin should be from the same\nrelease. This includes the packages from ",(0,r.jsx)(n.code,{children:"Common Libraries"}),",\n",(0,r.jsx)(n.code,{children:"Frontend Plugin Core"}),", and ",(0,r.jsx)(n.code,{children:"Frontend Libraries"}),", or alternatively the\n",(0,r.jsx)(n.code,{children:"Backend Libraries"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["There must be no package that is from a newer release than the\n",(0,r.jsx)(n.code,{children:"Frontend App Core"})," packages in the app."]}),"\n",(0,r.jsxs)(n.li,{children:["Frontend plugins with a corresponding backend plugin should be from the same\nrelease. The update to the backend plugin ",(0,r.jsx)(n.strong,{children:"MUST"})," be deployed before or\ntogether with the update to the frontend plugin."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"package-versioning-policy",children:"Package Versioning Policy"}),"\n",(0,r.jsxs)(n.p,{children:["Every individual package is versioned according to ",(0,r.jsx)(n.a,{href:"https://semver.org",children:"semver"}),".\nThis versioning is completely decoupled from the Backstage release versioning,\nmeaning you might for example have ",(0,r.jsx)(n.code,{children:"@backstage/core-plugin-api"})," version ",(0,r.jsx)(n.code,{children:"3.1.4"}),"\nbe part of the ",(0,r.jsx)(n.code,{children:"1.12"})," Backstage release."]}),"\n",(0,r.jsx)(n.p,{children:"The following versioning policy applies to all packages:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Breaking changes are noted in the changelog, and documentation is updated."}),"\n",(0,r.jsxs)(n.li,{children:["Breaking changes are prefixed with ",(0,r.jsx)(n.code,{children:"**BREAKING**: "})," in the changelog."]}),"\n",(0,r.jsx)(n.li,{children:"All public exports are considered stable and will have an entry in the\nchangelog"}),"\n",(0,r.jsx)(n.li,{children:"Breaking changes are recommended to document a clear upgrade path in the\nchangelog. This may be omitted for newly introduced or unstable packages."}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["For packages at version ",(0,r.jsx)(n.code,{children:"1.0.0"})," or above, the following policy also applies:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["All exports are marked with a ",(0,r.jsx)(n.a,{href:"#release-stages",children:"release stage"}),"."]}),"\n",(0,r.jsx)(n.li,{children:"Breaking changes to stable exports include a deprecation phase if possible.\nThe deprecation must have been released for at least one mainline release\nbefore it can be removed."}),"\n",(0,r.jsx)(n.li,{children:"The release of breaking changes document a clear upgrade path in the\nchangelog, both when deprecations are introduced and when they are removed."}),"\n",(0,r.jsxs)(n.li,{children:["Breaking changes to ",(0,r.jsx)(n.code,{children:"@alpha"})," or ",(0,r.jsx)(n.code,{children:"@beta"})," exports must result in at least a minor\nversion bump, and may be done without a deprecation period."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"changes-that-are-not-considered-breaking",children:"Changes that are Not Considered Breaking"}),"\n",(0,r.jsx)(n.p,{children:"There are a few changes that would typically be considered breaking changes, but\nthat we make exceptions for. This is both to be able to evolve the project more\nrapidly, also because the alternative ends up having a bigger impact on users."}),"\n",(0,r.jsxs)(n.p,{children:["For all Utility APIs and Backend Services that ",(0,r.jsx)(n.em,{children:"have"})," a built-in implementation,\nwe only consider the API stability for consumers of those interfaces. This means\nthat it is not considered a breaking change to break the contract for producers\nof the interface."]}),"\n",(0,r.jsxs)(n.p,{children:["Changes that fall under the above rule, must be marked with\n",(0,r.jsx)(n.code,{children:"**BREAKING PRODUCERS**:"})," in the changelog."]}),"\n",(0,r.jsxs)(n.p,{children:["For any case of dependency injection, it is not considered a breaking change to\nadd a dependency on a Utility API or Backend Service that is provided by the\nframework. This includes any dependency that is provided by the\n",(0,r.jsx)(n.code,{children:"@backstage/app-defaults"})," and ",(0,r.jsx)(n.code,{children:"@backstage/backend-defaults"})," packages."]}),"\n",(0,r.jsx)(n.h3,{id:"release-stages",children:"Release Stages"}),"\n",(0,r.jsxs)(n.p,{children:["The release stages(",(0,r.jsx)(n.code,{children:"@alpha"}),", ",(0,r.jsx)(n.code,{children:"@beta"})," ",(0,r.jsx)(n.code,{children:"@public"}),") refers to the\n",(0,r.jsx)(n.a,{href:"https://tsdoc.org/",children:"TSDoc"})," documentation tag of the export, and are also\nvisible in the API report of each package."]}),"\n",(0,r.jsx)(n.p,{children:"Backstage uses three stages to indicate the stability for each individual\npackage export."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"@public"})," - considered stable and are available in the main package entry\npoint."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"@beta"})," - Not visible in the main package entry point, beta exports must be\naccessed via ",(0,r.jsx)(n.code,{children:"<package-name>/beta"})," or ",(0,r.jsx)(n.code,{children:"<package-name>/alpha"})," imports."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"@alpha"})," - here be dragons. Not visible in the main package entry point, alpha\nexports must be accessed via ",(0,r.jsx)(n.code,{children:"<package-name>/alpha"})," imports."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"nodejs-releases",children:"Node.js Releases"}),"\n",(0,r.jsxs)(n.p,{children:["The Backstage project uses ",(0,r.jsx)(n.a,{href:"https://nodejs.org/",children:"Node.js"})," for both its development\ntooling and backend runtime. In order for expectations to be clear we use the\nfollowing schedule for determining the ",(0,r.jsx)(n.a,{href:"https://nodejs.org/en/about/releases/",children:"Node.js releases"})," that we support:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"At any given point in time we support exactly two adjacent even-numbered\nreleases of Node.js, for example v12 and v14."}),"\n",(0,r.jsxs)(n.li,{children:["Once a new Node.js release becomes ",(0,r.jsx)(n.em,{children:"Active LTS"})," we switch to support that\nrelease and the previous one. The switch is not immediate but done as soon\nas possible. You can find the Node.js version supported by each release\nin the ",(0,r.jsx)(n.code,{children:"engines"})," field in the root ",(0,r.jsx)(n.code,{children:"package.json"})," of a new app."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["When we say ",(0,r.jsx)(n.em,{children:"Supporting"})," a Node.js release, that means the following:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"The CI pipeline in the main Backstage repo tests towards the supported releases, and we encourage any other Backstage related projects to do the same."}),"\n",(0,r.jsxs)(n.li,{children:["New Backstage projects created with ",(0,r.jsx)(n.code,{children:"@backstage/create-app"})," will have their ",(0,r.jsx)(n.code,{children:"engines.node"})," version set accordingly."]}),"\n",(0,r.jsx)(n.li,{children:"Dropping compatibility with unsupported releases is not considered a breaking change. This includes using new syntax or APIs, as well as bumping dependencies that drop support for these versions."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"typescript-releases",children:"TypeScript Releases"}),"\n",(0,r.jsxs)(n.p,{children:["The Backstage project uses ",(0,r.jsx)(n.a,{href:"https://www.typescriptlang.org/",children:"TypeScript"})," for type checking within the project, as well as external APIs and documentation. It is important to have a clear policy for which TypeScript versions we support, since we want to be able to adopt new TypeScript features, but at the same time not break existing projects that are using older versions."]}),"\n",(0,r.jsx)(n.p,{children:"The TypeScript release cadence is roughly every three months. An important aspect of the TypeScript versioning is that it does not follow semver. In particular, there is no differentiation between major and minor versions, both of them are breaking. One way to think about it is to merge the two, for example version 4.7 can be considered major version 47, 5.0 is 50, and so on. Within these releases there can be a number of patch releases, which do follow semver."}),"\n",(0,r.jsx)(n.p,{children:"Our policy is to support the last 3 TypeScript versions, for example 4.8, 4.9, and 5.0. Converted to time, this means that we typically support the TypeScript version from the last six to nine months, depending on where in the TypeScript release window we are. This policy applies as a snapshot at the time of any given Backstage release, new TypeScript releases only apply to the following Backstage main-line release, not to the current one."}),"\n",(0,r.jsxs)(n.p,{children:["For anyone maintaining their own Backstage project, this means that you should strive to bump to the latest TypeScript version at least every 6 months, or you may encounter breakages as you upgrade Backstage packages. If you encounter any issues in doing so, please ",(0,r.jsx)(n.a,{href:"https://github.com/backstage/backstage/issues/new/choose",children:"file an issue in the main Backstage repository"}),", as per this policy we should always support the latest version. In order to ensure that we do not start using new TypeScript features too early, the Backstage project itself uses the version at the beginning of the currently supported window, in the above example that would be version 4.8."]}),"\n",(0,r.jsx)(n.h2,{id:"postgresql-releases",children:"PostgreSQL Releases"}),"\n",(0,r.jsx)(n.p,{children:"The Backstage project recommends and supports using PostgreSQL for persistent storage."}),"\n",(0,r.jsxs)(n.p,{children:["The PostgreSQL ",(0,r.jsx)(n.a,{href:"https://www.postgresql.org/support/versioning/",children:"versioning policy"})," is to release a new major version every year with new features which is then supported for 5 years after its initial release."]}),"\n",(0,r.jsx)(n.p,{children:"Our policy mirrors the PostgreSQL versioning policy - we will support the last 5 major versions. We will also test the newest and oldest versions in that range. For example, if the range we support is currently 12 to 16, then we would only test 12 and 16 explicitly."})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(d,e)})):d(e)}},371426:(e,n,t)=>{var r=t(827378),s=Symbol.for("react.element"),a=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,t){var r,a={},c=null,d=null;for(r in void 0!==t&&(c=""+t),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(d=n.ref),n)o.call(n,r)&&!l.hasOwnProperty(r)&&(a[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===a[r]&&(a[r]=n[r]);return{$$typeof:s,type:e,key:c,ref:d,props:a,_owner:i.current}}n.Fragment=a,n.jsx=c,n.jsxs=c},541535:(e,n)=>{var t=Symbol.for("react.element"),r=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),l=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),u=Symbol.iterator;var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,y={};function m(e,n,t){this.props=e,this.context=n,this.refs=y,this.updater=t||f}function v(){}function b(e,n,t){this.props=e,this.context=n,this.refs=y,this.updater=t||f}m.prototype.isReactComponent={},m.prototype.setState=function(e,n){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=m.prototype;var j=b.prototype=new v;j.constructor=b,g(j,m.prototype),j.isPureReactComponent=!0;var x=Array.isArray,w=Object.prototype.hasOwnProperty,k={current:null},T={key:!0,ref:!0,__self:!0,__source:!0};function S(e,n,r){var s,a={},o=null,i=null;if(null!=n)for(s in void 0!==n.ref&&(i=n.ref),void 0!==n.key&&(o=""+n.key),n)w.call(n,s)&&!T.hasOwnProperty(s)&&(a[s]=n[s]);var l=arguments.length-2;if(1===l)a.children=r;else if(1<l){for(var c=Array(l),d=0;d<l;d++)c[d]=arguments[d+2];a.children=c}if(e&&e.defaultProps)for(s in l=e.defaultProps)void 0===a[s]&&(a[s]=l[s]);return{$$typeof:t,type:e,key:o,ref:i,props:a,_owner:k.current}}function _(e){return"object"==typeof e&&null!==e&&e.$$typeof===t}var R=/\/+/g;function B(e,n){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return n[e]}))}(""+e.key):n.toString(36)}function P(e,n,s,a,o){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var l=!1;if(null===e)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case t:case r:l=!0}}if(l)return o=o(l=e),e=""===a?"."+B(l,0):a,x(o)?(s="",null!=e&&(s=e.replace(R,"$&/")+"/"),P(o,n,s,"",(function(e){return e}))):null!=o&&(_(o)&&(o=function(e,n){return{$$typeof:t,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}(o,s+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(R,"$&/")+"/")+e)),n.push(o)),1;if(l=0,a=""===a?".":a+":",x(e))for(var c=0;c<e.length;c++){var d=a+B(i=e[c],c);l+=P(i,n,s,d,o)}else if(d=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=u&&e[u]||e["@@iterator"])?e:null}(e),"function"==typeof d)for(e=d.call(e),c=0;!(i=e.next()).done;)l+=P(i=i.value,n,s,d=a+B(i,c++),o);else if("object"===i)throw n=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return l}function C(e,n,t){if(null==e)return e;var r=[],s=0;return P(e,r,"","",(function(e){return n.call(t,e,s++)})),r}function E(e){if(-1===e._status){var n=e._result;(n=n()).then((function(n){0!==e._status&&-1!==e._status||(e._status=1,e._result=n)}),(function(n){0!==e._status&&-1!==e._status||(e._status=2,e._result=n)})),-1===e._status&&(e._status=0,e._result=n)}if(1===e._status)return e._result.default;throw e._result}var O={current:null},I={transition:null},N={ReactCurrentDispatcher:O,ReactCurrentBatchConfig:I,ReactCurrentOwner:k};n.Children={map:C,forEach:function(e,n,t){C(e,(function(){n.apply(this,arguments)}),t)},count:function(e){var n=0;return C(e,(function(){n++})),n},toArray:function(e){return C(e,(function(e){return e}))||[]},only:function(e){if(!_(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},n.Component=m,n.Fragment=s,n.Profiler=o,n.PureComponent=b,n.StrictMode=a,n.Suspense=d,n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=N,n.cloneElement=function(e,n,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var s=g({},e.props),a=e.key,o=e.ref,i=e._owner;if(null!=n){if(void 0!==n.ref&&(o=n.ref,i=k.current),void 0!==n.key&&(a=""+n.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in n)w.call(n,c)&&!T.hasOwnProperty(c)&&(s[c]=void 0===n[c]&&void 0!==l?l[c]:n[c])}var c=arguments.length-2;if(1===c)s.children=r;else if(1<c){l=Array(c);for(var d=0;d<c;d++)l[d]=arguments[d+2];s.children=l}return{$$typeof:t,type:e.type,key:a,ref:o,props:s,_owner:i}},n.createContext=function(e){return(e={$$typeof:l,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},n.createElement=S,n.createFactory=function(e){var n=S.bind(null,e);return n.type=e,n},n.createRef=function(){return{current:null}},n.forwardRef=function(e){return{$$typeof:c,render:e}},n.isValidElement=_,n.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:E}},n.memo=function(e,n){return{$$typeof:h,type:e,compare:void 0===n?null:n}},n.startTransition=function(e){var n=I.transition;I.transition={};try{e()}finally{I.transition=n}},n.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},n.useCallback=function(e,n){return O.current.useCallback(e,n)},n.useContext=function(e){return O.current.useContext(e)},n.useDebugValue=function(){},n.useDeferredValue=function(e){return O.current.useDeferredValue(e)},n.useEffect=function(e,n){return O.current.useEffect(e,n)},n.useId=function(){return O.current.useId()},n.useImperativeHandle=function(e,n,t){return O.current.useImperativeHandle(e,n,t)},n.useInsertionEffect=function(e,n){return O.current.useInsertionEffect(e,n)},n.useLayoutEffect=function(e,n){return O.current.useLayoutEffect(e,n)},n.useMemo=function(e,n){return O.current.useMemo(e,n)},n.useReducer=function(e,n,t){return O.current.useReducer(e,n,t)},n.useRef=function(e){return O.current.useRef(e)},n.useState=function(e){return O.current.useState(e)},n.useSyncExternalStore=function(e,n,t){return O.current.useSyncExternalStore(e,n,t)},n.useTransition=function(){return O.current.useTransition()},n.version="18.2.0"},827378:(e,n,t)=>{e.exports=t(541535)},824246:(e,n,t)=>{e.exports=t(371426)},511151:(e,n,t)=>{t.d(n,{Zo:()=>i,ah:()=>a});var r=t(667294);const s=r.createContext({});function a(e){const n=r.useContext(s);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const o={};function i({components:e,children:n,disableParentContext:t}){let i;return i=t?"function"==typeof e?e({}):e||o:a(e),r.createElement(s.Provider,{value:i},n)}}}]);