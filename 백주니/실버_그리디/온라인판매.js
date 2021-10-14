let input = `5 4
2
8
10
7`

input = input.split("\n");

let nm = input.shift().split(" ");

function sol(data) {
  let answer = "";
  let n = parseInt(nm[0]);
  let m = parseInt(nm[1]);
  let max = 0;
  let temp = 0;
  data = data.map((e) => parseInt(e))
  data.sort((a,b) => a - b);
  console.log(data);

  for (let i = data[0]; i < data[data.length - 1]; i++) {
    let count = 0;
    let sum = 0;
    for (let j = 0; j < m; j++) {
      if (i <= data[j]) {
        count++;
        sum += i;
      }
    }

    if (sum > max && count <= n) {
      max = Math.max(sum, max);
      temp = i;
    }
  }

  answer = `${temp} ${max}`;
  return answer;
}

console.log(sol(input))