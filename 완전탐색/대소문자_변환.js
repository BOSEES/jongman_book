function solution(s) {
  let result = "";
  for (let i of s) {
    if (i !== i.toUpperCase()) {
      result += i.toUpperCase();
    } else {
      result += i.toLowerCase();
    }
  }

  return result;
}

console.log(solution("StuDY"));