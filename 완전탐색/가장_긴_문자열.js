let str=["teacher", "time", "student", "beautiful", "good"];

function solution(s) {
  let result = s[0];
  for (let i = 1; i < s.length; i++) {
    if (result.length < s[i].length) {
      result = s[i];
    }
  }
  return result
}

console.log(solution(str));