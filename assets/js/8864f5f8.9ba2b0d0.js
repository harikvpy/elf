"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[753],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),f=o,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||i;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9354:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],l={},s="DevTools",c={unversionedId:"dev-tools",id:"dev-tools",isDocsHomePage:!1,title:"DevTools",description:"Elf provides built-in integration with the Redux DevTools Chrome extension.",source:"@site/docs/dev-tools.md",sourceDirName:".",slug:"/dev-tools",permalink:"/elf/docs/dev-tools",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/dev-tools.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"State History",permalink:"/elf/docs/features/history"},next:{title:"Using Immer",permalink:"/elf/docs/immer"}},p=[{value:"Usage",id:"usage",children:[]},{value:"Options",id:"options",children:[]}],u={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"devtools"},"DevTools"),(0,i.kt)("p",null,"Elf provides built-in integration with the Redux DevTools Chrome extension."),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"Install the Redux extension from the supported App stores ( ",(0,i.kt)("a",{parentName:"p",href:"https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en"},"Chrome"),", ",(0,i.kt)("a",{parentName:"p",href:"https://addons.mozilla.org/en-US/firefox/addon/reduxdevtools/"},"Firefox")," )."),(0,i.kt)("p",null,"And call the ",(0,i.kt)("inlineCode",{parentName:"p"},"devtools()")," method:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { devTools } from '@ngneat/elf';\n\ndevTools();\n")),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("p",null,"The plugin supports the following options passed as the second function parameter:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"maxAge"),": Maximum amount of actions to be stored in the history tree."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"preAction"),": A method that's called before each action."))}d.isMDXComponent=!0}}]);