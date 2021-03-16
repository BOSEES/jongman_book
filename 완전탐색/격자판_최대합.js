let arr=[
[10, 13, 10, 12, 15], 
[11, 25, 50, 53, 15],
[12, 39, 30, 23, 11],
[19, 27, 29, 37, 27],
[19, 13, 30, 13, 19]];

function solution(arr) {
  let sum1 = 0;
  let sum2 = 0;

  //가로, 세로 합
  for (let i = 0; i < arr.length; i++) {
    let count1 = 0;
    let count2 = 0;
    for (let j = 0; j < arr.length; j++) {
      count1 += arr[i][j];
      count2 += arr[j][i];
    }
    if (count1 > sum1) {
      sum1 = count1;
    }
    if (count2 > sum2) {
      sum2 = count2;
    }
  }
  //대각선
  let sum3 = 0;
  let sum4 = 0;
  for (let i = 0; i < arr.length; i++) {
    sum3 += arr[i][i];
    sum4 += arr[i][arr.length - 1 - i];
  }
  return Math.max(sum1,sum2,sum3,sum4);
}

console.log(solution(arr));