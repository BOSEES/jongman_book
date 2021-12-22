const getItemFromTwoSortedArrays = function (arr1, arr2, k) {
  // TODO: 여기에 코드를 작성합니다.
  let p1 = 0;
  let p2 = 0;
  let stack = [];

  while(p1 < arr1.length && p2 < arr2.length) {
    if (arr1[p1] < arr2[p2]) {
      stack.push(arr1[p1]);
      p1++;
    } else {
      stack.push(arr2[p2]);
      p2++;
    }
  }

  if (p1 > p2) {
    for (let i = p2; i < arr2.length; i++) {
      stack.push(arr2[i])
    }
  } else {
    for (let i = p1; i < arr1.length; i++) {
      stack.push(arr1[i])
    }
  }

  return stack[k - 1]
};

// let arr1 = [1, 4, 8, 10];
// let arr2 = [2, 3, 5, 9];
// let result = getItemFromTwoSortedArrays(arr1, arr2, 6);
// console.log(result); // --> 8

arr1 = [1, 1, 2, 10];
arr2 = [2, 3, 7, 12];
result = getItemFromTwoSortedArrays(arr1, arr2, 7);
console.log(result); // --> 3