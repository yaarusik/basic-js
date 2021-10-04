import { NotImplementedError } from "../extensions/index.js";

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
export default function minesweeper(matrix) {
  let a = [];
  let count = 0;
  for (let i = 0; i < matrix.length; i++) {
    let b = [];
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j + 1] == true) {
        count++;
      }
      if (matrix[i][j - 1] == true) {
        count++;
      }

      if (i + 1 < matrix.length) {
        if (matrix[i + 1][j + 1] == true) {
          count++;
        }
        if (matrix[i + 1][j - 1] == true) {
          count++;
        }
        if (matrix[i + 1][j] == true) {
          count++;
        }
      }

      if (i - 1 >= 0) {
        if (matrix[i - 1][j] == true) {
          count++;
        }
        if (matrix[i - 1][j + 1] == true) {
          count++;
        }
        if (matrix[i - 1][j - 1] == true) {
          count++;
        }
      }

      if (matrix[i][j] == true) {
        count = 1;
      }
      b.push(count);
      count = 0;
    }
    a.push(b);
  }
  return a;
}
