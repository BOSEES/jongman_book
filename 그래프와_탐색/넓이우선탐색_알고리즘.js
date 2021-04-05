//넓이 우선 탐색 알고리즘

//데이터
let graph = {
  E: ["D", "A"],
  F: ["D"],
  A: ["E", "C", "B"],
  B: ["A"],
  C: ["A"],
  D: ["E", "F"]
};

function bfs(graph, start) {
  let visited = [];
  let queue = [start];

  while(queue.length !== 0) {
    let n = queue.shift();
    
    if(!visited.includes(n)){
      visited.push(n);
      let sub = graph[n].filter((e) => !visited.includes(e));
      for (let i of sub) {
        queue.push(i);
      }
    }
  }
  return visited;
}

console.log(bfs(graph, "E"));
// 출력
// E D F A C B
