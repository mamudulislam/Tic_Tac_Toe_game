import React, { useState } from 'react';

const TikTo = () => {
    const [board, setBoard] = useState(Array(9).fill(" "));
    const [isxnext, setIsxnext] = useState(true);
    const winner = calculatorwinner(board);
    const status = winner ? `Winner: ${winner}` : `It's ${isxnext ? 'X' : 'O'}'s turn`;
    const gameover = false
    const handleClick = (index) => {
        if (board[index] !== " " || winner) return;
        const newBoard = [...board];
        newBoard[index] = isxnext ? 'X' : 'O';
        setBoard(newBoard);
        setIsxnext(!isxnext);
    };
    const handlereset = () => {
        setBoard(Array(9).fill(" "));
        setIsxnext(true);
    };


    return (
        <div className="flex flex-col items-center justify-center h-[100vh] bg-gray-300">
            <h1 className="text-[30px] font-bold mb-4">Tic Tac Toe</h1>
            <div className="text-[20px] mb-6">{status}</div>
            <div className="grid grid-cols-3 gap-4">
                {board.map((value, index) => (
                    <button key={index} className="bg-white text-[24px] font-bold h-[60px] w-[60px] rounded-lg shadow-lg flex items-center justify-center" onClick={() => handleClick(index)}>
                        {value}
                    </button>
                ))}
            </div>
            <button className='shadow-lg p-[15px] rounded-lg bg-amber-300 mt-6 text-amber-900' onClick={handlereset}>Reset</button>
        </div >
    );
};

function calculatorwinner(items) {
    const winnercombination = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let i = 0; i < winnercombination.length; i++) {
        const [a, b, c] = winnercombination[i];
        if (items[a] !== " " && items[a] === items[b] && items[a] === items[c]) {
            return items[a];
        }
    }
    return null;
}

export default TikTo;
