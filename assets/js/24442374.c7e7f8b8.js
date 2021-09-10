"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[603],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=i.createContext({}),u=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=u(e.components);return i.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),f=u(n),d=r,m=f["".concat(c,".").concat(d)]||f[d]||p[d]||o;return n?i.createElement(m,s(s({ref:t},l),{},{components:n})):i.createElement(m,s({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=f;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:r,s[1]=a;for(var u=2;u<o;u++)s[u]=n[u];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6285:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return l},default:function(){return f}});var i=n(7462),r=n(3366),o=(n(7294),n(3905)),s=["components"],a={},c="UI Entities",u={unversionedId:"features/entities/ui-entities",id:"features/entities/ui-entities",isDocsHomePage:!1,title:"UI Entities",description:"This feature allows the store to hold UI-specific entity data, for instance, whether the user has opened the card representing an entity.",source:"@site/docs/features/entities/ui-entities.md",sourceDirName:"features/entities",slug:"/features/entities/ui-entities",permalink:"/elf/docs/features/entities/ui-entities",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/features/entities/ui-entities.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Entities",permalink:"/elf/docs/features/entities/entities"},next:{title:"Active ID(s)",permalink:"/elf/docs/features/entities/active-ids"}},l=[],p={toc:l};function f(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"ui-entities"},"UI Entities"),(0,o.kt)("p",null,"This feature allows the store to hold UI-specific entity data, for instance, whether the user has opened the card representing an entity.\nWhen used in conjunction with ",(0,o.kt)("inlineCode",{parentName:"p"},"withEntities")," this can be used to store additional UI data separately from the entities themselves."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { createState, Store } from '@ngneat/elf';\nimport { withEntities, withUIEntities } from '@ngneat/elf-entities';\n\ninterface TodoUI {\n  id: number;\n  open: boolean;\n}\ninterface Todo {\n  id: number;\n  name: string;\n}\n\nconst { state, config } = createState(\n  withEntities<Todo>(),\n  withUIEntities<TodoUI>()\n);\n\nconst todosStore = new Store({ name: 'todos', state, config });\n")),(0,o.kt)("p",null,"The usage is similar to that of ",(0,o.kt)("inlineCode",{parentName:"p"},"entities")," - you can use the same selectors and mutations, with the addition of passing the\n",(0,o.kt)("inlineCode",{parentName:"p"},"UIEntitiesRef")," ref in the method's ",(0,o.kt)("inlineCode",{parentName:"p"},"options")," parameter, e.g.:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { addEntities, UIEntitiesRef, selectEntity } from '@ngneat/elf-entities';\n\ntodosStore.reduce(\n  addEntities({ id: 1, name: 'foo' }),\n  addEntities({ id: 1, open: true }, { ref: UIEntitiesRef })\n);\n\nuiEntity$ = todosStore.pipe(selectEntity(1, { ref: UIEntitiesRef }));\n")),(0,o.kt)("p",null,"We can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"intersectEntities()")," operator that returns a combined collection of the entities and their corresponding ",(0,o.kt)("inlineCode",{parentName:"p"},"UIEntities"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import {\n  intersectEntities,\n  selectAll,\n  selectEntities,\n  UIEntitiesRef\n} from '@ngneat/elf-entities';\n\ntodos$ = todosStore\n  .combine({\n    entities: store.pipe(selectAll()),\n    UIEntities: store.pipe(selectEntities({ ref: UIEntitiesRef })),\n  })\n  .pipe(intersectEntities());\n")))}f.isMDXComponent=!0}}]);