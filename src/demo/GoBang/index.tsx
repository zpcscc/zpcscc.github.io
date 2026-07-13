import classNames from 'classnames';
import { useEffect, useRef, useState, type FC } from 'react';
import { aiMove, checkForbidden, checkWin, drawPiece, initBoard } from './utils';

const boardSize = 15;
let timerInterval: any = null;

const GoBang: FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const currentPlayerRef = useRef<number>(1);
  const [currentPlayerText, setCurrentPlayerText] = useState<string>('黑方');
  const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>(null);
  const [cellSize, setCellSize] = useState<number>(0);
  const [board, setBoard] = useState<number[][]>([]);
  const [gameActive, setGameActive] = useState<boolean>(false);
  const [gameMode, setGameMode] = useState<string>('pve');
  const [gameRule, setGameRule] = useState<string>('standard');
  const [aiDifficulty, setAIDifficulty] = useState<string>('medium');
  const [moveCount, setMoveCount] = useState<number>(0);
  const [gameStartTime, setGameStartTime] = useState<number>(0);
  const [gameTime, setGameTime] = useState<string>('00:00');
  const [messageText, setMessageText] = useState<string>('');
  const [messageClass, setMessageClass] = useState<string>(
    'p-1rem b-rd-6px mt-1rem text-center font-600 hidden',
  );
  const [gameStatusText, setGameStatusText] = useState<string>('准备开始');
  const [gameStatusClass, setGameStatusClass] = useState<string>('text-#f39c12');

  const updateGameTime = () => {
    const elapsed = Math.floor((Date.now() - gameStartTime) / 1000);
    const minutes = Math.floor(elapsed / 60)
      .toString()
      .padStart(2, '0');
    const seconds = (elapsed % 60).toString().padStart(2, '0');
    setGameTime(`${minutes}:${seconds}`);
  };

  const startNewGame = () => {
    setBoard(
      Array(boardSize)
        .fill(0)
        .map(() => Array(boardSize).fill(0)),
    );
    currentPlayerRef.current = 1;
    setGameActive(true);
    setMoveCount(0);
    setGameStartTime(Date.now());
    setCurrentPlayerText('黑方');
    setGameStatusText('游戏中');
    setGameStatusClass('text-#27ae60');
    setMessageText('');
    setMessageClass('p-1rem b-rd-6px mt-1rem text-center font-600 hidden');
    if (timerInterval) clearInterval(timerInterval);
    updateGameTime();
    timerInterval = setInterval(updateGameTime, 1000);
    if (ctx && canvasRef.current) {
      initBoard(ctx, canvasRef.current, boardSize, cellSize);
    }
    if (gameMode === 'pve' && currentPlayerRef.current === 2) {
      setTimeout(() => {
        aiMove({
          gameActive,
          aiDifficulty,
          currentPlayer: currentPlayerRef.current,
          boardSize,
          board,
          cellSize,
          handleCanvasClick,
        });
      }, 500);
    }
  };

  const endGame = (message: string) => {
    setGameActive(false);
    setGameStatusText(message);
    if (timerInterval) {
      clearInterval(timerInterval as number);
      timerInterval = null;
    }
    setMessageClass(
      message.includes(' 胜利')
        ? 'p-1rem b-rd-6px mt-1rem text-center font-600 hidden bg-#27ae6019 text-#27ae60 block'
        : 'p-1rem b-rd-6px mt-1rem text-center font-600 hidden bg-#f1c40f19 text-#f1c40f block',
    );
    setMessageText(message);
  };

  const resetGame = () => {
    if (confirm('确定要重新开始游戏吗？当前进度将丢失。')) startNewGame();
  };

  const handleCanvasClick = (event: any) => {
    if (!gameActive) return;
    const offsetX = event.offsetX ?? event.nativeEvent.offsetX;
    const offsetY = event.offsetY ?? event.nativeEvent.offsetY;
    const x = Math.floor(offsetX / cellSize);
    const y = Math.floor(offsetY / cellSize);
    if (x < 0 || x >= boardSize || y < 0 || y >= boardSize) return;
    if (checkForbidden(x, y, boardSize, board, gameRule, currentPlayerRef.current)) {
      endGame('黑方禁手! 白方胜利!');
      setMessageClass(
        'p-1rem b-rd-6px mt-1rem text-center font-600 hidden bg-#e74c3c19 text-#e74c3c block',
      );
      setMessageText('黑方触犯禁手规则!');
      return;
    }
    placePiece(x, y);
  };

  const placePiece = (x: number, y: number) => {
    if (!gameActive || board[x][y] !== 0) return false;
    board[x][y] = currentPlayerRef.current;
    if (ctx) drawPiece(x, y, currentPlayerRef.current, ctx, cellSize);
    setMoveCount((prev) => prev + 1);
    if (checkWin(x, y, boardSize, board)) {
      endGame(currentPlayerRef.current === 1 ? '黑方胜利!' : '白方胜利!');
      return true;
    }
    if (moveCount === boardSize * boardSize) {
      endGame('平局!');
      return true;
    }
    const newCurrentPlayer = currentPlayerRef.current === 1 ? 2 : 1;
    currentPlayerRef.current = newCurrentPlayer;
    setCurrentPlayerText(newCurrentPlayer === 1 ? '黑方' : '白方');
    if (gameActive && gameMode === 'pve' && newCurrentPlayer === 2) {
      setTimeout(() => {
        aiMove({
          gameActive,
          aiDifficulty,
          currentPlayer: newCurrentPlayer,
          boardSize,
          board,
          cellSize,
          handleCanvasClick,
        });
      }, 100);
    }
    return true;
  };

  useEffect(() => {
    if (canvasRef.current) {
      setCtx(canvasRef.current.getContext('2d'));
      setCellSize(canvasRef.current.width / boardSize);
      setBoard(
        Array(boardSize)
          .fill(0)
          .map(() => Array(boardSize).fill(0)),
      );
      if (ctx && canvasRef.current) initBoard(ctx, canvasRef.current, boardSize, cellSize);
      setTimeout(() => {
        setMessageClass(
          'p-1rem b-rd-6px mt-1rem text-center font-600 hidden bg-#27ae6019 text-#27ae60 block animate-fade-in-up',
        );
        setMessageText('欢迎来到五子棋大师! 点击"新游戏"开始对弈。');
      }, 1000);
    }
    return () => {};
  }, [canvasRef.current]);

  return (
    <div className='max-w-1200px my-0 mx-auto p-2rem grid gap-2rem grid-cols-[1fr_300px]'>
      <div className='bg-white b-rd-8px shadow-[0_10px_30px_rgba(0,0,0,0.1)] p-2rem relative overflow-hidden'>
        <div className='text-size-1.5rem mb-1.5rem text-#2c3e50 flex u-center-between b-b-1px b-b-solid b-b-#eee pb-0.5rem'>
          <span className={`${gameStatusClass} font-700`}>{gameStatusText}</span>
        </div>
        <canvas
          ref={canvasRef}
          className='bg-#f8f1e5 b-1px b-solid b-#ddd block my-0 mx-auto shadow-[0_4px_8px_rgba(0,0,0,0.05)] transition-all duration-300 ease-in-out hover:shadow-[0_6px_12px_rgba(0,0,0,0.1)]'
          width='600'
          height='600'
          onClick={handleCanvasClick}
        />
        <div className={messageClass}>{messageText}</div>
      </div>
      <div className='bg-white b-rd-8px shadow-[0_10px_30px_rgba(0,0,0,0.1)] p-2rem flex flex-col'>
        <div className='mb-1.5rem'>
          <div className='text-1.1rem mb-1rem text-#2c3e50 u-center-start'>
            <i className='fas fa-cog mr-0.5rem text-#3498db' /> 游戏设置
          </div>
          <div className='flex flex-col gap-0.8rem'>
            <button
              className='py-0.8rem px-1.2rem b-none b-rd-6px font-600 cursor-pointer u-center transition-all duration-300 ease-in-out bg-#3498db text-white hover:bg-#2980b9 hover:translate-y--2px'
              onClick={startNewGame}
            >
              <i className='fas fa-plus-circle mr-0.5rem' /> 新游戏
            </button>
            <button
              className='py-0.8rem px-1.2rem b-none b-rd-6px font-600 cursor-pointer u-center transition-all duration-300 ease-in-out bg-#ecf0f1 text-#34495e hover:bg-#dfe6e9 hover:translate-y--2px'
              onClick={resetGame}
            >
              <i className='fas fa-redo mr-0.5rem' /> 重新开始
            </button>
          </div>
        </div>
        <div className='mb-1.5rem'>
          <div className='text-1.1rem mb-1rem text-#2c3e50 u-center-start'>
            <i className='fas fa-user-friends text-#3498db' /> 游戏模式
          </div>
          <div className='flex flex-col gap-0.8rem'>
            <label className='u-center-start p-0.5rem b-rd-6px transition-all duration-300 ease-in-out cursor-pointer hover:bg-#3498db19'>
              <input
                className='mr-0.8rem'
                type='radio'
                value='pve'
                checked={gameMode === 'pve'}
                onChange={() => setGameMode('pve')}
              />
              人机对战
            </label>
            <label className='u-center-start p-0.5rem b-rd-6px transition-all duration-300 ease-in-out cursor-pointer hover:bg-#3498db19'>
              <input
                className='mr-0.8rem'
                type='radio'
                value='pvp'
                checked={gameMode === 'pvp'}
                onChange={() => setGameMode('pvp')}
              />
              双人对战
            </label>
          </div>
        </div>
        <div className='mb-1.5rem'>
          <div className='text-1.1rem mb-1rem text-#2c3e50 u-center-start'>
            <i className='fas fa-chess text-#3498db' /> 规则设置
          </div>
          <div className='flex flex-col gap-0.8rem'>
            <label className='u-center-start p-0.5rem b-rd-6px transition-all duration-300 ease-in-out cursor-pointer hover:bg-#3498db19'>
              <input
                className='mr-0.8rem'
                type='radio'
                value='standard'
                checked={gameRule === 'standard'}
                onChange={() => setGameRule('standard')}
              />
              标准规则 (无禁手)
            </label>
            <label className='u-center-start p-0.5rem b-rd-6px transition-all duration-300 ease-in-out cursor-pointer hover:bg-#3498db19'>
              <input
                className='mr-0.8rem'
                type='radio'
                value='pro'
                checked={gameRule === 'pro'}
                onChange={() => setGameRule('pro')}
              />
              专业规则 (有禁手)
            </label>
          </div>
        </div>
        <div className='mb-1.5rem'>
          <div className='text-1.1rem mb-1rem text-#2c3e50 u-center-start'>
            <i className='fas fa-robot text-#3498db' /> AI难度
          </div>
          <div className='flex flex-col gap-0.8rem'>
            <button
              className={classNames(
                'py-0.8rem px-1.2rem b-none b-rd-6px font-600 cursor-pointer u-center transition-all duration-300 ease-in-out',
                {
                  'bg-#27ae60 text-white hover:bg-#219653 hover:translate-y--2px':
                    aiDifficulty === 'easy',
                  'bg-#ecf0f1 text-#34495e hover:bg-#dfe6e9 hover:translate-y--2px':
                    aiDifficulty !== 'easy',
                },
              )}
              onClick={() => setAIDifficulty('easy')}
            >
              <i className='fas fa-smile mr-0.5rem' /> 简单
            </button>
            <button
              className={classNames(
                'py-0.8rem px-1.2rem b-none b-rd-6px font-600 cursor-pointer u-center transition-all duration-300 ease-in-out',
                {
                  'bg-#f1c40f text-white hover:bg-#f39c12 hover:translate-y--2px':
                    aiDifficulty === 'medium',
                  'bg-#ecf0f1 text-#34495e hover:bg-#dfe6e9 hover:translate-y--2px':
                    aiDifficulty !== 'medium',
                },
              )}
              onClick={() => setAIDifficulty('medium')}
            >
              <i className='fas fa-meh mr-0.5rem' /> 中等
            </button>
            <button
              className={classNames(
                'py-0.8rem px-1.2rem b-none b-rd-6px font-600 cursor-pointer u-center transition-all duration-300 ease-in-out',
                {
                  'bg-#e74c3c text-white hover:bg-#c0392b hover:translate-y--2px':
                    aiDifficulty === 'hard',
                  'bg-#ecf0f1 text-#34495e hover:bg-#dfe6e9 hover:translate-y--2px':
                    aiDifficulty !== 'hard',
                },
              )}
              onClick={() => setAIDifficulty('hard')}
            >
              <i className='fas fa-angry mr-0.5rem' /> 困难
            </button>
          </div>
        </div>
        <div className='bg-white b-rd-8px shadow-[0_10px_30px_rgba(0,0,0,0.1)] p-1.5rem mt-1.5rem'>
          <div className='u-center-between mb-0.8rem'>
            <span className='font-600 text-#2c3e50'>当前玩家:</span>
            <span className='text-#34495e'>{currentPlayerText}</span>
          </div>
          <div className='u-center-between mb-0.8rem'>
            <span className='font-600 text-#2c3e50'>已走步数:</span>
            <span className='text-#34495e'>{moveCount}</span>
          </div>
          <div className='u-center-between mb-0.8rem'>
            <span className='font-600 text-#2c3e50'>游戏时间:</span>
            <span className='text-#34495e'>{gameTime}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoBang;
