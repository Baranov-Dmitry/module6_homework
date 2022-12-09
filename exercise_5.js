const getExponent = (number, degree) => {
  if (!valExponent(number) || !valExponent(degree)) {
    return "Введите 2 натуральных числа";
  }

  return Math.pow(number, degree);
};

const valExponent = (value) => {
  return typeof value !== "number" || isNaN(value) || !(value > 0)
    ? false
    : true;
};

console.log(getExponent(5, 3));
console.log(getExponent(2, 3));
console.log(getExponent(10, 5));
console.log(getExponent(-10, 5));
console.log(getExponent("drgdg", 5));
console.log(getExponent([], 5));
console.log(getExponent({}, 5));
console.log(getExponent(5, false));
console.log(getExponent(5, NaN));
