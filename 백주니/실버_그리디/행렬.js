let input = `3 4
0000
0010
0000
1001
1011
1001`

input = input.split("\n");
let nm = input.shift().split(" ");

function sol(data) {
  let answer = 0;
  let n = parseInt(nm[0]);
  let m = parseInt(nm[1]);
  let ch = Array.from({length: n}, () => Array(m).fill(false));
  for(let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (data[i][j] !== data[i + n][j]) {
        ch[i][j] = true;
      }
    }
  }

  for (let i = 0; i < n - 2; i++) {
    for (let j = 0; j < m - 2; j++) {
      if (ch[i][j] === true) {
        for (let k = 0; k < 3; k++) {
          for (let s = 0; s < 3; s++) {
            if (ch[k][s] === true) ch[k][s] = false
            else ch[k][s] = true;
          }
        }
        answer++;
      } else {
        continue;
      }
    }
  }
  return answer;
}

console.log(sol(input));