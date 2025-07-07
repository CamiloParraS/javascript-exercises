const reverseString = function (str) {
  let reverseStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverseStr += str.charAt(i);
  }
  return reverseStr;
};

console.log(reverseString("Hola Mundo"));

// Do not edit below this line
module.exports = reverseString;
