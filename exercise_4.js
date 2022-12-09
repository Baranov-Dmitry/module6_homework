function logNumbers(start, end) {
  if (start > end) return;

  const intervalId = setInterval(() => {
    if (start > end) {
      clearInterval(intervalId);
      return;
    }
    console.log(start++);
  }, 1000);
}

logNumbers(5, 15);
