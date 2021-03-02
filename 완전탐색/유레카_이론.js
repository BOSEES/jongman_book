const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
rl.on('line', function (line) {
  input.push(line)
})
  .on('close', function () {
    input.shift();
    for (let i = 0; i < input.length; i++) {
        console.log(test(input[i]));
    }
  process.exit();
});

function Tn(n) {
  return n * (n + 1) / 2;
}

function test (input) {
  for (let i = 1; i < 45; i++) {
    for (let j = 1; j < 45; j++) {
      for (let k = 1; k < 45; k++) {
        sum = Tn(i) + Tn(j) + Tn(k);
        
        if(sum == input) {
          return 1
        }
      }
    }
  }
  return 0
}