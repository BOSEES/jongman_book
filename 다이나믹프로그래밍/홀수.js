const arr=[12, 77, 38, 41, 53, 92, 85];

function solution(arr) {
  let sum = 0;
  let oddNum = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      sum += arr[i];
      oddNum.push(arr[i]);
    }
  }
  console.log(sum);
  return Math.min.apply(null, oddNum);
}

console.log(solution(arr));