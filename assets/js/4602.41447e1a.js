"use strict";
(globalThis["webpackChunkwebsite"] = globalThis["webpackChunkwebsite"] || []).push([[4602],{

/***/ 64602
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Cascade_Cascade)
});

// EXTERNAL MODULE: ./src/components/Select/index.tsx
var Select = __webpack_require__(79369);
// EXTERNAL MODULE: ./src/components/TextArea/index.tsx
var TextArea = __webpack_require__(26875);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__(30758);
;// ./src/components/Cascade/utils/arr2Tree.ts
/**
 * @name  二维数组转为树形结构
 * @param arr 二维数组
 * @returns
 */const arr2Tree=arr=>{if(!Array.isArray(arr))return[];const loopTree=(curr,pre)=>{if(!Array.isArray(curr)||curr.length===0){return pre;}const[first,...other]=curr;// 在树状数据中，找当前对应的数据
const fIndex=pre.findIndex(item=>typeof item==='object'&&item.value===first);if(fIndex===-1){// 没有找到对应的数据，则新添加数据
const childObj={children:other.length>0?loopTree(other,[]):[]};pre.push({value:first,...childObj});}else{// 找到对应的数据，判断是否需要继续递归
const{children=[],...rest}=pre[fIndex];// 若还有其他数据，则继续往下递归
if(other.length>0){pre[fIndex]={...rest,children:loopTree(other,children)};}}return pre;};return arr.reduce((pre,curr)=>{return loopTree(curr,pre);},[]);};/* harmony default export */ const utils_arr2Tree = (arr2Tree);
;// ./src/components/Cascade/utils/initValueArr.ts
/**
 * @name 初始化value数组，确保长度正确，方便后续更改数据；
 * @param value 用户传入的数据
 * @param level 级联的层级
 * @returns
 */const initValueArr=(value,level)=>{let restArr=[];if(level>=value.length){restArr=Array(level-value.length);}return[...value,...restArr];};/* harmony default export */ const utils_initValueArr = (initValueArr);
// EXTERNAL MODULE: ./src/utils/getType/index.ts
var getType = __webpack_require__(54856);
// EXTERNAL MODULE: ./src/utils/isNumber/index.ts
var isNumber = __webpack_require__(46281);
;// ./src/utils/isEmpty/index.ts
/**
 * @name isEmpty
 * @description 判断数据是否为空
 * @param {any} value 需要检查的数据
 * @returns {boolean} 返回布尔值
 * @example <caption>ts类型</caption>
isEmpty(value: any);
 * @example <caption>demo</caption>
import { isEmpty } from '@zpcscc/utils';

console.log(isEmpty()); // true
console.log(isEmpty('')); // true
console.log(isEmpty(null)); // true
console.log(isEmpty(undefined)); // true
console.log(isEmpty(void 0)); // true
console.log(isEmpty(Number.NaN); // true
console.log(isEmpty(123); // false
console.log(isEmpty('123'); // false
console.log(isEmpty({}); // true
console.log(isEmpty([]); // true
console.log(isEmpty({a:1}); // false
console.log(isEmpty([1,2,3]); // false
console.log(isEmpty(new Map([[1,2],[3,4]])); // false
console.log(isEmpty(new Set([1,2,3])); // false
 */const isEmpty=value=>{if(value===null||value===undefined)return true;if((0,isNumber/* default */.A)(value))return false;if(Array.isArray(value)||typeof value==='string'||typeof value.splice==='function'||(0,getType/* default */.A)(value)==='Arguments'){return value.length===0;}const tag=(0,getType/* default */.A)(value);if(tag==='Map'||tag==='Set'){return value.size===0;}for(const key in value){/* istanbul ignore next */if(Object.prototype.hasOwnProperty.call(value,key)){return false;}}return true;};/* harmony default export */ const utils_isEmpty = (isEmpty);
