import { BoardContainer, CellContainer, MessageContainer, RestartButton, WinnerMessage } from "./styled-components/board";

import "./Style.css";

function App(value, onClick) {

  const X_CLASS = 'x'
  const CIRCLE_CLASS = 'circle'
  let circleTurn

  cellElements.forEach
   
  const handleClick = (e) => {
    const cell = e.target
    const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS
    placeMark(cell, currentClass)
  }

  function placeMark (cell, currentClass) {
    cell.classList.add(currentClass)
  }

  return (
    <>
    <BoardContainer className="board">
      <CellContainer className="cell"></CellContainer>
      <CellContainer className="cell"></CellContainer>
      <CellContainer className="cell"></CellContainer>
      <CellContainer className="cell"></CellContainer>
      <CellContainer className="cell"></CellContainer>
      <CellContainer className="cell"></CellContainer>
      <CellContainer className="cell"></CellContainer>
      <CellContainer className="cell"></CellContainer>
      <CellContainer className="cell"></CellContainer>
    </BoardContainer>
    {/* <MessageContainer class="winner">
      <WinnerMessage class="winner-message">X WINS!</WinnerMessage>
      <RestartButton class="restartButton">Restart</RestartButton>
    </MessageContainer> */}
    </>
  );
}

export default App;
