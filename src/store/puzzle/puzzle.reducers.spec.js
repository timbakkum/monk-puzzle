import * as constants from "./puzzle.constants";
import { initialState, puzzle } from "./puzzle.reducers";
import puzzleHelpers from "./../../helpers/puzzle-grid.helpers";

const mockedShuffledPieces = [
  13,
  9,
  1,
  7,
  0,
  8,
  5,
  15,
  10,
  3,
  14,
  4,
  2,
  12,
  6,
  11
];

const mockSwapPieces = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 14];

jest.mock("./../../helpers/puzzle-grid.helpers");
puzzleHelpers.shufflePieces = jest.fn().mockReturnValue(mockedShuffledPieces);
puzzleHelpers.swapPiece = jest.fn().mockReturnValue(mockSwapPieces);

describe("puzzle reducers", () => {
  const actions = [
    {
      action: { type: constants.START_PUZZLE },
      expected: { ...initialState, moves: 0, isStarted: true, isSolved: false }
    },
    {
      action: { type: constants.START_EASY_MODE },
      expected: {
        ...initialState,
        moves: 0,
        isStarted: true,
        isSolved: false,
        pieces: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 14]
      }
    },
    {
      action: {
        type: constants.MOVE_PIECE
      },
      expected: {
        ...initialState,
        moves: initialState.moves + 1
      }
    },
    {
      action: {
        type: constants.SWAP_PIECE,
        payload: {
          pieceIndex: 14,
          emptyIndex: 15
        }
      },
      expected: {
        emptyPiece: 15,
        isSolved: false,
        isStarted: false,
        moves: 0,
        pieces: mockSwapPieces
      }
    },
    {
      action: {
        type: constants.SHUFFLE_PIECES
      },
      expected: {
        ...initialState,
        pieces: mockedShuffledPieces
      }
    },
    {
      action: {
        type: constants.WIN_PUZZLE
      },
      expected: {
        ...initialState,
        isSolved: true,
        isStarted: false
      }
    },
    {
      action: {
        type: "SOME_ACTION_WE_DONT_LISTEN_FOR"
      },
      expected: {
        ...initialState
      }
    }
  ];

  actions.forEach(element => {
    describe(`${element.action.type} action reducer`, () => {
      it("updates state correctly", () => {
        const result = puzzle(initialState, element.action);
        expect(result).toEqual(element.expected);
      });
    });
  });
});
