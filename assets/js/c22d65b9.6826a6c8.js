"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6332],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>l,MDXProvider:()=>m,mdx:()=>w,useMDXComponents:()=>d,withMDXComponents:()=>c});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){return function(t){var n=d(t.components);return o.createElement(e,r({},t,{components:n}))}},d=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),c=d(n),m=a,u=c["".concat(i,".").concat(m)]||c[m]||h[m]||r;return n?o.createElement(u,s(s({ref:t},l),{},{components:n})):o.createElement(u,s({ref:t},l))}));function w(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},26789:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>i,contentTitle:()=>s,metadata:()=>p,toc:()=>l,default:()=>d});var o=n(87462),a=n(63366),r=(n(67294),n(3905)),i={id:"updating-ui",title:"Updating the UI"},s=void 0,p={unversionedId:"updating-ui",id:"updating-ui",isDocsHomePage:!1,title:"Updating the UI",description:"Components and immutability",source:"@site/../docs/updating-ui.md",sourceDirName:".",slug:"/updating-ui",permalink:"/docs/updating-ui",editUrl:"https://github.com/facebook/litho/edit/master/website/../docs/updating-ui.md",version:"current",frontMatter:{id:"updating-ui",title:"Updating the UI"}},l=[{value:"Components and immutability",id:"components-and-immutability",children:[]},{value:"Passing new props",id:"passing-new-props",children:[]},{value:"Updating state",id:"updating-state",children:[]}],c={toc:l};function d(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,r.mdx)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h2",{id:"components-and-immutability"},"Components and immutability"),(0,r.mdx)("p",null,"Conceptually, components are like pure functions. They accept arbitrary immutable inputs (called \u201cprops\u201d) and return a description of the layout that should appear on the screen.\nComponents are immutable objects and the framework views the props of a component as read-only attributes. Once a component is created, its props cannot be mutated during its lifecycle without breaking the assumption that components must be immutable for ",(0,r.mdx)("a",{parentName:"p",href:"asynchronous-layout"},"asynchronous layout")," to be performed safely and correctly."),(0,r.mdx)("p",null,"Of course, application UIs are dynamic and change over time as a result of network changes or user input, so you need a way of informing the framework when these changes occur. So without mutating the props, how do you update a component?\nThere are two ways of updating the UI: passing new ",(0,r.mdx)("a",{parentName:"p",href:"props"},"props")," or updating the internal ",(0,r.mdx)("a",{parentName:"p",href:"/docs/mainconcepts/coordinate-state-actions/state-overview"},"state")," of a component."),(0,r.mdx)("p",null,"Every time something needs to be updated on screen, the framework will recreate the ComponentTree that represents the UI, which will be made up of new instances of Components created with the new data values that reflect the desired changes."),(0,r.mdx)("p",null,"The code samples below are extracted from the ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/facebook/litho/tree/master/codelabs/updating-ui"},"codelab on updating UI"),"."),(0,r.mdx)("h2",{id:"passing-new-props"},"Passing new props"),(0,r.mdx)("p",null,"The data flow in a Litho components hierarchy is top-down. All the props that a component receives are passed down from its parent when it's created and cannot be changed afterwards.\nThat means that in order to update a component's props the framework needs to recreate the tree of components starting from the root; this translates to creating a new component with the new prop values and setting it as a root to an existing ComponentTree."),(0,r.mdx)("p",null,"Updating the UI by passing new props is commonly used in cases when the update happens as a result of data changing from outside the scope of a component - usually network changes."),(0,r.mdx)("p",null,"Let's see what this looks in practice. In the codelab example, we'll use a Text component that displays a string passed in through the ",(0,r.mdx)("inlineCode",{parentName:"p"},"labelText")," prop.\nThink of this string as data coming from the server, which the Text component has no control over - it simply displays the input string."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java"},"@LayoutSpec\nobject RootComponentSpec {\n\n    @OnCreateLayout\n    fun onCreateLayout(c: ComponentContext, @Prop labelText: String): Component {\n        return Column.create(c)\n          .child(Text.create(c).textSizeSp(20f).text(labelText))\n          .build()\n    }\n}\n")),(0,r.mdx)("p",null,"To render this component we create a LithoView in our activity and pass it as root.\nWe also hold on to this LithoView, so when we want to update the UI we don't create and attach a new LithoView, we simply set a new root on the view we already have.\nThe first time we set the root to the LithoView, the framework will calculate layout synchronously on the UI thread, so that the UI is ready to be displayed as fast as possible."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java"},'val lithoView = LithoView.create(\n      this,\n      RootComponent.create(componentContext)\n        .labelText("Starting countdown")\n        .build()\n    )\n\nsetContentView(\n   lithoView\n)\n')),(0,r.mdx)("p",null,"In the example we start a timer which periodically changes the string on the label (in practice, this could mean starting a network request and waiting for the response).\nTo update the string on the label, we create a new RootComponent with the update value for ",(0,r.mdx)("inlineCode",{parentName:"p"},"labelText")," prop and set it as the new root of our LithoView."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java"},'val timer = object: CountDownTimer(30000, 1000) {\n  override fun onTick(millisUntilFinished: Long) {\n    lithoView.setComponentAsync(\n      RootComponent.create(componentContext)\n        .labelText("Ms until finished: " + millisUntilFinished.toString())\n        .build())\n  }\n\n  override fun onFinish() {\n    lithoView.setComponentAsync(\n      RootComponent.create(componentContext)\n        .labelText("Done!")\n        .build())\n  }\n}\n')),(0,r.mdx)("p",null,"Under the hood, when ",(0,r.mdx)("inlineCode",{parentName:"p"},"lithoView.setComponentAsync")," is called, the framework triggers a new layout calculation which will recreate the underlying ComponentTree with new Component instances based on the new data.\nThe ",(0,r.mdx)("inlineCode",{parentName:"p"},"@OnCreateLayout")," methods for all the Components in the hierarchy will be invoked again - basically calling the pure function that the component represents with new params corresponding to the new prop values."),(0,r.mdx)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,r.mdx)("h5",{parentName:"div"},(0,r.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,r.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"IMPORTANT")),(0,r.mdx)("div",{parentName:"div",className:"admonition-content"},(0,r.mdx)("p",{parentName:"div"}," One important thing to note is that we are using the async option for setting a new root component (",(0,r.mdx)("inlineCode",{parentName:"p"},"setComponentAync"),") - which tells the framework to perform the layout calculation on a background thread."))),(0,r.mdx)("p",null,"For updating UI it's strongly recommended to always use the async methods - this will make your app feel more responsive. If you set a new root synchronously from the UI thread (by calling ",(0,r.mdx)("inlineCode",{parentName:"p"},"setComponent"),") the layout computation will be posted to be executed on the UI thread, which is rarely necessary."),(0,r.mdx)("h2",{id:"updating-state"},"Updating state"),(0,r.mdx)("p",null,"Let's take a simple example of a Component which may need to update without any external factors triggering this - a toggle.\nA toggle component will internally maintain a click handler which needs to update the UI to reflect the new toggle state when the user interacts with it.\nUpdating the toggle through props as we've seen in the example above is not a pretty thing to do. When the toggle component receives the click event, it needs to propagate this information all the way outside of the component hierarchy so that a new root component can be set with the new value of the toggle state.\nThis is problematic because it makes our toggle component not reusable - every time we want to add it to the UI, all the components in the hierarchy above it need to add the toggle state as a prop so that they can propagate the value down when there is a change."),(0,r.mdx)("p",null,"Luckily, the framework exposes an API which maintains component encapsulation and hides all this nastiness away: component ",(0,r.mdx)("a",{parentName:"p",href:"/docs/mainconcepts/coordinate-state-actions/state-overview"},"state"),".\nComponents can maintain internal state data and trigger updates when necessary. The state data is private to the component and cannot be accessed by any other component in the hierarchy."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},'@LayoutSpec\nobject RootComponentSpec {\n\n    @OnCreateInitialState\n    fun onCreateInitialState(c: ComponentContext, enabled: StateValue<Boolean>) {\n      enabled.set(true)\n    }\n\n    @OnCreateLayout\n    fun onCreateLayout(c: ComponentContext, @State enabled: Boolean): Component {\n        return Column.create(c)\n          .child(Row.create(c)\n            .child(Text.create(c).textSizeSp(20f).text("Toggle state: ").marginPx(YogaEdge.RIGHT, 30))\n            .child(Text.create(c).textSizeSp(20f).text(enabled ? "On" : "Off").marginPx(YogaEdge.RIGHT, 30).clickHandler(RootComponent.onClick(c))))\n          .build()\n    }\n\n    @OnEvent(ClickEvent::class)\n    fun onClick(c: ComponentContext) {\n      RootComponent.increaseCounter(c)\n    }\n\n    @OnUpdateState\n    fun increaseCounter(counter: StateValue<Boolean>) {\n      if (counter.get() != null && counter.get() is Boolean) {\n        val counterVal: Boolean = counter.get() as Boolean\n        counter.set(!counterVal)\n      }\n    }\n}\n')),(0,r.mdx)("p",null,"The ",(0,r.mdx)("a",{parentName:"p",href:"/docs/mainconcepts/coordinate-state-actions/state-overview"},"state docs")," describe this API in more detail.\nOne important thing to note is that under the hood, for the performance of your app setting new props and updating state are not much different - the framework will always recreate the entire ComponentTree with new Component instances.\nThe same observations about sync and async operations as for setting a new component root apply when updating state."))}d.isMDXComponent=!0}}]);