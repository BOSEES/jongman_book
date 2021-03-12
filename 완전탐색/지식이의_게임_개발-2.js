const 가로 = 4
const 세로 = 5
const 캐릭터 = [0,0]
const 장애물 = [[0,1],[1,1],[2,3],[1,3]]

function make_map(가로, 세로, 캐릭터, 장애물) {
  const map =[];
  
  for (let i = 0; i < 세로 + 2; i++) {
    let a = [];
    for (let j = 0; j < 가로 + 2; j++) {
      a.push(2);
    }
    map.push(a);
  }

  for (let i = 1; i < map.length - 1; i++) {
    for (let j = 1; j < map[i].length - 1; j++) {
      map[i][j] = 0;
    }
  }
  map[캐릭터[0] + 1][캐릭터[1] + 1] = 1;
  for (let i of 장애물) {
    if(map[i[0] + 1][i[1] + 1] == 1) {
      map[i[0] + 1][i[1] + 1] = 1
    } else {
      map[i[0] + 1][i[1] + 1] = 2
    }
  }
  return map;
}

//막힌 벽은 제자리 걸음을 하도록 확장함.
let 움직임 = [4,4,4,2] // {상: 1, 하:2, 좌:3, 우:4}
function move_map(지도, 움직임) {
  let move = 움직임
  let map = 지도;
  let now = [1,1];
  for (let i in move) {
    //상
    if (move[i] == 1) {
      if(map[now[0] - 1][now[1]] !== 2) {
        now[0] -= 1;
      }
    }
    //하
    if (move[i] == 2) {
      if(map[now[0] + 1][now[1]] !== 2) {
        now[0] += 1;
      }
    }
    //좌
    if (move[i] == 3) {
      if(map[now[0]][now[1] - 1] !== 2) {
        now[1] -= 1;
      }
    }
    //우
    if (move[i] == 4) {
      if(map[now[0]][now[1] + 1] !== 2) {
        now[1] += 1;
      }
    }
  }
  let x = [now[0] - 1,now[1] - 1];
  let newMap = make_map(가로, 세로, x, 장애물);
  for (let i of newMap) {
    console.log(i);
  }
  return now;
}
console.log(move_map(make_map(가로, 세로, 캐릭터, 장애물),움직임));

