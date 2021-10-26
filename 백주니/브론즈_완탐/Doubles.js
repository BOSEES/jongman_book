let input = `1 4 3 2 9 7 18 22 0
2 4 8 10 0
7 5 11 13 1 3 0
-1`;

input = input.split("\n").map((e) => {
  if (e.indexOf(" ") === -1) return parseInt(e);
  else return e.split(" ").map((e) => parseInt(e)).sort((a, b) => a - b);
})

function sol(data) {
  let n = data.length;
  let answer = [];

  for (let i = 0; i < n - 1; i++) {
    let temp = 0;
    for (let j = 0; j < data[i].length; j++) {
      for (let k = j + 1; k < data[i].length; k++) {
        if (data[i][j] * 2 === data[i][k]) {
          temp++;
        }
      }
    }
    answer.push(temp);
  }

  return answer;
}

console.log(sol(input))