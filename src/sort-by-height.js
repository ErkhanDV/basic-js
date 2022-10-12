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
  function sortArr(a, b) {
    if(a > b){return 1};
    if(a === b){return 0};
    if(a < b){return -1};
  };
  
  let newArray = [];
    for(let i = 0; i < arr.length; i++){
      if(arr[i] !== -1){
        newArray.push(arr[i]);
      }
  };
  newArray.sort(sortArr);
  for(let j = 0; j < arr.length; j++) {
    if (arr[j] == -1) {
      newArray.splice(j, 0, -1);
    };
  };
  return newArray;
}

module.exports = {
  sortByHeight
};
