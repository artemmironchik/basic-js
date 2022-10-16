const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const str = n.toString()
  let numbers = []
  for(let i = 0; i < str.length; i++) {
    if(i === 0) numbers.push(+str.slice(1))
    else if(i === str.length - 1) numbers.push(+str.slice(0, str.length - 1))
    else numbers.push(+(str.slice(0, i) + str.slice(i + 1)))
  }

  return Math.max(...numbers)
}

module.exports = {
  deleteDigit
};
