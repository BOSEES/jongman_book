let input = `25 5`;

input = input.split(" ").map((e) => parseInt(e));
function sol(data) {
  let answer = 0;
  let n = data[0];
  let m = data[1];

  while (n > 1) {
    if (n % m !== 0) {
      n -= 1;
      answer++;
    } else {
      n = n / m;
      answer++;
    }
  }

  return answer;
}

console.log(sol(input));