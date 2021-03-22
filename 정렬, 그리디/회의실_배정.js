let arr=[[1, 4], [2, 3], [3, 5], [4, 6], [5, 7]];

function solution(arr) {
  let answer = 0;
  let sortArr = arr.sort((a, b) => {
    if (a[1] == b[1]) return a[0] - b[0];
    else return a[1] - b[1];
  });
  let end = 0;
  for(let i = 0; i < arr.length; i++) {
    if (arr[i][0] >= end) {
      answer++;
      end = arr[i][1];
    }
  }
  return answer;
}

console.log(solution(arr));