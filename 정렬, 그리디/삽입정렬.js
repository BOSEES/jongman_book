let arr=[15, 32,2,167,6,55,4,8,7,2];

function solution(arr) {
  for (let i = 1; i < arr.length; i++) {
    let tmp = arr[i];
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] > tmp) {
        arr[j + 1] = arr[j];
        arr[j] = tmp;
      } else {
        break;
      }
    }
  }
  return arr
}

console.log(solution(arr));