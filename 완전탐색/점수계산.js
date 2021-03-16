let arr=[1, 0, 1, 1, 1, 0, 0, 1, 1, 0];

function solution(arr) {
  let answer = 0;
  let count = 0;
  for(let i = 0; i < arr.length; i++) {
    if (arr[i] == 1) {
      count += 1;
      answer += count;
    } else {
      count = 0;
    }
  }
  return answer;
}

console.log(solution(arr));