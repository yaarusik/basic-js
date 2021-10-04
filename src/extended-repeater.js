import { NotImplementedError } from "../extensions/index.js";

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
   let strAdd = [];
   let strR = [];
   for(let i = 0; i < (options.additionRepeatTimes || 1); i++){
   strAdd.push(options.addition);}
   let resStrAdd = strAdd.join(options.additionSeparator || ‘|’);
   for(let i = 0; i < (options.repeatTimes || 1); i++){
   strR.push(str + resStrAdd);}
   return strR.join(options.separator || ‘+’);
}
// console.log(
//   repeater("la", {
//     repeatTimes: 3,
//     separator: "s",
//     addition: "+",
//     additionRepeatTimes: 1,
//   })
// );
