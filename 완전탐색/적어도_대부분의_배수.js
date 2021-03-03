var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split(' ');

function sol(input) {
  let count = 0;
  
  while (true) {
    count++;
    let result = 0;

    for (let i = 0; i < input.length; i++) {
      if (count % input[i] == 0){
        result++
      } 
    }
    
    if (result >= 3) {
      return count;
    }
  }
}

console.log(sol(input))