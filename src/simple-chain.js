const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length
  },

  addLink(value) {
    this.chain.push(`( ${value} )`)
    return this
  },

  removeLink(position) {
    if (!Number.isInteger(position)) {
      this.chain = [];
      throw new Error();
    } else {
      this.chain.splice((position - 1), 1);
    }
  },

  reverseChain() {
    this.chain.reverse()
    return this
  },

  finishChain() {
    let result = this.chain.join('~~')
    this.chain = []
    return result
  }
};

module.exports = chainMaker;
