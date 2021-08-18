"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[989],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>l,MDXProvider:()=>m,mdx:()=>f,useMDXComponents:()=>p,withMDXComponents:()=>d});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),d=function(e){return function(t){var n=p(t.components);return a.createElement(e,o({},t,{components:n}))}},p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,r=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,u=d["".concat(r,".").concat(m)]||d[m]||h[m]||o;return n?a.createElement(u,c(c({ref:t},l),{},{components:n})):a.createElement(u,c({ref:t},l))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,r[1]=c;for(var l=2;l<o;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},25631:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>r,contentTitle:()=>c,metadata:()=>s,toc:()=>l,default:()=>p});var a=n(87462),i=n(63366),o=(n(67294),n(3905)),r={id:"architecture",title:"Internal \ud83c\udfd7: Sections implementation architecture"},c=void 0,s={unversionedId:"sections/architecture",id:"sections/architecture",isDocsHomePage:!1,title:"Internal \ud83c\udfd7: Sections implementation architecture",description:"This document gives an insight into the implementation of Sections, for those hackers and code explorers who want to take a peek behind the scenes for inspiration or to contribute. The understanding of the implementation details described in this document are not necessary for just using Sections.",source:"@site/../docs/sections/architecture.md",sourceDirName:"sections",slug:"/sections/architecture",permalink:"/docs/sections/architecture",editUrl:"https://github.com/facebook/litho/edit/master/website/../docs/sections/architecture.md",version:"current",frontMatter:{id:"architecture",title:"Internal \ud83c\udfd7: Sections implementation architecture"},sidebar:"mainSidebar",previous:{title:"Advanced: Writing your own DiffSection",permalink:"/docs/sections/diff-sections"},next:{title:"Built-in widgets",permalink:"/docs/widgets/builtin-widgets"}},l=[{value:"What is a SectionTree?",id:"what-is-a-sectiontree",children:[]},{value:"Updating the SectionTree",id:"updating-the-sectiontree",children:[]},{value:"Computing ChangeSets",id:"computing-changesets",children:[{value:"SectionTree and RecyclerCollectionComponent",id:"sectiontree-and-recyclercollectioncomponent",children:[]}]}],d={toc:l};function p(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,o.mdx)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,"This document gives an insight into the implementation of Sections, for those hackers and code explorers who want to take a peek behind the scenes for inspiration or to contribute. The understanding of the implementation details described in this document are not necessary for just using Sections."),(0,o.mdx)("p",null,"At its core, the Sections framework is responsible for producing a ",(0,o.mdx)("a",{parentName:"p",href:"pathname:///javadoc/com/facebook/litho/sections/ChangeSet.html"},"ChangeSet")," from immutable props and a hierarchy of ",(0,o.mdx)("a",{parentName:"p",href:"pathname:///javadoc/com/facebook/litho/sections/Section.html"},"Sections"),". The framework produces these ",(0,o.mdx)("inlineCode",{parentName:"p"},"ChangeSets")," by creating a new section hierarchy whenever a ",(0,o.mdx)("inlineCode",{parentName:"p"},"SectionTree")," is set with a Section with new props or whenever a Section in the hierarchy updates it's internal state and comparing the new hierarchy with the old hierarchy."),(0,o.mdx)("h2",{id:"what-is-a-sectiontree"},"What is a SectionTree?"),(0,o.mdx)("p",null,"Using the Sections framework begins with creating a ",(0,o.mdx)("a",{parentName:"p",href:"pathname:///javadoc/com/facebook/litho/sections/SectionTree.html"},"SectionTree"),". ",(0,o.mdx)("inlineCode",{parentName:"p"},"SectionTree")," instances are responsible for:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Computing/Recomputing changes whenever state & props values change."),(0,o.mdx)("li",{parentName:"ul"},"Communicate with a ",(0,o.mdx)("a",{parentName:"li",href:"pathname:///javadoc/com/facebook/litho/sections/SectionTree.Target.html"},"Target")," implementation that can update UI (including telling the ",(0,o.mdx)("inlineCode",{parentName:"li"},"Target")," about new changes).")),(0,o.mdx)("p",null,"SectionTrees must be created with a ",(0,o.mdx)("inlineCode",{parentName:"p"},"Target")," implementation. The ",(0,o.mdx)("a",{parentName:"p",href:"pathname:///javadoc/com/facebook/litho/sections/SectionTree.Target.html"},"Target")," interface is the API between ",(0,o.mdx)("inlineCode",{parentName:"p"},"SectionTree")," and UI. After computing a ChangeSet from a section hierarchy, a ",(0,o.mdx)("inlineCode",{parentName:"p"},"SectionTree")," instance will relay the changes to it's ",(0,o.mdx)("inlineCode",{parentName:"p"},"Target"),". You can create a target for whatever custom UI you want but the Sections framework has already implemented some ",(0,o.mdx)("inlineCode",{parentName:"p"},"Targets")," for you. ",(0,o.mdx)("a",{parentName:"p",href:"pathname:///javadoc/com/facebook/litho/sections/widget/SectionBinderTarget.html"},"SectionBinderTarget")," is one a ",(0,o.mdx)("inlineCode",{parentName:"p"},"Target")," implementation that relays changes to a ",(0,o.mdx)("inlineCode",{parentName:"p"},"RecyclerBinder")," for rendering."),(0,o.mdx)("h2",{id:"updating-the-sectiontree"},"Updating the SectionTree"),(0,o.mdx)("p",null,"The framework can perform incremental and conditional updates on the structure of Sections whenever any props or state values change. The infrastructure also calculates the minimal operations it needs to perform on the existing hierarchy to update the list to reflect the new data."),(0,o.mdx)("p",null,"To update a section tree to reflect new props, create a section with the new prop values and call ",(0,o.mdx)("a",{parentName:"p",href:"pathname:///javadoc/com/facebook/litho/sections/SectionTree.html#setRoot-com.facebook.litho.sections.Section-"},"SectionTree#setRoot()"),". This is also how you set an initial root section on a tree since it's essentially diffing a new section hierarchy with an empty hierarchy."),(0,o.mdx)("p",null,"To update a section tree when a state value changes, just perform a regular state update as described in the documentation for litho ",(0,o.mdx)("a",{parentName:"p",href:"/docs/mainconcepts/coordinate-state-actions/state-overview"},"State"),"."),(0,o.mdx)("p",null,"You may notice that the ",(0,o.mdx)("inlineCode",{parentName:"p"},"setRoot()")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},"updateState()"),' methods also have "async" implementations (',(0,o.mdx)("inlineCode",{parentName:"p"},"setRootAsync()")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},"updateStateAsync()"),").  The ",(0,o.mdx)("inlineCode",{parentName:"p"},"*async()")," methods will ensure that the resulting ChangeSet calculation is performed on a background thread.  Otherwise the resulting ChangeSet calculation will be done synchronously on whatever thread ",(0,o.mdx)("inlineCode",{parentName:"p"},"setRoot()")," or ",(0,o.mdx)("inlineCode",{parentName:"p"},"updateState()")," was called. This is just like Litho's ",(0,o.mdx)("a",{parentName:"p",href:"/docs/asynchronous-layout#sync-and-async-operations"},"asychronous layout"),"."),(0,o.mdx)("h2",{id:"computing-changesets"},"Computing ChangeSets"),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"SectionTree")," instances compute changes in two steps: generating trees based on props/state values, then creating a changeset by comparing two trees."),(0,o.mdx)("p",null,"A tree is generated from a single root section by recursively calling ",(0,o.mdx)("inlineCode",{parentName:"p"},"@OnCreateChildren")," on group section specs until it reaches the leaf sections, diff section specs.  As it visits a new section, ",(0,o.mdx)("inlineCode",{parentName:"p"},"SectionTree")," will:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Create a new ",(0,o.mdx)("inlineCode",{parentName:"li"},"SectionContext")," scoped to this new section"),(0,o.mdx)("li",{parentName:"ul"},"Check if there's a corresponding section in the current hierarchy (via ",(0,o.mdx)("a",{parentName:"li",href:"/docs/mainconcepts/coordinate-state-actions/state-overview#keys-and-identifying-components"},"key"),") and transfer any state and service values over to the new section."),(0,o.mdx)("li",{parentName:"ul"},"Check if there's any pending state updates for the new section (via ",(0,o.mdx)("a",{parentName:"li",href:"/docs/mainconcepts/coordinate-state-actions/state-overview#keys-and-identifying-components"},"key"),") and perform the updates if they exist."),(0,o.mdx)("li",{parentName:"ul"},"Create the new child sections by calling ",(0,o.mdx)("inlineCode",{parentName:"li"},"SectionLifecycle#createChildren")," and recursively visit those child sections.")),(0,o.mdx)("p",null,"After generating a new tree, ",(0,o.mdx)("inlineCode",{parentName:"p"},"SectionTree")," will recursively traverse the new tree and compare it against the current tree to generate a ",(0,o.mdx)("inlineCode",{parentName:"p"},"ChangeSet"),". This is where we call ",(0,o.mdx)("inlineCode",{parentName:"p"},"SectionLifecycle#generateChangeSet")," on Diff Sections. When traversing the new tree, the framework translates local indexes to global indexes as it merges all ",(0,o.mdx)("inlineCode",{parentName:"p"},"ChangeSet"),"s into a single ",(0,o.mdx)("inlineCode",{parentName:"p"},"ChangeSet")," for the whole hierarchy."),(0,o.mdx)("p",null,"NOTE: ",(0,o.mdx)("a",{parentName:"p",href:"pathname:///javadoc/com/facebook/litho/sections/SectionContext.html"},"SectionContext")," is an object that is used to associate each ",(0,o.mdx)("inlineCode",{parentName:"p"},"Section")," instance in a hierarchy with it's ",(0,o.mdx)("inlineCode",{parentName:"p"},"SectionTree"),".  ",(0,o.mdx)("inlineCode",{parentName:"p"},"SectionContext")," instances are released and recreated every time a ",(0,o.mdx)("inlineCode",{parentName:"p"},"SectionTree")," re-calculates it's changeset (anytime props or state change). This means you should not rely on the ",(0,o.mdx)("inlineCode",{parentName:"p"},"SectionContext")," passed into your spec delegate methods to always be associated with a valid ",(0,o.mdx)("inlineCode",{parentName:"p"},"Section")," instance.  As a general rule, a ",(0,o.mdx)("inlineCode",{parentName:"p"},"SectionContext")," object is only valid between the ",(0,o.mdx)("inlineCode",{parentName:"p"},"@OnBindService")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},"@OnUnbindService")," methods. You should not keep an instance of ",(0,o.mdx)("inlineCode",{parentName:"p"},"SectionContext")," alive outside this window."),(0,o.mdx)("h3",{id:"sectiontree-and-recyclercollectioncomponent"},"SectionTree and RecyclerCollectionComponent"),(0,o.mdx)("p",null,(0,o.mdx)("a",{parentName:"p",href:"recycler-collection-component"},"RecyclerCollectionComponent")," is a Litho component that creates and binds a ",(0,o.mdx)("inlineCode",{parentName:"p"},"SectionTree")," to a ",(0,o.mdx)("inlineCode",{parentName:"p"},"Recycler")," behind the scenes to make it incredibly easy to use the Sections framework with Litho. ",(0,o.mdx)("inlineCode",{parentName:"p"},"RecyclerCollectionComponent")," creates and holds onto a ",(0,o.mdx)("inlineCode",{parentName:"p"},"SectionTree")," instance as state and exposes a prop to accept new sections.  Updating the SectionTree when using RecyclerCollectionComponent is as simple as updating the section prop passed into it."))}p.isMDXComponent=!0}}]);