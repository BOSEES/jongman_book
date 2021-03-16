let arr=[7, 3, 9, 5, 6, 12];

function solution(arr) {
  let result = [arr[0]];
  for (let i = 0; i < arr.length - 1; i++) {
    if(arr[i] < arr[i + 1]) {
      result.push(arr[i + 1]);
    }
  }
  return result.join(" ");
}

console.log(solution(arr));