let input = `5 4
3 1
3 2
4 3
5 3`

let arr = input.split("\n").map((e) => e.split(" "));

function solution(input) {
  let answer = "";
  let inputData = input.shift();
  let n = parseInt(inputData[0]);
  let graph = Array.from({length: n + 1}, () => Array(n + 1).fill(0));
  let ch = Array.from({length: n + 1}, () => 0);
  let count = 0;
  let maxArr = [];

  for (let [a, b] of input) {
    graph[b][a] = 1;
  }

  for (let i = 1; i <= n; i++) {
    DFS(i);
    maxArr.push(count);
    count = 0;
  }

  function DFS(v) {
    count++;
    ch[v] = 1;
    for(let i = 1; i <= n; i++) {
      if(graph[v][i] == 1 && ch[i] == 0) {
        ch[i] = 1;
        DFS(i);
        ch[i] = 0;
      }
    }
  }
  let max = Math.max.apply(null, maxArr);
  for (let i = 0; i < maxArr.length; i++) {
    if(maxArr[i] == max) answer += (i + 1) + " ";
  }
  return answer.trim();
}

console.log(solution(arr))