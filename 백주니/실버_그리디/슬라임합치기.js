let input = `3
2 2 2`;

input = input.split("\n").map((e) => {
  if (e.indexOf === -1) return parseInt(e);
  else return e.split(" ").map((x) => parseInt(x));
});

function sol(data) {
  let answer = 0;
  let n = data[0];
  let slime = data[1];
  slime.sort((a, b) => b - a);
  let sum = slime[0];

  for (let i = 1; i < n; i++) {
    answer += sum * slime[i];
    sum = sum + slime[i];
  }

  return answer;
}

console.log(sol(input));