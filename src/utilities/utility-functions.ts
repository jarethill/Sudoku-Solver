export const cloneBoard = (board: number[][]) => board.map((arr: number[]) => arr.slice());

export default {
  cloneBoard,
};
