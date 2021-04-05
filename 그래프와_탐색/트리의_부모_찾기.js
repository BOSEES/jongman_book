let input = `12
1 2
1 3
2 4
3 5
3 6
4 7
4 8
5 9
5 10
6 11
6 12`

let arr = input.split("\n").map((e) => e.split(" "));
let n = arr.shift();

function solution(input) {
  let answer = [];
  let N = parseInt(n[0]);
  let graph = Array.from({length: N + 1}, () => Array(N + 1).fill(0));

  for(let [a, b] of input) {
    graph[a][b] = 1;
    graph[b][a] = 1;
  }

  for(let j = 2; j < N + 1; j++) {
    let ch = Array(N + 1).fill(0);
    let queue = [];
    let flag = 1;
    queue.push(1);
    ch[1] = 1;

    while (flag) {
      let x = queue.shift();
      for (let i = 2; i < N + 1; i++) {
        if (ch[i] == 0 && graph[x][i] == 1) {
            if(j == i) {
              answer.push(x);
              flag = 0;
              break;
            } else {
              ch[i] = 1;
              queue.push(i);
            }
            
          }
      }
    }
  }
  return answer;
}

console.log(solution(arr));