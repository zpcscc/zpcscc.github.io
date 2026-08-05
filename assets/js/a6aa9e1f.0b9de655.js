"use strict";
(globalThis["webpackChunkwebsite"] ||= []).push([[24],{

/***/ 14793
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ BlogListPage)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@19.2.8/node_modules/react/index.js
var react = __webpack_require__(71763);
// EXTERNAL MODULE: ./node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(13526);
// EXTERNAL MODULE: ./node_modules/.pnpm/@docusaurus+core@3.10.2_@mdx-js+react@3.1.1_@types+react@19.2.18_react@19.2.8__debug@4._e79efd96cac39cdded6313f0321054e0/node_modules/@docusaurus/core/lib/client/exports/useDocusaurusContext.js
var useDocusaurusContext = __webpack_require__(64317);
// EXTERNAL MODULE: ./node_modules/.pnpm/@docusaurus+theme-common@3.10.2_@docusaurus+plugin-content-docs@3.10.2_@mdx-js+react@3._1afca3fc4efcda6c6243e422718687e8/node_modules/@docusaurus/theme-common/lib/utils/metadataUtils.js
var metadataUtils = __webpack_require__(23059);
// EXTERNAL MODULE: ./node_modules/.pnpm/@docusaurus+theme-common@3.10.2_@docusaurus+plugin-content-docs@3.10.2_@mdx-js+react@3._1afca3fc4efcda6c6243e422718687e8/node_modules/@docusaurus/theme-common/lib/utils/ThemeClassNames.js
var ThemeClassNames = __webpack_require__(38736);
// EXTERNAL MODULE: ./node_modules/.pnpm/@docusaurus+theme-classic@3.10.2_@types+react@19.2.18_lightningcss@1.22.1_react-dom@19._4b3c159cc836b0b9f992507b848851aa/node_modules/@docusaurus/theme-classic/lib/theme/BlogLayout/index.js + 6 modules
var BlogLayout = __webpack_require__(17839);
// EXTERNAL MODULE: ./node_modules/.pnpm/@docusaurus+core@3.10.2_@mdx-js+react@3.1.1_@types+react@19.2.18_react@19.2.8__debug@4._e79efd96cac39cdded6313f0321054e0/node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(51722);
// EXTERNAL MODULE: ./node_modules/.pnpm/@docusaurus+theme-classic@3.10.2_@types+react@19.2.18_lightningcss@1.22.1_react-dom@19._4b3c159cc836b0b9f992507b848851aa/node_modules/@docusaurus/theme-classic/lib/theme/PaginatorNavLink/index.js
var PaginatorNavLink = __webpack_require__(79255);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@19.2.8/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(91987);
;// ./node_modules/.pnpm/@docusaurus+theme-classic@3.10.2_@types+react@19.2.18_lightningcss@1.22.1_react-dom@19._4b3c159cc836b0b9f992507b848851aa/node_modules/@docusaurus/theme-classic/lib/theme/BlogListPaginator/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function BlogListPaginator(props){const{metadata}=props;const{previousPage,nextPage}=metadata;return/*#__PURE__*/(0,jsx_runtime.jsxs)("nav",{className:"pagination-nav","aria-label":(0,Translate/* translate */.T)({id:'theme.blog.paginator.navAriaLabel',message:'Blog list page navigation',description:'The ARIA label for the blog pagination'}),children:[previousPage&&/*#__PURE__*/(0,jsx_runtime.jsx)(PaginatorNavLink/* default */.A,{permalink:previousPage,title:/*#__PURE__*/(0,jsx_runtime.jsx)(Translate/* default */.A,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer entries"})}),nextPage&&/*#__PURE__*/(0,jsx_runtime.jsx)(PaginatorNavLink/* default */.A,{permalink:nextPage,title:/*#__PURE__*/(0,jsx_runtime.jsx)(Translate/* default */.A,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older entries"}),isNext:true})]});}
// EXTERNAL MODULE: ./node_modules/.pnpm/@docusaurus+theme-classic@3.10.2_@types+react@19.2.18_lightningcss@1.22.1_react-dom@19._4b3c159cc836b0b9f992507b848851aa/node_modules/@docusaurus/theme-classic/lib/theme/SearchMetadata/index.js
var SearchMetadata = __webpack_require__(8718);
// EXTERNAL MODULE: ./node_modules/.pnpm/@docusaurus+plugin-content-blog@3.10.2_@docusaurus+plugin-content-docs@3.10.2_@mdx-js+r_fee71840c2abfba0fbe44744c384bdb6/node_modules/@docusaurus/plugin-content-blog/lib/client/index.js + 3 modules
var client = __webpack_require__(59258);
;// ./node_modules/.pnpm/@docusaurus+theme-classic@3.10.2_@types+react@19.2.18_lightningcss@1.22.1_react-dom@19._4b3c159cc836b0b9f992507b848851aa/node_modules/@docusaurus/theme-classic/lib/theme/BlogPostItem/Container/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function BlogPostItemContainer({children,className}){return/*#__PURE__*/(0,jsx_runtime.jsx)("article",{className:className,children:children});}
// EXTERNAL MODULE: ./node_modules/.pnpm/@docusaurus+core@3.10.2_@mdx-js+react@3.1.1_@types+react@19.2.18_react@19.2.8__debug@4._e79efd96cac39cdded6313f0321054e0/node_modules/@docusaurus/core/lib/client/exports/Link.js
var Link = __webpack_require__(93953);
;// ./node_modules/.pnpm/@docusaurus+theme-classic@3.10.2_@types+react@19.2.18_lightningcss@1.22.1_react-dom@19._4b3c159cc836b0b9f992507b848851aa/node_modules/@docusaurus/theme-classic/lib/theme/BlogPostItem/Header/Title/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"title":"title_UD75"});
;// ./node_modules/.pnpm/@docusaurus+theme-classic@3.10.2_@types+react@19.2.18_lightningcss@1.22.1_react-dom@19._4b3c159cc836b0b9f992507b848851aa/node_modules/@docusaurus/theme-classic/lib/theme/BlogPostItem/Header/Title/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function BlogPostItemHeaderTitle({className}){const{metadata,isBlogPostPage}=(0,client/* useBlogPost */.e7)();const{permalink,title}=metadata;const TitleHeading=isBlogPostPage?'h1':'h2';return/*#__PURE__*/(0,jsx_runtime.jsx)(TitleHeading,{className:(0,clsx/* default */.A)(styles_module.title,className),children:isBlogPostPage?title:/*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.A,{to:permalink,children:title})});}
// EXTERNAL MODULE: ./node_modules/.pnpm/@docusaurus+theme-common@3.10.2_@docusaurus+plugin-content-docs@3.10.2_@mdx-js+react@3._1afca3fc4efcda6c6243e422718687e8/node_modules/@docusaurus/theme-common/lib/utils/usePluralForm.js
var usePluralForm = __webpack_require__(64058);
// EXTERNAL MODULE: ./node_modules/.pnpm/@docusaurus+theme-common@3.10.2_@docusaurus+plugin-content-docs@3.10.2_@mdx-js+react@3._1afca3fc4efcda6c6243e422718687e8/node_modules/@docusaurus/theme-common/lib/utils/IntlUtils.js
var IntlUtils = __webpack_require__(26349);
;// ./node_modules/.pnpm/@docusaurus+theme-classic@3.10.2_@types+react@19.2.18_lightningcss@1.22.1_react-dom@19._4b3c159cc836b0b9f992507b848851aa/node_modules/@docusaurus/theme-classic/lib/theme/BlogPostItem/Header/Info/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Info_styles_module = ({"container":"container_TfLH"});
;// ./node_modules/.pnpm/@docusaurus+theme-classic@3.10.2_@types+react@19.2.18_lightningcss@1.22.1_react-dom@19._4b3c159cc836b0b9f992507b848851aa/node_modules/@docusaurus/theme-classic/lib/theme/BlogPostItem/Header/Info/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Very simple pluralization: probably good enough for now
function useReadingTimePlural(){const{selectMessage}=(0,usePluralForm/* usePluralForm */.W)();return readingTimeFloat=>{const readingTime=Math.ceil(readingTimeFloat);return selectMessage(readingTime,(0,Translate/* translate */.T)({id:'theme.blog.post.readingTime.plurals',description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:'One min read|{readingTime} min read'},{readingTime}));};}function ReadingTime({readingTime}){const readingTimePlural=useReadingTimePlural();return/*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:readingTimePlural(readingTime)});}function DateTime({date,formattedDate}){return/*#__PURE__*/(0,jsx_runtime.jsx)("time",{dateTime:date,children:formattedDate});}function Spacer(){return/*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:' · '});}function BlogPostItemHeaderInfo({className}){const{metadata}=(0,client/* useBlogPost */.e7)();const{date,readingTime}=metadata;const dateTimeFormat=(0,IntlUtils/* useDateTimeFormat */.i)({day:'numeric',month:'long',year:'numeric',timeZone:'UTC'});const formatDate=blogDate=>dateTimeFormat.format(new Date(blogDate));return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:(0,clsx/* default */.A)(Info_styles_module.container,'margin-vert--md',className),children:[/*#__PURE__*/(0,jsx_runtime.jsx)(DateTime,{date:date,formattedDate:formatDate(date)}),typeof readingTime!=='undefined'&&/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Spacer,{}),/*#__PURE__*/(0,jsx_runtime.jsx)(ReadingTime,{readingTime:readingTime})]})]});}
// EXTERNAL MODULE: ./node_modules/.pnpm/@docusaurus+theme-classic@3.10.2_@types+react@19.2.18_lightningcss@1.22.1_react-dom@19._4b3c159cc836b0b9f992507b848851aa/node_modules/@docusaurus/theme-classic/lib/theme/Blog/Components/Author/index.js + 22 modules
var Author = __webpack_require__(55045);
;// ./node_modules/.pnpm/@docusaurus+theme-classic@3.10.2_@types+react@19.2.18_lightningcss@1.22.1_react-dom@19._4b3c159cc836b0b9f992507b848851aa/node_modules/@docusaurus/theme-classic/lib/theme/BlogPostItem/Header/Authors/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Authors_styles_module = ({"authorCol":"authorCol_JDjX","imageOnlyAuthorRow":"imageOnlyAuthorRow_YvcP","imageOnlyAuthorCol":"imageOnlyAuthorCol_naJp"});
;// ./node_modules/.pnpm/@docusaurus+theme-classic@3.10.2_@types+react@19.2.18_lightningcss@1.22.1_react-dom@19._4b3c159cc836b0b9f992507b848851aa/node_modules/@docusaurus/theme-classic/lib/theme/BlogPostItem/Header/Authors/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Component responsible for the authors layout
function BlogPostItemHeaderAuthors({className}){const{metadata:{authors},assets}=(0,client/* useBlogPost */.e7)();const authorsCount=authors.length;if(authorsCount===0){return null;}const imageOnly=authors.every(({name})=>!name);const singleAuthor=authors.length===1;return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:(0,clsx/* default */.A)('margin-top--md margin-bottom--sm',imageOnly?Authors_styles_module.imageOnlyAuthorRow:'row',className),children:authors.map((author,idx)=>/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:(0,clsx/* default */.A)(!imageOnly&&(singleAuthor?'col col--12':'col col--6'),imageOnly?Authors_styles_module.imageOnlyAuthorCol:Authors_styles_module.authorCol),children:/*#__PURE__*/(0,jsx_runtime.jsx)(Author/* default */.A,{author:{...author,// Handle author images using relative paths
imageURL:assets.authorsImageUrls[idx]??author.imageURL}})},idx))});}
;// ./node_modules/.pnpm/@docusaurus+theme-classic@3.10.2_@types+react@19.2.18_lightningcss@1.22.1_react-dom@19._4b3c159cc836b0b9f992507b848851aa/node_modules/@docusaurus/theme-classic/lib/theme/BlogPostItem/Header/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function BlogPostItemHeader(){return/*#__PURE__*/(0,jsx_runtime.jsxs)("header",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(BlogPostItemHeaderTitle,{}),/*#__PURE__*/(0,jsx_runtime.jsx)(BlogPostItemHeaderInfo,{}),/*#__PURE__*/(0,jsx_runtime.jsx)(BlogPostItemHeaderAuthors,{})]});}
// EXTERNAL MODULE: ./node_modules/.pnpm/@docusaurus+utils-common@3.10.2_clean-css@5.3.3_cssnano@6.1.2_postcss@8.5.25__html-mini_d94622743830ee667a505e2e0645c5d4/node_modules/@docusaurus/utils-common/lib/index.js
var lib = __webpack_require__(53895);
// EXTERNAL MODULE: ./node_modules/.pnpm/@docusaurus+theme-classic@3.10.2_@types+react@19.2.18_lightningcss@1.22.1_react-dom@19._4b3c159cc836b0b9f992507b848851aa/node_modules/@docusaurus/theme-classic/lib/theme/MDXContent/index.js + 44 modules
var MDXContent = __webpack_require__(43270);
;// ./node_modules/.pnpm/@docusaurus+theme-classic@3.10.2_@types+react@19.2.18_lightningcss@1.22.1_react-dom@19._4b3c159cc836b0b9f992507b848851aa/node_modules/@docusaurus/theme-classic/lib/theme/BlogPostItem/Content/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function BlogPostItemContent({children,className}){const{isBlogPostPage}=(0,client/* useBlogPost */.e7)();return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{// This ID is used for the feed generation to locate the main content
id:isBlogPostPage?lib/* blogPostContainerID */.LU:undefined,className:(0,clsx/* default */.A)('markdown',className),children:/*#__PURE__*/(0,jsx_runtime.jsx)(MDXContent/* default */.A,{children:children})});}
// EXTERNAL MODULE: ./node_modules/.pnpm/@docusaurus+theme-classic@3.10.2_@types+react@19.2.18_lightningcss@1.22.1_react-dom@19._4b3c159cc836b0b9f992507b848851aa/node_modules/@docusaurus/theme-classic/lib/theme/EditMetaRow/index.js + 5 modules
var EditMetaRow = __webpack_require__(33810);
// EXTERNAL MODULE: ./node_modules/.pnpm/@docusaurus+theme-classic@3.10.2_@types+react@19.2.18_lightningcss@1.22.1_react-dom@19._4b3c159cc836b0b9f992507b848851aa/node_modules/@docusaurus/theme-classic/lib/theme/TagsListInline/index.js + 1 modules
var TagsListInline = __webpack_require__(11113);
;// ./node_modules/.pnpm/@docusaurus+theme-classic@3.10.2_@types+react@19.2.18_lightningcss@1.22.1_react-dom@19._4b3c159cc836b0b9f992507b848851aa/node_modules/@docusaurus/theme-classic/lib/theme/BlogPostItem/Footer/ReadMoreLink/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function ReadMoreLabel(){return/*#__PURE__*/(0,jsx_runtime.jsx)("b",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Translate/* default */.A,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read more"})});}function BlogPostItemFooterReadMoreLink(props){const{blogPostTitle,...linkProps}=props;return/*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.A,{"aria-label":(0,Translate/* translate */.T)({message:'Read more about {title}',id:'theme.blog.post.readMoreLabel',description:'The ARIA label for the link to full blog posts from excerpts'},{title:blogPostTitle}),...linkProps,children:/*#__PURE__*/(0,jsx_runtime.jsx)(ReadMoreLabel,{})});}
;// ./node_modules/.pnpm/@docusaurus+theme-classic@3.10.2_@types+react@19.2.18_lightningcss@1.22.1_react-dom@19._4b3c159cc836b0b9f992507b848851aa/node_modules/@docusaurus/theme-classic/lib/theme/BlogPostItem/Footer/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function BlogPostItemFooter(){const{metadata,isBlogPostPage}=(0,client/* useBlogPost */.e7)();const{tags,title,editUrl,hasTruncateMarker,lastUpdatedBy,lastUpdatedAt}=metadata;// A post is truncated if it's in the "list view" and it has a truncate marker
const truncatedPost=!isBlogPostPage&&hasTruncateMarker;const tagsExists=tags.length>0;const renderFooter=tagsExists||truncatedPost||editUrl;if(!renderFooter){return null;}// BlogPost footer - details view
if(isBlogPostPage){const canDisplayEditMetaRow=!!(editUrl||lastUpdatedAt||lastUpdatedBy);return/*#__PURE__*/(0,jsx_runtime.jsxs)("footer",{className:"docusaurus-mt-lg",children:[tagsExists&&/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:(0,clsx/* default */.A)('row','margin-top--sm',ThemeClassNames/* ThemeClassNames */.G.blog.blogFooterEditMetaRow),children:/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"col",children:/*#__PURE__*/(0,jsx_runtime.jsx)(TagsListInline/* default */.A,{tags:tags})})}),canDisplayEditMetaRow&&/*#__PURE__*/(0,jsx_runtime.jsx)(EditMetaRow/* default */.A,{className:(0,clsx/* default */.A)('margin-top--sm',ThemeClassNames/* ThemeClassNames */.G.blog.blogFooterEditMetaRow),editUrl:editUrl,lastUpdatedAt:lastUpdatedAt,lastUpdatedBy:lastUpdatedBy})]});}// BlogPost footer - list view
else{return/*#__PURE__*/(0,jsx_runtime.jsxs)("footer",{className:"row docusaurus-mt-lg",children:[tagsExists&&/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:(0,clsx/* default */.A)('col',{'col--9':truncatedPost}),children:/*#__PURE__*/(0,jsx_runtime.jsx)(TagsListInline/* default */.A,{tags:tags})}),truncatedPost&&/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:(0,clsx/* default */.A)('col text--right',{'col--3':tagsExists}),children:/*#__PURE__*/(0,jsx_runtime.jsx)(BlogPostItemFooterReadMoreLink,{blogPostTitle:title,to:metadata.permalink})})]});}}
;// ./node_modules/.pnpm/@docusaurus+theme-classic@3.10.2_@types+react@19.2.18_lightningcss@1.22.1_react-dom@19._4b3c159cc836b0b9f992507b848851aa/node_modules/@docusaurus/theme-classic/lib/theme/BlogPostItem/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// apply a bottom margin in list view
function useContainerClassName(){const{isBlogPostPage}=(0,client/* useBlogPost */.e7)();return!isBlogPostPage?'margin-bottom--xl':undefined;}function BlogPostItem({children,className}){const containerClassName=useContainerClassName();return/*#__PURE__*/(0,jsx_runtime.jsxs)(BlogPostItemContainer,{className:(0,clsx/* default */.A)(containerClassName,className),children:[/*#__PURE__*/(0,jsx_runtime.jsx)(BlogPostItemHeader,{}),/*#__PURE__*/(0,jsx_runtime.jsx)(BlogPostItemContent,{children:children}),/*#__PURE__*/(0,jsx_runtime.jsx)(BlogPostItemFooter,{})]});}
;// ./node_modules/.pnpm/@docusaurus+theme-classic@3.10.2_@types+react@19.2.18_lightningcss@1.22.1_react-dom@19._4b3c159cc836b0b9f992507b848851aa/node_modules/@docusaurus/theme-classic/lib/theme/BlogPostItems/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function BlogPostItems({items,component:BlogPostItemComponent=BlogPostItem}){return/*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:items.map(({content:BlogPostContent})=>/*#__PURE__*/(0,jsx_runtime.jsx)(client/* BlogPostProvider */["in"],{content:BlogPostContent,children:/*#__PURE__*/(0,jsx_runtime.jsx)(BlogPostItemComponent,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(BlogPostContent,{})})},BlogPostContent.metadata.permalink))});}
// EXTERNAL MODULE: ./node_modules/.pnpm/@docusaurus+core@3.10.2_@mdx-js+react@3.1.1_@types+react@19.2.18_react@19.2.8__debug@4._e79efd96cac39cdded6313f0321054e0/node_modules/@docusaurus/core/lib/client/exports/Head.js
var Head = __webpack_require__(99495);
;// ./node_modules/.pnpm/@docusaurus+theme-classic@3.10.2_@types+react@19.2.18_lightningcss@1.22.1_react-dom@19._4b3c159cc836b0b9f992507b848851aa/node_modules/@docusaurus/theme-classic/lib/theme/BlogListPage/StructuredData/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function BlogListPageStructuredData(props){const structuredData=(0,client/* useBlogListPageStructuredData */.kJ)(props);return/*#__PURE__*/(0,jsx_runtime.jsx)(Head/* default */.A,{children:/*#__PURE__*/(0,jsx_runtime.jsx)("script",{type:"application/ld+json",children:JSON.stringify(structuredData)})});}
;// ./node_modules/.pnpm/@docusaurus+theme-classic@3.10.2_@types+react@19.2.18_lightningcss@1.22.1_react-dom@19._4b3c159cc836b0b9f992507b848851aa/node_modules/@docusaurus/theme-classic/lib/theme/BlogListPage/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function BlogListPageMetadata(props){const{metadata}=props;const{siteConfig:{title:siteTitle}}=(0,useDocusaurusContext/* default */.A)();const{blogDescription,blogTitle,permalink}=metadata;const isBlogOnlyMode=permalink==='/';const title=isBlogOnlyMode?siteTitle:blogTitle;return/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(metadataUtils/* PageMetadata */.be,{title:title,description:blogDescription}),/*#__PURE__*/(0,jsx_runtime.jsx)(SearchMetadata/* default */.A,{tag:"blog_posts_list"})]});}function BlogListPageContent(props){const{metadata,items,sidebar}=props;return/*#__PURE__*/(0,jsx_runtime.jsxs)(BlogLayout/* default */.A,{sidebar:sidebar,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(BlogPostItems,{items:items}),/*#__PURE__*/(0,jsx_runtime.jsx)(BlogListPaginator,{metadata:metadata})]});}function BlogListPage(props){return/*#__PURE__*/(0,jsx_runtime.jsxs)(metadataUtils/* HtmlClassNameProvider */.e3,{className:(0,clsx/* default */.A)(ThemeClassNames/* ThemeClassNames */.G.wrapper.blogPages,ThemeClassNames/* ThemeClassNames */.G.page.blogListPage),children:[/*#__PURE__*/(0,jsx_runtime.jsx)(BlogListPageMetadata,{...props}),/*#__PURE__*/(0,jsx_runtime.jsx)(BlogListPageStructuredData,{...props}),/*#__PURE__*/(0,jsx_runtime.jsx)(BlogListPageContent,{...props})]});}

