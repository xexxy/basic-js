const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(array) {

    let deep = 1;
    while (array.some(Array.isArray)) {
      array = array.flat();
      deep++;
    }

  return deep;
  }
};