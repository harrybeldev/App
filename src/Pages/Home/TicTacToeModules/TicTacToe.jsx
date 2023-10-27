/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
import "./TicTacToe.css"
import Cell from "./Cell";



const TicTacToe = () => {
  const[cells, setCells] = useState(["", "", "", "", "", "", "", "", ""]);
  const[turn, setTurn] = useState("O")
  const[winningMessage,setWinningMessage] = useState(null)

  const message = `It is now ${turn}'s turn.`
  // console.log(cells)
  // console.log(cells.length)



  
  const restart = () => {
    setCells(["", "", "", "", "", "", "", "", ""])
    setTurn("O")
    setWinningMessage(null)
  }
  
  return (
    <div className="tictactoe--container" id="tic-tac-toe">
      <h1 className="heading">Tic Tac Toe</h1>
      <div className="gameboard"> 
       {cells?.map((cell,index) => <Cell key={index} id={index} cell={cell} setCells={setCells} turn={turn} setTurn={setTurn} cells={cells} winningMessage={winningMessage} setWinningMessage={setWinningMessage} /> )}
      </div>
      <div className="info">{winningMessage || message}</div>
      <button id="btn" onClick={restart}>Restart</button>
    </div>
  );
}
 
export default TicTacToe;