"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[230],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(n),f=o,d=m["".concat(c,".").concat(f)]||m[f]||p[f]||i;return n?r.createElement(d,a(a({ref:t},u),{},{components:n})):r.createElement(d,a({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2806:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return m}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],s={},c="Using Immer",l={unversionedId:"immer",id:"immer",isDocsHomePage:!1,title:"Using Immer",description:"When working with immutable objects, we often get to what\u2019s called a \u201cspread hell\u201d situation. If you prefer working with immutable objects in a mutable fashion, you can use immer with Elf.",source:"@site/docs/immer.md",sourceDirName:".",slug:"/immer",permalink:"/elf/docs/immer",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/immer.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"DevTools",permalink:"/elf/docs/dev-tools"},next:{title:"Elf CLI",permalink:"/elf/docs/cli"}},u=[],p={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"using-immer"},"Using Immer"),(0,i.kt)("p",null,"When working with immutable objects, we often get to what\u2019s called a \u201cspread hell\u201d situation. If you prefer working with immutable objects in a mutable fashion, you can use immer with Elf."),(0,i.kt)("p",null,"Create a mutation function:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="store/mutations.ts"',title:'"store/mutations.ts"'},"import { produce } from 'immer';\n\nexport function write<S>(updater: (state: S) => void): (state: S) => S {\n  return function (state: S) {\n    return produce(state, (draft) => {\n      updater(draft as S);\n    });\n  };\n}\n")),(0,i.kt)("p",null,"Now you can use it in the store's ",(0,i.kt)("inlineCode",{parentName:"p"},"reducer")," function:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="todos.respository.ts"',title:'"todos.respository.ts"'},"interface Todo {\n  id: number;\n  title: string;\n  completed: boolean;\n}\n\nexport interface TodosProps {\n  filter: 'ALL' | 'ACTIVE' | 'COMPLETED';\n}\n\nconst { state, config } = createState(\n  withEntities<Todo>(),\n  withProps<TodosProps>({ filter: 'ALL' })\n);\n\nconst store = new Store({ name: 'todos', state, config });\n\nexport class TodosRepository {\n  todos$ = store.pipe(selectAll());\n\n  updateFilter(filter: TodosProps['filter']) {\n    store.reduce(\n      // highlight-start\n      write((state) => {\n        state.filter = filter;\n      })\n      // highlight-end\n    );\n  }\n\n  updateCompleted(id: Todo['id']) {\n    store.reduce(\n      updateEntities(\n        id,\n        // highlight-next-line\n        write<Todo>((entity) => (entity.completed = !entity.completed))\n      )\n    );\n  }\n}\n")))}m.isMDXComponent=!0}}]);