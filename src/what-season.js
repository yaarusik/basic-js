import { NotImplementedError } from "../extensions/index.js";

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
export default function getSeason(date) {
  if (date === null || date === undefined) {
    return "Unable to determine the time of year!";
  }

  if (
    !date ||
    !(date instanceof Date) ||
    date.toString !== new Date().toString
  ) {
    throw new Error("Invalid date!");
  }

  if (date.getMonth() >= 2 && date.getMonth() < 5) {
    return "spring";
  } else if (date.getMonth() >= 5 && date.getMonth() < 8) {
    return "summer";
  } else if (date.getMonth() >= 8 && date.getMonth() < 11) {
    return "fall";
  } else if (date.getMonth() == 11 || date.getMonth() < 2) {
    return "winter";
  }
}
