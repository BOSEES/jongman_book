let str="KKHSSSSSSSE";

function solution(str) {
  let answer = [];
  let count = 1;
  answer.push(str[0]);
  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] == str[i + 1]) {
      count++;
    } else {
      if (count > 1) {
        answer.push(count);
      }
      answer.push(str[i + 1]);
      count = 1;
    }
  }
  return answer.join("");
}

console.log(solution(str));