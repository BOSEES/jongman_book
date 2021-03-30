let str="KKHSSSSSSSE";

function solution(str) {
  let answer = [];
  let count = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == str[i + 1]) count++
    else {
      answer.push(str[i]);
      if(count > 1) {
        answer.push(count);
        count = 1;
      }
    }
  }
  answer = answer.join("")
  return answer;
}

console.log(solution(str));