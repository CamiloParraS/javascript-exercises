const fibonacci = function (n) {
  const sqrt5 = Math.sqrt(5);
  const phi = (1 + sqrt5) / 2;
  return Math.round(Math.pow(phi, n) / sqrt5);
};

// Do not edit below this line
module.exports = fibonacci;
