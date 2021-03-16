let arr=[130, 135, 148, 140, 145, 150, 150, 153];

function solution(arr) {
  let result = 1;
  let target = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if(arr[i] > target) {
      result++;
      target = arr[i];
    }
  }
  return result;
}

console.log(solution(arr));