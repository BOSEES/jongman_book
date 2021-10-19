let input = `4
20 3
900
300
100
400
1300`;

input = input.split("\n");

const n = parseInt(input.shift());
const ab = input.shift().split(" ");

function sol(data) {
  const dow = parseInt(data.shift());
  let answer = parseInt(dow / parseInt(ab[0]));
  data = data.map((e) => parseInt(e)).sort((a,b) => b - a);

  for (let i = 1; i  <= n; i++) {
    let sum = dow;
    for (let j = 0; j < i; j++) {
      sum += data[j];
    }
    let temp = sum / (parseInt(ab[0]) + (parseInt(ab[1]) * i));

    if (answer >= temp) {
      return answer;
    } else {
      answer = temp
    }
  }

  return parseInt(answer);
}

console.log(sol(input));