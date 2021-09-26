let a="(((()(()()))(())()))(()())";

function solution(str) {
  let answer = 0;
  let stack = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") stack.push("(");
    else if (str[i] === ")") {
      if (str[i - 1] === "(") {
        //razer
        stack.pop();
        answer += stack.length;
      } else {
        stack.pop();
        answer++;
      }
    }
  }
  return answer;
}
console.log(solution(a))