/***/ },

/***/ 64058
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   W: () => (/* binding */ usePluralForm)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71763);
/* harmony import */ var _docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64317);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// We want to ensurer a stable plural form order in all cases
// It is more convenient and natural to handle "small values" first
// See https://x.com/sebastienlorber/status/1366820663261077510
const OrderedPluralForms=['zero','one','two','few','many','other'];function sortPluralForms(pluralForms){return OrderedPluralForms.filter(pf=>pluralForms.includes(pf));}// Hardcoded english/fallback implementation
const EnglishPluralForms={locale:'en',pluralForms:sortPluralForms(['one','other']),select:count=>count===1?'one':'other'};function createLocalePluralForms(locale){const pluralRules=new Intl.PluralRules(locale);return{locale,pluralForms:sortPluralForms(pluralRules.resolvedOptions().pluralCategories),select:count=>pluralRules.select(count)};}/**
 * Poor man's `PluralSelector` implementation, using an English fallback. We
 * want a lightweight, future-proof and good-enough solution. We don't want a
 * perfect and heavy solution.
 *
 * Docusaurus classic theme has only 2 deeply nested labels requiring complex
 * plural rules. We don't want to use `Intl` + `PluralRules` polyfills + full
 * ICU syntax (react-intl) just for that.
 *
 * Notes:
 * - 2021: 92+% Browsers support `Intl.PluralRules`, and support will increase
 * in the future
 * - NodeJS >= 13 has full ICU support by default
 * - In case of "mismatch" between SSR and Browser ICU support, React keeps
 * working!
 */function useLocalePluralForms(){const{i18n:{currentLocale}}=(0,_docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)();return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{try{return createLocalePluralForms(currentLocale);}catch(err){console.error(`Failed to use Intl.PluralRules for locale "${currentLocale}".
Docusaurus will fallback to the default (English) implementation.
Error: ${err.message}
`);return EnglishPluralForms;}},[currentLocale]);}function selectPluralMessage(pluralMessages,count,localePluralForms){const separator='|';const parts=pluralMessages.split(separator);if(parts.length===1){return parts[0];}if(parts.length>localePluralForms.pluralForms.length){console.error(`For locale=${localePluralForms.locale}, a maximum of ${localePluralForms.pluralForms.length} plural forms are expected (${localePluralForms.pluralForms.join(',')}), but the message contains ${parts.length}: ${pluralMessages}`);}const pluralForm=localePluralForms.select(count);const pluralFormIndex=localePluralForms.pluralForms.indexOf(pluralForm);// In case of not enough plural form messages, we take the last one (other)
// instead of returning undefined
return parts[Math.min(pluralFormIndex,parts.length-1)];}/**
 * Reads the current locale and returns an interface very similar to
 * `Intl.PluralRules`.
 */function usePluralForm(){const localePluralForm=useLocalePluralForms();return{selectMessage:(count,pluralMessages)=>selectPluralMessage(pluralMessages,count,localePluralForm)};}

/***/ }

}]);