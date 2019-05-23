import React from "react";
import styled from "styled-components";

const StyledPiece = styled.div`
  box-shadow: inset 0px 0px 0px 2px rgba(0, 0, 0, 1);
  text-align: center;
  width: 100px;
  height: 100px;
  position: absolute;
  transform: translate(
    ${props => props.column * 100}%,
    ${props => props.row * 100}%
  );
  background: ${props => (props.isEmpty ? "red" : "white")};
`;

export default function Piece({
  index,
  pieceNumber,
  position: { row, column },
  isEmpty,
  handlePieceClick
}) {
  return (
    <StyledPiece
      row={row}
      column={column}
      isEmpty={isEmpty}
      onClick={() => handlePieceClick(index)}
    >
      {`i: ${index}, pNo: ${pieceNumber}`}
    </StyledPiece>
  );
}
