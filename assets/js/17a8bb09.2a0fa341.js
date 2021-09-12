"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[469],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,f=u["".concat(l,".").concat(m)]||u[m]||c[m]||r;return n?i.createElement(f,a(a({ref:t},d),{},{components:n})):i.createElement(f,a({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var p=2;p<r;p++)a[p]=n[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6113:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return d},default:function(){return u}});var i=n(7462),o=n(3366),r=(n(7294),n(3905)),a=["components"],s={},l="Entities",p={unversionedId:"features/entities/entities",id:"features/entities/entities",isDocsHomePage:!1,title:"Entities",description:"This feature enables the store to act as an entities store. You can think of entities state as a table in a database,",source:"@site/docs/features/entities/entities.md",sourceDirName:"features/entities",slug:"/features/entities/entities",permalink:"/elf/docs/features/entities/entities",editUrl:"https://github.com/ngneat/elf/docusaurus/edit/main/website/docs/features/entities/entities.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"The Repository Pattern",permalink:"/elf/docs/repository"},next:{title:"UI Entities",permalink:"/elf/docs/features/entities/ui-entities"}},d=[{value:"Queries",id:"queries",children:[]},{value:"Mutations",id:"mutations",children:[]},{value:"idKey",id:"idkey",children:[]}],c={toc:d};function u(e){var t=e.components,n=(0,o.Z)(e,a);return(0,r.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"entities"},"Entities"),(0,r.kt)("p",null,"This feature enables the store to act as an entities store. You can think of ",(0,r.kt)("inlineCode",{parentName:"p"},"entities")," state as a table in a database,\nwhere each table represents a flat collection of entities. Elf's entities state simplifies the process, giving you\neverything you need to manage it."),(0,r.kt)("p",null,"First, you need to install the package by using the CLI command or npm:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm i @ngneat/elf-entities\n")),(0,r.kt)("p",null,"To use this feature, provides the ",(0,r.kt)("inlineCode",{parentName:"p"},"withEntities")," props factory function to ",(0,r.kt)("inlineCode",{parentName:"p"},"createState"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import {createState, Store} from '@ngneat/elf';\nimport {addEntities, withEntities} from '@ngneat/elf-entities';\n\ninterface Todo {\n  id: number;\n  label: string;\n}\n\nconst {state, config} = createState(withEntities<Todo>());\n\nconst todosStore = new Store({name: 'todos', state, config});\n")),(0,r.kt)("p",null,"This will allow you to use the following ready-made mutations and queries:"),(0,r.kt)("h3",{id:"queries"},"Queries"),(0,r.kt)("h4",{id:"selectall"},(0,r.kt)("inlineCode",{parentName:"h4"},"selectAll")),(0,r.kt)("p",null,"Select the entire store's entity collection:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import {selectAll} from '@ngneat/elf-entities';\n\nconst todos$ = todosStore.pipe(selectAll());\n")),(0,r.kt)("h4",{id:"selectallapply"},(0,r.kt)("inlineCode",{parentName:"h4"},"selectAllApply")),(0,r.kt)("p",null,"Select the entire store's entity collection, and apply a ",(0,r.kt)("inlineCode",{parentName:"p"},"filter/map"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { selectAllApply } from '@ngneat/elf-entities';\n\nconst titles$ = todosStore.pipe(\n  selectAllApply({\n    mapEntity: (e) => e.title,\n    filterEntity: (e) => e.completed,\n  }));\n")),(0,r.kt)("p",null,"In the above example, it'll first apply the ",(0,r.kt)("inlineCode",{parentName:"p"},"filter")," and then the ",(0,r.kt)("inlineCode",{parentName:"p"},"map")," function."),(0,r.kt)("h4",{id:"selectentities"},(0,r.kt)("inlineCode",{parentName:"h4"},"selectEntities")),(0,r.kt)("p",null,"Select the entire store's entity collection as object:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import {selectEntities} from '@ngneat/elf-entities';\n\nconst todos$ = todosStore.pipe(selectEntities());\n")),(0,r.kt)("h4",{id:"selectentity"},(0,r.kt)("inlineCode",{parentName:"h4"},"selectEntity")),(0,r.kt)("p",null,"Select an entity or a slice of an entity:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import {selectEntity} from '@ngneat/elf-entities';\n\nconst todo$ = todosStore.pipe(selectEntity(id));\nconst title$ = todosStore.pipe(selectEntity(id, {pluck: 'title'}));\nconst title$ = todosStore.pipe(selectEntity(id, {pluck: (e) => e.title}));\n")),(0,r.kt)("h4",{id:"selectmany"},(0,r.kt)("inlineCode",{parentName:"h4"},"selectMany")),(0,r.kt)("p",null,"Select multiple entities from the store:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import {selectMany} from '@ngneat/elf-entities';\n\nconst todos$ = todosStore.pipe(selectMany([id, id]));\nconst titles$ = todosStore.pipe(selectMany(id, {pluck: 'title'}));\nconst titles$ = todosStore.pipe(selectMany(id, {pluck: (e) => e.title}));\n")),(0,r.kt)("h4",{id:"selectfirst"},(0,r.kt)("inlineCode",{parentName:"h4"},"selectFirst")),(0,r.kt)("p",null,"Select the first entity from the store:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import {selectFirst} from '@ngneat/elf-entities';\n\nconst first$ = todosStore.pipe(selectFirst());\n")),(0,r.kt)("h4",{id:"selectlast"},(0,r.kt)("inlineCode",{parentName:"h4"},"selectLast")),(0,r.kt)("p",null,"Select the last entity from the store:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import {selectLast} from '@ngneat/elf-entities';\n\nconst last$ = todosStore.pipe(selectLast());\n")),(0,r.kt)("h4",{id:"selectentitiescount"},(0,r.kt)("inlineCode",{parentName:"h4"},"selectEntitiesCount")),(0,r.kt)("p",null,"Select the store's entity collection size:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import {selectEntitiesCount} from '@ngneat/elf-entities';\n\nconst count$ = todosStore.pipe(selectEntitiesCount());\n")),(0,r.kt)("h4",{id:"selectentitiescountbypredicate"},(0,r.kt)("inlineCode",{parentName:"h4"},"selectEntitiesCountByPredicate")),(0,r.kt)("p",null,"Select the store's entity collection size:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import {selectEntitiesCountByPredicate} from '@ngneat/elf-entities';\n\nconst count$ = todosStore.pipe(\n  selectEntitiesCountByPredicate((entity) => entity.completed)\n);\n")),(0,r.kt)("h4",{id:"getentity"},(0,r.kt)("inlineCode",{parentName:"h4"},"getEntity")),(0,r.kt)("p",null,"Get an entity by id:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import {getEntity} from '@ngneat/elf-entities';\n\nconst todo = todosStore.query(getEntity(id));\n")),(0,r.kt)("h4",{id:"hasentity"},(0,r.kt)("inlineCode",{parentName:"h4"},"hasEntity")),(0,r.kt)("p",null,"Returns whether an entity exists:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import {hasEntity} from '@ngneat/elf-entities';\n\nif (todosStore.query(hasEntity(id))) {\n}\n")),(0,r.kt)("h3",{id:"mutations"},"Mutations"),(0,r.kt)("h4",{id:"setentities"},(0,r.kt)("inlineCode",{parentName:"h4"},"setEntities")),(0,r.kt)("p",null,"Replace current collection with the provided collection:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import {setEntities} from '@ngneat/elf-entities';\n\ntodosStore.reduce(setEntities([todo, todo]));\n")),(0,r.kt)("h4",{id:"addentities"},(0,r.kt)("inlineCode",{parentName:"h4"},"addEntities")),(0,r.kt)("p",null,"Add an entity or entities to the store:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import {addEntities} from '@ngneat/elf-entities';\n\ntodosStore.reduce(addEntities(todo));\ntodosStore.reduce(addEntities([todo, todo]));\ntodosStore.reduce(addEntities([todo, todo], {prepend: true}));\n")),(0,r.kt)("h4",{id:"addentitiesfifo"},(0,r.kt)("inlineCode",{parentName:"h4"},"addEntitiesFifo")),(0,r.kt)("p",null,"Add an entity or entities to the store using fifo strategy:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import {addEntitiesFifo} from '@ngneat/elf-entities';\n\ntodosStore.reduce(addEntitiesFifo([entity, entity]), {limit: 3});\n")),(0,r.kt)("h4",{id:"updateentities"},(0,r.kt)("inlineCode",{parentName:"h4"},"updateEntities")),(0,r.kt)("p",null,"Update an entity or entities in the store:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import {updateEntities} from '@ngneat/elf-entities';\n\ntodosStore.reduce(updateEntities(id, {name}));\ntodosStore.reduce(updateEntities(id, (entity) => ({...entity, name})));\ntodosStore.reduce(updateEntities([id, id, id], {open: true}));\n")),(0,r.kt)("h4",{id:"deleteentities"},(0,r.kt)("inlineCode",{parentName:"h4"},"deleteEntities")),(0,r.kt)("p",null,"Delete an entity or entities from the store:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import {deleteEntities} from '@ngneat/elf-entities';\n\ntodosStore.reduce(deleteEntities(id));\ntodosStore.reduce(deleteEntities([id, id]));\n")),(0,r.kt)("h4",{id:"deleteentitiesbypredicate"},(0,r.kt)("inlineCode",{parentName:"h4"},"deleteEntitiesByPredicate")),(0,r.kt)("p",null,"Delete an entity or entities from the store:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import {deleteEntitiesByPredicate} from '@ngneat/elf-entities';\n\ntodosStore.reduce(deleteEntitiesByPredicate((e) => !!e.completed));\n")),(0,r.kt)("h4",{id:"deleteallentities"},(0,r.kt)("inlineCode",{parentName:"h4"},"deleteAllEntities")),(0,r.kt)("p",null,"Delete all entities from the store:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import {deleteAllEntities} from '@ngneat/elf-entities';\n\ntodosStore.reduce(deleteAllEntities());\n")),(0,r.kt)("h2",{id:"idkey"},"idKey"),(0,r.kt)("p",null,"By default, Elf takes the ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," key from the entity ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," field. To change it, you can pass the ",(0,r.kt)("inlineCode",{parentName:"p"},"idKey")," option to\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"withEntities")," function:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import {createState, Store} from '@ngneat/elf';\nimport {addEntities} from '@ngneat/elf-entities';\n\ninterface Todo {\n  _id: number;\n  label: string;\n}\n\nconst {state, config} = createState(\n  withEntities<Todo, '_id'>({idKey: '_id'})\n);\n\nconst todosStore = new Store({name: 'todos', state, config});\n")))}u.isMDXComponent=!0}}]);