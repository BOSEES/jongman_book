let arr=[13, 5, 11, 7, 23, 15];

function solution(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let idx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[idx] > arr[j]) idx = j;
    }
    let swap = arr[i];
    arr[i] = arr[idx];
    arr[idx] = swap;
  }
  return arr;
}

console.log(solution(arr));