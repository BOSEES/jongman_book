let input = `5 8
....XXXX
........
XX.X.XX.
........
........`;

input = input.split("\n").map((e) => {
  return e.split("");
})

function sol(board) {
  board.shift();
  let answer = 0;

  for (let i = 0; i < board.length; i++) {
    let flag = 1;
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === "X") {
        flag = 0;
      }
    }
    if (flag) {
      answer++;
    }
  }

  return answer;
}

console.log(sol(input))