let arr=[
[10, 13, 10, 12, 15], 
[12, 39, 30, 23, 11],
[11, 25, 50, 53, 15],
[19, 27, 29, 37, 27],
[19, 13, 30, 13, 19]];

function solution(board) {
  let answer = Number.MIN_SAFE_INTEGER;
  let sumX,sumY = 0;
  for(let i = 0; i < board.length; i++){
    sumX = 0;
    sumY = 0;
    for(let j = 0; j < board.length; j++){
      sumX += board[i][j];
      sumY += board[j][i];
    }
    answer = Math.max(answer,sumX, sumY);
  }
  
  sumX = 0;
  sumY = 0;
  for (let k = 0; k < board.length; k++) {
    sumX += board[k][k];
    sumY += board[board.length - 1 - k][k];
  }
  answer = Math.max(answer,sumX, sumY);
  return answer;
}


  console.log(solution(arr));