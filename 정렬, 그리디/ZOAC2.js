let input = `ZOAC`

function solution(s) {
  let answer = 0;
  let alphabat = "ABCDEFGHIJKLNMOPQRSTUVWYZ";
  let now = alphabat.indexOf("A");

  for (let i = 0; i < s.length; i++) {
    let start = alphabat.indexOf(s[i]);
    if (Math.abs(start - now) > 12 ) {
      answer += 26 - Math.abs(start - now);
      now = start 
    } else {
      answer += Math.abs(start - now);
      now = start
    }
  }
  return answer
}

console.log(solution(input));