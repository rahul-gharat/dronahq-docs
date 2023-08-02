"use strict";(self.webpackChunkdronahq_docs=self.webpackChunkdronahq_docs||[]).push([[3941],{603905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(667294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(r),y=l,m=u["".concat(p,".").concat(y)]||u[y]||d[y]||o;return r?n.createElement(m,a(a({ref:t},c),{},{components:r})):n.createElement(m,a({ref:t},c))}));function m(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=r.length,a=new Array(o);a[0]=y;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:l,a[1]=i;for(var s=2;s<o;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},659664:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>p,default:()=>y,frontMatter:()=>i,metadata:()=>s,toc:()=>c});r(667294);var n=r(603905);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function a(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}const i={},p="Create Group",s={type:"api",id:"create-group",unversionedId:"create-group",title:"Create Group",description:"",slug:"/create-group",frontMatter:{},api:{tags:["SCIM 2.0 API"],description:"Create a new group, checking if the group already exists before adding",requestBody:{required:!0,content:{"application/json":{schema:{type:"object",properties:{displayName:{type:"string",description:"The display name of the group"},members:{type:"array",items:{type:"object",properties:{value:{type:"string",description:"The value of the member"},display:{type:"string",description:"The display name of the member"}}},description:"The members of the group"}}}}}},responses:{200:{description:"Group created successfully",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",description:"The ID of the group"},displayName:{type:"string",description:"The display name of the group"},members:{type:"array",items:{type:"object",properties:{value:{type:"string",description:"The value of the member"},display:{type:"string",description:"The display name of the member"}}},description:"The members of the group"}}}}}},400:{description:"Bad Request"}},security:[{BearerAuth:[]}],method:"post",path:"/scim/v2/Groups",parameters:[],servers:[{url:"https://studio.dronahq.com/api"}],securitySchemes:{BearerAuth:{type:"http",scheme:"bearer",bearerFormat:"JWT"}},jsonRequestBodyExample:{displayName:"string",members:[{value:"string",display:"string"}]},info:{title:"SCIM 2.0 API Documentation",version:"1.0.0"},postman:{name:"Create Group",description:{content:"Create a new group, checking if the group already exists before adding",type:"text/plain"},url:{path:["scim","v2","Groups"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'{\n    "displayName": "<string>",\n    "members": [\n        {\n            "value": "<string>",\n            "display": "<string>"\n        },\n        {\n            "value": "<string>",\n            "display": "<string>"\n        }\n    ]\n}'},auth:{type:"bearer",bearer:[{type:"any",value:"<Bearer Token>",key:"token"}]}}},source:"@site/openapi.json",sourceDirName:".",permalink:"/apidocs/create-group",previous:{title:"List Groups",permalink:"/apidocs/list-groups"},next:{title:"Retrieve Group",permalink:"/apidocs/retrieve-group"}},c=[],u={toc:c},d="wrapper";function y(e){var{components:t}=e,r=a(e,["components"]);return(0,n.kt)(d,o(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){l(e,t,r[t])}))}return e}({},u,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"create-group"},"Create Group"),(0,n.kt)("p",null,"Create a new group, checking if the group already exists before adding"),(0,n.kt)("table",{style:{display:"table",width:"100%"}},(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",{style:{textAlign:"left"}},"Request Body ",(0,n.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,n.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,n.kt)("div",null)))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("code",null,"displayName"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string"),(0,n.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,n.kt)("p",null,"The display name of the group")))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("code",null,"members"),(0,n.kt)("span",{style:{opacity:"0.6"}}," object[]"),(0,n.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,n.kt)("p",null,"The members of the group")),(0,n.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("code",null,"value"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string"),(0,n.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,n.kt)("p",null,"The value of the member")))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("code",null,"display"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string"),(0,n.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,n.kt)("p",null,"The display name of the member")))))))))),(0,n.kt)("table",{style:{display:"table",width:"100%"}},(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",{style:{textAlign:"left"}},"Responses"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("div",{style:{display:"flex"}},(0,n.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,n.kt)("code",null,"200")),(0,n.kt)("div",null,(0,n.kt)("p",null,"Group created successfully"))),(0,n.kt)("div",null,(0,n.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,n.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,n.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,n.kt)("div",null)))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("code",null,"id"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string"),(0,n.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,n.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,n.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,n.kt)("p",null,"The ID of the group")))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("code",null,"displayName"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string"),(0,n.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,n.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,n.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,n.kt)("p",null,"The display name of the group")))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("code",null,"members"),(0,n.kt)("span",{style:{opacity:"0.6"}}," object[]"),(0,n.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,n.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,n.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,n.kt)("p",null,"The members of the group")),(0,n.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("code",null,"value"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string"),(0,n.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,n.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,n.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,n.kt)("p",null,"The value of the member")))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("code",null,"display"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string"),(0,n.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,n.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,n.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,n.kt)("p",null,"The display name of the member"))))))))))))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("div",{style:{display:"flex"}},(0,n.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,n.kt)("code",null,"400")),(0,n.kt)("div",null,(0,n.kt)("p",null,"Bad Request"))),(0,n.kt)("div",null))))))}y.isMDXComponent=!0}}]);