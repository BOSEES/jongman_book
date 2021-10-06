let arr=[[0, 0, 0, 0, 0, 0, 0], 
[0, 1, 1, 1, 1, 1, 0],
[0, 0, 0, 1, 0, 0, 0],
[1, 1, 0, 1, 0, 1, 1],
[1, 1, 0, 0, 0, 0, 1],
[1, 1, 0, 1, 1, 0, 0],
[1, 0, 0, 0, 0, 0, 0]];

function solution (board) {
  let answer = 0;
  const n = board.length;
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];


  function DFS(x, y) {
    if (x === 6 && y === 6) {
      return answer++;
    } else {
      for (let i = 0; i < 4; i++) {
        let nx = x + dx[i];
        let ny = y + dy[i];
        if (nx >= 0 && nx < n && ny >= 0 && ny < n && board[nx][ny] === 0) {
          board[nx][ny] = 1;
          DFS(nx, ny);
          board[nx][ny] = 0;
        }
      }
    }
  }
  board[0][0] = 1;
  DFS(0,0)
  return answer;
}

console.log(solution(arr));

