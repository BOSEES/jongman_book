let input = `3
124
25
194`;

input = input.split("\n");

function sol(data) {
  const answer = [];
  let n = parseInt(data.shift());
  let coin = [25, 10, 5, 1];
  data = data.map((e) => parseInt(e));
  

  for (let i = 0; i < n; i++) {
    let coins = [0,0,0,0];
    let index = 0;
    let temp = data[i];
    while(index < 4) {
      coins[index] = parseInt(temp / coin[index]);
      temp = temp % coin[index];
      index++;
    }
    answer.push(coins);
  }

  return answer.map((e) => e.join(" ")).join("\n");
}

console.log(sol(input));