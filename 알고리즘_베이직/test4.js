let output = modulo(0, 0);
console.log(output); // --> 1

function modulo(num1, num2) {
  while(num1 - num2 >= 0) {
    num1 = num1 - num2;
  }
  return num1;
}