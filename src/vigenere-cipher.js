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
 const alphabet = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
]

class VigenereCipheringMachine {
  constructor(type = true) {
    this.type = type;
  }
  encrypt(string, secretWord) {
    if (!string || !secretWord) {
      throw new Error('Incorrect arguments!');
    }
    const str = string.toLowerCase();
    const word = secretWord.toLowerCase();
    let newStr = '';
    for (let i = 0, k = 0; i < str.length; i++, k++) {
      if (k == word.length) {
        k = k - word.length;
      }
      if (alphabet.indexOf(str[i]) != -1) {
        const index = alphabet.indexOf(str[i]) + alphabet.indexOf(word[k]) > 25 ?
          alphabet.indexOf(str[i]) + alphabet.indexOf(word[k]) - 26 :
          alphabet.indexOf(str[i]) + alphabet.indexOf(word[k]);
        newStr += alphabet[index];
      } else {
        newStr += str[i];
        k--;
      }  
    }
    return this.type == true ? newStr.toUpperCase() : newStr.toUpperCase().split('').reverse().join('');
  }
  decrypt(string, secretWord) {
    if (!string || !secretWord) {
      throw new Error('Incorrect arguments!');
    }
    const str = string.toLowerCase();
    const word = secretWord.toLowerCase();
    let newStr = '';
    for (let i = 0, k = 0; i < str.length; i++, k++) {
      if (k == word.length) {
        k = k - word.length;
      }
      if (alphabet.indexOf(str[i]) != -1) {
        const index = alphabet.indexOf(str[i]) - alphabet.indexOf(word[k]) < 0 ?
          alphabet.indexOf(str[i]) - alphabet.indexOf(word[k]) + 26 :
          alphabet.indexOf(str[i]) - alphabet.indexOf(word[k]);
        newStr += alphabet[index];
      } else {
        newStr += str[i];
        k--;
      }  
    }
    return this.type == true ? newStr.toUpperCase() : newStr.toUpperCase().split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
