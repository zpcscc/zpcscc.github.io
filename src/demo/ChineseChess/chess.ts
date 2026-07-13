/**
 * 深拷贝对象或数组
 */
export const clone = (obj: any): any => {
  if (obj === null) return null;
  if (Array.isArray(obj)) return obj.map(clone);
  if (typeof obj === 'object') {
    const o: any = {};
    for (const k in obj) if (Object.prototype.hasOwnProperty.call(obj, k)) o[k] = clone(obj[k]);
    return o;
  }
  return obj;
};

/**
 * 棋盘点坐标
 */
export type IPoint = {
  x: number;
  y: number;
  move(dx: number, dy: number): void;
  moveTo(x: number, y: number): void;
  equals(point: IPoint): boolean;
  toString(): string;
};

const Point = (x = 0, y = 0): IPoint => {
  const self = {
    x,
    y,
    move(dx: number, dy: number) {
      self.x += dx;
      self.y += dy;
    },
    moveTo(x: number, y: number) {
      self.x = x;
      self.y = y;
    },
    equals(point: IPoint) {
      return self.x === point.x && self.y === point.y;
    },
    toString() {
      return `(${self.x}, ${self.y})`;
    },
  };
  return self;
};

/**
 * 矩形区域
 */
export type IRect = {
  left: number;
  top: number;
  right: number;
  bottom: number;
  width(): number;
  height(): number;
  move(dx: number, dy: number): void;
  moveTo(x: number, y: number): void;
  isPointIn(point: IPoint): boolean;
  isOverlap(rc: IRect): boolean;
  equals(rc: IRect): boolean;
  toString(): string;
};

const Rect = (left = 0, top = 0, right = 0, bottom = 0): IRect => {
  const self = {
    left,
    top,
    right,
    bottom,
    width() {
      return self.right - self.left;
    },
    height() {
      return self.bottom - self.top;
    },
    move(dx: number, dy: number) {
      self.left += dx;
      self.right += dx;
      self.top += dy;
      self.bottom += dy;
    },
    moveTo(x: number, y: number) {
      const w = self.width();
      const h = self.height();
      self.left = x;
      self.top = y;
      self.right = x + w;
      self.bottom = y + h;
    },
    isPointIn(point: IPoint) {
      return (
        self.left <= point.x && self.right > point.x && self.top <= point.y && self.bottom > point.y
      );
    },
    isOverlap(rc: IRect) {
      return !(
        self.left >= rc.right ||
        self.right <= rc.left ||
        self.top >= rc.bottom ||
        self.bottom <= rc.top
      );
    },
    equals(rc: IRect) {
      return (
        self.left === rc.left &&
        self.top === rc.top &&
        self.right === rc.right &&
        self.bottom === rc.bottom
      );
    },
    toString() {
      return `[${self.left}, ${self.top}, ${self.right}, ${self.bottom}]`;
    },
  };
  return self;
};

/**
 * 组件基类
 */
export type IWidget = {
  init: () => void;
  id: string;
  parent: IWidget | null;
  canvas: HTMLCanvasElement | null;
  children: IWidget[];
  offsetRect: IRect;
  addChild(child: IWidget): void;
  hasChild(child: IWidget): boolean;
  eachChild(callback: (el: IWidget) => boolean | void, reverse?: boolean): void;
  moveChildToTop(child: IWidget): void;
  removeChild(child: IWidget): IWidget | undefined;
  remove(): void;
  hitTest(point: IPoint): boolean;
  show(): void;
  redraw(): void;
  onDestroy(): void;
  toString(): string;
  onPaint(): void;
  onMouseDown(point: IPoint): void;
  onMouseUp(point: IPoint): void;
  onMouseMove(point: IPoint): void;
};

