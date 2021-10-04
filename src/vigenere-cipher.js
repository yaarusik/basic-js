import { NotImplementedError } from "../extensions/index.js";

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
export default class VigenereCipheringMachine {
  constructor(x = true) {
    this.x = x;
    this.start = 65;
    this.end = 90;
  }
  encrypt(message, key) {
    let arr = [];
    let count = 0;

    if (message == null || key == null) {
      throw new Error("Incorrect arguments!");
    }
    let keyUp = key.toUpperCase();
    let newMessage = message.toUpperCase();
    for (let i = 0; i < newMessage.length; i++) {
      if (
        newMessage.charCodeAt(i) >= this.start &&
        newMessage.charCodeAt(i) <= this.end
      ) {
        arr.push(
          String.fromCharCode(
            ((newMessage.charCodeAt(i) +
              keyUp.charCodeAt(count % key.length) -
              130) %
              26) +
              this.start
          )
        );
        count++;
      } else {
        arr.push(newMessage[i]);
      }
    }
    return this.x ? arr.join("") : arr.reverse().join("");
  }
  decrypt(message, key) {
    let arr = [];
    let count = 0;
    if (message == null || key == null) {
      throw new Error("Incorrect arguments!");
    }
    let keyUp = key.toUpperCase();
    let newMessage = message.toUpperCase();
    for (let i = 0; i < newMessage.length; i++) {
      if (
        newMessage.charCodeAt(i) >= this.start &&
        newMessage.charCodeAt(i) <= this.end
      ) {
        arr.push(
          String.fromCharCode(
            ((newMessage.charCodeAt(i) +
              26 -
              keyUp.charCodeAt(count % key.length)) %
              26) +
              this.start
          )
        );
        count++;
      } else {
        arr.push(newMessage[i]);
      }
    }
    return this.x ? arr.join("") : arr.reverse().join("");
  }
}
