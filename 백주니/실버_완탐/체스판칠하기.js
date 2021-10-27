let input = `11 12
BWWBWWBWWBWW
BWWBWBBWWBWW
WBWWBWBBWWBW
BWWBWBBWWBWW
WBWWBWBBWWBW
BWWBWBBWWBWW
WBWWBWBBWWBW
BWWBWBWWWBWW
WBWWBWBBWWBW
BWWBWBBWWBWW
WBWWBWBBWWBW`;

input = input.split("\n").map((e) => {
  if (e.indexOf(" ") === -1) return e;
  else return e.split(" ").map((e) => parseInt(e));
})

function sol(board) {
  let answer = 0;
  let nm = board.shift();
  let n = nm[0];
  let m = nm[1];
  let case1 = ["WBWBWBWB","BWBWBWBW","WBWBWBWB","BWBWBWBW","WBWBWBWB","BWBWBWBW","WBWBWBWB","BWBWBWBW"];
  let case2 = ["BWBWBWBW","WBWBWBWB","BWBWBWBW","WBWBWBWB","BWBWBWBW","WBWBWBWB","BWBWBWBW","WBWBWBWB"];
  //case1
  for (let i = 0; i < n - 7; i++) {
    for (let j = 0; j < m - 7; j++) {
      let sum1 = 0;
      let sum2 = 0;

      for (let k = 0; k < 8; k++) {
        for (let s = 0; s < 8; s++) {
          if (case1[k][s] === board[k+i][s+j]) {
            sum1++;
          }
          if (case2[k][s] === board[k+i][s+j]) {
            sum2++;
          }
        }
      }
      answer = Math.max(answer,sum1,sum2);
    }
  }

  return 64 - answer;
}

console.log(sol(input));