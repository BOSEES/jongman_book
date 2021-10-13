let input = 1;

function sol(data) {
  let answer = 0;
  let n = 1000 - data;
  let coin = [500,100,50,10,5,1];

  for (let i = 0; i < coin.length; i++) {
    console.log(n)
    while(n - coin[i] >= 0) {
      n -= coin[i];
      answer++;
    }
  }

  return answer;
}

console.log(sol(input));