let input = `5 6
010101
010000
011101
100011
001011`

let arr = input.split("\n").map((e) => {
  if (e.includes(" ")) return e.split(" ");
  else return e.split("");
})

function solution(percolates) {
  let answer = "NO"
  let mn = percolates.shift();
  let m = parseInt(mn[0]); //세로
  let n = parseInt(mn[1]); //가로
  let dx = [-1,0,1,0];
  let dy = [0,1,0,-1];
  let flag = 1;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (percolates[i][j] == 0) {
        DFS(i, j, i);
      }
    }
    if (flag == 0) break;
  }

  function DFS(x, y, start) {
    if ((x+1) == m && start == 0){
      answer = "YES";
      flag = 0;
    }

    percolates[x][y] = 1;
    for(let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];
      
      if(nx >= 0 && nx < m && ny >= 0 && ny < n && percolates[nx][ny] == 0) {
        DFS(nx, ny, start);
      }
    }
  }
  return answer;
}

console.log(solution(arr));