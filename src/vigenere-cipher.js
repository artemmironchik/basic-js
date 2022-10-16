const { NotImplementedError } = require('../extensions/index.js');

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
class VigenereCipheringMachine {
  constructor(booleanValue = true) {
    this.booleanValue = booleanValue
  }
  encrypt(message, key) {
    if(!message || !key) {
      throw new Error('Incorrect arguments!')
    }

    let lettersArr = []
    for(let i = 0; i < message.length; i++) {
      if(/[a-zA-Z]/.test(message[i])) lettersArr.push(message[i])
    }
    lettersArr = lettersArr.join('').toUpperCase()

    let keyMessage = ''
    for(let i = 0; i < lettersArr.length / key.length + 1; i++) {
      keyMessage += key
    }
    keyMessage = keyMessage.slice(0, lettersArr.length).toUpperCase()

    let encryptedArr = []
    for(let i = 0; i < keyMessage.length; i++) {
      let indexOfLetter = (lettersArr.charCodeAt(i) + keyMessage.charCodeAt(i) - 130) % 26
      encryptedArr.push(String.fromCodePoint(65 + indexOfLetter))
    }

    let count = 0
    let encrypted = []
    message.split('').map(char => {
      if (/[a-zA-Z]/.test(char)) {
        char = encryptedArr[count];
        count++;
      }
      encrypted.push(char);
    })

    return this.booleanValue ? encrypted.join('') : encrypted.reverse().join('')
  }
  decrypt(encryptedMessage, key) {
    if(!encryptedMessage || !key) {
      throw new Error('Incorrect arguments!')
    }

    let lettersArr = []
    for(let i = 0; i < encryptedMessage.length; i++) {
      if(/[a-zA-Z]/.test(encryptedMessage[i])) lettersArr.push(encryptedMessage[i])
    }
    lettersArr = lettersArr.join('').toUpperCase()

    let keyMessage = ''
    for(let i = 0; i < lettersArr.length / key.length + 1; i++) {
      keyMessage += key
    }
    keyMessage = keyMessage.slice(0, lettersArr.length).toUpperCase()

    let decryptedArr = []
    for(let i = 0; i < keyMessage.length; i++) {
      let indexOfLetter = (lettersArr.charCodeAt(i) - keyMessage.charCodeAt(i)) % 26
      if(indexOfLetter < 0) indexOfLetter = indexOfLetter + 26
      decryptedArr.push(String.fromCodePoint(65 + indexOfLetter))
    }

    let count = 0
    let decrypted = []
    encryptedMessage.split('').map(char => {
      if (/[a-zA-Z]/.test(char)) {
        char = decryptedArr[count];
        count++;
      }
      decrypted.push(char);
    })

    return this.booleanValue ? decrypted.join('') : decrypted.reverse().join('')
  }
}

module.exports = {
  VigenereCipheringMachine
};
