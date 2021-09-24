let a=[1, 3, 9, 5, 2];
let b=[3, 2, 5, 7, 8];

function solution(arr1,arr2) {
  const answer = [];
  let p1 = 0;
  let p2 = 0;

  arr1 = arr1.sort();// 사전식 정렬
  arr2 = arr2.sort();// sort() 함수는 조건을 주지 않으면 사전순으로 정렬한다.

  while(p1 < arr1.length  && p2 < arr1.length) {
    if (arr1[p1] === arr2[p2]) {
      answer.push(arr1[p1])
      p1++;
      p2++;
    } else if (arr1[p1] < arr2[p2]) {
      p1++;
    } else {
      p2++;
    }
  }
  return answer;
}

console.log(solution(a, b));