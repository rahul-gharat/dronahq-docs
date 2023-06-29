"use strict";(self.webpackChunkdronahq_docs=self.webpackChunkdronahq_docs||[]).push([[6755],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},740:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:2},l="Translate your site",i={unversionedId:"tutorial-extras/translate-your-site",id:"tutorial-extras/translate-your-site",title:"Translate your site",description:"Let's translate docs/intro.md to French.",source:"@site/docs/tutorial-extras/translate-your-site.md",sourceDirName:"tutorial-extras",slug:"/tutorial-extras/translate-your-site",permalink:"/dronahq-docs/docs/tutorial-extras/translate-your-site",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial-extras/translate-your-site.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Manage Docs Versions",permalink:"/dronahq-docs/docs/tutorial-extras/manage-docs-versions"}},s={},c=[{value:"Configure i18n",id:"configure-i18n",level:2},{value:"Translate a doc",id:"translate-a-doc",level:2},{value:"Start your localized site",id:"start-your-localized-site",level:2},{value:"Add a Locale Dropdown",id:"add-a-locale-dropdown",level:2},{value:"Build your localized site",id:"build-your-localized-site",level:2}],u={toc:c},d="wrapper";function p(e){let{components:t,...o}=e;return(0,a.kt)(d,(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"translate-your-site"},"Translate your site"),(0,a.kt)("p",null,"Let's translate ",(0,a.kt)("inlineCode",{parentName:"p"},"docs/intro.md")," to French."),(0,a.kt)("h2",{id:"configure-i18n"},"Configure i18n"),(0,a.kt)("p",null,"Modify ",(0,a.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js")," to add support for the ",(0,a.kt)("inlineCode",{parentName:"p"},"fr")," locale:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"module.exports = {\n  i18n: {\n    defaultLocale: 'en',\n    locales: ['en', 'fr'],\n  },\n};\n")),(0,a.kt)("h2",{id:"translate-a-doc"},"Translate a doc"),(0,a.kt)("p",null,"Copy the ",(0,a.kt)("inlineCode",{parentName:"p"},"docs/intro.md")," file to the ",(0,a.kt)("inlineCode",{parentName:"p"},"i18n/fr")," folder:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -p i18n/fr/docusaurus-plugin-content-docs/current/\n\ncp docs/intro.md i18n/fr/docusaurus-plugin-content-docs/current/intro.md\n")),(0,a.kt)("p",null,"Translate ",(0,a.kt)("inlineCode",{parentName:"p"},"i18n/fr/docusaurus-plugin-content-docs/current/intro.md")," in French."),(0,a.kt)("h2",{id:"start-your-localized-site"},"Start your localized site"),(0,a.kt)("p",null,"Start your site on the French locale:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm run start -- --locale fr\n")),(0,a.kt)("p",null,"Your localized site is accessible at ",(0,a.kt)("a",{parentName:"p",href:"http://localhost:3000/fr/"},"http://localhost:3000/fr/")," and the ",(0,a.kt)("inlineCode",{parentName:"p"},"Getting Started")," page is translated."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"In development, you can only use one locale at a same time.")),(0,a.kt)("h2",{id:"add-a-locale-dropdown"},"Add a Locale Dropdown"),(0,a.kt)("p",null,"To navigate seamlessly across languages, add a locale dropdown."),(0,a.kt)("p",null,"Modify the ",(0,a.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"module.exports = {\n  themeConfig: {\n    navbar: {\n      items: [\n        // highlight-start\n        {\n          type: 'localeDropdown',\n        },\n        // highlight-end\n      ],\n    },\n  },\n};\n")),(0,a.kt)("p",null,"The locale dropdown now appears in your navbar:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Locale Dropdown",src:n(3510).Z,width:"370",height:"302"})),(0,a.kt)("h2",{id:"build-your-localized-site"},"Build your localized site"),(0,a.kt)("p",null,"Build your site for a specific locale:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm run build -- --locale fr\n")),(0,a.kt)("p",null,"Or build your site to include all the locales at once:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm run build\n")))}p.isMDXComponent=!0},3510:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/localeDropdown-f0d995e751e7656a1b0dbbc1134e49c2.png"}}]);