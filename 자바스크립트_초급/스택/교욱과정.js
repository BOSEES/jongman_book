let a="CBA";
let b="CABDGE";

function solution(str1, str2) {
  let answer = "YES";
  let que1 = str1.split("");
  let que2 = str2.split("");

  while (que2.length) {
    if (que1[0] === que2[0]) {
      que1.shift();
      que2.shift();
    } else {
      que2.shift();
    }
  }
  if (que1.length) return "NO";
  return answer;
}

console.log(solution(a, b));