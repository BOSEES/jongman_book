const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const input = [];

rl.on('line', function(line) {
  input.push(parseInt(line));
}).on("close", function() {
  console.log(solution(input));
  process.exit();
});

function solution(input){
  const n = input.shift();
  let answer = 0;
  
  for (let i = n - 1; i > 0; i--){
    if (input[i] <= input[i - 1]) {
      let count = input[i - 1] - input[i] + 1;
      input[i - 1] = input[i] - 1;
      answer+= count;
    }
  }
  return answer;
}