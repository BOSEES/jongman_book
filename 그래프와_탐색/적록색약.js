let input = `5
RRRBB
GGBBB
BBBRR
BBRRR
RRRRR`;

let arr1 = input.split("\n").map((e) => e.split(""));
let arr2 = input.split("\n").map((e) => e.split(""));
let n = arr1.shift();
arr2.shift();
n = parseInt(n[0], 10);

function solution(greed1,greed2) {
  let answer = "";
  answer = man1(greed1) + " "  + man2(greed2);
  return answer
}
//적록색약이 아닌 사람
function man1(greed) {
  let count = 0;
  let dx = [-1,0,1,0];
  let dy = [0,1,0,-1];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (greed[i][j] !== 0) {
        DFS(i, j, greed[i][j]);
        count++;
      }
    }
  }

  function DFS(x, y, target) {
    greed[x][y] = 0;
    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];
      if (nx >= 0 && nx < n && ny >= 0 && ny < n && greed[nx][ny] == target) {
        DFS(nx,ny,target);
      }
    }
  }

  return count;
}

//적록색약인 사람
function man2(greed) {
  let count = 0;
  let dx = [-1,0,1,0];
  let dy = [0,1,0,-1];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (greed[i][j] !== 0) {
        DFS(i, j, greed[i][j]);
        count++;
      }
    }
  }

  function DFS(x, y, target) {
    greed[x][y] = 0;
    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];
      if (target == "R" || target == "G") {
        if (nx >= 0 && nx < n && ny >= 0 && ny < n && greed[nx][ny] !== "B" && greed[nx][ny] !== 0) {
          DFS(nx,ny,target);
        }
      } else if (nx >= 0 && nx < n && ny >= 0 && ny < n && greed[nx][ny] == target) {
        DFS(nx,ny,target);
      }
    }
  }
  return count;
}

console.log(solution(arr1,arr2));