let str="352+*9-";

function solution(s) {
  let answer = 0;
  const array = [];

  for (let i = 0; i < s.length; i++) {
    let p1 = 0;
    let p2 = 0;
    if(isNaN(s[i])) {
      p1 = array.pop();
      p2 = array.pop();

      if(s[i] === "+") array.push(p2 + p1);
      else if (s[i] === "-") array.push(p2 - p1);
      else if (s[i] === "*") array.push(p2 * p1);
      else if (s[i] === "/") array.push(p2 / p1);
    } else {
      array.push(parseInt(s[i]));
    }
  }
  answer = array[0];
  return answer;
}

console.log(solution(str));