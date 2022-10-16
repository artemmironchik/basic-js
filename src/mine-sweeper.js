const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let result = matrix.map(row => row.map(elem => elem = 0))

  for(let i = 0; i < matrix.length; i++) {
    for(let j = 0; j < matrix[i].length; j++ ) {
      if(i !== 0 && matrix[i - 1][j] === true) result[i][j]++
      if(i !== matrix.length - 1 && matrix[i + 1][j] === true) result[i][j]++
      if(j !== 0 && matrix[i][j - 1] === true) result[i][j]++
      if(j !== matrix[i].length - 1 && matrix[i][j + 1] === true) result[i][j]++

      if(i !== 0 && j !== 0 && matrix[i - 1][j - 1] === true) result[i][j]++
      if(i !== 0 && j !== matrix[i].length - 1 && matrix[i - 1][j + 1] === true) result[i][j]++
      if(i !== matrix.length - 1 && j !== 0 && matrix[i + 1][j - 1] === true) result[i][j]++
      if(i !== matrix.length - 1 && j !== matrix.length[i] - 1 && matrix[i + 1][j + 1] === true) result[i][j]++
    }
  }

  return result
  // return matrix.map((row, rowIndex) => {
  //   row.map((elem, index) => {
  //     if(matrix[rowIndex][index + 1] === true) count++
  //     if(matrix[rowIndex][index - 1] === true) count++
  //     if(rowIndex > 0 && rowIndex < matrix.length - 1) {
  //       if(matrix[rowIndex - 1][index] === true) count++
  //       if(matrix[rowIndex + 1][index] === true) count++
  //     }
  //     elem = count
  //     count = 0
  //   })
  // })
}

module.exports = {
  minesweeper
};
