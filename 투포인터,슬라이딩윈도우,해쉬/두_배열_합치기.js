let a=[1, 3, 5];
let b=[2, 3, 6, 7, 9];

function solution(a, b) {
  let answer = [];
  let p1 = 0;
  let p2 = 0;

  while(p1 < a.length && p2 < b.length) {
    if (a[p1] > b[p2]) {
      answer.push(b[p2]);
      p2++;
    } else {
      answer.push(a[p1]);
      p1++;
    }
  }
  while(p1 < a.length) {
    answer.push(a[p1]);
    p1++
  }
  while(p2 < b.length) {
    answer.push(b[p2]);
    p2++
  }
  return answer;
}

console.log(solution(a, b));