const { NotImplementedError } = require('../extensions/index.js');

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
function repeater(str, { repeatTimes = 1, separator = '+', addition = '', additionRepeatTimes = 1, additionSeparator = '|'}) {
  if(str === null) str = 'null'
  if(addition === null) addition = 'null'
  let additionalWords = []
  for(let i = 0; i < additionRepeatTimes; i++) {
    additionalWords.push(addition)
  }
  additionalWords = additionalWords.join(additionSeparator)
  let finalWord = []
  for(let i = 0; i < repeatTimes; i++) {
    finalWord.push(str)
    finalWord[i] += (additionalWords)
  }

  return finalWord.join(separator)
}

module.exports = {
  repeater
};
