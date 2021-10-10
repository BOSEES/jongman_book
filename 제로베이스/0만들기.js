let input = 7;


function sol(data) {
  let answer = [];
  
  function DFS(n, str, sum) {
    if (n > data) {
      if (sum === 0) {
        console.log(str);
      }
    } else {
        DFS(n + 1, `${str}+${n}`,sum + n)
        DFS(n + 1, `${str}-${n}`,sum - n)
    }
  }
  
  DFS(2,"1",1);
  return answer;
}

console.log(sol(input));
