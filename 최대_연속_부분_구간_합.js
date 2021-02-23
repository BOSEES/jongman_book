//A[] 의 연속된 구간의 최대 합을 구한다. 시간 복잡도 O(N2)

const arr = [-7, 4, -3, 6, 3, -8, 3, 4];

const test = (A) => {
  const N = arr.length;
  let ret = 0;
  let arr22 = [];

  for (let i = 0; i < N; i++) {
    for (let j = i; j < N; j++) {
      let sum = 0;
      let arr2 = [];

      for(let k = i; k <= j; k++) {
        sum += A[k];
        arr2.push(A[k]);
      }

      if(Math.max(ret, sum) > ret) {
        ret = Math.max(ret, sum);
        arr22 = arr2;
      }
    }
  }
  return {ret, arr22}
}

console.log(test(arr));

