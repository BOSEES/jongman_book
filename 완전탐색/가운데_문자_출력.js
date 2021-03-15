function solution(s) { 
  let ss = s.split("");
  let result = "";
  if (ss.length % 2 == 0) {
    result = ss.slice((ss.length / 2) - 1,3).join("");
  } else {
    result = ss[Math.floor(ss.length / 2)];
  }
  return result
}

console.log(solution("study"));