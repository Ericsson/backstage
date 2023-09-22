/*! For license information please see bb5bfe47.cfa6093e.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[251051],{342179:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var r=n(824246),s=n(511151);const o={id:"testing",title:"Testing Backend Plugins and Modules",sidebar_label:"Testing",description:"Learn how to test your backend plugins and modules"},a=void 0,i={unversionedId:"backend-system/building-plugins-and-modules/testing",id:"backend-system/building-plugins-and-modules/testing",title:"Testing Backend Plugins and Modules",description:"Learn how to test your backend plugins and modules",source:"@site/../docs/backend-system/building-plugins-and-modules/02-testing.md",sourceDirName:"backend-system/building-plugins-and-modules",slug:"/backend-system/building-plugins-and-modules/testing",permalink:"/docs/backend-system/building-plugins-and-modules/testing",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/backend-system/building-plugins-and-modules/02-testing.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"testing",title:"Testing Backend Plugins and Modules",sidebar_label:"Testing",description:"Learn how to test your backend plugins and modules"},sidebar:"docs",previous:{title:"Overview",permalink:"/docs/backend-system/building-plugins-and-modules/index"},next:{title:"Migration Guide",permalink:"/docs/backend-system/building-plugins-and-modules/migrating"}},c={},u=[{value:"Testing Backend Plugins and Modules",id:"testing-backend-plugins-and-modules",level:2},{value:"Testing Remote Service Interactions",id:"testing-remote-service-interactions",level:2},{value:"Testing Database Interactions",id:"testing-database-interactions",level:2},{value:"Testing Service Factories",id:"testing-service-factories",level:2}];function l(e){const t=Object.assign({blockquote:"blockquote",p:"p",strong:"strong",code:"code",h2:"h2",em:"em",a:"a",pre:"pre",ul:"ul",li:"li"},(0,s.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"NOTE: The new backend system is in alpha, and some plugins do not yet fully implement it."})}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["Utilities for testing backend plugins and modules are available in\n",(0,r.jsx)(t.code,{children:"@backstage/backend-test-utils"}),". This section describes those facilities."]}),"\n",(0,r.jsx)(t.h2,{id:"testing-backend-plugins-and-modules",children:"Testing Backend Plugins and Modules"}),"\n",(0,r.jsxs)(t.p,{children:["To facilitate testing of backend plugins and modules, the\n",(0,r.jsx)(t.code,{children:"@backstage/backend-test-utils"})," package provides a ",(0,r.jsx)(t.code,{children:"startTestBackend"})," function\nwhich starts up an entire backend harness, complete with a number of mock\nservices. You can then provide overrides for services whose behavior you need to\nadjust for the test run. The function also accepts a number of ",(0,r.jsx)(t.em,{children:"features"})," (a\ncollective term for backend ",(0,r.jsx)(t.a,{href:"/docs/backend-system/architecture/plugins",children:"plugins"})," and\n",(0,r.jsx)(t.a,{href:"/docs/backend-system/architecture/modules",children:"modules"}),"), that are the subjects of the test."]}),"\n",(0,r.jsxs)(t.p,{children:["The function returns an HTTP server instance which can be used together with\ne.g. ",(0,r.jsx)(t.code,{children:"supertest"})," to easily test the actual REST service surfaces of plugins who\nregister routes with ",(0,r.jsx)(t.a,{href:"../core-services/01-index.md",children:"the HTTP router service\nAPI"}),"."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"import { mockServices, startTestBackend } from '@backstage/backend-test-utils';\nimport request from 'supertest';\nimport { myPlugin } from './plugin.ts';\n\ndescribe('myPlugin', () => {\n  it('can serve values from config', async () => {\n    const fakeConfig = { myPlugin: { value: 7 } };\n\n    const { server } = await startTestBackend({\n      features: [\n        myPlugin(),\n        mockServices.rootConfig.factory({ data: fakeConfig }),\n      ],\n    });\n\n    const response = await request(server).get('/api/example/get-value');\n    expect(response.status).toBe(200);\n    expect(response.body).toEqual({ value: 7 });\n  });\n});\n"})}),"\n",(0,r.jsx)(t.p,{children:"This example shows how to access the mock service factories and\npass options to them, which will override the default mock services."}),"\n",(0,r.jsxs)(t.p,{children:["The returned server also has a ",(0,r.jsx)(t.code,{children:"port()"})," method which returns the dynamically\nbound listening port. You can use this to perform lower level network\ninteractions with the running test service."]}),"\n",(0,r.jsx)(t.h2,{id:"testing-remote-service-interactions",children:"Testing Remote Service Interactions"}),"\n",(0,r.jsxs)(t.p,{children:["If your backend plugin or service interacts with external services using HTTP\ncalls, we recommend leveraging the ",(0,r.jsx)(t.code,{children:"msw"})," package to intercept actual outgoing\nrequests and return mock responses. This lets you stub out remote services\nrather than the local clients, leading to more thorough and robust tests. You\ncan read more about how it works ",(0,r.jsx)(t.a,{href:"https://mswjs.io/",children:"in their documentation"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"@backstage/backend-test-utils"})," package exports a ",(0,r.jsx)(t.code,{children:"setupRequestMockHandlers"}),"\nfunction which ensures that the correct ",(0,r.jsx)(t.code,{children:"jest"})," lifecycle hooks are invoked to\nset up and tear down your ",(0,r.jsx)(t.code,{children:"msw"})," instance, and enables the option that completely\nrejects requests that don't match one of your mock rules. This ensures that your\ntests cannot accidentally leak traffic into production from tests."]}),"\n",(0,r.jsx)(t.p,{children:"Example:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"import { setupRequestMockHandlers } from '@backstage/backend-test-utils';\nimport { rest } from 'msw';\nimport { setupServer } from 'msw/node';\n\ndescribe('read from remote', () => {\n  const worker = setupServer();\n  setupRequestMockHandlers(worker);\n\n  it('should auth and read successfully', async () => {\n    expect.assertions(1);\n\n    worker.use(\n      rest.get('https://remote-server.com/api/v3/foo', (req, res, ctx) => {\n        expect(req.headers.get('authorization')).toBe('Bearer fake');\n        return res(\n          ctx.status(200),\n          ctx.set('Content-Type', 'application/json'),\n          ctx.body(JSON.stringify({ value: 7 })),\n        );\n      }),\n    );\n\n    // exercise your plugin or service as usual, with real clients\n  });\n});\n"})}),"\n",(0,r.jsx)(t.h2,{id:"testing-database-interactions",children:"Testing Database Interactions"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"@backstage/backend-test-utils"})," package includes facilities for testing your\nplugins' interactions with databases, including spinning up ",(0,r.jsx)(t.code,{children:"testcontainers"}),"\npowered Docker images with real database engines to connect to."]}),"\n",(0,r.jsx)(t.p,{children:"The base setup for such a test could look as follows:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"// MyDatabaseClass.test.ts\nimport { TestDatabaseId, TestDatabases } from '@backstage/backend-test-utils';\nimport { MyDatabaseClass, type FooTableRow } from './MyDatabaseClass';\n\ndescribe('MyDatabaseClass', () => {\n  // Change this to the set of constants that you actually actively intend to\n  // support. This create call must be made inside a describe block. Make sure\n  // to create only one TestDatabases instance per file, since spinning up\n  // \"physical\" databases to test against is much costlier than creating the\n  // \"logical\" databases within them that the individual tests use.\n  const databases = TestDatabases.create({\n    ids: ['POSTGRES_13', 'POSTGRES_9', 'SQLITE_3', 'MYSQL_8'],\n  });\n\n  // Just an example of how to conveniently bundle up the setup code\n  async function createSubject(databaseId: TestDatabaseId) {\n    const knex = await databases.init(databaseId);\n    const subject = new MyDatabaseClass({ database: knex });\n    await subject.runMigrations();\n    return { knex, subject };\n  }\n\n  describe('foo', () => {\n    // Easily run the exact same test onto all supported databases\n    it.each(databases.eachSupportedId())(\n      'should run foo on %p',\n      async databaseId => {\n        const { knex, subject } = await createSubject(databaseId);\n        // raw knex is available for underlying manipulation\n        await knex<FooTableRow>('foo').insert({ value: 2 });\n        // drive your system under test as usual\n        await expect(subject.foos()).resolves.toEqual([{ value: 2 }]);\n      });\n  });\n"})}),"\n",(0,r.jsxs)(t.p,{children:["If you want to pass the test database instance into backend plugins or services,\nyou can supply it in the form of a mock instance of ",(0,r.jsx)(t.code,{children:"coreServices.database"})," to\nyour test database."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"const { knex, subject } = await createSubject(databaseId);\nconst { server } = await startTestBackend({\n  features: [\n    myPlugin(),\n    mockServices.database.mock({ getClient: async () => knex }),\n  ],\n});\n"})}),"\n",(0,r.jsxs)(t.p,{children:["When running locally, the tests only run against SQLite for the sake of speed.\nWhen the ",(0,r.jsx)(t.code,{children:"CI"})," environment variable is set, all given database engines are used."]}),"\n",(0,r.jsxs)(t.p,{children:["If you do not want or are unable to use docker based database engines, e.g. if\nyour CI environment is able to supply databases natively, the ",(0,r.jsx)(t.code,{children:"TestDatabases"}),"\nsupport custom connection strings through the use of environment variables that\nit'll take into account when present."]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"BACKSTAGE_TEST_DATABASE_POSTGRES13_CONNECTION_STRING"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"BACKSTAGE_TEST_DATABASE_POSTGRES9_CONNECTION_STRING"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"BACKSTAGE_TEST_DATABASE_MYSQL8_CONNECTION_STRING"})}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"testing-service-factories",children:"Testing Service Factories"}),"\n",(0,r.jsxs)(t.p,{children:["To facilitate testing of service factories, the ",(0,r.jsx)(t.code,{children:"@backstage/backend-test-utils"}),"\npackage provides a ",(0,r.jsx)(t.code,{children:"ServiceFactoryTester"})," helper that lets you instantiate services\nin a controlled context."]}),"\n",(0,r.jsxs)(t.p,{children:["The following example shows how to test a service factory where we also provide\na mocked implementation of the ",(0,r.jsx)(t.code,{children:"rootConfig"})," service."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"import {\n  mockServices,\n  ServiceFactoryTester,\n} from '@backstage/backend-test-utils';\nimport { myServiceFactory } from './myServiceFactory.ts';\n\ndescribe('myServiceFactory', () => {\n  it('should provide value', async () => {\n    const fakeConfig = { myConfiguredValue: 7 };\n\n    const tester = ServiceFactoryTester.from(myServiceFactory, {\n      dependencies: [mockServices.rootConfig.factory({ data: fakeConfig })],\n    });\n\n    const myService = await tester.get('test-plugin');\n\n    expect(myService.getValue()).toBe(7);\n  });\n});\n"})}),"\n",(0,r.jsx)(t.p,{children:"The service factory tester also provides mocked implementations of the majority\nof all core services by default."})]})}const d=function(e={}){const{wrapper:t}=Object.assign({},(0,s.ah)(),e.components);return t?(0,r.jsx)(t,Object.assign({},e,{children:(0,r.jsx)(l,e)})):l(e)}},862525:e=>{var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(s){return!1}}()?Object.assign:function(e,s){for(var o,a,i=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),c=1;c<arguments.length;c++){for(var u in o=Object(arguments[c]))n.call(o,u)&&(i[u]=o[u]);if(t){a=t(o);for(var l=0;l<a.length;l++)r.call(o,a[l])&&(i[a[l]]=o[a[l]])}}return i}},371426:(e,t,n)=>{n(862525);var r=n(827378),s=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var o=Symbol.for;s=o("react.element"),t.Fragment=o("react.fragment")}var a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,n){var r,o={},u=null,l=null;for(r in void 0!==n&&(u=""+n),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(l=t.ref),t)i.call(t,r)&&!c.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:s,type:e,key:u,ref:l,props:o,_owner:a.current}}t.jsx=u,t.jsxs=u},541535:(e,t,n)=>{var r=n(862525),s=60103,o=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var a=60109,i=60110,c=60112;t.Suspense=60113;var u=60115,l=60116;if("function"==typeof Symbol&&Symbol.for){var d=Symbol.for;s=d("react.element"),o=d("react.portal"),t.Fragment=d("react.fragment"),t.StrictMode=d("react.strict_mode"),t.Profiler=d("react.profiler"),a=d("react.provider"),i=d("react.context"),c=d("react.forward_ref"),t.Suspense=d("react.suspense"),u=d("react.memo"),l=d("react.lazy")}var f="function"==typeof Symbol&&Symbol.iterator;function p(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m={};function g(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||h}function y(){}function b(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||h}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(p(85));this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=g.prototype;var v=b.prototype=new y;v.constructor=b,r(v,g.prototype),v.isPureReactComponent=!0;var k={current:null},j=Object.prototype.hasOwnProperty,x={key:!0,ref:!0,__self:!0,__source:!0};function w(e,t,n){var r,o={},a=null,i=null;if(null!=t)for(r in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(a=""+t.key),t)j.call(t,r)&&!x.hasOwnProperty(r)&&(o[r]=t[r]);var c=arguments.length-2;if(1===c)o.children=n;else if(1<c){for(var u=Array(c),l=0;l<c;l++)u[l]=arguments[l+2];o.children=u}if(e&&e.defaultProps)for(r in c=e.defaultProps)void 0===o[r]&&(o[r]=c[r]);return{$$typeof:s,type:e,key:a,ref:i,props:o,_owner:k.current}}function T(e){return"object"==typeof e&&null!==e&&e.$$typeof===s}var _=/\/+/g;function S(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function C(e,t,n,r,a){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var c=!1;if(null===e)c=!0;else switch(i){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case s:case o:c=!0}}if(c)return a=a(c=e),e=""===r?"."+S(c,0):r,Array.isArray(a)?(n="",null!=e&&(n=e.replace(_,"$&/")+"/"),C(a,t,n,"",(function(e){return e}))):null!=a&&(T(a)&&(a=function(e,t){return{$$typeof:s,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,n+(!a.key||c&&c.key===a.key?"":(""+a.key).replace(_,"$&/")+"/")+e)),t.push(a)),1;if(c=0,r=""===r?".":r+":",Array.isArray(e))for(var u=0;u<e.length;u++){var l=r+S(i=e[u],u);c+=C(i,t,n,l,a)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),u=0;!(i=e.next()).done;)c+=C(i=i.value,t,n,l=r+S(i,u++),a);else if("object"===i)throw t=""+e,Error(p(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return c}function E(e,t,n){if(null==e)return e;var r=[],s=0;return C(e,r,"","",(function(e){return t.call(n,e,s++)})),r}function O(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var P={current:null};function R(){var e=P.current;if(null===e)throw Error(p(321));return e}var I={ReactCurrentDispatcher:P,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:k,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:E,forEach:function(e,t,n){E(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return E(e,(function(){t++})),t},toArray:function(e){return E(e,(function(e){return e}))||[]},only:function(e){if(!T(e))throw Error(p(143));return e}},t.Component=g,t.PureComponent=b,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=I,t.cloneElement=function(e,t,n){if(null==e)throw Error(p(267,e));var o=r({},e.props),a=e.key,i=e.ref,c=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,c=k.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(l in t)j.call(t,l)&&!x.hasOwnProperty(l)&&(o[l]=void 0===t[l]&&void 0!==u?u[l]:t[l])}var l=arguments.length-2;if(1===l)o.children=n;else if(1<l){u=Array(l);for(var d=0;d<l;d++)u[d]=arguments[d+2];o.children=u}return{$$typeof:s,type:e.type,key:a,ref:i,props:o,_owner:c}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:i,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},t.createElement=w,t.createFactory=function(e){var t=w.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=T,t.lazy=function(e){return{$$typeof:l,_payload:{_status:-1,_result:e},_init:O}},t.memo=function(e,t){return{$$typeof:u,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return R().useCallback(e,t)},t.useContext=function(e,t){return R().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return R().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return R().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return R().useLayoutEffect(e,t)},t.useMemo=function(e,t){return R().useMemo(e,t)},t.useReducer=function(e,t,n){return R().useReducer(e,t,n)},t.useRef=function(e){return R().useRef(e)},t.useState=function(e){return R().useState(e)},t.version="17.0.2"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Zo:()=>i,ah:()=>o});var r=n(667294);const s=r.createContext({});function o(e){const t=r.useContext(s);return r.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const a={};function i({components:e,children:t,disableParentContext:n}){let i;return i=n?"function"==typeof e?e({}):e||a:o(e),r.createElement(s.Provider,{value:i},t)}}}]);