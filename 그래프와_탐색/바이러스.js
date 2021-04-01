let arr = `7
6
1 2
2 3
1 5
5 2
5 6
4 7`;



let input = arr.split("\n").map((e) => e.split(" "));

function solution(input) {
  let answer = -1;
  let n = input.shift();
  let e = input.shift();
  let graph = Array.from({length: parseInt(n, 10) + 1}, () => Array(parseInt(n, 10) + 1).fill(0));
  let ch = Array(parseInt(n, 10) + 1).fill(0);
  for (let [a, b] of input) {
    graph[a][b] = 1;
    graph[b][a] = 1;
  }

  // console.log(graph)
  function DFS(V) {
      answer++;
      for (let i = 1; i <= n; i++) { 
        if (graph[V][i] == 1 && ch[i] == 0) {
          console.log(V, i)
          ch[i] = 1;
          DFS(i);
        }
      }
    }

  ch[1] = 1;
  DFS(1);
  return answer;
  }
  
console.log(solution(input))