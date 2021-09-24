let a=[1, 2, 1, 3, 1, 1, 1, 2];

function solution(targetNum,arr) {
  let answer = 0;
  let p1 = 0;
  let p2 = 0;
  let sum = 0;
  while (p1 < arr.length) {
    if(sum < targetNum) {
      sum += arr[p2];
      p2++
    } else {
      sum -= arr[p1];
      p1++
    }

    if(targetNum === sum) {
      answer++;
    }
  }
  return answer;
}

console.log(solution(6, a));