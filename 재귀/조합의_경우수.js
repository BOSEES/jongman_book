
function solution(n, r) {
  let answer;
  let dy = Array.from(Array(35), () => Array(35).fill(0));
  
  function DFS(n, r) {
    if (dy[n][r] > 0) return dy[n][r];
    if (r == 0 || n == r) return 1;
    else return dy[n][r] = DFS(n - 1, r - 1) + DFS(n - 1, r);
  }

  answer = DFS(n, r);
  return answer;
}

console.log(solution(33, 19));