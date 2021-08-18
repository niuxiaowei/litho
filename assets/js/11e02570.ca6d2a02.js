"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3694],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>s,MDXProvider:()=>d,mdx:()=>g,useMDXComponents:()=>p,withMDXComponents:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),m=function(e){return function(t){var n=p(t.components);return r.createElement(e,o({},t,{components:n}))}},p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,y=m["".concat(i,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(y,l(l({ref:t},s),{},{components:n})):r.createElement(y,l({ref:t},s))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=y;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},11679:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>i,contentTitle:()=>l,metadata:()=>c,toc:()=>s,default:()=>p});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i={id:"coding-style",title:"Coding Style"},l=void 0,c={unversionedId:"best-practices/coding-style",id:"best-practices/coding-style",isDocsHomePage:!1,title:"Coding Style",description:"This page was moved from the old website without any change and might be updated",source:"@site/../docs/best-practices/coding-style.md",sourceDirName:"best-practices",slug:"/best-practices/coding-style",permalink:"/docs/best-practices/coding-style",editUrl:"https://github.com/facebook/litho/edit/master/website/../docs/best-practices/coding-style.md",version:"current",frontMatter:{id:"coding-style",title:"Coding Style"},sidebar:"mainSidebar",previous:{title:"Props vs. State",permalink:"/docs/best-practices/props-vs-state"},next:{title:"Introduction",permalink:"/docs/deep-dive/reconciliation"}},s=[],m={toc:s};function p(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.mdx)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,o.mdx)("h5",{parentName:"div"},(0,o.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,o.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Content will be updated")),(0,o.mdx)("div",{parentName:"div",className:"admonition-content"},(0,o.mdx)("p",{parentName:"div"},"This page was moved from the old website without any change and might be updated"))),(0,o.mdx)("h4",{id:"guidelines"},"Guidelines:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Name your specs consistently with ",(0,o.mdx)("em",{parentName:"li"},"NAMEComponentSpec")," to generate a component called ",(0,o.mdx)("em",{parentName:"li"},"NAMEComponent"),"."),(0,o.mdx)("li",{parentName:"ul"},"The ",(0,o.mdx)("em",{parentName:"li"},"ComponentContext")," argument should be simply called ",(0,o.mdx)("inlineCode",{parentName:"li"},"c")," to make your layout code less verbose and more readable."),(0,o.mdx)("li",{parentName:"ul"},"Use resource types (",(0,o.mdx)("inlineCode",{parentName:"li"},"ResType.STRING"),", ",(0,o.mdx)("inlineCode",{parentName:"li"},"ResType.COLOR"),", ",(0,o.mdx)("inlineCode",{parentName:"li"},"ResType.DIMEN_SIZE"),", etc) where appropriate to make it easier to set prop values from Android resources."),(0,o.mdx)("li",{parentName:"ul"},"Declare all required props first then optional ones (",(0,o.mdx)("inlineCode",{parentName:"li"},"optional = true"),")."),(0,o.mdx)("li",{parentName:"ul"},"Declare common props (props defined for all Components on ",(0,o.mdx)("inlineCode",{parentName:"li"},"Component.Builder"),") after the component's own props."),(0,o.mdx)("li",{parentName:"ul"},"Use static imports on all layout enums (",(0,o.mdx)("inlineCode",{parentName:"li"},"YogaEdge"),", ",(0,o.mdx)("inlineCode",{parentName:"li"},"YogaAlign"),", ",(0,o.mdx)("inlineCode",{parentName:"li"},"YogaJustify"),", etc) to reduce your layout code and make it more readable."),(0,o.mdx)("li",{parentName:"ul"},"Lifecycle methods, such as ",(0,o.mdx)("inlineCode",{parentName:"li"},"@OnCreateLayout"),", are static and package-private."),(0,o.mdx)("li",{parentName:"ul"},"Use inline conditionals on optional children to keep the layout construction code fluent if possible."),(0,o.mdx)("li",{parentName:"ul"},"If you are constructing a child container, add the container in the following line. This gives the code a layout like construction.")),(0,o.mdx)("p",null,"Here is some sample code with our styling guidelines:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-java"},"@LayoutSpec\nclass MyComponentSpec {\n\n  @OnCreateLayout\n  static Component onCreateLayout(\n      ComponentContext c,\n      @Prop(resType = STRING) String title,\n      @Prop(optional = true) Drawable image) {\n\n  return Row.create(c)\n      .alignItems(CENTER)\n      .paddingRes(R.dimen.some_dimen)\n      .child(\n          Image.create(c)\n              .drawable(image)\n              .width(40)\n              .height(40)\n              .marginRes(RIGHT, R.dimen.my_margin))\n      .child(TextUtils.isEmpty(title) ? null :\n          Text.create(c)\n              .text(title)\n              .textColorAttr(R.attr.textColorTertiary)\n              .marginDip(5)\n              .flexGrow(1f))\n      .build();\n  }\n}\n")))}p.isMDXComponent=!0}}]);