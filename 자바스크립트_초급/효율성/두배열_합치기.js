let a=[1, 3, 5];
let b=[2, 3, 6, 7, 9];

function solution(arr1, arr2) {
  const answer = [];
  let p1 = 0;
  let p2 = 0;

  while(arr1.length >= p1 && arr2.length >= p2) {
    if(arr1[p1] < arr2[p2]) {
      answer.push(arr1[p1]);
      p1++
    } else {
      answer.push(arr2[p2]);
      p2++
    }
  }

  if (p1 < arr1.length) {
    for (let i = p1; i < arr1.length; i++) {
      answer.push(arr1[i]);
    }
  }
  if (p2 < arr2.length) {
    for (let i = p2; i < arr2.length; i++) {
      answer.push(arr2[i]);
    }
  }

  return answer.join(" ");
}

console.log(solution(a, b));