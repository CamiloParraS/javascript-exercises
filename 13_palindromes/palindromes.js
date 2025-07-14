const palindromes = function (str) {
  let strProcessed = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  let reversedStr = strProcessed.split("").reverse().join("");
  return strProcessed === reversedStr;
};

// Do not edit below this line
module.exports = palindromes;
