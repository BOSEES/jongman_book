let input = ["5", "55 185","58 183","88 186","60 175","46 155"];
// let input = ["5","9 3","8 2","3 9","2 8","1 7"];
function sol(input) {
  let arrSplit = input.map((e) => e.split(" "));
  let countArr = [];
  
  for (let i = 1; i < arrSplit.length; i++) { 
    let count = 1;
    
    for (let j = 1; j < arrSplit.length; j++) {  
      if(j == i) {
        continue;
      }

      if (arrSplit[i][0] < arrSplit[j][0] && arrSplit[i][1] < arrSplit[j][1]) {
        count++
      }
    }
    countArr.push(count);
  }
  return countArr.join(" ")
}

sol(input);