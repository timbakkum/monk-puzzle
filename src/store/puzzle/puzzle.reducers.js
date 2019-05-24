import { shufflePieces, swapPiece } from "./../../helpers/puzzle-grid.helpers";
import * as constants from "./puzzle.constants";

const initialState = {
  isSolved: false,
  isStarted: false,
  pieces: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
  moves: 0,
  emptyPiece: 15
};

export const puzzle = (state = initialState, { type, payload }) => {
  switch (type) {
    case constants.START_PUZZLE:
      return {
        ...state,
        moves: 0,
        isStarted: true,
        isSolved: false
      };
    case constants.START_EASY_MODE:
      return {
        ...state,
        moves: 0,
        isStarted: true,
        isSolved: false,
        pieces: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 14]
      };
    case constants.MOVE_PIECE:
      return {
        ...state,
        moves: state.moves + 1
      };
    case constants.SWAP_PIECE:
      const { pieceIndex, emptyIndex } = payload;
      const newPieces = swapPiece([...state.pieces], pieceIndex, emptyIndex);
      return { ...state, pieces: newPieces, isEmptyPiece: pieceIndex };
    case constants.SHUFFLE_PIECES:
      const shuffledPieces = shufflePieces([...state.pieces]);
      return {
        ...state,
        pieces: shuffledPieces
      };
    case constants.WIN_PUZZLE:
      return {
        ...state,
        isSolved: true,
        isStarted: false
      };
    default:
      return state;
  }
};

export default puzzle;
