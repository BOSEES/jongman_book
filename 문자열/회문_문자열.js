let str="goooG";

function solution(str) {
  let s = str.toLowerCase();

  for (let i = 0; i < Math.floor(s.length / 2); i++) {
    if (s[i] !== s[s.length - 1 - i]) {
      return "NO";
    }
  }

  return "YES"
}

console.log(solution(str));

