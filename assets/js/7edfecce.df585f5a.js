"use strict";(self.webpackChunkntu_dsai_github_io=self.webpackChunkntu_dsai_github_io||[]).push([[9406],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),p=o,m=d["".concat(c,".").concat(p)]||d[p]||f[p]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2991:(e,t,n)=>{n.d(t,{Z:()=>g});var r=n(7294),o=n(6010),a=n(2802),i=n(9960),s=n(3919),c=n(5999);const l="cardContainer_fWXF",u="cardTitle_rnsV",d="cardDescription_PWke";function f(e){let{href:t,children:n}=e;return r.createElement(i.Z,{href:t,className:(0,o.Z)("card padding--lg",l)},n)}function p(e){let{href:t,icon:n,title:a,description:i}=e;return r.createElement(f,{href:t},r.createElement("h2",{className:(0,o.Z)("text--truncate",u),title:a},n," ",a),i&&r.createElement("p",{className:(0,o.Z)("text--truncate",d),title:i},i))}function m(e){let{item:t}=e;const n=(0,a.Wl)(t);return n?r.createElement(p,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function y(e){let{item:t}=e;const n=(0,s.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",o=(0,a.xz)(t.docId??void 0);return r.createElement(p,{href:t.href,icon:n,title:t.label,description:o?.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return r.createElement(y,{item:t});case"category":return r.createElement(m,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function b(e){let{className:t}=e;const n=(0,a.jA)();return r.createElement(g,{items:n.items,className:t})}function g(e){const{items:t,className:n}=e;if(!t)return r.createElement(b,e);const i=(0,a.MN)(t);return r.createElement("section",{className:(0,o.Z)("row",n)},i.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(h,{item:e})))))}},3927:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var r=n(7462),o=(n(7294),n(3905)),a=n(2991),i=n(2802);const s={id:"faqs",title:"Frequently Asked Questions",description:"A bunch of frequently asked questions about DSAI",keywords:["faq","frequent","asked","questions","dsai","help","answers"]},c=void 0,l={unversionedId:"FAQs/faqs",id:"FAQs/faqs",title:"Frequently Asked Questions",description:"A bunch of frequently asked questions about DSAI",source:"@site/docs/FAQs/index.md",sourceDirName:"FAQs",slug:"/FAQs/",permalink:"/docs/FAQs/",draft:!1,editUrl:"https://github.com/NTU-DSAI/NTU-DSAI.github.io/tree/master/docs/FAQs/index.md",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1686289145,formattedLastUpdatedAt:"Jun 9, 2023",frontMatter:{id:"faqs",title:"Frequently Asked Questions",description:"A bunch of frequently asked questions about DSAI",keywords:["faq","frequent","asked","questions","dsai","help","answers"]},sidebar:"tutorialSidebar",previous:{title:"Work Study Scheme",permalink:"/docs/User-Guides/wss"},next:{title:"Why DSAI?",permalink:"/docs/FAQs/About-DSAI/why-dsai"}},u={},d=[],f={toc:d};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This section aims to help answer some of the most burning questions that incoming freshmen have about DSAI. If there is still a question that you feel has not been sufficiently answered, do feel free to edit the answer on the repo. Additionally, if you do not find your question answered here, you can submit your question ",(0,o.kt)("a",{parentName:"p",href:"http://bit.ly/DSAIAskAnything"},"here")," and you can view the full catalog of answers ",(0,o.kt)("a",{parentName:"p",href:"https://docs.google.com/spreadsheets/d/1N4Ioqq3Ap54_-7CUbWXdmuyEvFwXlo3_URwCOyBuvJQ/edit?usp=sharing"},"here"),"."),(0,o.kt)(a.Z,{items:(0,i.jA)().items,mdxType:"DocCardList"}))}p.isMDXComponent=!0}}]);