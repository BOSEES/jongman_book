row = Array.from(Array(9), () => new Array(10));
col = Array.from(Array(9), () => new Array(10));
sq = Array.from(Array(9), () => new Array(10));

const changeIdx = function (y, x){
  return (Math.floor(y / 3) * 3) + Math.floor(x / 3);
}

const makeSu = function (cnt, board){
  if(cnt === 81) { // 종료 조건 -> 왜 종료가 안되는지 ..? ㅠ
    return board;
  }
  let y = Math.floor(cnt / 9);
  let x = cnt % 9;
  if(board[y][x] !== 0) makeSu(cnt+1, board); // board에 해당 칸이 채워져 있는 경우
  else{
    for(let k=1; k<=9; k++){
      if (!col[x][k] && !row[y][k] && !sq[changeIdx(y, x)][k]){ 
        // 해당 값이 그 빈칸에 들어가도 되는 값이면 -> 일단 넣어봄 -> flag 재설정
        board[y][x] = k;
        col[x][k] = true;
        row[y][k] = true;
        sq[changeIdx(y, x)][k] = true;
        // 이후 재귀 호출
        let ans = makeSu(cnt+1, board)
        if(ans != undefined) {
          // console.log(ans);
          return ans;
        }
        // 아니다 싶으면
        board[y][x] = 0;
        col[x][k] = false;
        row[y][k] = false;
        sq[changeIdx(y, x)][k] = false;
      }
    }
  }
}

const sudoku = function (board) {
  // TODO: 여기에 코드를 작성합니다.
  for(let i=0; i<9; i++){
    for(let j=0; j<9; j++){
      if(board[i][j] !== 0){
        col[j][board[i][j]] = true;
        row[i][board[i][j]] = true;
        sq[changeIdx(i, j)][board[i][j]] = true;
      }
    }
  }
  let ans = makeSu(0, board);
  return ans;
};

let board = [
  [0, 3, 0, 2, 6, 0, 7, 0, 1],
  [6, 8, 0, 0, 7, 0, 0, 9, 0],
  [1, 9, 0, 0, 0, 4, 5, 0, 0],
  [8, 2, 0, 1, 0, 0, 0, 4, 0],
  [0, 0, 4, 6, 0, 2, 9, 0, 0],
  [0, 5, 0, 0, 0, 3, 0, 2, 8],
  [0, 0, 9, 3, 0, 0, 0, 7, 4],
  [0, 4, 0, 0, 5, 0, 0, 3, 6],
  [7, 0, 3, 0, 1, 8, 0, 0, 0],
];
let output = sudoku(board);
console.log(output);