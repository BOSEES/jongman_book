let input = `5 4
5 5
8 2
3 7
8 2`

input = input.split("\n").map((e) => e.split(" "));
let nm = input.shift();

function sol(data) {
  let answer = 0;
  data.sort((a, b) => b[0] - a[0]);
  console.log(data)
  let count = 0;
  for (let i = 0; i < nm[1]; i++) {
    if (count === nm[1] - 1) return answer;
    if (parseInt(data[i][0]) < nm[0]) {
      answer += nm[0] - data[i][0];
      count++;
    } else {
      count++;
    }
  }

  return answer;
}

console.log(sol(input));