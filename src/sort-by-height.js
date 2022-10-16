const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let arrOfNums = []

  arr.forEach((num) => {
    if(num !== -1) arrOfNums.push(num)
  })
  arrOfNums.sort((a, b) => a - b)  

  let index = 0
    let result = []
    arr.map(num => {
      if(num !== -1) {
        num = arrOfNums[index]
        index++
      }
      result.push(num)
    })

    return result
}

module.exports = {
  sortByHeight
};
