const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

// module.exports = function dateSample(/* sampleActivity */) {
//   throw new CustomError('Not implemented');
//   // remove line with error and write your code here
// };


module.exports = function dateSample(str) {
  const k = 0.693 / HALF_LIFE_PERIOD;

  if (typeof(str) == 'string' && parseFloat(str) && parseFloat(str) > 0 && parseFloat(str) < 15) {
    let N = parseFloat(str);
    t = Math.log(15 / 1);
    return Math.ceil(t);
  } else {
    return false;
  }

};