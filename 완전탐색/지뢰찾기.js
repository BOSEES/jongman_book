// 입력
// 0 1 0 0 0
// 0 0 0 0 0
// 0 0 0 1 0
// 0 0 1 0 0
// 0 0 0 0 0
// //"0 1 0 0 0\n0 0 0 0 0\n0 0 0 1 0\n0 0 1 0 0\n0 0 0 0 0"

// 출력
// * f * 0 0
// 0 * 0 * 0
// 0 0 * f *
// 0 * f * 0
// 0 0 * 0 0

const input = `0 1 0 0 0
0 0 0 0 0
0 0 1 1 0
0 0 1 1 0
0 0 0 0 0`;

function sol(input) {
  const arr = input.split(/\n/).map((e) => e.split(" "));
  // [x - 1][y], [x + 1][y], [x][y - 1], [x][y + 1];
  for (let i = 0; i < arr.length; i++){ 
    for (let j = 0; j < arr.length; j++) {
      if (arr[i][j] == '1') {
        arr[i][j] = "f";
        
        if(i > 0  ) {
          arr[i - 1][j] = "*";
        }
        if(i < 4 ) {
          arr[i + 1][j] = "*";
        }
        if(j > 0 ) {
          arr[i][j - 1] = "*";
        }
        if(j < 4 ) {
          arr[i][j + 1] = "*";
        }
      }
    }
  }
  return arr
}

console.log(sol(input));