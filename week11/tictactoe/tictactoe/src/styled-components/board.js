import styled from "styled-components";

export const BoardContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  justify-content: center;
  align-content: center;
  justify-items: center;
  align-items: center;
  grid-template-columns: repeat(3, auto);
`;

export const CellContainer = styled.div`
  width: 100px;
  height: 100px;
  border: 2px solid #87aca3;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
`;

export const MessageContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(12, 20, 70, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const WinnerMessage = styled.div`
font-size: 100px;
color: white;
`

export const RestartButton = styled.button `
    width: 100px;
    height: 50px;
    font-size: large;
`
