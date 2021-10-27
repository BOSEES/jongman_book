let input = `3 4 6
....
.T..
....`;

input = input.split("\n").map((e) => {
  if (e.indexOf(" ") === -1) return e.split("");
  else return e.split(" ").map((e) => parseInt(e));
})

function sol(data) {
  let answer = 0;
  let rck = data.shift();
  let r = rck[0];
  let c = rck[1];
  let k = rck[2];
  const start = [r - 1,0];
  const end = [0,c - 1];
  let dx = [-1,0,1,0];
  let dy = [0,1,0,-1];

  function DFS(x, y, count) {
    if (x === end[0] && y === end[1]) {
      if (count === k) return answer++;
      else return;
    } else {
      for (let i = 0; i < 4; i++) {
        let cx = x + dx[i];
        let cy = y + dy[i];
        if (cx < r && cx >= 0 && cy < c && cy >= 0 && data[cx][cy] !== "T") {
          data[x][y] = "T";
          DFS(cx, cy, count + 1);
          data[x][y] = ".";
        }
      }
    }
  }
  
  DFS(start[0],start[1],1);
  return answer;
}

console.log(sol(input))