/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from 'react'
import Square from './Square'
import Header from './Header'

function winnerChecker(squares) {
  const lines = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] === squares[b] && squares[a] === squares[c] && squares[b] === squares[c]) return squares [a];
  }
  
  return false;
}

export default function Board({squares, xIsNext, onPlay}) {
  
  function handleClick(i) {
    if (squares[i] || winnerChecker(squares)) return;

    const newSquare = squares.slice();
    newSquare[i] = xIsNext ? 'X' : 'O';
    onPlay(newSquare);
  }

  const winner = winnerChecker(squares);
  let status = '';
  const statusBar = document.getElementById('status');

  if (winner) {
    status = `Winner: ${winner}`;
    statusBar.style.backgroundColor = 'green';
  }
  else {
    status = `Next Turn: ${xIsNext ? 'X' : 'O'}`;
  }

  return (
    <>
      <Header />
      <div className='status' id="status">
        {status}
      </div>

      <div className="board">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)}/>
        <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
        <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
        <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
        <Square value={squares[4]} onSquareClick={() => handleClick(4)}/>
        <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>
        <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
        <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>
        <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>
      </div>
    </>
  )
}