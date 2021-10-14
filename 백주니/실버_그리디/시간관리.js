let input = `4
3 5
8 14
5 20
1 16`;
// let input = `4
// 3 4
// 1 4
// 5 17
// 2 20`
input = input.split("\n").map((e) => e.split(" "));

function sol(data) {
  let n = parseInt(data.shift()[0]);

  data.sort((a, b) => {
    if (a[1] > b[1]) return a[1] - b[1];
    else if (a[1] === b[1]) {
      return a[0] - b[0];
    }
  })

  for (let i = 0; i <= 24; i++) {
    let temp = i;
    for (let j = 0; j < n; j++) {
      if (temp + parseInt(data[j][0]) <= parseInt(data[j][1])) {
        temp = temp + parseInt(data[j][0]);
      } else {
        if (temp === 0) {
          return -1
        } else {
          return i - 1;
        }
      }
    }
  }
}

console.log(sol(input));