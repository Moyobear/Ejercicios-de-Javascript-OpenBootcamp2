let num = 10;
let factorial = 1;
cicloFactorialWhileBreak: while (true) {
  if (num >= 1) {
    factorial *= num;
    num--;
  } else {
    break;
  }
}

console.log(factorial);