;// ./src/components/Cascade/utils/updateSelectList.ts
// 获取options选项
const getOptions=treeDataItem=>treeDataItem.map(item=>({value:item.value,label:item.value,id:item.value}));/**
 * @name 根据选择的值，更新选择下拉列表
 * @param treeData 完整的树形数据
 * @param valueArr 用户选择的值
 */const updateSelectList=(treeData,valueArr,level)=>{const newSelectList=Array(level).fill({options:[]});// 设置第一级数据
newSelectList[0]={options:getOptions(treeData)};// 根据用户选择的值，设置后几级数据
valueArr.forEach((item,index)=>{const loopTree=treeDataValue=>{treeDataValue.forEach(treeDataItem=>{if(!utils_isEmpty(treeDataItem.children)&&index+1<level){if(treeDataItem.value===item){newSelectList[index+1]={options:getOptions(treeDataItem.children)};}else{loopTree(treeDataItem.children);}}});};loopTree(treeData);});return newSelectList;};/* harmony default export */ const utils_updateSelectList = (updateSelectList);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(86070);
;// ./src/components/Cascade/index.tsx
/**
 * @name 级联组件
 * @param value 每个级联选中的值
 * @param onChange 组件值修改的回调
 * @param level 级联层级
 * @param placeholder 级联输入框占位符
 * @param showTextArea 显示自定义文本框
 * @param selectOptions 自定义下拉框的配置项
 * @param textAreaOptions 自定义文本框的配置项
 * @param cascadeData 外部输入的级联选项数据
 * @link 其他参数详见 https://ant.design/components/select-cn/
 */const Cascade=props=>{const{value=[],cascadeData=[],level=3,showTextArea=false,selectOptions={},textAreaOptions={},placeholders=[],onChange}=props;const treeData=utils_arr2Tree(cascadeData);const[valueArr,setValueArr]=(0,react.useState)(utils_initValueArr(value,showTextArea?level+1:level));const[textValue,setTextValue]=(0,react.useState)(valueArr?.[level]);const[selectList,setSelectList]=(0,react.useState)(utils_updateSelectList(treeData,valueArr,level));const onSelectChange=(selectValue,index)=>{let newValueArr=valueArr;if(showTextArea&&index===level){valueArr[index]=selectValue;newValueArr=valueArr;setTextValue(selectValue);}else{newValueArr=[...valueArr.slice(0,index),selectValue];newValueArr[level]=textValue;setSelectList(utils_updateSelectList(treeData,newValueArr,level));}setValueArr(newValueArr);onChange?.(newValueArr.filter(Boolean));};(0,react.useEffect)(()=>{setSelectList(utils_updateSelectList(treeData,valueArr,level));},[level]);return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{children:[selectList?.map(({options},index)=>/*#__PURE__*/(0,jsx_runtime.jsx)(Select/* default */.A,{value:valueArr?.[index],placeholder:placeholders?.[index]??'请选择...',options:options,onChange:selectValue=>onSelectChange(selectValue,index),style:{marginBottom:`${index===selectList.length-1&&!showTextArea?0:20}px`},notFoundContent:'暂无数据',...selectOptions},index)),showTextArea&&/*#__PURE__*/(0,jsx_runtime.jsx)(TextArea/* default */.A,{defaultValue:textValue,placeholder:placeholders?.[level]??'请输入...',onChange:textAreaValue=>onSelectChange(textAreaValue,level),...textAreaOptions})]});};/* harmony default export */ const components_Cascade = (Cascade);
