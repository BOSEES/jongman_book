let arr=[5, 3 , 7, 11, 2, 15, 17];
// 반복문 시간복잡도 n
// function solution(arr) {
//   let result = arr[0]
//   for (let i = 1; i < arr.length; i++) {
//     if (result > arr[i]) {
//       result = arr[i];
//     }
//   }
//   return result;
// }

//메소드 방법
function solution(arr) {
  return Math.min.apply(null, arr);
}

console.log(solution(arr));