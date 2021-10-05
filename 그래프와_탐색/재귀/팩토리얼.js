function solution(num) {
  let answer; 

  function DFS(n) {
    if (n == 1) return 1;
    else {
      return n*DFS(n - 1);
    }
  }

  answer = DFS(num);
  return answer;
}

console.log(solution(5));