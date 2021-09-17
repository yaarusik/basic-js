import { NotImplementedError } from "../extensions/index.js";

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(names) {
  if (!Array.isArray(names)) {
    return false;
  } else {
    return names
      .filter((el) => typeof el == "string")
      .map((el) => el.replace(/\s+/g, ""))
      .map((el) => el[0].toUpperCase())
      .sort()
      .join("");
  }
}