const Widget = (
  params: {
    id?: string;
    parent?: IWidget | null;
    canvas?: HTMLCanvasElement | null;
  } = {},
): IWidget => {
  const { id = `_id_${Math.random()}`, parent = null, canvas = null } = params;
  const children: IWidget[] = [];
  const offsetRect = Rect(0, 0, 0, 0);

  const self: IWidget = {
    id,
    parent,
    canvas: canvas || (parent ? parent.canvas : null),
    children,
    offsetRect,
    addChild(child: IWidget) {
      if (!self.hasChild(child)) children.push(child);
      child.parent = self;
    },
    hasChild(child: IWidget) {
      return children.includes(child);
    },
    eachChild(callback: (el: IWidget) => boolean | void, reverse?: boolean) {
      const arr = reverse ? [...children].reverse() : children;
      for (const el of arr) if (callback(el)) break;
    },
    moveChildToTop(child: IWidget) {
      child.remove();
      children.push(child);
    },
    remove() {
      if (parent) {
        self.remove();
      }
    },
    removeChild(child: IWidget): IWidget | undefined {
      const idx = children.indexOf(child);
      if (idx !== -1) return children.splice(idx, 1)[0];
      return undefined;
    },
    hitTest(point: IPoint) {
      return offsetRect.isPointIn(point);
    },
    show() {
      self.redraw();
    },
    redraw() {
      self.onPaint();
      self.eachChild((el) => el.redraw());
    },
    onDestroy() {
      self.eachChild((el) => el.onDestroy());
      children.length = 0;
      if (parent) self.remove();
    },
    toString() {
      return id;
    },
    // 事件钩子
    onPaint() {},
    onMouseDown(point: IPoint) {
      self.eachChild((el) => {
        if (el.hitTest(point)) {
          el.onMouseDown(point);
          return true;
        }
        return false;
      }, true);
    },
    onMouseUp(point: IPoint) {
      self.eachChild((el) => {
        if (el.hitTest(point)) {
          el.onMouseUp(point);
          return true;
        }
        return false;
      }, true);
    },
    onMouseMove(point: IPoint) {
      self.eachChild((el) => el.onMouseMove(point), true);
    },
    init: () => {},
  };
  if (parent) parent.addChild(self);
  return self;
};

/**
 * 浏览器根组件
 */
const RootWidget = (params: { id?: string; canvas?: HTMLCanvasElement | null }) => {
  const self = Widget({ ...params, parent: null });
  self.init = () => {
    const getFixedMousePoint = (e: MouseEvent, dom: HTMLCanvasElement) => {
      const x = e.pageX - dom.offsetLeft;
      const y = e.pageY - dom.offsetTop;
      return Point(x, y);
    };
    document.addEventListener('mousedown', (e) => {
      self.onMouseDown(getFixedMousePoint(e, self.canvas!));
    });
    document.addEventListener('mouseup', (e) =>
      self.onMouseUp(getFixedMousePoint(e, self.canvas!)),
    );
    document.addEventListener('mousemove', (e) =>
      self.onMouseMove(getFixedMousePoint(e, self.canvas!)),
    );
  };
  return self;
};

// 象棋布局与样式
const layout = {
  padding: 30,
  cell: 50,
  chessRadius: 20,
  fontSize: 36,
  width: 400,
  height: 450,
  offsetWidth: 460,
  offsetHeight: 510,
};
const style = {
  board: {
    border: '#630',
    background: '#fed',
    font: '36px 隶书',
  },
  chess: [
    {
      border: '#fa8',
      background: '#fc9',
      font: '36px 隶书',
      fontColor: '#c00',
    },
    {
      border: '#fa8',
      background: '#fc9',
      font: '36px 隶书',
      fontColor: '#090',
    },
  ],
};

/**
 * 棋子工厂
 */
