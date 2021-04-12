let arr = [130,135,148,145,150,150,153];

function solution(n, arr) {
  let answer = 1;
  let target = arr[0]
  for (let i = 1; i < arr.length; i++) {
    if (target < arr[i]) {
      answer++;
      target = arr[i];
    }
  }
  return answer;
}

console.log(solution(8, arr));