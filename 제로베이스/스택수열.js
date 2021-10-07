let input = [4,3,6,8,7,5,2,1];
// let input = [1,2,5,3,4];

function sol(n,targetData) {
  let stack = [];
  let operator = [];
  let count = 0;
  for(let i = 1; i <= n; i++) {
    stack.push(i);
    operator.push("+");
    while(targetData[count] === stack[stack.length - 1] && stack.length > 0) {
      stack.pop();
      operator.push("-");
      count++
    }
  }

  if(stack.length > 0) return "NO"
  else {
    return operator.join("\n");
  }
}

console.log(sol(8,input));