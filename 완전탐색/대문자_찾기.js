let str="KoreaTimeGood";

function solution(str) {
  let result = 0;
  for (let i = 0; i < str.length; i++) {
    if(str[i] == str[i].toUpperCase()) result++;
  }
  return result;
}

console.log(solution(str));