let a="()))((";

function solution(str) {
  let answer = "yes";
  let array = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") array.push("(");
    else if (str[i] === ")") array.pop();
  }

  if (array.length !== 0) return "NO"

  return answer;
}

console.log(solution(a));