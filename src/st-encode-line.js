import { NotImplementedError } from "../extensions/index.js";

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
  let count = 1;
  let result = "";
  for (let i = 1; i <= str.length; i++) {
    if (str[i - 1] == str[i]) {
      count++;
    } else {
      if (count > 1) {
        result += count + str[i - 1];
        count = 1;
      } else {
        result += str[i - 1];
      }
    }
  }
  return result;
}
