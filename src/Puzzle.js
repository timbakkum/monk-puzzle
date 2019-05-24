import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Piece from "./Piece";
import { getPiecePosition } from "./helpers/puzzle-grid.helpers";
import { movePiece } from "./store/puzzle/puzzle.actions";

const StyledPuzzle = styled.div`
  border: 1px solid black;
  width: 500px;
  height: 500px;
  margin: 20px auto;
  position: relative;
  background: white;
`;

export function Puzzle({ pieces, emptyIndex, handlePieceClick, isStarted }) {
  return (
    <StyledPuzzle>
      {pieces.map((p, i) => (
        <Piece
          key={p}
          index={i}
          pieceNumber={p}
          position={getPiecePosition(i)}
          // TODO intendedPosition is a shit name, rename this
          intendedPosition={getPiecePosition(p)}
          isEmpty={emptyIndex === i}
          handlePieceClick={handlePieceClick}
          isActive={isStarted}
        />
      ))}
    </StyledPuzzle>
  );
}

const mapStateToProps = state => {
  return {
    // TODO refactor to selector fn as well?
    pieces: state.puzzle.pieces,
    // TODO refactor below to selector fn
    emptyIndex: state.puzzle.pieces.indexOf(state.puzzle.emptyPiece),
    isStarted: state.puzzle.isStarted
  };
};

const mapDispatchToProps = dispatch => ({
  handlePieceClick: pieceIndex => dispatch(movePiece(pieceIndex))
});

const ConnectedPuzzle = connect(
  mapStateToProps,
  mapDispatchToProps
)(Puzzle);

export default ConnectedPuzzle;
