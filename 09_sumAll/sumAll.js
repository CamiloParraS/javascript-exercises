const sumAll = function (a, b) {
  // CHECK FOR INVALID OUTPUTS
  if (
    typeof a !== "number" ||
    typeof b !== "number" ||
    a < 0 ||
    b < 0 ||
    !Number.isInteger(a) ||
    !Number.isInteger(b)
  ) {
    return "ERROR";
  }

  let sumTotal = 0;
  if (a > b) [a, b] = [b, a];
  for (let i = a; i <= b; i++) {
    sumTotal += i;
  }
  return sumTotal;
};

// console.log(sumAll(2, 4))

// Do not edit below this line
module.exports = sumAll;
