let input = `5
3 1 4 3 2`;

input = input.split("\n").map((e) => {
  if (e.indexOf(" ") !== -1) return e.split(" ").map((x) => parseInt(x));
  else {
    return parseInt(e);
  }
});

function sol(data) {
  let answer = 0;
  const n = data[0];
  const people = data[1];
  people.sort((a, b) => a - b);
  let time = 0;
  for (let i = 0; i < n; i++) {
    time = people[i] + time;
    answer += time;
  }

  return answer;
}

console.log(sol(input)) 