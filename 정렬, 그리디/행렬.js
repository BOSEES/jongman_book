let input = `3 4
0000
0010
0000
1001
1011
1001`

let arr = input.split("\n").map((e) => {
  if (e.includes(" ")) return e.split(" ").map((x) => x = parseInt(x, 10));
  else {
    return e.split("").map((e) => e = parseInt(e, 10));
  }
})
let nm = arr.shift();
let n = nm[0];
let m = nm[1];

function solution(board) {
  let answer = 0;
  let a = [];
  let flag1 = 1;
  // 행렬 나누기
  for (let i = 0; i < n; i++) {
    a.push(board.shift());
  }
  while(flag1){
    for (let i = 0; i < m - 3 + 1; i++) {
      answer++;
      for (let j = 0; j < 3; j++){
        for (let k = i; k < 3 + i; k++) {
          if (a[j][k] == 1) a[j][k] = 0;
          else a[j][k] = 1;
        }
      }
      for (let p = 0; p < n; p++) {
        let flag = 0;
        for (let s = 0; s < m; s++) {
          if (board[p][s] !== a[p][s]) {
            flag = 1;
            break;
          }
        }
        if (flag == 1) {
          break;
        } else {
          flag1 = 0;
        }
      }
    }
  }
  return answer;
}

console.log(solution(arr));