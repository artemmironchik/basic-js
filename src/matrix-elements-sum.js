const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let rowLen = matrix[0].length
  matrix = matrix.flat()
  let sum = 0
  for(let i = 0; i < matrix.length; i++) {
    if(matrix[i - rowLen] === 0) continue
    sum += matrix[i]
  }

  return sum
}

module.exports = {
  getMatrixElementsSum
};
