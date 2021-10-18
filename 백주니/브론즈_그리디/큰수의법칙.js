let input = `5 8 3
2 4 5 4 6`;
// let input = `5 7 2
// 3 4 3 4 3`;

input = input.split("\n").map((e) => e.split(" ").map((x) => parseInt(x)));

function sol(data) {
  let answer = 0;
  const m = data[0][1];
  const k = data[0][2];
  let numbers = data[1];

  numbers.sort((a, b) => b - a);

  let count = 0;
  while(count <= m) {
    for (let i = 0; i < k; i++) {
      if (count >= m) return answer;
      answer += numbers[0];
      count++;
    }
    answer += numbers[1];
    count++;
  }
}

console.log(sol(input));