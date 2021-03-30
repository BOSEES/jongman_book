let str="g0en2T0s8eSoft";

function solution(str) {
  let answer = 0;
  let n = str.replace(/[^0-9]/g, "");
  answer = parseInt(n, 10);
  return answer;
}

console.log(solution(str));