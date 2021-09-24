let a=[1, 3, 1, 2, 3, 1];

function solution(targetNum, array) {
  let answer = 0;
  let p1 = 0;
  let p2 = 0;
  let sum = 0;
  while (p2 < array.length) {
    console.log(answer)
    if (sum === 0) sum += array[p1];
    if (sum > targetNum) {
      sum -= array[p1];
      p1++;
    } else {
      answer += (p2 - p1 + 1);
      p2++;
      sum += array[p2];
    }
  }

  return answer;
}

console.log(solution(5, a));