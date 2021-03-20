let board=[
[0,0,0,0,0],
[0,0,1,0,3],
[0,2,5,0,1],
[4,2,4,4,2],
[3,5,1,3,1]];

let move=[1, 5, 3, 5, 1, 2, 1, 4];

function solution(board, move) {
  let answer = 0;
  let stack = [];

  for (let i = 0; i < move.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[j][move[i] - 1] !== 0) {
        if(stack[stack.length - 1] == board[j][move[i] - 1]) {
          stack.pop();
          board[j][move[i] - 1] = 0;
          answer += 2;
        } else {
          stack.push(board[j][move[i] - 1])
          board[j][move[i] - 1] = 0;
        }
        break;
      }
    }
  }
  return answer;
}

console.log(solution(board, move));