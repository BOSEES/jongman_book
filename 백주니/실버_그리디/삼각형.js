let input = `6
2
3
2
3
2
4`;

input = input.split("\n").map((e) => parseInt(e));
const n = input.shift();

function sol(data) {
  data.sort((a, b) => b - a);

  for (let i = 0; i < n - 2; i++) {
    if (data[i] < data[i + 1] + data[i + 2]) {
      return data[i] + data[i + 1] + data[i + 2];
    }
  }

  return -1
}

console.log(sol(input))