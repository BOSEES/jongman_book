function solution(s) {
  let sArr = s.split("");
  let arr = [sArr[0]];

  for (let i = 1; i < sArr.length; i++) {
    if(arr.indexOf(sArr[i])) {
      arr.push(sArr[arr.indexOf(sArr[i])]);
    } 
  }
  console.log(arr)
  // return arr.join("");
}

console.log(solution("ksekkset"));