import { toast } from "react-toastify";
import {
  hasEmptyAdjacentPiece,
  isSolved
} from "../helpers/puzzle-grid.helpers";
import {
  swapPiece,
  shufflePieces,
  winPuzzle
} from "../store/puzzle/puzzle.actions";
import * as constants from "./../store/puzzle/puzzle.constants";
import { emptyPieceIndexSelector } from "./../store/puzzle/puzzle.selectors";

export const puzzleMiddleware = store => next => action => {
  switch (action.type) {
    case constants.MOVE_PIECE:
      const state = store.getState();
      const adjacentIndex = emptyPieceIndexSelector(state);
      const shouldSwap = hasEmptyAdjacentPiece(
        action.payload.pieceIndex,
        adjacentIndex
      );

      if (shouldSwap) {
        store.dispatch(swapPiece(action.payload.pieceIndex, adjacentIndex));
      } else {
        toast.error("🚫Invalid move!", {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true
        });
      }
      break;
    case constants.SWAP_PIECE:
      const swapResult = next(action);
      const newState = store.getState();

      const isPuzzleSolved = isSolved(newState.puzzle.pieces);
      if (isPuzzleSolved) {
        store.dispatch(winPuzzle());
      }
      return swapResult;
    case constants.WIN_PUZZLE:
      toast.success("🏆 A winner is you!", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
      });
      break;
    case constants.START_PUZZLE:
      store.dispatch(shufflePieces());
      break;
    default:
      break;
  }
  return next(action);
};

export default puzzleMiddleware;
