const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let obj = {};
  const n = domains.map(elem => {
    return elem.split('.').reverse();
  })
  for (let i = 0; i < n.length; i++) {
    for (let j = 0; j < n[i].length; j++) {
      if (j == 0) {
        n[i][j] = '.' + n[i][j];
      } else {
        n[i][j] = n[i][j - 1] + '.' + n[i][j];
      }
    }
  }
  const result = n.map(elem => {
    const obj = {};
    elem.forEach( el => {
      obj[el] = 1;
    })
    return obj;
  })
  result.forEach(elem => {
    for (let key in elem) {
      obj[key] = obj[key] ? obj[key] + 1 : obj[key] = 1;
    }
  })
  return obj;
}

module.exports = {
  getDNSStats
};
