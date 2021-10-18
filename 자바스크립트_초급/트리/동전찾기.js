const coins = [1, 2, 5];

function sol(coins, change) {
  let answer = Number.MAX_SAFE_INTEGER;
  const n = coins.length;
  
  function DFS(L, sum) {
    if (L > answer) return;
    if (sum >= change) {
      return answer = Math.min(answer, L);
    } else {
      for (let i = 0; i < n; i++) {
        DFS(L + 1, sum + coins[i]);
      }
    }
  }

  DFS(0, 0)
  return answer;
}

console.log(sol(coins, 15));