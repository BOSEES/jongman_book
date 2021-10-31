const  vertex =  [[3, 6], [4, 3], [3, 2], [1, 3], [1, 2], [2, 4], [5, 2]];
const  n = 6;

function sol (n,vertex) {
  const graph = Array.from({length: n  + 1}, () => Array());
  const queue = [];
  const ch = Array(n + 1).fill(0);
  queue.push(1);
  ch[1] = 1;
  for (let [x, y] of vertex) {
    graph[x].push(y);
    graph[y].push(x)
  }
  let count = 0;
  const level = [];
  while (queue.length > 0) {
    level.push(queue.slice());
    let size = queue.length;
    count++;
    for (let i = 0; i < size; i++) {
      const v = queue.shift();
      for (let j = 0; j < graph[v].length; j++) {
        if (ch[graph[v][j]] === 0) {
          queue.push(graph[v][j]);
          ch[graph[v][j]] = 1;
        }
      }
    }
  }
  return level[level.length - 1].length;
}

console.log(sol(n,vertex));