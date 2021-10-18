// let input = `3 3
// 3 1 2
// 4 1 4
// 2 2 2`;

let input = `2 4
7 3 1 8
3 3 3 4`;

input = input.split("\n").map((e) => e.split(" ").map((x) => parseInt(x)));

let nm = input.shift();
function sol(cards) {
  let answer = 0;

  for(let i = 0; i < nm[0]; i++) {
    let min = 10000;
    for (let j = 0; j < nm[1]; j++) {
      if (min > cards[i][j]) {
        min = cards[i][j];
      }
    }
    answer = Math.max(min,answer);
  }

  return answer;
}

console.log(sol(input));