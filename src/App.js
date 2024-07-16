import './App.css';
import GameBoard from './Components/GameBoard';
import React, { useState } from 'react'


function App() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares;
    if (xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }
  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        console.log(squares[a]);
        return squares[a];
      }
    }
    return null;
  }
  return (
    <div className='py-5 text-center'>
      <h1 className='fs-1 fw-bold'> Tic-Tac-Toe</h1>
      <div className="status">{status}</div>
      <div className='row mx-0 p-5'>
        <GameBoard value={squares[0]} onSquareClick={() => handleClick(0)}> </GameBoard>
        <GameBoard value={squares[1]} onSquareClick={() => handleClick(1)}> </GameBoard>
        <GameBoard value={squares[2]} onSquareClick={() => handleClick(2)}> </GameBoard>
        <GameBoard value={squares[3]} onSquareClick={() => handleClick(3)}> </GameBoard>
        <GameBoard value={squares[4]} onSquareClick={() => handleClick(4)}> </GameBoard>
        <GameBoard value={squares[5]} onSquareClick={() => handleClick(5)}> </GameBoard>
        <GameBoard value={squares[6]} onSquareClick={() => handleClick(6)}> </GameBoard>
        <GameBoard value={squares[7]} onSquareClick={() => handleClick(7)}> </GameBoard>
        <GameBoard value={squares[8]} onSquareClick={() => handleClick(8)}> </GameBoard>
      </div>
    </div>
  );
}

export default App;

