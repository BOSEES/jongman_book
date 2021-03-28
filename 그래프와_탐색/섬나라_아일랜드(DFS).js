let arr=[
[1, 1, 0, 0, 0, 1, 0], 
[0, 1, 1, 0, 1, 1, 0],
[0, 1, 0, 0, 0, 0, 0],
[0, 0, 0, 1, 0, 1, 1],
[1, 1, 0, 1, 1, 0, 0],
[1, 0, 0, 0, 1, 0, 0],
[1, 0, 1, 0, 1, 0, 0]];

function solution(board) {
  let answer = 0;
  let dx = [-1,-1,0,1,1,1,0,-1];
  let dy = [0,1,1,1,0,-1,-1,-1];
  
  for (let i = 0; i <board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[i][j] == 1) {
        answer++
        DFS(i,j);
      }
    }
  }

  function DFS(x, y) {
    board[x][y] = 0;
    for (let i = 0; i < 8; i++){
      let nx = x + dx[i];
      let ny = y + dy[i];
      
      if (nx >= 0 && nx <= 6 && ny >= 0 && ny <= 6 && board[nx][ny] == 1) {
        DFS(nx, ny);
      }
    }
  }
  return answer
}

console.log(solution(arr));