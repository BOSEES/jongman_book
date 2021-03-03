input = [3, 6, 9, 112];

function setRoom(array) {
  let peoples = input[3];
  
  for(let i = 0; i <= 300; i += input[2]) {
    for(let j = 0; j <= 300; j += input[1]) {
      for(let k = 0; k <= 300; k += input[0]) {
        sum = i + j + k;

        if(sum == peoples) {
          return 1
          break;
        } 
      }
    }
  }
  return 0;
}

console.log(setRoom(input));