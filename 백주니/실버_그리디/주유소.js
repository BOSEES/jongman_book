let input = `4
3 3 4
1 1 1 1`;

input = input.split("\n").map((e) => {
  if (e.indexOf(" ") === -1) return parseInt(e);
  else return e.split(" ").map((x) => parseInt(x));
})

function sol(data) {
  let answer = 0;
  const n = data[0];
  let road = data[1];
  let pay = data[2];
  let min = Number.MAX_SAFE_INTEGER;
  let k = road.reduce((a, b) => a + b, 0);

  for (let i = 1; i < n - 1; i++) {
    if (min > pay[i]) {
      min = pay[i];
    }
  }

  for (let i = 0; i < n - 1; i++) {
    if (pay[i] === min) {
      return answer + (k * min);
    } else {
      answer += pay[i] * road[i];
      k -= road[i];
    }
  }

  return answer;
}

console.log(sol(input));