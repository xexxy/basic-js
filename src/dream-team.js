const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let symbols = [];

  if (Array.isArray(members)) {
    for (let member of members) {
      if (typeof(member) == 'string') {
        symbols.push(member.toUpperCase().match(/[A-Za-z]/));
      } else {
        continue;
      }
    }
  } else {
    return false;
  }

  return symbols.sort().join('');
};