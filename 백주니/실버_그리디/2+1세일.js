let input = `4
3
2
3
2`;

input = input.split("\n").map((e) => parseInt(e));

function sol(data) {
  let answer = 0;
  const n = data.shift();
  data.sort((a, b) => b - a);

  for (let i = 0; i < n; i++) {
    if ((i + 1) % 3 !== 0) {
      answer += data[i];
    }
  }

  return answer;
}

console.log(sol(input));