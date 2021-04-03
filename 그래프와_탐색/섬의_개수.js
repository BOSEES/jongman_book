let input = `1 1
0
2 2
0 1
1 0
3 2
1 1 1
1 1 1
5 4
1 0 1 0 0
1 0 0 0 0
1 0 1 0 1
1 0 0 1 0
5 4
1 1 1 0 1
1 0 1 0 1
1 0 1 0 1
1 0 1 1 1
5 5
1 0 1 0 1
0 0 0 0 0
1 0 1 0 1
0 0 0 0 0
1 0 1 0 1
0 0`

let arr = input.split("\n").map((e) => e.split(" "));
let inputs = [];
while (arr.length) {
  let s = [];
  let count = arr[0][1]
  for(let i = 0; i <= count; i++) {
    s.push(arr.shift());
  }
  inputs.push(s);
  if (arr[0][1] == 0) break;
}

console.log(inputs)

function solution(inputs) {
  let answer = 0;
  let dx = [-1,-1,0,1,1,1,0,-1];
  let dy = [0,1,1,1,0,-1,-1,-1];

  for (let i = 0; i < inputs.length; i++) {
    let count = 0;
    for (let j = 0; j < inputs[i].length; j++) {
      for (let k = 0; k < inputs[i][j].length; k++) {
        if (inputs[i][j][k] == 1 && j !== 0) {
          DFS(i, j, k)
          count++;
        }
      }
    }
    console.log(count);
  }

  function DFS(t, x, y) {
    inputs[t][x][y] = 0;
    for (let i = 0; i < 8; i++) {
      let nx = x + dx[i];
      let ny = y + dx[i];
      if (nx >= 0 && nx < inputs[t][0][0] && ny >= 0 && ny < inputs[t][0][1]) {
        console.log("aa")
        DFS(inputs[t][nx][ny]);
      }
    }
  }
}

console.log(solution(inputs))