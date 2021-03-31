let arr=[32, 55, 62, 20, 250, 370, 200, 30, 100];

function solution(arr) {
  let answer = "";
  let reverseArr = arr.map((e) => parseInt(String(e).split("").reverse().join(""), 10));

  for (let i of reverseArr) {
    if (isPrime(i)) answer += String(i) + " ";
  }
  return answer.trim();
}

function isPrime(n) {
  if (n == 1) return false;
  for (let i = 2; i < n; i++) {
    if(n % i == 0) return false;
  }
  return true;
}

console.log(solution(arr));