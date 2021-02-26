//깊이 우선 탐색 알고리즘

//데이터
let graph = {
  E: ["D", "A"],
  F: ["D"],
  A: ["E", "C", "B"],
  B: ["A"],
  C: ["A"],
  D: ["E", "F"]
};

function dfs(graph, start) {
  let visited = [];
  let stack = [start];

  while (stack.length !== 0) {
    let n = stack.pop();
    if (!visited.includes(n)) {
      visited.push(n);
      let sub = graph[n].filter((e) => !visited.includes(e));
      for (let i of sub) {
        stack.push(i);
      }
    }
  }

  return visited;
}

console.log(dfs(graph, "E"));
// 출력
// E D F A C B
