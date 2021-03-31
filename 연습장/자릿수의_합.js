let arr=[ 235, 40, 521, 1234,  13, 123];

function solution(n, arr) {
  let answer = 0;
  let max = 0;

  for (let i = 0; i < n; i++) {
    let sum = 0;
    let temp = arr[i];

    while (temp) {
      sum += temp % 10;
      temp = Math.floor(temp / 10);
    }
    
    if (sum > answer) {
      answer = arr[i];
      max = sum;
    } else if (sum == max) {
      answer = Math.max(arr[i], answer);
    }
  }
  return answer;
}

console.log(solution(7, arr));