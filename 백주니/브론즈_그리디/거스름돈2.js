function sol(money) {
  let answer = 0;
  let coin = [500,100,50,10];
  for (let i = 0; i < coin.length; i++) {
    if (money - coin[i] >= 0) {
      answer += parseInt(money / coin[i]);
      money = parseInt(money % coin[i]);
    }
  }
  return answer;
}

console.log(sol(1260));// 5;