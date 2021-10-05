
function solution(num) {
  let answer = "";
  function DFS(n) {
    if (n > 7) return;
    else {
      answer += n + " "
      DFS(n * 2);
      DFS(n * 2 + 1);
      
    }
  }
  DFS(num)
  return answer;
}

console.log(solution(1));