let str="found7, time: study; Yduts; emit, 7Dnuof";

function solution(str) {
  let answer = "YES";
  let s = str.toLowerCase().replace(/[^a-z]/g,"");
  console.log(s);

  for (let i = 0; i < Math.floor(s.length / 2, 10); i++) {
    if (s[i] !== s[s.length - 1 - i]) return "NO";
  }
  return answer
}

console.log(solution(str));