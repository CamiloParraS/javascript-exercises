const repeatString = function(str, times) {
    // Validate if the number is positive
    if (times < 0) {
        return "ERROR";
    }
    let repeated = "";
    for (let i = 0; i < times; i++) {
        repeated += str;
    }
    return repeated;
};

console.log(repeatString("HOLA", 4));

// Do not edit below this line
module.exports = repeatString;