type ChessParams = {
  id: string;
  parent: IWidget;
  name: string;
  type: string;
  camp?: number;
  pos?: IPoint;
};
const Chess = (
  params: ChessParams,
): IWidget & {
  name: string;
  type: string;
  camp: number;
  pos: IPoint;
  isDragging: boolean;
  targetPos: IPoint | null;
  targetIndicatorAlpha: number;
  moveTo(pos: IPoint): void;
  autoMoveBackTo(pos: IPoint): void;
  autoMoveTo(pos: IPoint): void;
  point2chessPos(x: number, y: number): IPoint;
  isTargetValid(pos: IPoint): boolean;
  isRed(): boolean;
  isSameCamp(chess: any): boolean;
} => {
  const { id, parent, name, type, camp = 0, pos = Point(0, 0) } = params;
  const self = Widget({ id, parent }) as any;
  self.name = name;
  self.type = type;
  self.camp = camp;
  self.pos = pos;
  self.isDragging = false;
  self.targetPos = null;
  self.targetIndicatorAlpha = 0.2;

  self.onPaint = () => {
    const ctx = self.canvas.getContext('2d');
    ctx.fillStyle = style.chess[self.camp].background;
    ctx.strokeStyle = style.chess[self.camp].border;
    ctx.font = style.chess[self.camp].font;
    const x = self.offsetRect.left + layout.cell / 2;
    const y = self.offsetRect.top + layout.cell / 2;
    ctx.beginPath();
    ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
    if (self.isDragging) ctx.arc(x + 2, y + 4, layout.chessRadius + 1, 0, 360);
    else ctx.arc(x + 1, y + 2, layout.chessRadius + 1, 0, 360);
    ctx.fill();
    ctx.fillStyle = style.chess[self.camp].background;
    ctx.closePath();
    if (self.targetPos !== null && self.targetIndicatorAlpha > 0) {
      ctx.beginPath();
      ctx.fillStyle = `rgba(0, 128, 0, ${self.targetIndicatorAlpha})`;
      ctx.arc(
        layout.padding + self.targetPos.x * layout.cell,
        layout.padding + self.targetPos.y * layout.cell,
        layout.cell / 2,
        0,
        360,
      );
      ctx.fill();
      ctx.fillStyle = style.chess[self.camp].background;
      ctx.closePath();
    }
    ctx.beginPath();
    ctx.arc(x, y, layout.chessRadius, 0, 360);
    ctx.fill();
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
    ctx.fillText(self.name, x + 1, y - layout.fontSize / 16 + 1);
    ctx.fillStyle = style.chess[self.camp].fontColor;
    ctx.fillText(self.name, x, y - layout.fontSize / 16);
    ctx.stroke();
    ctx.closePath();
  };

  self.onMouseDown = (point: IPoint) => {
    console.log('point:onMouseDown', point);
    if (self.parent.isMoving) return;
    if (self.parent.mover === self.camp) {
      self.isDragging = true;
      self.parent.moveChildToTop(self);
      self.parent.redraw();
    }
  };

  self.onMouseMove = (point: IPoint) => {
    if (self.isDragging) {
      if (
        point.x <= 0 ||
        point.x >= layout.offsetWidth ||
        point.y <= 0 ||
        point.y >= layout.offsetHeight
      ) {
        self.isDragging = false;
        self.moveTo(self.pos);
        self.parent.redraw();
        return;
      }
      const x = point.x - layout.cell / 2;
      const y = point.y - layout.cell / 2;
      self.offsetRect.moveTo(x, y);
      const pos = self.point2chessPos(x, y);
      self.targetPos = self.isTargetValid(pos) ? pos : null;
      self.parent.redraw();
    }
  };

  self.onMouseUp = (point: IPoint) => {
    console.log('point:onMouseUp', point);
    if (self.isDragging) {
      self.isDragging = false;
      const pos = self.targetPos || self.pos;
      self.moveTo(pos);
      if (self.targetPos !== null) {
        self.parent.moveChess(self, pos);
      }
    }
  };

  self.moveTo = (pos: IPoint) => {
    self.parent.isMoving = true;
    const left = layout.padding + layout.cell * pos.x - layout.cell / 2;
    const top = layout.padding + layout.cell * pos.y - layout.cell / 2;
    const dx = left - self.offsetRect.left;
    const dy = top - self.offsetRect.top;
    let t = 0;
    const c = 15;
    const timer = setInterval(() => {
      if (++t > c) {
        clearInterval(timer);
        self.pos = pos;
        self.offsetRect.moveTo(left, top);
        self.targetPos = null;
        self.targetIndicatorAlpha = 0.2;
        self.parent.isMoving = false;
        return;
      }
      let ratio = 0;
      if (t <= c / 2) {
        ratio = (2 * t) / c;
        ratio = 1 - 0.5 * ratio * ratio * ratio * ratio;
      } else {
        ratio = 2 - (2 * t) / c;
        ratio = 0.5 * ratio * ratio * ratio * ratio;
      }
      self.offsetRect.moveTo(left - dx * ratio, top - dy * ratio);
      self.targetIndicatorAlpha = 0.2 * ratio;
      self.parent.redraw();
    }, 40);
  };

  self.autoMoveBackTo = (pos: IPoint) => {
    self.targetPos = pos;
    self.moveTo(pos);
    if (self.targetPos !== null) {
      self.parent.moveChessWithoutRecored(self, pos);
    }
  };

  self.autoMoveTo = (pos: IPoint) => {
    self.targetPos = pos;
    self.moveTo(pos);
    if (self.targetPos !== null) {
      self.parent.moveChess(self, pos);
    }
  };

  self.point2chessPos = (x: number, y: number) => {
    return Point(
      Math.ceil((x - layout.padding) / layout.cell),
      Math.ceil((y - layout.padding) / layout.cell),
    );
  };

  self.isTargetValid = (pos: IPoint) => {
    if (!self.parent.isValidPos(pos)) return false;
    const chess = self.parent.findChess(pos);
    return chess === null || chess.camp !== self.camp;
  };

  self.isRed = () => self.camp === 0;
  self.isSameCamp = (chess: any) => self.camp === chess.camp;

  self.offsetRect.left = layout.padding + layout.cell * self.pos.x - layout.cell / 2;
  self.offsetRect.top = layout.padding + layout.cell * self.pos.y - layout.cell / 2;
  self.offsetRect.right = self.offsetRect.left + layout.cell;
  self.offsetRect.bottom = self.offsetRect.top + layout.cell;

  return self;
};

