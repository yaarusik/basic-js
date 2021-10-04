import { NotImplementedError } from "../extensions/index.js";

/**
 * Implement chainMaker object according to task description
 *
 */
export default {
  arr: [],

  getLength() {
    return this.arr.length;
  },

  addLink(value) {
    this.arr.push(String(value));
    return this;
  },

  removeLink(pos) {
    if (typeof pos !== "number" || pos > this.arr.length || pos < 1) {
      this.arr.length = 0;
      throw new Error("You can't remove incorrect link!");
    }
    this.arr.splice(pos - 1, 1);
    return this;
  },

  reverseChain() {
    this.arr.reverse();
    return this;
  },

  finishChain() {
    let finish = `( ${this.arr.join(" )~~( ")} )`;
    this.arr.length = 0;
    return finish;
  },
};
