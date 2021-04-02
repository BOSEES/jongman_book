let input = `7
0110100
0110101
1110101
0000111
0100000
0111110
0111000`

let arr = input.split("\n").map((e) => e.split(""));

function solution(board) {
  let answer = 0;
  let countArr = [];
  let count = 0;
  let n = board.shift();
  let dx = [-1,0,1,0];
  let dy = [0,1,0,-1];
  n = parseInt(n[0], 10);
  
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] == 1) {
        DFS(i,j);
        countArr.push(count)
        count = 0;
        answer++;
      }
    }
  }
  
  function DFS(x, y) {
    board[x][y] = 0;
    count++;
    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];

      if(nx >= 0 && nx < n  && ny >= 0 && ny < n && board[nx][ny] == 1) {
        DFS(nx,ny);
      }
    }
  }
  console.log(answer);
  countArr.sort((a, b) => a - b);
  for (let i  = 0; i < countArr.length - 1; i++) {
    console.log(countArr[i]);
  }
  answer = countArr[countArr.length - 1]; 
  return answer;
}

console.log(solution(arr));