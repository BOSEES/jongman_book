let a="(((()(()()))(())()))(()())";

function solution(a) {
  let answer = 0;
  let stack = [];

  for (let i = 0; i < a.length; i++) {
    if (a[i] == "(") stack.push("(");
    else {
      stack.pop();
      //레이저인지 막대기의 끝인지 판단하는 조건문.
      if (a[i - 1] == "(") answer += stack.length;
      else answer += 1;      
    }
  }
  return answer;
}

console.log(solution(a));