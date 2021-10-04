import { NotImplementedError } from "../extensions/index.js";

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
export default function sortByHeight(arr) {
  let count = 0;
  let newArr = arr.filter((item) => item > 0).sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      arr[i] = newArr[count];
      count++;
    }
  }
  return arr;
}
