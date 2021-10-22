let input = `3 10
10 11 13`;

input = input.split("\n").map((e) => e.split(" "));

console.log(input);
function sol(data) {
  let nm = data[0];
  let n = parseInt(nm[0]);
  let m = parseInt(nm[1]);
  let berry = data[1].map((e) => parseInt(e)).sort((a, b) => a - b);

  for (let i = 0; i < n; i++) {
    if (berry[i] <= m) {
      m++;
    } else {
      return m;
    }
  }

  return m;
}

console.log(sol(input));