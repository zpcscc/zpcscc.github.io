"use strict";
(globalThis["webpackChunkwebsite"] ||= []).push([[4787],{

/***/ 16369
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ DocTagsListPage)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@19.2.8/node_modules/react/index.js
var react = __webpack_require__(71763);
// EXTERNAL MODULE: ./node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(13526);
// EXTERNAL MODULE: ./node_modules/.pnpm/@docusaurus+theme-common@3.10.2_@docusaurus+plugin-content-docs@3.10.2_@mdx-js+react@3._9307219ceedd022b5e484afb5de5b5e0/node_modules/@docusaurus/theme-common/lib/utils/metadataUtils.js
var metadataUtils = __webpack_require__(96413);
// EXTERNAL MODULE: ./node_modules/.pnpm/@docusaurus+theme-common@3.10.2_@docusaurus+plugin-content-docs@3.10.2_@mdx-js+react@3._9307219ceedd022b5e484afb5de5b5e0/node_modules/@docusaurus/theme-common/lib/utils/ThemeClassNames.js
var ThemeClassNames = __webpack_require__(94626);
// EXTERNAL MODULE: ./node_modules/.pnpm/@docusaurus+core@3.10.2_@mdx-js+react@3.1.1_@types+react@19.2.18_react@19.2.8__clean-cs_00b1df3fd38e10c561f9a9d358baade4/node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(67178);
;// ./node_modules/.pnpm/@docusaurus+theme-common@3.10.2_@docusaurus+plugin-content-docs@3.10.2_@mdx-js+react@3._9307219ceedd022b5e484afb5de5b5e0/node_modules/@docusaurus/theme-common/lib/utils/tagsUtils.js
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
// EXTERNAL MODULE: ./node_modules/.pnpm/@docusaurus+theme-classic@3.10.2_@types+react@19.2.18_clean-css@5.3.3_cssnano@6.1.2_pos_1116ff16fdf96bc775705cac8809dfcf/node_modules/@docusaurus/theme-classic/lib/theme/Tag/index.js + 1 modules
var Tag = __webpack_require__(62098);
// EXTERNAL MODULE: ./node_modules/.pnpm/@docusaurus+theme-classic@3.10.2_@types+react@19.2.18_clean-css@5.3.3_cssnano@6.1.2_pos_1116ff16fdf96bc775705cac8809dfcf/node_modules/@docusaurus/theme-classic/lib/theme/Heading/index.js
var Heading = __webpack_require__(19628);
;// ./node_modules/.pnpm/@docusaurus+theme-classic@3.10.2_@types+react@19.2.18_clean-css@5.3.3_cssnano@6.1.2_pos_1116ff16fdf96bc775705cac8809dfcf/node_modules/@docusaurus/theme-classic/lib/theme/TagsListByLetter/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"tag":"tag_Y1NE"});
// EXTERNAL MODULE: ./node_modules/.pnpm/react@19.2.8/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(91987);
;// ./node_modules/.pnpm/@docusaurus+theme-classic@3.10.2_@types+react@19.2.18_clean-css@5.3.3_cssnano@6.1.2_pos_1116ff16fdf96bc775705cac8809dfcf/node_modules/@docusaurus/theme-classic/lib/theme/TagsListByLetter/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function TagLetterEntryItem({letterEntry}){return/*#__PURE__*/(0,jsx_runtime.jsxs)("article",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Heading/* default */.A,{as:"h2",id:letterEntry.letter,children:letterEntry.letter}),/*#__PURE__*/(0,jsx_runtime.jsx)("ul",{className:"padding--none",children:letterEntry.tags.map(tag=>/*#__PURE__*/(0,jsx_runtime.jsx)("li",{className:styles_module.tag,children:/*#__PURE__*/(0,jsx_runtime.jsx)(Tag/* default */.A,{...tag})},tag.permalink))}),/*#__PURE__*/(0,jsx_runtime.jsx)("hr",{})]});}function TagsListByLetter({tags}){const letterList=listTagsByLetters(tags);return/*#__PURE__*/(0,jsx_runtime.jsx)("section",{className:"margin-vert--lg",children:letterList.map(letterEntry=>/*#__PURE__*/(0,jsx_runtime.jsx)(TagLetterEntryItem,{letterEntry:letterEntry},letterEntry.letter))});}
// EXTERNAL MODULE: ./node_modules/.pnpm/@docusaurus+theme-classic@3.10.2_@types+react@19.2.18_clean-css@5.3.3_cssnano@6.1.2_pos_1116ff16fdf96bc775705cac8809dfcf/node_modules/@docusaurus/theme-classic/lib/theme/SearchMetadata/index.js
var SearchMetadata = __webpack_require__(50123);
;// ./node_modules/.pnpm/@docusaurus+theme-classic@3.10.2_@types+react@19.2.18_clean-css@5.3.3_cssnano@6.1.2_pos_1116ff16fdf96bc775705cac8809dfcf/node_modules/@docusaurus/theme-classic/lib/theme/DocTagsListPage/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function DocTagsListPageMetadata({title}){return/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(metadataUtils/* PageMetadata */.be,{title:title}),/*#__PURE__*/(0,jsx_runtime.jsx)(SearchMetadata/* default */.A,{tag:"doc_tags_list"})]});}function DocTagsListPageContent({tags,title}){return/*#__PURE__*/(0,jsx_runtime.jsx)(metadataUtils/* HtmlClassNameProvider */.e3,{className:(0,clsx/* default */.A)(ThemeClassNames/* ThemeClassNames */.G.page.docsTagsListPage),children:/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"container margin-vert--lg",children:/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"row",children:/*#__PURE__*/(0,jsx_runtime.jsxs)("main",{className:"col col--8 col--offset-2",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Heading/* default */.A,{as:"h1",children:title}),/*#__PURE__*/(0,jsx_runtime.jsx)(TagsListByLetter,{tags:tags})]})})})});}function DocTagsListPage(props){const title=translateTagsPageTitle();return/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(DocTagsListPageMetadata,{...props,title:title}),/*#__PURE__*/(0,jsx_runtime.jsx)(DocTagsListPageContent,{...props,title:title})]});}

/***/ },

/***/ 62098
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Tag)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@19.2.8/node_modules/react/index.js
var react = __webpack_require__(71763);
// EXTERNAL MODULE: ./node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(13526);
// EXTERNAL MODULE: ./node_modules/.pnpm/@docusaurus+core@3.10.2_@mdx-js+react@3.1.1_@types+react@19.2.18_react@19.2.8__clean-cs_00b1df3fd38e10c561f9a9d358baade4/node_modules/@docusaurus/core/lib/client/exports/Link.js
var Link = __webpack_require__(35865);
;// ./node_modules/.pnpm/@docusaurus+theme-classic@3.10.2_@types+react@19.2.18_clean-css@5.3.3_cssnano@6.1.2_pos_1116ff16fdf96bc775705cac8809dfcf/node_modules/@docusaurus/theme-classic/lib/theme/Tag/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"tag":"tag_RRmj","tagRegular":"tagRegular_fVae","tagWithCount":"tagWithCount_Oax4"});
// EXTERNAL MODULE: ./node_modules/.pnpm/react@19.2.8/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(91987);
;// ./node_modules/.pnpm/@docusaurus+theme-classic@3.10.2_@types+react@19.2.18_clean-css@5.3.3_cssnano@6.1.2_pos_1116ff16fdf96bc775705cac8809dfcf/node_modules/@docusaurus/theme-classic/lib/theme/Tag/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function Tag({permalink,label,count,description}){return/*#__PURE__*/(0,jsx_runtime.jsxs)(Link/* default */.A,{rel:"tag",href:permalink,title:description,className:(0,clsx/* default */.A)(styles_module.tag,count?styles_module.tagWithCount:styles_module.tagRegular),children:[label,count&&/*#__PURE__*/(0,jsx_runtime.jsx)("span",{children:count})]});}

/***/ }

}]);