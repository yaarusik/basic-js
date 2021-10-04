import { NotImplementedError } from "../extensions/index.js";

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
export default function isMAC48Address(str) {
  let newStr = str.split("-");
  for (let i = 0; i < newStr.length; i++) {
    if (newStr[i].length == 2) {
      for (let j = 0; j < newStr[i].length; j++) {
        if (
          !/[A-F]/.test(newStr[i].charAt(j)) &&
          !/[0-9]/.test(newStr[i].charAt(j))
        ) {
          return false;
        }
      }
    } else {
      return false;
    }
  }
  return true;
}
