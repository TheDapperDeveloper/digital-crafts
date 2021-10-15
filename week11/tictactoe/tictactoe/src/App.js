import { BoardContainer, CellContainer, MessageContainer, RestartButton, WinnerMessage } from "./styled-components/board";

import "./Style.css";

function App() {
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
