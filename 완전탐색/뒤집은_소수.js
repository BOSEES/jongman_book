let arr=[32, 55, 62, 20, 250, 370, 200, 30, 100];

function solution(arr) {
  let n = arr.map((e) => parseInt(e.toString().split("").reverse().join(""), 10));
  let answer = [];
  for (let e of n) {
    if (isPrime(e)) {
      answer.push(e);
    }
  }
  return answer.join(" ");
}

console.log(solution(arr));

//소수를 구하는 함수. (1을 제외한 자기 자신으로밖에 나눌수 없는 수).
//1이면 즉시 true
//반복문을 n - 1 까지 돌리면서 유효성에 걸린다면 false.
//반복문에 걸리지 않는다면 true.
function isPrime(n) {
  if (n == 1) return false;

  for (let i = 2; i < parseInt(Math.sqrt(n), 10); i++) {
    if (n % i == 0) return false
  }
  return true;
}