function solution(s) {
  let result = "";

  for (let i = 0; i < s.length; i++) {
    if (!result.includes(s[i])) {
      result += s[i];
    }
  }
  return result;
}

console.log(solution("ksekkset"));