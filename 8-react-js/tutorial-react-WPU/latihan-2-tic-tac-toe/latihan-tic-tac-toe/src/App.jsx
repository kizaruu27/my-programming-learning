/* eslint-disable no-unused-vars */
import { useState } from "react";
import Board from "./components/Board";

export default function Game() {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [xIsNext, setXIsNext] = useState(true);
    const [move, setMove] = useState(0);
    const currentSquare = history[move];

    function handlePlay(newSquare) {
        const nextHistory = [...history.slice(0, move + 1), newSquare]
        setHistory(nextHistory);
        setMove(nextHistory.length - 1);
        setXIsNext(!xIsNext);
    }

    const moves = history.map((squares, move) => {
        let description = '';
        description = move > 0 ? `Go to #${move}` : 'Go to start!';

        return (
            <div key={move}>
                <button onClick={() => jumpTo(move)} className="history-btn">{description}</button>
            </div>
        ) 
    });

    function jumpTo(nextMove) {
        setMove(nextMove);
        setXIsNext(nextMove % 2 === 0);
    }

    return (
        <>
            <div className="games">
                <div className="game-board">
                    <Board squares={currentSquare} xIsNext={xIsNext} onPlay={handlePlay}/>
                </div>
                <div className="game-info">
                    {moves}
                </div>
            </div>
        </>
    )
}