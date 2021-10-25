let input = `3
..X....
.XXX...
.XX....
.....X.
.X...X.
...X...
..XX...
.XX....
.XX..X.
.X...X.
XX.....
X......
XX...XX
XXXX.XX
XXX..XX`;

input = input.split("\n")
function sol(data) {
  let answer = ""
  const n = data.shift();
  const array = [];
  let index = 0;
  for (let i = 0; i < n; i++) {
    let temp = [];
    for (let j = index; j < 5 + index; j++) {
      temp.push(data[j]);
    }
    array.push(temp);
    index += 5;
  }
  
  let zz = Number.MAX_SAFE_INTEGER;;
  for (let i = 0; i < n; i++) {
    let count = 0;
    for(let j = i + 1; j < n - i; j++) {
      for (let k = 0; k < 5; k++) {
        for (let s = 0; s < 7; s++) {
          if (data[i][k][s] !== data[j][k][s]) {
            count++;
          }
        }
      }
    }

    if (zz > count) {
      answer += 
    }
  }

}

console.log(sol(input));