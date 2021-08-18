"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6692],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>u,MDXProvider:()=>m,mdx:()=>g,useMDXComponents:()=>c,withMDXComponents:()=>l});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),l=function(e){return function(t){var n=c(t.components);return r.createElement(e,o({},t,{components:n}))}},c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,u=d(e,["components","mdxType","originalType","parentName"]),l=c(n),m=i,f=l["".concat(a,".").concat(m)]||l[m]||p[m]||o;return n?r.createElement(f,s(s({ref:t},u),{},{components:n})):r.createElement(f,s({ref:t},u))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},13919:(e,t,n)=>{function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}n.d(t,{b:()=>r,Z:()=>i})},44996:(e,t,n)=>{n.r(t),n.d(t,{useBaseUrlUtils:()=>o,default:()=>a});var r=n(52263),i=n(13919);function o(){var e=(0,r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var o=void 0===r?{}:r,a=o.forcePrependBaseUrl,s=void 0!==a&&a,d=o.absolute,u=void 0!==d&&d;if(!n)return n;if(n.startsWith("#"))return n;if((0,i.b)(n))return n;if(s)return t+n;var l=n.startsWith(t)?n:t+n.replace(/^\//,"");return u?e+l:l}(o,n,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},30474:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>s,contentTitle:()=>d,metadata:()=>u,toc:()=>l,default:()=>m});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),a=n(44996),s={id:"tests-in-android-studio",title:"Testing in Android Studio"},d=void 0,u={unversionedId:"testing/tests-in-android-studio",id:"testing/tests-in-android-studio",isDocsHomePage:!1,title:"Testing in Android Studio",description:"This page was moved from the old website without any change and might be updated",source:"@site/../docs/testing/tests-in-android-studio.mdx",sourceDirName:"testing",slug:"/testing/tests-in-android-studio",permalink:"/docs/testing/tests-in-android-studio",editUrl:"https://github.com/facebook/litho/edit/master/website/../docs/testing/tests-in-android-studio.mdx",version:"current",frontMatter:{id:"tests-in-android-studio",title:"Testing in Android Studio"},sidebar:"mainSidebar",previous:{title:"End-to-End Tests",permalink:"/docs/testing/espresso-testing"},next:{title:"Animation basics",permalink:"/docs/animations/transition-basics"}},l=[],c={toc:l};function m(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,o.mdx)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,o.mdx)("h5",{parentName:"div"},(0,o.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,o.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Content will be updated")),(0,o.mdx)("div",{parentName:"div",className:"admonition-content"},(0,o.mdx)("p",{parentName:"div"},"This page was moved from the old website without any change and might be updated"))),(0,o.mdx)("p",null,"The Litho repository can be used with both Buck and Gradle. The Buck plugin for\nAndroid Studio has support for running tests by simply clicking next to a tests\nmethod and requires no further configuration."),(0,o.mdx)("p",null,"Gradle, however, can be a bit tricky to convince to run our tests due to\nour use of native libraries. When running a test, you may see an error\nmessage complaining about ",(0,o.mdx)("inlineCode",{parentName:"p"},"libyoga")," like this:"),(0,o.mdx)("img",{src:(0,a.default)("/images/android-studio-tests-0.png"),width:"800px"}),(0,o.mdx)("p",null,"However, you can easily fix those loading issues by modifying the test settings.\nFirst, add ",(0,o.mdx)("inlineCode",{parentName:"p"},"-Djava.library.path=build/jniLibs"),' to the "VM Options" of your run\nconfiguration. Then, add the environment variables corresponding to your\nplatform:'),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"DYLD_LIBRARY_PATH=build/jniLibs")," for MacOS, or"),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"LD_LIBRARY_PATH=build/jniLibs")," for Linux.")),(0,o.mdx)("p",null,"The end result should look like this:"),(0,o.mdx)("img",{src:(0,a.default)("/images/android-studio-tests-1.png"),width:"800px"}),(0,o.mdx)("p",null,"Afterwards, you should be able to run your tests and see the results directly in\nAndroid Studio. Added benefit: You can continuously run tests in the background\non every change or manually rerun them by pressing ",(0,o.mdx)("inlineCode",{parentName:"p"},"Ctrl+Shift+F10")," by default."),(0,o.mdx)("img",{src:(0,a.default)("/images/android-studio-tests-2.png"),width:"800px"}),(0,o.mdx)("p",null,"When this works for you, make sure to update the default settings as well so you\ndon't need to enter those settings again for every new test you run:"),(0,o.mdx)("img",{src:(0,a.default)("/images/android-studio-tests-3.png"),width:"800px"}))}m.isMDXComponent=!0}}]);