const CustomError = require("../extensions/custom-error");

module.exports = function transform(array) {
  let result = []

  for (let i = 0; i < array.length; i++) {
    switch(array[i]) {
      case '--discard-next':
      if (array[i + 2] === '--double-prev') {
        i +=2
      } else {
        i++
      }
        break
      case '--discard-prev':
        if (array.length > 0) result.pop()
        break
      case '--double-next':
        if (array.length - 1 > i) result.push(array[i + 1])
        break
      case '--double-prev':
        if (array.length > 0) result.pop()
        break
      default:
        result.push(array[i])
    }
  }

  return result
};
