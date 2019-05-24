import * as constants from "./puzzle.constants";

export const shufflePieces = () => {
  return {
    type: constants.SHUFFLE_PIECES
  };
};

export const startPuzzle = () => {
  return {
    type: constants.START_PUZZLE
  };
};

export const startEasyMode = () => {
  return {
    type: constants.START_EASY_MODE
  };
};

export const resetPuzzle = () => {
  return {
    type: constants.RESET_PUZZLE
  };
};

export const movePiece = pieceIndex => {
  return {
    type: constants.MOVE_PIECE,
    payload: {
      pieceIndex
    }
  };
};

export const swapPiece = (pieceIndex, emptyIndex) => {
  return {
    type: constants.SWAP_PIECE,
    payload: {
      pieceIndex,
      emptyIndex
    }
  };
};

export const winPuzzle = () => {
  return {
    type: constants.WIN_PUZZLE
  };
};
