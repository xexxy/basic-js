// const CustomError = require("../extensions/custom-error");

// module.exports = function countCats(/* matrix */) {
//   throw new CustomError('Not implemented');
//   // remove line with error and write your code here
// };

// module.exports = function countCats(matrix) {

//   let number = matrix.flat(Infinity).join('').match(/\^\^/g) || [];
//   // let number = matrix.flat(Infinity).join('').replace(/\s/g, '').match(/\^\^/g) || [];

//   return number.length;
// };

module.exports = function countCats(matrix) {

  let number = 0,
    array = matrix.flat(Infinity) || [];
  for (item of array) {
    if (/^\^\^$/.test(item)) {
      number++;
    }
  }

  return number;
};