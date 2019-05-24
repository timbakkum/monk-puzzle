import { createSelector } from "reselect";

export const piecesSelector = state => state.puzzle.pieces;
export const emptyPieceNumberSelector = state => state.puzzle.emptyPiece;

export const emptyPieceIndexSelector = createSelector(
  [piecesSelector, emptyPieceNumberSelector],
  (pieces, emptyPieceNumber) => pieces.indexOf(emptyPieceNumber)
);

export default {
  piecesSelector,
  emptyPieceNumberSelector,
  emptyPieceIndexSelector
};
