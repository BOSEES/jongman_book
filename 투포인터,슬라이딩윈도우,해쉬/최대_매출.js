let a=[12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
// //2중 for문으로 구현 O(n2)
// function solution(m, arr) {
//   let answer = Number.MIN_SAFE_INTEGER;
//   for (let i = 0; i < arr.length - 2; i++) {
//     let sum = arr[i];
//     for (let j = i + 1; j < m + i; j++) {
//       sum += arr[j];
//     }
//   answer =  Math.max(answer, sum);
//   }
//   return answer;
// }

//슬라이딩 윈도우 구현 O(n)
function solution(m, arr) {
  let answer = Number.MIN_SAFE_INTEGER;
  let sum = 0;
  for (let i = 0; i < m; i++) sum += arr[i];
  for (let i = m; i <= arr.length - m; i++) {
    sum += (arr[i] - arr[i - m]);
    answer = Math.max(answer, sum);
  }
return answer;
}
console.log(solution(3, a));