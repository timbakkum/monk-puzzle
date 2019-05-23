import React from "react";
import { connect } from "react-redux";
import Piece from "./Piece";
import { getPiecePosition } from "./helpers/puzzle-grid.helpers";
import { movePiece } from "./store/puzzle/puzzle.actions";

export function Puzzle({ pieces, emptyIndex, handlePieceClick }) {
  return (
    <div>
      {pieces.map((p, i) => (
        <Piece
          key={p}
          index={i}
          pieceNumber={p}
          position={getPiecePosition(i)}
          isEmpty={emptyIndex === i}
          handlePieceClick={handlePieceClick}
        />
      ))}
    </div>
  );
}

const mapStateToProps = state => {
  console.log(state.puzzle.pieces.indexOf(state.puzzle.emptyPiece));
  return {
    // TODO refactor to selector fn as well?
    pieces: state.puzzle.pieces,
    // TODO refactor below to selector fn
    emptyIndex: state.puzzle.pieces.indexOf(state.puzzle.emptyPiece)
  };
};

const mapDispatchToProps = dispatch => ({
  handlePieceClick: pieceIndex => dispatch(movePiece(pieceIndex))
});

const connectedPuzzle = connect(
  mapStateToProps,
  mapDispatchToProps
)(Puzzle);

export default connectedPuzzle;
