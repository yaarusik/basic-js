import { NotImplementedError } from "../extensions/index.js";

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
export default function dateSample(string) {
  if (typeof string !== "string" || !/^[1-9]|1[0,1,2,3,4,5]/.test(string)) {
    return false;
  }

  if (+string > 15) return false;
  let math = Math.log(MODERN_ACTIVITY / +string);
  const k = Math.log(2) / HALF_LIFE_PERIOD;
  const m = math / k;
  return Math.ceil(m);
}
