import { NotImplementedError } from "../extensions/index.js";

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  let newN = n;
  let min = 9;
  while (n) {
    if (n % 10 < min) {
      min = Math.floor(n % 10);
    }
    n = Math.floor(n / 10);
  }
  return +newN.toString().replace(min, '');
}


