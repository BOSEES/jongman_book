let input = `3
3 5 9`;

input = input.split("\n").map((e) => {
  if (e.indexOf(" ") !== -1) return e.split(" ").map((x) => parseInt(x));
  else return parseInt(e);
})



function sol(data) {
  let answer = 0;
  let n = data.shift();
  let day = data.shift();
  let pay = 0;
  let count = 0;

  for (let i = 0; i < n; i++) {
    if (day[i] <= day[i + 1]) {
      pay += day[i];
      count++;
    } else {
      answer += day[i] * count;
      count = 0;
    }
  }

  return answer - pay;
}

console.log(sol(input));