let a="CBA";
let b="CBDAE";

function solution(a, b) {
  let answer = "YES";
  let queue = a.split("");

  // console.log(queue.includes("C"))
  for(let i = 0; i < b.length; i++) {
    if (queue.includes(b[i])) {
      if(queue[0] == b[i]) queue.shift();
      else return "NO";
    }
  }
  if (queue.length > 0) return "NO";
  return answer;
}

console.log(solution(a, b));