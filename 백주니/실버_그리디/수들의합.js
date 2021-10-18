let input = `200`;

function sol(data) {
  let answer = 0;
  let sum = 0;
  for (let i = 1; i < data + 1; i++) {
    if (sum + i < data) {
      answer++;
      sum += i;
    }
  }

  return answer;
}

console.log(sol(input));