// EXTERNAL MODULE: ./node_modules/.pnpm/@province-city-china+area@8.5.8/node_modules/@province-city-china/area/area.min.json
var area_min = __webpack_require__(64982);
// EXTERNAL MODULE: ./node_modules/.pnpm/@province-city-china+city@8.5.8/node_modules/@province-city-china/city/city.min.json
var city_min = __webpack_require__(3092);
// EXTERNAL MODULE: ./node_modules/.pnpm/@province-city-china+province@8.5.8/node_modules/@province-city-china/province/province.min.json
var province_min = __webpack_require__(53965);
;// ./src/components/Cascade/data/specialProvince.ts
// 港澳台的省市区数据
const specialProvinceJson={Province:[{c:'710000',n:'台湾省'},{c:'810000',n:'香港特别行政区'},{c:'820000',n:'澳门特别行政区'}],City:[{c:'710100',n:'台北市'},{c:'710200',n:'新北市'},{c:'710300',n:'桃园市'},{c:'710400',n:'台中市'},{c:'710500',n:'台南市'},{c:'710600',n:'高雄市'},{c:'710700',n:'基隆市'},{c:'710800',n:'新竹市'},{c:'710900',n:'嘉义市'}],Area:[{c:'710101',n:'中正区'},{c:'710102',n:'大同区'},{c:'710103',n:'中山区'},{c:'710104',n:'万华区'},{c:'710105',n:'信义区'},{c:'710106',n:'松山区'},{c:'710107',n:'大安区'},{c:'710108',n:'南港区'},{c:'710109',n:'北投区'},{c:'710110',n:'内湖区'},{c:'710111',n:'士林区'},{c:'710112',n:'文山区'},{c:'710201',n:'板桥区'},{c:'710202',n:'土城区'},{c:'710203',n:'新庄区'},{c:'710204',n:'新店区'},{c:'710205',n:'深坑区'},{c:'710206',n:'石碇区'},{c:'710207',n:'坪林区'},{c:'710208',n:'乌来区'},{c:'710209',n:'五股区'},{c:'710210',n:'八里区'},{c:'710211',n:'林口区'},{c:'710212',n:'淡水区'},{c:'710213',n:'中和区'},{c:'710214',n:'永和区'},{c:'710215',n:'三重区'},{c:'710216',n:'芦洲区'},{c:'710217',n:'泰山区'},{c:'710218',n:'树林区'},{c:'710219',n:'莺歌区'},{c:'710220',n:'三峡区'},{c:'710221',n:'汐止区'},{c:'710222',n:'金山区'},{c:'710223',n:'万里区'},{c:'710224',n:'三芝区'},{c:'710225',n:'石门区'},{c:'710226',n:'瑞芳区'},{c:'710227',n:'贡寮区'},{c:'710228',n:'双溪区'},{c:'710229',n:'平溪区'},{c:'710301',n:'桃园区'},{c:'710302',n:'中坜区'},{c:'710303',n:'平镇区'},{c:'710304',n:'八德区'},{c:'710305',n:'杨梅区'},{c:'710306',n:'芦竹区'},{c:'710307',n:'大溪区'},{c:'710308',n:'龙潭区'},{c:'710309',n:'龟山区'},{c:'710310',n:'大园区'},{c:'710311',n:'观音区'},{c:'710312',n:'新屋区'},{c:'710313',n:'复兴区'},{c:'710401',n:'中区'},{c:'710402',n:'东区'},{c:'710403',n:'西区'},{c:'710404',n:'南区'},{c:'710405',n:'北区'},{c:'710406',n:'西屯区'},{c:'710407',n:'南屯区'},{c:'710408',n:'北屯区'},{c:'710409',n:'丰原区'},{c:'710410',n:'大里区'},{c:'710411',n:'太平区'},{c:'710412',n:'东势区'},{c:'710413',n:'大甲区'},{c:'710414',n:'清水区'},{c:'710415',n:'沙鹿区'},{c:'710416',n:'梧栖区'},{c:'710417',n:'后里区'},{c:'710418',n:'神冈区'},{c:'710419',n:'潭子区'},{c:'710420',n:'大雅区'},{c:'710421',n:'新小区'},{c:'710422',n:'石冈区'},{c:'710423',n:'外埔区'},{c:'710424',n:'大安区'},{c:'710425',n:'乌日区'},{c:'710426',n:'大肚区'},{c:'710427',n:'龙井区'},{c:'710428',n:'雾峰区'},{c:'710429',n:'和平区'},{c:'710501',n:'中西区'},{c:'710502',n:'东区'},{c:'710503',n:'南区'},{c:'710504',n:'北区'},{c:'710505',n:'安平区'},{c:'710506',n:'安南区'},{c:'710507',n:'永康区'},{c:'710508',n:'归仁区'},{c:'710509',n:'新化区'},{c:'710510',n:'左镇区'},{c:'710511',n:'玉井区'},{c:'710512',n:'楠西区'},{c:'710513',n:'南化区'},{c:'710514',n:'仁德区'},{c:'710515',n:'关庙区'},{c:'710516',n:'龙崎区'},{c:'710517',n:'官田区'},{c:'710518',n:'麻豆区'},{c:'710519',n:'佳里区'},{c:'710520',n:'西港区'},{c:'710521',n:'七股区'},{c:'710522',n:'将军区'},{c:'710523',n:'学甲区'},{c:'710524',n:'北门区'},{c:'710525',n:'新营区'},{c:'710526',n:'后壁区'},{c:'710527',n:'白河区'},{c:'710528',n:'东山区'},{c:'710529',n:'六甲区'},{c:'710530',n:'下营区'},{c:'710531',n:'柳营区'},{c:'710532',n:'盐水区'},{c:'710533',n:'善化区'},{c:'710534',n:'大内区'},{c:'710535',n:'山上区'},{c:'710536',n:'新市区'},{c:'710537',n:'安定区'},{c:'710601',n:'楠梓区'},{c:'710602',n:'左营区'},{c:'710603',n:'鼓山区'},{c:'710604',n:'三民区'},{c:'710605',n:'盐埕区'},{c:'710606',n:'前金区'},{c:'710607',n:'新兴区'},{c:'710608',n:'苓雅区'},{c:'710609',n:'前镇区'},{c:'710610',n:'旗津区'},{c:'710611',n:'小港区'},{c:'710612',n:'凤山区'},{c:'710613',n:'大寮区'},{c:'710614',n:'鸟松区'},{c:'710615',n:'林园区'},{c:'710616',n:'仁武区'},{c:'710617',n:'大树区'},{c:'710618',n:'大社区'},{c:'710619',n:'冈山区'},{c:'710620',n:'路竹区'},{c:'710621',n:'桥头区'},{c:'710622',n:'梓官区'},{c:'710623',n:'弥陀区'},{c:'710624',n:'永安区'},{c:'710625',n:'燕巢区'},{c:'710626',n:'阿莲区'},{c:'710627',n:'茄萣区'},{c:'710628',n:'湖内区'},{c:'710629',n:'旗山区'},{c:'710630',n:'美浓区'},{c:'710631',n:'内门区'},{c:'710632',n:'杉林区'},{c:'710633',n:'甲仙区'},{c:'710634',n:'六龟区'},{c:'710635',n:'茂林区'},{c:'710636',n:'桃源区'},{c:'710637',n:'那玛夏区'},{c:'710701',n:'中正区'},{c:'710702',n:'七堵区'},{c:'710703',n:'暖暖区'},{c:'710704',n:'仁爱区'},{c:'710705',n:'中山区'},{c:'710706',n:'安乐区'},{c:'710707',n:'信义区'},{c:'710801',n:'东区'},{c:'710802',n:'北区'},{c:'710803',n:'香山区'},{c:'710901',n:'东区'},{c:'710902',n:'西区'},{c:'719001',n:'宜兰县'},{c:'719002',n:'新竹县'},{c:'719003',n:'苗栗县'},{c:'719004',n:'彰化县'},{c:'719005',n:'南投县'},{c:'719006',n:'嘉义县'},{c:'719007',n:'云林县'},{c:'719008',n:'屏东县'},{c:'719009',n:'台东县'},{c:'719010',n:'花莲县'},{c:'719011',n:'澎湖县'},{c:'719012',n:'金门县'},{c:'719013',n:'连江县'},{c:'810101',n:'中西区'},{c:'810102',n:'湾仔区'},{c:'810103',n:'东区'},{c:'810104',n:'南区'},{c:'810105',n:'油尖旺区'},{c:'810106',n:'深水埗区'},{c:'810107',n:'九龙城区'},{c:'810108',n:'黄大仙区'},{c:'810109',n:'观塘区'},{c:'810110',n:'北区'},{c:'810111',n:'大埔区'},{c:'810112',n:'沙田区'},{c:'810113',n:'西贡区'},{c:'810114',n:'荃湾区'},{c:'810115',n:'屯门区'},{c:'810116',n:'元朗区'},{c:'810117',n:'葵青区'},{c:'810118',n:'离岛区'},{c:'820101',n:'花地玛堂区'},{c:'820102',n:'圣安多尼堂区'},{c:'820103',n:'大堂区'},{c:'820104',n:'望德堂区'},{c:'820105',n:'风顺堂区'},{c:'820106',n:'嘉模堂区'},{c:'820107',n:'圣方济各堂区'},{c:'820108',n:'路氹城'},{c:'820109',n:'澳门新城'},{c:'4419003',n:'东城街道'},{c:'4419004',n:'南城街道'},{c:'4419005',n:'万江街道'},{c:'4419006',n:'莞城街道'},{c:'4419101',n:'石碣镇'},{c:'4419102',n:'石龙镇'},{c:'4419103',n:'茶山镇'},{c:'4419104',n:'石排镇'},{c:'4419105',n:'企石镇'},{c:'4419106',n:'横沥镇'},{c:'4419107',n:'桥头镇'},{c:'4419108',n:'谢岗镇'},{c:'4419109',n:'东坑镇'},{c:'4419110',n:'常平镇'},{c:'4419111',n:'寮步镇'},{c:'4419112',n:'樟木头镇'},{c:'4419113',n:'大朗镇'},{c:'4419114',n:'黄江镇'},{c:'4419115',n:'清溪镇'},{c:'4419116',n:'塘厦镇'},{c:'4419117',n:'凤岗镇'},{c:'4419118',n:'大岭山镇'},{c:'4419119',n:'长安镇'},{c:'4419121',n:'虎门镇'},{c:'4419122',n:'厚街镇'},{c:'4419123',n:'沙田镇'},{c:'4419124',n:'道滘镇'},{c:'4419125',n:'洪梅镇'},{c:'4419126',n:'麻涌镇'},{c:'4419127',n:'望牛墩镇'},{c:'4419128',n:'中堂镇'},{c:'4419129',n:'高埗镇'},{c:'4419401',n:'松山湖'},{c:'4419402',n:'东莞港'},{c:'4419403',n:'东莞生态园'},{c:'4419404',n:'东莞滨海湾新区'},{c:'4420004',n:'西区街道'},{c:'4420005',n:'南区街道'},{c:'4420006',n:'五桂山街道'},{c:'4420007',n:'民众街道'},{c:'4420008',n:'南朗街道'},{c:'4420101',n:'黄圃镇'},{c:'4420103',n:'东凤镇'},{c:'4420105',n:'古镇镇'},{c:'4420106',n:'沙溪镇'},{c:'4420107',n:'坦洲镇'},{c:'4420108',n:'港口镇'},{c:'4420109',n:'三角镇'},{c:'4420110',n:'横栏镇'},{c:'4420111',n:'南头镇'},{c:'4420112',n:'阜沙镇'},{c:'4420114',n:'三乡镇'},{c:'4420115',n:'板芙镇'},{c:'4420116',n:'大涌镇'},{c:'4420117',n:'神湾镇'},{c:'4420118',n:'小榄镇'},{c:'4604100',n:'那大镇'},{c:'4604101',n:'和庆镇'},{c:'4604102',n:'南丰镇'},{c:'4604103',n:'大成镇'},{c:'4604104',n:'雅星镇'},{c:'4604105',n:'兰洋镇'},{c:'4604106',n:'光村镇'},{c:'4604107',n:'木棠镇'},{c:'4604108',n:'海头镇'},{c:'4604109',n:'峨蔓镇'},{c:'4604111',n:'王五镇'},{c:'4604112',n:'白马井镇'},{c:'4604113',n:'中和镇'},{c:'4604114',n:'排浦镇'},{c:'4604115',n:'东成镇'},{c:'4604116',n:'新州镇'},{c:'4604499',n:'洋浦经济开发区'},{c:'4604500',n:'华南热作学院'},{c:'460321',n:'西沙群岛'},{c:'460322',n:'南沙群岛'},{c:'460323',n:'中沙群岛的岛礁及其海域'}]};
;// ./src/components/Cascade/data/province-city-china.ts
// 省市区数据
const provinceCityChina={Province:province_min,City:[...city_min,...specialProvinceJson.City],Area:[...area_min,...specialProvinceJson.Area]};// 将省市区数据转为通用级联数据
const provinceCityAreaCascadeData=()=>{const items=[];const cityCodes=[];const newProvinceJson=provinceCityChina;newProvinceJson.Area.forEach(currArea=>{const cityCode=currArea.c.slice(0,4);const currCity=newProvinceJson.City.find(cityItem=>cityItem.c.slice(0,4)===cityCode.slice(0,4));const currProvince=newProvinceJson.Province.find(provinceItem=>{return provinceItem.c.slice(0,2)===cityCode.slice(0,2);});if(currProvince){if(currCity){items.push([currProvince?.n,currCity?.n,currArea.n]);if(!cityCodes.includes(currCity.c))cityCodes.push(currCity?.c);}else{items.push([currProvince?.n,currArea.n,currArea.n]);}}});newProvinceJson.City.forEach(cityItem=>{if(!cityCodes.includes(cityItem.c)){const prov=newProvinceJson.Province.find(provinceItem=>provinceItem.c===cityItem.c.slice(0,2));if(prov)items.push([prov.n,cityItem.n,cityItem.n]);}});return items;};
// EXTERNAL MODULE: ./src/components/ResultTextarea/index.tsx
var ResultTextarea = __webpack_require__(92208);
// EXTERNAL MODULE: ./src/components/Space/index.tsx
var Space = __webpack_require__(48593);
;// ./docs-components/Cascade/Cascade.tsx
const App=()=>{const[value,setValue]=(0,react.useState)([]);const onChange=value=>{setValue(value);};// 级联数据格式。二维数组，相当于把用户每个可能的选项都列出来。
// const cascadeDataMock = [
//   ['北京市', '东城区', '东城区'],
//   ['北京市', '西城区', '西城区'],
//   ['北京市', '朝阳区', '朝阳区'],
//   ['北京市', '丰台区', '丰台区'],
//   ['北京市', '石景山区', '石景山区'],
//   ['北京市', '海淀区', '海淀区'],
//   ['北京市', '门头沟区', '门头沟区'],
//   ['北京市', '房山区', '房山区'],
//   ['北京市', '通州区', '通州区'],
//   ['北京市', '顺义区', '顺义区'],
//   ['北京市', '昌平区', '昌平区'],
//   ['北京市', '大兴区', '大兴区'],
//   ['北京市', '怀柔区', '怀柔区'],
//   ['北京市', '平谷区', '平谷区'],
//   ['北京市', '密云区', '密云区'],
//   ['北京市', '延庆区', '延庆区'],
// ];
return/*#__PURE__*/(0,jsx_runtime.jsxs)(Space/* default */.A,{size:100,align:"end",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(components_Cascade,{value:value,level:3,showTextArea:true,placeholders:['请选择省份...','请选择城市...','请选择地区...','请输入详细地址...']// 级联数据
,cascadeData:provinceCityAreaCascadeData()// 对内部的select组件进行配置
,selectOptions:{size:'large'}// 对内部的textarea组件进行配置
,textAreaOptions:{size:'large'},onChange:onChange}),/*#__PURE__*/(0,jsx_runtime.jsx)(ResultTextarea/* default */.A,{value:value})]});};/* harmony default export */ const Cascade_Cascade = (App);

