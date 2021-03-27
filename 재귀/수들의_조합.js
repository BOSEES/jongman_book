let arr=[2, 4, 5, 8, 12];

function solution(n, k, arr, m) {
  let answer = 0;
  let temp = Array.from({length: k}, () => 0);

  function DFS(L, s, sum) {
    if (L == k) {
      if(sum % m == 0) return answer++;
    } else {
      for (let i = s; i < n; i++) {
        temp[L] = arr[i];
        DFS(L + 1, i + 1, sum + arr[i]);
      }
    }
  }
  DFS(0,0,0);
  return answer
}

console.log(solution(5, 3, arr, 6));