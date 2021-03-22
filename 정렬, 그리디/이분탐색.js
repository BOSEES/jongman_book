let arr=[23, 87, 65, 12, 57, 32, 99, 81];
//투포인터 이분탐색
function solution(num, arr) {
  let answer = 0;
  let sortArr = arr.sort((a, b) => a - b);
  let left = 0;
  let right = arr.length - 1;

  while(left <= right) {
    let mid = Math.floor((left + right)/ 2);
    if (sortArr[mid] == num) {
      answer = mid + 1;
      break;
    } else if (sortArr[mid] > num) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return answer;
}

console.log(solution(57, arr));