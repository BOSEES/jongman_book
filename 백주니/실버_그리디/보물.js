let input = `5
1 1 1 6 0
2 7 8 3 1`;

input = input.split("\n").map((e) => e.split(" "));

function sol(data) {
  let answer = 0;
  const n = parseInt(data.shift());
  let A = data[0].slice();
  let B = data[1].slice();
  
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);

  console.log(A, B)
  for (let i = 0; i < n; i++) {
    answer += parseInt(A[i]) * parseInt(B[i]);
  }

  return answer;
}

console.log(sol(input))