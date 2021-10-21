let input = `5
4 5 2 1 4`;

input = input.split("\n").map((e) => {
  if (e.indexOf(" ") === -1) return parseInt(e);
  else return e.split(" ").map((x) => parseInt(x));
})

function sol(data) {
  let answer = 0;
  const n = data[0];
  const array = data[1];
  const ch = Array.from({length: n + 1}, () => 0);
  
  for (let i = 0; i < n; i++) {
    if (ch[array[i]] === 0) {
      answer++;
      ch[array[i] - 1]++;
    } else {
      ch[array[i]]--;
      ch[array[i] - 1]++;
    }
  }

  return answer;
}

console.log(sol(input));