let input = `2
10
15`;

input = input.split("\n").map((e) => parseInt(e));

function sol(lope) {
  let n = lope.shift();
  let answer = 0;
  lope.sort((a, b) => a - b);

  for(let i = 0; i < n; i++) {
    answer = Math.max(lope[i] * (n - i), answer);
  }

  return answer;
}

console.log(sol(input));