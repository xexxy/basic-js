const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(array) {
    let deep = 0;

    for (let item of array) {
      if (Array.isArray()) {
        array.flat();
        number++;
      }
    }
    return number;
  }
};