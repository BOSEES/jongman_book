const quickSort = function (arr, callback = (item) => item) {
  // TODO: 여기에 코드를 작성합니다.
  if (arr.length <= 1) return arr;
  let pivot = arr[0];
  let left = [];
  let right = [];

  for (let i = 1; i < arr.length; i++) {
    if (callback(pivot) > callback(arr[i])) left.push(arr[i]);
    else right.push(arr[i]);
  }
  return quickSort(left).concat(pivot, quickSort(right));
};


let output = quickSort([3, 1, 21]);
console.log(output); // --> [1, 3, 21]