// 具体棋子工厂
const Chariot = (id: string, parent: IWidget, camp: number, pos: IPoint) =>
  Chess({ id, parent, name: '車', type: camp === 0 ? 'R_CAR' : 'B_CAR', camp, pos });
const Horse = (id: string, parent: IWidget, camp: number, pos: IPoint) =>
  Chess({ id, parent, name: '馬', type: camp === 0 ? 'R_HORSE' : 'B_HORSE', camp, pos });
const Elephant = (id: string, parent: IWidget, camp: number, pos: IPoint) =>
  Chess({
    id,
    parent,
    name: camp === 0 ? '相' : '象',
    type: camp === 0 ? 'R_ELEPHANT' : 'B_ELEPHANT',
    camp,
    pos,
  });
const Guard = (id: string, parent: IWidget, camp: number, pos: IPoint) =>
  Chess({
    id,
    parent,
    name: camp === 0 ? '士' : '仕',
    type: camp === 0 ? 'R_BISHOP' : 'B_BISHOP',
    camp,
    pos,
  });
const General = (id: string, parent: IWidget, camp: number, pos: IPoint) =>
  Chess({
    id,
    parent,
    name: camp === 0 ? '帥' : '將',
    type: camp === 0 ? 'R_KING' : 'B_KING',
    camp,
    pos,
  });
const Cannon = (id: string, parent: IWidget, camp: number, pos: IPoint) =>
  Chess({
    id,
    parent,
    name: camp === 0 ? '炮' : '砲',
    type: camp === 0 ? 'R_CANON' : 'B_CANON',
    camp,
    pos,
  });
const Pawn = (id: string, parent: IWidget, camp: number, pos: IPoint) =>
  Chess({
    id,
    parent,
    name: camp === 0 ? '兵' : '卒',
    type: camp === 0 ? 'R_PAWN' : 'B_PAWN',
    camp,
    pos,
  });

/**
 * 棋盘工厂
 */
