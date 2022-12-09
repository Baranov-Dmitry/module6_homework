function getSumFn(a) {
  return function (b) {
    return a + b;
  };
}

const set5 = getSumFn(5);
console.log(set5(18));

const set11 = getSumFn(11);
console.log(set11(-3));