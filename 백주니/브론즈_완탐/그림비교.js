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
  let a = 0;
  let b = 0;
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
  console.log(array)
  let zz = Number.MAX_SAFE_INTEGER;;
  for (let i = 0; i < n; i++) {
    for(let j = i + 1; j < n; j++) {
      let count = 0;
      for (let k = 0; k < 5; k++) {
        for (let s = 0; s < 7; s++) {
          if (array[i][k][s] !== array[j][k][s]) {
            count++
          }
        }
      }
      if (zz > count) {
        a = i + 1;
        b = j + 1;
        zz = Math.min(zz, count);
      }
    }
  }
  return `${a} ${b}`
}

console.log(sol(input));