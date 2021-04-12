let input = `6 6
...#..
.##v#.
#v.#.#
#.k#.#
.###.#
...###`;

let arr = input.split("\n").map((e) => {
  if (e.includes(" ")) return e.split(" ");
  else return e.split("")
});

function solution(map) {
  let answer = "";
  let rc = map.shift();
  let r = parseInt(rc[0]); //세로
  let c = parseInt(rc[1]); //가로
  let dx = [-1,0,1,0];
  let dy = [0,1,0,-1];
  let wolf = 0;
  let sheep = 0;
  let v = 0;
  let k = 0;

  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      if (map[i][j] !== "#") {
        if(map[i][j] == "v") {
          wolf++;
        } else if (map[i][j] == "k") {
          sheep++;
        }
        DFS(i, j);
      }

      if(sheep > wolf) {
        k += sheep;
      } else {
        v += wolf;
      }
      wolf = 0;
      sheep = 0;
    }
  }

  function DFS(x, y) {
    map[x][y] = "#";
    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];

      if(nx >= 0 && nx < r && ny >= 0 && ny < c && map[nx][ny] !== "#") {
        if (map[nx][ny] == "v") {
          wolf++;
        } else if (map[nx][ny] == "k") {
          sheep++;
        }
        DFS(nx,ny);
      }
    }
  }

  answer = `${k} ${v}`;
  return answer;
}

console.log(solution(arr));