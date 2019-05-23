import { hasEmptyAdjacentPiece, isSolved } from "./puzzle-grid.helpers";

describe("isSolved", () => {
  it("returns false if one of the indices does not match the pieces number", () => {
    const result = isSolved([
      0,
      2,
      1,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15
    ]);
    expect(result).toEqual(false);
  });

  it("returns true if all of the indices match the pieces numbers", () => {
    const result = isSolved([
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15
    ]);
    expect(result).toEqual(true);
  });
});

describe("adjacent empty piece helper", () => {
  it("returns false if index is equal to empty piece index", () => {
    const result = hasEmptyAdjacentPiece(0, 0);
    expect(result).toEqual(false);
  });

  it("returns false if empty piece index is outside defined grid", () => {
    const result = hasEmptyAdjacentPiece(0, -4);
    const anotherResult = hasEmptyAdjacentPiece(12, 16);
    expect(result).toEqual(false);
    expect(anotherResult).toEqual(false);
  });

  it("returns false if piece is not in an adjacent column", () => {
    const result = hasEmptyAdjacentPiece(14, 2);
    expect(result).toEqual(false);
  });

  it("returns false if piece is not in an adjacent row", () => {
    const result = hasEmptyAdjacentPiece(9, 11);
    expect(result).toEqual(false);
  });

  it("returns true if empty piece is to left and current piece is not on outermost left border", () => {
    const result = hasEmptyAdjacentPiece(1, 0);
    expect(result).toEqual(true);
  });

  it("returns false if empty piece is to left and current piece is on outermost left border", () => {
    const result = hasEmptyAdjacentPiece(4, 3);
    expect(result).toEqual(false);
  });

  it("returns true if empty piece is to right and current piece is not on outermost right border", () => {
    const result = hasEmptyAdjacentPiece(2, 3);
    expect(result).toEqual(true);
  });

  it("returns false if empty piece is to left and current piece is on outermost left border", () => {
    const result = hasEmptyAdjacentPiece(7, 8);
    expect(result).toEqual(false);
  });

  it("returns true if empty piece is above and current piece is on not top row", () => {
    const result = hasEmptyAdjacentPiece(5, 1);
    expect(result).toEqual(true);
  });

  it("returns true if empty piece is below and current piece is not on bottom row", () => {
    const result = hasEmptyAdjacentPiece(10, 14);
    expect(result).toEqual(true);
  });
});
