import {
  hasEmptyAdjacentPiece,
  isSolved
} from "../helpers/puzzle-grid.helpers";
import {
  swapPiece,
  shufflePieces,
  winPuzzle
} from "../store/puzzle/puzzle.actions";

export const puzzleMiddleware = store => next => action => {
  switch (action.type) {
    case "MOVE_PIECE":
      const state = store.getState();
      // TODO refactor below logic into selector function
      const adjacentIndex = state.puzzle.pieces.indexOf(
        state.puzzle.emptyPiece
      );
      const shouldSwap = hasEmptyAdjacentPiece(
        action.payload.pieceIndex,
        adjacentIndex
      );

      if (shouldSwap) {
        store.dispatch(swapPiece(action.payload.pieceIndex, adjacentIndex));
      }
      break;
    case "SWAP_PIECE":
      const swapResult = next(action);
      const newState = store.getState();

      const isPuzzleSolved = isSolved(newState.puzzle.pieces);
      if (isPuzzleSolved) {
        store.dispatch(winPuzzle());
      }
      return swapResult;

    case "START_PUZZLE":
      store.dispatch(shufflePieces());
      break;
    default:
      break;
  }
  return next(action);
};

export default puzzleMiddleware;
