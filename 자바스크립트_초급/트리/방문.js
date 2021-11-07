const N = 4; //정점의 수
const M = 5; //간선의 수
const V = 1; //출발
const edges = [[1, 2], [1, 3], [1,4], [2, 3], [3, 4]];

function solution(N,M,V,edges) {
  let answer = ""
  let graph = Array.from({length: N + 1}, () => Array());
  let ch = Array.from({length: N + 1}, () => 0);
  for (let [x, y] of edges) {
    graph[x].push(y);
    graph[y].push(x);
  }

  function DFS(start) {
    answer += start + " ";
    for (let i = 0; i < graph[start].length; i++) {
      if (ch[graph[start][i]] === 0) {
        ch[graph[start][i]] = 1;
        DFS(graph[start][i]);
      }
    }
  }
  ch[V] = 1;
  DFS(V);
  return answer.trim();
}

console.log(solution(N,M,V,edges));