function getEvenOddZeroCount(arr) {
  let even = 0;
  let odd = 0;
  let zero = 0;

  arr.forEach((item) => {
    if (typeof item === "number" && !isNaN(item)) {
      if (item === 0) {
        zero++;
      } else if (item % 2 === 0) {
        even++;
      } else {
        odd++;
      }
    }
  });

  console.log("Кол-во четных = " + even);
  console.log("Кол-во нечетных = " + odd);
  console.log("Кол-во нулей = " + zero);
}

getEvenOddZeroCount([
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  0,
  0,
  0,
  null,
  {},
  undefined,
  "sdfsdf",
  NaN,
]);
