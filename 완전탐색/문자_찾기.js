let str="COMPUTERPROGRAMMING";

function solution(str, word) {
  let result = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == word) result++;
  }
  return result
}

console.log(solution(str, 'R'));