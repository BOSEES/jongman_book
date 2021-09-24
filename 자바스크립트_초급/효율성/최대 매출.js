let a=[12, 15, 11, 20, 25, 10, 20, 19, 13, 15];

function solution(day, arr) {
  let answer = 0;
  let p1 = 0;
  let p2 = 0;
  let sum = 0;
  while(p2 < arr.length) {
    if (p2 - p1 < day) {
      sum += arr[p2];
      p2++
    } else {
      sum -= arr[p1];
      ++p1;
    }
    answer  = Math.max(answer, sum);
  }

  return answer;
}

console.log(solution(3, a));