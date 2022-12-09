function primeNumber(number) {
  if (number === 1) {
    console.log("число простое");
  } else if (!(number >= 2 && number <= 1000)) {
    console.log("данные неверны");
    return;
  }

  let prime = true;

  for (i = 2; i < number; i++) {
    if (number % i === 0) {
      prime = false;
      break;
    }
  }

  console.log(prime ? "число простое" : "число не простое");
}

primeNumber(3);
primeNumber(1);
primeNumber(50);
primeNumber(557);
primeNumber(991);
primeNumber(1050);
