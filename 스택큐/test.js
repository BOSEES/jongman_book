//유클리드 호제법 (재귀)
function gcd(a, b) {
  if (a % b == 0) return b;

  return gcd(b, a % b);
}

console.log(gcd(2304,1440))