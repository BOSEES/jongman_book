let input = `4 4
1 1 0
1 1 1 1
1 0 0 1
1 1 0 1
1 1 1 1`;

// let input = `6 6
// 1 1 0
// 1 1 1 1 0 1
// 1 0 0 1 0 1
// 1 1 0 0 0 1
// 1 1 0 0 0 1
// 1 1 1 1 1 1`

input = input.split("\n").map((e) => e.split(" "));
let z = parseInt(input.shift()[0]);
let nm = input.shift();

function sol(map) {
  let answer = 1;
  let x = parseInt(nm[0]);
  let y = parseInt(nm[1]);
  let see = parseInt(nm[2]);
  let dx = [-1,0,1,0];
  let dy = [0,-1,0,1];
  let count = 0;

  function DFS(a,b) {
    map[a][b] = "1";
    if (count >= 4) {
      return answer;
    } else {
      let cx = a + dx[see % 4];
      let cy = b + dy[see % 4];
      if (cx >= 0 && cx < z && cy >= 0 && cx < z && map[cx][cy] === "0") {
        count = 0;
        answer++;
        DFS(cx,cy);
      } else {
        see++
        count++;
        DFS(a,b)
      }
    }
  }

  DFS(x,y)
  return answer;
}

console.log(sol(input))