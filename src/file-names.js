const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
 function renameFiles(names) {
  let result = [];
  names.forEach((elem, index) => {
      if (index == 0) {
        result.push(elem);
      } else {
        for (let i = 0; i < index; i++) {
          if (result[i] == elem) {
            elem += '(1)';
          }
        }
        const ind = elem.indexOf('(1)(1)(1)');
        if (ind != -1) {
          elem = elem.slice(0, ind) + '(2)';
        }
        result.push(elem);
      }
    })
    return result;
}

module.exports = {
  renameFiles
};
