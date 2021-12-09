const largestProductOfThree = function (arr) {
  // TODO: 여기에 코드를 작성합니다.
  arr.sort((a, b) => a - b);
  let result = Number.MIN_SAFE_INTEGER;
  // let ch = Array.from({length: arr.length}, () => 0);
  let temp = Array.from({length: 3} , () => 0);

  function DFS(L, start) {
    if (L >= 3) {
      console.log(temp);
      return result = Math.max(temp.reduce((acc, cur) => acc * cur), result);
    } else {
      for (let i = start; i <arr.length; i++) {
          temp[L] = arr[i];
          DFS(L + 1, i + 1);
      }
    }
  }
  DFS(0, 0);
  return result;
};

// let output = largestProductOfThree([-1, 2, -5, 7]);
// console.log(output); // --> 35 (= -1 * -5 * 7)

let output = largestProductOfThree([-5, -4, -3, -2, -1]);
console.log(output); // --> 42 (= 2 * 3 * 7)

