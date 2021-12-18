const rotatedArraySearch = function (rotated, target) {
  // TODO : 여기에 코드를 작성합니다.
  let left = 0;
  let right = rotated.length - 1;

  while(left <= right) {
    mid = parseInt((left + right) / 2);
    console.log(left ,right);
    if (rotated[mid] === target) return mid;
    if (rotated[left] < rotated[mid]) {
      if (target < rotated[mid] && rotated[left] <= target) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      if (rotated[mid] < target && target <= rotated[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  return -1
};
let output = rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 1);
console.log(output); // --> 4

output = rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 100);
console.log(output); // --> -1

output = rotatedArraySearch([10, 11, 12, 3, 6, 7, 8, 9], 11);
console.log(output); // --> 1