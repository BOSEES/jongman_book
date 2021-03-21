let arr=[1, 2, 3, -3, -2, 5, 6, -6];

function solution(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i;  j++) {
      if (arr[j] > arr[j + 1]) {
        let swap = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = swap
      }
    }
  }
  return arr
}

console.log(solution(arr));