let input = `2
10 8 17
0 0
1 0
1 1
4 2
4 3
4 5
2 4
3 4
7 4
8 4
9 4
7 5
8 5
9 5
7 6
8 6
9 6`
let arr = input.split(/\n/);
let t = arr.shift();
let size = arr.shift().split(" ");
let m = parseInt(size[0]);
let n = parseInt(size[1]);
let k = parseInt(size[2]);

function solution(arr) {
  let answer = 0;
  let board = Array.from({length: n}, () => Array(m).fill(0));
  let pointOne = arr.map((e) => e.split(" "));
  let dx = [-1,0,1,0];
  let dy = [0,1,0,-1];
  for(let i = 0; i < pointOne.length; i++) {
    board[pointOne[i][1]][pointOne[i][0]] = 1;
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (board[i][j] == 1) {
        answer++
        DFS(i,j);
      }
    }
  }
  
  function DFS(x, y) {
    board[x][y] = 0;
    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];

      if (nx >= 0 && nx < n && ny >= 0 && ny < m && board[nx][ny] == 1) {
        DFS(nx,ny);
      }
    }
  }
  return answer;
}

console.log(solution(arr));