import { NotImplementedError } from "../extensions/index.js";

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats(arr) {
  if (!arr.length) return {};
  let obj = {};
  let string = "";
  let maxLengthEl = arr.sort((a, b) => b.length - a.length);
  let newArr = maxLengthEl[0].split(".").reverse();
  for (let i = 0; i < newArr.length; i++) {
    let count = 0;
    string += "." + newArr[i];
    for (let j = 0; j < arr.length; j++) {
      if (arr[j].includes(newArr[i])) {
        count++;
      }
    }
    obj[string] = count;
  }
  return obj;
}
