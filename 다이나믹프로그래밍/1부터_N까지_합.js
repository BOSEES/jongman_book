// //가우스 덧셈
// function solution(num) {
//   return num * (num + 1) / 2;
// }

//반복문DP
function solution(num) {
  let result = 0;
  
  for(let i = 1; i <= num; i++) {
    result += i;
  }
  return result;
}
console.log(solution(6));