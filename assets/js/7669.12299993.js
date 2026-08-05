(globalThis["webpackChunkwebsite"] ||= []).push([[7669],{

/***/ 47669
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ demo_GoBang)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js
var classnames = __webpack_require__(97500);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@19.2.8/node_modules/react/index.js
var react = __webpack_require__(71763);
;// ./src/demo/GoBang/utils.ts
// 初始化棋盘
const initBoard=(ctx,canvas,boardSize,cellSize)=>{ctx.fillStyle='#f8f1e5';ctx.fillRect(0,0,canvas.width,canvas.height);// 绘制网格线
ctx.strokeStyle='#34495e';ctx.lineWidth=1;for(let i=0;i<boardSize;i++){// 横线
ctx.beginPath();ctx.moveTo(cellSize/2,i*cellSize+cellSize/2);ctx.lineTo(canvas.width-cellSize/2,i*cellSize+cellSize/2);ctx.stroke();// 竖线
ctx.beginPath();ctx.moveTo(i*cellSize+cellSize/2,cellSize/2);ctx.lineTo(i*cellSize+cellSize/2,canvas.height-cellSize/2);ctx.stroke();}// 绘制五个星位点
const starPoints=[3,7,11];ctx.fillStyle='#34495e';for(const i of starPoints){for(const j of starPoints){ctx.beginPath();ctx.arc(i*cellSize+cellSize/2,j*cellSize+cellSize/2,cellSize/8,0,Math.PI*2);ctx.fill();}}};// 绘制棋子
const drawPiece=(x,y,player,ctx,cellSize)=>{const centerX=x*cellSize+cellSize/2;const centerY=y*cellSize+cellSize/2;const radius=cellSize/2-2;// 棋子阴影
ctx.shadowColor='rgba(0, 0, 0, 0.3)';ctx.shadowBlur=5;ctx.shadowOffsetY=2;// 棋子渐变
const gradient=ctx.createRadialGradient(centerX-radius/3,centerY-radius/3,radius/4,centerX,centerY,radius);if(player===1){// 黑棋
gradient.addColorStop(0,'#2c3e50');gradient.addColorStop(1,'#000000');}else{// 白棋
gradient.addColorStop(0,'#ffffff');gradient.addColorStop(1,'#bdc3c7');}ctx.fillStyle=gradient;ctx.beginPath();ctx.arc(centerX,centerY,radius,0,Math.PI*2);ctx.fill();// 清除阴影
ctx.shadowColor='transparent';// 棋子高光
if(player===1){ctx.fillStyle='rgba(255, 255, 255, 0.2)';ctx.beginPath();ctx.arc(centerX-radius/3,centerY-radius/3,radius/4,0,Math.PI*2);ctx.fill();}};// 中等AI策略
const getMediumAIMove=(boardSize,board)=>{// 简化版: 优先选择靠近已有棋子的位置
const emptyCells=[];for(let i=0;i<boardSize;i++){for(let j=0;j<boardSize;j++){if(board[i][j]===0){// 检查周围是否有棋子
let score=0;for(let di=-1;di<=1;di++){for(let dj=-1;dj<=1;dj++){if(di===0&&dj===0)continue;const ni=i+di;const nj=j+dj;if(ni>=0&&ni<boardSize&&nj>=0&&nj<boardSize&&board[ni][nj]!==0){score++;}}}emptyCells.push({x:i,y:j,score});}}}// 按分数排序
emptyCells.sort((a,b)=>b.score-a.score);// 从高分中随机选择一个
const maxScore=emptyCells[0].score;const candidates=emptyCells.filter(cell=>cell.score===maxScore);return candidates[Math.floor(Math.random()*candidates.length)];};// 困难AI策略
const getHardAIMove=(boardSize,board)=>{// 简化版: 尝试连四或阻止对手连四
const emptyCells=[];for(let i=0;i<boardSize;i++){for(let j=0;j<boardSize;j++){if(board[i][j]===0){// 评估这个位置的价值
let score=evaluatePosition(i,j,2,boardSize,board);// AI是白棋(2)
score+=evaluatePosition(i,j,1,boardSize,board)*0.8;// 也要考虑黑棋的威胁
emptyCells.push({x:i,y:j,score});}}}// 按分数排序
emptyCells.sort((a,b)=>b.score-a.score);// 从高分中随机选择一个
const maxScore=emptyCells[0].score;const candidates=emptyCells.filter(cell=>cell.score===maxScore);return candidates[Math.floor(Math.random()*candidates.length)];};// AI走棋
const aiMove=params=>{const{gameActive,aiDifficulty,currentPlayer,boardSize,board,cellSize,handleCanvasClick}=params;if(!gameActive||currentPlayer!==2)return;// 简化版AI: 随机选择空位
const emptyCells=[];for(let i=0;i<boardSize;i++){for(let j=0;j<boardSize;j++){if(board[i][j]===0){emptyCells.push({x:i,y:j});}}}if(emptyCells.length>0){// 根据难度调整AI策略
let selectedCell;if(aiDifficulty==='easy'){// 简单AI: 完全随机
selectedCell=emptyCells[Math.floor(Math.random()*emptyCells.length)];}else if(aiDifficulty==='medium'){// 中等AI: 有一定策略
selectedCell=getMediumAIMove(boardSize,board);}else{// 困难AI: 更智能的策略
selectedCell=getHardAIMove(boardSize,board);}// 模拟点击
setTimeout(()=>{const event={offsetX:selectedCell.x*cellSize+cellSize/2,offsetY:selectedCell.y*cellSize+cellSize/2};handleCanvasClick(event);},300);}};// 评估位置价值
const evaluatePosition=(x,y,player,boardSize,board)=>{const directions=[[1,0],[0,1],[1,1],[1,-1]];let totalScore=0;for(const[dx,dy]of directions){let score=0;let count=1;// 当前位置假设已经下子
let openEnds=0;// 正向检查
for(let i=1;i<5;i++){const nx=x+dx*i;const ny=y+dy*i;if(nx<0||nx>=boardSize||ny<0||ny>=boardSize){break;}if(board[nx][ny]===player){count++;}else if(board[nx][ny]===0){openEnds++;break;}else{break;}}// 反向检查
for(let i=1;i<5;i++){const nx=x-dx*i;const ny=y-dy*i;if(nx<0||nx>=boardSize||ny<0||ny>=boardSize){break;}if(board[nx][ny]===player){count++;}else if(board[nx][ny]===0){openEnds++;break;}else{break;}}// 根据连子数和开放端评估分数
if(count>=5){score+=100000;// 五连
}else{switch(count){case 4:{if(openEnds===2){score+=10000;// 活四
}else if(openEnds===1){score+=1000;// 冲四
}break;}case 3:{if(openEnds===2){score+=500;// 活三
}else if(openEnds===1){score+=100;// 眠三
}break;}case 2:{if(openEnds===2){score+=50;// 活二
}else if(openEnds===1){score+=10;// 眠二
}break;}// No default
}}totalScore+=score;}return totalScore;};// 检查胜利条件
const checkWin=(x,y,boardSize,board)=>{const directions=[[1,0],// 水平
[0,1],// 垂直
[1,1],// 对角线
[1,-1]// 反对角线
];const player=board[x][y];for(const[dx,dy]of directions){let count=1;// 正向检查
for(let i=1;i<5;i++){const nx=x+dx*i;const ny=y+dy*i;if(nx<0||nx>=boardSize||ny<0||ny>=boardSize||board[nx][ny]!==player){break;}count++;}// 反向检查
for(let i=1;i<5;i++){const nx=x-dx*i;const ny=y-dy*i;if(nx<0||nx>=boardSize||ny<0||ny>=boardSize||board[nx][ny]!==player){break;}count++;}if(count>=5){return true;}}return false;};// 检查禁手 (专业规则)
const checkForbidden=(x,y,boardSize,board,gameRule,currentPlayer)=>{if(gameRule!=='pro'||currentPlayer!==1)return false;// 这里实现禁手规则检查
// 简化版: 只检查长连禁手
const directions=[[1,0],[0,1],[1,1],[1,-1]];for(const[dx,dy]of directions){let count=1;// 正向检查
for(let i=1;i<6;i++){const nx=x+dx*i;const ny=y+dy*i;if(nx<0||nx>=boardSize||ny<0||ny>=boardSize||board[nx][ny]!==1){break;}count++;}// 反向检查
for(let i=1;i<6;i++){const nx=x-dx*i;const ny=y-dy*i;if(nx<0||nx>=boardSize||ny<0||ny>=boardSize||board[nx][ny]!==1){break;}count++;}if(count>5){return true;// 长连禁手
}}return false;};
// EXTERNAL MODULE: ./node_modules/.pnpm/react@19.2.8/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(91987);
;// ./src/demo/GoBang/index.tsx
const boardSize=15;let timerInterval=null;const GoBang=()=>{const canvasRef=(0,react.useRef)(null);const currentPlayerRef=(0,react.useRef)(1);const[currentPlayerText,setCurrentPlayerText]=(0,react.useState)('黑方');const[ctx,setCtx]=(0,react.useState)(null);const[cellSize,setCellSize]=(0,react.useState)(0);const[board,setBoard]=(0,react.useState)([]);const[gameActive,setGameActive]=(0,react.useState)(false);const[gameMode,setGameMode]=(0,react.useState)('pve');const[gameRule,setGameRule]=(0,react.useState)('standard');const[aiDifficulty,setAIDifficulty]=(0,react.useState)('medium');const[moveCount,setMoveCount]=(0,react.useState)(0);const[gameStartTime,setGameStartTime]=(0,react.useState)(0);const[gameTime,setGameTime]=(0,react.useState)('00:00');const[messageText,setMessageText]=(0,react.useState)('');const[messageClass,setMessageClass]=(0,react.useState)('p-1rem b-rd-6px mt-1rem text-center font-600 hidden');const[gameStatusText,setGameStatusText]=(0,react.useState)('准备开始');const[gameStatusClass,setGameStatusClass]=(0,react.useState)('text-#f39c12');const updateGameTime=()=>{const elapsed=Math.floor((Date.now()-gameStartTime)/1000);const minutes=Math.floor(elapsed/60).toString().padStart(2,'0');const seconds=(elapsed%60).toString().padStart(2,'0');setGameTime(`${minutes}:${seconds}`);};const startNewGame=()=>{setBoard(Array(boardSize).fill(0).map(()=>Array(boardSize).fill(0)));currentPlayerRef.current=1;setGameActive(true);setMoveCount(0);setGameStartTime(Date.now());setCurrentPlayerText('黑方');setGameStatusText('游戏中');setGameStatusClass('text-#27ae60');setMessageText('');setMessageClass('p-1rem b-rd-6px mt-1rem text-center font-600 hidden');if(timerInterval)clearInterval(timerInterval);updateGameTime();timerInterval=setInterval(updateGameTime,1000);if(ctx&&canvasRef.current){initBoard(ctx,canvasRef.current,boardSize,cellSize);}if(gameMode==='pve'&&currentPlayerRef.current===2){setTimeout(()=>{aiMove({gameActive,aiDifficulty,currentPlayer:currentPlayerRef.current,boardSize,board,cellSize,handleCanvasClick});},500);}};const endGame=message=>{setGameActive(false);setGameStatusText(message);if(timerInterval){clearInterval(timerInterval);timerInterval=null;}setMessageClass(message.includes(' 胜利')?'p-1rem b-rd-6px mt-1rem text-center font-600 hidden bg-#27ae6019 text-#27ae60 block':'p-1rem b-rd-6px mt-1rem text-center font-600 hidden bg-#f1c40f19 text-#f1c40f block');setMessageText(message);};const resetGame=()=>{if(confirm('确定要重新开始游戏吗？当前进度将丢失。'))startNewGame();};const handleCanvasClick=event=>{if(!gameActive)return;const offsetX=event.offsetX??event.nativeEvent.offsetX;const offsetY=event.offsetY??event.nativeEvent.offsetY;const x=Math.floor(offsetX/cellSize);const y=Math.floor(offsetY/cellSize);if(x<0||x>=boardSize||y<0||y>=boardSize)return;if(checkForbidden(x,y,boardSize,board,gameRule,currentPlayerRef.current)){endGame('黑方禁手! 白方胜利!');setMessageClass('p-1rem b-rd-6px mt-1rem text-center font-600 hidden bg-#e74c3c19 text-#e74c3c block');setMessageText('黑方触犯禁手规则!');return;}placePiece(x,y);};const placePiece=(x,y)=>{if(!gameActive||board[x][y]!==0)return false;board[x][y]=currentPlayerRef.current;if(ctx)drawPiece(x,y,currentPlayerRef.current,ctx,cellSize);setMoveCount(prev=>prev+1);if(checkWin(x,y,boardSize,board)){endGame(currentPlayerRef.current===1?'黑方胜利!':'白方胜利!');return true;}if(moveCount===boardSize*boardSize){endGame('平局!');return true;}const newCurrentPlayer=currentPlayerRef.current===1?2:1;currentPlayerRef.current=newCurrentPlayer;setCurrentPlayerText(newCurrentPlayer===1?'黑方':'白方');if(gameActive&&gameMode==='pve'&&newCurrentPlayer===2){setTimeout(()=>{aiMove({gameActive,aiDifficulty,currentPlayer:newCurrentPlayer,boardSize,board,cellSize,handleCanvasClick});},100);}return true;};(0,react.useEffect)(()=>{if(canvasRef.current){setCtx(canvasRef.current.getContext('2d'));setCellSize(canvasRef.current.width/boardSize);setBoard(Array(boardSize).fill(0).map(()=>Array(boardSize).fill(0)));if(ctx&&canvasRef.current)initBoard(ctx,canvasRef.current,boardSize,cellSize);setTimeout(()=>{setMessageClass('p-1rem b-rd-6px mt-1rem text-center font-600 hidden bg-#27ae6019 text-#27ae60 block animate-fade-in-up');setMessageText('欢迎来到五子棋大师! 点击"新游戏"开始对弈。');},1000);}return()=>{};},[canvasRef.current]);return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"max-w-1200px my-0 mx-auto p-2rem grid gap-2rem grid-cols-[1fr_300px]",children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"bg-white b-rd-8px shadow-[0_10px_30px_rgba(0,0,0,0.1)] p-2rem relative overflow-hidden",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"text-size-1.5rem mb-1.5rem text-#2c3e50 flex u-center-between b-b-1px b-b-solid b-b-#eee pb-0.5rem",children:/*#__PURE__*/(0,jsx_runtime.jsx)("span",{className:`${gameStatusClass} font-700`,children:gameStatusText})}),/*#__PURE__*/(0,jsx_runtime.jsx)("canvas",{ref:canvasRef,className:"bg-#f8f1e5 b-1px b-solid b-#ddd block my-0 mx-auto shadow-[0_4px_8px_rgba(0,0,0,0.05)] transition-all duration-300 ease-in-out hover:shadow-[0_6px_12px_rgba(0,0,0,0.1)]",width:"600",height:"600",onClick:handleCanvasClick}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:messageClass,children:messageText})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"bg-white b-rd-8px shadow-[0_10px_30px_rgba(0,0,0,0.1)] p-2rem flex flex-col",children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"mb-1.5rem",children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"text-1.1rem mb-1rem text-#2c3e50 u-center-start",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("i",{className:"fas fa-cog mr-0.5rem text-#3498db"})," \u6E38\u620F\u8BBE\u7F6E"]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"flex flex-col gap-0.8rem",children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("button",{className:"py-0.8rem px-1.2rem b-none b-rd-6px font-600 cursor-pointer u-center transition-all duration-300 ease-in-out bg-#3498db text-white hover:bg-#2980b9 hover:translate-y--2px",onClick:startNewGame,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("i",{className:"fas fa-plus-circle mr-0.5rem"})," \u65B0\u6E38\u620F"]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("button",{className:"py-0.8rem px-1.2rem b-none b-rd-6px font-600 cursor-pointer u-center transition-all duration-300 ease-in-out bg-#ecf0f1 text-#34495e hover:bg-#dfe6e9 hover:translate-y--2px",onClick:resetGame,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("i",{className:"fas fa-redo mr-0.5rem"})," \u91CD\u65B0\u5F00\u59CB"]})]})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"mb-1.5rem",children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"text-1.1rem mb-1rem text-#2c3e50 u-center-start",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("i",{className:"fas fa-user-friends text-#3498db"})," \u6E38\u620F\u6A21\u5F0F"]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"flex flex-col gap-0.8rem",children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("label",{className:"u-center-start p-0.5rem b-rd-6px transition-all duration-300 ease-in-out cursor-pointer hover:bg-#3498db19",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("input",{className:"mr-0.8rem",type:"radio",value:"pve",checked:gameMode==='pve',onChange:()=>setGameMode('pve')}),"\u4EBA\u673A\u5BF9\u6218"]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("label",{className:"u-center-start p-0.5rem b-rd-6px transition-all duration-300 ease-in-out cursor-pointer hover:bg-#3498db19",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("input",{className:"mr-0.8rem",type:"radio",value:"pvp",checked:gameMode==='pvp',onChange:()=>setGameMode('pvp')}),"\u53CC\u4EBA\u5BF9\u6218"]})]})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"mb-1.5rem",children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"text-1.1rem mb-1rem text-#2c3e50 u-center-start",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("i",{className:"fas fa-chess text-#3498db"})," \u89C4\u5219\u8BBE\u7F6E"]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"flex flex-col gap-0.8rem",children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("label",{className:"u-center-start p-0.5rem b-rd-6px transition-all duration-300 ease-in-out cursor-pointer hover:bg-#3498db19",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("input",{className:"mr-0.8rem",type:"radio",value:"standard",checked:gameRule==='standard',onChange:()=>setGameRule('standard')}),"\u6807\u51C6\u89C4\u5219 (\u65E0\u7981\u624B)"]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("label",{className:"u-center-start p-0.5rem b-rd-6px transition-all duration-300 ease-in-out cursor-pointer hover:bg-#3498db19",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("input",{className:"mr-0.8rem",type:"radio",value:"pro",checked:gameRule==='pro',onChange:()=>setGameRule('pro')}),"\u4E13\u4E1A\u89C4\u5219 (\u6709\u7981\u624B)"]})]})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"mb-1.5rem",children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"text-1.1rem mb-1rem text-#2c3e50 u-center-start",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("i",{className:"fas fa-robot text-#3498db"})," AI\u96BE\u5EA6"]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"flex flex-col gap-0.8rem",children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("button",{className:classnames_default()('py-0.8rem px-1.2rem b-none b-rd-6px font-600 cursor-pointer u-center transition-all duration-300 ease-in-out',{'bg-#27ae60 text-white hover:bg-#219653 hover:translate-y--2px':aiDifficulty==='easy','bg-#ecf0f1 text-#34495e hover:bg-#dfe6e9 hover:translate-y--2px':aiDifficulty!=='easy'}),onClick:()=>setAIDifficulty('easy'),children:[/*#__PURE__*/(0,jsx_runtime.jsx)("i",{className:"fas fa-smile mr-0.5rem"})," \u7B80\u5355"]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("button",{className:classnames_default()('py-0.8rem px-1.2rem b-none b-rd-6px font-600 cursor-pointer u-center transition-all duration-300 ease-in-out',{'bg-#f1c40f text-white hover:bg-#f39c12 hover:translate-y--2px':aiDifficulty==='medium','bg-#ecf0f1 text-#34495e hover:bg-#dfe6e9 hover:translate-y--2px':aiDifficulty!=='medium'}),onClick:()=>setAIDifficulty('medium'),children:[/*#__PURE__*/(0,jsx_runtime.jsx)("i",{className:"fas fa-meh mr-0.5rem"})," \u4E2D\u7B49"]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("button",{className:classnames_default()('py-0.8rem px-1.2rem b-none b-rd-6px font-600 cursor-pointer u-center transition-all duration-300 ease-in-out',{'bg-#e74c3c text-white hover:bg-#c0392b hover:translate-y--2px':aiDifficulty==='hard','bg-#ecf0f1 text-#34495e hover:bg-#dfe6e9 hover:translate-y--2px':aiDifficulty!=='hard'}),onClick:()=>setAIDifficulty('hard'),children:[/*#__PURE__*/(0,jsx_runtime.jsx)("i",{className:"fas fa-angry mr-0.5rem"})," \u56F0\u96BE"]})]})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"bg-white b-rd-8px shadow-[0_10px_30px_rgba(0,0,0,0.1)] p-1.5rem mt-1.5rem",children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"u-center-between mb-0.8rem",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("span",{className:"font-600 text-#2c3e50",children:"\u5F53\u524D\u73A9\u5BB6:"}),/*#__PURE__*/(0,jsx_runtime.jsx)("span",{className:"text-#34495e",children:currentPlayerText})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"u-center-between mb-0.8rem",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("span",{className:"font-600 text-#2c3e50",children:"\u5DF2\u8D70\u6B65\u6570:"}),/*#__PURE__*/(0,jsx_runtime.jsx)("span",{className:"text-#34495e",children:moveCount})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"u-center-between mb-0.8rem",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("span",{className:"font-600 text-#2c3e50",children:"\u6E38\u620F\u65F6\u95F4:"}),/*#__PURE__*/(0,jsx_runtime.jsx)("span",{className:"text-#34495e",children:gameTime})]})]})]})]});};/* harmony default export */ const demo_GoBang = (GoBang);

/***/ },

/***/ 97500
(module, exports) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = '';

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (arg) {
				classes = appendClass(classes, parseValue(arg));
			}
		}

		return classes;
	}

	function parseValue (arg) {
		if (typeof arg === 'string' || typeof arg === 'number') {
			return arg;
		}

		if (typeof arg !== 'object') {
			return '';
		}

		if (Array.isArray(arg)) {
			return classNames.apply(null, arg);
		}

		if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
			return arg.toString();
		}

		var classes = '';

		for (var key in arg) {
			if (hasOwn.call(arg, key) && arg[key]) {
				classes = appendClass(classes, key);
			}
		}

		return classes;
	}

	function appendClass (value, newClass) {
		if (!newClass) {
			return value;
		}
	
		if (value) {
			return value + ' ' + newClass;
		}
	
		return value + newClass;
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else // removed by dead control flow
{}
}());


/***/ }

}]);