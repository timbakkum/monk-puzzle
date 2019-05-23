import { hasEmptyAdjacentPiece } from "../helpers/puzzle-grid.helpers";
import { swapPiece } from "../store/puzzle/puzzle.actions";

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

    default:
      break;
  }
  next(action);
};

export default puzzleMiddleware;
