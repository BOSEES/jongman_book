const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const input = [];
let nk;
rl.on('line', function(line) {
  if (line.includes(" ")) {
      nk = line.split(" ").map((x) => parseInt(x, 10));
  } else {
      input.push(parseInt(line, 10));
  }
}).on("close", function() {
  console.log(solution(input));
  process.exit();
});

function solution(input) {
  let answer = 0;
  let minus = nk[1];

  for (let i = nk[0] - 1; i >= 0; i--) {
    if (minus == 0) return answer;
    if (input[i] <= nk[1]) {
      answer += parseInt(minus / input[i], 10);
      minus = minus % input[i];
    }
  }
  return answer;
}