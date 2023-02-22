"use strict";(self.webpackChunkntu_dsai_github_io=self.webpackChunkntu_dsai_github_io||[]).push([[8891],{3905:(e,t,i)=>{i.d(t,{Zo:()=>u,kt:()=>h});var a=i(7294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,a,n=function(e,t){if(null==e)return{};var i,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)i=o[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)i=o[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(i),d=n,h=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return i?a.createElement(h,r(r({ref:t},u),{},{components:i})):a.createElement(h,r({ref:t},u))}));function h(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=i.length,r=new Array(o);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:n,r[1]=l;for(var c=2;c<o;c++)r[c]=i[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,i)}d.displayName="MDXCreateElement"},4558:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=i(7462),n=(i(7294),i(3905));const o={id:"mh4518-simulation-techniques-in-finance",slug:"mh4518-simulation-techniques-in-finance",sidebar_position:10,title:"MH4518 Simulation Techniques in Finance",description:"Simulate asset prices and price derivatives computationally",keywords:["data","applications","natural","sciences","ntu","spms","mathematics","module"]},r=void 0,l={unversionedId:"Module-Review/MPEs/SPMS/mh4518-simulation-techniques-in-finance",id:"Module-Review/MPEs/SPMS/mh4518-simulation-techniques-in-finance",title:"MH4518 Simulation Techniques in Finance",description:"Simulate asset prices and price derivatives computationally",source:"@site/docs/Module-Review/MPEs/SPMS/MH4518 Simulation Techniques in Finance.md",sourceDirName:"Module-Review/MPEs/SPMS",slug:"/Module-Review/MPEs/SPMS/mh4518-simulation-techniques-in-finance",permalink:"/docs/Module-Review/MPEs/SPMS/mh4518-simulation-techniques-in-finance",draft:!1,editUrl:"https://github.com/NTU-DSAI/NTU-DSAI.github.io/tree/master/docs/Module-Review/MPEs/SPMS/MH4518 Simulation Techniques in Finance.md",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1677055743,formattedLastUpdatedAt:"Feb 22, 2023",sidebarPosition:10,frontMatter:{id:"mh4518-simulation-techniques-in-finance",slug:"mh4518-simulation-techniques-in-finance",sidebar_position:10,title:"MH4518 Simulation Techniques in Finance",description:"Simulate asset prices and price derivatives computationally",keywords:["data","applications","natural","sciences","ntu","spms","mathematics","module"]},sidebar:"tutorialSidebar",previous:{title:"MH4517 Data Applications in Natural Sciences",permalink:"/docs/Module-Review/MPEs/SPMS/mh4517-data-applications-in-natural-sciences"},next:{title:"WKWSCI MPEs",permalink:"/docs/Module-Review/MPEs/WKWSCI/"}},s={},c=[{value:"Course Summary",id:"course-summary",level:2},{value:"Workload",id:"workload",level:2},{value:"Projects",id:"projects",level:2},{value:"Conclusion",id:"conclusion",level:2}],u={toc:c};function m(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"course-summary"},"Course Summary"),(0,n.kt)("p",null,"This module teaches students the various techniques and the supporting mathematics behind simulating asset prices and how that affects the price of its derivative products. This module utilises some of the concepts learnt in ",(0,n.kt)("a",{parentName:"p",href:"/docs/Module-Review/Y2S1/mh2802-linear-algebra-for-scientists"},"Linear Algebra")," as well as ",(0,n.kt)("a",{parentName:"p",href:"/docs/Module-Review/Y2S2/mh3500-statistics"},"Statistics")," so it is helpful to brush up on those topics. Some of the content that will be covered is:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Generating Random Variables"),(0,n.kt)("li",{parentName:"ol"},"Generating Target Distributions",(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"Inverse Transform Method"),(0,n.kt)("li",{parentName:"ol"},"Acceptance-Rejection Method"),(0,n.kt)("li",{parentName:"ol"},"Normal Random Variables",(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"Multivariate Normals"),(0,n.kt)("li",{parentName:"ol"},"Generating Univariate Normals"),(0,n.kt)("li",{parentName:"ol"},"Box-Muller Method"),(0,n.kt)("li",{parentName:"ol"},"Cholesky Decomposition"),(0,n.kt)("li",{parentName:"ol"},"Eigenvalue Decomposition"))))),(0,n.kt)("li",{parentName:"ol"},"Asset Price models",(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"Binomial Lattice Model"),(0,n.kt)("li",{parentName:"ol"},"Brownian Motion"),(0,n.kt)("li",{parentName:"ol"},"Geometric Brownian Motion"),(0,n.kt)("li",{parentName:"ol"},"Black-Scholes Model"))),(0,n.kt)("li",{parentName:"ol"},"Stochastic Processes",(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"Weiner Process"),(0,n.kt)("li",{parentName:"ol"},"Ito's Lemma"))),(0,n.kt)("li",{parentName:"ol"},"Variance Reduction Techniques",(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"Antithetic Variates"),(0,n.kt)("li",{parentName:"ol"},"Control Variates"),(0,n.kt)("li",{parentName:"ol"},"Stratified Sampling"),(0,n.kt)("li",{parentName:"ol"},"Importance Sampling"))),(0,n.kt)("li",{parentName:"ol"},"Risk Management",(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"Value at Risk"))),(0,n.kt)("li",{parentName:"ol"},"Monte-Carlo Simulation"),(0,n.kt)("li",{parentName:"ol"},"Estimating Sensitivities"),(0,n.kt)("li",{parentName:"ol"},"American Type Derivatives")),(0,n.kt)("h2",{id:"workload"},"Workload"),(0,n.kt)("p",null,"The course is a 3 hour lecture + 1 hour tutorial. The content that is covered is extremely math heavy and thus requires you to be extremely proficient in your calculus and statistics. There are 3 Assignments that will be given every 3 weeks and these are the most difficult assignments that we have had thus far. Each assignment has 5 questions and will take at least 2-3 days to solve, even with Googling."),(0,n.kt)("h2",{id:"projects"},"Projects"),(0,n.kt)("p",null,"There is one group project that requires you to create an asset price model based on a product that the instructor provides or one that you can find yourself. You will have to backtest this model with the existing data to see how accurate it is and improve it from there. Products are banded based on difficulty so you can choose an easier product but you will have to use more complex pricing models or some additional techniques to boost your project grade. The project can be done in R or Python."),(0,n.kt)("h2",{id:"conclusion"},"Conclusion"),(0,n.kt)("p",null,"This is an extremely difficult module so do take at your own best judgement. But this will help you if you're looking to go into Quant Finance/Research sort of roles as you understand how asset pricing happens, at least at a basic level. You can then pursue further studies into Mathematical Finance to boost your portfolio."))}m.isMDXComponent=!0}}]);