"use strict";(self.webpackChunkntu_dsai_github_io=self.webpackChunkntu_dsai_github_io||[]).push([[7860],{5680:(e,t,r)=>{r.d(t,{xA:()=>d,yg:()=>f});var n=r(6540);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=l(r),p=i,f=u["".concat(s,".").concat(p)]||u[p]||m[p]||a;return r?n.createElement(f,c(c({ref:t},d),{},{components:r})):n.createElement(f,c({ref:t},d))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,c=new Array(a);c[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:i,c[1]=o;for(var l=2;l<a;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},3514:(e,t,r)=>{r.d(t,{A:()=>h});var n=r(6540),i=r(53),a=r(1754),c=r(5489),o=r(6654),s=r(1312);const l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function d(e){let{href:t,children:r}=e;return n.createElement(c.A,{href:t,className:(0,i.A)("card padding--lg",l.cardContainer)},r)}function u(e){let{href:t,icon:r,title:a,description:c}=e;return n.createElement(d,{href:t},n.createElement("h2",{className:(0,i.A)("text--truncate",l.cardTitle),title:a},r," ",a),c&&n.createElement("p",{className:(0,i.A)("text--truncate",l.cardDescription),title:c},c))}function m(e){let{item:t}=e;const r=(0,a._o)(t);return r?n.createElement(u,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,s.T)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function p(e){let{item:t}=e;const r=(0,o.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,a.cC)(t.docId??void 0);return n.createElement(u,{href:t.href,icon:r,title:t.label,description:t.description??i?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(p,{item:t});case"category":return n.createElement(m,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function y(e){let{className:t}=e;const r=(0,a.$S)();return n.createElement(h,{items:r.items,className:t})}function h(e){const{items:t,className:r}=e;if(!t)return n.createElement(y,e);const c=(0,a.d1)(t);return n.createElement("section",{className:(0,i.A)("row",r)},c.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(f,{item:e})))))}},8737:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=r(8168),i=(r(6540),r(5680)),a=r(3514),c=r(1754);const o={id:"physical-and-mathematical-sciences",sidebar_position:1,title:"Physical and Mathematical Sciences",description:"General overview of SPMS modules",keywords:["spms","physical mathematical science","ntu","course","module"]},s=void 0,l={unversionedId:"Module-Review/BDEs/SPMS/physical-and-mathematical-sciences",id:"Module-Review/BDEs/SPMS/physical-and-mathematical-sciences",title:"Physical and Mathematical Sciences",description:"General overview of SPMS modules",source:"@site/docs/Module-Review/BDEs/SPMS/index.md",sourceDirName:"Module-Review/BDEs/SPMS",slug:"/Module-Review/BDEs/SPMS/",permalink:"/docs/Module-Review/BDEs/SPMS/",draft:!1,editUrl:"https://github.com/NTU-DSAI/NTU-DSAI.github.io/tree/master/docs/Module-Review/BDEs/SPMS/index.md",tags:[],version:"current",lastUpdatedBy:"Bhargav Singapuri",lastUpdatedAt:1722908755,formattedLastUpdatedAt:"Aug 6, 2024",sidebarPosition:1,frontMatter:{id:"physical-and-mathematical-sciences",sidebar_position:1,title:"Physical and Mathematical Sciences",description:"General overview of SPMS modules",keywords:["spms","physical mathematical science","ntu","course","module"]},sidebar:"tutorialSidebar",previous:{title:"SC4003 Computer Vision",permalink:"/docs/Module-Review/BDEs/SCSE/sc4003-computer-vision"},next:{title:"PS9886 Making and Tinkering Lite",permalink:"/docs/Module-Review/BDEs/SPMS/ps9886-making-and-tinkering-lite"}},d={},u=[],m={toc:u},p="wrapper";function f(e){let{components:t,...r}=e;return(0,i.yg)(p,(0,n.A)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.yg)(a.A,{items:(0,c.$S)().items,mdxType:"DocCardList"}))}f.isMDXComponent=!0}}]);