let input = `9 1 9
1 2 8
2 3 6
2 4 5
2 5 10
9 5 6
6 5 14
6 7 7
8 6 7`

let arr = input.split("\n").map((e) => e.split(" ").map((x) => x = parseInt(x, 10)));
let location = arr.shift();
let n = location[0];
let m1 = location[1];
let m2 = location[2];

function solution(cave) {
  let graph = Array.from({length: n + 1}, () => Array(n + 1).fill(0));
  let ch = Array(n+1).fill(0);
  let answer = 0;
  for(let [a, b, c] of cave) {
    graph[a][b] = c;
    graph[b][a] = c;
  }
  

  function DFS(v, sum, max) {
    if (v == m2) {
      answer = sum - max;
      return
    } else {
      for (let i = 1; i <= n; i++) {
        if(graph[v][i] !== 0 && ch[i] == 0) {
          ch[i] = 1;
          DFS(i,sum + graph[v][i], Math.max(max, graph[v][i]));
        }
      }
    }
  }
  ch[m1] = 1;
  DFS(m1,0,0);
  return answer
}

console.log(solution(arr));