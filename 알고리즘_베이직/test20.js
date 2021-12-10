const insertionSort = function (arr, callback) {
  // TODO: 여기에 코드를 작성합니다.
  let sorted = [arr[0]];

  for (let i = 1; i < arr.length; i++) {
    if (callback(arr[i]) > callback(sorted[i - 1])) {
      sorted.push(arr[i]);
    } else {
      for (let j = 0; j < i; j++) {
        if (callback(arr[i]) <= callback(sorted[j])) {
          const left = sorted.slice(0, j);
          const right = sorted.slice(j);
          sorted = left.concat(arr[i], right);
          break;
        }
      }
    }
  }
  
  return sorted;
};

let output = insertionSort([3, 1, 21,20,12,9,4,5,5,5,5],(item) => item);
console.log(output); // --> [1, 3, 21]