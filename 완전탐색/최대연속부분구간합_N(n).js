let arr = [-7, 4, -3, 6, 3, -8, 3, 4];
//시간복잡도 O(n)
function fastestMaxSum(A) {
  let psum = 0;
  let ret = 0;

  for (let i = 0; i < A.length; i++) {
    psum = Math.max(psum, 0) + A[i];
    ret = Math.max(psum, ret);
  }

  return ret;
}

console.log(fastestMaxSum(arr));
