let input = `6`;

function sol(sugar) {
  let answer = 0;
  sugar = parseInt(sugar);

  while(sugar > 0) {
    if (sugar < 3) {
      return -1;
    } else if (sugar % 5 === 0) {
      answer += sugar / 5;
      sugar = 0;
    } else {
      sugar -= 3;
      answer++;
    }
  }
  return answer;
}

console.log(sol(input));