
function solution(num) {
  let answer = "";
  function dfs(l) {
    if (l == 0) return;
    else {
      dfs(Math.floor(l / 2));
      answer = String(l % 2);
    }
  }
  dfs(num);
  return answer;
}

console.log(solution(2017));