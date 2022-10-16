const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  finishedChain: [],
  getLength() {
    return this.chain.length
  },
  addLink(value) {
    if(value === null) value = 'null'
    this.chain.push(value.toString())
    return this
  },
  removeLink(position) {
    if(!this.chain[position - 1]) {
      this.chain = []
      throw new Error('You can\'t remove incorrect link!')
    }
    else {
      this.chain.splice(position - 1, 1)
      return this
    }
  },
  reverseChain() {
    this.chain = this.chain.reverse()
    return this
  },
  finishChain() {
    this.finishedChain = this.chain
    this.chain = []
    return this.finishedChain.map(link => link = `( ${link} )`).join('~~')
  }
};

module.exports = {
  chainMaker
};
