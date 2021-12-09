const sudoku = function (board) {
  // TODO: 여기에 코드를 작성합니다.
  let n = board.length;
  const board2 = []
  for (let i = 0; i < n; i++) {
    let tempArr = [];
    for (let j = 0; j < n; j++) {  
      tempArr.push(board[j][i]);
    }
    board2.push(tempArr);
  }

  for (let i = 0; i < n; i += 3) {
    for (let j = 0; j < n; j += 3) {
      for (let k = i; k < 3 + i; k++) {
        for (let s = j; s < 3 + j; s++) {
          console.log(board[k][s]);
          if (board[k][s] === 0) {
            for (let i = 1; i <= 9; i++) {
              
            }
          } 
        }
      }
    }
  }
  
  // return board
};

const dfs = function () {

}

const setCheck = function (arr1, arr2, num) {
  // let concatArr = arr1.concat(arr2);
  const set = new Set(concatArr);
    if (set.has(num)) return false;
  return true
}


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