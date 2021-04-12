let input = `3
1 2 3
1 2
2 3`

let arr = input.split("\n").map((e) => e.split(" ").map((b) => b = parseInt(b, 10)));

function solution(tree) {
  let answer = 0;
  let nArr = tree.shift();
  let n = nArr[0];
  let fruits = tree.shift();
  let graph = Array.from({length: n + 1}, () => Array(n + 1).fill(0));
  let ch = Array.from({length: n + 1}, () => 0);
  let max = 0;
  let bast = 0;
  ch[1] = 1;
  for (let [a, b] of tree) {
    graph[a][b] = fruits[b - 1];
  }  

  for (let i = 1; i <= n; i++) {
    DFS(i);
    max += fruits[0];
    if(answer < max ) {
      answer = Math.max(answer, max);
      bast = i;
      max = 0;
    }
    
  }

  function DFS(v) {
    for (let i = 1; i <= n; i++ ) {
      if(graph[v][i] > 0 && ch[i] == 0) {
        ch[i] = 1;
        max += graph[v][i];
        DFS(i);
      }
    }
  }
  return `${answer} ${bast}`;
}

console.log(solution(arr));

