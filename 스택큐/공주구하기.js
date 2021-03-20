
function solution(a, b) {
  let stack = []

  for(let i = 1; i <= a; i++) {
    stack.push(i);
  }
  while (stack.length > 1){
    for (let i = 0; i < b - 1; i++) {
      stack.push(stack.shift());
    }
    stack.shift();
  }

  return stack[0];
} 

console.log(solution(8, 3));