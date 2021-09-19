let arr=[[5, 3, 7, 2, 3], 
        [3, 7, 1, 6, 1],
        [7, 2, 5, 3, 4],
        [4, 3, 6, 4, 1],
        [8, 7, 3, 5, 2]];

function sol(array) {
  let answer = 0;
  const n = array.length;
  const dx = [-1, 0,1, 0];
  const dy = [0, 1, 0, -1]; 

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let flag = 1;
      for (let k = 0; k < 4; k++) {
        let x = i + dx[k];
        let y = j + dy[k];
        if(x >= 0 && x < n && y >= 0 && y < n && array[i][j] <= array[x][y]) {
          flag = 0;
          break;
        }
      }
      if (flag) {
        answer++;
      }
    }
  }
  return answer;
}

console.log(sol(arr));