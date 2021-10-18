let input = `11
1 4
3 5
0 6
5 7
3 8
5 9
6 10
8 11
8 12
2 13
12 14`;

input = input.split("\n").map((e) => e.split(" "));
let n = parseInt(input.shift()[0]);

function sol(data) {
  data.sort((a, b) => {
    if (a[1] < b[1]) return a[1] - b[1];
    else if(a[1] === b[1]) return a[0] - b[0];
  })

  let answer = 0;
  let end = 0;

  for (let i = 0; i < n; i++) {
    if (end <= parseInt(data[i][0])) {
      end = parseInt(data[i][1]);
      answer++;
    }
  }

  return answer;
}

console.log(sol(input));