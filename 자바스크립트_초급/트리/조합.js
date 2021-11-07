function solution(n, k) {
  let answer = [];
  const ch = Array.from({length: n + 1}, () => 0);
  const temp = Array.from({length: n}, () => 0);
  let count = 0;

  function DFS(L) {
    if (count >= k) return;
    if (L >= n) {
      answer.push(temp.slice());
      count++;
    } else {
      for (let i = 1; i <= n; i++) {
        if (ch[i] === 0) {
          ch[i] = 1;
          temp[L] = i;
          DFS(L + 1);
          ch[i] = 0;
        }
      }
    }
  }
  DFS(0);
  return answer[answer.length - 1];
}

console.log(solution(4,9));