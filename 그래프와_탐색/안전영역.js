let input = `5
6 8 2 6 2
3 2 3 4 6
6 7 3 3 2
7 2 5 3 6
8 9 5 2 7`

let arr = input.split("\n").map((e) => e.split(" "));

function solution(board) {
  let answer = 0;
  let n = parseInt(board.shift());
  let ch = Array.from({length: n}, () => Array(n).fill(1));
  let dx = [-1,0,1,0];
  let dy = [0,1,0,-1];
  let max = 0;
  for (let k = 1; k <= 100; k++) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (ch[i][j] < k) {
          DFS(i, j, k);
          answer = Math.max(answer, max);
          max = 0;
        }
      }
    }
  }

  function DFS(x, y, h) {
    max++;
    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];
      if (nx >= 0 && nx < n && ny >= 0 && ny < n && board[nx][ny] > h) {
        DFS(nx,ny); 
      }
    }
  }
  return answer;
}

console.log(solution(arr));