const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
 function getCommonCharacterCount(s1, s2) {
  let count = 0;
  const charObj = string => {
    let obj = {};
    for (let char of string) {
      if (obj[char]) {
        obj[char]++
      } else {
        obj[char] = 1;
      }
    }
    return obj;
  }
  const s1obj = charObj(s1);
  const s2obj = charObj(s2);
  for (let key in s1obj) {
    if (s2obj[key]) {
      count += Math.min(s2obj[key], s1obj[key]);
    }
  }
  return count;
}

module.exports = {
  getCommonCharacterCount
};
