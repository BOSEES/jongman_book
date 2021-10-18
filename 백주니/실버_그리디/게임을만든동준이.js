let input = `4
5
3
7
5`;

input = input.split("\n").map((e) => parseInt(e));

function sol(game) {
  let n = game.shift();
  let answer = 0;

  for (let i = n - 1; i > 0; i--) {
    if (game[i] <= game[i - 1]) {
      let temp = Math.abs(game[i] - game[i - 1] - 1)
      answer += temp;
      game[i - 1] -= temp;
    }
  }
  
  return answer;
}

console.log(sol(input))