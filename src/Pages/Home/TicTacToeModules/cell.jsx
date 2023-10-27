/* eslint-disable react/prop-types */
const Cell = ({id, cell, setCells, turn, setTurn,cells,winningMessage,setWinningMessage}) => {
const checkWin = () => {
  const winningCombos = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]
  ]
    winningCombos.forEach(array => {
      let circleWins = array.every(cell => cells[cell] === "O")
      if(circleWins) {
        setWinningMessage("Circle Wins!")
        return
      }
    })
    winningCombos.forEach(array => {
      let crossWins = array.every(cell => cells[cell] === "X")
      if(crossWins) {
        setWinningMessage("Cross Wins!")
        return
      }
    })
}
const checkForDraw = (cells) => {
 let Draw = cells.every((cell) => cell !== '') && !checkWin(cells);
 if(Draw){
  setWinningMessage("Draw!")
  return
 }
};
  const handleClick = () => {
    console.log(winningMessage)
      if(cells[id] !== "" || winningMessage !== null) return
      

    // for(let i = 0; i < cells.length; i++){
      if(turn === "O"){
        const newCells = cells
        newCells[id] = "O"
        setCells(newCells)
        // handleCellChange("O")
        setTurn("X")
      }else{
        const newCells = cells
        newCells[id] = "X"
        setCells(newCells)
        // handleCellChange("X")
        setTurn("O")
      }
      checkWin()
      checkForDraw(cells)
    // }
    
      
    
  }

  // const handleCellChange = (className) => {
  //   const nextCells = cells.map((cell,index)=>{
  //     if(index === id) {
  //       return className
  //     }else {
  //       return cell
  //     }
  //   })
  //   setCells(nextCells)
  // }
  return (
    <div className="square" id={id} onClick={handleClick}>
      <div className="cell-item">{cell}</div>
    </div>
  );
}
 
export default Cell;