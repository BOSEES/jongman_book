function solution(num) { 
  function DFS(L) {
    if (L == 0) return;
    else {
      DFS(L - 1);
      console.log(L);
    }
  }
  DFS(num);
  return "end"
}

console.log(solution(3));