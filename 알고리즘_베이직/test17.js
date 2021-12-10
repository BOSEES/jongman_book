const binarySearch = function (arr, target) {
  // TODO : 여기에 코드를 작성합니다.
  let left = 0;
  let right = arr.length - 1;

  while(left <= right) {
    const pivot = parseInt(right + left / 2);
    if(target === arr[pivot]) return pivot;
    else if (target < arr[pivot]) {
      right = pivot - 1;
    } else {
      left = pivot + 1;
    }
  }
  
  return -1;
};


let output = binarySearch([0, 1, 2, 3, 4, 5, 6], 2);
console.log(output); // --> 2