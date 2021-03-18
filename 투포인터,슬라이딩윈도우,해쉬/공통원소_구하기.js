let a=[1, 3, 9, 5, 2];
let b=[3, 2, 5, 7, 8];

function solution(a, b) {
  let answer = [];
  let arr1 = a.sort();
  let arr2 = b.sort();
  let p1 = 0;
  let p2 = 0;

  while (p1 < arr1.length && p2 < arr2.length) {
    if(a[p1] < b[p2]) {
      p1++;
    } else if (a[p1] == b[p2]) {
      answer.push(a[p1]);
      p1++;
      p2++;
    } else {
      p2++;
    }
  }
  return answer
}

console.log(solution(a, b));