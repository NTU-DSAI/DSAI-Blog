"use strict";(self.webpackChunkntu_dsai_github_io=self.webpackChunkntu_dsai_github_io||[]).push([[4714],{5680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>f});var n=r(6540);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=l(r),p=i,f=d["".concat(s,".").concat(p)]||d[p]||m[p]||o;return r?n.createElement(f,c(c({ref:t},u),{},{components:r})):n.createElement(f,c({ref:t},u))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,c=new Array(o);c[0]=p;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[d]="string"==typeof e?e:i,c[1]=a;for(var l=2;l<o;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},3514:(e,t,r)=>{r.d(t,{A:()=>y});var n=r(6540),i=r(53),o=r(1754),c=r(5489),a=r(6654),s=r(1312);const l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function u(e){let{href:t,children:r}=e;return n.createElement(c.A,{href:t,className:(0,i.A)("card padding--lg",l.cardContainer)},r)}function d(e){let{href:t,icon:r,title:o,description:c}=e;return n.createElement(u,{href:t},n.createElement("h2",{className:(0,i.A)("text--truncate",l.cardTitle),title:o},r," ",o),c&&n.createElement("p",{className:(0,i.A)("text--truncate",l.cardDescription),title:c},c))}function m(e){let{item:t}=e;const r=(0,o._o)(t);return r?n.createElement(d,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,s.T)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function p(e){let{item:t}=e;const r=(0,a.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,o.cC)(t.docId??void 0);return n.createElement(d,{href:t.href,icon:r,title:t.label,description:t.description??i?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(p,{item:t});case"category":return n.createElement(m,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e;const r=(0,o.$S)();return n.createElement(y,{items:r.items,className:t})}function y(e){const{items:t,className:r}=e;if(!t)return n.createElement(g,e);const c=(0,o.d1)(t);return n.createElement("section",{className:(0,i.A)("row",r)},c.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(f,{item:e})))))}},7372:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var n=r(8168),i=(r(6540),r(5680)),o=r(3514),c=r(1754);const a={id:"computer-science-and-engineering",sidebar_position:1,title:"Computer Science and Engineering",description:"General overview of SCSE modules",keywords:["scse","ntu","course","module"]},s=void 0,l={unversionedId:"Module-Review/BDEs/SCSE/computer-science-and-engineering",id:"Module-Review/BDEs/SCSE/computer-science-and-engineering",title:"Computer Science and Engineering",description:"General overview of SCSE modules",source:"@site/docs/Module-Review/BDEs/SCSE/index.md",sourceDirName:"Module-Review/BDEs/SCSE",slug:"/Module-Review/BDEs/SCSE/",permalink:"/docs/Module-Review/BDEs/SCSE/",draft:!1,editUrl:"https://github.com/NTU-DSAI/NTU-DSAI.github.io/tree/master/docs/Module-Review/BDEs/SCSE/index.md",tags:[],version:"current",lastUpdatedBy:"Bhargav Singapuri",lastUpdatedAt:1722908755,formattedLastUpdatedAt:"Aug 6, 2024",sidebarPosition:1,frontMatter:{id:"computer-science-and-engineering",sidebar_position:1,title:"Computer Science and Engineering",description:"General overview of SCSE modules",keywords:["scse","ntu","course","module"]},sidebar:"tutorialSidebar",previous:{title:"EE8086 Astronomy",permalink:"/docs/Module-Review/BDEs/EEE/ee8086-astronomy"},next:{title:"SC4003 Computer Vision",permalink:"/docs/Module-Review/BDEs/SCSE/sc4003-computer-vision"}},u={},d=[],m={toc:d},p="wrapper";function f(e){let{components:t,...r}=e;return(0,i.yg)(p,(0,n.A)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.yg)(o.A,{items:(0,c.$S)().items,mdxType:"DocCardList"}))}f.isMDXComponent=!0}}]);