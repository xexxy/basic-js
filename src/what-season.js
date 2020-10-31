const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (date == null) {
    return 'Unable to determine the time of year!';
  }
  
  if (Object.prototype.toString.call(date) != '[object Date]') {
    throw new Error('THROWN');
  }

  if (date.getMonth() <= 1) {
    return 'winter';
  } else if (date .getMonth() <= 4) {
    return 'spring';
  } else if (date .getMonth() <= 7) {
    return 'summer';
  } else if (date .getMonth() <= 10) {
    return 'autumn';
  } else {
    return 'winter';
  }
};
