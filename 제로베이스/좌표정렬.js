let input = `5
3 4
1 1
1 -1
2 2
3 3`;

input = input.split("\n").map((e) => e.split(" "));

function sol(data) {
  let answer = "";
  data.shift();
  data = data.sort((a, b) => {
    if (a[0] > b[0]) return a[0] - b[0];
    else if (a[0] === b[0]) return  a[1] - b[1];
  })
  answer = data.map((e) => e.join(" ")).join("\n");
  return answer;
}

console.log(sol(input))