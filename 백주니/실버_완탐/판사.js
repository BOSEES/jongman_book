const trust = [[1,3],[1,4],[2,3],[2,4],[4,3]]	;
const n = 4;

function sol(n, trust) {
  let graph = Array.from({length: n + 1}, () => 0);

  for (let [x, y] of trust) {
    if (graph[y] !== undefined) {
      graph[y]++;
    }
    graph[x] = undefined;
  }

  for (let i = 1; i < graph.length; i++) {
    if (graph[i] !== undefined) {
      return i
    }
  }
  return -1;
}

console.log(sol(n,trust));