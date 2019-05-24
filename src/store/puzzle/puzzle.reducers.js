import { shufflePieces } from "../../helpers/puzzle-grid.helpers";

const initialState = {
  isSolved: false,
  isStarted: false,
  pieces: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
  moves: 0,
  emptyPiece: 15
};

export const puzzle = (state = initialState, { type, payload }) => {
  switch (type) {
    case "START_PUZZLE":
      return {
        ...state,
        moves: 0,
        isStarted: true,
        isSolved: false
      };
    case "START_EASY_MODE":
      return {
        ...state,
        moves: 0,
        isStarted: true,
        isSolved: false,
        pieces: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 14]
      };
    case "MOVE_PIECE":
      return {
        ...state,
        moves: state.moves + 1
      };
    case "SWAP_PIECE":
      const { pieceIndex, emptyIndex } = payload;
      const pieces = [...state.pieces];
      // assign the pieces to be swapped to the index of the other piece
      [pieces[emptyIndex], pieces[pieceIndex]] = [
        pieces[pieceIndex],
        pieces[emptyIndex]
      ];

      return { ...state, pieces, isEmptyPiece: pieceIndex };
    case "SHUFFLE_PIECES":
      const shuffledPieces = shufflePieces([...state.pieces]);
      return {
        ...state,
        pieces: shuffledPieces
      };
    case "WIN_PUZZLE":
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
