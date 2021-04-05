let input = `6 5
1 1 0 1 1
0 1 1 0 0
0 0 0 0 0
1 0 1 1 1
0 0 1 1 1
0 0 1 1 1`

let arr = input.split("\n").map((e) => e.split(" "));


function solution(painting) {
  let answer = 0;
  let mn = painting.shift();
  let n = mn[0]; //세로
  let m = mn[1]; //가로
  let dx = [-1,0,1,0];
  let dy = [0,1,0,-1];
  let s = 0;
  let max = 0;
  for (let i = 0; i < n; i++ ) {
    for (let j = 0; j < m; j++) {
      if (painting[i][j] == 1) {
        DFS(i,j);
        s++
        answer = Math.max(answer, max);
        max = 0;
      }
    }
  }
  
  function DFS(x, y) {
    painting[x][y] = 0;
    max++;
    for(let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];

      if(nx >= 0 && nx < n && ny >= 0 && ny < m && painting[nx][ny] == 1) {
        DFS(nx, ny);
      }
    }
  }
  console.log(s);
  return answer
}

console.log(solution(arr));