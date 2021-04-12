let a=[1, 2, 1, 3, 1, 1, 1, 2];

function solution(m, arr) {
  let answer = 0;
  let n = arr.length;
  let p1 = 0;
  let sum = 0;
  for (let p2 = 0; p2 < n; p2++) {
    sum += arr[p2]
    if (sum == m) answer++;
    while(sum >= m) {
      sum -= arr[p1];
      p1++;
      if (sum == m) answer++
    }
  }
  return answer;
}

console.log(solution(6, a));