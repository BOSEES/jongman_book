let input = `4
3
3
3
3`;

input = input.split("\n").map((e) => parseInt(e));
function sol (data) {
  let n = data.shift();
  let answer = 0;

  for (let i = 0; i < n; i++) {
    if (data[i] - (i - 1 + 1) > 0) {
      answer += data[i] - (i - 1 + 1);
    }
  }

  return answer;
}

console.log(sol(input))