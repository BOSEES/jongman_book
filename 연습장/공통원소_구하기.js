let a=[1, 3, 9, 5, 2];
let b=[3, 2, 5, 7, 8];

function solution(a, b) {
  let answer = ""
  let sortA= a.sort();
  let sortB= b.sort();
  let p1 = 0;
  let p2 = 0;

  while(p1 < a.length && p2 < b.length) {
    if (sortA[p1] == sortB[p2]) {
      answer += b[p2] + " ";
      p2++
    } else if (sortA[p1] < sortB[p2]) {
      p1++
    } else {
      p2++
    }
  } 
  return answer;
}
console.log(solution(a, b));