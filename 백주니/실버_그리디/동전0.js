let input = `10 4790
1
5
10
50
100
500
1000
5000
10000
50000`;

input = input.split("\n");
let nm = input.shift().split(" ");
input = input.map((e) => parseInt(e));
function sol(data) {
  let answer = 0;
  let money = parseInt(nm[1]);
  data.sort((a, b) => b - a);

  for (let i = 0; i < parseInt(nm[0]); i++) {
    if (money - data[i] >= 0) {
      answer += parseInt(money / data[i]);
      money = money % data[i];
    }

    if (money === 0) {
      return answer;
    }
  }
}

console.log(sol(input));