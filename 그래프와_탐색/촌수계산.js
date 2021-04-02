let input = `9
7 3
7
1 2
1 3
2 7
2 8
2 9
4 5
4 6`;

let arr = input.split("\n").map((e) => e.split(" "));

function solution(input) {
  let answer = 0;
  let v = parseInt(input[0], 10);
  let target = input[1]; // [7, 3];
  let eadgeArr = input.slice(3);
  let graph = Array.from({length: v + 1}, () => Array(v + 1).fill(0));
  let ch = Array.from({length: v + 1}, () => 0);
  let queue = [];
  queue.push(parseInt(target[0]));
  ch[parseInt(target[0])] = 1;

  for (let [a, b] of eadgeArr) {
    graph[a][b] = 1;
    graph[b][a] = 1;
  }

  while(queue.length) {
    let x = queue.shift();
    answer++;
    for(let i = 1; i <= v; i++) {
      if (graph[x][i] == 1 && ch[i] == 0) {
        if (i == target[1]) {
          return answer;
        }
        ch[i] = 1;
        queue.push(i);
      }
    }
  }
  return answer;
}

console.log(solution(arr));