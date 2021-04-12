let input = `8 9
0 0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0
0 1 1 0 0 0 1 1 0
0 1 0 1 1 1 0 1 0
0 1 0 0 1 0 0 1 0
0 1 0 1 1 1 0 1 0
0 1 1 0 0 0 1 1 0
0 0 0 0 0 0 0 0 0`

let arr = input.split("\n").map((e) => e.split(" ").map((x) => x = parseInt(x, 10)));
let nm = arr.shift();
let n = nm[0]; //세로
let m = nm[1]; //가로

function solution(cheese) {
  let answer = 0;
  let flag = 1;
  let dx = [-1,0,1,0];
  let dy = [0,1,0,-1];

  while (flag) {
    answer++
    function DFS(x, y) {
      cheese[x][y] = 2;
      for (let i = 0; i < 4; i++) {
        let nx = x + dx[i];
        let ny = y + dy[i];
  
        if(nx >= 0 && nx < n && ny >= 0 && ny < m && cheese[nx][ny] == 0) {
          DFS(nx,ny);
        }
      }
    }
    DFS(0,0);
    
    for (let i = 1; i < n - 1; i++) {
      for (let j = 1; j < m - 1; j++) {
        let count = 0;
        if (cheese[i][j] == 1) {
          for (let k = 0; k < 4; k++) {
            let nx = i + dx[k];
            let ny = j + dy[k];
  
            if(nx >= 0 && nx < n && ny >= 0 && ny < m && cheese[nx][ny] == 2) {
              count++
            }
          }
        }
        if (count > 1) cheese[i][j] = "c";
      }
    }
    
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (cheese[i][j] !== 1) {
          cheese[i][j] = 0;
        }
      }  
    }

    if(check(cheese)) {
      flag = 0;
    }
  }
  return answer;
}


function check(cheese) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (cheese[i][j] !== 0) {
        return false;
      }
    }  
  }
  return true;
}

console.log(solution(arr))