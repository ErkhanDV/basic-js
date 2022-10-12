const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(...args) {
  // throw new NotImplementedError('Not implemented');
  let cats = 0;
  args.flat(3).forEach( elem => {
    if (elem == '^^') {
      cats++;
    }
  })
  return cats;
}

module.exports = {
  countCats
};
