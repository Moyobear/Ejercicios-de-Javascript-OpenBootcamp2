function fibonacci(num) {
  let arrayFib = [];
  arrayFib[0] = 0;
  arrayFib[1] = 1;
  for (let i = 2; i < num + 1; i++) {
    arrayFib[i] = arrayFib[i - 2] + arrayFib[i - 1];
  }

  return arrayFib.slice(1); //omitiendo el 0
}

const array = fibonacci(6);

console.log(array);
