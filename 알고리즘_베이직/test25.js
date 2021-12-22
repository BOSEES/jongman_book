const balancedBrackets = function (str) {
  // TODO: 여기에 코드를 작성합니다.
  let stack = [];

  for(let i = 0; i < str.length; i++) {
    if (str[i] === "(" || str[i] === "[" || str[i] === "{") {
      stack.push(str[i]);
    } else {
      const target = stack[stack.length - 1];
      if (!stack.length) stack.push(str[i]);
      else if (target === "[" && str[i] !== "]") return false;
      else if (target === "{" && str[i] !== "}") return false;
      else if (target === "(" && str[i] !== ")") return false;
      else {
        stack.pop();
      }
    }
  }

  if (stack.length) {
    return false;
  }
  return true;
};


// let output = balancedBrackets('[](){}');
// console.log(output); // --> true

// output = balancedBrackets('[({})]');
// console.log(output); // --> true

let output3 = balancedBrackets(')');
console.log(output3); // --> false