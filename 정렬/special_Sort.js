let arr=[1, 2, 3, -3, -2, 5, 6, -6];

function solution(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length - i - 1; j++) {
      if (arr[j] > 0 && arr[j + 1] < 0) {
        let swap = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = swap
      }
    }
  }
  return arr;
}

console.log(solution(arr));