const Board = (canvas: HTMLCanvasElement) => {
  const self = RootWidget({ id: 'chessBoard', canvas }) as any;
  self.campOrder = 1;
  self.mover = 0;
  self.isMoving = false;
  self.boardMap = [];
  self.history = [];
  self.children = [];
  self.offsetRect.left = 0;
  self.offsetRect.top = 0;
  self.offsetRect.right = layout.offsetWidth;
  self.offsetRect.bottom = layout.offsetHeight;

  self.init = function () {
    self.history = [];
    self.boardMap = [];
    for (let i = 0; i < 9; i++) {
      self.boardMap[i] = [];
      for (let j = 0; j < 10; j++) self.boardMap[i][j] = null;
    }
    for (let i = 0; i < self.children.length; i++) {
      const child = self.children[i];
      if (child.pos !== null) {
        self.boardMap[child.pos.x][child.pos.y] = child;
      }
    }
  };

  self.findChess = function (pos: IPoint) {
    if (!self.isValidPos(pos)) return null;
    for (let i = 0; i < self.children.length; i++) {
      const child = self.children[i];
      if (child.pos !== null && child.pos.equals(pos)) return child;
    }
    return null;
  };

  self.isGameOver = function () {
    let red = false;
    let black = false;
    for (let i = 0; i < self.children.length; i++) {
      const child = self.children[i];
      if (child.type === 'R_KING') red = true;
      else if (child.type === 'B_KING') black = true;
      if (red && black) return false;
    }
    return true;
  };

  self.recordMove = function (chess: any, pos: IPoint) {
    const move: any = {};
    move.from = chess.pos;
    move.to = pos;
    move.target = self.findChess(pos);
    self.history.push(move);
  };

  self.restore = function () {
    if (self.history.length % 2 === 1 || self.history.length === 0) return;
    for (let i = 0; i < 2; ++i) {
      const move = self.history.pop();
      const chess = self.findChess(move.to);
      chess.autoMoveBackTo(move.from);
      if (move.target !== null) {
        self.addChild(move.target);
        self.boardMap[move.to.x][move.to.y] = move.target;
        move.target.autoMoveBackTo(move.to);
      }
    }
    self.mover = 0;
  };

  self.moveChessWithoutRecored = function (chess: any, pos: IPoint) {
    self.boardMap[pos.x][pos.y] = chess;
    if (!chess.pos.equals(pos)) {
      self.boardMap[chess.pos.x][chess.pos.y] = null;
      chess.pos = pos;
    }
  };

  self.moveChess = function (chess: any, pos: IPoint) {
    self.recordMove(chess, pos);
    self.removeChess(pos);
    self.boardMap[pos.x][pos.y] = chess;
    self.boardMap[chess.pos.x][chess.pos.y] = null;
    chess.pos = pos;
    self.mover = 1 - chess.camp;
    // 省略AI部分
    if (self.isGameOver()) {
      if (self.mover === 1) alert('恭喜，你赢啦！');
      else alert('输了哦，下次再努力吧～');
      self.mover = -1;
    }
  };

  self.removeChess = function (pos: IPoint) {
    self.boardMap[pos.x][pos.y] = null;
    const chess = self.findChess(pos);
    if (chess !== null) chess.onDestroy();
  };

  self.isValidPos = function (pos: IPoint) {
    return pos !== null && !self.isOutsideBoard(pos);
  };

  self.isInsideCamp = function (pos: IPoint, camp: number) {
    if (!self.isValidPos(pos)) return false;
    return camp === self.campOrder ? pos.y <= 4 : pos.y >= 5;
  };

  self.isInsidePalace = function (pos: IPoint, camp: number) {
    if (!self.isValidPos(pos)) return false;
    if (pos.x < 3 || pos.x > 5) return false;
    return camp === self.campOrder ? pos.y <= 2 : pos.y >= 7;
  };

  self.isOutsideBoard = function (pos: IPoint) {
    return pos.x < 0 || pos.x >= 9 || pos.y < 0 || pos.y >= 10;
  };

  self.onPaint = function () {
    let str = '<table cellspacing=0 border=1>';
    for (let j = 0; j < 10; j++) {
      str += '<tr>';
      for (let i = 0; i < 9; i++) {
        str += '<td style=\'height:15px;width:40px;\'>';
        if (self.boardMap[i][j] !== null) str += self.boardMap[i][j].id;
        str += '</td>';
      }
      str += '</tr>';
    }
    str += '</table>';
    const debugEl = document.querySelector('#debug');
    if (debugEl) debugEl.innerHTML = str;

    const ctx = self.canvas.getContext('2d');
    ctx.fillStyle = style.board.background;
    ctx.beginPath();
    ctx.rect(0, 0, layout.offsetWidth, layout.offsetHeight);
    ctx.fill();
    ctx.closePath();
    const p = layout.padding;
    const s = layout.cell;
    const w = layout.width;
    const h = layout.height;
    ctx.strokeStyle = style.board.border;
    ctx.lineWidth = 2;
    ctx.beginPath();
    for (let i = 0; i < 10; i++) {
      ctx.moveTo(p, s * i + p);
      ctx.lineTo(w + p, s * i + p);
    }
    ctx.moveTo(p, p);
    ctx.lineTo(p, h + p);
    ctx.moveTo(w + p, p);
    ctx.lineTo(w + p, h + p);
    for (let i = 1; i < 8; i++) {
      ctx.moveTo(s * i + p, p);
      ctx.lineTo(s * i + p, s * 4 + p);
      ctx.moveTo(s * i + p, s * 5 + p);
      ctx.lineTo(s * i + p, h + p);
    }
    ctx.moveTo(s * 3 + p, p);
    ctx.lineTo(s * 5 + p, s * 2 + p);
    ctx.moveTo(s * 5 + p, 0 + p);
    ctx.lineTo(s * 3 + p, s * 2 + p);
    ctx.moveTo(s * 3 + p, s * 7 + p);
    ctx.lineTo(s * 5 + p, s * 9 + p);
    ctx.moveTo(s * 5 + p, s * 7 + p);
    ctx.lineTo(s * 3 + p, s * 9 + p);
    ctx.stroke();
    ctx.closePath();
    ctx.save();
    ctx.rotate(-Math.PI / 2);
    ctx.font = style.board.font;
    ctx.fillStyle = style.board.border;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('楚', -(p + s * 4.5), p + s * 1.5);
    ctx.fillText('河', -(p + s * 4.5), p + s * 2.5);
    ctx.rotate(Math.PI);
    ctx.fillText('漢', p + s * 4.5, -(p + s * 6.5));
    ctx.fillText('界', p + s * 4.5, -(p + s * 5.5));
    ctx.restore();
  };

  return self;
};

