const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (array) {
  let sum = 0;

  for (part of array) {
    sum += part;
  }
  return sum;
};

const multiply = function (array) {
  let prod = 1;

  for (part of array) {
    prod *= part;
  }
  return prod;
};

const power = function (a, b) {
  return Math.pow(a, b);
};

const factorial = function (num) {
  let factorial = 1;
  if (num > 0) {
    for (i = 1; i <= num; i++) {
      factorial *= i;
    }
  }
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
