import React, { useEffect } from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";
import { PUZZLE_SIZE, PUZZLE_COLUMNS, PUZZLE_ROWS } from "../../constants";
import monksImage from "./monks.jpg";

const StyledPiece = styled.div`
  position: absolute;
  box-shadow: ${props =>
    props.isEmpty ? "none" : "inset 0px 0px 0px 1px rgba(0, 0, 0, 1)"};
  text-align: center;
  width: ${PUZZLE_SIZE / PUZZLE_COLUMNS}px;
  height: ${PUZZLE_SIZE / PUZZLE_ROWS}px;
  background-image: url(${props => (props.isEmpty ? "none" : monksImage)});
  background-repeat: no-repeat;
  background-position: ${props => props.intendedColumn * -125}px
    ${props => props.intendedRow * -125}px;
  opacity: ${props => (props.isActive ? 1 : 0.5)};
  transition: opacity 0.5s ease;
  cursor: ${props => (props.isActive ? "pointer" : "not-allowed")};
`;

const AnimatedPiece = animated(StyledPiece);
const getTransformStyles = (x, y) => {
  return {
    transform: `translate3d(${x}, ${y}, 0)`
  };
};

export default function Piece({
  index,
  pieceNumber,
  position: { row, column },
  intendedPosition: { row: intendedRow, column: intendedColumn },
  isEmpty,
  handlePieceClick,
  isActive
}) {
  const x = `${column * 100}%`;
  const y = `${row * 100}%`;
  const [props, set] = useSpring(() => getTransformStyles(x, y));

  useEffect(() => {
    set(getTransformStyles(x, y));
  });

  return (
    <AnimatedPiece
      style={props}
      intendedRow={intendedRow}
      intendedColumn={intendedColumn}
      isEmpty={isEmpty}
      onClick={() => {
        isActive && handlePieceClick(index);
      }}
      pieceNumber={pieceNumber}
      isActive={isActive}
    />
  );
}
