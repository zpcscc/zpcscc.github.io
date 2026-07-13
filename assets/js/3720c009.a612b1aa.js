"use strict";
(globalThis["webpackChunkwebsite"] = globalThis["webpackChunkwebsite"] || []).push([[4787],{

/***/ 85532
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ DocTagsListPage)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__(30758);
// EXTERNAL MODULE: ./node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(13526);
// EXTERNAL MODULE: ./node_modules/.pnpm/@docusaurus+theme-common@3.10.1_@docusaurus+plugin-content-docs@3.10.1_@mdx-js+react@3._30ede3b8edf0995ee4b686181771bcf9/node_modules/@docusaurus/theme-common/lib/utils/metadataUtils.js
var metadataUtils = __webpack_require__(96298);
// EXTERNAL MODULE: ./node_modules/.pnpm/@docusaurus+theme-common@3.10.1_@docusaurus+plugin-content-docs@3.10.1_@mdx-js+react@3._30ede3b8edf0995ee4b686181771bcf9/node_modules/@docusaurus/theme-common/lib/utils/ThemeClassNames.js
var ThemeClassNames = __webpack_require__(87973);
// EXTERNAL MODULE: ./node_modules/.pnpm/@docusaurus+core@3.10.1_@mdx-js+react@3.1.1_@types+react@19.2.17_react@18.3.1__debug@4._09b0437f6a971adc2fd801a9bb541c77/node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(68882);
;// ./node_modules/.pnpm/@docusaurus+theme-common@3.10.1_@docusaurus+plugin-content-docs@3.10.1_@mdx-js+react@3._30ede3b8edf0995ee4b686181771bcf9/node_modules/@docusaurus/theme-common/lib/utils/tagsUtils.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const translateTagsPageTitle=()=>(0,Translate/* translate */.T)({id:'theme.tags.tagsPageTitle',message:'Tags',description:'The title of the tag list page'});function getTagLetter(tag){return tag[0].toUpperCase();}/**
 * Takes a list of tags (as provided by the content plugins), and groups them by
 * their initials.
 */function listTagsByLetters(tags){const groups={};Object.values(tags).forEach(tag=>{const initial=getTagLetter(tag.label);groups[initial]??=[];groups[initial].push(tag);});return Object.entries(groups)// Sort letters
.sort(([letter1],[letter2])=>letter1.localeCompare(letter2)).map(([letter,letterTags])=>{// Sort tags inside a letter
const sortedTags=letterTags.sort((tag1,tag2)=>tag1.label.localeCompare(tag2.label));return{letter,tags:sortedTags};});}
// EXTERNAL MODULE: ./node_modules/.pnpm/@docusaurus+theme-classic@3.10.1_@types+react@19.2.17_lightningcss@1.22.1_react-dom@18._7f1677c6af4e4935eab8ffc550476598/node_modules/@docusaurus/theme-classic/lib/theme/Tag/index.js + 1 modules
var Tag = __webpack_require__(44840);
// EXTERNAL MODULE: ./node_modules/.pnpm/@docusaurus+theme-classic@3.10.1_@types+react@19.2.17_lightningcss@1.22.1_react-dom@18._7f1677c6af4e4935eab8ffc550476598/node_modules/@docusaurus/theme-classic/lib/theme/Heading/index.js
var Heading = __webpack_require__(42433);
;// ./node_modules/.pnpm/@docusaurus+theme-classic@3.10.1_@types+react@19.2.17_lightningcss@1.22.1_react-dom@18._7f1677c6af4e4935eab8ffc550476598/node_modules/@docusaurus/theme-classic/lib/theme/TagsListByLetter/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"tag":"tag_my6R"});
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(86070);
;// ./node_modules/.pnpm/@docusaurus+theme-classic@3.10.1_@types+react@19.2.17_lightningcss@1.22.1_react-dom@18._7f1677c6af4e4935eab8ffc550476598/node_modules/@docusaurus/theme-classic/lib/theme/TagsListByLetter/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function TagLetterEntryItem({letterEntry}){return/*#__PURE__*/(0,jsx_runtime.jsxs)("article",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Heading/* default */.A,{as:"h2",id:letterEntry.letter,children:letterEntry.letter}),/*#__PURE__*/(0,jsx_runtime.jsx)("ul",{className:"padding--none",children:letterEntry.tags.map(tag=>/*#__PURE__*/(0,jsx_runtime.jsx)("li",{className:styles_module.tag,children:/*#__PURE__*/(0,jsx_runtime.jsx)(Tag/* default */.A,{...tag})},tag.permalink))}),/*#__PURE__*/(0,jsx_runtime.jsx)("hr",{})]});}function TagsListByLetter({tags}){const letterList=listTagsByLetters(tags);return/*#__PURE__*/(0,jsx_runtime.jsx)("section",{className:"margin-vert--lg",children:letterList.map(letterEntry=>/*#__PURE__*/(0,jsx_runtime.jsx)(TagLetterEntryItem,{letterEntry:letterEntry},letterEntry.letter))});}
// EXTERNAL MODULE: ./node_modules/.pnpm/@docusaurus+theme-classic@3.10.1_@types+react@19.2.17_lightningcss@1.22.1_react-dom@18._7f1677c6af4e4935eab8ffc550476598/node_modules/@docusaurus/theme-classic/lib/theme/SearchMetadata/index.js
var SearchMetadata = __webpack_require__(7608);
;// ./node_modules/.pnpm/@docusaurus+theme-classic@3.10.1_@types+react@19.2.17_lightningcss@1.22.1_react-dom@18._7f1677c6af4e4935eab8ffc550476598/node_modules/@docusaurus/theme-classic/lib/theme/DocTagsListPage/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function DocTagsListPageMetadata({title}){return/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(metadataUtils/* PageMetadata */.be,{title:title}),/*#__PURE__*/(0,jsx_runtime.jsx)(SearchMetadata/* default */.A,{tag:"doc_tags_list"})]});}function DocTagsListPageContent({tags,title}){return/*#__PURE__*/(0,jsx_runtime.jsx)(metadataUtils/* HtmlClassNameProvider */.e3,{className:(0,clsx/* default */.A)(ThemeClassNames/* ThemeClassNames */.G.page.docsTagsListPage),children:/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"container margin-vert--lg",children:/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"row",children:/*#__PURE__*/(0,jsx_runtime.jsxs)("main",{className:"col col--8 col--offset-2",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Heading/* default */.A,{as:"h1",children:title}),/*#__PURE__*/(0,jsx_runtime.jsx)(TagsListByLetter,{tags:tags})]})})})});}function DocTagsListPage(props){const title=translateTagsPageTitle();return/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(DocTagsListPageMetadata,{...props,title:title}),/*#__PURE__*/(0,jsx_runtime.jsx)(DocTagsListPageContent,{...props,title:title})]});}

/***/ },

/***/ 44840
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Tag)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__(30758);
// EXTERNAL MODULE: ./node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(13526);
// EXTERNAL MODULE: ./node_modules/.pnpm/@docusaurus+core@3.10.1_@mdx-js+react@3.1.1_@types+react@19.2.17_react@18.3.1__debug@4._09b0437f6a971adc2fd801a9bb541c77/node_modules/@docusaurus/core/lib/client/exports/Link.js
var Link = __webpack_require__(19990);
;// ./node_modules/.pnpm/@docusaurus+theme-classic@3.10.1_@types+react@19.2.17_lightningcss@1.22.1_react-dom@18._7f1677c6af4e4935eab8ffc550476598/node_modules/@docusaurus/theme-classic/lib/theme/Tag/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"tag":"tag_fI4F","tagRegular":"tagRegular__Bck","tagWithCount":"tagWithCount_Yde_"});
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(86070);
;// ./node_modules/.pnpm/@docusaurus+theme-classic@3.10.1_@types+react@19.2.17_lightningcss@1.22.1_react-dom@18._7f1677c6af4e4935eab8ffc550476598/node_modules/@docusaurus/theme-classic/lib/theme/Tag/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function Tag({permalink,label,count,description}){return/*#__PURE__*/(0,jsx_runtime.jsxs)(Link/* default */.A,{rel:"tag",href:permalink,title:description,className:(0,clsx/* default */.A)(styles_module.tag,count?styles_module.tagWithCount:styles_module.tagRegular),children:[label,count&&/*#__PURE__*/(0,jsx_runtime.jsx)("span",{children:count})]});}

/***/ }

}]);