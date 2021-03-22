let arr=[[14, 18], [12, 15], [15, 20], [20, 30], [5, 14]];

function solution(arr) {
  let answer = 1;
  let sortArr = arr.sort((a, b) => a[0] - b[0]);
  let max = Number.MIN_SAFE_INTEGER;
  let et = sortArr[0][1];
  
  for (let i = 0; i < sortArr.length - 1; i++) {
  if (sortArr[i][1]> sortArr[i + 1][0]) answer++
  if (et <= sortArr[i + 1][0]) {
    answer--;
    et = sortArr[i + 1][0];
  }
  max = Math.max(max, answer);
  }
  return max;
}

console.log(solution(arr));