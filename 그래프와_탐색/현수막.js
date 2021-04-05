let input = `8 19
0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
0 0 0 1 0 0 0 1 0 0 0 1 0 1 1 1 1 1 0
0 0 1 0 1 0 0 1 1 0 0 1 0 0 0 1 0 0 0
0 1 0 0 0 1 0 1 0 1 0 1 0 0 0 1 0 0 0
0 1 1 1 1 1 0 1 0 1 0 1 0 0 0 1 0 0 0
0 1 0 0 0 1 0 1 0 0 1 1 0 0 0 1 0 0 0
0 1 0 0 0 1 0 1 0 0 0 1 0 0 0 1 0 0 0
0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0`

let arr = input.split("\n").map((e) => e.split(" "));

function solution(banner) {
  let answer = 0;
  let mn = banner.shift();
  let m = mn[0]; //세로;
  let n = mn[1]; //가로;
  let dx = [-1,-1,0,1,1,1,0,-1];
  let dy = [0,1,1,1,0,-1,-1,-1];
  for (let i = 1; i < m - 1; i++) {
    for (let j = 1; j < n - 1; j++) {
      if(banner[i][j] == 1) {
        DFS(i, j);
        answer++;
      }
    }
  }

  function DFS(x, y) {
    banner[x][y] = 0;

    for (let i = 0; i < 8; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];

      if(nx >= 1 && nx < m - 1 && ny >= 1 && ny < n - 1 && banner[nx][ny] == 1) {
        DFS(nx, ny);
      }
    }
  }
  return answer;
}

console.log(solution(arr))