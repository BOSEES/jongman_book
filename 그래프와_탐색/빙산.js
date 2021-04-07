let input = `5 7
0 0 0 0 0 0 0
0 2 4 5 3 0 0
0 3 0 2 5 2 0
0 7 6 2 4 0 0
0 0 0 0 0 0 0`

let arr = input.split("\n").map((e) => e.split(" ").map((x) => x = parseInt(x, 10)));

function solution(ice) {
  let answer = 0;
  let mn = ice.shift();
  let n = mn[0] //세로
  let m = mn[1] // 가로
  let dx = [-1,0,1,0];
  let dy = [0,1,0,-1];
  let flag = 1;
  
    while(flag) {
      answer++;
      for (let y = 1; y <= 10;  y++) {
        for (let i = 1; i < n - 1; i++) {
          for (let j = 1; j < m - 1; j++) {
            let count = 0;
            if (ice[i][j] > 0) {
              for (let k = 0; k < 4; k++) {
                let nx = i + dx[k];
                let ny = j + dy[k];
                if(nx >= 0 && nx < n && ny >= 0 && ny < m && ice[nx][ny] == 0) {
                  count++
                } 
              }
              if(ice[i][j] - count == 0) ice[i][j] = -1
              else ice[i][j] -= count; 
            }
          }
        }
    
        for (let i = 1; i < n - 1; i++) {
          for (let j = 1; j < m - 1; j++) {
            if(ice[i][j] < 0) ice[i][j] = 0;
          }  
        }
    }
  }
  if (thawing(ice)) {
    flag = 0;
  }
  return answer;
}

function thawing(ice) {
  let count2 = 0;
  let n = ice.length;
  let m = ice[0].length;
  let dx = [-1,0,1,0];
  let dy = [0,1,0,-1];

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < m - 1; j++) {
      if (ice[i][j] > 0) {
        DFS(i, j);
        count2++;
      }
    }
  }
  
  function DFS(x, y) {
    ice[x][y] = 0;

    for(let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];
      
      if (nx >= 0 && nx < n && ny >= 0 && ny < m && ice[nx][ny] > 0) {
        DFS(nx,ny);
      }
    }
  }
  
  if (count2 > 1) {
    return true;
  }

  return false;
}
console.log(solution(arr));