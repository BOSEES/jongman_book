const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let n;
let input;

rl.on('line', function(line) {
  if (line.includes(" ")) {
    input = line.split(" ").map((e) => parseInt(e, 10));
  } else {
    n = parseInt(line, 10);
  }
}).on("close", function() {
  console.log(solution(input));
  process.exit();
});

function solution(queue) {
  let answer = 0;
  let sum = 0;
  queue = queue.sort();
  for (let i = 0; i < n; i++) {
    sum = queue[i] + sum;
    answer += sum;
  }
  return answer;
}