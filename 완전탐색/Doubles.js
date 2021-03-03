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
    sol(input)
  process.exit();
});

function sol(input) {
  let array = input.map((e) => e.split(" "));
  
  for (let i = 0; i < array.length; i++) {
    let count = 0;
    if (array[i] == "-1") { 
      break
    }

    for (let j = 0; j <array[i].length; j++) {
      if (array[i][j] == "0") {
        break
      }

      for (let k = 0; k < array[i].length; k++) {
        if (array[i][j] * 2 == array[i][k]) {
          count++
        }
      }
    }
    console.log(count)
  }
}