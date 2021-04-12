let input = `5 7 3
0 2 4 4
1 1 2 5
4 0 6 2`

let arr = input.split("\n").map((e) => e.split(" "));
let mnk = arr.shift();
let m = parseInt(mnk[0]); //세로
let n = parseInt(mnk[1]); //가로
let k = parseInt(mnk[2]); //직사각형의 갯수

function solution(arr) {
  let count = 0;
  let answer = [];
  let board = Array.from({length:m}, () => Array(n).fill(0));
  let dx = [-1,0,1,0];
  let dy = [0,1,0,-1];

  for (let i = 0; i < k; i++) {
    let x1 = arr[i][0]; //(x1,y1)(x2,y2)
    let y1 = arr[i][1]; //0,2 x 4,4
    let x2 = arr[i][2];
    let y2 = arr[i][3];
    for(let j = y1; j < y2; j++) {
      for (let k = x1; k < x2; k++) {
        board[j][k] = 1;
      }
    } 
  }
  
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] == 0) {
        DFS(i, j);
        answer.push(count);
        count = 0;
      }
    }  
  }
  
  function DFS(x, y) {
    count++;
    board[x][y] = 1;
    for(let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i] 
      if (nx >= 0 && nx < m && ny >= 0 && ny < n && board[nx][ny] == 0) {
        DFS(nx,ny);
      }
    }
  } 
  
  console.log(answer.length);
  answer = answer.sort((a, b) => a - b).join(" ");
  return answer;
}

console.log(solution(arr));