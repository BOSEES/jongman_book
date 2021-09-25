let a=[[0,0,0,0,0],
      [0,0,1,0,3],
      [0,2,5,0,1],
      [4,2,4,4,2],
      [3,5,1,3,1]];
let b=[1, 5, 3, 5, 1, 2, 1, 4];

function solution(board, moves) {
  let answer = 0;
  let basket = [];

  for (let i = 0; i < moves.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[j][moves[i] - 1] !== 0) {
        // console.log("바구니",basket[basket.length -1]);
        // console.log("타겟",board[j][moves[i] - 1]);
        if(basket[basket.length - 1] === board[j][moves[i] - 1]) {
          board[j][moves[i] - 1] = 0;
          basket.pop();
          answer += 2;
        } else {
          basket.push(board[j][moves[i] - 1]);
          board[j][moves[i] - 1] = 0;
        }
        break;
      }
    }
  }
  console.log(basket);
  return answer;
}

console.log(solution(a, b));