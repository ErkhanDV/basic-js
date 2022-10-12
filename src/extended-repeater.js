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
 function repeater(str, options) {
  const defaultOptions = { repeatTimes: 1, separator: '+', addition: '', additionRepeatTimes: 1, additionSeparator: '|' };
  for (const key in defaultOptions) {
    if (!options[key] && options.addition != false && options.addition !== null) {
      options[key] = defaultOptions[key];
    }
  }
  let result = [];
  for (let i = 1; i <= options.repeatTimes; i++) {
    let additional = [];
    for (let k = 1; k <= options.additionRepeatTimes; k++) {
      additional.push(String(options.addition));
    }
    result.push(str + additional.join(options.additionSeparator));
  }
  return result.join(options.separator);
}

module.exports = {
  repeater
};
