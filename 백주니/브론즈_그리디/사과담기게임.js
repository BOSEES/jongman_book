let input = `5 1
3
1
5
3`

input = input.split("\n");
const nm = input.shift().split(" ");

function sol(game) {
  let answer = 0;
  const n = parseInt(nm[0]);
  const m = parseInt(nm[1]);
  const j = parseInt(game.shift());
  let position = m;

  for (let i of game) {
    if (position < i) {
      answer += Math.abs(position - i);
    } else if (position - m >= i) {
      answer += position - m
    } else {
      continue;
    }
  }

  return answer;
}

console.log(sol(input));