/**
 * 游戏管理器
 */
export type ChessGameType = {
  canvas: HTMLCanvasElement | null;
  board: any;
  init(): void;
  restore(): void;
};
const ChessGame = (canvas: HTMLCanvasElement): ChessGameType => {
  let board: any = null;
  return {
    canvas,
    board,
    init() {
      board = Board(canvas);
      // 摆棋子
      Chariot('車01', board, 0, Point(0, 9));
      Chariot('車02', board, 0, Point(8, 9));
      Horse('馬01', board, 0, Point(1, 9));
      Horse('馬02', board, 0, Point(7, 9));
      Elephant('相01', board, 0, Point(2, 9));
      Elephant('相02', board, 0, Point(6, 9));
      Guard('士01', board, 0, Point(3, 9));
      Guard('士02', board, 0, Point(5, 9));
      General('帥00', board, 0, Point(4, 9));
      Pawn('兵01', board, 0, Point(0, 6));
      Pawn('兵02', board, 0, Point(2, 6));
      Pawn('兵03', board, 0, Point(4, 6));
      Pawn('兵04', board, 0, Point(6, 6));
      Pawn('兵05', board, 0, Point(8, 6));
      Cannon('炮01', board, 0, Point(1, 7));
      Cannon('炮02', board, 0, Point(7, 7));
      Chariot('車11', board, 1, Point(0, 0));
      Chariot('車12', board, 1, Point(8, 0));
      Horse('馬11', board, 1, Point(1, 0));
      Horse('馬12', board, 1, Point(7, 0));
      Elephant('象11', board, 1, Point(2, 0));
      Elephant('象12', board, 1, Point(6, 0));
      Guard('仕11', board, 1, Point(3, 0));
      Guard('仕12', board, 1, Point(5, 0));
      General('將10', board, 1, Point(4, 0));
      Pawn('卒11', board, 1, Point(0, 3));
      Pawn('卒12', board, 1, Point(2, 3));
      Pawn('卒13', board, 1, Point(4, 3));
      Pawn('卒14', board, 1, Point(6, 3));
      Pawn('卒15', board, 1, Point(8, 3));
      Cannon('砲11', board, 1, Point(1, 2));
      Cannon('砲12', board, 1, Point(7, 2));
      board.init();
      board.show();
    },
    restore() {
      board.restore();
    },
  };
};

export default ChessGame;
