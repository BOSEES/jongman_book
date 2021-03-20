let a = "(())((";

function solution(a) {
  if (a.length % 2 !== 0) return "NO";
  let answer = "YES";
  let stack = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i] == "(") {
      stack.push(a[i]);
    } else {
      if (stack.length == 0) {
        return "NO"
      } else {
        stack.pop();
      }
    }
  }
  if(stack.length > 0) return "NO"

  return answer
}

console.log(solution(a));