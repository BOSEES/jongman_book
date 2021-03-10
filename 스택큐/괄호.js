let input = ")()(";


function sol(input) {
  const inputArr = input.split("");
  const obj = {
    ")" : "(",
    "}" : "{"
  } 
  let stack = [];

  for (let i in inputArr) {
    if ( inputArr[i] == "(" || inputArr[i] == "{") {
      stack.push(inputArr[i]);
    } else if (obj[inputArr[i]]){
      if (stack.length === 0) {
        return false;
      } else {
        let t = obj[inputArr[i]];
        if  (t != stack.pop()){
          return false;
        }
      }
    }
  }
  console.log(stack);
  return stack.length == 0;
}

console.log(sol(input));
