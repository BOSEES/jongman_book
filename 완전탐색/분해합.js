let input = 216;
let result = 0;

function a(N) {
  let n = N.toString().split("").map((e) => parseInt(e, 10));
  return N + n.reduce((a, b) => a += b);
}

for (let i = 1; i <= input; i++) {
  if (a(i) == input) {
    result = i;
    break;
  }
}