function power(base, exponent) {
  // todo: 여기에 코드를 작성합니다.
  if(exponent === 0) {
    return 1;
  }
  const half = Math.floor(exponent / 2);
  const recusive = power(base, half);
  let result = (recusive * recusive) % 94906249;

  if (exponent % 2 !== 0) {
    result = result * base % 94906249;
  }

  return result;
}

let output = power(3, 40);
console.log(output); // --> 19334827