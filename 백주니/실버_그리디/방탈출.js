let input = `7
0 0 1 0 0 1 0`;

input = input.split("\n").map((e) => {
  if (e.indexOf(" ") === -1) return parseInt(e);
  else return e.split(" ").map((x) => parseInt(x));
})

function sol(data) {
  let answer = 0;
  let n = data[0];
  let button = data[1];
  let ch = Array.from({length:n}, () => 0);

  for (let i = 0; i < n; i++) {
    if (button[i] !== ch[i]) {
      answer++;
      if (i > n - 3) {
        for (let j = i; j < n; j++) {
          ch[j] = changeNum(ch[j]);
        }
      } else {
        for (let j = i; j < i + 3; j++) {
          ch[j] = changeNum(ch[j]);
        }
      }
    }
    if (button.join("") === ch.join("")) return answer;
  }

  return answer;
}

function changeNum(n) {
  return n === 1 ? 0 : 1;
}

console.log(sol(input))
