(globalThis["webpackChunkwebsite"] = globalThis["webpackChunkwebsite"] || []).push([[504],{

/***/ 33511
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ chat_ChatPage)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/recoil@0.7.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/recoil/es/index.js
var es = __webpack_require__(58003);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__(30758);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/button/index.js
var es_button = __webpack_require__(94784);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/popconfirm/index.js + 2 modules
var popconfirm = __webpack_require__(86957);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/select/index.js + 74 modules
var es_select = __webpack_require__(2381);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@6.3.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/MenuOutlined.js
var MenuOutlined = __webpack_require__(70390);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@6.3.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/PlusOutlined.js
var PlusOutlined = __webpack_require__(63073);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@6.3.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/DeleteOutlined.js
var DeleteOutlined = __webpack_require__(89258);
;// ./src/chat/store/atoms.ts
const STORAGE_KEYS={CONVERSATIONS:'mimo-chat-conversations',SETTINGS:'mimo-chat-settings'};/** LocalStorage effect：自动同步 atom 值到 localStorage */const localStorageEffect=key=>({setSelf,onSet})=>{const saved=localStorage.getItem(key);if(saved!==null){try{setSelf(JSON.parse(saved));}catch{// ignore parse errors
}}onSet((newValue,_oldValue,isReset)=>{if(isReset){localStorage.removeItem(key);}else{localStorage.setItem(key,JSON.stringify(newValue));}});};/** 所有对话记录 */const conversationsAtom=(0,es/* atom */.eU)({key:'chat-conversations',default:[],effects:[localStorageEffect(STORAGE_KEYS.CONVERSATIONS)]});/** 当前活跃对话 ID */const activeConversationIdAtom=(0,es/* atom */.eU)({key:'chat-active-conversation-id',default:null});/** 是否正在流式接收 */const isStreamingAtom=(0,es/* atom */.eU)({key:'chat-is-streaming',default:false});/** 选中的模型 */const selectedModelAtom=(0,es/* atom */.eU)({key:'chat-selected-model',default:'mimo-v2.5'});/** 用户设置（仅模型选择，不含 key 和 url） */const settingsAtom=(0,es/* atom */.eU)({key:'chat-settings',default:{model:'mimo-v2.5'},effects:[localStorageEffect(STORAGE_KEYS.SETTINGS)]});
// EXTERNAL MODULE: ./src/utils/getUuId/index.ts
var getUuId = __webpack_require__(28831);
;// ./src/chat/hooks/useConversation.ts
/** 从用户消息提取标题 */const extractTitle=content=>{const text=typeof content==='string'?content:content.filter(p=>p.type==='text').map(p=>p.text).join('');return text.slice(0,30)||'新对话';};const useConversation=()=>{const[conversations,setConversations]=(0,es/* useRecoilState */.L4)(conversationsAtom);const[activeId,setActiveId]=(0,es/* useRecoilState */.L4)(activeConversationIdAtom);const activeConversation=conversations.find(c=>c.id===activeId)||null;const createConversation=(0,react.useCallback)(model=>{const id=(0,getUuId/* default */.A)(8);const conv={id,title:'新对话',messages:[],model,createdAt:Date.now(),updatedAt:Date.now()};setConversations(prev=>[conv,...prev]);setActiveId(id);return conv;},[setConversations,setActiveId]);const deleteConversation=(0,react.useCallback)(id=>{setConversations(prev=>prev.filter(c=>c.id!==id));if(activeId===id){setActiveId(null);}},[activeId,setConversations,setActiveId]);const addMessage=(0,react.useCallback)((convId,message)=>{setConversations(prev=>prev.map(c=>{if(c.id!==convId){return c;}const updated={...c,messages:[...c.messages,message],updatedAt:Date.now()};if(c.title==='新对话'&&message.role==='user'){updated.title=extractTitle(message.content);}return updated;}));},[setConversations]);const updateMessage=(0,react.useCallback)((convId,msgId,updates)=>{setConversations(prev=>prev.map(c=>{if(c.id!==convId){return c;}return{...c,messages:c.messages.map(m=>m.id===msgId?{...m,...updates}:m),updatedAt:Date.now()};}));},[setConversations]);const appendToMessage=(0,react.useCallback)((convId,msgId,chunk)=>{setConversations(prev=>prev.map(c=>{if(c.id!==convId){return c;}return{...c,messages:c.messages.map(m=>{if(m.id!==msgId){return m;}const prevContent=typeof m.content==='string'?m.content:'';return{...m,content:prevContent+chunk};}),updatedAt:Date.now()};}));},[setConversations]);return{conversations,activeId,activeConversation,setActiveId,createConversation,deleteConversation,addMessage,updateMessage,appendToMessage};};
// EXTERNAL MODULE: ./src/thirdparty/crypto/cryptoAES.ts
var cryptoAES = __webpack_require__(13795);
;// ./src/chat/config.ts
/** 加密存储的 API 配置（不允许用户修改） */const ENCRYPTED_API_KEY='1C18435B86DF9D6E28441F6E726DA75DC4E5B992E78C39477FCF895A72D81ADD30E3157C36AE2E280A4E6194894CDBE2F4779DFA1315402296CB76BE0A372CD9';const CRYPTO_KEY='mimo-chat-sec-key';const API_CONFIG={baseUrl:'https://token-plan-cn.xiaomimimo.com'};/** 模型选项列表 */const MODEL_OPTIONS=[{value:'mimo-v2.5',label:'MiMo V2.5（性价比）'},{value:'mimo-v2.5-pro',label:'MiMo V2.5 Pro（旗舰）'}];/** 获取解密后的 API Key */const getApiKey=()=>cryptoAES/* default */.A.decrypt(ENCRYPTED_API_KEY,CRYPTO_KEY);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(86070);
;// ./src/chat/components/ChatSidebar/index.tsx
const ChatSidebar=()=>{const[conversations]=(0,es/* useRecoilState */.L4)(conversationsAtom);const[activeId,setActiveId]=(0,es/* useRecoilState */.L4)(activeConversationIdAtom);const[settings,setSettings]=(0,es/* useRecoilState */.L4)(settingsAtom);const{deleteConversation}=useConversation();const[mobileOpen,setMobileOpen]=(0,react.useState)(false);const[hoveredId,setHoveredId]=(0,react.useState)(null);const handleNewChat=()=>{setActiveId(null);setMobileOpen(false);};const handleSelect=id=>{setActiveId(id);setMobileOpen(false);};const formatTime=ts=>{const d=new Date(ts);const now=new Date();if(d.toDateString()===now.toDateString()){return d.toLocaleTimeString('zh-CN',{hour:'2-digit',minute:'2-digit'});}return d.toLocaleDateString('zh-CN',{month:'2-digit',day:'2-digit'});};const getBgColor=convId=>{if(convId===activeId){return'var(--ifm-color-emphasis-200)';}if(hoveredId===convId){return'var(--ifm-color-emphasis-100)';}return'transparent';};return/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.A,{icon:/*#__PURE__*/(0,jsx_runtime.jsx)(MenuOutlined/* default */.A,{}),onClick:()=>{setMobileOpen(!mobileOpen);},size:"small",style:{display:'none'},className:"max-md:!flex! fixed left-2 bottom-2 z-99"}),mobileOpen&&/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{position:'fixed',inset:0,top:60,background:'rgba(0,0,0,0.3)',zIndex:99},className:"md:hidden",onClick:()=>{setMobileOpen(false);},onKeyDown:()=>{setMobileOpen(false);},role:"button",tabIndex:0}),/*#__PURE__*/(0,jsx_runtime.jsxs)("aside",{style:{width:280,minWidth:280,display:'flex',flexDirection:'column',borderRight:'1px solid var(--ifm-color-emphasis-300)',background:'var(--ifm-background-surface-color)'},className:"max-md:fixed max-md:left-0 max-md:top-[60px] max-md:bottom-0 max-md:z-100 max-md:transition-transform max-md:duration-300 max-md:-translate-x-full",...(mobileOpen?{'data-mobile-open':''}:{}),children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{padding:16,borderBottom:'1px solid var(--ifm-color-emphasis-200)'},children:/*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.A,{type:"primary",icon:/*#__PURE__*/(0,jsx_runtime.jsx)(PlusOutlined/* default */.A,{}),style:{width:'100%'},onClick:handleNewChat,children:"\u65B0\u5BF9\u8BDD"})}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{flex:1,overflowY:'auto',padding:8},children:conversations.length===0?/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{padding:'24px 0',textAlign:'center',color:'var(--ifm-color-emphasis-500)',fontSize:14},children:"\u6682\u65E0\u5BF9\u8BDD\u8BB0\u5F55"}):conversations.map(conv=>/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{role:"button",tabIndex:0,style:{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'10px 12px',borderRadius:8,cursor:'pointer',marginBottom:2,background:getBgColor(conv.id)},onClick:()=>{handleSelect(conv.id);},onKeyDown:()=>{handleSelect(conv.id);},onMouseEnter:()=>{setHoveredId(conv.id);},onMouseLeave:()=>{setHoveredId(null);},children:[/*#__PURE__*/(0,jsx_runtime.jsx)("span",{style:{flex:1,overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap',fontSize:14,color:'var(--ifm-font-color-base)'},children:conv.title}),/*#__PURE__*/(0,jsx_runtime.jsx)("span",{style:{fontSize:12,color:'var(--ifm-color-emphasis-600)',marginLeft:8,whiteSpace:'nowrap'},children:formatTime(conv.updatedAt)}),/*#__PURE__*/(0,jsx_runtime.jsx)(popconfirm/* default */.A,{title:"\u786E\u5B9A\u5220\u9664\u6B64\u5BF9\u8BDD\uFF1F",onConfirm:()=>{deleteConversation(conv.id);},okText:"\u5220\u9664",cancelText:"\u53D6\u6D88",children:/*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.A,{type:"text",size:"small",icon:/*#__PURE__*/(0,jsx_runtime.jsx)(DeleteOutlined/* default */.A,{}),style:{marginLeft:4,opacity:hoveredId===conv.id?1:0,transition:'opacity 0.15s'},onClick:e=>{e.stopPropagation();}})})]},conv.id))}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{padding:'12px 16px',borderTop:'1px solid var(--ifm-color-emphasis-200)'},children:/*#__PURE__*/(0,jsx_runtime.jsx)(es_select/* default */.A,{value:settings.model,onChange:model=>{setSettings({...settings,model});},options:[...MODEL_OPTIONS],size:"small",style:{width:'100%'}})})]}),mobileOpen&&/*#__PURE__*/(0,jsx_runtime.jsx)("style",{children:`
          @media (max-width: 767.9px) {
            aside[data-mobile-open] { transform: translateX(0) !important; }
          }
        `})]});};/* harmony default export */ const components_ChatSidebar = (ChatSidebar);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/message/index.js + 25 modules
var es_message = __webpack_require__(13186);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@6.3.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/CopyOutlined.js
var CopyOutlined = __webpack_require__(10928);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@6.3.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/UserOutlined.js
var UserOutlined = __webpack_require__(35074);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@6.3.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/RobotOutlined.js
var RobotOutlined = __webpack_require__(96057);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-markdown@10.1.0_@types+react@19.2.17_react@18.3.1/node_modules/react-markdown/lib/index.js + 113 modules
var lib = __webpack_require__(82917);
// EXTERNAL MODULE: ./node_modules/.pnpm/remark-gfm@4.0.1/node_modules/remark-gfm/lib/index.js + 56 modules
var remark_gfm_lib = __webpack_require__(71373);
;// ./src/chat/components/MessageItem/index.tsx
const extractText=content=>{if(typeof content==='string'){return content;}return content.filter(p=>p.type==='text').map(p=>p.text).join('');};/** 代码块：带复制按钮 */const CodeBlock=({className,children})=>{const ref=(0,react.useRef)(null);const isInline=!className;const text=String(children).replace(/\n$/,'');const handleCopy=()=>{navigator.clipboard.writeText(text);es_message/* default */.Ay.success('已复制');};if(isInline){return/*#__PURE__*/(0,jsx_runtime.jsx)("code",{style:{background:'var(--ifm-color-emphasis-100)',padding:'2px 6px',borderRadius:4,fontSize:'0.9em'},children:children});}return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{ref:ref,style:{position:'relative'},children:[/*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.A,{type:"text",size:"small",icon:/*#__PURE__*/(0,jsx_runtime.jsx)(CopyOutlined/* default */.A,{}),onClick:handleCopy,style:{position:'absolute',top:4,right:4,zIndex:1,opacity:0.6}}),/*#__PURE__*/(0,jsx_runtime.jsx)("pre",{style:{background:'var(--ifm-color-emphasis-100)',borderRadius:8,padding:'12px 16px',overflowX:'auto',fontSize:13,margin:'8px 0'},children:/*#__PURE__*/(0,jsx_runtime.jsx)("code",{style:{background:'none',padding:0},children:children})})]});};/** Markdown 渲染组件 */const MarkdownContent=({text})=>/*#__PURE__*/(0,jsx_runtime.jsx)(lib/* Markdown */.oz,{remarkPlugins:[remark_gfm_lib/* default */.A],components:{code:CodeBlock,a:({href,children})=>/*#__PURE__*/(0,jsx_runtime.jsx)("a",{href:href,target:"_blank",rel:"noopener noreferrer",children:children}),table:({children})=>/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{overflowX:'auto',margin:'8px 0'},children:/*#__PURE__*/(0,jsx_runtime.jsx)("table",{style:{borderCollapse:'collapse',width:'100%'},children:children})}),th:({children})=>/*#__PURE__*/(0,jsx_runtime.jsx)("th",{style:{border:'1px solid var(--ifm-color-emphasis-300)',padding:'6px 12px',background:'var(--ifm-color-emphasis-100)',fontWeight:600},children:children}),td:({children})=>/*#__PURE__*/(0,jsx_runtime.jsx)("td",{style:{border:'1px solid var(--ifm-color-emphasis-300)',padding:'6px 12px'},children:children}),ul:({children})=>/*#__PURE__*/(0,jsx_runtime.jsx)("ul",{style:{paddingLeft:20,margin:'4px 0',listStyleType:'disc'},children:children}),ol:({children})=>/*#__PURE__*/(0,jsx_runtime.jsx)("ol",{style:{paddingLeft:20,margin:'4px 0'},children:children}),li:({children})=>/*#__PURE__*/(0,jsx_runtime.jsx)("li",{style:{margin:'2px 0'},children:children}),blockquote:({children})=>/*#__PURE__*/(0,jsx_runtime.jsx)("blockquote",{style:{borderLeft:'3px solid var(--ifm-color-emphasis-300)',paddingLeft:12,margin:'8px 0',color:'var(--ifm-color-emphasis-700)'},children:children}),hr:()=>/*#__PURE__*/(0,jsx_runtime.jsx)("hr",{style:{border:'none',borderTop:'1px solid var(--ifm-color-emphasis-200)',margin:'12px 0'}}),h1:({children})=>/*#__PURE__*/(0,jsx_runtime.jsx)("h1",{style:{fontSize:'1.5em',fontWeight:700,margin:'12px 0 6px'},children:children}),h2:({children})=>/*#__PURE__*/(0,jsx_runtime.jsx)("h2",{style:{fontSize:'1.3em',fontWeight:700,margin:'10px 0 5px'},children:children}),h3:({children})=>/*#__PURE__*/(0,jsx_runtime.jsx)("h3",{style:{fontSize:'1.1em',fontWeight:600,margin:'8px 0 4px'},children:children}),p:({children})=>/*#__PURE__*/(0,jsx_runtime.jsx)("p",{style:{margin:'4px 0',lineHeight:1.7},children:children})},children:text});const MessageItem=({message})=>{const isUser=message.role==='user';const handleCopy=(0,react.useCallback)(()=>{navigator.clipboard.writeText(extractText(message.content));es_message/* default */.Ay.success('已复制');},[message.content]);const renderedContent=(0,react.useMemo)(()=>{if(typeof message.content==='string'){return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"chat-msg-content",children:/*#__PURE__*/(0,jsx_runtime.jsx)(MarkdownContent,{text:message.content})});}return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"chat-msg-content",children:message.content.map((part,index)=>{if(part.type==='text'){return/*#__PURE__*/(0,jsx_runtime.jsx)(MarkdownContent,{text:part.text},index);}if(part.type==='image_url'){return/*#__PURE__*/(0,jsx_runtime.jsx)("img",{src:part.image_url.url,className:"chat-msg-img",alt:"uploaded"},index);}if(part.type==='input_audio'){return/*#__PURE__*/(0,jsx_runtime.jsxs)("audio",{controls:true,className:"mt-2",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("source",{src:`data:audio/${part.input_audio.format};base64,${part.input_audio.data}`}),/*#__PURE__*/(0,jsx_runtime.jsx)("track",{kind:"captions"})]},index);}if(part.type==='video_url'){return/*#__PURE__*/(0,jsx_runtime.jsxs)("video",{controls:true,className:"chat-msg-img max-h-300px",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("source",{src:part.video_url.url}),/*#__PURE__*/(0,jsx_runtime.jsx)("track",{kind:"captions"})]},index);}return null;})});},[message.content]);return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:`group flex gap-4 mb-6 ${isUser?'flex-row-reverse':''}`,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{width:36,height:36,borderRadius:8,display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0,fontSize:16,fontWeight:600,color:'#fff',background:isUser?'var(--ifm-color-primary)':'linear-gradient(135deg, #667eea, #764ba2)'},children:isUser?/*#__PURE__*/(0,jsx_runtime.jsx)(UserOutlined/* default */.A,{}):/*#__PURE__*/(0,jsx_runtime.jsx)(RobotOutlined/* default */.A,{})}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{flex:1,minWidth:0,textAlign:isUser?'right':'left'},children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:{display:'inline-block',textAlign:'left',maxWidth:'100%'},children:[renderedContent,message.error&&/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{color:'var(--ifm-color-danger)',background:'var(--ifm-color-danger-contrast-background)',padding:'8px 12px',borderRadius:8,fontSize:14,marginTop:4},children:message.error}),message.isStreaming&&/*#__PURE__*/(0,jsx_runtime.jsx)("span",{style:{display:'inline-block',width:2,height:'1em',background:'var(--ifm-color-primary)',marginLeft:2,animation:'blink 1s step-end infinite'}}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"mt-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity",style:{justifyContent:isUser?'flex-end':'flex-start'},children:/*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.A,{type:"text",size:"small",icon:/*#__PURE__*/(0,jsx_runtime.jsx)(CopyOutlined/* default */.A,{}),onClick:handleCopy,children:"\u590D\u5236"})})]})})]});};/* harmony default export */ const components_MessageItem = (MessageItem);
;// ./src/chat/components/MessageList/index.tsx
const MessageList=({messages})=>{const bottomRef=(0,react.useRef)(null);(0,react.useEffect)(()=>{bottomRef.current?.scrollIntoView({behavior:'smooth'});},[messages.length,messages.at(-1)?.content]);if(messages.length===0){return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{flex:1,overflowY:'auto',padding:'24px 0'},children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',height:'100%',color:'var(--ifm-color-emphasis-600)',gap:16},children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{fontSize:24,fontWeight:600,color:'var(--ifm-font-color-base)'},children:"MiMo AI Assistant"}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{fontSize:15,maxWidth:400,textAlign:'center',lineHeight:1.6},children:"\u57FA\u4E8E\u5C0F\u7C73 MiMo V2.5 \u5168\u6A21\u6001\u5927\u6A21\u578B\uFF0C\u652F\u6301\u6587\u672C\u3001\u56FE\u7247\u3001\u97F3\u9891\u3001\u89C6\u9891\u591A\u6A21\u6001\u5BF9\u8BDD\u3002"})]})});}return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{flex:1,overflowY:'auto',padding:'24px 0'},children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:{maxWidth:800,margin:'0 auto',padding:'0 24px'},children:[messages.map(msg=>/*#__PURE__*/(0,jsx_runtime.jsx)(components_MessageItem,{message:msg},msg.id)),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{ref:bottomRef})]})});};/* harmony default export */ const components_MessageList = (MessageList);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@6.3.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/StopOutlined.js
var StopOutlined = __webpack_require__(76489);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@6.3.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/SendOutlined.js
var SendOutlined = __webpack_require__(30667);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@6.3.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/PictureOutlined.js
var PictureOutlined = __webpack_require__(54935);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@6.3.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/VideoCameraOutlined.js
var VideoCameraOutlined = __webpack_require__(18733);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@6.3.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/AudioOutlined.js
var AudioOutlined = __webpack_require__(20223);
;// ./src/chat/utils/fileEncoder.ts
/** 文件转 base64 data URL */const fileToBase64=file=>new Promise((resolve,reject)=>{const reader=new FileReader();reader.addEventListener('load',()=>{resolve(reader.result);});reader.addEventListener('error',reject);reader.readAsDataURL(file);});/** 压缩图片，返回 base64 data URL */const compressImage=(file,maxWidth=1024,quality=0.8)=>new Promise((resolve,reject)=>{const img=new Image();const url=URL.createObjectURL(file);img.addEventListener('load',()=>{URL.revokeObjectURL(url);let{width,height}=img;if(width>maxWidth){height=height*maxWidth/width;width=maxWidth;}const canvas=document.createElement('canvas');canvas.width=width;canvas.height=height;const ctx=canvas.getContext('2d');if(!ctx){reject(new Error('无法创建 canvas context'));return;}ctx.drawImage(img,0,0,width,height);resolve(canvas.toDataURL('image/jpeg',quality));});img.addEventListener('error',()=>{URL.revokeObjectURL(url);reject(new Error('图片加载失败'));});img.src=url;});/** 视频截取首帧作为预览 */const videoThumbnail=file=>new Promise((resolve,reject)=>{const video=document.createElement('video');const url=URL.createObjectURL(file);video.addEventListener('loadeddata',()=>{video.currentTime=0.1;});video.addEventListener('seeked',()=>{const canvas=document.createElement('canvas');canvas.width=video.videoWidth;canvas.height=video.videoHeight;const ctx=canvas.getContext('2d');if(!ctx){URL.revokeObjectURL(url);reject(new Error('无法创建 canvas context'));return;}ctx.drawImage(video,0,0);URL.revokeObjectURL(url);resolve(canvas.toDataURL('image/jpeg',0.6));});video.addEventListener('error',()=>{URL.revokeObjectURL(url);reject(new Error('视频加载失败'));});video.src=url;});/** 获取文件类型分类 */const getFileCategory=file=>{if(file.type.startsWith('image/')){return'image';}if(file.type.startsWith('video/')){return'video';}if(file.type.startsWith('audio/')){return'audio';}return null;};
;// ./src/chat/hooks/useFileUpload.ts
const useFileUpload=()=>{const[attachments,setAttachments]=(0,react.useState)([]);const[processing,setProcessing]=(0,react.useState)(false);const addFiles=(0,react.useCallback)(async files=>{setProcessing(true);const newAttachments=[];for(const file of files){const category=getFileCategory(file);if(!category){continue;}try{let previewUrl;let base64;if(category==='image'){base64=await compressImage(file);previewUrl=base64;}else if(category==='video'){previewUrl=await videoThumbnail(file);base64=await fileToBase64(file);}else{base64=await fileToBase64(file);previewUrl='';}newAttachments.push({id:(0,getUuId/* default */.A)(8),file,type:category,previewUrl,base64});}catch(error){console.error('文件处理失败:',file.name,error);}}setAttachments(prev=>[...prev,...newAttachments]);setProcessing(false);return newAttachments;},[]);const removeAttachment=(0,react.useCallback)(id=>{setAttachments(prev=>prev.filter(a=>a.id!==id));},[]);const clearAttachments=(0,react.useCallback)(()=>{setAttachments([]);},[]);return{attachments,addFiles,removeAttachment,clearAttachments,processing};};
;// ./src/chat/hooks/useAudioRecorder.ts
const useAudioRecorder=()=>{const[state,setState]=(0,react.useState)('idle');const recorderRef=(0,react.useRef)(null);const streamRef=(0,react.useRef)(null);const chunksRef=(0,react.useRef)([]);const startRecording=(0,react.useCallback)(async()=>{const stream=await navigator.mediaDevices.getUserMedia({audio:true});streamRef.current=stream;const mimeType=MediaRecorder.isTypeSupported('audio/webm;codecs=opus')?'audio/webm;codecs=opus':'audio/webm';const recorder=new MediaRecorder(stream,{mimeType});chunksRef.current=[];recorder.ondataavailable=e=>{if(e.data.size>0){chunksRef.current.push(e.data);}};recorderRef.current=recorder;recorder.start();setState('recording');},[]);const stopRecording=(0,react.useCallback)(()=>{return new Promise((resolve,reject)=>{const recorder=recorderRef.current;if(!recorder||recorder.state==='inactive'){reject(new Error('录音未在进行中'));return;}setState('processing');recorder.onstop=async()=>{streamRef.current?.getTracks().forEach(t=>{t.stop();});streamRef.current=null;recorderRef.current=null;const blob=new Blob(chunksRef.current,{type:recorder.mimeType});const file=new File([blob],'recording.webm',{type:recorder.mimeType});try{const base64=await fileToBase64(file);const attachment={id:(0,getUuId/* default */.A)(8),file,type:'audio',previewUrl:'',base64};setState('idle');resolve(attachment);}catch(error){setState('idle');reject(error);}};recorder.stop();});},[]);const cancelRecording=(0,react.useCallback)(()=>{recorderRef.current?.stop();streamRef.current?.getTracks().forEach(t=>{t.stop();});streamRef.current=null;recorderRef.current=null;setState('idle');},[]);return{recordingState:state,startRecording,stopRecording,cancelRecording};};
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@6.3.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/CloseOutlined.js
var CloseOutlined = __webpack_require__(78613);
;// ./src/chat/components/FilePreview/index.tsx
const FilePreview=({attachments,onRemove})=>{if(attachments.length===0){return null;}return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{display:'flex',gap:8,padding:'8px 0',overflowX:'auto'},children:attachments.map(att=>/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:{position:'relative',width:64,height:64,borderRadius:8,overflow:'hidden',border:'1px solid var(--ifm-color-emphasis-300)'},children:[att.type==='image'&&/*#__PURE__*/(0,jsx_runtime.jsx)("img",{src:att.previewUrl,alt:"\u9884\u89C8",style:{width:'100%',height:'100%',objectFit:'cover'}}),att.type==='video'&&/*#__PURE__*/(0,jsx_runtime.jsx)("video",{src:att.previewUrl,muted:true,style:{width:'100%',height:'100%',objectFit:'cover'}}),att.type==='audio'&&/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{display:'flex',alignItems:'center',justifyContent:'center',height:'100%',fontSize:24,background:'var(--ifm-color-emphasis-100)'},children:"\uD83C\uDFB5"}),/*#__PURE__*/(0,jsx_runtime.jsx)("button",{type:"button",style:{position:'absolute',top:2,right:2,width:18,height:18,borderRadius:'50%',background:'rgba(0,0,0,0.6)',color:'#fff',display:'flex',alignItems:'center',justifyContent:'center',cursor:'pointer',fontSize:12,border:'none',padding:0,lineHeight:1},onClick:()=>{onRemove(att.id);},children:/*#__PURE__*/(0,jsx_runtime.jsx)(CloseOutlined/* default */.A,{style:{fontSize:10}})})]},att.id))});};/* harmony default export */ const components_FilePreview = (FilePreview);
;// ./src/chat/components/ChatInput/index.tsx
const ChatInput=({onSend,isStreaming,onStop,disabled})=>{const textareaRef=(0,react.useRef)(null);const fileInputRef=(0,react.useRef)(null);const videoInputRef=(0,react.useRef)(null);const textRef=(0,react.useRef)('');const[hasContent,setHasContent]=(0,react.useState)(false);const{attachments,addFiles,removeAttachment,clearAttachments}=useFileUpload();const{recordingState,startRecording,stopRecording}=useAudioRecorder();const isRecording=recordingState==='recording';const adjustHeight=(0,react.useCallback)(()=>{const el=textareaRef.current;if(el){el.style.height='auto';el.style.height=`${Math.min(el.scrollHeight,200)}px`;}},[]);const handleSend=(0,react.useCallback)(()=>{const trimmed=textRef.current.trim();if(!trimmed&&attachments.length===0){return;}if(disabled||isStreaming){return;}onSend(trimmed,attachments);textRef.current='';if(textareaRef.current){textareaRef.current.value='';textareaRef.current.style.height='auto';}clearAttachments();},[attachments,disabled,isStreaming,onSend,clearAttachments]);const handleKeyDown=e=>{if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();handleSend();}};const handleFileSelect=async e=>{const{files}=e.target;if(!files){return;}const inputEl=e.target;await addFiles(files);inputEl.value='';};const handleToggleRecording=async()=>{if(isRecording){try{await stopRecording();}catch(error){es_message/* default */.Ay.error(error instanceof Error?error.message:'录音失败');}return;}try{await startRecording();}catch{es_message/* default */.Ay.error('无法访问麦克风，请检查权限设置');}};return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{padding:'16px 24px 24px',borderTop:'1px solid var(--ifm-color-emphasis-200)'},children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:{maxWidth:800,margin:'0 auto'},children:[/*#__PURE__*/(0,jsx_runtime.jsx)(components_FilePreview,{attachments:attachments,onRemove:removeAttachment}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:{display:'flex',alignItems:'flex-end',gap:8,border:'1px solid var(--ifm-color-emphasis-300)',borderRadius:12,padding:12,background:'var(--ifm-background-surface-color)',transition:'border-color 0.2s'},onFocus:e=>{e.currentTarget.style.borderColor='var(--ifm-color-primary)';},onBlur:e=>{e.currentTarget.style.borderColor='var(--ifm-color-emphasis-300)';},children:[/*#__PURE__*/(0,jsx_runtime.jsx)("textarea",{ref:textareaRef,style:{flex:1,border:'none',outline:'none',resize:'none',fontSize:15,lineHeight:1.5,maxHeight:200,minHeight:24,fontFamily:'inherit',background:'transparent',color:'var(--ifm-font-color-base)'},defaultValue:"",onChange:e=>{textRef.current=e.target.value;setHasContent(textRef.current.trim().length>0||attachments.length>0);adjustHeight();},onKeyDown:handleKeyDown,placeholder:"\u8F93\u5165\u6D88\u606F... (Enter \u53D1\u9001\uFF0CShift+Enter \u6362\u884C)",rows:1,disabled:disabled}),isStreaming?/*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.A,{type:"primary",danger:true,icon:/*#__PURE__*/(0,jsx_runtime.jsx)(StopOutlined/* default */.A,{}),onClick:onStop,style:{flexShrink:0},children:"\u505C\u6B62"}):/*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.A,{type:"primary",icon:/*#__PURE__*/(0,jsx_runtime.jsx)(SendOutlined/* default */.A,{}),onClick:handleSend,disabled:disabled||!hasContent,style:{flexShrink:0},children:"\u53D1\u9001"})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:{display:'flex',gap:4,paddingTop:8},children:[/*#__PURE__*/(0,jsx_runtime.jsx)("input",{ref:fileInputRef,type:"file",accept:"image/*",multiple:true,hidden:true,onChange:handleFileSelect}),/*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.A,{type:"text",size:"small",icon:/*#__PURE__*/(0,jsx_runtime.jsx)(PictureOutlined/* default */.A,{}),onClick:()=>{fileInputRef.current?.click();},title:"\u4E0A\u4F20\u56FE\u7247"}),/*#__PURE__*/(0,jsx_runtime.jsx)("input",{ref:videoInputRef,type:"file",accept:"video/*",hidden:true,onChange:handleFileSelect}),/*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.A,{type:"text",size:"small",icon:/*#__PURE__*/(0,jsx_runtime.jsx)(VideoCameraOutlined/* default */.A,{}),onClick:()=>{videoInputRef.current?.click();},title:"\u4E0A\u4F20\u89C6\u9891"}),/*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.A,{type:"text",size:"small",icon:/*#__PURE__*/(0,jsx_runtime.jsx)(AudioOutlined/* default */.A,{}),onClick:handleToggleRecording,danger:isRecording,title:isRecording?'停止录音':'录音'})]}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{fontSize:12,color:'var(--ifm-color-emphasis-500)',textAlign:'center',paddingTop:8},children:"\u57FA\u4E8E MiMo V2.5 \u5168\u6A21\u6001\u5927\u6A21\u578B\uFF0C\u652F\u6301\u6587\u672C\u3001\u56FE\u7247\u3001\u97F3\u9891\u3001\u89C6\u9891\u8F93\u5165"})]})});};/* harmony default export */ const components_ChatInput = (ChatInput);
;// ./src/chat/services/mimoApi.ts
/** 获取实际的 API 基础 URL（开发模式下自动使用代理） */const resolveBaseUrl=configuredBaseUrl=>{if(globalThis.window!==undefined){const isDev=globalThis.window.location.hostname==='localhost';const isDefaultUrl=configuredBaseUrl.includes('xiaomimimo.com');if(isDev&&isDefaultUrl){return'/api/mimo';}}return configuredBaseUrl;};/**
 * 调用 MiMo API 进行流式聊天补全
 * 使用 native fetch + ReadableStream 支持 SSE
 */const createChatCompletion=async(config,messages,signal,onChunk)=>{const{apiKey,model,baseUrl:configuredBaseUrl}=config;const baseUrl=resolveBaseUrl(configuredBaseUrl);const body={model,messages,stream:true};const response=await fetch(`${baseUrl}/v1/chat/completions`,{method:'POST',headers:{'Content-Type':'application/json',Authorization:`Bearer ${apiKey}`},body:JSON.stringify(body),signal});if(!response.ok){const errorText=await response.text().catch(()=>'');throw new Error(`API 请求失败 (${response.status}): ${errorText||response.statusText}`);}if(!response.body){throw new Error('响应体为空，浏览器可能不支持 ReadableStream');}const reader=response.body.getReader();const decoder=new TextDecoder();let fullText='';let buffer='';try{while(true){const{done,value}=await reader.read();if(done){break;}buffer+=decoder.decode(value,{stream:true});const lines=buffer.split('\n');buffer=lines.pop()||'';for(const line of lines){const trimmed=line.trim();if(!trimmed||!trimmed.startsWith('data: ')){continue;}const data=trimmed.slice(6);if(data==='[DONE]'){continue;}try{const parsed=JSON.parse(data);const content=parsed.choices?.[0]?.delta?.content;if(content){fullText+=content;onChunk?.(content);}}catch{// 跳过解析失败的行
}}}}catch(error){if(error instanceof DOMException&&error.name==='AbortError'){return fullText;}throw error;}return fullText;};
;// ./src/chat/hooks/useChat.ts
/** 将附件转为 ContentPart[] */const attachmentsToParts=attachments=>attachments.map(att=>{if(att.type==='image'&&att.base64){return{type:'image_url',image_url:{url:att.base64}};}if(att.type==='audio'&&att.base64){const base64Data=att.base64.split(',',2)[1]||att.base64;return{type:'input_audio',input_audio:{data:base64Data,format:'webm'}};}if(att.type==='video'&&att.base64){return{type:'video_url',video_url:{url:att.base64}};}return{type:'text',text:`[${att.type} 附件]`};});const useChat=()=>{const[isStreaming,setIsStreaming]=(0,es/* useRecoilState */.L4)(isStreamingAtom);const settings=(0,es/* useRecoilValue */.vc)(settingsAtom);const controllerRef=(0,react.useRef)(null);const{activeConversation,activeId,createConversation,addMessage,updateMessage,appendToMessage}=useConversation();const messages=activeConversation?.messages||[];const sendMessage=(0,react.useCallback)(async(text,attachments)=>{const parts=[];if(text){parts.push({type:'text',text});}parts.push(...attachmentsToParts(attachments));const userMessage={id:(0,getUuId/* default */.A)(8),role:'user',content:parts.length===1&&parts[0].type==='text'?parts[0].text:parts,timestamp:Date.now()};const assistantMessage={id:(0,getUuId/* default */.A)(8),role:'assistant',content:'',timestamp:Date.now(),isStreaming:true};let convId=activeId;if(!convId){const conv=createConversation(settings.model);convId=conv.id;}addMessage(convId,userMessage);addMessage(convId,assistantMessage);setIsStreaming(true);const currentConv=activeConversation;const prevMessages=currentConv?.messages||[];const allMessages=[...prevMessages,userMessage];const apiMessages=allMessages.map(m=>({role:m.role,content:m.content}));const controller=new AbortController();controllerRef.current=controller;try{const result=await createChatCompletion({apiKey:getApiKey(),model:settings.model,baseUrl:API_CONFIG.baseUrl},apiMessages,controller.signal,chunk=>{appendToMessage(convId,assistantMessage.id,chunk);});updateMessage(convId,assistantMessage.id,{content:result,isStreaming:false});}catch(error){if(error instanceof DOMException&&error.name==='AbortError'){updateMessage(convId,assistantMessage.id,{isStreaming:false});}else{updateMessage(convId,assistantMessage.id,{content:'',isStreaming:false,error:error instanceof Error?error.message:'请求失败'});}}finally{setIsStreaming(false);controllerRef.current=null;}},[activeId,activeConversation,settings,addMessage,appendToMessage,createConversation,setIsStreaming,updateMessage]);const stopGeneration=(0,react.useCallback)(()=>{controllerRef.current?.abort();setIsStreaming(false);},[setIsStreaming]);return{messages,isStreaming,sendMessage,stopGeneration};};
;// ./src/chat/components/ChatArea/index.tsx
const ChatArea=()=>{const{messages,isStreaming,sendMessage,stopGeneration}=useChat();const handleSend=async(text,attachments)=>{try{await sendMessage(text,attachments);}catch(error){if(error instanceof Error){alert(error.message);}}};return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:{flex:1,display:'flex',flexDirection:'column',minWidth:0,background:'var(--ifm-background-color)'},children:[/*#__PURE__*/(0,jsx_runtime.jsx)(components_MessageList,{messages:messages}),/*#__PURE__*/(0,jsx_runtime.jsx)(components_ChatInput,{onSend:handleSend,isStreaming:isStreaming,onStop:stopGeneration})]});};/* harmony default export */ const components_ChatArea = (ChatArea);
;// ./src/chat/ChatPage.tsx
const ChatPage=()=>{return/*#__PURE__*/(0,jsx_runtime.jsx)(es/* RecoilRoot */.bi,{children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"flex h-[calc(100vh-60px)] overflow-hidden",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(components_ChatSidebar,{}),/*#__PURE__*/(0,jsx_runtime.jsx)(components_ChatArea,{})]})});};/* harmony default export */ const chat_ChatPage = (ChatPage);

/***/ },

/***/ 45999
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _docusaurus_BrowserOnly__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44140);
/* harmony import */ var _theme_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63689);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(86070);
const ChatRoute=()=>{return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_theme_Layout__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,{title:"AI Chat",noFooter:true,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_docusaurus_BrowserOnly__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A,{fallback:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{style:{padding:16,textAlign:'center'},children:"\u52A0\u8F7D\u4E2D..."}),children:()=>{const{default:ChatPage}=__webpack_require__(33511);return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(ChatPage,{});}})});};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChatRoute);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "default", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 13795
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _utils_toData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25621);
/* harmony import */ var _utils_toString__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7772);
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15921);
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_2__);
const{Base64,Hex,Utf8}=crypto_js__WEBPACK_IMPORTED_MODULE_2__.enc;// 处理密钥,确保是16位字符串
const keyHandler=key=>`${key}`.slice(0,16).padEnd(16);const defaultCfg={iv:'0000000000000000',mode:'CBC',padding:'Pkcs7'};// 处理配置
const formatCfg=aesCfg=>{const config={...defaultCfg,...aesCfg};return{iv:Utf8.parse(keyHandler(config.iv)),mode:crypto_js__WEBPACK_IMPORTED_MODULE_2__.mode[config.mode],padding:crypto_js__WEBPACK_IMPORTED_MODULE_2__.pad[config.padding]};};/**
 * @name AES加密
 * @param {any} data 需要加密的数据
 * @param {string} key 密钥
 * @param {AESConfigType} AEScfg AES配置
 * @returns {string} 加密后的数据
 */const encrypt=(data,key,AEScfg)=>{const dataStr=(0,_utils_toString__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(data);const utf8Data=Utf8.parse(dataStr);const utf8Key=Utf8.parse(keyHandler(key));const config=formatCfg(AEScfg);const encryptedDS=crypto_js__WEBPACK_IMPORTED_MODULE_2__.AES.encrypt(utf8Data,utf8Key,config);return encryptedDS.ciphertext.toString().toUpperCase();};/**
 * @name AES解密
 * @param {any} data 需要解密的数据
 * @param {string} key 密钥
 * @param {AESConfigType} AEScfg AES配置
 * @returns {string} 解密后的数据
 */const decrypt=(data,key,AEScfg)=>{const base64Data=Base64.stringify(Hex.parse(data));const utf8Key=Utf8.parse(keyHandler(key));const config=formatCfg(AEScfg);const decryptedDS=crypto_js__WEBPACK_IMPORTED_MODULE_2__.AES.decrypt(base64Data,utf8Key,config);const decryptedStr=decryptedDS.toString(Utf8);return (0,_utils_toData__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(decryptedStr);};const cryptoAES={encrypt,decrypt};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cryptoAES);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 54856
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/***/ 28831
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _getType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(54856);
// 生成4个随机字符串
const s4=()=>{return Math.floor((1+Math.random())*0x10000).toString(16).slice(1);};/**
 * @name getUuId
 * @description 生成全局唯一ID
 * @param {number} length=4 随机id的长度，不包含自定义前缀
 * @param {string} prefix='' 指定id的前缀
 * @returns {string} 返回一个唯一ID
 * @example <caption>ts类型</caption>
getUuId(prefix?:string);
 * @example <caption>demo</caption>
import { getUuId } from '@zpcscc/utils';

console.log(getUuId()); //  '32f4';
console.log(getUuId(2)); //  'b0';
console.log(getUuId(6)); //  '3e964a';
console.log(getUuId(2,'test_')); //  'test_db';
console.log(getUuId(5,'test_')); //  'test_7ad22';
 */const getUuId=(length,prefix='')=>{let len=length||4;if(!((0,_getType__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(length)==='Number'))len=4;let count=Math.ceil(len/4);if(!length)return s4();let id='';while(count--){id=id+s4();}return`${prefix}${id.slice(0,len)}`;};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getUuId);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 25621
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * @name toData
 * @description 将string转为json等数据
 * @param {string} str 需要转换的字符串
 * @param {Object} parseArgs 其他参数，用于传入JSON.parse
 * @returns {any} 返回对应格式的数据
 * @example <caption>ts类型</caption>
toData(str:string, parseArgs?:any);
 * @example <caption>demo</caption>
import { toData } from '@zpcscc/utils';

console.log(toData('1')); // 1
console.log(toData('true')); // true
console.log(toData('{}')); // {}
console.log(toData('[]')); // []
console.log(toData('null')); // null
console.log(toData('undefined')); // undefined
 */// 字符串类型的数据转成真正对应格式的数据
const toData=(str,...parseArgs)=>{if(typeof str!=='string')return str;if(str==='')return'';if(str==='true')return true;if(str==='false')return false;const value=Number(str);if(!Number.isNaN(value))return value;try{return JSON.parse(str,...parseArgs);}catch{return str;}};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toData);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 7772
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
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


/***/ },

/***/ 73936
() {

/* (ignored) */

/***/ }

}]);