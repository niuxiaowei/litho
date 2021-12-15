"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4800],{3905:(e,n,t)=>{t.r(n),t.d(n,{MDXContext:()=>l,MDXProvider:()=>m,mdx:()=>f,useMDXComponents:()=>p,withMDXComponents:()=>c});var i=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(){return o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},o.apply(this,arguments)}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=i.createContext({}),c=function(e){return function(n){var t=p(n.components);return i.createElement(e,o({},n,{components:t}))}},p=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):d(d({},n),e)),t},m=function(e){var n=p(e.components);return i.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},h=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),c=p(t),m=a,h=c["".concat(r,".").concat(m)]||c[m]||u[m]||o;return t?i.createElement(h,d(d({ref:n},l),{},{components:t})):i.createElement(h,d({ref:n},l))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,r=new Array(o);r[0]=h;var d={};for(var s in n)hasOwnProperty.call(n,s)&&(d[s]=n[s]);d.originalType=e,d.mdxType="string"==typeof e?e:a,r[1]=d;for(var l=2;l<o;l++)r[l]=t[l];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}h.displayName="MDXCreateElement"},13919:(e,n,t)=>{function i(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!i(e)}t.d(n,{b:()=>i,Z:()=>a})},44996:(e,n,t)=>{t.r(n),t.d(n,{useBaseUrlUtils:()=>o,default:()=>r});var i=t(52263),a=t(13919);function o(){var e=(0,i.default)().siteConfig,n=(e=void 0===e?{}:e).baseUrl,t=void 0===n?"/":n,o=e.url;return{withBaseUrl:function(e,n){return function(e,n,t,i){var o=void 0===i?{}:i,r=o.forcePrependBaseUrl,d=void 0!==r&&r,s=o.absolute,l=void 0!==s&&s;if(!t)return t;if(t.startsWith("#"))return t;if((0,a.b)(t))return t;if(d)return n+t;var c=t.startsWith(n)?t:n+t.replace(/^\//,"");return l?e+c:c}(o,t,e,n)}}}function r(e,n){return void 0===n&&(n={}),(0,o().withBaseUrl)(e,n)}},76656:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>l,contentTitle:()=>c,metadata:()=>p,toc:()=>m,default:()=>h});var i=t(87462),a=t(63366),o=(t(67294),t(3905)),r=t(44996),d=t(44256),s=["components"],l={id:"start",title:"The Basics: DiffSection and GroupSection"},c=void 0,p={unversionedId:"sections/start",id:"sections/start",isDocsHomePage:!1,title:"The Basics: DiffSection and GroupSection",description:"Introduction to Sections API",source:"@site/../docs/sections/start.mdx",sourceDirName:"sections",slug:"/sections/start",permalink:"/docs/sections/start",editUrl:"https://github.com/facebook/litho/edit/master/website/../docs/sections/start.mdx",tags:[],version:"current",frontMatter:{id:"start",title:"The Basics: DiffSection and GroupSection"},sidebar:"mainSidebar",previous:{title:"Visibility Handling",permalink:"/docs/mainconcepts/coordinate-state-actions/visibility-handling"},next:{title:"Adding and adapting RecyclerCollection to your App",permalink:"/docs/sections/recycler-collection-component"}},m=[{value:"Introduction to Sections API",id:"introduction-to-sections-api",children:[],level:2},{value:"List Building Blocks",id:"list-building-blocks",children:[{value:"RecyclerCollectionComponent",id:"recyclercollectioncomponent",children:[],level:3},{value:"DiffSection",id:"diffsection",children:[{value:"SingleComponentSection",id:"singlecomponentsection",children:[],level:4},{value:"DataDiffSection",id:"datadiffsection",children:[],level:4}],level:3},{value:"GroupSection",id:"groupsection",children:[],level:3}],level:2},{value:"Putting all the Pieces Together",id:"putting-all-the-pieces-together",children:[],level:2},{value:"Further Reading",id:"further-reading",children:[],level:2}],u={toc:m};function h(e){var n=e.components,t=(0,a.Z)(e,s);return(0,o.mdx)("wrapper",(0,i.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("h2",{id:"introduction-to-sections-api"},"Introduction to Sections API"),(0,o.mdx)("div",{className:"admonition admonition-info alert alert--info"},(0,o.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,o.mdx)("h5",{parentName:"div"},(0,o.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,o.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.mdx)("div",{parentName:"div",className:"admonition-content"},(0,o.mdx)("p",{parentName:"div"},"The Sections API, which is built on top of Litho, is a declarative, composable, and thread-safe API for writing highly-optimized list screens."))),(0,o.mdx)("p",null,"The Sections API tries to address issues experiences at Facebook when writing complex lists, such as maintaining many view types, handling multiple data sources, and composing lists together."),(0,o.mdx)("p",null,"Litho Components are used for various aspects of the UI. Sections are a way of composing data into a list of Litho Components or Views.\nIf you visualize your screen as being a tree of components, the nodes for the root of the tree and the subtrees are Sections, while the leaves are Litho Components that represent individual items that will be displayed on screen. The following diagram shows the relationship between Sections and Litho components."),(0,o.mdx)("img",{src:(0,r.default)("/images/sections-intro.png"),width:"800px"}),(0,o.mdx)("p",null,"Sections use the same hierarchical declarative data model as Components.  Under the hood, Sections transparently handle processes such as calculating minimal sets of changes for data updates and granular UI refreshes. As part of Litho, the Sections API shares the same main concepts, such as annotation-based code generation, event handling, props, and state updates. Sections functionality is built on top of ",(0,o.mdx)("a",{parentName:"p",href:"https://developer.android.com/guide/topics/ui/layout/recyclerview"},"Android's RecyclerView"),"."),(0,o.mdx)("h2",{id:"list-building-blocks"},"List Building Blocks"),(0,o.mdx)("p",null,"In this document, you'll be walked through the parts necessary to build a list: a ",(0,o.mdx)("inlineCode",{parentName:"p"},"RecyclerCollectionComponent")," for your layout, which sets several ",(0,o.mdx)("inlineCode",{parentName:"p"},"DiffSection")," that are either ",(0,o.mdx)("inlineCode",{parentName:"p"},"SingleComponentSection")," or ",(0,o.mdx)("inlineCode",{parentName:"p"},"DataDiffSection"),", all contained inside ",(0,o.mdx)("inlineCode",{parentName:"p"},"GroupSection")," hierarchies."),(0,o.mdx)("p",null,"As preparation, the following 10-minute video 'Litho Lessons: Diffing in Sections' covers the basics of how diffing operates."),(0,o.mdx)("div",{align:"center"},(0,o.mdx)("iframe",{"padding-top":"10px",width:"560",height:"315",src:"https://www.youtube-nocookie.com/embed/-Ahskig2Lw0",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),(0,o.mdx)("h3",{id:"recyclercollectioncomponent"},"RecyclerCollectionComponent"),(0,o.mdx)("p",null,"You can use the ",(0,o.mdx)("inlineCode",{parentName:"p"},"RecyclerCollectionComponent"),", as you would use any other component in the framework, by building it and adding it as a child in your layout, as shown in the following code:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-java"},"RecyclerCollectionComponent.create(c)\n    .section(createGroupSection())\n    .build();\n")),(0,o.mdx)("p",null,"For now, this is all you need to know about adding Sections to your layout.\nFor advanced use cases, such as snapping and horizontal lists, see the ",(0,o.mdx)("a",{parentName:"p",href:"/docs/sections/recycler-collection-component"},"RecyclerCollectionComponent")," page."),(0,o.mdx)("h3",{id:"diffsection"},"DiffSection"),(0,o.mdx)("p",null,"Most lists are composed of groups of homogeneous items interleaved with one-off items: picture a list of contacts sorted alphabetically and separated by headers indicating the first letter of the contact's name."),(0,o.mdx)("p",null,"Following this model, the Sections API ships two ",(0,o.mdx)("inlineCode",{parentName:"p"},"DiffSectionSpec")," implementations that can be combined to represent the structure of nearly any surface: ",(0,o.mdx)("inlineCode",{parentName:"p"},"SingleComponentSection")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},"DataDiffSection"),"."),(0,o.mdx)("h4",{id:"singlecomponentsection"},"SingleComponentSection"),(0,o.mdx)("p",null,"A ",(0,o.mdx)("inlineCode",{parentName:"p"},"SingleComponentSection")," is used to represent a ",(0,o.mdx)("strong",{parentName:"p"},"one-off row")," in a complex list. As the name suggests, you can use this Section to render a single Component, which is passed to this Section as its only prop."),(0,o.mdx)("p",null,"One of the typical use cases of a ",(0,o.mdx)("inlineCode",{parentName:"p"},"SingleComponentSection")," is to add a loading spinner at the end of a list:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-java"},"SingleComponentSection.create(c)\n    .component(Progress.create(c).build())\n    .build();\n")),(0,o.mdx)("p",null,"Or a header for your data:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-java"},'SingleComponentSection.create(c)\n    .component(Text.create(c).text("Friends").build())\n    .build();\n')),(0,o.mdx)("h4",{id:"datadiffsection"},"DataDiffSection"),(0,o.mdx)("p",null,"A ",(0,o.mdx)("inlineCode",{parentName:"p"},"DataDiffSection")," is used to represent a ",(0,o.mdx)("strong",{parentName:"p"},"homogeneous list of immutable data"),".\nThe minimal information that you must pass to a ",(0,o.mdx)("inlineCode",{parentName:"p"},"DataDiffSection")," is the list of items that it needs to render and a callback for rendering each item in this list."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-java"},"DataDiffSection.<MyModel>create(c)\n    .data(ImmutableList.of(new MyModel(1), new MyModel(2), new MyModel(3)))\n    .renderEventHandler(MyGroupSection.onRenderEdge(c))\n")),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"DataDiffSection")," is designed to efficiently render the parts of a surface that handle large flows of data. When an item at a certain position needs to be displayed on screen, the framework will check whether the model received in the new list of data changed since the last time it was rendered."),(0,o.mdx)("p",null,"If the data changed for the item in that position, the framework would dispatch a ",(0,o.mdx)("inlineCode",{parentName:"p"},"RenderEvent")," for that item, and the ",(0,o.mdx)("inlineCode",{parentName:"p"},"DataDiffSection")," will use the ",(0,o.mdx)("inlineCode",{parentName:"p"},"RenderEvent")," handler passed as a prop to create a Component for that item and display it."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-java"},"@OnEvent(RenderEvent.class)\nstatic RenderInfo onRenderEdge(\n    SectionContext c,\n    @FromEvent MyModel model) {\n    return ComponentRenderInfo.create()\n        .component(MyModelItemComponent.create(c).item(model).build())\n        .build();\n}\n")),(0,o.mdx)("p",null,"By default, ",(0,o.mdx)("inlineCode",{parentName:"p"},"DataDiffSection")," will detect data changes by checking instance equality and subsequently calling ",(0,o.mdx)("inlineCode",{parentName:"p"},"equals")," on the objects in the data list."),(0,o.mdx)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,o.mdx)("h5",{parentName:"div"},(0,o.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,o.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.mdx)("div",{parentName:"div",className:"admonition-content"},(0,o.mdx)("p",{parentName:"div"},"For a deep dive into how to build performant and accurate diffing, including diffing for classes where ",(0,o.mdx)("inlineCode",{parentName:"p"},"equals")," is not overridden, see the ",(0,o.mdx)("a",{parentName:"p",href:"/docs/sections/best-practices"},"Best Practices and Performance")," documentation."))),(0,o.mdx)("h3",{id:"groupsection"},"GroupSection"),(0,o.mdx)("p",null,"A ",(0,o.mdx)("inlineCode",{parentName:"p"},"GroupSectionSpec")," is used to ",(0,o.mdx)("strong",{parentName:"p"},"structure your Sections into a hierarchy"),", each one responsible for rendering its own chunk of data."),(0,o.mdx)("p",null,"Group section specs are classes annotated with ",(0,o.mdx)("inlineCode",{parentName:"p"},"@GroupSectionSpec"),". Implementing a ",(0,o.mdx)("inlineCode",{parentName:"p"},"GroupSectionSpec")," is very simple: you only need to write one method annotated with ",(0,o.mdx)("inlineCode",{parentName:"p"},"@OnCreateChildren"),". This method returns a tree of Sections that will have root in this ",(0,o.mdx)("inlineCode",{parentName:"p"},"GroupSectionSpec"),"."),(0,o.mdx)("p",null,"The following code shows how you could declare a simple list that contains a header followed by a list of ",(0,o.mdx)("inlineCode",{parentName:"p"},"String")," items:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-java"},"@GroupSectionSpec\nclass SimpleListSectionSpec {\n\n  @OnCreateChildren\n  static Children onCreateChildren(\n      SectionContext c,\n      @Prop String headerTitle,\n      @Prop List<String> data) {\n    return Children.create()\n        .child(\n            SingleComponentSection.create(c)\n                .component(\n                    Text.create(c)\n                        .text(headerTitle)\n                        .build()))\n        .child(\n            DataDiffSection.<String>create(c)\n                .data(data)\n                .renderEventHandler(SimpleListSection.onRender(c)))\n        .build();\n  }\n\n  @OnEvent(RenderEvent.class)\n  static RenderInfo onRender(\n      SectionContext c,\n      @FromEvent String model) {\n    return ComponentRenderInfo.create()\n        .component(\n            Text.create(c)\n                .text(model)\n                .build())\n        .build();\n    }\n}\n")),(0,o.mdx)("h2",{id:"putting-all-the-pieces-together"},"Putting all the Pieces Together"),(0,o.mdx)("p",null,"Imagine a surface that has multiple sub-sections consisting of a header and list of Strings. An example of this is a list of contacts grouped alphabetically, delimited by headers showing the first letter of the name. This could be achieved easily by creating a ",(0,o.mdx)("inlineCode",{parentName:"p"},"GroupSectionSpec")," that has a ",(0,o.mdx)("inlineCode",{parentName:"p"},"SimpleListSection")," child for every letter, as described in the following code:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-java"},"@GroupSectionSpec\nclass ContactsSectionSpec {\n\n  @OnCreateChildren\n  static Children onCreateChildren(\n      SectionContext c,\n      @Prop List<String> data) {\n\n    final Children.Builder builder = Children.create();\n\n    for(char firstLetter = 'A'; firstLetter <= 'Z'; firstLetter++) {\n        builder.child(\n            SimpleListSection.create(c)\n                .key(String.valueOf(firstLetter))\n                .headerTitle(String.valueOf(firstLetter))\n                .data(getItemsForLetter(firstLetter, data)));\n    }\n\n    return build.build();\n  }\n}\n")),(0,o.mdx)("p",null,"The following image is a representation of the tree of Sections that has its root in ",(0,o.mdx)("inlineCode",{parentName:"p"},"ContactsSectionSpec"),". Each node in the tree is a Section, and the leaves are Components that can be rendered on screen. Each one of the sections in the tree acts as a data source.  Its purpose is to describe what data it needs and how that data should be rendered."),(0,o.mdx)("img",{src:(0,r.default)("/images/group-section-spec.png"),width:"800"}),(0,o.mdx)("p",null,"The Sections hierarchy becomes a data source for the ",(0,o.mdx)("inlineCode",{parentName:"p"},"RecyclerCollectionComponent"),".  You only have to pass the data that the ",(0,o.mdx)("inlineCode",{parentName:"p"},"ContactsSection")," will use to create each ",(0,o.mdx)("inlineCode",{parentName:"p"},"SimpleListSection"),", as shown in the following code."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-java"},'@OnCreateLayout\nstatic Component onCreateLayout(\n    final ComponentContext c) {\n  return RecyclerCollectionComponent.create(c)\n    .section(\n        ContactsSection.create(new SectionContext(c))\n            .dataModel(ImmutableList.of("Andy", "Aziz", "Aditya", "Nico", "Sergey"))\n            .build())\n    .build();\n}\n')),(0,o.mdx)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,o.mdx)("h5",{parentName:"div"},(0,o.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,o.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.mdx)("div",{parentName:"div",className:"admonition-content"},(0,o.mdx)("p",{parentName:"div"},"The complexity of handling operations on your list, such as inserts or removes, is hidden away and handled by the infrastructure."))),(0,o.mdx)("h2",{id:"further-reading"},"Further Reading"),(0,o.mdx)("p",null,"Start by reading ",(0,o.mdx)("a",{parentName:"p",href:"/docs/sections/best-practices"},"Best Practices and Performance"),"."),(0,o.mdx)("p",null,"Afterwards, read any/all of the following documents:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"/docs/sections/recycler-collection-component"},"Adding and Adapting RecyclerCollection to your App")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"/docs/sections/services"},"Advanced Topic: Granular Dependency Injection")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"/docs/sections/working-ranges"},"Advanced Topic: Prefetch and pagination"),".")),(0,o.mdx)(d.FbInternalOnly,{mdxType:"FbInternalOnly"},(0,o.mdx)("p",null,"If you need assistance, consult the internal wiki page ",(0,o.mdx)("a",{parentName:"p",href:"https://fburl.com/wiki/sr02b53q"},"Debugging Litho Sections Surfaces with the Flipper Sections Plugin"),".")),(0,o.mdx)(d.OssOnly,{mdxType:"OssOnly"},(0,o.mdx)("div",null)))}h.isMDXComponent=!0}}]);