const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  if (!options.repeatTimes) {
    options.repeatTimes = 1
  }

  if (!options.separator) {
    options.separator = '+'
  }

  if (options.addition == undefined) {
    options.addition = ''
  }

  if (!options.additionRepeatTimes) {
    options.additionRepeatTimes = 1
  }

  let additionStr = str + '' + options.addition

  for (let j = 1; j < options.additionRepeatTimes; j++) {
    additionStr += options.additionSeparator + options.addition
  }

  let result = additionStr

    for (let i = 1; i < options.repeatTimes; i++) {
      result += options.separator + additionStr
    }

  return result
};