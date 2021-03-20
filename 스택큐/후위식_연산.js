//문자열을 for문으로 돌면서 stack에 push();
//만약 문자열이 넘버로 변환했을때 넘버가 아니라면?
let str="352+*9-";

function solution(str) {
  let stack = [];

  for (let i = 0; i < str.length; i++) {
    if(!isNaN(str[i])) stack.push(parseInt(str[i], 10));
    else {
      let rt = stack.pop();
      let lt = stack.pop();

      if (str[i] == "+") stack.push(lt+rt)
      else if (str[i] == "-") stack.push(lt-rt)
      else if (str[i] == "*") stack.push(lt*rt)
      else if (str[i] == "/") stack.push(lt/rt)
    }
  }
  return stack[0]
}

console.log(solution(str));
