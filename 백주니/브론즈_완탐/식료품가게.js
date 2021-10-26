let input =`9 9 12 12 12 15 16 20`;

input = input.split(" ").map((e) => parseInt(e));

function sol(data) {
  let answer = [];
  let n = data.length;

  for (let i = 0; i < n; i++) {
    let temp = data[i] / 3;
    for (let j = i + 1; j < n; j++) {
      if (data[j] !== 0) {
        if (data[i] + temp === data[j]) {
          answer.push(data[i])
          data[i] = 0;
          data[j] = 0;
        }
      } else {
        continue;
      }
    }
  }
  return answer.join(" ");
}

console.log(sol(input))

