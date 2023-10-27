/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import "./TicTacToe.css"
import Cell from "./cell";


const TicTacToe = () => {
  const[cells, setCells] = useState(["", "", "", "", "", "", "", "", ""]);
  const[turn, setTurn] = useState("circle")
  const[winningMessage,setWinningMessage] = useState(null)

  const message = `It is now ${turn}'s turn.`
  console.log(cells)

  const checkWin = () => {
    const winningCombos = [
      [0,1,2], [3,4,5], [6,7,8],
      [0,3,6], [1,4,7], [2,5,8],
      [0,4,8], [2,4,6]
    ]
    winningCombos.forEach(array => {
      let circleWins = array.every(cell => cells[cell] === "circle")
      if(circleWins) {
        setWinningMessage("Circle Wins!")
        return
      }
    })
    winningCombos.forEach(array => {
      let crossWins = array.every(cell => cells[cell] === "cross")
      if(crossWins) {
        setWinningMessage("Cross Wins!")
        return
      }
    })
  }
  useEffect(() => {
    checkWin()
  },[cells])

  
  const restart = () => {
    let playAgain = location.reload()
    if(playAgain){
      return alert("Thanks for playing")
    }
  }
  
  return (
    <div className="tictactoe--container" id="tic-tac-toe">
      <div className="gameboard"> 
       {cells.map((cell,index) => <Cell key={index} id={index} cell={cell} setCells={setCells} turn={turn} setTurn={setTurn} cells={cells} winningMessage={winningMessage} /> )}
      </div>
      <div className="info">{winningMessage || message}</div>
      <button id="btn" onClick={restart}>Restart</button>
    </div>
  );
}
 
export default TicTacToe;