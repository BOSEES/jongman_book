let input = `216`;

input = parseInt(input);
function sol(num) {
  let answer = 1;

  while (num !== answer) {
    let temp = String(answer);
    let sum = 0;
    for (let i = 0; i < temp.length; i++) {
      sum += parseInt(temp[i]);
    }
    sum += answer;
    if (sum === num) {
      return temp;
    } else {
      answer++;
    }
  }
}

console.log(sol(input));