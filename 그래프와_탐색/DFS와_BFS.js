let input = `1000 1 1000
999 1000`;

let arr = input.split("\n").map((e) => e.split(" "));
let input1 = arr.shift();
let n = parseInt(input1[0]);
let m = parseInt(input1[1]);
let v = parseInt(input1[2]);
let graph = Array.from({length: n + 1}, () => Array(n+1).fill(0));
for (let [a, b] of arr) {
  graph[a][b] = 1;
  graph[b][a] = 1;
}
function solution() {
  let answer = [];
  let ch = Array(n + 1).fill(0);
  let s = "";
  

  function DFS(L, v) {
    s += v + " ";
    if (L == n) {
      answer.push(s.trim());
    } else {
      for (let i = 1; i <= n; i++) {
        if(graph[v][i] == 1 && ch[i] == 0) {
          ch[i] = 1; 
          DFS(L + 1, i);
        }
      }
    }
  }

  ch[v] = 1;
  DFS(1,v);
  // answer.push(BFS(v));
  return answer;
}
function BFS(v) {
  let ss= "";
  let ch = Array(n + 1).fill(0);  
  let queue = [];
  queue.push(v);
  ch[v] = 1;

  while (queue.length){
    let x = queue.shift();
    ss += x + " ";

    for (let i = 1; i <= n; i++) {
      if(graph[x][i] == 1 && ch[i] == 0) {
        ch[i] = 1;
        queue.push(i);
      }
    }
  }
  return ss.trim();
}

console.log(solution())