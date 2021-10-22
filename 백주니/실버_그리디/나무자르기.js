let input = `5
1 3 2 4 6
2 7 3 4 1`;

input = input.split("\n").map((e) => {
  if (e.indexOf(" ") === -1) return parseInt(e);
  else return e.split(" ").map((x) => parseInt(x));
})

function sol(data) {
  let answer = 0;
  let n = data[0];
  let trees = data[1];
  let plus = data[2];

  for (let i = 0)

  return answer;
}

console.log(sol(input))