/***/ },

/***/ 92208
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _components_Space__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48593);
/* harmony import */ var _components_Text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31968);
/* harmony import */ var _components_TextArea__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26875);
/* harmony import */ var _utils_toString__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7772);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(86070);
/**
 * @name 结果文本域，用于展示组件返回的值
 */const ResultTextarea=props=>{const{value,...rest}=props;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components_Space__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A,{orientation:"vertical",...rest,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_Text__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,{children:"onChange\u8FD4\u56DE\u7684\u7ED3\u679C"}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_TextArea__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,{className:"w-300px",value:(0,_utils_toString__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(value)})]});};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ResultTextarea);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 79369
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2381);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86070);
/**
 * @name 下拉框
 * @param value 组件的值
 * @param onChange 组件值修改的回调
 * @link 其他参数详见 https://ant.design/components/select-cn/
 */const Select=props=>{const{value,...rest}=props;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(antd__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A,{className:"w-full",value:value,...rest});};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Select);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 48593
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29855);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86070);
/**
 * @name Space 间距
 * @link 其他参数详见 https://ant-design.antgroup.com/components/space-cn
 */const Space=props=>{const{children,...rest}=props;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(antd__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A,{className:"w-full",...rest,children:children});};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Space);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 31968
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15569);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86070);
/**
 * @name 文本展示
 * @link 其他参数详见 https://ant.design/components/typography-cn/#Typography.Text
 */const Text=props=>{const{children,...rest}=props;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(antd__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.Text,{...rest,children:children});};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Text);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 26875
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31986);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86070);
/**
 * @name 多行文本域
 * @param value 组件的值
 * @param onChange 组件值修改的回调
 * @link 其他参数详见 https://ant.design/components/input-cn/#Input.TextArea
 */const TextArea=props=>{const{onChange,...rest}=props;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(antd__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.TextArea,{onChange:e=>onChange?.(e?.target?.value,e),...rest});};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TextArea);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 54856
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// 支持的可返回的数据类型
/**
 * @name getType
 * @description 获取数据类型
 * @param {any} data 需要判断类型的数据
 * @return {string} 返回对应的类型 `Array`、`Boolean`、`Date`、`Error`、`Function`、`Map`、`Null`、`Number`、`RegExp`、`Set`、`String`、`Symbol`、`Undefined`、`Arguments`
 * @example <caption>ts类型</caption>
getType(value:any)
 * @example <caption>demo</caption>
import { getType } from '@zpcscc/utils';

console.log(getType([]));               // 'Array';
console.log(getType(true));             // 'Boolean';
console.log(getType(new Date()));       // 'Date';
console.log(getType(new Error()));      // 'Error';
console.log(getType(()=>{}));           // 'Function';
console.log(getType(new Map()));        // 'Map';
console.log(getType(null));             // 'Null';
console.log(getType(123));              // 'Number';
console.log(getType(/[hello]/g));       // 'RegExp';
console.log(getType(new Set()));        // 'Set';
console.log(getType(Symbol.iterator));  // 'Symbol';
console.log(getType('字符串'));          // 'String';
console.log(getType(undefined));        // 'Undefined';

function () {
  console.log(getType(arguments));      // 'Arguments';
}
 */const getType=data=>{return Object.prototype.toString.call(data).slice(8,-1);};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getType);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 46281
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _getType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(54856);
/**
 * @name isNumber
 * @description 检查“value”是否是有效“Number“;排除 Infinity、-Infinity、MAX_VALUE、MIN_VALUE、NaN、
 * @param {any} value 要判断的值
 * @returns {boolean} 返回布尔值
 * @example <caption>ts类型</caption>
isNumber(value: any);
 * @example <caption>demo</caption>
import { isNumber } from '@zpcscc/utils';

console.log(isNumber()); // false
console.log(isNumber('')); // false
console.log(isNumber(null)); // false
console.log(isNumber(undefined)); // false
console.log(isNumber(void 0)); // false
console.log(isNumber(Number.NaN); // false
console.log(isNumber(Number.POSITIVE_INFINITY); // false
console.log(isNumber(Number.NEGATIVE_INFINITY); // false
console.log(isNumber(1233); // true
console.log(isNumber(1233.345); // true
console.log(isNumber(0); // true
 */const isNumber=value=>{if(Number.isNaN(value)||value===Number.POSITIVE_INFINITY||value===Number.NEGATIVE_INFINITY||value===Number.MAX_VALUE||value===Number.MIN_VALUE){return false;}return typeof value==='number'||(0,_getType__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(value)==='Number';};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isNumber);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 7772
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _getType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(54856);
/**
 * @name toString
 * @description 将各种格式的数据转为string
 * @param {any} data 需要转换的数据
 * @param {object} stringifyArgs 其他参数，用于传入JSON.stringify
 * @returns {string} 转换后的字符串数据
 * @example <caption>ts类型</caption>
toString(data:any, stringifyArgs?:any);
 * @example <caption>demo</caption>
import { toString } from '@zpcscc/utils';

console.log(toString(true)); // 'true'
console.log(toString(null)); // ''
console.log(toString()); // ''
console.log(toString(undefined)); // ''
console.log(toString(0)); // '0'
console.log(toString(-0)); // '-0'
console.log(toString(123)); // '123'
console.log(toString(() => {})); // '()=>{}'
console.log(toString([])); // '[]'
console.log(toString({})); // '{}'
console.log(toString(Symbol(1))); // 'Symbol(1)'

// stringifyArgs参数, 相当于，JSON.stringify([1,2,3], null, 2));
console.log(toString([1,2,3], null, 2));
// `[
//   1,
//   2,
//   3
// ]`

// 部分数据因为赋值给函数时，已被浏览器自动调整，故无法完整原样转为字符串。
console.log(toString(Symbol.iterator)); // 'Symbol(Symbol.iterator)'
console.log(toString(Number.POSITIVE_INFINITY)); // 'Infinity'
console.log(toString(Number.NEGATIVE_INFINITY)); // '-Infinity'
console.log(toString(Number.MIN_VALUE)); // '5e-324'
 */const toString=(data,...stringifyArgs)=>{if(data===null)return'';if(data===undefined)return'';if(typeof data==='string')return data;let str='';if(typeof data==='number'||typeof data==='boolean'){str=`${data}`;}else if((0,_getType__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(data)==='Symbol'){str=data.toString();}else if(Array.isArray(data)||(0,_getType__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(data)==='Object'){str=JSON.stringify(data,...stringifyArgs);}else{str=String(data);}if(`${str}`==='0'&&1/data===Number.NEGATIVE_INFINITY){str='-0';}return str;};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toString);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ }

}]);