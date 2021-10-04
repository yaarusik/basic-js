import { NotImplementedError } from "../extensions/index.js";

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
export default function getSumOfDigits(n) {
  let current = 0;
  let result = 0;
  while (n) {
    current += n % 10;
    n = Math.floor(n / 10);
  }
  while (current > 0) {
    result += current % 10;
    current = Math.floor(current / 10);
  }
  return result;
}
