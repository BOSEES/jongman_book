let input = `6 8
1 2
2 5
5 1
3 4
4 6
5 4
2 4
2 3`

const arr = input.split("\n").map((e) => e.split(" "));
const mn = arr.shift();
function solution(input) {
  let answer = 0;
  let n = parseInt(mn[0]); //정점의 개수
  let m = parseInt(mn[1]); //간선의 개수
  let graph = Array.from({length: n + 1}, () => Array(n + 1).fill(0));
  let ch = Array(n+1).fill(0);

  for(let [a, b] of input) {
    graph[a][b] = 1;
    graph[b][a] = 1;
  }

  for (let i = 1; i < n + 1; i++) {
    if(ch[i] !== 1) {
      DFS(i);
      answer++;
    }
    
  }

  function DFS(L) {
    for(let i = 1; i < n+1 ; i++) {
      if(graph[L][i] == 1 && ch[i] !== 1) {
        ch[i] = 1;
        DFS(i);
        console.log(ch);
      }
    }
  }
  return answer;
}

console.log(solution(arr));