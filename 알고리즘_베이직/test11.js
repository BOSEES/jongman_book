let M = 4;
let N = 8;
let output = divideChocolateStick(M, N);
console.log(output);
// [[1, 4, 8], [2, 2, 4], [4, 1, 2]]

function divideChocolateStick(M, N) {
  let gcd = GCD(M, N);
  let result = [];
  for (let i = 1; i <= Math.floor(Math.sqrt(gcd)); i++) {
    if (gcd % i === 0) {
      result.push([i, M / i, N / i]);
      if (i * i < gcd) {
        let j = gcd / i;
        result.push([j, M / j, N / j]);
      }
    }
  }

  return result;
}

function GCD (a, b) {
  if (b === 0) return a;
  return GCD(b, a % b);
}

