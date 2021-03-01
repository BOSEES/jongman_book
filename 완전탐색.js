const input = ["10 500","93 181 245 214 315 36 185 138 216 295"]
function test(input) {
  let cards = input.map((e) => e.split(" "));
  let card = cards[1].map((e) => parseInt(e, 10));
  let count = cards[0];
  let max = 0;
  for (let i = 0; i < card.length; i++){
    for (let j = 0; j < card.length; j++){
      for (let k = 0; k < card.length; k++){
        let sum = card[i] + card[j] + card[k];
        
        if(sum <= count[1] && sum > max) {
          max = sum;
        }
      }
    } 
  }
  return max;
}

test(input);