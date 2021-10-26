let input = `1
2
3
5
8
13
21
34
55
89`;

input = input.split("\n").map((e) => parseInt(e));

function sol(data) {
  let n = data.length;
  let answer = 0;

  for (let i = 0; i < n; i++) {
    if (answer + data[i] < 100) {
      answer += data[i];
    } else {
      if (Math.abs(answer - 100) > Math.abs (answer + data[i] - 100)) {
        return answer + data[i]
      } else if (Math.abs(answer - 100) === Math.abs (answer + data[i] - 100)){
        return answer + data[i]
      } else {
        return answer;
      }
    }
  }
}
console.log(sol(input));