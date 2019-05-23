const initialState = {
  isSolved: false,
  isStarted: false,
  pieces: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
  moves: 0,
  emptyPiece: 15
};

export const puzzle = (state = initialState, { type, payload }) => {
  switch (type) {
    case "SWAP_PIECE":
      const { pieceIndex, emptyIndex } = payload;
      let pieces = [...state.pieces];
      // assign the pieces to be swapped to the index of the other
      [pieces[emptyIndex], pieces[pieceIndex]] = [
        pieces[pieceIndex],
        pieces[emptyIndex]
      ];
      return { ...state, pieces, isEmptyPiece: pieceIndex };

    default:
      return state;
  }
};

export default puzzle;
