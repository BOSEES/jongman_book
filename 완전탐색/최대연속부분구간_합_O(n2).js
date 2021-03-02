//arr.length = 8
let arr = [-7, 4, -3, 6, 3, -8, 3, 4];
// 시간복잡도 O(N2);
const test = (A) => {
  const N = arr.length;
  let ret = 0;
  let arr2;
  for (let i = 0; i < N; i++) {
    let sum = 0;
    let arr1 = [];

    for (let j = i; j < N; j++) {
      sum += A[j];
      arr1.push(A[j]);

      if (Math.max(ret, sum) > ret) {
        console.log(arr2);
        console.log(sum);
        arr2 = arr1;
        ret = Math.max(ret, sum);
      }
    }
  }
  return { ret, arr2 };
};

console.log(test(arr));
