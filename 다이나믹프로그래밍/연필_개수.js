function solution(num) {
  let result = num / 12;
  if(num % 12 !== 0) {
    result++
  }
  return Math.floor(result);
}

console.log(solution(25));