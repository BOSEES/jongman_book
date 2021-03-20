let str="(A(BC)D)EF(G(H)(IJ)K)LM(N)";

function solution(str) {
  let stack = [];

  for(let i = 0; i < str.length; i++) {
    if(str[i] !== ")") stack.push(str[i]);
    else {
      if (stack.length == 0) return "NO";
      else {
        while(stack.pop()!=='(');
        while(stack[stack.length - 1] !== "(") {
          stack.pop();
        }
        stack.pop();
      }
    }
  }
  return stack.join("");
}

console.log(solution(str));