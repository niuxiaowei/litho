"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8845],{3905:(e,n,t)=>{t.r(n),t.d(n,{MDXContext:()=>d,MDXProvider:()=>s,mdx:()=>v,useMDXComponents:()=>p,withMDXComponents:()=>c});var i=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(){return(a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e}).apply(this,arguments)}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function m(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=i.createContext({}),c=function(e){return function(n){var t=p(n.components);return i.createElement(e,a({},n,{components:t}))}},p=function(e){var n=i.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=p(e.components);return i.createElement(d.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},x=i.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,r=e.parentName,d=m(e,["components","mdxType","originalType","parentName"]),c=p(t),s=o,x=c["".concat(r,".").concat(s)]||c[s]||u[s]||a;return t?i.createElement(x,l(l({ref:n},d),{},{components:t})):i.createElement(x,l({ref:n},d))}));function v(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,r=new Array(a);r[0]=x;var l={};for(var m in n)hasOwnProperty.call(n,m)&&(l[m]=n[m]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var d=2;d<a;d++)r[d]=t[d];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}x.displayName="MDXCreateElement"},74341:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>l,contentTitle:()=>m,metadata:()=>d,toc:()=>c,default:()=>s});var i=t(87462),o=t(63366),a=(t(67294),t(3905)),r=t(44256),l={id:"enabling-reconciliation",title:"Enabling Reconciliation"},m=void 0,d={unversionedId:"deep-dive/reconciliation/enabling-reconciliation",id:"deep-dive/reconciliation/enabling-reconciliation",isDocsHomePage:!1,title:"Enabling Reconciliation",description:"Reconciliation is enabled by default.",source:"@site/../docs/deep-dive/reconciliation/enabling-reconciliation.mdx",sourceDirName:"deep-dive/reconciliation",slug:"/deep-dive/reconciliation/enabling-reconciliation",permalink:"/docs/deep-dive/reconciliation/enabling-reconciliation",editUrl:"https://github.com/facebook/litho/edit/master/website/../docs/deep-dive/reconciliation/enabling-reconciliation.mdx",version:"current",frontMatter:{id:"enabling-reconciliation",title:"Enabling Reconciliation"},sidebar:"mainSidebar",previous:{title:"Introduction",permalink:"/docs/deep-dive/reconciliation"},next:{title:"Incremental Mount",permalink:"/docs/deep-dive/incremental-mount"}},c=[{value:"ComponentTree",id:"componenttree",children:[]},{value:"RecyclerCollectionComponent",id:"recyclercollectioncomponent",children:[]},{value:"Sections",id:"sections",children:[]}],p={toc:c};function s(e){var n=e.components,t=(0,o.Z)(e,["components"]);return(0,a.mdx)("wrapper",(0,i.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)("div",{className:"admonition admonition-info alert alert--info"},(0,a.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,a.mdx)("h5",{parentName:"div"},(0,a.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,a.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.mdx)("div",{parentName:"div",className:"admonition-content"},(0,a.mdx)("p",{parentName:"div"},"Reconciliation is enabled by default."))),(0,a.mdx)(r.FbInternalOnly,{mdxType:"FbInternalOnly"},(0,a.mdx)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,a.mdx)("h5",{parentName:"div"},(0,a.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,a.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.mdx)("div",{parentName:"div",className:"admonition-content"},(0,a.mdx)("p",{parentName:"div"},"It has been explicitly disabled throughout fbsource because reconciliation skips some lifecycle calls which some components may have (incorrectly) come to rely on. So, please remove the usages of the following deprecated APIs in your surface before proceeding.")))),(0,a.mdx)(r.OssOnly,{mdxType:"OssOnly"},(0,a.mdx)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,a.mdx)("h5",{parentName:"div"},(0,a.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,a.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.mdx)("div",{parentName:"div",className:"admonition-content"},(0,a.mdx)("p",{parentName:"div"},"Please remove the usages of the following deprecated APIs in your surface before proceeding.")))),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-java"},"// Remove usages of\nLithoView#create(Context, Component, boolean): LithoView\nLithoView#create(ComponentContext, Component, boolean): LithoView\nLithoView#setComponentWithoutReconciliation(Component): void\nLithoView#setComponentAsyncWithoutReconciliation(Component): void\n\n// Instead use\nLithoView#create(Context, Component): LithoView\nLithoView#create(ComponentContext, Component): LithoView\nLithoView#setComponent(Component): void\nLithoView#setComponentAsync(Component): void\n")),(0,a.mdx)(r.FbInternalOnly,{mdxType:"FbInternalOnly"},(0,a.mdx)("div",{className:"admonition admonition-info alert alert--info"},(0,a.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,a.mdx)("h5",{parentName:"div"},(0,a.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,a.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.mdx)("div",{parentName:"div",className:"admonition-content"},(0,a.mdx)("p",{parentName:"div"},"Please remove the usages of the prop ",(0,a.mdx)("inlineCode",{parentName:"p"},"isReconciliationEnabled")," from the following components in your surface before proceeding:"),(0,a.mdx)("ul",{parentName:"div"},(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"FBInfiniteHScroll")))))),(0,a.mdx)("h3",{id:"componenttree"},"ComponentTree"),(0,a.mdx)("p",null,"The ",(0,a.mdx)("inlineCode",{parentName:"p"},"ComponentTree")," builder exposes an API to enable or disable reconciliation."),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-java"},"ComponentTree.create(context)\n  .isReconciliationEnabled(true)\n  .build();\n")),(0,a.mdx)(r.FbInternalOnly,{mdxType:"FbInternalOnly"},(0,a.mdx)("p",null,"Example integrations:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://fburl.com/diffusion/azpz7q8u"},"Feed")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://fburl.com/diffusion/xv0puz80"},"Story Viewer")))),(0,a.mdx)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,a.mdx)("h5",{parentName:"div"},(0,a.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,a.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.mdx)("div",{parentName:"div",className:"admonition-content"},(0,a.mdx)("p",{parentName:"div"},"In this integration the config is not passed into any Sections within the component\nhierarchy. It needs to be explicitly set in the Sections (see below). There are plans to enable\npropagation over the Section boundary in future milestones.**"))),(0,a.mdx)("h3",{id:"recyclercollectioncomponent"},"RecyclerCollectionComponent"),(0,a.mdx)("p",null,"The ",(0,a.mdx)("inlineCode",{parentName:"p"},"RecyclerBinderConfiguration")," and the ",(0,a.mdx)("inlineCode",{parentName:"p"},"RecyclerBinder")," builders both expose an API to enable or\ndisable reconciliation."),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-java"},"RecyclerBinderConfiguration.create()\n  .isReconciliationEnabled(false)\n  .build();\n")),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-java"},"new RecyclerBinder.Builder()\n  .isReconciliationEnabled(true)\n  .build(context);\n")),(0,a.mdx)(r.FbInternalOnly,{mdxType:"FbInternalOnly"},(0,a.mdx)("p",null,"Example integrations:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://fburl.com/diffusion/l10jx2ys"},"Notifications Tab")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://fburl.com/diffusion/ld30lvlm"},"Watch Tab")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://fburl.com/diffusion/tp4j1arg"},"Profile Tab")))),(0,a.mdx)("h3",{id:"sections"},"Sections"),(0,a.mdx)("p",null,"The ",(0,a.mdx)("inlineCode",{parentName:"p"},"ComponentRenderInfo")," builder exposes an API to enable or disable reconciliation for individual\nSections in a ",(0,a.mdx)("inlineCode",{parentName:"p"},"GroupSectionSpec"),"."),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-java"},"ComponentRenderInfo.create()\n  .component(component)\n  .customAttribute(ComponentRenderInfo.RECONCILIATION_ENABLED, false)\n  .build();\n")),(0,a.mdx)(r.FbInternalOnly,{mdxType:"FbInternalOnly"},(0,a.mdx)("p",null,"Example integrations:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://fburl.com/diffusion/2h1npnoj"},"PaginatedStoriesHScrollSectionSpec")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://fburl.com/diffusion/jhsnym17"},"StoriesHScrollSectionSpec")))))}s.isMDXComponent=!0}}]);