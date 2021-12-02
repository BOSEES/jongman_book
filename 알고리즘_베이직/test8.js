const board1 = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0],
  [0, 0, 0, 0, 0]
]
const output1 = boardGame(board1, 'DDRRRUDUDUD');
console.log(output1); // 4

function boardGame(board, operation) {
  // TODO: 여기에 코드를 작성하세요.
  let location = [0,0];
  let score = 0;
  const n = operation.length;
  for (let i = 0; i < n; i++) {
    if (operation[i] === "U") {
      location[0] -= 1;
    } else if (operation[i] === "D") {
      location[0] += 1;
    } else if (operation[i] === "L") {
      location[1] -= 1;
    } else if (operation[i] === "R") {
      location[1] += 1;
    }

    if (location[0] < 0 || location[1] >= n) {
      return "OUT";
    } else {
      if (board[location[0]][location[1]] === 1) {
        score++;
      }
    }
  }

  return score;
};